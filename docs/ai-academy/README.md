# Anvi Innovate AI Academy — Documentation

Planning, curriculum and research documents for the AI Talent Academy: an NSQF-aligned,
industry-validated training programme that takes fresh graduates and 3rd/4th-year students
to job-ready across six AI roles.

All documents are self-contained HTML (open in any browser; each has a built-in
**Save as PDF / Print** button). No build step, no external dependencies.

---

## Current documents

| Document | Version | Status | Purpose |
|---|---|---|---|
| [`curriculum/curriculum-v2026.1.html`](curriculum/curriculum-v2026.1.html) · [PDF](curriculum/curriculum-v2026.1.pdf) | **2026.1** | Current | **The complete curriculum.** 23 subjects, 1,050 h, all six role tracks, NOS mapping, assessment framework, lab spec, compliance checklist |
| [`strategy/program-roadmap-v1.0.html`](strategy/program-roadmap-v1.0.html) | 1.0 | Current | Programme roadmap: government funding rails, NSQF credentialing, go-to-market, pricing benchmarks, 12-month build plan |
| [`strategy/curriculum-blueprint-v0.9.html`](strategy/curriculum-blueprint-v0.9.html) | 0.9 | Superseded by 2026.1 | Earlier high-level blueprint — retained for rationale history |
| [`research/ai-jobs-demand-2026-v1.0.html`](research/ai-jobs-demand-2026-v1.0.html) | 1.0 | Current | Market research: most in-demand AI roles 2026, demand signals, salary bands, forecast to 2030 |

### Official source documents (compliance basis)

`reference/nsqf-source/` holds the government publications the curriculum is mapped to.
These are the source of truth for any certification claim.

| File | What it is |
|---|---|
| `QP-SSC-Q8113-v2.0-ai-ml-engineer.pdf` | Qualification Pack **SSC/Q8113**, AI-Machine Learning Engineer, NSQF Level 7, IT-ITeS SSC (NASSCOM). Source of all NOS codes, performance criteria, mark allocations and the 70% pass rule |
| `model-curriculum-v3.0-ai-ml-engineer.pdf` | NSQF **Model Curriculum v3.0** — source of the statutory 480 h structure (144 Theory + 246 Practical + 90 OJT) and module breakdown |

---

## Curriculum at a glance (v2026.1)

- **1,050 h total** — 960 h taught (24 weeks full-time) + 90 h mandatory OJT
- **480 h statutory core fully embedded** per Model Curriculum v3.0
- **Anchor qualification:** SSC/Q8113 (NSQF Level 7), IT-ITeS Sector Skill Council
- **Pass standard:** 70% aggregate, ≥70% on every technical NOS (matches the QP rule)

**Structure:** Foundations (F01–F08) → Core AI (C01–C05) → Applied GenAI (G01–G05) →
one Role Track (R1–R6) → Capstone + OJT, with Professional Practice (P01–P02) running in parallel.

**Role tracks:** AI Engineer · GenAI/LLM Engineer · MLOps/LLMOps Engineer · Data Scientist ·
Data & RAG Engineer · AI Solutions Architect.

---

## Open items before first cohort

These are blocking and tracked in §15 of the curriculum document:

1. **Confirm current QP and Model Curriculum versions** with IT-ITeS SSC — the published QP v2.0
   carries review/deactivation dating of 2025, and MC v3.0 shows validity to 22/09/2025.
2. **Resolve the NSQF level discrepancy** — MC v3.0 records the constituent NOS at Level 5 while
   the QP header states Level 7. Clarify which applies to certification claims.
3. **Register a fresher-appropriate companion QP** — Q8113 nominally expects a graduate with
   2–3 years' experience. Candidates: *Certified AI Associate*, *AI Application Developer*
   (NSQF 4.5, NIELIT).
4. Engage an SSC-empanelled assessment agency; certify trainers; commission lab/cloud
   infrastructure; secure OJT hosts.

---

## Versioning convention

- **Curriculum** uses calendar versioning `vYYYY.N` (e.g. `v2026.1`) because content currency
  matters more than semantic change — the AI tech stack drifts within months.
- **Strategy and research** use `vMAJOR.MINOR`.
- Each release is git-tagged (e.g. `ai-academy-curriculum-v2026.1`).
- Superseded versions are retained rather than deleted, so the reasoning history stays available.

### Re-validation policy

The curriculum **must be re-validated before every cohort**:

- Re-confirm the tech-stack atlas (§6 of the roadmap, §5–§8 of the curriculum) — tooling in the
  GenAI layer changes fast.
- Re-confirm QP/Model Curriculum currency with the SSC.
- Publish a change log with the new version number.

### Regenerating the PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="curriculum-v2026.1.pdf" \
  --virtual-time-budget=10000 \
  "file://$PWD/curriculum-v2026.1.html"
```

---

## Enhancement backlog

Candidate next steps, roughly in value order:

- [ ] Session-by-session lesson plans for one stage (topic, activity, artefact per session)
- [ ] Awarding-body submission pack — traceability matrix in SSC's required format
- [ ] Question banks per subject, mapped to the §12.4 concept bank
- [ ] Capstone project catalogue with per-project rubrics and datasets
- [ ] FutureSkills Prime content-partner application material
- [ ] Trainer handbook and train-the-trainer material
- [ ] Cohort planner / unit-economics model with real cost inputs
- [ ] Dedicated per-role research for the five non-anchor tracks (AI Engineer is the most
      heavily evidenced; the others apply the same validated structure)

---

## Provenance

Curriculum compliance content is read directly from the official NQR publications in
`reference/nsqf-source/`. Market and industry content is sourced from NASSCOM-Deloitte,
MeitY–NASSCOM FutureSkills Prime, NSDC/PMKVY, DeepLearning.AI, roadmap.sh and 2026 industry
analyses — each document carries its own sources section with confidence and caveats.

Industry tooling reflects the production stack current as of **August 2026** and is expected
to drift; treat the re-validation policy above as mandatory rather than advisory.
