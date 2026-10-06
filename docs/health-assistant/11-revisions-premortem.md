# 11 — How this plan got here: three revisions and a pre-mortem

The instruction was: revise three times, think hard about why it fails after two
months, enhance, then finalize. This file is the working record — kept because the
rejected designs are the ones most tempting to re-propose later.

## Revision 1 (rejected): "chatbot on top of the page"

Design: a chat widget; every question sends the whole 486 KB HTML plus the message
to a big model on Bedrock; no login; no logging; voice via browser speech APIs.

Why rejected:
- ~120K tokens of context per call → slow (5–10 s), expensive (dollars/day), and
  the model still paraphrases the plan wrong occasionally — worst of both worlds.
- No user state → the agent cannot answer its OWN canonical question ("what do I
  do now?" depends on what was already done today).
- No auth → anyone on the public page burns tokens; no personalization possible.
- Browser speech APIs are inconsistent across devices and offer no barge-in.
- Safety by system-prompt only — exactly the thing the requirement forbids.

Kept from v1: the widget-on-the-page instinct (became the Ask tab + dock).

## Revision 2 (rejected): "proper RAG + always-live voice"

Design: Bedrock Knowledge Base (OpenSearch Serverless) over the chunked plan;
Google login; DynamoDB adherence asked conversationally ("tell me what you did
today"); Nova Sonic as THE interface, always listening on the Today screen; full
conversation memory forever.

Why rejected:
- OpenSearch Serverless minimum capacity costs more per month than the entire
  rest of the system — for retrieving from ONE document. Disproportionate.
- RAG answers "why" questions but still guesses at "what now" — retrieval over
  prose cannot do date arithmetic, conflict rules, or gate logic reliably. The
  calendar is DATA; treating it as text was the core mistake of both v1 and v2.
- Conversational logging is charming for 3 days and unbearable after — typing or
  saying what you ate is a chore; the pre-mortem killed it (see below).
- Always-listening voice: battery, privacy discomfort, cost, and mostly-idle
  Sonic sessions. Voice must be intentional (hold, or explicit live toggle).
- Memory-forever: unbounded prompt growth and privacy liability. Replaced by
  distilled correction memory + TTL'd transcripts.

Kept from v2: login-first, DynamoDB single table, Sonic for live mode, chunk
retrieval — but demoted to the knowledge-question path only.

## Revision 3 (accepted with changes): "deterministic engine + tiered AI"

Design: plan compiled to plan.json; schedule engine answers what/when
deterministically; models phrase and converse; tiered Lite/Pro/Sonic/Transcribe;
one-tap logging chips; guardrails as code. This is essentially the final plan —
then the pre-mortem was run against it and produced the changes below.

## The pre-mortem: it is two months later and the agent is abandoned. Why?

Ranked causes, each with the enhancement that went into the final plan:

1. **Logging died, so answers went generic.** Root cause of everything: an agent
   that says "have you done your workout?" every time because it doesn't know is
   an agent you stop opening.
   → Fixes: chips not forms; suggestion-confirm counts as logging; the
   one-question rule with assumption chips (03.4); Phase-2 gate — two weeks of
   real personal use of the log BEFORE any AI ships; nightly rollup so partial
   logging still yields state.
2. **Life broke the streak and the agent felt like guilt.** A wedding week or
   travel produces misses; if the product's face is a red broken streak, the
   user avoids the app to avoid the feeling.
   → Fixes: travel/festival/sick modes that legitimately change the plan (the
   plan itself has those rules — §3.6/§5.5); "consistency %" framing instead of
   streaks; re-entry protocol: after any 5+ day gap the agent's ONLY message is
   the plan's own comeback rule (60% intensity, no make-ups), never a summary of
   what was missed.
3. **Interrogation fatigue.** Even one question per answer compounds.
   → Fix: the two-dismissals rule (stop asking, start assuming, visibly).
4. **Voice was demo-fun, then unused, then a silent cost.** Live sessions left
   running; PTT slower than typing at a desk.
   → Fixes: 8-min hard cap with timer; PTT as default voice; cost circuit
   breaker with degradation ladder; voice value anchored to two genuine
   hands-busy jobs (cooking, guided review) rather than "talk to your plan".
5. **Over-blocking made it useless; under-blocking made it scary.** A guardrail
   that refuses "why does my knee ache after squats" teaches the user the agent
   can't help; one that freelances about the ache teaches worse.
   → Fixes: layered design where ONLY true §15 red flags hard-stop; ache-class
   questions get the plan's own §3.6 pain-vs-DOMS framework + the 7-day
   physio rule; every block explains itself and offers the safe adjacent thing;
   red-team suite includes over-blocking cases (must ANSWER those) not just
   under-blocking ones.
6. **Latency crept until the agent felt slower than reading the plan.** 
   → Fixes: hard latency budgets as CI-tested acceptance criteria (04.5);
   fast-path intents that skip the model; state block target < 150 ms.
7. **The builder stalled — 15 weekends is a long time and the fun part (AI) was
   gated behind plumbing.**
   → Fixes: phases sized to a weekend or two with visible value each; Phase 2
   is independently useful; Phase 5 (hardest) is optional to the product's core
   value — the plan explicitly permits stopping after Phase 4 with a complete,
   coherent product.
8. **Model/price churn.** Bedrock models and prices move.
   → Fix: model IDs and routing are config (SSM parameters), swappable without
   deploy; 09.2 marks all prices approximate with references to live pages.

## Final-plan deltas produced by the pre-mortem

One-question rule + assumption chips · Phase-2 usage gate · comeback protocol ·
mode toggles as first-class state · consistency framing · 8-min voice cap ·
degradation ladder + budget alarm · over-block tests in the red-team suite ·
latency budgets as exit criteria · config-driven model routing · "stop after
Phase 4 is a valid product" written into the roadmap.
