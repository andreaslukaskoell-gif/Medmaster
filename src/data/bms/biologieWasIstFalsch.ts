/**
 * Biologie Pool — „Was ist falsch?“ (Typ A) pro Thema.
 * Stoff aus bmsKapitel/biologie.
 */
import type { Question } from "./index";

const STEM = "Welche der folgenden Aussagen ist falsch?";

function q(
  id: string,
  chapter: string,
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
    text: STEM,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologieWasIstFalsch: Question[] = [
  q(
    "bio-pool-wif-001",
    "bio-kap1",
    [
      "Homöostase hält innere Konstanten aufrecht.",
      "ATP ist die Energiewährung der Zelle.",
      "Viren haben einen eigenständigen Stoffwechsel.",
      "Negative Rückkopplung stabilisiert Sollwerte.",
      "Kristallisation ist kein Kennzeichen des Lebens.",
    ],
    2,
    "Viren haben keinen eigenständigen Stoffwechsel (C falsch).",
    "leicht",
    ["Zelle", "Leben"]
  ),
  q(
    "bio-pool-wif-002",
    "bio-kap2",
    [
      "Tight Junctions versiegeln den Interzellularspalt.",
      "Die Trachea ist von Flimmerepithel ausgekleidet.",
      "Die Trachea ist von Urothel ausgekleidet.",
      "Gap Junctions ermöglichen Ionenfluss zwischen Zellen.",
      "Talgdrüsen sezernieren holokrin.",
    ],
    2,
    "Die Trachea hat Flimmerepithel, nicht Urothel (C falsch).",
    "mittel",
    ["Gewebe", "Epithel"]
  ),
  q(
    "bio-pool-wif-003",
    "bio-kap2",
    [
      "Osteoblasten bauen Knochen auf.",
      "Osteoklasten bauen Knochen ab.",
      "Hyaliner Knorpel enthält vor allem Kollagen Typ II.",
      "Hyaliner Knorpel enthält vor allem Kollagen Typ I.",
      "Vitamin-C-Mangel kann Skorbut begünstigen.",
    ],
    3,
    "Hyaliner Knorpel: Kollagen Typ II (D falsch).",
    "mittel",
    ["Bindegewebe", "Knorpel"]
  ),
  q(
    "bio-pool-wif-004",
    "bio-kap2",
    [
      "Erythrozyten haben keinen Zellkern.",
      "Der Gasaustausch findet in den Alveolen statt.",
      "Der Gasaustausch findet in den Bronchien statt.",
      "Hämoglobin bindet Sauerstoff.",
      "Erythrozyten haben einen Durchmesser von etwa 7,5 µm.",
    ],
    2,
    "Gasaustausch in den Alveolen (C falsch).",
    "leicht",
    ["Blut", "Atmung"]
  ),
  q(
    "bio-pool-wif-005",
    "bio-kap4",
    [
      "Die Befruchtung findet im Eileiter statt.",
      "Das Geschlecht wird durch das Spermium (X oder Y) bestimmt.",
      "Das Geschlecht wird durch die Eizelle bestimmt.",
      "Die Kortikalreaktion verhindert Polyspermie.",
      "Aus einer Oozyte entstehen eine Eizelle und Polkörperchen.",
    ],
    2,
    "Das Geschlecht wird durch das Spermium bestimmt (C falsch).",
    "mittel",
    ["Vererbung", "Befruchtung"]
  ),
  q(
    "bio-pool-wif-006",
    "bio-kap4",
    [
      "In der DNA paart A mit T und G mit C.",
      "In der DNA paart A mit G.",
      "Homologe Chromosomen tragen gleiche Genorte.",
      "Die Meiose reduziert den Chromosomensatz.",
      "Ein Gen ist ein DNA-Abschnitt mit Erbinformation.",
    ],
    1,
    "In der DNA paart A mit T, G mit C (B falsch).",
    "leicht",
    ["DNA", "Vererbung"]
  ),
  q(
    "bio-pool-wif-007",
    "bio-kap1",
    [
      "Mitochondrien produzieren ATP.",
      "Ribosomen sind an der Proteinbiosynthese beteiligt.",
      "Tierische Zellen haben eine Zellwand.",
      "Das ER kann glatt oder rau sein.",
      "Lysosomen enthalten Verdauungsenzyme.",
    ],
    2,
    "Tierische Zellen haben keine Zellwand (C falsch).",
    "leicht",
    ["Zelle"]
  ),
  q(
    "bio-pool-wif-008",
    "bio-kap5",
    [
      "Biotop = unbelebter Lebensraum.",
      "Biozönose = Lebensgemeinschaft aller Arten.",
      "Die Biozönose besteht nur aus Pflanzen.",
      "Ökosystem = Biotop + Biozönose.",
      "Eine Population umfasst Individuen einer Art.",
    ],
    2,
    "Biozönose umfasst alle Lebewesen (C falsch).",
    "leicht",
    ["Ökologie"]
  ),
];
