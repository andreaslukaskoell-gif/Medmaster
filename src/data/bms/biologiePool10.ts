/**
 * Biologie BMS Pool 10 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
 * Stoff: Kap1–Kap5 (Zelle, Gewebe, Anatomie/Physiologie, Genetik, Ökologie/Immunologie).
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

const CHAPTERS = ["bio-kap1", "bio-kap2", "bio-kap3", "bio-kap4", "bio-kap5"] as const;

export const biologiePool10: Question[] = [
  q(
    "bio-pool-10-001",
    "bio-kap1",
    "In welchem Zellkompartiment findet die Glykolyse statt?",
    ["Mitochondrienmatrix", "Innere Mitochondrienmembran", "Zytosol", "Zellkern", "Rough ER"],
    2,
    "Die Glykolyse läuft im Zytosol ab. Der Citratzyklus in der Mitochondrienmatrix, die Atmungskette an der inneren Mitochondrienmembran.",
    "leicht",
    ["Glykolyse", "Zelle"]
  ),
  q(
    "bio-pool-10-002",
    "bio-kap2",
    "Welches Vitamin ist für die Blutgerinnung wichtig und wird in der Leber für die Synthese von Gerinnungsfaktoren benötigt?",
    ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"],
    3,
    "Vitamin K ist fettlöslich und notwendig für die Synthese von Gerinnungsfaktoren (z. B. Prothrombin) in der Leber.",
    "mittel",
    ["Blut", "Vitamine"]
  ),
  q(
    "bio-pool-10-003",
    "bio-kap4",
    "Bei der Meiose entstehen aus einer diploiden Ausgangszelle:",
    [
      "zwei diploide Tochterzellen",
      "vier haploide Tochterzellen",
      "zwei haploide Tochterzellen",
      "eine diploide und eine haploide Zelle",
      "vier diploide Tochterzellen",
    ],
    1,
    "Meiose: 1 diploide Zelle → 4 haploide Zellen (Gameten). Mitose: 1 diploide → 2 diploide.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-10-004",
    "bio-kap2",
    "Wo wird das Hormon Cortisol gebildet?",
    ["Schilddrüse", "Hypophyse", "Nebennierenrinde", "Nebennierenmark", "Bauchspeicheldrüse"],
    2,
    "Cortisol wird in der Nebennierenrinde gebildet (Glukokortikoide). Adrenalin/Noradrenalin im Nebennierenmark.",
    "leicht",
    ["Hormone", "Nebenniere"]
  ),
  q(
    "bio-pool-10-005",
    "bio-kap5",
    "Welche Zellen sind Teil der spezifischen Immunabwehr und können Antikörper bilden?",
    ["Erythrozyten", "Thrombozyten", "B-Lymphozyten", "Eosinophile Granulozyten", "Mastzellen"],
    2,
    "B-Lymphozyten werden nach Antigenkontakt zu Plasmazellen und produzieren Antikörper (spezifische humorale Abwehr).",
    "mittel",
    ["Immunologie", "Blut"]
  ),
  q(
    "bio-pool-10-006",
    "bio-kap1",
    "Welche Base paart in der DNA mit Cytosin?",
    ["Adenin", "Thymin", "Guanin", "Uracil", "Keine – Cytosin paart nicht"],
    2,
    "In der DNA: A–T, G–C. In der RNA: A–U, G–C. Cytosin paart immer mit Guanin.",
    "leicht",
    ["DNA", "Basenpaarung"]
  ),
  q(
    "bio-pool-10-007",
    "bio-kap2",
    "Der Ductus choledochus mündet in:",
    ["den Magen", "das Duodenum (Zwölffingerdarm)", "das Jejunum", "den Dickdarm", "die Leber"],
    1,
    "Der Ductus choledochus (Hauptgallengang) mündet gemeinsam mit dem Pankreasgang in die Papilla duodeni des Duodenums.",
    "mittel",
    ["Verdauung", "Galle"]
  ),
  q(
    "bio-pool-10-008",
    "bio-kap2",
    "Welche Herzklappe liegt zwischen linkem Vorhof und linker Kammer?",
    [
      "Trikuspidalklappe",
      "Pulmonalklappe",
      "Aortenklappe",
      "Mitralklappe (Bikuspidalklappe)",
      "Vena-cava-Klappe",
    ],
    3,
    "Mitralklappe (Bikuspidalklappe) zwischen linkem Vorhof und linker Kammer. Trikuspidal zwischen rechtem Vorhof und rechter Kammer.",
    "leicht",
    ["Herz", "Anatomie"]
  ),
  q(
    "bio-pool-10-009",
    "bio-kap3",
    "Aus welchem Keimblatt entwickelt sich das Nervensystem?",
    ["Entoderm", "Mesoderm", "Ektoderm", "Aus allen drei", "Aus dem Dotter"],
    2,
    "Ektoderm → u. a. Epidermis, Nervensystem. Mesoderm → Muskeln, Skelett, Kreislauf. Entoderm → Darmschleimhaut, Leber, Pankreas.",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-10-010",
    "bio-kap4",
    "Ein Erbgang, bei dem heterozygote Merkmalsträger phänotypisch zwischen den homozygoten Formen liegen, heißt:",
    [
      "dominant-rezessiv",
      "intermediär (kodominant bei Ausprägung)",
      "X-chromosomal",
      "polygen",
      "mitochondrial",
    ],
    1,
    "Bei intermediärer Vererbung zeigt der Heterozygote einen Mischphänotyp (z. B. Blütenfarbe bei Mirabilis). Dominant-rezessiv: Heterozygote wie Dominante.",
    "mittel",
    ["Vererbung", "Genetik"]
  ),
  q(
    "bio-pool-10-011",
    "bio-kap2",
    "In welchem Abschnitt des Dünndarms wird vor allem Vitamin B12 resorbiert?",
    ["Duodenum", "Jejunum", "Ileum", "Zökum", "Colon"],
    2,
    "Vitamin B12 wird im terminalen Ileum resorbiert; dafür ist der Intrinsic Factor (aus dem Magen) nötig.",
    "mittel",
    ["Verdauung", "Vitamine"]
  ),
  q(
    "bio-pool-10-012",
    "bio-kap1",
    "Welches Organell ist der Hauptort der Proteinbiosynthese (Translation)?",
    ["Zellkern", "Golgi-Apparat", "Ribosom", "Lysosom", "Peroxisom"],
    2,
    "An den Ribosomen wird die mRNA in die Aminosäuresequenz übersetzt (Translation). Transkription im Zellkern.",
    "leicht",
    ["Zelle", "Proteinbiosynthese"]
  ),
  q(
    "bio-pool-10-013",
    "bio-kap5",
    "Was versteht man unter der „ökologischen Amplitude“ einer Art?",
    [
      "Die maximale Körpergröße der Art",
      "Der Toleranzbereich gegenüber einem Umweltfaktor",
      "Die Anzahl der Nachkommen pro Generation",
      "Die geografische Verbreitung",
      "Die Nahrungsbreite",
    ],
    1,
    "Die ökologische Amplitude ist der Toleranzbereich einer Art gegenüber einem Umweltfaktor (z. B. Temperatur, pH).",
    "mittel",
    ["Ökologie"]
  ),
  q(
    "bio-pool-10-014",
    "bio-kap2",
    "Welcher Muskeltyp ist willkürlich steuerbar?",
    [
      "Glatte Muskulatur",
      "Herzmuskulatur",
      "Skelettmuskulatur",
      "Alle genannten",
      "Keiner der genannten",
    ],
    2,
    "Nur die Skelettmuskulatur ist willkürlich (somatomotorisch) steuerbar. Glatte und Herzmuskulatur werden vegetativ gesteuert.",
    "leicht",
    ["Muskulatur"]
  ),
  q(
    "bio-pool-10-015",
    "bio-kap4",
    "Was passiert beim Crossing-over?",
    [
      "Trennung der Schwesterchromatiden",
      "Austausch von Chromosomenabschnitten zwischen homologen Chromosomen",
      "Verdopplung der DNA",
      "Kondensation der Chromosomen",
      "Anordnung der Chromosomen in der Äquatorialebene",
    ],
    1,
    "Crossing-over erfolgt in der Prophase I der Meiose: Austausch von Abschnitten zwischen homologen Chromosomen → Rekombination.",
    "mittel",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-10-016",
    "bio-kap2",
    "Die Nebenschilddrüsen bilden ein Hormon, das den Calciumspiegel im Blut erhöht. Wie heißt es?",
    ["Calcitonin", "Parathormon", "Insulin", "Thyroxin", "Aldosteron"],
    1,
    "Parathormon (PTH) aus den Nebenschilddrüsen erhöht den Blutcalciumspiegel. Calcitonin (Schilddrüse) senkt ihn.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-10-017",
    "bio-kap1",
    "Welche Zellorganelle enthält eigene DNA?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Peroxisom", "Golgi-Apparat"],
    2,
    "Mitochondrien (und Chloroplasten bei Pflanzen) haben eigene ringförmige DNA – Endosymbiontentheorie.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-10-018",
    "bio-kap5",
    "Welcher Abwehrmechanismus ist unspezifisch?",
    [
      "Antikörperbildung",
      "Gedächtniszellen",
      "Phagozytose durch Makrophagen",
      "T-Killer-Zellen",
      "Plasmazellen",
    ],
    2,
    "Phagozytose (Makrophagen, neutrophile Granulozyten) gehört zur unspezifischen Abwehr. Antikörper und T-Zellen zur spezifischen.",
    "leicht",
    ["Immunologie"]
  ),
  q(
    "bio-pool-10-019",
    "bio-kap2",
    "Wo wird das Hormon Östrogen beim Menschen hauptsächlich gebildet?",
    ["Hypophyse", "Nebenniere", "Ovarien", "Hoden", "Schilddrüse"],
    2,
    "Östrogene werden vor allem in den Ovarien (Follikel, Gelbkörper) gebildet. Testosteron in den Hoden.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-10-020",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Keimzelle (Spermium oder Eizelle)?",
    ["23", "46", "92", "22", "44"],
    0,
    "Keimzellen sind haploid: 23 Chromosomen. Körperzellen sind diploid: 46 Chromosomen.",
    "leicht",
    ["Genetik", "Meiose"]
  ),
  q(
    "bio-pool-10-021",
    "bio-kap2",
    "Welche der folgenden Aussagen über die Niere ist FALSCH?",
    [
      "Die Niere filtert das Blut und bildet Urin",
      "Die funktionelle Einheit der Niere ist das Nephron",
      "Die Niere produziert das Hormon Erythropoetin",
      "Die Niere liegt vollständig innerhalb der Bauchhöhle im Retroperitonealraum",
      "Die Niere ist an der Regulation des Blutdrucks beteiligt (Renin-Angiotensin-Aldosteron-System)",
    ],
    3,
    "Die Nieren liegen retroperitoneal (hinter dem Bauchfell), also nicht „vollständig innerhalb der Bauchhöhle“ – sie sind außerhalb des Peritonealraums (D falsch).",
    "mittel",
    ["Niere", "FALSCH"]
  ),
  q(
    "bio-pool-10-022",
    "bio-kap1",
    "Welcher Prozess liefert die meiste ATP pro Glukosemolekül?",
    [
      "Glykolyse",
      "Citratzyklus",
      "Oxidative Phosphorylierung (Atmungskette)",
      "Gärung",
      "Gluconeogenese",
    ],
    2,
    "Die oxidative Phosphorylierung liefert mit Abstand die meisten ATP (ca. 28–34 aus einem Glukosemolekül). Glykolyse allein nur 2 ATP netto.",
    "mittel",
    ["Stoffwechsel", "ATP"]
  ),
  q(
    "bio-pool-10-023",
    "bio-kap5",
    "In einer Nahrungskette stehen die Konsumenten:",
    [
      "vor den Produzenten",
      "auf der gleichen Stufe wie die Destenten",
      "nach den Produzenten und ernähren sich von diesen oder anderen Konsumenten",
      "nur am Ende der Kette",
      "nur von abgestorbenem Material",
    ],
    2,
    "Produzenten (z. B. Pflanzen) → Konsumenten 1. Ordnung (Pflanzenfresser) → Konsumenten 2. Ordnung (Fleischfresser) usw.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-10-024",
    "bio-kap2",
    "Welcher Schließmuskel trennt den Magen vom Duodenum?",
    ["Pylorus", "Cardia", "Ileozäkalklappe", "Ösophagussphinkter", "Analsphinkter"],
    0,
    "Der Pylorus (Magenpförtner) ist der Schließmuskel zwischen Magen und Duodenum. Cardia liegt am Mageneingang.",
    "mittel",
    ["Verdauung", "Anatomie"]
  ),
  q(
    "bio-pool-10-025",
    "bio-kap3",
    "Wann ist der Embryo besonders empfindlich für teratogene Einflüsse?",
    [
      "In der 1. Woche",
      "In der 4.–8. Woche (Organogenese)",
      "Im 3. Trimenon",
      "Nur bei der Geburt",
      "Nach der Geburt",
    ],
    1,
    "In der 4.–8. Woche laufen Organogenese und frühe Differenzierung ab; hier sind Fehlbildungen durch Noxen (z. B. Alkohol, Medikamente) besonders häufig.",
    "mittel",
    ["Embryologie", "Teratogenese"]
  ),
  q(
    "bio-pool-10-026",
    "bio-kap4",
    "Welche Aussage zur DNA-Replikation trifft zu?",
    [
      "Sie erfolgt in der G1-Phase",
      "Sie erfolgt in der S-Phase",
      "Sie erfolgt nur in Keimzellen",
      "Sie erfolgt ohne Enzyme",
      "Sie erzeugt RNA",
    ],
    1,
    "Die DNA-Replikation findet in der S-Phase (Synthesephase) des Zellzyklus statt. G1 und G2 sind Lückenphasen.",
    "leicht",
    ["Zellzyklus", "DNA"]
  ),
  q(
    "bio-pool-10-027",
    "bio-kap2",
    "Welches Blutgefäß transportiert sauerstoffarmes Blut vom Herzen zur Lunge?",
    ["Lungenvene", "Aorta", "Lungenarterie", "Hohlvene", "Pfortader"],
    2,
    "Die Lungenarterie führt sauerstoffarmes Blut vom rechten Herzen zur Lunge. Die Lungenvenen führen sauerstoffreiches Blut zurück zum linken Herzen.",
    "leicht",
    ["Kreislauf", "Lunge"]
  ),
  q(
    "bio-pool-10-028",
    "bio-kap1",
    "Welche Zellorganelle baut überschüssiges oder geschädigtes Zellmaterial ab?",
    ["Ribosom", "Golgi-Apparat", "Lysosom", "Mitochondrium", "Endoplasmatisches Retikulum"],
    2,
    "Lysosomen enthalten Verdauungsenzyme und bauen Makromoleküle sowie defekte Organellen ab (Autophagie, Heterophagie).",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-10-029",
    "bio-kap5",
    "Was beschreibt die „Karryotype“?",
    [
      "Die Gesamtheit der Gene einer Zelle",
      "Die geordnete Darstellung der Chromosomen einer Zelle (Anzahl und Morphologie)",
      "Die RNA einer Zelle",
      "Die Proteine im Zytoplasma",
      "Die Mitochondrien-DNA",
    ],
    1,
    "Der Karyotyp ist die Darstellung der Chromosomen (nach Größe und Zentromerlage geordnet), z. B. zur Erkennung von Chromosomenanomalien.",
    "mittel",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-10-030",
    "bio-kap2",
    "Wo wird das antidiuretische Hormon (ADH) gebildet?",
    [
      "Nebenniere",
      "Niere",
      "Hypophysenvorderlappen",
      "Hypophysenhinterlappen (Speicherort); gebildet im Hypothalamus",
      "Schilddrüse",
    ],
    3,
    "ADH (Vasopressin) wird im Hypothalamus gebildet und im Hypophysenhinterlappen gespeichert und ausgeschüttet. Es fördert die Wasserückresorption in der Niere.",
    "mittel",
    ["Hormone", "Wasserhaushalt"]
  ),
  q(
    "bio-pool-10-031",
    "bio-kap4",
    "Bei einem autosomal-rezessiven Erbgang können zwei phänotypisch gesunde Eltern:",
    [
      "nur gesunde Kinder haben",
      "nur kranke Kinder haben",
      "kranke Kinder haben, wenn beide heterozygot (Konduktoren) sind",
      "keine Kinder haben",
      "nur heterozygote Kinder haben",
    ],
    2,
    "Bei autosomal-rezessiv: Beide Eltern können heterozygot (Konduktoren) sein; dann ist die Wahrscheinlichkeit für ein homozygot krankes Kind 25 %.",
    "mittel",
    ["Vererbung", "autosomal-rezessiv"]
  ),
  q(
    "bio-pool-10-032",
    "bio-kap2",
    "Welche Struktur verbindet die beiden Großhirnhemisphären?",
    ["Pons", "Corpus callosum", "Kleinhirn", "Thalamus", "Medulla oblongata"],
    1,
    "Der Corpus callosum (Balken) ist die große Kommissur und verbindet linke und rechte Großhirnhemisphäre.",
    "leicht",
    ["ZNS", "Gehirn"]
  ),
  q(
    "bio-pool-10-033",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft NICHT zu?",
    [
      "Sie besteht aus einer Lipiddoppelschicht",
      "Sie kann durch Transportproteine durchlässig für bestimmte Substanzen sein",
      "Sie enthält Proteine",
      "Glukose wird ausschließlich ohne Transportprotein durch die Membran geschleust",
      "Das Flüssig-Mosaik-Modell beschreibt ihren Aufbau",
    ],
    3,
    "Glukose wird über Transportproteine (GLUT) in die Zelle geschleust, nicht durch freie Diffusion (D falsch). Kleine ungeladene lipophile Moleküle (z. B. O₂) diffundieren frei.",
    "mittel",
    ["Zellmembran", "FALSCH"]
  ),
  q(
    "bio-pool-10-034",
    "bio-kap5",
    "Welche Aussage zum Ökosystem Wald trifft zu?",
    [
      "Im Wald gibt es keine Destenten",
      "Pilze können als Destenten wirken",
      "Alle Tiere sind Produzenten",
      "Es gibt keine Nahrungsketten",
      "Bakterien spielen keine Rolle beim Abbau",
    ],
    1,
    "Destenten (Zersetzer) bauen totes organisches Material ab; dazu zählen Pilze, Bakterien und viele wirbellose Tiere.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-10-035",
    "bio-kap2",
    "In welchem Abschnitt des Dickdarms wird vor allem Wasser resorbiert?",
    [
      "Colon ascendens",
      "Colon transversum",
      "Colon descendens",
      "Alle Abschnitte des Colons",
      "Nur im Rektum",
    ],
    3,
    "Im gesamten Colon wird Wasser (und Elektrolyte) resorbiert, der Stuhl eingedickt. Die Hauptresorption von Nährstoffen erfolgt im Dünndarm.",
    "mittel",
    ["Verdauung", "Dickdarm"]
  ),
  q(
    "bio-pool-10-036",
    "bio-kap4",
    "Was ist ein Codon?",
    [
      "Eine dreifache Basenabfolge auf der DNA",
      "Eine dreifache Basenabfolge auf der mRNA, die für eine Aminosäure codiert",
      "Ein Abschnitt auf der tRNA",
      "Ein Gen",
      "Ein Chromosomenabschnitt",
    ],
    1,
    "Ein Codon ist eine Triplett-Sequenz auf der mRNA (3 Basen), die eine Aminosäure codiert. Das Anticodon auf der tRNA bindet daran.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-10-037",
    "bio-kap2",
    "Welcher Knochen gehört zum Arm (obere Extremität)?",
    ["Femur", "Tibia", "Humerus", "Fibula", "Patella"],
    2,
    "Der Humerus ist der Oberarmknochen. Femur = Oberschenkel, Tibia/Fibula = Unterschenkel, Patella = Kniescheibe.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-10-038",
    "bio-kap1",
    "Wofür steht ATP?",
    [
      "Adenosintriphosphat",
      "Aminotransferase-Protein",
      "Antigen-Transport-Protein",
      "Adenosindiphosphat",
      "Keines der Genannten",
    ],
    0,
    "ATP = Adenosintriphosphat, die universelle Energiewährung der Zelle. Bei Hydrolyse zu ADP wird Energie freigesetzt.",
    "leicht",
    ["Zelle", "ATP"]
  ),
  q(
    "bio-pool-10-039",
    "bio-kap3",
    "Was ist die Morula?",
    [
      "Ein frühes Entwicklungsstadium mit solidem Zellhaufen (vor der Blastozyste)",
      "Die Eizelle vor der Befruchtung",
      "Die Plazenta",
      "Die Fruchtblase",
      "Die Nabelschnur",
    ],
    0,
    "Die Morula ist ein frühes Embryonalstadium (ca. 16–32 Zellen), ein kompakter Zellhaufen. Daraus entsteht die Blastozyste mit Keimhöhle.",
    "mittel",
    ["Embryologie"]
  ),
  q(
    "bio-pool-10-040",
    "bio-kap5",
    "Welche Immunzellen können virusinfizierte Körperzellen abtöten?",
    [
      "B-Lymphozyten",
      "T-Helferzellen",
      "T-Killerzellen (zytotoxische T-Zellen)",
      "Plasmazellen",
      "Mastzellen",
    ],
    2,
    "T-Killerzellen (CD8⁺) erkennen virusinfizierte Zellen über MHC-I und können sie abtöten (zellvermittelte Immunantwort).",
    "mittel",
    ["Immunologie", "T-Zellen"]
  ),
  q(
    "bio-pool-10-041",
    "bio-kap2",
    "Welches Hormon wird in der Schilddrüse gebildet und enthält Jod?",
    ["Cortisol", "Insulin", "Thyroxin (T4)", "Adrenalin", "Östrogen"],
    2,
    "Thyroxin (T4) und Trijodthyronin (T3) werden in der Schilddrüse gebildet und enthalten Jod. Jodmangel kann zu Kropf führen.",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-10-042",
    "bio-kap4",
    "In welcher Phase der Mitose trennen sich die Schwesterchromatiden?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase"],
    2,
    "In der Anaphase werden die Schwesterchromatiden getrennt und zu den Polen gezogen. In der Metaphase liegen sie in der Äquatorialebene.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-10-043",
    "bio-kap2",
    "Wo findet die Gasaufnahme (Sauerstoff) ins Blut statt?",
    ["In den Bronchien", "In den Alveolen", "In der Trachea", "Im Nasenraum", "Im Rachen"],
    1,
    "Der Gasaustausch (O₂ aufnehmen, CO₂ abgeben) erfolgt in den Lungenbläschen (Alveolen) über die Blut-Luft-Schranke.",
    "leicht",
    ["Atmung", "Lunge"]
  ),
  q(
    "bio-pool-10-044",
    "bio-kap1",
    "Welche Aussage über Ribosomen trifft zu?",
    [
      "Sie sind von einer Doppelmembran umgeben",
      "Sie kommen nur im Zellkern vor",
      "Sie bestehen aus rRNA und Proteinen",
      "Sie synthetisieren DNA",
      "Sie kommen nur in Eukaryoten vor",
    ],
    2,
    "Ribosomen bestehen aus rRNA und Proteinen und sind der Ort der Translation (Proteinbiosynthese). Sie haben keine Membran.",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-10-045",
    "bio-kap5",
    "Was versteht man unter „Biodiversität“?",
    [
      "Nur die Anzahl der Arten in einem Gebiet",
      "Die Vielfalt der Gene, Arten und Ökosysteme",
      "Nur die genetische Vielfalt",
      "Nur die Vielfalt der Ökosysteme",
      "Die Anzahl der Individuen einer Art",
    ],
    1,
    "Biodiversität umfasst die genetische Vielfalt, die Artenvielfalt und die Vielfalt der Ökosysteme.",
    "leicht",
    ["Ökologie", "Biodiversität"]
  ),
  q(
    "bio-pool-10-046",
    "bio-kap2",
    "Welcher Teil des Magens liegt direkt am Übergang zum Duodenum?",
    ["Fundus", "Korpus", "Antrum", "Pylorus", "Cardia"],
    3,
    "Der Pylorus (Magenpförtner) grenzt an das Duodenum. Fundus und Korpus sind Magenabschnitte; Cardia am Mageneingang.",
    "mittel",
    ["Verdauung", "Magen"]
  ),
  q(
    "bio-pool-10-047",
    "bio-kap4",
    "Was ist ein Allel?",
    [
      "Ein Chromosom",
      "Eine Variante eines Gens an einem bestimmten Genort",
      "Eine gesamte DNA-Sequenz",
      "Ein Protein",
      "Eine RNA-Art",
    ],
    1,
    "Ein Allel ist eine von mehreren möglichen Varianten eines Gens (z. B. Allel für braune oder blaue Augen). Homologe Chromosomen tragen je ein Allel pro Genort.",
    "leicht",
    ["Genetik", "Allel"]
  ),
  q(
    "bio-pool-10-048",
    "bio-kap2",
    "Welches Organ produziert Galle?",
    ["Magen", "Bauchspeicheldrüse", "Leber", "Milz", "Dünndarm"],
    2,
    "Die Leber produziert die Galle; sie wird in der Gallenblase gespeichert und bei Bedarf in den Dünndarm abgegeben.",
    "leicht",
    ["Verdauung", "Leber"]
  ),
  q(
    "bio-pool-10-049",
    "bio-kap3",
    "Aus welchem Keimblatt entstehen die Muskeln?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Aus Ektoderm und Mesoderm", "Aus Entoderm und Mesoderm"],
    2,
    "Mesoderm → Muskulatur, Skelett, Kreislaufsystem, Urogenitalsystem, Bindegewebe. Ektoderm → Haut, Nervensystem. Entoderm → Darmschleimhaut, Leber, Pankreas.",
    "mittel",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-10-050",
    "bio-kap1",
    "Welche Zellorganelle ist für die Modifikation und den Versand von Proteinen wichtig?",
    ["Ribosom", "Lysosom", "Golgi-Apparat", "Mitochondrium", "Nukleolus"],
    2,
    "Der Golgi-Apparat modifiziert (z. B. Glykosylierung) und sortiert Proteine und verpackt sie in Vesikel für den Export oder für Lysosomen.",
    "leicht",
    ["Zelle", "Golgi"]
  ),
  q(
    "bio-pool-10-051",
    "bio-kap5",
    "Welche Aussage zu Antigenen trifft zu?",
    [
      "Antigene werden nur von B-Zellen erkannt",
      "Antigene sind immer körpereigen",
      "Antigene können die Bildung von Antikörpern auslösen",
      "Antigene sind ausschließlich Proteine",
      "Es gibt nur eine Sorte Antigen",
    ],
    2,
    "Antigene sind Stoffe, die vom Immunsystem erkannt werden und eine spezifische Immunantwort (z. B. Antikörperbildung) auslösen können.",
    "mittel",
    ["Immunologie", "Antigen"]
  ),
  q(
    "bio-pool-10-052",
    "bio-kap2",
    "Welcher Nerv versorgt das Zwerchfell motorisch?",
    ["N. vagus", "N. phrenicus", "N. medianus", "N. ischiadicus", "N. opticus"],
    1,
    "Der N. phrenicus innerviert das Zwerchfell motorisch (Atmung). Er entspringt aus dem Plexus cervicalis (C3–C5).",
    "mittel",
    ["ZNS", "Anatomie"]
  ),
  q(
    "bio-pool-10-053",
    "bio-kap4",
    "Bei der Translation wird:",
    [
      "DNA in RNA umgeschrieben",
      "RNA in Protein übersetzt",
      "DNA verdoppelt",
      "RNA in DNA umgeschrieben",
      "Protein abgebaut",
    ],
    1,
    "Translation = Übersetzung der mRNA in eine Aminosäuresequenz (Protein) an den Ribosomen. Transkription = DNA → RNA.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-10-054",
    "bio-kap2",
    "Welche Aussage über das Blut trifft NICHT zu?",
    [
      "Erythrozyten enthalten Hämoglobin",
      "Blutplasma enthält Gerinnungsfaktoren",
      "Thrombozyten sind Zellfragmente",
      "Leukozyten haben alle einen Zellkern",
      "Blutserum enthält Fibrinogen",
    ],
    4,
    "Blutserum ist Plasma ohne Gerinnungsfaktoren (z. B. ohne Fibrinogen) – z. B. nach Gerinnung. E ist also falsch.",
    "mittel",
    ["Blut", "FALSCH"]
  ),
  q(
    "bio-pool-10-055",
    "bio-kap1",
    "Wo findet die Transkription bei Eukaryoten statt?",
    ["An den Ribosomen", "Im Zellkern", "Im Mitochondrium", "Im Golgi-Apparat", "Im Zytosol"],
    1,
    "Die Transkription (DNA → RNA) findet im Zellkern statt. Die Translation (mRNA → Protein) an den Ribosomen im Zytosol bzw. am rauen ER.",
    "leicht",
    ["Genetik", "Transkription"]
  ),
  q(
    "bio-pool-10-056",
    "bio-kap5",
    "Was ist ein Biotop?",
    [
      "Die Lebensgemeinschaft aller Arten",
      "Der unbelebte Lebensraum (Boden, Wasser, Klima)",
      "Ein einzelner Organismus",
      "Die Gesamtheit der Nahrungsbeziehungen",
      "Ein Ökosystem",
    ],
    1,
    "Biotop = unbelebter Lebensraum. Biozönose = Lebensgemeinschaft der Arten. Ökosystem = Biotop + Biozönose.",
    "leicht",
    ["Ökologie", "Biotop"]
  ),
  q(
    "bio-pool-10-057",
    "bio-kap2",
    "Welche Struktur im Auge enthält die Photorezeptoren (Stäbchen und Zapfen)?",
    ["Lederhaut", "Hornhaut", "Netzhaut (Retina)", "Linse", "Iris"],
    2,
    "Die Netzhaut (Retina) enthält die Stäbchen (Hell-Dunkel-Sehen) und Zapfen (Farbsehen). Die Linse bündelt das Licht.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-10-058",
    "bio-kap4",
    "Ein Mann mit Blutgruppe A (heterozygotes Genotype I^A I^0) und eine Frau mit Blutgruppe B (heterozygotes Genotype I^B I^0) können ein Kind mit welcher Blutgruppe haben?",
    ["Nur A oder B", "Nur AB", "A, B, AB oder 0", "Nur 0", "Nur A oder AB"],
    2,
    "I^A I^0 × I^B I^0 kann I^A I^B (AB), I^A I^0 (A), I^B I^0 (B), I^0 I^0 (0) ergeben – alle vier Blutgruppen möglich.",
    "mittel",
    ["Blutgruppen", "Vererbung"]
  ),
  q(
    "bio-pool-10-059",
    "bio-kap2",
    "Welches Organ bildet Harnstoff als Endprodukt des Eiweißstoffwechsels?",
    ["Niere", "Leber", "Muskel", "Lunge", "Darm"],
    1,
    "Die Leber bildet Harnstoff im Harnstoffzyklus aus Ammoniak (aus dem Abbau von Aminosäuren). Die Niere scheidet ihn aus.",
    "mittel",
    ["Stoffwechsel", "Leber"]
  ),
  q(
    "bio-pool-10-060",
    "bio-kap3",
    "Was ist die Blastozyste?",
    [
      "Ein frühes Entwicklungsstadium mit innerer Zellmasse und Keimhöhle",
      "Die Eizelle vor der Befruchtung",
      "Die Plazenta",
      "Die Fruchtblase",
      "Die Morula",
    ],
    0,
    "Die Blastozyste entsteht aus der Morula; sie hat eine Keimhöhle (Blastocele) und eine innere Zellmasse (wird zum Embryo) sowie den Trophoblasten (Plazentaanteil).",
    "mittel",
    ["Embryologie"]
  ),
];
