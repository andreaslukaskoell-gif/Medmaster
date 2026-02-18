#!/usr/bin/env python3
"""
Final comprehensive fix:
1. Remove duplicates (endomembran at line 1042, stofftransport at 1197)
2. Fix ID bio-kap1-stofftransport -> bio-kap1-uk09 (first occurrence)
3. Verify we're left with clean structure
4. Check what's still missing
"""
import re

file_path = '/Users/Luki/medmaster/src/data/bmsKapitel/biologie/kap1-zelle.ts'

with open(file_path, 'r') as f:
    content = f.read()

print("=== STEP 1: Remove duplicate endomembran (line 1042) ===\n")

# Find and remove the duplicate "Das Endomembransystem" chapter
# It appears around line 1042 with id bio-kap1-endomembran
pattern_endomembran = r'\n\s*// ==+[^\n]*Endomembran[^\n]*\n\s*\{\s*id:\s*\'bio-kap1-endomembran\'.*?selfTest:\s*\[[^\]]*\]\s*\}\s*,'
match = re.search(pattern_endomembran, content, re.DOTALL)
if match:
    print(f"✓ Found duplicate endomembran chapter ({len(match.group(0))} chars)")
    content = content[:match.start()] + content[match.end():]
    print("✓ Removed duplicate endomembran")
else:
    print("  Duplicate endomembran not found (may already be removed)")

print("\n=== STEP 2: Remove duplicate stofftransport (line 1197) ===\n")

# Find the SECOND occurrence of Stofftransport and remove it
stofftransport_matches = list(re.finditer(r'\n\s*// ==+[^\n]*Stofftransport[^\n]*\n\s*\{\s*id:\s*\'bio-kap1-stofftransport\'.*?selfTest:\s*\[[^\]]*\]\s*\}', content, re.DOTALL))
if len(stofftransport_matches) >= 2:
    print(f"✓ Found {len(stofftransport_matches)} stofftransport chapters")
    # Remove the second one
    second_match = stofftransport_matches[1]
    content = content[:second_match.start()] + content[second_match.end():]
    print("✓ Removed second stofftransport chapter")
elif len(stofftransport_matches) == 1:
    print("  Only one stofftransport found (duplicate may already be removed)")
else:
    print("  No stofftransport chapters found")

print("\n=== STEP 3: Fix stofftransport ID to uk09 ===\n")

# Change bio-kap1-stofftransport to bio-kap1-uk09
if "bio-kap1-stofftransport" in content:
    content = content.replace("id: 'bio-kap1-stofftransport',", "id: 'bio-kap1-uk09',")
    print("✓ Changed bio-kap1-stofftransport -> bio-kap1-uk09")
else:
    print("  No stofftransport ID found to fix")

# Save
with open(file_path, 'w') as f:
    f.write(content)

print("\n=== VERIFICATION ===\n")

# Count chapters
chapters = re.findall(r"id: '(bio-kap1-uk\d+)',\s+title: '([^']+)'", content)
print(f"Total chapters with standard IDs: {len(chapters)}\n")
for i, (id, title) in enumerate(chapters, 1):
    print(f"{i:2d}. {id} - {title}")

# Check for any remaining non-standard IDs
non_standard = re.findall(r"id: '(bio-kap1-(?!uk\d+)[^']+)'", content)
if non_standard:
    print(f"\n⚠️  Non-standard IDs still present:")
    for id in set(non_standard):
        print(f"    - {id}")
else:
    print("\n✅ All IDs are now standard!")

print(f"\n✅ CLEANUP COMPLETE - {len(chapters)} chapters ready!")
