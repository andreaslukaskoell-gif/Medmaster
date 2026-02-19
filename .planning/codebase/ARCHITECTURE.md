# Architecture

**Analysis Date:** 2026-02-19

## Pattern Overview

**Overall:** Client-Side React SPA with Multi-Store State Management + Supabase Backend

**Key Characteristics:**
- React 19 + TypeScript + Vite build system with hot module replacement
- Zustand-based state management (multiple independent stores with localStorage persistence)
- React Router v7 with lazy-loaded pages and Suspense boundaries
- Tailwind CSS v4 + custom UI component library (shadcn-like primitives)
- Supabase integration for auth, sync, and analytics
- Multiple learning modules (BMS, KFF, TV, SEK) with shared data infrastructure
- Progressive feature unlock system based on XP/level progression
- Defensive error handling with fallbacks; never crashes entire app

## Layers

**Presentation Layer (Components):**
- Purpose: Render user interface, handle user interactions, dispatch to stores
- Location: `src/components/` (114 component files)
- Contains: Feature-specific components (layout, chapter, quiz, dashboard, diagrams, badges, learning overlays)
- Depends on: Zustand stores, React Contexts, Hooks, Utilities
- Used by: Pages layer, AppShell layout

**Page/Route Layer:**
- Purpose: Route-level orchestrators; handle URL params, compose major user journeys
- Location: `src/pages/` (70 page files: BMS.tsx, KFF.tsx, TV.tsx, SEK.tsx, Simulation.tsx, Dashboard.tsx, etc.)
- Depends on: Zustand stores, UI Components, Lib utilities
- Used by: App.tsx (router entry point)
- Patterns: One page per major route; complex pages may compose multiple sub-components

**State Management Layer (Stores):**
- Purpose: Persistent global state for user data, progress, preferences, session state
- Location: `src/store/` (Zustand stores)
- Stores:
  - `useStore.ts` (primary): XP, streak, completed chapters, quiz results, badges, notes, bookmarks, user preferences
  - `adaptiveLearning.ts`: Per-topic success rates, learning stage, daily recommendations, weakness tracking
  - `quizSessionStore.ts`: Current quiz session state (hot streaks, reward messages, pending XP)
  - `interleaving.ts`: Spaced repetition scheduling, interleaving overlay visibility, snooze state
  - `kffStore.ts`: KFF-specific results and progress
- Persistence: All stores use Zustand `persist()` middleware → localStorage (with sanitization on load)
- Used by: All components and pages

**Content/Data Layer:**
- Purpose: Question pools, chapter definitions, static content; no runtime computation
- Location: `src/data/`
- Contains:
  - `bms/`: Question interface + barrel exports (biologie.ts, chemie.ts, physik.ts, mathematik.ts) - currently empty structure
  - `bmsKapitel/`: Chapter hierarchy (types.ts, index.ts barrel, biologie/, chemie/, physik/, mathematik/ subdirs)
  - `kff*.ts`: KFF exercises by subtest (emotionen-erkennen, emotionen-regulieren, implikationen, zahlenfolgen, wortfluessigkeit)
  - `tvTexts*.ts`: TV reading comprehension texts + questions (sets 1-5, 6-10)
  - `sekData*.ts`: SEK emotional intelligence tasks (Erkennen, Regulieren, Entscheiden)
  - `badges.ts`: Badge definitions and progress calculation logic
  - `glossary.ts`: Medical terms and definitions
  - `kffGenerators.ts`: Generator functions for procedural content
  - `flashcards*.ts`: Pre-made flashcard sets
- Depends on: None (pure data exports)
- Used by: Pages, Components, Services

**Services/Libraries Layer:**
- Purpose: Business logic, utilities, external integrations; separated by concern
- Location: `src/lib/`, `src/hooks/`, `src/utils/`
- Key Modules:
  - **Authentication**: `src/hooks/useAuth.ts` (Supabase session, premium status, permission checks)
  - **Sync Service**: `src/lib/sync.ts`, `src/lib/syncService.ts` (orchestrates localStorage ↔ Supabase sync)
  - **BMS Storage**: `src/lib/bmsStorage.ts` (chapter progress tracking, SRS metadata)
  - **Routing**: `src/lib/bmsRoutes.ts` (URL slug → chapter ID mapping)
  - **Progression**: `src/lib/progression.ts` (XP calculations, level determination, feature unlock logic)
  - **Adaptive Learning**: `src/lib/adaptivePlan.ts` (personalized study plan generation)
  - **Weak Area Recovery**: `src/lib/smartRecovery.ts` (targeting low-confidence topics)
  - **Analytics**: `src/lib/leaderboard.ts`, `src/lib/memoryHeatmap.ts`, `src/lib/schwachstellenAnalyse.ts`
  - **Utilities**: `src/lib/utils.ts` (formatting, date, generic helpers)
