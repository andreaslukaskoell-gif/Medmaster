import { Play, CheckCircle2, ChevronRight, ChevronLeft, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { countUK } from "@/lib/mergeChapters";
import type { SubjectData } from "@/data/bmsSubjects";
import { usePermissions } from "@/hooks/usePermissions";
import { PaywallBanner } from "@/components/ui/paywall";

const subjectAccentVars: Record<string, string> = {
  biologie: "var(--accent-bio)",
  chemie: "var(--accent-chem)",
  physik: "var(--accent-phys)",
  mathematik: "var(--accent-math)",
};

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
  onBack,
  onSelectChapter,
  onStartQuiz,
}: BMSSubjectViewProps) {
  const kapitel = Array.isArray(roadmapChapters) ? roadmapChapters : [];
  const accentColor = subjectAccentVars[subjectData.id] ?? "var(--accent)";
  const { getLimit } = usePermissions();
  const chapterLimit = getLimit("bms_chapters"); // null = unlimited

  if (kapitel.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)] mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
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
  const overallPct = subjectUK > 0 ? Math.round((subjectCompletedUK / subjectUK) * 100) : 0;

  // Find first chapter with incomplete UKs (only within free chapters)
  const freeChapters = chapterLimit !== null ? kapitel.slice(0, chapterLimit) : kapitel;
  const firstIncompleteChapter = freeChapters.find((kap) => {
    if (!kap?.unterkapitel) return false;
    const done = kap.unterkapitel.filter((u) => u?.id && completedChapters.includes(u.id)).length;
    return done < kap.unterkapitel.length;
  });

  return (
    <div className="max-w-3xl mx-auto space-y-12 py-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-[var(--muted)]">
          <ChevronLeft className="w-4 h-4 mr-1" />
          BMS
        </Button>
        <Button variant="glass" size="sm" onClick={onStartQuiz} className="gap-2">
          <Play className="w-4 h-4" />
          Quiz starten
        </Button>
      </div>

      {/* Subject header — centered premium */}
      <div className="text-center hero-orbs py-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md"
            style={{
              color: accentColor,
              background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 12%, transparent), color-mix(in srgb, ${accentColor} 6%, transparent))`,
            }}
          >
            {subjectData.label}
          </span>
        </div>
        <h1 className="text-2xl sm:text-[3rem] sm:leading-tight font-bold text-[var(--foreground)] tracking-tight mb-2 heading-glow">
          {subjectData.label}
        </h1>
        <p className="text-lg text-[var(--muted)]">
          {kapitel.length} Kapitel · {subjectUK} Unterkapitel
        </p>

        {/* Overall progress — premium */}
        <div className="mt-6 max-w-sm mx-auto">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
            <span>
              {subjectCompletedUK} von {subjectUK} abgeschlossen
            </span>
            <span
              className="font-semibold"
              style={{ color: overallPct > 0 ? accentColor : undefined }}
            >
              {overallPct}%
            </span>
          </div>
          <div
            className="progress-premium"
            style={{ "--subject-accent": accentColor } as React.CSSProperties}
          >
            <div className="progress-fill" style={{ width: `${overallPct}%` }} />
          </div>
        </div>
      </div>

      {/* Continue button */}
      {firstIncompleteChapter && (
        <Button
          onClick={() => onSelectChapter(firstIncompleteChapter)}
          className="gap-2"
          variant="premium"
          size="lg"
        >
          <Play className="w-4 h-4" />
          {subjectCompletedUK === 0
            ? "Lernen starten"
            : `Fortsetzen — ${firstIncompleteChapter.title}`}
        </Button>
      )}

      {/* Chapter list */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          Kapitel
        </h2>
        <div className="card-glass divide-y divide-[var(--border)]/30 overflow-hidden">
          {kapitel.map((kap, index) => {
            if (!kap || !kap.id || typeof kap.id !== "string" || typeof kap.title !== "string") {
              return null;
            }
            const isLocked = chapterLimit !== null && index >= chapterLimit;
            const ukTotal =
              kap.unterkapitel && Array.isArray(kap.unterkapitel) ? kap.unterkapitel.length : 0;
            const ukDone =
              kap.unterkapitel && Array.isArray(kap.unterkapitel)
                ? kap.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id))
                    .length
                : 0;
            const isCompleted =
              !isLocked &&
              (completedChapters.includes(kap.id) || (ukTotal > 0 && ukDone === ukTotal));
            const progressPct = ukTotal > 0 ? (ukDone / ukTotal) * 100 : 0;
            const isCurrent = !isLocked && kap.id === firstIncompleteChapter?.id;

            return (
              <button
                key={kap.id}
                onClick={() => !isLocked && onSelectChapter(kap)}
                className={`w-full text-left py-4 px-5 transition-colors flex items-center gap-4 ${
                  isLocked
                    ? "opacity-50 cursor-default"
                    : isCurrent
                      ? "bg-[var(--surface)] hover:bg-[var(--surface)] cursor-pointer"
                      : "hover:bg-[var(--surface)] cursor-pointer"
                }`}
              >
                {/* Chapter number / lock */}
                {isLocked ? (
                  <Lock className="w-5 h-5 text-[var(--muted)] shrink-0" />
                ) : isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <span
                    className={`w-6 h-6 shrink-0 flex items-center justify-center rounded-full text-xs font-semibold border-2 ${
                      isCurrent ? "border-current" : "border-[var(--border)] text-[var(--muted)]"
                    }`}
                    style={isCurrent ? { borderColor: accentColor, color: accentColor } : undefined}
                  >
                    {index + 1}
                  </span>
                )}

                {/* Chapter info */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-medium text-sm ${isLocked || isCompleted ? "text-[var(--muted)]" : "text-[var(--text-primary)]"}`}
                  >
                    {kap.title || "Untitled Chapter"}
                  </h3>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-[var(--muted)]">
                    <span>{ukTotal} UK</span>
                    {kap.estimatedTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {kap.estimatedTime}
                      </span>
                    )}
                    {!isLocked && ukDone > 0 && !isCompleted && (
                      <span style={{ color: accentColor }}>
                        {ukDone}/{ukTotal}
                      </span>
                    )}
                  </div>
                  {/* Inline progress bar */}
                  {!isLocked && ukTotal > 0 && progressPct > 0 && !isCompleted && (
                    <div className="w-full bg-[var(--border)] rounded-full h-1 mt-2 max-w-[200px]">
                      <div
                        className="h-1 rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(100, progressPct)}%`,
                          backgroundColor: accentColor,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Current badge or chevron */}
                {isLocked ? (
                  <span className="text-xs text-[var(--muted)] shrink-0">Premium</span>
                ) : isCurrent && !isCompleted ? (
                  <ChevronRight className="w-5 h-5 shrink-0" style={{ color: accentColor }} />
                ) : (
                  <ChevronRight className="w-4 h-4 text-[var(--muted)]/50 shrink-0" />
                )}
              </button>
            );
          })}
          {chapterLimit !== null && kapitel.length > chapterLimit && (
            <div className="p-4">
              <PaywallBanner feature={`Alle ${kapitel.length} Kapitel freischalten`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
