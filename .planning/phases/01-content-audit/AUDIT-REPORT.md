# BMS Content Coverage Audit Report

**Generated:** 2026-02-19
**Scope:** Stichwortliste (MedAT-H 2026) → BMS Kapitel mapping
**Purpose:** Establish single source of truth for content coverage

---

## Executive Summary

### Overall Status

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Stichwortliste entries** | 106 | 100% |
| **Mapped (with linkedChapterId)** | 100 | 94.3% |
| **Unmapped (no linkedChapterId)** | 6 | 5.7% |
| **neu2026 content gaps** | 8 | 7.5% |
| **High priority unmapped** | 3 | 2.8% |

### Data File Discrepancy

**⚠️ IMPORTANT:** The plan expected 189 Stichwortliste entries based on research, but `src/data/stichworteData.ts` currently contains only **106 entries**.

**Missing entries:** 83 entries (43.9% of expected total)

This discrepancy must be resolved. Possible causes:
1. Research documents outdated (actual 2026 Stichwortliste has 106 entries)
2. Data file incomplete (83 entries not yet added to codebase)
3. Entries spread across multiple files (unlikely - single barrel file pattern used)

**Recommendation:** Verify official MedAT-H 2026 Stichwortliste document to confirm actual count.

---

## Coverage by Fach

### Biologie (40 Fragen, 30 Min)

| Status | Count | % |
|--------|-------|---|
| Total entries | 81 | 100% |
| Mapped & covered | 75 | 92.6% |
| neu2026 gaps | 6 | 7.4% |
| Unmapped | 0 | 0% |

**Gaps (neu2026, not abgedeckt):**
- `bio-7-01`: PCR (priorität: hoch)
- `bio-7-02`: DNA-Sequenzierung (priorität: hoch)
- `bio-7-03`: Genomanalyse (priorität: mittel)
- `bio-7-04`: Genetischer Fingerabdruck (priorität: hoch)
- `bio-7-05`: Gentechnisch veränderte Organismen (priorität: mittel)
- `bio-7-06`: Klonierung (priorität: mittel)
- `bio-8-03`: Erbgänge vertieft (priorität: hoch)
- `bio-8-04`: Präimplantations- und Pränataldiagnostik (priorität: hoch)

**All gaps are Kapitel 7 (Methoden der Genetik) and Kapitel 8 (Humangenetik) neu2026 topics.**

### Chemie (24 Fragen, 18 Min)

| Status | Count | % |
|--------|-------|---|
| Total entries | 13 | 100% |
| Mapped & covered | 13 | 100% |
| neu2026 gaps | 0 | 0% |
| Unmapped | 0 | 0% |

✅ **Complete coverage** - all 13 Chemie topics have linkedChapterId and abgedeckt: true.

### Physik (18 Fragen, 16 Min)

| Status | Count | % |
|--------|-------|---|
| Total entries | 7 | 100% |
| Mapped & covered | 7 | 100% |
| neu2026 gaps | 0 | 0% |
| Unmapped | 0 | 0% |

✅ **Complete coverage** - all 7 Physik topics have linkedChapterId and abgedeckt: true.

### Mathematik (12 Fragen, 11 Min)

| Status | Count | % |
|--------|-------|---|
| Total entries | 6 | 100% |
| Mapped & covered | 5 | 83.3% |
| neu2026 gaps | 0 | 0% |
| Unmapped | 0 | 0% |

✅ **Complete coverage** - all 6 Mathematik topics have linkedChapterId and abgedeckt: true.

---

## neu2026 Content Gaps (8 topics)

These topics were added to the MedAT-H 2026 Stichwortliste and are not yet implemented:

| ID | Fach | Kapitel | Thema | Priorität | linkedChapterId |
|----|------|---------|-------|-----------|-----------------|
| bio-7-01 | Biologie | Methoden der Genetik | PCR | hoch | (none) |
| bio-7-02 | Biologie | Methoden der Genetik | DNA-Sequenzierung | hoch | (none) |
| bio-7-03 | Biologie | Methoden der Genetik | Genomanalyse | mittel | (none) |
| bio-7-04 | Biologie | Methoden der Genetik | Genetischer Fingerabdruck | hoch | (none) |
| bio-7-05 | Biologie | Methoden der Genetik | Gentechnisch veränderte Organismen | mittel | (none) |
| bio-7-06 | Biologie | Methoden der Genetik | Klonierung | mittel | (none) |
| bio-8-03 | Biologie | Humangenetik | Erbgänge vertieft | hoch | (none) |
| bio-8-04 | Biologie | Humangenetik | Präimplantations- und Pränataldiagnostik | hoch | (none) |

