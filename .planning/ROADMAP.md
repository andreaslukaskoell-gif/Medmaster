# Roadmap: MedMaster Premium BMS Platform

## Overview

Transform MedMaster from mixed-quality BMS content into a premium-grade learning platform with textbook-level depth, exam markings, and seamless interactive experiences. The roadmap starts with content synchronization against the official Stichwortliste, fills gaps, raises quality to premium standards, reorganizes for learning logic, then polishes UX and prepares the freemium architecture. Each phase delivers a verifiable capability that builds toward the core value: BMS content in textbook depth with exam markings, interactively delivered via quiz and Merksätze.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Content Audit** - Sync existing content with Stichwortliste, identify gaps and irrelevant content
- [ ] **Phase 2: Gap Filling** - Create missing content for 8 neu2026 topics and sync abgedeckt flags
- [ ] **Phase 3: Quality Elevation** - Raise all BMS content to textbook-level with exam markings
- [ ] **Phase 4: Structure Reorganization** - Implement lernlogische Abfolge and premium buckets
- [ ] **Phase 5: Smart Integration** - Ensure QuizQuestion, MerksatzBox, and XP systems work consistently
- [ ] **Phase 6: Progress Tracking** - Build Mastered status and progress bars at all levels
- [ ] **Phase 7: UX Polish** - Eliminate glitches, add breadcrumbs, improve navigation flow
- [ ] **Phase 8: Freemium Foundation** - Prepare data architecture for tiered access control

## Phase Details

