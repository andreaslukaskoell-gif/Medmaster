// Implikationen erkennen – MedAT-H KFF Subtest
// 42 Übungsaufgaben (IMPLIKATION_PRACTICE_TASKS) + 4 offizielle Beispiele (OFFICIAL_IMPLICATION_EXAMPLES)
//
// Goldene Regeln:
// 1. Zwei "einige"-Prämissen → KEIN gültiger Schluss (Antwort E)
// 2. Zwei "keine"-Prämissen → KEIN gültiger Schluss (Antwort E)
// 3. Kein "keine" in Prämissen → Schluss darf KEIN "keine" enthalten
// 4. Ein "keine" in Prämisse → Schluss MUSS "keine" enthalten
// 5. Ein "einige" in Prämisse → Schluss MUSS "einige" enthalten
//
// =============================================================================
// SKRIPT FÜR NEUE / WEITERE ÜBUNGSAUFGABEN
// =============================================================================
// Wenn wir mehr Übungsaufgaben generieren wollen, immer an die offiziellen
// Beispiele (OFFICIAL_IMPLICATION_EXAMPLES) anpassen:
//
// - Prämissen: In Anführungszeichen, mit Punkt am Ende (z. B. "Alle X sind Y.")
// - Optionen A–D: Vollständige Sätze mit Punkt am Ende (z. B. "Einige X sind Y.")
// - Option E: exakt "Keine der Schlussfolgerungen ist richtig." (mit Punkt)
// - Genau 5 Optionen, correctAnswer 0–4, explanation sachlich, rulesApplied [1–5]
// - Grammatik: Durchgehend "Alle / Einige / Kein"; keine Mehrdeutigkeit (kein "könnte", "manchmal", "eventuell").
// - Logik: Genau 1 zwingend richtige Antwort; alle anderen formal widerlegbar; Euler-Diagramm aus Relationsmodell.
// - Vorbild: MedAT 2026 PDF „Implikationen erkennen“ (medizinstudieren.at)
//
// Offizielle Beispiele werden nie verändert; Übungsaufgaben und Generator
// orientieren sich an diesem Format.
// =============================================================================

import type { ImplicationRelationModel, ImplicationTaskCanonical } from "./kffImplikationenLogic";
import {
  buildRelationModelFromPremises,
  modelToConstraints,
  layoutSatisfiesConstraints,
  deriveEulerLayoutFromModel,
  isCorrectOptionEntailed,
  assertImplikationTaskValid,
  premisesFromText,
  buildConcreteModel,
  validateImplicationTaskCanonical,
} from "./kffImplikationenLogic";

// Re-export kanonisches Datenmodell (A) für Validierung/Generatoren
export type { ImplicationTaskCanonical, Premise, SetRelation } from "./kffImplikationenLogic";
export { validateImplicationTaskCanonical } from "./kffImplikationenLogic";

export interface ImplikationTask {
  id: string;
  premise1: string;
  premise2: string;
  options: [string, string, string, string, string]; // A-E
  correctAnswer: number; // 0-4 index
  explanation: string;
  difficulty: 1 | 2 | 3;
  rulesApplied: number[]; // which golden rules apply (1-5)
  /** Nur bei offiziellen Beispielen: Quelle (z. B. PDF). */
  source?: string;
  /** Optional: formales Mengenmodell; wenn gesetzt, wird das Euler-Diagramm ausschließlich daraus abgeleitet. */
  relationModel?: ImplicationRelationModel;
}

/**
 * Konvertiert eine gespeicherte Implikations-Aufgabe ins kanonische Datenmodell (sets, premises, conclusions, model).
 * Wenn Prämissen nicht parsbar oder Modell nicht konsistent: null → Aufgabe verwerfen.
 */
export function toCanonicalImplicationTask(task: ImplikationTask): ImplicationTaskCanonical | null {
  const parsed = premisesFromText(task.premise1, task.premise2);
  if (!parsed || !task.options || task.options.length !== 5) return null;
  const { sets, premises } = parsed;
  const model = buildConcreteModel(sets, premises);
  if (!model) return null;
  return {
    sets,
    premises,
    conclusions: task.options,
    correctIndex: task.correctAnswer,
    model,
    premise1: task.premise1,
    premise2: task.premise2,
  };
}

/** Offizielle Instruktion aus IB IE 26.pdf */
export const OFFICIAL_IMP_INSTRUCTION = `Bei den folgenden Aufgaben sollen Sie herausfinden, welche Schlussfolgerung sich aus den beiden vorgegebenen Aussagen ableiten lässt, die logisch zwingend immer richtig sein muss. Gehen Sie bitte davon aus, dass die jeweils angegebenen beiden Aussagen wahr sind, auch wenn dies nicht Ihrer Erfahrung entsprechen sollte.

Aufnahmeverfahren: 10 Aufgaben, 10 Minuten (Papier-Bleistift-Test).

Bei einigen Aufgaben kann es vorkommen, dass sich aus den Aussagen keine Schlussfolgerung ableiten lässt, die zwingend richtig ist, also keine der Antwortmöglichkeiten (A bis D) richtig ist. In diesem Fall kreuzen Sie die Antwortmöglichkeit E (Keine der Schlussfolgerungen ist richtig.) an.`;

// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – exakt aus MedAT 2026 PDF, niemals vom Generator verwendet
// =============================================================================
/** @deprecated Official examples removed (copyright). Use training tasks only. */
export const OFFICIAL_IMPLICATION_EXAMPLES: readonly ImplikationTask[] = [];

