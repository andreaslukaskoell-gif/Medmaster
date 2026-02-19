# Codebase Concerns

**Analysis Date:** 2026-02-19

## Tech Debt

**Mixed Question Format Handling (BMS vs TV):**
- Issue: Codebase maintains two incompatible question formats — BMS uses `correctOptionId` (string: "a"–"e") while TV uses `correctOption` (number: 0-based index). SEK and KFF use other variations.
- Files: `src/pages/Simulation.tsx` (lines 419-440 isQuestionCorrect, lines 443-464 getCorrectAnswerDisplay), `src/data/tvTextsExpanded.ts`, `src/data/bmsQuestions.ts`, `src/data/sekDataNew.ts`
- Impact: Multiple conditional branches for answer validation. High chance of index/ID mismatch bugs when merging question types or creating new sections.
- Fix approach: Normalize all question types to a single format (e.g., 0-based indices or letter strings). Create a unified question interface and validation layer before Simulation component processes them.

**Dangerously Set Inner HTML Without Sanitization:**
- Issue: Multiple components use `dangerouslySetInnerHTML` to render user-controlled content (chapter text, merksätze, table cells) without HTML sanitization. Content comes from BMS chapter data which could theoretically contain malicious HTML.
- Files: `src/components/chapter/MerksatzBox.tsx` (line 56), `src/components/chapter/SubchapterContent.tsx` (lines 267, 438), `src/components/chapter/SelbstTest.tsx` (line 192), `src/pages/BMSUnterkapitel.tsx` (line 462)
- Impact: XSS vulnerability if chapter content is ever modified via user input or API injection. Low immediate risk since data is static, but high risk if content management becomes dynamic.
- Fix approach: Wrap chapter content in HTML sanitizer (e.g., DOMPurify) before rendering. Consider using React's built-in HTML escaping for most cases and only use `dangerouslySetInnerHTML` for markdown-formatted content passed through a sanitizer.

**Weakly Typed Supabase Integration:**
- Issue: Database models use `any` for complex JSON fields, losing type safety for nested structures.
- Files: `src/lib/supabaseBMS.ts` (lines 21, 32-35, 47), `src/lib/syncService.ts` (line 85: `report: any`)
- Impact: No compile-time validation of chapter structure shape. Runtime errors if nested data structure changes or is malformed.
- Fix approach: Create explicit TypeScript interfaces for JSONB columns (lernziele, sections, merksätze, self_test, progress_data) and validate at load time.

**No Question Validation Framework:**
- Issue: Questions are defined in data files with no systematic validation. No schema checking for required fields, option count, or correct answer indices.
- Files: `src/data/bms/index.ts`, `src/data/tvTextsExpanded.ts`, `src/data/sekDataNew.ts`, `src/data/kffGenerators.ts`
- Impact: Malformed questions can cause crashes in Simulation (e.g., missing explanation, correct answer index out of bounds, fewer than 5 BMS options).
- Fix approach: Add Zod or similar schema validation at module load. Export validated question arrays, not raw data. Add build-time validation script.

**Large Monolithic Component Files:**
- Issue: Several components exceed 300 lines and mix concerns: rendering, data loading, business logic, styling.
- Files: `src/pages/Simulation.tsx` (1735 lines), `src/pages/KFF.tsx` (1210 lines), `src/components/chapter/SubchapterContent.tsx` (483 lines), `src/components/layout/Sidebar.tsx` (576 lines)
- Impact: Hard to test, modify, or reuse logic. Long startup time and bundle bloat. Mental overhead when debugging.
- Fix approach: Extract helper functions into separate modules. Move section generation logic to dedicated services. Break SubchapterContent into sub-components by section type.

**Backup Files Committed to Repo:**
- Issue: Multiple backup/pre-restore files committed and duplicated in `/src/_backup_FEBRUARY_18/` directory (84 files).
- Files: `src/_backup_FEBRUARY_18/` (entire directory), `src/data/bmsKapitel/biologie/kap1-zelle.pre-restore.backup`
- Impact: 8-10x code duplication in codebase. Increased bundle size, npm install time. Confuses developers about which version is authoritative.
- Fix approach: Remove `_backup_FEBRUARY_18/` and `.pre-restore.backup` files. Use git history instead. Add to `.gitignore`.

**Incomplete Error Handling in Sync Service:**
- Issue: `src/lib/syncService.ts` catches errors but only logs warnings; no user-facing feedback mechanism for failed syncs. Offline queue exists but not surfaced to UI.
- Files: `src/lib/syncService.ts` (lines 34-36, 95-100)
- Impact: Users unaware if their progress fails to sync. Offline data may be stale or lost on app restart.
- Fix approach: Add error callback to sync functions. Show toast/snackbar on sync failure. Expose offline queue status in UI (e.g., "3 items waiting to sync").

