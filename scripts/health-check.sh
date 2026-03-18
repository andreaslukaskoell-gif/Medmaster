#!/bin/bash
# Quick local health check + auto-diagnosis
# Usage: ./scripts/health-check.sh [url]

URL="${1:-https://medmaster.at}"
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "Checking $URL..."

HTTP_CODE=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 10 "$URL" 2>/dev/null)
CURL_EXIT=$?

if [ "$CURL_EXIT" -ne 0 ]; then
  echo -e "${RED}UNREACHABLE${NC} (curl exit: $CURL_EXIT)"
elif [ "$HTTP_CODE" -ge 500 ]; then
  echo -e "${RED}DOWN${NC} — HTTP $HTTP_CODE"
elif [ "$HTTP_CODE" -ge 400 ]; then
  echo -e "${YELLOW}ERROR${NC} — HTTP $HTTP_CODE"
else
  echo -e "${GREEN}UP${NC} — HTTP $HTTP_CODE"
  exit 0
fi

echo ""
echo "Running local diagnosis..."
echo "========================="

# Build check
echo -n "Build: "
if npm run build --silent 2>/tmp/medmaster-build.log; then
  echo -e "${GREEN}OK${NC}"
else
  echo -e "${RED}FAILED${NC}"
  echo "Last 20 lines:"
  tail -20 /tmp/medmaster-build.log
fi

# Type check
echo -n "Types: "
if npm run typecheck --silent 2>/tmp/medmaster-types.log; then
  echo -e "${GREEN}OK${NC}"
else
  echo -e "${RED}FAILED${NC}"
  tail -20 /tmp/medmaster-types.log
fi

echo ""
echo "To auto-fix with Claude:"
echo "  claude -p 'The site is down. Run npm run build, fix any errors, verify with npm run typecheck.'"