- Depends on: Supabase, Store layer, Data layer
- Used by: Pages, Components, Stores

**Context Layer:**
- Purpose: React Context for prop drilling avoidance; non-store global concerns
- Location: `src/contexts/`, `src/context/`
- Contains: BreadcrumbContext (dynamic breadcrumb per route)
- Used by: Layout components (AppShell, Sidebar)

**Layout/Shell Layer:**
- Purpose: App-wide persistent UI chrome; orchestrates page outlet and overlays
- Location: `src/components/layout/`
- Components:
  - `AppShell.tsx`: Main wrapper with route outlet, XP monitor, level-up overlays, badge unlocks, overlay orchestration
  - `Sidebar.tsx`: Navigation drawer (mobile-adaptive, collapsible, subject/chapter tree)
  - `TopBar.tsx`: Header with user profile, sync status, menu toggle
  - `BottomTabBar.tsx`: Mobile-only tab navigation (quick access to main sections)
  - `sidebarLayout.ts`: Tailwind margin sync constant for layout consistency
- Used by: App.tsx (wraps all protected routes)

## Data Flow

**Application Bootstrap:**
1. `main.tsx` mounts React app with ErrorBoundary
2. `App.tsx` sets up BrowserRouter with lazy-loaded route definitions
3. Public routes: /login, /register, /forgot-password (bypass AppShell)
4. Protected routes: AuthGuard checks session → redirects to /login if no session
5. Inside AuthGuard: AppShell wraps Outlet, initializes layout + overlays
6. Zustand stores hydrate from localStorage (sanitized)
7. useAuth hook checks Supabase session asynchronously

**Quiz Question Display (BMS Example):**
1. User navigates to `/bms/:fach/:kapitel` (BMS.tsx page)
2. BMS.tsx parses params via `subjectFromSlug()` + `chapterIdFromParams()` (lib/bmsRoutes.ts)
3. Loads chapter metadata from `src/data/bmsKapitel/[subject]/index.ts` (barrel exports)
4. User clicks "Quiz starten" → navigates to `/bms/quiz/:fach` (BMSQuiz.tsx)
5. BMSQuiz loads questions from:
   - `src/data/bms/[subject].ts` (new format: biologie.ts, chemie.ts, etc.)
   - Falls back to `src/data/bmsQuestions.ts` (legacy format)
6. QuizQuestion components render each question
7. User selects answer → stored in `store.currentAnswers[questionId]`
8. On submit: Answer validation → score calculation → XP grant → QuizResult stored
9. Result appended to `store.quizResults[]`
10. Store change triggers sync to Supabase via `syncService.ts` (if online)

**XP & Progression Flow:**
1. Quiz result XP calculated via `src/lib/xp.ts` → `addXP(points)`
2. `useStore` updates XP total (Zustand)
3. localStorage automatically persisted
4. `AppShell.tsx` watches XP via `useEffect` + `getLevelFromXP()`
5. If level increased → triggers `setLevelUpState()` → renders LevelUpOverlay
6. Feature unlock checked via `getFeatureUnlockedAtLevel(currentLevel)` (e.g., Simulation at L15)
7. XP multiplier applied: `isPremium ? 1.5 : 1` (set in AppShell useEffect)
8. Badge progress checked → if earned, `setPendingBadgeId()` → BadgeUnlockModal shown

**Spaced Repetition/Interleaving Flow:**
1. User studies questions → answer recorded in `store.quizResults[]`
2. `useInterleavingStore` tracks study patterns (area, last study time)
3. At 60s intervals, `shouldShowInterleavingOverlay()` evaluates user patterns
4. If gap detected in weak area → `setInterleavingOverlayVisible(true)`
5. InterleavingOverlay prompts user to review weak topic
6. User can snooze → `snooze()` records snooze time in store
7. All data persisted to localStorage, synced to Supabase on interval

**State Persistence & Sync:**
1. All Zustand stores configured with `persist()` middleware + `safeStorage()` wrapper
2. `safeStorage()` handles localStorage quota errors gracefully
3. On state change: Zustand automatically serializes to localStorage
4. On page load: `sanitizePersisted()` filters corrupted data (NaN, undefined, wrong types)
5. `syncService.ts` polls every 60s (when online):
   - Checks for newer state in Supabase
   - Pushes local changes to Supabase (quiz results, progress)
   - Handles offline gracefully (retries on reconnect)
6. SyncToast component displays sync status in AppShell

## Key Abstractions

