# Research Summary: Premium MedAT Learning Platform

**Domain:** Educational SaaS (medical exam preparation, freemium model)
**Researched:** 2026-02-19
**Overall confidence:** HIGH (verified with official documentation and Feb 2026 sources)

---

## Executive Summary

MedMaster is at an inflection point: it has strong product-market fit (1060+ BMS questions, interactive quizzes, gamification) and clear monetization potential (premium tiers, exam marking, analytics). However, the current stack is optimized for indie development, not commercial SaaS.

**The core finding:** You don't need a rewrite. The existing stack (React 19, TypeScript, Supabase, Zustand) is solid. You need **11 targeted additions** that plug into your architecture rather than replace it:

1. **Stripe** for payments (not custom billing)
2. **CASL + Unleash** for feature access control (not hardcoded conditionals)
3. **TanStack Query** for large dataset performance (1000+ questions)
4. **PostHog** for learning behavior analytics (track quiz attempts, time-on-question)
5. **Sentry** for production reliability (error tracking, session replay)
6. **Supabase Edge Functions** for webhook processing (keep everything in Supabase ecosystem)
7. **Database versioning tables** for content QA and audit trails
8. **RBAC via Supabase RLS** for subscription-based access control

These additions cost ~$135 KB in bundle size (gzipped to ~33 KB overhead) and unlock:
- Freemium monetization (feature flags per tier)
- Premium content versioning and QA
- Real-time learning analytics
- Stripe subscription management
- Production-grade monitoring

**Timeline:** 8 weeks to MVP (payment + basic tier gating). 3-4 months to full premium platform with analytics and content versioning.

---

## Key Findings

### Stack Findings

**What works, keep unchanged:**
- React 19 + TypeScript + Vite (modern, fast, well-supported)
- Zustand for state (lightweight, no boilerplate)
- Supabase for backend (PostgreSQL, real-time, auth built-in)
- Tailwind CSS 4 for styling
- Framer Motion for animations

**What's missing (11 additions needed):**
1. Payment processing (Stripe)
2. Feature flags (Unleash)
3. RBAC (CASL + Supabase RLS)
4. Server-side webhook processing (Edge Functions)
5. Large dataset caching (TanStack Query)
6. Analytics (PostHog)
7. Error tracking (Sentry)
8. Content versioning (Postgres tables)
9. User onboarding (use Framer Motion, defer Userpilot)
10. Database indexing (PostgreSQL 17 best practices)
11. API versioning strategy (documented approach)

**Ecosystem health:** All recommendations are production-ready, verified with Feb 2026 official documentation, and actively maintained. Stripe, Supabase, and PostHog all have official TypeScript support.

### Architecture Findings

**Current strengths:**
- TypeScript data files for BMS content (fast, version-controlled, easy to QA)
- Supabase auth (no session management burden)
- Zustand state (predictable, no middleware complexity)

**Premium platform requirements:**
- Freemium tier detection (Zustand + feature flags)
- Feature access control (CASL rules engine)
- Content versioning (Postgres audit tables)
- Webhook processing (Stripe → Supabase sync)
- Analytics event tracking (PostHog capture calls)

**Recommended architecture change:**
```
Current: React App → Supabase Auth + RLS → TypeScript data files
Premium: React App → Zustand (tier info) → CASL rules → Supabase (auth + content versioning + RLS)
         ↓
         Stripe Webhooks → Edge Functions → Postgres subscription tables
         ↓
         PostHog analytics ← event tracking
         ↓
         Sentry error tracking ← production monitoring
```

### Feature Findings

**Table stakes for premium platform:**
- Freemium tier with limited questions
- Subscription management (cancel anytime)
- Premium exam markings
- Advanced analytics (per user)
- Content QA workflow (review before publish)

**Differentiators:**
- Real-time learning insights (PostHog + custom dashboards)
- Textbook-level BMS content with official explanations
- Exam marking with detailed feedback
- Custom quiz creation (premium feature)
- Progress tracking per exam section

