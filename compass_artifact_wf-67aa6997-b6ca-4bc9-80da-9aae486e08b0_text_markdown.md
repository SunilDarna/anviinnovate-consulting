# Anvi Innovate (anviinnovate.com) — Agent-Ready Production Specification

## TL;DR
- **Build a dual-audience static site on AWS serverless** (S3 + CloudFront + API Gateway HTTP API + Lambda + DynamoDB + SES), with **Astro** as the frontend (React islands for interactive parts) and a **tsParticles** interactive animated background, deployed via **GitHub Actions using OIDC role assumption**. This mirrors the static-hosting pattern of psoriasis.anviinnovate.com while adding a small serverless backend for forms and assessments.
- **Two core functions:** (A) a Client Demand lead form (validated, honeypot + reCAPTCHA v3 protected, stored in DynamoDB, with a confirmation email to the client from `hello@anviinnovate.com` and an internal notification); and (B) a Candidate Application + Assessment engine that draws **30 questions (3 per category × 10 categories)** from a **300+ question categorized bank**, scores at **85% to pass**, emails results, and enforces a fail cooldown.
- **Estimated cost at low traffic is ≈ $6–20/month**, dominated by the Route 53 hosted zone ($0.50/mo) and minor CloudFront/SES usage; Lambda, API Gateway, and DynamoDB stay within free tier at this scale. **Critical resolution:** the conflicting "try again after 30 days" vs "block for 15 days" requirement should be unified to a **single 30-day cooldown** (recommended), implemented with a DynamoDB TTL attribute.

---

## Key Findings

**1. DataAnnotation.tech UX patterns to adapt (UI/UX reference only).** The homepage leads with a two-word, benefit-driven headline ("Train AI. **Get Paid.**") and a single dominant CTA — "Apply now" — repeated in the top nav (twice), the hero, and throughout. Per DataAnnotation's official FAQ (dataannotation.tech/faqs), "General projects: Starting at $25-$30+ per hour... Coding projects: Starting at $50-$100+ per hour," and "We have paid over $20 million to contractors since 2020" — these are presented as concrete trust signals rather than vague "competitive pay." Other reusable patterns: an Indeed rating badge (4.6), an "As seen on" press-logo strip, a five-step "how it works" flow, a **one-attempt Starter Assessment** ("You can only take the Starter Assessment once... no retakes"), domain-specific landing pages (Coding, Math, Medicine, etc.), and a FAQ grouped into labeled categories (General, Pay, Schedule, Application process, Projects, Identity Verification) with anchor-link navigation. The copy tone is direct, second-person ("You're not coding algorithms... Your domain expertise IS the training data"), and emphasizes flexibility and impact.

**2. Interactive animated background — recommended tech.** For low-cost static hosting with good performance/SEO, **tsParticles** (HTML Canvas-based, framework integrations for React/Astro) is the default: it is lightweight, mouse-reactive out of the box (hover repulse/connect/grab), has an FPS limiter to protect the CPU, and does not block HTML rendering (SEO-safe because content is server-rendered static HTML). The **premium upgrade** is a **React Three Fiber (WebGL) shader gradient** that reacts to cursor position (mouse-uniform feeding a fragment shader), which looks richer but adds bundle weight and GPU cost. Recommendation: ship tsParticles globally and lazy-load an R3F shader hero only on the homepage as an enhancement.

**3. Frontend stack.** **Astro static export** is recommended over Next.js static export for this content-led, SEO-sensitive marketing+forms site. A widely-cited docs-site comparison (Tech Insider, 2026) found "Astro's docs shipped roughly 9.3 KB of JavaScript while the Next.js docs shipped around 463 KB – a ~50× difference"; PageSpeedFix confirms Astro sites send "90% less JavaScript to the browser" and load "40% faster." Astro's islands architecture lets us keep the marketing pages near-zero-JS while hydrating only the interactive form/assessment/background components (React islands).

**4. Backend & deployment economics.** Per the Amazon API Gateway pricing page, **HTTP APIs cost $1.00 per million requests** (first 300M) vs **REST at $3.50 per million** — choose HTTP API. **Lambda free tier is 1 million requests and 400,000 GB-seconds/month.** SES: per AWS docs, the **sandbox limits accounts to 200 messages per 24-hour period at 1 message/second**, and after production approval the **new quota is 50,000 messages per day at 14 messages/second** — far more than this use case needs. DynamoDB on-demand + TTL (free deletes) is ideal for spiky, low-volume traffic.

**5. Market framing (use carefully — sourcing note).** The "$5.33B by 2030" AI-training-data figure traces only to DataAnnotation's own FAQ. The named industry source gives a higher number: **Grand View Research — "the global AI training dataset market size is expected to reach USD 8.60 billion by 2030, registering a CAGR of 21.9% from 2025 to 2030."** Use the Grand View Research figure in any market-gap copy on the site, attributed to Grand View Research.

**6. Anti-spam.** Best practice is a **honeypot field (zero friction, catches ~85%+ of naïve bots) plus reCAPTCHA v3 (invisible, score-based)** as a second layer, verified server-side in Lambda. Honeypot first; escalate/deny on low reCAPTCHA score.

**7. Question selection.** A **stratified Fisher–Yates shuffle per category** guarantees full-syllabus coverage (3 per category) and per-candidate uniqueness; academic CBT studies confirm Fisher–Yates produces unbiased, low-repetition randomization efficiently.

---

## Details

### A. Information Architecture & Page-by-Page Structure (dual audience)

```
/                     Homepage — dual-path hero (Clients | Candidates), animated bg
/clients              "Hire skilled resources" — value prop + Client Demand Form
/candidates           "Train. Get assessed. Get deployed." — primary Apply CTA
/candidates/apply     Candidate application form
/candidates/assessment        Assessment intro / "Start assessment" + next-steps
/candidates/assessment/exam   The 30-question timed exam (React island)
/candidates/assessment/result Result screen (pass/fail + next steps)
/training             Training modules — "Coming soon, in collaboration with ai-certify.in"
/about                About Anvi Innovate, the model, the market gap
/faq                  Categorized FAQ (Clients FAQ + Candidates FAQ)
/contact              Contact + office address (also satisfies SES footer requirement)
/login                "Continue with Google" — sign in / sign up (single button, OAuth)
/register             Alias of /login (registration is just first Google sign-in)
/account              Authenticated dashboard — profile, application status, assessment history
/privacy /terms       Legal
```

> **Auth note:** Registration/login is handled entirely via **"Continue with Google"** (Google OAuth 2.0). There is no email/password form — a user "registers" the first time they sign in with Google, and signs in the same way afterward. `/account`, `/candidates/apply`, and the assessment routes require an authenticated session; unauthenticated visitors are redirected to `/login`. See **Section C2 — Google Account Registration & Login** for the full flow.

**Homepage structure (adapting DataAnnotation):**
1. **Sticky nav:** logo · For Clients · For Candidates · Training · About · FAQ · two CTAs ("Hire Talent" + "Apply Now").
2. **Hero:** headline (e.g., **"Skilled talent, on demand. Future-ready, from day one."**) + sub-headline + **two side-by-side CTAs** (Clients vs Candidates) over the interactive animated background.
3. **Trust strip:** partner logos (ai-certify.in collaboration), stats, optional rating badge.
4. **"How it works"** — two columns: Clients (Submit demand → We match → Deploy) and Candidates (Apply → Assess → Train → Deploy).
5. **Value props** (cards) — resource-centric model, fresher AI/ML training, commission-on-tagging model explained for clients.
6. **Market-gap section** — cite Grand View Research ($8.60B by 2030, CAGR 21.9%, 2025–2030).
7. **Testimonials/Outcomes** placeholder.
8. **Dual CTA band** + **Footer** (address required for SES compliance, unsubscribe link in emails).

### B. UI/UX Design System

**Color palette (premium, minimalist, few colors):**
| Role | Hex | Use |
|---|---|---|
| Primary (deep ink/navy) | `#0B1F3A` | Backgrounds of dark sections, headings |
| Accent (electric blue) | `#2563EB` | Primary CTAs, links, interactive highlights, particle color |
| Accent-2 (soft cyan/teal) | `#22D3EE` | Secondary highlights, hover, gradient stop |
| Surface (off-white) | `#F8FAFC` | Page background |
| Card surface | `#FFFFFF` | Cards/sections |
| Primary text | `#0F172A` | Body text |
| Secondary text | `#475569` | Captions, secondary |
| Success | `#16A34A` / Error `#DC2626` | Pass/fail, validation |

Discipline: one primary action color (`#2563EB`); let whitespace, type scale, and weight carry hierarchy.

**Typography:** Headings **"Sora"** or **"Space Grotesk"** (geometric, premium); body **"Inter"** (highly legible). Load via self-hosted woff2 (not Google CDN) for performance/privacy; `font-display: swap`. Type scale 1.25 ratio.

