# Runtime Bug Audit — Dead Links & Broken Features

---
agent: bug-auditor
status: COMPLETE
timestamp: 2026-04-07T12:00:00Z
duration: 180
findings: 12
errors: []
skipped_checks: []
---

## Summary
| Category | Count |
|----------|-------|
| Email Template Dead Links | 5 |
| React Rules of Hooks Violation | 1 |
| Orphaned Pages / Dead Routes | 2 |
| Silent Failure Risks | 2 |
| Feature Label Mismatch | 1 |
| Incorrect Email Address | 1 |

## Critical

### BUG-001: Email "Abmelden" (unsubscribe) link points to non-existent `/app/einstellungen`
**File:** `supabase/functions/send-email/index.ts:79`
**What user sees:** "Abmelden" link in every email footer
**What actually happens:** Link goes to `https://medmaster.at/app/einstellungen?unsubscribe=email`. No `/app/einstellungen` route exists in App.tsx. SPA fallback sends user to `/` which redirects to `/dashboard` for logged-in users. The `?unsubscribe=email` query param is **lost** in the redirect chain. User cannot unsubscribe via email link.
**Severity:** CRITICAL — paying customers cannot opt out of emails; potential GDPR compliance issue.
**Fix:** Change line 79 to:
```typescript
const unsubscribeUrl = `${SITE_URL}/einstellungen?unsubscribe=email`;
```

### BUG-002: Email CTA links use `/app/bms` — route does not exist
**File:** `supabase/functions/send-email/index.ts:676, 787, 816`
**What user sees:** "Jetzt loslegen", "Jetzt erste Fragen beantworten", "Streak retten" buttons in welcome, d1-reminder, and streak-risk emails
**What actually happens:** Links go to `https://medmaster.at/app/bms`. No `/app/bms` route exists. SPA fallback redirects to `/` then to `/dashboard` for logged-in users. User never lands on BMS page as intended.
**Severity:** CRITICAL — all actionable email CTAs lead to wrong page.
**Fix:** Replace `${SITE_URL}/app/bms` with `${SITE_URL}/bms`.

### BUG-003: Email CTA links use `/app` — route does not exist
**File:** `supabase/functions/send-email/index.ts:693, 745`
**What user sees:** "Weiterlernen" / "Jetzt weiterlernen" buttons in weekly-progress and re-engagement emails
**What actually happens:** Links go to `https://medmaster.at/app`. No `/app` route exists. SPA fallback sends to root, then redirect to `/dashboard`. Works by accident via redirect chain.
**Severity:** HIGH — works by accident, but fragile and loses any query params.
**Fix:** Replace `${SITE_URL}/app` with `${SITE_URL}/dashboard`.

### BUG-004: `/preise` route is behind AuthGuard — email links require login
**File:** `src/App.tsx:315` (route), `supabase/functions/send-email/index.ts:335` (link)
**What user sees:** "Jetzt Premium sichern" / "Vollen Zugang behalten" buttons in 8+ email templates (launch-announcement, launch-golive, trial-ending-7d/3d/today, post-trial-day1/3/7)
**What actually happens:** All conversion emails link to `${SITE_URL}/preise`. But `/preise` is inside the `<AuthGuard>` protected route group (App.tsx line 315). Users who are not currently logged in (e.g., clicking from email in a different browser, after session expired) are redirected to the login page instead of seeing pricing. The purchase intent is lost.
**Severity:** CRITICAL — conversion-critical CTA in ALL upsell emails requires authentication. Users who click "buy" see a login form instead.
**Fix:** Move `/preise` route outside the AuthGuard protected group, next to the other public routes (lines 257-280).

### BUG-005: React Rules of Hooks violation in PaymentSuccess
**File:** `src/pages/PaymentSuccess.tsx:78-83`
**What user sees:** Payment success page after Stripe checkout
**What actually happens:** A `useEffect` hook (line 83) is placed **after** a conditional `return <Navigate>` (line 78-80). This violates React's Rules of Hooks — hooks must not be called conditionally. React renders the early return on the first render when `!hasPaymentParam && !isPremium`, skipping the second `useEffect` entirely. On subsequent renders (when params change), the hook count changes, causing potential React crashes.
**Severity:** HIGH — could crash the payment success page. Currently "works" because the early return is stable, but any state change could break it.
**Fix:** Move the `useEffect` on line 83 above the conditional return on line 78. Guard with the same condition inside the effect.

## High

### BUG-006: `feedback@medmaster.at` may not exist — user feedback lost
**File:** `src/components/ReviewPrompt.tsx:138`
**What user sees:** "Feedback senden" link in review prompt
**What actually happens:** Opens `mailto:feedback@medmaster.at`. Project rules specify all emails should use `support@medmaster.at` (see CLAUDE.md: "Immer From + BCC = support@medmaster.at"). If `feedback@medmaster.at` is not configured, user feedback emails bounce.
**Severity:** HIGH — paying customers sending feedback to a potentially non-existent mailbox.
**Fix:** Change to `mailto:support@medmaster.at?subject=MedMaster Feedback`.

### BUG-007: Welcome email send-email invocation swallows all errors
**File:** `src/hooks/useAuth.ts:122-134`
**What user sees:** Nothing — welcome email silently fails
**What actually happens:** `supabase.functions.invoke("send-email", {...}).catch(() => {})` discards all errors. If the Edge Function is down, SMTP creds expire, or the function throws, no one is alerted. Welcome emails could silently stop working for weeks.
**Severity:** MEDIUM — no user-facing impact, but breaks onboarding emails without alerting the team.
**Fix:** At minimum: `.catch((err) => console.warn("[Welcome Email] Failed:", err))`.

