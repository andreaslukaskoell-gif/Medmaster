# Phase 4: Structure Reorganization - Research

**Researched:** 2026-02-19
**Domain:** BMS Content Architecture, URL Routing, Lernlogische Abfolge (Learning Sequence), Chapter Navigation, Progress Tracking
**Confidence:** HIGH

## Summary

Phase 4 reorganizes BMS content by implementing a **lernlogische Abfolge** (learning sequence) instead of the current alphabetical chapter order, creating **4 Premium-Buckets** with distinct colors, establishing **Fach Overview Pages** with roadmaps, and introducing **Smart-Links** between chapters. Research reveals:

1. **Current structure** uses URL patterns `/bms/:fach/:kapitel` (already in place via bmsRoutes.ts), but chapters are not sequenced logically—they appear in data-file order
2. **Biologie learning sequence** is defined (Zelle → Gewebe → Organe → Frühentwicklung → Genetik → Molekulare Genetik → Methoden → Humangenetik → Ökologie) and maps to 9 distinct chapters
3. **Premium-Bucket colors** should be applied via Tailwind classes (emerald/red/blue/violet) and integrated into subject metadata in `bmsKapitel/index.ts`
4. **Overview pages** already partially exist (subject detail view in BMS.tsx showing chapter roadmap + progress bar)—Phase 4 enhances with visual roadmap UI and consistent Fortschrittsanzeige
5. **Smart-Links** require a `linkedChapters` field in Kapitel type and navigation component in BMSKapitelView.tsx to show related chapters
6. **Data dependencies**: Phase 3 completes quality upgrades (glassmorphism, QuizQuestion, MerksatzBox); Phase 4 reorders/links content without breaking existing component structure

**Primary recommendation:** Implement Phase 4 as three coordinated subtasks: (1) Define lernlogische Abfolge mappings in data layer, (2) enhance Kapitel type with sequence metadata and smart-link references, (3) create premium-bucket color system in UI components, (4) add FachOverview component with visual roadmap.

---

<user_constraints>

## User Constraints (from CONTEXT.md)

No CONTEXT.md exists for Phase 4—user chose to continue without design decisions. Research should explore options and recommend best approaches.

Research should answer:
- How to implement 4 Premium-Buckets (colors assigned)
- Where lernlogische Abfolge lives (data vs. component)
- How to structure Fach Overview pages
- URL structure implications (/bms/:fach/:kapitel must work)
- Smart-Link implementation pattern

</user_constraints>

<phase_requirements>

## Phase Requirements (MUST Address)

| ID | Description | Current State |
|----|----|-----------|
| **STRUCT-01** | 4 Premium-Buckets (Bio=emerald, Chemie=red, Physik=blue, Math=violet) implementiert | Not yet; colors defined, need data + UI integration |
| **STRUCT-02** | Biologie-Kapitel in lernlogischer Abfolge: Zelle → Gewebe → Organe → Frühentwicklung → Genetik → Molekulare Genetik → Methoden → Humangenetik → Ökologie | Partially exist (kap1-zelle, kap7-methoden, kap8-humangenetik in biologie/); others missing |
| **STRUCT-03** | Jedes Fach hat eine Übersichtsseite mit Kapitel-Roadmap und Fortschrittsanzeige | Partially exists; BMS.tsx shows subject detail, need enhanced FachOverview |
| **STRUCT-04** | Kapitel-Navigation nutzt konsistente URL-Struktur (`/bms/:fach/:kapitel`) | Already works; bmsRoutes.ts handles mapping |
| **STRUCT-05** | Smart-Links zwischen Kapiteln funktionieren (Querverweise auf verwandte Themen) | Not yet; need linkedChapters metadata + component |

</phase_requirements>

## Standard Stack

### Core Libraries (Already Installed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React Router | 7.13.0 | URL routing, navigation | Already handles /bms/:fach/:kapitel patterns; no changes needed to route structure |
| Tailwind CSS | 4.1.18 | Color system, responsive design | Native color-based class system (emerald/red/blue/violet) for bucket colors |
| Zustand | 5.0.11 | State management | Already used for progress/completion tracking; can extend for learning sequence |
| Framer Motion | 12.34.1 | Animations for reveals | Already used in Phase 3 components; can animate roadmap reveals |

