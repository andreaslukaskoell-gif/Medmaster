/**
 * Biologie BMS Pool 12 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
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

export const biologiePool12: Question[] = [
  q(
    "bio-pool-12-001",
    "bio-kap1",
    "Wo findet die Translation statt?",
    ["Zellkern", "Zytosol und raues ER", "Mitochondrium", "Lysosom", "Golgi-Apparat"],
    1,
    "Translation (Proteinbiosynthese) erfolgt an Ribosomen im Zytosol bzw. am rauen ER.",
    "leicht",
    ["Genexpression", "Translation"]
  ),
  q(
    "bio-pool-12-002",
    "bio-kap2",
    "Welches Vitamin ist für die Blutgerinnung wichtig?",
    ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"],
    3,
    "Vitamin K ist Kofaktor für die Synthese von Gerinnungsfaktoren (z. B. Prothrombin) in der Leber.",
    "mittel",
    ["Vitamine", "Blut"]
  ),
  q(
    "bio-pool-12-003",
    "bio-kap4",
    "Was versteht man unter einem Codon?",
    [
      "Drei aufeinanderfolgende Basen der DNA",
      "Drei aufeinanderfolgende Basen der mRNA, die eine Aminosäure codieren",
      "Ein ganzes Gen",
      "Ein Ribosom",
      "Ein tRNA-Molekül",
    ],
    1,
    "Ein Codon sind drei aufeinanderfolgende Nukleotide in der mRNA; es codiert für eine Aminosäure (oder Stopp).",
    "leicht",
    ["Genetik", "Translation"]
  ),
  q(
    "bio-pool-12-004",
    "bio-kap2",
    "Welcher Muskel ist der kräftigste Beuger des Ellenbogengelenks?",
    ["M. triceps brachii", "M. biceps brachii", "M. deltoideus", "M. brachialis", "M. supinator"],
    3,
    "Der M. brachialis ist der stärkste Beuger des Ellenbogens. Der M. biceps brachii wirkt ebenfalls als Beuger.",
    "mittel",
    ["Anatomie", "Muskulatur"]
  ),
  q(
    "bio-pool-12-005",
    "bio-kap5",
    "Welche Zellen präsentieren Antigene über MHC-II?",
    [
      "Erythrozyten",
      "Thrombozyten",
      "B-Lymphozyten und Makrophagen",
      "Eosinophile",
      "Natürliche Killerzellen",
    ],
    2,
    "MHC-II wird von antigenpräsentierenden Zellen (APZ) exprimiert: B-Zellen, Makrophagen, dendritische Zellen.",
    "mittel",
    ["Immunologie", "MHC"]
  ),
  q(
    "bio-pool-12-006",
    "bio-kap1",
    "Welche Aussage über die Glykolyse trifft zu?",
    [
      "Sie findet nur in Mitochondrien statt",
      "Sie benötigt Sauerstoff",
      "Sie liefert netto 2 ATP pro Glukose",
      "Sie produziert FADH2",
      "Sie baut Fettsäuren ab",
    ],
    2,
    "Glykolyse: Glukose → 2 Pyruvat, netto 2 ATP, 2 NADH; läuft im Zytosol, ohne O2.",
    "mittel",
    ["Stoffwechsel", "Glykolyse"]
  ),
  q(
    "bio-pool-12-007",
    "bio-kap2",
    "Wo wird das Hormon Cortisol gebildet?",
    ["Nebennierenmark", "Nebennierenrinde", "Hypophyse", "Schilddrüse", "Bauchspeicheldrüse"],
    1,
    "Cortisol (Glukokortikoid) wird in der Zona fasciculata der Nebennierenrinde gebildet.",
    "leicht",
    ["Hormone", "Nebenniere"]
  ),
  q(
    "bio-pool-12-008",
    "bio-kap4",
    "Was ist ein Intron?",
    [
      "Ein codierender Abschnitt der DNA",
      "Ein nicht codierender Abschnitt, der bei der RNA-Verarbeitung entfernt wird",
      "Ein Protein",
      "Eine tRNA",
      "Ein Ribosom",
    ],
    1,
    "Intron = Abschnitt in der DNA/primären RNA, der beim Spleißen herausgeschnitten wird. Exons bleiben erhalten.",
    "mittel",
    ["Genetik", "Genexpression"]
  ),
  q(
    "bio-pool-12-009",
    "bio-kap2",
    "Welche Aussage über die Leber trifft NICHT zu?",
    [
      "Die Leber speichert Glykogen",
      "Die Leber entgiftet viele Substanzen",
      "Die Leber produziert Galle",
      "Die Leber produziert Insulin",
      "Die Leber ist an der Synthese von Gerinnungsfaktoren beteiligt",
    ],
    3,
    "Insulin wird in den Beta-Zellen der Bauchspeicheldrüse gebildet, nicht in der Leber (D falsch).",
    "mittel",
    ["Leber", "FALSCH"]
  ),
  q(
    "bio-pool-12-010",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht die Muskulatur?",
    ["Ektoderm", "Entoderm", "Mesoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Mesoderm → Skelettmuskulatur, Herzmuskel, glatte Muskulatur. Ektoderm → Nerven; Entoderm → Darmepithel.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-12-011",
    "bio-kap5",
    "Was ist ein Antigen?",
    [
      "Ein Antikörper",
      "Eine Substanz, die eine spezifische Immunantwort auslösen kann",
      "Ein Hormon",
      "Ein Enzym",
      "Eine Zellmembran",
    ],
    1,
    "Antigene sind Strukturen (z. B. auf Pathogenen), die vom Immunsystem erkannt werden und eine Antwort auslösen.",
    "leicht",
    ["Immunologie", "Antigen"]
  ),
  q(
    "bio-pool-12-012",
    "bio-kap1",
    "Welches Organell ist für die Synthese von Lipiden und Entgiftung zuständig?",
    ["Ribosom", "Raues ER", "Glattes ER", "Lysosom", "Peroxisom"],
    2,
    "Das glatte ER synthetisiert Lipide (z. B. Steroide) und ist an der Entgiftung beteiligt.",
    "mittel",
    ["Zelle", "ER"]
  ),
  q(
    "bio-pool-12-013",
    "bio-kap2",
    "Welcher Knochen bildet das Dach der Augenhöhle?",
    ["Nasenbein", "Jochbein", "Stirnbein", "Oberkiefer", "Schläfenbein"],
    2,
    "Das Stirnbein (Os frontale) bildet u. a. das Dach der Orbita.",
    "mittel",
    ["Skelett", "Schädel"]
  ),
  q(
    "bio-pool-12-014",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Keimzelle (haploid)?",
    ["46", "23", "92", "22", "44"],
    1,
    "Keimzellen (Spermien, Eizellen) sind haploid: 23 Chromosomen.",
    "leicht",
    ["Genetik", "Chromosomen"]
  ),
  q(
    "bio-pool-12-015",
    "bio-kap2",
    "Welches Hormon stimuliert die Schilddrüse?",
    ["T3", "T4", "TSH", "TRH nur indirekt", "Calcitonin"],
    2,
    "TSH (Thyreoidea-stimulierendes Hormon) aus dem Hypophysenvorderlappen stimuliert die Schilddrüse.",
    "leicht",
    ["Hormone", "Schilddrüse"]
  ),
  q(
    "bio-pool-12-016",
    "bio-kap1",
    "Was ist das Hauptprodukt des Citratzyklus (pro Durchlauf)?",
    ["Glukose", "Pyruvat", "NADH, FADH2, GTP", "Laktat", "Ethanol"],
    2,
    "Der Citratzyklus liefert vor allem NADH, FADH2 und GTP (→ ATP); er findet in der Mitochondrienmatrix statt.",
    "mittel",
    ["Stoffwechsel", "Citratzyklus"]
  ),
  q(
    "bio-pool-12-017",
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
    "bio-pool-12-018",
    "bio-kap2",
    "Welche Struktur verbindet die beiden Großhirnhemisphären?",
    ["Pons", "Corpus callosum", "Thalamus", "Kleinhirn", "Medulla oblongata"],
    1,
    "Der Balken (Corpus callosum) verbindet linke und rechte Großhirnhemisphäre und ermöglicht Informationsaustausch.",
    "leicht",
    ["ZNS", "Gehirn"]
  ),
  q(
    "bio-pool-12-019",
    "bio-kap4",
    "Was ist eine Punktmutation?",
    [
      "Verlust eines ganzen Chromosoms",
      "Austausch einer einzelnen Base",
      "Verdreifachung eines Gens",
      "Umlagerung großer Abschnitte",
      "Fusion zweier Chromosomen",
    ],
    1,
    "Bei einer Punktmutation wird eine Base durch eine andere ersetzt (z. B. Substitution).",
    "leicht",
    ["Genetik", "Mutation"]
  ),
  q(
    "bio-pool-12-020",
    "bio-kap2",
    "In welchem Abschnitt des Dickdarms wird vor allem Wasser resorbiert?",
    ["Colon ascendens bis Colon descendens", "Zökum", "Rektum", "Appendix", "Colon sigmoideum nur"],
    0,
    "Im Colon (aufsteigend, quer, absteigend) wird Wasser und Elektrolyte resorbiert; der Stuhl wird eingedickt.",
    "mittel",
    ["Verdauung", "Dickdarm"]
  ),
  q(
    "bio-pool-12-021",
    "bio-kap1",
    "Welche Aussage über Ribosomen trifft zu?",
    [
      "Sie kommen nur im Zellkern vor",
      "Sie bestehen nur aus Protein",
      "Sie sind aus rRNA und Proteinen aufgebaut",
      "Sie synthetisieren DNA",
      "Sie kommen nur in Mitochondrien vor",
    ],
    2,
    "Ribosomen bestehen aus rRNA und Proteinen und katalysieren die Proteinbiosynthese.",
    "leicht",
    ["Zelle", "Ribosomen"]
  ),
  q(
    "bio-pool-12-022",
    "bio-kap5",
    "Welche Aussage zu B-Lymphozyten trifft zu?",
    [
      "Sie reifen im Thymus",
      "Sie können zu Plasmazellen werden und Antikörper bilden",
      "Sie töten virusinfizierte Zellen direkt",
      "Sie gehören zur unspezifischen Abwehr",
      "Sie phagozytieren Erreger",
    ],
    1,
    "B-Lymphozyten reifen im Knochenmark, werden nach Antigenkontakt zu Plasmazellen und produzieren Antikörper.",
    "mittel",
    ["Immunologie", "B-Zellen"]
  ),
  q(
    "bio-pool-12-023",
    "bio-kap2",
    "Welcher Nerv innerviert den Zwerchfellmuskel?",
    ["N. vagus", "N. phrenicus", "N. intercostalis", "N. femoralis", "N. radialis"],
    1,
    "Der N. phrenicus (C3–C5) innerviert das Zwerchfell und ist für die Atmung essenziell.",
    "mittel",
    ["Anatomie", "Nerven"]
  ),
  q(
    "bio-pool-12-024",
    "bio-kap4",
    "Wann findet die DNA-Replikation statt?",
    [
      "In der G1-Phase",
      "In der S-Phase",
      "In der G2-Phase",
      "In der Mitose",
      "In der Meiose I nur",
    ],
    1,
    "In der S-Phase (Synthesephase) des Zellzyklus wird die DNA verdoppelt.",
    "leicht",
    ["Zellzyklus", "DNA-Replikation"]
  ),
  q(
    "bio-pool-12-025",
    "bio-kap3",
    "Was ist die Blastozyste?",
    [
      "Ein frühes Entwicklungsstadium mit innerer Zellmasse und Trophoblast",
      "Die Eizelle vor der Befruchtung",
      "Die Plazenta",
      "Der Embryo in der 8. Woche",
      "Die Fruchtblase",
    ],
    0,
    "Die Blastozyste hat eine innere Zellmasse (→ Embryo) und den Trophoblasten (→ Plazentaanteil).",
    "mittel",
    ["Embryologie", "Blastozyste"]
  ),
  q(
    "bio-pool-12-026",
    "bio-kap1",
    "Welches Molekül überträgt die genetische Information vom Zellkern zu den Ribosomen?",
    ["DNA", "tRNA", "mRNA", "rRNA", "ATP"],
    2,
    "Die mRNA (Boten-RNA) wird im Zellkern transkribiert und trägt die Information zu den Ribosomen.",
    "leicht",
    ["Genexpression", "mRNA"]
  ),
  q(
    "bio-pool-12-027",
    "bio-kap2",
    "Welche Aussage über die Niere trifft NICHT zu?",
    [
      "Die Niere filtert das Blut und bildet Harn",
      "Die Niere produziert Erythropoetin",
      "Die Niere produziert Renin",
      "Die Niere produziert Gallensäuren",
      "Die Niere reguliert den Wasser- und Elektrolythaushalt",
    ],
    3,
    "Gallensäuren werden in der Leber gebildet, nicht in der Niere (D falsch).",
    "mittel",
    ["Niere", "FALSCH"]
  ),
  q(
    "bio-pool-12-028",
    "bio-kap5",
    "Was ist eine Nahrungskette?",
    [
      "Die Gesamtheit aller Arten",
      "Eine lineare Abfolge von Nahrungsbeziehungen (wer frisst wen)",
      "Ein Biotop",
      "Eine Population",
      "Ein Ökosystem",
    ],
    1,
    "In einer Nahrungskette wird Energie und Materie von Stufe zu Stufe weitergegeben (Produzent → Konsument).",
    "leicht",
    ["Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-12-029",
    "bio-kap4",
    "Was bedeutet „heterozygot“?",
    [
      "Zwei gleiche Allele an einem Genort",
      "Zwei verschiedene Allele an einem Genort",
      "Haploider Chromosomensatz",
      "Keine Allele",
      "Rezessives Merkmal",
    ],
    1,
    "Heterozygot = zwei verschiedene Allele (z. B. Aa). Homozygot = gleiche Allele (AA oder aa).",
    "leicht",
    ["Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-12-030",
    "bio-kap2",
    "Welches Blutgefäß führt sauerstoffarmes Blut von der rechten Herzkammer weg?",
    ["Lungenvene", "Aorta", "Lungenarterie", "Obere Hohlvene", "Pfortader"],
    2,
    "Die Lungenarterie führt sauerstoffarmes Blut von der rechten Kammer zur Lunge.",
    "leicht",
    ["Kreislauf", "Herz"]
  ),
  q(
    "bio-pool-12-031",
    "bio-kap1",
    "Welche Aussage über die Zellwand trifft zu?",
    [
      "Sie kommt bei allen Eukaryoten vor",
      "Sie kommt bei Pflanzen und vielen Prokaryoten vor",
      "Sie besteht aus Chitin bei allen",
      "Tierische Zellen haben immer eine Zellwand",
      "Sie ersetzt die Zellmembran",
    ],
    1,
    "Pflanzen haben Zellwände aus Zellulose; Bakterien aus Murein; Pilze aus Chitin. Tierzellen haben keine Zellwand.",
    "leicht",
    ["Zelle", "Zellwand"]
  ),
  q(
    "bio-pool-12-032",
    "bio-kap3",
    "Wann nistet sich die Blastozyste in die Gebärmutterschleimhaut ein?",
    ["Am 1. Tag", "Etwa am 5.–7. Tag", "In der 4. Woche", "Nach der 8. Woche", "Bei der Geburt"],
    1,
    "Die Implantation erfolgt etwa am 5.–7. Tag nach der Befruchtung.",
    "mittel",
    ["Embryologie", "Implantation"]
  ),
  q(
    "bio-pool-12-033",
    "bio-kap5",
    "Was sind Destenten?",
    ["Produzenten", "Konsumenten", "Zersetzer (Pilze, Bakterien)", "Räuber", "Pflanzenfresser"],
    2,
    "Destenten (Zersetzer) bauen tote organische Substanz ab und setzen Nährstoffe frei.",
    "leicht",
    ["Ökologie", "Destenten"]
  ),
  q(
    "bio-pool-12-034",
    "bio-kap2",
    "Welcher Teil des Magens liegt direkt vor dem Pförtner?",
    ["Fundus", "Kardia", "Corpus", "Antrum", "Pylorus"],
    3,
    "Das Antrum (Antrum pyloricum) liegt vor dem Pylorus (Pförtner), der in den Dünndarm übergeht.",
    "mittel",
    ["Verdauung", "Magen"]
  ),
  q(
    "bio-pool-12-035",
    "bio-kap4",
    "In welcher Phase der Mitose ordnen sich die Chromosomen in der Äquatorialebene an?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase"],
    1,
    "In der Metaphase liegen die Chromosomen in der Äquatorialebene (Metaphaseplatte).",
    "leicht",
    ["Mitose", "Zellteilung"]
  ),
  q(
    "bio-pool-12-036",
    "bio-kap1",
    "Welches Vitamin ist ein Antioxidans und wichtig für das Bindegewebe?",
    ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D", "Vitamin K"],
    2,
    "Vitamin C ist u. a. Kofaktor für die Kollagensynthese und wirkt als Antioxidans.",
    "leicht",
    ["Vitamine", "Vitamin C"]
  ),
  q(
    "bio-pool-12-037",
    "bio-kap2",
    "Welches Organ produziert Pepsin?",
    ["Dünndarm", "Bauchspeicheldrüse", "Magen", "Leber", "Speicheldrüse"],
    2,
    "Pepsin wird als Pepsinogen in den Hauptzellen des Magens gebildet und spaltet Proteine.",
    "leicht",
    ["Verdauung", "Magen"]
  ),
  q(
    "bio-pool-12-038",
    "bio-kap5",
    "Welche Aussage zu Impfungen trifft zu?",
    [
      "Impfungen ersetzen immer die natürliche Immunität",
      "Impfungen können eine aktive Immunisierung bewirken",
      "Impfungen wirken nur gegen Bakterien",
      "Es gibt keine Gedächtniszellen nach Impfung",
      "Passive Impfung führt zu langer eigener Antikörperbildung",
    ],
    1,
    "Aktive Impfung: Antigen wird verabreicht → Körper bildet Antikörper und Gedächtniszellen.",
    "mittel",
    ["Immunologie", "Impfung"]
  ),
  q(
    "bio-pool-12-039",
    "bio-kap4",
    "Was ist ein Allel?",
    [
      "Ein Chromosom",
      "Eine Variante eines Gens an einem bestimmten Genort",
      "Ein Genom",
      "Eine Mutation",
      "Ein Phänotyp",
    ],
    1,
    "Allele sind verschiedene Ausprägungen eines Gens (z. B. A und a bei Blütenfarbe).",
    "leicht",
    ["Genetik", "Allel"]
  ),
  q(
    "bio-pool-12-040",
    "bio-kap2",
    "Welcher Knochen gehört zum Unterarm?",
    ["Humerus", "Femur", "Tibia", "Radius", "Ulna"],
    3,
    "Radius und Ulna sind die beiden Unterarmknochen. Humerus = Oberarm.",
    "leicht",
    ["Skelett", "Anatomie"]
  ),
  q(
    "bio-pool-12-041",
    "bio-kap1",
    "Wo findet die Transkription statt?",
    ["Im Zytosol", "Im Zellkern", "An der Zellmembran", "Im Mitochondrium nur", "Am Golgi-Apparat"],
    1,
    "Transkription (DNA → RNA) erfolgt im Zellkern. Translation (RNA → Protein) im Zytosol.",
    "leicht",
    ["Genexpression", "Transkription"]
  ),
  q(
    "bio-pool-12-042",
    "bio-kap5",
    "Was versteht man unter „ökologischer Nische“?",
    [
      "Der konkrete Lebensort",
      "Die Gesamtheit der abiotischen und biotischen Faktoren, die eine Art nutzt bzw. erfordert",
      "Eine Nahrungskette",
      "Ein Biotop",
      "Eine Population",
    ],
    1,
    "Die ökologische Nische beschreibt die „Rolle“ einer Art (Ressourcen, Lebensweise). Habitat = konkreter Ort.",
    "mittel",
    ["Ökologie", "Nische"]
  ),
  q(
    "bio-pool-12-043",
    "bio-kap2",
    "Welches Hormon wird im Hypophysenhinterlappen ausgeschüttet und fördert die Wehen?",
    ["Prolactin", "Oxytocin", "ADH", "FSH", "LH"],
    1,
    "Oxytocin wird im Hypothalamus gebildet, im Hypophysenhinterlappen gespeichert und fördert Wehen und Milchausschüttung.",
    "leicht",
    ["Hormone", "Oxytocin"]
  ),
  q(
    "bio-pool-12-044",
    "bio-kap4",
    "Welche Aussage zur Vererbung trifft zu?",
    [
      "Umweltfaktoren beeinflussen nur den Genotyp",
      "Phänotyp entsteht aus Genotyp und Umwelt",
      "Phänotyp ist unabhängig von Genen",
      "Umwelt hat keinen Einfluss",
      "Genotyp ist immer sichtbar",
    ],
    1,
    "Der Phänotyp wird durch Genotyp und Umwelt (Ernährung, Stress, etc.) geprägt.",
    "leicht",
    ["Genetik", "Phänotyp"]
  ),
  q(
    "bio-pool-12-045",
    "bio-kap3",
    "Aus welchem Keimblatt entsteht das Nervensystem?",
    ["Mesoderm", "Entoderm", "Ektoderm", "Trophoblast", "Aus allen drei"],
    2,
    "Ektoderm → Epidermis, Nervensystem, Sinnesorgane. Mesoderm → Muskulatur, Bindegewebe. Entoderm → Darm.",
    "leicht",
    ["Embryologie", "Keimblätter"]
  ),
  q(
    "bio-pool-12-046",
    "bio-kap1",
    "Welche Aussage über die Atmungskette trifft NICHT zu?",
    [
      "Sie sitzt an der inneren Mitochondrienmembran",
      "Sie verbraucht Sauerstoff",
      "Sie liefert ATP",
      "Sie findet im Zytosol statt",
      "Sie nutzt NADH und FADH2",
    ],
    3,
    "Die Atmungskette findet an der inneren Mitochondrienmembran statt, nicht im Zytosol (D falsch).",
    "mittel",
    ["Stoffwechsel", "FALSCH"]
  ),
  q(
    "bio-pool-12-047",
    "bio-kap2",
    "Welche Vene sammelt Blut aus dem Magen-Darm-Trakt und führt es zur Leber?",
    ["Hohlvene", "Lungenvene", "Pfortader", "Aorta", "Nierenvene"],
    2,
    "Die Pfortader führt nährstoffreiches Blut aus Magen, Darm, Milz zur Leber (Pfortaderkreislauf).",
    "mittel",
    ["Kreislauf", "Leber"]
  ),
  q(
    "bio-pool-12-048",
    "bio-kap5",
    "Was sind natürliche Killerzellen?",
    [
      "B-Lymphozyten",
      "T-Lymphozyten",
      "Lymphozyten der unspezifischen Abwehr, die virusinfizierte Zellen abtöten können",
      "Erythrozyten",
      "Thrombozyten",
    ],
    2,
    "NK-Zellen gehören zur angeborenen Abwehr und können virusinfizierte oder entartete Zellen abtöten.",
    "mittel",
    ["Immunologie", "NK-Zellen"]
  ),
  q(
    "bio-pool-12-049",
    "bio-kap4",
    "Was ist die Transkription?",
    [
      "Übersetzung von mRNA in Protein",
      "Kopieren der DNA in RNA",
      "Replikation der DNA",
      "Abbau von RNA",
      "Spleißen der RNA",
    ],
    1,
    "Transkription = Synthese von RNA an der DNA (DNA → RNA). Translation = RNA → Protein.",
    "leicht",
    ["Genetik", "Transkription"]
  ),
  q(
    "bio-pool-12-050",
    "bio-kap2",
    "Welcher Gehirnbereich ist wichtig für die Regulation von Atmung und Kreislauf?",
    [
      "Großhirnrinde",
      "Kleinhirn",
      "Hirnstamm (Medulla oblongata, Pons)",
      "Thalamus",
      "Hypothalamus",
    ],
    2,
    "Im Hirnstamm liegen lebenswichtige Zentren für Atmung, Kreislauf, Schlucken.",
    "leicht",
    ["ZNS", "Hirnstamm"]
  ),
  q(
    "bio-pool-12-051",
    "bio-kap1",
    "Welches Organell verpackt Proteine für den Export?",
    ["Ribosom", "Lysosom", "Golgi-Apparat", "Peroxisom", "Zellkern"],
    2,
    "Der Golgi-Apparat modifiziert und verpackt Proteine (z. B. in Vesikel) für Sekretion oder Lysosomen.",
    "leicht",
    ["Zelle", "Golgi"]
  ),
  q(
    "bio-pool-12-052",
    "bio-kap5",
    "Was ist ein Produzent in einem Ökosystem?",
    [
      "Ein Tier",
      "Ein Organismus, der aus anorganischen Stoffen organische Substanz aufbaut (z. B. Pflanzen)",
      "Ein Pilz",
      "Ein Zersetzer",
      "Ein Räuber",
    ],
    1,
    "Produzenten (v. a. Pflanzen, Algen) betreiben Fotosynthese und bauen Biomasse aus CO2 und Licht auf.",
    "leicht",
    ["Ökologie", "Produzent"]
  ),
  q(
    "bio-pool-12-053",
    "bio-kap4",
    "Was passiert beim Crossing-over?",
    [
      "Nur Mitose",
      "Austausch von Chromosomenabschnitten zwischen homologen Chromosomen in der Meiose",
      "Verdoppelung der DNA",
      "Trennung der Schwesterchromatiden",
      "Bildung der Kernmembran",
    ],
    1,
    "Beim Crossing-over in der Prophase I der Meiose werden Abschnitte zwischen homologen Chromosomen ausgetauscht.",
    "mittel",
    ["Meiose", "Crossing-over"]
  ),
  q(
    "bio-pool-12-054",
    "bio-kap2",
    "Welches Hormon erhöht den Blutzuckerspiegel?",
    ["Insulin", "Glukagon", "Somatostatin", "Östrogen", "Calcitonin"],
    1,
    "Glukagon (Alpha-Zellen der Langerhans-Inseln) stimuliert Glykogenabbau und Gluconeogenese → Blutzucker steigt.",
    "leicht",
    ["Hormone", "Blutzucker"]
  ),
  q(
    "bio-pool-12-055",
    "bio-kap3",
    "Was ist der Trophoblast?",
    [
      "Der Embryo",
      "Der äußere Zellmantel der Blastozyste, aus dem plazentare Anteile entstehen",
      "Die Amnionhöhle",
      "Die innere Zellmasse",
      "Die Eihaut",
    ],
    1,
    "Der Trophoblast umgibt die Blastozyste und bildet u. a. den kindlichen Anteil der Plazenta.",
    "mittel",
    ["Embryologie", "Trophoblast"]
  ),
  q(
    "bio-pool-12-056",
    "bio-kap1",
    "Welche Aussage über die Fotosynthese trifft zu?",
    [
      "Sie findet nur in Mitochondrien statt",
      "Sie verbraucht Glukose",
      "Sie produziert Sauerstoff",
      "Sie läuft nur bei Dunkelheit",
      "Sie kommt nur bei Tieren vor",
    ],
    2,
    "Bei der Fotosynthese (Pflanzen, Algen) wird aus CO2 und H2O mit Licht Glukose gebildet; O2 wird freigesetzt.",
    "leicht",
    ["Stoffwechsel", "Fotosynthese"]
  ),
  q(
    "bio-pool-12-057",
    "bio-kap2",
    "Welcher Darmabschnitt hat die meisten Becherzellen für Schleimproduktion?",
    ["Duodenum", "Colon", "Jejunum", "Magen", "Ösophagus"],
    1,
    "Im Colon (Dickdarm) sind viele Becherzellen für Schleim; der Stuhl wird gleitfähig gehalten.",
    "mittel",
    ["Verdauung", "Dickdarm"]
  ),
  q(
    "bio-pool-12-058",
    "bio-kap5",
    "Welche Aussage zu Allergien trifft zu?",
    [
      "Allergien sind nie IgE-vermittelt",
      "Bei Typ-I-Allergie werden IgE-Antikörper gebildet",
      "Allergene sind immer Bakterien",
      "Es gibt keine Kreuzallergien",
      "Antihistaminika fördern die Histaminfreisetzung",
    ],
    1,
    "Bei Soforttyp-Allergie (Typ I) werden IgE-Antikörper gebildet; bei erneutem Kontakt setzen Mastzellen Histamin frei.",
    "mittel",
    ["Immunologie", "Allergie"]
  ),
  q(
    "bio-pool-12-059",
    "bio-kap4",
    "Was ist ein Genotyp?",
    [
      "Die sichtbare Ausprägung",
      "Die genetische Ausstattung (Allele) eines Organismus",
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
    "bio-pool-12-060",
    "bio-kap2",
    "Welche Aussage über die Gallenblase trifft zu?",
    [
      "Sie produziert die Galle",
      "Sie speichert und konzentriert die von der Leber produzierte Galle",
      "Sie produziert Lipase",
      "Sie mündet in den Dünndarm ohne Verbindung zur Leber",
      "Sie liegt in der Bauchspeicheldrüse",
    ],
    1,
    "Die Leber produziert Galle; die Gallenblase speichert und konzentriert sie und entleert sie bei Bedarf in den Dünndarm.",
    "leicht",
    ["Verdauung", "Galle"]
  ),
];
