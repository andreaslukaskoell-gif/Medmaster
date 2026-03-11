#!/bin/bash
# Smart Instagram Reel poster — 1x/day at 14:00 CET
# Selects best composition type, avoids repeats, tracks history

set -e
cd /Users/Luki/medmaster

# Load env (Supabase in .env, Instagram in .env.local)
set -a
source .env 2>/dev/null || true
source .env.local 2>/dev/null || true
set +a

echo "$(date): Smart reel poster starting..."
node scripts/post-reel-smart.mjs
echo "$(date): Done"
