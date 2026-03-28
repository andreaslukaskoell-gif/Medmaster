import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { setAdminSkipTracking } from "@/lib/analyticsTracker";

// ── Auth-based admin gate ──
// Only the admin email may access this dashboard (server-enforced via Supabase auth).
// The password hash approach was removed because client-side hashing is trivially bypassable.
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "";
const SESSION_KEY = "mm_analytics_auth";

function AdminAuthGate({ onUnlock }: { onUnlock: () => void }) {
  const { isAuthenticated, user, loading } = useAuth();
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated || !user?.email) {
      queueMicrotask(() => setDenied(true));
      return;
    }
    // Require exact email match against allowlist
    if (ADMIN_EMAIL && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAdminSkipTracking(true);
      onUnlock();
    } else {
      queueMicrotask(() => setDenied(true));
    }
  }, [isAuthenticated, user, loading, onUnlock]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[var(--accent)] border-t-transparent" />
      </div>
    );
  }

  if (denied) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-[var(--surface)] rounded-lg p-6 w-96 space-y-4 border border-[var(--border)] text-center">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">Zugriff verweigert</h2>
          <p className="text-xs text-[var(--muted)]">
            {!isAuthenticated
              ? "Bitte melde dich zuerst an."
              : "Dein Account hat keinen Zugriff auf das Analytics-Dashboard."}
          </p>
          <a
            href={isAuthenticated ? "/dashboard" : "/login"}
            className="inline-block w-full py-2 text-sm font-medium text-white rounded-lg text-center"
            style={{ background: "var(--accent)" }}
          >
            {isAuthenticated ? "Zum Dashboard" : "Anmelden"}
          </a>
        </div>
      </div>
    );
  }

  return null;
}

// ── Types ──

type DailyStat = { day: string; visitors: number; page_views: number };
type TopPage = { page_path: string; views: number; visitors: number };
type TopEvent = { event_name: string; count: number };
type FunnelStep = { step: string; visitors: number };
type ExitPage = { page_path: string; exits: number };
type TrafficSource = { domain: string; count: number };
type RecentReferral = { ref: string; referrer: string | null; created_at: string };
type SignupAttribution = {
  created_at: string;
  method: string;
  source: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  gclid: string | null;
  ref: string | null;
};
type ActiveUser = {
  session_id: string;
  visitor_id: string;
  current_page: string;
  page_since: string;
  pages_viewed: number;
};
type ActiveUserByEmail = {
  user_id: string;
  email: string;
  current_page: string;
  page_since: string;
  pages_viewed: number;
};
type PageEngagement = {
  page_path: string;
  avg_time_seconds: number;
  total_views: number;
  unique_visitors: number;
};

type DailyUserActivity = {
  day: string;
  signups: number;
  logins: number;
  avg_session_seconds: number;
};

type DashboardData = {
  daily: DailyStat[];
  topPages: TopPage[];
  topEvents: TopEvent[];
  funnel: FunnelStep[];
  exitPages: ExitPage[];
  activeSessions: number;
  activeUsers: ActiveUser[];
  pageEngagement: PageEngagement[];
  trafficSources: TrafficSource[];
  recentReferrals: RecentReferral[];
  signupAttributions: SignupAttribution[];
  activeUsersByEmail: ActiveUserByEmail[];
  dailyUserActivity: DailyUserActivity[];
};

// ── Funnel config ──

const FUNNEL_STEPS: { key: string; label: string; icon: string }[] = [
  { key: "page_view", label: "Besucher", icon: "👁" },
  { key: "cta_click", label: "CTA geklickt", icon: "👆" },
  { key: "signup_click", label: "Signup geklickt", icon: "✍️" },
  { key: "signup", label: "Registriert", icon: "✅" },
  { key: "onboarding_complete", label: "Onboarding", icon: "🎓" },
  { key: "chapter_open", label: "Kapitel", icon: "📖" },
  { key: "quiz_start", label: "Quiz Start", icon: "🧪" },
  { key: "quiz_complete", label: "Quiz fertig", icon: "🏆" },
];

// ── Colors ──

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#6366f1",
  "#14b8a6",
  "#f97316",
];

// ── Helpers ──

function formatDuration(secs: number): string {
  if (secs < 60) return `${Math.round(secs)}s`;
  const mins = Math.floor(secs / 60);
  const rem = Math.round(secs % 60);
  return rem > 0 ? `${mins}m ${rem}s` : `${mins}m`;
}

