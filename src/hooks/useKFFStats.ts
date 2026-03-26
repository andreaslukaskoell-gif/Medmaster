import { useMemo, useCallback } from "react";
import { useStore } from "@/store/useStore";
import type { QuizResult } from "@/store/useStore";

/** Stable empty array to prevent new references when quizResults is nullish. */
const EMPTY_QUIZ_RESULTS: QuizResult[] = [];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type KFFSubtestKey =
  | "zahlenfolgen"
  | "implikationen"
  | "wortfluessigkeit"
  | "figuren"
  | "gedaechtnis";

type KFFSubtestStat = {
  subtest: KFFSubtestKey;
  label: string;
  totalTasks: number;
  correctTasks: number;
  accuracy: number;
  trend: number[];
  lastPracticed: string | null;
  sessionsCount: number;
};

type KFFStats = {
  subtests: KFFSubtestStat[];
  overallAccuracy: number;
  totalSeriousSessions: number;
  weakestSubtest: string | null;
  strongestSubtest: string | null;
  resetStats: (subtest?: KFFSubtestKey) => void;
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SUBTEST_CONFIG: { key: KFFSubtestKey; label: string; matchers: string[] }[] = [
  {
    key: "zahlenfolgen",
    label: "Zahlenfolgen",
    matchers: ["zahlenfolgen", "kff zahlenfolgen"],
  },
  {
    key: "implikationen",
    label: "Implikationen",
    matchers: ["implikationen", "kff implikationen"],
  },
  {
    key: "wortfluessigkeit",
    label: "Wortflüssigkeit",
    matchers: ["wortflüssigkeit", "kff wortflüssigkeit"],
  },
  {
    key: "figuren",
    label: "Figuren zusammensetzen",
    matchers: ["figuren zusammensetzen", "kff figuren"],
  },
  {
    key: "gedaechtnis",
    label: "Gedächtnis",
    matchers: ["gedächtnis", "kff merkfähigkeit"],
  },
];

/** 15-minute session window in milliseconds. */
const SESSION_GAP_MS = 15 * 60 * 1000;

/** Minimum tasks to qualify as a "serious" session. */
const MIN_SERIOUS_TASKS = 3;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function matchSubtest(subject: string | undefined): KFFSubtestKey | null {
  if (!subject) return null;
  const lower = subject.toLowerCase();
  for (const cfg of SUBTEST_CONFIG) {
    if (cfg.matchers.some((m) => lower === m)) return cfg.key;
  }
  return null;
}

type KFFQuizResult = QuizResult & { _subtest: KFFSubtestKey; _ts: number };

/**
 * Group chronologically-sorted results into sessions.
 * A new session starts when the gap between consecutive results exceeds SESSION_GAP_MS.
 */
function groupIntoSessions(results: KFFQuizResult[]): KFFQuizResult[][] {
  if (results.length === 0) return [];
  const sessions: KFFQuizResult[][] = [[results[0]!]];
  for (let i = 1; i < results.length; i++) {
    const prev = results[i - 1]!;
    const cur = results[i]!;
    if (cur._ts - prev._ts > SESSION_GAP_MS) {
      sessions.push([cur]);
    } else {
      sessions[sessions.length - 1]!.push(cur);
    }
  }
  return sessions;
}

function computeSessionAccuracy(session: KFFQuizResult[]): number {
  let correct = 0;
  let total = 0;
  for (const r of session) {
    correct += r.score;
    total += r.total;
  }
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

function getTimestamp(r: QuizResult): number {
  if (r.timestamp) return new Date(r.timestamp).getTime();
  // Fallback: parse German date format "dd.mm.yyyy"
  if (r.date && r.date.includes(".")) {
    const [d, m, y] = r.date.split(".");
    return new Date(`${y}-${m}-${d}`).getTime();
  }
  return new Date(r.date).getTime();
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useKFFStats(): KFFStats {
  const quizResults = useStore((s) => s.quizResults) ?? EMPTY_QUIZ_RESULTS;

  // We need direct store access for resetStats
  const resetStats = useCallback((subtest?: KFFSubtestKey) => {
    useStore.setState((s) => {
      const filtered = (s.quizResults ?? []).filter((r) => {
        if (r == null) return false;
        if (r.type !== "kff") return true; // keep non-KFF
        if (!subtest) return false; // reset all KFF
        const matched = matchSubtest(r.subject);
        return matched !== subtest; // keep other subtests
      });
      return { quizResults: filtered };
    });
  }, []);

  const stats = useMemo(() => {
    // 1. Filter and tag KFF results
    const kffResults: KFFQuizResult[] = [];
    for (const r of quizResults) {
      if (r == null || typeof r !== "object") continue;
      if (r.type !== "kff") continue;
      const sub = matchSubtest(r.subject);
      if (!sub) continue;
      const ts = getTimestamp(r);
      if (!Number.isFinite(ts)) continue;
      kffResults.push({ ...r, _subtest: sub, _ts: ts });
    }

    // 2. Sort by timestamp ascending
    kffResults.sort((a, b) => a._ts - b._ts);

    // 3. Group per subtest, then into sessions, then filter serious
    const subtestStats: KFFSubtestStat[] = SUBTEST_CONFIG.map((cfg) => {
      const subtestResults = kffResults.filter((r) => r._subtest === cfg.key);
      const sessions = groupIntoSessions(subtestResults);

      // Count total tasks per session to determine serious vs exploration
      const seriousSessions = sessions.filter((s) => {
        const totalTasks = s.reduce((sum, r) => sum + r.total, 0);
        return totalTasks >= MIN_SERIOUS_TASKS;
      });

      let totalTasks = 0;
      let correctTasks = 0;
      let lastTs = 0;

      for (const session of seriousSessions) {
        for (const r of session) {
          totalTasks += r.total;
          correctTasks += r.score;
          if (r._ts > lastTs) lastTs = r._ts;
        }
      }

      const accuracy = totalTasks > 0 ? Math.round((correctTasks / totalTasks) * 100) : 0;

      // Trend: last 10 serious sessions' accuracies
      const trend = seriousSessions.slice(-10).map((s) => computeSessionAccuracy(s));

      const lastPracticed = lastTs > 0 ? new Date(lastTs).toISOString() : null;

      return {
        subtest: cfg.key,
        label: cfg.label,
        totalTasks,
        correctTasks,
        accuracy,
        trend,
        lastPracticed,
        sessionsCount: seriousSessions.length,
      };
    });

    // 4. Overall stats
    const totalCorrect = subtestStats.reduce((s, st) => s + st.correctTasks, 0);
    const totalAll = subtestStats.reduce((s, st) => s + st.totalTasks, 0);
    const overallAccuracy = totalAll > 0 ? Math.round((totalCorrect / totalAll) * 100) : 0;
    const totalSeriousSessions = subtestStats.reduce((s, st) => s + st.sessionsCount, 0);

    // 5. Weakest / strongest (only consider subtests with at least 1 serious session)
    const practiced = subtestStats.filter((st) => st.sessionsCount > 0);
    let weakestSubtest: string | null = null;
    let strongestSubtest: string | null = null;
    if (practiced.length > 0) {
      practiced.sort((a, b) => a.accuracy - b.accuracy);
      weakestSubtest = practiced[0]!.subtest;
      strongestSubtest = practiced[practiced.length - 1]!.subtest;
      // If all equal, no meaningful weak/strong
      if (weakestSubtest === strongestSubtest && practiced.length === 1) {
        strongestSubtest = weakestSubtest;
      }
    }

    return {
      subtests: subtestStats,
      overallAccuracy,
      totalSeriousSessions,
      weakestSubtest,
      strongestSubtest,
    };
  }, [quizResults]);

  return { ...stats, resetStats };
}
