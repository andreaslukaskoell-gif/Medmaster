# Codebase Concerns

**Analysis Date:** 2026-02-19

## Tech Debt

**Empty BMS Questions Array:**
- Issue: `allBmsQuestions` is initialized as empty array `[]` in `src/data/bms/index.ts` - queries rely on fallback to legacy data
- Files: `src/data/bms/index.ts`, `src/pages/Simulation.tsx` (lines 50-58)
- Impact: New BMS questions not loaded; all question resolution depends on legacy `bmsQuestions` variable
- Fix approach: Populate `allBmsQuestions` during data import or use dynamic loader to aggregate from `_partN.ts` files like existing barrel pattern

**Stripe Placeholder Implementation:**
- Issue: Stripe integration incomplete - `createCheckoutSession()` returns `null` and logs to console instead of performing actual checkout
- Files: `src/lib/stripe.ts` (lines 40-45)
- Impact: Premium subscriptions cannot be purchased; users see pricing page but checkout fails silently
- Fix approach: Implement Supabase Edge Function that calls Stripe API and creates actual checkout sessions

**Unimplemented console.log Debug Statement:**
- Issue: Debug logging left in production code: `console.log("BMS Quiz-Logik geladen")`
- Files: `src/components/chapter/QuizQuestion.tsx` (line 21)
- Impact: Pollutes browser console in production; may impact performance in high-volume usage
- Fix approach: Remove debug logs or replace with proper logging infrastructure (e.g., Sentry, LogRocket)

## Known Issues

**Backup Files Not Cleaned Up:**
- Files affected: `src/_backup_FEBRUARY_18/` directory and `src/data/bmsKapitel/biologie/kap1-zelle.pre-restore.backup`
- Problem: Large backup directory committed to repo; documented as "safety copy before implementing Markdown, optional image fields, and quiz logic"
- Impact: Increases bundle size; creates maintenance confusion about which version is current
- Recommended: Delete `src/_backup_FEBRUARY_18/` directory and `.pre-restore.backup` files; use git history for version recovery

## Security Considerations

**Stripe Price IDs Hardcoded but Placeholder:**
- Risk: Price IDs use placeholder values (`price_PLACEHOLDER_*`) which will cause runtime errors in production; actual payment flow would fail
- Files: `src/lib/stripe.ts` (lines 6-33)
- Current mitigation: None - code doesn't reach Stripe, checkout returns null
- Recommendations: Use environment variables for price IDs; validate in pre-deployment checks

**localStorage Without Encryption:**
- Risk: User progress, quiz results, bookmarks stored plaintext in localStorage; includes sensitive learning data and preferences
- Files: `src/store/useStore.ts` (lines 11-37), Zustand persist middleware
- Current mitigation: "Safe storage" wrapper catches errors but does not encrypt; relies on browser's same-origin policy
- Recommendations: Consider encrypting sensitive fields; implement automatic sync to backend (Supabase); note that auth tokens should never be in localStorage

**Missing CSRF Protection:**
- Risk: No CSRF tokens visible in forms or API calls; relying on CORS/same-origin
- Files: Supabase integration not visible in explored files
- Current mitigation: Supabase handles auth headers; CORS likely configured
- Recommendations: Document CSRF strategy; if custom API endpoints added, implement token rotation

## Performance Bottlenecks

**Large Data Files Not Code-Split:**
- Problem: SEK data (1779 lines), TV texts expanded (1510-1759 lines each), KFF data (876-1227 lines) all imported eagerly
- Files: `src/data/sekDataNew.ts`, `src/data/tvTextsExpanded.ts`, `src/data/tvTextsExpanded2.ts`, `src/data/kffZahlenfolgen.ts`
- Cause: Static imports in page components; lazy-loaded pages but not lazy data
- Improvement path: Use dynamic imports for section-specific data; `const sekData = await import('./sekDataNew')` in SEK page component

**Simulation Page Complexity:**
- Problem: 1735-line component with multiple section types (BMS, TV, SEK, KFF), shuffles, timers, scoring
- Files: `src/pages/Simulation.tsx`
- Cause: All exam logic consolidated; no component abstraction for question types
- Improvement path: Extract section handlers into separate components; memoize question generation functions; profile render cycles

**KapitelEditor Page Weight:**
- Problem: 924 lines with full chapter editing UI, formatting logic, and storage operations
- Files: `src/pages/KapitelEditor.tsx`
- Cause: Single component handles content cleanup, markdown formatting, and all edit workflows
- Improvement path: Split into composable components for content editor, preview, storage layer; extract formatting logic

## Fragile Areas

**Chapter Validation Without Warnings:**
- Files: `src/lib/validateChapter.ts`, `src/pages/BMSUnterkapitel.tsx`
- Why fragile: Validation functions exist but errors/warnings not propagated to UI; invalid chapters may render with partial data
- Safe modification: Add validation error boundary that displays what's wrong; log to Sentry; show user-friendly error message
- Test coverage: No test files found for validation logic; integration tests missing

**Data Aggregation from Legacy to New:**
- Files: `src/pages/Simulation.tsx` (lines 50-58), `src/data/bms/index.ts`
- Why fragile: Dual-source resolution - tries new questions, falls back to legacy if empty; no version conflict handling; both sources may diverge
- Safe modification: Establish single source of truth; migrate all legacy questions to new format before using both; version schema
- Test coverage: No tests covering both paths; no integration tests for question loading

