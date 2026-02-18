import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Brain,
  FileText,
  Heart,
  TrendingUp,
  Target,
  Clock,
  Timer,
  Star,
  Flame,
  Layers,
  ArrowRight,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Trophy,
  Swords,
  Award,
  BookMarked,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heatmap } from "@/components/ui/heatmap";
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useKFFResultsSWR } from "@/hooks/useKFFResultsSWR";
import { useDashboardProfile } from "@/hooks/useDashboardProfile";
import { useDueReview } from "@/hooks/useDueReview";
import { daysUntilMedAT, getMedATProgress } from "@/lib/utils";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { pathForChapter } from "@/lib/bmsRoutes";
import { findChapterByUnterkapitelId } from "@/data/bmsKapitel";

const modules = [
  {
    to: "/bms",
    icon: BookOpen,
    label: "BMS",
    desc: "Basiskenntnistest Medizinische Studien",
    color: "bg-emerald-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-700 dark:text-emerald-400",
    borderColor: "border-l-emerald-500",
  },
  {
    to: "/kff",
    icon: Brain,
    label: "KFF",
    desc: "Kognitive Fähigkeiten & Fertigkeiten",
    color: "bg-amber-500",
    bgLight: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-700 dark:text-amber-400",
    borderColor: "border-l-amber-500",
  },
  {
    to: "/tv",
    icon: FileText,
    label: "TV",
    desc: "Textverständnis",
    color: "bg-indigo-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-900/20",
    textColor: "text-indigo-700 dark:text-indigo-400",
    borderColor: "border-l-indigo-500",
  },
  {
    to: "/sek",
    icon: Heart,
    label: "SEK",
    desc: "Sozial-emotionale Kompetenzen",
    color: "bg-rose-500",
    bgLight: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-700 dark:text-rose-400",
    borderColor: "border-l-rose-500",
  },
  {
    to: "/simulation",
    icon: Timer,
    label: "Simulation",
    desc: "MedAT unter Testbedingungen",
    color: "bg-orange-500",
    bgLight: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-700 dark:text-orange-400",
    borderColor: "border-l-orange-500",
  },
];

function ProgressRing({ value, size = 48, stroke = 4 }: { value: number; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-gray-200 dark:text-gray-700" />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="text-primary-600 transition-all duration-500" />
    </svg>
  );
}

