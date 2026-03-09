import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { getLevelFromXP } from "@/lib/progression";
import { isSchemaSkipActive } from "@/lib/supabaseSchemaSkip";

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
    if (!supabase || isSchemaSkipActive()) {
      const t = setTimeout(() => setState((s) => ({ ...s, loading: false, hasData: false })), 0);
      return () => clearTimeout(t);
    }

    let cancelled = false;

    async function fetchProfile() {
      const client = supabase;
      if (!client || isSchemaSkipActive()) return;
      setState((s) => ({ ...s, loading: true }));
      try {
        const { data, error } = await client
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .maybeSingle();

        if (cancelled) return;

        if (error) {
          // Fail silently — schema may not be deployed yet
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

        const row = data as Record<string, unknown> | null;
        const xp = Number(row?.xp ?? 0);
        const level = Number(row?.level ?? 0) || getLevelFromXP(xp);
        const streak = Number(row?.streak_days ?? 0);
        const hasData = xp > 0 || streak > 0 || (data != null && data !== undefined);

        setState({
          xp,
          level,
          streak,
          loading: false,
          hasData,
        });
      } catch {
        if (cancelled) return;
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
