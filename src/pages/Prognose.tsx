import { useMemo } from "react";
import type { ReactNode } from "react";
import { usePermissions } from "@/hooks/usePermissions";
import { Paywall } from "@/components/ui/paywall";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Link } from "react-router-dom";
import { useStore, type QuizResult } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShareResultButton } from "@/components/shared/ShareResultButton";
import { getPrognoseShareText } from "@/lib/shareUtils";
import { usePageTitle } from "@/hooks/usePageTitle";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import {
  TrendingUp,
  TrendingDown,
  Target,
  GraduationCap,
  BookOpen,
  Brain,
  MessageSquare,
  Heart,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Info,
  Clock,
  Crosshair,
  Minus,
} from "lucide-react";

/* ── Types ────────────────────────────────────── */

interface SectionScore {
  key: "bms" | "kff" | "tv" | "sek";
  label: string;
  icon: ReactNode;
  pct: number;
  points: number;
  maxPoints: number;
  weight: number;
  count: number;
  link: string;
}

interface UniChance {
  name: string;
  cutoff: number;
  status: "green" | "yellow" | "red";
}

type TrendDirection = "up" | "flat" | "down";

interface SectionTrend {
  key: string;
  label: string;
  direction: TrendDirection;
  /** Last N data points (pct) for sparkline */
  dataPoints: number[];
}

/* ── Helpers ──────────────────────────────────── */

/** Calculate trend from quiz results: compare first half EMA vs second half EMA */
function calcTrend(results: QuizResult[]): { direction: TrendDirection; dataPoints: number[] } {
  if (results.length < 3) return { direction: "flat", dataPoints: [] };

  const sorted = [...results].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Build data points: rolling pct per result (max 12 for sparkline)
  const all = sorted.map((r) => (r.total > 0 ? (r.score / r.total) * 100 : 0));
  const dataPoints = all.slice(-12);

  // Compare first half vs second half average
  const mid = Math.floor(sorted.length / 2);
  const firstHalf = sorted.slice(0, mid);
  const secondHalf = sorted.slice(mid);
  const avgFirst = firstHalf.reduce((s, r) => s + r.score / r.total, 0) / firstHalf.length;
  const avgSecond = secondHalf.reduce((s, r) => s + r.score / r.total, 0) / secondHalf.length;
  const diff = avgSecond - avgFirst;

  const direction: TrendDirection = diff > 0.03 ? "up" : diff < -0.03 ? "down" : "flat";
  return { direction, dataPoints };
}

/** Estimate days to reach target readiness based on improvement rate */
function estimateDaysToReady(
  results: QuizResult[],
  currentPct: number,
  targetPct = 80
): number | null {
  if (currentPct >= targetPct) return 0;
  if (results.length < 5) return null;

  const sorted = [...results].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const firstDate = new Date(sorted[0].date).getTime();
  const lastDate = new Date(sorted[sorted.length - 1].date).getTime();
  const daySpan = (lastDate - firstDate) / (1000 * 60 * 60 * 24);
  if (daySpan < 1) return null;

  // Compare first-third EMA vs last-third EMA
  const third = Math.max(1, Math.floor(sorted.length / 3));
  const earlyPct = ema(sorted.slice(0, third));
  const latePct = ema(sorted.slice(-third));
  const improvement = latePct - earlyPct; // pct points gained

  if (improvement <= 0.5) return null; // no meaningful improvement

  const pctPerDay = improvement / daySpan;
  const remaining = targetPct - currentPct;
  const days = Math.ceil(remaining / pctPerDay);
  return Math.min(days, 365); // cap at 1 year
}

/* ── Sparkline SVG ───────────────────────────── */

function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (data.length < 2) return null;

  const w = 80;
  const h = 24;
  const padding = 2;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (w - padding * 2);
    const y = h - padding - ((v - min) / range) * (h - padding * 2);
    return `${x},${y}`;
  });

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block">
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dot on last point */}
      {(() => {
        const last = points[points.length - 1].split(",");
        return <circle cx={last[0]} cy={last[1]} r="2.5" fill={color} />;
      })()}
    </svg>
  );
}

/** Exponential moving average — recent results weigh more */
function ema(results: QuizResult[], alpha = 0.3): number {
  if (results.length === 0) return 0;
  // Sort oldest → newest
  const sorted = [...results].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  let avg = sorted[0].score / sorted[0].total;
  for (let i = 1; i < sorted.length; i++) {
    const ratio = sorted[i].score / sorted[i].total;
    avg = alpha * ratio + (1 - alpha) * avg;
  }
  return avg * 100;
}

