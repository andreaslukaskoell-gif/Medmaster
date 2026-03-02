/**
 * Biologie BMS Pool 17 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool17: Question[] = [
  q(
    "bio-pool-17-002",
    "bio-kap2",
    "Welches Organ filtert das Blut und bildet Harn?",
    ["Leber", "Milz", "Niere", "Bauchspeicheldrüse", "Gallenblase"],
    2,
    "Die Niere filtert das Blut und bildet den Harn.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-17-011",
    "bio-kap1",
    "Welches Organell ist Ort der Proteinbiosynthese?",
    ["Zellkern", "Ribosom", "Lysosom", "Golgi-Apparat", "Mitochondrium"],
    1,
    "Ribosomen katalysieren die Translation (Proteinbiosynthese).",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-17-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht und ermöglicht Fokussierung?",
    ["Netzhaut", "Iris", "Linse", "Hornhaut nur", "Glaskörper"],
    2,
    "Die Linse bricht das Licht und ermöglicht Akkommodation.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-17-016",
    "bio-kap2",
    "Wo wird Östrogen hauptsächlich gebildet?",
    ["Hypophyse", "Nebenniere", "Eierstock", "Plazenta nur", "Schilddrüse"],
    2,
    "Östrogen wird vor allem in den Eierstöcken gebildet.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-17-018",
    "bio-kap3",
    "Was ist die Einnistung?",
    [
      "Befruchtung",
      "Einbetten der Blastozyste in die Gebärmutterschleimhaut",
      "Gastrulation",
      "Geburt",
      "Organogenese",
    ],
    1,
    "Bei der Implantation nistet sich die Blastozyste ins Endometrium ein.",
    "leicht",
    ["Embryologie", "Implantation"]
  ),
  q(
    "bio-pool-17-026",
    "bio-kap2",
    "Welches Hormon senkt den Calciumspiegel?",
    ["Parathormon", "Calcitonin", "Vitamin D", "Aldosteron", "Cortisol"],
    1,
    "Calcitonin (Schilddrüse) senkt den Calciumspiegel.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-17-031",
    "bio-kap2",
    "Welcher Teil des Gehirns regelt Hunger, Durst und Temperatur?",
    ["Kleinhirn", "Hypothalamus", "Großhirnrinde", "Thalamus", "Pons"],
    1,
    "Der Hypothalamus regelt u. a. Hunger, Durst, Temperatur.",
    "leicht",
    ["ZNS", "Hypothalamus"]
  ),
  q(
    "bio-pool-17-038",
    "bio-kap5",
    "Was versteht man unter Population?",
    [
      "Alle Arten",
      "Alle Individuen einer Art in einem Gebiet",
      "Ökosystem",
      "Nahrungskette",
      "Biotop",
    ],
    1,
    "Population = alle Individuen einer Art in einem definierten Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-17-059",
    "bio-kap4",
    "Was bedeutet homozygot?",
    [
      "Zwei verschiedene Allele",
      "Zwei gleiche Allele an einem Genort",
      "Haploid",
      "Ein Allel",
      "Rezessiv",
    ],
    1,
    "Homozygot = gleiche Allele (AA oder aa).",
    "leicht",
    ["Genetik", "Vererbung"]
  ),
];
