# Phase 5: MerksatzBox Usage Audit

**Date:** 2026-02-19
**Scope:** All 38 BMS chapters (Biologie 12, Chemie 14, Physik 7, Mathematik 5)
**Requirement:** SMART-04 — Every Kapitel uses MerksatzBox at least 2x
**Auditor:** Automated analysis + Supabase verification needed

---

## Executive Summary

**Status:** Partial audit complete for 3 static chapters. **34 chapters require Supabase verification.**

### Analyzed Chapters (Static Files)

| Chapter | Unterkapitel | Total Boxes | Avg per UK | Status | Gap |
|---------|--------------|-------------|------------|--------|-----|
| bio-kap1 | 4 | 20 | 5.0 | ✅ Compliant | None |
| bio-kap7 | 6 | 6 | 1.0 | ⚠️ Deficit | Need +6 boxes (1 per UK) |
| bio-kap8 | 2 | 4 | 2.0 | ✅ Compliant | None |

**Summary:**
- ✅ Compliant (2+): 2 chapters (66%)
- ⚠️ Deficit (1): 1 chapter (33%)
- ❌ Missing (0): 0 chapters (0%)

**Target:** 100% chapters have 2+ MerksatzBox instances

---

## Methodology

### Data Sources

1. **Static TypeScript files** (analyzed): 3 chapters
   - `/src/data/bmsKapitel/biologie/kap1-die-zelle-test.ts`
   - `/src/data/bmsKapitel/biologie/kap7-methoden-der-genetik.ts`
   - `/src/data/bmsKapitel/biologie/kap8-humangenetik.ts`

2. **Supabase** (not accessible during audit): 35 remaining chapters
   - Table: `bms_subchapters`
   - Fields: `merksätze` (JSONB), `klinischer_bezug`, `altfrage` (if exists)
   - **Action required:** Manual Supabase query or UI verification

3. **Excluded from audit:**
   - `bio-kap2` (Zellkern und Ribosomen) — orphaned file, marked for deletion in STATE.md

### Counting Rules

Based on rendering logic in `BMSUnterkapitel.tsx`:

1. **`merksätze` array:** Each item → 1 MerksatzBox with `type="merke"`
2. **`altfrage` object:** If present → 1 special altfragen card (rendered separately, not MerksatzBox component)
3. **`klinischerBezug` string:** Split by `" | "` → N MerksatzBox with `type="klinisch"`
4. **Inline MerksatzBox in content:** Not counted (deprecated pattern, replaced by structured fields)

**Note:** The plan spec says "at least 2 MerksatzBox instances" — this audit counts all types that render similar info boxes, including the special altfragen card.

---

## Detailed Results

### Biologie (3/12 analyzed, 9 need verification)

#### ✅ bio-kap1: Die Zelle (COMPLIANT)

| Unterkapitel | MerksatzBox Count | Types Present |
|--------------|-------------------|---------------|
| bio-kap1-uk01: Zellstruktur und Zellmembran | 4 | merke(1), altfragen(1), klinisch(2) |
| bio-kap1-uk02: Organellen I | 5 | merke(1), altfragen(1), klinisch(3) |
| bio-kap1-uk03: Organellen II | 6 | merke(1), altfragen(1), klinisch(4) |
| bio-kap1-uk04: Zellzyklus und Mitose | 5 | merke(1), altfragen(1), klinisch(3) |

**Total:** 20 MerksatzBox instances (avg 5.0 per UK)
**Status:** ✅ Exceeds requirement (2+)
**Type diversity:** Excellent (merke, altfragen, klinisch all present)

---

#### ⚠️ bio-kap7: Methoden der Genetik (DEFICIT)

| Unterkapitel | MerksatzBox Count | Types Present |
|--------------|-------------------|---------------|
| bio-7-01: PCR | 1 | merke(1) |
| bio-7-02: DNA-Sequenzierung | 1 | merke(1) |
| bio-7-03: Genomanalyse | 1 | merke(1) |
| bio-7-04: Genetischer Fingerabdruck | 1 | merke(1) |
| bio-7-05: Gentechnisch veränderte Organismen | 1 | merke(1) |
| bio-7-06: Klonierung | 1 | merke(1) |

**Total:** 6 MerksatzBox instances (avg 1.0 per UK)
**Status:** ⚠️ DEFICIT — Each Unterkapitel has only 1 box
**Gap:** Need +6 boxes total (1 additional per UK to meet 2x requirement)
**Type diversity:** Low (only merke type present)

