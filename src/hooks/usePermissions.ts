import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { getPermissions, isFeatureLocked, getLimit, isPromoActive } from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export function usePermissions() {
  const { tier, isPremium } = useAuth();

  return useMemo(() => {
    const permissions = getPermissions(tier);
    const promo = isPromoActive();

    return {
      tier,
      isPremium: isPremium || promo,
      promo,
      permissions,
      isLocked: (feature: keyof FeatureLimits) => isFeatureLocked(tier, feature),
      getLimit: (feature: keyof FeatureLimits) => getLimit(tier, feature),
    };
  }, [tier, isPremium]);
}
