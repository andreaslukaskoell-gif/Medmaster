/**
 * Physik-Pool Teil 8 — Fragen 351–400 (MedAT Typ K, Single Choice).
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
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const physikPool8: Question[] = [
  q(
    "ph-pool-351",
    "phys-kap1",
    "7 SI-Basisgrößen: Welche gehört nicht dazu?",
    ["Länge", "Kraft", "Zeit", "Stromstärke", "Temperatur"],
    1,
    "Kraft (Newton) ist abgeleitet; Basis: Länge, Masse, Zeit, Strom, Temp., Stoffmenge, Lichtstärke.",
    "leicht",
    ["SI", "Basisgrößen"]
  ),
  q(
    "ph-pool-352",
    "phys-kap5",
    "Strom I = 2 A durch R = 15 Ω. Spannung?",
    ["7,5 V", "30 V", "17 V", "13 V", "8 V"],
    1,
    "U = R·I = 15·2 = 30 V.",
    "leicht",
    ["Ohmsches Gesetz"]
  ),
  q(
    "ph-pool-353",
    "phys-kap3",
    "Licht: c = f·λ. Bei f = 5·10¹⁴ Hz (c ≈ 3·10⁸ m/s): λ = ?",
    ["600 nm", "1,5 μm", "500 nm", "6 nm", "60 nm"],
    0,
    "λ = c/f = 3·10⁸/(5·10¹⁴) = 6·10⁻⁷ m = 600 nm.",
    "mittel",
    ["Wellenlänge", "Licht"]
  ),
  q(
    "ph-pool-354",
    "phys-kap4",
    "Wärme Q = m·c·ΔT. Bei gleichem Q und gleicher Masse: größeres c → … ΔT.",
    ["größeres", "kleineres", "gleich", "null", "negatives"],
    1,
    "ΔT = Q/(m·c); c größer → ΔT kleiner.",
    "leicht",
    ["Wärmekapazität", "Temperatur"]
  ),
  q(
    "ph-pool-355",
    "phys-kap7",
    "Neutron hat … elektrische Ladung.",
    ["positive", "negative", "keine", "variable", "+e"],
    2,
    "Neutron: elektrisch neutral (Ladung 0).",
    "leicht",
    ["Neutron", "Ladung"]
  ),
  q(
    "ph-pool-356",
    "phys-kap1",
    "Weg s = 100 m, Zeit t = 20 s. Durchschnittsgeschwindigkeit?",
    ["5 m/s", "2000 m/s", "0,2 m/s", "80 m/s", "120 m/s"],
    0,
    "v = s/t = 100/20 = 5 m/s.",
    "leicht",
    ["Geschwindigkeit"]
  ),
  q(
    "ph-pool-357",
    "phys-kap5",
    "Zwei Kondensatoren in Reihe: C₁ = 4 μF, C₂ = 4 μF. C_ers?",
    ["8 μF", "2 μF", "16 μF", "4 μF", "1 μF"],
    1,
    "1/C = 1/4 + 1/4 = 1/2 → C = 2 μF.",
    "mittel",
    ["Kondensator", "Reihe"]
  ),
  q(
    "ph-pool-358",
    "phys-kap3",
    "Schall: Longitudinalwelle bedeutet, die Schwingung erfolgt … zur Ausbreitungsrichtung.",
    ["senkrecht", "in", "gegen", "tangential", "gar nicht"],
    1,
    "Longitudinal: Schwingung in Ausbreitungsrichtung (z.B. Druckänderung).",
    "mittel",
    ["Longitudinalwelle", "Schall"]
  ),
  q(
    "ph-pool-359",
    "phys-kap4",
    "Kelvin und Celsius: 100 °C = ? K",
    ["100 K", "373,15 K", "273,15 K", "0 K", "173 K"],
    1,
    "T/K = T/°C + 273,15 → 100 °C = 373,15 K.",
    "leicht",
    ["Kelvin", "Celsius"]
  ),
  q(
    "ph-pool-360",
    "phys-kap1",
    "Kraft F = 25 N, Weg s = 4 m (in Kraftrichtung). Arbeit?",
    ["100 J", "6,25 J", "29 J", "21 J", "0 J"],
    0,
    "W = F·s = 25·4 = 100 J.",
    "leicht",
    ["Arbeit", "Joule"]
  ),
  q(
    "ph-pool-361",
    "phys-kap7",
    "Beta-Minus-Zerfall: Ein … wird zu einem …",
    [
      "Proton, Neutron",
      "Neutron, Proton",
      "Elektron, Positron",
      "Photon, Elektron",
      "Alpha, Gamma",
    ],
    1,
    "β⁻-Zerfall: n → p + e⁻ + ν̄.",
    "mittel",
    ["Beta-Minus", "Zerfall"]
  ),
  q(
    "ph-pool-362",
    "phys-kap5",
    "Parallelschaltung: U an allen Zweigen …",
    ["unterschiedlich", "gleich", "null", "proportional zu R", "umgekehrt proportional zu I"],
    1,
    "Parallel: gleiche Spannung U an jedem Zweig.",
    "leicht",
    ["Parallelschaltung", "Spannung"]
  ),
  q(
    "ph-pool-363",
    "phys-kap3",
    "Brechungsindex n von Vakuum:",
    ["0", "1", "1,5", "2", "c"],
    1,
    "n_Vakuum = 1 (Referenz).",
    "leicht",
    ["Brechungsindex", "Vakuum"]
  ),
  q(
    "ph-pool-364",
    "phys-kap4",
    "Erster Hauptsatz: ΔU = Q + W. Konvention: W > 0 wenn … am System verrichtet wird.",
    [
      "keine Arbeit",
      "Arbeit vom System nach außen",
      "Arbeit von außen auf das System",
      "Q = 0",
      "T constant",
    ],
    2,
    "Üblich: W > 0 wenn Arbeit dem System zugeführt wird (Vorzeichenkonvention kann variieren). Hier: W von außen auf System → ΔU erhöht.",
    "mittel",
    ["1. Hauptsatz", "Arbeit"]
  ),
  q(
    "ph-pool-365",
    "phys-kap1",
    "Masse 0,5 kg, Geschwindigkeit 6 m/s. Impuls?",
    ["3 kg·m/s", "18 kg·m/s", "0,083 kg·m/s", "12 kg·m/s", "6 kg·m/s"],
    0,
    "p = m·v = 0,5·6 = 3 kg·m/s.",
    "leicht",
    ["Impuls"]
  ),
  q(
    "ph-pool-366",
    "phys-kap5",
    "Leistung 60 W, Spannung 12 V. Strom?",
    ["5 A", "0,2 A", "720 A", "72 A", "7,2 A"],
    0,
    "I = P/U = 60/12 = 5 A.",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-367",
    "phys-kap7",
    "Gamma-Strahlung entsteht beim …",
    [
      "Alpha-Zerfall nur",
      "Übergang zwischen Kernniveaus (Energieabgabe)",
      "Beta-Zerfall nur",
      "Schmelzen",
      "Chemischen Reaktionen",
    ],
    1,
    "Gamma: Photonenemission bei Kernniveauübergängen.",
    "mittel",
    ["Gamma", "Entstehung"]
  ),
  q(
    "ph-pool-368",
    "phys-kap3",
    "Beugung: Je kleiner der Spalt (in λ-Einheiten), desto … die Beugung.",
    ["schwächer", "stärker", "gleich", "null", "chaotisch"],
    1,
    "Kleine Spaltbreite → starke Beugung (breitere Figur).",
    "mittel",
    ["Beugung", "Spalt"]
  ),
  q(
    "ph-pool-369",
    "phys-kap4",
    "Ideales Gas: Bei konstantem Druck gilt V ∝ …",
    ["p", "1/T", "T", "1/V", "n nur"],
    2,
    "Isobar: V ∝ T (Charles/Gay-Lussac).",
    "leicht",
    ["ideales Gas", "isobar"]
  ),
  q(
    "ph-pool-370",
    "phys-kap1",
    "Ein 8-kg-Körper hat E_kin = 64 J. Geschwindigkeit?",
    ["4 m/s", "8 m/s", "16 m/s", "2 m/s", "32 m/s"],
    0,
    "v = √(2E/m) = √(128/8) = √16 = 4 m/s.",
    "mittel",
    ["kinetische Energie", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-371",
    "phys-kap5",
    "Coulomb-Kraft zwischen zwei Elektronen (Abstand r):",
    ["anziehend", "abstoßend", "null", "immer konstant", "nur in Wasser anziehend"],
    1,
    "Gleichnamige Ladungen (beide negativ) stoßen sich ab.",
    "leicht",
    ["Coulomb", "Elektron"]
  ),
  q(
    "ph-pool-372",
    "phys-kap3",
    "Frequenz 1000 Hz. Wellenlänge in Luft (c ≈ 340 m/s)?",
    ["0,34 m", "340 m", "3,4 m", "34 m", "1000 m"],
    0,
    "λ = c/f = 340/1000 = 0,34 m.",
    "leicht",
    ["Wellenlänge", "Schall"]
  ),
  q(
    "ph-pool-373",
    "phys-kap4",
    "Wärmeübertragung durch Strahlung benötigt …",
    [
      "ein festes Medium",
      "kein Medium (Vakuum möglich)",
      "nur Flüssigkeit",
      "nur Gas",
      "Konvektion",
    ],
    1,
    "Wärmestrahlung (elektromagnetisch) breitet sich auch im Vakuum aus.",
    "leicht",
    ["Wärmestrahlung", "Vakuum"]
  ),
  q(
    "ph-pool-374",
    "phys-kap7",
    "Ein Kern mit A = 27 und Z = 13 hat … Neutronen.",
    ["14", "27", "13", "40", "26"],
    0,
    "N = A − Z = 27 − 13 = 14 (Aluminium-27).",
    "leicht",
    ["Neutronenzahl", "Kern"]
  ),
  q(
    "ph-pool-375",
    "phys-kap1",
    "Beschleunigung a = 2 m/s², Zeit t = 6 s (aus Ruhe). Zurückgelegter Weg?",
    ["36 m", "12 m", "6 m", "18 m", "3 m"],
    0,
    "s = (1/2)·a·t² = 0,5·2·36 = 36 m.",
    "leicht",
    ["Beschleunigung", "Weg"]
  ),
  q(
    "ph-pool-376",
    "phys-kap5",
    "Widerstand 40 Ω, Spannung 120 V. Leistung?",
    ["360 W", "3 W", "4800 W", "0,3 W", "120 W"],
    0,
    "P = U²/R = 14400/40 = 360 W.",
    "leicht",
    ["Leistung", "Widerstand"]
  ),
  q(
    "ph-pool-377",
    "phys-kap3",
    "Polarisation betrifft die … der Schwingung.",
    ["Frequenz", "Richtung/Ebene", "Amplitude", "Phase", "Geschwindigkeit"],
    1,
    "Polarisation: Richtung/Ebene der Schwingung (nur bei Transversalwellen).",
    "mittel",
    ["Polarisation", "Welle"]
  ),
  q(
    "ph-pool-378",
    "phys-kap4",
    "Schmelzpunkt von Eis (Normaldruck):",
    ["273 K", "0 °C", "32 °F", "A und B sind richtig", "100 °C"],
    3,
    "0 °C = 273,15 K.",
    "leicht",
    ["Schmelzpunkt", "Eis"]
  ),
  q(
    "ph-pool-379",
    "phys-kap1",
    "Gewichtskraft auf dem Mond (g_Mond ≈ 1,6 m/s²) für m = 60 kg?",
    ["96 N", "600 N", "60 N", "368 N", "9,8 N"],
    0,
    "F_G = m·g = 60·1,6 = 96 N.",
    "leicht",
    ["Gewichtskraft", "Mond"]
  ),
  q(
    "ph-pool-380",
    "phys-kap7",
    "Die Aktivität A (Zerfälle/s) einer Probe ist proportional zu …",
    [
      "der Halbwertszeit",
      "der Anzahl N der noch vorhandenen Kerne",
      "der Masse nicht",
      "B ist richtig",
      "der Temperatur",
    ],
    3,
    "A = λ·N; A ∝ N.",
    "mittel",
    ["Aktivität", "Radioaktivität"]
  ),
  q(
    "ph-pool-381",
    "phys-kap5",
    "Reihenschaltung: An jedem Widerstand fällt eine Teilspannung ab. Summe der Teilspannungen = …",
    ["null", "Quellenspannung", "Strom mal Zeit", "kleiner als U_Quelle", "größer als U_Quelle"],
    1,
    "Kirchhoff: U_Quelle = Σ U_i (Maschenregel).",
    "leicht",
    ["Reihenschaltung", "Spannung"]
  ),
  q(
    "ph-pool-382",
    "phys-kap3",
    "Lichtgeschwindigkeit in Diamant (n ≈ 2,4):",
    ["c", "c/2,4", "2,4·c", "c/2", "null"],
    1,
    "c_Medium = c/n = c/2,4.",
    "leicht",
    ["Licht", "Brechungsindex"]
  ),
  q(
    "ph-pool-383",
    "phys-kap4",
    "Zweiter Hauptsatz: In einem abgeschlossenen System kann die Entropie …",
    [
      "nur abnehmen",
      "nur zunehmen oder konstant bleiben",
      "beliebig abnehmen",
      "null werden",
      "negativ werden",
    ],
    1,
    "ΔS ≥ 0 (Entropie nimmt zu oder bleibt konstant).",
    "mittel",
    ["2. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-384",
    "phys-kap1",
    "Ein 10-kg-Körper wird mit 2 m/s² beschleunigt. Kraft?",
    ["20 N", "5 N", "12 N", "8 N", "0,2 N"],
    0,
    "F = m·a = 10·2 = 20 N.",
    "leicht",
    ["Kraft", "Newton"]
  ),
  q(
    "ph-pool-385",
    "phys-kap7",
    "Röntgenphotonen haben typisch Energien im Bereich …",
    ["eV", "keV bis MeV", "MeV nur", "Joule", "Kalorien"],
    1,
    "Röntgen: typisch keV bis hundert keV (diagnostisch); auch MeV bei Therapie.",
    "mittel",
    ["Röntgen", "Energie"]
  ),
  q(
    "ph-pool-386",
    "phys-kap5",
    "Kapazität C = 2 μF, Spannung U = 50 V. Ladung Q?",
    ["100 μC", "25 μC", "0,04 μC", "52 μC", "50 C"],
    0,
    "Q = C·U = 2·50 = 100 μC.",
    "leicht",
    ["Kondensator", "Ladung"]
  ),
  q(
    "ph-pool-387",
    "phys-kap3",
    "Resonanz: Maximale Amplitude, wenn Erregerfrequenz … Eigenfrequenz.",
    ["kleiner als", "gleich", "größer als", "unabhängig von", "doppelt so groß wie"],
    1,
    "Resonanz bei f_Erreger = f_Eigen.",
    "leicht",
    ["Resonanz", "Frequenz"]
  ),
  q(
    "ph-pool-388",
    "phys-kap4",
    "Wasser siedet bei Normaldruck bei:",
    ["0 °C", "100 °C", "273 K", "373 K", "B und D sind richtig"],
    4,
    "100 °C = 373,15 K.",
    "leicht",
    ["Siedepunkt", "Wasser"]
  ),
  q(
    "ph-pool-389",
    "phys-kap1",
    "Potentielle Energie 200 J, Masse 5 kg (g ≈ 10 m/s²). Höhe h?",
    ["4 m", "40 m", "0,4 m", "20 m", "10 m"],
    0,
    "E = m·g·h → h = E/(m·g) = 200/(5·10) = 4 m.",
    "mittel",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-390",
    "phys-kap7",
    "Photoeffekt: Die maximale kinetische Energie der Photoelektronen hängt von der … des Lichts ab.",
    ["Intensität", "Frequenz", "Polarisation", "Dauer", "Quelle"],
    1,
    "E_kin,max = h·f − W_A; Frequenz f muss über Grenzfrequenz liegen.",
    "mittel",
    ["Photoeffekt", "Frequenz"]
  ),
  q(
    "ph-pool-391",
    "phys-kap5",
    "Strom I = 0,4 A, Zeit t = 30 s. Transportierte Ladung?",
    ["12 C", "0,013 C", "75 C", "120 C", "1,2 C"],
    0,
    "Q = I·t = 0,4·30 = 12 C.",
    "leicht",
    ["Ladung", "Strom"]
  ),
  q(
    "ph-pool-392",
    "phys-kap3",
    "Doppler: Quelle entfernt sich vom Beobachter. Wahrgenommene Frequenz …",
    ["höher", "niedriger", "gleich", "null", "doppelt"],
    1,
    "Quelle weg → niedrigere wahrgenommene Frequenz.",
    "leicht",
    ["Doppler", "Frequenz"]
  ),
  q(
    "ph-pool-393",
    "phys-kap4",
    "Spezifische Wärmekapazität c: Einheit?",
    ["J", "J/K", "J/(kg·K)", "kg/K", "W"],
    2,
    "c in J/(kg·K).",
    "leicht",
    ["spezifische Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-394",
    "phys-kap1",
    "Ein Auto (m = 1200 kg) bremst von 30 m/s auf 0 in 6 s. Bremskraft (durchschnittlich)?",
    ["6000 N", "200 N", "7200 N", "500 N", "3600 N"],
    0,
    "a = Δv/Δt = 30/6 = 5 m/s². F = m·a = 1200·5 = 6000 N.",
    "mittel",
    ["Bremskraft", "Beschleunigung"]
  ),
  q(
    "ph-pool-395",
    "phys-kap7",
    "Massendefekt Δm und Bindungsenergie E_B: E_B = …",
    ["Δm · c", "Δm · c²", "Δm / c²", "c² / Δm", "Δm + c"],
    1,
    "E_B = Δm · c² (Einstein).",
    "mittel",
    ["Massendefekt", "Bindungsenergie"]
  ),
  q(
    "ph-pool-396",
    "phys-kap5",
    "Einheit der elektrischen Feldstärke E:",
    ["N", "V", "V/m oder N/C", "C/m", "A/m"],
    2,
    "E = F/q → N/C = V/m.",
    "leicht",
    ["Feldstärke", "Einheit"]
  ),
  q(
    "ph-pool-397",
    "phys-kap3",
    "Stehende Welle: n-te Harmonische hat die Frequenz … der Grundfrequenz.",
    ["n-fache", "1/n", "n²", "√n", "2n"],
    0,
    "f_n = n · f_1 (n-te Harmonische).",
    "mittel",
    ["stehende Welle", "Harmonische"]
  ),
  q(
    "ph-pool-398",
    "phys-kap4",
    "Wärme Q fließt von Körper A (heiß) zu Körper B (kalt). Das entspricht dem … Hauptsatz.",
    ["ersten", "zweiten", "dritten", "nullten", "keinem"],
    1,
    "2. Hauptsatz: Wärme fließt spontan von heiß nach kalt.",
    "leicht",
    ["2. Hauptsatz", "Wärmefluss"]
  ),
  q(
    "ph-pool-399",
    "phys-kap1",
    "Geschwindigkeit 54 km/h in m/s?",
    ["15 m/s", "54 m/s", "5,4 m/s", "19,44 m/s", "3,6 m/s"],
    0,
    "54 km/h = 54/3,6 m/s = 15 m/s.",
    "leicht",
    ["Geschwindigkeit", "Umrechnung"]
  ),
  q(
    "ph-pool-400",
    "phys-kap7",
    "Kernfusion: Leichte Kerne … zu schwereren Kernen.",
    ["spalten", "verschmelzen", "zerstrahlen", "emittieren nur Neutronen", "kühlen ab"],
    1,
    "Fusion: leichte Kerne → schwererer Kern + Energie (z.B. Sonne).",
    "leicht",
    ["Kernfusion", "Kernphysik"]
  ),
];
