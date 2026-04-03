import { useEffect, useState, useMemo } from "react";
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
  Clock,
  BarChart3,
  Eye,
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

type DailyRow = {
  day: string;
  active_users: number;
  total_minutes: number;
  total_questions: number;
  total_quizzes: number;
  total_sessions: number;
  total_page_views: number;
  total_logins: number;
};

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
  trend,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
  trend?: { value: number; label: string };
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
      {trend && (
        <div className={`text-xs mt-1 font-medium ${trend.value >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
          {trend.value >= 0 ? "+" : ""}{trend.value}% {trend.label}
        </div>
      )}
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

/** Sparkline-artige Bar Chart */
function MiniChart({
  data,
  dataKey,
  color,
  height = 120,
  showLabels = true,
}: {
  data: DailyRow[];
  dataKey: keyof DailyRow;
  color: string;
  height?: number;
  showLabels?: boolean;
}) {
  const values = data.map((d) => Number(d[dataKey]) || 0);
  const max = Math.max(...values, 1);

  return (
    <div className="flex items-end gap-[3px]" style={{ height }}>
      {data.map((d, i) => {
        const val = Number(d[dataKey]) || 0;
        const pct = (val / max) * 100;
        const isToday = i === data.length - 1;
        const isWeekend = [0, 6].includes(new Date(d.day).getDay());
        return (
          <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group relative">
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
              <div className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                {new Date(d.day).toLocaleDateString("de-AT", { day: "numeric", month: "short" })}: <strong>{val}</strong>
              </div>
            </div>
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${Math.max(pct, val > 0 ? 3 : 1)}%`,
                background: isToday ? color : color,
                opacity: isToday ? 1 : isWeekend ? 0.4 : 0.65,
                border: isToday ? `2px solid ${color}` : "none",
              }}
            />
            {showLabels && i % 5 === 0 && (
              <span className="text-[9px] text-[var(--muted)] whitespace-nowrap">
                {new Date(d.day).toLocaleDateString("de-AT", { day: "numeric", month: "numeric" })}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Admin() {
  usePageTitle("Admin Dashboard");
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [daily, setDaily] = useState<DailyRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    const [statsRes, dailyRes] = await Promise.all([
      supabase!.rpc("admin_dashboard_stats"),
      supabase!.rpc("admin_daily_overview", { days_back: 30 }),
    ]);
    if (statsRes.error) {
      setError(statsRes.error.message);
    } else {
      setStats(statsRes.data as Stats);
    }
    if (dailyRes.data && Array.isArray(dailyRes.data)) {
      setDaily(dailyRes.data as DailyRow[]);
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

  // Derived: today vs 30d average
  const todayData = daily.length > 0 ? daily[daily.length - 1] : null;
  const avg30d = useMemo(() => {
    if (daily.length < 2) return { minutes: 0, questions: 0, users: 0, sessions: 0, pageViews: 0 };
    // Exclude today for average
    const past = daily.slice(0, -1).filter((d) => d.total_page_views > 0 || d.total_questions > 0);
    const n = Math.max(past.length, 1);
    return {
      minutes: Math.round(past.reduce((s, d) => s + d.total_minutes, 0) / n),
      questions: Math.round(past.reduce((s, d) => s + d.total_questions, 0) / n),
      users: Math.round(past.reduce((s, d) => s + d.active_users, 0) / n),
      sessions: Math.round(past.reduce((s, d) => s + d.total_sessions, 0) / n),
      pageViews: Math.round(past.reduce((s, d) => s + d.total_page_views, 0) / n),
    };
  }, [daily]);

  const trendPct = (today: number, avg: number) => {
    if (avg === 0) return today > 0 ? 100 : 0;
    return Math.round(((today - avg) / avg) * 100);
  };

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
  const todayMinutes = todayData?.total_minutes || 0;
  const todayQuestions = todayData?.total_questions || 0;
  const todayUsers = todayData?.active_users || 0;

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

      {/* ── LIVE: Heute ── */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Heute Live
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard
            icon={Clock}
            label="Minuten aktiv"
            value={todayMinutes}
            accent="#8b5cf6"
            trend={{ value: trendPct(todayMinutes, avg30d.minutes), label: "vs. 30d" }}
          />
          <StatCard
            icon={Target}
            label="Fragen beantw."
            value={todayQuestions}
            accent="#2563eb"
            trend={{ value: trendPct(todayQuestions, avg30d.questions), label: "vs. 30d" }}
          />
          <StatCard
            icon={Users}
            label="Aktive User"
            value={todayUsers}
            accent="#10b981"
            trend={{ value: trendPct(todayUsers, avg30d.users), label: "vs. 30d" }}
          />
          <StatCard
            icon={Eye}
            label="Page Views"
            value={todayData?.total_page_views || 0}
            accent="#f59e0b"
            trend={{ value: trendPct(todayData?.total_page_views || 0, avg30d.pageViews), label: "vs. 30d" }}
          />
          <StatCard
            icon={Activity}
            label="Sessions"
            value={todayData?.total_sessions || 0}
            accent="#ec4899"
            trend={{ value: trendPct(todayData?.total_sessions || 0, avg30d.sessions), label: "vs. 30d" }}
          />
        </div>
      </div>

      {/* ── 30-Tage Charts ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Minutes Chart */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Minuten aktiv / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">30 Tage &middot; {avg30d.minutes} Min./Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_minutes" color="#8b5cf6" />
        </div>

        {/* Questions Chart */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" />
              Fragen beantwortet / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">30 Tage &middot; {avg30d.questions} Fragen/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_questions" color="#2563eb" />
        </div>

        {/* Active Users Chart */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-500" />
              Aktive User / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">30 Tage &middot; {avg30d.users} User/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="active_users" color="#10b981" />
        </div>

        {/* Page Views Chart */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-500" />
              Page Views / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">30 Tage &middot; {avg30d.pageViews} Views/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_page_views" color="#f59e0b" />
        </div>
      </div>

      {/* ── Tages-Detail-Tabelle ── */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[var(--accent)]" />
          Tagesübersicht (letzte 14 Tage)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                <th className="text-left pb-2 pr-3">Tag</th>
                <th className="text-right pb-2 px-2">User</th>
                <th className="text-right pb-2 px-2">Minuten</th>
                <th className="text-right pb-2 px-2">Fragen</th>
                <th className="text-right pb-2 px-2">Quizzes</th>
                <th className="text-right pb-2 px-2">Sessions</th>
                <th className="text-right pb-2 pl-2">Page Views</th>
              </tr>
            </thead>
            <tbody>
              {daily.slice(-14).reverse().map((d, i) => {
                const isToday = i === 0;
                const hasActivity = d.active_users > 0 || d.total_questions > 0;
                return (
                  <tr
                    key={d.day}
                    className={`border-b border-[var(--border)]/50 ${isToday ? "bg-blue-50/50 dark:bg-blue-950/20" : ""}`}
                  >
                    <td className="py-2 pr-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${isToday ? "font-bold text-[var(--accent)]" : "text-[var(--text-primary)]"}`}>
                          {isToday ? "Heute" : new Date(d.day).toLocaleDateString("de-AT", { weekday: "short", day: "numeric", month: "short" })}
                        </span>
                        {!hasActivity && !isToday && (
                          <span className="text-[9px] text-red-400 font-medium">inaktiv</span>
                        )}
                      </div>
                    </td>
                    <td className="text-right px-2 font-semibold text-[var(--text-primary)]">{d.active_users || "–"}</td>
                    <td className="text-right px-2">
                      <span className={d.total_minutes > 0 ? "text-purple-600 dark:text-purple-400 font-medium" : "text-[var(--muted)]"}>
                        {d.total_minutes > 0 ? `${d.total_minutes}m` : "–"}
                      </span>
                    </td>
                    <td className="text-right px-2">
                      <span className={d.total_questions > 0 ? "text-blue-600 dark:text-blue-400 font-medium" : "text-[var(--muted)]"}>
                        {d.total_questions || "–"}
                      </span>
                    </td>
                    <td className="text-right px-2 text-[var(--text-primary)]">{d.total_quizzes || "–"}</td>
                    <td className="text-right px-2 text-[var(--text-primary)]">{d.total_sessions || "–"}</td>
                    <td className="text-right pl-2 text-[var(--text-primary)]">{d.total_page_views || "–"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── KPI Overview ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Users} label="User gesamt" value={stats.total_users} />
        <StatCard icon={Crown} label="Premium" value={premiumCount} sub={`${starterCount} Starter`} accent="#f59e0b" />
        <StatCard icon={Activity} label="Aktiv 7d" value={stats.active_7d} sub={`${stats.active_30d} letzte 30d`} accent="#10b981" />
        <StatCard icon={Target} label="Fragen gesamt" value={stats.total_questions_answered.toLocaleString("de-AT")} />
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
