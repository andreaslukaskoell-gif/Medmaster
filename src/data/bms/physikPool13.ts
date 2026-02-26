/**
 * Physik BMS Pool 13 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool13: Question[] = [
  q(
    "ph-pool-13-001",
    KAP[0],
    "Welche SI-Basiseinheit gehört zur Masse?",
    ["Kilogramm (kg)", "Newton", "Pascal", "Joule", "Watt"],
    0,
    "Die Masse hat die SI-Basiseinheit Kilogramm (kg).",
    "leicht",
    ["SI", "Masse"]
  ),
  q(
    "ph-pool-13-002",
    KAP[1],
    "Die Schwingungsdauer T und die Frequenz f einer Welle hängen zusammen durch:",
    ["T = f", "T = 1/f", "T = f²", "T = 2πf", "T = f/2π"],
    1,
    "Frequenz f = 1/T (Anzahl Schwingungen pro Sekunde).",
    "leicht",
    ["Frequenz", "Schwingung"]
  ),
  q(
    "ph-pool-13-003",
    KAP[2],
    "Die Temperatur eines idealen Gases ist ein Maß für:",
    [
      "die Wärmemenge",
      "die mittlere kinetische Energie der Teilchen",
      "den Druck",
      "das Volumen",
      "die Entropie",
    ],
    1,
    "Temperatur ∝ mittlere kinetische Energie der Gasteilchen.",
    "leicht",
    ["Temperatur", "ideales Gas"]
  ),
  q(
    "ph-pool-13-004",
    KAP[3],
    "Der elektrische Widerstand R wird in … gemessen.",
    ["Volt", "Ampere", "Ohm (Ω)", "Farad", "Henry"],
    2,
    "Widerstand R in Ohm (Ω). 1 Ω = 1 V/A.",
    "leicht",
    ["Widerstand", "Ohm"]
  ),
  q(
    "ph-pool-13-005",
    KAP[4],
    "Welche Strahlungsart hat die geringste Durchdringungsfähigkeit in Materie?",
    [
      "Gamma-Strahlung",
      "Röntgenstrahlung",
      "Alpha-Strahlung",
      "Beta-Minus-Strahlung",
      "Neutronenstrahlung",
    ],
    2,
    "Alpha-Teilchen werden bereits von Papier oder wenigen cm Luft gestoppt.",
    "leicht",
    ["Alpha-Strahlung", "Durchdringung"]
  ),
  q(
    "ph-pool-13-006",
    KAP[0],
    "Die Arbeit W ist definiert als:",
    ["F · v", "F / s", "F · s (Kraft mal Weg in Kraftrichtung)", "m · v", "P · t"],
    2,
    "Mechanische Arbeit W = F · s (Kraft mal Weg, wenn Kraft in Wegrichtung).",
    "leicht",
    ["Arbeit", "Mechanik"]
  ),
  q(
    "ph-pool-13-007",
    KAP[1],
    "Ein Hertz (1 Hz) entspricht:",
    [
      "einer Schwingung pro Minute",
      "einer Schwingung pro Sekunde",
      "einer Wellenlänge",
      "der Schallgeschwindigkeit",
      "einer Periode",
    ],
    1,
    "1 Hz = 1 Schwingung pro Sekunde.",
    "leicht",
    ["Hertz", "Frequenz"]
  ),
  q(
    "ph-pool-13-008",
    KAP[2],
    "Der Wärmeübergang durch Strahlung:",
    [
      "erfordert immer ein Medium",
      "erfolgt auch im Vakuum (z. B. Sonnenlicht)",
      "ist immer vernachlässigbar",
      "gilt nur für Flüssigkeiten",
      "ist unabhängig von der Temperatur",
    ],
    1,
    "Wärmestrahlung (elektromagnetisch) breitet sich im Vakuum aus.",
    "leicht",
    ["Wärmestrahlung", "Strahlung"]
  ),
  q(
    "ph-pool-13-009",
    KAP[3],
    "Die elektrische Ladung Q wird in … gemessen.",
    ["Ampere", "Volt", "Coulomb (C)", "Ohm", "Tesla"],
    2,
    "Ladung Q in Coulomb (C). 1 C = 1 A·s.",
    "leicht",
    ["Ladung", "Coulomb"]
  ),
  q(
    "ph-pool-13-010",
    KAP[4],
    "Bei der Kernspaltung:",
    [
      "verschmelzen leichte Kerne",
      "wird ein schwerer Kern in leichtere Kerne gespalten",
      "entsteht nur Gammastrahlung",
      "bleibt die Massenzahl konstant",
      "wird keine Energie freigesetzt",
    ],
    1,
    "Kernspaltung: schwerer Kern (z. B. U-235) wird durch Neutronen in leichtere Kerne gespalten; Energie wird freigesetzt.",
    "mittel",
    ["Kernspaltung", "Kernphysik"]
  ),
  q(
    "ph-pool-13-011",
    KAP[0],
    "Die potenzielle Energie im Gravitationsfeld nahe der Erdoberfläche ist:",
    ["E = m · v", "E = m · g · h", "E = ½ m v²", "E = F · t", "E = p · V"],
    1,
    "E_pot = m · g · h (Höhenenergie).",
    "leicht",
    ["potenzielle Energie", "Mechanik"]
  ),
  q(
    "ph-pool-13-012",
    KAP[1],
    "Eine transversale Welle ist dadurch gekennzeichnet, dass die Schwingung:",
    [
      "in Ausbreitungsrichtung erfolgt",
      "senkrecht zur Ausbreitungsrichtung erfolgt",
      "nur in Gasen vorkommt",
      "immer gedämpft ist",
      "die Frequenz null hat",
    ],
    1,
    "Transversal: Schwingung senkrecht zur Ausbreitung (z. B. Seilwelle, elektromagnetische Welle).",
    "leicht",
    ["transversal", "Welle"]
  ),
  q(
    "ph-pool-13-013",
    KAP[2],
    "Der Siedepunkt von Wasser bei Normaldruck liegt bei:",
    ["0 °C", "100 K", "100 °C", "273 °C", "373 K"],
    2,
    "Siedepunkt von Wasser bei 1013 hPa: 100 °C (373,15 K).",
    "leicht",
    ["Siedepunkt", "Wasser"]
  ),
  q(
    "ph-pool-13-014",
    KAP[3],
    "In einer Parallelschaltung von Widerständen gilt:",
    [
      "Der Gesamtwiderstand ist die Summe der Einzelwiderstände.",
      "Die Spannung an jedem Widerstand ist gleich.",
      "Der Strom durch jeden Widerstand ist gleich.",
      "R_ges = R₁ + R₂",
      "Der Gesamtwiderstand ist größer als der größte Einzelwiderstand.",
    ],
    1,
    "Parallelschaltung: U an allen Zweigen gleich; 1/R_ges = 1/R₁ + 1/R₂ + …",
    "mittel",
    ["Parallelschaltung", "Widerstand"]
  ),
  q(
    "ph-pool-13-015",
    KAP[4],
    "Ein Positron ist:",
    [
      "ein Proton",
      "das Antiteilchen des Elektrons (positive Ladung)",
      "ein Neutron",
      "ein Alpha-Teilchen",
      "ein Photon",
    ],
    1,
    "Positron e⁺: gleiche Masse wie Elektron, positive Elementarladung.",
    "leicht",
    ["Positron", "Antiteilchen"]
  ),
  q(
    "ph-pool-13-016",
    KAP[0],
    "Die Einheit Newton (N) ist:",
    ["kg · m", "kg · m/s", "kg · m/s²", "J/s", "Pa · m²"],
    2,
    "Kraft F = m · a → [F] = kg · m/s² = N.",
    "leicht",
    ["Newton", "Kraft"]
  ),
  q(
    "ph-pool-13-017",
    KAP[1],
    "Der Brechungsindex n eines Mediums gibt an:",
    [
      "die Dichte",
      "das Verhältnis der Lichtgeschwindigkeit im Vakuum zu der im Medium",
      "die Wellenlänge",
      "die Frequenz",
      "die Intensität",
    ],
    1,
    "n = c_Vakuum / c_Medium; n ≥ 1.",
    "leicht",
    ["Brechungsindex", "Optik"]
  ),
  q(
    "ph-pool-13-018",
    KAP[2],
    "Die Einheit Joule (J) kann auch geschrieben werden als:",
    ["N · m", "N / m", "W · s", "A und C sind richtig", "nur A"],
    3,
    "1 J = 1 N·m = 1 W·s (Arbeit/Energie).",
    "leicht",
    ["Joule", "Energie"]
  ),
  q(
    "ph-pool-13-019",
    KAP[3],
    "Ein Amperemeter wird zum Messen der Stromstärke:",
    [
      "parallel zum Verbraucher geschaltet",
      "in Reihe (in den Stromkreis) geschaltet",
      "nur bei Wechselstrom verwendet",
      "gar nicht geschaltet",
      "nur an der Spannungsquelle angeschlossen",
    ],
    1,
    "Stromstärke wird in Reihe gemessen, damit derselbe Strom durch das Messgerät fließt.",
    "leicht",
    ["Amperemeter", "Strommessung"]
  ),
  q(
    "ph-pool-13-020",
    KAP[4],
    "Die durchschnittliche Bindungsenergie pro Nukleon:",
    [
      "ist für alle Kerne gleich",
      "steigt mit der Massenzahl monoton an",
      "ist bei mittleren Massenzahlen (um Eisen) am größten",
      "ist bei Uran am größten",
      "ist bei Wasserstoff am größten",
    ],
    2,
    "Bindungsenergie pro Nukleon hat ein Maximum bei mittleren Kernen (Eisen/Nickel).",
    "mittel",
    ["Bindungsenergie", "Kernphysik"]
  ),
  q(
    "ph-pool-13-021",
    KAP[0],
    "Bei gleichmäßig beschleunigter Bewegung aus dem Stand gilt für den Weg s:",
    ["s = v · t", "s = ½ a · t²", "s = a / t", "s = v² · t", "s = a · v"],
    1,
    "s = ½ a t² bei v₀ = 0 (gleichmäßig beschleunigte Bewegung).",
    "leicht",
    ["Beschleunigung", "Bewegung"]
  ),
  q(
    "ph-pool-13-022",
    KAP[1],
    "Die Intensität einer ebenen Welle ist proportional zu:",
    [
      "der Frequenz",
      "dem Quadrat der Amplitude",
      "der Wellenlänge",
      "der Ausbreitungsgeschwindigkeit",
      "1/f",
    ],
    1,
    "Intensität I ∝ A² (Energie pro Zeit und Fläche).",
    "mittel",
    ["Intensität", "Amplitude"]
  ),
  q(
    "ph-pool-13-023",
    KAP[2],
    "Adiabatisch bedeutet:",
    [
      "bei konstanter Temperatur",
      "ohne Wärmeaustausch mit der Umgebung",
      "bei konstantem Druck",
      "bei konstantem Volumen",
      "reversibel",
    ],
    1,
    "Adiabatisch: dQ = 0, kein Wärmeaustausch.",
    "mittel",
    ["adiabatisch", "Thermodynamik"]
  ),
  q(
    "ph-pool-13-024",
    KAP[3],
    "Die Lorentzkraft wirkt auf eine bewegte Ladung in einem Magnetfeld:",
    [
      "immer in Bewegungsrichtung",
      "senkrecht zur Bewegungsrichtung und senkrecht zum Magnetfeld",
      "nur bei positiven Ladungen",
      "nur bei Gleichstrom",
      "in Richtung des Magnetfelds",
    ],
    1,
    "Lorentzkraft F = q · v × B (senkrecht zu v und B).",
    "mittel",
    ["Lorentzkraft", "Magnetfeld"]
  ),
  q(
    "ph-pool-13-025",
    KAP[4],
    "Welche Teilchen sind bei der Kernfusion beteiligt?",
    [
      "nur schwere Kerne",
      "leichte Kerne (z. B. Deuterium, Tritium)",
      "nur Neutronen",
      "nur Elektronen",
      "nur Photonen",
    ],
    1,
    "Kernfusion: leichte Kerne verschmelzen (z. B. D + T → He + n); Energie wird freigesetzt.",
    "mittel",
    ["Kernfusion", "Kernphysik"]
  ),
  q(
    "ph-pool-13-026",
    KAP[0],
    "Der Drehimpuls L eines Massenpunktes auf einer Kreisbahn ist:",
    [
      "L = m · v",
      "L = m · v · r (bei Kreisbahn)",
      "L = I · ω nur bei Scheiben",
      "L = F · r",
      "L = p / r",
    ],
    1,
    "Drehimpuls bei Kreisbahn: L = m · v · r = I · ω.",
    "mittel",
    ["Drehimpuls", "Kreisbewegung"]
  ),
  q(
    "ph-pool-13-027",
    KAP[1],
    "Dispersion bedeutet bei Licht:",
    [
      "Reflexion an einer Grenzfläche",
      "Abhängigkeit der Brechung von der Wellenlänge (Farbzerlegung)",
      "Totalreflexion",
      "Absorption",
      "Polarisation",
    ],
    1,
    "Dispersion: n(λ) unterschiedlich → Regenbogen, Prisma.",
    "mittel",
    ["Dispersion", "Optik"]
  ),
  q(
    "ph-pool-13-028",
    KAP[2],
    "Der Dampfdruck einer Flüssigkeit:",
    [
      "ist unabhängig von der Temperatur",
      "steigt mit der Temperatur",
      "ist immer gleich dem Umgebungsdruck",
      "ist nur bei Siedetemperatur definiert",
      "sinkt mit der Temperatur",
    ],
    1,
    "Dampfdruck nimmt mit steigender Temperatur zu (Clausius-Clapeyron).",
    "mittel",
    ["Dampfdruck", "Phasenübergang"]
  ),
  q(
    "ph-pool-13-029",
    KAP[3],
    "Die magnetische Flussdichte B wird in … gemessen.",
    ["Henry", "Weber", "Tesla (T)", "Farad", "Ohm"],
    2,
    "Magnetische Flussdichte B in Tesla (T). 1 T = 1 N/(A·m).",
    "leicht",
    ["Tesla", "Magnetfeld"]
  ),
  q(
    "ph-pool-13-030",
    KAP[4],
    "Die Äquivalentdosis (Strahlenschutz) wird in … angegeben.",
    ["Becquerel", "Gray", "Sievert (Sv)", "Curie", "Coulomb"],
    2,
    "Äquivalentdosis H in Sievert (Sv); berücksichtigt biologisch wirksame Dosis.",
    "mittel",
    ["Sievert", "Strahlenschutz"]
  ),
  q(
    "ph-pool-13-031",
    KAP[0],
    "Das Trägheitsgesetz (1. Newtonsches Gesetz) besagt:",
    [
      "F = m · a",
      "Körper bleiben in Ruhe oder gleichförmiger Bewegung, wenn keine Kraft wirkt",
      "actio = reactio",
      "F = G · m₁·m₂/r²",
      "p = m · v",
    ],
    1,
    "1. Newton: Ohne resultierende Kraft bleibt der Bewegungszustand erhalten.",
    "leicht",
    ["Trägheitsgesetz", "Newton"]
  ),
  q(
    "ph-pool-13-032",
    KAP[1],
    "Der Dopplereffekt bei Schall beschreibt:",
    [
      "die Beugung an Hindernissen",
      "die Frequenzänderung bei Bewegung von Quelle und/oder Beobachter",
      "Resonanz",
      "stehende Wellen",
      "Dämpfung",
    ],
    1,
    "Dopplereffekt: wahrgenommene Frequenz ändert sich durch Relativbewegung.",
    "mittel",
    ["Dopplereffekt", "Schall"]
  ),
  q(
    "ph-pool-13-033",
    KAP[2],
    "Ein ideales Gas besteht aus:",
    [
      "teilweise leitenden Teilchen",
      "punktförmigen Teilchen ohne Eigenvolumen mit elastischen Stößen",
      "Teilchen mit starken Wechselwirkungen",
      "nur Elektronen",
      "Teilchen mit konstanter Geschwindigkeit",
    ],
    1,
    "Ideales Gas: punktförmige Teilchen, keine WW außer bei Stößen, elastische Stöße.",
    "mittel",
    ["ideales Gas", "Modell"]
  ),
  q(
    "ph-pool-13-034",
    KAP[3],
    "Die elektrische Feldstärke E hat die Einheit:",
    ["Coulomb", "Volt pro Meter (V/m)", "Newton", "Tesla", "Ampere"],
    1,
    "E = F/q → [E] = N/C = V/m.",
    "leicht",
    ["Feldstärke", "E-Lehre"]
  ),
  q(
    "ph-pool-13-035",
    KAP[4],
    "Ein Geiger-Müller-Zählrohr dient zum Nachweis von:",
    [
      "nur Alpha-Strahlung",
      "ionisierender Strahlung (Alpha, Beta, Gamma)",
      "nur sichtbarem Licht",
      "nur Röntgenstrahlung",
      "Ultraschall",
    ],
    1,
    "GM-Zählrohr: Nachweis ionisierender Strahlung durch Gasverstärkung.",
    "leicht",
    ["Geiger-Müller", "Strahlungsmessung"]
  ),
  q(
    "ph-pool-13-036",
    KAP[0],
    "Die Winkelgeschwindigkeit ω bei gleichförmiger Kreisbewegung:",
    ["ω = v · r", "ω = v / r", "ω = 2π · f", "B und C sind richtig", "nur B"],
    3,
    "ω = v/r und ω = 2πf = 2π/T.",
    "mittel",
    ["Winkelgeschwindigkeit", "Kreisbewegung"]
  ),
  q(
    "ph-pool-13-037",
    KAP[1],
    "Ein Konvexspiegel (Zerstreuungsspiegel):",
    [
      "erzeugt nur reelle Bilder",
      "erzeugt nur virtuelle, verkleinerte Bilder",
      "hat eine negative Brennweite",
      "B und C sind richtig",
      "vergrößert immer",
    ],
    3,
    "Konvexspiegel: Zerstreuungsspiegel, f < 0, virtuelles, verkleinertes Bild.",
    "mittel",
    ["Konvexspiegel", "Optik"]
  ),
  q(
    "ph-pool-13-038",
    KAP[2],
    "Die allgemeine Gasgleichung p · V = n · R · T enthält die Gaskonstante R. Was ist n?",
    ["Druck", "Volumen", "Stoffmenge in mol", "Temperatur in °C", "Masse in kg"],
    2,
    "n = Stoffmenge in Mol (mol). R ≈ 8,314 J/(mol·K).",
    "leicht",
    ["Stoffmenge", "Gasgleichung"]
  ),
  q(
    "ph-pool-13-039",
    KAP[3],
    "Ein Voltmeter wird zur Spannungsmessung:",
    [
      "in Reihe geschaltet",
      "parallel zum Verbraucher (bzw. zur Messstrecke) geschaltet",
      "nur bei Gleichspannung verwendet",
      "gar nicht angeschlossen",
      "in Reihe mit der Stromquelle geschaltet",
    ],
    1,
    "Spannung = Potentialdifferenz → Voltmeter parallel zur Messstrecke.",
    "leicht",
    ["Voltmeter", "Spannungsmessung"]
  ),
  q(
    "ph-pool-13-040",
    KAP[4],
    "Die charakteristische Röntgenstrahlung entsteht durch:",
    [
      "Kernzerfall",
      "Übergänge von Elektronen in inneren Schalen (z. B. K-Schale)",
      "nur Bremsstrahlung",
      "Fusion",
      "Compton-Streuung",
    ],
    1,
    "Charakteristische Röntgenstrahlung: Elektronenübergänge in inneren Schalen (Kα, Kβ etc.).",
    "mittel",
    ["Röntgen", "charakteristische Strahlung"]
  ),
  q(
    "ph-pool-13-041",
    KAP[0],
    "Der Wirkungsgrad einer Maschine ist definiert als:",
    [
      "zugeführte Leistung / abgegebene Leistung",
      "Nutzleistung / zugeführte Leistung (bzw. Nutzarbeit / zugeführte Arbeit)",
      "abgegebene Wärme / zugeführte Arbeit",
      "immer 1",
      "Verlustleistung / Nutzleistung",
    ],
    1,
    "η = P_nutz / P_zu = W_nutz / W_zu (immer < 1 bei realen Maschinen).",
    "leicht",
    ["Wirkungsgrad", "Energie"]
  ),
  q(
    "ph-pool-13-042",
    KAP[1],
    "Bei einer Konkavlinse (Zerstreuungslinse):",
    [
      "ist die Brennweite positiv",
      "ist die Brennweite negativ",
      "werden nur reelle Bilder erzeugt",
      "gibt es keine Brennweite",
      "ist die Linse immer dicker in der Mitte",
    ],
    1,
    "Zerstreuungslinse: f < 0; paralleles Licht wird zerstreut.",
    "mittel",
    ["Zerstreuungslinse", "Linse"]
  ),
  q(
    "ph-pool-13-043",
    KAP[2],
    "Der zweite Hauptsatz der Thermodynamik besagt unter anderem:",
    [
      "Energie ist erhalten",
      "in einem abgeschlossenen System nimmt die Entropie bei irreversiblen Prozessen zu",
      "der absolute Nullpunkt ist 0 °C",
      "Wärme kann beliebig in Arbeit umgewandelt werden",
      "Entropie bleibt immer konstant",
    ],
    1,
    "2. Hauptsatz: Entropie nimmt bei irreversiblen Prozessen zu; nicht alle Wärme ist in Arbeit umwandelbar.",
    "mittel",
    ["2. Hauptsatz", "Entropie"]
  ),
  q(
    "ph-pool-13-044",
    KAP[3],
    "Selbstinduktion in einer Spule bedeutet:",
    [
      "der Widerstand nimmt mit dem Strom zu",
      "eine Änderung des Stroms induziert eine Spannung in der Spule",
      "der Strom ist immer konstant",
      "es gibt keine magnetische Kopplung",
      "die Induktivität ist null",
    ],
    1,
    "U_ind = −L · dI/dt (Lenzsche Regel: Induktion wirkt der Änderung entgegen).",
    "mittel",
    ["Selbstinduktion", "Spule"]
  ),
  q(
    "ph-pool-13-045",
    KAP[4],
    "Welche Aussage zu Neutronen trifft zu?",
    [
      "Neutronen sind positiv geladen.",
      "Neutronen haben keine elektrische Ladung und eine Masse ähnlich dem Proton.",
      "Neutronen sind leichter als Elektronen.",
      "Neutronen existieren nur im Kern.",
      "Neutronen haben die Masse eines Elektrons.",
    ],
    1,
    "Neutron: neutral (Ladung 0), Masse ≈ 1 u (etwa wie Proton).",
    "leicht",
    ["Neutron", "Kernphysik"]
  ),
  q(
    "ph-pool-13-046",
    KAP[0],
    "Die Zentripetalbeschleunigung a_z bei einer Kreisbewegung mit Radius r und Geschwindigkeit v beträgt:",
    ["a_z = v · r", "a_z = v² / r", "a_z = v / r", "a_z = r / v", "a_z = v² · r"],
    1,
    "a_z = v²/r (zeigt zum Zentrum).",
    "mittel",
    ["Zentripetalbeschleunigung", "Kreisbewegung"]
  ),
  q(
    "ph-pool-13-047",
    KAP[1],
    "Ein Schwingkreis besteht aus:",
    [
      "nur Widerstand und Kondensator",
      "Spule und Kondensator (LC-Kreis)",
      "nur Spule",
      "nur Kondensator",
      "Batterie und Widerstand",
    ],
    1,
    "Idealer Schwingkreis: L und C; elektromagnetische Schwingung mit ω = 1/√(LC).",
    "mittel",
    ["Schwingkreis", "E-Lehre"]
  ),
  q(
    "ph-pool-13-048",
    KAP[2],
    "Der Tripelpunkt eines Stoffes ist:",
    [
      "der Siedepunkt bei Normaldruck",
      "der Punkt, an dem fest, flüssig und gasförmig koexistieren",
      "der Schmelzpunkt",
      "der kritische Punkt",
      "immer bei 0 °C",
    ],
    1,
    "Tripelpunkt: einzige Temperatur/Druck-Kombination, bei der alle drei Phasen im Gleichgewicht sind.",
    "mittel",
    ["Tripelpunkt", "Phasendiagramm"]
  ),
  q(
    "ph-pool-13-049",
    KAP[3],
    "Ein Diode lässt Strom im Idealfall:",
    [
      "in beide Richtungen gleich gut fließen",
      "nur in einer Richtung (Durchlassrichtung) fließen",
      "gar nicht fließen",
      "nur Wechselstrom fließen",
      "nur bei sehr hoher Spannung fließen",
    ],
    1,
    "Diode: p-n-Übergang, Strom nur in Durchlassrichtung.",
    "leicht",
    ["Diode", "Halbleiter"]
  ),
  q(
    "ph-pool-13-050",
    KAP[4],
    "Die Massendefekt bei einem Kern ist:",
    [
      "die Masse des Kerns",
      "die Differenz zwischen der Summe der Nukleonenmassen und der Kernmasse (Bindungsenergie/c²)",
      "die Neutronenzahl",
      "die Protonenzahl",
      "immer null",
    ],
    1,
    "Massendefekt Δm: Ruhemasse der Nukleonen minus Kernmasse; entspricht Bindungsenergie (E = Δm·c²).",
    "schwer",
    ["Massendefekt", "Bindungsenergie"]
  ),
  q(
    "ph-pool-13-051",
    KAP[0],
    "Reibung zwischen zwei festen Oberflächen nennt man:",
    [
      "Rollreibung",
      "Gleitreibung oder Haftreibung",
      "Strömungswiderstand",
      "Luftreibung",
      "Viskosität",
    ],
    1,
    "Gleitreibung (Bewegung) und Haftreibung (Ruhe) zwischen Festkörpern.",
    "leicht",
    ["Reibung", "Mechanik"]
  ),
  q(
    "ph-pool-13-052",
    KAP[1],
    "Die Schallintensität wird in … angegeben.",
    ["Hz", "dB (Dezibel) für den Pegel; W/m² für die Intensität", "m/s", "Pa", "N"],
    1,
    "Intensität I in W/m²; Schallpegel L in dB (logarithmische Skala).",
    "mittel",
    ["Schallintensität", "Dezibel"]
  ),
  q(
    "ph-pool-13-053",
    KAP[2],
    "Ein Kühlschrank entzieht dem Innenraum Wärme und gibt sie nach außen ab. Dafür ist nötig:",
    [
      "keine Energie, es geschieht von selbst",
      "Arbeit (elektrische Energie), um Wärme von kalt nach warm zu pumpen",
      "nur Wärme von außen",
      "nur Konvektion",
      "kein zweiter Hauptsatz",
    ],
    1,
    "Kühlschrank: Arbeit wird zugeführt, um Wärme von innen (kalt) nach außen (warm) zu transportieren.",
    "mittel",
    ["Kühlschrank", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-13-054",
    KAP[3],
    "Der Wechselstromwiderstand (Scheinwiderstand) einer idealen Spule ist:",
    ["R (Ohm)", "X_L = ω · L (induktiver Blindwiderstand)", "1/(ωC)", "null", "immer konstant"],
    1,
    "Blindwiderstand der Spule: X_L = ω·L (ω = Kreisfrequenz).",
    "mittel",
    ["Blindwiderstand", "Wechselstrom"]
  ),
  q(
    "ph-pool-13-055",
    KAP[4],
    "Ein Nuklid wird symbolisch geschrieben als ᴬ_Z X. Was bedeutet A?",
    [
      "Ordnungszahl (Protonenzahl)",
      "Massenzahl (Protonen + Neutronen)",
      "Neutronenzahl",
      "Elektronenzahl",
      "Ladung",
    ],
    1,
    "A = Massenzahl (Nukleonenzahl), Z = Ordnungszahl (Protonenzahl).",
    "leicht",
    ["Nuklid", "Schreibweise"]
  ),
  q(
    "ph-pool-13-056",
    KAP[0],
    "Ein Körper schwebt im Wasser, wenn:",
    [
      "seine Dichte größer als die des Wassers ist",
      "seine Dichte gleich der des Wassers ist (Auftrieb = Gewicht)",
      "seine Masse null ist",
      "er kein Volumen hat",
      "die Auftriebskraft kleiner als die Gewichtskraft ist",
    ],
    1,
    "Schweben: ρ_Körper = ρ_Flüssigkeit → Auftrieb = Gewichtskraft.",
    "mittel",
    ["Auftrieb", "Schweben"]
  ),
  q(
    "ph-pool-13-057",
    KAP[1],
    "Die Kohärenz von Licht bedeutet:",
    [
      "hohe Intensität",
      "feste Phasenbeziehung zwischen Wellen (z. B. für Interferenz)",
      "nur eine Wellenlänge",
      "Polarisation",
      "geringe Frequenz",
    ],
    1,
    "Kohärent: feste Phasenbeziehung; nötig für stabile Interferenz (z. B. Laser).",
    "mittel",
    ["Kohärenz", "Interferenz"]
  ),
  q(
    "ph-pool-13-058",
    KAP[2],
    "Die Wärmeleitung in Metallen erfolgt vor allem durch:",
    [
      "nur Gitterschwingungen",
      "freie Elektronen und Gitterschwingungen",
      "nur Konvektion",
      "nur Strahlung",
      "nur an der Oberfläche",
    ],
    1,
    "Metalle: gute Wärmeleitung durch freie Elektronen und Phononen.",
    "mittel",
    ["Wärmeleitung", "Metalle"]
  ),
  q(
    "ph-pool-13-059",
    KAP[3],
    "Ein galvanisches Element (Batterie) wandelt um:",
    [
      "elektrische Energie in chemische",
      "chemische Energie in elektrische",
      "Wärme in Strom",
      "Licht in Strom",
      "nur Gleichstrom in Wechselstrom",
    ],
    1,
    "Galvanisches Element: chemische Reaktion liefert elektrische Energie (Redox).",
    "leicht",
    ["Batterie", "galvanisches Element"]
  ),
  q(
    "ph-pool-13-060",
    KAP[4],
    "Die Reichweite von Beta-Minus-Teilchen in Luft beträgt typischerweise:",
    [
      "wenige Zentimeter",
      "einige Meter",
      "viele Meter bis einige zehn Meter",
      "nur Mikrometer",
      "unendlich",
    ],
    2,
    "β⁻-Teilchen: Reichweite in Luft einige Meter (je nach Energie); in Gewebe mm bis cm.",
    "mittel",
    ["Beta-Strahlung", "Reichweite"]
  ),
];
