# Architecture

**Analysis Date:** 2026-02-19

## Pattern Overview

**Overall:** Frontend-driven React SPA with client-side state management (Zustand), lazy-loaded pages, and component-based UI architecture. The app is designed as a progressive learning platform for MedAT exam preparation with modular quiz/learning systems and content-driven hierarchies.

**Key Characteristics:**
- Single-page application with React 19 + React Router v7
- Zustand-based global state (no Redux/Context sprawl)
- Lazy-loaded page routes with Suspense boundaries
- Hierarchical content model: Subjects → Chapters → Subchapters → Content
- Content stored as TypeScript data files (not database-driven for BMS/TV/SEK)
- Supabase integration for authentication, user progress sync, and analytics

## Layers

**Presentation Layer:**
- Purpose: React components rendering UI, handling user interactions
- Location: `src/components/`
- Contains: 114 component files across domain-specific subdirectories (chapter, quiz, dashboard, sek, tv, kff, etc.)
- Depends on: Store (Zustand), Contexts (breadcrumbs), Hooks, Utils
- Used by: Pages, Layout shells (AppShell)

**Page/Route Layer:**
- Purpose: Full-page components that orchestrate major user journeys
- Location: `src/pages/` (70 page files: BMS.tsx, KFF.tsx, TV.tsx, SEK.tsx, Simulation.tsx, Dashboard.tsx, etc.)
- Depends on: Zustand stores, Components, Lib utilities
- Used by: App.tsx (router entry point)

**State Management Layer:**
- Purpose: Persistent global state for user data, progress, preferences
- Location: `src/store/` (Zustand stores: useStore.ts, adaptiveLearning.ts, quizSessionStore.ts, interleaving.ts)
- Stores:
  - `useStore.ts`: Primary app state (XP, streak, completed chapters, quiz results, badges, preferences)
  - `adaptiveLearning.ts`: Learning analytics, per-topic success rates, daily recommendations
  - `quizSessionStore.ts`: Current quiz session state (hot streaks, reward messages)
  - `interleaving.ts`: Spaced repetition strategy and interleaving overlays
- Persisted to localStorage via Zustand persist middleware with sanitization

**Content/Data Layer:**
- Purpose: Question data, chapter hierarchies, content structured as TypeScript
- Location: `src/data/`
- Contains:
  - `bms/` - Question interfaces and barrel exports (biologie.ts, chemie.ts, physik.ts, mathematik.ts)
  - `bmsKapitel/` - Chapter/subchapter content (types.ts, index.ts, biologie/, chemie/, physik/, mathematik/)
  - `kffData.ts` / `kffEmotionenErkennen.ts` / `kffEmotionenRegulieren.ts` / `kffImplikationen.ts` - KFF questions by subtest
  - `tvTextsExpanded.ts`, `tvTextsExpanded2.ts` - TV reading comprehension data
  - `sekDataNew.ts` - SEK emotional intelligence tasks
  - `badges.ts` - Badge definitions and progress logic
  - `glossary.ts` - Key terms and definitions
  - `kffGenerators.ts` - Generator functions for KFF procedural content

**Context/Hooks Layer:**
- Purpose: React Context for UI state (breadcrumbs), custom hooks for data fetching and business logic
- Location: `src/contexts/` (BreadcrumbContext.tsx) and `src/hooks/` (useAuth.ts, useKFFResults.ts, etc.)
- useAuth: Supabase authentication, premium status, permission checks
- useBreadcrumb: Dynamic breadcrumb management across routes

**Library/Utilities Layer:**
- Purpose: Shared business logic, integrations, formatting utilities
- Location: `src/lib/`
- Key modules:
  - `supabase.ts` - Supabase client initialization and configuration
  - `syncService.ts` - User progress sync to Supabase
  - `xp.ts` - XP calculation and level progression
  - `progression.ts` - Feature unlocking logic based on user level
  - `bmsLookup.ts` - BMS question lookup and filtering
  - `bmsRoutes.ts` - Route path generation for BMS navigation
  - `bmsChaptersLoader.ts` - Chapter data loading with error handling
  - `adaptivePlan.ts` - Adaptive learning plan generation
  - `smartRecovery.ts` - Weak area recovery recommendations
  - `learningArea.ts` - Domain classification and spaced repetition calculation
  - `stripe.ts` - Stripe payment integration
  - `leaderboard.ts` - User ranking calculations

