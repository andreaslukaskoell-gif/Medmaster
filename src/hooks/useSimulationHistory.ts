import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { useKFFStore } from "@/store/kffStore";
import type { QuizResult } from "@/store/useStore";
import type { SimulationResult } from "@/data/kffTypes";

const STABLE_EMPTY_ARR: never[] = [];

type SimulationHistoryEntry = {
  id: string;
  date: string;
  type: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
  durationMinutes: number;
  sections?: Array<{
    name: string;
    score: number;
    maxScore: number;
  }>;
};

type SimulationHistory = {
  entries: SimulationHistoryEntry[];
  totalSimulations: number;
  bestScore: { percentage: number; date: string } | null;
  averageScore: number;
  trend: "improving" | "declining" | "stable" | "insufficient";
  byType: Record<
    string,
    {
      count: number;
      bestPercentage: number;
      lastDate: string;
    }
  >;
};

function labelForQuizResult(r: QuizResult): string {
  if (r.type === "simulation") return "MedAT Vollsimulation";
  if (r.type === "bms") {
    const subj = r.subject ?? "Allgemein";
    return `BMS Kurztest: ${subj.charAt(0).toUpperCase() + subj.slice(1)}`;
  }
  if (r.type === "tv") return "Textverständnis";
  if (r.type === "kff") {
    const subj = r.subject ?? "Allgemein";
    return `KFF: ${subj.charAt(0).toUpperCase() + subj.slice(1)}`;
  }
  if (r.type === "sek") return "Sozial-emotionale Kompetenzen";
  return r.type;
}

function typeForQuizResult(r: QuizResult): string {
  if (r.type === "simulation") return "vollsimulation";
  return r.type;
}

function labelForSimulationResult(r: SimulationResult): string {
  const subtestLabels: Record<string, string> = {
    implikationen: "KFF: Implikationen",
    zahlenfolgen: "KFF: Zahlenfolgen",
    wortflüssigkeit: "KFF: Wortflüssigkeit",
    merkfähigkeit: "KFF: Merkfähigkeit",
    figuren: "KFF: Figuren zusammensetzen",
    "emotionen-regulieren": "SEK: Emotionen regulieren",
    "soziales-entscheiden": "SEK: Soziales Entscheiden",
    "emotionen-erkennen": "SEK: Emotionen erkennen",
    textverständnis: "TV: Textverständnis",
  };
  return subtestLabels[r.subtestType] ?? `KFF: ${r.subtestType}`;
}

function typeForSimulationResult(r: SimulationResult): string {
  if (
    r.subtestType === "emotionen-regulieren" ||
    r.subtestType === "soziales-entscheiden" ||
    r.subtestType === "emotionen-erkennen"
  ) {
    return "sek";
  }
  if (r.subtestType === "textverständnis") return "tv";
  return "kff";
}

function computeTrend(
  entries: SimulationHistoryEntry[]
): "improving" | "declining" | "stable" | "insufficient" {
  if (entries.length < 5) return "insufficient";

  // entries are sorted desc, so last 5 = index 0..4, prior 5 = index 5..9
  const recent5 = entries.slice(0, 5);
  const prior5 = entries.slice(5, 10);

  if (prior5.length === 0) return "insufficient";

  const avgRecent = recent5.reduce((sum, e) => sum + e.percentage, 0) / recent5.length;
  const avgPrior = prior5.reduce((sum, e) => sum + e.percentage, 0) / prior5.length;

  const diff = avgRecent - avgPrior;
  if (diff > 3) return "improving";
  if (diff < -3) return "declining";
  return "stable";
}

export function useSimulationHistory(): SimulationHistory {
  const quizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_ARR);
  const simulationResults = useKFFStore((s) => s.simulationResults);

  return useMemo(() => {
    const seenIds = new Set<string>();
    const entries: SimulationHistoryEntry[] = [];

    // 1. Process quizResults (type="simulation" or any quiz-like result)
    for (const r of quizResults) {
      if (seenIds.has(r.id)) continue;
      seenIds.add(r.id);

      const pct = r.total > 0 ? Math.round((r.score / r.total) * 100) : 0;
      entries.push({
        id: r.id,
        date: r.timestamp ?? r.date,
        type: typeForQuizResult(r),
        label: labelForQuizResult(r),
        score: r.score,
        maxScore: r.total,
        percentage: pct,
        durationMinutes: r.durationMinutes ?? 0,
      });
    }

    // 2. Process kffStore simulationResults
    for (const r of simulationResults) {
      if (seenIds.has(r.id)) continue;
      seenIds.add(r.id);

      const pct = r.maxScore > 0 ? Math.round((r.score / r.maxScore) * 100) : 0;
      entries.push({
        id: r.id,
        date: r.date,
        type: typeForSimulationResult(r),
        label: labelForSimulationResult(r),
        score: r.score,
        maxScore: r.maxScore,
        percentage: pct,
        durationMinutes: Math.round(r.timeUsed / 60),
      });
    }

    // 3. Sort by date descending
    entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 4. Aggregations
    const totalSimulations = entries.length;

    let bestScore: { percentage: number; date: string } | null = null;
    let sumPct = 0;

    for (const e of entries) {
      sumPct += e.percentage;
      if (!bestScore || e.percentage > bestScore.percentage) {
        bestScore = { percentage: e.percentage, date: e.date };
      }
    }

    const averageScore = totalSimulations > 0 ? Math.round(sumPct / totalSimulations) : 0;

    // 5. Trend
    const trend = computeTrend(entries);

    // 6. byType
    const byType: Record<string, { count: number; bestPercentage: number; lastDate: string }> = {};

    for (const e of entries) {
      const existing = byType[e.type];
      if (!existing) {
        byType[e.type] = {
          count: 1,
          bestPercentage: e.percentage,
          lastDate: e.date,
        };
      } else {
        existing.count += 1;
        if (e.percentage > existing.bestPercentage) {
          existing.bestPercentage = e.percentage;
        }
        // entries are sorted desc, so first occurrence is the latest date
        // no need to update lastDate
      }
    }

    return {
      entries,
      totalSimulations,
      bestScore,
      averageScore,
      trend,
      byType,
    };
  }, [quizResults, simulationResults]);
}
