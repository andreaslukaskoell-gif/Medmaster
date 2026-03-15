import { Link } from "react-router-dom";
import { Target, BarChart3, TrendingUp, Award, ArrowRight } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useStore } from "@/store/useStore";
import { alleKapitel } from "@/data/bmsKapitel";
import { getLevelFromXP, getLevelProgressPercent } from "@/lib/progression";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { Progress } from "@/components/ui/progress";
import { EmptyState } from "@/components/ui/EmptyState";

export default function FortschrittPage() {
  usePageTitle("Fortschritt");
  const completedChapters = useStore((s) => s.completedChapters ?? []);
  const streak = useStore((s) => s.streak ?? 0);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const xp = useStore((s) => (typeof s.xp === "number" ? s.xp : 0));
  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  const bmsProgressPct = (() => {
    const total = alleKapitel.reduce((s, k) => s + (k?.unterkapitel?.length ?? 0), 0);
    if (total === 0) return 0;
    const done = alleKapitel.reduce(
      (s, k) =>
        s + (k?.unterkapitel?.filter((u) => u?.id && completedChapters.includes(u.id)).length ?? 0),
      0
    );
    return Math.round((done / total) * 100);
  })();

  const level = getLevelFromXP(xp);
  const levelProgress = getLevelProgressPercent(xp);

  return (
    <div className="min-h-screen bg-[var(--dashboard-bg)]">
      <div className="max-w-5xl mx-auto px-4 py-8 pb-12">
        {/* Hero title with orbs */}
        <div className="hero-orbs text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Fortschritt</h1>
          <p className="text-[var(--muted)]">
            Überblick, Schwachstellen, Statistik und Prognose – alles an einem Ort.
          </p>
        </div>

        {xp === 0 && completedChapters.length === 0 && (
          <EmptyState
            icon="chart"
            title="Noch keine Fortschrittsdaten"
            description="Starte mit dem Lernen um deinen Fortschritt zu verfolgen."
            action={{ label: "Jetzt lernen", href: "/bms" }}
          />
        )}

        {/* Quick overview — glass card */}
        <div className="card-glass mb-6 p-5">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">Level</p>
              <p className="text-xl font-bold text-[var(--text-primary)]">{level}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">XP</p>
              <p className="text-xl font-bold text-[var(--text-primary)]">{xp.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <StreakFlameIcon
                streak={streak}
                hasActivityToday={hasActivityToday}
                size="sm"
                className="w-5 h-5 text-[var(--accent)]"
              />
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-wide">Streak</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">{streak} Tage</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wide">BMS</p>
              <p className="text-xl font-bold text-[var(--text-primary)]">{bmsProgressPct} %</p>
            </div>
          </div>
        </div>

        {/* Level progress bar */}
        <div className="mb-8">
          <Progress
            value={levelProgress}
            className="h-2.5 rounded-full max-w-xs bg-[var(--border)]/40"
            barClassName="bg-linear-to-r from-[var(--accent)] to-[var(--accent-bio,#329556)] shadow-[0_0_8px_var(--accent)]"
          />
          <p className="text-xs text-[var(--muted)] mt-1.5">Fortschritt im aktuellen Level</p>
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-2 gap-4 stagger-children">
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
