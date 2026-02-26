/**
 * Biologie BMS Pool 14 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool14: Question[] = [
  q(
    "bio-pool-14-001",
    "bio-kap1",
    "Welche Nukleotide kommen in der DNA vor?",
    ["A, U, G, C", "A, T, G, C", "nur A und G", "nur T und C", "A, T, U, C"],
    1,
    "DNA enthält Adenin, Thymin, Guanin, Cytosin (A, T, G, C). RNA hat Uracil statt Thymin.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-14-002",
    "bio-kap2",
    "Welches Organ filtert das Blut und bildet den Harn?",
    ["Leber", "Milz", "Niere", "Bauchspeicheldrüse", "Gallenblase"],
    2,
    "Die Niere filtert das Blut (Glomerulus), bildet den Primärharn und konzentriert ihn zum Endharn.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-14-003",
    "bio-kap4",
    "Was ist ein Exon?",
    [
      "Ein nicht codierender Abschnitt",
      "Ein codierender Abschnitt, der in der reifen mRNA bleibt",
      "Ein Intron",
      "Ein Ribosom",
      "Ein Stopp-Codon",
    ],
    1,
    "Exons sind die Abschnitte, die nach dem Spleißen in der mRNA bleiben und codieren. Introns werden entfernt.",
    "mittel",
    ["Genetik", "Genexpression"]
  ),
  q(
    "bio-pool-14-004",
    "bio-kap5",
    "Was ist die zelluläre Immunantwort?",
    [
      "Nur Antikörper",
      "Abwehr durch T-Lymphozyten (z. B. T-Killerzellen)",
      "Nur Makrophagen",
      "Nur B-Zellen",
      "Nur Komplement",
    ],
    1,
    "Zelluläre Abwehr: T-Zellen erkennen infizierte oder entartete Zellen und töten sie oder koordinieren die Abwehr.",
    "mittel",
    ["Immunologie", "zelluläre Abwehr"]
  ),
  q(
    "bio-pool-14-005",
    "bio-kap1",
    "Welche Aussage über die Zellteilung trifft zu?",
    [
      "Bei der Mitose entstehen vier Zellen",
      "Die Mitose erhält die Chromosomenzahl pro Zelle",
      "Crossing-over ist typisch für die Mitose",
      "Die Meiose dient dem Wachstum",
      "Bei der Mitose wird die Chromosomenzahl halbiert",
    ],
    1,
    "Mitose: 1 → 2 Zellen mit gleicher Chromosomenzahl. Meiose: 1 → 4 haploide Zellen.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-14-006",
    "bio-kap2",
    "Welches Hormon wird in der Schilddrüse gebildet?",
    ["Insulin", "Cortisol", "T3 und T4 (Thyroxin)", "Adrenalin", "Östrogen"],
    2,
    "Die Schilddrüse produziert die jodhaltigen Hormone T3 (Trijodthyronin) und T4 (Thyroxin).",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-14-007",
    "bio-kap4",
    "Was ist die Replikation?",
    [
      "Übersetzung von RNA in Protein",
      "Verdopplung der DNA vor der Zellteilung",
      "Transkription",
      "Spleißen",
      "Mutation",
    ],
    1,
    "Bei der Replikation wird die DNA verdoppelt (S-Phase), sodass jede Tochterzelle die gleiche Erbinformation erhält.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-14-008",
    "bio-kap3",
    "Was ist die Morula?",
    [
      "Die Eizelle",
      "Ein frühes Entwicklungsstadium: kugeliger Zellhaufen nach mehreren Teilungen",
      "Die Blastozyste",
      "Die Gastrula",
      "Die Plazenta",
    ],
    1,
    "Die Morula ist ein kugeliger Zellhaufen (ca. 16–32 Zellen) vor der Blastozystenbildung.",
    "mittel",
    ["Embryologie", "Morula"]
  ),
  q(
    "bio-pool-14-009",
    "bio-kap2",
    "Welche Aussage über die Speicheldrüsen trifft NICHT zu?",
    [
      "Sie produzieren Speichel",
      "Speichel enthält Amylase",
      "Sie produzieren Pepsin",
      "Speichel befeuchtet die Nahrung",
      "Es gibt mehrere Speicheldrüsen (z. B. Glandula parotis)",
    ],
    2,
    "Pepsin wird im Magen gebildet, nicht in den Speicheldrüsen (C falsch). Speichel enthält u. a. Amylase.",
    "leicht",
    ["Verdauung", "FALSCH"]
  ),
  q(
    "bio-pool-14-010",
    "bio-kap5",
    "Was ist ein Biotop?",
    [
      "Die Lebensgemeinschaft aller Arten",
      "Der unbelebte Lebensraum (Boden, Wasser, Klima)",
      "Eine Art",
      "Eine Nahrungskette",
      "Ein Individuum",
    ],
    1,
    "Biotop = unbelebter Lebensraum. Biozönose = Lebensgemeinschaft der Organismen.",
    "leicht",
    ["Ökologie", "Biotop"]
  ),
  q(
    "bio-pool-14-011",
    "bio-kap1",
    "Welches Organell ist der Ort der Proteinbiosynthese?",
    ["Zellkern", "Ribosom", "Lysosom", "Golgi-Apparat", "Mitochondrium"],
    1,
    "Ribosomen (frei im Zytosol oder am rauen ER) sind die Orte der Translation (Proteinbiosynthese).",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-14-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht und ermöglicht die Fokussierung?",
    ["Netzhaut", "Iris", "Linse", "Hornhaut nur", "Glaskörper"],
    2,
    "Die Linse (zusammen mit der Hornhaut) bricht das Licht; durch Änderung der Linsenkrümmung wird scharfgestellt (Akkommodation).",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-14-013",
    "bio-kap4",
    "Was ist ein dominant vererbtes Merkmal?",
    [
      "Es tritt nur bei Homozygotie auf",
      "Es tritt bereits bei einem betroffenen Allel auf",
      "Nur Frauen betroffen",
      "Nur auf dem Y-Chromosom",
      "Es wird nie vererbt",
    ],
    1,
    "Dominant: Ein betroffenes Allel reicht für die Ausprägung des Merkmals (z. B. Aa oder AA).",
    "leicht",
    ["Genetik", "dominant"]
  ),
  q(
    "bio-pool-14-014",
    "bio-kap5",
    "Was sind Prädatoren?",
    ["Pflanzenfresser", "Räuber (Beutegreifer)", "Zersetzer", "Produzenten", "Parasiten"],
    1,
    "Prädatoren sind Räuber, die andere Tiere erbeuten. Herbivoren = Pflanzenfresser.",
    "leicht",
    ["Ökologie", "Nahrungsbeziehungen"]
  ),
  q(
    "bio-pool-14-015",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft NICHT zu?",
    [
      "Sie haben eine Doppelmembran",
      "Sie sind an der ATP-Produktion beteiligt",
      "Sie haben eigene DNA",
      "Sie kommen nur in Tieren vor",
      "Sie enthalten die Atmungskette",
    ],
    3,
    "Mitochondrien kommen in tierischen und pflanzlichen Zellen vor (D falsch).",
    "leicht",
    ["Zelle", "FALSCH"]
  ),
  q(
    "bio-pool-14-016",
    "bio-kap2",
    "Wo wird das Hormon Östrogen hauptsächlich gebildet?",
    [
      "Hypophyse",
      "Nebenniere",
      "Eierstock (Follikel, Corpus luteum)",
      "Plazenta nur",
      "Schilddrüse",
    ],
    2,
    "Östrogen wird vor allem in den Eierstöcken (Follikel, Corpus luteum) gebildet; in der Schwangerschaft auch in der Plazenta.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-14-017",
    "bio-kap4",
    "Was ist eine Insertion (Mutation)?",
    [
      "Verlust von DNA",
      "Einbau zusätzlicher Basen bzw. eines Abschnitts",
      "Nur Punktmutation",
      "Umlagerung ohne Längenänderung",
      "Reparatur",
    ],
    1,
    "Bei einer Insertion werden eine oder mehrere Basen (oder ein Abschnitt) in die DNA eingefügt.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-14-018",
    "bio-kap3",
    "Was ist die Einnistung (Implantation)?",
    [
      "Die Befruchtung",
      "Das Einbetten der Blastozyste in die Gebärmutterschleimhaut",
      "Die Gastrulation",
      "Die Geburt",
      "Die Organogenese",
    ],
    1,
    "Bei der Implantation nistet sich die Blastozyste in die Gebärmutterschleimhaut (Endometrium) ein.",
    "leicht",
    ["Embryologie", "Implantation"]
  ),
  q(
    "bio-pool-14-019",
    "bio-kap5",
    "Was ist ein Ökosystem?",
    [
      "Nur die unbelebte Umwelt",
      "Nur die Lebensgemeinschaft",
      "Funktionale Einheit aus Biotop und Biozönose",
      "Eine einzelne Art",
      "Eine Nahrungskette",
    ],
    2,
    "Ökosystem = Biotop (abiotisch) + Biozönose (biotisch) in Wechselwirkung.",
    "leicht",
    ["Ökologie", "Ökosystem"]
  ),
  q(
    "bio-pool-14-020",
    "bio-kap2",
    "Welche Vene führt Blut aus dem Kopf zum Herzen?",
    ["Pfortader", "Obere Hohlvene", "Lungenvene", "Aorta", "Nierenvene"],
    1,
    "Die obere Hohlvene sammelt Blut aus Kopf, Hals, Armen und oberem Rumpf und mündet in den rechten Vorhof.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-14-021",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft zu?",
    [
      "Sie ist für alle Moleküle frei durchlässig",
      "Sie ist semipermeabel (wählend durchlässig)",
      "Sie besteht nur aus Kohlenhydraten",
      "Sie hat keine Rezeptoren",
      "Sie umgibt nur den Zellkern",
    ],
    1,
    "Die Zellmembran ist semipermeabel: Manche Stoffe passieren, andere nicht (Lipiddoppelschicht, Kanäle, Transporter).",
    "leicht",
    ["Zellmembran", "Zelle"]
  ),
  q(
    "bio-pool-14-022",
    "bio-kap4",
    "Was ist die Meiose?",
    [
      "Teilung nur in Körperzellen",
      "Reduktionsteilung zur Bildung von Keimzellen",
      "Gleich wie Mitose",
      "Nur eine Teilung",
      "Ohne Crossing-over",
    ],
    1,
    "Meiose: zwei aufeinanderfolgende Teilungen, Reduktion von 2n auf n, Bildung von Gameten.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-14-023",
    "bio-kap2",
    "Welcher Darmabschnitt schließt an den Magen an?",
    ["Jejunum", "Ileum", "Duodenum", "Colon", "Rektum"],
    2,
    "Der Zwölffingerdarm (Duodenum) schließt direkt an den Magenausgang (Pylorus) an.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-14-024",
    "bio-kap5",
    "Welche Aussage zu Antigenen trifft zu?",
    [
      "Antigene werden nur von T-Zellen gebildet",
      "Antigene können eine spezifische Immunantwort auslösen",
      "Antigene sind immer körpereigen",
      "Es gibt keine Kreuzreaktionen",
      "Antigene sind immer Proteine",
    ],
    1,
    "Antigene sind Strukturen (oft auf Pathogenen), die vom Immunsystem erkannt werden und eine spezifische Antwort auslösen.",
    "leicht",
    ["Immunologie", "Antigen"]
  ),
  q(
    "bio-pool-14-025",
    "bio-kap1",
    "Wo wird bei der Zellatmung der meiste ATP gebildet?",
    [
      "In der Glykolyse",
      "In der Atmungskette (oxidative Phosphorylierung)",
      "Im Citratzyklus direkt",
      "Bei der Gärung",
      "Im Zytosol",
    ],
    1,
    "Der größte Teil des ATP entsteht in der Atmungskette an der inneren Mitochondrienmembran (oxidative Phosphorylierung).",
    "mittel",
    ["Stoffwechsel", "Zellatmung"]
  ),
  q(
    "bio-pool-14-026",
    "bio-kap2",
    "Welches Hormon senkt den Calciumspiegel im Blut?",
    ["Parathormon", "Calcitonin", "Vitamin D", "Aldosteron", "Cortisol"],
    1,
    "Calcitonin (aus der Schilddrüse) senkt den Calciumspiegel. Parathormon erhöht ihn.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-14-027",
    "bio-kap4",
    "Was ist ein Gen?",
    [
      "Ein Chromosom",
      "Ein DNA-Abschnitt mit Information für ein Merkmal oder Genprodukt",
      "Ein Protein",
      "Eine RNA-Art",
      "Ein Organell",
    ],
    1,
    "Ein Gen ist ein Abschnitt der DNA, der für ein Merkmal oder ein Genprodukt (z. B. Protein) codiert.",
    "leicht",
    ["Genetik", "Gen"]
  ),
  q(
    "bio-pool-14-028",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Skelett?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Mesoderm → Skelett, Muskulatur, Bindegewebe, Kreislauf, Urogenitalsystem.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-14-029",
    "bio-kap5",
    "Was sind Gedächtniszellen?",
    [
      "Erythrozyten",
      "Lymphozyten, die bei erneutem Antigenkontakt schneller reagieren",
      "Thrombozyten",
      "Mastzellen",
      "Granulozyten",
    ],
    1,
    "B- und T-Gedächtniszellen entstehen nach Antigenkontakt und ermöglichen eine schnellere Immunantwort bei erneutem Kontakt.",
    "mittel",
    ["Immunologie", "Gedächtniszellen"]
  ),
  q(
    "bio-pool-14-030",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft NICHT zu?",
    [
      "Sie findet im Zytosol statt",
      "Sie benötigt keinen Sauerstoff",
      "Sie liefert Pyruvat",
      "Sie findet nur in Mitochondrien statt",
      "Sie liefert netto 2 ATP pro Glukose",
    ],
    3,
    "Die Glykolyse findet im Zytosol statt, nicht in Mitochondrien (D falsch).",
    "mittel",
    ["Stoffwechsel", "FALSCH"]
  ),
  q(
    "bio-pool-14-031",
    "bio-kap2",
    "Welcher Teil des Gehirns ist für die Regulation von Hunger, Durst und Temperatur wichtig?",
    ["Kleinhirn", "Hypothalamus", "Großhirnrinde", "Thalamus", "Pons"],
    1,
    "Der Hypothalamus reguliert u. a. Hunger, Durst, Körpertemperatur, Schlaf und viele Hormone.",
    "leicht",
    ["ZNS", "Hypothalamus"]
  ),
  q(
    "bio-pool-14-032",
    "bio-kap4",
    "Was ist ein Phänotyp?",
    [
      "Die genetische Ausstattung",
      "Die sichtbare bzw. messbare Ausprägung eines Merkmals",
      "Ein Chromosom",
      "Ein Allel",
      "Die Summe aller Gene",
    ],
    1,
    "Phänotyp = beobachtbare Merkmale. Genotyp = genetische Information (Allele).",
    "leicht",
    ["Genetik", "Phänotyp"]
  ),
  q(
    "bio-pool-14-033",
    "bio-kap5",
    "Was ist eine Nahrungskette?",
    [
      "Die Gesamtheit aller Arten",
      "Lineare Abfolge: wer frisst wen (Energie- und Stofffluss)",
      "Ein Biotop",
      "Eine Population",
      "Ein einzelnes Individuum",
    ],
    1,
    "Nahrungskette = lineare Abfolge von Produzent → Konsument(en) → Destent.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-14-034",
    "bio-kap1",
    "Welches Vitamin ist für die Blutgerinnung wichtig?",
    ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B1"],
    3,
    "Vitamin K ist Kofaktor für die Synthese von Gerinnungsfaktoren in der Leber.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-14-035",
    "bio-kap2",
    "Welche Aussage über die Milz trifft zu?",
    [
      "Sie produziert Galle",
      "Sie ist ein lymphatisches Organ und filtert gealterte Erythrozyten",
      "Sie produziert Insulin",
      "Sie liegt im rechten Oberbauch",
      "Sie ist Teil des Verdauungstrakts",
    ],
    1,
    "Die Milz ist lymphatisches Organ, Blutspeicher und filtert alte Erythrozyten. Galle kommt aus der Leber.",
    "leicht",
    ["Milz", "Immunologie"]
  ),
  q(
    "bio-pool-14-036",
    "bio-kap4",
    "In welcher Phase der Mitose teilt sich das Zytoplasma?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase und Cytokinese", "Interphase"],
    3,
    "In der Telophase bilden sich neue Kerne; bei der Cytokinese teilt sich das Zytoplasma (Zellmembran).",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-14-037",
    "bio-kap3",
    "Was ist die Amnionhöhle?",
    [
      "Die Gebärmutterhöhle",
      "Der mit Fruchtwasser gefüllte Raum um den Embryo",
      "Die Plazenta",
      "Die Eileiterhöhle",
      "Die Chorionhöhle",
    ],
    1,
    "Die Amnionhöhle wird vom Amnion umschlossen und enthält das Fruchtwasser.",
    "mittel",
    ["Embryologie", "Amnion"]
  ),
  q(
    "bio-pool-14-038",
    "bio-kap5",
    "Was versteht man unter „Population“?",
    [
      "Alle Arten in einem Gebiet",
      "Alle Individuen einer Art in einem definierten Gebiet",
      "Ein Ökosystem",
      "Eine Nahrungskette",
      "Ein Biotop",
    ],
    1,
    "Population = alle Individuen einer Art in einem räumlich und zeitlich definierten Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-14-039",
    "bio-kap1",
    "Welches Organell baut Wasserstoffperoxid ab?",
    ["Lysosom", "Ribosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    2,
    "Peroxisomen enthalten Katalase und bauen H₂O₂ zu Wasser und Sauerstoff ab.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-14-040",
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter?",
    ["Prolactin", "Oxytocin", "Progesteron", "FSH", "Östrogen"],
    1,
    "Oxytocin fördert die Wehen (Kontraktion der Gebärmuttermuskulatur) und den Milchspendereflex.",
    "leicht",
    ["Hormone", "Oxytocin"]
  ),
  q(
    "bio-pool-14-041",
    "bio-kap4",
    "Was ist die DNA-Replikation?",
    ["Transkription", "Verdopplung der DNA (S-Phase)", "Translation", "Spleißen", "Mutation"],
    1,
    "Bei der Replikation wird die DNA verdoppelt, sodass jede Tochterzelle eine Kopie erhält.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-14-042",
    "bio-kap5",
    "Was sind Destenten?",
    ["Produzenten", "Konsumenten", "Zersetzer (Pilze, Bakterien)", "Räuber", "Pflanzenfresser"],
    2,
    "Destenten bauen tote organische Substanz ab und setzen Nährstoffe frei.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-14-043",
    "bio-kap1",
    "Welche Aussage über Enzyme trifft NICHT zu?",
    [
      "Enzyme sind Biokatalysatoren",
      "Enzyme senken die Aktivierungsenergie",
      "Enzyme werden bei der Reaktion verbraucht",
      "Enzyme sind meist Proteine",
      "Enzyme sind substratspezifisch",
    ],
    2,
    "Enzyme werden nicht verbraucht; sie gehen unverändert aus der Reaktion hervor (C falsch).",
    "leicht",
    ["Enzyme", "FALSCH"]
  ),
  q(
    "bio-pool-14-044",
    "bio-kap2",
    "Welcher Knochen gehört zum Oberschenkel?",
    ["Tibia", "Fibula", "Femur", "Humerus", "Radius"],
    2,
    "Der Femur ist der Oberschenkelknochen. Tibia und Fibula sind Unterschenkelknochen.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-14-045",
    "bio-kap4",
    "Was ist ein Genotyp?",
    [
      "Die sichtbare Ausprägung",
      "Die genetische Ausstattung (Allele)",
      "Ein Chromosom",
      "Eine Umwelteigenschaft",
      "Ein Protein",
    ],
    1,
    "Genotyp = genetische Information (Allele). Phänotyp = beobachtbare Ausprägung.",
    "leicht",
    ["Genetik", "Genotyp"]
  ),
  q(
    "bio-pool-14-046",
    "bio-kap3",
    "Wann beginnt das Herz des Embryos zu schlagen?",
    [
      "Am 1. Tag",
      "In der 3.–4. Woche",
      "In der 8. Woche",
      "Nach der Implantation sofort",
      "Bei der Geburt",
    ],
    1,
    "Das Herz beginnt in der 3.–4. Entwicklungswoche zu schlagen.",
    "mittel",
    ["Embryologie", "Herz"]
  ),
  q(
    "bio-pool-14-047",
    "bio-kap5",
    "Was ist ein Habitat?",
    [
      "Die ökologische Nische",
      "Der konkrete Lebensort einer Art",
      "Eine Nahrungskette",
      "Die Biozönose",
      "Ein Biotop",
    ],
    1,
    "Habitat = konkreter Lebensraum. Nische = funktionale Rolle und Anforderungen der Art.",
    "mittel",
    ["Ökologie", "Habitat"]
  ),
  q(
    "bio-pool-14-048",
    "bio-kap1",
    "Wo findet die oxidative Phosphorylierung statt?",
    [
      "Im Zytosol",
      "An der inneren Mitochondrienmembran",
      "Im Zellkern",
      "Am Golgi-Apparat",
      "Im Lysosom",
    ],
    1,
    "Die Atmungskette (oxidative Phosphorylierung) sitzt an der inneren Mitochondrienmembran.",
    "mittel",
    ["Stoffwechsel", "Atmungskette"]
  ),
  q(
    "bio-pool-14-049",
    "bio-kap2",
    "Welches Organ produziert Erythropoetin?",
    ["Milz", "Leber", "Niere", "Knochenmark", "Herz"],
    2,
    "EPO wird vor allem in der Niere gebildet und stimuliert die Bildung roter Blutkörperchen im Knochenmark.",
    "mittel",
    ["Hormone", "Blut"]
  ),
  q(
    "bio-pool-14-050",
    "bio-kap4",
    "Was ist eine Mutation?",
    [
      "Eine bewusste Änderung",
      "Eine dauerhafte Änderung der DNA-Sequenz",
      "Nur eine Änderung des Phänotyps",
      "Immer eine Rückmutation",
      "Nur eine Insertion",
    ],
    1,
    "Mutation = dauerhafte Änderung im Erbgut (DNA). Kann spontan oder durch Mutagene entstehen.",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-14-051",
    "bio-kap5",
    "Was ist die Biozönose?",
    [
      "Der unbelebte Lebensraum",
      "Die Lebensgemeinschaft aller Arten in einem Gebiet",
      "Eine einzelne Art",
      "Ein Individuum",
      "Eine Nahrungskette",
    ],
    1,
    "Biozönose = Lebensgemeinschaft (Pflanzen, Tiere, Pilze, Mikroorganismen). Biotop = unbelebter Lebensraum.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-14-052",
    "bio-kap1",
    "Welches Organell enthält Verdauungsenzyme?",
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme und bauen Makromoleküle und Organellen ab.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-14-053",
    "bio-kap2",
    "Welche Aussage über die Aorta trifft zu?",
    [
      "Sie entspringt der rechten Kammer",
      "Sie führt sauerstoffreiches Blut in den Körperkreislauf",
      "Sie mündet in den rechten Vorhof",
      "Sie führt nur Blut zur Lunge",
      "Sie hat nur eine Klappe",
    ],
    1,
    "Die Aorta entspringt der linken Kammer und führt sauerstoffreiches Blut in den Körperkreislauf.",
    "leicht",
    ["Kreislauf", "Aorta"]
  ),
  q(
    "bio-pool-14-054",
    "bio-kap4",
    "Was ist die Transkription?",
    [
      "Übersetzung von mRNA in Protein",
      "Kopieren der DNA in RNA",
      "Replikation",
      "Spleißen",
      "Mutation",
    ],
    1,
    "Transkription = Synthese von RNA an der DNA (DNA → RNA).",
    "leicht",
    ["Genetik", "Transkription"]
  ),
  q(
    "bio-pool-14-055",
    "bio-kap3",
    "Was ist die Plazenta?",
    [
      "Die Eizelle",
      "Das Organ zum Stoffaustausch zwischen Mutter und Fetus",
      "Die Fruchtblase",
      "Die Nabelschnur",
      "Der Gelbkörper",
    ],
    1,
    "Die Plazenta ermöglicht Stoffaustausch, Hormonproduktion und schützt den Fetus.",
    "leicht",
    ["Embryologie", "Plazenta"]
  ),
  q(
    "bio-pool-14-056",
    "bio-kap5",
    "Welche Zellen gehören zur unspezifischen Abwehr?",
    [
      "B-Lymphozyten",
      "T-Lymphozyten",
      "Neutrophile Granulozyten und Makrophagen",
      "Plasmazellen",
      "Gedächtniszellen",
    ],
    2,
    "Neutrophile, Makrophagen, NK-Zellen gehören zur unspezifischen Abwehr. B/T-Zellen zur spezifischen.",
    "leicht",
    ["Immunologie", "Abwehr"]
  ),
  q(
    "bio-pool-14-057",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukose)?",
    ["Ein Pyruvat", "Zwei Pyruvatmoleküle", "Laktat", "Ethanol", "CO₂"],
    1,
    "Aus einem Glukosemolekül entstehen bei der Glykolyse zwei Pyruvatmoleküle.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-14-058",
    "bio-kap2",
    "Wo wird Renin gebildet?",
    ["Leber", "Niere", "Nebenniere", "Hypophyse", "Herz"],
    1,
    "Renin wird in den Nieren (juxtaglomeruläre Zellen) gebildet und ist Teil des RAAS (Blutdruckregulation).",
    "mittel",
    ["Hormone", "Niere"]
  ),
  q(
    "bio-pool-14-059",
    "bio-kap4",
    "Was bedeutet „homozygot“?",
    [
      "Zwei verschiedene Allele",
      "Zwei gleiche Allele an einem Genort",
      "Haploid",
      "Ein Allel",
      "Rezessiv",
    ],
    1,
    "Homozygot = gleiche Allele (AA oder aa). Heterozygot = verschiedene Allele (Aa).",
    "leicht",
    ["Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-14-060",
    "bio-kap5",
    "Was ist Symbiose (im engeren Sinn)?",
    [
      "Nur Räuber-Beute",
      "Längerfristige Wechselbeziehung zum gegenseitigen Vorteil",
      "Nur Parasitismus",
      "Nur Konkurrenz",
      "Nur Kommensalismus",
    ],
    1,
    "Symbiose = wechselseitiger Nutzen (z. B. Mykorrhiza, Flechten, Darmbakterien).",
    "mittel",
    ["Ökologie", "Symbiose"]
  ),
];
