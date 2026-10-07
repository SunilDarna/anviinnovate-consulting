// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every claim, number and citation on the site.
//
// RULE: if a number is not true and defensible today, leave it null. Every
// component checks for null and omits the block rather than inventing a figure.
//
// Restructured 2026-10-07 after the go-to-market readiness review
// (docs/gtm/gtm-readiness-v1.0.html). The headline change: the offer leads with
// EXPERIENCED AI-native Forward Deployed Engineers, because that is what the
// buyer is short of — GCC fresher share fell to 16% of planned FY27 hiring while
// 1–5 year talent is 30%. Trained early-career engineers remain a second, named
// tier for volume and hire-train-deploy programmes, rather than the whole offer.
// ─────────────────────────────────────────────────────────────────────────────

// ── THE TWO SUPPLY TIERS ─────────────────────────────────────────────────────
export const tiers = [
  {
    id: "fde",
    name: "Forward Deployed AI Engineers",
    lead: true,
    band: "2–6 years, AI-native",
    desc:
      "Engineers who sit inside your team and take an AI system from prototype to production — " +
      "legacy data, hybrid retrieval, stateful agents, evals and cost. They have delivered against " +
      "the failure modes, not just the tutorials.",
    mix: "50% full-stack systems · 30% applied AI, RAG and agents · 20% client advisory",
    for: "A product that has to work in front of real users, on real enterprise data.",
  },
  {
    id: "trained",
    name: "Trained AI engineers",
    lead: false,
    band: "Early career, assessed",
    desc:
      "Graduates and career-switchers who have completed the same curriculum and passed the same " +
      "scored assessment. Supervised by an FDE on delivery, so they are productive inside a team " +
      "rather than left to find their own way.",
    mix: "Deployed in a pod with an FDE lead, or hired direct through hire-train-deploy",
    for: "Volume programmes where cost per seat matters and there is a senior to supervise.",
  },
];

// ── THE FDE TRACK ────────────────────────────────────────────────────────────
// Real, built curriculum. Stage names and hours come straight from the track
// definition — do not restate them here without checking the source.
export const fdeTrack = {
  credential: "AAP-FDE — Applied AI Professional, Forward Deployed AI Engineer",
  totalHours: 33,
  stages: [
    { n: "Orient",            h: "1 h",  d: "The FDE role and what enterprise reality actually looks like." },
    { n: "Plumbing",          h: "5 h",  d: "Legacy data and unstructured documents — the part that decides everything downstream." },
    { n: "Retrieve & Ground", h: "5 h",  d: "Hybrid retrieval and knowledge graphs, with citations that hold up." },
    { n: "Orchestrate",       h: "6 h",  d: "Stateful agents and sandboxed tools, with recovery when they fail." },
    { n: "Verify & Protect",  h: "6 h",  d: "Continuous evaluation and red-teaming before anything reaches a user." },
    { n: "Ship & Turnaround", h: "9 h",  d: "Cost routing, and a 72-hour rapid MVP under a real deadline." },
    { n: "Certify",           h: "1 h",  d: "The AAP-FDE assessment." },
  ],
};

// ── FIRST-PARTY PROOF ────────────────────────────────────────────────────────
// Curriculum numbers below are real and evidenced in the training repository.
// The commercial numbers are null until there is something true to put there.
export const proof = {
  caseStudies: 109,          // verified production case studies behind the curriculum
  organisations: 68,         // companies those case studies are drawn from
  scenarios: 102,            // mandatory hands-on practice scenarios
  fdeHours: 33,              // assessed hours in the FDE track

  peopleTrained: null,       // FILL: cumulative completions
  benchAvailable: null,      // FILL: people available to deploy right now
  medianDaysToShortlist: null, // FILL: measure this from the first five requests
  assessmentPassRate: null,  // FILL: % passing the exit assessment
  asOf: null,                // FILL: e.g. "October 2026"
};
export const curriculumProof = [
  [proof.caseStudies,   "verified production case studies behind the curriculum"],
  [proof.organisations, "companies those failures were documented at"],
  [proof.scenarios,     "mandatory hands-on scenarios before deployment"],
  [proof.fdeHours,      "assessed hours in the FDE track"],
].filter(([v]) => v !== null);
export const commercialProof = [
  [proof.peopleTrained,         "engineers trained to date"],
  [proof.benchAvailable,        "available to deploy now"],
  [proof.medianDaysToShortlist, "median days to shortlist"],
  [proof.assessmentPassRate !== null ? proof.assessmentPassRate + "%" : null, "pass the exit assessment"],
].filter(([v]) => v !== null);

// ── COMMITMENTS ──────────────────────────────────────────────────────────────
// Risk reversal. Buyers' standard remedy is removal plus free replacement.
// Set published:true only once these are in the signed contract template.
export const commitments = {
  published: false,
  shortlistHours: 48,
  replacementDays: 10,
  guaranteeWeeks: 4,
  trialDays: 10,
};

