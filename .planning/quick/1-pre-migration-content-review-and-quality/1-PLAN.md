---
phase: 1-pre-migration-content-review-and-quality
plan: 1
type: execute
wave: 1
depends_on: []
files_modified: [".planning/PRE_MIGRATION_REVIEW.md"]
autonomous: true
requirements: []

must_haves:
  truths:
    - "All 68 Unterkapitel markdown files validated for content quality"
    - "All 68 questions JSON files validated for MedAT format compliance"
    - "Structural consistency verified across all files"
    - "All errors documented and fixed"
  artifacts:
    - path: ".planning/PRE_MIGRATION_REVIEW.md"
      provides: "Complete review report with status, errors, and fixes"
      min_lines: 50
  key_links:
    - from: "Bio_Kap*_UK*.md"
      to: "Bio_Kap*_UK*_questions.json"
      via: "paired content files"
      pattern: "same UK id"
---

<objective>
Conduct comprehensive pre-migration quality review of all 68 Biologie Unterkapitel files to ensure content accuracy, MedAT format compliance, and structural consistency before Supabase migration.

Purpose: Catch and fix content/format errors now (in planning files) rather than after migration (in database), ensuring high-quality data from day one.
Output: PRE_MIGRATION_REVIEW.md report + all errors fixed in source files.
</objective>

<execution_context>
@./.claude/get-shit-done/workflows/execute-plan.md
@./.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/STATE.md
@.planning/ROADMAP.md

## Content Files to Review

**Scope:** 68 Unterkapitel pairs (.md + .json) in .planning/

**Format:** Bio_Kap{N}_UK{NN}_{Name}.md + Bio_Kap{N}_UK{NN}_questions.json

**Chapters covered:**
- Kap1 (Zellbiologie): 19 UKs
- Kap2 (Gewebe): 4 UKs
- Kap3-6, 9-12 (remaining Biologie topics)
- Kap7 (Methoden der Genetik): 6 UKs
- Kap8 (Humangenetik): 2 UKs

## Review Criteria

**INHALT (.md files):**
- Stichwortliste coverage (no missing topics from chapter scope)
- Medical/scientific accuracy (facts correct per university-level biology)
- Merksätze present and memorable (minimum 4 per UK)
- Exam focus box present
- MedAT-H level (not trivial, not too advanced)

**FRAGEN (questions.json):**
- Exactly 5 options (A-E) per question (MedAT format)
- Correct answer is factually correct
- Explanation present and accurate
- No duplicate questions within UK
- Difficulty realistic (mix of easy/medium/hard)

**STRUKTUR:**
- id format consistent (e.g., bio-kap7-uk1-pcr)
- chapter_id matches bms_chapters structure
- order_index unique per chapter
- File naming matches id pattern
</context>

<tasks>

<task type="auto">
  <name>Task 1: Automated Content Validation and Error Detection</name>
  <files>.planning/Bio_Kap*_UK*.md, .planning/Bio_Kap*_UK*.json</files>
  <action>
Create automated validation script that checks all 68 Unterkapitel pairs:

**1. Structural Validation:**
- Parse all Bio_Kap*_UK*.md files, extract Stichwortliste section counts
- Parse all Bio_Kap*_UK*.json files, validate JSON structure
- Check file naming consistency (Bio_KapN_UKNN_{Name}.md matches _questions.json)
- Verify id format pattern: bio-kapN-ukNN-{slug}

**2. Question Format Validation:**
For each questions.json:
- Count options per question (MUST be exactly 5: A, B, C, D, E)
- Verify "correct" field exists and is A-E
- Verify "explanation" field exists and is non-empty (>20 chars)
- Verify "difficulty" field is "easy"|"medium"|"hard"
- Check for duplicate question IDs within same UK
- Flag questions with missing fields

**3. Content Quality Checks:**
For each .md file:
- Count MerksatzBox occurrences (flag if <4)
- Verify EINLEITUNG + KERNINHALT + ZUSAMMENFASSUNG + PRAXISBEZUG sections exist
- Check for Stichwortliste section with bullet points
- Flag files with <500 words (too shallow) or >3000 words (too verbose)

**4. Cross-Reference Validation:**
- Each .md file has matching .json file (Bio_Kap1_UK01_*.md ↔ Bio_Kap1_UK01_questions.json)
- Count questions per UK (flag if <3 or >8)

