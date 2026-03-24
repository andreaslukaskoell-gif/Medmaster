import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

// ============================================================
// Types
// ============================================================

type SubjectAccuracyEntry = {
  current: number;
  total: number;
  correct: number;
  trend: "up" | "down" | "stable";
  sparkline: number[];
};

type AccuracyOverTimeEntry = {
  date: string;
  overall: number;
  bio?: number;
  ch?: number;
  ph?: number;
  ma?: number;
};

type PracticeDistributionEntry = {
  week: string;
  bms: number;
  kff: number;
  tv: number;
  sek: number;
};

type RecentSessionEntry = {
  id: string;
  type: string;
  subject?: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  durationMinutes?: number;
};

type WeakStrongTopic = {
  topic: string;
  fach: string;
  successRate: number;
};

type TotalStats = {
  questionsAnswered: number;
  correctAnswers: number;
  learningDays: number;
  totalMinutes: number;
  chaptersCompleted: number;
  totalChapters: number;
};

export type ProgressAnalytics = {
  subjectAccuracy: Record<string, SubjectAccuracyEntry>;
  accuracyOverTime: AccuracyOverTimeEntry[];
  practiceDistribution: PracticeDistributionEntry[];
  recentSessions: RecentSessionEntry[];
  overallReadiness: number;
  weakTopics: WeakStrongTopic[];
  strongTopics: WeakStrongTopic[];
  totalStats: TotalStats;
};

// ============================================================
// Helpers
// ============================================================

/** Map subject names to short keys used in accuracyOverTime. */
const SUBJECT_SHORT: Record<string, "bio" | "ch" | "ph" | "ma"> = {
  biologie: "bio",
  chemie: "ch",
  physik: "ph",
  mathematik: "ma",
};

/** Total BMS chapters (24 Kapitel as of 2026-03). Loaded lazily to avoid heavy import. */
const TOTAL_CHAPTERS = 24;

function dateStr(d: Date): string {
  return d.toISOString().split("T")[0]!;
}

/** Normalize any date string (ISO, German DD.M.YYYY, or timestamp) to YYYY-MM-DD. */
function normalizeDate(raw: string | undefined): string {
  if (!raw) return "";
  // Already ISO
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.split("T")[0]!;
  // German format
  const parts = raw.split(".");
  if (parts.length === 3) {
    const [d, m, y] = parts;
    return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  // Fallback: try to parse
  const parsed = new Date(raw);
  return isNaN(parsed.getTime()) ? "" : dateStr(parsed);
}

/** Build array of YYYY-MM-DD strings for the last N days (most recent last). */
function lastNDays(n: number): string[] {
  const now = new Date();
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    days.push(dateStr(d));
  }
  return days;
}

