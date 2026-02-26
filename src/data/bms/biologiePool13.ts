/**
 * Biologie BMS Pool 13 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool13: Question[] = [
  q(
    "bio-pool-13-001",
    "bio-kap1",
    "Welche Basenpaarung kommt in der DNA vor?",
    ["A-U und G-C", "A-T und G-C", "A-G und T-C", "nur A-T", "nur G-C"],
    1,
    "In der DNA: Adenin mit Thymin (A-T), Guanin mit Cytosin (G-C). In der RNA: A-U statt A-T.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-13-002",
    "bio-kap2",
    "Welcher Knochen ist der längste des menschlichen Körpers?",
    ["Tibia", "Femur", "Humerus", "Wirbelsäule", "Radius"],
    1,
    "Der Oberschenkelknochen (Femur) ist der längste und kräftigste Röhrenknochen.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-13-003",
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
    "Stopp-Codons (UAA, UAG, UGA) beenden die Translation; kein tRNA-Molekül bindet dafür.",
    "mittel",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-13-004",
    "bio-kap5",
    "Was sind Mastzellen?",
    [
      "Erythrozyten",
      "Zellen des Bindegewebes, die bei Aktivierung Histamin freisetzen",
      "T-Killerzellen",
      "Plasmazellen",
      "Thrombozyten",
    ],
    1,
    "Mastzellen speichern Histamin und andere Mediatoren; bei Allergenkontakt (IgE) setzen sie diese frei.",
    "mittel",
    ["Immunologie", "Mastzellen"]
  ),
  q(
    "bio-pool-13-005",
    "bio-kap1",
    "Welche Aussage über die Zellatmung trifft zu?",
    [
      "Sie findet nur in Pflanzen statt",
      "Sie verbraucht nur Zucker",
      "Sie liefert ATP durch Oxidation organischer Stoffe",
      "Sie produziert nur Laktat",
      "Sie benötigt kein Sauerstoff",
    ],
    2,
    "Zellatmung: organische Stoffe werden oxidiert, dabei wird ATP gebildet (Glykolyse, Citratzyklus, Atmungskette).",
    "leicht",
    ["Stoffwechsel", "Zellatmung"]
  ),
  q(
    "bio-pool-13-006",
    "bio-kap2",
    "Wo wird das antidiuretische Hormon (ADH) gebildet?",
    [
      "Nebenniere",
      "Hypophysenvorderlappen",
      "Hypothalamus (in Nervenzellen)",
      "Niere",
      "Schilddrüse",
    ],
    2,
    "ADH (Vasopressin) wird im Hypothalamus gebildet und im Hypophysenhinterlappen gespeichert; es fördert die Wasserresorption in der Niere.",
    "mittel",
    ["Hormone", "ADH"]
  ),
  q(
    "bio-pool-13-007",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose aus einer Ausgangszelle?",
    ["1", "2", "4", "8", "46"],
    2,
    "Meiose: 1 diploide Zelle → 4 haploide Tochterzellen (Gameten).",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-13-008",
    "bio-kap3",
    "Was ist die Gastrulation?",
    [
      "Die Befruchtung",
      "Die Einstülpung und Bildung der Keimblätter",
      "Die Implantation",
      "Die Organogenese",
      "Die Geburt",
    ],
    1,
    "Bei der Gastrulation entstehen durch Einstülpung die drei Keimblätter (Ektoderm, Mesoderm, Entoderm).",
    "mittel",
    ["Embryologie", "Gastrulation"]
  ),
  q(
    "bio-pool-13-009",
    "bio-kap2",
    "Welche Aussage über das Herz trifft NICHT zu?",
    [
      "Das Herz hat vier Kammern",
      "Das Herz pumpt Blut durch den Körper",
      "Das Herz produziert Hormone (z. B. ANP)",
      "Das Herz liegt vollständig links im Brustkorb",
      "Das Herz hat Klappen",
    ],
    3,
    "Das Herz liegt im Mediastinum, größtenteils links, aber nicht vollständig links (D falsch).",
    "leicht",
    ["Herz", "FALSCH"]
  ),
  q(
    "bio-pool-13-010",
    "bio-kap5",
    "Was ist die humorale Immunantwort?",
    [
      "Abwehr durch Zellen",
      "Abwehr durch lösliche Antikörper im Blut und in Gewebeflüssigkeit",
      "Nur unspezifische Abwehr",
      "Nur T-Zellen",
      "Nur Makrophagen",
    ],
    1,
    "Humoral = durch Antikörper (von B-Zellen/Plasmazellen) in Körperflüssigkeiten. Zellulär = durch T-Zellen.",
    "mittel",
    ["Immunologie", "humorale Abwehr"]
  ),
  q(
    "bio-pool-13-011",
    "bio-kap1",
    "Welches Organell enthält Chlorophyll und kommt in Pflanzen vor?",
    ["Mitochondrium", "Chloroplast", "Lysosom", "Peroxisom", "Golgi-Apparat"],
    1,
    "Chloroplasten enthalten Chlorophyll und sind der Ort der Fotosynthese in Pflanzen und Algen.",
    "leicht",
    ["Zelle", "Chloroplast"]
  ),
  q(
    "bio-pool-13-012",
    "bio-kap2",
    "Welcher Muskel streckt das Kniegelenk?",
    [
      "M. biceps femoris",
      "M. quadriceps femoris",
      "M. gastrocnemius",
      "M. sartorius",
      "M. gracilis",
    ],
    1,
    "Der M. quadriceps femoris (vierköpfiger Oberschenkelmuskel) streckt das Knie. Biceps femoris beugt.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-13-013",
    "bio-kap4",
    "Was ist ein diploider Chromosomensatz?",
    [
      "Ein einfacher Satz (n)",
      "Ein doppelter Satz (2n), je ein Chromosom von jedem Elternteil",
      "Nur in Keimzellen",
      "92 Chromosomen beim Menschen",
      "Nur bei Pflanzen",
    ],
    1,
    "Diploid (2n) = zwei Chromosomensätze (beim Menschen 46). Haploid (n) = ein Satz (23 in Keimzellen).",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-13-014",
    "bio-kap5",
    "Was versteht man unter „Konkurrenz“ in der Ökologie?",
    [
      "Nur Räuber-Beute",
      "Nutzung derselben begrenzten Ressource durch verschiedene Individuen/Arten",
      "Nur Symbiose",
      "Nur Parasitismus",
      "Nur zwischen Pflanzen",
    ],
    1,
    "Konkurrenz entsteht, wenn Individuen/Arten um dieselbe begrenzte Ressource konkurrieren (Nahrung, Raum, Licht).",
    "leicht",
    ["Ökologie", "Konkurrenz"]
  ),
  q(
    "bio-pool-13-015",
    "bio-kap1",
    "Welche Aussage über ATP trifft zu?",
    [
      "ATP ist ein Speicher für Erbinformation",
      "ATP ist der universelle Energieträger der Zelle",
      "ATP kommt nur in Mitochondrien vor",
      "ATP wird nur bei der Fotosynthese gebildet",
      "ATP enthält keine Phosphatgruppen",
    ],
    1,
    "ATP (Adenosintriphosphat) speichert und liefert Energie durch Abspaltung von Phosphat.",
    "leicht",
    ["Stoffwechsel", "ATP"]
  ),
  q(
    "bio-pool-13-016",
    "bio-kap2",
    "Welches Hormon stimuliert die Eierstockreifung bei der Frau?",
    ["Prolactin", "FSH", "Oxytocin", "LH nur ohne FSH", "Cortisol"],
    1,
    "FSH (follikelstimulierendes Hormon) aus dem Hypophysenvorderlappen stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-13-017",
    "bio-kap4",
    "Was ist die Mitose?",
    [
      "Teilung zur Bildung von Keimzellen",
      "Teilung von Körperzellen mit Erhalt des Chromosomensatzes",
      "Nur eine Phase",
      "Reduktion der Chromosomenzahl",
      "Nur in Keimzellen",
    ],
    1,
    "Mitose: eine Zelle teilt sich in zwei genetisch gleiche Tochterzellen mit gleichem Chromosomensatz.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-13-018",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Darmschleimhaut?",
    ["Ektoderm", "Mesoderm", "Entoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Entoderm → Epithel von Verdauungstrakt (außer Mund/Anus), Leber, Bauchspeicheldrüse, Atemwege.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-13-019",
    "bio-kap5",
    "Was ist ein Parasit?",
    [
      "Ein Räuber",
      "Ein Organismus, der auf Kosten eines Wirts lebt und ihn schädigt",
      "Ein Zersetzer",
      "Ein Produzent",
      "Ein Symbiont",
    ],
    1,
    "Parasiten leben in oder auf einem Wirt und schädigen ihn (z. B. Bandwurm, Malariaerreger).",
    "leicht",
    ["Ökologie", "Parasitismus"]
  ),
  q(
    "bio-pool-13-020",
    "bio-kap2",
    "Welche Struktur trennt Brust- und Bauchhöhle?",
    ["Peritoneum", "Zwerchfell", "Pleura", "Perikard", "Dura mater"],
    1,
    "Das Zwerchfell ist der wichtigste Atemmuskel und trennt Thorax und Abdomen.",
    "leicht",
    ["Anatomie", "Zwerchfell"]
  ),
  q(
    "bio-pool-13-021",
    "bio-kap1",
    "Welche Aussage über Osmose trifft zu?",
    [
      "Wasser diffundiert von geringerer zu höherer Konzentration gelöster Stoffe",
      "Nur Ionen wandern",
      "Es gibt keinen Wasseraustausch",
      "Osmose betrifft nur Gase",
      "Osmose benötigt ATP",
    ],
    0,
    "Bei Osmose diffundiert Wasser durch eine semipermeable Membran in Richtung der höheren Konzentration gelöster Stoffe.",
    "mittel",
    ["Zellmembran", "Osmose"]
  ),
  q(
    "bio-pool-13-022",
    "bio-kap2",
    "Welcher Nerv leitet Signale vom Auge zum Gehirn?",
    ["N. opticus", "N. oculomotorius", "N. trigeminus", "N. facialis", "N. vestibulocochlearis"],
    0,
    "Der Sehnerv (N. opticus) leitet die visuellen Informationen von der Netzhaut zum Gehirn.",
    "leicht",
    ["Auge", "Nerven"]
  ),
  q(
    "bio-pool-13-023",
    "bio-kap4",
    "Was ist ein autosomal-dominanter Erbgang?",
    [
      "Nur Frauen betroffen",
      "Das Merkmal tritt auf, wenn mindestens ein betroffenes Allel vorliegt",
      "Nur Männer betroffen",
      "Immer rezessiv",
      "Nur auf dem X-Chromosom",
    ],
    1,
    "Autosomal-dominant: ein betroffenes Allel reicht für den Phänotyp (z. B. Huntington).",
    "mittel",
    ["Vererbung", "dominant"]
  ),
  q(
    "bio-pool-13-024",
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
    "Energie wird nicht recycelt; sie fließt ein und geht als Wärme verloren (D falsch).",
    "mittel",
    ["Ökologie", "FALSCH"]
  ),
  q(
    "bio-pool-13-025",
    "bio-kap1",
    "Welches Organell ist von einer Doppelmembran umgeben und enthält eigene DNA?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Golgi-Apparat", "Peroxisom"],
    2,
    "Mitochondrien (und Chloroplasten) haben Doppelmembran und eigene DNA (Endosymbiontentheorie).",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-13-026",
    "bio-kap2",
    "Wo wird das Hormon Progesteron gebildet?",
    [
      "Hypophyse",
      "Eierstock (Corpus luteum) und Plazenta",
      "Nebenniere nur",
      "Schilddrüse",
      "Bauchspeicheldrüse",
    ],
    1,
    "Progesteron wird im Gelbkörper (Corpus luteum) und in der Plazenta gebildet; es erhält die Schwangerschaft.",
    "mittel",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-13-027",
    "bio-kap4",
    "Was ist die Translation?",
    [
      "Kopieren der DNA",
      "Übersetzung von mRNA in Protein an den Ribosomen",
      "Replikation",
      "Spleißen",
      "Transkription",
    ],
    1,
    "Translation = Übersetzung der mRNA in eine Aminosäuresequenz (Protein) an den Ribosomen.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-13-028",
    "bio-kap3",
    "Wann spricht man vom Fetus?",
    [
      "Ab der Befruchtung",
      "Ab der 8. Entwicklungswoche",
      "Ab der Implantation",
      "Ab der Gastrulation",
      "Ab der Geburt",
    ],
    1,
    "Nach der Organogenese (ab etwa 8. Woche) wird der Embryo als Fetus bezeichnet.",
    "leicht",
    ["Embryologie", "Fetus"]
  ),
  q(
    "bio-pool-13-029",
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
    "Plasmazellen sind aus B-Lymphozyten entstanden und produzieren große Mengen spezifischer Antikörper.",
    "mittel",
    ["Immunologie", "Plasmazellen"]
  ),
  q(
    "bio-pool-13-030",
    "bio-kap1",
    "Welche Aussage über aktiven Transport trifft zu?",
    [
      "Er erfolgt nur entlang dem Konzentrationsgefälle",
      "Er benötigt Energie (z. B. ATP)",
      "Er betrifft nur Wasser",
      "Es gibt keinen aktiven Transport bei Zellen",
      "Er erfolgt nur bei Pflanzen",
    ],
    1,
    "Beim aktiven Transport werden Stoffe gegen das Konzentrationsgefälle unter Energieverbrauch transportiert.",
    "mittel",
    ["Zellmembran", "Transport"]
  ),
  q(
    "bio-pool-13-031",
    "bio-kap2",
    "Welcher Knochen bildet die Basis des Schädels?",
    ["Stirnbein", "Occipitalbein", "Scheitelbein", "Jochbein", "Nasenbein"],
    1,
    "Das Hinterhauptsbein (Os occipitale) bildet die Schädelbasis und enthält das Foramen magnum.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-13-032",
    "bio-kap4",
    "Was ist ein rezessives Allel?",
    [
      "Es kommt nur bei Männern vor",
      "Es kommt nur bei Frauen vor",
      "Es prägt sich nur aus, wenn homozygot vorliegend",
      "Es dominiert immer",
      "Es liegt nur auf dem Y-Chromosom",
    ],
    2,
    "Rezessiv: Das Merkmal tritt nur auf, wenn beide Allele rezessiv sind (z. B. aa).",
    "leicht",
    ["Genetik", "rezessiv"]
  ),
  q(
    "bio-pool-13-033",
    "bio-kap5",
    "Was ist ein Herbivor?",
    ["Räuber", "Pflanzenfresser", "Zersetzer", "Produzent", "Parasit"],
    1,
    "Herbivoren (Pflanzenfresser) ernähren sich von Pflanzen. Prädatoren = Räuber.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-13-034",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft NICHT zu?",
    [
      "Sie besteht aus einer Lipiddoppelschicht",
      "Sie enthält Proteine",
      "Sie ist semipermeabel",
      "Sie umgibt nur den Zellkern",
      "Sie kann Rezeptoren tragen",
    ],
    3,
    "Die Zellmembran umgibt die gesamte Zelle, nicht nur den Zellkern (D falsch).",
    "leicht",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-pool-13-035",
    "bio-kap2",
    "Welches Organ produziert Amylase für die Kohlenhydratverdauung?",
    [
      "Nur Magen",
      "Speicheldrüsen und Bauchspeicheldrüse",
      "Nur Leber",
      "Nur Dünndarm",
      "Gallenblase",
    ],
    1,
    "Amylase (Spaltung von Stärke) wird in Speicheldrüsen und in der Bauchspeicheldrüse gebildet.",
    "mittel",
    ["Verdauung", "Enzyme"]
  ),
  q(
    "bio-pool-13-036",
    "bio-kap4",
    "In welcher Phase der Meiose findet das Crossing-over statt?",
    ["Metaphase I", "Prophase I", "Anaphase I", "Telophase I", "Metaphase II"],
    1,
    "Crossing-over erfolgt in der Prophase I der Meiose zwischen homologen Chromosomen.",
    "mittel",
    ["Meiose", "Crossing-over"]
  ),
  q(
    "bio-pool-13-037",
    "bio-kap3",
    "Was ist die Nabelschnur?",
    [
      "Teil der Plazenta",
      "Verbindung zwischen Fetus und Plazenta mit Blutgefäßen",
      "Die Fruchtblase",
      "Der Dottersack",
      "Die Amnionhöhle",
    ],
    1,
    "Die Nabelschnur enthält Nabelvene und Nabelarterien und verbindet den Fetus mit der Plazenta.",
    "leicht",
    ["Embryologie", "Nabelschnur"]
  ),
  q(
    "bio-pool-13-038",
    "bio-kap5",
    "Was versteht man unter „angeborener Immunität“?",
    [
      "Nur Antikörper",
      "Unspezifische, angeborene Abwehrmechanismen (Barrieren, Phagozyten, NK-Zellen)",
      "Nur T-Zellen",
      "Nur nach Impfung",
      "Nur erworbene Abwehr",
    ],
    1,
    "Angeborene Abwehr: Haut, Schleimhäute, Phagozyten, NK-Zellen, Komplement – unspezifisch und sofort wirksam.",
    "mittel",
    ["Immunologie", "angeborene Abwehr"]
  ),
  q(
    "bio-pool-13-039",
    "bio-kap1",
    "Welches Vitamin wird für die Blutbildung (Erythropoese) benötigt?",
    ["Vitamin A", "Vitamin B12 und Folsäure", "Vitamin C", "Vitamin D", "Vitamin K"],
    1,
    "Vitamin B12 und Folsäure sind für die DNA-Synthese und damit für die Bildung roter Blutkörperchen nötig.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-13-040",
    "bio-kap2",
    "Welche Aussage über die Lunge trifft zu?",
    [
      "Sie hat nur einen Lappen rechts",
      "Der Gasaustausch findet in den Alveolen statt",
      "Sie produziert Surfactant nur in der Pleura",
      "Die Bronchien haben keine Knorpelspangen",
      "Sie liegt unter dem Zwerchfell",
    ],
    1,
    "In den Lungenbläschen (Alveolen) erfolgt der Gasaustausch (O2 aufnehmen, CO2 abgeben).",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-13-041",
    "bio-kap4",
    "Was ist ein Genom?",
    [
      "Ein einzelnes Gen",
      "Die Gesamtheit der Erbinformation eines Organismus",
      "Ein Chromosom",
      "Nur die codierende DNA",
      "Ein Protein",
    ],
    1,
    "Das Genom umfasst die gesamte DNA eines Organismus (alle Gene und nichtcodierende Bereiche).",
    "leicht",
    ["Genetik", "Genom"]
  ),
  q(
    "bio-pool-13-042",
    "bio-kap5",
    "Was ist eine Art (biologischer Artbegriff)?",
    [
      "Alle Lebewesen",
      "Gruppe von Individuen, die sich untereinander fortpflanzen können und fertile Nachkommen haben",
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
    "bio-pool-13-043",
    "bio-kap1",
    "Wo findet der Citratzyklus statt?",
    [
      "Im Zytosol",
      "In der Mitochondrienmatrix",
      "Im Zellkern",
      "An der Zellmembran",
      "Am Golgi-Apparat",
    ],
    1,
    "Der Citratzyklus (Krebszyklus) läuft in der Matrix der Mitochondrien ab.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-13-044",
    "bio-kap2",
    "Welcher Teil des Dünndarms folgt auf das Duodenum?",
    ["Ileum", "Jejunum", "Colon", "Zökum", "Rektum"],
    1,
    "Reihenfolge: Duodenum → Jejunum → Ileum. Dann Dickdarm (Colon).",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-13-045",
    "bio-kap4",
    "Was ist eine Deletion?",
    [
      "Verdopplung eines Abschnitts",
      "Verlust eines DNA-Abschnitts",
      "Einbau einer Base",
      "Umlagerung ohne Verlust",
      "Punktmutation",
    ],
    1,
    "Bei einer Deletion geht ein Stück DNA verloren. Kann zu Verschiebung des Leserasters führen.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-13-046",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Nieren?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Aus dem Amnion"],
    2,
    "Nieren und ableitende Harnwege entstehen aus dem Mesoderm (intermediäres Mesoderm).",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-13-047",
    "bio-kap5",
    "Welche Aussage zu T-Helferzellen trifft zu?",
    [
      "Sie produzieren Antikörper",
      "Sie erkennen Antigene über MHC-II und unterstützen B-Zellen und andere Immunzellen",
      "Sie töten nur Bakterien direkt",
      "Sie gehören zur unspezifischen Abwehr",
      "Sie reifen in der Milz",
    ],
    1,
    "T-Helferzellen (CD4+) erkennen Antigene auf MHC-II und unterstützen B-Zellen, Makrophagen und zytotoxische T-Zellen.",
    "mittel",
    ["Immunologie", "T-Helferzellen"]
  ),
  q(
    "bio-pool-13-048",
    "bio-kap1",
    "Welche Aussage über NADH trifft zu?",
    [
      "Es ist ein Strukturprotein",
      "Es ist ein Coenzym, das Elektronen überträgt",
      "Es kommt nur in der DNA vor",
      "Es ist ein Hormon",
      "Es wird nur bei der Fotosynthese gebildet",
    ],
    1,
    "NADH (und FADH2) übertragen Elektronen in der Atmungskette; dabei wird ATP gebildet.",
    "mittel",
    ["Stoffwechsel", "Coenzyme"]
  ),
  q(
    "bio-pool-13-049",
    "bio-kap2",
    "Welches Hormon wird in der Nebenschilddrüse gebildet?",
    ["Calcitonin", "Parathormon", "T3", "Cortisol", "Insulin"],
    1,
    "Parathormon (PTH) aus den Nebenschilddrüsen erhöht den Calciumspiegel im Blut. Calcitonin (Schilddrüse) senkt ihn.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-13-050",
    "bio-kap4",
    "Was ist ein Karyotyp?",
    [
      "Ein Gen",
      "Die Darstellung der Chromosomen einer Zelle (Anzahl und Form)",
      "Ein Phänotyp",
      "Eine Mutation",
      "Ein Protein",
    ],
    1,
    "Der Karyotyp zeigt die Chromosomen einer Zelle (Anzahl, Größe, Bandenmuster) – z. B. zur Diagnostik.",
    "mittel",
    ["Genetik", "Karyotyp"]
  ),
  q(
    "bio-pool-13-051",
    "bio-kap5",
    "Was ist ein Ökologisches Gleichgewicht?",
    [
      "Keine Wechselwirkungen",
      "Dynamisches Gleichgewicht mit Schwankungen",
      "Keine Artenvielfalt",
      "Nur abiotische Faktoren",
      "Statisches System",
    ],
    1,
    "Ökosysteme sind dynamisch; Gleichgewicht bedeutet stabile Schwankungen um einen Mittelwert, nicht Starre.",
    "mittel",
    ["Ökologie", "Gleichgewicht"]
  ),
  q(
    "bio-pool-13-052",
    "bio-kap1",
    "Welches Organell ist für die Zellteilung (Spindelbildung) wichtig?",
    ["Lysosom", "Centrosom (Zentriol)", "Peroxisom", "Golgi-Apparat", "Ribosom"],
    1,
    "Centrosomen (mit Zentriolen) organisieren die Mikrotubuli der Teilungsspindel bei Mitose und Meiose.",
    "mittel",
    ["Zelle", "Zellteilung"]
  ),
  q(
    "bio-pool-13-053",
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
    "Galle wird von der Leber produziert, nicht von der Bauchspeicheldrüse (D falsch).",
    "leicht",
    ["Bauchspeicheldrüse", "FALSCH"]
  ),
  q(
    "bio-pool-13-054",
    "bio-kap4",
    "Was ist die Anaphase der Mitose?",
    [
      "Chromosomen kondensieren",
      "Chromosomen ordnen sich an",
      "Schwesterchromatiden trennen sich und wandern zu den Polen",
      "Kernmembran bildet sich",
      "Zellmembran teilt sich",
    ],
    2,
    "In der Anaphase trennen sich die Schwesterchromatiden und werden zu den Spindelpolen gezogen.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-13-055",
    "bio-kap3",
    "Was ist die Chorionhöhle?",
    [
      "Die Amnionhöhle",
      "Der Raum zwischen Trophoblast und Embryoblast in der frühen Blastozyste",
      "Die Gebärmutterhöhle",
      "Die Fruchtblase",
      "Die Plazenta",
    ],
    1,
    "Die Chorionhöhle (extraembryonales Zölom) liegt außerhalb des Embryos, zwischen Trophoblast und Amnion.",
    "schwer",
    ["Embryologie", "Chorion"]
  ),
  q(
    "bio-pool-13-056",
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
    "Zytokine (z. B. Interleukine, Interferone) steuern die Kommunikation zwischen Immunzellen.",
    "mittel",
    ["Immunologie", "Zytokine"]
  ),
  q(
    "bio-pool-13-057",
    "bio-kap1",
    "Welche Aussage über die Diffusion trifft zu?",
    [
      "Sie benötigt immer Energie",
      "Stoffe bewegen sich entlang dem Konzentrationsgefälle",
      "Sie betrifft nur große Moleküle",
      "Sie erfolgt nur durch Kanäle",
      "Sie gibt es nur in Flüssigkeiten",
    ],
    1,
    "Bei Diffusion bewegen sich Teilchen vom Ort höherer zum Ort geringerer Konzentration (passiv).",
    "leicht",
    ["Zellmembran", "Diffusion"]
  ),
  q(
    "bio-pool-13-058",
    "bio-kap2",
    "Welcher Muskel ist der Hauptatemmuskel?",
    ["Interkostalmuskeln", "Zwerchfell", "M. pectoralis", "M. scalenus", "Bauchmuskeln"],
    1,
    "Das Zwerchfell ist der wichtigste Inspirationsmuskel; bei Kontraktion vergrößert sich der Thorax.",
    "leicht",
    ["Atmung", "Zwerchfell"]
  ),
  q(
    "bio-pool-13-059",
    "bio-kap4",
    "Was ist ein polygener Erbgang?",
    [
      "Nur ein Gen beteiligt",
      "Mehrere Gene und oft Umweltfaktoren beeinflussen ein Merkmal",
      "Nur auf dem X-Chromosom",
      "Nur rezessiv",
      "Nur dominant",
    ],
    1,
    "Bei polygener Vererbung (z. B. Körpergröße, Hautfarbe) wirken viele Gene und die Umwelt zusammen.",
    "mittel",
    ["Genetik", "polygen"]
  ),
  q(
    "bio-pool-13-060",
    "bio-kap5",
    "Was ist ein Konsument in einem Ökosystem?",
    [
      "Ein Produzent",
      "Ein Organismus, der organische Substanz von anderen aufnimmt (Pflanzenfresser, Räuber etc.)",
      "Ein Zersetzer nur",
      "Ein Pilz nur",
      "Eine Pflanze",
    ],
    1,
    "Konsumenten ernähren sich von anderen Organismen (Herbivoren, Karnivoren, Omnivoren).",
    "leicht",
    ["Ökologie", "Konsument"]
  ),
];
