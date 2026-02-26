/**
 * Biologie BMS Pool — echte Fragen aus Kap1–Kap5 (weiterer Batch).
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

export const biologiePool9: Question[] = [
  q(
    "bio-pool-9-001",
    "bio-kap1",
    "Welche Zellorganelle enthält die eigene DNA (Endosymbiontentheorie)?",
    ["Ribosom", "Lysosom", "Mitochondrium", "Golgi-Apparat", "Peroxisom"],
    2,
    "Mitochondrien (und Chloroplasten in Pflanzen) haben eigene DNA und Doppelmembran – Hinweis auf endosymbiotischen Ursprung.",
    "mittel",
    ["Mitochondrien", "Kap1"]
  ),
  q(
    "bio-pool-9-002",
    "bio-kap2",
    "Welches Epithel ermöglicht die mukoziliäre Clearance in den Atemwegen?",
    [
      "Urothel",
      "Flimmerepithel (mehrreihig)",
      "Verhorntes Plattenepithel",
      "Einschichtiges Plattenepithel",
      "Einschichtiges kubisches Epithel",
    ],
    1,
    "Mehrreihiges Flimmerepithel mit Kinozilien transportiert Schleim und Partikel aus den Atemwegen (Trachea, Bronchien).",
    "leicht",
    ["Epithel", "Atemwege", "Kap2"]
  ),
  q(
    "bio-pool-9-003",
    "bio-kap4",
    "Welche Basenpaarung kommt in der RNA vor?",
    ["A–T", "A–U", "G–T", "nur G–C", "A–G"],
    1,
    "In der RNA paart Uracil (U) mit Adenin (A); Thymin (T) kommt in der DNA vor.",
    "leicht",
    ["RNA", "Kap4"]
  ),
  q(
    "bio-pool-9-004",
    "bio-kap5",
    "Ein Ökosystem umfasst …",
    [
      "nur die Pflanzen",
      "nur die Tiere",
      "Biotop und Biozönose",
      "nur abiotische Faktoren",
      "eine einzelne Population",
    ],
    2,
    "Ökosystem = Biotop (unbelebter Lebensraum) + Biozönose (alle Lebewesen).",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-005",
    "bio-kap1",
    "Diabetes mellitus Typ 1 ist gekennzeichnet durch …",
    [
      "Insulinresistenz",
      "fehlende Insulinproduktion (Betazellzerstörung)",
      "Überproduktion von Glucagon",
      "fehlende Rezeptoren",
      "nur Übergewicht",
    ],
    1,
    "Typ 1: Autoimmunzerstörung der Betazellen → kein Insulin. Typ 2: Insulinresistenz.",
    "mittel",
    ["Diabetes", "Kap1"]
  ),
  q(
    "bio-pool-9-006",
    "bio-kap2",
    "Merokrine Sekretion erfolgt durch …",
    [
      "Abschnürung der ganzen Zelle",
      "Exozytose (ohne Zellverlust)",
      "Abschnürung der Zellspitze",
      "nur in Talgdrüsen",
      "nur in endokrinen Drüsen",
    ],
    1,
    "Merokrin = Exozytose (häufigste Form: Schweiß, Pankreas, Speicheldrüsen). Apokrin = Abschnürung; Holokrin = ganze Zelle.",
    "mittel",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-9-007",
    "bio-kap4",
    "Wie viele Tochterzellen entstehen bei der Meiose aus einer Ausgangszelle?",
    ["1", "2", "3", "4", "8"],
    3,
    "Meiose: 1. Teilung → 2 Zellen, 2. Teilung → 4 haploide Tochterzellen.",
    "leicht",
    ["Meiose", "Kap4"]
  ),
  q(
    "bio-pool-9-008",
    "bio-kap3",
    "Das Geschlechtschromosom in der menschlichen Eizelle ist immer …",
    ["Y", "X oder Y", "X", "entweder X oder fehlend", "keins"],
    2,
    "Die Eizelle enthält immer ein X-Chromosom. Das Spermium liefert X oder Y → Geschlecht wird durch das Spermium bestimmt.",
    "leicht",
    ["Vererbung", "Kap3"]
  ),
  q(
    "bio-pool-9-009",
    "bio-kap1",
    "Welche Aussage zu Viren trifft zu?",
    [
      "Viren haben Ribosomen.",
      "Viren sind obligat intrazelluläre Parasiten.",
      "Viren haben einen eigenen Stoffwechsel.",
      "Antibiotika wirken zuverlässig gegen Viren.",
      "Viren bestehen aus Zellen.",
    ],
    1,
    "Viren sind obligat intrazellulär: Sie können sich nur in Wirtszellen vermehren und haben keinen eigenständigen Stoffwechsel.",
    "mittel",
    ["Viren", "Kap1"]
  ),
  q(
    "bio-pool-9-010",
    "bio-kap2",
    "Welche Schicht der Epidermis liegt direkt auf der Basalmembran?",
    [
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum spinosum",
      "Stratum basale",
      "Stratum lucidum",
    ],
    3,
    "Stratum basale (Basalzellschicht) grenzt an die Basalmembran und enthält die teilungsaktiven Keratinozyten.",
    "leicht",
    ["Epidermis", "Kap2"]
  ),
  q(
    "bio-pool-9-011",
    "bio-kap4",
    "Ein Genotyp aa bedeutet …",
    ["homozygot dominant", "heterozygot", "homozygot rezessiv", "hemizygot", "diploid"],
    2,
    "aa = beide Allele rezessiv = homozygotes rezessiv. AA = homozygot dominant; Aa = heterozygot.",
    "leicht",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-9-012",
    "bio-kap5",
    "Sekundärkonsumenten ernähren sich von …",
    [
      "Produzenten",
      "Primärkonsumenten",
      "Destenten",
      "abiotischen Faktoren",
      "mineralischen Nährstoffen",
    ],
    1,
    "Sekundärkonsumenten = Fleischfresser, die Primärkonsumenten (Pflanzenfresser) fressen.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-013",
    "bio-kap1",
    "Die Glykolyse liefert pro Glukosemolekül netto …",
    ["2 ATP", "30 ATP", "38 ATP", "6 ATP", "1 ATP"],
    0,
    "Glykolyse: 1 Glukose → 2 Pyruvat, netto 2 ATP (und 2 NADH). Der Großteil des ATP kommt aus der Atmungskette.",
    "schwer",
    ["Stoffwechsel", "Kap1"]
  ),
  q(
    "bio-pool-9-014",
    "bio-kap2",
    "Welches Gewebe enthält reichlich Kollagen Typ I?",
    ["Hyaliner Knorpel", "Knochen", "Blut", "Nervengewebe", "Fettgewebe"],
    1,
    "Knochen: vor allem Kollagen Typ I (und Hydroxylapatit). Hyaliner Knorpel: Kollagen Typ II.",
    "mittel",
    ["Bindegewebe", "Kap2"]
  ),
  q(
    "bio-pool-9-015",
    "bio-kap4",
    "Bei der Mitose entstehen aus einer diploiden Zelle …",
    [
      "zwei haploide Zellen",
      "zwei diploide Zellen",
      "vier haploide Zellen",
      "eine diploide Zelle",
      "vier diploide Zellen",
    ],
    1,
    "Mitose: Eine Zelle → zwei genetisch identische Tochterzellen, beide diploid. Meiose → vier haploide Zellen.",
    "leicht",
    ["Mitose", "Kap4"]
  ),
  q(
    "bio-pool-9-016",
    "bio-kap3",
    "Östrogen wird vor allem gebildet in …",
    [
      "der Hypophyse",
      "dem Ovar (Follikel)",
      "der Schilddrüse",
      "der Bauchspeicheldrüse",
      "der Nebennierenrinde",
    ],
    1,
    "Östrogen wird in den Ovarialfollikeln gebildet; FSH stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Kap3"]
  ),
  q(
    "bio-pool-9-017",
    "bio-kap1",
    "Welche Eigenschaft haben alle Epithelien gemeinsam?",
    [
      "Sie sind stark durchblutet",
      "Sie sind polar (apikal/basolateral) und auf Basalmembran",
      "Sie enthalten nur eine Zellschicht",
      "Sie sezernieren immer",
      "Sie haben keine Zellkontakte",
    ],
    1,
    "Epithelien: Polarität, auf Basalmembran, avaskulär. Sie können ein- oder mehrschichtig sein.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-018",
    "bio-kap4",
    "Die DNA-Doppelhelix wurde von wem beschrieben?",
    ["Mendel", "Darwin", "Watson und Crick", "Pasteur", "Linnaeus"],
    2,
    "Watson und Crick (1953) beschrieben die Doppelhelix-Struktur der DNA mit Basenpaarung A–T und G–C.",
    "leicht",
    ["DNA", "Kap4"]
  ),
  q(
    "bio-pool-9-019",
    "bio-kap5",
    "Autotrophe Organismen …",
    [
      "ernähren sich von anderen Organismen",
      "bauen organische Stoffe aus anorganischen auf (z. B. Photosynthese)",
      "zersetzen nur totes Material",
      "sind nur Destenten",
      "nehmen nur fertige organische Stoffe auf",
    ],
    1,
    "Autotroph = Selbsternährung (z. B. Pflanzen durch Photosynthese). Heterotroph = Ernährung von anderen.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-020",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Tight Junctions versiegeln den Interzellularspalt.",
      "Gap Junctions ermöglichen Ionenfluss.",
      "Desmosomen verankern die Zelle an der Basalmembran.",
      "Hemidesmosomen verankern an der Basalmembran.",
      "Die Basalmembran liegt unter dem Epithel.",
    ],
    2,
    "Desmosomen verbinden Zelle mit Zelle (mechanisch). Hemidesmosomen verankern Zelle an der Basalmembran (C falsch).",
    "mittel",
    ["Zellkontakte", "Kap2"]
  ),
  q(
    "bio-pool-9-021",
    "bio-kap1",
    "Welches Organell ist für den Abbau von H₂O₂ zuständig?",
    ["Ribosom", "Lysosom", "Peroxisom", "Golgi-Apparat", "ER"],
    2,
    "Peroxisomen enthalten Katalase und bauen Wasserstoffperoxid zu Wasser und Sauerstoff ab.",
    "leicht",
    ["Peroxisom", "Kap1"]
  ),
  q(
    "bio-pool-9-022",
    "bio-kap4",
    "Reife menschliche Erythrozyten haben …",
    ["einen Zellkern", "keinen Zellkern", "Mitochondrien", "Zellorganellen", "DNA im Zytoplasma"],
    1,
    "Reife Erythrozyten sind kernlos (und ohne Mitochondrien), um mehr Platz für Hämoglobin zu haben.",
    "leicht",
    ["Erythrozyten", "Kap2"]
  ),
  q(
    "bio-pool-9-023",
    "bio-kap3",
    "Die Befruchtung vereinigt …",
    [
      "zwei Eizellen",
      "Eizelle und Spermium",
      "zwei Spermien",
      "Eizelle und Polkörperchen",
      "Oozyte und Follikel",
    ],
    1,
    "Befruchtung = Verschmelzung von Eizelle (haploid) und Spermium (haploid) → Zygote (diploid).",
    "leicht",
    ["Befruchtung", "Kap3"]
  ),
  q(
    "bio-pool-9-024",
    "bio-kap5",
    "Eine Nahrungskette beschreibt …",
    [
      "nur die Destenten",
      "den Energie- und Stofffluss von Produzenten zu Konsumenten",
      "nur abiotische Faktoren",
      "eine einzelne Art",
      "nur die Biotope",
    ],
    1,
    "Nahrungskette = gerichteter Energie- und Stofffluss: Produzent → Primärkonsument → Sekundärkonsument → …",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-025",
    "bio-kap2",
    "Welches Epithel kleidet die Vagina aus?",
    [
      "Verhorntes Plattenepithel",
      "Urothel",
      "Mehrschichtiges unverhorntes Plattenepithel",
      "Flimmerepithel",
      "Einschichtiges Zylinderepithel",
    ],
    2,
    "Vagina, Ösophagus, Mundhöhle: mehrschichtiges unverhorntes Plattenepithel. Epidermis = verhornt.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-026",
    "bio-kap4",
    "Ein Phänotyp ist …",
    [
      "die genetische Ausprägung",
      "die sichtbare bzw. messbare Ausprägung des Merkmals",
      "immer dominant",
      "immer rezessiv",
      "nur die DNA-Sequenz",
    ],
    1,
    "Phänotyp = Erscheinungsbild (von Genotyp + Umwelt). Genotyp = genetische Ausprägung (Allele).",
    "leicht",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-9-027",
    "bio-kap1",
    "Homöostase bezieht sich auf …",
    [
      "nur die Temperatur",
      "die aktive Aufrechterhaltung innerer Konstanten (z. B. Blutzucker, pH, Temperatur)",
      "nur den Blutzucker",
      "nur den pH",
      "die positive Rückkopplung",
    ],
    1,
    "Homöostase = Aufrechterhaltung innerer Gleichgewichte über negative Rückkopplung (Blutzucker, Temperatur, pH, Osmolarität).",
    "mittel",
    ["Homöostase", "Kap1"]
  ),
  q(
    "bio-pool-9-028",
    "bio-kap2",
    "Osteoklasten …",
    [
      "bauen Knochen auf",
      "sind reife Knochenzellen",
      "bauen Knochen ab",
      "produzieren Kollagen",
      "sind Knorpelzellen",
    ],
    2,
    "Osteoklasten bauen Knochen ab (Resorption); Osteoblasten bauen auf.",
    "leicht",
    ["Knochen", "Kap2"]
  ),
  q(
    "bio-pool-9-029",
    "bio-kap4",
    "Wie viele Chromosomen hat ein menschliches Spermium?",
    ["46", "23", "92", "22", "44"],
    1,
    "Keimzellen sind haploid: 23 Chromosomen (ein Satz).",
    "leicht",
    ["Meiose", "Kap4"]
  ),
  q(
    "bio-pool-9-030",
    "bio-kap5",
    "Biotische Faktoren sind …",
    [
      "Licht und Temperatur",
      "von Lebewesen ausgehende Einflüsse (z. B. Konkurrenz, Räuber-Beute)",
      "nur Wasser",
      "nur der Boden",
      "nur anorganische Nährstoffe",
    ],
    1,
    "Biotisch = durch Lebewesen (Konkurrenz, Symbiose, Räuber-Beute). Abiotisch = unbelebt (Licht, Temperatur, pH).",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-031",
    "bio-kap1",
    "Welche Aussage zu Ribosomen trifft zu?",
    [
      "Sie haben eine Doppelmembran.",
      "Sie sind an der Proteinbiosynthese (Translation) beteiligt.",
      "Sie kommen nur im Zellkern vor.",
      "Sie enthalten DNA.",
      "Sie bauen H₂O₂ ab.",
    ],
    1,
    "Ribosomen (rRNA + Proteine) führen die Translation durch; sie liegen im Zytosol und am rauen ER.",
    "leicht",
    ["Ribosomen", "Kap1"]
  ),
  q(
    "bio-pool-9-032",
    "bio-kap2",
    "Welches Epithel hat Kinozilien (Flimmerhärchen)?",
    ["Urothel", "Flimmerepithel (z. B. Trachea)", "Epidermis", "Darmepithel", "Alveolarepithel"],
    1,
    "Flimmerepithel (Trachea, Bronchien, Eileiter) hat Kinozilien für den Schleimtransport.",
    "leicht",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-033",
    "bio-kap4",
    "Bei dominant-rezessivem Erbgang: Ein heterozygoter Phänotyp (Aa) zeigt …",
    [
      "das rezessive Merkmal",
      "das dominante Merkmal",
      "ein mittleres Merkmal",
      "kein Merkmal",
      "beide Merkmale gleichzeitig",
    ],
    1,
    "Bei dominant-rezessiv setzt sich das dominante Allel phänotypisch durch (Aa zeigt wie AA das dominante Merkmal).",
    "leicht",
    ["Vererbung", "Kap4"]
  ),
  q(
    "bio-pool-9-034",
    "bio-kap3",
    "Wo wird Progesteron nach dem Eisprung gebildet?",
    [
      "Im Follikel",
      "Im Gelbkörper (Corpus luteum)",
      "In der Hypophyse",
      "In der Gebärmutter",
      "In der Schilddrüse",
    ],
    1,
    "Der Gelbkörper entsteht aus dem gesprungenen Follikel und produziert Progesteron (und Östrogen).",
    "mittel",
    ["Hormone", "Kap3"]
  ),
  q(
    "bio-pool-9-035",
    "bio-kap1",
    "Emergenz bedeutet in der Biologie …",
    [
      "Reduktion auf Einzelteile",
      "dass neue Eigenschaften auf höherer Ebene entstehen, die aus den Teilen nicht vorhersagbar sind",
      "nur Vererbung",
      "nur Stoffwechsel",
      "nur Bewegung",
    ],
    1,
    "Emergenz: Das Ganze ist mehr als die Summe der Teile (z. B. Bewusstsein beim Gehirn).",
    "mittel",
    ["Emergenz", "Kap1"]
  ),
  q(
    "bio-pool-9-036",
    "bio-kap2",
    "Welche Zellkontakte liegen am apikalen Ende von Epithelzellen und versiegeln den Spalt?",
    ["Desmosomen", "Gap Junctions", "Tight Junctions", "Hemidesmosomen", "Adherens Junctions"],
    2,
    "Tight Junctions (Zonula occludens) liegen apikal und bilden eine Barriere zwischen apikalem und basolateralem Bereich.",
    "mittel",
    ["Zellkontakte", "Kap2"]
  ),
  q(
    "bio-pool-9-037",
    "bio-kap4",
    "Die Meiose dient der Bildung von …",
    ["Körperzellen", "Keimzellen (Gameten)", "Blutzellen", "nur Eizellen", "nur Spermien"],
    1,
    "Meiose reduziert den Chromosomensatz und erzeugt Keimzellen (Eizellen, Spermien). Mitose erzeugt Körperzellen.",
    "leicht",
    ["Meiose", "Kap4"]
  ),
  q(
    "bio-pool-9-038",
    "bio-kap5",
    "Destenten (Zersetzer) setzen totes organisches Material um in …",
    [
      "nur CO₂",
      "wieder verfügbare Nährstoffe (Mineralisierung)",
      "nur Wasser",
      "nur Sauerstoff",
      "nur Stickstoffgas",
    ],
    1,
    "Destenten (Pilze, Bakterien) mineralisieren totes Material und führen Nährstoffe dem Ökosystem wieder zu.",
    "mittel",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-039",
    "bio-kap1",
    "Welche Base kommt in der DNA nicht vor?",
    ["Adenin", "Thymin", "Guanin", "Cytosin", "Uracil"],
    4,
    "DNA enthält A, T, G, C. RNA enthält Uracil (U) anstelle von Thymin.",
    "leicht",
    ["DNA", "Kap4"]
  ),
  q(
    "bio-pool-9-040",
    "bio-kap2",
    "Welches Epithel kleidet die Schilddrüsenfollikel aus?",
    [
      "Plattenepithel",
      "Einschichtiges kubisches Epithel",
      "Flimmerepithel",
      "Urothel",
      "Verhorntes Plattenepithel",
    ],
    1,
    "Schilddrüsenfollikel: einschichtiges kubisches Epithel (Sekretion, Speicherung von Thyreoglobulin).",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-9-041",
    "bio-kap3",
    "Die Menstruation geht einher mit …",
    [
      "Einnistung der Blastozyste",
      "Abstoßung der Gebärmutterschleimhaut",
      "Eisprung",
      "Befruchtung",
      "Bildung des Gelbkörpers",
    ],
    1,
    "Menstruation = Abstoßung der Uterusschleimhaut (Endometrium) bei ausbleibender Einnistung.",
    "leicht",
    ["Zyklus", "Kap3"]
  ),
  q(
    "bio-pool-9-042",
    "bio-kap4",
    "Zwei homologe Chromosomen tragen …",
    [
      "immer identische Allele",
      "die gleichen Genorte (Loci), oft verschiedene Allele",
      "keine Gene",
      "nur ein Gen",
      "nur Geschlechtsgene",
    ],
    1,
    "Homologe Chromosomen: gleiche Gene an gleichen Loci, aber oft unterschiedliche Allele (eins von Mutter, eins von Vater).",
    "mittel",
    ["Chromosomen", "Kap4"]
  ),
  q(
    "bio-pool-9-043",
    "bio-kap1",
    "Positive Rückkopplung findet sich bei …",
    [
      "Blutzuckerregulation",
      "Körpertemperatur-Regelkreis",
      "Blutgerinnung und Wehen",
      "pH-Regulation",
      "Osmoregulation",
    ],
    2,
    "Positive Rückkopplung verstärkt den Reiz (Blutgerinnung, Wehen, Aktionspotential). Blutzucker, Temperatur, pH = negative Rückkopplung.",
    "mittel",
    ["Rückkopplung", "Kap1"]
  ),
  q(
    "bio-pool-9-044",
    "bio-kap2",
    "Welches Gewebe bildet die äußerste Schicht der Haut (Epidermis)?",
    [
      "Bindegewebe",
      "Mehrschichtiges verhorntes Plattenepithel",
      "Muskelgewebe",
      "Nervengewebe",
      "Fettgewebe",
    ],
    1,
    "Epidermis = mehrschichtiges verhorntes Plattenepithel (Keratinozyten, Stratum basale bis corneum).",
    "leicht",
    ["Haut", "Kap2"]
  ),
  q(
    "bio-pool-9-045",
    "bio-kap5",
    "Primärkonsumenten in einem Ökosystem sind …",
    ["Produzenten", "Pflanzenfresser", "Fleischfresser", "Destenten", "nur Bakterien"],
    1,
    "Primärkonsumenten = Pflanzenfresser (ernähren sich von Produzenten). Sekundärkonsumenten = Fleischfresser.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-046",
    "bio-kap4",
    "Ein Nukleotid der DNA enthält …",
    [
      "nur eine Base",
      "Zucker (Desoxyribose), Phosphat und eine Base",
      "nur Phosphat",
      "nur Zucker",
      "keine Base",
    ],
    1,
    "Nukleotid = Desoxyribose + Phosphat + Base (A, T, G oder C).",
    "leicht",
    ["DNA", "Kap4"]
  ),
  q(
    "bio-pool-9-047",
    "bio-kap1",
    "Welches Organell enthält hydrolytische Enzyme und hat einen sauren pH?",
    ["Ribosom", "Lysosom", "Peroxisom", "Mitochondrium", "Golgi-Apparat"],
    1,
    "Lysosomen: hydrolytische Enzyme (Proteasen, Lipasen), saurer pH, Abbau von Makromolekülen und Zellbestandteilen.",
    "mittel",
    ["Lysosomen", "Kap1"]
  ),
  q(
    "bio-pool-9-048",
    "bio-kap2",
    "Apokrine Sekretion bedeutet …",
    [
      "Exozytose ohne Zellverlust",
      "Abschnürung des apikalen Zellpols (mit Zytoplasma)",
      "Die ganze Zelle wird zum Sekret",
      "Nur endokrin",
      "Nur in Talgdrüsen",
    ],
    1,
    "Apokrin: apikaler Teil der Zelle wird abgeschnürt (z. B. Milchfettkügelchen). Merokrin = Exozytose; Holokrin = ganze Zelle.",
    "mittel",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-9-049",
    "bio-kap3",
    "Das luteinisierende Hormon (LH) …",
    [
      "hemmt den Eisprung",
      "löst den Eisprung aus",
      "wird nur in der Gebärmutter gebildet",
      "ersetzt FSH",
      "wird nur von Männern gebildet",
    ],
    1,
    "Der LH-Peak löst den Eisprung aus. FSH stimuliert die Follikelreifung.",
    "mittel",
    ["Hormone", "Kap3"]
  ),
  q(
    "bio-pool-9-050",
    "bio-kap5",
    "Die Gesamtheit aller Individuen einer Art in einem Gebiet bezeichnet man als …",
    ["Biozönose", "Biotop", "Population", "Ökosystem", "Lebensgemeinschaft"],
    2,
    "Population = Individuen einer Art in einem räumlich abgrenzbaren Gebiet. Biozönose = alle Arten zusammen.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
];
