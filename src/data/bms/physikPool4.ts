/**
 * Physik-Pool Teil 4 — Fragen 151–200 (MedAT Typ K, Single Choice).
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

export const physikPool4: Question[] = [
  q(
    "ph-pool-151",
    "phys-kap1",
    "Welche SI-Basiseinheit gehört zur Stoffmenge?",
    ["kg", "mol", "cd", "A", "K"],
    1,
    "Stoffmenge n in Mol (mol).",
    "leicht",
    ["SI", "Stoffmenge"]
  ),
  q(
    "ph-pool-152",
    "phys-kap5",
    "Die Einheit Volt (V) ist äquivalent zu:",
    ["J · C", "J / C", "C / J", "A · Ω", "W · A"],
    1,
    "U = W/Q → V = J/C.",
    "leicht",
    ["Volt", "Spannung"]
  ),
  q(
    "ph-pool-153",
    "phys-kap3",
    "Ein Hertz (Hz) entspricht:",
    ["1 m/s", "1 s", "1/s", "1 J", "1 N"],
    2,
    "Frequenz f: 1 Hz = 1 Schwingung/s = 1/s.",
    "leicht",
    ["Hertz", "Frequenz"]
  ),
  q(
    "ph-pool-154",
    "phys-kap4",
    "Siedepunkt von Wasser bei Normaldruck:",
    ["0 °C", "100 °C", "273 K", "373 °C", "0 K"],
    1,
    "Bei 1013 hPa siedet Wasser bei 100 °C (373,15 K).",
    "leicht",
    ["Siedepunkt", "Wasser"]
  ),
  q(
    "ph-pool-155",
    "phys-kap1",
    "Welche Größe ist keine vektorielle Größe?",
    ["Kraft", "Geschwindigkeit", "Beschleunigung", "Druck", "Impuls"],
    3,
    "Druck ist ein Skalar (kraft/Fläche, keine Richtung).",
    "mittel",
    ["Vektor", "Skalar"]
  ),
  q(
    "ph-pool-156",
    "phys-kap7",
    "Welcher Zerfall ändert die Ordnungszahl Z um −1?",
    ["Alpha", "Beta-Minus", "Beta-Plus", "Gamma", "Neutronenemission"],
    2,
    "Beta-Plus: p → n + e⁺ + ν; Z nimmt um 1 ab.",
    "mittel",
    ["Beta-Plus", "Ordnungszahl"]
  ),
  q(
    "ph-pool-157",
    "phys-kap5",
    "Ohmsches Gesetz: U = R · I. Bei konstantem R gilt:",
    ["U proportional I", "U proportional 1/I", "U unabhängig von I", "U = R + I", "I = 0"],
    0,
    "U = R·I → bei konstantem R ist U proportional zu I.",
    "leicht",
    ["Ohmsches Gesetz"]
  ),
  q(
    "ph-pool-158",
    "phys-kap3",
    "Schallgeschwindigkeit in Wasser (typisch):",
    ["ca. 34 m/s", "ca. 340 m/s", "ca. 1500 m/s", "ca. 3000 m/s", "gleich wie in Luft"],
    2,
    "Schall in Wasser ca. 1500 m/s (größer als in Luft).",
    "mittel",
    ["Schall", "Wasser"]
  ),
  q(
    "ph-pool-159",
    "phys-kap1",
    "Einheit des Drehmoments:",
    ["J", "N·m", "W", "Pa", "Beide A und B können je nach Kontext verwendet werden"],
    1,
    "Drehmoment M = F·r, Einheit N·m (nicht Joule als Energie hier).",
    "mittel",
    ["Drehmoment", "Einheit"]
  ),
  q(
    "ph-pool-160",
    "phys-kap4",
    "Die absolute Temperatur T = 0 K entspricht:",
    ["0 °C", "−273,15 °C", "273,15 °C", "−100 °C", "100 °C"],
    1,
    "0 K = −273,15 °C (absoluter Nullpunkt).",
    "leicht",
    ["Kelvin", "Nullpunkt"]
  ),
  q(
    "ph-pool-161",
    "phys-kap5",
    "In einer Parallelschaltung von Widerständen ist die Spannung an jedem Widerstand:",
    [
      "unterschiedlich",
      "gleich (gleiche Spannung an allen)",
      "null",
      "proportional zum Widerstand",
      "gleich der Stromstärke",
    ],
    1,
    "Parallel: gleiche Spannung U an allen Zweigen.",
    "leicht",
    ["Parallelschaltung", "Spannung"]
  ),
  q(
    "ph-pool-162",
    "phys-kap1",
    "Ein 2-kg-Körper fällt 5 s lang (g ≈ 10 m/s²). Welche Geschwindigkeit hat er dann?",
    ["10 m/s", "50 m/s", "25 m/s", "5 m/s", "100 m/s"],
    1,
    "v = g·t = 10·5 = 50 m/s.",
    "leicht",
    ["freier Fall", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-163",
    "phys-kap7",
    "Die Äquivalentdosis (biologisch gewichtet) wird in … angegeben.",
    ["Gray", "Becquerel", "Sievert", "Coulomb", "Elektronenvolt"],
    2,
    "Sievert (Sv) = Äquivalentdosis; Gray (Gy) = Energiedosis.",
    "mittel",
    ["Sievert", "Dosis"]
  ),
  q(
    "ph-pool-164",
    "phys-kap3",
    "Bei Reflexion am ebenen Spiegel gilt:",
    [
      "Einfallswinkel = Reflexionswinkel",
      "Einfallswinkel = 90° − Reflexionswinkel",
      "Nur senkrechter Einfall",
      "Keine Reflexion",
      "Brechung immer dabei",
    ],
    0,
    "Reflexionsgesetz: Einfallswinkel = Ausfallswinkel.",
    "leicht",
    ["Reflexion", "Spiegel"]
  ),
  q(
    "ph-pool-165",
    "phys-kap5",
    "Ein Kondensator mit C = 10 μF wird auf U = 100 V geladen. Gespeicherte Ladung Q?",
    ["1 mC", "1 C", "0,1 C", "10 C", "100 μC"],
    0,
    "Q = C·U = 10·10⁻⁶ · 100 = 10⁻³ C = 1 mC.",
    "mittel",
    ["Kondensator", "Ladung"]
  ),
  q(
    "ph-pool-166",
    "phys-kap1",
    "Die Gewichtskraft eines Körpers auf dem Mond ist im Vergleich zur Erde:",
    ["gleich", "kleiner (geringere Fallbeschleunigung)", "größer", "null", "doppelt so groß"],
    1,
    "F_G = m·g; g_Mond ≈ 1,62 m/s² < g_Erde → kleinere Gewichtskraft.",
    "leicht",
    ["Gewichtskraft", "Mond"]
  ),
  q(
    "ph-pool-167",
    "phys-kap4",
    "Wärme Q und Temperaturdifferenz ΔT: Bei gleicher zugeführter Wärme erwärmt sich stärker:",
    [
      "der Körper mit größerer Masse",
      "der Körper mit kleinerer Masse",
      "immer gleich",
      "nur Flüssigkeiten",
      "nur Gase",
    ],
    1,
    "Q = m·c·ΔT → ΔT = Q/(m·c); kleinere Masse → größeres ΔT.",
    "mittel",
    ["Wärme", "Temperatur"]
  ),
  q(
    "ph-pool-168",
    "phys-kap7",
    "Ein Photon der Energie E hat die Wellenlänge λ (im Vakuum). Es gilt:",
    ["E ∝ λ", "E ∝ 1/λ", "E unabhängig von λ", "E ∝ λ²", "E = λ"],
    1,
    "E = h·f = h·c/λ → E proportional zu 1/λ.",
    "mittel",
    ["Photon", "Energie", "Wellenlänge"]
  ),
  q(
    "ph-pool-169",
    "phys-kap5",
    "Zwei Kondensatoren C₁ und C₂ in Reihe. Ersatzkapazität:",
    ["C₁ + C₂", "1/C_ers = 1/C₁ + 1/C₂", "C₁ · C₂", "C₁ = C₂", "C₁ − C₂"],
    1,
    "Reihe: 1/C_ers = 1/C₁ + 1/C₂ (wie Parallelschaltung bei R).",
    "mittel",
    ["Kondensator", "Reihenschaltung"]
  ),
  q(
    "ph-pool-170",
    "phys-kap1",
    "Ein Ball wird mit 20 m/s senkrecht nach oben geworfen. Höchster Punkt (g ≈ 10 m/s²)?",
    ["2 m", "20 m", "10 m", "40 m", "5 m"],
    1,
    "v² = 2gh → h = v²/(2g) = 400/20 = 20 m.",
    "mittel",
    ["Wurf", "Höhe"]
  ),
  q(
    "ph-pool-171",
    "phys-kap3",
    "Polarisation ist eine Eigenschaft von:",
    ["Longitudinalwellen", "Transversalwellen", "nur Schall", "nur Wasserwellen", "alle Wellen"],
    1,
    "Nur Transversalwellen können polarisiert werden (Schwingungsebene).",
    "mittel",
    ["Polarisation", "Transversalwelle"]
  ),
  q(
    "ph-pool-172",
    "phys-kap5",
    "Die elektrische Feldstärke E hat die Einheit:",
    ["N", "V/m oder N/C", "C", "V·m", "A/m"],
    1,
    "E = F/q → N/C = V/m.",
    "leicht",
    ["Feldstärke", "Einheit"]
  ),
  q(
    "ph-pool-173",
    "phys-kap4",
    "Ideales Gas: p·V = n·R·T. Bei konstanter Temperatur gilt:",
    ["p · V = const (Boyle-Mariotte)", "p / V = const", "p + V = const", "p = n·R", "V = 0"],
    0,
    "Isotherme: p·V = const (Boyle-Mariotte).",
    "mittel",
    ["ideales Gas", "Boyle-Mariotte"]
  ),
  q(
    "ph-pool-174",
    "phys-kap1",
    "Reibungskraft F_R und Normalkraft F_N: F_R = μ · F_N. μ heißt:",
    ["Masse", "Reibungskoeffizient", "Geschwindigkeit", "Weg", "Energie"],
    1,
    "μ = Reibungskoeffizient (dimensionslos), typisch 0,1–1.",
    "leicht",
    ["Reibung", "Reibungskoeffizient"]
  ),
  q(
    "ph-pool-175",
    "phys-kap7",
    "Welche Teilchen haben die kleinste Reichweite in Gewebe?",
    ["Gamma", "Beta", "Alpha", "Röntgen", "Neutronen"],
    2,
    "Alpha: sehr kurze Reichweite, hohe Ionisation.",
    "leicht",
    ["Alpha", "Reichweite"]
  ),
  q(
    "ph-pool-176",
    "phys-kap5",
    "Zwei Kondensatoren C₁, C₂ parallel. Ersatzkapazität:",
    ["C₁ + C₂", "1/C₁ + 1/C₂", "C₁ · C₂", "C₁ / C₂", "C₁ − C₂"],
    0,
    "Parallel: C_ers = C₁ + C₂ (Ladungen addieren sich bei gleichem U).",
    "mittel",
    ["Kondensator", "Parallelschaltung"]
  ),
  q(
    "ph-pool-177",
    "phys-kap1",
    "Die potentielle Energie im Gravitationsfeld nimmt zu, wenn:",
    [
      "der Körper schneller wird",
      "der Körper angehoben wird (Höhe zunimmt)",
      "die Masse abnimmt",
      "g abnimmt",
      "der Körper fällt",
    ],
    1,
    "E_pot = m·g·h; h größer → E_pot größer.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-178",
    "phys-kap3",
    "Beugung von Licht tritt auf, wenn:",
    [
      "Licht nur in Luft ist",
      "Licht auf ein Hindernis oder Spalt trifft (Größenordnung λ)",
      "nur bei Laserlicht",
      "die Temperatur hoch ist",
      "Licht reflektiert wird",
    ],
    1,
    "Beugung: Ablenkung an Spalten/Obstacles in der Größenordnung der Wellenlänge.",
    "mittel",
    ["Beugung", "Optik"]
  ),
  q(
    "ph-pool-179",
    "phys-kap4",
    "Der dritte Hauptsatz der Thermodynamik betrifft:",
    ["Energieerhaltung", "Entropie bei T → 0", "Wärmeübertragung", "Druck", "Volumen"],
    1,
    "3. Hauptsatz: Entropie S → 0 für T → 0 (Nernst).",
    "schwer",
    ["3. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-180",
    "phys-kap5",
    "Ein Amperemeter wird im Stromkreis:",
    [
      "parallel zum Verbraucher geschaltet",
      "in Reihe (in den Strompfad) geschaltet",
      "gar nicht geschaltet",
      "nur außerhalb",
      "parallel zur Spannungsquelle",
    ],
    1,
    "Strommessung: Amperemeter in Reihe, damit derselbe Strom durchfließt.",
    "mittel",
    ["Amperemeter", "Stromkreis"]
  ),
  q(
    "ph-pool-181",
    "phys-kap1",
    "Welche Arbeit verrichtet eine Kraft von 10 N über 5 m (Kraft in Wegrichtung)?",
    ["2 J", "50 J", "0,5 J", "15 J", "5 J"],
    1,
    "W = F·s = 10·5 = 50 J.",
    "leicht",
    ["Arbeit", "Joule"]
  ),
  q(
    "ph-pool-182",
    "phys-kap7",
    "Die Zerfallskonstante λ und die Halbwertszeit T½ hängen zusammen durch:",
    ["λ = T½", "λ · T½ = ln 2 ≈ 0,693", "λ = 1/T½ ohne Faktor", "T½ = λ²", "λ + T½ = 1"],
    1,
    "T½ = ln2/λ ≈ 0,693/λ → λ·T½ = ln2.",
    "mittel",
    ["Halbwertszeit", "Zerfallskonstante"]
  ),
  q(
    "ph-pool-183",
    "phys-kap3",
    "Der Brechungswinkel beim Übergang Luft → Glas (n_Glas > n_Luft):",
    [
      "größer als Einfallswinkel",
      "kleiner als Einfallswinkel (Strahl zum Lot hin)",
      "gleich Einfallswinkel",
      "immer 90°",
      "0°",
    ],
    1,
    "Optisch dichter (Glas): Brechung zum Lot hin → kleinerer Winkel.",
    "mittel",
    ["Brechung", "Snellius"]
  ),
  q(
    "ph-pool-184",
    "phys-kap5",
    "Die Kapazität eines Plattenkondensators steigt, wenn:",
    [
      "der Plattenabstand vergrößert wird",
      "die Plattenfläche vergrößert wird",
      "die Spannung erhöht wird",
      "die Ladung verringert wird",
      "nur das Material geändert wird",
    ],
    1,
    "C = ε₀·εᵣ·A/d; A größer oder d kleiner → C größer.",
    "mittel",
    ["Kondensator", "Kapazität"]
  ),
  q(
    "ph-pool-185",
    "phys-kap1",
    "Ein Zug fährt mit 72 km/h. Das sind in m/s:",
    ["20 m/s", "72 m/s", "2 m/s", "26 m/s", "10 m/s"],
    0,
    "72 km/h = 72/3,6 m/s = 20 m/s.",
    "leicht",
    ["Geschwindigkeit", "Umrechnung"]
  ),
  q(
    "ph-pool-186",
    "phys-kap4",
    "Wärme kann übertragen werden durch:",
    [
      "nur Leitung",
      "Leitung, Konvektion und Strahlung",
      "nur Konvektion",
      "nur Strahlung",
      "nur in Festkörpern",
    ],
    1,
    "Drei Mechanismen: Leitung, Konvektion, Wärmestrahlung.",
    "leicht",
    ["Wärmeübertragung"]
  ),
  q(
    "ph-pool-187",
    "phys-kap7",
    "Compton-Effekt zeigt:",
    [
      "nur Teilchennatur des Lichts",
      "Wellennatur des Lichts",
      "Photon verhält sich wie Teilchen (Impulsübertrag auf Elektron)",
      "keine Wechselwirkung",
      "nur bei sichtbarem Licht",
    ],
    2,
    "Compton: Streuung von Photonen an Elektronen, Impulsübertrag (Teilchennatur).",
    "schwer",
    ["Compton", "Photon"]
  ),
  q(
    "ph-pool-188",
    "phys-kap5",
    "Ein Voltmeter wird … geschaltet.",
    [
      "in Reihe zum Verbraucher",
      "parallel zum Verbraucher (zwischen den Punkten, zwischen denen U gemessen wird)",
      "in Reihe zur Quelle",
      "gar nicht",
      "seriell zum Amperemeter",
    ],
    1,
    "Spannungsmessung: Voltmeter parallel zum Bauteil (hoher Innenwiderstand).",
    "mittel",
    ["Voltmeter", "Schaltung"]
  ),
  q(
    "ph-pool-189",
    "phys-kap1",
    "Bei einer gleichmäßig beschleunigten Bewegung aus der Ruhe gilt für den Weg s nach Zeit t: s = (1/2)·a·t². Bei t = 2 s und a = 5 m/s²: s = ?",
    ["5 m", "10 m", "20 m", "2,5 m", "15 m"],
    1,
    "s = 0,5·5·4 = 10 m.",
    "leicht",
    ["Beschleunigung", "Weg"]
  ),
  q(
    "ph-pool-190",
    "phys-kap3",
    "Die Lichtgeschwindigkeit in Wasser ist … als im Vakuum.",
    ["größer", "kleiner (n_Wasser > 1)", "gleich", "doppelt so groß", "null"],
    1,
    "c_Medium = c_Vakuum/n; n > 1 → c_Medium < c_Vakuum.",
    "leicht",
    ["Lichtgeschwindigkeit", "Brechungsindex"]
  ),
  q(
    "ph-pool-191",
    "phys-kap4",
    "Schmelzpunkt von Eis bei Normaldruck:",
    ["100 °C", "0 °C", "273 °C", "−273 °C", "4 °C"],
    1,
    "0 °C = 273,15 K (Schmelzpunkt von Eis).",
    "leicht",
    ["Schmelzpunkt", "Eis"]
  ),
  q(
    "ph-pool-192",
    "phys-kap5",
    "Widerstand R und Leitwert G: G = 1/R. Einheit von G:",
    ["Ω", "Ω²", "S (Siemens)", "V/A", "A/V"],
    2,
    "Leitwert G in Siemens (S) = 1/Ω = A/V.",
    "mittel",
    ["Leitwert", "Siemens"]
  ),
  q(
    "ph-pool-193",
    "phys-kap1",
    "Impulserhaltung gilt in einem abgeschlossenen System:",
    [
      "nur bei Energieerhaltung",
      "immer (ohne äußere Kräfte)",
      "nur für schwere Körper",
      "nur in einer Dimension",
      "nur bei Reibung",
    ],
    1,
    "Ohne äußere Kräfte: Gesamtimpuls konstant (Impulserhaltungssatz).",
    "mittel",
    ["Impulserhaltung", "Mechanik"]
  ),
  q(
    "ph-pool-194",
    "phys-kap7",
    "Photoeffekt: Die kinetische Energie der herausgelösten Elektronen hängt ab von:",
    [
      "nur der Intensität des Lichts",
      "der Frequenz des Lichts (E_kin = h·f − W_A)",
      "nur der Wellenlänge geteilt durch c",
      "der Bestrahlungsdauer",
      "der Fläche der Kathode",
    ],
    1,
    "E_kin = h·f − W_A (Austrittsarbeit); Frequenz muss über Grenzfrequenz liegen.",
    "mittel",
    ["Photoeffekt", "Licht"]
  ),
  q(
    "ph-pool-195",
    "phys-kap3",
    "Ein Prisma zerlegt weißes Licht in Spektralfarben wegen:",
    [
      "Reflexion",
      "Dispersion (Brechungsindex abhängig von λ)",
      "Polarisation",
      "Interferenz",
      "Beugung",
    ],
    1,
    "Dispersion: n(λ) verschieden → verschiedene Ablenkung nach Wellenlänge.",
    "mittel",
    ["Dispersion", "Prisma"]
  ),
  q(
    "ph-pool-196",
    "phys-kap1",
    "Hebel: Kraft mal Kraftarm = Last mal Lastarm. Bei Lastarm = 2 · Kraftarm:",
    ["Kraft = 2 · Last", "Kraft = Last / 2", "Kraft = Last", "Kraft = 0", "Last = 0"],
    0,
    "F·d_F = G·d_G; d_G = 2·d_F → F = 2·G.",
    "mittel",
    ["Hebel", "Kraft"]
  ),
  q(
    "ph-pool-197",
    "phys-kap5",
    "Die Leistung P an einem Widerstand R bei Strom I ist:",
    ["P = I / R", "P = R / I", "P = R · I²", "P = I / R²", "P = R · I"],
    2,
    "P = U·I = R·I² (Ohmsches Gesetz eingesetzt).",
    "leicht",
    ["Leistung", "Widerstand"]
  ),
  q(
    "ph-pool-198",
    "phys-kap4",
    "Bei isochorer Erwärmung (V = const) eines idealen Gases:",
    [
      "bleibt der Druck konstant",
      "steigt der Druck",
      "sinkt der Druck",
      "bleibt die Temperatur konstant",
      "wird keine Wärme zugeführt",
    ],
    1,
    "V = const: p ∝ T (Gay-Lussac); Erwärmung → Druck steigt.",
    "mittel",
    ["isochor", "ideales Gas"]
  ),
  q(
    "ph-pool-199",
    "phys-kap7",
    "Die Ruheenergie eines Elektrons beträgt etwa:",
    ["0,511 keV", "0,511 MeV", "1,022 MeV", "9,1·10⁻³¹ J", "B und D sind richtig"],
    1,
    "E_0 = m_e·c² ≈ 0,511 MeV (Ruheenergie Elektron).",
    "mittel",
    ["Ruheenergie", "Elektron"]
  ),
  q(
    "ph-pool-200",
    "phys-kap1",
    "Ein 1000-kg-Auto bremst von 20 m/s auf 0 in 5 s. Durchschnittliche Bremskraft?",
    ["4000 N", "2000 N", "10000 N", "500 N", "200 N"],
    0,
    "a = Δv/Δt = 20/5 = 4 m/s². F = m·a = 1000·4 = 4000 N.",
    "mittel",
    ["Bremskraft", "Beschleunigung"]
  ),
];
