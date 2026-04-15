import { useEffect, useState, useMemo, useCallback, useRef } from "react";
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
  Lock,
  RefreshCw,
  DollarSign,
  Repeat,
  LayoutGrid,
  AlertTriangle,
  Globe,
  Funnel,
  Search,
  Zap,
  BookOpen,
  PieChart,
  Radio,
} from "lucide-react";

const OWNER_ID = "ea304abb-6b1c-4b50-b870-0404f92306ec";
const AUTO_REFRESH_MS = 60_000;

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

type RetentionStats = {
  total_cohort: number;
  d1_count: number;
  d1_pct: number;
  d7_count: number;
  d7_pct: number;
  d30_count: number;
  d30_pct: number;
  weekly_cohorts: {
    week: string;
    signups: number;
    retained_d1: number;
    retained_d7: number;
    retained_d30: number;
  }[] | null;
};

type SectionUsage = {
  by_section: { section: string; views: number; unique_users: number }[] | null;
  daily_sections: { day: string; bms: number; kff: number; tv: number; sek: number; other: number }[] | null;
};

type TimeRange = 7 | 14 | 30;

type AtRiskData = {
  count: number;
  users: {
    user_id: string;
    email: string;
    subscription_tier: string | null;
    active_days: number;
    last_seen: string;
    days_inactive: number;
    last_email_sent: string | null;
  }[];
};

type TrafficSources = {
  by_source: { source: string; visits: number; unique_visitors: number }[];
  by_medium: { medium: string; visits: number }[];
  by_campaign: { campaign: string; visits: number; unique_visitors: number }[];
  referrers: { ref_source: string; visits: number; unique_visitors: number }[];
  google_ads_clicks: number;
  meta_ads_clicks: number;
};

type OnboardingFunnel = {
  steps: { step: string; count: number }[];
};

type QuizPerformance = {
  by_subject: { subject: string; quiz_count: number; unique_users: number; avg_score: number; total_questions: number; total_correct: number; correct_pct: number }[];
  hardest_chapters: { subject: string; chapter: string; quiz_count: number; avg_score: number; correct_pct: number }[];
  total_quizzes: number;
  avg_score_overall: number;
};

type HeatmapCell = { dow: number; hour: number; events: number };

type UserSegments = {
  segments: { segment: string; user_count: number; premium_count: number }[];
  total: number;
};

type LiveFeedItem = {
  event_name: string;
  page_path: string | null;
  created_at: string;
  properties: Record<string, unknown>;
  email: string | null;
  visitor_id: string;
};

type OnlineUser = {
  user_email: string | null;
  visitor_id: string | null;
  current_page: string | null;
  last_seen: string;
};

