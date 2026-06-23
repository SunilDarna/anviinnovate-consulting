#!/usr/bin/env bash
# Push Google OAuth secrets into AWS SSM Parameter Store (SecureString).
# Reads values from .env.local — never hardcode secrets in this script.
# Usage: AWS_REGION=us-east-1 ./scripts/ssm-put-secrets.sh
set -euo pipefail

cd "$(dirname "$0")/.."
set -a; source .env.local; set +a

: "${AWS_REGION:=us-east-1}"
[ -n "${SESSION_JWT_SECRET:-}" ] || SESSION_JWT_SECRET="$(openssl rand -base64 32)"

aws ssm put-parameter --region "$AWS_REGION" --overwrite \
  --name "/anviinnovate/google/client_secret" \
  --type SecureString --value "$GOOGLE_CLIENT_SECRET"

aws ssm put-parameter --region "$AWS_REGION" --overwrite \
  --name "/anviinnovate/auth/session_jwt_secret" \
  --type SecureString --value "$SESSION_JWT_SECRET"

echo "Stored Google client secret + session JWT key in SSM ($AWS_REGION)."
echo "Client ID (public) for frontend build: $PUBLIC_GOOGLE_CLIENT_ID"
