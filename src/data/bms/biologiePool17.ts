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
    "bio-pool-17-001",
    "bio-kap1",
    "Welche Nukleotide kommen in der DNA vor?",
    ["A, U, G, C", "A, T, G, C", "nur A und G", "nur T und C", "A, T, U, C"],
    1,
    "DNA enthält A, T, G, C. RNA hat Uracil statt Thymin.",
    "leicht",
    ["DNA", "Genetik"]
  ),
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
    "bio-pool-17-003",
    "bio-kap4",
    "Was ist ein Exon?",
    [
      "Nicht codierender Abschnitt",
      "Codierender Abschnitt, der in der reifen mRNA bleibt",
      "Intron",
      "Ribosom",
      "Stopp-Codon",
    ],
    1,
    "Exons bleiben nach dem Spleißen in der mRNA und codieren.",
    "mittel",
    ["Genetik", "Genexpression"]
  ),
  q(
    "bio-pool-17-004",
    "bio-kap5",
    "Was ist die zelluläre Immunantwort?",
    [
      "Nur Antikörper",
      "Abwehr durch T-Lymphozyten",
      "Nur Makrophagen",
      "Nur B-Zellen",
      "Nur Komplement",
    ],
    1,
    "Zelluläre Abwehr: T-Zellen erkennen und töten infizierte Zellen.",
    "mittel",
    ["Immunologie", "zelluläre Abwehr"]
  ),
  q(
    "bio-pool-17-005",
    "bio-kap1",
    "Welche Aussage über die Zellteilung trifft zu?",
    [
      "Mitose erzeugt vier Zellen",
      "Mitose erhält die Chromosomenzahl",
      "Crossing-over ist typisch für Mitose",
      "Meiose dient dem Wachstum",
      "Mitose halbiert die Chromosomenzahl",
    ],
    1,
    "Mitose: 1 → 2 Zellen mit gleicher Chromosomenzahl.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-17-006",
    "bio-kap2",
    "Welches Hormon wird in der Schilddrüse gebildet?",
    ["Insulin", "Cortisol", "T3 und T4", "Adrenalin", "Östrogen"],
    2,
    "Die Schilddrüse produziert T3 und T4 (Thyroxin).",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-17-007",
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
    "Bei der Replikation wird die DNA verdoppelt (S-Phase).",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-17-008",
    "bio-kap3",
    "Was ist die Morula?",
    [
      "Die Eizelle",
      "Kugeliger Zellhaufen nach mehreren Teilungen",
      "Blastozyste",
      "Gastrula",
      "Plazenta",
    ],
    1,
    "Die Morula ist ein kugeliger Zellhaufen (ca. 16–32 Zellen).",
    "mittel",
    ["Embryologie", "Morula"]
  ),
  q(
    "bio-pool-17-009",
    "bio-kap2",
    "Welche Aussage über die Speicheldrüsen trifft NICHT zu?",
    [
      "Sie produzieren Speichel",
      "Speichel enthält Amylase",
      "Sie produzieren Pepsin",
      "Speichel befeuchtet die Nahrung",
      "Es gibt mehrere Speicheldrüsen",
    ],
    2,
    "Pepsin wird im Magen gebildet (C falsch).",
    "leicht",
    ["Verdauung", "FALSCH"]
  ),
  q(
    "bio-pool-17-010",
    "bio-kap5",
    "Was ist ein Biotop?",
    [
      "Die Lebensgemeinschaft",
      "Der unbelebte Lebensraum",
      "Eine Art",
      "Eine Nahrungskette",
      "Ein Individuum",
    ],
    1,
    "Biotop = unbelebter Lebensraum. Biozönose = Lebensgemeinschaft.",
    "leicht",
    ["Ökologie", "Biotop"]
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
    "bio-pool-17-013",
    "bio-kap4",
    "Was ist ein dominant vererbtes Merkmal?",
    [
      "Nur bei Homozygotie",
      "Tritt bei einem betroffenen Allel auf",
      "Nur Frauen",
      "Nur auf Y-Chromosom",
      "Wird nie vererbt",
    ],
    1,
    "Dominant: ein betroffenes Allel reicht für die Ausprägung.",
    "leicht",
    ["Genetik", "dominant"]
  ),
  q(
    "bio-pool-17-014",
    "bio-kap5",
    "Was sind Prädatoren?",
    ["Pflanzenfresser", "Räuber", "Zersetzer", "Produzenten", "Parasiten"],
    1,
    "Prädatoren sind Räuber. Herbivoren = Pflanzenfresser.",
    "leicht",
    ["Ökologie", "Nahrungsbeziehungen"]
  ),
  q(
    "bio-pool-17-015",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft NICHT zu?",
    [
      "Doppelmembran",
      "Beteiligt an ATP-Produktion",
      "Eigene DNA",
      "Kommen nur in Tieren vor",
      "Enthalten Atmungskette",
    ],
    3,
    "Mitochondrien kommen auch in Pflanzen vor (D falsch).",
    "leicht",
    ["Zelle", "FALSCH"]
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
    "bio-pool-17-017",
    "bio-kap4",
    "Was ist eine Insertion (Mutation)?",
    [
      "Verlust von DNA",
      "Einbau zusätzlicher Basen",
      "Nur Punktmutation",
      "Umlagerung ohne Längenänderung",
      "Reparatur",
    ],
    1,
    "Bei einer Insertion werden Basen in die DNA eingefügt.",
    "mittel",
    ["Genetik", "Mutation"]
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
    "bio-pool-17-019",
    "bio-kap5",
    "Was ist ein Ökosystem?",
    [
      "Nur unbelebte Umwelt",
      "Nur Lebensgemeinschaft",
      "Einheit aus Biotop und Biozönose",
      "Eine Art",
      "Eine Nahrungskette",
    ],
    2,
    "Ökosystem = Biotop + Biozönose in Wechselwirkung.",
    "leicht",
    ["Ökologie", "Ökosystem"]
  ),
  q(
    "bio-pool-17-020",
    "bio-kap2",
    "Welche Vene führt Blut aus dem Kopf zum Herzen?",
    ["Pfortader", "Obere Hohlvene", "Lungenvene", "Aorta", "Nierenvene"],
    1,
    "Die obere Hohlvene sammelt Blut aus Kopf, Hals und Armen.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-17-021",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft zu?",
    [
      "Für alle Moleküle durchlässig",
      "Semipermeabel",
      "Nur Kohlenhydrate",
      "Keine Rezeptoren",
      "Umgibt nur den Kern",
    ],
    1,
    "Die Zellmembran ist semipermeabel (wählend durchlässig).",
    "leicht",
    ["Zellmembran", "Zelle"]
  ),
  q(
    "bio-pool-17-022",
    "bio-kap4",
    "Was ist die Meiose?",
    [
      "Nur in Körperzellen",
      "Reduktionsteilung zur Bildung von Keimzellen",
      "Gleich wie Mitose",
      "Nur eine Teilung",
      "Ohne Crossing-over",
    ],
    1,
    "Meiose: Reduktion von 2n auf n, Bildung von Gameten.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-17-023",
    "bio-kap2",
    "Welcher Darmabschnitt schließt an den Magen an?",
    ["Jejunum", "Ileum", "Duodenum", "Colon", "Rektum"],
    2,
    "Der Zwölffingerdarm (Duodenum) schließt an den Magen an.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-17-024",
    "bio-kap5",
    "Welche Aussage zu Antigenen trifft zu?",
    [
      "Nur von T-Zellen gebildet",
      "Können spezifische Immunantwort auslösen",
      "Immer körpereigen",
      "Keine Kreuzreaktionen",
      "Immer Proteine",
    ],
    1,
    "Antigene werden vom Immunsystem erkannt und lösen eine Antwort aus.",
    "leicht",
    ["Immunologie", "Antigen"]
  ),
  q(
    "bio-pool-17-025",
    "bio-kap1",
    "Wo wird bei der Zellatmung der meiste ATP gebildet?",
    ["Glykolyse", "Atmungskette", "Citratzyklus direkt", "Gärung", "Zytosol"],
    1,
    "Der größte Teil des ATP entsteht in der Atmungskette.",
    "mittel",
    ["Stoffwechsel", "Zellatmung"]
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
    "bio-pool-17-027",
    "bio-kap4",
    "Was ist ein Gen?",
    [
      "Ein Chromosom",
      "DNA-Abschnitt mit Information für ein Merkmal oder Genprodukt",
      "Ein Protein",
      "Eine RNA-Art",
      "Ein Organell",
    ],
    1,
    "Ein Gen codiert für ein Merkmal oder Genprodukt.",
    "leicht",
    ["Genetik", "Gen"]
  ),
  q(
    "bio-pool-17-028",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Skelett?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Mesoderm → Skelett, Muskulatur, Bindegewebe.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-17-029",
    "bio-kap5",
    "Was sind Gedächtniszellen?",
    [
      "Erythrozyten",
      "Lymphozyten für schnellere Reaktion bei erneutem Kontakt",
      "Thrombozyten",
      "Mastzellen",
      "Granulozyten",
    ],
    1,
    "Gedächtniszellen ermöglichen schnellere Immunantwort bei erneutem Antigenkontakt.",
    "mittel",
    ["Immunologie", "Gedächtniszellen"]
  ),
  q(
    "bio-pool-17-030",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft NICHT zu?",
    [
      "Im Zytosol",
      "Ohne Sauerstoff",
      "Liefert Pyruvat",
      "Nur in Mitochondrien",
      "Netto 2 ATP pro Glukose",
    ],
    3,
    "Glykolyse findet im Zytosol statt (D falsch).",
    "mittel",
    ["Stoffwechsel", "FALSCH"]
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
    "bio-pool-17-032",
    "bio-kap4",
    "Was ist ein Phänotyp?",
    [
      "Die genetische Ausstattung",
      "Die sichtbare bzw. messbare Ausprägung",
      "Ein Chromosom",
      "Ein Allel",
      "Die Summe aller Gene",
    ],
    1,
    "Phänotyp = beobachtbare Merkmale. Genotyp = genetische Information.",
    "leicht",
    ["Genetik", "Phänotyp"]
  ),
  q(
    "bio-pool-17-033",
    "bio-kap5",
    "Was ist eine Nahrungskette?",
    ["Alle Arten", "Lineare Abfolge: wer frisst wen", "Biotop", "Population", "Individuum"],
    1,
    "Nahrungskette = Produzent → Konsument(en) → Destent.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-17-034",
    "bio-kap1",
    "Welches Vitamin ist für die Blutgerinnung wichtig?",
    ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B1"],
    3,
    "Vitamin K ist Kofaktor für Gerinnungsfaktoren.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-17-035",
    "bio-kap2",
    "Welche Aussage über die Milz trifft zu?",
    [
      "Produziert Galle",
      "Lymphatisches Organ, filtert gealterte Erythrozyten",
      "Produziert Insulin",
      "Liegt rechts",
      "Teil des Verdauungstrakts",
    ],
    1,
    "Die Milz ist lymphatisches Organ und filtert alte Erythrozyten.",
    "leicht",
    ["Milz", "Immunologie"]
  ),
  q(
    "bio-pool-17-036",
    "bio-kap4",
    "In welcher Phase der Mitose teilt sich das Zytoplasma?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase und Cytokinese", "Interphase"],
    3,
    "In der Telophase/Cytokinese teilt sich das Zytoplasma.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-17-037",
    "bio-kap3",
    "Was ist die Amnionhöhle?",
    [
      "Gebärmutterhöhle",
      "Mit Fruchtwasser gefüllter Raum um den Embryo",
      "Plazenta",
      "Eileiterhöhle",
      "Chorionhöhle",
    ],
    1,
    "Die Amnionhöhle enthält das Fruchtwasser.",
    "mittel",
    ["Embryologie", "Amnion"]
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
    "bio-pool-17-039",
    "bio-kap1",
    "Welches Organell baut Wasserstoffperoxid ab?",
    ["Lysosom", "Ribosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    2,
    "Peroxisomen enthalten Katalase und bauen H₂O₂ ab.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-17-040",
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter?",
    ["Prolactin", "Oxytocin", "Progesteron", "FSH", "Östrogen"],
    1,
    "Oxytocin fördert die Wehen.",
    "leicht",
    ["Hormone", "Oxytocin"]
  ),
  q(
    "bio-pool-17-041",
    "bio-kap4",
    "Was ist die DNA-Replikation?",
    ["Transkription", "Verdopplung der DNA", "Translation", "Spleißen", "Mutation"],
    1,
    "Bei der Replikation wird die DNA verdoppelt.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-17-042",
    "bio-kap5",
    "Was sind Destenten?",
    ["Produzenten", "Konsumenten", "Zersetzer", "Räuber", "Pflanzenfresser"],
    2,
    "Destenten bauen tote organische Substanz ab.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-17-043",
    "bio-kap1",
    "Welche Aussage über Enzyme trifft NICHT zu?",
    [
      "Biokatalysatoren",
      "Senken Aktivierungsenergie",
      "Werden bei der Reaktion verbraucht",
      "Meist Proteine",
      "Substratspezifisch",
    ],
    2,
    "Enzyme werden nicht verbraucht (C falsch).",
    "leicht",
    ["Enzyme", "FALSCH"]
  ),
  q(
    "bio-pool-17-044",
    "bio-kap2",
    "Welcher Knochen gehört zum Oberschenkel?",
    ["Tibia", "Fibula", "Femur", "Humerus", "Radius"],
    2,
    "Der Femur ist der Oberschenkelknochen.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-17-045",
    "bio-kap4",
    "Was ist ein Genotyp?",
    [
      "Die sichtbare Ausprägung",
      "Die genetische Ausstattung (Allele)",
      "Ein Chromosom",
      "Umwelteigenschaft",
      "Ein Protein",
    ],
    1,
    "Genotyp = genetische Information. Phänotyp = beobachtbare Ausprägung.",
    "leicht",
    ["Genetik", "Genotyp"]
  ),
  q(
    "bio-pool-17-046",
    "bio-kap3",
    "Wann beginnt das Herz des Embryos zu schlagen?",
    ["1. Tag", "3.–4. Woche", "8. Woche", "Sofort nach Implantation", "Bei der Geburt"],
    1,
    "Das Herz beginnt in der 3.–4. Woche zu schlagen.",
    "mittel",
    ["Embryologie", "Herz"]
  ),
  q(
    "bio-pool-17-047",
    "bio-kap5",
    "Was ist ein Habitat?",
    ["Ökologische Nische", "Konkreter Lebensort einer Art", "Nahrungskette", "Biozönose", "Biotop"],
    1,
    "Habitat = konkreter Lebensraum. Nische = funktionale Rolle.",
    "mittel",
    ["Ökologie", "Habitat"]
  ),
  q(
    "bio-pool-17-048",
    "bio-kap1",
    "Wo findet die oxidative Phosphorylierung statt?",
    ["Zytosol", "Innere Mitochondrienmembran", "Zellkern", "Golgi-Apparat", "Lysosom"],
    1,
    "Die Atmungskette sitzt an der inneren Mitochondrienmembran.",
    "mittel",
    ["Stoffwechsel", "Atmungskette"]
  ),
  q(
    "bio-pool-17-049",
    "bio-kap2",
    "Welches Organ produziert Erythropoetin?",
    ["Milz", "Leber", "Niere", "Knochenmark", "Herz"],
    2,
    "EPO wird vor allem in der Niere gebildet.",
    "mittel",
    ["Hormone", "Blut"]
  ),
  q(
    "bio-pool-17-050",
    "bio-kap4",
    "Was ist eine Mutation?",
    [
      "Bewusste Änderung",
      "Dauerhafte Änderung der DNA-Sequenz",
      "Nur Phänotyp",
      "Immer Rückmutation",
      "Nur Insertion",
    ],
    1,
    "Mutation = dauerhafte Änderung im Erbgut.",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-17-051",
    "bio-kap5",
    "Was ist die Biozönose?",
    [
      "Unbelebter Lebensraum",
      "Lebensgemeinschaft aller Arten in einem Gebiet",
      "Eine Art",
      "Nahrungskette",
      "Individuum",
    ],
    1,
    "Biozönose = Lebensgemeinschaft. Biotop = unbelebter Lebensraum.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-17-052",
    "bio-kap1",
    "Welches Organell enthält Verdauungsenzyme?",
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-17-053",
    "bio-kap2",
    "Welche Aussage über die Aorta trifft zu?",
    [
      "Entspringt rechter Kammer",
      "Führt sauerstoffreiches Blut in den Körperkreislauf",
      "Mündet in rechten Vorhof",
      "Nur zur Lunge",
      "Nur eine Klappe",
    ],
    1,
    "Die Aorta entspringt der linken Kammer.",
    "leicht",
    ["Kreislauf", "Aorta"]
  ),
  q(
    "bio-pool-17-054",
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
    "Transkription = Synthese von RNA an der DNA.",
    "leicht",
    ["Genetik", "Transkription"]
  ),
  q(
    "bio-pool-17-055",
    "bio-kap3",
    "Was ist die Plazenta?",
    [
      "Eizelle",
      "Organ zum Stoffaustausch zwischen Mutter und Fetus",
      "Fruchtblase",
      "Nabelschnur",
      "Gelbkörper",
    ],
    1,
    "Die Plazenta ermöglicht Stoffaustausch und Hormonproduktion.",
    "leicht",
    ["Embryologie", "Plazenta"]
  ),
  q(
    "bio-pool-17-056",
    "bio-kap5",
    "Welche Zellen gehören zur unspezifischen Abwehr?",
    [
      "B-Lymphozyten",
      "T-Lymphozyten",
      "Neutrophile und Makrophagen",
      "Plasmazellen",
      "Gedächtniszellen",
    ],
    2,
    "Neutrophile, Makrophagen, NK-Zellen = unspezifische Abwehr.",
    "leicht",
    ["Immunologie", "Abwehr"]
  ),
  q(
    "bio-pool-17-057",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukose)?",
    ["Ein Pyruvat", "Zwei Pyruvatmoleküle", "Laktat", "Ethanol", "CO₂"],
    1,
    "Aus einem Glukosemolekül entstehen zwei Pyruvatmoleküle.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-17-058",
    "bio-kap2",
    "Wo wird Renin gebildet?",
    ["Leber", "Niere", "Nebenniere", "Hypophyse", "Herz"],
    1,
    "Renin wird in den Nieren gebildet (RAAS).",
    "mittel",
    ["Hormone", "Niere"]
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
  q(
    "bio-pool-17-060",
    "bio-kap5",
    "Was ist Symbiose (im engeren Sinn)?",
    [
      "Nur Räuber-Beute",
      "Wechselbeziehung zum gegenseitigen Vorteil",
      "Nur Parasitismus",
      "Nur Konkurrenz",
      "Nur Kommensalismus",
    ],
    1,
    "Symbiose = wechselseitiger Nutzen.",
    "mittel",
    ["Ökologie", "Symbiose"]
  ),
];
