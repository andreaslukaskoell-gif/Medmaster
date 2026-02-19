# BMS Content Quality Audit

**Date:** 2026-02-19
**Scope:** Existing BMS chapters (Biologie, Chemie, Physik, Mathematik)
**Purpose:** Validate compliance with premium design standards (MerksatzBox + QuizQuestion patterns)

## Executive Summary

**Chapters audited:** 2 (bio-kap1, bio-kap2)
**Empty subjects:** Chemie, Physik, Mathematik (0 chapters)

**Overall compliance status:**
- **MerksatzBox pattern:** 0% compliant (0/2 chapters)
- **QuizQuestion pattern:** 0% compliant (0/2 chapters)
- **Premium visual quality:** Non-compliant (all chapters use plain markdown instead of component rendering)

**Key finding:** All existing chapters store content as markdown strings in the `content` field instead of using structured data fields (merksätze array, altfrage object, klinischerBezug). This architectural pattern prevents premium component rendering.

---

## 1. MerksatzBox Compliance

### Premium Pattern Benchmark

**Expected structure (from MerksatzBox.tsx):**

The MerksatzBox component supports 5 types for premium visual presentation:
1. **merke** (💡 Merke) - Core learning points
2. **altfragen** (🎯 Altfragen-Klassiker) - Exam-relevant content
3. **klinisch** (🏥 Klinischer Bezug) - Clinical context
4. **achtung** (⚠️ Achtung) - Important warnings
5. **tipp** (✨ Tipp) - Learning tips

**Expected data structure:**
```typescript
interface Unterkapitel {
  merksätze: string[];           // Array of strings to render with MerksatzBox
  altfrage?: {                   // Exam questions marked separately
    question: string;
    answer: string;
  };
  klinischerBezug?: string;      // Clinical highlights
}
```

### Compliance Table

| Kapitel ID | Unterkapitel | Merksätze count | Types used | Altfragen marked | Klinischer Bezug | Status |
|------------|--------------|-----------------|------------|------------------|------------------|--------|
| bio-kap1 | bio-kap1-uk01 | 0 | None | No | No | ❌ Non-compliant |
| bio-kap2 | bio-kap2-uk01 | 0 | None | No | No | ❌ Non-compliant |

### Violations

#### bio-kap1: Die Zelle
**Unterkapitel:** bio-kap1-uk01 (Zellstruktur)

**Violations:**
1. **Empty merksätze array:** Field exists but is empty (`merksätze: []`)
2. **Merksatz stored in markdown:** Content field contains `> **Merksatz:** Alle Lebewesen bestehen aus Zellen.` as plain HTML instead of structured data
3. **No MerksatzBox types:** Only default "merke" type could be inferred from markdown
4. **No altfrage field:** Missing exam question marking
5. **No klinischerBezug field:** Missing clinical context
6. **Plain HTML rendering:** Uses blockquote markdown instead of MerksatzBox component

**Actual structure:**
```typescript
{
  content: `# Zellstruktur
...
> **Merksatz:** Alle Lebewesen bestehen aus Zellen.`,
  merksätze: [],  // Empty!
  selfTest: []
}
```

**Expected structure:**
```typescript
{
  content: `# Zellstruktur
...`,
  merksätze: [
    "Alle Lebewesen bestehen aus Zellen."
  ],
  selfTest: []
}
```

---

#### bio-kap2: Zellkern und Ribosomen
**Unterkapitel:** bio-kap2-uk01 (Überblick und biologische Bedeutung)

**Violations:**
1. **Empty merksätze array:** Field exists but is empty (`merksätze: []`)
2. **Multiple merksätze stored in markdown:** Content field contains 7 merksätze embedded as `**Merksatz:**` blocks instead of structured array
3. **No MerksatzBox types:** All merksätze are default "merke" type; no use of altfragen, klinisch, achtung, or tipp types
4. **No altfrage field:** Missing exam question marking (chapter includes 6 control questions but not marked as altfragen)
5. **No klinischerBezug field:** Missing clinical context
6. **Plain markdown rendering:** Uses bold text instead of MerksatzBox component with premium visual styling