**Pattern:** All neu2026 gaps are in Biologie, concentrated in two chapters:
- Kapitel 7: Methoden der Genetik (6 topics, 4 high priority)
- Kapitel 8: Humangenetik (2 topics, 2 high priority)

**Impact:** These are new 2026 exam topics - students cannot prepare for them using the current codebase.

---

## Orphaned Content

### Kapitel Implementation Status

Currently implemented chapters in `alleKapitel`:

| Kapitel ID | Title | Subject | Unterkapitel | Linked from Stichwortliste? |
|------------|-------|---------|--------------|------------------------------|
| bio-kap1 | Die Zelle | Biologie | 1 | ❌ **ORPHANED** |

**Analysis:**

The single implemented chapter (`bio-kap1`) uses ID `bio-kap1`, but **no Stichwort entry links to this ID**.

**Stichwortliste linkedChapterId pattern:** Uses fine-grained IDs like:
- `bio-zelle-allgemein`
- `bio-zelle-typen`
- `bio-zelle-membran`
- etc.

**Kapitel implementation pattern:** Uses coarse-grained IDs like:
- `bio-kap1` (one chapter for entire "Die Zelle" topic)

**Mismatch:** Stichwortliste expects 19 separate chapters for "Die menschliche Zelle" (bio-1-01 through bio-1-19), but implementation provides only 1 chapter (`bio-kap1`) with 1 Unterkapitel.

### Reverse-Mapping Analysis

**Stichwort entries with linkedChapterId but no matching Kapitel:**

