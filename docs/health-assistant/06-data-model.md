# 06 — Data model, tracking, privacy

## 6.1 One table: `HealthAssistant`

Single-table DynamoDB (on-demand billing), same idiom as the main stack's table.
GSI1 for time-ordered queries per user.

| Entity | PK | SK | Notes |
|---|---|---|---|
| Profile | `USER#<id>` | `PROFILE` | google sub, email, name, programme start date, diet variant, equipment, tz, home city, mode flags |
| Medical gates | `USER#<id>` | `GATES` | blood-panel-reviewed (bool+date), cleared-for-intervals (bool+date+source=user-attested), outstanding red-flag ack. Never inferred — only explicitly set by the user, and the UI wording makes clear the user is attesting what their doctor said |
| Adherence entry | `USER#<id>` | `LOG#<date>#<slotId>` | slot = session/meal/practice id from plan.json; status done/partial/skipped/substituted; source = chip-tap / voice / suggestion-confirm; optional note |
| Daily rollup | `USER#<id>` | `DAY#<date>` | computed nightly: sessions %, protein-hit, sleep hrs (manual), weight, steps (manual) — mirrors the plan's own Tab-1 daily log so the tracking sheet (§12) and the agent share one substrate |
| Weight entry | `USER#<id>` | `WT#<date>` | 7-day average computed in rollup |
| Conversation turn | `USER#<id>` | `CHAT#<ts>` | role, text, mode, engine evidence used, model + tokens + cost. TTL 90 days |
| Suggestion | `USER#<id>` | `SUG#<ts>` | what was suggested, whether acted on — the agent's own effectiveness metric |
| Correction memory | `USER#<id>` | `MEM#<slug>` | standing facts/preferences with provenance turn id; listable and deletable by the user in Settings |
| Nav event | `USER#<id>` | `NAV#<ts>` | page/section viewed, dwell bucket, source (link/agent-deep-link/search). TTL 180 days |
| Session/device | `USER#<id>` | `SESS#<jti>` | for the revoke-devices screen |
| Cost counter | `COST#<yyyy-mm>` | `USER#<id>` | tokens + audio-seconds + $ estimate, incremented per call — feeds the circuit breaker (09) |

## 6.2 Navigation tracking (the "navigation tracking" requirement)

First-party only, no third-party analytics, no cookies beyond the session. A tiny
beacon posts nav events (throttled, batched) to `/api/events`. Uses: (a) the agent
personalizes ("you re-read §7.3 — want the prehab as a checklist?"), (b) "continue
where you left off" chip on the Today screen, (c) product learning — which sections
earn dwell time. Nav data never leaves the account and is excluded from any future
aggregate analytics unless anonymized.

## 6.3 Privacy posture (this is health data)

- Everything personal requires login; the public page stays exactly as deployed.
- Encryption at rest (DDB + S3 SSE), TLS in transit (already enforced).
- **Export**: one endpoint returns the user's complete data as a JSON download.
- **Delete**: one endpoint hard-deletes all rows for the user + revokes sessions.
  Both are Settings buttons, not support tickets.
- Voice audio is processed in-flight and NOT stored; only transcripts are kept
  (with the same 90-day TTL as chat).
- Model calls run through Bedrock which does not use inputs to train models;
  Guardrails PII masking additionally scrubs incidental third-party names.
- Logs (CloudWatch) carry user IDs but never message bodies at INFO level.
- No data ever goes into prompts for OTHER users (single-tenant prompts by
  construction — the state block is built per user).
