/**
 * Beta analytics export — extracts key learning metrics from localStorage stores
 * for offline analysis during closed beta. No PII exported (no names/emails).
 */

export type BetaSnapshot = {
  exportedAt: string;
  userId: string; // anonymized: first 8 chars of UUID
  daysActive: number;
  totalQuestions: number;
  totalCorrect: number;
  totalMinutes: number;
  chaptersCompleted: number;
  quizResultsSummary: Array<{
    date: string;
    type: string;
    subject?: string;
    score: number;
    total: number;
    durationMinutes?: number;
  }>;
  lernplanConfig: unknown;
  streak: number;
  xp: number;
  kffSubtestStats: Array<{
    subtest: string;
    totalTasks: number;
    accuracy: number;
  }>;
  activityDays: string[]; // list of YYYY-MM-DD dates with activity
};

export function exportBetaSnapshot(): BetaSnapshot {
  const raw = localStorage.getItem("medmaster-storage");
  if (!raw) return emptySnapshot();

  try {
    const parsed = JSON.parse(raw);
    const state = parsed?.state;
    if (!state) return emptySnapshot();

    const quizResults = Array.isArray(state.quizResults) ? state.quizResults : [];
    const activityLog =
      state.activityLog && typeof state.activityLog === "object" ? state.activityLog : {};

    return {
      exportedAt: new Date().toISOString(),
      userId: (state.userId ?? state.id ?? "unknown").slice(0, 8),
      daysActive: Object.keys(activityLog).length,
      totalQuestions: quizResults.reduce(
        (s: number, r: { total?: number }) => s + (r.total ?? 0),
        0
      ),
      totalCorrect: quizResults.reduce((s: number, r: { score?: number }) => s + (r.score ?? 0), 0),
      totalMinutes: Object.values(activityLog).reduce(
        (s: number, v: unknown) => s + ((v as { minutes?: number })?.minutes ?? 0),
        0
      ),
      chaptersCompleted: Array.isArray(state.completedChapters)
        ? state.completedChapters.length
        : 0,
      quizResultsSummary: quizResults.slice(-100).map((r: Record<string, unknown>) => ({
        date: String(r.date ?? ""),
        type: String(r.type ?? ""),
        subject: r.subject ? String(r.subject) : undefined,
        score: Number(r.score ?? 0),
        total: Number(r.total ?? 0),
        durationMinutes: r.durationMinutes ? Number(r.durationMinutes) : undefined,
      })),
      lernplanConfig: state.lernplanConfig ?? null,
      streak: Number(state.streak ?? 0),
      xp: Number(state.xp ?? 0),
      kffSubtestStats: [], // populated from kffStore if needed
      activityDays: Object.keys(activityLog).sort(),
    };
  } catch {
    return emptySnapshot();
  }
}

function emptySnapshot(): BetaSnapshot {
  return {
    exportedAt: new Date().toISOString(),
    userId: "unknown",
    daysActive: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    totalMinutes: 0,
    chaptersCompleted: 0,
    quizResultsSummary: [],
    lernplanConfig: null,
    streak: 0,
    xp: 0,
    kffSubtestStats: [],
    activityDays: [],
  };
}

/** Copy beta snapshot to clipboard as JSON (for manual collection) */
export async function copyBetaSnapshotToClipboard(): Promise<boolean> {
  try {
    const snapshot = exportBetaSnapshot();
    await navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2));
    return true;
  } catch {
    return false;
  }
}
