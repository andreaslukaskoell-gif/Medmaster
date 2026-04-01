import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { getPermissions, isFeatureLocked, getLimit, isPromoActive } from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export function usePermissions() {
  const { tier, isPremium, loading } = useAuth();

  return useMemo(() => {
    // While auth is loading, assume premium to avoid paywall flash
    const effectivePremium = loading ? true : isPremium;
    const effectiveT: "starter" | "premium" = loading ? "premium" : tier;
    const permissions = getPermissions(effectiveT);
    const promo = isPromoActive();

    return {
      tier: effectiveT,
      isPremium: effectivePremium || promo,
      promo,
      loading,
      permissions,
      isLocked: (feature: keyof FeatureLimits) => isFeatureLocked(effectiveT, feature),
      getLimit: (feature: keyof FeatureLimits) => getLimit(effectiveT, feature),
    };
  }, [tier, isPremium, loading]);
}