### Data/Types (Existing)

| Module | Purpose | Current Usage |
|--------|---------|---|
| `/src/data/bmsKapitel/types.ts` | `Kapitel` interface | Defines chapter structure; needs `sequence` and `linkedChapters` fields |
| `/src/data/bmsKapitel/index.ts` | Chapter index/aggregation | Entry point; can define lernlogische Abfolge here |
| `/src/lib/bmsRoutes.ts` | URL ↔ chapter ID mapping | Already handles /bms/:fach/:kapitel routing |
| `/src/pages/BMS.tsx` | Subject + Chapter detail views | Shows subject overview and chapter list; enhancement point for roadmap |
| `/src/pages/BMSKapitelView.tsx` | Chapter detail + navigation | Shows single chapter; enhancement point for smart-links |

### Installation

**No new npm packages needed.** All required libraries already installed. Phase 4 is architectural enhancement using existing stack.

---

## Architecture Patterns

### Pattern 1: Lernlogische Abfolge in Data Layer

**What:** Define chapter ordering as metadata in data files, not hardcoded in components. Enables:
- Easy reordering by editing data
- Multiple learning paths (beginner/advanced) in future
- Consistent ordering across all views

**Where to implement:**

```typescript
// /src/data/bmsKapitel/types.ts — extend Kapitel interface
export interface Kapitel {
  id: string;
  title: string;
  subject: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  icon: string;
  unterkapitel: Unterkapitel[];
  estimatedTime: string;
  // NEW FIELDS for Phase 4:
  sequence?: number;           // e.g., Biologie: 1=Zelle, 2=Gewebe, 3=Organe, ...
  sequenceTitle?: string;      // e.g., "Zellstruktur und Funktion"
  linkedChapters?: string[];   // IDs of related chapters for smart-links
}
```

**Why this pattern:**
- Data-driven ordering is maintainable long-term
- UI components don't hardcode sequence logic
- Enables sorting in chapter lists with `.sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))`

---

### Pattern 2: Premium-Bucket Color System

**What:** Map subject → color via metadata, apply consistently in all UI contexts.

**Implementation:**

```typescript
// /src/data/bmsKapitel/index.ts — define color mapping
export const SUBJECT_COLORS = {
  biologie: { bg: 'bg-emerald-100', dark: 'dark:bg-emerald-900/30', text: 'text-emerald-700', border: 'border-emerald-500' },
  chemie: { bg: 'bg-red-100', dark: 'dark:bg-red-900/30', text: 'text-red-700', border: 'border-red-500' },
  physik: { bg: 'bg-blue-100', dark: 'dark:bg-blue-900/30', text: 'text-blue-700', border: 'border-blue-500' },
  mathematik: { bg: 'bg-violet-100', dark: 'dark:bg-violet-900/30', text: 'text-violet-700', border: 'border-violet-500' },
} as const;

// Use in components:
const colors = SUBJECT_COLORS[kapitel.subject];
<div className={`${colors.bg} ${colors.dark} ${colors.text}`}>
```

**Why this pattern:**
- Single source of truth for colors (maintainable)
- Reusable across all BMS components
- Easy to adjust color scheme globally

---

### Pattern 3: Fach Overview Page Structure

**What:** Enhance BMS.tsx subject detail view with visual roadmap showing all chapters in learning sequence.

**Current state:** BMS.tsx already shows:
- Subject title + icon
- "N Kapitel mit M Unterkapiteln" summary
- Progress bar (completed/total Unterkapitel)
- Chapter list with individual progress

**Enhancement for Phase 4:**
- Add **visual roadmap** (horizontal timeline or tree view) showing chapter sequence with icons
- Add **Fortschrittsanzeige per chapter** (not just per subject)
- Highlight **currently active chapter** in roadmap
- Show **estimated time per chapter** if available

