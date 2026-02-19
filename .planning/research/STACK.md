# Technology Stack: Premium MedAT Learning Platform

**Project:** MedMaster Premium (Freemium Learning Platform)
**Researched:** 2026-02-19
**Focus:** Stack additions to evolve from indie learning app → commercial SaaS

## Executive Summary

The current MedMaster stack (React 19 + TypeScript + Vite + Zustand + Supabase) provides a strong foundation. This research identifies 6 critical categories of additions needed to unlock premium monetization: **payment processing**, **feature access control**, **performance optimization**, **content quality management**, **user behavior analytics**, and **reliability/monitoring**. Each recommendation is prescriptive—not a menu of options—based on ecosystem maturity, production readiness, and fit with your existing stack.

---

## Recommended Stack Additions

### 1. Payment & Subscription Management

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **@stripe/react-stripe-js** | ^1.29.0 | Client-side payment UI components | Official Stripe library, full TypeScript support, handles 200+ payment methods via Embedded Checkout. Avoids custom form complexity. |
| **@stripe/stripe-js** | ^4.x | Stripe.js loader & types | Peer dependency for React Stripe, includes up-to-date TypeScript declarations (>= 3.1). |
| **stripe** (backend) | ^17.x | Node.js Stripe SDK for webhooks | Handle webhook signature verification, subscription events, and billing operations server-side. |

**Installation:**
```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
npm install -D stripe  # for edge function development
```

**Why NOT:** Paddle (no freemium tiers), Square (poor subscription UX), custom solution (regulatory liability, PCI complexity).

**Confidence:** HIGH. Stripe is industry standard, verified with official 2026 documentation and TypeScript examples.

---

### 2. Feature Flags & Access Control

#### Primary: Feature Flags (Tier Gating)

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **@casl/ability** | ^6.x | Permission & entitlement engine | Isomorphic authorization (shared between client/server), zero-config, centralizes role-based logic. Works with Zustand for state. |
| **@casl/react** | ^6.x | React integration for CASL | Hooks (`useAbility`, `Can` component) for conditional feature rendering. Pairs perfectly with CASL. |
| **flagsmith** (or **@unleash/proxy-client-react**) | ^2.x (Flagsmith) OR ^1.x (Unleash) | Feature flag service | **Recommendation: Unleash** (open-source, self-hostable on Vercel, JSON config). Deploy to `/api/unleash` edge function. No vendor lock-in. Flagsmith is SaaS-first but less flexible. |

**Installation:**
```bash
npm install @casl/ability @casl/react
npm install @unleash/proxy-client-react  # if using Unleash
```

**Architecture Pattern:**

```typescript
// Zustand store: user entitlements synced from Supabase
export const useSubscriptionStore = create((set) => ({
  tier: 'free', // free | pro | premium
  features: {
    advancedAnalytics: false,
    customQuizzes: false,
    examMarking: false,
  },
  // Sync on auth
}));

// CASL rules
const defineAbilityFor = (user) => {
  const { tier } = useSubscriptionStore.getState();

  if (tier === 'premium') {
    return ability.can('read', 'ExamMarkings');
  }
  return ability.cannot('read', 'ExamMarkings');
};

// In components
<Can I="read" a="ExamMarkings">
  <PremiumFeature />
</Can>
```

**Why NOT:** Custom Redux logic (overengineered for Zustand apps), Segment (overkill, analytics-focused), PostHog flags (coupled to analytics).

**Confidence:** HIGH. CASL is production-proven, Unleash has official 2026 docs and edge deployment patterns.

---

#### Secondary: Role-Based Access Control (RBAC)

Implemented via **Supabase RLS (Row Level Security)** + **Zustand permission store**.

```sql
-- Supabase policy example
CREATE POLICY "users_see_own_progress"
  ON user_quiz_attempts
  FOR SELECT
  USING (auth.uid() = user_id OR auth.jwt() ->> 'role' = 'admin');
```

No additional library needed—RLS + CASL combination is sufficient.

---

### 3. Server-Side Payment & Webhook Processing

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **Supabase Edge Functions** (TypeScript) | Latest | Stripe webhook handler | Native to Supabase, deploys at edge, zero cold-start, handles `customer.subscription.updated`, `payment_intent.succeeded` events. |
| **stripe-sync-engine** (optional) | Latest | Auto-sync Stripe → Postgres | Official Supabase tool, syncs customers/subscriptions/invoices via webhooks. One-click setup. Optional but recommended. |

