/**
 * Physik-Pool Teil 10 — Fragen 451–500 (MedAT Typ K, Single Choice).
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

export const physikPool10: Question[] = [
  q(
    "ph-pool-451",
    "phys-kap1",
    "Joule (J) = … in Basiseinheiten.",
    ["kg·m/s²", "kg·m²/s²", "kg·m/s", "N·s", "W·s"],
    1,
    "J = N·m = kg·m²/s².",
    "mittel",
    ["Joule", "Basiseinheiten"]
  ),
  q(
    "ph-pool-452",
    "phys-kap5",
    "U = 6 V, I = 1,5 A. R?",
    ["4 Ω", "9 Ω", "0,25 Ω", "7,5 Ω", "6 Ω"],
    0,
    "R = U/I = 6/1,5 = 4 Ω.",
    "leicht",
    ["Widerstand", "Ohm"]
  ),
  q(
    "ph-pool-453",
    "phys-kap3",
    "f = 250 Hz, c = 340 m/s (Schall). λ?",
    ["1,36 m", "0,736 m", "85 m", "250 m", "0,34 m"],
    0,
    "λ = c/f = 340/250 = 1,36 m.",
    "leicht",
    ["Wellenlänge", "Schall"]
  ),
  q(
    "ph-pool-454",
    "phys-kap4",
    "Wasser: Dichte bei 4 °C … als bei 0 °C (flüssig).",
    ["kleiner", "größer (Maximum)", "gleich", "null", "halb"],
    1,
    "Anomalie des Wassers: Dichtemaximum bei ca. 4 °C.",
    "mittel",
    ["Wasser", "Dichte", "Anomalie"]
  ),
  q(
    "ph-pool-455",
    "phys-kap7",
    "Elektron: Ruhemasse ≈ … kg.",
    ["9,1·10⁻³¹", "1,67·10⁻²⁷", "0", "1,6·10⁻¹⁹", "9,1·10⁻²⁸"],
    0,
    "m_e ≈ 9,1·10⁻³¹ kg.",
    "mittel",
    ["Elektron", "Masse"]
  ),
  q(
    "ph-pool-456",
    "phys-kap1",
    "s = 45 m, t = 9 s. v (Durchschnitt)?",
    ["5 m/s", "405 m/s", "0,2 m/s", "54 m/s", "36 m/s"],
    0,
    "v = s/t = 45/9 = 5 m/s.",
    "leicht",
    ["Geschwindigkeit"]
  ),
  q(
    "ph-pool-457",
    "phys-kap5",
    "Reihe: U gesamt 24 V, R₁ = 5 Ω, R₂ = 7 Ω. U an R₁?",
    ["10 V", "14 V", "24 V", "5 V", "12 V"],
    0,
    "I = 24/12 = 2 A, U₁ = 5·2 = 10 V.",
    "mittel",
    ["Reihenschaltung", "Spannungsteiler"]
  ),
  q(
    "ph-pool-458",
    "phys-kap3",
    "Licht: n_Luft ≈ 1, n_Glas ≈ 1,5. Grenzwinkel Glas → Luft?",
    ["90°", "ca. 41,8°", "0°", "60°", "30°"],
    1,
    "sin(α_g) = n_Luft/n_Glas = 1/1,5 → α_g ≈ 41,8°.",
    "schwer",
    ["Totalreflexion", "Grenzwinkel"]
  ),
  q(
    "ph-pool-459",
    "phys-kap4",
    "p·V = n·R·T. R (allgemeine Gaskonstante) ≈ … J/(mol·K).",
    ["0,082", "8,31", "1", "273", "22,4"],
    1,
    "R ≈ 8,314 J/(mol·K).",
    "leicht",
    ["Gaskonstante", "R"]
  ),
  q(
    "ph-pool-460",
    "phys-kap1",
    "m = 2 kg, E_kin = 16 J. v?",
    ["4 m/s", "8 m/s", "2 m/s", "32 m/s", "6 m/s"],
    0,
    "v = √(2E/m) = √(32/2) = 4 m/s.",
    "leicht",
    ["kinetische Energie", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-461",
    "phys-kap7",
    "Alpha-Teilchen = …",
    ["Elektron", "Heliumkern (²⁴He)", "Proton", "Neutron", "Photon"],
    1,
    "Alpha = Heliumkern (2p + 2n).",
    "leicht",
    ["Alpha", "Heliumkern"]
  ),
  q(
    "ph-pool-462",
    "phys-kap5",
    "Parallel: R₁ = 4 Ω, R₂ = 12 Ω. R_ers?",
    ["3 Ω", "16 Ω", "8 Ω", "48 Ω", "2 Ω"],
    0,
    "1/R = 1/4 + 1/12 = 1/3 → R = 3 Ω.",
    "mittel",
    ["Parallelschaltung"]
  ),
  q(
    "ph-pool-463",
    "phys-kap3",
    "Reflexion: Einfallswinkel 45°. Reflexionswinkel?",
    ["45°", "90°", "0°", "135°", "22,5°"],
    0,
    "Einfallswinkel = Reflexionswinkel.",
    "leicht",
    ["Reflexion"]
  ),
  q(
    "ph-pool-464",
    "phys-kap4",
    "Schmelzen: Temperatur … (bei konstantem Druck).",
    ["steigt", "bleibt konstant (Schmelzpunkt)", "sinkt", "wird null", "ist unbestimmt"],
    1,
    "Phasenübergang: T = Schmelzpunkt konstant.",
    "leicht",
    ["Schmelzen", "Schmelzpunkt"]
  ),
  q(
    "ph-pool-465",
    "phys-kap1",
    "F_G = 588 N, g = 9,8 m/s². m?",
    ["60 kg", "5762 kg", "0,017 kg", "598 kg", "58 kg"],
    0,
    "m = F_G/g = 588/9,8 = 60 kg.",
    "leicht",
    ["Gewichtskraft", "Masse"]
  ),
  q(
    "ph-pool-466",
    "phys-kap7",
    "Photonenenergie E = h·f. h = Planck-Konstante. Einheit von h?",
    ["J", "J·s", "J/s", "s", "Hz"],
    1,
    "E = h·f → [h] = J·s.",
    "mittel",
    ["Planck-Konstante", "Einheit"]
  ),
  q(
    "ph-pool-467",
    "phys-kap5",
    "P = 150 W, t = 20 s. W?",
    ["3000 J", "7,5 J", "170 J", "0,133 J", "130 J"],
    0,
    "W = P·t = 150·20 = 3000 J.",
    "leicht",
    ["Energie", "Leistung"]
  ),
  q(
    "ph-pool-468",
    "phys-kap3",
    "Frequenz 400 Hz. Periode in ms?",
    ["2,5 ms", "400 ms", "0,25 ms", "4 ms", "25 ms"],
    0,
    "T = 1/f = 1/400 s = 2,5 ms.",
    "leicht",
    ["Periode", "Frequenz"]
  ),
  q(
    "ph-pool-469",
    "phys-kap4",
    "100 °C = ? K",
    ["373,15 K", "273,15 K", "100 K", "0 K", "173 K"],
    0,
    "100 °C = 373,15 K.",
    "leicht",
    ["Kelvin", "Celsius"]
  ),
  q(
    "ph-pool-470",
    "phys-kap1",
    "a = 3 m/s², t = 4 s (aus Ruhe). v?",
    ["12 m/s", "6 m/s", "24 m/s", "1,33 m/s", "7 m/s"],
    0,
    "v = a·t = 3·4 = 12 m/s.",
    "leicht",
    ["Beschleunigung", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-471",
    "phys-kap7",
    "T½ = 4 h. Nach 12 h: Anteil noch vorhanden?",
    ["1/2", "1/4", "1/8", "1/16", "0"],
    2,
    "12 h = 3·T½ → (1/2)³ = 1/8.",
    "mittel",
    ["Halbwertszeit"]
  ),
  q(
    "ph-pool-472",
    "phys-kap5",
    "Q = 5 C, U = 10 V. W?",
    ["50 J", "2 J", "15 J", "0,5 J", "5 J"],
    0,
    "W = U·Q = 10·5 = 50 J.",
    "leicht",
    ["elektrische Arbeit"]
  ),
  q(
    "ph-pool-473",
    "phys-kap3",
    "Lichtgeschwindigkeit im Vakuum (genähert):",
    ["3·10⁵ km/s", "3·10⁸ m/s", "3·10⁶ m/s", "3·10¹⁰ cm/s", "3·10⁸ m/s bzw. 3·10⁵ km/s"],
    1,
    "c ≈ 3·10⁸ m/s = 3·10⁵ km/s.",
    "leicht",
    ["Lichtgeschwindigkeit"]
  ),
  q(
    "ph-pool-474",
    "phys-kap4",
    "Konvektion = Wärmetransport durch …",
    ["Photonen", "bewegte Materie", "nur Leitung", "nur Strahlung", "Druckwelle"],
    1,
    "Konvektion: strömendes Medium transportiert Wärme.",
    "leicht",
    ["Konvektion"]
  ),
  q(
    "ph-pool-475",
    "phys-kap1",
    "p = 20 kg·m/s, m = 4 kg. v?",
    ["5 m/s", "80 m/s", "0,2 m/s", "24 m/s", "16 m/s"],
    0,
    "v = p/m = 20/4 = 5 m/s.",
    "leicht",
    ["Impuls", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-476",
    "phys-kap7",
    "Positron (e⁺) hat … Ladung wie das Elektron (e⁻), aber … Vorzeichen.",
    [
      "gleiche, gleiches",
      "gleiche, entgegengesetztes (+e)",
      "kleinere, gleiches",
      "größere, entgegengesetztes",
      "keine, kein",
    ],
    1,
    "Positron: +e, Elektron: −e (gleicher Betrag, entgegengesetzt).",
    "mittel",
    ["Positron", "Elektron", "Ladung"]
  ),
  q(
    "ph-pool-477",
    "phys-kap5",
    "C = 20 μF, U = 50 V. W?",
    ["0,025 J", "25 J", "1 J", "0,5 J", "500 J"],
    0,
    "W = (1/2)·20·10⁻⁶·2500 = 0,025 J.",
    "mittel",
    ["Kondensator", "Energie"]
  ),
  q(
    "ph-pool-478",
    "phys-kap3",
    "Schall in Stahl (typisch) … als in Luft.",
    ["langsamer", "schneller", "gleich schnell", "nicht ausbreitend", "nur bei 0 °C schneller"],
    1,
    "Festkörper: Schall schneller (Stahl ca. 5000 m/s).",
    "leicht",
    ["Schall", "Festkörper"]
  ),
  q(
    "ph-pool-479",
    "phys-kap4",
    "Zustandsgröße ist …",
    ["Wärme Q", "Arbeit W", "innere Energie U", "alle", "keine"],
    2,
    "U (und p, V, T) sind Zustandsgrößen; Q, W sind Prozessgrößen.",
    "mittel",
    ["Zustandsgröße", "Thermodynamik"]
  ),
  q(
    "ph-pool-480",
    "phys-kap1",
    "W = 360 J, F = 45 N. Weg s?",
    ["8 m", "405 m", "0,125 m", "315 m", "16 m"],
    0,
    "s = W/F = 360/45 = 8 m.",
    "leicht",
    ["Arbeit", "Kraft", "Weg"]
  ),
  q(
    "ph-pool-481",
    "phys-kap7",
    "Ordnungszahl Z = Anzahl … im Kern.",
    ["Neutronen", "Protonen", "Nukleonen", "Elektronen", "Photonen"],
    1,
    "Z = Protonenzahl = Ordnungszahl.",
    "leicht",
    ["Ordnungszahl", "Protonen"]
  ),
  q(
    "ph-pool-482",
    "phys-kap5",
    "R = 12 Ω, I = 2 A. U?",
    ["24 V", "6 V", "14 V", "0,167 V", "10 V"],
    0,
    "U = R·I = 12·2 = 24 V.",
    "leicht",
    ["Spannung", "Ohm"]
  ),
  q(
    "ph-pool-483",
    "phys-kap3",
    "λ = 700 nm (sichtbar). Farbe?",
    ["blau", "grün", "rot", "UV", "IR"],
    2,
    "700 nm = rot (langwelliges Ende des sichtbaren Spektrums).",
    "leicht",
    ["Wellenlänge", "Farbe"]
  ),
  q(
    "ph-pool-484",
    "phys-kap4",
    "Verdampfungswärme (pro kg) … Schmelzwärme (pro kg) bei Wasser.",
    ["kleiner als", "größer als", "gleich", "unabhängig von", "halb"],
    1,
    "Verdampfungswärme ca. 2257 kJ/kg > Schmelzwärme ca. 334 kJ/kg.",
    "mittel",
    ["Verdampfung", "Schmelzen"]
  ),
  q(
    "ph-pool-485",
    "phys-kap1",
    "g = 10 m/s². Fallweg in 2 s (aus Ruhe)?",
    ["20 m", "10 m", "40 m", "5 m", "2 m"],
    0,
    "s = (1/2)·10·4 = 20 m.",
    "leicht",
    ["freier Fall", "Weg"]
  ),
  q(
    "ph-pool-486",
    "phys-kap7",
    "Becquerel (Bq) = …",
    ["1 J/kg", "1 Zerfall/s", "1 C/kg", "1 eV", "1 Sv"],
    1,
    "1 Bq = 1 Zerfall pro Sekunde (Aktivität).",
    "leicht",
    ["Becquerel", "Aktivität"]
  ),
  q(
    "ph-pool-487",
    "phys-kap5",
    "Zwei Ladungen, Abstand verdoppelt. Coulomb-Kraft?",
    ["verdoppelt", "halbiert", "geviertelt", "vervierfacht", "gleich"],
    2,
    "F ∝ 1/r²; r verdoppelt → F auf 1/4.",
    "mittel",
    ["Coulomb", "Abstand"]
  ),
  q(
    "ph-pool-488",
    "phys-kap3",
    "2. Harmonische: Frequenz = … · Grundfrequenz.",
    ["1/2", "2", "1", "4", "√2"],
    1,
    "f_n = n·f₁; 2. Harmonische: f₂ = 2·f₁.",
    "leicht",
    ["Harmonische", "Frequenz"]
  ),
  q(
    "ph-pool-489",
    "phys-kap4",
    "Isochor = … konstant.",
    ["Druck", "Volumen", "Temperatur", "Entropie", "Energie"],
    1,
    "Isochor: V = const.",
    "leicht",
    ["isochor", "Volumen"]
  ),
  q(
    "ph-pool-490",
    "phys-kap1",
    "E_pot = 120 J, m = 6 kg, g = 10 m/s². h?",
    ["2 m", "20 m", "0,5 m", "72 m", "12 m"],
    0,
    "h = E/(m·g) = 120/(6·10) = 2 m.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-491",
    "phys-kap7",
    "Kern mit A = 16, Z = 8. Wie viele Neutronen?",
    ["8", "16", "24", "0", "7"],
    0,
    "N = A − Z = 16 − 8 = 8 (Sauerstoff-16).",
    "leicht",
    ["Neutronenzahl", "Kern"]
  ),
  q(
    "ph-pool-492",
    "phys-kap5",
    "Leistung 2 kW, Zeit 30 min. Energie (kWh)?",
    ["1 kWh", "60 kWh", "0,5 kWh", "2 kWh", "900 kWh"],
    0,
    "W = 2 kW · 0,5 h = 1 kWh.",
    "leicht",
    ["Energie", "kWh"]
  ),
  q(
    "ph-pool-493",
    "phys-kap3",
    "Brechung: Einfallswinkel 30°, n₁ = 1, n₂ = 1,5. Brechungswinkel … 30°.",
    ["größer als", "kleiner als", "gleich", "90°", "0°"],
    1,
    "Optisch dichter (n₂ > n₁): Brechung zum Lot → kleinerer Winkel.",
    "mittel",
    ["Brechung", "Snellius"]
  ),
  q(
    "ph-pool-494",
    "phys-kap4",
    "Adiabatische Expansion: Temperatur …",
    ["steigt", "sinkt", "bleibt gleich", "wird null", "ist unbestimmt"],
    1,
    "Adiabatische Expansion: T sinkt (Arbeit nach außen, keine Wärmezufuhr).",
    "mittel",
    ["adiabatisch", "Expansion"]
  ),
  q(
    "ph-pool-495",
    "phys-kap1",
    "v = 90 km/h in m/s?",
    ["25 m/s", "90 m/s", "324 m/s", "3,6 m/s", "15 m/s"],
    0,
    "90 km/h = 90/3,6 = 25 m/s.",
    "leicht",
    ["Geschwindigkeit", "Umrechnung"]
  ),
  q(
    "ph-pool-496",
    "phys-kap7",
    "Äquivalentdosis (Strahlenschutz) in …",
    ["Gray", "Becquerel", "Sievert", "Coulomb", "Joule"],
    2,
    "Sievert (Sv) = Äquivalentdosis (biologisch gewichtet).",
    "leicht",
    ["Sievert", "Äquivalentdosis"]
  ),
  q(
    "ph-pool-497",
    "phys-kap5",
    "Kondensator C = 8 μF, U = 25 V. Q?",
    ["200 μC", "3,125 μC", "0,032 μC", "33 μC", "25 C"],
    0,
    "Q = C·U = 8·25 = 200 μC.",
    "leicht",
    ["Kondensator", "Ladung"]
  ),
  q(
    "ph-pool-498",
    "phys-kap3",
    "Intensität I. Verdoppelte Amplitude → I …",
    ["verdoppelt", "vervierfacht", "halbiert", "gleich", "verachtfacht"],
    1,
    "I ∝ A² → A verdoppelt → I vervierfacht.",
    "mittel",
    ["Intensität", "Amplitude"]
  ),
  q(
    "ph-pool-499",
    "phys-kap4",
    "Siedepunkt Wasser bei 2000 m Höhe … als bei Meeresspiegel.",
    ["höher", "niedriger", "gleich", "doppelt", "halb"],
    1,
    "Geringerer Druck in der Höhe → niedrigerer Siedepunkt.",
    "mittel",
    ["Siedepunkt", "Höhe"]
  ),
  q(
    "ph-pool-500",
    "phys-kap1",
    "F = 24 N, m = 6 kg. Beschleunigung a?",
    ["4 m/s²", "144 m/s²", "0,25 m/s²", "18 m/s²", "30 m/s²"],
    0,
    "a = F/m = 24/6 = 4 m/s².",
    "leicht",
    ["Beschleunigung", "Kraft"]
  ),
];
