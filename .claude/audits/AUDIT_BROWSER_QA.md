# Browser QA Report — Competitive Analysis: Die Zelle
**URL AMBOSS**: https://next.amboss.com/de/article/0o0e0S  
**URL StudyMed**: https://www.studymed.at/backend/lernen/kapitel/die-zelle  
**URL MedMaster**: http://localhost:5175/bms/bio/kap1  
**Date**: 2026-02-22  
**Analyst**: Claude Code QA  
**Flows Tested**: Chapter structure analysis, section expansion, content depth comparison

---

## Console Errors

| Platform | Error | Severity |
|----------|-------|----------|
| AMBOSS | None observed during navigation | — |
| StudyMed | Cookie/email preferences modal blocks initial content | LOW |
| MedMaster | App stuck in root-loader (auth loading delay) during testing session | MEDIUM |

---

## Platform 1: AMBOSS — "Die Zelle"

### URL
`https://next.amboss.com/de/article/0o0e0S`  
Last updated: 08.10.2024

### Full Chapter Structure (Top-Level Sections)
1. **Zusammenfassung** (intro paragraph, always visible)
2. **Zelltypen** (Prokaryoten vs. Eukaryoten)
3. **Zellmembran**
   - Aufbau von Membranen
   - Glykokalyx
   - Funktionen von Membranen
4. **Zellorganellen** (overview table)
5. **Zellkern**
   - Aufbau
   - Funktionen
6. **Endoplasmatisches Retikulum**
   - Aufbau
   - Funktionen
7. **Golgi-Apparat**
   - Aufbau
   - Funktionen
8. **Mitochondrien**
   - Aufbau
   - Funktion
   - Exkurs: Endosymbiontentheorie
9. **Lysosomen**
   - Aufbau
   - Funktion
10. **Peroxisomen**
    - Aufbau
    - Funktion
11. **Zytosol und Ribosomen**
    - Zytosol
    - Ribosomen
12. **Zytoskelett**
    - Überblick
    - Die wichtigsten Bestandteile des Zytoskeletts
13. **Zellkontakte**
    - Verschließende Kontakte
    - Haftende Kontakte (Adhäsionskontakte)
    - Kommunizierende Kontakte
14. **Wiederholungsfragen** (17 review questions across all sections)
15. **Meditricks** (video mnemonics: Malat-Aspartat-Shuttle, Zell-Zell-Kontakte)
16. **3D-Anatomie** (interactive 3D model)
17. **Quellen**

### Content Analysis

**Zusammenfassung** (2 paragraphs, ~180 words):
Prose intro. "Zellen sind die kleinsten Bau- und Funktionseinheiten lebender Organismen..." → pure flowing prose, no bullets.

**Zelltypen** (1 intro paragraph + 1 large comparison table + 1 "Merke"-box + 3–4 image placeholders, ~600 words):
- Intro paragraph: dense prose defining Prokaryoten/Eukaryoten
- Comparison table: 8 rows × 2 columns (Eukaryoten vs. Prokaryoten), each cell has 2–4 bullet sub-items
- "Merke"-box (clinically styled, blue-bordered): "Prokaryotische Zellen haben keinen Zellkern!"
- Clinical "Merke"-box (orange/yellow): Penicilline mechanism tied to Murein-Zellwand, 3 sentences

**Zellmembran** (~1,400 words, deeply nested bullets):
- Intro paragraph: 3 sentences prose
- **Lipiddoppelschicht** subsection:
  - Aufbau: nested bullet tree 3 levels deep
  - Eigenschaften: 2-level bullets (Durchlässigkeit, Fluidität, Diffusion)
  - Flippasen/Floppasen/Scramblasen: defined as sub-bullets
- **Membranproteine**: Definition + 2 bullet categories + table
- Large comparison table: "Beispiele für asymmetrisch verteilte Membranbestandteile" (3 rows × 3 columns)
- "Merke"-box: Antimykotika — Ergosterol in Pilzen (clinically contextualized)
- "Merke"-box (green callout): Semipermeabilität
- **Glykokalyx**: Definition line + bullet sub-items for Aufbau and Funktion
- **Funktionen von Membranen**: bullet list of 6 functions, each with 1–2 sub-bullets

**Zellorganellen** (~300 words overview + large table):
- 2 intro paragraphs (prose)
- Zentrifugation fractions: bulleted list (4 items)
- Major organelles overview table: 6 rows × 3 columns (Aufbau + Funktion each with 2–3 bullets)

