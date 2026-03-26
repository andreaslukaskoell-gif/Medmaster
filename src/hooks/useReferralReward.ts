/**
 * Referral Reward Hook — tracks the 5€ one-time benefit.
 *
 * Business model:
 * - Standard price: 29.90€
 * - If ONE invited friend pays → referrer gets 5€ off → personal price 24.90€
 * - Cap: max 5€ total (= 1 paid referral matters)
 * - Invited user gets NO instant discount, but can earn their own 5€ by inviting others
 */
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

export type ReferralRewardState =
  | "loading"
  | "no-referrals" // hasn't invited anyone yet
  | "invited" // friends invited but none registered
  | "registered" // friend(s) registered but none paid
  | "reward-unlocked" // a friend paid → 5€ unlocked
  | "reward-used" // user already purchased at 24.90€
  | "error";

export type ReferralRewardData = {
  state: ReferralRewardState;
  totalReferrals: number;
  paidReferrals: number;
  rewardCents: number; // 0 or 500
  personalPriceCents: number; // 2990 or 2490
  refCode: string;
  refLink: string;
  hasReward: boolean; // shortcut: rewardCents > 0
};

const DEFAULT_DATA: ReferralRewardData = {
  state: "loading",
  totalReferrals: 0,
  paidReferrals: 0,
  rewardCents: 0,
  personalPriceCents: 2990,
  refCode: "",
  refLink: "",
  hasReward: false,
};

export function useReferralReward(): ReferralRewardData & { refresh: () => void } {
  const { user } = useAuth();
  const [data, setData] = useState<ReferralRewardData>(DEFAULT_DATA);

  const refCode = user?.id?.slice(0, 8) ?? "";
  const refLink = refCode ? `https://medmaster.at?ref=${refCode}` : "";

  const fetchStatus = useCallback(async () => {
    if (!user || !supabase) {
      setData({ ...DEFAULT_DATA, state: "no-referrals", refCode, refLink });
      return;
    }

    // In dev mode with placeholder user, skip RPC calls that don't exist
    if (import.meta.env.DEV && user.id.startsWith("00000000")) {
      setData({ ...DEFAULT_DATA, state: "no-referrals", refCode, refLink });
      return;
    }

    try {
      // Fetch reward status from Supabase RPC
      const { data: rpcData, error } = await supabase.rpc("get_referral_reward_status", {
        user_uuid: user.id,
      });

      if (error || !rpcData || (Array.isArray(rpcData) && rpcData.length === 0)) {
        // RPC not available (migration not run) — fallback to basic count
        const { data: countData } = await supabase.rpc("get_referral_count", {
          user_uuid: user.id,
        });
        const count = typeof countData === "number" ? countData : 0;
        setData({
          state: count > 0 ? "invited" : "no-referrals",
          totalReferrals: count,
          paidReferrals: 0,
          rewardCents: 0,
          personalPriceCents: 2990,
          refCode,
          refLink,
          hasReward: false,
        });
        return;
      }

      const row = Array.isArray(rpcData) ? rpcData[0] : rpcData;
      const totalReferrals = row.total_referrals ?? 0;
      const paidReferrals = row.paid_referrals ?? 0;
      const rewardCents = row.reward_cents ?? 0;
      const hasReward = rewardCents > 0;

      let state: ReferralRewardState;
      if (totalReferrals === 0) state = "no-referrals";
      else if (paidReferrals > 0) state = "reward-unlocked";
      else state = "registered"; // invited & registered but not paid

      setData({
        state,
        totalReferrals,
        paidReferrals,
        rewardCents,
        personalPriceCents: hasReward ? 2490 : 2990,
        refCode,
        refLink,
        hasReward,
      });
    } catch {
      setData({ ...DEFAULT_DATA, state: "error", refCode, refLink });
    }
  }, [user, refCode, refLink]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetchStatus is async; setState occurs after await, not synchronously
    fetchStatus();
  }, [fetchStatus]);

  return { ...data, refresh: fetchStatus };
}