**Zustand Store Sanitization Logic:**
- Files: `src/store/useStore.ts` (lines 41-80)
- Why fragile: Complex validation for recovered persisted state; NaN/undefined/corrupted types silently reset to defaults; no audit trail of what was lost
- Safe modification: Log discarded data to localStorage.discarded; add recovery UI option; implement schema versioning
- Test coverage: Unit test exists (`bmsStorage.test.ts`) but not for store recovery; no fuzzing of corrupted JSON

**Error Boundary Catch-All with Hard Reload:**
- Files: `src/components/ErrorBoundary.tsx` (line 32)
- Why fragile: Catches all errors and forces full page reload; loses all client state; no granular error recovery
- Safe modification: Implement error recovery strategies (reset to dashboard, clear session, notify backend); preserve some state if possible
- Test coverage: No tests; behavior unclear when error occurs in nested route

## Scaling Limits

**Simulation Question Pool Generation:**
- Current capacity: Generates deterministic shuffles for each section; seeded random works for ~10K questions
- Limit: Seeded shuffle algorithm (`seededRandom()` with linear congruential generator) becomes predictable at very large scales
- Scaling path: For 50K+ questions, use better PRNG (Xorshift); implement shard-based question selection instead of full shuffle

**Zustand Persist Middleware:**
- Current capacity: Store persists entire state to single localStorage key; no limit enforced
- Limit: localStorage quota ~5-10MB depending on browser; with many quiz results + progress data, approaches limit quickly
- Scaling path: Implement automatic cleanup (archive old quiz results); split into multiple keys by section; move to IndexedDB for larger capacity

**Breadcrumb Context Propagation:**
- Current capacity: Breadcrumb state managed globally; updates on every route change
- Limit: May cause re-renders of deeply nested components; no memoization observed
- Scaling path: Use useCallback/useMemo in consumer components; consider local route state instead of global

## Test Coverage Gaps

**Quiz Question Logic Not Tested:**
- What's not tested: Answer selection, hint reveal, second attempt scoring, XP calculation
- Files: `src/components/chapter/QuizQuestion.tsx`
- Risk: Logic for "50% XP on second try" and "immediate feedback" could break unnoticed; accessibility not verified
- Priority: High - core learning UX

**Chapter Content Parsing and Validation:**
- What's not tested: Markdown normalization, HTML escaping, blockquote detection, list formatting
- Files: `src/utils/normalizeChapterContent.ts`, `src/utils/splitChapterContent.ts`, `src/utils/parseKontrollfragen.ts`
- Risk: Malformed content breaks rendering; injection vulnerabilities if HTML not properly escaped
- Priority: High - user-generated content

**Data Migration and Schema Evolution:**
- What's not tested: BMS questions loaded from both old and new sources; no schema change detection
- Files: `src/data/bms/index.ts`, `src/pages/Simulation.tsx`
- Risk: If schema changes, old data silently fails to load; no validation of required fields
- Priority: Medium - currently works but fragile to changes

**SEK Subtest Scoring Logic:**
- What's not tested: Emotionen Regulieren scoring (0-3 scale), Soziales Entscheiden ranking validation
- Files: `src/data/sekDataNew.ts`
- Risk: Scoring algorithm not verified against spec; ranking system could produce incorrect results
- Priority: High - exam-critical feature

**Error Recovery Paths:**
- What's not tested: localStorage quota exceeded; Supabase connection failures; missing data files
- Files: `src/store/useStore.ts`, network/storage components
- Risk: Silent failures; users lose progress; no feedback about what went wrong
- Priority: High - affects user data safety

**Adaptive Learning Store Integration:**
- What's not tested: Stichwort progress updates, adaptive question selection, learning path recommendations
- Files: `src/store/adaptiveLearning.ts`, usage in `src/pages/Simulation.tsx`
- Risk: Learning recommendations could be stale or incorrect; no validation of integration
- Priority: Medium - affects learning effectiveness

## Dependencies at Risk

**React 19 Stability:**
- Risk: React 19.2.0 is relatively new; concurrent rendering changes may introduce subtle bugs
- Impact: Suspense boundaries, state updates, and effect timing could behave unexpectedly
- Migration plan: Lock to current version; monitor React releases; test with React 18 compatibility if needed

**Zustand Persist Middleware Limitations:**
- Risk: persist middleware doesn't support async initialization; recovery is synchronous and can lose state
- Impact: If user quits during localStorage write, state may be partially corrupted on reload
- Migration plan: Consider Jotai with localStorage adapter for async support; or implement custom persistence with write queuing

## Missing Critical Features

**No Offline Support:**
- Problem: App requires internet for Supabase; all data fetches fail offline; no service worker
- Blocks: Mobile users with poor connectivity; exam preparation in offline environments
- Mitigation: Cache sections aggressively; implement service worker; support offline quiz mode

**No Undo/Redo for Chapter Edits:**
- Problem: KapitelEditor saves immediately; no history of changes; user can't revert mistakes
- Blocks: Accidental overwrites are permanent; no audit trail of who changed what
- Mitigation: Add soft-delete; implement git-like history; use Supabase audit logs

**No Export/Backup for User Progress:**
- Problem: All progress stored in Supabase; no way to export for external use or backup
- Blocks: Users can't port data if switching platforms; data loss if account deleted
- Mitigation: Implement CSV export; add backup/restore functionality; consider GDPR data subject export

**Missing Data Consistency Checks:**
- Problem: No automated validation that question counts match expectations (1060 for BMS, 120 for TV, etc.)
- Blocks: Silent data loss if import fails; users don't know if content is complete
- Mitigation: Add startup health check; log to dashboard; alert admins if counts drift

---

*Concerns audit: 2026-02-19*
