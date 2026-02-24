import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  BookOpen,
  Brain,
  FileText,
  Heart,
  CheckCircle2,
  Target,
  TrendingUp,
  Zap,
  AlertTriangle,
  ArrowRight,
  Flame,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { alleStichworteListe } from "@/data/stichwortliste";
import { daysUntilMedAT } from "@/lib/utils";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { getDailyGoalFromPlan } from "@/lib/dailyGoal";
import { usePageTitle } from "@/hooks/usePageTitle";

// ============================================================
// Constants
// ============================================================

const moduleConfig: Record<
  string,
  {
    icon: typeof BookOpen;
    label: string;
    bg: string;
    text: string;
    baseWeight: number;
    description: string;
  }
> = {
  BMS: {
    icon: BookOpen,
    label: "BMS",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    baseWeight: 0.4,
    description: "Basiskenntnistest Medizinische Studien",
  },
  KFF: {
    icon: Brain,
    label: "KFF",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-400",
    baseWeight: 0.25,
    description: "Kognitive Fähigkeiten & Fertigkeiten",
  },
  TV: {
    icon: FileText,
    label: "TV",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-700 dark:text-indigo-400",
    baseWeight: 0.2,
    description: "Textverständnis",
  },
  SEK: {
    icon: Heart,
    label: "SEK",
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-700 dark:text-rose-400",
    baseWeight: 0.15,
    description: "Sozial-emotionale Kompetenzen",
  },
};

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
  const { lernplanConfig, setLernplanConfig } = useStore();
  const adaptive = useAdaptiveStore();
  const [hoursPerWeek, setHoursPerWeek] = useState(lernplanConfig?.hoursPerWeek || 10);

  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));
  const readiness = adaptive.getMedATReadiness();
  const weakTopics = adaptive.getWeakestTopics(5);
  const strongTopics = adaptive.getStrongestTopics(3);
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

  const totalPracticed = Object.keys(profile.stichwortStats).length;

  const handleGenerate = () => {
    setLernplanConfig({
      medatDate: new Date(Date.now() + days * 86400000).toISOString().split("T")[0],
      hoursPerWeek,
      generatedAt: new Date().toISOString(),
    });
  };

  const plan = lernplanConfig
    ? generateAdaptivePlan({
        hoursPerWeek: lernplanConfig.hoursPerWeek,
        weeksLeft,
        readiness,
        fachReadiness,
        weakTopics,
        phase: profile.learningPhase,
      })
    : null;

  // Predicted readiness at exam (simple linear projection)
  const predictedReadiness = Math.min(100, readiness + Math.round(weeksLeft * 1.5));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Lernplan" }]} />

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Adaptiver Lernplan
          </h1>
          <p className="text-sm text-muted">
            Noch <span className="font-bold text-primary-700">{days} Tage</span> ({weeksLeft}{" "}
            Wochen) bis zum MedAT
          </p>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-400">
              {readiness}%
            </div>
            <p className="text-xs text-muted">Aktuelle Readiness</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {predictedReadiness}%
              </span>
            </div>
            <p className="text-xs text-muted">Prognose am Prüfungstag</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {profile.dailyChallengeStreak}
              </span>
            </div>
            <p className="text-xs text-muted">Tages-Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Badge variant={phaseConfig[profile.learningPhase]?.badge || "info"} className="mb-1">
              {phaseConfig[profile.learningPhase]?.label || profile.learningPhase}
            </Badge>
            <p className="text-xs text-muted">{phaseConfig[profile.learningPhase]?.desc}</p>
          </CardContent>
        </Card>
      </div>

      {/* Focus Topics */}
      {weakTopics.length > 0 && (
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Diese Woche Fokus auf:
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-wrap gap-2">
              {weakTopics.map((t) => (
                <div
                  key={t.stichwortId}
                  className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg"
                >
                  <span className="text-sm font-medium text-red-800 dark:text-red-300">
                    {t.thema}
                  </span>
                  <Badge variant="danger">{t.rate}%</Badge>
                </div>
              ))}
            </div>
            <Link
              to="/fortschritt"
              className="inline-flex items-center gap-1 text-xs text-red-600 dark:text-red-400 mt-3 hover:underline"
            >
              Fortschritt & Schwachstellen <ArrowRight className="w-3 h-3" />
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Config */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-700" />
            Lernplan konfigurieren
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              Wie viele Stunden pro Woche kannst du lernen?
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={3}
                max={40}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="flex-1 accent-primary-700"
              />
              <span className="text-lg font-bold text-primary-700 w-20 text-right">
                {hoursPerWeek}h/Woche
              </span>
            </div>
            <p className="text-xs text-muted mt-1">
              Ca. {Math.round((hoursPerWeek / 7) * 60)} Minuten pro Tag
            </p>
          </div>
          <Button onClick={handleGenerate}>
            <Zap className="w-4 h-4 mr-2" />
            {lernplanConfig ? "Lernplan aktualisieren" : "Adaptiven Lernplan generieren"}
          </Button>
        </CardContent>
      </Card>

      {plan && (
        <>
          {/* Phases */}
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

          {/* Weekly Plan */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Adaptiver Wochenplan
            </h2>
            <div className="space-y-4">
              {plan.weeklyPlan.map((item) => {
                const mc = moduleConfig[item.module];
                const Icon = mc.icon;
                const hours = Math.floor(item.minutesPerWeek / 60);
                const mins = item.minutesPerWeek % 60;
                return (
                  <Card key={item.module}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${mc.bg}`}
                          >
                            <Icon className={`w-5 h-5 ${mc.text}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                              {mc.label}
                            </h3>
                            <p className="text-xs text-muted">
                              {hours > 0 ? `${hours}h ` : ""}
                              {mins > 0 ? `${mins}min` : ""} / Woche ({item.weight}%)
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-primary-700">
                          {item.minutesPerWeek} min
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {item.tasks.map((task, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* BMS Sub-Breakdown */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="w-4 h-4 text-emerald-600" />
                BMS-Zeitverteilung (adaptiv)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted mb-2">
                Schwächere Fächer erhalten automatisch mehr Lernzeit.
              </p>
              {plan.bmsSubPlan.map((sub) => (
                <div key={sub.fach} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-24 text-gray-700 dark:text-gray-300">
                    {sub.label}
                  </span>
                  <div className="flex-1">
                    <Progress value={sub.readiness} />
                  </div>
                  <span className="text-xs text-muted w-12 text-right">{sub.readiness}%</span>
                  <span className="text-xs font-medium text-primary-700 w-16 text-right">
                    {sub.minutes} min
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Time Distribution */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Gesamtverteilung
              </h3>
              <div className="space-y-2">
                {plan.weeklyPlan.map((item) => {
                  const mc = moduleConfig[item.module];
                  return (
                    <div key={item.module} className="flex items-center gap-3">
                      <span className={`text-sm font-medium w-12 ${mc.text}`}>{mc.label}</span>
                      <div className="flex-1">
                        <Progress
                          value={item.minutesPerWeek}
                          max={Math.max(...plan.weeklyPlan.map((p) => p.minutesPerWeek))}
                        />
                      </div>
                      <span className="text-xs text-muted w-12 text-right">{item.weight}%</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Tagesansicht */}
          <Card className="border-2 border-primary-200 dark:border-primary-800">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarDays className="w-4 h-4 text-primary-600" />
                Heutiger Lernplan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {(() => {
                const today = new Date().toISOString().split("T")[0];
                const { quizResults: qr } = useStore.getState();
                const dailyState = getDailyGoalFromPlan(plan, qr, today);
                const { dailyMinutes, primaryProgressPct, todayTasks } = dailyState;

                return (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        ca. {dailyMinutes} Minuten heute geplant
                      </span>
                      <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                        {primaryProgressPct}%
                      </span>
                    </div>
                    <Progress
                      value={primaryProgressPct}
                      className={primaryProgressPct >= 100 ? "[&>div]:bg-emerald-500" : ""}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {todayTasks.map((t) => {
                        const mc = moduleConfig[t.module];
                        const link = `/${t.module.toLowerCase()}`;
                        return (
                          <Link key={t.module} to={link}>
                            <div
                              className={`p-3 rounded-lg border ${t.done ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20" : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"} transition-colors cursor-pointer`}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <mc.icon
                                  className={`w-4 h-4 ${t.done ? "text-emerald-600" : mc.text}`}
                                />
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                  {mc.label}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-muted">{t.targetMinutes} min</span>
                                {t.done ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <span className="text-muted">
                                    {t.doneMinutes}/{t.targetMinutes}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </CardContent>
          </Card>

          {/* Stichwort Coverage */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Stichwort-Fortschritt
                </h3>
                <span className="text-sm text-muted">
                  {totalPracticed} / {alleStichworteListe.length} geübt
                </span>
              </div>
              <Progress
                value={(totalPracticed / alleStichworteListe.length) * 100}
                className="mb-2"
              />
              <p className="text-xs text-muted">
                {profile.totalQuestionsAnswered} Fragen beantwortet insgesamt (
                {profile.totalCorrect > 0
                  ? Math.round((profile.totalCorrect / profile.totalQuestionsAnswered) * 100)
                  : 0}
                % richtig)
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
