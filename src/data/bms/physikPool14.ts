/**
 * Physik BMS Pool 14 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool14: Question[] = [
  q(
    "ph-pool-14-001",
    KAP[0],
    "Welche Größe hat die SI-Einheit Sekunde (s)?",
    ["Masse", "Stromstärke", "Zeit", "Länge", "Temperatur"],
    2,
    "Die Sekunde ist die SI-Basiseinheit für die Zeit.",
    "leicht",
    ["SI", "Zeit"]
  ),
  q(
    "ph-pool-14-002",
    KAP[1],
    "Die Phasengeschwindigkeit einer Welle ist:",
    [
      "immer größer als die Lichtgeschwindigkeit",
      "c = λ · f (Wellenlänge mal Frequenz)",
      "nur bei Schall definiert",
      "gleich der Gruppengeschwindigkeit in allen Fällen",
      "unabhängig vom Medium",
    ],
    1,
    "Phasengeschwindigkeit v_phase = λ · f; im dispersiven Medium ≠ Gruppengeschwindigkeit.",
    "leicht",
    ["Phasengeschwindigkeit", "Welle"]
  ),
  q(
    "ph-pool-14-003",
    KAP[2],
    "Die Wärmemenge Q bei Temperaturänderung ohne Phasenübergang ist:",
    ["Q = m · T", "Q = m · c · ΔT", "Q = c / (m · ΔT)", "Q = ΔT / m", "Q = m + c + ΔT"],
    1,
    "Q = m · c · ΔT (c = spezifische Wärmekapazität).",
    "leicht",
    ["Wärmemenge", "Wärmelehre"]
  ),
  q(
    "ph-pool-14-004",
    KAP[3],
    "Ein Leiter hat den Widerstand R. Verdoppelt man seine Länge bei gleichem Querschnitt, so wird der Widerstand:",
    ["halb so groß", "gleich", "doppelt so groß", "vierfach", "achtfach"],
    2,
    "R = ρ · l/A; bei doppelter Länge (A konstant): R verdoppelt sich.",
    "leicht",
    ["Widerstand", "spezifischer Widerstand"]
  ),
  q(
    "ph-pool-14-005",
    KAP[4],
    "Welche Strahlung hat die größte Reichweite in Materie?",
    [
      "Alpha-Strahlung",
      "Beta-Strahlung",
      "Gamma-Strahlung",
      "Neutronen (thermisch)",
      "Röntgen (weich)",
    ],
    2,
    "Gamma-Strahlung (Photonen) durchdringt Materie am besten.",
    "leicht",
    ["Gamma-Strahlung", "Reichweite"]
  ),
  q(
    "ph-pool-14-006",
    KAP[0],
    "Die Kraft F bei konstanter Beschleunigung ist:",
    ["F = m / a", "F = m · a (Newton)", "F = a / m", "F = m · v", "F = p · t"],
    1,
    "2. Newtonsches Gesetz: F = m · a.",
    "leicht",
    ["Kraft", "Newton"]
  ),
  q(
    "ph-pool-14-007",
    KAP[1],
    "Ein Obertone (Harmonische) einer Saite hat eine Frequenz:",
    [
      "kleiner als die Grundfrequenz",
      "die ein ganzzahliges Vielfaches der Grundfrequenz ist",
      "die unabhängig von der Grundfrequenz ist",
      "die immer 440 Hz beträgt",
      "die null ist",
    ],
    1,
    "Obertöne: f_n = n · f_1 (n = 2, 3, …).",
    "mittel",
    ["Oberton", "Schwingung"]
  ),
  q(
    "ph-pool-14-008",
    KAP[2],
    "Der Wärmeübergang durch Leitung erfolgt:",
    [
      "nur in Gasen",
      "in Festkörpern und ruhenden Fluiden durch Berührung/Kontakt",
      "nur an der Oberfläche",
      "nur durch Strahlung",
      "ohne Temperaturgradient",
    ],
    1,
    "Wärmeleitung: Energietransport durch Stöße/Phononen ohne Stofftransport.",
    "leicht",
    ["Wärmeleitung", "Wärmeübertragung"]
  ),
  q(
    "ph-pool-14-009",
    KAP[3],
    "Die Kapazität C eines Plattenkondensators mit Fläche A und Plattenabstand d ist proportional zu:",
    ["A / d", "d / A", "A · d", "A + d", "1/(A · d)"],
    0,
    "C = ε₀ · ε_r · A/d (bei homogenem Feld).",
    "mittel",
    ["Kondensator", "Kapazität"]
  ),
  q(
    "ph-pool-14-010",
    KAP[4],
    "Beim Beta-Plus-Zerfall wird ein Proton zu:",
    [
      "Neutron + Positron + Neutrino",
      "Neutron + Elektron",
      "Alpha-Teilchen",
      "zwei Protonen",
      "Neutron + Antineutrino",
    ],
    0,
    "β⁺-Zerfall: p → n + e⁺ + ν_e.",
    "mittel",
    ["Beta-Plus-Zerfall", "Kernphysik"]
  ),
  q(
    "ph-pool-14-011",
    KAP[0],
    "Die potentielle Energie einer gespannten Feder (Federkonstante D, Auslenkung x) ist:",
    ["E = D · x", "E = ½ D · x²", "E = D / x", "E = 2D · x²", "E = D · x²"],
    1,
    "E_feder = ½ D x² (Spannenergie).",
    "leicht",
    ["Federenergie", "Mechanik"]
  ),
  q(
    "ph-pool-14-012",
    KAP[1],
    "Der Schalldruck p und die Schallintensität I hängen zusammen:",
    ["I ∝ p", "I ∝ p²", "I ∝ 1/p", "I = p", "I unabhängig von p"],
    1,
    "Schallintensität I ∝ p² (bei ebener Welle).",
    "mittel",
    ["Schalldruck", "Intensität"]
  ),
  q(
    "ph-pool-14-013",
    KAP[2],
    "Der kritische Punkt eines Stoffes ist:",
    [
      "der Schmelzpunkt",
      "der Punkt, an dem die Grenze zwischen Flüssigkeit und Gas verschwindet",
      "der Tripelpunkt",
      "0 °C",
      "der Siedepunkt",
    ],
    1,
    "Kritischer Punkt: Ende der Dampfdruckkurve; überkritisches Fluid.",
    "mittel",
    ["kritischer Punkt", "Phasendiagramm"]
  ),
  q(
    "ph-pool-14-014",
    KAP[3],
    "Bei konstantem Widerstand R gilt: Die Leistung P ist proportional zu:",
    ["I", "I²", "1/I", "I⁴", "√I"],
    1,
    "P = I² · R (bei konstantem R).",
    "leicht",
    ["Leistung", "Stromstärke"]
  ),
  q(
    "ph-pool-14-015",
    KAP[4],
    "Die Ordnungszahl Z im Periodensystem gibt an:",
    [
      "die Massenzahl",
      "die Neutronenzahl",
      "die Protonenzahl (Kernladungszahl)",
      "die Nukleonenzahl",
      "die Elektronenzahl nur bei Atomen",
    ],
    2,
    "Ordnungszahl Z = Anzahl der Protonen im Kern.",
    "leicht",
    ["Ordnungszahl", "Periodensystem"]
  ),
  q(
    "ph-pool-14-016",
    KAP[0],
    "Der Schwerpunkt eines Körpers ist:",
    [
      "immer außerhalb des Körpers",
      "der Punkt, in dem man sich die Gewichtskraft angreifend denken kann",
      "nur bei homogenen Körpern definiert",
      "gleich dem geometrischen Mittelpunkt",
      "unabhängig von g",
    ],
    1,
    "Schwerpunkt: Wirkungslinie der Gewichtskraft; bei homogenem Körper = Massenmittelpunkt.",
    "leicht",
    ["Schwerpunkt", "Mechanik"]
  ),
  q(
    "ph-pool-14-017",
    KAP[1],
    "Das Huygenssche Prinzip besagt:",
    [
      "Licht ist nur Teilchen",
      "Jeder Punkt einer Wellenfront ist Ausgangspunkt elementarer Kugelwellen",
      "Es gibt keine Beugung",
      "Wellen breiten sich nur geradlinig aus",
      "Die Frequenz ändert sich immer",
    ],
    1,
    "Huygens: Neue Wellenfront als Einhüllende der Elementarwellen; erklärt Beugung.",
    "mittel",
    ["Huygens", "Wellenoptik"]
  ),
  q(
    "ph-pool-14-018",
    KAP[2],
    "Die Verdampfungswärme ist:",
    [
      "die Temperatur beim Sieden",
      "die Wärmemenge pro Masse beim Phasenübergang flüssig → gasförmig",
      "die spezifische Wärmekapazität",
      "die Schmelzwärme",
      "immer null",
    ],
    1,
    "Verdampfungswärme (latente Wärme): Energie für Verdampfen bei konstanter Temperatur.",
    "mittel",
    ["Verdampfungswärme", "Phasenübergang"]
  ),
  q(
    "ph-pool-14-019",
    KAP[3],
    "Die elektrische Arbeit W_el bei Gleichstrom ist:",
    ["W = U / I", "W = U · I · t (bzw. U · Q)", "W = R · I", "W = I / U", "W = U + I"],
    1,
    "W_el = U · I · t = U · Q (Spannung mal Ladung).",
    "leicht",
    ["elektrische Arbeit", "E-Lehre"]
  ),
  q(
    "ph-pool-14-020",
    KAP[4],
    "Die Aktivität einer radioaktiven Probe nimmt ab, weil:",
    [
      "die Halbwertszeit steigt",
      "die Anzahl der noch nicht zerfallenen Kerne abnimmt",
      "die Temperatur sinkt",
      "der Druck steigt",
      "die Masse zunimmt",
    ],
    1,
    "Aktivität A = λ · N; N (Zahl der Kerne) nimmt mit der Zeit ab.",
    "mittel",
    ["Aktivität", "Zerfall"]
  ),
  q(
    "ph-pool-14-021",
    KAP[0],
    "Ein freier Fall (ohne Luftreibung) ist:",
    [
      "gleichmäßige Bewegung",
      "gleichmäßig beschleunigte Bewegung mit a = g",
      "eine Kreisbewegung",
      "eine Schwingung",
      "mit konstanter Geschwindigkeit",
    ],
    1,
    "Freier Fall: a = g ≈ 9,81 m/s² (nach unten).",
    "leicht",
    ["freier Fall", "Beschleunigung"]
  ),
  q(
    "ph-pool-14-022",
    KAP[1],
    "Bei der Interferenz zweier kohärenter Wellen können sich die Wellen:",
    [
      "nur verstärken",
      "verstärken oder auslöschen (konstruktiv/destruktiv)",
      "nur auslöschen",
      "nicht überlagern",
      "nur reflektieren",
    ],
    1,
    "Interferenz: Überlagerung → konstruktiv (Verstärkung) oder destruktiv (Auslöschung).",
    "leicht",
    ["Interferenz", "Wellen"]
  ),
  q(
    "ph-pool-14-023",
    KAP[2],
    "Die innere Energie U eines idealen Gases hängt bei konstanter Teilchenzahl nur ab von:",
    [
      "Volumen und Druck",
      "der Temperatur",
      "nur vom Druck",
      "nur vom Volumen",
      "der Entropie allein",
    ],
    1,
    "Ideales Gas: U = U(T) (nur von der Temperatur, nicht von V oder p).",
    "mittel",
    ["innere Energie", "ideales Gas"]
  ),
  q(
    "ph-pool-14-024",
    KAP[3],
    "Die Richtung der Lorentzkraft auf eine positive Ladung kann man mit der:",
    [
      "Linke-Hand-Regel",
      "Rechten-Hand-Regel (Daumen v, Zeiger B, Mittelfinger F)",
      "nur rechnerisch bestimmen",
      "nicht bestimmen",
      "Drei-Finger-Regel nur bei Elektronen",
    ],
    1,
    "Rechte-Hand-Regel: v (Daumen), B (Zeigefinger), F (Mittelfinger) für positive Ladung.",
    "mittel",
    ["Lorentzkraft", "Richtung"]
  ),
  q(
    "ph-pool-14-025",
    KAP[4],
    "Die Strahlenschutzzeit (Halbwertszeit) bei Kontamination:",
    [
      "hat keine Bedeutung",
      "bedeutet: nach einer Halbwertszeit ist die Aktivität auf die Hälfte gesunken",
      "ist immer 1 Stunde",
      "gilt nur für Alpha-Strahlung",
      "verdoppelt die Dosis",
    ],
    1,
    "Nach n Halbwertszeiten ist die Aktivität auf (1/2)^n gesunken.",
    "leicht",
    ["Halbwertszeit", "Strahlenschutz"]
  ),
  q(
    "ph-pool-14-026",
    KAP[0],
    "Der Druck in einer Flüssigkeit in konstanter Tiefe h:",
    [
      "ist überall null",
      "ist überall gleich (Pascal)",
      "wächst mit der Tiefe: p = ρ · g · h (bei konstanter Dichte)",
      "sinkt mit der Tiefe",
      "hängt nur von der Oberfläche ab",
    ],
    2,
    "Schweredruck: p = ρ · g · h (hydrostatischer Druck).",
    "leicht",
    ["Schweredruck", "Flüssigkeit"]
  ),
  q(
    "ph-pool-14-027",
    KAP[1],
    "Eine Konkavlinse (Sammellinse) hat:",
    [
      "eine positive Brennweite",
      "eine negative Brennweite",
      "keine Brennweite",
      "nur bei Laserlicht eine Brennweite",
      "Brennweite null",
    ],
    0,
    "Sammellinse (konvex): f > 0; bündelt paralleles Licht in den Brennpunkt.",
    "leicht",
    ["Sammellinse", "Brennweite"]
  ),
  q(
    "ph-pool-14-028",
    KAP[2],
    "Bei isothermer Expansion eines idealen Gases:",
    [
      "bleibt die Temperatur konstant, das Volumen nimmt zu",
      "bleibt nur der Druck konstant",
      "bleibt nur das Volumen konstant",
      "nimmt die innere Energie zu",
      "wird keine Arbeit verrichtet",
    ],
    0,
    "Isotherm: T = const → p·V = const; bei Expansion nimmt V zu, p ab.",
    "mittel",
    ["isotherm", "Expansion"]
  ),
  q(
    "ph-pool-14-029",
    KAP[3],
    "Ein elektrisches Feld wird von:",
    [
      "nur von bewegten Ladungen erzeugt",
      "von Ladungen (ruhend oder bewegt) erzeugt",
      "nur von Magneten erzeugt",
      "nur im Vakuum erzeugt",
      "nur von Strom erzeugt",
    ],
    1,
    "Elektrisches Feld: wird von Ladungen erzeugt (Coulomb).",
    "leicht",
    ["elektrisches Feld", "Ladung"]
  ),
  q(
    "ph-pool-14-030",
    KAP[4],
    "Die Absorptionsdosis (Energiedosis) wird in … angegeben.",
    ["Becquerel", "Sievert", "Gray (Gy)", "Curie", "Coulomb"],
    2,
    "Energiedosis D in Gray (Gy): 1 Gy = 1 J/kg.",
    "mittel",
    ["Gray", "Energiedosis"]
  ),
  q(
    "ph-pool-14-031",
    KAP[0],
    "Das actio-reactio-Prinzip (3. Newton) besagt:",
    [
      "F = m · a",
      "Kraft und Gegenkraft wirken auf verschiedene Körper und sind entgegengesetzt gleich",
      "nur ein Körper übt eine Kraft aus",
      "Kräfte heben sich immer auf",
      "es gibt keine Reibung",
    ],
    1,
    "3. Newton: actio = reactio; Kräfte wirken auf verschiedene Körper.",
    "leicht",
    ["actio reactio", "Newton"]
  ),
  q(
    "ph-pool-14-032",
    KAP[1],
    "Ein Überschallflugzeug erzeugt einen Überschallknall, weil:",
    [
      "die Schallgeschwindigkeit überschritten wird und sich Druckwellen überlagern",
      "es immer knallt",
      "die Triebwerke explodieren",
      "die Luft brennt",
      "die Frequenz zu hoch ist",
    ],
    0,
    "Überschall: Mach-Kegel; Druckwellen überlagern sich → Knall.",
    "mittel",
    ["Überschall", "Schall"]
  ),
  q(
    "ph-pool-14-033",
    KAP[2],
    "Bei isochorer Prozessänderung (V = const) eines idealen Gases:",
    [
      "bleibt der Druck konstant",
      "bleibt das Volumen konstant",
      "bleibt die Temperatur konstant",
      "wird keine Wärme ausgetauscht",
      "bleibt die innere Energie konstant",
    ],
    1,
    "Isochor: Volumen konstant; p/T = const.",
    "mittel",
    ["isochor", "Thermodynamik"]
  ),
  q(
    "ph-pool-14-034",
    KAP[3],
    "Ein Magnetfeld wird erzeugt von:",
    [
      "nur ruhenden Ladungen",
      "bewegten Ladungen (Strömen) und zeitlich sich ändernden elektrischen Feldern",
      "nur Permanentmagneten",
      "nur im Vakuum",
      "nur Spulen",
    ],
    1,
    "Magnetfeld: bewegte Ladungen (Ampère) und ∂E/∂t (Maxwell).",
    "mittel",
    ["Magnetfeld", "Quelle"]
  ),
  q(
    "ph-pool-14-035",
    KAP[4],
    "Die Zerfallsenergie beim Alpha-Zerfall erscheint als:",
    [
      "nur Wärme",
      "kinetische Energie des Alpha-Teilchens und des Tochterkerns (+ ggf. Gamma)",
      "nur Gammastrahlung",
      "nur Licht",
      "nur Beta-Strahlung",
    ],
    1,
    "Alpha-Zerfall: Q-Wert als kinetische Energie von α und Rückstoßkern; evtl. γ.",
    "mittel",
    ["Alpha-Zerfall", "Zerfallsenergie"]
  ),
  q(
    "ph-pool-14-036",
    KAP[0],
    "Die Dichte ρ ist definiert als:",
    [
      "Masse mal Volumen",
      "Masse durch Volumen",
      "Volumen durch Masse",
      "Gewicht durch Volumen",
      "Kraft durch Fläche",
    ],
    1,
    "ρ = m/V (Einheit kg/m³).",
    "leicht",
    ["Dichte", "SI"]
  ),
  q(
    "ph-pool-14-037",
    KAP[1],
    "Der Grenzwinkel der Totalreflexion hängt ab von:",
    [
      "nur der Wellenlänge",
      "den Brechungsindizes der beiden Medien",
      "nur der Intensität",
      "der Polarisationsrichtung",
      "der Temperatur",
    ],
    1,
    "sin(α_grenz) = n_2/n_1 (Übergang von n_1 nach n_2, n_1 > n_2).",
    "mittel",
    ["Totalreflexion", "Grenzwinkel"]
  ),
  q(
    "ph-pool-14-038",
    KAP[2],
    "Ein Carnot-Prozess ist:",
    [
      "ein beliebiger Kreisprozess",
      "ein reversibler Kreisprozess mit maximalem Wirkungsgrad zwischen zwei Temperaturniveaus",
      "nur eine isotherme Expansion",
      "irreversibel",
      "nur für Gase",
    ],
    1,
    "Carnot: idealer Kreisprozess; η_Carnot = 1 − T_kalt/T_heiss.",
    "schwer",
    ["Carnot", "Kreisprozess"]
  ),
  q(
    "ph-pool-14-039",
    KAP[3],
    "Die elektrische Feldstärke E zwischen den Platten eines geladenen Plattenkondensators (homogenes Feld) ist:",
    ["E = U · d", "E = U / d", "E = U + d", "E = Q / (ε₀ A)", "nur B und D können gelten"],
    4,
    "E = U/d (homogen) und E = σ/ε₀ mit σ = Q/A.",
    "mittel",
    ["Feldstärke", "Kondensator"]
  ),
  q(
    "ph-pool-14-040",
    KAP[4],
    "Ein Neutronenüberschuss im Kern führt oft zu:",
    [
      "Alpha-Zerfall",
      "Beta-Minus-Zerfall",
      "Beta-Plus-Zerfall",
      "Kernspaltung nur bei leichten Kernen",
      "keinem Zerfall",
    ],
    1,
    "β⁻-Zerfall reduziert Neutronenüberschuss (n → p + e⁻ + ν̄).",
    "mittel",
    ["Beta-Minus", "Neutronenüberschuss"]
  ),
  q(
    "ph-pool-14-041",
    KAP[0],
    "Die Periodendauer T eines Fadenpendels (kleine Auslenkung) hängt ab von:",
    [
      "nur der Masse",
      "der Fadenlänge l und der Erdbeschleunigung g: T ∝ √(l/g)",
      "nur der Amplitude",
      "nur g",
      "der Dichte",
    ],
    1,
    "T = 2π√(l/g) für mathematisches Pendel (kleine Auslenkung).",
    "mittel",
    ["Fadenpendel", "Periodendauer"]
  ),
  q(
    "ph-pool-14-042",
    KAP[1],
    "Die Schallgeschwindigkeit in Luft bei 20 °C beträgt ungefähr:",
    ["34 m/s", "340 m/s", "3400 m/s", "1500 m/s", "3·10⁸ m/s"],
    1,
    "Schall in Luft ca. 343 m/s (abhängig von T).",
    "leicht",
    ["Schallgeschwindigkeit", "Luft"]
  ),
  q(
    "ph-pool-14-043",
    KAP[2],
    "Ein Wärmepumpe nutzt zugeführte Arbeit, um:",
    [
      "Wärme von warm nach kalt zu transportieren",
      "Wärme von kalt nach warm zu transportieren (Heizen)",
      "nur Strom zu erzeugen",
      "nur zu kühlen",
      "keine Arbeit zu verrichten",
    ],
    1,
    "Wärmepumpe: Arbeit wird zugeführt, Wärme wird von kalt nach warm gepumpt.",
    "mittel",
    ["Wärmepumpe", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-14-044",
    KAP[3],
    "Der kapazitive Blindwiderstand X_C einer Kapazität C bei Kreisfrequenz ω ist:",
    ["X_C = ω · C", "X_C = 1/(ω · C)", "X_C = R", "X_C = ω / C", "X_C = 0"],
    1,
    "Blindwiderstand Kondensator: X_C = 1/(ωC).",
    "mittel",
    ["Blindwiderstand", "Kondensator"]
  ),
  q(
    "ph-pool-14-045",
    KAP[4],
    "Die Strahlenbelastung durch natürliche Quellen (Höhenstrahlung, Radon, etc.) heißt:",
    [
      "künstliche Strahlung",
      "Nuklearstrahlung",
      "terrestrische und kosmische Strahlung (natürliche Exposition)",
      "nur Alpha",
      "immer vernachlässigbar",
    ],
    2,
    "Natürliche Strahlenexposition: Boden, Radon, kosmische Strahlung.",
    "leicht",
    ["natürliche Strahlung", "Exposition"]
  ),
  q(
    "ph-pool-14-046",
    KAP[0],
    "Die Einheit Pascal (Pa) gehört zur Größe:",
    ["Kraft", "Druck", "Energie", "Leistung", "Stromstärke"],
    1,
    "Druck p in Pascal: 1 Pa = 1 N/m².",
    "leicht",
    ["Pascal", "Druck"]
  ),
  q(
    "ph-pool-14-047",
    KAP[1],
    "Bei einer Konkavlinse (Sammellinse) für Licht von links:",
    [
      "liegt der Brennpunkt rechts von der Linse",
      "liegt der Brennpunkt links von der Linse",
      "gibt es keinen Brennpunkt",
      "ist die Brennweite negativ",
      "Konkavlinse ist eine Zerstreuungslinse",
    ],
    4,
    "Konkavlinse = Zerstreuungslinse (nach innen gewölbt); f < 0.",
    "mittel",
    ["Konkavlinse", "Zerstreuung"]
  ),
  q(
    "ph-pool-14-048",
    KAP[2],
    "Die spezifische Wärmekapazität von Wasser ist etwa:",
    ["0,5 kJ/(kg·K)", "4,2 kJ/(kg·K)", "1 kJ/(kg·K)", "10 kJ/(kg·K)", "0,1 kJ/(kg·K)"],
    1,
    "c_Wasser ≈ 4,19 kJ/(kg·K).",
    "leicht",
    ["spezifische Wärmekapazität", "Wasser"]
  ),
  q(
    "ph-pool-14-049",
    KAP[3],
    "Ein Kurzschluss liegt vor, wenn:",
    [
      "der Widerstand maximal ist",
      "der Widerstand zwischen zwei Punkten nahezu null ist (Strom sehr hoch)",
      "keine Spannung anliegt",
      "der Strom null ist",
      "eine Sicherung eingebaut ist",
    ],
    1,
    "Kurzschluss: R ≈ 0 → sehr großer Strom; Gefahr.",
    "leicht",
    ["Kurzschluss", "Stromkreis"]
  ),
  q(
    "ph-pool-14-050",
    KAP[4],
    "Die Zerfallskonstante λ und die Halbwertszeit T_½ hängen zusammen durch:",
    ["λ = T_½", "λ · T_½ = ln(2) ≈ 0,693", "λ = 1/T_½ ohne ln", "T_½ = λ²", "λ = 2 · T_½"],
    1,
    "T_½ = ln(2)/λ = 0,693/λ.",
    "mittel",
    ["Zerfallskonstante", "Halbwertszeit"]
  ),
  q(
    "ph-pool-14-051",
    KAP[0],
    "Ein Körper bleibt in Ruhe, wenn:",
    [
      "immer Kräfte wirken",
      "die vektorielle Summe aller Kräfte null ist (Kräftegleichgewicht)",
      "nur eine Kraft wirkt",
      "Reibung wirkt",
      "er schwer ist",
    ],
    1,
    "Gleichgewicht: Σ F = 0 (1. Newton).",
    "leicht",
    ["Kräftegleichgewicht", "Ruhe"]
  ),
  q(
    "ph-pool-14-052",
    KAP[1],
    "Die Wellenlänge des sichtbaren Lichts liegt etwa im Bereich:",
    ["1 m bis 10 m", "400 nm bis 700 nm", "1 mm bis 1 m", "1 nm bis 10 nm", "1 km"],
    1,
    "Sichtbares Licht: ca. 380 nm (violett) bis 780 nm (rot).",
    "leicht",
    ["sichtbares Licht", "Wellenlänge"]
  ),
  q(
    "ph-pool-14-053",
    KAP[2],
    "Bei isobarer Expansion (p = const) eines idealen Gases:",
    [
      "bleibt der Druck konstant, Volumen und Temperatur können sich ändern",
      "bleibt nur das Volumen konstant",
      "bleibt die Temperatur konstant",
      "wird keine Wärme zugeführt",
      "bleibt die innere Energie konstant",
    ],
    0,
    "Isobar: p = const; V/T = const (Gay-Lussac).",
    "mittel",
    ["isobar", "Expansion"]
  ),
  q(
    "ph-pool-14-054",
    KAP[3],
    "Die magnetische Flussdichte B einer langen Spule mit n Windungen pro Länge und Strom I ist:",
    ["B = 0", "B = μ₀ · n · I (im Innern, ideal)", "B = μ₀ · I / (2πr)", "B = n / I", "B = I / n"],
    1,
    "B = μ₀ · n · I (im Inneren einer langen Spule, homogen).",
    "mittel",
    ["Spule", "Magnetfeld"]
  ),
  q(
    "ph-pool-14-055",
    KAP[4],
    "Ein Radionuklid mit kurzer Halbwertszeit:",
    [
      "ist immer gefährlicher",
      "klingt schnell ab (weniger Dauerbelastung)",
      "hat keine Aktivität",
      "zerfällt nie",
      "ist nur künstlich",
    ],
    1,
    "Kurze T_½ → Aktivität klingt schnell ab.",
    "leicht",
    ["Halbwertszeit", "Radionuklid"]
  ),
  q(
    "ph-pool-14-056",
    KAP[0],
    "Die Geschwindigkeit v bei gleichförmiger Bewegung ist:",
    ["v = a · t", "v = s / t (Weg durch Zeit)", "v = s · t", "v = a / t", "v = ½ a t²"],
    1,
    "Gleichförmig: v = s/t = const.",
    "leicht",
    ["Geschwindigkeit", "Bewegung"]
  ),
  q(
    "ph-pool-14-057",
    KAP[1],
    "Ein Prisma zerlegt weißes Licht in Farben, weil:",
    [
      "Licht nur eine Farbe hat",
      "der Brechungsindex von der Wellenlänge abhängt (Dispersion)",
      "Totalreflexion auftritt",
      "Licht gestreut wird",
      "Absorption auftritt",
    ],
    1,
    "Prisma: Dispersion n(λ) → Regenbogenspektrum.",
    "leicht",
    ["Prisma", "Dispersion"]
  ),
  q(
    "ph-pool-14-058",
    KAP[2],
    "Die Zustandsgrößen eines idealen Gases sind:",
    [
      "nur Druck",
      "z. B. Druck, Volumen, Temperatur (Zustand eindeutig beschrieben)",
      "nur Temperatur",
      "nur Volumen",
      "nicht definiert",
    ],
    1,
    "Zustandsgrößen: p, V, T (und andere); Zustand des Systems.",
    "mittel",
    ["Zustandsgröße", "Thermodynamik"]
  ),
  q(
    "ph-pool-14-059",
    KAP[3],
    "Ein Supraleiter hat unterhalb der Sprungtemperatur:",
    [
      "sehr hohen Widerstand",
      "vernachlässigbaren elektrischen Widerstand",
      "nur bei Wechselstrom Widerstand null",
      "nur bei Gleichstrom Widerstand null",
      "erhöhte Reibung",
    ],
    1,
    "Supraleitung: R → 0 unterhalb T_c.",
    "leicht",
    ["Supraleiter", "Widerstand"]
  ),
  q(
    "ph-pool-14-060",
    KAP[4],
    "Die Strahlungsart, die beim Zerfall von Radium-226 emittiert wird, ist vor allem:",
    ["Beta-Strahlung", "Alpha-Strahlung", "Gamma-Strahlung", "Neutronen", "Röntgen"],
    1,
    "Ra-226: Alpha-Strahler (4n+2-Reihe).",
    "mittel",
    ["Radium", "Alpha-Zerfall"]
  ),
];