**Output:** Generate structured error report with:
```
{
  "total_uks": 68,
  "valid_uks": N,
  "errors": [
    {
      "file": "Bio_Kap7_UK02_DNA_Sequenzierung.md",
      "type": "content_quality",
      "severity": "warning",
      "message": "Only 2 MerksatzBox found (minimum 4 expected)"
    },
    {
      "file": "Bio_Kap8_UK03_questions.json",
      "type": "format_violation",
      "severity": "blocker",
      "message": "Question q3 has 4 options (expected 5)"
    }
  ]
}
```

Use Node.js script or Python for automation (prefer Node for consistency with project).
  </action>
  <verify>
Run validation script:
```bash
node .planning/validate-unterkapitel.js
```
Output shows total UKs scanned, errors categorized by severity.
  </verify>
  <done>
Validation script executes successfully, produces structured error report with counts (total UKs, valid UKs, errors by severity).
  </done>
</task>

<task type="auto">
  <name>Task 2: Manual Content Review and Error Fixing</name>
  <files>.planning/Bio_Kap*_UK*.md, .planning/Bio_Kap*_UK*.json</files>
  <action>
Based on validation script output, manually review and fix all identified errors:

**Priority 1 — Blockers (MUST fix before migration):**
- Questions with ≠5 options → add missing options (ensure A-E coverage)
- Missing "correct" field → identify correct answer and add
- Missing "explanation" field → write factual explanation (50-150 words)
- Duplicate question IDs → rename to unique IDs (q1, q2, q3...)
- Malformed JSON → fix syntax errors

