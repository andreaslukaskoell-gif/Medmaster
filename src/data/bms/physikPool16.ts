/**
 * Physik BMS Pool 16 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool16: Question[] = [
  q(
    "ph-pool-16-001",
    KAP[0],
    "Die SI-Basiseinheit für die Stoffmenge ist:",
    ["Mol (mol)", "Kilogramm", "Coulomb", "Gramm", "Liter"],
    0,
    "Stoffmenge n in Mol (mol).",
    "leicht",
    ["SI", "Stoffmenge"]
  ),
  q(
    "ph-pool-16-002",
    KAP[1],
    "Die Gruppengeschwindigkeit einer Welle ist:",
    [
      "immer gleich der Phasengeschwindigkeit",
      "die Geschwindigkeit des Energietransports; bei Dispersion ungleich der Phasengeschwindigkeit",
      "nur bei Licht definiert",
      "immer c",
      "null",
    ],
    1,
    "Gruppengeschwindigkeit: Geschwindigkeit des Wellenpakets; v_g = dω/dk.",
    "mittel",
    ["Gruppengeschwindigkeit", "Dispersion"]
  ),
  q(
    "ph-pool-16-003",
    KAP[2],
    "Die Wärmeleitfähigkeit λ eines Materials hat die Einheit:",
    ["J", "W/(m·K)", "W/s", "J/kg", "K/m"],
    1,
    "λ in W/(m·K); Wärmestrom pro Fläche und Temperaturgradient.",
    "mittel",
    ["Wärmeleitfähigkeit", "Einheit"]
  ),
  q(
    "ph-pool-16-004",
    KAP[3],
    "Zwei gleiche Widerstände R in Parallelschaltung haben den Ersatzwiderstand:",
    ["2R", "R/2", "R", "R²", "0"],
    1,
    "Parallel: 1/R_ges = 1/R + 1/R = 2/R → R_ges = R/2.",
    "leicht",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-16-005",
    KAP[4],
    "Ein Antineutrino wird beim … emittiert.",
    ["Alpha-Zerfall", "Beta-Minus-Zerfall", "Gamma-Zerfall", "K-Einfang", "Spaltung"],
    1,
    "β⁻-Zerfall: n → p + e⁻ + Antineutrino.",
    "mittel",
    ["Antineutrino", "Beta-Zerfall"]
  ),
  q(
    "ph-pool-16-006",
    KAP[0],
    "Die Momentanbeschleunigung a ist definiert als:",
    ["a = v · t", "a = dv/dt", "a = s/t", "a = F/m nur bei konstanter Masse", "a = p/m"],
    1,
    "a = dv/dt (zeitliche Änderung der Geschwindigkeit).",
    "leicht",
    ["Beschleunigung", "Definition"]
  ),
  q(
    "ph-pool-16-007",
    KAP[1],
    "Der Schalldruckpegel L in Dezibel ist definiert als:",
    ["L = p", "L = 10·lg(I/I_0) mit Bezugsintensität I_0", "L = I/I_0", "L = p²", "L = f"],
    1,
    "Schallpegel L in dB: L = 10·lg(I/I_0); I_0 = 10⁻¹² W/m².",
    "mittel",
    ["Dezibel", "Schallpegel"]
  ),
  q(
    "ph-pool-16-008",
    KAP[2],
    "Die Enthalpie H ist definiert als:",
    ["H = U", "H = U + p·V", "H = Q − W", "H = S·T", "H = n·R·T"],
    1,
    "Enthalpie H = U + p·V (Zustandsgröße).",
    "mittel",
    ["Enthalpie", "Thermodynamik"]
  ),
  q(
    "ph-pool-16-009",
    KAP[3],
    "Die elektrische Feldstärke E im radialsymmetrischen Feld einer Punktladung Q ist proportional zu:",
    ["Q·r", "Q/r²", "r²/Q", "Q + r", "1/(Q·r)"],
    1,
    "E = k·Q/r² (Coulomb-Feld).",
    "mittel",
    ["Coulomb-Feld", "Feldstärke"]
  ),
  q(
    "ph-pool-16-010",
    KAP[4],
    "Die Gammastrahlung beim radioaktiven Zerfall entsteht, wenn:",
    [
      "ein Neutron emittiert wird",
      "der Tochterkern in einem angeregten Zustand ist und in den Grundzustand übergeht",
      "nur Alpha emittiert wird",
      "kein Beta-Zerfall stattfindet",
      "der Kern spaltet",
    ],
    1,
    "Gamma-Emission: Übergang angeregter Kern → Grundzustand.",
    "mittel",
    ["Gamma-Emission", "Kernübergang"]
  ),
  q(
    "ph-pool-16-011",
    KAP[0],
    "Der Impulserhaltungssatz gilt:",
    [
      "nur bei elastischen Stößen",
      "in abgeschlossenen Systemen (ohne äußere Kräfte) immer",
      "nur bei Reibung",
      "nur in einer Dimension",
      "nur für schwere Körper",
    ],
    1,
    "Impulserhaltung: Σ p = const in abgeschlossenem System.",
    "leicht",
    ["Impulserhaltung", "Mechanik"]
  ),
  q(
    "ph-pool-16-012",
    KAP[1],
    "Ein optisch dichteres Medium hat:",
    [
      "kleineren Brechungsindex als das Vergleichsmedium",
      "größeren Brechungsindex",
      "gleichen Brechungsindex",
      "keine Brechung",
      "n = 0",
    ],
    1,
    "Optisch dichter: größeres n; Licht wird zum Lot gebrochen beim Eintritt.",
    "leicht",
    ["Brechungsindex", "optisch dicht"]
  ),
  q(
    "ph-pool-16-013",
    KAP[2],
    "Die freie Enthalpie (Gibbs-Energie) G = H − T·S ist besonders wichtig für:",
    [
      "nur mechanische Prozesse",
      "Gleichgewicht bei konstantem Druck und konstanter Temperatur",
      "nur adiabatische Prozesse",
      "nur isochore Prozesse",
      "nur ideale Gase",
    ],
    1,
    "G = H − T·S; Minimum von G bei p, T = const im Gleichgewicht.",
    "schwer",
    ["Gibbs-Energie", "Gleichgewicht"]
  ),
  q(
    "ph-pool-16-014",
    KAP[3],
    "Ein Kondensator mit Kapazität C wird auf die Spannung U aufgeladen. Die gespeicherte Energie beträgt:",
    ["C·U", "½·C·U²", "C/U²", "U²/C", "C·U²"],
    1,
    "E = ½·C·U² (Energie im elektrischen Feld).",
    "leicht",
    ["Kondensator", "Energie"]
  ),
  q(
    "ph-pool-16-015",
    KAP[4],
    "Die Einheit Curie (Ci) ist eine veraltete Einheit für:",
    [
      "Energiedosis",
      "Aktivität (1 Ci = 3,7·10¹⁰ Bq)",
      "Äquivalentdosis",
      "Halbwertszeit",
      "Reichweite",
    ],
    1,
    "1 Ci = 3,7·10¹⁰ Bq (Aktivität).",
    "leicht",
    ["Curie", "Aktivität"]
  ),
  q(
    "ph-pool-16-016",
    KAP[0],
    "Die Winkelbeschleunigung α bei einer Kreisbewegung ist:",
    ["α = a·r", "α = dω/dt", "α = v/r", "α = ω·t", "α = F/m"],
    1,
    "α = dω/dt (Änderung der Winkelgeschwindigkeit).",
    "mittel",
    ["Winkelbeschleunigung", "Kreisbewegung"]
  ),
  q(
    "ph-pool-16-017",
    KAP[1],
    "Bei der Beugung am Doppelspalt entsteht:",
    [
      "kein Muster",
      "ein Interferenzmuster mit konstantem Abstand der Maxima",
      "nur ein Maximum",
      "Absorption",
      "nur Reflexion",
    ],
    1,
    "Doppelspalt: Interferenz → Maximum/Minimum-Abstände abhängig von λ und g.",
    "mittel",
    ["Doppelspalt", "Interferenz"]
  ),
  q(
    "ph-pool-16-018",
    KAP[2],
    "Der dritte Hauptsatz der Thermodynamik besagt:",
    [
      "Energie ist erhalten",
      "die Entropie eines idealen Kristalls am absoluten Nullpunkt ist null",
      "Wärme fließt von warm nach kalt",
      "Entropie nimmt immer zu",
      "es gibt kein Perpetuum mobile",
    ],
    1,
    "3. Hauptsatz: S → 0 für T → 0 (Nernst).",
    "schwer",
    ["3. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-16-019",
    KAP[3],
    "Die magnetische Flussdichte B im Inneren einer langen Spule mit n Windungen pro Länge und Strom I ist:",
    ["B = μ₀·I/(2π·r)", "B = μ₀·n·I", "B = 0", "B = n·I²", "B = μ₀·I"],
    1,
    "B = μ₀·n·I (homogen im Innern).",
    "mittel",
    ["Spule", "Magnetfeld"]
  ),
  q(
    "ph-pool-16-020",
    KAP[4],
    "Ein K-Einfang (Elektroneneinfang) liegt vor, wenn:",
    [
      "ein Neutron eingefangen wird",
      "ein Kern ein Hüllenelektron einfängt und ein Proton in ein Neutron umwandelt",
      "ein Proton eingefangen wird",
      "Alpha eingefangen wird",
      "ein Photon emittiert wird",
    ],
    1,
    "K-Einfang: p + e⁻ → n + ν_e; Elektron aus K-Schale.",
    "mittel",
    ["K-Einfang", "Kernumwandlung"]
  ),
  q(
    "ph-pool-16-021",
    KAP[0],
    "Das Trägheitsmoment I eines Massenpunktes der Masse m im Abstand r von der Drehachse ist:",
    ["I = m·r", "I = m·r²", "I = m/r²", "I = ½·m·r²", "I = m·v"],
    1,
    "Trägheitsmoment: I = m·r² (Punktmasse).",
    "mittel",
    ["Trägheitsmoment", "Rotation"]
  ),
  q(
    "ph-pool-16-022",
    KAP[1],
    "Die Schwingungsgleichung eines harmonischen Oszillators lautet (mit Auslenkung x, Kreisfrequenz ω):",
    ["x = v·t", "x = A·cos(ω·t + φ)", "x = A·t²", "x = ω·t", "x = A/ω"],
    1,
    "Harmonische Schwingung: x(t) = A·cos(ωt + φ).",
    "mittel",
    ["harmonische Schwingung", "DGL"]
  ),
  q(
    "ph-pool-16-023",
    KAP[2],
    "Die Verdampfungswärme von Wasser bei 100 °C beträgt etwa:",
    ["2,3 kJ/kg", "2257 kJ/kg", "334 kJ/kg", "0,1 kJ/kg", "4,2 kJ/kg"],
    1,
    "Verdampfungswärme Wasser bei 100 °C ca. 2257 kJ/kg.",
    "mittel",
    ["Verdampfungswärme", "Wasser"]
  ),
  q(
    "ph-pool-16-024",
    KAP[3],
    "Die Kraft zwischen zwei parallelen stromdurchflossenen Leitern ist:",
    [
      "immer null",
      "anziehend bei gleicher Stromrichtung",
      "abstoßend bei gleicher Stromrichtung",
      "unabhängig vom Abstand",
      "nur bei Gleichstrom wirksam",
    ],
    1,
    "Parallele Leiter: gleiche Stromrichtung → anziehend; entgegengesetzt → abstoßend.",
    "mittel",
    ["Leiter", "Kraft"]
  ),
  q(
    "ph-pool-16-025",
    KAP[4],
    "Die Strahlungsart mit der höchsten Durchdringungsfähigkeit in Blei ist:",
    ["Alpha", "Beta", "Gamma", "Protonen", "Neutronen (thermisch)"],
    2,
    "Gamma durchdringt Blei am besten (Absorption exponentiell mit Dicke).",
    "leicht",
    ["Durchdringung", "Gamma"]
  ),
  q(
    "ph-pool-16-026",
    KAP[0],
    "Die Arbeit W bei der Verschiebung eines Körpers gegen eine konstante Kraft F über die Strecke s beträgt:",
    ["W = F/s", "W = F·s (wenn Kraft parallel zum Weg)", "W = F·v", "W = F·t", "W = s/F"],
    1,
    "W = F·s (Skalarprodukt: nur Komponente in Wegrichtung).",
    "leicht",
    ["Arbeit", "Definition"]
  ),
  q(
    "ph-pool-16-027",
    KAP[1],
    "Die Schallintensität in einem Abstand r von einer punktförmigen Quelle verteilt sich auf eine Kugeloberfläche. I ist proportional zu:",
    ["r", "1/r²", "r²", "1/r", "konstant"],
    1,
    "Intensität I ∝ 1/r² (Energieerhaltung auf Kugelfläche 4πr²).",
    "mittel",
    ["Schallintensität", "Abstandsgesetz"]
  ),
  q(
    "ph-pool-16-028",
    KAP[2],
    "Die allgemeine Gaskonstante R beträgt etwa:",
    ["8,314 J/(mol·K)", "0,082 L·atm/(mol·K)", "8,314 kJ/(mol·K)", "1 J/(mol·K)", "273 J/(mol·K)"],
    0,
    "R ≈ 8,314 J/(mol·K).",
    "leicht",
    ["Gaskonstante", "R"]
  ),
  q(
    "ph-pool-16-029",
    KAP[3],
    "Ein Verbraucher nimmt bei 230 V eine Leistung von 1150 W auf. Der Strom beträgt:",
    ["5 A", "0,2 A", "264 500 A", "230 A", "1150 A"],
    0,
    "P = U·I → I = P/U = 1150 W / 230 V = 5 A.",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-16-030",
    KAP[4],
    "Die Strahlenbelastung durch eine Röntgenaufnahme wird typischerweise in … angegeben.",
    ["Bq", "Sv oder mSv", "Ci", "Gy/s", "J"],
    1,
    "Äquivalentdosis in Sievert (Sv) bzw. mSv für medizinische Exposition.",
    "leicht",
    ["Röntgen", "Strahlenbelastung"]
  ),
  q(
    "ph-pool-16-031",
    KAP[0],
    "Die Gewichtskraft eines Körpers der Masse 5 kg beträgt auf der Erde etwa:",
    ["5 N", "50 N", "0,5 N", "500 N", "9,81 N"],
    1,
    "F_G = m·g ≈ 5·9,81 N ≈ 49 N ≈ 50 N.",
    "leicht",
    ["Gewichtskraft", "Rechnung"]
  ),
  q(
    "ph-pool-16-032",
    KAP[1],
    "Die Frequenz des sichtbaren Lichts liegt etwa im Bereich:",
    ["10⁴ Hz", "10¹⁴ Hz", "10⁶ Hz", "10²⁰ Hz", "1 Hz"],
    1,
    "Sichtbares Licht: f = c/λ ≈ 3·10⁸/(5·10⁻⁷) Hz ≈ 6·10¹⁴ Hz.",
    "mittel",
    ["Licht", "Frequenz"]
  ),
  q(
    "ph-pool-16-033",
    KAP[2],
    "Ein Prozess mit konstanter Entropie heißt:",
    ["isobar", "isochor", "isentrop", "isotherm", "adiabatisch"],
    2,
    "Isentrop: S = const (reversibel adiabatisch).",
    "mittel",
    ["isentrop", "Entropie"]
  ),
  q(
    "ph-pool-16-034",
    KAP[3],
    "Die Kapazität zweier Kondensatoren C₁ und C₂ in Parallelschaltung ist:",
    ["1/C₁ + 1/C₂", "C₁ + C₂", "C₁·C₂", "C₁/C₂", "kleiner als C₁"],
    1,
    "Parallel: C_ges = C₁ + C₂.",
    "leicht",
    ["Kondensatoren", "Parallel"]
  ),
  q(
    "ph-pool-16-035",
    KAP[4],
    "Ein Nuklid mit zu vielen Protonen im Kern neigt zu:",
    [
      "Alpha-Zerfall",
      "Beta-Plus-Zerfall oder K-Einfang",
      "Beta-Minus-Zerfall",
      "Spaltung",
      "keinem Zerfall",
    ],
    1,
    "Protonenüberschuss → β⁺ oder K-Einfang (p → n).",
    "mittel",
    ["Protonenüberschuss", "Beta-Plus"]
  ),
  q(
    "ph-pool-16-036",
    KAP[0],
    "Die Federkonstante D hat die Einheit:",
    ["N", "N/m", "N·m", "m/N", "kg/s²"],
    1,
    "F = D·x → [D] = N/m.",
    "leicht",
    ["Federkonstante", "Einheit"]
  ),
  q(
    "ph-pool-16-037",
    KAP[1],
    "Laserlicht ist charakterisiert durch:",
    [
      "nur hohe Intensität",
      "Kohärenz, Monochromasie und Bündelung",
      "nur eine Wellenlänge",
      "nur niedrige Divergenz",
      "nur gepulst",
    ],
    1,
    "Laser: kohärent, monochromatisch, gebündelt, evtl. gepulst.",
    "mittel",
    ["Laser", "Eigenschaften"]
  ),
  q(
    "ph-pool-16-038",
    KAP[2],
    "Die Wärmepumpe hat einen Leistungszahl (COP) größer 1, weil:",
    [
      "sie keine Arbeit braucht",
      "die abgegebene Wärme größer als die zugeführte Arbeit ist",
      "sie nur Wärme pumpt",
      "der 2. Hauptsatz nicht gilt",
      "sie reversibel ist",
    ],
    1,
    "COP = Q_ab/W_zu > 1; abgegebene Wärme > zugeführte Arbeit.",
    "mittel",
    ["Wärmepumpe", "COP"]
  ),
  q(
    "ph-pool-16-039",
    KAP[3],
    "Die Zeitkonstante τ beim Entladen eines RC-Kreises ist:",
    ["τ = R + C", "τ = R·C", "τ = R/C", "τ = C/R", "τ = 1/(R·C)"],
    1,
    "τ = R·C; Spannung klingt mit e^(-t/τ) ab.",
    "mittel",
    ["RC-Kreis", "Zeitkonstante"]
  ),
  q(
    "ph-pool-16-040",
    KAP[4],
    "Die Zerfallsenergie (Q-Wert) beim Beta-Minus-Zerfall erscheint als:",
    [
      "nur Wärme",
      "kinetische Energie von Elektron, Antineutrino und Rückstoßkern (+ ggf. Gamma)",
      "nur Gammastrahlung",
      "nur Licht",
      "nur potentielle Energie",
    ],
    1,
    "Q-Wert verteilt auf e⁻, ν̄ und Tochterkern (kinetisch) sowie ggf. γ.",
    "mittel",
    ["Q-Wert", "Beta-Zerfall"]
  ),
  q(
    "ph-pool-16-041",
    KAP[0],
    "Die Corioliskraft wirkt auf einen Körper, der sich in einem rotierenden Bezugssystem bewegt:",
    [
      "nur radial",
      "senkrecht zur Winkelgeschwindigkeit und zur Geschwindigkeit",
      "nur entgegen der Rotation",
      "nur in Äquatornähe",
      "nur bei konstanter Geschwindigkeit",
    ],
    1,
    "Corioliskraft: F_C ∝ v × ω (quer zu v und ω).",
    "schwer",
    ["Corioliskraft", "rotierendes System"]
  ),
  q(
    "ph-pool-16-042",
    KAP[1],
    "Der Brechungsindex von Wasser gegenüber Luft ist etwa:",
    ["0,75", "1", "1,33", "2", "1,5"],
    2,
    "n_Wasser ≈ 1,33.",
    "leicht",
    ["Brechungsindex", "Wasser"]
  ),
  q(
    "ph-pool-16-043",
    KAP[2],
    "Die spezifische Wärmekapazität von Eis ist etwa:",
    ["2,1 kJ/(kg·K)", "4,2 kJ/(kg·K)", "0,5 kJ/(kg·K)", "10 kJ/(kg·K)", "gleich der von Wasser"],
    0,
    "c_Eis ≈ 2,1 kJ/(kg·K).",
    "mittel",
    ["Eis", "Wärmekapazität"]
  ),
  q(
    "ph-pool-16-044",
    KAP[3],
    "Die elektrische Stromstärke I durch einen Leiter mit Querschnitt A und Stromdichte j ist:",
    ["I = j·A", "I = j/A", "I = j + A", "I = A/j", "I = j²·A"],
    0,
    "j = I/A → I = j·A.",
    "leicht",
    ["Stromdichte", "Stromstärke"]
  ),
  q(
    "ph-pool-16-045",
    KAP[4],
    "Die Halbwertszeit von C-14 beträgt etwa:",
    ["5730 Jahre", "5,73 Jahre", "57 Jahre", "1 Jahr", "unendlich"],
    0,
    "T_½(C-14) ≈ 5730 Jahre (Radiokarbonmethode).",
    "leicht",
    ["Kohlenstoff-14", "Halbwertszeit"]
  ),
  q(
    "ph-pool-16-046",
    KAP[0],
    "Die potentielle Energie einer Feder (D, x) und die kinetische Energie (m, v) eines angekoppelten Körpers können sich bei ungedämpfter Schwingung umwandeln; die Summe ist:",
    ["null", "konstant", "proportional zur Zeit", "nur potentiell", "nur kinetisch"],
    1,
    "Energieerhaltung: E_pot + E_kin = const.",
    "leicht",
    ["Energieerhaltung", "Schwingung"]
  ),
  q(
    "ph-pool-16-047",
    KAP[1],
    "Ein Hohlspiegel mit kurzer Brennweite erzeugt bei großer Gegenstandsweite:",
    [
      "ein vergrößertes virtuelles Bild",
      "ein verkleinertes reelles Bild nahe dem Brennpunkt",
      "kein Bild",
      "ein vergrößertes reelles Bild",
      "ein Bild im Unendlichen",
    ],
    1,
    "Konkavspiegel, Gegenstand weit: Bild reell, verkleinert, nahe F.",
    "mittel",
    ["Hohlspiegel", "Bild"]
  ),
  q(
    "ph-pool-16-048",
    KAP[2],
    "Die kritische Temperatur eines Stoffes ist die Temperatur:",
    [
      "am Tripelpunkt",
      "oberhalb derer die Flüssigkeit nicht mehr durch Druck verflüssigt werden kann",
      "am Siedepunkt",
      "bei 0 °C",
      "am Schmelzpunkt",
    ],
    1,
    "Kritische Temperatur: Ende der Siedekurve; überkritisches Fluid.",
    "mittel",
    ["kritische Temperatur", "Phasendiagramm"]
  ),
  q(
    "ph-pool-16-049",
    KAP[3],
    "Ein Permanentmagnet erzeugt ein Magnetfeld durch:",
    [
      "elektrischen Strom von außen",
      "orientierte atomare Kreisströme (Elementarmagnete)",
      "nur Induktion",
      "nur Supraleitung",
      "Wärme",
    ],
    1,
    "Permanentmagnet: Ausrichtung der atomaren magnetischen Momente.",
    "leicht",
    ["Permanentmagnet", "Magnetfeld"]
  ),
  q(
    "ph-pool-16-050",
    KAP[4],
    "Die Aktivität A einer Probe ist proportional zur Anzahl N der noch nicht zerfallenen Kerne: A = λ·N. Mit der Zeit:",
    [
      "N und A bleiben konstant",
      "N und A nehmen exponentiell ab",
      "N nimmt zu, A ab",
      "A nimmt linear ab",
      "N nimmt linear ab",
    ],
    1,
    "N(t) = N₀·e^(-λt); A(t) = λ·N(t) klingt ebenfalls exponentiell ab.",
    "mittel",
    ["Aktivität", "exponentieller Zerfall"]
  ),
  q(
    "ph-pool-16-051",
    KAP[0],
    "Die Einheit der Leistung P ist:",
    ["J", "J·s", "W (Watt) = J/s", "N", "Pa"],
    2,
    "P = W/t → [P] = J/s = W.",
    "leicht",
    ["Leistung", "Watt"]
  ),
  q(
    "ph-pool-16-052",
    KAP[1],
    "Die Polarisationsrichtung von linear polarisiertem Licht:",
    [
      "ändert sich ständig",
      "bleibt in einer festen Ebene",
      "ist immer senkrecht zur Ausbreitung",
      "B und C sind richtig",
      "ist kreisförmig",
    ],
    3,
    "Linear polarisiert: E-Vektor in fester Ebene; transversal.",
    "mittel",
    ["Polarisation", "Licht"]
  ),
  q(
    "ph-pool-16-053",
    KAP[2],
    "Bei einer adiabatischen Expansion eines idealen Gases:",
    [
      "bleibt die Temperatur konstant",
      "sinkt die Temperatur (Arbeit nach außen auf Kosten der inneren Energie)",
      "steigt die Temperatur",
      "bleibt der Druck konstant",
      "wird Wärme zugeführt",
    ],
    1,
    "Adiabatisch: dQ = 0; Expansion → Arbeit nach außen → U sinkt → T sinkt.",
    "mittel",
    ["adiabatisch", "Expansion"]
  ),
  q(
    "ph-pool-16-054",
    KAP[3],
    "Die Induktivität L einer Spule hängt ab von:",
    [
      "nur vom Strom",
      "Windungszahl, Querschnitt, Länge und Kernmaterial",
      "nur von der Spannung",
      "nur vom Widerstand",
      "nur von der Zeit",
    ],
    1,
    "L = μ₀·μ_r·n²·A/l (idealisiert).",
    "mittel",
    ["Induktivität", "Spule"]
  ),
  q(
    "ph-pool-16-055",
    KAP[4],
    "Die Massenzahl eines Kerns ändert sich beim:",
    [
      "Beta-Minus-Zerfall nicht (nur Z erhöht sich)",
      "Alpha-Zerfall (A verringert sich um 4)",
      "Gamma-Zerfall (A bleibt)",
      "Beta-Plus-Zerfall (A bleibt)",
      "K-Einfang (A bleibt)",
    ],
    1,
    "α-Zerfall: A verringert sich um 4, Z um 2. β und γ: A unverändert.",
    "mittel",
    ["Massenzahl", "Zerfall"]
  ),
  q(
    "ph-pool-16-056",
    KAP[0],
    "Ein Körper schwimmt, wenn seine Dichte … als die der Flüssigkeit ist.",
    ["größer", "kleiner", "gleich", "doppelt so groß", "halb so groß"],
    1,
    "Schwimmen: ρ_Körper < ρ_Flüssigkeit → Auftrieb > Gewicht.",
    "leicht",
    ["Auftrieb", "Schwimmen"]
  ),
  q(
    "ph-pool-16-057",
    KAP[1],
    "Die Beugung am Gitter (viele Spalte) erzeugt:",
    [
      "keine Maxima",
      "scharfe Interferenzmaxima (Beugungsordnung k·λ = g·sin(α))",
      "nur ein Maximum",
      "kontinuierliches Spektrum",
      "nur Absorption",
    ],
    1,
    "Gitter: Maxima bei g·sin(α) = k·λ (k = 0, ±1, ±2, …).",
    "mittel",
    ["Gitter", "Beugung"]
  ),
  q(
    "ph-pool-16-058",
    KAP[2],
    "Die Wärmekapazität C eines Körpers (Q = C·ΔT) hat die Einheit:",
    ["J/K", "J/(kg·K)", "nur J", "K/J", "W"],
    0,
    "C = Q/ΔT → [C] = J/K.",
    "leicht",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-16-059",
    KAP[3],
    "Ein Wechselstrom mit der Frequenz 50 Hz hat die Periodendauer:",
    ["50 s", "0,02 s", "1/50 s = 20 ms", "100 s", "0,05 s"],
    2,
    "T = 1/f = 1/50 s = 0,02 s = 20 ms.",
    "leicht",
    ["Wechselstrom", "Periodendauer"]
  ),
  q(
    "ph-pool-16-060",
    KAP[4],
    "Die Abschirmung gegen Gamma-Strahlung erfolgt am besten durch:",
    ["Papier", "dünnes Aluminium", "Blei oder Beton (hohe Dichte)", "Luft", "Kunststoff"],
    2,
    "Gamma: hohe Durchdringung → dichte Materialien (Blei, Beton) zur Abschirmung.",
    "leicht",
    ["Abschirmung", "Gamma"]
  ),
];