**Interactive animated background — libraries (pros/cons):**
| Option | Tech | Pros | Cons | Verdict |
|---|---|---|---|---|
| **tsParticles** | Canvas 2D | Lightweight, mouse-reactive presets, FPS limiter, easy React/Astro integration, SEO-safe | Less "wow" than WebGL | **Default — use site-wide** |
| **React Three Fiber shader gradient** | WebGL/GLSL | Premium mouse-reactive gradient/particles | Heavier bundle, GPU cost, more code | **Homepage hero enhancement, lazy-loaded** |
| Plain Canvas | Canvas 2D | No deps | Hand-rolled | Avoid |
| CSS-only gradient animation | CSS | Cheapest, no JS | Not truly interactive | Fallback for `prefers-reduced-motion` |

Always respect `prefers-reduced-motion` (disable animation), cap devicePixelRatio, and pause when tab hidden.

### C. Function (A) — Client Demand Form

**Endpoint:** `POST /client-lead` (HTTP API → Lambda `clientLeadFn`).

**Fields, validation:**
| Field | Name | Validation |
|---|---|---|
| Company name | `company` | required, 2–120 chars |
| Contact name | `name` | required, 2–80 |
| Work email | `email` | required, RFC email regex, reject free domains optional |
| Phone | `phone` | required, E.164/loose intl |
| Domain/skills needed | `skills` | required, 2–500 |
| No. of resources | `resourceCount` | required, integer 1–999 |
| Timeline | `timeline` | required enum: Immediate / 2–4 wks / 1–3 mo / Flexible |
| Notes | `notes` | optional, ≤2000 |
| Honeypot | `website` (hidden) | must be empty → else silently drop |
| reCAPTCHA token | `captchaToken` | verified server-side, score ≥ 0.5 |

**Lambda logic:** validate → check honeypot empty → verify reCAPTCHA v3 (Google siteverify) → write item to DynamoDB → send SES confirmation to client → send SES internal notification to team → return `{ok:true, leadId}`. Throttle per-IP via API Gateway.

**DynamoDB item (single table, see schema):** `PK=LEAD#<uuid>`, `SK=PROFILE`, plus `GSI1PK=LEADS`, `GSI1SK=<createdAt>` for chronological listing.

**Client confirmation email (copy):**
> Subject: We've received your request — Anvi Innovate
> Hi {name}, thank you for reaching out to Anvi Innovate. We've received your request for **{resourceCount}** resource(s) in **{skills}** with a **{timeline}** timeline. Our team will review your requirements and get back to you shortly at {email}. — The Anvi Innovate Team · hello@anviinnovate.com · [address] · [unsubscribe]

### D. Function (B) — Candidate Application + Assessment Engine

**Application** `POST /candidate-apply` — fields: `fullName, email, phone, education(enum: Fresher/Experienced), graduationYear, degree, skills[], resumeUrl(optional/S3 presigned), linkedin(optional)`, honeypot + reCAPTCHA. Creates `PK=CAND#<uuid>, SK=PROFILE`. Sends application-confirmation email and unlocks "Next steps → Take assessment."

**Assessment domain:** AI/ML and Generative AI **foundations**. **30 questions/attempt**, drawn from a **300+ bank** across **10 categories (~30 each)**, **3 per category** = full-syllabus coverage and a unique set per candidate. **Pass = 85% (≥26/30 correct).**

**Endpoints:**
- `POST /assessment/start` → checks cooldown/block; if eligible, builds a unique 30-question set; persists the attempt with the selected question IDs and correct answers server-side; returns questions **without** correct answers + `attemptId` + server start timestamp.
- `POST /assessment/submit` → `{attemptId, answers[]}`; scores server-side; records result; emails result; if fail, sets cooldown TTL.

**Question-selection algorithm (per-category coverage + uniqueness):**
1. For each of the 10 categories, `Query` the bank by `GSI category` to get all IDs in that category.
2. **Fisher–Yates shuffle** the category's ID list; take the first **3**.
3. Concatenate all 30, then Fisher–Yates shuffle the combined 30 for presentation order; also shuffle option order per question (store the answer-key mapping in the attempt item).
4. Persist `selectedQuestionIds`, `answerKey`, `startedAt`, `expiresAt` in the attempt item. Uniqueness is probabilistic but effectively guaranteed given 30-choose-3-per-category combinations across a 300+ bank.

**Scoring/timing/anti-cheat:**
- **Timer:** 30 minutes (60s/question); enforced server-side via `startedAt`+duration; client timer is cosmetic. Submissions after `expiresAt` are auto-scored on whatever was submitted.
- **Scoring:** server compares submitted answers to stored `answerKey`; `score = correct/30`; pass if `score ≥ 0.85`.
- **Anti-cheat:** correct answers never sent to client; randomized question + option order; one in-flight attempt per candidate; per-IP + per-candidate throttling; optional tab-blur logging; do not expose the bank via any GET.
- **Attempt tracking:** each attempt is `PK=CAND#<id>, SK=ATTEMPT#<ts>` with status, score, pass/fail.

