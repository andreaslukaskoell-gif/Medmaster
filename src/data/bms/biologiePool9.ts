/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Biologie BMS Pool — echte Fragen aus Kap1–Kap5 (weiterer Batch).
 * Ersetzt Platzhalter durch inhaltliche Fragen aus bmsKapitel/biologie.
 */
import type { Question } from "./index";

const STEM_FALSCH = "Welche der folgenden Aussagen ist falsch?";

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

export const biologiePool9: Question[] = [
  q(
    "bio-pool-9-002",
    "bio-kap2",
    "Welches Epithel ermöglicht die mukoziliäre Clearance in den Atemwegen?",
    [
      "Urothel",
      "Flimmerepithel (mehrreihig)",
      "Verhorntes Plattenepithel",
      "Einschichtiges Plattenepithel",
      "Einschichtiges kubisches Epithel",
    ],
    1,
    "Mehrreihiges Flimmerepithel mit Kinozilien transportiert Schleim und Partikel aus den Atemwegen (Trachea, Bronchien).",
    "leicht",
    ["Epithel", "Atemwege", "Kap2"]
  ),
  q(
    "bio-pool-9-003",
    "bio-kap4",
    "Welche Basenpaarung kommt in der RNA vor?",
    ["A–T", "A–U", "G–T", "nur G–C", "A–G (Purin-Purin-Paarung)"],
    1,
    "In der RNA paart Uracil (U) mit Adenin (A); Thymin (T) kommt in der DNA vor.",
    "leicht",
    ["RNA", "Kap4"]
  ),
  q(
    "bio-pool-9-005",
    "bio-kap1",
    "Diabetes mellitus Typ 1 ist gekennzeichnet durch …",
    [
      "Insulinresistenz",
      "fehlende Insulinproduktion (Betazellzerstörung)",
      "Überproduktion von Glucagon",
      "fehlende Rezeptoren",
      "nur Übergewicht (Adipositas) ohne metabolische Stoffwechselstörung",
    ],
    1,
    "Typ 1: Autoimmunzerstörung der Betazellen → kein Insulin. Typ 2: Insulinresistenz.",
    "mittel",
    ["Diabetes", "Kap1"]
  ),
  q(
    "bio-pool-9-008",
    "bio-kap3",
    "Das Geschlechtschromosom in der menschlichen Eizelle ist immer …",
    ["Y", "X oder Y", "X", "entweder X oder fehlend", "keins"],
    2,
    "Die Eizelle enthält immer ein X-Chromosom. Das Spermium liefert X oder Y → Geschlecht wird durch das Spermium bestimmt.",
    "leicht",
    ["Vererbung", "Kap3"]
  ),
  q(
    "bio-pool-9-014",
    "bio-kap2",
    "Welches Gewebe enthält reichlich Kollagen Typ I?",
    ["Hyaliner Knorpel", "Knochen", "Blut", "Nervengewebe", "Fettgewebe"],
    1,
    "Knochen: vor allem Kollagen Typ I (und Hydroxylapatit). Hyaliner Knorpel: Kollagen Typ II.",
    "mittel",
    ["Bindegewebe", "Kap2"]
  ),
  q(
    "bio-pool-9-018",
    "bio-kap4",
    "Die DNA-Doppelhelix wurde von wem beschrieben?",
    ["Mendel", "Darwin", "Watson und Crick", "Pasteur", "Linnaeus"],
    2,
    "Watson und Crick (1953) beschrieben die Doppelhelix-Struktur der DNA mit Basenpaarung A–T und G–C.",
    "leicht",
    ["DNA", "Kap4"]
  ),
  q(
    "bio-pool-9-023",
    "bio-kap3",
    "Die Befruchtung vereinigt …",
    [
      "zwei Eizellen",
      "Eizelle und Spermium",
      "zwei Spermien",
      "Eizelle und Polkörperchen",
      "Oozyte und Follikel",
    ],
    1,
    "Befruchtung = Verschmelzung von Eizelle (haploid) und Spermium (haploid) → Zygote (diploid).",
    "leicht",
    ["Befruchtung", "Kap3"]
  ),
  q(
    "bio-pool-9-024",
    "bio-kap5",
    "Eine Nahrungskette beschreibt …",
    [
      "nur die Destruenten im Ökosystem",
      "den Energie- und Stofffluss von Produzenten zu Konsumenten",
      "nur abiotische Faktoren ohne Organismen",
      "eine einzelne Art (Spezies)",
      "nur die Biotope ohne biotische Komponenten",
    ],
    1,
    "Nahrungskette = gerichteter Energie- und Stofffluss: Produzent → Primärkonsument → Sekundärkonsument → …",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-025",
    "bio-kap2",
    "Welches Epithel kleidet die Vagina aus?",
    [
      "Verhorntes Plattenepithel",
      "Urothel",
      "Mehrschichtiges unverhorntes Plattenepithel",
      "Flimmerepithel",
      "Einschichtiges Zylinderepithel",
    ],
    2,
    "Vagina, Ösophagus, Mundhöhle: mehrschichtiges unverhorntes Plattenepithel. Epidermis = verhornt.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-026",
    "bio-kap4",
    "Ein Phänotyp ist …",
    [
      "die genetische Ausprägung",
      "die sichtbare bzw. messbare Ausprägung des Merkmals",
      "immer dominant",
      "immer rezessiv",
      "nur die DNA-Sequenz",
    ],
    1,
    "Phänotyp = Erscheinungsbild. Genotyp = genetische Ausprägung (Allele).",
    "leicht",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-9-028",
    "bio-kap2",
    "Osteoklasten …",
    [
      "bauen Knochen auf",
      "sind reife Knochenzellen",
      "bauen Knochen ab",
      "produzieren Kollagen",
      "sind Knorpelzellen",
    ],
    2,
    "Osteoklasten bauen Knochen ab (Resorption); Osteoblasten bauen auf.",
    "leicht",
    ["Knochen", "Kap2"]
  ),
  q(
    "bio-pool-9-030",
    "bio-kap5",
    "Biotische Faktoren sind …",
    [
      "Licht und Temperatur",
      "von Lebewesen ausgehende Einflüsse",
      "nur Wasser",
      "nur der Boden (Edaphon)",
      "nur anorganische Nährstoffe",
    ],
    1,
    "Biotisch = durch Lebewesen (Konkurrenz, Symbiose, Räuber-Beute). Abiotisch = unbelebt (Licht, Temperatur, pH).",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-040",
    "bio-kap2",
    "Welches Epithel kleidet die Schilddrüsenfollikel aus?",
    [
      "Plattenepithel",
      "Einschichtiges kubisches Epithel",
      "Flimmerepithel",
      "Urothel",
      "Verhorntes Plattenepithel",
    ],
    1,
    "Schilddrüsenfollikel: einschichtiges kubisches Epithel.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-041",
    "bio-kap3",
    "Die Menstruation geht einher mit …",
    [
      "Einnistung der Blastozyste",
      "Abstoßung der Gebärmutterschleimhaut",
      "Eisprung",
      "Befruchtung",
      "Bildung des Gelbkörpers",
    ],
    1,
    "Menstruation = Abstoßung der Uterusschleimhaut (Endometrium) bei ausbleibender Einnistung.",
    "leicht",
    ["Zyklus", "Kap3"]
  ),
  q(
    "bio-pool-9-042",
    "bio-kap4",
    "Zwei homologe Chromosomen tragen …",
    [
      "immer identische Allele",
      "die gleichen Genorte (Loci)",
      "keine Gene",
      "nur ein Gen",
      "nur Geschlechtsgene",
    ],
    1,
    "Homologe Chromosomen: gleiche Gene an gleichen Loci, aber oft unterschiedliche Allele.",
    "mittel",
    ["Chromosomen", "Kap4"]
  ),
  q(
    "bio-pool-9-046",
    "bio-kap4",
    "Ein Nukleotid der DNA enthält …",
    ["nur eine Base", "Zucker (Desoxyribose)", "nur Phosphat", "nur Zucker", "keine Base"],
    1,
    "Nukleotid = Desoxyribose + Phosphat + Base.",
    "leicht",
    ["DNA", "Kap4"]
  ),
  q(
    "bio-pool-9-048",
    "bio-kap2",
    "Apokrine Sekretion bedeutet …",
    [
      "Exozytose ohne Zellverlust",
      "Abschnürung des apikalen Zellpols",
      "Die ganze Zelle wird zum Sekret",
      "Nur endokrine Hormonsekretion ins Blut",
      "Nur in Talgdrüsen",
    ],
    1,
    "Apokrin: apikaler Teil der Zelle wird abgeschnürt (z. B. Milchfettkügelchen). Merokrin = Exozytose; Holokrin = ganze Zelle.",
    "mittel",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-9-049",
    "bio-kap3",
    "Das luteinisierende Hormon (LH) …",
    [
      "hemmt den Eisprung",
      "löst den Eisprung aus",
      "wird nur in der Gebärmutter gebildet",
      "ersetzt FSH",
      "wird nur von Männern gebildet",
    ],
    1,
    "Der LH-Peak löst den Eisprung aus. FSH stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Kap3"]
  ),
];
