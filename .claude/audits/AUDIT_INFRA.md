---
agent: infra-auditor
status: COMPLETE
timestamp: 2026-04-06T09:39:04Z
duration: 45
findings: 14
blockers: 3
errors: []
skipped_checks: []
---

# Infrastructure Audit — MedMaster Production

## Summary

| Area | Status | Critical Findings |
|------|--------|-------------------|
| Supabase Edge Functions | WARN | 3 issues (env crash, model mismatch, SMTP duplication) |
| Auth Flow | PASS | Defensive coding, minor edge cases |
| Payment/Premium Flow | FAIL | 2 critical issues (checkout/webhook mismatch, profile downgrade race) |
| Vercel Config | PASS | Well-configured, SPA fallback correct |
| Environment Variables | WARN | 2 issues (no runtime validation, secret inventory gap) |
| Data Integrity | WARN | 2 issues (schema skip silences errors, no backup strategy visible) |
| Error Boundaries | PASS | Global + content boundaries in place, Sentry configured |
| Security Headers | PASS | CSP, HSTS, X-Frame-Options, CORP all configured |
| CORS | PASS | No wildcard, origin restricted to SITE_URL |
| Health Check | WARN | No `/health` endpoint for external monitoring |

---

## BLOCKER Issues (Severity: Critical)

### INFRA-001: create-checkout creates SUBSCRIPTION but webhook expects ONE-TIME payment
**Severity:** CRITICAL | **Likelihood:** HIGH (if create-checkout is ever used)
**File:** `supabase/functions/create-checkout/index.ts:101`
**File:** `supabase/functions/stripe-webhook/index.ts:79`

The `create-checkout` Edge Function creates a Stripe Checkout Session with `mode: "subscription"` (line 101), but the `stripe-webhook` handler for `checkout.session.completed` treats every checkout as a **one-time payment** -- it sets `subscription_tier: "premium"` permanently with no expiry date.

Meanwhile, the `customer.subscription.updated` and `customer.subscription.deleted` handlers (lines 373-408) use `stripe_customer_id` to match users, but the checkout handler stores `session.customer` (which is a Stripe Customer ID string) into `stripe_customer_id`. If a subscription is later cancelled, the user would be downgraded -- but the one-time payment model means they already paid permanently.

**The real flow today** uses Stripe Payment Links (via `src/lib/stripe.ts`), which bypasses `create-checkout` entirely. But if anyone calls `create-checkout`, they would create a subscription that could be cancelled later, revoking premium access that was sold as "einmalig" (one-time).

**Fix:**
1. Change `create-checkout` to `mode: "payment"` to match the one-time model, OR
2. Delete/disable `create-checkout` since the app uses Payment Links exclusively
3. Remove or guard the `customer.subscription.updated/deleted` handlers since one-time payments do not generate these events

---

### INFRA-002: Webhook crashes on startup if STRIPE_SECRET_KEY is missing
**Severity:** CRITICAL | **Likelihood:** MEDIUM
**File:** `supabase/functions/stripe-webhook/index.ts:14`
**File:** `supabase/functions/create-checkout/index.ts:8`

Both functions use `Deno.env.get("STRIPE_SECRET_KEY")!` with the non-null assertion at the **module level** (outside the request handler). If this secret is not set in Supabase, the function will crash on cold start with a Stripe constructor error -- not on first request, but during module initialization. This means:

- No error response is returned to Stripe (Stripe sees a 5xx from Supabase infra)
- No alert email is sent (the alert logic is inside the try/catch of the request handler)
- The crash is silent -- you would only see it in Supabase function logs

Similarly, `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` use `!` assertions at module level in all edge functions.

Contrast this with `STRIPE_WEBHOOK_SECRET` which correctly checks for existence (line 16-18) and logs an error. But even that log happens only once on cold start.

**Fix:**
Wrap all `Deno.env.get()!` calls in validation that returns a clear error. Or move Stripe client initialization inside the request handler with a guard:
```typescript
const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
if (!STRIPE_SECRET_KEY) {
  console.error("STRIPE_SECRET_KEY is not set — webhook will fail");
}
// Inside handler:
if (!STRIPE_SECRET_KEY) return new Response("Server misconfigured", { status: 503 });
```

