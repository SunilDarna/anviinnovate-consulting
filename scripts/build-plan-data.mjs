#!/usr/bin/env node
// Phase 0 — compile health/index.html into the assistant's data artifacts.
//   plan.json   : 12-week calendar, 28-day meal grid, recipes, rules (structured)
//   chunks.json : prose chunks per subsection for retrieval (lexical)
//   safety.json : §15 red-flag lexicon + hard-coded responses
// The calendar/meal-grid are encoded here as literals transcribed from Tables 3.2,
// 5.1 and 5.2 (colspan-heavy HTML tables parse unreliably); a validation pass
// cross-checks them against the HTML so drift is caught at build time.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("health/plan/index.html", "utf8");
const unent = (t) => t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const OUT = "health-api/src/data";
mkdirSync(OUT, { recursive: true });

/* ---------------- recipes: parsed from the HTML ---------------- */
const recipes = {};
const cardRe = /<summary><span class="rid">([A-Z0-9––-]+)<\/span>\s*&nbsp;([^<]+)/g;
let m;
while ((m = cardRe.exec(html))) {
  const ids = m[1], name = unent(m[2].trim().replace(/\s+<.*$/, ""));
  if (ids.includes("–") || ids.includes("-")) continue; // grouped staple cards handled below
  recipes[ids] = { id: ids, name, macros: {} };
}
// grouped staples S1–S7 + snacks K1–K10 (snack table rows)
const snackRe = /<td><span class="rid">(K\d+|S\d)<\/span><\/td>\s*<td><strong>([^<]+)<\/strong>/g;
while ((m = snackRe.exec(html))) recipes[m[1]] = { id: m[1], name: unent(m[2].trim()), macros: {} };
for (const [id, name] of [["S1","Phulka"],["S2","Jowar roti"],["S3","Brown/millet rice"],["S4","Kachumber"],["S5","Peanut-coconut chutney"],["S6","Mint-coriander chutney"],["S7","Peanut podi"]])
  if (!recipes[id]) recipes[id] = { id, name, macros: {} };
// macros: nearest ".macro" block after each rid anchor
for (const id of Object.keys(recipes)) {
  const at = html.indexOf(`>${id}</span>`);
  if (at < 0) continue;
  const seg = html.slice(at, at + 6000);
  const mm = seg.match(/class="macro">([\s\S]*?)<\/div>/);
  if (!mm) continue;
  const kcal = mm[1].match(/(\d+)\s*kcal/); const p = mm[1].match(/P\s*([\d.]+)\s*g/);
  if (kcal) recipes[id].macros.kcal = +kcal[1];
  if (p) recipes[id].macros.protein = +p[1];
}

