#!/bin/bash
set -a
source "$(dirname "$0")/../.env.local"
set +a

curl -s -X POST "https://nnelpgrzxwsltrttuiuw.supabase.co/functions/v1/send-email" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  --data '{
    "action": "send",
    "userId": "test-preview",
    "templateId": "launch-announcement",
    "templateData": {
      "email": "welcome@medmaster.at",
      "displayName": "Luki"
    }
  }'
echo ""
