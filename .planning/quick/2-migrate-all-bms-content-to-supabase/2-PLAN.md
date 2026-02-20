---
phase: quick-2
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - supabase/migrations/[timestamp]_migrate_bms_content.sql
  - .planning/MIGRATION_COMPLETE.md
autonomous: true
requirements: []

must_haves:
  truths:
    - "All 68 Biologie Unterkapitel are inserted into bms_subchapters table"
    - "Questions JSON arrays are stored correctly in JSONB columns"
    - "Markdown content is preserved exactly as in planning files"
    - "Foreign key constraints are satisfied (all chapter_ids exist)"
    - "Migration can be verified via SQL queries"
  artifacts:
    - path: "supabase/migrations/[timestamp]_migrate_bms_content.sql"
      provides: "SQL migration script with 68 INSERT statements"
      min_lines: 200
    - path: ".planning/MIGRATION_COMPLETE.md"
      provides: "Migration verification report"
      contains: "TOTAL: 68 | 377"
  key_links:
    - from: "bms_subchapters.chapter_id"
      to: "bms_chapters.id"
      via: "foreign key constraint"
      pattern: "bio-kap[0-9]+"
    - from: "bms_subchapters.questions"
      to: "planning JSON files"
      via: "JSONB array storage"
      pattern: "\\[\\{.*correct.*\\}\\]"
---

<objective>
Migrate all 68 validated Biologie Unterkapitel from planning files to Supabase database.

Purpose: Enable database-driven BMS content delivery and prepare for Chemie/Physik/Mathematik migration
Output: Complete Biologie content in Supabase with 377 questions across 10 chapters
</objective>

<execution_context>
@./.claude/get-shit-done/workflows/execute-plan.md
@./.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/STATE.md
@.planning/PRE_MIGRATION_REVIEW.md
@supabase/migrations/001_bms_schema.sql
</context>

<tasks>

<task type="auto">
<name>Task 1: Generate chapter ID mapping and verify foreign keys</name>

<files>
/tmp/chapter_mapping.json
</files>

<action>
Create mapping file from planning files to database IDs:

1. **Extract all UK metadata:**
   - Scan `.planning/Bio_Kap*_UK*.md` files
   - Parse pattern: `Bio_Kap{N}_UK{NN}_{Title}.md`
   - Generate ID: `bio-{N}-{NN}` (lowercase, zero-padded UK number)
   - Extract title from filename (underscore-separated → space-separated)

2. **Build chapter_id reference:**
   - Map each UK to parent chapter: `bio-kap{N}`
   - Chapters: bio-kap1, bio-kap2, bio-kap3, bio-kap4, bio-kap5, bio-kap6, bio-kap8, bio-kap9, bio-kap10, bio-kap11
   - Note gap: bio-kap7 missing (reserved for future Methoden der Genetik content)

3. **Verify foreign keys will be satisfied:**
   - Check which chapter_ids exist in current Supabase bms_chapters table
   - Log any missing chapter_ids that need to be created BEFORE UK migration
   - If chapters missing → output SQL to create them first

4. **Generate order_index:**
   - Use UK number as order_index (01 → 1, 02 → 2, etc.)
   - Ensures UKs display in correct sequence within each chapter

5. **Output structure:**
```json
{
  "chapters_needed": ["bio-kap1", "bio-kap2", ...],
  "uks": [
    {
      "id": "bio-1-01",
      "chapter_id": "bio-kap1",
      "title": "Lebende Systeme",
      "md_file": "Bio_Kap1_UK01_Lebende_Systeme.md",
      "json_file": "Bio_Kap1_UK01_questions.json",
      "order_index": 1
    },
    ...
  ]
}
```

Why verify foreign keys first: Prevents migration failure if parent chapters don't exist. Must create chapters BEFORE subchapters to satisfy FOREIGN KEY constraint.
</action>

