# Codebase Structure

**Analysis Date:** 2026-02-19

## Directory Layout

```
medmaster/
├── src/
│   ├── main.tsx                 # React app bootstrap (root mount point)
│   ├── App.tsx                  # Router root with lazy-loaded pages
│   ├── index.css                # Global Tailwind + theme CSS
│   ├── components/              # React UI components (114 files)
│   │   ├── layout/              # App shell chrome (Sidebar, TopBar, etc.)
│   │   ├── chapter/             # Chapter/subchapter renderers
│   │   ├── quiz/                # Quiz UI components
│   │   ├── ui/                  # Shadcn-like base components (button, card, etc.)
│   │   ├── bms/                 # BMS-specific components
│   │   ├── kff/                 # KFF-specific components
│   │   ├── tv/                  # TV-specific components
│   │   ├── sek/                 # SEK-specific components
│   │   ├── simulation/          # Simulation test components
│   │   ├── dashboard/           # Dashboard widgets
│   │   ├── learning/            # Learning overlays (LevelUp, HotStreak, etc.)
│   │   ├── badges/              # Badge unlock modals
│   │   ├── diagrams/            # SVG educational diagrams
│   │   └── ErrorBoundary.tsx    # Global error boundary
│   ├── pages/                   # Page components (70 files)
│   │   ├── BMS.tsx              # BMS subject/chapter selector
│   │   ├── BMSUnterkapitel.tsx  # Single subchapter lesson view
│   │   ├── KFF.tsx              # KFF subtest selector
│   │   ├── TV.tsx               # TV reading comprehension
│   │   ├── SEK.tsx              # SEK emotional intelligence
│   │   ├── Simulation.tsx        # Full mock exam
│   │   ├── Dashboard.tsx         # Home page with stats
│   │   ├── Lernplan.tsx          # Study plan generator
│   │   ├── Analysis.tsx          # Performance analytics
│   │   ├── LoginPage.tsx         # Auth entry
│   │   ├── Pricing.tsx           # Premium features
│   │   ├── AdminDashboard.tsx    # Admin tools
│   │   └── [...40+ other pages]  # Specialized learning pages
│   ├── store/                   # Zustand state stores
│   │   ├── useStore.ts          # Primary app state (XP, progress, quizzes)
│   │   ├── adaptiveLearning.ts  # Learning analytics & recommendations
│   │   ├── quizSessionStore.ts  # Current quiz session state
│   │   └── interleaving.ts      # Spaced repetition scheduling
│   ├── data/                    # Content & question data
│   │   ├── bms/                 # BMS question barrel exports
│   │   │   ├── index.ts         # Question interface & lookup functions
│   │   │   ├── biologie.ts      # Biology questions
│   │   │   ├── chemie.ts        # Chemistry questions
│   │   │   ├── physik.ts        # Physics questions
│   │   │   └── mathematik.ts    # Math questions
│   │   ├── bmsKapitel/          # BMS chapter/subchapter content
│   │   │   ├── types.ts         # Kapitel/Unterkapitel interfaces
│   │   │   ├── index.ts         # Barrel exports & lookup functions
│   │   │   ├── biologie/        # Biology chapters (with _part1.ts, _part2.ts, etc.)
│   │   │   ├── chemie/          # Chemistry chapters
│   │   │   ├── physik/          # Physics chapters
│   │   │   └── mathematik/      # Math chapters
│   │   ├── kffData.ts           # KFF base data & generators
│   │   ├── kffEmotionenErkennen.ts  # Emotions Recognition subtest
│   │   ├── kffEmotionenRegulieren.ts # Emotions Regulation subtest
│   │   ├── kffImplikationen.ts  # Social Implications subtest
│   │   ├── kffSozialesEntscheiden.ts # Social Decision subtest
│   │   ├── kffZahlenfolgen.ts   # Number Sequences subtest
│   │   ├── kffWortfluessigkeit.ts # Word Fluency subtest
│   │   ├── tvTextsExpanded.ts   # TV sets 1-5 (reading texts + questions)
│   │   ├── tvTextsExpanded2.ts  # TV sets 6-10
│   │   ├── sekDataNew.ts        # SEK task data (Erkennen, Regulieren, Entscheiden)
│   │   ├── badges.ts            # Badge definitions & progress calc
│   │   ├── glossary.ts          # Medical terms & definitions
│   │   ├── stichwortliste.ts    # Keyword index linked to chapters
│   │   ├── flashcards*.ts       # Flashcard sets
│   │   ├── formeln.ts           # Formula reference
│   │   └── CONTENT_GUIDE.md     # Data structure documentation
│   ├── lib/                     # Shared business logic utilities
│   │   ├── supabase.ts          # Supabase client init
│   │   ├── supabaseBMS.ts       # BMS data sync with DB
│   │   ├── syncService.ts       # User progress sync orchestration
│   │   ├── xp.ts                # XP/level calculations
│   │   ├── progression.ts       # Feature unlock logic
│   │   ├── bmsLookup.ts         # Question search/filter
│   │   ├── bmsRoutes.ts         # BMS URL path generation
│   │   ├── bmsChaptersLoader.ts # Chapter data loading & caching
│   │   ├── adaptivePlan.ts      # Learning plan generation
│   │   ├── smartRecovery.ts     # Weak area targeting
│   │   ├── learningArea.ts      # Topic classification
│   │   ├── stripe.ts            # Stripe payment API
│   │   ├── leaderboard.ts       # Ranking calculations
│   │   ├── memoryHeatmap.ts     # Knowledge retention visualization
│   │   ├── schwachstellenAnalyse.ts # Weakness analysis
│   │   ├── sounds.ts            # Audio feedback
│   │   ├── permissions.ts       # Feature access checks
│   │   ├── utils.ts             # Generic helpers (date, formatting)
│   │   └── [...12 more]         # Other utilities
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts           # Supabase auth & session
│   │   ├── useKFFResults.ts     # KFF results fetching
│   │   ├── useDueReview.ts      # Spaced repetition due items
│   │   ├── useKeyboardShortcuts.ts # Global hotkey bindings
│   │   ├── useLevelUpSound.ts   # Audio effects on level up
│   │   └── [5+ more]            # Domain-specific hooks
│   ├── contexts/                # React Context providers
│   │   └── BreadcrumbContext.tsx # Dynamic breadcrumb management
│   ├── utils/                   # Utility functions (parsing, optimization)
│   │   ├── listChapters.ts      # Chapter enumeration helpers
│   │   ├── parseKontrollfragen.ts # Extract control questions from content
│   │   ├── normalizeChapterContent.ts # Content cleanup
│   │   ├── splitChapterContent.ts # Chapter segmentation
│   │   └── [4 more]             # Data transformation utilities
│   ├── assets/                  # Static images/icons
│   └── scripts/                 # Build/migration scripts
│
├── public/                      # Static HTML (index.html, favicon)
├── .planning/                   # GSD codebase analysis documents
│   └── codebase/
│       ├── ARCHITECTURE.md
│       ├── STRUCTURE.md
│       ├── CONVENTIONS.md
│       ├── TESTING.md
│       ├── CONCERNS.md
│       ├── STACK.md
│       └── INTEGRATIONS.md
├── tsconfig.json                # TypeScript base config (paths alias @/*)
├── tsconfig.app.json            # App-specific TS config
├── vite.config.ts               # Vite build configuration
├── package.json                 # Dependencies, build scripts
├── tailwind.config.ts           # Tailwind CSS theming
└── eslint.config.mjs            # Lint rules
```

