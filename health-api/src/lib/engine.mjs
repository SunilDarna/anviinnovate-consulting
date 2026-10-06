// The deterministic context engine (docs/health-assistant/03).
// Pure functions over PLAN + user state. No AI in this file, by design.
import { PLAN, SAFETY } from "./plan.mjs";

const DAY_MS = 86400000;
export function programmePosition(startDateISO, now) {
  if (!startDateISO) return { started: false };
  const start = new Date(startDateISO + "T00:00:00");
  const days = Math.floor((now - start) / DAY_MS);
  if (days < 0) return { started: false, startsInDays: -days };
  const week = Math.floor(days / 7) + 1;             // 1-based, may exceed 12 (maintenance)
  const dow = (start.getDay() + days) % 7;            // 0=Sun … 6=Sat
  const planWeek = week <= 12 ? week : ((week - 1) % 4) + 9;  // post-90-day: repeat wks 9–12
  return { started: true, day: days + 1, week, planWeek, dow, phase: week <= 4 ? 1 : week <= 8 ? 2 : 3, maintenance: week > 12 };
}

// PLAN.programme weeks are Mon..Sun arrays; dow 0=Sun maps to index 6.
const dayIdx = (dow) => (dow + 6) % 7;

export function todaySchedule(pos) {
  if (!pos.started) return { session: null, meals: null };
  const session = PLAN.programme[pos.planWeek - 1][dayIdx(pos.dow)];
  const mealWeek = ((Math.ceil(pos.day / 7) - 1) % 4);
  const meals = PLAN.mealGrid[mealWeek][dayIdx(pos.dow)];
  return { session, meals };
}

export function timeBucket(hourFloat) {
  for (const [a, b, name] of PLAN.rules.timeBuckets) if (hourFloat >= a && hourFloat < b) return name;
  return "night";
}

export function aqiVerdict(aqi) {
  if (aqi == null) return { level: "unknown", text: "AQI unknown — check before outdoor training in winter (§3.9)." };
  if (aqi < PLAN.rules.aqi.outdoorOk) return { level: "ok", text: `AQI ${aqi}: outdoors is fine.` };
  if (aqi < PLAN.rules.aqi.intensityIndoors) return { level: "caution", text: `AQI ${aqi}: keep easy walking outdoors, move intensity indoors (§3.9).` };
  return { level: "indoors", text: `AQI ${aqi}: all training indoors today (§3.9).` };
}

