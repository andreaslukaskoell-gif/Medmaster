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

const FUNNEL_STEPS: { key: string; label: string }[] = [
  { key: "page_view", label: "Besucher" },
  { key: "cta_click", label: "CTA geklickt" },
  { key: "signup_click", label: "Signup geklickt" },
  { key: "signup", label: "Registriert" },
  { key: "onboarding_complete", label: "Onboarding fertig" },
  { key: "chapter_open", label: "Kapitel geöffnet" },
  { key: "quiz_start", label: "Quiz gestartet" },
  { key: "quiz_complete", label: "Quiz abgeschlossen" },
];

// ── Helpers ──

function shortPath(path: string) {
  if (path === "/") return "/ (Landing)";
  return path.length > 30 ? path.slice(0, 30) + "..." : path;
}

function formatEventName(name: string) {
  return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatNum(n: number): string {
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
  if (mins < 60) return `vor ${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `vor ${hours}h`;
  const days = Math.floor(hours / 24);
  return `vor ${days}d`;
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

  // Check if table exists by looking for specific error patterns
  const anyError = [daily, topPages, topEvents, funnel, exitPages, active].find((r) => r.error);
  if (anyError?.error?.message?.includes("does not exist") || anyError?.error?.code === "42883") {
    throw new Error(TABLE_MISSING_MSG);
  }

  // Fetch traffic sources (referrer field grouped by domain)
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
    for (const [domain, count] of Object.entries(domainCounts)) {
      trafficSources.push({ domain, count });
    }
    trafficSources.sort((a, b) => b.count - a.count);
  }

  // Fetch recent referral_visit events
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

// ── Components ──

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
      <div className="text-xs text-[var(--muted)] mb-1">{label}</div>
      <div className="text-2xl font-bold text-[var(--text-primary)]">{value}</div>
      {sub && <div className="text-xs text-[var(--muted)] mt-1">{sub}</div>}
    </div>
  );
}

function CSSBarChart({ data }: { data: DailyStat[] }) {
  if (data.length === 0) {
    return <p className="text-sm text-[var(--muted)] py-8 text-center">Noch keine Daten</p>;
  }

  const maxVisitors = Math.max(1, ...data.map((d) => d.visitors));
  const maxPageViews = Math.max(1, ...data.map((d) => d.page_views));
  const maxVal = Math.max(maxVisitors, maxPageViews);

  return (
    <div>
      {/* Legend */}
      <div className="flex gap-4 mb-3 text-xs text-[var(--muted)]">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: "var(--accent)" }}
          />
          Besucher
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 rounded-sm opacity-40"
            style={{ background: "var(--muted)" }}
          />
          Aufrufe
        </span>
      </div>
      {/* Chart area */}
      <div className="flex items-end gap-[2px]" style={{ height: 180 }}>
        {data.map((d) => {
          const visitorH = Math.max(2, (d.visitors / maxVal) * 160);
          const pvH = Math.max(2, (d.page_views / maxVal) * 160);
          return (
            <div
              key={d.day}
              className="flex-1 flex items-end gap-[1px] group relative"
              title={`${d.day}: ${d.visitors} Besucher, ${d.page_views} Aufrufe`}
            >
              <div
                className="flex-1 rounded-t-sm transition-all"
                style={{ height: visitorH, background: "var(--accent)" }}
              />
              <div
                className="flex-1 rounded-t-sm transition-all opacity-40"
                style={{ height: pvH, background: "var(--muted)" }}
              />
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-[var(--surface)] border border-[var(--border)] rounded px-2 py-1 text-xs whitespace-nowrap z-10 shadow-sm">
                <div className="font-medium text-[var(--text-primary)]">{d.day.slice(5)}</div>
                <div className="text-[var(--text-secondary)]">{d.visitors} Besucher</div>
                <div className="text-[var(--muted)]">{d.page_views} Aufrufe</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* X-axis labels (show every ~5th) */}
      <div className="flex gap-[2px] mt-1">
        {data.map((d, i) => (
          <div key={d.day} className="flex-1 text-center text-[10px] text-[var(--muted)] truncate">
            {i % Math.max(1, Math.floor(data.length / 6)) === 0 ? d.day.slice(5) : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function FunnelViz({ steps, data }: { steps: typeof FUNNEL_STEPS; data: FunnelStep[] }) {
  const lookup = Object.fromEntries(data.map((d) => [d.step, d.visitors]));
  const firstVal = lookup[steps[0]?.key] || 0;
  const maxVal = Math.max(1, ...Object.values(lookup));

  return (
    <div className="space-y-1">
      {steps.map(({ key, label }, i) => {
        const val = lookup[key] || 0;
        const pct = Math.round((val / maxVal) * 100);
        // Drop-off from previous step
        const prevVal = i > 0 ? lookup[steps[i - 1].key] || 0 : 0;
        const dropOff = i > 0 && prevVal > 0 ? Math.round(((prevVal - val) / prevVal) * 100) : null;
        // Conversion from first step
        const convFromStart = i > 0 && firstVal > 0 ? ((val / firstVal) * 100).toFixed(1) : null;

        return (
          <div key={key}>
            {dropOff !== null && dropOff > 0 && (
              <div className="text-[10px] text-[var(--muted)] ml-36 pl-3 py-0.5">
                -{dropOff}% Drop-off
              </div>
            )}
            <div className="flex items-center gap-3">
              <div className="w-36 text-xs text-[var(--text-secondary)] truncate">{label}</div>
              <div className="flex-1 h-6 bg-[var(--background)] rounded overflow-hidden">
                <div
                  className="h-full rounded transition-all flex items-center px-2"
                  style={{
                    width: `${Math.max(pct, 2)}%`,
                    background:
                      pct > 50
                        ? "var(--accent)"
                        : pct > 20
                          ? "var(--warning, #f59e0b)"
                          : "var(--error, #ef4444)",
                  }}
                >
                  {pct > 15 && <span className="text-[10px] font-medium text-white">{val}</span>}
                </div>
              </div>
              <div className="w-24 text-right text-xs text-[var(--text-primary)]">
                <span className="font-medium">{val}</span>
                {convFromStart && (
                  <span className="text-[var(--muted)] ml-1">({convFromStart}%)</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  if (rows.length === 0) {
    return <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Daten</p>;
  }
  return (
    <table className="w-full text-sm">
      <thead>
        <tr>
          {headers.map((h) => (
            <th
              key={h}
              className="text-left text-xs font-medium text-[var(--muted)] pb-2 border-b border-[var(--border)]"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[var(--border)]/50">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`py-2 ${j === 0 ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)] font-medium"} ${j > 0 ? "text-right" : ""}`}
              >
                {typeof cell === "number" ? formatNum(cell) : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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
      const result = await fetchDashboard();
      setData(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Fehler beim Laden");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (unlocked) load();
  }, [load, unlocked]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

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

  // Key metrics
  const monthVisitors = sumField(data.daily, "visitors", 30);
  const funnelLookup = Object.fromEntries(data.funnel.map((d) => [d.step, d.visitors]));
  const monthSignups = funnelLookup["signup"] || 0;
  const signupRate = monthVisitors > 0 ? ((monthSignups / monthVisitors) * 100).toFixed(1) : "0";
  const activeLearners = funnelLookup["quiz_complete"] || 0;
  const pvToday = sumField(data.daily, "page_views", 1);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-[var(--text-primary)]">Analytics Dashboard</h1>
        <button
          onClick={load}
          className="text-xs text-[var(--accent)] hover:underline cursor-pointer"
        >
          Aktualisieren
        </button>
      </div>

      {/* 1. Key Metrics Row */}
      <div className="grid grid-cols-4 gap-3">
        <MetricCard
          label="Besucher (30 Tage)"
          value={formatNum(monthVisitors)}
          sub={`${formatNum(pvToday)} Aufrufe heute`}
        />
        <MetricCard label="Registrierungen (30 Tage)" value={formatNum(monthSignups)} />
        <MetricCard label="Signup-Rate" value={`${signupRate}%`} sub="Signups / Besucher" />
        <MetricCard
          label="Aktive Lernende"
          value={formatNum(activeLearners)}
          sub="mit Quiz abgeschlossen"
        />
      </div>

      {/* 2. Visitor Chart (CSS bars, no recharts) */}
      <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Besucher & Aufrufe (30 Tage)
        </h2>
        <CSSBarChart data={data.daily} />
      </div>

      {/* 3. Registration Funnel */}
      <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Conversion Funnel (30 Tage)
        </h2>
        <FunnelViz steps={FUNNEL_STEPS} data={data.funnel} />
      </div>

      {/* 4. Top Pages + Top Events side by side */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Top Seiten (7 Tage)
          </h2>
          <DataTable
            headers={["Seite", "Aufrufe", "Besucher"]}
            rows={data.topPages.map((p) => [shortPath(p.page_path), p.views, p.visitors])}
          />
        </div>
        <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Top Events (7 Tage)
          </h2>
          <DataTable
            headers={["Event", "Anzahl"]}
            rows={data.topEvents.map((e) => [formatEventName(e.event_name), e.count])}
          />
        </div>
      </div>

      {/* 5. Traffic Sources + Recent Referrals side by side */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Traffic-Quellen (30 Tage)
          </h2>
          {data.trafficSources.length === 0 ? (
            <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Daten</p>
          ) : (
            <DataTable
              headers={["Domain", "Besuche"]}
              rows={data.trafficSources.map((s) => [s.domain, s.count])}
            />
          )}
        </div>
        <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Letzte Referrals
          </h2>
          {data.recentReferrals.length === 0 ? (
            <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Referrals</p>
          ) : (
            <div className="space-y-2">
              {data.recentReferrals.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm border-b border-[var(--border)]/50 pb-1.5"
                >
                  <div>
                    <span className="font-medium text-[var(--accent)]">?ref={r.ref}</span>
                    {r.referrer && (
                      <span className="text-[var(--muted)] ml-2 text-xs">
                        via {extractDomain(r.referrer)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[var(--muted)]">{timeAgo(r.created_at)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 6. Exit Pages */}
      <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Top Absprung-Seiten (7 Tage)
        </h2>
        <DataTable
          headers={["Seite", "Exits"]}
          rows={data.exitPages.map((p) => [shortPath(p.page_path), p.exits])}
        />
      </div>
    </div>
  );
}
