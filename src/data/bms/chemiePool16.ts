/**
 * Chemie BMS Pool 16 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
 * Stoff: chem-kap1–chem-kap6 (Atombau, Materie, Bindung, Reaktionen, Anorganik, Organik).
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

const KAP = ["chem-kap1", "chem-kap2", "chem-kap3", "chem-kap4", "chem-kap5", "chem-kap6"] as const;

export const chemiePool16: Question[] = [
  q(
    "ch-pool-16-001",
    KAP[0],
    "Wie viele Neutronen hat ²³Na?",
    ["11", "12", "23", "34", "10"],
    1,
    "²³Na: A=23, Z=11. N = A − Z = 12 Neutronen.",
    "leicht",
    ["Neutronen", "Natrium"]
  ),
  q(
    "ch-pool-16-002",
    KAP[1],
    "Die Einheit der Gaskonstante R ist:",
    ["J · mol", "J/(mol · K)", "mol/(J · K)", "Pa · L", "K/J"],
    1,
    "Aus pV = nRT folgt R = pV/(nT) → J/(mol·K).",
    "mittel",
    ["Gaskonstante"]
  ),
  q(
    "ch-pool-16-003",
    KAP[2],
    "Welche Verbindung hat eine hohe Schmelztemperatur und leitet in Schmelze den Strom?",
    ["Schwefel", "Iod", "Natriumchlorid", "Ethanol", "Benzol"],
    2,
    "NaCl: Ionenkristall, hoher Schmelzpunkt; in Schmelze bewegliche Ionen → Leitfähigkeit.",
    "mittel",
    ["Ionenkristall", "Leitfähigkeit"]
  ),
  q(
    "ch-pool-16-004",
    KAP[3],
    "Bei der Verbrennung von Kohlenstoff (C) mit Sauerstoff entsteht:",
    ["CO", "CO₂", "C₂O", "O₂", "H₂CO₃"],
    1,
    "Vollständige Verbrennung: C + O₂ → CO₂. Unvollständig: 2 C + O₂ → 2 CO.",
    "leicht",
    ["Verbrennung", "Kohlenstoff"]
  ),
  q(
    "ch-pool-16-005",
    KAP[4],
    "Eine Lösung mit pH = 1 ist:",
    ["schwach sauer", "stark sauer", "neutral", "schwach basisch", "stark basisch"],
    1,
    "pH = 1 bedeutet [H₃O⁺] = 0,1 mol/L → stark sauer.",
    "leicht",
    ["pH", "Säure"]
  ),
  q(
    "ch-pool-16-006",
    KAP[5],
    "Hexan (C₆H₁₄) ist ein:",
    ["Alken", "Alkin", "Alkan", "Alkohol", "Aromat"],
    2,
    "C₆H₁₄ = CₙH₂ₙ₊₂ → Alkan (gesättigter Kohlenwasserstoff).",
    "leicht",
    ["Alkane", "Hexan"]
  ),
  q(
    "ch-pool-16-007",
    KAP[0],
    "Welches Orbital wird zuerst besetzt (nach dem Aufbauprinzip)?",
    ["2p", "2s", "1s", "3s", "3p"],
    2,
    "1s wird zuerst besetzt (niedrigste Energie), dann 2s, 2p, 3s, 3p, 4s, 3d, …",
    "leicht",
    ["Aufbauprinzip", "Orbital"]
  ),
  q(
    "ch-pool-16-008",
    KAP[1],
    "Der Schmelzpunkt einer reinen Substanz bei gegebenem Druck ist:",
    [
      "eine Temperaturspanne",
      "eine bestimmte Temperatur",
      "abhängig von der Menge",
      "immer 0 °C",
      "gleich dem Siedepunkt",
    ],
    1,
    "Reine Stoffe haben bei gegebenem Druck einen scharfen Schmelzpunkt (Phasengleichgewicht fest/flüssig).",
    "leicht",
    ["Schmelzpunkt"]
  ),
  q(
    "ch-pool-16-009",
    KAP[2],
    "Welche Bindung ist in Kaliumchlorid (KCl) vorhanden?",
    ["kovalent", "metallisch", "Ionenbindung", "Wasserstoffbrücken", "van-der-Waals"],
    2,
    "KCl: Metall (K) + Nichtmetall (Cl), große EN-Differenz → Ionenbindung.",
    "leicht",
    ["Ionenbindung", "KCl"]
  ),
  q(
    "ch-pool-16-010",
    KAP[3],
    "Die Reaktionsgeschwindigkeit v wird oft ausgedrückt als:",
    [
      "nur Temperaturänderung",
      "Konzentrationsänderung pro Zeit",
      "nur Druckänderung",
      "nur Stoffmenge",
      "Volumenänderung",
    ],
    1,
    "v = −d[A]/dt bzw. v = d[P]/dt (Konzentrationsänderung pro Zeiteinheit).",
    "mittel",
    ["Reaktionsgeschwindigkeit"]
  ),
  q(
    "ch-pool-16-011",
    KAP[4],
    "Welches Kation entsteht bei der Dissoziation von Natronlauge?",
    ["H₃O⁺", "OH⁻", "Na⁺", "Cl⁻", "CO₃²⁻"],
    2,
    "NaOH → Na⁺ + OH⁻. Na⁺ ist das Kation, OH⁻ das Hydroxidion.",
    "leicht",
    ["Natronlauge", "Dissoziation"]
  ),
  q(
    "ch-pool-16-012",
    KAP[5],
    "Welche Verbindung enthält eine Carbonylgruppe (C=O)?",
    ["Ethan", "Ethanol", "Ethanal", "Ether", "Ethanamin"],
    2,
    "Ethanal (Acetaldehyd) CH₃CHO hat die Carbonylgruppe −CHO. Auch Ketone haben C=O.",
    "mittel",
    ["Carbonyl", "Aldehyd"]
  ),
  q(
    "ch-pool-16-013",
    KAP[0],
    "Die Anzahl der Protonen im Kern bestimmt:",
    [
      "die Neutronenzahl",
      "die Massenzahl",
      "die Art des Elements (Ordnungszahl)",
      "nur die Isotopie",
      "die Schalenanzahl",
    ],
    2,
    "Ordnungszahl Z = Protonenzahl definiert das Element.",
    "leicht",
    ["Ordnungszahl"]
  ),
  q(
    "ch-pool-16-014",
    KAP[1],
    "Ein Gemisch aus Eis und flüssigem Wasser bei 0 °C und 1 bar hat:",
    [
      "eine feste Temperatur (0 °C)",
      "eine variable Temperatur",
      "kein Gleichgewicht",
      "nur gasförmige Phase",
      "nur feste Phase",
    ],
    0,
    "Am Schmelzpunkt koexistieren fest und flüssig; die Temperatur bleibt konstant (0 °C bei 1 bar), bis alles geschmolzen ist.",
    "mittel",
    ["Phasengleichgewicht", "Schmelzen"]
  ),
  q(
    "ch-pool-16-015",
    KAP[2],
    "Welche Molekülform führt bei gleichen Bindungspartnern zu keinem Gesamtdipol?",
    [
      "gewinkelt (z. B. H₂O)",
      "linear (z. B. CO₂)",
      "trigonal pyramidal (NH₃)",
      "tetraedrisch mit einem Substituenten (CH₃Cl)",
      "trigonal planar (BF₃)",
    ],
    1,
    "CO₂ ist linear, die beiden C=O-Dipole heben sich auf. H₂O ist gewinkelt → Dipol.",
    "mittel",
    ["Dipol", "Geometrie"]
  ),
  q(
    "ch-pool-16-016",
    KAP[3],
    "Ein Reduktionsmittel wird bei der Reaktion:",
    ["reduziert", "oxidiert", "nicht verändert", "neutralisiert", "zersetzt"],
    1,
    "Reduktionsmittel gibt Elektronen ab → wird oxidiert. Oxidationsmittel wird reduziert.",
    "mittel",
    ["Reduktionsmittel", "Redox"]
  ),
  q(
    "ch-pool-16-017",
    KAP[4],
    "Der pH einer Pufferlösung aus Essigsäure und Acetat liegt in der Nähe von:",
    ["pK_S der Essigsäure", "7 immer", "14", "0", "pK_B des Acetats"],
    0,
    "Puffer: pH ≈ pK_S der schwachen Säure (Henderson-Hasselbalch). Bei [Säure] ≈ [Base] ist pH = pK_S.",
    "mittel",
    ["Puffer", "pKS"]
  ),
  q(
    "ch-pool-16-018",
    KAP[5],
    "Welche Reaktion führt von einem Alken zu einem Alkan?",
    [
      "Dehydratisierung",
      "Addition von H₂ (Hydrierung)",
      "Oxidation",
      "Veresterung",
      "Substitution",
    ],
    1,
    "Addition von H₂ an C=C (katalytische Hydrierung) ergibt Alkan. Alken + H₂ → Alkan.",
    "mittel",
    ["Hydrierung", "Alken"]
  ),
  q(
    "ch-pool-16-019",
    KAP[0],
    "Welches Element hat die Elektronenkonfiguration 1s² 2s² 2p⁶ 3s² 3p³?",
    ["Silicium", "Phosphor", "Schwefel", "Chlor", "Argon"],
    1,
    "15 Elektronen → Phosphor (Z=15). Si=14, S=16, Cl=17, Ar=18.",
    "mittel",
    ["Elektronenkonfiguration", "Phosphor"]
  ),
  q(
    "ch-pool-16-020",
    KAP[1],
    "Die molare Masse von H₂O beträgt etwa:",
    ["18 g/mol", "16 g/mol", "20 g/mol", "2 g/mol", "10 g/mol"],
    0,
    "M(H₂O) = 2·1 + 16 = 18 g/mol.",
    "leicht",
    ["molare Masse", "Wasser"]
  ),
  q(
    "ch-pool-16-021",
    KAP[2],
    "In Graphit sind die Kohlenstoffatome:",
    [
      "nur einzeln gebunden",
      "in Schichten mit delokalisierten π-Elektronen",
      "nur ionisch gebunden",
      "wie im Diamant tetraedrisch",
      "nur durch van-der-Waals gebunden",
    ],
    1,
    "Graphit: Schichten aus Sechsecken, sp²-Hybridisierung; π-Elektronen delokalisiert → Leitfähigkeit innerhalb der Schicht.",
    "mittel",
    ["Graphit", "Kohlenstoff"]
  ),
  q(
    "ch-pool-16-022",
    KAP[3],
    "Bei einer Rückreaktion im Gleichgewicht:",
    [
      "reagieren Produkte zu Edukten",
      "reagieren nur Edukte",
      "läuft nichts ab",
      "verschwindet der Katalysator",
      "ändert sich die Temperatur nicht (bei isothermer Bedingung)",
    ],
    0,
    "Rückreaktion: Produkte → Edukte. Im Gleichgewicht laufen Hin- und Rückreaktion mit gleicher Geschwindigkeit.",
    "mittel",
    ["Gleichgewicht", "Rückreaktion"]
  ),
  q(
    "ch-pool-16-023",
    KAP[4],
    "Welche Oxidationszahl hat Schwefel in H₂SO₄?",
    ["−2", "0", "+4", "+6", "+2"],
    3,
    "H₂SO₄: H +1, O −2. 2·1 + S + 4·(−2) = 0 → S = +6.",
    "mittel",
    ["Oxidationszahl", "Schwefelsäure"]
  ),
  q(
    "ch-pool-16-024",
    KAP[5],
    "Ein Ester riecht oft:",
    [
      "nach nichts",
      "süßlich oder fruchtig",
      "stechend nach Säure",
      "nach Ammoniak",
      "nach Schwefel",
    ],
    1,
    "Ester haben oft charakteristische, fruchtige oder süßliche Gerüche (z. B. Fruchtaromen).",
    "leicht",
    ["Ester", "Geruch"]
  ),
  q(
    "ch-pool-16-025",
    KAP[0],
    "Die 3. Periode des PSE enthält wie viele Elemente?",
    ["2", "8", "18", "32", "6"],
    1,
    "Die 3. Periode hat 8 Elemente (Na bis Ar). Ab 4. Periode mit Nebengruppen mehr.",
    "leicht",
    ["Periode", "Periodensystem"]
  ),
  q(
    "ch-pool-16-026",
    KAP[1],
    "Ein ideales Gas hat bei 0 °C und 1 bar ein molares Volumen von etwa:",
    ["22,4 L/mol", "8,31 L/mol", "0,082 L/mol", "1 L/mol", "6,02 L/mol"],
    0,
    "Unter Standardbedingungen: V_m ≈ 22,4 L/mol.",
    "leicht",
    ["molares Volumen", "STP"]
  ),
  q(
    "ch-pool-16-027",
    KAP[2],
    "Welche Aussage zu sp²-Hybridisierung trifft zu?",
    [
      "Es entstehen 4 äquivalente Orbitale",
      "Es entstehen 3 sp²-Orbitale und ein p-Orbital (z. B. bei Ethen)",
      "Sie kommt nur bei Ionen vor",
      "Es gibt nur Einfachbindungen",
      "Kohlenstoff hat dann 5 Bindungen",
    ],
    1,
    "sp²: Ein s- und zwei p-Orbitale → 3 sp²-Orbitale (trigonal planar); ein p-Orbital für π-Bindung (z. B. Ethen).",
    "mittel",
    ["Hybridisierung", "sp2"]
  ),
  q(
    "ch-pool-16-028",
    KAP[3],
    "Die Gleichgewichtskonstante K für A + B ⇌ C + D ist definiert als (bei Aktivitäten 1):",
    ["[A][B] / ([C][D])", "[C][D] / ([A][B])", "[A] + [B]", "[C] − [D]", "([A][B]) / ([C][D])"],
    1,
    "K = [C][D]/([A][B]) (Produkte/Edukte). Bei Stöchiometrie müssen Exponenten berücksichtigt werden.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-16-029",
    KAP[4],
    "Welche Base ist in Wasser nur teilweise dissoziiert?",
    ["NaOH", "KOH", "Ammoniak (NH₃)", "Ca(OH)₂ (1. Stufe)", "Ba(OH)₂"],
    2,
    "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; Gleichgewicht auf Seite des Ammoniaks → schwache Base. NaOH, KOH sind stark.",
    "mittel",
    ["schwache Base", "Ammoniak"]
  ),
  q(
    "ch-pool-16-030",
    KAP[5],
    "Die Grignard-Reaktion verwendet:",
    ["nur Alkane", "Organomagnesiumverbindungen (R-Mg-X)", "nur Ester", "nur Säuren", "nur Alkene"],
    1,
    "Grignard-Reagenz: R-Mg-X (X = Halogen). Reagiert mit Carbonylverbindungen zu Alkoholen.",
    "schwer",
    ["Grignard", "Organische Chemie"]
  ),
  q(
    "ch-pool-16-031",
    KAP[0],
    "Ein Atom mit 26 Protonen ist:",
    ["Mangan", "Eisen", "Kobalt", "Nickel", "Chrom"],
    1,
    "Ordnungszahl 26 = Eisen (Fe).",
    "leicht",
    ["Eisen", "Ordnungszahl"]
  ),
  q(
    "ch-pool-16-032",
    KAP[1],
    "Die Siedepunkte der Alkane (C₁ bis C₄) steigen mit der Kettenlänge, weil:",
    [
      "die Masse abnimmt",
      "die van-der-Waals-Kräfte zunehmen",
      "die Dichte abnimmt",
      "die Löslichkeit steigt",
      "die Polarität zunimmt",
    ],
    1,
    "Längere Ketten → mehr Elektronen, größere Kontaktfläche → stärkere London-Kräfte → höherer Siedepunkt.",
    "mittel",
    ["Alkane", "Siedepunkt"]
  ),
  q(
    "ch-pool-16-033",
    KAP[2],
    "Welche Verbindung kann Wasserstoffbrücken als Donor und Akzeptor ausbilden?",
    ["Methan", "Ethanol", "Ethan", "Benzol", "Tetrachlormethan"],
    1,
    "Ethanol: O−H (Donor) und freies Elektronenpaar am O (Akzeptor).",
    "mittel",
    ["Wasserstoffbrücken", "Ethanol"]
  ),
  q(
    "ch-pool-16-034",
    KAP[3],
    "Die Aktivierungsenergie erscheint in:",
    [
      "der Gleichgewichtskonstante",
      "der Arrhenius-Gleichung (Geschwindigkeitskonstante k)",
      "der Nernst-Gleichung",
      "dem Massenwirkungsgesetz",
      "der Henderson-Hasselbalch-Gleichung",
    ],
    1,
    "Arrhenius: k = A·exp(−E_A/(RT)). E_A = Aktivierungsenergie.",
    "mittel",
    ["Arrhenius", "Aktivierungsenergie"]
  ),
  q(
    "ch-pool-16-035",
    KAP[4],
    "Welches Salz entsteht bei der Neutralisation von HCl mit NaOH?",
    ["NaClO", "NaCl", "NaClO₃", "Cl₂", "HClO"],
    1,
    "HCl + NaOH → NaCl + H₂O. Natriumchlorid (Kochsalz).",
    "leicht",
    ["Neutralisation", "NaCl"]
  ),
  q(
    "ch-pool-16-036",
    KAP[5],
    "Ein sekundärer Alkohol kann oxidieren zu:",
    ["Alkan", "Alken", "Keton", "Aldehyd", "Carbonsäure"],
    2,
    "Sekundärer Alkohol → Oxidation → Keton (nicht weiter oxidierbar wie Aldehyd/Carbonsäure).",
    "mittel",
    ["Alkohol", "Oxidation", "Keton"]
  ),
  q(
    "ch-pool-16-037",
    KAP[0],
    "Die Lanthanoidenkontraktion bewirkt unter anderem:",
    [
      "dass Nebengruppenelemente ähnliche Radien haben können",
      "dass alle Lanthanoide gleich sind",
      "nur eine Änderung der Hauptgruppe",
      "dass die Atomradien stark zunehmen",
      "nur bei Gasen Effekte",
    ],
    0,
    "Durch das Einfügen der 4f-Elektronen nimmt der Radius nur langsam ab → ähnliche Radien bei nachfolgenden Nebengruppenelementen.",
    "schwer",
    ["Lanthanoidenkontraktion"]
  ),
  q(
    "ch-pool-16-038",
    KAP[1],
    "Die kritische Temperatur von Wasser liegt bei etwa:",
    ["0 °C", "100 °C", "374 °C", "273 °C", "500 °C"],
    2,
    "Kritische Temperatur von Wasser ca. 374 °C (647 K). Oberhalb davon kein flüssiges Wasser mehr.",
    "mittel",
    ["kritische Temperatur", "Wasser"]
  ),
  q(
    "ch-pool-16-039",
    KAP[2],
    "Welche Aussage zu Koordinationsbindungen trifft zu?",
    [
      "Es werden nur Elektronen von einem Partner geteilt",
      "Ein Lewis-Säure (Akzeptor) nimmt ein Elektronenpaar einer Lewis-Base (Donor) auf",
      "Es entstehen nur Ionen",
      "Sie sind stärker als kovalente Bindungen",
      "Es gibt sie nur in organischen Molekülen",
    ],
    1,
    "Koordinationsbindung: Beide Bindungselektronen stammen vom Donor (Lewis-Base); Akzeptor (Lewis-Säure) nimmt das Paar auf.",
    "mittel",
    ["Koordinationsbindung", "Lewis"]
  ),
  q(
    "ch-pool-16-040",
    KAP[3],
    "Bei einer Folgereaktion A → B → C:",
    [
      "reagiert nur A zu B",
      "B ist Zwischenprodukt und kann weiter zu C reagieren",
      "gibt es kein B",
      "ist C immer ein Katalysator",
      "reagiert nur B zu C",
    ],
    1,
    "B ist intermediär; A → B → C. Die Konzentration von B durchläuft oft ein Maximum.",
    "mittel",
    ["Folgereaktion", "Zwischenprodukt"]
  ),
  q(
    "ch-pool-16-041",
    KAP[4],
    "Welche Oxidationszahl hat Chlor in HClO₄?",
    ["−1", "0", "+5", "+7", "+1"],
    3,
    "HClO₄: H +1, O −2. 1 + Cl + 4·(−2) = 0 → Cl = +7.",
    "mittel",
    ["Oxidationszahl", "Perchlorat"]
  ),
  q(
    "ch-pool-16-042",
    KAP[5],
    "Eine Nitrogruppe (−NO₂) findet sich in:",
    ["Alkanen", "Nitroverbindungen (z. B. Nitromethan)", "Alkoholen", "Ethern", "Ketonen"],
    1,
    "Nitroverbindungen: R−NO₂. Wichtig z. B. für Explosivstoffe, Farbstoffe.",
    "mittel",
    ["Nitroverbindung"]
  ),
  q(
    "ch-pool-16-043",
    KAP[0],
    "Welches Isotop wird in der Radiokohlenstoffdatierung verwendet?",
    ["¹²C", "¹³C", "¹⁴C", "¹⁴N", "¹⁶O"],
    2,
    "¹⁴C (radioaktiv, β⁻-Zerfall) wird für die Altersbestimmung organischer Proben genutzt (Halbwertszeit ca. 5730 a).",
    "mittel",
    ["Radiokohlenstoffdatierung", "Kohlenstoff-14"]
  ),
  q(
    "ch-pool-16-044",
    KAP[1],
    "Die Oberflächenspannung von Wasser ist relativ hoch wegen:",
    [
      "nur der Dichte",
      "der Wasserstoffbrücken zwischen den Molekülen",
      "der Ionen",
      "der Temperaturunabhängigkeit",
      "der fehlenden zwischenmolekularen Kräfte",
    ],
    1,
    "Wasserstoffbrücken ziehen die Oberflächenmoleküle nach innen → hohe Oberflächenspannung.",
    "mittel",
    ["Oberflächenspannung", "Wasser"]
  ),
  q(
    "ch-pool-16-045",
    KAP[2],
    "Welche Aussage zu Mehrfachbindungen trifft zu?",
    [
      "Eine Doppelbindung besteht aus zwei σ-Bindungen",
      "Eine C=C-Doppelbindung besteht aus einer σ- und einer π-Bindung",
      "Es gibt nur π-Bindungen",
      "Dreifachbindungen haben nur σ-Charakter",
      "π-Bindungen sind frei drehbar",
    ],
    1,
    "C=C: eine σ-Bindung (Achse) + eine π-Bindung (seitlich). C≡C: eine σ + zwei π.",
    "mittel",
    ["Doppelbindung", "Pi-Bindung"]
  ),
  q(
    "ch-pool-16-046",
    KAP[3],
    "Die Reaktionsordnung gibt an:",
    [
      "nur die Stöchiometrie",
      "wie die Geschwindigkeit von den Konzentrationen abhängt (Exponenten im Geschwindigkeitsgesetz)",
      "die Anzahl der Produkte",
      "die Temperatur",
      "die Gleichgewichtslage",
    ],
    1,
    "v = k·[A]^a·[B]^b; die Ordnung bezüglich A ist a, die Gesamtordnung a+b+…",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-16-047",
    KAP[4],
    "Welche Aussage zu Carbonat (CO₃²⁻) trifft zu?",
    [
      "Es ist nur eine Base",
      "Es reagiert mit Säure unter CO₂-Entwicklung",
      "Es ist nur eine Säure",
      "Es leitet nicht",
      "Es hat keinen Einfluss auf den pH",
    ],
    1,
    "Carbonat + Säure → CO₂ + H₂O + Salz. Kohlendioxid entweicht (Nachweis: Trübung in Kalkwasser).",
    "leicht",
    ["Carbonat", "Säure"]
  ),
  q(
    "ch-pool-16-048",
    KAP[5],
    "Ein Phenol enthält:",
    [
      "eine OH-Gruppe an einem aliphatischen C",
      "eine OH-Gruppe direkt an einem aromatischen Ring",
      "keine OH-Gruppe",
      "nur eine COOH-Gruppe",
      "eine SH-Gruppe",
    ],
    1,
    "Phenol: Hydroxylgruppe −OH an Benzolring (C₆H₅OH). Unterschied zu Alkanolen: OH am Aromat.",
    "mittel",
    ["Phenol", "Aromat"]
  ),
  q(
    "ch-pool-16-049",
    KAP[0],
    "Die Hundsche Regel besagt:",
    [
      "dass Orbitale zuerst doppelt besetzt werden",
      "dass Orbitale gleicher Energie zuerst einzeln mit parallelem Spin besetzt werden",
      "dass es keine ungepaarten Elektronen gibt",
      "dass die Schalen voll sein müssen",
      "dass nur s-Orbitale existieren",
    ],
    1,
    "Hund: Bei entarteten Orbitalen werden zuerst alle mit je einem Elektron (gleicher Spin) besetzt, dann Paarung.",
    "mittel",
    ["Hundsches Regel"]
  ),
  q(
    "ch-pool-16-050",
    KAP[1],
    "Eine übersättigte Lösung:",
    [
      "enthält weniger gelösten Stoff als die Sättigungskonzentration",
      "enthält vorübergehend mehr gelösten Stoff als im Gleichgewicht löslich ist",
      "ist immer fest",
      "kann nicht existieren",
      "hat immer pH 7",
    ],
    1,
    "Übersättigung: Konzentration über dem Löslichkeitsprodukt; metastabil, Kristallisation kann ausgelöst werden.",
    "mittel",
    ["Übersättigung"]
  ),
  q(
    "ch-pool-16-051",
    KAP[2],
    "Welche Verbindung ist ein typisches Kovalenzmolekül mit niedrigem Schmelzpunkt?",
    ["NaCl", "Diamant", "Iod (I₂)", "MgO", "CaF₂"],
    2,
    "I₂: diskrete Moleküle, nur van-der-Waals zwischen Molekülen → niedriger Schmelzpunkt. NaCl, MgO: Ionenkristalle mit hohem Schmelzpunkt.",
    "mittel",
    ["Iod", "Molekül"]
  ),
  q(
    "ch-pool-16-052",
    KAP[3],
    "Ein Autokatalysator:",
    [
      "wird nie gebildet",
      "ist ein Produkt, das die Reaktion katalysiert",
      "ist immer ein Enzym",
      "wird nur von außen zugegeben",
      "ändert die Stöchiometrie",
    ],
    1,
    "Autokatalyse: Ein Reaktionsprodukt katalysiert die eigene Bildung (z. B. Mn²⁺ bei Permanganat-Oxidation).",
    "schwer",
    ["Autokatalyse"]
  ),
  q(
    "ch-pool-16-053",
    KAP[4],
    "Welche Aussage zu Schwefelsäure (H₂SO₄) trifft zu?",
    [
      "Sie ist nur einbasig",
      "Sie ist zweibasig (gibt zwei Protonen ab)",
      "Sie ist nur in der ersten Stufe stark",
      "Sie enthält kein Schwefel",
      "Sie hat keinen Einfluss auf den pH",
    ],
    1,
    "H₂SO₄ ist zweibasig: H₂SO₄ → H⁺ + HSO₄⁻ (stark), HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (schwach).",
    "mittel",
    ["Schwefelsäure", "mehrbasig"]
  ),
  q(
    "ch-pool-16-054",
    KAP[5],
    "Die Aldolreaktion führt zu:",
    [
      "nur Alkanen",
      "β-Hydroxycarbonylverbindungen (Aldole)",
      "nur Estern",
      "nur Ketonen",
      "nur Säuren",
    ],
    1,
    "Aldolreaktion: Zwei Carbonylverbindungen (Aldehyd/Keton) kondensieren zu β-Hydroxyaldehyd/-keton.",
    "schwer",
    ["Aldolreaktion"]
  ),
  q(
    "ch-pool-16-055",
    KAP[0],
    "Welche Elemente sind Übergangsmetalle?",
    [
      "nur Gruppe 1 und 2",
      "Elemente der Nebengruppen (z. B. Fe, Cu, Zn)",
      "nur Lanthanoide",
      "nur Edelgase",
      "nur Halogene",
    ],
    1,
    "Übergangsmetalle: d-Block (Nebengruppen), z. B. Sc bis Zn, Fe, Cu. Charakteristisch: unvollständige d-Schale (meist).",
    "mittel",
    ["Übergangsmetalle"]
  ),
  q(
    "ch-pool-16-056",
    KAP[1],
    "Die Löslichkeit eines Gases in einer Flüssigkeit nimmt bei konstantem Druck in der Regel zu bei:",
    [
      "Temperaturerhöhung",
      "Temperaturerniedrigung",
      "Verdünnung",
      "Erhöhung der Gasmenge",
      "keiner Änderung",
    ],
    1,
    "Gase lösen sich besser bei tieferer Temperatur (exotherme Lösungsvorgänge; Ausnahmen möglich).",
    "mittel",
    ["Löslichkeit", "Gas"]
  ),
  q(
    "ch-pool-16-057",
    KAP[2],
    "In einem Kupferdraht sind die Bindungen:",
    ["kovalent", "ionisch", "metallisch", "nur van-der-Waals", "Wasserstoffbrücken"],
    2,
    "Kupfer ist ein Metall; metallische Bindung durch delokalisiertes Elektronengas → gute Leitfähigkeit.",
    "leicht",
    ["Metall", "Kupfer"]
  ),
  q(
    "ch-pool-16-058",
    KAP[3],
    "Bei einer Gleichgewichtsreaktion in der Gasphase mit Δn = 0 (gleiche Molzahl links und rechts):",
    [
      "verschiebt Druckänderung das Gleichgewicht",
      "verschiebt Druckänderung das Gleichgewicht nicht (K_p druckunabhängig)",
      "reagieren keine Gase",
      "ist K immer 1",
      "gibt es kein Gleichgewicht",
    ],
    1,
    "Wenn Δn = 0, ist die Gleichgewichtskonstante K_p druckunabhängig; Druckänderung verschiebt das Gleichgewicht nicht.",
    "mittel",
    ["Gleichgewicht", "Druck"]
  ),
  q(
    "ch-pool-16-059",
    KAP[4],
    "Welches Halogen ist bei Raumtemperatur flüssig?",
    ["Fluor", "Chlor", "Brom", "Iod", "Astát"],
    2,
    "Brom (Br₂) ist bei 25 °C flüssig (rotbraun). F₂, Cl₂ gasförmig, I₂ fest.",
    "leicht",
    ["Halogene", "Brom"]
  ),
  q(
    "ch-pool-16-060",
    KAP[5],
    "Die Williamson-Ethersynthese verknüpft:",
    [
      "zwei Alkane",
      "ein Alkoholat mit einem Halogenalkan zu einem Ether",
      "zwei Alkene",
      "Aldehyd mit Keton",
      "zwei Carbonsäuren",
    ],
    1,
    "Williamson: R'O⁻ + R−X → R'−O−R + X⁻. Alkoholat + Halogenalkan → Ether.",
    "schwer",
    ["Williamson", "Ether"]
  ),
];
