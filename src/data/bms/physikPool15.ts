/**
 * Physik BMS Pool 15 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const physikPool15: Question[] = [
  q(
    "ph-pool-15-001",
    KAP[0],
    "Welche SI-Einheit gehört zur Länge?",
    ["Meter (m)", "Kilogramm", "Sekunde", "Kelvin", "Ampere"],
    0,
    "Meter (m) ist die SI-Basiseinheit für die Länge.",
    "leicht",
    ["SI", "Länge"]
  ),
  q(
    "ph-pool-15-002",
    KAP[1],
    "Die Ausbreitungsgeschwindigkeit von Schall in Stahl ist … als in Luft.",
    ["kleiner", "größer", "gleich", "unbestimmt", "nur bei 0 °C größer"],
    1,
    "Schall breitet sich in Festkörpern schneller aus (Stahl ca. 5000 m/s).",
    "leicht",
    ["Schall", "Festkörper"]
  ),
  q(
    "ph-pool-15-003",
    KAP[2],
    "Die Einheit der spezifischen Wärmekapazität c ist:",
    ["J", "J/(kg·K)", "J/K", "kg/J", "W/s"],
    1,
    "c in J/(kg·K); Q = m·c·ΔT.",
    "leicht",
    ["spezifische Wärmekapazität", "Einheit"]
  ),
  q(
    "ph-pool-15-004",
    KAP[3],
    "Ein Ohm (Ω) ist gleich:",
    ["1 V·A", "1 V/A", "1 A/V", "1 C/V", "1 J/A"],
    1,
    "R = U/I → 1 Ω = 1 V/A.",
    "leicht",
    ["Ohm", "Einheit"]
  ),
  q(
    "ph-pool-15-005",
    KAP[4],
    "Welche Teilchen haben keine elektrische Ladung?",
    ["Proton und Elektron", "Neutron und Neutrino", "Alpha-Teilchen", "Positron", "Elektron"],
    1,
    "Neutron und Neutrino sind elektrisch neutral.",
    "leicht",
    ["Neutron", "Ladung"]
  ),
  q(
    "ph-pool-15-006",
    KAP[0],
    "Die Beschleunigung bei gleichmäßig beschleunigter geradliniger Bewegung ist:",
    [
      "proportional zum Weg",
      "konstant",
      "proportional zur Zeit im Quadrat",
      "null",
      "rückwärts gerichtet zur Geschwindigkeit",
    ],
    1,
    "Gleichmäßig beschleunigt: a = const.",
    "leicht",
    ["Beschleunigung", "Bewegung"]
  ),
  q(
    "ph-pool-15-007",
    KAP[1],
    "Eine stehende Welle entsteht durch:",
    [
      "nur eine einlaufende Welle",
      "Überlagerung von hin- und rücklaufender Welle (z. B. an Reflexion)",
      "nur Dämpfung",
      "nur Resonanz",
      "nur Beugung",
    ],
    1,
    "Stehende Welle: Reflexion + Überlagerung; Knoten und Bäuche.",
    "mittel",
    ["stehende Welle", "Reflexion"]
  ),
  q(
    "ph-pool-15-008",
    KAP[2],
    "Der Wärmeausdehnungskoeffizient gibt an:",
    [
      "die Wärmemenge",
      "die relative Längenänderung pro Temperaturänderung",
      "die spezifische Wärmekapazität",
      "den Schmelzpunkt",
      "die Wärmeleitfähigkeit",
    ],
    1,
    "ΔL/L₀ = α·ΔT (linearer Ausdehnungskoeffizient α).",
    "mittel",
    ["Wärmeausdehnung", "Temperatur"]
  ),
  q(
    "ph-pool-15-009",
    KAP[3],
    "Die Gesamtkapazität zweier Kondensatoren in Reihe ist:",
    [
      "C₁ + C₂",
      "kleiner als die kleinste Einzelkapazität",
      "1/C_ges = 1/C₁ + 1/C₂ (C_ges kleiner als kleinste)",
      "gleich dem arithmetischen Mittel",
      "C₁ · C₂",
    ],
    2,
    "Reihenschaltung Kondensatoren: 1/C_ges = 1/C₁ + 1/C₂.",
    "mittel",
    ["Kondensatoren", "Reihe"]
  ),
  q(
    "ph-pool-15-010",
    KAP[4],
    "Die natürliche Radioaktivität wurde entdeckt an:",
    ["Röntgenstrahlung", "Uran (Becquerel)", "künstlichen Kernen", "Licht", "Wärme"],
    1,
    "Becquerel entdeckte 1896 die Strahlung des Urans.",
    "leicht",
    ["Radioaktivität", "Geschichte"]
  ),
  q(
    "ph-pool-15-011",
    KAP[0],
    "Die Einheit des Drehmoments M ist:",
    ["N", "N·m", "J/s", "kg·m", "m/s²"],
    1,
    "M = F·r (Kraft mal Hebelarm); [M] = N·m.",
    "leicht",
    ["Drehmoment", "Einheit"]
  ),
  q(
    "ph-pool-15-012",
    KAP[1],
    "Der Brechungswinkel bei Übergang Licht von Luft in Wasser:",
    [
      "ist immer 90°",
      "ist kleiner als der Einfallswinkel (Licht zum Lot gebrochen)",
      "ist größer als der Einfallswinkel",
      "ist immer gleich dem Einfallswinkel",
      "hängt nicht vom Brechungsindex ab",
    ],
    1,
    "Luft → Wasser (n größer): Licht wird zum Lot gebrochen; β < α.",
    "mittel",
    ["Brechung", "Snellius"]
  ),
  q(
    "ph-pool-15-013",
    KAP[2],
    "Die absolute Temperatur T (in Kelvin) und die Celsius-Temperatur θ hängen zusammen:",
    ["T = θ − 273,15", "T = θ + 273,15", "T = θ · 1,8", "T = θ / 273,15", "T = θ"],
    1,
    "T(K) = θ(°C) + 273,15.",
    "leicht",
    ["Temperatur", "Kelvin"]
  ),
  q(
    "ph-pool-15-014",
    KAP[3],
    "Ein Widerstand von 10 Ω wird von einem Strom von 2 A durchflossen. Die Spannung beträgt:",
    ["5 V", "20 V", "8 V", "12 V", "0,2 V"],
    1,
    "U = R·I = 10 Ω · 2 A = 20 V.",
    "leicht",
    ["Ohmsches Gesetz", "Rechnung"]
  ),
  q(
    "ph-pool-15-015",
    KAP[4],
    "Die Massenzahl A minus Ordnungszahl Z ergibt:",
    [
      "die Protonenzahl",
      "die Neutronenzahl N",
      "die Elektronenzahl",
      "die Bindungsenergie",
      "die Halbwertszeit",
    ],
    1,
    "A − Z = N (Neutronenzahl).",
    "leicht",
    ["Massenzahl", "Neutronenzahl"]
  ),
  q(
    "ph-pool-15-016",
    KAP[0],
    "Die Haftreibung zwischen zwei Oberflächen:",
    [
      "wirkt nur bei Bewegung",
      "verhindert das Gleiten bis zu einem Maximalwert",
      "ist immer null",
      "ist unabhängig von der Normalkraft",
      "ist immer größer als die Gleitreibung bei gleicher Normalkraft",
    ],
    1,
    "Haftreibung: bis F_max = μ_H·F_N bleibt Körper in Ruhe.",
    "mittel",
    ["Haftreibung", "Reibung"]
  ),
  q(
    "ph-pool-15-017",
    KAP[1],
    "Die Lichtgeschwindigkeit im Vakuum c beträgt etwa:",
    ["3·10⁶ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s", "340 m/s", "1500 m/s"],
    1,
    "c ≈ 2,998·10⁸ m/s ≈ 3·10⁸ m/s.",
    "leicht",
    ["Lichtgeschwindigkeit", "Vakuum"]
  ),
  q(
    "ph-pool-15-018",
    KAP[2],
    "Ein Kühlschrank gibt Wärme ab:",
    [
      "nur an den Innenraum",
      "an die Umgebung (Rückseite/Verflüssiger)",
      "gar nicht",
      "nur durch Strahlung",
      "nur bei 0 °C",
    ],
    1,
    "Kühlschrank: Wärme wird aus dem Innenraum nach außen abgegeben.",
    "leicht",
    ["Kühlschrank", "Wärmeabgabe"]
  ),
  q(
    "ph-pool-15-019",
    KAP[3],
    "Die elektrische Energie, die ein Verbraucher mit Leistung P in der Zeit t aufnimmt, ist:",
    ["E = P · t", "E = P / t", "E = P + t", "E = t / P", "E = P − t"],
    0,
    "E = P · t (Energie = Leistung mal Zeit).",
    "leicht",
    ["elektrische Energie", "Leistung"]
  ),
  q(
    "ph-pool-15-020",
    KAP[4],
    "Ein Gamma-Quant hat gegenüber einem Alpha-Teilchen gleicher Energie:",
    [
      "größere Masse",
      "keine Ruhemasse (Photon)",
      "kleinere Reichweite in Materie",
      "größere Ladung",
      "langsamere Geschwindigkeit",
    ],
    1,
    "Photon (Gamma): Ruhemasse null, bewegt sich mit c.",
    "mittel",
    ["Photon", "Gamma"]
  ),
  q(
    "ph-pool-15-021",
    KAP[0],
    "Die Fallbeschleunigung g auf der Erdoberfläche beträgt etwa:",
    ["1 m/s²", "5 m/s²", "9,81 m/s²", "20 m/s²", "100 m/s²"],
    2,
    "g ≈ 9,81 m/s² (ortsabhängig).",
    "leicht",
    ["Fallbeschleunigung", "g"]
  ),
  q(
    "ph-pool-15-022",
    KAP[1],
    "Bei der Reflexion von Licht an einem ebenen Spiegel gilt:",
    [
      "Einfallswinkel = Reflexionswinkel",
      "Einfallswinkel = Brechungswinkel",
      "nur Totalreflexion",
      "keine Reflexion",
      "Licht wird absorbiert",
    ],
    0,
    "Reflexionsgesetz: α = α' (Einfallswinkel = Ausfallswinkel).",
    "leicht",
    ["Reflexion", "Spiegel"]
  ),
  q(
    "ph-pool-15-023",
    KAP[2],
    "Die Entropie S eines Systems nimmt bei irreversiblen Prozessen in einem abgeschlossenen System:",
    ["ab", "zu", "bleibt konstant", "wird null", "ist nicht definiert"],
    1,
    "2. Hauptsatz: Entropie nimmt bei irreversiblen Prozessen zu.",
    "mittel",
    ["Entropie", "2. Hauptsatz"]
  ),
  q(
    "ph-pool-15-024",
    KAP[3],
    "Die Richtung der magnetischen Feldlinien außerhalb eines Stabmagneten verläuft:",
    [
      "vom Südpol zum Nordpol",
      "vom Nordpol zum Südpol",
      "kreisförmig um den Magneten",
      "nur im Inneren",
      "gar nicht",
    ],
    1,
    "Feldlinien: außen vom Nord- zum Südpol.",
    "leicht",
    ["Magnetfeld", "Feldlinien"]
  ),
  q(
    "ph-pool-15-025",
    KAP[4],
    "Bei der Paarbildung entsteht aus einem Photon:",
    [
      "ein Neutron",
      "ein Elektron-Positron-Paar",
      "ein Alpha-Teilchen",
      "zwei Photonen",
      "ein Proton",
    ],
    1,
    "Paarbildung: γ → e⁺ + e⁻ (in Nähe eines Kerns).",
    "mittel",
    ["Paarbildung", "Photon"]
  ),
  q(
    "ph-pool-15-026",
    KAP[0],
    "Die potentielle Energie im Gravitationsfeld (allgemein) zweier Massen m₁, m₂ im Abstand r ist:",
    [
      "E = m·g·h",
      "E = −G·m₁·m₂/r (Konvention: null im Unendlichen)",
      "E = G·m₁·m₂·r",
      "E = m·v²/r",
      "E = F·r",
    ],
    1,
    "Gravitationspotential: E_pot = −G·m₁·m₂/r.",
    "schwer",
    ["Gravitation", "potentielle Energie"]
  ),
  q(
    "ph-pool-15-027",
    KAP[1],
    "Die Frequenz einer Schwingung und ihre Periodendauer T:",
    ["sind unabhängig", "f = 1/T", "f = T", "f = 2π·T", "f = T²"],
    1,
    "Frequenz f = 1/T (Einheit Hz).",
    "leicht",
    ["Frequenz", "Periodendauer"]
  ),
  q(
    "ph-pool-15-028",
    KAP[2],
    "Der Dampfdruck über einer Flüssigkeit im geschlossenen Gefäß:",
    [
      "steigt linear mit der Zeit",
      "stellt sich bei konstanter Temperatur auf einen konstanten Sättigungswert ein",
      "ist immer null",
      "ist unabhängig von der Temperatur",
      "ist immer gleich dem Außendruck",
    ],
    1,
    "Sättigungsdampfdruck: Gleichgewicht Verdampfen–Kondensieren.",
    "mittel",
    ["Dampfdruck", "Gleichgewicht"]
  ),
  q(
    "ph-pool-15-029",
    KAP[3],
    "Die Induktionsspannung in einer Spule ist proportional zu:",
    [
      "der Stromstärke",
      "der Änderungsrate der Stromstärke dI/dt",
      "dem Widerstand",
      "der Ladung",
      "der Zeit",
    ],
    1,
    "U_ind = −L·dI/dt (Selbstinduktion).",
    "mittel",
    ["Induktion", "Spule"]
  ),
  q(
    "ph-pool-15-030",
    KAP[4],
    "Die Einheit Becquerel (Bq) gibt an:",
    [
      "Energiedosis",
      "Aktivität (Zerfälle pro Sekunde)",
      "Äquivalentdosis",
      "Halblebenszeit",
      "Reichweite",
    ],
    1,
    "1 Bq = 1 Zerfall/s.",
    "leicht",
    ["Becquerel", "Aktivität"]
  ),
  q(
    "ph-pool-15-031",
    KAP[0],
    "Ein Körper der Masse 2 kg wird mit 3 m/s² beschleunigt. Die wirkende Kraft beträgt:",
    ["1,5 N", "6 N", "5 N", "2/3 N", "9 N"],
    1,
    "F = m·a = 2 kg · 3 m/s² = 6 N.",
    "leicht",
    ["Kraft", "Rechnung"]
  ),
  q(
    "ph-pool-15-032",
    KAP[1],
    "Die Wellenlänge λ von Licht der Frequenz f im Vakuum ist:",
    ["λ = c · f", "λ = c / f", "λ = f / c", "λ = c + f", "λ = c − f"],
    1,
    "c = λ·f → λ = c/f.",
    "leicht",
    ["Wellenlänge", "Licht"]
  ),
  q(
    "ph-pool-15-033",
    KAP[2],
    "Die Wärmeleitung durch eine Schicht ist bei größerer Schichtdicke:",
    [
      "größer",
      "kleiner (größerer Wärmewiderstand)",
      "gleich",
      "unbestimmt",
      "nur von der Fläche abhängig",
    ],
    1,
    "Wärmewiderstand ∝ Dicke → bei größerer Dicke weniger Wärmestrom.",
    "mittel",
    ["Wärmeleitung", "Dicke"]
  ),
  q(
    "ph-pool-15-034",
    KAP[3],
    "Ein galvanisches Element liefert Gleichspannung, weil:",
    [
      "Wechselstrom erzeugt wird",
      "eine chemische Redoxreaktion eine konstante Spannung liefert",
      "nur Wechselspannung entsteht",
      "der Innenwiderstand null ist",
      "keine Reaktion stattfindet",
    ],
    1,
    "Galvanisches Element: Redoxreaktion liefert Gleichspannung.",
    "leicht",
    ["galvanisches Element", "Gleichspannung"]
  ),
  q(
    "ph-pool-15-035",
    KAP[4],
    "Die Reichweite von Alpha-Strahlung in Luft beträgt typischerweise:",
    [
      "einige Meter",
      "viele Zentimeter bis wenige Meter",
      "nur wenige Zentimeter",
      "kilometerweit",
      "unendlich",
    ],
    2,
    "Alpha-Teilchen: Reichweite in Luft nur wenige cm.",
    "leicht",
    ["Alpha", "Reichweite"]
  ),
  q(
    "ph-pool-15-036",
    KAP[0],
    "Die kinetische Energie E_kin und der Impuls p eines Teilchens der Masse m hängen zusammen durch:",
    ["E_kin = p · m", "E_kin = p²/(2m)", "E_kin = p / m", "E_kin = p² · m", "E_kin = 2p · m"],
    1,
    "E_kin = p²/(2m) mit p = m·v.",
    "mittel",
    ["kinetische Energie", "Impuls"]
  ),
  q(
    "ph-pool-15-037",
    KAP[1],
    "Ein Interferenzminimum entsteht, wenn der Gangunterschied zweier Wellen beträgt:",
    ["0", "λ/2 (bzw. ungeradzahliges Vielfaches von λ/2)", "λ", "2λ", "λ/4"],
    1,
    "Destruktive Interferenz: Gangunterschied (2k+1)·λ/2.",
    "mittel",
    ["Interferenz", "Minimum"]
  ),
  q(
    "ph-pool-15-038",
    KAP[2],
    "Bei einer Wärmekraftmaschine wird Wärme aus einem heißen Reservoir genommen und teilweise in Arbeit umgewandelt. Der Rest:",
    [
      "geht als Wärme an ein kälteres Reservoir verloren",
      "wird gespeichert",
      "verschwindet",
      "wird in Masse umgewandelt",
      "geht als Licht verloren",
    ],
    0,
    "2. Hauptsatz: Abwärme muss an kälteres Reservoir abgegeben werden.",
    "mittel",
    ["Wärmekraftmaschine", "Abwärme"]
  ),
  q(
    "ph-pool-15-039",
    KAP[3],
    "Die Permeabilität μ₀ (magnetische Feldkonstante) hat die Einheit:",
    ["H/m (Henry pro Meter)", "F/m", "N·m", "T", "C"],
    0,
    "μ₀ in H/m; 4π·10⁻⁷ H/m.",
    "mittel",
    ["Permeabilität", "Konstante"]
  ),
  q(
    "ph-pool-15-040",
    KAP[4],
    "Die Zerfallsreihe von Uran-238 endet als stabiles Nuklid bei:",
    ["Blei-206", "Blei-208", "Blei-210", "Bismut", "Thorium"],
    0,
    "U-238-Reihe (4n+2) endet bei Pb-206.",
    "schwer",
    ["Zerfallsreihe", "Blei"]
  ),
  q(
    "ph-pool-15-041",
    KAP[0],
    "Die Fliehkraft (Zentrifugalkraft) in einem mitrotierenden Bezugssystem:",
    [
      "ist eine Trägheitskraft (Scheinkraft)",
      "wirkt nach außen",
      "A und B sind richtig",
      "ist eine echte Kraft",
      "existiert nicht",
    ],
    2,
    "Zentrifugalkraft: Trägheitskraft im rotierenden System; wirkt radial nach außen.",
    "mittel",
    ["Zentrifugalkraft", "Trägheitskraft"]
  ),
  q(
    "ph-pool-15-042",
    KAP[1],
    "Die Schallgeschwindigkeit in einem idealen Gas hängt ab von:",
    [
      "nur der Dichte",
      "der Temperatur und der Molmasse (c ∝ √(T/M))",
      "nur dem Druck",
      "nur der Frequenz",
      "der Amplitude",
    ],
    1,
    "c_Gas ∝ √(γ·R·T/M).",
    "mittel",
    ["Schallgeschwindigkeit", "Gas"]
  ),
  q(
    "ph-pool-15-043",
    KAP[2],
    "Die Wärme Q und die Arbeit W haben die gleiche Einheit:",
    [
      "Nein",
      "Ja, Joule (J)",
      "Q in Watt, W in Joule",
      "Q in Kelvin, W in Newton",
      "Q in Pa, W in J",
    ],
    1,
    "Beide in Joule (J) = N·m.",
    "leicht",
    ["Wärme", "Arbeit", "Einheit"]
  ),
  q(
    "ph-pool-15-044",
    KAP[3],
    "Ein idealer Transformator hat das Übersetzungsverhältnis U₁/U₂ = N₁/N₂. Bei N₂ > N₁:",
    [
      "wird die Spannung heruntertransformiert",
      "wird die Spannung hochtransformiert",
      "bleibt die Spannung gleich",
      "wird Gleichspannung erzeugt",
      "verschwindet der Strom",
    ],
    1,
    "U₂/U₁ = N₂/N₁; mehr Windungen auf der Sekundärseite → höhere Spannung.",
    "mittel",
    ["Transformator", "Hochspannung"]
  ),
  q(
    "ph-pool-15-045",
    KAP[4],
    "Die Strahlungsart mit der größten ionisierenden Wirkung pro Weglänge ist:",
    ["Gamma", "Beta", "Alpha", "Röntgen", "Neutronen (thermisch)"],
    2,
    "Alpha: hohe Ladung und Masse → starke Ionisation auf kurzer Strecke.",
    "mittel",
    ["Ionisation", "Alpha"]
  ),
  q(
    "ph-pool-15-046",
    KAP[0],
    "Der Stoß zweier Körper ist elastisch, wenn:",
    [
      "die kinetische Energie nicht erhalten bleibt",
      "die kinetische Gesamtenergie erhalten bleibt",
      "nur Impuls erhalten bleibt",
      "die Körper zusammenkleben",
      "keine Reibung wirkt",
    ],
    1,
    "Elastischer Stoß: Impuls und kinetische Energie erhalten.",
    "mittel",
    ["elastischer Stoß", "Energieerhaltung"]
  ),
  q(
    "ph-pool-15-047",
    KAP[1],
    "Ein Konkavspiegel (Sammelspiegel):",
    [
      "zerstreut paralleles Licht",
      "bündelt paralleles Licht in einen Brennpunkt",
      "hat keine Brennweite",
      "erzeugt nur virtuelle Bilder",
      "hat f < 0",
    ],
    1,
    "Konkavspiegel (Hohlspiegel): Sammelspiegel, f > 0.",
    "mittel",
    ["Konkavspiegel", "Optik"]
  ),
  q(
    "ph-pool-15-048",
    KAP[2],
    "Die Zustandsänderung mit konstantem Druck heißt:",
    ["isotherm", "isochor", "isentrop", "isobar", "adiabatisch"],
    3,
    "Isobar: p = const.",
    "leicht",
    ["isobar", "Zustandsänderung"]
  ),
  q(
    "ph-pool-15-049",
    KAP[3],
    "Die Dielektrizitätskonstante ε_r eines Materials:",
    [
      "ist immer 1",
      "ist ≥ 1 und beschreibt die Erhöhung der Kapazität gegenüber dem Vakuum",
      "ist immer 0",
      "hat die Einheit Farad",
      "ist nur für Metalle definiert",
    ],
    1,
    "C = ε₀·ε_r·A/d; ε_r ≥ 1 (Vakuum: ε_r = 1).",
    "mittel",
    ["Dielektrikum", "Kapazität"]
  ),
  q(
    "ph-pool-15-050",
    KAP[4],
    "Ein instabiler Kern kann durch Beta-Minus-Zerfall zerfallen, wenn:",
    [
      "die Bindungsenergie des Tochterkerns geringer ist",
      "die Masse des Mutterkerns größer als die des Tochterkerns plus Elektron ist",
      "nur Alpha-Zerfall möglich ist",
      "der Kern keine Neutronen hat",
      "die Ordnungszahl 82 ist",
    ],
    1,
    "β⁻-Zerfall energetisch möglich, wenn m(Mutter) > m(Tochter) + m(e⁻).",
    "schwer",
    ["Beta-Zerfall", "Massenvergleich"]
  ),
  q(
    "ph-pool-15-051",
    KAP[0],
    "Die Wurfparabel beim schiefen Wurf entsteht durch:",
    [
      "nur horizontale Bewegung",
      "Überlagerung von gleichförmiger horizontaler und gleichmäßig beschleunigter vertikaler Bewegung",
      "nur vertikale Bewegung",
      "Kreisbewegung",
      "konstante Beschleunigung in Wurfrichtung",
    ],
    1,
    "Schiefer Wurf: v_x = const, v_y = v_y0 − g·t; Bahn = Parabel.",
    "mittel",
    ["schiefer Wurf", "Parabel"]
  ),
  q(
    "ph-pool-15-052",
    KAP[1],
    "Die Schwingungsenergie eines harmonischen Oszillators ist proportional zu:",
    ["der Frequenz", "dem Quadrat der Amplitude", "der Masse allein", "der Zeit", "der Dämpfung"],
    1,
    "E ∝ A² (bei harmonischer Schwingung).",
    "mittel",
    ["Schwingungsenergie", "Amplitude"]
  ),
  q(
    "ph-pool-15-053",
    KAP[2],
    "Die Verdampfungsenthalpie ist:",
    [
      "die Temperatur beim Sieden",
      "die pro Mol (oder Masse) benötigte Wärme beim Verdampfen bei konstantem Druck",
      "die spezifische Wärmekapazität",
      "die Schmelzenthalpie",
      "null",
    ],
    1,
    "Verdampfungsenthalpie: Q pro Mol/Masse für flüssig → gasförmig.",
    "mittel",
    ["Verdampfungsenthalpie", "Phasenübergang"]
  ),
  q(
    "ph-pool-15-054",
    KAP[3],
    "Der Wechselstromwiderstand (Impedanz) eines Reihen-Schwingkreises aus L, C und R ist bei Resonanz:",
    ["maximal", "minimal (nur R wirkt)", "null", "unendlich", "gleich X_L"],
    1,
    "Resonanz: ωL = 1/(ωC) → Blindwiderstände heben sich auf; Z = R.",
    "mittel",
    ["Resonanz", "Schwingkreis"]
  ),
  q(
    "ph-pool-15-055",
    KAP[4],
    "Die Kernspaltung von U-235 wird durch … ausgelöst.",
    ["Alpha-Teilchen", "Neutronen", "Protonen", "Elektronen", "Photonen"],
    1,
    "U-235 spaltet nach Einfang eines thermischen Neutrons.",
    "leicht",
    ["Kernspaltung", "Neutron"]
  ),
  q(
    "ph-pool-15-056",
    KAP[0],
    "Die Reibungsarbeit wird typischerweise in … umgewandelt.",
    ["potentielle Energie", "kinetische Energie", "Wärme", "Licht", "elektrische Energie"],
    2,
    "Reibung: mechanische Energie → Wärme.",
    "leicht",
    ["Reibung", "Energieumwandlung"]
  ),
  q(
    "ph-pool-15-057",
    KAP[1],
    "Die Beugung von Licht an einem Einzelspalt führt zu:",
    [
      "keiner Ablenkung",
      "einem Beugungsmuster mit zentralem Maximum und Nebenmaxima",
      "nur Absorption",
      "nur Reflexion",
      "Totalreflexion",
    ],
    1,
    "Einzelspalt: Beugungsfigur mit Intensitätsmaxima und -minima.",
    "mittel",
    ["Beugung", "Einzelspalt"]
  ),
  q(
    "ph-pool-15-058",
    KAP[2],
    "Ein Prozess heißt reversibel, wenn:",
    [
      "er nur in einer Richtung abläuft",
      "er ohne bleibende Änderungen in Umgebung und System rückwärts durchlaufen werden kann",
      "die Entropie abnimmt",
      "Wärme nicht ausgetauscht wird",
      "er adiabatisch ist",
    ],
    1,
    "Reversibel: idealer Prozess, in beide Richtungen ohne Reständerung durchführbar.",
    "mittel",
    ["reversibel", "Thermodynamik"]
  ),
  q(
    "ph-pool-15-059",
    KAP[3],
    "Die elektrische Stromdichte j (Strom pro Fläche) hat die Einheit:",
    ["A", "A/m", "A/m²", "V/m", "C/m²"],
    2,
    "j = I/A → [j] = A/m².",
    "leicht",
    ["Stromdichte", "Einheit"]
  ),
  q(
    "ph-pool-15-060",
    KAP[4],
    "Die Lebensdauer τ eines radioaktiven Nuklids und die Zerfallskonstante λ hängen zusammen durch:",
    ["τ = λ", "τ = 1/λ", "τ = λ²", "τ = ln(2)/λ", "τ = λ/2"],
    1,
    "Mittlere Lebensdauer τ = 1/λ; T_½ = ln(2)/λ.",
    "mittel",
    ["Lebensdauer", "Zerfallskonstante"]
  ),
];
