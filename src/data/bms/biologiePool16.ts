/**
 * Biologie BMS Pool 16 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool16: Question[] = [
  q(
    "bio-pool-16-001",
    "bio-kap1",
    "Welche Basenpaarung kommt in der DNA vor?",
    ["A-U und G-C", "A-T und G-C", "A-G und T-C", "nur A-T", "nur G-C"],
    1,
    "In der DNA: A-T und G-C. In der RNA: A-U statt A-T.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-16-002",
    "bio-kap2",
    "Welcher Teil des Auges regelt den Lichteinfall?",
    ["Linse", "Hornhaut", "Iris", "Netzhaut", "Glaskörper"],
    2,
    "Die Iris regelt die Pupillenweite und damit den Lichteinfall.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-16-003",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose aus einer Zelle?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 diploide Zelle → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-16-004",
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
    "Mastzellen setzen bei Allergenkontakt (IgE) Histamin und andere Mediatoren frei.",
    "mittel",
    ["Immunologie", "Mastzellen"]
  ),
  q(
    "bio-pool-16-005",
    "bio-kap1",
    "Wo findet die Transkription statt?",
    ["Zytosol", "Zellkern", "Mitochondrium nur", "Golgi-Apparat", "Zellmembran"],
    1,
    "Transkription (DNA → RNA) erfolgt im Zellkern.",
    "leicht",
    ["Genexpression", "Transkription"]
  ),
  q(
    "bio-pool-16-006",
    "bio-kap2",
    "Wo wird ADH gebildet?",
    ["Nebenniere", "Hypophysenvorderlappen", "Hypothalamus", "Niere", "Schilddrüse"],
    2,
    "ADH (Vasopressin) wird im Hypothalamus gebildet und im Hypophysenhinterlappen gespeichert.",
    "mittel",
    ["Hormone", "ADH"]
  ),
  q(
    "bio-pool-16-007",
    "bio-kap4",
    "Was ist ein Stopp-Codon?",
    [
      "Codiert für eine Aminosäure",
      "Signalisiert das Ende der Translation",
      "Startet die Transkription",
      "Bindet an Ribosomen",
      "Ist nur in der DNA",
    ],
    1,
    "Stopp-Codons (UAA, UAG, UGA) beenden die Translation.",
    "mittel",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-16-008",
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
    "Bei der Gastrulation entstehen die drei Keimblätter (Ektoderm, Mesoderm, Entoderm).",
    "mittel",
    ["Embryologie", "Gastrulation"]
  ),
  q(
    "bio-pool-16-009",
    "bio-kap2",
    "Welche Aussage über das Herz trifft NICHT zu?",
    [
      "Das Herz hat vier Kammern",
      "Das Herz pumpt Blut",
      "Das Herz kann Hormone produzieren (ANP)",
      "Das Herz liegt vollständig links",
      "Das Herz hat Klappen",
    ],
    3,
    "Das Herz liegt größtenteils links, aber nicht vollständig links (D falsch).",
    "leicht",
    ["Herz", "FALSCH"]
  ),
  q(
    "bio-pool-16-010",
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
    "Humoral = durch Antikörper (von B-Zellen/Plasmazellen) in Blut und Gewebe.",
    "mittel",
    ["Immunologie", "humorale Abwehr"]
  ),
  q(
    "bio-pool-16-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll?",
    ["Mitochondrium", "Chloroplast", "Lysosom", "Peroxisom", "Golgi-Apparat"],
    1,
    "Chloroplasten enthalten Chlorophyll und sind Ort der Fotosynthese.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-16-012",
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
    "bio-pool-16-013",
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
    "Diploid (2n) = zwei Chromosomensätze (beim Menschen 46). Haploid (n) = 23 in Keimzellen.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-16-014",
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
    "Konkurrenz entsteht um dieselbe begrenzte Ressource (Nahrung, Raum, Licht).",
    "leicht",
    ["Ökologie", "Konkurrenz"]
  ),
  q(
    "bio-pool-16-015",
    "bio-kap1",
    "Welche Aussage über ATP trifft zu?",
    [
      "ATP speichert Erbinformation",
      "ATP ist der universelle Energieträger der Zelle",
      "ATP kommt nur in Mitochondrien vor",
      "ATP wird nur bei Fotosynthese gebildet",
      "ATP hat keine Phosphatgruppen",
    ],
    1,
    "ATP (Adenosintriphosphat) speichert und liefert Energie.",
    "leicht",
    ["Stoffwechsel", "ATP"]
  ),
  q(
    "bio-pool-16-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Follikelreifung?",
    ["Prolactin", "FSH", "Oxytocin", "Cortisol", "Aldosteron"],
    1,
    "FSH (follikelstimulierendes Hormon) stimuliert die Follikelreifung im Eierstock.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-16-017",
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
    "Mitose: 1 → 2 genetisch gleiche Tochterzellen mit gleichem Chromosomensatz.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-16-018",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Darmschleimhaut?",
    ["Ektoderm", "Mesoderm", "Entoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Entoderm → Epithel von Verdauungstrakt, Leber, Bauchspeicheldrüse, Atemwegen.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-16-019",
    "bio-kap5",
    "Was ist ein Parasit?",
    [
      "Räuber",
      "Organismus, der auf Kosten eines Wirts lebt und ihn schädigt",
      "Zersetzer",
      "Produzent",
      "Symbiont",
    ],
    1,
    "Parasiten leben in oder auf einem Wirt und schädigen ihn.",
    "leicht",
    ["Ökologie", "Parasitismus"]
  ),
  q(
    "bio-pool-16-020",
    "bio-kap2",
    "Welche Struktur trennt Brust- und Bauchhöhle?",
    ["Peritoneum", "Zwerchfell", "Pleura", "Perikard", "Dura mater"],
    1,
    "Das Zwerchfell trennt Thorax und Abdomen und ist wichtigster Atemmuskel.",
    "leicht",
    ["Anatomie", "Zwerchfell"]
  ),
  q(
    "bio-pool-16-021",
    "bio-kap1",
    "Welche Aussage über Osmose trifft zu?",
    [
      "Wasser diffundiert zur höheren Konzentration gelöster Stoffe",
      "Nur Ionen wandern",
      "Es gibt keinen Wasseraustausch",
      "Osmose betrifft nur Gase",
      "Osmose benötigt ATP",
    ],
    0,
    "Bei Osmose diffundiert Wasser durch eine semipermeable Membran zur höheren Konzentration gelöster Stoffe.",
    "mittel",
    ["Zellmembran", "Osmose"]
  ),
  q(
    "bio-pool-16-022",
    "bio-kap2",
    "Welcher Nerv leitet Signale vom Auge zum Gehirn?",
    ["N. opticus", "N. oculomotorius", "N. trigeminus", "N. facialis", "N. vestibulocochlearis"],
    0,
    "Der Sehnerv (N. opticus) leitet visuelle Informationen zur Netzhaut.",
    "leicht",
    ["Auge", "Nerven"]
  ),
  q(
    "bio-pool-16-023",
    "bio-kap4",
    "Was ist ein autosomal-dominanter Erbgang?",
    [
      "Nur Frauen betroffen",
      "Merkmal tritt bei mindestens einem betroffenen Allel auf",
      "Nur Männer betroffen",
      "Immer rezessiv",
      "Nur auf X-Chromosom",
    ],
    1,
    "Autosomal-dominant: ein betroffenes Allel reicht für den Phänotyp.",
    "mittel",
    ["Vererbung", "dominant"]
  ),
  q(
    "bio-pool-16-024",
    "bio-kap5",
    "Welche Aussage zu Ökosystemen trifft NICHT zu?",
    [
      "Energie fließt durch das Ökosystem",
      "Nährstoffe werden recycelt",
      "Produzenten stehen am Anfang",
      "Energie wird vollständig recycelt",
      "Destenten bauen ab",
    ],
    3,
    "Energie wird nicht recycelt; sie geht als Wärme verloren (D falsch).",
    "mittel",
    ["Ökologie", "FALSCH"]
  ),
  q(
    "bio-pool-16-025",
    "bio-kap1",
    "Welches Organell hat Doppelmembran und eigene DNA?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Golgi-Apparat", "Peroxisom"],
    2,
    "Mitochondrien (und Chloroplasten) haben Doppelmembran und eigene DNA.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-16-026",
    "bio-kap2",
    "Wo wird Progesteron gebildet?",
    [
      "Hypophyse",
      "Eierstock (Corpus luteum) und Plazenta",
      "Nebenniere nur",
      "Schilddrüse",
      "Bauchspeicheldrüse",
    ],
    1,
    "Progesteron wird im Gelbkörper und in der Plazenta gebildet.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-16-027",
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
    "Translation = Übersetzung der mRNA in Protein an den Ribosomen.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-16-028",
    "bio-kap3",
    "Wann spricht man vom Fetus?",
    [
      "Ab Befruchtung",
      "Ab der 8. Entwicklungswoche",
      "Ab Implantation",
      "Ab Gastrulation",
      "Ab Geburt",
    ],
    1,
    "Nach der Organogenese (ab etwa 8. Woche) wird der Embryo als Fetus bezeichnet.",
    "leicht",
    ["Embryologie", "Fetus"]
  ),
  q(
    "bio-pool-16-029",
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
    "Plasmazellen produzieren große Mengen spezifischer Antikörper.",
    "mittel",
    ["Immunologie", "Plasmazellen"]
  ),
  q(
    "bio-pool-16-030",
    "bio-kap1",
    "Welche Aussage über aktiven Transport trifft zu?",
    [
      "Er erfolgt nur entlang dem Gefälle",
      "Er benötigt Energie (z. B. ATP)",
      "Er betrifft nur Wasser",
      "Es gibt keinen aktiven Transport",
      "Nur bei Pflanzen",
    ],
    1,
    "Beim aktiven Transport werden Stoffe gegen das Konzentrationsgefälle unter Energieverbrauch transportiert.",
    "mittel",
    ["Zellmembran", "Transport"]
  ),
  q(
    "bio-pool-16-031",
    "bio-kap2",
    "Welcher Knochen bildet die Schädelbasis?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Das Hinterhauptsbein (Os occipitale) bildet die Schädelbasis mit Foramen magnum.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-16-032",
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
    "Rezessiv: Merkmal tritt nur auf, wenn beide Allele rezessiv sind (z. B. aa).",
    "leicht",
    ["Genetik", "rezessiv"]
  ),
  q(
    "bio-pool-16-033",
    "bio-kap5",
    "Was ist ein Herbivor?",
    ["Räuber", "Pflanzenfresser", "Zersetzer", "Produzent", "Parasit"],
    1,
    "Herbivoren sind Pflanzenfresser. Prädatoren = Räuber.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-16-034",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft NICHT zu?",
    [
      "Sie besteht aus Lipiddoppelschicht",
      "Sie enthält Proteine",
      "Sie ist semipermeabel",
      "Sie umgibt nur den Zellkern",
      "Sie kann Rezeptoren tragen",
    ],
    3,
    "Die Zellmembran umgibt die gesamte Zelle (D falsch).",
    "leicht",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-pool-16-035",
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
    "Amylase (Stärkespaltung) wird in Speicheldrüsen und Bauchspeicheldrüse gebildet.",
    "mittel",
    ["Verdauung", "Enzyme"]
  ),
  q(
    "bio-pool-16-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over erfolgt in der Prophase I der Meiose.",
    "mittel",
    ["Meiose", "Crossing-over"]
  ),
  q(
    "bio-pool-16-037",
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
    "bio-pool-16-038",
    "bio-kap5",
    "Was versteht man unter angeborener Immunität?",
    [
      "Nur Antikörper",
      "Unspezifische, angeborene Abwehr (Barrieren, Phagozyten, NK-Zellen)",
      "Nur T-Zellen",
      "Nur nach Impfung",
      "Nur erworbene Abwehr",
    ],
    1,
    "Angeborene Abwehr: Haut, Schleimhäute, Phagozyten, NK-Zellen, Komplement – unspezifisch.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-16-039",
    "bio-kap1",
    "Welches Vitamin ist für die Blutbildung wichtig?",
    ["Vitamin A", "Vitamin B12 und Folsäure", "Vitamin C", "Vitamin D", "Vitamin K"],
    1,
    "Vitamin B12 und Folsäure sind für die DNA-Synthese und Erythropoese nötig.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-16-040",
    "bio-kap2",
    "Wo findet der Gasaustausch in der Lunge statt?",
    [
      "In den Bronchien",
      "In den Alveolen",
      "Nur in der Pleura",
      "In der Trachea",
      "Unter dem Zwerchfell",
    ],
    1,
    "In den Lungenbläschen (Alveolen) erfolgt der Gasaustausch (O2 aufnehmen, CO2 abgeben).",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-16-041",
    "bio-kap4",
    "Was ist ein Genom?",
    [
      "Ein einzelnes Gen",
      "Die Gesamtheit der Erbinformation eines Organismus",
      "Ein Chromosom",
      "Nur codierende DNA",
      "Ein Protein",
    ],
    1,
    "Das Genom umfasst die gesamte DNA eines Organismus.",
    "leicht",
    ["Genetik", "Genom"]
  ),
  q(
    "bio-pool-16-042",
    "bio-kap5",
    "Was ist eine Art (biologischer Artbegriff)?",
    [
      "Alle Lebewesen",
      "Gruppe von Individuen, die sich fortpflanzen können und fertile Nachkommen haben",
      "Eine Gattung",
      "Eine Familie",
      "Eine Population",
    ],
    1,
    "Biologischer Artbegriff: Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen.",
    "leicht",
    ["Ökologie", "Art"]
  ),
  q(
    "bio-pool-16-043",
    "bio-kap1",
    "Wo findet der Citratzyklus statt?",
    ["Zytosol", "Mitochondrienmatrix", "Zellkern", "Zellmembran", "Golgi-Apparat"],
    1,
    "Der Citratzyklus läuft in der Matrix der Mitochondrien ab.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-16-044",
    "bio-kap2",
    "Welcher Teil des Dünndarms folgt auf das Duodenum?",
    ["Ileum", "Jejunum", "Colon", "Zökum", "Rektum"],
    1,
    "Reihenfolge: Duodenum → Jejunum → Ileum.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-16-045",
    "bio-kap4",
    "Was ist eine Deletion?",
    [
      "Verdopplung",
      "Verlust eines DNA-Abschnitts",
      "Einbau einer Base",
      "Umlagerung ohne Verlust",
      "Punktmutation",
    ],
    1,
    "Bei einer Deletion geht ein Stück DNA verloren.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-16-046",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Nieren?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Nieren entstehen aus dem Mesoderm (intermediäres Mesoderm).",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-16-047",
    "bio-kap5",
    "Welche Aussage zu T-Helferzellen trifft zu?",
    [
      "Sie produzieren Antikörper",
      "Sie erkennen Antigene über MHC-II und unterstützen andere Immunzellen",
      "Sie töten nur Bakterien direkt",
      "Sie gehören zur unspezifischen Abwehr",
      "Sie reifen in der Milz",
    ],
    1,
    "T-Helferzellen (CD4+) erkennen Antigene auf MHC-II und unterstützen B-Zellen und andere.",
    "mittel",
    ["Immunologie", "T-Helferzellen"]
  ),
  q(
    "bio-pool-16-048",
    "bio-kap1",
    "Welche Aussage über NADH trifft zu?",
    [
      "Es ist ein Strukturprotein",
      "Es ist ein Coenzym, das Elektronen überträgt",
      "Es kommt nur in der DNA vor",
      "Es ist ein Hormon",
      "Nur bei Fotosynthese",
    ],
    1,
    "NADH überträgt Elektronen in der Atmungskette; dabei wird ATP gebildet.",
    "mittel",
    ["Stoffwechsel", "Coenzyme"]
  ),
  q(
    "bio-pool-16-049",
    "bio-kap2",
    "Wo wird Parathormon gebildet?",
    ["Calcitonin-Schilddrüse", "Nebenschilddrüse", "T3/T4", "Cortisol", "Insulin"],
    1,
    "Parathormon (PTH) aus den Nebenschilddrüsen erhöht den Calciumspiegel.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-16-050",
    "bio-kap4",
    "Was ist ein Karyotyp?",
    [
      "Ein Gen",
      "Die Darstellung der Chromosomen einer Zelle",
      "Ein Phänotyp",
      "Eine Mutation",
      "Ein Protein",
    ],
    1,
    "Der Karyotyp zeigt Anzahl und Form der Chromosomen einer Zelle.",
    "mittel",
    ["Genetik", "Karyotyp"]
  ),
  q(
    "bio-pool-16-051",
    "bio-kap5",
    "Was ist ein ökologisches Gleichgewicht?",
    [
      "Keine Wechselwirkungen",
      "Dynamisches Gleichgewicht mit Schwankungen",
      "Keine Artenvielfalt",
      "Nur abiotische Faktoren",
      "Statisches System",
    ],
    1,
    "Ökosysteme sind dynamisch; Gleichgewicht bedeutet stabile Schwankungen.",
    "mittel",
    ["Ökologie", "Gleichgewicht"]
  ),
  q(
    "bio-pool-16-052",
    "bio-kap1",
    "Welches Organell ist für die Spindelbildung bei der Zellteilung wichtig?",
    ["Lysosom", "Centrosom (Zentriol)", "Peroxisom", "Golgi-Apparat", "Ribosom"],
    1,
    "Centrosomen organisieren die Mikrotubuli der Teilungsspindel.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-16-053",
    "bio-kap2",
    "Welche Aussage über die Bauchspeicheldrüse trifft NICHT zu?",
    [
      "Sie produziert Verdauungsenzyme",
      "Sie produziert Insulin",
      "Sie liegt retroperitoneal",
      "Sie produziert Galle",
      "Sie hat Langerhans-Inseln",
    ],
    3,
    "Galle wird von der Leber produziert (D falsch).",
    "leicht",
    ["Bauchspeicheldrüse", "FALSCH"]
  ),
  q(
    "bio-pool-16-054",
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
    "In der Anaphase trennen sich die Schwesterchromatiden und wandern zu den Polen.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-16-055",
    "bio-kap3",
    "Was ist die Chorionhöhle?",
    [
      "Amnionhöhle",
      "Raum zwischen Trophoblast und Embryoblast in der frühen Blastozyste",
      "Gebärmutterhöhle",
      "Fruchtblase",
      "Plazenta",
    ],
    1,
    "Die Chorionhöhle liegt außerhalb des Embryos, zwischen Trophoblast und Amnion.",
    "schwer",
    ["Embryologie", "Chorion"]
  ),
  q(
    "bio-pool-16-056",
    "bio-kap5",
    "Was sind Zytokine?",
    [
      "Antikörper",
      "Signalmoleküle des Immunsystems (z. B. Interleukine)",
      "Nur Hormone",
      "Nur Enzyme",
      "Nur Toxine",
    ],
    1,
    "Zytokine steuern die Kommunikation zwischen Immunzellen.",
    "mittel",
    ["Immunologie", "Zytokine"]
  ),
  q(
    "bio-pool-16-057",
    "bio-kap1",
    "Welche Aussage über die Diffusion trifft zu?",
    [
      "Sie benötigt immer Energie",
      "Stoffe bewegen sich entlang dem Konzentrationsgefälle",
      "Sie betrifft nur große Moleküle",
      "Sie erfolgt nur durch Kanäle",
      "Nur in Flüssigkeiten",
    ],
    1,
    "Bei Diffusion bewegen sich Teilchen vom Ort höherer zum Ort geringerer Konzentration.",
    "leicht",
    ["Zellmembran", "Diffusion"]
  ),
  q(
    "bio-pool-16-058",
    "bio-kap2",
    "Welcher Muskel ist der Hauptatemmuskel?",
    ["Interkostalmuskeln", "Zwerchfell", "M. pectoralis", "M. scalenus", "Bauchmuskeln"],
    1,
    "Das Zwerchfell ist der wichtigste Inspirationsmuskel.",
    "leicht",
    ["Atmung", "Zwerchfell"]
  ),
  q(
    "bio-pool-16-059",
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
    "Bei polygener Vererbung wirken viele Gene und die Umwelt zusammen.",
    "mittel",
    ["Genetik", "polygen"]
  ),
  q(
    "bio-pool-16-060",
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
