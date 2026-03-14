// Stripe Pricing Configuration
// Ersetze PLACEHOLDER-Price-ID durch echte Stripe Price ID wenn Zahlung aktiviert wird.

export const PRICING = {
  oneTime: {
    priceId: "price_PLACEHOLDER_medmaster_komplett",
    amount: 2990, // €29,90
    label: "MedMaster Komplett",
  },
};

export function formatPrice(cents: number): string {
  return `€${(cents / 100).toFixed(2).replace(".", ",")}`;
}

// Platzhalter: Kein Redirect zu Stripe. Wird durch echte Supabase Edge Function + Stripe ersetzt.
export async function createCheckoutSession(): Promise<string | null> {
  console.warn("[Stripe] Checkout noch nicht aktiv (Platzhalter).");
  return null;
}
