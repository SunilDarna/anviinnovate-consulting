# Deploy runbook

Run from **your own terminal** (your AWS CLI creds + SSH key live there, not in the assistant's sandbox). Region: **us-east-1**. Prereqs: `aws`, `sam`, `node 20+`.

The stack provisions everything in one pass: DynamoDB, HTTP API + Lambdas, S3 + CloudFront + OAC, ACM cert (DNS-validated), Route 53 records, and SES domain identity with DKIM/SPF/DMARC.

## 0. Fix git + push (one-time)
The assistant's sandbox left stale git locks it couldn't delete. Reset cleanly on your Mac:
```bash
cd ~/Documents/AI_Projects_All/anviinnovate-consulting/anviinnovate-consulting
rm -rf .git
git init -b main
git add -A
git status --porcelain | grep env.local || echo "good: secret not staged"
git commit -m "Initial scaffold: Astro + SAM + Google OAuth login + full infra"
git remote add origin git@github.com:SunilDarna/anviinnovate-consulting.git
git push -u origin main
```

## 1. Full deploy (one command)
```bash
chmod +x scripts/*.sh
./scripts/deploy.sh
```
It resolves your hosted zone, pushes secrets to SSM, runs `sam build && sam deploy`, then builds the site with the live API URL, uploads to S3, and invalidates CloudFront.

> First run takes ~15–25 min because CloudFront + ACM are created. ACM auto-validates via the Route 53 records CloudFormation adds — no manual DNS step.

## 2. Google Cloud Console (you do this)
On OAuth client `736690706364-…apps.googleusercontent.com`:
- **Authorized JavaScript origins:** `https://anviinnovate.com`, `https://www.anviinnovate.com`, `http://localhost:4321`
- **OAuth consent screen:** External → Publish to Production; scopes `openid email profile`; add `/privacy` + `/terms` URLs.
- No redirect URI needed (GIS popup uses `postmessage`).

## 3. SES production access (you do this, once)
The stack creates the domain identity + DKIM/SPF/DMARC, but new accounts start in the **SES sandbox** (200 emails/day, only to verified addresses). To email any recipient:
- SES Console (us-east-1) → Account dashboard → **Request production access** → Transactional. DKIM/SPF/DMARC are already configured by the stack.
- Until approved, verify your own test address to receive confirmation emails.

## 4. CI/CD — push-to-deploy (optional but recommended)
**a. Create the GitHub OIDC deploy role (one-time):**
```bash
aws cloudformation deploy --region us-east-1 \
  --stack-name anviinnovate-github-oidc \
  --template-file infra/github-oidc.yaml \
  --capabilities CAPABILITY_NAMED_IAM
# If the account already has the GitHub OIDC provider, add:
#   --parameter-overrides CreateOIDCProvider=false
aws cloudformation describe-stacks --stack-name anviinnovate-github-oidc \
  --query "Stacks[0].Outputs[?OutputKey=='RoleArn'].OutputValue" --output text
```
**b. Add GitHub repo secrets** (Settings → Secrets and variables → Actions):
- `AWS_ROLE_ARN` — the RoleArn from the command above
- `PUBLIC_GOOGLE_CLIENT_ID` — `736690706364-…apps.googleusercontent.com`

After that, every push to `main` deploys automatically (the workflow resolves the hosted zone and CloudFront ID itself — no other secrets needed).

---

## Notes
- **Regenerate the Google client secret** before go-live (it was shared in chat); re-run `./scripts/ssm-put-secrets.sh` after.
- The assessment engine (`/assessment/*`) is stubbed (501) until Phase 2: question-bank seeding + Fisher-Yates selection + scoring + 30-day cooldown.
- `scripts/deploy-backend.sh` is the older backend-only script; `scripts/deploy.sh` supersedes it.