## Known Bugs

**TV Question Index Mismatch Potential:**
- Symptoms: TV section in Simulation may display wrong answer or grade incorrectly due to `correctOption` number format inconsistency.
- Files: `src/pages/Simulation.tsx` (lines 427-429, 452-453), `src/data/tvTextsExpanded.ts`, `src/data/tvTextsExpanded2.ts`
- Trigger: Any TV question answered and graded in Simulation mode
- Workaround: Cross-reference `correctOption` values in both TV data files to ensure they match expected 0-based indexing. Manually verify Simulation scoring for TV section.

**SEK Content Rendering Not Validated:**
- Symptoms: SEK questions render without validation; if a situation/dilemma is missing or empty, component may crash or display broken layout.
- Files: `src/data/sekDataNew.ts`, `src/pages/Simulation.tsx` (lines 406-409)
- Trigger: Load SEK section with incomplete question data
- Workaround: Verify all SEK tasks have required fields populated in sekDataNew.ts before deploying.

**localStorage Not Available in Server-Rendered Context:**
- Symptoms: App crashes if Sync service runs during SSR or in Node environment.
- Files: `src/lib/syncService.ts` (lines 22, 33), `src/utils/listChapters.ts` (uses window.showChapters)
- Trigger: Server-side rendering or SSR testing
- Workaround: Check `typeof window !== 'undefined'` before accessing localStorage. Current code does not do this.

## Security Considerations

**HTML Injection via Chapter Content:**
- Risk: If chapter editing becomes user-facing (via KapitelEditor.tsx or admin panel), malicious HTML could be injected. Current dangerouslySetInnerHTML renders without sanitization.
- Files: `src/components/chapter/MerksatzBox.tsx`, `src/pages/BMSUnterkapitel.tsx` (line 462 renders merksatz regex replacement)
- Current mitigation: Chapter data is read-only and hard-coded. Content comes from trusted data files only.
- Recommendations: (1) If user editing is added, implement HTML sanitization (DOMPurify). (2) Use React's text content prop by default; only use dangerouslySetInnerHTML for explicitly markdown/HTML marked fields. (3) Add Content-Security-Policy header to block inline scripts.

**Supabase Credentials in Client Code:**
- Risk: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are public (anon key by design) and passed to browser. Rogue scripts could make authenticated queries as anonymous user. API keys visible in network tab.
- Files: `src/lib/supabase.ts` (lines 4-5)
- Current mitigation: Supabase row-level security (RLS) policies should restrict what anonymous users can query.
- Recommendations: (1) Verify RLS policies are strict (no SELECT/INSERT/UPDATE/DELETE on sensitive tables). (2) Set up rate limiting on Supabase. (3) Monitor for unusual query patterns. (4) Do not expose sensitive user data (passwords, emails) in public tables.

**Window Type Casting in Utilities:**
- Risk: `src/utils/listChapters.ts` uses `(window as any)` to attach debug functions. If deployed, developers' debug code is accessible in production console.
- Files: `src/utils/listChapters.ts` (lines attaching showChapters, listChapters)
- Current mitigation: Only used in BMS.tsx during development; not called by default.
- Recommendations: (1) Wrap in `if (process.env.NODE_ENV === 'development')` guard. (2) Remove from production bundle (tree-shake). (3) Audit console for other debug functions.

## Performance Bottlenecks

**Simulation Generates All Sections Upfront:**
- Problem: `src/pages/Simulation.tsx` generates entire question pool (BMS, TV, KFF, SEK) at once on mode selection. For large pools (1000+ BMS questions), this causes JS thread blocking.
- Files: `src/pages/Simulation.tsx` (lines 195-415, especially generateSectionQuestions)
- Cause: All shuffle/filter/slice operations run synchronously. No lazy loading or pagination.
- Improvement path: (1) Lazy-load questions per section only when user selects it. (2) Use web workers for shuffle/filter if needed. (3) Paginate question display (show 10-20, load next batch on scroll). (4) Memoize question pools to avoid regeneration on re-render.

**Sidebar Navigation Re-renders on Every Store Update:**
- Problem: `src/components/layout/Sidebar.tsx` (576 lines) subscribes to global store and re-renders entire sidebar even for unrelated updates (e.g., progress sync).
- Files: `src/components/layout/Sidebar.tsx`
- Cause: useStore() or similar context is not granularly subscribed; entire sidebar component re-renders on any store change.
- Improvement path: (1) Split store into micro-stores by domain (chapters, progress, UI). (2) Use selector pattern (e.g., useShallow) to only subscribe to needed fields. (3) Memoize sub-components (React.memo). (4) Profile with React DevTools Profiler to identify exact bottlenecks.

