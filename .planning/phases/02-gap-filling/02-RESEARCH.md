# Phase 2: Gap Filling - Research

**Researched:** 2026-02-19
**Domain:** BMS Content Creation & Stichwortliste Synchronization
**Confidence:** HIGH

## Summary

Phase 2 closes the gap between Phase 1 audit findings and Phase 1 completion. The audit identified 8 missing `neu2026` topics in the Stichwortliste—all with `abgedeckt: false`—that require complete content implementations in BMSUnterkapitel.tsx. These 8 topics are distributed across two Biologie chapters (Kapitel 7: Methoden der Genetik, Kapitel 8: Humangenetik) and span priority levels from "hoch" to "mittel".

The technical requirements are clear:
1. Create chapter files (kap7-methoden-der-genetik.ts, kap8-humangenetik.ts) with Unterkapitel matching Stichwortliste linkedChapterId values
2. Populate each Unterkapitel with merksätze, selfTest questions (5+ per topic), and premium UI patterns (MerksatzBox, QuizQuestion)
3. Update SelfTestQuestion interface to include `tags` field (SYNC-05 requirement)
4. Set `abgedeckt: true` for all 8 topics in Stichwortliste upon completion
5. Maintain 5-option (A-E) format per MedAT exam spec

**Primary recommendation:** Create two new chapter files (kap7, kap8) with Unterkapitel structure matching linkedChapterId values from Stichwortliste; add `tags` field to SelfTestQuestion interface; populate with premium-designed content (MerksatzBox highlights, QuizQuestion interactivity); update Stichwortliste `abgedeckt` flags at completion.

---

## The 8 Missing neu2026 Topics

| ID | Topic | Priority | Kapitel | LinkedQuestionTags | Count |
|----|-------|----------|---------|-------------------|-------|
| bio-7-01 | PCR | hoch | Methoden der Genetik | ["pcr", "polymerase-kettenreaktion"] | 5+ |
| bio-7-02 | DNA-Sequenzierung | hoch | Methoden der Genetik | ["sequenzierung", "sanger"] | 5+ |
| bio-7-03 | Genomanalyse | mittel | Methoden der Genetik | ["genomanalyse"] | 5+ |
| bio-7-04 | Genetischer Fingerabdruck | hoch | Methoden der Genetik | ["genetischer-fingerabdruck", "str"] | 5+ |
| bio-7-05 | Gentechnisch veränderte Organismen | mittel | Methoden der Genetik | ["gvo", "gentechnik"] | 5+ |
| bio-7-06 | Klonierung | mittel | Methoden der Genetik | ["klonierung"] | 5+ |
| bio-8-03 | Erbgänge vertieft | hoch | Humangenetik | ["erbgänge", "penetranz"] | 5+ |
| bio-8-04 | Präimplantations- und Pränataldiagnostik | hoch | Humangenetik | ["pid", "pnd", "pränataldiagnostik"] | 5+ |

**Total new content:** 8 topics, 40+ questions (minimum 5 per topic), distributed across 2 Kapitel.

---

<user_constraints>

## User Constraints (from Phase Objective & Additional Context)

### Locked Decisions (from Phase 1 and Global Context)

**1. Premium Design Standard (Global Context)**
- All content MUST follow Amboss/Apple Health esthetic clarity
- MerksatzBox.tsx and QuizQuestion.tsx are MANDATORY patterns
- No custom component creation; use existing premium patterns only

**2. Data Structure Requirements**
- Every quiz item MUST have `tags` field (Stichwortliste linkedQuestionTags)
- Every quiz item MUST have `difficulty` field (1-3 scale)
- 5-option (A-E) format per MedAT exam requirement
- Paywall-ready: isPro flags prepared in metadata (Phase 8 implementation)

**3. Content Strategy (from prior decisions)**
- BMS first, then TV/KFF/SEK (BMS is primary focus)
- Lernlogische Abfolge (learning progression, not chapter order)
- Lehrbuch + Altfragen combined (premium content: textbook-thorough + exam-relevant)
- Freemium architecture prepared (isPro field planned, not yet split)