function isInternalRow(row: { user_agent?: string | null; properties?: unknown }): boolean {
  const ua = (row.user_agent as string) || "";
  const props = (row.properties as Record<string, unknown>) || {};
  return (
    /HeadlessChrome|Playwright|Puppeteer|Selenium|webdriver/i.test(ua) || props.is_bot === true
  );
}

function shortPath(path: string) {
  if (path === "/") return "Landing";
  return path.replace(/^\//, "").replace(/\//g, " / ");
}

function formatEventName(name: string) {
  return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatNum(n: number): string {
  if (n >= 10000) return (n / 1000).toFixed(0) + "k";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function sumField(rows: DailyStat[], field: "visitors" | "page_views", daysBack: number): number {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysBack);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  return rows.filter((r) => r.day >= cutoffStr).reduce((sum, r) => sum + r[field], 0);
}

function deriveSignupSource(props: Record<string, unknown>, utm: Record<string, string>): string {
  if (props.gclid) return "Google Ads";
  if (utm.utm_source === "google" && utm.utm_medium === "cpc") return "Google Ads";
  if (props.fbclid) return "Meta Ads";
  if (utm.utm_source === "facebook" || utm.utm_source === "instagram" || utm.utm_source === "meta")
    return "Meta Ads";
  if (utm.utm_source) return utm.utm_source;
  if (props.ref) return `Referral (${props.ref})`;
  return "Direkt";
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url || "(direkt)";
  }
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
}

// ── Data fetching ──

const TABLE_MISSING_MSG =
  "Analytics-Tabelle noch nicht erstellt. Führe die Migration aus:\n\nsupabase/migrations/20260315000000_analytics_events.sql";

async function fetchDashboard(): Promise<DashboardData> {
  if (!supabase) {
    return {
      daily: [],
      topPages: [],
      topEvents: [],
      funnel: [],
      exitPages: [],
      activeSessions: 0,
      activeUsers: [],
      pageEngagement: [],
      trafficSources: [],
      recentReferrals: [],
      signupAttributions: [],
      activeUsersByEmail: [],
      dailyUserActivity: [],
    };
  }

  const [daily, topPages, topEvents, funnel, exitPages, active, activeDetail, engagement] =
    await Promise.all([
      supabase.rpc("analytics_daily_stats", { days_back: 30 }),
      supabase.rpc("analytics_top_pages", { days_back: 7, lim: 10 }),
      supabase.rpc("analytics_top_events", { days_back: 7, lim: 10 }),
      supabase.rpc("analytics_funnel", { days_back: 30 }),
      supabase.rpc("analytics_exit_pages", { days_back: 7, lim: 10 }),
      supabase.rpc("analytics_active_sessions"),
      supabase.rpc("analytics_active_users_detail"),
      supabase.rpc("analytics_page_engagement", { days_back: 7, lim: 15 }),
    ]);

  const anyError = [
    daily,
    topPages,
    topEvents,
    funnel,
    exitPages,
    active,
    activeDetail,
    engagement,
  ].find((r) => r.error);
  if (anyError?.error?.message?.includes("does not exist") || anyError?.error?.code === "42883") {
    throw new Error(TABLE_MISSING_MSG);
  }

  // RPCs filter via is_internal_traffic(); direct queries use isInternalRow() client-side
  const referrerResult = await supabase
    .from("analytics_events")
    .select("referrer, user_agent, properties")
    .not("referrer", "is", null)
    .neq("referrer", "")
    .gte("created_at", new Date(Date.now() - 30 * 86400000).toISOString())
    .limit(500);

  const trafficSources: TrafficSource[] = [];
  if (referrerResult.data) {
    const domainCounts: Record<string, number> = {};
    for (const row of referrerResult.data) {
      if (isInternalRow(row)) continue;
      const domain = extractDomain(row.referrer as string);
      domainCounts[domain] = (domainCounts[domain] || 0) + 1;
    }
    for (const [domain, count] of Object.entries(domainCounts))
      trafficSources.push({ domain, count });
    trafficSources.sort((a, b) => b.count - a.count);
  }

  const referralResult = await supabase
    .from("analytics_events")
    .select("properties, referrer, created_at, user_agent")
    .eq("event_name", "referral_visit")
    .order("created_at", { ascending: false })
    .limit(20);

  const recentReferrals: RecentReferral[] = (referralResult.data || [])
    .filter((row) => !isInternalRow(row))
    .slice(0, 15)
    .map((row) => ({
      ref: ((row.properties as Record<string, unknown>)?.ref as string) || "?",
      referrer: row.referrer as string | null,
      created_at: row.created_at as string,
    }));

  // Fetch signup events with attribution data
  const signupResult = await supabase
    .from("analytics_events")
    .select("created_at, properties, user_agent")
    .in("event_name", [
      "signup",
      "signup_completed",
      "login_click",
      "conversion_signup_completed",
      "conversion_signup_started",
    ])
    .order("created_at", { ascending: false })
    .limit(200);

  const signupAttributions: SignupAttribution[] = (signupResult.data || [])
    .filter((row) => !isInternalRow(row))
    .map((row) => {
      const props = (row.properties as Record<string, unknown>) || {};
      const utm = (props.utm as Record<string, string>) || {};
      return {
        created_at: row.created_at as string,
        method: (props.method as string) || "unknown",
        source: deriveSignupSource(props, utm),
        utm_source: utm.utm_source || null,
        utm_medium: utm.utm_medium || null,
        utm_campaign: utm.utm_campaign || null,
        gclid: (props.gclid as string) || null,
        ref: (props.ref as string) || null,
      };
    });

  // Deduplicate by keeping only the latest event per unique combination of method + time (within 5s)
  const deduped: SignupAttribution[] = [];
  for (const s of signupAttributions) {
    const isDupe = deduped.some(
      (d) =>
        d.method === s.method &&
        Math.abs(new Date(d.created_at).getTime() - new Date(s.created_at).getTime()) < 5000
    );
    if (!isDupe) deduped.push(s);
  }

  // Fetch active users deduplicated by email
  const activeByEmailResult = await supabase.rpc("analytics_active_users_by_email");
  const activeUsersByEmail: ActiveUserByEmail[] =
    (activeByEmailResult.data as ActiveUserByEmail[]) || [];

  // Fetch daily user activity (signups, logins, session duration)
  const activityResult = await supabase.rpc("analytics_daily_user_activity", { days_back: 30 });
  const dailyUserActivity: DailyUserActivity[] = (activityResult.data as DailyUserActivity[]) || [];

  return {
    daily: (daily.data as DailyStat[]) || [],
    topPages: (topPages.data as TopPage[]) || [],
    topEvents: (topEvents.data as TopEvent[]) || [],
    funnel: (funnel.data as FunnelStep[]) || [],
    exitPages: (exitPages.data as ExitPage[]) || [],
    activeSessions: typeof active.data === "number" ? active.data : 0,
    activeUsers: (activeDetail.data as ActiveUser[]) || [],
    pageEngagement: (engagement.data as PageEngagement[]) || [],
    trafficSources: trafficSources.slice(0, 10),
    recentReferrals,
    signupAttributions: deduped,
    activeUsersByEmail,
    dailyUserActivity,
  };
}

// ── Visual Components ──

function MetricCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color: string;
}) {
  return (
    <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--border)] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ background: color }}
      />
      <div className="text-xs font-medium text-[var(--muted)] mb-2 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-3xl font-extrabold text-[var(--text-primary)] tabular-nums">{value}</div>
      {sub && <div className="text-xs text-[var(--muted)] mt-1">{sub}</div>}
    </div>
  );
}

