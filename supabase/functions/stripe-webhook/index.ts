import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import Stripe from "https://esm.sh/stripe@22.0.0";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// TODO: Set these as Supabase Secrets:
//   supabase secrets set STRIPE_SECRET_KEY=sk_live_...
//   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
//
// Create webhook in Stripe Dashboard:
//   URL: https://<project-ref>.supabase.co/functions/v1/stripe-webhook
//   Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted

function requireEnv(name: string): string {
  const v = Deno.env.get(name);
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"));

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
if (!webhookSecret) {
  console.error("STRIPE_WEBHOOK_SECRET is not set");
}

// Use service role to bypass RLS for profile updates
const supabase = createClient(
  requireEnv("SUPABASE_URL"),
  requireEnv("SUPABASE_SERVICE_ROLE_KEY")
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

    const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret!);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        // Payment Links use client_reference_id for user attribution
        let userId = session.client_reference_id || session.metadata?.supabase_user_id;

        // Fallback: match by email if client_reference_id is missing
        if (!userId) {
          const customerEmail = session.customer_details?.email || session.customer_email;
          if (customerEmail) {
            const { data: authUser } = await supabase.rpc("get_user_id_by_email", {
              lookup_email: customerEmail,
            });
            if (authUser) userId = authUser;
          }
          if (!userId) {
            console.error(
              "No user ID in checkout session — no client_reference_id and email lookup failed",
              { email: session.customer_details?.email || session.customer_email }
            );
            // CRITICAL: Customer paid but we can't find their account!
            // 1. Save to pending_upgrades so it's never lost
            const alertEmail = session.customer_details?.email || session.customer_email || "unbekannt";
            const amountCents = session.amount_total || 0;
            try {
              await supabase.from("pending_upgrades").upsert({
                stripe_session_id: session.id,
                customer_email: alertEmail,
                amount_cents: amountCents,
                status: "pending",
              }, { onConflict: "stripe_session_id" });
              console.log(`Saved pending upgrade: ${alertEmail} / ${session.id}`);
            } catch (dbErr) {
              console.error("Failed to save pending upgrade:", dbErr);
            }

            // 2. Send alert email so we can manually fix this
            try {
              const amount = amountCents
                ? `€${(amountCents / 100).toFixed(2)}`
                : "unbekannt";
              const smtpUser = Deno.env.get("SMTP_USER") || "";
              const smtpPass = Deno.env.get("SMTP_PASS") || "";
              if (smtpUser && smtpPass) {
                const alertSmtp = new SMTPClient({
                  connection: {
                    hostname: "smtp.ionos.de",
                    port: 465,
                    tls: true,
                    auth: { username: smtpUser, password: smtpPass },
                  },
                });
                await alertSmtp.send({
                  from: "MedMaster <welcome@medmaster.at>",
                  to: "support@medmaster.at",
                  subject: `ZAHLUNG OHNE ZUORDNUNG: ${alertEmail}`,
                  html: `<p><strong>ACHTUNG: Ein Kunde hat bezahlt, aber konnte keinem Account zugeordnet werden!</strong></p>
<p>E-Mail bei Stripe: ${(alertEmail).replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}</p>
<p>Betrag: ${amount}</p>
<p>Session-ID: ${session.id}</p>
<p>Zeit: ${new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}</p>
<p>Gespeichert in <code>pending_upgrades</code> Tabelle.</p>
<p><strong>Aktion:</strong> User in Supabase finden und auf premium setzen, dann pending_upgrade auf resolved setzen.</p>`,
                });
                await alertSmtp.close();
              }
            } catch (alertErr) {
              console.error("Alert email failed:", alertErr);
            }
            // Return 200 so Stripe doesn't retry — we saved the payment
            return new Response(JSON.stringify({ received: true, pending: true }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          console.log(`Matched user by email fallback: ${userId}`);
        }

        // Check if user is already premium (idempotent — don't re-send emails on retries)
        const { data: existingProfile } = await supabase
          .from("profiles")
          .select("subscription_tier")
          .eq("id", userId)
          .single();
        const alreadyPremium = existingProfile?.subscription_tier === "premium";

        // One-time payment model: upgrade to premium
        const { error, count } = await supabase
          .from("profiles")
          .update({
            subscription_tier: "premium",
            stripe_customer_id: session.customer as string,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId)
          .select("id", { count: "exact", head: true });

        if (error) {
          console.error("Profile update error:", error);
          // Return 500 so Stripe retries — do NOT swallow this error
          return new Response(JSON.stringify({ error: "Profile update failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        } else if (count === 0) {
          // Profile row not found — create it with premium tier
          console.warn(`No profile row for user ${userId} — creating one`);
          const { error: insertError } = await supabase.from("profiles").insert({
            id: userId,
            subscription_tier: "premium",
            stripe_customer_id: session.customer as string,
          });
          if (insertError) {
            console.error("Profile insert error:", insertError);
            return new Response(JSON.stringify({ error: "Profile creation failed" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }
          console.log(`User ${userId} — profile created with premium`);
        } else {
          console.log(`User ${userId} upgraded to premium`);
        }

        // Skip emails if user was already premium (retry/duplicate event)
        if (alreadyPremium) {
          console.log(`User ${userId} already premium — skipping emails (idempotent retry)`);
          break;
        }

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
              html: `<p><strong>Neuer Premium-Kauf!</strong></p><p>Kunde: ${(customerEmail || "").replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}<br/>Betrag: ${amount}<br/>User-ID: ${userId}<br/>Zeit: ${new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}</p>`,
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
<p style="text-align:center;color:#64748b;margin:0 0 24px">Vielen Dank f&uuml;r dein Vertrauen, ${(name || "").replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}.</p>
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

        const { error, count } = await supabase
          .from("profiles")
          .update({
            subscription_tier: active ? tier : "starter",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId)
          .select("id", { count: "exact", head: true });

        if (error) console.error("Subscription update error:", error);
        else if (count === 0) console.warn(`[stripe-webhook] No profile found for stripe_customer_id=${customerId} (subscription.updated)`);
        else console.log(`Customer ${customerId} → ${active ? tier : "starter"}`);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const { error, count } = await supabase
          .from("profiles")
          .update({
            subscription_tier: "starter",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId)
          .select("id", { count: "exact", head: true });

        if (error) console.error("Subscription delete error:", error);
        else if (count === 0) console.warn(`[stripe-webhook] No profile found for stripe_customer_id=${customerId} (subscription.deleted)`);
        else console.log(`Customer ${customerId} → starter (cancelled)`);
        break;
      }

      case "payment_intent.payment_failed": {
        const pi = event.data.object as Stripe.PaymentIntent;
        const failEmail = pi.last_payment_error?.payment_method?.billing_details?.email
          || (pi.customer ? "Stripe-Kunde" : "unbekannt");
        const failReason = pi.last_payment_error?.message || "unbekannt";
        console.error(`Payment failed: ${failEmail} — ${failReason}`);

        // Notify owner about failed payment attempt
        try {
          const smtpUser = Deno.env.get("SMTP_USER") || "";
          const smtpPass = Deno.env.get("SMTP_PASS") || "";
          if (smtpUser && smtpPass) {
            const failSmtp = new SMTPClient({
              connection: {
                hostname: "smtp.ionos.de",
                port: 465,
                tls: true,
                auth: { username: smtpUser, password: smtpPass },
              },
            });
            await failSmtp.send({
              from: "MedMaster <welcome@medmaster.at>",
              to: "support@medmaster.at",
              subject: `Zahlung fehlgeschlagen: ${failEmail}`,
              html: `<p><strong>Eine Zahlung ist fehlgeschlagen.</strong></p>
<p>Kunde: ${(failEmail).replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}</p>
<p>Grund: ${(failReason).replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}</p>
<p>Betrag: ${pi.amount ? `€${(pi.amount / 100).toFixed(2)}` : "unbekannt"}</p>
<p>Zeit: ${new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}</p>
<p>Der Kunde hat möglicherweise ein Problem mit seiner Karte oder Zahlungsmethode.</p>`,
            });
            await failSmtp.close();
          }
        } catch (notifyErr) {
          console.error("Failed payment notification error:", notifyErr);
        }
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
    const secretSet = !!webhookSecret;
    const secretLen = webhookSecret?.length || 0;
    const errMsg = (err as Error).message || "";
    console.error(`Webhook error (secret set: ${secretSet}, len: ${secretLen}):`, errMsg);

    // Alert on signature verification failure — this is how the tagelang-kaputt bug happened
    if (errMsg.includes("signature") || errMsg.includes("webhook") || errMsg.includes("No signatures found")) {
      try {
        const smtpUser = Deno.env.get("SMTP_USER") || "";
        const smtpPass = Deno.env.get("SMTP_PASS") || "";
        if (smtpUser && smtpPass) {
          const alertSmtp = new SMTPClient({
            connection: {
              hostname: "smtp.ionos.de",
              port: 465,
              tls: true,
              auth: { username: smtpUser, password: smtpPass },
            },
          });
          await alertSmtp.send({
            from: "MedMaster <welcome@medmaster.at>",
            to: "support@medmaster.at",
            subject: "🚨 STRIPE WEBHOOK KAPUTT — Signatur-Fehler!",
            html: `<p><strong>Der Stripe Webhook schlägt fehl!</strong></p>
<p>Fehler: ${(errMsg).replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c] || c))}</p>
<p>Zeit: ${new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}</p>
<p><strong>Zahlungen werden NICHT verarbeitet!</strong> Kunden zahlen und bekommen keinen Premium-Zugang.</p>
<p>Fix: <code>supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_... --project-ref nnelpgrzxwsltrttuiuw</code></p>`,
          });
          await alertSmtp.close();
        }
      } catch (alertErr) {
        console.error("Signature alert email failed:", alertErr);
      }
    }

    // Don't leak internal error details to the caller
    return new Response("Webhook processing failed", { status: 400 });
  }
});