**4. Architecture Mismatch Resolution**
- From Phase 1: Fine-grained Stichwortliste IDs vs coarse Kapitel IDs
- Recommended solution: Parent Kapitel with fine-grained Unterkapitel matching linkedChapterId
- Example: Kapitel "bio-kap7" → Unterkapitel "bio-7-01" (PCR), "bio-7-02" (Sequenzierung), etc.

### Claude's Discretion

- Content depth per topic (minimum is 5 questions; can expand with merksätze, diagrams, clinical references)
- Ordering of topic implementation (suggested: hoch priority first for exam prep value)
- Which topics use diagrams/SVG vs. text-only explanations
- Specific medical sources for content validation (Lehrbuch references)

### Deferred Ideas (OUT OF SCOPE)

- Freemium split decisions (Phase 8 implementation)
- TV/KFF/SEK content (BMS Phase 2 focused)
- Learning path gamification beyond basic tagging (future phases)

</user_constraints>

---

<phase_requirements>

## Phase Requirements (MUST address these)

| ID | Description | Research Support |
|----|-------------|-----------------|
| **SYNC-02** | Alle 8 fehlenden Themen (neu2026, abgedeckt: false) werden mit vollständigem Content erstellt | 8 topics identified in Stichwortliste with linkedChapterId and linkedQuestionTags; Chapter files (kap7, kap8) and Unterkapitel structure enable creation; 5+ questions per topic required minimum |
| **SYNC-04** | `abgedeckt`-Flag in Stichwortliste wird nach Content-Erstellung auf `true` gesetzt | Stichwortliste entries have abgedeckt boolean field; Phase 2 tasks must include flag-update step after content completion |

</phase_requirements>

---

## Standard Stack

### Core Data Architecture

| Component | Purpose | Why Standard |
|-----------|---------|--------------|
| **stichworteData.ts** (Stichwortliste) | Single source of truth: 106 exam topics with priorities, coverage status, linked chapter IDs, and question tags | Official MedAT spec; 8 neu2026 entries identified with `abgedeckt: false` and linkedChapterId references to be created |
| **bmsKapitel/biologie/kap7-methoden-der-genetik.ts** | Chapter file for Kapitel 7 topics (6 topics: PCR, Sequenzierung, Genomanalyse, Fingerabdruck, GVO, Klonierung) | Maps to linkedChapterId values (bio-7-01, bio-7-02, etc.); mirrors existing kap1, kap2 pattern |
| **bmsKapitel/biologie/kap8-humangenetik.ts** | Chapter file for Kapitel 8 topics (2 topics: Erbgänge vertieft, PID/PND) | Maps to linkedChapterId values (bio-8-03, bio-8-04); completes Phase 2 scope |
| **bmsKapitel/types.ts** | Type definitions for Kapitel, Unterkapitel, SelfTestQuestion, QuizItem | SelfTestQuestion MUST add `tags: string[]` field for SYNC-05 compliance |
| **MerksatzBox.tsx** | Premium UI pattern for knowledge highlights (5 types: merke/altfragen/klinisch/achtung/tipp) | Consistent Amboss-style visual treatment; mandatory for all merksätze in new chapters |
| **QuizQuestion.tsx** | Premium UI pattern for interactive questions with immediate feedback, hints, explanations | Socratic learning; immediate visual feedback (green/red animations); mandatory for all selfTest questions |
| **bmsKapitel/biologie/index.ts** | Barrel file aggregating chapter exports (biologieKapitel array) | MUST be updated to import and export kap7, kap8 after creation |

### Supporting Architecture

