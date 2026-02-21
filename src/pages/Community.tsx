import { useState } from "react";
import { Users, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { Leaderboard } from "@/components/community/Leaderboard";

function getScoreBewertung(score: number): string {
  if (score >= 80) return "Stark!";
  if (score >= 60) return "Gut unterwegs";
  return "Noch Luft nach oben";
}

export default function Community() {
  const { quizResults } = useStore();
  const [activeTab, setActiveTab] = useState<"vergleich" | "leaderboard">("vergleich");

  const totalQuizzes = quizResults.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          (quizResults.reduce((sum, r) => sum + r.score / r.total, 0) / totalQuizzes) * 100
        )
      : 0;

  const bySubject: Record<string, { correct: number; total: number }> = {};
  quizResults.forEach((r) => {
    const key = r.subject || r.type;
    if (!bySubject[key]) bySubject[key] = { correct: 0, total: 0 };
    bySubject[key].correct += r.score;
    bySubject[key].total += r.total;
  });

  const subjectScores = Object.entries(bySubject).map(([name, data]) => ({
    name,
    score: Math.round((data.correct / data.total) * 100),
  }));

  const tabs = [
    { id: "vergleich" as const, label: "Dein Stand" },
    { id: "leaderboard" as const, label: "Rangliste" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Community" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Community</h1>
        <p className="text-muted mt-1">Dein Lernfortschritt auf einen Blick.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">{avgScore}%</p>
            <p className="text-xs text-muted">Dein Durchschnitt</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-primary-700 dark:text-primary-400" />
            </div>
            <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">{totalQuizzes}</p>
            <p className="text-xs text-muted">Abgeschlossene Quizze</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activeTab === t.id
                ? "bg-primary-700 text-white"
                : "bg-white dark:bg-gray-900 border border-border dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "vergleich" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dein Gesamtstand</CardTitle>
            </CardHeader>
            <CardContent>
              {totalQuizzes < 5 ? (
                <p className="text-sm text-muted">
                  Löse mindestens 5 Quizze um deinen Vergleichswert zu sehen.
                  <span className="block mt-1 text-primary-600 dark:text-primary-400 font-medium">
                    Bisher: {totalQuizzes}/5 Quizze abgeschlossen.
                  </span>
                </p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Dein Durchschnitt:{" "}
                    <span className="font-bold text-gray-900 dark:text-white">{avgScore}%</span>
                    {" — "}
                    <span className="font-semibold text-primary-700 dark:text-primary-400">
                      {getScoreBewertung(avgScore)}
                    </span>
                  </p>
                  <div className="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary-500 transition-all duration-700"
                      style={{ width: `${avgScore}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted">
                    Basiert auf {totalQuizzes} abgeschlossenen Quizzen.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {subjectScores.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Nach Fach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subjectScores.map((sp) => (
                    <div key={sp.name} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-28 capitalize text-gray-700 dark:text-gray-300">
                        {sp.name}
                      </span>
                      <div className="flex-1">
                        <Progress value={sp.score} />
                      </div>
                      <span className="text-xs font-bold text-primary-700 dark:text-primary-400 w-12 text-right">
                        {sp.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {activeTab === "leaderboard" && (
        <div className="pb-24">
          <Leaderboard />
        </div>
      )}
    </div>
  );
}