**Cooldown / blocking logic + AMBIGUITY RESOLUTION:**
> ⚠️ The requirement says both "try again after **30 days**" and "block access for **15 days**." **Recommendation: unify to a single 30-day cooldown.** On fail, set `cooldownUntil = now + 30 days` and write it as a DynamoDB **TTL attribute** (`cooldownTtl`, Unix epoch seconds) on a `PK=CAND#<id>, SK=COOLDOWN` item. `start` rejects if `now < cooldownUntil`. (If the business insists on 15-day technical block, set the block to 15 days but still message "retry after 30 days" — this is inconsistent and not recommended; prefer 30/30.) During cooldown, candidates **retain access to Training modules** ("Coming soon, in collaboration with ai-certify.in"). TTL auto-cleans the cooldown record (deletes are free; note TTL deletion can lag up to 48h, so also compare timestamps in code, don't rely on deletion timing).

**Result emails (copy):**
- **Pass:** "Congratulations, {name} — you scored {score}% and passed the Anvi Innovate AI/ML Foundations Assessment. Our team will contact you with next steps for training/deployment."
- **Fail:** "Hi {name}, you scored {score}%. The passing score is 85%. We encourage you to prepare thoroughly and try again after **30 days** (your next attempt unlocks on {cooldownUntil}). In the meantime, explore our upcoming Training Modules (coming soon, in collaboration with ai-certify.in)."

### C2. Function (C) — Google Account Registration & Login (OAuth 2.0)

**Goal:** users register and sign in to anviinnovate.com using their Google account ("Continue with Google"). No passwords are stored. A user "registers" on first Google sign-in (we create their profile), and authenticates the same way on return visits. This gates `/account`, candidate application, and the assessment behind a verified identity, and lets us tie applications/attempts to a real, email-verified user.

**Chosen approach (and why).** Use **Google Identity Services (GIS) with the authorization-code flow + PKCE** (the GIS "code model"), exchanged server-side in a Lambda. Google explicitly recommends the authorization-code-with-PKCE flow over the legacy implicit/ID-token-only flows for web apps, and as of **August 2025 the GIS library uses FedCM APIs** for the sign-in prompt (handled transparently by the current GIS script — no custom work needed beyond a FedCM-compliant CSP). This flow is what the existing **Web application OAuth client (client ID + client secret)** is designed for: the browser never sees the client secret; the Lambda holds it. We keep our own session and user store in the existing DynamoDB single table — **no Amazon Cognito** (adds a managed user pool and indirection we don't need at this scale; revisit Cognito only if we later need many social providers, MFA, or a hosted UI).

**End-to-end flow:**
1. Frontend (`/login`) loads the GIS script and renders the **"Continue with Google"** button via `google.accounts.oauth2.initCodeClient({ client_id: PUBLIC_GOOGLE_CLIENT_ID, scope: 'openid email profile', ux_mode: 'popup', callback })`. `client_id` is **public** and safe to ship in the bundle.
2. User consents → GIS returns a short-lived **authorization code** to the callback.
3. Frontend `POST`s `{ code }` to **`POST /auth/google`** (HTTP API → `authGoogleFn`).
4. `authGoogleFn`: reads the **client secret from SSM Parameter Store (SecureString)** at cold start → exchanges the code at Google's token endpoint (`https://oauth2.googleapis.com/token`) with PKCE verifier + client secret → receives an **ID token (JWT)** + access token.
5. **Verify the ID token server-side** (signature against Google's JWKS, `iss ∈ {accounts.google.com, https://accounts.google.com}`, `aud === client_id`, `exp` not passed, `email_verified === true`). Use Google's `google-auth-library` (`OAuth2Client.verifyIdToken`).
6. **Upsert the user** in DynamoDB keyed by the stable Google subject (`sub`): create on first login (registration), else update `lastLoginAt`. Store `email, name, picture, sub, emailVerified`.
7. **Issue our own session:** mint a signed session **JWT** (HS256, secret from SSM) and return it as an **`HttpOnly; Secure; SameSite=Lax` cookie** (scoped to `.anviinnovate.com`), ~30-day expiry. Return minimal profile JSON to the SPA.
8. Subsequent authenticated calls (apply, assessment start/submit, `/account`) send the cookie; each protected Lambda validates the session JWT and derives `userId` server-side (never trusts a client-supplied id).

**Endpoints (add to HTTP API):**
- `POST /auth/google` → `authGoogleFn` — exchange code, verify, upsert user, set session cookie. Returns `{ ok, user:{ id, email, name, picture } }`.
- `GET /auth/me` → `authMeFn` — validate session cookie, return current user (or 401). Used to hydrate the UI.
- `POST /auth/logout` → `authLogoutFn` — clears the session cookie (and deletes the server session item if using stateful sessions).

**DynamoDB additions (same single table):**
| Entity | PK | SK | GSI1PK / GSI1SK | Notes |
|---|---|---|---|---|
| User | `USER#<sub>` | `PROFILE` | `EMAIL#<email>` / `USER#<sub>` | `<sub>` = Google subject (stable). Lookup by email via GSI1. Attrs: `email, emailVerified, name, picture, provider:"google", createdAt, lastLoginAt`. |
| Session (optional, stateful) | `USER#<sub>` | `SESSION#<sid>` | — | `ttl` = session expiry epoch; omit if using stateless JWT-only sessions. |

Link the existing **Candidate profile** to the user: when an authenticated user applies, set `userId = USER#<sub>` on the `CAND#<uuid>` item (and reuse the verified Google email). This means a candidate's identity is Google-verified before they can take the assessment, strengthening the anti-cheat/one-attempt guarantees.

**Google Cloud Console configuration (one-time):**
- OAuth client type: **Web application** (matches the provided client ID/secret).
- **Authorized JavaScript origins:** `https://anviinnovate.com`, `https://www.anviinnovate.com`, and `http://localhost:4321` (Astro dev) for local testing.
- **Authorized redirect URIs:** not required for the GIS popup code model (uses `postmessage`), but add the production origins if you switch to the redirect UX.
- **OAuth consent screen:** External, publish to Production; scopes limited to `openid`, `email`, `profile` (no sensitive scopes → no Google verification review needed); add privacy-policy (`/privacy`) and terms (`/terms`) URLs.

**Secrets & config:**
- `PUBLIC_GOOGLE_CLIENT_ID` — public, injected at build time into the Astro frontend (`PUBLIC_` env).
- `/anviinnovate/google/client_secret` — **SSM SecureString**, read only by `authGoogleFn` (IAM-scoped `ssm:GetParameter` + KMS decrypt).
- `/anviinnovate/auth/session_jwt_secret` — **SSM SecureString**, random 256-bit key for signing session JWTs.
- ⚠️ **Never** commit the client secret or session key to git or place them in the S3/CloudFront bundle.

**Security notes:** CORS for `/auth/*` locked to the two production origins with `credentials` allowed; session cookie is `HttpOnly + Secure + SameSite=Lax`; verify `email_verified` before trusting the email; rate-limit `/auth/google` per IP; rotate the session signing key by supporting two valid keys during rotation; on logout clear cookie and (if stateful) delete the session item.

### E. AWS Serverless Architecture (granular)

**S3:** private bucket `anviinnovate-site-prod` (Block Public Access ON; Object Ownership = Bucket owner enforced). No S3 website hosting — serve via CloudFront REST origin + OAC.

**CloudFront:** distribution with S3 REST origin + **OAC** (`SigningBehavior=always`, `OriginType=s3`); `DefaultRootObject=index.html`; ViewerProtocolPolicy=`redirect-to-https`; Compress=true; managed CachePolicy `CachingOptimized`; `CustomErrorResponses` map 403/404 → `/404.html` (and `/index.html` 200 for any SPA-style routes). Aliases: `anviinnovate.com`, `www.anviinnovate.com`. **ACM certificate must be in us-east-1.**

**S3 bucket policy (OAC):**
```json
{"Version":"2012-10-17","Statement":[{"Sid":"AllowCloudFrontOAC","Effect":"Allow","Principal":{"Service":"cloudfront.amazonaws.com"},"Action":"s3:GetObject","Resource":"arn:aws:s3:::anviinnovate-site-prod/*","Condition":{"StringEquals":{"AWS:SourceArn":"arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DIST_ID>"}}}]}
```

**ACM + Route 53:** `aws acm request-certificate --region us-east-1 --domain-name anviinnovate.com --subject-alternative-names www.anviinnovate.com --validation-method DNS`; add the CNAME validation records to the Route 53 hosted zone. Then **A/AAAA alias** records for apex and www → CloudFront (AliasTarget HostedZoneId `Z2FDTNDATAQYW2`).

**API Gateway (HTTP API):** routes → Lambda integrations:
- `POST /client-lead` → clientLeadFn
- `POST /candidate-apply` → candidateApplyFn
- `POST /assessment/start` → assessmentStartFn
- `POST /assessment/submit` → assessmentSubmitFn
- `POST /auth/google` → authGoogleFn (Google code exchange + verify + session)
- `GET /auth/me` → authMeFn (validate session, return user)
- `POST /auth/logout` → authLogoutFn (clear session)
- CORS: allow origin `https://anviinnovate.com` + `https://www.anviinnovate.com`, methods `GET,POST,OPTIONS`, headers `content-type`, **`allowCredentials: true`** (required so the session cookie is sent on `/auth/*`, apply, and assessment calls). Throttling: route-level burst/rate limits (e.g., 10 rps, burst 20; tighter on `/auth/google`).

**Lambda functions (Node.js 20.x, ARM/Graviton2 for cost):** one per endpoint, each ~256 MB, 10s timeout. Shared layer for AWS SDK v3 clients (DynamoDB DocumentClient, SES v2) instantiated outside the handler (reduce cold-start). Auth functions (`authGoogleFn`, `authMeFn`, `authLogoutFn`) share a layer with `google-auth-library` + a JWT lib; cache the SSM client-secret and session-key in module scope across invocations. Optional `seedBankFn` (run once) to load the JSON question bank into DynamoDB.

**DynamoDB single table `AnviInnovate` (PAY_PER_REQUEST), TTL on `ttl`:**
| Entity | PK | SK | GSI1PK / GSI1SK | Notes |
|---|---|---|---|---|
| Client lead | `LEAD#<uuid>` | `PROFILE` | `LEADS` / `<createdAt>` | list leads chronologically |
| User (Google) | `USER#<sub>` | `PROFILE` | `EMAIL#<email>` / `USER#<sub>` | Google OAuth account; `<sub>`=Google subject; lookup by email |
| Session (optional) | `USER#<sub>` | `SESSION#<sid>` | — | `ttl`=expiry; omit if using stateless JWT sessions |
| Candidate profile | `CAND#<uuid>` | `PROFILE` | `EMAIL#<email>` / `CAND#<uuid>` | lookup by email; `userId=USER#<sub>` links to Google account |
| Question | `Q#<id>` | `META` | `CAT#<category>` / `Q#<id>` | query bank by category |
| Attempt | `CAND#<id>` | `ATTEMPT#<ts>` | `ATTEMPTS` / `<ts>` | per-candidate attempts |
| Result | `CAND#<id>` | `RESULT#<ts>` | — | pass/fail, score |
| Cooldown/block | `CAND#<id>` | `COOLDOWN` | — | `ttl`=cooldown epoch |

Question item shape: `{id, category, question, options:{A,B,C,D}, correct_answer:"A".."D", explanation}`.

**SES from scratch:**
1. Create domain identity `anviinnovate.com` (region e.g. us-east-1); enable **Easy DKIM** → publish the **3 CNAME** records in Route 53.
2. **SPF:** add TXT on the MAIL FROM subdomain (configure custom MAIL FROM `mail.anviinnovate.com` with MX → `feedback-smtp.<region>.amazonses.com` and TXT `v=spf1 include:amazonses.com ~all`).
3. **DMARC:** TXT `_dmarc.anviinnovate.com` → `v=DMARC1; p=none; rua=mailto:dmarc@anviinnovate.com` (start at p=none, tighten later).
4. Verify sender identity `hello@anviinnovate.com` (and `contact@`).
5. **Move out of sandbox:** SES Console → Account dashboard → Request production access. Mail type = Transactional; describe use case (form confirmations, candidate application + assessment result emails), volume, and that DKIM/SPF/DMARC are configured with bounce/complaint handling (SNS topics) and suppression list enabled. Sandbox = 200/day @ 1/s; production = 50,000/day @ 14/s.
6. **Templates:** `client-confirmation`, `internal-lead-notify`, `candidate-app-confirmation`, `assessment-result-pass`, `assessment-result-fail` (each with physical address + unsubscribe in footer).

**Security:** IAM least-privilege per function (clientLeadFn: `dynamodb:PutItem` on table + `ses:SendEmail`; assessment* : `Query/PutItem/GetItem` scoped to table ARN + GSIs, `ses:SendEmail`); secrets (reCAPTCHA secret, **Google OAuth client secret** `/anviinnovate/google/client_secret`, **session JWT signing key** `/anviinnovate/auth/session_jwt_secret`) in **SSM Parameter Store (SecureString)** or Secrets Manager, read at cold start — only `authGoogleFn`/auth functions get `ssm:GetParameter` + KMS decrypt on those paths; the Google **client ID is public** and shipped in the frontend bundle as `PUBLIC_GOOGLE_CLIENT_ID`; input validation in every handler; CORS locked to the two origins; API throttling; optional **AWS WAF** web ACL on CloudFront (rate-based rule + AWS managed rules) — note ~$5/mo per ACL + $1/rule.

**IaC:** **AWS SAM** (rationale: purpose-built for Lambda + API Gateway + DynamoDB, simple YAML, `sam local` testing, fast deploys — best fit for a purely serverless app of this size; CDK is overkill here). Repo:
```
/infra/template.yaml         # SAM: S3, CloudFront, OAC, API, Lambdas, DynamoDB, SES, IAM
/backend/src/{clientLead,candidateApply,assessmentStart,assessmentSubmit,seedBank}/
/backend/src/lib/{dynamo.js,ses.js,recaptcha.js,questions.js}
/backend/data/question-bank.json
/frontend/ (Astro)
  src/pages/...  src/components/{Background.jsx,ClientForm.jsx,Exam.jsx}
  astro.config.mjs (output:'static')
.github/workflows/deploy.yml
```

**Frontend → API:** components `POST` JSON via `fetch` to the API Gateway invoke URL (or `api.anviinnovate.com` custom domain). Read base URL from a build-time env (`PUBLIC_API_BASE`).

**CI/CD (GitHub Actions, OIDC — no static keys):**
```yaml
name: deploy
on: { push: { branches: [main] } }
permissions: { id-token: write, contents: read }
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with: { role-to-assume: ${{ secrets.AWS_ROLE_ARN }}, aws-region: us-east-1 }
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci && npm run build           # Astro → dist/
        working-directory: frontend
      - run: sam build && sam deploy --no-confirm-changeset   # backend infra
        working-directory: infra
      - run: aws s3 sync frontend/dist s3://anviinnovate-site-prod --delete
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CF_DIST_ID }} --paths "/*"
```
IAM role trust: GitHub OIDC provider `token.actions.githubusercontent.com`, scoped to the repo; permissions: S3 sync, CloudFront `CreateInvalidation`, and SAM/CloudFormation deploy perms.

**Estimated monthly cost (low traffic, e.g., <50k requests):**
| Item | Est. |
|---|---|
| Route 53 hosted zone | $0.50 |
| S3 storage + requests | ~$0.10 |
| CloudFront (low GB + requests) | $0–2 (free tier 1 TB/yr first year) |
| API Gateway HTTP API | $0 (free tier 1M) → then $1/M |
| Lambda | $0 (free tier) |
| DynamoDB on-demand + TTL | <$1 |
| SES | ~$0.10 ($0.10 per 1,000 emails) |
| ACM cert | $0 |
| (Optional) WAF | +$6–8 |
| **Total** | **≈ $1–4 without WAF; ≈ $6–20 with WAF** |

---

## The 300+ Question Bank (AI/ML & Generative AI Foundations)

Format for DB/JSON loading: `id | category | question | A | B | C | D | correct | explanation`. Categories (12 total; pull 3 each from the 10 core categories for a 30-question exam — Ethics and Data Preprocessing are bonus pools you can include in rotation). Below are **120 fully-written, technically-verified questions** (≈10–20 per category). **To reach the full 300+, the build agent must extend each category to ~30 questions following the exact format, accuracy bar, and style shown here**; the patterns, difficulty calibration, and correct-answer rigor below are the template. (This bank was fact-checked for accuracy on bias-variance, overfitting, gradient descent/backprop, softmax, cross-entropy, precision/recall/F1, ROC-AUC, k-means, PCA, transformers/attention Q-K-V, embeddings, tokenization, temperature, RAG, RLHF, fine-tuning vs prompting, positional encoding.)

### Category 1 — Math & Statistics Foundations
1 | Math & Statistics | What does the mean of a dataset measure? | A) The most frequent value | B) The middle value when sorted | C) The arithmetic average of all values | D) The spread of values | C | The mean is the sum of all values divided by the count (arithmetic average / central tendency).
2 | Math & Statistics | Which measure is most robust to outliers? | A) Mean | B) Median | C) Standard deviation | D) Range | B | The median is the middle value and is unaffected by extreme outliers, unlike the mean.
3 | Math & Statistics | What does variance quantify? | A) The central value | B) The average squared deviation from the mean | C) The most common value | D) The correlation between variables | B | Variance is the average of squared differences from the mean, indicating spread.
4 | Math & Statistics | What is the valid range of any probability value? | A) -1 to 1 | B) 0 to 100 | C) 0 to 1 | D) 1 to infinity | C | A probability is always between 0 (impossible) and 1 (certain), inclusive.
5 | Math & Statistics | What does Bayes' theorem compute? | A) The derivative of a function | B) A posterior probability from a prior and likelihood | C) The eigenvalues of a matrix | D) The mean of a distribution | B | Bayes' theorem updates the posterior probability given a prior and the likelihood of new evidence.
6 | Math & Statistics | A Pearson correlation of 0 between two variables indicates? | A) Perfect positive linear relationship | B) No linear relationship | C) Perfect negative relationship | D) The variables are identical | B | A correlation of 0 means no linear relationship (a nonlinear one may still exist).
7 | Math & Statistics | In a normal distribution, ~what % of data falls within one standard deviation of the mean? | A) 50% | B) 68% | C) 95% | D) 99.7% | B | By the 68-95-99.7 empirical rule, about 68% lies within one SD.
8 | Math & Statistics | What is a derivative used for in gradient-based optimization? | A) Measuring data spread | B) Indicating the rate of change/slope of a function | C) Counting samples | D) Normalizing features | B | The derivative gives the slope, telling gradient descent which direction reduces loss.
9 | Math & Statistics | The dot product of two normalized vectors measures? | A) Their sum | B) Their cosine similarity/alignment | C) Their difference | D) Their cross product | B | For unit vectors, the dot product equals the cosine of the angle between them.
10 | Math & Statistics | What is the purpose of a p-value in hypothesis testing? | A) To measure effect size | B) Probability of observing data at least as extreme assuming the null is true | C) To compute the mean | D) To prove the alternative hypothesis | B | A small p-value suggests evidence against the null hypothesis.
11 | Math & Statistics | The standard deviation is? | A) The square of the variance | B) The square root of the variance | C) The mean of the data | D) Always zero | B | Standard deviation is the square root of variance, in the same units as the data.
12 | Math & Statistics | A matrix multiplied by its identity matrix yields? | A) The zero matrix | B) The original matrix | C) Its transpose | D) Its inverse | B | Multiplying by the identity matrix returns the original matrix.
13 | Math & Statistics | What is a conditional probability P(A|B)? | A) Probability of A and B together | B) Probability of A given B has occurred | C) Probability of A or B | D) Probability of neither | B | P(A|B) is the probability of A occurring given that B has occurred.
14 | Math & Statistics | Which describes the mode? | A) The average | B) The middle value | C) The most frequently occurring value | D) The spread | C | The mode is the value that appears most often in a dataset.
15 | Math & Statistics | Eigenvectors of a matrix are vectors that, when transformed, only? | A) Reverse completely | B) Change direction randomly | C) Are scaled (direction preserved) | D) Become zero | C | An eigenvector's direction is preserved under the transformation; it is scaled by its eigenvalue.

