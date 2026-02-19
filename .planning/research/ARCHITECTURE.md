# Architecture Research: Freemium React Learning Platform

**Domain:** Educational SaaS with freemium access model
**Researched:** 2026-02-19
**Confidence:** HIGH (based on MedMaster codebase audit + current React patterns + freemium SaaS patterns)

---

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         PRESENTATION LAYER                          │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │ Page Routes  │  │ Components   │  │ UI Library   │               │
│  │ (lazy-loaded)│  │ (feature)    │  │ (Shadcn/UI)  │               │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘               │
│         │                 │                 │                       │
├─────────┴─────────────────┴─────────────────┴───────────────────────┤
│                      ACCESS CONTROL LAYER                           │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌──────────────────────┐  ┌─────────────────┐ │
│  │ AuthGuard       │  │ PremiumGate/Wrapper  │  │ FeatureFlags    │ │
│  │ (auth check)    │  │ (tier-based gating)  │  │ (rollout)       │ │
│  └────────┬────────┘  └──────────┬───────────┘  └────────┬────────┘ │
│           │                      │                       │          │
├───────────┴──────────────────────┴───────────────────────┴──────────┤
│                        STATE MANAGEMENT LAYER                       │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐  ┌──────────────────────┐  │
│  │ useStore     │  │ useAuth (tier)  │  │ Quiz/Content Stores  │  │
│  │ (Zustand)    │  │ subscription_    │  │ (adaptive learning)  │  │
│  │              │  │ tier + expires   │  │                      │  │
│  └──────┬───────┘  └────────┬────────┘  └──────────┬───────────┘  │
│         │                   │                      │              │
├─────────┴───────────────────┴──────────────────────┴──────────────┤
│                       DATA & CONTENT LAYER                        │
├─────────────────────────────────────────────────────────────────────┤
│  ┌────────────────┐ ┌──────────────┐ ┌──────────────────────────┐ │
│  │ Data Files     │ │ Content      │ │ Supabase Backend         │ │
│  │ (chunked)      │ │ Metadata     │ │ (profiles, sync)        │ │
│  │ /src/data/     │ │ (free/       │ │                         │ │
│  │                │ │  premium)    │ │                         │ │
│  └────────────────┘ └──────────────┘ └──────────────────────────┘ │
│                                                                   │
├─────────────────────────────────────────────────────────────────────┤
│                    PAYMENT & ENTITLEMENT LAYER                    │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────┐  ┌─────────────────────────┐  │
│  │ Subscription Resolver           │  │ Paywall Provider        │  │
│  │ (verify tier + expiration)      │  │ (payment gateway link)  │  │
│  └─────────────────────────────────┘  └─────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **AuthGuard** | Verify user authentication before rendering protected routes | Wraps app routes, checks `useAuth().isAuthenticated`, redirects to login if false |
| **PremiumGate** | Wrap premium features, show paywall if user doesn't meet tier requirement | Receives `requiredTier` prop, checks `useAuth().tier`, renders children or upgrade prompt |
| **FeatureRegistry** | Centralized source of truth for which features require which tiers | Object/config mapping features → {tier, xpThreshold, releaseDate} |
| **Zustand Store (useStore)** | Client-side persistent state: XP, progress, quiz results, bookmarks | Persisted to localStorage via `persist` middleware |
| **useAuth Hook** | Server state from Supabase: profile, subscription_tier, subscription_expires_at | Fetches from `profiles` table, handles session lifecycle |
| **Content Loader** | Smart data fetching for large question/chapter datasets | Lazy-loads chapter data, caches in-memory, supports pagination |
| **Subscription Resolver** | Single source of truth for tier validation and expiration checks | Middleware/hook that validates subscription_expires_at against current time |
| **Payment Integration** | Bridge between UI and payment provider (Stripe/Paddle) | Separate from business logic, isolated in integration layer |

---

## Recommended Project Structure

