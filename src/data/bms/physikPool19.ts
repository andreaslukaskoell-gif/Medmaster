/**
 * Physik BMS Pool 19 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool19: Question[] = [
  q(
    "ph-pool-19-001",
    KAP[0],
    "Die SI-Basiseinheit für die Temperatur ist:",
    ["Grad Celsius", "Kelvin", "Joule", "Watt", "Pascal"],
    1,
    "Kelvin (K) ist die SI-Basiseinheit der thermodynamischen Temperatur.",
    "leicht",
    ["SI", "Temperatur"]
  ),
  q(
    "ph-pool-19-002",
    KAP[1],
    "Die Amplitude einer harmonischen Welle ist:",
    [
      "die Frequenz",
      "die maximale Auslenkung",
      "die Wellenlänge",
      "die Geschwindigkeit",
      "die Phase",
    ],
    1,
    "Amplitude A: maximale Auslenkung aus der Ruhelage.",
    "leicht",
    ["Amplitude", "Welle"]
  ),
  q(
    "ph-pool-19-003",
    KAP[2],
    "Die Wärmeleitung in einem Stoff wird durch die Wärmeleitfähigkeit λ beschrieben. Ein guter Wärmeleiter hat:",
    ["kleines λ", "großes λ", "λ = 0", "λ negativ", "λ nur für Gase"],
    1,
    "Große Wärmeleitfähigkeit λ → guter Wärmeleiter.",
    "leicht",
    ["Wärmeleitfähigkeit", "Wärmeleitung"]
  ),
  q(
    "ph-pool-19-004",
    KAP[3],
    "Die elektrische Spannung U zwischen zwei Punkten entspricht der:",
    [
      "Stromstärke",
      "Arbeit pro Ladung (Potentialdifferenz)",
      "Ladung",
      "Kapazität",
      "Feldstärke mal Zeit",
    ],
    1,
    "U = W/Q (Spannung = Arbeit pro Ladung).",
    "leicht",
    ["Spannung", "Definition"]
  ),
  q(
    "ph-pool-19-005",
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
    "Gray: Energiedosis D = 1 J/kg.",
    "leicht",
    ["Gray", "Energiedosis"]
  ),
  q(
    "ph-pool-19-006",
    KAP[0],
    "Bei einem unelastischen Stoß:",
    [
      "ist die kinetische Energie erhalten",
      "ist die kinetische Energie nicht erhalten (Teil geht in Verformung/Wärme)",
      "ist der Impuls nicht erhalten",
      "bleibt die Geschwindigkeit gleich",
      "ist die Masse nicht erhalten",
    ],
    1,
    "Unelastisch: Impuls erhalten, kinetische Energie nicht (Verlust).",
    "mittel",
    ["unelastischer Stoß", "Energie"]
  ),
  q(
    "ph-pool-19-007",
    KAP[1],
    "Die Schallgeschwindigkeit in Wasser ist etwa:",
    ["340 m/s", "1500 m/s", "5000 m/s", "3·10⁸ m/s", "100 m/s"],
    1,
    "Schall in Wasser ca. 1500 m/s.",
    "leicht",
    ["Schall", "Wasser"]
  ),
  q(
    "ph-pool-19-008",
    KAP[2],
    "Der absolute Nullpunkt (0 K) entspricht in Celsius:",
    ["0 °C", "−273,15 °C", "273,15 °C", "100 °C", "−100 °C"],
    1,
    "0 K = −273,15 °C.",
    "leicht",
    ["absoluter Nullpunkt", "Temperatur"]
  ),
  q(
    "ph-pool-19-009",
    KAP[3],
    "Der spezifische Widerstand ρ eines Materials hat die Einheit:",
    ["Ω", "Ω·m", "Ω/m", "m/Ω", "S"],
    1,
    "ρ in Ω·m; R = ρ·l/A.",
    "mittel",
    ["spezifischer Widerstand", "Einheit"]
  ),
  q(
    "ph-pool-19-010",
    KAP[4],
    "Die Halbwertszeit von Jod-131 beträgt etwa:",
    ["8 Tage", "8 Jahre", "8 Stunden", "80 Tage", "unendlich"],
    0,
    "T_½(I-131) ≈ 8 Tage (nuklearmedizinische Anwendung).",
    "leicht",
    ["Jod-131", "Halbwertszeit"]
  ),
  q(
    "ph-pool-19-011",
    KAP[0],
    "Die Gewichtskraft F_G auf einen Körper der Masse m ist:",
    ["F_G = m·v", "F_G = m·g", "F_G = m·a beliebig", "F_G = p", "F_G = E/h"],
    1,
    "F_G = m·g (g = Ortsfaktor).",
    "leicht",
    ["Gewichtskraft", "Formel"]
  ),
  q(
    "ph-pool-19-012",
    KAP[1],
    "Bei der Brechung von Licht beim Übergang Glas → Luft:",
    [
      "wird Licht zum Lot gebrochen",
      "wird Licht vom Lot weg gebrochen",
      "tritt immer Totalreflexion auf",
      "ändert sich die Frequenz",
      "bleibt der Einfallswinkel gleich",
    ],
    1,
    "Glas → Luft (n kleiner): Brechung vom Lot weg.",
    "mittel",
    ["Brechung", "Glas-Luft"]
  ),
  q(
    "ph-pool-19-013",
    KAP[2],
    "Die Zustandsgleichung des idealen Gases lautet:",
    ["p·T = n·R·V", "p·V = n·R·T", "V·T = p·n·R", "p = V·T", "n = p·V·T"],
    1,
    "p·V = n·R·T (allgemeine Gasgleichung).",
    "leicht",
    ["Gasgleichung", "ideales Gas"]
  ),
  q(
    "ph-pool-19-014",
    KAP[3],
    "In einem geschlossenen Stromkreis mit einer Spannungsquelle gilt für die Summe der Spannungsabfälle:",
    [
      "sie ist null",
      "sie ist gleich der Quellspannung (Maschensatz)",
      "sie ist doppelt so groß wie die Quellspannung",
      "sie ist unabhängig vom Strom",
      "sie ist null nur bei Wechselstrom",
    ],
    1,
    "Maschensatz: Σ U = 0 (Summe der Spannungen in einer Masche).",
    "mittel",
    ["Maschensatz", "Stromkreis"]
  ),
  q(
    "ph-pool-19-015",
    KAP[4],
    "Ein Photon der Frequenz f hat die Energie:",
    ["E = f", "E = h·f (h = Planck-Konstante)", "E = h/f", "E = c·f", "E = m·c²"],
    1,
    "E = h·f (Photonenenergie).",
    "leicht",
    ["Photon", "Energie"]
  ),
  q(
    "ph-pool-19-016",
    KAP[0],
    "Der Druck p in einer Flüssigkeit der Dichte ρ in der Tiefe h (Schweredruck) beträgt:",
    ["p = ρ/h", "p = ρ·g·h", "p = ρ·h", "p = g/h", "p = ρ + h"],
    1,
    "Schweredruck: p = ρ·g·h.",
    "leicht",
    ["Schweredruck", "Flüssigkeit"]
  ),
  q(
    "ph-pool-19-017",
    KAP[1],
    "Die Frequenz f und die Kreisfrequenz ω einer Schwingung hängen zusammen durch:",
    ["ω = f", "ω = 2π·f", "ω = f/(2π)", "ω = f²", "ω = 1/f"],
    1,
    "ω = 2π·f = 2π/T.",
    "leicht",
    ["Kreisfrequenz", "Frequenz"]
  ),
  q(
    "ph-pool-19-018",
    KAP[2],
    "Bei der adiabatischen Kompression eines idealen Gases:",
    [
      "bleibt die Temperatur konstant",
      "steigt die Temperatur (Arbeit wird dem Gas zugeführt)",
      "sinkt die Temperatur",
      "wird Wärme abgegeben",
      "bleibt der Druck konstant",
    ],
    1,
    "Adiabatisch: dQ = 0; Kompression → Arbeit von außen → U und T steigen.",
    "mittel",
    ["adiabatisch", "Kompression"]
  ),
  q(
    "ph-pool-19-019",
    KAP[3],
    "Die elektrische Feldstärke E in der Nähe einer geladenen Kugel (Ladung Q, Abstand r vom Zentrum, r größer als Kugelradius) ist proportional zu:",
    ["Q·r", "Q/r²", "r²/Q", "Q + r", "1/r"],
    1,
    "E = k·Q/r² (Coulomb-Feld einer Punktladung/Kugel).",
    "mittel",
    ["Feldstärke", "Kugel"]
  ),
  q(
    "ph-pool-19-020",
    KAP[4],
    "Die Strahlung beim Zerfall von Cobalt-60 enthält:",
    ["nur Alpha", "Beta und Gamma", "nur Neutronen", "nur Röntgen", "nur Positronen"],
    1,
    "Co-60: β⁻-Zerfall mit nachfolgender γ-Emission.",
    "mittel",
    ["Cobalt-60", "Strahlung"]
  ),
  q(
    "ph-pool-19-021",
    KAP[0],
    "Die Einheit der Kraft ist:",
    ["kg", "N (Newton)", "J", "W", "Pa"],
    1,
    "Kraft F in Newton (N) = kg·m/s².",
    "leicht",
    ["Kraft", "Newton"]
  ),
  q(
    "ph-pool-19-022",
    KAP[1],
    "Die Wellenlänge λ einer Welle und die Wellenzahl k (k = 2π/λ) hängen zusammen durch:",
    ["k = λ", "k = 2π/λ", "k = λ/(2π)", "k = λ²", "k = 1/λ"],
    1,
    "Wellenzahl k = 2π/λ.",
    "mittel",
    ["Wellenzahl", "Wellenlänge"]
  ),
  q(
    "ph-pool-19-023",
    KAP[2],
    "Die Enthalpie H ist definiert als H = U + p·V. Bei isobarer Wärmezufuhr gilt:",
    [
      "ΔH = ΔU",
      "ΔH = Q (bei konstantem Druck, nur Volumenarbeit)",
      "ΔH = 0",
      "ΔH = ΔS·T",
      "ΔH = W",
    ],
    1,
    "Isobar: dH = dQ (bei nur Volumenarbeit).",
    "mittel",
    ["Enthalpie", "isobar"]
  ),
  q(
    "ph-pool-19-024",
    KAP[3],
    "Die magnetische Flussdichte B im Abstand r von einem langen geraden Leiter mit Strom I ist proportional zu:",
    ["I·r", "I/r", "r/I", "I²", "1/(I·r)"],
    1,
    "B = μ₀·I/(2π·r) (Ampere).",
    "mittel",
    ["Magnetfeld", "Leiter"]
  ),
  q(
    "ph-pool-19-025",
    KAP[4],
    "Die Bindungsenergie pro Nukleon ist bei leichten Kernen (z. B. Deuterium) … als bei mittelschweren Kernen (z. B. Eisen).",
    ["größer", "kleiner", "gleich", "null", "negativ"],
    1,
    "Bindungsenergie pro Nukleon: Maximum bei mittleren Massenzahlen.",
    "mittel",
    ["Bindungsenergie", "Nukleonen"]
  ),
  q(
    "ph-pool-19-026",
    KAP[0],
    "Die Beschleunigung a bei gleichmäßig beschleunigter geradliniger Bewegung ist definiert als:",
    ["a = v·t", "a = Δv/Δt", "a = s/t", "a = F·m", "a = v²"],
    1,
    "a = dv/dt = Δv/Δt.",
    "leicht",
    ["Beschleunigung", "Definition"]
  ),
  q(
    "ph-pool-19-027",
    KAP[1],
    "Ein Knoten einer stehenden Welle ist eine Stelle, an der:",
    [
      "die Amplitude maximal ist",
      "die Auslenkung dauerhaft null ist",
      "die Frequenz maximal ist",
      "die Energie maximal ist",
      "Reflexion stattfindet",
    ],
    1,
    "Knoten: Auslenkung immer null.",
    "leicht",
    ["Knoten", "stehende Welle"]
  ),
  q(
    "ph-pool-19-028",
    KAP[2],
    "Die Wärmekapazität C eines Körpers (Q = C·ΔT) hat die Einheit:",
    ["J·K", "J/K", "K/J", "J", "W"],
    1,
    "C = Q/ΔT → [C] = J/K.",
    "leicht",
    ["Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-19-029",
    KAP[3],
    "Ein Voltmeter hat idealerweise:",
    [
      "einen sehr kleinen Innenwiderstand",
      "einen sehr großen Innenwiderstand (möglichst kein Stromfluss durch das Messgerät)",
      "Innenwiderstand null",
      "kapazitiven Widerstand",
      "induktiven Widerstand",
    ],
    1,
    "Voltmeter: großer Innenwiderstand, damit wenig Strom durch das Gerät.",
    "leicht",
    ["Voltmeter", "Innenwiderstand"]
  ),
  q(
    "ph-pool-19-030",
    KAP[4],
    "Die Reichweite von Gamma-Strahlung in Blei:",
    [
      "ist null",
      "ist sehr klein (wenige cm je nach Energie)",
      "ist unendlich",
      "ist gleich der von Alpha",
      "hängt nicht von der Energie ab",
    ],
    1,
    "Gamma wird in Blei absorbiert; Reichweite abhängig von Energie (Größenordnung cm bis dm).",
    "mittel",
    ["Gamma", "Abschirmung", "Blei"]
  ),
  q(
    "ph-pool-19-031",
    KAP[0],
    "Der Drehimpuls L eines Massenpunktes (Masse m, Geschwindigkeit v, Abstand r von der Drehachse) bei Kreisbewegung ist:",
    ["L = m·v", "L = m·v·r", "L = m·v/r", "L = v·r", "L = m/r"],
    1,
    "L = m·v·r (bei Kreisbewegung senkrecht zu r).",
    "mittel",
    ["Drehimpuls", "Kreisbewegung"]
  ),
  q(
    "ph-pool-19-032",
    KAP[1],
    "Die Dispersion von Licht in einem Prisma führt zu:",
    [
      "nur Reflexion",
      "Aufspaltung in Farben (Wellenlängenabhängigkeit von n)",
      "Totalreflexion",
      "Absorption",
      "Polarisation",
    ],
    1,
    "Dispersion: n(λ) → verschiedene Brechung → Regenbogenfarben.",
    "leicht",
    ["Dispersion", "Prisma"]
  ),
  q(
    "ph-pool-19-033",
    KAP[2],
    "Die Entropie S eines Systems nimmt bei reversiblen Prozessen in einem abgeschlossenen System:",
    [
      "immer zu",
      "bleibt konstant",
      "immer ab",
      "nimmt nur bei Wärmezufuhr zu",
      "ist nicht definiert",
    ],
    1,
    "Reversibel: ΔS = 0 im abgeschlossenen System.",
    "mittel",
    ["Entropie", "reversibel"]
  ),
  q(
    "ph-pool-19-034",
    KAP[3],
    "Die Selbstinduktion in einer Spule führt dazu, dass bei Änderung des Stroms:",
    [
      "keine Spannung entsteht",
      "eine Induktionsspannung entsteht (U = −L·dI/dt)",
      "der Widerstand null wird",
      "die Kapazität steigt",
      "keine Arbeit verrichtet wird",
    ],
    1,
    "U_ind = −L·dI/dt (Lenz).",
    "mittel",
    ["Selbstinduktion", "Spule"]
  ),
  q(
    "ph-pool-19-035",
    KAP[4],
    "Die Massenzahl A und die Ordnungszahl Z eines Kerns bestimmen:",
    [
      "nur die chemische Eigenschaft",
      "die Neutronenzahl N = A − Z und die Art des Nuklids",
      "nur die Halbwertszeit",
      "nur die Aktivität",
      "nur die Reichweite",
    ],
    1,
    "A und Z legen N = A − Z und das Nuklid fest.",
    "leicht",
    ["Massenzahl", "Ordnungszahl"]
  ),
  q(
    "ph-pool-19-036",
    KAP[0],
    "Die Haftreibung zwischen zwei trockenen Oberflächen ist typischerweise … als die Gleitreibung.",
    ["kleiner", "größer", "gleich", "halb so groß", "doppelt so groß"],
    1,
    "Haftreibung > Gleitreibung (μ_H > μ_G).",
    "leicht",
    ["Haftreibung", "Gleitreibung"]
  ),
  q(
    "ph-pool-19-037",
    KAP[1],
    "Die Intensität I einer Kugelwelle in der Entfernung r von einer punktförmigen Quelle ist proportional zu:",
    ["r", "1/r²", "r²", "1/r", "konstant"],
    1,
    "I ∝ 1/r² (Energieerhaltung auf Kugelfläche).",
    "mittel",
    ["Intensität", "Abstand"]
  ),
  q(
    "ph-pool-19-038",
    KAP[2],
    "Die molare Gaskonstante R beträgt etwa:",
    ["8,314 J/(mol·K)", "0,082 J/(mol·K)", "273 J/(mol·K)", "1 J/(mol·K)", "8,314 kJ/mol"],
    0,
    "R ≈ 8,314 J/(mol·K).",
    "leicht",
    ["Gaskonstante", "R"]
  ),
  q(
    "ph-pool-19-039",
    KAP[3],
    "Die elektrische Leistung P bei Spannung U und Stromstärke I ist:",
    ["P = U/I", "P = U·I", "P = I/U", "P = U + I", "P = U²·I"],
    1,
    "P = U·I.",
    "leicht",
    ["Leistung", "Strom"]
  ),
  q(
    "ph-pool-19-040",
    KAP[4],
    "Ein Neutron wird beim Beta-Minus-Zerfall zu:",
    [
      "Proton + Elektron + Antineutrino",
      "Proton + Positron",
      "Alpha-Teilchen",
      "zwei Neutronen",
      "Proton + Neutrino",
    ],
    0,
    "β⁻: n → p + e⁻ + ν̄_e.",
    "mittel",
    ["Beta-Minus", "Neutron"]
  ),
  q(
    "ph-pool-19-041",
    KAP[0],
    "Die kinetische Energie E_kin eines Körpers der Masse m und Geschwindigkeit v ist:",
    ["E_kin = m·v", "E_kin = ½·m·v²", "E_kin = m·v²", "E_kin = m·g·h", "E_kin = F·s"],
    1,
    "E_kin = ½·m·v².",
    "leicht",
    ["kinetische Energie", "Formel"]
  ),
  q(
    "ph-pool-19-042",
    KAP[1],
    "Die Schallgeschwindigkeit in Luft hängt ab von:",
    ["nur der Dichte", "der Temperatur (c ∝ √T)", "nur dem Druck", "der Frequenz", "der Amplitude"],
    1,
    "c_Luft ∝ √(γ·R·T/M); steigt mit √T.",
    "mittel",
    ["Schallgeschwindigkeit", "Temperatur"]
  ),
  q(
    "ph-pool-19-043",
    KAP[2],
    "Die Verdampfungswärme eines Stoffes wird beim Sieden:",
    [
      "in Erhöhung der Temperatur umgesetzt",
      "bei konstanter Temperatur aufgenommen (Phasenübergang)",
      "nicht aufgenommen",
      "nur in Festkörpern aufgenommen",
      "sofort wieder abgegeben",
    ],
    1,
    "Beim Sieden: Temperatur konstant, Verdampfungswärme zugeführt.",
    "leicht",
    ["Verdampfung", "Sieden"]
  ),
  q(
    "ph-pool-19-044",
    KAP[3],
    "Die Kapazität C und die gespeicherte Ladung Q sowie die Spannung U hängen zusammen durch:",
    ["Q = C/U", "Q = C·U", "Q = U/C", "Q = C + U", "Q = C − U"],
    1,
    "Q = C·U.",
    "leicht",
    ["Kondensator", "Ladung"]
  ),
  q(
    "ph-pool-19-045",
    KAP[4],
    "Die charakteristische Röntgenstrahlung eines Elements hängt ab von:",
    [
      "der Anodenspannung nur",
      "der Art des Anodenmaterials (charakteristische Linien)",
      "nur der Stromstärke",
      "nur der Brennfleckgröße",
      "der Fokus-Weite",
    ],
    1,
    "Charakteristische Röntgenlinien (Kα, Kβ, …) sind materialabhängig.",
    "mittel",
    ["Röntgen", "charakteristische Strahlung"]
  ),
  q(
    "ph-pool-19-046",
    KAP[0],
    "Die Arbeit W bei konstanter Kraft F über den Weg s (Kraft in Wegrichtung) ist:",
    ["W = F/s", "W = F·s", "W = F·t", "W = s/F", "W = F + s"],
    1,
    "W = F·s (Skalarprodukt bei gleicher Richtung).",
    "leicht",
    ["Arbeit", "Kraft"]
  ),
  q(
    "ph-pool-19-047",
    KAP[1],
    "Bei der Beugung am Einzelspalt entsteht ein zentrales Maximum und seitliche Minima. Das erste Minimum liegt bei sin(α) =:",
    ["0", "λ/b", "b/λ", "2λ/b", "λ/(2b)"],
    1,
    "Einzelspalt: erstes Minimum bei sin(α) = λ/b.",
    "mittel",
    ["Einzelspalt", "Beugung"]
  ),
  q(
    "ph-pool-19-048",
    KAP[2],
    "Die Wärme Q und die Temperatur T sind verschiedene Größen. Q ist:",
    [
      "eine Zustandsgröße",
      "eine Prozessgröße (Energie, die übertragen wird)",
      "gleich T",
      "immer größer als T",
      "in Kelvin angegeben",
    ],
    1,
    "Q: Prozessgröße (Wärmemenge in J); T: Zustandsgröße (K).",
    "leicht",
    ["Wärme", "Temperatur"]
  ),
  q(
    "ph-pool-19-049",
    KAP[3],
    "Die Induktivität L einer Spule bewirkt bei Wechselstrom einen:",
    [
      "ohmschen Widerstand",
      "blindwiderstand X_L = ω·L",
      "kapazitiven Blindwiderstand",
      "negativen Widerstand",
      "Widerstand null",
    ],
    1,
    "Spule: induktiver Blindwiderstand X_L = ω·L.",
    "mittel",
    ["Induktivität", "Wechselstrom"]
  ),
  q(
    "ph-pool-19-050",
    KAP[4],
    "Die Strahlung eines schwarzen Körpers (Hohlraumstrahlung) hat ein kontinuierliches Spektrum mit einem Maximum, dessen Wellenlänge von der Temperatur abhängt (Wien-Verschiebung):",
    [
      "λ_max·T = const",
      "λ_max/T = const",
      "λ_max + T = const",
      "λ_max unabhängig von T",
      "nur λ_max ∝ T",
    ],
    0,
    "Wien: λ_max·T = const.",
    "schwer",
    ["Wien", "Schwarzer Körper"]
  ),
  q(
    "ph-pool-19-051",
    KAP[0],
    "Die Fallzeit t eines Körpers aus der Ruhe aus der Höhe h (ohne Reibung) beträgt:",
    ["t = h/g", "t = √(2h/g)", "t = 2h/g", "t = h/(2g)", "t = g/h"],
    1,
    "h = ½·g·t² → t = √(2h/g).",
    "mittel",
    ["freier Fall", "Fallzeit"]
  ),
  q(
    "ph-pool-19-052",
    KAP[1],
    "Die Polarisation von Licht kann durch … erfolgen.",
    [
      "nur Beugung",
      "Polarisationsfilter, Reflexion unter Brewster-Winkel, Doppelbrechung",
      "nur Dispersion",
      "nur Absorption",
      "nur Streuung",
    ],
    1,
    "Polarisation: Filter, Reflexion, Doppelbrechung.",
    "mittel",
    ["Polarisation", "Licht"]
  ),
  q(
    "ph-pool-19-053",
    KAP[2],
    "Der Wärmestrom durch eine Schicht der Dicke d und Fläche A bei Temperaturdifferenz ΔT und Wärmeleitfähigkeit λ ist:",
    ["Q̇ = λ·A·d/ΔT", "Q̇ = λ·A·ΔT/d", "Q̇ = d/(λ·A·ΔT)", "Q̇ = λ·d·ΔT", "Q̇ = A·d·ΔT"],
    1,
    "Fourier: Q̇ = λ·A·ΔT/d.",
    "mittel",
    ["Wärmestrom", "Fourier"]
  ),
  q(
    "ph-pool-19-054",
    KAP[3],
    "Die Richtung der Lorentzkraft auf eine negative Ladung (Elektron) in einem Magnetfeld ist:",
    [
      "gleich der auf eine positive Ladung",
      "entgegengesetzt zur Kraft auf eine positive Ladung",
      "immer in Bewegungsrichtung",
      "immer in B-Richtung",
      "immer null",
    ],
    1,
    "F = q·(v×B); bei q < 0 kehrt sich die Richtung um.",
    "mittel",
    ["Lorentzkraft", "Elektron"]
  ),
  q(
    "ph-pool-19-055",
    KAP[4],
    "Die Strahlenbelastung bei einer CT-Untersuchung ist typischerweise … als bei einer einfachen Röntgenaufnahme.",
    [
      "kleiner",
      "größer (mehrere Einzelaufnahmen, höhere Dosis)",
      "gleich",
      "null",
      "nicht messbar",
    ],
    1,
    "CT: viele Einzelaufnahmen → höhere Dosis als Einzelröntgen.",
    "leicht",
    ["CT", "Strahlenbelastung"]
  ),
  q(
    "ph-pool-19-056",
    KAP[0],
    "Die Dichte ρ von Wasser bei 4 °C beträgt etwa:",
    ["1 g/cm³", "0,9 g/cm³", "1,1 g/cm³", "10 kg/m³", "100 kg/m³"],
    0,
    "ρ_Wasser ≈ 1 g/cm³ = 1000 kg/m³ (bei 4 °C maximal).",
    "leicht",
    ["Dichte", "Wasser"]
  ),
  q(
    "ph-pool-19-057",
    KAP[1],
    "Die Frequenz f einer Welle und ihre Periodendauer T sind verknüpft durch:",
    ["f = T", "f = 1/T", "f = 2π·T", "f = T²", "f = T/2π"],
    1,
    "f = 1/T.",
    "leicht",
    ["Frequenz", "Periodendauer"]
  ),
  q(
    "ph-pool-19-058",
    KAP[2],
    "Bei isothermer Kompression eines idealen Gases:",
    [
      "bleibt die Temperatur konstant, der Druck steigt",
      "steigt die Temperatur",
      "sinkt der Druck",
      "wird keine Arbeit verrichtet",
      "bleibt das Volumen konstant",
    ],
    0,
    "Isotherm: T = const; Kompression → V kleiner → p größer (p·V = const).",
    "mittel",
    ["isotherm", "Kompression"]
  ),
  q(
    "ph-pool-19-059",
    KAP[3],
    "Die elektrische Stromstärke I durch einen Leiter mit Widerstand R bei Spannung U beträgt:",
    ["I = U·R", "I = U/R", "I = R/U", "I = U + R", "I = U²·R"],
    1,
    "Ohmsches Gesetz: I = U/R.",
    "leicht",
    ["Stromstärke", "Ohm"]
  ),
  q(
    "ph-pool-19-060",
    KAP[4],
    "Die Zerfallsreihe von Uran-235 (4n+3) endet bei dem stabilen Nuklid:",
    ["Blei-206", "Blei-207", "Blei-208", "Bismut-209", "Thorium-232"],
    1,
    "U-235-Reihe endet bei Pb-207.",
    "schwer",
    ["Zerfallsreihe", "Uran-235"]
  ),
];
