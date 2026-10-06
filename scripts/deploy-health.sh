#!/usr/bin/env bash
# Deploy the healthspan blueprint (health.anviinnovate.com) to S3 + CloudFront.
#
# Hosting lives in its own stack (`anviinnovate-health`, infra/health.yaml) rather
# than the main `anviinnovate` stack, so shipping this page can never produce a
# changeset against the production Lambdas or API.
#
# Usage:
#   ./scripts/deploy-health.sh              # upload content + invalidate
#   ./scripts/deploy-health.sh --infra      # also create/update the stack first
#   ./scripts/deploy-health.sh --no-invalidate
set -euo pipefail
cd "$(dirname "$0")/.."

REGION="us-east-1"
STACK="anviinnovate-health"
DOMAIN="anviinnovate.com"
SRC="health"
INVALIDATE=1
INFRA=0
for arg in "$@"; do
  case "$arg" in
    --infra)         INFRA=1 ;;
    --no-invalidate) INVALIDATE=0 ;;
    *) echo "!! unknown flag: $arg" >&2; exit 2 ;;
  esac
done

out() { aws cloudformation describe-stacks --region "$REGION" --stack-name "$STACK" \
          --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text; }

if [[ $INFRA -eq 1 ]]; then
  echo "==> Resolving Route 53 hosted zone for $DOMAIN..."
  HZID=$(aws route53 list-hosted-zones-by-name --dns-name "$DOMAIN" \
    --query 'HostedZones[0].Id' --output text | sed 's#/hostedzone/##')
  echo "    HostedZoneId=$HZID"
  echo "==> Deploying $STACK (first run provisions ACM + CloudFront — allow ~15-25 min)..."
  API_DOMAIN=$(aws cloudformation describe-stacks --region "$REGION" --stack-name anviinnovate-health-api \
    --query "Stacks[0].Outputs[?OutputKey=='ApiEndpoint'].OutputValue" --output text 2>/dev/null || echo "")
  [[ "$API_DOMAIN" == "None" ]] && API_DOMAIN=""
  aws cloudformation deploy \
    --region "$REGION" \
    --stack-name "$STACK" \
    --template-file infra/health.yaml \
    --parameter-overrides "HostedZoneId=$HZID" "DomainName=$DOMAIN" "ApiDomain=$API_DOMAIN" \
    --no-fail-on-empty-changeset
fi

echo "==> Reading stack outputs from $STACK ($REGION)..."
BUCKET=$(out HealthBucketName)
DIST=$(out HealthDistributionId)
URL=$(out HealthUrl)
if [[ -z "$BUCKET" || "$BUCKET" == "None" ]]; then
  echo "!! Could not resolve HealthBucketName. Run with --infra first." >&2
  exit 1
fi
echo "    BUCKET=$BUCKET  DIST=$DIST  URL=$URL"

echo "==> Uploading $SRC/ to s3://$BUCKET ..."
# The page is a single self-contained file with no hashed assets, so everything
# revalidates: a redeploy is visible immediately rather than after a cache expiry.
aws s3 sync "$SRC" "s3://$BUCKET" --delete --size-only \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8" \
  --exclude "*" --include "*.html" --only-show-errors
# Anything non-HTML added later (images, PDFs) keeps its guessed content type.
# App JS/CSS/manifest must revalidate like HTML — a broken cached app.js is worse
# than the extra 2 KB per load. Force-copy (not sync --size-only): sync skips
# metadata-only changes, which is how a stale cache-control header got stuck once.
aws s3 cp "$SRC" "s3://$BUCKET" --recursive \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" --include "*.js" --include "*.css" --include "*.json" --include "*.svg" --only-show-errors
aws s3 sync "$SRC" "s3://$BUCKET" --delete --size-only \
  --cache-control "public,max-age=3600" \
  --exclude "*.html" --exclude "*.js" --exclude "*.css" --exclude "*.json" --exclude "*.svg" --only-show-errors

if [[ $INVALIDATE -eq 1 ]]; then
  echo "==> Invalidating CloudFront ($DIST)..."
  ID=$(aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" \
        --query 'Invalidation.Id' --output text)
  echo "    invalidation $ID created (propagation usually takes 1-3 min)"
fi

echo "==> Done.  $URL"
