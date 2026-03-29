import { useMemo } from "react";
import { ChevronRight, Clock, BookOpen, Timer } from "lucide-react";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { subjects } from "@/data/bmsSubjects";
import { mergeChaptersWithSupabase, filterBMSKapitel, countUK } from "@/lib/mergeChapters";
import { getQuestionsBySubject } from "@/data/bms/index";
import type { MRSData } from "@/lib/supabaseBMSFragen";
import type { MRSFallback } from "@/components/bms/MRSWidget";
import { Tooltip } from "@/components/ui/Tooltip";
import { useViewportMode } from "@/hooks/useViewportMode";

type BMSSubjectSelectorProps = {
  bmsKapitel: Kapitel[];
  supabaseChapters: Kapitel[];
  completedChapters: string[];
  totalUK: number;
  completedUK: number;
  mrs: MRSData | null;
  mrsLoading: boolean;
  mrsFallback: MRSFallback | null;
  filterParam: string | null;
  getKapitelBySubject: (subject: string) => Kapitel[];
  onSelectSubject: (subjectId: string) => void;
  onNavigate?: (path: string) => void;
};

export function BMSSubjectSelector({
  supabaseChapters,
  completedChapters,
  totalUK,
  completedUK,
  filterParam,
  getKapitelBySubject,
  onSelectSubject,
}: BMSSubjectSelectorProps) {
  const { isMobile } = useViewportMode();
  return (
    <div className={`max-w-5xl mx-auto ${isMobile ? "space-y-8 py-2" : "space-y-14 py-4"}`}>
      {filterParam === "due" && (
        <div className="card-glass flex items-center gap-2 px-5 py-3 text-sm text-[var(--warning)]">
          <Clock className="w-4 h-4 shrink-0" />
          <span className="font-medium">Fällige Kapitel zur Wiederholung</span>
        </div>
      )}

      {/* Hero header */}
      <div className="hero-gradient text-center py-8">
        <h1
          className={`${isMobile ? "text-xl" : "text-[3rem] leading-tight"} font-bold text-white heading-glow relative z-10`}
        >
          Biomedizinische Grundlagen
        </h1>
        <p className={`${isMobile ? "text-sm" : "text-lg"} text-white/80 mt-2 relative z-10`}>
          {totalUK} Unterkapitel · 4 Fachgebiete
        </p>
        {totalUK > 0 && (
          <div className="mt-4 max-w-sm mx-auto relative z-10">
            <div className="flex items-center justify-between text-xs text-white/60 mb-1.5">
              <span>
                {completedUK} von {totalUK} abgeschlossen
              </span>
              <span className="font-medium text-white/90">
                {Math.round((completedUK / totalUK) * 100)}%
              </span>
            </div>
            <div className="progress-premium">
              <div
                className="progress-fill"
                style={{ width: `${Math.round((completedUK / totalUK) * 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className={`grid ${isMobile ? "grid-cols-1 gap-3" : "grid-cols-2 gap-4"}`}>
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            supabaseChapters={supabaseChapters}
            completedChapters={completedChapters}
            getKapitelBySubject={getKapitelBySubject}
            onSelect={onSelectSubject}
          />
        ))}
      </div>
    </div>
  );
}

// --- Subject Card (internal) ---

/** Parse "120 min" → 120, "90 min" → 90, etc. */
function parseMinutes(est: string): number {
  const match = est.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/** Format total minutes as "X Std Y Min" or just "Y Min". */
function formatTime(totalMin: number): string {
  if (totalMin <= 0) return "";
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (hours === 0) return `${mins} Min`;
  if (mins === 0) return `${hours} Std`;
  return `${hours} Std ${mins} Min`;
}

type SubjectCardProps = {
  subject: (typeof subjects)[number];
  supabaseChapters: Kapitel[];
  completedChapters: string[];
  getKapitelBySubject: (subject: string) => Kapitel[];
  onSelect: (subjectId: string) => void;
};

function SubjectCard({
  subject,
  supabaseChapters,
  completedChapters,
  getKapitelBySubject,
  onSelect,
}: SubjectCardProps) {
  const { isMobile } = useViewportMode();
  const { sBmsKapitel, sTotal, sDone, progressPct, totalMinutes, questionCount } = useMemo(() => {
    const staticChapters = getKapitelBySubject(subject.id) || [];
    const dynamicChapters = supabaseChapters.filter((k) => k?.subject === subject.id);
    const merged = mergeChaptersWithSupabase(staticChapters, dynamicChapters);
    const bms = filterBMSKapitel(merged);
    const { total, completed } = countUK(bms, completedChapters);

    const minutes = bms.reduce((sum, k) => sum + parseMinutes(k.estimatedTime ?? ""), 0);
    const qCount = getQuestionsBySubject(subject.id).length;

    return {
      sBmsKapitel: bms,
      sTotal: total,
      sDone: completed,
      progressPct: total > 0 ? (completed / total) * 100 : 0,
      totalMinutes: minutes,
      questionCount: qCount,
    };
  }, [subject.id, supabaseChapters, completedChapters, getKapitelBySubject]);

  const accentVars: Record<string, string> = {
    biologie: "var(--accent-bio)",
    chemie: "var(--accent-chem)",
    physik: "var(--accent-phys)",
    mathematik: "var(--accent-math)",
  };
  const accentColor = accentVars[subject.id] ?? "var(--accent)";

  const hasProgress = sDone > 0;
  const ctaLabel = hasProgress ? "Fortsetzen" : "Starten";

  return (
    <div
      className={`card-subject group cursor-pointer ${isMobile ? "p-4 pb-3" : "p-8 pb-6"}`}
      style={{ "--subject-accent": accentColor } as React.CSSProperties}
      onClick={() => onSelect(subject.id)}
    >
      {/* Icon + Title row */}
      <div className={`flex items-start ${isMobile ? "gap-3 mb-3" : "gap-5 mb-5"}`}>
        <div
          className={`${isMobile ? "w-12 h-12 rounded-xl" : "w-16 h-16 rounded-2xl"} flex items-center justify-center shrink-0 shadow-sm`}
          style={{
            background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}08)`,
            color: accentColor,
          }}
        >
          <subject.icon className={isMobile ? "w-6 h-6" : "w-8 h-8"} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h2
              className={`${isMobile ? "text-lg" : "text-2xl"} font-semibold text-[var(--foreground)]`}
            >
              {subject.label}
            </h2>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-200 shrink-0 group-hover:shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}10)`,
                color: accentColor,
              }}
            >
              {ctaLabel}
              <ChevronRight className="w-3.5 h-3.5 inline-block ml-0.5 -mt-px" />
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
            {subject.description}
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 text-xs text-[var(--muted)] mb-4">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          {sBmsKapitel.length} Kapitel
        </span>
        {questionCount > 0 && <span>{questionCount.toLocaleString("de-DE")} Fragen</span>}
        {totalMinutes > 0 && (
          <span className="flex items-center gap-1.5">
            <Timer className="w-3.5 h-3.5" />
            {formatTime(totalMinutes)}
          </span>
        )}
      </div>

      {/* Progress bar — premium style */}
      {sTotal > 0 && (
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-[var(--muted)]">
              {sDone} von {sTotal} UK
            </span>
            <span className="font-semibold" style={{ color: accentColor }}>
              {Math.round(progressPct)}%
            </span>
          </div>
          <Tooltip content={`${sDone} von ${sTotal} Unterkapitel abgeschlossen`} position="top">
            <div
              className="progress-premium"
              style={{ "--subject-accent": accentColor } as React.CSSProperties}
            >
              <div
                className="progress-fill"
                style={{ width: `${Math.max(progressPct, progressPct > 0 ? 2 : 0)}%` }}
              />
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