const subtestLabels: Record<string, string> = {
  implikationen: "Implikationen",
  zahlenfolgen: "Zahlenfolgen",
  wortfluessigkeit: "Wortflüssigkeit",
  merkfaehigkeit: "Merkfähigkeit",
  figuren: "Figuren",
  "emotionen-regulieren": "Emotionen regulieren",
  "soziales-entscheiden": "Soziales Entscheiden",
  "emotionen-erkennen": "Emotionen erkennen",
  textverstaendnis: "Textverständnis",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { xp: storeXp, streak, completedChapters, quizResults, onboardingCompleted, activityLog } =
    useStore();
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);
  const profile = useDashboardProfile();
  const { all: kffResults, isLoading: kffLoading, error: kffError } = useKFFResultsSWR();
  const { dueTopics, loading: dueLoading } = useDueReview();
  const days = daysUntilMedAT();
  const medATProgress = getMedATProgress();

  const lastViewedInfo = lastViewedUnterkapitelId ? findChapterByUnterkapitelId(lastViewedUnterkapitelId) : null;

  const handleResumeLastViewed = () => {
    if (!lastViewedInfo || !lastViewedUnterkapitelId) return;
    setResumeToUnterkapitelId(lastViewedUnterkapitelId);
    navigate(pathForChapter(lastViewedInfo.kapitel.subject, lastViewedInfo.kapitel.id));
  };
  const totalQuizzes = quizResults.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          (quizResults.reduce((sum, r) => sum + r.score / r.total, 0) / totalQuizzes) * 100
        )
      : 0;

  const xp = profile.hasData ? profile.xp : storeXp;
  const level = profile.hasData ? profile.level : Math.floor(storeXp / 100) + 1;
  const showWelcome = !profile.loading && !profile.hasData;

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      <SyncIndicator />

      {/* MedAT Countdown – prominent oben */}
      <Card className="border-primary-200 dark:border-primary-800 bg-primary-50/30 dark:bg-primary-900/10">
        <CardContent className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">Countdown MedAT</p>
                <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">
                  Noch {days} Tag{days !== 1 ? "e" : ""} bis zum MedAT
                </p>
                <p className="text-xs text-muted">Stichtag: Erster Freitag im Juli 2026</p>
              </div>
            </div>
            <div className="w-full sm:w-64 shrink-0">
              <div className="flex justify-between text-xs text-muted mb-1">
                <span>Vorbereitungszeit</span>
                <span>{Math.round(medATProgress.progress * 100)}%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-600 dark:bg-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${medATProgress.progress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showWelcome && (
        <Card className="border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Willkommen bei MedMaster</h2>
            <p className="text-muted mt-1">
              Starte mit deinem ersten Quiz oder Stichwortliste – deine XP und dein Level erscheinen hier,
              sobald du aktiv wirst.
            </p>
          </CardContent>
        </Card>
      )}
      {/* Heute wiederholen – Vergessenskurve */}
      {!dueLoading && dueTopics.length > 0 && (
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Heute wiederholen
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted mb-3">
              Diese Themen sind laut Vergessenskurve fällig – kurze Wiederholung festigt den Stoff.
            </p>
            <ul className="space-y-1.5">
              {dueTopics.map((t) => (
                <li key={t.stichwortId} className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  • {t.name}
                </li>
              ))}
            </ul>
            <Link to="/bms" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 mt-3 hover:underline">
              <BookOpen className="w-4 h-4" />
              BMS starten
            </Link>
          </CardContent>
        </Card>
      )}

      {lastViewedUnterkapitelId && lastViewedInfo && (
        <Card className="border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10 hover:shadow-md transition-shadow cursor-pointer" onClick={handleResumeLastViewed}>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center shrink-0">
              <BookMarked className="w-6 h-6 text-primary-700 dark:text-primary-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-primary-800 dark:text-primary-300">Zuletzt gelerntes Thema fortsetzen</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 truncate">
                {lastViewedInfo.kapitel.title} → {lastViewedInfo.kapitel.unterkapitel?.[lastViewedInfo.index]?.title ?? "Unterkapitel"}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
          </CardContent>
        </Card>
      )}

      {!onboardingCompleted && (
        <Link to="/onboarding">
          <Card className="border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-700 dark:text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary-800 dark:text-primary-300">Einstufungstest</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400">Mache den Einstufungstest, um deinen personalisierten Lernplan zu erhalten.</p>
              </div>
              <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">Starten →</span>
            </CardContent>
          </Card>
        </Link>
      )}

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {showWelcome ? "Willkommen!" : "Willkommen zurück!"}
        </h1>
        <p className="text-muted mt-1">
          Dein MedAT ist in{" "}
          <span className="font-bold text-primary-700 dark:text-primary-400">{days}</span> Tagen.
          Bleib dran!
        </p>
      </div>

      {profile.loading ? (
        <DashboardSkeleton />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <ProgressRing value={Math.min(100, (days / 365) * 100)} />
                <Clock className="w-5 h-5 text-primary-700 dark:text-primary-400 absolute" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">{days}</p>
                <p className="text-xs text-muted">Tage bis MedAT</p>
              </div>
            </CardContent>
          </Card>
          <StatCard xp={xp} level={level} />
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">{streak}</p>
                <p className="text-xs text-muted">Tage-Streak</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <ProgressRing value={avgScore} />
                <Target className="w-5 h-5 text-primary-700 dark:text-primary-400 absolute" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-700 dark:text-green-400">{avgScore}%</p>
                <p className="text-xs text-muted">Durchschnitt</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Weiter lernen section */}
      {(() => {
        const dueCount = Object.values(useStore.getState().spacedRepetition).filter(
          (item) => item.nextDue <= new Date().toISOString().split("T")[0]
        ).length;

        const bmsResults = quizResults.filter((r) => r.type === "bms");
        let weakestSubject: { name: string; pct: number } | null = null;
        if (bmsResults.length > 0) {
          const bySubject: Record<string, { correct: number; total: number }> = {};
          bmsResults.forEach((r) => {
            r.answers.forEach((a) => {
              const subj = getQuestionSubject(a.questionId) || r.subject || "";
              if (!subj || subj === "gemischt") return;
              if (!bySubject[subj]) bySubject[subj] = { correct: 0, total: 0 };
              bySubject[subj].total += 1;
              if (a.correct) bySubject[subj].correct += 1;
            });
          });
          const entries = Object.entries(bySubject).filter(([, d]) => d.total >= 3);
          if (entries.length > 0) {
            const sorted = entries.sort(([, a], [, b]) => (a.correct / a.total) - (b.correct / b.total));
            const [name, data] = sorted[0];
            weakestSubject = { name: name.charAt(0).toUpperCase() + name.slice(1), pct: Math.round((data.correct / data.total) * 100) };
          }
        }

        if (!weakestSubject && dueCount === 0) return null;

        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Weiter lernen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weakestSubject && (
                <Link to="/bms">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-orange-400">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {weakestSubject.name} verbessern
                        </p>
                        <p className="text-xs text-muted">
                          Dein schwächstes Fach ({weakestSubject.pct}%) — Quiz starten
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              )}
              {dueCount > 0 && (
                <Link to="/karteikarten">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary-400">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {dueCount} Karteikarte{dueCount !== 1 ? "n" : ""} fällig
                        </p>
                        <p className="text-xs text-muted">Wiederholung starten</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        );
      })()}

      {/* Prüfungs-Readiness */}
      {(() => {
        const store = useAdaptiveStore.getState();
        const readiness = store.getMedATReadiness();
        const weakTopics = store.getWeakestTopics(3);
        const strongTopics = store.getStrongestTopics(3);
        const { totalQuestionsAnswered, totalCorrect, dailyChallengeStreak } = store.profile;

        const fachColorMap: Record<string, string> = {
          biologie: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
          chemie: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          physik: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
          mathematik: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
        };

        const faecher = [
          { id: "biologie", label: "Biologie", color: "bg-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
          { id: "chemie", label: "Chemie", color: "bg-red-500", bg: "bg-red-100 dark:bg-red-900/30" },
          { id: "physik", label: "Physik", color: "bg-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
          { id: "mathematik", label: "Mathematik", color: "bg-violet-500", bg: "bg-violet-100 dark:bg-violet-900/30" },
        ];

        // Milestones
        const milestones = [
          { id: "first-quiz", label: "Erstes Quiz", icon: Star, check: totalQuizzes >= 1 },
          { id: "100-fragen", label: "100 Fragen", icon: BookOpen, check: totalQuestionsAnswered >= 100 },
          { id: "500-fragen", label: "500 Fragen", icon: Brain, check: totalQuestionsAnswered >= 500 },
          { id: "1000-fragen", label: "1.000 Fragen", icon: Trophy, check: totalQuestionsAnswered >= 1000 },
          { id: "streak-7", label: "7-Tage-Streak", icon: Flame, check: streak >= 7 || dailyChallengeStreak >= 7 },
          { id: "readiness-50", label: "50% Bereitschaft", icon: Target, check: readiness >= 50 },
          { id: "readiness-80", label: "80% Bereitschaft", icon: Award, check: readiness >= 80 },
          { id: "duell-held", label: "Duell-Held", icon: Swords, check: quizResults.filter((r) => r.subject === "Duell").length >= 10 },
        ];
        const unlockedCount = milestones.filter((m) => m.check).length;

        if (totalQuestionsAnswered === 0 && quizResults.length === 0) return null;

        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Prüfungs-Readiness</h2>

            {/* Main readiness + fach breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex items-center justify-center">
                      <ProgressRing value={readiness} size={72} stroke={6} />
                      <span className="absolute text-lg font-bold text-primary-700 dark:text-primary-400">{readiness}%</span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900 dark:text-gray-100">MedAT-Bereitschaft</p>
                      <p className="text-xs text-muted">{totalQuestionsAnswered} Fragen, {totalCorrect} richtig</p>
                      {dailyChallengeStreak > 0 && (
                        <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 mt-1">
                          <Flame className="w-3 h-3" />
                          <span>{dailyChallengeStreak} Tage Streak</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Per-Fach bars */}
                  <div className="space-y-2.5">
                    {faecher.map((f) => {
                      const fachReady = store.getFachReadiness(f.id);
                      return (
                        <div key={f.id}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{f.label}</span>
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{Math.round(fachReady)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className={`${f.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, fachReady)}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Weak + Strong + Quick Actions */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {weakTopics.length > 0 && (
                    <Card className="border-l-4 border-l-orange-400">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">Fokus-Themen</p>
                        </div>
                        <div className="space-y-1.5">
                          {weakTopics.map((t) => (
                            <div key={t.stichwortId} className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className={`text-[9px] font-medium px-1 py-0.5 rounded ${fachColorMap[t.fach] || ""}`}>
                                  {t.fach.slice(0, 3).toUpperCase()}
                                </span>
                                <span className="text-[11px] text-gray-700 dark:text-gray-300 truncate">{t.thema}</span>
                              </div>
                              <span className="text-[11px] font-medium text-orange-600 dark:text-orange-400 shrink-0">{t.rate}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {strongTopics.length > 0 && (
                    <Card className="border-l-4 border-l-emerald-400">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">Starke Themen</p>
                        </div>
                        <div className="space-y-1.5">
                          {strongTopics.map((t) => (
                            <div key={t.stichwortId} className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className={`text-[9px] font-medium px-1 py-0.5 rounded ${fachColorMap[t.fach] || ""}`}>
                                  {t.fach.slice(0, 3).toUpperCase()}
                                </span>
                                <span className="text-[11px] text-gray-700 dark:text-gray-300 truncate">{t.thema}</span>
                              </div>
                              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">{t.rate}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Link to="/schwachstellen">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer">
                      <Target className="w-4 h-4" />
                      Schwachstellen-Trainer
                    </button>
                  </Link>
                  <Link to="/schwachstellen">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer">
                      <Zap className="w-4 h-4" />
                      Daily Challenge
                    </button>
                  </Link>
                  <Link to="/duell">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer">
                      <Swords className="w-4 h-4" />
                      Duell
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Meilensteine</p>
                  </div>
                  <span className="text-xs text-muted">{unlockedCount}/{milestones.length} erreicht</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {milestones.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                        m.check
                          ? "bg-yellow-50 dark:bg-yellow-900/20"
                          : "bg-gray-50 dark:bg-gray-800/50 opacity-40"
                      }`}
                      title={m.label}
                    >
                      <m.icon className={`w-5 h-5 ${m.check ? "text-yellow-500" : "text-gray-400 dark:text-gray-600"}`} />
                      <span className={`text-[9px] text-center leading-tight ${m.check ? "text-yellow-700 dark:text-yellow-400 font-medium" : "text-gray-400 dark:text-gray-600"}`}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })()}

      {/* Tagesziel */}
      {(() => {
        const today = new Date().toISOString().split("T")[0];
        const todayResults = quizResults.filter((r) => r.timestamp?.startsWith(today));
        const questionsToday = todayResults.reduce((s, r) => s + r.total, 0);
        const correctToday = todayResults.reduce((s, r) => s + r.score, 0);
        const dailyGoal = 30; // Target: 30 questions per day
        const goalProgress = Math.min(100, Math.round((questionsToday / dailyGoal) * 100));

        const todayModules: Record<string, number> = {};
        todayResults.forEach((r) => {
          const key = r.type.toUpperCase();
          todayModules[key] = (todayModules[key] || 0) + r.total;
        });

        const store = useAdaptiveStore.getState();
        const rec = store.getRecommendation();
        const focusTopics = rec.focusTopics.slice(0, 3);

        return (
          <Card className={`border-l-4 ${goalProgress >= 100 ? "border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10" : "border-l-blue-500"}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Tagesziel
                    {goalProgress >= 100 && <span className="ml-2 text-emerald-600 dark:text-emerald-400">Geschafft!</span>}
                  </h3>
                </div>
                <span className="text-xs text-muted">{questionsToday}/{dailyGoal} Fragen</span>
              </div>

              <Progress value={goalProgress} className={goalProgress >= 100 ? "[&>div]:bg-emerald-500" : ""} />

              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-3 text-xs text-muted">
                  {Object.entries(todayModules).map(([mod, count]) => (
                    <span key={mod}>{mod}: {count}</span>
                  ))}
                  {questionsToday > 0 && (
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {Math.round((correctToday / questionsToday) * 100)}% richtig
                    </span>
                  )}
                </div>
                {focusTopics.length > 0 && questionsToday < dailyGoal && (
                  <div className="text-xs text-muted">
                    Fokus: {focusTopics.map((t) => t.thema).join(", ")}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })()}

      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Lernmodule</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <Link key={m.to} to={m.to}>
              <Card className={`hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer h-full border-l-4 ${m.borderColor}`}>
                <CardContent className="p-5">
                  <div className={`w-12 h-12 ${m.bgLight} rounded-xl flex items-center justify-center mb-3`}>
                    <m.icon className={`w-6 h-6 ${m.textColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{m.label}</h3>
                  <p className="text-sm text-muted mt-1">{m.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {totalQuizzes > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Lernfortschritt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted">Durchschnittliche Quiz-Leistung</span>
              <span className="text-sm font-bold text-primary-700 dark:text-primary-400">{avgScore}%</span>
            </div>
            <Progress value={avgScore} />
            <div className="flex items-center justify-between mt-2 text-xs text-muted">
              <span>{totalQuizzes} Quiz{totalQuizzes !== 1 ? "ze" : ""} absolviert</span>
              <span>{completedChapters.length} Kapitel abgeschlossen</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lernaktivitaet</CardTitle>
        </CardHeader>
        <CardContent>
          <Heatmap />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-4">
          <p className="text-center text-sm text-muted">
            Noch <span className="font-semibold text-gray-900 dark:text-gray-100">{days}</span> Tage bis zum MedAT 2026
          </p>
          <p className="text-center text-xs text-muted mt-0.5">Ziel-Datum: 03. Juli 2026</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Letzte Aktivitaeten</CardTitle>
        </CardHeader>
        <CardContent>
          {quizResults.length === 0 ? (
            <p className="text-sm text-muted">
              Noch keine Aktivitaeten. Starte jetzt mit deinem ersten Quiz!
            </p>
          ) : (
            <div className="space-y-3">
              {quizResults
                .slice(-5)
                .reverse()
                .map((r) => (
                  <div key={r.id} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {r.type.toUpperCase()} Quiz{r.subject ? ` - ${r.subject}` : ""}
                      </p>
                      <p className="text-xs text-muted">{r.date}</p>
                    </div>
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                      {r.score}/{r.total}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>KFF-Übungen & Simulationen</CardTitle>
        </CardHeader>
        <CardContent>
          {kffLoading ? (
            <p className="text-sm text-muted">Lade KFF-Daten aus Supabase…</p>
          ) : kffError ? (
            <p className="text-sm text-red-600 dark:text-red-400">{kffError}</p>
          ) : (kffResults ?? []).length === 0 ? (
            <p className="text-sm text-muted">
              Noch keine KFF-Ergebnisse in der Cloud. Übe KFF-Aufgaben oder starte eine Simulation – sie werden hier angezeigt.
            </p>
          ) : (
            <div className="space-y-3">
              {(kffResults ?? []).slice(0, 10).map((row, idx) => {
                const label = subtestLabels[row?.subtest_type ?? ""] ?? row?.subtest_type ?? "";
                const isSim = row?.result_type === "simulation";
                const payload = (row?.payload ?? {}) as { score?: number; maxScore?: number; date?: string; correct?: boolean };
                return (
                  <div key={row?.id ?? `kff-row-${idx}`} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {isSim ? `Simulation: ${label}` : label}
                      </p>
                      <p className="text-xs text-muted">{row?.created_at ? new Date(row.created_at).toLocaleString() : payload?.date ?? ""}</p>
                    </div>
                    {isSim && typeof payload?.score === "number" && typeof payload?.maxScore === "number" && (
                      <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                        {payload.score}/{payload.maxScore}
                      </span>
                    )}
                    {!isSim && (
                      <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                        {payload?.correct ? "✓" : "✗"}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