| Layer | Files | Purpose |
|-------|-------|---------|
| **Data** | `/src/data/stichworteData.ts` | Single source of truth: 106 Stichwort entries; 8 neu2026 entries as target for Phase 2 |
| **Chapters (NEW)** | `/src/data/bmsKapitel/biologie/kap7-methoden-der-genetik.ts` | 6 Unterkapitel (PCR, Sequenzierung, Genomanalyse, Fingerabdruck, GVO, Klonierung); each with 5+ questions |
| **Chapters (NEW)** | `/src/data/bmsKapitel/biologie/kap8-humangenetik.ts` | 2 Unterkapitel (Erbgänge vertieft, PID/PND); each with 5+ questions |
| **Barrel Update** | `/src/data/bmsKapitel/biologie/index.ts` | Import/export kap7, kap8 to biologieKapitel array |
| **Interfaces** | `/src/data/bmsKapitel/types.ts` | Add `tags?: string[]` to SelfTestQuestion interface |
| **UI Components** | `/src/components/chapter/MerksatzBox.tsx` | Render merksätze in new chapters |
| **UI Components** | `/src/components/chapter/QuizQuestion.tsx` | Render selfTest questions in new chapters |

### Current Implementation Reference

**Existing Pattern (kap2-zellkern-und-ribosomen.ts):**
```typescript
import type { Kapitel } from '../types';

export const bioKap2: Kapitel = {
  id: 'bio-kap2',
  title: 'Zellkern und Ribosomen',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '',
  unterkapitel: [
    {
      id: 'bio-kap2-uk01',
      title: '1. Überblick und biologische Bedeutung',
      content: `# Markdown content here...`,
      lernziele: [],
      sections: [],
      merksätze: [
        "Der Zellkern organisiert und schützt die DNA...",
        "Ribosomen setzen diese Information in Proteine um."
      ],
      selfTest: [
        {
          question: "Question text",
          options: ["A", "B", "C", "D", "E"],
          correctIndex: 1,
          explanation: "Explanation here",
          hints: ["Hint 1", "Hint 2"]
          // ADD: tags: ["zellkern", "chromatin", "chromosomen"] for SYNC-05
        }
      ]
    }
  ]
};
```

---

## Architecture Patterns

### Pattern 1: Kapitel 7 & 8 File Structure

**What:** Create two new chapter files (kap7, kap8) with Unterkapitel matching linkedChapterId patterns from Stichwortliste.

**Why:** Mirrors existing pattern (kap1, kap2); ensures Stichwortliste→Kapitel→Unterkapitel mapping is deterministic and auditable.

**Implementation:**

```typescript
// kap7-methoden-der-genetik.ts
export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Methoden der Genetik',
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '120 min',  // Estimated for 6 topics
  unterkapitel: [
    {
      id: 'bio-7-01',  // Matches linkedChapterId in Stichwortliste
      title: 'PCR (Polymerase-Kettenreaktion)',
      content: `# PCR - Principles and Application...`,
      merksätze: [
        "Die PCR verdoppelt DNA-Sequenzen exponentiell in zyklischen Wiederholungen.",
        "Drei Schritte pro Zyklus: Denaturierung (94°C), Annealing (50-65°C), Elongation (72°C)"
      ],
      selfTest: [
        {
          question: "Welche Temperatur wird für die Denaturierung der DNA in der PCR verwendet?",
          options: [
            "50-65°C (Annealing)",
            "30-40°C (Annealing)",
            "94-95°C (Denaturierung)",  // Correct
            "37°C (Körpertemperatur)",
            "4°C (Kühlung)"
          ],
          correctIndex: 2,
          explanation: "Bei etwa 94-95°C denaturiert die doppelsträngige DNA...",
          hints: [
            "Die höchste Temperatur im PCR-Zyklus trennt die Doppelstränge.",
            "Worauf wirkt Hitze bei DNA? ↦ Trennung der Basenpaarungen"
          ],
          tags: ["pcr", "polymerase-kettenreaktion", "denaturierung"]  // NEW: SYNC-05
        },
        // ... 4+ more questions with tags from linkedQuestionTags
      ]
    },
    {
      id: 'bio-7-02',  // DNA-Sequenzierung
      title: 'DNA-Sequenzierung',
      // ... similar structure
    },
    // ... 4 more Unterkapitel (Genomanalyse, Fingerabdruck, GVO, Klonierung)
  ]
};

