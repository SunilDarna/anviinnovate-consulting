# Anvi Innovate — anviinnovate.com

Dual-audience site on AWS serverless. Astro static frontend (S3 + CloudFront) + SAM backend (HTTP API + Lambda + DynamoDB + SES). Registration/login is **"Continue with Google"** (OAuth 2.0, authorization-code + PKCE).

Full spec: `compass_artifact_*.md`.

## Layout

```
backend/      Lambda handlers (auth, leads, candidate, assessment) + shared lib
infra/        SAM template + samconfig (DynamoDB, HTTP API, Lambdas)
frontend/     Astro site (login/account/home, Google login island)
scripts/      ssm-put-secrets.sh — push secrets to SSM SecureString
.github/      OIDC deploy workflow
.env.local    LOCAL ONLY secrets (gitignored)
```

## One-time setup

### 1. Secrets → AWS SSM (us-east-1)
```bash
AWS_REGION=us-east-1 ./scripts/ssm-put-secrets.sh
```
Creates `/anviinnovate/google/client_secret` and `/anviinnovate/auth/session_jwt_secret` (SecureString).

### 2. Google Cloud Console (OAuth Web client)
On the existing client `736690706364-...apps.googleusercontent.com`:
- **Authorized JavaScript origins:** `https://anviinnovate.com`, `https://www.anviinnovate.com`, `http://localhost:4321`
- **OAuth consent screen:** External → Publish to Production; scopes `openid`, `email`, `profile`; add `/privacy` + `/terms` URLs.
- No authorized redirect URI needed (GIS popup code model uses `postmessage`).

### 3. GitHub repo secrets (for the deploy workflow)
`AWS_ROLE_ARN` (OIDC role), `CF_DIST_ID`, `PUBLIC_GOOGLE_CLIENT_ID`.

## Local dev
```bash
# backend deps
cd backend && npm install
# frontend
cd ../frontend && cp .env.example .env  # set PUBLIC_API_BASE to your deployed API
npm install && npm run dev               # http://localhost:4321
```

## Deploy
Push to `main` → GitHub Actions builds the backend (SAM), reads the API URL, builds the frontend with it, syncs to S3, and invalidates CloudFront. Or manually:
```bash
cd infra && sam build && sam deploy
```

## Auth flow (summary)
1. `/login` → "Continue with Google" (GIS code model) → authorization code.
2. `POST /auth/google` → Lambda exchanges code (client secret from SSM), verifies the ID token, upserts `USER#<sub>`, sets an `HttpOnly` session cookie.
3. Protected calls (`/auth/me`, apply, assessment) validate the session JWT server-side.

## Status
- ✅ Google auth slice (login, /auth/google, /auth/me, /auth/logout, User table)
- ✅ Client lead endpoint (basic; reCAPTCHA + SES TODO)
- 🚧 Candidate apply (auth-gated, stores profile; validation/email TODO)
- 🚧 Assessment start/submit (stubbed 501 — Phase 2: question bank + Fisher-Yates + scoring + cooldown)
- ⬜ S3/CloudFront/Route53/ACM + SES domain setup (see spec Section E)

> ⚠️ The Google client secret was shared over chat — **regenerate it** in Google Cloud Console before go-live and re-run the SSM script.
