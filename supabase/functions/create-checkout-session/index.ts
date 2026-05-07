// Creates a Stripe Checkout Session on demand.
// Server-validates whether the user is a registered referee before granting
// the €5 referral discount — replaces the old static Payment Link + global FREUND5
// promo code, which anyone could enter from the checkout UI.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import Stripe from "https://esm.sh/stripe@22.0.0";

const PRICE_ID = "price_1TGGRQ0PYqOLvc4vHiQYNRqP";       // €29,90 one-time
const REFERRAL_COUPON_ID = "rBQs8TVz";                    // €5 off, once
const SUCCESS_URL = "https://medmaster.at/dashboard?payment=success";
const CANCEL_URL  = "https://medmaster.at/preise?payment=cancelled";

function corsHeaders(origin: string | null) {
  const allowed = new Set(["https://medmaster.at", "https://www.medmaster.at"]);
  const allow = origin && allowed.has(origin) ? origin : "https://medmaster.at";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);
const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const cors = corsHeaders(req.headers.get("origin"));
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return new Response("nope", { status: 405, headers: cors });

  // Authenticate caller via Supabase JWT (verify_jwt=true is set on deploy too)
  const auth = req.headers.get("authorization") || "";
  const jwt = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!jwt) {
    return new Response(JSON.stringify({ error: "unauthenticated" }),
      { status: 401, headers: { ...cors, "Content-Type": "application/json" } });
  }
  const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(jwt);
  if (userErr || !userData?.user) {
    return new Response(JSON.stringify({ error: "invalid token" }),
      { status: 401, headers: { ...cors, "Content-Type": "application/json" } });
  }
  const user = userData.user;
  const userId = user.id;
  const userEmail = user.email || "";

  try {
    // Server-side referral check — only counts if the referrals row was registered
    // through register_referral() (which itself validates the prefix against auth.users).
    const { data: referral } = await supabaseAdmin
      .from("referrals")
      .select("id")
      .eq("referee_id", userId)
      .maybeSingle();
    const eligibleForDiscount = !!referral;

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "payment",
      line_items: [{ price: PRICE_ID, quantity: 1 }],
      success_url: SUCCESS_URL,
      cancel_url: CANCEL_URL,
      client_reference_id: userId,
      customer_email: userEmail || undefined,
      metadata: { supabase_user_id: userId, referral_eligible: eligibleForDiscount ? "1" : "0" },
    };
    // Stripe rejects setting both. With discounts attached the promo-code field
    // is automatically suppressed; without discounts we explicitly suppress it.
    if (eligibleForDiscount) {
      sessionParams.discounts = [{ coupon: REFERRAL_COUPON_ID }];
    } else {
      sessionParams.allow_promotion_codes = false;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return new Response(
      JSON.stringify({ url: session.url, eligibleForDiscount }),
      { status: 200, headers: { ...cors, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("create-checkout-session error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }),
      { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