/* ---------------- 12-week training calendar (Table 3.2) ---------------- */
const S=(name,min,type,note="")=>({name,min,type,note});
const REST=S("Rest",0,"rest"), COOK=S("Rest + batch cook",0,"rest","Sunday batch cook §5.3");
const wk=(...d)=>d;
const programme = [
 wk(S("STR-A1",45,"str"),S("Z2 walk + balance",38,"z2"),S("STR-B1",45,"str"),S("Z2 walk + mobility",40,"z2"),S("Correctives",25,"mob"),S("Z2 long + core",57,"z2"),COOK),
 wk(S("STR-A1",48,"str"),S("Z2 walk + balance",43,"z2"),S("STR-B1",48,"str"),S("Z2 walk + mobility",45,"z2"),S("Yoga (Hatha)",40,"mob"),S("Z2 long + core",62,"z2"),COOK),
 wk(S("STR-A1",50,"str"),S("Z2 + balance",46,"z2"),S("STR-B1",50,"str"),S("Z2 + mobility",48,"z2"),S("Yoga (Hatha)",40,"mob"),S("Z2 long + core",67,"z2"),COOK),
 wk(S("STR-A1",52,"str"),S("Z2 + balance",48,"z2"),S("STR-B1",52,"str"),S("Z2 + mobility",50,"z2"),S("Yoga + mini-test",45,"mob","wk-4 mini-test §1"),S("Z2 long + core",72,"z2"),S("Rest + wk-4 review",0,"rest","§12 review")),
 wk(S("STR-A2",55,"str"),S("Z2 + balance",48,"z2"),S("STR-B2",55,"str"),S("Badminton or Z2",60,"spt"),S("STR-C2",50,"str"),S("Z2 long + core",72,"z2"),S("Yoga / Rest",40,"mob")),
 wk(S("STR-A2",55,"str"),S("HI intervals 4×3 Z4",28,"hi","GATED: doctor clearance §15"),S("STR-B2",55,"str"),S("Badminton or Z2",60,"spt"),S("STR-C2",50,"str"),S("Z2 long + core",72,"z2"),S("Yoga / Rest",40,"mob")),
 wk(S("STR-A2",55,"str"),S("HI intervals 5×3 Z4",31,"hi","GATED"),S("STR-B2",55,"str"),S("Badminton or Z2",60,"spt"),S("STR-C2",50,"str"),S("Z2 long + core",77,"z2"),S("Yoga / Rest",40,"mob")),
 wk(S("STR-A2 deload −40%",35,"str","DELOAD week"),S("Z2 easy",30,"z2"),S("STR-B2 deload −40%",35,"str"),S("Yoga restorative",35,"mob"),S("Rest + 20-min walk",20,"rest"),S("Z2 easy",40,"z2"),S("Rest + wk-8 review",0,"rest")),
 wk(S("STR-A3",55,"str"),S("HI intervals 4×4 Z4–5",32,"hi","GATED"),S("STR-B3",55,"str"),S("Badminton",70,"spt"),S("STR-C3",50,"str"),S("Badminton + Z2",75,"spt"),S("Yoga / Rest",45,"mob")),
 wk(S("STR-A3",55,"str"),S("HI intervals 4×4 Z5",32,"hi","GATED"),S("STR-B3",55,"str"),S("Badminton",70,"spt"),S("STR-C3",50,"str"),S("Badminton + Z2",75,"spt"),S("Yoga / Rest",45,"mob")),
 wk(S("STR-A3",55,"str"),S("HI intervals 5×4 Z5",36,"hi","GATED"),S("STR-B3",55,"str"),S("Badminton",70,"spt"),S("STR-C3",50,"str"),S("Badminton + Z2",75,"spt"),S("Yoga / Rest",45,"mob")),
 wk(S("STR-A3 deload −40%",35,"str","DELOAD + retest week"),S("Z2 easy",30,"z2"),S("STR-B3 deload −40%",35,"str"),S("Rest + 20-min walk",20,"rest"),S("Rest",0,"rest"),S("RETEST full §1 battery",75,"test"),S("Rest + 90-day review",0,"rest")),
];

/* ---------------- 28-day meal grid (Tables 5.1 / 5.2) ---------------- */
const D=(b,s1,l,s2,d)=>({breakfast:b,snackAM:s1,lunch:l,snackPM:s2,dinner:d});
const mealGrid = [
 [D("B1","K1","L1+S3+L2","K3","D1"),D("B2","K4","L7+S3+L2","K2+K5","D2+S1"),D("B3+S6","K1","L3+S2","K3","D3+S3"),D("B5+S5+L1","K4","L5+S1","K6","D5"),D("B7+K3","K1","L4+S3+S4","K7","D4"),D("B4","fruit","L6","K5+K2","D7+S2"),D("B8+S6","fruit","L8+L2","K10+K2","D6+L1+S5")],
 [D("B2","K1","L7+S3+L2","K6","D8+S3+K3"),D("B6","K4","L3+S2+S4","K2+K5","D1"),D("B1","K1","L5+S1","K3","D7+S2"),D("B3+S6","K4","L1+S3+L2","K9","D3+S3"),D("B5+S5+L1","K1","L4+S3+S4","K7","D2+S1"),D("B8+S6","fruit","L6","K5+K2","D4"),D("B4","fruit","L8+L2","K10+K2","D6+L1+S5")],
 [D("B7+K3","K1","L1+S3+L2","K3","D2+S1"),D("B1","K4","L4+S3+S4","K6","D3+S3"),D("B2","K1","L7+S3+L2","K2+K5","D8+S3+K3"),D("B6","K4","L3+S2+S4","K9","D5"),D("B3+S6","K1","L5+S1","K7","D1"),D("B4","fruit","L6","K5+K2","D7+S2"),D("B8+S6","fruit","L8+L2","K10+K2","D6+L1+S5")],
 [D("B5+S5+L1","K1","L3+S2+S4","K3","D4"),D("B2","K4","L1+S3+L2","K6","D7+S2"),D("B7+K3","K1","L5+S1","K2+K5","D1"),D("B1","K4","L7+S3+L2","K9","D8+S3+K3"),D("B6","K1","L4+S3+S4","K7","D2+S1"),D("B3+S6","fruit","L6","K5+K2","D3+S3"),D("B4","fruit","L8+L2","K10+K2","D6+L1+S5")],
];

