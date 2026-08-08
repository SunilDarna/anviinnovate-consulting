// Programme structure v2026.2 — the three-tier model.
// Tier 1 and 2 are self-paced and machine-graded. Tier 3 is cohort-based and
// instructor-led, and is the only tier that can carry a human-assessed credential.

export const programme = {
  version: "2026.2",
  updated: "August 2026",
  scenarioHours: 180,
  scenarioCount: 102,
  caseStudyCount: 109,
  organisations: 68,
};

export const tiers = [
  {
    id: "core",
    n: "Tier 1",
    name: "Core",
    hours: 440,
    delivery: "Self-paced",
    grading: "Machine-graded",
    tagline: "Every module, practised — not skimmed.",
    blurb:
      "Twelve units, each ending in something you can show. All 102 mandatory scenarios sit here. " +
      "Runs entirely on your own laptop: no cloud account, no GPU, no paid API.",
    facts: ["12 units", "13 shippable artifacts", "102 scenarios", "~180 h of practice"],
    accent: "core",
  },
  {
    id: "spec",
    n: "Tier 2",
    name: "Specialisations",
    hours: 150,
    hoursNote: "each, six available",
    delivery: "Self-paced",
    grading: "Machine-graded",
    tagline: "Depth, chosen by you.",
    blurb:
      "Taken after core, in any number. This is also where the hardware-heavy material lives — " +
      "fine-tuning, Kubernetes, serving at scale — with free-cloud escape hatches so an 8 GB laptop is never the blocker.",
    facts: ["6 tracks", "~150 h each", "Take one or all", "Free-tier cloud where needed"],
    accent: "spec",
  },
  {
    id: "ready",
    n: "Tier 3",
    name: "Deployment Readiness",
    hours: 500,
    delivery: "Cohort, instructor-led",
    grading: "Human + machine",
    tagline: "The part a self-paced course cannot produce.",
    blurb:
      "Real supervision, real code review, a real stakeholder and a named reference at the end. " +
      "Ten modules including a 90-hour live project with an external partner.",
    facts: ["10 modules", "12 weeks full-time", "Live project + OJT", "Supervisor reference"],
    accent: "ready",
  },
];

// Tier 1 — the twelve core units. `scenarios` counts are derived at build time.
export const units = [
  { id: "U1",  name: "First working AI",            env: "Browser",          artifact: "RAG over your own notes" },
  { id: "U2",  name: "Python & data for AI",        env: "Browser",          artifact: "Ingest + clean pipeline" },
  { id: "U3",  name: "SQL & data quality",          env: "Browser",          artifact: "Query layer, one tuned 10×" },
  { id: "U4",  name: "Classical ML",                env: "Browser → native", artifact: "Leakage-free predictive model" },
  { id: "U5",  name: "Model evaluation",            env: "Native",           artifact: "Honest evaluation report" },
  { id: "U6",  name: "Deep learning",               env: "Native",           artifact: "CNN + transfer classifier" },
  { id: "U7",  name: "Transformers & embeddings",   env: "Native",           artifact: "nanoGPT trained from scratch" },
  { id: "U8",  name: "LLMs & prompting",            env: "Native",           artifact: "Versioned prompt library" },
  { id: "U9",  name: "RAG",                         env: "Native",           artifact: "Hybrid retrieval, measured recall@k" },
  { id: "U10", name: "Agents & tools",              env: "Native + Ollama",  artifact: "Guardrailed, recoverable agent" },
  { id: "U11", name: "Evaluation & observability",  env: "Native",           artifact: "Eval harness, retrieval vs generation" },
  { id: "U12", name: "Shipping",                    env: "Native + HF",      artifact: "Deployed, eval-gated service" },
];

