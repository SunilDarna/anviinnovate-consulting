#!/usr/bin/env bash
# Full deploy: secrets -> SSM, backend+hosting+SES via SAM, then build & upload the site.
# Run from your own terminal (uses your AWS CLI creds). Region: us-east-1.
# Prereqs: aws cli, sam cli, node 20+. First run also: ./infra deploy of github-oidc (optional, for CI).
set -euo pipefail
cd "$(dirname "$0")/.."

DOMAIN="anviinnovate.com"
REGION="us-east-1"

echo "==> Resolving Route 53 hosted zone for $DOMAIN..."
HZID=$(aws route53 list-hosted-zones-by-name --dns-name "$DOMAIN" \
  --query 'HostedZones[0].Id' --output text | sed 's#/hostedzone/##')
echo "    HostedZoneId=$HZID"

echo "==> Pushing secrets to SSM (SecureString)..."
AWS_REGION=$REGION ./scripts/ssm-put-secrets.sh

echo "==> Installing backend deps..."
( cd backend && npm install )

echo "==> SAM build + deploy (this provisions ACM + CloudFront — first run can take ~20 min)..."
( cd infra && sam build && sam deploy --parameter-overrides "HostedZoneId=$HZID" )

echo "==> Reading stack outputs..."
API=$(aws cloudformation describe-stacks --region $REGION --stack-name anviinnovate \
  --query "Stacks[0].Outputs[?OutputKey=='ApiCustomUrl'].OutputValue" --output text)
BUCKET=$(aws cloudformation describe-stacks --region $REGION --stack-name anviinnovate \
  --query "Stacks[0].Outputs[?OutputKey=='SiteBucket'].OutputValue" --output text)
DIST=$(aws cloudformation describe-stacks --region $REGION --stack-name anviinnovate \
  --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" --output text)
echo "    API=$API  BUCKET=$BUCKET  DIST=$DIST"

echo "==> Building frontend with the live API URL..."
( cd frontend && npm install && PUBLIC_API_BASE="$API" npm run build )

echo "==> Uploading site to S3 + invalidating CloudFront..."
aws s3 sync frontend/dist "s3://$BUCKET" --delete
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" >/dev/null

echo "==> Done. Site: https://$DOMAIN   API: $API"
