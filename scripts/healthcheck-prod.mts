#!/usr/bin/env npx tsx
/**
 * Production health check — verifies critical routes return 200
 * AND Stripe webhook is functional.
 * Run after every deploy: npx tsx scripts/healthcheck-prod.mts
 */
const BASE = "https://www.medmaster.at";
const SUPABASE_FUNCTION_BASE =
  "https://nnelpgrzxwsltrttuiuw.supabase.co/functions/v1";

const CRITICAL_ROUTES = [
  "/",
  "/login",
  "/dashboard",
  "/bms",
  "/kff",
  "/tv",
  "/sek",
  "/preise",
  "/blog",
  "/admin/stats",
  "/fragen-trainer",
  "/simulation",
  "/sitemap.xml",
  "/robots.txt",
];

async function checkRoutes(): Promise<number> {
  let failed = 0;
  let passed = 0;

  for (const route of CRITICAL_ROUTES) {
    try {
      const res = await fetch(`${BASE}${route}`, { method: "HEAD", redirect: "follow" });
      if (res.ok) {
        console.log(`  ✅ ${res.status} ${route}`);
        passed++;
      } else {
        console.error(`  ❌ ${res.status} ${route}`);
        failed++;
      }
    } catch (e) {
      console.error(`  ❌ FAIL ${route}: ${(e as Error).message}`);
      failed++;
    }
  }

  console.log(`\n  ${passed}/${CRITICAL_ROUTES.length} Routen OK, ${failed} fehlgeschlagen`);
  return failed;
}

/**
 * Stripe Webhook Health Check:
 * 1. POST ohne Signatur → muss 400 zurückgeben (= Function läuft, Signatur-Check aktiv)
 * 2. Falscher Method (GET) → muss 405 zurückgeben
 * Wenn beides passt, ist der Webhook deployed und prüft Signaturen korrekt.
 */
async function checkStripeWebhook(): Promise<number> {
  let failed = 0;
  const webhookUrl = `${SUPABASE_FUNCTION_BASE}/stripe-webhook`;

  console.log("\n  --- Stripe Webhook ---");

  // Test 1: POST without signature → should return 400 (signature validation active)
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "healthcheck" }),
    });
    if (res.status === 400) {
      console.log(`  ✅ Webhook aktiv & Signatur-Check funktioniert (POST ohne Signatur → ${res.status})`);
    } else if (res.status === 500) {
      console.error(`  ❌ Webhook Error 500 — STRIPE_WEBHOOK_SECRET vermutlich NICHT gesetzt!`);
      console.error(`     → supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_... --project-ref nnelpgrzxwsltrttuiuw`);
      failed++;
    } else {
      console.error(`  ❌ Webhook unerwarteter Status ${res.status} (erwartet: 400)`);
      failed++;
    }
  } catch (e) {
    console.error(`  ❌ Webhook nicht erreichbar: ${(e as Error).message}`);
    failed++;
  }

  // Test 2: GET → should return 405 (method not allowed)
  try {
    const res = await fetch(webhookUrl, { method: "GET" });
    if (res.status === 405) {
      console.log(`  ✅ Webhook lehnt GET korrekt ab (→ ${res.status})`);
    } else {
      console.error(`  ⚠️  Webhook GET-Status ${res.status} (erwartet: 405)`);
      // Not critical, just a warning
    }
  } catch (e) {
    console.error(`  ❌ Webhook GET-Check fehlgeschlagen: ${(e as Error).message}`);
    failed++;
  }

  if (failed === 0) {
    console.log("  ✅ Stripe Webhook: OK");
  } else {
    console.error("\n  🚨 STRIPE WEBHOOK IST KAPUTT! Zahlungen werden NICHT verarbeitet!");
    console.error("     Kunden zahlen und bekommen KEINEN Premium-Zugang!");
  }

  return failed;
}

async function main() {
  console.log("\n  === MedMaster Production Healthcheck ===\n");

  const routeFails = await checkRoutes();
  const webhookFails = await checkStripeWebhook();
  const total = routeFails + webhookFails;

  console.log(`\n  === Ergebnis: ${total === 0 ? "ALLES OK" : `${total} FEHLER`} ===\n`);

  if (total > 0) {
    console.error("  🚨 PRODUCTION IST KAPUTT! Sofort fixen!\n");
    process.exit(1);
  }
}

main();
