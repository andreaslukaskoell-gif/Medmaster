/**
 * Physik Typ-K Pool 3 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ph-typk-new3-001 bis ph-typk-new3-075.
 * Themen-Schwerpunkt: Mechanik Vertiefung, Fluidmechanik, Thermodynamik,
 * Elektrostatik, Magnetismus, Wellen, Kernphysik.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const physikTypKNew3: Question[] = [
  // ── 001 Mechanik – Drehmoment (leicht) ──
  {
    id: "ph-typk-new3-001",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Drehmoment sind richtig?\n\n1. Das Drehmoment ist das Produkt aus Kraft und Hebelarm.\n2. Die Einheit des Drehmoments ist Nm.\n3. Ein größerer Hebelarm erfordert eine größere Kraft für dasselbe Drehmoment.\n4. Im Gleichgewicht ist die Summe aller Drehmomente null.\n5. Das Drehmoment ist eine vektorielle Größe.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein größerer Hebelarm erfordert eine kleinere Kraft für dasselbe Drehmoment (M = F · r).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Mechanik – Trägheitsmoment (mittel) ──
  {
    id: "ph-typk-new3-002",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Trägheitsmoment sind richtig?\n\n1. Das Trägheitsmoment hängt von der Massenverteilung bezüglich der Drehachse ab.\n2. Die Einheit ist kg·m².\n3. Ein Hohlzylinder hat bei gleicher Masse ein kleineres Trägheitsmoment als ein Vollzylinder.\n4. Das Trägheitsmoment ist das Rotationsäquivalent der Masse.\n5. Nach dem Steiner'schen Satz nimmt das Trägheitsmoment zu, wenn die Achse von der Schwerpunktachse entfernt wird.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Hohlzylinder hat ein größeres Trägheitsmoment als ein Vollzylinder gleicher Masse, da die Masse weiter von der Achse entfernt ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Mechanik – Impulserhaltung (leicht) ──
  {
    id: "ph-typk-new3-003",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Impuls sind richtig?\n\n1. Der Impuls ist definiert als p = m · v.\n2. Die Einheit des Impulses ist kg·m/s.\n3. In einem abgeschlossenen System bleibt der Gesamtimpuls erhalten.\n4. Der Impuls ist eine vektorielle Größe.\n5. Eine Kraft bewirkt eine zeitliche Änderung des Impulses (F = dp/dt).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. p = mv, Einheit kg·m/s, Impulserhaltung in abgeschlossenen Systemen, Impuls ist vektoriell, F = dp/dt (Newton II).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Mechanik – Elastischer Stoß (mittel) ──
  {
    id: "ph-typk-new3-004",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum elastischen Stoß sind richtig?\n\n1. Beim elastischen Stoß bleibt die kinetische Energie erhalten.\n2. Der Impuls bleibt bei jedem Stoß erhalten (elastisch und inelastisch).\n3. Beim zentralen elastischen Stoß zweier gleicher Massen tauschen die Körper ihre Geschwindigkeiten.\n4. Beim vollkommen inelastischen Stoß bewegen sich die Körper nach dem Stoß gemeinsam weiter.\n5. Beim elastischen Stoß wird kinetische Energie in Wärme umgewandelt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim elastischen Stoß wird keine kinetische Energie in Wärme umgewandelt – das geschieht nur beim inelastischen Stoß.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Mechanik – Drehimpuls (schwer) ──
  {
    id: "ph-typk-new3-005",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Drehimpuls sind richtig?\n\n1. Der Drehimpuls ist L = I · ω.\n2. In einem abgeschlossenen System bleibt der Drehimpuls erhalten.\n3. Eine Eiskunstläuferin dreht sich schneller, wenn sie die Arme anzieht, weil I abnimmt.\n4. Die Einheit des Drehimpulses ist kg·m²/s.\n5. Der Drehimpuls ändert sich nur, wenn ein äußeres Drehmoment wirkt.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. L = Iω, Drehimpulserhaltung gilt in abgeschlossenen Systemen, die Pirouette zeigt I↓ → ω↑, die Einheit ist kg·m²/s, und nur äußere Drehmomente ändern L.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 006 Fluidmechanik – Druck (leicht) ──
  {
    id: "ph-typk-new3-006",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Druck in Fluiden sind richtig?\n\n1. Der hydrostatische Druck nimmt mit der Tiefe zu.\n2. Die Einheit des Drucks ist Pascal (Pa = N/m²).\n3. Der Druck wirkt in einer Flüssigkeit nur nach unten.\n4. 1 atm ≈ 101 325 Pa.\n5. Der hydrostatische Druck hängt von der Form des Gefäßes ab.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 4 und 5" },
      { id: "d", text: "Nur 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4 korrekt. 3 falsch: Der Druck wirkt in alle Richtungen gleichmäßig (Pascal'sches Prinzip). 5 falsch: Der hydrostatische Druck hängt nur von Dichte, Tiefe und g ab (hydrostatisches Paradoxon).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 007 Fluidmechanik – Auftrieb (leicht) ──
  {
    id: "ph-typk-new3-007",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Auftrieb sind richtig?\n\n1. Die Auftriebskraft entspricht der Gewichtskraft des verdrängten Fluids.\n2. Ein Körper schwimmt, wenn seine Dichte kleiner ist als die des Fluids.\n3. Die Auftriebskraft hängt von der Form des eingetauchten Körpers ab.\n4. Das Archimedische Prinzip gilt für Flüssigkeiten und Gase.\n5. Die Auftriebskraft wirkt nach oben.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Auftriebskraft hängt nur vom Volumen des verdrängten Fluids ab, nicht von der Form des Körpers.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 008 Fluidmechanik – Bernoulli (mittel) ──
  {
    id: "ph-typk-new3-008",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Bernoulli-Gleichung sind richtig?\n\n1. In einem Bereich hoher Strömungsgeschwindigkeit ist der statische Druck niedrig.\n2. Die Bernoulli-Gleichung gilt streng nur für inkompressible, reibungsfreie Strömungen.\n3. Die Bernoulli-Gleichung beschreibt die Energieerhaltung entlang einer Stromlinie.\n4. An einer Verengung eines Rohres nimmt die Strömungsgeschwindigkeit ab.\n5. Der Gesamtdruck (statisch + dynamisch + Schweredruck) bleibt entlang einer Stromlinie konstant.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: An einer Verengung nimmt die Strömungsgeschwindigkeit zu (Kontinuitätsgleichung: A₁v₁ = A₂v₂).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 010 Fluidmechanik – Hagen-Poiseuille (schwer) ──
  {
    id: "ph-typk-new3-010",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Gesetz von Hagen-Poiseuille sind richtig?\n\n1. Der Volumenstrom ist proportional zur vierten Potenz des Rohrradius.\n2. Der Volumenstrom ist proportional zur Druckdifferenz.\n3. Eine Verdopplung des Rohrradius verdoppelt den Volumenstrom.\n4. Das Gesetz gilt für laminare Strömungen.\n5. Eine höhere Viskosität verringert den Volumenstrom.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Eine Verdopplung des Radius ergibt den 2⁴ = 16-fachen Volumenstrom (∝ r⁴).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 011 Fluidmechanik – Kontinuität (leicht) ──
  {
    id: "ph-typk-new3-011",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Kontinuitätsgleichung sind richtig?\n\n1. In einem Rohr mit variablem Querschnitt gilt A₁·v₁ = A₂·v₂.\n2. Die Kontinuitätsgleichung folgt aus der Massenerhaltung.\n3. Bei kleinerem Querschnitt ist die Strömungsgeschwindigkeit größer.\n4. Der Volumenstrom ist an jeder Stelle des Rohres gleich.\n5. Die Kontinuitätsgleichung gilt nur für kompressible Fluide.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 3" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die einfache Form A·v = const gilt für inkompressible Fluide.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 012 Thermodynamik – Wärmeleitung (mittel) ──
  {
    id: "ph-typk-new3-012",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmeleitung sind richtig?\n\n1. Wärmeleitung erfolgt durch Teilchenkollisionen ohne Materietransport.\n2. Metalle sind gute Wärmeleiter.\n3. Die Wärmestromdichte ist proportional zum Temperaturgradienten (Fourier-Gesetz).\n4. Luft leitet Wärme besser als Kupfer.\n5. Ein größerer Querschnitt erhöht den Wärmestrom.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Luft ist ein schlechter Wärmeleiter (λ ≈ 0,026 W/(m·K) vs. Kupfer ≈ 400 W/(m·K)).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Thermodynamik – Konvektion (leicht) ──
  {
    id: "ph-typk-new3-013",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Konvektion sind richtig?\n\n1. Bei der Konvektion wird Wärme durch Strömung eines Fluids transportiert.\n2. Man unterscheidet freie und erzwungene Konvektion.\n3. Konvektion kann im Vakuum stattfinden.\n4. Warme Luft steigt auf, weil ihre Dichte geringer ist.\n5. Die Heizung eines Raumes nutzt primär Konvektion.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Konvektion benötigt ein Fluid (Flüssigkeit oder Gas), im Vakuum ist keine Konvektion möglich.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 014 Thermodynamik – Wärmestrahlung (mittel) ──
  {
    id: "ph-typk-new3-014",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmestrahlung sind richtig?\n\n1. Wärmestrahlung ist elektromagnetische Strahlung.\n2. Wärmestrahlung kann sich im Vakuum ausbreiten.\n3. Die abgestrahlte Leistung steigt mit der vierten Potenz der Temperatur (Stefan-Boltzmann-Gesetz).\n4. Ein schwarzer Körper absorbiert und emittiert maximal.\n5. Die Wellenlänge des Strahlungsmaximums verschiebt sich mit steigender Temperatur zu kürzeren Wellenlängen (Wien'sches Verschiebungsgesetz).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Wärmestrahlung ist EM-Strahlung, breitet sich im Vakuum aus, P ∝ T⁴ (Stefan-Boltzmann), schwarzer Körper ist idealer Absorber/Emitter, Wien: λ_max ∝ 1/T.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 015 Thermodynamik – Zustandsänderungen (mittel) ──
  {
    id: "ph-typk-new3-015",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zu thermodynamischen Zustandsänderungen sind richtig?\n\n1. Bei einer isothermen Expansion bleibt die Temperatur konstant.\n2. Bei einer adiabatischen Zustandsänderung wird keine Wärme ausgetauscht.\n3. Bei einer isobaren Zustandsänderung bleibt der Druck konstant.\n4. Bei einer isochoren Zustandsänderung wird keine Arbeit verrichtet.\n5. Eine isotherme Expansion eines idealen Gases ändert die innere Energie.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die innere Energie eines idealen Gases hängt nur von T ab; bei isothermer Expansion bleibt U konstant.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 017 Thermodynamik – Ideales Gas (leicht) ──
  {
    id: "ph-typk-new3-017",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum idealen Gas sind richtig?\n\n1. pV = nRT gilt für ideale Gase.\n2. Bei konstantem Volumen steigt der Druck proportional zur Temperatur (in Kelvin).\n3. Die Gasteilchen haben ein Eigenvolumen von null.\n4. Zwischen den Gasteilchen wirken anziehende Kräfte.\n5. Bei konstantem Druck ist das Volumen proportional zur absoluten Temperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Im Modell des idealen Gases gibt es keine Wechselwirkungen zwischen den Teilchen (keine anziehenden oder abstoßenden Kräfte).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 018 Elektrostatik – Coulomb (mittel) ──
  {
    id: "ph-typk-new3-018",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Coulomb-Gesetz sind richtig?\n\n1. Die Coulomb-Kraft ist proportional zum Produkt der beiden Ladungen.\n2. Die Kraft nimmt mit dem Quadrat des Abstands ab.\n3. Gleichnamige Ladungen ziehen sich an.\n4. Die Coulomb-Kraft wirkt entlang der Verbindungslinie der Ladungen.\n5. Die Einheit der elektrischen Ladung ist Coulomb (C).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Gleichnamige Ladungen stoßen sich ab; ungleichnamige ziehen sich an.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 020 Elektrostatik – Potential (mittel) ──
  {
    id: "ph-typk-new3-020",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum elektrischen Potential sind richtig?\n\n1. Das Potential ist die potentielle Energie pro Ladung: φ = W/q.\n2. Die Spannung ist die Differenz zweier Potentiale: U = φ₁ − φ₂.\n3. Äquipotentialflächen stehen senkrecht auf den Feldlinien.\n4. Das Potential einer positiven Punktladung nimmt mit dem Abstand zu.\n5. Die Einheit des Potentials ist Volt (V).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Das Potential einer positiven Punktladung nimmt mit dem Abstand ab (φ ∝ 1/r).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 021 Elektrostatik – Kondensator (schwer) ──
  {
    id: "ph-typk-new3-021",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Plattenkondensator sind richtig?\n\n1. Die Kapazität ist C = ε₀ · A / d.\n2. Die gespeicherte Energie ist W = ½ · C · U².\n3. Ein Dielektrikum zwischen den Platten verringert die Kapazität.\n4. Die Einheit der Kapazität ist Farad (F).\n5. Bei Parallelschaltung addieren sich die Kapazitäten: C_ges = C₁ + C₂.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Dielektrikum erhöht die Kapazität (C = ε₀ · ε_r · A / d, mit ε_r > 1).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 022 Elektrostatik – Ladung (leicht) ──
  {
    id: "ph-typk-new3-022",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur elektrischen Ladung sind richtig?\n\n1. Die Elementarladung beträgt e ≈ 1,6 · 10⁻¹⁹ C.\n2. Ladung ist quantisiert (ganzzahlige Vielfache von e).\n3. In einem abgeschlossenen System bleibt die Gesamtladung erhalten.\n4. Protonen tragen eine negative Ladung.\n5. Elektronen tragen eine negative Ladung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Protonen tragen eine positive Ladung (+e).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 025 Magnetismus – Transformator (schwer) ──
  {
    id: "ph-typk-new3-025",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Transformator sind richtig?\n\n1. Das Übersetzungsverhältnis ist U₁/U₂ = N₁/N₂.\n2. Ein idealer Transformator überträgt Leistung verlustfrei.\n3. Ein Transformator funktioniert mit Gleichstrom.\n4. Bei einem Aufwärtstransformator ist N₂ > N₁.\n5. Beim idealen Transformator gilt: U₁ · I₁ = U₂ · I₂.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 4 und 5" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Transformator benötigt Wechselstrom, da nur eine zeitliche Änderung des Flusses Induktion bewirkt.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 026 Magnetismus – Magnetfeld (leicht) ──
  {
    id: "ph-typk-new3-026",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Magnetfeld sind richtig?\n\n1. Die Einheit der magnetischen Flussdichte ist Tesla (T).\n2. Magnetische Feldlinien verlaufen außerhalb eines Magneten vom Nord- zum Südpol.\n3. Ein stromdurchflossener Leiter erzeugt ein Magnetfeld.\n4. Es gibt isolierte magnetische Monopole.\n5. Die magnetische Flussdichte im Inneren einer Spule hängt von der Windungszahl und dem Strom ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1 und 3" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Isolierte magnetische Monopole wurden nie nachgewiesen; Magnete haben stets Nord- und Südpol.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 027 Wellen – Reflexion (leicht) ──
  {
    id: "ph-typk-new3-027",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Reflexion von Wellen sind richtig?\n\n1. Der Einfallswinkel ist gleich dem Reflexionswinkel.\n2. Bei der Reflexion am festen Ende erfolgt ein Phasensprung von 180°.\n3. Reflexion tritt an Grenzflächen zwischen verschiedenen Medien auf.\n4. Bei der Reflexion ändert sich die Wellenlänge.\n5. Ein Spiegel reflektiert Licht nach dem Reflexionsgesetz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei der Reflexion bleibt die Wellenlänge unverändert, da die Welle im selben Medium bleibt.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 028 Wellen – Brechung (mittel) ──
  {
    id: "ph-typk-new3-028",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Brechung von Wellen sind richtig?\n\n1. Brechung tritt beim Übergang zwischen Medien unterschiedlicher Ausbreitungsgeschwindigkeit auf.\n2. Das Snellius'sche Brechungsgesetz lautet n₁ · sin α₁ = n₂ · sin α₂.\n3. Totalreflexion tritt auf, wenn der Einfallswinkel den Grenzwinkel überschreitet.\n4. Bei der Brechung ändert sich die Frequenz der Welle.\n5. Der Grenzwinkel der Totalreflexion hängt vom Verhältnis der Brechungsindizes ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei der Brechung bleibt die Frequenz konstant; es ändern sich Wellenlänge und Geschwindigkeit.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Wellen – Beugung (mittel) ──
  {
    id: "ph-typk-new3-029",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Beugung sind richtig?\n\n1. Beugung tritt auf, wenn Wellen auf ein Hindernis oder einen Spalt treffen.\n2. Beugung ist besonders ausgeprägt, wenn die Spaltbreite in der Größenordnung der Wellenlänge liegt.\n3. Beugung tritt nur bei Lichtwellen auf.\n4. Am Einzelspalt entsteht ein Beugungsmuster mit Haupt- und Nebenmaxima.\n5. Beugung ist eine Folge des Huygens'schen Prinzips.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Beugung tritt bei allen Wellenarten auf (Schall, Wasser, Licht, Materiewellen).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 030 Wellen – Interferenz (schwer) ──
  {
    id: "ph-typk-new3-030",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Interferenz sind richtig?\n\n1. Konstruktive Interferenz tritt bei Gangunterschied Δs = n · λ auf.\n2. Destruktive Interferenz tritt bei Gangunterschied Δs = (n + ½) · λ auf.\n3. Interferenz setzt kohärente Wellenzüge voraus.\n4. Beim Doppelspaltexperiment entsteht ein Interferenzmuster.\n5. Bei destruktiver Interferenz wird Energie vernichtet.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Energie wird nicht vernichtet, sondern umverteilt – sie fehlt an den Minima und sammelt sich an den Maxima.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 032 Wellen – Doppler-Effekt (schwer) ──
  {
    id: "ph-typk-new3-032",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Doppler-Effekt sind richtig?\n\n1. Bei Annäherung der Quelle wird die beobachtete Frequenz höher.\n2. Bei Entfernung der Quelle wird die beobachtete Frequenz niedriger.\n3. Der Doppler-Effekt tritt bei Schall- und Lichtwellen auf.\n4. Bei Annäherung der Schallquelle nimmt die Wellenlänge zu.\n5. Die Rotverschiebung von Galaxien ist eine Folge des Doppler-Effekts.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei Annäherung werden die Wellenfronten zusammengestaucht, die Wellenlänge nimmt ab.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 Kernphysik – Massendefekt (schwer) ──
  {
    id: "ph-typk-new3-034",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Massendefekt sind richtig?\n\n1. Der Massendefekt ist die Differenz zwischen der Summe der Nukleonenmassen und der tatsächlichen Kernmasse.\n2. Der Massendefekt entspricht über E = mc² der Bindungsenergie.\n3. Ein Kern ist leichter als die Summe seiner einzelnen Nukleonen.\n4. Der Massendefekt ist bei leichten Kernen am größten.\n5. Die Masse-Energie-Äquivalenz wurde von Einstein formuliert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Massendefekt pro Nukleon ist bei mittelschweren Kernen (um Fe-56) am größten, nicht bei leichten.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 035 Kernphysik – E=mc² (mittel) ──
  {
    id: "ph-typk-new3-035",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Masse-Energie-Äquivalenz sind richtig?\n\n1. E = mc² beschreibt die Äquivalenz von Masse und Energie.\n2. c ist die Lichtgeschwindigkeit im Vakuum (≈ 3 · 10⁸ m/s).\n3. Selbst kleine Massen entsprechen enormen Energiemengen.\n4. Die Formel gilt nur für Kernreaktionen.\n5. Die Ruheenergie eines Protons lässt sich mit E = mc² berechnen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: E = mc² gilt universell, nicht nur für Kernreaktionen – jede Masse hat eine äquivalente Ruheenergie.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 038 Mechanik – Arbeit und Energie (leicht) ──
  {
    id: "ph-typk-new3-038",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu Arbeit und Energie sind richtig?\n\n1. Arbeit ist das Skalarprodukt aus Kraft und Weg: W = F · s · cos α.\n2. Die Einheit der Arbeit ist Joule (J).\n3. Kinetische Energie ist E_kin = ½ · m · v².\n4. Potentielle Energie im Gravitationsfeld ist E_pot = m · g · h.\n5. Arbeit wird auch verrichtet, wenn die Kraft senkrecht zum Weg steht.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Wenn die Kraft senkrecht zum Weg steht (α = 90°), ist cos 90° = 0, also W = 0.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 039 Mechanik – Leistung (leicht) ──
  {
    id: "ph-typk-new3-039",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Leistung sind richtig?\n\n1. Leistung ist Arbeit pro Zeit: P = W/t.\n2. Die Einheit der Leistung ist Watt (W).\n3. 1 PS ≈ 736 W.\n4. Die elektrische Leistung berechnet sich als P = U · I.\n5. Leistung und Energie sind dasselbe.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Leistung ist die Energie pro Zeiteinheit, nicht dasselbe wie Energie.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 040 Fluidmechanik – Reynolds-Zahl (schwer) ──
  {
    id: "ph-typk-new3-040",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Reynolds-Zahl sind richtig?\n\n1. Die Reynolds-Zahl ist dimensionslos.\n2. Hohe Reynolds-Zahlen deuten auf turbulente Strömung hin.\n3. Niedrige Reynolds-Zahlen deuten auf laminare Strömung hin.\n4. Die Reynolds-Zahl hängt von Geschwindigkeit, Dichte, Viskosität und einer charakteristischen Länge ab.\n5. Turbulente Strömungen haben stets niedrige Reynolds-Zahlen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Turbulente Strömungen haben hohe Reynolds-Zahlen (Re > ≈ 2300 in Rohren), nicht niedrige.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 041 Thermodynamik – Wärmekapazität (mittel) ──
  {
    id: "ph-typk-new3-041",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmekapazität sind richtig?\n\n1. Die spezifische Wärmekapazität c gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen.\n2. Q = m · c · ΔT.\n3. Wasser hat eine besonders hohe spezifische Wärmekapazität.\n4. Die Einheit ist J/(kg·K).\n5. Alle Metalle haben die gleiche spezifische Wärmekapazität.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Verschiedene Metalle haben unterschiedliche spezifische Wärmekapazitäten (z. B. Aluminium ≈ 900 J/(kg·K), Eisen ≈ 450 J/(kg·K)).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 043 Elektrostatik – Energie im E-Feld (schwer) ──
  {
    id: "ph-typk-new3-043",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Energie im elektrischen Feld sind richtig?\n\n1. Die Energiedichte im E-Feld ist w = ½ · ε₀ · E².\n2. Zum Aufladen eines Kondensators muss Arbeit gegen das E-Feld verrichtet werden.\n3. Die im Kondensator gespeicherte Energie kann vollständig in Wärme umgewandelt werden.\n4. Die gespeicherte Energie ist proportional zum Quadrat der Spannung.\n5. Verdopplung der Spannung vervierfacht die gespeicherte Energie.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Nur 2, 3 und 4" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. w = ½ε₀E², Arbeit muss verrichtet werden, Energie kann z. B. über Widerstand als Wärme abgegeben werden, W = ½CU² ∝ U², also vervierfacht sich W bei 2U.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Magnetismus – Spule (mittel) ──
  {
    id: "ph-typk-new3-044",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur magnetischen Spule sind richtig?\n\n1. Das Feld im Inneren einer langen Spule ist näherungsweise homogen.\n2. Die Flussdichte im Inneren ist B = μ₀ · n · I (n = Windungszahl pro Länge).\n3. Ein Eisenkern in der Spule schwächt das Magnetfeld.\n4. Eine Spule mit Wechselstrom erzeugt ein zeitlich veränderliches Magnetfeld.\n5. Die Induktivität einer Spule hat die Einheit Henry (H).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ein Eisenkern verstärkt das Magnetfeld (Permeabilität μ_r >> 1).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Wellen – Polarisation (schwer) ──
  {
    id: "ph-typk-new3-045",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zur Polarisation sind richtig?\n\n1. Polarisation ist ein Phänomen transversaler Wellen.\n2. Unpolarisiertes Licht schwingt in allen Ebenen senkrecht zur Ausbreitungsrichtung.\n3. Ein Polarisationsfilter lässt nur eine Schwingungsebene durch.\n4. Longitudinalwellen können polarisiert werden.\n5. Durch zwei gekreuzte Polarisationsfilter gelangt kein Licht.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Longitudinalwellen (z. B. Schall) können nicht polarisiert werden, da sie in Ausbreitungsrichtung schwingen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 046 Mechanik – Schwerpunkt (leicht) ──
  {
    id: "ph-typk-new3-046",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Schwerpunkt sind richtig?\n\n1. Der Schwerpunkt eines homogenen Körpers liegt im geometrischen Mittelpunkt.\n2. Der Schwerpunkt kann außerhalb des Körpers liegen (z. B. bei einem Ring).\n3. Ein Körper ist stabil, wenn der Schwerpunkt möglichst tief liegt.\n4. Die gesamte Gewichtskraft kann im Schwerpunkt angesetzt werden.\n5. Der Schwerpunkt hängt nur von der Form, nicht von der Massenverteilung ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Schwerpunkt hängt von der Massenverteilung ab; bei inhomogener Verteilung verschiebt er sich.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 047 Mechanik – Schiefe Ebene (mittel) ──
  {
    id: "ph-typk-new3-047",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur schiefen Ebene sind richtig?\n\n1. Die Hangabtriebskraft ist F_H = m · g · sin α.\n2. Die Normalkraft ist F_N = m · g · cos α.\n3. Ohne Reibung gleitet jeder Körper auf einer schiefen Ebene herunter.\n4. Die Beschleunigung auf der reibungsfreien schiefen Ebene hängt von der Masse ab.\n5. Eine schiefe Ebene ist eine einfache Maschine.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: a = g · sin α – die Beschleunigung ist masseunabhängig (wie beim freien Fall).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 048 Fluidmechanik – Oberflächenspannung (mittel) ──
  {
    id: "ph-typk-new3-048",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zur Oberflächenspannung sind richtig?\n\n1. Die Oberflächenspannung entsteht durch Kohäsionskräfte zwischen den Flüssigkeitsmolekülen.\n2. Tenside verringern die Oberflächenspannung.\n3. Wasser hat eine hohe Oberflächenspannung wegen der Wasserstoffbrücken.\n4. Die Einheit der Oberflächenspannung ist N/m.\n5. Die Oberflächenspannung nimmt mit steigender Temperatur zu.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Oberflächenspannung nimmt mit steigender Temperatur ab, da die Kohäsionskräfte schwächer werden.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Kernphysik – Alpha-Zerfall (mittel) ──
  {
    id: "ph-typk-new3-049",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Alpha-Zerfall sind richtig?\n\n1. Ein α-Teilchen besteht aus 2 Protonen und 2 Neutronen.\n2. Die Ordnungszahl des Tochterkerns ist um 2 geringer.\n3. Die Massenzahl des Tochterkerns ist um 4 geringer.\n4. α-Strahlung hat eine hohe Reichweite in Luft (mehrere Meter).\n5. α-Teilchen sind Helium-4-Kerne.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: α-Strahlung hat nur wenige Zentimeter Reichweite in Luft und wird schon durch ein Blatt Papier abgeschirmt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 050 Kernphysik – Beta-Zerfall (mittel) ──
  {
    id: "ph-typk-new3-050",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zum Beta-Zerfall sind richtig?\n\n1. Beim β⁻-Zerfall wird ein Elektron emittiert.\n2. Beim β⁻-Zerfall wandelt sich ein Neutron in ein Proton um.\n3. Die Ordnungszahl erhöht sich beim β⁻-Zerfall um 1.\n4. Die Massenzahl ändert sich beim β-Zerfall.\n5. Beim β⁻-Zerfall wird zusätzlich ein Antineutrino emittiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Massenzahl bleibt beim Beta-Zerfall konstant (A bleibt gleich, nur Z ändert sich).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 051 Kernphysik – Gamma-Strahlung (leicht) ──
  {
    id: "ph-typk-new3-051",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Gamma-Strahlung sind richtig?\n\n1. Gamma-Strahlung ist hochenergetische elektromagnetische Strahlung.\n2. Gamma-Strahlung hat die kürzeste Wellenlänge im EM-Spektrum.\n3. Gamma-Strahlung ändert weder Ordnungs- noch Massenzahl.\n4. Gamma-Strahlung wird durch dicke Bleiplatten abgeschirmt.\n5. Gamma-Strahlung besteht aus Heliumkernen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Heliumkerne sind α-Teilchen; Gamma-Strahlung besteht aus Photonen.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 052 Elektrostatik – Feldlinien (leicht) ──
  {
    id: "ph-typk-new3-052",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu elektrischen Feldlinien sind richtig?\n\n1. Feldlinien beginnen auf positiven und enden auf negativen Ladungen.\n2. Die Dichte der Feldlinien zeigt die Stärke des Feldes an.\n3. Feldlinien schneiden sich nie.\n4. Im Inneren eines geladenen Hohlkörpers verlaufen Feldlinien radial.\n5. Feldlinien stehen senkrecht auf Leiteroberflächen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Im Inneren eines geladenen Hohlkörpers ist das Feld null (keine Feldlinien) – alle Ladung sitzt auf der Oberfläche.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 053 Thermodynamik – Carnot (schwer) ──
  {
    id: "ph-typk-new3-053",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zum Carnot-Prozess sind richtig?\n\n1. Der Carnot-Wirkungsgrad ist η = 1 − T_kalt/T_warm (in Kelvin).\n2. Der Carnot-Prozess ist der effizienteste Kreisprozess zwischen zwei Temperaturen.\n3. Der Carnot-Wirkungsgrad kann 100 % erreichen, wenn T_kalt = 0 K.\n4. Reale Wärmekraftmaschinen erreichen nie den Carnot-Wirkungsgrad.\n5. Der Carnot-Prozess besteht aus zwei isothermen und zwei adiabatischen Zustandsänderungen.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 2, 4 und 5" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Nur 1 und 2" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. η_Carnot = 1 − T_k/T_w; er ist maximal effizient; bei 0 K (theoretisch unerreichbar) wäre η = 100 %; reale Maschinen haben Verluste; der Prozess hat 2 isotherme + 2 adiabatische Schritte.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 054 Magnetismus – Magnetischer Fluss (mittel) ──
  {
    id: "ph-typk-new3-054",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum magnetischen Fluss sind richtig?\n\n1. Der magnetische Fluss ist Φ = B · A · cos θ.\n2. Die Einheit des magnetischen Flusses ist Weber (Wb).\n3. Der Fluss ist maximal, wenn die Fläche senkrecht zum Feld steht.\n4. 1 Wb = 1 V·s.\n5. Der Fluss durch eine geschlossene Oberfläche ist stets positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Gesamtfluss durch eine geschlossene Oberfläche ist stets null (Gaußsches Gesetz für Magnetismus; es gibt keine magnetischen Monopole).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Wellen – Huygens'sches Prinzip (schwer) ──
  {
    id: "ph-typk-new3-055",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Huygens'schen Prinzip sind richtig?\n\n1. Jeder Punkt einer Wellenfront ist Ausgangspunkt einer Elementarwelle.\n2. Die Einhüllende aller Elementarwellen ergibt die neue Wellenfront.\n3. Das Prinzip erklärt Beugung und Brechung.\n4. Elementarwellen breiten sich nur in Vorwärtsrichtung aus.\n5. Das Huygens'sche Prinzip gilt nur für Lichtwellen.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3 korrekt. 4 falsch: Elementarwellen breiten sich in alle Richtungen aus (Huygens-Fresnel ergänzt die Richtungsabhängigkeit). 5 falsch: Das Prinzip gilt für alle Wellentypen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 056 Mechanik – Federkraft (leicht) ──
  {
    id: "ph-typk-new3-056",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Hooke'schen Gesetz sind richtig?\n\n1. Die Federkraft ist proportional zur Auslenkung: F = −k · x.\n2. Die Federkonstante k hat die Einheit N/m.\n3. Das Hooke'sche Gesetz gilt nur im elastischen Bereich.\n4. Die in einer Feder gespeicherte Energie ist E = ½ · k · x².\n5. Eine härtere Feder hat eine kleinere Federkonstante.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine härtere Feder hat eine größere Federkonstante k.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 058 Elektrostatik – Dielektrikum (schwer) ──
  {
    id: "ph-typk-new3-058",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zu Dielektrika im Kondensator sind richtig?\n\n1. Ein Dielektrikum erhöht die Kapazität um den Faktor ε_r.\n2. Das elektrische Feld im Dielektrikum wird geschwächt.\n3. Die Polarisation des Dielektrikums erzeugt ein Gegenfeld.\n4. Vakuum hat die Dielektrizitätskonstante ε_r = 0.\n5. Bei konstantem Q und Einfügen eines Dielektrikums sinkt die Spannung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Vakuum hat ε_r = 1, nicht 0.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 059 Magnetismus – Hall-Effekt (schwer) ──
  {
    id: "ph-typk-new3-059",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Hall-Effekt sind richtig?\n\n1. Der Hall-Effekt tritt auf, wenn ein stromdurchflossener Leiter in einem Magnetfeld liegt.\n2. Senkrecht zum Strom und zum Magnetfeld baut sich eine Hall-Spannung auf.\n3. Die Hall-Spannung ermöglicht die Bestimmung der Ladungsträgerart (positiv/negativ).\n4. Der Hall-Effekt tritt nur in Halbleitern auf.\n5. Die Hall-Spannung ist proportional zur magnetischen Flussdichte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Hall-Effekt tritt in allen Leitern auf (Metalle und Halbleiter), nicht nur in Halbleitern.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 060 Wellen – Wellengleichung (mittel) ──
  {
    id: "ph-typk-new3-060",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zu Welleneigenschaften sind richtig?\n\n1. Die Ausbreitungsgeschwindigkeit ist c = λ · f.\n2. Die Amplitude bestimmt die Energie der Welle.\n3. Die Frequenz bestimmt die Tonhöhe bei Schall.\n4. Die Wellenlänge ändert sich beim Übergang in ein anderes Medium.\n5. Frequenz und Periode sind zueinander proportional.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Frequenz und Periode sind umgekehrt proportional (f = 1/T).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 061 Mechanik – Gravitationsgesetz (mittel) ──
  {
    id: "ph-typk-new3-061",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum Gravitationsgesetz sind richtig?\n\n1. Die Gravitationskraft ist proportional zum Produkt der Massen.\n2. Die Gravitationskraft nimmt mit dem Quadrat des Abstands ab.\n3. Die Gravitationskonstante G ≈ 6,67 · 10⁻¹¹ N·m²/kg².\n4. Gravitation wirkt nur auf der Erdoberfläche.\n5. Die Gravitationskraft ist stets anziehend.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Gravitation wirkt überall im Universum zwischen allen Massen, nicht nur auf der Erdoberfläche.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Fluidmechanik – Kapillareffekt (mittel) ──
  {
    id: "ph-typk-new3-062",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zum Kapillareffekt sind richtig?\n\n1. Der Kapillareffekt beruht auf dem Zusammenspiel von Kohäsion und Adhäsion.\n2. Wasser steigt in dünnen Glaskapillaren nach oben.\n3. Quecksilber zeigt in Glaskapillaren einen konvexen Meniskus.\n4. Die Steighöhe nimmt mit größerem Kapillarradius zu.\n5. Der Kapillareffekt spielt beim Wassertransport in Pflanzen eine Rolle.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Steighöhe nimmt mit kleinerem Radius zu (h ∝ 1/r).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 063 Thermodynamik – Entropie (schwer) ──
  {
    id: "ph-typk-new3-063",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Entropie sind richtig?\n\n1. Die Entropie ist ein Maß für die Unordnung eines Systems.\n2. In einem abgeschlossenen System nimmt die Entropie nie ab.\n3. Die Einheit der Entropie ist J/K.\n4. Bei reversiblen Prozessen bleibt die Gesamtentropie konstant.\n5. Bei der Mischung zweier Gase nimmt die Entropie ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei der Mischung zweier Gase nimmt die Entropie zu (mehr Unordnung, irreversibler Prozess).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 064 Elektrostatik – Parallelschaltung Widerstände (leicht) ──
  {
    id: "ph-typk-new3-064",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Parallelschaltung von Widerständen sind richtig?\n\n1. Die Spannung über alle parallelen Widerstände ist gleich.\n2. Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.\n3. Die Ströme durch die einzelnen Widerstände addieren sich zum Gesamtstrom.\n4. 1/R_ges = 1/R₁ + 1/R₂ + …\n5. Bei Parallelschaltung zweier gleicher Widerstände R ist R_ges = 2R.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei zwei gleichen Widerständen R in Parallelschaltung ist R_ges = R/2, nicht 2R.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 065 Mechanik – Wurf (mittel) ──
  {
    id: "ph-typk-new3-065",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zum schrägen Wurf sind richtig?\n\n1. Die horizontale Geschwindigkeitskomponente bleibt konstant (ohne Luftwiderstand).\n2. Die Wurfweite ist maximal bei einem Abwurfwinkel von 45°.\n3. Die Flugbahn ist eine Parabel.\n4. Die vertikale Komponente unterliegt der Erdbeschleunigung.\n5. Die Flugzeit hängt von der horizontalen Anfangsgeschwindigkeit ab.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Flugzeit hängt nur von der vertikalen Anfangsgeschwindigkeit und g ab, nicht von der horizontalen Komponente.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 066 Magnetismus – Selbstinduktion (schwer) ──
  {
    id: "ph-typk-new3-066",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zur Selbstinduktion sind richtig?\n\n1. Bei Stromänderung in einer Spule wird eine Gegenspannung induziert.\n2. Die Selbstinduktionsspannung ist U = −L · dI/dt.\n3. Die Induktivität L hängt von der Windungszahl und der Geometrie der Spule ab.\n4. Die in einer Spule gespeicherte Energie ist W = ½ · L · I².\n5. Selbstinduktion tritt nur bei Gleichstrom auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Selbstinduktion tritt bei jeder Stromänderung auf, besonders ausgeprägt bei Wechselstrom. Bei konstantem Gleichstrom gibt es keine Induktion.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Wellen – Ultraschall (mittel) ──
  {
    id: "ph-typk-new3-067",
    subject: "physik",
    chapter: "phys-kap3",
    text: "Welche der folgenden Aussagen zum Ultraschall sind richtig?\n\n1. Ultraschall hat Frequenzen oberhalb der menschlichen Hörschwelle (> 20 kHz).\n2. Ultraschall wird in der medizinischen Diagnostik eingesetzt.\n3. Ultraschall breitet sich im Vakuum aus.\n4. An Grenzflächen wird Ultraschall teilweise reflektiert.\n5. Die Echozeit ermöglicht die Berechnung von Abständen.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Ultraschall ist Schall und benötigt ein Medium zur Ausbreitung; im Vakuum kann er sich nicht ausbreiten.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Mechanik – Newton'sche Gesetze (leicht) ──
  {
    id: "ph-typk-new3-069",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zu den Newton'schen Gesetzen sind richtig?\n\n1. Das Trägheitsgesetz besagt: Ohne Kraft bleibt der Bewegungszustand erhalten.\n2. F = m · a ist das Aktionsgesetz.\n3. Actio = Reactio (drittes Newton'sches Gesetz).\n4. Kräftepaare nach dem dritten Gesetz greifen an verschiedenen Körpern an.\n5. Das Trägheitsgesetz gilt nur für ruhende Körper.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Trägheitsgesetz gilt für ruhende und gleichförmig bewegte Körper – ohne Kraft bleibt jeder Bewegungszustand erhalten.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 070 Fluidmechanik – Strömungsarten (leicht) ──
  {
    id: "ph-typk-new3-070",
    subject: "physik",
    chapter: "phys-kap2",
    text: "Welche der folgenden Aussagen zu Strömungsarten sind richtig?\n\n1. Bei laminarer Strömung bewegen sich Fluidschichten parallel zueinander.\n2. Turbulente Strömung ist durch Wirbel und unregelmäßige Bewegung gekennzeichnet.\n3. Die Reynoldszahl entscheidet über laminare oder turbulente Strömung.\n4. In engen Blutgefäßen ist die Strömung normalerweise laminar.\n5. Laminare und turbulente Strömung treten nie im selben System auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: In einem System können je nach Bedingungen (z. B. nach einer Verengung oder Abzweigung) beide Strömungsarten auftreten.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Thermodynamik – Wärmepumpe (schwer) ──
  {
    id: "ph-typk-new3-071",
    subject: "physik",
    chapter: "phys-kap4",
    text: "Welche der folgenden Aussagen zur Wärmepumpe sind richtig?\n\n1. Eine Wärmepumpe transportiert Wärme von einem kälteren zu einem wärmeren Reservoir.\n2. Eine Wärmepumpe benötigt Arbeit (oder Energie) für den Betrieb.\n3. Die Leistungszahl einer Wärmepumpe kann größer als 1 sein.\n4. Der Kühlschrank arbeitet nach dem gleichen Prinzip wie eine Wärmepumpe.\n5. Eine Wärmepumpe widerspricht dem zweiten Hauptsatz der Thermodynamik.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Wärmepumpe widerspricht nicht dem zweiten Hauptsatz, da ihr Betrieb Arbeit erfordert – spontan (ohne Arbeit) fließt Wärme nicht von kalt nach warm.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 072 Elektrostatik – Ohm'sches Gesetz (leicht) ──
  {
    id: "ph-typk-new3-072",
    subject: "physik",
    chapter: "phys-kap5",
    text: "Welche der folgenden Aussagen zum Ohm'schen Gesetz sind richtig?\n\n1. U = R · I.\n2. Der Widerstand R hat die Einheit Ohm (Ω).\n3. Bei konstantem Widerstand ist der Strom proportional zur Spannung.\n4. Der Widerstand eines Leiters hängt von Material, Länge und Querschnitt ab.\n5. Alle Materialien befolgen das Ohm'sche Gesetz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht alle Materialien sind ohm'sch – z. B. Halbleiter, Dioden und Elektrolyte zeigen nichtlineares Verhalten.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 074 Kernphysik – Kernfusion (schwer) ──
  {
    id: "ph-typk-new3-074",
    subject: "physik",
    chapter: "phys-kap7",
    text: "Welche der folgenden Aussagen zur Kernfusion sind richtig?\n\n1. Bei der Fusion verschmelzen leichte Kerne zu schwereren.\n2. Die Fusion ist die Energiequelle der Sonne.\n3. Zur Fusion sind extrem hohe Temperaturen nötig (Plasma).\n4. Bei der Fusion wird weniger Energie frei als bei der Kernspaltung.\n5. Der Massendefekt bei der Fusion wird als Energie freigesetzt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Pro Nukleon wird bei der Fusion mehr Energie frei als bei der Spaltung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Mechanik – Energieerhaltung (mittel) ──
  {
    id: "ph-typk-new3-075",
    subject: "physik",
    chapter: "phys-kap1",
    text: "Welche der folgenden Aussagen zur Energieerhaltung sind richtig?\n\n1. In einem abgeschlossenen System bleibt die Gesamtenergie konstant.\n2. Energie kann von einer Form in eine andere umgewandelt werden.\n3. Beim freien Fall wird potentielle in kinetische Energie umgewandelt.\n4. Am höchsten Punkt eines senkrechten Wurfs ist die kinetische Energie maximal.\n5. Der Energieerhaltungssatz gilt universell in der Physik.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Am höchsten Punkt ist die kinetische Energie minimal (v = 0 beim senkrechten Wurf) und die potentielle Energie maximal.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
];
