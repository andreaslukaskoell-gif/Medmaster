type Tier = "starter" | "standard" | "pro";

interface TierPermissions {
  bms_questions: number | "unlimited";
  bms_chapters: number | "unlimited";
  kff_exercises: number | "unlimited";
  tv_texts: number | "unlimited";
  sek_situations: number | "unlimited";
  simulations: number | "unlimited";
  flashcards: number | "unlimited";
  leaderboard: boolean;
  weakness_analysis: boolean;
  spaced_repetition: boolean;
  heatmap: boolean;
  notes: boolean;
  duel_mode: boolean;
  advanced_analytics: boolean;
  priority_support: boolean;
  early_access: boolean;
}

const PERMISSIONS: Record<Tier, TierPermissions> = {
  starter: {
    bms_questions: 10,
    bms_chapters: 2,
    kff_exercises: 5,
    tv_texts: 1,
    sek_situations: 3,
    simulations: 0,
    flashcards: 50,
    leaderboard: false,
    weakness_analysis: false,
    spaced_repetition: false,
    heatmap: false,
    notes: false,
    duel_mode: true,
    advanced_analytics: false,
    priority_support: false,
    early_access: false,
  },
  standard: {
    bms_questions: "unlimited",
    bms_chapters: "unlimited",
    kff_exercises: "unlimited",
    tv_texts: "unlimited",
    sek_situations: "unlimited",
    simulations: 1,
    flashcards: "unlimited",
    leaderboard: true,
    weakness_analysis: true,
    spaced_repetition: true,
    heatmap: true,
    notes: true,
    duel_mode: true,
    advanced_analytics: false,
    priority_support: false,
    early_access: false,
  },
  pro: {
    bms_questions: "unlimited",
    bms_chapters: "unlimited",
    kff_exercises: "unlimited",
    tv_texts: "unlimited",
    sek_situations: "unlimited",
    simulations: "unlimited",
    flashcards: "unlimited",
    leaderboard: true,
    weakness_analysis: true,
    spaced_repetition: true,
    heatmap: true,
    notes: true,
    duel_mode: true,
    advanced_analytics: true,
    priority_support: true,
    early_access: true,
  },
};

// In development mode, grant full access (pro tier) regardless of actual tier
const effectiveTier = (tier: Tier): Tier =>
  import.meta.env.DEV ? "pro" : tier;

export function getPermissions(tier: Tier): TierPermissions {
  return PERMISSIONS[effectiveTier(tier)];
}

export function canAccess(tier: Tier, feature: keyof TierPermissions): boolean | number | "unlimited" {
  return PERMISSIONS[effectiveTier(tier)][feature];
}

export function getLimit(tier: Tier, feature: keyof TierPermissions): number | null {
  const val = PERMISSIONS[effectiveTier(tier)][feature];
  if (val === "unlimited" || val === true) return null;
  if (val === false) return 0;
  return val as number;
}

export function isFeatureLocked(tier: Tier, feature: keyof TierPermissions): boolean {
  const val = PERMISSIONS[effectiveTier(tier)][feature];
  return val === false || val === 0;
}