**Actual structure:**
```typescript
{
  content: `# Zellkern und Ribosomen
...
**Merksatz:** Der Zellkern organisiert und schützt die DNA, Ribosomen setzen diese Information in Proteine um.
...
**Merksatz:** Chromatin besteht aus DNA und Proteinen...
...
## Kontrollfragen
1. Welche Struktur ist typischerweise Bestandteil des Zellkerns?
   A) Zentriol
   B) Nukleolus
   ...`,
  merksätze: [],  // Empty!
  selfTest: []    // Empty despite 6 questions in content!
}
```

**Expected structure:**
```typescript
{
  content: `# Zellkern und Ribosomen
[Main content without embedded merksätze]`,
  merksätze: [
    "Der Zellkern organisiert und schützt die DNA, Ribosomen setzen diese Information in Proteine um.",
    "Chromatin besteht aus DNA und Proteinen und kann als Euchromatin oder Heterochromatin vorliegen; der Chromosomensatz kann haploid, diploid oder polyploid sein.",
    "Die Kernhülle ist eine porendurchsetzte Doppelmembran, deren äußere Membran in das raue ER übergeht und deren innere Seite von der Kernlamina gestützt wird.",
    "Im Zellkern finden Replikation und Transkription statt, wodurch er die Grundlage für Zellteilung und Proteinbiosynthese schafft.",
    "Ribosomen bestehen aus rRNA und Proteinen, werden im Nukleolus vormontiert und führen im Zytoplasma die Translation durch.",
    "Freie Ribosomen erzeugen vor allem zelleigene Proteine, gebundene Ribosomen hauptsächlich Export- und Membranproteine.",
    "Zelleigene Proteine werden durch Ubiquitin markiert und anschließend im Proteasom abgebaut, während Fremdproteine meist in Lysosomen zerlegt werden."
  ],
  altfrage: {
    question: "Kontrollfragen 1-6",
    answer: "See selfTest array"
  },
  selfTest: [
    {
      question: "Welche Struktur ist typischerweise Bestandteil des Zellkerns?",
      options: ["Zentriol", "Nukleolus", "Lysosom", "Peroxisom", "Golgi-Vesikel"],
      correctIndex: 1,
      explanation: "Der Nukleolus ist der Ort der ribosomalen RNA-Synthese und befindet sich im Zellkern.",
      hints: ["Überlege: Welche Struktur ist für die Ribosomen-Bildung zuständig?"]
    },
    // ... remaining 5 questions
  ]
}
```

---

### Summary: MerksatzBox Pattern Gaps

**Architectural issue:** All chapters use a legacy markdown-centric pattern instead of the structured data model defined in types.ts.

**Migration required:**
1. Extract merksätze from markdown `**Merksatz:**` blocks → populate `merksätze` array
2. Identify exam-relevant merksätze → mark with type="altfragen"
3. Add clinical context → populate `klinischerBezug` field
4. Add warnings/tips → use types "achtung" and "tipp" where appropriate
5. Update rendering logic to use MerksatzBox component instead of markdown blockquotes

**Recommendation for Phase 3 (Content Elevation):** Create migration script to convert legacy markdown chapters to structured data model before adding new premium content.

---

## 2. QuizQuestion Compliance

### Premium Pattern Benchmark

**Expected structure (from QuizQuestion.tsx):**

The QuizQuestion component implements Socratic learning with:
1. **Hints array:** Progressive hints before solution reveal ("Gib mir einen Tipp")
2. **Textbook explanations:** Detailed "why" explanations, not just "correct/incorrect"
3. **5-option format:** MedAT standard (A-E)
4. **Immediate feedback:** Visual feedback with glassmorphism styling
5. **Second attempt:** Allow retry after hints (50% XP)