<verify>
```bash
cat /tmp/chapter_mapping.json | jq '.uks | length'
# Should output: 68

cat /tmp/chapter_mapping.json | jq '.chapters_needed'
# Should list all unique chapter IDs needed
```
</verify>

<done>
Mapping file contains 68 UK entries with valid chapter_id references. All required chapters identified.
</done>
</task>

<task type="auto">
<name>Task 2: Generate SQL migration script</name>

<files>
supabase/migrations/$(date +%Y%m%d%H%M%S)_migrate_bms_content.sql
</files>

<action>
Create complete SQL migration script with proper escaping and JSONB handling:

1. **Add migration header:**
```sql
-- Migration: Biologie Unterkapitel Content (68 UKs, 377 questions)
-- Generated: [timestamp]
-- Source: .planning/Bio_Kap*_UK* files (validated via PRE_MIGRATION_REVIEW.md)

BEGIN;
```

2. **Create missing chapters if needed:**
Based on Task 1 verification, add INSERT statements for any missing bms_chapters:
```sql
INSERT INTO bms_chapters (id, title, subject, icon, order_index)
VALUES
  ('bio-kap1', 'Zellbiologie', 'biologie', '🧬', 1),
  ('bio-kap2', 'Gewebe', 'biologie', '🔬', 2),
  -- ... etc for all needed chapters
ON CONFLICT (id) DO NOTHING;
```

3. **For each UK in mapping (68 total):**

   a. Read markdown content:
      - Load `.planning/{md_file}`
      - Escape single quotes: `'` → `''` (SQL standard)
      - Store entire markdown as TEXT (no parsing needed)

   b. Read questions JSON:
      - Load `.planning/{json_file}`
      - Validate it's an array: `[{...}, {...}]`
      - Do NOT wrap in `{"questions": [...]}`
      - Store as JSONB (PostgreSQL handles escaping)

   c. Generate INSERT with ON CONFLICT for idempotency:
```sql
INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-1-01',
  'bio-kap1',
  'Lebende Systeme',
  '[escaped markdown content]',
  '[questions JSON array]'::jsonb,
  1
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  questions = EXCLUDED.questions,
  order_index = EXCLUDED.order_index;
```

4. **Add migration footer:**
```sql
COMMIT;

-- Verification queries:
-- SELECT COUNT(*) FROM bms_subchapters;
-- SELECT chapter_id, COUNT(*) FROM bms_subchapters GROUP BY chapter_id ORDER BY chapter_id;
-- SELECT id, title, jsonb_array_length(questions) AS question_count FROM bms_subchapters ORDER BY RANDOM() LIMIT 5;
```

**Critical escaping rules:**
- Markdown content: Single quotes `'` → `''`
- German umlauts/special chars: Keep as-is (UTF-8)
- JSON arrays: Use `::jsonb` cast, PostgreSQL handles escaping
- Do NOT manually escape JSON (causes double-escaping)

**Idempotency:** ON CONFLICT DO UPDATE allows re-running migration safely (updates existing rows instead of failing).
</action>

<verify>
```bash
# Check migration file was created
ls -lh supabase/migrations/*_migrate_bms_content.sql

# Count INSERT statements (should be 68)
grep -c "INSERT INTO bms_subchapters" supabase/migrations/*_migrate_bms_content.sql

# Validate SQL syntax (no trailing commas, balanced parentheses)
grep -E "(,\s*\)|;\s*,)" supabase/migrations/*_migrate_bms_content.sql
# Should return nothing (no syntax errors)
```
</verify>

<done>
SQL migration file exists with 68 INSERT statements, proper escaping, and verification queries. File size >200KB (indicates full content included).
</done>
</task>

<task type="auto">
<name>Task 3: Execute migration in Supabase</name>

<files>
None (database modification)
</files>

<action>
Run the generated migration script in Supabase:

