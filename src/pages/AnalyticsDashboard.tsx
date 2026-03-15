import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { usePageTitle } from "@/hooks/usePageTitle";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

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

type DashboardData = {
  daily: DailyStat[];
  topPages: TopPage[];
  topEvents: TopEvent[];
  funnel: FunnelStep[];
  exitPages: ExitPage[];
  activeSessions: number;
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

// ── Data fetching ──

async function fetchDashboard(): Promise<DashboardData> {
  if (!supabase) {
    return { daily: [], topPages: [], topEvents: [], funnel: [], exitPages: [], activeSessions: 0 };
  }

  const [daily, topPages, topEvents, funnel, exitPages, active] = await Promise.all([
    supabase.rpc("analytics_daily_stats", { days_back: 30 }),
    supabase.rpc("analytics_top_pages", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_top_events", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_funnel", { days_back: 30 }),
    supabase.rpc("analytics_exit_pages", { days_back: 7, lim: 10 }),
    supabase.rpc("analytics_active_sessions"),
  ]);

  return {
    daily: (daily.data as DailyStat[]) || [],
    topPages: (topPages.data as TopPage[]) || [],
    topEvents: (topEvents.data as TopEvent[]) || [],
    funnel: (funnel.data as FunnelStep[]) || [],
    exitPages: (exitPages.data as ExitPage[]) || [],
    activeSessions: typeof active.data === "number" ? active.data : 0,
  };
}

// ── Components ──

function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-[var(--surface)] rounded-lg p-4">
      <div className="text-xs text-[var(--muted)] mb-1">{label}</div>
      <div className="text-2xl font-bold text-[var(--text-primary)]">{value}</div>
    </div>
  );
}

function VisitorChart({ data }: { data: DailyStat[] }) {
  if (data.length === 0) {
    return <p className="text-sm text-[var(--muted)] py-8 text-center">Noch keine Daten</p>;
  }

  const chartData = data.map((d) => ({
    day: d.day.slice(5), // MM-DD
    Besucher: d.visitors,
    Aufrufe: d.page_views,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="day" tick={{ fontSize: 11, fill: "var(--muted)" }} />
        <YAxis tick={{ fontSize: 11, fill: "var(--muted)" }} allowDecimals={false} />
        <Tooltip
          contentStyle={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            fontSize: 12,
          }}
        />
        <Bar dataKey="Besucher" fill="var(--accent)" radius={[3, 3, 0, 0]} />
        <Bar dataKey="Aufrufe" fill="var(--muted)" radius={[3, 3, 0, 0]} opacity={0.5} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function FunnelViz({ steps, data }: { steps: typeof FUNNEL_STEPS; data: FunnelStep[] }) {
  const lookup = Object.fromEntries(data.map((d) => [d.step, d.visitors]));
  const maxVal = Math.max(1, ...Object.values(lookup));

  return (
    <div className="space-y-2">
      {steps.map(({ key, label }) => {
        const val = lookup[key] || 0;
        const pct = Math.round((val / maxVal) * 100);
        return (
          <div key={key} className="flex items-center gap-3">
            <div className="w-36 text-xs text-[var(--text-secondary)] truncate">{label}</div>
            <div className="flex-1 h-5 bg-[var(--background)] rounded overflow-hidden">
              <div
                className="h-full rounded transition-all"
                style={{
                  width: `${pct}%`,
                  background:
                    pct > 50
                      ? "var(--accent)"
                      : pct > 20
                        ? "var(--warning, #f59e0b)"
                        : "var(--error, #ef4444)",
                }}
              />
            </div>
            <div className="w-16 text-right text-xs font-medium text-[var(--text-primary)]">
              {val} ({pct}%)
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RankedList({
  items,
  labelKey,
  valueKey,
  formatLabel,
  suffix,
}: {
  items: Record<string, unknown>[];
  labelKey: string;
  valueKey: string;
  formatLabel?: (v: string) => string;
  suffix?: string;
}) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--muted)] py-4 text-center">Keine Daten</p>;
  }
  return (
    <div className="space-y-1.5">
      {items.map((item, i) => {
        const label = String(item[labelKey] ?? "");
        const value = Number(item[valueKey] ?? 0);
        return (
          <div key={label + i} className="flex items-center gap-2 text-sm">
            <span className="w-5 text-right text-[var(--muted)] text-xs">{i + 1}.</span>
            <span className="flex-1 text-[var(--text-secondary)] truncate">
              {formatLabel ? formatLabel(label) : label}
            </span>
            <span className="font-medium text-[var(--text-primary)]">
              {formatNum(value)}
              {suffix ? ` ${suffix}` : ""}
            </span>
          </div>
        );
      })}
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
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-sm text-red-500 mb-3">{error}</p>
        <button onClick={load} className="text-sm text-[var(--accent)] hover:underline">
          Erneut laden
        </button>
      </div>
    );
  }

  if (!data) return null;

  const today = sumField(data.daily, "visitors", 1);
  const week = sumField(data.daily, "visitors", 7);
  const month = sumField(data.daily, "visitors", 30);
  const pvToday = sumField(data.daily, "page_views", 1);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-[var(--text-primary)]">Analytics</h1>
        <button onClick={load} className="text-xs text-[var(--accent)] hover:underline">
          Aktualisieren
        </button>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <MetricCard label="Besucher heute" value={formatNum(today)} />
        <MetricCard label="7 Tage" value={formatNum(week)} />
        <MetricCard label="30 Tage" value={formatNum(month)} />
        <MetricCard label="Aktive Sessions" value={data.activeSessions} />
      </div>

      {/* Chart */}
      <div className="bg-[var(--surface)] rounded-lg p-4">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Besucher & Aufrufe (30 Tage)
        </h2>
        <VisitorChart data={data.daily} />
        <div className="flex gap-4 mt-2 text-xs text-[var(--muted)]">
          <span>Seitenaufrufe heute: {formatNum(pvToday)}</span>
        </div>
      </div>

      {/* Top pages + events side by side */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-lg p-4">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Top Seiten (7 Tage)
          </h2>
          <RankedList
            items={data.topPages as unknown as Record<string, unknown>[]}
            labelKey="page_path"
            valueKey="views"
            formatLabel={shortPath}
          />
        </div>
        <div className="bg-[var(--surface)] rounded-lg p-4">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Top Events (7 Tage)
          </h2>
          <RankedList
            items={data.topEvents as unknown as Record<string, unknown>[]}
            labelKey="event_name"
            valueKey="count"
            formatLabel={formatEventName}
          />
        </div>
      </div>

      {/* Funnel */}
      <div className="bg-[var(--surface)] rounded-lg p-4">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Conversion Funnel (30 Tage)
        </h2>
        <FunnelViz steps={FUNNEL_STEPS} data={data.funnel} />
      </div>

      {/* Exit pages */}
      <div className="bg-[var(--surface)] rounded-lg p-4">
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          Top Absprung-Seiten (7 Tage)
        </h2>
        <RankedList
          items={data.exitPages as unknown as Record<string, unknown>[]}
          labelKey="page_path"
          valueKey="exits"
          formatLabel={shortPath}
          suffix="Exits"
        />
      </div>
    </div>
  );
}
