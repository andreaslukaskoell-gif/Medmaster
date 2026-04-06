import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { getPermissions, isFeatureLocked, getLimit, isPromoActive } from "@/lib/permissions";
import type { FeatureLimits } from "@/lib/permissions";

export function usePermissions() {
  const { tier, isPremium, loading } = useAuth();

  return useMemo(() => {
    // While auth is loading, use starter permissions but mark as loading
    // so callers can show a loading state instead of paywall.
    // Previously this assumed premium during loading, which could be exploited
    // by blocking Supabase to keep loading=true indefinitely.
    const effectiveT: "starter" | "premium" = loading ? "starter" : tier;
    const effectivePremium = loading ? false : isPremium;
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
