// Stripe Pricing Configuration — PLACEHOLDER bis zur finalen Integration am Schluss.
// Ersetze PLACEHOLDER-Price-IDs durch echte Stripe Price IDs, wenn Zahlung aktiviert wird.

export const PRICING = {
  standard: {
    monthly: {
      priceId: "price_PLACEHOLDER_standard_monthly",
      amount: 1499, // €14.99
      label: "Standard Monatlich",
    },
    yearly: {
      priceId: "price_PLACEHOLDER_standard_yearly",
      amount: 11988, // €119.88 (€9.99/mo)
      label: "Standard Jährlich",
      monthlyEquivalent: 999,
      savings: 20, // 20% discount
    },
  },
  pro: {
    monthly: {
      priceId: "price_PLACEHOLDER_pro_monthly",
      amount: 2499, // €24.99
      label: "Pro Monatlich",
    },
    yearly: {
      priceId: "price_PLACEHOLDER_pro_yearly",
      amount: 19988, // €199.88 (€16.66/mo)
      label: "Pro Jährlich",
      monthlyEquivalent: 1666,
      savings: 20,
    },
  },
};

export function formatPrice(cents: number): string {
  return `€${(cents / 100).toFixed(2).replace(".", ",")}`;
}

// Platzhalter: Kein Redirect zu Stripe. Wird durch echte Supabase Edge Function + Stripe ersetzt.
export async function createCheckoutSession(priceId: string): Promise<string | null> {
  console.warn("[Stripe] Checkout noch nicht aktiv (Platzhalter). Price:", priceId);
  return null;
}
