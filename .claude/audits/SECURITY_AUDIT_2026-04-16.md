# MedMaster Security Audit — 2026-04-16

Scope: React 19 + Vite + TS, Supabase (prod `nnelpgrzxwsltrttuiuw`), Stripe, Vercel, 7 Edge Functions, Admin routes, Paywall.

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH     | 2 |
| MEDIUM   | 5 |
| LOW      | 4 |
| INFO     | 3 |

---

## CRITICAL

### C1. Stripe Webhook Secret leaked in git history
- **File:** `supabase/functions/stripe-webhook/index.ts` (historic commits `9d3b3c4`, `c891a29`)
- **Leaked value:** `whsec_blbj3bTH1PEs76o7BY5DP1Vwpf2CHJiz` (was a hardcoded fallback before removal)
- **Risk:** Anyone cloning the repo history can forge Stripe webhook events → upgrade arbitrary accounts to Premium, trigger refunds. Current file uses `Deno.env.get` only (good), but the old secret is still reachable via `git log`.
- **Fix:** Rotate `STRIPE_WEBHOOK_SECRET` in Stripe Dashboard → update `supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_NEW --project-ref nnelpgrzxwsltrttuiuw`. Invalidating history via `git filter-repo` is optional — rotation alone neutralizes the leak.

---

## HIGH

### H1. `vite-plugin-svgo` / `svgo` Billion-Laughs DoS
- **Source:** `npm audit` — GHSA-xpqw-6gx7-v673 (CVSS 7.5). Affects build-time only (not runtime production code), but untrusted SVG input during build could DoS the build.
- **Fix:** `npm i vite-plugin-svgo@1.0.5` (semver-major; verify build still works).

### H2. DOMPurify `<= 3.3.3` ADD_TAGS/FORBID_TAGS bypass
- **Source:** GHSA-39q2-94rc-95cp (moderate by npm, but `sanitizeHtml` is used on user-editable `Notes.tsx` markdown → XSS vector).
- **File:** package.json (direct dep), used everywhere via `src/lib/security.ts`.
- **Fix:** `npm i dompurify@latest` and re-run tests.

---

## MEDIUM

### M1. CSP allows `'unsafe-inline'` for scripts
- **File:** `vercel.json:24` — `script-src 'self' 'unsafe-inline' …` neutralizes most XSS protection because any injected inline `<script>` executes.
- **Fix:** Switch to nonce/hash based CSP (Vite produces deterministic bundles; inline is mostly GTM/analytics boot). Alternatively remove `unsafe-inline` and move analytics to separate hashed chunks.

### M2. Supabase `analytics_events` and `leads` RLS `WITH CHECK (true)` for `INSERT`
- **Supabase advisors:** 3 findings (`analytics_events` anon+auth INSERT; `leads` anon+auth INSERT).
- **Risk:** Anyone can flood these tables — spam/DB bloat, marketing-metric poisoning, costs under Disk IO budget already exhausted (see MEMORY).
- **Fix:** Add a rate-limit trigger (IP/session count per minute) or a CAPTCHA on the public lead form; narrow the `WITH CHECK` to require a sane shape (non-empty email, length caps).

### M3. `AdminGuard` is client-only; all `/admin/*` pages query Supabase directly
- **File:** `src/App.tsx:143-154`. In DEV `return <>{children}</>;` — harmless. In prod, gate is an email string comparison on client. Security relies on Supabase RLS on the underlying tables, which *is* in place for `profiles.subscription_tier`, but admin RPCs (e.g., `get_inactive_users`, retention queries) should be validated.
- **Fix:** Confirm every RPC called from `AdminStats.tsx` enforces `auth.jwt() ->> 'email' = 'andreas.lukas.koell@gmail.com'` server-side (or use a `is_admin` column checked inside the RPC via `SECURITY DEFINER` with a strict `search_path`).

### M4. Supabase DB functions with mutable `search_path`
- **Supabase advisors:** `check_quiz_results_limit`, `delete_spam_user_batch`, `cleanup_quiz_spam_batch`, `check_quiz_rate_limit` all lack `SET search_path`.
- **Risk:** `search_path` injection attacks against `SECURITY DEFINER` functions.
- **Fix:** `ALTER FUNCTION … SET search_path = public, pg_temp;` for each (same pattern as the `call_edge_function` fix applied `2026-04-08`).

### M5. Paywall tier cached in `localStorage` (`mm_tier`)
- **File:** `src/hooks/useAuth.ts:214,305,373`. A user editing `localStorage.mm_tier = "premium"` could trick *optimistic* client UI gating for one session.
- **Risk:** Low (server-side DB still reflects real tier, any premium feature calling Supabase is constrained by RLS). Problem is UI-only, no data leak.
- **Fix:** Remove `mm_tier` entirely or prefix with a HMAC signature. Minimum: add a comment calling out that this is an optimistic hint and all sensitive data must go through Supabase.

---

## LOW

### L1. `support-bot` IMAP login shell-injection surface
- **File:** `supabase/functions/support-bot/index.ts:344` — builds raw IMAP command via template literal with `SUPPORT_IMAP_PASS`. Deno connect-to-TLS, but a password containing `"` would break the protocol. No user-controlled input reaches here → LOW.
- **Fix:** Reject passwords containing `"` or `\r\n` at init.

### L2. `send-email` accepts anon key as Bearer
- **File:** `supabase/functions/send-email/index.ts:959` — `headerOk` accepts anon key. That key is public; any caller can invoke templated email sends to a `userId` they pick. Rate-limit exists but not tied to authenticated user.
- **Fix:** Remove anon-key acceptance; require service-role, body-secret, or a verified user JWT whose `user.id === userId`.

### L3. CSP `form-action` permits `accounts.google.com` but no SRI/origin checks on Stripe Checkout links
- `validateRedirectUrl` (`src/lib/security.ts:78`) allows `buy.stripe.com` / `checkout.stripe.com`. Good. Ensure any checkout URL built client-side also passes that validator before `window.location.href = …`.

### L4. Referrer auto-refund loop potential
- **File:** `stripe-webhook/index.ts:344` — no check that `rewardGranted` is idempotent if Stripe retries the event after a DB commit but before response. Small financial risk.
- **Fix:** Persist a `referral_refunds(session_id UNIQUE)` marker before calling `stripe.refunds.create`.

---

## INFO

- **I1.** `.env`, `.env.local` correctly gitignored; no secrets scanned in tracked source.
- **I2.** Security headers (HSTS, X-Frame-Options DENY, COOP/CORP same-origin, Permissions-Policy) are well set.
- **I3.** Supabase Auth "Leaked Password Protection" disabled — magic-link auth makes this mostly moot, but toggle on anyway (free, zero ops).

---

## Top 3 actions (priority order)

1. **Rotate the Stripe Webhook Secret today** (C1). History contains `whsec_blbj3bTH1PEs76o7BY5DP1Vwpf2CHJiz`.
2. **Upgrade `dompurify` and `vite-plugin-svgo`** (H1/H2) — single `npm i` each, re-run `npm run build && npm run test`.
3. **Harden Supabase RLS/functions:** pin `search_path` on 4 flagged functions; tighten `leads`/`analytics_events` INSERT policies (M2/M4) — aligns with exhausted Disk IO budget.
