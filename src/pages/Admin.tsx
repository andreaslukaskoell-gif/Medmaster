import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  Users,
  Crown,
  TrendingUp,
  Activity,
  Target,
  Calendar,
  ArrowUpRight,
  Loader2,
  ShieldAlert,
} from "lucide-react";

const OWNER_ID = "ea304abb-6b1c-4b50-b870-0404f92306ec";

type Stats = {
  total_users: number;
  users_by_tier: Record<string, number>;
  active_today: number;
  active_7d: number;
  active_30d: number;
  total_questions_answered: number;
  signups_by_week: { week: string; count: number }[];
  top_users: {
    email: string;
    questions: number;
    correct_pct: number;
    xp: number;
    level: number;
    streak: number;
    tier: string;
    last_active: string;
  }[];
  recent_signups: {
    email: string;
    created_at: string;
    provider: string;
  }[];
  generated_at: string;
};

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: accent ? `color-mix(in srgb, ${accent} 12%, transparent)` : "var(--accent-bg, rgba(37,99,235,0.08))" }}
        >
          <Icon className="w-4.5 h-4.5" style={{ color: accent || "var(--accent)" }} />
        </div>
        <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">{label}</span>
      </div>
      <div className="text-2xl font-bold text-[var(--text-primary)]">{value}</div>
      {sub && <div className="text-xs text-[var(--muted)] mt-1">{sub}</div>}
    </div>
  );
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `vor ${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `vor ${hours}h`;
  const days = Math.floor(hours / 24);
  return `vor ${days}d`;
}

export default function Admin() {
  usePageTitle("Admin Dashboard");
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user || user.id !== OWNER_ID) {
      setError("Kein Zugriff");
      setLoading(false);
      return;
    }

    (async () => {
      const { data, error: rpcErr } = await supabase!.rpc("admin_dashboard_stats");
      if (rpcErr) {
        setError(rpcErr.message);
      } else {
        setStats(data as Stats);
      }
      setLoading(false);
    })();
  }, [user, authLoading]);

  if (loading || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-6 h-6 animate-spin text-[var(--muted)]" />
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] gap-3 text-[var(--muted)]">
        <ShieldAlert className="w-5 h-5" />
        <span>{error || "Fehler beim Laden"}</span>
      </div>
    );
  }

  const premiumCount = stats.users_by_tier?.premium || 0;
  const starterCount = stats.users_by_tier?.starter || 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>
          <p className="text-sm text-[var(--muted)]">
            Stand: {new Date(stats.generated_at).toLocaleString("de-AT", { timeZone: "Europe/Vienna" })}
          </p>
        </div>
        <button
          onClick={() => { setLoading(true); supabase!.rpc("admin_dashboard_stats").then(({ data }) => { setStats(data as Stats); setLoading(false); }); }}
          className="text-sm px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90"
        >
          Aktualisieren
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Users} label="User gesamt" value={stats.total_users} />
        <StatCard icon={Crown} label="Premium" value={premiumCount} sub={`${starterCount} Starter`} accent="#f59e0b" />
        <StatCard icon={Activity} label="Aktiv heute" value={stats.active_today} sub={`${stats.active_7d} letzte 7d`} accent="#10b981" />
        <StatCard icon={Target} label="Fragen beantwortet" value={stats.total_questions_answered.toLocaleString("de-AT")} />
      </div>

      {/* Signups Chart */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[var(--accent)]" />
          Registrierungen pro Woche
        </h2>
        <div className="flex items-end gap-2 h-32">
          {stats.signups_by_week?.slice().reverse().map((w) => {
            const max = Math.max(...stats.signups_by_week.map((x) => x.count));
            const pct = max > 0 ? (w.count / max) * 100 : 0;
            return (
              <div key={w.week} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold text-[var(--text-primary)]">{w.count}</span>
                <div
                  className="w-full rounded-t-md bg-[var(--accent)]"
                  style={{ height: `${Math.max(pct, 4)}%`, opacity: 0.7 + (pct / 100) * 0.3 }}
                />
                <span className="text-[10px] text-[var(--muted)]">
                  {new Date(w.week).toLocaleDateString("de-AT", { day: "numeric", month: "short" })}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Users */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-500" />
            Top User (nach Fragen)
          </h2>
          <div className="space-y-3">
            {stats.top_users?.slice(0, 10).map((u, i) => (
              <div key={u.email} className="flex items-center gap-3">
                <span className="w-5 text-xs font-bold text-[var(--muted)] text-right">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--text-primary)] truncate">
                    {u.email}
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    {u.questions} Fragen · {u.correct_pct}% · Lv.{u.level}
                    {u.streak > 0 && ` · ${u.streak}d Streak`}
                  </div>
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: u.tier === "premium" ? "rgba(245,158,11,0.12)" : "rgba(100,116,139,0.1)",
                    color: u.tier === "premium" ? "#f59e0b" : "var(--muted)",
                  }}
                >
                  {u.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Signups */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--accent)]" />
            Letzte Registrierungen
          </h2>
          <div className="space-y-3">
            {stats.recent_signups?.map((u) => (
              <div key={u.email} className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--text-primary)] truncate">{u.email}</div>
                  <div className="text-xs text-[var(--muted)]">
                    {new Date(u.created_at).toLocaleDateString("de-AT", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {u.provider && u.provider !== "email" && ` · ${u.provider}`}
                  </div>
                </div>
                <span className="text-xs text-[var(--muted)] whitespace-nowrap flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  {timeAgo(u.created_at)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