const MAX_TOTAL = 306;

const SECTION_META: {
  key: SectionScore["key"];
  label: string;
  weight: number;
  maxPoints: number;
  icon: ReactNode;
  link: string;
}[] = [
  {
    key: "bms",
    label: "BMS",
    weight: 0.4,
    maxPoints: 122.4,
    icon: <BookOpen className="w-5 h-5" />,
    link: "/bms",
  },
  {
    key: "kff",
    label: "KFF",
    weight: 0.4,
    maxPoints: 122.4,
    icon: <Brain className="w-5 h-5" />,
    link: "/kff",
  },
  {
    key: "tv",
    label: "TV",
    weight: 0.1,
    maxPoints: 30.6,
    icon: <MessageSquare className="w-5 h-5" />,
    link: "/tv",
  },
  {
    key: "sek",
    label: "SEK",
    weight: 0.1,
    maxPoints: 30.6,
    icon: <Heart className="w-5 h-5" />,
    link: "/sek",
  },
];

const UNI_CUTOFFS: { name: string; cutoff: number }[] = [
  { name: "MedUni Wien", cutoff: 82 },
  { name: "MedUni Innsbruck", cutoff: 80 },
  { name: "MedUni Graz", cutoff: 78 },
  { name: "JKU Linz", cutoff: 75 },
];

/* ── SVG Gauge ────────────────────────────────── */

function ScoreGauge({ score, max, pct }: { score: number; max: number; pct: number }) {
  const r = 80;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (pct / 100) * circumference;
  const color = pct >= 80 ? "text-green-500" : pct >= 60 ? "text-yellow-500" : "text-red-500";
  const bgColor =
    pct >= 80 ? "stroke-green-500" : pct >= 60 ? "stroke-yellow-500" : "stroke-red-500";

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          className="text-[var(--muted)]"
        />
        {/* Progress arc */}
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          strokeWidth="12"
          strokeLinecap="round"
          className={bgColor}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
        {/* Score text */}
        <text
          x="100"
          y="90"
          textAnchor="middle"
          className={`fill-current ${color} text-3xl font-bold`}
          fontSize="32"
          fontWeight="700"
        >
          {Math.round(score)}
        </text>
        <text x="100" y="112" textAnchor="middle" className="fill-muted-foreground" fontSize="14">
          von {max}
        </text>
        <text
          x="100"
          y="134"
          textAnchor="middle"
          className={`fill-current ${color} font-semibold`}
          fontSize="18"
          fontWeight="600"
        >
          {pct.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
}

/* ── Uni Chance Card ──────────────────────────── */

function UniCard({ uni, scorePct }: { uni: { name: string; cutoff: number }; scorePct: number }) {
  const diff = scorePct - uni.cutoff;
  const status: UniChance["status"] = diff > 5 ? "green" : diff >= -5 ? "yellow" : "red";

  const statusConfig = {
    green: {
      bg: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      label: "Gute Chancen",
      badge: "success" as const,
    },
    yellow: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
      label: "Knapp",
      badge: "warning" as const,
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
      icon: <Info className="w-5 h-5 text-red-500" />,
      label: "Noch Arbeit nötig",
      badge: "danger" as const,
    },
  };

  const cfg = statusConfig[status];

  return (
    <div className={`rounded-xl border p-4 ${cfg.bg}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {cfg.icon}
          <span className="font-semibold text-[var(--text-primary)]">{uni.name}</span>
        </div>
        <Badge variant={cfg.badge}>{cfg.label}</Badge>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Cutoff ~{uni.cutoff}%</span>
        <span className="font-medium">
          {diff > 0 ? "+" : ""}
          {diff.toFixed(1)}% {diff >= 0 ? "darüber" : "darunter"}
        </span>
      </div>
    </div>
  );
}

/* ── Section Card ─────────────────────────────── */

function SectionCard({ s }: { s: SectionScore }) {
  const color = s.pct >= 80 ? "text-green-600" : s.pct >= 60 ? "text-yellow-600" : "text-red-500";
  const barClass = s.pct >= 80 ? "bg-green-500" : s.pct >= 60 ? "bg-yellow-500" : "bg-red-500";

  // What would 90% give?
  const potentialPoints = s.weight * 0.9 * MAX_TOTAL;
  const currentPoints = s.weight * (s.pct / 100) * MAX_TOTAL;
  const uplift = potentialPoints - currentPoints;

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30">
            {s.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[var(--text-primary)]">{s.label}</span>
              <span className={`text-xl font-bold ${color}`}>{s.pct.toFixed(0)}%</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {s.points.toFixed(1)} / {s.maxPoints.toFixed(1)} Punkte (Gewicht{" "}
              {(s.weight * 100).toFixed(0)}%)
            </div>
          </div>
        </div>
        <Progress value={s.pct} className="mb-2" barClassName={barClass} />
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{s.count} Ergebnisse</span>
          {s.pct < 90 && uplift > 1 && (
            <span className="text-[var(--accent)]/60">Auf 90% = +{uplift.toFixed(1)} Punkte</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Trend Section ───────────────────────────── */

function TrendSection({ trends }: { trends: SectionTrend[] }) {
  const trendConfig: Record<
    TrendDirection,
    { icon: ReactNode; color: string; label: string; sparkColor: string }
  > = {
    up: {
      icon: <TrendingUp className="w-4 h-4" />,
      color: "text-green-600 dark:text-green-400",
      label: "Aufwärtstrend",
      sparkColor: "#22c55e",
    },
    flat: {
      icon: <Minus className="w-4 h-4" />,
      color: "text-gray-500 dark:text-gray-400",
      label: "Stabil",
      sparkColor: "#9ca3af",
    },
    down: {
      icon: <TrendingDown className="w-4 h-4" />,
      color: "text-red-500 dark:text-red-400",
      label: "Abwärtstrend",
      sparkColor: "#ef4444",
    },
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-[var(--accent)]" />
        Dein Trend
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {trends.map((t) => {
          const cfg = trendConfig[t.direction];
          return (
            <Card key={t.key}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-1.5 ${cfg.color}`}>
                      {cfg.icon}
                      <span className="font-semibold text-[var(--text-primary)]">{t.label}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkline data={t.dataPoints} color={cfg.sparkColor} />
                    <Badge
                      variant={
                        t.direction === "up"
                          ? "success"
                          : t.direction === "down"
                            ? "danger"
                            : "default"
                      }
                    >
                      {cfg.label}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {trends.every((t) => t.dataPoints.length < 2) && (
        <p className="text-xs text-muted-foreground/70 mt-2">
          Mehr Ergebnisse nötig, um Trends anzuzeigen.
        </p>
      )}
    </div>
  );
}

