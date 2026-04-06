import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { usePermissions } from "@/hooks/usePermissions";
import { Paywall } from "@/components/ui/paywall";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  Award,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  CheckCircle2,
  CalendarDays,
  Timer,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { Progress } from "@/components/ui/progress";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useStore, useStoreHydrated } from "@/store/useStore";
import { useProgressAnalytics } from "@/hooks/useProgressAnalytics";
import { alleKapitel } from "@/data/bmsKapitel";
import { getLevelFromXP, getLevelProgressPercent, getLevelName } from "@/lib/progression";

// ── Subject config ──────────────────────────────────────────
const SUBJECT_CONFIG: Record<string, { label: string; color: string; chartColor: string }> = {
  biologie: { label: "Biologie", color: "emerald", chartColor: "#10b981" },
  chemie: { label: "Chemie", color: "red", chartColor: "#ef4444" },
  physik: { label: "Physik", color: "blue", chartColor: "#3b82f6" },
  mathematik: { label: "Mathematik", color: "amber", chartColor: "#f59e0b" },
};

const SECTION_COLORS: Record<string, string> = {
  bms: "#0f766e",
  kff: "#7c3aed",
  tv: "#2563eb",
  sek: "#db2777",
};

type TimeRange = 7 | 14 | 30;

// ── SVG Readiness Ring ──────────────────────────────────────
function ReadinessRing({ value, size = 140 }: { value: number; size?: number }) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color =
    value >= 70 ? "#10b981" : value >= 40 ? "#f59e0b" : value >= 10 ? "#ef4444" : "var(--border)";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
          strokeOpacity={0.3}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[var(--text-primary)] tabular-nums">{value}%</span>
        <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Readiness</span>
      </div>
    </div>
  );
}

// ── Mini Sparkline (pure SVG) ───────────────────────────────
function MiniSparkline({ data, color, width = 120, height = 36 }: { data: number[]; color: string; width?: number; height?: number }) {
  const pad = 2;
  // Filter out zero values for a cleaner line (only show active days)
  const activePoints = data.map((v, i) => ({ v, i })).filter((p) => p.v > 0);

  if (activePoints.length < 2) {
    return (
      <svg width={width} height={height} className="opacity-30">
        <line x1={pad} y1={height / 2} x2={width - pad} y2={height / 2} stroke={color} strokeWidth={1.5} strokeDasharray="4 4" />
      </svg>
    );
  }

  const maxVal = Math.max(...activePoints.map((p) => p.v), 1);
  const points = activePoints.map((p) => {
    const x = pad + (p.i / (data.length - 1)) * (width - 2 * pad);
    const y = height - pad - (p.v / maxVal) * (height - 2 * pad);
    return `${x},${y}`;
  });

  // Area fill
  const firstX = pad + (activePoints[0].i / (data.length - 1)) * (width - 2 * pad);
  const lastX = pad + (activePoints[activePoints.length - 1].i / (data.length - 1)) * (width - 2 * pad);
  const areaPoints = `${firstX},${height - pad} ${points.join(" ")} ${lastX},${height - pad}`;

  return (
    <svg width={width} height={height}>
      <polygon fill={color} fillOpacity={0.1} points={areaPoints} />
      <polyline fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" points={points.join(" ")} />
      {/* Dot on last value */}
      {activePoints.length > 0 && (() => {
        const last = activePoints[activePoints.length - 1];
        const cx = pad + (last.i / (data.length - 1)) * (width - 2 * pad);
        const cy = height - pad - (last.v / maxVal) * (height - 2 * pad);
        return <circle cx={cx} cy={cy} r={2.5} fill={color} />;
      })()}
    </svg>
  );
}

