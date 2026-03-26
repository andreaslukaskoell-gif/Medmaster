import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
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
  Target,
  BarChart3,
  TrendingUp,
  Award,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  CheckCircle2,
  BookOpen,
  CalendarDays,
  Timer,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { Progress } from "@/components/ui/progress";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useStore, useStoreHydrated } from "@/store/useStore";
import { useProgressAnalytics } from "@/hooks/useProgressAnalytics";
import { alleKapitel } from "@/data/bmsKapitel";
import { getLevelFromXP, getLevelProgressPercent } from "@/lib/progression";
import { useViewportMode } from "@/hooks/useViewportMode";

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

// ── Mini Sparkline (pure SVG) ───────────────────────────────
function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const maxVal = Math.max(...data, 1);
  const w = 112;
  const h = 32;
  const pad = 2;

  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - 2 * pad);
    const y = h - pad - (v / maxVal) * (h - 2 * pad);
    return `${x},${y}`;
  });

  const hasData = data.some((v) => v > 0);
  if (!hasData) {
    return (
      <svg width={w} height={h} className="opacity-30">
        <line
          x1={pad}
          y1={h / 2}
          x2={w - pad}
          y2={h / 2}
          stroke={color}
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
      </svg>
    );
  }

  return (
    <svg width={w} height={h}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points.join(" ")}
      />
    </svg>
  );
}

// ── Trend Icon ──────────────────────────────────────────────
function TrendIcon({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up") return <ArrowUpRight className="w-4 h-4 text-emerald-500" />;
  if (trend === "down") return <ArrowDownRight className="w-4 h-4 text-red-500" />;
  return <Minus className="w-4 h-4 text-[var(--muted)]" />;
}

// ── Score color helper ──────────────────────────────────────
function scoreColor(pct: number): string {
  if (pct >= 70) return "text-emerald-500";
  if (pct >= 40) return "text-amber-500";
  return "text-red-500";
}

function scoreBg(pct: number): string {
  if (pct >= 70) return "bg-emerald-500/10";
  if (pct >= 40) return "bg-amber-500/10";
  return "bg-red-500/10";
}

// ── Type badge color ────────────────────────────────────────
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
    <span
      className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}
    >
      {type === "simulation" ? "SIM" : (type || "BMS").toUpperCase()}
    </span>
  );
}

// ── Format duration ─────────────────────────────────────────
function formatDuration(minutes?: number): string {
  if (!minutes) return "--";
  if (minutes < 1) return "<1 Min";
  if (minutes < 60) return `${Math.round(minutes)} Min`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  return `${h}h ${m}m`;
}

// ── Format date ─────────────────────────────────────────────
function formatDate(dateStr: string): string {
  // Handle ISO "2026-03-20" format
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) return `${isoMatch[3]}.${isoMatch[2]}.${isoMatch[1]}`;
  // Handle German "20.3.2026" format — already in display format
  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateStr)) return dateStr;
  return dateStr;
}

// ── Subject label for session ───────────────────────────────
function subjectLabel(subject?: string): string {
  if (!subject) return "--";
  return SUBJECT_CONFIG[subject]?.label ?? subject;
}

// ════════════════════════════════════════════════════════════
// Main component
// ════════════════════════════════════════════════════════════

