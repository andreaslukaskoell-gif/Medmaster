import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowRight, Trophy } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getLevelFromXP } from "@/lib/progression";

interface LevelGateProps {
  requiredLevel: number;
  featureLabel: string;
  children: ReactNode;
}

export function LevelGate({ requiredLevel, featureLabel, children }: LevelGateProps) {
  const xp = useStore((s) => s.xp);
  const level = getLevelFromXP(xp);

  if (level >= requiredLevel) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border-2 border-amber-200 dark:border-violet-800 bg-linear-to-b from-amber-50/80 to-violet-50/80 dark:from-slate-900 dark:to-violet-950/30 p-8 text-center shadow-xl">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-violet-900/50 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-amber-600 dark:text-violet-400" />
        </div>
        <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
          {featureLabel} ab Level {requiredLevel}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-2">
          Du bist aktuell Level {level}. Lese Kapitel und beantworte Quizfragen, um XP zu sammeln und Level {requiredLevel} zu erreichen.
        </p>
        <p className="text-sm text-amber-700 dark:text-violet-300 font-medium mb-6">
          +50 XP pro Kapitel · +10 XP pro richtige Quizfrage
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-medium transition-colors"
          >
            <Trophy className="w-4 h-4" />
            Zum Dashboard
          </Link>
          <Link
            to="/preise"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-violet-300 dark:border-violet-600 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/30 font-medium transition-colors"
          >
            Premium & XP-Boost
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