**Chapter Content Not Paginated:**
- Problem: Entire chapter content (text, tables, diagrams) loaded into DOM at once. BMSUnterkapitel.tsx renders all sections together; no virtualization.
- Files: `src/pages/BMSUnterkapitel.tsx`, `src/components/chapter/SubchapterContent.tsx` (483 lines)
- Cause: Complex chapter structure (Hinterfrag blocks, tables, merksätze) makes virtualization difficult.
- Improvement path: (1) Use intersection observer to lazy-load diagrams/tables only when visible. (2) Render Hinterfrag sections on-demand (collapsed by default). (3) Consider React.lazy + Suspense for diagram components.

**SeededShuffle Not Cached Across Re-renders:**
- Problem: `src/pages/Simulation.tsx` seededShuffle runs on every mode change, even if seed is same.
- Files: `src/pages/Simulation.tsx` (lines 74-90)
- Cause: No memoization of shuffled pools. Each variant generation re-runs shuffle.
- Improvement path: Cache shuffled question arrays by (seed, sectionType) tuple. Use useMemo to prevent regeneration.

## Fragile Areas

**TV Question Array Indexing:**
- Files: `src/data/tvTextsExpanded.ts`, `src/data/tvTextsExpanded2.ts`, `src/pages/Simulation.tsx`
- Why fragile: `correctOption: number` field is 0-based, but easily confused with 1-based numbering. No type distinction between 0-based TV and 1-based BMS (A=0, B=1, etc.). If TV data moved or merged with other questions, indices could shift.
- Safe modification: (1) Add @deprecated comment if considering refactor. (2) Add unit test that validates correctOption is within [0, options.length). (3) Consider renaming to `correctOptionIndex` to clarify it's 0-based.
- Test coverage: Gaps in integration tests for TV scoring. Manual verification required.

**BMS Chapters with Dynamic Content:**
- Files: `src/pages/BMSUnterkapitel.tsx`, `src/lib/supabaseBMS.ts`, `src/components/chapter/SubchapterContent.tsx`
- Why fragile: Chapter unterkapitel array is mutable and transformed in multiple places (filters, sorts, normalization). If index-based navigation assumption breaks (e.g., chapter has 3 unterkapitel, user navigates with stale index), component crashes.
- Safe modification: (1) Always validate unterkapitelIndex bounds before accessing array. (2) Use IDs instead of indices for navigation. (3) Add React.Fragment keys to list renders.
- Test coverage: No tests for out-of-bounds chapter access or missing unterkapitel handling.

**Supabase Sync Offline Queue:**
- Files: `src/lib/syncService.ts` (getOfflineQueue, setOfflineQueue)
- Why fragile: Queue stored in localStorage as JSON. If corruption occurs, or localStorage quota exceeded, entire queue is lost silently. No duplicate detection — same userId could be queued twice.
- Safe modification: (1) Add try-catch + console.error in setOfflineQueue. (2) Validate queue schema on read (filter invalid items). (3) Add deduplicate step before setting.
- Test coverage: No tests for localStorage edge cases (quota exceeded, corrupted JSON).

**Adaptive Learning Store State Updates:**
- Files: `src/store/adaptiveLearning.ts` (referenced in syncService), `src/pages/BMSUnterkapitel.tsx`
- Why fragile: Store state is modified during sync (profileData, streak counters). If sync is interrupted or fails midway, state could be inconsistent. No transaction semantics.
- Safe modification: (1) Snapshot store before sync. (2) Rollback on sync failure. (3) Add transaction log (append-only). (4) Validate state shape after updates.
- Test coverage: No tests for concurrent sync attempts or state corruption scenarios.

## Scaling Limits

**Question Pool Memory:**
- Current capacity: 1060 BMS + 120 TV + 80 SEK + KFF (variable) ≈ 1400+ total questions
- Limit: If doubled (2800+ questions), bundle size could exceed 1MB gzipped. Simulation shuffle/filter at startup would noticeably slow app. localStorage quota (5-10MB) could be exceeded if progress tracking stores answers for all questions.
- Scaling path: (1) Load questions from backend API instead of bundling. (2) Paginate question pools (server-side). (3) Implement background sync for progress (not on-demand). (4) Use IndexedDB instead of localStorage for large datasets.

**Concurrent User Syncs:**
- Current capacity: Single user per browser session. Sync runs serially (not concurrent).
- Limit: If sync takes >30 sec (network slow) and user starts another session (new tab), two overlapping syncs could corrupt state or create duplicate records in Supabase.
- Scaling path: (1) Add sync queue/mutex to ensure single sync at a time. (2) Implement conflict resolution (last-write-wins vs. merge). (3) Add sync timeout and abort mechanism. (4) Test with multiple concurrent sessions.