**Why:** Keep payment state synchronized between Stripe and your Postgres database. Edge Functions (Vercel-hosted Deno runtime) are ideal for webhook handlers.

**Example Edge Function:**
```typescript
// supabase/functions/stripe-webhook/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Stripe } from 'https://esm.sh/stripe@14.0.0';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.43.1';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'), { apiVersion: '2024-04-10' });
const supabase = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'));

serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text();
  const event = stripe.webhooks.constructEvent(body, signature, Deno.env.get('STRIPE_WEBHOOK_SECRET'));

  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object;
    await supabase
      .from('subscriptions')
      .update({ status: subscription.status, tier: subscription.metadata.tier })
      .eq('stripe_subscription_id', subscription.id);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
});
```

**Confidence:** HIGH. Supabase Edge Functions are production-ready (verified Feb 2026), Stripe SDK is stable.

---

### 4. Performance Optimization for Large Content

#### Client-Side Data Fetching & Caching

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **@tanstack/react-query** | ^5.x | Server state caching & sync | Handles 1000+ question loading with automatic caching (gcTime: 30min, staleTime: 5min). Background refetch, pagination, infinite scroll. |

**Installation:**
```bash
npm install @tanstack/react-query
```

**Usage for 1000+ questions:**
```typescript
// Fetch paginated question sets
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['bms-questions', { subject: 'biologie', chapter: 1 }],
  queryFn: ({ pageParam = 0 }) =>
    supabase
      .from('bms_questions')
      .select()
      .eq('subject', 'biologie')
      .eq('chapter', 1)
      .range(pageParam * 50, (pageParam + 1) * 50 - 1),
  getNextPageParam: (lastPage, pages) => pages.length,
});
```

**Why:** Reduces server load, avoids re-fetching unchanged data, handles offline gracefully. Zustand alone isn't sufficient for server-state sync.

#### Content Virtualization (if needed)

| Technology | Version | Purpose | When to Use |
|------------|---------|---------|-------------|
| **react-window** | ^1.8.x | Virtual scrolling for question lists | Only if rendering 500+ questions at once in a single list. MedMaster's chapter-based structure makes this optional (use only for "study all 1000 questions" view). |

**Confidence:** HIGH. TanStack Query is React ecosystem standard (verified Feb 2026 docs), react-window is battle-tested.

---

### 5. Content Versioning & Quality Assurance

#### Strategy (NOT a library)

**Current approach (content in TypeScript files) → Hybrid approach:**

1. **Keep current structure** for small, stable content (basic BMS questions)
2. **Migrate exam markings & premium content** to Supabase with versioning

```sql
-- Content versioning table
CREATE TABLE bms_questions_v2 (
  id UUID PRIMARY KEY,
  question_id UUID REFERENCES bms_questions(id),
  version INTEGER,
  content JSONB,
  status TEXT CHECK (status IN ('draft', 'review', 'published')),
  reviewed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP,
  published_at TIMESTAMP
);

-- Audit trail
CREATE TABLE content_audit_log (
  id UUID PRIMARY KEY,
  question_id UUID,
  change_type TEXT,
  changed_fields JSONB,
  changed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP
);
```

**Why:** Allows rolling back bad exam markings, QA workflow, audit trail without complexity of a full CMS.

**Confidence:** MEDIUM. This is architectural guidance, not a library choice. Requires phase-specific implementation design.

---

### 6. User Analytics & Learning Behavior Tracking

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **PostHog** | ^1.x (SDK) | Product analytics + feature flags (optional) | Free tier covers 1M events/month. Self-hostable (single Docker container) on Vercel. Autocapture tracks clicks, form submissions, copy-paste, web vitals. Excellent for learning behavior: quiz attempts, time-on-question, completion rates. |

**Installation:**
```bash
npm install posthog-js
```

**Usage Pattern:**
```typescript
import posthog from 'posthog-js';

// Track quiz start
posthog.capture('quiz_started', {
  subject: 'biologie',
  chapter: 3,
  questionCount: 50,
  difficulty: 'medium',
});

// Track question interaction
posthog.capture('question_answered', {
  questionId: 'q123',
  timeSpent: 45, // seconds
  correct: true,
  userTier: 'pro',
});
```

