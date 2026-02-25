/**
 * Chemie-Pool Teil 4 — Fragen 151–200.
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
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const chemiePool4: Question[] = [
  q(
    "ch-pool-151",
    "chem-kap1",
    "Welche Quantenzahl beschreibt die Form des Orbitals?",
    ["n", "l", "m", "s", "Z"],
    1,
    "Nebenquantenzahl l: 0=s, 1=p, 2=d, 3=f. n = Hauptquantenzahl (Energie/Schale).",
    "mittel",
    ["Quantenzahl", "Orbital"]
  ),
  q(
    "ch-pool-152",
    "chem-kap2",
    "Bei konstantem Volumen und konstanter Stoffmenge gilt:",
    ["p/T = const", "V/T = const", "p·V = const", "n·p = const", "T·V = const"],
    0,
    "Bei V = const und n = const: p proportional zu T (Gay-Lussac), also p/T = const.",
    "mittel",
    ["Gasgesetze"]
  ),
  q(
    "ch-pool-153",
    "chem-kap3",
    "Welche Aussage zu Wasserstoffbrücken ist richtig?",
    [
      "Sie sind stärker als kovalente Bindungen.",
      "Sie treten zwischen H (gebunden an O,N,F) und O,N oder F auf.",
      "Sie wirken nur in Festkörpern.",
      "Sie sind unabhängig von der Elektronegativität.",
      "Sie kommen nur in organischen Verbindungen vor.",
    ],
    1,
    "H-Brücken: H muss an O, N oder F gebunden sein; Partneratom mit freiem Elektronenpaar (O, N, F). Deutlich schwächer als kovalente Bindungen.",
    "mittel",
    ["Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-154",
    "chem-kap4",
    "Was kennzeichnet eine irreversibel ablaufende Reaktion?",
    [
      "Gleichgewicht zwischen Hin- und Rückreaktion",
      "Reaktion läuft praktisch nur in eine Richtung",
      "Katalysator notwendig",
      "Keine Produkte",
      "Konstante Temperatur",
    ],
    1,
    "Irreversibel: Reaktion läuft praktisch vollständig in eine Richtung (z. B. Verbrennung). Reversibel: Gleichgewicht (⇌).",
    "leicht",
    ["reversibel", "irreversibel"]
  ),
  q(
    "ch-pool-155",
    "chem-kap5",
    "Welcher Indikator färbt sich in Säuren rot?",
    [
      "Phenolphthalein",
      "Lackmus (blau)",
      "Lackmus (rot)",
      "Bromthymolblau (blau)",
      "Universalindikator (grün)",
    ],
    1,
    "Säuren: blauer Lackmus wird rot. Basen: roter Lackmus wird blau. Phenolphthalein in Base: rot.",
    "leicht",
    ["Indikator", "Lackmus"]
  ),
  q(
    "ch-pool-156",
    "chem-kap6",
    "Welche Stoffklasse enthält die funktionelle Gruppe −COOH?",
    ["Alkohole", "Carbonsäuren", "Ether", "Amine", "Aldehyde"],
    1,
    "−COOH = Carboxylgruppe = Carbonsäuren. −OH = Alkohol, −O− = Ether, −NH₂ = Amin, −CHO = Aldehyd.",
    "leicht",
    ["Carbonsäure", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-157",
    "chem-kap1",
    "Die Ionisierungsenergie ist die Energie, die nötig ist, um:",
    [
      "ein Neutron zu entfernen",
      "ein Elektron aus dem Atom zu entfernen",
      "ein Proton zu entfernen",
      "ein Atom zu schmelzen",
      "ein Elektron hinzuzufügen",
    ],
    1,
    "Ionisierungsenergie = Energie zur Abtrennung eines Elektrons aus dem gasförmigen Atom. Nimmt in einer Periode von links nach rechts zu.",
    "leicht",
    ["Ionisierungsenergie"]
  ),
  q(
    "ch-pool-158",
    "chem-kap2",
    "Welche Phase hat die höchste Dichte bei Wasser (unter 100 °C)?",
    ["Eis bei 0 °C", "Wasser bei 0 °C", "Wasser bei 4 °C", "Wasser bei 25 °C", "Dampf bei 100 °C"],
    2,
    "Dichtemaximum bei 4 °C. Eis ist weniger dicht als flüssiges Wasser.",
    "leicht",
    ["Wasser", "Dichte"]
  ),
  q(
    "ch-pool-159",
    "chem-kap3",
    "Die Elektronegativitätsdifferenz ΔEN zwischen zwei Atomen ist ein Maß für:",
    [
      "die Bindungsenergie",
      "die Polarität der Bindung",
      "die Anzahl der Bindungen",
      "die Oxidationszahl",
      "die Atommasse",
    ],
    1,
    "Große ΔEN → polare Bindung (Partialladungen). Sehr große ΔEN (> ca. 1,7) → ionischer Charakter.",
    "leicht",
    ["Elektronegativität", "Polarität"]
  ),
  q(
    "ch-pool-160",
    "chem-kap4",
    "Welche Aussage zum chemischen Gleichgewicht ist richtig?",
    [
      "Im Gleichgewicht laufen keine Reaktionen mehr ab.",
      "Im Gleichgewicht sind Hin- und Rückreaktion gleich schnell.",
      "Die Konzentrationen sind immer gleich.",
      "Ein Katalysator verschiebt das Gleichgewicht.",
      "Die Temperatur hat keinen Einfluss.",
    ],
    1,
    "Gleichgewicht: Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit; Konzentrationen bleiben konstant (dynamisches Gleichgewicht).",
    "mittel",
    ["Gleichgewicht"]
  ),
  q(
    "ch-pool-161",
    "chem-kap5",
    "Eine Lösung mit pH = 2 enthält mehr H₃O⁺ als eine mit pH = 5 um den Faktor:",
    ["3", "10", "100", "1000", "10⁵"],
    3,
    "pH-Differenz 3 → Konzentrationsverhältnis 10³ = 1000. pH 2: [H₃O⁺] = 10⁻²; pH 5: 10⁻⁵.",
    "mittel",
    ["pH", "Konzentration"]
  ),
  q(
    "ch-pool-162",
    "chem-kap6",
    "Welche Verbindung ist ein Ether?",
    ["CH₃OH", "CH₃OCH₃", "CH₃COOH", "CH₃NH₂", "HCHO"],
    1,
    "Ether: C−O−C. CH₃OCH₃ = Dimethylether. CH₃OH = Methanol (Alkohol), CH₃COOH = Essigsäure.",
    "leicht",
    ["Ether", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-163",
    "chem-kap1",
    "Wie viele Valenzelektronen hat Stickstoff (N)?",
    ["3", "4", "5", "6", "7"],
    2,
    "Stickstoff: 1s² 2s² 2p³ → 5 Valenzelektronen (Gruppe 15).",
    "leicht",
    ["Valenzelektronen", "Stickstoff"]
  ),
  q(
    "ch-pool-164",
    "chem-kap2",
    "Die Einheit der Stoffmenge ist:",
    ["Gramm", "Liter", "Mol", "Kelvin", "Pascal"],
    2,
    "Stoffmenge n in Mol [mol]. 1 mol = 6,022·10²³ Teilchen.",
    "leicht",
    ["Stoffmenge", "Mol"]
  ),
  q(
    "ch-pool-165",
    "chem-kap3",
    "Welche Verbindung hat die höchste Schmelztemperatur?",
    ["H₂O", "NaCl", "CH₄", "CO₂", "O₂"],
    1,
    "NaCl (Ionenkristall): ca. 801 °C. H₂O 0 °C, CH₄ −182 °C, CO₂ sublimiert, O₂ −218 °C. Ionenbindung → hoher Schmelzpunkt.",
    "mittel",
    ["Schmelzpunkt", "Ionenbindung"]
  ),
  q(
    "ch-pool-166",
    "chem-kap4",
    "Die Reaktion 2 H₂ + O₂ → 2 H₂O ist eine:",
    ["Zersetzung", "Synthese", "Substitution", "Metathese", "Neutralisation"],
    1,
    "Synthese: zwei Elemente (H₂, O₂) vereinigen sich zu einer Verbindung (H₂O).",
    "leicht",
    ["Synthese", "Wasserstoff", "Sauerstoff"]
  ),
  q(
    "ch-pool-167",
    "chem-kap5",
    "Welches Ion macht eine Lösung basisch?",
    ["H₃O⁺", "Cl⁻", "OH⁻", "Na⁺", "NO₃⁻"],
    2,
    "OH⁻ (Hydroxidion) ist charakteristisch für Basen. H₃O⁺ für Säuren. Na⁺, Cl⁻, NO₃⁻ sind pH-neutral (starke Säure/Base-Anionen/Kationen).",
    "leicht",
    ["Base", "OH-"]
  ),
  q(
    "ch-pool-168",
    "chem-kap6",
    "Ein Alkan mit 6 C-Atomen hat die Summenformel:",
    ["C₆H₆", "C₆H₁₂", "C₆H₁₀", "C₆H₁₄", "C₆H₈"],
    3,
    "Alkane: CₙH₂ₙ₊₂. n = 6 → C₆H₁₄ (Hexan). C₆H₆ = Benzol.",
    "leicht",
    ["Alkan", "Hexan"]
  ),
  q(
    "ch-pool-169",
    "chem-kap1",
    "Welches Element ist ein Halogen?",
    ["Sauerstoff", "Stickstoff", "Chlor", "Kohlenstoff", "Schwefel"],
    2,
    "Halogene = Gruppe 17: F, Cl, Br, I, At. Chlor ist ein Halogen.",
    "leicht",
    ["Halogen", "Chlor"]
  ),
  q(
    "ch-pool-170",
    "chem-kap2",
    "Die Dichte ρ eines idealen Gases ist (M = molare Masse):",
    ["ρ = p/(RT)", "ρ = M·p/(R·T)", "ρ = n/V", "ρ = p·V", "ρ = R·T"],
    1,
    "ρ = m/V = n·M/V. Mit pV = nRT → n/V = p/(RT) → ρ = M·p/(R·T).",
    "mittel",
    ["Dichte", "ideales Gas"]
  ),
  q(
    "ch-pool-171",
    "chem-kap3",
    "Welche Aussage zur Ionenbindung trifft zu?",
    [
      "Sie ist gerichtet.",
      "Sie ist ungerichtet (elektrostatisch).",
      "Sie erfordert gleiche EN.",
      "Sie bildet diskrete Moleküle.",
      "Sie ist nur bei Raumtemperatur stabil.",
    ],
    1,
    "Ionenbindung: elektrostatische Anziehung zwischen Kationen und Anionen, ungerichtet (Gitter). Kovalente Bindung kann gerichtet sein.",
    "mittel",
    ["Ionenbindung"]
  ),
  q(
    "ch-pool-172",
    "chem-kap4",
    "Ein Katalysator erhöht die Reaktionsgeschwindigkeit, indem er:",
    [
      "die Aktivierungsenergie senkt",
      "die Reaktionsenthalpie vergrößert",
      "das Gleichgewicht verschiebt",
      "die Produkte stabilisiert",
      "die Edukte verbraucht",
    ],
    0,
    "Katalysator senkt die Aktivierungsenergie E_A (alternativer Reaktionsweg). ΔH und Gleichgewichtslage bleiben unverändert.",
    "leicht",
    ["Katalysator", "Aktivierungsenergie"]
  ),
  q(
    "ch-pool-173",
    "chem-kap5",
    "Welche Formel beschreibt den Zusammenhang zwischen pH und pOH bei 25 °C?",
    ["pH = pOH", "pH + pOH = 14", "pH − pOH = 7", "pH · pOH = 14", "pH = 14 − pOH"],
    1,
    "K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ → −log[H₃O⁺] − log[OH⁻] = 14 → pH + pOH = 14.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-174",
    "chem-kap6",
    "Welche funktionelle Gruppe kennzeichnet ein Amin?",
    ["−OH", "−COOH", "−O−", "−NH₂", "−CHO"],
    3,
    "Amin: −NH₂ (Aminogruppe). −OH = Alkohol, −COOH = Carbonsäure, −O− = Ether, −CHO = Aldehyd.",
    "leicht",
    ["Amin", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-175",
    "chem-kap1",
    "Die Elektronenaffinität ist die Energieänderung bei:",
    [
      "Entfernung eines Elektrons",
      "Hinzufügen eines Elektrons zum neutralen Atom",
      "Ionisierung",
      "Bindungsbildung",
      "Anregung",
    ],
    1,
    "Elektronenaffinität = Energieänderung bei Aufnahme eines Elektrons durch das gasförmige Atom. Bei Halogenen stark negativ (exotherm).",
    "mittel",
    ["Elektronenaffinität"]
  ),
  q(
    "ch-pool-176",
    "chem-kap2",
    "Welcher Aggregatzustand hat Wasser bei 120 °C und 1 bar?",
    ["fest", "flüssig", "gasförmig", "überkritisch", "abhängig von der Menge"],
    2,
    "Bei 1 bar: Wasser siedet bei 100 °C. Bei 120 °C und 1 bar ist Wasser gasförmig (Dampf).",
    "leicht",
    ["Aggregatzustand", "Wasser"]
  ),
  q(
    "ch-pool-177",
    "chem-kap3",
    "London-Kräfte wirken zwischen:",
    ["nur polaren Molekülen", "allen Molekülen", "nur Ionen", "nur Metallen", "nur in Festkörpern"],
    1,
    "London-Dispersionskräfte (temporäre Dipole) wirken zwischen allen Molekülen; bei großen/apolaren Molekülen oft dominierend.",
    "leicht",
    ["London-Kräfte"]
  ),
  q(
    "ch-pool-178",
    "chem-kap4",
    "Bei einer Redoxreaktion ändert sich die Oxidationszahl von:",
    [
      "mindestens einem Atom",
      "keinem Atom",
      "allen Atomen gleich",
      "nur den Kationen",
      "nur den Anionen",
    ],
    0,
    "Redox: Mindestens ein Atom wird oxidiert (OZ steigt) und mindestens eines reduziert (OZ sinkt). Elektronenübertragung.",
    "leicht",
    ["Redox", "Oxidationszahl"]
  ),
  q(
    "ch-pool-179",
    "chem-kap5",
    "Welche Säure ist in Wasser eine schwache Säure?",
    ["HCl", "HNO₃", "Essigsäure (CH₃COOH)", "H₂SO₄", "HBr"],
    2,
    "Essigsäure ist eine schwache Säure (nur teilweise dissoziiert). HCl, HNO₃, H₂SO₄ (1. Stufe), HBr sind stark.",
    "mittel",
    ["schwache Säure", "Essigsäure"]
  ),
  q(
    "ch-pool-180",
    "chem-kap6",
    "Welche Bindungswinkel haben sp-hybridisierte C-Atome?",
    ["90°", "109,5°", "120°", "180°", "60°"],
    3,
    "sp-Hybridisierung → lineare Geometrie, 180°. sp² → 120°, sp³ → 109,5°.",
    "leicht",
    ["sp-Hybridisierung", "Bindungswinkel"]
  ),
  q(
    "ch-pool-181",
    "chem-kap1",
    "Welches Orbital ist kugelsymmetrisch?",
    ["p", "d", "f", "s", "alle"],
    3,
    "s-Orbital ist kugelsymmetrisch. p, d, f haben richtungsabhängige Formen.",
    "leicht",
    ["s-Orbital", "Orbital"]
  ),
  q(
    "ch-pool-182",
    "chem-kap2",
    "Die kritische Temperatur ist die Temperatur, oberhalb der:",
    [
      "ein Gas nicht mehr verflüssigt werden kann",
      "ein Feststoff schmilzt",
      "Wasser kocht",
      "eine Reaktion startet",
      "ein Katalysator wirkt",
    ],
    0,
    "Oberhalb der kritischen Temperatur T_c existiert keine flüssige Phase mehr; das Gas kann durch Druck allein nicht verflüssigt werden.",
    "mittel",
    ["kritische Temperatur"]
  ),
  q(
    "ch-pool-183",
    "chem-kap3",
    "Welche Aussage zu MgO ist richtig?",
    [
      "MgO ist ein Molekül.",
      "MgO hat einen niedrigeren Schmelzpunkt als NaCl.",
      "MgO entsteht durch Ionenbindung zwischen Mg²⁺ und O²⁻.",
      "MgO leitet in festem Zustand gut.",
      "MgO ist gut wasserlöslich.",
    ],
    2,
    "MgO: Ionenverbindung (Mg²⁺, O²⁻), sehr hoher Schmelzpunkt (2852 °C), höher als NaCl wegen größerer Ladungen und kleinerer Radien.",
    "mittel",
    ["MgO", "Ionenbindung"]
  ),
  q(
    "ch-pool-184",
    "chem-kap4",
    "Die Reaktionsgeschwindigkeit kann erhöht werden durch:",
    [
      "Erniedrigung der Temperatur",
      "Verdünnung",
      "Erhöhung der Temperatur",
      "Entfernung des Katalysators",
      "Vergrößerung des Reaktionsgefäßes",
    ],
    2,
    "Temperaturerhöhung erhöht die Geschwindigkeit (mehr Teilchen mit ausreichender Energie). Katalysator beschleunigt ebenfalls.",
    "leicht",
    ["Reaktionsgeschwindigkeit", "Temperatur"]
  ),
  q(
    "ch-pool-185",
    "chem-kap5",
    "Ein Puffer besteht typischerweise aus:",
    [
      "nur Wasser",
      "starker Säure und starker Base",
      "schwacher Säure und ihrer konjugierten Base",
      "nur Salzen",
      "nur Basen",
    ],
    2,
    "Puffer = schwache Säure + konjugierte Base (oder umgekehrt), z. B. H₂CO₃/HCO₃⁻, H₂PO₄⁻/HPO₄²⁻.",
    "mittel",
    ["Puffer", "schwache Säure"]
  ),
  q(
    "ch-pool-186",
    "chem-kap6",
    "Welche Verbindung enthält eine Carbonylgruppe C=O?",
    ["Alkan", "Alken", "Alkohol", "Aldehyd", "Ether"],
    3,
    "Carbonylgruppe C=O: Aldehyde (−CHO), Ketone (−CO−), Carbonsäuren (−COOH), Ester, Amide. Aldehyd hat die Carbonylgruppe am Ende.",
    "leicht",
    ["Carbonylgruppe", "Aldehyd"]
  ),
  q(
    "ch-pool-187",
    "chem-kap1",
    "Die Anzahl der Orbitale in der 2. Schale (n=2) beträgt:",
    ["1", "2", "4", "8", "9"],
    2,
    "n=2: 1×s (1 Orbital) + 3×p (3 Orbitale) = 4 Orbitale. Maximal 8 Elektronen.",
    "mittel",
    ["Orbital", "Schale"]
  ),
  q(
    "ch-pool-188",
    "chem-kap2",
    "Welche Größe bleibt bei einer isothermen Expansion eines idealen Gases konstant?",
    ["Druck", "Volumen", "Temperatur", "Stoffmenge", "Dichte"],
    2,
    "Isotherm = konstante Temperatur T. Bei Expansion ändern sich p, V und Dichte; n bleibt konstant.",
    "leicht",
    ["isotherm", "ideales Gas"]
  ),
  q(
    "ch-pool-189",
    "chem-kap3",
    "Welche Wechselwirkung ist die schwächste unter den genannten?",
    ["Ionenbindung", "Wasserstoffbrücke", "Kovalente Bindung", "London-Kräfte", "Metallbindung"],
    3,
    "London-Kräfte sind die schwächsten (einige kJ/mol). Kovalente und Ionenbindungen sind sehr stark; H-Brücken dazwischen.",
    "mittel",
    ["Wechselwirkungen", "London-Kräfte"]
  ),
  q(
    "ch-pool-190",
    "chem-kap4",
    "Die Einheit der Reaktionsgeschwindigkeit v (bei Konzentration in mol/L) ist:",
    ["mol", "mol/L", "mol/(L·s)", "s", "L/mol"],
    2,
    "Reaktionsgeschwindigkeit v = −d[A]/dt oder d[P]/dt → Einheit Konzentration/Zeit = mol/(L·s).",
    "mittel",
    ["Reaktionsgeschwindigkeit", "Einheit"]
  ),
  q(
    "ch-pool-191",
    "chem-kap5",
    "Welcher pH-Wert liegt bei [H₃O⁺] = 10⁻⁸ mol/L vor?",
    ["8", "6", "−8", "7", "14"],
    0,
    "pH = −log(10⁻⁸) = 8. Leicht basisch. Bei 25 °C: unter 10⁻⁷ = sauer, über 10⁻⁷ = basisch.",
    "leicht",
    ["pH", "Berechnung"]
  ),
  q(
    "ch-pool-192",
    "chem-kap6",
    "Ein Keton hat die funktionelle Gruppe:",
    ["−OH", "−COOH", "−CO− (in der Kette)", "−CHO", "−NH₂"],
    2,
    "Keton: Carbonylgruppe C=O in der Kohlenstoffkette (nicht am Ende). Aldehyd: −CHO am Ende.",
    "leicht",
    ["Keton", "Carbonylgruppe"]
  ),
  q(
    "ch-pool-193",
    "chem-kap1",
    "Welches Element hat die Elektronenkonfiguration [Ne] 3s¹?",
    ["Lithium", "Natrium", "Kalium", "Magnesium", "Aluminium"],
    1,
    "[Ne] = 1s²2s²2p⁶. [Ne] 3s¹ = 11 Elektronen = Natrium (Z=11).",
    "mittel",
    ["Elektronenkonfiguration", "Natrium"]
  ),
  q(
    "ch-pool-194",
    "chem-kap2",
    "Die Verdampfungsenthalpie von Wasser ist besonders hoch wegen:",
    [
      "der geringen Molmasse",
      "der Wasserstoffbrücken",
      "der Ionen",
      "der kovalenten O−H-Bindung",
      "der Dichteanomalie",
    ],
    1,
    "Wasserstoffbrücken zwischen H₂O-Molekülen erfordern viel Energie zum Verdampfen. Ohne H-Brücken wäre der Siedepunkt viel niedriger.",
    "mittel",
    ["Verdampfungsenthalpie", "Wasser"]
  ),
  q(
    "ch-pool-195",
    "chem-kap3",
    "Welche Aussage zu polaren Molekülen ist richtig?",
    [
      "Sie haben keine Partialladungen.",
      "Sie haben ein permanentes Dipolmoment.",
      "Sie sind immer wasserunlösllich.",
      "Sie können keine H-Brücken bilden.",
      "Sie haben nur Einfachbindungen.",
    ],
    1,
    "Polare Moleküle haben aufgrund unterschiedlicher EN eine unsymmetrische Ladungsverteilung → permanentes Dipolmoment (z. B. H₂O, NH₃).",
    "leicht",
    ["polare Moleküle", "Dipolmoment"]
  ),
  q(
    "ch-pool-196",
    "chem-kap4",
    "Die Reaktion A + B → C hat die Geschwindigkeitsgleichung v = k·[A]². Die Reaktion ist bezüglich A:",
    ["nullter Ordnung", "erster Ordnung", "zweiter Ordnung", "dritter Ordnung", "nicht definiert"],
    2,
    "Exponent der Konzentration in der Geschwindigkeitsgleichung = Reaktionsordnung. v = k·[A]² → 2. Ordnung bezüglich A.",
    "mittel",
    ["Reaktionsordnung", "Geschwindigkeit"]
  ),
  q(
    "ch-pool-197",
    "chem-kap5",
    "Welches Salz entsteht bei der Neutralisation von HCl mit KOH?",
    ["NaCl", "KCl", "KClO", "KClO₂", "HClO"],
    1,
    "HCl + KOH → KCl + H₂O. Kaliumchlorid und Wasser.",
    "leicht",
    ["Neutralisation", "Salz"]
  ),
  q(
    "ch-pool-198",
    "chem-kap6",
    "Welche Aussage zu Estern ist richtig?",
    [
      "Ester entstehen aus Alkohol und Säure unter Wasserabspaltung.",
      "Ester haben die Gruppe −OH.",
      "Ester sind keine Carbonsäurederivate.",
      "Ester sind immer fest.",
      "Ester enthalten kein Sauerstoffatom.",
    ],
    0,
    "Veresterung: Carbonsäure + Alkohol ⇌ Ester + H₂O (katalysiert durch Säure). Ester haben −COO− (Carbonyl + Ether-Sauerstoff).",
    "mittel",
    ["Ester", "Veresterung"]
  ),
  q(
    "ch-pool-199",
    "chem-kap1",
    "Die Lanthaniden (Seltene Erden) füllen welches Orbital auf?",
    ["4s", "4p", "4d", "4f", "5d"],
    3,
    "Lanthaniden: 4f-Orbitale werden aufgefüllt (nach 6s²). Actinoide: 5f.",
    "mittel",
    ["Lanthaniden", "4f"]
  ),
  q(
    "ch-pool-200",
    "chem-kap2",
    "Welche Aussage zum Tripelpunkt ist richtig?",
    [
      "Am Tripelpunkt koexistieren alle drei Phasen.",
      "Am Tripelpunkt ist nur eine Phase stabil.",
      "Der Tripelpunkt liegt immer bei 0 °C.",
      "Am Tripelpunkt verdampft die Flüssigkeit vollständig.",
      "Der Tripelpunkt ist nur für Gase definiert.",
    ],
    0,
    "Tripelpunkt: Druck und Temperatur, bei denen fest, flüssig und gasförmig im Gleichgewicht koexistieren. Für Wasser: 0,01 °C, 611 Pa.",
    "mittel",
    ["Tripelpunkt", "Phasendiagramm"]
  ),
];
