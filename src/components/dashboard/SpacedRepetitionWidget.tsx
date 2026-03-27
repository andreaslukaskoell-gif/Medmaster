import { useMemo } from "react";
import { Link } from "react-router-dom";
import { RotateCcw, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useStore } from "@/store/useStore";
import { allBmsQuestions } from "@/data/bms/index";
import { getQuestionSubject } from "@/lib/bmsLookup";

const FACH_META: Record<string, { label: string; color: string }> = {
  biologie: { label: "Bio", color: "bg-emerald-500" },
  chemie: { label: "Chemie", color: "bg-red-500" },
  physik: { label: "Physik", color: "bg-blue-500" },
  mathematik: { label: "Mathe", color: "bg-violet-500" },
};

/**
 * Shows the number of questions and chapters due for spaced repetition review.
 * Visible on the Dashboard when there are due items.
 */
export function SpacedRepetitionWidget() {
  const getDueQuestions = useStore((s) => s.getDueQuestions);
  const getDueChapterIds = useStore((s) => s.getDueChapterIds);
  const spacedRepetition = useStore((s) => s.spacedRepetition);

  const dueQuestionIds = useMemo(() => getDueQuestions(), [getDueQuestions]);
  const dueChapterCount = useMemo(() => getDueChapterIds().length, [getDueChapterIds]);

  const totalTracked = Object.keys(spacedRepetition).length;
  const dueCount = dueQuestionIds.length;

  // Break down due questions by subject
  const byFach = useMemo(() => {
    const counts: Record<string, number> = {};
    const questionMap = new Map(allBmsQuestions.map((q) => [q.id, q]));
    dueQuestionIds.forEach((id) => {
      const q = questionMap.get(id);
      const subj = q ? getQuestionSubject(id) || "unbekannt" : "unbekannt";
      counts[subj] = (counts[subj] || 0) + 1;
    });
    return Object.entries(counts)
      .filter(([k]) => k in FACH_META)
      .sort(([, a], [, b]) => b - a);
  }, [dueQuestionIds]);

  // Nothing to show if no tracked items at all
  if (totalTracked === 0) return null;

  const totalDue = dueCount + dueChapterCount;

  return (
    <Card className={totalDue > 0 ? "border-2 border-amber-300 dark:border-amber-700" : ""}>
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <Brain className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[var(--text-primary)]">Spaced Repetition</p>
            <p className="text-xs text-[var(--muted)]">
              {totalTracked} Fragen im System · {totalDue > 0 ? `${totalDue} fällig` : "alles aktuell"}
            </p>
          </div>
        </div>

        {/* Progress bar: tracked vs. due */}
        {totalTracked > 0 && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-1">
              <span>{totalTracked - dueCount} beherrscht</span>
              <span>{dueCount} fällig</span>
            </div>
            <Progress
              value={totalTracked > 0 ? ((totalTracked - dueCount) / totalTracked) * 100 : 100}
              className="[&>div]:bg-emerald-500"
            />
          </div>
        )}

        {/* Due breakdown by Fach */}
        {dueCount > 0 && byFach.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-3">
            {byFach.map(([fach, count]) => {
              const meta = FACH_META[fach];
              return (
                <div key={fach} className="flex items-center gap-1.5 text-xs">
                  <div className={`w-2 h-2 rounded-full ${meta?.color || "bg-gray-400"}`} />
                  <span className="text-[var(--muted)]">{meta?.label || fach}: {count}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {dueCount > 0 && (
            <Link to="/schwachstellen">
              <Button size="sm" className="gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" />
                {dueCount} Fragen wiederholen
              </Button>
            </Link>
          )}
          {dueChapterCount > 0 && (
            <Link to="/bms?filter=due">
              <Button size="sm" variant="outline" className="gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {dueChapterCount} {dueChapterCount === 1 ? "Kapitel" : "Kapitel"} wiederholen
              </Button>
            </Link>
          )}
          {totalDue === 0 && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Alles aktuell — nächste Wiederholungen bald fällig.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