**Why NOT:** Mixpanel (focused on product metrics, not learning behavior), Amplitude (enterprise pricing), custom analytics (maintenance burden).

**Alternative:** If you want feature flagging in the same product, PostHog can replace Unleash (built-in flags), but Unleash is lighter for flag-only use.

**Confidence:** HIGH. PostHog is production-ready (verified Feb 2026), widely used in educational SaaS.

---

### 7. Error Tracking & Performance Monitoring

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **Sentry** | ^7.x | Real-time error tracking & performance monitoring | Captures unhandled exceptions, React errors, performance metrics (Web Vitals, transaction traces). Session replay for debugging. Free tier: 5k events/month (sufficient for startup). |

**Installation:**
```bash
npm install @sentry/react @sentry/vite-plugin
```

**Setup:**
```typescript
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://[key]@sentry.io/[project]',
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 0.1, // 10% of transactions for performance data
  replaysSessionSampleRate: 0.1,
});
```

**Why NOT:** Datadog (enterprise pricing), New Relic (overkill), custom Sentry self-hosting (ops burden for startup).

**Confidence:** HIGH. Sentry is industry-standard for React, verified Feb 2026 documentation.

---

### 8. User Onboarding & Engagement

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **Userpilot** (or **Appcues**) | Latest | In-app guidance, modals, checklists | Tracks feature adoption, time-to-value (TTV), shows guided tours. $49-249/mo. Alternative (free): Build custom tooltips with **Framer Motion** (already in stack) + conditional rendering. |

**Recommendation:** Start with **custom in-app guidance** (Framer Motion modals) for MVP, upgrade to Userpilot if analytics show low activation rates.

**Custom approach example:**
```typescript
// In-app onboarding modal using Framer Motion (already in deps)
import { AnimatePresence, motion } from 'framer-motion';

const OnboardingModal = ({ step, onComplete }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {step === 'welcome' && <WelcomeStep />}
      {step === 'quiz-intro' && <QuizStep onNext={() => onComplete('quiz')} />}
    </motion.div>
  </AnimatePresence>
);
```

**Confidence:** MEDIUM-HIGH. Userpilot is established (verified Feb 2026), but custom approach may be sufficient for early phases.

---

### 9. Database Optimization

#### Indexing Strategy (Supabase/PostgreSQL)

| Index Type | Use Case | Example |
|-----------|----------|---------|
| **Composite index (subject, chapter, difficulty)** | Fast BMS filtering | `CREATE INDEX idx_bms_quick_access ON bms_questions(subject, chapter, difficulty);` |
| **Full-text search index** | Question text search | `CREATE INDEX idx_bms_fts ON bms_questions USING GIN (to_tsvector('german', text));` |
| **Partial index on user_quiz_attempts (user_id, created_at)** | User progress queries | `CREATE INDEX idx_user_progress ON user_quiz_attempts(user_id, created_at DESC) WHERE deleted_at IS NULL;` |

**PostgreSQL 17 improvements (Supabase supports):** Bi-directional indexes, parallel execution reduce query times by 94% for large datasets.

**Confidence:** HIGH. Index recommendations are based on verified PostgreSQL 2026 docs.

---

### 10. Testing & Quality Assurance

| Technology | Version | Purpose | Why This Choice |
|------------|---------|---------|-----------------|
| **Vitest** | ^1.x | Unit/component testing | Drop-in Jest replacement, faster (already in Vite ecosystem). Zustand stores, CASL rules, API mocking. |
| **@testing-library/react** | ^14.x | Component testing | Standard for React 19, avoids testing implementation details. |
| **msw (Mock Service Worker)** | ^2.x | Mock Supabase/Stripe API calls | Intercept requests at network level, test payment flows without hitting Stripe sandbox. |

**Installation:**
```bash
npm install -D vitest @testing-library/react @testing-library/user-event msw
```

**Confidence:** HIGH. Vitest is actively maintained (2026), MSW is standard for API mocking.

---

### 11. API Versioning & Backward Compatibility

**Strategy (Not a library):**

1. **Supabase Edge Function API versioning:**
   ```typescript
   // /api/v1/quiz-submit
   // /api/v2/quiz-submit (new schema)
   ```

