// MedMaster uses a simple binary model: free (starter) or paid (premium).
// During the launch promo (until March 31, 2026), all users get premium access.

type Tier = "starter" | "premium";

export type FeatureLimits = {
  /** Free BMS quiz questions per subject */
  bms_questions_per_subject: number | "unlimited";
  bms_chapters: number | "unlimited";
  /** Free UKs per BMS subject (first N UKs of first chapter) */
  bms_uks_per_subject: number | "unlimited";
  kff_exercises: number | "unlimited";
  /** Free KFF exercises per subtest (GM has separate limit) */
  kff_per_subtest: number | "unlimited";
  kff_gm: number | "unlimited";
  tv_texts: number | "unlimited";
  sek_situations: number | "unlimited";
  /** Free SEK tasks per subtest (Erkennen/Regulieren/Entscheiden) */
  sek_per_subtest: number | "unlimited";
  simulations: number | "unlimited";
  fragen_trainer: boolean;
  ai_tutor: boolean;
  weakness_analysis: boolean;
  spaced_repetition: boolean;
  advanced_analytics: boolean;
  lernplan: boolean;
  fortschritt: boolean;
  prognose: boolean;
};

const LIMITS: Record<Tier, FeatureLimits> = {
  starter: {
    bms_questions_per_subject: 50,
    bms_chapters: "unlimited",
    bms_uks_per_subject: 5,
    kff_exercises: 10,
    kff_per_subtest: 20,
    kff_gm: 8,
    tv_texts: 2,
    sek_situations: 5,
    sek_per_subtest: 5,
    simulations: 0,
    fragen_trainer: true,
    ai_tutor: false,
    weakness_analysis: false,
    spaced_repetition: false,
    advanced_analytics: false,
    lernplan: false,
    fortschritt: true,
    prognose: false,
  },
  premium: {
    bms_questions_per_subject: "unlimited",
    bms_chapters: "unlimited",
    bms_uks_per_subject: "unlimited",
    kff_exercises: "unlimited",
    kff_per_subtest: "unlimited",
    kff_gm: "unlimited",
    tv_texts: "unlimited",
    sek_situations: "unlimited",
    sek_per_subtest: "unlimited",
    simulations: "unlimited",
    fragen_trainer: true,
    ai_tutor: true,
    weakness_analysis: true,
    spaced_repetition: true,
    advanced_analytics: true,
    lernplan: true,
    fortschritt: true,
    prognose: true,
  },
};

const PROMO_END = new Date("2026-04-01T00:00:00+02:00");

/** Launch promo: everyone gets premium access until March 31, 2026 */
export function isPromoActive(): boolean {
  return new Date() < PROMO_END;
}

/**
 * Resolve effective tier: during promo everyone is premium,
 * in dev mode everyone is premium, otherwise use actual tier.
 */
function effectiveTier(tier: Tier): Tier {
  if (typeof window !== "undefined") {
    const pw = new URLSearchParams(window.location.search).get("paywall");
    // ?paywall=test  → use actual tier (bypass promo/dev)
    if (pw === "test") return tier;
    // ?paywall=starter → force starter for QA testing
    if (pw === "starter") return "starter";
  }
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