---

### INFRA-003: Profile fetch failure silently downgrades NEW users to starter
**Severity:** CRITICAL | **Likelihood:** MEDIUM
**File:** `src/hooks/useAuth.ts:197-215`

When `fetchProfile` returns `null` data (no profile row, OR an RLS/JWT timing issue), the code at line 198-215 checks if a previous profile exists and preserves it. However, for a **brand-new user who just paid**, the first profile fetch after signup might return null due to:
- RLS policy timing (JWT not yet propagated)
- Network error between signup and profile creation
- Supabase cold start

In this case, `prev` is `null` (no previous profile), so the user is assigned `subscription_tier: "starter"` (line 209). The webhook may have already set them to premium in the database, but the **client sees starter** until the next successful fetch.

Combined with the `usePermissions` hook which uses this tier to enforce the paywall, the user could see locked content immediately after paying.

The `refreshProfile` polling in `PaymentSuccess.tsx` mitigates this (polls every 2s for 60s), but if the initial auth flow resolves with starter before the user reaches PaymentSuccess, routes guarded by `isPremium` (like `/simulation`) would redirect them away.

**Fix:**
1. Never set a fallback tier of "starter" for users whose profile row exists in the DB but failed to load. Instead, keep `profile` as `null` and treat `null` profile + authenticated user as "loading" in the permissions hook.
2. Add a `profileLoading` state separate from auth `loading`.

---

## HIGH Issues

### INFRA-004: No health check endpoint for production monitoring
**Severity:** HIGH | **Likelihood:** HIGH (silent failures go undetected)

There is no `/health` or `/api/health` endpoint. The `npm run healthcheck` script checks routes return 200, but this is a manual/CI check, not a live monitoring endpoint. If Supabase goes down, or the Stripe webhook breaks again, there is no automated alerting beyond the email alerts in the webhook code.

**Fix:**
1. Add a Supabase Edge Function `/health` that checks: DB connectivity, Stripe API reachability, SMTP connectivity
2. Wire it to an uptime monitor (UptimeRobot, BetterStack, etc.)

---

### INFRA-005: Schema skip mechanism silences ALL Supabase errors for 5 minutes
**Severity:** HIGH | **Likelihood:** MEDIUM
**File:** `src/lib/supabaseSchemaSkip.ts`
**File:** `src/lib/supabase.ts:60-79`

If the initial probe query to `profiles` fails (e.g., transient network error, Supabase maintenance), the `probeResult` is set to `false` and ALL `supabase.from()` calls return `{ data: null, error: null }` for the rest of the session (up to 5 minutes via TTL).

This means: no progress is saved, no profile is loaded, no premium status is checked. The user appears to be a free/starter user with no data. All sync operations silently no-op.

**Fix:**
1. The probe should retry on failure (exponential backoff) instead of giving up permanently
2. The schema skip should only apply to schema-related errors (PGRST301, 404), not network errors
3. Consider removing the probe entirely and handling errors per-request

---

### INFRA-006: Rate limiter state lost on every cold start (edge functions)
**Severity:** HIGH | **Likelihood:** MEDIUM
**File:** `supabase/functions/stripe-webhook/index.ts:42`
**File:** `supabase/functions/create-checkout/index.ts:19`

The in-memory rate limiter (`rateLimitMap`) resets on every cold start. Supabase Edge Functions have aggressive cold start behavior -- a function may be restarted every few minutes during low traffic. This makes the rate limiter ineffective against sustained abuse.

**Fix:**
For webhooks, Stripe already handles replay protection via signatures, so the rate limiter is defense-in-depth. But for `create-checkout`, consider moving rate limiting to the database (e.g., count rows in a table with TTL).

---

### INFRA-007: support-bot has raw IMAP/TCP implementation with no timeout
**Severity:** HIGH | **Likelihood:** MEDIUM
**File:** `supabase/functions/support-bot/index.ts:281-412`

The IMAP implementation uses raw `Deno.connectTls` with no connection timeout, read timeout, or write timeout. If the IONOS IMAP server hangs, the edge function will hang until Supabase kills it (default 60s wall time for edge functions). During this time:
- The bot cannot process other emails
- The cron trigger sees a timeout error
- No emails are replied to

