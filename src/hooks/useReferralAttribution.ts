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

    // Don't attribute to yourself
    if (user.id.startsWith(refCode)) return;

    // Find the referrer by matching ref code prefix
    Promise.resolve(
      supabase.from("profiles").select("id").ilike("id", `${refCode}%`).limit(1).single()
    )
      .then(({ data: referrer }) => {
        if (!referrer || referrer.id === user.id) return;

        // Insert referral (idempotent — UNIQUE on referee_id)
        supabase!
          .from("referrals")
          .insert({
            referrer_id: referrer.id,
            referee_id: user.id,
            ref_code: refCode,
          })
          .then(({ error }) => {
            if (error && !error.message.includes("duplicate")) {
              console.warn("[referral]", error.message);
            }
          });
      })
      .catch(() => {});
  }, [user]);
}
