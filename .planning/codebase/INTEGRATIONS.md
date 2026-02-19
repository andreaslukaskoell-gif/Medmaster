# External Integrations

**Analysis Date:** 2026-02-19

## APIs & External Services

**Authentication & Database:**
- Supabase - Full backend service (auth, database, real-time)
  - SDK/Client: `@supabase/supabase-js` v2.95.3
  - Auth methods: Email/password, Google OAuth
  - Configured in: `src/lib/supabase.ts`

## Data Storage

**Databases:**
- Supabase PostgreSQL (via Supabase platform)
  - Connection: Environment variable `VITE_SUPABASE_URL`
  - Client: `@supabase/supabase-js`
  - Tables:
    - `profiles` - User profiles with subscription, XP, streak tracking
    - `bms_chapters` - BMS subject chapters (Biologie, Chemie, Physik, Mathematik)
    - `bms_subchapters` - Chapter subdivisions with content, learning objectives, self-tests
    - `stichwort_stats` - Keyword/topic performance metrics (attempts, success rate, confidence)
    - `fach_stats` - Subject-level statistics (weak/strong topics, recommendations)
    - `kff_tasks` - KFF (Kognitive Fähigkeiten und Fertigkeiten) exam tasks

**File Storage:**
- Local filesystem only - No cloud file storage integrated
  - Images/diagrams embedded in code: `src/components/diagrams/` (33 SVG files)

**Caching:**
- Browser localStorage - Used for offline state and sync queue
  - Sync status and queue keys in `src/lib/syncService.ts`
  - Chapter optimizations in `src/utils/chapterOptimizer.ts`
- No server-side caching (Redis, Memcached, etc.)

## Authentication & Identity

**Auth Provider:**
- Supabase Auth (PostgreSQL with JWT)
  - Implementations in `src/hooks/useAuth.ts`:
    - Email/password sign-up and sign-in
    - Google OAuth integration (`signInWithOAuth({ provider: "google" })`)
    - Password reset
  - JWT tokens managed by Supabase client
  - Session stored client-side via Supabase session handler

**User Types:**
- Development mode: Mock `DEV_USER` for local testing without auth
- Production: Real Supabase auth with Google OAuth option

## Monitoring & Observability

**Error Tracking:**
- Not detected - No Sentry, Rollbar, or similar integration

**Logs:**
- Browser console logging only
  - Format: Prefixed with `[module-name]` (e.g., `[sync]`, `[useAuth]`)
  - Debug helpers: `isDev` flag based on `import.meta.env.DEV`

## CI/CD & Deployment

**Hosting:**
- Not specified in codebase - Target is static hosting (Vercel pattern inferred from git history)

**CI Pipeline:**
- Not detected - No GitHub Actions, CircleCI, or similar config in repo

## Environment Configuration

**Required env vars (frontend/Vite):**
```
VITE_SUPABASE_URL        - Supabase project URL
VITE_SUPABASE_ANON_KEY   - Supabase anonymous API key
```

**Optional env vars (scripts/build only):**
```
SUPABASE_SERVICE_ROLE_KEY - For database seeding (never exposed to frontend)
```

**Secrets location:**
- `.env` - Development local overrides
- `.env.local` - Local machine overrides (git-ignored)
- `.env.example` - Template for required vars
- `.env.local.example` - Template for local overrides
- Runtime checks in `src/lib/supabase.ts` validate presence before client creation

## Webhooks & Callbacks

**Incoming:**
- Not detected - No webhook endpoints in application

**Outgoing:**
- Not detected - No outbound webhooks to external systems

## Real-Time Features

**Supabase Real-Time:**
- Auth state change listener in `src/hooks/useAuth.ts`:
  - `supabase.auth.onAuthStateChange()` - Triggers profile fetch and sync on login/logout
- Network event listeners in `src/lib/syncService.ts`:
  - `window.addEventListener("online")` - Resume offline sync queue
  - Offline queue stored in `localStorage` with key `medmaster-sync-offline-queue`

## Data Sync Strategy

**Push (Client → Supabase):**
- Auto-sync every 2 minutes via `startAutoSync()` in `src/lib/syncService.ts`
- Push on page unload (beforeunload event)
- Tables synced:
  - `profiles` - Learning phase, exam date, streak, answer totals
  - `stichwort_stats` - Topic performance data (upserted in batches of 200)
  - `fach_stats` - Subject statistics
- Offline queue: Retries on network recovery

**Pull (Supabase → Client):**
- On login via `startAutoSync()`
- Merges remote data with local (keeps newer dataset)
- Uses Zustand store (`adaptiveLearning`) as source of truth

## Database Configuration

**Service Role Key Usage:**
- `src/scripts/seedDatabase.ts` - Initial data load (runs locally, not in frontend)
  - Seeds `bms_chapters`, `bms_subchapters`, `kff_tasks`
  - Execution: `SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx src/scripts/seedDatabase.ts`

**Row-Level Security (RLS):**
- Not detailed in codebase - Assumed configured on Supabase project

---

*Integration audit: 2026-02-19*