**Example structure:**
```
┌─────────────────────────────────────────────────────────┐
│ Biologie - Roadmap                                      │
├─────────────────────────────────────────────────────────┤
│ 1. Zelle (45min) → 2. Gewebe (30min) → 3. Organe (40min) │
│ 4. Früh... (35min) → 5. Genetik (60min) → 6. Molec... │
│ [▓▓▓▓▓░░░░░░░░░] 3/9 chapters mastered                 │
└─────────────────────────────────────────────────────────┘
```

---

### Pattern 4: Smart-Links Component

**What:** In BMSKapitelView (chapter detail), show related chapters as navigable links.

**Implementation:**
```typescript
// In BMSKapitelView.tsx, after chapter content:
{kapitel.linkedChapters && kapitel.linkedChapters.length > 0 && (
  <div className="space-y-3 mt-8 border-t pt-6">
    <h3 className="font-semibold text-midnight dark:text-slate-100 flex items-center gap-2">
      <ArrowRight className="w-5 h-5 text-primary-500" />
      Verwandte Kapitel
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {linkedChapters.map(ch => (
        <button
          key={ch.id}
          onClick={() => onGoToChapter(ch.id, 0)}
          className={`text-left p-4 rounded-lg border-l-4 ${colors.border} hover:shadow-md transition`}
        >
          <div className="font-medium">{ch.title}</div>
          <div className="text-sm text-slate-600">{ch.subject}</div>
        </button>
      ))}
    </div>
  </div>
)}
```

**Why this pattern:**
- Helps students discover related learning paths
- Supports spaced repetition (revisit earlier chapters from later context)
- Minimal UI overhead (just a card section)

---

### Anti-Patterns to Avoid

- **Hardcoding chapter order in components:** Changes require code edits. Instead: store in data with `sequence` field.
- **Duplicate color definitions:** Define once in SUBJECT_COLORS, import everywhere. Avoid `bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700` scattered across files.
- **Smart-links without metadata:** Avoid manual "chapter 3 relates to chapter 5" hardcoding. Instead: add `linkedChapters` field to data.
- **Mixing roadmap logic into chapter component:** Keep chapter view focused on content. Put roadmap in dedicated FachOverview/component.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Visual timeline/roadmap | Custom D3.js or Canvas timeline | Framer Motion + flexbox grid | Simple horizontal sequence, easy to animate reveals |
| Chapter ordering logic | Manual if-statements per chapter | Data-driven `sequence` field + `.sort()` | Maintainable, scales to 20+ chapters |
| Color theming system | Per-component color prop drilling | SUBJECT_COLORS map + Tailwind classes | Single source of truth, dark mode support built-in |
| Progress calculations | Component-level filtering | Existing adaptive store + derived useMemo | Already handles XP/streaks/completion |

**Key insight:** Phase 4 is primarily a data/metadata problem, not a UI problem. The heavy lifting is adding `sequence` and `linkedChapters` fields to existing data files, then using Tailwind's existing color system and Framer Motion (already in Phase 3) to render.

---

## Common Pitfalls

### Pitfall 1: Sequence Field Becomes Source of Truth Without Ordering

**What goes wrong:** Add `sequence: number` field to Kapitel, but forget to call `.sort()` in component. Chapter list still appears in file-import order, not learning sequence.

**Why it happens:** Component mistakenly assumes data is pre-sorted; sequence field exists but is unused.

**How to avoid:** Always sort in BMSKapitelView and BMS.tsx subject views:
```typescript
const sortedChapters = chaptersForSelectedSubject
  .sort((a, b) => (a.sequence ?? 999) - (b.sequence ?? 999));
```

**Warning signs:**
- Chapter order in UI doesn't match `sequence` values in code
- PR review: "Why is Kapitel 5 appearing before Kapitel 3?"

---

### Pitfall 2: Incomplete Learning Sequence Definition

**What goes wrong:** Define sequence for Biologie (9 chapters), but Chemie/Physik/Mathematik chapters have no `sequence` field. Roadmap works for one subject, breaks for others.

**Why it happens:** Phase 4 focused initially on Biologie; other subjects deferred as "future work." Incomplete migration causes runtime errors.