**Priority 2 — Warnings (SHOULD fix for quality):**
- <4 MerksatzBox per UK → add memorable Merksätze for key concepts
- Missing difficulty field → assign easy/medium/hard based on content depth
- Missing sections (PRAXISBEZUG, ZUSAMMENFASSUNG) → add if semantically valuable
- Thin content (<500 words) → expand with medical context (but don't pad)

**Priority 3 — Enhancements (NICE to have):**
- Ensure altfragen MerksatzBox for exam-relevant topics
- Verify klinischerBezug for medical relevance
- Check Stichwortliste completeness against chapter scope

**Fixing Strategy:**
- Read error report from Task 1
- Group errors by file and type
- Fix systematically (all JSON format errors first, then content issues)
- For scientific accuracy: cross-reference with university-level biology sources
- For MedAT level: calibrate to Austrian medical school entrance exam standards

**Do NOT:**
- Change correct answers without verifying scientific accuracy
- Add filler content just to meet word counts
- Auto-generate MerksatzBox (they must be memorable and medically accurate)
  </action>
  <verify>
Re-run validation script after fixes:
```bash
node .planning/validate-unterkapitel.js
```
Verify error count reduced to 0 blockers, <5 warnings.

Manual spot-check 3 random UKs:
- Bio_Kap1_UK01_questions.json → all questions have 5 options
- Bio_Kap7_UK01_PCR.md → ≥4 MerksatzBox present
- Bio_Kap8_UK04_PID_PND.md → medical facts correct
  </verify>
  <done>
All blocker errors fixed (questions.json format 100% compliant). Warning count <5. Spot-check confirms quality improvements.
  </done>
</task>

<task type="auto">
  <name>Task 3: Generate PRE_MIGRATION_REVIEW.md Report</name>
  <files>.planning/PRE_MIGRATION_REVIEW.md</files>
  <action>
Create comprehensive review report documenting findings, fixes, and recommendations:

**Structure:**

```markdown
# Pre-Migration Content Review and Quality Check

**Review Date:** 2026-02-20
**Scope:** 68 Biologie Unterkapitel (.md + .json pairs)
**Reviewer:** Claude Sonnet 4.5

## Executive Summary

✅ **STATUS: READY FOR MIGRATION** (or ⚠️ PROBLEMS FOUND)

- **Total UKs Reviewed:** 68
- **Total Questions Reviewed:** {N}
- **Blockers Found:** {N} (all fixed)
- **Warnings Found:** {N} (addressed)
- **Enhancements Applied:** {N}

---

## Review Findings

### 1. Format Compliance

**MedAT Question Format (5 options A-E):**
- ✅ Compliant: {N} UKs
- ❌ Non-compliant (fixed): {list files with issues}

**JSON Structure:**
- ✅ Valid JSON: {N}/68
- ⚠️ Syntax errors (fixed): {list files}

### 2. Content Quality

**Merksätze Coverage:**
- ✅ ≥4 MerksatzBox: {N} UKs
- ⚠️ <4 MerksatzBox: {list files + fix status}

**Medical Accuracy:**
- ✅ Verified correct: {N} UKs
- ⚠️ Factual corrections made: {list specific corrections}

**MedAT-H Level:**
- ✅ Appropriate difficulty: {N} UKs
- ⚠️ Adjusted: {list files}

### 3. Structural Consistency

**File Naming:**
- ✅ Consistent: {N}/68
- ❌ Renamed: {list files}

**ID Format:**
- ✅ Pattern match (bio-kapN-ukNN-slug): {N}/68
- ❌ Fixed: {list files}

---

## Problems Fixed

| File | Issue | Fix Applied |
|------|-------|-------------|
| Bio_Kap7_UK02_questions.json | Question q4 had 4 options | Added option E (distractor) |
| Bio_Kap8_UK03_Erbgaenge.md | Only 2 MerksatzBox | Added 3 more for key concepts |
| ... | ... | ... |

---

## Top 3 Content Improvements Recommended

1. **Altfragen Markers:** Add MerksatzBox type="altfragen" for exam-relevant topics in Kap7 (PCR, DNA-Seq, STR) and Kap8 (Erbgänge, PND)

2. **Klinischer Bezug:** Expand clinical context in Kap1-2 (cell biology, tissues) to show medical relevance (e.g., cancer = uncontrolled cell division)

3. **Difficulty Distribution:** Rebalance some UKs to ~30% leicht / 50% mittel / 20% schwer (currently skewed toward mittel)

---

## Validation Summary

**Before fixes:**
- Blockers: {N}
- Warnings: {N}

**After fixes:**
- Blockers: 0 ✅
- Warnings: {N} (acceptable)

**Confidence Level:** HIGH — content is migration-ready

---

## Next Steps

1. Run Supabase migration script
2. Verify foreign key constraints (chapter_id → bms_chapters)
3. Spot-check 5 random UKs in production database
4. Monitor user feedback for content accuracy issues

---

## Appendix: Counts by Chapter

| Chapter | UKs | Questions | Avg MerksatzBox/UK | Issues Fixed |
|---------|-----|-----------|-------------------|--------------|
| Kap1 | 19 | {N} | {X.X} | {N} |
| Kap2 | 4 | {N} | {X.X} | {N} |
| Kap7 | 6 | {N} | {X.X} | {N} |
| Kap8 | 2 | {N} | {X.X} | {N} |
| ... | ... | ... | ... | ... |

**TOTAL** | 68 | {N} | {X.X} | {N} |
```

Populate all {N} placeholders with actual data from validation script + manual review.
  </action>
  <verify>
```bash
cat .planning/PRE_MIGRATION_REVIEW.md
```
Report exists, has all sections, shows actual counts (not placeholders).

Check:
- Executive summary shows clear status (✅ or ⚠️)
- Problems table has >0 entries if issues found
- Top 3 recommendations are actionable
- Counts by chapter table complete
  </verify>
  <done>
PRE_MIGRATION_REVIEW.md exists with complete data (no {N} placeholders), clear status, documented fixes, and actionable recommendations.
  </done>
</task>

</tasks>

<verification>
1. All 68 .md files validated for content quality (scientific accuracy, MerksatzBox coverage, MedAT level)
2. All 68 .json files validated for MedAT format (5 options A-E, correct answer, explanation, difficulty)
3. All blocker errors fixed (questions.json format 100% compliant)
4. PRE_MIGRATION_REVIEW.md report exists with status, counts, fixes, and recommendations
5. Validation script confirms 0 blockers, <5 warnings
6. Commit created: "fix: pre-migration content review and corrections"
</verification>

<success_criteria>
- PRE_MIGRATION_REVIEW.md shows "STATUS: READY FOR MIGRATION" ✅
- All 68 questions.json files have exactly 5 options (A-E) per question
- All questions have correct answer, explanation, and difficulty
- All UKs have ≥4 MerksatzBox (or documented reason if <4)
- No duplicate question IDs within any UK
- Scientific facts verified as correct
- Changes committed to git with descriptive commit message
</success_criteria>

<output>
After completion, create `.planning/quick/1-pre-migration-content-review-and-quality/1-SUMMARY.md`
</output>