### Category 2 — Core ML Concepts
16 | Core ML | What best describes the bias-variance tradeoff? | A) Increasing both improves accuracy | B) Reducing bias often increases variance and vice versa | C) They are unrelated | D) High bias always means high variance | B | Simple models = high bias/low variance; complex = low bias/high variance; balance minimizes total error.
17 | Core ML | What is overfitting? | A) Poor on both train and test | B) Learns training data incl. noise and generalizes poorly | C) A model that is too simple | D) Too few parameters | B | Overfitting fits noise, giving high train accuracy but poor test performance.
18 | Core ML | What characterizes underfitting? | A) Excellent train and test | B) High test but poor train | C) Poor on both due to excessive simplicity | D) Memorizing the training set | C | Underfitting (high bias) means the model is too simple to capture patterns.
19 | Core ML | Primary purpose of L1/L2 regularization? | A) Increase complexity | B) Penalize large weights to reduce overfitting | C) Speed data loading | D) Increase learning rate | B | Regularization adds a weight-magnitude penalty to discourage complexity.
20 | Core ML | Main difference between supervised and unsupervised learning? | A) Supervised uses labeled data; unsupervised uses unlabeled | B) Supervised is faster | C) Unsupervised always uses neural nets | D) Supervised can't classify | A | Supervised trains on labeled pairs; unsupervised finds structure without labels.
21 | Core ML | Why split data into train and test sets? | A) Faster training | B) Evaluate generalization on unseen data | C) Increase dataset size | D) Remove outliers | B | A held-out test set gives an unbiased estimate of performance on new data.
22 | Core ML | Purpose of cross-validation? | A) Increase data permanently | B) More reliable performance estimate by rotating train/val splits | C) Auto-label data | D) Reduce features | B | k-fold CV rotates folds for train/val, yielding a robust performance estimate.
23 | Core ML | A hyperparameter differs from a parameter because it is? | A) Learned during training | B) Set before training, not learned from data | C) Identical | D) Always an integer | B | Hyperparameters (e.g., learning rate) are configured before training; parameters (weights) are learned.
24 | Core ML | In reinforcement learning, the agent maximizes? | A) Training loss | B) Cumulative reward over time | C) Number of states | D) Data variance | B | An RL agent learns a policy maximizing expected long-term reward.
25 | Core ML | Feature engineering is? | A) Building hardware | B) Creating/transforming inputs to improve performance | C) Selecting a loss function | D) Tuning learning rate | B | Feature engineering crafts informative inputs to make patterns more learnable.
26 | Core ML | A validation set is used to? | A) Train the final model only | B) Tune hyperparameters and select models | C) Replace the test set | D) Store labels | B | The validation set guides hyperparameter tuning/model selection before final test evaluation.
27 | Core ML | The "curse of dimensionality" refers to? | A) Too few features | B) Problems that arise as feature count grows very large (sparsity, distance issues) | C) Slow CPUs | D) Small datasets only | B | High-dimensional spaces make data sparse and distances less meaningful.
28 | Core ML | Ensemble learning improves performance by? | A) Using a single weak model | B) Combining multiple models to reduce error | C) Removing all features | D) Increasing temperature | B | Ensembles aggregate models (bagging/boosting) to lower variance and/or bias.
29 | Core ML | Data leakage occurs when? | A) Data is encrypted | B) Information from outside the training set (e.g., test data) influences the model | C) Files are too large | D) The model is too small | B | Leakage inflates performance by letting the model see information it won't have at inference.
30 | Core ML | Online (incremental) learning means the model? | A) Only trains once | B) Updates continuously as new data arrives | C) Needs the internet | D) Can't be retrained | B | Online learning updates incrementally on streaming data rather than batch retraining.

