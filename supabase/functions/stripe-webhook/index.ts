import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import Stripe from "https://esm.sh/stripe@17.7.0";

// TODO: Set these as Supabase Secrets:
//   supabase secrets set STRIPE_SECRET_KEY=sk_live_...
//   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
//
// Create webhook in Stripe Dashboard:
//   URL: https://<project-ref>.supabase.co/functions/v1/stripe-webhook
//   Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2023-10-16",
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
if (!webhookSecret) {
  console.error("STRIPE_WEBHOOK_SECRET is not set");
}

// Use service role to bypass RLS for profile updates
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

/** Map Stripe Price IDs to subscription tiers.
 *  Uses an explicit allowlist — unknown IDs default to "standard". */
const PRO_PRICE_IDS = new Set(
  (Deno.env.get("STRIPE_PRO_PRICE_IDS") || "").split(",").map((s) => s.trim()).filter(Boolean)
);

function tierFromPriceId(priceId: string): "standard" | "pro" {
  if (PRO_PRICE_IDS.has(priceId)) return "pro";
  return "standard";
}

// ── Simple in-memory rate limiter (per-IP, resets on cold start) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30; // generous limit for webhook bursts

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

serve(async (req) => {
  // Reject non-POST requests
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientIp)) {
    return new Response("Too many requests", { status: 429, headers: { "Retry-After": "60" } });
  }

  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Missing stripe-signature header", { status: 400 });
    }
    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET not set");
      return new Response("Webhook not configured", { status: 503 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        // Payment Links use client_reference_id for user attribution
        const userId = session.client_reference_id || session.metadata?.supabase_user_id;
        if (!userId) {
          console.error("No user ID in checkout session (check client_reference_id or metadata)");
          break;
        }

        // One-time payment model: upgrade to premium
        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_tier: "premium",
            stripe_customer_id: session.customer as string,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);

        if (error) console.error("Profile update error:", error);
        else console.log(`User ${userId} upgraded to premium`);

        // ── Referral reward: grant 5€ to referrer if applicable ──
        try {
          const { data: rewardGranted, error: rewardError } = await supabase.rpc(
            "mark_referee_paid",
            { referee_uuid: userId }
          );
          if (rewardError) {
            console.error("Referral reward error:", rewardError);
          } else if (rewardGranted) {
            console.log(`Referral reward granted for referee ${userId}`);
          }
        } catch (e) {
          // Non-critical: don't fail the webhook if referral reward fails
          console.error("Referral reward exception:", e);
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const priceId = subscription.items.data[0]?.price.id;
        const tier = priceId ? tierFromPriceId(priceId) : "standard";
        const active = ["active", "trialing"].includes(subscription.status);

        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_tier: active ? tier : "starter",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId);

        if (error) console.error("Subscription update error:", error);
        else console.log(`Customer ${customerId} → ${active ? tier : "starter"}`);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_tier: "starter",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId);

        if (error) console.error("Subscription delete error:", error);
        else console.log(`Customer ${customerId} → starter (cancelled)`);
        break;
      }

      default:
        console.log(`Unhandled event: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook error:", err);
    // Don't leak internal error details to the caller
    return new Response("Webhook processing failed", { status: 400 });
  }
});
