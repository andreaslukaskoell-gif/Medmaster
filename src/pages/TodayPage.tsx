/**
 * Today – priorisierte Tagesaufgaben aus der Today Engine.
 * Zeigt bei aktivem Lernplan auch die konkreten Tagesvorschläge (Kapitel, Fragen, KFF, TV, SEK).
 */

import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Target,
  RefreshCw,
  ListChecks,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTodayEngine } from "@/hooks/useTodayEngine";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";
import type { TodayEngineTask } from "@/lib/learning/types";
import { daysUntilMedAT } from "@/lib/utils";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";

const REASON_LABEL: Record<string, string> = {
  due: "Fällig",
  weak: "Schwachstelle",
  plan: "Lernplan",
  continue: "Weiterlernen",
  daily: "BMS des Tages",
};

const TYPE_LABEL: Record<string, string> = {
  chapter: "Kapitel",
  subchapter: "Unterkapitel",
  question: "Frage",
  merksatz: "Merksatz",
  keyword: "Stichwort",
};

export default function TodayPage() {
  usePageTitle("Heute lernen");
  const navigate = useNavigate();
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);
  const { lernplanConfig, getDueChapterIds, userProgress } = useStore();
  const adaptive = useAdaptiveStore();
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const { dueCount, weaknessCount, newCount, tasks } = useTodayEngine();

  const concretePlan = useMemo(() => {
    if (!lernplanConfig?.hoursPerWeek) return null;
    const days = daysUntilMedAT();
    const weeksLeft = Math.max(1, Math.floor(days / 7));
    const plan = generateAdaptivePlan({
      hoursPerWeek: lernplanConfig.hoursPerWeek,
      weeksLeft,
      readiness: adaptive.getMedATReadiness(),
      fachReadiness: {
        biologie: adaptive.getFachReadiness("biologie"),
        chemie: adaptive.getFachReadiness("chemie"),
        physik: adaptive.getFachReadiness("physik"),
        mathematik: adaptive.getFachReadiness("mathematik"),
      },
      weakTopics: adaptive.getWeakestTopics(5),
      phase: adaptive.profile.learningPhase,
    });
    return buildConcreteDailyPlan(plan, {
      dueChapterIds: getDueChapterIds(),
      lastViewedChapterId: lastViewedKapitelId,
      lastViewedUnterkapitelId,
    });
  }, [
    lernplanConfig,
    getDueChapterIds,
    lastViewedKapitelId,
    lastViewedUnterkapitelId,
    userProgress,
    adaptive,
  ]);

  const startFirstTask = () => {
    const first = tasks[0];
    if (!first) {
      navigate("/bms");
      return;
    }
    if (first.refs?.path) {
      if (first.refs.subchapterId) {
        setResumeToUnterkapitelId(first.refs.subchapterId);
      }
      navigate(first.refs.path);
      return;
    }
    if (first.objectType === "question") {
      navigate("/schwachstellen");
      return;
    }
    navigate("/bms");
  };

  const totalRecommended = dueCount + weaknessCount + newCount;
  const hasTasks = tasks.length > 0;

  return (
    <div className="min-h-screen bg-[var(--dashboard-bg)]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </Link>

        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Heute lernen</h1>
        <p className="text-[var(--text-secondary)] mb-6">
          Priorisierte Aufgaben aus Wiederholung, Schwächen und deinem Fortschritt.
        </p>

        {/* Konkreter Lernplan für heute (wenn aktiv) */}
        {concretePlan && (
          <Link to="/lernplan" className="block mb-6">
            <Card className="border-2 border-primary-200 dark:border-primary-800 hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary-500" />
                    Lernplan für heute
                  </h3>
                  <span className="text-xs text-[var(--muted)]">
                    {concretePlan.totalMinutesEstimate} Min
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  {concretePlan.bmsRead.length > 0 && "Kapitel lesen · "}
                  {concretePlan.bmsReview.length > 0 && "Wiederholen · "}
                  {concretePlan.bmsQuestions.length > 0 && "BMS-Fragen · "}
                  {concretePlan.kffTasks.length > 0 && "KFF · "}
                  {concretePlan.tvTexts > 0 && "TV · "}
                  {concretePlan.sekMinutes > 0 && "SEK"}
                  {!concretePlan.bmsRead.length &&
                    !concretePlan.bmsReview.length &&
                    !concretePlan.bmsQuestions.length &&
                    !concretePlan.kffTasks.length &&
                    concretePlan.tvTexts === 0 &&
                    concretePlan.sekMinutes === 0 &&
                    "Alles erledigt?"}
                </p>
                <span className="text-xs text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1">
                  Details im Lernplan
                  <ArrowRight className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {dueCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium">
              <RefreshCw className="w-4 h-4" />
              {dueCount} fällig
            </span>
          )}
          {weaknessCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm font-medium">
              <Target className="w-4 h-4" />
              {weaknessCount} Schwachstellen
            </span>
          )}
          {newCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              {newCount} zum Weiterlernen
            </span>
          )}
          {totalRecommended === 0 && (
            <span className="text-sm text-[var(--muted)]">
              Keine priorisierten Aufgaben. Starte mit BMS oder Lernplan.
            </span>
          )}
        </div>

        {/* CTA */}
        <Card className="mb-6 border-l-4 border-l-[var(--accent)]">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-semibold text-[var(--text-primary)]">
                  {hasTasks
                    ? `${tasks.length} Aufgabe${tasks.length === 1 ? "" : "n"} für heute`
                    : "Bereit zum Lernen?"}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                  {hasTasks
                    ? "Starte mit der wichtigsten Aufgabe."
                    : "Öffne BMS oder Schwachstellen-Trainer."}
                </p>
              </div>
              <Button size="lg" className="gap-2 shrink-0" onClick={startFirstTask}>
                <ListChecks className="w-5 h-5" />
                Jetzt starten
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Task list */}
        {tasks.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-2">
              Alle Aufgaben (nach Priorität)
            </h3>
            <ul className="space-y-1">
              {tasks.slice(0, 30).map((t: TodayEngineTask, i: number) => (
                <li key={`${t.objectId}-${i}`}>
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/50 transition-colors flex items-center justify-between gap-2"
                    onClick={() => {
                      if (t.refs?.path) {
                        if (t.refs.subchapterId) setResumeToUnterkapitelId(t.refs.subchapterId);
                        navigate(t.refs.path);
                      } else if (t.objectType === "question") {
                        navigate("/schwachstellen");
                      } else {
                        navigate("/bms");
                      }
                    }}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-medium text-[var(--muted)] shrink-0 w-16">
                        {REASON_LABEL[t.reason] ?? t.reason}
                      </span>
                      <span className="text-xs text-[var(--muted)] shrink-0">
                        {TYPE_LABEL[t.objectType] ?? t.objectType}
                      </span>
                      <span className="truncate text-[var(--text-primary)]">
                        {t.refs?.path
                          ? t.refs.path.replace("/bms/", "").replace(/\//g, " · ")
                          : t.objectId}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