/* ---------------- rules ---------------- */
const rules = {
  cutFirstOrder: ["Yoga","HI intervals","One badminton session","Third strength session","Zone 2 length","Convert to MVS-20"],
  neverCut: ["Sleep","Post-lunch 10-min walk + desk resets","Eating (K3 in the drawer)","Weight average + training log"],
  aqi: { outdoorOk: 100, intensityIndoors: 150 },
  timeBuckets: [[0,5.5,"night"],[5.5,7.25,"morning-session"],[7.25,10.75,"work-am"],[10.75,11.25,"snack-am"],[11.25,13,"work-late-am"],[13,14,"lunch"],[14,17,"work-pm"],[17,17.5,"snack-pm"],[17.5,19.5,"evening"],[19.5,20.75,"dinner"],[20.75,23,"wind-down"],[23,24,"night"]],
  fallbacks: { mvs:"MVS-20 (§3.8): 20-min minimum-viable session — 4 rounds: goblet squat, incline push-up, one-arm row, hip thrust, dead bug, carry hold. It SUBSTITUTES today's session, never stacks.",
    hotel:"HOTEL-25 (§3.8): zero-equipment — Bulgarian split squat, push-up, towel row, single-leg hip thrust, wall sit, suitcase carry, side plank + balance.",
    comeback:"After a 5+ day gap (§7.3): first session back at 60% intensity, doubles only if badminton, no smashes, no make-ups. Restart at the load used two weeks prior." },
  alwaysAppropriate: ["90-second desk reset (§3.7)","10-minute walk (post-meal is best)","Balance block: single-leg stance eyes closed, 3 min","Extended-exhale breathing 4-in/6-out, 6 min (§8.1)","Prep the next meal from the Sunday boxes","Hydration check: pale-straw urine is the target (§4.5)"],
  reviewDay: 0, // Sunday
};

/* ---------------- safety (§15 + §8.2) ---------------- */
const safety = {
  redFlags: [
    { k:"cardiac", terms:["chest pain","chest pressure","chest tight","chest burning","pain in my chest","seene mein dard","seene me dard","left arm pain","jaw pain","pain radiating","cold sweat nausea"] },
    { k:"breath", terms:["can't breathe","cannot breathe","struggling to breathe","breathless","short of breath","saans nahi","saans phool"] },
    { k:"syncope", terms:["dizzy","dizziness","light-headed","lightheaded","fainted","fainting","passed out","blacked out","greying vision","chakkar","behosh"] },
    { k:"palpit", terms:["palpitation","heart racing","pounding heart","irregular heartbeat","skipped beats"] },
    { k:"stroke", terms:["face droop","slurred speech","one side weak","one-sided weakness","numb on one side","worst headache"] },
    { k:"msk", terms:["heard a pop","felt a pop","calf pop","snapping sound","gave way","cannot bear weight","can't put weight"] },
  ],
  negations: ["no ","not ","without ","never ","don't have","do not have","nahi hai","free of"],
  responses: {
    stroke: "🚨 One-sided weakness, facial droop, slurred speech or a sudden worst-ever headache are STROKE warning signs. Call for emergency help NOW — do not drive yourself, do not wait to see if it passes. (Plan §15.) I've paused all training guidance until you tell me you've been seen.",
    cardiac: "🛑 STOP exercising now. Chest pain/pressure — especially with arm, jaw or back radiation, sweating or nausea — needs a doctor TODAY, and emergency care if it is happening right now. Do not drive yourself. (Plan §15.) I won't give training advice until you confirm you've had it checked.",
    default: "🛑 That symptom is on the plan's stop list (§15). Stop the activity now and see a doctor before training again — today if it's happening right now. I've paused training coaching until you confirm a doctor has seen you, or tell me you were asking generally.",
  },
  bp: { urgent:[180,120], soon:[160,100], review:[130,80] },
  gates: {
    intervals: "High-intensity interval sessions are locked until you confirm your doctor has reviewed your blood panel and cleared you for intense exercise (plan §3.3 gate + family history). Everything else in the plan is open — Zone 2 and strength continue as normal.",
    bloodPanel: "Your blood panel is marked as not yet reviewed with a doctor. Worth booking — §4.3's vitamin D / B12 / iron decisions all wait on it.",
  },
};

