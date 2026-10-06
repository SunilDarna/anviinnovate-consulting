# 04 — Voice and chat: three tiers, three costs

## 4.1 Chat (default)

Streamed text over the HTTP API (response streaming), markdown-lite rendering,
follow-up chips under each answer (chips come from the engine: "Log it", "Show
§3.8", "Why?"). History: last 10 turns kept server-side per session for context;
full transcript stored per 06's retention rules.

## 4.2 Hold-to-talk (the "hold a symbol" mode)

Interaction contract:
- Press and HOLD the mic symbol → recording starts (visible level meter, elapsed
  time). RELEASE → recording ends and is submitted. Slide-away cancels. Max 60 s.
- Audio → Transcribe streaming (en-IN) → transcript shown immediately for trust →
  standard chat pipeline (03) → answer streamed as text AND spoken via Polly
  neural en-IN; playback cancellable by tapping.
- Push-to-talk exists because it is *socially usable* (office, family room) and
  ~10× cheaper than a live session. It is the default voice mode.
- Errors: no speech detected / too noisy → silent retry hint, never a modal.

## 4.3 Live voice (Nova Sonic)

- Explicit start/stop toggle with a red "live" indicator and an on-screen timer.
- Client mic audio streams over a WebSocket API to a session Lambda holding a
  bidirectional stream to Nova Sonic; agent audio streams back; barge-in works
  (user speech interrupts playback).
- The same context engine feeds Sonic through its system/context input; the same
  guardrail layers apply — red-flag scanner runs on each final transcript segment,
  and a red-flag hit terminates coaching and speaks the stop-rule response.
- **Session cap 8 minutes** (auto warning at 7) then graceful handoff to
  hold-to-talk. Reasons: Lambda execution limits, cost, and the pre-mortem finding
  that unbounded live sessions are the #1 cost risk. Weekly review is the intended
  live-mode use, and it fits in 8 minutes.
- Live mode requires headphones-or-quiet heuristic? No — keep it simple: it is the
  user's choice; the toggle copy states it uses more battery/data.

## 4.4 Voice UX rules (all modes)

- Spoken answers are SHORTER than text answers: one action, one reason, offer of
  detail ("want the full session?"). The engine marks answers with a spoken-form
  variant; the model generates both in one call.
- Numbers are spoken plan-style ("three sets of eight") and shown as digits.
- The agent never speaks a medical disclaimer aloud in full every turn — it is
  shown persistently on-screen instead; spoken only when a medical-adjacent
  answer is given (see 07). This balance keeps voice usable AND safe.
- All three modes share one conversation thread — switching modes never loses context.

## 4.5 Latency budgets (acceptance criteria for Phase 4/5)

| Path | Target p50 | Ceiling p95 |
|---|---|---|
| Chat first token | 1.2 s | 3 s |
| Hold-to-talk release → first spoken word | 2.5 s | 5 s |
| Live voice turn (user stops → agent starts) | 800 ms | 1.8 s |
| Red-flag short-circuit (any mode) | 300 ms | 800 ms |