**Question Interface (BMS):**
- Purpose: Standardize question format across all BMS subjects
- Location: `src/data/bms/index.ts`
- Pattern:
```typescript
export interface Question {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  chapter: string;
  topic?: string;
  text: string;
  options: { id: string; text: string }[];  // Always 5 (A-E) for MedAT format
  correctOptionId: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  difficulty: "leicht" | "mittel" | "schwer";
  tags: string[];
}
```

**Chapter Hierarchy:**
- Purpose: Organize educational content by subject and learning progression
- Location: `src/data/bmsKapitel/types.ts`
- Interfaces:
  - `Kapitel`: { id, title, subject, unterkapitel[], estimatedTime, icon }
  - `Unterkapitel`: { id, title, content, sections[], merksätze, selfTest[], imageUrl }
  - `ChapterSection`: { heading, content, diagram?, merke?, klinik?, vergleichsTabelle? }
- Pattern: Barrel exports aggregate `_part*.ts` files → `index.ts` → consumed by BMS.tsx

**Quiz Result:**
- Purpose: Capture quiz attempt with full answer details for analytics
- Location: `src/store/useStore.ts`
- Interface: `{ id, type, subject, score, total, date, timestamp, answers: [{questionId, selectedAnswer, correct}] }`
- Persisted in store, synced to Supabase for analytics/recommendations

**Learning Profile (Adaptive):**
- Purpose: Per-topic success rates and learner stage classification
- Location: `src/store/adaptiveLearning.ts`
- Contains:
  - `StichwortStat`: { attempts, correct, lastAttempt, confidenceLevel }
  - `FachStat`: { topicStats map, overallSuccessRate, recommendedNext }
  - `DailyRecommendation`: { area, priority, reason }
- Updated on each quiz submit via `updateStats()`

**KFF Content Types:**
- Purpose: Modular representations of cognitive/emotional test scenarios
- Location: `src/data/kffTypes.ts`
- Types:
  - `KFFExercise`: { id, type, question, options, correctAnswer, explanation, difficulty, hints }
  - `SimulationResult`: { id, subtestType, score, maxScore, timeUsed, timeLimit, date, details }
  - `SubtestProgress`: { correct, total, lastPracticed }

**Route Mapping:**
- Purpose: Convert URL slugs to database IDs; maintain slug consistency
- Location: `src/lib/bmsRoutes.ts`
- Pattern:
  - URL slug "bio" → database ID "biologie"
  - URL slug "kap1" + "bio" → database ID "bio-kap1"
  - `subjectFromSlug()`, `chapterIdFromParams()` normalize params

**Spaced Repetition Entry:**
- Purpose: Track item review schedule for SRS algorithm
- Location: `src/store/useStore.ts`
- Interface: `SpacedItem`: { interval, nextReview, easeFactor, attempts, correct }

## Entry Points

**Application Bootstrap:**
- Location: `src/main.tsx`
- Triggers: Page load
- Responsibilities:
  1. Renders React app with StrictMode
  2. Wraps in ErrorBoundary for global error catching
  3. Imports global CSS (Tailwind + theme in `src/index.css`)
  4. Mounts to `#root` element

**Router Root:**
- Location: `src/App.tsx`
- Triggers: After main.tsx bootstrap
- Responsibilities:
  1. Sets up BrowserRouter with lazy-loaded routes
  2. Suspense fallback: LoadingSpinner component
  3. Public routes bypass AppShell (login, register, forgot-password)
  4. Protected routes wrapped in AuthGuard → AppShell
  5. Route structure:
     - `/login`, `/register`, `/forgot-password` (public)
     - `/` (Dashboard)
     - `/bms`, `/bms/:fach`, `/bms/:fach/:kapitel`, `/bms/quiz/:fach`
     - `/kff`, `/tv`, `/sek`, `/simulation`
     - `/lernplan`, `/analyse`, `/statistik`, `/community`, `/notizen`, `/karteikarten`, `/duell`
     - `/admin/*` (admin routes)

**AppShell (Layout/Orchestration):**
- Location: `src/components/layout/AppShell.tsx`
- Triggers: Entering protected routes (after AuthGuard)
- Responsibilities:
  1. Renders Sidebar + TopBar + BottomTabBar + Outlet
  2. Wraps Outlet with ErrorBoundary (ContentErrorBoundary)
  3. Monitors XP for level-ups → LevelUpOverlay
  4. Monitors interleaving schedule → InterleavingOverlay
  5. Displays RewardToasts, BadgeUnlockModal, HotStreakOverlay
  6. Manages CommandPalette (Cmd+K) state
  7. Syncs premium status to XP multiplier
  8. Listens for app focus to trigger sync

**Dashboard Home Page:**
- Location: `src/pages/Dashboard.tsx`
- Triggers: `/` route (first page after onboarding)
- Responsibilities:
  1. Displays user stats card (XP, level, streak)
  2. Shows progress cards for each module (BMS, KFF, TV, SEK)
  3. Quick-start buttons to main features
  4. Displays sync status + recent activity

