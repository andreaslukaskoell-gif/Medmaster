# M1 — CSP Report-Only Rollout Spec

**Audit Ref:** `SECURITY_AUDIT_2026-04-16.md` Finding M1
**Goal:** Remove `'unsafe-inline'` from `script-src` (and eventually `style-src`) without breaking production.
**Constraint:** **Site stability > security fix.** No crashes for paying users. No blind flips.
**Owner:** Luki. Prod = `nnelpgrzxwsltrttuiuw`, Vercel, `vercel.json` is the single source of truth.

---

## 1. Current State (as deployed, 2026-04-16)

Single CSP header in `vercel.json` (line 24). Relevant directives:

```
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com
  https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com
  https://www.google.com https://connect.facebook.net https://eu-assets.i.posthog.com;
style-src 'self' 'unsafe-inline';
report-uri https://o4511060973846528.ingest.de.sentry.io/api/4511060999012432/security/?sentry_key=9d2971696398e389788d2c786b8c9fb6;
```

**Enforcing** (not Report-Only). Sentry is already the reporter.

### Known inline code that `'unsafe-inline'` currently permits

Inventory from `index.html` + `src/`:

| # | Location | Type | Purpose | Removal strategy |
|---|----------|------|---------|------------------|
| 1 | `index.html:201-207` | `<style>` | Loader + FOUC prevention CSS | Nonce OR move to `/src/main.tsx` (defer) |
| 2 | `index.html:221-226` | `<script>` | Dark-mode FOUC — reads `localStorage` before React mounts | Nonce (must stay inline + pre-hydration) |
| 3 | `index.html:54,71,83,125,137` | `<script type="application/ld+json">` | SEO structured data | `ld+json` is **data**, not code — not subject to CSP `script-src` |
| 4 | Vite dev (`npm run dev`) | HMR inline scripts | Dev-only | Prod has no HMR — N/A |
| 5 | `dangerouslySetInnerHTML` usages (10 files in `src/`) | React-rendered HTML | DOMPurify-sanitized content (chapter HTML, etc.) | **Not inline `<script>`** — these render `innerHTML` but React DOM does not execute `<script>` tags set via `innerHTML`. Safe. |
| 6 | GTM/gtag/PostHog | External scripts loaded dynamically at runtime | Analytics | Already allowlisted by host — no inline involved |

**Conclusion:** Only real blockers are #1 (inline `<style>`) and #2 (inline `<script>` in `index.html`).

### `style-src 'unsafe-inline'`

Tailwind v4 + `framer-motion` + many components set `style={{ ... }}` → React generates inline `style` attributes. Removing `'unsafe-inline'` from `style-src` requires either nonce-per-render (not feasible with React inline `style` props) or `'unsafe-hashes'` + hash list (unmaintainable). **OUT OF SCOPE for M1.** Focus on `script-src` only.

---

## 2. Rollout Strategy — 4 Phases

### Phase A — Observe (Report-Only, parallel header)

Duration: **3 days minimum**, 7 days preferred.

1. Add a **second** CSP header `Content-Security-Policy-Report-Only` to `vercel.json`. Keep the existing enforcing `Content-Security-Policy` exactly as-is.
2. The Report-Only policy is the tightened version:
   ```
   Content-Security-Policy-Report-Only: default-src 'self';
     script-src 'self' 'nonce-__NONCE__' https://www.googletagmanager.com ... (same allowlist);
     style-src 'self' 'unsafe-inline';   ← unchanged for now
     ... (rest identical to enforcing policy)
     report-uri https://o4511060973846528.ingest.de.sentry.io/api/4511060999012432/security/?sentry_key=9d2971696398e389788d2c786b8c9fb6
   ```
3. **Deferred nonce decision:** Vercel has no per-request nonce injection for static SPAs. Two options:
   - **Option A (recommended for SPA):** Use **script hashes** instead of nonces. Compute SHA-256 of the inline `<script>` in `index.html`, add to `script-src`: `'sha256-...'`. Fixed at build time.
   - **Option B:** Inline the dark-mode script into a Vite-generated bundled chunk (loses FOUC-prevention benefit by ~50-200ms). Rejected.
4. For the inline `<style>` block: also hash-based (`style-src 'sha256-...'`), or move it into the main CSS bundle at the cost of a brief FOUC. Keep under `'unsafe-inline'` in Phase A — we're only tightening scripts.
5. Collect violation reports in Sentry (existing integration). Filter on `effective-directive: script-src` and `disposition: report`.

**Exit criteria for Phase A:**
- Zero new script-src violations from `source: user` traffic for 72 consecutive hours.
- All violations reviewed and classified: expected (add to allowlist/hash) or bug (fix source).

### Phase B — Shadow enforce on Preview only

Duration: **1 day**.

1. Keep Report-Only header in production untouched.
2. Add the tightened policy as the **enforcing** policy on Vercel Preview deployments only. Use Vercel's per-environment headers: `vercel.json` conditional is tricky — instead, gate via build-time env var:
   ```js
   // build-csp.mjs, runs in Vercel build, writes dist/_headers or patches vercel.json clone
   const isProd = process.env.VERCEL_ENV === 'production';
   const scriptSrc = isProd ? CURRENT_ENFORCING : TIGHTENED;
   ```
3. Run the full Playwright E2E suite (`npm run test:e2e`) against a Preview URL.
4. Manual smoke: `/`, `/dashboard`, `/bms/biologie/zellmembran`, `/kff`, `/tv`, `/sek`, `/preise`, `/admin/stats`, Stripe checkout button, login flow.

