# 10 — End-to-end build roadmap

Order is deliberate: the habit loop (Phase 2) ships before any AI. Each phase has
exit criteria; a phase is not done until they pass. Effort assumes evenings/
weekends solo; calendar estimates are honest, not optimistic.

## Phase 0 — Plan compilation (the data foundation) · ~1 weekend
Build `scripts/build-plan-data.mjs`: parse `health/index.html` → `plan.json`,
`chunks.json` (+ Titan embeddings), `safety.json`; upload to the site bucket under
`/data/` (behind CloudFront but excluded from the public sitemap).
**Exit:** every session/meal/rule in the HTML appears in plan.json (spot-audit 20
random items); a validation script cross-checks counts (12 weeks, 140 meal slots,
34 recipes, §15 lexicon non-empty); re-running on edited HTML updates artifacts.

## Phase 1 — API stack + auth · ~1 weekend
Scaffold `anviinnovate-health-api` SAM stack; port `authGoogle`/`authMe`/
`authLogout`/`session.mjs` per 05 (new issuer + new SSM key); add `/api/*`
behavior to the CloudFront distribution; add health.anviinnovate.com to the
Google OAuth client's origins (console); profile endpoints.
**Exit:** sign in / refresh / sign out round-trips on the live domain; cookie is
HttpOnly first-party; sessions listable and revocable; zero CORS headers needed.

## Phase 2 — Today card + one-tap logging (no AI) · ~2 weekends
Assistant PWA shell (5 tabs, code-split); Today timeline rendered from plan.json
+ profile start date; status chips writing adherence entries; weight/sleep quick
entry; nightly rollup Lambda; Progress tab charts; travel/festival/sick toggles.
**Exit:** a full real week logged with chips only — no free text needed; Today
loads ≤ 3 s on 4G; the plan's §12 Tab-1 fields all capturable in ≤ 2 taps each.
**Gate:** run it yourself for 2 weeks before Phase 3. If logging feels like a
chore already, fix THAT first — the pre-mortem says no AI can save a dead log.

## Phase 3 — Chat with context engine + guardrails · ~3 weekends
State block assembly; schedule engine + unit tests over fixture calendars
(including conflict cases from §9.4 and gate cases); red-flag scanner; intent
fast-path; Nova Lite integration with streaming; Bedrock Guardrails resource;
post-checker; retrieval over chunks; weather/AQI enrichment; red-team suite in CI.
**Exit:** the canonical "2 PM — what do I do now?" flow behaves per 01 spec against
5 fixture states (all-logged, morning-unlogged, sick-mode, AQI-150 winter evening,
week-6-not-cleared); red-team suite 100%; answer p50 ≤ 1.2 s first token; a week of
real use produces zero engine-wrong answers (model phrasing issues are acceptable,
plan-fact errors are not).

## Phase 4 — Hold-to-talk · ~2 weekends
Mic capture UX; Transcribe streaming; Polly replies with phrase cache; spoken-form
answer variant; mode-switch continuity.
**Exit:** kitchen test — cook recipe D2 start-to-finish hands-busy, asking steps by
voice; release→first-word p50 ≤ 2.5 s; transcript accuracy acceptable on Indian-
English food/exercise vocabulary (measure on a 50-utterance fixture set).

## Phase 5 — Live voice · ~2–3 weekends
WebSocket API + ticket auth; Sonic bidirectional session Lambda; barge-in; 8-min
cap + handoff; red-flag scanning on segments; live-mode cost metering.
**Exit:** guided weekly review completed by voice within one session; barge-in
< 300 ms to stop playback; forced red-flag utterance mid-session terminates
coaching correctly; cost per session logged and ≤ estimate in 09.2.

## Phase 6 — Personalization + weekly review co-pilot · ~2 weekends
Correction memory (write path from conversation, list/delete in Settings);
suggestion-acted-on tracking; weekly review flow pre-filled from rollups (Nova
Pro); weight-band rule surfacing; nav-event beacon + "continue where you left off".
**Exit:** a correction stated once ("no cashews") is respected in all future
recipe answers; weekly review takes ≤ 10 min and produces the §9.5 outputs
including the one-change decision.

## Phase 7 — Hardening + ops · ~1 weekend, then ongoing
Cost circuit breaker; budgets + alarms; dashboards; export/delete endpoints;
load/latency test; dependency + IAM review; DR note (everything rebuildable from
IaC + table PITR on).
**Exit:** all 09 alarms tested by forcing each condition once; export produces
complete data; delete leaves zero rows; PITR enabled.

## Phase 8 — Candidate future (explicitly deferred)
Wearable import (steps/HR/sleep), proactive PWA push nudges (needs careful
consent design), household multi-profile, Telugu voice mode, plan-revision
authoring assistant for editing the HTML itself.

**Total honest estimate: ~13–15 weekends end-to-end, with usable value from
Phase 2 (weekend 4).**