// Tier 2 — specialisation tracks.
export const specialisations = [
  { id: "S1", name: "AI Engineer",          adds: "Advanced RAG, multi-agent systems, reliability, routing, caching", env: "Local only",            target: "Highest 2026 demand" },
  { id: "S2", name: "GenAI / LLM Engineer", adds: "Dataset engineering, LoRA/QLoRA, quantisation, serving, benchmarking", env: "Colab / HF ZeroGPU", target: "Highest paid" },
  { id: "S3", name: "MLOps / LLMOps",       adds: "Containers, pipelines, registry, CI eval gates, drift, monitoring", env: "Codespaces / k3s",    target: "Fastest-growing postings" },
  { id: "S4", name: "Data Scientist",       adds: "Experimentation, A/B, causal reasoning, SHAP, dashboards",          env: "Local only",           target: "BLS +34% to 2034" },
  { id: "S5", name: "Data & RAG Engineer",  adds: "Ingestion at scale, dbt, index tuning, retrieval operations",       env: "Local + BigQuery",     target: "The retrieval layer" },
  { id: "S6", name: "AI Solutions Architect", adds: "System design, cost modelling, HA, governance",                   env: "Azure for Students",   target: "Advanced, post-core" },
];

// Tier 3 — instructor-led modules.
export const readinessModules = [
  { id: "P1",  name: "Professional Engineering Practice", hours: 50, covers: "SRS, HLD, LLD, traceability, coding standards, code review at team scale, branching, release approval", human: "Design review, PR review" },
  { id: "P2",  name: "Systems & Performance Engineering", hours: 45, covers: "Profiling, memory hierarchy, Flynn's taxonomy, Amdahl's law, GIL, BLAS threading, quantisation, KV-cache, continuous batching", human: "Trade-off defence" },
  { id: "P3",  name: "Production Cloud & MLOps",          hours: 60, covers: "Docker, Kubernetes, Helm, MLflow, Airflow, Terraform, CI/CD with eval gates, canary and rollback, Prometheus/Grafana, drift", human: "Incident response, on-call" },
  { id: "P4",  name: "Enterprise AI Platforms",           hours: 50, covers: "AWS Bedrock and AgentCore, Azure AI Foundry, Vertex AI, managed vs custom RAG, guardrails, quotas, build-vs-buy", human: "Architecture review" },
  { id: "P5",  name: "Serving & Inference at Scale",      hours: 40, covers: "vLLM, SGLang, Triton, tensor parallelism, autoscaling, load testing, cost per million tokens", human: "Capacity defence" },
  { id: "P6",  name: "Team Delivery Simulation",          hours: 45, covers: "Agile ceremonies, backlog, estimation, dependencies, risk register, stakeholder negotiation, injected incidents", human: "Stakeholder role-play, standups" },
  { id: "P7",  name: "Employability & Communication",     hours: 60, covers: "Workplace English, technical writing, communication, career development, financial and legal literacy, interview readiness", human: "Mock interviews, presentation feedback" },
  { id: "P8",  name: "Inclusive & Sustainable Workplace", hours: 30, covers: "Diversity policy, PwD-inclusive practice, accessibility review, energy and resource efficiency, e-waste", human: "Workplace audit, facilitation" },
  { id: "P9",  name: "Live Project / OJT",                hours: 90, covers: "Real client or internal product work, supervised, ticket flow, code review, release participation", human: "Supervisor, logbook sign-off", doc: "/docs/ojt-reference-flow-v1.1.html" },
  { id: "P10", name: "Placement Readiness",               hours: 30, covers: "Portfolio defence, resume, GitHub, system-design interviews, salary negotiation", human: "Panel, mock interviews" },
];

export const sizeMeta = {
  micro: { label: "Micro", dur: "30–45 min", blurb: "One judgement call, one bug, one decision." },
  build: { label: "Build", dur: "2–3 h",     blurb: "Make something small actually work." },
  ship:  { label: "Ship",  dur: "6–8 h",     blurb: "A production-shaped deliverable." },
};

export const unitName = (id) => (units.find((u) => u.id === id) || {}).name || id;
