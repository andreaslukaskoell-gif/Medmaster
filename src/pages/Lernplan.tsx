import { useState } from "react";
import { CalendarDays, Clock, BookOpen, Brain, FileText, Heart, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { daysUntilMedAT } from "@/lib/utils";

const moduleIcons: Record<string, typeof BookOpen> = {
  BMS: BookOpen,
  KFF: Brain,
  TV: FileText,
  SEK: Heart,
};

const moduleColors: Record<string, string> = {
  BMS: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  KFF: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  TV: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  SEK: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400",
};

function generateWeeklyPlan(hoursPerWeek: number, weeksLeft: number) {
  const modules = ["BMS", "KFF", "TV", "SEK"];
  const weights = { BMS: 0.4, KFF: 0.25, TV: 0.2, SEK: 0.15 };
  const minutesPerWeek = hoursPerWeek * 60;

  const phases = [
    { name: "Grundlagen", weeks: Math.ceil(weeksLeft * 0.3), focus: "Theorie lesen, Grundkonzepte verstehen" },
    { name: "Vertiefung", weeks: Math.ceil(weeksLeft * 0.4), focus: "Übungsfragen, Schwächen bearbeiten" },
    { name: "Prüfungsphase", weeks: Math.max(1, weeksLeft - Math.ceil(weeksLeft * 0.7)), focus: "Simulationen, Wiederholung, Zeitmanagement" },
  ];

  const weeklyPlan = modules.map((mod) => {
    const w = weights[mod as keyof typeof weights];
    const mins = Math.round(minutesPerWeek * w);
    return {
      module: mod,
      minutesPerWeek: mins,
      tasks: getModuleTasks(mod, mins),
    };
  });

  return { weeklyPlan, phases, weeksLeft };
}

function getModuleTasks(module: string, minutes: number): string[] {
  switch (module) {
    case "BMS":
      return [
        `${Math.round(minutes * 0.4)} Min: Theorie-Kapitel lesen`,
        `${Math.round(minutes * 0.4)} Min: Übungsfragen (${Math.round(minutes / 5)} Fragen)`,
        `${Math.round(minutes * 0.2)} Min: Wiederholung (Spaced Repetition)`,
      ];
    case "KFF":
      return [
        `${Math.round(minutes * 0.3)} Min: Zahlenfolgen üben`,
        `${Math.round(minutes * 0.35)} Min: Implikationen trainieren`,
        `${Math.round(minutes * 0.35)} Min: Allergiepässe merken`,
      ];
    case "TV":
      return [
        `${Math.round(minutes * 0.3)} Min: Strategie wiederholen`,
        `${Math.round(minutes * 0.7)} Min: Übungstexte bearbeiten`,
      ];
    case "SEK":
      return [
        `${Math.round(minutes * 0.4)} Min: Basisemotionen lernen`,
        `${Math.round(minutes * 0.6)} Min: Situationsquiz üben`,
      ];
    default:
      return [];
  }
}

export default function Lernplan() {
  const { lernplanConfig, setLernplanConfig } = useStore();
  const [hoursPerWeek, setHoursPerWeek] = useState(lernplanConfig?.hoursPerWeek || 10);
  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));

  const handleGenerate = () => {
    setLernplanConfig({
      medatDate: new Date(Date.now() + days * 86400000).toISOString().split("T")[0],
      hoursPerWeek,
      generatedAt: new Date().toISOString(),
    });
  };

  const plan = lernplanConfig ? generateWeeklyPlan(lernplanConfig.hoursPerWeek, weeksLeft) : null;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Lernplan" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Lernplan-Generator</h1>
        <p className="text-muted mt-1">
          Noch <span className="font-bold text-primary-700">{days} Tage</span> ({weeksLeft} Wochen) bis zum MedAT.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary-700" />
            Lernplan konfigurieren
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              Wie viele Stunden pro Woche kannst du lernen?
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={3}
                max={40}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="flex-1 accent-primary-700"
              />
              <span className="text-lg font-bold text-primary-700 w-20 text-right">{hoursPerWeek}h/Woche</span>
            </div>
            <p className="text-xs text-muted mt-1">
              Das sind ca. {Math.round((hoursPerWeek / 7) * 60)} Minuten pro Tag.
            </p>
          </div>
          <Button onClick={handleGenerate}>
            <CalendarDays className="w-4 h-4 mr-2" />
            {lernplanConfig ? "Lernplan aktualisieren" : "Lernplan generieren"}
          </Button>
        </CardContent>
      </Card>

      {plan && (
        <>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Lernphasen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plan.phases.map((phase, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={i === 0 ? "info" : i === 1 ? "warning" : "danger"}>
                        Phase {i + 1}
                      </Badge>
                      <span className="text-xs text-muted">{phase.weeks} Wochen</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{phase.name}</h3>
                    <p className="text-xs text-muted mt-1">{phase.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Wochenplan</h2>
            <div className="space-y-4">
              {plan.weeklyPlan.map((item) => {
                const Icon = moduleIcons[item.module] || BookOpen;
                const colorClass = moduleColors[item.module] || "";
                const hours = Math.floor(item.minutesPerWeek / 60);
                const mins = item.minutesPerWeek % 60;
                return (
                  <Card key={item.module}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.module}</h3>
                            <p className="text-xs text-muted">
                              {hours > 0 ? `${hours}h ` : ""}{mins > 0 ? `${mins}min` : ""} pro Woche
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted" />
                          <span className="text-sm font-bold text-primary-700">{item.minutesPerWeek} min</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {item.tasks.map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Zeitverteilung</h3>
              <div className="space-y-2">
                {plan.weeklyPlan.map((item) => (
                  <div key={item.module} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-12 text-gray-700 dark:text-gray-300">{item.module}</span>
                    <div className="flex-1">
                      <Progress
                        value={item.minutesPerWeek}
                        max={Math.max(...plan.weeklyPlan.map((p) => p.minutesPerWeek))}
                      />
                    </div>
                    <span className="text-xs text-muted w-16 text-right">
                      {Math.round((item.minutesPerWeek / (lernplanConfig!.hoursPerWeek * 60)) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