export default function FortschrittPage() {
  usePageTitle("Fortschritt");
  const { isMobile } = useViewportMode();
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

  // Filter accuracyOverTime by selected timeRange
  const filteredAccuracy = useMemo(() => {
    return accuracyOverTime.slice(-timeRange);
  }, [accuracyOverTime, timeRange]);

  // Weak topics grouped by subject (top 2 per subject)
  const weakBySubject = useMemo(() => {
    const grouped: Record<string, string[]> = {};
    for (const t of weakTopics) {
      if (!grouped[t.fach]) grouped[t.fach] = [];
      if (grouped[t.fach].length < 2) grouped[t.fach].push(t.topic);
    }
    return grouped;
  }, [weakTopics]);

  // Wait for store hydration to avoid flashing empty state when data exists in localStorage
  const hasAnyData = hydrated && (recentSessions.length > 0 || totalStats.questionsAnswered > 0);

  return (
    <div className="min-h-screen bg-[var(--dashboard-bg)]">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-12">
        {/* ── Hero ──────────────────────────────────────── */}
        <div className="hero-orbs text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Fortschritt</h1>
          <p className="text-[var(--muted)]">
            Dein analytisches Dashboard — Leistung, Trends und Schwachstellen auf einen Blick.
          </p>
        </div>

        {/* ── Quick Stats Bar ───────────────────────────── */}
        <div className="card-glass mb-6 p-5">
          <div className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-4"} gap-4 items-center`} data-mobile-keep>
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">Level</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                <AnimatedCounter value={level} />
              </p>
              <div className="mt-1.5">
                <Progress
                  value={levelProgress}
                  className="h-1.5 rounded-full bg-[var(--border)]/40"
                  barClassName="bg-linear-to-r from-[var(--accent)] to-emerald-400"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">XP</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                <AnimatedCounter value={xp} />
              </p>
              <p className="text-[10px] text-[var(--muted)] mt-1.5">Gesamte Erfahrungspunkte</p>
            </div>
            <div className="flex items-center gap-2">
              <StreakFlameIcon
                streak={streak}
                hasActivityToday={hasActivityToday}
                size="sm"
                className="w-6 h-6 text-[var(--accent)]"
              />
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-wide">Streak</p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">
                  <AnimatedCounter value={streak} suffix=" Tage" />
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">BMS Kapitel</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                <AnimatedCounter value={bmsProgressPct} suffix="%" />
              </p>
              <div className="mt-1.5">
                <Progress
                  value={bmsProgressPct}
                  className="h-1.5 rounded-full bg-[var(--border)]/40"
                  barClassName="bg-linear-to-r from-[var(--accent)] to-teal-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Subject Performance Grid ──────────────────── */}
        <div className={`grid ${isMobile ? "grid-cols-2 gap-3" : "grid-cols-4 gap-4"} mb-8`} data-mobile-keep>
          {(["biologie", "chemie", "physik", "mathematik"] as const).map((subject) => {
            const cfg = SUBJECT_CONFIG[subject];
            const acc = subjectAccuracy[subject];
            const weak = weakBySubject[subject] ?? [];

            // Color classes by subject
            const accentClass: Record<string, string> = {
              emerald: "text-emerald-500",
              red: "text-red-500",
              blue: "text-blue-500",
              amber: "text-amber-500",
            };
            const borderClass: Record<string, string> = {
              emerald: "border-emerald-500/30",
              red: "border-red-500/30",
              blue: "border-blue-500/30",
              amber: "border-amber-500/30",
            };
            const dotClass: Record<string, string> = {
              emerald: "bg-emerald-500",
              red: "bg-red-500",
              blue: "bg-blue-500",
              amber: "bg-amber-500",
            };

            return (
              <div key={subject} className={`card-glass p-4 border-t-2 ${borderClass[cfg.color]}`}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${dotClass[cfg.color]}`} />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {cfg.label}
                  </span>
                </div>

                {/* Accuracy */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-3xl font-bold tabular-nums ${accentClass[cfg.color]}`}>
                    {acc?.current ?? 0}%
                  </span>
                  <TrendIcon trend={acc?.trend ?? "stable"} />
                </div>

                {/* Total questions */}
                <p className="text-xs text-[var(--muted)] mb-3">
                  {acc?.total ?? 0} Fragen beantwortet
                </p>

                {/* Sparkline */}
                <div className="mb-3">
                  <MiniSparkline data={acc?.sparkline ?? []} color={cfg.chartColor} />
                </div>

                {/* Weak topics */}
                {weak.length > 0 ? (
                  <div className="space-y-1">
                    <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">
                      Schwachstellen
                    </p>
                    {weak.map((t) => (
                      <p key={t} className="text-xs text-[var(--text-secondary)] truncate">
                        {t}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-[10px] text-[var(--muted)] italic">Keine Daten</p>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Charts: Two-column ────────────────────────── */}
        {hasAnyData && (
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "grid-cols-2 gap-6"} mb-8`}>
            {/* Accuracy Trend Chart */}
            <div className="card-glass p-5">
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
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={filteredAccuracy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "var(--muted)" }}
                    tickFormatter={(v: string) => {
                      const parts = v.split("-");
                      return `${parts[2]}.${parts[1]}`;
                    }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: "var(--muted)" }}
                    width={30}
                  />
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
                  />
                  <Line
                    type="monotone"
                    dataKey="overall"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    dot={false}
                    name="Gesamt"
                  />
                  <Line
                    type="monotone"
                    dataKey="bio"
                    stroke="#10b981"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                    name="Bio"
                  />
                  <Line
                    type="monotone"
                    dataKey="ch"
                    stroke="#ef4444"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                    name="Chemie"
                  />
                  <Line
                    type="monotone"
                    dataKey="ph"
                    stroke="#3b82f6"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                    name="Physik"
                  />
                  <Line
                    type="monotone"
                    dataKey="ma"
                    stroke="#f59e0b"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                    name="Mathe"
                  />
                </LineChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="flex items-center gap-4 mt-3 justify-center">
                <span className="flex items-center gap-1 text-[10px] text-[var(--muted)]">
                  <span className="w-3 h-0.5 bg-[var(--accent)] inline-block rounded" /> Gesamt
                </span>
                {Object.entries(SUBJECT_CONFIG).map(([, cfg]) => (
                  <span
                    key={cfg.label}
                    className="flex items-center gap-1 text-[10px] text-[var(--muted)]"
                  >
                    <span
                      className="w-3 h-0.5 inline-block rounded"
                      style={{ backgroundColor: cfg.chartColor }}
                    />{" "}
                    {cfg.label.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>

            {/* Practice Distribution Chart */}
            <div className="card-glass p-5">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                Lernverteilung pro Woche
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={practiceDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
                  <XAxis dataKey="week" tick={{ fontSize: 10, fill: "var(--muted)" }} />
                  <YAxis tick={{ fontSize: 10, fill: "var(--muted)" }} width={30} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar
                    dataKey="bms"
                    stackId="a"
                    fill={SECTION_COLORS.bms}
                    radius={[0, 0, 0, 0]}
                    name="BMS"
                  />
                  <Bar dataKey="kff" stackId="a" fill={SECTION_COLORS.kff} name="KFF" />
                  <Bar dataKey="tv" stackId="a" fill={SECTION_COLORS.tv} name="TV" />
                  <Bar
                    dataKey="sek"
                    stackId="a"
                    fill={SECTION_COLORS.sek}
                    radius={[3, 3, 0, 0]}
                    name="SEK"
                  />
                </BarChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="flex items-center gap-4 mt-3 justify-center">
                {Object.entries(SECTION_COLORS).map(([key, color]) => (
                  <span
                    key={key}
                    className="flex items-center gap-1 text-[10px] text-[var(--muted)]"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-sm inline-block"
                      style={{ backgroundColor: color }}
                    />
                    {key.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Empty state for charts ────────────────────── */}
        {!hasAnyData && (
          <div className="card-glass p-12 text-center mb-8">
            <BarChart3 className="w-12 h-12 text-[var(--muted)] mx-auto mb-4 opacity-40" />
            <p className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Noch keine Lerndaten
            </p>
            <p className="text-sm text-[var(--muted)] max-w-sm mx-auto mb-4">
              Absolviere deinen ersten Test, um hier detaillierte Analysen und Trends zu sehen.
            </p>
            <Link
              to="/bms"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Jetzt starten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* ── Recent Timeline ───────────────────────────── */}
        {recentSessions.length > 0 && (
          <div className="card-glass p-5 mb-8">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Letzte Aktivitäten
            </h3>
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-[80px_60px_120px_1fr_60px_80px] gap-3 px-3 py-2 text-[10px] text-[var(--muted)] uppercase tracking-wider font-medium">
                <span>Datum</span>
                <span>Typ</span>
                <span>Fach</span>
                <span>Ergebnis</span>
                <span className="text-right">Dauer</span>
                <span className="text-right">Quote</span>
              </div>
              {recentSessions.map((session, idx) => (
                <div
                  key={`${session.id}-${idx}`}
                  className={`grid grid-cols-[80px_60px_120px_1fr_60px_80px] gap-3 px-3 py-2.5 rounded-lg items-center ${scoreBg(session.percentage)}`}
                >
                  <span className="text-xs text-[var(--text-secondary)] tabular-nums">
                    {formatDate(session.date)}
                  </span>
                  {typeBadge(session.type)}
                  <span className="text-xs text-[var(--text-secondary)] truncate">
                    {subjectLabel(session.subject)}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--border)]/40 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${session.percentage}%`,
                          backgroundColor:
                            session.percentage >= 70
                              ? "#10b981"
                              : session.percentage >= 40
                                ? "#f59e0b"
                                : "#ef4444",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[var(--muted)] tabular-nums whitespace-nowrap">
                      {session.score}/{session.total}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--muted)] text-right tabular-nums">
                    {formatDuration(session.durationMinutes)}
                  </span>
                  <span
                    className={`text-sm font-bold text-right tabular-nums ${scoreColor(session.percentage)}`}
                  >
                    {session.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Total Learning Stats ──────────────────────── */}
        <div className="card-glass p-5 mb-8">
          <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Gesamtstatistik</h3>
          <div className={`grid ${isMobile ? "grid-cols-3 gap-3" : "grid-cols-5 gap-6"}`} data-mobile-keep>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
                <AnimatedCounter value={totalStats.questionsAnswered} />
              </p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Fragen</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                <Target className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
                <AnimatedCounter value={totalStats.correctAnswers} />
              </p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Richtig</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-2">
                <CalendarDays className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
                <AnimatedCounter value={totalStats.learningDays} />
              </p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Lerntage</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-2">
                <Timer className="w-5 h-5 text-violet-500" />
              </div>
              <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
                <AnimatedCounter value={totalStats.totalMinutes} />
              </p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Minuten</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
                {totalStats.chaptersCompleted}/{totalStats.totalChapters}
              </p>
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Kapitel</p>
            </div>
          </div>
        </div>

        {/* ── Navigation Cards ──────────────────────────── */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-3" : "grid-cols-2 gap-4"} stagger-children`}>
          <Link to="/schwachstellen">
            <div className="card-glass p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-[var(--text-primary)]">Schwachstellen</h2>
                <p className="text-sm text-[var(--muted)]">Gezielt Lücken trainieren</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </div>
          </Link>
          <Link to="/statistik">
            <div className="card-glass p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--foreground)]/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6 text-[var(--muted)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-[var(--text-primary)]">Statistik</h2>
                <p className="text-sm text-[var(--muted)]">Fragen & Ergebnisse</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </div>
          </Link>
          <Link to="/prognose">
            <div className="card-glass p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--foreground)]/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-[var(--muted)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-[var(--text-primary)]">Prognose</h2>
                <p className="text-sm text-[var(--muted)]">Punktestand & MedAT-Vorhersage</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </div>
          </Link>
          <Link to="/performance">
            <div className="card-glass p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-[var(--text-primary)]">Erfolge & Badges</h2>
                <p className="text-sm text-[var(--muted)]">Meilensteine & Auszeichnungen</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
