import { useState, useRef } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { BookOpen, Play, BarChart3, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLoadingSkeleton, PageError } from "@/components/ui/page-states";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { usePageTitle } from "@/hooks/usePageTitle";
import KFFStrategyView from "@/components/shared/KFFStrategyView";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { FirstTimeKffIntro } from "@/components/kff/FirstTimeKffIntro";
import { ZahlenfolgenQuiz } from "@/components/kff/ZahlenfolgenQuiz";
import {
  GedaechtnisSetup,
  GedaechtnisLearn,
  GedaechtnisQuiz,
} from "@/components/kff/GedaechtnisQuiz";
import { ImplikationenQuiz } from "@/components/kff/ImplikationenQuiz";
import { WortflüssigkeitQuiz } from "@/components/kff/WortfluessigkeitQuiz";
import { FigurenQuiz } from "@/components/kff/FigurenQuiz";
import { useEffect } from "react";

type KffView =
  | "overview"
  | "strategy"
  | "zahlenfolgen"
  | "gedaechtnis-setup"
  | "gedaechtnis-learn"
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
};

export default function KFF() {
  usePageTitle("KFF – Kognitive Fähigkeiten");
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dailyPlanKff = location.state?.dailyPlanKff as
    | { domain: string; count: number }[]
    | undefined;
  const planZfCount = dailyPlanKff?.find((t) => t.domain === "kff-zahlenfolgen")?.count ?? 0;
  const planImpCount = dailyPlanKff?.find((t) => t.domain === "kff-implikationen")?.count ?? 0;

  const startParam = searchParams.get("start");
  const initialView: KffView =
    planZfCount > 0 || planImpCount > 0
      ? "zahlenfolgen"
      : startParam && QUICK_START_VIEWS[startParam]
        ? QUICK_START_VIEWS[startParam]
        : "overview";
  const [view, setView] = useState<KffView>(initialView);
  const [strategyKey, setStrategyKey] = useState<StrategyKey>("zahlenfolgen");
  const { user, loading: isLoading } = useAuth();
  const { kffDomainIntroSeen, markKffDomainIntroSeen } = useStore();
  const [authTimedOut, setAuthTimedOut] = useState(false);
  const autoStartRef = useRef(false);

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
    return <FigurenQuiz onBack={() => setView("overview")} autoStart={autoStartRef.current} />;
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
        onBack={() => setView("overview")}
        initialQuestionCount={planZfCount > 0 ? planZfCount : undefined}
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
        onStart={() => setView("gedaechtnis-quiz")}
        onBack={() => setView("gedaechtnis-setup")}
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
        onBack={() => setView("overview")}
        initialQuestionCount={planImpCount > 0 ? planImpCount : undefined}
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
      <WortflüssigkeitQuiz onBack={() => setView("overview")} autoStart={autoStartRef.current} />
    );
  }

  const modules = [
    {
      id: "zahlenfolgen" as const,
      title: "Zahlenfolgen",
      desc: "Erkenne das Muster und finde die nächste Zahl. Unendlich viele geprüfte Trainingsaufgaben.",
      strategyKey: "zahlenfolgen" as StrategyKey,
      startView: "zahlenfolgen" as KffView,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      badge: "Unbegrenzt",
    },
    {
      id: "gedaechtnis" as const,
      title: "Gedächtnis & Merkfähigkeit (Allergiepässe)",
      desc: "Lernphase: Allergieausweise einprägen. Prüfphase: Fragen A–E wie im MedAT.",
      strategyKey: "gedaechtnis" as StrategyKey,
      startView: "gedaechtnis-setup" as KffView,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      badge: "MedAT-Format",
    },
    {
      id: "implikationen" as const,
      title: "Implikationen erkennen",
      desc: "Kategorische Syllogismen: Alle/Einige/Kein — finde die korrekte Schlussfolgerung (A-E).",
      badge: "Unbegrenzt",
      strategyKey: "implikationen" as StrategyKey,
      startView: "implikationen" as KffView,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "wortflüssigkeit" as const,
      title: "Wortflüssigkeit",
      desc: "Erkenne das Wort aus den vertauschten Buchstaben. Mit welchem Buchstaben beginnt es?",
      strategyKey: "wortflüssigkeit" as StrategyKey,
      startView: "wortflüssigkeit" as KffView,
      color: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-600 dark:text-orange-400",
      badge: "930+ Aufgaben",
    },
    {
      id: "figuren" as const,
      title: "Figuren zusammensetzen",
      desc: "Welche Figur entsteht aus den Puzzleteilen? Trainiere räumliches Vorstellungsvermögen.",
      strategyKey: "figuren" as StrategyKey,
      startView: "figuren-quiz" as KffView,
      color: "bg-rose-100 dark:bg-rose-900/30",
      textColor: "text-rose-600 dark:text-rose-400",
      icon: "puzzle",
      badge: "Unbegrenzt",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "KFF" }]} />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          KFF - Kognitive Fähigkeiten
        </h1>
        <p className="text-muted mt-1">
          Trainiere Zahlenfolgen, Gedächtnis, logisches Denken und Wortflüssigkeit.
        </p>
        <Badge variant="info" className="mt-2 text-xs font-normal">
          An dein Level angepasst
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {modules.map((m) => (
          <Card key={m.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${m.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  {m.icon === "puzzle" ? (
                    <Puzzle className={`w-5 h-5 ${m.textColor}`} />
                  ) : (
                    <BarChart3 className={`w-5 h-5 ${m.textColor}`} />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{m.title}</h3>
                    {m.badge && (
                      <Badge variant="info" className="text-[10px]">
                        {m.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-0.5">{m.desc}</p>
                </div>
              </div>
              <div className="flex gap-2">
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
                <Button variant="outline" size="sm" onClick={() => setView(m.startView)}>
                  Einrichten
                </Button>
                {m.id !== "gedaechtnis" && (
                  <Button
                    size="sm"
                    onClick={() => {
                      autoStartRef.current = true;
                      setView(m.startView);
                    }}
                  >
                    <Play className="w-4 h-4 mr-1" /> Los
                  </Button>
                )}
                {m.id === "gedaechtnis" && (
                  <Button size="sm" onClick={() => setView(m.startView)}>
                    <Play className="w-4 h-4 mr-1" /> Starten
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
