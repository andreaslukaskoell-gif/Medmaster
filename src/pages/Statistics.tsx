import { useState, useMemo } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
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
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heatmap } from "@/components/ui/heatmap";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { alleStichworteListe, fachConfig } from "@/data/stichwortliste";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { Progress } from "@/components/ui/progress";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useUsageLimits } from "@/hooks/useUsageLimits";
import { UpgradePrompt } from "@/components/paywall/UpgradePrompt";

const COLORS = ["#0f766e", "#14b8a6", "#2dd4bf", "#5eead4", "#99f6e4"];

const FACH_COLORS: Record<string, string> = {
  biologie: "#10b981",
  chemie: "#ef4444",
  physik: "#3b82f6",
  mathematik: "#8b5cf6",
};

const confidenceLabel: Record<string, { text: string; className: string }> = {
  sicher: {
    text: "Sicher",
    className: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  unsicher: {
    text: "Unsicher",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  unbekannt: {
    text: "Unbekannt",
    className: "bg-[var(--surface)] text-muted-foreground",
  },
};

/** Group quiz results by ISO week for trend charts */
function getWeekKey(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Unbekannt";
  const day = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - day);
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `KW ${weekNo}`;
}

export default function Statistics() {
  usePageTitle("Statistik");
  const rawQuizResults = useStore((s) => s.quizResults);
  const xp = useStore((s) => s.xp);
  const streak = useStore((s) => s.streak);
  const quizResults = (rawQuizResults ?? []).filter(
    (r) => r != null && typeof r === "object"
  );
  const adaptive = useAdaptiveStore();
  const { profile } = adaptive;
  const [stichwortFach, setStichwortFach] = useState<string>("biologie");
  const [trendRange, setTrendRange] = useState<"all" | "4w" | "12w">("12w");
  const statsLimits = useUsageLimits();

  const totalQuizzes = quizResults.length;
  const totalCorrect = quizResults.reduce((sum, r) => sum + r.score, 0);
  const totalQuestions = quizResults.reduce((sum, r) => sum + r.total, 0);
  const avgPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const totalMinutes = quizResults.reduce((sum, r) => sum + (r.durationMinutes ?? 0), 0);

  const byType = quizResults.reduce<
    Record<string, { correct: number; total: number; count: number }>
  >((acc, r) => {
    const key = (r.type || "bms").toUpperCase();
    if (!acc[key]) acc[key] = { correct: 0, total: 0, count: 0 };
    acc[key].correct += r.score;
    acc[key].total += r.total;
    acc[key].count += 1;
    return acc;
  }, {});

  const barData = Object.entries(byType).map(([name, d]) => ({
    name,
    Prozent: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
    Quizze: d.count,
  }));

  const pieData = Object.entries(byType).map(([name, d]) => ({
    name,
    value: d.count,
  }));

  // Weekly trend data
  const weeklyTrend = useMemo(() => {
    const sorted = quizResults
      .filter((r) => r.timestamp)
      .sort((a, b) => (a.timestamp ?? "").localeCompare(b.timestamp ?? ""));

    const byWeek: Record<string, { correct: number; total: number; count: number }> = {};
    sorted.forEach((r) => {
      const wk = getWeekKey(r.timestamp ?? r.date);
      if (!byWeek[wk]) byWeek[wk] = { correct: 0, total: 0, count: 0 };
      byWeek[wk].correct += r.score;
      byWeek[wk].total += r.total;
      byWeek[wk].count += 1;
    });

    let entries = Object.entries(byWeek).map(([week, d]) => ({
      week,
      Prozent: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
      Fragen: d.total,
    }));

    if (trendRange === "4w") entries = entries.slice(-4);
    else if (trendRange === "12w") entries = entries.slice(-12);

    return entries;
  }, [quizResults, trendRange]);

  // Per-Fach trend over time (for BMS)
  const fachTrend = useMemo(() => {
    const bmsResults = quizResults
      .filter((r) => r.type === "bms" && r.timestamp && r.answers?.length)
      .sort((a, b) => (a.timestamp ?? "").localeCompare(b.timestamp ?? ""));

    const byWeekFach: Record<string, Record<string, { correct: number; total: number }>> = {};
    bmsResults.forEach((r) => {
      const wk = getWeekKey(r.timestamp ?? r.date);
      if (!byWeekFach[wk]) byWeekFach[wk] = {};
      (r.answers ?? []).forEach((a) => {
        const subj = getQuestionSubject(a.questionId) || r.subject || "unbekannt";
        if (!["biologie", "chemie", "physik", "mathematik"].includes(subj)) return;
        if (!byWeekFach[wk][subj]) byWeekFach[wk][subj] = { correct: 0, total: 0 };
        byWeekFach[wk][subj].total += 1;
        if (a.correct) byWeekFach[wk][subj].correct += 1;
      });
    });

    return Object.entries(byWeekFach)
      .slice(-12)
      .map(([week, faecher]) => {
        const row: Record<string, string | number> = { week };
        for (const f of ["biologie", "chemie", "physik", "mathematik"]) {
          const d = faecher[f];
          row[f] = d && d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
        }
        return row;
      });
  }, [quizResults]);

  if (statsLimits.analyticsLocked) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <UpgradePrompt
          feature="Detaillierte Statistik"
          limitInfo="Verfolge deinen Lernfortschritt mit Trends, Diagrammen und Fach-Analysen — nur mit Premium."
          variant="card"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[{ label: "Dashboard", href: "/" }, { label: "Statistik" }]}
      />

      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Statistik</h1>
        <p className="text-[var(--muted)] mt-1">Dein Lernfortschritt im Überblick.</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-[var(--accent)]">
              <AnimatedCounter value={xp} />
            </p>
            <p className="text-xs text-[var(--muted)]">Gesamt-XP</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-orange-600">
              <AnimatedCounter value={streak} />
            </p>
            <p className="text-xs text-[var(--muted)]">Tage-Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">
              <AnimatedCounter value={totalQuestions} />
            </p>
            <p className="text-xs text-[var(--muted)]">Fragen beantwortet</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">
              <AnimatedCounter value={avgPct} suffix="%" />
            </p>
            <p className="text-xs text-[var(--muted)]">Durchschnitt</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">
              {totalMinutes >= 60
                ? <><AnimatedCounter value={Math.round(totalMinutes / 60)} /><span className="text-lg">h</span></>
                : <><AnimatedCounter value={totalMinutes} /><span className="text-lg">m</span></>
              }
            </p>
            <p className="text-xs text-[var(--muted)]">Lernzeit</p>
          </CardContent>
        </Card>
      </div>

      {totalQuizzes === 0 ? (
        <Card>
          <CardContent className="p-12 text-center space-y-4">
            <div className="text-5xl">📊</div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">
              Noch keine Statistiken
            </p>
            <p className="text-sm text-[var(--muted)] max-w-xs mx-auto">
              Absolviere deinen ersten Test, um hier deine Lernstatistiken und Fortschritte zu
              sehen.
            </p>
            <a
              href="/simulation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors"
            >
              Erste Simulation starten →
            </a>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Weekly Trend */}
          {weeklyTrend.length > 1 && (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Leistungsverlauf</CardTitle>
                  <div className="flex gap-1">
                    {(["4w", "12w", "all"] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setTrendRange(r)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                          trendRange === r
                            ? "bg-[var(--accent)] text-white"
                            : "bg-[var(--surface)] text-muted-foreground hover:bg-accent"
                        }`}
                      >
                        {r === "4w" ? "4 Wochen" : r === "12w" ? "12 Wochen" : "Alles"}
                      </button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={weeklyTrend}>
                    <defs>
                      <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0f766e" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#0f766e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                    <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(v?: number, name?: string) => [
                        name === "Prozent" ? `${v ?? 0}%` : (v ?? 0),
                        name === "Prozent" ? "Richtig" : (name ?? ""),
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="Prozent"
                      stroke="#0f766e"
                      strokeWidth={2}
                      fill="url(#trendGrad)"
                      dot={{ fill: "#0f766e", r: 3 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Per-Fach BMS Trend */}
          {fachTrend.length > 1 && (
            <Card>
              <CardHeader>
                <CardTitle>BMS-Entwicklung nach Fach</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={fachTrend}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                    <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(v?: number) => [`${v ?? 0}%`, ""]} />
                    {(["biologie", "chemie", "physik", "mathematik"] as const).map((f) => (
                      <Area
                        key={f}
                        type="monotone"
                        dataKey={f}
                        name={fachConfig[f]?.label || f}
                        stroke={FACH_COLORS[f]}
                        fill={FACH_COLORS[f]}
                        fillOpacity={0.08}
                        strokeWidth={2}
                        dot={false}
                      />
                    ))}
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex gap-4 justify-center mt-3">
                  {(["biologie", "chemie", "physik", "mathematik"] as const).map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: FACH_COLORS[f] }} />
                      {fachConfig[f]?.label || f}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

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
          </div>

          {/* Detailed results table */}
          <Card>
            <CardHeader>
              <CardTitle>Detaillierte Ergebnisse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-2 px-3 text-[var(--muted)] font-medium">Datum</th>
                      <th className="text-left py-2 px-3 text-[var(--muted)] font-medium">Typ</th>
                      <th className="text-left py-2 px-3 text-[var(--muted)] font-medium">Thema</th>
                      <th className="text-right py-2 px-3 text-[var(--muted)] font-medium">
                        Ergebnis
                      </th>
                      <th className="text-right py-2 px-3 text-[var(--muted)] font-medium">
                        Prozent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizResults
                      .slice()
                      .reverse()
                      .slice(0, 50)
                      .map((r) => (
                        <tr key={r.id} className="border-b border-[var(--border)]/50">
                          <td className="py-2 px-3">{r.date}</td>
                          <td className="py-2 px-3 uppercase font-medium">{r.type}</td>
                          <td className="py-2 px-3">{r.subject || "-"}</td>
                          <td className="py-2 px-3 text-right">
                            {r.score}/{r.total}
                          </td>
                          <td className="py-2 px-3 text-right font-bold text-[var(--accent)]">
                            {r.total > 0 ? Math.round((r.score / r.total) * 100) : 0}%
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* BMS per-subject breakdown */}
      {(() => {
        const bmsResults = quizResults.filter((r) => r.type === "bms");
        if (bmsResults.length === 0) return null;
        const bySubject: Record<string, { correct: number; total: number }> = {};
        bmsResults.forEach((r) => {
          (r.answers ?? []).forEach((a) => {
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
          .sort(
            ([, a], [, b]) =>
              (b.total > 0 ? b.correct / b.total : 0) - (a.total > 0 ? a.correct / a.total : 0)
          );
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
                  const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                  return (
                    <div key={subj}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {meta?.label || subj}
                        </span>
                        <span className="text-xs text-[var(--muted)]">
                          {data.correct}/{data.total} richtig ({pct}%)
                        </span>
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
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--surface)] text-muted-foreground hover:bg-accent"
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
            const avgRate =
              practiced.length > 0
                ? Math.round(
                    practiced.reduce((s, x) => s + (x.stat?.successRate ?? 0), 0) / practiced.length
                  )
                : 0;
            const sicherCount = practiced.filter((x) => x.stat?.confidence === "sicher").length;
            const unsicherCount = practiced.filter((x) => x.stat?.confidence === "unsicher").length;

            return (
              <div className="space-y-4">
                {/* Summary */}
                <div className="grid grid-cols-4 gap-3 text-center text-sm">
                  <div>
                    <p className="text-lg font-bold text-[var(--accent)]">
                      {practicedCount}/{totalSw}
                    </p>
                    <p className="text-[10px] text-[var(--muted)]">Geübt</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">{avgRate}%</p>
                    <p className="text-[10px] text-[var(--muted)]">Durchschnitt</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">{sicherCount}</p>
                    <p className="text-[10px] text-[var(--muted)]">Sicher</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">{unsicherCount}</p>
                    <p className="text-[10px] text-[var(--muted)]">Unsicher</p>
                  </div>
                </div>

                {/* Practiced stichworte sorted by success rate */}
                {practiced.length > 0 && (
                  <div className="space-y-1.5 max-h-80 overflow-y-auto">
                    {practiced
                      .sort((a, b) => (a.stat?.successRate ?? 0) - (b.stat?.successRate ?? 0))
                      .map(({ sw, stat }) => (
                        <div
                          key={sw.id}
                          className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-accent"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-medium text-[var(--text-primary)] truncate block">
                              {sw.thema}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                              confidenceLabel[stat?.confidence ?? ""]?.className || ""
                            }`}
                          >
                            {confidenceLabel[stat?.confidence ?? ""]?.text || stat?.confidence}
                          </span>
                          <span className="text-[10px] text-[var(--muted)] w-12 text-right">
                            {stat?.totalAttempts ?? 0}x
                          </span>
                          <div className="w-16">
                            <Progress value={stat?.successRate ?? 0} className="h-1.5" />
                          </div>
                          <span
                            className={`text-xs font-bold w-10 text-right ${
                              (stat?.successRate ?? 0) >= 80
                                ? "text-green-600"
                                : (stat?.successRate ?? 0) >= 50
                                  ? "text-amber-600"
                                  : "text-red-600"
                            }`}
                          >
                            {stat?.successRate ?? 0}%
                          </span>
                        </div>
                      ))}
                  </div>
                )}

                {/* Unpracticed count */}
                {unpracticed.length > 0 && (
                  <p className="text-xs text-[var(--muted)] pt-1 border-t border-[var(--border)]">
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
          <Heatmap />
        </CardContent>
      </Card>
    </div>
  );
}