**Expected data structure:**
```typescript
interface SelfTestQuestion {
  question: string;
  options: string[];          // Must be exactly 5 options
  correctIndex: number;
  explanation: string;        // Textbook-level detail
  hints?: string[];           // Socratic hints (recommended: 2-3 hints)
}
```

### Compliance Table

| Kapitel ID | Unterkapitel | Questions count | Have hints | Textbook explanations | Tags present | 5 options | Status |
|------------|--------------|-----------------|------------|----------------------|--------------|-----------|--------|
| bio-kap1 | bio-kap1-uk01 | 0 | N/A | N/A | N/A | N/A | ❌ No questions |
| bio-kap2 | bio-kap2-uk01 | 0 | N/A | N/A | N/A | N/A | ❌ No questions |

### Violations

#### bio-kap1: Die Zelle
**Violations:**
1. **Empty selfTest array:** No questions defined despite being a test chapter (filename: `kap1-die-zelle-test.ts`)
2. **No structured questions:** Content only contains minimal placeholder text
3. **Missing all QuizQuestion features:** No hints, explanations, or interactive elements

**Impact:** Chapter filename suggests test focus but provides no quiz functionality.

---

#### bio-kap2: Zellkern und Ribosomen
**Violations:**
1. **Empty selfTest array:** `selfTest: []` despite 6 control questions embedded in markdown
2. **Questions stored in markdown:** "Kontrollfragen" section in content field instead of selfTest array
3. **Missing answers/explanations:** Questions list options but no correct answers or explanations provided
4. **No hints:** Questions provide no Socratic guidance
5. **Incomplete options:** Some questions appear to have 5 options but not verified (embedded in markdown string)
6. **No tags field:** Missing question tagging for SYNC-05 requirement

**Actual markdown structure:**
```markdown
## Kontrollfragen

1. Welche Struktur ist typischerweise Bestandteil des Zellkerns?
   A) Zentriol
   B) Nukleolus
   C) Lysosom
   D) Peroxisom
   E) Golgi-Vesikel

2. Welche Aussage zur Kernhülle ist richtig?
   A) Sie besteht aus einer einfachen Membran ohne Poren.
   ...
```

**Expected structured data:**
```typescript
selfTest: [
  {
    question: "Welche Struktur ist typischerweise Bestandteil des Zellkerns?",
    options: [
      "Zentriol",
      "Nukleolus",
      "Lysosom",
      "Peroxisom",
      "Golgi-Vesikel"
    ],
    correctIndex: 1,
    explanation: "Der Nukleolus (Kernkörperchen) ist eine nicht-membranumhüllte Struktur im Zellkern, die der Bildung ribosomaler Untereinheiten dient. Zentriolen befinden sich im Zentrosom außerhalb des Kerns, während Lysosomen, Peroxisomen und Golgi-Vesikel separate Organellen im Zytoplasma darstellen.",
    hints: [
      "Überlege: Welche Struktur ist für die Ribosomen-Bildung zuständig?",
      "Der Nukleolus wird im Kapitel als Ort der rRNA-Synthese beschrieben."
    ]
  },
  {
    question: "Welche Aussage zur Kernhülle ist richtig?",
    options: [
      "Sie besteht aus einer einfachen Membran ohne Poren.",
      "Ihre äußere Membran geht in das raue endoplasmatische Retikulum über.",
      "Sie enthält keine Transportmechanismen für RNA.",
      "Sie ist nur in Pflanzenzellen vorhanden.",
      "Sie trennt ausschließlich Mitochondrien vom Zytoplasma."
    ],
    correctIndex: 1,
    explanation: "Die Kernhülle besteht aus einer Doppelmembran mit Kernporen. Die äußere Membran steht in direkter Verbindung mit dem rauen ER und trägt ebenfalls Ribosomen. Kernporen ermöglichen den kontrollierten Transport von RNA und Proteinen. Die Kernhülle ist in allen eukaryotischen Zellen vorhanden, nicht nur in Pflanzenzellen.",
    hints: [
      "Denke an die Verbindung zwischen Kern und ER.",
      "Das Kapitel erwähnt, dass die äußere Kernmembran direkt in ein Organell übergeht."
    ]
  }
  // ... remaining 4 questions
]
```