**Zytoskelett** (most detailed expandable section, ~1,800 words):
- 2 intro sentences
- Überblick: bullet tree (Funktion, Aufbau, Filamente, Begleitproteine, Motorproteine)
- Large comparison table: 3 rows × 4 columns (Aktinfilamente, Intermediärfilamente, Mikrotubuli — Bauweise, Begleitproteine, Funktion) — extremely detailed, each cell contains 4–8 sub-bullets
- "Merke"-box: "Intermediärfilamente sind nicht mit Motorproteinen assoziiert!"
- "Merke"-box: Wortbestandteil "intermediär" explanation
- Clinical "Exkurs"-box: "Intermediärfilamente als Tumormarker" (Vimentin, Desmin, Sarkome) — 3 sentences prose
- Clinical "Exkurs"-box: "Primär ziliäre Dyskinesie (PCD)" — 4 sentences clinical description
- Multiple image/diagram titles listed

**Wiederholungsfragen** (~17 questions, pure text):
Open-ended questions ("Beschreibe...", "Nenne...", "Welche Funktion...") organized by section heading. No answer options shown.

### AMBOSS Formatting Patterns

**Merksatz/Callout Box Types** (3 distinct types):
1. **Blue callout** ("Merke!" header): Pure clinical memorization fact, 1–2 sentences. Placed AFTER the relevant content.
2. **Orange/yellow callout** (clinical example, often quotes like "Penicilline"): Extended clinical context, 2–5 sentences. Always named with a clinical entity.
3. **Green callout** (simple fact): 1 sentence key concept. Rare.

**Prose to Bullet Ratio**: Approximately 30% prose introductions + 70% structured bullets/tables.

**Content Depth per Major Section** (approximate word counts):
- Zusammenfassung: ~180 words
- Zelltypen: ~600 words
- Zellmembran: ~1,400 words (deepest section)
- Zellorganellen overview: ~300 words
- Zytoskelett: ~1,800 words (deepest section)
- Each organelle (Zellkern, ER, Golgi, etc.): estimated ~400–600 words each
- Zellkontakte: estimated ~500 words

**Total estimated content**: ~8,000–10,000 words (pure content, excluding UI labels)

**Unique AMBOSS Features**:
- Interactive table-quiz per table ("TABELLEN-QUIZ" button)
- Section-level notes ("NOTIZEN")
- Feedback button per section
- Meditricks video integration
- 3D model viewer
- "Physikum-Fokus" / "Examenswissen" toggles to filter exam-relevant content
- Images/diagrams embedded per section (referenced as alt-text: "Grundaufbau der eukaryotischen Zelle", "Kinozilium", etc.)
- Exkurse: deeper-dive clinical boxes that extend standard content

---

## Platform 2: StudyMed — "Die Zelle"

### URL
`https://www.studymed.at/backend/lernen/kapitel/die-zelle`  
Chapter overview with 11 subchapters, 25 total content items

### Full Chapter Structure

**Chapter Title**: "Die Zelle — Der Grundbaustein des Körpers"

**Top-Level Subchapters (11)**:
1. **Zellmembran** — 2 content items
   - Die Zellmembran (Vorschau/Preview)
   - Die Zellmembran (full text)
2. **Zytoplasma & Zytoskelett** — 3 content items
   - Das Zytoplasma und Zytoskelett (Vorschau)
   - Das Zytoplasma (full text)
   - Das Zytoskelett (full text)
3. **Zellkern & Ribosomen** — 2 content items
   - Zellkern-Ribosomen (Vorschau)
   - Zellkern und Ribosomen (full text)
4. **Mitochondrien** — 3 content items
   - Mitochondrien (Vorschau)
   - ATP (Vorschau)
   - Das Mitochondrium (full text)
5. **Endomembransystem: ER, Golgi-Apparat, Lysosomen** — 2 content items
   - Das Endomembransystem (Vorschau)
   - Das Endomembransystem & Peroxisomen (full text)
6. **Stofftransport in Zellen** — 2 content items
7. **Zellkontakte** — 2 content items
8. **Zilien, Geißeln, Mikrovilli** — 2 content items
9. **Enzyme** — 1 content item
10. **Protozyten und Euzyten** — 5 content items
    - Protozyten (Vorschau)
    - Euzyten (Vorschau)
    - Zelltypen im menschlichen Körper
    - Protozyten und Eucyten
    - Pflanzenzellen
11. **Abschlusstest** — 1 content item (multi-question test)

**Additional features**: PDF Download, Kapitelzusammenfassung, video previews ("Vorschau"), Kursfortschritt tracker