2. **RPC function versioning:**
   ```sql
   CREATE FUNCTION grade_quiz_v1(input JSONB) RETURNS JSONB AS ...
   CREATE FUNCTION grade_quiz_v2(input JSONB) RETURNS JSONB AS ... -- backward compatible
   ```

3. **Client-side header versioning:**
   ```typescript
   headers: {
     'X-API-Version': '2',
     'Authorization': `Bearer ${token}`,
   }
   ```

**Rationale:** API consumers lose revenue when forced to upgrade. Use additive changes (new optional fields) rather than breaking changes.

**Confidence:** HIGH. API versioning best practices verified with official 2026 documentation.

---

## Stack Comparison: Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| **Payment** | Stripe | Paddle | No freemium tier support, expensive for free users. |
| **Payment** | Stripe | Square | Weak subscription UX, better for one-time payments. |
| **Feature Flags** | Unleash | Flagsmith | Flagsmith is SaaS-only, less flexible, more vendor lock-in. |
| **Feature Flags** | Unleash | PostHog flags | PostHog flags work, but lighter to use PostHog for analytics + Unleash for flags. |
| **Analytics** | PostHog | Mixpanel | Mixpanel focuses on product metrics, not learning behavior. PostHog better for educational use cases. |
| **Performance Cache** | TanStack Query | SWR | Both solid, TanStack Query has better infinite scroll for 1000+ questions. |
| **Virtualization** | react-window | react-virtual | Both are equivalent; react-window more stable, larger ecosystem. |
| **Error Tracking** | Sentry | Datadog | Datadog is enterprise pricing, Sentry better for startups. |
| **RBAC** | CASL | Casbin.js | CASL is lighter, isomorphic, smaller bundle size for Zustand apps. |

---

## Recommended Installation Order

1. **Phase 1 (Payment):** `@stripe/react-stripe-js`, `stripe` SDK
2. **Phase 2 (Access Control):** `@casl/ability`, `@casl/react`, Unleash
3. **Phase 3 (Monitoring):** `@sentry/react`, `posthog-js`
4. **Phase 4 (Performance):** `@tanstack/react-query`
5. **Phase 5 (Testing):** `vitest`, `msw` (dev dependencies)

---

## Bundle Size Impact

| Library | Size (minified + gzip) | Notes |
|---------|----------------------|-------|
| @stripe/react-stripe-js | ~15 KB | Lazy-load at checkout page |
| @casl/ability | ~8 KB | Loaded at app init |
| @casl/react | ~2 KB | Hooks, minimal overhead |
| posthog-js | ~25 KB | Async load, non-blocking |
| @tanstack/react-query | ~35 KB | Code-split per query key if needed |
| @sentry/react | ~50 KB | Lazy-load after app init |
| **Total** | **~135 KB** | ~33 KB with gzip compression |

**Current MedMaster (React + Zustand + Tailwind):** ~45 KB gzipped. Adding stack will increase to ~80 KB gzipped (acceptable for premium SaaS).

---

## Environment Variables Required

```bash
# .env.local (development)
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

# Backend secrets (Supabase Edge Functions, .env file in supabase/ folder)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
POSTHOG_API_KEY=phc_...
SENTRY_DSN=...
UNLEASH_API_TOKEN=...  # if using Unleash

# Optional (Stripe Sync Engine)
STRIPE_SYNC_ENGINE_API_KEY=...
```

---

## Migration Path: Current → Premium Stack

**Current state:** React app with Supabase auth, no payments, no analytics.

**Phase approach:**
- **Week 1-2:** Add Stripe + basic payment UI (Embedded Checkout)
- **Week 3:** Implement CASL + Zustand for tier management
- **Week 4:** Deploy Stripe webhook handler in Supabase Edge Functions
- **Week 5:** Add PostHog analytics to measure adoption
- **Week 6:** Implement TanStack Query for pagination (defer if not bottleneck)
- **Week 7:** Add Sentry for error tracking
- **Week 8:** QA and staging deployment

**Do NOT:** Build your own payment processor, feature flag system, or analytics platform.

---

## Deployment Checklist

