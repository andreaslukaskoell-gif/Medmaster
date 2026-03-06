#!/bin/bash
# Auto-post Instagram — runs via launchd daily at 18:00
# Posts 1 question per day, auto-resets weekly on Monday

set -e

cd /Users/Luki/medmaster

# Load env
export $(grep -v '^#' .env.local | xargs)

STATE_FILE="/Users/Luki/medmaster/.instagram-post-state"
touch "$STATE_FILE"

# Auto-reset on Monday (day 1 of week) if state has day-7-done
DAY_OF_WEEK=$(date +%u)
if [ "$DAY_OF_WEEK" = "1" ] && grep -q "day-7-done" "$STATE_FILE" 2>/dev/null; then
  echo "$(date): Weekly reset — starting new week"
  > "$STATE_FILE"
fi

# Find next unposted day
NEXT_DAY=""
for d in 1 2 3 4 5 6 7; do
  if ! grep -q "day-$d-done" "$STATE_FILE" 2>/dev/null; then
    NEXT_DAY=$d
    break
  fi
done

if [ -z "$NEXT_DAY" ]; then
  echo "$(date): All 7 posts done for this week, waiting for Monday reset"
  exit 0
fi

echo "$(date): Posting day $NEXT_DAY..."
node scripts/post-instagram.mjs --day "$NEXT_DAY"

# Mark as done
echo "day-$NEXT_DAY-done $(date)" >> "$STATE_FILE"
echo "$(date): Day $NEXT_DAY posted successfully"

# Cleanup: delete posted image from public/marketing to save disk space
DAY_PAD=$(printf "%02d" "$NEXT_DAY")
rm -f public/marketing/day-${DAY_PAD}-*-question.png public/marketing/day-${DAY_PAD}-*-answer.png 2>/dev/null
echo "$(date): Cleaned up day $NEXT_DAY images"

# On weekly reset, also clean marketing/weekly old dirs (keep only latest)
if [ "$DAY_OF_WEEK" = "1" ]; then
  ls -dt marketing/weekly/*/ 2>/dev/null | tail -n +2 | xargs rm -rf 2>/dev/null
  echo "$(date): Cleaned up old weekly content dirs"
fi
