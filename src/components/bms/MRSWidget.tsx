/**
 * MRSWidget — MedAT Readiness Score
 * Compact widget shown on the BMS overview page.
 * Driven by user_question_attempts via fetchMRSData().
 */
import { TrendingUp, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { MRSData } from "@/lib/supabaseBMSFragen";

/** Fallback wenn Supabase keine Versuche hat, aber Adaptive-Store (Kapitel-Quiz / Trainer) Daten hat. */
export type MRSFallback = {
  readiness: number;
  totalQuestions: number;
  totalCorrect?: number;
};

interface Props {
  mrs: MRSData | null;
  loading: boolean;
  /** Zeigen wenn mrs null aber Nutzer hat BMS-Antworten im lokalen Profil. */
  fallback?: MRSFallback | null;
}

function ScoreArc({ score }: { score: number }) {
  // Simple semicircle SVG arc
  const r = 40;
  const cx = 50,
    cy = 50;
  const angle = (score / 100) * 180;
  const rad = (angle - 180) * (Math.PI / 180);
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);
  const large = angle > 180 ? 1 : 0;

  const color = score >= 75 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <svg viewBox="0 0 100 55" className="w-28 h-16">
      {/* Track */}
      <path
        d={`M 10,50 A 40,40 0 0,1 90,50`}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
        strokeLinecap="round"
        className="dark:stroke-gray-700"
      />
      {/* Fill */}
      {score > 0 && (
        <path
          d={`M 10,50 A 40,40 0 ${large},1 ${x.toFixed(1)},${y.toFixed(1)}`}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />
      )}
      {/* Score text */}
      <text x="50" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill={color}>
        {score}
      </text>
      <text x="50" y="56" textAnchor="middle" fontSize="7" fill="#9ca3af">
        / 100
      </text>
    </svg>
  );
}

export function MRSWidget({ mrs, loading, fallback }: Props) {
  if (loading) {
    return (
      <Card>
        <CardContent className="p-4 flex items-center justify-center h-24">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (!mrs) {
    if (fallback && fallback.totalQuestions > 0) {
      const score =
        fallback.readiness > 0
          ? fallback.readiness
          : fallback.totalCorrect != null
            ? Math.round((100 * fallback.totalCorrect) / fallback.totalQuestions)
            : 0;
      const scoreLabel =
        score >= 80
          ? "Sehr gut 🟢"
          : score >= 60
            ? "Gut 🟡"
            : score >= 40
              ? "Ausbaufähig 🟠"
              : "Anfänger 🔴";
      return (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  MedAT Readiness (BMS)
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-0.5">
                  {scoreLabel}
                </p>
              </div>
              <ScoreArc score={score} />
            </div>
            <p className="text-[10px] text-muted-foreground">
              Basierend auf {fallback.totalQuestions} beantworteten BMS-Fragen (Kapitel-Quiz &
              Trainer). Für Retention & Kontinuität „Fragen-Trainer“ mit Modus „Supabase“ nutzen.
            </p>
          </CardContent>
        </Card>
      );
    }
    return (
      <Card className="border-dashed">
        <CardContent className="p-4 text-center space-y-1">
          <TrendingUp className="w-6 h-6 mx-auto text-gray-300 dark:text-gray-600" />
          <p className="text-xs text-muted-foreground font-medium">MedAT Readiness Score</p>
          <p className="text-xs text-muted-foreground">
            Melde dich an und beantworte BMS-Fragen im Fragen-Trainer, um deinen Score zu sehen.
          </p>
        </CardContent>
      </Card>
    );
  }

  const scoreLabel =
    mrs.score >= 80
      ? "Sehr gut 🟢"
      : mrs.score >= 60
        ? "Gut 🟡"
        : mrs.score >= 40
          ? "Ausbaufähig 🟠"
          : "Anfänger 🔴";

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              MedAT Readiness
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-0.5">
              {scoreLabel}
            </p>
          </div>
          <ScoreArc score={mrs.score} />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
            <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
              {mrs.fsrsRetention}%
            </p>
            <p className="text-[10px] text-muted-foreground">Retention</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
            <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
              {mrs.consistencyDays}
              <span className="font-normal text-[10px]">d</span>
            </p>
            <p className="text-[10px] text-muted-foreground">Kontinuität</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
            <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
              {mrs.totalAttempts}
            </p>
            <p className="text-[10px] text-muted-foreground">Antworten</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
