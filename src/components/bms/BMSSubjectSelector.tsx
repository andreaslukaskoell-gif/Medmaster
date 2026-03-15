import { useMemo } from "react";
import { ChevronRight, Clock, BookOpen, Timer } from "lucide-react";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { subjects } from "@/data/bmsSubjects";
import { mergeChaptersWithSupabase, filterBMSKapitel, countUK } from "@/lib/mergeChapters";
import { getQuestionsBySubject } from "@/data/bms/index";
import type { MRSData } from "@/lib/supabaseBMSFragen";
import type { MRSFallback } from "@/components/bms/MRSWidget";

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
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-4">
      {filterParam === "due" && (
        <div className="card-glass flex items-center gap-2 px-5 py-3 text-sm text-[var(--warning)]">
          <Clock className="w-4 h-4 shrink-0" />
          <span className="font-medium">Fällige Kapitel zur Wiederholung</span>
        </div>
      )}

      {/* Hero header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--foreground)] tracking-tight">
          Biomedizinische Grundlagen
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mt-3">
          {totalUK} Unterkapitel · 4 Fachgebiete
        </p>
        {totalUK > 0 && (
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
              <span>
                {completedUK} von {totalUK} abgeschlossen
              </span>
              <span className="font-semibold text-[var(--accent)]">
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

      <div className="grid grid-cols-2 gap-6">
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
      className="card-subject group cursor-pointer p-8 pb-6"
      style={{ "--subject-accent": accentColor } as React.CSSProperties}
      onClick={() => onSelect(subject.id)}
    >
      {/* Icon + Title row */}
      <div className="flex items-start gap-5 mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}08)`,
            color: accentColor,
          }}
        >
          <subject.icon className="w-7 h-7" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{subject.label}</h2>
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
          <div
            className="progress-premium"
            style={{ "--subject-accent": accentColor } as React.CSSProperties}
          >
            <div
              className="progress-fill"
              style={{ width: `${Math.max(progressPct, progressPct > 0 ? 2 : 0)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
