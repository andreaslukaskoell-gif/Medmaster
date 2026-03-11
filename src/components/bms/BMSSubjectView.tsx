import { BookOpen, Play, CheckCircle2, Clock, ChevronRight, ArrowLeft, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { FachRoadmap } from "@/components/chapter/FachRoadmap";
import { getStichworteByKapitel } from "@/data/stichwortliste";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { countUK } from "@/lib/mergeChapters";
import type { SubjectData } from "@/data/bmsSubjects";

type BMSSubjectViewProps = {
  subjectData: SubjectData;
  roadmapChapters: Kapitel[];
  completedChapters: string[];
  stichwortStats: Record<string, { streak?: number }>;
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
      <div className="max-w-5xl mx-auto p-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "BMS", href: "/bms" },
            { label: subjectData.label },
          ]}
        />
        <div className="flex items-center gap-4 flex-wrap mt-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Fächern
          </Button>
        </div>
        <div className="mt-6 text-center p-8">
          <p className="text-[var(--muted)] mb-4">
            In diesem Fach sind noch keine Kapitel vorhanden.
          </p>
          <Button variant="outline" className="gap-2" onClick={onBack}>
            <BookOpen className="w-4 h-4" />
            Anderes Fach wählen
          </Button>
        </div>
      </div>
    );
  }

  const { total: subjectUK, completed: subjectCompletedUK } = countUK(kapitel, completedChapters);

  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "BMS", href: "/bms" },
          { label: subjectData.label },
        ]}
      />

      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zu Fächern
        </Button>
        <Button size="sm" onClick={onStartQuiz} className="gap-2">
          <Play className="w-4 h-4" />
          Quiz starten
        </Button>
      </div>

      <div>
        <h1 className="text-xl font-semibold text-[var(--foreground)] flex items-center gap-3">
          <subjectData.icon className="w-6 h-6 text-[var(--accent)]" />
          {subjectData.label}
        </h1>
        <p className="text-sm text-[var(--muted)] mt-1">
          {kapitel.length} Kapitel · {subjectUK} Unterkapitel
          {subjectUK > 0 && (
            <span className="text-[var(--accent)] font-medium ml-2">
              {subjectCompletedUK}/{subjectUK} abgeschlossen
            </span>
          )}
        </p>
      </div>

      <UebungsbeschreibungCard id="bms" collapsible defaultCollapsed />

      {subjectUK > 0 && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-[var(--muted)]">
            <span>Fortschritt</span>
            <span>
              {subjectCompletedUK}/{subjectUK} Unterkapitel
            </span>
          </div>
          <div className="w-full bg-[var(--border)] rounded-full h-1.5">
            <div
              className="bg-[var(--accent)] h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(subjectCompletedUK / subjectUK) * 100}%` }}
            />
          </div>
        </div>
      )}

      {roadmapChapters.length > 0 && (
        <FachRoadmap
          chapters={roadmapChapters}
          currentChapterId={undefined}
          onSelectChapter={(chapterId) => {
            const chapter = kapitel.find((c) => c.id === chapterId);
            if (chapter) onSelectChapter(chapter);
          }}
        />
      )}

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--accent)]" />
          Kapitel
        </h2>

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
          const kapMatch = kap.id.match(/kap(\d+)/i);
          const kapitelNr = kapMatch ? parseInt(kapMatch[1], 10) : 0;
          const stichworte = getStichworteByKapitel(kap.subject, kapitelNr);
          const topicTotal = stichworte.length;
          const topicLearned =
            topicTotal > 0
              ? stichworte.filter((s) => (stichwortStats[s.id]?.streak ?? 0) > 0).length
              : 0;
          const hasMastery =
            topicTotal > 0 && stichworte.some((s) => (stichwortStats[s.id]?.streak ?? 0) >= 3);
          const progressPct =
            topicTotal > 0
              ? (topicLearned / topicTotal) * 100
              : ukTotal > 0
                ? (ukDone / ukTotal) * 100
                : 0;

          return (
            <Card
              key={kap.id}
              className={`hover:shadow-md transition-all cursor-pointer border-l-[3px] border-l-[var(--accent)] ${hasMastery ? "ring-1 ring-amber-400/60 dark:ring-amber-500/50 shadow-amber-500/10" : ""}`}
              onClick={() => onSelectChapter(kap)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl shrink-0">{kap.icon || "📚"}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium text-[var(--text-primary)]">
                        {kap.title || "Untitled Chapter"}
                      </h3>
                      {isCompleted && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      )}
                      {hasMastery && (
                        <span
                          className="inline-flex items-center text-amber-600 dark:text-amber-400"
                          title="Mastery (Streak >= 3)"
                        >
                          <Award className="w-4 h-4 shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-[var(--muted)]">
                      <span>{ukTotal} Unterkapitel</span>
                      {kap.estimatedTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {kap.estimatedTime}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-[var(--border)] rounded-full h-1.5 mt-2">
                      <div
                        className="bg-[var(--accent)] h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, progressPct)}%` }}
                      />
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--muted)] shrink-0" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
