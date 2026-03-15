import { Play, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { countUK } from "@/lib/mergeChapters";
import type { SubjectData } from "@/data/bmsSubjects";

type BMSSubjectViewProps = {
  subjectData: SubjectData;
  roadmapChapters: Kapitel[];
  completedChapters: string[];
  stichwortStats?: Record<string, { streak?: number }>;
  onBack: () => void;
  onSelectChapter: (chapter: Kapitel) => void;
  onStartQuiz: () => void;
};

export function BMSSubjectView({
  subjectData,
  roadmapChapters,
  completedChapters,
  stichwortStats,
  onBack,
  onSelectChapter,
  onStartQuiz,
}: BMSSubjectViewProps) {
  const kapitel = Array.isArray(roadmapChapters) ? roadmapChapters : [];

  if (kapitel.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)] mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />
          BMS
        </Button>
        <div className="text-center py-12">
          <p className="text-[var(--muted)] mb-4">
            In diesem Fach sind noch keine Kapitel vorhanden.
          </p>
          <Button variant="outline" onClick={onBack}>
            Anderes Fach wählen
          </Button>
        </div>
      </div>
    );
  }

  const { total: subjectUK, completed: subjectCompletedUK } = countUK(kapitel, completedChapters);

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
          <ArrowLeft className="w-4 h-4 mr-1" />
          BMS
        </Button>
        <Button variant="outline" size="sm" onClick={onStartQuiz} className="gap-2">
          <Play className="w-4 h-4" />
          Quiz starten
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">{subjectData.label}</h1>
        <p className="text-sm text-[var(--muted)] mt-1">
          {kapitel.length} Kapitel · {subjectUK} Unterkapitel
          {subjectCompletedUK > 0 && (
            <span className="text-[var(--accent)] font-medium ml-2">
              {subjectCompletedUK}/{subjectUK} abgeschlossen
            </span>
          )}
        </p>
      </div>

      <div className="space-y-2">
        {kapitel.map((kap) => {
          if (!kap || !kap.id || typeof kap.id !== "string" || typeof kap.title !== "string") {
            return null;
          }
          const ukTotal =
            kap.unterkapitel && Array.isArray(kap.unterkapitel) ? kap.unterkapitel.length : 0;
          const ukDone =
            kap.unterkapitel && Array.isArray(kap.unterkapitel)
              ? kap.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length
              : 0;
          const isCompleted =
            completedChapters.includes(kap.id) || (ukTotal > 0 && ukDone === ukTotal);
          const progressPct = ukTotal > 0 ? (ukDone / ukTotal) * 100 : 0;

          return (
            <button
              key={kap.id}
              onClick={() => onSelectChapter(kap)}
              className="w-full text-left p-4 rounded-lg border border-[var(--border)] hover:border-[var(--foreground)]/15 hover:shadow-sm transition-all cursor-pointer flex items-center gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-[var(--text-primary)]">
                    {kap.title || "Untitled Chapter"}
                  </h3>
                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-[var(--muted)]">
                  <span>{ukTotal} Unterkapitel</span>
                  {kap.estimatedTime && <span>{kap.estimatedTime}</span>}
                  {ukDone > 0 && !isCompleted && (
                    <span className="text-[var(--accent)]">
                      {ukDone}/{ukTotal}
                    </span>
                  )}
                </div>
                {ukTotal > 0 && progressPct > 0 && (
                  <div className="w-full bg-[var(--border)] rounded-full h-1 mt-2">
                    <div
                      className="bg-[var(--accent)] h-1 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, progressPct)}%` }}
                    />
                  </div>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