// ── Trend Icon ──────────────────────────────────────────────
function TrendIcon({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up") return <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />;
  if (trend === "down") return <ArrowDownRight className="w-3.5 h-3.5 text-red-500" />;
  return <Minus className="w-3.5 h-3.5 text-[var(--muted)]" />;
}

// ── Score color helper ──────────────────────────────────────
function scoreColor(pct: number): string {
  if (pct >= 70) return "text-emerald-500";
  if (pct >= 40) return "text-amber-500";
  return "text-red-500";
}

// ── Type badge ──────────────────────────────────────────────
function typeBadge(type: string) {
  const map: Record<string, { bg: string; text: string }> = {
    bms: { bg: "bg-teal-500/15", text: "text-teal-600 dark:text-teal-400" },
    kff: { bg: "bg-violet-500/15", text: "text-violet-600 dark:text-violet-400" },
    tv: { bg: "bg-blue-500/15", text: "text-blue-600 dark:text-blue-400" },
    sek: { bg: "bg-pink-500/15", text: "text-pink-600 dark:text-pink-400" },
    simulation: { bg: "bg-teal-500/15", text: "text-teal-600 dark:text-teal-400" },
  };
  const style = map[type] ?? { bg: "bg-[var(--surface)]", text: "text-[var(--muted)]" };
  return (
    <span className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
      {type === "simulation" ? "SIM" : (type || "BMS").toUpperCase()}
    </span>
  );
}

// ── Format helpers ──────────────────────────────────────────
function formatDuration(minutes?: number): string {
  if (!minutes) return "--";
  if (minutes < 1) return "<1m";
  if (minutes < 60) return `${Math.round(minutes)}m`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  return `${h}h ${m}m`;
}

function formatDate(dateStr: string): string {
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) return `${isoMatch[3]}.${isoMatch[2]}`;
  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateStr)) return dateStr.split(".").slice(0, 2).join(".");
  return dateStr;
}

function subjectLabel(subject?: string): string {
  if (!subject) return "--";
  return SUBJECT_CONFIG[subject]?.label ?? subject;
}

// ════════════════════════════════════════════════════════════
// Main component
// ════════════════════════════════════════════════════════════

