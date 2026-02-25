/**
 * Physik-Pool Teil 3 — Fragen 101–150 (MedAT Typ K, Single Choice).
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const physikPool3: Question[] = [
  q(
    "ph-pool-101",
    "phys-kap1",
    "Welche Einheit hat die Frequenz?",
    ["m/s", "Hz", "s", "m", "J"],
    1,
    "Frequenz f in Hertz (Hz) = 1/s.",
    "leicht",
    ["Frequenz", "Hertz"]
  ),
  q(
    "ph-pool-102",
    "phys-kap5",
    "Die Elementarladung e beträgt ungefähr:",
    ["1,6·10⁻¹⁹ C", "1,6·10⁻¹⁹ A", "1 C", "1,6·10¹⁹ C", "9·10⁹ C"],
    0,
    "e ≈ 1,602·10⁻¹⁹ C (Ladung eines Protons bzw. Betrag eines Elektrons).",
    "leicht",
    ["Elementarladung", "Coulomb"]
  ),
  q(
    "ph-pool-103",
    "phys-kap4",
    "Welcher Hauptsatz sagt: Wärme fließt spontan nur von heiß nach kalt?",
    ["1. Hauptsatz", "2. Hauptsatz", "3. Hauptsatz", "0. Hauptsatz", "Energieerhaltungssatz"],
    1,
    "2. Hauptsatz: Entropie nimmt zu; Wärme fließt spontan von höherer zu niedrigerer Temperatur.",
    "mittel",
    ["2. Hauptsatz", "Thermodynamik"]
  ),
  q(
    "ph-pool-104",
    "phys-kap3",
    "Die Amplitude einer Welle ist:",
    [
      "die Frequenz",
      "die maximale Auslenkung aus der Ruhelage",
      "die Wellenlänge",
      "die Ausbreitungsgeschwindigkeit",
      "die Periode",
    ],
    1,
    "Amplitude = maximale Auslenkung (Intensität/Lautstärke bei Schall).",
    "leicht",
    ["Amplitude", "Welle"]
  ),
  q(
    "ph-pool-105",
    "phys-kap1",
    "Ein Körper mit 5 kg Masse liegt ruhend auf dem Tisch. Welche Kraft übt der Tisch auf den Körper aus (g ≈ 10 m/s²)?",
    ["0 N", "5 N", "50 N", "10 N", "5 kg"],
    2,
    "Gleichgewicht: Tischkraft = Gewichtskraft = m·g = 5·10 = 50 N (nach oben).",
    "leicht",
    ["Kräftegleichgewicht", "Normalkraft"]
  ),
  q(
    "ph-pool-106",
    "phys-kap7",
    "Die Massenzahl A eines Kerns ist:",
    [
      "gleich der Protonenzahl",
      "Protonen + Neutronen",
      "nur Neutronenzahl",
      "Protonen − Neutronen",
      "Ordnungszahl",
    ],
    1,
    "A = Nukleonenanzahl = Protonen + Neutronen. Z = Protonenzahl (Ordnungszahl), N = A − Z.",
    "leicht",
    ["Massenzahl", "Kernphysik"]
  ),
  q(
    "ph-pool-107",
    "phys-kap5",
    "Im Plattenkondensator gilt für die Feldstärke E bei Spannung U und Plattenabstand d:",
    ["E = U · d", "E = U / d", "E = d / U", "E = U + d", "E = Q / U"],
    1,
    "Homogenes Feld: E = U/d (V/m).",
    "leicht",
    ["Plattenkondensator", "Feldstärke"]
  ),
  q(
    "ph-pool-108",
    "phys-kap1",
    "Die Dichte ρ ist definiert als:",
    [
      "Masse · Volumen",
      "Masse / Volumen",
      "Volumen / Masse",
      "Masse + Volumen",
      "Gewichtskraft / Volumen",
    ],
    1,
    "ρ = m/V, Einheit kg/m³. Intensiv (unabhängig von der Menge).",
    "leicht",
    ["Dichte", "Masse", "Volumen"]
  ),
  q(
    "ph-pool-109",
    "phys-kap3",
    "Bei Totalreflexion:",
    [
      "tritt Licht immer aus dem optisch dichteren ins dünnere Medium.",
      "wird der gesamte einfallende Strahl reflektiert (kein gebrochener Strahl).",
      "gibt es keinen kritischen Winkel.",
      "ist die Brechzahl 1.",
      "gilt nur für Schall.",
    ],
    1,
    "Totalreflexion: Einfallswinkel ≥ Grenzwinkel → gesamter Strahl reflektiert, kein gebrochener Anteil.",
    "mittel",
    ["Totalreflexion", "Optik"]
  ),
  q(
    "ph-pool-110",
    "phys-kap5",
    "Die Kapazität C eines Kondensators ist definiert als:",
    ["C = U · Q", "C = Q / U", "C = U / Q", "C = Q + U", "C = I · t"],
    1,
    "C = Q/U (Farad F = C/V). Gespeicherte Ladung pro Spannung.",
    "leicht",
    ["Kondensator", "Kapazität"]
  ),
  q(
    "ph-pool-111",
    "phys-kap4",
    "0 °C in Kelvin:",
    ["0 K", "273,15 K", "−273,15 K", "100 K", "373,15 K"],
    1,
    "T in K = T in °C + 273,15. 0 °C = 273,15 K.",
    "leicht",
    ["Kelvin", "Temperatur"]
  ),
  q(
    "ph-pool-112",
    "phys-kap1",
    "Welche Aussage zum freien Fall ist richtig (ohne Luftreibung)?",
    [
      "Alle Körper fallen mit gleicher Geschwindigkeit.",
      "Alle Körper haben die gleiche Beschleunigung g.",
      "Schwere Körper fallen schneller.",
      "Die Fallzeit hängt von der Masse ab.",
      "g ist überall auf der Erde exakt 10 m/s².",
    ],
    1,
    "Im Vakuum: alle Körper a = g (ca. 9,81 m/s²), unabhängig von der Masse.",
    "mittel",
    ["freier Fall", "g"]
  ),
  q(
    "ph-pool-113",
    "phys-kap7",
    "Röntgenstrahlung entsteht typischerweise durch:",
    [
      "radioaktiven Zerfall",
      "Abbremsung schneller Elektronen (Bremsstrahlung) oder Übergänge in der Elektronenhülle",
      "Kernspaltung",
      "Alpha-Zerfall",
      "Beta-Zerfall",
    ],
    1,
    "Röntgen: Bremsstrahlung oder charakteristische Strahlung (Elektronenübergänge in der Hülle).",
    "mittel",
    ["Röntgen", "Entstehung"]
  ),
  q(
    "ph-pool-114",
    "phys-kap5",
    "Die Coulomb-Kraft zwischen zwei Punktladungen ist:",
    [
      "proportional zum Abstand r",
      "proportional zu 1/r²",
      "unabhängig vom Medium",
      "proportional zu r²",
      "immer anziehend",
    ],
    1,
    "Coulomb: F ∝ q₁·q₂/r². Im Medium F kleiner (εᵣ > 1).",
    "mittel",
    ["Coulomb", "Kraft"]
  ),
  q(
    "ph-pool-115",
    "phys-kap1",
    "Welche Aussage zu Leistung P und Arbeit W ist richtig?",
    [
      "P = W · t",
      "W = P · t (bei konstanter Leistung)",
      "P und W haben dieselbe Einheit.",
      "Leistung ist Arbeit pro Masse.",
      "W = P / t",
    ],
    1,
    "P = W/t → W = P·t. P in W (Watt), W in J (Joule).",
    "leicht",
    ["Leistung", "Arbeit"]
  ),
  q(
    "ph-pool-116",
    "phys-kap3",
    "Der Brechungsindex n eines Mediums ist definiert als:",
    [
      "c_Medium / c_Vakuum",
      "c_Vakuum / c_Medium",
      "c_Vakuum · c_Medium",
      "Wellenlänge im Medium",
      "Frequenz im Medium",
    ],
    1,
    "n = c_Vakuum / c_Medium. n > 1 → Licht langsamer im Medium.",
    "mittel",
    ["Brechungsindex", "Optik"]
  ),
  q(
    "ph-pool-117",
    "phys-kap4",
    "Beim Verdampfen von Wasser bei 100 °C:",
    [
      "sinkt die Temperatur.",
      "bleibt die Temperatur konstant, bis alles verdampft ist.",
      "steigt der Druck auf 0.",
      "wird keine Energie zugeführt.",
      "entsteht Eis.",
    ],
    1,
    "Phasenübergang: Temperatur konstant (Siedepunkt), Verdampfungswärme wird zugeführt.",
    "mittel",
    ["Verdampfen", "Siedepunkt"]
  ),
  q(
    "ph-pool-118",
    "phys-kap5",
    "Ein Widerstand von 20 Ω wird von 0,5 A durchflossen. Welche Leistung wird umgesetzt?",
    ["10 W", "5 W", "40 W", "0,025 W", "100 W"],
    1,
    "P = R·I² = 20·(0,5)² = 5 W. Oder U = R·I = 10 V, P = U·I = 5 W.",
    "leicht",
    ["Leistung", "Widerstand"]
  ),
  q(
    "ph-pool-119",
    "phys-kap1",
    "Der Impuls p hat die Einheit:",
    ["kg·m/s²", "kg·m/s", "N·s", "B und C sind richtig", "J"],
    3,
    "p = m·v → kg·m/s. Auch N·s = kg·m/s (weil F = Δp/Δt).",
    "mittel",
    ["Impuls", "Einheiten"]
  ),
  q(
    "ph-pool-120",
    "phys-kap7",
    "Welche Strahlung ist elektromagnetisch?",
    ["Alpha", "Beta", "Gamma", "Neutronen", "Alle außer Alpha"],
    2,
    "Gamma = elektromagnetische Welle. Alpha = He-Kerne, Beta = Elektronen/Positronen.",
    "leicht",
    ["Gamma", "elektromagnetisch"]
  ),
  q(
    "ph-pool-121",
    "phys-kap3",
    "Die Periode T einer Welle und die Frequenz f hängen zusammen durch:",
    ["T = f", "T = 1/f", "T = f²", "T = 2π·f", "f = T²"],
    1,
    "T = 1/f (Periode in s, Frequenz in Hz).",
    "leicht",
    ["Periode", "Frequenz"]
  ),
  q(
    "ph-pool-122",
    "phys-kap5",
    "In der Linsengleichung 1/f = 1/g + 1/b bedeuten g und b:",
    [
      "Brennweite und Durchmesser",
      "Gegenstandsweite und Bildweite",
      "Brechzahl und Abstand",
      "Stärke und Vergrößerung",
      "Krümmungsradien",
    ],
    1,
    "g = Gegenstandsweite, b = Bildweite, f = Brennweite.",
    "mittel",
    ["Linsengleichung", "Optik"]
  ),
  q(
    "ph-pool-123",
    "phys-kap1",
    "Ein Auto beschleunigt von 0 auf 36 km/h in 10 s. Die Beschleunigung ist (in m/s²):",
    ["3,6", "1", "0,36", "36", "10"],
    1,
    "v = 36 km/h = 10 m/s. a = Δv/Δt = (10−0)/10 = 1 m/s².",
    "leicht",
    ["Beschleunigung", "Kinematik"]
  ),
  q(
    "ph-pool-124",
    "phys-kap4",
    "Die innere Energie eines idealen Gases hängt bei fester Teilchenzahl nur ab von:",
    [
      "dem Volumen",
      "der Temperatur",
      "dem Druck",
      "der Dichte",
      "der Geschwindigkeit des Behälters",
    ],
    1,
    "Innere Energie U des idealen Gases: nur von T (und Teilchenzahl) abhängig. U ∝ T.",
    "mittel",
    ["innere Energie", "ideales Gas"]
  ),
  q(
    "ph-pool-125",
    "phys-kap5",
    "Positive Ladungen in einem elektrischen Feld bewegen sich spontan:",
    [
      "vom höheren zum niedrigeren Potential",
      "vom niedrigeren zum höheren Potential",
      "immer im Kreis",
      "nur bei konstantem Feld",
      "gar nicht",
    ],
    0,
    "Positive Ladung wird in Richtung E beschleunigt → von hohem zu niedrigem Potential.",
    "mittel",
    ["Potential", "elektrisches Feld"]
  ),
  q(
    "ph-pool-126",
    "phys-kap1",
    "Welche Kraft muss ein Seil aufbringen, um einen 80-kg-Menschen mit 2 m/s² nach oben zu beschleunigen (g ≈ 10 m/s²)?",
    ["160 N", "640 N", "800 N", "960 N", "80 N"],
    3,
    "F_seil − m·g = m·a → F = m(g+a) = 80·12 = 960 N.",
    "schwer",
    ["Kraft", "Beschleunigung", "Seil"]
  ),
  q(
    "ph-pool-127",
    "phys-kap7",
    "Die absorbierte Dosis (Energiedosis) wird in welcher Einheit angegeben?",
    ["Sievert", "Becquerel", "Gray", "Coulomb", "Elektronenvolt"],
    2,
    "Gray (Gy) = absorbierte Energiedosis = J/kg. Sievert (Sv) = Äquivalentdosis (biologisch gewichtet).",
    "mittel",
    ["Gray", "Dosis", "Strahlung"]
  ),
  q(
    "ph-pool-128",
    "phys-kap3",
    "Bei konstruktiver Interferenz zweier Wellen:",
    [
      "löschen sich die Wellen aus.",
      "verstärken sich die Wellen (gleiche Phase).",
      "entsteht stehende Welle.",
      "ändert sich die Frequenz.",
      "gilt nur für Schall.",
    ],
    1,
    "Konstruktiv: gleiche Phase → Verstärkung. Destruktiv: gegenphasig → Auslöschung.",
    "mittel",
    ["Interferenz", "Wellen"]
  ),
  q(
    "ph-pool-129",
    "phys-kap5",
    "Der spezifische Widerstand ρ eines Materials:",
    [
      "hat die Einheit Ω",
      "hat die Einheit Ω·m",
      "ist unabhängig vom Material",
      "ist proportional zur Leitfähigkeit ohne Faktor",
      "ist dimensionslos",
    ],
    1,
    "ρ in Ω·m. R = ρ·l/A. Leitfähigkeit σ = 1/ρ.",
    "mittel",
    ["spezifischer Widerstand", "Elektrizität"]
  ),
  q(
    "ph-pool-130",
    "phys-kap1",
    "Ein Stein wird 4 m hoch geworfen. Mit welcher Geschwindigkeit (Betrag) trifft er wieder auf (g ≈ 10 m/s², keine Reibung)?",
    ["4 m/s", "ca. 8,9 m/s", "10 m/s", "20 m/s", "0 m/s"],
    1,
    "Energieerhaltung: (1/2)mv² = mgh → v = √(2gh) = √(2·10·4) = √80 ≈ 8,9 m/s.",
    "mittel",
    ["Energieerhaltung", "Wurf"]
  ),
  q(
    "ph-pool-131",
    "phys-kap4",
    "Ein Kelvin (1 K) entspricht einer Temperaturdifferenz von:",
    ["1 °C", "273,15 °C", "−272,15 °C", "100 °C", "0 °C"],
    0,
    "Eine Temperaturdifferenz von 1 K = 1 °C (nur Nullpunkt verschieden: 0 K = −273,15 °C).",
    "leicht",
    ["Kelvin", "Celsius"]
  ),
  q(
    "ph-pool-132",
    "phys-kap5",
    "Welche Aussage zum elektrischen Feld im Inneren eines Leiters im Gleichgewicht ist richtig?",
    [
      "Das Feld ist maximal.",
      "Das Feld ist null.",
      "Das Feld zeigt immer in eine Richtung.",
      "Nur an der Oberfläche ist das Feld null.",
      "Das Feld hängt von der Ladung außen ab.",
    ],
    1,
    "Im Leiter (Gleichgewicht): E = 0, sonst würden Ladungen fließen. Faraday-Käfig.",
    "mittel",
    ["Leiter", "elektrisches Feld"]
  ),
  q(
    "ph-pool-133",
    "phys-kap7",
    "Bei der Paarbildung (Photon → Elektron-Positron-Paar) muss die Photonenenergie mindestens:",
    ["0,511 keV", "1,022 MeV", "0,511 MeV", "1,022 keV", "beliebig klein"],
    1,
    "Ruheenergie e⁻ (oder e⁺) ≈ 0,511 MeV. Paarbildung: mindestens 2·0,511 MeV = 1,022 MeV.",
    "schwer",
    ["Paarbildung", "Photon", "Elektron"]
  ),
  q(
    "ph-pool-134",
    "phys-kap3",
    "UV-Strahlung hat gegenüber sichtbarem Licht:",
    [
      "längere Wellenlänge",
      "kürzere Wellenlänge",
      "gleiche Wellenlänge",
      "keine höhere Energie",
      "nur in Sonnenlicht",
    ],
    1,
    "UV: kürzere Wellenlänge als sichtbar → höhere Photonenenergie E = h·f.",
    "leicht",
    ["UV", "elektromagnetisch"]
  ),
  q(
    "ph-pool-135",
    "phys-kap1",
    "Die Reibungskraft (Gleitreibung) zwischen zwei Festkörpern hängt typischerweise ab von:",
    [
      "der Geschwindigkeit (linear)",
      "der Normalkraft und der Materialpaarung (Reibungskoeffizient μ)",
      "nur der Kontaktfläche",
      "der Temperatur allein",
      "der Masse nicht",
    ],
    1,
    "F_R = μ·F_N (Gleitreibung). μ = Reibungskoeffizient, F_N = Normalkraft.",
    "mittel",
    ["Reibung", "Kraft"]
  ),
  q(
    "ph-pool-136",
    "phys-kap4",
    "Die Wärmeübertragung durch Konvektion erfolgt durch:",
    [
      "Photonen",
      "bewegte Materie (Strömung)",
      "nur Leitung",
      "nur Strahlung",
      "elektromagnetische Wellen",
    ],
    1,
    "Konvektion = Wärmetransport durch strömendes Medium (z.B. Heizung, Blutkreislauf).",
    "leicht",
    ["Konvektion", "Wärmeübertragung"]
  ),
  q(
    "ph-pool-137",
    "phys-kap5",
    "Ein Gegenstand steht vor einer Sammellinse im Abstand g = 2f. Wo liegt das Bild?",
    [
      "bei b = f",
      "bei b = 2f (gleich groß, reell)",
      "bei b = ∞",
      "bei b < f (virtuell)",
      "kein Bild",
    ],
    1,
    "g = 2f → b = 2f (Linsengleichung), Bild gleich groß, reell, umgekehrt.",
    "mittel",
    ["Sammellinse", "g=2f"]
  ),
  q(
    "ph-pool-138",
    "phys-kap1",
    "Welche Aussage zum Drehmoment M ist richtig?",
    [
      "M = F · s (Kraft mal Weg)",
      "M = F · r (Kraft mal Hebelarm, bei senkrechtem Abstand)",
      "M hat die Einheit Joule",
      "M ist ein Skalar",
      "M = F / r",
    ],
    1,
    "Drehmoment M = F·r (bei senkrechtem Abstand), Einheit N·m (nicht J als Energie hier konzeptionell).",
    "mittel",
    ["Drehmoment", "Mechanik"]
  ),
  q(
    "ph-pool-139",
    "phys-kap7",
    "Die Aktivität A einer Probe (Zerfälle pro Zeit) ist proportional zu:",
    [
      "der Halbwertszeit",
      "der noch vorhandenen Anzahl N der Kerne",
      "der Masse nicht",
      "B ist richtig",
      "der Energie der Strahlung",
    ],
    3,
    "A = λ·N (Aktivität = Zerfallskonstante · Anzahl Kerne). A nimmt mit N ab.",
    "mittel",
    ["Aktivität", "Radioaktivität"]
  ),
  q(
    "ph-pool-140",
    "phys-kap3",
    "Der Mensch hört Frequenzen etwa im Bereich:",
    ["1–10 Hz", "20 Hz – 20 kHz", "20–200 Hz", "1–100 kHz", "nur unter 1 kHz"],
    1,
    "Hörbereich ca. 20 Hz bis 20 kHz (altersabhängig).",
    "leicht",
    ["Schall", "Hören", "Frequenz"]
  ),
  q(
    "ph-pool-141",
    "phys-kap5",
    "Die gespeicherte Energie W in einem Kondensator der Kapazität C bei Spannung U ist:",
    ["W = C · U", "W = (1/2) · C · U²", "W = Q · U", "W = C / U²", "W = U / C"],
    1,
    "W = (1/2)·C·U² (Energie im elektrischen Feld).",
    "mittel",
    ["Kondensator", "Energie"]
  ),
  q(
    "ph-pool-142",
    "phys-kap1",
    "Ein Körper mit 3 kg hat eine kinetische Energie von 150 J. Seine Geschwindigkeit (Betrag) ist:",
    ["10 m/s", "50 m/s", "5 m/s", "√50 m/s", "100 m/s"],
    0,
    "E_kin = (1/2)mv² → v = √(2E/m) = √(300/3) = √100 = 10 m/s.",
    "mittel",
    ["kinetische Energie", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-143",
    "phys-kap4",
    "Der zweite Hauptsatz der Thermodynamik lässt sich formulieren als:",
    [
      "Energie ist erhalten.",
      "Es gibt kein Perpetuum mobile zweiter Art (kein Prozess, der nur Wärme von kalt nach warm überführt).",
      "Am absoluten Nullpunkt ist die Entropie null.",
      "Wärme ist keine Energie.",
      "Temperatur ist konstant.",
    ],
    1,
    "2. Hauptsatz: Entropie nimmt zu; kein Prozess, der nur Wärme von kalt nach warm bringt ohne andere Änderung.",
    "mittel",
    ["2. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-144",
    "phys-kap5",
    "Zwei gleiche positive Ladungen q im Abstand r:",
    [
      "ziehen sich an.",
      "stoßen sich ab.",
      "üben keine Kraft aus.",
      "neutralisieren sich.",
      "erzeugen nur Magnetfelder.",
    ],
    1,
    "Coulomb: gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an.",
    "leicht",
    ["Coulomb", "Ladung"]
  ),
  q(
    "ph-pool-145",
    "phys-kap3",
    "Die Wellenlänge von Röntgenstrahlung liegt typischerweise im Bereich:",
    ["mm", "μm", "nm (z.B. 0,01–10 nm)", "m", "km"],
    2,
    "Röntgen: λ etwa 0,01–10 nm. Sichtbar: 380–750 nm.",
    "mittel",
    ["Röntgen", "Wellenlänge"]
  ),
  q(
    "ph-pool-146",
    "phys-kap1",
    "Die Zentripetalbeschleunigung bei einer Kreisbewegung mit Radius r und Geschwindigkeit v beträgt:",
    ["v / r", "v² / r", "v · r", "v² · r", "r / v"],
    1,
    "a_zentripetal = v²/r (zum Mittelpunkt gerichtet).",
    "mittel",
    ["Zentripetalbeschleunigung", "Kreisbewegung"]
  ),
  q(
    "ph-pool-147",
    "phys-kap7",
    "Ein Radionuklid hat 10⁶ Kerne. Nach einer Halbwertszeit sind noch etwa … Kerne vorhanden.",
    ["10⁶", "5·10⁵", "10⁵", "0", "2·10⁶"],
    1,
    "Nach 1 T½: N = N₀/2 = 5·10⁵.",
    "leicht",
    ["Halbwertszeit", "Zerfall"]
  ),
  q(
    "ph-pool-148",
    "phys-kap5",
    "Bei einer Zerstreuungslinse (Konkavlinse) ist die Brennweite f:",
    ["positiv", "negativ", "null", "unendlich", "gleich der Gegenstandsweite"],
    1,
    "Zerstreuungslinse: f < 0 (virtuelle Brennweite). Sammellinse: f > 0.",
    "mittel",
    ["Zerstreuungslinse", "Brennweite"]
  ),
  q(
    "ph-pool-149",
    "phys-kap4",
    "Die Wärmestrahlung (thermische Strahlung) ist:",
    [
      "nur in Festkörpern möglich",
      "elektromagnetische Strahlung, die jeder Körper abgibt",
      "nur bei hohen Temperaturen",
      "keine Energieübertragung",
      "nur Infrarot",
    ],
    1,
    "Jeder Körper emittiert Wärmestrahlung (elektromagnetisch, typisch IR bei Alltagstemperaturen).",
    "mittel",
    ["Wärmestrahlung", "Strahlung"]
  ),
  q(
    "ph-pool-150",
    "phys-kap1",
    "Ein Flaschenzug mit 4 tragenden Seilen reduziert die erforderliche Zugkraft F (bei gleicher Last G) auf:",
    ["F = G", "F = G/2", "F = G/4", "F = 4G", "F = G/8"],
    2,
    "n tragende Seile → F = G/n. 4 Seile → F = G/4.",
    "mittel",
    ["Flaschenzug", "Kraft", "Mechanik"]
  ),
];