Also, IMAP credentials are sent as plaintext in the LOGIN command (line 338): `LOGIN "${SUPPORT_IMAP_USER}" "${SUPPORT_IMAP_PASS}"`. While the connection is TLS, the password is not escaped -- if the password contains a `"` character, the IMAP command will break.

**Fix:**
1. Add a timeout wrapper: `Promise.race([connectTls(...), timeout(10000)])`
2. Escape IMAP credentials properly
3. Consider using a proper IMAP library instead of raw TCP

---

## MEDIUM Issues

### INFRA-008: No CORS headers on stripe-webhook responses
**Severity:** MEDIUM | **Likelihood:** LOW
**File:** `supabase/functions/stripe-webhook/index.ts`

The `stripe-webhook` function does not set CORS headers. This is correct for server-to-server webhook calls from Stripe. However, it also does not handle OPTIONS preflight requests. If Stripe ever changes their webhook delivery mechanism, or if someone tries to test the webhook from a browser, it will fail silently.

This is not a real issue today but noted for completeness. The `create-checkout` function correctly handles CORS (line 36-38).

---

### INFRA-009: Missing environment variable inventory for Supabase secrets
**Severity:** MEDIUM | **Likelihood:** HIGH (already caused the webhook incident)

There is no single source of truth documenting which Supabase secrets must be set. The required secrets are scattered across 6 edge functions:

| Secret | Used In | Critical? |
|--------|---------|-----------|
| `STRIPE_SECRET_KEY` | stripe-webhook, create-checkout | YES |
| `STRIPE_WEBHOOK_SECRET` | stripe-webhook | YES |
| `STRIPE_PRO_PRICE_IDS` | stripe-webhook | No (defaults to "standard") |
| `SUPABASE_URL` | all functions (auto-set by Supabase) | YES |
| `SUPABASE_SERVICE_ROLE_KEY` | all functions (auto-set by Supabase) | YES |
| `SUPABASE_ANON_KEY` | delete-account, verify-apple-receipt, create-checkout (auto-set) | YES |
| `SMTP_USER` | stripe-webhook, delete-account, send-email, support-bot | No (emails fail silently) |
| `SMTP_PASS` | stripe-webhook, delete-account, send-email, support-bot | No (emails fail silently) |
| `APPLE_SHARED_SECRET` | verify-apple-receipt | No (iOS not launched) |
| `ANTHROPIC_API_KEY` | support-bot | No (AI fallback disabled) |
| `SUPPORT_BOT_SECRET` | support-bot | No (bot auth) |
| `SUPPORT_IMAP_USER` | support-bot | No (falls back to SMTP_USER) |
| `SUPPORT_IMAP_PASS` | support-bot | No (falls back to SMTP_PASS) |
| `SITE_URL` | create-checkout, send-email | YES for create-checkout |
| `EMAIL_FUNCTION_SECRET` | send-email | No (auth alternative) |
| `SUPPORT_BOT_ENABLED` | support-bot | No (defaults to true) |

**Fix:**
Create a `supabase/.env.required` manifest file. Add a `npm run check-secrets` script that verifies all critical secrets are set via `supabase secrets list`.

---

### INFRA-010: Stripe Payment Link `client_reference_id` is the only user-payment link
**Severity:** MEDIUM | **Likelihood:** MEDIUM
**File:** `src/lib/stripe.ts:67`
**File:** `supabase/functions/stripe-webhook/index.ts:82`

The user ID is passed to Stripe as `client_reference_id` via URL query parameter. If a user:
1. Copies the payment link and opens it in a different browser (no auth context)
2. Shares the link with someone else
3. Has URL params stripped by a privacy extension

Then `client_reference_id` will be missing. The webhook falls back to email matching (line 86-93), which works if the user used the same email for Stripe and MedMaster. But if they used a different email (e.g., personal email at Stripe, university email at MedMaster), the payment is orphaned.

The `pending_upgrades` safety net (line 99-151) catches this case and sends an alert email. This is good. But manual intervention is still required.

**Fix:**
Document this as a known limitation. Consider adding a "claim payment" flow where users can enter their Stripe session ID to manually link a payment.

