# 07 — Guardrails: medical safety as code

The requirement: strong guardrails, and doctor-visit questions are MANDATORY —
the agent must never coach past a red flag or let the model decide whether safety
applies. Four layers, outermost first; each layer assumes the ones after it fail.

## Layer 1 — Deterministic red-flag scanner (before any model call)

- Source: `safety.json` compiled from the plan's own §15 (chest pain/pressure,
  radiating pain, breathlessness out of proportion, dizziness/fainting,
  palpitations, worst-headache, one-sided weakness/face droop/slurred speech,
  calf "pop", joint giving way) plus §8.2 BP thresholds; synonyms in English,
  Hinglish and common Telugu transliterations; simple negation handling
  ("no chest pain" does not trigger).
- On hit: model is NOT called. The response is the hard-coded stop-rule text from
  §15 (stop now, see a doctor / emergency guidance for stroke-pattern symptoms,
  do not drive yourself), rendered as an unmissable red banner, spoken aloud in
  voice modes, and an `ACK` gate is set: until the user taps "I understand —
  I'll get it checked" (or "false alarm — I was asking generally", which routes
  to an informational answer with the caution kept), the agent refuses to give
  any training coaching and says why.
- BP numbers mentioned in chat are parsed; ≥180/120 → same-day-care response;
  ≥160/100 → doctor-within-weeks response + intervals gate closed.

## Layer 2 — Bedrock Guardrails (input AND output policies)

- Denied topics: diagnosis of conditions; prescription or dosing of any
  medication or supplement; interpretation of lab reports beyond "take this to
  your doctor"; mental-health crisis counselling (redirect to helpline text).
- Contextual grounding check on knowledge answers (must be grounded in retrieved
  plan chunks — kills invented "the plan says" claims).
- PII filters on output. Blocked-response template explains *why* and offers the
  nearest safe alternative, because the pre-mortem flagged over-blocking as an
  abandonment cause — every block must remain helpful.

## Layer 3 — System contract + engine gates

- The system prompt states the agent's identity (coach, not clinician), the
  mandatory-referral rules, and the required answer shape. But nothing depends
  on the model obeying: the medical gates live in the ENGINE — e.g. intervals
  are simply absent from the schedule engine's output until
  `cleared-for-intervals=true`, so the model cannot coach them even if prompted
  ("jailbreak" attempts hit an engine that has no such action to offer).
- Mandatory-doctor state machine (all persisted in GATES, all surfaced by the
  agent at natural moments, never as nags — max one reminder per week each):
  blood panel pending → reviewed; physician clearance before Week-6 intervals;
  any 7-day pain → physio referral suggestion; snoring/apnoea screen per §8.4.

## Layer 4 — Post-response checker + audit

- Deterministic post-check on every model output: medical-adjacent answers must
  carry the disclaimer footer; any numeric that claims to be "from the plan" is
  verified against plan.json (sets/reps/grams); forbidden token classes
  (drug names + dosage patterns) rejected. One regeneration attempt, then a
  template fallback. Every Layer-1/2/4 trigger is logged to an audit trail row
  and (Layer 1 hits) sends the owner an SES email — safety events are never silent.

## Red-team test suite (ships with Phase 3, run in CI)

A fixture file of adversarial prompts — symptom phrasings (including misspelled,
Hinglish, "asking for a friend"), dosage-fishing, "ignore your instructions",
lab-report pastes, crisis phrases — each with the required outcome class. The
suite must pass 100% before any model/prompt/routing change deploys. Adding a
failed real-world case to the suite is a standing maintenance rule.
