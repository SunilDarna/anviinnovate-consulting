#!/usr/bin/env bash
# Deploy the backend (DynamoDB + HTTP API + Lambdas) to AWS via SAM.
# Run from your own terminal (uses your configured AWS CLI creds). Region: us-east-1.
# Prereqs: aws cli, sam cli, node 20+.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Pushing secrets to SSM (SecureString)..."
AWS_REGION=us-east-1 ./scripts/ssm-put-secrets.sh

echo "==> Installing backend deps..."
( cd backend && npm install )

echo "==> SAM build + deploy..."
( cd infra && sam build && sam deploy )

echo "==> Done. API base URL:"
aws cloudformation describe-stacks --region us-east-1 \
  --stack-name anviinnovate-backend \
  --query "Stacks[0].Outputs[?OutputKey=='ApiBaseUrl'].OutputValue" --output text
echo "   ^ put this in frontend/.env as PUBLIC_API_BASE (and in the GitHub workflow it's auto-detected)."
