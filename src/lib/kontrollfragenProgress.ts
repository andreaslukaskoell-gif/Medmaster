/**
 * Updates stichwort_stats (via adaptive store) after each Kontrollfrage.
 * - 3x correct in a row → status 'meister' (stored as streak >= 3, synced as status in stichwort_stats).
 * - Wrong answer → streak reset to 0 → status 'offen'.
 * Sync to Supabase happens via existing pushStatsToSupabase (periodic or on unload).
 */
import { useAdaptiveStore } from "@/store/adaptiveLearning";

export function updateStichwortProgress(stichwortId: string, correct: boolean, timeSeconds = 30): void {
  useAdaptiveStore.getState().recordAnswer(stichwortId, correct, timeSeconds);
}
