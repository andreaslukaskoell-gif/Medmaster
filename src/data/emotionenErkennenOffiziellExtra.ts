/**
 * Zusätzliche Emotionen-erkennen-Aufgaben im offiziellen MedAT-Format (ee-off-07 bis ee-off-14).
 * Ermöglicht 14 Aufgaben für die Simulation (6 offizielle + 8 weitere).
 */

import type { EmotionenErkennenOffiziellTask } from "./emotionenErkennenOffiziell";

function task(
  id: string,
  situation: string,
  personName: string,
  emotionen: [string, string, string, string, string],
  correctValues: [
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
  ],
  explanation: string
): EmotionenErkennenOffiziellTask {
  const OPTION_IDS = ["A", "B", "C", "D", "E"] as const;
  return {
    id,
    situation,
    personName,
    emotionen: OPTION_IDS.map((optId, i) => ({
      id: optId,
      text: emotionen[i],
      correct: correctValues[i],
    })),
    explanation,
  };
}

export const emotionenErkennenOffiziellExtra: EmotionenErkennenOffiziellTask[] = [
  task(
    "ee-off-07",
    "Ein Rettungssanitäter wird zu einem schweren Verkehrsunfall gerufen. Am Unfallort erkennt er, dass eines der Opfer ein enger Freund aus seiner Schulzeit ist.",
    "der Rettungssanitäter",
    [
      "Er hat Angst.",
      "Er ist überrascht.",
      "Er ist traurig.",
      "Er ist gelangweilt.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ein Freund als Unfallopfer zu entdecken, löst Angst, Überraschung und Trauer aus. Langweile und Neid passen nicht zur Situation."
  ),
  task(
    "ee-off-08",
    "Eine Hebamme begleitet eine Erstgebärende durch eine lange und schwierige Geburt. Nach 18 Stunden kommt das Kind gesund zur Welt, und die Mutter hält ihr Baby zum ersten Mal im Arm.",
    "die Hebamme",
    [
      "Sie freut sich.",
      "Sie ist erleichtert.",
      "Sie empfindet Mitgefühl.",
      "Sie empfindet Verachtung.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Nach erfolgreicher, anstrengender Geburt sind Freude und Erleichterung naheliegend; Mitgefühl für die Mutter ebenfalls. Verachtung und Ärger nicht."
  ),
  task(
    "ee-off-09",
    "Ein Oberarzt stellt fest, dass ein Kollege regelmäßig während der Nachtdienste Alkohol trinkt. Die Krankenhausleitung wurde bereits informiert, hat aber bisher nichts unternommen.",
    "der Oberarzt",
    ["Er ärgert sich.", "Er ist angewidert.", "Er hat Angst.", "Er ist stolz.", "Er ist dankbar."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Das Verhalten des Kollegen und das Ausbleiben von Konsequenzen können Ärger, Ekel und Sorge auslösen. Stolz und Dankbarkeit sind unwahrscheinlich."
  ),
  task(
    "ee-off-10",
    "Eine alleinerziehende Mutter erfährt in der Onkologie, dass ihre Chemotherapie angeschlagen hat und der Tumor sich deutlich verkleinert hat. Ihre Kinder warten im Wartezimmer auf sie.",
    "die Mutter",
    [
      "Sie ist erleichtert.",
      "Sie hat Hoffnung.",
      "Sie freut sich.",
      "Sie ist dankbar.",
      "Sie empfindet Verachtung.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich"],
    "Positive medizinische Nachricht nach schwerer Zeit führt zu Erleichterung, Hoffnung, Freude und oft Dankbarkeit. Verachtung passt nicht."
  ),
  task(
    "ee-off-11",
    "Ein Medizinstudent im Praktischen Jahr wird von einer erfahrenen Oberärztin vor dem gesamten OP-Team gelobt: 'So eine saubere Naht habe ich von einem PJler noch nie gesehen.'",
    "der Medizinstudent",
    [
      "Er ist stolz.",
      "Er freut sich.",
      "Er ist überrascht.",
      "Er schämt sich.",
      "Er ist angewidert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Öffentliches Lob für die eigene Leistung kann Stolz, Freude und Überraschung auslösen. Scham und Ekel sind unwahrscheinlich."
  ),
  task(
    "ee-off-12",
    "Eine junge Frau wird von ihrer Gynäkologin über eine ungewollte Schwangerschaft informiert. Sie befindet sich gerade mitten im Studium und hat keinen festen Partner.",
    "die junge Frau",
    [
      "Sie hat Angst.",
      "Sie ist überrascht.",
      "Sie ist traurig.",
      "Sie bewundert jemanden.",
      "Sie ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ungewollte Schwangerschaft in unsicherer Lebenslage kann Angst, Überraschung und Trauer auslösen. Bewunderung und Stolz sind in diesem Kontext unwahrscheinlich."
  ),
  task(
    "ee-off-13",
    "Ein Physiotherapeut arbeitet seit Monaten mit einem querschnittsgelähmten Patienten. Eines Tages spürt der Patient zum ersten Mal ein Kribbeln in seinen Zehen.",
    "der Physiotherapeut",
    [
      "Er hat Hoffnung.",
      "Er freut sich.",
      "Er ist überrascht.",
      "Er ist angewidert.",
      "Er ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erste Anzeichen einer möglichen Besserung beim lange betreuten Patienten können Hoffnung, Freude und Überraschung auslösen. Ekel und Ärger nicht."
  ),
  task(
    "ee-off-14",
    "Ein Pfleger entdeckt, dass ein demenzkranker Patient die ganze Nacht allein und verängstigt im dunklen Zimmer lag, weil die Nachtschwester vergessen hatte, das Nachtlicht einzuschalten.",
    "der Pfleger",
    [
      "Er empfindet Mitgefühl.",
      "Er ärgert sich.",
      "Er fühlt sich schuldig.",
      "Er freut sich.",
      "Er bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Das Leid des Patienten und das Versäumnis können Mitgefühl, Ärger und eigene Schuldgefühle auslösen. Freude und Bewunderung sind unwahrscheinlich."
  ),
];
