// Single router Lambda for all /api/* routes (HTTP API payload v2).
// One function = shared warm plan data, one bundle, one IAM surface.
import { OAuth2Client } from "google-auth-library";
import { GetCommand, PutCommand, UpdateCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming";
import { ddb, TABLE } from "../lib/dynamo.mjs";
import { getSecret } from "../lib/ssm.mjs";
import { issueSession, verifySession, readCookie, sessionCookie } from "../lib/session.mjs";
import { ok, bad, unauth, notFound, oops, json } from "../lib/http.mjs";
import { PLAN, SAFETY, retrieve } from "../lib/plan.mjs";
import { programmePosition, todaySchedule, timeBucket, aqiVerdict, nextAction, scanRedFlags } from "../lib/engine.mjs";
import { converse, postCheck, DISCLAIMER } from "../lib/bedrock.mjs";
import { computePersonal, personalSummary } from "../lib/personal.mjs";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SECRET_PARAM = process.env.GOOGLE_SECRET_PARAM || "/anviinnovate/google/client_secret";
const SOFT_CAP_USD = Number(process.env.SOFT_CAP_USD || "10");
const polly = new PollyClient({});
const today = (tzOff) => new Date(Date.now() + (tzOff || 330) * 60000).toISOString().slice(0, 10);

/* ---------- auth ---------- */
async function requireUser(event) {
  const claims = await verifySession(readCookie(event));
  if (!claims) return null;
  return { id: claims.sub, email: claims.email, name: claims.name };
}

/* ---------- user state assembly (the state block, docs 03.2) ---------- */
async function loadState(user, q) {
  const tzOff = Number(q.tz ?? 330); // minutes east of UTC; default IST
  const now = new Date(Date.now() + tzOff * 60000);
  const dateStr = now.toISOString().slice(0, 10);
  const hour = now.getUTCHours() + now.getUTCMinutes() / 60;
  const [profile, gates, logs] = await Promise.all([
    ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "PROFILE" } })),
    ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "GATES" } })),
    ddb.send(new QueryCommand({ TableName: TABLE, KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
      ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":s": `LOG#${dateStr}` } })),
  ]);
  const p = profile.Item || {};
  const g = gates.Item || {};
  const logsToday = {};
  for (const it of logs.Items || []) logsToday[it.slot] = it.status;
  // gap: most recent log before today
  const recent = await ddb.send(new QueryCommand({ TableName: TABLE, KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
    ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":s": "LOG#" }, ScanIndexForward: false, Limit: 1 }));
  let gapDays = 0;
  if (recent.Items?.[0]) {
    const last = recent.Items[0].SK.slice(4, 14);
    gapDays = Math.max(0, Math.floor((new Date(dateStr) - new Date(last)) / 86400000));
  } else gapDays = 0;
  const personal = computePersonal(p);
  const pos = programmePosition(p.startDate, now);
  const sched = todaySchedule(pos);
  const aqi = q.aqi != null ? Number(q.aqi) : null; // client-fetched (Open-Meteo) to keep Lambda offline-tolerant
  return { user, profile: p, personal, pos, sched, hour, bucket: timeBucket(hour), dateStr, tzOff,
    logsToday, gapDays, aqi,
    gates: { intervalsCleared: !!g.intervalsCleared && !personal.hardGate, bloodPanelReviewed: !!g.bloodPanelReviewed, redFlagPending: !!g.redFlagPending },
    modes: { sick: !!p.modeSick, travel: !!p.modeTravel, festival: !!p.modeFestival } };
}

