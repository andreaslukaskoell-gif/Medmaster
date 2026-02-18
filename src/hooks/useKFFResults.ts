/**
 * useKFFResults: KFF-Ergebnisse in Supabase speichern + lokalen Store aktualisieren
 *
 * - recordResult / recordSimulation schreiben in kff_results (Supabase)
 * - Zusätzlich wird der lokale kffStore aktualisiert (für sofortige UI-Updates)
 * - Ohne eingeloggten User wird nur lokal gespeichert
 */

import { useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useKFFStore } from "@/stores/kffStore";
import type { KFFSubtestType, KFFResult, SimulationResult } from "@/data/kffTypes";

export function useKFFResults() {
  const recordResultLocal = useKFFStore((s) => s.recordResult);
  const recordSimulationLocal = useKFFStore((s) => s.recordSimulation);

  const recordResult = useCallback(
    async (subtestType: KFFSubtestType, result: KFFResult) => {
      recordResultLocal(subtestType, result);
      if (!supabase) return;
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;
        await supabase.from("kff_results").insert({
          user_id: user.id,
          result_type: "single",
          subtest_type: subtestType,
          payload: result,
        });
      } catch (_) {
        // Offline / keine Supabase-Config / Tabelle fehlt – nur lokal gespeichert
      }
    },
    [recordResultLocal]
  );

  const recordSimulation = useCallback(
    async (result: SimulationResult) => {
      recordSimulationLocal(result);
      if (!supabase) return;
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;
        await supabase.from("kff_results").insert({
          user_id: user.id,
          result_type: "simulation",
          subtest_type: result.subtestType,
          payload: result,
        });
      } catch (_) {
        // Offline / keine Supabase-Config / Tabelle fehlt – nur lokal gespeichert
      }
    },
    [recordSimulationLocal]
  );

  return { recordResult, recordSimulation };
}