**Option A — Supabase CLI (preferred):**
```bash
# Check if Supabase CLI is available
which supabase

# If available, link project and run migration
cd /Users/Luki/medmaster
supabase db push
```

**Option B — SQL Editor (if CLI unavailable):**
1. Open Supabase Dashboard → SQL Editor
2. Copy entire migration file content
3. Paste into new query
4. Click "Run" (RLS policies allow admin operations)
5. Verify "Success" message

**Migration safety:**
- ON CONFLICT ensures idempotency (can re-run if needed)
- TRANSACTION wraps all INSERTs (all-or-nothing)
- Foreign keys enforced (will fail early if chapters missing)

**Expected output:**
```
INSERT 0 68
COMMIT
```

If foreign key error occurs:
- Check which chapter_id is missing
- Run chapter INSERT first
- Re-run UK migration

Why execute via CLI/Dashboard (not programmatically): Supabase uses RLS policies requiring authenticated admin user. CLI handles auth automatically.
</action>

<verify>
```bash
# Option 1: Supabase CLI query
supabase db query "SELECT COUNT(*) as total FROM bms_subchapters;"

# Option 2: Dashboard SQL Editor
# SELECT COUNT(*) as total FROM bms_subchapters;
# Expected: 68

# Verify questions are JSONB arrays (not wrapped objects)
# SELECT id, jsonb_typeof(questions) FROM bms_subchapters LIMIT 3;
# Expected: "array" for all rows
```
</verify>

<done>
68 rows inserted into bms_subchapters. COUNT query returns 68. Questions stored as JSONB arrays.
</done>
</task>

<task type="auto">
<name>Task 4: Verify migration and create completion report</name>

<files>
.planning/MIGRATION_COMPLETE.md
</files>

<action>
Generate comprehensive verification report:

1. **Run verification queries:**

```sql
-- Total count
SELECT COUNT(*) as total_uks FROM bms_subchapters;

-- Count by chapter
SELECT chapter_id, COUNT(*) as uk_count
FROM bms_subchapters
GROUP BY chapter_id
ORDER BY chapter_id;

-- Question counts
SELECT
  id,
  title,
  jsonb_array_length(questions) as question_count
FROM bms_subchapters
ORDER BY id;

-- Spot-check 5 random UKs
SELECT
  id,
  title,
  LEFT(content, 100) as content_preview,
  jsonb_array_length(questions) as question_count
FROM bms_subchapters
ORDER BY RANDOM()
LIMIT 5;

-- Verify no NULL content
SELECT COUNT(*) as nulls FROM bms_subchapters WHERE content IS NULL OR questions IS NULL;
```

2. **Compare against PRE_MIGRATION_REVIEW.md:**
   - Expected: 68 UKs, 377 questions
   - Actual: [from queries above]
   - Chapters: [verify all 10 chapters present]

3. **Create MIGRATION_COMPLETE.md:**

