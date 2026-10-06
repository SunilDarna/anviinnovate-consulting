# 05 — Login, sessions, personalization plumbing

## 5.1 Reuse, concretely (references into THIS repo)

The main site already ships a working Google sign-in; the assistant reuses the
pattern file-for-file rather than inventing one:

| Existing code | What it does | Reuse decision |
|---|---|---|
| `backend/src/authGoogle/index.mjs` | GIS **code model** popup → POST {code} → OAuth2Client exchange with redirect_uri `postmessage` → verifyIdToken → upsert user `PK=user.id, SK=PROFILE` → set session cookie | Copy as the template for the new stack's `authGoogle`; same GIS client-side flow |
| `backend/src/lib/session.mjs` | Signs/verifies a 30-day JWT (`issuer: anviinnovate`), key from SSM `/anviinnovate/auth/session_jwt_secret` | Same mechanism, NEW issuer `anviinnovate-health` and NEW SSM key `/anviinnovate-health/auth/session_jwt_secret` so a leaked key on one product never opens the other |
| `backend/src/lib/ssm.mjs`, `response.mjs`, `dynamo.mjs` | Cached SSM secrets, response helpers with cookie support, ddb client | Copy into the new stack's shared lib |
| `backend/src/authMe`, `authLogout` | Session introspection / cookie clear | Same endpoints, same shapes |
| Google Cloud OAuth client `736690706364-…` | Existing web client ID | REUSE the same client; add `https://health.anviinnovate.com` to its Authorized JavaScript origins (console task, noted in roadmap Phase 1 — the same pending-origins chore the other projects have) |

## 5.2 Cookie and origin design

API is mounted behind the SAME CloudFront distribution at `/api/*` (new origin +
behavior on `E3RPM70N2O2DEM`, added via `infra/health.yaml`). Therefore the session
cookie is first-party: `Secure; HttpOnly; SameSite=Lax; Path=/api`. No CORS config,
no third-party-cookie exposure, no token in localStorage. The WebSocket API (live
voice) cannot sit behind CloudFront the same way — it authenticates with a
short-lived (60 s) one-time ticket minted by an authenticated HTTP call, passed in
the WS query string, exchanged and burned on connect.

## 5.3 Sessions and devices

30-day sliding JWT as today. Sessions table rows (see 06) allow listing and
revoking devices ("sign out everywhere") — a cheap addition the main site lacks;
worth having because this product holds health data.

## 5.4 What login unlocks (progressive)

Signed-out: the static plan (public, unchanged) and a read-only tour of the
assistant UI with a sign-in prompt. Signed-in: everything. There is no anonymous
chat — every model call is attributable to a user, which is both a cost control
and an abuse control.

## 5.5 Customized answers

Personalization inputs, all first-party: profile (programme start date, diet
variant veg/egg/non-veg, equipment owned, gym access), medical gates state,
standing corrections ("no cashews", "court is 20 min away", "office days Tue–Thu"),
adherence-derived facts (usual wake time, which sessions get skipped), and
navigation signals (sections re-read often → the agent leads with what the user
engages with). All of it lives in the state block (03) — personalization is data
injection, never fine-tuning.
