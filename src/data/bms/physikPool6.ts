/**
 * Physik-Pool Teil 6 — Fragen 251–300 (MedAT Typ K, Single Choice).
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

export const physikPool6: Question[] = [
  q(
    "ph-pool-251",
    "phys-kap1",
    "Welche Aussage zu SI-Präfixen ist richtig?",
    ["k = 1000", "m = 10⁻³", "μ = 10⁻⁶", "Alle A–C sind richtig", "M = 10⁶ nur in Europa"],
    3,
    "k=10³, m=10⁻³, μ=10⁻⁶, M=10⁶ (international).",
    "leicht",
    ["Präfixe", "SI"]
  ),
  q(
    "ph-pool-252",
    "phys-kap5",
    "Die elektrische Arbeit W bei Spannung U und transportierter Ladung Q ist:",
    ["W = U / Q", "W = U · Q", "W = Q / U", "W = U + Q", "W = I · t"],
    1,
    "W = U·Q (Arbeit = Spannung mal Ladung); auch W = P·t = U·I·t.",
    "leicht",
    ["elektrische Arbeit", "Spannung"]
  ),
  q(
    "ph-pool-253",
    "phys-kap3",
    "Ein Ton mit 1000 Hz hat die Wellenlänge in Luft (c ≈ 340 m/s):",
    ["340 m", "0,34 m", "3,4 m", "34 m", "3400 m"],
    1,
    "λ = c/f = 340/1000 = 0,34 m.",
    "mittel",
    ["Wellenlänge", "Schall"]
  ),
  q(
    "ph-pool-254",
    "phys-kap4",
    "Wärme Q und Arbeit W haben dieselbe Einheit:",
    [
      "falsch",
      "richtig (beide Joule)",
      "nur bei konstantem Druck",
      "nur bei konstantem Volumen",
      "nur in Kalorien",
    ],
    1,
    "Q und W in Joule (J); 1. Hauptsatz: ΔU = Q + W.",
    "leicht",
    ["Wärme", "Arbeit", "Joule"]
  ),
  q(
    "ph-pool-255",
    "phys-kap7",
    "Welcher Zerfall erhöht die Ordnungszahl Z um 1?",
    ["Alpha", "Beta-Minus", "Beta-Plus", "Gamma", "Neutronenemission"],
    1,
    "Beta-Minus: n → p + e⁻ + ν̄; Z nimmt um 1 zu.",
    "mittel",
    ["Beta-Minus", "Ordnungszahl"]
  ),
  q(
    "ph-pool-256",
    "phys-kap1",
    "Die Geschwindigkeit v (Betrag) bei gleichmäßig beschleunigter Bewegung aus der Ruhe: v = a·t. Nach t = 4 s bei a = 2,5 m/s²: v = ?",
    ["10 m/s", "6,5 m/s", "1,6 m/s", "20 m/s", "5 m/s"],
    0,
    "v = a·t = 2,5·4 = 10 m/s.",
    "leicht",
    ["Beschleunigung", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-257",
    "phys-kap5",
    "Ein 100-W-Gerät läuft 2 Stunden. Verbrauchte Energie (in kWh)?",
    ["200 kWh", "0,2 kWh", "50 kWh", "2 kWh", "100 kWh"],
    1,
    "W = P·t = 100 W · 2 h = 200 Wh = 0,2 kWh.",
    "leicht",
    ["Energie", "kWh", "Leistung"]
  ),
  q(
    "ph-pool-258",
    "phys-kap3",
    "Bei der Beugung am Einzelspalt: Je … die Spaltbreite, desto … die Beugungsfigur.",
    [
      "größer, breiter",
      "kleiner, breiter",
      "größer, schärfer",
      "kleiner, schärfer",
      "gleich, gleich",
    ],
    1,
    "Schmalerer Spalt → stärkere Beugung (breitere Figur).",
    "mittel",
    ["Beugung", "Spalt"]
  ),
  q(
    "ph-pool-259",
    "phys-kap4",
    "Die mittlere kinetische Energie der Teilchen eines idealen Gases ist proportional zu:",
    ["dem Druck", "der Temperatur T", "dem Volumen", "der Dichte", "der Stoffmenge allein"],
    1,
    "E_kin ∝ T (T in Kelvin).",
    "mittel",
    ["ideales Gas", "kinetische Energie"]
  ),
  q(
    "ph-pool-260",
    "phys-kap1",
    "Ein Körper schwebt im Wasser. Dann ist seine Dichte … der Dichte von Wasser.",
    ["größer als", "gleich", "kleiner als", "unabhängig von", "doppelt so groß wie"],
    1,
    "Schweben: Auftrieb = Gewicht → Dichte Körper = Dichte Flüssigkeit.",
    "mittel",
    ["Auftrieb", "Dichte", "Schweben"]
  ),
  q(
    "ph-pool-261",
    "phys-kap7",
    "Die Compton-Wellenlängenänderung Δλ hängt ab von:",
    [
      "nur der einfallenden Wellenlänge",
      "dem Streuwinkel",
      "der Intensität",
      "der Temperatur",
      "dem Material nicht",
    ],
    1,
    "Compton: Δλ ∝ (1 − cos θ); θ = Streuwinkel.",
    "schwer",
    ["Compton", "Streuwinkel"]
  ),
  q(
    "ph-pool-262",
    "phys-kap5",
    "Ein Akku mit 3,7 V und 2000 mAh speichert etwa welche Energie (in Wh)?",
    ["7,4 Wh", "7400 Wh", "2000 Wh", "3,7 Wh", "2 Wh"],
    0,
    "W = U·Q = 3,7 V · 2 Ah = 7,4 Wh.",
    "mittel",
    ["Akku", "Energie", "Kapazität"]
  ),
  q(
    "ph-pool-263",
    "phys-kap1",
    "Der Druck in einer Flüssigkeit in der Tiefe h (Dichte ρ, g): p = p₀ + ρ·g·h. Bei doppelter Tiefe:",
    [
      "bleibt p gleich",
      "verdoppelt sich die Druckdifferenz zur Oberfläche",
      "halbiert sich p",
      "p wird null",
      "p = ρ",
    ],
    1,
    "Δp = ρ·g·h; h verdoppelt → Δp verdoppelt.",
    "mittel",
    ["Schweredruck", "Flüssigkeit"]
  ),
  q(
    "ph-pool-264",
    "phys-kap3",
    "Ein Objekt erscheint rot, weil es:",
    [
      "alle Wellenlängen reflektiert",
      "vor allem rot reflektiert und andere absorbiert",
      "nur rot emittiert",
      "transparent ist",
      "blau absorbiert und rot durchlässt (bei Transmission)",
    ],
    1,
    "Rot erscheint: vorwiegend rotes Licht reflektiert/transmittiert, andere absorbiert.",
    "leicht",
    ["Farbe", "Absorption"]
  ),
  q(
    "ph-pool-265",
    "phys-kap4",
    "Ein Kühlschrank entzieht dem Innenraum Wärme und gibt sie nach außen ab. Der 2. Hauptsatz:",
    [
      "wird verletzt",
      "wird nicht verletzt (unter Arbeitsaufwand)",
      "gilt nur außen",
      "gilt nur innen",
      "spielt keine Rolle",
    ],
    1,
    "Kühlschrank: Arbeit wird zugeführt, Wärme von kalt nach warm „gepumpt“ → 2. Hauptsatz erfüllt (abgeschlossenes System: Gesamtentropie nimmt zu).",
    "mittel",
    ["Kühlschrank", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-266",
    "phys-kap5",
    "Ein Widerstand wird heiß, wenn Strom fließt. Die umgesetzte Leistung wird als … abgegeben.",
    ["Ladung", "Spannung", "Wärme (Joulesche Wärme)", "Magnetfeld", "Licht nur"],
    2,
    "Joulesche Wärme: P = R·I² wird in Wärme umgesetzt.",
    "leicht",
    ["Joulesche Wärme", "Widerstand"]
  ),
  q(
    "ph-pool-267",
    "phys-kap1",
    "Ein 10-kg-Körper hängt an einer Feder und ruht. Die Federkraft (Betrag) ist (g ≈ 10 m/s²):",
    ["0 N", "10 N", "100 N", "1 N", "10 kg"],
    2,
    "Gleichgewicht: F_Feder = F_G = m·g = 100 N.",
    "leicht",
    ["Feder", "Kräftegleichgewicht"]
  ),
  q(
    "ph-pool-268",
    "phys-kap7",
    "PET (Positronen-Emissions-Tomographie) nutzt:",
    [
      "Alpha-Strahlung",
      "Positronen (e⁺) und deren Vernichtungsstrahlung (2×511 keV Gamma)",
      "nur Röntgen",
      "nur sichtbares Licht",
      "Neutronen",
    ],
    1,
    "PET: Beta-Plus-Emitter → Positronen → Annihilation e⁺+e⁻ → 2 Gamma-Quanten à 511 keV.",
    "mittel",
    ["PET", "Positron", "Medizin"]
  ),
  q(
    "ph-pool-269",
    "phys-kap3",
    "Der Schalldruckpegel L (in dB) ist definiert über das Verhältnis zum Referenzdruck. Verdopplung des Schalldrucks entspricht etwa … dB Zunahme.",
    ["0", "3", "6", "10", "20"],
    2,
    "Verdopplung des Drucks (Faktor 2) → +6 dB (weil 20·log₁₀(2) ≈ 6).",
    "mittel",
    ["Dezibel", "Schalldruck"]
  ),
  q(
    "ph-pool-270",
    "phys-kap5",
    "Ein Leiter wird erwärmt. Sein Widerstand (metallischer Leiter) in der Regel:",
    ["bleibt gleich", "steigt", "sinkt", "wird null", "verdoppelt sich immer"],
    1,
    "Metalle: R steigt mit T (positive Temperaturkoeffizient).",
    "mittel",
    ["Widerstand", "Temperatur"]
  ),
  q(
    "ph-pool-271",
    "phys-kap1",
    "Ein Boot wird mit 50 N Kraft 20 m gezogen. Verrichtete Arbeit?",
    ["2,5 J", "1000 J", "70 J", "100 J", "1000 N"],
    1,
    "W = F·s = 50·20 = 1000 J.",
    "leicht",
    ["Arbeit", "Kraft", "Weg"]
  ),
  q(
    "ph-pool-272",
    "phys-kap4",
    "Die Wärmeleitung in einem Stab ist proportional zur Querschnittsfläche A und zu ΔT/l. Sie hängt … von der Länge l ab.",
    ["nicht", "linear (∝ 1/l)", "quadratisch", "exponentiell", "logarithmisch"],
    1,
    "Wärmestrom ∝ A·ΔT/l; größere Länge → geringerer Strom.",
    "mittel",
    ["Wärmeleitung", "Wärmestrom"]
  ),
  q(
    "ph-pool-273",
    "phys-kap7",
    "Ein Kern mit 6 Protonen und 6 Neutronen hat die Massenzahl A:",
    ["6", "12", "18", "0", "6 Protonen"],
    1,
    "A = Protonen + Neutronen = 6 + 6 = 12 (Kohlenstoff-12).",
    "leicht",
    ["Massenzahl", "Kern"]
  ),
  q(
    "ph-pool-274",
    "phys-kap5",
    "Die magnetische Flussdichte B hat die Einheit:",
    ["Weber", "Tesla", "Henry", "Farad", "Coulomb"],
    1,
    "B in Tesla (T) = Wb/m².",
    "leicht",
    ["Tesla", "magnetische Flussdichte"]
  ),
  q(
    "ph-pool-275",
    "phys-kap1",
    "Ein Satellit umkreist die Erde. Die auf ihn wirkende Zentripetalkraft wird von … geliefert.",
    [
      "der Trägheit",
      "der Gravitation (Gewichtskraft)",
      "dem Magnetfeld",
      "der Reibung",
      "keiner Kraft",
    ],
    1,
    "Kreisbahn: Zentripetalkraft = Gravitationskraft (Gewichtskraft im Orbit).",
    "mittel",
    ["Satellit", "Zentripetalkraft", "Gravitation"]
  ),
  q(
    "ph-pool-276",
    "phys-kap3",
    "Bei Totalreflexion ist der Einfallswinkel … dem Grenzwinkel.",
    ["kleiner als", "größer oder gleich", "immer gleich", "null", "90°"],
    1,
    "Totalreflexion: α ≥ α_grenz (Grenzwinkel).",
    "mittel",
    ["Totalreflexion", "Grenzwinkel"]
  ),
  q(
    "ph-pool-277",
    "phys-kap4",
    "Die Zustandsgleichung des idealen Gases lautet: p·V = n·R·T. Bei konstantem n und T:",
    [
      "p und V sind proportional",
      "p und V sind umgekehrt proportional",
      "p = V",
      "p + V = const",
      "p − V = const",
    ],
    1,
    "p·V = const (Boyle-Mariotte) bei konstantem n, T.",
    "leicht",
    ["ideales Gas", "Boyle-Mariotte"]
  ),
  q(
    "ph-pool-278",
    "phys-kap5",
    "Ein Verbraucher hat den Widerstand 50 Ω und liegt an 100 V. Leistungsaufnahme?",
    ["2 W", "200 W", "0,5 W", "5000 W", "50 W"],
    1,
    "P = U²/R = 100²/50 = 200 W (oder I = 2 A, P = U·I = 200 W).",
    "leicht",
    ["Leistung", "Widerstand"]
  ),
  q(
    "ph-pool-279",
    "phys-kap1",
    "Ein 0,5-kg-Ball wird mit 8 m/s horizontal geworfen. Impuls (Betrag)?",
    ["4 kg·m/s", "8 kg·m/s", "0,5 kg·m/s", "16 kg·m/s", "4 N"],
    0,
    "p = m·v = 0,5·8 = 4 kg·m/s.",
    "leicht",
    ["Impuls", "Bewegung"]
  ),
  q(
    "ph-pool-280",
    "phys-kap7",
    "Die charakteristische Röntgenstrahlung entsteht durch:",
    [
      "Kernzerfall",
      "Übergänge von Elektronen zwischen Schalen (z.B. K-, L-Schale)",
      "Bremsstrahlung nur",
      "Compton-Streuung",
      "Paarbildung",
    ],
    1,
    "Charakteristische Röntgenstrahlung: Elektronenübergänge in der Hülle (Kα, Kβ etc.).",
    "mittel",
    ["Röntgen", "charakteristische Strahlung"]
  ),
  q(
    "ph-pool-281",
    "phys-kap3",
    "Ein Laser erzeugt Licht mit:",
    [
      "vielen Wellenlängen",
      "sehr geringer Kohärenz",
      "hoher Kohärenz und oft schmalem Frequenzbereich",
      "nur im IR",
      "nur gepulst",
    ],
    2,
    "Laser: kohärent, oft monochromatisch (enger Frequenzbereich), gebündelt.",
    "mittel",
    ["Laser", "Kohärenz"]
  ),
  q(
    "ph-pool-282",
    "phys-kap5",
    "Die Induktivität L einer Spule hat die Einheit:",
    ["Ohm", "Farad", "Henry", "Tesla", "Weber"],
    2,
    "Induktivität L in Henry (H) = V·s/A.",
    "mittel",
    ["Induktivität", "Henry"]
  ),
  q(
    "ph-pool-283",
    "phys-kap1",
    "Ein Fahrzeug fährt 30 km mit 60 km/h. Dauer?",
    ["0,5 h", "2 h", "30 min", "A und C sind richtig", "90 min"],
    3,
    "t = s/v = 30/60 = 0,5 h = 30 min.",
    "leicht",
    ["Geschwindigkeit", "Zeit", "Weg"]
  ),
  q(
    "ph-pool-284",
    "phys-kap4",
    "Der 0. Hauptsatz der Thermodynamik betrifft:",
    [
      "Energieerhaltung",
      "Temperaturgleichgewicht (wenn A mit B und B mit C im Gleichgewicht, dann A mit C)",
      "Entropie",
      "Druck",
      "Volumen",
    ],
    1,
    "0. Hauptsatz: Temperatur als Zustandsgröße; transitive Gleichgewichtsbedingung.",
    "schwer",
    ["0. Hauptsatz", "Temperatur"]
  ),
  q(
    "ph-pool-285",
    "phys-kap7",
    "Ein Photon mit Wellenlänge 600 nm hat die Energie (h·c ≈ 1240 eV·nm):",
    ["1240 eV", "ca. 2,07 eV", "600 eV", "0,6 eV", "1240/600 keV"],
    1,
    "E = h·c/λ ≈ 1240/600 eV ≈ 2,07 eV.",
    "mittel",
    ["Photon", "Energie", "Wellenlänge"]
  ),
  q(
    "ph-pool-286",
    "phys-kap5",
    "Ein Kondensator wird von 0 auf U aufgeladen. Die dabei gespeicherte Energie ist:",
    ["C·U", "C·U²", "(1/2)·C·U²", "Q·U ohne Faktor 1/2", "C/U²"],
    2,
    "W = (1/2)·C·U² = (1/2)·Q·U (bei Q = C·U).",
    "leicht",
    ["Kondensator", "Energie"]
  ),
  q(
    "ph-pool-287",
    "phys-kap1",
    "Ein Körper mit 4 kg Masse wird mit 5 m/s² beschleunigt. Kraft?",
    ["20 N", "9 N", "1,25 N", "0,8 N", "4 N"],
    0,
    "F = m·a = 4·5 = 20 N.",
    "leicht",
    ["Kraft", "Beschleunigung"]
  ),
  q(
    "ph-pool-288",
    "phys-kap3",
    "Die Schallintensität in einer Entfernung r von einer punktförmigen Quelle fällt ab mit:",
    ["1/r", "1/r²", "1/r³", "r", "r²"],
    1,
    "Kugelwelle: Intensität I ∝ 1/r².",
    "mittel",
    ["Schallintensität", "Abstandsgesetz"]
  ),
  q(
    "ph-pool-289",
    "phys-kap4",
    "Eine Wärmepumpe heizt ein Haus. Sie entzieht der Umgebung Wärme und gibt sie (mit Antriebsarbeit) an das Haus ab. Der Wirkungsgrad (COP) kann … 1 sein.",
    ["kleiner als", "größer als", "nur gleich", "nie", "immer"],
    1,
    "COP = Q_ab/W_zu > 1 möglich (Wärmepumpe „vervielfacht“ die Antriebsarbeit).",
    "mittel",
    ["Wärmepumpe", "COP"]
  ),
  q(
    "ph-pool-290",
    "phys-kap5",
    "Ein 2-Ω- und ein 3-Ω-Widerstand liegen parallel. Ersatzwiderstand?",
    ["5 Ω", "1,2 Ω", "6 Ω", "2,5 Ω", "1 Ω"],
    1,
    "1/R = 1/2 + 1/3 = 5/6 → R = 6/5 = 1,2 Ω.",
    "mittel",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-291",
    "phys-kap1",
    "Ein Stein wird senkrecht nach oben mit 15 m/s geworfen. Steigzeit (g ≈ 10 m/s²)?",
    ["1 s", "1,5 s", "2 s", "0,75 s", "3 s"],
    1,
    "v = v₀ − g·t; am höchsten Punkt v = 0 → t = v₀/g = 15/10 = 1,5 s.",
    "mittel",
    ["Wurf", "Steigzeit"]
  ),
  q(
    "ph-pool-292",
    "phys-kap7",
    "Die Absorptionsdosis (Energiedosis) D = E/m hat die Einheit:",
    ["J", "J/kg = Gray", "kg/J", "Sievert", "Becquerel"],
    1,
    "D = E/m → J/kg = Gray (Gy).",
    "leicht",
    ["Gray", "Energiedosis"]
  ),
  q(
    "ph-pool-293",
    "phys-kap3",
    "Ein Beugungsgitter mit 500 Linien/mm hat die Gitterkonstante:",
    ["500 mm", "2 μm", "1/500 mm = 2 μm", "500 m", "0,5 mm"],
    2,
    "d = 1/(500 mm⁻¹) = 1/500 mm = 2·10⁻⁶ m = 2 μm.",
    "mittel",
    ["Beugungsgitter", "Gitterkonstante"]
  ),
  q(
    "ph-pool-294",
    "phys-kap5",
    "Die Phasenverschiebung zwischen Strom und Spannung bei einem idealen Kondensator im Wechselstromkreis beträgt:",
    ["0°", "90° (Strom eilt Spannung voraus)", "180°", "−90°", "45°"],
    1,
    "Idealer Kondensator: Strom eilt der Spannung um 90° voraus (Phase π/2).",
    "schwer",
    ["Wechselstrom", "Kondensator", "Phase"]
  ),
  q(
    "ph-pool-295",
    "phys-kap1",
    "Ein 1-kg-Körper hat in 10 m Höhe (g ≈ 10 m/s²) die potentielle Energie:",
    ["10 J", "100 J", "1 J", "1000 J", "0 J"],
    1,
    "E_pot = m·g·h = 1·10·10 = 100 J.",
    "leicht",
    ["potentielle Energie", "Höhe"]
  ),
  q(
    "ph-pool-296",
    "phys-kap4",
    "Die kritische Temperatur eines Gases ist die Temperatur, unter der es durch Druck … verflüssigt werden kann.",
    ["nie", "nicht", "noch", "immer", "nur oberhalb"],
    2,
    "Unter der kritischen Temperatur kann das Gas durch Druck verflüssigt werden.",
    "mittel",
    ["kritische Temperatur", "Verflüssigung"]
  ),
  q(
    "ph-pool-297",
    "phys-kap7",
    "Paarbildung (Photon → e⁺ + e⁻) erfordert eine Mindestenergie von etwa:",
    ["0,511 MeV", "1,022 MeV", "2,044 MeV", "0,511 keV", "1 keV"],
    1,
    "2·m_e·c² ≈ 1,022 MeV.",
    "mittel",
    ["Paarbildung", "Ruheenergie"]
  ),
  q(
    "ph-pool-298",
    "phys-kap5",
    "Ein Transformator hat N₁ = 100, N₂ = 400. Primärspannung 50 V. Sekundärspannung (idealer Trafo)?",
    ["12,5 V", "200 V", "50 V", "400 V", "100 V"],
    1,
    "U₂/U₁ = N₂/N₁ → U₂ = 50·(400/100) = 200 V.",
    "mittel",
    ["Transformator", "Spannung"]
  ),
  q(
    "ph-pool-299",
    "phys-kap1",
    "Ein Körper gleitet reibungsfrei eine schiefe Ebene hinab. Seine Beschleunigung (Betrag) ist:",
    ["g", "g·sin(α) (α = Neigungswinkel)", "g·cos(α)", "g·tan(α)", "null"],
    1,
    "a = g·sin(α) (Komponente von g entlang der Ebene).",
    "mittel",
    ["schiefe Ebene", "Beschleunigung"]
  ),
  q(
    "ph-pool-300",
    "phys-kap3",
    "Die Frequenz einer Welle bleibt beim Übergang in ein anderes Medium … (bei Brechung).",
    ["nicht erhalten", "erhalten", "verdoppelt", "halbiert", "null"],
    1,
    "Frequenz f bleibt gleich; Wellenlänge und Ausbreitungsgeschwindigkeit ändern sich.",
    "mittel",
    ["Brechung", "Frequenz"]
  ),
];
