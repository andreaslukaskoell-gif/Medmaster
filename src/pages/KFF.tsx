import { useState, useRef, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BookOpen, Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLoadingSkeleton, PageError } from "@/components/ui/page-states";
import { usePageTitle } from "@/hooks/usePageTitle";
import KFFStrategyView from "@/components/shared/KFFStrategyView";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { useViewportMode } from "@/hooks/useViewportMode";
import { usePermissions } from "@/hooks/usePermissions";
import { PaywallBanner } from "@/components/ui/paywall";
import { UsageLimitWarning } from "@/components/ui/UsageLimitWarning";
import { trackEvent } from "@/lib/analyticsTracker";
import { ZahlenfolgenQuiz } from "@/components/kff/ZahlenfolgenQuiz";
import {
  GedaechtnisSetup,
  GedaechtnisLearn,
  GedaechtnisInterferenz,
  GedaechtnisQuiz,
} from "@/components/kff/GedaechtnisQuiz";
import { ImplikationenQuiz } from "@/components/kff/ImplikationenQuiz";
import { WortflüssigkeitQuiz } from "@/components/kff/WortfluessigkeitQuiz";
import { FigurenQuiz } from "@/components/kff/FigurenQuiz";
import { KFFStatsSection } from "@/components/kff/KFFStatsSection";

/** Stable reference for empty quizResults to prevent unnecessary re-renders. */
const STABLE_EMPTY_RESULTS: never[] = [];

type KffView =
  | "overview"
  | "strategy"
  | "zahlenfolgen"
  | "gedaechtnis-setup"
  | "gedaechtnis-learn"
  | "gedaechtnis-interferenz"
  | "gedaechtnis-quiz"
  | "implikationen"
  | "wortflüssigkeit"
  | "figuren-quiz";
type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

const QUICK_START_VIEWS: Record<string, KffView> = {
  zahlenfolgen: "zahlenfolgen",
  implikationen: "implikationen",
  gedaechtnis: "gedaechtnis-setup",
  wortfluessigkeit: "wortflüssigkeit",
  figuren: "figuren-quiz",
};