```
src/
├── components/
│   ├── AuthGuard.tsx                    # Auth entry point (existing ✓)
│   ├── learning/
│   │   ├── PremiumGate.tsx              # NEW: Tier-based feature gating
│   │   ├── PremiumFeature.tsx           # NEW: Wrapper for premium content
│   │   └── LevelGate.tsx                # Existing XP-based gate (keep)
│   ├── layout/
│   │   ├── AppShell.tsx                 # Root layout (existing ✓)
│   │   ├── TopBar.tsx                   # Nav bar (existing ✓)
│   │   └── Sidebar.tsx                  # Navigation (existing ✓)
│   ├── pricing/
│   │   ├── Pricing.tsx                  # Tier comparison page
│   │   ├── UpgradePrompt.tsx            # In-feature upgrade CTA
│   │   └── PricingCard.tsx              # Tier card component
│   └── [feature]/                       # Feature-specific components
│
├── pages/
│   ├── BMS.tsx                          # Free (read) + Premium (advanced quiz)
│   ├── Simulation.tsx                   # Premium only (gated by LevelGate)
│   ├── AITutor.tsx                      # Premium only
│   ├── Pricing.tsx                      # Public route
│   └── [others]/
│
├── hooks/
│   ├── useAuth.ts                       # Auth + tier info (existing ✓)
│   ├── usePremium.ts                    # NEW: Tier check + paywall logic
│   ├── useFeature.ts                    # NEW: Feature availability check
│   └── [others]/
│
├── store/
│   ├── useStore.ts                      # Main Zustand store (existing ✓)
│   ├── subscriptionStore.ts             # NEW: Subscription state (auto-refresh)
│   └── [others]/
│
├── lib/
│   ├── supabase.ts                      # Supabase client (existing ✓)
│   ├── featureRegistry.ts               # NEW: Feature → Tier mapping
│   ├── subscriptionResolver.ts          # NEW: Validate tier + expiry
│   ├── paymentIntegration.ts            # NEW: Payment gateway bridge
│   └── [utils]/
│
├── data/
│   ├── bms/
│   │   └── [subject]_part[N].ts         # Chunked question files
│   ├── chapters/
│   │   └── [chapter].ts                 # Chapter content
│   ├── metadata/
│   │   ├── contentTiers.ts              # NEW: Maps chapters → free/premium
│   │   ├── featureAccess.ts             # NEW: Features → tier requirements
│   │   └── contentMeta.ts               # NEW: Content metadata (date, version)
│   └── [other modules]/
│
├── types/
│   ├── features.ts                      # NEW: Feature type definitions
│   ├── subscriptions.ts                 # NEW: Tier types, entitlements
│   └── [existing]/
│
└── contexts/
    ├── PremiumContext.tsx               # NEW: Wrap app with premium state
    └── [existing]/
```

### Structure Rationale

- **`components/learning/PremiumGate.tsx`**: Centralized access control wrapper. Similar to existing `LevelGate.tsx` but keyed to `subscription_tier` rather than XP.
- **`hooks/usePremium.ts`**: Derived state hook that combines `useAuth()` tier check + feature registry lookup + expiration validation.
- **`lib/featureRegistry.ts`**: Single source of truth. Prevents scattered hardcoded tier checks across components.
- **`data/metadata/contentTiers.ts`**: Declarative mapping of which chapters/quizzes are free vs. premium. Enables future paywall experiments without code changes.
- **`store/subscriptionStore.ts`**: Tracks subscription state client-side. Auto-refreshes on app wake, validates expiry locally to handle offline scenarios.
- **`lib/subscriptionResolver.ts`**: Reusable logic to check if a subscription is valid (not expired, not revoked).

---

## Architectural Patterns

### Pattern 1: Declarative Feature Gating

**What:** Define features in a registry, wrap components with `<PremiumFeature>` that checks the registry.

**When to use:** For 5+ features with different tier requirements. Prevents scattered `if (isPremium)` checks.

**Trade-offs:**
- ✓ Single source of truth (easy to audit tiers)
- ✓ Safe to refactor tier requirements (change registry, not components)
- ✓ Easy A/B test tier requirements
- ✗ Slight indirection (registry lookup overhead negligible)

**Example:**

```typescript
// lib/featureRegistry.ts
export const FEATURES = {
  SIMULATION: { tier: "standard", minLevel: 15 },
  AI_TUTOR: { tier: "standard", minLevel: 5 },
  ADVANCED_ANALYTICS: { tier: "pro" },
  CUSTOM_STUDY_PLAN: { tier: "standard" },
  EXPORT_PDF: { tier: "pro" },
} as const;

// hooks/useFeature.ts
export function useFeature(featureName: keyof typeof FEATURES) {
  const { tier, isPremium } = useAuth();
  const feature = FEATURES[featureName];

  return {
    available: tier === feature.tier || (isPremium && feature.tier === "standard"),
    tier: feature.tier,
  };
}

// components/learning/PremiumFeature.tsx
export function PremiumFeature({
  feature,
  children,
  fallback
}: {
  feature: keyof typeof FEATURES;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const { available } = useFeature(feature);
  return available ? <>{children}</> : (fallback || <UpgradePrompt />);
}

// Usage in page
<PremiumFeature feature="SIMULATION">
  <Simulation />
</PremiumFeature>
```