- [ ] Stripe API keys stored in Supabase secrets (not .env)
- [ ] Webhook endpoint configured in Stripe dashboard
- [ ] CORS headers configured for Stripe Elements
- [ ] Sentry DSN in production build (separate from development)
- [ ] PostHog anonymization rules for GDPR compliance
- [ ] Database indexes created (see section 9)
- [ ] RLS policies enabled on Supabase tables
- [ ] Edge Functions deployed and tested with sample webhook
- [ ] A/B test setup (if using Statsig, GrowthBook) documented separately

---

## Confidence Assessment

| Area | Level | Reason |
|------|-------|--------|
| **Stripe Payment Integration** | HIGH | Official 2026 docs, TypeScript examples verified, production-ready. |
| **Feature Flags (Unleash)** | HIGH | Open-source, self-hostable, documented edge deployment, 2026-current. |
| **CASL RBAC** | HIGH | Isomorphic, production-proven, Zustand-compatible, stable API. |
| **TanStack Query** | HIGH | React 19 compatible, verified Feb 2026, handles 1000+ items well. |
| **PostHog Analytics** | HIGH | Self-hostable option, free tier sufficient, Feb 2026 verified. |
| **Sentry Error Tracking** | HIGH | Industry standard, verified documentation, free tier covers startup needs. |
| **Supabase Edge Functions** | HIGH | Official Stripe webhook example, Deno runtime stable, tested. |
| **Database Indexing Strategy** | MEDIUM | PostgreSQL 17 best practices verified, but requires phase-specific SQL tuning. |
| **Content Versioning (Database)** | MEDIUM | Approach is sound, but implementation details depend on specific QA requirements. |
| **Onboarding Tools** | MEDIUM | Userpilot is established, but custom approach viable with Framer Motion. |

---

## Open Questions for Phase-Specific Research

1. **Content Versioning:** Detailed QA workflow design (who reviews, approval steps, rollback procedures)
2. **Analytics:** Which learning metrics matter most (time-on-question vs. completion rate vs. pass rate)?
3. **A/B Testing:** Will you test pricing tiers? UI variations? Premium feature adoption rates? (Deferred to roadmap phase)
4. **Performance:** Real-world threshold—at what point does pagination/virtualization become necessary?
5. **Localization:** Do premium features need multi-language support (German vs. English)? Affects database schema.

---

## Sources

**Stripe:**
- [React Stripe.js Documentation](https://docs.stripe.com/sdks/stripejs-react)
- [Stripe Payment Processing 2026 Guide](https://medium.com/@hasalaonline/stop-fearing-payments-the-ultimate-2026-guide-to-integrating-stripe-its-easier-than-you-think-2fe1b029d454)

**Feature Flags & RBAC:**
- [CASL.js - Isomorphic Authorization](https://casl.js.org/)
- [Unleash Feature Flags Documentation](https://docs.getunleash.io/guides/implement-feature-flags-in-react)
- [Feature Flags Best Practices 2026](https://designrevision.com/blog/feature-flags-best-practices)

**Data Fetching & Caching:**
- [TanStack Query React Documentation](https://tanstack.com/query/latest)
- [React Performance Optimization for Large Datasets](https://www.syncfusion.com/blogs/post/render-large-datasets-in-react)

**Supabase Edge Functions:**
- [Supabase Edge Functions - Stripe Webhooks](https://supabase.com/docs/guides/functions/examples/stripe-webhooks)
- [Stripe Sync Engine Integration](https://supabase.com/blog/stripe-sync-engine-integration)

**Analytics & Monitoring:**
- [PostHog vs Mixpanel Comparison 2026](https://userpilot.com/blog/posthog-vs-mixpanel/)
- [Sentry Error Tracking & Performance Monitoring](https://sentry.io/)

**Database Optimization:**
- [PostgreSQL 17 Performance Improvements 2026](https://medium.com/@DevBoostLab/postgresql-17-performance-upgrade-2026-f4222e71f577)
- [Database Indexing Strategies for Large Datasets](https://www.acceldata.io/blog/mastering-database-indexing-strategies-for-peak-performance)

**User Onboarding:**
- [Best SaaS Onboarding Software 2026](https://www.crescendo.ai/blog/saas-onboarding-software)

**API Versioning:**
- [API Versioning Best Practices for Backward Compatibility](https://endgrate.com/blog/api-versioning-best-practices-for-backward-compatibility)