export default function KFF() {
  usePageTitle("KFF – Kognitive Fähigkeiten");
  const { isMobile } = useViewportMode();
  const [searchParams] = useSearchParams();

  const startParam = searchParams.get("start");
  const initialView: KffView =
    startParam && QUICK_START_VIEWS[startParam] ? QUICK_START_VIEWS[startParam] : "overview";
  const [view, setView] = useState<KffView>(initialView);
  const [strategyKey, setStrategyKey] = useState<StrategyKey>("zahlenfolgen");
  const { user, loading: isLoading } = useAuth();
  const { getLimit } = usePermissions();
  const kffPerSubtest = getLimit("kff_per_subtest");
  const kffGmLimit = getLimit("kff_gm");
  const quizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_RESULTS);
  const [authTimedOut, setAuthTimedOut] = useState(false);
  const autoStartRef = useRef(false);

  // Compute per-module progress from quizResults — must be before early returns (Rules of Hooks)
  const modules = useMemo(() => {
    const getStats = (subject: string) => {
      const results = quizResults.filter((r) => r.type === "kff" && r.subject === subject);
      const total = results.reduce((s, r) => s + r.total, 0);
      const correct = results.reduce((s, r) => s + r.score, 0);
      return {
        sessions: results.length,
        total,
        correct,
        pct: total > 0 ? Math.round((correct / total) * 100) : 0,
      };
    };
    return [
      {
        id: "zahlenfolgen" as const,
        title: "Zahlenfolgen",
        format: "Zahlenreihe mit Lücke — erkenne das Muster, finde die nächste Zahl",
        example: "2, 5, 11, 23, ?",
        badge: "100+",
        strategyKey: "zahlenfolgen" as StrategyKey,
        learningKey: "zahlenfolgen" as const,
        startView: "zahlenfolgen" as KffView,
        icon: "chart",
        color: "#3b82f6",
        stats: getStats("Zahlenfolgen"),
      },
      {
        id: "gedaechtnis" as const,
        title: "Gedächtnis & Merkfähigkeit",
        format: "Allergieausweise einprägen, dann Fragen dazu beantworten (A–E)",
        example: "8 Ausweise → 8 Min. lernen → 25 Fragen",
        badge: "MedAT-Format",
        strategyKey: "gedaechtnis" as StrategyKey,
        learningKey: "gedaechtnis" as const,
        startView: "gedaechtnis-setup" as KffView,
        icon: "chart",
        color: "#10b981",
        stats: getStats("Gedächtnis"),
      },
      {
        id: "implikationen" as const,
        title: "Implikationen erkennen",
        format: "Aus Prämissen (Alle/Einige/Keine) die korrekte Schlussfolgerung wählen",
        example: "Alle A sind B. Einige B sind C. → ?",
        badge: "200+",
        strategyKey: "implikationen" as StrategyKey,
        learningKey: "implikationen" as const,
        startView: "implikationen" as KffView,
        icon: "chart",
        color: "#8b5cf6",
        stats: getStats("Implikationen"),
      },
      {
        id: "wortflüssigkeit" as const,
        title: "Wortflüssigkeit",
        format: "Buchstaben sind vertauscht — finde das richtige Wort und seinen Anfangsbuchstaben",
        example: "FKARE → FARKE? KRAFE? → Antwort: K",
        badge: "720+",
        strategyKey: "wortflüssigkeit" as StrategyKey,
        learningKey: "wortfluessigkeit" as const,
        startView: "wortflüssigkeit" as KffView,
        icon: "chart",
        color: "#f59e0b",
        stats: getStats("Wortflüssigkeit"),
      },
      {
        id: "figuren" as const,
        title: "Figuren zusammensetzen",
        format: "Puzzleteile im Kopf zusammenfügen — welche Figur entsteht?",
        example: "3–5 Teile → 1 aus 5 Figuren wählen",
        badge: "10.000+",
        strategyKey: "figuren" as StrategyKey,
        learningKey: "figuren" as const,
        startView: "figuren-quiz" as KffView,
        icon: "puzzle",
        color: "#ec4899",
        stats: getStats("Figuren zusammensetzen"),
      },
    ];
  }, [quizResults]);

  useEffect(() => {
    if (!isLoading) return;
    const t = setTimeout(() => setAuthTimedOut(true), 5000);
    return () => clearTimeout(t);
  }, [isLoading]);

  // Track first lesson started (once per user, ever)
  useEffect(() => {
    if (view === "overview" || view === "strategy") return;
    const FIRST_LESSON_KEY = "medmaster_first_lesson_tracked";
    if (!localStorage.getItem(FIRST_LESSON_KEY)) {
      trackEvent("first_lesson_started", { source: "kff" });
      localStorage.setItem(FIRST_LESSON_KEY, "1");
    }
  }, [view]);

  if (isLoading && !authTimedOut) {
    return <PageLoadingSkeleton />;
  }
  if (authTimedOut || !user) {
    return (
      <PageError
        message="Zum Üben im KFF-Bereich musst du angemeldet sein. Sitzung abgelaufen oder nicht eingeloggt? Bitte melde dich erneut an."
        action={
          <Button asChild variant="outline" className="gap-2">
            <a href="/login">Zum Login</a>
          </Button>
        }
      />
    );
  }

  if (view === "figuren-quiz") {
    return (
      <FigurenQuiz
        onBack={() => {
          autoStartRef.current = false;
          setView("overview");
        }}
        // eslint-disable-next-line react-hooks/refs
        autoStart={autoStartRef.current}
      />
    );
  }

  if (view === "strategy") {
    return <KFFStrategyView strategyKey={strategyKey} onBack={() => setView("overview")} />;
  }

  if (view === "zahlenfolgen") {
    return (
      <ZahlenfolgenQuiz
        onBack={() => {
          autoStartRef.current = false;
          setView("overview");
        }}
        // eslint-disable-next-line react-hooks/refs
        autoStart={autoStartRef.current}
      />
    );
  }
  if (view === "gedaechtnis-setup") {
    return (
      <GedaechtnisSetup
        onLearn={() => setView("gedaechtnis-learn")}
        onBack={() => setView("overview")}
      />
    );
  }
  if (view === "gedaechtnis-learn")
    return (
      <GedaechtnisLearn
        onStart={() => setView("gedaechtnis-interferenz")}
        onBack={() => setView("gedaechtnis-setup")}
      />
    );
  if (view === "gedaechtnis-interferenz")
    return (
      <GedaechtnisInterferenz
        onComplete={() => setView("gedaechtnis-quiz")}
        onSkip={() => setView("gedaechtnis-quiz")}
      />
    );
  if (view === "gedaechtnis-quiz") return <GedaechtnisQuiz onBack={() => setView("overview")} />;
  if (view === "implikationen") {
    return (
      <ImplikationenQuiz
        onBack={() => {
          autoStartRef.current = false;
          setView("overview");
        }}
        // eslint-disable-next-line react-hooks/refs
        autoStart={autoStartRef.current}
      />
    );
  }
  if (view === "wortflüssigkeit") {
    return (
      <WortflüssigkeitQuiz
        onBack={() => {
          autoStartRef.current = false;
          setView("overview");
        }}
        // eslint-disable-next-line react-hooks/refs
        autoStart={autoStartRef.current}
      />
    );
  }

  return (
    <div className={`max-w-4xl mx-auto ${isMobile ? "space-y-5" : "space-y-8"}`}>
      {/* Hero */}
      <div className="hero-orbs text-center py-8">
        <div
          className={`flex ${isMobile ? "flex-col gap-1.5" : "items-center gap-3 justify-center"} mb-2`}
        >
          <h1
            className={`${isMobile ? "text-xl" : "text-[3rem] leading-tight"} font-bold text-[var(--text-primary)] heading-glow`}
          >
            {isMobile ? "KFF – Kognitive Fähigkeiten" : "Kognitive Fähigkeiten & Fertigkeiten"}
          </h1>
          <span className="text-xs font-medium text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded w-fit">
            40 % des MedAT
          </span>
        </div>
        {!isMobile && (
          <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            5 Aufgabentypen, die logisches Denken, Merkfähigkeit und räumliches Vorstellungsvermögen
            prüfen. Jeder Untertest wird separat gewertet — trainiere alle regelmäßig.
          </p>
        )}
      </div>

      {/* Usage warning for starter users */}
      {kffPerSubtest !== null && (() => {
        const totalUsed = modules.reduce((s, m) => s + m.stats.total, 0);
        const totalLimit = modules.length * kffPerSubtest;
        return <UsageLimitWarning used={totalUsed} limit={totalLimit} label="KFF-Übungen" />;
      })()}

      {/* Module cards */}
      <div className={isMobile ? "space-y-3" : "space-y-4"}>
        {modules.map((m) => {
          const limit = m.id === "gedaechtnis" ? kffGmLimit : kffPerSubtest;
          const isSubtestLocked = limit !== null && m.stats.total >= limit;
          return (
            <div
              key={m.id}
              className={`card-glass ${isMobile ? "p-3.5" : "p-5"} ${isSubtestLocked ? "opacity-60" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-1 self-stretch rounded-full shrink-0"
                  style={{ background: m.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3
                      className={`font-semibold text-[var(--text-primary)] ${isMobile ? "text-sm" : ""}`}
                    >
                      {m.title}
                    </h3>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${m.color}15`, color: m.color }}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <p
                    className={`text-[var(--text-secondary)] mb-2 ${isMobile ? "text-xs leading-relaxed" : "text-sm"}`}
                  >
                    {m.format}
                  </p>
                  {!isMobile && (
                    <div className="text-xs text-[var(--muted)] bg-[var(--background)] rounded-lg px-3 py-1.5 inline-block font-mono mb-3">
                      {m.example}
                    </div>
                  )}
                  {m.stats.total > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-1.5">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {m.stats.total} geübt
                        </span>
                        <span>·</span>
                        <span
                          className={
                            m.stats.pct >= 70
                              ? "text-emerald-500 font-semibold"
                              : m.stats.pct >= 40
                                ? "text-amber-500 font-semibold"
                                : "text-red-400 font-semibold"
                          }
                        >
                          {m.stats.pct}% richtig
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-[var(--border)]">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${Math.min(m.stats.pct, 100)}%`,
                            background:
                              m.stats.pct >= 70
                                ? "#10b981"
                                : m.stats.pct >= 40
                                  ? "#f59e0b"
                                  : "#ef4444",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  {isSubtestLocked ? (
                    <PaywallBanner feature={`${m.title} freischalten`} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className={isMobile ? "flex-1 min-h-[44px]" : ""}
                        onClick={() => {
                          setStrategyKey(m.strategyKey);
                          setView("strategy");
                        }}
                      >
                        <BookOpen className="w-4 h-4 mr-1" /> Strategie
                      </Button>
                      <Button
                        variant="premium"
                        size="sm"
                        className={isMobile ? "flex-1 min-h-[44px]" : ""}
                        onClick={() => {
                          autoStartRef.current = false;
                          setView(m.startView);
                        }}
                      >
                        <Play className="w-4 h-4 mr-1" /> Üben
                        {limit !== null && (
                          <span className="ml-1 text-xs opacity-70">
                            ({m.stats.total}/{limit})
                          </span>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats section — collapsible, below subtest cards */}
      <KFFStatsSection />
    </div>
  );
}
