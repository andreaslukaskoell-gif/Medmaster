/**
 * Biologie BMS Pool — echte Fragen aus Kap2–Kap5 (Gewebe, Entwicklung, Genetik, Ökologie).
 * Ersetzt Platzhalter durch inhaltliche Fragen aus bmsKapitel/biologie.
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

export const biologiePool8: Question[] = [
  q(
    "bio-pool-8-001",
    "bio-kap2",
    "Welches Gewebe kleidet die Harnblase aus?",
    [
      "Flimmerepithel",
      "Urothel (Übergangsepithel)",
      "Epidermis",
      "Einschichtiges Plattenepithel",
      "Mehrreihiges Epithel",
    ],
    1,
    "Die Harnblase ist von Urothel mit Schirmzellen ausgekleidet; es kann sich beim Füllen stark dehnen.",
    "leicht",
    ["Epithel", "Harnblase", "Kap2"]
  ),
  q(
    "bio-pool-8-002",
    "bio-kap2",
    "Welche Zellkontakte ermöglichen Ionenfluss zwischen Herzmuskelzellen?",
    ["Tight Junctions", "Desmosomen", "Gap Junctions", "Hemidesmosomen", "Adherens Junctions"],
    2,
    "Gap Junctions (Connexine) ermöglichen direkten Ionenaustausch; die Erregung breitet sich so koordiniert im Herzen aus.",
    "mittel",
    ["Zellkontakte", "Herz", "Kap2"]
  ),
  q(
    "bio-pool-8-003",
    "bio-kap4",
    "Bei Aa × Aa (einfacher dominant-rezessiver Erbgang): Wie viele der Nachkommen sind phänotypisch dominant?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    3,
    "Genotypen: 1 AA, 2 Aa, 1 aa → 75 % phänotypisch dominant (AA und Aa).",
    "mittel",
    ["Vererbung", "Kap4"]
  ),
  q(
    "bio-pool-8-004",
    "bio-kap1",
    "Welche Aussage zu positiver Rückkopplung trifft zu?",
    [
      "Sie stabilisiert den Sollwert wie die Blutzuckerregulation.",
      "Sie verstärkt den auslösenden Reiz (z. B. Blutgerinnung, Wehen).",
      "Sie ist der Hauptmechanismus der Homöostase.",
      "Sie wirkt dem Auslöser entgegen.",
      "Sie kommt nur bei Krankheiten vor.",
    ],
    1,
    "Positive Rückkopplung verstärkt den Reiz (Blutgerinnung, Wehen, Aktionspotential). Negative stabilisiert (Homöostase).",
    "mittel",
    ["Rückkopplung", "Kap1"]
  ),
  q(
    "bio-pool-8-005",
    "bio-kap5",
    "Ökosystem = …",
    [
      "nur die Pflanzen",
      "Biotop + Biozönose",
      "nur die Tiere",
      "nur der unbelebte Lebensraum",
      "eine einzelne Art",
    ],
    1,
    "Ökosystem = Biotop (unbelebter Lebensraum) + Biozönose (Lebensgemeinschaft aller Arten).",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-006",
    "bio-kap2",
    "Welche Sekretionsart liegt bei Talgdrüsen vor?",
    ["Merokrin", "Apokrin", "Holokrin", "Endokrin", "Parakrin"],
    2,
    "Talgdrüsen sezernieren holokrin: Die ganze Zelle zerfällt und wird zum Sekret.",
    "mittel",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-8-007",
    "bio-kap4",
    "Was versteht man unter dem Locus eines Gens?",
    [
      "Die Variante des Gens (Allel).",
      "Den Ort des Gens auf dem Chromosom.",
      "Die Anzahl der Chromosomen.",
      "Die Basensequenz der DNA.",
      "Das Histon, an das die DNA gebunden ist.",
    ],
    1,
    "Locus = fester Ort eines Gens auf dem Chromosom; Allel = Variante des Gens an diesem Locus.",
    "leicht",
    ["Genetik", "Locus", "Kap4"]
  ),
  q(
    "bio-pool-8-008",
    "bio-kap3",
    "Das Geschlecht des Kindes wird beim Menschen bestimmt durch …",
    [
      "die Eizelle (X oder Y)",
      "das Spermium (X oder Y)",
      "die Gebärmutter",
      "die Eileiter",
      "beide Elternteile gleich",
    ],
    1,
    "Die Eizelle liefert immer X; das Spermium liefert X oder Y → Geschlecht wird durch das Spermium bestimmt.",
    "leicht",
    ["Vererbung", "Geschlecht", "Kap3"]
  ),
  q(
    "bio-pool-8-009",
    "bio-kap1",
    "Welche Hierarchieebene folgt direkt auf „Gewebe“?",
    ["Zelle", "Organell", "Organ", "Organsystem", "Molekül"],
    2,
    "Atom → Molekül → Organell → Zelle → Gewebe → Organ → Organsystem → Organismus.",
    "leicht",
    ["Hierarchie", "Kap1"]
  ),
  q(
    "bio-pool-8-010",
    "bio-kap2",
    "Stratum corneum der Epidermis besteht aus …",
    [
      "teilungsaktiven Keratinozyten",
      "toten, verhornten Korneozyten",
      "Melanozyten",
      "Langerhans-Zellen",
      "Bindegewebe",
    ],
    1,
    "Stratum corneum = Hornschicht aus abgestorbenen, verhornten Korneozyten (Keratin). Stratum basale = Stammzellen.",
    "mittel",
    ["Epidermis", "Haut", "Kap2"]
  ),
  q(
    "bio-pool-8-011",
    "bio-kap4",
    "In der DNA-Replikation wird die DNA …",
    [
      "nur in der Meiose verdoppelt",
      "semikonservativ verdoppelt",
      "nur an den Enden verlängert",
      "von RNA abgelesen",
      "nur in Mitochondrien verdoppelt",
    ],
    1,
    "DNA-Replikation ist semikonservativ: Jeder Tochterstrang enthält einen alten und einen neuen Strang.",
    "mittel",
    ["DNA", "Replikation", "Kap4"]
  ),
  q(
    "bio-pool-8-012",
    "bio-kap5",
    "Produzenten in einem Ökosystem sind typischerweise …",
    ["heterotroph", "autotroph", "Destenten", "Konsumenten", "Saprobionten"],
    1,
    "Produzenten (z. B. Pflanzen) sind autotroph; Konsumenten sind heterotroph; Destenten zersetzen totes Material.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-013",
    "bio-kap2",
    "Welches Epithel findet sich in den Alveolen der Lunge?",
    [
      "Mehrreihiges Flimmerepithel",
      "Einschichtiges Plattenepithel",
      "Urothel",
      "Verhorntes Plattenepithel",
      "Einschichtiges Zylinderepithel mit Kinozilien",
    ],
    1,
    "Alveolen: einschichtiges Plattenepithel für schnellen Gasaustausch (minimale Diffusionsstrecke).",
    "mittel",
    ["Epithel", "Lunge", "Kap2"]
  ),
  q(
    "bio-pool-8-014",
    "bio-kap4",
    "Wann entstehen Schwesterchromatiden?",
    [
      "Bei der Befruchtung",
      "Während der DNA-Replikation vor Mitose/Meiose",
      "In der Anaphase",
      "Nur in Keimzellen",
      "Bei der Proteinsynthese",
    ],
    1,
    "Nach der Replikation besteht jedes Chromosom aus zwei identischen Schwesterchromatiden, verbunden am Zentromer.",
    "mittel",
    ["Chromosomen", "Kap4"]
  ),
  q(
    "bio-pool-8-015",
    "bio-kap1",
    "ATP enthält …",
    [
      "keine Phosphatgruppen",
      "eine Phosphatgruppe",
      "zwei Phosphatgruppen",
      "drei Phosphatgruppen",
      "vier Phosphatgruppen",
    ],
    3,
    "ATP = Adenosintriphosphat: drei Phosphatgruppen; bei Abspaltung von Phosphat wird Energie freigesetzt.",
    "leicht",
    ["ATP", "Kap1"]
  ),
  q(
    "bio-pool-8-016",
    "bio-kap3",
    "Progesteron wird vor allem gebildet von …",
    [
      "der Hypophyse",
      "dem Ovar (Gelkörper)",
      "der Schilddrüse",
      "der Bauchspeicheldrüse",
      "der Nebenniere",
    ],
    1,
    "Progesteron wird vom Gelbkörper (Corpus luteum) im Ovar nach dem Eisprung gebildet.",
    "mittel",
    ["Hormone", "Zyklus", "Kap3"]
  ),
  q(
    "bio-pool-8-017",
    "bio-kap2",
    "Kinozilien (Flimmerhärchen) haben typischerweise welche Struktur?",
    [
      "9+0 Mikrotubuli",
      "9+2 Mikrotubuli",
      "7+2 Mikrotubuli",
      "nur Aktinfilamente",
      "keine Mikrotubuli",
    ],
    1,
    "Kinozilien und Geißeln haben die 9+2-Struktur (9 doppelte Außenmikrotubuli, 2 zentrale).",
    "schwer",
    ["Zilien", "Kap2"]
  ),
  q(
    "bio-pool-8-018",
    "bio-kap4",
    "Chargaff-Regeln: In doppelsträngiger DNA gilt …",
    [
      "A = G und T = C",
      "A = T und G = C",
      "A = C und G = T",
      "nur A = T",
      "die Mengen aller Basen sind gleich",
    ],
    1,
    "Chargaff: In einem Doppelstrang ist die Menge an A gleich der von T, die von G gleich der von C (Folge der Basenpaarung).",
    "mittel",
    ["DNA", "Chargaff", "Kap4"]
  ),
  q(
    "bio-pool-8-019",
    "bio-kap5",
    "Abiotische Faktoren sind …",
    [
      "alle Lebewesen",
      "unbelebte Umweltfaktoren (Licht, Temperatur, Wasser)",
      "nur die Pflanzen",
      "nur die Tiere",
      "die Nahrungskette",
    ],
    1,
    "Abiotisch = unbelebt (Licht, Temperatur, pH, Wasser). Biotisch = belebt (Konkurrenz, Räuber-Beute).",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-020",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Epithelien sind avaskulär.",
      "Epithelien sitzen auf einer Basalmembran.",
      "Epithelien haben eigene Blutgefäße in der Mitte der Schicht.",
      "Tight Junctions liegen apikal.",
      "Urothel kleidet die Harnblase aus.",
    ],
    2,
    "Epithelien sind avaskulär – sie haben keine eigenen Blutgefäße; die Versorgung erfolgt durch Diffusion aus dem Bindegewebe (C falsch).",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-8-021",
    "bio-kap1",
    "Welches Organell ist für die Proteinbiosynthese (Translation) zentral?",
    ["Mitochondrium", "Ribosom", "Lysosom", "Golgi-Apparat", "Peroxisom"],
    1,
    "Ribosomen führen die Translation durch (mRNA → Protein); sie liegen frei im Zytosol oder am rauen ER.",
    "leicht",
    ["Ribosomen", "Proteinbiosynthese", "Kap1"]
  ),
  q(
    "bio-pool-8-022",
    "bio-kap4",
    "Ein Codon besteht aus wie vielen Nukleotiden?",
    ["1", "2", "3", "4", "5"],
    2,
    "Ein Codon = 3 Nukleotide auf der mRNA; es codiert für eine Aminosäure (oder Stopp-Signal).",
    "leicht",
    ["Proteinbiosynthese", "Kap4"]
  ),
  q(
    "bio-pool-8-023",
    "bio-kap3",
    "Die Kortikalreaktion bei der Befruchtung dient dazu, …",
    [
      "die Eizelle zu ernähren",
      "Polyspermie zu verhindern",
      "die Spermien anzulocken",
      "Östrogen zu bilden",
      "die Einnistung zu starten",
    ],
    1,
    "Die Kortikalreaktion (Ausstoß von Kortikalvesikeln) verändert die Eihülle und verhindert das Eindringen weiterer Spermien.",
    "mittel",
    ["Befruchtung", "Kap3"]
  ),
  q(
    "bio-pool-8-024",
    "bio-kap2",
    "Welches Epithel hat Schirmzellen (Umbrella cells)?",
    ["Flimmerepithel", "Urothel", "Epidermis", "Darmepithel", "Alveolarepithel"],
    1,
    "Urothel (Harnblase, Ureter) hat Schirmzellen, die sich bei Dehnung abflachen; Uroplakin-Membranen aus Vesikeln.",
    "schwer",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-8-025",
    "bio-kap5",
    "In einer Nahrungskette: Primärkonsumenten ernähren sich von …",
    ["Produzenten", "Sekundärkonsumenten", "Destenten", "abiotischen Faktoren", "Saprobionten"],
    0,
    "Primärkonsumenten = Pflanzenfresser (ernähren sich von Produzenten); Sekundärkonsumenten fressen Primärkonsumenten.",
    "leicht",
    ["Ökologie", "Nahrungskette", "Kap5"]
  ),
  // Weitere 25 echte Fragen (Kap1–5)
  q(
    "bio-pool-8-026",
    "bio-kap1",
    "Welches Kennzeichen des Lebens beschreibt die Weitergabe genetischer Information?",
    ["Stoffwechsel", "Reizbarkeit", "Fortpflanzung", "Homöostase", "Bewegung"],
    2,
    "Fortpflanzung = Weitergabe genetischer Information (sexuell oder asexuell).",
    "leicht",
    ["Kennzeichen des Lebens", "Kap1"]
  ),
  q(
    "bio-pool-8-027",
    "bio-kap4",
    "Mitose führt zu …",
    [
      "haploiden Tochterzellen",
      "genetisch identischen diploiden Tochterzellen",
      "Keimzellen",
      "reduziertem Chromosomensatz",
      "Crossing-over",
    ],
    1,
    "Mitose: Eine Zelle teilt sich in zwei genetisch identische Tochterzellen (beide diploid). Meiose führt zu haploiden Keimzellen.",
    "mittel",
    ["Mitose", "Kap4"]
  ),
  q(
    "bio-pool-8-028",
    "bio-kap2",
    "Welche Bindegewebszellen bauen die extrazelluläre Matrix auf?",
    ["Mastzellen", "Fibroblasten", "Makrophagen", "Lymphozyten", "Erythrozyten"],
    1,
    "Fibroblasten synthetisieren Kollagen und andere Matrixbestandteile. Mastzellen = Immunabwehr; Makrophagen = Phagozytose.",
    "mittel",
    ["Bindegewebe", "Kap2"]
  ),
  q(
    "bio-pool-8-029",
    "bio-kap1",
    "Wo findet die Glykolyse statt?",
    [
      "In den Mitochondrien",
      "Im Zytosol",
      "Im Zellkern",
      "Im endoplasmatischen Retikulum",
      "In den Lysosomen",
    ],
    1,
    "Glykolyse = Abbau von Glukose zu Pyruvat – findet im Zytosol statt. Citratzyklus und Atmungskette in den Mitochondrien.",
    "mittel",
    ["Stoffwechsel", "Kap1"]
  ),
  q(
    "bio-pool-8-030",
    "bio-kap3",
    "FSH (follikelstimulierendes Hormon) wirkt vor allem auf …",
    [
      "die Gebärmutter",
      "die Eierstöcke (Follikelreifung)",
      "die Schilddrüse",
      "die Nebenniere",
      "die Bauchspeicheldrüse",
    ],
    1,
    "FSH stimuliert die Follikelreifung im Ovar; LH löst den Eisprung aus.",
    "mittel",
    ["Hormone", "Kap3"]
  ),
  q(
    "bio-pool-8-031",
    "bio-kap4",
    "Ein homozygoter dominanter Genotyp wird symbolisiert als …",
    ["aa", "Aa", "AA", "AB", "aa oder Aa"],
    2,
    "Homozygot = gleiche Allele (AA oder aa); heterozygot = Aa. Dominant = großes A.",
    "leicht",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-8-032",
    "bio-kap2",
    "Hyaliner Knorpel enthält vor allem …",
    ["Kollagen Typ I", "Kollagen Typ II", "Kollagen Typ III", "Elastin", "Keratin"],
    1,
    "Hyaliner Knorpel (Gelenke, Trachea, Rippen): Kollagen Typ II. Faser Knorpel: Typ I.",
    "mittel",
    ["Knorpel", "Kap2"]
  ),
  q(
    "bio-pool-8-033",
    "bio-kap5",
    "Destenten (Zersetzer) bauen ab …",
    [
      "nur lebende Beute",
      "totes organisches Material",
      "nur anorganische Stoffe",
      "nur Wasser",
      "nur Licht",
    ],
    1,
    "Destenten (Pilze, Bakterien) zersetzen totes organisches Material und führen Nährstoffe dem Kreislauf wieder zu.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-034",
    "bio-kap1",
    "Welche Aussage zu Mitochondrien trifft zu?",
    [
      "Sie haben keine eigene DNA.",
      "Sie enthalten die Atmungskette und produzieren ATP.",
      "Sie sind nur in Pflanzenzellen vorhanden.",
      "Sie synthetisieren alle Proteine der Zelle.",
      "Sie haben keine Membran.",
    ],
    1,
    "Mitochondrien haben eine eigene DNA (Endosymbiontentheorie), innere und äußere Membran, Atmungskette, ATP-Synthase.",
    "mittel",
    ["Mitochondrien", "Kap1"]
  ),
  q(
    "bio-pool-8-035",
    "bio-kap4",
    "Bei einem dihybriden Erbgang AaBb × AaBb: Wie viele der 16 Nachkommen sind reinerbig (homozygot) für beide Merkmale?",
    ["0", "1", "2", "4", "8"],
    1,
    "Nur 1 von 16 ist AABB (reinerbig für beide). Die anderen Kombinationen sind heterozygot für mindestens ein Merkmal.",
    "schwer",
    ["Vererbung", "Kap4"]
  ),
  q(
    "bio-pool-8-036",
    "bio-kap2",
    "Glatte Muskulatur ist gekennzeichnet durch …",
    [
      "Querstreifung und willkürliche Steuerung",
      "keine Querstreifung, unwillkürlich",
      "nur im Herzen",
      "schnelle Kontraktion",
      "ermüdet schnell",
    ],
    1,
    "Glatte Muskulatur: unwillkürlich, keine Querstreifung, ausdauernd (Darm, Gefäße). Skelettmuskulatur = quergestreift, willkürlich.",
    "leicht",
    ["Muskulatur", "Kap2"]
  ),
  q(
    "bio-pool-8-037",
    "bio-kap3",
    "Wo findet die Einnistung der Blastozyste beim Menschen statt?",
    [
      "Im Eileiter",
      "In der Gebärmutterschleimhaut (Endometrium)",
      "Im Ovar",
      "In der Vagina",
      "Im Gebärmutterhals",
    ],
    1,
    "Die Einnistung (Implantation) erfolgt in der Uterusschleimhaut (Endometrium). Die Befruchtung im Eileiter.",
    "leicht",
    ["Entwicklung", "Kap3"]
  ),
  q(
    "bio-pool-8-038",
    "bio-kap1",
    "Lysosomen enthalten …",
    ["DNA", "Katalase", "hydrolytische Enzyme", "Chlorophyll", "Ribosomen"],
    2,
    "Lysosomen enthalten hydrolytische Enzyme (Proteasen, Lipasen, Nukleasen) für den Abbau von Makromolekülen; sie haben einen sauren pH.",
    "mittel",
    ["Lysosomen", "Kap1"]
  ),
  q(
    "bio-pool-8-039",
    "bio-kap5",
    "Trophische Ebene 1 in einem Ökosystem sind in der Regel …",
    ["Konsumenten", "Produzenten", "Destenten", "Sekundärkonsumenten", "Tertiärkonsumenten"],
    1,
    "Produzenten (z. B. Pflanzen) bilden die erste trophische Ebene; dann Primär-, Sekundär-, Tertiärkonsumenten.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-040",
    "bio-kap4",
    "Die RNA enthält die Base Uracil (U) anstelle von …",
    ["Adenin", "Guanin", "Thymin", "Cytosin", "keiner Base"],
    2,
    "In der RNA wird Thymin (T) durch Uracil (U) ersetzt; U paart mit A.",
    "leicht",
    ["RNA", "Kap4"]
  ),
  q(
    "bio-pool-8-041",
    "bio-kap2",
    "Welches Epithel kleidet den Dünndarm aus?",
    [
      "Flimmerepithel",
      "Einschichtiges Zylinderepithel mit Mikrovilli",
      "Urothel",
      "Verhorntes Plattenepithel",
      "Mehrreihiges Epithel",
    ],
    1,
    "Dünndarm: einschichtiges Zylinderepithel mit Mikrovilli (Bürstensaum) zur Resorptionsfläche-Vergrößerung.",
    "mittel",
    ["Epithel", "Darm", "Kap2"]
  ),
  q(
    "bio-pool-8-042",
    "bio-kap1",
    "Negative Rückkopplung ist entscheidend für …",
    [
      "Blutgerinnung",
      "Homöostase (z. B. Blutzucker, Temperatur)",
      "Wehen",
      "Aktionspotential",
      "Alles-oder-Nichts-Reaktionen",
    ],
    1,
    "Negative Rückkopplung stabilisiert Sollwerte (Homöostase). Positive Rückkopplung verstärkt (Blutgerinnung, Wehen).",
    "mittel",
    ["Homöostase", "Kap1"]
  ),
  q(
    "bio-pool-8-043",
    "bio-kap4",
    "Während der Meiose kommt es zur Rekombination (Crossing-over) in …",
    ["Metaphase II", "Anaphase I", "Prophase I", "Telophase I", "Metaphase I"],
    2,
    "Crossing-over erfolgt in der Prophase I, wenn die homologen Chromosomen gepaart sind.",
    "mittel",
    ["Meiose", "Kap4"]
  ),
  q(
    "bio-pool-8-044",
    "bio-kap3",
    "Aus der Oozyte entstehen bei der Meiose …",
    [
      "zwei Eizellen",
      "eine Eizelle und Polkörperchen",
      "vier Spermien",
      "zwei Spermien",
      "eine Eizelle und drei Spermien",
    ],
    1,
    "Bei der Oogenese entstehen aus einer Oozyte eine reife Eizelle und Polkörperchen (abgestoßene Zellkerne).",
    "mittel",
    ["Oogenese", "Kap3"]
  ),
  q(
    "bio-pool-8-045",
    "bio-kap5",
    "Der Biotop ist …",
    [
      "die Lebensgemeinschaft aller Arten",
      "der unbelebte Lebensraum",
      "eine Population",
      "ein Ökosystem",
      "ein Nahrungsnetz",
    ],
    1,
    "Biotop = unbelebter Lebensraum (Boden, Wasser, Klima). Biozönose = Lebensgemeinschaft. Ökosystem = Biotop + Biozönose.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-8-046",
    "bio-kap2",
    "Osteoblasten …",
    [
      "bauen Knochen ab",
      "sind reife Knochenzellen in Lakunen",
      "bauen Knochen auf",
      "sind Knorpelzellen",
      "produzieren nur Kollagen Typ II",
    ],
    2,
    "Osteoblasten bauen Knochen auf; Osteoklasten bauen ab; Osteozyten sind reife Zellen in den Lakunen.",
    "leicht",
    ["Knochen", "Kap2"]
  ),
  q(
    "bio-pool-8-047",
    "bio-kap4",
    "Ein diploider Organismus hat pro Gen …",
    [
      "ein Allel",
      "zwei Allele (je eines pro homologem Chromosom)",
      "keine Allele",
      "so viele Allele wie Chromosomen",
      "nur auf den Geschlechtschromosomen Allele",
    ],
    1,
    "Diploid = zwei Chromosomensätze; pro Gen gibt es zwei Allele (eines auf jedem homologen Chromosom).",
    "leicht",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-8-048",
    "bio-kap1",
    "Kristallisation …",
    [
      "ist ein Kennzeichen des Lebens",
      "ist Stoffwechsel",
      "ist ein physikalisch-chemischer Prozess, kein biologisches Wachstum",
      "zeigt nur Lebewesen",
      "ist Homöostase",
    ],
    2,
    "Kristallisation (z. B. Salzkristalle) ist unbelebt; biologisches Wachstum erfordert Stoffwechsel und Zellteilung.",
    "leicht",
    ["Kennzeichen des Lebens", "Kap1"]
  ),
  q(
    "bio-pool-8-049",
    "bio-kap2",
    "Welche Kontaktstruktur verankert Epithelzellen an der Basalmembran?",
    ["Tight Junctions", "Desmosomen", "Gap Junctions", "Hemidesmosomen", "Adherens Junctions"],
    3,
    "Hemidesmosomen (Integrine, Laminin) verankern die Zelle an der Basalmembran. Desmosomen = Zelle–Zelle.",
    "mittel",
    ["Zellkontakte", "Kap2"]
  ),
  q(
    "bio-pool-8-050",
    "bio-kap3",
    "Der Menstruationszyklus dauert im Mittel etwa …",
    ["7 Tage", "14 Tage", "21 Tage", "28 Tage", "35 Tage"],
    3,
    "Der durchschnittliche Zyklus beträgt etwa 28 Tage (Spannweite ca. 21–35 Tage).",
    "leicht",
    ["Zyklus", "Kap3"]
  ),
];