**How to avoid:** Define `sequence` for ALL chapters in all subjects before rolling out roadmap feature. Use migration helper:
```typescript
// Ensure all chapters have sequence
export const validateChapterSequence = () => {
  const subjects = ['biologie', 'chemie', 'physik', 'mathematik'];
  subjects.forEach(subject => {
    const chapters = getKapitelBySubject(subject);
    const missing = chapters.filter(c => c.sequence === undefined);
    if (missing.length > 0) console.warn(`${subject} missing sequence: ${missing.map(c => c.id).join(', ')}`);
  });
};
```

**Warning signs:**
- Roadmap renders for Biologie, but blank/broken for Chemie
- Console warnings about missing `sequence` fields

---

### Pitfall 3: Smart-Links to Non-Existent Chapters

**What goes wrong:** Kapitel "Genetik" has `linkedChapters: ['math-kap5', 'bio-kap9']`, but bio-kap9 doesn't exist yet. Navigation fails or shows empty links.

**Why it happens:** Manual editing of linkedChapters without validation; chapter gets deleted but linked-from still references it.

**How to avoid:** Add validation in data layer:
```typescript
export const validateSmartLinks = () => {
  const allChapters = alleKapitel;
  const allIds = new Set(allChapters.map(c => c.id));

  allChapters.forEach(chapter => {
    if (chapter.linkedChapters) {
      chapter.linkedChapters.forEach(linkedId => {
        if (!allIds.has(linkedId)) {
          console.warn(`❌ Chapter ${chapter.id} links to missing ${linkedId}`);
        }
      });
    }
  });
};
```

**Warning signs:**
- 404-like errors when clicking smart-links
- Blank sections in "Verwandte Kapitel"

---

### Pitfall 4: Color System Not Applied Consistently

**What goes wrong:** SUBJECT_COLORS defined, but some components still hardcode `'bg-emerald-100'`. Different emerald shades appear depending on component.

**Why it happens:** Copy-paste without centralizing color reference; new developers don't know about SUBJECT_COLORS.

**How to avoid:**
1. Define SUBJECT_COLORS in central location (`/src/data/bmsKapitel/index.ts`)
2. Export and use everywhere: `import { SUBJECT_COLORS } from '@/data/bmsKapitel'`
3. Code review: flag any hardcoded color strings matching Tailwind emerald/red/blue/violet

**Warning signs:**
- Two different emerald shades on same page
- PR review: "Why is Biologie badge darker/lighter than sidebar?"

---

## Code Examples

Verified patterns and implementations:

### Example 1: Adding Sequence Metadata to Kapitel

**Source:** `/src/data/bmsKapitel/types.ts` + `/src/data/bmsKapitel/biologie/index.ts`

```typescript
// types.ts — extend interface
export interface Kapitel {
  id: string;
  title: string;
  subject: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  icon: string;
  unterkapitel: Unterkapitel[];
  estimatedTime: string;
  // NEW:
  sequence?: number;           // Learning sequence position (1 = first)
  sequenceTitle?: string;      // e.g., "Zellstruktur" for roadmap
  linkedChapters?: string[];   // Related chapter IDs
}

// biologie/index.ts — apply to data
import type { Kapitel } from '../types';
import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';

export const biologieKapitel: Kapitel[] = [
  { ...bioKap1, sequence: 1, sequenceTitle: "Zelle", linkedChapters: ['bio-kap2'] },
  { ...bioKap7, sequence: 7, sequenceTitle: "Methoden der Genetik", linkedChapters: ['bio-kap5', 'bio-kap6'] },
  { ...bioKap8, sequence: 8, sequenceTitle: "Humangenetik", linkedChapters: ['bio-kap5', 'bio-kap7'] },
];
```

---

### Example 2: Premium-Bucket Color System

**Source:** Create new file `/src/data/bmsKapitel/colors.ts`

