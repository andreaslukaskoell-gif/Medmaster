#!/bin/bash
# =============================================================================
# GM Portrait Photo Processor
# =============================================================================
# Normalizes raw source portraits into a uniform 256x256 JPEG set
# for the Gedächtnis/Merkfähigkeit (GM) subtest.
#
# Usage:
#   ./scripts/process-gm-portraits.sh <source-dir> [output-dir]
#
# Source dir must contain:
#   - female/  (at least 40 portrait images)
#   - male/    (at least 40 portrait images)
#
# Output: face-01.jpg through face-80.jpg
#   face-01..40 = female, face-41..80 = male
# =============================================================================

set -euo pipefail

SOURCE_DIR="${1:?Usage: $0 <source-dir> [output-dir]}"
OUTPUT_DIR="${2:-public/avatars}"

FEMALE_DIR="$SOURCE_DIR/female"
MALE_DIR="$SOURCE_DIR/male"

TARGET_SIZE=256
QUALITY=85  # JPEG quality (1-100)
TOTAL_FEMALE=40
TOTAL_MALE=40

# --- Validation ---
if [ ! -d "$FEMALE_DIR" ]; then
  echo "ERROR: $FEMALE_DIR not found. Create female/ and male/ subdirs in source dir."
  exit 1
fi
if [ ! -d "$MALE_DIR" ]; then
  echo "ERROR: $MALE_DIR not found. Create female/ and male/ subdirs in source dir."
  exit 1
fi

female_count=$(find "$FEMALE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | wc -l | tr -d ' ')
male_count=$(find "$MALE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | wc -l | tr -d ' ')

echo "Found: $female_count female, $male_count male source images"

if [ "$female_count" -lt "$TOTAL_FEMALE" ]; then
  echo "ERROR: Need at least $TOTAL_FEMALE female images, found $female_count"
  exit 1
fi
if [ "$male_count" -lt "$TOTAL_MALE" ]; then
  echo "ERROR: Need at least $TOTAL_MALE male images, found $male_count"
  exit 1
fi

# --- Setup ---
mkdir -p "$OUTPUT_DIR"
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

echo ""
echo "Processing portraits → ${TARGET_SIZE}x${TARGET_SIZE} JPEG (quality $QUALITY)"
echo "Output: $OUTPUT_DIR/face-01.jpg .. face-80.jpg"
echo ""

# --- Process function ---
process_image() {
  local src="$1"
  local dst="$2"
  local temp="$TEMP_DIR/$(basename "$dst")"

  # Get source dimensions
  local w h
  w=$(sips -g pixelWidth "$src" | tail -1 | awk '{print $2}')
  h=$(sips -g pixelHeight "$src" | tail -1 | awk '{print $2}')

  # Check minimum source quality
  local min_dim=$((w < h ? w : h))
  if [ "$min_dim" -lt 200 ]; then
    echo "  WARN: $src is only ${w}x${h} — may be low quality"
  fi

  # Copy to temp (sips modifies in place)
  cp "$src" "$temp"

  # Crop to square (center crop)
  if [ "$w" -ne "$h" ]; then
    if [ "$w" -gt "$h" ]; then
      # Landscape: crop sides
      local offset=$(( (w - h) / 2 ))
      sips --cropToHeightWidth "$h" "$h" "$temp" > /dev/null 2>&1
    else
      # Portrait: crop top/bottom (bias toward top for headshots)
      local crop_h="$w"
      sips --cropToHeightWidth "$crop_h" "$w" "$temp" > /dev/null 2>&1
    fi
  fi

  # Resize to target
  sips --resampleHeightWidth "$TARGET_SIZE" "$TARGET_SIZE" "$temp" > /dev/null 2>&1

  # Convert to JPEG with quality
  sips --setProperty format jpeg --setProperty formatOptions "$QUALITY" "$temp" --out "$dst" > /dev/null 2>&1

  # Verify output
  local out_w out_h
  out_w=$(sips -g pixelWidth "$dst" | tail -1 | awk '{print $2}')
  out_h=$(sips -g pixelHeight "$dst" | tail -1 | awk '{print $2}')

  if [ "$out_w" -ne "$TARGET_SIZE" ] || [ "$out_h" -ne "$TARGET_SIZE" ]; then
    echo "  ERROR: $dst is ${out_w}x${out_h}, expected ${TARGET_SIZE}x${TARGET_SIZE}"
    return 1
  fi
}

# --- Process females (face-01 to face-40) ---
echo "Processing female portraits..."
idx=1
find "$FEMALE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort | head -n "$TOTAL_FEMALE" | while read -r src; do
  num=$(printf "%02d" "$idx")
  dst="$OUTPUT_DIR/face-${num}.jpg"
  echo "  [$num/40] $(basename "$src") → face-${num}.jpg"
  process_image "$src" "$dst"
  idx=$((idx + 1))
done

# --- Process males (face-41 to face-80) ---
echo ""
echo "Processing male portraits..."
idx=41
find "$MALE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort | head -n "$TOTAL_MALE" | while read -r src; do
  num=$(printf "%02d" "$idx")
  dst="$OUTPUT_DIR/face-${num}.jpg"
  echo "  [$num/80] $(basename "$src") → face-${num}.jpg"
  process_image "$src" "$dst"
  idx=$((idx + 1))
done

# --- Final verification ---
echo ""
echo "=== Verification ==="
total=$(find "$OUTPUT_DIR" -name "face-*.jpg" | wc -l | tr -d ' ')
echo "Total files: $total / 80"

if [ "$total" -eq 80 ]; then
  # Check all are correct size
  bad=0
  for i in $(seq 1 80); do
    num=$(printf "%02d" "$i")
    f="$OUTPUT_DIR/face-${num}.jpg"
    if [ ! -f "$f" ]; then
      echo "  MISSING: $f"
      bad=$((bad + 1))
    else
      w=$(sips -g pixelWidth "$f" | tail -1 | awk '{print $2}')
      h=$(sips -g pixelHeight "$f" | tail -1 | awk '{print $2}')
      if [ "$w" -ne "$TARGET_SIZE" ] || [ "$h" -ne "$TARGET_SIZE" ]; then
        echo "  BAD SIZE: $f (${w}x${h})"
        bad=$((bad + 1))
      fi
    fi
  done

  if [ "$bad" -eq 0 ]; then
    echo "ALL 80 portraits: ${TARGET_SIZE}x${TARGET_SIZE} JPEG ✓"
    # File size stats
    echo ""
    echo "File sizes:"
    ls -la "$OUTPUT_DIR"/face-*.jpg | awk '{sum+=$5; count++} END {printf "  Avg: %.1f KB | Total: %.1f KB\n", sum/count/1024, sum/1024}'
    ls -la "$OUTPUT_DIR"/face-*.jpg | awk 'BEGIN{min=999999;max=0} {if($5<min)min=$5; if($5>max)max=$5} END {printf "  Min: %.1f KB | Max: %.1f KB\n", min/1024, max/1024}'
  else
    echo "$bad files with issues"
    exit 1
  fi
else
  echo "ERROR: Expected 80 files, found $total"
  exit 1
fi

echo ""
echo "Done. Run 'npm run dev' and check GM subtest to verify."
