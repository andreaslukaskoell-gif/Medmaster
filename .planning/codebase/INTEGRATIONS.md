# External Integrations

**Analysis Date:** 2026-02-19

## APIs & External Services

**Supabase:**
- Comprehensive backend service providing authentication, database, and real-time sync
  - SDK/Client: `@supabase/supabase-js` v2.95.3
  - Configuration: `src/lib/supabase.ts`

## Data Storage

**Databases:**
- Supabase PostgreSQL
  - Connection: `VITE_SUPABASE_URL` environment variable
  - Client: `@supabase/supabase-js` v2.95.3
  - Location: `src/lib/supabase.ts`
  - Tables used: `profiles` (user profiles with subscription tier, XP, level, streak)

**Local Storage:**
- Browser localStorage - Client-side persistence
  - Quiz session data and progress
  - Offline sync queue (`medmaster-sync-offline-queue`)
  - Backup indices for chapter optimization
  - Adaptive learning statistics
  - Application state (Zustand persist middleware)
  - Reports and audit data

**File Storage:**
- Local filesystem - Static content only
  - No remote file storage configured
  - SVG diagrams: `src/components/diagrams/`
  - Static question data files

**Caching:**
- Zustand with persist middleware - Application state caching
- localStorage integration via custom storage wrapper
- No Redis or external caching service

## Authentication & Identity

**Auth Provider:**
- Supabase Auth
  - Implementation: Email/password authentication with session management
  - OAuth: Google OAuth integration available
  - Configuration: `src/hooks/useAuth.ts`
  - Environment Variable: `VITE_SUPABASE_ANON_KEY`

**User Session Management:**
- Supabase session tokens (auto-refresh)
- Development mode: Test user available (DEV_USER) for local development
- Session persistence across page reloads via Zustand + localStorage

**User Profile Schema:**
```typescript
{
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  medat_type: string;
  test_date: string | null;
  subscription_tier: "starter" | "standard" | "pro";
  subscription_expires_at: string | null;
  xp: number;
  level: number;
  streak_days: number;
}
```

## Monitoring & Observability

**Error Tracking:**
- None detected - No external error tracking service configured

**Logs:**
- Console logging only
- Development: Full logging via `console.log()` and `console.warn()`
- Locations: Supabase initialization checks, auth failures, sync errors
- Example: `src/lib/supabase.ts` - Environment variable validation

**Analytics:**
- No external analytics service integrated
- Local tracking via Zustand adaptive learning store
- Performance metrics calculated client-side: `src/lib/memoryHeatmap.ts`

## CI/CD & Deployment

**Hosting:**
- Vercel (configured)
- Configuration: `vercel.json` at project root
- SPA mode: All routes rewrite to `/index.html` for client-side routing

**CI Pipeline:**
- No external CI service detected in codebase
- Manual deployment script: `npm run shipit` (git add → commit → push)

**Build System:**
- Vite v7.3.1 with esbuild minification
- TypeScript pre-compilation: `tsc -b` before Vite build

## Real-Time Synchronization

**Offline Sync Queue:**
- localStorage-based queue for failed sync operations
- Location: `src/lib/syncService.ts`
- Automatic retry on network reconnection

**Sync Services:**
- `src/lib/sync.ts` - Main synchronization logic
- `src/lib/syncService.ts` - Background sync with offline fallback
- Auto-sync interval: Configurable in sync service
- Triggered on: Login, app focus, periodic intervals

**Data Synced:**
- Quiz progress and statistics
- Adaptive learning metrics
- User performance data
- Subscription status

## Webhooks & Callbacks

**Incoming Webhooks:**
- None detected

**Outgoing Webhooks:**
- None detected

**Supabase Realtime:**
- Not currently enabled
- Infrastructure exists but not actively used in current integration

## Payment & Subscription

**Payment Processor:**
- Stripe (placeholder configuration)
  - Configuration: `src/lib/stripe.ts`
  - Status: Configuration only - NOT IMPLEMENTED
  - Pricing defined for Standard ($14.99/mo) and Pro ($24.99/mo) tiers
  - TODO: Requires Supabase Edge Function to create checkout sessions

**Subscription Management:**
- Managed in Supabase `profiles` table
- Fields: `subscription_tier`, `subscription_expires_at`
- No active Stripe webhook integration

## Environment Configuration

**Required Environment Variables:**
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Optional/Placeholder Variables:**
- Stripe Price IDs (currently placeholders in `src/lib/stripe.ts`)

**Configuration Sources:**
- `.env` (tracked, for defaults)
- `.env.local` (untracked, for local overrides)
- `.env.example` - Template showing all required variables

**Secrets Location:**
- `.env.local` - Never committed to git
- Vercel Environment Settings - Production secrets
- No secret files or .env directories

## Network & Connectivity

**Online/Offline Detection:**
- Browser online/offline event listeners (implicit in sync logic)
- Network error detection in sync service
- Fallback to localStorage when offline

**Error Handling:**
- Network errors caught and queued for retry
- localStorage fallback for failed Supabase operations
- Graceful degradation when Supabase is unconfigured

## Data Flow Integration

**Quiz Session Flow:**
1. User starts quiz → Local session created in Zustand store
2. Quiz progress → localStorage + Zustand (real-time)
3. Quiz completion → Sync to Supabase (background or on save)
4. Offline → Queued in offline sync queue
5. Network restored → Automatic retry and sync

**Authentication Flow:**
1. Page load → Check Supabase session
2. Development mode → Skip auth, use DEV_USER
3. Logged in → Fetch profile from `profiles` table
4. Start background sync services
5. Logout → Clear user data and stop sync services

---

*Integration audit: 2026-02-19*
