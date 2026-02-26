/**
 * Physik BMS Pool 17 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool17: Question[] = [
  q(
    "ph-pool-17-001",
    KAP[0],
    "Die Einheit Kilogramm (kg) gehört zur Größe:",
    ["Kraft", "Masse", "Energie", "Druck", "Leistung"],
    1,
    "Masse hat die SI-Einheit kg.",
    "leicht",
    ["SI", "Masse"]
  ),
  q(
    "ph-pool-17-002",
    KAP[1],
    "Die Schwingungsdauer T eines Federpendels hängt ab von:",
    [
      "nur der Amplitude",
      "Masse m und Federkonstante D: T = 2π√(m/D)",
      "nur der Masse",
      "nur D",
      "der Reibung",
    ],
    1,
    "T = 2π√(m/D) für ungedämpftes Federpendel.",
    "mittel",
    ["Federpendel", "Periodendauer"]
  ),
  q(
    "ph-pool-17-003",
    KAP[2],
    "Die Einheit Kelvin (K) ist die SI-Basiseinheit für:",
    ["Wärme", "Temperatur", "Energie", "Entropie", "Druck"],
    1,
    "Kelvin ist die SI-Basiseinheit der thermodynamischen Temperatur.",
    "leicht",
    ["Kelvin", "Temperatur"]
  ),
  q(
    "ph-pool-17-004",
    KAP[3],
    "Die Spannung U zwischen zwei Punkten gibt an:",
    [
      "die Stromstärke",
      "die pro Ladungseinheit verrichtete Arbeit (Potentialdifferenz)",
      "den Widerstand",
      "die Leistung",
      "die Ladung",
    ],
    1,
    "U = W/Q (Spannung = Arbeit pro Ladung).",
    "leicht",
    ["Spannung", "Definition"]
  ),
  q(
    "ph-pool-17-005",
    KAP[4],
    "Ein Neutronenstern entsteht nach einer Supernova, wenn:",
    [
      "nur Wasserstoff übrig bleibt",
      "der Kern kollabiert und Elektronen mit Protonen zu Neutronen werden",
      "nur Helium übrig ist",
      "keine Fusion mehr stattfindet",
      "der Stern explodiert",
    ],
    1,
    "Neutronenstern: extrem dicht, überwiegend Neutronen (Einfang e⁻ + p → n).",
    "schwer",
    ["Neutronenstern", "Astrophysik"]
  ),
  q(
    "ph-pool-17-006",
    KAP[0],
    "Die Geschwindigkeit v bei gleichmäßig beschleunigter Bewegung aus der Ruhe ist:",
    ["v = s/t", "v = a·t", "v = ½a·t²", "v = a/s", "v = konstant"],
    1,
    "v(t) = v₀ + a·t; bei v₀ = 0: v = a·t.",
    "leicht",
    ["Geschwindigkeit", "Beschleunigung"]
  ),
  q(
    "ph-pool-17-007",
    KAP[1],
    "Die Schallgeschwindigkeit in Luft bei 0 °C beträgt etwa:",
    ["330 m/s", "340 m/s", "1500 m/s", "5000 m/s", "3·10⁸ m/s"],
    0,
    "Schall in Luft bei 0 °C ca. 331 m/s.",
    "leicht",
    ["Schallgeschwindigkeit", "Luft"]
  ),
  q(
    "ph-pool-17-008",
    KAP[2],
    "Die Wärme Q und die Temperatur T:",
    [
      "sind dasselbe",
      "Q ist Energie, T ist Zustandsgröße (Intensitätsgröße)",
      "Q ist immer größer als T",
      "T hat die Einheit Joule",
      "Q hat die Einheit Kelvin",
    ],
    1,
    "Q = Wärmemenge (Energie in J), T = Temperatur (K oder °C).",
    "leicht",
    ["Wärme", "Temperatur"]
  ),
  q(
    "ph-pool-17-009",
    KAP[3],
    "Ein Leiter mit Widerstand R wird bei konstanter Spannung U betrieben. Die Leistung ist:",
    ["P = U/R", "P = U²/R", "P = R/U", "P = U·R", "P = U/R²"],
    1,
    "P = U·I und U = R·I → P = U²/R.",
    "mittel",
    ["Leistung", "Widerstand"]
  ),
  q(
    "ph-pool-17-010",
    KAP[4],
    "Die Strahlenschutzregel „Abstand halten“ nutzt aus, dass:",
    [
      "die Dosis proportional zum Abstand ist",
      "die Dosis mit 1/r² abnimmt (bei punktförmiger Quelle)",
      "die Dosis konstant bleibt",
      "keine Streuung auftritt",
      "nur Alpha-Strahlung relevant ist",
    ],
    1,
    "Energiefluss ∝ 1/r² → Dosis ∝ 1/r².",
    "leicht",
    ["Strahlenabstand", "1/r²"]
  ),
  q(
    "ph-pool-17-011",
    KAP[0],
    "Die Erdbeschleunigung g hat den Wert etwa:",
    ["1 m/s²", "5 m/s²", "9,81 m/s²", "20 m/s²", "10 N/kg"],
    2,
    "g ≈ 9,81 m/s² (auch 10 N/kg).",
    "leicht",
    ["Erdbeschleunigung", "g"]
  ),
  q(
    "ph-pool-17-012",
    KAP[1],
    "Ein Ultraschall hat eine Frequenz:",
    [
      "unter 20 Hz",
      "oberhalb des hörbaren Bereichs (z. B. > 20 kHz)",
      "genau 1000 Hz",
      "von 20 Hz bis 20 kHz",
      "von 0 Hz",
    ],
    1,
    "Ultraschall: f > 20 kHz (nicht hörbar).",
    "leicht",
    ["Ultraschall", "Frequenz"]
  ),
  q(
    "ph-pool-17-013",
    KAP[2],
    "Die molare Wärmekapazität C_mol hat die Einheit:",
    ["J/K", "J/(mol·K)", "J/(kg·K)", "mol/K", "K/J"],
    1,
    "C_mol in J/(mol·K).",
    "mittel",
    ["molare Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-17-014",
    KAP[3],
    "Ein Sicherungsautomat unterbricht den Strom, wenn:",
    [
      "die Spannung zu hoch ist",
      "der Strom einen Grenzwert überschreitet",
      "der Widerstand zu groß wird",
      "keine Leistung verbraucht wird",
      "Gleichstrom fließt",
    ],
    1,
    "Sicherung: schützt bei Überstrom (Kurzschluss, Überlast).",
    "leicht",
    ["Sicherung", "Stromkreis"]
  ),
  q(
    "ph-pool-17-015",
    KAP[4],
    "Die Anzahl der Neutronen N im Kern ergibt sich aus:",
    ["N = Z", "N = A − Z", "N = A + Z", "N = A/Z", "N = Z − A"],
    1,
    "A = Z + N → N = A − Z.",
    "leicht",
    ["Neutronenzahl", "Kern"]
  ),
  q(
    "ph-pool-17-016",
    KAP[0],
    "Ein Körper mit Masse 10 kg hat auf dem Mond (g_Mond ≈ 1,6 m/s²) eine Gewichtskraft von etwa:",
    ["100 N", "16 N", "10 N", "1,6 N", "0 N"],
    1,
    "F_G = m·g = 10·1,6 N = 16 N.",
    "leicht",
    ["Gewichtskraft", "Mond"]
  ),
  q(
    "ph-pool-17-017",
    KAP[1],
    "Die Wellenlänge des roten Lichts ist … als die des violetten Lichts.",
    ["kürzer", "länger", "gleich", "doppelt so lang", "halb so lang"],
    1,
    "Rot: λ größer; Violett: λ kleiner (ca. 380–780 nm).",
    "leicht",
    ["Wellenlänge", "Lichtfarben"]
  ),
  q(
    "ph-pool-17-018",
    KAP[2],
    "Beim Schmelzen von Eis bei 0 °C:",
    [
      "steigt die Temperatur",
      "bleibt die Temperatur konstant, bis alles geschmolzen ist",
      "sinkt die Temperatur",
      "wird keine Wärme zugeführt",
      "entsteht Dampf",
    ],
    1,
    "Phasenübergang bei konstanter Temperatur; Schmelzwärme wird zugeführt.",
    "leicht",
    ["Schmelzen", "Temperatur"]
  ),
  q(
    "ph-pool-17-019",
    KAP[3],
    "Die elektrische Ladung des Elektrons e beträgt etwa:",
    ["+1,6·10⁻¹⁹ C", "−1,6·10⁻¹⁹ C", "0 C", "1 C", "−1 C"],
    1,
    "Elementarladung e ≈ 1,602·10⁻¹⁹ C; Elektron: −e.",
    "leicht",
    ["Elementarladung", "Elektron"]
  ),
  q(
    "ph-pool-17-020",
    KAP[4],
    "Die Zerfallsreihe von Thorium-232 endet bei dem stabilen Nuklid:",
    ["Uran-238", "Blei-208", "Radium-226", "Polonium-210", "Bismut-209"],
    1,
    "Th-232-Reihe (4n) endet bei Pb-208.",
    "schwer",
    ["Zerfallsreihe", "Thorium"]
  ),
  q(
    "ph-pool-17-021",
    KAP[0],
    "Die Reibungskraft F_R bei Gleitreibung ist näherungsweise proportional zur:",
    ["Geschwindigkeit", "Normalkraft F_N: F_R = μ·F_N", "Masse", "Fläche", "Temperatur"],
    1,
    "Gleitreibung: F_R = μ·F_N (μ = Reibungskoeffizient).",
    "leicht",
    ["Gleitreibung", "Reibung"]
  ),
  q(
    "ph-pool-17-022",
    KAP[1],
    "Ein Konvexspiegel (Zerstreuungsspiegel) hat eine Brennweite f, die:",
    ["positiv ist", "negativ ist", "null ist", "unendlich ist", "von der Wellenlänge abhängt"],
    1,
    "Zerstreuungsspiegel: f < 0.",
    "mittel",
    ["Konvexspiegel", "Brennweite"]
  ),
  q(
    "ph-pool-17-023",
    KAP[2],
    "Die Verdampfungsentropie ist:",
    [
      "die Temperatur",
      "die Entropieänderung beim Verdampfen (ΔS = Q_rev/T)",
      "die Wärmekapazität",
      "null",
      "die Verdampfungswärme",
    ],
    1,
    "ΔS = Q_rev/T beim Phasenübergang.",
    "schwer",
    ["Verdampfungsentropie", "Entropie"]
  ),
  q(
    "ph-pool-17-024",
    KAP[3],
    "Die Einheit Weber (Wb) gehört zur Größe:",
    ["Stromstärke", "magnetischer Fluss Φ", "Feldstärke", "Induktivität", "Kapazität"],
    1,
    "Magnetischer Fluss Φ in Weber (Wb); 1 Wb = 1 V·s.",
    "mittel",
    ["Weber", "magnetischer Fluss"]
  ),
  q(
    "ph-pool-17-025",
    KAP[4],
    "Die Compton-Wellenlänge λ_C des Elektrons ist eine Konstante, die:",
    [
      "die Masse des Protons angibt",
      "die typische Wellenlängenänderung bei Compton-Streuung charakterisiert",
      "die Frequenz des Lichts angibt",
      "nur bei Röntgenstrahlung vorkommt",
      "null ist",
    ],
    1,
    "λ_C = h/(m_e·c) ≈ 2,43 pm; charakteristische Länge für Compton-Effekt.",
    "schwer",
    ["Compton-Wellenlänge", "Quantenphysik"]
  ),
  q(
    "ph-pool-17-026",
    KAP[0],
    "Der Druck in 10 m Wassertiefe (ρ ≈ 1000 kg/m³) beträgt zusätzlich zum Luftdruck etwa:",
    ["100 Pa", "1000 Pa", "100 000 Pa (1 bar)", "10 000 Pa", "1 Pa"],
    2,
    "Schweredruck: p = ρ·g·h ≈ 1000·10·10 Pa = 100 kPa ≈ 1 bar.",
    "mittel",
    ["Schweredruck", "Wasser"]
  ),
  q(
    "ph-pool-17-027",
    KAP[1],
    "Die Schallgeschwindigkeit in einem Festkörper ist typischerweise … als in Luft.",
    ["kleiner", "größer", "gleich", "unbestimmt", "nur bei hoher Temperatur größer"],
    1,
    "Festkörper: größere Schallgeschwindigkeit (z. B. Stahl ca. 5000 m/s).",
    "leicht",
    ["Schall", "Festkörper"]
  ),
  q(
    "ph-pool-17-028",
    KAP[2],
    "Ein ideales Gas hat die innere Energie U. Bei isochorer Erwärmung:",
    [
      "bleibt U konstant",
      "nimmt U zu (Wärmezufuhr erhöht T)",
      "nimmt U ab",
      "wird keine Wärme ausgetauscht",
      "bleibt T konstant",
    ],
    1,
    "Isochor: dV = 0 → dU = dQ; Erwärmung erhöht U.",
    "mittel",
    ["isochor", "innere Energie"]
  ),
  q(
    "ph-pool-17-029",
    KAP[3],
    "Die elektrische Leitfähigkeit σ ist der Kehrwert von:",
    [
      "der Kapazität",
      "dem spezifischen Widerstand ρ: σ = 1/ρ",
      "der Induktivität",
      "der Stromstärke",
      "der Spannung",
    ],
    1,
    "σ = 1/ρ; [σ] = S/m (Siemens pro Meter).",
    "mittel",
    ["Leitfähigkeit", "spezifischer Widerstand"]
  ),
  q(
    "ph-pool-17-030",
    KAP[4],
    "Die Äquivalentdosis berücksichtigt im Vergleich zur Energiedosis:",
    [
      "nur die Energie",
      "den Strahlentyp (Wichtungsfaktor w_R) für biologische Wirkung",
      "nur den Abstand",
      "nur die Aktivität",
      "nur die Halbwertszeit",
    ],
    1,
    "H = D·w_R (w_R abhängig von Strahlenart).",
    "mittel",
    ["Äquivalentdosis", "Wichtungsfaktor"]
  ),
  q(
    "ph-pool-17-031",
    KAP[0],
    "Die Bahnbeschleunigung bei gleichförmiger Kreisbewegung (Radius r, Geschwindigkeit v) beträgt:",
    ["v·r", "v²/r", "v/r", "r/v", "v·r²"],
    1,
    "Zentripetalbeschleunigung a = v²/r.",
    "mittel",
    ["Kreisbewegung", "Zentripetalbeschleunigung"]
  ),
  q(
    "ph-pool-17-032",
    KAP[1],
    "Bei der Reflexion am festen Ende einer Welle:",
    [
      "bleibt die Phase erhalten",
      "tritt eine Phasenänderung von π auf (Einlaufende und reflektierte Welle)",
      "wird die Welle absorbiert",
      "ändert sich die Frequenz",
      "verschwindet die Amplitude",
    ],
    1,
    "Feste Einspannung: Reflexion mit Phasensprung π.",
    "mittel",
    ["Reflexion", "Phasensprung"]
  ),
  q(
    "ph-pool-17-033",
    KAP[2],
    "Der Wärmestrom Q̇ durch eine Wand der Fläche A und Dicke d bei Temperaturdifferenz ΔT ist proportional zu:",
    ["A·d/ΔT", "A·ΔT/d (bei konstantem λ)", "d/(A·ΔT)", "A + ΔT", "1/A"],
    1,
    "Q̇ = λ·A·ΔT/d (Fourier).",
    "mittel",
    ["Wärmestrom", "Wärmeleitung"]
  ),
  q(
    "ph-pool-17-034",
    KAP[3],
    "Ein Elektromotor wandelt um:",
    [
      "elektrische Energie in Wärme",
      "elektrische Energie in mechanische Arbeit",
      "mechanische in elektrische",
      "nur Strom in Spannung",
      "Wärme in Licht",
    ],
    1,
    "Motor: E_el → E_mech (Lorentzkraft auf Leiter im Magnetfeld).",
    "leicht",
    ["Elektromotor", "Energieumwandlung"]
  ),
  q(
    "ph-pool-17-035",
    KAP[4],
    "Die Strahlung von Radon-222 ist vor allem:",
    ["Beta", "Alpha", "Gamma", "Neutronen", "Röntgen"],
    1,
    "Rn-222: Alpha-Strahler (Edelgas, Gefahr in Gebäuden).",
    "mittel",
    ["Radon", "Alpha"]
  ),
  q(
    "ph-pool-17-036",
    KAP[0],
    "Das Trägheitsmoment I einer homogenen Vollkugel (Masse M, Radius R) um einen Durchmesser ist:",
    ["I = M·R²", "I = (2/5)·M·R²", "I = (1/2)·M·R²", "I = M·R", "I = (3/2)·M·R²"],
    1,
    "Vollkugel: I = (2/5)·M·R².",
    "schwer",
    ["Trägheitsmoment", "Kugel"]
  ),
  q(
    "ph-pool-17-037",
    KAP[1],
    "Die Beugung von Röntgenstrahlung an Kristallen wird genutzt zur:",
    [
      "Abschirmung",
      "Strukturanalyse (Bragg-Reflexion)",
      "Therapie",
      "Bildgebung nur",
      "Dosimetrie",
    ],
    1,
    "Bragg: 2d·sin(θ) = n·λ; Bestimmung von Gitterabständen.",
    "mittel",
    ["Röntgenbeugung", "Kristall"]
  ),
  q(
    "ph-pool-17-038",
    KAP[2],
    "Die freie Enthalpie G = H − T·S nimmt bei spontanen Prozessen bei konstantem p und T:",
    [
      "zu",
      "ab (Gleichgewicht bei Minimum)",
      "bleibt konstant",
      "ist nicht definiert",
      "wechselt das Vorzeichen",
    ],
    1,
    "Spontan bei p, T = const: ΔG < 0; Gleichgewicht bei G_min.",
    "schwer",
    ["freie Enthalpie", "Spontaneität"]
  ),
  q(
    "ph-pool-17-039",
    KAP[3],
    "Die Phasenverschiebung zwischen Strom und Spannung bei einer idealen Spule im Wechselstromkreis beträgt:",
    ["0°", "90° (Spannung eilt Strom voraus)", "180°", "−90°", "45°"],
    1,
    "Ideale Spule: U eilt I um 90° voraus (Induktivität).",
    "mittel",
    ["Phasenverschiebung", "Spule"]
  ),
  q(
    "ph-pool-17-040",
    KAP[4],
    "Die Zerfallskonstante λ hat die Einheit:",
    ["s", "1/s", "Bq", "J", "kg"],
    1,
    "λ in 1/s; A = λ·N mit A in Bq.",
    "leicht",
    ["Zerfallskonstante", "Einheit"]
  ),
  q(
    "ph-pool-17-041",
    KAP[0],
    "Die Coriolisbeschleunigung entsteht in einem rotierenden Bezugssystem für einen Körper mit Relativgeschwindigkeit und ist proportional zu:",
    [
      "der Masse",
      "ω und v (Winkelgeschwindigkeit und Relativgeschwindigkeit)",
      "nur r",
      "der Zeit",
      "g",
    ],
    1,
    "Coriolis: a_C ∝ ω×v.",
    "schwer",
    ["Coriolis", "Beschleunigung"]
  ),
  q(
    "ph-pool-17-042",
    KAP[1],
    "Die Brechung von Licht beim Übergang Luft → Glas:",
    [
      "ist immer Totalreflexion",
      "führt zum Lot hin (Einfallswinkel > Brechungswinkel)",
      "führt vom Lot weg",
      "ändert die Frequenz",
      "ändert die Wellenlänge im Glas",
    ],
    1,
    "Luft → Glas (n größer): Brechung zum Lot; Frequenz bleibt.",
    "mittel",
    ["Brechung", "Luft-Glas"]
  ),
  q(
    "ph-pool-17-043",
    KAP[2],
    "Die Latentwärme beim Schmelzen von Eis beträgt etwa:",
    ["334 kJ/kg", "2257 kJ/kg", "4,2 kJ/(kg·K)", "0 kJ/kg", "100 kJ/kg"],
    0,
    "Schmelzwärme Eis ca. 334 kJ/kg.",
    "mittel",
    ["Schmelzwärme", "Eis"]
  ),
  q(
    "ph-pool-17-044",
    KAP[3],
    "Ein Generator wandelt um:",
    [
      "elektrische in mechanische Energie",
      "mechanische in elektrische Energie (Induktion)",
      "Wärme in Strom",
      "Strom in Wärme",
      "Licht in Strom",
    ],
    1,
    "Generator: Bewegung (Rotation) → Induktion → elektrische Energie.",
    "leicht",
    ["Generator", "Induktion"]
  ),
  q(
    "ph-pool-17-045",
    KAP[4],
    "Die Reichweite von Beta-Strahlung in Gewebe beträgt typischerweise:",
    ["wenige µm", "mm bis wenige cm", "mehrere Meter", "unendlich", "null"],
    1,
    "β-Strahlung: Reichweite in Gewebe mm bis wenige cm.",
    "mittel",
    ["Beta", "Reichweite", "Gewebe"]
  ),
  q(
    "ph-pool-17-046",
    KAP[0],
    "Die Zentripetalkraft F_z bei einer Kreisbewegung (m, v, r) ist:",
    ["F_z = m·v", "F_z = m·v²/r", "F_z = v/r", "F_z = m·r", "F_z = v²/r"],
    1,
    "F_z = m·v²/r (zum Zentrum).",
    "leicht",
    ["Zentripetalkraft", "Formel"]
  ),
  q(
    "ph-pool-17-047",
    KAP[1],
    "Die Frequenz einer Grundschwingung auf einer Saite der Länge L bei der Schwingungsgeschwindigkeit c ist:",
    ["f = c·L", "f = c/(2L)", "f = 2c/L", "f = L/c", "f = c²/L"],
    1,
    "Grundfrequenz: f₁ = c/(2L) (ein Halbwellenbauch).",
    "mittel",
    ["Saite", "Grundfrequenz"]
  ),
  q(
    "ph-pool-17-048",
    KAP[2],
    "Die Zustandsgröße Entropie S hat die Einheit:",
    ["J", "J/K", "K", "J·K", "W"],
    1,
    "S in J/K.",
    "leicht",
    ["Entropie", "Einheit"]
  ),
  q(
    "ph-pool-17-049",
    KAP[3],
    "Die magnetische Flussdichte B einer langen Spule (n Windungen/Länge, I Strom) ist im Innern:",
    ["B = μ₀·I/(2π·r)", "B = μ₀·n·I", "B = 0", "B = n·I", "B = μ₀·I²"],
    1,
    "B = μ₀·n·I (homogen im Inneren).",
    "mittel",
    ["Spule", "Magnetfeld"]
  ),
  q(
    "ph-pool-17-050",
    KAP[4],
    "Die Bindungsenergie eines Kerns ist die Energie, die frei wird, wenn:",
    [
      "der Kern gespalten wird",
      "der Kern aus freien Nukleonen zusammengesetzt wird (negativ: Betrag = Ablösungsarbeit)",
      "ein Elektron eingefangen wird",
      "Alpha emittiert wird",
      "Beta emittiert wird",
    ],
    1,
    "Bindungsenergie: Energie, die bei Bildung des Kerns aus Nukleonen frei wird.",
    "mittel",
    ["Bindungsenergie", "Definition"]
  ),
  q(
    "ph-pool-17-051",
    KAP[0],
    "Die potentielle Energie im Gravitationsfeld (nahe Erdoberfläche) und die kinetische Energie können sich bei reibungsfreiem Fall umwandeln; die Summe:",
    ["nimmt zu", "bleibt konstant", "nimmt ab", "ist null", "ist nur potentiell"],
    1,
    "Energieerhaltung: E_pot + E_kin = const.",
    "leicht",
    ["Energieerhaltung", "Fall"]
  ),
  q(
    "ph-pool-17-052",
    KAP[1],
    "Ein Beugungsminimum beim Einzelspalt (Spaltbreite b, Wellenlänge λ) tritt auf für sin(α) =:",
    ["0", "λ/b", "k·λ/b mit k = 1, 2, 3, …", "b/λ", "λ·b"],
    2,
    "Einzelspalt: Minimum bei sin(α) = k·λ/b (k = ±1, ±2, …).",
    "schwer",
    ["Einzelspalt", "Minimum"]
  ),
  q(
    "ph-pool-17-053",
    KAP[2],
    "Die Wärmepumpe entzieht dem kalten Reservoir Wärme und gibt sie an das warme ab. Dafür muss:",
    [
      "keine Arbeit zugeführt werden",
      "Arbeit zugeführt werden (2. Hauptsatz)",
      "nur Wärme zugeführt werden",
      "die Entropie abnehmen",
      "T_kalt > T_warm sein",
    ],
    1,
    "Wärmepumpe: Wärme von kalt nach warm nur mit Arbeitsaufwand.",
    "mittel",
    ["Wärmepumpe", "Arbeit"]
  ),
  q(
    "ph-pool-17-054",
    KAP[3],
    "Die Phasenverschiebung zwischen Strom und Spannung bei einem idealen Kondensator im Wechselstromkreis beträgt:",
    ["0°", "90° (Strom eilt Spannung voraus)", "180°", "−90°", "45°"],
    1,
    "Idealer Kondensator: I eilt U um 90° voraus.",
    "mittel",
    ["Kondensator", "Wechselstrom"]
  ),
  q(
    "ph-pool-17-055",
    KAP[4],
    "Die Strahlenbelastung durch einen Langstreckenflug ist vor allem verursacht durch:",
    [
      "Alpha-Strahlung",
      "kosmische Strahlung (Höhenstrahlung)",
      "terrestrische Strahlung",
      "Radon",
      "medizinische Anwendungen",
    ],
    1,
    "Flug: erhöhte kosmische Strahlung (Höhe).",
    "leicht",
    ["kosmische Strahlung", "Flug"]
  ),
  q(
    "ph-pool-17-056",
    KAP[0],
    "Die Gleitreibungskraft ist typischerweise … als die Haftreibungskraft (gleiche Normalkraft).",
    ["größer", "kleiner", "gleich", "doppelt so groß", "unbestimmt"],
    1,
    "Haftreibung > Gleitreibung (μ_H > μ_G).",
    "leicht",
    ["Reibung", "Haft/Gleit"]
  ),
  q(
    "ph-pool-17-057",
    KAP[1],
    "Die Lichtgeschwindigkeit in Wasser (n ≈ 1,33) beträgt etwa:",
    ["3·10⁸ m/s", "2,25·10⁸ m/s", "4·10⁸ m/s", "1,5·10⁸ m/s", "c/n ist falsch"],
    1,
    "c_Wasser = c_Vakuum/n ≈ 3·10⁸/1,33 m/s ≈ 2,25·10⁸ m/s.",
    "mittel",
    ["Lichtgeschwindigkeit", "Wasser"]
  ),
  q(
    "ph-pool-17-058",
    KAP[2],
    "Die adiabatische Zustandsänderung eines idealen Gases gehorcht der Beziehung:",
    ["p·V = const", "p·V^κ = const (κ = c_p/c_v)", "T·V = const", "p/T = const", "V/T = const"],
    1,
    "Adiabatisch: p·V^κ = const mit κ = c_p/c_v.",
    "mittel",
    ["adiabatisch", "Zustandsgleichung"]
  ),
  q(
    "ph-pool-17-059",
    KAP[3],
    "Ein Ohmmeter misst:",
    ["die Spannung", "den Widerstand", "die Ladung", "die Kapazität", "die Induktivität"],
    1,
    "Ohmmeter: Messung des Widerstands (oft durch Strom-Spannungs-Messung).",
    "leicht",
    ["Ohmmeter", "Widerstand"]
  ),
  q(
    "ph-pool-17-060",
    KAP[4],
    "Die Aktivität einer Probe (Zerfälle pro Sekunde) wird in … gemessen.",
    ["Gray", "Sievert", "Becquerel", "Curie nur historisch", "Joule"],
    2,
    "Aktivität in Bq (1 Bq = 1 Zerfall/s); Ci veraltet.",
    "leicht",
    ["Aktivität", "Becquerel"]
  ),
];
