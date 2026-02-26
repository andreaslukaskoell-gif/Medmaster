/**
 * Physik BMS Pool 20 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool20: Question[] = [
  q(
    "ph-pool-20-001",
    KAP[0],
    "Die SI-Basiseinheit für die Lichtstärke ist:",
    ["Lumen", "Lux", "Candela", "Watt", "Joule"],
    2,
    "Candela (cd) ist die SI-Basiseinheit der Lichtstärke.",
    "leicht",
    ["SI", "Candela"]
  ),
  q(
    "ph-pool-20-002",
    KAP[1],
    "Die Ausbreitungsgeschwindigkeit einer elektromagnetischen Welle im Vakuum ist:",
    [
      "abhängig von der Frequenz",
      "konstant (Lichtgeschwindigkeit c)",
      "abhängig von der Amplitude",
      "null",
      "abhängig vom Beobachter",
    ],
    1,
    "Im Vakuum: c = const für alle EM-Wellen.",
    "leicht",
    ["Lichtgeschwindigkeit", "Vakuum"]
  ),
  q(
    "ph-pool-20-003",
    KAP[2],
    "Die Temperatur eines Körpers ist ein Maß für:",
    [
      "die Wärmemenge",
      "die mittlere kinetische Energie der Teilchen (bei Gasen)",
      "die innere Energie",
      "die Entropie",
      "die Wärmekapazität",
    ],
    1,
    "Temperatur ∝ mittlere kinetische Energie (bei idealem Gas).",
    "leicht",
    ["Temperatur", "kinetische Energie"]
  ),
  q(
    "ph-pool-20-004",
    KAP[3],
    "Der elektrische Widerstand R eines Leiters der Länge l und Querschnittsfläche A mit spezifischem Widerstand ρ ist:",
    ["R = ρ·A/l", "R = ρ·l/A", "R = l/(ρ·A)", "R = A/(ρ·l)", "R = ρ·l·A"],
    1,
    "R = ρ·l/A.",
    "leicht",
    ["Widerstand", "spezifischer Widerstand"]
  ),
  q(
    "ph-pool-20-005",
    KAP[4],
    "Die Einheit Becquerel (Bq) gibt an:",
    [
      "Energiedosis",
      "Aktivität (Zerfälle pro Sekunde)",
      "Äquivalentdosis",
      "Halbwertszeit",
      "Reichweite",
    ],
    1,
    "1 Bq = 1 Zerfall/s.",
    "leicht",
    ["Becquerel", "Aktivität"]
  ),
  q(
    "ph-pool-20-006",
    KAP[0],
    "Die Geschwindigkeit v nach der Zeit t bei gleichmäßig beschleunigter Bewegung mit Anfangsgeschwindigkeit v₀ ist:",
    ["v = v₀·t", "v = v₀ + a·t", "v = v₀·a·t", "v = v₀/t", "v = a/t"],
    1,
    "v(t) = v₀ + a·t.",
    "leicht",
    ["Geschwindigkeit", "Beschleunigung"]
  ),
  q(
    "ph-pool-20-007",
    KAP[1],
    "Longitudinale Wellen (z. B. Schall in Luft) haben die Schwingung:",
    [
      "senkrecht zur Ausbreitungsrichtung",
      "in Ausbreitungsrichtung",
      "nur transversal",
      "kreisförmig",
      "gar nicht",
    ],
    1,
    "Longitudinal: Schwingung in Ausbreitungsrichtung.",
    "leicht",
    ["longitudinal", "Welle"]
  ),
  q(
    "ph-pool-20-008",
    KAP[2],
    "Die Wärme Q, die beim Schmelzen von Eis bei 0 °C zugeführt werden muss (ohne Temperaturänderung), heißt:",
    [
      "spezifische Wärmekapazität",
      "Schmelzwärme (latente Wärme)",
      "Verdampfungswärme",
      "Wärmeleitfähigkeit",
      "Enthalpie",
    ],
    1,
    "Schmelzwärme: Energie für Phasenübergang fest → flüssig bei konstanter T.",
    "leicht",
    ["Schmelzwärme", "Phasenübergang"]
  ),
  q(
    "ph-pool-20-009",
    KAP[3],
    "Die Reihenschaltung von Widerständen hat den Gesamtwiderstand:",
    [
      "kleiner als den kleinsten Einzelwiderstand",
      "gleich der Summe der Einzelwiderstände",
      "gleich dem Produkt der Einzelwiderstände",
      "gleich dem Kehrwert der Summe der Kehrwerte",
      "null",
    ],
    1,
    "Reihe: R_ges = R₁ + R₂ + …",
    "leicht",
    ["Reihenschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-20-010",
    KAP[4],
    "Die Halbwertszeit eines radioaktiven Nuklids ist die Zeit, nach der:",
    [
      "alle Kerne zerfallen sind",
      "die Hälfte der ursprünglich vorhandenen Kerne noch nicht zerfallen ist",
      "die Aktivität verdoppelt ist",
      "die Masse null ist",
      "die Temperatur halbiert ist",
    ],
    1,
    "T_½: Anzahl der Kerne auf die Hälfte gesunken.",
    "leicht",
    ["Halbwertszeit", "Definition"]
  ),
  q(
    "ph-pool-20-011",
    KAP[0],
    "Der Impuls p eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["p = m/v", "p = m·v", "p = m·a", "p = F·t", "p = E/v"],
    1,
    "p = m·v.",
    "leicht",
    ["Impuls", "Definition"]
  ),
  q(
    "ph-pool-20-012",
    KAP[1],
    "Der Brechungsindex n von Vakuum (bzw. Luft näherungsweise) ist:",
    ["0", "1", "1,33", "2", "1,5"],
    1,
    "n_Vakuum = 1; n_Luft ≈ 1.",
    "leicht",
    ["Brechungsindex", "Vakuum"]
  ),
  q(
    "ph-pool-20-013",
    KAP[2],
    "Die innere Energie U eines idealen Gases hängt bei fester Teilchenzahl nur von der … ab.",
    ["Volumen", "Temperatur", "Druck", "Entropie", "Dichte"],
    1,
    "U = U(T) für ideales Gas.",
    "leicht",
    ["innere Energie", "ideales Gas"]
  ),
  q(
    "ph-pool-20-014",
    KAP[3],
    "Ohmsches Gesetz: U = R·I. Bei konstanter Spannung U gilt:",
    [
      "I proportional zu R",
      "I proportional zu 1/R",
      "I = R",
      "I unabhängig von R",
      "I proportional zu R²",
    ],
    1,
    "I = U/R → I ∝ 1/R bei konstantem U.",
    "leicht",
    ["Ohmsches Gesetz", "Strom"]
  ),
  q(
    "ph-pool-20-015",
    KAP[4],
    "Ein Alpha-Teilchen besteht aus:",
    [
      "einem Proton und einem Neutron",
      "zwei Protonen und zwei Neutronen (Heliumkern)",
      "einem Elektron",
      "zwei Neutronen",
      "zwei Protonen",
    ],
    1,
    "Alpha-Teilchen = ⁴₂He²⁺ (2p + 2n).",
    "leicht",
    ["Alpha-Teilchen", "Kernphysik"]
  ),
  q(
    "ph-pool-20-016",
    KAP[0],
    "Die potentielle Energie einer Feder (Federkonstante D, Auslenkung x) beträgt:",
    ["E = D·x", "E = ½·D·x²", "E = D/x²", "E = 2·D·x", "E = D·x²"],
    1,
    "E = ½·D·x².",
    "leicht",
    ["Federenergie", "Spannenergie"]
  ),
  q(
    "ph-pool-20-017",
    KAP[1],
    "Totalreflexion tritt auf, wenn Licht vom … ins … geht und der Einfallswinkel größer als der Grenzwinkel ist.",
    [
      "optisch dünneren, optisch dichteren",
      "optisch dichteren, optisch dünneren",
      "Vakuum, Wasser",
      "Wasser, Glas",
      "Glas, Wasser",
    ],
    1,
    "Totalreflexion: Übergang vom dichteren (größeres n) ins dünnere Medium.",
    "mittel",
    ["Totalreflexion", "Brechungsindex"]
  ),
  q(
    "ph-pool-20-018",
    KAP[2],
    "Die Entropie S hat die Einheit:",
    ["J", "J/K", "K", "W", "J·K"],
    1,
    "S in J/K.",
    "leicht",
    ["Entropie", "Einheit"]
  ),
  q(
    "ph-pool-20-019",
    KAP[3],
    "Die elektrische Ladung ist quantisiert. Die kleinste freie Ladung ist:",
    ["beliebig", "die Elementarladung e (≈ 1,6·10⁻¹⁹ C)", "1 C", "0", "die Protonenladung nur"],
    1,
    "Ladung kommt in Vielfachen von e vor (Quarks: e/3, 2e/3).",
    "leicht",
    ["Elementarladung", "Quantisierung"]
  ),
  q(
    "ph-pool-20-020",
    KAP[4],
    "Die Gammastrahlung beim Zerfall von Technetium-99m wird in der Nuklearmedizin genutzt. Die Halbwertszeit von Tc-99m beträgt etwa:",
    ["6 Stunden", "6 Tage", "6 Jahre", "6 Minuten", "unendlich"],
    0,
    "T_½(Tc-99m) ≈ 6 h (geeignet für Szintigraphie).",
    "mittel",
    ["Technetium-99m", "Nuklearmedizin"]
  ),
  q(
    "ph-pool-20-021",
    KAP[0],
    "Die Zentripetalkraft bei einer Kreisbewegung (Masse m, Geschwindigkeit v, Radius r) beträgt:",
    ["F = m·v", "F = m·v²/r", "F = v/r", "F = m·r", "F = v²/r"],
    1,
    "F_z = m·v²/r.",
    "leicht",
    ["Zentripetalkraft", "Formel"]
  ),
  q(
    "ph-pool-20-022",
    KAP[1],
    "Die Frequenz der Grundschwingung einer Luftsäule in einer einseitig geschlossenen Röhre (Länge L) ist:",
    ["f = c/L", "f = c/(4L)", "f = c/(2L)", "f = 2c/L", "f = 4c/L"],
    1,
    "Grundschwingung: λ/4 = L → f = c/(4L).",
    "mittel",
    ["Luftsäule", "Grundfrequenz"]
  ),
  q(
    "ph-pool-20-023",
    KAP[2],
    "Bei der isochoren Erwärmung eines idealen Gases:",
    [
      "bleibt das Volumen konstant, Druck und Temperatur steigen",
      "bleibt der Druck konstant",
      "bleibt die Temperatur konstant",
      "wird keine Wärme zugeführt",
      "nimmt das Volumen ab",
    ],
    0,
    "Isochor: V = const; p/T = const → Erwärmung erhöht p und T.",
    "mittel",
    ["isochor", "Erwärmung"]
  ),
  q(
    "ph-pool-20-024",
    KAP[3],
    "Die magnetische Flussdichte B wird in … gemessen.",
    ["Weber", "Tesla", "Henry", "Farad", "Coulomb"],
    1,
    "B in Tesla (T).",
    "leicht",
    ["Tesla", "Magnetfeld"]
  ),
  q(
    "ph-pool-20-025",
    KAP[4],
    "Die Strahlung von Kalium-40 (natürlich in Bananen etc.) ist vor allem:",
    ["Alpha", "Beta und Gamma", "nur Neutronen", "nur Röntgen", "nur Positronen"],
    1,
    "K-40: β⁻ und γ (natürliche Radioaktivität).",
    "mittel",
    ["Kalium-40", "natürliche Strahlung"]
  ),
  q(
    "ph-pool-20-026",
    KAP[0],
    "Die Arbeit W und die Leistung P hängen zusammen durch:",
    ["W = P·t", "P = W/t", "W = P/t", "P = W·t", "W = P + t"],
    1,
    "P = W/t (Leistung = Arbeit pro Zeit).",
    "leicht",
    ["Arbeit", "Leistung"]
  ),
  q(
    "ph-pool-20-027",
    KAP[1],
    "Die Schallgeschwindigkeit in Eisen ist … als in Luft.",
    ["kleiner", "größer", "gleich", "unbestimmt", "nur bei 0 °C größer"],
    1,
    "Festkörper: typischerweise größere Schallgeschwindigkeit.",
    "leicht",
    ["Schall", "Eisen"]
  ),
  q(
    "ph-pool-20-028",
    KAP[2],
    "Die Verdampfungswärme wird bei konstanter Temperatur (Siedetemperatur) zugeführt und dient dazu:",
    [
      "die Temperatur zu erhöhen",
      "die flüssige in die gasförmige Phase zu überführen",
      "den Druck zu erhöhen",
      "die Dichte zu erhöhen",
      "die Wärmekapazität zu ändern",
    ],
    1,
    "Verdampfung: Phasenübergang flüssig → gasförmig bei konstanter T.",
    "leicht",
    ["Verdampfung", "Phasenübergang"]
  ),
  q(
    "ph-pool-20-029",
    KAP[3],
    "Ein Amperemeter hat idealerweise:",
    [
      "einen sehr großen Innenwiderstand",
      "einen sehr kleinen Innenwiderstand (möglichst kein Spannungsabfall am Messgerät)",
      "Innenwiderstand unendlich",
      "kapazitiven Widerstand",
      "induktiven Widerstand",
    ],
    1,
    "Amperemeter: kleiner Innenwiderstand, damit Stromfluss kaum beeinflusst wird.",
    "leicht",
    ["Amperemeter", "Innenwiderstand"]
  ),
  q(
    "ph-pool-20-030",
    KAP[4],
    "Die Abschirmung gegen Beta-Strahlung kann durch … erfolgen.",
    ["Papier nur", "dünne Metallschicht oder Plexiglas", "nur Blei", "nur Luft", "nicht möglich"],
    1,
    "Beta: Reichweite cm bis m; Abschirmung durch wenige mm Metall oder Kunststoff.",
    "leicht",
    ["Beta", "Abschirmung"]
  ),
  q(
    "ph-pool-20-031",
    KAP[0],
    "Die Erdbeschleunigung g hat den Betrag etwa:",
    ["1 m/s²", "5 m/s²", "10 m/s²", "20 m/s²", "100 m/s²"],
    2,
    "g ≈ 9,81 m/s² ≈ 10 m/s².",
    "leicht",
    ["Erdbeschleunigung", "g"]
  ),
  q(
    "ph-pool-20-032",
    KAP[1],
    "Die Wellenlänge λ und die Wellenzahl k (k = 2π/λ) hängen zusammen durch:",
    ["k = λ", "k = 2π/λ", "k = λ·2π", "k = 1/λ", "k = λ²"],
    1,
    "k = 2π/λ.",
    "leicht",
    ["Wellenzahl", "Wellenlänge"]
  ),
  q(
    "ph-pool-20-033",
    KAP[2],
    "Der erste Hauptsatz der Thermodynamik drückt aus:",
    [
      "die Entropie nimmt zu",
      "Energieerhaltung (ΔU = Q + W)",
      "Wärme fließt von kalt nach warm",
      "der absolute Nullpunkt ist unerreichbar",
      "Entropie bleibt konstant",
    ],
    1,
    "1. Hauptsatz: Energieerhaltung ΔU = Q + W.",
    "leicht",
    ["1. Hauptsatz", "Energieerhaltung"]
  ),
  q(
    "ph-pool-20-034",
    KAP[3],
    "Die Kapazität C eines Plattenkondensators (Fläche A, Abstand d, Dielektrikum ε_r) ist proportional zu:",
    ["A·d", "A/d", "d/A", "A + d", "1/(A·d)"],
    1,
    "C = ε₀·ε_r·A/d.",
    "mittel",
    ["Kondensator", "Kapazität"]
  ),
  q(
    "ph-pool-20-035",
    KAP[4],
    "Die Ordnungszahl Z eines Elements im Periodensystem gibt an:",
    [
      "die Massenzahl",
      "die Neutronenzahl",
      "die Protonenzahl im Kern",
      "die Nukleonenzahl",
      "die Elektronenzahl nur bei Neutralität",
    ],
    2,
    "Z = Protonenzahl = Ordnungszahl.",
    "leicht",
    ["Ordnungszahl", "Periodensystem"]
  ),
  q(
    "ph-pool-20-036",
    KAP[0],
    "Die Reibungskraft F_R bei Gleitreibung ist näherungsweise:",
    [
      "proportional zur Geschwindigkeit",
      "proportional zur Normalkraft F_N",
      "proportional zur Fläche",
      "konstant",
      "null",
    ],
    1,
    "F_R = μ·F_N (Gleitreibung).",
    "leicht",
    ["Gleitreibung", "Normalkraft"]
  ),
  q(
    "ph-pool-20-037",
    KAP[1],
    "Die Interferenz von zwei kohärenten Wellen kann zu konstruktiver Verstärkung führen, wenn der Gangunterschied ein … ist.",
    [
      "ungerades Vielfaches von λ/2",
      "gerades Vielfaches von λ (bzw. ganzzahliges Vielfaches von λ)",
      "beliebiges Vielfaches von λ/4",
      "nur λ/2",
      "null",
    ],
    1,
    "Konstruktiv: Gangunterschied = k·λ (k = 0, ±1, ±2, …).",
    "mittel",
    ["Interferenz", "konstruktiv"]
  ),
  q(
    "ph-pool-20-038",
    KAP[2],
    "Die spezifische Wärmekapazität von Wasser ist etwa:",
    ["0,5 kJ/(kg·K)", "4,2 kJ/(kg·K)", "1 kJ/(kg·K)", "10 kJ/(kg·K)", "0,1 kJ/(kg·K)"],
    1,
    "c_Wasser ≈ 4,19 kJ/(kg·K).",
    "leicht",
    ["spezifische Wärmekapazität", "Wasser"]
  ),
  q(
    "ph-pool-20-039",
    KAP[3],
    "Die elektrische Leistung P bei Widerstand R und Spannung U ist:",
    ["P = U/R", "P = U²/R", "P = R/U", "P = U·R", "P = U/R²"],
    1,
    "P = U·I = U²/R (mit I = U/R).",
    "leicht",
    ["Leistung", "Spannung"]
  ),
  q(
    "ph-pool-20-040",
    KAP[4],
    "Beim Alpha-Zerfall eines Kerns:",
    [
      "bleibt die Massenzahl A gleich",
      "verringert sich A um 4 und Z um 2",
      "verringert sich nur Z",
      "verringert sich nur A",
      "bleibt Z gleich",
    ],
    1,
    "Alpha: A − 4, Z − 2 (Heliumkern wird emittiert).",
    "mittel",
    ["Alpha-Zerfall", "Massenzahl"]
  ),
  q(
    "ph-pool-20-041",
    KAP[0],
    "Die kinetische Energie E_kin und der Impuls p eines Teilchens der Masse m sind verknüpft durch:",
    ["E_kin = p·m", "E_kin = p²/(2m)", "E_kin = p·v nur", "E_kin = p/m", "E_kin = 2p·m"],
    1,
    "E_kin = p²/(2m).",
    "mittel",
    ["kinetische Energie", "Impuls"]
  ),
  q(
    "ph-pool-20-042",
    KAP[1],
    "Die Lichtgeschwindigkeit in Glas (n ≈ 1,5) beträgt etwa:",
    ["3·10⁸ m/s", "2·10⁸ m/s", "1,5·10⁸ m/s", "4·10⁸ m/s", "c"],
    1,
    "c_Glas = c/n ≈ 3·10⁸/1,5 m/s ≈ 2·10⁸ m/s.",
    "mittel",
    ["Lichtgeschwindigkeit", "Glas"]
  ),
  q(
    "ph-pool-20-043",
    KAP[2],
    "Die Wärme Q und die Arbeit W sind beide:",
    [
      "Zustandsgrößen",
      "Prozessgrößen (abhängig vom Weg)",
      "immer gleich",
      "nur bei adiabatischen Prozessen definiert",
      "nur in Joule",
    ],
    1,
    "Q und W sind Prozessgrößen (wegabhängig).",
    "mittel",
    ["Wärme", "Arbeit", "Prozessgröße"]
  ),
  q(
    "ph-pool-20-044",
    KAP[3],
    "Die Induktivität L hat die Einheit:",
    ["Farad", "Henry", "Ohm", "Tesla", "Weber"],
    1,
    "L in Henry (H).",
    "leicht",
    ["Induktivität", "Henry"]
  ),
  q(
    "ph-pool-20-045",
    KAP[4],
    "Die Aktivität A einer radioaktiven Probe ist definiert als:",
    [
      "die Gesamtenergie",
      "die Anzahl der Zerfälle pro Zeiteinheit",
      "die Halbwertszeit",
      "die Reichweite",
      "die Masse",
    ],
    1,
    "A = dN/dt = λ·N (Zerfälle pro Sekunde).",
    "leicht",
    ["Aktivität", "Definition"]
  ),
  q(
    "ph-pool-20-046",
    KAP[0],
    "Der Druck p ist definiert als Kraft F pro Fläche A:",
    ["p = F·A", "p = F/A", "p = A/F", "p = F + A", "p = F − A"],
    1,
    "p = F/A.",
    "leicht",
    ["Druck", "Definition"]
  ),
  q(
    "ph-pool-20-047",
    KAP[1],
    "Bei der Reflexion am losen Ende einer Seilwelle:",
    [
      "tritt ein Phasensprung von π auf",
      "bleibt die Phase erhalten (kein Phasensprung)",
      "wird die Welle absorbiert",
      "ändert sich die Frequenz",
      "verschwindet die Amplitude",
    ],
    1,
    "Loses Ende: Reflexion ohne Phasensprung.",
    "mittel",
    ["Reflexion", "Phasensprung"]
  ),
  q(
    "ph-pool-20-048",
    KAP[2],
    "Die Carnot-Wirkungsgrad η_C einer Wärmekraftmaschine zwischen den Temperaturen T_heiss und T_kalt (in Kelvin) ist:",
    [
      "η_C = T_heiss/T_kalt",
      "η_C = 1 − T_kalt/T_heiss",
      "η_C = T_kalt/T_heiss",
      "η_C = 1",
      "η_C = 0",
    ],
    1,
    "η_Carnot = 1 − T_kalt/T_heiss (maximaler Wirkungsgrad).",
    "mittel",
    ["Carnot", "Wirkungsgrad"]
  ),
  q(
    "ph-pool-20-049",
    KAP[3],
    "Die Stromstärke I durch mehrere in Reihe geschaltete Verbraucher ist:",
    [
      "an jedem Verbraucher unterschiedlich",
      "in allen Verbrauchern gleich",
      "null",
      "proportional zur Spannung an jedem",
      "nur am ersten Verbraucher definiert",
    ],
    1,
    "Reihenschaltung: I überall gleich.",
    "leicht",
    ["Reihenschaltung", "Stromstärke"]
  ),
  q(
    "ph-pool-20-050",
    KAP[4],
    "Die Compton-Wellenlängenänderung Δλ bei der Streuung von Röntgenlicht an Elektronen hängt ab von:",
    [
      "nur der Einfallsenergie",
      "dem Streuwinkel (Compton-Effekt)",
      "nur der Masse des Elektrons",
      "nur der Lichtgeschwindigkeit",
      "nur der Frequenz",
    ],
    1,
    "Δλ = λ_C·(1 − cos(θ)); λ_C = h/(m_e·c).",
    "schwer",
    ["Compton-Effekt", "Wellenlängenänderung"]
  ),
  q(
    "ph-pool-20-051",
    KAP[0],
    "Die potentielle Energie im Gravitationsfeld (nahe Erdoberfläche) eines Körpers der Masse m in der Höhe h ist:",
    ["E = m·h", "E = m·g·h", "E = ½·m·v²", "E = m·v", "E = F·h"],
    1,
    "E_pot = m·g·h.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-20-052",
    KAP[1],
    "Die Schallgeschwindigkeit in einem Gas ist proportional zur Wurzel aus:",
    [
      "der Dichte",
      "der Temperatur (bei konstantem M)",
      "dem Druck nur",
      "der Frequenz",
      "der Amplitude",
    ],
    1,
    "c ∝ √(γ·R·T/M).",
    "mittel",
    ["Schallgeschwindigkeit", "Gas"]
  ),
  q(
    "ph-pool-20-053",
    KAP[2],
    "Bei der adiabatischen Expansion eines idealen Gases:",
    [
      "bleibt die Temperatur konstant",
      "sinkt die Temperatur",
      "steigt die Temperatur",
      "wird Wärme zugeführt",
      "bleibt der Druck konstant",
    ],
    1,
    "Adiabatische Expansion: Arbeit nach außen → U und T sinken.",
    "mittel",
    ["adiabatisch", "Expansion"]
  ),
  q(
    "ph-pool-20-054",
    KAP[3],
    "Die Richtung der Lorentzkraft auf eine positive Ladung ergibt sich aus der:",
    [
      "Linke-Hand-Regel",
      "Rechten-Hand-Regel (v, B, F)",
      "nur rechnerisch",
      "Drei-Finger-Regel nur für Elektronen",
      "nicht bestimmbar",
    ],
    1,
    "Rechte-Hand-Regel: v (Daumen), B (Zeiger), F (Mittelfinger).",
    "mittel",
    ["Lorentzkraft", "Richtung"]
  ),
  q(
    "ph-pool-20-055",
    KAP[4],
    "Die natürliche Radioaktivität von Kalium-40 im menschlichen Körper trägt zur … bei.",
    [
      "nur äußeren Exposition",
      "inneren Strahlenexposition",
      "nur Alpha-Belastung",
      "nur Röntgen",
      "keiner Belastung",
    ],
    1,
    "K-40: natürlicher Bestandteil; innere Exposition durch Inkorporation.",
    "mittel",
    ["Kalium-40", "innere Exposition"]
  ),
  q(
    "ph-pool-20-056",
    KAP[0],
    "Die Einheit Pascal (Pa) ist:",
    ["1 N", "1 N/m²", "1 N·m", "1 J", "1 W"],
    1,
    "1 Pa = 1 N/m².",
    "leicht",
    ["Pascal", "Druck"]
  ),
  q(
    "ph-pool-20-057",
    KAP[1],
    "Die Brennweite f einer Sammellinse ist positiv. Ein Gegenstand in der doppelten Brennweite (g = 2f) erzeugt ein reelles Bild bei:",
    ["b = f", "b = 2f", "b = f/2", "b = ∞", "b = 0"],
    1,
    "Bei g = 2f ist b = 2f (1/f = 1/g + 1/b).",
    "mittel",
    ["Linsengleichung", "Bildweite"]
  ),
  q(
    "ph-pool-20-058",
    KAP[2],
    "Die Zustandsgrößen eines Systems (z. B. p, V, T) beschreiben:",
    [
      "den Prozess",
      "den Zustand des Systems zu einem Zeitpunkt",
      "nur die Wärme",
      "nur die Arbeit",
      "nur die Entropie",
    ],
    1,
    "Zustandsgrößen: beschreiben den Zustand (nicht den Weg).",
    "leicht",
    ["Zustandsgröße", "Thermodynamik"]
  ),
  q(
    "ph-pool-20-059",
    KAP[3],
    "Ein Generator erzeugt elektrische Spannung durch:",
    [
      "chemische Reaktion",
      "Bewegung von Leitern im Magnetfeld (Induktion)",
      "Reibung",
      "Wärme",
      "Licht",
    ],
    1,
    "Generator: Induktion durch Bewegung (Dynamo).",
    "leicht",
    ["Generator", "Induktion"]
  ),
  q(
    "ph-pool-20-060",
    KAP[4],
    "Die Zerfallskonstante λ hat die Einheit:",
    ["s", "1/s", "Bq", "J", "kg"],
    1,
    "λ in 1/s; A = λ·N mit A in Bq.",
    "leicht",
    ["Zerfallskonstante", "Einheit"]
  ),
];
