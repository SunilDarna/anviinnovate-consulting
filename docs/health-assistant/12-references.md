# 12 — References

Internal (this repo / this project):
- `health/index.html` — the 45-Year Blueprint; single source of truth the agent serves.
- `infra/health.yaml`, `scripts/deploy-health.sh` — existing static-site stack this extends.
- `backend/src/authGoogle/index.mjs`, `backend/src/lib/session.mjs`, `lib/ssm.mjs`,
  `lib/response.mjs`, `lib/dynamo.mjs` — the auth/session pattern being ported (05).
- `infra/template.yaml` — main-stack idioms (single-table Dynamo, SSM secrets, SES).
- Related account project with the same Google OAuth chore: ai-certify.in (aiupskill
  repo) — pending authorized-origins task mirrors Phase 1's console step.

AWS service docs (verify prices/limits here before build; all under docs.aws.amazon.com
or aws.amazon.com unless noted):
- Amazon Bedrock user guide; model access; Amazon Nova models (Lite, Pro) —
  docs.aws.amazon.com/nova/ ; Nova Sonic bidirectional streaming API
  (InvokeModelWithBidirectionalStream) and sample session lifecycle.
- Amazon Bedrock Guardrails — denied topics, contextual grounding, PII filters,
  ApplyGuardrail API.
- Amazon Titan Text Embeddings V2 (256-dim option).
- Amazon Transcribe streaming (en-IN); Amazon Polly neural voices (en-IN, "Kajal").
- Bedrock / Transcribe / Polly pricing pages (aws.amazon.com/bedrock/pricing/ etc.)
  — 09.2 numbers must be re-checked against these at build time.
- API Gateway HTTP APIs + response streaming; WebSocket APIs (auth patterns,
  connection lifecycle, Lambda limits).
- Lambda: response streaming, 15-minute limit (motivates the 8-min voice cap).
- DynamoDB single-table patterns; TTL; PITR. AWS Budgets + cost-allocation tags.
- CloudFront: multiple origins/behaviors on one distribution (the `/api/*` mount).
- Google Identity Services — OAuth 2.0 code model (popup, `postmessage`), authorized
  JavaScript origins (developers.google.com/identity).
- Web APIs: MediaRecorder / getUserMedia (mic capture), Page Visibility, PWA
  install + service worker (MDN).
- Open-Meteo (open-meteo.com) free weather API — no key, fine for personal use;
  AQI: Open-Meteo air-quality endpoint (primary, free) with IQAir as fallback ref.
- WCAG 2.1 AA (w3.org/TR/WCAG21) for 08.4.

Safety grounding (the medical content itself):
- The plan's own §15 (stop rules), §8.2 (BP thresholds per ACC/AHA 2017), §3.6
  (pain vs DOMS, neck check) — the guardrail lexicon derives from these so the
  agent and the document can never disagree.
