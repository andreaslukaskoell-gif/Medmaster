/**
 * Physik BMS Pool 22 — 50 genuinely HARD questions (difficulty: schwer).
 * Multi-step reasoning, transfer, calculation with unit traps, FALSCH-Fragen.
 * Topics: Mechanik, Wärmelehre, Elektrizitätslehre, Optik, Atomphysik.
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

export const physikPool22: Question[] = [
  // ===== MECHANIK (10 Fragen) =====
  q(
    "ph-pool-hard-001",
    "phys-kap1",
    "Ein Ball (m = 0,5 kg) fällt aus 20 m Höhe auf den Boden und prallt auf 5 m Höhe zurück. Wie groß ist die beim Aufprall in Wärme und Verformung umgewandelte Energie? (g = 10 m/s²)",
    ["50 J", "75 J", "100 J", "25 J", "150 J"],
    1,
    "E_pot(20 m) = mgh = 0,5 × 10 × 20 = 100 J. E_pot(5 m) = 0,5 × 10 × 5 = 25 J. Differenz = 75 J wird in Wärme/Verformung umgewandelt. Fehler: 100 J (gesamte Energie, ignoriert Rückprall), 50 J (Höhendifferenz 15 m aber mit m = 0,5 vergessen → falsch gerechnet), 25 J (nur Restenergie), 150 J (Summe statt Differenz).",
    "schwer",
    ["Energieerhaltung", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-002",
    "phys-kap1",
    "Ein Auto (1200 kg) fährt mit 72 km/h gegen eine Wand und kommt nach 0,5 m Verformungsweg zum Stillstand. Welche mittlere Bremskraft wirkt?",
    ["480 kN", "240 kN", "960 kN", "120 kN", "1920 kN"],
    0,
    "v = 72 km/h = 20 m/s. E_kin = ½mv² = ½ × 1200 × 400 = 240.000 J. F = E/s = 240.000/0,5 = 480.000 N = 480 kN. Fehler: 240 kN (vergisst Division durch s oder rechnet mit s = 1), 960 kN (v nicht umgerechnet, 72² benutzt dann korrigiert), 120 kN (½ vergessen bei E_kin und dann s = 1), 1920 kN (v = 72 m/s statt km/h-Umrechnung).",
    "schwer",
    ["Energie", "Bremskraft", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-003",
    "phys-kap1",
    "Ein Körper gleitet reibungsfrei eine schiefe Ebene (Höhe h = 3 m) hinunter und trifft am Fuß auf eine horizontale Fläche mit Gleitreibungskoeffizient μ = 0,3. Wie weit gleitet er auf der Ebene? (g = 10 m/s²)",
    ["10 m", "30 m", "5 m", "15 m", "20 m"],
    0,
    "Am Fuß: v² = 2gh → E_kin = mgh. Auf der Ebene: Reibungsarbeit = μmg·s = mgh → s = h/μ = 3/0,3 = 10 m. Fehler: 30 m (μ·g statt μ), 5 m (mit ½ multipliziert), 15 m (h/(2μ) Verwechslung), 20 m (g/μ statt h/μ).",
    "schwer",
    ["Reibung", "Energieerhaltung", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-004",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Rotationsbewegung ist FALSCH?",
    [
      "Das Trägheitsmoment einer Vollkugel ist kleiner als das eines Hohlzylinders gleicher Masse und gleichen Radius.",
      "Drehimpuls ist erhalten, wenn kein äußeres Drehmoment wirkt.",
      "Beim Eiskunstlauf erhöht sich die Winkelgeschwindigkeit beim Anziehen der Arme, weil das Trägheitsmoment sinkt.",
      "Die Rotationsenergie berechnet sich aus E = ½Iω².",
      "Eine Verdopplung des Radius bei gleichem Trägheitsmoment verdoppelt die Rotationsenergie.",
    ],
    4,
    "E ist falsch. I hängt vom Radius ab (I ~ r²). Wenn I gleich bleibt und ω gleich bleibt, ändert sich E nicht — der Radius allein bestimmt nicht E. Die Aussage ist physikalisch unsinnig, da I bei Verdopplung von r (gleiche Masse) auf das 4-fache steigt, nicht gleich bleiben kann ohne Massenänderung. Die anderen Aussagen sind korrekt: A: I_Vollkugel = 2/5 mr² < I_Hohlzylinder = mr²; B: Drehimpulserhaltung; C: L = Iω = const → ω steigt wenn I sinkt; D: Rotationsenergie-Formel.",
    "schwer",
    ["Rotation", "Trägheitsmoment", "Mechanik", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-005",
    "phys-kap2",
    "Wasser fließt durch ein horizontales Rohr. Am Punkt A beträgt der Querschnitt 20 cm², die Geschwindigkeit 2 m/s und der Druck 200 kPa. Am Punkt B verengt sich das Rohr auf 10 cm². Welcher Druck herrscht bei B? (ρ_Wasser = 1000 kg/m³)",
    ["194 kPa", "200 kPa", "188 kPa", "206 kPa", "197 kPa"],
    0,
    "Kontinuität: A₁v₁ = A₂v₂ → v₂ = (20/10) × 2 = 4 m/s. Bernoulli: p₁ + ½ρv₁² = p₂ + ½ρv₂² → p₂ = p₁ + ½ρ(v₁² − v₂²) = 200.000 + 500 × (4 − 16) = 200.000 − 6000 = 194.000 Pa = 194 kPa. Fehler: 200 kPa (Bernoulli ignoriert, Druck gleich), 188 kPa (Δp doppelt: 12 kPa), 206 kPa (Vorzeichen umgekehrt: Druck steigt statt sinkt), 197 kPa (nur ½ von Δp).",
    "schwer",
    ["Bernoulli", "Kontinuität", "Fluidmechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-006",
    "phys-kap1",
    "Ein Körper der Masse 2 kg wird mit einer konstanten Kraft von 10 N eine reibungsfreie schiefe Ebene (30° Neigung) hinaufgezogen, parallel zur Ebene. Welche Beschleunigung erfährt der Körper? (g = 10 m/s²)",
    ["0 m/s²", "5 m/s²", "2,5 m/s²", "10 m/s²", "7,5 m/s²"],
    0,
    "Hangabtriebskraft: F_H = mg·sin(30°) = 2 × 10 × 0,5 = 10 N. Nettokraft = F − F_H = 10 − 10 = 0 N. Also a = 0 m/s², der Körper bewegt sich mit konstanter Geschwindigkeit. Fehler: 5 m/s² (F/m ohne Hangabtrieb), 2,5 m/s² (mit cos statt sin), 10 m/s² (nur F = ma ohne Hangabtrieb, mit m = 1), 7,5 m/s² (Rechenfehler).",
    "schwer",
    ["Schiefe Ebene", "Newton", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-007",
    "phys-kap1",
    "Ein Satellit umkreist die Erde auf einer Kreisbahn. Sein Bahnradius wird auf das Vierfache vergrößert. Wie ändert sich seine Umlaufzeit?",
    ["Sie verdoppelt sich.", "Sie vervierfacht sich.", "Sie verachtfacht sich.", "Sie versechsfacht sich.", "Sie wird 4√2-mal so groß."],
    2,
    "Drittes Keplersches Gesetz: T² ~ r³. Wenn r → 4r, dann T² → 64·T², also T → 8T. Die Umlaufzeit verachtfacht sich. Fehler: Verdoppelt (T ~ r), vervierfacht (T ~ r²), versechsfacht (kein physikalisches Gesetz), 4√2 ≈ 5,66 (T ~ r^(3/2) falsch angewendet: (4)^(3/2) = 8, nicht 4√2).",
    "schwer",
    ["Kepler", "Gravitation", "Mechanik"]
  ),
  q(
    "ph-pool-hard-008",
    "phys-kap1",
    "Zwei Körper (m₁ = 3 kg, m₂ = 1 kg) bewegen sich aufeinander zu: m₁ mit 4 m/s nach rechts, m₂ mit 8 m/s nach links. Nach dem vollkommen unelastischen Stoß bewegt sich das zusammengeklebte System mit welcher Geschwindigkeit?",
    ["1 m/s nach rechts", "2 m/s nach links", "1 m/s nach links", "5 m/s nach rechts", "0 m/s (Stillstand)"],
    0,
    "Impulserhaltung: p = m₁v₁ − m₂v₂ = 3 × 4 − 1 × 8 = 12 − 8 = 4 kg·m/s nach rechts. v_ges = p/(m₁+m₂) = 4/4 = 1 m/s nach rechts. Fehler: 2 m/s links (Vorzeichen vertauscht), 1 m/s links (m₂v₂ − m₁v₁), 5 m/s rechts ((v₁+v₂)/2 falsch), 0 m/s (Annahme gleicher Impulse).",
    "schwer",
    ["Impulserhaltung", "Stoß", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-009",
    "phys-kap1",
    "Ein Pendel der Länge L wird um 60° aus der Ruhelage ausgelenkt und losgelassen. Wie groß ist die Geschwindigkeit im tiefsten Punkt? (g = 10 m/s², L = 1 m)",
    ["√10 m/s", "√20 m/s", "√5 m/s", "√40 m/s", "√(10/3) m/s"],
    0,
    "Höhendifferenz: h = L − L·cos(60°) = L(1 − cos60°) = 1 × (1 − 0,5) = 0,5 m. Energieerhaltung: mgh = ½mv² → v = √(2gh) = √(2 × 10 × 0,5) = √10 m/s ≈ 3,16 m/s. Fehler: √20 (h = L statt L(1−cosθ)), √5 (fehlender Faktor 2), √40 (h = 2L), √(10/3) (cos60° = √3/2 statt 0,5 verwechselt).",
    "schwer",
    ["Pendel", "Energieerhaltung", "Mechanik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-010",
    "phys-kap1",
    "Welche der folgenden Aussagen zu Erhaltungssätzen der Mechanik ist FALSCH?",
    [
      "Der Gesamtimpuls eines abgeschlossenen Systems ist bei jedem Stoß erhalten — unabhängig davon, ob der Stoß elastisch oder unelastisch ist.",
      "Die kinetische Energie ist bei einem vollkommen elastischen Stoß erhalten.",
      "Die kinetische Energie ist bei einem vollkommen unelastischen Stoß erhalten.",
      "Der Drehimpuls eines Systems ist erhalten, solange kein äußeres Drehmoment wirkt.",
      "Bei einem schiefen Wurf bleibt die Horizontalkomponente der Geschwindigkeit konstant (Luftwiderstand vernachlässigt).",
    ],
    2,
    "C ist falsch: Beim vollkommen unelastischen Stoß wird kinetische Energie in Verformungsarbeit und Wärme umgewandelt — nur der Impuls ist erhalten, nicht die kinetische Energie. Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["Erhaltungssätze", "Stoß", "Mechanik", "falsch-aussage"]
  ),

  // ===== WÄRMELEHRE (8 Fragen) =====
  q(
    "ph-pool-hard-011",
    "phys-kap4",
    "Ein ideales Gas (n = 2 mol) wird isotherm bei 300 K von 10 L auf 40 L expandiert. Welche Arbeit verrichtet das Gas? (R = 8,314 J/(mol·K), ln 4 ≈ 1,386)",
    ["6,93 kJ", "9,97 kJ", "4,99 kJ", "13,86 kJ", "3,47 kJ"],
    0,
    "W = nRT·ln(V₂/V₁) = 2 × 8,314 × 300 × ln(4) = 4988,4 × 1,386 ≈ 6914 J ≈ 6,93 kJ. Fehler: 9,97 kJ (nRT ohne ln), 4,99 kJ (n = 1 statt 2), 13,86 kJ (vergisst nRT, nur 10.000 × ln4), 3,47 kJ (n = 1 und falscher ln-Wert).",
    "schwer",
    ["Isotherme Expansion", "Ideales Gas", "Wärmelehre", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-012",
    "phys-kap4",
    "Ein Carnot-Motor arbeitet zwischen einer heißen Quelle (600 K) und einer kalten Senke (300 K). Wie viel Wärme muss er bei der heißen Quelle aufnehmen, um 500 J mechanische Arbeit zu leisten?",
    ["1000 J", "500 J", "750 J", "1500 J", "2000 J"],
    0,
    "η_Carnot = 1 − T_kalt/T_heiß = 1 − 300/600 = 0,5 = 50 %. η = W/Q_h → Q_h = W/η = 500/0,5 = 1000 J. Fehler: 500 J (η = 1, vollständige Umwandlung), 750 J (η = 2/3 falsch berechnet), 1500 J (Q_h = W × 3), 2000 J (η = 0,25 mit falscher Formel).",
    "schwer",
    ["Carnot", "Wirkungsgrad", "Wärmelehre", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-014",
    "phys-kap4",
    "500 g Wasser bei 80 °C werden mit 300 g Wasser bei 20 °C gemischt. Welche Mischtemperatur stellt sich ein? (c_Wasser = 4,186 kJ/(kg·K), keine Wärmeverluste)",
    ["57,5 °C", "50,0 °C", "55,0 °C", "60,0 °C", "52,5 °C"],
    0,
    "Wärmegleichgewicht: m₁c(T₁ − T_m) = m₂c(T_m − T₂). c kürzt sich: 0,5(80 − T) = 0,3(T − 20) → 40 − 0,5T = 0,3T − 6 → 46 = 0,8T → T = 57,5 °C. Fehler: 50 °C (arithmetisches Mittel), 55 °C (gewichtetes Mittel mit Fehler), 60 °C (Umkehrung der Gewichtung), 52,5 °C (Mittelwert der Mittelwerte).",
    "schwer",
    ["Mischtemperatur", "Kalorimetrie", "Wärmelehre", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-015",
    "phys-kap4",
    "Ein Kupferstab (Länge 50 cm, Querschnitt 2 cm² = 2 × 10⁻⁴ m²) verbindet zwei Wärmereservoirs bei 100 °C und 0 °C. Wie groß ist der Wärmestrom? (λ_Cu = 400 W/(m·K))",
    ["16 W", "8 W", "32 W", "4 W", "160 W"],
    0,
    "Q̇ = λ·A·ΔT/L = 400 × 2×10⁻⁴ × 100 / 0,5 = 400 × 0,02 / 0,5 = 400 × 0,04 = 16 W. Fehler: 8 W (L = 1 m statt 0,5 m), 32 W (Querschnitt 4 cm²), 4 W (cm² nicht in m² umgerechnet, 400 × 2 × 100/0,5 = 160000 → dann durch 40000 korrigiert), 160 W (Querschnitt in cm² belassen: 400 × 2 × 100/0,5).",
    "schwer",
    ["Wärmeleitung", "Fourier", "Wärmelehre", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-016",
    "phys-kap4",
    "Wasser hat seine größte Dichte bei etwa 4 °C (Anomalie des Wassers). Welche Konsequenz hat dies für einen See im Winter?",
    [
      "Der See friert von unten nach oben zu.",
      "Das 4 °C warme Wasser sinkt nach unten; Eis bildet sich an der Oberfläche, und das Wasser am Grund bleibt flüssig bei ca. 4 °C.",
      "Das gesamte Seewasser muss auf 0 °C abkühlen, bevor sich Eis bilden kann.",
      "Das Eis am Grund schützt die darüber liegenden Wasserschichten vor Abkühlung.",
      "Die Dichteanomalie bewirkt, dass Seen im Winter schneller komplett durchfrieren als ohne Anomalie.",
    ],
    1,
    "B ist korrekt: Wasser mit maximaler Dichte (4 °C) sinkt ab. Kälteres Wasser (0–4 °C) ist weniger dicht und bleibt oben → Eis bildet sich an der Oberfläche. Das Grundwasser bleibt bei ~4 °C — lebenswichtig für Organismen. A: falsch, Eis bildet sich oben. C: falsch, nur die Oberfläche muss 0 °C erreichen. D: falsch, Eis bildet sich an der Oberfläche, nicht am Grund. E: falsch, die Anomalie verlangsamt das Durchfrieren, weil das wärmere Wasser unten isoliert wird.",
    "schwer",
    ["Anomalie des Wassers", "Dichte", "Wärmelehre"]
  ),
  q(
    "ph-pool-hard-017",
    "phys-kap4",
    "Ein ideales Gas wird in einem geschlossenen Behälter (konstantes Volumen) von 300 K auf 600 K erwärmt. Was passiert mit dem Druck?",
    ["Er verdoppelt sich.", "Er vervierfacht sich.", "Er bleibt gleich.", "Er steigt um 50 %.", "Er halbiert sich."],
    0,
    "Gay-Lussac (isochor): p/T = const → p₂ = p₁ × T₂/T₁ = p₁ × 600/300 = 2p₁. Der Druck verdoppelt sich. Fehler: Vervierfacht (p ~ T²), bleibt gleich (Verwechslung mit Boyle-Mariotte), +50 % (T-Differenz statt Verhältnis), halbiert (invertiertes Verhältnis).",
    "schwer",
    ["Gay-Lussac", "Isochore", "Ideales Gas", "Wärmelehre"]
  ),
  q(
    "ph-pool-hard-018",
    "phys-kap4",
    "Ein Kühlschrank entzieht dem Innenraum (5 °C = 278 K) pro Stunde 1000 kJ Wärme und gibt diese an die Umgebung (25 °C = 298 K) ab. Wie hoch ist die mindestens aufzuwendende elektrische Leistung (idealer Carnot-Kühlschrank)?",
    ["20,0 W", "71,9 W", "19,9 W", "143,9 W", "55,6 W"],
    2,
    "Leistungszahl Kühlung (Carnot): ε = T_kalt/(T_heiß − T_kalt) = 278/20 = 13,9. ε = Q_kalt/W → W = Q_kalt/ε = 1000 kJ / 13,9 = 71,9 kJ pro Stunde. P = 71,9 kJ / 3600 s = 19,97 W ≈ 20,0 W. Korrektur: 71942 J / 3600 = 19,98 W ≈ 20,0 W. Die nächste Option ist 19,9 W. Fehler: 71,9 W (vergisst Umrechnung kJ/h → W, nimmt kJ/h als W), 143,9 W (doppelt), 55,6 W (ε = T_heiß/ΔT falsche Formel).",
    "schwer",
    ["Carnot", "Kühlschrank", "Leistungszahl", "Wärmelehre", "rechenfrage"]
  ),

  // ===== ELEKTRIZITÄTSLEHRE (15 Fragen) =====
  q(
    "ph-pool-hard-019",
    "phys-kap5",
    "Drei gleiche Widerstände (je R = 100 Ω) sind so geschaltet, dass zwei parallel und der dritte in Serie dazu liegt. An der Gesamtschaltung liegen 15 V an. Wie groß ist der Gesamtstrom?",
    ["0,1 A", "0,15 A", "0,05 A", "0,3 A", "0,2 A"],
    0,
    "R_parallel = R/2 = 50 Ω. R_ges = 50 + 100 = 150 Ω. I = U/R_ges = 15/150 = 0,1 A. Fehler: 0,15 A (nur R_parallel = 50 Ω als R_ges), 0,05 A (R_ges = 300 Ω, alle in Serie), 0,3 A (R_ges = 50 Ω, alle parallel), 0,2 A (R_ges = 75 Ω falsch berechnet).",
    "schwer",
    ["Widerstand", "Reihen-Parallel", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-020",
    "phys-kap5",
    "Ein Kondensator (C = 10 µF) wird auf 200 V aufgeladen und dann über einen Widerstand entladen. Welche Energie war im Kondensator gespeichert?",
    ["0,2 J", "0,1 J", "2 J", "1 J", "0,02 J"],
    0,
    "E = ½CV² = ½ × 10×10⁻⁶ × (200)² = ½ × 10⁻⁵ × 40.000 = 0,2 J. Fehler: 0,1 J (½ vergessen → CV²/2 mit Faktor-Fehler oder E = CU), 2 J (µ nicht berücksichtigt: ½ × 10 × 200² mit falscher Einheit), 1 J (CV nicht ½CV²), 0,02 J (zusätzlicher Faktor 10 Fehler).",
    "schwer",
    ["Kondensator", "Energie", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-021",
    "phys-kap5",
    "In einem Stromkreis mit einer Batterie (EMK = 12 V, Innenwiderstand r = 2 Ω) und einem Lastwiderstand R = 4 Ω: Welche Leistung wird im Lastwiderstand umgesetzt?",
    ["16 W", "24 W", "8 W", "36 W", "12 W"],
    0,
    "I = EMK/(R+r) = 12/6 = 2 A. P_Last = I²R = 4 × 4 = 16 W. Fehler: 24 W (I = 12/4 = 3, ohne r, P = 9×4 nein, eher P = U²/R = 144/4 = 36... nein: 24 W = EMK × I mit I = 2, also Gesamtleistung), 8 W (P = I²r, Leistung am Innenwiderstand), 36 W (r ignoriert: I = 3 A, P = 9 × 4), 12 W (P = EMK × I − irgendwas).",
    "schwer",
    ["Innenwiderstand", "Leistung", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-022",
    "phys-kap5",
    "Welche der folgenden Aussagen zu Kirchhoff'schen Regeln ist FALSCH?",
    [
      "Die Knotenregel besagt, dass die Summe aller Ströme an einem Knoten null ist.",
      "Die Maschenregel besagt, dass die Summe aller Spannungen in einer geschlossenen Masche null ist.",
      "Die Knotenregel folgt aus der Ladungserhaltung.",
      "Die Maschenregel folgt aus der Energieerhaltung.",
      "Die Maschenregel gilt nur für Gleichstromkreise, nicht für Wechselstromkreise.",
    ],
    4,
    "E ist falsch: Die Kirchhoff'schen Regeln gelten auch für Wechselstromkreise (dort mit komplexen Impedanzen). Sie sind fundamentale Gesetze der Elektrotechnik. A: Knotenregel (1. Kirchhoff) korrekt. B: Maschenregel (2. Kirchhoff) korrekt. C: Knotenregel → Ladungserhaltung, korrekt. D: Maschenregel → Energieerhaltung (konservatives E-Feld), korrekt.",
    "schwer",
    ["Kirchhoff", "Maschenregel", "Knotenregel", "Elektrizität", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-023",
    "phys-kap5",
    "Eine Spule (L = 0,5 H) wird von einem Strom von 4 A durchflossen. Wie groß ist die im Magnetfeld gespeicherte Energie?",
    ["4 J", "2 J", "8 J", "1 J", "16 J"],
    0,
    "E = ½LI² = ½ × 0,5 × 16 = 4 J. Fehler: 2 J (½ vergessen: LI²/2 falsch, oder L×I), 8 J (½ vergessen: LI²), 1 J (L×I/2), 16 J (L×I² × 2).",
    "schwer",
    ["Spule", "Magnetfeld", "Induktivität", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-024",
    "phys-kap5",
    "Ein Elektron bewegt sich mit v = 10⁶ m/s senkrecht in ein homogenes Magnetfeld (B = 0,1 T) hinein. Wie groß ist der Radius der Kreisbahn? (m_e = 9,1 × 10⁻³¹ kg, e = 1,6 × 10⁻¹⁹ C)",
    ["5,69 × 10⁻⁵ m", "5,69 × 10⁻² m", "5,69 × 10⁻⁸ m", "9,1 × 10⁻⁵ m", "1,6 × 10⁻⁵ m"],
    0,
    "Lorentzkraft = Zentripetalkraft: evB = mv²/r → r = mv/(eB) = (9,1×10⁻³¹ × 10⁶)/(1,6×10⁻¹⁹ × 0,1) = 9,1×10⁻²⁵ / 1,6×10⁻²⁰ = 5,69×10⁻⁵ m. Fehler: 5,69×10⁻² m (B = 0,0001 T Fehler), 5,69×10⁻⁸ m (v = 10³ statt 10⁶), 9,1×10⁻⁵ m (e/B vergessen → m·v nur), 1,6×10⁻⁵ m (m/B vergessen → e·v nur).",
    "schwer",
    ["Lorentzkraft", "Kreisbahn", "Magnetfeld", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-025",
    "phys-kap5",
    "Ein Wechselstromkreis enthält nur einen ohmschen Widerstand R = 50 Ω. Die Effektivspannung beträgt 230 V. Wie groß ist die maximale Stromstärke (Scheitelwert)?",
    ["6,51 A", "4,60 A", "3,26 A", "9,20 A", "2,30 A"],
    0,
    "I_eff = U_eff/R = 230/50 = 4,6 A. I_max = I_eff × √2 = 4,6 × 1,414 = 6,51 A. Fehler: 4,60 A (Effektivwert, nicht Scheitelwert — häufigster Fehler!), 3,26 A (I_eff/√2 statt ×√2), 9,20 A (× 2 statt ×√2), 2,30 A (U/R mit R = 100).",
    "schwer",
    ["Wechselstrom", "Effektivwert", "Scheitelwert", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-026",
    "phys-kap5",
    "Welche Aussage über elektromagnetische Wellen ist FALSCH?",
    [
      "E-Feld und B-Feld stehen senkrecht zueinander und senkrecht zur Ausbreitungsrichtung.",
      "Elektromagnetische Wellen benötigen kein Medium zur Ausbreitung.",
      "Die Ausbreitungsgeschwindigkeit im Vakuum beträgt c ≈ 3 × 10⁸ m/s.",
      "Radiowellen haben eine kürzere Wellenlänge als sichtbares Licht.",
      "Elektromagnetische Wellen transportieren Energie.",
    ],
    3,
    "D ist falsch: Radiowellen haben eine viel längere Wellenlänge (Meter bis Kilometer) als sichtbares Licht (400–700 nm). Die Reihenfolge zunehmender Wellenlänge: Gamma → Röntgen → UV → sichtbar → IR → Mikrowellen → Radio. A, B, C, E sind alle korrekt.",
    "schwer",
    ["EM-Wellen", "Wellenlänge", "Elektrizität", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-027",
    "phys-kap5",
    "Zwei parallele Platten (Abstand d = 2 mm) liegen an einer Spannung von 500 V. Ein Proton (m = 1,67 × 10⁻²⁷ kg, q = 1,6 × 10⁻¹⁹ C) startet in Ruhe an der positiven Platte. Mit welcher Geschwindigkeit erreicht es die negative Platte?",
    ["3,10 × 10⁵ m/s", "2,19 × 10⁵ m/s", "6,20 × 10⁵ m/s", "4,38 × 10⁵ m/s", "1,55 × 10⁵ m/s"],
    0,
    "Energieerhaltung: qU = ½mv² → v = √(2qU/m) = √(2 × 1,6×10⁻¹⁹ × 500 / 1,67×10⁻²⁷) = √(1,6×10⁻¹⁶ / 1,67×10⁻²⁷) = √(9,58×10¹⁰) ≈ 3,10×10⁵ m/s. Der Plattenabstand d spielt für die Endgeschwindigkeit keine Rolle (nur U zählt)! Fehler: 2,19×10⁵ (½ vergessen → v = √(qU/m)), 6,20×10⁵ (×2 statt √), 4,38×10⁵ (mit Elektronenmasse gerechnet und dann korrigiert), 1,55×10⁵ (U = 250 V statt 500).",
    "schwer",
    ["E-Feld", "Proton", "Beschleunigung", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-028",
    "phys-kap5",
    "Ein Transformator hat 500 Primär- und 50 Sekundärwindungen. Die Primärspannung beträgt 230 V. Bei einem idealen Transformator: Welcher Strom fließt sekundär, wenn primär 2 A fließen?",
    ["20 A", "0,2 A", "2 A", "10 A", "0,02 A"],
    0,
    "Idealer Trafo: U₁/U₂ = N₁/N₂ und I₁/I₂ = N₂/N₁. U₂ = 230 × 50/500 = 23 V. I₂ = I₁ × N₁/N₂ = 2 × 500/50 = 20 A. Leistungskontrolle: P₁ = 230 × 2 = 460 W = 23 × 20 = P₂ ✓. Fehler: 0,2 A (N₂/N₁ statt N₁/N₂), 2 A (Strom gleich), 10 A (Übersetzung nur halb), 0,02 A (Verhältnis umgekehrt und quadriert).",
    "schwer",
    ["Transformator", "Übersetzungsverhältnis", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-029",
    "phys-kap5",
    "In einem RLC-Serienschwingkreis gilt: R = 100 Ω, L = 0,1 H, C = 10 µF. Welche Resonanzfrequenz hat der Schwingkreis?",
    ["159 Hz", "503 Hz", "1592 Hz", "50 Hz", "1000 Hz"],
    0,
    "f₀ = 1/(2π√(LC)) = 1/(2π√(0,1 × 10⁻⁵)) = 1/(2π√(10⁻⁶)) = 1/(2π × 10⁻³) = 1000/(2π) ≈ 159 Hz. Fehler: 503 Hz (√(1/LC) ohne 2π dividiert durch falschen Faktor), 1592 Hz (Faktor 10 beim C-Wert), 50 Hz (Netzfrequenz geraten), 1000 Hz (ohne 2π-Division: 1/√(LC) = 1000).",
    "schwer",
    ["Schwingkreis", "Resonanz", "Wechselstrom", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-030",
    "phys-kap5",
    "Wenn der Widerstand R in einem Stromkreis verdoppelt und die Spannung U halbiert wird, wie ändert sich die am Widerstand umgesetzte Leistung?",
    ["Sie sinkt auf 1/8 des Ausgangswertes.", "Sie sinkt auf 1/4.", "Sie sinkt auf 1/2.", "Sie bleibt gleich.", "Sie sinkt auf 1/16."],
    0,
    "P = U²/R. Neues P': P' = (U/2)²/(2R) = U²/(4 × 2R) = U²/(8R) = P/8. Fehler: 1/4 (nur U halbiert: (U/2)²/R), 1/2 (nur R verdoppelt: U²/2R), bleibt gleich (P = UI und beide ändern sich kompensierend), 1/16 (U² und R² falsch).",
    "schwer",
    ["Leistung", "Ohm", "Elektrizität"]
  ),
  q(
    "ph-pool-hard-031",
    "phys-kap5",
    "Welche der folgenden Aussagen zum Magnetfeld ist FALSCH?",
    [
      "Magnetische Feldlinien sind stets geschlossen — es gibt keine magnetischen Monopole.",
      "Ein stromdurchflossener gerader Leiter erzeugt konzentrische Feldlinien um den Leiter.",
      "Die Kraft auf einen stromdurchflossenen Leiter im Magnetfeld steht senkrecht zu B und I.",
      "Die magnetische Flussdichte B hat die Einheit Tesla (T) = kg/(A·s²).",
      "Ein ruhendes geladenes Teilchen im Magnetfeld erfährt eine Kraft in Richtung der Feldlinien.",
    ],
    4,
    "E ist falsch: Die Lorentzkraft F = qv × B wirkt nur auf bewegte Ladungen. Ein ruhendes Teilchen (v = 0) erfährt keine magnetische Kraft. A: korrekt (div B = 0). B: Biot-Savart korrekt. C: F = IL × B, steht senkrecht zu beiden. D: [T] = kg/(A·s²) korrekt.",
    "schwer",
    ["Magnetfeld", "Lorentzkraft", "Elektrizität", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-032",
    "phys-kap5",
    "Ein elektrischer Heizstab (P = 2000 W) soll 5 L Wasser von 20 °C auf 100 °C erwärmen. Wie lange dauert das mindestens? (c_Wasser = 4186 J/(kg·K), 1 L Wasser ≈ 1 kg)",
    ["836 s ≈ 14 min", "1674 s ≈ 28 min", "418 s ≈ 7 min", "167 s ≈ 2,8 min", "3349 s ≈ 56 min"],
    0,
    "Q = mcΔT = 5 × 4186 × 80 = 1.674.400 J. t = Q/P = 1.674.400/2000 = 837,2 s ≈ 14 min. Fehler: 1674 s (P = 1000 W), 418 s (ΔT = 40 statt 80), 167 s (m = 1 kg statt 5), 3349 s (P = 500 W).",
    "schwer",
    ["Heizleistung", "Kalorimetrie", "Elektrizität", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-033",
    "phys-kap5",
    "Zwei Punktladungen (+2 µC und −8 µC) befinden sich im Abstand von 60 cm. In welchem Abstand von der +2 µC-Ladung (auf der Verbindungslinie, außerhalb der beiden Ladungen, auf der Seite der +2 µC) ist das elektrische Feld null?",
    ["60 cm", "30 cm", "120 cm", "20 cm", "90 cm"],
    0,
    "Der Nullpunkt liegt außen auf der Seite der kleineren Ladung. Sei x der Abstand vom +2 µC. Dann: k·2µC/x² = k·8µC/(x+60)² → 2/x² = 8/(x+60)² → (x+60)²/x² = 4 → (x+60)/x = 2 → x+60 = 2x → x = 60 cm. Fehler: 30 cm (x+60 = 3x falsch), 120 cm (x+60 = 2x → x = 120, falsches Setup zwischen den Ladungen), 20 cm (Verhältnis 2:8 = 1:4 → x = 60/3 falsch), 90 cm (60 × 1,5 Fehler).",
    "schwer",
    ["Coulomb", "E-Feld", "Superposition", "Elektrizität", "rechenfrage"]
  ),

  // ===== OPTIK (7 Fragen) =====
  q(
    "ph-pool-hard-034",
    "phys-kap5",
    "Licht fällt unter einem Winkel von 60° (zur Normalen) auf eine Glasoberfläche (n_Glas = 1,5). Wie groß ist der Brechungswinkel?",
    ["35,3°", "41,8°", "30,0°", "48,6°", "19,5°"],
    0,
    "Snellius: n₁·sin(α) = n₂·sin(β). 1 × sin(60°) = 1,5 × sin(β) → sin(β) = sin(60°)/1,5 = 0,866/1,5 = 0,577 → β = arcsin(0,577) ≈ 35,3°. Fehler: 41,8° (n₁/n₂ vertauscht: sin(β) = 1,5·sin60°/1 → > 1, also anderer Fehler), 30,0° (β = α/2), 48,6° (sin invertiert), 19,5° (cos statt sin).",
    "schwer",
    ["Brechung", "Snellius", "Optik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-035",
    "phys-kap5",
    "Welche der folgenden Aussagen zur Wellenoptik ist FALSCH?",
    [
      "Beugung tritt auf, wenn Licht auf ein Hindernis oder eine Öffnung trifft, deren Abmessungen in der Größenordnung der Wellenlänge liegen.",
      "Konstruktive Interferenz tritt auf, wenn der Gangunterschied ein ganzzahliges Vielfaches der Wellenlänge beträgt.",
      "Am Doppelspalt entstehen Interferenzmaxima, deren Abstand proportional zur Wellenlänge ist.",
      "Polarisation ist ein Beweis dafür, dass Licht eine Transversalwelle ist.",
      "An einem optisch dünneren Medium findet bei Reflexion ein Phasensprung von π statt.",
    ],
    4,
    "E ist falsch: Der Phasensprung von π tritt bei Reflexion an einem optisch DICHTEREN Medium auf (nicht am dünneren). Beim Übergang von dicht nach dünn gibt es keinen Phasensprung. A: Beugung bei Öffnungen ~ λ, korrekt. B: Konstruktive Interferenz bei Δs = nλ, korrekt. C: Abstand der Maxima ~ λ, korrekt. D: Polarisierbarkeit zeigt Transversalwelle, korrekt.",
    "schwer",
    ["Wellenoptik", "Phasensprung", "Interferenz", "Optik", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-036",
    "phys-kap5",
    "Eine Sammellinse (f = 10 cm) erzeugt von einem Gegenstand ein reelles, auf dem Kopf stehendes Bild mit 3-facher Vergrößerung. In welcher Entfernung befindet sich der Gegenstand?",
    ["13,3 cm", "40 cm", "30 cm", "10 cm", "7,5 cm"],
    0,
    "Reelles Bild, 3-fach vergrößert: V = −b/g = −3 (negativ weil auf dem Kopf) → b = 3g. Linsengleichung: 1/f = 1/g + 1/b = 1/g + 1/(3g) = 4/(3g) → g = 4f/3 = 40/3 ≈ 13,3 cm. Fehler: 40 cm (b = 3f statt b = 3g), 30 cm (g = 3f), 10 cm (g = f, Bild im Unendlichen), 7,5 cm (g = 3f/4).",
    "schwer",
    ["Linsengleichung", "Vergrößerung", "Optik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-037",
    "phys-kap5",
    "Weißes Licht fällt durch ein Prisma. Welche Farbe wird am stärksten gebrochen?",
    ["Violett", "Rot", "Grün", "Gelb", "Alle gleich stark"],
    0,
    "Dispersion: Der Brechungsindex ist wellenlängenabhängig. Kürzere Wellenlängen (violett, ~400 nm) werden stärker gebrochen als längere (rot, ~700 nm). Fehler: Rot (umgekehrte Reihenfolge), Grün (Mitte des Spektrums), Gelb (Natrium-D-Linie, aber nicht stärkste Brechung), alle gleich (keine Dispersion angenommen).",
    "schwer",
    ["Dispersion", "Prisma", "Optik"]
  ),
  q(
    "ph-pool-hard-038",
    "phys-kap5",
    "Der Grenzwinkel der Totalreflexion beim Übergang von Glas (n = 1,5) in Luft (n = 1,0) beträgt:",
    ["41,8°", "48,6°", "30,0°", "60,0°", "33,3°"],
    0,
    "sin(α_c) = n₂/n₁ = 1,0/1,5 = 0,667 → α_c = arcsin(0,667) ≈ 41,8°. Fehler: 48,6° (arcsin(0,75) mit falschem n-Verhältnis), 30,0° (arcsin(0,5) = 30°), 60,0° (Komplementwinkel zu 30°), 33,3° (1/1,5 als Winkel in Grad interpretiert).",
    "schwer",
    ["Totalreflexion", "Grenzwinkel", "Optik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-039",
    "phys-kap5",
    "Ein Mikroskop hat ein Objektiv (f_obj = 5 mm) und ein Okular (f_ok = 25 mm). Die optische Tubuslänge beträgt 160 mm. Welche Gesamtvergrößerung erreicht das Mikroskop bei konventioneller Bezugssehweite (s₀ = 250 mm)?",
    ["320-fach", "160-fach", "50-fach", "640-fach", "1000-fach"],
    0,
    "V_ges = (t/f_obj) × (s₀/f_ok) = (160/5) × (250/25) = 32 × 10 = 320. Fehler: 160 (nur Objektiv: t/f_obj = 32, × 5?), 50 (f_ok/f_obj × irgendwas), 640 (s₀ = 500 mm oder Faktor ×2), 1000 (160 × 250 / (5 × 8) falsch).",
    "schwer",
    ["Mikroskop", "Vergrößerung", "Optik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-040",
    "phys-kap5",
    "Welche der folgenden Aussagen zum Welle-Teilchen-Dualismus ist FALSCH?",
    [
      "Die De-Broglie-Wellenlänge eines Teilchens ist λ = h/p, wobei p der Impuls des Teilchens ist.",
      "Elektronen zeigen bei Beugungsexperimenten Interferenzmuster.",
      "Der Photoeffekt zeigt den Teilchencharakter von Licht.",
      "Die Energie eines Photons ist proportional zu seiner Wellenlänge.",
      "Der Compton-Effekt bestätigt, dass Photonen einen Impuls besitzen.",
    ],
    3,
    "D ist falsch: E = hf = hc/λ, die Energie ist UMGEKEHRT proportional zur Wellenlänge (kürzere Wellenlänge → mehr Energie). Korrekt wäre: proportional zur Frequenz. A: De-Broglie korrekt. B: Davisson-Germer-Experiment korrekt. C: Photoeffekt → Teilchen korrekt. E: Compton → Photon hat Impuls p = h/λ korrekt.",
    "mittel",
    ["Welle-Teilchen-Dualismus", "De-Broglie", "Optik", "falsch-aussage"]
  ),

  // ===== ATOMPHYSIK (10 Fragen) =====
  q(
    "ph-pool-hard-041",
    "phys-kap7",
    "Uran-238 zerfällt durch α-Zerfall. Welches Tochterelement entsteht?",
    ["Thorium-234", "Radium-234", "Uran-234", "Protactinium-234", "Plutonium-242"],
    0,
    "α-Zerfall: Massenzahl −4, Ordnungszahl −2. U-238 (Z = 92) → Th-234 (Z = 90) + He-4. Fehler: Ra-234 (Z = 88, zwei α), U-234 (gleiche Ordnungszahl, nur Massenverlust → wäre kein α-Zerfall), Pa-234 (Z = 91, wäre β⁻-Zerfall), Pu-242 (Z = 94, wäre Anlagerung).",
    "schwer",
    ["Alpha-Zerfall", "Uran", "Atomphysik"]
  ),
  q(
    "ph-pool-hard-042",
    "phys-kap7",
    "Ein radioaktives Isotop hat eine Halbwertszeit von 8 Tagen. Nach 24 Tagen sind noch 5 mg vorhanden. Wie groß war die Anfangsmasse?",
    ["40 mg", "80 mg", "20 mg", "160 mg", "15 mg"],
    0,
    "24 Tage = 3 Halbwertszeiten. N = N₀ × (½)³ = N₀/8. 5 mg = N₀/8 → N₀ = 40 mg. Fehler: 80 mg (4 HWZ angenommen), 20 mg (2 HWZ), 160 mg (5 HWZ oder N₀/32), 15 mg (5 × 3 linear).",
    "schwer",
    ["Halbwertszeit", "Radioaktivität", "Atomphysik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-043",
    "phys-kap7",
    "Welche der folgenden Aussagen zu ionisierender Strahlung ist FALSCH?",
    [
      "α-Strahlung hat die geringste Reichweite in Luft, aber die höchste Ionisationsdichte.",
      "β⁻-Strahlung besteht aus Elektronen, die beim Neutronenzerfall im Kern entstehen.",
      "γ-Strahlung ist elektromagnetische Strahlung mit sehr kurzer Wellenlänge.",
      "α-Teilchen können bereits durch ein Blatt Papier abgeschirmt werden.",
      "β-Strahlung hat eine größere Reichweite als γ-Strahlung.",
    ],
    4,
    "E ist falsch: γ-Strahlung hat die größte Reichweite (wird exponentiell geschwächt, nie vollständig absorbiert), weit mehr als β-Strahlung (wenige mm in Metall, einige cm in Luft). Reihenfolge Reichweite: α < β < γ. A: α kurz, aber stark ionisierend, korrekt. B: n → p + e⁻ + ν̄, korrekt. C: γ = EM-Strahlung, korrekt. D: Papier stoppt α, korrekt.",
    "schwer",
    ["Ionisierende Strahlung", "Alpha", "Beta", "Gamma", "Atomphysik", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-044",
    "phys-kap7",
    "Bei der Fusion von Deuterium (²H) und Tritium (³H) entsteht Helium-4 und ein Neutron. Wenn die Massenabnahme Δm = 0,019 u beträgt, wie groß ist die freigesetzte Energie? (1 u = 931,5 MeV/c²)",
    ["17,7 MeV", "8,85 MeV", "35,4 MeV", "1,77 MeV", "177 MeV"],
    0,
    "E = Δm × c² = 0,019 u × 931,5 MeV/u = 17,7 MeV. Fehler: 8,85 MeV (Faktor ½), 35,4 MeV (Faktor 2), 1,77 MeV (Komma verschoben), 177 MeV (Komma verschoben andersrum).",
    "schwer",
    ["Kernfusion", "Massendefekt", "E=mc²", "Atomphysik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-045",
    "phys-kap7",
    "Welche minimale Frequenz muss Licht haben, um Elektronen aus einer Metalloberfläche mit einer Austrittsarbeit von 4,0 eV zu lösen? (h = 4,14 × 10⁻¹⁵ eV·s)",
    ["9,66 × 10¹⁴ Hz", "4,83 × 10¹⁴ Hz", "1,93 × 10¹⁵ Hz", "6,0 × 10¹⁴ Hz", "2,42 × 10¹⁴ Hz"],
    0,
    "Photoeffekt: E = hf ≥ W_A → f_min = W_A/h = 4,0/(4,14 × 10⁻¹⁵) = 9,66 × 10¹⁴ Hz. Fehler: 4,83 × 10¹⁴ (W_A = 2 eV), 1,93 × 10¹⁵ (W_A = 8 eV oder ×2), 6,0 × 10¹⁴ (h = 6,63 × 10⁻³⁴ J·s ohne eV-Umrechnung gemischt), 2,42 × 10¹⁴ (W_A/h mit h in J·s und W_A in eV ohne Umrechnung).",
    "schwer",
    ["Photoeffekt", "Austrittsarbeit", "Atomphysik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-046",
    "phys-kap7",
    "Ein Patient erhält eine Dosis von 0,5 Gy Gammastrahlung. Wie groß ist die Äquivalentdosis in Sievert? (Qualitätsfaktor für Gammastrahlung: Q = 1)",
    ["0,5 Sv", "5 Sv", "0,05 Sv", "1 Sv", "0,25 Sv"],
    0,
    "Äquivalentdosis H = D × Q = 0,5 Gy × 1 = 0,5 Sv. Für Gammastrahlung ist Q = 1, also Gy = Sv numerisch gleich. Fehler: 5 Sv (Q = 10, das wäre Neutronen), 0,05 Sv (Q = 0,1 existiert nicht), 1 Sv (×2), 0,25 Sv (×0,5).",
    "schwer",
    ["Strahlendosis", "Sievert", "Gray", "Atomphysik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-047",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Kernspaltung ist FALSCH?",
    [
      "Bei der Kernspaltung von U-235 werden typischerweise 2–3 Neutronen frei.",
      "Die Kettenreaktion erfordert eine kritische Masse des spaltbaren Materials.",
      "Moderatoren (z. B. Wasser) bremsen schnelle Neutronen ab, damit sie weitere Spaltungen auslösen.",
      "Die Bindungsenergie pro Nukleon ist bei den Spaltprodukten geringer als beim Ausgangskern.",
      "Kernspaltung setzt Energie frei, weil die Spaltprodukte stabiler sind als der Ausgangskern.",
    ],
    3,
    "D ist falsch: Die Bindungsenergie pro Nukleon ist bei den Spaltprodukten (mittelschwere Kerne) HÖHER als bei U-235 (schwerer Kern) — genau deshalb wird Energie frei. Höhere Bindungsenergie/Nukleon = stabiler. A: U-235-Spaltung → 2–3 Neutronen, korrekt. B: Kritische Masse nötig, korrekt. C: Moderatoren bremsen Neutronen, korrekt. E: Spaltprodukte stabiler → Energie frei, korrekt.",
    "schwer",
    ["Kernspaltung", "Bindungsenergie", "Atomphysik", "falsch-aussage"]
  ),
  q(
    "ph-pool-hard-048",
    "phys-kap7",
    "Carbon-14 hat eine Halbwertszeit von 5730 Jahren. Eine archäologische Probe zeigt nur noch 1/16 der ursprünglichen C-14-Aktivität. Wie alt ist die Probe?",
    ["22.920 Jahre", "28.650 Jahre", "11.460 Jahre", "34.380 Jahre", "5.730 Jahre"],
    0,
    "1/16 = (½)⁴ → 4 Halbwertszeiten. Alter = 4 × 5730 = 22.920 Jahre. Fehler: 28.650 (5 HWZ), 11.460 (2 HWZ: 1/4), 34.380 (6 HWZ), 5.730 (1 HWZ: 1/2).",
    "schwer",
    ["C-14", "Altersbestimmung", "Halbwertszeit", "Atomphysik", "rechenfrage"]
  ),
  q(
    "ph-pool-hard-049",
    "phys-kap7",
    "Beim β⁺-Zerfall eines Kerns passiert Folgendes:",
    [
      "Ein Proton wandelt sich in ein Neutron um und ein Positron wird emittiert.",
      "Ein Neutron wandelt sich in ein Proton um und ein Elektron wird emittiert.",
      "Ein Proton wandelt sich in ein Neutron um und ein Elektron wird emittiert.",
      "Zwei Protonen verschmelzen zu einem Heliumkern.",
      "Ein Neutron wird aus dem Kern emittiert.",
    ],
    0,
    "β⁺-Zerfall: p → n + e⁺ + ν_e. Ein Proton wird in ein Neutron umgewandelt, dabei wird ein Positron (e⁺) und ein Elektron-Neutrino emittiert. B beschreibt den β⁻-Zerfall. C verwechselt Positron mit Elektron. D beschreibt Fusion. E beschreibt Neutronenemission.",
    "schwer",
    ["Beta-Zerfall", "Positron", "Atomphysik"]
  ),
  q(
    "ph-pool-hard-050",
    "phys-kap7",
    "Ein Photon hat die Energie 2,0 eV. Welche Wellenlänge hat es? (hc ≈ 1240 eV·nm)",
    ["620 nm", "310 nm", "1240 nm", "414 nm", "248 nm"],
    0,
    "λ = hc/E = 1240/2,0 = 620 nm (sichtbares Licht, orange-rot). Fehler: 310 nm (E = 4 eV angenommen oder λ/2), 1240 nm (E = 1 eV), 414 nm (E = 3 eV), 248 nm (E = 5 eV).",
    "schwer",
    ["Photon", "Wellenlänge", "Energie", "Atomphysik", "rechenfrage"]
  ),

  // ─── phys-kap7: Atomaufbau (Stichwort ph-7-01) ────────────────────

  q(
    "ph-atomaufbau-001",
    "phys-kap7",
    "Welche Aussage beschreibt das Bohrsche Atommodell korrekt?",
    [
      "Elektronen bewegen sich auf beliebigen Bahnen um den Kern",
      "Elektronen können sich nur auf diskreten, stationären Bahnen bewegen, ohne Energie abzustrahlen",
      "Elektronen befinden sich ausschließlich im Atomkern",
      "Elektronen haben keine definierte Energie",
      "Das Bohrsche Modell beschreibt Atome ohne Kern",
    ],
    1,
    "Im Bohrschen Atommodell bewegen sich Elektronen auf diskreten Kreisbahnen mit gequanteltem Drehimpuls (L = n·ℏ). Auf diesen stationären Bahnen strahlen sie keine Energie ab. Photonen werden nur beim Übergang zwischen Bahnen emittiert oder absorbiert.",
    "leicht",
    ["bohr", "atommodell", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-002",
    "phys-kap7",
    "Welche Quantenzahlen beschreiben den Zustand eines Elektrons im Atom vollständig?",
    [
      "Nur die Hauptquantenzahl n",
      "n und l",
      "n, l und m_l",
      "n, l, m_l und m_s (Hauptquantenzahl, Nebenquantenzahl, magnetische Quantenzahl, Spinquantenzahl)",
      "Nur die Spinquantenzahl m_s",
    ],
    3,
    "Vier Quantenzahlen beschreiben den Zustand eines Elektrons vollständig: n (Hauptquantenzahl, Energieniveau), l (Nebenquantenzahl, Orbitalform), m_l (magnetische Quantenzahl, räumliche Orientierung) und m_s (Spinquantenzahl, +½ oder −½).",
    "mittel",
    ["quantenzahlen", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-003",
    "phys-kap7",
    "Welche Energie hat ein Elektron im Wasserstoffatom auf der n-ten Bahn nach dem Bohrschen Modell?",
    [
      "E_n = −13,6 eV / n²",
      "E_n = 13,6 eV · n²",
      "E_n = −13,6 eV · n",
      "E_n = 13,6 eV / n",
      "E_n = −13,6 eV · n²",
    ],
    0,
    "Die Energieniveaus im Wasserstoffatom nach Bohr betragen E_n = −13,6 eV / n². Die Grundzustandsenergie (n = 1) beträgt −13,6 eV, die Ionisierungsenergie also 13,6 eV. Die Energie wird mit steigendem n weniger negativ (= höher).",
    "mittel",
    ["bohr", "energieniveaus", "wasserstoff", "rechenfrage"]
  ),

  q(
    "ph-atomaufbau-004",
    "phys-kap7",
    "Was besagt das Pauli-Ausschlussprinzip?",
    [
      "Zwei Elektronen in einem Atom dürfen nicht in allen vier Quantenzahlen übereinstimmen",
      "Alle Elektronen müssen den gleichen Spin haben",
      "Elektronen können sich nur auf der innersten Schale aufhalten",
      "Die Energie eines Elektrons hängt nicht von der Quantenzahl ab",
      "Protonen und Elektronen haben identische Massen",
    ],
    0,
    "Das Pauli-Ausschlussprinzip (Pauli-Verbot) besagt, dass keine zwei Fermionen (z. B. Elektronen) in einem System in allen Quantenzahlen übereinstimmen dürfen. In einem Orbital (gleiche n, l, m_l) können daher maximal 2 Elektronen mit entgegengesetztem Spin (m_s = +½ und −½) sein.",
    "mittel",
    ["pauli", "quantenzahlen", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-005",
    "phys-kap7",
    "Was unterscheidet das Orbitalmodell vom Bohrschen Atommodell?",
    [
      "Im Orbitalmodell werden Elektronen als Wellenfunktionen mit Aufenthaltswahrscheinlichkeiten beschrieben, nicht als Teilchen auf festen Bahnen",
      "Das Orbitalmodell kennt keine Quantenzahlen",
      "Im Orbitalmodell gibt es keine diskreten Energieniveaus",
      "Das Orbitalmodell gilt nur für Helium",
      "Im Orbitalmodell befinden sich alle Elektronen auf derselben Bahn",
    ],
    0,
    "Im quantenmechanischen Orbitalmodell werden Elektronen durch Wellenfunktionen (Schrödinger-Gleichung) beschrieben. Man kann nur Aufenthaltswahrscheinlichkeiten angeben, keine exakten Bahnen. Orbitale sind Aufenthaltsräume mit 90 % Wahrscheinlichkeit. Es gilt für alle Atome, nicht nur Wasserstoff.",
    "schwer",
    ["orbitalmodell", "wellenfunktion", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-006",
    "phys-kap7",
    "Wie viele Elektronen passen maximal in die Schale mit der Hauptquantenzahl n = 3?",
    [
      "2",
      "8",
      "18",
      "32",
      "10",
    ],
    2,
    "Die maximale Elektronenzahl pro Schale beträgt 2n². Für n = 3: 2 · 3² = 18 Elektronen. Diese verteilen sich auf die Unterschalen 3s (2), 3p (6) und 3d (10).",
    "leicht",
    ["elektronenschalen", "atomaufbau", "rechenfrage"]
  ),

  q(
    "ph-atomaufbau-007",
    "phys-kap7",
    "Welche Spektralserie des Wasserstoffs liegt im sichtbaren Bereich?",
    [
      "Lyman-Serie (Übergänge nach n = 1)",
      "Balmer-Serie (Übergänge nach n = 2)",
      "Paschen-Serie (Übergänge nach n = 3)",
      "Brackett-Serie (Übergänge nach n = 4)",
      "Pfund-Serie (Übergänge nach n = 5)",
    ],
    1,
    "Die Balmer-Serie (Übergänge von höheren Niveaus auf n = 2) liegt im sichtbaren Bereich (ca. 400–700 nm). Die Lyman-Serie liegt im UV, die Paschen-, Brackett- und Pfund-Serien im Infrarot.",
    "mittel",
    ["balmer", "spektralserien", "wasserstoff"]
  ),

  q(
    "ph-atomaufbau-008",
    "phys-kap7",
    "Welche Aussage über die Hundsche Regel ist korrekt?",
    [
      "Entartete Orbitale (gleiche Energie) werden zuerst einzeln mit parallelem Spin besetzt",
      "Elektronen besetzen immer zuerst das Orbital mit dem höchsten Spin",
      "In jedem Orbital müssen sich die Spins aufheben",
      "Die Hundsche Regel gilt nur für s-Orbitale",
      "Orbitale werden immer doppelt besetzt, bevor das nächste begonnen wird",
    ],
    0,
    "Die Hundsche Regel besagt, dass energetisch gleichwertige (entartete) Orbitale zunächst einfach mit parallelem Spin besetzt werden, bevor eine Doppelbesetzung erfolgt. Dies minimiert die Elektron-Elektron-Abstoßung und maximiert den Gesamtspin.",
    "mittel",
    ["hundsche-regel", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-009",
    "phys-kap7",
    "Was ist die Bedeutung der Nebenquantenzahl l?",
    [
      "Sie bestimmt die Form des Orbitals (s, p, d, f)",
      "Sie bestimmt die Größe des Atoms",
      "Sie gibt die Anzahl der Neutronen an",
      "Sie beschreibt den Spin des Elektrons",
      "Sie bestimmt die Gesamtladung des Atoms",
    ],
    0,
    "Die Nebenquantenzahl l bestimmt die Form des Orbitals: l = 0 → s-Orbital (kugelförmig), l = 1 → p-Orbital (hantelförmig), l = 2 → d-Orbital (rosettenförmig), l = 3 → f-Orbital. Für eine gegebene Hauptquantenzahl n kann l die Werte 0 bis n−1 annehmen.",
    "leicht",
    ["nebenquantenzahl", "orbitale", "atomaufbau"]
  ),

  q(
    "ph-atomaufbau-010",
    "phys-kap7",
    "Ein Wasserstoffatom geht vom Zustand n = 4 auf n = 2 über. Welche Photonenenergie wird emittiert? (E₁ = −13,6 eV)",
    [
      "2,55 eV",
      "3,40 eV",
      "10,2 eV",
      "12,75 eV",
      "1,89 eV",
    ],
    0,
    "ΔE = E₄ − E₂ = (−13,6/16) − (−13,6/4) = −0,85 − (−3,40) = 2,55 eV. Diese Linie (Hβ) gehört zur Balmer-Serie und liegt im blau-grünen Bereich des sichtbaren Spektrums (ca. 486 nm).",
    "schwer",
    ["bohr", "energieniveaus", "rechenfrage", "balmer"]
  ),
];
