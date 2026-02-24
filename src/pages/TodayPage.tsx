/**
 * Today – priorisierte Tagesaufgaben aus der Today Engine.
 * Zeigt Badges (fällig / Schwächen / neu) und Liste; „Jetzt starten“ öffnet erste Aufgabe.
 */

import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, RefreshCw, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTodayEngine } from "@/hooks/useTodayEngine";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { usePageTitle } from "@/hooks/usePageTitle";
import type { TodayEngineTask } from "@/lib/learning/types";

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
  const { dueCount, weaknessCount, newCount, tasks } = useTodayEngine();

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