## Medium

### BUG-008: `VITE_STRIPE_PAYMENT_LINK` missing silently degrades checkout
**File:** `src/lib/stripe.ts:51-54`
**What user sees:** Clicks "Premium kaufen" button — nothing happens
**What actually happens:** If `VITE_STRIPE_PAYMENT_LINK` env var is not set, `startCheckout()` returns `false` with only a `console.warn`. The button does nothing visible.
**Severity:** MEDIUM — if env var is accidentally removed from Vercel, checkout silently breaks.
**Fix:** Show a user-facing toast: `toast.error("Zahlung aktuell nicht verfügbar. Bitte versuche es später.")`.

### BUG-009: `progression.ts` references `/ai-tutor` route that doesn't exist
**File:** `src/lib/progression.ts:40, 62`
**What user sees:** Potentially a level-up overlay saying "AI-Tutor freigeschaltet!"
**What actually happens:** `FEATURE_REQUIRED_LEVEL` maps `/ai-tutor` to level 0 and provides "AI-Tutor" as an unlock label. No `/ai-tutor` route exists. The AI Tutor is actually an inline chat component (`AiTutorChat.tsx`), not a page. If the level-up overlay ever uses `getFeatureUnlockedAtLevel()`, it would show a misleading unlock message.
**Severity:** MEDIUM — misleading feature label.
**Fix:** Remove `/ai-tutor` from `FEATURE_REQUIRED_LEVEL`.

### BUG-010: WissenCheck page exists but has no route
**File:** `src/pages/WissenCheck.tsx:251, 280`
**What user sees:** Not reachable — but internal navigation calls target non-existent routes
**What actually happens:** WissenCheck.tsx has `navigate("/wissencheck")` and `navigate("/wissencheck/${id}")` calls, but App.tsx has no route for these paths. Dead internal navigation.
**Severity:** LOW — orphaned code, no user-facing impact unless someone bookmarked an old URL.

### BUG-011: Orphaned pages increase bundle (Duel.tsx, Analysis.tsx, Flashcards.tsx)
**Files:** `src/pages/Duel.tsx`, `src/pages/Analysis.tsx`, `src/pages/Flashcards.tsx`
**What user sees:** Nothing — these pages are not routed
**What actually happens:** Three page components exist with full implementations and imports but no routes. They are dead code. Not tree-shaken because they use side-effectful imports.
**Severity:** LOW — no user impact, but dead code bloat.

### BUG-012: Pricing page `/datenschutz` link in emails works — but `/preise` in emails is behind auth (see BUG-004)
**Note:** `${SITE_URL}/datenschutz` (line 168) is a public route and works correctly. `${SITE_URL}` (line 170, medmaster.at homepage) also works. Only the `/preise` and `/app/*` links are broken.

## Full Email Link Audit

| Email URL | Route Exists? | Public? | Status |
|-----------|--------------|---------|--------|
| `${SITE_URL}/app/einstellungen?unsubscribe=email` | NO (`/app/einstellungen` not a route) | N/A | **BROKEN** |
| `${SITE_URL}/app/bms` | NO (`/app/bms` not a route) | N/A | **BROKEN** |
| `${SITE_URL}/app` | NO (`/app` not a route) | N/A | **BROKEN** (works by accident via SPA fallback) |
| `${SITE_URL}/preise` | YES | NO (behind AuthGuard) | **BROKEN for logged-out users** |
| `${SITE_URL}/datenschutz` | YES | YES | OK |
| `${SITE_URL}` (homepage) | YES | YES | OK |

## Checklist

### Email Links (URGENT)
- [ ] Replace `/app/einstellungen` with `/einstellungen` in send-email/index.ts line 79
- [ ] Replace `/app/bms` with `/bms` in send-email/index.ts lines 676, 787, 816
- [ ] Replace `/app` with `/dashboard` in send-email/index.ts lines 693, 745
- [ ] Move `/preise` route outside AuthGuard to make it a public route

### React Bugs
- [ ] Fix PaymentSuccess.tsx useEffect hook ordering (move above conditional return)

### Cleanup
- [ ] Change feedback@medmaster.at to support@medmaster.at in ReviewPrompt.tsx
- [ ] Add error logging for welcome email failures in useAuth.ts
- [ ] Add user-facing error for Stripe checkout failure in stripe.ts
- [ ] Remove `/ai-tutor` from progression.ts
- [ ] Delete or route orphaned pages (WissenCheck, Duel, Analysis, Flashcards)

### Verified Working
- [x] `/impressum`, `/datenschutz`, `/agb` — all route to Legal.tsx (public routes, lines 264-266)
- [x] `/downloads/medat-10-fehler.html` — file exists in `public/downloads/`
- [x] Share URLs in shareUtils.ts — all point to `https://medmaster.at` (homepage, always works)
- [x] Stripe checkout handles missing env var (returns false, logs warning)
- [x] delete-account Edge Function error is properly caught and shown to user
- [x] `?payment=success` query param is properly read by ScrollToTop and PaymentSuccess
- [x] `?ref=` and UTM params are properly captured by ScrollToTop
