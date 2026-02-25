/**
 * Physik-Pool Teil 7 — Fragen 301–350 (MedAT Typ K, Single Choice).
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

export const physikPool7: Question[] = [
  q(
    "ph-pool-301",
    "phys-kap1",
    "Welche Einheit hat die Beschleunigung?",
    ["m/s", "m/s²", "N", "J", "kg"],
    1,
    "a = Δv/Δt → m/s².",
    "leicht",
    ["Beschleunigung", "Einheit"]
  ),
  q(
    "ph-pool-302",
    "phys-kap5",
    "Spannung U = 12 V, Strom I = 0,25 A. Widerstand R?",
    ["3 Ω", "48 Ω", "12 Ω", "0,25 Ω", "4 Ω"],
    1,
    "R = U/I = 12/0,25 = 48 Ω.",
    "leicht",
    ["Ohmsches Gesetz"]
  ),
  q(
    "ph-pool-303",
    "phys-kap3",
    "Lichtgeschwindigkeit in Glas (n ≈ 1,5):",
    ["größer als c im Vakuum", "c/1,5", "gleich c", "c·1,5", "null"],
    1,
    "c_Medium = c/n = c/1,5.",
    "leicht",
    ["Licht", "Brechungsindex"]
  ),
  q(
    "ph-pool-304",
    "phys-kap4",
    "Schmelzwärme von Eis (pro kg) ca.:",
    ["2257 kJ/kg", "334 kJ/kg", "4184 kJ/kg", "100 kJ/kg", "2,26 MJ/kg"],
    1,
    "Schmelzwärme Eis ca. 334 kJ/kg; Verdampfungswärme Wasser ca. 2257 kJ/kg.",
    "mittel",
    ["Schmelzwärme", "Eis"]
  ),
  q(
    "ph-pool-305",
    "phys-kap7",
    "Ein Kern mit Z = 8 und A = 16 hat … Neutronen.",
    ["8", "16", "24", "7", "9"],
    0,
    "N = A − Z = 16 − 8 = 8 (Sauerstoff-16).",
    "leicht",
    ["Neutronenzahl", "Kern"]
  ),
  q(
    "ph-pool-306",
    "phys-kap1",
    "Ein 3-kg-Körper wird mit 4 m/s² beschleunigt. Kraft?",
    ["12 N", "7 N", "0,75 N", "1,33 N", "4 N"],
    0,
    "F = m·a = 3·4 = 12 N.",
    "leicht",
    ["Kraft", "Newton"]
  ),
  q(
    "ph-pool-307",
    "phys-kap5",
    "Reihenschaltung: R₁ = 4 Ω, R₂ = 6 Ω. Ersatzwiderstand?",
    ["2,4 Ω", "10 Ω", "24 Ω", "5 Ω", "6 Ω"],
    1,
    "Reihe: R_ers = R₁ + R₂ = 10 Ω.",
    "leicht",
    ["Reihenschaltung"]
  ),
  q(
    "ph-pool-308",
    "phys-kap3",
    "Schall in Stahl (typisch): Geschwindigkeit … als in Luft.",
    ["kleiner", "größer", "gleich", "null", "halb"],
    1,
    "Festkörper: Schallgeschwindigkeit größer (z.B. Stahl ca. 5000 m/s).",
    "leicht",
    ["Schall", "Festkörper"]
  ),
  q(
    "ph-pool-309",
    "phys-kap4",
    "Isotherme Expansion eines idealen Gases: T konstant. Dann:",
    ["p·V = const", "p/V = const", "p + V = const", "ΔU ≠ 0", "Q = 0"],
    0,
    "Isotherm: T const → p·V = const (Boyle-Mariotte).",
    "mittel",
    ["isotherm", "ideales Gas"]
  ),
  q(
    "ph-pool-310",
    "phys-kap1",
    "Potentielle Energie E_pot = m·g·h. Einheit von E_pot?",
    ["N", "kg·m/s", "J (Joule)", "W", "Pa"],
    2,
    "Energie in Joule: J = N·m = kg·m²/s².",
    "leicht",
    ["Energie", "Joule"]
  ),
  q(
    "ph-pool-311",
    "phys-kap7",
    "Alpha-Teilchen haben … Ladung.",
    ["negative", "positive (+2e)", "keine", "variable", "negative (e)"],
    1,
    "Alpha = He-Kern: 2 Protonen → +2e.",
    "leicht",
    ["Alpha", "Ladung"]
  ),
  q(
    "ph-pool-312",
    "phys-kap5",
    "Zwei gleiche Ladungen q im Abstand r: Kraft F. Abstand wird 2r. Neue Kraft?",
    ["F", "2F", "F/2", "F/4", "4F"],
    3,
    "F ∝ 1/r² → r verdoppelt → F/4.",
    "mittel",
    ["Coulomb", "Abstand"]
  ),
  q(
    "ph-pool-313",
    "phys-kap3",
    "Wellenlänge λ = 400 nm. Frequenz (c ≈ 3·10⁸ m/s)?",
    ["7,5·10¹⁴ Hz", "1,33·10¹⁵ Hz", "400 Hz", "3·10⁸ Hz", "0,75·10¹⁴ Hz"],
    0,
    "f = c/λ = 3·10⁸/(400·10⁻⁹) = 7,5·10¹⁴ Hz.",
    "mittel",
    ["Frequenz", "Wellenlänge"]
  ),
  q(
    "ph-pool-314",
    "phys-kap4",
    "Erster Hauptsatz: ΔU = Q + W. Bei Wärmezufuhr (Q > 0) und Expansion (W < 0): ΔU kann … sein.",
    ["nur positiv", "positiv, negativ oder null", "nur negativ", "nur null", "nur größer als Q"],
    1,
    "ΔU = Q + W; je nach Betrag von W kann ΔU positiv, negativ oder null sein.",
    "mittel",
    ["1. Hauptsatz", "innere Energie"]
  ),
  q(
    "ph-pool-315",
    "phys-kap1",
    "Ein Wagen (m = 500 kg) wird von 10 m/s auf 20 m/s beschleunigt. Zunahme der kinetischen Energie?",
    ["75 kJ", "37,5 kJ", "150 kJ", "5 kJ", "100 kJ"],
    0,
    "ΔE = (1/2)·500·(20²−10²) = 250·300 = 75 000 J = 75 kJ.",
    "mittel",
    ["kinetische Energie", "Energieänderung"]
  ),
  q(
    "ph-pool-316",
    "phys-kap5",
    "Kondensator C = 5 μF, U = 200 V. Gespeicherte Energie?",
    ["1 J", "0,1 J", "100 J", "10 J", "0,01 J"],
    1,
    "W = (1/2)·C·U² = 0,5·5·10⁻⁶·40000 = 0,1 J.",
    "mittel",
    ["Kondensator", "Energie"]
  ),
  q(
    "ph-pool-317",
    "phys-kap7",
    "Gamma-Strahlung hat … Masse.",
    ["positive", "keine (Ruhemasse null)", "negative", "variable", "1 u"],
    1,
    "Photon (Gamma): Ruhemasse null.",
    "leicht",
    ["Gamma", "Photon", "Masse"]
  ),
  q(
    "ph-pool-318",
    "phys-kap3",
    "Stehende Welle: Abstand Knoten–Bauchen = …",
    ["λ", "λ/2", "λ/4", "2λ", "λ/8"],
    2,
    "Knoten–Bauchen = λ/4.",
    "mittel",
    ["stehende Welle", "Knoten", "Bauch"]
  ),
  q(
    "ph-pool-319",
    "phys-kap1",
    "Ein 2-kg-Ball fällt aus 5 m (g ≈ 10 m/s²). Aufprallgeschwindigkeit?",
    ["10 m/s", "ca. 10 m/s (√100)", "5 m/s", "2 m/s", "50 m/s"],
    1,
    "v = √(2gh) = √(2·10·5) = √100 = 10 m/s.",
    "leicht",
    ["freier Fall", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-320",
    "phys-kap5",
    "Leistung P = 120 W, Zeit t = 5 min. Verbrauchte Energie?",
    ["600 J", "36 kJ", "24 J", "600 Wh", "36 000 J"],
    1,
    "W = P·t = 120·300 = 36 000 J = 36 kJ.",
    "leicht",
    ["Energie", "Leistung", "Zeit"]
  ),
  q(
    "ph-pool-321",
    "phys-kap4",
    "Siedepunkt von Wasser bei vermindertem Druck (z.B. Höhe):",
    ["höher", "niedriger", "gleich", "null", "unabhängig"],
    1,
    "Siedepunkt sinkt mit sinkendem Druck (z.B. in großer Höhe).",
    "mittel",
    ["Siedepunkt", "Druck"]
  ),
  q(
    "ph-pool-322",
    "phys-kap7",
    "Halbwertszeit 8 h. Nach 24 h ist der Anteil noch nicht zerfallener Kerne etwa:",
    ["1/2", "1/4", "1/8", "1/16", "0"],
    2,
    "24 h = 3·T½ → (1/2)³ = 1/8.",
    "mittel",
    ["Halbwertszeit", "Zerfall"]
  ),
  q(
    "ph-pool-323",
    "phys-kap1",
    "Hebel: Last 100 N, Lastarm 0,5 m, Kraftarm 1 m. Erforderliche Kraft?",
    ["50 N", "200 N", "100 N", "25 N", "150 N"],
    0,
    "F·1 = 100·0,5 → F = 50 N.",
    "mittel",
    ["Hebel", "Drehmoment"]
  ),
  q(
    "ph-pool-324",
    "phys-kap5",
    "Widerstand R = 25 Ω an U = 50 V. Strom?",
    ["2 A", "0,5 A", "1,25 A", "75 A", "25 A"],
    0,
    "I = U/R = 50/25 = 2 A.",
    "leicht",
    ["Strom", "Ohmsches Gesetz"]
  ),
  q(
    "ph-pool-325",
    "phys-kap3",
    "Rotes Licht (λ ≈ 650 nm) hat … Energie pro Photon als blaues Licht (λ ≈ 450 nm).",
    ["größere", "kleinere", "gleiche", "doppelte", "halbe"],
    1,
    "E = h·c/λ; größeres λ → kleinere E.",
    "mittel",
    ["Photonenenergie", "Farbe"]
  ),
  q(
    "ph-pool-326",
    "phys-kap4",
    "Wärme Q = 1 kJ wird einem 1-kg-Wasserblock (c ≈ 4,2 kJ/(kg·K)) zugeführt. Temperaturerhöhung etwa?",
    ["0,24 K", "4,2 K", "1 K", "2,4 K", "0,1 K"],
    0,
    "ΔT = Q/(m·c) = 1/(1·4,2) ≈ 0,24 K.",
    "mittel",
    ["Wärme", "Temperaturerhöhung"]
  ),
  q(
    "ph-pool-327",
    "phys-kap1",
    "Impuls p = 20 kg·m/s, Masse m = 5 kg. Geschwindigkeit?",
    ["4 m/s", "100 m/s", "25 m/s", "0,25 m/s", "15 m/s"],
    0,
    "v = p/m = 20/5 = 4 m/s.",
    "leicht",
    ["Impuls", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-328",
    "phys-kap7",
    "Beta-Minus-Teilchen sind …",
    ["Heliumkerne", "Elektronen", "Photonen", "Neutronen", "Protonen"],
    1,
    "Beta-Minus = Elektron (e⁻), aus Neutronzerfall.",
    "leicht",
    ["Beta-Minus", "Elektron"]
  ),
  q(
    "ph-pool-329",
    "phys-kap5",
    "Parallel: R₁ = 10 Ω, R₂ = 10 Ω. R_ers?",
    ["20 Ω", "5 Ω", "10 Ω", "100 Ω", "1 Ω"],
    1,
    "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω.",
    "leicht",
    ["Parallelschaltung"]
  ),
  q(
    "ph-pool-330",
    "phys-kap3",
    "Schallpegel 60 dB. Verzehnfachung der Intensität → ca. … dB.",
    ["60", "70", "80", "66", "600"],
    1,
    "Faktor 10 → +10 dB; 60 + 10 = 70 dB.",
    "mittel",
    ["Dezibel", "Intensität"]
  ),
  q(
    "ph-pool-331",
    "phys-kap1",
    "Arbeit W = 500 J in 10 s. Durchschnittsleistung?",
    ["50 W", "5000 W", "5 W", "0,02 W", "510 W"],
    0,
    "P = W/t = 500/10 = 50 W.",
    "leicht",
    ["Leistung", "Arbeit"]
  ),
  q(
    "ph-pool-332",
    "phys-kap4",
    "Adiabatische Kompression: Temperatur …",
    ["bleibt gleich", "sinkt", "steigt", "wird null", "ist konstant"],
    2,
    "Adiabatische Kompression: T steigt (kein Wärmeabfluss).",
    "mittel",
    ["adiabatisch", "Kompression"]
  ),
  q(
    "ph-pool-333",
    "phys-kap7",
    "Bindungsenergie pro Nukleon ist bei mittelschweren Kernen am …",
    ["kleinsten", "größten", "gleich wie bei Uran", "null", "negativ"],
    1,
    "Maximum bei mittleren Massenzahlen (um Eisen); leichte und schwere Kerne haben geringere B/A.",
    "schwer",
    ["Bindungsenergie", "Nukleon"]
  ),
  q(
    "ph-pool-334",
    "phys-kap5",
    "Spannung U = 24 V, Strom I = 3 A. Leistung?",
    ["8 W", "72 W", "27 W", "24 W", "3 W"],
    1,
    "P = U·I = 24·3 = 72 W.",
    "leicht",
    ["Leistung", "Strom", "Spannung"]
  ),
  q(
    "ph-pool-335",
    "phys-kap1",
    "Ein Körper (m = 4 kg) hat v = 3 m/s. Kinetische Energie?",
    ["18 J", "6 J", "12 J", "36 J", "4 J"],
    0,
    "E = (1/2)·4·9 = 18 J.",
    "leicht",
    ["kinetische Energie"]
  ),
  q(
    "ph-pool-336",
    "phys-kap3",
    "Totalreflexion: Grenzwinkel Luft–Wasser (n_Wasser ≈ 1,33)?",
    ["90°", "ca. 48,6°", "0°", "45°", "60°"],
    1,
    "sin(α_g) = n_Luft/n_Wasser = 1/1,33 → α_g ≈ 48,6°.",
    "schwer",
    ["Totalreflexion", "Grenzwinkel"]
  ),
  q(
    "ph-pool-337",
    "phys-kap4",
    "Ideales Gas: p verdoppelt, T konstant. Volumen:",
    ["verdoppelt sich", "halbiert sich", "bleibt gleich", "vierfach", "null"],
    1,
    "p·V = const → p verdoppelt → V halbiert.",
    "leicht",
    ["ideales Gas", "Boyle-Mariotte"]
  ),
  q(
    "ph-pool-338",
    "phys-kap5",
    "Ladung Q = 2 C wird durch U = 6 V bewegt. Verrichtete Arbeit?",
    ["12 J", "3 J", "8 J", "0,33 J", "6 J"],
    0,
    "W = U·Q = 6·2 = 12 J.",
    "leicht",
    ["elektrische Arbeit", "Spannung"]
  ),
  q(
    "ph-pool-339",
    "phys-kap1",
    "Fallzeit aus 20 m Höhe (g ≈ 10 m/s²)?",
    ["2 s", "4 s", "√2 s", "10 s", "1 s"],
    0,
    "s = (1/2)gt² → t = √(2s/g) = √(40/10) = 2 s.",
    "mittel",
    ["freier Fall", "Fallzeit"]
  ),
  q(
    "ph-pool-340",
    "phys-kap7",
    "Kernspaltung: Ein schwerer Kern … in leichtere Kerne.",
    ["fusioniert", "spaltet sich", "zerstrahlt", "emittiert nur Elektronen", "ändert sich nicht"],
    1,
    "Kernspaltung: schwerer Kern → leichtere Bruchstücke + Neutronen + Energie.",
    "leicht",
    ["Kernspaltung", "Kernphysik"]
  ),
  q(
    "ph-pool-341",
    "phys-kap5",
    "Einheit des elektrischen Widerstands:",
    ["V", "A", "Ω", "C", "F"],
    2,
    "R in Ohm (Ω) = V/A.",
    "leicht",
    ["Widerstand", "Ohm"]
  ),
  q(
    "ph-pool-342",
    "phys-kap3",
    "Frequenz 50 Hz. Periode?",
    ["0,02 s", "50 s", "20 s", "0,2 s", "5 s"],
    0,
    "T = 1/f = 1/50 = 0,02 s.",
    "leicht",
    ["Periode", "Frequenz"]
  ),
  q(
    "ph-pool-343",
    "phys-kap4",
    "Wärmekapazität C = Q/ΔT. Einheit?",
    ["J/K", "J/(kg·K)", "nur J", "K/J", "W/K"],
    0,
    "C = Q/ΔT → J/K (für Gesamtkörper); spezifisch: J/(kg·K).",
    "mittel",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-344",
    "phys-kap1",
    "Gewichtskraft 80-kg-Person (g ≈ 10 m/s²)?",
    ["80 N", "800 N", "8 N", "80 kg", "160 N"],
    1,
    "F_G = m·g = 80·10 = 800 N.",
    "leicht",
    ["Gewichtskraft"]
  ),
  q(
    "ph-pool-345",
    "phys-kap7",
    "Röntgen: Wellenlänge typisch im Bereich …",
    ["m", "cm", "nm bis pm", "km", "μm"],
    2,
    "Röntgen: λ etwa 10 nm bis 10 pm.",
    "mittel",
    ["Röntgen", "Wellenlänge"]
  ),
  q(
    "ph-pool-346",
    "phys-kap5",
    "Kondensatoren parallel: C₁ = 2 μF, C₂ = 3 μF. C_ers?",
    ["1,2 μF", "5 μF", "6 μF", "0,83 μF", "2,5 μF"],
    1,
    "Parallel: C_ers = C₁ + C₂ = 5 μF.",
    "leicht",
    ["Kondensator", "Parallel"]
  ),
  q(
    "ph-pool-347",
    "phys-kap1",
    "Geschwindigkeit 18 km/h in m/s?",
    ["5 m/s", "18 m/s", "1,8 m/s", "50 m/s", "6 m/s"],
    0,
    "18 km/h = 18/3,6 m/s = 5 m/s.",
    "leicht",
    ["Geschwindigkeit", "Umrechnung"]
  ),
  q(
    "ph-pool-348",
    "phys-kap3",
    "Schallgeschwindigkeit in Luft bei 0 °C etwa:",
    ["330 m/s", "343 m/s", "300 m/s", "400 m/s", "273 m/s"],
    0,
    "Bei 0 °C ca. 331 m/s; bei 20 °C ca. 343 m/s.",
    "mittel",
    ["Schall", "Luft", "Temperatur"]
  ),
  q(
    "ph-pool-349",
    "phys-kap4",
    "Verdampfungswärme von Wasser (pro kg) ca.:",
    ["334 kJ/kg", "2257 kJ/kg", "4184 kJ/kg", "100 kJ/kg", "2 kJ/kg"],
    1,
    "Verdampfungswärme Wasser ca. 2257 kJ/kg.",
    "mittel",
    ["Verdampfungswärme", "Wasser"]
  ),
  q(
    "ph-pool-350",
    "phys-kap7",
    "Ein Photon mit 2 eV Energie. Wellenlänge (h·c ≈ 1240 eV·nm)?",
    ["620 nm", "2480 nm", "1240 nm", "2 nm", "500 nm"],
    0,
    "λ = h·c/E = 1240/2 = 620 nm.",
    "mittel",
    ["Photon", "Wellenlänge", "eV"]
  ),
];