// state: { pos, sched, logsToday:{slot:status}, gates:{intervalsCleared,bloodPanelReviewed,redFlagAck}, modes:{sick,travel,festival}, hour, aqi, gapDays }
export function nextAction(state) {
  const out = { deepLink: "#s3", evidence: [] };
  const { pos, sched, logsToday = {}, gates = {}, modes = {}, hour, aqi, gapDays = 0 } = state;

  if (gates.redFlagPending) return { ...out, kind: "blocked", text: SAFETY.responses.default, deepLink: "#s15" };
  if (modes.sick) return { ...out, kind: "rest", deepLink: "#s3", text: "Sick mode is on. Below-the-neck symptoms (fever, chest, body aches) = no training at all until 24 h symptom-free (§3.6). Above-the-neck only = optional easy walk at 50%. Sleep and fluids are today's programme." };
  if (!pos.started) return { ...out, kind: "setup", text: "Set your programme start date in Settings and today's plan appears here. Until then: the §16 first-seven-days checklist is the plan." , deepLink: "#s16" };
  if (gapDays >= 5) return { ...out, kind: "comeback", text: PLAN.rules.fallbacks.comeback, deepLink: "#s7", evidence: [`last log ${gapDays} days ago`] };

  const s = sched.session;
  const bucket = timeBucket(hour);
  const sessionLogged = logsToday[`SES`] != null;
  const isGatedHI = s && s.type === "hi" && !gates.intervalsCleared;

  if (modes.travel && s && s.type !== "rest" && !sessionLogged)
    return { ...out, kind: "travel", text: `Travel mode: today's ${s.name} becomes ${PLAN.rules.fallbacks.hotel} Walk 8,000+ steps. No make-ups when you're back.`, deepLink: "#s3", evidence: ["travel mode on"] };

  if (s && s.type !== "rest" && !sessionLogged) {
    if (isGatedHI)
      return { ...out, kind: "gated", text: `${SAFETY.gates.intervals} Today, do an easy Zone 2 walk (30–40 min, full-sentence pace) instead.`, deepLink: "#s3", evidence: ["intervals gate closed"] };
    if (bucket === "morning-session" || bucket === "work-am")
      return { ...out, kind: "session", text: `Today is ${s.name} (${s.min} min). ${s.note && !s.note.startsWith("GATED") ? s.note + ". " : ""}The morning window is the plan's slot — warm-up first (§3.3).`, deepLink: "#s3", evidence: [`week ${pos.week} ${s.name} unlogged`], clarify: bucket !== "morning-session" ? { fact: "morningSession", question: `Did you do ${s.name} this morning?`, chips: ["Done", "Partial", "Skipped"] } : undefined };
    if (bucket === "work-late-am" || bucket === "work-pm" || bucket === "lunch" || bucket === "snack-am")
      return { ...out, kind: "clarify", text: `Today is ${s.name} (${s.min} min) and it isn't logged yet. If it happened this morning, tap it in; if not, the evening window still works — or the MVS-20 if time is tight (§3.8).`, deepLink: "#s3", evidence: [`${s.name} unlogged, midday`], clarify: { fact: "session", question: `Did you do ${s.name} this morning?`, chips: ["Done", "Partial", "Skipped"] } };
    if (bucket === "evening" || bucket === "snack-pm")
      return { ...out, kind: "session", text: `${s.name} hasn't been logged today. The evening window works: shorten to the MVS-20 if time is tight — ${PLAN.rules.fallbacks.mvs}`, deepLink: "#s3", evidence: [`${s.name} unlogged, evening window`] };
    if (bucket === "wind-down" || bucket === "night")
      return { ...out, kind: "release", text: `${s.name} didn't happen today — let it go; the plan forbids make-ups (§3.6). Tonight's job is the wind-down: shutdown ritual, 6 min of 4-in/6-out breathing, lights out 23:00 (§8.4). Tomorrow continues as scheduled.`, deepLink: "#s8", evidence: [`${s.name} unlogged, night`] };
  }

  // Session handled (done or rest day) → meal/practice guidance by clock.
  const meals = sched.meals;
  const mealSlot = { lunch: "lunch", "snack-am": "snackAM", "snack-pm": "snackPM", dinner: "dinner", "morning-session": "breakfast", "work-am": "breakfast" }[bucket];
  if (mealSlot && meals && !logsToday[mealSlot]) {
    const code = meals[mealSlot];
    const names = code.split("+").map(c => PLAN.recipes[c.trim()]?.name || c.trim()).join(" + ");
    const after = mealSlot === "lunch" ? " Then the 10-minute walk — it blunts the glucose spike (§9.1)." : "";
    return { ...out, kind: "meal", text: `${bucket === "lunch" ? "Lunch" : bucket === "dinner" ? "Dinner" : "This slot"} on the rotation is ${code} — ${names}.${after}`, deepLink: "#s5", evidence: [`meal week ${((Math.ceil(pos.day/7)-1)%4)+1}, ${mealSlot}`] };
  }
  if (bucket === "work-pm" || bucket === "work-am" || bucket === "work-late-am")
    return { ...out, kind: "micro", text: `Everything scheduled is on track. In a work block the plan's ask is small: ${PLAN.rules.alwaysAppropriate[0]}, and stand for 2–3 min every 45 (§3.7).${aqi != null ? " " + aqiVerdict(aqi).text : ""}`, deepLink: "#s3", evidence: ["all logged"] };
  if (bucket === "wind-down")
    return { ...out, kind: "winddown", text: "Wind-down window: shutdown ritual (3 priorities on paper), 10-min kitchen prep for tomorrow, meditation 5–10 min, extended-exhale in bed, lights out 23:00 (§8.4, §9.1).", deepLink: "#s8", evidence: [] };
  return { ...out, kind: "free", text: `Nothing is owed right now. If you want something useful: ${PLAN.rules.alwaysAppropriate[2]}.`, deepLink: "#s3", evidence: ["all logged"] };
}

// Red-flag scanner — Layer 1 (docs 07). Returns response text or null.
export function scanRedFlags(text) {
  const t = " " + text.toLowerCase().replace(/[^a-zऀ-ॿ' ]+/g, " ") + " ";
  for (const g of SAFETY.redFlags)
    for (const term of g.terms) {
      const i = t.indexOf(term);
      if (i < 0) continue;
      const pre = t.slice(Math.max(0, i - 24), i);
      if (SAFETY.negations.some(n => pre.includes(n))) continue;
      return { group: g.k, response: SAFETY.responses[g.k] || SAFETY.responses.default };
    }
  const bp = text.match(/(\d{2,3})\s*[/over ]{1,5}\s*(\d{2,3})/);
  if (bp && /\b(bp|blood pressure|systolic|reading)\b/i.test(text)) {
    const [sys, dia] = [+bp[1], +bp[2]];
    const S = SAFETY.bp;
    if (sys >= S.urgent[0] || dia >= S.urgent[1]) return { group: "bp", response: `🛑 ${sys}/${dia} is in the same-day-care range (§8.2 / §15). Get medical attention today. No training until a doctor has seen you.` };
    if (sys >= S.soon[0] || dia >= S.soon[1]) return { group: "bp-soon", response: `⚠️ ${sys}/${dia} is Stage-2 territory (§8.2). Book a doctor within days, and no interval training until then. Easy Zone 2 walking is fine.` };
  }
  return null;
}
