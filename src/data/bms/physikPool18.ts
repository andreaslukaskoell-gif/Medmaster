/**
 * Physik BMS Pool 18 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
 * Stoff: phys-kap1, phys-kap3, phys-kap4, phys-kap5, phys-kap7 (Mechanik, Wellen, Wärme, E-Lehre & Optik, Atomphysik).
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

const KAP = ["phys-kap1", "phys-kap3", "phys-kap4", "phys-kap5", "phys-kap7"] as const;

export const physikPool18: Question[] = [
  q(
    "ph-pool-18-001",
    KAP[0],
    "Welche Größe hat die SI-Einheit Ampere (A)?",
    ["Spannung", "Stromstärke", "Widerstand", "Ladung", "Leistung"],
    1,
    "Ampere ist die SI-Basiseinheit der elektrischen Stromstärke.",
    "leicht",
    ["SI", "Ampere"]
  ),
  q(
    "ph-pool-18-002",
    KAP[1],
    "Die Ausbreitungsgeschwindigkeit c einer Welle im Medium hängt mit der Wellenlänge λ und der Frequenz f zusammen durch:",
    ["c = λ + f", "c = λ · f", "c = λ − f", "c = f/λ", "c = λ²·f"],
    1,
    "c = λ·f (gilt in jedem Medium).",
    "leicht",
    ["Ausbreitungsgeschwindigkeit", "Welle"]
  ),
  q(
    "ph-pool-18-003",
    KAP[2],
    "Der Schmelzpunkt von Eis bei Normaldruck liegt bei:",
    ["0 K", "0 °C", "100 °C", "273 °C", "−273 °C"],
    1,
    "Schmelzpunkt von Eis: 0 °C (273,15 K).",
    "leicht",
    ["Schmelzpunkt", "Eis"]
  ),
  q(
    "ph-pool-18-004",
    KAP[3],
    "Zwei Widerstände R₁ und R₂ in Reihe haben den Ersatzwiderstand:",
    ["R₁·R₂", "R₁ + R₂", "1/R₁ + 1/R₂", "R₁/R₂", "kleiner als R₁"],
    1,
    "Reihenschaltung: R_ges = R₁ + R₂.",
    "leicht",
    ["Reihenschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-18-005",
    KAP[4],
    "Die Einheit Sievert (Sv) dient zur Angabe der:",
    [
      "Aktivität",
      "Energiedosis",
      "Äquivalentdosis (Strahlenbelastung)",
      "Halbwertszeit",
      "Reichweite",
    ],
    2,
    "Sievert: Äquivalentdosis (biologisch gewichtet).",
    "leicht",
    ["Sievert", "Strahlenmessung"]
  ),
  q(
    "ph-pool-18-006",
    KAP[0],
    "Der Weg s bei gleichmäßig beschleunigter Bewegung aus der Ruhe (Beschleunigung a, Zeit t) beträgt:",
    ["s = a·t", "s = ½·a·t²", "s = a/t", "s = v·t nur bei v=const", "s = a²·t"],
    1,
    "s = ½·a·t² bei v₀ = 0.",
    "leicht",
    ["Bewegungsgleichung", "Weg"]
  ),
  q(
    "ph-pool-18-007",
    KAP[1],
    "Ein Infraschall hat eine Frequenz:",
    ["über 20 kHz", "unter 20 Hz", "genau 440 Hz", "zwischen 20 Hz und 20 kHz", "von 0 Hz"],
    1,
    "Infraschall: f < 20 Hz (nicht hörbar).",
    "leicht",
    ["Infraschall", "Frequenz"]
  ),
  q(
    "ph-pool-18-008",
    KAP[2],
    "Die Wärmeübertragung durch Konvektion erfolgt:",
    [
      "nur in Festkörpern",
      "durch strömende Flüssigkeit oder Gas",
      "nur durch Strahlung",
      "ohne Temperaturdifferenz",
      "nur an der Oberfläche",
    ],
    1,
    "Konvektion: Wärmetransport durch strömendes Medium.",
    "leicht",
    ["Konvektion", "Wärmeübertragung"]
  ),
  q(
    "ph-pool-18-009",
    KAP[3],
    "Die elektrische Leistung P bei konstantem Widerstand R und Strom I ist:",
    ["P = I/R", "P = I²·R", "P = R/I", "P = I·R", "P = I/R²"],
    1,
    "P = U·I = I²·R (mit U = R·I).",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-18-010",
    KAP[4],
    "Ein radioaktives Nuklid mit langer Halbwertszeit:",
    [
      "ist nach kurzer Zeit verschwunden",
      "bleibt lange aktiv (geringe Abnahme der Aktivität)",
      "hat keine Aktivität",
      "ist nur künstlich",
      "zerfällt nie",
    ],
    1,
    "Lange T_½ → Aktivität klingt langsam ab.",
    "leicht",
    ["Halbwertszeit", "Aktivität"]
  ),
  q(
    "ph-pool-18-011",
    KAP[0],
    "Die Einheit Joule (J) entspricht:",
    ["1 N·m", "1 W·s", "1 kg·m²/s²", "1 V·A", "1 N/s"],
    0,
    "1 J = 1 N·m = 1 W·s = 1 kg·m²/s².",
    "leicht",
    ["Joule", "Einheit"]
  ),
  q(
    "ph-pool-18-012",
    KAP[1],
    "Bei der Reflexion von Licht an einer Grenzfläche gilt:",
    [
      "Einfallswinkel = Brechungswinkel",
      "Einfallswinkel = Reflexionswinkel",
      "nur Absorption",
      "Totalreflexion immer",
      "keine Reflexion",
    ],
    1,
    "Reflexionsgesetz: Einfallswinkel = Ausfallswinkel.",
    "leicht",
    ["Reflexion", "Optik"]
  ),
  q(
    "ph-pool-18-013",
    KAP[2],
    "Die ideale Gasgleichung p·V = n·R·T enthält die Stoffmenge n in:",
    ["kg", "mol", "Liter", "Teilchen", "Gramm"],
    1,
    "Stoffmenge n in Mol (mol).",
    "leicht",
    ["Stoffmenge", "Gasgleichung"]
  ),
  q(
    "ph-pool-18-014",
    KAP[3],
    "Ein Widerstand von 5 Ω wird von 4 A durchflossen. Die Verlustleistung (Joule-Wärme) beträgt:",
    ["20 W", "80 W", "1,25 W", "9 W", "0,8 W"],
    1,
    "P = I²·R = 16·5 W = 80 W.",
    "leicht",
    ["Joule-Wärme", "Leistung"]
  ),
  q(
    "ph-pool-18-015",
    KAP[4],
    "Die Kernladungszahl Z gibt die Anzahl der … im Kern an.",
    ["Neutronen", "Protonen", "Nukleonen", "Elektronen", "Alpha-Teilchen"],
    1,
    "Z = Protonenzahl = Ordnungszahl.",
    "leicht",
    ["Kernladungszahl", "Protonen"]
  ),
  q(
    "ph-pool-18-016",
    KAP[0],
    "Die Auftriebskraft auf einen eingetauchten Körper ist gleich:",
    [
      "der Gewichtskraft des Körpers",
      "der Gewichtskraft der verdrängten Flüssigkeit",
      "null",
      "der Masse des Körpers",
      "der Dichte",
    ],
    1,
    "Archimedisches Prinzip: F_A = ρ_Flüssigkeit·V_verdrängt·g.",
    "leicht",
    ["Auftrieb", "Archimedes"]
  ),
  q(
    "ph-pool-18-017",
    KAP[1],
    "Die Brennweite f einer dünnen Linse und die Gegenstandsweite g und Bildweite b hängen zusammen durch:",
    ["1/f = 1/g + 1/b", "f = g + b", "f = g·b", "1/f = g·b", "f = 1/g + 1/b"],
    0,
    "Linsengleichung: 1/f = 1/g + 1/b.",
    "mittel",
    ["Linsengleichung", "Optik"]
  ),
  q(
    "ph-pool-18-018",
    KAP[2],
    "Bei isobarer Erwärmung eines idealen Gases:",
    [
      "bleibt das Volumen konstant",
      "nehmen Volumen und Temperatur zu (V/T = const)",
      "bleibt die Temperatur konstant",
      "wird keine Wärme zugeführt",
      "nimmt der Druck ab",
    ],
    1,
    "Isobar: p = const; V/T = const (Gay-Lussac).",
    "mittel",
    ["isobar", "Erwärmung"]
  ),
  q(
    "ph-pool-18-019",
    KAP[3],
    "Die Kapazität C eines Kondensators mit Plattenfläche A und Abstand d (Vakuum) ist proportional zu:",
    ["A/d", "d/A", "A·d", "A + d", "1/(A·d)"],
    0,
    "C = ε₀·A/d (Vakuum).",
    "mittel",
    ["Kondensator", "Kapazität"]
  ),
  q(
    "ph-pool-18-020",
    KAP[4],
    "Die Strahlung beim Annihilationsprozess (Vernichtung Elektron-Positron) besteht aus:",
    [
      "Alpha-Teilchen",
      "zwei Gamma-Quanten (mindestens)",
      "nur einem Photon",
      "Beta-Strahlung",
      "Neutronen",
    ],
    1,
    "e⁺ + e⁻ → 2γ (Energie- und Impulserhaltung).",
    "mittel",
    ["Annihilation", "Gamma"]
  ),
  q(
    "ph-pool-18-021",
    KAP[0],
    "Die Winkelgeschwindigkeit ω bei gleichförmiger Kreisbewegung mit der Frequenz f ist:",
    ["ω = f", "ω = 2π·f", "ω = f/(2π)", "ω = f²", "ω = 1/f"],
    1,
    "ω = 2π·f = 2π/T.",
    "leicht",
    ["Winkelgeschwindigkeit", "Kreisbewegung"]
  ),
  q(
    "ph-pool-18-022",
    KAP[1],
    "Die Beugung von Licht an einem Gitter mit Gitterkonstante g erzeugt Maxima unter dem Winkel α mit:",
    ["g·sin(α) = λ", "g·sin(α) = k·λ (k = 0, ±1, ±2, …)", "sin(α) = g·λ", "g = λ", "keine Maxima"],
    1,
    "Gitter: g·sin(α) = k·λ.",
    "mittel",
    ["Gitter", "Beugung"]
  ),
  q(
    "ph-pool-18-023",
    KAP[2],
    "Die Entropieänderung ΔS bei reversibler Wärmezufuhr Q bei konstanter Temperatur T ist:",
    ["ΔS = Q·T", "ΔS = Q/T", "ΔS = T/Q", "ΔS = 0", "ΔS = Q + T"],
    1,
    "ΔS = Q_rev/T.",
    "mittel",
    ["Entropie", "reversibel"]
  ),
  q(
    "ph-pool-18-024",
    KAP[3],
    "Die Einheit Henry (H) gehört zur Größe:",
    ["Kapazität", "Induktivität", "Widerstand", "Ladung", "Feldstärke"],
    1,
    "Induktivität L in Henry (H).",
    "leicht",
    ["Henry", "Induktivität"]
  ),
  q(
    "ph-pool-18-025",
    KAP[4],
    "Die Massenzahl A eines Kerns ist die Summe aus:",
    [
      "Protonenzahl und Elektronenzahl",
      "Protonenzahl Z und Neutronenzahl N",
      "nur Neutronenzahl",
      "nur Protonenzahl",
      "Ordnungszahl und Ladung",
    ],
    1,
    "A = Z + N (Nukleonenzahl).",
    "leicht",
    ["Massenzahl", "Kern"]
  ),
  q(
    "ph-pool-18-026",
    KAP[0],
    "Ein Ball wird senkrecht nach oben geworfen. Am höchsten Punkt der Bahn ist:",
    [
      "die Geschwindigkeit maximal",
      "die Geschwindigkeit null (nur für einen Moment)",
      "die Beschleunigung null",
      "die kinetische Energie maximal",
      "die potentielle Energie null",
    ],
    1,
    "Höchster Punkt: v = 0 (Umkehr); a = −g weiterhin.",
    "leicht",
    ["Wurf", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-18-027",
    KAP[1],
    "Die Schallintensität I und der Schalldruck p sind bei ebener Welle verknüpft durch:",
    ["I ∝ p", "I ∝ p²", "I ∝ 1/p", "I = p", "I unabhängig von p"],
    1,
    "I ∝ p² (Intensität proportional Druckquadrat).",
    "mittel",
    ["Schall", "Intensität"]
  ),
  q(
    "ph-pool-18-028",
    KAP[2],
    "Die Verdampfungswärme von Wasser bei 100 °C ist etwa:",
    ["334 kJ/kg", "2257 kJ/kg", "4,2 kJ/(kg·K)", "0", "100 kJ/kg"],
    1,
    "Verdampfungswärme Wasser ca. 2257 kJ/kg.",
    "mittel",
    ["Verdampfungswärme", "Wasser"]
  ),
  q(
    "ph-pool-18-029",
    KAP[3],
    "Die elektrische Arbeit W bei konstanter Spannung U und transportierter Ladung Q ist:",
    ["W = U/Q", "W = U·Q", "W = Q/U", "W = U + Q", "W = U²·Q"],
    1,
    "W = U·Q (Spannung mal Ladung).",
    "leicht",
    ["elektrische Arbeit", "Spannung"]
  ),
  q(
    "ph-pool-18-030",
    KAP[4],
    "Die Abschirmung gegen Alpha-Strahlung gelingt bereits mit:",
    [
      "Bleiwand",
      "dünnem Papier oder wenigen cm Luft",
      "Beton",
      "Wasser mehreren Metern",
      "nur Vakuum",
    ],
    1,
    "Alpha: sehr geringe Reichweite; Papier oder Luft reichen.",
    "leicht",
    ["Alpha", "Abschirmung"]
  ),
  q(
    "ph-pool-18-031",
    KAP[0],
    "Die Beschleunigung a und die Kraft F bei konstanter Masse m hängen zusammen durch:",
    ["a = F·m", "a = F/m", "a = m/F", "a = F + m", "a = F − m"],
    1,
    "F = m·a → a = F/m.",
    "leicht",
    ["Kraft", "Beschleunigung"]
  ),
  q(
    "ph-pool-18-032",
    KAP[1],
    "Die Lichtgeschwindigkeit im Vakuum c beträgt etwa:",
    ["3·10⁵ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s", "340 m/s", "1500 m/s"],
    1,
    "c ≈ 3·10⁸ m/s.",
    "leicht",
    ["Lichtgeschwindigkeit", "c"]
  ),
  q(
    "ph-pool-18-033",
    KAP[2],
    "Der Wirkungsgrad η einer Wärmekraftmaschine ist definiert als:",
    [
      "zugeführte Wärme / abgegebene Arbeit",
      "abgegebene Nutzarbeit / zugeführte Wärme",
      "abgegebene Wärme / zugeführte Wärme",
      "immer 1",
      "T_kalt/T_heiss",
    ],
    1,
    "η = W_nutz/Q_zu < 1 (2. Hauptsatz).",
    "mittel",
    ["Wirkungsgrad", "Wärmekraftmaschine"]
  ),
  q(
    "ph-pool-18-034",
    KAP[3],
    "Die magnetische Flussdichte B hat die Einheit:",
    ["Weber", "Tesla", "Henry", "Farad", "Ohm"],
    1,
    "B in Tesla (T).",
    "leicht",
    ["Tesla", "Magnetfeld"]
  ),
  q(
    "ph-pool-18-035",
    KAP[4],
    "Beim Beta-Minus-Zerfall eines Kerns:",
    [
      "nimmt die Ordnungszahl Z um 1 zu",
      "nimmt Z um 2 ab",
      "bleibt Z gleich",
      "nimmt die Massenzahl ab",
      "entsteht ein Alpha-Teilchen",
    ],
    0,
    "β⁻: n → p + e⁻ + ν̄ → Z erhöht sich um 1, A gleich.",
    "mittel",
    ["Beta-Minus", "Ordnungszahl"]
  ),
  q(
    "ph-pool-18-036",
    KAP[0],
    "Die Rollreibung tritt auf bei:",
    [
      "gleitenden Körpern",
      "rollenden Körpern (z. B. Rad auf Untergrund)",
      "ruhenden Körpern",
      "fallenden Körpern",
      "schwingenden Körpern",
    ],
    1,
    "Rollreibung: Abrollen (Rad, Kugel).",
    "leicht",
    ["Rollreibung", "Reibung"]
  ),
  q(
    "ph-pool-18-037",
    KAP[1],
    "Die Kohärenz zweier Wellen bedeutet:",
    [
      "gleiche Amplitude",
      "feste Phasenbeziehung",
      "gleiche Geschwindigkeit",
      "gleiche Frequenz nur",
      "gleiche Intensität",
    ],
    1,
    "Kohärenz: feste Phasenbeziehung (für Interferenz nötig).",
    "mittel",
    ["Kohärenz", "Interferenz"]
  ),
  q(
    "ph-pool-18-038",
    KAP[2],
    "Die innere Energie U eines idealen Gases hängt bei fester Teilchenzahl nur von … ab.",
    ["Volumen", "Temperatur", "Druck", "Entropie", "Dichte"],
    1,
    "Ideales Gas: U = U(T).",
    "leicht",
    ["innere Energie", "ideales Gas"]
  ),
  q(
    "ph-pool-18-039",
    KAP[3],
    "Ein Transformator mit N₁ = 100 und N₂ = 200 Windungen transformiert die Spannung:",
    [
      "von hoch zu runter",
      "von runter zu hoch (U₂ = 2·U₁ bei ideal)",
      "nicht",
      "nur bei Gleichstrom",
      "nur die Stromstärke",
    ],
    1,
    "U₂/U₁ = N₂/N₁ = 2 → Hochspannung.",
    "mittel",
    ["Transformator", "Windungszahl"]
  ),
  q(
    "ph-pool-18-040",
    KAP[4],
    "Die Zerfallsrate (Aktivität) A einer radioaktiven Probe:",
    [
      "steigt mit der Zeit",
      "fällt exponentiell mit der Zeit",
      "bleibt konstant",
      "fällt linear",
      "ist unabhängig von N",
    ],
    1,
    "A(t) = A₀·e^(-λt) = λ·N(t).",
    "mittel",
    ["Aktivität", "Zerfall"]
  ),
  q(
    "ph-pool-18-041",
    KAP[0],
    "Der Impuls p und die kinetische Energie E_kin eines Teilchens der Masse m und Geschwindigkeit v sind:",
    ["p = E_kin·v", "p = m·v, E_kin = ½·m·v²", "p = E_kin/m", "p = 2·E_kin·v", "E_kin = p·v"],
    1,
    "p = m·v; E_kin = ½·m·v² = p²/(2m).",
    "leicht",
    ["Impuls", "kinetische Energie"]
  ),
  q(
    "ph-pool-18-042",
    KAP[1],
    "Die Frequenz der Grundschwingung einer an beiden Enden fest eingespannten Saite ist:",
    ["f = c·L", "f = c/(2L)", "f = 2L/c", "f = L/(2c)", "f = c·L²"],
    1,
    "Grundschwingung: λ/2 = L → f = c/(2L).",
    "mittel",
    ["Saite", "Grundschwingung"]
  ),
  q(
    "ph-pool-18-043",
    KAP[2],
    "Die spezifische Wärmekapazität c hat die Einheit:",
    ["J", "J/(kg·K)", "J/K", "kg/J", "W"],
    1,
    "c in J/(kg·K).",
    "leicht",
    ["spezifische Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-18-044",
    KAP[3],
    "Die Stromstärke I in einem Leiter ist definiert als:",
    [
      "Ladung mal Zeit",
      "Ladung pro Zeit (I = dQ/dt)",
      "Spannung pro Widerstand",
      "Leistung pro Spannung",
      "Widerstand mal Spannung",
    ],
    1,
    "I = Q/t bzw. I = dQ/dt.",
    "leicht",
    ["Stromstärke", "Definition"]
  ),
  q(
    "ph-pool-18-045",
    KAP[4],
    "Die Halbwertszeit T_½ und die Zerfallskonstante λ sind verknüpft durch:",
    ["T_½ = λ", "T_½ = ln(2)/λ", "T_½ = λ/2", "T_½ = 2λ", "T_½ = 1/λ²"],
    1,
    "T_½ = ln(2)/λ ≈ 0,693/λ.",
    "mittel",
    ["Halbwertszeit", "Zerfallskonstante"]
  ),
  q(
    "ph-pool-18-046",
    KAP[0],
    "Die Zentripetalkraft zeigt:",
    [
      "tangential zur Bahn",
      "vom Zentrum weg",
      "zum Zentrum hin",
      "in Bewegungsrichtung",
      "entgegen der Geschwindigkeit",
    ],
    2,
    "Zentripetalkraft wirkt zum Kreismittelpunkt.",
    "leicht",
    ["Zentripetalkraft", "Richtung"]
  ),
  q(
    "ph-pool-18-047",
    KAP[1],
    "Bei der Totalreflexion:",
    [
      "wird Licht immer gebrochen",
      "wird kein Licht ins zweite Medium übertragen (vollständige Reflexion)",
      "ändert sich die Frequenz",
      "tritt nur bei senkrechtem Einfall auf",
      "gibt es keinen Grenzwinkel",
    ],
    1,
    "Totalreflexion: gesamtes Licht reflektiert, kein Übertritt.",
    "mittel",
    ["Totalreflexion", "Optik"]
  ),
  q(
    "ph-pool-18-048",
    KAP[2],
    "Die Wärme Q, die ein Körper der Masse m bei Temperaturänderung ΔT aufnimmt (ohne Phasenübergang), ist:",
    ["Q = m/ΔT", "Q = m·c·ΔT", "Q = c/ΔT", "Q = m + c + ΔT", "Q = ΔT/m"],
    1,
    "Q = m·c·ΔT.",
    "leicht",
    ["Wärmemenge", "Temperaturänderung"]
  ),
  q(
    "ph-pool-18-049",
    KAP[3],
    "Die Kapazität C hat die Einheit:",
    ["Ohm", "Farad (F)", "Henry", "Tesla", "Weber"],
    1,
    "C in Farad (F); 1 F = 1 C/V.",
    "leicht",
    ["Kapazität", "Farad"]
  ),
  q(
    "ph-pool-18-050",
    KAP[4],
    "Röntgenstrahlung hat eine Wellenlänge typischerweise im Bereich:",
    ["m", "mm", "nm bis pm (10⁻⁹ bis 10⁻¹² m)", "km", "µm nur"],
    2,
    "Röntgen: λ etwa 10 nm bis 10 pm.",
    "mittel",
    ["Röntgen", "Wellenlänge"]
  ),
  q(
    "ph-pool-18-051",
    KAP[0],
    "Die potentielle Energie einer Masse m in der Höhe h (nahe Erdoberfläche) ist:",
    ["E = m·h", "E = m·g·h", "E = ½·m·v²", "E = m·v", "E = F·h"],
    1,
    "E_pot = m·g·h.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-18-052",
    KAP[1],
    "Die Schallgeschwindigkeit in Helium ist … als in Luft (bei gleicher Temperatur).",
    [
      "kleiner",
      "größer (trotz geringerer Dichte wegen kleinerer Molmasse)",
      "gleich",
      "unbestimmt",
      "nur bei 0 °C größer",
    ],
    1,
    "c ∝ √(T/M); Helium: kleine M → größeres c.",
    "mittel",
    ["Schall", "Helium"]
  ),
  q(
    "ph-pool-18-053",
    KAP[2],
    "Der erste Hauptsatz der Thermodynamik (Energieerhaltung) lautet in Form von Änderungen:",
    [
      "ΔU = Q − W (W = vom System geleistete Arbeit)",
      "ΔU = Q + W (Vorzeichenkonvention: zugeführte Arbeit positiv)",
      "ΔU = Q·W",
      "ΔU = 0 immer",
      "ΔU = T·ΔS",
    ],
    1,
    "1. Hauptsatz: ΔU = Q + W (W je nach Konvention).",
    "mittel",
    ["1. Hauptsatz", "Innere Energie"]
  ),
  q(
    "ph-pool-18-054",
    KAP[3],
    "Die Lorentzkraft auf eine Ladung q, die sich mit v in einem Magnetfeld B bewegt, ist proportional zu:",
    ["q·B", "q·v·B (Betrag; Richtung v×B)", "q/v·B", "q + v + B", "nur B"],
    1,
    "F = q·(v×B); |F| ∝ q·v·B·sin(α).",
    "mittel",
    ["Lorentzkraft", "Formel"]
  ),
  q(
    "ph-pool-18-055",
    KAP[4],
    "Die natürliche Strahlenexposition des Menschen stammt u. a. von:",
    [
      "nur künstlichen Quellen",
      "kosmischer Strahlung, Radon, terrestrischer Strahlung",
      "nur Röntgen",
      "nur Kernkraftwerken",
      "nur Alpha",
    ],
    1,
    "Natürliche Exposition: Kosmos, Radon, Boden.",
    "leicht",
    ["natürliche Strahlung", "Exposition"]
  ),
  q(
    "ph-pool-18-056",
    KAP[0],
    "Die Einheit Watt (W) ist:",
    ["1 J", "1 J/s", "1 N·m", "1 V·A", "1 C"],
    1,
    "1 W = 1 J/s = 1 V·A.",
    "leicht",
    ["Watt", "Leistung"]
  ),
  q(
    "ph-pool-18-057",
    KAP[1],
    "Ein Konkavspiegel (Hohlspiegel) kann erzeugen:",
    [
      "nur virtuelle Bilder",
      "reelle und virtuelle Bilder (je nach Gegenstandsweite)",
      "keine Bilder",
      "nur vergrößerte Bilder",
      "nur verkleinerte Bilder",
    ],
    1,
    "Hohlspiegel: reell oder virtuell, vergrößert oder verkleinert.",
    "mittel",
    ["Hohlspiegel", "Bilder"]
  ),
  q(
    "ph-pool-18-058",
    KAP[2],
    "Die Verdampfungsentropie ΔS bei der Temperatur T und der Verdampfungswärme Q ist:",
    ["ΔS = Q·T", "ΔS = Q/T", "ΔS = T/Q", "ΔS = 0", "ΔS = Q − T"],
    1,
    "ΔS = Q_rev/T beim Phasenübergang.",
    "mittel",
    ["Verdampfung", "Entropie"]
  ),
  q(
    "ph-pool-18-059",
    KAP[3],
    "Ein Elektromagnet besteht typischerweise aus:",
    [
      "nur Permanentmagnet",
      "stromdurchflossener Spule (oft mit Eisenkern)",
      "nur Kondensator",
      "nur Widerstand",
      "nur Batterie",
    ],
    1,
    "Elektromagnet: Spule + Strom + ggf. Eisenkern.",
    "leicht",
    ["Elektromagnet", "Spule"]
  ),
  q(
    "ph-pool-18-060",
    KAP[4],
    "Die Aktivität A und die Anzahl N der noch nicht zerfallenen Kerne sind verknüpft durch:",
    ["A = N", "A = λ·N", "A = N/λ", "A = N²", "A = N·t"],
    1,
    "A = λ·N (Zerfallsrate).",
    "leicht",
    ["Aktivität", "Zerfall"]
  ),
];