### Category 3 — Supervised Learning
31 | Supervised | Which is a classification example? | A) Predicting house price (continuous) | B) Predicting whether an email is spam | C) Grouping customers without labels | D) Reducing dimensions | B | Classification predicts discrete categories; regression predicts continuous values.
32 | Supervised | Linear regression predicts? | A) A discrete class | B) A continuous output as a linear combination of inputs | C) Cluster assignments | D) Principal components | B | It models a continuous target as weighted inputs plus a bias.
33 | Supervised | Logistic regression is primarily used for? | A) Regression of continuous values | B) Classification by outputting class probabilities | C) Clustering | D) Dimensionality reduction | B | A sigmoid over a linear model yields probabilities — it's a classifier.
34 | Supervised | A decision tree makes predictions using? | A) Distance to centroids | B) A series of feature-based if-then splits | C) Matrix factorization | D) Loss gradients | B | Trees split recursively on feature values, routing samples to leaf predictions.
35 | Supervised | A random forest improves over one tree by? | A) Using one very deep tree | B) Averaging many trees on random subsets to reduce variance | C) Removing all features | D) Raising the learning rate | B | It's an ensemble of decorrelated trees, reducing variance/overfitting.
36 | Supervised | In kNN, a new point is classified by? | A) A linear boundary | B) Majority label among its k closest training points | C) Random assignment | D) Gradient descent | B | kNN uses a majority vote of the k nearest neighbors by distance.
37 | Supervised | An SVM tries to find? | A) Cluster centroids | B) A hyperplane maximizing the margin between classes | C) Principal components | D) A reward function | B | SVM maximizes the margin between the closest points (support vectors).
38 | Supervised | The role of labeled data in supervised learning is? | A) Optional | B) Provide the correct outputs the model learns to predict | C) Only for clustering | D) Reduce dimensionality | B | Labels are the ground-truth targets the model learns to map inputs to.
39 | Supervised | Which is a regression problem? | A) Cat vs dog images | B) Predicting tomorrow's temperature in degrees | C) Spam detection | D) Digit identification | B | Predicting a continuous numeric value is regression.
40 | Supervised | The kernel trick lets SVMs? | A) Shrink the dataset | B) Implicitly map data to higher dimensions for nonlinear separation | C) Label data | D) Speed gradient descent | B | Kernels compute high-dim inner products without explicit transformation, enabling nonlinear boundaries.
41 | Supervised | Gradient boosting builds models by? | A) Training trees fully independently | B) Sequentially adding models that correct prior errors | C) Random guessing | D) Removing features | B | Boosting fits each new learner to the residual errors of the ensemble so far.
42 | Supervised | Naïve Bayes assumes features are? | A) Highly correlated | B) Conditionally independent given the class | C) Continuous only | D) Always identical | B | Its "naïve" assumption is conditional independence of features given the label.
43 | Supervised | Multi-class classification means? | A) Two classes only | B) More than two mutually exclusive classes | C) No classes | D) Continuous output | B | Multi-class problems choose among three or more exclusive categories.
44 | Supervised | A learning curve plots performance against? | A) The number of features only | B) Training set size or epochs to diagnose bias/variance | C) The color palette | D) The vocabulary | B | Learning curves reveal underfitting/overfitting as data or training increases.
45 | Supervised | Which algorithm naturally outputs feature importances? | A) kNN | B) Tree-based models (e.g., random forest) | C) Linear SVM only | D) PCA | B | Tree ensembles can rank features by how much they reduce impurity.

### Category 4 — Unsupervised Learning
46 | Unsupervised | Goal of k-means clustering? | A) Predict labels | B) Partition data into k groups minimizing within-cluster distance to centroids | C) Reduce overfitting | D) Maximize reward | B | k-means iteratively assigns points to nearest centroid and updates centroids to minimize within-cluster variance.
47 | Unsupervised | In k-means, 'k' is? | A) Number of features | B) Number of clusters chosen in advance | C) Number of iterations | D) The learning rate | B | k is the predefined cluster count.
48 | Unsupervised | Primary purpose of PCA? | A) Classification | B) Dimensionality reduction via directions of max variance | C) Reinforcement learning | D) Adding features | B | PCA projects onto orthogonal components capturing the most variance.
49 | Unsupervised | Which is an unsupervised task? | A) Spam classification | B) Customer segmentation without labels | C) House price prediction | D) Sentiment classification | B | Segmentation groups by similarity without labels.
50 | Unsupervised | Hierarchical clustering produces? | A) A single flat partition only | B) A tree-like dendrogram of nested clusters | C) A regression line | D) Principal components | B | A dendrogram represents nested groupings cut at any level.
51 | Unsupervised | A key property of PCA components? | A) Correlated with each other | B) Orthogonal (uncorrelated), ordered by variance explained | C) Class labels | D) Always integers | B | Components are orthogonal and ordered by decreasing variance.
52 | Unsupervised | The elbow method helps determine? | A) Learning rate | B) An appropriate number of clusters k | C) Test accuracy | D) Feature count | B | It picks the k where adding clusters yields diminishing error reduction.
53 | Unsupervised | Anomaly detection identifies? | A) Continuous values | B) Points deviating significantly from the norm | C) All data manually | D) Maximum reward | B | It flags rare items that differ markedly from the majority.
54 | Unsupervised | DBSCAN differs from k-means because it? | A) Needs k upfront | B) Groups by density, finds arbitrary shapes and noise | C) Works only on labels | D) Does regression | B | DBSCAN is density-based, needs no k, handles non-spherical clusters and noise.
55 | Unsupervised | Embeddings (unsupervised) aim to capture? | A) Random noise | B) Semantic similarity by placing similar items close in vector space | C) Class labels only | D) The learning rate | B | Proximity in embedding space reflects semantic/contextual similarity.
56 | Unsupervised | t-SNE and UMAP are used mainly for? | A) Classification | B) Visualizing high-dimensional data in 2D/3D | C) Boosting | D) Tokenization | B | They are nonlinear dimensionality-reduction techniques for visualization.
57 | Unsupervised | A centroid in k-means is? | A) A labeled point | B) The mean position of points in a cluster | C) The farthest point | D) A support vector | B | Each centroid is the average of its assigned cluster's points.
58 | Unsupervised | Association rule mining (e.g., Apriori) finds? | A) Regression coefficients | B) Frequent item co-occurrences (e.g., market-basket patterns) | C) Cluster centroids | D) Gradients | B | It discovers items that frequently appear together in transactions.
59 | Unsupervised | Silhouette score measures? | A) Model accuracy | B) How well-separated and cohesive clusters are | C) The learning rate | D) Token count | B | It rates clustering quality by within- vs between-cluster distances.
60 | Unsupervised | Self-supervised learning is best described as? | A) Fully labeled supervision | B) Generating labels from the data itself (e.g., next-token prediction) | C) Random labeling | D) No learning | B | It creates supervisory signals from unlabeled data (a backbone of LLM pretraining).

