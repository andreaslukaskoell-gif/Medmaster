// Stripe Pricing Configuration
// Replace PLACEHOLDER values with real Stripe Price IDs when ready

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

// Placeholder for Stripe checkout redirect
export async function createCheckoutSession(priceId: string): Promise<string | null> {
  // TODO: Implement with Supabase Edge Function
  // This would call a serverless function that creates a Stripe Checkout Session
  console.log("Stripe Checkout for price:", priceId);
  return null;
}
