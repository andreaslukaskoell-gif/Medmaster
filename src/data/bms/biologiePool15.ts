/**
 * Biologie BMS Pool 15 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool15: Question[] = [
  q(
    "bio-pool-15-001",
    "bio-kap1",
    "Welche Aussage über die Zellmembran trifft zu?",
    [
      "Sie ist undurchlässig",
      "Sie besteht aus Lipiddoppelschicht und Proteinen",
      "Sie enthält nur DNA",
      "Sie umgibt nur den Kern",
      "Sie hat keine Rezeptoren",
    ],
    1,
    "Das Flüssig-Mosaik-Modell: Lipiddoppelschicht mit eingelagerten Proteinen und Kohlenhydraten.",
    "leicht",
    ["Zellmembran", "Zelle"]
  ),
  q(
    "bio-pool-15-002",
    "bio-kap2",
    "Welcher Teil des Gehirns koordiniert Bewegungen und Gleichgewicht?",
    ["Großhirn", "Kleinhirn", "Thalamus", "Hypothalamus", "Medulla oblongata"],
    1,
    "Das Kleinhirn (Zerebellum) koordiniert Motorik, Gleichgewicht und Haltung.",
    "leicht",
    ["ZNS", "Gehirn"]
  ),
  q(
    "bio-pool-15-003",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Körperzelle?",
    ["23", "46", "92", "22", "44"],
    1,
    "Körperzellen sind diploid: 46 Chromosomen (23 Paare). Keimzellen haploid: 23.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-15-004",
    "bio-kap5",
    "Was sind Antikörper?",
    [
      "Nukleinsäuren",
      "Proteine (Immunglobuline), die von Plasmazellen gebildet werden",
      "Zellen",
      "Hormone",
      "Enzyme",
    ],
    1,
    "Antikörper (Immunglobuline) sind Proteine der humoralen Abwehr, gebildet von Plasmazellen.",
    "leicht",
    ["Immunologie", "Antikörper"]
  ),
  q(
    "bio-pool-15-005",
    "bio-kap1",
    "Wo findet die Translation statt?",
    [
      "Zellkern",
      "Ribosomen im Zytosol und am rauen ER",
      "Lysosom",
      "Golgi-Apparat",
      "Mitochondrium nur",
    ],
    1,
    "Translation (Proteinbiosynthese) erfolgt an Ribosomen im Zytosol bzw. am rauen ER.",
    "leicht",
    ["Genexpression", "Translation"]
  ),
  q(
    "bio-pool-15-006",
    "bio-kap2",
    "Welches Hormon senkt den Blutzucker?",
    ["Glukagon", "Insulin", "Cortisol", "Adrenalin", "Wachstumshormon"],
    1,
    "Insulin (Beta-Zellen der Bauchspeicheldrüse) senkt den Blutzucker; Glukagon erhöht ihn.",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-15-007",
    "bio-kap4",
    "Welche Basen kommen in der RNA vor?",
    ["A, T, G, C", "A, U, G, C", "nur A und T", "nur G und C", "A, T, U, C"],
    1,
    "RNA: Adenin, Uracil, Guanin, Cytosin (A, U, G, C). DNA: Thymin statt Uracil.",
    "leicht",
    ["RNA", "Genetik"]
  ),
  q(
    "bio-pool-15-008",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Epidermis?",
    ["Mesoderm", "Entoderm", "Ektoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Ektoderm → Epidermis, Hautanhangsgebilde, Nervensystem. Mesoderm → Muskulatur. Entoderm → Darm.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-15-009",
    "bio-kap2",
    "Welche Aussage über die Leber trifft NICHT zu?",
    [
      "Die Leber produziert Galle",
      "Die Leber speichert Glykogen",
      "Die Leber produziert Insulin",
      "Die Leber entgiftet",
      "Die Leber bildet Gerinnungsfaktoren",
    ],
    2,
    "Insulin wird in der Bauchspeicheldrüse gebildet, nicht in der Leber (C falsch).",
    "mittel",
    ["Leber", "FALSCH"]
  ),
  q(
    "bio-pool-15-010",
    "bio-kap5",
    "Was ist ein Produzent?",
    [
      "Ein Tier",
      "Organismus, der aus anorganischen Stoffen organische Substanz aufbaut (z. B. Pflanzen)",
      "Ein Pilz",
      "Ein Zersetzer",
      "Ein Räuber",
    ],
    1,
    "Produzenten (Pflanzen, Algen) betreiben Fotosynthese und bauen Biomasse auf.",
    "leicht",
    ["Ökologie", "Produzent"]
  ),
  q(
    "bio-pool-15-011",
    "bio-kap1",
    "Welches Organell enthält die Erbinformation?",
    ["Ribosom", "Zellkern", "Mitochondrium nur", "Lysosom", "Golgi-Apparat"],
    1,
    "Der Zellkern enthält die Hauptmenge der DNA (Erbinformation). Mitochondrien haben eigene kleine DNA.",
    "leicht",
    ["Zelle", "Zellkern"]
  ),
  q(
    "bio-pool-15-012",
    "bio-kap2",
    "Welcher Darmabschnitt hat Zotten und Krypten für die Resorption?",
    ["Colon", "Duodenum und Jejunum", "Magen", "Rektum", "Ösophagus"],
    1,
    "Dünndarm (Duodenum, Jejunum, Ileum) hat Zotten und Krypten für die Nährstoffresorption.",
    "leicht",
    ["Verdauung", "Dünndarm"]
  ),
  q(
    "bio-pool-15-013",
    "bio-kap4",
    "Was ist ein Codon?",
    [
      "Drei Basen der DNA",
      "Drei Basen der mRNA, die eine Aminosäure codieren",
      "Ein Gen",
      "Ein Ribosom",
      "Eine tRNA",
    ],
    1,
    "Ein Codon = drei Nukleotide in der mRNA; es codiert für eine Aminosäure oder Stopp.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-15-014",
    "bio-kap5",
    "Was versteht man unter „Biotop“?",
    [
      "Die Lebensgemeinschaft",
      "Der unbelebte Lebensraum",
      "Eine Art",
      "Eine Nahrungskette",
      "Ein Individuum",
    ],
    1,
    "Biotop = unbelebter Lebensraum (Boden, Wasser, Klima). Biozönose = Lebensgemeinschaft.",
    "leicht",
    ["Ökologie", "Biotop"]
  ),
  q(
    "bio-pool-15-015",
    "bio-kap1",
    "Welche Aussage über Mitochondrien trifft zu?",
    [
      "Sie haben keine DNA",
      "Sie sind der Hauptort der aeroben ATP-Produktion",
      "Sie kommen nur in Pflanzen vor",
      "Sie haben nur eine Membran",
      "Sie synthetisieren nur DNA",
    ],
    1,
    "Mitochondrien haben Doppelmembran, eigene DNA und sind Ort der oxidativen Phosphorylierung.",
    "leicht",
    ["Zelle", "Mitochondrien"]
  ),
  q(
    "bio-pool-15-016",
    "bio-kap2",
    "Wo wird Testosteron beim Mann gebildet?",
    ["Nebenniere", "Hypophyse", "Hoden", "Prostata", "Nebenhoden"],
    2,
    "Testosteron wird in den Leydig-Zellen der Hoden gebildet.",
    "leicht",
    ["Hormone", "Reproduktion"]
  ),
  q(
    "bio-pool-15-017",
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
    "Mitose: 1 Zelle → 2 genetisch gleiche Tochterzellen mit gleichem Chromosomensatz.",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-15-018",
    "bio-kap3",
    "Was ist die Blastozyste?",
    [
      "Die Eizelle",
      "Frühes Stadium mit innerer Zellmasse und Trophoblast",
      "Die Plazenta",
      "Die Gastrula",
      "Die Nabelschnur",
    ],
    1,
    "Blastozyste = Hohlkugel mit innerer Zellmasse (→ Embryo) und Trophoblast (→ Plazentaanteil).",
    "mittel",
    ["Embryologie", "Blastozyste"]
  ),
  q(
    "bio-pool-15-019",
    "bio-kap5",
    "Was ist eine Nahrungskette?",
    [
      "Alle Arten",
      "Lineare Abfolge: wer frisst wen",
      "Ein Biotop",
      "Eine Population",
      "Ein Ökosystem",
    ],
    1,
    "Nahrungskette = Produzent → Konsument(en) → Destent (Energie- und Stofffluss).",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-15-020",
    "bio-kap2",
    "Die Aorta entspringt aus:",
    ["rechter Kammer", "linker Kammer", "rechtem Vorhof", "linkem Vorhof", "Lungenarterie"],
    1,
    "Die Aorta (Körperschlagader) entspringt der linken Kammer und versorgt den Körper mit sauerstoffreichem Blut.",
    "leicht",
    ["Kreislauf", "Herz"]
  ),
  q(
    "bio-pool-15-021",
    "bio-kap1",
    "Welches Vitamin wird in der Haut unter UV-Licht gebildet?",
    ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
    3,
    "Vitamin D wird in der Haut durch UV-B-Strahlung gebildet (aus 7-Dehydrocholesterol).",
    "leicht",
    ["Vitamine", "Haut"]
  ),
  q(
    "bio-pool-15-022",
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
    "bio-pool-15-023",
    "bio-kap2",
    "Welches Epithel kleidet die Luftröhre aus?",
    ["Urothel", "Flimmerepithel", "Plattenepithel", "Verhornendes Epithel", "Übergangsepithel"],
    1,
    "Die Trachea ist von Flimmerepithel (Zilien) ausgekleidet; Schleim transportiert Partikel ab.",
    "mittel",
    ["Gewebe", "Atmung"]
  ),
  q(
    "bio-pool-15-024",
    "bio-kap5",
    "Was sind T-Killerzellen?",
    [
      "B-Lymphozyten",
      "Zytotoxische T-Zellen, die virusinfizierte Zellen abtöten können",
      "Plasmazellen",
      "Makrophagen",
      "NK-Zellen nur",
    ],
    1,
    "T-Killerzellen (zytotoxische T-Zellen) erkennen infizierte Zellen über MHC-I und töten sie ab.",
    "mittel",
    ["Immunologie", "T-Zellen"]
  ),
  q(
    "bio-pool-15-025",
    "bio-kap1",
    "Wo findet die Transkription statt?",
    ["Zytosol", "Zellkern", "Mitochondrium nur", "Golgi-Apparat", "Zellmembran"],
    1,
    "Transkription (DNA → RNA) erfolgt im Zellkern. Translation im Zytosol.",
    "leicht",
    ["Genexpression", "Transkription"]
  ),
  q(
    "bio-pool-15-026",
    "bio-kap2",
    "Welches Hormon stimuliert die Schilddrüse?",
    ["T3", "T4", "TSH", "Calcitonin", "Parathormon"],
    2,
    "TSH (Thyreoidea-stimulierendes Hormon) aus der Hypophyse stimuliert die Schilddrüse.",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-15-027",
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
    "Meiose: zwei Teilungen, Reduktion von 2n auf n, Bildung von Gameten. Crossing-over in Prophase I.",
    "leicht",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-15-028",
    "bio-kap3",
    "Wann ist die Organogenese weitgehend abgeschlossen?",
    ["Ende 2. Woche", "Ende 4. Woche", "Ende 8. Woche", "Ende 12. Woche", "Bei der Geburt"],
    2,
    "Nach der 8. Woche sind die Organanlagen angelegt; ab dann spricht man vom Fetus.",
    "mittel",
    ["Embryologie", "Organogenese"]
  ),
  q(
    "bio-pool-15-029",
    "bio-kap5",
    "Was sind Gedächtniszellen?",
    [
      "Erythrozyten",
      "Lymphozyten für schnellere Reaktion bei erneutem Antigenkontakt",
      "Thrombozyten",
      "Mastzellen",
      "Granulozyten",
    ],
    1,
    "B- und T-Gedächtniszellen ermöglichen bei erneutem Kontakt eine schnellere Immunantwort.",
    "mittel",
    ["Immunologie", "Gedächtniszellen"]
  ),
  q(
    "bio-pool-15-030",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft zu?",
    [
      "Sie findet nur in Mitochondrien statt",
      "Sie liefert netto 2 ATP pro Glukose",
      "Sie produziert FADH2",
      "Sie benötigt Sauerstoff",
      "Sie baut Fettsäuren ab",
    ],
    1,
    "Glykolyse: Glukose → 2 Pyruvat, netto 2 ATP, 2 NADH; im Zytosol, ohne O2.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-15-031",
    "bio-kap2",
    "Welche Vene führt sauerstoffreiches Blut zum Herzen?",
    ["Lungenarterie", "Aorta", "Obere Hohlvene", "Lungenvene", "Pfortader"],
    3,
    "Die Lungenvenen führen sauerstoffreiches Blut aus der Lunge zum linken Vorhof.",
    "leicht",
    ["Kreislauf", "Blutgefäße"]
  ),
  q(
    "bio-pool-15-032",
    "bio-kap4",
    "Was bedeutet „heterozygot“?",
    [
      "Zwei gleiche Allele",
      "Zwei verschiedene Allele an einem Genort",
      "Haploid",
      "Keine Allele",
      "Rezessiv",
    ],
    1,
    "Heterozygot = zwei verschiedene Allele (z. B. Aa). Homozygot = gleiche Allele (AA oder aa).",
    "leicht",
    ["Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-15-033",
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
    "Habitat = konkreter Lebensraum. Nische = funktionale Rolle der Art.",
    "mittel",
    ["Ökologie", "Habitat"]
  ),
  q(
    "bio-pool-15-034",
    "bio-kap1",
    "Welches Organell verpackt Proteine für den Export?",
    ["Ribosom", "Lysosom", "Golgi-Apparat", "Peroxisom", "Zellkern"],
    2,
    "Der Golgi-Apparat modifiziert und verpackt Proteine für Sekretion oder Lysosomen.",
    "leicht",
    ["Zelle", "Golgi"]
  ),
  q(
    "bio-pool-15-035",
    "bio-kap2",
    "Welche Aussage über die Niere trifft NICHT zu?",
    [
      "Die Niere filtert das Blut",
      "Die Niere produziert EPO",
      "Die Niere produziert Renin",
      "Die Niere produziert Gallensäuren",
      "Die Niere bildet Harn",
    ],
    3,
    "Gallensäuren werden in der Leber gebildet, nicht in der Niere (D falsch).",
    "mittel",
    ["Niere", "FALSCH"]
  ),
  q(
    "bio-pool-15-036",
    "bio-kap4",
    "In welcher Phase der Mitose kondensieren die Chromosomen?",
    ["Metaphase", "Prophase", "Anaphase", "Telophase", "Interphase"],
    1,
    "In der Prophase kondensieren die Chromosomen und werden unter dem Mikroskop sichtbar.",
    "leicht",
    ["Mitose", "Zellzyklus"]
  ),
  q(
    "bio-pool-15-037",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Muskulatur?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Amnion"],
    2,
    "Mesoderm → Skelettmuskulatur, Herzmuskel, glatte Muskulatur.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-15-038",
    "bio-kap5",
    "Was ist die Biozönose?",
    [
      "Der unbelebte Lebensraum",
      "Die Lebensgemeinschaft aller Arten in einem Gebiet",
      "Eine Art",
      "Eine Nahrungskette",
      "Ein Individuum",
    ],
    1,
    "Biozönose = Lebensgemeinschaft. Biotop = unbelebter Lebensraum.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-15-039",
    "bio-kap1",
    "Welches Organell enthält Verdauungsenzyme?",
    ["Ribosom", "Mitochondrium", "Lysosom", "Zellkern", "Golgi-Apparat"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme und bauen Makromoleküle ab.",
    "leicht",
    ["Zelle", "Lysosomen"]
  ),
  q(
    "bio-pool-15-040",
    "bio-kap2",
    "Wo wird Aldosteron gebildet?",
    ["Nebennierenmark", "Nebennierenrinde", "Niere", "Hypophyse", "Schilddrüse"],
    1,
    "Aldosteron (Mineralokortikoid) wird in der Nebennierenrinde gebildet (Natrium-Kalium-Haushalt, Blutdruck).",
    "mittel",
    ["Hormone", "Nebenniere"]
  ),
  q(
    "bio-pool-15-041",
    "bio-kap4",
    "Was ist ein Allel?",
    [
      "Ein Chromosom",
      "Eine Variante eines Gens an einem Genort",
      "Ein Genom",
      "Eine Mutation",
      "Ein Phänotyp",
    ],
    1,
    "Allele sind verschiedene Ausprägungen eines Gens (z. B. A und a).",
    "leicht",
    ["Genetik", "Allel"]
  ),
  q(
    "bio-pool-15-042",
    "bio-kap5",
    "Was sind Destenten?",
    ["Produzenten", "Konsumenten", "Zersetzer", "Räuber", "Pflanzenfresser"],
    2,
    "Destenten (Pilze, Bakterien) bauen tote organische Substanz ab.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-15-043",
    "bio-kap1",
    "Welche Aussage über das raue ER trifft zu?",
    [
      "Es hat keine Ribosomen",
      "Es ist an der Synthese von Membran- und Sekretproteinen beteiligt",
      "Es kommt nur in Pflanzen vor",
      "Es enthält die DNA",
      "Es baut Proteine ab",
    ],
    1,
    "Das raue ER ist mit Ribosomen besetzt und synthetisiert Proteine für Export und Membranen.",
    "mittel",
    ["Zelle", "ER"]
  ),
  q(
    "bio-pool-15-044",
    "bio-kap2",
    "Welcher Knochen gehört zum Unterarm?",
    ["Humerus", "Femur", "Radius", "Tibia", "Fibula"],
    2,
    "Radius und Ulna sind die Unterarmknochen. Humerus = Oberarm.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-15-045",
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
    "Translation = Übersetzung der mRNA in eine Aminosäuresequenz (Protein) an den Ribosomen.",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-15-046",
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
    "Die Nabelschnur enthält Nabelvene und Nabelarterien und verbindet Fetus und Plazenta.",
    "leicht",
    ["Embryologie", "Nabelschnur"]
  ),
  q(
    "bio-pool-15-047",
    "bio-kap5",
    "Was sind natürliche Killerzellen?",
    [
      "B-Lymphozyten",
      "T-Lymphozyten",
      "Lymphozyten der unspezifischen Abwehr, die infizierte Zellen abtöten können",
      "Erythrozyten",
      "Thrombozyten",
    ],
    2,
    "NK-Zellen gehören zur angeborenen Abwehr und können virusinfizierte oder entartete Zellen abtöten.",
    "mittel",
    ["Immunologie", "NK-Zellen"]
  ),
  q(
    "bio-pool-15-048",
    "bio-kap1",
    "Wo findet die oxidative Phosphorylierung statt?",
    ["Zytosol", "Innere Mitochondrienmembran", "Zellkern", "Golgi-Apparat", "Lysosom"],
    1,
    "Die Atmungskette (oxidative Phosphorylierung) sitzt an der inneren Mitochondrienmembran.",
    "mittel",
    ["Stoffwechsel", "Atmungskette"]
  ),
  q(
    "bio-pool-15-049",
    "bio-kap2",
    "Welches Hormon erhöht den Blutzucker?",
    ["Insulin", "Glukagon", "Somatostatin", "Östrogen", "Calcitonin"],
    1,
    "Glukagon (Alpha-Zellen der Bauchspeicheldrüse) erhöht den Blutzucker (Glykogenabbau, Gluconeogenese).",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-15-050",
    "bio-kap4",
    "Was ist eine Mutation?",
    [
      "Bewusste Änderung",
      "Dauerhafte Änderung der DNA-Sequenz",
      "Nur Phänotyp-Änderung",
      "Immer Rückmutation",
      "Nur Insertion",
    ],
    1,
    "Mutation = dauerhafte Änderung im Erbgut (DNA).",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-15-051",
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
    "Konsumenten ernähren sich von anderen Organismen (Herbivoren, Karnivoren, Omnivoren).",
    "leicht",
    ["Ökologie", "Konsument"]
  ),
  q(
    "bio-pool-15-052",
    "bio-kap1",
    "Was ist das Endprodukt der Glykolyse (pro Glukose)?",
    ["Ein Pyruvat", "Zwei Pyruvatmoleküle", "Laktat", "Ethanol", "CO₂"],
    1,
    "Aus einem Glukosemolekül entstehen bei der Glykolyse zwei Pyruvatmoleküle.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-15-053",
    "bio-kap2",
    "Welches Organ produziert Pepsin?",
    ["Dünndarm", "Bauchspeicheldrüse", "Magen", "Leber", "Speicheldrüse"],
    2,
    "Pepsin wird als Pepsinogen im Magen gebildet und spaltet Proteine.",
    "leicht",
    ["Verdauung", "Magen"]
  ),
  q(
    "bio-pool-15-054",
    "bio-kap4",
    "Was ist die Replikation?",
    ["Transkription", "Verdopplung der DNA", "Translation", "Spleißen", "Mutation"],
    1,
    "Replikation = Verdopplung der DNA in der S-Phase vor der Zellteilung.",
    "leicht",
    ["Genetik", "Replikation"]
  ),
  q(
    "bio-pool-15-055",
    "bio-kap3",
    "Was ist die Plazenta?",
    [
      "Die Eizelle",
      "Organ zum Stoffaustausch zwischen Mutter und Fetus",
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
    "bio-pool-15-056",
    "bio-kap5",
    "Was ist die ökologische Nische?",
    [
      "Der konkrete Lebensort",
      "Die Gesamtheit der abiotischen und biotischen Faktoren, die eine Art nutzt bzw. erfordert",
      "Eine Nahrungskette",
      "Ein Biotop",
      "Eine Population",
    ],
    1,
    "Die Nische beschreibt die „Rolle“ einer Art (Ressourcen, Lebensweise). Habitat = konkreter Ort.",
    "mittel",
    ["Ökologie", "Nische"]
  ),
  q(
    "bio-pool-15-057",
    "bio-kap1",
    "Welches Organell baut Wasserstoffperoxid ab?",
    ["Lysosom", "Ribosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    2,
    "Peroxisomen enthalten Katalase und bauen H₂O₂ zu Wasser und Sauerstoff ab.",
    "mittel",
    ["Zelle", "Peroxisomen"]
  ),
  q(
    "bio-pool-15-058",
    "bio-kap2",
    "Wo münden die Ureteren ein?",
    [
      "In die Harnröhre",
      "In die Harnblase",
      "In die Niere",
      "In die Nebenniere",
      "Direkt aus der Niere in die Urethra",
    ],
    1,
    "Die Harnleiter (Ureteren) münden in die Harnblase. Die Harnröhre führt von der Blase nach außen.",
    "leicht",
    ["Niere", "Anatomie"]
  ),
  q(
    "bio-pool-15-059",
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
    "bio-pool-15-060",
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
    "Symbiose = wechselseitiger Nutzen (z. B. Mykorrhiza, Flechten).",
    "mittel",
    ["Ökologie", "Symbiose"]
  ),
];
