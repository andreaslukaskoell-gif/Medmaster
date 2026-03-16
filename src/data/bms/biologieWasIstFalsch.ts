/**
 * Biologie Pool — \"Was ist falsch?" (Typ A) pro Thema.
 * Stoff aus bmsKapitel/biologie.
 * 30 Fragen: Kap1 (6), Kap2 (8), Kap3 (5), Kap4 (6), Kap5 (5).
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
    tags: ["falsch-aussage", ...tags],
  };
}

export const biologieWasIstFalsch: Question[] = [
  // ──────────────────────────────────────────────
  // Kap1 — Zellbiologie (6 Fragen)
  // ──────────────────────────────────────────────
  q(
    "bio-falsch-001",
    "bio-kap1",
    "Welche der folgenden Aussagen zu Zellorganellen ist FALSCH?",
    [
      "Mitochondrien besitzen eine eigene ringförmige DNA.",
      "Das raue endoplasmatische Retikulum ist mit Ribosomen besetzt.",
      "Lysosomen enthalten hydrolytische Enzyme für den intrazellulären Abbau.",
      "Der Golgi-Apparat ist der Hauptort der Proteinbiosynthese.",
      "Peroxisomen bauen unter anderem Wasserstoffperoxid ab.",
    ],
    3,
    "Der Golgi-Apparat modifiziert, sortiert und verpackt Proteine, ist aber nicht der Hauptort der Proteinbiosynthese. Die Proteinbiosynthese findet an den Ribosomen statt (frei im Cytoplasma oder am rauen ER).",
    "leicht",
    ["zellorganellen", "golgi-apparat", "ribosomen"]
  ),
  q(
    "bio-falsch-002",
    "bio-kap1",
    "Welche der folgenden Aussagen zur Zellmembran ist FALSCH?",
    [
      "Die Zellmembran besteht aus einer Phospholipid-Doppelschicht.",
      "Cholesterin in der Membran erhöht deren Fluidität bei niedrigen Temperaturen.",
      "Integrale Membranproteine durchspannen die gesamte Lipiddoppelschicht.",
      "Die Zellmembran ist vollständig undurchlässig für alle Ionen.",
      "Glykolipide kommen hauptsächlich auf der extrazellulären Seite vor.",
    ],
    3,
    "Die Zellmembran ist nicht vollständig undurchlässig für Ionen. Ionenkanäle und Ionenpumpen ermöglichen den selektiven Transport von Ionen wie Na⁺, K⁺, Ca²⁺ und Cl⁻ durch die Membran.",
    "leicht",
    ["zellmembran", "ionenkanäle", "phospholipide"]
  ),
  q(
    "bio-falsch-003",
    "bio-kap1",
    "Welche der folgenden Aussagen zu Prokaryoten und Eukaryoten ist FALSCH?",
    [
      "Prokaryoten besitzen keinen membranumschlossenen Zellkern.",
      "Eukaryoten haben membranumschlossene Organellen wie Mitochondrien.",
      "Prokaryoten können Ribosomen vom 70S-Typ besitzen.",
      "Prokaryoten haben typischerweise mehrere lineare Chromosomen im Nucleoid.",
      "Die Zellwand von Bakterien enthält häufig Peptidoglykan (Murein).",
    ],
    3,
    "Prokaryoten besitzen typischerweise ein einziges ringförmiges Chromosom (und ggf. Plasmide), keine mehreren linearen Chromosomen. Mehrere lineare Chromosomen sind charakteristisch für Eukaryoten.",
    "leicht",
    ["prokaryoten", "eukaryoten", "chromosomen"]
  ),
  q(
    "bio-falsch-004",
    "bio-kap1",
    "Welche der folgenden Aussagen zum Membrantransport ist FALSCH?",
    [
      "Beim passiven Transport wird keine Stoffwechselenergie (ATP) benötigt.",
      "Die Na⁺/K⁺-ATPase transportiert 3 Na⁺ nach außen und 2 K⁺ nach innen.",
      "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran.",
      "Erleichterte Diffusion erfolgt immer gegen den Konzentrationsgradienten.",
      "Endozytose ist die Aufnahme von Stoffen durch Einstülpung der Zellmembran.",
    ],
    3,
    "Erleichterte Diffusion erfolgt entlang des Konzentrationsgradienten (vom Ort höherer zum Ort niedrigerer Konzentration), nicht dagegen. Der Transport gegen den Gradienten erfordert aktiven Transport mit Energieverbrauch.",
    "mittel",
    ["membrantransport", "diffusion", "aktiver-transport"]
  ),
  q(
    "bio-falsch-005",
    "bio-kap1",
    "Welche der folgenden Aussagen zur Zellteilung ist FALSCH?",
    [
      "In der S-Phase des Zellzyklus wird die DNA repliziert.",
      "Während der Mitose entstehen zwei genetisch identische Tochterzellen.",
      "Zytokinese bezeichnet die Teilung des Zytoplasmas.",
      "In der G1-Phase erfolgt die Verdopplung der Zentriolen.",
      "Die Metaphase ist durch die Anordnung der Chromosomen in der Äquatorialebene gekennzeichnet.",
    ],
    3,
    "Die Verdopplung der Zentriolen erfolgt in der S-Phase (zusammen mit der DNA-Replikation) und setzt sich in der G2-Phase fort, nicht in der G1-Phase. In der G1-Phase wächst die Zelle und bereitet sich auf die DNA-Synthese vor.",
    "mittel",
    ["zellzyklus", "mitose", "zentriolen"]
  ),
  q(
    "bio-falsch-006",
    "bio-kap1",
    "Welche der folgenden Aussagen zum Zytoskelett ist FALSCH?",
    [
      "Aktinfilamente (Mikrofilamente) sind am dünnsten mit ca. 7 nm Durchmesser.",
      "Mikrotubuli bilden die Grundstruktur der Mitosespindel.",
      "Intermediärfilamente sind für die mechanische Stabilität der Zelle wichtig.",
      "Mikrotubuli bestehen aus polymerisierten Aktin-Untereinheiten.",
      "Zilien und Flagellen enthalten Mikrotubuli in einer 9+2-Anordnung.",
    ],
    3,
    "Mikrotubuli bestehen aus Tubulin-Untereinheiten (α- und β-Tubulin), nicht aus Aktin. Aktin bildet die Mikrofilamente. Dieser Unterschied ist prüfungsrelevant.",
    "mittel",
    ["zytoskelett", "mikrotubuli", "aktin"]
  ),

  // ──────────────────────────────────────────────
  // Kap2 — Humanbiologie (8 Fragen)
  // ──────────────────────────────────────────────
  q(
    "bio-falsch-007",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Blutkreislauf ist FALSCH?",
    [
      "Die linke Herzkammer pumpt sauerstoffreiches Blut in die Aorta.",
      "Die Lungenarterie (Arteria pulmonalis) führt sauerstoffarmes Blut.",
      "Die Lungenvenen führen sauerstoffreiches Blut zum linken Vorhof.",
      "Die rechte Herzkammer pumpt sauerstoffreiches Blut in die Lungenarterie.",
      "Das Herz besitzt vier Klappen, die den Blutfluss in eine Richtung sichern.",
    ],
    3,
    "Die rechte Herzkammer pumpt sauerstoffarmes Blut in die Lungenarterie, nicht sauerstoffreiches. Das Blut wird erst in der Lunge mit Sauerstoff angereichert und gelangt dann über die Lungenvenen zum linken Herzen.",
    "leicht",
    ["blutkreislauf", "herz", "lungenarterie"]
  ),
  q(
    "bio-falsch-008",
    "bio-kap2",
    "Welche der folgenden Aussagen zur Verdauung ist FALSCH?",
    [
      "Pepsin spaltet Proteine im sauren Milieu des Magens.",
      "Gallensäuren emulgieren Fette und erleichtern deren enzymatische Spaltung.",
      "Trypsin wird als inaktives Trypsinogen im Pankreas gebildet.",
      "Die Resorption der meisten Nährstoffe findet im Dickdarm statt.",
      "Amylase beginnt die Kohlenhydratverdauung bereits im Mund.",
    ],
    3,
    "Die Resorption der meisten Nährstoffe findet im Dünndarm statt, nicht im Dickdarm. Der Dickdarm resorbiert hauptsächlich Wasser und Elektrolyte und dickt den Nahrungsbrei ein.",
    "leicht",
    ["verdauung", "dünndarm", "dickdarm"]
  ),
  q(
    "bio-falsch-009",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Nervensystem ist FALSCH?",
    [
      "Synapsen übertragen Signale meist über Neurotransmitter (chemische Synapse).",
      "Das Ruhemembranpotenzial eines Neurons beträgt etwa −70 mV.",
      "Myelinscheiden erhöhen die Leitungsgeschwindigkeit durch saltatorische Erregungsleitung.",
      "Das somatische Nervensystem steuert hauptsächlich die glatte Muskulatur der Eingeweide.",
      "Dendritenempfangen Signale und leiten sie zum Zellkörper.",
    ],
    3,
    "Das somatische (willkürliche) Nervensystem steuert die Skelettmuskulatur. Die glatte Muskulatur der Eingeweide wird vom vegetativen (autonomen) Nervensystem gesteuert (Sympathikus und Parasympathikus).",
    "mittel",
    ["nervensystem", "somatisch", "vegetativ"]
  ),
  q(
    "bio-falsch-010",
    "bio-kap2",
    "Welche der folgenden Aussagen zur Niere ist FALSCH?",
    [
      "In den Glomeruli wird das Blutplasma filtriert (Primärharn).",
      "Pro Tag werden ca. 180 Liter Primärharn gebildet.",
      "Im proximalen Tubulus werden Glucose und Aminosäuren rückresorbiert.",
      "ADH (Antidiuretisches Hormon) fördert die Wasserausscheidung und verdünnt den Harn.",
      "Die Henle-Schleife spielt eine zentrale Rolle bei der Harnkonzentrierung.",
    ],
    3,
    "ADH (Antidiuretisches Hormon, Vasopressin) fördert die Wasserrückresorption in den Sammelrohren und konzentriert den Harn. Es hemmt also die Wasserausscheidung — das Gegenteil der falschen Aussage.",
    "mittel",
    ["niere", "adh", "harnkonzentrierung"]
  ),
  q(
    "bio-falsch-011",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Hormonsystem ist FALSCH?",
    [
      "Insulin wird in den β-Zellen der Langerhans-Inseln des Pankreas gebildet.",
      "Adrenalin wird im Nebennierenmark produziert und wirkt als Stresshormon.",
      "TSH (thyreoideastimulierendes Hormon) wird direkt in der Schilddrüse produziert.",
      "Cortisol wird in der Nebennierenrinde synthetisiert.",
      "Östrogene werden hauptsächlich in den Ovarien gebildet.",
    ],
    2,
    "TSH wird in der Adenohypophyse (Hypophysenvorderlappen) produziert und stimuliert dann die Schilddrüse zur Hormonausschüttung (T3/T4). TSH ist kein Schilddrüsenhormon, sondern ein Hypophysenhormon.",
    "mittel",
    ["hormonsystem", "tsh", "hypophyse"]
  ),
  q(
    "bio-falsch-012",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Blut ist FALSCH?",
    [
      "Thrombozyten spielen eine zentrale Rolle bei der Blutgerinnung.",
      "Leukozyten sind kernhaltige Zellen der Immunabwehr.",
      "Erythrozyten transportieren Sauerstoff gebunden an Hämoglobin.",
      "Das Blutplasma besteht zu etwa 90 % aus Proteinen.",
      "Blutgruppen werden durch Antigene auf der Erythrozytenoberfläche bestimmt.",
    ],
    3,
    "Blutplasma besteht zu etwa 90 % aus Wasser, nicht aus Proteinen. Proteine (Albumin, Globuline, Fibrinogen) machen nur ca. 7–8 % des Plasmas aus.",
    "leicht",
    ["blut", "blutplasma", "erythrozyten"]
  ),
  q(
    "bio-falsch-013",
    "bio-kap2",
    "Welche der folgenden Aussagen zur Muskulatur ist FALSCH?",
    [
      "Die quergestreifte Skelettmuskulatur wird willkürlich gesteuert.",
      "Die Herzmuskulatur besitzt Glanzstreifen (Disci intercalares) zur Erregungsweiterleitung.",
      "Aktinund Myosin sind die kontraktilen Proteine im Sarkomer.",
      "Calcium-Ionen sind für die Auslösung der Muskelkontraktion essenziell.",
      "Glatte Muskulatur zeigt die typische Querstreifung aus A- und I-Banden.",
    ],
    4,
    "Glatte Muskulatur zeigt keine Querstreifung. Die typischen A- und I-Banden durch die regelmäßige Anordnung von Aktin und Myosin finden sich nur in der quergestreiften Muskulatur (Skelett- und Herzmuskel).",
    "leicht",
    ["muskulatur", "querstreifung", "glatte-muskulatur"]
  ),
  q(
    "bio-falsch-014",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Gasaustausch in der Lunge ist FALSCH?",
    [
      "Der Gasaustausch findet in den Alveolen (Lungenbläschen) statt.",
      "Sauerstoff diffundiert vom Alveolarraum ins Kapillarblut.",
      "CO₂ diffundiert vom Kapillarblut in den Alveolarraum.",
      "Die Diffusionsstrecke zwischen Alveolarluft und Blut beträgt etwa 1 mm.",
      "Surfactant setzt die Oberflächenspannung der Alveolen herab.",
    ],
    3,
    "Die Diffusionsstrecke (Blut-Luft-Schranke) beträgt nur etwa 0,2–0,6 µm, nicht 1 mm. Diese extrem kurze Strecke ermöglicht den effizienten Gasaustausch durch Diffusion.",
    "schwer",
    ["gasaustausch", "alveolen", "diffusion"]
  ),

  // ──────────────────────────────────────────────
  // Kap3 — Entwicklung / Evolution (5 Fragen)
  // ──────────────────────────────────────────────
  q(
    "bio-falsch-015",
    "bio-kap3",
    "Welche der folgenden Aussagen zur Evolutionstheorie ist FALSCH?",
    [
      "Natürliche Selektion bevorzugt Individuen mit höherer Fitness.",
      "Mutation ist die einzige Quelle neuer genetischer Variation.",
      "Genetische Drift hat in kleinen Populationen stärkere Auswirkungen.",
      "Gründereffekt und Flaschenhalseffekt sind Sonderformen der genetischen Drift.",
      "Isolation von Populationen führt langfristig zu Artbildung (Speziation).",
    ],
    1,
    "Mutation ist zwar die ultimative Quelle neuer Allele, aber nicht die einzige Quelle genetischer Variation. Auch Rekombination (durch Crossing-over und unabhängige Assortierung in der Meiose) erzeugt neue Kombinationen genetischer Variation.",
    "mittel",
    ["evolution", "mutation", "rekombination"]
  ),
  q(
    "bio-falsch-016",
    "bio-kap3",
    "Welche der folgenden Aussagen zum Hardy-Weinberg-Gleichgewicht ist FALSCH?",
    [
      "Es setzt eine ideale, unendlich große Population voraus.",
      "Es gilt nur, wenn keine Selektion stattfindet.",
      "Es erfordert Panmixie (zufällige Paarung).",
      "Es bleibt auch bei hoher Mutationsrate unverändert bestehen.",
      "Die Formel lautet p² + 2pq + q² = 1 für ein Zwei-Allel-System.",
    ],
    3,
    "Das Hardy-Weinberg-Gleichgewicht setzt voraus, dass keine Mutation stattfindet. Bei hoher Mutationsrate werden Allelfrequenzen verändert, und das Gleichgewicht gilt nicht mehr. Mutation ist einer der fünf Faktoren, die das HWG stören.",
    "schwer",
    ["hardy-weinberg", "populationsgenetik", "mutation"]
  ),
  q(
    "bio-falsch-017",
    "bio-kap3",
    "Welche der folgenden Aussagen zur Embryonalentwicklung ist FALSCH?",
    [
      "Die Befruchtung findet normalerweise in der Ampulle des Eileiters statt.",
      "Die Morula ist ein solider Zellhaufen aus etwa 16–32 Zellen.",
      "Die Blastozyste nistet sich in die Gebärmutterschleimhaut (Endometrium) ein.",
      "Die Gastrulation bildet zwei Keimblätter: Ektoderm und Entoderm.",
      "Aus dem Mesoderm entwickeln sich unter anderem Muskeln, Knochen und Blut.",
    ],
    3,
    "Bei der Gastrulation entstehen drei Keimblätter: Ektoderm, Mesoderm und Entoderm, nicht nur zwei. Das Mesoderm als mittleres Keimblatt ist essenziell für die Entwicklung von Muskeln, Knochen, Blutgefäßen und weiteren Strukturen.",
    "mittel",
    ["embryologie", "gastrulation", "keimblätter"]
  ),
  q(
    "bio-falsch-018",
    "bio-kap3",
    "Welche der folgenden Aussagen zu Evolutionsbelegen ist FALSCH?",
    [
      "Homologe Organe weisen auf gemeinsame Abstammung hin.",
      "Analoge Organe haben gleiche Funktion, aber verschiedenen Bauplan.",
      "Rudimentäre Organe sind funktionslose Überreste früherer Strukturen.",
      "Biogenetische Grundregel: Die Ontogenese wiederholt vollständig die Phylogenese.",
      "Fossilien dokumentieren die Entwicklung des Lebens über geologische Zeiträume.",
    ],
    3,
    "Die biogenetische Grundregel nach Haeckel besagt, dass die Ontogenese die Phylogenese nur in Grundzügen rekapituliert, nicht vollständig wiederholt. Die ursprüngliche strenge Formulierung gilt als überholt; korrekt ist eine abgeschwächte Version.",
    "schwer",
    ["evolution", "biogenetische-grundregel", "homologie"]
  ),
  q(
    "bio-falsch-019",
    "bio-kap3",
    "Welche der folgenden Aussagen zur Meiose ist FALSCH?",
    [
      "Die Meiose erzeugt haploide Gameten aus diploiden Zellen.",
      "In der Meiose I werden homologe Chromosomen getrennt (Reduktionsteilung).",
      "Crossing-over findet in der Prophase I statt und erhöht die genetische Variabilität.",
      "In der Meiose II werden die Schwesterchromatiden getrennt, ähnlich der Mitose.",
      "Nach der Meiose I liegen bereits haploide Zellen mit Ein-Chromatid-Chromosomen vor.",
    ],
    4,
    "Nach der Meiose I liegen zwar haploide Zellen vor, diese enthalten aber noch Zwei-Chromatid-Chromosomen (jedes Chromosom besteht noch aus zwei Schwesterchromatiden). Erst nach der Meiose II liegen Ein-Chromatid-Chromosomen vor.",
    "schwer",
    ["meiose", "chromatiden", "reduktionsteilung"]
  ),

  // ──────────────────────────────────────────────
  // Kap4 — Genetik (6 Fragen)
  // ──────────────────────────────────────────────
  q(
    "bio-falsch-020",
    "bio-kap4",
    "Welche der folgenden Aussagen zur DNA-Struktur ist FALSCH?",
    [
      "DNA besteht aus Nukleotiden mit Desoxyribose, Phosphatgruppe und Base.",
      "Adenin paart sich über zwei Wasserstoffbrücken mit Thymin.",
      "Guanin paart sich über drei Wasserstoffbrücken mit Cytosin.",
      "Die beiden DNA-Stränge verlaufen parallel in 5'→3'-Richtung.",
      "Die DNA-Doppelhelix dreht sich rechtsgängig (B-Form).",
    ],
    3,
    "Die beiden DNA-Stränge verlaufen antiparallel, nicht parallel. Der eine Strang verläuft in 5'→3'-Richtung, der komplementäre Strang in 3'→5'-Richtung. Diese Antiparallelität ist fundamental für Replikation und Transkription.",
    "leicht",
    ["dna", "antiparallel", "doppelhelix"]
  ),
  q(
    "bio-falsch-021",
    "bio-kap4",
    "Welche der folgenden Aussagen zu den Mendelschen Regeln ist FALSCH?",
    [
      "Die Uniformitätsregel besagt, dass die F1-Generation bei reinerbigen Eltern uniform ist.",
      "Die Spaltungsregel beschreibt die Aufspaltung der Merkmale in der F2-Generation.",
      "Die Unabhängigkeitsregel gilt nur für Gene auf verschiedenen Chromosomen.",
      "Bei intermediärem Erbgang zeigt die F1-Generation eine Mischform der Merkmale.",
      "Bei dominant-rezessivem Erbgang spaltet die F2-Generation immer im Verhältnis 1:1 auf.",
    ],
    4,
    "Bei dominant-rezessivem Erbgang spaltet die F2-Generation im Verhältnis 3:1 (phänotypisch) bzw. 1:2:1 (genotypisch) auf, nicht im Verhältnis 1:1. Das 1:1-Verhältnis tritt bei Rückkreuzung (Testkreuzung) eines heterozygoten Individuums mit einem homozygot-rezessiven auf.",
    "leicht",
    ["mendel", "spaltungsregel", "erbgang"]
  ),
  q(
    "bio-falsch-022",
    "bio-kap4",
    "Welche der folgenden Aussagen zu Mutationen ist FALSCH?",
    [
      "Punktmutationen betreffen den Austausch einzelner Basenpaare.",
      "Frameshift-Mutationen entstehen durch Insertion oder Deletion von Basen.",
      "Chromosomenmutationen betreffen die Struktur einzelner Chromosomen.",
      "Genommutationen verändern die Anzahl ganzer Chromosomen (z. B. Trisomie 21).",
      "Stille Mutationen führen immer zu einer veränderten Aminosäuresequenz.",
    ],
    4,
    "Stille (synonyme) Mutationen führen gerade nicht zu einer veränderten Aminosäuresequenz. Durch die Degeneriertheit des genetischen Codes können verschiedene Codons für dieselbe Aminosäure codieren, sodass ein Basenaustausch ohne Auswirkung auf das Protein bleibt.",
    "leicht",
    ["mutation", "stille-mutation", "genetischer-code"]
  ),
  q(
    "bio-falsch-023",
    "bio-kap4",
    "Welche der folgenden Aussagen zur Proteinbiosynthese ist FALSCH?",
    [
      "Bei der Transkription wird mRNA am DNA-Matrizenstrang synthetisiert.",
      "Das Startcodon AUG codiert die Aminosäure Methionin.",
      "Transfer-RNA (tRNA) transportiert Aminosäuren zum Ribosom.",
      "Die Translation findet im Zellkern statt, die Transkription im Zytoplasma.",
      "Stoppcodons (UAA, UAG, UGA) beenden die Translation.",
    ],
    3,
    "Die Zuordnung ist vertauscht: Die Transkription findet im Zellkern statt (DNA→mRNA), die Translation dagegen im Zytoplasma an den Ribosomen (mRNA→Protein). Bei Eukaryoten sind beide Prozesse räumlich getrennt.",
    "leicht",
    ["proteinbiosynthese", "transkription", "translation"]
  ),
  q(
    "bio-falsch-024",
    "bio-kap4",
    "Welche der folgenden Aussagen zur Epigenetik ist FALSCH?",
    [
      "DNA-Methylierung kann die Genexpression herabsetzen.",
      "Histonacetylierung lockert die Chromatinstruktur und fördert die Transkription.",
      "Epigenetische Veränderungen betreffen die DNA-Sequenz direkt.",
      "Epigenetische Muster können teilweise an die nächste Generation weitergegeben werden.",
      "Umweltfaktoren wie Ernährung können epigenetische Modifikationen beeinflussen.",
    ],
    2,
    "Epigenetische Veränderungen betreffen gerade nicht die DNA-Sequenz selbst, sondern regulieren die Genexpression durch Modifikationen wie Methylierung, Histonmodifikation und nicht-codierende RNA — ohne die Basenabfolge zu ändern.",
    "mittel",
    ["epigenetik", "methylierung", "histonmodifikation"]
  ),
  q(
    "bio-falsch-025",
    "bio-kap4",
    "Welche der folgenden Aussagen zur DNA-Replikation ist FALSCH?",
    [
      "Die DNA-Replikation verläuft semikonservativ.",
      "Die Helikase entwindet die DNA-Doppelhelix.",
      "Die DNA-Polymerase synthetisiert neue Stränge in 5'→3'-Richtung.",
      "Am Leitstrang wird die DNA kontinuierlich, am Folgestrang diskontinuierlich synthetisiert.",
      "Die Primase synthetisiert DNA-Primer, die später durch RNA ersetzt werden.",
    ],
    4,
    "Die Primase synthetisiert RNA-Primer (nicht DNA-Primer), die anschließend durch DNA ersetzt werden (nicht durch RNA). Die Primer aus RNA werden von der DNA-Polymerase I durch DNA-Nukleotide ausgetauscht und die Lücken von der Ligase geschlossen.",
    "schwer",
    ["replikation", "primase", "dna-polymerase"]
  ),

  // ──────────────────────────────────────────────
  // Kap5 — Ökologie / Immunologie (5 Fragen)
  // ──────────────────────────────────────────────
  q(
    "bio-falsch-026",
    "bio-kap5",
    "Welche der folgenden Aussagen zum Immunsystem ist FALSCH?",
    [
      "B-Lymphozyten produzieren nach Aktivierung Antikörper (Immunglobuline).",
      "T-Killerzellen (zytotoxische T-Zellen) zerstören virusinfizierte Körperzellen.",
      "Makrophagen gehören zur unspezifischen (angeborenen) Immunabwehr.",
      "Antikörper der Klasse IgM sind die kleinsten Immunglobuline und durchqueren die Plazenta.",
      "Dendritische Zellen sind professionelle antigenpräsentierende Zellen.",
    ],
    3,
    "IgG (nicht IgM) ist das einzige Immunglobulin, das die Plazenta durchquert und dem Neugeborenen Nestschutz verleiht. IgM ist das größte Immunglobulin (Pentamer) und kann die Plazenta nicht passieren.",
    "mittel",
    ["immunsystem", "immunglobuline", "igm", "igg"]
  ),
  q(
    "bio-falsch-027",
    "bio-kap5",
    "Welche der folgenden Aussagen zur Ökologie ist FALSCH?",
    [
      "Produzenten (Pflanzen) bilden die Basis der Nahrungskette.",
      "Destruenten (Zersetzer) bauen tote organische Substanz ab.",
      "In einem Ökosystem wird Energie in Kreisläufen recycelt, genau wie Materie.",
      "Die ökologische Nische beschreibt die Gesamtheit der Umweltansprüche einer Art.",
      "Zwischen verschiedenen trophischen Ebenen gehen etwa 90 % der Energie verloren.",
    ],
    2,
    "Materie wird in Ökosystemen in Kreisläufen recycelt, Energie jedoch nicht. Energie fließt als Einbahnstraße durch das Ökosystem: von der Sonne über Produzenten zu Konsumenten und wird bei jedem Schritt großteils als Wärme abgegeben (Energiefluss, kein Energiekreislauf).",
    "mittel",
    ["ökologie", "energiefluss", "nahrungskette"]
  ),
  q(
    "bio-falsch-028",
    "bio-kap5",
    "Welche der folgenden Aussagen zu Antikörpern ist FALSCH?",
    [
      "Antikörper bestehen aus zwei schweren und zwei leichten Ketten.",
      "Die variable Region des Antikörpers bindet spezifisch an das Antigen.",
      "IgA kommt hauptsächlich in Schleimhautsekreten vor (z. B. Speichel, Muttermilch).",
      "IgE spielt eine zentrale Rolle bei allergischen Reaktionen vom Soforttyp.",
      "Jeder Antikörper kann verschiedene, beliebige Antigene gleichzeitig binden.",
    ],
    4,
    "Antikörper binden hochspezifisch — jeder Antikörper erkennt in der Regel nur ein bestimmtes Antigen (bzw. Epitop). Die Spezifität beruht auf der variablen Region und ist das Grundprinzip der adaptiven Immunantwort.",
    "leicht",
    ["antikörper", "spezifität", "immunglobuline"]
  ),
  q(
    "bio-falsch-029",
    "bio-kap5",
    "Welche der folgenden Aussagen zu ökologischen Beziehungen ist FALSCH?",
    [
      "Symbiose ist das Zusammenleben zweier Arten zum gegenseitigen Vorteil (Mutualismus).",
      "Parasitismus nützt dem Parasiten und schadet dem Wirt.",
      "Kommensalismus nützt einem Partner, ohne dem anderen zu schaden.",
      "Intraspezifische Konkurrenz findet zwischen Individuen verschiedener Arten statt.",
      "Räuber-Beute-Beziehungen können zu Populationsschwankungen führen (Lotka-Volterra).",
    ],
    3,
    "Intraspezifische Konkurrenz findet zwischen Individuen derselben Art statt (intra = innerhalb). Konkurrenz zwischen verschiedenen Arten heißt interspezifische Konkurrenz (inter = zwischen).",
    "leicht",
    ["ökologie", "konkurrenz", "intraspezifisch"]
  ),
  q(
    "bio-falsch-030",
    "bio-kap5",
    "Welche der folgenden Aussagen zur Immunreaktion ist FALSCH?",
    [
      "Bei der aktiven Immunisierung bildet der Körper selbst Antikörper nach Antigenkontakt.",
      "Bei der passiven Immunisierung werden fertige Antikörper verabreicht.",
      "Gedächtniszellen ermöglichen bei erneutem Kontakt eine schnellere Immunantwort.",
      "Die Erstreaktion (Primärantwort) produziert hauptsächlich IgG-Antikörper.",
      "Impfungen nutzen das Prinzip der aktiven Immunisierung.",
    ],
    3,
    "Die Primärantwort (Erstreaktion) produziert hauptsächlich IgM-Antikörper, nicht IgG. Erst bei der Sekundärantwort (erneuter Antigenkontakt) dominiert IgG durch den Klassenwechsel (Isotyp-Switch) der B-Zellen.",
    "schwer",
    ["immunreaktion", "primärantwort", "igm", "igg"]
  ),
];