```typescript
export const SUBJECT_COLORS = {
  biologie: {
    bg: 'bg-emerald-100',
    bgDark: 'dark:bg-emerald-900/30',
    text: 'text-emerald-700',
    textDark: 'dark:text-emerald-400',
    border: 'border-l-emerald-500',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    progress: 'bg-emerald-500',
  },
  chemie: {
    bg: 'bg-red-100',
    bgDark: 'dark:bg-red-900/30',
    text: 'text-red-700',
    textDark: 'dark:text-red-400',
    border: 'border-l-red-500',
    button: 'bg-red-600 hover:bg-red-700',
    progress: 'bg-red-500',
  },
  physik: {
    bg: 'bg-blue-100',
    bgDark: 'dark:bg-blue-900/30',
    text: 'text-blue-700',
    textDark: 'dark:text-blue-400',
    border: 'border-l-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700',
    progress: 'bg-blue-500',
  },
  mathematik: {
    bg: 'bg-violet-100',
    bgDark: 'dark:bg-violet-900/30',
    text: 'text-violet-700',
    textDark: 'dark:text-violet-400',
    border: 'border-l-violet-500',
    button: 'bg-violet-600 hover:bg-violet-700',
    progress: 'bg-violet-500',
  },
} as const;

export type SubjectId = keyof typeof SUBJECT_COLORS;

export function getSubjectColors(subject: SubjectId) {
  return SUBJECT_COLORS[subject];
}
```

Use in components:
```typescript
import { getSubjectColors } from '@/data/bmsKapitel/colors';

// In BMS.tsx subject detail view:
const colors = getSubjectColors(selectedSubject);
<div className={`${colors.bg} ${colors.bgDark} ${colors.text} ${colors.textDark} p-4 rounded-lg`}>
  {/* Content */}
</div>
```

---

### Example 3: Sorting Chapters by Sequence

**Source:** `/src/pages/BMS.tsx` — modify chapter list rendering

```typescript
// In BMS.tsx, when rendering subject detail:
const sortedChapters = useMemo(() => {
  if (!Array.isArray(chaptersForSelectedSubject)) return [];

  // Sort by sequence field; chapters without sequence appear at end
  return [...chaptersForSelectedSubject].sort((a, b) => {
    const aSeq = a.sequence ?? 999;
    const bSeq = b.sequence ?? 999;
    return aSeq - bSeq;
  });
}, [chaptersForSelectedSubject]);

// Use sortedChapters in map() instead of unsorted list:
{sortedChapters.map((kap) => (
  // render chapter card
))}
```

---

### Example 4: Visual Roadmap Component

