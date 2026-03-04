#!/bin/bash
# Auto-post Instagram — runs via launchd/cron
# Posts 3-4 questions per day from the current week's content
#
# Schedule: runs 3x daily at 9:00, 13:00, 18:00

set -e

cd /Users/Luki/medmaster

# Load env
export $(grep -v '^#' .env.local | xargs)

# Determine which post to make based on time
HOUR=$(date +%H)
DAY_OF_WEEK=$(date +%u)  # 1=Monday, 7=Sunday

# Map day of week to post days (starting from when automation begins)
# State file tracks which posts have been made
STATE_FILE="/Users/Luki/medmaster/.instagram-post-state"
touch "$STATE_FILE"

# Find next unposted day
NEXT_DAY=""
for d in 1 2 3 4 5 6 7; do
  if ! grep -q "day-$d-done" "$STATE_FILE" 2>/dev/null; then
    NEXT_DAY=$d
    break
  fi
done

if [ -z "$NEXT_DAY" ]; then
  echo "$(date): All 7 posts done for this batch"
  exit 0
fi

echo "$(date): Posting day $NEXT_DAY..."
node scripts/post-instagram.mjs --day "$NEXT_DAY"

# Mark as done
echo "day-$NEXT_DAY-done $(date)" >> "$STATE_FILE"
echo "$(date): Day $NEXT_DAY posted successfully"