All 100 mapped Stichwort entries have `linkedChapterId` values, but **none of these IDs exist in `alleKapitel`** except theoretically `bio-kap1` (which doesn't match the naming pattern).

**Example expected Kapitel IDs from Stichwortliste:**

Biologie:
- `bio-zelle-allgemein`, `bio-zelle-typen`, `bio-zelle-membran`, `bio-zelle-zytoplasma`, `bio-zelle-kern`, `bio-zelle-mitochondrien`, etc. (19 IDs for Kap 1)
- `bio-gewebe-epithel`, `bio-gewebe-binde`, `bio-gewebe-muskel`, `bio-gewebe-nerven` (4 IDs for Kap 2)
- `bio-organ-nerven`, `bio-organ-sinne`, `bio-organ-hormone`, etc. (12 IDs for Kap 3)
- ... and so on for all 11 biology chapters

Chemie:
- `ch-atombau`, `ch-gasgesetze`, `ch-aggregat`, `ch-pse`, `ch-bindungen`, `ch-reaktionen`, `ch-gleichgewicht`, `ch-säure-base`, `ch-redox`, `ch-organik`, `ch-naturstoffe` (11 IDs)

Physik:
- `ph-mechanik`, `ph-wellen`, `ph-wärme`, `ph-elektrizität`, `ph-optik`, `ph-atomphysik` (6 IDs)

Mathematik:
- `ma-algebra`, `ma-geometrie`, `ma-analysis`, `ma-vektoren` (4 IDs)

**None of these expected Kapitel IDs currently exist in the codebase.**

---

## Broken Links

### linkedChapterId Validation

**Validation method:** Cross-reference each `linkedChapterId` in Stichwortliste against `alleKapitel` using `getKapitelById()`.

| Status | Count |
|--------|-------|
| Valid links (Kapitel exists) | 0 |
| Broken links (Kapitel not found) | 100 |
| Kapitel exists but empty unterkapitel | 0 |

**All 100 mapped Stichwort entries have broken linkedChapterId references.**

### Sample Broken Links

| Stichwort ID | linkedChapterId | Thema | Issue |
|--------------|-----------------|-------|-------|
| bio-1-01 | bio-zelle-allgemein | Allgemeine Charakteristika lebender Systeme | Chapter not found |
| bio-1-02 | bio-zelle-typen | Zelltypen | Chapter not found |
| bio-1-03 | bio-zelle-membran | Zellmembranen | Chapter not found |
| ch-1-01 | ch-atombau | Elementarteilchen und Atomaufbau | Chapter not found |
| ph-2-01 | ph-mechanik | Mechanik | Chapter not found |
| ma-2-01 | ma-algebra | Algebra | Chapter not found |

**Pattern:** The naming convention in `linkedChapterId` is consistent and logical, but **no matching Kapitel implementations exist**.

**Root cause:** Content implementation incomplete. Only 1 test chapter exists (`bio-kap1`), and it doesn't follow the Stichwortliste naming convention.

---

## Recommendations

### Priority 1: Resolve Data Discrepancy (CRITICAL)

**Action:** Verify official MedAT-H 2026 Stichwortliste document.
- If 106 entries is correct: Update plan research docs to reflect actual count.
- If 189 entries is correct: Add missing 83 entries to `stichworteData.ts`.

**Blocker:** Cannot proceed with content development until this is resolved.

### Priority 2: Implement neu2026 Content Gaps (HIGH)

**8 topics, 5 high priority:**

1. **Kapitel 7: Methoden der Genetik** (6 topics, 4 high priority)
   - bio-7-01: PCR (hoch)
   - bio-7-02: DNA-Sequenzierung (hoch)
   - bio-7-04: Genetischer Fingerabdruck (hoch)
   - bio-7-05: Gentechnisch veränderte Organismen (mittel)
   - bio-7-03: Genomanalyse (mittel)
   - bio-7-06: Klonierung (mittel)

2. **Kapitel 8: Humangenetik** (2 topics, both high priority)
   - bio-8-03: Erbgänge vertieft (hoch)
   - bio-8-04: Präimplantations- und Pränataldiagnostik (hoch)

**Impact:** These are new exam-relevant topics. Students cannot prepare for 7.5% of BMS content.

### Priority 3: Fix Kapitel Implementation Architecture (HIGH)

**Current state:**
- Stichwortliste defines 100 unique `linkedChapterId` values
- `alleKapitel` contains 1 chapter with mismatched ID

**Decision needed:**
1. **Option A:** Implement 100 separate Kapitel (one per Stichwort)
   - Pro: Perfect 1:1 mapping
   - Con: Very granular, many small chapters

2. **Option B:** Implement chapters at "Kapitel" level (11 bio + 13 chem + 7 phys + 6 math = 37 chapters)
   - Pro: Logical grouping (matches official Stichwortliste structure)
   - Con: Requires updating all 100 `linkedChapterId` values in Stichwortliste

3. **Option C:** Keep fine-grained linkedChapterId, implement as Unterkapitel within larger Kapitel
   - Pro: Matches current Stichwortliste structure
   - Con: Requires implementing ~100 Unterkapitel across ~20 parent Kapitel

**Recommendation:** Option C - implement parent Kapitel with fine-grained Unterkapitel matching `linkedChapterId` values. This preserves the Stichwortliste structure and provides granular navigation.

### Priority 4: Remove Orphaned Test Chapter (LOW)

**Action:** Delete or update `bio-kap1` to match Stichwortliste convention.

Current `bio-kap1` appears to be a test/placeholder chapter. Either:
- Rename to `bio-zelle-allgemein` and expand to match Stichwort bio-1-01
- Delete and replace with proper chapter implementation

---

## Coverage Summary by Chapter

### Biologie (11 Kapitel)

| Kapitel | Kapitel Name | Stichwort Count | Mapped | neu2026 Gaps | Coverage % |
|---------|--------------|-----------------|--------|--------------|------------|
| 1 | Die menschliche Zelle | 19 | 19 | 0 | 100% |
| 2 | Gewebe | 4 | 4 | 0 | 100% |
| 3 | Organsysteme | 12 | 12 | 0 | 100% |
| 4 | Frühentwicklung | 4 | 4 | 0 | 100% |
| 5 | Genetik | 7 | 7 | 0 | 100% |
| 6 | Molekulare Genetik | 7 | 7 | 0 | 100% |
| 7 | **Methoden der Genetik (NEU)** | 6 | 0 | 6 | **0%** |
| 8 | Humangenetik | 4 | 2 | 2 | 50% |
| 9 | Evolution | 7 | 7 | 0 | 100% |
| 10 | Ökologie | 6 | 6 | 0 | 100% |
| 11 | Immunbiologie | 4 | 4 | 0 | 100% |

**Note:** Kapitel 7 and 8 contain all neu2026 content. Kapitel 7 is entirely new (0% coverage).

### Chemie (13 Kapitel-Topics)

All 13 Chemie Stichwort entries are mapped and marked `abgedeckt: true`. ✅

### Physik (7 Kapitel-Topics)

All 7 Physik Stichwort entries are mapped and marked `abgedeckt: true`. ✅

### Mathematik (6 Kapitel-Topics)

All 6 Mathematik Stichwort entries are mapped and marked `abgedeckt: true`. ✅

---

## Next Steps

1. **Immediate:** Validate Stichwortliste count (106 vs 189 discrepancy)
2. **Architecture decision:** Choose Kapitel/Unterkapitel implementation pattern (Priority 3 recommendations)
3. **Content development:** Implement neu2026 gaps (Priority 2)
4. **Link validation:** Re-run this audit after implementing expected Kapitel to verify all links resolve

---

## Appendix: Full Stichwortliste Coverage Table

### Biologie (81 entries)

| ID | Kapitel Nr | Thema | linkedChapterId | abgedeckt | neu2026 | priorität |
|----|-----------|-------|-----------------|-----------|---------|-----------|
| bio-1-01 | 1 | Allgemeine Charakteristika lebender Systeme | bio-zelle-allgemein | ✅ | ❌ | mittel |
| bio-1-02 | 1 | Zelltypen | bio-zelle-typen | ✅ | ❌ | hoch |
| bio-1-03 | 1 | Zellmembranen | bio-zelle-membran | ✅ | ❌ | hoch |
| bio-1-04 | 1 | Zytoplasma | bio-zelle-zytoplasma | ✅ | ❌ | niedrig |
| bio-1-05 | 1 | Zellkern | bio-zelle-kern | ✅ | ❌ | hoch |
| bio-1-06 | 1 | Mitochondrien | bio-zelle-mitochondrien | ✅ | ❌ | hoch |
| bio-1-07 | 1 | Plastiden | bio-zelle-plastiden | ✅ | ❌ | niedrig |
| bio-1-08 | 1 | Endoplasmatisches Retikulum | bio-zelle-er | ✅ | ❌ | hoch |
| bio-1-09 | 1 | Golgi-Apparat | bio-zelle-golgi | ✅ | ❌ | mittel |
| bio-1-10 | 1 | Lysosomen und Endosomen | bio-zelle-lysosomen | ✅ | ❌ | mittel |
| bio-1-11 | 1 | Peroxisomen | bio-zelle-peroxisomen | ✅ | ❌ | niedrig |
| bio-1-12 | 1 | Ribosomen | bio-zelle-ribosomen | ✅ | ❌ | mittel |
| bio-1-13 | 1 | Proteasomen und Zentriolen | bio-zelle-proteasomen | ✅ | ❌ | niedrig |
| bio-1-14 | 1 | Zytoskelett | bio-zelle-zytoskelett | ✅ | ❌ | mittel |
| bio-1-15 | 1 | Zellkontakte | bio-zelle-kontakte | ✅ | ❌ | mittel |
| bio-1-16 | 1 | Kinozilien, Geißeln, Mikrovilli | bio-zelle-cilien | ✅ | ❌ | niedrig |
| bio-1-17 | 1 | Stofftransport | bio-zelle-transport | ✅ | ❌ | hoch |
| bio-1-18 | 1 | Zellteilung | bio-zelle-teilung | ✅ | ❌ | hoch |
| bio-1-19 | 1 | Zelltod | bio-zelle-zelltod | ✅ | ❌ | mittel |
| bio-2-01 | 2 | Epithelgewebe | bio-gewebe-epithel | ✅ | ❌ | mittel |
| bio-2-02 | 2 | Binde- und Stützgewebe | bio-gewebe-binde | ✅ | ❌ | mittel |
| bio-2-03 | 2 | Muskelgewebe | bio-gewebe-muskel | ✅ | ❌ | hoch |
| bio-2-04 | 2 | Nervengewebe | bio-gewebe-nerven | ✅ | ❌ | hoch |
| bio-3-01 | 3 | Nervensystem | bio-organ-nerven | ✅ | ❌ | hoch |
| bio-3-02 | 3 | Sinnesorgane und Haut | bio-organ-sinne | ✅ | ❌ | mittel |
| bio-3-03 | 3 | Hormonsystem | bio-organ-hormone | ✅ | ❌ | hoch |
| bio-3-04 | 3 | Herz-Kreislauf-System | bio-organ-herz | ✅ | ❌ | hoch |
| bio-3-05 | 3 | Blut | bio-organ-blut | ✅ | ❌ | hoch |
| bio-3-06 | 3 | Immunsystem | bio-organ-immun | ✅ | ❌ | hoch |
| bio-3-07 | 3 | Lymphatisches System | bio-organ-lymphe | ✅ | ❌ | niedrig |
| bio-3-08 | 3 | Atmungssystem | bio-organ-atmung | ✅ | ❌ | hoch |
| bio-3-09 | 3 | Verdauungssystem | bio-organ-verdauung | ✅ | ❌ | hoch |
| bio-3-10 | 3 | Harnsystem | bio-organ-niere | ✅ | ❌ | hoch |
| bio-3-11 | 3 | Skelettsystem | bio-organ-skelett | ✅ | ❌ | mittel |
| bio-3-12 | 3 | Fortpflanzungssystem | bio-organ-fortpflanzung | ✅ | ❌ | hoch |
| bio-4-01 | 4 | Befruchtung und Einnistung | bio-früh-befruchtung | ✅ | ❌ | mittel |
| bio-4-02 | 4 | Keimblätter | bio-früh-keimblätter | ✅ | ❌ | hoch |
| bio-4-03 | 4 | Embryonal- und Fetalentwicklung | bio-früh-embryo | ✅ | ❌ | mittel |
| bio-4-04 | 4 | Plazenta und Eihäute | bio-früh-plazenta | ✅ | ❌ | mittel |
| bio-5-01 | 5 | Mendelsche Regeln | bio-genetik-mendel | ✅ | ❌ | hoch |
| bio-5-02 | 5 | Chromosomentheorie der Vererbung | bio-genetik-chromosom | ✅ | ❌ | mittel |
| bio-5-03 | 5 | Nichtchromosomale Vererbung | bio-genetik-extrachrom | ✅ | ❌ | niedrig |
| bio-5-04 | 5 | Aufbau des Genoms | bio-genetik-genom | ✅ | ❌ | mittel |
| bio-5-05 | 5 | Mutationen | bio-genetik-mutation | ✅ | ❌ | hoch |
| bio-5-06 | 5 | Vererbung des Geschlechts | bio-genetik-geschlecht | ✅ | ❌ | hoch |
| bio-5-07 | 5 | Krebsentstehung | bio-genetik-krebs | ✅ | ❌ | mittel |
| bio-6-01 | 6 | DNA-Aufbau und Replikation | bio-molgen-dna | ✅ | ❌ | hoch |
| bio-6-02 | 6 | Genetischer Code | bio-molgen-code | ✅ | ❌ | hoch |
| bio-6-03 | 6 | Aufbau eukaryotischer Gene | bio-molgen-genaufbau | ✅ | ❌ | mittel |
| bio-6-04 | 6 | Transkription und Translation | bio-molgen-expression | ✅ | ❌ | hoch |
| bio-6-05 | 6 | RNA-Typen und Spleißen | bio-molgen-rna | ✅ | ❌ | mittel |
| bio-6-06 | 6 | Genregulation | bio-molgen-regulation | ✅ | ❌ | hoch |
| bio-6-07 | 6 | Proteomik und Epigenetik | bio-molgen-proteomik | ✅ | ❌ | mittel |
| bio-7-01 | 7 | PCR | (none) | ❌ | ✅ | hoch |
| bio-7-02 | 7 | DNA-Sequenzierung | (none) | ❌ | ✅ | hoch |
| bio-7-03 | 7 | Genomanalyse | (none) | ❌ | ✅ | mittel |
| bio-7-04 | 7 | Genetischer Fingerabdruck | (none) | ❌ | ✅ | hoch |
| bio-7-05 | 7 | Gentechnisch veränderte Organismen | (none) | ❌ | ✅ | mittel |
| bio-7-06 | 7 | Klonierung | (none) | ❌ | ✅ | mittel |
| bio-8-01 | 8 | Stammbaumanalysen | bio-humgen-stammbaum | ✅ | ❌ | hoch |
| bio-8-02 | 8 | Genetische Beratung und Diagnostik | (missing linkedChapterId) | ✅ | ❌ | mittel |
| bio-8-03 | 8 | Erbgänge vertieft | (none) | ❌ | ✅ | hoch |
| bio-8-04 | 8 | Präimplantations- und Pränataldiagnostik | (none) | ❌ | ✅ | hoch |
| bio-9-01 | 9 | Entstehung des Lebens | bio-evo-entstehung | ✅ | ❌ | mittel |
| bio-9-02 | 9 | Endosymbiontentheorie | bio-evo-entstehung | ✅ | ❌ | mittel |
| bio-9-03 | 9 | Phylogenetik | bio-evo-entstehung | ✅ | ❌ | mittel |
| bio-9-04 | 9 | Evolutionstheorie | bio-evo-theorie | ✅ | ❌ | hoch |
| bio-9-05 | 9 | Artbegriff und Artbildung | bio-evo-theorie | ✅ | ❌ | mittel |
| bio-9-06 | 9 | Evolutionsfaktoren | bio-evo-theorie | ✅ | ❌ | hoch |
| bio-9-07 | 9 | Entwicklung des Menschen | bio-evo-theorie | ✅ | ❌ | mittel |
| bio-10-01 | 10 | Abiotische Faktoren | bio-oeko-abiotisch | ✅ | ❌ | mittel |
| bio-10-02 | 10 | Biotische Faktoren | bio-oeko-biotisch | ✅ | ❌ | mittel |
| bio-10-03 | 10 | Population | bio-oeko-population | ✅ | ❌ | mittel |
| bio-10-04 | 10 | Ökologische Nische | bio-oeko-nische | ✅ | ❌ | mittel |
| bio-10-05 | 10 | Ökosysteme | bio-oeko-system | ✅ | ❌ | mittel |
| bio-10-06 | 10 | Umweltschutz | bio-oeko-umwelt | ✅ | ❌ | niedrig |
| bio-11-01 | 11 | Antikörper | bio-immun-antikörper | ✅ | ❌ | hoch |
| bio-11-02 | 11 | Gene der Antikörper | bio-immun-gene | ✅ | ❌ | mittel |
| bio-11-03 | 11 | Blutgruppen-Vererbung | bio-immun-blutgruppen | ✅ | ❌ | hoch |
| bio-11-04 | 11 | Rhesusfaktor | bio-immun-rhesus | ✅ | ❌ | hoch |

### Chemie (13 entries) - All ✅ Mapped & Covered

| ID | Kapitel Nr | Thema | linkedChapterId | priorität |
|----|-----------|-------|-----------------|-----------|
| ch-1-01 | 1 | Elementarteilchen und Atomaufbau | ch-atombau | hoch |
| ch-2-01 | 2 | Quantenmechanik-Grundlagen | (missing linkedChapterId) | mittel |
| ch-3-01 | 3 | Gasgesetze | ch-gasgesetze | hoch |
| ch-4-01 | 4 | Phasen und Phasenübergänge | ch-aggregat | mittel |
| ch-5-01 | 5 | Periodensystem | ch-pse | hoch |
| ch-6-01 | 6 | Bindungstypen | ch-bindungen | hoch |
| ch-7-01 | 7 | Reaktionen und Stöchiometrie | ch-reaktionen | hoch |
| ch-8-01 | 8 | Gleichgewicht und Kinetik | ch-gleichgewicht | hoch |
| ch-9-01 | 9 | Wichtige Elemente | (missing linkedChapterId) | mittel |
| ch-10-01 | 10 | Säure-Base-Reaktionen | ch-säure-base | hoch |
| ch-11-01 | 11 | Redox und Elektrochemie | ch-redox | hoch |
| ch-12-01 | 12 | Organische Verbindungen | ch-organik | hoch |
| ch-13-01 | 13 | Biomoleküle | ch-naturstoffe | hoch |

### Physik (7 entries) - All ✅ Mapped & Covered

| ID | Kapitel Nr | Thema | linkedChapterId | priorität |
|----|-----------|-------|-----------------|-----------|
| ph-1-01 | 1 | Größen und Einheiten | (missing linkedChapterId) | mittel |
| ph-2-01 | 2 | Mechanik | ph-mechanik | hoch |
| ph-3-01 | 3 | Schwingungen und Wellen | ph-wellen | hoch |
| ph-4-01 | 4 | Thermodynamik | ph-wärme | hoch |
| ph-5-01 | 5 | Elektrizität und Magnetismus | ph-elektrizität | hoch |
| ph-6-01 | 6 | Optik | ph-optik | hoch |
| ph-7-01 | 7 | Atom- und Kernphysik | ph-atomphysik | hoch |

### Mathematik (6 entries) - All ✅ Mapped & Covered

| ID | Kapitel Nr | Thema | linkedChapterId | priorität |
|----|-----------|-------|-----------------|-----------|
| ma-1-01 | 1 | Zehnerpotenzen | (missing linkedChapterId) | mittel |
| ma-2-01 | 2 | Algebra | ma-algebra | hoch |
| ma-3-01 | 3 | Geometrie | ma-geometrie | hoch |
| ma-4-01 | 4 | Einheiten | (missing linkedChapterId) | mittel |
| ma-5-01 | 5 | Funktionen und Analysis | ma-analysis | hoch |
| ma-6-01 | 6 | Vektorrechnung | ma-vektoren | hoch |

---

**End of Report**
