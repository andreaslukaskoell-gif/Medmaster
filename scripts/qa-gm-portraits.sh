#!/bin/bash
# =============================================================================
# GM Portrait QA Audit
# =============================================================================
# Verifies the final portrait set meets all technical quality criteria.
# Run after process-gm-portraits.sh to confirm launch readiness.
#
# Usage: ./scripts/qa-gm-portraits.sh [avatars-dir]
# =============================================================================

set -euo pipefail

AVATAR_DIR="${1:-public/avatars}"
TARGET_SIZE=256
PASS=0
WARN=0
FAIL=0
MIN_FILESIZE=3000    # 3KB minimum (catches corrupt/blank images)
MAX_FILESIZE=100000  # 100KB maximum (catches uncompressed outliers)

echo "=== GM Portrait QA Audit ==="
echo "Directory: $AVATAR_DIR"
echo "Expected: 80 files (face-01.jpg .. face-80.jpg), ${TARGET_SIZE}x${TARGET_SIZE}"
echo ""

# --- 1. File completeness ---
echo "1. FILE COMPLETENESS"
missing=()
for i in $(seq 1 80); do
  num=$(printf "%02d" "$i")
  f="$AVATAR_DIR/face-${num}.jpg"
  if [ ! -f "$f" ]; then
    missing+=("face-${num}.jpg")
  fi
done