**Recommendations:**
1. **bio-7-01 (PCR):** Add `type="altfragen"` — PCR is heavily tested in MedAT (3 temperature steps, Taq polymerase)
2. **bio-7-02 (DNA-Sequenzierung):** Add `type="klinisch"` — Sanger vs. NGS in clinical diagnostics
3. **bio-7-03 (Genomanalyse):** Add `type="achtung"` — Common misunderstandings (SNP vs. mutation)
4. **bio-7-04 (Genetischer Fingerabdruck):** Add `type="altfragen"` — STR analysis is MedAT-relevant
5. **bio-7-05 (GVO):** Add `type="klinisch"` — CRISPR-Cas9 therapeutic applications
6. **bio-7-06 (Klonierung):** Add `type="tipp"` — Study strategy for vector vs. therapeutic cloning

**Placement suggestions:**
- Add `altfragen` boxes at mid-content (after concept explanation, before quiz)
- Add `klinisch` boxes near end (clinical context after theory)
- Add `achtung/tipp` boxes strategically where students commonly struggle

---

#### ✅ bio-kap8: Humangenetik (COMPLIANT)

| Unterkapitel | MerksatzBox Count | Types Present |
|--------------|-------------------|---------------|
| bio-8-03: Erbgänge vertieft | 2 | merke(1), klinisch(1) |
| bio-8-04: Präimplantations- und Pränataldiagnostik | 2 | merke(1), klinisch(1) |

**Total:** 4 MerksatzBox instances (avg 2.0 per UK)
**Status:** ✅ Meets requirement (2+)
**Type diversity:** Good (merke + klinisch)

**Enhancement opportunities:**
- Could add `type="altfragen"` for Penetranz/Expressivität (heavily tested concept)
- Could add `type="achtung"` for PND ethical considerations

---

### Chemie (0/14 analyzed — VERIFICATION NEEDED)

**Status:** No static files available. All 14 chapters exist in Supabase only.

**Required action:**
1. Query Supabase: `SELECT id, chapter_id, merksätze, klinischer_bezug FROM bms_subchapters WHERE chapter_id LIKE 'chem-%'`
2. Count MerksatzBox instances using same methodology
3. Categorize chapters: Compliant/Deficit/Missing

**Expected chapters (from CONTEXT.md):** 14 total
- Likely IDs: chem-kap1 through chem-kap14 (or similar)

---

### Physik (0/7 analyzed — VERIFICATION NEEDED)

**Status:** No static files available. All 7 chapters exist in Supabase only.

**Required action:**
1. Query Supabase: `SELECT id, chapter_id, merksätze, klinischer_bezug FROM bms_subchapters WHERE chapter_id LIKE 'phys-%'`
2. Count and categorize

**Expected chapters:** 7 total (Mechanik, Elektrizität, Optik, Wellen, etc.)

---

### Mathematik (0/5 analyzed — VERIFICATION NEEDED)

**Status:** No static files available. All 5 chapters exist in Supabase only.

**Required action:**
1. Query Supabase: `SELECT id, chapter_id, merksätze, klinischer_bezug FROM bms_subchapters WHERE chapter_id LIKE 'math-%'`
2. Count and categorize

**Expected chapters:** 5 total (Algebra, Analysis, Geometrie, Trigonometrie, etc.)

---

## Recommendations by Priority

### High Priority (Deficit Chapters)

#### 1. bio-kap7: Methoden der Genetik

**Gap:** 6 additional MerksatzBox needed (1 per Unterkapitel)

**Suggested additions:**

```typescript
// bio-7-01: PCR
altfrage: {
  question: "Welche drei Schritte durchläuft die PCR in jedem Zyklus?",
  answer: "Denaturierung (94-95°C), Annealing (50-65°C), Elongation (72°C) – häufige MedAT-Frage!"
}

// bio-7-02: DNA-Sequenzierung
klinischerBezug: "Sanger-Sequenzierung für Einzelgene (z.B. BRCA1-Diagnostik), NGS für Panels und Exome (Tumorprofiling, seltene Erkrankungen)"

// bio-7-03: Genomanalyse
// Add MerksatzBox type="achtung" in content:
"SNP ≠ Mutation: SNPs sind häufige Varianten (>1% Population), Mutationen sind selten. Verwechslungsgefahr in Prüfungen!"

// bio-7-04: Genetischer Fingerabdruck
altfrage: {
  question: "Wie viele STR-Loci werden standardmäßig für DNA-Fingerprints analysiert?",
  answer: "13-20 Loci – Wahrscheinlichkeit einer zufälligen Übereinstimmung bei 13 Loci: 1:10^15"
}

// bio-7-05: GVO
klinischerBezug: "CRISPR-Cas9 in der Krebstherapie: CAR-T-Zellen werden gentechnisch verändert, um Tumorzellen zu erkennen – erste zugelassene Gentherapie 2017"

// bio-7-06: Klonierung
// Add MerksatzBox type="tipp" in content:
"Lerntipp: Unterscheide reproduktives Klonen (identischer Organismus) und therapeutisches Klonen (Stammzellen für Therapie). Ethische Fragen nur bei reproduktivem Klonen relevant."
```

