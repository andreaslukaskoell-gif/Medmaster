---
phase: 01-bms-content-quality
plan: 02
subsystem: content
tags: [bms, chemie, kapitel, stichworte, diagrams, quality-audit]

# Dependency graph
requires:
  - phase: 01-01
    provides: "Audit pattern established (stichworte coverage, diagram assignments, content quality)"
provides:
  - "All 12 chemistry stichworte verified as covered in chapter content"
  - "12 new diagram assignments added across 6 chemistry chapter files"
  - "Content quality baseline for all chemistry chapters (kap1-kap6)"
affects: [01-03, 01-04]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "diagram property on each UK maps to DiagramSVG.tsx DIAGRAM_MAP keys"
    - "Reuse existing 7 chemistry diagram components across multiple UKs where topically relevant"

key-files:
  created: []
  modified:
    - src/data/bmsKapitel/chemie/kap1-atombau-periodensystem.ts
    - src/data/bmsKapitel/chemie/kap6-chemische-bindung.ts
    - src/data/bmsKapitel/chemie/kap4-reaktionen-gleichgewicht.ts
    - src/data/bmsKapitel/chemie/kap5-anorganische-chemie.ts
    - src/data/bmsKapitel/chemie/kap6-organische-chemie.ts

key-decisions:
  - "All 12 Chemie stichworte already abgedeckt -- no content gaps found"
  - "No new SVG components needed -- existing 7 chemistry diagrams cover all topics"
  - "kap2 (Materie/Aggregatzustaende) has no matching diagram components but passes audit-images via markdown SVG refs"
  - "12 diagram assignments added to UKs that had none, using topically matching existing components"

patterns-established:
  - "Chemistry diagram reuse: periodic-table for PSE-related UKs, ph-scale for acid-base UKs, functional-groups for organic UKs"

requirements-completed: [BMS-01, BMS-02]

# Metrics
duration: 8min
completed: 2026-02-26
---

# Phase 1 Plan 2: BMS Kapitel Qualitaets-Audit Chemie Summary

**Chemistry chapter audit: all 12 stichworte verified as covered, 12 diagram assignments added across kap1-kap6 (from 11 to 23 total)**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-26T15:41:46Z
- **Completed:** 2026-02-26T15:50:00Z
- **Tasks:** 3
- **Files modified:** 5

## Accomplishments
- Verified all 12 chemistry stichworte from stichworteData.ts are covered across 47 Unterkapitel in 6 chapter files
- Added 12 new diagram assignments to UKs that had none, bringing total from 11 to 23
- All audits pass: npm run build (0 errors), npm run audit-bms (0 errors, 5187 questions), npm run audit-images (all UKs have 2+ visuals)

## Task Commits

Each task was committed atomically:

1. **Task 1: Audit kap1/kap2/kap6-bindung (Atombau, Materie, Bindungen)** - `37a631d` (feat) - 5 diagram assignments added
2. **Task 2: Audit kap4/kap5 (Reaktionen, Anorganische Chemie)** - `8a9931a` (feat) - 3 diagram assignments added
3. **Task 3: Audit kap6-organische-chemie (Organik, Biomolekuele)** - `63d53fa` (feat) - 4 diagram assignments added

## Files Created/Modified
- `src/data/bmsKapitel/chemie/kap1-atombau-periodensystem.ts` - Added diagrams to ch-1-04 (periodic-table), ch-2-01 (covalent-bond), ch-5-03 (periodic-table)
- `src/data/bmsKapitel/chemie/kap6-chemische-bindung.ts` - Added diagrams to ch-6-03 (covalent-bond), ch-6-04 (enzyme-substrate)
- `src/data/bmsKapitel/chemie/kap4-reaktionen-gleichgewicht.ts` - Added diagram to ch-7-04 (enzyme-substrate)
- `src/data/bmsKapitel/chemie/kap5-anorganische-chemie.ts` - Added diagrams to ch-10-03 (ph-scale), ch-10-04 (ph-scale)
- `src/data/bmsKapitel/chemie/kap6-organische-chemie.ts` - Added diagrams to ch-12-02 (functional-groups), ch-12-04 (functional-groups), ch-13-01 (enzyme-substrate), ch-13-03 (functional-groups)

## Decisions Made
- All 12 Chemie stichworte (Atombau through Organische Chemie) are already fully covered in chapter content -- no gaps found
- No tables or SVGs needed removal -- all serve educational purposes
- No new React SVG diagram components needed -- the existing 7 chemistry components (PeriodicTable, AtomicOrbitals, IonicBond, CovalentBond, PHScale, FunctionalGroups, EnzymeSubstrate) cover all topics
- kap2 (Materie/Aggregatzustaende) still has 0 diagram props -- no matching chemistry component exists, but all 5 UKs pass audit-images via markdown SVG references

## Deviations from Plan

None - plan executed exactly as written. The audit found content quality to be excellent across all chemistry chapters. The main improvement was diagram assignments rather than content rewrites.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Chemistry chapters fully audited and improved
- Ready for Physik audit (01-03) and Mathematik audit (01-04)

---
*Phase: 01-bms-content-quality*
*Completed: 2026-02-26*

## Self-Check: PASSED
All files found, all commits verified.
