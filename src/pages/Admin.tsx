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

type UserActivity = {
  user_id: string;
  email: string;
  tier: string;
  questions_today: number;
  minutes_today: number;
  questions_7d: number;
  minutes_7d: number;
  chapters_today: number;
  chapters_7d: number;
  last_active: string | null;
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
  const [userActivity, setUserActivity] = useState<UserActivity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    const [statsRes, activityRes] = await Promise.all([
      supabase!.rpc("admin_dashboard_stats"),
      Promise.resolve(supabase!.rpc("admin_user_activity", { lim: 50 })).catch(() => ({ data: null, error: null })),
    ]);
    if (statsRes.error) {
      setError(statsRes.error.message);
    } else {
      setStats(statsRes.data as Stats);
    }
    if (activityRes.data) {
      setUserActivity(activityRes.data as UserActivity[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authLoading) return;
    if (!user || user.id !== OWNER_ID) {
      setError("Kein Zugriff");
      setLoading(false);
      return;
    }
    fetchAll();
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
          onClick={() => { setLoading(true); fetchAll(); }}
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

      {/* User Activity: Today vs 7d */}
      {userActivity.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500" />
            User-Aktivität — Heute vs. letzte 7 Tage
          </h2>

          {/* Summary row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                {userActivity.reduce((s, u) => s + u.questions_today, 0)}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">Fragen heute</div>
              <div className="text-[10px] text-[var(--muted)] mt-0.5">
                {Math.round(userActivity.reduce((s, u) => s + u.questions_7d, 0) / 7)}/Tag im Schnitt
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                {userActivity.reduce((s, u) => s + u.chapters_today, 0)}
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400">Kapitel heute</div>
              <div className="text-[10px] text-[var(--muted)] mt-0.5">
                {Math.round(userActivity.reduce((s, u) => s + u.chapters_7d, 0) / 7)}/Tag im Schnitt
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                {userActivity.reduce((s, u) => s + u.minutes_today, 0)}
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400">Minuten heute</div>
              <div className="text-[10px] text-[var(--muted)] mt-0.5">
                {Math.round(userActivity.reduce((s, u) => s + u.minutes_7d, 0) / 7)}/Tag im Schnitt
              </div>
            </div>
          </div>

          {/* User table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                  <th className="text-left pb-2 pr-3">User</th>
                  <th className="text-right pb-2 px-2">Fragen heute</th>
                  <th className="text-left pb-2 px-2 w-28">vs. 7d</th>
                  <th className="text-right pb-2 px-2">Kapitel heute</th>
                  <th className="text-left pb-2 px-2 w-28">vs. 7d</th>
                  <th className="text-right pb-2 px-2">Min. heute</th>
                  <th className="text-right pb-2 pl-2">Zuletzt</th>
                </tr>
              </thead>
              <tbody>
                {userActivity.map((u) => {
                  const qAvg7d = u.questions_7d / 7;
                  const cAvg7d = u.chapters_7d / 7;
                  return (
                    <tr key={u.user_id} className="border-b border-[var(--border)]/50 hover:bg-[var(--surface)]/50">
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[var(--text-primary)] truncate max-w-[180px]">
                            {u.email}
                          </span>
                          {u.tier === "premium" && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                              PRO
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="text-right px-2 font-semibold text-[var(--text-primary)]">
                        {u.questions_today}
                      </td>
                      <td className="px-2">
                        <ActivityBar value={u.questions_today} avg={qAvg7d} color="blue" />
                      </td>
                      <td className="text-right px-2 font-semibold text-[var(--text-primary)]">
                        {u.chapters_today}
                      </td>
                      <td className="px-2">
                        <ActivityBar value={u.chapters_today} avg={cAvg7d} color="emerald" />
                      </td>
                      <td className="text-right px-2 text-[var(--text-primary)]">
                        {u.minutes_today > 0 ? `${u.minutes_today}m` : "–"}
                      </td>
                      <td className="text-right pl-2 text-xs text-[var(--muted)] whitespace-nowrap">
                        {u.last_active ? timeAgo(u.last_active) : "–"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/** Mini-Balken: heutiger Wert vs. 7-Tage-Durchschnitt */
function ActivityBar({ value, avg, color }: { value: number; avg: number; color: "blue" | "emerald" | "purple" }) {
  const max = Math.max(value, avg, 1);
  const valuePct = (value / max) * 100;
  const avgPct = (avg / max) * 100;
  const isAbove = value >= avg;

  const colors = {
    blue: { bar: "bg-blue-500", avg: "bg-blue-300 dark:bg-blue-700" },
    emerald: { bar: "bg-emerald-500", avg: "bg-emerald-300 dark:bg-emerald-700" },
    purple: { bar: "bg-purple-500", avg: "bg-purple-300 dark:bg-purple-700" },
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative w-full h-3 bg-[var(--border)]/30 rounded-full overflow-hidden">
        {/* 7d average marker */}
        <div
          className={`absolute top-0 h-full rounded-full ${colors[color].avg} opacity-40`}
          style={{ width: `${Math.max(avgPct, 3)}%` }}
        />
        {/* Today bar */}
        <div
          className={`absolute top-0 h-full rounded-full ${colors[color].bar}`}
          style={{ width: `${Math.max(valuePct, value > 0 ? 3 : 0)}%` }}
        />
      </div>
      <span className={`text-[10px] font-semibold whitespace-nowrap ${isAbove ? "text-emerald-600 dark:text-emerald-400" : "text-[var(--muted)]"}`}>
        {avg > 0 ? `${Math.round((value / avg) * 100)}%` : value > 0 ? "neu" : "–"}
      </span>
    </div>
  );
}
