---
phase: 04-structure-reorganization
plan: 01
subsystem: data-layer
tags: [foundation, types, metadata, color-system]
dependency_graph:
  requires: []
  provides:
    - STRUCT-01: Centralized color system for Premium-Buckets
    - STRUCT-02: Extended Kapitel type with sequence metadata
    - sequence-foundation: Data foundation for lernlogische Abfolge
  affects:
    - src/data/bmsKapitel/types.ts
    - src/data/bmsKapitel/biologie/index.ts
    - UI components (future: can now use getSubjectColors)
tech_stack:
  added:
    - colors.ts: Premium-Bucket color constants
  patterns:
    - Spread operator for metadata enrichment
    - JSDoc-based API documentation
    - Validation helpers for data quality gates
key_files:
  created:
    - src/data/bmsKapitel/colors.ts
  modified:
    - src/data/bmsKapitel/types.ts
    - src/data/bmsKapitel/biologie/index.ts
    - src/data/bmsKapitel/index.ts
decisions:
  - title: "Gaps in sequence numbers preserved"
    rationale: "Chapters 2-6 and 9 don't exist yet. Preserve logical positions (1, 7, 8) for future expansion."
    impact: "Easier to insert new chapters without renumbering"
  - title: "Smart-links bidirectional for related chapters"
    rationale: "bio-kap7 and bio-kap8 link to each other (Methoden ↔ Humangenetik)"
    impact: "Enables cross-navigation in future UI"
  - title: "Validation helpers non-blocking"
    rationale: "console.warn instead of throwing errors"
    impact: "Development feedback without breaking builds"
metrics:
  duration: 139
  completed: 2026-02-19T18:03:22Z
  tasks: 4
  commits: 4
  files_created: 1
  files_modified: 3
---

# Phase 4 Plan 01: Data Layer Foundation Summary

**One-liner:** Extended Kapitel type with sequence metadata and created centralized Premium-Bucket color system to enable data-driven chapter ordering and subject theming.

## What Was Built

Established the data layer foundation for lernlogische Abfolge by:

1. **Extended Kapitel interface** with three new optional fields:
   - `sequence?: number` - Learning order position (1 = first chapter)
   - `sequenceTitle?: string` - Compact roadmap labels
   - `linkedChapters?: string[]` - Smart cross-chapter navigation

2. **Created centralized color system** (`colors.ts`):
   - SUBJECT_COLORS map with all 4 BMS subjects
   - Biologie: emerald, Chemie: red, Physik: blue, Mathematik: violet
   - 8 color variants per subject (bg, text, border, button, progress, icon + dark mode)
   - `getSubjectColors()` helper for type-safe theme access

3. **Applied learning sequence** to all 3 Biologie chapters:
   - bio-kap1 (Zelle): sequence 1
   - bio-kap7 (Methoden): sequence 7
   - bio-kap8 (Humangenetik): sequence 8
   - Preserved gaps (2-6, 9) for future chapters

4. **Added validation helpers** for data quality:
   - `validateChapterSequence()` - Detects missing sequence metadata
   - `validateSmartLinks()` - Detects broken linkedChapters references

## Technical Achievements

- TypeScript compilation succeeds with no errors
- All 3 Biologie chapters have complete sequence metadata
- Validation helpers exported and ready for use in development
- Color system provides 69 lines of reusable theming constants
- JSDoc documentation for all new fields and functions

## Deviations from Plan

None - plan executed exactly as written.

## Next Steps

This foundation enables:
- Plan 04-02: BMS navigation component using sequence metadata
- Future plans: Smart-link UI components using linkedChapters
- Future plans: Premium-Bucket theming using SUBJECT_COLORS

## Self-Check: PASSED

**Created files:**
- src/data/bmsKapitel/colors.ts ✅

**Modified files:**
- src/data/bmsKapitel/types.ts ✅
- src/data/bmsKapitel/biologie/index.ts ✅
- src/data/bmsKapitel/index.ts ✅

**Commits:**
- b1f6046: feat(04-01): extend Kapitel interface with sequence metadata ✅
- cb85a06: feat(04-01): create centralized SUBJECT_COLORS map ✅
- f5deadf: feat(04-01): apply learning sequence to Biologie chapters ✅
- e80beff: feat(04-01): add validation helpers to index.ts ✅

All files exist and all commits are in git history.