---

### Tag Linkage Gaps (SYNC-05 Requirement)

**Requirement:** Questions must be tagged to enable bi-directional linking with Stichwortliste entries.

**Current state:**
- `SelfTestQuestion` interface does NOT have a `tags` field
- No questions have tag metadata
- No linkage to Stichwortliste entries via `linkedQuestionTags`

**Architectural gap:**
```typescript
// Current interface (types.ts)
export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
}

// Required interface for SYNC-05
export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  tags?: string[];  // ← MISSING FIELD
}
```

**Recommendation:** Add `tags?: string[]` field to SelfTestQuestion interface in Phase 2 or 3. This field will store question tags matching Stichwortliste `linkedQuestionTags` values, enabling:
1. Questions to be discovered via keyword search
2. Stichwortliste entries to display "related questions" count
3. Freemium tier assignment based on tag importance

**Implementation notes:**
- Tags should follow format: `[subject]-[topic]-[subtopic]` (e.g., `bio-zellkern-nukleolus`)
- Tags must match entries in Stichwortliste for cross-referencing
- High-priority tags (Altfragen-relevant) should be marked for Pro tier

---

### Option Count Compliance (MedAT Format)

**Requirement:** All questions must have exactly 5 options (A-E) per MedAT exam format.

**Current state:**
- Cannot verify option count for bio-kap2 questions (embedded in markdown)
- No structured questions to audit

**Action required:** Once questions migrated to selfTest array, verify all have `options.length === 5`.

---

## 3. Freemium Tier Recommendations (Phase 8 Preparation)

**Context:** Project will implement Stripe-based freemium model. Content must be marked for tier assignment.

### Suggested Pro Content Markers

**High-priority topics (Pro-only):**
1. **Altfragen-relevante Inhalte:** MerksatzBox type="altfragen" content
2. **Klinischer Bezug:** MerksatzBox type="klinisch" content (real-world application)
3. **Advanced questions:** SelfTestQuestion with tags indicating exam frequency
4. **Complete chapters:** Chapters marked as "exam essential" in curriculum

**Freemium tier content:**
1. **Basic Merksätze:** MerksatzBox type="merke" (core learning points)
2. **Introductory questions:** First 1-2 questions per chapter
3. **Chapter overviews:** Section 1 of each Unterkapitel (context setting)

### Implementation Strategy

**Phase 8 preparation (current):**
- Document freemium split in QUALITY-AUDIT.md (this file)
- Tag questions with priority markers during migration

**Phase 8 execution:**
- Add `isPro: boolean` field to Unterkapitel interface
- Add `isPro?: boolean` field to SelfTestQuestion interface
- Implement UI checks before rendering Pro content
- Add paywall component for Pro-only sections

**Recommended split for bio-kap2:**
```typescript
// Example: Freemium vs Pro markers
{
  id: 'bio-kap2-uk01',
  isPro: false,  // First Unterkapitel is free (overview)
  merksätze: [
    { text: "...", type: "merke", isPro: false },     // Free
    { text: "...", type: "altfragen", isPro: true },  // Pro
    { text: "...", type: "klinisch", isPro: true }    // Pro
  ],
  selfTest: [
    { question: "...", isPro: false },  // First question free
    { question: "...", isPro: true },   // Remaining questions Pro
    // ...
  ]
}
```

**Rationale:**
- Freemium users see chapter structure + basic learning points (enough to understand topic)
- Pro users get exam-relevant highlights, clinical context, and full question bank
- Conversion funnel: "Unlock Altfragen-Klassiker to see exam-relevant content"

---

## 4. Summary and Recommendations

### Compliance Overview

**MerksatzBox pattern:**
- 0/2 chapters compliant
- All chapters use legacy markdown pattern
- No use of premium MerksatzBox types (altfragen, klinisch, achtung, tipp)
- Migration to structured data model required