function SparkArea({ data, height = 120 }: { data: DailyStat[]; height?: number }) {
  if (data.length < 2)
    return <p className="text-sm text-[var(--muted)] py-8 text-center">Noch keine Daten</p>;

  const maxV = Math.max(1, ...data.map((d) => d.visitors));
  const maxPV = Math.max(1, ...data.map((d) => d.page_views));
  const w = 100;
  const pad = 2;

  const toPoints = (vals: number[], max: number) =>
    vals
      .map(
        (v, i) =>
          `${pad + ((w - 2 * pad) * i) / (vals.length - 1)},${height - pad - ((height - 2 * pad) * v) / max}`
      )
      .join(" ");

  const visitorsLine = toPoints(
    data.map((d) => d.visitors),
    Math.max(maxV, maxPV)
  );
  const pvLine = toPoints(
    data.map((d) => d.page_views),
    Math.max(maxV, maxPV)
  );

  const areaPath = (line: string) => {
    const pts = line.split(" ");
    const first = pts[0].split(",")[0];
    const last = pts[pts.length - 1].split(",")[0];
    return `M${pts.join(" L")} L${last},${height - pad} L${first},${height - pad} Z`;
  };

  return (
    <div className="relative group">
      <svg
        viewBox={`0 0 ${w} ${height}`}
        className="w-full"
        style={{ height }}
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={pad}
            x2={w - pad}
            y1={pad + (height - 2 * pad) * (1 - f)}
            y2={pad + (height - 2 * pad) * (1 - f)}
            stroke="var(--border)"
            strokeWidth="0.3"
            strokeDasharray="2,2"
          />
        ))}
        {/* Page views area */}
        <path d={areaPath(pvLine)} fill="var(--muted)" opacity="0.08" />
        <polyline
          points={pvLine}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="0.6"
          opacity="0.4"
        />
        {/* Visitors area */}
        <path d={areaPath(visitorsLine)} fill="var(--accent)" opacity="0.15" />
        <polyline points={visitorsLine} fill="none" stroke="var(--accent)" strokeWidth="1" />
        {/* Dots on visitor line */}
        {data.map((d, i) => {
          const x = pad + ((w - 2 * pad) * i) / (data.length - 1);
          const y = height - pad - ((height - 2 * pad) * d.visitors) / Math.max(maxV, maxPV);
          return (
            <circle
              key={d.day}
              cx={x}
              cy={y}
              r="0.8"
              fill="var(--accent)"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          );
        })}
      </svg>
      {/* X-axis labels */}
      <div className="flex justify-between mt-1 px-1">
        {data
          .filter(
            (_, i) => i % Math.max(1, Math.floor(data.length / 7)) === 0 || i === data.length - 1
          )
          .map((d) => (
            <span key={d.day} className="text-[10px] text-[var(--muted)]">
              {d.day.slice(5)}
            </span>
          ))}
      </div>
      {/* Hover tooltip row */}
      <div className="flex gap-[2px] absolute inset-0" style={{ top: 0, height }}>
        {data.map((d, i) => (
          <div key={d.day} className="flex-1 relative group/col">
            <div className="absolute inset-0 bg-[var(--accent)]/0 hover:bg-[var(--accent)]/5 transition-colors" />
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/col:block bg-[var(--surface)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs whitespace-nowrap z-20 shadow-lg pointer-events-none"
              style={{
                transform: `translateX(${i < 3 ? "20%" : i > data.length - 4 ? "-20%" : "-50%"})`,
              }}
            >
              <div className="font-semibold text-[var(--text-primary)] mb-1">{d.day}</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                {d.visitors} Besucher
              </div>
              <div className="flex items-center gap-1.5 text-[var(--muted)]">
                <span className="w-2 h-2 rounded-full bg-[var(--muted)] opacity-40" />
                {d.page_views} Aufrufe
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorizontalBars({
  items,
  color,
}: {
  items: { label: string; value: number; sub?: string }[];
  color?: string;
}) {
  if (items.length === 0)
    return <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Daten</p>;
  const max = Math.max(1, ...items.map((i) => i.value));

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const pct = (item.value / max) * 100;
        const c = color || COLORS[i % COLORS.length];
        return (
          <div key={item.label + i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[var(--text-secondary)] truncate max-w-[70%]">
                {item.label}
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] tabular-nums">
                {formatNum(item.value)}
                {item.sub ? (
                  <span className="font-normal text-[var(--muted)] ml-1">{item.sub}</span>
                ) : null}
              </span>
            </div>
            <div className="h-2 bg-[var(--background)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(pct, 1)}%`, background: c, opacity: 0.8 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DonutChart({ items }: { items: { label: string; value: number }[] }) {
  if (items.length === 0)
    return <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Daten</p>;
  const total = items.reduce((s, i) => s + i.value, 0);
  const size = 140;
  const r = 52;
  const strokeW = 18;
  const circumference = 2 * Math.PI * r;

  // Pre-compute cumulative offsets to avoid mutable variable during render
  const offsets = items.reduce<number[]>((acc, _, i) => {
    const prev = i === 0 ? 0 : acc[i - 1] + (items[i - 1].value / total) * circumference;
    acc.push(prev);
    return acc;
  }, []);

  return (
    <div className="flex items-center gap-6">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="shrink-0 -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeW}
          opacity="0.3"
        />
        {items.map((item, i) => {
          const pct = item.value / total;
          const dash = pct * circumference;
          const gap = circumference - dash;
          return (
            <circle
              key={item.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={strokeW}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offsets[i]}
              className="transition-all duration-500"
            />
          );
        })}
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="central"
          className="rotate-90 origin-center text-xs font-bold"
          fill="var(--text-primary)"
          style={{ fontSize: 14 }}
        >
          {total}
        </text>
      </svg>
      <div className="space-y-1.5 min-w-0">
        {items.slice(0, 6).map((item, i) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            <span className="text-[var(--text-secondary)] truncate">{item.label}</span>
            <span className="text-[var(--text-primary)] font-semibold ml-auto tabular-nums">
              {item.value}
            </span>
          </div>
        ))}
        {items.length > 6 && (
          <div className="text-[10px] text-[var(--muted)]">+{items.length - 6} weitere</div>
        )}
      </div>
    </div>
  );
}

function FunnelViz({ steps, data }: { steps: typeof FUNNEL_STEPS; data: FunnelStep[] }) {
  const lookup = Object.fromEntries(data.map((d) => [d.step, d.visitors]));
  const firstVal = lookup[steps[0]?.key] || 0;
  const maxVal = Math.max(1, ...Object.values(lookup));

  return (
    <div className="space-y-0">
      {steps.map(({ key, label, icon }, i) => {
        const val = lookup[key] || 0;
        const pct = Math.round((val / maxVal) * 100);
        const prevVal = i > 0 ? lookup[steps[i - 1].key] || 0 : 0;
        const dropOff = i > 0 && prevVal > 0 ? Math.round(((prevVal - val) / prevVal) * 100) : null;
        const convFromStart = i > 0 && firstVal > 0 ? ((val / firstVal) * 100).toFixed(1) : null;
        const widthPct = Math.max(pct, 8);

        // Gradient from green (top) to red (bottom)
        const hue = 140 - (i / (steps.length - 1)) * 120; // 140=green → 20=red-orange

        return (
          <div key={key} className="relative">
            {/* Drop-off indicator */}
            {dropOff !== null && dropOff > 0 && (
              <div className="flex items-center gap-1 py-0.5 ml-2">
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-red-400">
                  <path
                    d="M6 2 L6 10 M3 7 L6 10 L9 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[10px] font-medium text-red-400">-{dropOff}%</span>
              </div>
            )}
            {/* Bar */}
            <div className="flex items-center gap-3">
              <div className="w-6 text-center text-sm">{icon}</div>
              <div className="flex-1 relative">
                <div className="h-9 bg-[var(--background)] rounded-lg overflow-hidden">
                  <div
                    className="h-full rounded-lg flex items-center px-3 gap-2 transition-all duration-700"
                    style={{
                      width: `${widthPct}%`,
                      background: `hsl(${hue}, 70%, 55%)`,
                      opacity: 0.85,
                    }}
                  >
                    <span className="text-xs font-bold text-white whitespace-nowrap">{label}</span>
                  </div>
                </div>
              </div>
              <div className="w-20 text-right">
                <span className="text-sm font-bold text-[var(--text-primary)] tabular-nums">
                  {formatNum(val)}
                </span>
                {convFromStart && (
                  <div className="text-[10px] text-[var(--muted)]">{convFromStart}%</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
    </span>
  );
}

// ── Section wrapper ──

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] h-full">
      <h2 className="text-[11px] font-bold text-[var(--muted)] mb-4 uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </div>
  );
}

// ── Signup Attribution ──

const SOURCE_COLORS: Record<string, string> = {
  "Google Ads": "#4285f4",
  Direkt: "#6b7280",
  instagram: "#e1306c",
  facebook: "#1877f2",
  tiktok: "#000000",
};

function sourceColor(source: string): string {
  return SOURCE_COLORS[source] || COLORS[Math.abs(hashCode(source)) % COLORS.length];
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

function SignupAttributionSection({ signups }: { signups: SignupAttribution[] }) {
  if (signups.length === 0) return null;

  // Aggregate by source
  const sourceCounts: Record<string, number> = {};
  for (const s of signups) {
    sourceCounts[s.source] = (sourceCounts[s.source] || 0) + 1;
  }
  const sourceItems = Object.entries(sourceCounts)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--border)]">
      <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Signup-Attribution</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Left: source breakdown donut */}
        <div>
          <h3 className="text-xs font-medium text-[var(--muted)] mb-3 uppercase tracking-wide">
            Quellen-Verteilung
          </h3>
          <DonutChart items={sourceItems} />
        </div>

        {/* Right: recent signups table */}
        <div>
          <h3 className="text-xs font-medium text-[var(--muted)] mb-3 uppercase tracking-wide">
            Letzte Signups
          </h3>
          <div className="space-y-1.5 max-h-64 overflow-y-auto">
            {signups.slice(0, 20).map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5 border-b border-[var(--border)]/30 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: sourceColor(s.source) }}
                  />
                  <span className="text-xs font-medium text-[var(--text-primary)]">{s.source}</span>
                  {s.utm_campaign && (
                    <span className="text-[10px] text-[var(--muted)] bg-[var(--background)] px-1.5 py-0.5 rounded">
                      {s.utm_campaign}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[var(--muted)]">{s.method}</span>
                  <span className="text-[10px] text-[var(--muted)]">{timeAgo(s.created_at)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard ──

export default function AnalyticsDashboard() {
  usePageTitle("Analytics");
  const [unlocked, setUnlocked] = useState(() => {
    const wasUnlocked = sessionStorage.getItem(SESSION_KEY) === "1";
    if (wasUnlocked) setAdminSkipTracking(true);
    return wasUnlocked;
  });
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setData(await fetchDashboard());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Fehler beim Laden");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (unlocked) load();
  }, [load, unlocked]);

  if (!unlocked) return <AdminAuthGate onUnlock={() => setUnlocked(true)} />;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[var(--accent)] border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center space-y-3">
        <p className="text-sm text-red-500 whitespace-pre-line">{error}</p>
        <button
          onClick={load}
          className="text-sm text-[var(--accent)] hover:underline cursor-pointer"
        >
          Erneut laden
        </button>
      </div>
    );
  }

  if (!data) return null;

  const todayVisitors = sumField(data.daily, "visitors", 1);
  const weekVisitors = sumField(data.daily, "visitors", 7);
  const monthVisitors = sumField(data.daily, "visitors", 30);
  const funnelLookup = Object.fromEntries(data.funnel.map((d) => [d.step, d.visitors]));
  const monthSignups = funnelLookup["signup"] || 0;
  const signupRate = monthVisitors > 0 ? ((monthSignups / monthVisitors) * 100).toFixed(1) : "0";

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      {/* ─── Premium Header ─── */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Dashboard
            </h1>
            {data.activeUsersByEmail.length > 0 && (
              <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                <LiveDot />
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {data.activeUsersByEmail.length} live
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-[var(--muted)]">
            Echte Nutzer · Bots & dein Account gefiltert
          </p>
        </div>
        <button
          onClick={load}
          className="px-4 py-2 text-xs font-medium text-[var(--accent)] border border-[var(--accent)]/20 rounded-lg hover:bg-[var(--accent)]/5 transition-colors cursor-pointer"
        >
          Aktualisieren
        </button>
      </div>

      {/* ─── 1. Key Metrics — big, bold, glanceable ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-blue-500" />
          <div className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            Heute
          </div>
          <div className="text-4xl font-extrabold text-[var(--text-primary)] tabular-nums leading-none">
            {formatNum(todayVisitors)}
          </div>
          <div className="text-xs text-[var(--muted)] mt-1.5">Besucher</div>
        </div>
        <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-violet-500" />
          <div className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            7 Tage
          </div>
          <div className="text-4xl font-extrabold text-[var(--text-primary)] tabular-nums leading-none">
            {formatNum(weekVisitors)}
          </div>
          <div className="text-xs text-[var(--muted)] mt-1.5">Besucher</div>
        </div>
        <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-cyan-500" />
          <div className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            30 Tage
          </div>
          <div className="text-4xl font-extrabold text-[var(--text-primary)] tabular-nums leading-none">
            {formatNum(monthVisitors)}
          </div>
          <div className="text-xs text-[var(--muted)] mt-1.5">{monthSignups} Signups</div>
        </div>
        <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-emerald-500" />
          <div className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            Conversion
          </div>
          <div className="text-4xl font-extrabold text-[var(--text-primary)] tabular-nums leading-none">
            {signupRate}%
          </div>
          <div className="text-xs text-[var(--muted)] mt-1.5">Besucher → Signup</div>
        </div>
      </div>

      {/* ─── 2. Live Users ─── */}
      {data.activeUsersByEmail.length > 0 && (
        <div
          className="rounded-2xl border border-emerald-500/20 overflow-hidden"
          style={{ background: "color-mix(in srgb, var(--surface) 95%, #10b981 5%)" }}
        >
          <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-emerald-500/10">
            <LiveDot />
            <h2 className="text-sm font-bold text-[var(--text-primary)]">Gerade online</h2>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-medium ml-auto">
              dedupliziert
            </span>
          </div>
          <div className="divide-y divide-[var(--border)]/30">
            {data.activeUsersByEmail.map((u) => {
              const minsAgo = Math.max(
                0,
                Math.round((Date.now() - new Date(u.page_since).getTime()) / 60000)
              );
              return (
                <div
                  key={u.user_id}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/5 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--accent)]/8 flex items-center justify-center text-xs font-bold text-[var(--accent)] shrink-0 ring-2 ring-[var(--accent)]/10">
                    {u.email.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate">
                      {u.email}
                    </div>
                    <div className="text-[11px] text-[var(--muted)]">
                      {shortPath(u.current_page)} · {u.pages_viewed} Seiten
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${minsAgo <= 2 ? "text-emerald-600 bg-emerald-500/10" : minsAgo <= 10 ? "text-amber-600 bg-amber-500/10" : "text-[var(--muted)] bg-[var(--background)]"}`}
                  >
                    {minsAgo === 0 ? "jetzt" : `${minsAgo}m`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── 3. Chart + Funnel side by side ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <Section title="Besucher & Aufrufe (30 Tage)">
            <div className="flex gap-4 mb-3 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                Besucher
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-1 rounded-full bg-[var(--muted)] opacity-40" />
                Aufrufe
              </span>
            </div>
            <SparkArea data={data.daily} height={180} />
          </Section>
        </div>
        <div className="lg:col-span-2">
          <Section title="Conversion Funnel (30 Tage)">
            <FunnelViz steps={FUNNEL_STEPS} data={data.funnel} />
          </Section>
        </div>
      </div>

      {/* ─── 3b. Nutzeraktivität ─── */}
      {data.dailyUserActivity.length > 0 &&
        (() => {
          const recent = data.dailyUserActivity.slice(-7);
          const todayActivity = data.dailyUserActivity[data.dailyUserActivity.length - 1];
          const totalSignups7d = recent.reduce((s, d) => s + d.signups, 0);
          const totalLogins7d = recent.reduce((s, d) => s + d.logins, 0);
          const avgSession7d = recent.filter((d) => d.avg_session_seconds > 0);
          const avgSessionDuration =
            avgSession7d.length > 0
              ? Math.round(
                  avgSession7d.reduce((s, d) => s + d.avg_session_seconds, 0) / avgSession7d.length
                )
              : 0;
          return (
            <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--border)]">
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                Nutzeraktivität
              </h2>
              <div className="grid grid-cols-4 gap-3 mb-5">
                <div className="bg-[var(--background)] rounded-lg p-3 text-center">
                  <div className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wide mb-1">
                    Signups heute
                  </div>
                  <div className="text-2xl font-extrabold text-[var(--text-primary)] tabular-nums">
                    {todayActivity?.signups ?? 0}
                  </div>
                </div>
                <div className="bg-[var(--background)] rounded-lg p-3 text-center">
                  <div className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wide mb-1">
                    Logins heute
                  </div>
                  <div className="text-2xl font-extrabold text-[var(--text-primary)] tabular-nums">
                    {todayActivity?.logins ?? 0}
                  </div>
                </div>
                <div className="bg-[var(--background)] rounded-lg p-3 text-center">
                  <div className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wide mb-1">
                    Signups 7d
                  </div>
                  <div className="text-2xl font-extrabold text-[var(--text-primary)] tabular-nums">
                    {totalSignups7d}
                  </div>
                </div>
                <div className="bg-[var(--background)] rounded-lg p-3 text-center">
                  <div className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wide mb-1">
                    Ø Session
                  </div>
                  <div className="text-2xl font-extrabold text-[var(--text-primary)] tabular-nums">
                    {formatDuration(avgSessionDuration)}
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 mb-2 text-[10px] text-[var(--muted)]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Signups
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Logins
                  </span>
                  <span className="ml-auto">Letzte 7 Tage</span>
                </div>
                {recent.map((d) => {
                  const maxActivity = Math.max(1, ...recent.map((r) => r.signups + r.logins));
                  const total = d.signups + d.logins;
                  const pct = (total / maxActivity) * 100;
                  const signupPct = total > 0 ? (d.signups / total) * 100 : 0;
                  return (
                    <div key={d.day} className="flex items-center gap-3">
                      <span className="text-[11px] text-[var(--muted)] w-12 shrink-0 tabular-nums">
                        {d.day.slice(5)}
                      </span>
                      <div className="flex-1 h-5 bg-[var(--background)] rounded-full overflow-hidden">
                        <div
                          className="h-full flex rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(pct, 2)}%` }}
                        >
                          {d.signups > 0 && (
                            <div
                              className="h-full bg-emerald-500"
                              style={{ width: `${signupPct}%` }}
                            />
                          )}
                          {d.logins > 0 && (
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${100 - signupPct}%` }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-28 shrink-0 justify-end">
                        <span className="text-[11px] font-semibold text-[var(--text-primary)] tabular-nums">
                          {total}
                        </span>
                        {d.avg_session_seconds > 0 && (
                          <span className="text-[10px] text-[var(--muted)]">
                            {formatDuration(d.avg_session_seconds)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {data.dailyUserActivity.length > 7 &&
                (() => {
                  const all = data.dailyUserActivity;
                  const totalSignups30d = all.reduce((s, d) => s + d.signups, 0);
                  const totalLogins30d = all.reduce((s, d) => s + d.logins, 0);
                  return (
                    <div className="mt-4 pt-3 border-t border-[var(--border)] flex gap-4 text-xs text-[var(--muted)]">
                      <span>
                        30d:{" "}
                        <strong className="text-[var(--text-primary)]">{totalSignups30d}</strong>{" "}
                        Signups
                      </span>
                      <span>
                        <strong className="text-[var(--text-primary)]">{totalLogins30d}</strong>{" "}
                        Logins
                      </span>
                      <span>
                        <strong className="text-[var(--text-primary)]">
                          {totalSignups30d + totalLogins30d}
                        </strong>{" "}
                        gesamt
                      </span>
                    </div>
                  );
                })()}
            </div>
          );
        })()}

      {/* ─── 4. Verweildauer ─── */}
      {data.pageEngagement.length > 0 && (
        <Section title="Verweildauer pro Seite (7 Tage)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {data.pageEngagement.map((p, i) => {
              const maxSecs = Math.max(1, ...data.pageEngagement.map((e) => e.avg_time_seconds));
              const pct = (p.avg_time_seconds / maxSecs) * 100;
              const hue = Math.min(140, (p.avg_time_seconds / 300) * 140);
              return (
                <div key={p.page_path + i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[var(--text-secondary)] truncate max-w-[55%]">
                      {shortPath(p.page_path)}
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-[var(--muted)]">{p.unique_visitors}</span>
                      <span className="font-bold text-[var(--text-primary)] tabular-nums w-14 text-right">
                        {formatDuration(p.avg_time_seconds)}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-[var(--background)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.max(pct, 2)}%`,
                        background: `hsl(${hue}, 65%, 50%)`,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* ─── 5. Signup Attribution ─── */}
      <SignupAttributionSection signups={data.signupAttributions} />

      {/* ─── 6. Top Pages + Events + Traffic ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Section title="Top Seiten (7 Tage)">
          <HorizontalBars
            items={data.topPages.map((p) => ({
              label: shortPath(p.page_path),
              value: p.views,
              sub: `${p.visitors}u`,
            }))}
          />
        </Section>
        <Section title="Top Events (7 Tage)">
          <HorizontalBars
            items={data.topEvents.map((e) => ({
              label: formatEventName(e.event_name),
              value: e.count,
            }))}
            color="#8b5cf6"
          />
        </Section>
        <Section title="Traffic-Quellen (30 Tage)">
          <DonutChart
            items={data.trafficSources.map((s) => ({ label: s.domain, value: s.count }))}
          />
        </Section>
      </div>

      {/* ─── 7. Referrals + Exit Pages ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Letzte Referrals">
          {data.recentReferrals.length === 0 ? (
            <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Referrals</p>
          ) : (
            <div className="space-y-1.5">
              {data.recentReferrals.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1.5 border-b border-[var(--border)]/30 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[10px] font-bold text-[var(--accent)]">
                      {r.ref.slice(0, 2)}
                    </span>
                    <span className="text-xs font-medium text-[var(--text-primary)]">
                      ?ref={r.ref}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">{timeAgo(r.created_at)}</span>
                </div>
              ))}
            </div>
          )}
        </Section>
        <Section title="Top Absprung-Seiten (7 Tage)">
          <HorizontalBars
            items={data.exitPages.map((p) => ({ label: shortPath(p.page_path), value: p.exits }))}
            color="#ef4444"
          />
        </Section>
      </div>
    </div>
  );
}
