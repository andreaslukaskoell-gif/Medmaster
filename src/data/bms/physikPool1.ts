/**
 * Physik-Pool Teil 1 — Fragen 1–50 (MedAT Typ K, Single Choice).
 * Mechanik, Einheiten, Arbeit, Optik, E-Lehre, Atomphysik (Stoff aus bmsKapitel/physik).
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
    subject: "physik",
    chapter,
    text,
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const physikPool1: Question[] = [
  q(
    "ph-pool-001",
    "phys-kap1",
    "Ein Arbeiter hebt einen Sack Zement um 1,3 Meter in die Höhe und hält ihn dann für 5 Minuten in gleicher Position. Wann wird mechanische Arbeit geleistet?",
    [
      "Nur beim Heben des Sackes, umso schneller umso mehr.",
      "Nur beim Heben des Sackes, unabhängig von der Dauer des Hebens.",
      "Nur beim Halten des Sackes, unabhängig von der Dauer des Haltens.",
      "Nur beim Halten des Sackes, umso länger umso mehr.",
      "Beim Heben und Halten des Sackes.",
    ],
    1,
    "Mechanische Arbeit W = F · s (Kraft mal Weg in Wegrichtung). Beim Heben gibt es eine Wegstrecke; beim Halten ist die Verschiebung null, daher wird keine Arbeit verrichtet. Die Dauer des Hebens spielt für W nicht direkt eine Rolle (P = W/t wäre Leistung).",
    "mittel",
    ["Arbeit", "Mechanik"]
  ),
  q(
    "ph-pool-002",
    "phys-kap7",
    "Was ist der Massendefekt?",
    [
      "Er ist der Massenunterschied zwischen Protonen und Elektronen.",
      "Die Masse des Atoms ist wegen der Elektronen etwas größer als die Summe der Massen der in ihm enthaltenen Nukleonen.",
      "Protonen und Neutronen haben nicht die ganz gleiche Masse.",
      "Die Masse des Atomkerns ist etwas geringer als die Summe der Massen der in ihm enthaltenen Nukleonen.",
      "Er ist die Massenzunahme der Atome bei relativ hohen Geschwindigkeiten.",
    ],
    3,
    "Der Massendefekt ist die Differenz: (Summe der Ruhemassen der Nukleonen) minus (tatsächliche Kernmasse). Die Bindungsenergie entspricht dieser „fehlenden“ Masse (E = Δm · c²).",
    "mittel",
    ["Massendefekt", "Atomphysik", "Kernphysik"]
  ),
  q(
    "ph-pool-003",
    "phys-kap5",
    "Möchte man eine Sammellinse als Lupe verwenden, um ein vergrößertes Bild zu erzeugen, muss sich der Gegenstand wo befinden?",
    [
      "Außerhalb der doppelten Brennweite",
      "Mit einer Sammellinse lässt sich keine Lupe realisieren",
      "Außerhalb der einfachen Brennweite",
      "Innerhalb der einfachen Brennweite",
      "In der Hauptebene",
    ],
    3,
    "Als Lupe nutzt man die Sammellinse im Nahbereich: Gegenstand innerhalb der einfachen Brennweite (g < f). Dann entsteht ein virtuelles, aufrechtes, vergrößertes Bild.",
    "mittel",
    ["Optik", "Lupe", "Sammellinse"]
  ),
  q(
    "ph-pool-004",
    "phys-kap5",
    "An zwei Messklemmen 1 und 2 liegt ein Potenzial von -3 V bzw. +7 V. An Klemme 1 wird der Plus-Eingang eines Voltmeters angeschlossen, an Klemme 2 der Minuspol. Die zu erwartende Spannung U zwischen Klemme 1 und Klemme 2 ist:",
    ["+10 V", "+10 Amperesekunden", "+4 V", "+10 J/C", "-10 V"],
    4,
    "U = Potenzial am Pluspol minus Potenzial am Minuspol = (-3 V) - (+7 V) = -10 V. Die Anzeige ist -10 V (Richtung der Messung beachten).",
    "mittel",
    ["Spannung", "Elektrizität", "Potenzial"]
  ),
  q(
    "ph-pool-005",
    "phys-kap3",
    "Eine inkompressible Flüssigkeit (z.B. Wasser) strömt reibungsfrei durch ein Rohr mit einer Verengung. Welche Aussage zu den Geschwindigkeiten am Anfang (v₁) und in der Verengung (v₂) ist korrekt?",
    ["v₂ = v₁", "v₂ − v₁ = 0", "v₂ + v₁ = 0", "v₂ < v₁", "v₂ > v₁"],
    4,
    "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂. Bei kleinerem Querschnitt A₂ ist v₂ größer als v₁.",
    "leicht",
    ["Strömung", "Kontinuität", "Fluide"]
  ),
  q(
    "ph-pool-006",
    "phys-kap1",
    "Welche der folgenden Einheiten kann man ineinander umrechnen?\n1. Joule in Newtonmeter\n2. Joule in Elektronenvolt\n3. Joule in Kalorien\n4. Joule in Watt",
    [
      "1., 2. und 3. sind richtig.",
      "1. und 3. sind richtig.",
      "2. und 4. sind richtig.",
      "4. ist richtig.",
      "Alle sind richtig.",
    ],
    0,
    "J = N·m (Energie/Arbeit); 1 eV ≈ 1,602×10⁻¹⁹ J; 1 cal = 4,184 J. Watt ist Leistung (J/s), keine Energieeinheit — Joule in Watt umrechnen ist falsch.",
    "mittel",
    ["Einheiten", "Joule", "Umrechnung"]
  ),
  q(
    "ph-pool-007",
    "phys-kap1",
    "Die Kraft wird in der Physik in folgenden Einheiten angegeben:",
    ["kg·m/s²", "Nm", "m/s²", "Coulomb", "Ampere"],
    0,
    "Kraft: F in Newton, N = kg·m/s². Nm ist Arbeit/Energie; m/s² ist Beschleunigung; Coulomb und Ampere sind elektrische Größen.",
    "leicht",
    ["Kraft", "Einheiten", "Newton"]
  ),
  q(
    "ph-pool-008",
    "phys-kap1",
    "Was versteht man in der Physik unter „abgeleitete Größen“?",
    [
      "Veraltete physikalische Begriffe (z.B. Permeabilität statt Dielektrizitätskonstante).",
      "Physikalische Größen, die keine SI-Einheiten besitzen.",
      "Physikalische Größen, die nicht messbar sind.",
      "Keine Aussage ist richtig.",
      "Physikalische Größen, die aus den Basisgrößen durch algebraische Verknüpfung (Produkt, Quotient) hervorgehen.",
    ],
    4,
    "Abgeleitete Größen entstehen aus den sieben SI-Basisgrößen durch Produkt/Quotient/Potenzen (z.B. Kraft N = kg·m/s²). Sie sind messbar und haben abgeleitete SI-Einheiten.",
    "mittel",
    ["abgeleitete Größen", "SI", "Einheiten"]
  ),
  q(
    "ph-pool-009",
    "phys-kap7",
    "Beim Zerfall radioaktiver Substanzen können folgende ionisierende Strahlungsarten freigesetzt werden:\n1. Beta-Strahlung\n2. Alpha-Strahlung\n3. Gamma-Strahlung\n4. Infrarotstrahlung",
    [
      "1. und 3. sind richtig.",
      "1., 2. und 3. sind richtig.",
      "2. und 4. sind richtig.",
      "Alle sind richtig.",
      "4. ist richtig.",
    ],
    1,
    "Alpha-, Beta- und Gamma-Strahlung sind ionisierend. Infrarot ist elektromagnetische Strahlung geringerer Energie und nicht ionisierend.",
    "mittel",
    ["Radioaktivität", "ionisierende Strahlung", "Alpha", "Beta", "Gamma"]
  ),
  q(
    "ph-pool-010",
    "phys-kap3",
    "Die Wellenlänge des sichtbaren Lichtes liegt im Bereich von:",
    ["380 mm – 750 mm", "380 nm – 750 nm", "380 cm – 750 cm", "380 km – 750 km", "380 μm – 750 μm"],
    1,
    "Sichtbares Licht: etwa 380 nm (violett) bis 750 nm (rot). nm = Nanometer = 10⁻⁹ m.",
    "leicht",
    ["Wellenlänge", "Licht", "Optik"]
  ),
  q(
    "ph-pool-011",
    "phys-kap1",
    "Wie viele SI-Basisgrößen gibt es?",
    ["5", "6", "7", "8", "9"],
    2,
    "Es gibt genau 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd).",
    "leicht",
    ["SI", "Basisgrößen"]
  ),
  q(
    "ph-pool-012",
    "phys-kap1",
    "Welche Einheit hat der Druck im SI-System?",
    ["Newton", "Joule", "Pascal", "Watt", "Hertz"],
    2,
    "Druck p = Kraft/Fläche, Einheit Pascal: Pa = N/m² = kg/(m·s²).",
    "leicht",
    ["Druck", "Pascal", "Einheiten"]
  ),
  q(
    "ph-pool-013",
    "phys-kap1",
    "Leistung ist definiert als:",
    [
      "Kraft mal Weg",
      "Energie mal Zeit",
      "Energie pro Zeit",
      "Kraft pro Fläche",
      "Masse mal Beschleunigung",
    ],
    2,
    "Leistung P = W/t = Energie/Zeit, Einheit Watt (W = J/s).",
    "leicht",
    ["Leistung", "Watt", "Energie"]
  ),
  q(
    "ph-pool-014",
    "phys-kap1",
    "Ein Körper mit der Masse 70 kg hat auf der Erdoberfläche (g ≈ 9,81 m/s²) ungefähr welche Gewichtskraft?",
    ["70 N", "ca. 687 N", "ca. 9,81 N", "70 kg", "9,81 kg"],
    1,
    "Gewichtskraft F_G = m·g = 70 kg · 9,81 m/s² ≈ 687 N. Masse in kg, Kraft in N.",
    "leicht",
    ["Gewichtskraft", "Masse", "Mechanik"]
  ),
  q(
    "ph-pool-015",
    "phys-kap1",
    "Was trifft auf eine intensive Größe zu?",
    [
      "Sie verdoppelt sich, wenn man zwei gleiche Systeme zusammenfügt.",
      "Sie ist unabhängig von der Systemgröße (z.B. Temperatur, Konzentration).",
      "Sie hat immer die Einheit kg.",
      "Sie ist eine vektorielle Größe.",
      "Sie kann nicht gemessen werden.",
    ],
    1,
    "Intensive Größen sind unabhängig von der Menge (Temperatur, Druck, Konzentration). Extensive Größen verdoppeln sich beim Zusammenfügen (Masse, Volumen, Energie).",
    "mittel",
    ["intensiv", "extensiv", "Größen"]
  ),
  q(
    "ph-pool-016",
    "phys-kap1",
    "Welche der folgenden Größen ist ein Vektor?",
    ["Masse", "Temperatur", "Druck", "Geschwindigkeit", "Energie"],
    3,
    "Vektoren haben Betrag und Richtung: Geschwindigkeit, Kraft, Beschleunigung. Skalare: Masse, Temperatur, Druck, Energie.",
    "leicht",
    ["Vektor", "Skalar", "Mechanik"]
  ),
  q(
    "ph-pool-017",
    "phys-kap1",
    "1 mmHg (Millimeter Quecksilbersäule) entspricht ungefähr:",
    ["1 Pa", "100 Pa", "133 Pa", "1000 Pa", "1013 Pa"],
    2,
    "1 mmHg ≈ 133 Pa. Blutdruck 120 mmHg ≈ 16 kPa.",
    "mittel",
    ["Druck", "mmHg", "Pascal", "Blutdruck"]
  ),
  q(
    "ph-pool-018",
    "phys-kap1",
    "Die Einheit Watt (W) lässt sich in Basiseinheiten ausdrücken als:",
    ["kg·m/s²", "kg·m²/s²", "kg·m²/s³", "kg/s²", "m²/s²"],
    2,
    "W = J/s = N·m/s = (kg·m/s²)·m/s = kg·m²/s³.",
    "mittel",
    ["Watt", "Basiseinheiten", "SI"]
  ),
  q(
    "ph-pool-019",
    "phys-kap1",
    "Welche Aussage zu Masse und Gewichtskraft ist richtig?",
    [
      "Masse und Gewichtskraft sind dasselbe, nur in verschiedenen Einheiten.",
      "Die Masse ist ortsunabhängig; die Gewichtskraft hängt von der Fallbeschleunigung g ab.",
      "Die Gewichtskraft wird in kg angegeben.",
      "Auf dem Mond ist die Masse eines Körpers geringer als auf der Erde.",
      "Die Masse hängt von g ab.",
    ],
    1,
    "Masse (kg) ist ortsunabhängig. Gewichtskraft F_G = m·g (in N) hängt von g ab (Erde ≈ 9,81 m/s², Mond ≈ 1,62 m/s²).",
    "mittel",
    ["Masse", "Gewichtskraft", "g"]
  ),
  q(
    "ph-pool-020",
    "phys-kap1",
    "Welche Größe hat die Einheit kg·m²/s²?",
    ["Kraft", "Leistung", "Druck", "Energie", "Impuls"],
    3,
    "kg·m²/s² = (kg·m/s²)·m = N·m = J (Joule), also Energie oder Arbeit.",
    "mittel",
    ["Einheiten", "Joule", "Dimensionsanalyse"]
  ),
  q(
    "ph-pool-021",
    "phys-kap1",
    "Ein PKW wird mit konstanter Geschwindigkeit auf ebener Straße bewegt. Wird dabei mechanische Arbeit verrichtet?",
    [
      "Ja, solange er sich bewegt.",
      "Nein, weil die Geschwindigkeit konstant ist.",
      "Ja, umso mehr, je schneller er fährt.",
      "Nur beim Anfahren, nicht bei konstanter Fahrt.",
      "Nur von der Reibungskraft.",
    ],
    3,
    "Bei konstanter Geschwindigkeit auf ebener Straße ist die Gesamtkraft (Antrieb minus Reibung) null; die Nettoarbeit über eine Strecke ist null. Beim Anfahren wird Arbeit verrichtet (Beschleunigung).",
    "mittel",
    ["Arbeit", "Bewegung", "Kraft"]
  ),
  q(
    "ph-pool-022",
    "phys-kap3",
    "Bei einer Welle gilt allgemein der Zusammenhang zwischen Ausbreitungsgeschwindigkeit c, Frequenz f und Wellenlänge λ:",
    ["c = f + λ", "c = f − λ", "c = f · λ", "c = f / λ", "c = λ / f"],
    2,
    "c = f · λ (Ausbreitungsgeschwindigkeit = Frequenz mal Wellenlänge). Gilt für mechanische Wellen und elektromagnetische Wellen im Vakuum.",
    "leicht",
    ["Welle", "Frequenz", "Wellenlänge"]
  ),
  q(
    "ph-pool-023",
    "phys-kap3",
    "Schall ist im Vergleich zu Licht:",
    [
      "eine Longitudinalwelle; Licht ist eine Transversalwelle.",
      "schneller als Licht.",
      "eine Transversalwelle.",
      "nur in Luft ausbreitungsfähig.",
      "keine Welle.",
    ],
    0,
    "Schall ist eine Longitudinalwelle (Schwingung in Ausbreitungsrichtung). Licht ist eine elektromagnetische Transversalwelle.",
    "mittel",
    ["Schall", "Licht", "Longitudinal", "Transversal"]
  ),
  q(
    "ph-pool-024",
    "phys-kap5",
    "Die elektrische Spannung U zwischen zwei Punkten ist definiert als:",
    [
      "Arbeit pro Ladung (Energie pro Coulomb), die beim Verschieben einer Probeladung zwischen den Punkten umgesetzt wird.",
      "Ladung pro Zeit.",
      "Kraft pro Ladung.",
      "Ladung pro Fläche.",
      "Strom mal Zeit.",
    ],
    0,
    "Spannung U = W/Q (Arbeit pro Ladung), Einheit Volt = J/C. Sie beschreibt die „Antriebsstärke“ für den Stromfluss.",
    "mittel",
    ["Spannung", "Elektrizität", "Definition"]
  ),
  q(
    "ph-pool-025",
    "phys-kap5",
    "In einem homogenen elektrischen Feld gilt für die Spannung U zwischen zwei Punkten im Abstand d (in Feldrichtung):",
    ["U = E · d", "U = E / d", "U = E + d", "U = E − d", "U = d / E"],
    0,
    "Im homogenen Feld: U = E · d (Feldstärke mal Abstand in Feldrichtung). E in V/m, d in m, U in V.",
    "mittel",
    ["elektrisches Feld", "Spannung", "Feldstärke"]
  ),
  q(
    "ph-pool-026",
    "phys-kap7",
    "Welche Teilchen werden bei der Beta-Minus-Strahlung emittiert?",
    ["Protonen", "Neutronen", "Elektronen", "Heliumkerne", "Photonen"],
    2,
    "Beta-Minus-Zerfall: Ein Neutron wird zu einem Proton; es werden ein Elektron (β⁻) und ein Antineutrino emittiert.",
    "mittel",
    ["Beta-Strahlung", "Radioaktivität", "Zerfall"]
  ),
  q(
    "ph-pool-027",
    "phys-kap7",
    "Alpha-Strahlung besteht aus:",
    ["Elektronen", "Protonen", "Heliumkernen (²⁴He)", "Neutronen", "Photonen"],
    2,
    "Alpha-Strahlung = Heliumkerne (2 Protonen, 2 Neutronen), stark ionisierend, geringe Reichweite.",
    "leicht",
    ["Alpha-Strahlung", "Kernphysik"]
  ),
  q(
    "ph-pool-028",
    "phys-kap7",
    "Gamma-Strahlung ist:",
    [
      "eine Teilchenstrahlung aus Neutronen.",
      "elektromagnetische Strahlung sehr kurzer Wellenlänge (hoher Energie).",
      "identisch mit sichtbarem Licht.",
      "eine Welle mit größerer Wellenlänge als Röntgenstrahlung.",
      "nur in Kernreaktoren erzeugbar.",
    ],
    1,
    "Gamma-Strahlung = elektromagnetische Wellen sehr hoher Energie (kurze Wellenlänge), entsteht beim Übergang von Kernniveaus.",
    "mittel",
    ["Gamma-Strahlung", "elektromagnetisch", "Kernphysik"]
  ),
  q(
    "ph-pool-029",
    "phys-kap5",
    "Eine Sammellinse erzeugt von einem Gegenstand außerhalb der doppelten Brennweite ein reelles Bild. Wo liegt es?",
    [
      "Zwischen Linse und einfacher Brennweite.",
      "Zwischen einfacher und doppelter Brennweite (auf der anderen Seite der Linse).",
      "Genau in der doppelten Brennweite.",
      "Innerhalb der einfachen Brennweite.",
      "Es entsteht kein reelles Bild.",
    ],
    1,
    "Bei g > 2f liegt das reelle Bild zwischen f und 2f auf der Bildseite (Linsengleichung 1/f = 1/g + 1/b).",
    "mittel",
    ["Optik", "Sammellinse", "Abbildung"]
  ),
  q(
    "ph-pool-030",
    "phys-kap4",
    "Die Wärmemenge Q, die nötig ist, um eine Masse m um ΔT zu erwärmen (ohne Phasenwechsel), ist gegeben durch:",
    [
      "Q = m / (c · ΔT)",
      "Q = m · c · ΔT",
      "Q = c / (m · ΔT)",
      "Q = m + c + ΔT",
      "Q = ΔT / (m · c)",
    ],
    1,
    "Q = m · c · ΔT (c = spezifische Wärmekapazität in J/(kg·K)).",
    "leicht",
    ["Wärme", "Wärmekapazität", "Thermodynamik"]
  ),
  q(
    "ph-pool-031",
    "phys-kap4",
    "Der erste Hauptsatz der Thermodynamik besagt vereinfacht:",
    [
      "Wärme fließt immer von kalt nach warm.",
      "Die Gesamtenergie eines abgeschlossenen Systems bleibt konstant; zugeführte Wärme und Arbeit erhöhen die innere Energie.",
      "Es gibt kein Perpetuum mobile erster Art.",
      "Die Entropie nimmt immer zu.",
      "Energie kann nicht in Arbeit umgewandelt werden.",
    ],
    1,
    "Erster Hauptsatz: ΔU = Q + W (Änderung der innereren Energie = Wärme + Arbeit). Energieerhaltung in abgeschlossenen Systemen.",
    "mittel",
    ["Thermodynamik", "1. Hauptsatz", "Energieerhaltung"]
  ),
  q(
    "ph-pool-032",
    "phys-kap1",
    "Welche Aussage zum Newton (N) ist richtig?",
    [
      "Newton ist eine SI-Basisgröße.",
      "1 N = 1 kg·m/s²",
      "Newton ist die Einheit der Energie.",
      "1 N = 1 J/s",
      "Newton ist die Einheit des Drucks.",
    ],
    1,
    "Kraft: 1 N = 1 kg·m/s². Newton ist eine abgeleitete Einheit, nicht Basisgröße. J/s = Watt (Leistung).",
    "leicht",
    ["Newton", "Kraft", "Einheiten"]
  ),
  q(
    "ph-pool-033",
    "phys-kap3",
    "Röntgenstrahlung hat im Vergleich zu sichtbarem Licht:",
    [
      "eine größere Wellenlänge und geringere Energie.",
      "eine kleinere Wellenlänge und höhere Energie.",
      "dieselbe Wellenlänge.",
      "eine größere Frequenz bei gleicher Wellenlänge.",
      "keine Wellennatur.",
    ],
    1,
    "Röntgen: kurze Wellenlänge (ca. 0,01–10 nm), hohe Photonenenergie E = h·f. Sichtbares Licht: ca. 380–750 nm.",
    "mittel",
    ["Röntgen", "elektromagnetisch", "Wellenlänge"]
  ),
  q(
    "ph-pool-034",
    "phys-kap5",
    "Bei der Reihenschaltung zweier Widerstände R₁ und R₂ gilt für den Ersatzwiderstand:",
    [
      "R_ers = R₁ + R₂",
      "R_ers = R₁ · R₂",
      "1/R_ers = 1/R₁ + 1/R₂",
      "R_ers = R₁ = R₂",
      "R_ers = R₁ − R₂",
    ],
    0,
    "Reihenschaltung: gleicher Strom durch beide; Spannungen addieren sich → R_ers = R₁ + R₂.",
    "mittel",
    ["Reihenschaltung", "Widerstand", "Elektrizität"]
  ),
  q(
    "ph-pool-035",
    "phys-kap5",
    "Bei der Parallelschaltung zweier Widerstände R₁ und R₂ gilt:",
    [
      "R_ers = R₁ + R₂",
      "R_ers = R₁ · R₂",
      "1/R_ers = 1/R₁ + 1/R₂",
      "R_ers = R₁",
      "R_ers = R₁ − R₂",
    ],
    2,
    "Parallelschaltung: gleiche Spannung an beiden; Ströme addieren sich → 1/R_ers = 1/R₁ + 1/R₂.",
    "mittel",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-036",
    "phys-kap5",
    "Die Stromstärke I durch einen ohmschen Widerstand R bei angelegter Spannung U ist:",
    ["I = U · R", "I = U / R", "I = R / U", "I = U + R", "I = U − R"],
    1,
    "Ohmsches Gesetz: U = R · I, also I = U / R.",
    "leicht",
    ["Ohmsches Gesetz", "Strom", "Spannung"]
  ),
  q(
    "ph-pool-037",
    "phys-kap1",
    "Welche Aussage ist falsch?",
    [
      "Joule und Newtonmeter sind dieselbe Einheit (Energie/Arbeit).",
      "Watt ist die Einheit der Leistung (Energie pro Zeit).",
      "Man kann Joule in Watt umrechnen, weil beide Energie betreffen.",
      "1 eV ≈ 1,602×10⁻¹⁹ J.",
      "Kalorien und Joule sind umrechenbar (1 cal = 4,184 J).",
    ],
    2,
    "Joule (J) = Energie; Watt (W) = Leistung = J/s. Verschiedene Größen — man „rechnet“ nicht Joule in Watt um.",
    "mittel",
    ["Joule", "Watt", "Einheiten"]
  ),
  q(
    "ph-pool-038",
    "phys-kap7",
    "Die Halbwertszeit eines Radionuklids ist die Zeit, in der:",
    [
      "die Aktivität auf null abfällt.",
      "die Hälfte der ursprünglichen Kerne zerfallen ist.",
      "die doppelte Menge an Strahlung emittiert wird.",
      "alle Kerne zerfallen sind.",
      "die Masse sich verdoppelt.",
    ],
    1,
    "Halbwertszeit T½: Nach dieser Zeit ist die Hälfte der ursprünglichen Kerne zerfallen (bzw. Aktivität auf die Hälfte gesunken).",
    "leicht",
    ["Halbwertszeit", "Radioaktivität"]
  ),
  q(
    "ph-pool-039",
    "phys-kap3",
    "Ultraschall in der Medizin nutzt Frequenzen:",
    [
      "unter 20 Hz",
      "im hörbaren Bereich (20 Hz – 20 kHz)",
      "oberhalb von etwa 20 kHz",
      "im sichtbaren Bereich",
      "im Röntgenbereich",
    ],
    2,
    "Ultraschall = Schall oberhalb der Hörgrenze, typisch etwa 1–20 MHz in der Bildgebung.",
    "leicht",
    ["Ultraschall", "Frequenz", "Medizin"]
  ),
  q(
    "ph-pool-040",
    "phys-kap1",
    "Ein Körper wird auf einer reibungsfreien Ebene mit konstanter Geschwindigkeit gezogen. Die Zugkraft F und der Weg s sind gegeben. Die verrichtete Arbeit W ist:",
    ["W = 0", "W = F · s", "W = F / s", "W = F + s", "W = F − s"],
    1,
    "Arbeit W = F · s (bei Kraft in Wegrichtung). Auch bei konstanter Geschwindigkeit wird Arbeit verrichtet, um die Reibung (oder hier: um den Körper in Bewegung zu halten, falls keine Reibung, dann F=0 und W=0 — bei reibungsfrei und konstanter Geschwindigkeit ist F=0, also W=0). Genauer: Wenn F die einzige Kraft in Wegrichtung ist und v konstant, dann F=0 und W=0. Wenn F eine äußere Zugkraft ist und v konstant (Kräftegleichgewicht), dann leistet F die Arbeit W = F·s gegen die Reibung. Formel W = F·s bleibt korrekt.",
    "mittel",
    ["Arbeit", "Kraft", "Weg"]
  ),
  q(
    "ph-pool-041",
    "phys-kap4",
    "Die Temperatur wird im SI-System in welcher Einheit angegeben?",
    ["Grad Celsius", "Grad Fahrenheit", "Kelvin", "Joule", "Watt"],
    2,
    "SI-Basiseinheit für die thermodynamische Temperatur ist Kelvin (K). 0 K = −273,15 °C.",
    "leicht",
    ["Temperatur", "Kelvin", "SI"]
  ),
  q(
    "ph-pool-042",
    "phys-kap5",
    "Eine Zerstreuungslinse (Konvexlinse mit negativer Brennweite bzw. konkave Linse):",
    [
      "erzeugt immer ein reelles, umgekehrtes Bild.",
      "erzeugt immer ein virtuelles, aufrechtes Bild (kleiner als der Gegenstand).",
      "hat eine positive Brennweite.",
      "kann als Lupe verwendet werden.",
      "erzeugt bei g > 2f ein reelles Bild.",
    ],
    1,
    "Zerstreuungslinse (Konkavlinse): erzeugt nur virtuelle, aufrechte, verkleinerte Bilder; keine reellen Bilder.",
    "mittel",
    ["Zerstreuungslinse", "Optik", "Konkavlinse"]
  ),
  q(
    "ph-pool-043",
    "phys-kap7",
    "Die Bindungsenergie eines Atomkerns:",
    [
      "ist die Energie, die man aufwenden muss, um den Kern in einzelne Nukleonen zu trennen.",
      "entspricht dem Massendefekt mal c (Lichtgeschwindigkeit).",
      "wird in Watt angegeben.",
      "ist negativ, wenn der Kern stabil ist.",
      "hat keine Beziehung zum Massendefekt.",
    ],
    0,
    "Bindungsenergie = Energie, die nötig ist, um den Kern in freie Nukleonen zu zerlegen. E_B = Δm · c² (Massendefekt).",
    "mittel",
    ["Bindungsenergie", "Kernphysik", "Massendefekt"]
  ),
  q(
    "ph-pool-044",
    "phys-kap3",
    "Die Frequenz einer Welle ist definiert als:",
    [
      "Anzahl der Schwingungen pro Sekunde",
      "Anzahl der Wellenlängen pro Meter",
      "Ausbreitungsgeschwindigkeit geteilt durch Amplitude",
      "Wellenlänge mal Zeit",
      "Amplitude pro Sekunde",
    ],
    0,
    "Frequenz f = Anzahl Schwingungen pro Zeiteinheit, Einheit Hertz (Hz) = 1/s.",
    "leicht",
    ["Frequenz", "Welle", "Hertz"]
  ),
  q(
    "ph-pool-045",
    "phys-kap1",
    "Welche Aussage zu Skalaren und Vektoren ist richtig?",
    [
      "Druck ist ein Vektor, Kraft ein Skalar.",
      "Geschwindigkeit ist ein Vektor, Masse ein Skalar.",
      "Temperatur hat eine Richtung.",
      "Energie ist ein Vektor.",
      "Vektoren haben keine Einheit.",
    ],
    1,
    "Vektoren: Geschwindigkeit, Kraft, Beschleunigung (Betrag + Richtung). Skalare: Masse, Temperatur, Druck, Energie (nur Betrag + Einheit).",
    "leicht",
    ["Skalar", "Vektor", "Größen"]
  ),
  q(
    "ph-pool-046",
    "phys-kap5",
    "Die elektrische Stromstärke hat die SI-Einheit:",
    ["Volt", "Coulomb", "Ampere", "Ohm", "Watt"],
    2,
    "Stromstärke I, Einheit Ampere (A). 1 A = 1 C/s.",
    "leicht",
    ["Stromstärke", "Ampere", "Elektrizität"]
  ),
  q(
    "ph-pool-047",
    "phys-kap4",
    "Wärme fließt spontan immer:",
    [
      "von niedriger zu höherer Temperatur",
      "von höherer zu niedrigerer Temperatur",
      "nur in festen Körpern",
      "nur in Flüssigkeiten",
      "mit konstanter Geschwindigkeit unabhängig vom Temperaturunterschied",
    ],
    1,
    "Zweiter Hauptsatz: Wärme fließt spontan von heiß nach kalt (Entropie nimmt zu).",
    "leicht",
    ["Wärme", "Temperatur", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-048",
    "phys-kap1",
    "Der Grundumsatz eines Erwachsenen liegt in der Größenordnung von:",
    ["10 W", "ca. 100 W", "ca. 1 kW", "ca. 10 kW", "ca. 100 kW"],
    1,
    "Grundumsatz ca. 1800 kcal/Tag ≈ 87 W, also Größenordnung etwa 100 W.",
    "mittel",
    ["Grundumsatz", "Leistung", "Energie"]
  ),
  q(
    "ph-pool-049",
    "phys-kap7",
    "Welche Strahlung hat die größte Reichweite in Luft und durchdringt am besten?",
    [
      "Alpha-Strahlung",
      "Beta-Minus-Strahlung",
      "Gamma-Strahlung",
      "Infrarotstrahlung",
      "Sichtbares Licht",
    ],
    2,
    "Gamma-Strahlung (elektromagnetisch) hat hohe Durchdringung. Alpha: wenige cm; Beta: einige m; Gamma: viele m bis km in Luft.",
    "mittel",
    ["Reichweite", "Strahlung", "Gamma"]
  ),
  q(
    "ph-pool-050",
    "phys-kap3",
    "Der Doppler-Effekt beschreibt:",
    [
      "die Beugung von Wellen an Hindernissen.",
      "die Änderung der wahrgenommenen Frequenz bei relativer Bewegung von Quelle und Beobachter.",
      "die Reflexion von Schall an Grenzflächen.",
      "die Dispersion von Licht in Prismen.",
      "stehende Wellen in Resonatoren.",
    ],
    1,
    "Doppler-Effekt: Frequenzverschiebung, wenn sich Quelle und/oder Beobachter relativ zueinander bewegen (z.B. Sirene, medizinischer Ultraschall).",
    "mittel",
    ["Doppler-Effekt", "Frequenz", "Welle"]
  ),
];
