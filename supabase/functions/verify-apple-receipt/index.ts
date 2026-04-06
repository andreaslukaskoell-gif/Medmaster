import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

/**
 * Verify Apple App Store receipt and upgrade user to premium.
 *
 * POST /functions/v1/verify-apple-receipt
 * Body: { userId: string, receiptData: string }
 *
 * Uses Apple's App Store Server API (v2) for receipt validation.
 * Set these secrets:
 *   supabase secrets set APPLE_SHARED_SECRET=...
 */

const APPLE_VERIFY_URL = "https://buy.itunes.apple.com/verifyReceipt";
const APPLE_SANDBOX_URL = "https://sandbox.itunes.apple.com/verifyReceipt";
const APPLE_SHARED_SECRET = Deno.env.get("APPLE_SHARED_SECRET") ?? "";

function requireEnv(name: string): string {
  const v = Deno.env.get(name);
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

const supabase = createClient(
  requireEnv("SUPABASE_URL"),
  requireEnv("SUPABASE_SERVICE_ROLE_KEY")
);

const EXPECTED_BUNDLE_ID = "at.medmaster.app";
const EXPECTED_PRODUCT_ID = "medmaster_premium";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Authenticate the request via Supabase JWT
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { data: { user }, error: authError } = await createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
    ).auth.getUser(authHeader.replace("Bearer ", ""));

    if (authError || !user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { receiptData } = await req.json() as { receiptData?: string };
    if (!receiptData) {
      return new Response(JSON.stringify({ error: "Missing receiptData" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify with Apple — try production first, then sandbox
    let verified = false;
    for (const url of [APPLE_VERIFY_URL, APPLE_SANDBOX_URL]) {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "receipt-data": receiptData,
          password: APPLE_SHARED_SECRET,
          "exclude-old-transactions": true,
        }),
      });

      const result = await res.json();

      // Status 0 = valid, 21007 = sandbox receipt sent to production (retry sandbox)
      if (result.status === 0) {
        // Validate the receipt contents
        const bundleId = result.receipt?.bundle_id;
        if (bundleId !== EXPECTED_BUNDLE_ID) {
          console.error(`Bundle ID mismatch: ${bundleId} !== ${EXPECTED_BUNDLE_ID}`);
          return new Response(JSON.stringify({ error: "Invalid receipt" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Check if the product was purchased
        const inApp = result.receipt?.in_app ?? [];
        const hasPremium = inApp.some(
          (item: { product_id: string }) => item.product_id === EXPECTED_PRODUCT_ID
        );

        if (hasPremium) {
          verified = true;
          break;
        }
      } else if (result.status === 21007) {
        // Sandbox receipt — will be retried with sandbox URL
        continue;
      } else {
        console.error(`Apple verify failed with status ${result.status}`);
      }
    }

    if (!verified) {
      return new Response(JSON.stringify({ error: "Receipt verification failed" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Upgrade the user to premium
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        subscription_tier: "premium",
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    if (updateError) {
      console.error("Profile update error:", updateError);
      return new Response(JSON.stringify({ error: "Profile update failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(`User ${user.id} upgraded to premium via Apple IAP`);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Receipt verification error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