**Layout/Shell Layer:**
- Purpose: App wrapper with persistent UI chrome (sidebar, topbar, footer)
- Location: `src/components/layout/`
- Components:
  - `AppShell.tsx` - Main layout with route outlet, level-up overlays, badge unlocks
  - `Sidebar.tsx` - Navigation drawer (mobile-adaptive)
  - `TopBar.tsx` - Header with user profile, menu toggle
  - `BottomTabBar.tsx` - Mobile-only tab navigation
  - `sidebarLayout.ts` - Tailwind margin sync for sidebar width

## Data Flow

**User Authentication Flow:**
1. User visits `/login` (LoginPage.tsx)
2. Supabase auth via `useAuth()` hook
3. Sets `authUser` in global store
4. App redirects to Onboarding or Dashboard
5. AuthGuard on protected routes verifies session

**Content Learning Flow (BMS):**
1. User navigates to `/bms` (BMS.tsx page)
2. Loads chapters from `bmsKapitel/index.ts` via `loadBMSChaptersSWR()`
3. User selects subject → chapter → subchapter
4. BMSUnterkapitel.tsx renders content:
   - Sections with markdown (ContentVisualizer.tsx)
   - MerksatzBox highlights key facts
   - SelbstTest interactive quiz
   - ContentErrorBoundary wraps failures
5. User progress stored in `useStore.quizResults` and synced to Supabase
6. Adaptive store updates topic statistics

**Quiz/Assessment Flow:**
1. User starts quiz (BMS, KFF, TV, SEK, or Simulation)
2. Quiz session initialized in `quizSessionStore`
3. Questions rendered with QuizQuestion.tsx component
4. User answers stored in `currentAnswers`
5. On submit: answer validation → XP grant → hot streak check → result saved
6. Result persisted to localStorage + Supabase (if syncing enabled)

**State Persistence & Sync:**
1. Zustand stores auto-persist via localStorage middleware (safe storage wrapper in useStore.ts)
2. On user action: state changes automatically serialized
3. Periodic sync via `syncService.ts` pushes state to Supabase when online
4. SyncToast component shows sync status (AppShell.tsx)
5. On page reload: localStorage restored with sanitization (prevents NaN/undefined corruption)

**Progression & Rewards:**
1. Quiz result XP added to `store.xp`
2. AppShell monitors XP via useEffect
3. When `getLevelFromXP()` increases: LevelUpOverlay triggered
4. Feature unlock logic checks `getFeatureUnlockedAtLevel()`
5. Badge logic: `getBadgeProgress()` checks completion criteria, stores in `earnedBadges`
6. BadgeUnlockModal animates earned badges

## Key Abstractions

**Question Type (BMS):**
- Purpose: Structured interface for medical questions
- Location: `src/data/bms/index.ts`
- Interface: `{ id, subject, chapter, topic, text, options: [{id,text}], correctOptionId, explanation, wrongExplanations, difficulty, tags }`
- Used by: All BMS pages and components that render questions

**Kapitel/Unterkapitel (Chapter Content):**
- Purpose: Hierarchical learning content structure with embedded quiz and explanations
- Location: `src/data/bmsKapitel/types.ts`
- Interfaces:
  - `Kapitel`: { id, title, subject, unterkapitel[], estimatedTime }
  - `Unterkapitel`: { id, title, content, sections[], merksätze, selfTest[], quiz[], imageUrl, additionalNotes }
  - `ContentSection`: { heading, text, merksatz, table }
- Used by: BMSUnterkapitel.tsx, BMSKapitelView.tsx, ContentVisualizer.tsx

