// Stripe Checkout — server-driven via the create-checkout-session edge function.
// The function validates whether the authenticated user is a registered referee
// before granting the €5 referral discount, so users cannot bypass the referral
// flow by manually entering a promo code in the Stripe checkout UI.

import { track, trackCheckoutStart } from "@/lib/analytics";
import { validateRedirectUrl } from "@/lib/security";
import { isNative } from "@/lib/native";
import { purchasePremium } from "@/lib/iap";
import { supabase } from "@/lib/supabase";

export const PRICING = {
  oneTime: {
    priceId: "",
    amount: 2990, // €29,90
    discountedAmount: 2490, // €24,90 (with referral reward)
    label: "MedMaster Komplett",
  },
};

export function formatPrice(cents: number): string {
  return `€${(cents / 100).toFixed(2).replace(".", ",")}`;
}

/**
 * Start a Stripe Checkout session for the current user.
 * Native iOS/Android skip Stripe in favor of Apple IAP.
 * Web flow calls the create-checkout-session edge function which server-side
 * validates referral eligibility before issuing a €5 discount.
 */
/**
 * Starts checkout. Returns true if the flow took over (redirect/IAP launched),
 * false if the caller should fall back to /preise. Fire-and-forget for backwards
 * compatibility with existing onClick handlers; the actual redirect happens
 * asynchronously after a successful edge function call.
 */
export function startCheckout(_options?: { email?: string; userId?: string }): boolean {
  if (isNative) {
    trackCheckoutStart();
    purchasePremium().then((result) => {
      if (result.ok) {
        track("iap_purchase_success");
        window.location.href = "/success";
      } else if (!result.cancelled) {
        track("iap_purchase_failed", { error: result.error });
      }
    });
    return true;
  }

  if (!supabase) {
    console.warn("[Stripe] Supabase client not configured.");
    return false;
  }

  trackCheckoutStart();

  // Kick off the edge function call; redirect once it returns.
  supabase.functions
    .invoke<{ url?: string; eligibleForDiscount?: boolean; error?: string }>(
      "create-checkout-session",
      { body: {} }
    )
    .then(({ data, error }) => {
      if (error || !data?.url) {
        console.warn("[Stripe] checkout session creation failed", error || data?.error);
        window.location.href = "/preise?checkout=error";
        return;
      }
      const validated = validateRedirectUrl(data.url);
      if (!validated) {
        console.warn("[Stripe] Stripe URL failed domain validation.");
        window.location.href = "/preise?checkout=error";
        return;
      }
      track("checkout_redirect", { eligibleForDiscount: !!data.eligibleForDiscount });
      window.location.href = validated;
    })
    .catch((e) => {
      console.warn("[Stripe] checkout invoke threw", e);
      window.location.href = "/preise?checkout=error";
    });
  return true;
}

/** Web checkout is always enabled (the edge function handles availability). */
export function isPaymentEnabled(): boolean {
  return true;
}