### Pattern 2: Subscription Resolver (Server-Side Source of Truth)

**What:** When accessing a premium feature, resolve the subscription from Supabase in real-time (not just cached client state).

**When to use:** For features where subscription revocation matters (cancellation refunds, etc.). Otherwise, client-side tier is sufficient.

**Trade-offs:**
- ✓ Respects server-side tier changes immediately
- ✓ Prevents offline abuse (can't use expired subscription)
- ✗ Network latency (RTT adds ~100-200ms per check)
- ✗ Offline mode blocks premium features

**Example:**

```typescript
// lib/subscriptionResolver.ts
export async function resolveSubscription(
  userId: string,
  supabase: SupabaseClient
): Promise<{ tier: string; valid: boolean }> {
  const { data, error } = await supabase
    .from("profiles")
    .select("subscription_tier, subscription_expires_at")
    .eq("id", userId)
    .single();

  if (error || !data) return { tier: "starter", valid: false };

  const isExpired = data.subscription_expires_at &&
    new Date(data.subscription_expires_at) < new Date();

  return {
    tier: isExpired ? "starter" : data.subscription_tier,
    valid: !isExpired,
  };
}

// hooks/usePremium.ts
export function usePremium(featureName?: keyof typeof FEATURES) {
  const { user, tier } = useAuth();
  const [serverTier, setServerTier] = useState(tier);
  const [resolving, setResolving] = useState(false);

  async function validate() {
    if (!user) return false;
    setResolving(true);
    const { valid } = await resolveSubscription(user.id, supabase);
    setResolving(false);
    return valid;
  }

  return { tier: serverTier, validate, resolving };
}
```

### Pattern 3: Content Metadata Layer

**What:** Separate content access control from component logic. Store content tier requirements in data metadata.

**When to use:** When content is dynamic, chapters are added frequently, or tier requirements change post-launch.

**Trade-offs:**
- ✓ Non-developers can update tier requirements
- ✓ Easy to run paywall experiments
- ✗ One more file to maintain
- ✗ Risk of metadata/content mismatch

**Example:**

```typescript
// data/metadata/contentTiers.ts
export const CONTENT_TIERS = {
  "bio-001-zellbiologie": "free",
  "bio-002-genetik": "free",
  "bio-003-evolution": "standard",
  "chem-001-atombau": "free",
  "chem-002-quantenzahlen": "standard",
  "chem-003-kernchemie": "pro",
} as const;

export const QUIZ_TIERS = {
  "bms-quiz-adaptive": "standard",
  "simulation-full-test": "standard",
  "simulation-unlimited": "pro",
} as const;

// components/chapter/ChapterRenderer.tsx
function ChapterRenderer({ chapterId }: { chapterId: string }) {
  const { tier } = useAuth();
  const requiredTier = CONTENT_TIERS[chapterId as keyof typeof CONTENT_TIERS] || "free";

  if (requiredTier !== "free" && !canAccess(tier, requiredTier)) {
    return <PaywallOverlay tier={requiredTier} />;
  }

  return <ChapterContent chapterId={chapterId} />;
}
```

### Pattern 4: Lazy-Load Content Chunks (Scalability)

**What:** Split large data files into smaller chunks, load on-demand. Prevents initial bundle bloat.

**When to use:** When content exceeds 500KB or you're serving 1000+ questions. Currently ~6K lines of biology data = ~46KB per file (manageable), but approaching threshold.

**Trade-offs:**
- ✓ Faster initial page load
- ✓ Reduces memory footprint
- ✓ Better code-split opportunities
- ✗ Async data loading complexity
- ✗ Potential waterfall requests

**Example:**

```typescript
// Current structure (fine for now):
// src/data/questions/biologie_part1.ts → 46KB, 1200+ lines
// src/data/questions/biologie_part2.ts → 46KB, 1200+ lines

// When scaling: use dynamic imports
async function loadQuestions(subject: string, partNumber: number) {
  const module = await import(
    `@/data/questions/${subject}_part${partNumber}`
  );
  return module.questions;
}

// Or batch-preload:
export const questionLoaders = {
  biologie: () => Promise.all([
    import("@/data/questions/biologie_part1"),
    import("@/data/questions/biologie_part2"),
  ].map(p => p.then(m => m.questions))),
};
```

---

## Data Flow

### Request Flow (User Opens Premium Content)

```
User clicks "Simulation" (requires tier: "standard")
    ↓
Route renders <LevelGate requiredLevel={15}>
    ↓ (passes level check)
Component checks PremiumGate
    ↓
<PremiumFeature feature="SIMULATION"> wrapper
    ↓
useFeature("SIMULATION") → checks FEATURES registry
    ↓
    ├─ Check auth.tier (from useAuth)
    ├─ Check feature.tier (from registry)
    └─ Compare: isPremium?
    ↓
YES: Render <Simulation />
NO: Render <UpgradePrompt tier="standard" />
```

### Subscription Validation Flow (On Feature Access)

```
User accesses premium feature
    ↓
PremiumGate calls usePremium().validate()
    ↓
subscriptionResolver queries Supabase:
    SELECT subscription_tier, subscription_expires_at
    ↓
Check: subscription_expires_at > now()?
    ↓
YES: tier = subscription_tier
NO: tier = "starter" (revoked/expired)
    ↓
Return { tier, valid }
    ↓
Update client-side auth state
    ↓
Re-render with correct access
```

### State Management Flow

```
User authenticates via Supabase Auth
    ↓
useAuth() sets user + profile
    ↓
profile includes: subscription_tier, subscription_expires_at
    ↓
Components subscribe via:
  - const { isPremium } = useAuth()          // Fast, cached
  - const { valid } = usePremium()           // Validates server-side
    ↓
Zustand useStore persists:
  - xp, streak, completedChapters           (local-first)
  - quiz results, notes, bookmarks
    ↓
Supabase syncs:
  - profile tier changes
  - quiz results (for analytics)
```

### Key Data Flows

1. **Content Access Decision**: Page load → Check tier requirement (from registry or content metadata) → Check user tier (from auth) → Gate or render
2. **Subscription Change**: Supabase profile updates → `onAuthStateChange` triggers → `useAuth()` refetches profile → Components re-render with new tier
3. **Offline Handling**: Client-side useStore persists tier info. Can use cached tier offline, but premium features may fail gracefully.
4. **Paywall Integration**: User clicks "Upgrade" → Payment provider flow (Stripe/Paddle) → Supabase webhook updates profile → Auth state refreshes → UI updates

---

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| **0-1K users** | Current approach is fine. Client-side tier check + localStorage persistence. One Zustand store. Data files <100KB each. |
| **1K-10K users** | Start monitoring bundle size. Consider lazy-loading chapters. Supabase sync is reliable here. Implement subscription resolver for revoked subs. |
| **10K-100K users** | Chunked data loading becomes necessary (split biologie_part1.ts into smaller files or use database). Consider server-side rendering for SEO/sharing. Move XP calculation to server (prevent cheating). |
| **100K+ users** | Database for content (not flat files). Separate analytics backend. CDN for content distribution. Feature flags via remote config (LaunchDarkly, Segment). Move quiz state to Redis for session persistence. |

### Scaling Priorities

1. **First bottleneck (~10K users):** Bundle size. Solution: Code-split lazy routes + lazy-load chapter data with dynamic imports.
2. **Second bottleneck (~50K users):** Supabase query latency on every feature access. Solution: Cache subscription state client-side, refresh on app wake or time-based interval.
3. **Third bottleneck (~200K users):** Data volume (6K+ lines of data files). Solution: Move content to managed database, query by chapter/quiz ID instead of importing entire datasets.
4. **Fourth bottleneck (~1M users):** Write contention on quiz results/progress. Solution: Batch writes, use Redis for temporary storage, async sync.

---

## Anti-Patterns

### Anti-Pattern 1: Scattered Tier Checks

**What people do:**
```typescript
// components/chapter/QuizQuestion.tsx
if (user?.subscription_tier === "pro") {
  // show hint
}

// components/dashboard/StatCard.tsx
if (user?.subscription_tier === "standard" || user?.subscription_tier === "pro") {
  // show advanced stats
}

// pages/Simulation.tsx
if (user?.subscription_tier !== "starter") {
  // allow simulation
}
```

**Why it's wrong:**
- If you change tier names (starter → free, pro → enterprise), you have to update 30+ files
- Difficult to understand what features require what tiers at a glance
- Easy to accidentally grant wrong access (missed a check somewhere)
- Hard to A/B test tier requirements

**Do this instead:**
- Create `FEATURES` registry with single source of truth
- Use `useFeature()` hook everywhere
- Change tier requirements in one file (`featureRegistry.ts`)

### Anti-Pattern 2: Trusting Client-Side Tier Indefinitely

**What people do:**
```typescript
// Bad: Never validate server-side
const { isPremium } = useAuth();
if (isPremium) {
  return <SimulationUI />;
}

// If subscription expires, client still shows premium until page reload
```

**Why it's wrong:**
- User can use expired subscription (if client tier isn't refreshed)
- Subscription revocation (refund/chargeback) isn't respected immediately
- Offline users can use premium features indefinitely

**Do this instead:**
- For high-value features, call `usePremium().validate()` on access
- Validate on server-side before returning premium content
- Refresh subscription state periodically (app wake, route change)

### Anti-Pattern 3: Tying Content Gating to Component Props

**What people do:**
```typescript
// Bad: Tier requirement scattered in component hierarchy
<Chapter chapterId="bio-001" isPremium={true} />
<Chapter chapterId="bio-002" isPremium={false} />
<Chapter chapterId="chem-001" isPremium={true} />

// If you move chapters between tiers, must hunt down all <Chapter /> calls
```

**Why it's wrong:**
- Content tier requirements are implicit, not declarative
- Inconsistency between component prop and actual access rule
- Non-developers can't update tier requirements without coding

**Do this instead:**
- Create `CONTENT_TIERS` metadata mapping chapter IDs → tiers
- Query metadata inside component, don't pass as prop
- Update tier requirements in config file, not component code

### Anti-Pattern 4: Loading All Data Files at Startup

**What people do:**
```typescript
// App.tsx
import { biologieQuestions } from "@/data/questions/biologie_part1";
import { biologieQuestions2 } from "@/data/questions/biologie_part2";
import { biologieQuestions3 } from "@/data/questions/biologie_part3";
// ... 8 more imports

// Entire ~400KB of biology data loaded on every app start
// Even if user is viewing Chemistry
```

**Why it's wrong:**
- Initial bundle bloat
- Slows down time-to-interactive
- Unused data sitting in memory
- As data grows, bundle size becomes bottleneck

**Do this instead:**
- Lazy-load chapter data when page mounts: `await import("@/data/questions/biologie_part1")`
- Preload adjacent chapters on background (hovering links)
- For very large datasets (10K+ questions), query database instead

---

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Supabase Auth** | Session-based (JWT in localStorage). `useAuth()` hook manages session lifecycle. | On auth state change, refresh profile + subscription tier |
| **Supabase Database** | REST API via Supabase client. Query `profiles` table for tier info. | Consider caching tier in localStorage to avoid RTT lag |
| **Payment Provider** (Stripe/Paddle) | Client-side button redirects to checkout. Webhook updates Supabase. | Keep payment logic isolated (lib/paymentIntegration.ts) |
| **Analytics** (Segment/Mixpanel) | Track feature usage by tier. Identify conversion bottlenecks. | Log "upgrade_prompted", "upgrade_clicked", "payment_complete" |
| **Email Service** (SendGrid/AWS SES) | Subscription expiry reminders, upgrade upsells. | Triggered by scheduled job, not client-side |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| **AuthGuard ↔ AppShell** | Props/context. AuthGuard wraps AppShell, passes user. | Clean separation: auth is entry gate, shell is layout. |
| **useAuth ↔ useStore** | Independent reads. useAuth reads from Supabase, useStore from localStorage. | Don't sync between them. Auth is source of truth for subscription. |
| **useAuth ↔ PremiumGate** | useAuth provides tier, PremiumGate checks against feature registry. | Unidirectional: PremiumGate reads from useAuth, never writes. |
| **App Routes ↔ Data Loaders** | Route mounts component → component calls `await import(dataFile)` → renders content. | Lazy-load in component, not in route definition. |
| **Zustand Store ↔ Supabase Sync** | One-way sync: Supabase pushes changes, store is local cache. | Store never tells Supabase to update (use HTTP calls instead). |
| **useStore ↔ Quiz Session** | Separate concerns. Quiz session state in quizSessionStore, user progress in useStore. | Prevents bloated main store, easier to clear session on reset. |

---

## Recommended Build Order

1. **Phase 1: Access Control Foundation**
   - Implement `PremiumGate` wrapper component
   - Create `featureRegistry.ts` with FEATURES mapping
   - Implement `usePremium()` hook
   - Wrap existing pages with gates (Simulation, AITutor, etc.)
   - **Blocker:** Must complete before adding paywall

2. **Phase 2: Subscription State**
   - Add `subscription_tier` + `subscription_expires_at` to Supabase `profiles` table
   - Update `useAuth()` to fetch tier info
   - Implement `subscriptionResolver.ts` for validation
   - Add tier display to AppShell (show current tier badge)
   - **Dependency:** Phase 1 complete

3. **Phase 3: Content Metadata**
   - Create `contentTiers.ts` mapping chapters → free/premium
   - Update `ChapterRenderer` to check metadata
   - Implement graceful fallback for premium chapters (show paywall)
   - **Dependency:** Phase 2 complete (need tier to gate)

4. **Phase 4: Payment Integration**
   - Set up payment provider (Stripe/Paddle)
   - Implement `paymentIntegration.ts` bridge
   - Add `/checkout` route + payment flow
   - Set up webhooks to update Supabase on successful payment
   - Add `UpgradePrompt` component with checkout button
   - **Dependency:** Phase 1-3 complete

5. **Phase 5: Scaling (10K+ users)**
   - Monitor bundle size, implement code-split for chapters
   - Add `subscriptionStore.ts` for client-side caching
   - Implement refresh-on-app-wake for tier validation
   - **Dependency:** Early phases running smoothly

6. **Phase 6: Analytics & Experimentation** (optional)
   - Track feature usage by tier
   - A/B test tier requirements
   - Implement feature flags for remote tier changes
   - **Dependency:** All phases complete

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| **Access Control** | HIGH | MedMaster already has `LevelGate` + `useAuth`. Extending to tier-based gating is straightforward. RBAC patterns are well-documented. |
| **State Management** | HIGH | Zustand is proven, already in use. Adding subscriptionStore is low-risk. Client-side tier caching is standard SaaS pattern. |
| **Data Scaling** | MEDIUM | Current 46KB per biology file is manageable. At 10K users, dynamic imports will be necessary. Exact scaling threshold depends on user behavior. |
| **Payment Integration** | MEDIUM | No existing payment code in codebase. Integration strategy is sound, but execution depends on chosen provider (Stripe vs Paddle). |
| **Supabase Sync** | HIGH | Already implemented. Real-time auth state changes work. Just needs subscription_tier field added to profiles table. |

---

## Pitfalls to Avoid (Phase-Specific)

| Phase | Pitfall | Mitigation |
|-------|---------|-----------|
| Phase 1-2 | Forgetting to validate tier on backend → users can cheat | Implement subscriptionResolver.ts, validate on feature access |
| Phase 3 | Content metadata gets out-of-sync with actual content | Version metadata file, add CI check that all chapter IDs exist |
| Phase 4 | Payment webhook updates Supabase but user doesn't see tier change | Refresh useAuth on payment success, add client-side polling fallback |
| Phase 5 | Bundle size explosion as chapters accumulate | Implement lazy-loading early, don't wait for 100K users |
| Ongoing | Scattered tier checks make tier requirements unmaintainable | Enforce FEATURES registry usage in code review |

---

## Sources

- [React.js Best Practices In 2026 | AWS Builder](https://builder.aws.com/content/35mjuFWn4hSGCK6JjaZHFIGrzPG/reactjs-best-practices-in-2026)
- [React JS for Scalable SaaS Apps in 2026 | FutureStack Solution](https://www.futurestacksolution.com/react-js-scalable-saas-development-2026/)
- [Data Fetching Patterns in Single-Page Applications | Martin Fowler](https://martinfowler.com/articles/data-fetch-spa.html)
- [Implementing Role Based Access Control (RBAC) in React | Permit.io](https://www.permit.io/blog/implementing-react-rbac-authorization)
- [How to Use ReactJS for Secure Role Based Access Control | Cerbos](https://www.cerbos.dev/blog/how-to-use-react-js-for-secure-role-based-access-control)
- [Path To A Clean(er) React Architecture (Part 6) - Business Logic Separation](https://profy.dev/article/react-architecture-business-logic-and-dependency-injection)
- [React Folder Structure in 5 Steps [2025] | Robin Wieruch](https://www.robinwieruch.de/react-folder-structure/)
- [How To Structure React Projects From Beginner To Advanced | Web Dev Simplified](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
- [React project structure for scale: decomposition, layers and hierarchy | DeveloperWay](https://www.developerway.com/posts/react-project-structure)
- [MakerKit | Next.js SaaS Starter Kit](https://makerkit.dev/)
- [Gravity | SaaS Boilerplate for Node.js & React](https://usegravity.app)

---

*Architecture research for: Freemium React Learning Platform*
*Researched: 2026-02-19*
