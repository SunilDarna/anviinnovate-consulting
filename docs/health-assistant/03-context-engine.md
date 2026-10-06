# 03 — The context engine (the heart of "aware")

The agent's intelligence is 80% here and 20% in the model. This component is
deterministic, testable, and never hallucinates — because the plan is data.

## 3.1 Plan compilation: HTML → plan.json

A build script (`scripts/build-plan-data.mjs`, to be written in Phase 0) parses
`health/index.html` — which is already highly structured (tables with stable
section IDs s0–s16, recipe cards with IDs B1–B8/L1–L8/D1–D8/K1–K10/S1–S7, the
12-week calendar table) — into three artifacts in S3:

| Artifact | Contents | Used by |
|---|---|---|
| `plan.json` | The 12-week calendar as data: week → day → sessions (name, type, duration, exercises with sets/reps/RPE); the 28-day menu grid: day → 5 slots → recipe ID; recipes: ingredients/macros/time; rules: 2-for-2, deload triggers, sickness rules, conflict-resolution table (§9.4), season table (§3.9), cut-first order (§9.3), countable-units limits (Table 4.3) | Schedule engine |
| `chunks.json` | ~200 semantic chunks of the prose (per subsection), each with section ID, heading path, plain text, Titan V2 embedding (256-dim) | Retrieval for "why/what/how" questions |
| `safety.json` | §15 red-flag lexicon (symptoms + synonyms in English, Hinglish, common Telugu transliterations), §8.2 BP thresholds, the mandatory-doctor gate list | Red-flag scanner + guardrail layer 1 |

The HTML remains the single source of truth. Editing the plan and re-running the
script updates the agent's knowledge — no retraining, no prompt edits.

## 3.2 The state block

Assembled fresh for every turn (target <150 ms, all reads parallel):

- **Programme position**: start date (profile) → week N of 12, phase (1/2/3), deload?
- **Today**: scheduled sessions + meal slots from plan.json for this weekday/week.
- **Log state**: today's + last 7 days' adherence entries; current streaks; last
  weight 7-day average and trend vs the ±1.5 kg band.
- **Clock context**: local time bucketed (pre-dawn / morning-session window /
  work-block / lunch window / afternoon / evening-session window / wind-down /
  night) — buckets, not raw minutes, so behaviour is testable.
- **Place context**: cached ≤3 h — Hyderabad (or travel-mode city) weather, AQI
  category mapped to the plan's own rule (<100 outdoor OK / 100–150 intensity
  indoors / >150 all indoors), season (summer/monsoon/winter per §3.9).
- **Medical gates**: blood-panel-reviewed? cleared-for-intervals? any active
  red-flag acknowledgement outstanding? (see 07 — these gate what may be coached).
- **Mode flags**: travel / festival / sick, if the user toggled them.
- **Personalization memory**: standing corrections and preferences (see 06).

## 3.3 The schedule engine ("what now?" without AI)

Pure function: (plan.json, state block) → ranked next actions. Resolution order:

1. Medical gates first — a gated activity is never suggested; the gate reason is.
2. Hard stop rules — sick mode/below-neck illness → rest guidance from §3.6 only.
3. In-window scheduled item not yet logged → that is the answer.
4. Missed earlier item → apply the plan's own substitution rules (MVS-20 rule,
   "substitutes, not stacks"; cut-first order §9.3) — never invent make-ups.
5. Nothing scheduled → the always-appropriate menu: desk reset, 10-min post-meal
   walk, balance block, breathing, next meal prep, hydration by season.
6. Conflicts resolved strictly by the §9.4 table.

The engine returns machine answers + the evidence used (which log entries, which
rule). The model receives BOTH and phrases the reply; the deep-link and the rule
citation come from the engine, so they are always correct.

## 3.4 The one-question rule

If the top-ranked answer flips on one unknown fact, the engine emits a
`clarify(fact, chips)` instruction instead of an answer. UI renders chip buttons;
a chip tap is BOTH the reply and a permanent log entry. If the user has dismissed
clarifying questions twice in 7 days, the engine stops asking and answers under
the most likely assumption, rendered as a visible assumption chip. This rule came
directly out of the pre-mortem (interrogation fatigue is a top-3 killer, see 11).

## 3.5 Intent routing

Cheap two-stage: keyword/regex fast-path for the dominant intents (what-now,
did-it, plan-lookup, recipe, log, mode-toggle) covering ~80% of traffic with zero
model cost; Nova Lite single-token classification for the rest (question-about-plan
/ question-about-self / review / smalltalk / out-of-scope / medical). Out-of-scope
politely declines and links the plan's reference section — the agent does not
answer general-knowledge questions; scope discipline is also a cost control.