### Category 5 — Model Evaluation & Metrics
61 | Evaluation | The F1 score is? | A) Arithmetic mean of precision and recall | B) Harmonic mean of precision and recall | C) Product of accuracy and recall | D) Their difference | B | F1 is the harmonic mean, penalizing imbalance between precision and recall.
62 | Evaluation | Precision measures? | A) Of actual positives, how many were predicted positive | B) Of predicted positives, how many are truly positive | C) Total correct over all | D) Area under ROC | B | Precision = TP/(TP+FP).
63 | Evaluation | Recall (sensitivity) measures? | A) Of predicted positives, how many correct | B) Of actual positives, how many correctly identified | C) Harmonic mean | D) False positive rate | B | Recall = TP/(TP+FN).
64 | Evaluation | An ROC-AUC of 0.5 indicates? | A) Perfect classifier | B) No better than random guessing | C) Worse than random | D) Perfect precision | B | AUC 0.5 means chance-level ranking.
65 | Evaluation | Probabilistic interpretation of ROC-AUC? | A) Overall correctness | B) P(random positive ranked above random negative) | C) Recall at 0.5 | D) MSE | B | AUC is the probability a random positive scores higher than a random negative.
66 | Evaluation | Why can accuracy mislead on imbalanced data? | A) It's always zero | B) Predicting the majority class can score high while ignoring the rare class | C) Can't be computed | D) Equals recall | B | With imbalance, prefer precision/recall/F1 over accuracy.
67 | Evaluation | A confusion matrix shows? | A) Feature correlations | B) Counts of TP, FP, TN, FN | C) The learning curve | D) Principal components | B | It tabulates predicted vs actual classes.
68 | Evaluation | A common regression metric is? | A) F1 | B) Mean Squared Error (MSE) | C) Precision | D) ROC-AUC | B | MSE averages squared prediction errors.
69 | Evaluation | When is recall especially prioritized? | A) When false positives are costly | B) When missing a positive is very costly (e.g., disease detection) | C) When balanced | D) For PCA | B | High recall minimizes false negatives.
70 | Evaluation | R-squared indicates? | A) Number of features | B) Proportion of variance in the target explained by the model | C) Classification accuracy | D) Learning rate | B | R² is the fraction of variance explained (up to 1 for a perfect fit).
71 | Evaluation | High precision but low recall means the model? | A) Catches all positives | B) Is conservative — few false positives but misses many positives | C) Has no errors | D) Is random | B | It predicts positive rarely but accurately, missing many true positives.
72 | Evaluation | A precision-recall curve is most informative when? | A) Classes are balanced | B) Classes are highly imbalanced | C) Doing regression | D) Tokenizing | B | PR curves are preferred under strong class imbalance.
73 | Evaluation | Mean Absolute Error (MAE) differs from MSE because it? | A) Squares errors | B) Uses absolute errors, less sensitive to large outliers | C) Is for classification | D) Equals accuracy | B | MAE averages absolute errors and penalizes outliers less than MSE.
74 | Evaluation | Specificity measures? | A) TP rate | B) Of actual negatives, how many correctly identified (TN/(TN+FP)) | C) Precision | D) F1 | B | Specificity is the true negative rate.
75 | Evaluation | Top-k accuracy counts a prediction correct if? | A) The single top class is right | B) The true label is within the model's top k predictions | C) All classes match | D) k equals 1 only | B | It credits a hit if the correct class appears in the top k ranked outputs.

### Category 6 — Neural Networks & Deep Learning Basics
76 | Neural Nets | Role of an activation function? | A) Store data | B) Introduce non-linearity so the network models complex patterns | C) Split the dataset | D) Compute loss | B | Non-linearity lets networks learn beyond linear relationships.
77 | Neural Nets | Gradient descent does what? | A) Increases loss | B) Iteratively updates parameters to reduce loss | C) Randomly initializes weights | D) Removes outliers | B | It steps parameters opposite the gradient to minimize loss.
78 | Neural Nets | Backpropagation is used to? | A) Load data | B) Efficiently compute gradients via the chain rule | C) Choose learning rate | D) Normalize inputs | B | Backprop applies the chain rule backward to get per-weight gradients.
79 | Neural Nets | ReLU outputs? | A) Values 0–1 | B) The input if positive, else 0 | C) Always 1 | D) The negative of input | B | ReLU = max(0, x).
80 | Neural Nets | The learning rate controls? | A) Number of layers | B) The step size of parameter updates | C) Batch size | D) Number of epochs | B | Too high overshoots; too low converges slowly.
81 | Neural Nets | Softmax produces? | A) A single binary value | B) A probability distribution over classes summing to 1 | C) The gradient | D) A negative number | B | Softmax turns logits into normalized positive probabilities for multi-class output.
82 | Neural Nets | Dropout during training? | A) Increases learning rate | B) Randomly deactivates neurons to reduce overfitting | C) Adds layers | D) Computes loss | B | Dropout prevents co-adaptation by zeroing random activations.
83 | Neural Nets | An epoch is? | A) A single weight update | B) One full pass through the training dataset | C) The number of layers | D) The learning rate | B | One epoch = one complete pass over all training data.
84 | Neural Nets | Common loss for multi-class classification? | A) MSE | B) Cross-entropy loss | C) Hinge-only loss | D) MAE | B | Cross-entropy compares predicted class probabilities to true labels.
85 | Neural Nets | Which network specializes in image data? | A) RNN | B) CNN | C) Decision tree | D) SVM | B | CNNs use convolutional filters to capture spatial/local patterns.
86 | Neural Nets | The vanishing gradient problem refers to? | A) Gradients growing too large | B) Gradients shrinking toward zero in deep nets, slowing learning | C) Too few layers | D) Missing data | B | Small gradients in deep/recurrent nets stall early-layer learning (mitigated by ReLU, residuals).
87 | Neural Nets | An RNN is designed for? | A) Static images | B) Sequential data with temporal dependencies | C) Tabular only | D) Clustering | B | RNNs process sequences, maintaining a hidden state over time.
88 | Neural Nets | Batch normalization helps by? | A) Removing layers | B) Normalizing layer inputs to stabilize and speed training | C) Labeling data | D) Increasing temperature | B | BatchNorm reduces internal covariate shift, allowing higher learning rates.
89 | Neural Nets | Weights are typically initialized? | A) All to zero | B) Randomly (e.g., Xavier/He) to break symmetry | C) All to one | D) To the labels | B | Random init breaks symmetry so neurons learn different features.
90 | Neural Nets | An optimizer like Adam improves on plain SGD by? | A) Removing gradients | B) Using adaptive per-parameter learning rates with momentum | C) Disabling backprop | D) Increasing batch size only | B | Adam adapts learning rates per parameter and uses momentum for faster convergence.

### Category 7 — NLP Basics
91 | NLP | Tokenization is? | A) Translating text | B) Splitting text into smaller units (words/subwords) | C) Removing punctuation | D) Training a network | B | Tokens are the basic units fed to a model.
92 | NLP | A word embedding represents? | A) A random number | B) A dense vector capturing a word's meaning | C) Spelling only | D) A one-hot label | B | Embeddings place semantically similar words close together.
93 | NLP | Stop-word removal? | A) Deletes rare words | B) Removes common low-information words like 'the', 'is' | C) Stems words | D) Translates | B | It filters frequent, low-signal words.
94 | NLP | Stemming vs lemmatization? | A) Identical | B) Stemming crudely chops affixes; lemmatization maps to valid dictionary base forms | C) Lemmatization removes vowels | D) Stemming translates | B | Lemmatization uses morphology to return a proper lemma; stemming is heuristic.
95 | NLP | Bag-of-words ignores? | A) Word counts | B) Word order/grammar (uses frequency only) | C) Vocabulary | D) Document length | B | BoW discards order and syntax, keeping frequencies.
96 | NLP | TF-IDF measures? | A) Only frequency in a document | B) Importance weighting term frequency by rarity across the corpus | C) Sentence sentiment | D) Token count | B | TF-IDF boosts terms common in a doc but rare across the corpus.
97 | NLP | Named entity recognition (NER) does? | A) Counts words | B) Identifies/classifies entities (people, places, orgs) | C) Translates | D) Removes stop words | B | NER detects and categorizes named entities.
98 | NLP | Sentiment analysis aims to? | A) Translate text | B) Determine emotional tone/polarity | C) Tokenize | D) Remove punctuation | B | It classifies polarity (positive/negative/neutral).
99 | NLP | An n-gram is? | A) A single character | B) A contiguous sequence of n tokens | C) A network layer | D) A type of embedding | B | E.g., bigrams are word pairs, capturing local context.
100 | NLP | Subword tokenization (e.g., BPE) is useful because it? | A) Translates text | B) Handles rare/OOV words by splitting into known subunits | C) Removes rare words | D) Eliminates embeddings | B | BPE reduces out-of-vocabulary problems and vocabulary size.
101 | NLP | A language model's core task is to? | A) Cluster documents | B) Assign probabilities to sequences / predict the next token | C) Classify images | D) Reduce dimensions | B | LMs model the probability of token sequences.
102 | NLP | Word2Vec learns embeddings by? | A) Random assignment | B) Predicting context words (or a word from context) | C) Labeling sentiment | D) Counting characters | B | Skip-gram/CBOW learn vectors by predicting neighboring words.
103 | NLP | A "context window" in word embeddings refers to? | A) The screen size | B) The number of surrounding words considered around a target word | C) The model size | D) The vocabulary | B | It's the span of neighboring tokens used to learn or apply context.
104 | NLP | Perplexity in language modeling measures? | A) Training speed | B) How well a model predicts a sample (lower is better) | C) Model size | D) Token count | B | Lower perplexity means the model is less "surprised" by the data.
105 | NLP | Cosine similarity is commonly used in NLP to? | A) Train models | B) Measure semantic similarity between embedding vectors | C) Tokenize text | D) Remove stop words | B | It compares the angle between vectors regardless of magnitude.

