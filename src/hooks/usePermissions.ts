import { useMemo } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  normalizeTier,
  getPermissions,
  isPromoActive,
  isFeatureLocked,
  getLimit,
} from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export type { FeatureLimits };

/**
 * Resolves the user's effective tier and provides permission checks.
 *
 * During promo or dev mode, everyone gets premium.
 * After promo, tier comes from Supabase profile.subscription_tier.
 */
export function usePermissions() {
  const { profile } = useAuth();

  const tier = useMemo(
    () => normalizeTier(profile?.subscription_tier),
    [profile?.subscription_tier]
  );

  const permissions = useMemo(() => getPermissions(tier), [tier]);

  const isPremium = permissions.bms_questions === "unlimited";
  const isFree = !isPremium;
  const promoActive = isPromoActive();

  return {
    /** Effective tier after promo/dev resolution */
    tier,
    /** Full permissions object */
    permissions,
    /** true if user has full access (paid or promo active) */
    isPremium,
    /** true if user is on free tier (promo expired, not paid) */
    isFree,
    /** true if promo is currently active */
    promoActive,
    /** Check if a specific feature is locked */
    isLocked: (feature: keyof FeatureLimits) => isFeatureLocked(tier, feature),
    /** Get numeric limit for a feature (null = unlimited) */
    getLimit: (feature: keyof FeatureLimits) => getLimit(tier, feature),
  };
}
