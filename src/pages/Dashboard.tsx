import { Link } from "react-router-dom";
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
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heatmap } from "@/components/ui/heatmap";
import { useStore } from "@/store/useStore";
import { daysUntilMedAT, generateMockActivityData } from "@/lib/utils";

const modules = [
  {
    to: "/bms",
    icon: BookOpen,
    label: "BMS",
    desc: "Basiskenntnistest Medizinische Studien",
    color: "bg-blue-500",
    bgLight: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-400",
  },
  {
    to: "/kff",
    icon: Brain,
    label: "KFF",
    desc: "Kognitive Fähigkeiten & Fertigkeiten",
    color: "bg-purple-500",
    bgLight: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-400",
  },
  {
    to: "/tv",
    icon: FileText,
    label: "TV",
    desc: "Textverständnis",
    color: "bg-green-500",
    bgLight: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-400",
  },
  {
    to: "/sek",
    icon: Heart,
    label: "SEK",
    desc: "Sozial-emotionale Kompetenzen",
    color: "bg-rose-500",
    bgLight: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-700 dark:text-rose-400",
  },
  {
    to: "/simulation",
    icon: Timer,
    label: "Simulation",
    desc: "MedAT unter Testbedingungen",
    color: "bg-orange-500",
    bgLight: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-700 dark:text-orange-400",
  },
];

const mockActivity = generateMockActivityData();

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

export default function Dashboard() {
  const { xp, streak, completedChapters, quizResults, onboardingCompleted, activityLog } = useStore();
  const days = daysUntilMedAT();
  const totalQuizzes = quizResults.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          (quizResults.reduce((sum, r) => sum + r.score / r.total, 0) / totalQuizzes) * 100
        )
      : 0;

  const activityData = Object.keys(activityLog).length > 0 ? activityLog : mockActivity;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Willkommen zurück!</h1>
        <p className="text-muted mt-1">Dein MedAT ist in <span className="font-bold text-primary-700 dark:text-primary-400">{days}</span> Tagen. Bleib dran!</p>
      </div>

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
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{xp}</p>
              <p className="text-xs text-muted">XP</p>
            </div>
          </CardContent>
        </Card>
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

      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Lernmodule</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <Link key={m.to} to={m.to}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer h-full">
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
          <Heatmap data={activityData} />
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
    </div>
  );
}
