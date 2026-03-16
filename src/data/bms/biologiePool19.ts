/**
 * Biologie BMS Pool 19 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
 * Stoff: Kap1–Kap5.
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "biologie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool19: Question[] = [
  q(
    "bio-pool-19-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht?",
    [
      "Netzhaut",
      "Iris",
      "Linse",
      "Hornhaut nur",
      "Glaskörper (Corpus vitreum) als gelartiges Stützmedium des Augapfels",
    ],
    2,
    "Die Linse bricht das Licht und ermöglicht Akkommodation.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-19-016",
    "bio-kap2",
    "Wo wird Östrogen gebildet?",
    [
      "Hypophyse (Hirnanhangsdrüse) als Master-Drüse des endokrinen Systems",
      "Nebenniere (Glandula suprarenalis) mit Cortisol und Adrenalin",
      "Eierstock",
      "Plazenta nur",
      "Schilddrüse (Glandula thyroidea) mit T3/T4-Sekretion",
    ],
    2,
    "Östrogen wird vor allem in den Eierstöcken gebildet.",
    "leicht",
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Reproduktion"]
  ),
  q(
    "bio-pool-19-017",
    "bio-kap4",
    "Was ist eine Insertion?",
    [
      "Verlust von DNA-Abschnitten",
      "Einbau zusätzlicher Basen",
      "Nur Punktmutation",
      "Umlagerung",
      "Reparatur",
    ],
    1,
    "Bei einer Insertion werden Basen eingefügt.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-19-031",
    "bio-kap2",
    "Welcher Gehirnbereich regelt Hunger und Durst?",
    [
      "Kleinhirn (Cerebellum) als Koordinationszentrum für Motorik und Gleichgewicht",
      "Hypothalamus als übergeordnetes Steuerungszentrum des Hormonsystems",
      "Großhirnrinde (Cortex cerebri) als Sitz höherer kognitiver Funktionen",
      "Thalamus als Umschaltstation sensorischer Bahnen",
      "Pons (Brücke) als Teil des Hirnstamms mit Regulationszentren",
    ],
    1,
    "Der Hypothalamus regelt Hunger, Durst, Temperatur.",
    "leicht",
    ["ZNS", "Hypothalamus als übergeordnetes Steuerungszentrum des Hormonsystems"]
  ),
];