---

### INFRA-011: `usePermissions` returns `isPremium: true` while auth is loading
**Severity:** MEDIUM | **Likelihood:** MEDIUM
**File:** `src/hooks/usePermissions.ts:11`

While auth is loading, `usePermissions` assumes premium to "avoid paywall flash" (comment on line 10). This means for the first ~1-2 seconds of every page load, ALL users see premium content. If auth fails to load (network error, Supabase down), and the 8-second timeout fires, the user transitions from premium to starter, causing a jarring UI shift.

More importantly, a user could exploit this by blocking Supabase requests (via browser devtools or ad blocker) to keep the "loading" state indefinitely and access premium content.

**Fix:**
Instead of assuming premium while loading, show a skeleton/loading state. If the auth timeout fires (8s), show the actual tier.

---

### INFRA-012: Apple IAP receipt verification uses deprecated endpoint
**Severity:** MEDIUM | **Likelihood:** LOW (iOS not launched yet)
**File:** `supabase/functions/verify-apple-receipt/index.ts:15-16`

The function uses `https://buy.itunes.apple.com/verifyReceipt` (the deprecated verifyReceipt endpoint). Apple has deprecated this in favor of the App Store Server API (v2) with JWT-based authentication. The deprecated endpoint may stop working in the future.

**Fix:**
Before iOS launch, migrate to App Store Server API v2 (`api.storekit.itunes.apple.com`).

---

## LOW Issues

### INFRA-013: `send-email` function is 800+ lines with complex routing
**Severity:** LOW | **Likelihood:** LOW
**File:** `supabase/functions/send-email/index.ts` (19,748 tokens)

This function is very large and handles multiple email types (welcome, purchase confirmation, weekly digest, etc.). A bug in any email template could crash the entire function, preventing all emails from sending.

**Fix:**
Consider splitting into separate functions per email type, or at minimum add per-template try/catch.

---

### INFRA-014: No database connection pooling configuration visible
**Severity:** LOW | **Likelihood:** LOW

Supabase handles connection pooling via Supavisor by default. No custom pooling configuration is visible, which is fine for the current scale. But if traffic grows, the default pool size (typically 15 connections) may become a bottleneck during peak exam preparation season.

**Fix:**
Monitor connection counts in Supabase dashboard. Configure pool size if needed.

---

## What Is Working Well

1. **Stripe webhook resilience:** The `pending_upgrades` table + alert email for orphaned payments is excellent defensive coding (directly addressing the previous incident).
2. **Signature verification alerting:** The webhook sends an email alert when signature verification fails (lines 465-493) -- this would have caught the previous incident immediately.
3. **Idempotent webhook handling:** The `alreadyPremium` check (line 162) prevents duplicate emails on Stripe retries.
4. **Security headers:** Comprehensive CSP, HSTS, X-Frame-Options, CORP, COOP all configured in vercel.json.
5. **Error boundaries:** Global ErrorBoundary in main.tsx + ContentErrorBoundary for chapters.
6. **Sentry integration:** Error tracking with 10% trace sampling.
7. **Auth timeout fallback:** 8-second timeout prevents infinite loading in hostile browsers.
8. **Profile preservation:** `setProfile(prev => prev ? prev : fallback)` prevents downgrading existing profiles on transient errors.
9. **Payment Link domain validation:** `validateRedirectUrl` prevents open redirect via env var tampering.
10. **Support bot safety:** Blocked senders, daily limits, AI response filtering, loop detection.

---

## Recommended Priority Actions

1. **[BLOCKER]** Fix or remove `create-checkout` subscription/one-time mismatch (INFRA-001)
2. **[BLOCKER]** Add startup validation for critical env vars in edge functions (INFRA-002)
3. **[BLOCKER]** Fix profile fetch null-data handling to not default to starter (INFRA-003)
4. **[HIGH]** Add a health check endpoint with automated monitoring (INFRA-004)
5. **[HIGH]** Fix schema skip to retry instead of giving up (INFRA-005)
6. **[MEDIUM]** Create Supabase secrets inventory and verification script (INFRA-009)
7. **[MEDIUM]** Fix premiumWhileLoading to show loading state instead (INFRA-011)