**QuizQuestion pattern:**
- 0/2 chapters compliant
- All questions embedded in markdown instead of selfTest arrays
- No hints, textbook explanations, or interactive features
- SelfTestQuestion.tags field missing (SYNC-05 blocker)

### Architectural Gaps

1. **Data model mismatch:** types.ts defines structured fields (merksätze, altfrage, klinischerBezug) but content stored as markdown strings
2. **Missing tags field:** SelfTestQuestion interface lacks tags field for SYNC-05 requirement
3. **No freemium markers:** No isPro field for Phase 8 tier assignment
4. **Rendering mismatch:** Components expect structured data but receive markdown strings

### Migration Path (Phase 3)

**Step 1: Extend SelfTestQuestion interface**
```typescript
export interface SelfTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hints?: string[];
  tags?: string[];      // NEW: for SYNC-05
  isPro?: boolean;      // NEW: for Phase 8
}
```

**Step 2: Create migration script**
- Parse markdown content to extract merksätze, questions, clinical context
- Populate structured fields in Unterkapitel objects
- Validate option counts (must be 5)
- Generate hints for existing questions (manual review recommended)

**Step 3: Update rendering logic**
- Remove markdown parsing for merksätze
- Render merksätze via MerksatzBox component with appropriate types
- Render questions via QuizQuestion component with hints/explanations

**Step 4: Content enrichment**
- Add missing explanations (textbook-level detail)
- Add Socratic hints (2-3 per question)
- Mark altfragen-relevant content (type="altfragen")
- Add clinical context where appropriate
- Tag questions for Stichwortliste linkage

### Priority Actions

**Immediate (Phase 1 completion):**
- [x] Document current state in QUALITY-AUDIT.md
- [x] Identify architectural gaps (tags field, isPro field)
- [x] Recommend migration strategy

**Phase 2 (Architecture):**
- [ ] Add tags field to SelfTestQuestion interface
- [ ] Add isPro field to Unterkapitel and SelfTestQuestion interfaces
- [ ] Design migration script specification

**Phase 3 (Content Elevation):**
- [ ] Migrate bio-kap1 and bio-kap2 to structured data model
- [ ] Add hints and textbook explanations to existing questions
- [ ] Mark altfragen-relevant and clinical content with appropriate types
- [ ] Validate 5-option format for all questions

**Phase 8 (Monetization):**
- [ ] Implement isPro checks in UI
- [ ] Add paywall component
- [ ] Mark high-value content as Pro tier

---

## Appendix: Benchmark Example

**Note:** No existing chapter meets premium compliance standards. Below is the target pattern for Phase 3 migration.

### Target Structure: bio-kap2-uk01 (After Migration)

```typescript
{
  id: 'bio-kap2-uk01',
  title: '1. Überblick und biologische Bedeutung',
  content: `# Zellkern und Ribosomen

## 1. Überblick und biologische Bedeutung

Eukaryotische Zellen sind in funktionelle Kompartimente gegliedert. Zwei zentrale Elemente dieser Organisation sind der Zellkern als Träger und Verwalter der genetischen Information sowie die Ribosomen als Orte der Proteinherstellung...