**Exit criteria for Phase B:**
- 0 console CSP errors on 10 manually tested pages.
- E2E green.
- Healthcheck 14/14.

### Phase C — Enforce in Production

Duration: **1 deployment window**, off-peak (Austrian late-evening ≥ 22:00 CET).

1. Swap production `Content-Security-Policy` to the tightened version.
2. Remove the `Content-Security-Policy-Report-Only` header (no longer needed — enforcing policy also emits reports via the same `report-uri`).
3. **Rollback plan:** `git revert` the commit, `vercel --prod` redeploy. Total rollback time target: < 3 minutes.
4. Monitor Sentry for 60 minutes post-deploy. Watch for:
   - Spike in CSP violation reports from real users → rollback.
   - Spike in JS errors (things failing silently because a script was blocked) → rollback.
   - Drop in analytics events (gtag / PostHog broken) → rollback.

### Phase D — Follow-ups

1. Remove `'unsafe-inline'` from `style-src` requires a separate design: migrate component inline styles → CSS classes (Tailwind) or `<style>` tags with nonces. Track as new ticket.
2. Consider `require-trusted-types-for 'script'` — deferred; needs DOMPurify integration audit first.
3. Add CSP regression test: Playwright assertion that `script-src` in response header does **not** contain `'unsafe-inline'`.

---

## 3. Concrete Changes to Files

### `vercel.json` — Phase A

Add header block (keep existing CSP intact):

```diff
       { "key": "Content-Security-Policy", "value": "..." },
+      { "key": "Content-Security-Policy-Report-Only", "value": "default-src 'self'; script-src 'self' 'sha256-<HASH_OF_FOUC_SCRIPT>' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com https://connect.facebook.net https://eu-assets.i.posthog.com; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' https://*.supabase.co https://*.sentry.io https://*.ingest.de.sentry.io https://eu.i.posthog.com https://eu.posthog.com https://eu-assets.i.posthog.com https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://www.google.at https://www.googleadservices.com https://region1.google-analytics.com; img-src 'self' data: https:; object-src 'none'; worker-src 'self'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://buy.stripe.com https://checkout.stripe.com https://accounts.google.com; report-uri https://o4511060973846528.ingest.de.sentry.io/api/4511060999012432/security/?sentry_key=9d2971696398e389788d2c786b8c9fb6" },
```

### How to compute the SHA-256 hash

```bash
# From index.html, extract the exact inline script body (without <script> tags, with original whitespace)
node -e "
  const fs = require('fs');
  const crypto = require('crypto');
  const html = fs.readFileSync('index.html', 'utf8');
  const match = html.match(/<script>([\s\S]*?)<\/script>/);  // first non-json-ld script
  const body = match[1];
  const hash = crypto.createHash('sha256').update(body).digest('base64');
  console.log('sha256-' + hash);
"
```

Commit the computed hash; regenerate on any change to the inline FOUC block.

### Automation

Add to `scripts/validate-vercel.mts`:

```ts
// Verify CSP hash still matches inline script
// Fail build if hash is stale → prevents broken CSP in production
```

---

## 4. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Inline script hash drift after `index.html` edit | HIGH | Site loads but dark mode broken + visible FOUC | Build validator computes hash, fails if `vercel.json` hash ≠ actual |
| GTM/PostHog injects inline eval (common!) | MEDIUM | Analytics dies silently | Report-Only phase detects this; if found, keep `'unsafe-inline'` for scripts — accept limitation, document |
| Stripe Checkout postMessage / iframe | LOW | Payment flow breaks | `form-action` allowlist already includes Stripe; `frame-src 'none'` intentional — Stripe Checkout redirects, no iframe |
| Sentry receives too many reports during Phase A | LOW | Sentry quota burn | Sentry project has CSP-specific ingestion, included in plan. Sample if > 10k/day |
| Ad retargeting pixels (gclid/fbclid) inject inline | MEDIUM | Conversion tracking loss | Report-Only will reveal; decide per-vendor whether worth keeping |
| Extensions injecting scripts (uBlock, dark reader) | HIGH (volume) | Noise in reports | Filter `blocked-uri: *extension*` client-side before shipping to Sentry |

---

## 5. Timeline

- **Day 0:** Land Phase A (Report-Only header + hash script). Single commit, single deploy.
- **Day 0–3:** Monitor Sentry. Daily triage of new violations.
- **Day 3:** If clean → Phase B on Preview.
- **Day 4:** If E2E + manual smoke green → Phase C enforce in production at 22:00 CET.
- **Day 5+:** Stabilization window. No touches unless rollback.
- **Day 7:** Close M1, move `style-src` hardening to new ticket.

---

## 6. Verification Commands

```bash
# Phase A: confirm Report-Only header deployed
curl -sI https://medmaster.at/ | grep -i content-security-policy

# Expected: two headers present
# content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' ...
# content-security-policy-report-only: default-src 'self'; script-src 'self' 'sha256-...' ...

# Phase C: confirm 'unsafe-inline' gone from script-src
curl -sI https://medmaster.at/ | grep -oE "script-src[^;]*" | grep -v unsafe-inline

# Full healthcheck after each phase
npm run healthcheck
```

---

## 7. Rollback Triggers

Automatic rollback (`vercel rollback` or `git revert + redeploy`) if ANY of:

- `/dashboard`, `/preise`, or `/admin/stats` returns non-200 on healthcheck.
- Stripe webhook events drop by > 50% from baseline in 30-minute window post-deploy.
- Sentry JS error rate increases by > 2× baseline within 30 min.
- User reports "white page" or "konnte nicht laden" in support channel.

---

**Status:** Spec only. No code changes applied. Awaiting go-ahead before Phase A.
