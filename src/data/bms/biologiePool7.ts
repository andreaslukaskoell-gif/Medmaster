/**
 * Biologie BMS Pool — echte Fragen aus Kap1 (Zelle) und Kap2 (Gewebe).
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

export const biologiePool7: Question[] = [
  // —— Kap1: Kennzeichen des Lebens, Homöostase, Viren, Emergenz ——
  q(
    "bio-pool-7-001",
    "bio-kap1",
    "Welches der folgenden Merkmale ist KEIN Kennzeichen des Lebens?",
    ["Stoffwechsel", "Kristallisation", "Reizbarkeit", "Fortpflanzung", "Homöostase"],
    1,
    "Kristallisation ist ein physikalisch-chemischer Prozess (z. B. Salzkristalle); die sieben Kennzeichen sind StReForWaEvoBeHo + Homöostase.",
    "leicht",
    ["Kennzeichen des Lebens", "Kap1"]
  ),
  q(
    "bio-pool-7-002",
    "bio-kap1",
    "Warum wirken Antibiotika nicht gegen Viren?",
    [
      "Viren haben eine zu dicke Zellwand.",
      "Viren haben keinen eigenständigen Stoffwechsel und keine bakteriellen Zielstrukturen.",
      "Viren sind zu groß für Antibiotika.",
      "Antibiotika zerstören nur DNA, Viren haben nur RNA.",
      "Viren leben nur außerhalb von Zellen.",
    ],
    1,
    "Viren haben keine Zellwand, keine Ribosomen und keinen eigenen Stoffwechsel; Antibiotika zielen auf bakterielle Strukturen.",
    "mittel",
    ["Viren", "Antibiotika", "Kap1"]
  ),
  q(
    "bio-pool-7-003",
    "bio-kap1",
    "Was kennzeichnet negative Rückkopplung?",
    [
      "Der Effekt verstärkt den auslösenden Reiz.",
      "Der Effekt wirkt dem Auslöser entgegen und stabilisiert den Sollwert.",
      "Sie tritt nur bei Krankheiten auf.",
      "Sie führt immer zu einem Anstieg der gemessenen Größe.",
      "Sie ist typisch für Blutgerinnung und Wehen.",
    ],
    1,
    "Negative Rückkopplung: Effekt wirkt dem Auslöser entgegen (z. B. Insulin senkt Blutzucker). Positive Rückkopplung verstärkt (Blutgerinnung, Wehen).",
    "mittel",
    ["Homöostase", "Rückkopplung", "Kap1"]
  ),
  q(
    "bio-pool-7-004",
    "bio-kap1",
    "Welches Beispiel beschreibt positive Rückkopplung?",
    [
      "Blutzuckerregulation durch Insulin",
      "Körpertemperatur-Regelkreis durch Schwitzen",
      "Blutgerinnung (Thrombin aktiviert weiteres Thrombin)",
      "pH-Regulation des Bluts",
      "Osmoregulation in der Niere",
    ],
    2,
    "Positive Rückkopplung verstärkt den Reiz (Blutgerinnung, Wehen, Aktionspotential). Blutzucker, Temperatur und pH werden durch negative Rückkopplung stabilisiert.",
    "mittel",
    ["Rückkopplung", "Kap1"]
  ),
  q(
    "bio-pool-7-005",
    "bio-kap1",
    "Was ist Emergenz in der Biologie?",
    [
      "Die Reduktion komplexer Systeme auf ihre Einzelteile.",
      "Die Entstehung neuer Eigenschaften auf höherer Organisationsebene, die aus den Teilen nicht vorhersagbar sind.",
      "Die Vererbung von Merkmalen über Generationen.",
      "Der Stoffwechsel einer einzelnen Zelle.",
      "Die Bewegung von Ionen durch die Membran.",
    ],
    1,
    "Emergenz: Das Ganze ist mehr als die Summe der Teile (z. B. Bewusstsein beim Gehirn, Pumpfunktion beim Herz).",
    "mittel",
    ["Emergenz", "Systembiologie", "Kap1"]
  ),
  q(
    "bio-pool-7-006",
    "bio-kap1",
    "Welche Hierarchieebene folgt in der biologischen Organisation direkt auf die Zelle?",
    ["Organell", "Molekül", "Gewebe", "Organ", "Organismus"],
    2,
    "Reihenfolge: Atom → Molekül → Organell → Zelle → Gewebe → Organ → Organsystem → Organismus.",
    "leicht",
    ["Hierarchie", "Kap1"]
  ),
  q(
    "bio-pool-7-007",
    "bio-kap1",
    "Diabetes mellitus Typ 2 ist aus systembiologischer Sicht vor allem eine …",
    [
      "Infektionskrankheit",
      "Homöostasestörung des Blutzuckerregelkreises",
      "Erkrankung der Schilddrüse",
      "Störung der positiven Rückkopplung",
      "Erkrankung ohne Beteiligung von Insulin",
    ],
    1,
    "Typ-2-Diabetes: Insulinresistenz → der negative Regelkreis (Insulin senkt Blutzucker) versagt → chronische Hyperglykämie.",
    "mittel",
    ["Diabetes", "Homöostase", "Kap1"]
  ),
  q(
    "bio-pool-7-008",
    "bio-kap1",
    "Welche Aussage zu ATP trifft zu?",
    [
      "ATP wird nur in Pflanzen gebildet.",
      "ATP ist die universelle Energiewährung der Zelle.",
      "ATP ist ein Strukturprotein.",
      "ATP wird ausschließlich in Lysosomen abgebaut.",
      "ATP enthält keine Phosphatgruppen.",
    ],
    1,
    "ATP (Adenosintriphosphat) ist die zentrale Energiewährung; ohne ATP keine zelluläre Arbeit.",
    "leicht",
    ["ATP", "Stoffwechsel", "Kap1"]
  ),
  q(
    "bio-pool-7-009",
    "bio-kap1",
    STEM_FALSCH,
    [
      "Viren können sich nur in Wirtszellen vermehren.",
      "Viren besitzen keinen eigenständigen Stoffwechsel.",
      "Viren haben eine Zellmembran und Ribosomen.",
      "Viren zeigen Evolution (z. B. Antigendrift).",
      "Antibiotika wirken nicht gegen Viren.",
    ],
    2,
    "Viren haben weder Zellmembran noch Ribosomen; sie sind obligat intrazelluläre Parasiten.",
    "leicht",
    ["Viren", "Kap1"]
  ),
  q(
    "bio-pool-7-010",
    "bio-kap1",
    "Die sieben Kennzeichen des Lebens (StReForWaEvoBeHo) umfassen unter anderem …",
    [
      "nur Stoffwechsel und Fortpflanzung.",
      "Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung, Homöostase.",
      "Kristallisation und Osmose.",
      "nur Homöostase und Bewegung.",
      "Zellwand und Chloroplasten.",
    ],
    1,
    "StReForWaEvoBeHo: Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung, Homöostase. Kein einzelnes definiert Leben allein.",
    "leicht",
    ["Kennzeichen des Lebens", "Kap1"]
  ),
  // —— Kap2: Epithelien, Zellkontakte, Sekretion ——
  q(
    "bio-pool-7-011",
    "bio-kap2",
    "Welches Epithel kleidet die Trachea (Luftröhre) aus?",
    [
      "Urothel",
      "Einschichtiges Plattenepithel",
      "Mehrreihiges Flimmerepithel",
      "Verhorntes Plattenepithel",
      "Einschichtiges kubisches Epithel",
    ],
    2,
    "Die Trachea ist von mehrreihigem (pseudostratifiziertem) Flimmerepithel mit Kinozilien ausgekleidet (mukoziliäre Clearance).",
    "leicht",
    ["Epithel", "Trachea", "Kap2"]
  ),
  q(
    "bio-pool-7-012",
    "bio-kap2",
    "Welche Funktion haben Tight Junctions (Zonula occludens) in Epithelien?",
    [
      "Ionenaustausch zwischen benachbarten Zellen.",
      "Versiegelung des apikalen Interzellularspalts; Barriere- und Fence-Funktion.",
      "Verankerung der Zelle an der Basalmembran.",
      "Mechanischer Zusammenhalt durch Cadherine.",
      "Transport von Vesikeln zur apikalen Membran.",
    ],
    1,
    "Tight Junctions liegen apikal, versiegeln den Spalt und trennen apikale von basolateraler Membrandomäne (Fence).",
    "mittel",
    ["Zellkontakte", "Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-013",
    "bio-kap2",
    "Wo wird holokrin sezerniert?",
    [
      "Schweißdrüsen",
      "Pankreas",
      "Talgdrüsen (Glandulae sebaceae)",
      "Speicheldrüsen",
      "Becherzellen im Darm",
    ],
    2,
    "Holokrin: Die ganze Zelle zerfällt und wird zum Sekret. Typisches Beispiel: Talgdrüsen. Merokrin = Exozytose (häufigste Form); apokrin = Abschnürung der Zellspitze.",
    "mittel",
    ["Sekretion", "Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-014",
    "bio-kap2",
    "Was kennzeichnet pseudostratifiziertes Epithel?",
    [
      "Es besteht aus mehreren Zellschichten ohne Kontakt zur Basalmembran.",
      "Alle Zellen berühren die Basalmembran; die Kerne liegen auf unterschiedlichen Höhen.",
      "Es kommt nur in der Haut vor.",
      "Es enthält keine Tight Junctions.",
      "Es ist immer verhornt.",
    ],
    1,
    "Pseudostratifiziert = mehrreihig: Alle Zellen berühren die Basalmembran, wirkt mehrschichtig durch die Kerne auf verschiedenen Höhen.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-015",
    "bio-kap2",
    "Welche Zellkontakte ermöglichen den Ionenaustausch zwischen Herzmuskelzellen?",
    ["Tight Junctions", "Desmosomen", "Gap Junctions", "Hemidesmosomen", "Adherens Junctions"],
    2,
    "Gap Junctions (Connexine) ermöglichen direkten Ionenaustausch; so breitet sich die Erregung im Herzen koordiniert aus.",
    "mittel",
    ["Zellkontakte", "Herz", "Kap2"]
  ),
  q(
    "bio-pool-7-016",
    "bio-kap2",
    "Welches Epithel ermöglicht die Dehnung der Harnblase?",
    [
      "Flimmerepithel",
      "Verhorntes Plattenepithel",
      "Urothel (Übergangsepithel) mit Schirmzellen",
      "Einschichtiges Plattenepithel",
      "Einschichtiges Zylinderepithel",
    ],
    2,
    "Urothel (Übergangsepithel) mit Schirmzellen und Uroplakin-Membranen kann sich bei Füllung stark dehnen.",
    "leicht",
    ["Epithel", "Harnblase", "Kap2"]
  ),
  q(
    "bio-pool-7-017",
    "bio-kap2",
    "Welche Eigenschaft trifft auf alle Epithelien zu?",
    [
      "Sie sind stark vascularisiert.",
      "Sie sind polar (apikal/basolateral) und sitzen auf einer Basalmembran.",
      "Sie enthalten keine Zellkontakte.",
      "Sie kommen nur in der Haut vor.",
      "Sie sezernieren immer Hormone.",
    ],
    1,
    "Epithelien sind polar, avaskulär und auf der Basalmembran verankert; Versorgung durch Diffusion aus dem darunter liegenden Bindegewebe.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-018",
    "bio-kap2",
    "Merokrine Sekretion bedeutet …",
    [
      "Die ganze Zelle wird zum Sekret (z. B. Talgdrüsen).",
      "Exozytose ohne Zellverlust (z. B. Schweiß, Pankreas).",
      "Abschnürung des apikalen Zellpols (z. B. Milchfett).",
      "Nur endokrine Drüsen sezernieren merokrin.",
      "Die Zelle stirbt bei der Sekretion.",
    ],
    1,
    "Merokrin = Exozytose, häufigste Form (Schweißdrüsen, Pankreas, Speicheldrüsen). Apokrin = Abschnürung; Holokrin = ganze Zelle = Sekret.",
    "mittel",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-7-019",
    "bio-kap2",
    "Was ist die Basalmembran?",
    [
      "Die apikale Zellmembran des Epithels.",
      "Die Verbindung zwischen Epithel und darunter liegendem Bindegewebe (Kollagen IV, Laminin).",
      "Eine Schicht aus Korneozyten in der Epidermis.",
      "Die Membran der Mitochondrien.",
      "Der Raum zwischen zwei Epithelzellen.",
    ],
    1,
    "Die Basalmembran verankert das Epithel am Bindegewebe und enthält u. a. Kollagen IV und Laminin.",
    "leicht",
    ["Epithel", "Basalmembran", "Kap2"]
  ),
  q(
    "bio-pool-7-020",
    "bio-kap2",
    "Kartagener-Syndrom (Primäre Ziliendyskinesie) beruht auf …",
    [
      "einem Defekt der Tight Junctions.",
      "einem Dynein-Arm-Defekt der Kinozilien.",
      "einer Überfunktion der Talgdrüsen.",
      "einem Mangel an Basalmembran-Proteinen.",
      "einer Störung der merokrinen Sekretion.",
    ],
    1,
    "Dynein-Defekt → Kinozilien können nicht schlagen → kein Schleimtransport → Bronchiektasen, Infertilität; oft Situs inversus.",
    "schwer",
    ["Kartagener", "Zilien", "Kap2"]
  ),
  q(
    "bio-pool-7-021",
    "bio-kap2",
    "Welches Epithel findet sich in der Epidermis (Haut)?",
    [
      "Urothel",
      "Mehrschichtiges unverhorntes Plattenepithel",
      "Mehrschichtiges verhorntes Plattenepithel",
      "Flimmerepithel",
      "Einschichtiges kubisches Epithel",
    ],
    2,
    "Epidermis = mehrschichtiges verhorntes Plattenepithel (Stratum basale → spinosum → granulosum → corneum).",
    "leicht",
    ["Epithel", "Haut", "Kap2"]
  ),
  q(
    "bio-pool-7-022",
    "bio-kap2",
    "Hemidesmosomen dienen der …",
    [
      "Versiegelung des Interzellularspalts",
      "Verankerung der Zelle an der Basalmembran",
      "Ionenweiterleitung zwischen Zellen",
      "mechanischen Haftung zwischen zwei Zellen",
      "Sekretion von Muzin",
    ],
    1,
    "Hemidesmosomen: Verankerung Zelle–Basalmembran (Integrine, Laminin). Desmosomen = Zelle–Zelle (mechanisch).",
    "mittel",
    ["Zellkontakte", "Kap2"]
  ),
  q(
    "bio-pool-7-023",
    "bio-kap2",
    STEM_FALSCH,
    [
      "Die Trachea ist von Flimmerepithel ausgekleidet.",
      "Urothel kleidet die Harnblase aus.",
      "Die Epidermis ist verhorntes Plattenepithel.",
      "Die Trachea ist von Urothel ausgekleidet.",
      "Talgdrüsen sezernieren holokrin.",
    ],
    3,
    "Die Trachea hat Flimmerepithel; Urothel kleidet Harnblase und Ureter aus (D falsch).",
    "leicht",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-024",
    "bio-kap2",
    "Becherzellen im Darmepithel sezernieren …",
    ["Insulin", "Muzin (Schleim)", "Talg", "Schweiß", "Blut"],
    1,
    "Becherzellen sind einzelfellige Schleimdrüsen; sie sezernieren Muzin (merokrin) für den Schleimfilm und die mukoziliäre Clearance.",
    "mittel",
    ["Epithel", "Darm", "Kap2"]
  ),
  q(
    "bio-pool-7-025",
    "bio-kap2",
    "Welche Schicht der Epidermis enthält die teilungsaktiven Stammzellen?",
    [
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum spinosum",
      "Stratum basale",
      "Stratum lucidum",
    ],
    3,
    "Stratum basale (Basalzellschicht) liegt an der Basalmembran und enthält die proliferierenden Keratinozyten.",
    "mittel",
    ["Epidermis", "Haut", "Kap2"]
  ),
  // —— Kap4: Genetik (DNA, Gen, Chromosom, Meiose) ——
  q(
    "bio-pool-7-026",
    "bio-kap4",
    "Welche Basenpaarung kommt in der DNA vor?",
    ["A–G", "A–T", "G–T", "C–U", "A–U"],
    1,
    "In der DNA paaren sich A mit T (2 H-Brücken) und G mit C (3 H-Brücken). A–U und C–U sind typisch für RNA.",
    "leicht",
    ["DNA", "Basenpaarung", "Kap4"]
  ),
  q(
    "bio-pool-7-027",
    "bio-kap4",
    "Was ist ein Allel?",
    [
      "Ein ganzes Chromosom.",
      "Eine Variantenform eines Gens (z. B. A oder a).",
      "Ein Abschnitt der RNA.",
      "Die Gesamtheit aller Gene.",
      "Ein Histon-Protein.",
    ],
    1,
    "Allel = eine von mehreren Varianten eines Gens am gleichen Locus. Ein diploider Organismus trägt zwei Allele pro Gen.",
    "leicht",
    ["Genetik", "Allel", "Kap4"]
  ),
  q(
    "bio-pool-7-028",
    "bio-kap4",
    "Was sind homologe Chromosomen?",
    [
      "Zwei identische Kopien eines Chromosoms nach der Replikation.",
      "Ein Paar aus mütterlichem und väterlichem Chromosom mit gleichen Genorten (Loci), oft verschiedene Allele.",
      "Die Chromosomen in den Mitochondrien.",
      "Chromosomen ohne Zentromer.",
      "Nur die Geschlechtschromosomen.",
    ],
    1,
    "Homologe Chromosomen: je eines von Mutter und Vater, gleiche Gene an gleichen Loci, aber oft unterschiedliche Allele. Nicht identisch!",
    "mittel",
    ["Chromosomen", "Genetik", "Kap4"]
  ),
  q(
    "bio-pool-7-029",
    "bio-kap4",
    "Was sind Schwesterchromatiden?",
    [
      "Zwei homologe Chromosomen.",
      "Zwei identische Chromosomenkopien nach der DNA-Replikation, am Zentromer verbunden.",
      "Die beiden Stränge der DNA-Doppelhelix.",
      "Chromosomen in der Interphase.",
      "Die Geschlechtschromosomen X und Y.",
    ],
    1,
    "Nach der Replikation besteht jedes Chromosom aus zwei identischen Schwesterchromatiden, die am Zentromer zusammenhängen.",
    "mittel",
    ["Chromosomen", "Mitose", "Kap4"]
  ),
  q(
    "bio-pool-7-030",
    "bio-kap4",
    "In welcher Phase der Meiose wird der Chromosomensatz von diploid auf haploid reduziert?",
    ["Prophase I", "Metaphase I", "Anaphase I", "Telophase II", "Metaphase II"],
    2,
    "In der Anaphase I werden die homologen Chromosomen getrennt; damit wird aus 2n haploid (n).",
    "mittel",
    ["Meiose", "Kap4"]
  ),
  q(
    "bio-pool-7-031",
    "bio-kap4",
    "Wo liegt die Erbinformation bei Eukaryoten primär?",
    [
      "In den Ribosomen",
      "In der DNA im Zellkern",
      "In den Mitochondrienmembranen",
      "Im Zytosol",
      "In den Lysosomen",
    ],
    1,
    "Die Erbinformation liegt in der DNA im Zellkern (bei Eukaryoten an Histonen verpackt). Mitochondrien haben zusätzlich eigene DNA.",
    "leicht",
    ["DNA", "Zellkern", "Kap4"]
  ),
  q(
    "bio-pool-7-032",
    "bio-kap4",
    "Ein Gen ist …",
    [
      "ein ganzes Chromosom.",
      "ein Abschnitt der DNA, der die Information für ein Merkmal oder ein Produkt trägt.",
      "eine Base (A, T, G oder C).",
      "ein Ribosom.",
      "eine Aminosäure.",
    ],
    1,
    "Gen = funktioneller DNA-Abschnitt für ein Merkmal oder Produkt (z. B. Protein); Locus = Ort des Gens auf dem Chromosom.",
    "leicht",
    ["Gen", "DNA", "Kap4"]
  ),
  q(
    "bio-pool-7-033",
    "bio-kap4",
    STEM_FALSCH,
    [
      "In der DNA paart A mit T und G mit C.",
      "Ein Allel ist eine Variante eines Gens.",
      "Schwesterchromatiden sind identische Kopien nach der Replikation.",
      "Homologe Chromosomen sind immer genetisch identisch.",
      "Die Meiose produziert haploide Keimzellen.",
    ],
    3,
    "Homologe Chromosomen tragen gleiche Genorte, aber oft verschiedene Allele (mütterlich/väterlich) – nicht identisch.",
    "mittel",
    ["Genetik", "Kap4"]
  ),
  q(
    "bio-pool-7-034",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Körperzelle (diploid)?",
    ["23", "46", "69", "92", "22"],
    1,
    "Der Mensch hat 46 Chromosomen (23 Paare) in diploiden Körperzellen; Keimzellen sind haploid mit 23.",
    "leicht",
    ["Chromosomen", "Kap4"]
  ),
  q(
    "bio-pool-7-035",
    "bio-kap3",
    "Wo findet die Befruchtung der Eizelle beim Menschen typischerweise statt?",
    ["Im Ovar", "In der Gebärmutter", "Im Eileiter", "In der Vagina", "Im Gebärmutterhals"],
    2,
    "Die Befruchtung erfolgt im Eileiter (Tuba uterina); die Einnistung dann in der Gebärmutter.",
    "leicht",
    ["Befruchtung", "Reproduktion", "Kap3"]
  ),
  q(
    "bio-pool-7-036",
    "bio-kap3",
    "Welches Hormon löst den Eisprung aus?",
    ["Östrogen", "Progesteron", "LH (luteinisierendes Hormon)", "FSH", "Prolactin"],
    2,
    "Der LH-Peak löst den Eisprung aus; FSH stimuliert vor allem die Follikelreifung.",
    "mittel",
    ["Hormone", "Zyklus", "Kap3"]
  ),
  q(
    "bio-pool-7-037",
    "bio-kap1",
    "Welche Organelle ist für den Abbau von Wasserstoffperoxid (H₂O₂) zuständig?",
    ["Ribosom", "Lysosom", "Peroxisom", "Golgi-Apparat", "Endoplasmatisches Retikulum"],
    2,
    "Peroxisomen enthalten Katalase und bauen H₂O₂ zu Wasser und Sauerstoff ab.",
    "leicht",
    ["Organellen", "Peroxisom", "Kap1"]
  ),
  q(
    "bio-pool-7-038",
    "bio-kap1",
    "In welchem Zellkompartiment findet die oxidative Phosphorylierung (Atmungskette) statt?",
    [
      "Zytosol",
      "Mitochondrienmatrix",
      "Intermembranraum",
      "Innere Mitochondrienmembran",
      "Kernmembran",
    ],
    3,
    "Die Atmungskette (Komplexe I–IV, ATP-Synthase) sitzt an der inneren Mitochondrienmembran.",
    "mittel",
    ["Mitochondrien", "ATP", "Kap1"]
  ),
  q(
    "bio-pool-7-039",
    "bio-kap2",
    "Welche Sekretionsform beschreibt die Abgabe von Sekret unter Mitnahme von Zellplasma?",
    ["Merokrin", "Apokrin", "Holokrin", "Endokrin", "Parakrin"],
    1,
    "Apokrin: Zellspitze wird abgeschnürt (z. B. Milchfettkügelchen). Merokrin = Exozytose; Holokrin = ganze Zelle = Sekret.",
    "schwer",
    ["Sekretion", "Kap2"]
  ),
  q(
    "bio-pool-7-040",
    "bio-kap4",
    "Bei einem heterozygoten Träger (Aa) und homozygot rezessivem Partner (aa): Wie groß ist die Wahrscheinlichkeit für ein homozygotes rezessives Kind (aa)?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    2,
    "Aa × aa → je 50 % Aa und aa. Ein homozygotes rezessives Kind hat 50 % Wahrscheinlichkeit.",
    "mittel",
    ["Vererbung", "Kap4"]
  ),
  q(
    "bio-pool-7-041",
    "bio-kap5",
    "Was beschreibt die Biozönose?",
    [
      "Den unbelebten Lebensraum",
      "Die Lebensgemeinschaft aller Arten in einem Gebiet",
      "Nur die Pflanzen",
      "Die abiotischen Faktoren",
      "Ein einzelnes Individuum",
    ],
    1,
    "Biozönose = Lebensgemeinschaft aller Organismen; Biotop = unbelebter Lebensraum; Ökosystem = Biotop + Biozönose.",
    "leicht",
    ["Ökologie", "Biozönose", "Kap5"]
  ),
  q(
    "bio-pool-7-042",
    "bio-kap5",
    "Was kennzeichnet eine Population?",
    [
      "Alle Arten in einem Gebiet",
      "Individuen einer Art in einem räumlich abgrenzbaren Gebiet",
      "Nur die Pflanzen",
      "Der unbelebte Lebensraum",
      "Die Wechselbeziehungen zwischen Ökosystemen",
    ],
    1,
    "Population = Individuen derselben Art in einem räumlich abgrenzbaren Gebiet.",
    "leicht",
    ["Ökologie", "Population", "Kap5"]
  ),
  q(
    "bio-pool-7-043",
    "bio-kap1",
    "Wo findet die Translation (Proteinbiosynthese) statt?",
    [
      "Im Zellkern",
      "An den Ribosomen (Zytosol bzw. raues ER)",
      "In den Mitochondrien",
      "Im Golgi-Apparat",
      "In den Lysosomen",
    ],
    1,
    "Die Translation (mRNA → Protein) erfolgt an den Ribosomen, frei im Zytosol oder gebunden am rauen ER.",
    "mittel",
    ["Proteinbiosynthese", "Ribosomen", "Kap1"]
  ),
  q(
    "bio-pool-7-044",
    "bio-kap2",
    "Desmosomen dienen in Epithelien vor allem der …",
    [
      "Versiegelung des Interzellularspalts",
      "Verankerung an der Basalmembran",
      "Ionenweiterleitung zwischen Zellen",
      "mechanischen Haftung zwischen Zellen (Cadherine)",
      "Sekretion",
    ],
    3,
    "Desmosomen: mechanischer Zusammenhalt (Cadherine + Intermediärfilamente). Tight Junctions = Barriere; Gap Junctions = Ionen.",
    "mittel",
    ["Zellkontakte", "Kap2"]
  ),
  q(
    "bio-pool-7-045",
    "bio-kap4",
    "Wie viele Chromosomen hat eine menschliche Keimzelle nach der Meiose?",
    ["23", "46", "92", "22", "44"],
    0,
    "Keimzellen sind haploid: 23 Chromosomen.",
    "leicht",
    ["Meiose", "Keimzelle", "Kap4"]
  ),
  q(
    "bio-pool-7-046",
    "bio-kap1",
    "Welche der folgenden Strukturen hat keine eigene Membran?",
    ["Mitochondrium", "Lysosom", "Ribosom", "Zellkern", "Peroxisom"],
    2,
    "Ribosomen bestehen aus rRNA und Proteinen und haben keine umgebende Membran.",
    "leicht",
    ["Organellen", "Kap1"]
  ),
  q(
    "bio-pool-7-047",
    "bio-kap2",
    "Welches Epithel kleidet den Ösophagus aus?",
    [
      "Verhorntes Plattenepithel",
      "Urothel",
      "Mehrschichtiges unverhorntes Plattenepithel",
      "Flimmerepithel",
      "Einschichtiges Zylinderepithel",
    ],
    2,
    "Ösophagus, Vagina, Mundhöhle: mehrschichtiges unverhorntes Plattenepithel. Epidermis = verhornt.",
    "mittel",
    ["Epithel", "Kap2"]
  ),
  q(
    "bio-pool-7-048",
    "bio-kap4",
    "Crossing-over (Austausch von Chromosomenabschnitten) findet in der Meiose in welcher Phase statt?",
    ["Metaphase I", "Anaphase I", "Prophase I", "Telophase II", "Metaphase II"],
    2,
    "Crossing-over erfolgt in der Prophase I der Meiose (Paarung der homologen Chromosomen).",
    "mittel",
    ["Meiose", "Crossing-over", "Kap4"]
  ),
  q(
    "bio-pool-7-049",
    "bio-kap1",
    "Welches Kennzeichen des Lebens fehlt Viren am entscheidendsten für die Einstufung als Lebewesen?",
    ["Fortpflanzung", "Evolution", "Eigenständiger Stoffwechsel", "Reizbarkeit", "Bewegung"],
    2,
    "Viren haben keinen eigenständigen Stoffwechsel (keine Ribosomen, keine ATP-Synthese); sie sind auf die Wirtszelle angewiesen.",
    "mittel",
    ["Viren", "Kennzeichen des Lebens", "Kap1"]
  ),
  q(
    "bio-pool-7-050",
    "bio-kap2",
    "Welche Zellen bauen Knochengewebe ab?",
    ["Osteoblasten", "Osteozyten", "Osteoklasten", "Chondrozyten", "Fibroblasten"],
    2,
    "Osteoklasten bauen Knochen ab (Resorption); Osteoblasten bauen ihn auf.",
    "leicht",
    ["Knochen", "Gewebe", "Kap2"]
  ),
];