type UserSearchResult = {
  id: string;
  email: string;
  signup_date: string;
  subscription_tier: string | null;
  level: number;
  xp: number;
  total_questions_answered: number;
  total_correct: number;
  streak_days: number;
  last_active_date: string | null;
  onboarding_completed: boolean;
  display_name: string | null;
  active_days_30d: number;
  page_views_7d: number;
  quizzes_30d: number;
  top_sections: { section: string; views: number }[] | null;
};

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
  trend,
  large,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
  trend?: { value: number; label: string };
  large?: boolean;
}) {
  return (
    <div className={`bg-[var(--surface)] border border-[var(--border)] rounded-xl ${large ? "p-6" : "p-5"}`}>
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: accent ? `color-mix(in srgb, ${accent} 12%, transparent)` : "var(--accent-bg, rgba(37,99,235,0.08))" }}
        >
          <Icon className="w-4.5 h-4.5" style={{ color: accent || "var(--accent)" }} />
        </div>
        <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">{label}</span>
      </div>
      <div className={`font-bold text-[var(--text-primary)] ${large ? "text-3xl" : "text-2xl"}`}>{value}</div>
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
            <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
              <div className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                {new Date(d.day).toLocaleDateString("de-AT", { day: "numeric", month: "short" })}: <strong>{val}</strong>
              </div>
            </div>
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${Math.max(pct, val > 0 ? 3 : 1)}%`,
                background: color,
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

/** Stacked area-ish bars for section usage */
function SectionStackChart({ data }: { data: SectionUsage["daily_sections"] }) {
  if (!data || data.length === 0) return <div className="text-sm text-[var(--muted)]">Keine Daten</div>;
  const maxTotal = Math.max(...data.map((d) => d.bms + d.kff + d.tv + d.sek + d.other), 1);
  const colors = { bms: "#2563eb", kff: "#8b5cf6", tv: "#10b981", sek: "#f59e0b", other: "#94a3b8" };

  return (
    <div className="flex items-end gap-[2px]" style={{ height: 100 }}>
      {data.map((d, i) => {
        const total = d.bms + d.kff + d.tv + d.sek + d.other;
        const pct = (total / maxTotal) * 100;
        const segments = [
          { key: "bms", val: d.bms, color: colors.bms },
          { key: "kff", val: d.kff, color: colors.kff },
          { key: "tv", val: d.tv, color: colors.tv },
          { key: "sek", val: d.sek, color: colors.sek },
          { key: "other", val: d.other, color: colors.other },
        ];
        return (
          <div key={d.day} className="flex-1 flex flex-col justify-end group relative" style={{ height: "100%" }}>
            <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
              <div className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                {new Date(d.day).toLocaleDateString("de-AT", { day: "numeric", month: "short" })}:
                BMS {d.bms} · KFF {d.kff} · TV {d.tv} · SEK {d.sek}
              </div>
            </div>
            <div className="flex flex-col rounded-t overflow-hidden" style={{ height: `${Math.max(pct, 2)}%` }}>
              {segments.filter((s) => s.val > 0).map((s) => (
                <div
                  key={s.key}
                  style={{
                    flexGrow: s.val,
                    background: s.color,
                    opacity: i === data.length - 1 ? 1 : 0.7,
                    minHeight: 2,
                  }}
                />
              ))}
            </div>
            {i % 7 === 0 && (
              <span className="text-[9px] text-[var(--muted)] text-center mt-1">
                {new Date(d.day).toLocaleDateString("de-AT", { day: "numeric", month: "numeric" })}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** Retention gauge bar */
function RetentionBar({ label, count, total, pct, color }: { label: string; count: number; total: number; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-xs font-bold text-[var(--muted)]">{label}</span>
      <div className="flex-1 h-8 bg-[var(--border)]/30 rounded-lg overflow-hidden relative">
        <div
          className="h-full rounded-lg transition-all flex items-center justify-end pr-2"
          style={{ width: `${Math.max(pct, 2)}%`, background: color }}
        >
          {pct >= 15 && <span className="text-white text-xs font-bold">{pct}%</span>}
        </div>
        {pct < 15 && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--text-primary)]">{pct}%</span>
        )}
      </div>
      <span className="text-xs text-[var(--muted)] w-16 text-right">{count}/{total}</span>
    </div>
  );
}

export default function Admin() {
  usePageTitle("Admin Dashboard");
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [daily, setDaily] = useState<DailyRow[]>([]);
  const [funnelData, setFunnelData] = useState<Record<string, number>>({});
  const [pendingUpgrades, setPendingUpgrades] = useState<{ id: string; customer_email: string; amount_cents: number; created_at: string }[]>([]);
  const [retention, setRetention] = useState<RetentionStats | null>(null);
  const [sectionUsage, setSectionUsage] = useState<SectionUsage | null>(null);
  const [atRisk, setAtRisk] = useState<AtRiskData | null>(null);
  const [traffic, setTraffic] = useState<TrafficSources | null>(null);
  const [onboarding, setOnboarding] = useState<OnboardingFunnel | null>(null);
  const [quizPerf, setQuizPerf] = useState<QuizPerformance | null>(null);
  const [heatmap, setHeatmap] = useState<HeatmapCell[]>([]);
  const [segments, setSegments] = useState<UserSegments | null>(null);
  const [liveFeed, setLiveFeed] = useState<LiveFeedItem[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [feedback, setFeedback] = useState<{ id: string; email: string | null; question_id: string; question_type: string; feedback_text: string; created_at: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<UserSearchResult[] | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [timeRange, setTimeRange] = useState<TimeRange>(30);
  const refreshTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchAll = useCallback(async () => {
    const [statsRes, dailyRes, retentionRes, sectionRes, atRiskRes, trafficRes, onboardingRes, quizRes, heatmapRes, segmentsRes, feedRes, onlineRes] = await Promise.all([
      supabase!.rpc("admin_dashboard_stats"),
      supabase!.rpc("admin_daily_overview", { days_back: timeRange }),
      supabase!.rpc("admin_retention_stats"),
      supabase!.rpc("admin_section_usage", { days_back: timeRange }),
      supabase!.rpc("admin_at_risk_users"),
      supabase!.rpc("admin_traffic_sources", { days_back: timeRange }),
      supabase!.rpc("admin_onboarding_funnel", { days_back: timeRange }),
      supabase!.rpc("admin_quiz_performance", { days_back: timeRange }),
      supabase!.rpc("admin_engagement_heatmap", { days_back: timeRange }),
      supabase!.rpc("admin_user_segments"),
      supabase!.rpc("admin_live_feed", { limit_count: 20 }),
      supabase!.rpc("admin_users_online"),
    ]);
    if (statsRes.error) {
      setError(statsRes.error.message);
    } else {
      setStats(statsRes.data as Stats);
    }
    if (dailyRes.data && Array.isArray(dailyRes.data)) {
      setDaily(dailyRes.data as DailyRow[]);
    }
    if (retentionRes.data) {
      setRetention(retentionRes.data as RetentionStats);
    }
    if (sectionRes.data) {
      setSectionUsage(sectionRes.data as SectionUsage);
    }
    if (atRiskRes.data) {
      setAtRisk(atRiskRes.data as AtRiskData);
    }
    if (trafficRes.data) {
      setTraffic(trafficRes.data as TrafficSources);
    }
    if (onboardingRes.data) {
      setOnboarding(onboardingRes.data as OnboardingFunnel);
    }
    if (quizRes.data) {
      setQuizPerf(quizRes.data as QuizPerformance);
    }
    if (heatmapRes.data && Array.isArray(heatmapRes.data)) {
      setHeatmap(heatmapRes.data as HeatmapCell[]);
    }
    if (segmentsRes.data) {
      setSegments(segmentsRes.data as UserSegments);
    }
    if (feedRes.data && Array.isArray(feedRes.data)) {
      setLiveFeed(feedRes.data as LiveFeedItem[]);
    }
    if (onlineRes.data && Array.isArray(onlineRes.data)) {
      setOnlineUsers(onlineRes.data as OnlineUser[]);
    }

    // Fetch paywall & conversion funnel events
    const daysAgo = new Date(Date.now() - timeRange * 86400000).toISOString();
    const funnelEvents = [
      "paywall_shown", "paywall_clicked", "upgrade_card_clicked",
      "post_quiz_upgrade_shown", "post_quiz_upgrade_clicked",
      "usage_limit_warning_shown", "usage_limit_warning_clicked",
      "conversion_signup_completed", "conversion_checkout_started",
      "conversion_purchase_completed",
    ];
    const { data: eventsData } = await supabase!
      .from("analytics_events")
      .select("event_name")
      .in("event_name", funnelEvents)
      .gte("created_at", daysAgo);
    if (eventsData) {
      const counts: Record<string, number> = {};
      for (const e of eventsData) {
        counts[e.event_name] = (counts[e.event_name] || 0) + 1;
      }
      setFunnelData(counts);
    }

    // Fetch pending upgrades
    const { data: pendingData } = await supabase!
      .from("pending_upgrades")
      .select("id, customer_email, amount_cents, created_at")
      .eq("status", "pending")
      .order("created_at", { ascending: false });
    if (pendingData) setPendingUpgrades(pendingData);

    // Fetch question feedback
    const { data: fbData } = await supabase!.rpc("admin_question_feedback", { limit_count: 20 });
    if (fbData && Array.isArray(fbData)) setFeedback(fbData);

    setLoading(false);
    setLastRefresh(new Date());
  }, [timeRange]);

  const [emailLogging, setEmailLogging] = useState<string | null>(null); // user_id currently being sent

  const handleSendEmail = useCallback(async (userId: string, email: string, name: string, type: string = "re_engagement") => {
    setEmailLogging(userId);
    try {
      const templateId = type === "re_engagement" ? "re-engagement" : type;
      const { data: sendData, error } = await supabase!.functions.invoke("send-email", {
        body: {
          action: "send",
          userId,
          templateId,
          templateData: { email, name },
          force: true,
        },
      });
      if (error) {
        alert(`Fehler beim Senden: ${error.message}`);
      } else if (sendData?.sent === false) {
        alert(`SMTP-Fehler: ${sendData.error || "Unbekannt"}`);
      } else if (sendData?.skipped) {
        alert(`Übersprungen: ${sendData.reason}`);
      } else {
        // Refresh at-risk data to show updated last_email_sent
        const { data } = await supabase!.rpc("admin_at_risk_users");
        if (data) setAtRisk(data as AtRiskData);
        alert(`E-Mail gesendet an ${email}`);
      }
    } catch (err) {
      console.error("send-email exception:", err);
      alert(`Fehler: ${err}`);
    }
    setEmailLogging(null);
  }, []);

  const handleUserSearch = useCallback(async (query: string) => {
    if (!query.trim() || query.trim().length < 2) {
      setSearchResults(null);
      return;
    }
    setSearchLoading(true);
    const { data } = await supabase!.rpc("admin_user_search", { search_term: query.trim() });
    if (data) setSearchResults(data as UserSearchResult[]);
    setSearchLoading(false);
  }, []);

  // Initial load + auth check
  useEffect(() => {
    if (authLoading) return;
    if (!user || user.id !== OWNER_ID) {
      setError("Kein Zugriff");
      setLoading(false);
      return;
    }
    fetchAll();
  }, [user, authLoading, fetchAll]);

  // Auto-refresh every 60s
  useEffect(() => {
    if (error || !stats) return;
    refreshTimer.current = setInterval(() => {
      fetchAll();
    }, AUTO_REFRESH_MS);
    return () => {
      if (refreshTimer.current) clearInterval(refreshTimer.current);
    };
  }, [error, stats, fetchAll]);

  // Derived: today vs average
  const todayData = daily.length > 0 ? daily[daily.length - 1] : null;
  const avgPeriod = useMemo(() => {
    if (daily.length < 2) return { minutes: 0, questions: 0, users: 0, sessions: 0, pageViews: 0 };
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
  const estRevenue = premiumCount * 29.9;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-2 pb-8">
      {/* ── Sticky Top Bar ── */}
      <div className="sticky top-0 z-20 -mx-6 px-6 py-2.5 mb-6 bg-[var(--surface)]/95 backdrop-blur border-b border-[var(--border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-[var(--text-primary)]">MedMaster</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-[var(--muted)]">Heute <strong className="text-[var(--text-primary)] text-sm">{todayUsers}</strong></span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-[var(--muted)]">7d <strong className="text-[var(--text-primary)] text-sm">{stats.active_7d}</strong></span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-[var(--muted)]">30d <strong className="text-[var(--text-primary)] text-sm">{stats.active_30d}</strong></span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-[var(--muted)]">Total <strong className="text-[var(--text-primary)] text-sm">{stats.total_users}</strong></span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-[var(--muted)]">Premium <strong className="text-amber-500 text-sm">{premiumCount}</strong></span>
              <span className="text-[var(--border)]">|</span>
              <span className="text-[var(--muted)]">€ <strong className="text-emerald-600 text-sm">{estRevenue.toFixed(0)}</strong></span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
              {([7, 14, 30] as TimeRange[]).map((r) => (
                <button
                  key={r}
                  onClick={() => { setTimeRange(r); setLoading(true); }}
                  className={`px-2.5 py-1 text-[10px] font-medium transition-colors ${
                    timeRange === r
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {r}d
                </button>
              ))}
            </div>
            <button
              onClick={() => { setLoading(true); fetchAll(); }}
              className="p-1.5 rounded-lg bg-[var(--accent)] text-white hover:opacity-90"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] text-[var(--muted)]">
              {lastRefresh.toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>
      </div>

      {/* ── Page Title ── */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>
        <p className="text-sm text-[var(--muted)]">Kommandozentrale für Produkt & User</p>
      </div>

      {/* ── Pending Upgrades Alert (TOP — actionable!) ── */}
      {pendingUpgrades.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" />
            {pendingUpgrades.length} Zahlung(en) ohne Zuordnung!
          </h2>
          <p className="text-xs text-[var(--muted)] mb-3">
            Diese Kunden haben bezahlt, konnten aber keinem Account zugeordnet werden. Bitte manuell prüfen und freischalten.
          </p>
          <div className="space-y-2">
            {pendingUpgrades.map((p) => (
              <div key={p.id} className="flex items-center justify-between bg-[var(--surface)] rounded-lg px-3 py-2 text-sm">
                <span className="font-medium">{p.customer_email}</span>
                <span className="text-[var(--muted)]">
                  {p.amount_cents ? `€${(p.amount_cents / 100).toFixed(2)}` : "?"} — {new Date(p.created_at).toLocaleDateString("de-AT")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 1: Core Business KPIs (Revenue + Users)       */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={DollarSign}
          label="Umsatz (est.)"
          value={`€${estRevenue.toFixed(0)}`}
          sub={`${premiumCount} Premium × €29,90`}
          accent="#10b981"
          large
        />
        <StatCard
          icon={Users}
          label="User gesamt"
          value={stats.total_users}
          sub={`${starterCount} Starter · ${premiumCount} Premium`}
          large
        />
        <StatCard
          icon={Crown}
          label="Conversion Rate"
          value={stats.total_users > 0 ? `${((premiumCount / stats.total_users) * 100).toFixed(1)}%` : "–"}
          sub={`${premiumCount} von ${stats.total_users}`}
          accent="#f59e0b"
          large
        />
        <StatCard
          icon={Activity}
          label="Aktiv 7d / 30d"
          value={stats.active_7d}
          sub={`${stats.active_30d} letzte 30d · ${stats.total_questions_answered.toLocaleString("de-AT")} Fragen total`}
          accent="#2563eb"
          large
        />
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 2: Retention                                   */}
      {/* ══════════════════════════════════════════════════════ */}
      {retention && retention.total_cohort > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Repeat className="w-4 h-4 text-purple-500" />
            Retention (Signups der letzten 90 Tage · {retention.total_cohort} User)
          </h2>
          <div className="space-y-3 mb-6">
            <RetentionBar label="D1" count={retention.d1_count} total={retention.total_cohort} pct={retention.d1_pct} color="#8b5cf6" />
            <RetentionBar label="D7" count={retention.d7_count} total={retention.total_cohort} pct={retention.d7_pct} color="#6d28d9" />
            <RetentionBar label="D30" count={retention.d30_count} total={retention.total_cohort} pct={retention.d30_pct} color="#4c1d95" />
          </div>
          {/* Weekly cohort table */}
          {retention.weekly_cohorts && retention.weekly_cohorts.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Wochen-Kohorten</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)]">
                      <th className="text-left pb-2 pr-3">Woche</th>
                      <th className="text-right pb-2 px-2">Signups</th>
                      <th className="text-right pb-2 px-2">D1</th>
                      <th className="text-right pb-2 px-2">D7</th>
                      <th className="text-right pb-2 pl-2">D30</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retention.weekly_cohorts.map((wc) => {
                      const d1p = wc.signups > 0 ? Math.round((wc.retained_d1 / wc.signups) * 100) : 0;
                      const d7p = wc.signups > 0 ? Math.round((wc.retained_d7 / wc.signups) * 100) : 0;
                      const d30p = wc.signups > 0 ? Math.round((wc.retained_d30 / wc.signups) * 100) : 0;
                      return (
                        <tr key={wc.week} className="border-b border-[var(--border)]/50">
                          <td className="py-2 pr-3 text-[var(--text-primary)]">
                            {new Date(wc.week).toLocaleDateString("de-AT", { day: "numeric", month: "short" })}
                          </td>
                          <td className="text-right px-2 font-semibold">{wc.signups}</td>
                          <td className="text-right px-2">
                            <span className={d1p >= 30 ? "text-emerald-600 font-medium" : d1p > 0 ? "text-amber-600 font-medium" : "text-[var(--muted)]"}>
                              {d1p > 0 ? `${d1p}%` : "–"}
                            </span>
                          </td>
                          <td className="text-right px-2">
                            <span className={d7p >= 20 ? "text-emerald-600 font-medium" : d7p > 0 ? "text-amber-600 font-medium" : "text-[var(--muted)]"}>
                              {d7p > 0 ? `${d7p}%` : "–"}
                            </span>
                          </td>
                          <td className="text-right pl-2">
                            <span className={d30p >= 10 ? "text-emerald-600 font-medium" : d30p > 0 ? "text-amber-600 font-medium" : "text-[var(--muted)]"}>
                              {d30p > 0 ? `${d30p}%` : "–"}
                            </span>
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
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 2b: At-Risk Users                              */}
      {/* ══════════════════════════════════════════════════════ */}
      {atRisk && atRisk.count > 0 && (
        <div className="bg-amber-500/8 border border-amber-500/25 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {atRisk.count} User drohen abzuspringen
          </h2>
          <p className="text-xs text-[var(--muted)] mb-3">
            Waren 3+ Tage aktiv, jetzt 7+ Tage inaktiv. Re-Engagement E-Mail sinnvoll.
          </p>
          <div className="space-y-2">
            {atRisk.users.slice(0, 8).map((u) => (
              <div key={u.user_id} className="bg-[var(--surface)] rounded-lg px-3 py-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className="font-medium truncate">{u.email}</span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        background: u.subscription_tier === "premium" ? "rgba(245,158,11,0.12)" : "rgba(100,116,139,0.1)",
                        color: u.subscription_tier === "premium" ? "#f59e0b" : "var(--muted)",
                      }}
                    >
                      {u.subscription_tier || "starter"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--muted)] shrink-0">
                    <span>{u.active_days}d aktiv</span>
                    <span className="text-red-500 font-medium">{u.days_inactive}d inaktiv</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleSendEmail(u.user_id, u.email, u.email.split("@")[0]); }}
                      disabled={emailLogging === u.user_id}
                      className="px-2 py-1 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-semibold hover:bg-amber-500/25 disabled:opacity-50"
                    >
                      {emailLogging === u.user_id ? "..." : "E-Mail senden"}
                    </button>
                  </div>
                </div>
                {u.last_email_sent && (
                  <div className="mt-1 text-[10px] text-[var(--muted)]">
                    Letzte E-Mail: {new Date(u.last_email_sent).toLocaleDateString("de-AT", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </div>
                )}
              </div>
            ))}
            {atRisk.count > 8 && (
              <p className="text-xs text-[var(--muted)] text-center pt-1">
                + {atRisk.count - 8} weitere
              </p>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 2c: Onboarding Funnel + Traffic Sources        */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Onboarding Funnel */}
        {onboarding && onboarding.steps && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Funnel className="w-4 h-4 text-blue-500" />
              Onboarding-Funnel ({timeRange}d)
            </h2>
            <div className="space-y-2">
              {(() => {
                const steps = onboarding.steps;
                const maxCount = Math.max(...steps.map((s) => s.count), 1);
                return steps.map((s, i) => {
                  const pct = Math.round((s.count / maxCount) * 100);
                  const prevCount = i > 0 ? steps[i - 1].count : null;
                  const dropoff = prevCount && prevCount > 0 ? Math.round(((prevCount - s.count) / prevCount) * 100) : null;
                  return (
                    <div key={s.step}>
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-[var(--text-primary)] font-medium">{s.step}</span>
                            <div className="flex items-center gap-2">
                              {dropoff !== null && dropoff > 0 && (
                                <span className="text-[10px] text-red-500 font-medium">-{dropoff}%</span>
                              )}
                              <span className="text-sm font-bold text-[var(--text-primary)]">{s.count}</span>
                            </div>
                          </div>
                          <div className="h-3 bg-[var(--border)]/30 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${Math.max(pct, 2)}%`,
                                background: `color-mix(in srgb, #2563eb ${50 + (pct / 2)}%, #93c5fd)`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="ml-2.5 h-3 border-l-2 border-dashed border-[var(--border)]" />
                      )}
                    </div>
                  );
                });
              })()}
            </div>
            {/* Overall conversion */}
            {onboarding.steps.length >= 2 && (() => {
              const first = onboarding.steps[0].count;
              const last = onboarding.steps[onboarding.steps.length - 1].count;
              const overall = first > 0 ? Math.round((last / first) * 100) : 0;
              return (
                <div className="mt-4 pt-3 border-t border-[var(--border)] text-center">
                  <span className="text-lg font-bold text-[var(--text-primary)]">{overall}%</span>
                  <span className="text-xs text-[var(--muted)] ml-2">Signup → Quiz Conversion</span>
                </div>
              );
            })()}
          </div>
        )}

        {/* Traffic Sources */}
        {traffic && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              Traffic Sources ({timeRange}d)
            </h2>

            {/* Ad Clicks Summary */}
            {(traffic.google_ads_clicks > 0 || traffic.meta_ads_clicks > 0) && (
              <div className="flex gap-3 mb-4">
                {traffic.google_ads_clicks > 0 && (
                  <div className="flex-1 bg-blue-50 dark:bg-blue-950/20 rounded-lg px-3 py-2 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{traffic.google_ads_clicks}</div>
                    <div className="text-[10px] text-[var(--muted)] uppercase">Google Ads Klicks</div>
                  </div>
                )}
                {traffic.meta_ads_clicks > 0 && (
                  <div className="flex-1 bg-purple-50 dark:bg-purple-950/20 rounded-lg px-3 py-2 text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{traffic.meta_ads_clicks}</div>
                    <div className="text-[10px] text-[var(--muted)] uppercase">Meta Ads Klicks</div>
                  </div>
                )}
              </div>
            )}

            {/* UTM Sources */}
            {traffic.by_source.length > 0 && (
              <div className="mb-4">
                <h3 className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Nach Quelle</h3>
                <div className="space-y-1.5">
                  {traffic.by_source.slice(0, 6).map((s) => {
                    const maxV = Math.max(...traffic.by_source.map((x) => x.visits), 1);
                    const pct = Math.round((s.visits / maxV) * 100);
                    return (
                      <div key={s.source} className="flex items-center gap-2">
                        <span className="text-xs text-[var(--muted)] w-20 truncate">{s.source}</span>
                        <div className="flex-1 h-4 bg-[var(--border)]/30 rounded overflow-hidden">
                          <div className="h-full rounded bg-emerald-500" style={{ width: `${Math.max(pct, 3)}%`, opacity: 0.7 }} />
                        </div>
                        <span className="text-xs font-semibold text-[var(--text-primary)] w-8 text-right">{s.visits}</span>
                        <span className="text-[10px] text-[var(--muted)] w-6 text-right">{s.unique_visitors}u</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Referrers */}
            {traffic.referrers.length > 0 && (
              <div className="mb-4">
                <h3 className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Referrers</h3>
                <div className="space-y-1.5">
                  {traffic.referrers.slice(0, 6).map((r) => {
                    const maxV = Math.max(...traffic.referrers.map((x) => x.visits), 1);
                    const pct = Math.round((r.visits / maxV) * 100);
                    return (
                      <div key={r.ref_source} className="flex items-center gap-2">
                        <span className="text-xs text-[var(--muted)] w-20 truncate">{r.ref_source}</span>
                        <div className="flex-1 h-4 bg-[var(--border)]/30 rounded overflow-hidden">
                          <div className="h-full rounded bg-sky-500" style={{ width: `${Math.max(pct, 3)}%`, opacity: 0.7 }} />
                        </div>
                        <span className="text-xs font-semibold text-[var(--text-primary)] w-8 text-right">{r.visits}</span>
                        <span className="text-[10px] text-[var(--muted)] w-6 text-right">{r.unique_visitors}u</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Campaigns */}
            {traffic.by_campaign.length > 0 && (
              <div>
                <h3 className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Kampagnen</h3>
                <div className="space-y-1.5">
                  {traffic.by_campaign.slice(0, 5).map((c) => (
                    <div key={c.campaign} className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)] truncate flex-1">{c.campaign}</span>
                      <span className="font-semibold text-[var(--text-primary)] ml-2">{c.visits}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {traffic.by_source.length === 0 && traffic.referrers.length === 0 && (
              <p className="text-sm text-[var(--muted)] text-center py-4">
                Keine UTM-Daten im Zeitraum. Nutze ?utm_source=... Links.
              </p>
            )}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 3: Heute Live                                  */}
      {/* ══════════════════════════════════════════════════════ */}
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
            trend={{ value: trendPct(todayMinutes, avgPeriod.minutes), label: `vs. ${timeRange}d` }}
          />
          <StatCard
            icon={Target}
            label="Fragen beantw."
            value={todayQuestions}
            accent="#2563eb"
            trend={{ value: trendPct(todayQuestions, avgPeriod.questions), label: `vs. ${timeRange}d` }}
          />
          <StatCard
            icon={Users}
            label="Aktive User"
            value={todayUsers}
            accent="#10b981"
            trend={{ value: trendPct(todayUsers, avgPeriod.users), label: `vs. ${timeRange}d` }}
          />
          <StatCard
            icon={Eye}
            label="Page Views"
            value={todayData?.total_page_views || 0}
            accent="#f59e0b"
            trend={{ value: trendPct(todayData?.total_page_views || 0, avgPeriod.pageViews), label: `vs. ${timeRange}d` }}
          />
          <StatCard
            icon={Activity}
            label="Sessions"
            value={todayData?.total_sessions || 0}
            accent="#ec4899"
            trend={{ value: trendPct(todayData?.total_sessions || 0, avgPeriod.sessions), label: `vs. ${timeRange}d` }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 4: Section Usage                               */}
      {/* ══════════════════════════════════════════════════════ */}
      {sectionUsage && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Section breakdown bars */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-blue-500" />
              Bereiche ({timeRange}d)
            </h2>
            <div className="space-y-2">
              {sectionUsage.by_section?.map((s) => {
                const maxViews = Math.max(...(sectionUsage.by_section?.map((x) => x.views) || [1]), 1);
                const pct = Math.round((s.views / maxViews) * 100);
                const sectionColor =
                  s.section.includes("Biologie") ? "#2563eb" :
                  s.section.includes("Chemie") ? "#dc2626" :
                  s.section.includes("Physik") ? "#7c3aed" :
                  s.section.includes("Mathematik") ? "#059669" :
                  s.section === "KFF" ? "#8b5cf6" :
                  s.section === "TV" ? "#10b981" :
                  s.section === "SEK" ? "#f59e0b" :
                  "#6b7280";
                return (
                  <div key={s.section} className="flex items-center gap-2">
                    <span className="text-xs text-[var(--muted)] w-28 truncate" title={s.section}>{s.section}</span>
                    <div className="flex-1 h-5 bg-[var(--border)]/30 rounded overflow-hidden">
                      <div className="h-full rounded transition-all" style={{ width: `${Math.max(pct, 2)}%`, background: sectionColor }} />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] w-10 text-right">{s.views}</span>
                    <span className="text-[10px] text-[var(--muted)] w-8 text-right">{s.unique_users}u</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stacked daily chart */}
          <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                Bereich-Nutzung / Tag
              </h2>
              <div className="flex items-center gap-3 text-[10px]">
                {[
                  { label: "BMS", color: "#2563eb" },
                  { label: "KFF", color: "#8b5cf6" },
                  { label: "TV", color: "#10b981" },
                  { label: "SEK", color: "#f59e0b" },
                ].map((l) => (
                  <span key={l.label} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            <SectionStackChart data={sectionUsage.daily_sections} />
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 5: Trend Charts                                */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Minuten aktiv / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">{timeRange}d · {avgPeriod.minutes} Min./Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_minutes" color="#8b5cf6" />
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" />
              Fragen beantwortet / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">{timeRange}d · {avgPeriod.questions} Fragen/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_questions" color="#2563eb" />
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-500" />
              Aktive User / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">{timeRange}d · {avgPeriod.users} User/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="active_users" color="#10b981" />
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-500" />
              Page Views / Tag
            </h2>
            <span className="text-xs text-[var(--muted)]">{timeRange}d · {avgPeriod.pageViews} Views/Tag avg</span>
          </div>
          <MiniChart data={daily} dataKey="total_page_views" color="#f59e0b" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 6: Daily Detail Table                          */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[var(--accent)]" />
          Tagesübersicht (letzte {Math.min(timeRange, 14)} Tage)
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
              {daily.slice(-Math.min(timeRange, 14)).reverse().map((d, i) => {
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

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 7: Conversion Funnel                           */}
      {/* ══════════════════════════════════════════════════════ */}
      {Object.keys(funnelData).length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            Paywall & Conversion Funnel ({timeRange} Tage)
          </h2>
          <div className="space-y-3">
            {[
              { key: "paywall_shown", label: "Paywall angezeigt", color: "#6b7280" },
              { key: "paywall_clicked", label: "→ Paywall geklickt", color: "#f59e0b" },
              { key: "upgrade_card_clicked", label: "→ Upgrade-Card geklickt", color: "#f59e0b" },
              { key: "post_quiz_upgrade_shown", label: "Post-Quiz Prompt gezeigt", color: "#6b7280" },
              { key: "post_quiz_upgrade_clicked", label: "→ Post-Quiz geklickt", color: "#f59e0b" },
              { key: "usage_limit_warning_shown", label: "Limit-Warning gezeigt", color: "#6b7280" },
              { key: "usage_limit_warning_clicked", label: "→ Limit-Warning geklickt", color: "#f59e0b" },
              { key: "conversion_signup_completed", label: "Signup abgeschlossen", color: "#10b981" },
              { key: "conversion_checkout_started", label: "Checkout gestartet", color: "#2563eb" },
              { key: "conversion_purchase_completed", label: "Kauf abgeschlossen", color: "#10b981" },
            ].map(({ key, label, color }) => {
              const count = funnelData[key] || 0;
              if (count === 0) return null;
              const maxCount = Math.max(...Object.values(funnelData), 1);
              const pct = Math.round((count / maxCount) * 100);
              return (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-44 text-xs text-[var(--muted)] truncate">{label}</div>
                  <div className="flex-1 h-5 bg-[var(--border)]/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${Math.max(pct, 2)}%`, background: color }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-primary)] w-12 text-right">{count}</span>
                </div>
              );
            })}
          </div>
          {(() => {
            const shown = funnelData["paywall_shown"] || 0;
            const clicked = (funnelData["paywall_clicked"] || 0) + (funnelData["upgrade_card_clicked"] || 0);
            const purchased = funnelData["conversion_purchase_completed"] || 0;
            const signups = funnelData["conversion_signup_completed"] || 0;
            return (
              <div className="mt-4 pt-4 border-t border-[var(--border)] grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {shown > 0 ? `${Math.round((clicked / shown) * 100)}%` : "–"}
                  </div>
                  <div className="text-[10px] text-[var(--muted)] uppercase">Paywall → Klick</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {signups > 0 ? `${Math.round((purchased / signups) * 100)}%` : "–"}
                  </div>
                  <div className="text-[10px] text-[var(--muted)] uppercase">Signup → Kauf</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-600">{purchased}</div>
                  <div className="text-[10px] text-[var(--muted)] uppercase">Käufe total</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {purchased > 0 ? `€${(purchased * 29.9).toFixed(0)}` : "–"}
                  </div>
                  <div className="text-[10px] text-[var(--muted)] uppercase">Umsatz (est.)</div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 8: Signups + Top Users + Recent Signups        */}
      {/* ══════════════════════════════════════════════════════ */}
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
                    {u.last_active && ` · ${timeAgo(u.last_active)}`}
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

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 9: User Segments                               */}
      {/* ══════════════════════════════════════════════════════ */}
      {segments && segments.segments.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-violet-500" />
            User-Segmente ({segments.total} User)
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {segments.segments.map((seg) => {
              const pct = segments.total > 0 ? Math.round((seg.user_count / segments.total) * 100) : 0;
              const config: Record<string, { label: string; color: string; icon: string; desc: string }> = {
                power: { label: "Power User", color: "#8b5cf6", icon: "⚡", desc: "15+ Tage, 10+ Quizzes" },
                active: { label: "Aktiv", color: "#10b981", icon: "✅", desc: "5+ aktive Tage" },
                casual: { label: "Casual", color: "#f59e0b", icon: "👋", desc: "1-4 aktive Tage" },
                dormant: { label: "Schlafend", color: "#6b7280", icon: "💤", desc: "Registriert, kaum aktiv" },
                churned: { label: "Abgewandert", color: "#ef4444", icon: "🚪", desc: "7+ Tage weg" },
              };
              const c = config[seg.segment] || { label: seg.segment, color: "#6b7280", icon: "?", desc: "" };
              return (
                <div key={seg.segment} className="rounded-lg border border-[var(--border)] p-3 text-center">
                  <div className="text-2xl mb-1">{c.icon}</div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">{seg.user_count}</div>
                  <div className="text-xs font-semibold" style={{ color: c.color }}>{c.label}</div>
                  <div className="text-[10px] text-[var(--muted)]">{pct}% · {seg.premium_count} Premium</div>
                  <div className="mt-2 h-1.5 bg-[var(--border)]/30 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c.color }} />
                  </div>
                  <div className="text-[9px] text-[var(--muted)] mt-1">{c.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 10: Quiz Performance + Engagement Heatmap      */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Quiz Performance */}
        {quizPerf && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Quiz-Performance ({timeRange}d)
            </h2>
            <p className="text-xs text-[var(--muted)] mb-4">
              {quizPerf.total_quizzes} Quizzes · Ø {quizPerf.avg_score_overall}% richtig
            </p>

            {/* By Subject */}
            <h3 className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Nach Fach</h3>
            <div className="space-y-2 mb-4">
              {quizPerf.by_subject.map((s) => {
                const scoreColor = s.correct_pct >= 70 ? "#10b981" : s.correct_pct >= 50 ? "#f59e0b" : "#ef4444";
                return (
                  <div key={s.subject} className="flex items-center gap-2">
                    <span className="text-xs text-[var(--muted)] w-20 truncate capitalize">{s.subject}</span>
                    <div className="flex-1 h-5 bg-[var(--border)]/30 rounded overflow-hidden relative">
                      <div className="h-full rounded" style={{ width: `${s.correct_pct}%`, background: scoreColor, opacity: 0.7 }} />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--text-primary)]">
                        {s.correct_pct}%
                      </span>
                    </div>
                    <span className="text-[10px] text-[var(--muted)] w-16 text-right">{s.quiz_count} Quiz · {s.unique_users}u</span>
                  </div>
                );
              })}
            </div>

            {/* Hardest Chapters */}
            {quizPerf.hardest_chapters.length > 0 && (
              <>
                <h3 className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide mb-2">Schwierigste Kapitel</h3>
                <div className="space-y-1.5">
                  {quizPerf.hardest_chapters.slice(0, 8).map((c, i) => (
                    <div key={`${c.subject}-${c.chapter}`} className="flex items-center gap-2 text-xs">
                      <span className="w-4 text-[var(--muted)] font-bold">{i + 1}</span>
                      <span className="flex-1 truncate text-[var(--text-primary)]">{c.chapter}</span>
                      <span className="text-[10px] text-[var(--muted)] capitalize">{c.subject}</span>
                      <span className={`font-bold ${c.correct_pct < 50 ? "text-red-500" : "text-amber-500"}`}>
                        {c.correct_pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Engagement Heatmap */}
        {heatmap.length > 0 && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Wann lernen User? ({timeRange}d)
            </h2>
            {(() => {
              const dayLabels = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
              const maxEvents = Math.max(...heatmap.map((h) => h.events), 1);
              // Build grid: 7 days × 24 hours
              const grid: Record<string, number> = {};
              for (const h of heatmap) {
                grid[`${h.dow}-${h.hour}`] = h.events;
              }
              // Only show hours 6-23 (nobody learns at 3am)
              const hours = Array.from({ length: 18 }, (_, i) => i + 6);

              return (
                <div>
                  {/* Hour labels */}
                  <div className="flex gap-[2px] mb-1 ml-8">
                    {hours.map((h) => (
                      <div key={h} className="flex-1 text-center text-[8px] text-[var(--muted)]">
                        {h % 3 === 0 ? `${h}` : ""}
                      </div>
                    ))}
                  </div>
                  {/* Grid */}
                  {dayLabels.map((label, dow) => (
                    <div key={dow} className="flex items-center gap-[2px] mb-[2px]">
                      <span className="w-7 text-[10px] text-[var(--muted)] text-right pr-1">{label}</span>
                      {hours.map((hour) => {
                        const val = grid[`${dow}-${hour}`] || 0;
                        const intensity = val / maxEvents;
                        return (
                          <div
                            key={hour}
                            className="flex-1 aspect-square rounded-sm group relative"
                            style={{
                              background: val === 0
                                ? "var(--border)"
                                : `color-mix(in srgb, #8b5cf6 ${Math.round(20 + intensity * 80)}%, transparent)`,
                              opacity: val === 0 ? 0.3 : 0.4 + intensity * 0.6,
                            }}
                          >
                            {val > 0 && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-10">
                                <div className="bg-gray-900 text-white text-[9px] px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                                  {label} {hour}:00 — {val} Events
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  {/* Legend */}
                  <div className="flex items-center justify-end gap-1 mt-3">
                    <span className="text-[9px] text-[var(--muted)]">Wenig</span>
                    {[0.1, 0.3, 0.5, 0.7, 1].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{ background: `color-mix(in srgb, #8b5cf6 ${Math.round(20 + i * 80)}%, transparent)`, opacity: 0.4 + i * 0.6 }}
                      />
                    ))}
                    <span className="text-[9px] text-[var(--muted)]">Viel</span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 11: Question Feedback                           */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Fragen-Feedback ({feedback.length})
        </h2>
        {feedback.length === 0 ? (
          <p className="text-sm text-[var(--muted)] text-center py-4">
            Noch kein Feedback von Usern eingegangen.
          </p>
        ) : (
          <div className="space-y-3">
            {feedback.map((f) => (
              <div key={f.id} className="border border-[var(--border)] rounded-lg p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-[var(--border)]/50 px-1.5 py-0.5 rounded text-[var(--muted)]">
                      {f.question_type}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--muted)]">{f.question_id}</span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">
                    {new Date(f.created_at).toLocaleDateString("de-AT", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-primary)]">{f.feedback_text}</p>
                {f.email && (
                  <p className="text-[10px] text-[var(--muted)] mt-1">{f.email}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 12: User Search                                */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-[var(--accent)]" />
          User suchen
        </h2>
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleUserSearch(searchQuery); }}
              placeholder="E-Mail oder Name eingeben..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </div>
          <button
            onClick={() => handleUserSearch(searchQuery)}
            disabled={searchLoading}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {searchLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Suchen"}
          </button>
        </div>

        {searchResults && searchResults.length === 0 && (
          <p className="text-sm text-[var(--muted)] text-center py-4">Kein User gefunden.</p>
        )}

        {searchResults && searchResults.length > 0 && (
          <div className="space-y-3">
            {searchResults.map((u) => {
              const correctPct = u.total_questions_answered > 0
                ? Math.round((u.total_correct / u.total_questions_answered) * 100)
                : 0;
              return (
                <div key={u.id} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">
                        {u.display_name || u.email}
                      </div>
                      {u.display_name && (
                        <div className="text-xs text-[var(--muted)]">{u.email}</div>
                      )}
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: u.subscription_tier === "premium" ? "rgba(245,158,11,0.12)" : "rgba(100,116,139,0.1)",
                        color: u.subscription_tier === "premium" ? "#f59e0b" : "var(--muted)",
                      }}
                    >
                      {u.subscription_tier || "starter"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-[var(--muted)]">Registriert</span>
                      <div className="font-medium text-[var(--text-primary)]">
                        {new Date(u.signup_date).toLocaleDateString("de-AT", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Level / XP</span>
                      <div className="font-medium text-[var(--text-primary)]">Lv. {u.level} · {u.xp} XP</div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Fragen / Richtig</span>
                      <div className="font-medium text-[var(--text-primary)]">
                        {u.total_questions_answered} · {correctPct}%
                      </div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Streak</span>
                      <div className="font-medium text-[var(--text-primary)]">{u.streak_days || 0}d</div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Aktive Tage (30d)</span>
                      <div className="font-medium text-[var(--text-primary)]">{u.active_days_30d}</div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Page Views (7d)</span>
                      <div className="font-medium text-[var(--text-primary)]">{u.page_views_7d}</div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Quizzes (30d)</span>
                      <div className="font-medium text-[var(--text-primary)]">{u.quizzes_30d}</div>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Onboarding</span>
                      <div className="font-medium text-[var(--text-primary)]">
                        {u.onboarding_completed ? "✓ Fertig" : "✗ Offen"}
                      </div>
                    </div>
                  </div>
                  {/* Top sections */}
                  {u.top_sections && u.top_sections.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center gap-3">
                      <span className="text-[10px] text-[var(--muted)] uppercase">Nutzt:</span>
                      {u.top_sections.map((s) => (
                        <span key={s.section} className="text-[10px] font-medium bg-[var(--border)]/50 px-2 py-0.5 rounded-full text-[var(--text-primary)]">
                          {s.section} ({s.views})
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION: Users Online Now                               */}
      {/* ══════════════════════════════════════════════════════ */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-green-500" />
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Gerade online ({onlineUsers.length})
        </h2>
        {onlineUsers.length === 0 ? (
          <p className="text-xs text-[var(--muted)]">Keine aktiven User in den letzten 5 Minuten.</p>
        ) : (
          <div className="space-y-1.5 max-h-60 overflow-y-auto">
            <div className="flex items-center gap-3 text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider pb-1 border-b border-[var(--border)]">
              <span className="w-48 shrink-0">User</span>
              <span className="flex-1">Aktuelle Seite</span>
              <span className="w-20 text-right shrink-0">Zuletzt</span>
            </div>
            {onlineUsers.map((u, i) => {
              const label = u.user_email || (u.visitor_id ? `anon-${u.visitor_id.slice(0, 8)}` : "anon");
              const ago = Math.round((Date.now() - new Date(u.last_seen).getTime()) / 1000);
              const agoStr = ago < 60 ? `${ago}s` : `${Math.round(ago / 60)}m`;
              return (
                <div key={i} className="flex items-center gap-3 text-xs py-1.5 px-2 rounded hover:bg-[var(--border)]/20">
                  <span className="w-48 shrink-0 truncate font-medium text-[var(--text-primary)]">
                    {label}
                  </span>
                  <span className="flex-1 truncate text-[var(--accent)]">
                    {u.current_page || "–"}
                  </span>
                  <span className="w-20 text-right shrink-0 text-[var(--muted)] font-mono text-[10px]">
                    vor {agoStr}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 12: Live Activity Feed                         */}
      {/* ══════════════════════════════════════════════════════ */}
      {liveFeed.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mt-8">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Radio className="w-4 h-4 text-red-500" />
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Feed (letzte Stunde)
          </h2>
          <div className="space-y-1.5 max-h-80 overflow-y-auto">
            {liveFeed.map((item, i) => {
              const eventConfig: Record<string, { label: string; color: string }> = {
                page_view: { label: "📄 Seite", color: "text-[var(--muted)]" },
                quiz_complete: { label: "✅ Quiz", color: "text-emerald-600" },
                chapter_open: { label: "📖 Kapitel", color: "text-blue-600" },
                login: { label: "🔑 Login", color: "text-violet-600" },
                signup: { label: "🎉 Signup", color: "text-emerald-600" },
                conversion_signup_completed: { label: "🎉 Signup", color: "text-emerald-600" },
                paywall_shown: { label: "🔒 Paywall", color: "text-amber-600" },
                paywall_clicked: { label: "💳 Paywall-Klick", color: "text-amber-600" },
                onboarding_complete: { label: "🎓 Onboarding", color: "text-blue-600" },
                scroll_depth: { label: "📜 Scroll", color: "text-[var(--muted)]" },
                session_end: { label: "👋 Session Ende", color: "text-[var(--muted)]" },
                cta_click: { label: "👆 CTA-Klick", color: "text-amber-600" },
              };
              const ec = eventConfig[item.event_name] || { label: item.event_name, color: "text-[var(--muted)]" };
              const time = new Date(item.created_at).toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
              return (
                <div key={i} className="flex items-center gap-3 text-xs py-1 px-2 rounded hover:bg-[var(--border)]/20">
                  <span className="text-[10px] text-[var(--muted)] w-16 shrink-0 font-mono">{time}</span>
                  <span className={`font-medium w-28 shrink-0 ${ec.color}`}>{ec.label}</span>
                  <span className="text-[var(--text-primary)] truncate flex-1">
                    {item.page_path || "–"}
                  </span>
                  <span className="text-[var(--muted)] truncate max-w-32">
                    {item.email || `anon-${item.visitor_id.slice(0, 6)}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