## Directory Purposes

**src/components/layout/**
- Purpose: App-wide navigation and chrome
- Contains: AppShell (route outlet + overlays), Sidebar (nav drawer), TopBar (header), BottomTabBar (mobile tab nav)
- Key files: `AppShell.tsx`, `Sidebar.tsx`, `TopBar.tsx`, `sidebarLayout.ts` (Tailwind margin sync)

**src/components/chapter/**
- Purpose: BMS chapter content rendering and interactive elements
- Contains: MerksatzBox, SelbstTest, InteractiveQuiz, ContentVisualizer, KapitelHeader, LernzielBox
- Used by: BMSUnterkapitel.tsx (subchapter page)
- Note: Each component handles one aspect of chapter rendering (merksätze, quizzes, diagrams, etc.)

**src/components/ui/**
- Purpose: Reusable base UI components (shadcn-like primitives)
- Contains: Button, Card, Badge, Progress, Skeleton, Breadcrumb, FloatingQuestionCounter
- Pattern: Tailwind-styled, often with TypeScript variants (CVA)

**src/components/quiz/**
- Purpose: Quiz-specific components shared across subjects
- Contains: QuizQuestion (single question + options), QuizResults, QuizProgress
- Used by: All quiz pages (BMS.tsx, KFF.tsx, etc.)

**src/components/diagrams/**
- Purpose: SVG educational diagrams organized by subject
- Subdirectories: biology/, chemistry/, physics/, math/, kff/
- Contains: 33 SVG/React diagram components for visual explanations

**src/data/bmsKapitel/**
- Purpose: BMS chapter hierarchy and lesson content (not questions)
- Key file: `types.ts` defines Kapitel, Unterkapitel, ContentSection, SelfTestQuestion
- Structure: Each subject (biologie/, chemie/, etc.) contains chapter files (_part1.ts, _part2.ts, index.ts barrel)
- Pattern: Content is pre-authored, served client-side; no database fetch required

**src/data/bms/**
- Purpose: BMS exam questions only (separate from chapter content)
- Key file: `index.ts` defines Question interface and lookup functions
- Pattern: Subject-specific barrel files (biologie.ts, chemie.ts, etc.) export arrays of questions
- Note: Currently empty in codebase; data structure ready for population

**src/store/**
- Purpose: Zustand global state stores
- Key stores:
  - `useStore.ts`: User XP, progress, quizzes, settings, badges (persisted to localStorage)
  - `adaptiveLearning.ts`: Per-topic success rates, learning stage, daily recommendations
  - `quizSessionStore.ts`: Active quiz state (current question, hot streak, rewards)
  - `interleaving.ts`: Spaced rep scheduling and overlay visibility

**src/lib/**
- Purpose: Business logic and external integrations
- Organized by concern: supabase (auth/sync), xp (progression), bms* (content lookup/loading), kff* (KFF logic), stripe (payments)
- Pattern: Pure functions with error handling; no side effects except where necessary

**src/pages/**
- Purpose: Route-level page components, each is one "screen" of the app
- Organization: Named after routes (BMS.tsx, Dashboard.tsx, LoginPage.tsx)
- Pattern: Orchestrate components + stores, handle route params, trigger data loading
- Special cases: BMSUnterkapitel.tsx (single subchapter), BMSKapitelView.tsx (chapter overview)

**src/utils/**
- Purpose: Utility functions for data transformation, parsing, and optimization
- Key files:
  - `listChapters.ts` - enumerate/print chapter structure
  - `parseKontrollfragen.ts` - extract quiz questions from content
  - `normalizeChapterContent.ts` - clean up content HTML/markdown
  - `splitChapterContent.ts` - break long chapters into sections

**src/contexts/**
- Purpose: React Context providers for app-wide non-global concerns
- Contains: BreadcrumbContext (dynamic breadcrumb management per page)
- Pattern: Provider at AppShell level, consumed by pages/components

**src/hooks/**
- Purpose: Custom React hooks for stateful logic
- Key hooks:
  - `useAuth()` - Supabase session + premium status
  - `useBreadcrumb()` - Access breadcrumb context
  - `useKFFResults()` - Fetch KFF performance data
  - `useDueReview()` - Spaced rep items ready for review
  - `useKeyboardShortcuts()` - Register global hotkeys
- Pattern: No duplicate hook logic; each hook has single responsibility

## Key File Locations

**Entry Points:**
- `src/main.tsx`: React root mount, ErrorBoundary wrap, global CSS import
- `src/App.tsx`: BrowserRouter, lazy-loaded route definitions, AuthGuard/AppShell wrapping
- `public/index.html`: HTML shell (id="root" mount point)

**Configuration:**
- `tsconfig.json`: TypeScript path alias `@/*` → `./src/*` (enables clean imports)
- `vite.config.ts`: Vite build config (React plugin, env vars, aliases)
- `tailwind.config.ts`: Design tokens, dark mode, responsive breakpoints
- `eslint.config.mjs`: Lint rules (typescript-eslint, react-hooks, react-refresh)
- `package.json`: Dependencies (React 19, Vite, Zustand, Supabase, Tailwind, Framer Motion)

**Core Logic:**
- `src/store/useStore.ts`: Primary app state (400+ lines, complex sanitization logic)
- `src/lib/supabase.ts`: Supabase client initialization
- `src/lib/xp.ts`: XP → level calculation, feature unlock thresholds
- `src/lib/bmsLookup.ts`: BMS question lookup by subject/chapter/difficulty
- `src/lib/adaptivePlan.ts`: Generate personalized learning recommendations
- `src/contexts/BreadcrumbContext.tsx`: Breadcrumb state provider

**Learning Content:**
- `src/data/bmsKapitel/types.ts`: Kapitel/Unterkapitel/ContentSection interfaces
- `src/data/bmsKapitel/index.ts`: Barrel exports of all chapters, lookup functions
- `src/data/bmsKapitel/{subject}/index.ts`: Subject-specific chapter exports (bio, chem, phys, math)

**UI Components (High-Impact):**
- `src/components/layout/AppShell.tsx`: Main layout wrapper, orchestrates overlays
- `src/components/chapter/MerksatzBox.tsx`: Key fact highlight boxes (configurable styles)
- `src/components/chapter/SelbstTest.tsx`: Interactive self-test quiz within lessons
- `src/pages/BMSUnterkapitel.tsx`: Subchapter lesson page (complex, 400+ lines)
- `src/pages/BMS.tsx`: BMS subject/chapter selector (hierarchical navigation)

**Authentication:**
- `src/components/AuthGuard.tsx`: Protect routes, redirect to login
- `src/hooks/useAuth.ts`: Supabase session, premium status
- `src/pages/LoginPage.tsx`: Auth entry point
- `src/pages/RegisterPage.tsx`: User signup

## Naming Conventions

**Files:**
- Page files: PascalCase (e.g., `Dashboard.tsx`, `BMS.tsx`, `LoginPage.tsx`)
- Component files: PascalCase (e.g., `MerksatzBox.tsx`, `ErrorBoundary.tsx`)
- Utility/data files: camelCase (e.g., `useStore.ts`, `syncService.ts`, `bmsLookup.ts`)
- Store files: camelCase with "Store" suffix when applicable (e.g., `quizSessionStore.ts`, `adaptiveLearning.ts`)
- Type definition files: lowercase.ts with "types" in name (e.g., `types.ts` in bmsKapitel/)

**Directories:**
- Feature domains: lowercase plural (e.g., `components/`, `pages/`, `hooks/`, `utils/`)
- Subject domains: lowercase (e.g., `data/bms/`, `components/kff/`, `components/tv/`)
- Contextual groupings: kebab-case if multi-word (e.g., `data/bmsKapitel/`, `layouts/`)

**Components:**
- Export default for page components: `export default function LayoutName() {}`
- Named export for reusable components: `export function ComponentName() {}`
- Props interface: `{ComponentName}Props` (e.g., `MerksatzBoxProps`)

**Functions:**
- Utility functions: camelCase (e.g., `calculateXP()`, `getLevelFromXP()`)
- Hooks: `use{Feature}` (e.g., `useAuth()`, `useBreadcrumb()`)
- Event handlers: `on{Event}` (e.g., `onClick`, `onSubmit`)

**Types/Interfaces:**
- Interfaces: PascalCase (e.g., `Question`, `Kapitel`, `QuizResult`)
- Type aliases: PascalCase (e.g., `type Subject = "biologie" | "chemie" | ...`)
- Enums: PascalCase (rare; prefer union types)

**Constants:**
- Global constants: UPPER_SNAKE_CASE (e.g., `SIDEBAR_MAIN_ML`, `STORAGE_KEY`, `INTERLEAVE_CHECK_MS`)
- Config objects: camelCase (e.g., `subjectLabels`, `pageVariants`)

## Where to Add New Code

**New Feature (Quiz Type, Learning Page):**
- Page component: `src/pages/{FeatureName}.tsx`
- Route: Add lazy import + route in `src/App.tsx`
- Domain components: `src/components/{domain}/{ComponentName}.tsx` (create new domain dir if needed)
- State: Add to relevant Zustand store (useStore.ts for user data, adaptiveLearning.ts for analytics)
- Data: `src/data/{domain}Data.ts` if content is large; import in page

**New Component (Reusable UI):**
- If base-level (button, card, etc.): `src/components/ui/{ComponentName}.tsx`
- If domain-specific (for BMS lessons): `src/components/chapter/{ComponentName}.tsx`
- If feature-specific (for simulations): `src/components/simulation/{ComponentName}.tsx`
- Props interface adjacent to component file
- Import path: Use `@/components/{domain}/{ComponentName}`

**New Utility Function:**
- Data transformation/parsing: `src/utils/{purpose}.ts` (e.g., `parseKontrollfragen.ts`)
- Business logic (calculation, lookup): `src/lib/{purpose}.ts` (e.g., `bmsLookup.ts`)
- Reusable formatting: `src/lib/utils.ts` (existing utility catch-all)

**New Data Source:**
- Questions: `src/data/{subject}/questions.ts` (if subject-specific) or `src/data/{domain}Data.ts` (if cross-subject)
- Chapter/lesson content: `src/data/bmsKapitel/{subject}/{ChapterName}.ts` (follow barrel export pattern)
- Lookup functions: `src/data/{domain}/index.ts` (barrel file with exports + lookup helpers)

**New Custom Hook:**
- `src/hooks/use{Feature}.ts` (e.g., `useKFFResults.ts`)
- If fetching data: use Supabase client or local store access
- If managing state: use useState/useReducer or access Zustand store
- Export as named function

**New Store State:**
- If user/quiz data: Add to `src/store/useStore.ts` (primary store)
- If learning analytics: Add to `src/store/adaptiveLearning.ts`
- If session-local (current quiz): Add to `src/store/quizSessionStore.ts`
- If feature-specific: Create new store in `src/store/{feature}Store.ts`
- Always use Zustand `create()` + `persist()` for persistence

## Special Directories

**src/_backup_FEBRUARY_18/**
- Purpose: Backup of old component/data structure from Feb 18
- Generated: Manual backup before refactor
- Committed: Yes (for rollback safety)
- Action: Safe to ignore for new code; do not import from

**src/.cursor/**
- Purpose: Cursor-specific configuration/rules
- Generated: By Cursor editor
- Committed: Yes
- Action: Do not edit; Cursor-managed

**src/scripts/**
- Purpose: Build-time migration and optimization scripts
- Contains: `migrateBMS.ts` (BMS data sync to Supabase), chapter optimization runners
- Usage: Invoked during development setup or data migrations
- Note: Scripts are not bundled; run via Node manually or in CI

**src/assets/**
- Purpose: Static images, icons (non-SVG diagrams)
- Contains: Logos, branded assets
- Import pattern: `import img from "@/assets/image.png"`

---

*Structure analysis: 2026-02-19*
