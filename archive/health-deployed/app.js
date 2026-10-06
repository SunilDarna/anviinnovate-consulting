/* Sana — vanilla SPA. Sana is the site home; the plan document lives at /plan/. */
"use strict";
const GOOGLE_CLIENT_ID = "736690706364-54tc00o4sdod1d02vdalqc9slpa67ao5.apps.googleusercontent.com";
const TABS = ["today", "ask", "plan", "progress", "settings"];
const $ = (s, r = document) => r.querySelector(s);
const view = $("#view");
const state = { user: null, aqi: null, history: [], tab: "today", justSignedOut: false, thread: null, threads: [], profile: null };

/* ---------- api ---------- */
const api = async (path, opts = {}) => {
  const q = new URLSearchParams({ tz: String(-new Date().getTimezoneOffset()), ...(state.aqi != null ? { aqi: state.aqi } : {}) });
  const r = await fetch(`/api${path}${path.includes("?") ? "&" : "?"}${q}`, {
    method: opts.method || (opts.body ? "POST" : "GET"),
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (r.status === 401 && !path.startsWith("/auth")) { state.user = null; setTab("today"); throw new Error("unauth"); }
  return r.json();
};
const toast = (t, ms = 2400) => { const d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.append(d); setTimeout(() => d.remove(), ms); };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// §3.6 → link to /plan/#s3 (anchor ids are whole sections; show the full ref text)
const md = (s) => esc(s)
  .replace(/§(\d+)(\.\d+)*/g, (m, sec) => `<a href="/plan/#s${sec}" target="_blank" rel="noopener">${m}</a>`)
  .replace(/_([^_\n]+)_/g, "<i>$1</i>").replace(/\*\*([^*\n]+)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");

/* ---------- AQI (Open-Meteo, free, client-side) ---------- */
async function fetchAqi() {
  try {
    const pos = await new Promise((res, rej) => navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej, { timeout: 4000, maximumAge: 1800000 }) : rej());
    const r = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current=us_aqi`);
    const j = await r.json();
    const v = j.current?.us_aqi;
    state.aqi = v == null ? null : Math.round(v);
  } catch { state.aqi = null; }
}

/* ---------- nav events ---------- */
let navBuf = [];
const trackNav = (section) => { if (state.user) { navBuf.push({ section, at: Date.now() }); if (navBuf.length >= 5) flushNav(); } };
const flushNav = () => { if (navBuf.length && state.user) { const e = navBuf.splice(0); api("/events", { body: { events: e } }).catch(() => {}); } };
addEventListener("pagehide", flushNav);

/* ---------- routing: hash <-> tab, Plan goes to the document ---------- */
function setTab(tab, push = true) {
  if (tab === "plan") { location.href = "/plan/"; return; }
  if (!TABS.includes(tab)) tab = "today";
  state.tab = tab;
  document.querySelectorAll("#tabs button").forEach((b) => {
    b.classList.toggle("on", b.dataset.tab === tab);
    b.setAttribute("aria-selected", b.dataset.tab === tab);
  });
  if (push && location.hash !== "#" + tab) history.replaceState(null, "", "#" + tab);
  trackNav(tab);
  render();
}
addEventListener("hashchange", () => setTab(location.hash.slice(1) || "today", false));
$("#tabs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setTab(b.dataset.tab); });

/* ---------- welcome (login landing) / signed-out landing ---------- */
function welcomeView() {
  view.innerHTML = "";
  view.append($("#t-welcome").content.cloneNode(true));
  $("#who").textContent = "";
  askbar.classList.remove("on");
  if (state.justSignedOut) { $("#signin-note").textContent = "Signed out. Your data is safe in your account — sign back in any time."; state.justSignedOut = false; }
  $("#signin").onclick = () => {
    if (!window.google?.accounts?.oauth2) return toast("Google sign-in is still loading — try again in a second");
    google.accounts.oauth2.initCodeClient({
      client_id: GOOGLE_CLIENT_ID, scope: "openid email profile", ux_mode: "popup",
      callback: async (resp) => {
        if (!resp.code) return toast("Sign-in cancelled");
        const r = await api("/auth/google", { body: { code: resp.code } });
        if (r.user) { state.user = r.user; toast(`Welcome, ${r.user.name?.split(" ")[0] || "there"}!`); setTab("today"); }
        else toast(r.error || "Sign-in failed");
      },
    }).requestCode();
  };
}

/* ---------- TODAY ---------- */
const chipRow = (slot, cur) => `<span class="chiprow" data-slot="${slot}">
  ${["Done", "Partial", "Skipped"].map((s) => `<button class="chip ${s === "Done" ? "done" : s === "Partial" ? "part" : "skip"} ${cur === s.toLowerCase() ? "sel" : ""}" data-status="${s.toLowerCase()}">${s}</button>`).join("")}</span>`;

const HEALTH_FLAGS = [["hypertension","High blood pressure"],["diabetes","Diabetes / pre-diabetes"],["heart","Heart condition"],["joints","Knee / joint issues"],["back","Back problems"],["asthma","Asthma / breathing"]];
const FAMILY_FLAGS = [["hypertension","High BP in family"],["diabetes","Diabetes in family"],["heart","Early heart disease in family"]];
function onboardingView() {
  const p = state.profile || {};
  const h = p.health || {}, f = p.family || {};
  view.innerHTML = `
  <div class="card"><h1 style="font-size:22px">Let's make this yours</h1>
    <p class="tiny">Sana recomputes every number in the Blueprint — calories, protein, heart-rate zones, portions, focus — from your profile. Two minutes, once.</p>
    <label class="row">Age <input id="ob-age" type="number" min="18" max="90" value="${p.age || ""}" style="width:90px"></label>
    <label class="row">Sex <select id="ob-sex"><option value="">prefer not to say</option><option value="male" ${p.sex==="male"?"selected":""}>male</option><option value="female" ${p.sex==="female"?"selected":""}>female</option></select></label>
    <label class="row">Height (cm) <input id="ob-h" type="number" min="130" max="220" value="${p.heightCm || ""}" style="width:90px"></label>
    <label class="row">Weight (kg) <input id="ob-w" type="number" step="0.5" min="35" max="200" value="${p.weightKg || ""}" style="width:90px"></label>
    <label class="row">Typical day <select id="ob-act">${[["sedentary","Mostly sitting"],["light","On my feet a bit"],["moderate","Fairly active"],["high","Very active"]].map(([v,l])=>`<option value="${v}" ${p.activity===v?"selected":""}>${l}</option>`).join("")}</select></label>
  </div>
  <div class="card"><h2>Health history — shapes your gates and swaps</h2>
    ${HEALTH_FLAGS.map(([k,l])=>`<label class="row">${l} <input type="checkbox" class="ob-hx" data-k="${k}" ${h[k]?"checked":""}></label>`).join("")}
  </div>
  <div class="card"><h2>Family history</h2>
    ${FAMILY_FLAGS.map(([k,l])=>`<label class="row">${l} <input type="checkbox" class="ob-fam" data-k="${k}" ${f[k]?"checked":""}></label>`).join("")}
    <p class="tiny">Nothing here is diagnosis — it decides which of the plan's own precautions apply to you. Anything serious always routes to a doctor.</p>
    <div class="chiprow"><button class="primary" id="ob-save">Build my numbers →</button></div>
  </div>`;
  $("#ob-save").onclick = async () => {
    const body = { age: +$("#ob-age").value || null, sex: $("#ob-sex").value || null,
      heightCm: +$("#ob-h").value || null, weightKg: +$("#ob-w").value || null, activity: $("#ob-act").value,
      health: Object.fromEntries([...view.querySelectorAll(".ob-hx")].map((c)=>[c.dataset.k, c.checked])),
      family: Object.fromEntries([...view.querySelectorAll(".ob-fam")].map((c)=>[c.dataset.k, c.checked])) };
    if (!body.age || !body.heightCm || !body.weightKg) return toast("Age, height and weight are needed for the numbers");
    await api("/profile", { method: "PUT", body });
    state.profile = { ...(state.profile||{}), ...body };
    toast("Profile saved — your numbers are ready"); render();
  };
}
function numbersCard(per) {
  if (!per?.complete) return "";
  return `<div class="card"><h2>Your numbers — computed for you, not the reference profile</h2>
    <div class="chiprow">
      <span class="pill">🔥 ${per.kcal} kcal/day</span><span class="pill">🥚 ${per.protein} g protein</span>
      <span class="pill">💧 ${(per.waterMl/1000).toFixed(1)} L water base</span><span class="pill">❤️ Z2 ${per.z2[0]}–${per.z2[1]} bpm</span>
      <span class="pill">🍽️ portions ×${per.portionFactor}</span><span class="pill">📏 waist &lt; ${per.waistMax} cm</span>
    </div>
    <p class="tiny">${esc(per.kcalNote)} · Age band ${esc(per.decade.band)}: ${esc(per.decade.focus)}</p></div>`;
}
async function todayView() {
  view.innerHTML = `<div class="skel">Loading today…</div>`;
  const t = await api("/today");
  if (state.tab !== "today") return;
  if (!t.personal?.complete) { state.needsOnboarding = true; return onboardingView(); }
  const pos = t.pos, s = t.session, meals = t.meals;
  view.innerHTML = `
  <div class="card">
    ${pos.started ? `<span class="pill">Day ${pos.day} · Week ${pos.week} · Phase ${pos.phase}${pos.maintenance ? " · maintenance" : ""}</span>` : '<span class="pill warn">start date not set — Settings →</span>'}
    ${t.aqi ? `<span class="pill ${t.aqi.level === "ok" ? "" : t.aqi.level === "unknown" ? "warn" : "bad"}">${esc(t.aqi.text)}</span>` : ""}
    ${t.gates.intervalsCleared ? "" : '<span class="pill warn">intervals locked · doctor clearance pending</span>'}
    ${t.gates.bloodPanelReviewed ? "" : '<span class="pill warn">blood panel not reviewed</span>'}
    ${Object.entries(t.modes).filter(([, v]) => v).map(([k]) => `<span class="pill bad">${k} mode</span>`).join("")}
    <div class="next ${t.next.kind === "blocked" ? "redflag" : ""}"><b>Now:</b> ${md(t.next.text)}
      <div class="chiprow"><a class="chip" href="/plan/${t.next.deepLink}" target="_blank" rel="noopener">📖 Open plan section</a>
      <a class="chip" href="#ask">💬 Ask Sana</a></div></div>
  </div>
  ${numbersCard(t.personal)}
  ${s ? `<div class="card"><h2>Training</h2><div class="slot"><span class="nm"><b>${esc(s.name)}</b><i>${s.min ? s.min + " min · " : ""}${esc(s.note || s.type)}</i></span></div>${s.type !== "rest" ? chipRow("SES", t.logsToday.SES) : '<p class="tiny">Rest day — recovery is the session.</p>'}</div>` : ""}
  ${meals ? `<div class="card"><h2>Meals — today's rotation</h2>${["breakfast", "snackAM", "lunch", "snackPM", "dinner"].map((k) => {
    const names = meals[k].split("+").map((c) => t.recipes[c.trim()]?.name || c.trim()).join(" + ");
    return `<div class="slot"><span class="nm"><b>${k.replace("AM", " (morning)").replace("PM", " (evening)")}</b><i>${meals[k]} — ${esc(names)}</i></span></div>${chipRow(k, t.logsToday[k])}`;
  }).join("")}</div>` : ""}
  <div class="card"><h2>Quick log</h2>
    <label class="row">Weight (kg, fasted) <span><input id="wkg" type="number" step="0.1" min="40" max="90" style="width:90px"> <button class="chip" id="wsave">Save</button></span></label>
    <label class="row">Sleep last night (h) <span><input id="slh" type="number" step="0.25" min="0" max="14" style="width:90px"> <button class="chip" id="ssave">Save</button></span></label>
  </div>`;
  view.querySelectorAll(".chiprow[data-slot]").forEach((row) => row.addEventListener("click", async (e) => {
    const b = e.target.closest("button.chip"); if (!b) return;
    await api("/log", { body: { slot: row.dataset.slot, status: b.dataset.status } });
    row.querySelectorAll(".chip").forEach((c) => c.classList.remove("sel")); b.classList.add("sel");
    toast("Logged ✓");
  }));
  $("#wsave").onclick = async () => { const v = $("#wkg").value; if (v) { await api("/log", { body: { weightKg: +v } }); toast("Weight saved"); } };
  $("#ssave").onclick = async () => { const v = $("#slh").value; if (v) { await api("/log", { body: { sleepH: +v } }); toast("Sleep saved"); } };
  if (t.next.kind === "blocked") showRedFlagBanner();
}

function showRedFlagBanner() {
  const b = $("#banner"); b.hidden = false;
  b.innerHTML = `⚠️ A stop-list symptom was raised. Coaching is paused (plan §15).
   <div><button id="ack1">A doctor has seen me / I'm getting checked</button>
   <button id="ack2">False alarm — I was asking generally</button></div>`;
  $("#ack1").onclick = $("#ack2").onclick = async (e) => {
    await api("/gates", { method: "PUT", body: { ackRedFlag: e.target.id === "ack1" ? "seen-doctor" : "general-question" } });
    b.hidden = true; render();
  };
}

/* ---------- ASK ---------- */
async function loadThreads() {
  try { const r = await api("/threads"); state.threads = r.threads || []; } catch { state.threads = []; }
}
function threadBarHtml() {
  const items = state.threads.slice(0, 8).map((t) =>
    `<button class="chip tchip ${state.thread === t.id ? "sel" : ""}" data-id="${t.id}" title="${esc(t.title || "")}">${esc((t.title || "chat").slice(0, 22))}</button>`).join("");
  return `<div class="chiprow" id="tbar"><button class="chip done" id="tnew">＋ New chat</button>${items}</div>`;
}
async function openThread(id) {
  state.thread = id; state.history = [];
  if (id) {
    try { const r = await api(`/thread?id=${id}`); state.history = (r.messages || []).map((m) => ({ role: m.role, text: m.text })); } catch {}
  }
  askView(true);
}
function askView(keep) {
  if (!keep) loadThreads().then(() => { const b = $("#tbar"); if (b) b.outerHTML = threadBarHtml(); wireTbar(); });
  view.innerHTML = `${threadBarHtml()}<div id="thread"></div>`;
  const th = $("#thread");
  const add = (role, text, kind) => {
    const d = document.createElement("div");
    d.className = `msg ${role}${kind === "redflag" ? " redflag" : ""}`;
    d.innerHTML = role === "bot" ? md(text) : esc(text);
    th.append(d); d.scrollIntoView({ block: "end" }); return d;
  };
  for (const h of state.history) add(h.role === "user" ? "user" : "bot", h.text, h.kind);
  if (!state.history.length) add("bot", state.thread
    ? "Continuing this chat — I remember the context."
    : "Ask me anything about the plan, or just: **what do I do now?**\nHold the orange mic to talk — release to send. Old chats live above; I keep their context so you never re-explain.");
  function wireTbar() {
    $("#tnew")?.addEventListener("click", () => openThread(null));
    view.querySelectorAll(".tchip").forEach((c) => c.addEventListener("click", () => openThread(c.dataset.id)));
  }
  window.__wireTbar = wireTbar;
  wireTbar();
  window.__send = async (text) => {
    if (!text.trim()) return;
    add("user", text); state.history.push({ role: "user", text });
    const wait = add("bot", "…");
    try {
      const r = await api("/chat", { body: { message: text, thread: state.thread } });
      if (r.thread && r.thread !== state.thread) { state.thread = r.thread; loadThreads().then(() => { const b = $("#tbar"); if (b) { b.outerHTML = threadBarHtml(); window.__wireTbar?.(); } }); }
      if (r.error || !r.text) { wait.textContent = "⚠️ " + (r.error || "something went wrong — try again"); state.history.pop(); return; }
      wait.innerHTML = md(r.text);
      if (r.kind === "redflag") { wait.classList.add("redflag"); showRedFlagBanner(); }
      state.history.push({ role: "assistant", text: r.text, kind: r.kind });
    } catch { wait.textContent = "Network hiccup — try again."; state.history.pop(); }
  };
}

/* ---------- ask bar (created once) ---------- */
const askbar = document.createElement("div");
askbar.id = "askbar";
askbar.innerHTML = `<div class="inner"><button id="mic" title="Hold to talk" aria-label="Hold to talk">🎙️</button><textarea id="msg" rows="1" placeholder="Ask Sana…" aria-label="Message"></textarea><button id="send" aria-label="Send">↑</button></div>`;
document.body.append(askbar);
$("#send").onclick = () => { const m = $("#msg"); const v = m.value; m.value = ""; window.__send?.(v); };
$("#msg").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#send").click(); } });

/* ---------- voice: hold-to-talk ----------
   Fixes over v1: chunked base64 (String.fromCharCode(...bigArray) blew the call
   stack beyond ~2 s of audio — THE "failed, try again" bug), native 16 kHz
   capture where supported, 45 s auto-stop, live timer, processing indicator. */
let rec = null, micReady = false;
function b64FromBytes(bytes) {           // chunked — safe at any length
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
}
async function ensureMic() {
  if (micReady) return true;
  try {
    const probe = await navigator.mediaDevices.getUserMedia({ audio: true });
    probe.getTracks().forEach((t) => t.stop());
    micReady = true;
    toast("🎙️ Mic ready — hold the button and speak");
    return false; // this hold was consumed by the permission flow
  } catch { toast("Mic permission needed — allow it in the address bar"); return false; }
}
async function startRec() {
  if (rec) return;
  if (!(await ensureMic())) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } });
    let ctx;
    try { ctx = new AudioContext({ sampleRate: 16000 }); } catch { ctx = new AudioContext(); }
    await ctx.resume();
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(4096, 1, 1);
    const chunks = [];
    proc.onaudioprocess = (e) => chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    src.connect(proc); proc.connect(ctx.destination);
    const mic = $("#mic");
    mic.classList.add("rec");
    const timer = document.createElement("span"); timer.className = "t"; mic.append(timer);
    const t0 = Date.now();
    const tick = setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000);
      timer.textContent = `● ${s}s`;
      if (s >= 45) { toast("45 s limit — sending"); stopRec(false); }
    }, 250);
    rec = { stream, ctx, proc, chunks, rate: ctx.sampleRate, t0, tick, timer };
  } catch { toast("Couldn't start the mic — try again"); }
}
async function stopRec(cancel) {
  if (!rec) return;
  const { stream, ctx, proc, chunks, rate, t0, tick, timer } = rec; rec = null;
  clearInterval(tick); timer.remove();
  $("#mic").classList.remove("rec");
  proc.disconnect(); stream.getTracks().forEach((t) => t.stop()); ctx.close();
  if (cancel) { toast("Cancelled"); return; }
  if (Date.now() - t0 < 500) { toast("Hold the mic while you speak, release to send"); return; }
  const len = chunks.reduce((n, c) => n + c.length, 0);
  const all = new Float32Array(len); let o = 0; for (const c of chunks) { all.set(c, o); o += c.length; }
  const ratio = rate / 16000;
  const outLen = Math.floor(all.length / ratio);
  const pcm = new Int16Array(outLen);
  for (let i = 0; i < outLen; i++) { const v = all[Math.floor(i * ratio)]; pcm[i] = Math.max(-1, Math.min(1, v)) * 0x7fff; }
  // silence check: don't ship dead air
  let peak = 0; for (let i = 0; i < pcm.length; i += 50) peak = Math.max(peak, Math.abs(pcm[i]));
  if (peak < 500) { toast("I didn't catch any speech — try again closer to the mic"); return; }
  const b64 = b64FromBytes(new Uint8Array(pcm.buffer));
  if (state.tab !== "ask") setTab("ask");
  const th = $("#thread");
  const bubble = document.createElement("div"); bubble.className = "msg user"; bubble.textContent = "🎙️ transcribing…"; th?.append(bubble); bubble.scrollIntoView({ block: "end" });
  try {
    const r = await api("/voice", { body: { audio: b64, thread: state.thread } });
    if (r.error) { bubble.textContent = "🎙️ " + r.error; return; }
    bubble.textContent = r.transcript || "🎙️ (couldn't make that out)";
    const d = document.createElement("div"); d.className = `msg bot${r.kind === "redflag" ? " redflag" : ""}`;
    d.innerHTML = md(r.text);
    th?.append(d); d.scrollIntoView({ block: "end" });
    if (r.transcript) {
      state.history.push({ role: "user", text: r.transcript });
      state.history.push({ role: "assistant", text: r.text, kind: r.kind });
      if (r.thread) state.thread = r.thread;
    }
    if (r.kind === "redflag") showRedFlagBanner();
    if (r.audio) {
      const a = new Audio("data:audio/mp3;base64," + r.audio);
      const sp = document.createElement("span"); sp.className = "speak"; sp.textContent = "🔊 playing — tap to pause";
      d.append(document.createElement("br"), sp);
      sp.onclick = () => { if (a.paused) { a.play(); sp.textContent = "🔊 playing — tap to pause"; } else { a.pause(); sp.textContent = "🔊 tap to play"; } };
      a.onended = () => { sp.textContent = "🔊 tap to replay"; };
      a.play().catch(() => { sp.textContent = "🔊 tap to play"; });
    }
  } catch { bubble.textContent = "🎙️ network hiccup — try again"; }
}
const micBtn = $("#mic");
micBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); micBtn.setPointerCapture(e.pointerId); startRec(); });
micBtn.addEventListener("pointerup", () => stopRec(false));
micBtn.addEventListener("pointercancel", () => stopRec(true));

/* ---------- PROGRESS ---------- */
async function progressView() {
  view.innerHTML = `<div class="skel">Loading…</div>`;
  const from = new Date(Date.now() - 27 * 86400000).toISOString().slice(0, 10);
  const r = await api(`/log?from=${from}`);
  if (state.tab !== "progress") return;
  const byDay = {};
  for (const l of r.logs) { const d = l.SK.slice(4, 14); (byDay[d] ??= []).push(l); }
  const days = Object.keys(byDay).sort();
  const doneRate = days.length ? Math.round(100 * days.filter((d) => byDay[d].some((l) => l.slot === "SES" && l.status === "done")).length / days.length) : 0;
  const wts = r.weights.slice(-28);
  const min = Math.min(...wts.map((w) => w.weightKg), 64), max = Math.max(...wts.map((w) => w.weightKg), 66);
  view.innerHTML = `
  <div class="card"><h2>Consistency — last 28 days</h2>
    <div>Training done on <b>${doneRate}%</b> of logged days</div><div class="bar"><i style="width:${doneRate}%"></i></div>
    <div class="tiny">${days.length} days with any log · ${r.logs.length} entries. Consistency, not streaks — a break is a data point, not a failure (§12).</div></div>
  <div class="card"><h2>Weight — vs the 63.5–66.5 kg band</h2>
    ${wts.length ? `<div class="wchart">${wts.map((w) => `<i title="${w.SK.slice(3)}: ${w.weightKg} kg" style="height:${8 + 62 * (w.weightKg - min) / Math.max(0.1, max - min)}%"></i>`).join("")}</div>
    <div class="tiny">latest ${wts.at(-1).weightKg} kg · rule: 3 weekly averages outside the band → ±250 kcal (§12)</div>` : `<p class="tiny">Log a few weights from Today and the trend appears here.</p>`}</div>
  <div class="card"><h2>Your data</h2><div class="chiprow"><button class="ghost" id="exp">Download everything (JSON)</button></div></div>`;
  $("#exp").onclick = async () => {
    const d = await api("/export");
    const url = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }));
    const a = document.createElement("a"); a.href = url; a.download = "sana-export.json"; a.click();
  };
}

/* ---------- SETTINGS ---------- */
async function settingsView() {
  view.innerHTML = `<div class="skel">Loading…</div>`;
  const { profile: p, gates: g } = await api("/profile");
  state.profile = p;
  if (state.tab !== "settings") return;
  view.innerHTML = `
  <div class="card"><h2>You</h2>
    <label class="row">Age <input id="s-age" type="number" min="18" max="90" value="${p.age || ""}" style="width:80px"></label>
    <label class="row">Height cm <input id="s-h" type="number" min="130" max="220" value="${p.heightCm || ""}" style="width:80px"></label>
    <label class="row">Weight kg <input id="s-w" type="number" step="0.5" min="35" max="200" value="${p.weightKg || ""}" style="width:80px"></label>
    <div class="chiprow"><button class="chip done" id="s-you">Save & recompute</button><button class="chip" id="s-redo">Redo full onboarding</button></div></div>
  <div class="card"><h2>Programme</h2>
    <label class="row">Start date <input id="sd" type="date" value="${p.startDate || ""}"></label>
    <label class="row">Diet <select id="diet">${["lacto-vegetarian", "veg + eggs", "non-veg"].map((d) => `<option ${p.diet === d ? "selected" : ""}>${d}</option>`).join("")}</select></label>
    <div class="chiprow"><button class="chip done" id="saveP">Save</button></div></div>
  <div class="card"><h2>Training setup — shapes session suggestions</h2>
    <label class="row">Equipment at home <select id="s-eq">${[["","not set"],["none","Nothing yet"],["bands","Resistance bands"],["dumbbells","Dumbbells (adjustable)"],["gym","Full gym access"]].map(([v,l])=>`<option value="${v}" ${p.equipment===v?"selected":""}>${l}</option>`).join("")}</select></label>
    <label class="row">Weekday minutes for training <select id="s-tb">${[["","not set"],["20","~20 min"],["30","~30 min"],["45","~45 min"],["60","60+ min"]].map(([v,l])=>`<option value="${v}" ${String(p.timeBudget||"")===v?"selected":""}>${l}</option>`).join("")}</select></label>
    <p class="tiny">Short on time? Sana defaults to the 20-minute session shapes instead of nagging you about the full ones.</p></div>
  <div class="card"><h2>Modes</h2>
    ${["Sick", "Travel", "Festival"].map((m) => `<label class="row">${m} mode <input type="checkbox" data-mode="mode${m}" ${p["mode" + m] ? "checked" : ""}></label>`).join("")}
    <p class="tiny">Modes switch the engine to the plan's own fallback rules — no guilt, just different guidance.</p></div>
  <div class="card"><h2>Medical gates — your attestation, not Sana's inference</h2>
    <label class="row">My doctor has reviewed my blood panel <input type="checkbox" id="gbp" ${g.bloodPanelReviewed ? "checked" : ""}></label>
    <label class="row">My doctor cleared me for high-intensity intervals <input type="checkbox" id="giv" ${g.intervalsCleared ? "checked" : ""}></label>
    <p class="tiny">Interval sessions stay locked until the second box is ticked (plan §15 + family history).</p></div>
  <div class="card"><h2>Account</h2>
    <div class="tiny" style="margin-bottom:8px">${esc(state.user.email)}</div>
    <div class="chiprow"><button class="ghost" id="lo">Sign out</button><button class="danger" id="del">Delete ALL my data</button></div></div>`;
  $("#s-eq").onchange = (e) => api("/profile", { method: "PUT", body: { equipment: e.target.value || null } }).then(() => toast("Saved"));
  $("#s-tb").onchange = (e) => api("/profile", { method: "PUT", body: { timeBudget: e.target.value || null } }).then(() => toast("Saved"));
  $("#s-you").onclick = async () => { await api("/profile", { method: "PUT", body: { age: +$("#s-age").value || null, heightCm: +$("#s-h").value || null, weightKg: +$("#s-w").value || null } }); toast("Recomputed — see Today"); };
  $("#s-redo").onclick = () => { state.profile = p; setTab("today"); state.needsOnboarding = true; onboardingView(); };
  $("#saveP").onclick = async () => { await api("/profile", { method: "PUT", body: { startDate: $("#sd").value, diet: $("#diet").value } }); toast("Saved"); };
  view.querySelectorAll("[data-mode]").forEach((c) => c.onchange = () => api("/profile", { method: "PUT", body: { [c.dataset.mode]: c.checked } }).then(() => toast("Saved")));
  $("#gbp").onchange = (e) => api("/gates", { method: "PUT", body: { bloodPanelReviewed: e.target.checked } }).then(() => toast("Saved"));
  $("#giv").onchange = (e) => api("/gates", { method: "PUT", body: { intervalsCleared: e.target.checked } }).then(() => toast("Saved"));
  $("#lo").onclick = async () => {
    await api("/auth/logout", { method: "POST" });
    state.user = null; state.history = []; state.justSignedOut = true;
    setTab("today"); toast("Signed out");
  };
  $("#del").onclick = async () => {
    const c = prompt(`This permanently deletes everything. Type your email (${state.user.email}) to confirm:`);
    if (c !== state.user.email) return toast("Not confirmed");
    const r = await api("/delete", { body: { confirm: c } });
    alert(`Deleted ${r.deleted} records.`); state.user = null; state.history = []; setTab("today");
  };
}

/* ---------- render ---------- */
function render() {
  askbar.classList.toggle("on", state.tab === "ask" && !!state.user);
  if (!state.user) return welcomeView();
  $("#who").textContent = state.user.name || state.user.email;
  ({ today: todayView, ask: askView, progress: progressView, settings: settingsView }[state.tab] || todayView)()?.catch?.(console.error);
}
async function boot() {
  fetchAqi(); // don't block first paint on geolocation
  try { const r = await api("/auth/me"); state.user = r.user || null; } catch { state.user = null; }
  setTab(location.hash.slice(1) || "today", false);
}
boot();