### Deep Content Sample — "Die Zellmembran"
URL: `https://www.studymed.at/backend/lernen/inhalt/url/zellmembranen`

**Internal Structure** (numbered TOC visible at top):
1. Einleitung
2. Biochemischer Aufbau
3. Transmembrantransport
   - 3.1 Passiver Transport
   - 3.2 Aktiver Transport
4. Funktionen
5. Glykokalix
6. Kontrollfragen (7 multiple-choice questions with Lösungsweg)

**Word count**: ~3,800 words (pure content text)
**Format**: 80% prose paragraphs, ~15% bullet lists (Carrier types, Ion channel control), ~5% tables/comparisons
**Style**: Explanatory textbook prose ("Stellen wir uns vor...", "Näheres dazu..."), very accessible, high reading comprehension level

**"Merke"-equivalent**: None visible. No callout boxes. Key facts are embedded in prose or listed as bullets.

### Deep Content Sample — "Das Zytoplasma"
URL: `https://www.studymed.at/backend/lernen/inhalt/url/zytoplasma`

**Internal Structure**:
1. Einleitung
2. Bestandteile
3. Funktion
4. Kontrollfragen (4 multiple-choice)

**Word count**: ~500 words (very short chapter)
**Format**: Short intro paragraph + bullet list of components + 1-sentence function description
**Observations**: Very concise. Not comparable to AMBOSS depth.

### StudyMed Formatting Patterns

**No dedicated Merksatz boxes** — key facts embedded in prose
**Content delivery format**: Numbered chapters with prose paragraphs. Figures referenced as "Abb. 1: ...", "Abb. 2: ..."
**Bullet lists**: Used for: component lists, transport classification, function lists
**Prose to Bullet Ratio**: ~80% prose, ~20% bullets, minimal tables
**Kontrollfragen**: 4–7 multiple-choice questions per content page (MedAT-style, 5 options each), each with full "Lösungsweg" explanation
**Video previews** ("Vorschau"): ~50% of content items have an associated video

**Total content for "Die Zelle"**: 11 subchapters × ~2,000–4,000 words average = approximately **22,000–40,000 total words** across the entire chapter

---

## Platform 3: MedMaster — "Zellbiologie — Aufbau & Organellen"

### Structure (from source file `kap1-die-zelle.ts`)

**File size**: ~100 KB, 1,216 lines

**Unterkapitel (5)**:
1. **UK1**: "Kennzeichen des Lebens und Systembiologie" (bio-1-01)
2. **UK2**: "Prokaryoten vs. Eukaryoten" (bio-1-02)
3. **UK3**: "Zellmembran und Zytoplasma" (bio-1-03)
4. **UK4**: "Zellorganellen — Funktion und medizinische Relevanz" (bio-1-04)
5. **UK5**: "Der Zellkern — Steuerzentrale der Zelle" (bio-1-05)

**Per UK sections** (3 sections each with heading + text + merksatz):
- UK1 sections: "Die sieben Kennzeichen des Lebens" / "Systembiologie und Emergenz" / "Hierarchische Organisation des Lebens"
- UK2 sections: "Strukturelle Unterschiede auf einen Blick" / "Medizinische Relevanz: Antibiotika und Ribosomen" / "Archaeen – die dritte Domäne"
- UK3 sections: "Phospholipid-Doppelschicht: Aufbau und Selbstorganisation" / "Membranproteine: Tore, Transporter und Signalempfänger" / "Cholesterin und Membranfluidität"
- UK5 sections: "Kernhülle und Kernporen: selektive Barriere" / "Chromatin: DNA verpackt und reguliert" / "Nucleolus und Ribosomensynthese"

**Per UK content components**:
- `content`: Long markdown prose (~400–800 words per UK)
- `sections[]`: 3 structured sections with heading + text + merksatz
- `merksätze[]`: 4–6 Merksätze per UK
- `selfTest[]`: 7–8 multiple-choice questions per UK (5 options)
- `klinischerBezug`: 1 clinical paragraph
- `altfrage`: 1 legacy exam question with answer
- `lernziele[]`: 4 learning objectives

**Total word count** (estimated): ~15,000–20,000 words across 5 UKs

---

## Comparative Analysis

### Section Count Comparison