[Content continues without embedded merksätze or questions]`,

  merksätze: [
    "Der Zellkern organisiert und schützt die DNA, Ribosomen setzen diese Information in Proteine um.",
    "Chromatin besteht aus DNA und Proteinen und kann als Euchromatin oder Heterochromatin vorliegen; der Chromosomensatz kann haploid, diploid oder polyploid sein.",
    "Die Kernhülle ist eine porendurchsetzte Doppelmembran, deren äußere Membran in das raue ER übergeht und deren innere Seite von der Kernlamina gestützt wird.",
    "Im Zellkern finden Replikation und Transkription statt, wodurch er die Grundlage für Zellteilung und Proteinbiosynthese schafft.",
    "Ribosomen bestehen aus rRNA und Proteinen, werden im Nukleolus vormontiert und führen im Zytoplasma die Translation durch.",
    "Freie Ribosomen erzeugen vor allem zelleigene Proteine, gebundene Ribosomen hauptsächlich Export- und Membranproteine.",
    "Zelleigene Proteine werden durch Ubiquitin markiert und anschließend im Proteasom abgebaut, während Fremdproteine meist in Lysosomen zerlegt werden."
  ],

  altfrage: {
    question: "Welche Strukturen und Prozesse sind charakteristisch für den Zellkern?",
    answer: "Nukleolus, Kernhülle mit Poren, Replikation, Transkription"
  },

  klinischerBezug: "Mutationen in Kernlamina-Proteinen (Laminopathien) führen zu Erkrankungen wie Muskeldystrophie oder vorzeitiger Alterung (Progerie). Ribosomale Dysfunktionen sind mit verschiedenen Krebsarten assoziiert.",

  selfTest: [
    {
      question: "Welche Struktur ist typischerweise Bestandteil des Zellkerns?",
      options: ["Zentriol", "Nukleolus", "Lysosom", "Peroxisom", "Golgi-Vesikel"],
      correctIndex: 1,
      explanation: "Der Nukleolus (Kernkörperchen) ist eine nicht-membranumhüllte Struktur im Zellkern, die der Bildung ribosomaler Untereinheiten dient. Zentriolen befinden sich im Zentrosom außerhalb des Kerns, während Lysosomen, Peroxisomen und Golgi-Vesikel separate Organellen im Zytoplasma darstellen.",
      hints: [
        "Überlege: Welche Struktur ist für die Ribosomen-Bildung zuständig?",
        "Der Nukleolus wird im Kapitel als Ort der rRNA-Synthese beschrieben."
      ],
      tags: ["bio-zellkern-nukleolus", "bio-zellorganellen"],
      isPro: false
    },
    {
      question: "Welche Aussage zur Kernhülle ist richtig?",
      options: [
        "Sie besteht aus einer einfachen Membran ohne Poren.",
        "Ihre äußere Membran geht in das raue endoplasmatische Retikulum über.",
        "Sie enthält keine Transportmechanismen für RNA.",
        "Sie ist nur in Pflanzenzellen vorhanden.",
        "Sie trennt ausschließlich Mitochondrien vom Zytoplasma."
      ],
      correctIndex: 1,
      explanation: "Die Kernhülle besteht aus einer Doppelmembran mit Kernporen. Die äußere Membran steht in direkter Verbindung mit dem rauen ER und trägt ebenfalls Ribosomen. Kernporen ermöglichen den kontrollierten Transport von RNA und Proteinen. Die Kernhülle ist in allen eukaryotischen Zellen vorhanden, nicht nur in Pflanzenzellen.",
      hints: [
        "Denke an die Verbindung zwischen Kern und ER.",
        "Das Kapitel erwähnt, dass die äußere Kernmembran direkt in ein Organell übergeht."
      ],
      tags: ["bio-zellkern-kernhülle", "bio-endomembransystem"],
      isPro: true
    }
    // ... remaining questions
  ]
}
```

**Rendering with premium components:**

```tsx
{/* Merksätze rendered with MerksatzBox component */}
{unterkapitel.merksätze.map((text, i) => (
  <MerksatzBox key={i} text={text} type="merke" />
))}

{/* Altfrage marked with special type */}
{unterkapitel.altfrage && (
  <MerksatzBox
    text={`${unterkapitel.altfrage.question}: ${unterkapitel.altfrage.answer}`}
    type="altfragen"
  />
)}

{/* Clinical context highlighted */}
{unterkapitel.klinischerBezug && (
  <MerksatzBox text={unterkapitel.klinischerBezug} type="klinisch" />
)}

{/* Questions with interactive hints */}
{unterkapitel.selfTest.map((q, i) => (
  <QuizQuestion
    key={i}
    question={q}
    questionNumber={i + 1}
    onAnswerChange={handleAnswer}
  />
))}
```

---

**End of Quality Audit**
