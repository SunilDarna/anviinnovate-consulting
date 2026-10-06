# Sana — AI Health Assistant for health.anviinnovate.com

**Status:** Final plan v4 (draft → 3 revisions → 2-month failure pre-mortem → this).
**Scope:** An AI agent that lives inside the 45-Year Blueprint site. It knows the whole
plan, knows the time, the day of the programme, the place (weather/AQI), and the user's
own logged history — and answers "what do I do now?" the way a good coach would.

## Read in this order

| # | File | What it covers |
|---|------|----------------|
| 1 | [01-product.md](01-product.md) | What we are building, for whom, the three modes, what "aware" means |
| 2 | [02-architecture.md](02-architecture.md) | AWS architecture, Bedrock model choices and why |
| 3 | [03-context-engine.md](03-context-engine.md) | The heart: plan-as-data, time/place/week awareness, how "what now?" is answered |
| 4 | [04-voice-and-chat.md](04-voice-and-chat.md) | Live voice, hold-to-talk, and text chat — three tiers, three costs |
| 5 | [05-auth-sessions.md](05-auth-sessions.md) | Google login, sessions, exactly which existing repo code is reused |
| 6 | [06-data-model.md](06-data-model.md) | DynamoDB tables, adherence log, personalization memory, privacy |
| 7 | [07-guardrails.md](07-guardrails.md) | Medical safety: the four-layer guardrail, mandatory-doctor rules |
| 8 | [08-ui-ux.md](08-ui-ux.md) | Screens, categories, navigation, redirection, navigation tracking |
| 9 | [09-infra-cost.md](09-infra-cost.md) | Stacks, IaC, monthly cost table, cost circuit-breakers |
| 10 | [10-build-roadmap.md](10-build-roadmap.md) | Step-by-step end-to-end build order with exit criteria per phase |
| 11 | [11-revisions-premortem.md](11-revisions-premortem.md) | v1 → v2 → v3, why each was rejected, why this fails at month 2, fixes |
| 12 | [12-references.md](12-references.md) | Every external doc, API and price page referenced |

## The one-paragraph summary

The plan document is compiled from HTML into structured data (`plan.json`). A small
deterministic **context engine** always knows what the plan says the user should be
doing *right now* — no AI needed for that part. Amazon Bedrock models sit on top only
to converse: **Nova Lite** for routine answers, **Nova Pro** for weekly reviews,
**Nova Sonic** for live speech-to-speech, Transcribe+Polly for cheap hold-to-talk.
Google login (reusing this repo's existing `authGoogle` pattern) makes answers
personal; one-tap logging keeps the agent informed without interrogating the user;
a four-layer guardrail makes "see a doctor" a hard rule the model cannot skip.

## Design principles (settled during revisions — do not reopen casually)

1. **Deterministic first, AI second.** "What's next" comes from the schedule engine;
   the model only phrases it and handles conversation. The agent is never *wrong about
   the plan* because the plan is data, not a prompt.
2. **The habit loop ships before the AI does.** Phase 2 (Today card + one-tap logging)
   is useful with zero AI. If logging fails, the agent starves — so logging is the product.
3. **Never interrogate.** At most ONE clarifying question before an answer. Unknowns
   are assumed with a visible assumption chip the user can tap to correct.
4. **Safety is code, not prompting.** Red-flag symptoms short-circuit before any model
   call. Bedrock Guardrails is the second net, not the first.
5. **Near-zero cost is a feature.** No OpenSearch Serverless, no always-on anything.
   Hard monthly budget alarm + automatic degradation to cheaper tiers.
