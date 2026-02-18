/**
 * useKFFResultsSWR: KFF-Ergebnisse aus Supabase laden (für Dashboard)
 *
 * - Stabile Loading-Phase: isLoading ist anfangs true und bleibt es,
 *   bis der erste Ladeversuch abgeschlossen ist (Erfolg oder Fehler).
 * - Leere Arrays als Standard, damit keine weiße Seite entsteht.
 */

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { KFFResultRow } from "@/data/kffTypes";

export type { KFFResultRow };

export interface KFFResultsSWRState {
  /** Einzelergebnisse (Übungen) */
  singleResults: KFFResultRow[];
  /** Simulationsergebnisse */
  simulationResults: KFFResultRow[];
  /** Alle zusammengefasst für Listen */
  all: KFFResultRow[];
  isLoading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

const EMPTY_ROWS: KFFResultRow[] = [];

export function useKFFResultsSWR(): KFFResultsSWRState {
  const [singleResults, setSingleResults] = useState<KFFResultRow[]>(EMPTY_ROWS);
  const [simulationResults, setSimulationResults] = useState<KFFResultRow[]>(EMPTY_ROWS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    if (!supabase) {
      setSingleResults(EMPTY_ROWS);
      setSimulationResults(EMPTY_ROWS);
      setError(null);
      setIsLoading(false);
      return;
    }
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setSingleResults(EMPTY_ROWS);
        setSimulationResults(EMPTY_ROWS);
        setIsLoading(false);
        return;
      }

      setError(null);
      const { data, error: err } = await supabase
        .from("kff_results")
        .select("id, user_id, result_type, subtest_type, payload, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (err) {
        setError(err.message);
        setSingleResults(EMPTY_ROWS);
        setSimulationResults(EMPTY_ROWS);
        setIsLoading(false);
        return;
      }

      const rows = Array.isArray(data) ? (data as KFFResultRow[]) : EMPTY_ROWS;
      setSingleResults(rows.filter((r) => r?.result_type === "single"));
      setSimulationResults(rows.filter((r) => r?.result_type === "simulation"));
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Fehler beim Laden";
      setError(msg);
      setSingleResults(EMPTY_ROWS);
      setSimulationResults(EMPTY_ROWS);
      console.error("[useKFFResultsSWR]", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const single = singleResults ?? EMPTY_ROWS;
  const simulation = simulationResults ?? EMPTY_ROWS;
  const all = [...simulation, ...single].sort(
    (a, b) =>
      (new Date(b?.created_at ?? 0).getTime() || 0) - (new Date(a?.created_at ?? 0).getTime() || 0)
  );

  return {
    singleResults: single,
    simulationResults: simulation,
    all,
    isLoading,
    error,
    mutate: fetchResults,
  };
}
