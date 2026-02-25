/**
 * Physik-Pool Teil 5 — Fragen 201–250 (MedAT Typ K, Single Choice).
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

export const physikPool5: Question[] = [
  q(
    "ph-pool-201",
    "phys-kap1",
    "Welche Basiseinheit fehlt: m, kg, s, A, K, mol, …?",
    ["N", "cd", "J", "Pa", "W"],
    1,
    "Die siebte SI-Basisgröße ist die Lichtstärke mit Einheit Candela (cd).",
    "leicht",
    ["SI", "Candela"]
  ),
  q(
    "ph-pool-202",
    "phys-kap5",
    "Bei konstantem Widerstand R: Verdoppelt man die Spannung U, dann verdoppelt sich der Strom I.",
    ["falsch", "richtig", "nur bei Wechselspannung", "nur bei Gleichspannung", "I wird halbiert"],
    1,
    "U = R·I → I = U/R; U verdoppelt → I verdoppelt.",
    "leicht",
    ["Ohmsches Gesetz"]
  ),
  q(
    "ph-pool-203",
    "phys-kap3",
    "Stehende Welle auf einer Saite: Der Abstand zweier benachbarter Knoten ist:",
    ["λ", "λ/2", "λ/4", "2λ", "f"],
    1,
    "Knotenabstand = λ/2 (eine halbe Wellenlänge).",
    "mittel",
    ["stehende Welle", "Knoten"]
  ),
  q(
    "ph-pool-204",
    "phys-kap4",
    "Die allgemeine Gaskonstante R hat etwa den Wert:",
    [
      "8,31 J/(mol·K)",
      "0,082 L·atm/(mol·K)",
      "8,31 J/mol",
      "A und B sind beide gebräuchlich",
      "1 J/K",
    ],
    3,
    "R ≈ 8,314 J/(mol·K) bzw. 0,082 L·atm/(mol·K).",
    "mittel",
    ["Gaskonstante", "R"]
  ),
  q(
    "ph-pool-205",
    "phys-kap1",
    "Welche Aussage zu Kräften ist falsch?",
    [
      "Kräfte haben Betrag und Richtung (Vektor).",
      "Kräfte können sich gegenseitig aufheben.",
      "Die Einheit der Kraft ist Newton.",
      "Kraft = Masse · Beschleunigung gilt nur im Vakuum.",
      "F = m·a gilt in Inertialsystemen.",
    ],
    3,
    "F = m·a gilt in Inertialsystemen unabhängig vom Medium (nicht nur im Vakuum).",
    "mittel",
    ["Kraft", "Newton"]
  ),
  q(
    "ph-pool-206",
    "phys-kap7",
    "Welche Strahlung hat die höchste Photonenenergie (bei typischen Quellen)?",
    ["Infrarot", "Sichtbar", "UV", "Röntgen", "Gamma"],
    4,
    "Gamma-Quanten haben typisch die höchsten Energien (keV–MeV).",
    "leicht",
    ["Photonenenergie", "EM-Spektrum"]
  ),
  q(
    "ph-pool-207",
    "phys-kap5",
    "Einheit der Kapazität:",
    ["C (Coulomb)", "F (Farad)", "V (Volt)", "Ω (Ohm)", "S (Siemens)"],
    1,
    "Kapazität C in Farad (F) = C/V.",
    "leicht",
    ["Kapazität", "Farad"]
  ),
  q(
    "ph-pool-208",
    "phys-kap1",
    "Ein Körper bleibt in Ruhe. Was gilt für die auf ihn wirkenden Kräfte?",
    [
      "Es wirkt keine Kraft.",
      "Die vektorielle Summe aller Kräfte ist null.",
      "Nur die Gewichtskraft wirkt.",
      "Reibung wirkt nicht.",
      "Die Kräfte sind alle gleich.",
    ],
    1,
    "Gleichgewicht: Σ F = 0 (Kräftegleichgewicht).",
    "leicht",
    ["Kräftegleichgewicht", "Ruhe"]
  ),
  q(
    "ph-pool-209",
    "phys-kap3",
    "Doppler-Effekt bei Schall: Bewegt sich die Quelle auf den Beobachter zu, dann:",
    [
      "wird die Frequenz niedriger wahrgenommen",
      "wird die Frequenz höher wahrgenommen",
      "ändert sich nichts",
      "verschwindet der Schall",
      "wird die Wellenlänge größer",
    ],
    1,
    "Quelle auf Beobachter zu → höhere wahrgenommene Frequenz (höherer Ton).",
    "mittel",
    ["Doppler", "Schall"]
  ),
  q(
    "ph-pool-210",
    "phys-kap5",
    "Die Stromstärke I in einer Reihenschaltung ist überall:",
    [
      "verschieden",
      "gleich",
      "null",
      "proportional zur Spannung an jedem Widerstand",
      "umgekehrt proportional zu R",
    ],
    1,
    "Reihe: gleicher Strom I durch alle Bauteile.",
    "leicht",
    ["Reihenschaltung", "Strom"]
  ),
  q(
    "ph-pool-211",
    "phys-kap4",
    "Adiabatische Zustandsänderung: Es wird … Wärme ausgetauscht.",
    ["viel", "keine (Q = 0)", "nur bei Expansion", "nur bei Kompression", "unendlich viel"],
    1,
    "Adiabatisch: kein Wärmeaustausch mit der Umgebung (Q = 0).",
    "mittel",
    ["adiabatisch", "Thermodynamik"]
  ),
  q(
    "ph-pool-212",
    "phys-kap7",
    "Ein Isotop hat dieselbe … wie ein anderes Isotop desselben Elements.",
    ["Massenzahl A", "Neutronenzahl N", "Ordnungszahl Z", "Masse", "Bindungsenergie"],
    2,
    "Isotope: gleiche Protonenzahl Z (gleiches Element), verschiedene Neutronenzahl N → verschiedene A.",
    "mittel",
    ["Isotop", "Ordnungszahl"]
  ),
  q(
    "ph-pool-213",
    "phys-kap1",
    "Die Zentripetalkraft bei Kreisbewegung zeigt:",
    [
      "tangential",
      "radial nach außen",
      "radial nach innen (zum Zentrum)",
      "in Bewegungsrichtung",
      "gar nicht",
    ],
    2,
    "Zentripetalkraft wirkt zum Kreismittelpunkt (Zentrum).",
    "leicht",
    ["Zentripetalkraft", "Kreisbewegung"]
  ),
  q(
    "ph-pool-214",
    "phys-kap5",
    "Ein Metall hat einen niedrigen elektrischen Widerstand. Es ist ein guter …",
    ["Isolator", "Leiter", "Halbleiter", "Supraleiter bei Raumtemperatur", "Dielektrikum"],
    1,
    "Niedriger Widerstand → guter Leiter (Metalle).",
    "leicht",
    ["Leiter", "Widerstand"]
  ),
  q(
    "ph-pool-215",
    "phys-kap3",
    "Die Intensität einer ebenen Welle ist proportional zu:",
    ["der Frequenz", "dem Quadrat der Amplitude", "der Wellenlänge", "der Periode", "1/f"],
    1,
    "Intensität I ∝ A² (Amplitudenquadrat).",
    "mittel",
    ["Intensität", "Welle"]
  ),
  q(
    "ph-pool-216",
    "phys-kap1",
    "Ein 50-kg-Läufer legt 100 m in 10 s zurück. Seine Durchschnittsgeschwindigkeit (in m/s):",
    ["5", "10", "50", "0,5", "20"],
    1,
    "v = s/t = 100/10 = 10 m/s.",
    "leicht",
    ["Geschwindigkeit", "Durchschnitt"]
  ),
  q(
    "ph-pool-217",
    "phys-kap4",
    "Die Entropie S eines abgeschlossenen Systems kann bei einem Prozess:",
    [
      "nur abnehmen",
      "nur zunehmen oder konstant bleiben",
      "beliebig abnehmen",
      "nur bei Wärmezufuhr zunehmen",
      "null werden",
    ],
    1,
    "2. Hauptsatz: ΔS ≥ 0 in abgeschlossenen Systemen.",
    "mittel",
    ["Entropie", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-218",
    "phys-kap5",
    "Magnetische Feldlinien (statisches Feld):",
    [
      "beginnen und enden an Polen",
      "sind immer geschlossen (keine Quellen)",
      "kreuzen sich",
      "sind identisch mit elektrischen Feldlinien",
      "existieren nicht",
    ],
    1,
    "Magnetfeld: Feldlinien geschlossen (keine magnetischen Monopole).",
    "mittel",
    ["Magnetfeld", "Feldlinien"]
  ),
  q(
    "ph-pool-219",
    "phys-kap7",
    "Die Strahlenschutz-Einheit Sievert (Sv) berücksichtigt:",
    [
      "nur die absorbierte Energie",
      "die biologische Wirksamkeit (Gewebefaktor) der Strahlung",
      "nur die Aktivität",
      "nur die Dosisrate",
      "die Halbwertszeit",
    ],
    1,
    "Sievert = Äquivalentdosis = Energiedosis (Gray) × Bewertungsfaktor (z.B. α: 20).",
    "mittel",
    ["Sievert", "Strahlenschutz"]
  ),
  q(
    "ph-pool-220",
    "phys-kap1",
    "Ein Flugzeug fliegt mit 900 km/h. Wie viele m/s sind das?",
    ["250 m/s", "900 m/s", "90 m/s", "25 m/s", "150 m/s"],
    0,
    "900 km/h = 900/3,6 m/s = 250 m/s.",
    "leicht",
    ["Geschwindigkeit", "Umrechnung"]
  ),
  q(
    "ph-pool-221",
    "phys-kap3",
    "Resonanz tritt auf, wenn:",
    [
      "die Frequenz der Anregung gleich der Eigenfrequenz des Systems ist",
      "immer bei Schall",
      "nur in Flüssigkeiten",
      "die Amplitude null ist",
      "keine Dämpfung vorliegt",
    ],
    0,
    "Resonanz: Anregungsfrequenz = Eigenfrequenz → maximale Amplitude.",
    "mittel",
    ["Resonanz", "Schwingung"]
  ),
  q(
    "ph-pool-222",
    "phys-kap5",
    "Ein 5-Ω- und ein 15-Ω-Widerstand liegen in Reihe an 20 V. Spannung am 5-Ω-Widerstand?",
    ["5 V", "20 V", "15 V", "10 V", "2,5 V"],
    0,
    "I = U/R_ers = 20/20 = 1 A. U_5 = R·I = 5·1 = 5 V.",
    "mittel",
    ["Reihenschaltung", "Spannungsteiler"]
  ),
  q(
    "ph-pool-223",
    "phys-kap4",
    "Wasser hat bei 4 °C seine … Dichte.",
    ["minimale", "maximale", "normale", "kritische", "konstante"],
    1,
    "Anomalie des Wassers: Dichte maximum bei ca. 4 °C (flüssig).",
    "mittel",
    ["Wasser", "Dichte", "Anomalie"]
  ),
  q(
    "ph-pool-224",
    "phys-kap1",
    "Elastischer Stoß: Erhaltungsgrößen sind:",
    [
      "nur Impuls",
      "Impuls und kinetische Energie",
      "nur Energie",
      "nur Masse",
      "nur Geschwindigkeit",
    ],
    1,
    "Elastisch: Impuls und kinetische Energie erhalten. Unelastisch: nur Impuls.",
    "mittel",
    ["elastischer Stoß", "Erhaltung"]
  ),
  q(
    "ph-pool-225",
    "phys-kap7",
    "Ein Neutron hat ungefähr die Masse von:",
    ["einem Elektron", "einem Proton", "einem Alpha-Teilchen", "einem Photon", "null"],
    1,
    "m_Neutron ≈ m_Proton ≈ 1 u. Elektron ca. 1/1840 u.",
    "leicht",
    ["Neutron", "Masse"]
  ),
  q(
    "ph-pool-226",
    "phys-kap5",
    "Die Linsenstärke D (in dpt) ist definiert als:",
    ["D = f", "D = 1/f (f in m)", "D = f²", "D = 2f", "D = f/2"],
    1,
    "D = 1/f; f in Meter → D in Dioptrien (dpt).",
    "mittel",
    ["Linsenstärke", "Dioptrie"]
  ),
  q(
    "ph-pool-227",
    "phys-kap1",
    "Rollreibung ist typischerweise … Gleitreibung.",
    ["größer als", "kleiner als", "gleich", "unabhängig von", "doppelt so groß wie"],
    1,
    "Rollreibung < Gleitreibung (Rollen statt Gleiten).",
    "mittel",
    ["Rollreibung", "Reibung"]
  ),
  q(
    "ph-pool-228",
    "phys-kap3",
    "Ein Schall mit 440 Hz hat die Periode (in s):",
    ["440", "1/440", "220", "880", "0,44"],
    1,
    "T = 1/f = 1/440 s ≈ 2,27 ms.",
    "leicht",
    ["Periode", "Schall"]
  ),
  q(
    "ph-pool-229",
    "phys-kap4",
    "Der Wirkungsgrad η einer Wärmekraftmaschine ist definiert als:",
    [
      "zugeführte Wärme / abgegebene Wärme",
      "nutzbare Arbeit / zugeführte Wärme",
      "abgegebene Wärme / zugeführte Wärme",
      "Temperaturdifferenz",
      "immer 1",
    ],
    1,
    "η = W_nutz / Q_zugeführt (< 1 nach 2. Hauptsatz).",
    "mittel",
    ["Wirkungsgrad", "Wärmekraftmaschine"]
  ),
  q(
    "ph-pool-230",
    "phys-kap5",
    "Ein Transformator hat Primär- und Sekundärspannung U₁, U₂ und Windungszahlen N₁, N₂. Es gilt:",
    ["U₁/U₂ = N₁/N₂", "U₁/U₂ = N₂/N₁", "U₁ = U₂ immer", "U₁·U₂ = N₁·N₂", "U₁ − U₂ = N₁ − N₂"],
    0,
    "U₁/U₂ = N₁/N₂ (idealer Trafo ohne Verluste).",
    "mittel",
    ["Transformator", "Spannung"]
  ),
  q(
    "ph-pool-231",
    "phys-kap1",
    "Die Erdbeschleunigung g ist näherungsweise:",
    ["1 m/s²", "5 m/s²", "10 m/s²", "20 m/s²", "100 m/s²"],
    2,
    "g ≈ 9,81 m/s², oft 10 m/s² gerundet.",
    "leicht",
    ["g", "Fallbeschleunigung"]
  ),
  q(
    "ph-pool-232",
    "phys-kap7",
    "Positronen entstehen u.a. bei:",
    ["Alpha-Zerfall", "Beta-Minus-Zerfall", "Beta-Plus-Zerfall", "Gamma-Zerfall", "Kernfusion"],
    2,
    "Beta-Plus: p → n + e⁺ + ν; Positron = Antiteilchen des Elektrons.",
    "mittel",
    ["Positron", "Beta-Plus"]
  ),
  q(
    "ph-pool-233",
    "phys-kap3",
    "Ein grünes Licht hat etwa die Wellenlänge 500 nm. Frequenz (c ≈ 3·10⁸ m/s)?",
    ["6·10¹⁴ Hz", "6·10⁵ Hz", "1,5·10¹⁵ Hz", "500 Hz", "3·10⁸ Hz"],
    0,
    "f = c/λ = 3·10⁸ / (500·10⁻⁹) = 6·10¹⁴ Hz.",
    "mittel",
    ["Frequenz", "Licht", "c=f·λ"]
  ),
  q(
    "ph-pool-234",
    "phys-kap5",
    "Ein Verbraucher nimmt bei 230 V eine Leistung von 460 W auf. Stromstärke?",
    ["2 A", "0,5 A", "230 A", "460 A", "105 A"],
    0,
    "P = U·I → I = P/U = 460/230 = 2 A.",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-235",
    "phys-kap1",
    "Ein Körper der Masse 2 kg hat eine kinetische Energie von 36 J. Geschwindigkeit (in m/s)?",
    ["6", "18", "3", "12", "36"],
    0,
    "E = (1/2)mv² → v = √(2E/m) = √(72/2) = 6 m/s.",
    "mittel",
    ["kinetische Energie", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-236",
    "phys-kap4",
    "Die spezifische Wärmekapazität c hat die Einheit:",
    ["J", "J/K", "J/(kg·K)", "kg/K", "W/(kg·K)"],
    2,
    "Q = m·c·ΔT → c in J/(kg·K).",
    "leicht",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-237",
    "phys-kap7",
    "Welche Aussage zu ionisierender Strahlung ist richtig?",
    [
      "Infrarot ist ionisierend.",
      "Alpha-, Beta- und Gamma-Strahlung können ionisierend sein.",
      "Sichtbares Licht ist immer ionisierend.",
      "Nur Röntgen ist ionisierend.",
      "Mikrowellen sind stark ionisierend.",
    ],
    1,
    "Ionisierend: Teilchen/Photonen mit genug Energie (Alpha, Beta, Gamma, Röntgen, UV teilweise). Nicht: IR, sichtbar, Mikrowellen.",
    "mittel",
    ["ionisierende Strahlung"]
  ),
  q(
    "ph-pool-238",
    "phys-kap5",
    "Zwei gleiche Punktladungen im Abstand r: Verdoppelt man den Abstand, wird die Coulomb-Kraft:",
    ["verdoppelt", "halbiert", "auf 1/4", "auf 1/2", "vervierfacht"],
    2,
    "F ∝ 1/r² → r verdoppelt → F auf 1/4.",
    "mittel",
    ["Coulomb", "Abstand"]
  ),
  q(
    "ph-pool-239",
    "phys-kap1",
    "Ein 60-kg-Mensch steht in einem Aufzug, der mit 2 m/s² nach oben beschleunigt. Normalkraft des Bodens (g ≈ 10 m/s²)?",
    ["600 N", "720 N", "480 N", "120 N", "60 N"],
    1,
    "N − m·g = m·a → N = m(g+a) = 60·12 = 720 N.",
    "mittel",
    ["Aufzug", "Normalkraft"]
  ),
  q(
    "ph-pool-240",
    "phys-kap3",
    "Der Hörschwellenpegel (Referenz) liegt bei etwa:",
    ["0 dB", "10 dB", "20 dB", "100 dB", "1 dB"],
    0,
    "0 dB entspricht der Hörschwelle (Referenzintensität).",
    "leicht",
    ["Dezibel", "Schall"]
  ),
  q(
    "ph-pool-241",
    "phys-kap4",
    "Bei isobarer Erwärmung (p = const) eines idealen Gases:",
    [
      "bleibt das Volumen konstant",
      "steigt das Volumen",
      "sinkt das Volumen",
      "bleibt die Temperatur konstant",
      "wird keine Arbeit verrichtet",
    ],
    1,
    "Isobar: V ∝ T (Charles); Erwärmung → Volumen steigt.",
    "mittel",
    ["isobar", "ideales Gas"]
  ),
  q(
    "ph-pool-242",
    "phys-kap5",
    "Ein Plattenkondensator mit Luft (εᵣ ≈ 1) wird mit einem Dielektrikum (εᵣ > 1) gefüllt. Die Kapazität:",
    ["bleibt gleich", "nimmt zu", "nimmt ab", "wird null", "verdoppelt sich immer"],
    1,
    "C = ε₀·εᵣ·A/d; εᵣ größer → C größer.",
    "mittel",
    ["Dielektrikum", "Kondensator"]
  ),
  q(
    "ph-pool-243",
    "phys-kap1",
    "Welche Aussage zur potentiellen Energie ist falsch?",
    [
      "Sie kann negativ sein (z.B. Gravitation mit Bezug im Unendlichen).",
      "Sie hängt vom Bezugsniveau ab.",
      "Im Schwerefeld: E_pot = m·g·h.",
      "Sie ist immer positiv.",
      "Sie wird in Joule gemessen.",
    ],
    3,
    "E_pot kann negativ sein (z.B. gebundene Zustände, Bezug im Unendlichen).",
    "mittel",
    ["potentielle Energie"]
  ),
  q(
    "ph-pool-244",
    "phys-kap7",
    "Die Einheit Becquerel (Bq) misst:",
    [
      "Energiedosis",
      "Aktivität (Zerfälle pro Sekunde)",
      "Äquivalentdosis",
      "Ladung",
      "Stromstärke",
    ],
    1,
    "1 Bq = 1 Zerfall/s (Aktivität).",
    "leicht",
    ["Becquerel", "Aktivität"]
  ),
  q(
    "ph-pool-245",
    "phys-kap3",
    "Licht wird an einer Grenzfläche Luft–Wasser gebrochen. Der Brechungswinkel ist … als der Einfallswinkel (Wasser optisch dichter).",
    ["größer", "kleiner", "gleich", "90°", "0°"],
    1,
    "Optisch dichter (Wasser): Brechung zum Lot → kleinerer Winkel.",
    "leicht",
    ["Brechung", "Wasser"]
  ),
  q(
    "ph-pool-246",
    "phys-kap5",
    "Kirchhoffsche Knotenregel: Die Summe der Ströme in einen Knoten ist … der Summe der Ströme aus dem Knoten.",
    ["größer als", "gleich", "kleiner als", "unabhängig von", "null"],
    1,
    "Knotenregel: Σ I_ein = Σ I_aus (Ladungserhaltung).",
    "mittel",
    ["Kirchhoff", "Knotenregel"]
  ),
  q(
    "ph-pool-247",
    "phys-kap1",
    "Ein Rad mit Radius 0,3 m dreht sich mit 10 Umdrehungen pro Sekunde. Umfangsgeschwindigkeit (in m/s)?",
    ["ca. 18,8 m/s", "3 m/s", "10 m/s", "0,3 m/s", "100 m/s"],
    0,
    "v = ω·r = 2π·f·r = 2π·10·0,3 ≈ 18,8 m/s.",
    "mittel",
    ["Kreisbewegung", "Geschwindigkeit"]
  ),
  q(
    "ph-pool-248",
    "phys-kap4",
    "Die Verdampfungswärme von Wasser bei 100 °C ist … der Schmelzwärme von Eis.",
    ["kleiner als", "größer als", "gleich", "unabhängig von", "null"],
    1,
    "Verdampfungswärme Wasser ca. 2257 kJ/kg > Schmelzwärme Eis ca. 334 kJ/kg.",
    "mittel",
    ["Verdampfung", "Schmelzen"]
  ),
  q(
    "ph-pool-249",
    "phys-kap7",
    "Ein Photon mit 1 eV Energie hat die Wellenlänge (h·c ≈ 1240 eV·nm):",
    ["1240 nm", "1240 m", "1 nm", "1 μm", "1240 μm"],
    0,
    "E = h·c/λ → λ = h·c/E ≈ 1240/1 = 1240 nm.",
    "schwer",
    ["Photon", "Wellenlänge", "eV"]
  ),
  q(
    "ph-pool-250",
    "phys-kap1",
    "Ein 500-g-Ball fällt aus 2 m Höhe (g ≈ 10 m/s²). Mit welcher Geschwindigkeit trifft er auf?",
    ["2 m/s", "ca. 6,3 m/s", "10 m/s", "4 m/s", "20 m/s"],
    1,
    "v = √(2gh) = √(2·10·2) = √40 ≈ 6,3 m/s.",
    "mittel",
    ["freier Fall", "Geschwindigkeit"]
  ),
];
