#!/bin/bash
# Auto-post 3 Instagram Reels daily via launchd
# Slot 1: 09:00, Slot 2: 14:00, Slot 3: 18:00
# Each slot renders fresh reel with random BMS data

set -e
cd /Users/Luki/medmaster

# Load env
export $(grep -v '^#' .env.local | xargs)

SLOT="$1"
if [ -z "$SLOT" ]; then
  echo "$(date): ERROR — pass slot number (1, 2, or 3)"
  exit 1
fi

STATE_FILE="/Users/Luki/medmaster/.instagram-reel-state"
touch "$STATE_FILE"

# Auto-reset on Monday
DAY_OF_WEEK=$(date +%u)
if [ "$DAY_OF_WEEK" = "1" ] && ! grep -q "$(date +%Y-%m-%d)" "$STATE_FILE" 2>/dev/null; then
  echo "$(date): Weekly reset"
  > "$STATE_FILE"
fi

TODAY=$(date +%Y-%m-%d)
MARKER="${TODAY}-slot-${SLOT}"

if grep -q "$MARKER" "$STATE_FILE" 2>/dev/null; then
  echo "$(date): Slot $SLOT already posted today, skipping"
  exit 0
fi

# Re-render reel with fresh random data each time
rm -f video/.data/bms.json 2>/dev/null

echo "$(date): Posting reel slot $SLOT/3..."
node scripts/post-reel-instagram.mjs --schedule "$SLOT"

echo "$MARKER $(date)" >> "$STATE_FILE"
echo "$(date): Slot $SLOT posted successfully"