// kap8-humangenetik.ts (extends existing, or create new if not present)
export const bioKap8: Kapitel = {
  id: 'bio-kap8',
  title: 'Humangenetik (Vertieft)',
  subject: 'biologie',
  icon: '👨‍👩‍👧‍👦',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'bio-8-03',  // Erbgänge vertieft
      title: 'Erbgänge vertieft: Multifaktorielle Vererbung',
      // ... content with 5+ questions tagged with ["erbgänge", "penetranz"]
    },
    {
      id: 'bio-8-04',  // PID/PND
      title: 'Präimplantations- und Pränataldiagnostik',
      // ... content with 5+ questions tagged with ["pid", "pnd", "pränataldiagnostik"]
    }
  ]
};
```

**Validation Rule:** Every Unterkapitel.id MUST match a linkedChapterId from Stichwortliste with `neu2026: true` and `abgedeckt: false`.

### Pattern 2: SelfTestQuestion with Tags (SYNC-05)

**What:** Add `tags` field to SelfTestQuestion interface; populate with linkedQuestionTags from Stichwortliste.

**Why:** Enables question→topic tracking (SYNC-05 requirement); supports future question-pool filtering and gamification.

**Current Interface (types.ts):**
```typescript
export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  // ADD THIS:
  tags?: string[];  // e.g., ["pcr", "polymerase-kettenreaktion"] from linkedQuestionTags
}
```

**Usage in kap7 and kap8:**
- Every question in bio-7-01 MUST have `tags` matching linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"]
- Every question in bio-8-04 MUST have `tags` matching linkedQuestionTags: ["pid", "pnd", "pränataldiagnostik"]
- Tags enable reverse lookup: "Show all questions tagged 'pcr'" → queries all questions with "pcr" in tags array

### Pattern 3: MerksatzBox Integration

**What:** Use MerksatzBox component with type="merke" (default) or "altfragen"/"klinisch" for premium UI treatment.

**Why:** Consistency with Amboss/Apple Health visual standard; glassmorphism + color-coded by importance.

**Expected in new chapters (kap7, kap8):**
```typescript
{
  id: 'bio-7-01',
  title: 'PCR',
  merksätze: [
    "Die PCR verdoppelt DNA-Sequenzen exponentiell in zyklischen Wiederholungen.",
    "Drei Schritte pro Zyklus: Denaturierung (94°C), Annealing (50-65°C), Elongation (72°C)"
  ],
  // Rendering (in BMSUnterkapitel.tsx):
  // merksätze.map((text) => <MerksatzBox text={text} type="merke" />)
}
```

### Pattern 4: Barrels Update

**What:** Update `/src/data/bmsKapitel/biologie/index.ts` to import and export kap7, kap8.

**Current (biologie/index.ts):**
```typescript
import { bioKap1 } from './kap1-die-zelle-test';
export const biologieKapitel: Kapitel[] = [ bioKap1 ];
```

**Updated (must match new chapters):**
```typescript
import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';
export const biologieKapitel: Kapitel[] = [ bioKap1, bioKap7, bioKap8 ];
```

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| **Question Tags** | Custom tag system per chapter | Use linkedQuestionTags from Stichwortliste | Already in Stichwortliste; SYNC-05 requirement; prevents tag inconsistency |
| **Premium Merksatz UI** | Custom styled divs with inline CSS | MerksatzBox.tsx component with type prop | Consistent visual treatment; Amboss-standard colors; dark mode support |
| **Quiz Question UI** | Custom form rendering with manual feedback | QuizQuestion.tsx component | Immediate feedback (green/red animations), Socratic hints, sound feedback already implemented |
| **Chapter Organization** | Flat list of topics | Kapitel → Unterkapitel hierarchy | Mirrors MedAT structure; progressive disclosure; matches Stichwortliste linkedChapterId pattern |
| **Question Format Validation** | Manual checking for 5 options | Use type system (options: string[] length validation + test) | Type-safe; catches format violations at development time |
| **Stichwortliste Coverage** | Manual spreadsheet tracking | Audit script checking linkedChapterId mapping | Deterministic, repeatable, programmatically verifiable |

---

## Common Pitfalls

### Pitfall 1: Tags Not Aligned with linkedQuestionTags

**What goes wrong:** A question in kap7-PCR has tags: ["pcr", "dna"], but Stichwortliste entry bio-7-01 specifies linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"]. Misalignment breaks question tracking (SYNC-05).

**Why it happens:** Content created without checking Stichwortliste; tag inconsistency during authoring.

**How to avoid:**
- Copy linkedQuestionTags directly from Stichwortliste entry → question.tags
- Use code comment to reference Stichwortliste ID: `// tags from bio-7-01 linkedQuestionTags`
- Audit rule: For each question, verify tags ⊆ linkedQuestionTags from parent Stichwortliste entry