**Quiz Result:**
- Purpose: Capture answered quiz attempt for analytics
- Location: `src/store/useStore.ts`
- Interface: `{ id, type, subject, score, total, date, answers: [{questionId, selectedAnswer, correct}] }`
- Persisted in store and synced to Supabase for analytics

**Learning Profile (Adaptive):**
- Purpose: Per-topic success rates and learner stage classification
- Location: `src/store/adaptiveLearning.ts`
- Contains: StichwortStat (per-topic), FachStat (per-subject), DailyRecommendation
- Updated on each quiz submit via `updateStats()`

**KFF Content Types:**
- Purpose: Modular KFF subtest representations (Emotions Recognition, Regulation, etc.)
- Location: `src/data/kffEmotionen*.ts`, `src/data/kffZahlenfolgen.ts`
- Pattern: Each subtest has scenario + 4 answer choices (A-D) with clinical explanations

## Entry Points

**App Bootstrap:**
- Location: `src/main.tsx`
- Creates React root, wraps App in StrictMode and ErrorBoundary, mounts to #root
- Imports global CSS (Tailwind + theme)

**Router Root:**
- Location: `src/App.tsx`
- BrowserRouter setup with lazy-loaded page routes
- Suspense fallback: LoadingSpinner
- Protected routes wrapped in AuthGuard
- Layout routes wrapped in AppShell
- Route structure:
  - Public: /login, /register, /forgot-password
  - Protected (under AuthGuard + AppShell):
    - / (Dashboard)
    - /bms, /bms/:fach, /bms/:fach/:kapitel, /bms/quiz/:fach
    - /kff, /tv, /sek, /simulation
    - /lernplan, /analyse, /statistik, /community
    - Plus admin routes (/admin/kapitel-editor, /admin/dashboard, etc.)

**Layout Shell:**
- Location: `src/components/layout/AppShell.tsx`
- Orchestrates: Sidebar, TopBar, BottomTabBar, Outlet (page content), overlays (InterleavingOverlay, LevelUpOverlay, BadgeUnlockModal)
- Monitors: interleaving schedules, XP level-ups, premium status, keyboard shortcuts (Cmd+K)

## Error Handling

**Strategy:** Defensive with fallbacks; never crash the entire app

**Patterns:**

**Component-Level ErrorBoundary:**
- `ErrorBoundary.tsx`: Class component at app root catches all unhandled render errors
- Displays user-friendly error UI with app restart button
- Logs error details to console for debugging

**Content ErrorBoundary:**
- `ContentErrorBoundary.tsx`: Wraps chapter content rendering
- If content fails to render, shows fallback without affecting page
- Used in BMSUnterkapitel.tsx around ChapterRenderer

**Data Loading Fallbacks:**
- Content load failures in pages return empty arrays or null (e.g., `getKapitelBySubject` returns [] on error)
- Quiz questions missing render "Question not found" message
- Supabase unavailable: app continues with localStorage-only state

**Try-Catch Patterns:**
- Safe storage wrapper (safeStorage) catches localStorage quota errors
- Sanitized persist (sanitizePersisted) filters corrupt data after reload
- Route helpers (bmsRoutes.ts) validate chapter IDs before creating URLs

**Validation:**
- Chapter validation: `validateChapter()` and `validateUnterkapitel()` in BMSUnterkapitel.tsx
- Quiz result validation: score <= total, answers array structured correctly

## Cross-Cutting Concerns

**Logging:**
- Console.error/warn for exceptions (ErrorBoundary.tsx logs caught errors)
- No external logging service integrated
- User-facing errors shown via toasts (SyncToast, RandomRewardToast)

**Validation:**
- Chapter/subchapter structure validated on load
- Quiz answers validated before recording
- BMS content arrays checked for null/undefined before iteration

**Authentication:**
- Supabase auth via useAuth hook
- AuthGuard wraps protected routes; redirects to /login if no session
- Premium status checked via `useAuth().isPremium` for feature unlocking

**Offline Support:**
- All state persists to localStorage
- Sync queued when offline, sent when connectivity restored
- App functions with stale data if Supabase unavailable

---

*Architecture analysis: 2026-02-19*
