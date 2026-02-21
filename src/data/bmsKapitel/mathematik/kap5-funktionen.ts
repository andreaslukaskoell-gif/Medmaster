import type { Kapitel } from '../types';

export const mathKap5: Kapitel = {
  id: 'math-kap5',
  title: 'Analysis',
  subject: 'mathematik',
  icon: '📈',
  estimatedTime: '70 min',
  unterkapitel: [
    {
      id: 'ma-5-01',
      title: 'Funktionen — Typen, Eigenschaften und Graphen',
      content: `# Funktionen — Typen, Eigenschaften und Graphen

Eine Funktion ist eine Zuordnungsvorschrift, die jedem Wert des Definitionsbereichs genau einen Wert des Wertebereichs zuordnet. Funktionen sind das universelle mathematische Modell für Zusammenhänge in der Natur: Wie hängt die Wirkstoffkonzentration im Blut von der Zeit ab? Wie verändert sich der Blutdruck mit dem Alter? All das sind funktionale Zusammenhänge.

## Lineare Funktionen

f(x) = mx + b ist die Standardform. m ist die Steigung (positiv = steigend, negativ = fallend, 0 = waagerecht), b ist der y-Achsenabschnitt.

Nullstelle (Schnittpunkt mit x-Achse): f(x) = 0 → mx + b = 0 → x = −b/m.

Die Steigung m gibt an, um wie viel f(x) steigt, wenn x um 1 zunimmt. Steigung m = 2 bedeutet: Pro Einheit auf der x-Achse steigt die Funktion um 2 auf der y-Achse.

Klinische Interpretation: Wenn der Blutzucker linear mit dem KHE (Kohlenhydrateinheit) steigt — z.B. 1 KHE → +2 mmol/L — dann beschreibt das eine lineare Funktion mit m = 2.

## Quadratische Funktionen (Parabeln)

f(x) = ax² + bx + c beschreibt eine Parabel. Bei a > 0 öffnet sie nach oben (U-förmig), bei a < 0 nach unten (n-förmig). Der Scheitelpunkt ist der höchste bzw. niedrigste Punkt.

Scheitelpunkt: d = −b/(2a) → e = f(d). Scheitelpunktform: f(x) = a(x−d)² + e.

In der Physik: Wurfparabeln, Druckprofile in Gefäßen, optische Linsen.

## Exponentialfunktionen

f(x) = a^x ist die Exponentialfunktion mit Basis a. Bei a > 1: exponentielles Wachstum (steil aufsteigend). Bei 0 < a < 1: exponentieller Zerfall (steil abfallend).

Die wichtigste Exponentialfunktion ist f(x) = eˣ mit der Euler'schen Zahl e = 2,71828... Sie ist die Eigenfunktion der Ableitung: (eˣ)' = eˣ. Das Wachstum ist proportional zum aktuellen Wert — das beschreibt z.B. Bakterienvermehrung oder radioaktiven Zerfall.

In der Medizin: Medikamentenspiegel N(t) = N₀ × e^(−λt) (Abnahme mit Zerfallskonstante λ = ln(2)/T₁/₂).

## Logarithmusfunktionen

f(x) = log_a(x) ist die Umkehrfunktion von a^x. Definitionsbereich: x > 0. Für x → 0⁺ geht f(x) → −∞; für x → ∞ steigt f(x) sehr langsam.

ln(x) = log_e(x) ist der natürliche Logarithmus (Basis e). log₁₀(x) ist der dekadische Logarithmus. Beziehung: ln(x) = 2,303 × log₁₀(x).

Medizinisch: pH = −log₁₀[H⁺]; Schalldruckpegel in dB = 20 × log₁₀(p/p₀).

## Eigenschaften von Funktionen

- **Monotonie:** f ist streng monoton steigend, wenn für x₁ < x₂ gilt f(x₁) < f(x₂).
- **Symmetrie:** Gerade Funktion (f(−x) = f(x)): achsensymmetrisch zur y-Achse. Ungerade Funktion (f(−x) = −f(x)): punktsymmetrisch zum Ursprung.
- **Nullstellen:** Werte x, bei denen f(x) = 0.
- **Polstellen:** Werte x, bei denen f(x) → ±∞ (für rationale Funktionen bei Nullstellen des Nenners).
- **Definitionsbereich:** Alle x, für die f(x) definiert ist. Bei √x: x ≥ 0. Bei ln(x): x > 0. Bei 1/x: x ≠ 0.

## Klinische Bezüge

Die Dosis-Wirkungs-Kurve folgt oft einer Sigmoidfunktion (S-Kurve). Die Sättigung bei hohen Dosen entspricht dem Plateau. Die EC₅₀ (effektive Konzentration für 50% der Maximalwirkung) liegt im mittleren Kurvenbereich. Halbwertszeit-Funktionen N(t) = N₀·e^(−λt) beschreiben Medikamentenabbau. Das Verständnis dieser Funktionstypen ist für die Pharmakologie fundamental.`,
      lernziele: [
        'Lineare, quadratische, Exponential- und Logarithmusfunktionen beschreiben und skizzieren',
        'Nullstellen, Monotoniebereiche und Symmetrie von Funktionen bestimmen',
        'Exponentialfunktionen als Modell für Wachstum und Zerfall interpretieren',
        'Definitionsbereiche gängiger Funktionen kennen',
      ],
      sections: [
        {
          heading: 'Lineare und quadratische Funktionen',
          text: 'Lineare Funktionen f(x)=mx+b: Steigung m (= tan des Neigungswinkels), y-Achsenabschnitt b, Nullstelle bei x=−b/m. Quadratische Funktionen f(x)=ax²+bx+c: Parabel, Öffnungsrichtung durch a, Scheitelpunkt d=−b/(2a). Beide Typen sind am MedAT häufig — lineare für proportionale Zusammenhänge, quadratische für Flächen, Volumen und Wurfbewegungen.',
          merksatz: 'Lineare Funktion: Steigung m = Δy/Δx; Quadratische: Scheitelpunkt x = −b/(2a)',
        },
        {
          heading: 'Exponential- und Logarithmusfunktionen',
          text: 'Exponentialfunktionen f(x)=aˣ: Basis a > 1 → Wachstum; 0 < a < 1 → Zerfall. Wichtig: f(0)=1 immer (da a⁰=1). Logarithmusfunktionen sind die Umkehrungen: log_a(aˣ)=x. Besondere Beziehung: e^(ln x)=x und ln(eˣ)=x. pH = −log[H⁺] ist die wichtigste Logarithmusanwendung in der Medizin. Logarithmen "strecken" kleine Werte und "stauchen" große — das erklärt, warum pH-Änderung von 7 auf 6 eine 10-fache [H⁺]-Änderung bedeutet.',
        },
        {
          heading: 'Definitionsbereich und Funktionseigenschaften',
          text: 'Definitionsbereich gibt an, für welche x-Werte f(x) definiert ist. √x: nur x≥0. 1/x: x≠0. ln(x): x>0. Diese Einschränkungen sind klinisch relevant: negative Konzentration ist physikalisch sinnlos, also ist der Definitionsbereich für Konzentrationsfunktionen x≥0. Nullstellen (f(x)=0) und Polstellen (f(x)→∞) grenzen das Verhalten ein. Monotonie beschreibt, ob eine Funktion steigt oder fällt — wichtig bei Dose-Response-Kurven.',
        },
      ],
      merksätze: [
        'eˣ ist seine eigene Ableitung: (eˣ)\'=eˣ; eˣ > 0 für alle x; e⁰=1',
        'Logarithmus und Exponential sind Umkehrfunktionen: ln(eˣ)=x und e^(ln x)=x',
        'Definitionsbereich: √x braucht x≥0; ln(x) braucht x>0; 1/x braucht x≠0',
      ],
      altfrage: {
        question: 'Der Medikamentenspiegel im Blut fällt nach einer Einmaldosis gemäß N(t) = 100 × e^(−0,1t) mg/L, wobei t in Stunden. Nach wie vielen Stunden ist der Spiegel auf 50% gesunken? (ln 2 ≈ 0,693)',
        answer: 'N(t) = 50 mg/L (= 50% von 100). 100 × e^(−0,1t) = 50 → e^(−0,1t) = 0,5. Logarithmus: −0,1t = ln(0,5) = −ln(2) ≈ −0,693. t = 0,693/0,1 = 6,93 Stunden. Die Halbwertszeit ist ~6,93 h, was mit T₁/₂ = ln(2)/λ = 0,693/0,1 = 6,93 h übereinstimmt.',
      },
      klinischerBezug: 'Die Dosis-Wirkungs-Kurve eines Medikaments (Sigmoid-Kurve oder Hill-Kurve) hat die Form E = E_max × C^n / (EC₅₀^n + C^n). Bei n=1 ergibt sich die einfache Michaelis-Menten-Kinetik. Die EC₅₀ (halbmaximale Effektivkonzentration) ist der wichtigste Parameter: Bei Morphin EC₅₀ ≈ 10–50 ng/mL, bei Propofol EC₅₀ ≈ 1–3 μg/mL. Das Verständnis dieser Kurvenform erklärt, warum geringe Dosiserhöhungen bei niedrigen Konzentrationen große Wirkungsänderungen bewirken, während bei hohen Konzentrationen eine Sättigung eintritt.',
      selfTest: [
        {
          question: 'Welchen y-Wert hat f(x) = 3x − 6 an der Nullstelle?',
          options: ['0', '−6', '2', '6', '3'],
          correctIndex: 0,
          explanation: 'An der Nullstelle ist per Definition f(x) = 0. Die x-Koordinate der Nullstelle: 3x − 6 = 0 → x = 2. Der y-Wert an der Nullstelle ist definitionsgemäß 0.',
          hints: ['Nullstelle bedeutet: f(x) = 0. Was ist der y-Wert an der Nullstelle per Definition?', 'Die Nullstelle ist der Punkt, wo die Kurve die x-Achse schneidet: y = 0.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welcher Funktionstyp beschreibt am besten den radioaktiven Zerfall?',
          options: ['Exponentialfunktion mit 0 < a < 1', 'Lineare Funktion', 'Quadratische Funktion', 'Logarithmusfunktion', 'Exponentialfunktion mit a > 1'],
          correctIndex: 0,
          explanation: 'Radioaktiver Zerfall: N(t) = N₀ × e^(−λt) = N₀ × (e^(−λ))^t. Da e^(−λ) < 1 (für λ > 0), ist dies eine Exponentialfunktion mit Basis kleiner als 1 → exponentieller Zerfall. Die Aktivität nimmt exponentiell ab, nicht linear.',
          hints: ['Zerfall bedeutet: die Menge wird weniger, und zwar proportional zur aktuellen Menge.', 'N(t) = N₀ × e^(−λt): Die Basis e^(−λ) ist kleiner als 1.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'f(x) = x² ist eine gerade Funktion. Was bedeutet das?',
          options: ['f(−x) = f(x) — achsensymmetrisch zur y-Achse', 'f(x) hat keine Nullstellen', 'f(x) ist linear', 'f(−x) = −f(x) — punktsymmetrisch zum Ursprung', 'f(x) ist überall definiert'],
          correctIndex: 0,
          explanation: 'Eine gerade Funktion erfüllt f(−x) = f(x). Für f(x) = x²: f(−x) = (−x)² = x² = f(x). Das bedeutet Achsensymmetrie zur y-Achse. Ungerade Funktionen (f(−x) = −f(x)) sind punktsymmetrisch zum Ursprung (z.B. f(x) = x³).',
          hints: ['Gerade Funktion: f(−x) = f(x). Prüfe für f(x) = x²: f(−x) = (−x)².', '(−x)² = x² — stimmt mit f(x) überein? → Achsensymmetrie.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Definitionsbereich gilt für f(x) = ln(x − 2)?',
          options: ['x > 2', 'x ≥ 2', 'x > 0', 'alle reellen Zahlen', 'x ≠ 2'],
          correctIndex: 0,
          explanation: 'Der natürliche Logarithmus ist nur für positive Argumente definiert. Das Argument von ln ist (x − 2). Bedingung: x − 2 > 0 → x > 2. Bei x = 2 wäre das Argument 0 (nicht definiert), bei x < 2 negativ (nicht reell).',
          hints: ['ln ist nur für positive Argumente definiert. Das Argument ist (x−2).', 'x − 2 > 0 → x > ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt e^(ln 5)?',
          options: ['5', 'ln 5', 'e', '5e', '1'],
          correctIndex: 0,
          explanation: 'e^(ln x) = x für alle x > 0. Dies ist die Definition der Umkehrfunktion: Exponential und Logarithmus heben sich gegenseitig auf. e^(ln 5) = 5.',
          hints: ['e^x und ln(x) sind Umkehrfunktionen. e^(ln x) = ?', 'Exponential und natürlicher Logarithmus heben sich auf.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Bei welchem x-Wert hat f(x) = 2x − 8 ihre Nullstelle?',
          options: ['x = 4', 'x = −4', 'x = 8', 'x = 2', 'x = −8'],
          correctIndex: 0,
          explanation: 'Nullstelle: 2x − 8 = 0 → 2x = 8 → x = 4. Bei x = 4 schneidet die Gerade f(x) = 2x − 8 die x-Achse.',
          hints: ['Setze f(x) = 0 und löse nach x: 2x − 8 = 0.', '2x = 8 → x = ?'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-02',
      title: 'Trigonometrische Funktionen',
      content: `# Trigonometrische Funktionen

Trigonometrische Funktionen beschreiben periodische Vorgänge — und davon gibt es in der Biologie und Medizin viele: Herzaktion, Atembewegung, Schallwellen, Lichtwellen, Aktionspotenziale. Die Funktionen sin, cos und tan sind daher nicht nur geometrische Hilfsmittel, sondern universelle Modelle für zyklische Prozesse.

## Sinus und Kosinus am Einheitskreis

Am Einheitskreis (r = 1) mit dem Winkel φ (in Radiant) ist ein Punkt P definiert durch:
P = (cos φ, sin φ)

Das bedeutet: cos φ ist die x-Koordinate, sin φ ist die y-Koordinate. Beide Funktionen nehmen Werte zwischen −1 und +1 an.

**Wichtige Eigenschaften:**
- sin(0) = 0; sin(π/2) = 1; sin(π) = 0; sin(3π/2) = −1
- cos(0) = 1; cos(π/2) = 0; cos(π) = −1; cos(3π/2) = 0
- sin²(φ) + cos²(φ) = 1 (Pythagoreische Identität — gilt für ALLE Winkel!)
- sin(φ + 2π) = sin(φ) — Periodizität mit T = 2π

## Periodizität und Bogenmaß

Das Bogenmaß (Radiant) ist die "natürliche" Einheit für Winkel in der Analysis. Umrechnung:
- 360° = 2π rad
- 180° = π rad ≈ 3,14159 rad
- 90° = π/2 rad ≈ 1,571 rad
- 1° = π/180 rad ≈ 0,01745 rad
- 1 rad = 180°/π ≈ 57,3°

Bei einer allgemeinen Sinusfunktion f(t) = A × sin(ωt + φ₀):
- A = Amplitude (Maximaler Ausschlag)
- ω = Kreisfrequenz (in rad/s), Zusammenhang mit Frequenz f: ω = 2πf
- T = Periode = 2π/ω = 1/f
- φ₀ = Phasenverschiebung

## Wichtige Winkelwerte

| Grad | Radiant | sin | cos | tan |
|------|---------|-----|-----|-----|
| 0° | 0 | 0 | 1 | 0 |
| 30° | π/6 | 1/2 | √3/2 | 1/√3 |
| 45° | π/4 | √2/2 | √2/2 | 1 |
| 60° | π/3 | √3/2 | 1/2 | √3 |
| 90° | π/2 | 1 | 0 | ∞ |

Merkhilfe für sin: 0, 1/2, √2/2, √3/2, 1 — die Werte steigen von 0° bis 90°. Für cos: dieselbe Liste rückwärts.

## Trigonometrische Identitäten

Die wichtigsten Identitäten für den MedAT:
- sin²(φ) + cos²(φ) = 1 (Grundidentität)
- tan(φ) = sin(φ)/cos(φ)
- sin(π/2 − φ) = cos(φ) (Komplementärwinkel)
- sin(−φ) = −sin(φ); cos(−φ) = cos(φ) (Paritäten)
- Additionstheoreme: sin(α+β) = sinα·cosβ + cosα·sinβ

## Klinische Anwendungen

Das EKG beschreibt die elektrische Herzaktion als Summe von Sinuswellen (Fourier-Zerlegung). Die Atemkurve bei ruhiger Atmung ist näherungsweise sinusförmig mit f ≈ 0,25 Hz (15 Atemzüge/min). Schallwellen (Auskultation), Lichtwellen (Pulse-Oximetrie), Aktionspotenziale (Nervenphysiologie) — all das sind sinusoidale oder komplexe periodische Signale. Das Verständnis von Amplitude, Frequenz und Phase ist daher für die Medizin fundamental.`,
      lernziele: [
        'sin, cos, tan am Einheitskreis definieren',
        'Wichtige Winkelwerte (30°, 45°, 60°) in Grad und Radiant auswendig kennen',
        'Die pythagoreische Identität sin²+cos²=1 anwenden',
        'Periodizität, Amplitude und Kreisfrequenz einer Sinusfunktion interpretieren',
      ],
      sections: [
        {
          heading: 'Einheitskreis — die geometrische Grundlage',
          text: 'Am Einheitskreis ist jeder Winkel φ einem Punkt P=(cos φ, sin φ) zugeordnet. sin = y-Koordinate, cos = x-Koordinate. Beide schwingen zwischen −1 und +1. Die fundamentale Identität sin²+cos²=1 folgt direkt aus dem Satz des Pythagoras für den Einheitskreis: x²+y²=r²=1. Diese Identität ist universell gültig — sie gilt für jeden beliebigen Winkel, und man kann sie nicht "falsch" anwenden.',
          merksatz: 'Am Einheitskreis: cos = x-Koordinate, sin = y-Koordinate; sin²+cos²=1 immer!',
        },
        {
          heading: 'Bogenmaß und Periodizität',
          text: 'Radiant ist das natürliche Winkelmaß: Bogenlänge = r × φ_rad. 360° = 2π rad. Sinusfunktion f(x) = A·sin(ωx + φ₀) hat: Amplitude A, Kreisfrequenz ω, Periode T = 2π/ω. Eine Herzfrequenz von 60/min = 1 Hz entspricht T = 1 s = 2π/ω → ω = 2π rad/s ≈ 6,28 rad/s. Das EKG stellt diese Herzwelle graphisch dar, wobei jeder QRS-Komplex einem Herzschlag entspricht.',
        },
        {
          heading: 'Wichtige Winkelwerte und Identitäten',
          text: 'Die Tabelle 0°, 30°, 45°, 60°, 90° muss auswendig sitzen. Eselsbrücke für sin: "0, halb, wurzel-halb, wurzel-drei-halb, eins" (= 0, 0,5, 0,707, 0,866, 1). Für cos die Liste rückwärts. Komplementarität: sin(α) = cos(90°−α). Additionstheorem sin(α+β) = sinα·cosβ + cosα·sinβ ist die Basis für Wellenüberlagerungen (Interferenz, Schwebung) in der Physik.',
        },
      ],
      merksätze: [
        'sin²(φ) + cos²(φ) = 1 für alle φ — die wichtigste trigonometrische Identität',
        'sin(30°)=0,5; sin(45°)=cos(45°)=√2/2≈0,707; sin(60°)=√3/2≈0,866',
        'Periode T = 2π/ω; Kreisfrequenz ω = 2πf; 360° = 2π rad',
      ],
      altfrage: {
        question: 'Eine Atemkurve folgt f(t) = 0,5 × sin(2π/4 × t) Liter, wobei t in Sekunden. Was sind Atemfrequenz (in min⁻¹) und Atemhubvolumen?',
        answer: 'Amplitude A = 0,5 L → Atemhubvolumen (Tidal Volume) = 0,5 L (Schwankung um Ruheposition; tatsächlicher Hub = 2A = 1 L, wenn Mittelposition = 0). Kreisfrequenz ω = 2π/4 = π/2 rad/s. Frequenz f = ω/(2π) = (π/2)/(2π) = 1/4 Hz = 0,25 Hz. Atemfrequenz = 0,25 × 60 = 15/min. Periode T = 4 Sekunden = Dauer eines Atemzugs.',
      },
      klinischerBezug: 'Die Fourier-Analyse zerlegt beliebige periodische Signale in Summen von Sinuswellen. Das EKG ist eine Summe von Sinuswellen verschiedener Frequenzen — der QRS-Komplex enthält hohe Frequenzen (100–250 Hz), die P-Welle niedrigere (1–10 Hz). EKG-Filter nutzen dieses Wissen: Ein Bandpassfilter 0,05–150 Hz lässt klinisch relevante Signale durch, während Störungen (Netzbrumm 50 Hz, Muskeltremor) unterdrückt werden. Das Verständnis von Frequenz und Amplitude ist daher klinisch unmittelbar relevant.',
      selfTest: [
        {
          question: 'Was ergibt sin²(30°) + cos²(30°)?',
          options: ['1', '0,5', '√3/2', '1,5', '0'],
          correctIndex: 0,
          explanation: 'sin²(φ) + cos²(φ) = 1 für jeden Winkel φ — also auch für 30°. Diese Identität gilt universell. sin(30°) = 0,5, cos(30°) = √3/2. 0,25 + 0,75 = 1.',
          hints: ['sin²+cos²=1 gilt für JEDEN Winkel, ohne Ausnahme.', 'sin(30°)=0,5, also sin²(30°)=0,25. cos²(30°)=3/4. Summe?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Sinusfunktion hat die Periode T = 0,5 s. Welche Frequenz hat sie?',
          options: ['2 Hz', '0,5 Hz', '4 Hz', '0,25 Hz', '1 Hz'],
          correctIndex: 0,
          explanation: 'f = 1/T = 1/0,5 = 2 Hz. Frequenz und Periode sind Kehrwerte. Eine Periode von 0,5 s bedeutet 2 vollständige Schwingungen pro Sekunde = 2 Hz.',
          hints: ['f = 1/T. T = 0,5 s → f = 1/0,5 = ?', '1/0,5 = 2.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist cos(0°)?',
          options: ['1', '0', '−1', '√2/2', '0,5'],
          correctIndex: 0,
          explanation: 'cos(0°) = 1. Am Einheitskreis: Bei φ=0 liegt der Punkt P=(1, 0). cos = x-Koordinate = 1; sin(0°) = y-Koordinate = 0.',
          hints: ['Am Einheitskreis bei φ=0°: Punkt liegt bei (1, 0). cos = x-Koordinate.', 'cos(0°) = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viel Radiant sind 270°?',
          options: ['3π/2', 'π', 'π/2', '2π', '3π/4'],
          correctIndex: 0,
          explanation: '270° = 3/4 × 360° = 3/4 × 2π = 3π/2 rad. Umrechnungsformel: φ_rad = φ_Grad × π/180. 270 × π/180 = 270π/180 = 3π/2.',
          hints: ['360° = 2π rad. 270° = 3/4 von 360°.', '3/4 × 2π = 3π/2.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Herzfrequenz von 75/min entspricht welcher Kreisfrequenz ω (in rad/s)?',
          options: ['2,5π rad/s', '75 rad/s', '5π rad/s', '1,25π rad/s', '75π rad/s'],
          correctIndex: 0,
          explanation: 'f = 75/60 = 1,25 Hz. ω = 2πf = 2π × 1,25 = 2,5π rad/s ≈ 7,85 rad/s.',
          hints: ['f = 75/60 Hz (Umrechnung min⁻¹ → Hz). ω = 2πf.', '2π × 1,25 = 2,5π.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'sin(90° − 30°) = sin(60°) = ?',
          options: ['√3/2', '1/2', '√2/2', '1', '0'],
          correctIndex: 0,
          explanation: 'sin(60°) = √3/2 ≈ 0,866. Komplementarität: sin(60°) = cos(30°) = √3/2. Direkt aus der Winkeltabelle: sin(60°) = √3/2.',
          hints: ['sin(60°) direkt aus der Tabelle: sin(0°, 30°, 45°, 60°, 90°) = 0, 1/2, √2/2, √3/2, 1.', 'sin(60°) ist der viertletzte Wert in der Reihe.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-03',
      title: 'Differentialrechnung — Ableitungsregeln und Extremwerte',
      content: `# Differentialrechnung — Ableitungsregeln und Extremwerte

Die Differentialrechnung beschreibt, wie sich Funktionen ändern. Die Ableitung f'(x) gibt die Steigung der Funktion im Punkt x an — oder anders gesagt: die momentane Änderungsrate. In der Medizin ist das die Grundlage für die Analyse von Medikamentenspiegeln (wann steigt er, wann fällt er?), physiologischen Kurven (wann ist die maximale Herzwandspannung?) und enzymatischen Reaktionsraten.

## Die Ableitung — was sie bedeutet

f'(x) = lim_{h→0} [f(x+h) − f(x)] / h

Anschaulich: Man nähert sich dem Grenzwert des Differenzenquotienten. Die Ableitung ist die Steigung der Tangente an den Graphen im Punkt x. Ist f'(x) > 0: f steigt in x. Ist f'(x) < 0: f fällt in x. Ist f'(x) = 0: Kandidat für Extremum (Maximum oder Minimum).

## Grundlegende Ableitungsregeln

| Funktion | Ableitung | Kommentar |
|----------|-----------|-----------|
| c (Konstante) | 0 | Konstante hat keine Änderung |
| xⁿ | n·xⁿ⁻¹ | Potenzregel |
| eˣ | eˣ | Eigenfunktion! |
| ln(x) | 1/x | Nur für x > 0 |
| sin(x) | cos(x) | |
| cos(x) | −sin(x) | Achtung Minuszeichen! |

**Summenregel:** (f + g)' = f' + g'
**Faktorregel:** (c·f)' = c·f'
**Produktregel:** (f·g)' = f'·g + f·g'
**Quotientenregel:** (f/g)' = (f'·g − f·g') / g²
**Kettenregel:** (f(g(x)))' = f'(g(x)) · g'(x)

## Anwendung der Regeln — Beispiele

Potenzregel: f(x) = 3x⁴ → f'(x) = 12x³.

Produktregel: f(x) = x² · sin(x) → f'(x) = 2x·sin(x) + x²·cos(x).

Kettenregel: f(x) = e^(3x) → f'(x) = e^(3x) · 3 = 3e^(3x). Der "innere" Ableitungsfaktor ist die Ableitung von 3x = 3.

Kettenregel: f(x) = sin(x²) → f'(x) = cos(x²) · 2x.

## Extremwerte — Hochpunkte und Tiefpunkte

Um Extremwerte zu finden, geht man in drei Schritten vor:
1. **Notwendige Bedingung:** f'(x) = 0 setzen und lösen → Kandidaten für Extremwerte (auch "kritische Punkte")
2. **Hinreichende Bedingung:** f''(x) berechnen (zweite Ableitung)
   - f''(x) > 0 → lokales Minimum (Funktionsgraph konkav nach oben)
   - f''(x) < 0 → lokales Maximum (Funktionsgraph konkav nach unten)
   - f''(x) = 0 → kein Schluss möglich (Wendepunkt möglich)
3. **Extremwert berechnen:** y = f(x₀) einsetzen

## Klinischer Bezug

In der Pharmakologie: Der Medikamentenspiegel nach Einnahme steigt zunächst (Resorption > Elimination), erreicht dann ein Maximum (t_max), wenn Resorption = Elimination (d.h. f'(t) = 0), und fällt dann ab. t_max wird durch Ableiten der Pharmakokinetik-Funktion bestimmt. Für N(t) = D × k_a/(k_a−k_e) × (e^(−k_e·t) − e^(−k_a·t)) findet man t_max durch Nullsetzen von N'(t). Das ist direkte Anwendung der Differentialrechnung auf klinische Fragestellungen.`,
      lernziele: [
        'Potenz-, Summen-, Faktor-, Produkt-, Quotienten- und Kettenregel anwenden',
        'Ableitungen von eˣ, ln(x), sin(x), cos(x) auswendig kennen',
        'Extremwerte mit dem Kriterium f\'(x)=0 und f\'\'(x) finden und klassifizieren',
        'Die Ableitung als momentane Änderungsrate interpretieren',
      ],
      sections: [
        {
          heading: 'Die wichtigsten Ableitungsregeln',
          text: 'Potenzregel: (xⁿ)\' = n·xⁿ⁻¹ (Exponent vorschieben, Exponent um 1 reduzieren). Faktorregel: Konstante Faktoren bleiben erhalten. Summenregel: Glied für Glied ableiten. Produktregel (fg)\' = f\'g+fg\': "Erste abgeleitet mal zweite plus erste mal zweite abgeleitet." Kettenregel: "Äußere Ableitung × innere Ableitung." Beispiel (e^(2x))\' = e^(2x) × 2 = 2e^(2x). Die Kettenregel ist die wichtigste Regel für zusammengesetzte Funktionen.',
          merksatz: 'Kettenregel: f(g(x))\' = f\'(g(x)) · g\'(x) — äußere Ableitung mal innere Ableitung',
        },
        {
          heading: 'Spezielle Ableitungen auswendig lernen',
          text: '(eˣ)\' = eˣ ist einzigartig: die e-Funktion ist ihre eigene Ableitung. (ln x)\' = 1/x. (sin x)\' = cos x; (cos x)\' = −sin x. Der Wechsel sin ↔ cos mit abwechselnden Vorzeichen: sin → cos → −sin → −cos → sin (beim viermaligen Ableiten kommt man zurück). Das ist kein Zufall, sondern folgt aus der Kreiseigenschaft.',
        },
        {
          heading: 'Extremwertsuche — systematisches Vorgehen',
          text: '1. f\'(x) = 0 lösen → Kandidaten x₀. 2. f\'\'(x₀) bestimmen: positiv → Minimum, negativ → Maximum, null → weiterer Test nötig. 3. Extremwert y₀ = f(x₀) berechnen. In der Klinik: t_max eines Medikaments (Maximum des Plasmaspiegels) wird genau so bestimmt. Randextrema: Wenn der Definitionsbereich begrenzt ist (z.B. t ≥ 0), müssen auch die Randwerte überprüft werden.',
        },
      ],
      merksätze: [
        'Potenzregel: (xⁿ)\' = n·xⁿ⁻¹; (eˣ)\' = eˣ; (ln x)\' = 1/x; (sin x)\' = cos x; (cos x)\' = −sin x',
        'Extremum-Kriterium: f\'(x₀)=0 UND f\'\'(x₀)>0 → Minimum; f\'\'(x₀)<0 → Maximum',
        'Kettenregel: (f(g(x)))\' = f\'(g(x)) · g\'(x)',
      ],
      altfrage: {
        question: 'Die Funktion f(x) = x³ − 3x hat einen lokalen Extremwert. Wo liegt er und ist es ein Maximum oder Minimum?',
        answer: 'Schritt 1: f\'(x) = 3x² − 3. Nullsetzen: 3x² − 3 = 0 → x² = 1 → x = ±1. Schritt 2: f\'\'(x) = 6x. Bei x=1: f\'\'(1) = 6 > 0 → lokales Minimum. Bei x=−1: f\'\'(−1) = −6 < 0 → lokales Maximum. Schritt 3: Extremwerte: f(1) = 1−3 = −2 (Minimum); f(−1) = −1+3 = 2 (Maximum).',
      },
      klinischerBezug: 'In der Enzymkinetik wird die Reaktionsrate v als Funktion der Substratkonzentration [S] durch die Michaelis-Menten-Gleichung beschrieben: v = V_max × [S] / (K_m + [S]). Die Ableitung dv/d[S] = V_max × K_m / (K_m + [S])² gibt die Sensitivität der Rate auf Substratänderungen an. Bei niedrigen [S] << K_m ist dv/d[S] ≈ V_max/K_m (= maximale Steigung, quasi-lineares Verhalten). Bei hohen [S] >> K_m nähert sich v asymptotisch V_max, die Steigung dv/d[S] → 0 (Sättigung). Die Differentialrechnung macht diese Kinetik quantitativ analysierbar.',
      selfTest: [
        {
          question: 'Was ist die Ableitung von f(x) = 4x³ − 2x + 5?',
          options: ['12x² − 2', '4x² − 2', '12x³ − 2', '12x² − 2x', '4x² + 5'],
          correctIndex: 0,
          explanation: 'Glied für Glied ableiten (Summen- und Potenzregel): (4x³)\' = 12x², (−2x)\' = −2, (5)\' = 0. Summe: 12x² − 2.',
          hints: ['Potenzregel: (xⁿ)\' = n·xⁿ⁻¹. Jedes Glied einzeln ableiten.', '(4x³)\' = 3·4x² = 12x²; (−2x)\' = −2; (5)\' = 0.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist die Ableitung von f(x) = e^(5x)?',
          options: ['5e^(5x)', 'e^(5x)', '5xe^(5x)', 'e^(5x−1)', '5e^(5)'],
          correctIndex: 0,
          explanation: 'Kettenregel: f(x) = e^(g(x)) mit g(x) = 5x. f\'(x) = e^(g(x)) × g\'(x) = e^(5x) × 5 = 5e^(5x).',
          hints: ['Kettenregel: (e^(g(x)))\' = e^(g(x)) × g\'(x).', 'g(x) = 5x → g\'(x) = 5.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die Ableitung von f(x) = sin(3x)?',
          options: ['3cos(3x)', 'cos(3x)', '−3sin(3x)', '3sin(3x)', 'cos(x)'],
          correctIndex: 0,
          explanation: 'Kettenregel: (sin(g(x)))\' = cos(g(x)) × g\'(x). Mit g(x) = 3x: f\'(x) = cos(3x) × 3 = 3cos(3x).',
          hints: ['(sin(g(x)))\' = cos(g(x)) × g\'(x). Hier g(x) = 3x.', 'g\'(x) = 3 → f\'(x) = cos(3x) × 3.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'f\'(x₀) = 0 und f\'\'(x₀) = −4. Was folgt?',
          options: ['Lokales Maximum bei x₀', 'Lokales Minimum bei x₀', 'Sattelpunkt bei x₀', 'Wendepunkt bei x₀', 'Keine Aussage möglich'],
          correctIndex: 0,
          explanation: 'f\'(x₀) = 0 → Kandidat für Extremum. f\'\'(x₀) = −4 < 0 → lokales Maximum (konkav nach unten). Bei f\'\'(x₀) > 0 wäre es ein Minimum.',
          hints: ['Extremumsbedingung: f\'=0 (notwendig). f\'\'<0 → Maximum; f\'\'>0 → Minimum.', 'f\'\'(x₀) = −4 < 0 → ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die Ableitung von f(x) = ln(x²)?',
          options: ['2/x', '1/x²', '2x·ln(x)', '1/(x²)', '2x/ln(x)'],
          correctIndex: 0,
          explanation: 'Kettenregel: (ln(g(x)))\' = g\'(x)/g(x). Mit g(x) = x²: f\'(x) = 2x/x² = 2/x. Alternativ: ln(x²) = 2·ln(x) (Logarithmusgesetz). (2·ln(x))\' = 2·(1/x) = 2/x.',
          hints: ['Kettenregel: (ln(g(x)))\' = g\'(x)/g(x). g(x) = x², g\'(x) = 2x.', '2x/x² = 2/x.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was ist die zweite Ableitung von f(x) = sin(x)?',
          options: ['−sin(x)', 'cos(x)', 'sin(x)', '−cos(x)', 'tan(x)'],
          correctIndex: 0,
          explanation: 'f\'(x) = cos(x). f\'\'(x) = (cos(x))\' = −sin(x). Die zweite Ableitung von sin ist −sin: sin → cos → −sin → −cos → sin (Zyklus der Länge 4).',
          hints: ['f(x) = sin(x) → f\'(x) = cos(x) → f\'\'(x) = (cos)\' = ?', '(cos(x))\' = −sin(x).'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-5-04',
      title: 'Integralrechnung — Stammfunktion und Flächenberechnung',
      content: `# Integralrechnung — Stammfunktion und Flächenberechnung

Die Integralrechnung ist das Gegenstück zur Differentialrechnung. Während die Ableitung die momentane Änderungsrate angibt, gibt das Integral die "aufgesammelte" Größe an — die Fläche unter einer Kurve. In der Medizin ist die wichtigste Anwendung die AUC (Area Under the Curve) in der Pharmakologie: Sie misst, wie viel Wirkstoff der Körper insgesamt aufnimmt.

## Stammfunktion und unbestimmtes Integral

Eine Stammfunktion F(x) ist eine Funktion, deren Ableitung f(x) ergibt: F'(x) = f(x). Das unbestimmte Integral schreibt man:

∫f(x)dx = F(x) + C

Dabei ist C eine beliebige Konstante (Integrationskonstante), die beim Ableiten von F verschwindet. Daher ist die Stammfunktion nicht eindeutig — jede Konstante ergibt eine gültige Stammfunktion.

## Grundintegrale (umgekehrte Potenzregel)

| f(x) | F(x) = ∫f(x)dx |
|------|-----------------|
| xⁿ (n≠−1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln\|x\| + C |
| eˣ | eˣ + C |
| sin(x) | −cos(x) + C |
| cos(x) | sin(x) + C |
| aˣ | aˣ/ln(a) + C |

Das wichtigste: ∫xⁿdx = xⁿ⁺¹/(n+1) + C. Man erhöht den Exponenten um 1 und teilt durch den neuen Exponenten. Merkhilfe: Das Umkehrverfahren der Potenzregel ("erst dividieren, dann Exponent erhöhen").

## Bestimmtes Integral und Flächenberechnung

Das bestimmte Integral von a bis b:
∫_a^b f(x)dx = [F(x)]_a^b = F(b) − F(a)

Das ist der **Hauptsatz der Differential- und Integralrechnung**: Man berechnet die Stammfunktion und setzt die Grenzen ein. Das Ergebnis ist eine Zahl (kein Ausdruck mit x).

Geometrisch: Das bestimmte Integral gibt die Fläche zwischen dem Graphen von f(x) und der x-Achse an — mit Vorzeichen. Liegt f(x) unter der x-Achse (f(x) < 0), ist der Flächenbeitrag negativ.

Beispiel: ∫₀² 3x²dx. Stammfunktion: x³. Berechnung: [x³]₀² = 2³ − 0³ = 8 − 0 = 8.

Weiteres Beispiel: ∫₁⁴ 2x dx = [x²]₁⁴ = 16 − 1 = 15.

## AUC und pharmakologische Relevanz

Die AUC (Area Under the Curve) ist das bestimmte Integral des Plasma-Konzentrations-Zeit-Profils:

AUC = ∫₀^∞ C(t) dt

Sie gibt die Gesamtexposition des Körpers gegenüber dem Wirkstoff an. AUC ist proportional zur absorbierten Menge und ist unabhängig von der Kinetik. Die Bioverfügbarkeit F = AUC_oral / AUC_intravenös (in %). Hohe AUC = hohe Gesamtexposition, was sowohl für therapeutische Wirksamkeit als auch für Toxizität relevant ist.

## Integrationsregeln

**Faktorregel:** ∫c·f(x)dx = c·∫f(x)dx
**Summenregel:** ∫(f(x)+g(x))dx = ∫f(x)dx + ∫g(x)dx
**Substitutionsregel:** ∫f(g(x))·g'(x)dx = F(g(x)) + C (Umkehrung der Kettenregel)

Substitution Beispiel: ∫2x·e^(x²)dx. Setze u = x², du = 2x dx. Dann: ∫e^u du = e^u + C = e^(x²) + C.`,
      lernziele: [
        'Stammfunktionen für Potenz-, Exponential- und trigonometrische Funktionen bilden',
        'Bestimmte Integrale mit dem Hauptsatz der Analysis berechnen',
        'Das bestimmte Integral als Fläche unter der Kurve geometrisch interpretieren',
        'Die pharmakologische Bedeutung der AUC erklären',
      ],
      sections: [
        {
          heading: 'Stammfunktion — Umkehrung der Ableitung',
          text: 'F\'(x) = f(x) definiert die Stammfunktion. ∫xⁿdx = xⁿ⁺¹/(n+1)+C: Exponent um 1 erhöhen, durch neuen Exponenten dividieren. Sonderfall: ∫(1/x)dx = ln|x|+C (kein Bruch mit n=−1, weil xⁿ⁺¹/(n+1) bei n=−1 nicht funktioniert). ∫eˣdx = eˣ+C: e-Funktion integriert zu sich selbst (wie beim Ableiten). Die Integrationskonstante C ist immer dabei — ohne C ist die Antwort unvollständig.',
          merksatz: '∫xⁿdx = xⁿ⁺¹/(n+1)+C; ∫eˣdx = eˣ+C; ∫(1/x)dx = ln|x|+C',
        },
        {
          heading: 'Bestimmtes Integral — Hauptsatz',
          text: '∫_a^b f(x)dx = F(b) − F(a). Schritt 1: Stammfunktion F(x) bilden (ohne C). Schritt 2: Obere Grenze einsetzen: F(b). Schritt 3: Untere Grenze einsetzen: F(a). Schritt 4: Differenz: F(b)−F(a). Das Vorzeichen: Liegt f(x) zwischen a und b überall positiv, ist das Ergebnis positiv (Fläche oberhalb x-Achse). Liegt f(x) negativ, ist das Integral negativ. Bei Mischfällen muss man die Nullstellen finden und das Integral aufteilen.',
        },
        {
          heading: 'AUC in der Pharmakologie',
          text: 'AUC = ∫₀^∞ C(t) dt mit C(t) = Plasmakonzentration zum Zeitpunkt t. Für ein Einkompartimentmodell: C(t) = C₀ × e^(−k·t). AUC = ∫₀^∞ C₀ e^(−kt) dt = [−C₀/k × e^(−kt)]₀^∞ = −C₀/k × (0 − 1) = C₀/k. Die AUC ist umgekehrt proportional zur Eliminationskonstante k — schnell eliminierte Medikamente (großes k) haben kleine AUC. Bioverfügbarkeit F = AUC_oral/AUC_iv vergleicht, wie viel vom Wirkstoff nach oraler vs. intravenöser Gabe im Blut ankommt.',
        },
      ],
      merksätze: [
        '∫_a^b f(x)dx = F(b) − F(a); Hauptsatz: Stammfunktion berechnen, Grenzen einsetzen, Differenz bilden',
        'AUC = ∫C(t)dt = Gesamtexposition; AUC = C₀/k für Einkompartimentmodell',
        '∫xⁿdx = xⁿ⁺¹/(n+1)+C; ∫eˣdx = eˣ+C; ∫sin(x)dx = −cos(x)+C',
      ],
      altfrage: {
        question: 'Berechnen Sie ∫₁³ (2x + 1) dx.',
        answer: 'Stammfunktion: F(x) = x² + x. Bestimmtes Integral: [x² + x]₁³ = (9 + 3) − (1 + 1) = 12 − 2 = 10. Das entspricht der Fläche unter der Geraden f(x) = 2x+1 von x=1 bis x=3 (ein Trapez mit Grundlinien f(1)=3 und f(3)=7 und Breite 2: A = (3+7)/2 × 2 = 10 ✓).',
      },
      klinischerBezug: 'Die AUC ist in der klinischen Pharmakologie ein zentraler Parameter. Bei Gentamicin (Aminoglykosid-Antibiotikum) ist die antibiotische Wirkung von der AUC/MHK (Minimale Hemmkonzentration) abhängig — AUC/MHK > 100 wird für optimale Bakterizidie angestrebt (AUC-abhängige Wirkung). Gleichzeitig ist die Nephrotoxizität von der C_max (Spitzenkonzentration) abhängig. Daher wird Gentamicin einmal täglich (statt dreimal täglich) dosiert: Einmal täglich gibt höheres C_max (gute Wirkung) und tieferes Tal (geringere Toxizität), bei gleicher AUC. Diese klinische Strategie basiert direkt auf Integralrechnung.',
      selfTest: [
        {
          question: 'Was ist die Stammfunktion von f(x) = 6x²?',
          options: ['2x³ + C', '12x + C', '6x³ + C', '3x² + C', '2x³'],
          correctIndex: 0,
          explanation: '∫6x²dx = 6 × x³/3 + C = 2x³ + C. Potenzregel: Exponent um 1 erhöhen (2→3), durch neuen Exponenten dividieren (6/3=2).',
          hints: ['∫xⁿdx = xⁿ⁺¹/(n+1)+C. Hier n=2.', '6 × x³/3 = 2x³.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Berechnen Sie ∫₀² 4x dx.',
          options: ['8', '4', '16', '2', '12'],
          correctIndex: 0,
          explanation: 'Stammfunktion: F(x) = 2x². Bestimmtes Integral: [2x²]₀² = 2×4 − 2×0 = 8 − 0 = 8.',
          hints: ['Stammfunktion von 4x: F(x) = 2x². Dann F(2) − F(0).', '2×(2²) − 2×(0²) = 8 − 0.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist ∫eˣ dx?',
          options: ['eˣ + C', 'eˣ⁺¹/(x+1) + C', 'x·eˣ + C', 'ln(eˣ) + C', '1/eˣ + C'],
          correctIndex: 0,
          explanation: '∫eˣdx = eˣ + C. Die e-Funktion ist ihre eigene Stammfunktion (wie beim Ableiten). Das ist die einzigartige Eigenschaft der Eulerschen Zahl.',
          hints: ['Die e-Funktion ist sowohl ihre eigene Ableitung als auch ihre eigene Stammfunktion.', '∫eˣdx = eˣ+C.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Berechnen Sie ∫₁⁴ (1/x) dx. (ln 4 ≈ 1,386; ln 1 = 0)',
          options: ['ln 4 ≈ 1,386', '4', '1/4', '0', 'ln 3'],
          correctIndex: 0,
          explanation: '∫(1/x)dx = ln|x|+C. Bestimmtes Integral: [ln|x|]₁⁴ = ln(4) − ln(1) = 1,386 − 0 = 1,386.',
          hints: ['Stammfunktion von 1/x: ln|x|. Dann einsetzen.', '[ln|x|]₁⁴ = ln(4) − ln(1). ln(1) = 0.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die AUC eines Medikaments mit C(t) = 10·e^(−0,5t) ist AUC = C₀/k. Was ist der Wert?',
          options: ['20', '10', '5', '0,5', '200'],
          correctIndex: 0,
          explanation: 'C₀ = 10 mg/L (Anfangskonzentration). k = 0,5 h⁻¹ (Eliminationskonstante). AUC = C₀/k = 10/0,5 = 20 mg·h/L.',
          hints: ['AUC = C₀/k für Einkompartimentmodell. C₀ = 10, k = 0,5.', '10/0,5 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche geometrische Interpretation hat ∫_a^b f(x) dx wenn f(x) > 0 überall zwischen a und b?',
          options: ['Die Fläche zwischen dem Graphen und der x-Achse', 'Die Steigung von f bei x = b', 'Die Länge der Kurve von a bis b', 'Der Extremwert von f', 'Der Durchschnittswert von a und b'],
          correctIndex: 0,
          explanation: 'Das bestimmte Integral ∫_a^b f(x)dx entspricht der Fläche zwischen dem Graphen von f(x) und der x-Achse (für f(x) ≥ 0). Das ist der fundamentale geometrische Sinn des Integrals.',
          hints: ['Das Integral "sammelt" die Funktionswerte von a bis b auf.', 'Geometrisch ist das die Fläche unter der Kurve.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
