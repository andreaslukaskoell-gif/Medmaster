/**
 * Adaptiver Lernplan-Generator (aus Lernplan extrahiert).
 * Wird von Lernplan und Dashboard genutzt, um den Wochenplan und
 * daraus das Tagesziel abzuleiten.
 */

const moduleBaseWeights: Record<string, number> = {
  BMS: 0.4,
  KFF: 0.25,
  TV: 0.2,
  SEK: 0.15,
};

const bmsSubjectWeights: Record<string, number> = {
  biologie: 0.43,
  chemie: 0.26,
  physik: 0.19,
  mathematik: 0.12,
};

export interface AdaptivePlanInput {
  hoursPerWeek: number;
  weeksLeft: number;
  readiness: number;
  fachReadiness: Record<string, number>;
  weakTopics: { stichwortId: string; thema: string; fach: string; rate: number }[];
  phase: string;
}

export interface WeeklyPlanItem {
  module: string;
  minutesPerWeek: number;
  weight: number;
  tasks: string[];
}

export interface AdaptivePlanResult {
  weeklyPlan: WeeklyPlanItem[];
  phases: { name: string; weeks: number; phase: string }[];
  activePhase: string;
  bmsSubPlan: { fach: string; label: string; minutes: number; readiness: number }[];
  adjustedWeights: Record<string, number>;
}

function getAdaptiveTasks(
  module: string,
  minutes: number,
  phase: string,
  fachReadiness: Record<string, number>,
  weakTopics: { stichwortId: string; thema: string; fach: string; rate: number }[]
): string[] {
  const bmsWeak = weakTopics.filter((t) =>
    ["biologie", "chemie", "physik", "mathematik"].includes(t.fach)
  );

  if (module === "BMS") {
    if (phase === "einstieg") {
      return [
        `${Math.round(minutes * 0.4)} Min: Stichwortliste durcharbeiten`,
        `${Math.round(minutes * 0.35)} Min: Übungsfragen (~${Math.round(minutes / 4)} Fragen)`,
        `${Math.round(minutes * 0.25)} Min: Erklärungen & Strategie-Tipps lesen`,
      ];
    }
    if (phase === "vertiefung") {
      const weakStr =
        bmsWeak.length > 0
          ? bmsWeak
              .slice(0, 3)
              .map((t) => t.thema)
              .join(", ")
          : "alle Themen";
      return [
        `${Math.round(minutes * 0.2)} Min: Schwachstellen-Trainer (${weakStr})`,
        `${Math.round(minutes * 0.4)} Min: Übungsfragen (~${Math.round(minutes / 3)} Fragen)`,
        `${Math.round(minutes * 0.25)} Min: Spaced Repetition Wiederholung`,
        `${Math.round(minutes * 0.15)} Min: Strategie-Tipps für schwache Themen`,
      ];
    }
    return [
      `${Math.round(minutes * 0.15)} Min: Schwachstellen schnell wiederholen`,
      `${Math.round(minutes * 0.5)} Min: BMS-Simulation unter Zeitdruck`,
      `${Math.round(minutes * 0.2)} Min: Falsch beantwortete Fragen analysieren`,
      `${Math.round(minutes * 0.15)} Min: Letzte Wiederholung Schlüsselthemen`,
    ];
  }

  if (module === "KFF") {
    if (phase === "pruefung") {
      return [
        `${Math.round(minutes * 0.4)} Min: Zahlenfolgen unter Zeitdruck`,
        `${Math.round(minutes * 0.3)} Min: Implikationen-Training`,
        `${Math.round(minutes * 0.3)} Min: KFF-Simulation komplett`,
      ];
    }
    return [
      `${Math.round(minutes * 0.3)} Min: Zahlenfolgen üben`,
      `${Math.round(minutes * 0.35)} Min: Implikationen trainieren`,
      `${Math.round(minutes * 0.35)} Min: Allergiepässe merken`,
    ];
  }

  if (module === "TV") {
    if (phase === "pruefung") {
      return [
        `${Math.round(minutes * 0.3)} Min: Lese-Strategie-Check`,
        `${Math.round(minutes * 0.7)} Min: Übungstexte unter Zeitdruck`,
      ];
    }
    return [
      `${Math.round(minutes * 0.3)} Min: Strategie wiederholen`,
      `${Math.round(minutes * 0.7)} Min: Übungstexte bearbeiten`,
    ];
  }

  return [
    `${Math.round(minutes * 0.4)} Min: Basisemotionen lernen`,
    `${Math.round(minutes * 0.6)} Min: Situationsquiz üben`,
  ];
}

export function generateAdaptivePlan(input: AdaptivePlanInput): AdaptivePlanResult {
  const { hoursPerWeek, weeksLeft, readiness, fachReadiness, weakTopics, phase } = input;
  const minutesPerWeek = hoursPerWeek * 60;

  const avgBmsReadiness = Object.entries(fachReadiness).reduce(
    (sum, [fach, r]) => sum + r * (bmsSubjectWeights[fach] || 0),
    0
  );
  const bmsBoost = avgBmsReadiness < 50 ? 0.1 : avgBmsReadiness < 70 ? 0.05 : 0;

  const adjustedWeights = {
    BMS: moduleBaseWeights.BMS + bmsBoost,
    KFF: moduleBaseWeights.KFF - bmsBoost * 0.4,
    TV: moduleBaseWeights.TV - bmsBoost * 0.35,
    SEK: moduleBaseWeights.SEK - bmsBoost * 0.25,
  };

  const activePhase =
    phase || (weeksLeft > 12 ? "einstieg" : weeksLeft > 4 ? "vertiefung" : "pruefung");

  const phases = [
    { name: "Grundlagen", weeks: Math.ceil(weeksLeft * 0.3), phase: "einstieg" },
    { name: "Vertiefung", weeks: Math.ceil(weeksLeft * 0.4), phase: "vertiefung" },
    {
      name: "Prüfungsphase",
      weeks: Math.max(1, weeksLeft - Math.ceil(weeksLeft * 0.7)),
      phase: "pruefung",
    },
  ];

  const weeklyPlan = Object.entries(adjustedWeights).map(([mod, weight]) => {
    const mins = Math.round(minutesPerWeek * weight);
    return {
      module: mod,
      minutesPerWeek: mins,
      weight: Math.round(weight * 100),
      tasks: getAdaptiveTasks(mod, mins, activePhase, fachReadiness, weakTopics),
    };
  });

  const bmsMinutes = weeklyPlan.find((p) => p.module === "BMS")!.minutesPerWeek;
  const bmsBreakdown = Object.entries(bmsSubjectWeights).map(([fach, weight]) => {
    const r = fachReadiness[fach] || 0;
    const adjustedW = weight * (r < 50 ? 1.4 : r < 70 ? 1.1 : 0.8);
    return { fach, weight: adjustedW, readiness: r };
  });
  const bmsTotal = bmsBreakdown.reduce((s, b) => s + b.weight, 0);
  const bmsSubPlan = bmsBreakdown.map((b) => ({
    fach: b.fach,
    label: b.fach.charAt(0).toUpperCase() + b.fach.slice(1),
    minutes: Math.round(bmsMinutes * (b.weight / bmsTotal)),
    readiness: b.readiness,
  }));

  return {
    weeklyPlan,
    phases,
    activePhase,
    bmsSubPlan,
    adjustedWeights,
  };
}
