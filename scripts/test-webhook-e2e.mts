#!/usr/bin/env npx tsx
/**
 * End-to-End Webhook Test — sends a signed fake checkout event to the live webhook.
 * Tests: signature verification, user lookup, DB upgrade.
 *
 * Uses the test user luki.koell3+medtest1@gmail.com.
 * Verifies upgrade, then rolls back to starter.
 *
 * Run: npm run test-webhook
 */
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";
if (!WEBHOOK_SECRET) {
  console.error("  ❌ STRIPE_WEBHOOK_SECRET nicht gesetzt. Run: STRIPE_WEBHOOK_SECRET=whsec_... npm run test-webhook");
  process.exit(1);
}
const WEBHOOK_URL = "https://nnelpgrzxwsltrttuiuw.supabase.co/functions/v1/stripe-webhook";
const SUPABASE_URL = "https://nnelpgrzxwsltrttuiuw.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const TEST_USER_ID = "41f735fe-1cc7-4c6d-80cc-c039919c6e22";
const TEST_USER_EMAIL = "luki.koell3+medtest1@gmail.com";

async function getProfile() {
  if (!SERVICE_ROLE_KEY) return null;
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?id=eq.${TEST_USER_ID}&select=subscription_tier,stripe_customer_id`,
    { headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` } }
  );
  const data = await res.json();
  return Array.isArray(data) ? data[0] : null;
}

async function resetTestUser() {
  if (!SERVICE_ROLE_KEY) return;
  await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${TEST_USER_ID}`, {
    method: "PATCH",
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ subscription_tier: "starter", stripe_customer_id: null }),
  });
}

async function main() {
  console.log("\n  === Stripe Webhook E2E Test ===\n");

  // Step 1: Ensure test user is starter
  if (SERVICE_ROLE_KEY) {
    await resetTestUser();
    const before = await getProfile();
    console.log(`  1. Test-User vor Test: tier=${before?.subscription_tier}`);
    if (before?.subscription_tier !== "starter") {
      console.error("  ❌ Test-User konnte nicht auf starter zurückgesetzt werden");
      process.exit(1);
    }
  } else {
    console.log("  1. ⏭️  DB-Check übersprungen (SUPABASE_SERVICE_ROLE_KEY nicht gesetzt)");
  }

  // Step 2: Send signed webhook event
  const timestamp = Math.floor(Date.now() / 1000);
  const payload = JSON.stringify({
    id: "evt_test_e2e_" + Date.now(),
    object: "event",
    type: "checkout.session.completed",
    created: timestamp,
    data: {
      object: {
        id: "cs_test_e2e_" + Date.now(),
        object: "checkout.session",
        client_reference_id: TEST_USER_ID,
        customer: "cus_test_e2e_" + Date.now(),
        customer_details: { email: TEST_USER_EMAIL },
        customer_email: TEST_USER_EMAIL,
        amount_total: 100,
        currency: "eur",
        payment_status: "paid",
        status: "complete",
        metadata: {},
      },
    },
  });

  const sig = crypto.createHmac("sha256", WEBHOOK_SECRET).update(`${timestamp}.${payload}`).digest("hex");
  const header = `t=${timestamp},v1=${sig}`;

  console.log("  2. Sende signiertes checkout.session.completed Event...");
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "stripe-signature": header },
    body: payload,
  });
  const body = await res.text();
  console.log(`     Response: ${res.status} ${body}`);

  if (res.status !== 200) {
    console.error("\n  ❌ WEBHOOK HAT NICHT 200 ZURÜCKGEGEBEN!");
    console.error("     Der Zahlungsflow ist KAPUTT!\n");
    process.exit(1);
  }

  // Step 3: Verify DB upgrade
  if (SERVICE_ROLE_KEY) {
    // Small delay for DB propagation
    await new Promise((r) => setTimeout(r, 1000));
    const after = await getProfile();
    console.log(`  3. Test-User nach Test: tier=${after?.subscription_tier}, stripe_id=${after?.stripe_customer_id}`);

    if (after?.subscription_tier !== "premium") {
      console.error("\n  ❌ USER WURDE NICHT AUF PREMIUM GESETZT!");
      process.exit(1);
    }
    console.log("  ✅ User wurde korrekt auf premium upgradet");

    // Step 4: Reset test user
    await resetTestUser();
    console.log("  4. Test-User zurückgesetzt auf starter");
  }

  console.log("\n  ✅ WEBHOOK E2E TEST BESTANDEN!\n");
}

main().catch((e) => {
  console.error("Test failed:", e);
  process.exit(1);
});