**Source:** Create new component `/src/components/chapter/FachRoadmap.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';
import type { Kapitel } from '@/data/bmsKapitel/types';
import { getSubjectColors } from '@/data/bmsKapitel/colors';
import { ArrowRight } from 'lucide-react';

interface FachRoadmapProps {
  chapters: Kapitel[];
  currentChapterId?: string;
  onSelectChapter?: (chapterId: string) => void;
}

export function FachRoadmap({ chapters, currentChapterId, onSelectChapter }: FachRoadmapProps) {
  if (chapters.length === 0) return null;

  const subject = chapters[0]?.subject;
  if (!subject) return null;

  const colors = getSubjectColors(subject);
  const sorted = [...chapters].sort((a, b) => (a.sequence ?? 999) - (b.sequence ?? 999));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-lg border-l-4 ${colors.border} ${colors.bg} ${colors.bgDark}`}
    >
      <h3 className={`font-semibold ${colors.text} mb-4 flex items-center gap-2`}>
        Lernpfad
      </h3>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {sorted.map((chapter, idx) => (
          <React.Fragment key={chapter.id}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => onSelectChapter?.(chapter.id)}
              className={`px-3 py-2 rounded-md whitespace-nowrap text-sm font-medium transition ${
                currentChapterId === chapter.id
                  ? `${colors.button} text-white`
                  : 'bg-white/50 dark:bg-slate-700/50 hover:bg-white/70'
              }`}
            >
              {chapter.sequence}. {chapter.sequenceTitle || chapter.title}
            </motion.button>

            {idx < sorted.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
```

---

## State of the Art

| Aspect | Current (Phase 3) | Phase 4 Enhancement | When Changed |
|--------|-------------------|-------------------|---|
| Chapter ordering | File-import order (alphabetical by filename) | Lernlogische Abfolge via `sequence` metadata | Phase 4 |
| Subject color scheme | Hardcoded in BMS.tsx subjects array | Centralized SUBJECT_COLORS + applied everywhere | Phase 4 |
| Subject detail view | Basic chapter list + progress bar | Enhanced roadmap + chapter relationships | Phase 4 |
| Navigation between chapters | Next/previous buttons in chapter view | Smart-links to related chapters | Phase 4 |

---

## Open Questions

1. **Should sequence be a number or an enum?**
   - Current recommendation: `number` (1, 2, 3...) — flexible, simple
   - Alternative: `enum ChapterSequence { CELL = 1, TISSUE = 2... }` — type-safe but verbose
   - Decision point: Planner should choose based on desired type safety vs. simplicity trade-off

2. **How granular should smart-links be?**
   - Minimal: linkedChapters at Kapitel level only (current proposal)
   - Enhanced: linkedChapters at Unterkapitel level (more specific recommendations)
   - Decision point: Depends on content complexity; start minimal, enhance later if needed

3. **Should roadmap be hidden on mobile or always visible?**
   - Recommendation: Always visible (scrollable on mobile) — learning sequence is critical context
   - Alternative: Collapsible on mobile to save space
   - Decision point: Planner should verify with UX guidelines

4. **How many chapters exist for Chemie/Physik/Mathematik?**
   - Current state: Biologie=3, Chemie=1, Physik=1, Mathematik=1
   - STRUCT-02 only specifies Biologie sequence; other subjects' sequences are out of scope
   - Decision point: Planner may defer STRUCT-02 for non-Biologie, implement full STRUCT-01/03/04/05

---

## Sources

### Primary (HIGH confidence)

- `/src/data/bmsKapitel/types.ts` — Current Kapitel interface (verified in codebase)
- `/src/data/bmsKapitel/biologie/index.ts` — Biologie chapters currently imported (verified)
- `/src/lib/bmsRoutes.ts` — URL routing logic (verified working)
- `/src/pages/BMS.tsx` — Subject detail view implementation (verified)
- `/src/pages/BMSKapitelView.tsx` — Chapter detail view with navigation (verified)
- `/package.json` — React, Tailwind, Framer Motion versions (verified installed)

### Secondary (MEDIUM confidence)

- Phase 3 RESEARCH.md (section on glassmorphism and Framer Motion patterns)
- Phase 3 PLAN.md files (how component patterns are applied)
- Existing color usage in BMS.tsx subjects array (patterns for SUBJECT_COLORS centralization)

### Tertiary (Verified via code review)

- Adaptive store pattern from useAdaptiveStore (can extend for sequence tracking)
- Breadcrumb navigation pattern in BreadcrumbNav (reuse for roadmap navigation)

---

## Metadata

**Confidence breakdown:**
- Standard stack (React Router, Tailwind, Zustand, Framer Motion): **HIGH** — all verified in package.json and code
- Architecture patterns (data-driven ordering, color system, smart-links): **HIGH** — clear from existing code patterns
- Pitfalls (sequence sorting, validation, consistency): **HIGH** — common issues in content management systems
- Code examples (types, components, sorting): **HIGH** — based on verified existing code

**Research date:** 2026-02-19
**Valid until:** 2026-03-05 (14 days; minimal stack changes expected)
**Status:** Ready for planning phase

---

## Quick Reference: What Phase 4 Must Deliver

| Requirement | Implementation Point | Complexity |
|---|---|---|
| STRUCT-01: Premium-Buckets | SUBJECT_COLORS map + apply in BMS.tsx, chapter cards | LOW |
| STRUCT-02: Biologie sequence | Kapitel.sequence field in biologie/*.ts + sort in UI | MEDIUM |
| STRUCT-03: Fach Overview | Enhance BMS.tsx + create FachRoadmap component | MEDIUM |
| STRUCT-04: URL structure | Already works (/bms/:fach/:kapitel); verify routing | LOW |
| STRUCT-05: Smart-Links | Kapitel.linkedChapters field + component in BMSKapitelView | MEDIUM |

**Total effort estimate:** 2-3 planning documents, ~8-12 implementation tasks covering data migration, component enhancements, and integration testing.
