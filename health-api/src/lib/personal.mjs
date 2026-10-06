// Personalization engine — deterministic, from the document's own formulas.
// The Blueprint is written for a 35 y / 65 kg / 164 cm reference; this module
// recomputes every number for the actual user. Same core, personal numbers.
const REF_KCAL = 2250; // the recipe rotation's design target (§4.1)

export function computePersonal(p = {}) {
  const age = num(p.age, 18, 90);
  const w = num(p.weightKg, 35, 200);
  const h = num(p.heightCm, 130, 220);
  const sex = ["male", "female"].includes(p.sex) ? p.sex : null;
  if (!age || !w || !h) return { complete: false };

  const bmi = +(w / ((h / 100) ** 2)).toFixed(1);
  // Mifflin-St Jeor (§4.1); unknown sex → midpoint
  const bmr = 10 * w + 6.25 * h - 5 * age + (sex === "male" ? 5 : sex === "female" ? -161 : -78);
  const paf = { sedentary: 1.35, light: 1.45, moderate: 1.55, high: 1.7 }[p.activity] || 1.45;
  const kcal = Math.round((bmr * paf) / 50) * 50;

  // South-Asian BMI bands (§1.3); never extreme in either direction (§4.10)
  let kcalNote = "maintenance — hold current weight while training";
  let kcalTarget = kcal;
  if (bmi >= 27.5) { kcalTarget = kcal - 300; kcalNote = "gentle 300 kcal/day below maintenance — never a crash cut (§4.10); confirm with your doctor"; }
  else if (bmi < 18.5) { kcalTarget = kcal + 300; kcalNote = "gentle 300 kcal/day above maintenance to build — extra dal, milk, peanuts (§4.10)"; }

  const proteinPerKg = age >= 60 ? 1.8 : 1.6;           // anabolic resistance rises with age (§14)
  const protein = Math.round(proteinPerKg * w);
  const waterMl = Math.round((32 * w) / 50) * 50;       // §4.5 baseline; seasons adjust on top
  const hrMax = Math.round(208 - 0.7 * age);            // Tanaka (§2.2)
  const z2 = [Math.round(hrMax * 0.6), Math.round(hrMax * 0.7)];
  const waistMax = Math.round(h / 2);                   // WHtR < 0.5 (§1.3)
  const portionFactor = +(kcalTarget / REF_KCAL).toFixed(2);

  const decade =
    age < 45 ? { band: "under 45", focus: "build the reserve — strength, VO₂max, bone, and the habit itself (§14)" } :
    age < 55 ? { band: "45–54", focus: "hold the line — keep load, add deliberate power work, watch BP and glucose drift (§14)" } :
    age < 65 ? { band: "55–64", focus: "defend power and bone — fast-intent work, impact if joints allow, balance gets serious (§14)" } :
               { band: "65+", focus: "defend independence — sit-to-stand, carries, daily balance, falls are the enemy (§14)" };

  const hx = p.health || {};
  const notes = [];
  const hardGate = !!hx.heart; // known heart condition → everything intense stays locked
  if (hx.heart) notes.push("known heart condition: intervals AND racquet sport stay locked until a doctor explicitly clears them; Zone 2 and light strength only until then");
  if (hx.hypertension) notes.push("hypertension: weekly home-BP series (§8.2), salt ceiling 4 g, no breath-holding on lifts; intervals need doctor clearance");
  if (hx.diabetes) notes.push("diabetes/pre-diabetes: the 10-min post-meal walk is a priority tool (§9.1); millet-forward carbs; discuss training with the treating doctor");
  if (hx.joints) notes.push("joint issues: prefer the low-impact swaps — split squat depth to tolerance, cycling over jumping, no plyometrics until pain-free 4 weeks (§3.6)");
  if (hx.back) notes.push("back history: hinge pattern learned light and filmed; no loaded spinal flexion; stop rule on any radiating pain (§15)");
  if (hx.asthma) notes.push("asthma: warm up longer, carry the inhaler to sessions, AQI rules apply one band stricter (§3.9)");
  if (hx.other) notes.push(`other condition noted ("${String(hx.other).slice(0,80)}"): default to doctor-first on anything intense`);
  const fam = p.family || {};
  if (fam.heart || fam.hypertension) notes.push("family history of heart/BP: baseline BP series now, doctor review before Week-6 intervals (§8.2)");
  if (fam.diabetes) notes.push("family history of diabetes: annual HbA1c from now, post-meal walks daily (§13)");

  const setup = [];
  if (p.equipment === "none") setup.push("no equipment: bodyweight + backpack loading; MVS-20 and HOTEL-25 patterns are the default (§3.8); suggest bands as the first cheap purchase");
  else if (p.equipment === "bands") setup.push("bands only: band variants for pulls/presses; backpack for leg loading; dumbbells are the next purchase (§3.0)");
  else if (p.equipment === "gym") setup.push("full gym access: machine/barbell equivalents are fine swaps for the dumbbell work");
  if (p.timeBudget && Number(p.timeBudget) <= 35) setup.push(`only ~${p.timeBudget} min on weekdays: default sessions to the MVS-20 shape and never suggest the full 55-min versions on a weekday (§3.8)`);
  else if (p.timeBudget) setup.push(`~${p.timeBudget} min available on weekdays`);
  return { complete: true, age, sex, bmi, kcal: kcalTarget, kcalNote, protein, proteinPerKg, waterMl,
    hrMax, z2, waistMax, portionFactor, decade, notes, hardGate, setup,
    equipment: p.equipment || null, timeBudget: p.timeBudget || null };
}
const num = (v, lo, hi) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : null; };

export function personalSummary(per) {
  if (!per.complete) return "PERSONAL: profile incomplete — ask the user to finish onboarding (age, height, weight) in Settings before quoting numbers.";
  return [
    `PERSONAL (computed for THIS user — use these over the document's reference numbers; the document's 65 kg/35 y values are a reference edition):`,
    `age ${per.age}${per.sex ? " " + per.sex : ""}, BMI ${per.bmi}. Daily energy target ${per.kcal} kcal (${per.kcalNote}).`,
    `Protein ${per.protein} g/day (${per.proteinPerKg} g/kg). Water ~${(per.waterMl/1000).toFixed(1)} L base. Waist target < ${per.waistMax} cm.`,
    `HRmax ≈ ${per.hrMax}; Zone 2 = ${per.z2[0]}–${per.z2[1]} bpm (talk test overrides).`,
    `Recipe portions: the rotation is built for 2250 kcal — this user scales portions ×${per.portionFactor}.`,
    `Age band ${per.decade.band}: ${per.decade.focus}.`,
    per.notes.length ? `Health-history rules: ${per.notes.join(" | ")}` : "",
    per.setup?.length ? `Training setup: ${per.setup.join(" | ")}` : "",
  ].filter(Boolean).join("\n");
}