export default function FortschrittPage() {
  usePageTitle("Fortschritt");
  const { isLocked } = usePermissions();
  const hydrated = useStoreHydrated();

  const completedChapters = useStore((s) => s.completedChapters ?? []);
  const streak = useStore((s) => s.streak ?? 0);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const xp = useStore((s) => (typeof s.xp === "number" ? s.xp : 0));

  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  const analytics = useProgressAnalytics();
  const {
    subjectAccuracy,
    accuracyOverTime,
    practiceDistribution,
    recentSessions,
    overallReadiness,
    weakTopics,
    totalStats,
  } = analytics;

  const [timeRange, setTimeRange] = useState<TimeRange>(14);

  // BMS completion %
  const bmsProgressPct = useMemo(() => {
    const total = alleKapitel.reduce((s, k) => s + (k?.unterkapitel?.length ?? 0), 0);
    if (total === 0) return 0;
    const done = alleKapitel.reduce(
      (s, k) =>
        s + (k?.unterkapitel?.filter((u) => u?.id && completedChapters.includes(u.id)).length ?? 0),
      0
    );
    return Math.round((done / total) * 100);
  }, [completedChapters]);

  const level = getLevelFromXP(xp);
  const levelProgress = getLevelProgressPercent(xp);
  const levelName = getLevelName(level);

  // Filter accuracyOverTime: only days with activity for chart
  const filteredAccuracy = useMemo(() => {
    return accuracyOverTime.slice(-timeRange);
  }, [accuracyOverTime, timeRange]);

  // Accuracy chart: connect only active days (skip zeros)
  const activeAccuracy = useMemo(() => {
    return filteredAccuracy.filter((d) => d.overall > 0);
  }, [filteredAccuracy]);

  // Weak topics (top 5 across all subjects)
  const topWeakTopics = useMemo(() => weakTopics.slice(0, 5), [weakTopics]);

  // Overall accuracy %
  const overallAccuracy = useMemo(() => {
    if (totalStats.questionsAnswered === 0) return 0;
    return Math.round((totalStats.correctAnswers / totalStats.questionsAnswered) * 100);
  }, [totalStats]);

  const hasAnyData = hydrated && (recentSessions.length > 0 || totalStats.questionsAnswered > 0);

  if (isLocked("fortschritt")) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Paywall feature="Fortschritt & Analyse">
          <div className="text-center py-12 space-y-3">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Fortschritt</h2>
            <p className="text-[var(--muted)]">
              Dein analytisches Dashboard — Leistung, Trends und Schwachstellen auf einen Blick.
            </p>
          </div>
        </Paywall>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--dashboard-bg)]">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-12">

        {/* ── Hero Heading ─────────────────────────────────── */}
        <div className="hero-orbs text-center mb-8 py-6">
          <h1 className="heading-glow text-2xl sm:text-[2.75rem] sm:leading-tight font-bold text-[var(--text-primary)] mb-2">
            Fortschritt
          </h1>
          <p className="text-[var(--muted)]">
            Leistung, Trends und Schwachstellen auf einen Blick.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            HERO: Readiness Ring + Key Stats
        ══════════════════════════════════════════════════════ */}
        <div className="card-glass p-6 mb-6">
          <div className="flex items-center gap-8">
            {/* Readiness Ring */}
            <div className="shrink-0">
              <ReadinessRing value={overallReadiness} />
            </div>

            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              {/* Level */}
              <div>
                <p className="text-xs text-[var(--muted)] mb-1">Level {level}</p>
                <p className="text-lg font-bold text-[var(--text-primary)]">{levelName}</p>
                <Progress
                  value={levelProgress}
                  className="h-1 rounded-full bg-[var(--border)]/40 mt-1.5"
                  barClassName="bg-linear-to-r from-[var(--accent)] to-emerald-400"
                />
                <p className="text-[10px] text-[var(--muted)] mt-1">
                  <AnimatedCounter value={xp} /> XP
                </p>
              </div>

              {/* Streak */}
              <div>
                <p className="text-xs text-[var(--muted)] mb-1">Streak</p>
                <div className="flex items-center gap-1.5">
                  <StreakFlameIcon streak={streak} hasActivityToday={hasActivityToday} size="sm" className="w-5 h-5" />
                  <span className="text-lg font-bold text-[var(--text-primary)]">
                    <AnimatedCounter value={streak} /> Tage
                  </span>
                </div>
                <p className="text-[10px] text-[var(--muted)] mt-1.5">
                  {hasActivityToday ? "Heute aktiv" : "Heute noch nicht gelernt"}
                </p>
              </div>

              {/* Accuracy */}
              <div>
                <p className="text-xs text-[var(--muted)] mb-1">Genauigkeit</p>
                <p className={`text-lg font-bold tabular-nums ${scoreColor(overallAccuracy)}`}>
                  {overallAccuracy}%
                </p>
                <p className="text-[10px] text-[var(--muted)] mt-1.5">
                  <AnimatedCounter value={totalStats.correctAnswers} /> / <AnimatedCounter value={totalStats.questionsAnswered} /> richtig
                </p>
              </div>

              {/* BMS Progress */}
              <div>
                <p className="text-xs text-[var(--muted)] mb-1">BMS Kapitel</p>
                <p className="text-lg font-bold text-[var(--text-primary)] tabular-nums">
                  {bmsProgressPct}%
                </p>
                <Progress
                  value={bmsProgressPct}
                  className="h-1 rounded-full bg-[var(--border)]/40 mt-1.5"
                  barClassName="bg-linear-to-r from-[var(--accent)] to-teal-400"
                />
                <p className="text-[10px] text-[var(--muted)] mt-1">
                  {totalStats.chaptersCompleted}/{totalStats.totalChapters} abgeschlossen
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats strip below */}
          <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-[var(--border)]/30">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]"><AnimatedCounter value={totalStats.learningDays} /></strong> Lerntage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-violet-500" />
              <span className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]"><AnimatedCounter value={totalStats.totalMinutes} /></strong> Minuten
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]"><AnimatedCounter value={totalStats.questionsAnswered} /></strong> Fragen
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SUBJECT PERFORMANCE: 4 compact cards
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {(["biologie", "chemie", "physik", "mathematik"] as const).map((subject) => {
            const cfg = SUBJECT_CONFIG[subject];
            const acc = subjectAccuracy[subject];

            const dotClass: Record<string, string> = {
              emerald: "bg-emerald-500", red: "bg-red-500", blue: "bg-blue-500", amber: "bg-amber-500",
            };
            const borderClass: Record<string, string> = {
              emerald: "border-emerald-500/20", red: "border-red-500/20", blue: "border-blue-500/20", amber: "border-amber-500/20",
            };

            return (
              <div key={subject} className={`card-glass p-4 border-t-2 ${borderClass[cfg.color]}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${dotClass[cfg.color]}`} />
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{cfg.label}</span>
                  </div>
                  <TrendIcon trend={acc?.trend ?? "stable"} />
                </div>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl font-bold tabular-nums text-[var(--text-primary)]">
                    {acc?.current ?? 0}%
                  </span>
                </div>

                <p className="text-[10px] text-[var(--muted)] mb-2">
                  {acc?.total ?? 0} Fragen
                </p>

                <MiniSparkline data={acc?.sparkline ?? []} color={cfg.chartColor} width={140} height={32} />
              </div>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════
            SCHWACHSTELLEN + CHARTS (2-column)
        ══════════════════════════════════════════════════════ */}
        {hasAnyData && (
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Accuracy Trend Chart — takes 2 cols */}
            <div className="col-span-2 card-glass p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  Genauigkeit im Zeitverlauf
                </h3>
                <div className="flex gap-1">
                  {([7, 14, 30] as const).map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        timeRange === range
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {range}T
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={activeAccuracy.length >= 2 ? activeAccuracy : filteredAccuracy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.3} />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "var(--muted)" }}
                    tickFormatter={(v: string) => {
                      const parts = v.split("-");
                      return `${parts[2]}.${parts[1]}`;
                    }}
                    interval="preserveStartEnd"
                  />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "var(--muted)" }} width={28} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    labelFormatter={(v: unknown) => {
                      const parts = String(v).split("-");
                      return `${parts[2]}.${parts[1]}.${parts[0]}`;
                    }}
                    formatter={(value?: number, name?: string) => [`${value ?? 0}%`, name ?? ""]}
                  />
                  <Line type="monotone" dataKey="overall" stroke="var(--accent)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--accent)" }} activeDot={{ r: 5 }} name="Gesamt" />
                  <Line type="monotone" dataKey="bio" stroke="#10b981" strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Bio" />
                  <Line type="monotone" dataKey="ch" stroke="#ef4444" strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Chemie" />
                  <Line type="monotone" dataKey="ph" stroke="#3b82f6" strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Physik" />
                  <Line type="monotone" dataKey="ma" stroke="#f59e0b" strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Mathe" />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2 justify-center">
                <span className="flex items-center gap-1 text-[10px] text-[var(--muted)]">
                  <span className="w-3 h-0.5 bg-[var(--accent)] inline-block rounded" /> Gesamt
                </span>
                {Object.entries(SUBJECT_CONFIG).map(([, cfg]) => (
                  <span key={cfg.label} className="flex items-center gap-1 text-[10px] text-[var(--muted)]">
                    <span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: cfg.chartColor }} /> {cfg.label.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>

            {/* Schwachstellen sidebar — 1 col */}
            <div className="card-glass p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">Top Schwachstellen</h3>
              </div>
              {topWeakTopics.length > 0 ? (
                <div className="space-y-3">
                  {topWeakTopics.map((t, i) => {
                    const cfg = SUBJECT_CONFIG[t.fach];
                    return (
                      <div key={`${t.fach}-${t.topic}-${i}`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[var(--text-secondary)] truncate flex-1 mr-2">{t.topic}</span>
                          <span className={`text-xs font-bold tabular-nums ${scoreColor(Math.round(t.successRate * 100))}`}>
                            {Math.round(t.successRate * 100)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-[var(--border)]/30 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${Math.round(t.successRate * 100)}%`,
                                backgroundColor: cfg?.chartColor ?? "var(--accent)",
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-[var(--muted)]">{cfg?.label.slice(0, 3) ?? t.fach}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Zap className="w-8 h-8 text-[var(--muted)] opacity-30 mb-2" />
                  <p className="text-xs text-[var(--muted)]">Absolviere Quizze, um Schwachstellen zu erkennen</p>
                </div>
              )}
              {topWeakTopics.length > 0 && (
                <Link
                  to="/schwachstellen"
                  className="flex items-center gap-1.5 mt-4 pt-3 border-t border-[var(--border)]/30 text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  Schwachstellen trainieren
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            PRACTICE DISTRIBUTION (full width)
        ══════════════════════════════════════════════════════ */}
        {hasAnyData && practiceDistribution.length > 0 && (
          <div className="card-glass p-5 mb-6">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Lernverteilung pro Woche
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={practiceDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.3} />
                <XAxis dataKey="week" tick={{ fontSize: 10, fill: "var(--muted)" }} />
                <YAxis tick={{ fontSize: 10, fill: "var(--muted)" }} width={28} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="bms" stackId="a" fill={SECTION_COLORS.bms} name="BMS" />
                <Bar dataKey="kff" stackId="a" fill={SECTION_COLORS.kff} name="KFF" />
                <Bar dataKey="tv" stackId="a" fill={SECTION_COLORS.tv} name="TV" />
                <Bar dataKey="sek" stackId="a" fill={SECTION_COLORS.sek} radius={[3, 3, 0, 0]} name="SEK" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-2 justify-center">
              {Object.entries(SECTION_COLORS).map(([key, color]) => (
                <span key={key} className="flex items-center gap-1 text-[10px] text-[var(--muted)]">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ backgroundColor: color }} />
                  {key.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            EMPTY STATE (no quiz data yet)
        ══════════════════════════════════════════════════════ */}
        {!hasAnyData && (
          <div className="card-glass p-10 text-center mb-6">
            <BarChart3 className="w-10 h-10 text-[var(--muted)] mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
              Noch keine Quiz-Ergebnisse
            </p>
            <p className="text-xs text-[var(--muted)] max-w-xs mx-auto">
              Sobald du BMS-, KFF- oder TV-Quizze absolvierst, erscheinen hier Trends und Analysen.
            </p>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            RECENT SESSIONS (compact timeline)
        ══════════════════════════════════════════════════════ */}
        {recentSessions.length > 0 && (
          <div className="card-glass p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Letzte Aktivitäten
              </h3>
              <Link to="/statistik" className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1">
                Alle anzeigen <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-1">
              {recentSessions.slice(0, 10).map((session, idx) => (
                <div
                  key={`${session.id}-${idx}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--surface)]/50 transition-colors"
                >
                  <span className="text-xs text-[var(--muted)] tabular-nums w-14 shrink-0">
                    {formatDate(session.date)}
                  </span>
                  {typeBadge(session.type)}
                  <span className="text-xs text-[var(--text-secondary)] truncate flex-1 min-w-0">
                    {subjectLabel(session.subject)}
                  </span>
                  <div className="flex items-center gap-2 w-32 shrink-0">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--border)]/30 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${session.percentage}%`,
                          backgroundColor:
                            session.percentage >= 70 ? "#10b981" : session.percentage >= 40 ? "#f59e0b" : "#ef4444",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[var(--muted)] tabular-nums w-8 text-right">
                      {session.score}/{session.total}
                    </span>
                  </div>
                  <span className={`text-sm font-bold tabular-nums w-10 text-right ${scoreColor(session.percentage)}`}>
                    {session.percentage}%
                  </span>
                  <span className="text-[10px] text-[var(--muted)] tabular-nums w-10 text-right">
                    {formatDuration(session.durationMinutes)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            NAVIGATION: Unterseiten
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-4 gap-3 mt-6">
          <Link to="/schwachstellen" className="card-glass p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4.5 h-4.5 text-[var(--accent)]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Schwachstellen</p>
              <p className="text-[10px] text-[var(--muted)]">Gezielt Lücken trainieren</p>
            </div>
          </Link>
          <Link to="/statistik" className="card-glass p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface)] flex items-center justify-center shrink-0">
              <BarChart3 className="w-4.5 h-4.5 text-[var(--muted)]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Statistik</p>
              <p className="text-[10px] text-[var(--muted)]">Fragen & Ergebnisse</p>
            </div>
          </Link>
          <Link to="/prognose" className="card-glass p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface)] flex items-center justify-center shrink-0">
              <TrendingUp className="w-4.5 h-4.5 text-[var(--muted)]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Prognose</p>
              <p className="text-[10px] text-[var(--muted)]">MedAT-Vorhersage</p>
            </div>
          </Link>
          <Link to="/performance" className="card-glass p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
              <Award className="w-4.5 h-4.5 text-[var(--accent)]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Erfolge</p>
              <p className="text-[10px] text-[var(--muted)]">Badges & Meilensteine</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