**Warning signs:**
- Question tagged with ["pcr", "typo-tag"]
- linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"] but questions only use ["pcr"]

### Pitfall 2: Missing 5-Option Format (MedAT Compliance)

**What goes wrong:** A question has only 4 options instead of 5 (A-E). Breaks exam format compliance; fails validation.

**Why it happens:** Copy-pasting from non-MedAT sources; incomplete authoring; lack of validation.

**How to avoid:**
- Template: Always start with 5 empty option slots
- Rule: `options.length === 5` (enforce in type system or test)
- Review: Every question must have exactly 5 options before submission
- Validation: `correctIndex` must be 0-4 (matches 5-option indexing)

**Warning signs:**
- Question with 3-4 options
- correctIndex is 5+ (out of bounds for 5-option array)

### Pitfall 3: Unterkapitel.id Not Matching Stichwortliste linkedChapterId

**What goes wrong:** Stichwortliste entry bio-7-01 has linkedChapterId: "bio-7-01", but Unterkapitel is created with id: "uk-pcr". Later, UI queries for bio-7-01 and finds nothing.

**Why it happens:** Manual ID creation without checking Stichwortliste; naming inconsistency.

**How to avoid:**
- Copy linkedChapterId from Stichwortliste → Unterkapitel.id directly
- Use comment: `// id matches Stichwortliste bio-7-01`
- Audit rule: For every Stichwortliste entry with abgedeckt: false → true, verify Unterkapitel.id exists

**Warning signs:**
- Stichwortliste bio-7-01 with abgedeckt: true but Unterkapitel.id is "pcr-intro"
- getKapitelById("bio-7-01") returns undefined

### Pitfall 4: Missing Merksätze or Hints

**What goes wrong:** Unterkapitel has selfTest questions but no merksätze; merksätze array is empty. MerksatzBox component has nothing to render.

**Why it happens:** Focus on questions only; forgetting to extract key facts into merksätze.

**How to avoid:**
- Template requirement: minimum 2 merksätze per Unterkapitel
- Pattern: Extract 1-2 sentence summaries from content markdown
- Audit rule: merksätze.length >= 2 for every Unterkapitel

**Warning signs:**
- merksätze: [] (empty array)
- Content has 3+ paragraphs but merksätze are missing

### Pitfall 5: Incomplete neu2026 Content

**What goes wrong:** Only 5 of 8 neu2026 topics are implemented; 3 remain with abgedeckt: false. Exam candidates miss required content.

**Why it happens:** Work halted mid-phase; priority confusion; scope creep.

**How to avoid:**
- Phase scope: ALL 8 topics must reach abgedeckt: true
- Task dependency: Flag all 8 topics as Phase 2 deliverables
- Review: Before marking phase complete, verify all 8 have `abgedeckt: true` in Stichwortliste

**Warning signs:**
- 6 of 8 topics implemented; 2 still show "Coming Soon"
- Stichwortliste has neu2026: true but abgedeckt: false

---

## Code Examples

### Example 1: kap7-methoden-der-genetik.ts Structure (Template)