function stateSummary(st) {
  const s = st.sched.session;
  return [
    personalSummary(st.personal),
    `Programme: ${st.pos.started ? `day ${st.pos.day}, week ${st.pos.week}${st.pos.maintenance ? " (maintenance — repeating weeks 9–12)" : ""}, phase ${st.pos.phase}` : "not started (no start date set)"}.`,
    s ? `Today's session: ${s.name} (${s.min} min, type ${s.type})${s.note ? " — " + s.note : ""}. Logged: ${st.logsToday.SES || "not yet"}.` : "",
    st.sched.meals ? `Today's meals from the rotation (answer meal questions with THESE, by name): ${["breakfast","snackAM","lunch","snackPM","dinner"].map(k => `${k}: ${st.sched.meals[k]} (${st.sched.meals[k].split("+").map(c => PLAN.recipes[c.trim()]?.name || c.trim()).join(" + ")})`).join("; ")}. Logged meals: ${Object.keys(st.logsToday).filter(k=>k!=="SES").join(", ") || "none"}.` : "",
    `Local time bucket: ${st.bucket}. Date ${st.dateStr}.`,
    st.aqi != null ? aqiVerdict(st.aqi).text : "",
    `Gates: intervals ${st.gates.intervalsCleared ? "CLEARED" : "LOCKED (doctor clearance pending)"}; blood panel ${st.gates.bloodPanelReviewed ? "reviewed" : "NOT yet reviewed"}.`,
    Object.entries(st.modes).filter(([,v])=>v).map(([k])=>`${k} mode ON`).join("; "),
    st.gapDays >= 5 ? `NOTE: no logs for ${st.gapDays} days — comeback rules apply.` : "",
  ].filter(Boolean).join("\n");
}

const SYSTEM = `You are Sana, the personal healthspan coach at health.anviinnovate.com, built on the Healthspan Blueprint (a reference document written for a 35 y / 65 kg profile).
You are a coach, NOT a clinician. Hard rules you must never break:
- Never diagnose, never name or dose any medicine or supplement, never interpret lab values beyond "take this to your doctor".
- If symptoms are mentioned, defer to the plan's §15 stop rules and tell the user to see a doctor.
- Ground every plan claim in the CONTEXT block or the PLAN EXTRACTS given; if they don't cover it, say so and point to the plan section.
- The NEXT-ACTION block, when present, is computed by a deterministic engine and is correct — phrase it warmly, don't contradict it.
- Keep answers short: one concrete action, one reason, one section reference like (§3.6). Plain language. No bullet walls.
- The user's diet, times and equipment come from the context; never assume otherwise.
- "What should I eat" questions: answer with TODAY'S rotation slot from the context, by recipe name. Restaurant/travel rules only apply if the user says they are eating out.
- ALWAYS use the PERSONAL block's numbers (calories, protein, HR zones, portions) for this user — the document's own numbers are for the reference profile, not them. If PERSONAL says the profile is incomplete, invite them to finish onboarding instead of quoting reference numbers.`;

async function costGuard(user, addUsd = 0) {
  const mm = new Date().toISOString().slice(0, 7);
  const r = await ddb.send(new UpdateCommand({ TableName: TABLE,
    Key: { PK: `COST#${mm}`, SK: `USER#${user.id}` },
    UpdateExpression: "ADD usd :a, calls :one", ExpressionAttributeValues: { ":a": addUsd, ":one": 1 },
    ReturnValues: "ALL_NEW" }));
  return (r.Attributes?.usd || 0) < SOFT_CAP_USD;
}
const estUsd = (u) => ((u.inputTokens || 0) * 0.06 + (u.outputTokens || 0) * 0.24) / 1e6; // Nova Lite approx