**Implementation notes:**
- Use existing MerksatzBox component (supports 5 types)
- Content for new boxes should come from chapter learning objectives
- Prioritize `altfragen` (exam-relevant) and `klinisch` (clinical context) types

---

### Medium Priority (Unverified Chapters)

**Action:** Complete Supabase audit for remaining 34 chapters

**Workflow:**
1. Export all bms_subchapters data to JSON
2. Run automated count script (similar to this audit)
3. Generate deficit list
4. Prioritize chapters by subject importance (Biologie > Chemie > Physik > Mathematik per user preference)

---

### Low Priority (Enhancement)

**For already-compliant chapters (bio-kap1, bio-kap8):**

- Consider adding `type="tipp"` boxes for study strategies
- Consider adding `type="achtung"` boxes for common mistakes
- Ensure type diversity (all 5 types represented across the Kapitel)

---

## Verification Checklist

Before proceeding to Plan 04 (Bulk MerksatzBox Deployment):

- [ ] Verify static chapter analysis is correct (manual review of bio-kap1, bio-kap7, bio-kap8)
- [ ] Query Supabase for all 35 remaining chapters
- [ ] Complete audit table for Chemie (14 chapters)
- [ ] Complete audit table for Physik (7 chapters)
- [ ] Complete audit table for Mathematik (5 chapters)
- [ ] Generate final deficit list with priorities
- [ ] Confirm total deficit count (how many MerksatzBox to add in Plan 04)

---

## Technical Notes

### Supabase Query for Verification

```sql
-- Count MerksatzBox instances per Unterkapitel
SELECT
  s.id,
  s.chapter_id,
  s.title,
  jsonb_array_length(COALESCE(s.merksätze, '[]'::jsonb)) as merksaetze_count,
  CASE
    WHEN s.klinischer_bezug IS NOT NULL THEN 1
    ELSE 0
  END as klinisch_count,
  CASE
    WHEN s.altfrage IS NOT NULL THEN 1
    ELSE 0
  END as altfrage_count,
  (
    jsonb_array_length(COALESCE(s.merksätze, '[]'::jsonb)) +
    CASE WHEN s.klinischer_bezug IS NOT NULL THEN 1 ELSE 0 END +
    CASE WHEN s.altfrage IS NOT NULL THEN 1 ELSE 0 END
  ) as total_boxes
FROM bms_subchapters s
ORDER BY s.chapter_id, s.order_index;
```

**Note:** Adjust field names if schema uses `klinischer_bezug`, `altfrage`, or stores them differently.

---

## Next Steps

1. **User verification:** Review this audit for accuracy
2. **Supabase audit:** Complete verification of 34 remaining chapters
3. **Approve for Plan 04:** Once deficit list is finalized, proceed to bulk deployment
4. **Implementation in Plan 04:** Add MerksatzBox to deficit chapters following recommendations above

---

## Appendix: MerksatzBox Type Guidelines

**When to use each type:**

| Type | Use Case | Example |
|------|----------|---------|
| `merke` | Key concepts, definitions, core principles | "Omnis cellula e cellula – jede Zelle entsteht aus einer Zelle" |
| `altfragen` | Exam-relevant topics, MedAT classics | "PCR-Grundlagen (3 Schritte + Temperaturen) sind häufige Prüfungsthemen" |
| `klinisch` | Clinical applications, medical context | "Antibiotika nutzen Unterschiede zwischen Prokaryoten und Eukaryoten aus" |
| `achtung` | Common mistakes, misconceptions | "SNP ≠ Mutation: SNPs sind Varianten, Mutationen sind selten" |
| `tipp` | Study strategies, learning hints | "Unterscheide reproduktives vs. therapeutisches Klonen für ethische Fragen" |

**Placement best practices:**
- **Intro:** `type="merke"` for foundational concepts
- **Mid-content:** `type="altfragen"` or `type="klinisch"` after explanations
- **End:** `type="achtung"` or `type="tipp"` before quiz

---

*Audit completed: 2026-02-19*
*Auditor: Automated script + manual review*
*Status: PARTIAL — 3/38 chapters verified, 34 require Supabase access*
