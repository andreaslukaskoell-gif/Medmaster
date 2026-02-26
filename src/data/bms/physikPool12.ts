/**
 * Physik BMS Pool 12 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool12: Question[] = [
  q(
    "ph-pool-12-001",
    KAP[0],
    "Welche Einheit hat die Geschwindigkeit?",
    ["m·s", "m/s", "kg·m/s", "N·s", "J/s"],
    1,
    "Geschwindigkeit v = Weg/Zeit → [v] = m/s.",
    "leicht",
    ["Geschwindigkeit", "SI"]
  ),
  q(
    "ph-pool-12-002",
    KAP[1],
    "Die Frequenz einer Welle gibt an:",
    [
      "die Ausbreitungsgeschwindigkeit",
      "die Anzahl der Schwingungen pro Zeiteinheit",
      "die Wellenlänge",
      "die Amplitude",
      "die Energie",
    ],
    1,
    "Frequenz f = Anzahl Schwingungen pro Sekunde (Einheit Hz).",
    "leicht",
    ["Frequenz", "Wellen"]
  ),
  q(
    "ph-pool-12-003",
    KAP[2],
    "Die Celsius-Skala und die Kelvin-Skala hängen zusammen durch:",
    [
      "T(K) = T(°C) + 273,15",
      "T(K) = T(°C) − 273,15",
      "T(K) = T(°C) · 1,8",
      "T(K) = T(°C) / 273,15",
      "T(K) = T(°C)",
    ],
    0,
    "Nullpunkt der Kelvin-Skala = absoluter Nullpunkt; 0 °C = 273,15 K.",
    "leicht",
    ["Temperatur", "Kelvin"]
  ),
  q(
    "ph-pool-12-004",
    KAP[3],
    "Die elektrische Stromstärke wird in … gemessen.",
    ["Volt", "Coulomb", "Ampere", "Ohm", "Watt"],
    2,
    "Stromstärke I in Ampere (A). 1 A = 1 C/s.",
    "leicht",
    ["Stromstärke", "Ampere"]
  ),
  q(
    "ph-pool-12-005",
    KAP[4],
    "Was sind Alphateilchen?",
    ["Elektronen", "Heliumkerne (2 Protonen, 2 Neutronen)", "Photonen", "Neutronen", "Positronen"],
    1,
    "α-Strahlung = Heliumkerne ⁴₂He²⁺ (2p + 2n).",
    "leicht",
    ["Alpha-Strahlung", "Kernphysik"]
  ),
  q(
    "ph-pool-12-006",
    KAP[0],
    "Die Gewichtskraft auf einen Körper ist:",
    [
      "unabhängig vom Ort",
      "F_G = m · g (g Ortsfaktor)",
      "immer null im Vakuum",
      "gleich der Masse",
      "nur auf der Erde definiert",
    ],
    1,
    "F_G = m · g; g ≈ 9,81 m/s² auf der Erde; auf dem Mond kleiner.",
    "leicht",
    ["Gewichtskraft", "Mechanik"]
  ),
  q(
    "ph-pool-12-007",
    KAP[1],
    "Die Wellenlänge λ und die Frequenz f einer Welle hängen mit der Ausbreitungsgeschwindigkeit c zusammen durch:",
    ["c = λ + f", "c = λ · f", "c = λ / f", "c = λ² · f", "c = f / λ"],
    1,
    "c = λ · f (Ausbreitungsgeschwindigkeit = Wellenlänge mal Frequenz).",
    "leicht",
    ["Wellenlänge", "c = λf"]
  ),
  q(
    "ph-pool-12-008",
    KAP[2],
    "Wärme fließt spontan immer:",
    [
      "von kalt nach warm",
      "von warm nach kalt",
      "nur in Festkörpern",
      "nur in Flüssigkeiten",
      "gar nicht",
    ],
    1,
    "Zweiter Hauptsatz: Wärme fließt von höherer zu niedrigerer Temperatur.",
    "leicht",
    ["Wärme", "Temperatur"]
  ),
  q(
    "ph-pool-12-009",
    KAP[3],
    "Ohmsches Gesetz lautet:",
    ["U = R · I", "U = I / R", "R = U · I", "P = U · R", "I = U · R"],
    0,
    "U = R · I (Spannung = Widerstand mal Stromstärke).",
    "leicht",
    ["Ohmsches Gesetz", "E-Lehre"]
  ),
  q(
    "ph-pool-12-010",
    KAP[4],
    "Die Halbwertszeit bei radioaktivem Zerfall ist:",
    [
      "die Zeit bis zur vollständigen Umwandlung",
      "die Zeit, in der die Hälfte der Kerne zerfällt",
      "die doppelte Lebensdauer",
      "immer 1 Sekunde",
      "die Zeit bis zur Verdopplung der Aktivität",
    ],
    1,
    "Halbwertszeit T_½: Nach T_½ ist die Anzahl der noch nicht zerfallenen Kerne auf die Hälfte gesunken.",
    "mittel",
    ["Halbwertszeit", "Radioaktivität"]
  ),
  q(
    "ph-pool-12-011",
    KAP[0],
    "Was ist die Einheit der Leistung?",
    ["Joule", "Newton", "Watt", "Pascal", "Coulomb"],
    2,
    "Leistung P = Arbeit/Zeit; [P] = J/s = W (Watt).",
    "leicht",
    ["Leistung", "Watt"]
  ),
  q(
    "ph-pool-12-012",
    KAP[1],
    "Bei einer longitudinalen Welle schwingen die Teilchen:",
    [
      "senkrecht zur Ausbreitungsrichtung",
      "in Ausbreitungsrichtung",
      "gar nicht",
      "nur in einer Ebene",
      "kreisförmig",
    ],
    1,
    "Longitudinal: Schwingung in Ausbreitungsrichtung (z. B. Schall in Luft). Transversal: senkrecht (z. B. Licht).",
    "mittel",
    ["longitudinal", "Welle"]
  ),
  q(
    "ph-pool-12-013",
    KAP[2],
    "Der absolute Nullpunkt der Temperatur liegt bei:",
    ["0 °C", "−273,15 °C", "273,15 K", "0 K", "B und D sind richtig"],
    4,
    "Absoluter Nullpunkt: 0 K = −273,15 °C. Keine tiefere Temperatur möglich.",
    "leicht",
    ["absoluter Nullpunkt", "Kelvin"]
  ),
  q(
    "ph-pool-12-014",
    KAP[3],
    "Die elektrische Spannung U hat die Einheit:",
    ["Ampere", "Volt", "Ohm", "Coulomb", "Watt"],
    1,
    "Spannung U in Volt (V). 1 V = 1 J/C.",
    "leicht",
    ["Spannung", "Volt"]
  ),
  q(
    "ph-pool-12-015",
    KAP[4],
    "Gamma-Strahlung besteht aus:",
    [
      "Elektronen",
      "Heliumkernen",
      "Photonen (elektromagnetischer Strahlung)",
      "Neutronen",
      "Protonen",
    ],
    2,
    "γ-Strahlung = elektromagnetische Wellen (Photonen) sehr kurzer Wellenlänge.",
    "leicht",
    ["Gamma-Strahlung", "Kernphysik"]
  ),
  q(
    "ph-pool-12-016",
    KAP[0],
    "Die kinetische Energie eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["E = m · v", "E = ½ m · v²", "E = m · v²", "E = m · g · h", "E = F · s"],
    1,
    "E_kin = ½ m v². E_pot = m g h (potenzielle Energie).",
    "leicht",
    ["kinetische Energie", "Mechanik"]
  ),
  q(
    "ph-pool-12-017",
    KAP[1],
    "Reflexion bedeutet:",
    [
      "Brechung an einer Grenzfläche",
      "Rückwurf einer Welle an einer Grenzfläche (Einfallswinkel = Ausfallswinkel)",
      "Absorption",
      "Dispersion",
      "Beugung",
    ],
    1,
    "Reflexion: Einfallswinkel = Reflexionswinkel (z. B. Spiegel).",
    "leicht",
    ["Reflexion", "Optik"]
  ),
  q(
    "ph-pool-12-018",
    KAP[2],
    "Die spezifische Wärmekapazität c gibt an:",
    [
      "wie viel Wärme ein Körper enthält",
      "Wärmeenergie pro Masse und Temperaturdifferenz (z. B. J/(kg·K))",
      "die maximale Temperatur",
      "die Wärmeleitfähigkeit",
      "nur für Gase",
    ],
    1,
    "Q = m · c · ΔT; c = spezifische Wärmekapazität in J/(kg·K).",
    "mittel",
    ["spezifische Wärmekapazität", "Wärmelehre"]
  ),
  q(
    "ph-pool-12-019",
    KAP[3],
    "In einer Reihenschaltung von Widerständen gilt:",
    [
      "Die Spannung an jedem Widerstand ist gleich.",
      "Der Gesamtwiderstand ist die Summe der Einzelwiderstände.",
      "Der Strom verzweigt sich.",
      "Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.",
      "U gesamt = 0",
    ],
    1,
    "Reihenschaltung: R_ges = R₁ + R₂ + …; I überall gleich; U teilt sich auf.",
    "mittel",
    ["Reihenschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-12-020",
    KAP[4],
    "Der photoelektrische Effekt zeigt:",
    [
      "nur Welleneigenschaften des Lichts",
      "dass Licht aus Photonen besteht (Teilchencharakter)",
      "dass Elektronen immer entweichen",
      "nur bei sehr hoher Intensität",
      "dass die kinetische Energie der Elektronen proportional zur Intensität ist",
    ],
    1,
    "Photoelektrischer Effekt: Licht als Photonen (E = h·f); Elektronen werden ausgelöst; Kinetik hängt von der Frequenz ab, nicht von der Intensität.",
    "mittel",
    ["photoelektrischer Effekt", "Photonen"]
  ),
  q(
    "ph-pool-12-021",
    KAP[0],
    "Der Impuls p eines Körpers ist definiert als:",
    ["p = m / v", "p = m · v", "p = F · t", "p = E / v", "p = m · g"],
    1,
    "Impuls p = m · v (Einheit kg·m/s). Kraft F = Δp/Δt.",
    "leicht",
    ["Impuls", "Mechanik"]
  ),
  q(
    "ph-pool-12-022",
    KAP[1],
    "Totalreflexion tritt auf, wenn Licht:",
    [
      "von Luft in Wasser geht",
      "von Wasser in Luft geht und der Einfallswinkel größer als der Grenzwinkel ist",
      "senkrecht einfällt",
      "von einem Spiegel reflektiert wird",
      "durch eine Linse geht",
    ],
    1,
    "Totalreflexion: Übergang vom optisch dichteren ins dünnere Medium; Einfallswinkel ≥ Grenzwinkel.",
    "mittel",
    ["Totalreflexion", "Optik"]
  ),
  q(
    "ph-pool-12-023",
    KAP[2],
    "Konvektion ist:",
    [
      "Wärmeübertragung durch Strahlung",
      "Wärmeübertragung durch mitbewegte Materie (Strömung)",
      "nur in Festkörpern",
      "gleich Leitung",
      "immer vernachlässigbar",
    ],
    1,
    "Konvektion = Wärmetransport durch strömende Flüssigkeit oder Gas. Leitung = in Festkörper ohne Stofftransport.",
    "mittel",
    ["Konvektion", "Wärmeübertragung"]
  ),
  q(
    "ph-pool-12-024",
    KAP[3],
    "Die elektrische Leistung P bei Gleichstrom ist:",
    ["P = U / I", "P = U · I", "P = R · I", "P = U / R", "P = I / U"],
    1,
    "P = U · I (Leistung = Spannung mal Stromstärke). Mit U = R·I auch P = I²·R.",
    "leicht",
    ["elektrische Leistung", "E-Lehre"]
  ),
  q(
    "ph-pool-12-025",
    KAP[4],
    "Was ist eine Isotopie?",
    [
      "Gleiche Protonenzahl, verschiedene Neutronenzahl",
      "Gleiche Neutronenzahl, verschiedene Protonenzahl",
      "Gleiche Massenzahl",
      "Verschiedene Elemente",
      "Gleiche Ordnungszahl und gleiche Neutronenzahl",
    ],
    0,
    "Isotope: gleiche Ordnungszahl Z (Protonenzahl), verschiedene Neutronenzahl N.",
    "leicht",
    ["Isotop", "Kernphysik"]
  ),
  q(
    "ph-pool-12-026",
    KAP[0],
    "Der Druck p ist definiert als:",
    [
      "Kraft mal Fläche",
      "Kraft durch Fläche",
      "Fläche durch Kraft",
      "Kraft mal Weg",
      "Masse durch Volumen",
    ],
    1,
    "p = F / A (Druck = Kraft pro Fläche). Einheit Pa = N/m².",
    "leicht",
    ["Druck", "Pascal"]
  ),
  q(
    "ph-pool-12-027",
    KAP[1],
    "Bei der Brechung von Licht an einer Grenzfläche gilt:",
    [
      "Der Einfallswinkel ist immer gleich dem Brechungswinkel.",
      "Das Snelliussche Brechungsgesetz n₁·sin(α) = n₂·sin(β).",
      "Es gibt keine Brechung.",
      "Licht wird immer totalreflektiert.",
      "Die Frequenz ändert sich.",
    ],
    1,
    "Snellius: n₁·sin(α) = n₂·sin(β). n = Brechungsindex.",
    "mittel",
    ["Brechung", "Snellius", "Optik"]
  ),
  q(
    "ph-pool-12-028",
    KAP[2],
    "Die Wärmeleitung in einem Festkörper erfolgt vor allem durch:",
    [
      "Konvektion",
      "Photonen",
      "Schwingungen der Atome/Gitter (Phononen)",
      "Strömung",
      "nur an der Oberfläche",
    ],
    2,
    "Wärmeleitung in Festkörpern: Übertragung durch Gitterschwingungen (Phononen) bzw. freie Elektronen in Metallen.",
    "mittel",
    ["Wärmeleitung", "Festkörper"]
  ),
  q(
    "ph-pool-12-029",
    KAP[3],
    "Ein Kondensator speichert:",
    [
      "nur Strom",
      "elektrische Ladung bzw. Energie im elektrischen Feld",
      "nur Spannung",
      "nur Widerstand",
      "Wärme",
    ],
    1,
    "Kondensator: speichert Ladung Q = C·U; Energie E = ½·C·U².",
    "mittel",
    ["Kondensator", "E-Lehre"]
  ),
  q(
    "ph-pool-12-030",
    KAP[4],
    "Beta-Minus-Zerfall: Ein Neutron wird zu:",
    [
      "Proton + Elektron + Antineutrino",
      "Proton + Positron",
      "Alpha-Teilchen",
      "zwei Neutronen",
      "Proton + Neutrino",
    ],
    0,
    "β⁻-Zerfall: n → p + e⁻ + ν̄_e (Neutron wird zu Proton, Elektron, Antineutrino).",
    "mittel",
    ["Beta-Zerfall", "Kernphysik"]
  ),
  q(
    "ph-pool-12-031",
    KAP[0],
    "Die Zentripetalkraft wirkt:",
    [
      "tangential zur Bahn",
      "vom Zentrum weg",
      "in Richtung des Bahnzentrums (zentripetal)",
      "entgegen der Geschwindigkeit",
      "nur bei geradliniger Bewegung",
    ],
    2,
    "Zentripetalkraft F_z = m·v²/r zeigt zum Kreismittelpunkt und hält die Kreisbahn aufrecht.",
    "mittel",
    ["Zentripetalkraft", "Kreisbewegung"]
  ),
  q(
    "ph-pool-12-032",
    KAP[1],
    "Die Brennweite f einer Linse hängt ab von:",
    [
      "nur der Dicke",
      "Brechungsindex und Krümmungsradien (Linsenschleiferformel)",
      "nur der Farbe des Lichts",
      "der Lichtintensität",
      "nur der Größe der Linse",
    ],
    1,
    "Brennweite wird durch Brechungsindex n und Radien der Linsenflächen bestimmt.",
    "mittel",
    ["Brennweite", "Linse", "Optik"]
  ),
  q(
    "ph-pool-12-033",
    KAP[2],
    "Die latente Wärme bei einem Phasenübergang ist:",
    [
      "die Temperaturänderung",
      "die Wärme, die ohne Temperaturänderung zugeführt wird (z. B. beim Schmelzen)",
      "immer null",
      "die spezifische Wärmekapazität",
      "nur bei Gasen",
    ],
    1,
    "Latente Wärme (z. B. Schmelzwärme): Energie für Phasenübergang bei konstanter Temperatur.",
    "mittel",
    ["latente Wärme", "Phasenübergang"]
  ),
  q(
    "ph-pool-12-034",
    KAP[3],
    "Das Magnetfeld um einen geraden Leiter mit Strom:",
    [
      "existiert nicht",
      "ist radial vom Leiter weg",
      "umgibt den Leiter ringförmig (Rechte-Hand-Regel)",
      "ist nur im Leiter",
      "ist immer konstant",
    ],
    2,
    "Rechte-Hand-Regel: Daumen = Stromrichtung, gekrümmte Finger = Magnetfeldringe um den Leiter.",
    "mittel",
    ["Magnetfeld", "Leiter", "E-Lehre"]
  ),
  q(
    "ph-pool-12-035",
    KAP[4],
    "Die Bindungsenergie pro Nukleon ist:",
    [
      "in allen Kernen gleich",
      "bei mittleren Kernen (um Eisen) am größten",
      "bei sehr leichten Kernen am größten",
      "bei Uran am größten",
      "immer null",
    ],
    1,
    "Bindungsenergie pro Nukleon hat ein Maximum bei mittleren Massenzahlen (um Fe/Ni); Spaltung und Fusion setzen Energie frei.",
    "schwer",
    ["Bindungsenergie", "Kernphysik"]
  ),
  q(
    "ph-pool-12-036",
    KAP[0],
    "Reibungskraft wirkt typischerweise:",
    [
      "in Bewegungsrichtung",
      "entgegen der relativen Bewegung",
      "senkrecht zur Oberfläche",
      "nur in Flüssigkeiten",
      "nur bei Ruhe",
    ],
    1,
    "Reibung hemmt die relative Bewegung → Kraft entgegen der Bewegungsrichtung.",
    "leicht",
    ["Reibung", "Mechanik"]
  ),
  q(
    "ph-pool-12-037",
    KAP[1],
    "Beugung tritt auf, wenn eine Welle:",
    [
      "an einem Hindernis oder Spalt abgelenkt wird (in den Schattenbereich)",
      "reflektiert wird",
      "absorbiert wird",
      "sich in Vakuum ausbreitet",
      "nur bei Licht",
    ],
    0,
    "Beugung: Abweichung von der geradlinigen Ausbreitung an Kanten/Spalten; typisch für Wellen.",
    "mittel",
    ["Beugung", "Wellen"]
  ),
  q(
    "ph-pool-12-038",
    KAP[2],
    "Der erste Hauptsatz der Thermodynamik ist im Wesentlichen:",
    [
      "nur für Gase gültig",
      "Energieerhaltung (ΔU = Q + W)",
      "Wärme fließt von kalt nach warm",
      "der absolute Nullpunkt ist unerreichbar",
      "Entropie nimmt zu",
    ],
    1,
    "Erster Hauptsatz: ΔU = Q + W (Änderung innere Energie = Wärme + Arbeit). Energieerhaltung.",
    "mittel",
    ["1. Hauptsatz", "Thermodynamik"]
  ),
  q(
    "ph-pool-12-039",
    KAP[3],
    "Wechselstrom wechselt:",
    [
      "nur die Stärke",
      "Richtung und oft auch Betrag periodisch",
      "nie die Richtung",
      "nur die Spannung, nicht den Strom",
      "nur bei hoher Frequenz",
    ],
    1,
    "Wechselstrom: Stromstärke (und Spannung) ändern periodisch Richtung und Betrag (z. B. sinusförmig).",
    "leicht",
    ["Wechselstrom", "E-Lehre"]
  ),
  q(
    "ph-pool-12-040",
    KAP[4],
    "Die Aktivität A einer radioaktiven Probe (Zerfälle pro Zeit) wird in … angegeben.",
    ["Joule", "Becquerel (Bq) oder Sievert", "Coulomb", "Gray", "Becquerel (Bq)"],
    4,
    "Aktivität A: Zerfälle pro Sekunde; Einheit Becquerel (Bq). Sievert/Gray = Energiedosis/Äquivalentdosis.",
    "mittel",
    ["Aktivität", "Becquerel", "Radioaktivität"]
  ),
  q(
    "ph-pool-12-041",
    KAP[0],
    "Hebelgesetz: F₁ · r₁ = F₂ · r₂ bedeutet:",
    [
      "Kräfte sind immer gleich",
      "Bei Gleichgewicht: Kraft mal Hebelarm auf beiden Seiten gleich",
      "r ist immer null",
      "Nur bei geraden Hebeln",
      "F₁ = F₂",
    ],
    1,
    "Hebelgesetz: Drehmoment M = F · r; im Gleichgewicht M₁ = M₂.",
    "mittel",
    ["Hebel", "Drehmoment", "Mechanik"]
  ),
  q(
    "ph-pool-12-042",
    KAP[1],
    "Die Schallgeschwindigkeit in Wasser ist … als in Luft.",
    ["gleich", "kleiner", "größer", "nur bei 0 °C größer", "unbestimmt"],
    2,
    "Schall breitet sich in Flüssigkeiten/Festkörpern typischerweise schneller aus als in Gasen (Wasser ca. 1500 m/s, Luft ca. 340 m/s).",
    "leicht",
    ["Schall", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-12-043",
    KAP[2],
    "Ideales Gas: p · V = n · R · T. Bei konstanter Temperatur gilt:",
    [
      "V / T = const",
      "p · V = const (Boyle-Mariotte)",
      "p / T = const",
      "n · R = const",
      "p + V = const",
    ],
    1,
    "Boyle-Mariotte: Bei T = const ist p · V = const. Ideale Gasgleichung pV = nRT.",
    "mittel",
    ["ideales Gas", "Boyle-Mariotte"]
  ),
  q(
    "ph-pool-12-044",
    KAP[3],
    "Ein Transformator:",
    [
      "erzeugt Gleichstrom",
      "ändert die Spannung (Wechselspannung) durch Induktion",
      "speichert Ladung",
      "verstärkt nur den Strom",
      "funktioniert mit Gleichspannung gleich gut",
    ],
    1,
    "Transformator: Wechselspannung wird durch magnetische Kopplung (Induktion) hoch- oder heruntertransformiert (U₁/U₂ ≈ N₁/N₂).",
    "mittel",
    ["Transformator", "Induktion", "E-Lehre"]
  ),
  q(
    "ph-pool-12-045",
    KAP[4],
    "Compton-Effekt zeigt:",
    [
      "nur Wellennatur des Lichts",
      "Photonen können mit Elektronen elastisch stoßen (Wellenlängenänderung)",
      "nur Teilchennatur der Elektronen",
      "dass Licht keine Energie hat",
      "nur bei sichtbarem Licht",
    ],
    1,
    "Compton-Streuung: Photon stößt mit Elektron; Wellenlänge des Photons ändert sich → Teilchencharakter des Photons.",
    "schwer",
    ["Compton-Effekt", "Photonen", "Atomphysik"]
  ),
  q(
    "ph-pool-12-046",
    KAP[0],
    "Die Beschleunigung a hat die Einheit:",
    ["m/s", "m/s²", "N", "J", "kg"],
    1,
    "Beschleunigung a = Δv/Δt; [a] = m/s².",
    "leicht",
    ["Beschleunigung", "SI"]
  ),
  q(
    "ph-pool-12-047",
    KAP[1],
    "Resonanz tritt auf, wenn:",
    [
      "die Frequenz der Anregung der Eigenfrequenz des Systems entspricht",
      "immer bei Wellen",
      "nur in Schwingkreisen",
      "die Amplitude null ist",
      "keine Dämpfung vorliegt",
    ],
    0,
    "Resonanz: maximale Schwingungsamplitude, wenn Erregerfrequenz ≈ Eigenfrequenz des Systems.",
    "mittel",
    ["Resonanz", "Schwingung"]
  ),
  q(
    "ph-pool-12-048",
    KAP[2],
    "Der Wirkungsgrad η einer Wärmekraftmaschine ist:",
    [
      "immer 1",
      "η = abgegebene Nutzleistung / zugeführte Wärmeleistung",
      "immer 0",
      "unabhängig von den Temperaturen",
      "nur für Dampfmaschinen definiert",
    ],
    1,
    "η = P_nutz / P_zu (bzw. W_nutz / Q_zu). Zweiter Hauptsatz begrenzt η (Carnot: η_C = 1 − T_kalt/T_heiss).",
    "mittel",
    ["Wirkungsgrad", "Thermodynamik"]
  ),
  q(
    "ph-pool-12-049",
    KAP[3],
    "Die Kapazität C eines Kondensators hat die Einheit:",
    ["Ohm", "Farad (F)", "Henry", "Tesla", "Weber"],
    1,
    "Kapazität C in Farad (F). 1 F = 1 C/V.",
    "leicht",
    ["Kapazität", "Farad", "Kondensator"]
  ),
  q(
    "ph-pool-12-050",
    KAP[4],
    "Röntgenstrahlung entsteht, wenn:",
    [
      "Kerne zerfallen",
      "schnelle Elektronen abgebremst werden (Bremsstrahlung) oder Elektronen in inneren Schalen springen",
      "nur bei sehr hoher Temperatur",
      "Licht reflektiert wird",
      "Alpha-Teilchen auf Materie treffen",
    ],
    1,
    "Röntgen: Bremsstrahlung (Abbremsung schneller Elektronen) oder charakteristische Strahlung (Übergänge in inneren Schalen).",
    "mittel",
    ["Röntgenstrahlung", "Atomphysik"]
  ),
  q(
    "ph-pool-12-051",
    KAP[0],
    "Die Federkonstante D einer Feder gibt an:",
    [
      "die maximale Dehnung",
      "F = D · x (Kraft pro Auslenkung)",
      "nur die Länge",
      "die Masse der Feder",
      "die Geschwindigkeit",
    ],
    1,
    "Hookesches Gesetz: F = D · x (Rückstellkraft proportional zur Auslenkung).",
    "leicht",
    ["Feder", "Hooke", "Mechanik"]
  ),
  q(
    "ph-pool-12-052",
    KAP[1],
    "Stehende Welle: Knoten sind Stellen, an denen:",
    [
      "die Amplitude maximal ist",
      "die Auslenkung immer null ist",
      "die Frequenz null ist",
      "die Welle reflektiert wird",
      "die Energie maximal ist",
    ],
    1,
    "Knoten: Orte mit dauerhaft null Auslenkung. Bäuche: maximale Amplitude.",
    "mittel",
    ["stehende Welle", "Knoten", "Wellen"]
  ),
  q(
    "ph-pool-12-053",
    KAP[2],
    "Die Entropie S ist in der Thermodynamik ein Maß für:",
    [
      "die Temperatur",
      "die innere Energie",
      "die Unordnung / Anzahl der Mikrozustände",
      "die Wärme",
      "den Druck",
    ],
    2,
    "Entropie S: Zustandsgröße; Zunahme bei irreversiblen Prozessen; statistisch: Maß für die Anzahl der Mikrozustände.",
    "schwer",
    ["Entropie", "Thermodynamik"]
  ),
  q(
    "ph-pool-12-054",
    KAP[3],
    "Die Induktivität L einer Spule hat die Einheit:",
    ["Farad", "Ohm", "Henry (H)", "Tesla", "Weber"],
    2,
    "Induktivität L in Henry (H). U = L · dI/dt (Selbstinduktion).",
    "mittel",
    ["Induktivität", "Henry", "Spule"]
  ),
  q(
    "ph-pool-12-055",
    KAP[4],
    "Die Kernladungszahl Z eines Atoms gibt an:",
    [
      "die Neutronenzahl",
      "die Massenzahl",
      "die Protonenzahl (Ordnungszahl)",
      "die Elektronenzahl in der Hülle nur bei Ionen",
      "die Nukleonenzahl",
    ],
    2,
    "Kernladungszahl Z = Anzahl der Protonen im Kern = Ordnungszahl.",
    "leicht",
    ["Kernladungszahl", "Ordnungszahl", "Atomphysik"]
  ),
  q(
    "ph-pool-12-056",
    KAP[0],
    "Rollreibung ist typischerweise … als Haftreibung bei gleichen Oberflächen.",
    ["größer", "kleiner", "gleich", "nur bei Rädern größer", "unbestimmt"],
    1,
    "Haftreibung > Gleitreibung > Rollreibung (in der Regel).",
    "mittel",
    ["Reibung", "Rollreibung", "Mechanik"]
  ),
  q(
    "ph-pool-12-057",
    KAP[1],
    "Polarisation von Licht bedeutet:",
    [
      "Änderung der Frequenz",
      "Festlegung der Schwingungsrichtung (z. B. nur eine Ebene)",
      "nur bei Laserlicht",
      "Absorption",
      "Dispersion",
    ],
    1,
    "Polarisation: elektrisches Feld schwingt in fester Richtung (transversale Welle).",
    "mittel",
    ["Polarisation", "Licht", "Optik"]
  ),
  q(
    "ph-pool-12-058",
    KAP[2],
    "Ein Perpetuum mobile erster Art:",
    [
      "verletzt den ersten Hauptsatz (Energieerhaltung)",
      "ist theoretisch möglich",
      "verletzt nur den zweiten Hauptsatz",
      "existiert bereits",
      "verbraucht keine Energie",
    ],
    0,
    "Perpetuum mobile 1. Art: Maschine, die ohne Energiezufuhr Arbeit verrichtet → Verletzung der Energieerhaltung.",
    "mittel",
    ["Perpetuum mobile", "Hauptsätze"]
  ),
  q(
    "ph-pool-12-059",
    KAP[3],
    "Ein Elektromagnet entsteht durch:",
    [
      "nur Permanentmagnete",
      "stromdurchflossene Spule (oft mit Eisenkern)",
      "nur Gleichstrom",
      "nur Wechselstrom",
      "ungeladene Körper",
    ],
    1,
    "Elektromagnet: Spule mit Strom erzeugt Magnetfeld; Eisenkern verstärkt es.",
    "leicht",
    ["Elektromagnet", "Magnetfeld", "E-Lehre"]
  ),
  q(
    "ph-pool-12-060",
    KAP[4],
    "Die Massenzahl A eines Kerns ist:",
    [
      "nur die Protonenzahl",
      "Protonenzahl + Neutronenzahl (Nukleonenzahl)",
      "die Ordnungszahl",
      "die Elektronenzahl",
      "immer 12",
    ],
    1,
    "Massenzahl A = Z + N (Protonen + Neutronen). Nuklid: ᴬ_Z X.",
    "leicht",
    ["Massenzahl", "Kernphysik"]
  ),
];
