/**
 * Biology BMS pool — questions 241–310 (MedAT style).
 * Focus: bio-kap3 (Evolution), bio-kap4 (Genetik), bio-kap5 (Immunologie).
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool4: Question[] = [
  // ── Hardy-Weinberg & Evolution (bio-kap3) ──────────────────────────
  q(
    "bio-pool-241",
    "bio-kap3",
    "In einer Population liegt die Frequenz des rezessiven Allels a bei 0,3. Wie hoch ist unter Hardy-Weinberg-Gleichgewicht der erwartete Anteil heterozygoter Individuen?",
    ["9 %", "21 %", "42 %", "49 %", "30 %"],
    2,
    "Die Heterozygoten-Frequenz berechnet sich als 2pq = 2 × 0,7 × 0,3 = 0,42 = 42 %. p = 1 − q = 0,7.",
    "mittel",
    ["hardy-weinberg", "heterozygot", "populationsgenetik"]
  ),
  q(
    "bio-pool-242",
    "bio-kap3",
    "Welche Voraussetzung ist KEINE Bedingung für das Hardy-Weinberg-Gleichgewicht?",
    [
      "Keine Mutation",
      "Keine Selektion",
      "Zufällige Paarung (Panmixie)",
      "Unendlich große Population",
      "Geschlechtschromosomale Vererbung",
    ],
    4,
    "Die fünf Bedingungen des Hardy-Weinberg-Gleichgewichts sind: keine Mutation, keine Selektion, keine Migration, Panmixie und unendlich große Population. Geschlechtschromosomale Vererbung ist keine Bedingung.",
    "leicht",
    ["hardy-weinberg", "evolution"]
  ),
  q(
    "bio-pool-243",
    "bio-kap3",
    "In einer Population sind 16 % der Individuen homozygot rezessiv (aa) für ein bestimmtes Merkmal. Wie hoch ist die Allelfrequenz des dominanten Allels A im Hardy-Weinberg-Gleichgewicht?",
    ["0,16", "0,40", "0,60", "0,84", "0,36"],
    2,
    "q² = 0,16, also q = 0,4. Die Frequenz des dominanten Allels ist p = 1 − q = 1 − 0,4 = 0,6.",
    "leicht",
    ["hardy-weinberg", "allelfrequenz"]
  ),
  q(
    "bio-pool-244",
    "bio-kap3",
    "Welcher Evolutionsfaktor führt in kleinen Populationen zu zufälligen Änderungen der Allelfrequenz?",
    [
      "Natürliche Selektion",
      "Genetische Drift",
      "Gerichtete Mutation",
      "Sexuelle Selektion",
      "Genfluss",
    ],
    1,
    "Genetische Drift beschreibt zufällige Schwankungen der Allelfrequenz, die besonders in kleinen Populationen zu erheblichen Veränderungen führen. Selektion ist gerichtet, nicht zufällig.",
    "leicht",
    ["genetische drift", "evolution", "populationsgenetik"]
  ),
  q(
    "bio-pool-245",
    "bio-kap3",
    "Der Flaschenhalseffekt (Bottleneck) führt in einer Population vorrangig zu:",
    [
      "Erhöhter genetischer Vielfalt",
      "Verringerter genetischer Vielfalt",
      "Gerichteter Selektion",
      "Erhöhter Mutationsrate",
      "Verstärktem Genfluss",
    ],
    1,
    "Beim Flaschenhalseffekt überlebt nur ein kleiner Teil der Population ein katastrophales Ereignis, was die genetische Vielfalt drastisch reduziert.",
    "leicht",
    ["flaschenhalseffekt", "genetische drift", "evolution"]
  ),
  q(
    "bio-pool-246",
    "bio-kap3",
    "Welche Form der Selektion begünstigt Individuen mit extremen Merkmalsausprägungen und führt langfristig zur Aufspaltung einer Population?",
    [
      "Stabilisierende Selektion",
      "Gerichtete Selektion",
      "Disruptive Selektion",
      "Sexuelle Selektion",
      "Künstliche Selektion",
    ],
    2,
    "Disruptive (aufspaltende) Selektion begünstigt die Extreme einer Merkmalsverteilung und kann zur Aufspaltung einer Art (sympatrische Artbildung) beitragen.",
    "mittel",
    ["selektion", "evolution", "artbildung"]
  ),
  q(
    "bio-pool-247",
    "bio-kap3",
    "Was versteht man unter dem Gründereffekt (Founder Effect)?",
    [
      "Spontane Verdopplung des gesamten Chromosomensatzes",
      "Eine kleine Gründerpopulation trägt nur einen Ausschnitt des Genpools der Ursprungspopulation",
      "Gezielte Selektion durch den Menschen in der Tier- und Pflanzenzucht",
      "Mutation durch UV-Strahlung verursachte DNA-Schäden in der Gründergeneration",
      "Horizontaler Gentransfer genetischen Materials zwischen verschiedenen Spezies",
    ],
    1,
    "Beim Gründereffekt besiedelt eine kleine Gruppe ein neues Habitat. Ihr Genpool ist nur ein zufälliger Ausschnitt der Ausgangspopulation, was die genetische Vielfalt verringert.",
    "leicht",
    ["gründereffekt", "genetische drift", "evolution"]
  ),
  q(
    "bio-pool-248",
    "bio-kap3",
    "Welche Aussage zur biologischen Fitness im evolutionären Sinne ist korrekt?",
    [
      "Fitness beschreibt die körperliche Leistungsfähigkeit eines Organismus",
      "Fitness ist die Fähigkeit zur Nahrungsaufnahme",
      "Fitness bezeichnet den relativen Fortpflanzungserfolg eines Genotyps",
      "Fitness ist gleichbedeutend mit Langlebigkeit",
      "Fitness misst die Geschwindigkeit der DNA-Replikation",
    ],
    2,
    "Die biologische (evolutionäre) Fitness misst den relativen Fortpflanzungserfolg eines Genotyps — also wie viele überlebende Nachkommen ein Individuum im Vergleich zu anderen hinterlässt.",
    "leicht",
    ["fitness", "selektion", "evolution"]
  ),

  // ── Mitose / Meiose (bio-kap4) ────────────────────────────────────
  q(
    "bio-pool-249",
    "bio-kap4",
    "In welcher Phase der Mitose ordnen sich die Chromosomen in der Äquatorialebene der Zelle an?",
    ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase"],
    1,
    "In der Metaphase reihen sich die kondensierten Chromosomen entlang der Äquatorialebene (Metaphasenplatte) auf. Die Spindelfasern sind an den Kinetochoren befestigt.",
    "leicht",
    ["mitose", "metaphase", "zellteilung"]
  ),
  q(
    "bio-pool-250",
    "bio-kap4",
    "Welche Aussage zur Meiose ist FALSCH?",
    [
      "In der Meiose I werden homologe Chromosomen getrennt",
      "Crossing-over findet in der Prophase I statt",
      "Am Ende der Meiose II entstehen vier haploide Zellen",
      "In der Meiose II werden homologe Chromosomen getrennt",
      "Die Meiose dient der Bildung von Keimzellen",
    ],
    3,
    "In der Meiose II werden Schwesterchromatiden getrennt. Die Trennung homologer Chromosomen erfolgt in der Meiose I (Reduktions­teilung).",
    "leicht",
    ["meiose", "zellteilung", "falschaussage"]
  ),
  q(
    "bio-pool-251",
    "bio-kap4",
    "Crossing-over während der Meiose findet zwischen welchen Strukturen statt?",
    [
      "Zwei identischen Schwesterchromatiden",
      "Nicht-homologen Chromosomen",
      "Homologen Chromosomen (Nicht-Schwester-Chromatiden)",
      "Mitochondrialer und nukleärer DNA",
      "Centromer und Telomer desselben Chromosoms",
    ],
    2,
    "Crossing-over ist der Austausch von DNA-Abschnitten zwischen Nicht-Schwester-Chromatiden homologer Chromosomen während der Prophase I. Dies erhöht die genetische Variabilität.",
    "mittel",
    ["crossing-over", "meiose", "rekombination"]
  ),
  q(
    "bio-pool-252",
    "bio-kap4",
    "Wie viele Chromatiden enthält eine menschliche Zelle in der G2-Phase des Zellzyklus?",
    ["23", "46", "69", "92", "184"],
    3,
    "Nach der S-Phase (DNA-Replikation) hat jedes der 46 Chromosomen zwei Schwesterchromatiden, also 46 × 2 = 92 Chromatiden insgesamt.",
    "mittel",
    ["zellzyklus", "chromatiden", "g2-phase"]
  ),
  q(
    "bio-pool-253",
    "bio-kap4",
    "Welches Protein kontrolliert den Übergang von der G1- in die S-Phase des Zellzyklus und wird als \u201EWächter des Genoms\u201C bezeichnet?",
    ["Cyclin D", "Rb-Protein", "p53", "CDK4", "Myc"],
    2,
    "p53 ist ein Tumorsuppressorprotein, das bei DNA-Schäden den Zellzyklus in G1 arretiert oder Apoptose einleitet. Es wird daher als \u201EWächter des Genoms\u201C bezeichnet.",
    "mittel",
    ["p53", "tumorsuppressor", "zellzyklus"]
  ),
  q(
    "bio-pool-254",
    "bio-kap4",
    "Was ist die Hauptfunktion der Telomerase?",
    [
      "Reparatur von Doppelstrangbrüchen",
      "Verlängerung der Telomere an den Chromosomenenden",
      "Kondensation der Chromosomen in der Prophase",
      "Bildung des Spindelapparats",
      "Auflösung der Kernmembran",
    ],
    1,
    "Die Telomerase ist eine reverse Transkriptase, die die repetitiven Sequenzen an den Chromosomenenden (Telomere) verlängert und so deren Verkürzung bei jeder Zellteilung ausgleicht.",
    "mittel",
    ["telomerase", "telomere", "zellteilung"]
  ),
  q(
    "bio-pool-255",
    "bio-kap4",
    "Eine Frau mit normalem Karyotyp bildet Eizellen. Wie viele funktionelle Eizellen entstehen aus einer primären Oozyte nach Abschluss beider meiotischer Teilungen?",
    ["Vier", "Drei", "Zwei", "Eine", "Acht"],
    3,
    "Aus einer primären Oozyte entsteht nur eine funktionelle Eizelle. Die drei anderen Teilungsprodukte (Polkörperchen) sind klein und funktionslos. Dies unterscheidet die Oogenese von der Spermatogenese (4 Spermien).",
    "leicht",
    ["meiose", "oogenese", "eizelle"]
  ),

  // ── Genexpression & Epigenetik (bio-kap4) ──────────────────────────
  q(
    "bio-pool-256",
    "bio-kap4",
    "In welche Richtung liest die RNA-Polymerase den Matrizenstrang der DNA bei der Transkription?",
    ["5' → 3'", "3' → 5'", "Bidirektional", "Vom Centromer zum Telomer", "Zufällig"],
    1,
    "Die RNA-Polymerase liest den Matrizenstrang in 3'→5'-Richtung und synthetisiert die mRNA in 5'→3'-Richtung. Die Antwort bezieht sich auf die Leserichtung des Templates.",
    "mittel",
    ["transkription", "rna-polymerase", "genexpression"]
  ),
  q(
    "bio-pool-257",
    "bio-kap4",
    "Welche der folgenden posttranskriptionellen Modifikationen der prä-mRNA findet beim Spleißen statt?",
    [
      "Anfügen einer 5'-Cap-Struktur",
      "Entfernen der Introns und Verknüpfen der Exons",
      "Polyadenylierung am 3'-Ende",
      "Methylierung von Cytosin-Basen",
      "Phosphorylierung von Histonen",
    ],
    1,
    "Beim Spleißen werden die nicht-codierenden Introns aus der prä-mRNA entfernt und die Exons miteinander verknüpft. 5'-Capping und 3'-Polyadenylierung sind separate Modifikationen.",
    "leicht",
    ["spleißen", "mrna", "genexpression"]
  ),
  q(
    "bio-pool-258",
    "bio-kap4",
    "Welche epigenetische Modifikation führt typischerweise zur Stilllegung (Silencing) eines Gens?",
    [
      "Acetylierung von Histonen",
      "Methylierung von CpG-Inseln im Promotor",
      "Phosphorylierung von Histonen",
      "Ubiquitinierung von Histonen",
      "Demethylierung der DNA",
    ],
    1,
    "Die Methylierung von CpG-Dinukleotiden im Promotorbereich führt zur Verdichtung des Chromatins und verhindert die Bindung von Transkriptionsfaktoren — das Gen wird stillgelegt (Gene Silencing).",
    "mittel",
    ["epigenetik", "methylierung", "genexpression"]
  ),
  q(
    "bio-pool-259",
    "bio-kap4",
    "Was bewirkt die Acetylierung von Histon-Proteinen?",
    [
      "Stärkere Kompaktierung des Chromatins",
      "Lockerung des Chromatins und erleichterte Transkription",
      "Abbau der Histone durch Proteasomen",
      "Verhinderung der DNA-Replikation",
      "Aktivierung der Telomerase",
    ],
    1,
    "Die Acetylierung von Lysinresten an Histonen neutralisiert deren positive Ladung, lockert die Bindung zur negativ geladenen DNA und macht das Chromatin für Transkriptionsfaktoren zugänglich (Euchromatin).",
    "mittel",
    ["epigenetik", "histon-acetylierung", "chromatin"]
  ),
  q(
    "bio-pool-260",
    "bio-kap4",
    "Was versteht man unter genomischem Imprinting?",
    [
      "Die zufällige Inaktivierung eines X-Chromosoms",
      "Eine Mutation, die nur in Keimzellen auftritt",
      "Die elternspezifische, epigenetische Stilllegung bestimmter Gene",
      "Die Verdopplung des gesamten Genoms",
      "Die Insertion eines Transposons in ein Gen",
    ],
    2,
    "Genomisches Imprinting ist ein epigenetischer Mechanismus, bei dem bestimmte Gene abhängig von der elterlichen Herkunft durch DNA-Methylierung stillgelegt werden. Das Prader-Willi- und das Angelman-Syndrom sind Beispiele für Imprinting-Störungen.",
    "schwer",
    ["epigenetik", "imprinting", "genexpression"]
  ),
  q(
    "bio-pool-261",
    "bio-kap4",
    "Welche Aussage zum genetischen Code ist korrekt?",
    [
      "Der genetische Code ist nicht degeneriert — jede Aminosäure wird von genau einem Codon codiert",
      "Das Startcodon AUG codiert für Methionin",
      "Der genetische Code ist bei Prokaryoten und Eukaryoten grundlegend verschieden",
      "Stoppcodons werden von tRNAs erkannt",
      "Ein Codon besteht aus vier Nukleotiden",
    ],
    1,
    "AUG ist das universelle Startcodon und codiert für die Aminosäure Methionin. Der genetische Code ist degeneriert, nahezu universell und besteht aus Tripletts (3 Nukleotide).",
    "leicht",
    ["genetischer code", "codon", "translation"]
  ),
  q(
    "bio-pool-262",
    "bio-kap4",
    "Bei der X-Inaktivierung (Lyonisierung) wird in weiblichen Säugetierzellen:",
    [
      "Ein X-Chromosom vollständig abgebaut",
      "Ein X-Chromosom zu einem Barr-Körperchen kondensiert und weitgehend inaktiviert",
      "Jedes X-Chromosom zur Hälfte inaktiviert",
      "Das väterliche X-Chromosom immer inaktiviert",
      "Die Inaktivierung erst nach der Geburt eingeleitet",
    ],
    1,
    "Bei der X-Inaktivierung wird zufällig eines der beiden X-Chromosomen in jeder Zelle zu einem dicht gepackten Barr-Körperchen (Heterochromatin) kondensiert. Dies dient der Dosiskompensation.",
    "mittel",
    ["x-inaktivierung", "epigenetik", "barr-körperchen"]
  ),
  q(
    "bio-pool-263",
    "bio-kap4",
    "Welcher Mutationstyp führt zum Einbau einer falschen Aminosäure in die Polypeptidkette?",
    [
      "Stille Mutation (Synonyme Mutation)",
      "Missense-Mutation",
      "Nonsense-Mutation",
      "Frameshift-Mutation",
      "Promotor-Mutation",
    ],
    1,
    "Eine Missense-Mutation verändert ein Codon so, dass eine andere Aminosäure eingebaut wird. Eine stille Mutation ändert die Aminosäure nicht, eine Nonsense-Mutation erzeugt ein Stoppcodon.",
    "leicht",
    ["mutation", "missense", "genexpression"]
  ),
  q(
    "bio-pool-264",
    "bio-kap4",
    "Ein Basenpaar wird in eine codierende Sequenz inseriert. Welche Konsequenz hat dies für die Translation?",
    [
      "Keine, da der genetische Code degeneriert ist",
      "Eine einzelne Aminosäure wird ausgetauscht",
      "Das Leseraster verschiebt sich ab der Insertionsstelle (Frameshift)",
      "Die mRNA wird sofort abgebaut",
      "Nur die letzte Aminosäure der Kette ändert sich",
    ],
    2,
    "Die Insertion eines einzelnen Basenpaares verschiebt das Leseraster (Frameshift-Mutation). Alle nachfolgenden Codons werden falsch abgelesen, was meist zu einem vorzeitigen Stoppcodon und einem nicht-funktionellen Protein führt.",
    "leicht",
    ["frameshift", "insertion", "mutation"]
  ),

  // ── Immunsystem: T-Zellen & B-Zellen (bio-kap5) ──────────────────
  q(
    "bio-pool-265",
    "bio-kap5",
    "Wo findet die Reifung von T-Lymphozyten statt?",
    ["Knochenmark", "Milz", "Thymus", "Lymphknoten", "Leber"],
    2,
    "T-Lymphozyten reifen im Thymus heran. B-Lymphozyten reifen hingegen im Knochenmark (Bone Marrow). Im Thymus durchlaufen T-Zellen die positive und negative Selektion.",
    "leicht",
    ["t-zellen", "thymus", "immunsystem"]
  ),
  q(
    "bio-pool-266",
    "bio-kap5",
    "Welche Zellen des adaptiven Immunsystems sind hauptsächlich für die Abtötung virusinfizierter Körperzellen verantwortlich?",
    [
      "B-Lymphozyten (knochenmarksgereift, Antikörperproduktion)",
      "Zytotoxische T-Zellen (CD8⁺)",
      "T-Helferzellen (CD4⁺)",
      "Natürliche Killerzellen",
      "Mastzellen",
    ],
    1,
    "Zytotoxische T-Zellen (CD8⁺) erkennen virusinfizierte Zellen über MHC-I-präsentierte Antigene und töten sie durch Perforin und Granzyme. NK-Zellen gehören zum angeborenen Immunsystem.",
    "leicht",
    ["cd8", "zytotoxische t-zellen", "immunsystem"]
  ),
  q(
    "bio-pool-267",
    "bio-kap5",
    "Welche Funktion haben T-Helferzellen (CD4⁺) im Immunsystem?",
    [
      "Direkte Abtötung von Bakterien durch Phagozytose und intrazelluläre Verdauung",
      "Produktion von spezifischen Antikörpern (Immunglobulinen) gegen Pathogene",
      "Aktivierung und Koordination anderer Immunzellen durch Zytokinfreisetzung",
      "Antigenpräsentation über MHC-I-Moleküle an zytotoxische T-Zellen",
      "Bildung und Aktivierung des Komplementsystems als Proteasekaskade",
    ],
    2,
    "T-Helferzellen (CD4⁺) setzen Zytokine frei und aktivieren damit B-Zellen, Makrophagen und zytotoxische T-Zellen. Sie sind die \u201EDirigenten\u201C der adaptiven Immunantwort.",
    "mittel",
    ["cd4", "t-helferzellen", "zytokine"]
  ),
  q(
    "bio-pool-268",
    "bio-kap5",
    "Welche Immunglobulinklasse wird als erste bei einer Primärantwort auf ein neues Antigen gebildet?",
    ["IgG", "IgA", "IgM", "IgE", "IgD"],
    2,
    "IgM ist das erste Immunglobulin der Primärantwort. Es liegt als Pentamer im Blut vor und aktiviert effizient das Komplementsystem. IgG dominiert bei der Sekundärantwort.",
    "leicht",
    ["antikörper", "igm", "primärantwort"]
  ),
  q(
    "bio-pool-269",
    "bio-kap5",
    "Welche Immunglobulinklasse kann die Plazentaschranke passieren und dem Neugeborenen Nestschutz verleihen?",
    ["IgM", "IgA", "IgE", "IgG", "IgD"],
    3,
    "IgG ist das einzige Immunglobulin, das aktiv über die Plazenta transportiert wird (neonataler Fc-Rezeptor). Es verleiht dem Neugeborenen passiven Immunschutz (Nestschutz / Leihimmunität).",
    "leicht",
    ["antikörper", "igg", "nestschutz"]
  ),
  q(
    "bio-pool-270",
    "bio-kap5",
    "Welches Immunglobulin dominiert in Schleimhautsekreten (Speichel, Muttermilch, Darmschleim)?",
    ["IgG", "IgM", "IgA", "IgE", "IgD"],
    2,
    "Sekretorisches IgA (sIgA) ist das dominierende Immunglobulin auf Schleimhäuten. Es wird als Dimer sezerniert und schützt die Schleimhäute vor dem Eindringen von Pathogenen.",
    "mittel",
    ["antikörper", "iga", "schleimhaut"]
  ),
  q(
    "bio-pool-271",
    "bio-kap5",
    "Welcher Mechanismus erzeugt die enorme Vielfalt der Antikörper-Spezifitäten?",
    [
      "Alternatives Spleißen der Immunglobulin-mRNA",
      "Somatische V(D)J-Rekombination der Immunglobulin-Gene",
      "Horizontaler Gentransfer von Bakterien",
      "Polyploidie der B-Zellen",
      "Epigenetisches Imprinting",
    ],
    1,
    "Die somatische V(D)J-Rekombination kombiniert zufällig verschiedene V-, D- und J-Gensegmente, wodurch eine immense Vielfalt an Antikörper-Bindungsstellen entsteht (>10¹¹ verschiedene Spezifitäten).",
    "schwer",
    ["antikörper", "vdj-rekombination", "immunsystem"]
  ),
  q(
    "bio-pool-272",
    "bio-kap5",
    "Was versteht man unter der klonalen Selektion im Immunsystem?",
    [
      "Die Eliminierung aller B-Zellen nach einer Infektion",
      "Die gezielte Aktivierung und Vermehrung derjenigen Lymphozyten, deren Rezeptoren das Antigen binden",
      "Die Auswahl der stärksten Antikörper durch Makrophagen",
      "Die Unterdrückung aller Immunzellen durch regulatorische T-Zellen",
      "Die Selektion im Knochenmark gegen autoreaktive Erythrozyten",
    ],
    1,
    "Bei der klonalen Selektion wird diejenige B- oder T-Zelle, deren Rezeptor das passende Antigen erkennt, aktiviert und klonal expandiert. So entstehen viele identische Effektorzellen und Gedächtniszellen.",
    "mittel",
    ["klonale selektion", "immunantwort", "lymphozyten"]
  ),
  q(
    "bio-pool-273",
    "bio-kap5",
    "Welche Zellen sind für das immunologische Gedächtnis und die schnellere Sekundärantwort verantwortlich?",
    [
      "Mastzellen",
      "Neutrophile Granulozyten",
      "Gedächtnis-B- und Gedächtnis-T-Zellen",
      "Eosinophile Granulozyten",
      "Dendritische Zellen",
    ],
    2,
    "Nach dem Erstkontakt mit einem Antigen entstehen langlebige Gedächtniszellen. Bei erneutem Kontakt reagieren diese schneller und stärker (Sekundärantwort).",
    "leicht",
    ["gedächtniszellen", "sekundärantwort", "immunsystem"]
  ),
  q(
    "bio-pool-274",
    "bio-kap5",
    "MHC-I-Moleküle präsentieren Peptide an welche Immunzellen?",
    [
      "T-Helferzellen (CD4⁺)",
      "Zytotoxische T-Zellen (CD8⁺)",
      "B-Lymphozyten (knochenmarksgereift, Antikörperproduktion)",
      "Natürliche Killerzellen",
      "Makrophagen",
    ],
    1,
    "MHC-I-Moleküle befinden sich auf allen kernhaltigen Zellen und präsentieren intrazelluläre Peptide an CD8⁺-T-Zellen. MHC-II-Moleküle präsentieren dagegen an CD4⁺-T-Helferzellen.",
    "mittel",
    ["mhc", "antigenpräsentation", "immunsystem"]
  ),

  // ── Blutgruppen (bio-kap5) ────────────────────────────────────────
  q(
    "bio-pool-275",
    "bio-kap5",
    "Ein Patient hat Blutgruppe AB positiv. Welche Antikörper befinden sich in seinem Serum?",
    [
      "Anti-A und Anti-B",
      "Nur Anti-A",
      "Nur Anti-B",
      "Keine Isoagglutinine (Anti-A/Anti-B)",
      "Anti-D",
    ],
    3,
    "Personen mit Blutgruppe AB besitzen beide Antigene auf ihren Erythrozyten und bilden daher keine Isoagglutinine. AB-Träger sind Universalempfänger für Erythrozytenkonzentrate.",
    "leicht",
    ["blutgruppen", "ab0-system", "antikörper"]
  ),
  q(
    "bio-pool-276",
    "bio-kap5",
    "Welche Blutgruppe wird im AB0-System als Universalspender für Erythrozytenkonzentrate bezeichnet?",
    ["A", "B", "AB", "0", "A oder B"],
    3,
    "Blutgruppe 0 besitzt weder A- noch B-Antigene auf den Erythrozyten. Daher werden diese Erythrozyten von keinem Anti-A- oder Anti-B-Antikörper des Empfängers angegriffen.",
    "leicht",
    ["blutgruppen", "universalspender", "ab0-system"]
  ),
  q(
    "bio-pool-277",
    "bio-kap5",
    "Was ist die klinisch bedeutsamste Folge einer Rhesus-Inkompatibilität zwischen einer Rh-negativen Mutter und einem Rh-positiven Fetus?",
    [
      "Hemmung der Implantation der Blastozyste in das Endometrium",
      "Morbus haemolyticus neonatorum (Erythroblastose) bei einer Folgeschwangerschaft",
      "Sofortige immunologische Abstoßung des Fetus bereits in der ersten Schwangerschaft",
      "Sichelzellanämie des Neugeborenen",
      "Polyzythämie der Mutter",
    ],
    1,
    "Bei der ersten Schwangerschaft sensibilisiert fetales Rh-positives Blut die Rh-negative Mutter. In einer Folgeschwangerschaft mit einem Rh-positiven Fetus können mütterliche Anti-D-IgG-Antikörper die Plazenta passieren und fetale Erythrozyten zerstören (Morbus haemolyticus neonatorum).",
    "mittel",
    ["rhesus", "mhn", "blutgruppen"]
  ),
  q(
    "bio-pool-278",
    "bio-kap5",
    "Zwei Eltern haben beide die Blutgruppe A. Welche Blutgruppen sind bei ihren Kindern möglich?",
    ["Nur A", "A und 0", "A, B und 0", "A und AB", "Nur 0"],
    1,
    "IA i × IA i ergibt: IA IA, IA i und ii. Blutgruppe B oder AB ist nicht möglich, da kein IB-Allel vorhanden ist.",
    "mittel",
    ["blutgruppen", "vererbung", "ab0-system"]
  ),

  // ── Allergien (bio-kap5) ──────────────────────────────────────────
  q(
    "bio-pool-279",
    "bio-kap5",
    "Welcher Immunglobulin-Klasse wird die zentrale Rolle bei der Typ-I-Allergie (Soforttyp) zugeschrieben?",
    ["IgA", "IgG", "IgM", "IgE", "IgD"],
    3,
    "Bei der Typ-I-Allergie (Soforttyp) binden allergenspezifische IgE-Antikörper an Mastzellen. Bei erneutem Allergenkontakt vernetzen die Allergene das zellgebundene IgE und lösen die Degranulation der Mastzellen aus (Histaminfreisetzung).",
    "leicht",
    ["allergie", "ige", "soforttyp"]
  ),
  q(
    "bio-pool-280",
    "bio-kap5",
    "Welcher Mediator wird bei der Typ-I-Allergie hauptsächlich von Mastzellen freigesetzt und verursacht Vasodilatation sowie Bronchospasmus?",
    ["Serotonin", "Histamin", "Interleukin-10", "Interferon-γ", "Prostaglandin E2"],
    1,
    "Histamin ist der Hauptmediator der Sofortreaktion. Es wird aus den Granula der Mastzellen freigesetzt und bewirkt Vasodilatation, erhöhte Gefäßpermeabilität, Bronchospasmus und Juckreiz.",
    "leicht",
    ["histamin", "mastzellen", "allergie"]
  ),
  q(
    "bio-pool-281",
    "bio-kap5",
    "Bei welchem Allergie-Typ spielen IgG-Antikörper gegen zellständige Antigene die Hauptrolle und führen zur Zytolyse?",
    [
      "Typ I (Soforttyp)",
      "Typ II (Zytotoxischer Typ)",
      "Typ III (Immunkomplextyp)",
      "Typ IV (Spättyp / verzögert)",
      "Typ V (Stimulierender Typ)",
    ],
    1,
    "Bei der Typ-II-Allergie (zytotoxischer Typ) richten sich IgG- oder IgM-Antikörper gegen Antigene auf der Zelloberfläche. Über Komplementaktivierung oder ADCC werden die Zielzellen zerstört. Beispiele: Transfusionsreaktion, autoimmune hämolytische Anämie.",
    "schwer",
    ["typ-ii-allergie", "zytotoxisch", "immunsystem"]
  ),
  q(
    "bio-pool-282",
    "bio-kap5",
    "Welcher Allergie-Typ ist T-Zell-vermittelt und tritt erst 24–72 Stunden nach Antigenkontakt auf?",
    [
      "Typ I (Soforttyp)",
      "Typ II (Zytotoxischer Typ)",
      "Typ III (Immunkomplextyp)",
      "Typ IV (Spättyp)",
      "Typ V (Stimulierender Typ)",
    ],
    3,
    "Die Typ-IV-Allergie (Spättyp, verzögerter Typ) ist T-Zell-vermittelt (keine Antikörper beteiligt). Sie tritt erst nach 24–72 h auf. Beispiele: Kontaktdermatitis (Nickel), Tuberkulintest, Transplantatabstoßung.",
    "mittel",
    ["typ-iv-allergie", "spättyp", "t-zellen"]
  ),
  q(
    "bio-pool-283",
    "bio-kap5",
    "Anaphylaxie ist eine lebensbedrohliche Komplikation der Typ-I-Allergie. Welches Medikament ist die Erstlinientherapie bei anaphylaktischem Schock?",
    [
      "Antihistaminika (oral)",
      "Kortison (i.v.)",
      "Adrenalin (Epinephrin, i.m.)",
      "Acetylsalicylsäure",
      "Atropin",
    ],
    2,
    "Adrenalin (Epinephrin) intramuskulär ist die Erstlinientherapie bei Anaphylaxie. Es wirkt vasokonstriktiv, bronchodilatatorisch und stabilisiert den Kreislauf. Antihistaminika und Kortison sind ergänzende Maßnahmen.",
    "mittel",
    ["anaphylaxie", "adrenalin", "allergie"]
  ),

  // ── Autoimmunerkrankungen (bio-kap5) ──────────────────────────────
  q(
    "bio-pool-284",
    "bio-kap5",
    "Welche Autoimmunerkrankung wird durch Antikörper gegen den TSH-Rezeptor verursacht und führt zu einer Schilddrüsenüberfunktion?",
    [
      "Hashimoto-Thyreoiditis",
      "Morbus Basedow (Graves' Disease)",
      "Diabetes mellitus Typ 1",
      "Myasthenia gravis",
      "Systemischer Lupus erythematodes",
    ],
    1,
    "Beim Morbus Basedow stimulieren Autoantikörper (TRAK) den TSH-Rezeptor dauerhaft, was zu einer Hyperthyreose führt. Typisch ist die Merseburger Trias: Struma, Exophthalmus, Tachykardie.",
    "mittel",
    ["autoimmun", "morbus basedow", "schilddrüse"]
  ),
  q(
    "bio-pool-285",
    "bio-kap5",
    "Bei Diabetes mellitus Typ 1 werden welche Zellen durch eine Autoimmunreaktion zerstört?",
    [
      "α-Zellen des Pankreas",
      "β-Zellen des Pankreas (Langerhans-Inseln)",
      "Hepatozyten der Leber",
      "Azinuszellen des Pankreas",
      "δ-Zellen des Pankreas",
    ],
    1,
    "Bei Diabetes Typ 1 zerstören autoreaktive T-Zellen die insulinproduzierenden β-Zellen der Langerhans-Inseln im Pankreas. Die Folge ist absoluter Insulinmangel.",
    "leicht",
    ["autoimmun", "diabetes typ 1", "pankreas"]
  ),
  q(
    "bio-pool-286",
    "bio-kap5",
    "Was versteht man unter immunologischer Toleranz?",
    [
      "Die vollständige Unterdrückung des Immunsystems durch Medikamente",
      "Das Fehlen einer Immunreaktion gegen körpereigene Strukturen (Selbsttoleranz)",
      "Die Unfähigkeit, Antikörper zu bilden",
      "Eine angeborene Immundefizienz",
      "Die Abstoßung von Transplantaten",
    ],
    1,
    "Immunologische Toleranz bezeichnet das Ausbleiben einer Immunreaktion gegen körpereigene Antigene. Sie wird durch zentrale Toleranz und periphere Toleranz (regulatorische T-Zellen, Anergie) aufrechterhalten.",
    "mittel",
    ["toleranz", "autoimmun", "immunsystem"]
  ),
  q(
    "bio-pool-287",
    "bio-kap5",
    "Welche Autoimmunerkrankung ist durch Antikörper gegen Acetylcholin-Rezeptoren an der neuromuskulären Endplatte gekennzeichnet?",
    [
      "Rheumatoide Arthritis",
      "Multiple Sklerose",
      "Myasthenia gravis",
      "Systemischer Lupus erythematodes",
      "Morbus Crohn",
    ],
    2,
    "Bei Myasthenia gravis blockieren und zerstören Autoantikörper die nikotinischen Acetylcholin-Rezeptoren an der motorischen Endplatte. Die Folge ist eine belastungsabhängige Muskelschwäche.",
    "schwer",
    ["autoimmun", "myasthenia gravis", "neuromuskulär"]
  ),

  // ── Mikrobiologie: Viren (bio-kap5) ───────────────────────────────
  q(
    "bio-pool-288",
    "bio-kap5",
    "Welche der folgenden Eigenschaften trifft auf Viren zu?",
    [
      "Sie besitzen einen eigenen Stoffwechsel",
      "Sie können sich außerhalb einer Wirtszelle vermehren",
      "Sie sind obligat intrazelluläre Parasiten ohne eigenen Stoffwechsel",
      "Sie besitzen immer eine Lipiddoppelschicht-Hülle",
      "Ihre Größe liegt typischerweise im Millimeterbereich",
    ],
    2,
    "Viren sind obligat intrazelluläre Parasiten: Sie besitzen keinen eigenen Stoffwechsel und benötigen die Maschinerie der Wirtszelle zur Replikation. Nicht alle Viren sind behüllt.",
    "leicht",
    ["viren", "mikrobiologie", "obligat intrazellulär"]
  ),
  q(
    "bio-pool-289",
    "bio-kap5",
    "Was ist der Unterschied zwischen dem lytischen und dem lysogenen Zyklus eines Bakteriophagen?",
    [
      "Im lytischen Zyklus integriert der Phage seine DNA ins Bakterienchromosom; im lysogenen vermehrt er sich sofort",
      "Im lytischen Zyklus wird die Wirtszelle zerstört; im lysogenen integriert sich die Phagen-DNA ins Bakteriengenom",
      "Beide Zyklen führen zur sofortigen Zelllyse",
      "Der lysogene Zyklus kommt nur bei eukaryotischen Zellen vor",
      "Es gibt keinen Unterschied — beide Begriffe sind synonym",
    ],
    1,
    "Im lytischen Zyklus vermehrt sich der Phage in der Wirtszelle und zerstört sie anschließend. Im lysogenen Zyklus integriert sich die Phagen-DNA (als Prophage) ins Bakterienchromosom und wird bei der Zellteilung weitergegeben.",
    "mittel",
    ["bakteriophage", "lytisch", "lysogen", "viren"]
  ),
  q(
    "bio-pool-290",
    "bio-kap5",
    "Retroviren wie HIV nutzen welches Enzym, um ihre RNA in DNA umzuschreiben?",
    ["DNA-Polymerase III", "RNA-Polymerase II", "Reverse Transkriptase", "Ligase", "Helicase"],
    2,
    "Die Reverse Transkriptase der Retroviren schreibt das virale RNA-Genom in doppelsträngige DNA um, die anschließend als Provirus ins Wirtsgenom integriert wird. Dieses Enzym ist Ziel antiretroviraler Therapien.",
    "leicht",
    ["retroviren", "reverse transkriptase", "hiv"]
  ),
  q(
    "bio-pool-291",
    "bio-kap5",
    "Welche Aussage zum HI-Virus ist korrekt?",
    [
      "HIV infiziert primär B-Lymphozyten",
      "HIV infiziert primär CD4⁺-T-Helferzellen über den CD4-Rezeptor",
      "HIV kann durch Tröpfcheninfektion übertragen werden",
      "Eine HIV-Infektion kann durch Antibiotika geheilt werden",
      "HIV gehört zu den DNA-Viren",
    ],
    1,
    "HIV bindet über sein Hüllprotein gp120 an den CD4-Rezeptor von T-Helferzellen (und Makrophagen). Die fortschreitende Zerstörung der CD4⁺-Zellen führt zur Immundefizienz (AIDS). HIV ist ein RNA-Retrovirus.",
    "mittel",
    ["hiv", "cd4", "retroviren"]
  ),

  // ── Mikrobiologie: Bakterien (bio-kap5) ───────────────────────────
  q(
    "bio-pool-292",
    "bio-kap5",
    "Welche der folgenden Strukturen ist typisch für Bakterien, aber NICHT für eukaryotische Zellen?",
    [
      "Mitochondrien",
      "Murein (Peptidoglykan) in der Zellwand",
      "Endoplasmatisches Retikulum",
      "Membranumhüllter Zellkern",
      "Golgi-Apparat",
    ],
    1,
    "Murein (Peptidoglykan) ist ein Polymer aus N-Acetylglucosamin und N-Acetylmuraminsäure und kommt ausschließlich in bakteriellen Zellwänden vor. Eukaryotische Zellen besitzen kein Murein.",
    "leicht",
    ["bakterien", "murein", "peptidoglykan"]
  ),
  q(
    "bio-pool-293",
    "bio-kap5",
    "Wie unterscheiden sich grampositive von gramnegativen Bakterien in der Gramfärbung?",
    [
      "Grampositive erscheinen rot, gramnegative blau/violett",
      "Grampositive haben eine dünne Mureinschicht, gramnegative eine dicke",
      "Grampositive erscheinen blau/violett (dicke Mureinschicht), gramnegative rot/rosa",
      "Grampositive besitzen keine Zellwand",
      "Es gibt keinen Farbunterschied; die Unterscheidung erfolgt nur biochemisch",
    ],
    2,
    "Grampositive Bakterien haben eine dicke Mureinschicht, die den Kristallviolett-Farbstoff festhält (blau/violett). Gramnegative haben eine dünne Mureinschicht plus äußere Membran; sie verlieren den Kristallviolett-Farbstoff und werden mit Safranin gegengefärbt (rot/rosa).",
    "mittel",
    ["gramfärbung", "bakterien", "murein"]
  ),
  q(
    "bio-pool-294",
    "bio-kap5",
    "Was versteht man unter bakterieller Konjugation?",
    [
      "Die Aufnahme freier DNA-Fragmente aus der Umgebung",
      "Den Gentransfer zwischen Bakterien über einen Pilus (Sexpilus)",
      "Die Übertragung von DNA durch Bakteriophagen",
      "Die Bildung von Endosporen",
      "Die ungeschlechtliche Vermehrung durch Querteilung",
    ],
    1,
    "Bei der Konjugation überträgt ein Donor-Bakterium DNA über einen Sexpilus auf ein Empfänger-Bakterium (F⁻). Transformation = freie DNA-Aufnahme; Transduktion = DNA-Übertragung durch Phagen.",
    "mittel",
    ["konjugation", "gentransfer", "bakterien"]
  ),
  q(
    "bio-pool-295",
    "bio-kap5",
    "Welcher Mechanismus der Antibiotikaresistenz beruht auf der Übertragung von Resistenzgenen über Plasmide?",
    [
      "Spontane Chromosomenmutation",
      "Horizontaler Gentransfer (z. B. Konjugation)",
      "Vertikaler Gentransfer",
      "Genomische Imprinting-Effekte",
      "Crossing-over bei der Meiose",
    ],
    1,
    "Horizontaler Gentransfer ist der Hauptmechanismus für die rasche Ausbreitung von Antibiotikaresistenzgenen zwischen Bakterien — auch über Speziesgrenzen hinweg.",
    "schwer",
    ["antibiotikaresistenz", "plasmide", "gentransfer"]
  ),

  // ── Mikrobiologie: Pilze (bio-kap5) ───────────────────────────────
  q(
    "bio-pool-296",
    "bio-kap5",
    "Welche der folgenden Aussagen über Pilze ist korrekt?",
    [
      "Pilze besitzen Chloroplasten und betreiben Photosynthese",
      "Pilze sind prokaryotische Organismen",
      "Die Zellwand der Pilze besteht hauptsächlich aus Chitin",
      "Pilze vermehren sich ausschließlich sexuell",
      "Pilze gehören zum Pflanzenreich",
    ],
    2,
    "Pilze sind eukaryotische, heterotrophe Organismen mit einer Zellwand aus Chitin. Sie bilden ein eigenes Reich (Fungi) und können sich sowohl sexuell als auch asexuell (Sporen) vermehren.",
    "leicht",
    ["pilze", "chitin", "mikrobiologie"]
  ),
  q(
    "bio-pool-297",
    "bio-kap5",
    "Candida albicans ist ein opportunistischer Pilz. In welcher klinischen Situation tritt eine Candida-Infektion besonders häufig auf?",
    [
      "Bei hohem Blutdruck",
      "Bei Immunsuppression",
      "Bei Vitaminüberschuss",
      "Bei sportlicher Überanstrengung",
      "Bei erhöhtem Cholesterin",
    ],
    1,
    "Candida albicans ist ein opportunistischer Hefepilz, der bei geschwächtem Immunsystem zu Infektionen führt — von Soor (Mundhöhle) bis zur invasiven Candidämie.",
    "mittel",
    ["candida", "opportunistisch", "pilze"]
  ),

  // ── Evolution: Artbildung & Phylogenie (bio-kap3) ─────────────────
  q(
    "bio-pool-298",
    "bio-kap3",
    "Was versteht man unter allopatrischer Artbildung?",
    [
      "Artbildung durch Polyploidisierung",
      "Artbildung durch räumliche Trennung von Populationen und anschließende genetische Divergenz",
      "Artbildung innerhalb eines gemeinsamen Lebensraums",
      "Artbildung durch horizontalen Gentransfer",
      "Artbildung durch gezielte Zucht",
    ],
    1,
    "Bei der allopatrischen Artbildung wird eine Population durch eine geografische Barriere (Gebirge, Fluss, Meer) getrennt. In Isolation entwickeln sich die Teilpopulationen durch Mutation, Drift und Selektion auseinander, bis reproduktive Isolation entsteht.",
    "mittel",
    ["artbildung", "allopatrisch", "evolution"]
  ),
  q(
    "bio-pool-299",
    "bio-kap3",
    "Welches Konzept beschreibt Strukturen verschiedener Arten, die auf einen gemeinsamen Vorfahren zurückgehen, aber unterschiedliche Funktionen erfüllen?",
    [
      "Analoge Organe",
      "Homologe Organe",
      "Konvergente Evolution",
      "Rudimentäre Organe",
      "Atavismen",
    ],
    1,
    "Homologe Organe haben den gleichen evolutionären Ursprung (gleicher Grundbauplan), erfüllen aber unterschiedliche Funktionen. Analoge Organe haben verschiedenen Ursprung, aber ähnliche Funktion.",
    "leicht",
    ["homologie", "analogie", "evolution"]
  ),
  q(
    "bio-pool-300",
    "bio-kap3",
    "Welche der folgenden Strukturen ist ein Beispiel für ein rudimentäres (vestigiales) Organ beim Menschen?",
    [
      "Das Herz",
      "Der Appendix vermiformis (Wurmfortsatz)",
      "Die Lunge",
      "Die Niere",
      "Das Kleinhirn (Cerebellum) für motorische Koordination und Gleichgewicht",
    ],
    1,
    "Der Wurmfortsatz (Appendix vermiformis) ist beim Menschen ein rudimentäres Organ, das bei pflanzenfressenden Vorfahren als Gärkammer diente. Weitere Beispiele: Steißbein, Weisheitszähne, Ohrmuschelmuskeln.",
    "leicht",
    ["rudimentäre organe", "evolution", "appendix"]
  ),

  // ── Genetik: Vererbung & Chromosomenanomalien (bio-kap4) ──────────
  q(
    "bio-pool-301",
    "bio-kap4",
    "Bei einer Trisomie 21 (Down-Syndrom) liegt welche Chromosomenanomalie vor?",
    [
      "Fehlen eines Chromosoms 21 (Monosomie)",
      "Drei Kopien des Chromosoms 21",
      "Translokation zwischen Chromosom 21 und einem Geschlechtschromosom",
      "Deletion des langen Arms von Chromosom 21",
      "Duplikation des gesamten Genoms (Tetraploidie)",
    ],
    1,
    "Trisomie 21 bedeutet, dass Chromosom 21 dreifach vorhanden ist. Ursache ist meist eine Non-Disjunction während der Meiose. Das Risiko steigt mit dem mütterlichen Alter.",
    "leicht",
    ["trisomie 21", "chromosomenanomalie", "down-syndrom"]
  ),
  q(
    "bio-pool-302",
    "bio-kap4",
    "Non-Disjunction beschreibt:",
    [
      "Die fehlerhafte Separation von Homologen oder Schwesterchromatiden während der Zellteilung",
      "Den normalen Ablauf der Anaphase bei regulärer Chromosomentrennung",
      "Die Fusion von zwei Gameten bei der Befruchtung",
      "Die Trennung von Euchromatin und Heterochromatin bei der Genregulation",
      "Den Abbau fehlgefalteter Proteine durch das Ubiquitin-Proteasom-System",
    ],
    0,
    "Non-Disjunction ist die fehlerhafte Nicht-Trennung von homologen Chromosomen (Meiose I) oder Schwesterchromatiden (Meiose II/Mitose). Sie führt zu Aneuploidie.",
    "mittel",
    ["non-disjunction", "aneuploidie", "chromosomen"]
  ),
  q(
    "bio-pool-303",
    "bio-kap4",
    "Mukoviszidose (Cystische Fibrose) wird welchem Erbgang zugeordnet?",
    [
      "Autosomal-dominant mit Manifestation bei einem betroffenen Allel",
      "Autosomal-rezessiv mit Manifestation nur bei Homozygotie",
      "X-chromosomal-rezessiv mit häufigerer Manifestation bei Männern",
      "X-chromosomal-dominant mit Manifestation bereits bei einem Allel auf dem X-Chromosom",
      "Mitochondrial",
    ],
    1,
    "Mukoviszidose folgt einem autosomal-rezessiven Erbgang. Beide Eltern sind phänotypisch gesund (heterozygote Träger). Nur homozygot Betroffene erkranken.",
    "mittel",
    ["mukoviszidose", "autosomal-rezessiv", "erbgang"]
  ),
  q(
    "bio-pool-304",
    "bio-kap4",
    "Ein Vater hat Hämophilie A (X-chromosomal-rezessiv). Die Mutter ist homozygot gesund. Welche Kinder können betroffen sein?",
    [
      "Alle Söhne",
      "Alle Töchter",
      "Keines der Kinder in dieser Generation",
      "50 % der Söhne",
      "50 % der Töchter",
    ],
    2,
    "Der betroffene Vater (XᴴY) gibt sein Xᴴ-Chromosom an alle Töchter weiter, die heterozygot werden (Konduktorinnen), aber phänotypisch gesund sind. Söhne erhalten das Y vom Vater und ein normales X von der Mutter — sie sind gesund.",
    "schwer",
    ["hämophilie", "x-chromosomal", "erbgang"]
  ),
  q(
    "bio-pool-305",
    "bio-kap4",
    "Was versteht man unter Codominanz?",
    [
      "Ein Allel unterdrückt die Expression des anderen vollständig",
      "Beide Allele werden unabhängig voneinander exprimiert, und beide Phänotypen sind erkennbar",
      "Heterozygote zeigen einen intermediären Phänotyp",
      "Ein Allel ist nur bei Männern aktiv (geschlechtslimitierte Expression)",
      "Beide Allele sind rezessiv und können sich phänotypisch nicht manifestieren",
    ],
    1,
    "Bei Codominanz werden beide Allele gleichzeitig und vollständig exprimiert. Beispiel: Blutgruppe AB — sowohl das A- als auch das B-Antigen werden auf den Erythrozyten gebildet. Bei Intermediärität entsteht ein Mischphänotyp.",
    "mittel",
    ["codominanz", "vererbung", "genetik"]
  ),

  // ── Weitere Genetik-Themen (bio-kap4) ─────────────────────────────
  q(
    "bio-pool-306",
    "bio-kap4",
    "Welches Enzym öffnet die DNA-Doppelhelix während der Replikation?",
    ["DNA-Polymerase", "Ligase", "Helicase", "Topoisomerase", "Primase"],
    2,
    "Die Helicase trennt die beiden DNA-Stränge, indem sie die Wasserstoffbrücken zwischen den komplementären Basen aufbricht. Die Topoisomerase löst dabei die entstehenden Überspiralisierungen.",
    "leicht",
    ["dna-replikation", "helicase", "enzyme"]
  ),
  q(
    "bio-pool-307",
    "bio-kap4",
    "Was ist die Funktion von Okazaki-Fragmenten bei der DNA-Replikation?",
    [
      "Sie bilden die Telomere an den Enden der linearen Chromosomen",
      "Sie sind Segmente des diskontinuierlich synthetisierten Folgestrangs (Lagging Strand)",
      "Sie reparieren Doppelstrangbrüche in der DNA durch Rekombinationsmechanismen",
      "Sie codieren für ribosomale RNA",
      "Sie verhindern die vorzeitige Trennung der Schwesterchromatiden",
    ],
    1,
    "Da die DNA-Polymerase nur in 5'→3'-Richtung synthetisiert, wird der Folgestrang (Lagging Strand) diskontinuierlich in kurzen Fragmenten (Okazaki-Fragmente) synthetisiert, die anschließend durch DNA-Ligase verbunden werden.",
    "schwer",
    ["dna-replikation", "okazaki", "folgestrang"]
  ),
  q(
    "bio-pool-308",
    "bio-kap4",
    "Welche Aussage zur Polymerasekettenreaktion (PCR) ist korrekt?",
    [
      "PCR findet ausschließlich in lebenden Zellen statt",
      "PCR benötigt RNA als Template",
      "PCR umfasst die Schritte Denaturierung, Annealing und Elongation",
      "PCR wird bei einer konstanten Temperatur von 37 °C durchgeführt",
      "PCR verwendet RNA-Polymerase als Enzym",
    ],
    2,
    "Die PCR umfasst drei Schritte pro Zyklus: Denaturierung (~95 °C, Strangtrennung), Annealing (~55–65 °C, Primer-Bindung) und Elongation. Sie ist eine In-vitro-Methode.",
    "mittel",
    ["pcr", "molekularbiologie", "genetik"]
  ),
  q(
    "bio-pool-309",
    "bio-kap5",
    "Welche Zellen des angeborenen Immunsystems sind als \u201Eprofessionelle Antigen-pr\u00E4sentierende Zellen\u201C bekannt und aktivieren naive T-Zellen?",
    [
      "Neutrophile Granulozyten",
      "Erythrozyten",
      "Dendritische Zellen",
      "Thrombozyten",
      "Basophile Granulozyten",
    ],
    2,
    "Dendritische Zellen sind die wichtigsten professionellen Antigen-präsentierenden Zellen (APCs). Sie nehmen Antigene in der Peripherie auf, wandern in die Lymphknoten und präsentieren Peptide über MHC-II an naive T-Helferzellen.",
    "schwer",
    ["dendritische zellen", "antigenpräsentation", "angeborenes immunsystem"]
  ),
  q(
    "bio-pool-310",
    "bio-kap5",
    "Welches System des angeborenen Immunsystems besteht aus Serumproteinen, die kaskadenartig aktiviert werden und zur Lyse von Pathogenen, Opsonierung und Entzündungsförderung führen?",
    [
      "Das Gerinnungssystem",
      "Das Komplementsystem",
      "Das Kallikrein-Kinin-System",
      "Das Renin-Angiotensin-System",
      "Das fibrinolytische System",
    ],
    1,
    "Das Komplementsystem umfasst über 30 Serumproteine, die über drei Wege (klassisch, alternativ, Lektin) kaskadenartig aktiviert werden. Es führt zur Bildung des Membranangriffskomplexes (MAC, Lyse), Opsonierung (C3b) und Freisetzung von Anaphylatoxinen (C3a, C5a).",
    "schwer",
    ["komplementsystem", "angeborenes immunsystem", "opsonierung"]
  ),
];
