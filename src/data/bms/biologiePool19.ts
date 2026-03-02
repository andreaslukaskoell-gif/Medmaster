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
    ["Netzhaut", "Iris", "Linse", "Hornhaut nur", "Glaskörper"],
    2,
    "Die Linse bricht das Licht und ermöglicht Akkommodation.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-19-016",
    "bio-kap2",
    "Wo wird Östrogen gebildet?",
    ["Hypophyse", "Nebenniere", "Eierstock", "Plazenta nur", "Schilddrüse"],
    2,
    "Östrogen wird vor allem in den Eierstöcken gebildet.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-19-017",
    "bio-kap4",
    "Was ist eine Insertion?",
    [
      "Verlust von DNA",
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
    ["Kleinhirn", "Hypothalamus", "Großhirnrinde", "Thalamus", "Pons"],
    1,
    "Der Hypothalamus regelt Hunger, Durst, Temperatur.",
    "leicht",
    ["ZNS", "Hypothalamus"]
  ),
];
