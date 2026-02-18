import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useStore, type QuizResult } from "@/store/useStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
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
} from "lucide-react";

/* ── Types ────────────────────────────────────── */

interface SectionScore {
  key: "bms" | "kff" | "tv" | "sek";
  label: string;
  icon: React.ReactNode;
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

/* ── Helpers ──────────────────────────────────── */

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
  icon: React.ReactNode;
  link: string;
}[] = [
  { key: "bms", label: "BMS", weight: 0.4, maxPoints: 122.4, icon: <BookOpen className="w-5 h-5" />, link: "/bms" },
  { key: "kff", label: "KFF", weight: 0.4, maxPoints: 122.4, icon: <Brain className="w-5 h-5" />, link: "/kff" },
  { key: "tv", label: "TV", weight: 0.1, maxPoints: 30.6, icon: <MessageSquare className="w-5 h-5" />, link: "/tv" },
  { key: "sek", label: "SEK", weight: 0.1, maxPoints: 30.6, icon: <Heart className="w-5 h-5" />, link: "/sek" },
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
  const color =
    pct >= 80 ? "text-green-500" : pct >= 60 ? "text-yellow-500" : "text-red-500";
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
          className="text-gray-200 dark:text-gray-700"
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
        <text x="100" y="90" textAnchor="middle" className={`fill-current ${color} text-3xl font-bold`} fontSize="32" fontWeight="700">
          {Math.round(score)}
        </text>
        <text x="100" y="112" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="14">
          von {max}
        </text>
        <text x="100" y="134" textAnchor="middle" className={`fill-current ${color} font-semibold`} fontSize="18" fontWeight="600">
          {pct.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
}

/* ── Uni Chance Card ──────────────────────────── */

function UniCard({ uni, scorePct }: { uni: { name: string; cutoff: number }; scorePct: number }) {
  const diff = scorePct - uni.cutoff;
  const status: UniChance["status"] =
    diff > 5 ? "green" : diff >= -5 ? "yellow" : "red";

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
          <span className="font-semibold text-gray-900 dark:text-gray-100">{uni.name}</span>
        </div>
        <Badge variant={cfg.badge}>{cfg.label}</Badge>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
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
  const color =
    s.pct >= 80 ? "text-green-600" : s.pct >= 60 ? "text-yellow-600" : "text-red-500";
  const barClass =
    s.pct >= 80 ? "bg-green-500" : s.pct >= 60 ? "bg-yellow-500" : "bg-red-500";

  // What would 90% give?
  const potentialPoints = s.weight * 0.9 * MAX_TOTAL;
  const currentPoints = s.weight * (s.pct / 100) * MAX_TOTAL;
  const uplift = potentialPoints - currentPoints;

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            {s.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{s.label}</span>
              <span className={`text-xl font-bold ${color}`}>{s.pct.toFixed(0)}%</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {s.points.toFixed(1)} / {s.maxPoints.toFixed(1)} Punkte (Gewicht {(s.weight * 100).toFixed(0)}%)
            </div>
          </div>
        </div>
        <Progress value={s.pct} className="mb-2" barClassName={barClass} />
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">{s.count} Ergebnisse</span>
          {s.pct < 90 && uplift > 1 && (
            <span className="text-primary-600 dark:text-primary-400">
              Auf 90% = +{uplift.toFixed(1)} Punkte
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Empty State ──────────────────────────────── */

function EmptyState() {
  return (
    <div className="max-w-lg mx-auto text-center py-16 px-4">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Target className="w-10 h-10 text-primary-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        Noch nicht genug Daten
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Beantworte mindestens 20 Fragen in verschiedenen Testteilen, damit wir eine aussagekräftige
        Prognose berechnen können.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/bms"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition font-medium"
        >
          <BookOpen className="w-4 h-4" /> BMS üben
        </Link>
        <Link
          to="/kff"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary-300 text-primary-700 hover:bg-primary-50 dark:border-primary-700 dark:text-primary-300 dark:hover:bg-primary-900/20 transition font-medium"
        >
          <Brain className="w-4 h-4" /> KFF üben
        </Link>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────── */

export default function Prognose() {
  const { quizResults } = useStore();

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

  const totalScore = useMemo(
    () => sections.reduce((sum, s) => sum + s.points, 0),
    [sections]
  );
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

  if (totalAnswered < 20) return <EmptyState />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wide">MedAT Prognose</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Deine Punkteprognose
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Basierend auf {quizResults.length} Übungsergebnissen ({totalAnswered} Fragen)
        </p>
      </div>

      {/* Gauge */}
      <Card>
        <CardContent className="py-8 flex flex-col items-center">
          <ScoreGauge score={totalScore} max={MAX_TOTAL} pct={totalPct} />
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Geschätzter Gesamtscore (gewichtet: BMS 40%, KFF 40%, TV 10%, SEK 10%)
          </p>
        </CardContent>
      </Card>

      {/* Uni Chances */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary-600" />
          Uni-Chancen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sortedUnis.map((uni) => (
            <UniCard key={uni.name} uni={uni} scorePct={totalPct} />
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * Cutoffs basieren auf Erfahrungswerten vergangener Jahre und können variieren.
        </p>
      </div>

      {/* Section Breakdown */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary-600" />
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
        <Card className="border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary-700 dark:text-primary-300">
              <AlertTriangle className="w-5 h-5" />
              Empfehlung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Dein schwächster Bereich ist <strong>{weakest.label}</strong> mit{" "}
              <strong>{weakest.pct.toFixed(0)}%</strong>. Hier liegt dein größtes
              Verbesserungspotenzial.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {tips[weakest.key]}
            </p>
            <Link
              to={weakest.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition font-medium text-sm"
            >
              {weakest.label} trainieren <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
