import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  BookOpen,
  Brain,
  FileText,
  Heart,
  Zap,
  ArrowRight,
  ListChecks,
  RefreshCw,
  Check,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { daysUntilMedAT } from "@/lib/utils";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { getDailyGoalFromPlan } from "@/lib/dailyGoal";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { getPlanAdaptation } from "@/lib/planAdaptation";
import { usePageTitle } from "@/hooks/usePageTitle";

// Gesamtpensum BMS+KFF+TV+SEK (gleicher Wert wie Onboarding)
const TOTAL_CONTENT_HOURS = 400;

const phaseConfig = {
  einstieg: {
    label: "Einstieg",
    badge: "info" as const,
    desc: "Grundlagen aufbauen, Überblick gewinnen",
  },
  vertiefung: {
    label: "Vertiefung",
    badge: "warning" as const,
    desc: "Schwächen gezielt trainieren, Wissen festigen",
  },
  pruefung: {
    label: "Prüfungsphase",
    badge: "danger" as const,
    desc: "Simulationen, Zeitmanagement, letzte Wiederholung",
  },
};

// ============================================================
// Component
// ============================================================

export default function Lernplan() {
  usePageTitle("Lernplan");
  const {
    lernplanConfig,
    setLernplanConfig,
    getDueChapterIds,
    completedChapters,
    userProgress,
    goalAchievedByDate,
    quizResults,
    activityLog,
  } = useStore();
  const adaptive = useAdaptiveStore();
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);
  const [daysPerWeek, setDaysPerWeek] = useState(lernplanConfig?.daysPerWeek ?? 5);
  const [hoursPerDay, setHoursPerDay] = useState(
    lernplanConfig?.hoursPerDay ??
      (lernplanConfig ? lernplanConfig.hoursPerWeek / (lernplanConfig.daysPerWeek || 5) : 2)
  );
  const [updateFeedback, setUpdateFeedback] = useState(false);
  const todayPlanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!updateFeedback) return;
    const t = setTimeout(() => setUpdateFeedback(false), 3000);
    return () => clearTimeout(t);
  }, [updateFeedback]);

  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));
  const derivedHoursPerWeek = Math.round(daysPerWeek * hoursPerDay * 4) / 4;
  const recommendedHoursPerDay =
    weeksLeft > 0 && daysPerWeek > 0
      ? Math.ceil((TOTAL_CONTENT_HOURS / (weeksLeft * daysPerWeek)) * 4) / 4
      : null;
  const readiness = adaptive.getMedATReadiness();
  const weakTopics = adaptive.getWeakestTopics(5);
  const _strongTopics = adaptive.getStrongestTopics(3);
  void _strongTopics;
  const { profile } = adaptive;

  const fachReadiness = useMemo(
    () => ({
      biologie: adaptive.getFachReadiness("biologie"),
      chemie: adaptive.getFachReadiness("chemie"),
      physik: adaptive.getFachReadiness("physik"),
      mathematik: adaptive.getFachReadiness("mathematik"),
    }),
    [adaptive]
  );

  const handleGenerate = () => {
    const hours = Math.round(daysPerWeek * hoursPerDay * 4) / 4;
    setLernplanConfig({
      medatDate: new Date(Date.now() + days * 86400000).toISOString().split("T")[0],
      hoursPerWeek: hours,
      daysPerWeek,
      hoursPerDay,
      generatedAt: new Date().toISOString(),
    });
    setUpdateFeedback(true);
    requestAnimationFrame(() => {
      todayPlanRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const adaptation = useMemo(
    () =>
      lernplanConfig
        ? getPlanAdaptation({
            hoursPerWeek: lernplanConfig.hoursPerWeek,
            goalAchievedByDate: goalAchievedByDate ?? {},
            quizResults: quizResults ?? [],
            activityLog: activityLog ?? {},
          })
        : null,
    [lernplanConfig, goalAchievedByDate, quizResults, activityLog]
  );
  const effectiveHoursPerWeek =
    adaptation?.effectiveHoursPerWeek ?? lernplanConfig?.hoursPerWeek ?? 10;

  const plan = lernplanConfig
    ? generateAdaptivePlan({
        hoursPerWeek: effectiveHoursPerWeek,
        weeksLeft,
        readiness,
        fachReadiness,
        weakTopics,
        phase: profile.learningPhase,
      })
    : null;

  const concretePlan = useMemo(() => {
    if (!plan) return null;
    return buildConcreteDailyPlan(plan, {
      dueChapterIds: getDueChapterIds(),
      lastViewedChapterId: lastViewedKapitelId,
      lastViewedUnterkapitelId,
      completedChapterIds: completedChapters ?? [],
    });
  }, [
    plan,
    getDueChapterIds,
    lastViewedKapitelId,
    lastViewedUnterkapitelId,
    userProgress,
    completedChapters,
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Lernplan" }]} />

      {/* 1. Heutiger Lernplan – ganz oben */}
      <div ref={todayPlanRef}>
        <Card className="border-2 border-primary-200 dark:border-primary-800">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarDays className="w-4 h-4 text-primary-600" />
              Heutiger Lernplan
              {updateFeedback && (
                <span className="text-sm font-normal text-emerald-600 dark:text-emerald-400 animate-pulse">
                  · Aktualisiert
                </span>
              )}
            </CardTitle>
            <p className="text-sm text-muted font-normal">
              Konkrete Vorschläge für heute – machbar und nicht überfordernd.
            </p>
            {adaptation && adaptation.reason === "schnell_und_gut" && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                Dein Plan wurde leicht erhöht – du warst in den letzten Tagen schnell und gut
                unterwegs.
              </p>
            )}
            {adaptation && adaptation.reason === "überfordert" && (
              <p className="text-xs text-amber-600 dark:text-amber-400">
                Dein Plan wurde etwas entlastet – damit du nicht unter Druck gerätst.
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {plan ? (
              (() => {
                const today = new Date().toISOString().split("T")[0];
                const { quizResults: qr } = useStore.getState();
                const dailyState = getDailyGoalFromPlan(plan, qr, today);
                const { primaryProgressPct } = dailyState;

                return (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {concretePlan
                          ? `ca. ${concretePlan.totalMinutesEstimate} Min heute`
                          : "Lade Plan…"}
                      </span>
                      <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                        {primaryProgressPct}%
                      </span>
                    </div>
                    <Progress
                      value={primaryProgressPct}
                      className={primaryProgressPct >= 100 ? "[&>div]:bg-emerald-500" : ""}
                    />

                    {concretePlan && (
                      <div className="space-y-4 pt-2">
                        {concretePlan.bmsRead.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              Kapitel lernen
                            </h4>
                            <ul className="space-y-1.5">
                              {concretePlan.bmsRead.map((item) => {
                                const isDone =
                                  (item.subchapterId &&
                                    completedChapters?.includes(item.subchapterId)) ||
                                  completedChapters?.includes(item.chapterId);
                                return (
                                  <li key={`${item.chapterId}-${item.subchapterId ?? "ch"}`}>
                                    <Link
                                      to={item.path}
                                      onClick={() =>
                                        item.subchapterId &&
                                        setResumeToUnterkapitelId(item.subchapterId)
                                      }
                                      className={`flex items-center gap-2 p-2 rounded-lg border transition-colors text-left ${
                                        isDone
                                          ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                          : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                      }`}
                                    >
                                      {isDone ? (
                                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                      ) : (
                                        <span className="w-4 h-4 shrink-0 rounded-full border-2 border-muted" />
                                      )}
                                      <span
                                        className={`text-sm font-medium truncate flex-1 ${
                                          isDone
                                            ? "text-emerald-800 dark:text-emerald-200"
                                            : "text-gray-900 dark:text-gray-100"
                                        }`}
                                      >
                                        {item.title}
                                      </span>
                                      {!isDone && (
                                        <ArrowRight className="w-4 h-4 shrink-0 text-muted" />
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}

                        {concretePlan.bmsReview.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                              <RefreshCw className="w-3.5 h-3.5" />
                              Wiederholen (fällig)
                            </h4>
                            <ul className="space-y-1.5">
                              {concretePlan.bmsReview.map((item) => {
                                const isDone = item.subchapterId
                                  ? completedChapters?.includes(item.subchapterId)
                                  : completedChapters?.includes(item.chapterId);
                                return (
                                  <li key={item.subchapterId ?? item.chapterId}>
                                    <Link
                                      to={item.path}
                                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors text-left ${
                                        isDone
                                          ? "border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                          : "border border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/10 hover:bg-amber-100/50 dark:hover:bg-amber-900/20"
                                      }`}
                                    >
                                      {isDone ? (
                                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                      ) : (
                                        <span className="w-4 h-4 shrink-0 rounded-full border-2 border-amber-400 dark:border-amber-500" />
                                      )}
                                      <span
                                        className={`text-sm font-medium truncate flex-1 ${
                                          isDone
                                            ? "text-emerald-800 dark:text-emerald-200"
                                            : "text-gray-900 dark:text-gray-100"
                                        }`}
                                      >
                                        {item.title}
                                      </span>
                                      {!isDone && (
                                        <ArrowRight className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}

                        {concretePlan.bmsQuestions.length > 0 &&
                          (() => {
                            const bmsDone = dailyState.todayTasks.find(
                              (t) => t.module === "BMS"
                            )?.done;
                            return (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                                  <ListChecks className="w-3.5 h-3.5" />
                                  BMS-Fragen
                                </h4>
                                <Link
                                  to="/fragen-trainer"
                                  state={{
                                    dailyPlanBms: concretePlan.bmsQuestions.map((q) => ({
                                      fach: q.fach,
                                      count: q.count,
                                    })),
                                  }}
                                  className={`flex flex-wrap gap-2 p-3 rounded-lg border transition-colors ${
                                    bmsDone
                                      ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                >
                                  {bmsDone ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                                  ) : null}
                                  {concretePlan.bmsQuestions.map((q) => (
                                    <span
                                      key={q.fach}
                                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                                        bmsDone
                                          ? "bg-emerald-200/60 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200"
                                          : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200"
                                      }`}
                                    >
                                      {q.label}: {q.count}
                                    </span>
                                  ))}
                                  <span className="text-xs text-muted self-center ml-auto">
                                    {bmsDone ? "Erledigt" : "Fragen-Trainer →"}
                                  </span>
                                </Link>
                              </div>
                            );
                          })()}

                        {concretePlan.kffTasks.length > 0 &&
                          (() => {
                            const kffDone = dailyState.todayTasks.find(
                              (t) => t.module === "KFF"
                            )?.done;
                            return (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                                  <Brain className="w-3.5 h-3.5" />
                                  KFF
                                </h4>
                                <Link
                                  to="/kff"
                                  state={{
                                    dailyPlanKff: concretePlan.kffTasks.map((t) => ({
                                      domain: t.domain,
                                      count: t.count,
                                    })),
                                  }}
                                  className={`flex flex-wrap gap-2 p-3 rounded-lg border transition-colors ${
                                    kffDone
                                      ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                >
                                  {kffDone ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                                  ) : null}
                                  {concretePlan.kffTasks.map((t) => (
                                    <span
                                      key={t.domain}
                                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                                        kffDone
                                          ? "bg-amber-200/60 dark:bg-amber-800/40 text-amber-800 dark:text-amber-200"
                                          : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
                                      }`}
                                    >
                                      {t.label}: {t.count}
                                    </span>
                                  ))}
                                  <span className="text-xs text-muted self-center ml-auto">
                                    {kffDone ? "Erledigt" : "KFF →"}
                                  </span>
                                </Link>
                              </div>
                            );
                          })()}

                        {concretePlan.tvTexts > 0 &&
                          (() => {
                            const tvDone = dailyState.todayTasks.find(
                              (t) => t.module === "TV"
                            )?.done;
                            return (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                                  <FileText className="w-3.5 h-3.5" />
                                  TV
                                </h4>
                                <Link
                                  to="/tv"
                                  state={{ dailyPlanTvTexts: concretePlan.tvTexts }}
                                  className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                                    tvDone
                                      ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                >
                                  {tvDone ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                  ) : null}
                                  <span
                                    className={`text-sm font-medium flex-1 ${
                                      tvDone
                                        ? "text-emerald-800 dark:text-emerald-200"
                                        : "text-gray-900 dark:text-gray-100"
                                    }`}
                                  >
                                    {concretePlan.tvTexts} Text{concretePlan.tvTexts > 1 ? "e" : ""}{" "}
                                    bearbeiten
                                  </span>
                                  {!tvDone && (
                                    <ArrowRight className="w-4 h-4 shrink-0 text-muted ml-auto" />
                                  )}
                                  {tvDone && <span className="text-xs text-muted">Erledigt</span>}
                                </Link>
                              </div>
                            );
                          })()}

                        {concretePlan.sekTasks.length > 0 &&
                          (() => {
                            const sekDone = dailyState.todayTasks.find(
                              (t) => t.module === "SEK"
                            )?.done;
                            return (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2 flex items-center gap-1.5">
                                  <Heart className="w-3.5 h-3.5" />
                                  SEK
                                </h4>
                                <Link
                                  to="/sek"
                                  state={{ dailyPlanSek: concretePlan.sekTasks }}
                                  className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                                    sekDone
                                      ? "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                >
                                  {sekDone ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                  ) : null}
                                  <div className="flex flex-wrap gap-2 flex-1">
                                    {concretePlan.sekTasks.map((t) => (
                                      <span
                                        key={t.domain}
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                                          sekDone
                                            ? "bg-rose-200/60 dark:bg-rose-800/40 text-rose-800 dark:text-rose-200"
                                            : "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200"
                                        }`}
                                      >
                                        {t.label}: {t.count}{" "}
                                        {t.count === 1 ? "Beispiel" : "Beispiele"}
                                      </span>
                                    ))}
                                  </div>
                                  <span className="text-xs text-muted shrink-0">
                                    {sekDone ? "Erledigt" : "SEK →"}
                                  </span>
                                </Link>
                              </div>
                            );
                          })()}
                      </div>
                    )}
                  </>
                );
              })()
            ) : (
              <p className="text-sm text-muted">
                Noch kein Lernplan. Stelle unten deine Wochenstunden ein und generiere deinen Plan –
                dann siehst du hier deine Tagesaufgaben.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 2. Lernphasen (nur wenn Plan existiert) */}
      {plan && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Lernphasen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plan.phases.map((phase, i) => {
              const pc = phaseConfig[phase.phase as keyof typeof phaseConfig];
              const isActive = plan.activePhase === phase.phase;
              return (
                <Card key={i} className={isActive ? "ring-2 ring-primary-500" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={pc.badge}>{pc.label}</Badge>
                      <span className="text-xs text-muted">{phase.weeks} Wochen</span>
                      {isActive && <Badge variant="success">Aktuell</Badge>}
                    </div>
                    <p className="text-xs text-muted">{pc.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Lernplan-Einstellungen – zum Anpassen */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-700" />
            Lernplan anpassen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              An wie vielen Tagen pro Woche kannst du lernen?
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={3}
                max={7}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className="flex-1 accent-primary-700"
              />
              <span className="text-lg font-bold text-primary-700 w-16 text-right">
                {daysPerWeek} Tage
              </span>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              Wie viele Stunden pro Lerntag?
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0.5}
                max={8}
                step={0.25}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="flex-1 accent-primary-700"
              />
              <span className="text-lg font-bold text-primary-700 w-20 text-right">
                {hoursPerDay}h/Tag
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            = <strong className="text-foreground">{derivedHoursPerWeek} h/Woche</strong>
          </p>

          {recommendedHoursPerDay != null && days > 0 && (
            <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-3">
              <p className="text-sm font-medium text-primary-800 dark:text-primary-200">
                Unsere Empfehlung
              </p>
              <p className="text-sm text-muted mt-0.5">
                Damit du bis zum MedAT durchkommst, empfehlen wir mind.{" "}
                <strong className="text-foreground">{recommendedHoursPerDay} h</strong> pro Tag an{" "}
                <strong className="text-foreground">{daysPerWeek} Tagen</strong> pro Woche.
                {hoursPerDay < recommendedHoursPerDay && (
                  <span className="block mt-1 text-amber-700 dark:text-amber-400">
                    Dein aktueller Wert ({hoursPerDay} h/Tag) liegt darunter – du müsstest mehr Zeit
                    einplanen oder den Lernstart vorziehen.
                  </span>
                )}
              </p>
            </div>
          )}

          <Button
            onClick={handleGenerate}
            className={
              updateFeedback
                ? "bg-emerald-600 hover:bg-emerald-600 text-white border-emerald-500 transition-colors duration-200"
                : "active:scale-[0.98] transition-transform duration-100"
            }
          >
            {updateFeedback ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Aktualisiert!
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                {lernplanConfig ? "Lernplan aktualisieren" : "Lernplan generieren"}
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
