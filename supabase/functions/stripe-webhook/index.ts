import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import Stripe from "https://esm.sh/stripe@14.0.0";

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

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

// Use service role to bypass RLS for profile updates
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

function tierFromPriceId(priceId: string): "standard" | "pro" {
  // TODO: Replace with real Price IDs once created in Stripe Dashboard
  // price_PLACEHOLDER_pro_monthly / price_PLACEHOLDER_pro_yearly → "pro"
  // Everything else → "standard"
  if (priceId.includes("pro")) return "pro";
  return "standard";
}

serve(async (req) => {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Missing stripe-signature header", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        if (!userId) {
          console.error("No supabase_user_id in checkout session metadata");
          break;
        }

        // Get subscription to determine tier from price
        let tier: "standard" | "pro" = "standard";
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
          const priceId = subscription.items.data[0]?.price.id;
          if (priceId) tier = tierFromPriceId(priceId);
        }

        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_tier: tier,
            stripe_customer_id: session.customer as string,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);

        if (error) console.error("Profile update error:", error);
        else console.log(`User ${userId} upgraded to ${tier}`);
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
    return new Response(`Webhook Error: ${err instanceof Error ? err.message : "Unknown"}`, {
      status: 400,
    });
  }
});
