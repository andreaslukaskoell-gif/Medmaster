import { useState } from "react";
import { Users, Trophy, TrendingUp, Medal, ChevronUp, ChevronDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import { generateMockPercentile, generateLeaderboard } from "@/lib/utils";

const leaderboard = generateLeaderboard();

export default function Community() {
  const { quizResults, xp, streak } = useStore();
  const [activeTab, setActiveTab] = useState<"percentile" | "leaderboard">("percentile");

  const totalQuizzes = quizResults.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          (quizResults.reduce((sum, r) => sum + r.score / r.total, 0) / totalQuizzes) * 100
        )
      : 0;

  const percentile = generateMockPercentile(avgScore);

  const bySubject: Record<string, { correct: number; total: number }> = {};
  quizResults.forEach((r) => {
    const key = r.subject || r.type;
    if (!bySubject[key]) bySubject[key] = { correct: 0, total: 0 };
    bySubject[key].correct += r.score;
    bySubject[key].total += r.total;
  });

  const subjectPercentiles = Object.entries(bySubject).map(([name, data]) => ({
    name,
    score: Math.round((data.correct / data.total) * 100),
    percentile: generateMockPercentile(Math.round((data.correct / data.total) * 100)),
  }));

  const tabs = [
    { id: "percentile" as const, label: "Vergleich" },
    { id: "leaderboard" as const, label: "Rangliste" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Community" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Community</h1>
        <p className="text-muted mt-1">Vergleiche dich mit anderen MedAT-Lernenden.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-primary-700 dark:text-primary-400" />
            </div>
            <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">Top {100 - percentile}%</p>
            <p className="text-xs text-muted">Dein Perzentil</p>
          </CardContent>
        </Card>
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
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">{leaderboard.length}</p>
            <p className="text-xs text-muted">Aktive Lernende</p>
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

      {activeTab === "percentile" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gesamtvergleich</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Dein Durchschnitt: {avgScore}%</span>
                    <span className="text-sm font-bold text-primary-700">Perzentil: {percentile}</span>
                  </div>
                  <div className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"
                      style={{ width: "100%" }}
                    />
                    <div
                      className="absolute top-0 h-8 w-1 bg-primary-800 dark:bg-white rounded-full z-10"
                      style={{ left: `${percentile}%` }}
                    />
                    <div
                      className="absolute -top-6 text-xs font-bold text-primary-800 dark:text-primary-300"
                      style={{ left: `${percentile}%`, transform: "translateX(-50%)" }}
                    >
                      Du
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted mt-1">
                    <span>0%</span>
                    <span>Community-Durchschnitt (~65%)</span>
                    <span>100%</span>
                  </div>
                </div>

                <p className="text-sm text-muted">
                  Du bist besser als <span className="font-bold text-primary-700">{percentile}%</span> aller
                  MedAT-Lernenden auf MedMaster. {percentile >= 80 ? "Hervorragend!" : percentile >= 50 ? "Guter Fortschritt!" : "Weiter üben!"}
                </p>
              </div>
            </CardContent>
          </Card>

          {subjectPercentiles.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Vergleich nach Fach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subjectPercentiles.map((sp) => (
                    <div key={sp.name} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-28 capitalize text-gray-700 dark:text-gray-300">
                        {sp.name}
                      </span>
                      <div className="flex-1">
                        <Progress value={sp.percentile} />
                      </div>
                      <span className="text-xs font-bold text-primary-700 w-20 text-right">
                        Top {100 - sp.percentile}%
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="w-5 h-5 text-yellow-500" />
              Rangliste (XP)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboard.map((entry, i) => {
                const isYou = entry.name === "Du";
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                      isYou
                        ? "bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
                        : i < 3
                          ? "bg-yellow-50 dark:bg-yellow-900/10"
                          : ""
                    }`}
                  >
                    <span
                      className={`w-8 text-center font-bold text-sm ${
                        i === 0 ? "text-yellow-500" : i === 1 ? "text-gray-400" : i === 2 ? "text-amber-600" : "text-muted"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                      {entry.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isYou ? "text-primary-700 dark:text-primary-400" : "text-gray-900 dark:text-gray-100"}`}>
                        {entry.name}
                        {isYou && <Badge className="ml-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-[10px]">Du</Badge>}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      {entry.trend === "up" && <ChevronUp className="w-3.5 h-3.5 text-green-500" />}
                      {entry.trend === "down" && <ChevronDown className="w-3.5 h-3.5 text-red-500" />}
                      {entry.trend === "same" && <Minus className="w-3.5 h-3.5 text-muted" />}
                      <span className="font-bold text-gray-900 dark:text-gray-100">{entry.xp} XP</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