```typescript
// Source: Phase 1 research + pattern from kap2-zellkern-und-ribosomen.ts
import type { Kapitel } from '../types';

export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Methoden der Genetik',
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '120 min',
  unterkapitel: [
    {
      id: 'bio-7-01',  // Matches Stichwortliste linkedChapterId
      title: 'PCR (Polymerase-Kettenreaktion)',
      content: `# PCR - Polymerase-Kettenreaktion

Die PCR ist eine grundlegende molekularbiologische Methode...

## Drei Hauptschritte pro Zyklus
1. **Denaturierung (94-95°C):** Doppelstrang trennt sich
2. **Annealing (50-65°C):** Primer binden an komplementäre Sequenzen
3. **Elongation (72°C):** DNA-Polymerase synthetisiert neuen Strang

## Charakteristika
- Exponentielle Amplifikation (2^n Kopien nach n Zyklen)
- Hochspezifisch dank Primer-Design
- Automatisierbar in Thermocycler
- Kosteneffizient`,

      lernziele: [
        "Beschreibe die drei Schritte eines PCR-Zyklus",
        "Erkläre, warum PCR exponentiell amplifiziert",
        "Benenne die Komponenten einer PCR-Reaktion"
      ],

      sections: [
        {
          heading: "Komponenten einer PCR-Reaktion",
          text: "Eine PCR benötigt: Template-DNA, zwei Primer, dNTPs, DNA-Polymerase (Taq), Puffer",
          merksatz: "Template + Primer + dNTPs + Taq = PCR"
        }
      ],

      merksätze: [
        "Die PCR verdoppelt DNA-Sequenzen exponentiell in zyklischen Wiederholungen (2^n).",
        "Drei Schritte pro Zyklus: Denaturierung (94°C), Annealing (50-65°C), Elongation (72°C).",
        "Taq-Polymerase ist thermostabil und überdauert 94°C ohne Denaturierung."
      ],

      klinischerBezug: "PCR ist Grundlage für Virus-Diagnostik (COVID-19 Tests), genetische Krankheitsdiagnose, Kriminalistik (DNA-Spuren).",

      selfTest: [
        {
          question: "Welche Temperatur ist für die Denaturierung in der PCR typisch?",
          options: [
            "50-65°C (Annealing-Temperatur)",
            "37°C (Körpertemperatur)",
            "94-95°C (Denaturierungs-Temperatur)",  // CORRECT
            "4°C (Lagerungstemperatur)",
            "72°C (Elongations-Temperatur)"
          ],
          correctIndex: 2,
          explanation: "Bei 94-95°C denaturiert die doppelsträngige DNA in Wasserstoffbrückenbindungen...",
          hints: [
            "Die höchste Temperatur im PCR-Zyklus trennt die DNA-Stränge.",
            "Stellt euch vor: Wenn ihr Heat anwendet, wann trennt sich die DNA?"
          ],
          tags: ["pcr", "polymerase-kettenreaktion", "denaturierung"]  // From linkedQuestionTags
        },
        {
          question: "Was ist die Funktion von Primern in der PCR?",
          options: [
            "Sie verdoppeln die gesamte DNA",
            "Sie trennen DNA-Stränge bei hohen Temperaturen",
            "Sie binden an komplementäre Sequenzen und markieren Startpunkte für die DNA-Synthese",  // CORRECT
            "Sie hemmen die Polymerase-Aktivität",
            "Sie verhindern die Denaturierung"
          ],
          correctIndex: 2,
          explanation: "Primer sind kurze DNA-Oligonukleotide, die an spezifische komplementäre Sequenzen binden...",
          hints: [
            "Primer sind wie 'Start-Markierungen'. Wofür braucht man Start-Markierungen?",
            "Die Polymerase muss wissen, wo sie anfangen soll zu synthetisieren."
          ],
          tags: ["pcr", "polymerase-kettenreaktion", "primer"]
        },
        // ... 3+ more questions with tags from ["pcr", "polymerase-kettenreaktion"]
      ],

      additionalNotes: "PCR wird mit verschiedenen Thermocyclern durchgeführt; moderne qPCR ermöglicht Echtzeit-Monitoring während der Amplifikation."
    },
    // ... 5 more Unterkapitel (bio-7-02 through bio-7-06)
  ]
};
```

