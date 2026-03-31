import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import Stripe from "https://esm.sh/stripe@17.7.0";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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
  (Deno.env.get("STRIPE_PRO_PRICE_IDS") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
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

        if (error) {
          console.error("Profile update error:", error);
        } else {
          console.log(`User ${userId} upgraded to premium`);

          // ── Notify owner about new paying customer ──
          try {
            const customerEmail =
              session.customer_details?.email || session.customer_email || "unbekannt";
            const amount = session.amount_total
              ? `€${(session.amount_total / 100).toFixed(2)}`
              : "€29,90";
            const smtpUser = Deno.env.get("SMTP_USER") || "";
            const smtpPass = Deno.env.get("SMTP_PASS") || "";
            if (smtpUser && smtpPass) {
              const smtp = new SMTPClient({
                connection: {
                  hostname: "smtp.ionos.de",
                  port: 465,
                  tls: true,
                  auth: { username: smtpUser, password: smtpPass },
                },
              });
              await smtp.send({
                from: "MedMaster <welcome@medmaster.at>",
                to: "support@medmaster.at",
                subject: `Neuer Premium-Kunde: ${amount}`,
                html: `<p><strong>Neuer Premium-Kauf!</strong></p><p>Kunde: ${customerEmail}<br/>Betrag: ${amount}<br/>User-ID: ${userId}<br/>Zeit: ${new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}</p>`,
              });
              await smtp.close();
            }
          } catch (notifyErr) {
            console.error("Owner notification failed:", notifyErr);
          }
        }

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

            // ── Auto-refund €5 to the referrer who invited this user ──
            try {
              // Find the referrer's profile via the referrals table
              const { data: referral } = await supabase
                .from("referrals")
                .select("referrer_id")
                .eq("referee_id", userId)
                .single();

              if (referral?.referrer_id) {
                // Get the referrer's Stripe customer ID
                const { data: referrerProfile } = await supabase
                  .from("profiles")
                  .select("stripe_customer_id")
                  .eq("id", referral.referrer_id)
                  .single();

                if (referrerProfile?.stripe_customer_id) {
                  // Find the referrer's most recent payment intent
                  const payments = await stripe.paymentIntents.list({
                    customer: referrerProfile.stripe_customer_id,
                    limit: 1,
                  });

                  const pi = payments.data[0];
                  if (pi && pi.status === "succeeded") {
                    // Issue €5 partial refund
                    await stripe.refunds.create({
                      payment_intent: pi.id,
                      amount: 500, // €5.00 in cents
                      reason: "requested_by_customer",
                    });
                    console.log(
                      `Referral refund: €5 back to ${referral.referrer_id} (PI: ${pi.id})`
                    );
                  } else {
                    console.log(
                      `Referral refund skipped: no successful payment for referrer ${referral.referrer_id}`
                    );
                  }
                }
              }
            } catch (refundErr) {
              // Non-critical: log but don't fail
              console.error("Referral refund error:", refundErr);
            }
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
