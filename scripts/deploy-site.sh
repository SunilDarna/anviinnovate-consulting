#!/usr/bin/env bash
# Deploy the main site (anviinnovate.com) to S3 + CloudFront.
#
# Always builds with PUBLIC_API_BASE resolved from the stack. A plain
# `npm run build` produces a bundle whose API calls go to the site's own origin
# and 404 — that shipped once and broke sign-in. frontend/scripts/check-env.mjs
# now blocks that build, and this script is the supported path.
#
# Infra changes go through ./scripts/deploy.sh instead; this only ships static files.
set -euo pipefail
cd "$(dirname "$0")/.."

REGION="us-east-1"
STACK="anviinnovate"
out() { aws cloudformation describe-stacks --region "$REGION" --stack-name "$STACK" \
          --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text; }

echo "==> Reading stack outputs..."
API=$(out ApiCustomUrl)
BUCKET=$(out SiteBucket)
DIST=$(out DistributionId)
[[ -z "$API" || "$API" == "None" ]] && { echo "!! could not resolve ApiCustomUrl" >&2; exit 1; }
echo "    API=$API  BUCKET=$BUCKET  DIST=$DIST"

echo "==> Building with the live API base..."
( cd frontend && npm install --no-audit --no-fund >/dev/null && PUBLIC_API_BASE="$API" npm run build )

# Prove the API base is actually in the bundle before anything reaches S3.
if ! grep -rq "$API" frontend/dist/_astro/*.js 2>/dev/null; then
  echo "!! API base '$API' is not present in the built bundle — refusing to deploy." >&2
  exit 1
fi
echo "    verified: API base is baked into the bundle"

echo "==> Uploading to s3://$BUCKET ..."
aws s3 cp frontend/dist/_astro "s3://$BUCKET/_astro" --recursive \
  --cache-control "public,max-age=31536000,immutable" --only-show-errors
aws s3 cp frontend/dist "s3://$BUCKET" --recursive --exclude "_astro/*" \
  --cache-control "no-cache" --only-show-errors
aws s3 sync frontend/dist "s3://$BUCKET" --delete --size-only --only-show-errors

echo "==> Invalidating CloudFront ($DIST)..."
ID=$(aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" \
      --query 'Invalidation.Id' --output text)
aws cloudfront wait invalidation-completed --distribution-id "$DIST" --id "$ID"
echo "==> Done. https://anviinnovate.com"
