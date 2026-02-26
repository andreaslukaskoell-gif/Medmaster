/**
 * Biologie BMS Pool 18 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool18: Question[] = [
  q(
    "bio-pool-18-001",
    "bio-kap1",
    "Welche Basen kommen in der RNA vor?",
    ["A, T, G, C", "A, U, G, C", "nur A und T", "nur G und C", "A, T, U, C"],
    1,
    "RNA: A, U, G, C. DNA: Thymin statt Uracil.",
    "leicht",
    ["RNA", "Genetik"]
  ),
  q(
    "bio-pool-18-002",
    "bio-kap2",
    "Welcher Teil des Auges regelt den Lichteinfall?",
    ["Linse", "Hornhaut", "Iris", "Netzhaut", "Glaskörper"],
    2,
    "Die Iris regelt die Pupillenweite.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-18-003",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 diploide Zelle → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-18-004",
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
    "bio-pool-18-005",
    "bio-kap1",
    "Wo findet die Transkription statt?",
    ["Zytosol", "Zellkern", "Mitochondrium nur", "Golgi-Apparat", "Zellmembran"],
    1,
    "Transkription (DNA → RNA) erfolgt im Zellkern.",
    "leicht",
    ["Genexpression", "Transkription"]
  ),
  q(
    "bio-pool-18-006",
    "bio-kap2",
    "Wo wird ADH gebildet?",
    ["Nebenniere", "Hypophysenvorderlappen", "Hypothalamus", "Niere", "Schilddrüse"],
    2,
    "ADH wird im Hypothalamus gebildet.",
    "mittel",
    ["Hormone", "ADH"]
  ),
  q(
    "bio-pool-18-007",
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
    "bio-pool-18-008",
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
    "Bei der Gastrulation entstehen die drei Keimblätter.",
    "mittel",
    ["Embryologie", "Gastrulation"]
  ),
  q(
    "bio-pool-18-009",
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
    "Das Herz liegt nicht vollständig links (D falsch).",
    "leicht",
    ["Herz", "FALSCH"]
  ),
  q(
    "bio-pool-18-010",
    "bio-kap5",
    "Was ist die humorale Immunantwort?",
    [
      "Nur durch Zellen",
      "Abwehr durch Antikörper in Körperflüssigkeiten",
      "Nur unspezifisch",
      "Nur T-Zellen",
      "Nur Makrophagen",
    ],
    1,
    "Humoral = durch Antikörper in Blut und Gewebe.",
    "mittel",
    ["Immunologie", "humorale Abwehr"]
  ),
  q(
    "bio-pool-18-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll?",
    ["Mitochondrium", "Chloroplast", "Lysosom", "Peroxisom", "Golgi-Apparat"],
    1,
    "Chloroplasten enthalten Chlorophyll.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-18-012",
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
    "Der M. quadriceps femoris streckt das Knie.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-18-013",
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
    "Diploid (2n) = zwei Chromosomensätze (beim Menschen 46).",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-18-014",
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
    "Konkurrenz entsteht um dieselbe begrenzte Ressource.",
    "leicht",
    ["Ökologie", "Konkurrenz"]
  ),
  q(
    "bio-pool-18-015",
    "bio-kap1",
    "Welche Aussage über ATP trifft zu?",
    [
      "Speichert Erbinformation",
      "Universeller Energieträger der Zelle",
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
    "bio-pool-18-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Follikelreifung?",
    ["Prolactin", "FSH", "Oxytocin", "Cortisol", "Aldosteron"],
    1,
    "FSH stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-18-017",
    "bio-kap4",
    "Was ist die Mitose?",
    [
      "Bildung von Keimzellen",
      "Teilung von Körperzellen mit Erhalt des Chromosomensatzes",
      "Nur eine Phase",
      "Reduktion auf haploid",
      "Nur in Keimzellen",
    ],
    1,
    "Mitose: 1 → 2 genetisch gleiche Tochterzellen.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-18-018",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Darmschleimhaut?",
    ["Ektoderm", "Mesoderm", "Entoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Entoderm → Verdauungstrakt, Leber, Bauchspeicheldrüse.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-18-019",
    "bio-kap5",
    "Was ist ein Parasit?",
    ["Räuber", "Organismus, der auf Kosten eines Wirts lebt", "Zersetzer", "Produzent", "Symbiont"],
    1,
    "Parasiten schädigen ihren Wirt.",
    "leicht",
    ["Ökologie", "Parasitismus"]
  ),
  q(
    "bio-pool-18-020",
    "bio-kap2",
    "Welche Struktur trennt Brust- und Bauchhöhle?",
    ["Peritoneum", "Zwerchfell", "Pleura", "Perikard", "Dura mater"],
    1,
    "Das Zwerchfell trennt Thorax und Abdomen.",
    "leicht",
    ["Anatomie", "Zwerchfell"]
  ),
  q(
    "bio-pool-18-021",
    "bio-kap1",
    "Welche Aussage über Osmose trifft zu?",
    [
      "Wasser diffundiert zur höheren Konzentration gelöster Stoffe",
      "Nur Ionen wandern",
      "Kein Wasseraustausch",
      "Nur Gase",
      "Benötigt ATP",
    ],
    0,
    "Bei Osmose diffundiert Wasser zur höheren Konzentration gelöster Stoffe.",
    "mittel",
    ["Zellmembran", "Osmose"]
  ),
  q(
    "bio-pool-18-022",
    "bio-kap2",
    "Welcher Nerv leitet Signale vom Auge zum Gehirn?",
    ["N. opticus", "N. oculomotorius", "N. trigeminus", "N. facialis", "N. vestibulocochlearis"],
    0,
    "Der Sehnerv (N. opticus) leitet visuelle Informationen.",
    "leicht",
    ["Auge", "Nerven"]
  ),
  q(
    "bio-pool-18-023",
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
    "bio-pool-18-024",
    "bio-kap5",
    "Welche Aussage zu Ökosystemen trifft NICHT zu?",
    [
      "Energie fließt",
      "Nährstoffe werden recycelt",
      "Produzenten am Anfang",
      "Energie wird recycelt",
      "Destenten bauen ab",
    ],
    3,
    "Energie wird nicht recycelt (D falsch).",
    "mittel",
    ["Ökologie", "FALSCH"]
  ),
  q(
    "bio-pool-18-025",
    "bio-kap1",
    "Welches Organell hat Doppelmembran und eigene DNA?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Golgi-Apparat", "Peroxisom"],
    2,
    "Mitochondrien haben Doppelmembran und eigene DNA.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-18-026",
    "bio-kap2",
    "Wo wird Progesteron gebildet?",
    ["Hypophyse", "Eierstock und Plazenta", "Nebenniere nur", "Schilddrüse", "Bauchspeicheldrüse"],
    1,
    "Progesteron wird im Gelbkörper und in der Plazenta gebildet.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-18-027",
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
    "Translation = mRNA → Protein an Ribosomen.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-18-028",
    "bio-kap3",
    "Wann spricht man vom Fetus?",
    ["Ab Befruchtung", "Ab der 8. Woche", "Ab Implantation", "Ab Gastrulation", "Ab Geburt"],
    1,
    "Ab etwa 8. Woche wird der Embryo als Fetus bezeichnet.",
    "leicht",
    ["Embryologie", "Fetus"]
  ),
  q(
    "bio-pool-18-029",
    "bio-kap5",
    "Was sind Plasmazellen?",
    [
      "T-Lymphozyten",
      "Aus B-Zellen entstandene Zellen, die Antikörper sezernieren",
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
    "bio-pool-18-030",
    "bio-kap1",
    "Welche Aussage über aktiven Transport trifft zu?",
    [
      "Nur entlang dem Gefälle",
      "Benötigt Energie (z. B. ATP)",
      "Nur Wasser",
      "Gibt es nicht",
      "Nur bei Pflanzen",
    ],
    1,
    "Aktiver Transport: gegen das Gefälle, unter Energieverbrauch.",
    "mittel",
    ["Zellmembran", "Transport"]
  ),
  q(
    "bio-pool-18-031",
    "bio-kap2",
    "Welcher Knochen bildet die Schädelbasis?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Das Hinterhauptsbein bildet die Schädelbasis.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-18-032",
    "bio-kap4",
    "Was ist ein rezessives Allel?",
    [
      "Nur bei Männern",
      "Nur bei Frauen",
      "Prägt sich nur bei Homozygotie aus",
      "Dominiert immer",
      "Nur auf Y-Chromosom",
    ],
    2,
    "Rezessiv: nur bei Homozygotie (z. B. aa).",
    "leicht",
    ["Genetik", "rezessiv"]
  ),
  q(
    "bio-pool-18-033",
    "bio-kap5",
    "Was ist ein Herbivor?",
    ["Räuber", "Pflanzenfresser", "Zersetzer", "Produzent", "Parasit"],
    1,
    "Herbivoren sind Pflanzenfresser.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-18-034",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft NICHT zu?",
    [
      "Lipiddoppelschicht",
      "Enthält Proteine",
      "Semipermeabel",
      "Umgibt nur den Zellkern",
      "Kann Rezeptoren tragen",
    ],
    3,
    "Die Zellmembran umgibt die gesamte Zelle (D falsch).",
    "leicht",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-pool-18-035",
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
    "bio-pool-18-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over in der Prophase I.",
    "mittel",
    ["Meiose", "Crossing-over"]
  ),
  q(
    "bio-pool-18-037",
    "bio-kap3",
    "Was ist die Nabelschnur?",
    [
      "Teil der Plazenta",
      "Verbindung zwischen Fetus und Plazenta mit Blutgefäßen",
      "Fruchtblase",
      "Dottersack",
      "Amnionhöhle",
    ],
    1,
    "Die Nabelschnur enthält Nabelvene und Nabelarterien.",
    "leicht",
    ["Embryologie", "Nabelschnur"]
  ),
  q(
    "bio-pool-18-038",
    "bio-kap5",
    "Was versteht man unter angeborener Immunität?",
    [
      "Nur Antikörper",
      "Unspezifische, angeborene Abwehr",
      "Nur T-Zellen",
      "Nur nach Impfung",
      "Nur erworbene Abwehr",
    ],
    1,
    "Angeborene Abwehr: Haut, Phagozyten, NK-Zellen, Komplement.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-18-039",
    "bio-kap1",
    "Welches Vitamin ist für die Blutbildung wichtig?",
    ["Vitamin A", "Vitamin B12 und Folsäure", "Vitamin C", "Vitamin D", "Vitamin K"],
    1,
    "B12 und Folsäure für Erythropoese.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-18-040",
    "bio-kap2",
    "Wo findet der Gasaustausch in der Lunge statt?",
    ["Bronchien", "Alveolen", "Nur Pleura", "Trachea", "Unter Zwerchfell"],
    1,
    "In den Alveolen erfolgt der Gasaustausch.",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-18-041",
    "bio-kap4",
    "Was ist ein Genom?",
    [
      "Ein Gen",
      "Gesamtheit der Erbinformation",
      "Ein Chromosom",
      "Nur codierende DNA",
      "Ein Protein",
    ],
    1,
    "Das Genom umfasst die gesamte DNA.",
    "leicht",
    ["Genetik", "Genom"]
  ),
  q(
    "bio-pool-18-042",
    "bio-kap5",
    "Was ist eine Art (biologischer Artbegriff)?",
    [
      "Alle Lebewesen",
      "Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen",
      "Eine Gattung",
      "Eine Familie",
      "Eine Population",
    ],
    1,
    "Art = Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen.",
    "leicht",
    ["Ökologie", "Art"]
  ),
  q(
    "bio-pool-18-043",
    "bio-kap1",
    "Wo findet der Citratzyklus statt?",
    ["Zytosol", "Mitochondrienmatrix", "Zellkern", "Zellmembran", "Golgi-Apparat"],
    1,
    "Der Citratzyklus läuft in der Mitochondrienmatrix ab.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-18-044",
    "bio-kap2",
    "Welcher Teil des Dünndarms folgt auf das Duodenum?",
    ["Ileum", "Jejunum", "Colon", "Zökum", "Rektum"],
    1,
    "Duodenum → Jejunum → Ileum.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-18-045",
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
    "Bei einer Deletion geht DNA verloren.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-18-046",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Nieren?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Nieren entstehen aus dem Mesoderm.",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-18-047",
    "bio-kap5",
    "Welche Aussage zu T-Helferzellen trifft zu?",
    [
      "Produzieren Antikörper",
      "Erkennen Antigene über MHC-II und unterstützen andere Immunzellen",
      "Töten nur Bakterien",
      "Unspezifische Abwehr",
      "Reifen in Milz",
    ],
    1,
    "T-Helferzellen unterstützen B-Zellen und andere.",
    "mittel",
    ["Immunologie", "T-Helferzellen"]
  ),
  q(
    "bio-pool-18-048",
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
    "NADH überträgt Elektronen in der Atmungskette.",
    "mittel",
    ["Stoffwechsel", "Coenzyme"]
  ),
  q(
    "bio-pool-18-049",
    "bio-kap2",
    "Wo wird Parathormon gebildet?",
    ["Schilddrüse", "Nebenschilddrüse", "Nebenniere", "Hypophyse", "Bauchspeicheldrüse"],
    1,
    "Parathormon wird in den Nebenschilddrüsen gebildet.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-18-050",
    "bio-kap4",
    "Was ist ein Karyotyp?",
    ["Ein Gen", "Darstellung der Chromosomen einer Zelle", "Phänotyp", "Mutation", "Protein"],
    1,
    "Karyotyp = Darstellung der Chromosomen.",
    "mittel",
    ["Genetik", "Karyotyp"]
  ),
  q(
    "bio-pool-18-051",
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
    "Ökosysteme sind dynamisch mit stabilen Schwankungen.",
    "mittel",
    ["Ökologie", "Gleichgewicht"]
  ),
  q(
    "bio-pool-18-052",
    "bio-kap1",
    "Welches Organell ist für die Spindelbildung wichtig?",
    ["Lysosom", "Centrosom", "Peroxisom", "Golgi-Apparat", "Ribosom"],
    1,
    "Centrosomen organisieren die Teilungsspindel.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-18-053",
    "bio-kap2",
    "Welche Aussage über die Bauchspeicheldrüse trifft NICHT zu?",
    [
      "Produziert Verdauungsenzyme",
      "Produziert Insulin",
      "Liegt retroperitoneal",
      "Produziert Galle",
      "Hat Langerhans-Inseln",
    ],
    3,
    "Galle wird von der Leber produziert (D falsch).",
    "leicht",
    ["Bauchspeicheldrüse", "FALSCH"]
  ),
  q(
    "bio-pool-18-054",
    "bio-kap4",
    "Was passiert in der Anaphase der Mitose?",
    [
      "Chromosomen kondensieren",
      "Chromosomen ordnen sich an",
      "Schwesterchromatiden trennen sich",
      "Kernmembran bildet sich",
      "Zellmembran teilt sich",
    ],
    2,
    "In der Anaphase trennen sich die Schwesterchromatiden.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-18-055",
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
    "Chorionhöhle liegt zwischen Trophoblast und Amnion.",
    "schwer",
    ["Embryologie", "Chorion"]
  ),
  q(
    "bio-pool-18-056",
    "bio-kap5",
    "Was sind Zytokine?",
    ["Antikörper", "Signalmoleküle des Immunsystems", "Nur Hormone", "Nur Enzyme", "Nur Toxine"],
    1,
    "Zytokine steuern die Kommunikation zwischen Immunzellen.",
    "mittel",
    ["Immunologie", "Zytokine"]
  ),
  q(
    "bio-pool-18-057",
    "bio-kap1",
    "Welche Aussage über die Diffusion trifft zu?",
    [
      "Benötigt immer Energie",
      "Stoffe bewegen sich entlang dem Konzentrationsgefälle",
      "Nur große Moleküle",
      "Nur durch Kanäle",
      "Nur in Flüssigkeiten",
    ],
    1,
    "Diffusion: vom Ort höherer zu geringerer Konzentration.",
    "leicht",
    ["Zellmembran", "Diffusion"]
  ),
  q(
    "bio-pool-18-058",
    "bio-kap2",
    "Welcher Muskel ist der Hauptatemmuskel?",
    ["Interkostalmuskeln", "Zwerchfell", "M. pectoralis", "M. scalenus", "Bauchmuskeln"],
    1,
    "Das Zwerchfell ist der wichtigste Inspirationsmuskel.",
    "leicht",
    ["Atmung", "Zwerchfell"]
  ),
  q(
    "bio-pool-18-059",
    "bio-kap4",
    "Was ist ein polygener Erbgang?",
    [
      "Nur ein Gen",
      "Mehrere Gene und oft Umwelt beeinflussen ein Merkmal",
      "Nur auf X-Chromosom",
      "Nur rezessiv",
      "Nur dominant",
    ],
    1,
    "Polygen: viele Gene und Umwelt wirken zusammen.",
    "mittel",
    ["Genetik", "polygen"]
  ),
  q(
    "bio-pool-18-060",
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
