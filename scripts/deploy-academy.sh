#!/usr/bin/env bash
# Deploy the AI Academy portal (ai.anviinnovate.com) to S3 + CloudFront.
#
# Hosting is provisioned by the `anviinnovate` SAM stack (AcademyBucket /
# AcademyDistribution); this script only builds and ships the static site, so it
# is safe to run as often as you like. Run ./scripts/deploy.sh instead if infra
# itself changed.
#
# Usage:  ./scripts/deploy-academy.sh [--no-invalidate]
set -euo pipefail
cd "$(dirname "$0")/.."

REGION="us-east-1"
STACK="anviinnovate"
INVALIDATE=1
[[ "${1:-}" == "--no-invalidate" ]] && INVALIDATE=0

out() { aws cloudformation describe-stacks --region "$REGION" --stack-name "$STACK" \
          --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text; }

echo "==> Reading stack outputs from $STACK ($REGION)..."
BUCKET=$(out AcademyBucketName)
DIST=$(out AcademyDistributionId)
URL=$(out AcademyUrl)
if [[ -z "$BUCKET" || "$BUCKET" == "None" ]]; then
  echo "!! Could not resolve AcademyBucketName. Is the $STACK stack deployed?" >&2
  exit 1
fi
echo "    BUCKET=$BUCKET  DIST=$DIST  URL=$URL"

echo "==> Building the academy site..."
( cd academy && npm install --no-audit --no-fund && npm run build )

PAGES=$(find academy/dist -name "index.html" | wc -l | tr -d ' ')
echo "    built $PAGES pages"

echo "==> Uploading to s3://$BUCKET ..."
# Hashed assets under /_astro are content-addressed, so they can cache forever.
# Everything else revalidates, so a deploy is visible immediately rather than
# after a browser cache expiry. (This exact split fixed a stale-page report.)
if [[ -d academy/dist/_astro ]]; then
  aws s3 cp academy/dist/_astro "s3://$BUCKET/_astro" --recursive \
    --cache-control "public,max-age=31536000,immutable" --only-show-errors
fi
aws s3 cp academy/dist "s3://$BUCKET" --recursive --exclude "_astro/*" \
  --cache-control "no-cache" --only-show-errors
# --delete prunes routes that no longer exist; --size-only avoids re-uploading
# identical files just because the mtime changed.
aws s3 sync academy/dist "s3://$BUCKET" --delete --size-only --only-show-errors

if [[ $INVALIDATE -eq 1 ]]; then
  echo "==> Invalidating CloudFront ($DIST)..."
  ID=$(aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" \
        --query 'Invalidation.Id' --output text)
  echo "    invalidation $ID created (propagation usually takes 1-3 min)"
fi

echo "==> Done.  $URL"
