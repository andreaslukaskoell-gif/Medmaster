import { useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { getStoredRef } from "@/lib/analyticsTracker";

/**
 * Attributes a new user to their referrer (if they signed up via ?ref=xxx).
 * Runs once after authentication, idempotent (UNIQUE constraint on referee_id).
 */
export function useReferralAttribution() {
  const { user } = useAuth();
  const attributed = useRef(false);

  useEffect(() => {
    if (!user || !supabase || attributed.current) return;
    if (import.meta.env.DEV && user.id.startsWith("00000000")) return;
    attributed.current = true;

    const refCode = getStoredRef() || sessionStorage.getItem("medmaster_ref");
    if (!refCode) return;

    if (user.id.startsWith(refCode)) return;

    supabase
      .rpc("register_referral", { referrer_prefix: refCode })
      .then(({ error }) => {
        if (error) console.warn("[referral]", error.message);
      });
  }, [user]);
}