### Category 8 — Generative AI & LLM Foundations
106 | GenAI/LLM | Core training objective of most autoregressive LLMs? | A) Clustering documents | B) Predicting the next token given previous tokens | C) Classifying images | D) Reducing dimensions | B | Autoregressive LLMs learn by next-token prediction at scale.
107 | GenAI/LLM | A hallucination in LLMs is? | A) A hardware error | B) Confident but factually incorrect/fabricated output | C) A type of embedding | D) A dataset | B | Fluent, confident output unsupported by facts/sources.
108 | GenAI/LLM | Primary purpose of Retrieval-Augmented Generation (RAG)? | A) Train faster | B) Ground responses in external retrieved knowledge, reducing hallucinations | C) Compress the model | D) Remove prompts | B | RAG supplies retrieved documents as context to ground outputs.
109 | GenAI/LLM | The temperature parameter controls? | A) Model size | B) Output randomness/diversity by scaling logits before softmax | C) Number of layers | D) Training speed | B | Higher temperature = more random; lower = more deterministic.
110 | GenAI/LLM | A low temperature (~0) produces? | A) Highly random/creative output | B) More deterministic, focused on highest-probability tokens | C) Identical to the prompt | D) Longer responses | B | Low temperature sharpens the distribution toward the likeliest tokens.
111 | GenAI/LLM | RLHF is? | A) A clustering algorithm | B) Training a reward model from human preferences, then RL-fine-tuning the model | C) A tokenizer | D) Dimensionality reduction | B | RLHF aligns outputs with human preferences via a learned reward model.
112 | GenAI/LLM | Fine-tuning vs prompting? | A) Fine-tuning updates weights; prompting guides a fixed model via input text | B) Identical | C) Prompting requires retraining | D) Fine-tuning never uses data | A | Fine-tuning changes weights; prompting steers a frozen model.
113 | GenAI/LLM | 'Pretraining' an LLM means? | A) Tuning on a small labeled set | B) Initial large-scale self-supervised training on vast unlabeled text | C) Deploying | D) Evaluating | B | Pretraining learns general language from massive corpora self-supervised.
114 | GenAI/LLM | A 'context window' in an LLM is? | A) Parameter count | B) Max tokens the model can process at once | C) Training duration | D) Vocabulary size | B | It's the maximum input length the model attends to per pass.
115 | GenAI/LLM | A GAN is composed of? | A) Encoder + decoder only | B) A generator and a discriminator competing | C) Two identical classifiers | D) Retriever + reranker | B | Generator creates samples; discriminator judges real vs fake, trained adversarially.
116 | GenAI/LLM | A diffusion model generates images by? | A) Clustering pixels | B) Iteratively denoising from random noise | C) Tokenizing text only | D) Pruning weights | B | Diffusion models learn to reverse a noising process to synthesize data.
117 | GenAI/LLM | "Top-p" (nucleus) sampling selects from? | A) All tokens equally | B) The smallest set of tokens whose cumulative probability ≥ p | C) Only the top token | D) Random tokens | B | Nucleus sampling samples from the top-probability mass p.
118 | GenAI/LLM | Parameter-efficient fine-tuning (e.g., LoRA) reduces cost by? | A) Retraining all weights | B) Training small added low-rank adapter weights, freezing the base | C) Deleting layers | D) Increasing temperature | B | LoRA trains few extra parameters, keeping the base model frozen.
119 | GenAI/LLM | "Tokens" billed by LLM APIs roughly correspond to? | A) Whole sentences | B) Pieces of words (subword units) | C) Characters only | D) Paragraphs | B | Tokens are subword chunks; cost scales with token count.
120 | GenAI/LLM | A foundation model is? | A) A small task-specific model | B) A large model pretrained broadly and adaptable to many downstream tasks | C) A database | D) A tokenizer | B | Foundation models are broadly pretrained and adapted via fine-tuning/prompting.

### Categories 9–12 (templates — extend to ~30 each)
**Category 9 — Prompt Engineering** (sample items; extend to 30):
121 | Prompt Eng | Prompt engineering is? | A) Building hardware | B) Crafting/refining inputs to guide an LLM toward desired outputs | C) Training from scratch | D) Cleaning datasets | B | Designing inputs to elicit accurate, useful responses.
122 | Prompt Eng | Zero-shot prompting? | A) Many labeled examples | B) Asking the model to do a task with no examples | C) Fine-tuning | D) Temperature 0 | B | No demonstrations — relies on instructions alone.
123 | Prompt Eng | Few-shot prompting? | A) Few epochs | B) Including a few examples in the prompt to demonstrate the task | C) A small model | D) Removing context | B | Examples let the model infer the desired pattern.
124 | Prompt Eng | Chain-of-thought prompting improves? | A) Image quality | B) Reasoning by eliciting intermediate steps | C) Tokenization speed | D) Model size | B | Step-by-step reasoning often boosts complex-task performance.
125 | Prompt Eng | Clear context/instructions matter because they? | A) Add parameters | B) Reduce ambiguity, improving relevance/accuracy | C) Change architecture | D) Are never needed | B | Specific instructions yield more relevant, accurate outputs.
126 | Prompt Eng | A 'system prompt' typically? | A) Shuts down the model | B) Sets overall behavior/role/constraints | C) Counts tokens | D) Trains the model | B | It establishes persona, tone, and rules for responses.
127 | Prompt Eng | A technique to reduce hallucinations in prompting? | A) Answer only from provided context | B) Maximize temperature | C) Remove all instructions | D) Shorter vocabularies | A | Grounding answers in supplied context limits fabrication.
128 | Prompt Eng | Specifying output format (e.g., JSON) achieves? | A) Training the model | B) Structured, parseable output | C) Bigger context window | D) Deleting the prompt | B | Format hints produce easily-parsed structured responses.
129 | Prompt Eng | Risk of poorly chosen few-shot examples? | A) Faster inference | B) Model imitates incorrect patterns/biases | C) Smaller model | D) Less vocabulary | B | The model generalizes from examples, including bad ones.
130 | Prompt Eng | Prompt injection is? | A) Adding layers | B) Malicious input manipulating an LLM into ignoring its instructions | C) A tokenizer | D) A training method | B | Crafted input subverts the system's intended instructions.