**Supabase Database Throughput:**
- Current capacity: BMS chapters (~34 chapters × 3-8 unterkapitel each). Each load queries chapters + subchapters. Weekly/monthly activity could spike.
- Limit: If simultaneous users exceed 1000+, Supabase free tier could throttle. No query rate limiting in client.
- Scaling path: (1) Implement client-side caching (stale-while-revalidate pattern exists but not optimized). (2) Add Server-Driven UI caching headers. (3) Batch chapter queries. (4) Upgrade to Supabase paid plan with higher limits.

## Dependencies at Risk

**React Version Management:**
- Risk: Project uses React 18+ with hooks extensively. No pin on exact version; upgrades could break deprecated hook usages (e.g., useCallback without proper dependencies).
- Files: Across all components
- Impact: React major version upgrade could require auditing 100+ files.
- Migration plan: (1) Lock React version in package.json (use caret ^18.2.0 or exact 18.2.0). (2) Add pre-upgrade audit checklist. (3) Use ESLint react-hooks plugin to catch dependency issues.

**Supabase SDK Dependency:**
- Risk: Supabase JS SDK updates could include breaking changes. App deeply integrated (auth, storage, queries). No version pinned to specific release.
- Files: All files importing from @supabase/supabase-js
- Impact: SDK breaking change (e.g., RLS policy format) could silently fail authentication or queries.
- Migration plan: (1) Pin @supabase/supabase-js to specific minor version (e.g., 2.39.0). (2) Test upgrades in staging. (3) Subscribe to Supabase changelog.

**TypeScript Compilation:**
- Risk: No strict mode flag set. This allows implicit `any` types, which are used in several places (supabaseBMS.ts, syncService.ts).
- Files: tsconfig.json (presumed), src/lib/supabaseBMS.ts, src/lib/syncService.ts
- Impact: Type errors not caught at compile time. Runtime errors in edge cases.
- Migration plan: (1) Enable `"strict": true` in tsconfig.json. (2) Audit and fix all `any` usages. (3) Add pre-commit hook to check for new `any` declarations.

## Missing Critical Features

**Progress Persistence / Session Recovery:**
- Problem: If user answers 20 questions in Simulation and browser crashes, all progress is lost. Offline queue exists but not tied to in-progress simulations.
- Blocks: Cannot reliably track user learning progress. Users frustrated by lost sessions.
- Impact: High; affects user retention.

**Question Bank Versioning:**
- Problem: No way to track when questions were updated or deleted. If a question's correctOptionId changes, scores for past attempts are now invalid.
- Blocks: Cannot audit or correct answer history. Risk of data integrity issues.
- Impact: Medium; critical if content becomes user-generated.

**Batch Import / Content Management UI:**
- Problem: Adding new questions requires direct code edits (adding .ts files, aggregating in barrel files). No admin interface to bulk import questions.
- Blocks: Cannot scale content creation. Non-technical users cannot manage questions.
- Impact: Low currently; will block scaling.

## Test Coverage Gaps

**TV Section Scoring Integration:**
- What's not tested: TV question grading logic in Simulation (isQuestionCorrect for TV type). How correctOption indices map to displayed options and user selections.
- Files: `src/pages/Simulation.tsx` (lines 427-429), `src/data/tvTextsExpanded.ts`
- Risk: TV answers could be graded incorrectly without notice.
- Priority: High

**Supabase Sync Error Scenarios:**
- What's not tested: Network failure during sync, Supabase down, RLS violation, corrupted localStorage queue, concurrent syncs.
- Files: `src/lib/syncService.ts`, `src/lib/supabaseBMS.ts`
- Risk: Silent failures or data loss in offline scenarios.
- Priority: High

**Chapter Navigation Boundary Conditions:**
- What's not tested: Navigating to invalid unterkapitel indices, chapter with 0 unterkapitel, rapid chapter switching, browser back button during load.
- Files: `src/pages/BMSUnterkapitel.tsx`, `src/lib/bmsChaptersLoader.ts`
- Risk: Crashes or stale UI state.
- Priority: Medium

**Simulation Mode Transitions:**
- What's not tested: Switching between modes mid-simulation, resuming simulation, timeout handling, incomplete question pools.
- Files: `src/pages/Simulation.tsx`
- Risk: State corruption, questions repeated or skipped, scoring off.
- Priority: Medium

**Dangerously Set Inner HTML Sanitization:**
- What's not tested: XSS payloads in chapter text, merksätze, or table cells.
- Files: `src/components/chapter/MerksatzBox.tsx`, `src/pages/BMSUnterkapitel.tsx`
- Risk: XSS vulnerability if content becomes user-editable.
- Priority: Medium (low risk now, high if editing enabled)

---

*Concerns audit: 2026-02-19*