/* ---------- chat core (shared by /chat and /voice) ---------- */
const threadTitle = (t) => t.replace(/\s+/g, " ").trim().slice(0, 48) || "New chat";
async function loadThreadHistory(user, threadId, n = 12) {
  if (!threadId) return [];
  const r = await ddb.send(new QueryCommand({ TableName: TABLE,
    KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
    ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":s": `CHAT#${threadId}#` },
    ScanIndexForward: false, Limit: n }));
  return (r.Items || []).reverse().map((it) => ({ role: it.role, text: it.text }));
}
async function touchThread(user, threadId, firstMsg) {
  await ddb.send(new UpdateCommand({ TableName: TABLE,
    Key: { PK: `USER#${user.id}`, SK: `THREAD#${threadId}` },
    UpdateExpression: "SET updatedAt = :u, title = if_not_exists(title, :t) ADD n :one",
    ExpressionAttributeValues: { ":u": new Date().toISOString(), ":t": threadTitle(firstMsg), ":one": 1 } }));
}
async function answer(user, st, message, history) {
  const rf = scanRedFlags(message);
  if (rf) {
    await ddb.send(new PutCommand({ TableName: TABLE, Item: { PK: `USER#${user.id}`, SK: "GATES",
      ...( (await ddb.send(new GetCommand({TableName:TABLE,Key:{PK:`USER#${user.id}`,SK:"GATES"}}))).Item || {}),
      redFlagPending: true, redFlagAt: new Date().toISOString(), redFlagGroup: rf.group } }));
    return { text: rf.response, kind: "redflag", deepLink: "#s15", model: "none" };
  }
  const act = nextAction(st);
  const isWhatNow = /\b(what (should|do) i do|what now|next|abhi kya)\b/i.test(message);
  const knowledge = retrieve(message, 4);
  // Context lives in the SYSTEM prompt so Bedrock Guardrails evaluates only the
  // user's own words — our injected state block otherwise trips PROMPT_ATTACK
  // (found in e2e testing; pre-mortem over-blocking case).
  const context = `\n\nCONTEXT (current state):\n${stateSummary(st)}\n\nNEXT-ACTION (deterministic engine — trust it): ${act.text}\n\nPLAN EXTRACTS:\n${knowledge.map(c => `[${c.sid}${c.h3 ? " · " + c.h3 : ""}] ${c.text.slice(0, 900)}`).join("\n---\n")}`;
  if (!(await costGuard(user))) return { text: "Monthly AI budget cap reached — the Today tab and plan keep working; chat resumes next month (or raise the cap in the stack config).", kind: "capped", model: "none" };
  // Bedrock Converse requires: first message user, strict user/assistant alternation.
  // Sanitize whatever the client sent (drop leading assistant turns, merge consecutive
  // same-role turns, drop a trailing user turn so our new message keeps alternation).
  const hist = [];
  for (const h of (history || []).slice(-8)) {
    if (!h || typeof h.text !== "string" || !h.text.trim()) continue;
    const role = h.role === "user" ? "user" : "assistant";
    if (!hist.length && role === "assistant") continue;
    if (hist.length && hist[hist.length - 1].role === role)
      hist[hist.length - 1].content[0].text += "\n" + h.text.slice(0, 1500);
    else hist.push({ role, content: [{ text: h.text.slice(0, 1500) }] });
  }
  if (hist.length && hist[hist.length - 1].role === "user") hist.pop();
  const messages = [...hist, { role: "user", content: [{ text: message }] }];
  const tier = /review|change the plan|revise|month|progress so far/i.test(message) ? "pro" : "lite";
  let r = await converse({ system: SYSTEM + context, messages, tier });
  const chk = postCheck(r.text);
  if (!chk.ok) r = { ...r, text: act.text + DISCLAIMER };
  if (r.blocked) r.text = "I can't help with that one (it crossed into medical territory the plan reserves for doctors — §15). The nearest thing I *can* do: explain what the plan itself says, or help you prepare questions for your doctor.";
  const medical = /doctor|pain|symptom|bp|blood|sleep apn|dizz/i.test(message);
  const text = r.text + (medical && !r.text.includes("Coach, not clinician") ? DISCLAIMER : "");
  await costGuard(user, estUsd(r.usage));
  return { text, kind: isWhatNow ? act.kind : "chat", deepLink: act.deepLink, model: tier, usage: r.usage };
}

async function logChat(user, threadId, role, text, meta = {}) {
  await ddb.send(new PutCommand({ TableName: TABLE, Item: {
    PK: `USER#${user.id}`, SK: `CHAT#${threadId}#${String(Date.now()).padStart(14, "0")}#${role}`, role,
    text: text.slice(0, 4000), ...meta,
    ttl: Math.floor(Date.now() / 1000) + 180 * 86400 } }));
}

