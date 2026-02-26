/**
 * Physik BMS Pool 21 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool21: Question[] = [
  q(
    "ph-pool-21-001",
    KAP[0],
    "Die SI-Basiseinheit für die Zeit ist:",
    ["Stunde", "Minute", "Sekunde", "Tag", "Jahr"],
    2,
    "Sekunde (s) ist die SI-Basiseinheit der Zeit.",
    "leicht",
    ["SI", "Zeit"]
  ),
  q(
    "ph-pool-21-002",
    KAP[1],
    "Die Frequenz f einer Welle und ihre Wellenlänge λ hängen mit der Ausbreitungsgeschwindigkeit c zusammen durch:",
    ["c = f + λ", "c = f · λ", "c = f/λ", "c = λ/f", "c = f − λ"],
    1,
    "c = λ·f.",
    "leicht",
    ["Frequenz", "Wellenlänge"]
  ),
  q(
    "ph-pool-21-003",
    KAP[2],
    "Die Temperatur 0 °C entspricht in Kelvin:",
    ["0 K", "273,15 K", "−273,15 K", "100 K", "373 K"],
    1,
    "0 °C = 273,15 K.",
    "leicht",
    ["Temperatur", "Kelvin"]
  ),
  q(
    "ph-pool-21-004",
    KAP[3],
    "Die elektrische Stromstärke I durch einen Leiter bei Spannung U und Widerstand R beträgt:",
    ["I = U·R", "I = U/R", "I = R/U", "I = U + R", "I = U²·R"],
    1,
    "Ohmsches Gesetz: I = U/R.",
    "leicht",
    ["Stromstärke", "Ohm"]
  ),
  q(
    "ph-pool-21-005",
    KAP[4],
    "Die Einheit Sievert (Sv) wird verwendet für:",
    [
      "Aktivität",
      "Energiedosis",
      "Äquivalentdosis (Strahlenbelastung)",
      "Halbwertszeit",
      "Reichweite",
    ],
    2,
    "Sievert: Äquivalentdosis (biologische Wirkung).",
    "leicht",
    ["Sievert", "Strahlenmessung"]
  ),
  q(
    "ph-pool-21-006",
    KAP[0],
    "Die Beschleunigung a bei gleichmäßig beschleunigter Bewegung ist:",
    [
      "proportional zum Weg",
      "konstant",
      "proportional zur Geschwindigkeit im Quadrat",
      "null",
      "rückwärts gerichtet",
    ],
    1,
    "Gleichmäßig beschleunigt: a = const.",
    "leicht",
    ["Beschleunigung", "Bewegung"]
  ),
  q(
    "ph-pool-21-007",
    KAP[1],
    "Transversale Wellen (z. B. Licht, Seilwelle) haben die Schwingung:",
    [
      "in Ausbreitungsrichtung",
      "senkrecht zur Ausbreitungsrichtung",
      "nur longitudinal",
      "kreisförmig nur",
      "gar nicht",
    ],
    1,
    "Transversal: Schwingung senkrecht zur Ausbreitung.",
    "leicht",
    ["transversal", "Welle"]
  ),
  q(
    "ph-pool-21-008",
    KAP[2],
    "Die Wärmeleitung in einem Stoff erfolgt ohne Stofftransport. Die Wärmeleitfähigkeit λ hat die Einheit:",
    ["J", "W/(m·K)", "W·m", "J/K", "K/m"],
    1,
    "λ in W/(m·K).",
    "leicht",
    ["Wärmeleitfähigkeit", "Einheit"]
  ),
  q(
    "ph-pool-21-009",
    KAP[3],
    "Zwei Widerstände R₁ und R₂ parallel geschaltet haben den Ersatzwiderstand:",
    ["R₁ + R₂", "1/(1/R₁ + 1/R₂)", "R₁·R₂", "R₁/R₂", "R₁ − R₂"],
    1,
    "Parallel: 1/R_ges = 1/R₁ + 1/R₂.",
    "leicht",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-21-010",
    KAP[4],
    "Die Halbwertszeit von Radon-222 beträgt etwa:",
    ["3,8 Tage", "3,8 Jahre", "38 Tage", "3,8 Stunden", "unendlich"],
    0,
    "T_½(Rn-222) ≈ 3,82 Tage.",
    "mittel",
    ["Radon-222", "Halbwertszeit"]
  ),
  q(
    "ph-pool-21-011",
    KAP[0],
    "Die Gewichtskraft F_G und die Masse m hängen zusammen durch:",
    ["F_G = m·v", "F_G = m·g", "F_G = m·a beliebig", "F_G = p", "F_G = E/c²"],
    1,
    "F_G = m·g.",
    "leicht",
    ["Gewichtskraft", "Masse"]
  ),
  q(
    "ph-pool-21-012",
    KAP[1],
    "Der Brechungsindex n von Glas liegt typischerweise bei:",
    ["0,5", "1", "1,5", "2,5", "3"],
    2,
    "n_Glas ≈ 1,5 (je nach Glassorte).",
    "leicht",
    ["Brechungsindex", "Glas"]
  ),
  q(
    "ph-pool-21-013",
    KAP[2],
    "Die ideale Gasgleichung p·V = n·R·T enthält die Gaskonstante R. Sie hat die Einheit:",
    ["J", "J/(mol·K)", "J·mol·K", "K/J", "mol/J"],
    1,
    "R ≈ 8,314 J/(mol·K).",
    "leicht",
    ["Gaskonstante", "Einheit"]
  ),
  q(
    "ph-pool-21-014",
    KAP[3],
    "Die elektrische Leistung P bei Stromstärke I und Widerstand R ist:",
    ["P = I/R", "P = I²·R", "P = R/I", "P = I·R", "P = I/R²"],
    1,
    "P = U·I = I²·R.",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-21-015",
    KAP[4],
    "Ein Beta-Teilchen (β⁻) ist ein:",
    ["Proton", "Neutron", "Elektron", "Heliumkern", "Photon"],
    2,
    "β⁻-Strahlung = Elektronen.",
    "leicht",
    ["Beta-Teilchen", "Elektron"]
  ),
  q(
    "ph-pool-21-016",
    KAP[0],
    "Die Auftriebskraft auf einen Körper in einer Flüssigkeit ist nach Archimedes gleich:",
    [
      "der Gewichtskraft des Körpers",
      "der Gewichtskraft der verdrängten Flüssigkeitsmenge",
      "null",
      "der Masse des Körpers",
      "der Dichte mal Volumen",
    ],
    1,
    "Archimedes: F_A = ρ_Fl·V_verdrängt·g.",
    "leicht",
    ["Auftrieb", "Archimedes"]
  ),
  q(
    "ph-pool-21-017",
    KAP[1],
    "Die Reflexion von Licht an einer Grenzfläche gehorcht dem Gesetz:",
    [
      "Einfallswinkel = Brechungswinkel",
      "Einfallswinkel = Reflexionswinkel",
      "nur Totalreflexion",
      "keine Reflexion",
      "Absorption",
    ],
    1,
    "Reflexionsgesetz: α = α'.",
    "leicht",
    ["Reflexion", "Optik"]
  ),
  q(
    "ph-pool-21-018",
    KAP[2],
    "Die Enthalpie H ist definiert als:",
    ["H = U − p·V", "H = U + p·V", "H = Q − W", "H = S·T", "H = n·R·T"],
    1,
    "H = U + p·V.",
    "mittel",
    ["Enthalpie", "Definition"]
  ),
  q(
    "ph-pool-21-019",
    KAP[3],
    "Die Kapazität C eines Kondensators hat die Einheit:",
    ["Ohm", "Farad", "Henry", "Tesla", "Weber"],
    1,
    "C in Farad (F).",
    "leicht",
    ["Kapazität", "Farad"]
  ),
  q(
    "ph-pool-21-020",
    KAP[4],
    "Die Strahlung von Polonium-210 ist vor allem:",
    ["Beta", "Alpha", "Gamma", "Neutronen", "Röntgen"],
    1,
    "Po-210: Alpha-Strahler.",
    "mittel",
    ["Polonium-210", "Alpha"]
  ),
  q(
    "ph-pool-21-021",
    KAP[0],
    "Der Weg s bei gleichförmiger Bewegung (Geschwindigkeit v, Zeit t) beträgt:",
    ["s = v/t", "s = v·t", "s = ½·v·t", "s = v²·t", "s = a·t"],
    1,
    "s = v·t bei konstanter Geschwindigkeit.",
    "leicht",
    ["Weg", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-21-022",
    KAP[1],
    "Die Schallgeschwindigkeit in Luft beträgt bei 20 °C etwa:",
    ["34 m/s", "343 m/s", "1500 m/s", "5000 m/s", "3·10⁸ m/s"],
    1,
    "Schall in Luft bei 20 °C ca. 343 m/s.",
    "leicht",
    ["Schallgeschwindigkeit", "Luft"]
  ),
  q(
    "ph-pool-21-023",
    KAP[2],
    "Bei isobarer Zustandsänderung (p = const) eines idealen Gases gilt:",
    ["V/T = const", "p·V = const", "p/T = const", "V = const", "T = const"],
    0,
    "Isobar: p = const; V/T = const (Gay-Lussac).",
    "mittel",
    ["isobar", "Gasgleichung"]
  ),
  q(
    "ph-pool-21-024",
    KAP[3],
    "Die magnetische Flussdichte B im Innern einer langen Spule mit n Windungen pro Länge und Strom I ist:",
    ["B = μ₀·I/(2π·r)", "B = μ₀·n·I", "B = 0", "B = n·I", "B = μ₀·I²"],
    1,
    "B = μ₀·n·I (homogen).",
    "mittel",
    ["Spule", "Magnetfeld"]
  ),
  q(
    "ph-pool-21-025",
    KAP[4],
    "Die Massenzahl A eines Kerns ist die Summe aus Protonenzahl Z und Neutronenzahl N:",
    ["A = Z − N", "A = Z + N", "A = Z·N", "A = Z/N", "A = N − Z"],
    1,
    "A = Z + N.",
    "leicht",
    ["Massenzahl", "Kern"]
  ),
  q(
    "ph-pool-21-026",
    KAP[0],
    "Die Leistung P ist definiert als:",
    ["P = F·s", "P = W/t (Arbeit pro Zeit)", "P = E·t", "P = F·v nur", "P = m·v"],
    1,
    "P = W/t = dW/dt.",
    "leicht",
    ["Leistung", "Definition"]
  ),
  q(
    "ph-pool-21-027",
    KAP[1],
    "Die Beugung von Licht an einem Spalt zeigt, dass Licht … Eigenschaften hat.",
    ["nur Teilchen-", "Wellen- (und Teilchen-)", "nur Wellen-", "keine", "nur elektromagnetische"],
    1,
    "Beugung ist typisch für Wellen; Licht zeigt Wellen- und Teilcheneigenschaften.",
    "mittel",
    ["Beugung", "Licht"]
  ),
  q(
    "ph-pool-21-028",
    KAP[2],
    "Die Verdampfungswärme von Wasser bei 100 °C beträgt etwa:",
    ["334 kJ/kg", "2257 kJ/kg", "4,2 kJ/(kg·K)", "0", "100 kJ/kg"],
    1,
    "Verdampfungswärme Wasser ca. 2257 kJ/kg.",
    "mittel",
    ["Verdampfungswärme", "Wasser"]
  ),
  q(
    "ph-pool-21-029",
    KAP[3],
    "Ein Voltmeter misst:",
    [
      "die Stromstärke",
      "die Spannung (Potentialdifferenz)",
      "den Widerstand",
      "die Ladung",
      "die Kapazität",
    ],
    1,
    "Voltmeter: Spannungsmessung.",
    "leicht",
    ["Voltmeter", "Spannung"]
  ),
  q(
    "ph-pool-21-030",
    KAP[4],
    "Die Abschirmung gegen Gamma-Strahlung erfordert:",
    [
      "nur Papier",
      "dichte Materialien (Blei, Beton) in ausreichender Dicke",
      "nur Luft",
      "nur Kunststoff",
      "keine Abschirmung möglich",
    ],
    1,
    "Gamma: hohe Durchdringung → dicke, dichte Abschirmung.",
    "leicht",
    ["Gamma", "Abschirmung"]
  ),
  q(
    "ph-pool-21-031",
    KAP[0],
    "Die Zentripetalkraft zeigt in Richtung:",
    [
      "der Geschwindigkeit",
      "tangential",
      "zum Kreismittelpunkt",
      "vom Mittelpunkt weg",
      "entgegen der Beschleunigung",
    ],
    2,
    "Zentripetalkraft wirkt zum Zentrum.",
    "leicht",
    ["Zentripetalkraft", "Richtung"]
  ),
  q(
    "ph-pool-21-032",
    KAP[1],
    "Die Wellenlänge des sichtbaren Lichts liegt im Bereich etwa:",
    ["1 m bis 10 m", "400 nm bis 700 nm", "1 mm bis 1 m", "1 nm bis 10 nm", "1 km"],
    1,
    "Sichtbares Licht: ca. 380–780 nm.",
    "leicht",
    ["sichtbares Licht", "Wellenlänge"]
  ),
  q(
    "ph-pool-21-033",
    KAP[2],
    "Der zweite Hauptsatz der Thermodynamik besagt u. a.:",
    [
      "Energie ist erhalten",
      "in abgeschlossenen Systemen nimmt die Entropie bei irreversiblen Prozessen zu",
      "der absolute Nullpunkt ist 0 °C",
      "Wärme kann vollständig in Arbeit umgewandelt werden",
      "Entropie bleibt immer konstant",
    ],
    1,
    "2. Hauptsatz: Entropie nimmt bei irreversiblen Prozessen zu.",
    "mittel",
    ["2. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-21-034",
    KAP[3],
    "Die Induktivität L einer Spule bewirkt bei Änderung des Stroms eine Induktionsspannung:",
    ["U = L·I", "U = −L·dI/dt", "U = I/L", "U = L·I²", "U = 0"],
    1,
    "U_ind = −L·dI/dt.",
    "mittel",
    ["Induktion", "Spule"]
  ),
  q(
    "ph-pool-21-035",
    KAP[4],
    "Die Kernladungszahl Z gibt die … im Kern an.",
    ["Neutronenzahl", "Protonenzahl", "Nukleonenzahl", "Elektronenzahl", "Massenzahl"],
    1,
    "Z = Protonenzahl = Ordnungszahl.",
    "leicht",
    ["Kernladungszahl", "Protonen"]
  ),
  q(
    "ph-pool-21-036",
    KAP[0],
    "Die Dichte ρ eines Stoffes ist definiert als:",
    ["ρ = V/m", "ρ = m/V", "ρ = m·V", "ρ = m + V", "ρ = F/A"],
    1,
    "ρ = m/V.",
    "leicht",
    ["Dichte", "Definition"]
  ),
  q(
    "ph-pool-21-037",
    KAP[1],
    "Die Kohärenz von Lichtquellen ist Voraussetzung für:",
    ["Absorption", "stabile Interferenz", "Reflexion", "Dispersion", "Polarisation"],
    1,
    "Kohärenz: feste Phasenbeziehung für Interferenz nötig.",
    "mittel",
    ["Kohärenz", "Interferenz"]
  ),
  q(
    "ph-pool-21-038",
    KAP[2],
    "Die Wärmekapazität C eines Körpers (Q = C·ΔT) hat die Einheit:",
    ["J·K", "J/K", "K/J", "J", "W/s"],
    1,
    "C = Q/ΔT → [C] = J/K.",
    "leicht",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-21-039",
    KAP[3],
    "Die elektrische Arbeit W bei Spannung U und Stromstärke I über die Zeit t ist:",
    ["W = U/I", "W = U·I·t", "W = I/(U·t)", "W = U + I + t", "W = U²·I"],
    1,
    "W = U·I·t = P·t.",
    "leicht",
    ["elektrische Arbeit", "Energie"]
  ),
  q(
    "ph-pool-21-040",
    KAP[4],
    "Beim Beta-Plus-Zerfall eines Kerns:",
    [
      "nimmt die Ordnungszahl Z um 1 ab",
      "nimmt Z um 2 zu",
      "bleibt Z gleich",
      "nimmt die Massenzahl zu",
      "entsteht ein Alpha-Teilchen",
    ],
    0,
    "β⁺: p → n + e⁺ + ν → Z verringert sich um 1.",
    "mittel",
    ["Beta-Plus", "Ordnungszahl"]
  ),
  q(
    "ph-pool-21-041",
    KAP[0],
    "Die kinetische Energie E_kin eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["E_kin = m·v", "E_kin = ½·m·v²", "E_kin = m·v²", "E_kin = m·g·h", "E_kin = F·s"],
    1,
    "E_kin = ½·m·v².",
    "leicht",
    ["kinetische Energie", "Formel"]
  ),
  q(
    "ph-pool-21-042",
    KAP[1],
    "Die Schallintensität I und der Schalldruck p sind bei ebener Welle verknüpft durch:",
    ["I ∝ p", "I ∝ p²", "I ∝ 1/p", "I = p", "I unabhängig von p"],
    1,
    "I ∝ p².",
    "mittel",
    ["Schall", "Intensität"]
  ),
  q(
    "ph-pool-21-043",
    KAP[2],
    "Die spezifische Wärmekapazität c hat die Einheit:",
    ["J", "J/(kg·K)", "J/K", "kg/J", "W"],
    1,
    "c in J/(kg·K).",
    "leicht",
    ["spezifische Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-21-044",
    KAP[3],
    "Die Stromstärke I ist definiert als:",
    [
      "Ladung mal Zeit",
      "Ladung pro Zeit",
      "Spannung pro Widerstand",
      "Leistung mal Spannung",
      "Widerstand mal Ladung",
    ],
    1,
    "I = Q/t = dQ/dt.",
    "leicht",
    ["Stromstärke", "Definition"]
  ),
  q(
    "ph-pool-21-045",
    KAP[4],
    "Die Halbwertszeit T_½ und die Zerfallskonstante λ sind verknüpft durch:",
    ["T_½ = λ", "T_½ = ln(2)/λ", "T_½ = λ/2", "T_½ = 2λ", "T_½ = 1/λ"],
    1,
    "T_½ = ln(2)/λ ≈ 0,693/λ.",
    "mittel",
    ["Halbwertszeit", "Zerfallskonstante"]
  ),
  q(
    "ph-pool-21-046",
    KAP[0],
    "Der Druck p in einer Flüssigkeit (Dichte ρ, Tiefe h) beträgt (Schweredruck):",
    ["p = ρ/h", "p = ρ·g·h", "p = ρ·h", "p = g/h", "p = ρ + h"],
    1,
    "p = ρ·g·h.",
    "leicht",
    ["Schweredruck", "Flüssigkeit"]
  ),
  q(
    "ph-pool-21-047",
    KAP[1],
    "Bei der Totalreflexion geht … Licht in das zweite Medium über.",
    ["alles", "kein", "die Hälfte", "nur rotes", "nur blaues"],
    1,
    "Totalreflexion: gesamtes Licht reflektiert.",
    "leicht",
    ["Totalreflexion", "Optik"]
  ),
  q(
    "ph-pool-21-048",
    KAP[2],
    "Die Entropie S eines Systems nimmt bei irreversiblen Prozessen in einem abgeschlossenen System:",
    ["ab", "zu", "bleibt konstant", "wird null", "ist nicht definiert"],
    1,
    "2. Hauptsatz: ΔS ≥ 0 bei irreversiblen Prozessen.",
    "mittel",
    ["Entropie", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-21-049",
    KAP[3],
    "Die elektrische Feldstärke E hat die Einheit:",
    ["Coulomb", "Volt pro Meter (V/m)", "Newton", "Tesla", "Ampere"],
    1,
    "E = F/q → [E] = N/C = V/m.",
    "leicht",
    ["Feldstärke", "Einheit"]
  ),
  q(
    "ph-pool-21-050",
    KAP[4],
    "Die Aktivität A einer radioaktiven Probe (Zerfälle pro Sekunde) klingt mit der Zeit ab, weil:",
    [
      "die Halbwertszeit steigt",
      "die Anzahl N der noch nicht zerfallenen Kerne abnimmt",
      "die Temperatur sinkt",
      "der Druck steigt",
      "die Masse zunimmt",
    ],
    1,
    "A = λ·N; N(t) nimmt ab → A(t) nimmt ab.",
    "mittel",
    ["Aktivität", "Zerfall"]
  ),
  q(
    "ph-pool-21-051",
    KAP[0],
    "Die potentielle Energie einer Masse m in der Höhe h (nahe Erdoberfläche) beträgt:",
    ["E = m·h", "E = m·g·h", "E = ½·m·v²", "E = m·v", "E = F·h"],
    1,
    "E_pot = m·g·h.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-21-052",
    KAP[1],
    "Die Frequenz f und die Periodendauer T einer Schwingung hängen zusammen durch:",
    ["f = T", "f = 1/T", "f = 2π·T", "f = T²", "f = T/2π"],
    1,
    "f = 1/T.",
    "leicht",
    ["Frequenz", "Periodendauer"]
  ),
  q(
    "ph-pool-21-053",
    KAP[2],
    "Bei isothermer Zustandsänderung (T = const) eines idealen Gases gilt:",
    ["p·V = const (Boyle-Mariotte)", "p/T = const", "V/T = const", "p = const", "V = const"],
    0,
    "Isotherm: p·V = const.",
    "mittel",
    ["isotherm", "Boyle-Mariotte"]
  ),
  q(
    "ph-pool-21-054",
    KAP[3],
    "Die Lorentzkraft auf eine Ladung q mit Geschwindigkeit v im Magnetfeld B hat den Betrag (α = Winkel zwischen v und B):",
    ["F = q·v·B", "F = q·v·B·sin(α)", "F = q·v/B", "F = q·B/v", "F = v·B/q"],
    1,
    "|F| = q·v·B·sin(α).",
    "mittel",
    ["Lorentzkraft", "Betrag"]
  ),
  q(
    "ph-pool-21-055",
    KAP[4],
    "Die Strahlenbelastung durch eine Flugreise ist vor allem verursacht durch:",
    [
      "Alpha-Strahlung",
      "kosmische Strahlung",
      "terrestrische Strahlung",
      "Radon",
      "medizinische Anwendungen",
    ],
    1,
    "Flug: erhöhte kosmische Strahlung.",
    "leicht",
    ["kosmische Strahlung", "Flug"]
  ),
  q(
    "ph-pool-21-056",
    KAP[0],
    "Die Einheit Newton (N) entspricht:",
    ["1 kg", "1 kg·m/s²", "1 J", "1 W", "1 Pa"],
    1,
    "1 N = 1 kg·m/s².",
    "leicht",
    ["Newton", "Einheit"]
  ),
  q(
    "ph-pool-21-057",
    KAP[1],
    "Die Lichtgeschwindigkeit im Vakuum c beträgt etwa:",
    ["3·10⁵ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s", "340 m/s", "1500 m/s"],
    1,
    "c ≈ 3·10⁸ m/s.",
    "leicht",
    ["Lichtgeschwindigkeit", "c"]
  ),
  q(
    "ph-pool-21-058",
    KAP[2],
    "Die Wärme Q bei Temperaturänderung ΔT (ohne Phasenübergang) für eine Masse m und spezifische Wärmekapazität c ist:",
    ["Q = m/c·ΔT", "Q = m·c·ΔT", "Q = c/(m·ΔT)", "Q = m + c + ΔT", "Q = ΔT/(m·c)"],
    1,
    "Q = m·c·ΔT.",
    "leicht",
    ["Wärmemenge", "Temperaturänderung"]
  ),
  q(
    "ph-pool-21-059",
    KAP[3],
    "Ein Transformator mit N₁ = 200 und N₂ = 100 Windungen transformiert die Spannung:",
    [
      "hoch zu runter (U₂ = U₁/2 bei ideal)",
      "runter zu hoch",
      "nicht",
      "nur die Stromstärke",
      "nur bei Gleichstrom",
    ],
    0,
    "U₂/U₁ = N₂/N₁ = 1/2 → Heruntertransformieren.",
    "mittel",
    ["Transformator", "Spannung"]
  ),
  q(
    "ph-pool-21-060",
    KAP[4],
    "Die Einheit Gray (Gy) gibt an:",
    [
      "Aktivität",
      "Äquivalentdosis",
      "Energiedosis (absorbierte Energie pro Masse)",
      "Halbwertszeit",
      "Reichweite",
    ],
    2,
    "1 Gy = 1 J/kg (Energiedosis).",
    "leicht",
    ["Gray", "Energiedosis"]
  ),
];
