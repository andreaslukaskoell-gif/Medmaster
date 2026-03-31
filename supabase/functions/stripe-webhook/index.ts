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

          // ── Send purchase confirmation to customer ──
          try {
            const customerEmail = session.customer_details?.email || session.customer_email || "";
            if (customerEmail) {
              const { data: profile } = await supabase
                .from("profiles")
                .select("display_name")
                .eq("id", userId)
                .single();
              const name = profile?.display_name || "MedAT-Bewerber";
              const smtpUser = Deno.env.get("SMTP_USER") || "";
              const smtpPass = Deno.env.get("SMTP_PASS") || "";
              if (smtpUser && smtpPass) {
                const smtp2 = new SMTPClient({
                  connection: {
                    hostname: "smtp.ionos.de",
                    port: 465,
                    tls: true,
                    auth: { username: smtpUser, password: smtpPass },
                  },
                });
                await smtp2.send({
                  from: "MedMaster <welcome@medmaster.at>",
                  to: customerEmail,
                  subject: "Deine MedMaster Premium Bestellung",
                  html: `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"/></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#334155;line-height:1.7;background:#f8fafc">
<div style="text-align:center;margin-bottom:24px">
  <div style="display:inline-block;background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:12px;padding:12px 20px">
    <span style="color:#fff;font-size:18px;font-weight:800;letter-spacing:-0.02em">MedMaster</span>
  </div>
</div>
<div style="background:#fff;border-radius:16px;padding:32px;border:1px solid #e2e8f0">
  <div style="text-align:center;margin-bottom:24px">
    <div style="display:inline-block;background:#dcfce7;border-radius:50%;width:56px;height:56px;line-height:56px;font-size:28px">&#10003;</div>
  </div>
  <h1 style="font-size:22px;font-weight:700;color:#1e3a8a;margin:0 0 8px;text-align:center">Zahlung erfolgreich!</h1>
  <p style="text-align:center;color:#64748b;margin:0 0 24px">Vielen Dank f&uuml;r dein Vertrauen, ${name}.</p>
  <table role="presentation" width="100%" style="margin:0 0 24px;border-collapse:collapse">
    <tr><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;color:#64748b">Produkt</td><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#334155;text-align:right">MedMaster Premium</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;color:#64748b">Betrag</td><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#334155;text-align:right">&euro;${session.amount_total ? (session.amount_total / 100).toFixed(2).replace(".", ",") : "29,90"}</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;color:#64748b">Typ</td><td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#334155;text-align:right">Einmalzahlung &mdash; kein Abo</td></tr>
    <tr><td style="padding:12px 16px;font-size:14px;color:#64748b">Zugang</td><td style="padding:12px 16px;font-size:14px;font-weight:600;color:#16a34a;text-align:right">Sofort freigeschaltet &#10003;</td></tr>
  </table>
  <p style="font-size:14px;color:#334155;margin:0 0 16px"><strong>Was ist jetzt freigeschaltet?</strong></p>
  <ul style="font-size:14px;color:#475569;margin:0 0 24px;padding-left:20px">
    <li>5.230+ BMS-Wissensfragen (Bio, Chemie, Physik, Mathe)</li>
    <li>Unbegrenzte kognitive Aufgaben</li>
    <li>Textverst&auml;ndnis &amp; Soziales Entscheiden</li>
    <li>MedAT-Simulationen</li>
    <li>Lernplan, Fortschritt &amp; Statistiken</li>
  </ul>
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px">
    <tr><td style="background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:10px;text-align:center">
      <a href="https://medmaster.at/app" style="display:block;padding:14px 40px;color:#fff;font-weight:700;font-size:16px;text-decoration:none">Jetzt loslegen</a>
    </td></tr>
  </table>
  <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0">Bei Fragen antworte einfach auf diese E-Mail.</p>
</div>
<p style="font-size:12px;color:#94a3b8;text-align:center;margin:24px 0 0">MedMaster &mdash; MedAT-Vorbereitung &mdash; medmaster.at</p>
</body></html>`,
                });
                await smtp2.close();
                console.log(`Purchase confirmation sent to ${customerEmail}`);
              }
            }
          } catch (confirmErr) {
            console.error("Purchase confirmation email failed:", confirmErr);
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
