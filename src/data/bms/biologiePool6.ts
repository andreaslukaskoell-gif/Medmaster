/**
 * Biologie BMS Pool — Batch 6 (45 Fragen, MedAT-Style).
 * Mix: Typ A (Single Choice), Falsch-Aussagen, Typ M (Rechenfragen).
 * Stoff aus bmsKapitel/biologie (Kap1–Kap5).
 */
import type { Question } from "./index";

const STEM_FALSCH = "Welche der folgenden Aussagen ist falsch?";

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

export const biologiePool6: Question[] = [
  // —— Typ A (normale Single Choice) ——
  q(
    "bio-pool-6-001",
    "bio-kap1",
    "In welchem Zellkompartiment findet die ATP-Synthese bei der oxidativen Phosphorylierung statt?",
    [
      "Zytosol",
      "Mitochondrienmatrix",
      "Intermembranraum",
      "Innerer Mitochondrienmembran",
      "Kernmembran",
    ],
    3,
    "Die oxidative Phosphorylierung (Atmungskette) findet an der inneren Mitochondrienmembran statt; dort sitzen die Komplexe I–IV und die ATP-Synthase.",
    "mittel",
    ["Mitochondrien", "ATP", "Zelle"]
  ),
  q(
    "bio-pool-6-002",
    "bio-kap2",
    "Welches Gewebe kleidet die Harnblase aus?",
    [
      "Flimmerepithel",
      "Urothel",
      "Epidermis",
      "Einschichtiges Plattenepithel",
      "Mehrreihiges Epithel",
    ],
    1,
    "Die Harnblase ist von Urothel (Übergangsepithel) ausgekleidet, das sich beim Füllen dehnen kann.",
    "leicht",
    ["Gewebe", "Epithel", "Harnblase"]
  ),
  q(
    "bio-pool-6-003",
    "bio-kap4",
    "Welche Basenpaarung kommt in der DNA vor?",
    ["A–G", "A–T", "G–T", "C–U", "A–U"],
    1,
    "In der DNA paaren sich A mit T und G mit C. A–U und C–U sind typisch für RNA.",
    "leicht",
    ["DNA", "Genetik", "Basenpaarung"]
  ),
  q(
    "bio-pool-6-004",
    "bio-kap3",
    "Wo findet die Befruchtung der Eizelle beim Menschen statt?",
    ["Im Ovar", "In der Gebärmutter", "Im Eileiter", "In der Vagina", "Im Gebärmutterhals"],
    2,
    "Die Befruchtung erfolgt typischerweise im Eileiter (Tuba uterina), nicht in der Gebärmutter.",
    "leicht",
    ["Befruchtung", "Reproduktion"]
  ),
  q(
    "bio-pool-6-005",
    "bio-kap1",
    "Welche Organelle ist für den Abbau von Wasserstoffperoxid (H₂O₂) wichtig?",
    ["Ribosom", "Lysosom", "Peroxisom", "Golgi-Apparat", "Endoplasmatisches Retikulum"],
    2,
    "Peroxisomen enthalten Katalase und andere Enzyme zum Abbau von H₂O₂ zu Wasser und Sauerstoff.",
    "mittel",
    ["Organellen", "Peroxisom", "Zelle"]
  ),
  q(
    "bio-pool-6-006",
    "bio-kap5",
    "Was beschreibt die Biozönose?",
    [
      "Den unbelebten Lebensraum",
      "Die Lebensgemeinschaft aller Arten in einem Gebiet",
      "Nur die Pflanzen eines Ökosystems",
      "Die abiotischen Faktoren",
      "Ein einzelnes Individuum",
    ],
    1,
    "Biozönose = Lebensgemeinschaft aller Organismen; Biotop = unbelebter Lebensraum; Ökosystem = Biotop + Biozönose.",
    "leicht",
    ["Ökologie", "Biozönose"]
  ),
  q(
    "bio-pool-6-007",
    "bio-kap2",
    "Welche Zellen bauen Knochengewebe ab?",
    ["Osteoblasten", "Osteozyten", "Osteoklasten", "Chondrozyten", "Fibroblasten"],
    2,
    "Osteoklasten bauen Knochen ab (Resorption); Osteoblasten bauen ihn auf.",
    "leicht",
    ["Knochen", "Gewebe"]
  ),
  q(
    "bio-pool-6-008",
    "bio-kap4",
    "In welcher Phase der Meiose kommt es zur Reduktion des Chromosomensatzes?",
    ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I", "Anaphase II"],
    2,
    "In der Anaphase I werden die homologen Chromosomen getrennt; damit wird der Chromosomensatz von diploid auf haploid reduziert.",
    "mittel",
    ["Meiose", "Genetik"]
  ),
  q(
    "bio-pool-6-009",
    "bio-kap1",
    "Welche Struktur ist NICHT von einer eigenen Membran umgeben?",
    ["Mitochondrium", "Lysosom", "Ribosom", "Zellkern", "Peroxisom"],
    2,
    "Ribosomen haben keine Membran; sie bestehen aus rRNA und Proteinen.",
    "mittel",
    ["Organellen", "Zelle"]
  ),
  q(
    "bio-pool-6-010",
    "bio-kap2",
    "Welche Sekretionsform beschreibt die Abgabe von Sekret unter Mitnahme von Zellplasma?",
    ["Merokrin", "Apokrin", "Holokrin", "Endokrin", "Parakrin"],
    1,
    "Apokrin: Teile des Zytoplasmas werden mit dem Sekret abgegeben (z. B. Milchfettkügelchen). Merokrin: nur Sekret; Holokrin: ganze Zelle.",
    "schwer",
    ["Epithel", "Sekretion"]
  ),
  q(
    "bio-pool-6-011",
    "bio-kap4",
    "Ein heterozygoter Träger (Aa) und ein homozygoter rezessiver Partner (aa). Wie groß ist die Wahrscheinlichkeit für ein homozygotes rezessives Kind?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    2,
    "Aa × aa → zu je 50 % Aa und aa. Ein homozygotes rezessives Kind hat also 50 % Wahrscheinlichkeit.",
    "mittel",
    ["Vererbung", "Genetik"]
  ),
  q(
    "bio-pool-6-012",
    "bio-kap3",
    "Welches Hormon löst den Eisprung aus?",
    ["Östrogen", "Progesteron", "LH", "FSH", "Prolactin"],
    2,
    "Der LH-Peak (luteinisierendes Hormon) löst den Eisprung aus; FSH stimuliert vor allem die Follikelreifung.",
    "mittel",
    ["Hormone", "Zyklus", "Reproduktion"]
  ),
  q(
    "bio-pool-6-013",
    "bio-kap5",
    "Was kennzeichnet eine Population?",
    [
      "Alle Arten in einem Gebiet",
      "Individuen einer Art in einem Gebiet",
      "Nur die Pflanzen",
      "Der unbelebte Lebensraum",
      "Die Wechselbeziehungen zwischen Ökosystemen",
    ],
    1,
    "Population = Individuen derselben Art in einem räumlich abgrenzbaren Gebiet.",
    "leicht",
    ["Ökologie", "Population"]
  ),
  q(
    "bio-pool-6-014",
    "bio-kap1",
    "Wo findet die Translation (Proteinbiosynthese) statt?",
    [
      "Im Zellkern",
      "An den Ribosomen im Zytosol bzw. am rauen ER",
      "In den Mitochondrien",
      "Im Golgi-Apparat",
      "In den Lysosomen",
    ],
    1,
    "Die Translation (mRNA → Protein) erfolgt an den Ribosomen, frei im Zytosol oder gebunden am rauen ER.",
    "mittel",
    ["Proteinbiosynthese", "Ribosomen", "Zelle"]
  ),
  q(
    "bio-pool-6-015",
    "bio-kap2",
    "Welches Epithel kleidet die Trachea (Luftröhre) aus?",
    [
      "Urothel",
      "Einschichtiges Plattenepithel",
      "Flimmerepithel (mehrreihig)",
      "Verhornendes Plattenepithel",
      "Darmepithel",
    ],
    2,
    "Die Trachea ist von Flimmerepithel (mehrreihiges Zylinderepithel mit Kinozilien) ausgekleidet.",
    "leicht",
    ["Epithel", "Atemwege"]
  ),
  q(
    "bio-pool-6-016",
    "bio-kap4",
    "Welcher Erbgang liegt vor, wenn die Merkmalsausprägung bei Heterozygoten zwischen den Homozygoten liegt?",
    ["Dominant-rezessiv", "Intermediär (kodominant)", "Gonosomal", "Polygen", "Mitochondrial"],
    1,
    "Bei intermediärem Erbgang zeigen Heterozygote ein mittleres Merkmal (z. B. Blütenfarbe bei Mirabilis).",
    "schwer",
    ["Vererbung", "Genetik"]
  ),
  q(
    "bio-pool-6-017",
    "bio-kap1",
    "Welche Funktion haben Tight Junctions?",
    [
      "Ionenaustausch zwischen Zellen",
      "Verschluss des Interzellularspalts",
      "Verankerung von Zellen an der Basalmembran",
      "Zell-Zell-Kommunikation über Kanäle",
      "Transport von Vesikeln",
    ],
    1,
    "Tight Junctions (zonula occludens) versiegeln den Spalt zwischen Zellen und verhindern den parazellulären Durchtritt.",
    "mittel",
    ["Zellkontakte", "Epithel"]
  ),
  // —— Falsch-Aussagen (Typ A, korrekte Option = falsche Aussage) ——
  q(
    "bio-pool-6-018",
    "bio-kap1",
    STEM_FALSCH,
    [
      "Die DNA-Replikation ist semikonservativ.",
      "Mitochondrien haben eine eigene DNA.",
      "Tierische Zellen haben eine Zellwand aus Zellulose.",
      "Das raue ER ist mit Ribosomen besetzt.",
      "Lysosomen enthalten hydrolytische Enzyme.",
    ],
    2,
    "Tierische Zellen haben keine Zellwand; Zellulose-Zellwände haben Pflanzen (C falsch).",
    "leicht",
    ["Zelle"]
  ),
  q(
    "bio-pool-6-019",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Osteoblasten bauen Knochen auf.",
      "Glatte Muskulatur ist unwillkürlich.",
      "Erythrozyten haben einen Zellkern.",
      "Der Gasaustausch findet in den Alveolen statt.",
      "Hämoglobin bindet Sauerstoff.",
    ],
    2,
    "Reife Erythrozyten haben keinen Zellkern (C falsch).",
    "leicht",
    ["Gewebe", "Blut"]
  ),
  q(
    "bio-pool-6-020",
    "bio-kap4",
    STEM_FALSCH,
    [
      "Die Meiose produziert haploide Keimzellen.",
      "Bei der DNA paart A mit T und G mit C.",
      "Die DNA wird im Zellkern repliziert.",
      "Ein Gen kann mehrere Allele haben.",
      "Die Mitochondrien werden ausschließlich vom Vater vererbt.",
    ],
    4,
    "Mitochondrien werden maternal (von der Mutter) vererbt (E falsch).",
    "mittel",
    ["Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-6-021",
    "bio-kap3",
    STEM_FALSCH,
    [
      "Die Befruchtung erfolgt im Eileiter.",
      "Das Geschlecht wird durch das Spermium (X oder Y) bestimmt.",
      "Das Geschlecht wird durch die Eizelle bestimmt.",
      "Die Kortikalreaktion verhindert Polyspermie.",
      "Aus der Oozyte entstehen Eizelle und Polkörperchen.",
    ],
    2,
    "Das Geschlecht wird durch das Spermium (X oder Y) bestimmt; die Eizelle bestimmt es nicht (C falsch).",
    "mittel",
    ["Befruchtung", "Reproduktion"]
  ),
  q(
    "bio-pool-6-022",
    "bio-kap5",
    STEM_FALSCH,
    [
      "Biotop = unbelebter Lebensraum.",
      "Ökosystem = Biotop + Biozönose.",
      "Die Biozönose umfasst nur Tiere.",
      "Eine Population umfasst Individuen einer Art.",
      "Abiotische Faktoren sind z. B. Licht und Temperatur.",
    ],
    2,
    "Die Biozönose umfasst alle Lebewesen (Pflanzen, Tiere, Pilze, Mikroorganismen), nicht nur Tiere (C falsch).",
    "leicht",
    ["Ökologie"]
  ),
  q(
    "bio-pool-6-023",
    "bio-kap1",
    STEM_FALSCH,
    [
      "ATP enthält Adenosintriphosphat.",
      "Die Glykolyse findet im Zytosol statt.",
      "Die Atmungskette liegt in der Mitochondrienmatrix.",
      "Ribosomen sind an der Proteinbiosynthese beteiligt.",
      "Das Golgi-Apparat modifiziert und sortiert Proteine.",
    ],
    2,
    "Die Atmungskette liegt an der inneren Mitochondrienmembran, nicht in der Matrix (C falsch).",
    "mittel",
    ["Zelle", "Stoffwechsel"]
  ),
  q(
    "bio-pool-6-024",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Tight Junctions versiegeln den Interzellularspalt.",
      "Gap Junctions ermöglichen Ionenfluss zwischen Zellen.",
      "Die Basalmembran liegt unter dem Epithel.",
      "Flimmerepithel kleidet die Trachea aus.",
      "Urothel kleidet die Trachea aus.",
    ],
    4,
    "Die Trachea ist von Flimmerepithel ausgekleidet; Urothel kleidet die Harnwege aus (E falsch).",
    "leicht",
    ["Epithel", "Gewebe"]
  ),
  q(
    "bio-pool-6-025",
    "bio-kap4",
    STEM_FALSCH,
    [
      "Replikation der DNA erfolgt vor der Mitose.",
      "Bei der Mitose entstehen genetisch identische Tochterzellen.",
      "Crossing-over findet in der Mitose statt.",
      "Homologe Chromosomen tragen gleiche Genorte.",
      "Die Meiose hat zwei Teilungsschritte.",
    ],
    2,
    "Crossing-over findet in der Meiose (Prophase I) statt, nicht in der Mitose (C falsch).",
    "mittel",
    ["Mitose", "Meiose", "Genetik"]
  ),
  q(
    "bio-pool-6-026",
    "bio-kap1",
    STEM_FALSCH,
    [
      "Das ER kann glatt oder rau sein.",
      "Peroxisomen bauen H₂O₂ ab.",
      "Der Zellkern enthält die DNA.",
      "Ribosomen sind von einer Membran umgeben.",
      "Lysosomen haben einen sauren pH.",
    ],
    3,
    "Ribosomen haben keine umgebende Membran (D falsch).",
    "leicht",
    ["Zelle", "Organellen"]
  ),
  q(
    "bio-pool-6-027",
    "bio-kap3",
    STEM_FALSCH,
    [
      "FSH stimuliert die Follikelreifung.",
      "LH löst den Eisprung aus.",
      "Progesteron wird vom Gelbkörper gebildet.",
      "Östrogen wird nur in den Eierstöcken gebildet.",
      "Die Menstruation geht mit Abstoßung der Uterusschleimhaut einher.",
    ],
    3,
    "Östrogen wird auch in anderen Geweben (z. B. Fettgewebe, Nebenniere) gebildet, nicht nur in den Eierstöcken (D falsch).",
    "schwer",
    ["Hormone", "Zyklus"]
  ),
  q(
    "bio-pool-6-028",
    "bio-kap5",
    STEM_FALSCH,
    [
      "Produzenten sind meist autotroph.",
      "Konsumenten ernähren sich von anderen Organismen.",
      "Destenten zersetzen totes organisches Material.",
      "Die Nahrungskette beschreibt nur den Energiefluss in eine Richtung.",
      "Ein Ökosystem enthält nur eine Art.",
    ],
    4,
    "Ein Ökosystem enthält viele Arten und abiotische Faktoren (E falsch).",
    "leicht",
    ["Ökologie"]
  ),
  q(
    "bio-pool-6-029",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Hyaliner Knorpel enthält Kollagen Typ II.",
      "Osteoklasten bauen Knochen ab.",
      "Glatte Muskulatur hat keine Querstreifung.",
      "Skelettmuskulatur ist willkürlich steuerbar.",
      "Erythrozyten haben Mitochondrien.",
    ],
    4,
    "Reife Erythrozyten haben weder Zellkern noch Mitochondrien (E falsch).",
    "mittel",
    ["Gewebe", "Blut"]
  ),
  q(
    "bio-pool-6-030",
    "bio-kap4",
    STEM_FALSCH,
    [
      "Ein Gen ist ein DNA-Abschnitt mit Erbinformation.",
      "Ein Allel ist eine Variante eines Gens.",
      "Homozygot bedeutet gleiche Allele auf beiden Chromosomen.",
      "Bei dominant-rezessivem Erbgang setzt sich immer das dominante Allel phänotypisch durch.",
      "Die DNA besteht aus zwei komplementären Strängen.",
    ],
    3,
    "Bei Homozygotie für das rezessive Allel (aa) setzt sich das rezessive Merkmal durch – nicht „immer“ das dominante (D falsch).",
    "mittel",
    ["Genetik", "Vererbung"]
  ),
  // —— Typ M (Rechenfragen / Größenordnungen) ——
  q(
    "bio-pool-6-031",
    "bio-kap2",
    "Wie groß ist der mittlere Durchmesser eines menschlichen Erythrozyten in Metern (Größenordnung)?",
    ["7,5 × 10⁻³ m", "7,5 × 10⁻⁶ m", "7,5 × 10⁻⁹ m", "7,5 × 10⁻¹² m", "7,5 mm"],
    1,
    "Ein Erythrozyt hat einen Durchmesser von etwa 7,5 µm = 7,5 × 10⁻⁶ m.",
    "leicht",
    ["rechenfrage", "erythrozyt", "größe"]
  ),
  q(
    "bio-pool-6-032",
    "bio-kap1",
    "Eine menschliche Zelle hat einen Durchmesser von etwa 10–20 µm. Wie viele Meter sind 15 µm?",
    ["15 × 10⁻³ m", "15 × 10⁻⁶ m", "15 × 10⁻⁹ m", "15 × 10⁻¹² m", "0,15 m"],
    1,
    "15 µm = 15 × 10⁻⁶ m = 0,000015 m.",
    "leicht",
    ["rechenfrage", "zelle", "einheiten"]
  ),
  q(
    "bio-pool-6-033",
    "bio-kap4",
    "Bei einem dihybriden Erbgang (AaBb × AaBb) mit unabhängiger Verteilung: Wie viele der 16 Nachkommen sind reinerbig (homozygot) für beide Merkmale?",
    ["1", "2", "4", "8", "16"],
    0,
    "Nur 1 von 16 ist AABB (reinerbig für beide). Genotypen 1 AABB, 2 AABb, 2 AaBB, 4 AaBb, 1 AAbb, 2 Aabb, 1 aaBB, 2 aaBb, 1 aabb.",
    "schwer",
    ["rechenfrage", "Genetik", "Vererbung"]
  ),
  q(
    "bio-pool-6-034",
    "bio-kap2",
    "Der pH-Wert des menschlichen Bluts liegt im Normbereich etwa bei 7,4. Wie viele Wasserstoffionen (H⁺) sind bei pH 7 im Vergleich zu pH 8 ungefähr vorhanden?",
    [
      "Gleich viele",
      "10-mal mehr bei pH 7",
      "100-mal mehr bei pH 8",
      "10-mal mehr bei pH 8",
      "100-mal mehr bei pH 7",
    ],
    1,
    "Jeder pH-Punkt weniger bedeutet 10× mehr H⁺. Von pH 8 zu pH 7 → 10× mehr H⁺ bei pH 7.",
    "mittel",
    ["rechenfrage", "pH", "Blut"]
  ),
  q(
    "bio-pool-6-035",
    "bio-kap1",
    "Wie viele Chromosomen hat eine menschliche Körperzelle (diploid)?",
    ["23", "46", "69", "92", "48"],
    1,
    "Der Mensch hat 46 Chromosomen (23 Paare) in diploiden Körperzellen.",
    "leicht",
    ["rechenfrage", "Chromosomen", "Genetik"]
  ),
  q(
    "bio-pool-6-036",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Keimzelle (nach der Meiose)?",
    ["23", "46", "92", "22", "44"],
    0,
    "Keimzellen sind haploid: 23 Chromosomen.",
    "leicht",
    ["rechenfrage", "Meiose", "Keimzelle"]
  ),
  q(
    "bio-pool-6-037",
    "bio-kap2",
    "Ein Erythrozyt enthält etwa 270 Mio. Hämoglobinmoleküle. Welche Grßenordnung entspricht dem am ehesten?",
    ["2,7 × 10⁶", "2,7 × 10⁷", "2,7 × 10⁸", "2,7 × 10⁹", "2,7 × 10⁵"],
    2,
    "270 Mio. = 2,7 × 10⁸.",
    "mittel",
    ["rechenfrage", "Hämoglobin", "Blut"]
  ),
  q(
    "bio-pool-6-038",
    "bio-kap5",
    "In einer Population sind 64 % einer Art homozygot für ein dominantes Allel (AA). Welcher Anteil ist heterozygote (Aa)? (Hardy-Weinberg: p² + 2pq + q² = 1, p = Anteil A)",
    ["32 %", "16 %", "8 %", "4 %", "20 %"],
    0,
    "p² = 0,64 → p = 0,8, q = 0,2. 2pq = 2 × 0,8 × 0,2 = 0,32 = 32 %.",
    "schwer",
    ["rechenfrage", "Hardy-Weinberg", "Population"]
  ),
  q(
    "bio-pool-6-039",
    "bio-kap1",
    "Die Länge der menschlichen DNA in einer Zelle (alle 46 Chromosomen) beträgt etwa 2 m. In welcher Einheit wird das typischerweise angegeben?",
    ["Nanometer", "Mikrometer", "Millimeter", "Zentimeter", "Meter"],
    4,
    "Die Gesamtlänge der DNA pro Zellkern wird in Metern angegeben (beim Menschen etwa 2 m pro Zelle).",
    "leicht",
    ["rechenfrage", "DNA", "Zelle"]
  ),
  q(
    "bio-pool-6-040",
    "bio-kap3",
    "Ein Menstruationszyklus dauert im Mittel etwa wie viele Tage?",
    ["7", "14", "21", "28", "35"],
    3,
    "Der durchschnittliche Zyklus beträgt etwa 28 Tage (Spannweite ca. 21–35 Tage).",
    "leicht",
    ["rechenfrage", "Zyklus", "Reproduktion"]
  ),
  q(
    "bio-pool-6-041",
    "bio-kap2",
    "Wie viele Herzkammern hat das menschliche Herz?",
    ["1", "2", "3", "4", "5"],
    3,
    "Das menschliche Herz hat vier Kammern: zwei Vorhöfe und zwei Kammern.",
    "leicht",
    ["rechenfrage", "Herz", "Anatomie"]
  ),
  q(
    "bio-pool-6-042",
    "bio-kap4",
    "Bei Aa × Aa (einfacher dominant-rezessiver Erbgang): Wie viele der Nachkommen sind phänotypisch dominant?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    3,
    "Genotypen: 1 AA, 2 Aa, 1 aa → 75 % phänotypisch dominant (AA und Aa).",
    "mittel",
    ["rechenfrage", "Vererbung"]
  ),
  q(
    "bio-pool-6-043",
    "bio-kap1",
    "Wie viele Nukleotide codieren im Durchschnitt für eine Aminosäure (bei der Translation)?",
    ["1", "2", "3", "4", "5"],
    2,
    "Ein Codon besteht aus 3 Nukleotiden und codiert für eine Aminosäure (bzw. Stopp).",
    "leicht",
    ["rechenfrage", "Proteinbiosynthese", "Genetik"]
  ),
  q(
    "bio-pool-6-044",
    "bio-kap5",
    "In einer linearen Nahrungskette: Wie viele trophische Ebenen hat eine Kette mit Produzent → Primärkonsument → Sekundärkonsument → Tertiärkonsument?",
    ["2", "3", "4", "5", "1"],
    2,
    "Produzent = Ebene 1, Primärkonsument = 2, Sekundär = 3, Tertiär = 4. Es gibt also 4 trophische Ebenen.",
    "mittel",
    ["rechenfrage", "Ökologie", "Nahrungskette"]
  ),
  q(
    "bio-pool-6-045",
    "bio-kap2",
    "Der normale Blutzucker (Glukose) beim Menschen nüchtern liegt in welchem Bereich (in mg/dl)?",
    ["unter 10", "20–40", "70–100", "150–200", "über 300"],
    2,
    "Nüchtern-Blutzucker liegt typischerweise bei etwa 70–100 mg/dl (3,9–5,6 mmol/l).",
    "mittel",
    ["rechenfrage", "Blutzucker", "Stoffwechsel"]
  ),
];