/* ── Readiness Section ───────────────────────── */

function ReadinessSection({
  sections,
  quizResults,
  totalPct,
}: {
  sections: SectionScore[];
  quizResults: QuizResult[];
  totalPct: number;
}) {
  const TARGET = 80;
  const daysEstimate = useMemo(
    () => estimateDaysToReady(quizResults, totalPct, TARGET),
    [quizResults, totalPct]
  );

  const onTrack = totalPct >= TARGET || (daysEstimate !== null && daysEstimate <= 60);

  const readinessLabel = useMemo(() => {
    if (totalPct >= TARGET) return "Bereit!";
    if (daysEstimate === null) return "Mehr Daten nötig";
    if (daysEstimate <= 14) return `Bereit in ~${daysEstimate} Tagen`;
    if (daysEstimate <= 60) return `Bereit in ~${Math.ceil(daysEstimate / 7)} Wochen`;
    return `Bereit in ~${Math.ceil(daysEstimate / 30)} Monaten`;
  }, [totalPct, daysEstimate]);

  const readinessColor =
    totalPct >= TARGET
      ? "text-green-600 dark:text-green-400"
      : onTrack
        ? "text-yellow-600 dark:text-yellow-400"
        : "text-red-500 dark:text-red-400";

  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-[var(--accent)]" />
        Prüfungsbereitschaft
      </h2>
      <Card>
        <CardContent className="p-6">
          {/* Overall readiness */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className={`text-lg font-bold ${readinessColor}`}>{readinessLabel}</p>
              <p className="text-sm text-muted-foreground">
                {totalPct >= TARGET
                  ? "Dein Niveau liegt über dem Zielwert."
                  : onTrack
                    ? "Du bist auf gutem Weg."
                    : "Mehr Aufwand nötig, um das Ziel zu erreichen."}
              </p>
            </div>
            <Badge variant={totalPct >= TARGET ? "success" : onTrack ? "warning" : "danger"}>
              {totalPct >= TARGET ? "Bereit" : onTrack ? "On track" : "Mehr Aufwand nötig"}
            </Badge>
          </div>

          {/* Per-section readiness bars */}
          <div className="space-y-4">
            {sections
              .filter((s) => s.count > 0)
              .map((s) => {
                const barPct = Math.min(s.pct, 100);
                const barColor =
                  s.pct >= 80 ? "bg-green-500" : s.pct >= 60 ? "bg-yellow-500" : "bg-red-500";
                return (
                  <div key={s.key}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {s.label}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {s.pct.toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-[var(--muted)] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor} transition-all duration-700`}
                        style={{ width: `${barPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Target line legend */}
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <div className="w-4 h-0.5 bg-gray-400" />
            <span>Ziel: {TARGET}%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ── Weak Topics Section ─────────────────────── */

function WeakTopicsSection() {
  const getWeakestTopics = useAdaptiveStore((s) => s.getWeakestTopics);
  const weakTopics = useMemo(() => getWeakestTopics(5), [getWeakestTopics]);

  const fachColors: Record<string, string> = {
    biologie: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    chemie: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    physik: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    mathematik: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  };

  if (weakTopics.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Crosshair className="w-5 h-5 text-[var(--accent)]" />
          Top 5 Schwachstellen
        </h2>
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            <p>
              Noch keine Schwachstellen erkannt. Beantworte mehr Fragen, um Schwachstellen zu
              identifizieren.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        <Crosshair className="w-5 h-5 text-[var(--accent)]" />
        Top 5 Schwachstellen
      </h2>
      <Card>
        <CardContent className="p-2">
          <div className="divide-y divide-[var(--border)]">
            {weakTopics.map((topic, i) => {
              const ratePct = Math.round(topic.rate * 100);
              const barColor =
                ratePct >= 60 ? "bg-yellow-500" : ratePct >= 40 ? "bg-orange-500" : "bg-red-500";
              return (
                <div key={topic.stichwortId} className="flex items-center gap-4 px-4 py-3">
                  <span className="text-sm font-bold text-muted-foreground w-5 text-center">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-[var(--text-primary)] truncate">
                        {topic.thema}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${fachColors[topic.fach] ?? "bg-gray-100 text-gray-600"}`}
                      >
                        {topic.fach.charAt(0).toUpperCase() + topic.fach.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
                        <div
                          className={`h-full rounded-full ${barColor}`}
                          style={{ width: `${ratePct}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground w-10 text-right">
                        {ratePct}%
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/schwachstellen"
                    className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition"
                  >
                    Üben
                  </Link>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ── Empty State ──────────────────────────────── */

function EmptyState() {
  return (
    <div className="max-w-lg mx-auto text-center py-16 px-4">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 flex items-center justify-center">
        <Target className="w-10 h-10 text-[var(--accent)]" />
      </div>
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Noch nicht genug Daten</h2>
      <p className="text-muted-foreground mb-6">
        Beantworte mindestens 20 Fragen in verschiedenen Testteilen, damit wir eine aussagekräftige
        Prognose berechnen können.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/bms"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent)] transition font-medium"
        >
          <BookOpen className="w-4 h-4" /> BMS üben
        </Link>
        <Link
          to="/kff"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/5 dark:border-[var(--accent)] dark:text-[var(--accent)]/30 dark:hover:bg-[var(--accent)]/10/20 transition font-medium"
        >
          <Brain className="w-4 h-4" /> KFF üben
        </Link>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────── */

export default function Prognose() {
  usePageTitle("Prognose");
  const { isLocked } = usePermissions();
  const quizResults = useStore((s) => s.quizResults);

  const totalAnswered = useMemo(
    () => quizResults.reduce((sum, r) => sum + r.total, 0),
    [quizResults]
  );

  const sections: SectionScore[] = useMemo(() => {
    return SECTION_META.map((meta) => {
      const results = quizResults.filter((r) => r.type === meta.key);
      const pct = results.length > 0 ? ema(results) : 0;
      const points = (pct / 100) * meta.maxPoints;
      return {
        ...meta,
        pct,
        points,
        count: results.length,
      };
    });
  }, [quizResults]);

  const totalScore = useMemo(() => sections.reduce((sum, s) => sum + s.points, 0), [sections]);
  const totalPct = (totalScore / MAX_TOTAL) * 100;

  const weakest = useMemo(() => {
    const withData = sections.filter((s) => s.count > 0);
    if (withData.length === 0) return null;
    return withData.reduce((min, s) => (s.pct < min.pct ? s : min));
  }, [sections]);

  const sortedUnis = useMemo(() => {
    return [...UNI_CUTOFFS].sort((a, b) => {
      const diffA = totalPct - a.cutoff;
      const diffB = totalPct - b.cutoff;
      return diffB - diffA; // best chance first
    });
  }, [totalPct]);

  // Tips per section
  const tips: Record<string, string> = {
    bms: "Fokussiere dich auf die Kapitel mit den meisten Fragen: Biologie und Chemie machen zusammen ~70% der BMS-Fragen aus.",
    kff: "Übe täglich Zahlenfolgen und Implikationen — diese beiden Untertests bieten das größte Verbesserungspotenzial.",
    tv: "Lies den Text zuerst komplett durch, markiere Schlüsselwörter, dann beantworte die Fragen. Zeitmanagement ist entscheidend.",
    sek: "Emotionen erkennen lässt sich gut trainieren. Übe mit den SEK-Aufgaben und achte auf Mikroexpressionen.",
  };

  const bestUniName = useMemo(() => {
    const green = sortedUnis.find((u) => totalPct - u.cutoff > 5);
    return green?.name ?? null;
  }, [sortedUnis, totalPct]);

  // Trend per section
  const sectionTrends: SectionTrend[] = useMemo(() => {
    return SECTION_META.map((meta) => {
      const results = quizResults.filter((r) => r.type === meta.key);
      const { direction, dataPoints } = calcTrend(results);
      return { key: meta.key, label: meta.label, direction, dataPoints };
    });
  }, [quizResults]);

  if (isLocked("prognose")) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Paywall feature="Prüfungstag-Prognose">
          <div className="text-center py-12 space-y-3">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Prüfungstag-Prognose</h2>
            <p className="text-[var(--muted)]">
              Erfahre deine voraussichtliche MedAT-Punktzahl — einmalig €29,90.
            </p>
          </div>
        </Paywall>
      </div>
    );
  }

  if (totalAnswered < 20) return <EmptyState />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Fortschritt", href: "/fortschritt" }, { label: "Prognose" }]} />
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-[var(--accent)]/60 mb-2">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wide">MedAT Prognose</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Deine Punkteprognose</h1>
        <p className="text-muted-foreground mt-1">
          Basierend auf <AnimatedCounter value={quizResults.length} /> Übungsergebnissen (
          <AnimatedCounter value={totalAnswered} /> Fragen)
        </p>
      </div>

      {/* Gauge */}
      <Card>
        <CardContent className="py-8 flex flex-col items-center">
          <ScoreGauge score={totalScore} max={MAX_TOTAL} pct={totalPct} />
          <p className="mt-4 text-sm text-muted-foreground">
            Geschätzter Gesamtscore (gewichtet: BMS 40%, KFF 40%, TV 10%, SEK 10%)
          </p>
        </CardContent>
      </Card>

      {/* Share */}
      <ShareResultButton text={getPrognoseShareText(totalPct, bestUniName)} />

      {/* Uni Chances */}
      <div>
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
          Uni-Chancen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sortedUnis.map((uni) => (
            <UniCard key={uni.name} uni={uni} scorePct={totalPct} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 mt-2">
          * Cutoffs basieren auf Erfahrungswerten vergangener Jahre und können variieren.
        </p>
      </div>

      {/* Section Breakdown */}
      <div>
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-[var(--accent)]" />
          Testteil-Aufschlüsselung
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((s) => (
            <SectionCard key={s.key} s={s} />
          ))}
        </div>
      </div>

      {/* Recommendation */}
      {weakest && (
        <Card className="border-[var(--accent)]/20 dark:border-[var(--accent)] bg-[var(--accent)]/5/50 dark:bg-[var(--accent)]/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[var(--accent)]/30">
              <AlertTriangle className="w-5 h-5" />
              Empfehlung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              Dein schwächster Bereich ist <strong>{weakest.label}</strong> mit{" "}
              <strong>{weakest.pct.toFixed(0)}%</strong>. Hier liegt dein größtes
              Verbesserungspotenzial.
            </p>
            <p className="text-muted-foreground text-sm mb-4">{tips[weakest.key]}</p>
            <Link
              to={weakest.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent)] transition font-medium text-sm"
            >
              {weakest.label} trainieren <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      )}

      {/* ── Prüfungsreife-Dashboard ─────────────── */}

      {/* Trend Section */}
      <TrendSection trends={sectionTrends} />

      {/* Readiness Section */}
      <ReadinessSection sections={sections} quizResults={quizResults} totalPct={totalPct} />

      {/* Top 5 Weak Topics */}
      <WeakTopicsSection />
    </div>
  );
}