```markdown
# BMS Content Migration — Biologie Complete

**Migration Date:** [timestamp]
**Source:** .planning/Bio_Kap*_UK* files (68 pairs)
**Migrated by:** Claude Sonnet 4.5

## Summary

✅ **STATUS: SUCCESSFUL**

- **Total UKs Inserted:** [actual count]
- **Total Questions:** [actual count]
- **Chapters Covered:** [list all chapter_ids]
- **Migration File:** supabase/migrations/[timestamp]_migrate_bms_content.sql

---

## Verification Results

### 1. Total Count
[paste COUNT query result]

### 2. Count by Chapter
[paste GROUP BY chapter_id result]

| Chapter ID | UKs | Expected | Status |
|------------|-----|----------|--------|
| bio-kap1 | [actual] | 19 | [✅/❌] |
| bio-kap2 | [actual] | 4 | [✅/❌] |
| bio-kap3 | [actual] | 12 | [✅/❌] |
| bio-kap4 | [actual] | 4 | [✅/❌] |
| bio-kap5 | [actual] | 7 | [✅/❌] |
| bio-kap6 | [actual] | 4 | [✅/❌] |
| bio-kap8 | [actual] | 4 | [✅/❌] |
| bio-kap9 | [actual] | 6 | [✅/❌] |
| bio-kap10 | [actual] | 5 | [✅/❌] |
| bio-kap11 | [actual] | 3 | [✅/❌] |

### 3. Question Distribution
[paste question count query result]

Total questions: [sum] (Expected: 377)

### 4. Spot-Check Results
[paste RANDOM LIMIT 5 result]

All spot-checked UKs have:
- [✅/❌] Non-null content
- [✅/❌] Valid JSONB questions array
- [✅/❌] Reasonable content length (>1000 chars)

### 5. Data Integrity
[paste NULL check result]

NULL values found: [count] (Expected: 0)

---

## Issues / Warnings

[List any discrepancies, missing chapters, or warnings]

- [ ] None found ✅
- [ ] [Describe issue if any]

---

## Next Steps

1. ✅ Biologie migration complete (68 UKs)
2. **TODO:** Migrate Chemie chapters (when planning files ready)
3. **TODO:** Migrate Physik chapters (when planning files ready)
4. **TODO:** Migrate Mathematik chapters (when planning files ready)
5. **TODO:** Update frontend to fetch from Supabase instead of TypeScript files

---

**Verified by:** Claude Sonnet 4.5
**Date:** [timestamp]
```

4. **Flag any discrepancies:**
   - If counts don't match PRE_MIGRATION_REVIEW.md → investigate
   - If chapters missing → note in report
   - If NULL content → list affected UKs
</action>

<verify>
```bash
cat .planning/MIGRATION_COMPLETE.md | grep "STATUS:"
# Should show: ✅ STATUS: SUCCESSFUL

cat .planning/MIGRATION_COMPLETE.md | grep "TOTAL:"
# Should match: 68 UKs, 377 questions
```
</verify>

<done>
MIGRATION_COMPLETE.md exists with verification results. All 68 UKs confirmed in database. No NULL values. Counts match expectations from PRE_MIGRATION_REVIEW.md.
</done>
</task>

</tasks>

<verification>
Final verification steps:

1. **Database state:**
   ```sql
   SELECT COUNT(*) FROM bms_subchapters; -- Should be 68
   SELECT SUM(jsonb_array_length(questions)) FROM bms_subchapters; -- Should be 377
   ```

2. **Files created:**
   - Migration SQL file exists in supabase/migrations/
   - MIGRATION_COMPLETE.md exists in .planning/
   - Both files committed to git

3. **Data quality:**
   - All content is non-NULL
   - All questions are valid JSONB arrays (not wrapped objects)
   - All chapter_id foreign keys satisfied
   - order_index matches UK sequence numbers

4. **Idempotency test:**
   - Re-running migration should succeed (ON CONFLICT DO UPDATE)
   - No duplicate rows created
</verification>

<success_criteria>
Migration complete when:

- [x] 68 Biologie Unterkapitel inserted into bms_subchapters table
- [x] 377 questions stored as JSONB arrays across all UKs
- [x] All markdown content preserved exactly from planning files
- [x] All foreign key constraints satisfied (chapter_ids exist)
- [x] MIGRATION_COMPLETE.md report shows ✅ STATUS: SUCCESSFUL
- [x] No NULL values in content or questions columns
- [x] Migration is idempotent (can re-run safely)
- [x] Counts match PRE_MIGRATION_REVIEW.md expectations

Database-driven BMS content delivery is now possible. Chemie/Physik/Mathematik can follow same migration pattern.
</success_criteria>

<output>
After completion, create `.planning/quick/2-migrate-all-bms-content-to-supabase/2-SUMMARY.md` documenting:
- Migration file location
- Verification query results
- Any issues encountered
- Next steps for Chemie/Physik/Mathematik migration
</output>