### Example 2: Type Update (types.ts - Add tags field)

```typescript
// Source: SYNC-05 requirement + linkedQuestionTags pattern
export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  /**
   * Tags from linkedQuestionTags in Stichwortliste entry.
   * Example: bio-7-01 has linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"]
   * Every question in bio-7-01 should have tags from that set.
   * Enables: getQuestionsByTags(["pcr"]) → all PCR-related questions
   */
  tags?: string[];
}
```

### Example 3: Barrel Update (biologie/index.ts)

```typescript
// Source: Pattern from existing barrel structure
import type { Kapitel } from '../types';

import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';

export const biologieKapitel: Kapitel[] = [
  bioKap1,
  bioKap7,
  bioKap8,
];
```

### Example 4: Validation for SYNC-04 (Stichwortliste Update)

```typescript
// Pseudo-code for Phase 2 completion task
function completeStichwortEntry(stichwordId: string) {
  const entry = allStichworte.find((s) => s.id === stichwordId);
  if (!entry) throw new Error(`Stichwort ${stichwordId} not found`);

  // Before setting abgedeckt: true, verify implementation exists
  const unterkapitel = getUnterkapitelById(entry.linkedChapterId);
  if (!unterkapitel) {
    throw new Error(`Unterkapitel ${entry.linkedChapterId} does not exist`);
  }

  // Verify minimum 5 questions
  if (!unterkapitel.selfTest || unterkapitel.selfTest.length < 5) {
    throw new Error(`${stichwordId}: minimum 5 questions required, found ${unterkapitel.selfTest?.length || 0}`);
  }

  // Verify all questions have tags
  const untagged = unterkapitel.selfTest.filter((q) => !q.tags || q.tags.length === 0);
  if (untagged.length > 0) {
    throw new Error(`${stichwordId}: ${untagged.length} questions missing tags`);
  }

  // Update Stichwortliste
  entry.abgedeckt = true;  // ✅ SYNC-04 requirement
}

// Phase 2 completion: set all 8 topics to abgedeckt: true
["bio-7-01", "bio-7-02", "bio-7-03", "bio-7-04", "bio-7-05", "bio-7-06", "bio-8-03", "bio-8-04"]
  .forEach(completeStichwortEntry);
```

---

## State of the Art

| Aspect | Current Approach | Why It's Used | Evidence |
|--------|-----------------|---------------|----------|
| **Source of Truth** | Stichwortliste (stichworteData.ts) | Official exam spec; 8 neu2026 entries with linkedChapterId + linkedQuestionTags | Phase 1 audit mapped all 8 topics; ready for implementation |
| **Chapter Organization** | Kapitel 7 & 8 with Unterkapitel matching linkedChapterId | Mirrors exam structure; linkedChapterId creates deterministic ID mapping | Existing kap1, kap2 pattern; Phase 2 extends this pattern |
| **Question Tagging** | linkedQuestionTags → SelfTestQuestion.tags | Enables question→topic tracking (SYNC-05); supports future filtering | Stichwortliste linkedQuestionTags field exists; must propagate to questions |
| **Premium UI** | MerksatzBox + QuizQuestion components | Amboss/Apple Health visual standard; glassmorphism + color-coded | Existing components; Phase 2 applies to new chapters |
| **5-Option Format** | All questions must have exactly 5 options | MedAT exam requirement | Global constraint from project memory; enforced via type system |

---

## Open Questions

1. **Content Depth Per Topic**
   - What we know: Minimum 5 questions per topic required (Phase 2 scope)
   - What's unclear: Should each topic have 1 or multiple Unterkapitel? (e.g., "PCR: Principles" + "PCR: Applications" = 2 UK?)
   - Recommendation: Start with 1 Unterkapitel per topic; if content exceeds ~3000 words, split into 2 Unterkapitel