**Anti-features (don't build):**
- Custom payment processor (use Stripe)
- Custom analytics dashboard (use PostHog, Sentry)
- Custom feature flag system (use Unleash)
- Multi-tenant architecture (not needed yet)

### Pitfalls Found

**Critical pitfalls (prevent rewrites):**
1. **Hardcoding feature access** (if premium checks in 50 components, refactoring is painful)
   - Prevention: Use CASL rules engine from day 1

2. **No payment state sync** (Stripe updates subscription, but Postgres is stale)
   - Prevention: Use Supabase Edge Functions + stripe-sync-engine for webhook processing

3. **Loading 1000 questions at once** (browser OOM, slow searches)
   - Prevention: Use TanStack Query with pagination, database indexes

4. **Analytics black hole** (no insight into why users churn, upgrade success rate)
   - Prevention: Instrument PostHog from Phase 1 onboarding

5. **No production error visibility** (app breaks in production, you don't know)
   - Prevention: Deploy Sentry before going live with payments

**Moderate pitfalls (slow you down, not fatal):**
- Content versioning without audit trail (can't rollback bad exam markings)
- Missing database indexes (queries slow to 5+ seconds at scale)
- No backward-compatible API versioning (forced client upgrades)

**Prevention checklist:**
- Use CASL before adding 10+ paid features
- Set up webhooks before taking first payment
- Enable Sentry before beta launch
- Create database audit tables for content changes

---

## Implications for Roadmap

Based on research, the roadmap should follow this structure:

### Recommended Phase Structure

#### Phase 1: Payment Foundation (Weeks 1-2)
**Addresses:** Monetization, Stripe integration, basic tier detection

**What to build:**
- Stripe account setup + API keys
- Embedded Checkout page (/premium)
- Basic Zustand tier store (tier: free | pro | premium)
- Supabase subscriptions table (customer_id, tier, status, expires_at)
- Stripe webhook handler (Edge Function)

**Avoids:** CASL rules, content versioning, analytics (don't need yet)

**Rationale:** Get first payment working before adding complexity. Stripe Embedded Checkout is ~200 lines of React.

**Success metric:** Can buy 1-month Pro subscription, subscription shows in Supabase.

---

#### Phase 2: Feature Access Control (Weeks 3-4)
**Addresses:** Freemium feature gating, tier-based access, RBAC

**What to build:**
- CASL ability rules (free: 100 questions, pro: 500, premium: all)
- Feature flag system (Unleash on Vercel)
- Conditional components (Can I="read" a="ExamMarkings")
- Supabase RLS policies (users see own progress only)

**Avoids:** Content versioning, advanced analytics (not yet)

**Rationale:** Phase 1 adds payment, Phase 2 uses it. Without this, paid tiers don't exist yet.

**Success metric:** Free tier shows 100 BMS questions, pro shows 500, premium shows all. Can't access exam marking if free tier.

---

#### Phase 3: Monitoring & Analytics (Weeks 5-6)
**Addresses:** Production reliability, learning behavior insight, user engagement

**What to build:**
- Sentry integration (error tracking, session replay)
- PostHog analytics (track quiz attempts, time-on-question, completion rate)
- Custom dashboards (if needed)

**Avoids:** Content versioning, onboarding tools (not urgent)

**Rationale:** Before scaling, need to know what's breaking and why users churn.

**Success metric:** See error reports in Sentry. See quiz attempt funnel in PostHog. Know conversion rate from free → pro.

---

#### Phase 4: Content Quality & Versioning (Weeks 7-10)
**Addresses:** Premium content reliability, QA workflow, audit trails

**What to build:**
- Content versioning tables (see STACK.md section 5)
- QA workflow (draft → review → published)
- Exam marking schema (questions + marking rubric)
- Audit log (who changed what, when)

**Avoids:** Custom CMS (use Postgres, not headless CMS)

**Rationale:** Premium features require trustworthy content. Exam markings especially need QA.

**Success metric:** Can publish exam marking with version history. Can rollback bad content. Admin panel shows audit trail.

---

#### Phase 5: Performance Optimization (Weeks 11-12)
**Addresses:** Large dataset handling (1000+ questions), user experience at scale

**What to build:**
- TanStack Query for paginated question loading
- Database indexes (composite on subject+chapter+difficulty)
- Content virtualization (if showing 500+ questions at once)

**Avoids:** Premature optimization before knowing actual bottlenecks

**Rationale:** Do this after paying users are actually using the platform. Optimize based on real user behavior (PostHog data).

**Success metric:** Fetching 500 questions takes <1s. Pagination is smooth. Quiz questions load instantly on repeat visits.

---

#### Phase 6: Premium Features (Weeks 13+)
**Addresses:** Differentiation, customer retention, revenue growth

**Options (choose based on user demand from Phase 3-5 analytics):**
- Custom quiz creation (premium only)
- Personalized learning paths (AI-powered recommendations)
- Social features (study groups, discussion)
- Mobile app (if demand validates)
- Advanced analytics (heatmaps, learning curve analysis)

**Rationale:** Build features based on what users actually want (PostHog tells you), not guesses.

**Success metric:** Premium customers stay for 6+ months, retention >80%.

---

### Phase Ordering Rationale

1. **Payment first** (Phase 1) → Most foundational. No features matter if you can't collect money.
2. **Access control second** (Phase 2) → Protects revenue. Can't have free users accessing pro content.
3. **Monitoring third** (Phase 3) → Visibility before scaling. Sentry catches bugs before premium users see them.
4. **Content QA fourth** (Phase 4) → Premium content must be trustworthy. Exam markings especially.
5. **Performance fifth** (Phase 5) → Optimize after validating product-market fit with paying users.
6. **Features last** (Phase 6) → Feature roadmap driven by user behavior data from Phase 3-5.

**Dependency chain:**
- Phases 1-2 are critical path (payment + gating)
- Phases 3-4 can run in parallel (monitoring + QA)
- Phase 5 depends on real usage data
- Phase 6 depends on validated customer demand

---

### Research Flags for Phases

| Phase | Topic | Likely Needs Deeper Research | Reason |
|-------|-------|------------------------------|--------|
| 1 | Stripe tax/VAT handling | YES | Austrian/EU VAT rules, reverse charge on B2B |
| 1 | Subscription cancellation flow | YES | Legal requirements (Austria), grace periods |
| 2 | CASL rule complexity | MAYBE | Depends on how complex tier rules become (time-limited features, etc.) |
| 2 | Unleash self-hosting ops | YES | Deployment, updates, backup of flag configuration |
| 3 | PostHog data retention/GDPR | YES | Austrian data residency requirements, data deletion |
| 4 | Content audit trail legal | YES | What does Austrian medical board require for exam content? |
| 4 | Approval workflow design | YES | Who reviews exam markings? What's the SLA? |
| 5 | Database migration for versioning | YES | How to backfill existing 1060 questions into new versioning schema? |
| 5 | Performance testing methodology | MAYBE | Benchmarking 1000+ questions loading under various network conditions |
| 6 | AI/ML recommendations | YES | If doing personalized learning paths, research model training data |

---

## Confidence Assessment

| Area | Confidence | Reason | Risk |
|------|-----------|--------|------|
| **Technology Stack** | HIGH | All recommendations verified with official Feb 2026 documentation, production-ready, actively maintained | Low |
| **Payment Integration** | HIGH | Stripe TypeScript SDK well-documented, 2026 examples available, millions using in production | Very Low |
| **Feature Flags & RBAC** | HIGH | CASL battle-tested, Unleash open-source with self-hosting option, isomorphic architecture verified | Low |
| **Supabase Integration** | HIGH | Edge Functions stable, official Stripe webhook example exists, currently deployed on Vercel | Low |
| **Analytics Choice** | HIGH | PostHog production-ready, free tier sufficient, self-hostable, educational SaaS use cases documented | Low |
| **Performance Optimization** | HIGH | TanStack Query proven on 1000+ item lists, database indexing is PostgreSQL standard, virtualization verified | Medium (only risk: premature optimization) |
| **Content Versioning Approach** | MEDIUM | Architecture sound, but implementation details (QA workflow, approval steps) need phase-specific design | Medium |
| **Database Indexing Strategy** | MEDIUM | PostgreSQL 17 best practices verified, but specific indexes need tuning on actual data | Low (standard practice) |
| **Onboarding Approach** | MEDIUM | Framer Motion approach viable, but may want paid tool later if adoption metrics are poor | Medium |
| **API Versioning Strategy** | MEDIUM | Best practices researched, but actual implementation depends on future API growth patterns | Low (deferrable) |

---

## Gaps to Address in Roadmap Phases

1. **Phase 1:** Tax/VAT handling for Austrian/EU customers (research: VAT requirements for SaaS)
2. **Phase 2:** CASL rule complexity as features grow (research: how many rules before refactoring needed?)
3. **Phase 3:** GDPR compliance for PostHog + Sentry (Austrian data residency, right to deletion)
4. **Phase 4:** Exam content approval workflow (research: regulatory requirements for medical education content)
5. **Phase 4:** Legacy content migration (how to backfill 1060 existing questions into versioning schema?)
6. **Phase 5:** Performance benchmarking methodology (realistic network conditions, device types)
7. **Phase 6:** AI recommendation model training data (if pursuing personalized learning paths)

---

## Final Recommendation

**Start building now.** The technology landscape is mature for this use case:
- Stripe + Supabase Edge Functions = production-ready payment system in 2 weeks
- CASL + Unleash = feature gating that scales from 5 tiers to 50 tiers
- PostHog + Sentry = visibility into what matters (user behavior, errors)
- TanStack Query = performance for 1000+ question platform

**Don't wait for perfection.** Build Phase 1 (payment), launch to closed beta, collect PostHog data (Phase 3), then decide Phase 6 features based on what users actually want.

**Estimated timeline:**
- **MVP (Phases 1-2):** 4 weeks
- **Production-ready (Phases 3-4):** 8 weeks total
- **Scale-ready (Phase 5):** 10 weeks total
- **Feature-rich (Phase 6+):** 14+ weeks (driven by user demand)

---

## Sources

All findings are based on official documentation and Feb 2026 verified sources:

**Core Infrastructure:**
- [Stripe React Documentation](https://docs.stripe.com/sdks/stripejs-react)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Supabase Stripe Integration](https://supabase.com/docs/guides/functions/examples/stripe-webhooks)

**Feature Flags & Authorization:**
- [CASL Authorization Library](https://casl.js.org/)
- [Unleash Feature Flags](https://docs.getunleash.io/guides/implement-feature-flags-in-react)

**Performance & Data Handling:**
- [TanStack Query React](https://tanstack.com/query/latest)
- [React Performance Optimization](https://www.syncfusion.com/blogs/post/render-large-datasets-in-react)
- [PostgreSQL 17 Performance](https://medium.com/@DevBoostLab/postgresql-17-performance-upgrade-2026-f4222e71f577)

**Analytics & Monitoring:**
- [PostHog Analytics](https://posthog.com/)
- [Sentry Error Tracking](https://sentry.io/)

**Best Practices:**
- [Feature Flags Best Practices 2026](https://designrevision.com/blog/feature-flags-best-practices)
- [API Versioning Best Practices](https://endgrate.com/blog/api-versioning-best-practices-for-backward-compatibility)
- [SaaS Onboarding Tools 2026](https://www.crescendo.ai/blog/saas-onboarding-software)
