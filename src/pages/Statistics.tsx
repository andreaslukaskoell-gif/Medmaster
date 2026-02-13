import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heatmap } from "@/components/ui/heatmap";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { alleStichworteListe, fachConfig } from "@/data/stichwortliste";
import { generateMockActivityData } from "@/lib/utils";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { Progress } from "@/components/ui/progress";

const COLORS = ["#0f766e", "#14b8a6", "#2dd4bf", "#5eead4", "#99f6e4"];

const fachColors: Record<string, { bg: string; text: string; bar: string }> = {
  biologie: { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", bar: "[&>div]:bg-emerald-500" },
  chemie: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-400", bar: "[&>div]:bg-red-500" },
  physik: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400", bar: "[&>div]:bg-blue-500" },
  mathematik: { bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-400", bar: "[&>div]:bg-violet-500" },
};

const confidenceLabel: Record<string, { text: string; className: string }> = {
  sicher: { text: "Sicher", className: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  unsicher: { text: "Unsicher", className: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
  unbekannt: { text: "Unbekannt", className: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" },
};

export default function Statistics() {
  const { quizResults, xp, streak, completedChapters, activityLog } = useStore();
  const adaptive = useAdaptiveStore();
  const { profile } = adaptive;
  const [stichwortFach, setStichwortFach] = useState<string>("biologie");
  const mockActivity = generateMockActivityData();
  const activityData = Object.keys(activityLog).length > 0 ? activityLog : mockActivity;

  const totalQuizzes = quizResults.length;
  const totalCorrect = quizResults.reduce((sum, r) => sum + r.score, 0);
  const totalQuestions = quizResults.reduce((sum, r) => sum + r.total, 0);
  const avgPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const byType = quizResults.reduce<Record<string, { correct: number; total: number; count: number }>>((acc, r) => {
    const key = r.type.toUpperCase();
    if (!acc[key]) acc[key] = { correct: 0, total: 0, count: 0 };
    acc[key].correct += r.score;
    acc[key].total += r.total;
    acc[key].count += 1;
    return acc;
  }, {});

  const barData = Object.entries(byType).map(([name, d]) => ({
    name,
    Prozent: Math.round((d.correct / d.total) * 100),
    Quizze: d.count,
  }));

  const pieData = Object.entries(byType).map(([name, d]) => ({
    name,
    value: d.count,
  }));

  const timelineData = quizResults.slice(-10).map((r, i) => ({
    name: `#${i + 1}`,
    Prozent: Math.round((r.score / r.total) * 100),
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Statistik" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Statistik</h1>
        <p className="text-muted mt-1">Dein Lernfortschritt im Überblick.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-primary-700">{xp}</p>
            <p className="text-xs text-muted">Gesamt-XP</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-orange-600">{streak}</p>
            <p className="text-xs text-muted">Tage-Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{totalQuizzes}</p>
            <p className="text-xs text-muted">Quizze absolviert</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{avgPct}%</p>
            <p className="text-xs text-muted">Durchschnitt</p>
          </CardContent>
        </Card>
      </div>

      {totalQuizzes === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted">
              Noch keine Quizze absolviert. Starte mit dem Lernen, um hier deine
              Statistiken zu sehen!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Leistung nach Modul</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="Prozent" fill="#0f766e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quizverteilung</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Leistungsverlauf (letzte 10 Quizze)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Prozent"
                    stroke="#0f766e"
                    strokeWidth={2}
                    dot={{ fill: "#0f766e", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Detaillierte Ergebnisse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 text-muted font-medium">Datum</th>
                      <th className="text-left py-2 px-3 text-muted font-medium">Typ</th>
                      <th className="text-left py-2 px-3 text-muted font-medium">Thema</th>
                      <th className="text-right py-2 px-3 text-muted font-medium">Ergebnis</th>
                      <th className="text-right py-2 px-3 text-muted font-medium">Prozent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizResults
                      .slice()
                      .reverse()
                      .map((r) => (
                        <tr key={r.id} className="border-b border-gray-50">
                          <td className="py-2 px-3">{r.date}</td>
                          <td className="py-2 px-3 uppercase font-medium">{r.type}</td>
                          <td className="py-2 px-3">{r.subject || "-"}</td>
                          <td className="py-2 px-3 text-right">{r.score}/{r.total}</td>
                          <td className="py-2 px-3 text-right font-bold text-primary-700">
                            {Math.round((r.score / r.total) * 100)}%
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* BMS per-subject breakdown */}
      {(() => {
        const bmsResults = quizResults.filter((r) => r.type === "bms");
        if (bmsResults.length === 0) return null;
        const bySubject: Record<string, { correct: number; total: number }> = {};
        bmsResults.forEach((r) => {
          r.answers.forEach((a) => {
            const subj = getQuestionSubject(a.questionId) || r.subject || "unbekannt";
            if (!bySubject[subj]) bySubject[subj] = { correct: 0, total: 0 };
            bySubject[subj].total += 1;
            if (a.correct) bySubject[subj].correct += 1;
          });
        });
        const subjectMeta: Record<string, { label: string; color: string }> = {
          biologie: { label: "Biologie", color: "[&>div]:bg-emerald-500" },
          chemie: { label: "Chemie", color: "[&>div]:bg-red-500" },
          physik: { label: "Physik", color: "[&>div]:bg-blue-500" },
          mathematik: { label: "Mathematik", color: "[&>div]:bg-violet-500" },
        };
        const entries = Object.entries(bySubject)
          .filter(([key]) => key in subjectMeta)
          .sort(([, a], [, b]) => (b.total > 0 ? b.correct / b.total : 0) - (a.total > 0 ? a.correct / a.total : 0));
        if (entries.length === 0) return null;
        return (
          <Card>
            <CardHeader>
              <CardTitle>BMS nach Fach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {entries.map(([subj, data]) => {
                  const meta = subjectMeta[subj];
                  const pct = Math.round((data.correct / data.total) * 100);
                  return (
                    <div key={subj}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{meta?.label || subj}</span>
                        <span className="text-xs text-muted">{data.correct}/{data.total} richtig ({pct}%)</span>
                      </div>
                      <Progress value={pct} className={meta?.color || ""} />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })()}

      {/* Per-Stichwort Statistics */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Stichwort-Statistiken</CardTitle>
            <div className="flex gap-1">
              {(["biologie", "chemie", "physik", "mathematik"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setStichwortFach(f)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    stichwortFach === f
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {fachConfig[f]?.label || f}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {(() => {
            const stichworte = alleStichworteListe.filter((s) => s.fach === stichwortFach);
            const withStats = stichworte.map((sw) => {
              const stat = profile.stichwortStats[sw.id];
              return { sw, stat };
            });
            const practiced = withStats.filter((x) => x.stat && x.stat.totalAttempts > 0);
            const unpracticed = withStats.filter((x) => !x.stat || x.stat.totalAttempts === 0);
            const totalSw = stichworte.length;
            const practicedCount = practiced.length;
            const avgRate = practiced.length > 0
              ? Math.round(practiced.reduce((s, x) => s + x.stat!.successRate, 0) / practiced.length)
              : 0;
            const sicherCount = practiced.filter((x) => x.stat!.confidence === "sicher").length;
            const unsicherCount = practiced.filter((x) => x.stat!.confidence === "unsicher").length;

            return (
              <div className="space-y-4">
                {/* Summary */}
                <div className="grid grid-cols-4 gap-3 text-center text-sm">
                  <div>
                    <p className="text-lg font-bold text-primary-700">{practicedCount}/{totalSw}</p>
                    <p className="text-[10px] text-muted">Geübt</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">{avgRate}%</p>
                    <p className="text-[10px] text-muted">Durchschnitt</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">{sicherCount}</p>
                    <p className="text-[10px] text-muted">Sicher</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">{unsicherCount}</p>
                    <p className="text-[10px] text-muted">Unsicher</p>
                  </div>
                </div>

                {/* Practiced stichworte sorted by success rate */}
                {practiced.length > 0 && (
                  <div className="space-y-1.5 max-h-80 overflow-y-auto">
                    {practiced
                      .sort((a, b) => a.stat!.successRate - b.stat!.successRate)
                      .map(({ sw, stat }) => (
                        <div key={sw.id} className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate block">
                              {sw.thema}
                            </span>
                          </div>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                            confidenceLabel[stat!.confidence]?.className || ""
                          }`}>
                            {confidenceLabel[stat!.confidence]?.text || stat!.confidence}
                          </span>
                          <span className="text-[10px] text-muted w-12 text-right">
                            {stat!.totalAttempts}x
                          </span>
                          <div className="w-16">
                            <Progress value={stat!.successRate} className="h-1.5" />
                          </div>
                          <span className={`text-xs font-bold w-10 text-right ${
                            stat!.successRate >= 80 ? "text-green-600" :
                            stat!.successRate >= 50 ? "text-amber-600" : "text-red-600"
                          }`}>
                            {stat!.successRate}%
                          </span>
                        </div>
                      ))}
                  </div>
                )}

                {/* Unpracticed count */}
                {unpracticed.length > 0 && (
                  <p className="text-xs text-muted pt-1 border-t border-gray-100 dark:border-gray-800">
                    {unpracticed.length} Stichworte noch nicht geübt
                  </p>
                )}
              </div>
            );
          })()}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lernaktivität</CardTitle>
        </CardHeader>
        <CardContent>
          <Heatmap data={activityData} />
        </CardContent>
      </Card>
    </div>
  );
}
