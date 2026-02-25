import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

const LOG_PREFIX = "[Dashboard]";

export interface DashboardProfile {
  xp: number;
  level: number;
  streak: number;
  loading: boolean;
  hasData: boolean;
}

/**
 * Fetches profile (xp, level, streak) from Supabase for the current user.
 * Logs to console for Console Ninja / dev tools. Returns hasData: false when
 * no user or profile is empty/missing so the UI can show a welcome state.
 */
export function useDashboardProfile(): DashboardProfile {
  const { user } = useAuth();
  const [state, setState] = useState<DashboardProfile>({
    xp: 0,
    level: 1,
    streak: 0,
    loading: true,
    hasData: false,
  });

  const userId = user?.id ?? null;

  useEffect(() => {
    if (!userId) {
      const t = setTimeout(() => setState((s) => ({ ...s, loading: false, hasData: false })), 0);
      return () => clearTimeout(t);
    }
    if (!supabase) {
      const t = setTimeout(() => setState((s) => ({ ...s, loading: false, hasData: false })), 0);
      return () => clearTimeout(t);
    }

    let cancelled = false;

    async function fetchProfile() {
      const client = supabase;
      if (!client) return;
      setState((s) => ({ ...s, loading: true }));
      try {
        const { data, error } = await client
          .from("profiles")
          .select("xp, level, streak_days")
          .eq("id", userId)
          .maybeSingle();

        if (cancelled) return;

        if (error) {
          console.warn(LOG_PREFIX, "Profile fetch error:", error.message);
          setState((s) => ({
            ...s,
            xp: 0,
            level: 1,
            streak: 0,
            loading: false,
            hasData: false,
          }));
          return;
        }

        const xp = Number(data?.xp ?? 0);
        const level = Number(data?.level ?? 0) || Math.floor(xp / 100) + 1;
        const streak = Number(data?.streak_days ?? 0);
        const hasData = xp > 0 || streak > 0 || (data != null && data !== undefined);

        setState({
          xp,
          level,
          streak,
          loading: false,
          hasData,
        });
      } catch (err) {
        if (cancelled) return;
        console.warn(LOG_PREFIX, "Profile fetch exception:", err);
        setState((s) => ({
          ...s,
          xp: 0,
          level: 1,
          streak: 0,
          loading: false,
          hasData: false,
        }));
      }
    }

    fetchProfile();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  return state;
}