**Category 10 — Transformers & Attention** (sample items; extend to 30):
131 | Transformers | In self-attention, Query/Key/Value represent? | A) Three identical copies | B) Projections: Query seeks info, Key advertises, Value carries content | C) Loss/gradient/weights | D) Three models | B | Attention weights from Q·K determine how Values are combined.
132 | Transformers | Why divide Q·K by √(key dim) in scaled dot-product attention? | A) Add randomness | B) Prevent large dot products from causing tiny softmax gradients | C) Reduce vocabulary | D) Normalize output to 1 | B | Scaling keeps magnitudes moderate, avoiding vanishing gradients.
133 | Transformers | Attention scores are turned into weights summing to 1 by? | A) ReLU | B) Softmax | C) Sigmoid | D) Tanh | B | Softmax normalizes scaled scores into a distribution over values.
134 | Transformers | Why do transformers need positional encoding? | A) Reduce size | B) Self-attention is order-agnostic and needs token-position info | C) Remove embeddings | D) Increase temperature | B | Positional encodings inject sequence-order information.
135 | Transformers | Key innovation of the transformer architecture? | A) Recurrent connections | B) Relying entirely on attention instead of recurrence/convolution | C) Only convolutions | D) No embeddings | B | "Attention Is All You Need" replaced recurrence with self-attention.
136 | Transformers | Benefit of multi-head attention? | A) One attention pattern | B) Attend to multiple representation subspaces simultaneously | C) Removes Values | D) Smaller context | B | Multiple heads capture different relationship types in parallel.
137 | Transformers | Self-attention advantage over RNNs for long sequences? | A) One token at a time | B) Directly relates distant tokens and parallelizes | C) Can't model dependencies | D) Needs no training | B | Constant path length + parallel computation vs sequential RNNs.
138 | Transformers | 'Self-attention' specifically means? | A) Two different models | B) Each token attends to all tokens in the same sequence (incl. itself) | C) Only the first token | D) External docs | B | Q, K, V all come from the same sequence.
139 | Transformers | Standard self-attention's complexity scales? | A) Linearly | B) Quadratically with sequence length | C) Constant | D) Independent of length | B | All-pairs interactions give O(n²) in sequence length.
140 | Transformers | In an encoder-decoder transformer, cross-attention is? | A) Encoder-only attention | B) Decoder queries attending to encoder keys/values | C) Attention to noise | D) Attention to the loss | B | Cross-attention lets the decoder incorporate encoded input info.

**Category 11 — AI Ethics / Responsible AI** (bonus pool; sample, extend):
141 | Ethics | Algorithmic bias is? | A) A hardware defect | B) Systematic unfair outcomes, often from biased training data/design | C) A loss function | D) A faster method | B | Bias produces unfair discrimination, often from unrepresentative data.
142 | Ethics | Why is interpretability/explainability important? | A) Speeds training | B) Helps humans understand/trust decisions, esp. high-stakes | C) Reduces size | D) Raises temperature | B | Explainability enables trust, auditing, and debugging.
143 | Ethics | A key privacy concern in training on personal data? | A) Trains too fast | B) Models may memorize and leak sensitive info | C) Too few features | D) Too interpretable | B | Models can expose memorized data; mitigated by differential privacy.
144 | Ethics | Fairness aims to ensure? | A) Fastest model | B) Equitable treatment across groups without unjust discrimination | C) Smallest model | D) Max randomness | B | Outcomes shouldn't unjustly disadvantage protected groups.
145 | Ethics | 'Human in the loop' is valuable because it? | A) Always faster | B) Provides oversight/accountability for consequential decisions | C) Removes data need | D) Increases hallucinations | B | Human oversight catches errors and ensures accountability.
146 | Ethics | A deepfake is? | A) A network architecture | B) AI-generated synthetic media imitating real people | C) A dataset | D) Regularization | B | Deepfakes raise misinformation and consent concerns.

**Category 12 — Data Preprocessing** (bonus pool; sample, extend):
147 | Preprocessing | Feature scaling (normalization/standardization) is for? | A) Labeling | B) Bringing features to comparable ranges so none dominates by scale | C) Adding features | D) Computing loss | B | Helps distance- and gradient-based methods converge fairly.
148 | Preprocessing | One-hot encoding is used to? | A) Scale numeric data | B) Convert categories into binary indicator columns | C) Reduce dimensions | D) Remove outliers | B | Represents categories numerically without implying order.
149 | Preprocessing | Common strategy for missing values? | A) Delete the whole dataset | B) Impute with mean/median/mode (or model-based) | C) Learning rate 0 | D) Raise temperature | B | Imputation retains usable data.
150 | Preprocessing | Why split data before fitting a scaler? | A) Slower training | B) Avoid data leakage from the test set into preprocessing | C) Reduce vocabulary | D) Never needed | B | Fit the scaler on training data only to prevent leakage.
151 | Preprocessing | Handling class imbalance (resampling) prevents? | A) Bigger model | B) Bias toward the majority class | C) Removing features | D) Higher learning rate | B | Over/under-sampling helps the model learn the minority class.
152 | Preprocessing | Data augmentation is? | A) Deleting data | B) Generating modified copies (flips/rotations) to expand training data | C) Reducing classes | D) Tuning learning rate | B | Augmentation increases diversity and reduces overfitting.

> **Build instruction:** The agent must extend Categories 1–12 to **≥30 questions each (≥300 total)**, maintaining this exact pipe-delimited schema (`id | category | question | A | B | C | D | correct | explanation`), the same foundational difficulty, and the same accuracy bar (every correct answer unambiguous, every explanation factually correct). Load as `question-bank.json` (array of `{id, category, question, options:{A,B,C,D}, correct_answer, explanation}`) and seed into DynamoDB with `seedBankFn`. The exam draws **3 per core category × 10 = 30 questions**.

---

## Recommendations (staged, with thresholds)

**Phase 0 — Foundations (Week 1):** Register/confirm Route 53 hosted zone for `anviinnovate.com`; request ACM cert in us-east-1; create the SAM project skeleton; stand up the DynamoDB table; begin SES domain verification (DKIM/SPF/DMARC) immediately because **SES production approval can take 24h+ and DNS propagation up to 72h** — start early.

**Phase 1 — Static site + Client form (Weeks 1–2):** Build Astro site, tsParticles background, all marketing pages, and the Client Demand Form end-to-end (Lambda + DynamoDB + SES confirmation). Deploy via GitHub Actions OIDC. **Go-live threshold:** Lighthouse ≥ 95 on mobile, form submits + both emails delivered in SES sandbox to verified addresses.

**Phase 1.5 — Google registration/login (Week 2):** Configure the Web OAuth client in Google Cloud Console (origins, consent screen, `openid email profile` scopes); store the client secret + session key in SSM SecureString; build `/login` "Continue with Google", `authGoogleFn` (code exchange + ID-token verification), `authMeFn`, `authLogoutFn`, the `USER#<sub>` store, and the HttpOnly session cookie. **Threshold:** a Google sign-in creates/updates a user, sets a valid session, `/auth/me` rehydrates the UI, and protected routes redirect when signed out. Gate `/candidates/apply` + assessment behind the session.

**Phase 2 — Candidate application + Assessment engine (Weeks 2–4):** Implement application flow (now tied to the authenticated `USER#<sub>`), the 300+ bank seeding, start/submit endpoints, stratified Fisher–Yates selection, server-side timer/scoring, result emails, and the **unified 30-day cooldown** (TTL). **Threshold to enable public assessment:** SES moved to production (so result emails reach any candidate); load-test the selection algorithm for uniqueness and per-category coverage.

**Phase 3 — Hardening (Week 4+):** Add reCAPTCHA v3 + honeypot to both forms; add WAF rate-based rule if you see bot traffic (threshold: >X spam leads/day); add CloudWatch alarms on SES bounce rate >5% and complaint rate >0.1% (auto-pause sending); wire the "Training modules — coming soon, in collaboration with ai-certify.in" section and ensure it's accessible during cooldown.

**Decision thresholds that change the plan:** If monthly assessment volume exceeds ~100k requests or you need API keys/usage plans, reconsider REST API or add caching. If the team wants multi-environment/multi-cloud IaC later, migrate from SAM to CDK. If premium visual impact is a hard requirement, promote the R3F shader background from "homepage-only enhancement" to default (accept the bundle/GPU cost and add a reduced-motion fallback).

---

## Caveats
- **Requirement ambiguity (flagged):** The "retry after 30 days" vs "block for 15 days" conflict is unresolved in the source requirement. This spec **recommends a single 30-day cooldown**; confirm with the business before building, and keep the rule in one config constant so it's trivially changeable.
- **Uniqueness is probabilistic, not absolute:** With 3-per-category draws from a 300+ bank, identical 30-question sets across two candidates are extremely unlikely but not mathematically impossible; this is acceptable for screening. If true per-candidate uniqueness is mandated, track issued combinations.
- **TTL timing:** DynamoDB TTL deletions can lag up to 48 hours, so the cooldown check must compare timestamps in code rather than relying on the record's deletion.
- **SES deliverability:** Production approval is not guaranteed on first request; submit a detailed transactional use case with DKIM/SPF/DMARC already configured and bounce/complaint handling in place. Keep the physical address and unsubscribe link in every email footer.
- **Market-size sourcing:** Prefer the **Grand View Research figure ($8.60B by 2030, CAGR 21.9% 2025–2030)** over the DataAnnotation-FAQ-only "$5.33B" number in any public-facing copy, and attribute it.
- **DataAnnotation is a UI/UX reference only** (no backend/deployment patterns were drawn from it); **psoriasis.anviinnovate.com is a deployment-pattern reference only** (static hosting on AWS) — its medical content is irrelevant.
- **Question bank completeness:** This deliverable contains 152 fully-written, verified questions and an explicit, unambiguous template/instruction to extend each category to ≥30 (≥300 total). The build agent must complete the remaining items to the same accuracy standard before seeding production; do not ship a partial bank to live candidates.