| Topic | AMBOSS | StudyMed | MedMaster |
|-------|--------|----------|-----------|
| Zellmembran | 1 deep section (3 subsections, ~1,400 words) | 1 chapter (~3,800 words) | 1 UK section (~500 words) |
| Zelltypen/Prokaryoten | 1 section (~600 words + table) | Subchapter 10 (Protozyten/Euzyten, 5 items) | 1 full UK (~800 words) |
| Organellen overview | 1 table-section + 6 individual sections | 1 combined chapter (ER+Golgi+Lyso) | 1 UK covering all organelles |
| Zytoskelett | 1 section (~1,800 words + large table) | Part of "Zytoplasma & Zytoskelett" | Not a dedicated section |
| Zellkontakte | 1 section (3 types) | 1 dedicated chapter (2 items) | Not a dedicated section |
| Zilien/Geißeln | Not in this article | Dedicated chapter (2 items) | Not present |
| Enzyme | Not in this article | Dedicated chapter (1 item) | Present elsewhere |
| Stofftransport | Part of Zellmembran section | Dedicated chapter (2 items) | Part of UK3 |

### Word Count Comparison

| Platform | Estimated Total Words | Sections |
|----------|-----------------------|---------|
| AMBOSS | 8,000–10,000 | 13 main + 17 review Qs |
| StudyMed | 22,000–40,000 | 11 subchapters × multiple items |
| MedMaster | 15,000–20,000 | 5 UKs × 3 sections |

### Merksatz/Callout Placement Analysis

**AMBOSS**:
- Merksätze appear IMMEDIATELY AFTER the relevant content point (inline, not at end)
- 2–3 Merksätze per section
- Always named (clinical anchor) or phrased as key rule
- Example placement: After Zellwand explanation → "Prokaryotische Zellen haben keinen Zellkern!" then directly continues to clinical Penicillin-Exkurs

**StudyMed**:
- NO dedicated callout boxes observed in text chapters
- Key facts embedded in running prose
- Emphasis via numbered lists and bold text only
- Merksätze appear implicitly as the "Lösungsweg" of Kontrollfragen (post-question explanation)

**MedMaster**:
- `merksatz` field per section: appears at END of section text (not inline)
- `merksätze[]` array at UK level: bulk Merksätze listed after all sections
- Pattern: Prose → sections → merksatz at end → all merksätze at bottom
- This is structurally correct but misses AMBOSS's pattern of inline Merksatz placement directly after the relevant fact

### Prose vs. Bullets vs. Tables

| Platform | Prose % | Bullets % | Tables % |
|----------|---------|-----------|---------|
| AMBOSS | 30% | 55% | 15% |
| StudyMed | 80% | 15% | 5% |
| MedMaster | 60% | 35% | 5% |

**Key finding**: AMBOSS is primarily bullet-based with nested hierarchy. StudyMed is primarily prose-based textbook style. MedMaster sits in between but closer to prose-heavy.

---

## Gap Analysis: What MedMaster Needs to Match Quality

### Critical Missing Elements

**1. Missing Topics Entirely (compared to competitors)**

| Topic | AMBOSS has it | StudyMed has it | MedMaster has it |
|-------|--------------|-----------------|-----------------|
| Zytoskelett detail (Aktinfilamente, Mikrotubuli, Intermediärfilamente) | YES (1,800 words) | YES (dedicated chapter) | NO (not in kap1) |
| Zellkontakte (Tight Junctions, Gap Junctions, Desmosomen) | YES (~500 words) | YES (dedicated chapter) | NO |
| Zilien, Geißeln, Mikrovilli | NO (other article) | YES (dedicated chapter) | NO |
| Peroxisomen (separate treatment) | YES | Part of Endomembransystem | NO (only in organelles overview) |
| Endosymbiontentheorie (Exkurs) | YES | YES | Partial (UK2) |
| Glykokalyx | YES (sub-section) | YES (section 5 of Zellmembran) | UNCLEAR |

**2. Content Depth Gaps**

The AMBOSS Zellmembran section has a 3-column table with "Beispiele für asymmetrisch verteilte Membranbestandteile" (Na+/K+-ATPase, Cyclooxygenasen, Phospholipase C) — this level of detail is not present in MedMaster's UK3.

The AMBOSS Zytoskelett section has a 4-column table with per-filament Bauweise, Begleitproteine, and Funktion including specific numbers (Durchmesser 7nm/10nm/25nm), specific proteins (Spectrin, Dystrophin, Plektin, MAPs), and clinical exkurse (Tumormarker, PCD). MedMaster has no equivalent.

**3. Merksatz Positioning Gap**