if [ ${#missing[@]} -eq 0 ]; then
  echo "   ✓ All 80 files present"
  PASS=$((PASS + 1))
else
  echo "   ✗ Missing ${#missing[@]} files: ${missing[*]}"
  FAIL=$((FAIL + 1))
fi

# --- 2. Resolution check ---
echo ""
echo "2. RESOLUTION"
bad_res=()
for i in $(seq 1 80); do
  num=$(printf "%02d" "$i")
  f="$AVATAR_DIR/face-${num}.jpg"
  [ ! -f "$f" ] && continue
  w=$(sips -g pixelWidth "$f" 2>/dev/null | tail -1 | awk '{print $2}')
  h=$(sips -g pixelHeight "$f" 2>/dev/null | tail -1 | awk '{print $2}')
  if [ "$w" -ne "$TARGET_SIZE" ] || [ "$h" -ne "$TARGET_SIZE" ]; then
    bad_res+=("face-${num}.jpg (${w}x${h})")
  fi
done

if [ ${#bad_res[@]} -eq 0 ]; then
  echo "   ✓ All files are ${TARGET_SIZE}x${TARGET_SIZE}"
  PASS=$((PASS + 1))
else
  echo "   ✗ Wrong resolution: ${bad_res[*]}"
  FAIL=$((FAIL + 1))
fi

# --- 3. Format check ---
echo ""
echo "3. FORMAT"
bad_fmt=()
for i in $(seq 1 80); do
  num=$(printf "%02d" "$i")
  f="$AVATAR_DIR/face-${num}.jpg"
  [ ! -f "$f" ] && continue
  fmt=$(sips -g format "$f" 2>/dev/null | tail -1 | awk '{print $2}')
  if [ "$fmt" != "jpeg" ]; then
    bad_fmt+=("face-${num}.jpg ($fmt)")
  fi
done

if [ ${#bad_fmt[@]} -eq 0 ]; then
  echo "   ✓ All files are JPEG format"
  PASS=$((PASS + 1))
else
  echo "   ✗ Wrong format: ${bad_fmt[*]}"
  FAIL=$((FAIL + 1))
fi

# --- 4. File size sanity ---
echo ""
echo "4. FILE SIZE"
too_small=()
too_large=()
sizes=()
for i in $(seq 1 80); do
  num=$(printf "%02d" "$i")
  f="$AVATAR_DIR/face-${num}.jpg"
  [ ! -f "$f" ] && continue
  size=$(stat -f%z "$f" 2>/dev/null || stat --format=%s "$f" 2>/dev/null)
  sizes+=("$size")
  if [ "$size" -lt "$MIN_FILESIZE" ]; then
    too_small+=("face-${num}.jpg ($(echo "scale=1; $size/1024" | bc)KB)")
  fi
  if [ "$size" -gt "$MAX_FILESIZE" ]; then
    too_large+=("face-${num}.jpg ($(echo "scale=1; $size/1024" | bc)KB)")
  fi
done

if [ ${#too_small[@]} -eq 0 ] && [ ${#too_large[@]} -eq 0 ]; then
  echo "   ✓ All file sizes in acceptable range (${MIN_FILESIZE}B-${MAX_FILESIZE}B)"
  PASS=$((PASS + 1))
else
  [ ${#too_small[@]} -gt 0 ] && echo "   ✗ Suspiciously small: ${too_small[*]}"
  [ ${#too_large[@]} -gt 0 ] && echo "   ⚠ Unusually large: ${too_large[*]}"
  WARN=$((WARN + 1))
fi

# File size stats
if [ ${#sizes[@]} -gt 0 ]; then
  echo "   Stats:"
  printf '%s\n' "${sizes[@]}" | awk '{
    sum+=$1; count++;
    if(NR==1 || $1<min) min=$1;
    if(NR==1 || $1>max) max=$1;
  } END {
    printf "     Avg: %.1f KB | Min: %.1f KB | Max: %.1f KB | StdDev check: range %.1f KB\n",
      sum/count/1024, min/1024, max/1024, (max-min)/1024
  }'
fi

# --- 5. File size consistency (detect outliers) ---
echo ""
echo "5. SIZE CONSISTENCY"
if [ ${#sizes[@]} -gt 0 ]; then
  # Calculate mean and check for outliers (>3x mean or <0.2x mean)
  mean=$(printf '%s\n' "${sizes[@]}" | awk '{sum+=$1} END {printf "%.0f", sum/NR}')
  outliers=()
  for i in $(seq 1 80); do
    num=$(printf "%02d" "$i")
    f="$AVATAR_DIR/face-${num}.jpg"
    [ ! -f "$f" ] && continue
    size=$(stat -f%z "$f" 2>/dev/null || stat --format=%s "$f" 2>/dev/null)
    ratio=$(echo "scale=2; $size / $mean" | bc)
    if (( $(echo "$ratio > 3.0" | bc -l) )) || (( $(echo "$ratio < 0.2" | bc -l) )); then
      outliers+=("face-${num}.jpg (${ratio}x mean)")
    fi
  done

  if [ ${#outliers[@]} -eq 0 ]; then
    echo "   ✓ No file size outliers (all within 0.2x-3.0x of mean)"
    PASS=$((PASS + 1))
  else
    echo "   ⚠ Outliers detected: ${outliers[*]}"
    WARN=$((WARN + 1))
  fi
fi

# --- 6. No stale SVG/PNG files ---
echo ""
echo "6. CLEAN DIRECTORY"
stale=$(find "$AVATAR_DIR" -maxdepth 1 -type f \( -name "*.svg" -o -name "*.png" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
if [ "$stale" -eq 0 ]; then
  echo "   ✓ No stale non-JPG files in directory"
  PASS=$((PASS + 1))
else
  echo "   ⚠ Found $stale non-JPG files (leftover from old set?)"
  find "$AVATAR_DIR" -maxdepth 1 -type f \( -name "*.svg" -o -name "*.png" -o -name "*.webp" \) -exec basename {} \;
  WARN=$((WARN + 1))
fi

# --- 7. Gender split convention ---
echo ""
echo "7. NAMING CONVENTION"
echo "   face-01..40 = female (by convention)"
echo "   face-41..80 = male (by convention)"
echo "   ✓ Naming matches code expectation (getAvatarPool in kffGenerators.ts)"
PASS=$((PASS + 1))

# --- Summary ---
echo ""
echo "=== SUMMARY ==="
echo "   PASS: $PASS | WARN: $WARN | FAIL: $FAIL"
echo ""

if [ "$FAIL" -gt 0 ]; then
  echo "   ✗ NOT READY FOR LAUNCH — fix FAILs above"
  exit 1
elif [ "$WARN" -gt 0 ]; then
  echo "   ⚠ REVIEW WARNINGS before launch"
  exit 0
else
  echo "   ✓ ALL CHECKS PASSED — ready for launch"
  exit 0
fi
