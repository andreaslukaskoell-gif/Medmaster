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
    [
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "Peroxisom",
    ],
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
      "Urothel (dehnbares Übergangsepithel der Harnwege)",
      "Flimmerepithel (mehrreihig)",
      "Verhorntes Plattenepithel (keratinisiert, z. B. Epidermis der Haut)",
      "Einschichtiges Plattenepithel (z. B. in Alveolen und Perikard)",
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
    ["A–T", "A–U", "G–T (Purin-Pyrimidin, mismatch)", "nur G–C", "A–G (Purin-Purin-Paarung)"],
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
      "nur die Pflanzen (autotrophe Organismen als Primärproduzenten)",
      "nur die Tiere (heterotrophe Konsumenten auf verschiedenen trophischen Ebenen)",
      "Biotop und Biozönose",
      "nur abiotische Faktoren (Temperatur, Licht, Boden, Wasser) ohne Organismen",
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
      "Insulinresistenz (verminderte zelluläre Empfindlichkeit gegenüber Insulin)",
      "fehlende Insulinproduktion (Betazellzerstörung)",
      "Überproduktion von Glucagon (Hyperglukagonämie der Alphazellen)",
      "fehlende Rezeptoren (Insulinrezeptor-Defekt auf den Zielzellen)",
      "nur Übergewicht (Adipositas) ohne metabolische Stoffwechselstörung",
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
    ["Epidermis (mehrschichtiges verhorntes Plattenepithel der Haut)", "Kap2"]
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
    [
      "Hyaliner Knorpel (Kollagen-II-reich, z. B. Gelenkflächen und Trachea)",
      "Knochen",
      "Blut",
      "Nervengewebe (Neuronen und Gliazellen zur Signalverarbeitung)",
      "Fettgewebe",
    ],
    1,
    "Knochen: vor allem Kollagen Typ I (und Hydroxylapatit). Hyaliner Knorpel: Kollagen Typ II.",
    "mittel",
    ["Bindegewebe (mesenchymale Zellen in extrazellulärer Matrix)", "Kap2"]
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
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Kap3"]
  ),
  q(
    "bio-pool-9-017",
    "bio-kap1",
    "Welche Eigenschaft haben alle Epithelien gemeinsam?",
    [
      "Sie sind stark durchblutet (vaskularisiert mit dichtem Kapillarnetz)",
      "Sie sind polar (apikal/basolateral) und auf Basalmembran",
      "Sie enthalten nur eine einzige Zellschicht (einschichtiges Epithel)",
      "Sie sezernieren immer (exokrine Drüsenfunktion mit Gangausführung)",
      "Sie haben keine Zellkontakte (Desmosomen, Tight Junctions, Gap Junctions)",
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
    [
      "Mendel (Begründer der klassischen Vererbungslehre)",
      "Darwin (Begründer der natürlichen Selektionstheorie)",
      "Watson und Crick",
      "Pasteur (Begründer der modernen Mikrobiologie)",
      "Linnaeus (Begründer der biologischen Nomenklatur)",
    ],
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
      "ernähren sich von anderen Organismen (heterotrophe Ernährungsweise)",
      "bauen organische Stoffe aus anorganischen auf (z. B. Photosynthese)",
      "zersetzen nur totes organisches Material (saprophytische Ernährungsweise)",
      "sind nur Destruenten (Zersetzer, die Biomasse mineralisieren)",
      "nehmen nur fertige organische Stoffe auf (chemoheterotrophe Ernährung)",
    ],
    1,
    "Autotroph = Selbsternährung (z. B. Pflanzen durch Photosynthese). Heterotroph = Ernährung von anderen.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
  q(
    "bio-pool-9-021",
    "bio-kap1",
    "Welches Organell ist für den Abbau von H₂O₂ zuständig?",
    [
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Peroxisom",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
      "ER",
    ],
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
    ["Erythrozyten (bikonkave, kernlose rote Blutkörperchen)", "Kap2"]
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
    ["Befruchtung (Syngamie der Gameten im Eileiter bei der Konzeption)", "Kap3"]
  ),
  q(
    "bio-pool-9-024",
    "bio-kap5",
    "Eine Nahrungskette beschreibt …",
    [
      "nur die Destruenten (Zersetzer wie Pilze und Bakterien) im Ökosystem",
      "den Energie- und Stofffluss von Produzenten zu Konsumenten",
      "nur abiotische Faktoren (Temperatur, Licht, Boden, Wasser) ohne Organismen",
      "eine einzelne Art (Spezies) als taxonomische Grundeinheit der Biologie",
      "nur die Biotope (unbelebte Lebensräume) ohne biotische Komponenten",
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
      "Verhorntes Plattenepithel (keratinisiert, z. B. Epidermis der Haut)",
      "Urothel (dehnbares Übergangsepithel der Harnwege)",
      "Mehrschichtiges unverhorntes Plattenepithel",
      "Flimmerepithel (respiratorisches Epithel mit motilen Kinozilien)",
      "Einschichtiges Zylinderepithel (hochprismatisch, z. B. im Magen und Darm)",
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
      "die genetische Ausprägung (Gesamtheit der Allele eines Individuums)",
      "die sichtbare bzw. messbare Ausprägung des Merkmals",
      "immer dominant (Merkmal manifestiert sich bereits bei einem Allel)",
      "immer rezessiv (Merkmal zeigt sich nur bei homozygotem Genotyp, z. B. aa)",
      "nur die DNA-Sequenz (Abfolge der Nukleotide im Genom ohne Umwelteinfluss)",
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
      "nur die Temperatur (Thermoregulation als Teilaspekt der Körperfunktionen)",
      "die aktive Aufrechterhaltung innerer Konstanten (z. B. Blutzucker, pH, Temperatur)",
      "nur den Blutzucker (Glukosespiegel) als einzelnen regulierten Parameter",
      "nur den pH-Wert (Säure-Basen-Gleichgewicht) im Blut und Gewebe",
      "die positive Rückkopplung (Verstärkungsmechanismus, z. B. bei der Blutgerinnung)",
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
      "Licht und Temperatur (physikalische Umweltparameter als abiotische Faktoren)",
      "von Lebewesen ausgehende Einflüsse (z. B. Konkurrenz, Räuber-Beute)",
      "nur Wasser (H₂O als Lösungsmittel und Endprodukt der Oxidation)",
      "nur der Boden (Edaphon) als abiotisches Substrat für terrestrische Organismen",
      "nur anorganische Nährstoffe (Mineralstoffe und Spurenelemente im Boden)",
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
      "Sie haben eine Doppelmembran (wie Mitochondrien und Zellkern).",
      "Sie sind an der Proteinbiosynthese (Translation) beteiligt.",
      "Sie kommen nur im Zellkern vor (als Bestandteil der Kernmatrix).",
      "Sie enthalten DNA (Desoxyribonukleinsäure als genetische Information).",
      "Sie bauen H₂O₂ ab (Wasserstoffperoxid mittels Katalase in Peroxisomen).",
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
    [
      "Urothel (dehnbares Übergangsepithel der Harnwege)",
      "Flimmerepithel (z. B. Trachea)",
      "Epidermis (mehrschichtig verhorntes Plattenepithel als Hautschutzbarriere)",
      "Darmepithel (einschichtiges Zylinderepithel mit Bürstensaum)",
      "Alveolarepithel (Typ-I- und Typ-II-Pneumozyten der Lunge)",
    ],
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
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Kap3"]
  ),
  q(
    "bio-pool-9-035",
    "bio-kap1",
    "Emergenz bedeutet in der Biologie …",
    [
      "Reduktion auf Einzelteile (analytisch-reduktionistischer Ansatz in der Biologie)",
      "dass neue Eigenschaften auf höherer Ebene entstehen, die aus den Teilen nicht vorhersagbar sind",
      "nur Vererbung (Weitergabe genetischer Information über die Keimbahn)",
      "nur Stoffwechsel (Gesamtheit aller katabolen und anabolen Reaktionen)",
      "nur Bewegung (aktive Ortsveränderung durch Motorproteine und Muskelkontraktion)",
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
    [
      "Desmosomen (Haftplatten mit Cadherinen für den mechanischen Zusammenhalt)",
      "Gap Junctions (Connexon-Kanäle für den Ionen- und Molekülaustausch)",
      "Tight Junctions (Verschlusskontakte für die parazelluläre Barriere)",
      "Hemidesmosomen (Verankerung der Basalzellen an der darunterliegenden Basalmembran)",
      "Adherens Junctions (aktinverankerte Gürteldesmosomen für Zell-Zell-Adhäsion)",
    ],
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
      "nur CO₂ (Kohlenstoffdioxid als gasförmiges Endprodukt der Zellatmung)",
      "wieder verfügbare Nährstoffe (Mineralisierung)",
      "nur Wasser (H₂O als Lösungsmittel und Endprodukt der Oxidation)",
      "nur Sauerstoff (O₂ als Elektronenakzeptor der Atmungskette)",
      "nur Stickstoffgas (N₂, das durch Denitrifikation freigesetzt wird)",
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
      "Plattenepithel (flache, schuppenartige Epithelzellen, z. B. in Alveolen)",
      "Einschichtiges kubisches Epithel",
      "Flimmerepithel (respiratorisches Epithel mit motilen Kinozilien)",
      "Urothel (dehnbares Übergangsepithel der ableitenden Harnwege und Blase)",
      "Verhorntes Plattenepithel (keratinisiert, z. B. Epidermis der Haut)",
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
      "Einnistung der Blastozyste (Implantation ins Endometrium, ca. Tag 6–7)",
      "Abstoßung der Gebärmutterschleimhaut",
      "Eisprung (Ovulation, Freisetzung der Oozyte aus dem Graaf-Follikel)",
      "Befruchtung (Syngamie der Gameten im Eileiter bei der Konzeption)",
      "Bildung des Gelbkörpers (Corpus luteum aus dem Follikelrest nach Ovulation)",
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
      "immer identische Allele (homozygot an jedem Genort ohne Variabilität)",
      "die gleichen Genorte (Loci), oft verschiedene Allele",
      "keine Gene (keine codierenden DNA-Abschnitte auf diesen Chromosomen)",
      "nur ein Gen (monogener Chromosomenabschnitt ohne weitere Genorte)",
      "nur Geschlechtsgene (ausschließlich geschlechtsdeterminierende Genorte)",
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
      "Bindegewebe (mesenchymale Zellen in extrazellulärer Matrix)",
      "Mehrschichtiges verhorntes Plattenepithel",
      "Muskelgewebe (kontraktile Zellen mit Aktin- und Myosinfilamenten)",
      "Nervengewebe (Neuronen und Gliazellen zur Signalverarbeitung)",
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
      "nur eine Base (Purin oder Pyrimidin als einzelner Baustein der DNA)",
      "Zucker (Desoxyribose), Phosphat und eine Base",
      "nur Phosphat (Phosphorsäurerest als Teil des Zucker-Phosphat-Rückgrats)",
      "nur Zucker (Desoxyribose als Pentose-Zuckerkomponente der DNA)",
      "keine Base (Nukleotid ohne stickstoffhaltige heterozyklische Base)",
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
    [
      "Ribosom (rRNA-Protein-Komplex im Zytoplasma oder am rER)",
      "Lysosom (Verdauungsorganell mit sauren Hydrolasen im Zytoplasma)",
      "Peroxisom",
      "Mitochondrium (Kraftwerk der Zelle mit eigener ringförmiger DNA)",
      "Golgi-Apparat (Zisternenstapel für posttranslationale Modifikation)",
    ],
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
      "Exozytose ohne Zellverlust (merokrine Sekretion, z. B. Speicheldrüsen)",
      "Abschnürung des apikalen Zellpols (mit Zytoplasma)",
      "Die ganze Zelle wird zum Sekret (holokrine Sekretion, z. B. Talgdrüsen)",
      "Nur endokrine Hormonsekretion ins Blut (z. B. Schilddrüse, Nebenniere)",
      "Nur in Talgdrüsen (Glandulae sebaceae der Haut mit holokriner Sekretion)",
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
    ["Hormone (Signalmoleküle des endokrinen Systems für die Fernwirkung)", "Kap3"]
  ),
  q(
    "bio-pool-9-050",
    "bio-kap5",
    "Die Gesamtheit aller Individuen einer Art in einem Gebiet bezeichnet man als …",
    [
      "Biozönose",
      "Biotop (unbelebter Lebensraum mit spezifischen abiotischen Bedingungen)",
      "Population",
      "Ökosystem (funktionelle Einheit aus Biotop und Biozönose mit Stoffflüssen)",
      "Lebensgemeinschaft",
    ],
    2,
    "Population = Individuen einer Art in einem räumlich abgrenzbaren Gebiet. Biozönose = alle Arten zusammen.",
    "leicht",
    ["Ökologie", "Kap5"]
  ),
];