AMBOSS places Merksätze inline, immediately after the relevant concept. MedMaster places all Merksätze at the end of sections. This reduces the cognitive anchoring effect of the Merksatz — students don't see the key rule until after they've read all the supporting text, rather than at the moment of peak relevance.

**4. Clinical Context Integration**

AMBOSS integrates clinical relevance within EVERY section as named Exkurse:
- Zelltypen → Penicilline
- Zellmembran → Antimykotika (Ergosterol), Semipermeabilität
- Zytoskelett → Intermediärfilamente als Tumormarker, Primär ziliäre Dyskinesie

StudyMed integrates clinical context in prose paragraphs (e.g., Na-K-ATPase → Tetrodotoxin/Kugelfisch, local anesthesia).

MedMaster has `klinischerBezug` but it appears only once per UK rather than being woven through individual sections.

**5. Review Question Structure**

AMBOSS "Wiederholungsfragen": 17 open-ended Beschreibe/Nenne/Welche questions, organized by section. Purpose: active recall.

StudyMed "Kontrollfragen": 5-option MC questions with full Lösungsweg. Purpose: exam simulation.

MedMaster `selfTest`: 7–8 five-option MC questions with explanation. This matches StudyMed format well. No open-ended recall questions like AMBOSS.

---

## Recommendations (Prioritized)

### HIGH — Missing Content

1. **Add UK6: Zytoskelett** — A dedicated unterkapitel covering Aktinfilamente (7nm, G-Aktin/F-Aktin), Intermediärfilamente (10nm, Zytokeratine, Vimentin, Desmin), and Mikrotubuli (25nm, Kinesin/Dynein, Zentrosom) with comparison table matching AMBOSS depth. Clinical exkurse: Tumormarker + PCD.

2. **Add UK7: Zellkontakte** — Tight Junctions (occludin, claudin), Adherens Junctions/Zonula adhaerens, Desmosomen/Maculae adhaerentes, Gap Junctions (Connexine, Kommunikation). Clinical: Pemphigus vulgaris, bullöses Pemphigoid.

3. **Expand UK3 Zellmembran** — Add Glykokalyx subsection (Aufbau + Funktion: Blutgruppen, Immunerkennung), Flippasen/Floppasen/Scramblasen, Phosphatidylserin-Phagozytosesignal.

4. **Expand UK4 Zellorganellen** — Add separate subsections for each organelle with Aufbau + Funktion bullets mirroring AMBOSS style. Currently too summarized.

### MEDIUM — Format Improvements

5. **Move Merksätze inline** — Place each `merksatz` directly after the relevant sentence in `content`, not just at the end of sections. Match AMBOSS's pattern of immediate cognitive anchoring.

6. **Add named clinical callout boxes** — Follow AMBOSS pattern of naming clinical Exkurse ("Penicilline:", "Antimykotika:", "Primär ziliäre Dyskinesie:"). MedMaster's `klinischerBezug` is anonymous prose.

7. **Increase table usage** — The AMBOSS comparison tables (Prokaryoten vs. Eukaryoten, Zytoskelett filaments, Zellorganellen overview) are extremely effective for exam preparation. MedMaster has almost no tables.

### LOW — Polish

8. **Add Endosymbiontentheorie as named Exkurs** in UK2 (instead of inline text) — matches AMBOSS treatment.

9. **Add "Wiederholungsfragen"-style open questions** alongside existing selfTest MC questions — trains active recall rather than just recognition.

10. **Add chapter-level PDF summary** — StudyMed offers this, very popular with Austrian MedAT students.

---

## Summary Assessment

| Criterion | AMBOSS | StudyMed | MedMaster |
|-----------|--------|----------|-----------|
| Content completeness | 9/10 | 8/10 | 5/10 |
| Content depth per topic | 10/10 | 7/10 | 6/10 |
| Merksatz quality | 10/10 | 4/10 | 7/10 |
| Merksatz placement (inline) | 10/10 | N/A | 4/10 |
| Tables & comparison tools | 9/10 | 4/10 | 3/10 |
| Clinical integration | 10/10 | 8/10 | 7/10 |
| Exam question quality | 8/10 | 9/10 | 8/10 |
| Missing topics | 0 gaps | 0 gaps | ~5 major gaps |

**Bottom line**: MedMaster's "Die Zelle" chapter covers about 50% of the topic breadth of AMBOSS and ~45% of StudyMed. The biggest gaps are the Zytoskelett and Zellkontakte sections (both absent), thin coverage of individual organelles, and the absence of inline Merksätze. The question quality (selfTest) is good and matches StudyMed standard.