/* ---------------- chunks: prose per subsection ---------------- */
const chunks = [];
const secRe = /<section id="(s\d+|audit|summary)"[^>]*>([\s\S]*?)<\/section>/g;
let sm;
while ((sm = secRe.exec(html))) {
  const [_, sid, body] = sm;
  const title = (body.match(/<h2[^>]*>[\s\S]*?<\/span>([^<]+)<\/h2>/) || [,"?"])[1].trim();
  const parts = body.split(/<h3[^>]*>/);
  parts.forEach((part, i) => {
    const h3 = i === 0 ? "" : (part.match(/^([^<]+)/) || [,""])[1].trim();
    const text = part.replace(/<style[\s\S]*?<\/style>/g," ").replace(/<script[\s\S]*?<\/script>/g," ")
      .replace(/<[^>]+>/g," ").replace(/&nbsp;|&amp;|&lt;|&gt;|&#\d+;/g," ").replace(/\s+/g," ").trim();
    if (text.length < 120) return;
    for (let o = 0; o < text.length; o += 1600)
      chunks.push({ sid, title, h3, text: text.slice(o, o + 1800) });
  });
}

/* ---------------- validate ---------------- */
const errs = [];
if (programme.length !== 12) errs.push("programme != 12 weeks");
if (programme.some(w => w.length !== 7)) errs.push("week without 7 days");
if (mealGrid.length !== 4 || mealGrid.some(w=>w.length!==7)) errs.push("meal grid != 4x7");
const slotCount = mealGrid.flat().length * 5;
if (slotCount !== 140) errs.push(`meal slots ${slotCount} != 140`);
const refIds = new Set(mealGrid.flat().flatMap(d=>Object.values(d)).flatMap(v=>v.split("+")).map(s=>s.trim()).filter(s=>/^[A-Z]\d+$/.test(s)));
for (const id of refIds) if (!recipes[id]) errs.push(`meal grid references unknown recipe ${id}`);
if (Object.keys(recipes).length < 40) errs.push(`only ${Object.keys(recipes).length} recipes parsed`);
if (chunks.length < 80) errs.push(`only ${chunks.length} chunks`);
for (const sid of ["s1","s3","s4","s5","s8","s15"]) if (!chunks.some(c=>c.sid===sid)) errs.push(`no chunks for ${sid}`);
if (errs.length) { console.error("VALIDATION FAILED:\n" + errs.join("\n")); process.exit(1); }

writeFileSync(`${OUT}/plan.json`, JSON.stringify({ builtAt:new Date().toISOString(), programme, mealGrid, recipes, rules }, null, 0));
writeFileSync(`${OUT}/chunks.json`, JSON.stringify(chunks));
writeFileSync(`${OUT}/safety.json`, JSON.stringify(safety, null, 0));
console.log(`OK  recipes=${Object.keys(recipes).length}  chunks=${chunks.length}  weeks=${programme.length}  mealSlots=${slotCount}`);