**BMS Module Entry:**
- Location: `src/pages/BMS.tsx`
- Triggers: `/bms`, `/bms/:fach`, `/bms/:fach/:kapitel`
- Responsibilities:
  1. Parses route params via `subjectFromSlug()`, `chapterIdFromParams()`
  2. Routes to BMSKapitelView (chapter overview) or BMSUnterkapitel (subchapter lesson)
  3. Loads chapter list from `src/data/bmsKapitel/`
  4. Renders breadcrumb navigation
  5. Handles hierarchical navigation (subject → chapter → subchapter)

**Subchapter Lesson Page:**
- Location: `src/pages/BMSUnterkapitel.tsx`
- Triggers: User selects subchapter from BMS.tsx
- Responsibilities:
  1. Loads and renders chapter content (Kapitel.ts files)
  2. Composes MerksatzBox, SelbstTest, ChapterRenderer
  3. Tracks reading progress
  4. Handles self-test quiz submissions
  5. Wraps content in ContentErrorBoundary

## Error Handling

**Strategy:** Layered error boundaries + safe data loading + graceful fallbacks; never crash entire app

**Patterns:**

1. **Global ErrorBoundary:**
   - Location: `src/components/ErrorBoundary.tsx` (class component)
   - Catches: Render errors in entire component tree
   - Behavior: Shows error UI with app restart button, logs error details

2. **Content ErrorBoundary:**
   - Location: `src/components/ContentErrorBoundary.tsx`
   - Wraps: Chapter content rendering in BMSUnterkapitel
   - Behavior: Falls back to "Content failed to load" without affecting page

3. **Safe Imports (Dynamic Module Loading):**
   - Location: `src/pages/BMS.tsx`
   - Pattern: Wraps `import()` calls with try-catch
   - Fallback: Returns empty array if module fails
   - Prevents: "Failed to fetch dynamically imported module" crashes

4. **Safe Storage (localStorage):**
   - Location: `src/store/useStore.ts` → `safeStorage()`
   - Catches: QuotaExceededError, access denied, SSR context
   - Behavior: Returns null/undefined gracefully; doesn't throw
   - Used by: Zustand persist middleware

5. **Sanitize Persisted State:**
   - Location: `src/store/useStore.ts` → `sanitizePersisted()`
   - Validates: All fields match expected types
   - Filters: NaN, undefined, corrupted arrays/objects
   - Behavior: Returns empty defaults for invalid data
   - Runs: On every page reload

6. **Data Loading Fallbacks:**
   - Pattern: Async data loaders wrapped with try-catch
   - Fallback: Return empty arrays/null instead of throwing
   - Examples: `getKapitelBySubject()`, `bmsChaptersLoader.ts`

7. **Validation:**
   - Chapter validation: `validateChapter()` in BMSUnterkapitel
   - Route validation: `chapterIdFromParams()` checks against allowed IDs
   - Quiz result validation: Score <= total, answers array structure

8. **Supabase Error Handling (syncService.ts):**
   - Failures logged, don't crash app
   - Offline-first: Works without network
   - Retries on next sync interval (60s)
   - SyncToast shows status to user

## Cross-Cutting Concerns

**Logging:**
- Approach: Console methods throughout (console.error, console.log, console.warn)
- Pattern: Prefixed messages like "❌ Error in getKapitelBySubject:" for debugging
- Service: No external logging service configured (future phase)

**Validation:**
- Input validation: Chapter IDs, question IDs checked against allowed values
- Content validation: Kapitel/Unterkapitel structure validated on load
- Quiz validation: Answers validated before recording
- Location: `src/lib/validateChapter.ts`

**Authentication:**
- Approach: Supabase auth via `useAuth()` hook
- Dev Mode: DEV_USER used to skip authentication (`import.meta.env.DEV`)
- Premium Status: Checked in `useAuth()` → enables 1.5x XP multiplier
- Session Check: AuthGuard redirects to /login if no session

**Offline Capability:**
- Approach: All state written to localStorage; syncs to Supabase when online
- Behavior: App remains fully functional without network
- Sync: Queued when offline, sent when connectivity restored
- Status: SyncToast component shows sync state

**Performance:**
- Lazy-loaded pages: Reduce initial bundle via `lazy()` + Suspense
- Zustand selector hooks: Avoid unnecessary re-renders (subscribe to specific state slices)
- Code splitting: Vite build generates manualChunks (main-vendor: React, ReactDOM, Router, Zustand)
- Images: SVG diagrams in React components (not separate files)

---

*Architecture analysis: 2026-02-19*
