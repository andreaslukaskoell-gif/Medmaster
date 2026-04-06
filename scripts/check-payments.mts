#!/usr/bin/env npx tsx
/**
 * Payment Health Check — verifies Stripe payments match DB premium status.
 * Run regularly: npm run check-payments
 *
 * Checks:
 * 1. Premium users without stripe_customer_id (manual fix, webhook failed)
 * 2. Webhook endpoint reachable & signature-check active
 * 3. Edge Function deployment status
 */

const SUPABASE_URL = "https://nnelpgrzxwsltrttuiuw.supabase.co";
const WEBHOOK_URL = `${SUPABASE_URL}/functions/v1/stripe-webhook`;

// We use the service role key if available, otherwise skip DB checks
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

async function checkWebhookHealth(): Promise<number> {
  let failed = 0;
  console.log("\n  === Stripe Webhook Health ===\n");

  // Test 1: POST without signature → must return 400
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "healthcheck" }),
    });
    if (res.status === 400) {
      console.log("  ✅ Webhook deployed & Signatur-Check aktiv");
    } else if (res.status === 500) {
      console.error("  ❌ STRIPE_WEBHOOK_SECRET NICHT GESETZT!");
      console.error("     → Zahlungen werden NICHT verarbeitet!");
      console.error("     → supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_... --project-ref nnelpgrzxwsltrttuiuw");
      failed++;
    } else {
      console.error(`  ❌ Unerwarteter Status: ${res.status}`);
      failed++;
    }
  } catch (e) {
    console.error(`  ❌ Webhook nicht erreichbar: ${(e as Error).message}`);
    failed++;
  }

  // Test 2: GET → must return 405
  try {
    const res = await fetch(WEBHOOK_URL, { method: "GET" });
    if (res.status === 405) {
      console.log("  ✅ Method-Check aktiv (GET → 405)");
    } else {
      console.error(`  ⚠️  GET liefert ${res.status} statt 405`);
    }
  } catch (e) {
    console.error(`  ❌ Webhook GET-Check: ${(e as Error).message}`);
    failed++;
  }

  return failed;
}

async function checkPremiumConsistency(): Promise<number> {
  let failed = 0;
  console.log("\n  === Premium-User Konsistenz ===\n");

  if (!SERVICE_ROLE_KEY) {
    console.log("  ⏭️  SUPABASE_SERVICE_ROLE_KEY nicht gesetzt — DB-Check übersprungen");
    console.log("     Für vollen Check: SUPABASE_SERVICE_ROLE_KEY=... npm run check-payments");
    return 0;
  }

  try {
    // Check premium users without proper stripe_customer_id
    const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles?subscription_tier=eq.premium&select=id,subscription_tier,stripe_customer_id`, {
      headers: {
        "apikey": SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
      },
    });
    const premiumUsers = await res.json();

    if (!Array.isArray(premiumUsers)) {
      console.error("  ❌ Konnte Premium-User nicht abfragen");
      return 1;
    }

    console.log(`  Premium-User gesamt: ${premiumUsers.length}`);

    const suspicious = premiumUsers.filter(
      (u: { stripe_customer_id: string | null }) =>
        !u.stripe_customer_id || u.stripe_customer_id.startsWith("stripe_manual") || u.stripe_customer_id.startsWith("cus_test")
    );

    if (suspicious.length > 0) {
      console.log(`  ⚠️  ${suspicious.length} Premium-User ohne echte Stripe-Zuordnung:`);
      for (const u of suspicious) {
        console.log(`     - ${u.id} (stripe_id: ${u.stripe_customer_id || "NULL"})`);
      }
      console.log("     → Das kann OK sein (manuelles Upgrade), aber prüfen ob Webhook korrekt läuft!");
    } else {
      console.log("  ✅ Alle Premium-User haben gültige Stripe-Zuordnung");
    }

    // Check for pending (unresolved) upgrades
    const pendingRes = await fetch(`${SUPABASE_URL}/rest/v1/pending_upgrades?status=eq.pending&select=id,customer_email,amount_cents,created_at`, {
      headers: {
        "apikey": SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
      },
    });
    const pending = await pendingRes.json();

    if (Array.isArray(pending) && pending.length > 0) {
      console.error(`\n  🚨 ${pending.length} UNZUGEORDNETE ZAHLUNG(EN):`);
      for (const p of pending) {
        const amt = p.amount_cents ? `€${(p.amount_cents / 100).toFixed(2)}` : "?";
        console.error(`     - ${p.customer_email} (${amt}) — ${new Date(p.created_at).toLocaleDateString("de-AT")}`);
      }
      console.error("     → Kunden haben bezahlt aber KEINEN Premium-Zugang!");
      failed += pending.length;
    } else {
      console.log("  ✅ Keine unzugeordneten Zahlungen");
    }
  } catch (e) {
    console.error(`  ❌ DB-Check fehlgeschlagen: ${(e as Error).message}`);
    failed++;
  }

  return failed;
}

async function main() {
  console.log("\n  ╔═══════════════════════════════════════╗");
  console.log("  ║   MedMaster Payment Health Check      ║");
  console.log("  ╚═══════════════════════════════════════╝");

  const webhookFails = await checkWebhookHealth();
  const dbFails = await checkPremiumConsistency();
  let e2eFails = 0;

  // Check Stripe webhook endpoint health via live test
  console.log("\n  === Webhook E2E Kurztest ===\n");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
  if (webhookSecret) {
    const { createHmac } = await import("crypto");
    const ts = Math.floor(Date.now() / 1000);
    const testPayload = JSON.stringify({
      id: "evt_healthcheck_" + ts, object: "event", type: "ping", created: ts,
      data: { object: { id: "healthcheck" } }
    });
    const sig = createHmac("sha256", webhookSecret).update(`${ts}.${testPayload}`).digest("hex");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "stripe-signature": `t=${ts},v1=${sig}` },
        body: testPayload,
      });
      if (res.status === 200) {
        console.log("  ✅ Signierter Payload akzeptiert (200)");
      } else {
        console.error(`  ❌ Signierter Payload abgelehnt (${res.status}) — constructEventAsync kaputt?`);
        e2eFails++;
      }
    } catch (e) {
      console.error(`  ❌ E2E-Test fehlgeschlagen: ${(e as Error).message}`);
      e2eFails++;
    }
  } else {
    console.log("  ⏭️  STRIPE_WEBHOOK_SECRET nicht gesetzt — E2E-Test übersprungen");
  }

  const total = webhookFails + dbFails + e2eFails;

  console.log("\n  === Checkliste für manuellen Check ===\n");
  console.log("  1. Stripe Dashboard → Developers → Webhooks → Error Rate < 5%?");
  console.log("  2. Stripe Dashboard → Payments → letzte Zahlung = letzter Premium-User in DB?");
  console.log("  3. Supabase Dashboard → Edge Functions → stripe-webhook → keine 400/500er?");

  console.log(`\n  === Ergebnis: ${total === 0 ? "ALLES OK" : `${total} PROBLEM(E)`} ===\n`);

  if (total > 0) {
    console.error("  🚨 ZAHLUNGS-PIPELINE HAT PROBLEME! Sofort prüfen!\n");
    process.exit(1);
  }
}

main();
