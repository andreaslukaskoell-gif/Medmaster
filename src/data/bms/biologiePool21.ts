/**
 * Biologie BMS Pool 21 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool21: Question[] = [
  q(
    "bio-pool-21-001",
    "bio-kap1",
    "Welche Basen kommen in der RNA vor?",
    ["A, T, G, C", "A, U, G, C", "nur A und T", "nur G und C", "A, T, U, C"],
    1,
    "RNA: A, U, G, C. DNA: Thymin statt Uracil.",
    "leicht",
    ["RNA", "Genetik"]
  ),
  q(
    "bio-pool-21-002",
    "bio-kap2",
    "Welcher Teil des Auges regelt den Lichteinfall?",
    ["Linse", "Hornhaut", "Iris", "Netzhaut", "Glaskörper"],
    2,
    "Die Iris regelt die Pupillenweite.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-21-003",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-21-004",
    "bio-kap5",
    "Was sind Mastzellen?",
    [
      "Erythrozyten",
      "Zellen, die bei Aktivierung Histamin freisetzen",
      "T-Killerzellen",
      "Plasmazellen",
      "Thrombozyten",
    ],
    1,
    "Mastzellen setzen bei Allergenkontakt Histamin frei.",
    "mittel",
    ["Immunologie", "Mastzellen"]
  ),
  q(
    "bio-pool-21-005",
    "bio-kap1",
    "Wo findet die Transkription statt?",
    ["Zytosol", "Zellkern", "Mitochondrium nur", "Golgi-Apparat", "Zellmembran"],
    1,
    "Transkription im Zellkern.",
    "leicht",
    ["Genexpression", "Transkription"]
  ),
  q(
    "bio-pool-21-006",
    "bio-kap2",
    "Wo wird ADH gebildet?",
    ["Nebenniere", "Hypophysenvorderlappen", "Hypothalamus", "Niere", "Schilddrüse"],
    2,
    "ADH im Hypothalamus.",
    "mittel",
    ["Hormone", "ADH"]
  ),
  q(
    "bio-pool-21-007",
    "bio-kap4",
    "Was ist ein Stopp-Codon?",
    [
      "Codiert für Aminosäure",
      "Signalisiert Ende der Translation",
      "Startet Transkription",
      "Bindet an Ribosomen",
      "Nur in DNA",
    ],
    1,
    "Stopp-Codons beenden die Translation.",
    "mittel",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-21-008",
    "bio-kap3",
    "Was ist die Gastrulation?",
    [
      "Befruchtung",
      "Einstülpung und Bildung der Keimblätter",
      "Implantation",
      "Organogenese",
      "Geburt",
    ],
    1,
    "Gastrulation: Bildung der Keimblätter.",
    "mittel",
    ["Embryologie", "Gastrulation"]
  ),
  q(
    "bio-pool-21-009",
    "bio-kap2",
    "Welche Aussage über das Herz trifft NICHT zu?",
    [
      "Vier Kammern",
      "Pumpt Blut",
      "Kann ANP produzieren",
      "Liegt vollständig links",
      "Hat Klappen",
    ],
    3,
    "Herz liegt nicht vollständig links (D falsch).",
    "leicht",
    ["Herz", "FALSCH"]
  ),
  q(
    "bio-pool-21-010",
    "bio-kap5",
    "Was ist die humorale Immunantwort?",
    [
      "Nur durch Zellen",
      "Abwehr durch Antikörper",
      "Nur unspezifisch",
      "Nur T-Zellen",
      "Nur Makrophagen",
    ],
    1,
    "Humoral = durch Antikörper.",
    "mittel",
    ["Immunologie", "humorale Abwehr"]
  ),
  q(
    "bio-pool-21-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll?",
    ["Mitochondrium", "Chloroplast", "Lysosom", "Peroxisom", "Golgi-Apparat"],
    1,
    "Chloroplasten enthalten Chlorophyll.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-21-012",
    "bio-kap2",
    "Welcher Muskel streckt das Knie?",
    [
      "M. biceps femoris",
      "M. quadriceps femoris",
      "M. gastrocnemius",
      "M. sartorius",
      "M. gracilis",
    ],
    1,
    "M. quadriceps femoris streckt das Knie.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-21-013",
    "bio-kap4",
    "Was ist ein diploider Chromosomensatz?",
    [
      "Einfacher Satz (n)",
      "Doppelter Satz (2n)",
      "Nur in Keimzellen",
      "92 beim Menschen",
      "Nur bei Pflanzen",
    ],
    1,
    "Diploid (2n) = zwei Chromosomensätze.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-21-014",
    "bio-kap5",
    "Was versteht man unter Konkurrenz?",
    [
      "Nur Räuber-Beute",
      "Nutzung derselben begrenzten Ressource",
      "Nur Symbiose",
      "Nur Parasitismus",
      "Nur zwischen Pflanzen",
    ],
    1,
    "Konkurrenz um dieselbe Ressource.",
    "leicht",
    ["Ökologie", "Konkurrenz"]
  ),
  q(
    "bio-pool-21-015",
    "bio-kap1",
    "Welche Aussage über ATP trifft zu?",
    [
      "Erbinformation",
      "Universeller Energieträger",
      "Nur in Mitochondrien",
      "Nur bei Fotosynthese",
      "Keine Phosphatgruppen",
    ],
    1,
    "ATP speichert und liefert Energie.",
    "leicht",
    ["Stoffwechsel", "ATP"]
  ),
  q(
    "bio-pool-21-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Follikelreifung?",
    ["Prolactin", "FSH", "Oxytocin", "Cortisol", "Aldosteron"],
    1,
    "FSH stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-21-017",
    "bio-kap4",
    "Was ist die Mitose?",
    [
      "Keimzellen",
      "Körperzellteilung mit Erhalt des Chromosomensatzes",
      "Nur eine Phase",
      "Reduktion auf haploid",
      "Nur in Keimzellen",
    ],
    1,
    "Mitose: 1 → 2 gleiche Tochterzellen.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-21-018",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Darmschleimhaut?",
    ["Ektoderm", "Mesoderm", "Entoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Entoderm → Verdauungstrakt.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-21-019",
    "bio-kap5",
    "Was ist ein Parasit?",
    ["Räuber", "Organismus, der auf Kosten eines Wirts lebt", "Zersetzer", "Produzent", "Symbiont"],
    1,
    "Parasiten schädigen ihren Wirt.",
    "leicht",
    ["Ökologie", "Parasitismus"]
  ),
  q(
    "bio-pool-21-020",
    "bio-kap2",
    "Welche Struktur trennt Brust- und Bauchhöhle?",
    ["Peritoneum", "Zwerchfell", "Pleura", "Perikard", "Dura mater"],
    1,
    "Zwerchfell trennt Thorax und Abdomen.",
    "leicht",
    ["Anatomie", "Zwerchfell"]
  ),
  q(
    "bio-pool-21-021",
    "bio-kap1",
    "Welche Aussage über Osmose trifft zu?",
    [
      "Wasser zur höheren Konzentration gelöster Stoffe",
      "Nur Ionen",
      "Kein Wasseraustausch",
      "Nur Gase",
      "Benötigt ATP",
    ],
    0,
    "Osmose: Wasser zur höheren Konzentration gelöster Stoffe.",
    "mittel",
    ["Zellmembran", "Osmose"]
  ),
  q(
    "bio-pool-21-022",
    "bio-kap2",
    "Welcher Nerv leitet Signale vom Auge zum Gehirn?",
    ["N. opticus", "N. oculomotorius", "N. trigeminus", "N. facialis", "N. vestibulocochlearis"],
    0,
    "N. opticus = Sehnerv.",
    "leicht",
    ["Auge", "Nerven"]
  ),
  q(
    "bio-pool-21-023",
    "bio-kap4",
    "Was ist ein autosomal-dominanter Erbgang?",
    [
      "Nur Frauen",
      "Merkmal bei mindestens einem betroffenen Allel",
      "Nur Männer",
      "Immer rezessiv",
      "Nur auf X-Chromosom",
    ],
    1,
    "Autosomal-dominant: ein betroffenes Allel reicht.",
    "mittel",
    ["Vererbung", "dominant"]
  ),
  q(
    "bio-pool-21-024",
    "bio-kap5",
    "Welche Aussage zu Ökosystemen trifft NICHT zu?",
    [
      "Energie fließt",
      "Nährstoffe recycelt",
      "Produzenten am Anfang",
      "Energie recycelt",
      "Destenten bauen ab",
    ],
    3,
    "Energie wird nicht recycelt (D falsch).",
    "mittel",
    ["Ökologie", "FALSCH"]
  ),
  q(
    "bio-pool-21-025",
    "bio-kap1",
    "Welches Organell hat Doppelmembran und eigene DNA?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Golgi-Apparat", "Peroxisom"],
    2,
    "Mitochondrien haben Doppelmembran und eigene DNA.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-21-026",
    "bio-kap2",
    "Wo wird Progesteron gebildet?",
    ["Hypophyse", "Eierstock und Plazenta", "Nebenniere nur", "Schilddrüse", "Bauchspeicheldrüse"],
    1,
    "Progesteron im Gelbkörper und in der Plazenta.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-21-027",
    "bio-kap4",
    "Was ist die Translation?",
    [
      "Kopieren der DNA",
      "Übersetzung von mRNA in Protein an Ribosomen",
      "Replikation",
      "Spleißen",
      "Transkription",
    ],
    1,
    "Translation = mRNA → Protein.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-21-028",
    "bio-kap3",
    "Wann spricht man vom Fetus?",
    ["Ab Befruchtung", "Ab der 8. Woche", "Ab Implantation", "Ab Gastrulation", "Ab Geburt"],
    1,
    "Ab etwa 8. Woche = Fetus.",
    "leicht",
    ["Embryologie", "Fetus"]
  ),
  q(
    "bio-pool-21-029",
    "bio-kap5",
    "Was sind Plasmazellen?",
    [
      "T-Lymphozyten",
      "Aus B-Zellen, sezernieren Antikörper",
      "Erythrozyten",
      "Makrophagen",
      "NK-Zellen",
    ],
    1,
    "Plasmazellen produzieren Antikörper.",
    "mittel",
    ["Immunologie", "Plasmazellen"]
  ),
  q(
    "bio-pool-21-030",
    "bio-kap1",
    "Welche Aussage über aktiven Transport trifft zu?",
    ["Nur entlang Gefälle", "Benötigt Energie", "Nur Wasser", "Gibt es nicht", "Nur bei Pflanzen"],
    1,
    "Aktiver Transport: gegen Gefälle, mit Energie.",
    "mittel",
    ["Zellmembran", "Transport"]
  ),
  q(
    "bio-pool-21-031",
    "bio-kap2",
    "Welcher Knochen bildet die Schädelbasis?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Hinterhauptsbein = Schädelbasis.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-21-032",
    "bio-kap4",
    "Was ist ein rezessives Allel?",
    [
      "Nur bei Männern",
      "Nur bei Frauen",
      "Nur bei Homozygotie ausgeprägt",
      "Dominiert immer",
      "Nur auf Y-Chromosom",
    ],
    2,
    "Rezessiv: nur bei Homozygotie.",
    "leicht",
    ["Genetik", "rezessiv"]
  ),
  q(
    "bio-pool-21-033",
    "bio-kap5",
    "Was ist ein Herbivor?",
    ["Räuber", "Pflanzenfresser", "Zersetzer", "Produzent", "Parasit"],
    1,
    "Herbivoren = Pflanzenfresser.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-21-034",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft NICHT zu?",
    ["Lipiddoppelschicht", "Proteine", "Semipermeabel", "Umgibt nur Zellkern", "Rezeptoren"],
    3,
    "Zellmembran umgibt die gesamte Zelle (D falsch).",
    "leicht",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-pool-21-035",
    "bio-kap2",
    "Welches Organ produziert Amylase?",
    [
      "Nur Magen",
      "Speicheldrüsen und Bauchspeicheldrüse",
      "Nur Leber",
      "Nur Dünndarm",
      "Gallenblase",
    ],
    1,
    "Amylase in Speicheldrüsen und Bauchspeicheldrüse.",
    "mittel",
    ["Verdauung", "Enzyme"]
  ),
  q(
    "bio-pool-21-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over in Prophase I.",
    "mittel",
    ["Meiose", "Crossing-over"]
  ),
  q(
    "bio-pool-21-037",
    "bio-kap3",
    "Was ist die Nabelschnur?",
    [
      "Teil der Plazenta",
      "Verbindung Fetus–Plazenta mit Blutgefäßen",
      "Fruchtblase",
      "Dottersack",
      "Amnionhöhle",
    ],
    1,
    "Nabelschnur mit Nabelvene und Nabelarterien.",
    "leicht",
    ["Embryologie", "Nabelschnur"]
  ),
  q(
    "bio-pool-21-038",
    "bio-kap5",
    "Was versteht man unter angeborener Immunität?",
    [
      "Nur Antikörper",
      "Unspezifische, angeborene Abwehr",
      "Nur T-Zellen",
      "Nur nach Impfung",
      "Nur erworben",
    ],
    1,
    "Angeborene Abwehr: Haut, Phagozyten, NK-Zellen.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-21-039",
    "bio-kap1",
    "Welches Vitamin ist für die Blutbildung wichtig?",
    ["Vitamin A", "Vitamin B12 und Folsäure", "Vitamin C", "Vitamin D", "Vitamin K"],
    1,
    "B12 und Folsäure für Erythropoese.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-21-040",
    "bio-kap2",
    "Wo findet der Gasaustausch in der Lunge statt?",
    ["Bronchien", "Alveolen", "Nur Pleura", "Trachea", "Unter Zwerchfell"],
    1,
    "Gasaustausch in den Alveolen.",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-21-041",
    "bio-kap4",
    "Was ist ein Genom?",
    ["Ein Gen", "Gesamtheit der Erbinformation", "Chromosom", "Nur codierende DNA", "Protein"],
    1,
    "Genom = gesamte DNA.",
    "leicht",
    ["Genetik", "Genom"]
  ),
  q(
    "bio-pool-21-042",
    "bio-kap5",
    "Was ist eine Art (biologischer Artbegriff)?",
    [
      "Alle Lebewesen",
      "Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen",
      "Gattung",
      "Familie",
      "Population",
    ],
    1,
    "Art = Fortpflanzungsgemeinschaft.",
    "leicht",
    ["Ökologie", "Art"]
  ),
  q(
    "bio-pool-21-043",
    "bio-kap1",
    "Wo findet der Citratzyklus statt?",
    ["Zytosol", "Mitochondrienmatrix", "Zellkern", "Zellmembran", "Golgi-Apparat"],
    1,
    "Citratzyklus in der Mitochondrienmatrix.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-21-044",
    "bio-kap2",
    "Welcher Teil des Dünndarms folgt auf das Duodenum?",
    ["Ileum", "Jejunum", "Colon", "Zökum", "Rektum"],
    1,
    "Duodenum → Jejunum → Ileum.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-21-045",
    "bio-kap4",
    "Was ist eine Deletion?",
    [
      "Verdopplung",
      "Verlust eines DNA-Abschnitts",
      "Einbau einer Base",
      "Umlagerung",
      "Punktmutation",
    ],
    1,
    "Deletion = Verlust von DNA.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-21-046",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Nieren?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Nieren aus Mesoderm.",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-21-047",
    "bio-kap5",
    "Welche Aussage zu T-Helferzellen trifft zu?",
    [
      "Produzieren Antikörper",
      "Erkennen MHC-II, unterstützen andere Immunzellen",
      "Töten nur Bakterien",
      "Unspezifisch",
      "Reifen in Milz",
    ],
    1,
    "T-Helferzellen unterstützen B-Zellen und andere.",
    "mittel",
    ["Immunologie", "T-Helferzellen"]
  ),
  q(
    "bio-pool-21-048",
    "bio-kap1",
    "Welche Aussage über NADH trifft zu?",
    [
      "Strukturprotein",
      "Coenzym, überträgt Elektronen",
      "Nur in DNA",
      "Hormon",
      "Nur bei Fotosynthese",
    ],
    1,
    "NADH überträgt Elektronen.",
    "mittel",
    ["Stoffwechsel", "Coenzyme"]
  ),
  q(
    "bio-pool-21-049",
    "bio-kap2",
    "Wo wird Parathormon gebildet?",
    ["Schilddrüse", "Nebenschilddrüse", "Nebenniere", "Hypophyse", "Bauchspeicheldrüse"],
    1,
    "Parathormon in den Nebenschilddrüsen.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-21-050",
    "bio-kap4",
    "Was ist ein Karyotyp?",
    ["Ein Gen", "Darstellung der Chromosomen einer Zelle", "Phänotyp", "Mutation", "Protein"],
    1,
    "Karyotyp = Chromosomendarstellung.",
    "mittel",
    ["Genetik", "Karyotyp"]
  ),
  q(
    "bio-pool-21-051",
    "bio-kap5",
    "Was ist ein ökologisches Gleichgewicht?",
    [
      "Keine Wechselwirkungen",
      "Dynamisches Gleichgewicht mit Schwankungen",
      "Keine Artenvielfalt",
      "Nur abiotisch",
      "Statisch",
    ],
    1,
    "Ökosysteme sind dynamisch.",
    "mittel",
    ["Ökologie", "Gleichgewicht"]
  ),
  q(
    "bio-pool-21-052",
    "bio-kap1",
    "Welches Organell ist für die Spindelbildung wichtig?",
    ["Lysosom", "Centrosom", "Peroxisom", "Golgi-Apparat", "Ribosom"],
    1,
    "Centrosomen organisieren die Spindel.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-21-053",
    "bio-kap2",
    "Welche Aussage über die Bauchspeicheldrüse trifft NICHT zu?",
    ["Verdauungsenzyme", "Insulin", "Retroperitoneal", "Produziert Galle", "Langerhans-Inseln"],
    3,
    "Galle wird von der Leber produziert (D falsch).",
    "leicht",
    ["Bauchspeicheldrüse", "FALSCH"]
  ),
  q(
    "bio-pool-21-054",
    "bio-kap4",
    "Was passiert in der Anaphase der Mitose?",
    [
      "Chromosomen kondensieren",
      "Ordnen sich an",
      "Schwesterchromatiden trennen sich",
      "Kernmembran",
      "Zellmembran teilt sich",
    ],
    2,
    "Anaphase: Schwesterchromatiden trennen sich.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-21-055",
    "bio-kap3",
    "Was ist die Chorionhöhle?",
    [
      "Amnionhöhle",
      "Raum zwischen Trophoblast und Embryoblast",
      "Gebärmutterhöhle",
      "Fruchtblase",
      "Plazenta",
    ],
    1,
    "Chorionhöhle zwischen Trophoblast und Amnion.",
    "schwer",
    ["Embryologie", "Chorion"]
  ),
  q(
    "bio-pool-21-056",
    "bio-kap5",
    "Was sind Zytokine?",
    ["Antikörper", "Signalmoleküle des Immunsystems", "Nur Hormone", "Nur Enzyme", "Nur Toxine"],
    1,
    "Zytokine steuern Immunzell-Kommunikation.",
    "mittel",
    ["Immunologie", "Zytokine"]
  ),
  q(
    "bio-pool-21-057",
    "bio-kap1",
    "Welche Aussage über die Diffusion trifft zu?",
    [
      "Benötigt Energie",
      "Stoffe entlang Konzentrationsgefälle",
      "Nur große Moleküle",
      "Nur durch Kanäle",
      "Nur in Flüssigkeiten",
    ],
    1,
    "Diffusion: höhere → geringere Konzentration.",
    "leicht",
    ["Zellmembran", "Diffusion"]
  ),
  q(
    "bio-pool-21-058",
    "bio-kap2",
    "Welcher Muskel ist der Hauptatemmuskel?",
    ["Interkostalmuskeln", "Zwerchfell", "M. pectoralis", "M. scalenus", "Bauchmuskeln"],
    1,
    "Zwerchfell = Hauptatemmuskel.",
    "leicht",
    ["Atmung", "Zwerchfell"]
  ),
  q(
    "bio-pool-21-059",
    "bio-kap4",
    "Was ist ein polygener Erbgang?",
    [
      "Nur ein Gen",
      "Mehrere Gene und oft Umwelt",
      "Nur X-Chromosom",
      "Nur rezessiv",
      "Nur dominant",
    ],
    1,
    "Polygen: viele Gene und Umwelt.",
    "mittel",
    ["Genetik", "polygen"]
  ),
  q(
    "bio-pool-21-060",
    "bio-kap5",
    "Was ist ein Konsument?",
    [
      "Produzent",
      "Organismus, der organische Substanz von anderen aufnimmt",
      "Zersetzer nur",
      "Pilz nur",
      "Pflanze",
    ],
    1,
    "Konsumenten ernähren sich von anderen Organismen.",
    "leicht",
    ["Ökologie", "Konsument"]
  ),
];
