import { useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { BookOpen, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLoadingSkeleton, PageError } from "@/components/ui/page-states";
import { usePageTitle } from "@/hooks/usePageTitle";
import KFFStrategyView from "@/components/shared/KFFStrategyView";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { FirstTimeKffIntro } from "@/components/kff/FirstTimeKffIntro";
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
import { useEffect } from "react";

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
  const [searchParams] = useSearchParams();

  const startParam = searchParams.get("start");
  const initialView: KffView =
    startParam && QUICK_START_VIEWS[startParam] ? QUICK_START_VIEWS[startParam] : "overview";
  const [view, setView] = useState<KffView>(initialView);
  const [strategyKey, setStrategyKey] = useState<StrategyKey>("zahlenfolgen");
  const { user, loading: isLoading } = useAuth();
  const kffDomainIntroSeen = useStore((s) => s.kffDomainIntroSeen);
  const markKffDomainIntroSeen = useStore((s) => s.markKffDomainIntroSeen);
  const quizResults = useStore((s) => s.quizResults);
  const [authTimedOut, setAuthTimedOut] = useState(false);
  const autoStartRef = useRef(false);

  // Compute per-module progress from quizResults — must be before early returns (Rules of Hooks)
  const modules = useMemo(() => {
    const getStats = (subject: string) => {
      const results = (quizResults ?? []).filter((r) => r.type === "kff" && r.subject === subject);
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
    if (!kffDomainIntroSeen["figuren"]) {
      return (
        <FirstTimeKffIntro
          strategyKey="figuren"
          onContinue={() => markKffDomainIntroSeen("figuren")}
          onBack={() => setView("overview")}
        />
      );
    }
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
    if (!kffDomainIntroSeen["zahlenfolgen"]) {
      return (
        <FirstTimeKffIntro
          strategyKey="zahlenfolgen"
          onContinue={() => markKffDomainIntroSeen("zahlenfolgen")}
          onBack={() => setView("overview")}
        />
      );
    }
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
    if (!kffDomainIntroSeen["gedaechtnis"]) {
      return (
        <FirstTimeKffIntro
          strategyKey="gedaechtnis"
          onContinue={() => markKffDomainIntroSeen("gedaechtnis")}
          onBack={() => setView("overview")}
        />
      );
    }
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
    if (!kffDomainIntroSeen["implikationen"]) {
      return (
        <FirstTimeKffIntro
          strategyKey="implikationen"
          onContinue={() => markKffDomainIntroSeen("implikationen")}
          onBack={() => setView("overview")}
        />
      );
    }
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
    if (!kffDomainIntroSeen["wortflüssigkeit"]) {
      return (
        <FirstTimeKffIntro
          strategyKey="wortflüssigkeit"
          onContinue={() => markKffDomainIntroSeen("wortflüssigkeit")}
          onBack={() => setView("overview")}
        />
      );
    }
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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Kognitive Fähigkeiten & Fertigkeiten
          </h1>
          <span className="text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
            40% des MedAT
          </span>
        </div>
        <p className="text-sm text-[var(--muted)] max-w-2xl leading-relaxed">
          5 Aufgabentypen, die logisches Denken, Merkfähigkeit und räumliches Vorstellungsvermögen
          prüfen. Jeder Untertest wird separat gewertet — trainiere alle regelmäßig.
        </p>
      </div>

      {/* Module cards */}
      <div className="space-y-4">
        {modules.map((m) => (
          <div
            key={m.id}
            className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5"
          >
            <div className="flex items-start gap-4">
              {/* Color bar */}
              <div
                className="w-1 self-stretch rounded-full shrink-0"
                style={{ background: m.color }}
              />

              <div className="flex-1 min-w-0">
                {/* Title row */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[var(--text-primary)]">{m.title}</h3>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${m.color}15`, color: m.color }}
                  >
                    {m.badge}
                  </span>
                </div>

                {/* Format explanation */}
                <p className="text-sm text-[var(--text-secondary)] mb-2">{m.format}</p>

                {/* Example */}
                <div className="text-xs text-[var(--muted)] bg-[var(--background)] rounded-lg px-3 py-1.5 inline-block font-mono mb-3">
                  {m.example}
                </div>

                {/* Progress + Actions */}
                {m.stats.total > 0 && (
                  <div className="flex items-center gap-3 mb-3 text-xs text-[var(--muted)]">
                    <span>{m.stats.total} Aufgaben geübt</span>
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
                )}
                <div className="flex items-center gap-2">
                  <Button
                    variant="premium"
                    size="sm"
                    onClick={() => {
                      autoStartRef.current = false;
                      setView(m.startView);
                    }}
                  >
                    <Play className="w-4 h-4 mr-1" /> Üben
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStrategyKey(m.strategyKey);
                      setView("strategy");
                    }}
                  >
                    <BookOpen className="w-4 h-4 mr-1" /> Strategie
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats section — collapsible, below subtest cards */}
      <KFFStatsSection />
    </div>
  );
}
