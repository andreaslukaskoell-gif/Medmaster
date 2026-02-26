/**
 * Biologie BMS Pool 19 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool19: Question[] = [
  q(
    "bio-pool-19-001",
    "bio-kap1",
    "Welche Basenpaarung kommt in der DNA vor?",
    ["A-U und G-C", "A-T und G-C", "A-G und T-C", "nur A-T", "nur G-C"],
    1,
    "In der DNA: A-T und G-C.",
    "leicht",
    ["DNA", "Genetik"]
  ),
  q(
    "bio-pool-19-002",
    "bio-kap2",
    "Welches Organ filtert das Blut und bildet Harn?",
    ["Leber", "Milz", "Niere", "Bauchspeicheldrüse", "Gallenblase"],
    2,
    "Die Niere filtert das Blut und bildet Harn.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-19-003",
    "bio-kap4",
    "Was ist ein Exon?",
    [
      "Nicht codierender Abschnitt",
      "Codierender Abschnitt in der reifen mRNA",
      "Intron",
      "Ribosom",
      "Stopp-Codon",
    ],
    1,
    "Exons bleiben nach dem Spleißen in der mRNA.",
    "mittel",
    ["Genetik", "Genexpression"]
  ),
  q(
    "bio-pool-19-004",
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
    "bio-pool-19-005",
    "bio-kap1",
    "Welche Aussage über die Zellteilung trifft zu?",
    [
      "Mitose erzeugt vier Zellen",
      "Mitose erhält die Chromosomenzahl",
      "Crossing-over bei Mitose",
      "Meiose dient dem Wachstum",
      "Mitose halbiert Chromosomenzahl",
    ],
    1,
    "Mitose: 1 → 2 Zellen mit gleicher Chromosomenzahl.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-19-006",
    "bio-kap2",
    "Welches Hormon wird in der Schilddrüse gebildet?",
    ["Insulin", "Cortisol", "T3 und T4", "Adrenalin", "Östrogen"],
    2,
    "Die Schilddrüse produziert T3 und T4.",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-19-007",
    "bio-kap4",
    "Was ist die Replikation?",
    [
      "Übersetzung von RNA in Protein",
      "Verdopplung der DNA",
      "Transkription",
      "Spleißen",
      "Mutation",
    ],
    1,
    "Replikation = Verdopplung der DNA (S-Phase).",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-19-008",
    "bio-kap3",
    "Was ist die Morula?",
    ["Eizelle", "Kugeliger Zellhaufen nach Teilungen", "Blastozyste", "Gastrula", "Plazenta"],
    1,
    "Morula = kugeliger Zellhaufen (ca. 16–32 Zellen).",
    "mittel",
    ["Embryologie", "Morula"]
  ),
  q(
    "bio-pool-19-009",
    "bio-kap2",
    "Welche Aussage über die Speicheldrüsen trifft NICHT zu?",
    [
      "Produzieren Speichel",
      "Speichel enthält Amylase",
      "Produzieren Pepsin",
      "Speichel befeuchtet",
      "Mehrere Speicheldrüsen",
    ],
    2,
    "Pepsin wird im Magen gebildet (C falsch).",
    "leicht",
    ["Verdauung", "FALSCH"]
  ),
  q(
    "bio-pool-19-010",
    "bio-kap5",
    "Was ist ein Biotop?",
    ["Lebensgemeinschaft", "Unbelebter Lebensraum", "Eine Art", "Nahrungskette", "Individuum"],
    1,
    "Biotop = unbelebter Lebensraum.",
    "leicht",
    ["Ökologie", "Biotop"]
  ),
  q(
    "bio-pool-19-011",
    "bio-kap1",
    "Welches Organell ist Ort der Proteinbiosynthese?",
    ["Zellkern", "Ribosom", "Lysosom", "Golgi-Apparat", "Mitochondrium"],
    1,
    "Ribosomen katalysieren die Translation.",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-19-012",
    "bio-kap2",
    "Welcher Teil des Auges bricht das Licht?",
    ["Netzhaut", "Iris", "Linse", "Hornhaut nur", "Glaskörper"],
    2,
    "Die Linse bricht das Licht und ermöglicht Akkommodation.",
    "leicht",
    ["Auge", "Sinnesorgane"]
  ),
  q(
    "bio-pool-19-013",
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
    "Dominant: ein betroffenes Allel reicht.",
    "leicht",
    ["Genetik", "dominant"]
  ),
  q(
    "bio-pool-19-014",
    "bio-kap5",
    "Was sind Prädatoren?",
    ["Pflanzenfresser", "Räuber", "Zersetzer", "Produzenten", "Parasiten"],
    1,
    "Prädatoren sind Räuber.",
    "leicht",
    ["Ökologie", "Nahrungsbeziehungen"]
  ),
  q(
    "bio-pool-19-015",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft NICHT zu?",
    ["Doppelmembran", "ATP-Produktion", "Eigene DNA", "Nur in Tieren", "Atmungskette"],
    3,
    "Mitochondrien kommen auch in Pflanzen vor (D falsch).",
    "leicht",
    ["Zelle", "FALSCH"]
  ),
  q(
    "bio-pool-19-016",
    "bio-kap2",
    "Wo wird Östrogen gebildet?",
    ["Hypophyse", "Nebenniere", "Eierstock", "Plazenta nur", "Schilddrüse"],
    2,
    "Östrogen wird vor allem in den Eierstöcken gebildet.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-19-017",
    "bio-kap4",
    "Was ist eine Insertion?",
    [
      "Verlust von DNA",
      "Einbau zusätzlicher Basen",
      "Nur Punktmutation",
      "Umlagerung",
      "Reparatur",
    ],
    1,
    "Bei einer Insertion werden Basen eingefügt.",
    "mittel",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-19-018",
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
    "Implantation = Blastozyste nistet sich ins Endometrium ein.",
    "leicht",
    ["Embryologie", "Implantation"]
  ),
  q(
    "bio-pool-19-019",
    "bio-kap5",
    "Was ist ein Ökosystem?",
    [
      "Nur unbelebt",
      "Nur Lebensgemeinschaft",
      "Einheit aus Biotop und Biozönose",
      "Eine Art",
      "Nahrungskette",
    ],
    2,
    "Ökosystem = Biotop + Biozönose.",
    "leicht",
    ["Ökologie", "Ökosystem"]
  ),
  q(
    "bio-pool-19-020",
    "bio-kap2",
    "Welche Vene führt Blut aus dem Kopf zum Herzen?",
    ["Pfortader", "Obere Hohlvene", "Lungenvene", "Aorta", "Nierenvene"],
    1,
    "Obere Hohlvene sammelt Blut aus Kopf und Armen.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-19-021",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft zu?",
    [
      "Für alle durchlässig",
      "Semipermeabel",
      "Nur Kohlenhydrate",
      "Keine Rezeptoren",
      "Umgibt nur Kern",
    ],
    1,
    "Die Zellmembran ist semipermeabel.",
    "leicht",
    ["Zellmembran", "Zelle"]
  ),
  q(
    "bio-pool-19-022",
    "bio-kap4",
    "Was ist die Meiose?",
    [
      "Nur in Körperzellen",
      "Reduktionsteilung für Keimzellen",
      "Gleich wie Mitose",
      "Nur eine Teilung",
      "Ohne Crossing-over",
    ],
    1,
    "Meiose: Reduktion 2n → n, Bildung von Gameten.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-19-023",
    "bio-kap2",
    "Welcher Darmabschnitt schließt an den Magen an?",
    ["Jejunum", "Ileum", "Duodenum", "Colon", "Rektum"],
    2,
    "Duodenum (Zwölffingerdarm) schließt an den Magen an.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-19-024",
    "bio-kap5",
    "Welche Aussage zu Antigenen trifft zu?",
    [
      "Nur von T-Zellen",
      "Können Immunantwort auslösen",
      "Immer körpereigen",
      "Keine Kreuzreaktionen",
      "Immer Proteine",
    ],
    1,
    "Antigene werden erkannt und lösen eine Antwort aus.",
    "leicht",
    ["Immunologie", "Antigen"]
  ),
  q(
    "bio-pool-19-025",
    "bio-kap1",
    "Wo wird bei der Zellatmung der meiste ATP gebildet?",
    ["Glykolyse", "Atmungskette", "Citratzyklus direkt", "Gärung", "Zytosol"],
    1,
    "Der meiste ATP entsteht in der Atmungskette.",
    "mittel",
    ["Stoffwechsel", "Zellatmung"]
  ),
  q(
    "bio-pool-19-026",
    "bio-kap2",
    "Welches Hormon senkt den Calciumspiegel?",
    ["Parathormon", "Calcitonin", "Vitamin D", "Aldosteron", "Cortisol"],
    1,
    "Calcitonin (Schilddrüse) senkt den Calciumspiegel.",
    "mittel",
    ["Hormone", "Calcium"]
  ),
  q(
    "bio-pool-19-027",
    "bio-kap4",
    "Was ist ein Gen?",
    [
      "Chromosom",
      "DNA-Abschnitt mit Information für Merkmal oder Genprodukt",
      "Protein",
      "RNA-Art",
      "Organell",
    ],
    1,
    "Ein Gen codiert für ein Merkmal oder Genprodukt.",
    "leicht",
    ["Genetik", "Gen"]
  ),
  q(
    "bio-pool-19-028",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Skelett?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Mesoderm → Skelett, Muskulatur, Bindegewebe.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-19-029",
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
    "Gedächtniszellen ermöglichen schnellere Immunantwort.",
    "mittel",
    ["Immunologie", "Gedächtniszellen"]
  ),
  q(
    "bio-pool-19-030",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft NICHT zu?",
    ["Im Zytosol", "Ohne Sauerstoff", "Liefert Pyruvat", "Nur in Mitochondrien", "Netto 2 ATP"],
    3,
    "Glykolyse findet im Zytosol statt (D falsch).",
    "mittel",
    ["Stoffwechsel", "FALSCH"]
  ),
  q(
    "bio-pool-19-031",
    "bio-kap2",
    "Welcher Gehirnbereich regelt Hunger und Durst?",
    ["Kleinhirn", "Hypothalamus", "Großhirnrinde", "Thalamus", "Pons"],
    1,
    "Der Hypothalamus regelt Hunger, Durst, Temperatur.",
    "leicht",
    ["ZNS", "Hypothalamus"]
  ),
  q(
    "bio-pool-19-032",
    "bio-kap4",
    "Was ist ein Phänotyp?",
    [
      "Genetische Ausstattung",
      "Sichtbare bzw. messbare Ausprägung",
      "Chromosom",
      "Allel",
      "Summe aller Gene",
    ],
    1,
    "Phänotyp = beobachtbare Merkmale.",
    "leicht",
    ["Genetik", "Phänotyp"]
  ),
  q(
    "bio-pool-19-033",
    "bio-kap5",
    "Was ist eine Nahrungskette?",
    ["Alle Arten", "Lineare Abfolge: wer frisst wen", "Biotop", "Population", "Individuum"],
    1,
    "Nahrungskette = Produzent → Konsument → Destent.",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-19-034",
    "bio-kap1",
    "Welches Vitamin ist für die Blutgerinnung wichtig?",
    ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B1"],
    3,
    "Vitamin K ist Kofaktor für Gerinnungsfaktoren.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-19-035",
    "bio-kap2",
    "Welche Aussage über die Milz trifft zu?",
    [
      "Produziert Galle",
      "Lymphatisches Organ, filtert gealterte Erythrozyten",
      "Produziert Insulin",
      "Liegt rechts",
      "Verdauungstrakt",
    ],
    1,
    "Die Milz filtert alte Erythrozyten.",
    "leicht",
    ["Milz", "Immunologie"]
  ),
  q(
    "bio-pool-19-036",
    "bio-kap4",
    "In welcher Phase der Mitose teilt sich das Zytoplasma?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase und Cytokinese", "Interphase"],
    3,
    "Telophase/Cytokinese: Zytoplasma teilt sich.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-19-037",
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
    "bio-pool-19-038",
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
    "Population = alle Individuen einer Art in einem Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-19-039",
    "bio-kap1",
    "Welches Organell baut Wasserstoffperoxid ab?",
    ["Lysosom", "Ribosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    2,
    "Peroxisomen enthalten Katalase.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-19-040",
    "bio-kap2",
    "Welches Hormon stimuliert die Kontraktion der Gebärmutter?",
    ["Prolactin", "Oxytocin", "Progesteron", "FSH", "Östrogen"],
    1,
    "Oxytocin fördert die Wehen.",
    "leicht",
    ["Hormone", "Oxytocin"]
  ),
  q(
    "bio-pool-19-041",
    "bio-kap4",
    "Was ist die DNA-Replikation?",
    ["Transkription", "Verdopplung der DNA", "Translation", "Spleißen", "Mutation"],
    1,
    "Replikation = Verdopplung der DNA.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-19-042",
    "bio-kap5",
    "Was sind Destenten?",
    ["Produzenten", "Konsumenten", "Zersetzer", "Räuber", "Pflanzenfresser"],
    2,
    "Destenten bauen tote organische Substanz ab.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-19-043",
    "bio-kap1",
    "Welche Aussage über Enzyme trifft NICHT zu?",
    [
      "Biokatalysatoren",
      "Senken Aktivierungsenergie",
      "Werden verbraucht",
      "Meist Proteine",
      "Substratspezifisch",
    ],
    2,
    "Enzyme werden nicht verbraucht (C falsch).",
    "leicht",
    ["Enzyme", "FALSCH"]
  ),
  q(
    "bio-pool-19-044",
    "bio-kap2",
    "Welcher Knochen gehört zum Oberschenkel?",
    ["Tibia", "Fibula", "Femur", "Humerus", "Radius"],
    2,
    "Der Femur ist der Oberschenkelknochen.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-19-045",
    "bio-kap4",
    "Was ist ein Genotyp?",
    [
      "Sichtbare Ausprägung",
      "Genetische Ausstattung (Allele)",
      "Chromosom",
      "Umwelteigenschaft",
      "Protein",
    ],
    1,
    "Genotyp = genetische Information.",
    "leicht",
    ["Genetik", "Genotyp"]
  ),
  q(
    "bio-pool-19-046",
    "bio-kap3",
    "Wann beginnt das Herz des Embryos zu schlagen?",
    ["1. Tag", "3.–4. Woche", "8. Woche", "Sofort nach Implantation", "Bei der Geburt"],
    1,
    "Das Herz beginnt in der 3.–4. Woche zu schlagen.",
    "mittel",
    ["Embryologie", "Herz"]
  ),
  q(
    "bio-pool-19-047",
    "bio-kap5",
    "Was ist ein Habitat?",
    ["Ökologische Nische", "Konkreter Lebensort einer Art", "Nahrungskette", "Biozönose", "Biotop"],
    1,
    "Habitat = konkreter Lebensraum.",
    "mittel",
    ["Ökologie", "Habitat"]
  ),
  q(
    "bio-pool-19-048",
    "bio-kap1",
    "Wo findet die oxidative Phosphorylierung statt?",
    ["Zytosol", "Innere Mitochondrienmembran", "Zellkern", "Golgi-Apparat", "Lysosom"],
    1,
    "Die Atmungskette sitzt an der inneren Mitochondrienmembran.",
    "mittel",
    ["Stoffwechsel", "Atmungskette"]
  ),
  q(
    "bio-pool-19-049",
    "bio-kap2",
    "Welches Organ produziert Erythropoetin?",
    ["Milz", "Leber", "Niere", "Knochenmark", "Herz"],
    2,
    "EPO wird vor allem in der Niere gebildet.",
    "mittel",
    ["Hormone", "Blut"]
  ),
  q(
    "bio-pool-19-050",
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
    "bio-pool-19-051",
    "bio-kap5",
    "Was ist die Biozönose?",
    [
      "Unbelebter Lebensraum",
      "Lebensgemeinschaft aller Arten",
      "Eine Art",
      "Nahrungskette",
      "Individuum",
    ],
    1,
    "Biozönose = Lebensgemeinschaft.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-19-052",
    "bio-kap1",
    "Welches Organell enthält Verdauungsenzyme?",
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-19-053",
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
    "bio-pool-19-054",
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
    "Transkription = DNA → RNA.",
    "leicht",
    ["Genetik", "Transkription"]
  ),
  q(
    "bio-pool-19-055",
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
    "Die Plazenta ermöglicht Stoffaustausch.",
    "leicht",
    ["Embryologie", "Plazenta"]
  ),
  q(
    "bio-pool-19-056",
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
    "Neutrophile, Makrophagen, NK-Zellen = unspezifisch.",
    "leicht",
    ["Immunologie", "Abwehr"]
  ),
  q(
    "bio-pool-19-057",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukose)?",
    ["Ein Pyruvat", "Zwei Pyruvatmoleküle", "Laktat", "Ethanol", "CO₂"],
    1,
    "Aus einem Glukosemolekül entstehen zwei Pyruvatmoleküle.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-19-058",
    "bio-kap2",
    "Wo wird Renin gebildet?",
    ["Leber", "Niere", "Nebenniere", "Hypophyse", "Herz"],
    1,
    "Renin wird in den Nieren gebildet.",
    "mittel",
    ["Hormone", "Niere"]
  ),
  q(
    "bio-pool-19-059",
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
    "bio-pool-19-060",
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
