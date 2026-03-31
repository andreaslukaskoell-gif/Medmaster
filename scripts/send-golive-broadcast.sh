#!/bin/bash
# Send launch-golive email to all starter users
# Schedule: launchctl or cron for March 31, 2026 at 07:00 CEST

curl -s -X POST "https://nnelpgrzxwsltrttuiuw.supabase.co/functions/v1/send-email" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer medmaster-email-2026" \
  --data '{"action":"broadcast","templateId":"launch-golive"}'

echo ""
echo "Broadcast sent at $(date)"
