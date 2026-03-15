import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { usePageTitle } from "@/hooks/usePageTitle";

// ── Password gate ──

const PASS_HASH = "1c97b3af724d5ac1b9b1a6e6a6289f29aac562d2e80b649c54e6f88e7f2f7b8f";
const SESSION_KEY = "mm_analytics_auth";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pw, setPw] = useState("");
  const [wrong, setWrong] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(pw);
    if (hash === PASS_HASH) {
      sessionStorage.setItem(SESSION_KEY, "1");
      localStorage.setItem("mm_admin", "1");
      onUnlock();
    } else {
      setWrong(true);
      setPw("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form
        onSubmit={submit}
        className="bg-[var(--surface)] rounded-lg p-6 w-80 space-y-4 border border-[var(--border)]"
      >
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Dashboard-Passwort</h2>
        <input
          type="password"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
            setWrong(false);
          }}
          placeholder="Passwort eingeben"
          autoFocus
          className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
        />
        {wrong && <p className="text-xs text-red-500">Falsches Passwort</p>}
        <button
          type="submit"
          className="w-full py-2 text-sm font-medium text-white rounded-lg cursor-pointer"
          style={{ background: "var(--accent)" }}
        >
          Entsperren
        </button>
      </form>
    </div>
  );
}

// ── Types ──

type DailyStat = { day: string; visitors: number; page_views: number };
type TopPage = { page_path: string; views: number; visitors: number };
type TopEvent = { event_name: string; count: number };
type FunnelStep = { step: string; visitors: number };
type ExitPage = { page_path: string; exits: number };
type TrafficSource = { domain: string; count: number };
type RecentReferral = { ref: string; referrer: string | null; created_at: string };

type DashboardData = {
  daily: DailyStat[];
  topPages: TopPage[];
  topEvents: TopEvent[];
  funnel: FunnelStep[];
  exitPages: ExitPage[];
  activeSessions: number;
  trafficSources: TrafficSource[];
  recentReferrals: RecentReferral[];
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
      trafficSources: [],
      recentReferrals: [],
    };
  }

  const [daily, topPages, topEvents, funnel, exitPages, active] = await Promise.all([
    supabase.rpc("analytics_daily_stats", { days_back: 30 }),
    supabase.rpc("analytics_top_pages", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_top_events", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_funnel", { days_back: 30 }),
    supabase.rpc("analytics_exit_pages", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_active_sessions"),
  ]);

  const anyError = [daily, topPages, topEvents, funnel, exitPages, active].find((r) => r.error);
  if (anyError?.error?.message?.includes("does not exist") || anyError?.error?.code === "42883") {
    throw new Error(TABLE_MISSING_MSG);
  }

  const referrerResult = await supabase
    .from("analytics_events")
    .select("referrer")
    .not("referrer", "is", null)
    .neq("referrer", "")
    .gte("created_at", new Date(Date.now() - 30 * 86400000).toISOString())
    .limit(500);

  const trafficSources: TrafficSource[] = [];
  if (referrerResult.data) {
    const domainCounts: Record<string, number> = {};
    for (const row of referrerResult.data) {
      const domain = extractDomain(row.referrer as string);
      domainCounts[domain] = (domainCounts[domain] || 0) + 1;
    }
    for (const [domain, count] of Object.entries(domainCounts))
      trafficSources.push({ domain, count });
    trafficSources.sort((a, b) => b.count - a.count);
  }

  const referralResult = await supabase
    .from("analytics_events")
    .select("properties, referrer, created_at")
    .eq("event_name", "referral_visit")
    .order("created_at", { ascending: false })
    .limit(15);

  const recentReferrals: RecentReferral[] = (referralResult.data || []).map((row) => ({
    ref: ((row.properties as Record<string, unknown>)?.ref as string) || "?",
    referrer: row.referrer as string | null,
    created_at: row.created_at as string,
  }));

  return {
    daily: (daily.data as DailyStat[]) || [],
    topPages: (topPages.data as TopPage[]) || [],
    topEvents: (topEvents.data as TopEvent[]) || [],
    funnel: (funnel.data as FunnelStep[]) || [],
    exitPages: (exitPages.data as ExitPage[]) || [],
    activeSessions: typeof active.data === "number" ? active.data : 0,
    trafficSources: trafficSources.slice(0, 10),
    recentReferrals,
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
  let offset = 0;
  const circumference = 2 * Math.PI * r;

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
          const el = (
            <circle
              key={item.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={strokeW}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              className="transition-all duration-500"
            />
          );
          offset += dash;
          return el;
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
    <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--border)]">
      <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{title}</h2>
      {children}
    </div>
  );
}

// ── Main Dashboard ──

export default function AnalyticsDashboard() {
  usePageTitle("Analytics");
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === "1");
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

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

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
    <div className="max-w-5xl mx-auto p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">Analytics</h1>
          {data.activeSessions > 0 && (
            <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-full">
              <LiveDot />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {data.activeSessions} aktiv
              </span>
            </div>
          )}
        </div>
        <button
          onClick={load}
          className="text-xs text-[var(--accent)] hover:underline cursor-pointer"
        >
          Aktualisieren
        </button>
      </div>

      {/* 1. Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="Heute" value={formatNum(todayVisitors)} color="#3b82f6" />
        <MetricCard label="7 Tage" value={formatNum(weekVisitors)} color="#8b5cf6" />
        <MetricCard
          label="30 Tage"
          value={formatNum(monthVisitors)}
          sub={`${monthSignups} Signups`}
          color="#06b6d4"
        />
        <MetricCard
          label="Signup-Rate"
          value={`${signupRate}%`}
          sub="Besucher → Signup"
          color="#10b981"
        />
      </div>

      {/* 2. Visitor Sparkline Area Chart */}
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
        <SparkArea data={data.daily} height={160} />
      </Section>

      {/* 3. Funnel */}
      <Section title="Conversion Funnel (30 Tage)">
        <FunnelViz steps={FUNNEL_STEPS} data={data.funnel} />
      </Section>

      {/* 4. Top Pages + Events */}
      <div className="grid grid-cols-2 gap-4">
        <Section title="Top Seiten (7 Tage)">
          <HorizontalBars
            items={data.topPages.map((p) => ({
              label: shortPath(p.page_path),
              value: p.views,
              sub: `${p.visitors} unique`,
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
      </div>

      {/* 5. Traffic Sources (Donut) + Referrals */}
      <div className="grid grid-cols-2 gap-4">
        <Section title="Traffic-Quellen (30 Tage)">
          <DonutChart
            items={data.trafficSources.map((s) => ({ label: s.domain, value: s.count }))}
          />
        </Section>
        <Section title="Letzte Referrals">
          {data.recentReferrals.length === 0 ? (
            <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Referrals</p>
          ) : (
            <div className="space-y-2">
              {data.recentReferrals.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm py-1.5 border-b border-[var(--border)]/30 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[10px] font-bold text-[var(--accent)]">
                      {r.ref.slice(0, 2)}
                    </span>
                    <span className="font-medium text-[var(--text-primary)]">?ref={r.ref}</span>
                  </div>
                  <span className="text-xs text-[var(--muted)]">{timeAgo(r.created_at)}</span>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* 6. Exit Pages */}
      <Section title="Top Absprung-Seiten (7 Tage)">
        <HorizontalBars
          items={data.exitPages.map((p) => ({ label: shortPath(p.page_path), value: p.exits }))}
          color="#ef4444"
        />
      </Section>
    </div>
  );
}