/** Parse date string that may be ISO ("2026-03-20"), German ("20.3.2026"), or ISO timestamp. */
function parseFlexDate(dateString: string): Date {
  // Try ISO first
  if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
    return new Date(dateString.split("T")[0] + "T00:00:00");
  }
  // German format: DD.M.YYYY or DD.MM.YYYY
  const parts = dateString.split(".");
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00`);
  }
  return new Date(dateString);
}

/** ISO week number string like "KW12". */
function isoWeekLabel(dateString: string): string {
  const d = parseFlexDate(dateString);
  if (isNaN(d.getTime())) return "KW?";
  const tmp = new Date(d.getTime());
  tmp.setDate(tmp.getDate() + 3 - ((tmp.getDay() + 6) % 7));
  const firstThursday = new Date(tmp.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7));
  const weekNum = 1 + Math.round((tmp.getTime() - firstThursday.getTime()) / 604800000);
  return `KW${weekNum}`;
}

// ============================================================
// Hook
// ============================================================

export function useProgressAnalytics(): ProgressAnalytics {
  const quizResults = useStore((s) =>
    (s.quizResults ?? []).filter((r) => r != null && typeof r === "object")
  );
  const activityLog = useStore((s) => s.activityLog);
  const completedChapters = useStore((s) => s.completedChapters);

  const getMedATReadiness = useAdaptiveStore((s) => s.getMedATReadiness ?? (() => 0));
  const getWeakestTopics = useAdaptiveStore((s) => s.getWeakestTopics ?? (() => []));
  const getStrongestTopics = useAdaptiveStore((s) => s.getStrongestTopics ?? (() => []));

  // ── Subject Accuracy ──────────────────────────────────────
  const subjectAccuracy = useMemo(() => {
    const result: Record<string, SubjectAccuracyEntry> = {};
    const subjects = ["biologie", "chemie", "physik", "mathematik"];
    const days14 = lastNDays(14);
    const cutoff14 = days14[0]!;

    for (const subject of subjects) {
      const subjectResults = quizResults.filter((r) => r.type === "bms" && r.subject === subject);
      const total = subjectResults.reduce((s, r) => s + r.total, 0);
      const correct = subjectResults.reduce((s, r) => s + r.score, 0);
      const current = total > 0 ? Math.round((correct / total) * 100) : 0;

      // Sparkline: daily accuracy over last 14 days
      const byDate = new Map<string, { score: number; total: number }>();
      for (const r of subjectResults) {
        const day = normalizeDate(r.date);
        if (day < cutoff14) continue;
        const entry = byDate.get(day) ?? { score: 0, total: 0 };
        entry.score += r.score;
        entry.total += r.total;
        byDate.set(day, entry);
      }
      const sparkline = days14.map((day) => {
        const entry = byDate.get(day);
        if (!entry || entry.total === 0) return 0;
        return Math.round((entry.score / entry.total) * 100);
      });

      // Trend: compare last 7 vs prior 7
      const prev7 = sparkline.slice(0, 7).filter((v) => v > 0);
      const last7 = sparkline.slice(7, 14).filter((v) => v > 0);
      const avgPrev = prev7.length > 0 ? prev7.reduce((a, b) => a + b, 0) / prev7.length : 0;
      const avgLast = last7.length > 0 ? last7.reduce((a, b) => a + b, 0) / last7.length : 0;
      const delta = avgLast - avgPrev;
      const trend: "up" | "down" | "stable" = delta > 3 ? "up" : delta < -3 ? "down" : "stable";

      result[subject] = { current, total, correct, trend, sparkline };
    }
    return result;
  }, [quizResults]);

  // ── Accuracy Over Time (last 30 days) ─────────────────────
  const accuracyOverTime = useMemo(() => {
    const days30 = lastNDays(30);
    const cutoff = days30[0]!;

    // Build per-day, per-subject aggregates
    const byDate = new Map<
      string,
      { score: number; total: number; bySubject: Record<string, { score: number; total: number }> }
    >();

    for (const r of quizResults) {
      if (r.type !== "bms") continue;
      const day = normalizeDate(r.date);
      if (day < cutoff) continue;
      const entry = byDate.get(day) ?? { score: 0, total: 0, bySubject: {} };
      entry.score += r.score;
      entry.total += r.total;
      if (r.subject) {
        const sub = entry.bySubject[r.subject] ?? { score: 0, total: 0 };
        sub.score += r.score;
        sub.total += r.total;
        entry.bySubject[r.subject] = sub;
      }
      byDate.set(day, entry);
    }

    return days30.map((day) => {
      const entry = byDate.get(day);
      const row: AccuracyOverTimeEntry = {
        date: day,
        overall: entry && entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0,
      };
      if (entry) {
        for (const [subject, shortKey] of Object.entries(SUBJECT_SHORT)) {
          const sub = entry.bySubject[subject];
          if (sub && sub.total > 0) {
            row[shortKey] = Math.round((sub.score / sub.total) * 100);
          }
        }
      }
      return row;
    });
  }, [quizResults]);

  // ── Practice Distribution (by ISO week) ───────────────────
  const practiceDistribution = useMemo(() => {
    const weekMap = new Map<string, { bms: number; kff: number; tv: number; sek: number }>();

    for (const r of quizResults) {
      const day = normalizeDate(r.date);
      if (!day) continue;
      const week = isoWeekLabel(day);
      const entry = weekMap.get(week) ?? { bms: 0, kff: 0, tv: 0, sek: 0 };
      const section = r.type === "simulation" ? "bms" : r.type || "bms";
      if (section in entry) {
        entry[section as keyof typeof entry] += r.total;
      }
      weekMap.set(week, entry);
    }

    // Sort by week label (KW1 < KW2 etc.) — use insertion order which follows quiz chronology
    const result: PracticeDistributionEntry[] = [];
    for (const [week, counts] of weekMap) {
      result.push({ week, ...counts });
    }
    return result;
  }, [quizResults]);

  // ── Recent Sessions ───────────────────────────────────────
  const recentSessions = useMemo(() => {
    return quizResults
      .slice(-20)
      .reverse()
      .map((r) => ({
        id: r.id,
        type: r.type ?? "bms",
        subject: r.subject,
        score: r.score,
        total: r.total,
        percentage: r.total > 0 ? Math.round((r.score / r.total) * 100) : 0,
        date: r.date,
        durationMinutes: r.durationMinutes,
      }));
  }, [quizResults]);

  // ── Overall Readiness ─────────────────────────────────────
  const overallReadiness = useMemo(() => getMedATReadiness(), [getMedATReadiness]);

  // ── Weak / Strong Topics ──────────────────────────────────
  const weakTopics = useMemo(
    () =>
      getWeakestTopics(10).map((t) => ({
        topic: t.thema,
        fach: t.fach,
        successRate: t.rate,
      })),
    [getWeakestTopics]
  );

  const strongTopics = useMemo(
    () =>
      getStrongestTopics(10).map((t) => ({
        topic: t.thema,
        fach: t.fach,
        successRate: t.rate,
      })),
    [getStrongestTopics]
  );

  // ── Total Stats ───────────────────────────────────────────
  const totalStats = useMemo((): TotalStats => {
    const questionsAnswered = quizResults.reduce((s, r) => s + r.total, 0);
    const correctAnswers = quizResults.reduce((s, r) => s + r.score, 0);

    const logEntries = Object.entries(activityLog);
    const learningDays = logEntries.length;
    const totalMinutes = logEntries.reduce((s, [, v]) => s + (v.minutes ?? 0), 0);

    return {
      questionsAnswered,
      correctAnswers,
      learningDays,
      totalMinutes: Math.round(totalMinutes),
      chaptersCompleted: completedChapters.length,
      totalChapters: TOTAL_CHAPTERS,
    };
  }, [quizResults, activityLog, completedChapters]);

  // ── Assemble result ───────────────────────────────────────
  return useMemo(
    () => ({
      subjectAccuracy,
      accuracyOverTime,
      practiceDistribution,
      recentSessions,
      overallReadiness,
      weakTopics,
      strongTopics,
      totalStats,
    }),
    [
      subjectAccuracy,
      accuracyOverTime,
      practiceDistribution,
      recentSessions,
      overallReadiness,
      weakTopics,
      strongTopics,
      totalStats,
    ]
  );
}
