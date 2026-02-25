/**
 * Physik-Pool Teil 2 — Fragen 51–100 (MedAT Typ K, Single Choice).
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

export const physikPool2: Question[] = [
  q(
    "ph-pool-051",
    "phys-kap1",
    "Welche Größe hat die Einheit Pascal (Pa)?",
    ["Kraft", "Druck", "Energie", "Leistung", "Stromstärke"],
    1,
    "Pa = N/m² = Druck (Kraft pro Fläche).",
    "leicht",
    ["Pascal", "Druck"]
  ),
  q(
    "ph-pool-052",
    "phys-kap1",
    "Ein Newtonmeter (N·m) ist die Einheit von:",
    ["Kraft", "Druck", "Arbeit bzw. Energie", "Leistung", "Frequenz"],
    2,
    "N·m = J (Joule) = Arbeit, Energie.",
    "leicht",
    ["Newtonmeter", "Arbeit"]
  ),
  q(
    "ph-pool-053",
    "phys-kap3",
    "Die Schallgeschwindigkeit in Luft bei Raumtemperatur beträgt ungefähr:",
    ["34 m/s", "340 m/s", "3400 m/s", "3·10⁸ m/s", "340 km/h"],
    1,
    "Schall in Luft ca. 343 m/s (20 °C). Licht ca. 3·10⁸ m/s.",
    "leicht",
    ["Schall", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-054",
    "phys-kap5",
    "Die elektrische Ladung wird in welcher Einheit gemessen?",
    ["Ampere", "Volt", "Coulomb", "Ohm", "Watt"],
    2,
    "Ladung Q in Coulomb (C). 1 A = 1 C/s.",
    "leicht",
    ["Ladung", "Coulomb"]
  ),
  q(
    "ph-pool-055",
    "phys-kap1",
    "Welche Aussage zu den 7 SI-Basisgrößen ist richtig?",
    [
      "Newton ist eine Basisgröße.",
      "Pascal ist eine Basisgröße.",
      "Länge, Masse und Zeit sind Basisgrößen.",
      "Joule ist eine Basisgröße.",
      "Watt ist eine Basisgröße.",
    ],
    2,
    "Basisgrößen: Länge (m), Masse (kg), Zeit (s), Strom (A), Temp. (K), Stoffmenge (mol), Lichtstärke (cd). N, Pa, J, W sind abgeleitet.",
    "mittel",
    ["SI", "Basisgrößen"]
  ),
  q(
    "ph-pool-056",
    "phys-kap4",
    "Welcher Phasenübergang beschreibt den Übergang von flüssig zu gasförmig?",
    ["Schmelzen", "Erstarren", "Kondensieren", "Verdampfen", "Sublimieren"],
    3,
    "Flüssig → gasförmig = Verdampfen (bzw. Sieden). Gas → flüssig = Kondensieren.",
    "leicht",
    ["Phasenübergang", "Verdampfen"]
  ),
  q(
    "ph-pool-057",
    "phys-kap5",
    "Ein Ohmscher Widerstand R = 10 Ω liegt an U = 5 V. Wie groß ist die Stromstärke I?",
    ["0,5 A", "2 A", "50 A", "5 A", "15 A"],
    0,
    "I = U/R = 5 V / 10 Ω = 0,5 A.",
    "leicht",
    ["Ohmsches Gesetz", "Strom"]
  ),
  q(
    "ph-pool-058",
    "phys-kap1",
    "Die Beschleunigung hat die Einheit:",
    ["m/s", "m·s", "m/s²", "N/s", "kg·m"],
    2,
    "Beschleunigung a = Δv/Δt, Einheit m/s².",
    "leicht",
    ["Beschleunigung", "Einheiten"]
  ),
  q(
    "ph-pool-059",
    "phys-kap3",
    "Welche Wellenlänge hat Licht der Frequenz 5·10¹⁴ Hz im Vakuum? (c ≈ 3·10⁸ m/s)",
    ["600 nm", "150 nm", "1,5 μm", "6 mm", "60 nm"],
    0,
    "λ = c/f = 3·10⁸ / 5·10¹⁴ = 6·10⁻⁷ m = 600 nm.",
    "mittel",
    ["Wellenlänge", "Licht", "c=f·λ"]
  ),
  q(
    "ph-pool-060",
    "phys-kap7",
    "Bei welchem Zerfall ändert sich die Massenzahl A des Kerns nicht?",
    [
      "Alpha-Zerfall",
      "Beta-Minus-Zerfall",
      "Beta-Plus-Zerfall",
      "Gamma-Zerfall",
      "Spontane Spaltung",
    ],
    3,
    "Gamma: nur Energie (Photon), keine Änderung von A oder Z. Alpha: A−4, Z−2; Beta: A gleich, Z ± 1.",
    "mittel",
    ["Gamma", "Zerfall", "Massenzahl"]
  ),
  q(
    "ph-pool-061",
    "phys-kap1",
    "Ein Körper der Masse 2 kg wird mit 3 m/s² beschleunigt. Welche Kraft wirkt?",
    ["6 N", "1,5 N", "5 N", "2/3 N", "9 N"],
    0,
    "F = m·a = 2 kg · 3 m/s² = 6 N.",
    "leicht",
    ["Kraft", "Newton", "Beschleunigung"]
  ),
  q(
    "ph-pool-062",
    "phys-kap4",
    "Die spezifische Wärmekapazität von Wasser (flüssig) beträgt etwa:",
    ["1 J/(kg·K)", "4184 J/(kg·K)", "100 J/(kg·K)", "1 cal/s", "4,184 kg/K"],
    1,
    "c_Wasser ≈ 4184 J/(kg·K) ≈ 1 cal/(g·K).",
    "mittel",
    ["Wärmekapazität", "Wasser"]
  ),
  q(
    "ph-pool-063",
    "phys-kap5",
    "Zwei Widerstände 30 Ω und 60 Ω sind in Reihe geschaltet. Ersatzwiderstand?",
    ["20 Ω", "90 Ω", "30 Ω", "45 Ω", "1800 Ω"],
    1,
    "Reihe: R_ers = R₁ + R₂ = 30 + 60 = 90 Ω.",
    "leicht",
    ["Reihenschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-064",
    "phys-kap5",
    "Zwei Widerstände 30 Ω und 60 Ω sind parallel geschaltet. Ersatzwiderstand?",
    ["20 Ω", "90 Ω", "45 Ω", "30 Ω", "15 Ω"],
    0,
    "Parallel: 1/R = 1/30 + 1/60 = 1/20 → R = 20 Ω.",
    "mittel",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-065",
    "phys-kap1",
    "Welche Aussage zu extensiven Größen ist richtig?",
    [
      "Temperatur ist extensiv.",
      "Masse und Volumen sind extensiv.",
      "Druck ist extensiv.",
      "Konzentration ist extensiv.",
      "Extensive Größen sind ortsunabhängig.",
    ],
    1,
    "Extensiv: proportional zur Menge (Masse, Volumen, Energie, Stoffmenge). Intensiv: Temperatur, Druck, Konzentration.",
    "mittel",
    ["extensiv", "Größen"]
  ),
  q(
    "ph-pool-066",
    "phys-kap3",
    "In welchem Medium breitet sich Schall am schnellsten aus (typischerweise)?",
    ["Luft", "Wasser", "Stahl", "Vakuum", "Wasserstoff"],
    2,
    "Schall: Festkörper (Stahl) > Flüssigkeit (Wasser) > Gas (Luft). Im Vakuum kein Schall (kein Trägermedium).",
    "mittel",
    ["Schall", "Ausbreitung"]
  ),
  q(
    "ph-pool-067",
    "phys-kap7",
    "Die Ordnungszahl Z eines Kerns gibt an:",
    [
      "die Anzahl der Nukleonen.",
      "die Anzahl der Protonen.",
      "die Anzahl der Neutronen.",
      "die Masse in u.",
      "die Halbwertszeit.",
    ],
    1,
    "Z = Protonenzahl (Ordnungszahl). A = Massenzahl = Nukleonenanzahl. N = A − Z = Neutronenzahl.",
    "leicht",
    ["Ordnungszahl", "Kernphysik"]
  ),
  q(
    "ph-pool-068",
    "phys-kap1",
    "Ein Blutdruck von 120 mmHg entspricht ungefähr welchem Druck in kPa?",
    ["120 kPa", "16 kPa", "1,2 kPa", "133 kPa", "9 kPa"],
    1,
    "120 mmHg · (133 Pa/mmHg) ≈ 15960 Pa ≈ 16 kPa.",
    "mittel",
    ["Blutdruck", "mmHg", "Pascal"]
  ),
  q(
    "ph-pool-069",
    "phys-kap5",
    "Die Brennweite f einer dünnen Linse hängt ab von:",
    [
      "der Gegenstandsweite.",
      "der Bildweite.",
      "Brechzahl des Linsenmaterials und Krümmungsradien.",
      "der Lichtintensität.",
      "der Wellenlänge nur bei Dispersion.",
    ],
    2,
    "Brennweite: Material (n) und Radien (Linsenmachergleichung). Unabhängig von g, b und bei idealer Linse von λ.",
    "mittel",
    ["Brennweite", "Optik"]
  ),
  q(
    "ph-pool-070",
    "phys-kap4",
    "Der absolute Nullpunkt der Temperatur liegt bei:",
    ["0 °C", "−273,15 °C", "273,15 °C", "0 K", "−273,15 K"],
    1,
    "Absoluter Nullpunkt: 0 K = −273,15 °C. 0 °C = 273,15 K.",
    "leicht",
    ["absoluter Nullpunkt", "Kelvin"]
  ),
  q(
    "ph-pool-071",
    "phys-kap1",
    "Die kinetische Energie eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["m · v", "m · v²", "(1/2) · m · v²", "m · g · h", "F · s"],
    2,
    "E_kin = (1/2)·m·v². m·g·h = potentielle Energie (Lage).",
    "leicht",
    ["kinetische Energie", "Mechanik"]
  ),
  q(
    "ph-pool-072",
    "phys-kap1",
    "Die potentielle Energie (Lageenergie) im homogenen Schwerefeld ist gegeben durch:",
    ["m · v²/2", "m · v", "m · g · h", "F · t", "P · t"],
    2,
    "E_pot = m·g·h (Masse, Fallbeschleunigung, Höhe).",
    "leicht",
    ["potentielle Energie", "Energie"]
  ),
  q(
    "ph-pool-073",
    "phys-kap3",
    "Bei der Reflexion von Licht an einer ebenen Grenzfläche gilt:",
    [
      "Einfallswinkel = Reflexionswinkel",
      "Einfallswinkel = Brechungswinkel",
      "Reflexionswinkel = 90°",
      "Es gibt keine Reflexion.",
      "Nur bei senkrechtem Einfall.",
    ],
    0,
    "Reflexionsgesetz: Einfallswinkel = Ausfallswinkel (gegen die Normale).",
    "leicht",
    ["Reflexion", "Optik"]
  ),
  q(
    "ph-pool-074",
    "phys-kap5",
    "Die elektrische Leistung P bei Spannung U und Stromstärke I ist:",
    ["P = U + I", "P = U · I", "P = U / I", "P = I / U", "P = U − I"],
    1,
    "Elektrische Leistung: P = U · I (Watt).",
    "leicht",
    ["Leistung", "Elektrizität"]
  ),
  q(
    "ph-pool-075",
    "phys-kap7",
    "Welche Strahlung hat die geringste Durchdringungsfähigkeit in Gewebe?",
    ["Gamma", "Röntgen", "Beta", "Alpha", "UV"],
    3,
    "Alpha: sehr geringe Reichweite (wenige cm in Luft, Papier hält auf). Gamma/Röntgen: hohe Durchdringung.",
    "mittel",
    ["Alpha", "Durchdringung", "Strahlung"]
  ),
  q(
    "ph-pool-076",
    "phys-kap1",
    "Ein Auto fährt 100 km in 2 Stunden. Die Durchschnittsgeschwindigkeit ist:",
    ["50 km/h", "200 km/h", "100 km/h", "20 km/h", "98 km/h"],
    0,
    "v = s/t = 100 km / 2 h = 50 km/h.",
    "leicht",
    ["Geschwindigkeit", "Kinematik"]
  ),
  q(
    "ph-pool-077",
    "phys-kap4",
    "Beim Schmelzen von Eis bei 0 °C:",
    [
      "sinkt die Temperatur.",
      "bleibt die Temperatur konstant, bis alles geschmolzen ist.",
      "steigt die Temperatur sofort.",
      "wird keine Energie umgesetzt.",
      "entsteht Sublimation.",
    ],
    1,
    "Phasenübergang: Temperatur bleibt konstant (0 °C), zugeführte Wärme = Schmelzwärme.",
    "mittel",
    ["Schmelzen", "Phasenübergang"]
  ),
  q(
    "ph-pool-078",
    "phys-kap5",
    "Ein Strom von 2 A fließt 10 s lang. Welche Ladung wurde transportiert?",
    ["5 C", "20 C", "0,2 C", "12 C", "8 C"],
    1,
    "Q = I · t = 2 A · 10 s = 20 C.",
    "leicht",
    ["Ladung", "Strom", "Q=I·t"]
  ),
  q(
    "ph-pool-079",
    "phys-kap3",
    "Die Lichtgeschwindigkeit im Vakuum c beträgt etwa:",
    ["3·10⁵ m/s", "3·10⁶ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s", "unendlich"],
    2,
    "c ≈ 2,998·10⁸ m/s ≈ 3·10⁸ m/s.",
    "leicht",
    ["Lichtgeschwindigkeit", "c"]
  ),
  q(
    "ph-pool-080",
    "phys-kap1",
    "Welche Aussage zur mechanischen Arbeit ist falsch?",
    [
      "Arbeit = Kraft · Weg (in Wegrichtung).",
      "Beim Halten eines Gewichts wird keine Arbeit verrichtet.",
      "Die Einheit der Arbeit ist Joule.",
      "Arbeit und Leistung haben dieselbe Einheit.",
      "Negative Arbeit kann von bremsenden Kräften verrichtet werden.",
    ],
    3,
    "Arbeit in J (Joule), Leistung in W (Watt = J/s). Verschiedene Einheiten.",
    "mittel",
    ["Arbeit", "Leistung", "Joule"]
  ),
  q(
    "ph-pool-081",
    "phys-kap7",
    "Ein Radionuklid hat die Halbwertszeit 2 h. Nach 6 h ist der Anteil der noch nicht zerfallenen Kerne etwa:",
    ["1/2", "1/4", "1/8", "1/16", "0"],
    2,
    "Nach 3 Halbwertszeiten: (1/2)³ = 1/8.",
    "mittel",
    ["Halbwertszeit", "Radioaktivität"]
  ),
  q(
    "ph-pool-082",
    "phys-kap5",
    "Bei einer Konvexlinse (Sammellinse) mit positiver Brennweite: Ein Gegenstand steht genau in der einfachen Brennweite (g = f). Wo liegt das Bild?",
    [
      "Reelles Bild bei b = f.",
      "Virtuelles Bild im Unendlichen.",
      "Kein Bild (parallele Strahlen).",
      "Reelles Bild bei b = 2f.",
      "Virtuelles Bild bei b = f.",
    ],
    2,
    "g = f: aus der Linse treten parallele Strahlen aus → Bild „im Unendlichen“.",
    "schwer",
    ["Linsengleichung", "Brennweite", "g=f"]
  ),
  q(
    "ph-pool-083",
    "phys-kap1",
    "Der Impuls p eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["m · v²", "m · v", "(1/2)·m·v²", "F · t", "m · g"],
    1,
    "Impuls p = m · v (Vektor), Einheit kg·m/s.",
    "leicht",
    ["Impuls", "Mechanik"]
  ),
  q(
    "ph-pool-084",
    "phys-kap4",
    "Die Entropie S ist eine Größe, die im Zusammenhang mit dem … Hauptsatz der Thermodynamik steht.",
    ["ersten", "zweiten", "dritten", "nullten", "vierten"],
    1,
    "Zweiter Hauptsatz: Entropie nimmt in abgeschlossenen Systemen zu (bzw. bleibt konstant).",
    "mittel",
    ["Entropie", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-085",
    "phys-kap3",
    "Bei der Brechung von Licht beim Übergang Luft → Wasser:",
    [
      "breitet sich Licht schneller aus als in Luft.",
      "wird der Strahl zum Lot hin gebrochen (Wasser optisch dichter).",
      "gibt es keine Brechung.",
      "wird der Strahl vom Lot weg gebrochen.",
      "ändert sich die Frequenz.",
    ],
    1,
    "Luft → Wasser: Brechung zum Lot hin (Wasser: größerer Brechungsindex n, kleinere Ausbreitungsgeschwindigkeit).",
    "mittel",
    ["Brechung", "Optik", "Snellius"]
  ),
  q(
    "ph-pool-086",
    "phys-kap5",
    "Der Widerstand R eines Leiters der Länge l und Querschnittsfläche A mit spezifischem Widerstand ρ ist:",
    ["R = ρ · A / l", "R = ρ · l / A", "R = l / (ρ · A)", "R = A / (ρ · l)", "R = ρ + l + A"],
    1,
    "R = ρ · l / A (spezifischer Widerstand mal Länge durch Querschnitt).",
    "mittel",
    ["Widerstand", "spezifischer Widerstand"]
  ),
  q(
    "ph-pool-087",
    "phys-kap1",
    "Welche Kraft wirkt auf eine Masse von 10 kg im freien Fall (g ≈ 10 m/s²)?",
    ["1 N", "10 N", "100 N", "0 N", "10 kg"],
    2,
    "Gewichtskraft F_G = m·g = 10 kg · 10 m/s² = 100 N.",
    "leicht",
    ["Gewichtskraft", "freier Fall"]
  ),
  q(
    "ph-pool-088",
    "phys-kap7",
    "Die Aktivität A einer radioaktiven Probe (Zerfälle pro Zeit) wird in welcher Einheit angegeben?",
    ["Joule", "Becquerel", "Sievert", "Gray", "Coulomb"],
    1,
    "Aktivität in Becquerel (Bq) = 1 Zerfall/s. Gray/Sievert: Dosis.",
    "mittel",
    ["Aktivität", "Becquerel"]
  ),
  q(
    "ph-pool-089",
    "phys-kap3",
    "Stehende Wellen entstehen durch:",
    [
      "Reflexion an einer Grenzfläche.",
      "Überlagerung zweier gegenläufiger Wellen gleicher Frequenz.",
      "Doppler-Effekt.",
      "Dispersion.",
      "Brechung.",
    ],
    1,
    "Stehende Welle: Überlagerung hin- und rücklaufender Welle gleicher Frequenz (z.B. eingespannte Saite).",
    "mittel",
    ["stehende Welle", "Interferenz"]
  ),
  q(
    "ph-pool-090",
    "phys-kap5",
    "Welche Aussage zur Bildentstehung bei einer Sammellinse ist richtig?",
    [
      "Bei g < f entsteht immer ein reelles Bild.",
      "Bei g > 2f ist das Bild verkleinert und reell.",
      "Bei g = 2f ist das Bild gleich groß und virtuell.",
      "Bei g > f gibt es nie ein reelles Bild.",
      "Das Bild ist immer aufrecht.",
    ],
    1,
    "g > 2f: reelles, umgekehrtes, verkleinertes Bild zwischen f und 2f.",
    "mittel",
    ["Sammellinse", "Abbildung"]
  ),
  q(
    "ph-pool-091",
    "phys-kap1",
    "Ein Stein fällt aus der Ruhe 2 s lang (g ≈ 10 m/s²). Welche Strecke legt er zurück?",
    ["10 m", "20 m", "5 m", "40 m", "15 m"],
    1,
    "s = (1/2)·g·t² = 0,5 · 10 · 4 = 20 m.",
    "leicht",
    ["freier Fall", "Kinematik"]
  ),
  q(
    "ph-pool-092",
    "phys-kap4",
    "Die Verdampfungsenthalpie von Wasser bei 100 °C beträgt etwa:",
    ["2,26·10⁶ J/kg", "334 J/kg", "4184 J/kg", "100 J/kg", "2,26 J/kg"],
    0,
    "Verdampfungswärme Wasser ca. 2257 kJ/kg ≈ 2,26·10⁶ J/kg. Schmelzwärme Eis ca. 334 kJ/kg.",
    "mittel",
    ["Verdampfung", "Enthalpie"]
  ),
  q(
    "ph-pool-093",
    "phys-kap5",
    "In einem geschlossenen Stromkreis mit einer Spannungsquelle und einem Widerstand:",
    [
      "fließt nur an einer Stelle Strom.",
      "ist die Stromstärke an jeder Stelle gleich (Knotenregel bei einem einzigen Zweig).",
      "addieren sich die Spannungen über alle Widerstände zur Quellenspannung.",
      "gilt nur das Ohmsche Gesetz.",
      "B und C sind richtig.",
    ],
    4,
    "In einem unverzweigten Kreis: I überall gleich. Spannungsbilanz: U_Quelle = Summe U über Widerstände.",
    "mittel",
    ["Stromkreis", "Kirchhoff"]
  ),
  q(
    "ph-pool-094",
    "phys-kap1",
    "Die Fallbeschleunigung g auf der Erdoberfläche beträgt etwa:",
    ["1 m/s²", "5 m/s²", "9,81 m/s²", "10 m/s² (exakt)", "20 m/s²"],
    2,
    "g ≈ 9,81 m/s² (ortsabhängig, ca. 9,78–9,83). Oft gerundet 10 m/s².",
    "leicht",
    ["Fallbeschleunigung", "g"]
  ),
  q(
    "ph-pool-095",
    "phys-kap3",
    "Infrarotstrahlung hat im Vergleich zu sichtbarem Licht:",
    [
      "kürzere Wellenlänge.",
      "längere Wellenlänge.",
      "dieselbe Wellenlänge.",
      "keine Wellennatur.",
      "nur in Wärme umwandelbar.",
    ],
    1,
    "IR: längere Wellenlänge als sichtbares Licht (ca. 750 nm–1 mm). UV: kürzer als sichtbar.",
    "leicht",
    ["Infrarot", "elektromagnetisch"]
  ),
  q(
    "ph-pool-096",
    "phys-kap7",
    "Bei Beta-Plus-Zerfall wird emittiert:",
    ["ein Elektron", "ein Positron", "ein Neutron", "ein Proton", "ein Alpha-Teilchen"],
    1,
    "Beta-Plus: Proton → Neutron + Positron (e⁺) + Neutrino.",
    "mittel",
    ["Beta-Plus", "Positron", "Zerfall"]
  ),
  q(
    "ph-pool-097",
    "phys-kap1",
    "Welche Aussage zu Energieformen ist richtig?",
    [
      "Kinetische und potentielle Energie haben verschiedene Einheiten.",
      "Energie kann weder erzeugt noch vernichtet werden (Energieerhaltung).",
      "Leistung ist Energie mal Zeit.",
      "Wärme ist keine Energieform.",
      "Energie wird in Watt gemessen.",
    ],
    1,
    "Energieerhaltung: Gesamtenergie konstant. E in J, P in W = J/s. Wärme Q ist Energie.",
    "mittel",
    ["Energieerhaltung", "Energie"]
  ),
  q(
    "ph-pool-098",
    "phys-kap5",
    "Ein Kondensator speichert:",
    ["Strom", "Ladung bzw. elektrische Energie", "Magnetfeld", "Wärme", "nur Spannung"],
    1,
    "Kondensator: speichert Ladung Q und Energie E = (1/2)·C·U².",
    "leicht",
    ["Kondensator", "Ladung"]
  ),
  q(
    "ph-pool-099",
    "phys-kap4",
    "Die Wärmeleitung in einem Festkörper erfolgt durch:",
    [
      "Konvektion",
      "Strömung",
      "Übertragung kinetischer Energie zwischen benachbarten Teilchen",
      "Strahlung nur",
      "Photonen",
    ],
    2,
    "Wärmeleitung: Energieübertragung durch Schwingungen/Stöße benachbarter Teilchen (kein Stofftransport).",
    "mittel",
    ["Wärmeleitung", "Thermodynamik"]
  ),
  q(
    "ph-pool-100",
    "phys-kap3",
    "Die Frequenz des sichtbaren Lichts liegt in der Größenordnung von:",
    ["10⁵ Hz", "10⁸ Hz", "10¹¹ Hz", "10¹⁴ Hz", "10¹⁷ Hz"],
    3,
    "Licht λ ≈ 500 nm → f = c/λ ≈ 3·10⁸ / 5·10⁻⁷ ≈ 6·10¹⁴ Hz.",
    "mittel",
    ["Frequenz", "Licht", "elektromagnetisch"]
  ),
];
