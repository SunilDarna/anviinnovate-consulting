# 09 — Infrastructure, IaC, cost

## 9.1 Stacks (separation principle continued)

| Stack | Contents | Ship command |
|---|---|---|
| `anviinnovate-health` (exists) | S3 + CloudFront + DNS for the static page. Gains: one extra origin + `/api/*` behavior pointing at the new HTTP API | `./scripts/deploy-health.sh --infra` |
| `anviinnovate-health-api` (new, SAM) | HTTP API, WebSocket API, Lambdas (auth, chat, engine, log, events, voice-session, nightly-rollup), DynamoDB table, SSM params, Guardrails resource, IAM (least-privilege per function: only its Bedrock model ARNs, only this table), budget alarm | `./scripts/deploy-health-api.sh` (new) |

Frontend assistant app: built into `health/` alongside `index.html` (e.g.
`health/app/`) and shipped by the existing `deploy-health.sh` sync — no new
frontend pipeline.

## 9.2 Monthly cost estimate (single active user, honest assumptions)

Assumptions: ~20 chat turns/day, ~10 hold-to-talk/day, 2×8-min live sessions/week,
state block ~2K tokens in / answers ~300 tokens out. Prices are approximate and
marked for verification against the pricing pages in 12-references.

| Item | Est. monthly | Notes |
|---|---|---|
| Nova Lite (chat + routing) | < $1 | The workhorse; pennies at this volume |
| Nova Pro (weekly reviews) | < $0.50 | ~8 calls/month |
| Nova Sonic (live voice) | $2–5 | The biggest AI line; capped by the 8-min session limit |
| Transcribe streaming | $1–2 | ~5 min audio/day |
| Polly neural | < $0.50 | Short spoken replies, phrase cache |
| Titan embeddings | ~$0 | Build-time only |
| Guardrails | < $1 | Per-text-unit charge on guarded calls |
| Lambda + HTTP/WS API | < $1 | Mostly free tier |
| DynamoDB on-demand | < $0.50 | Tiny items |
| CloudWatch + alarms | < $1 | Log retention 30 d |
| **Total** | **≈ $6–12/month** | vs ~$0 for the static site — the delta IS the AI |

Not near-zero like the page, but near-zero for what it is; the design choices that
keep it there: no OpenSearch (−$350/mo), no always-on containers, PTT default over
live voice (~10× cheaper), fast-path intents skipping the model entirely (~80% of
"what now" traffic), scope discipline (no general chatbot).

## 9.3 Cost circuit breaker (from the pre-mortem)

- Per-user monthly counters (06) with soft cap → degrade order: live voice off →
  Pro routes to Lite → chat only, with an honest in-UI notice. Hard cap → agent
  pauses until month end or owner override.
- AWS Budget: $15/month on the API stack's cost-allocation tag, SNS → email.
- Per-session Sonic seconds metric + alarm on daily anomaly (>3× trailing mean).

## 9.4 Observability

Structured JSON logs; CloudWatch dashboards: latency budgets from 04.5, guardrail
trigger counts by layer, suggestion-acted-on rate, DAU, cost/day. Alarms: p95
latency breach, Layer-1 trigger (owner email via existing SES identity — note SES
sandbox still applies; owner address is verified so this works today), 5xx rate.

## 9.5 Environments

Dev = same account, `-dev` suffixed stacks, separate table, separate Google OAuth
origin (localhost) — matching how the repo already develops. No prod data in dev;
a fixtures script seeds a synthetic user history for development and for the
red-team suite.
