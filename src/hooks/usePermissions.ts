import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { getPermissions, isFeatureLocked, getLimit, isPromoActive } from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export function usePermissions() {
  const { tier, isPremium, loading, user, profile } = useAuth();

  // Treat as loading if auth is loading OR if user is logged in but profile hasn't arrived yet.
  // Note: tier already uses localStorage cache, so isPremium is correct even during loading.
  const isLoading = loading || (!!user && !profile);

  return useMemo(() => {
    // tier is already correct during loading (uses localStorage cache for returning users).
    // Only first-time users (no cache) default to "starter" during loading — that's fine.
    const permissions = getPermissions(tier);
    const promo = isPromoActive();

    return {
      tier,
      isPremium: isPremium || promo,
      promo,
      loading: isLoading,
      permissions,
      isLocked: (feature: keyof FeatureLimits) => isFeatureLocked(tier, feature),
      getLimit: (feature: keyof FeatureLimits) => getLimit(tier, feature),
    };
  }, [tier, isPremium, isLoading]);
}