// ── MARKET CONTEXT ───────────────────────────────────────────────────────────
// Every stat carries source and period. Do not add one without both.
// REMOVED 2026-10-07: Grand View "AI training dataset market, USD 8.60bn by
// 2030" — that measures data annotation, not talent. Wrong market entirely.
export const marketStats = [
  { n: "62%",   label: "average wage premium for AI skills",      src: "PwC AI Jobs Barometer 2026" },
  { n: "90%",   label: "of developers now use AI at work",        src: "DORA, 2025" },
  { n: "4 of 5", label: "fastest-growing US roles are AI roles",  src: "LinkedIn Jobs on the Rise 2026" },
  { n: "+20%",  label: "India AI/ML hiring growth, year on year", src: "Naukri JobSpeak, September 2026" },
];
export const buyerContext = {
  gccShare: "71%",
  gccSrc: "Quess Corp professional staffing headcount, Q1 FY27 investor presentation",
  itStaffingGrowth: "10.1%",
  itStaffingSrc: "Indian Staffing Federation, FY26",
};

// ── ROLE TRACKS ──────────────────────────────────────────────────────────────
// Nine tracks off one bench is not credible at small scale, and the reported
// shortfall concentrates in AI/ML, data and platform. Three lead; rest on demand.
export const tracks = [
  { name: "AI / ML Engineering", primary: true,
    desc: "Production LLM features: RAG design, agents, fine-tuning, and the evaluation discipline that keeps them honest." },
  { name: "Data & AI Platform Engineering", primary: true,
    desc: "The retrieval layer and the pipelines under it — ingestion, chunking, embeddings, hybrid search, reranking, vector operations." },
  { name: "AI Evaluation & Reliability", primary: true,
    desc: "Testing non-deterministic systems: eval harnesses, agent trajectories, LLM-as-judge in CI, regression gates before release." },
  { name: "Software Engineering", primary: false, desc: "Backend and full-stack with agentic workflows, built around verification." },
  { name: "DevOps / SRE / Platform", primary: false, desc: "LLM serving, inference gateways and agent guardrails." },
  { name: "Security & AI Security", primary: false, desc: "Prompt-injection defence, RAG poisoning, agent permission scoping, AI governance." },
  { name: "Cloud & Solutions Architecture", primary: false, desc: "Managed-versus-custom RAG, agentic workloads, AI cost architecture." },
  { name: "Frontend & Mobile", primary: false, desc: "Streaming chat interfaces, generative UI, on-device AI." },
  { name: "Product & Analysis", primary: false, desc: "Eval sets, failure modes, AI-feature metrics, requirements written around agents." },
];

// ── VENDOR ONBOARDING ────────────────────────────────────────────────────────
// Every enterprise RFP reviewed in the research demanded these by name.
export const vendorDocs = [
  { doc: "Certificate of Incorporation (CIN)",              ready: false },
  { doc: "PAN",                                             ready: false },
  { doc: "GSTIN (one per state of deployment)",             ready: false },
  { doc: "EPF registration",                                ready: false },
  { doc: "ESIC registration",                               ready: false },
  { doc: "Contract labour licence, where applicable",       ready: false },
  { doc: "Shops & Establishments registration",             ready: false },
  { doc: "Professional tax registration",                   ready: false },
  { doc: "Udyam / MSME registration",                       ready: false },
  { doc: "Professional indemnity & workmen's comp cover",   ready: false },
  { doc: "Audited financial statements",                    ready: false },
  { doc: "Standard MSA and SOW templates",                  ready: false },
  { doc: "Background-verification policy",                  ready: false },
  { doc: "DPDP-aligned privacy & data-handling policy",     ready: false },
];
export const vendorReadyCount = vendorDocs.filter((d) => d.ready).length;

// ── COMMERCIALS ──────────────────────────────────────────────────────────────
// Commission model, not margin-on-billing. We do not employ the engineers, so
// there is no payroll float and no bench cost — we are paid on placement.
// Band percentages follow prevailing Indian recruitment practice; confirm your
// own before quoting (typical market: 8.33-12.5% junior/mid, 15-20% senior).
export const commercials = {
  bands: [
    { band: "Trained engineer",          years: "0-2 years",  pct: "8.33%", payable: "On joining" },
    { band: "Forward Deployed Engineer", years: "2-6 years",  pct: "12.5%", payable: "On joining" },
    { band: "Senior / lead",             years: "6+ years",   pct: "16.67%", payable: "On joining" },
  ],
  included: [
    "Sourcing and shortlisting from the trained bench and partner network",
    "Assessment score and work sample attached to every profile",
    "Interview scheduling and coordination",
    "Offer and joining follow-through",
    "Replacement within the agreed window, at no further commission",
  ],
  excluded: [
    "No retainer and no subscription — you pay on placement only",
    "No charge for shortlists you do not progress",
    "We do not run payroll for deployed engineers",
    "We do not mark up anyone else's salary",
  ],
  partnerCriteria: [
    "A registered firm with engineers on your own payroll",
    "Engineers with demonstrable production AI work, not only certifications",
    "Willingness to have candidates assessed before submission",
    "Responsiveness — the requirement closes whether or not you reply",
  ],
};
