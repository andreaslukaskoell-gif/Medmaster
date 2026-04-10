/**
 * Physik BMS — offizielle MedAT-Stil-Fragen (an Prüfungsformat angelehnt).
 * Stoff: phys-kap1 (Mechanik), phys-kap3 (Wellen), phys-kap4 (Wärme), phys-kap5 (E-Lehre & Optik), phys-kap7 (Atomphysik).
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

export const physikPoolOffiziellStyle: Question[] = [
  q(
    "ph-off-001",
    "phys-kap7",
    "Was besagt das Pauli-Prinzip?",
    [
      "Beim photoelektrischen Effekt ist die kinetische Energie der Elektronen unabhängig von der Lichtintensität.",
      "Die Masse eines Atoms wird hauptsächlich durch den Atomkern bestimmt.",
      "Jedem Elektron kann eine Wellenlänge zugeordnet werden (Welle-Teilchen-Dualismus).",
      "Elektronen kreisen reibungsfrei auf Bahnen um den Atomkern.",
      "Jedes Orbital der Atomhülle kann nur zwei Elektronen aufnehmen.",
    ],
    4,
    "Pauli-Prinzip: In einem Atom können zwei Elektronen nicht in allen Quantenzahlen übereinstimmen; jedes Orbital nimmt maximal zwei Elektronen mit entgegengesetztem Spin auf.",
    "mittel",
    ["Pauli-Prinzip", "Atomphysik"]
  ),
  q(
    "ph-off-002",
    "phys-kap4",
    "Wie kommt die Ausdehnung eines Körpers bei Erwärmung zustande?",
    [
      "Unsinn – ein Körper dehnt sich bei Erwärmung nicht aus.",
      "Die aufgenommene Wärme braucht Platz.",
      "Die aufgenommene Wärme treibt die im Körper enthaltenen Gase hinaus.",
      "Durch die Erwärmung steigt die mittlere Geschwindigkeit der Teilchen, die Wucht ihrer Zusammenstöße und dadurch wird der mittlere Abstand zwischen den Teilchen größer.",
      "Der Körper wird mit steigender Temperatur weicher – deswegen dehnt er sich aus.",
    ],
    3,
    "Wärmeausdehnung: Höhere Temperatur → größere kinetische Energie der Teilchen → stärkere Schwingungen → größerer mittlerer Abstand (Ausdehnung).",
    "mittel",
    ["Wärmeausdehnung", "Wärmelehre"]
  ),
  q(
    "ph-off-004",
    "phys-kap5",
    "Die Auffächerung (Dispersion) von weißem Licht beim Regenbogen entsteht durch:",
    [
      "die wellenlängenabhängige Brechung in Wassertropfen.",
      "die wellenlängenabhängige Totalreflexion in Wassertropfen.",
      "die wellenlängenabhängige Beugung an der Grenzfläche von Wassertropfen.",
      "die wellenlängenabhängige Streuung an Wassertropfen.",
      "die wellenlängenabhängige Absorption in Wassertropfen.",
    ],
    0,
    "Dispersion: Brechungsindex n hängt von der Wellenlänge ab (n(Blau) > n(Rot)) → unterschiedliche Brechungswinkel → Spektralfarben.",
    "mittel",
    ["Dispersion", "Regenbogen", "Optik"]
  ),
  q(
    "ph-off-008",
    "phys-kap5",
    "Zwei Drähte aus gleichem Material: erster 100 m lang, 1 mm Durchmesser, Widerstand R₁; zweiter 50 m lang, 2 mm Durchmesser, R₂. Wie verhält sich R₁ zu R₂?",
    ["R₁ : R₂ = 1", "R₁ : R₂ = 4", "R₁ : R₂ = 8", "R₁ : R₂ = 2", "R₁ : R₂ = ½"],
    2,
    "R = ρ·L/A, A ∼ d². R₁/R₂ = (L₁/L₂)·(A₂/A₁) = (100/50)·(2/1)² = 2·4 = 8.",
    "schwer",
    ["elektrischer Widerstand", "E-Lehre"]
  ),
  q(
    "ph-off-009",
    "phys-kap5",
    "Ein Mobilfunkgerät arbeitet mit 2 GHz. Bei Ausbreitung mit Lichtgeschwindigkeit (3·10⁸ m/s) beträgt die Wellenlänge circa:",
    ["1,5 m", "6,6 cm", "1,5 cm", "15 cm", "0,66 m"],
    3,
    "λ = c/f = 3·10⁸ / (2·10⁹) m = 0,15 m = 15 cm.",
    "schwer",
    ["Wellenlänge", "Elektromagnetische Welle"]
  ),
  q(
    "ph-off-010",
    "phys-kap5",
    "An Klemme 1 liegt −3 V, an Klemme 2 +7 V. An Klemme 1 wird der +Eingang eines Voltmeters angeschlossen, an Klemme 2 der Minuspol. Die Spannung U zwischen Klemme 1 und 2 ist:",
    ["−10 V", "+4 V", "+10 Amperesekunden", "+10 V", "+10 Joule/Coulomb"],
    0,
    "U = V(+) − V(−) = V(Klemme 1) − V(Klemme 2) = (−3) − (+7) = −10 V.",
    "schwer",
    ["Spannung", "Potenzial", "E-Lehre"]
  ),
  q(
    "ph-off-011",
    "phys-kap1",
    "Welche der folgenden Einheiten kann man ineinander umrechnen? 1. Joule in Newtonmeter  2. Joule in Elektronenvolt  3. Joule in Kalorien  4. Joule in Watt",
    [
      "1. und 3. sind richtig.",
      "1., 2. und 3. sind richtig.",
      "4. ist richtig.",
      "Alle sind richtig.",
      "2. und 4. sind richtig.",
    ],
    1,
    'J = N·m (Arbeit); 1 eV ≈ 1,6·10⁻¹⁹ J; 1 cal ≈ 4,18 J. Watt (W) ist Leistung, keine Energie – man rechnet Joule nicht "in Watt" um.',
    "schwer",
    ["Einheiten", "Joule", "Energie"]
  ),
  q(
    "ph-off-013",
    "phys-kap5",
    "230 V (Effektivwert) an der Steckdose bedeutet: 1. Sinusförmige Spannung wechselt zwischen +230 V und −230 V. 2. Eine Gleichspannung von 230 V würde am ohmschen Widerstand die gleiche Leistung ergeben. 3. Der Mittelwert der Spannung über eine Periodendauer ist 230 V. 4. Die Amplitude der sinusförmigen Spannung ist größer als 230 V.",
    [
      "2. und 4. sind richtig.",
      "4. ist richtig.",
      "Alle sind richtig.",
      "1. und 3. sind richtig.",
      "1., 2. und 3. sind richtig.",
    ],
    0,
    "Effektivwert U_eff = Û/√2 → Û = 230·√2 V > 230 V (4.). U_eff ist definiert über die gleiche Leistung wie Gleichspannung U_eff (2.).",
    "schwer",
    ["Effektivwert", "Wechselspannung", "E-Lehre"]
  ),
  q(
    "ph-off-014",
    "phys-kap7",
    "Bei der Kernspaltung von Uran zur Energiegewinnung werden welche Teilchen benötigt?",
    ["Neutrinos", "Alpha-Teilchen", "Beta-Teilchen", "Protonen", "Neutronen"],
    4,
    "Kernspaltung wird durch Neutronen ausgelöst (neutroneninduzierte Spaltung). Die Neutronen werden von den gespaltenen Kernen freigesetzt (Kettenreaktion).",
    "leicht",
    ["Kernspaltung", "Neutronen"]
  ),
  q(
    "ph-off-015",
    "phys-kap4",
    "Was verstehen wir unter der Anomalie des Wassers?",
    [
      "Die Tatsache, dass Wasser im schwerelosen Zustand immer Kugelgestalt einnimmt.",
      "Die Tatsache, dass Wasser und Speiseöl sich nicht miteinander vermischen lassen.",
      "Die Dichte des Wassers ist bei 4 °C und nicht bei 0 °C am größten – deswegen frieren Seen von oben zu.",
      "Im Vergleich zu anderen Himmelskörpern befindet sich auf der Erde anomal viel Wasser.",
      "Wasser verhält sich völlig normal – eine Anomalie gibt es nicht.",
    ],
    2,
    "Dichteanomalie: Wasser hat bei 4 °C sein Dichtemaximum. Eis (0 °C) ist weniger dicht und schwimmt; Gewässer frieren von der Oberfläche her zu.",
    "mittel",
    ["Anomalie des Wassers", "Dichte", "Wärmelehre"]
  ),
  q(
    "ph-off-016",
    "phys-kap5",
    "Die Wellenlänge des sichtbaren Lichts liegt im Bereich von:",
    ["380 mm – 750 mm", "380 nm – 750 nm", "380 cm – 750 cm", "380 μm – 750 μm", "380 km – 750 km"],
    1,
    "Sichtbares Licht: etwa 380 nm (violett) bis 750 nm (rot). 1 nm = 10⁻⁹ m.",
    "leicht",
    ["Wellenlänge", "Licht", "Optik"]
  ),
  q(
    "ph-off-017",
    "phys-kap7",
    "Beim Zerfall radioaktiver Substanzen können folgende ionisierende Strahlungsarten freigesetzt werden: 1. Beta-Strahlung  2. Alpha-Strahlung  3. Gamma-Strahlung  4. Infrarotstrahlung",
    [
      "4. ist richtig.",
      "Alle sind richtig.",
      "1., 2. und 3. sind richtig.",
      "1. und 3. sind richtig.",
      "2. und 4. sind richtig.",
    ],
    2,
    "Ionisierende Strahlung aus Kernzerfall: α (Heliumkerne), β (Elektronen/Positronen), γ (Photonen). Infrarot ist nicht ionisierend und nicht typisch für Kernzerfall.",
    "schwer",
    ["Radioaktivität", "Alpha", "Beta", "Gamma"]
  ),
  q(
    "ph-off-018",
    "phys-kap1",
    "Eine inkompressible Flüssigkeit strömt reibungsfrei durch ein Rohr mit Verengung. Welche Aussage zu den Geschwindigkeiten am Anfang (v₁) und am Ende (v₂) der Verengung ist korrekt?",
    ["v₂ − v₁ = 0", "v₂ > v₁", "v₂ < v₁", "v₂ + v₁ = 0", "v₂ = v₁"],
    1,
    "Kontinuitätsgleichung: A·v = const. Bei Verengung (kleineres A) wird v größer → v₂ > v₁.",
    "schwer",
    ["Kontinuitätsgleichung", "Strömung", "Mechanik"]
  ),
];
