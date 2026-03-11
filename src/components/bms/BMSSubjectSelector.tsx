import { useMemo } from "react";
import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { MRSWidget } from "@/components/bms/MRSWidget";
import { subjects } from "@/data/bmsSubjects";
import { mergeChaptersWithSupabase, filterBMSKapitel, countUK } from "@/lib/mergeChapters";
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
  onNavigate: (path: string) => void;
};

export function BMSSubjectSelector({
  bmsKapitel,
  supabaseChapters,
  completedChapters,
  totalUK,
  completedUK,
  mrs,
  mrsLoading,
  mrsFallback,
  filterParam,
  getKapitelBySubject,
  onSelectSubject,
  onNavigate,
}: BMSSubjectSelectorProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8 px-6 py-8">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/dashboard" }, { label: "BMS" }]} />

      {filterParam === "due" && (
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300 text-sm">
          <Clock className="w-4 h-4 shrink-0" />
          <span className="font-medium">Zeigt fällige Kapitel</span>
          <span className="text-yellow-600 dark:text-yellow-400">
            — Wiederhole Kapitel, die zur Festigung bereit sind.
          </span>
        </div>
      )}

      <BlurFade delay={0} inView>
        <div>
          <h1 className="text-2xl font-semibold text-[var(--foreground)]">BMS</h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            {bmsKapitel.length} Kapitel · {totalUK} Unterkapitel
            {totalUK > 0 && (
              <span className="text-[var(--color-primary-500)] font-medium ml-2">
                {completedUK}/{totalUK} abgeschlossen
              </span>
            )}
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.05} inView>
        <MRSWidget mrs={mrs} loading={mrsLoading} fallback={mrsFallback} />
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject, idx) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            idx={idx}
            supabaseChapters={supabaseChapters}
            completedChapters={completedChapters}
            getKapitelBySubject={getKapitelBySubject}
            onSelect={onSelectSubject}
          />
        ))}
      </div>

      {bmsKapitel.length === 0 && (
        <BlurFade delay={0.2} inView>
          <Card className="border-[var(--border)] bg-[var(--card)]">
            <CardContent className="p-6 text-center">
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
                Noch keine Kapitel vorhanden
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">
                Erstelle deine ersten Kapitel im Editor.
              </p>
              <Button onClick={() => onNavigate("/admin/kapitel-editor")} className="gap-2">
                <BookOpen className="w-4 h-4" />
                Zum Kapitel-Editor
              </Button>
            </CardContent>
          </Card>
        </BlurFade>
      )}
    </div>
  );
}

// --- Subject Card (internal) ---

type SubjectCardProps = {
  subject: (typeof subjects)[number];
  idx: number;
  supabaseChapters: Kapitel[];
  completedChapters: string[];
  getKapitelBySubject: (subject: string) => Kapitel[];
  onSelect: (subjectId: string) => void;
};

function SubjectCard({
  subject,
  idx,
  supabaseChapters,
  completedChapters,
  getKapitelBySubject,
  onSelect,
}: SubjectCardProps) {
  const { sBmsKapitel, sTotal, sDone, progressPct } = useMemo(() => {
    const staticChapters = getKapitelBySubject(subject.id) || [];
    const dynamicChapters = supabaseChapters.filter((k) => k?.subject === subject.id);
    const merged = mergeChaptersWithSupabase(staticChapters, dynamicChapters);
    const bms = filterBMSKapitel(merged);
    const { total, completed } = countUK(bms, completedChapters);
    return {
      sBmsKapitel: bms,
      sTotal: total,
      sDone: completed,
      progressPct: total > 0 ? (completed / total) * 100 : 0,
    };
  }, [subject.id, supabaseChapters, completedChapters, getKapitelBySubject]);

  const accentVars: Record<string, string> = {
    biologie: "var(--accent-bio)",
    chemie: "var(--accent-chem)",
    physik: "var(--accent-phys)",
    mathematik: "var(--accent-math)",
  };
  const accentColor = accentVars[subject.id] ?? "var(--color-primary-500)";

  return (
    <BlurFade delay={0.1 + idx * 0.05} inView>
      <div
        className="group relative rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 cursor-pointer overflow-hidden transition-all duration-200 hover:border-[var(--foreground)]/20 hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
        style={{ borderLeftWidth: "3px", borderLeftColor: accentColor }}
        onClick={() => onSelect(subject.id)}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
            style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
          >
            <subject.icon className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <h2 className="text-base font-semibold text-[var(--foreground)]">{subject.label}</h2>
              <ChevronRight className="w-4 h-4 text-[var(--muted)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>

            <p className="text-xs text-[var(--muted)] mb-3 leading-relaxed">
              {subject.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-2.5">
              <span>{sBmsKapitel.length} Kapitel</span>
              {sTotal > 0 && (
                <>
                  <span>·</span>
                  <span style={{ color: accentColor }} className="font-medium">
                    {sDone}/{sTotal} UK
                  </span>
                </>
              )}
            </div>

            {sTotal > 0 && (
              <div className="w-full bg-[var(--border)] rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: `${progressPct}%`,
                    backgroundColor: accentColor,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