2. **Merksätze and Altfragen Quantity**
   - What we know: merksätze array should be populated (min 2)
   - What's unclear: How many should each Unterkapitel have? (2? 3? 5?)
   - Recommendation: Target 3-5 merksätze per Unterkapitel; each should be 1-2 sentences max

3. **Diagram/SVG Needs**
   - What we know: Project memory mentions 33 SVG diagrams in `/src/components/diagrams/`
   - What's unclear: Which topics (PCR, Genomanalyse, Klonierung) should have diagrams?
   - Recommendation: Research topic; assign diagrams to topics with high visual complexity (PCR cycle, Sequenzierung methods)

4. **isPro/Freemium Marking**
   - What we know: Global context mentions "Freemium-Architektur vorbereiten"; isPro field planned for Phase 8
   - What's unclear: Should new content be marked isPro or free by default?
   - Recommendation: Prepare interface `{ isPro?: boolean }` in Unterkapitel; default false; Phase 8 decides split

5. **Content Sources**
   - What we know: "Lehrbuch + Altfragen kombiniert" per prior decisions
   - What's unclear: Which Lehrbuch for Genetik content? (Campbell, Sadava, IB curriculum?)
   - Recommendation: Document sources in code comments; cite Lehrbuch chapters for traceability

---

## Sources

### Primary (HIGH confidence)

- **Stichwortliste:** `/Users/Luki/medmaster/src/data/stichworteData.ts` (8 neu2026 entries verified; linkedChapterId + linkedQuestionTags fields confirmed)
- **Chapter Type System:** `/Users/Luki/medmaster/src/data/bmsKapitel/types.ts` (Kapitel, Unterkapitel, SelfTestQuestion interfaces)
- **Existing Chapter Pattern:** `/Users/Luki/medmaster/src/data/bmsKapitel/biologie/kap2-zellkern-und-ribosomen.ts` (Unterkapitel structure, merksätze, selfTest patterns)
- **MerksatzBox Component:** `/Users/Luki/medmaster/src/components/chapter/MerksatzBox.tsx` (5 type patterns: merke/altfragen/klinisch/achtung/tipp)
- **QuizQuestion Component:** `/Users/Luki/medmaster/src/components/chapter/QuizQuestion.tsx` (immediate feedback, hints, scoring)
- **Barrel Structure:** `/Users/Luki/medmaster/src/data/bmsKapitel/biologie/index.ts` (biologieKapitel array pattern; must be updated)

### Secondary (MEDIUM confidence)

- **Phase 1 Research:** `/Users/Luki/medmaster/.planning/phases/01-content-audit/01-RESEARCH.md` (Architecture patterns, don't-hand-roll items, pitfalls)
- **Phase 1 Context:** `/Users/Luki/medmaster/.planning/phases/01-content-audit/01-CONTEXT.md` (Premium design decisions, quality benchmarks, Stripe-readiness)
- **Project Memory:** `/Users/Luki/.claude/projects/-Users-Luki-medmaster/memory/MEMORY.md` (Content counts, 5-option format requirement, agent token limits)

---

## Metadata

**Confidence breakdown:**
- **Standard Stack:** HIGH — Direct verification of Stichwortliste 8 entries, Kapitel/Unterkapitel structure, component patterns
- **Architecture:** HIGH — Clear pattern from existing kap2; linkedChapterId matching is deterministic
- **Pitfalls:** MEDIUM — Based on Phase 1 pitfalls + logical analysis of tag/ID misalignment risks
- **Open Questions:** LOW — Require user decisions on content depth, diagram allocation, isPro defaults

**Research date:** 2026-02-19
**Valid until:** 2026-03-05 (14 days; Phase 2 estimated 2-3 weeks; refresh if scope changes)

**Estimated Phase 2 effort:** 40-60 hours content creation (8 topics × 5-8 hours per topic including questions, merksätze, validation)
