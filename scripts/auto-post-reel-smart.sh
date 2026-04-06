#!/bin/bash
# Smart Instagram Reel poster — 1x/day at 14:00 CET
# Selects best composition type, avoids repeats, tracks history

cd /Users/Luki/medmaster

LOG="logs/instagram-poster.log"
mkdir -p logs

log() { echo "$(date '+%Y-%m-%d %H:%M:%S'): $1" | tee -a "$LOG"; }

# Load env (Supabase in .env, Instagram in .env.local)
set -a
source .env 2>/dev/null || true
source .env.local 2>/dev/null || true
set +a

# Ensure node is available (cron has minimal PATH)
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

log "Smart reel poster starting..."

# Check token exists
if [ -z "$IG_PAGE_TOKEN" ]; then
  log "FEHLER: Kein IG_PAGE_TOKEN in .env.local! Token erneuern: ./scripts/refresh-ig-token.sh"
  exit 1
fi

# Run the poster
if node scripts/post-reel-smart.mjs 2>&1 | tee -a "$LOG"; then
  log "Erfolgreich gepostet!"
else
  log "FEHLER beim Posten! Exit code: $?"
  exit 1
fi
