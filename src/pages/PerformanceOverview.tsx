import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Brain,
  Star,
  Flame,
  Target,
  Trophy,
  Swords,
  Award,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { MemoryHeatmapOrbits } from "@/components/dashboard/MemoryHeatmapOrbits";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useIsMounted } from "@/hooks/useIsMounted";
import { XpProgressRingSkeleton } from "@/components/skeletons/AppSkeletons";
import { BADGE_DEFINITIONS, getBadgeProgress } from "@/data/badges";
import { alleKapitel } from "@/data/bmsKapitel";
import { BadgeIcon } from "@/components/badges/BadgeIcon";
import { cn } from "@/lib/utils";
import { usePageTitle } from "@/hooks/usePageTitle";

function ProgressRing({
  value,
  size = 48,
  stroke = 4,
}: {
  value: number;
  size?: number;
  stroke?: number;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        className="text-gray-200 dark:text-gray-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-primary-600 transition-all duration-500"
      />
    </svg>
  );
}

export default function PerformanceOverview() {
  usePageTitle("Performance");
  const mounted = useIsMounted();
  const { quizResults, completedChapters, streak, unlockedFachMilestones, goalAchievedByDate } =
    useStore();
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const { maxConsecutiveCorrectEver, smartRecoveryCount, firstActivityTimeByDay } = useStore();

  const totalQuizzes = quizResults.length;
  const badgeState = useMemo(() => {
    const totalQuestions = (quizResults ?? []).reduce((s, r) => s + r.total, 0);
    const goalAchievedCount = Object.values(goalAchievedByDate ?? {}).filter(Boolean).length;
    const quizResultsByType = (quizResults ?? []).reduce(
      (acc, r) => {
        if (r.type === "bms" || r.type === "simulation") acc.bms += 1;
        else if (r.type === "kff") acc.kff += 1;
        else if (r.type === "tv") acc.tv += 1;
        else if (r.type === "sek") acc.sek += 1;
        return acc;
      },
      { bms: 0, kff: 0, tv: 0, sek: 0 }
    );
    const ad = useAdaptiveStore.getState();
    return {
      completedChapters,
      maxConsecutiveCorrectEver,
      smartRecoveryCount,
      firstActivityTimeByDay,
      streak: streak ?? 0,
      totalQuestions,
      goalAchievedCount,
      dailyChallengeStreak: ad?.profile?.dailyChallengeStreak ?? 0,
      quizResultsByType,
    };
  }, [
    quizResults,
    completedChapters,
    maxConsecutiveCorrectEver,
    smartRecoveryCount,
    firstActivityTimeByDay,
    streak,
    goalAchievedByDate,
  ]);

  const store = useAdaptiveStore.getState();
  const readiness = store.getMedATReadiness();
  const weakTopics = store.getWeakestTopics(3);
  const strongTopics = store.getStrongestTopics(3);
  const { totalQuestionsAnswered, totalCorrect, dailyChallengeStreak } = store.profile;

  const fachColorMap: Record<string, string> = useMemo(
    () => ({
      biologie: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
      chemie: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      physik: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      mathematik: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    }),
    []
  );

  const faecher = useMemo(
    () => [
      { id: "biologie", label: "Biologie", color: "bg-emerald-500" },
      { id: "chemie", label: "Chemie", color: "bg-red-500" },
      { id: "physik", label: "Physik", color: "bg-blue-500" },
      { id: "mathematik", label: "Mathematik", color: "bg-violet-500" },
    ],
    []
  );

  const milestones = useMemo(
    () => [
      { id: "first-quiz", label: "Erstes Quiz", icon: Star, check: totalQuizzes >= 1 },
      {
        id: "100-fragen",
        label: "100 Fragen",
        icon: BookOpen,
        check: totalQuestionsAnswered >= 100,
      },
      { id: "500-fragen", label: "500 Fragen", icon: Brain, check: totalQuestionsAnswered >= 500 },
      {
        id: "1000-fragen",
        label: "1.000 Fragen",
        icon: Trophy,
        check: totalQuestionsAnswered >= 1000,
      },
      {
        id: "streak-7",
        label: "7-Tage-Streak",
        icon: Flame,
        check: streak >= 7 || dailyChallengeStreak >= 7,
      },
      { id: "readiness-50", label: "50% Bereitschaft", icon: Target, check: readiness >= 50 },
      { id: "readiness-80", label: "80% Bereitschaft", icon: Award, check: readiness >= 80 },
      {
        id: "duell-held",
        label: "Duell-Held",
        icon: Swords,
        check: quizResults.filter((r) => r.subject === "Duell").length >= 10,
      },
    ],
    [totalQuizzes, totalQuestionsAnswered, streak, dailyChallengeStreak, readiness, quizResults]
  );
  const unlockedCount = milestones.filter((m) => m.check).length;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <BreadcrumbNav
        items={[{ label: "Dashboard", href: "/" }, { label: "Erfolge & Wissensstand" }]}
      />

      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
          Erfolge & Wissensstand
        </h1>
      </div>

      {/* Wissenszustand (Heatmap) */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Wissenszustand pro Fach
        </h2>
        <MemoryHeatmapOrbits />
      </section>

      {/* Prüfungs-Readiness */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Prüfungs-Readiness
        </h2>
        {!mounted ? (
          <Card className="border-0 shadow-none bg-transparent dark:bg-transparent">
            <CardContent className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <XpProgressRingSkeleton size={72} stroke={6} />
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="skeleton-shimmer h-4 w-40 rounded animate-pulse" />
                  <div className="skeleton-shimmer h-3 w-32 rounded animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex items-center justify-center">
                    <ProgressRing value={readiness} size={72} stroke={6} />
                    <span className="absolute text-lg font-bold text-primary-700 dark:text-primary-400">
                      {readiness}%
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900 dark:text-gray-100">
                      MedAT-Bereitschaft
                    </p>
                    <p className="text-xs text-muted">
                      {totalQuestionsAnswered} Fragen, {totalCorrect} richtig
                    </p>
                    {dailyChallengeStreak > 0 && (
                      <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 mt-1">
                        <Flame className="w-3 h-3" />
                        <span>{dailyChallengeStreak} Tage Streak</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2.5">
                  {faecher.map((f) => {
                    const fachReady = store.getFachReadiness(f.id);
                    return (
                      <div key={f.id}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {f.label}
                          </span>
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                            {Math.round(fachReady)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={cn(f.color, "h-2 rounded-full transition-all duration-500")}
                            style={{ width: `${Math.min(100, fachReady)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {weakTopics.length > 0 && (
                <Card className="border-l-4 border-l-orange-400 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                        Fokus-Themen
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {weakTopics.map((t) => (
                        <div key={t.stichwortId} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className={cn(
                                "text-[9px] font-medium px-1 py-0.5 rounded",
                                fachColorMap[t.fach] || ""
                              )}
                            >
                              {t.fach.slice(0, 3).toUpperCase()}
                            </span>
                            <span className="text-[11px] text-gray-700 dark:text-gray-300 truncate">
                              {t.thema}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-orange-600 dark:text-orange-400 shrink-0">
                            {t.rate}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              {strongTopics.length > 0 && (
                <Card className="border-l-4 border-l-emerald-400 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                        Starke Themen
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {strongTopics.map((t) => (
                        <div key={t.stichwortId} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className={cn(
                                "text-[9px] font-medium px-1 py-0.5 rounded",
                                fachColorMap[t.fach] || ""
                              )}
                            >
                              {t.fach.slice(0, 3).toUpperCase()}
                            </span>
                            <span className="text-[11px] text-gray-700 dark:text-gray-300 truncate">
                              {t.thema}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                            {t.rate}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Meilensteine */}
      <section>
        <Card className="border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              Meilensteine
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-xs text-muted mb-3">
              {unlockedCount}/{milestones.length} erreicht
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {milestones.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                    m.check
                      ? "bg-yellow-50 dark:bg-yellow-900/20"
                      : "bg-gray-50 dark:bg-gray-800/50 opacity-40"
                  )}
                  title={m.label}
                >
                  <m.icon
                    className={cn(
                      "w-5 h-5",
                      m.check ? "text-yellow-500" : "text-gray-400 dark:text-gray-600"
                    )}
                  />
                  <span
                    className={cn(
                      "text-[9px] text-center leading-tight",
                      m.check
                        ? "text-yellow-700 dark:text-yellow-400 font-medium"
                        : "text-gray-400 dark:text-gray-600"
                    )}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Meine Erfolge – Badges */}
      <section>
        <Card className="border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              Meine Erfolge
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted mb-4">
              Sammle Badges durch Lernen, Streaks und besondere Leistungen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BADGE_DEFINITIONS.map((badge) => {
                const { earned, progress } = getBadgeProgress(badge.id, badgeState, alleKapitel);
                return (
                  <div
                    key={badge.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl border transition-colors",
                      earned
                        ? "bg-amber-50/50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
                        : "bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-white/10"
                    )}
                  >
                    <BadgeIcon badgeId={badge.id} icon={badge.icon} earned={earned} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          earned
                            ? "text-amber-900 dark:text-amber-100"
                            : "text-slate-600 dark:text-slate-400"
                        )}
                      >
                        {badge.name}
                      </p>
                      <p className="text-xs text-muted truncate" title={badge.description}>
                        {badge.description}
                      </p>
                      {!earned && progress && (
                        <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-0.5">
                          {progress}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spezial-Statistik */}
      {unlockedFachMilestones.length > 0 && (
        <section>
          <Card className="border border-amber-200/60 dark:border-amber-800/60 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Spezial-Statistik
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted mb-3">
                Du hast in mindestens einem Fach 50 % erreicht – Vergleichsstatistik (simuliert).
              </p>
              <ul className="space-y-2">
                {unlockedFachMilestones.map((fach) => {
                  const fachReadiness = getFachReadiness(fach);
                  const betterThanPercent = Math.min(95, 30 + Math.round(fachReadiness * 0.65));
                  const label =
                    {
                      biologie: "Biologie",
                      chemie: "Chemie",
                      physik: "Physik",
                      mathematik: "Mathematik",
                    }[fach] ?? fach;
                  return (
                    <li key={fach} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900 dark:text-gray-100">{label}</span>
                      <span className="text-amber-700 dark:text-amber-300 font-semibold">
                        Besser als {betterThanPercent} % der Bewerber
                      </span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
}
