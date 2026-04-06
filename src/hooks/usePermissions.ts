import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { getPermissions, isFeatureLocked, getLimit, isPromoActive } from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export function usePermissions() {
  const { tier, isPremium, loading, user, profile } = useAuth();

  // Treat as loading if auth is loading OR if user is logged in but profile hasn't arrived yet.
  // This prevents a brief "starter" flash for premium users during profile fetch.
  const isLoading = loading || (!!user && !profile);

  return useMemo(() => {
    const effectiveT: "starter" | "premium" = isLoading ? "starter" : tier;
    const effectivePremium = isLoading ? false : isPremium;
    const permissions = getPermissions(effectiveT);
    const promo = isPromoActive();

    return {
      tier: effectiveT,
      isPremium: effectivePremium || promo,
      promo,
      loading: isLoading,
      permissions,
      // During loading: never lock features (optimistic) — prevents paywall flash for premium users.
      // Once loading is done, use the real tier to determine locks.
      isLocked: (feature: keyof FeatureLimits) => isLoading ? false : isFeatureLocked(effectiveT, feature),
      getLimit: (feature: keyof FeatureLimits) => isLoading ? null : getLimit(effectiveT, feature),
    };
  }, [tier, isPremium, isLoading]);
}
