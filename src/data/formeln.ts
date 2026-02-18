// ──────────────────────────────────────────────
// Formelsammlung – BMS (Physik, Chemie, Mathematik)
// ──────────────────────────────────────────────

export interface Formel {
  id: string;
  fach: "physik" | "chemie" | "mathematik";
  kapitel: string;
  name: string;
  formel: string;
  variablen: string;
  einheiten: string;
  beispiel: string;
}

export const formeln: Formel[] = [
  // ═══════════════════════════════════════════
  // PHYSIK (15 Formeln)
  // ═══════════════════════════════════════════

  {
    id: "p01",
    fach: "physik",
    kapitel: "Mechanik",
    name: "Geschwindigkeit",
    formel: "v = s / t",
    variablen: "v = Geschwindigkeit, s = Strecke, t = Zeit",
    einheiten: "v [m/s], s [m], t [s]",
    beispiel:
      "Ein Auto fährt 100 m in 5 s → v = 100/5 = 20 m/s = 72 km/h.",
  },
  {
    id: "p02",
    fach: "physik",
    kapitel: "Mechanik",
    name: "Kraft (2. Newtonsches Gesetz)",
    formel: "F = m · a",
    variablen: "F = Kraft, m = Masse, a = Beschleunigung",
    einheiten: "F [N], m [kg], a [m/s²]",
    beispiel:
      "m = 10 kg, a = 3 m/s² → F = 10 · 3 = 30 N.",
  },
  {
    id: "p03",
    fach: "physik",
    kapitel: "Energie",
    name: "Kinetische Energie",
    formel: "E_kin = ½ · m · v²",
    variablen: "E_kin = kinetische Energie, m = Masse, v = Geschwindigkeit",
    einheiten: "E [J], m [kg], v [m/s]",
    beispiel:
      "m = 2 kg, v = 4 m/s → E_kin = ½ · 2 · 16 = 16 J.",
  },
  {
    id: "p04",
    fach: "physik",
    kapitel: "Energie",
    name: "Potenzielle Energie",
    formel: "E_pot = m · g · h",
    variablen: "E_pot = potenzielle Energie, m = Masse, g = 9,81 m/s², h = Höhe",
    einheiten: "E [J], m [kg], h [m]",
    beispiel:
      "m = 5 kg, h = 10 m → E_pot = 5 · 9,81 · 10 ≈ 490,5 J.",
  },
  {
    id: "p05",
    fach: "physik",
    kapitel: "Mechanik",
    name: "Druck",
    formel: "p = F / A",
    variablen: "p = Druck, F = Kraft, A = Fläche",
    einheiten: "p [Pa = N/m²], F [N], A [m²]",
    beispiel:
      "F = 200 N auf A = 0,5 m² → p = 200/0,5 = 400 Pa.",
  },
  {
    id: "p06",
    fach: "physik",
    kapitel: "Elektrizität",
    name: "Ohmsches Gesetz",
    formel: "U = R · I",
    variablen: "U = Spannung, R = Widerstand, I = Stromstärke",
    einheiten: "U [V], R [Ω], I [A]",
    beispiel:
      "R = 100 Ω, I = 0,5 A → U = 100 · 0,5 = 50 V.",
  },
  {
    id: "p07",
    fach: "physik",
    kapitel: "Elektrizität",
    name: "Elektrische Leistung",
    formel: "P = U · I",
    variablen: "P = Leistung, U = Spannung, I = Stromstärke",
    einheiten: "P [W], U [V], I [A]",
    beispiel:
      "U = 230 V, I = 2 A → P = 230 · 2 = 460 W.",
  },
  {
    id: "p08",
    fach: "physik",
    kapitel: "Wellen",
    name: "Frequenz und Periodendauer",
    formel: "f = 1 / T",
    variablen: "f = Frequenz, T = Periodendauer",
    einheiten: "f [Hz = 1/s], T [s]",
    beispiel:
      "T = 0,02 s → f = 1/0,02 = 50 Hz (Netzfrequenz).",
  },
  {
    id: "p09",
    fach: "physik",
    kapitel: "Wellen",
    name: "Wellengleichung",
    formel: "c = λ · f",
    variablen: "c = Ausbreitungsgeschwindigkeit, λ = Wellenlänge, f = Frequenz",
    einheiten: "c [m/s], λ [m], f [Hz]",
    beispiel:
      "Licht: c = 3·10⁸ m/s, λ = 500 nm → f = 6·10¹⁴ Hz.",
  },
  {
    id: "p10",
    fach: "physik",
    kapitel: "Wärmelehre",
    name: "Wärmemenge",
    formel: "Q = m · c · ΔT",
    variablen: "Q = Wärmemenge, m = Masse, c = spez. Wärmekapazität, ΔT = Temperaturänderung",
    einheiten: "Q [J], m [kg], c [J/(kg·K)], ΔT [K]",
    beispiel:
      "1 kg Wasser um 10 K erwärmen: Q = 1 · 4186 · 10 = 41 860 J ≈ 41,9 kJ.",
  },
  {
    id: "p11",
    fach: "physik",
    kapitel: "Wärmelehre",
    name: "Ideales Gasgesetz",
    formel: "p · V = n · R · T",
    variablen: "p = Druck, V = Volumen, n = Stoffmenge, R = 8,314 J/(mol·K), T = Temperatur",
    einheiten: "p [Pa], V [m³], n [mol], T [K]",
    beispiel:
      "1 mol bei 273 K, 101 325 Pa → V = nRT/p ≈ 0,0224 m³ = 22,4 L.",
  },
  {
    id: "p12",
    fach: "physik",
    kapitel: "Quantenphysik",
    name: "Photonenenergie",
    formel: "E = h · f",
    variablen: "E = Energie, h = 6,626·10⁻³⁴ J·s (Plancksches Wirkungsquantum), f = Frequenz",
    einheiten: "E [J oder eV], f [Hz]",
    beispiel:
      "Grünes Licht f ≈ 5,5·10¹⁴ Hz → E ≈ 3,6·10⁻¹⁹ J ≈ 2,25 eV.",
  },
  {
    id: "p13",
    fach: "physik",
    kapitel: "Optik",
    name: "Brechungsindex",
    formel: "n = c₀ / v",
    variablen: "n = Brechungsindex, c₀ = Lichtgeschwindigkeit im Vakuum, v = Lichtgeschwindigkeit im Medium",
    einheiten: "n [dimensionslos], c₀ [m/s], v [m/s]",
    beispiel:
      "Glas: v ≈ 2·10⁸ m/s → n = 3·10⁸ / 2·10⁸ = 1,5.",
  },
  {
    id: "p14",
    fach: "physik",
    kapitel: "Mechanik",
    name: "Arbeit",
    formel: "W = F · s",
    variablen: "W = Arbeit, F = Kraft (in Wegrichtung), s = Weg",
    einheiten: "W [J = N·m], F [N], s [m]",
    beispiel:
      "F = 50 N, s = 3 m → W = 50 · 3 = 150 J.",
  },
  {
    id: "p15",
    fach: "physik",
    kapitel: "Mechanik",
    name: "Gravitationskraft",
    formel: "F_G = G · m₁ · m₂ / r²",
    variablen: "F_G = Gravitationskraft, G = 6,674·10⁻¹¹ N·m²/kg², m₁/m₂ = Massen, r = Abstand",
    einheiten: "F [N], m [kg], r [m]",
    beispiel:
      "Erde–Mond: m₁ ≈ 6·10²⁴ kg, m₂ ≈ 7,3·10²² kg, r ≈ 3,8·10⁸ m → F ≈ 2·10²⁰ N.",
  },

  // ═══════════════════════════════════════════
  // CHEMIE (10 Formeln)
  // ═══════════════════════════════════════════

  {
    id: "c01",
    fach: "chemie",
    kapitel: "Säure-Base",
    name: "pH-Wert",
    formel: "pH = −log₁₀[H⁺]",
    variablen: "pH = pH-Wert, [H⁺] = Konzentration der H⁺-Ionen in mol/L",
    einheiten: "pH [dimensionslos], [H⁺] [mol/L]",
    beispiel:
      "[H⁺] = 10⁻³ mol/L → pH = −log(10⁻³) = 3 (sauer).",
  },
  {
    id: "c02",
    fach: "chemie",
    kapitel: "Säure-Base",
    name: "pOH-Wert",
    formel: "pOH = −log₁₀[OH⁻]",
    variablen: "pOH = pOH-Wert, [OH⁻] = Konzentration der OH⁻-Ionen",
    einheiten: "pOH [dimensionslos], [OH⁻] [mol/L]",
    beispiel:
      "[OH⁻] = 10⁻⁴ mol/L → pOH = 4 → pH = 10 (basisch).",
  },
  {
    id: "c03",
    fach: "chemie",
    kapitel: "Säure-Base",
    name: "Beziehung pH und pOH",
    formel: "pH + pOH = 14",
    variablen: "Gilt bei 25 °C (Autoprotolyse des Wassers: K_w = 10⁻¹⁴)",
    einheiten: "dimensionslos",
    beispiel:
      "pH = 3 → pOH = 14 − 3 = 11.",
  },
  {
    id: "c04",
    fach: "chemie",
    kapitel: "Stöchiometrie",
    name: "Stoffmenge",
    formel: "n = m / M",
    variablen: "n = Stoffmenge, m = Masse, M = molare Masse",
    einheiten: "n [mol], m [g], M [g/mol]",
    beispiel:
      "18 g Wasser (M = 18 g/mol) → n = 18/18 = 1 mol.",
  },
  {
    id: "c05",
    fach: "chemie",
    kapitel: "Stöchiometrie",
    name: "Konzentration (Molarität)",
    formel: "c = n / V",
    variablen: "c = Konzentration, n = Stoffmenge, V = Volumen der Lösung",
    einheiten: "c [mol/L], n [mol], V [L]",
    beispiel:
      "0,5 mol NaCl in 2 L → c = 0,5/2 = 0,25 mol/L.",
  },
  {
    id: "c06",
    fach: "chemie",
    kapitel: "Gasgesetze",
    name: "Ideales Gasgesetz",
    formel: "p · V = n · R · T",
    variablen: "p = Druck, V = Volumen, n = Stoffmenge, R = 8,314 J/(mol·K), T = Temperatur",
    einheiten: "p [Pa], V [m³], n [mol], T [K]",
    beispiel:
      "2 mol Gas bei 300 K, 1 atm → V = 2·8,314·300/101325 ≈ 0,049 m³ ≈ 49 L.",
  },
  {
    id: "c07",
    fach: "chemie",
    kapitel: "Thermodynamik",
    name: "Gibbs-Energie",
    formel: "ΔG = ΔH − T · ΔS",
    variablen: "ΔG = freie Enthalpie, ΔH = Enthalpieänderung, T = Temperatur, ΔS = Entropieänderung",
    einheiten: "ΔG [kJ/mol], ΔH [kJ/mol], T [K], ΔS [kJ/(mol·K)]",
    beispiel:
      "ΔH = −100 kJ/mol, ΔS = 0,2 kJ/(mol·K), T = 298 K → ΔG = −100 − 298·0,2 = −159,6 kJ/mol (spontan).",
  },
  {
    id: "c08",
    fach: "chemie",
    kapitel: "Gleichgewicht",
    name: "Massenwirkungsgesetz",
    formel: "K = [Produkte]ⁿ / [Edukte]ᵐ",
    variablen: "K = Gleichgewichtskonstante, [ ] = Konzentrationen, n/m = stöchiometrische Koeffizienten",
    einheiten: "K [abhängig von Reaktion]",
    beispiel:
      "A + B ⇌ C: K = [C]/([A]·[B]). K > 1 → Gleichgewicht auf Produktseite.",
  },
  {
    id: "c09",
    fach: "chemie",
    kapitel: "Elektrochemie",
    name: "Nernst-Gleichung",
    formel: "E = E⁰ − (R·T)/(n·F) · ln(Q)",
    variablen: "E = Elektrodenpotenzial, E⁰ = Standardpotenzial, R = 8,314, T = Temperatur, n = Elektronenzahl, F = 96 485 C/mol, Q = Reaktionsquotient",
    einheiten: "E [V], T [K]",
    beispiel:
      "Bei 25 °C vereinfacht: E = E⁰ − (0,0592/n) · log(Q). Cu²⁺/Cu: E⁰ = +0,34 V.",
  },
  {
    id: "c10",
    fach: "chemie",
    kapitel: "Redoxchemie",
    name: "Oxidationszahlen – Regeln",
    formel: "Σ Oxidationszahlen = Ladung",
    variablen: "Elemente: 0 | H: +I (außer Metallhydride: −I) | O: −II (außer Peroxide: −I) | Summe in Verbindung = 0, in Ion = Ionenladung",
    einheiten: "dimensionslos (römische Ziffern)",
    beispiel:
      "H₂SO₄: H = +I, O = −II → S: 2·(+1) + x + 4·(−2) = 0 → x = +VI.",
  },

  // ═══════════════════════════════════════════
  // MATHEMATIK (10 Formeln)
  // ═══════════════════════════════════════════

  {
    id: "m01",
    fach: "mathematik",
    kapitel: "Algebra",
    name: "Quadratische Formel (Lösungsformel)",
    formel: "x = (−b ± √(b² − 4ac)) / (2a)",
    variablen: "a, b, c = Koeffizienten von ax² + bx + c = 0",
    einheiten: "x [reelle Zahlen]",
    beispiel:
      "x² − 5x + 6 = 0 → x = (5 ± √(25−24))/2 = (5 ± 1)/2 → x₁ = 3, x₂ = 2.",
  },
  {
    id: "m02",
    fach: "mathematik",
    kapitel: "Algebra",
    name: "Binomische Formeln",
    formel: "(a+b)² = a² + 2ab + b²\n(a−b)² = a² − 2ab + b²\n(a+b)(a−b) = a² − b²",
    variablen: "a, b = beliebige Terme",
    einheiten: "—",
    beispiel:
      "(3+2)² = 9 + 12 + 4 = 25 ✓ | (5+3)(5−3) = 25 − 9 = 16 ✓",
  },
  {
    id: "m03",
    fach: "mathematik",
    kapitel: "Geometrie",
    name: "Kreisfläche",
    formel: "A = π · r²",
    variablen: "A = Fläche, r = Radius, π ≈ 3,14159",
    einheiten: "A [m²], r [m]",
    beispiel:
      "r = 5 cm → A = π · 25 ≈ 78,54 cm².",
  },
  {
    id: "m04",
    fach: "mathematik",
    kapitel: "Geometrie",
    name: "Kugelvolumen",
    formel: "V = (4/3) · π · r³",
    variablen: "V = Volumen, r = Radius",
    einheiten: "V [m³], r [m]",
    beispiel:
      "r = 3 cm → V = (4/3)·π·27 ≈ 113,1 cm³.",
  },
  {
    id: "m05",
    fach: "mathematik",
    kapitel: "Geometrie",
    name: "Satz des Pythagoras",
    formel: "a² + b² = c²",
    variablen: "a, b = Katheten, c = Hypotenuse (im rechtwinkligen Dreieck)",
    einheiten: "a, b, c [Längeneinheiten]",
    beispiel:
      "a = 3, b = 4 → c = √(9+16) = √25 = 5.",
  },
  {
    id: "m06",
    fach: "mathematik",
    kapitel: "Algebra",
    name: "Logarithmengesetze",
    formel: "log(a·b) = log a + log b\nlog(a/b) = log a − log b\nlog(aⁿ) = n · log a",
    variablen: "a, b > 0, n = Exponent, log = Logarithmus (beliebige Basis)",
    einheiten: "—",
    beispiel:
      "log(1000) = log(10³) = 3·log 10 = 3. | log(8) = log(2³) = 3·log 2 ≈ 0,903.",
  },
  {
    id: "m07",
    fach: "mathematik",
    kapitel: "Algebra",
    name: "Potenzgesetze",
    formel: "aⁿ · aᵐ = aⁿ⁺ᵐ\naⁿ / aᵐ = aⁿ⁻ᵐ\n(aⁿ)ᵐ = aⁿ·ᵐ\na⁰ = 1",
    variablen: "a = Basis, n, m = Exponenten",
    einheiten: "—",
    beispiel:
      "2³ · 2⁴ = 2⁷ = 128. | (3²)³ = 3⁶ = 729.",
  },
  {
    id: "m08",
    fach: "mathematik",
    kapitel: "Analysis",
    name: "Ableitungsregeln",
    formel: "f(x) = xⁿ → f'(x) = n·xⁿ⁻¹\n(f·g)' = f'·g + f·g'\n(f/g)' = (f'·g − f·g') / g²\n(f(g(x)))' = f'(g(x))·g'(x)",
    variablen: "f, g = Funktionen, f' = Ableitung, n = Exponent",
    einheiten: "—",
    beispiel:
      "f(x) = x³ → f'(x) = 3x². | f(x) = sin(2x) → f'(x) = 2·cos(2x).",
  },
  {
    id: "m09",
    fach: "mathematik",
    kapitel: "Trigonometrie",
    name: "Trigonometrische Grundfunktionen",
    formel: "sin α = Gegenkathete / Hypotenuse\ncos α = Ankathete / Hypotenuse\ntan α = Gegenkathete / Ankathete\nsin²α + cos²α = 1",
    variablen: "α = Winkel im rechtwinkligen Dreieck",
    einheiten: "α [° oder rad], Funktionswerte [dimensionslos]",
    beispiel:
      "α = 30°: sin 30° = 0,5 | cos 30° = √3/2 ≈ 0,866 | tan 30° = 1/√3 ≈ 0,577.",
  },
  {
    id: "m10",
    fach: "mathematik",
    kapitel: "Algebra",
    name: "Prozent- und Zinsrechnung",
    formel: "Prozentwert: W = G · p/100\nGrundwert: G = W · 100/p\nZinseszins: K_n = K₀ · (1 + p/100)ⁿ",
    variablen: "W = Prozentwert, G = Grundwert, p = Prozentsatz, K₀ = Anfangskapital, K_n = Endkapital, n = Jahre",
    einheiten: "p [%], K [€], n [a]",
    beispiel:
      "1000 € bei 5 % für 3 Jahre: K₃ = 1000·1,05³ ≈ 1157,63 €.",
  },
];