/* ---------- handler ---------- */
export const handler = async (event) => {
  const method = event.requestContext?.http?.method;
  const path = event.rawPath || "";
  const q = event.queryStringParameters || {};
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch {}
  try {
    if (method === "OPTIONS") return ok({});

    /* ---- auth ---- */
    if (path === "/api/auth/google" && method === "POST") {
      if (!body.code) return bad("missing code");
      const secret = await getSecret(GOOGLE_SECRET_PARAM);
      const client = new OAuth2Client(GOOGLE_CLIENT_ID, secret, "postmessage");
      let payload;
      try {
        const { tokens } = await client.getToken(body.code);
        payload = (await client.verifyIdToken({ idToken: tokens.id_token, audience: GOOGLE_CLIENT_ID })).getPayload();
      } catch (e) { console.error("google auth failed", e?.message); return unauth("google auth failed"); }
      const user = { id: `g_${payload.sub}`, email: payload.email, name: payload.name || payload.email };
      await ddb.send(new UpdateCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "PROFILE" },
        UpdateExpression: "SET email = :e, #n = :n, lastLoginAt = :now, createdAt = if_not_exists(createdAt, :now)",
        ExpressionAttributeNames: { "#n": "name" },
        ExpressionAttributeValues: { ":e": user.email, ":n": user.name, ":now": new Date().toISOString() } }));
      const token = await issueSession(user);
      return ok({ user }, [sessionCookie(token)]);
    }
    if (path === "/api/auth/logout" && method === "POST") return ok({ ok: true }, [sessionCookie("gone", 0)]);

    const user = await requireUser(event);
    if (path === "/api/auth/me") return user ? ok({ user }) : unauth();
    if (!user) return unauth();

    /* ---- profile & gates ---- */
    if (path === "/api/profile" && method === "GET") {
      const [p, g] = await Promise.all([
        ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "PROFILE" } })),
        ddb.send(new GetCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "GATES" } })),
      ]);
      return ok({ profile: p.Item || {}, gates: g.Item || {} });
    }
    if (path === "/api/profile" && method === "PUT") {
      const allowed = ["startDate", "diet", "gym", "modeSick", "modeTravel", "modeFestival", "homeCity", "age", "sex", "heightCm", "weightKg", "activity", "health", "family", "equipment", "timeBudget"];
      const sets = [], names = {}, vals = {};
      for (const k of allowed) if (k in body) { sets.push(`#${k} = :${k}`); names[`#${k}`] = k; vals[`:${k}`] = body[k]; }
      if (!sets.length) return bad("nothing to update");
      await ddb.send(new UpdateCommand({ TableName: TABLE, Key: { PK: `USER#${user.id}`, SK: "PROFILE" },
        UpdateExpression: "SET " + sets.join(", "), ExpressionAttributeNames: names, ExpressionAttributeValues: vals }));
      return ok({ ok: true });
    }
    if (path === "/api/gates" && method === "PUT") {
      // Explicit user attestation only (docs 06). ackRedFlag clears the coaching lock.
      const item = { PK: `USER#${user.id}`, SK: "GATES" };
      const cur = (await ddb.send(new GetCommand({ TableName: TABLE, Key: item }))).Item || item;
      if (body.bloodPanelReviewed != null) { cur.bloodPanelReviewed = !!body.bloodPanelReviewed; cur.bloodPanelAt = new Date().toISOString(); }
      if (body.intervalsCleared != null) { cur.intervalsCleared = !!body.intervalsCleared; cur.intervalsAt = new Date().toISOString(); cur.intervalsSource = "user-attested doctor clearance"; }
      if (body.ackRedFlag) { cur.redFlagPending = false; cur.redFlagAckAt = new Date().toISOString(); cur.redFlagAckChoice = body.ackRedFlag; }
      await ddb.send(new PutCommand({ TableName: TABLE, Item: { ...item, ...cur } }));
      return ok({ gates: cur });
    }

    /* ---- logging ---- */
    if (path === "/api/log" && method === "POST") {
      const { slot, status, date, note, weightKg, sleepH } = body;
      const d = date || today(Number(q.tz ?? 330));
      if (weightKg != null) { await ddb.send(new PutCommand({ TableName: TABLE, Item: { PK: `USER#${user.id}`, SK: `WT#${d}`, weightKg: Number(weightKg) } })); return ok({ ok: true }); }
      if (sleepH != null) { await ddb.send(new PutCommand({ TableName: TABLE, Item: { PK: `USER#${user.id}`, SK: `LOG#${d}#SLEEP`, slot: "SLEEP", status: String(sleepH) } })); return ok({ ok: true }); }
      if (!slot || !status) return bad("slot and status required");
      await ddb.send(new PutCommand({ TableName: TABLE, Item: { PK: `USER#${user.id}`, SK: `LOG#${d}#${slot}`, slot, status, note, at: new Date().toISOString(), source: body.source || "chip" } }));
      return ok({ ok: true });
    }
    if (path === "/api/log" && method === "GET") {
      const from = q.from || today(330).slice(0, 8) + "01";
      const r = await ddb.send(new QueryCommand({ TableName: TABLE,
        KeyConditionExpression: "PK = :p AND SK BETWEEN :a AND :b",
        ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":a": `LOG#${from}`, ":b": `LOG#9999` } }));
      const w = await ddb.send(new QueryCommand({ TableName: TABLE,
        KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
        ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":s": "WT#" }, ScanIndexForward: false, Limit: 30 }));
      return ok({ logs: r.Items || [], weights: (w.Items || []).reverse() });
    }

    /* ---- today (state + engine, no AI) ---- */
    if (path === "/api/today") {
      const st = await loadState(user, q);
      const act = nextAction(st);
      return ok({ pos: st.pos, personal: st.personal, session: st.sched.session, meals: st.sched.meals, bucket: st.bucket,
        logsToday: st.logsToday, gates: st.gates, modes: st.modes, gapDays: st.gapDays,
        aqi: st.aqi != null ? aqiVerdict(st.aqi) : null, next: act,
        recipes: st.sched.meals ? Object.fromEntries(Object.values(st.sched.meals).flatMap(v => v.split("+")).map(c => c.trim()).filter(c => PLAN.recipes[c]).map(c => [c, PLAN.recipes[c]])) : {} });
    }

    /* ---- chat ---- */
    if (path === "/api/chat" && method === "POST") {
      if (!body.message) return bad("message required");
      const threadId = /^[0-9]{10,16}$/.test(String(body.thread || "")) ? String(body.thread) : String(Date.now());
      const [st, hist] = await Promise.all([loadState(user, q), loadThreadHistory(user, threadId)]);
      const a = await answer(user, st, body.message, hist);
      await touchThread(user, threadId, body.message);
      await logChat(user, threadId, "user", body.message);
      await logChat(user, threadId, "assistant", a.text, { kind: a.kind, model: a.model });
      return ok({ ...a, thread: threadId });
    }

    /* ---- chat threads: list + history (server keeps the context window) ---- */
    if (path === "/api/threads" && method === "GET") {
      const r = await ddb.send(new QueryCommand({ TableName: TABLE,
        KeyConditionExpression: "PK = :p AND begins_with(SK, :s)",
        ExpressionAttributeValues: { ":p": `USER#${user.id}`, ":s": "THREAD#" } }));
      const threads = (r.Items || []).map((it) => ({ id: it.SK.slice(7), title: it.title, updatedAt: it.updatedAt, n: it.n }))
        .sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || "")).slice(0, 20);
      return ok({ threads });
    }
    if (path === "/api/thread" && method === "GET") {
      const id = String(q.id || "");
      if (!/^[0-9]{10,16}$/.test(id)) return bad("thread id required");
      const msgs = await loadThreadHistory(user, id, 60);
      return ok({ id, messages: msgs });
    }

    /* ---- voice: PCM16 mono 16k base64 in → transcript + answer + mp3 out ---- */
    if (path === "/api/voice" && method === "POST") {
      if (!body.audio) return bad("audio (base64 pcm16 16k mono) required");
      const pcm = Buffer.from(body.audio, "base64");
      if (pcm.length > 2_000_000) return bad("audio too long (60 s max)");
      const ts = new TranscribeStreamingClient({});
      async function* feed() { for (let i = 0; i < pcm.length; i += 16000) yield { AudioEvent: { AudioChunk: pcm.subarray(i, i + 16000) } }; }
      const tr = await ts.send(new StartStreamTranscriptionCommand({
        LanguageCode: "en-IN", MediaEncoding: "pcm", MediaSampleRateHertz: 16000, AudioStream: feed() }));
      let transcript = "";
      for await (const ev of tr.TranscriptResultStream) {
        for (const res of ev.TranscriptEvent?.Transcript?.Results || [])
          if (!res.IsPartial) transcript += (res.Alternatives?.[0]?.Transcript || "") + " ";
      }
      transcript = transcript.trim();
      if (!transcript) return ok({ transcript: "", text: "I couldn't hear that — try again a little closer to the mic.", audio: null });
      const threadId = /^[0-9]{10,16}$/.test(String(body.thread || "")) ? String(body.thread) : String(Date.now());
      const [st, hist] = await Promise.all([loadState(user, q), loadThreadHistory(user, threadId)]);
      const a = await answer(user, st, transcript, hist);
      await touchThread(user, threadId, transcript);
      await logChat(user, threadId, "user", transcript, { mode: "voice" });
      await logChat(user, threadId, "assistant", a.text, { kind: a.kind, mode: "voice" });
      a.thread = threadId;
      const spoken = a.text.replace(/\(§[\d.]+[^)]*\)/g, "").replace(/[_*#]/g, "").slice(0, 700);
      const pr = await polly.send(new SynthesizeSpeechCommand({ Engine: "neural", VoiceId: "Kajal", LanguageCode: "en-IN", OutputFormat: "mp3", Text: spoken }));
      const audio = Buffer.from(await pr.AudioStream.transformToByteArray()).toString("base64");
      return ok({ transcript, ...a, audio });
    }

    /* ---- nav events ---- */
    if (path === "/api/events" && method === "POST") {
      const evs = (body.events || []).slice(0, 20);
      await Promise.all(evs.map(e => ddb.send(new PutCommand({ TableName: TABLE, Item: {
        PK: `USER#${user.id}`, SK: `NAV#${Date.now()}#${Math.random().toString(36).slice(2, 6)}`,
        section: String(e.section || "").slice(0, 40), dwell: e.dwell, ttl: Math.floor(Date.now() / 1000) + 180 * 86400 } }))));
      return ok({ ok: true });
    }

    /* ---- export / delete ---- */
    if (path === "/api/export") {
      const r = await ddb.send(new QueryCommand({ TableName: TABLE, KeyConditionExpression: "PK = :p",
        ExpressionAttributeValues: { ":p": `USER#${user.id}` } }));
      return json(200, { exportedAt: new Date().toISOString(), items: r.Items || [] });
    }
    if (path === "/api/delete" && method === "POST") {
      if (body.confirm !== user.email) return bad("POST {confirm: <your email>} to delete everything");
      let lek, n = 0;
      do {
        const r = await ddb.send(new QueryCommand({ TableName: TABLE, KeyConditionExpression: "PK = :p",
          ExpressionAttributeValues: { ":p": `USER#${user.id}` }, ExclusiveStartKey: lek }));
        for (const it of r.Items || []) { await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { PK: it.PK, SK: it.SK } })); n++; }
        lek = r.LastEvaluatedKey;
      } while (lek);
      return ok({ deleted: n }, [sessionCookie("gone", 0)]);
    }

    return notFound();
  } catch (e) {
    console.error("handler error", path, e);
    return oops();
  }
};