// ============================================================
// Zusätzliche Übungsaufgaben (für ImplikationenUeben, Simulation)
// Format wie OFFICIAL_IMPLICATION_EXAMPLES (siehe Skript oben).
// ============================================================
const IMPLIKATION_PRACTICE_TASKS: ImplikationTask[] = [
  // DIFFICULTY 1 (imp-01 bis imp-14)
  {
    id: "imp-01",
    premise1: "Alle Hunde sind Säugetiere.",
    premise2: "Alle Säugetiere sind Wirbeltiere.",
    options: [
      "Alle Hunde sind Wirbeltiere.",
      "Alle Hunde sind keine Wirbeltiere.",
      "Einige Hunde sind Wirbeltiere.",
      "Einige Hunde sind keine Wirbeltiere.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Beide Prämissen sind absolut (Alle...sind). Regel 3 greift: Kein 'keine' in den Prämissen, also darf der Schluss kein 'keine' enthalten. Es liegt ein klassischer Kettenschluss vor: Alle A sind B, Alle B sind C → Alle A sind C. Im Euler-Diagramm ist die Menge der Hunde vollständig in der Menge der Säugetiere enthalten, die wiederum vollständig in den Wirbeltieren liegt. Daher sind alle Hunde zwingend auch Wirbeltiere. B ist falsch, weil die Richtung umgekehrt nicht gilt.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-02",
    premise1: "Alle Rosen sind Blumen.",
    premise2: "Alle Blumen sind Pflanzen.",
    options: [
      "Alle Rosen sind Pflanzen.",
      "Alle Rosen sind keine Pflanzen.",
      "Einige Rosen sind Pflanzen.",
      "Einige Rosen sind keine Pflanzen.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Klassischer Kettenschluss mit zwei absoluten Prämissen: Alle A sind B, Alle B sind C → Alle A sind C. Regel 3 greift: Ohne 'keine' in den Prämissen darf der Schluss kein 'keine' enthalten. Im Euler-Diagramm liegt die Menge der Rosen vollständig innerhalb der Blumen, die vollständig innerhalb der Pflanzen liegen. Daher sind alle Rosen zwingend Pflanzen. A ist falsch, weil nicht alle Pflanzen Rosen sein müssen.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-03",
    premise1: "Alle Ärzte sind Akademiker.",
    premise2: "Alle Akademiker sind Absolventen.",
    options: [
      "Alle Ärzte sind Absolventen.",
      "Alle Ärzte sind keine Absolventen.",
      "Einige Ärzte sind Absolventen.",
      "Einige Ärzte sind keine Absolventen.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Zwei absolute Prämissen mit Mittelterm 'Akademiker'. Alle A sind B, Alle B sind C → Alle A sind C. Regel 3: Kein 'keine' in den Prämissen, also kein 'keine' im Schluss erlaubt. Im Euler-Diagramm: Ärzte ⊆ Akademiker ⊆ Absolventen. Alle Ärzte sind somit zwingend Absolventen. A widerspricht dem direkten Schluss, B kehrt die Richtung unzulässig um.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-04",
    premise1: "Alle Adler sind Vögel.",
    premise2: "Alle Vögel sind keine Säugetiere.",
    options: [
      "Alle Adler sind Säugetiere.",
      "Alle Adler sind keine Säugetiere.",
      "Einige Adler sind Säugetiere.",
      "Einige Adler sind keine Säugetiere.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Erste Prämisse: Alle A sind B. Zweite Prämisse: Alle B sind keine C. Regel 4: Ein 'keine' in einer Prämisse → Schluss muss 'keine' enthalten. Im Euler-Diagramm: Adler liegen vollständig in Vögel, und Vögel und Säugetiere sind disjunkt (keine Überschneidung). Daher: Alle Adler sind keine Säugetiere. A und B widersprechen der zweiten Prämisse, D ebenso.",
    difficulty: 1,
    rulesApplied: [4],
  },
  {
    id: "imp-05",
    premise1: "Alle Tulpen sind Blumen.",
    premise2: "Alle Blumen sind keine Steine.",
    options: [
      "Alle Tulpen sind Steine.",
      "Alle Tulpen sind keine Steine.",
      "Einige Tulpen sind Steine.",
      "Einige Tulpen sind keine Steine.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Alle A sind B, Alle B sind keine C → Alle A sind keine C. Regel 4: 'keine' in einer Prämisse erfordert 'keine' im Schluss. Im Euler-Diagramm sind Tulpen eine Teilmenge von Blumen, und Blumen und Steine sind disjunkt. Daher sind alle Tulpen zwingend keine Steine (C). A und B widersprechen der zweiten Prämisse, D ist nicht ableitbar.",
    difficulty: 1,
    rulesApplied: [4],
  },
  {
    id: "imp-06",
    premise1: "Alle Violinen sind Musikinstrumente.",
    premise2: "Alle Musikinstrumente sind Gegenstände.",
    options: [
      "Alle Violinen sind Gegenstände.",
      "Alle Violinen sind keine Gegenstände.",
      "Einige Violinen sind Gegenstände.",
      "Einige Violinen sind keine Gegenstände.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Kettenschluss mit zwei absoluten Prämissen: Alle A sind B, Alle B sind C → Alle A sind C. Regel 3: Ohne 'keine' in den Prämissen kein 'keine' im Schluss. Im Euler-Diagramm: Violinen ⊆ Musikinstrumente ⊆ Gegenstände. Daher sind alle Violinen zwingend Gegenstände. B ist falsch, weil nicht alle Gegenstände Violinen sein müssen. D ist falsch, weil nicht alle Gegenstände Musikinstrumente sind.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-07",
    premise1: "Alle Lastwagen sind Fahrzeuge.",
    premise2: "Alle Fahrzeuge sind keine Lebewesen.",
    options: [
      "Alle Lastwagen sind Lebewesen.",
      "Alle Lastwagen sind keine Lebewesen.",
      "Einige Lastwagen sind Lebewesen.",
      "Einige Lastwagen sind keine Lebewesen.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Alle A sind B, Alle B sind keine C → Alle A sind keine C. Regel 4: 'keine' in einer Prämisse verlangt 'keine' im Schluss. Im Euler-Diagramm: Lastwagen ⊆ Fahrzeuge, und Fahrzeuge ∩ Lebewesen = ∅. Somit sind Lastwagen und Lebewesen ebenfalls disjunkt. A und C widersprechen den Prämissen. D enthält zwar 'keine', bezieht sich aber auf Lebewesen und Fahrzeuge, was keine neue Folgerung aus den Prämissen über Lastwagen ist.",
    difficulty: 1,
    rulesApplied: [4],
  },
  {
    id: "imp-08",
    premise1: "Alle Diamanten sind Edelsteine.",
    premise2: "Alle Edelsteine sind Mineralien.",
    options: [
      "Alle Diamanten sind Mineralien.",
      "Alle Diamanten sind keine Mineralien.",
      "Einige Diamanten sind Mineralien.",
      "Einige Diamanten sind keine Mineralien.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Zwei absolute Prämissen mit Mittelterm 'Edelsteine': Alle A sind B, Alle B sind C → Alle A sind C. Regel 3 ist erfüllt: Kein 'keine' in Prämissen, also kein 'keine' im Schluss. Im Euler-Diagramm: Diamanten ⊆ Edelsteine ⊆ Mineralien. Daher gilt: Alle Diamanten sind Mineralien. A ist falsch (Umkehrschluss), D ist falsch (nicht alle Edelsteine müssen Diamanten sein).",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-09",
    premise1: "Alle Autos sind keine Flugzeuge.",
    premise2: "Alle Busse sind Autos.",
    options: [
      "Alle Busse sind Flugzeuge.",
      "Alle Busse sind keine Flugzeuge.",
      "Einige Busse sind Flugzeuge.",
      "Einige Busse sind keine Flugzeuge.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Umgestellte Reihenfolge: Alle A sind keine B, Alle C sind A. Daraus folgt: Alle C sind keine B. Regel 4: 'keine' in einer Prämisse verlangt 'keine' im Schluss. Im Euler-Diagramm: Busse ⊆ Autos, und Autos ∩ Flugzeuge = ∅. Somit: Busse ∩ Flugzeuge = ∅, also alle Busse sind keine Flugzeuge. A und B widersprechen diesem Ergebnis direkt.",
    difficulty: 1,
    rulesApplied: [4],
  },
  {
    id: "imp-10",
    premise1: "Alle Bananen sind Früchte.",
    premise2: "Alle Früchte sind Lebensmittel.",
    options: [
      "Alle Bananen sind Lebensmittel.",
      "Alle Bananen sind keine Lebensmittel.",
      "Einige Bananen sind Lebensmittel.",
      "Einige Bananen sind keine Lebensmittel.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Kettenschluss: Alle A sind B, Alle B sind C → Alle A sind C. Regel 3: Ohne 'keine' kein 'keine' im Schluss. Im Euler-Diagramm: Bananen ⊆ Früchte ⊆ Lebensmittel. Alle Bananen sind somit zwingend Lebensmittel. A ist falsch (Umkehrschluss), B ist falsch (nicht alle Lebensmittel sind Früchte), C enthält unzulässig 'keine'.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-11",
    premise1: "Alle Pinguine sind Vögel.",
    premise2: "Alle Vögel sind Tiere.",
    options: [
      "Alle Pinguine sind Tiere.",
      "Alle Pinguine sind keine Tiere.",
      "Einige Pinguine sind Tiere.",
      "Einige Pinguine sind keine Tiere.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Standardmäßiger Kettenschluss: Alle A sind B, Alle B sind C → Alle A sind C. Regel 3: Kein 'keine' in Prämissen, also keines im Schluss. Im Euler-Diagramm: Pinguine ⊆ Vögel ⊆ Tiere. Alle Pinguine sind Tiere ist zwingend. A wäre ein unzulässiger Umkehrschluss, D ebenso. C enthält 'keine', was Regel 3 verletzt.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-12",
    premise1: "Alle Smartphones sind Elektronikgeräte.",
    premise2: "Alle Elektronikgeräte sind keine Naturprodukte.",
    options: [
      "Alle Smartphones sind Naturprodukte.",
      "Alle Smartphones sind keine Naturprodukte.",
      "Einige Smartphones sind Naturprodukte.",
      "Einige Smartphones sind keine Naturprodukte.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Alle A sind B, Alle B sind keine C → Alle A sind keine C. Regel 4: Ein 'keine' in einer Prämisse erfordert 'keine' im Schluss. Im Euler-Diagramm: Smartphones ⊆ Elektronikgeräte, und Elektronikgeräte ∩ Naturprodukte = ∅. Daher: Smartphones ∩ Naturprodukte = ∅. B und D widersprechen diesem Ergebnis. C ist ein unzulässiger Schluss.",
    difficulty: 1,
    rulesApplied: [4],
  },
  {
    id: "imp-13",
    premise1: "Alle Tischler sind Handwerker.",
    premise2: "Alle Handwerker sind Berufstätige.",
    options: [
      "Alle Tischler sind Berufstätige.",
      "Alle Tischler sind keine Berufstätige.",
      "Einige Tischler sind Berufstätige.",
      "Einige Tischler sind keine Berufstätige.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 0,
    explanation:
      "Kettenschluss: Alle A sind B, Alle B sind C → Alle A sind C. Regel 3: Kein 'keine' in den Prämissen, also kein 'keine' im Schluss. Im Euler-Diagramm: Tischler ⊆ Handwerker ⊆ Berufstätige. Alle Tischler sind daher zwingend Berufstätige. A und D sind unzulässige Umkehrschlüsse, B enthält 'keine', was gegen Regel 3 verstößt.",
    difficulty: 1,
    rulesApplied: [3],
  },
  {
    id: "imp-14",
    premise1: "Alle Haie sind Fische.",
    premise2: "Alle Fische sind keine Insekten.",
    options: [
      "Alle Haie sind Insekten.",
      "Alle Haie sind keine Insekten.",
      "Einige Haie sind Insekten.",
      "Einige Haie sind keine Insekten.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Alle A sind B, Alle B sind keine C → Alle A sind keine C. Regel 4: 'keine' in einer Prämisse verlangt 'keine' im Schluss. Im Euler-Diagramm: Haie ⊆ Fische, und Fische ∩ Insekten = ∅. Daher: Haie ∩ Insekten = ∅, also alle Haie sind keine Insekten. A und C widersprechen diesem Ergebnis, B ist logisch nicht ableitbar.",
    difficulty: 1,
    rulesApplied: [4],
  },

  // ============================================================
  // DIFFICULTY 2 (imp-15 bis imp-28): Gemischt mit "Einige", kniffligere Mittelterme
  // ============================================================

  {
    id: "imp-15",
    premise1: "Alle Katzen sind Haustiere.",
    premise2: "Einige Haustiere sind schwarz.",
    options: [
      "Alle Katzen sind schwarz.",
      "Alle Katzen sind keine schwarz.",
      "Einige Katzen sind schwarz.",
      "Einige Katzen sind keine schwarz.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Alle A sind B, Einige B sind C: Der Mittelterm 'Haustiere' ist in der zweiten Prämisse nicht verteilt – die 'einigen Haustiere', die schwarz sind, müssen nicht unter den Katzen sein. Im Euler-Diagramm könnten die schwarzen Haustiere komplett außerhalb der Katzen-Teilmenge liegen. Regel 5 würde 'einige' im Schluss verlangen, aber es gibt schlicht keinen zwingenden Zusammenhang zwischen Katzen und schwarz. Daher ist E korrekt.",
    difficulty: 2,
    rulesApplied: [5],
  },
  {
    id: "imp-16",
    premise1: "Alle Eichen sind Bäume.",
    premise2: "Einige Eichen sind alt.",
    options: [
      "Alle Bäume sind alt.",
      "Alle Bäume sind keine alt.",
      "Einige Bäume sind alt.",
      "Einige Bäume sind keine alt.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Alle A sind B, Einige A sind C. Da einige Eichen alt sind und alle Eichen Bäume sind, sind diese alten Eichen automatisch auch Bäume. Regel 5: 'einige' in einer Prämisse → 'einige' im Schluss. Regel 3: Kein 'keine' in Prämissen, also keines im Schluss. Im Euler-Diagramm: Die Teilmenge der alten Eichen liegt innerhalb der Eichen, die wiederum in den Bäumen liegen. Somit sind einige Bäume zwingend alt. A ist zu stark (nicht alle Bäume müssen alt sein).",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-17",
    premise1: "Alle Chirurgen sind Ärzte.",
    premise2: "Einige Chirurgen sind keine Sportler.",
    options: [
      "Alle Ärzte sind Sportler.",
      "Alle Ärzte sind keine Sportler.",
      "Einige Ärzte sind Sportler.",
      "Einige Ärzte sind keine Sportler.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 3,
    explanation:
      "Alle A sind B, Einige A sind keine C. Die einigen Chirurgen, die keine Sportler sind, sind zugleich Ärzte (da alle Chirurgen Ärzte sind). Regel 4: 'keine' in einer Prämisse → 'keine' im Schluss. Regel 5: 'einige' in einer Prämisse → 'einige' im Schluss. Im Euler-Diagramm: Chirurgen ⊆ Ärzte, und ein Teil der Chirurgen liegt außerhalb der Sportler. Dieser Teil liegt auch in den Ärzten. Daher: Einige Ärzte sind keine Sportler.",
    difficulty: 2,
    rulesApplied: [4, 5],
  },
  {
    id: "imp-18",
    premise1: "Einige Musiker sind Lehrer.",
    premise2: "Alle Lehrer sind Angestellte.",
    options: [
      "Alle Musiker sind Angestellte.",
      "Alle Musiker sind keine Angestellte.",
      "Einige Musiker sind Angestellte.",
      "Einige Musiker sind keine Angestellte.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Einige A sind B, Alle B sind C. Die einigen Musiker, die Lehrer sind, sind zugleich Angestellte (da alle Lehrer Angestellte sind). Regel 5: 'einige' in einer Prämisse → 'einige' im Schluss. Regel 3: Kein 'keine' in den Prämissen, also keines im Schluss. Im Euler-Diagramm: Ein Teil der Musiker liegt in der Lehrer-Menge, und Lehrer ⊆ Angestellte. Daher sind einige Musiker zwingend Angestellte.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-19",
    premise1: "Alle Tennisspieler sind Sportler.",
    premise2: "Einige Sportler sind keine Vegetarier.",
    options: [
      "Alle Tennisspieler sind Vegetarier.",
      "Alle Tennisspieler sind keine Vegetarier.",
      "Einige Tennisspieler sind Vegetarier.",
      "Einige Tennisspieler sind keine Vegetarier.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Alle A sind B, Einige B sind keine C. Der Mittelterm 'Sportler' ist in der zweiten Prämisse nicht verteilt – die einigen Sportler, die keine Vegetarier sind, könnten komplett außerhalb der Tennisspieler liegen. Regel 4 verlangt zwar 'keine' und Regel 5 verlangt 'einige' im Schluss, aber es gibt keinen zwingenden Zusammenhang zwischen Tennisspieler und Vegetarier. Im Euler-Diagramm können die nicht-vegetarischen Sportler in dem Bereich liegen, der keine Tennisspieler enthält.",
    difficulty: 2,
    rulesApplied: [4, 5],
  },
  {
    id: "imp-20",
    premise1: "Alle Forellen sind Fische.",
    premise2: "Einige Forellen sind wild.",
    options: [
      "Alle Fische sind wild.",
      "Alle Fische sind keine wild.",
      "Einige Fische sind wild.",
      "Einige Fische sind keine wild.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Alle A sind B, Einige A sind C. Die einigen Forellen, die wild sind, sind zugleich Fische (da alle Forellen Fische sind). Regel 5: 'einige' in Prämisse → 'einige' im Schluss. Regel 3: Kein 'keine' in Prämissen. Im Euler-Diagramm: Forellen ⊆ Fische, und ein Teil der Forellen ist wild. Dieser Teil gehört auch zu den Fischen. Einige Fische sind also zwingend wild. A ist zu stark, C ist unzulässig.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-21",
    premise1: "Einige Studenten sind Sportler.",
    premise2: "Alle Sportler sind fit.",
    options: [
      "Alle Studenten sind fit.",
      "Alle Studenten sind keine fit.",
      "Einige Studenten sind fit.",
      "Einige Studenten sind keine fit.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Einige A sind B, Alle B sind C. Die einigen Studenten, die Sportler sind, sind auch fit (da alle Sportler fit sind). Regel 5: 'einige' → 'einige' im Schluss. Regel 3: Kein 'keine' in Prämissen. Im Euler-Diagramm: Ein Teil der Studenten liegt in der Sportler-Menge, und Sportler ⊆ fit. Dieser Teil ist daher auch fit. Einige Studenten sind zwingend fit. A ist zu stark, B ist ein unzulässiger Umkehrschluss.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-22",
    premise1: "Alle Gitarren sind Saiteninstrumente.",
    premise2: "Alle Saiteninstrumente sind keine Blasinstrumente.",
    options: [
      "Alle Gitarren sind Blasinstrumente.",
      "Alle Gitarren sind keine Blasinstrumente.",
      "Einige Gitarren sind Blasinstrumente.",
      "Einige Gitarren sind keine Blasinstrumente.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 1,
    explanation:
      "Alle A sind B, Alle B sind keine C → Alle A sind keine C. Regel 4: 'keine' in einer Prämisse verlangt 'keine' im Schluss. Im Euler-Diagramm: Gitarren ⊆ Saiteninstrumente, und Saiteninstrumente ∩ Blasinstrumente = ∅. Daher: Gitarren ∩ Blasinstrumente = ∅. Alle Gitarren sind keine Blasinstrumente ist zwingend. A und C widersprechen der Disjunktheit.",
    difficulty: 2,
    rulesApplied: [4],
  },
  {
    id: "imp-23",
    premise1: "Alle Laptops sind Computer.",
    premise2: "Einige Laptops sind keine tragbare Geräte.",
    options: [
      "Alle Computer sind tragbare Geräte.",
      "Alle Computer sind keine tragbare Geräte.",
      "Einige Computer sind tragbare Geräte.",
      "Einige Computer sind keine tragbare Geräte.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 3,
    explanation:
      "Alle A sind B, Einige A sind keine C. Die einigen Laptops, die keine tragbaren Geräte sind, sind zugleich Computer (da alle Laptops Computer sind). Regel 4: 'keine' → 'keine' im Schluss. Regel 5: 'einige' → 'einige' im Schluss. Im Euler-Diagramm: Laptops ⊆ Computer, ein Teil der Laptops liegt außerhalb der tragbaren Geräte, und dieser Teil liegt in den Computern. Einige Computer sind also keine tragbaren Geräte.",
    difficulty: 2,
    rulesApplied: [4, 5],
  },
  {
    id: "imp-24",
    premise1: "Einige Wiener sind Fußballfans.",
    premise2: "Alle Fußballfans sind Sportbegeisterte.",
    options: [
      "Alle Wiener sind Sportbegeisterte.",
      "Alle Wiener sind keine Sportbegeisterte.",
      "Einige Wiener sind Sportbegeisterte.",
      "Einige Wiener sind keine Sportbegeisterte.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Einige A sind B, Alle B sind C. Die einigen Wiener, die Fußballfans sind, sind zugleich Sportbegeisterte (da alle Fußballfans sportbegeistert sind). Regel 5: 'einige' → 'einige' im Schluss. Regel 3: Kein 'keine', also keines im Schluss. Im Euler-Diagramm: Ein Teil der Wiener liegt in den Fußballfans, und Fußballfans ⊆ Sportbegeisterte. Einige Wiener sind daher zwingend Sportbegeisterte.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-25",
    premise1: "Alle Kirschen sind Früchte.",
    premise2: "Einige Kirschen sind keine rote Dinge.",
    options: [
      "Alle Früchte sind rote Dinge.",
      "Alle Früchte sind keine rote Dinge.",
      "Einige Früchte sind rote Dinge.",
      "Einige Früchte sind keine rote Dinge.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 3,
    explanation:
      "Alle A sind B, Einige A sind keine C. Die einigen Kirschen, die nicht rot sind, sind zugleich Früchte. Regel 4: 'keine' in Prämisse → 'keine' im Schluss. Regel 5: 'einige' → 'einige'. Im Euler-Diagramm: Kirschen ⊆ Früchte, und ein Teil der Kirschen liegt außerhalb der roten Dinge. Dieser Teil ist auch in Früchte. Daher: Einige Früchte sind keine roten Dinge. A ist zu stark, D widerspricht Prämisse 2.",
    difficulty: 2,
    rulesApplied: [4, 5],
  },
  {
    id: "imp-26",
    premise1: "Alle Fußbälle sind Sportgeräte.",
    premise2: "Einige Sportgeräte sind teuer.",
    options: [
      "Alle Fußbälle sind teuer.",
      "Alle Fußbälle sind keine teuer.",
      "Einige Fußbälle sind teuer.",
      "Einige Fußbälle sind keine teuer.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Alle A sind B, Einige B sind C. Der Mittelterm 'Sportgeräte' ist in der zweiten Prämisse partikulär – die einigen teuren Sportgeräte müssen nicht unter den Fußbällen sein. Im Euler-Diagramm: Fußbälle ⊆ Sportgeräte, aber die teuren Sportgeräte könnten komplett außerhalb der Fußball-Teilmenge liegen (z.B. teure Tennisschläger). Es gibt keinen zwingenden Schluss über Fußbälle und teuer.",
    difficulty: 2,
    rulesApplied: [5],
  },
  {
    id: "imp-27",
    premise1: "Alle Grazer sind Steirer.",
    premise2: "Einige Grazer sind Bergsteiger.",
    options: [
      "Alle Steirer sind Bergsteiger.",
      "Alle Steirer sind keine Bergsteiger.",
      "Einige Steirer sind Bergsteiger.",
      "Einige Steirer sind keine Bergsteiger.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Alle A sind B, Einige A sind C. Die einigen Grazer, die Bergsteiger sind, sind auch Steirer (da alle Grazer Steirer sind). Regel 5: 'einige' → 'einige' im Schluss. Regel 3: Kein 'keine' → kein 'keine' im Schluss. Im Euler-Diagramm: Grazer ⊆ Steirer, und ein Teil der Grazer ist auch Bergsteiger. Dieser Teil liegt innerhalb der Steirer. Einige Steirer sind zwingend Bergsteiger. A ist zu stark, C unzulässig.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },
  {
    id: "imp-28",
    premise1: "Einige Maler sind Künstler.",
    premise2: "Alle Künstler sind kreativ.",
    options: [
      "Alle Maler sind kreativ.",
      "Alle Maler sind keine kreativ.",
      "Einige Maler sind kreativ.",
      "Einige Maler sind keine kreativ.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 2,
    explanation:
      "Einige A sind B, Alle B sind C. Die einigen Maler, die Künstler sind, sind auch kreativ (da alle Künstler kreativ sind). Regel 5: 'einige' → 'einige'. Regel 3: Kein 'keine' → kein 'keine'. Im Euler-Diagramm: Ein Teil der Maler liegt in der Künstler-Menge, und Künstler ⊆ kreativ. Dieser Teil ist somit auch kreativ. Einige Maler sind zwingend kreativ. A ist zu stark, B hat 'keine' (Regel 3 verletzt), D ist unzulässig.",
    difficulty: 2,
    rulesApplied: [3, 5],
  },

  // ============================================================
  // DIFFICULTY 3 (imp-29 bis imp-42): Problematische Fälle, E-Antworten,
  // doppeltes "einige", doppeltes "keine", Abschwächungen, Randfälle
  // ============================================================

  {
    id: "imp-29",
    premise1: "Einige Ärzte sind Sportler.",
    premise2: "Einige Sportler sind Vegetarier.",
    options: [
      "Alle Ärzte sind Vegetarier.",
      "Alle Ärzte sind keine Vegetarier.",
      "Einige Ärzte sind Vegetarier.",
      "Einige Ärzte sind keine Vegetarier.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen: Regel 1 greift – aus zwei partikulären Prämissen lässt sich kein zwingender Schluss ableiten. Im Euler-Diagramm: Die einigen Ärzte, die Sportler sind, und die einigen Sportler, die Vegetarier sind, können völlig verschiedene Teilmengen der Sportler sein. Es gibt keine Garantie für eine Überschneidung von Ärzten und Vegetariern. Daher ist E korrekt.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-30",
    premise1: "Einige Katzen sind Wildtiere.",
    premise2: "Einige Wildtiere sind gefährlich.",
    options: [
      "Alle Katzen sind gefährlich.",
      "Alle Katzen sind keine gefährlich.",
      "Einige Katzen sind gefährlich.",
      "Einige Katzen sind keine gefährlich.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen: Regel 1 greift direkt. Die einigen Katzen, die wild sind, und die einigen wilden Tiere, die gefährlich sind, müssen nicht dieselben sein. Im Euler-Diagramm könnten die wilden Katzen und die gefährlichen wilden Tiere komplett disjunkte Teilmengen der wilden Tiere sein. Kein zwingender Schluss möglich, daher E.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-31",
    premise1: "Alle Äpfel sind keine Gemüse.",
    premise2: "Alle Karotten sind keine Gemüse.",
    options: [
      "Alle Äpfel sind Karotten.",
      "Alle Äpfel sind keine Karotten.",
      "Einige Äpfel sind Karotten.",
      "Einige Äpfel sind keine Karotten.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'keine'-Prämissen: Regel 2 greift – aus zwei negativen Prämissen lässt sich kein zwingender Schluss ableiten. Im Euler-Diagramm: Äpfel und Karotten sind beide disjunkt zu Gemüse, aber über das Verhältnis von Äpfeln zu Karotten sagt das nichts aus. Sie könnten identisch, überlappend oder vollständig getrennt sein. Daher ist E korrekt.",
    difficulty: 3,
    rulesApplied: [2],
  },
  {
    id: "imp-32",
    premise1: "Alle Hunde sind keine Katzen.",
    premise2: "Alle Perser sind keine Katzen.",
    options: [
      "Alle Hunde sind Perser.",
      "Alle Hunde sind keine Perser.",
      "Einige Hunde sind Perser.",
      "Einige Hunde sind keine Perser.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'keine'-Prämissen: Regel 2 besagt, dass aus zwei negativen Prämissen kein zwingender Schluss folgt. Im Euler-Diagramm: Hunde ∩ Katzen = ∅ und Perser ∩ Katzen = ∅. Aber 'Perser' hier sind mehrdeutig – sind es Perser(katzen)? Unabhängig davon: Dass beide nicht Katzen sind, sagt über das Verhältnis Hunde-Perser nichts. Daher E. Achtung: C klingt plausibel, ist aber nicht zwingend, da Hunde und Perser sich theoretisch überlappen könnten.",
    difficulty: 3,
    rulesApplied: [2],
  },
  {
    id: "imp-33",
    premise1: "Einige Wiener sind Studenten.",
    premise2: "Einige Studenten sind Sportler.",
    options: [
      "Alle Wiener sind Sportler.",
      "Alle Wiener sind keine Sportler.",
      "Einige Wiener sind Sportler.",
      "Einige Wiener sind keine Sportler.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen: Regel 1 greift. Die Wiener Studenten und die sportlichen Studenten können völlig verschiedene Teilgruppen der Studenten sein. Im Euler-Diagramm: Die Schnittmenge Wiener∩Studenten und die Schnittmenge Studenten∩Sportler müssen sich nicht überlappen. Es gibt keinen zwingenden Zusammenhang zwischen Wienern und Sportlern. Daher E.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-34",
    premise1: "Alle Pianisten sind keine Tänzer.",
    premise2: "Alle Sänger sind keine Tänzer.",
    options: [
      "Alle Pianisten sind Sänger.",
      "Alle Pianisten sind keine Sänger.",
      "Einige Pianisten sind Sänger.",
      "Einige Pianisten sind keine Sänger.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'keine'-Prämissen: Regel 2 greift. Pianisten und Sänger sind beide disjunkt zu Tänzern, aber ihr Verhältnis zueinander ist unbestimmt. Im Euler-Diagramm: Pianisten ∩ Tänzer = ∅ und Sänger ∩ Tänzer = ∅. Pianisten und Sänger könnten identisch, überlappend oder disjunkt sein. C klingt verlockend, ist aber nicht zwingend. Daher E.",
    difficulty: 3,
    rulesApplied: [2],
  },
  {
    id: "imp-35",
    premise1: "Einige Lehrer sind keine Eltern.",
    premise2: "Einige Eltern sind keine Berufstätige.",
    options: [
      "Alle Lehrer sind Berufstätige.",
      "Alle Lehrer sind keine Berufstätige.",
      "Einige Lehrer sind Berufstätige.",
      "Einige Lehrer sind keine Berufstätige.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen (auch wenn sie 'keine' enthalten, sind es partikuläre Aussagen): Regel 1 greift, da beide Prämissen mit 'Einige' beginnen. Aus zwei partikulären Prämissen folgt kein zwingender Schluss. Im Euler-Diagramm: Die Lehrer außerhalb der Eltern und die Eltern außerhalb der Berufstätigen sind verschiedene Mengen ohne zwingenden Zusammenhang. Daher E.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-36",
    premise1: "Alle Piloten sind Angestellte.",
    premise2: "Alle Ingenieure sind Angestellte.",
    options: [
      "Alle Piloten sind Ingenieure.",
      "Alle Piloten sind keine Ingenieure.",
      "Einige Piloten sind Ingenieure.",
      "Einige Piloten sind keine Ingenieure.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Beide Prämissen sind absolut, aber der Mittelterm 'Angestellte' ist in keiner Prämisse verteilt (er steht jeweils im Prädikat einer bejahenden Aussage). Es handelt sich um den Fehlschluss der unverteilten Mitte. Im Euler-Diagramm: Piloten ⊆ Angestellte und Ingenieure ⊆ Angestellte, aber Piloten und Ingenieure könnten komplett getrennte Teilmengen der Angestellten sein. Daher ist kein zwingender Schluss möglich: E.",
    difficulty: 3,
    rulesApplied: [3],
  },
  {
    id: "imp-37",
    premise1: "Alle Rosen sind Blumen.",
    premise2: "Alle Tulpen sind Blumen.",
    options: [
      "Alle Rosen sind Tulpen.",
      "Alle Rosen sind keine Tulpen.",
      "Einige Rosen sind Tulpen.",
      "Einige Rosen sind keine Tulpen.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Obwohl D ('Einige Blumen sind Rosen') intuitiv plausibel erscheint, geht es hier streng um formale Logik. Der Mittelterm 'Blumen' ist in keiner Prämisse verteilt (unverteilte Mitte). Im Euler-Diagramm: Rosen ⊆ Blumen und Tulpen ⊆ Blumen. Über das Verhältnis von Rosen zu Tulpen sagen die Prämissen nichts. D wäre zwar eine Teilumkehrung von Prämisse 1, die in der traditionellen Syllogistik erlaubt wäre, aber formal ist kein NEUER Schluss über das Verhältnis Rosen-Tulpen möglich. E ist korrekt.",
    difficulty: 3,
    rulesApplied: [3],
  },
  {
    id: "imp-38",
    premise1: "Einige Schüler sind keine Sportler.",
    premise2: "Einige Sportler sind keine Musiker.",
    options: [
      "Alle Schüler sind Musiker.",
      "Alle Schüler sind keine Musiker.",
      "Einige Schüler sind Musiker.",
      "Einige Schüler sind keine Musiker.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen: Regel 1 greift. Die Schüler, die keine Sportler sind, und die Sportler, die keine Musiker sind, sind verschiedene Gruppen ohne zwingenden logischen Zusammenhang zwischen Schülern und Musikern. Im Euler-Diagramm: Die nicht-sportlichen Schüler und die nicht-musikalischen Sportler können in jeder denkbaren Relation zueinander stehen. Kein gültiger Schluss, daher E.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-39",
    premise1: "Alle Löwen sind keine Pflanzenfresser.",
    premise2: "Alle Giraffen sind keine Pflanzenfresser.",
    options: [
      "Alle Löwen sind Giraffen.",
      "Alle Löwen sind keine Giraffen.",
      "Einige Löwen sind Giraffen.",
      "Einige Löwen sind keine Giraffen.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'keine'-Prämissen: Regel 2 greift – aus zwei negativen Prämissen folgt kein gültiger Schluss. Im Euler-Diagramm: Löwen ∩ Pflanzenfresser = ∅ und Giraffen ∩ Pflanzenfresser = ∅. Über die Beziehung Löwen-Giraffen sagt das nichts. Sie könnten disjunkt, überlappend oder (theoretisch in der abstrakten Logik) identisch sein. C klingt inhaltlich richtig, ist aber logisch nicht zwingend ableitbar. Daher E.",
    difficulty: 3,
    rulesApplied: [2],
  },
  {
    id: "imp-40",
    premise1: "Einige Bücher sind Antiquitäten.",
    premise2: "Einige Antiquitäten sind wertvoll.",
    options: [
      "Alle Bücher sind wertvoll.",
      "Alle Bücher sind keine wertvoll.",
      "Einige Bücher sind wertvoll.",
      "Einige Bücher sind keine wertvoll.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 4,
    explanation:
      "Zwei 'einige'-Prämissen: Regel 1 greift. Die alten Bücher und die alten wertvollen Dinge können völlig unterschiedliche Teilmengen der alten Dinge sein. Im Euler-Diagramm: Bücher ∩ alt ≠ ∅ und alt ∩ wertvoll ≠ ∅, aber Bücher ∩ wertvoll kann leer sein. Daher gibt es keinen zwingenden Schluss. E ist korrekt.",
    difficulty: 3,
    rulesApplied: [1],
  },
  {
    id: "imp-41",
    premise1: "Alle Autos sind keine Fahrräder.",
    premise2: "Einige Fahrzeuge sind Autos.",
    options: [
      "Alle Fahrzeuge sind Fahrräder.",
      "Alle Fahrzeuge sind keine Fahrräder.",
      "Einige Fahrzeuge sind Fahrräder.",
      "Einige Fahrzeuge sind keine Fahrräder.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 3,
    explanation:
      "Alle A sind keine B, Einige C sind A. Die einigen Fahrzeuge, die Autos sind, sind keine Fahrräder (da alle Autos keine Fahrräder sind). Regel 4: 'keine' in Prämisse → 'keine' im Schluss. Regel 5: 'einige' → 'einige'. Im Euler-Diagramm: Autos ∩ Fahrräder = ∅, und ein Teil der Fahrzeuge ist in der Auto-Menge. Dieser Teil kann nicht in der Fahrrad-Menge liegen. Daher: Einige Fahrzeuge sind keine Fahrräder. A ist zu stark, C unzulässig.",
    difficulty: 3,
    rulesApplied: [4, 5],
  },
  {
    id: "imp-42",
    premise1: "Alle Diamanten sind keine Metalle.",
    premise2: "Einige Edelsteine sind Diamanten.",
    options: [
      "Alle Edelsteine sind Metalle.",
      "Alle Edelsteine sind keine Metalle.",
      "Einige Edelsteine sind Metalle.",
      "Einige Edelsteine sind keine Metalle.",
      "Keine der Schlussfolgerungen ist richtig.",
    ],
    correctAnswer: 3,
    explanation:
      "Alle A sind keine B, Einige C sind A. Die einigen Edelsteine, die Diamanten sind, können keine Metalle sein (da alle Diamanten keine Metalle sind). Regel 4: 'keine' in Prämisse → 'keine' im Schluss. Regel 5: 'einige' → 'einige'. Im Euler-Diagramm: Diamanten ∩ Metalle = ∅, und ein Teil der Edelsteine liegt in den Diamanten. Dieser Teil liegt somit nicht in den Metallen. Einige Edelsteine sind keine Metalle. A ist zu stark, C nicht zwingend, D widerspricht Prämisse 1.",
    difficulty: 3,
    rulesApplied: [4, 5],
  },
];

/**
 * Struktureller und logischer Validator: Genau 5 Optionen, genau 1 korrekte Antwort (correctAnswer 0–4).
 * Logik bestimmt die Grafik: Modell → Constraints → nur Layout, das alle erfüllt → zwingende Antwort.
 * D) Validierung: 1) Prämissen konsistent 2) Genau 1 Schlussfolgerung in allen Modellen wahr 3) Falsche haben Gegenmodell.
 * Wenn Validation fehlschlägt → Aufgabe verwerfen (return false). In DEV: assert wirft bei Fehler.
 */
export function validateImplikationTask(task: ImplikationTask): boolean {
  if (!task.options || task.options.length !== 5) return false;
  if (task.correctAnswer < 0 || task.correctAnswer > 4) return false;
  if (task.correctAnswer === 4 && task.options[4] !== "Keine der Schlussfolgerungen ist richtig.")
    return false;

  const forbidden = /\b(könnte|manchmal|eventuell|vielleicht)\b/i;
  if (forbidden.test(task.premise1) || forbidden.test(task.premise2)) return false;
  for (const opt of task.options) {
    if (forbidden.test(opt)) return false;
  }

  const canonical = toCanonicalImplicationTask(task);
  if (!canonical) return false;
  if (!validateImplicationTaskCanonical(canonical)) return false;

  const model = buildRelationModelFromPremises(task.premise1, task.premise2);
  if (!model) return false;
  let layoutResult: ReturnType<typeof deriveEulerLayoutFromModel>;
  try {
    layoutResult = deriveEulerLayoutFromModel(model);
  } catch {
    return false;
  }
  const constraints = modelToConstraints(model);
  if (!layoutSatisfiesConstraints(layoutResult.layout, layoutResult.labels, constraints))
    return false;
  if (!isCorrectOptionEntailed(model, task.correctAnswer, task.options)) return false;

  if (import.meta.env?.DEV) {
    assertImplikationTaskValid(task.premise1, task.premise2, task.options, task.correctAnswer);
  }
  return true;
}

/**
 * Prüft, ob eine Implikationsaufgabe eine definierte visuelle Lösungsdarstellung haben kann.
 * Erforderlich: premise1, premise2, genau 5 Optionen, correctAnswer 0–4.
 * Wird bei Generierung assertiert und in der UI für Default-Visualisierung genutzt.
 */
export function hasVisualSolutionForImplikationTask(task: ImplikationTask): boolean {
  if (!task.premise1 || !task.premise2) return false;
  return validateImplikationTask(task);
}

/** Übungsaufgaben für ImplikationenUeben und ImplikationenSimulation. Nur validierte Aufgaben. */
function getValidImplikationenTasks(): ImplikationTask[] {
  const invalid: string[] = [];
  const valid = IMPLIKATION_PRACTICE_TASKS.filter((t) => {
    const ok = validateImplikationTask(t);
    if (!ok) invalid.push(t.id);
    return ok;
  });
  if (import.meta.env?.DEV && invalid.length > 0) {
    console.warn("[KFF Implikationen] Ungültige Aufgaben (ausgefiltert):", invalid.join(", "));
  }
  return valid;
}

export const implikationenTasks: ImplikationTask[] = getValidImplikationenTasks();