### Phase 1: Content Audit
**Goal**: Every existing BMS chapter is validated against Stichwortliste, irrelevant content identified for deletion, coverage mapped
**Depends on**: Nothing (first phase)
**Requirements**: SYNC-01, SYNC-03, SYNC-05
**Success Criteria** (what must be TRUE):
  1. All 189 Stichwortliste entries have a mapped Kapitel or marked as missing
  2. Content audit document lists all chapters not in Stichwortliste (candidates for deletion)
  3. Every BMS question uses tags from linkedQuestionTags for trackability
  4. Coverage report shows which Fächer have gaps (neu2026 topics identified)
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 2: Gap Filling
**Goal**: All 8 missing neu2026 topics have complete content, abgedeckt flags updated
**Depends on**: Phase 1
**Requirements**: SYNC-02, SYNC-04
**Success Criteria** (what must be TRUE):
  1. All 8 neu2026 topics with abgedeckt: false have full BMSUnterkapitel.tsx implementations
  2. Each new topic has 5+ questions with 5 options (A-E) per MedAT format
  3. Stichwortliste abgedeckt flags set to true for newly created content
  4. No Stichwortliste entry remains unmapped or incomplete
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 3: Quality Elevation
**Goal**: All BMS content meets textbook-level standards with exam markings and clinical highlights
**Depends on**: Phase 2
**Requirements**: QUAL-01, QUAL-02, QUAL-03, QUAL-04, QUAL-05, QUAL-06
**Success Criteria** (what must be TRUE):
  1. Every Kapitel follows BMSUnterkapitel.tsx pattern (SubchapterContent + QuizQuestion + MerksatzBox)
  2. All BMS questions have exactly 5 options (A-E) conforming to MedAT format
  3. Exam questions marked with MerksatzBox type="altfragen"
  4. Clinical highlights use MerksatzBox type="klinisch" with by-doctors-for-doctors framing
  5. Explanation quality verified as textbook-level (not just correct/incorrect)
  6. Difficulty ratings (leicht/mittel/schwer) correctly assigned and validated
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 4: Structure Reorganization
**Goal**: BMS content organized in lernlogische Abfolge with premium buckets and smart navigation
**Depends on**: Phase 3
**Requirements**: STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04, STRUCT-05
**Success Criteria** (what must be TRUE):
  1. 4 Premium-Buckets implemented with Fach colors (Bio=emerald, Chemie=red, Physik=blue, Math=violet)
  2. Biologie chapters appear in learning sequence: Zelle → Gewebe → Organe → Frühentwicklung → Genetik → Molekulare Genetik → Methoden → Humangenetik → Ökologie
  3. Each Fach has overview page with chapter roadmap and Fortschrittsanzeige
  4. URL structure /bms/:fach/:kapitel works consistently across all chapters
  5. Smart-Links between chapters function (Querverweise navigable)
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 5: Smart Integration
**Goal**: QuizQuestion, MerksatzBox, and progression systems work seamlessly in every chapter
**Depends on**: Phase 4
**Requirements**: SMART-01, SMART-02, SMART-03, SMART-04, SMART-05, SMART-06, SMART-07
**Success Criteria** (what must be TRUE):
  1. Every question uses QuizQuestion.tsx with XP-Vergabe via useStore.ts
  2. Second-Try mechanics work (halbe XP on second attempt)
  3. Hints display after first incorrect attempt
  4. Every Kapitel uses MerksatzBox at least 2x (merke/altfragen/klinisch/achtung/tipp)
  5. XP system from xp.ts + progression.ts integrated consistently
  6. Level-Aufstieg shows after quiz completion with Level-Namen
  7. Hot-Streak-Bonus triggers after 3+ correct answers in sequence
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 6: Progress Tracking
**Goal**: Users can track mastery per chapter, progress per Fach, and overall completion
**Depends on**: Phase 5
**Requirements**: PROG-01, PROG-02, PROG-03, PROG-04, PROG-05, PROG-06
**Success Criteria** (what must be TRUE):
  1. Mastered status per Kapitel shows when 100% questions correctly answered
  2. Progress-Bar per Fach displays % abgeschlossener Kapitel
  3. Progress-Bar per Kapitel shows % beantworteter Fragen
  4. Dashboard displays Gesamt-Fortschritt über alle 4 Fächer
  5. Stichwortliste-Seite shows abgedeckt status and Kapitel-Verlinkung
  6. Quiz-Session-History persists in quizSessionStore.ts
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 7: UX Polish
**Goal**: Navigation is seamless, layout glitches eliminated, premium-grade usability achieved
**Depends on**: Phase 6
**Requirements**: UX-01, UX-02, UX-03, UX-04, UX-05, UX-06, UX-07
**Success Criteria** (what must be TRUE):
  1. Chapter navigation works without layout glitches (no content jumps on switch)
  2. TopBar shows current Fach + Kapitel + Fortschritt accurately
  3. Sidebar navigation collapsible, shows Fach icons with colors
  4. Mobile BottomTabBar functions on all BMS pages
  5. Dark Mode works consistently across all Kapitel
  6. Breadcrumbs display path: BMS > Fach > Kapitel
  7. Nächstes Kapitel button at end of each Kapitel (lernlogische Reihenfolge)
**Plans**: TBD

Plans:
- [ ] TBD

### Phase 8: Freemium Foundation
**Goal**: Data architecture supports tiered access control without implementing paywall
**Depends on**: Phase 7
**Requirements**: DATA-01, DATA-02, DATA-03, DATA-04, DATA-05
**Success Criteria** (what must be TRUE):
  1. Question interface includes optional premium: boolean flag
  2. Kapitel data includes optional tier: "free" | "pro" | "premium" flag
  3. Feature-Flags in useStore.ts prepared for freemium splits
  4. Content files use barrel-files pattern (e.g., biologie.ts aggregates _part1.ts, _part2.ts)
  5. Build command npm run build executes without errors
**Plans**: TBD

Plans:
- [ ] TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Content Audit | 0/TBD | Not started | - |
| 2. Gap Filling | 0/TBD | Not started | - |
| 3. Quality Elevation | 0/TBD | Not started | - |
| 4. Structure Reorganization | 0/TBD | Not started | - |
| 5. Smart Integration | 0/TBD | Not started | - |
| 6. Progress Tracking | 0/TBD | Not started | - |
| 7. UX Polish | 0/TBD | Not started | - |
| 8. Freemium Foundation | 0/TBD | Not started | - |
