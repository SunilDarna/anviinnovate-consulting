/* Sana — vanilla SPA. No build step, no deps beyond the GIS script. */
"use strict";
const GOOGLE_CLIENT_ID = "736690706364-54tc00o4sdod1d02vdalqc9slpa67ao5.apps.googleusercontent.com";
const $ = (s, r = document) => r.querySelector(s);
const view = $("#view");
const tz = -new Date().getTimezoneOffset() * -1; // minutes east of UTC
const state = { user: null, aqi: null, history: [], tab: "today" };

const api = async (path, opts = {}) => {
  const q = new URLSearchParams({ tz: String(-new Date().getTimezoneOffset()) , ...(state.aqi != null ? { aqi: state.aqi } : {}) });
  const r = await fetch(`/api${path}${path.includes("?") ? "&" : "?"}${q}`, {
    method: opts.method || (opts.body ? "POST" : "GET"),
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (r.status === 401) { state.user = null; render(); throw new Error("unauth"); }
  return r.json();
};
const toast = (t) => { const d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.append(d); setTimeout(() => d.remove(), 2200); };
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const md = (s) => esc(s).replace(/\(§([\d.]+)[^)]*\)/g, '(<a href="/#s$1" target="_blank">§$1</a>)').replace(/_([^_]+)_/g, "<i>$1</i>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");

/* ---------- AQI (client-fetched, Open-Meteo, free/no key) ---------- */
async function fetchAqi() {
  try {
    const pos = await new Promise((res, rej) => navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej, { timeout: 4000 }) : rej());
    const { latitude: la, longitude: lo } = pos.coords;
    const r = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${la}&longitude=${lo}&current=us_aqi`);
    const j = await r.json();
    state.aqi = Math.round(j.current?.us_aqi ?? null);
  } catch { state.aqi = null; }
}

/* ---------- nav events beacon ---------- */
let navBuf = [];
function trackNav(section) { navBuf.push({ section, at: Date.now() }); if (navBuf.length >= 5) flushNav(); }
function flushNav() { if (!navBuf.length || !state.user) return; const evs = navBuf.splice(0); api("/events", { body: { events: evs } }).catch(() => {}); }
addEventListener("pagehide", flushNav);

/* ---------- tabs ---------- */
$("#tabs").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  state.tab = b.dataset.tab;
  document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("on", x === b));
  trackNav(state.tab);
  render();
});

/* ---------- sign in ---------- */
function signinView() {
  view.innerHTML = "";
  view.append($("#t-signin").content.cloneNode(true));
  $("#askbar")?.classList.remove("on");
  $("#signin", view.parentElement).onclick = () => {
    if (!window.google?.accounts?.oauth2) return toast("Google sign-in script still loading — try again");
    google.accounts.oauth2.initCodeClient({
      client_id: GOOGLE_CLIENT_ID, scope: "openid email profile", ux_mode: "popup",
      callback: async (resp) => {
        if (!resp.code) return toast("sign-in cancelled");
        const r = await api("/auth/google", { body: { code: resp.code } });
        if (r.user) { state.user = r.user; boot(); } else toast(r.error || "sign-in failed");
      },
    }).requestCode();
  };
}

/* ---------- TODAY ---------- */
const chipRow = (slot, cur) => `<span class="chiprow" data-slot="${slot}">
  ${["Done","Partial","Skipped"].map((s) => `<button class="chip ${s === "Done" ? "done" : s === "Partial" ? "part" : "skip"} ${cur === s.toLowerCase() ? "sel" : ""}" data-status="${s.toLowerCase()}">${s}</button>`).join("")}</span>`;

async function todayView() {
  view.innerHTML = `<div class="card">Loading today…</div>`;
  const t = await api("/today");
  const pos = t.pos, s = t.session, meals = t.meals;
  const gatePills = `${t.gates.intervalsCleared ? "" : '<span class="pill warn">intervals locked — doctor clearance pending</span>'}${t.gates.bloodPanelReviewed ? "" : '<span class="pill warn">blood panel not reviewed</span>'}`;
  const modePills = Object.entries(t.modes).filter(([,v]) => v).map(([k]) => `<span class="pill bad">${k} mode</span>`).join("");
  view.innerHTML = `
  <div class="card">
    ${pos.started ? `<span class="pill">Day ${pos.day} · Week ${pos.week} · Phase ${pos.phase}${pos.maintenance ? " · maintenance" : ""}</span>` : '<span class="pill warn">start date not set — see Settings</span>'}
    ${t.aqi ? `<span class="pill ${t.aqi.level === "ok" ? "" : t.aqi.level === "unknown" ? "warn" : "bad"}">${esc(t.aqi.text)}</span>` : ""}
    ${gatePills}${modePills}
    <div class="next ${t.next.kind === "blocked" ? "redflag" : ""}"><b>Now:</b> ${md(t.next.text)}
      <div class="chiprow"><a class="chip" href="/${t.next.deepLink}" target="_blank">Open plan section</a></div></div>
  </div>
  ${s ? `<div class="card"><h2>Training</h2><div class="slot"><span class="nm"><b>${esc(s.name)}</b><i>${s.min ? s.min + " min · " : ""}${esc(s.note || s.type)}</i></span></div>${s.type !== "rest" ? chipRow("SES", t.logsToday.SES) : ""}</div>` : ""}
  ${meals ? `<div class="card"><h2>Meals — today's rotation</h2>${["breakfast","snackAM","lunch","snackPM","dinner"].map((k) => {
      const names = meals[k].split("+").map((c) => t.recipes[c.trim()]?.name || c.trim()).join(" + ");
      return `<div class="slot"><span class="nm"><b>${k.replace("AM"," am").replace("PM"," pm")}</b><i>${meals[k]} — ${esc(names)}</i></span></div>${chipRow(k, t.logsToday[k])}`;
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
  if (t.gates && t.next.kind === "blocked") showRedFlagBanner();
}

/* ---------- red-flag banner ---------- */
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
function askView() {
  view.innerHTML = `<div id="thread"></div>`;
  $("#askbar").classList.add("on");
  const th = $("#thread");
  const add = (role, text, kind) => { const d = document.createElement("div"); d.className = `msg ${role}${kind === "redflag" ? " redflag" : ""}`; d.innerHTML = role === "bot" ? md(text) : esc(text); th.append(d); d.scrollIntoView({ block: "end" }); return d; };
  for (const h of state.history) add(h.role === "user" ? "user" : "bot", h.text, h.kind);
  if (!state.history.length) add("bot", "Ask me anything about the plan, or just: **what do I do now?**\nHold the orange mic to talk instead of typing.");
  window.__send = async (text) => {
    if (!text.trim()) return;
    add("user", text); state.history.push({ role: "user", text });
    const wait = add("bot", "…");
    try {
      const r = await api("/chat", { body: { message: text, history: state.history.slice(0, -1) } });
      if (r.error || !r.text) { wait.textContent = "⚠️ " + (r.error || "something went wrong — try again"); state.history.pop(); return; }
      wait.innerHTML = md(r.text); if (r.kind === "redflag") { wait.classList.add("redflag"); showRedFlagBanner(); }
      state.history.push({ role: "assistant", text: r.text, kind: r.kind });
    } catch { wait.textContent = "Network hiccup — try again."; state.history.pop(); }
  };
}
$("#askbar")?.remove; // (bar is defined below, created once)
const bar = document.createElement("div");
bar.id = "askbar";
bar.innerHTML = `<div class="inner"><button id="mic" title="Hold to talk">🎙️</button><textarea id="msg" rows="1" placeholder="Ask Sana…"></textarea><button id="send">↑</button></div>`;
document.body.append(bar);
$("#send").onclick = () => { const m = $("#msg"); const v = m.value; m.value = ""; window.__send?.(v); };
$("#msg").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#send").click(); } });

/* ---------- hold-to-talk: record → downsample to PCM16/16k → POST /voice ---------- */
let rec = null, micReady = false;
async function ensureMic() {
  if (micReady) return true;
  try {
    const probe = await navigator.mediaDevices.getUserMedia({ audio: true });
    probe.getTracks().forEach((t) => t.stop());
    micReady = true;
    toast("Mic ready — hold the button and speak");
    return false; // this hold was consumed by the permission flow; user holds again
  } catch { toast("Mic permission needed — allow it in the address bar"); return false; }
}
async function startRec() {
  if (!(await ensureMic())) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true } });
    const ctx = new AudioContext();
    await ctx.resume();
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(4096, 1, 1);
    const chunks = [];
    proc.onaudioprocess = (e) => chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    src.connect(proc); proc.connect(ctx.destination);
    rec = { stream, ctx, proc, chunks, rate: ctx.sampleRate, t0: Date.now() };
    $("#mic").classList.add("rec");
  } catch { toast("Mic permission needed"); }
}
async function stopRec(cancel) {
  if (!rec) return;
  const { stream, ctx, proc, chunks, rate, t0 } = rec; rec = null;
  $("#mic").classList.remove("rec");
  proc.disconnect(); stream.getTracks().forEach((t) => t.stop()); ctx.close();
  if (cancel || Date.now() - t0 < 400) return;
  // merge + downsample to 16k PCM16
  const len = chunks.reduce((n, c) => n + c.length, 0);
  const all = new Float32Array(len); let o = 0; for (const c of chunks) { all.set(c, o); o += c.length; }
  const ratio = rate / 16000, outLen = Math.floor(all.length / ratio);
  const pcm = new Int16Array(outLen);
  for (let i = 0; i < outLen; i++) { const v = all[Math.floor(i * ratio)]; pcm[i] = Math.max(-1, Math.min(1, v)) * 0x7fff; }
  const b64 = btoa(String.fromCharCode(...new Uint8Array(pcm.buffer).subarray(0, 1400000)));
  if (state.tab !== "ask") { state.tab = "ask"; document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("on", x.dataset.tab === "ask")); render(); }
  const th = $("#thread"); const wait = document.createElement("div"); wait.className = "msg user"; wait.textContent = "🎙️ …"; th?.append(wait);
  try {
    const r = await api("/voice", { body: { audio: b64, history: state.history } });
    if (r.error) { wait.textContent = "🎙️ " + r.error; return; }
    wait.textContent = r.transcript || "🎙️ (unclear)";
    const d = document.createElement("div"); d.className = `msg bot${r.kind === "redflag" ? " redflag" : ""}`; d.innerHTML = md(r.text); th?.append(d); d.scrollIntoView({ block: "end" });
    if (r.transcript) {  // only real exchanges enter history — a "couldn't hear" notice must not
      state.history.push({ role: "user", text: r.transcript });
      state.history.push({ role: "assistant", text: r.text, kind: r.kind });
    }
    if (r.kind === "redflag") showRedFlagBanner();
    if (r.audio) { const a = new Audio("data:audio/mp3;base64," + r.audio); a.play().catch(() => {}); d.onclick = () => a.paused ? a.play() : a.pause(); }
  } catch { wait.textContent = "🎙️ failed — try again"; }
}
const mic = $("#mic");
mic.addEventListener("pointerdown", (e) => { e.preventDefault(); startRec(); });
mic.addEventListener("pointerup", () => stopRec(false));
mic.addEventListener("pointerleave", () => rec && stopRec(true));

/* ---------- PROGRESS ---------- */
async function progressView() {
  view.innerHTML = `<div class="card">Loading…</div>`;
  const from = new Date(Date.now() - 27 * 86400000).toISOString().slice(0, 10);
  const r = await api(`/log?from=${from}`);
  const byDay = {};
  for (const l of r.logs) { const d = l.SK.slice(4, 14); (byDay[d] ??= []).push(l); }
  const days = Object.keys(byDay).sort();
  const doneRate = days.length ? Math.round(100 * days.filter((d) => byDay[d].some((l) => l.slot === "SES" && l.status === "done")).length / days.length) : 0;
  const wts = r.weights.slice(-28);
  const min = Math.min(...wts.map((w) => w.weightKg), 64), max = Math.max(...wts.map((w) => w.weightKg), 66);
  view.innerHTML = `
  <div class="card"><h2>Consistency (last 28 days)</h2>
    <div>Training sessions done on <b>${doneRate}%</b> of logged days</div><div class="bar"><i style="width:${doneRate}%"></i></div>
    <div>${days.length} days with any log · ${r.logs.length} entries</div>
    <p class="tiny">Framed as consistency, not streaks — a break is a data point, not a failure (plan §12).</p></div>
  <div class="card"><h2>Weight — vs the 63.5–66.5 kg band</h2>
    ${wts.length ? `<div class="wchart">${wts.map((w) => `<i title="${w.SK.slice(3)}: ${w.weightKg}kg" style="height:${8 + 62 * (w.weightKg - min) / Math.max(0.1, max - min)}%"></i>`).join("")}</div>
    <div class="tiny">latest ${wts.at(-1).weightKg} kg · rule: 3 weekly averages outside the band → ±250 kcal (§12.3)</div>` : `<p class="tiny">Log a few weights from Today and the trend appears here.</p>`}</div>
  <div class="card"><h2>Export</h2><button class="ghost" id="exp">Download all my data (JSON)</button></div>`;
  $("#exp").onclick = async () => {
    const d = await api("/export");
    const url = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }));
    Object.assign(document.createElement("a"), { href: url, download: "sana-export.json" }).click();
  };
}

/* ---------- SETTINGS ---------- */
async function settingsView() {
  view.innerHTML = `<div class="card">Loading…</div>`;
  const { profile: p, gates: g } = await api("/profile");
  view.innerHTML = `
  <div class="card"><h2>Programme</h2>
    <label class="row">Start date <input id="sd" type="date" value="${p.startDate || ""}"></label>
    <label class="row">Diet <select id="diet">${["lacto-vegetarian","veg + eggs","non-veg"].map((d) => `<option ${p.diet === d ? "selected" : ""}>${d}</option>`).join("")}</select></label>
    <div class="chiprow"><button class="chip done" id="saveP">Save</button></div></div>
  <div class="card"><h2>Modes</h2>
    ${["Sick","Travel","Festival"].map((m) => `<label class="row">${m} mode <input type="checkbox" data-mode="mode${m}" ${p["mode" + m] ? "checked" : ""}></label>`).join("")}</div>
  <div class="card"><h2>Medical gates — your attestation, not my inference</h2>
    <label class="row">My doctor has reviewed my blood panel <input type="checkbox" id="gbp" ${g.bloodPanelReviewed ? "checked" : ""}></label>
    <label class="row">My doctor cleared me for high-intensity intervals <input type="checkbox" id="giv" ${g.intervalsCleared ? "checked" : ""}></label>
    <p class="tiny">Interval sessions stay locked until the second box is ticked (plan §15 + family history).</p></div>
  <div class="card"><h2>Account</h2>
    <div class="tiny" style="margin-bottom:8px">${esc(state.user.email)}</div>
    <div class="chiprow"><button class="ghost" id="lo">Sign out</button><button class="danger" id="del">Delete ALL my data</button></div></div>`;
  $("#saveP").onclick = async () => { await api("/profile", { method: "PUT", body: { startDate: $("#sd").value, diet: $("#diet").value } }); toast("Saved"); };
  view.querySelectorAll("[data-mode]").forEach((c) => c.onchange = () => api("/profile", { method: "PUT", body: { [c.dataset.mode]: c.checked } }).then(() => toast("Saved")));
  $("#gbp").onchange = (e) => api("/gates", { method: "PUT", body: { bloodPanelReviewed: e.target.checked } }).then(() => toast("Saved"));
  $("#giv").onchange = (e) => api("/gates", { method: "PUT", body: { intervalsCleared: e.target.checked } }).then(() => toast("Saved"));
  $("#lo").onclick = async () => { await api("/auth/logout", { method: "POST" }); location.reload(); };
  $("#del").onclick = async () => {
    const c = prompt(`This permanently deletes everything. Type your email (${state.user.email}) to confirm:`);
    if (c !== state.user.email) return toast("Not confirmed");
    const r = await api("/delete", { body: { confirm: c } }); alert(`Deleted ${r.deleted} records.`); location.reload();
  };
}

/* ---------- render ---------- */
function render() {
  $("#askbar").classList.toggle("on", state.tab === "ask" && !!state.user);
  if (!state.user) return signinView();
  $("#who").textContent = state.user.name || state.user.email;
  if (state.tab === "today") todayView().catch(console.error);
  else if (state.tab === "ask") askView();
  else if (state.tab === "plan") { location.href = "/#s0"; }
  else if (state.tab === "progress") progressView().catch(console.error);
  else if (state.tab === "settings") settingsView().catch(console.error);
}
async function boot() {
  await fetchAqi();
  try { const r = await api("/auth/me"); state.user = r.user || null; } catch { state.user = null; }
  render();
}
boot();
