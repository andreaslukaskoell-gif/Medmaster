// Stripe Payment — uses Stripe Payment Links (no backend required).
// Create a Payment Link in Stripe Dashboard → paste the URL here.
// After payment, Stripe redirects to the success URL with ?session_id=.
// A Supabase webhook (or manual check) upgrades the user to premium.

import { track, trackCheckoutStart } from "@/lib/analytics";
import { validateRedirectUrl } from "@/lib/security";

/** Stripe promotion code applied automatically for referred users (€5 off). */
export const REFERRAL_PROMO_CODE = "FREUND5";

export const PRICING = {
  oneTime: {
    priceId: "",
    amount: 2990, // €29,90
    discountedAmount: 2490, // €24,90 (with referral reward)
    label: "MedMaster Komplett",
  },
};

// Replace with your Stripe Payment Link URL from dashboard.stripe.com/payment-links
const PAYMENT_LINK_URL = import.meta.env.VITE_STRIPE_PAYMENT_LINK as string | undefined;

export function formatPrice(cents: number): string {
  return `€${(cents / 100).toFixed(2).replace(".", ",")}`;
}

/**
 * Redirect to Stripe Payment Link.
 * Pass user email for pre-fill and userId for metadata via query params.
 * Returns false if payment link is not configured.
 */
export function startCheckout(options?: { email?: string; userId?: string }): boolean {
  if (!PAYMENT_LINK_URL?.trim()) {
    console.warn("[Stripe] VITE_STRIPE_PAYMENT_LINK not configured.");
    return false;
  }

  // Validate payment link domain to prevent open redirect via env var tampering
  const validated = validateRedirectUrl(PAYMENT_LINK_URL.trim());
  if (!validated) {
    console.warn("[Stripe] Payment link URL failed domain validation.");
    return false;
  }

  trackCheckoutStart();

  const url = new URL(validated);
  if (options?.email) url.searchParams.set("prefilled_email", options.email);
  if (options?.userId) url.searchParams.set("client_reference_id", options.userId);

  // Pre-fill promo code for referred users (arrived via ?ref=XXXXX)
  const referredBy = sessionStorage.getItem("medmaster_ref") || sessionStorage.getItem("mm_ref");
  if (referredBy) {
    url.searchParams.set("prefilled_promo_code", REFERRAL_PROMO_CODE);
  }

  track("checkout_redirect", { url: url.origin + url.pathname });
  window.location.href = url.toString();
  return true;
}

/** Check if payment is configured */
export function isPaymentEnabled(): boolean {
  return !!PAYMENT_LINK_URL?.trim();
}
