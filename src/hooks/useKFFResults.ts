/**
 * useKFFResults: KFF-Ergebnisse in Supabase speichern + lokalen Store aktualisieren
 *
 * - recordResult / recordSimulation schreiben in kff_results (Supabase)
 * - Zusätzlich wird der lokale kffStore aktualisiert (für sofortige UI-Updates)
 * - recordSimulation speist auch in quizResults (Analyse, Statistik, Dashboard) ein
 * - Ohne eingeloggten User wird nur lokal gespeichert
 */

import { useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useKFFStore } from "@/stores/kffStore";
import { useStore } from "@/store/useStore";
import type { KFFSubtestType, KFFResult, SimulationResult } from "@/data/kffTypes";

const KFF_SUBTEST_LABELS: Record<string, string> = {
  implikationen: "Implikationen",
  zahlenfolgen: "Zahlenfolgen",
  wortfluessigkeit: "Wortflüssigkeit",
  merkfaehigkeit: "Merkfähigkeit",
  figuren: "Figuren",
  "emotionen-regulieren": "Emotionen regulieren",
  "soziales-entscheiden": "Soziales Entscheiden",
  "emotionen-erkennen": "Emotionen erkennen",
  textverstaendnis: "Textverständnis",
};

export function useKFFResults() {
  const recordResultLocal = useKFFStore((s) => s.recordResult);
  const recordSimulationLocal = useKFFStore((s) => s.recordSimulation);
  const saveQuizResult = useStore((s) => s.saveQuizResult);

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
      const subject = KFF_SUBTEST_LABELS[result.subtestType] ?? result.subtestType;
      const answers = (result.details ?? []).map((d) => ({
        questionId: d.exerciseId ?? "",
        selectedAnswer: d.userAnswer ?? "",
        correct: d.correct ?? false,
      }));
      saveQuizResult({
        id: result.id,
        type: "kff",
        subject: `KFF ${subject}`,
        score: result.score,
        total: result.maxScore,
        date: new Date().toLocaleDateString("de-AT"),
        timestamp: result.date ?? new Date().toISOString(),
        answers,
      });
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
    [recordSimulationLocal, saveQuizResult]
  );

  return { recordResult, recordSimulation };
}
