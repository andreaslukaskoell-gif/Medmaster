// MedMaster uses a simple binary model: free (starter) or paid (premium).
// During the launch promo (until March 31, 2026), all users get premium access.

type Tier = "starter" | "premium";

export type FeatureLimits = {
  bms_questions: number | "unlimited";
  bms_chapters: number | "unlimited";
  kff_exercises: number | "unlimited";
  tv_texts: number | "unlimited";
  sek_situations: number | "unlimited";
  simulations: number | "unlimited";
  weakness_analysis: boolean;
  spaced_repetition: boolean;
  advanced_analytics: boolean;
  lernplan: boolean;
};

const LIMITS: Record<Tier, FeatureLimits> = {
  starter: {
    bms_questions: 50,
    bms_chapters: 5,
    kff_exercises: 10,
    tv_texts: 2,
    sek_situations: 5,
    simulations: 1,
    weakness_analysis: false,
    spaced_repetition: false,
    advanced_analytics: false,
    lernplan: false,
  },
  premium: {
    bms_questions: "unlimited",
    bms_chapters: "unlimited",
    kff_exercises: "unlimited",
    tv_texts: "unlimited",
    sek_situations: "unlimited",
    simulations: "unlimited",
    weakness_analysis: true,
    spaced_repetition: true,
    advanced_analytics: true,
    lernplan: true,
  },
};

const PROMO_END = new Date("2026-04-01T00:00:00+02:00");

/** Launch promo: everyone gets premium access until March 31, 2026 */
export function isPromoActive(): boolean {
  return new Date() < PROMO_END;
}

/**
 * Resolve effective tier: during promo everyone is premium,
 * in dev mode everyone is premium (unless VITE_TEST_PAYWALL=true),
 * otherwise use actual tier.
 */
function effectiveTier(tier: Tier): Tier {
  if (import.meta.env.DEV && import.meta.env.VITE_TEST_PAYWALL === "true") return tier;
  if (import.meta.env.DEV || isPromoActive()) return "premium";
  return tier;
}

/** Map legacy 3-tier values to binary model */
export function normalizeTier(raw: string | null | undefined): Tier {
  if (raw === "standard" || raw === "pro" || raw === "premium") return "premium";
  return "starter";
}

export function getPermissions(tier: Tier): FeatureLimits {
  return LIMITS[effectiveTier(tier)];
}

export function canAccess(
  tier: Tier,
  feature: keyof FeatureLimits
): boolean | number | "unlimited" {
  return LIMITS[effectiveTier(tier)][feature];
}

export function getLimit(tier: Tier, feature: keyof FeatureLimits): number | null {
  const val = LIMITS[effectiveTier(tier)][feature];
  if (val === "unlimited" || val === true) return null;
  if (val === false) return 0;
  return val as number;
}

export function isFeatureLocked(tier: Tier, feature: keyof FeatureLimits): boolean {
  const val = LIMITS[effectiveTier(tier)][feature];
  return val === false || val === 0;
}
