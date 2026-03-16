import type { Kapitel } from "../types";

export const physKapMechanik: Kapitel = {
  id: "phys-kap1",
  title: "Grundlagen & Mechanik",
  subject: "physik",
  icon: "⚙️",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap1-groessen-und-einheiten ===
    {
      id: "ph-1-01",
      title: "SI-Grundgrößen und abgeleitete Einheiten",
      stichworte: [
        "SI-System",
        "Basisgrößen",
        "Meter",
        "Kilogramm",
        "Sekunde",
        "Newton",
        "Pascal",
        "Joule",
        "Watt",
        "Skalare und Vektoren",
        "intensive und extensive Größen",
        "Gewichtskraft",
      ],
      content: `Ohne einheitliche Maßeinheiten wäre eine Blutdruckangabe von „120/80" genauso aussagekräftig wie eine Telefonnummer — reiner Zahlensalat. Das **Internationale Einheitensystem** (SI, Systeme International d'unites) schafft die gemeinsame Sprache, in der Laborberichte, Medikamentendosen und Forschungsergebnisse weltweit eindeutig verstanden werden.

{{DIAGRAM:si-units-overview}}

---

## Die sieben SI-Basisgrößen

Das SI definiert genau **sieben Basisgrößen** — fundamentale, voneinander unabhängige Größen, aus denen sich alle anderen physikalischen Größen ableiten lassen:

| Basisgröße | Formelzeichen | SI-Einheit | Zeichen | Klinisches Beispiel |
|------------|---------------|------------|---------|---------------------|
| Länge | l | Meter | m | Körpergröße 1,75 m |
| Masse | m | Kilogramm | kg | Körpergewicht 70 kg |
| Zeit | t | Sekunde | s | Herzfrequenz-Intervall 0,86 s |
| Elektrische Stromstärke | I | Ampere | A | Defibrillatorstrom ~35 A |
| Thermodynamische Temperatur | T | Kelvin | K | Körpertemperatur 310,15 K |
| Stoffmenge | n | Mol | mol | Serumnatrium 140 mmol/L |
| Lichtstärke | I_v | Candela | cd | OP-Leuchte ~160 000 cd |

Seit der SI-Reform 2019 werden alle Basiseinheiten durch Naturkonstanten definiert: Das Kilogramm über die Planck-Konstante (fundamentale Quantenkonstante), das Meter über die Lichtgeschwindigkeit (1 m = Strecke, die Licht in 1/299 792 458 s zurücklegt), die Sekunde über die Cäsium-133-Atomuhr (9 192 631 770 Schwingungen).

> **Merke:** Es gibt **genau 7** SI-Basisgrößen. Alle anderen Einheiten (Newton, Pascal, Joule, Watt) sind **abgeleitet** — sie ergeben sich als Produkt von Potenzen der Basiseinheiten.

---

## Abgeleitete Einheiten — die Ableitungskette

**Abgeleitete Größen** entstehen durch algebraische Verknüpfung der Basiseinheiten. Sie sind genauso messbar und besitzen eigene SI-Einheiten:

| Größe | Einheit | Formel | In Basiseinheiten | Klinischer Bezug |
|-------|---------|--------|-------------------|------------------|
| **Kraft** | Newton (N) | F = m·a | kg·m·s⁻² | Herzdruckmassage ~400 N |
| **Druck** | Pascal (Pa) | p = F/A | kg·m⁻¹·s⁻² | Blutdruck 120 mmHg = 16 kPa |
| **Energie** | Joule (J) | W = F·s | kg·m²·s⁻² | Defibrillation ~200 J |
| **Leistung** | Watt (W) | P = W/t | kg·m²·s⁻³ | Grundumsatz ~87 W |
| **Spannung** | Volt (V) | U = P/I | kg·m²·A⁻¹·s⁻³ | EKG-Signal ~1 mV |
| **Frequenz** | Hertz (Hz) | f = 1/T | s⁻¹ | Ultraschall 2–18 MHz |

Die Ableitungskette: **Newton** (Kraft) → **Pascal** (Kraft/Fläche = Druck) → **Joule** (Kraft x Weg = Energie) → **Watt** (Energie/Zeit = Leistung). Diese Kette musst du vorwärts und rückwärts sicher beherrschen.

> **Merke:** N = kg·m·s⁻², Pa = N/m², J = N·m, W = J/s. **Kraft wird in Newton gemessen** — nicht in m/s² (Beschleunigung!) und nicht in N·m (Arbeit!).

**Joule-Umrechnungen:** 1 J = 1 N·m = 1 kg·m²/s². Weitere: 1 eV ≈ 1,602 x 10⁻¹⁹ J, 1 cal = 4,184 J. **Nicht** umrechenbar: Joule in Watt — Watt ist Leistung (J/s), keine Energieeinheit.

---

## Physikalische Größe = Zahlenwert x Einheit

Jede physikalische Größe G besteht aus zwei untrennbaren Teilen:

**G = {G} · [G]** (Zahlenwert mal Einheit)

Körpergröße 1,75 m: Zahlenwert = 1,75, Einheit = m. Beim Einheitenwechsel ändert sich der Zahlenwert (1,75 m = 175 cm), die Größe selbst bleibt identisch. Ohne Einheit ist eine Zahl wie „120" mehrdeutig — Blutdruck in mmHg? Puls pro Minute? Glukose in mg/dL?

> **Merke:** Jede physikalische Größe = **Zahlenwert x Einheit**. Die **Dimensionsanalyse** prüft, ob beide Seiten einer Gleichung dieselbe Einheit haben — stimmen sie nicht überein, ist die Formel garantiert falsch.

---

## Skalare vs. Vektoren

{{DIAGRAM:scalar-vector-comparison}}

| Eigenschaft | Skalar | Vektor |
|-------------|--------|--------|
| Beschrieben durch | Betrag (Zahl + Einheit) | Betrag + Richtung |
| Addition | Arithmetisch (3 + 4 = 7) | Vektoriell (Pfeile, Komponenten) |
| Medizin-Beispiele | Temperatur, Druck, Masse, Energie | Kraft, Geschwindigkeit, Beschleunigung |

**Klinisch:** Der **Blutdruck** ist ein Skalar — er wirkt nach dem Pascalschen Prinzip (Druckausbreitung in ruhenden Fluiden) in alle Richtungen gleich. Die **Blutströmungsgeschwindigkeit** ist ein Vektor — sie hat eine definierte Richtung im Gefäß. Im **EKG** ist der Herzvektor (Summenvektor aller elektrischen Kräfte im Herzmuskel) die Grundlage der Diagnostik.

> **Merke:** **Skalar** = nur Betrag (Temperatur, Druck, Masse). **Vektor** = Betrag + Richtung (Kraft, Geschwindigkeit). Häufige Falle: Druck scheint eine Richtung zu haben, ist aber ein Skalar!

---

## Intensive und extensive Größen

| Typ | Definition | Beispiele | Beim Verdoppeln der Stoffmenge |
|-----|-----------|-----------|-------------------------------|
| **Extensiv** | Proportional zur Systemmenge | Masse, Volumen, Energie, Stoffmenge | Verdoppelt sich |
| **Intensiv** | Unabhängig von der Menge | Temperatur, Druck, Dichte, Konzentration | Bleibt gleich |

Zwei Tassen Kaffee bei 80 °C zusammenschütten: Volumen verdoppelt (extensiv), Temperatur bleibt 80 °C (intensiv) — nicht 160 °C!

**Klinisch entscheidend:** Die **Plasmakonzentration** eines Medikaments (intensiv, mg/L) bestimmt die Wirkung. Die **Dosis** (extensiv, mg) wird so gewählt, dass unter Berücksichtigung des Verteilungsvolumens (Volumen, in dem sich der Wirkstoff verteilt) und der Nierenclearance (Fähigkeit der Niere, den Stoff auszuscheiden) die Zielkonzentration erreicht wird.

> **Merke:** **Extensiv** = addiert sich bei Vereinigung (Masse, Volumen). **Intensiv** = bleibt gleich (Temperatur, Konzentration). Quotient zweier extensiver Größen = intensive Größe (z. B. Masse/Volumen = Dichte).

---

## Masse vs. Gewichtskraft

Diese Unterscheidung ist eine klassische MedAT-Falle:

| Eigenschaft | Masse m | Gewichtskraft F_G |
|-------------|---------|-------------------|
| Einheit | kg (Basiseinheit) | N = kg·m·s⁻² (abgeleitet) |
| Ortsabhängig? | Nein — überall gleich | Ja — abhängig von g |
| Formel | Intrinsische Eigenschaft | F_G = m · g |
| Auf der Erde (70 kg) | 70 kg | 70 x 9,81 ≈ 687 N |
| Auf dem Mond (70 kg) | 70 kg | 70 x 1,62 ≈ 113 N |

> **Merke:** Masse (kg) ≠ Gewichtskraft (N). Masse ist ortsunabhängig, Gewichtskraft F_G = m·g hängt von der Fallbeschleunigung g am jeweiligen Ort ab.

---

## Rechenbeispiele

**Beispiel 1 — Infusionsrate (Dopamin):**
Verordnung: 5 ug/kg/min, Patient 80 kg, Lösung 200 mg in 250 mL NaCl.
Gesamtdosis/min: 5 ug/kg/min x 80 kg = 400 ug/min = 0,4 mg/min.
Konzentration: 200 mg / 250 mL = 0,8 mg/mL.
Rate: 0,4 mg/min / 0,8 mg/mL = 0,5 mL/min = **30 mL/h**.

**Beispiel 2 — Blutdruck mmHg zu Pascal:**
120 mmHg x 133,3 Pa/mmHg = 15 996 Pa ≈ **16,0 kPa** (systolisch).
80 mmHg x 133,3 Pa/mmHg = 10 664 Pa ≈ **10,7 kPa** (diastolisch).

**Beispiel 3 — Grundumsatz in Watt:**
1800 kcal/Tag x 4184 J/kcal = 7 531 200 J/Tag.
P = 7 531 200 J / 86 400 s ≈ **87 W** — vergleichbar mit einer Glühbirne!

**Prüfungsrelevante Zahlen:**
- 7 SI-Basisgrößen (Merkhilfe: **L**uise **M**ag **Z**wei **A**lte **K**atzen **M**it **C**harme)
- 1 mmHg ≈ 133 Pa; 1 kcal = 4,184 kJ; 1 eV ≈ 1,6 x 10⁻¹⁹ J
- g ≈ 9,81 m/s²; 0 K = -273,15 °C
- N = kg·m/s², Pa = N/m², J = N·m, W = J/s`,

      lernziele: [
        "Die sieben SI-Basisgrößen mit ihren Einheiten und Formelzeichen nennen und erklären können",
        "Abgeleitete SI-Einheiten (Newton, Pascal, Joule, Watt, Volt, Hertz) auf Basiseinheiten zurückführen können",
        "Den Unterschied zwischen skalaren und vektoriellen Größen erklären und Beispiele aus der Medizin nennen können",
        "Intensive und extensive Größen voneinander unterscheiden und klinische Relevanz erläutern können",
        "Physikalische Größen als Produkt aus Zahlenwert und Einheit korrekt anwenden können",
      ],

      sections: [
        {
          heading: "SI-Basisgrößen — Übersicht",
          text: "Das SI-System definiert sieben fundamental unabhängige Basisgrößen. Aus diesen lassen sich alle weiteren physikalischen Größen ableiten.",
          table: {
            headers: ["Basisgröße", "Formelzeichen", "SI-Einheit", "Einheitenzeichen"],
            rows: [
              ["Länge", "l", "Meter", "m"],
              ["Masse", "m", "Kilogramm", "kg"],
              ["Zeit", "t", "Sekunde", "s"],
              ["Elektrische Stromstärke", "I", "Ampere", "A"],
              ["Thermodynamische Temperatur", "T", "Kelvin", "K"],
              ["Stoffmenge", "n", "Mol", "mol"],
              ["Lichtstärke", "Iv", "Candela", "cd"],
            ],
          },
          merksatz:
            "Die 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)",
        },
        {
          heading: "Die sieben SI-Basisgrößen",
          text: "Das SI-System beruht auf sieben fundamental unabhängigen Basisgrößen: Länge (m), Masse (kg), Zeit (s), elektrische Stromstärke (A), thermodynamische Temperatur (K), Stoffmenge (mol) und Lichtstärke (cd). Diese sieben Größen sind so gewählt, dass sie unabhängig voneinander sind — keine lässt sich aus den anderen ableiten — und zusammen ausreichen, um jede bekannte physikalische Größe zu beschreiben. Seit der SI-Reform von 2019 werden alle Basiseinheiten durch Naturkonstanten definiert, nicht mehr durch physische Artefakte. Das Kilogramm ist nun über die Planck-Konstante, das Ampere über die Elementarladung, das Kelvin über die Boltzmann-Konstante und das Mol über die Avogadro-Konstante definiert. Diese Neudefinition macht das SI-System zeitlos und ortsunabhängig — jedes gut ausgestattete Labor der Welt kann die Einheiten eigenständig realisieren, ohne Zugang zu einem physischen Referenzartefakt zu benötigen.",
          merksatz:
            'Merkhilfe: "Luise Mag Zwei Alte Katzen Mit Charme" → Länge(m), Masse(kg), Zeit(s), Ampere(A), Kelvin(K), Mol(mol), Candela(cd)',
        },
        {
          heading: "Abgeleitete Einheiten und ihre Basisdarstellung",
          text: "Abgeleitete Einheiten entstehen durch algebraische Verknüpfung der Basiseinheiten. Der Newton (N = kg·m·s⁻²) beschreibt Kraft, das Pascal (Pa = kg·m⁻¹·s⁻²) Druck, das Joule (J = kg·m²·s⁻²) Energie und das Watt (W = kg·m²·s⁻³) Leistung. Besonders im medizinischen Bereich sind Druckeinheiten bedeutsam: Der Blutdruck wird klinisch in mmHg (Millimeter Quecksilbersäule) angegeben, obwohl die SI-Einheit Pascal ist. Umrechnung: 1 mmHg ≈ 133,3 Pa. Ein normaler systolischer Blutdruck von 120 mmHg entspricht also ca. 16 000 Pa bzw. 16 kPa. Das Verständnis der Basisdarstellung ermöglicht es, Formeln dimensionsanalytisch zu überprüfen und Umrechnungen korrekt durchzuführen.",
          merksatz:
            "Newton = kg·m/s² (Kraft = Masse × Beschleunigung); Pascal = N/m² (Druck = Kraft/Fläche); Joule = N·m (Arbeit = Kraft × Weg); Watt = J/s (Leistung = Energie/Zeit)",
        },
        {
          heading: "Skalare vs. Vektoren in der Medizin",
          text: "Physikalische Größen sind entweder Skalare (nur Betrag) oder Vektoren (Betrag + Richtung). In der Medizin begegnen uns beide Typen ständig: Körpertemperatur, Blutdruck, Herzfrequenz und Laborwerte sind Skalare. Blutströmungsgeschwindigkeit, Muskelkräfte und elektrische Feldvektoren im EKG sind Vektoren. Das EKG misst tatsächlich den Herzvektor — die vektorielle Summe aller elektrischen Kräfte im Herzmuskel zu einem bestimmten Zeitpunkt. Die zwölf EKG-Ableitungen erfassen diesen Vektor aus verschiedenen Winkeln und ermöglichen so eine räumliche Diagnose von Herzerkrankungen. Bei Vektoraddition können sich gleichgroße Kräfte aus verschiedenen Richtungen aufheben (destruktive Interferenz) oder verstärken (konstruktive Interferenz) — ein Prinzip, das für das Verständnis von EKG-Mustern grundlegend ist.",
          merksatz:
            "Skalar = nur Betrag (z.B. Temperatur 37°C). Vektor = Betrag + Richtung (z.B. Kraft 10 N nach oben). Vektoren werden addiert wie Pfeile — nicht einfach arithmetisch!",
        },
        {
          heading: "Intensive vs. extensive Größen",
          text: "Intensive Größen (Temperatur, Druck, Konzentration, Dichte) sind unabhängig von der Systemmenge. Extensive Größen (Masse, Volumen, Energie, Stoffmenge) sind proportional zur Systemmenge. Diese Unterscheidung ist pharmakologisch entscheidend: Die therapeutische Wirkung eines Medikaments hängt von seiner Plasmakonzentration (intensiv, Einheit: mg/L oder mmol/L) ab, nicht von der absoluten verabreichten Menge allein. Der Arzt berechnet die Dosis (extensive Größe in mg) so, dass die gewünschte Konzentration (intensive Größe in mg/L) im Plasma erreicht wird — unter Berücksichtigung des Verteilungsvolumens und der Nierenclearance. Interessanterweise ist der Quotient zweier extensiver Größen eine intensive Größe: Masse/Volumen = Dichte (intensiv).",
          merksatz:
            "Intensiv = unabhängig von der Menge (Temp., Druck, Konzentration). Extensiv = proportional zur Menge (Masse, Volumen, Energie). Zwei Tassen heißer Kaffee → doppeltes Volumen, aber gleich heiß!",
        },
      ],

      merksätze: [
        "Genau 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)",
        'Merkhilfe: "Luise Mag Zwei Alte Katzen Mit Charme" — Länge, Masse, Zeit, Ampere, Kelvin, Mol, Candela',
        "Ableitungskette: N = kg·m·s⁻² (Kraft) → Pa = N/m² (Druck) → J = N·m (Energie) → W = J/s (Leistung)",
        "Kraft wird in Newton gemessen — NICHT in m/s² (Beschleunigung) oder N·m (Arbeit)!",
        "Skalar = nur Betrag (Temperatur, Druck). Vektor = Betrag + Richtung (Kraft, Geschwindigkeit). Druck ist KEIN Vektor!",
        "Extensiv = addiert sich (Masse, Volumen). Intensiv = bleibt gleich (Temperatur, Konzentration, Dichte).",
        "Masse (kg) ≠ Gewichtskraft (N): Masse ortsunabhängig, F_G = m·g ortsabhängig. 70 kg → 687 N (Erde) vs. 113 N (Mond)",
        "1 mmHg ≈ 133 Pa; T(K) = T(°C) + 273,15; 1 kcal = 4,184 kJ; Grundumsatz ≈ 87 W",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das SI-Einheitensystem und erklären Sie, warum ein einheitliches Messsystem in der Medizin unverzichtbar ist. Gehen Sie dabei auf mindestens drei Basisgrößen und zwei abgeleitete Einheiten ein.",
        answer: `Das Internationale Einheitensystem (SI) ist das weltweit gültige Messsystem, das auf sieben unabhängigen Basisgrößen beruht. Diese sieben Größen — Länge (Meter, m), Masse (Kilogramm, kg), Zeit (Sekunde, s), elektrische Stromstärke (Ampere, A), thermodynamische Temperatur (Kelvin, K), Stoffmenge (Mol, mol) und Lichtstärke (Candela, cd) — sind so fundamental, dass alle anderen physikalischen Größen aus ihnen abgeleitet werden können.

Für die Medizin ist ein einheitliches System aus mehreren Gründen unverzichtbar: Erstens ermöglicht es die globale Vergleichbarkeit von Laborbefunden und Forschungsergebnissen. Ein Blutzuckerwert von 5,5 mmol/L bedeutet weltweit dasselbe. Zweitens verhindert es gefährliche Verwechslungen bei Dosierungen — die SI-Einheit mg/kg Körpergewicht für Medikamentendosen ist eindeutig und sicher. Drittens erlaubt es konsistente Berechnungen: Der Blutdruck in Pascal (Pa = kg·m⁻¹·s⁻²) lässt sich direkt mit Strömungsformeln verbinden.

Wichtige abgeleitete Einheiten in der Medizin sind der Pascal (Pa) für den Blutdruck — klinisch oft in mmHg angegeben, aber physikalisch in Pa — und das Joule (J = kg·m²·s⁻²) für den Energieumsatz des Körpers. Der Grundumsatz eines Erwachsenen beträgt etwa 8.000 kJ/Tag. Das Watt (W = J/s) beschreibt die Herzleistung: Das Herz erbringt in Ruhe eine hydraulische Leistung von ca. 1–2 W.

Ohne ein einheitliches Messsystem wären internationale Studien, Gerätekalibrierungen und sichere Medikamentendosierungen nicht möglich. Berühmte Katastrophen wie der Mars-Climate-Orbiter-Absturz 1999 (Verwechslung von Pound-force und Newton) zeigen, was fehlendes Einheitenbewusstsein anrichten kann — in der Medizin stehen dabei Menschenleben auf dem Spiel.`,
      },

      klinischerBezug: `In der klinischen Praxis ist das Verständnis von SI-Einheiten direkt lebensrelevant: Medikamentendosen werden in mg/kg Körpergewicht berechnet, Infusionsraten in mL/h oder µg/kg/min angegeben, und Laborwerte wie Serumkreatinin (µmol/L), Hämoglobin (g/dL) oder Troponin (ng/mL) müssen korrekt interpretiert werden. Ein systolischer Blutdruck von 120 mmHg entspricht 15 998 Pa — Ärzte arbeiten mit mmHg, Physiker mit Pascal, beide müssen dieselbe Realität beschreiben. Fehler bei Einheitenumrechnungen können bei intensivmedizinischen Patienten tödlich sein: Eine Verwechslung von mg und µg bei der Adrenalin-Dosierung (Faktor 1000!) führt zu lebensbedrohlichen Komplikationen.`,

      selfTest: [
        {
          question: "Welche der folgenden Größen ist KEINE SI-Basisgröße?",
          options: [
            "Elektrische Stromstärke (Ampere)",
            "Stoffmenge (Mol)",
            "Kraft (Newton)",
            "Thermodynamische Temperatur (Kelvin)",
            "Lichtstärke (Candela)",
          ],
          correctIndex: 2,
          explanation:
            "Die Kraft wird in Newton (N) gemessen, aber Newton ist eine abgeleitete Einheit, keine Basiseinheit. Sie lässt sich aus den Basisgrößen ableiten: 1 N = 1 kg·m·s⁻². Die sieben SI-Basisgrößen sind: Länge (m), Masse (kg), Zeit (s), elektrische Stromstärke (A), thermodynamische Temperatur (K), Stoffmenge (mol) und Lichtstärke (cd). Alle anderen physikalischen Größen — Kraft, Druck, Energie, Leistung, Spannung — sind abgeleitet und können auf diese sieben Basisgrößen zurückgeführt werden. Ein einfacher Test: Kann man die Einheit durch Kombination anderer SI-Einheiten ausdrücken? Wenn ja, ist es eine abgeleitete Einheit.",
          hints: [
            "Es gibt genau 7 SI-Basisgrößen — Kraft gehört interessanterweise nicht dazu.",
            "Newton = kg·m/s² — das sind alles Basiseinheiten kombiniert!",
          ],
          difficulty: 1,
          tags: ["si-einheiten", "basisgrößen", "einheitensystem"],
        },
        {
          question:
            "Ein Patient erhält eine Infusion mit einer Konzentration von 5 mg/mL. Bei einem Volumen von 500 mL beträgt die Gesamtmenge des Wirkstoffs:",
          options: ["100 mg", "2500 mg", "500 mg", "0,01 g", "5000 µg"],
          correctIndex: 1,
          explanation:
            "Gesamtmenge = Konzentration × Volumen = 5 mg/mL × 500 mL = 2500 mg. Dies ist ein klassisches Beispiel für den Unterschied zwischen intensiven und extensiven Größen: Die Konzentration (5 mg/mL) ist eine intensive Größe — sie ist unabhängig davon, wie viel Lösung vorhanden ist. Die Gesamtmenge des Wirkstoffs (2500 mg) ist eine extensive Größe — sie ist proportional zum Volumen. In der klinischen Praxis ist diese Rechnung alltäglich: Pflegepersonal und Ärzte müssen Infusionsmengen, Konzentrationen und Gesamtdosen sicher berechnen können. Ein Rechenfehler kann zur Über- oder Unterdosierung führen. 2500 mg = 2,5 g — eine klinisch relevante Größenordnung für viele Medikamente.",
          hints: [
            "Gesamtmenge = Konzentration × Volumen — achte auf die Einheiten!",
            "mg/mL × mL = mg — die Einheiten kürzen sich heraus.",
          ],
          difficulty: 1,
          tags: ["konzentration", "einheiten", "pharmakologie"],
        },
        {
          question:
            "Die SI-Einheit des Drucks (Pascal) lässt sich in Basiseinheiten ausdrücken als:",
          options: ["kg·m·s⁻¹", "kg·m⁻¹·s⁻²", "kg·m²·s⁻²", "kg·m²·s⁻³", "kg·m·s⁻²"],
          correctIndex: 1,
          explanation:
            "Druck P = Kraft/Fläche = F/A. Die Kraft hat die Einheit Newton (N = kg·m·s⁻²) und die Fläche hat die Einheit m². Also: Pa = N/m² = (kg·m·s⁻²)/m² = kg·m⁻¹·s⁻². Das Verständnis dieser Ableitung ist wichtig für die Dimensionsanalyse: Wenn eine Formel korrekt ist, müssen die Einheiten auf beiden Seiten übereinstimmen. Zur Orientierung: kg·m²·s⁻² ist Joule (Energie), kg·m²·s⁻³ ist Watt (Leistung), kg·m·s⁻² ist Newton (Kraft). Diese Hierarchie — von Basiseinheiten zu abgeleiteten Einheiten — ist der Schlüssel zur Dimensionsanalyse und ermöglicht es, Formeln auf Korrektheit zu überprüfen.",
          hints: [
            "Druck = Kraft/Fläche. Was ist die Einheit der Kraft? Was ist die Einheit der Fläche?",
            "N/m² = (kg·m·s⁻²)/m² — kürze m² heraus!",
          ],
          difficulty: 2,
          tags: ["druck", "pascal", "abgeleitete-einheiten"],
        },
        {
          question:
            "Ein Herzmuskel erzeugt eine Kraft von 2 N und verschiebt Blut um 0,05 m. Welche Arbeit wird dabei verrichtet?",
          options: ["0,1 J", "40 J", "0,04 J", "2,05 J", "10 J"],
          correctIndex: 0,
          explanation:
            "Arbeit W = Kraft × Weg = F × s = 2 N × 0,05 m = 0,1 N·m = 0,1 J. Die Einheit Joule (J) ist definiert als 1 J = 1 N·m = 1 kg·m²·s⁻². In der Physiologie ist die mechanische Herzarbeit ein wichtiger Parameter: Das Herz verrichtet pro Schlag (Herzaktion) etwa 0,5–1 J mechanische Arbeit, bei einer Herzfrequenz von 70/min also ca. 35–70 J/min = ca. 0,6–1,2 W hydraulische Leistung. Diese Zahlen verdeutlichen die Effizienz des Herzens — und die enorme Belastung bei körperlicher Aktivität, wo die Herzleistung auf 4–5 W steigen kann. Die Formel W = F·s gilt nur, wenn Kraft und Weg parallel sind.",
          hints: [
            "Arbeit W = Kraft × Weg. Einheit: N × m = J.",
            "Achte auf die Größenordnung: 2 N × 0,05 m — multipliziere sorgfältig.",
          ],
          difficulty: 2,
          tags: ["arbeit", "kraft", "joule"],
        },
        {
          question: "Ein Patient wiegt 70 kg. Welche Gewichtskraft wirkt auf ihn? (g = 9,81 m/s²)",
          options: ["70 N", "686,7 N", "7,13 N", "700 Pa", "6867 J"],
          correctIndex: 1,
          explanation:
            'Die Gewichtskraft F_G = m × g = 70 kg × 9,81 m/s² = 686,7 kg·m·s⁻² = 686,7 N. Wichtig: Masse (in kg) und Gewichtskraft (in N) sind verschiedene Größen! Masse ist eine intrinsische Eigenschaft der Materie — unveränderlich, ortsunabhängig. Gewichtskraft ist die Anziehungskraft der Erde — abhängig vom Ort (auf dem Mond wäre g ≈ 1,62 m/s², also F_G ≈ 113 N). Im Alltag sagen wir "ich wiege 70 kg" — physikalisch korrekt wäre "meine Masse beträgt 70 kg" und "meine Gewichtskraft beträgt ca. 687 N". In der Medizin ist diese Unterscheidung beim Thema Schwerelosigkeit relevant: Die Masse des Astronauten bleibt 70 kg, aber die Gewichtskraft nähert sich null.',
          hints: [
            "Gewichtskraft F = m × g — die Einheit N = kg·m/s² ergibt sich direkt.",
            "Masse (kg) ist nicht dasselbe wie Gewichtskraft (N) — im Alltag verwechselt, in der Physik streng unterschieden!",
          ],
          difficulty: 1,
          tags: ["gewichtskraft", "masse", "newton"],
        },
      ],
    },

    {
      id: "ph-1-02",
      title: "Präfixe und wissenschaftliche Notation",
      stichworte: [
        "SI-Präfixe",
        "Zehnerpotenz",
        "wissenschaftliche Notation",
        "Mantisse",
        "Exponent",
        "Mikro",
        "Milli",
        "Nano",
        "Kilo",
        "Volumenumrechnung",
        "Größenordnungen",
        "Dosierungsfehler",
      ],
      content: `Ein Wasserstoffatom misst 0,000 000 000 1 m, ein Erythrozyt (rotes Blutkörperchen) 0,000 008 m, der menschliche Körper 1,75 m — und die Entfernung zur Sonne beträgt 150 000 000 000 m. Ohne ein System, das diese Spanne handhabbar macht, wären Medizin und Naturwissenschaft in Nullen ertrunken. Zwei Werkzeuge lösen dieses Problem: **SI-Präfixe** und **wissenschaftliche Notation**.

{{DIAGRAM:si-prefixes}}

---

## SI-Präfixe: Das metrische Vorsatzsystem

**SI-Präfixe** sind Vorsätze vor einer Einheit, die einen festen Zehnerpotenz-Faktor darstellen. Aus „0,001 Gramm" wird „1 Milligramm" (1 mg), aus „1 000 Meter" wird „1 Kilometer" (1 km).

| Präfixe (groß) | Symbol | Faktor | | Präfixe (klein) | Symbol | Faktor |
|----------------|--------|--------|---|-----------------|--------|--------|
| Tera | T | 10¹² | | Milli | m | 10⁻³ |
| Giga | G | 10⁹ | | Mikro | u | 10⁻⁶ |
| Mega | M | 10⁶ | | Nano | n | 10⁻⁹ |
| Kilo | k | 10³ | | Piko | p | 10⁻¹² |
| Hekto | h | 10² | | Femto | f | 10⁻¹⁵ |

> **Merke:** Zwischen benachbarten Präfixen liegt jeweils Faktor 1000 (drei Zehnerpotenzen): kg → g → mg → ug → ng. Ein Sprung von Milli zu Mikro = Faktor 1000 — bei Adrenalin oder Fentanyl kann diese Verwechslung tödlich sein!

---

## Wissenschaftliche Notation (Exponentialschreibweise)

Jede Zahl lässt sich schreiben als **a x 10^n**, wobei die **Mantisse** (a) zwischen 1 und 10 liegt (1 ≤ |a| < 10) und der **Exponent** (n) eine ganze Zahl ist.

| Zahl | Wissenschaftliche Notation | Bedeutung |
|------|---------------------------|-----------|
| 0,000 053 m | 5,3 x 10⁻⁵ m = 53 um | Durchmesser Eizelle |
| 0,000 000 002 m | 2 x 10⁻⁹ m = 2 nm | DNA-Doppelhelix-Durchmesser |
| 299 792 458 m/s | ≈ 3 x 10⁸ m/s | Lichtgeschwindigkeit |
| 6 022 000 000 000 000 000 000 00 | 6,022 x 10²³ | Avogadro-Konstante |

> **Merke:** In wissenschaftlicher Notation steht **genau eine Ziffer** vor dem Komma: 4,5 x 10⁻⁵ (korrekt), nicht 45 x 10⁻⁶ (nicht normiert) oder 0,45 x 10⁻⁴ (Mantisse < 1).

---

## Rechenregeln für Zehnerpotenzen

| Operation | Regel | Beispiel |
|-----------|-------|----------|
| Multiplizieren | Exponenten addieren | 10³ x 10⁵ = 10⁸ |
| Dividieren | Exponenten subtrahieren | 10⁷ / 10³ = 10⁴ |
| Potenzieren | Exponenten multiplizieren | (10³)² = 10⁶ |

**Mantissen korrekt verrechnen:**
(3 x 10⁴) x (2 x 10³) = 6 x 10⁷ — Mantissen multiplizieren, Exponenten addieren.

**Normierung nicht vergessen:** Wenn die Mantisse ≥ 10 wird, durch 10 teilen und Exponent um 1 erhöhen:
(5 x 10⁴) x (4 x 10³) = 20 x 10⁷ = **2 x 10⁸**

> **Merke:** Potenzregeln kompakt: Mult → Exp. addieren, Div → Exp. subtrahieren, Potenz → Exp. multiplizieren. Mantisse normieren (1 ≤ a < 10)!

---

## Präfixe bei Flächen und Volumen — die häufigste Fehlerquelle

Bei Flächen- und Volumeneinheiten muss der Präfix-Exponent mit der Dimension **potenziert** werden:

| Umrechnung | Rechnung | Ergebnis | Häufiger Fehler |
|------------|----------|----------|-----------------|
| 1 cm² → m² | (10⁻² m)² | 10⁻⁴ m² | ≠ 10⁻² m² |
| 1 cm³ → m³ | (10⁻² m)³ | 10⁻⁶ m³ | ≠ 10⁻² m³ |
| 1 mm³ → m³ | (10⁻³ m)³ | 10⁻⁹ m³ | ≠ 10⁻³ m³ |

**Klinisch unverzichtbar:**
- 1 mL = 1 cm³ = 10⁻⁶ m³
- 1 L = 1 dm³ = 10⁻³ m³
- 1 m³ = 1000 L

> **Merke:** Bei Volumenumrechnung den Exponenten immer mit 3 multiplizieren: cm → 10⁻², also cm³ → 10⁻⁶. Bei Flächen mit 2: cm² → 10⁻⁴.

---

## Medizinisch relevante Größenordnungen

| Kategorie | Größe | Wert | Präfix-Form |
|-----------|-------|------|-------------|
| **Länge** | DNA-Durchmesser | 2 x 10⁻⁹ m | 2 nm |
| | Erythrozyt | 8 x 10⁻⁶ m | 8 um |
| | Kapillare | 5-10 x 10⁻⁶ m | 5-10 um |
| **Druck** | Atmosphäre | 1,013 x 10⁵ Pa | ≈ 760 mmHg |
| | Systolischer RR | 1,6 x 10⁴ Pa | 120 mmHg |
| | Osmotischer Druck Blut | 7,8 x 10⁵ Pa | 780 kPa |
| **Konzentration** | Glukose normal | 3,9-6,1 mmol/L | |
| | Natrium normal | 135-145 mmol/L | |
| | Troponin T (hs) | < 14 ng/L | < 14 x 10⁻⁹ g/L |
| **Energie** | Grundumsatz/Tag | 7,5 x 10⁶ J | 7500 kJ |
| | ATP-Hydrolyse/mol | 3,05 x 10⁴ J | 30,5 kJ |
| **Zeit** | Aktionspotential | 1-5 x 10⁻³ s | 1-5 ms |
| | HWZ ¹⁸F (PET) | 6600 s | ~110 min |
| | HWZ ¹³¹I | 6,9 x 10⁵ s | ~8 Tage |

---

{{DIAGRAM:si-units-overview}}

## Signifikante Stellen und Rundung

**Signifikante Stellen** (Ziffern mit Informationsgehalt) bestimmen die Präzision einer Messung:

- Nicht-Null-Ziffern sind immer signifikant: 3,14 → 3 Stellen
- Nullen zwischen Ziffern: signifikant: 1,005 → 4 Stellen
- Führende Nullen: **nicht** signifikant: 0,0045 → nur 2 Stellen (4 und 5)
- Endnullen nach Komma: signifikant: 2,50 → 3 Stellen

Das Ergebnis einer Berechnung hat so viele signifikante Stellen wie der ungenaueste Eingangswert. In wissenschaftlicher Notation ist die Stellenzahl sofort sichtbar: 4,5 x 10⁻⁵ → 2 signifikante Stellen.

> **Merke:** Ein Blutzuckerwert von 5,5 mmol/L hat 2 signifikante Stellen. Ihn als 5,500 anzugeben würde eine Messgenauigkeit vortäuschen, die das Gerät nicht liefert.

---

## Rechenbeispiele

**Beispiel 1 — Volumenumrechnung (PCR-Ansatz):**
25 uL + 12,5 uL + 2,5 uL = 40 uL.
In mL: 40 uL x 10⁻³ = 0,040 mL. In m³: 40 x 10⁻⁶ L = 40 x 10⁻⁹ m³ = **4 x 10⁻⁸ m³**.

**Beispiel 2 — Wirkstoffmenge aus Plasmaspiegel:**
Gentamicin 8 ug/mL, Verteilungsvolumen 17,5 L (0,25 L/kg x 70 kg).
Gesamtmenge: 8 ug/mL x 17 500 mL = 140 000 ug = 140 mg = **0,14 g**.

**Beispiel 3 — Röntgenwellenlänge:**
f = 3 x 10¹⁸ Hz. Wellenlänge = c/f = (3 x 10⁸) / (3 x 10¹⁸) = **10⁻¹⁰ m = 0,1 nm**.

**Prüfungsrelevante Zahlen:**
- 1 mL = 1 cm³ = 10⁻⁶ m³; 1 L = 1 dm³ = 10⁻³ m³
- mg → ug: Faktor 1000; ug → ng: Faktor 1000
- Erythrozyt ~8 um, DNA ~2 nm, Eizelle ~53 um
- c ≈ 3 x 10⁸ m/s; N_A ≈ 6 x 10²³ mol⁻¹
- Normalglukose 3,9-6,1 mmol/L; Natrium 135-145 mmol/L`,

      lernziele: [
        "Die SI-Präfixe von Femto (10⁻¹⁵) bis Tera (10¹²) mit Symbolen und Faktoren nennen können",
        "Zahlen in wissenschaftliche Notation umwandeln und zurückrechnen können",
        "Rechenregeln für Zehnerpotenzen (Multiplikation, Division, Potenzieren) sicher anwenden",
        "Quadratische und kubische Einheiten mit Präfixen korrekt umrechnen (cm² → m², mL → m³)",
        "Medizinisch relevante Größenordnungen einordnen und mit korrekten Präfixen benennen",
      ],

      sections: [
        {
          heading: "SI-Präfixe: Übersicht",
          text: "SI-Präfixe sind Vorsätze, die vor eine Einheit gestellt werden und sie mit einer Zehnerpotenz multiplizieren. Sie ermöglichen eine kompakte Darstellung sehr großer und sehr kleiner Zahlen.",
          table: {
            headers: ["Präfix", "Symbol", "Faktor", "Potenz"],
            rows: [
              ["Tera", "T", "1 000 000 000 000", "10¹²"],
              ["Giga", "G", "1 000 000 000", "10⁹"],
              ["Mega", "M", "1 000 000", "10⁶"],
              ["Kilo", "k", "1 000", "10³"],
              ["Hekto", "h", "100", "10²"],
              ["Dezi", "d", "0,1", "10⁻¹"],
              ["Zenti", "c", "0,01", "10⁻²"],
              ["Milli", "m", "0,001", "10⁻³"],
              ["Mikro", "µ", "0,000 001", "10⁻⁶"],
              ["Nano", "n", "0,000 000 001", "10⁻⁹"],
              ["Piko", "p", "10⁻¹²", "10⁻¹²"],
              ["Femto", "f", "10⁻¹⁵", "10⁻¹⁵"],
            ],
          },
          merksatz:
            "Präfixe von groß zu klein: Tera(T)-Giga(G)-Mega(M)-Kilo(k) — Einheit — Milli(m)-Mikro(µ)-Nano(n)-Piko(p)-Femto(f)",
        },
        {
          heading: "SI-Präfixe: Vom Femto zum Tera",
          text: "Das metrische Präfixsystem ermöglicht es, mit einem Buchstaben vor der Einheit Faktoren von 10⁻¹⁵ bis 10¹² auszudrücken. Die wichtigsten Präfixe für die Medizin sind Mikro (µ, 10⁻⁶), Milli (m, 10⁻³), Kilo (k, 10³) und Mega (M, 10⁶). In der Labormedizin dominieren Mikro- und Milligrößen: Serumkonzentrationen in µmol/L, Volumina in µL (Mikroliter) bei PCR-Ansätzen, Arzneimitteldosen in mg bis µg. Besondere Vorsicht ist beim Symbol µ (Mikro) geboten — es darf nicht mit m (Milli) verwechselt werden. Ein Fehler von Faktor 1000 (z.B. 1 mg statt 1 µg) kann bei potenten Substanzen wie Fentanyl oder Adrenalin tödlich sein. Die WHO listet Einheitenverwechslungen als eine der häufigsten vermeidbaren Medikationsfehlerquellen.",
          merksatz:
            "Präfixe von groß zu klein: Tera(T, 10¹²) — Giga(G, 10⁹) — Mega(M, 10⁶) — Kilo(k, 10³) — [Einheit] — Milli(m, 10⁻³) — Mikro(µ, 10⁻⁶) — Nano(n, 10⁻⁹) — Piko(p, 10⁻¹²) — Femto(f, 10⁻¹⁵)",
        },
        {
          heading: "Wissenschaftliche Notation und Rechenregeln",
          text: "Die wissenschaftliche Notation a × 10ⁿ (mit 1 ≤ |a| < 10) ist das Standardwerkzeug für sehr große und sehr kleine Zahlen. Rechenregeln: Beim Multiplizieren werden Exponenten addiert (10³ × 10⁴ = 10⁷), beim Dividieren subtrahiert (10⁷/10³ = 10⁴), beim Potenzieren multipliziert ((10³)² = 10⁶). Diese Regeln gelten für Zehnerpotenzen exakt — aber auch die Mantissen müssen korrekt verrechnet werden: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷. Wenn das Ergebnis der Mantissenmultiplikation ≥ 10 ist, muss normiert werden: (5 × 10⁴) × (4 × 10³) = 20 × 10⁷ = 2 × 10⁸. Das Normieren ist der entscheidende letzte Schritt, den viele vergessen.",
          merksatz:
            "Potenzen multiplizieren → Exponenten addieren: 10³·10⁵ = 10⁸. Dividieren → subtrahieren: 10⁸/10³ = 10⁵. Potenzieren → multiplizieren: (10³)⁴ = 10¹².",
        },
        {
          heading: "Volumenpräfixe: Die häufigste Fehlerquelle",
          text: "Bei Flächen- und Volumeneinheiten mit Präfixen müssen die Präfixpotenzen quadriert bzw. kubiert werden. 1 cm² = (10⁻² m)² = 10⁻⁴ m² — nicht 10⁻² m²! 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³. Klinisch wichtig: 1 mL = 1 cm³ = 10⁻⁶ m³. 1 L = 1 dm³ = (10⁻¹ m)³ = 10⁻³ m³. Diese Umrechnungen sind im klinischen Alltag allgegenwärtig: Infusionsvolumina (mL, L), Laborprobenvolumina (µL), Injektionsvolumina (mL). Das korrekte Einheitenhandling verhindert Größenordnungsfehler, die in der Intensivmedizin lebensbedrohlich sein können.",
          merksatz:
            "1 mL = 1 cm³ (merke: Milli-Liter = Kubik-Zentimeter) — fundamental und täglich nützlich! 1 L = 1 dm³ = 1000 cm³ = 1000 mL.",
        },
      ],

      merksätze: [
        "Nachbarpräfixe unterscheiden sich um Faktor 1000: kg → g → mg → µg → ng → pg",
        "Wissenschaftliche Notation: genau eine Stelle vor dem Komma: 4,5 × 10⁻⁵ (nicht 45 × 10⁻⁶!)",
        "Exponentenregeln: Mult → addieren, Div → subtrahieren, Potenz → multiplizieren. Mantisse normieren!",
        "Volumenumrechnung: 1 mL = 1 cm³ = 10⁻⁶ m³; 1 L = 1 dm³ = 10⁻³ m³ — Exponenten kubieren!",
        "Flächenpräfix quadrieren: cm² → (10⁻²)² = 10⁻⁴ m². Volumenpräfix kubieren: cm³ → (10⁻²)³ = 10⁻⁶ m³",
        "mg vs. µg = Faktor 1000 — bei Adrenalin, Fentanyl und Digoxin kann diese Verwechslung tödlich sein",
        "Medizinische Größenordnungen: Erythrozyt ~8 µm, DNA ~2 nm, Eizelle ~53 µm, Kapillare ~5–10 µm",
        "Referenzwerte: Glukose 3,9–6,1 mmol/L; Na⁺ 135–145 mmol/L; Troponin T (hs) < 14 ng/L",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das System der SI-Präfixe und die wissenschaftliche Notation. Warum sind korrekte Präfixkenntnisse in der Medizin sicherheitsrelevant? Geben Sie zwei konkrete klinische Beispiele.",
        answer: `Das SI-Präfixsystem ermöglicht es, physikalische Größen über viele Größenordnungen hinweg kompakt und eindeutig auszudrücken. Präfixe sind Vorsätze vor die Einheit, die einen Multiplikationsfaktor (Zehnerpotenz) angeben. Die medizinisch bedeutsamsten Präfixe sind Kilo (k, 10³), Milli (m, 10⁻³), Mikro (µ, 10⁻⁶), Nano (n, 10⁻⁹) und Femto (f, 10⁻¹⁵).

Die wissenschaftliche Notation schreibt Zahlen als a × 10ⁿ mit 1 ≤ |a| < 10. Dies erleichtert Berechnungen erheblich: Beim Multiplizieren werden Exponenten addiert, beim Dividieren subtrahiert. Für Flächen und Volumina gilt: Der Präfixfaktor muss ebenfalls potenziert werden — 1 cm² = 10⁻⁴ m², 1 cm³ = 10⁻⁶ m³.

In der Medizin sind korrekte Präfixkenntnisse sicherheitsrelevant, weil Dosierungsfehler bei potenten Substanzen lebensgefährlich sein können. Zwei konkrete Beispiele:

Erstens Adrenalin (Epinephrin): Die Reanimationsdosis beträgt 1 mg i.v., die anaphylaxiebehandelnde Dosis 0,3–0,5 mg i.m. Eine zehnfache Überdosis (10 mg) kann durch extreme Vasokonstriktion und Herzrhythmusstörungen tödlich sein. Verwechslungen zwischen mg und µg (Faktor 1000) sind als Medikationsfehler dokumentiert und haben zu Todesfällen geführt.

Zweitens Heparin: Standarddosen werden in Einheiten (IE) oder mg/kg angegeben. In der Neonatologie wurden tödliche Überdosierungen durch Verwechslung der Konzentration (1000 IE/mL vs. 10 000 IE/mL) dokumentiert. Das System der SI-Präfixe stellt also nicht nur eine mathematische Konvention dar, sondern ist ein klinisches Sicherheitsinstrument. Die WHO listet Einheitenverwechslungen als eine der häufigsten Ursachen vermeidbarer Medikationsfehler.`,
      },

      klinischerBezug: `Laborwerte nutzen fast immer Präfixe: Hämoglobin in g/dL, Glukose in mmol/L, Troponin in ng/mL oder µg/L, Gerinnungsparameter in Sekunden. Der Wechsel zwischen Einheitensystemen (z.B. mg/dL für Glukose in den USA vs. mmol/L in Europa, Umrechnungsfaktor 18) hat klinische Relevanz: Ein Wert von 180 mg/dL entspricht 10 mmol/L — beide beschreiben dieselbe Hyperglykämie. Medikamentendosierungen reichen von Gramm (Paracetamol 500 mg–1 g) über Mikrogramm (Fentanyl 25–100 µg) bis Nanogramm (Calcitriol 0,25 µg = 250 ng) — ein Bereich von über 10⁶; korrekte Präfixkenntnisse sind hier buchstäblich lebenswichtig.`,

      selfTest: [
        {
          question:
            "Wie lautet 0,000 045 m in wissenschaftlicher Notation und mit korrektem SI-Präfix?",
          options: [
            "45 × 10⁻⁶ m = 45 nm",
            "4,5 × 10⁻⁵ m = 45 µm",
            "0,45 × 10⁻⁴ m = 45 mm",
            "4,5 × 10⁻⁵ m = 45 mm",
            "45 × 10⁻⁶ m = 45 µm",
          ],
          correctIndex: 1,
          explanation:
            "0,000 045 m = 4,5 × 10⁻⁵ m. In wissenschaftlicher Notation muss die Mantisse zwischen 1 und 10 liegen: 4,5 (korrekt), nicht 45 (zu groß) oder 0,45 (zu klein). Für den Präfix: 10⁻⁵ liegt zwischen 10⁻⁶ (Mikro) und 10⁻³ (Milli). Man schreibt es am besten als 45 × 10⁻⁶ m = 45 µm (45 Mikrometer). Mikro (µ) = 10⁻⁶. Also: 4,5 × 10⁻⁵ m = 45 × 10⁻⁶ m = 45 µm. Korrekte wissenschaftliche Notation: 4,5 × 10⁻⁵ m. Mit Präfix: 45 µm. Beide Antworten beschreiben dieselbe Länge — in der Physik wird die normierte wissenschaftliche Notation bevorzugt, in der Medizin oft der Präfix.",
          hints: [
            "Wissenschaftliche Notation: genau eine Stelle vor dem Komma. Dann Präfix aus der Zehnerpotenz ablesen.",
            "Mikro = 10⁻⁶. 10⁻⁵ = 10 × 10⁻⁶ = 10 µ — so: 4,5 × 10⁻⁵ m = 45 × 10⁻⁶ m = 45 µm.",
          ],
          difficulty: 2,
          tags: ["präfixe", "wissenschaftliche-notation", "einheiten"],
        },
        {
          question: "Ein Labor misst ein Blutvolumen von 5 mL. Wie viel ist das in µL und in m³?",
          options: [
            "500 µL und 5 × 10⁻⁶ m³",
            "5000 µL und 5 × 10⁻⁶ m³",
            "5000 µL und 5 × 10⁻³ m³",
            "500 µL und 5 × 10⁻³ m³",
            "50 000 µL und 5 × 10⁻⁸ m³",
          ],
          correctIndex: 1,
          explanation:
            "5 mL in µL: 1 mL = 1000 µL, also 5 mL = 5000 µL = 5 × 10³ µL. 5 mL in m³: 1 mL = 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³. Also 5 mL = 5 × 10⁻⁶ m³. Der häufigste Fehler ist das Vergessen der Kubizierung: 1 cm = 10⁻² m, aber 1 cm³ ist nicht 10⁻² m³ — es gilt (10⁻² m)³ = 10⁻⁶ m³! Man berechnet: Exponent von m kubizieren: -2 × 3 = -6. In der Praxis: 5 mL Blut ist eine typische Röhrchenmenge für Laboruntersuchungen (Hämatologie, Biochemie). Das korrekte Handling von mL, µL und m³ ist in der Labormedizin alltäglich.",
          hints: [
            "1 mL = 1 cm³ = 10⁻⁶ m³ (auswendig lernen!). Von mL zu µL: × 1000.",
            "Kubizierung: (10⁻² m)³ = 10⁻⁶ m³. Den Exponenten mit 3 multiplizieren: -2 × 3 = -6.",
          ],
          difficulty: 2,
          tags: ["volumen", "präfixe", "einheiten"],
        },
        {
          question: "Berechnen Sie: (3 × 10⁴) × (4 × 10⁻⁷) = ?",
          options: ["12 × 10⁻³", "1,2 × 10⁻²", "12 × 10³", "7 × 10⁻³", "1,2 × 10³"],
          correctIndex: 1,
          explanation:
            "(3 × 10⁴) × (4 × 10⁻⁷) = (3 × 4) × (10⁴ × 10⁻⁷) = 12 × 10⁴⁺⁽⁻⁷⁾ = 12 × 10⁻³. Da 12 ≥ 10, muss normiert werden: 12 × 10⁻³ = 1,2 × 10⁻². Das Ergebnis ist also 1,2 × 10⁻² = 0,012. Das Normieren (sicherstellen, dass die Mantisse zwischen 1 und 10 liegt) ist der entscheidende letzte Schritt, den viele vergessen. Das Ergebnis 12 × 10⁻³ ist mathematisch korrekt, aber nicht in normierter wissenschaftlicher Notation. In der Physik und Chemie wird immer die normierte Form erwartet: 1,2 × 10⁻². In der Medizin könnten solche Berechnungen z.B. bei der Berechnung von Partikelkonzentrationen oder radioaktiven Zerfallsraten auftreten.",
          hints: [
            "Mantissen multiplizieren: 3 × 4 = 12. Exponenten addieren: 4 + (-7) = -3.",
            "Wenn Mantisse ≥ 10: durch 10 dividieren und Exponent um 1 erhöhen. 12 × 10⁻³ = 1,2 × 10⁻².",
          ],
          difficulty: 2,
          tags: ["zehnerpotenzen", "wissenschaftliche-notation", "rechnen"],
        },
        {
          question:
            "Ein Wirkstoff hat eine Plasmakonzentration von 250 ng/mL. Ein Patient hat 5 L Blut. Wie viel mg des Wirkstoffs sind insgesamt im Blut?",
          options: ["0,00125 mg", "1,25 mg", "125 mg", "0,125 mg", "12,5 mg"],
          correctIndex: 1,
          explanation:
            "Konzentration = 250 ng/mL. Umrechnung: 1 ng = 10⁻⁹ g = 10⁻⁶ mg. Also 250 ng/mL = 250 × 10⁻⁶ mg/mL = 0,00025 mg/mL = 0,25 µg/mL. Blutvolumen = 5 L = 5000 mL. Gesamtmenge = 0,00025 mg/mL × 5000 mL = 1,25 mg. Alternativ: 250 ng/mL × 5000 mL = 1 250 000 ng = 1 250 µg = 1,25 mg. Dies ist ein typisches pharmakokinetisches Rechenbeispiel: aus Plasmakonzentration und Verteilungsvolumen die Gesamtmenge berechnen. In der Praxis werden solche Berechnungen beim therapeutischen Drug Monitoring (TDM) durchgeführt, um zu kontrollieren, ob Medikamentenspiegel im therapeutischen Fenster liegen.",
          hints: [
            "Einheit umrechnen: ng zu mg ist Faktor 10⁻⁶ (nano = 10⁻⁹, also 1 ng = 10⁻⁶ mg).",
            "Gesamtmenge = Konzentration × Volumen. 5 L = 5000 mL nicht vergessen!",
          ],
          difficulty: 3,
          tags: ["pharmakologie", "konzentration", "präfixe"],
        },
        {
          question:
            "Die Halbwertszeit eines Medikaments beträgt 1,5 × 10⁴ s. Wie viele Stunden sind das?",
          options: ["4,17 h", "41,7 h", "0,417 h", "15 000 min", "250 min"],
          correctIndex: 0,
          explanation:
            "1,5 × 10⁴ s = 15 000 s. Umrechnung: 1 h = 3600 s, also 15 000 s / 3600 s/h = 4,167 h ≈ 4,17 h. Das entspricht etwa 4 Stunden und 10 Minuten. Zum Vergleich: Die Halbwertszeit von Aspirin beträgt ca. 15–20 min = ~1000–1200 s, die von Phenobarbital ca. 79–120 h = ~285 000–432 000 s, die von Digoxin ca. 36 h. Eine Halbwertszeit von ~4 h liegt im Bereich kurzwirksamer Substanzen wie Morphin (2–4 h) oder Metoprolol (3–7 h). Nach ~5 Halbwertszeiten (hier ~21 h) ist der Wirkstoff praktisch vollständig eliminiert — ein wichtiges Konzept für die Dosierungsplanung.",
          hints: ["1 h = 3600 s. Teile durch 3600.", "1,5 × 10⁴ s = 15 000 s ÷ 3600 ≈ 4,2 h."],
          difficulty: 2,
          tags: ["halbwertszeit", "zeitumrechnung", "pharmakologie"],
        },
      ],
    },

    {
      id: "ph-1-03",
      title: "Dimensionsanalyse und Einheitenumrechnung",
      stichworte: [
        "Dimensionsanalyse",
        "dimensionale Homogenität",
        "Basisdimensionen",
        "Kettenmultiplikation",
        "Einheitenumrechnung",
        "Reynolds-Zahl",
        "Wirkungsgrad",
        "mmHg zu Pascal",
        "kcal zu kJ",
        "Temperaturumrechnung",
        "dimensionslose Größen",
      ],
      content: `Stell dir vor, du leitest eine Formel her und erhältst als Ergebnis „Meter plus Sekunden". Irgendetwas muss schiefgelaufen sein — Längen und Zeiten zu addieren ist wie Äpfel und Birnen zusammenzählen. Die **Dimensionsanalyse** nutzt genau dieses Prinzip als mächtigstes Werkzeug der Physik: Wenn die Einheiten nicht stimmen, ist die Formel garantiert falsch.

---

{{DIAGRAM:si-units-overview}}

## Basisdimensionen und das Prinzip der dimensionalen Homogenität

Die **Dimension** einer Größe beschreibt ihre physikalische Natur — unabhängig von Zahlenwert oder konkreter Einheit. Die sieben **Basisdimensionen** entsprechen den SI-Basisgrößen:

| Basisdimension | Symbol | Beispiel-Einheit |
|----------------|--------|-----------------|
| Länge | L | m, cm, km |
| Masse | M | kg, g |
| Zeit | T | s, min, h |
| Stromstärke | I | A |
| Temperatur | Theta | K, °C |
| Stoffmenge | N | mol |
| Lichtstärke | J | cd |

Jede abgeleitete Größe hat eine eindeutige Dimensionsformel:

| Größe | Dimensionsformel | SI-Einheit |
|-------|-----------------|------------|
| Kraft | M·L·T⁻² | Newton (N) |
| Druck | M·L⁻¹·T⁻² | Pascal (Pa) |
| Energie | M·L²·T⁻² | Joule (J) |
| Leistung | M·L²·T⁻³ | Watt (W) |
| Impuls | M·L·T⁻¹ | kg·m/s |

Das **Prinzip der dimensionalen Homogenität**: In jeder korrekten physikalischen Gleichung müssen beide Seiten dieselbe Dimension haben. Verschiedene Dimensionen können **niemals** addiert oder gleichgesetzt werden.

> **Merke:** Dimensionsanalyse = schnellster Weg, falsche Formeln zu entlarven. Stimmen die Einheiten links und rechts nicht überein, ist die Formel falsch — auch ohne zu rechnen!

---

## Dimensionsanalyse als Formelprüfer

**Beispiel — falsche Energieformel entlarven:**
Behauptung: E_kin = m·v (statt E_kin = 1/2·m·v²).

Linke Seite: [E_kin] = M·L²·T⁻² (Energie)
Rechte Seite: [m·v] = M · L·T⁻¹ = M·L·T⁻¹ (das ist Impuls!)

Dimensionen stimmen nicht überein → Formel ist falsch. Korrekt: [m·v²] = M·(L·T⁻¹)² = M·L²·T⁻² — stimmt mit Energie überein.

**Prüfungstrick:** Bei MedAT-Formelfragen kannst du falsche Optionen allein durch Einheitenvergleich ausschließen — ohne die Formel inhaltlich zu kennen.

---

## Kettenmultiplikation — sichere Einheitenumrechnung

Die **Kettenmultiplikation** (Factor-Label-Methode) ist die sicherste Umrechnungsmethode: Man multipliziert mit Umrechnungsfaktoren der Form (neue Einheit / alte Einheit), die jeweils den Wert 1 haben, bis die gewünschte Einheit übrig bleibt.

**Geschwindigkeit: 72 km/h → m/s:**
72 km/h x (1000 m / 1 km) x (1 h / 3600 s) = 72 x 1000/3600 = **20 m/s**

> **Merke:** km/h / 3,6 = m/s. Umgekehrt: m/s x 3,6 = km/h. Diese Umrechnung kommt im MedAT sehr häufig vor!

**Druck: 120 mmHg → Pa:**
120 mmHg x (133,3 Pa / 1 mmHg) = **15 996 Pa ≈ 16 kPa**

**Energie: 500 kcal → Joule:**
500 kcal x 4184 J/kcal = 2 092 000 J = **2092 kJ ≈ 2,09 MJ**

---

## Klinisch wichtige Umrechnungen

| Kategorie | Umrechnung | Klinische Bedeutung |
|-----------|-----------|---------------------|
| **Temperatur** | T(K) = T(°C) + 273,15 | 37°C = 310,15 K |
| | T(°F) = 1,8 x T(°C) + 32 | Fieber: > 38°C = > 100,4°F |
| **Druck** | 1 atm = 101 325 Pa ≈ 760 mmHg | Atmosphärendruck |
| | 1 mmHg ≈ 133,3 Pa | Blutdruck-Umrechnung |
| | 1 cmH₂O ≈ 98,1 Pa | Beatmungsdrucke (PEEP) |
| | 1 mmHg ≈ 1,36 cmH₂O | Vergleich RR vs. Beatmung |
| **Energie** | 1 kcal = 4,184 kJ | Nahrwertberechnung |
| | 1 g KH/Protein ≈ 17 kJ (4 kcal) | Makronährstoffe |
| | 1 g Fett ≈ 37 kJ (9 kcal) | Fett liefert 2x mehr! |

---

{{DIAGRAM:scalar-vector-comparison}}

## Dimensionslose Größen

**Dimensionslose Größen** sind reine Verhältniszahlen ohne Einheit — sie bleiben unabhängig vom Einheitensystem gleich:

| Größe | Formel | Klinische Bedeutung |
|-------|--------|---------------------|
| **Reynolds-Zahl** Re | (rho·v·d) / eta | Laminar vs. turbulente Strömung |
| **Wirkungsgrad** eta | W_nutz / W_zu | Herz: ~20-25 % (Rest = Wärme) |
| **pH-Wert** | -log[H⁺] | Säure-Base-Gleichgewicht |
| **Brechungsindex** n | c/v | Augenoptik, Linsensysteme |

Die **Reynolds-Zahl** ist die klinisch wichtigste dimensionslose Kennzahl:

Re = (rho · v · d) / eta

- rho = Dichte (kg/m³), v = Geschwindigkeit (m/s), d = Durchmesser (m), eta = Viskosität (Pa·s)
- **Re < 2300**: laminare Strömung (geordnet — normal in kleinen Gefäßen)
- **Re > 4000**: turbulente Strömung (chaotisch — hörbar als Herzgeräusch)
- **2300-4000**: Übergangsbereich

Dimensionsanalyse bestätigt: [Re] = (kg/m³ · m/s · m) / (kg·m⁻¹·s⁻¹) = 1 (einheitenlos).

**Klinisch:** Bei Anämie sinkt die Blutviskosität eta → Re steigt → Turbulenz → Strömungsgeräusche hörbar. Bei Aortenstenose steigt v lokal → Re erhöht → Systolikum (Herzgeräusch).

> **Merke:** Reynolds-Zahl: Re < 2300 laminar, Re > 4000 turbulent. eta im Nenner: niedrige Viskosität → hohe Re → Turbulenz. Erklärt Anämie-Geräusche!

---

## Rechenbeispiele

**Beispiel 1 — Formelprüfer (Fallgeschwindigkeit):**
Formel v = Wurzel(2·g·h) — dimensionskonsistent?
[v] = L·T⁻¹. [g·h] = (L·T⁻²)·L = L²·T⁻². [Wurzel(g·h)] = L·T⁻¹. Stimmt überein!
Zahlenbeispiel: Sturz aus 3 m → v = Wurzel(2 x 9,81 x 3) ≈ **7,67 m/s** ≈ 27,6 km/h.

**Beispiel 2 — Druckumrechnung (Blutdruck):**
140 mmHg in cmH₂O: 140 x 1,36 = **190,4 cmH₂O** (vgl. PEEP ~5-15 cmH₂O).
In Pascal: 140 x 133,3 = **18 662 Pa ≈ 18,7 kPa**.

**Beispiel 3 — Mahlzeit kalkulieren:**
80 g KH (x 17 kJ) + 30 g Fett (x 37 kJ) + 25 g Protein (x 17 kJ) = 1360 + 1110 + 425 = **2895 kJ ≈ 692 kcal** (38,6 % des Grundumsatzes von ~7500 kJ/d).

**Beispiel 4 — Reynolds-Zahl der Aorta:**
rho = 1060 kg/m³, v = 0,5 m/s, d = 0,025 m, eta = 3,5 x 10⁻³ Pa·s.
Re = (1060 x 0,5 x 0,025) / 0,0035 ≈ **3786** → Übergangsbereich, bei Belastung turbulent.

**Prüfungsrelevante Zahlen:**
- km/h / 3,6 = m/s; 1 mmHg ≈ 133 Pa; 1 cmH₂O ≈ 98 Pa
- 1 kcal = 4,184 kJ; 1 g Fett ≈ 9 kcal; 1 g KH/Protein ≈ 4 kcal
- T(K) = T(°C) + 273,15; 37°C = 310,15 K = 98,6°F
- Re < 2300 laminar, Re > 4000 turbulent
- Wirkungsgrad Herz ~20-25 %; Grundumsatz ~1800 kcal/d`,

      lernziele: [
        "Die Methode der Dimensionsanalyse verstehen und zur Formelprüfung einsetzen können",
        "Physikalische Dimensionen der wichtigsten abgeleiteten Größen angeben können (Kraft, Druck, Energie, Leistung, Impuls)",
        "Einheiten sicher umrechnen mit dem Kettenmultiplikationsverfahren (km/h → m/s, mmHg → Pa, kcal → kJ)",
        "Klinisch relevante Umrechnungen beherrschen: Temperatur (°C, K, °F), Druck (mmHg, Pa, cmH₂O), Energie (kcal, kJ)",
        "Dimensionslose Größen erkennen und die Reynolds-Zahl als Beispiel aus der Hämodynamik erläutern können",
      ],

      sections: [
        {
          heading: "Basisdimensionen des SI-Systems",
          text: "Jede physikalische Größe lässt sich auf sieben Basisdimensionen zurückführen. Die Dimensionsanalyse nutzt diese Basisdimensionen, um die Korrektheit von Formeln zu prüfen.",
          table: {
            headers: ["Dimension", "Symbol"],
            rows: [
              ["Länge", "L"],
              ["Masse", "M"],
              ["Zeit", "T"],
              ["Elektrische Stromstärke", "I"],
              ["Temperatur", "Θ"],
              ["Stoffmenge", "N"],
              ["Lichtstärke", "J"],
            ],
          },
        },
        {
          heading: "Dimensionsanalyse: Formeln überprüfen",
          text: "Die Dimensionsanalyse nutzt die Tatsache, dass in jeder korrekten physikalischen Gleichung beide Seiten dieselbe Dimension haben müssen. Die Dimension einer Größe beschreibt ihre physikalische Natur in Form der Basisdimensionen Länge (L), Masse (M), Zeit (T), Stromstärke (I), Temperatur (Θ), Stoffmenge (N) und Lichtstärke (J). Jede abgeleitete Größe hat eine eindeutige Dimensionsformel: Kraft = M·L·T⁻², Druck = M·L⁻¹·T⁻², Energie = M·L²·T⁻², Leistung = M·L²·T⁻³. Wenn eine Herleitung zu einem Ausdruck führt, bei dem Dimensionen nicht stimmen (z.B. Meter + Sekunden addiert werden), ist garantiert ein Fehler passiert. Dimensionsanalyse ist damit eine zuverlässige Plausibilitätsprüfung — ohne Kenntnis der Lösung.",
          merksatz:
            "Dimensionscheck: Beide Seiten einer Gleichung müssen dieselbe Dimension haben. Unterschiedliche Dimensionen addieren ist verboten — genauso wie Äpfel zu Orangen addieren.",
        },
        {
          heading: "Kettenmultiplikation zur Einheitenumrechnung",
          text: 'Die sicherste Methode zur Einheitenumrechnung ist das Aufschreiben und Kürzen von Einheiten wie Brüche. Man multipliziert die gegebene Größe sukzessive mit Umrechnungsfaktoren der Form (neue Einheit / alte Einheit) — da Zähler und Nenner gleich sind, ist jeder Faktor = 1 und ändert den Wert nicht. Die alten Einheiten kürzen sich heraus. Beispiel: 72 km/h × (1000 m/1 km) × (1 h/3600 s) = 20 m/s. Das explizite Aufschreiben der Einheiten und das Kürzen verhindert Fehler. Diese Methode, auch "factor-label method" genannt, ist in der Chemie und Physik Standard und in der Medizin für Dosierungsberechnungen unverzichtbar.',
          merksatz:
            "Merke: 1 m/s = 3,6 km/h (oder: km/h ÷ 3,6 = m/s). 1 mmHg ≈ 133 Pa. 1 kcal = 4,184 kJ. T(K) = T(°C) + 273,15.",
        },
        {
          heading: "Klinische Druckumrechnungen",
          text: "Im klinischen Alltag werden mehrere Druckeinheiten parallel verwendet. Der Blutdruck wird in mmHg (Millimeter Quecksilbersäule) gemessen, Beatmungsdrücke in cmH₂O (Zentimeter Wassersäule), der Atmosphärendruck in hPa oder bar, und die SI-Einheit ist Pascal. Umrechnungen: 1 mmHg = 133,3 Pa; 1 cmH₂O = 98,1 Pa; 1 bar = 10⁵ Pa; 1 atm = 101 325 Pa. Für einen normalen systolischen Blutdruck von 120 mmHg: 120 × 133,3 Pa = 15 996 Pa ≈ 16 kPa. Beatmungsdrücke liegen typischerweise bei 10–30 cmH₂O = 1–3 kPa. Das Verständnis dieser Zahlenverhältnisse hilft bei der Beurteilung von Beatmungsparametern und hämodynamischen Werten sowie beim Vergleich internationaler Fachliteratur.",
          merksatz:
            "Druckumrechnungen: 1 atm = 101 325 Pa ≈ 760 mmHg ≈ 1013 hPa. Normal-RR: 120/80 mmHg ≈ 16/10,7 kPa. Beatmung: PEEP 5 cmH₂O ≈ 490 Pa ≈ 0,49 kPa.",
        },
        {
          heading: "Reynolds-Zahl und Hämodynamik",
          text: "Die Reynolds-Zahl (Re = ρ·v·d/η) ist eine dimensionslose Kennzahl, die angibt, ob eine Strömung laminar (geordnet, Re < 2300) oder turbulent (chaotisch, Re > 4000) ist. In der Physiologie fließt Blut in den meisten Gefäßen laminar — dies ist energieeffizient und geräuschlos. Turbulenz tritt auf bei hohen Flussgeschwindigkeiten, großen Gefäßdurchmessern oder niederer Viskosität (z.B. bei schwerer Anämie). Pathologische Turbulenzen in den Herzklappen erzeugen die hörbaren Herzgeräusche. Bei Aortenstenose steigt die Strömungsgeschwindigkeit durch die verengte Klappe dramatisch an — Re erhöht sich weit über 4000, Turbulenzen entstehen, das charakteristische raue Systolikum wird hörbar. Die Dimensionsanalyse bestätigt, dass Re einheitenlos ist.",
          merksatz:
            "Reynolds-Zahl Re < 2300: laminar (normal in kleinen Gefäßen). Re > 4000: turbulent (Herzgeräusche, Aneurysmen). Re = ρ·v·d/η — dimensionslos, weil alle Einheiten sich heraus kürzen!",
        },
      ],

      merksätze: [
        "Dimensionsanalyse: Beide Seiten einer Gleichung müssen die GLEICHE Dimension haben — sonst ist die Formel falsch!",
        "Dimensionsformeln: [Kraft] = M·L·T⁻²; [Druck] = M·L⁻¹·T⁻²; [Energie] = M·L²·T⁻²; [Leistung] = M·L²·T⁻³",
        "Kettenmultiplikation: Einheiten wie Brüche kürzen — sicherste Umrechnungsmethode",
        "km/h ÷ 3,6 = m/s — häufigste MedAT-Umrechnung!",
        "Druckumrechnungen: 1 atm ≈ 760 mmHg ≈ 101 325 Pa; 1 mmHg ≈ 133 Pa ≈ 1,36 cmH₂O",
        "Temperatur: T(K) = T(°C) + 273,15; 37°C = 310 K = 98,6°F; Fieber > 38°C = > 100,4°F",
        "Nährwerte: 1 kcal = 4,184 kJ; 1 g Fett ≈ 9 kcal (37 kJ); 1 g KH/Protein ≈ 4 kcal (17 kJ)",
        "Reynolds-Zahl Re = ρ·v·d/η: < 2300 laminar, > 4000 turbulent. Dimensionslos! η im Nenner → niedrige Viskosität → Turbulenz",
        "Dimensionslose Größen: pH-Wert, Wirkungsgrad, Reynolds-Zahl, Brechungsindex — reine Verhältniszahlen",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Prinzip der Dimensionsanalyse und zeigen Sie am Beispiel der kinetischen Energie und des Blutdrucks, wie man Formeln prüft und Einheiten korrekt umrechnet.",
        answer: `Die Dimensionsanalyse beruht auf dem Prinzip der **dimensionalen Homogenität**: In jeder physikalisch korrekten Gleichung müssen beide Seiten dieselbe Dimension aufweisen. Dimensionen beschreiben die physikalische Natur einer Größe in Form der sieben Basisdimensionen Länge (L), Masse (M), Zeit (T), elektrische Stromstärke (I), Temperatur (Θ), Stoffmenge (N) und Lichtstärke (J).

**Beispiel kinetische Energie:** Die Formel E_kin = ½·m·v² lässt sich dimensionsanalytisch überprüfen. Die linke Seite hat die Dimension [E] = M·L²·T⁻². Die rechte Seite: [m·v²] = M·(L·T⁻¹)² = M·L²·T⁻². Beide Seiten stimmen überein — die Formel ist dimensionskonsistent. Würde man versehentlich E = m·v schreiben, ergäbe die rechte Seite M·L·T⁻¹ (= Dimension des Impulses) — ungleich der Energiedimension M·L²·T⁻². Der Fehler ist sofort sichtbar.

**Einheitenumrechnung Blutdruck:** Ein systolischer Blutdruck von 120 mmHg soll in Pascal (SI) umgerechnet werden. Mit dem Kettenmultiplikationsverfahren: 120 mmHg × (133,322 Pa / 1 mmHg) = 15 998,6 Pa ≈ 16 kPa. Der Umrechnungsfaktor 133,322 Pa/mmHg ergibt sich aus der Dichte von Quecksilber (13 600 kg/m³) und der Erdbeschleunigung: 1 mmHg = ρ·g·h = 13 600 kg/m³ × 9,81 m/s² × 0,001 m = 133,4 Pa.

Die Dimensionsanalyse ist ein doppelt nützliches Werkzeug: als Formelprüfung und als systematisches Umrechnungsverfahren. In der klinischen Praxis ist korrektes Einheitenhandling direkt sicherheitsrelevant — falsche Einheiten bei Medikamentendosen, Infusionsraten oder Laborwerten können zu schwerwiegenden Behandlungsfehlern führen.`,
      },

      klinischerBezug: `Dimensionsanalyse ist in der Medizin ein alltägliches Sicherheitsinstrument. Bei der Dosierungsberechnung (Dosis [mg] = Konzentration [mg/mL] × Volumen [mL]) sorgt das Einheitentracking für Fehlerfreiheit. Die Umrechnung zwischen mmHg und Pa ist notwendig, wenn Blutdruckmessgeräte kalibriert werden oder Druckgradienten bei Herzklappenstenosen berechnet werden. Die vereinfachte Bernoulli-Gleichung der Echokardiographie (ΔP = 4·v²; v in m/s, ΔP in mmHg) enthält einen impliziten Umrechnungsfaktor — Echokardiographen müssen diese Einheitenkonvention kennen. Ernährungsberechnungen (kcal ↔ kJ, g Makronährstoff → kJ) nutzen ebenfalls täglich das Kettenmultiplikationsverfahren.`,

      selfTest: [
        {
          question: 'Welche Dimension hat die physikalische Größe "Druck"?',
          options: ["M·L·T⁻²", "M·L²·T⁻²", "M·L⁻¹·T⁻²", "M·L²·T⁻³", "M·T⁻²"],
          correctIndex: 2,
          explanation:
            "Druck = Kraft/Fläche. Die Dimension der Kraft ist M·L·T⁻² (Newton = kg·m·s⁻²). Die Dimension der Fläche ist L². Also: Dimension des Drucks = (M·L·T⁻²)/L² = M·L⁻¹·T⁻². In SI-Einheiten: Pascal (Pa) = kg·m⁻¹·s⁻² = N/m². Der negative Exponent bei L im Druck bedeutet, dass Druck inversely proportional zur Fläche ist — je kleiner die Fläche, auf die eine Kraft wirkt, desto größer der Druck. Zur Übersicht: M·L·T⁻² ist Newton (Kraft), M·L²·T⁻² ist Joule (Energie), M·L²·T⁻³ ist Watt (Leistung). Diese Dimensionen auswendig zu kennen ist fundamental für die Dimensionsanalyse.",
          hints: [
            "Druck = Kraft / Fläche. Was ist die Dimension von Kraft? Von Fläche?",
            "[Kraft] = M·L·T⁻². [Fläche] = L². Also [Druck] = M·L·T⁻²/L² = M·L⁻¹·T⁻².",
          ],
          difficulty: 2,
          tags: ["dimensionsanalyse", "druck", "pascal"],
        },
        {
          question: "Welche der folgenden Gleichungen ist dimensionsanalytisch FALSCH?",
          options: [
            "v = s / t (Geschwindigkeit = Weg/Zeit)",
            "F = m·a (Kraft = Masse × Beschleunigung)",
            "E = m·v (Energie = Masse × Geschwindigkeit)",
            "P = F·v (Leistung = Kraft × Geschwindigkeit)",
            "p = F/A (Druck = Kraft/Fläche)",
          ],
          correctIndex: 2,
          explanation:
            "E = m·v ist dimensionsanalytisch falsch. [m·v] = M·L·T⁻¹ — das ist die Dimension des Impulses (kg·m/s), nicht der Energie! Die korrekte Formel für kinetische Energie ist E_kin = ½·m·v², mit Dimension [m·v²] = M·(L·T⁻¹)² = M·L²·T⁻², was der Dimension der Energie entspricht. Zum Vergleich: [v] = L·T⁻¹ (korrekt für Geschwindigkeit); [m·a] = M·L·T⁻² = N (korrekt für Newton); [F·v] = M·L·T⁻²·L·T⁻¹ = M·L²·T⁻³ = W (korrekt für Watt); [F/A] = M·L·T⁻²/L² = M·L⁻¹·T⁻² = Pa (korrekt für Pascal). Die Dimensionsanalyse entlarvt also die Verwechslung von Impuls und Energie sofort.",
          hints: [
            "Dimension der Energie: M·L²·T⁻² = kg·m²/s². Prüfe jede Option auf diese Dimension.",
            "E = m·v: [m·v] = kg·m/s = Impuls ≠ Energie! Energie braucht v² (Quadrat der Geschwindigkeit).",
          ],
          difficulty: 2,
          tags: ["dimensionsanalyse", "energie", "impuls"],
        },
        {
          question:
            "Ein Ernährungsplan enthält 2500 kcal/Tag. Wie viel ist das in MJ/Tag? (1 kcal = 4,184 kJ)",
          options: ["597,7 MJ/Tag", "10,46 MJ/Tag", "1046 MJ/Tag", "0,598 MJ/Tag", "10 460 MJ/Tag"],
          correctIndex: 1,
          explanation:
            "2500 kcal × 4,184 kJ/kcal = 10 460 kJ = 10 460 × 10³ J / 10⁶ = 10,46 MJ. Die kcal (Kilokalorie) ist die traditionelle Einheit für den Energiegehalt von Lebensmitteln. 1 kcal ist die Energie, die nötig ist, um 1 kg Wasser um 1 °C zu erwärmen. In der Physik und modernen Ernährungswissenschaft wird SI-konform in Joule (oder Kilojoule) gemessen. Der Grundumsatz eines erwachsenen Menschen beträgt ca. 1600–2000 kcal/d = 6,7–8,4 MJ/d. 2500 kcal/d entspricht einem leicht erhöhten Energiebedarf — typisch für jemanden mit moderater körperlicher Aktivität. Die Nährwertdeklaration auf Lebensmitteln in der EU enthält seit 2014 verpflichtend beide Angaben: kJ und kcal.",
          hints: [
            "1 kcal = 4,184 kJ. Also 2500 kcal × 4,184 = ? kJ. Dann kJ in MJ: ÷ 1000.",
            "2500 × 4,184 = 10 460 kJ = 10,46 MJ.",
          ],
          difficulty: 2,
          tags: ["energie", "einheitsumrechnung", "ernährung"],
        },
        {
          question: "Welche Aussage zur Reynolds-Zahl ist KORREKT?",
          options: [
            "Die Reynolds-Zahl hat die Einheit Pascal.",
            "Bei Re > 2300 ist die Strömung immer laminar.",
            "Die Reynolds-Zahl ist dimensionslos; turbulente Strömung tritt bei Re > 4000 auf.",
            "Die Reynolds-Zahl misst den Blutdruck in Gefäßen.",
            "Bei geringer Viskosität des Blutes sinkt die Reynolds-Zahl.",
          ],
          correctIndex: 2,
          explanation:
            "Die Reynolds-Zahl Re = ρ·v·d/η ist dimensionslos — alle Einheiten kürzen sich heraus. Laminar ist die Strömung bei Re < 2300, turbulent bei Re > 4000, dazwischen liegt ein Übergangsbereich. Im menschlichen Körper ist Blutströmung in kleinen Gefäßen (Kapillaren, Arteriolen) immer laminar (Re << 2300). In der Aorta kann Re ca. 1500–4500 erreichen — bei hohem Herzauswurf (Sport, Fieber) auch turbulent. Bei Anämie sinkt die Blutviskosität η, was Re erhöht und Turbulenz begünstigt — das erklärt das Anämiegeräusch (strömungsbedingte Herzgeräusche bei starker Anämie). Eine sinkende Viskosität erhöht Re (nicht senkt es), weil η im Nenner steht.",
          hints: [
            "Reynolds-Zahl: Re = ρ·v·d/η — η (Viskosität) steht im Nenner. Kleines η → großes Re.",
            "Dimensionslos = keine Einheit. Laminar bei Re < 2300, turbulent bei Re > 4000.",
          ],
          difficulty: 3,
          tags: ["reynolds-zahl", "strömung", "dimensionslose-größe"],
        },
        {
          question:
            "Ein Blutdruck von 80 mmHg (diastolisch) soll in cmH₂O umgerechnet werden. (1 mmHg = 1,36 cmH₂O)",
          options: ["58,8 cmH₂O", "108,8 cmH₂O", "80 cmH₂O", "1088 cmH₂O", "5,88 cmH₂O"],
          correctIndex: 1,
          explanation:
            "80 mmHg × 1,36 cmH₂O/mmHg = 108,8 cmH₂O. Der Faktor 1,36 ergibt sich aus dem Dichteverhältnis von Quecksilber (13 600 kg/m³) zu Wasser (1000 kg/m³): 13 600/1000 = 13,6 — ein mm Hg entspricht 13,6 mm H₂O = 1,36 cm H₂O. Drücke in cmH₂O werden oft in der Beatmungsmedizin verwendet: PEEP (Positiver endexspiratorischer Druck) typisch 5–20 cmH₂O, Atemwegsdruck 10–40 cmH₂O. Der diastolische Blutdruck von 80 mmHg = 108,8 cmH₂O verdeutlicht, dass Beatmungsdrücke (5–40 cmH₂O) weit kleiner als der Blutdruck (80–120 mmHg = 109–163 cmH₂O) sind — das Herz ist der stärkere Druckerzeuger.",
          hints: [
            "Kettenmultiplikation: 80 mmHg × (1,36 cmH₂O / 1 mmHg) = ?",
            "80 × 1,36 = 108,8. Einheit: mmHg kürzt sich, übrig bleibt cmH₂O.",
          ],
          difficulty: 2,
          tags: ["blutdruck", "druck", "einheitsumrechnung"],
        },
      ],
    },
    // === from kap2-mechanik ===
    {
      id: "ph-2-01",
      title: "Newtonsche Gesetze und Kinematik",
      stichworte: [
        "Trägheitsgesetz",
        "F=ma",
        "actio=reactio",
        "Kinematik",
        "freier Fall",
        "Beschleunigung",
        "Dezelerationstrauma",
        "Superpositionsprinzip",
        "Geschwindigkeit",
        "gleichförmige Bewegung",
        "Vektoren",
      ],
      content: `Bei einem Auffahrunfall mit 50 km/h wirkt das 25-fache der Erdanziehung auf den Kopf — warum ein Airbag Millisekunden entscheidet, erklärt Newtons zweites Gesetz.

## Newtonsche Gesetze und Kinematik



Die klassische Mechanik ist das Fundament der Physik und beschreibt, wie sich Körper unter dem Einfluss von Kräften bewegen. Isaac Newton formulierte im 17. Jahrhundert drei Grundgesetze, die für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit bis heute uneingeschränkt gültig sind. Diese Gesetze sind keine abstrakten Theorien — sie erklären, warum Knochen brechen, wie das Herz Blut pumpt und weshalb Venenpunktionen eine bestimmte Kraft erfordern.

{{DIAGRAM:newton-forces}}

## Kinematik: Bewegung ohne Kräfte

{{DIAGRAM:inclined-plane}}

Die **Kinematik** (Bewegungslehre) beschreibt Bewegungen rein mathematisch — **ohne** nach der Ursache zu fragen. Grundgrößen sind **Ort** (s), **Zeit** (t), **Geschwindigkeit** (v = Weg pro Zeit) und **Beschleunigung** (a = Änderung der Geschwindigkeit pro Zeit).

**Gleichförmige Bewegung:** Bei konstanter Geschwindigkeit gilt s = v · t. Der Weg ist proportional zur Zeit. Im v-t-Diagramm ist das eine Horizontale; die Fläche unter der Kurve ergibt den zurückgelegten Weg.

**Gleichmäßig beschleunigte Bewegung:** Wenn eine konstante Kraft auf einen Körper wirkt, gilt a = const. Die Geschwindigkeit wächst linear: v(t) = v₀ + a · t. Der Weg folgt einer Parabelgleichung: s(t) = s₀ + v₀·t + ½·a·t². Der freie Fall ist der Spezialfall mit a = g ≈ 9,81 m/s² (Erdbeschleunigung). Ein Körper, der aus der Ruhe fällt, erreicht nach 1 s eine Geschwindigkeit von 9,81 m/s und hat 4,9 m zurückgelegt.

**Vektorielle Darstellung:** Geschwindigkeit und Beschleunigung sind Vektoren — sie haben Betrag (Skalar) und Richtung. Bei schiefer Wurf-Bewegung zerlegt man die Bewegung in horizontale (v_x = const) und vertikale Komponente (v_y = v₀y − g·t). Die Bahnkurve ist eine Parabel.

**Relativbewegung:** Geschwindigkeiten addieren sich vektoriell. Wenn ein Läufer mit 4 m/s in einem Zug fährt, der selbst 30 m/s schnell fährt, ist seine Geschwindigkeit relativ zur Erde 34 m/s (in Fahrtrichtung) oder 26 m/s (entgegen). **Superpositionsprinzip**: Wirken mehrere Kräfte oder Bewegungen gleichzeitig auf einen Körper, addieren sich ihre Vektoren unabhängig voneinander. Das Gesamtergebnis ist die Vektorsumme aller Einzelbeiträge.



## Das erste Newtonsche Gesetz — Trägheitsgesetz

Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn wirkt. Trägheit (lat. inertia) bedeutet Widerstandsfähigkeit gegen Zustandsänderung. Die Trägheit ist proportional zur Masse: Ein 80-kg-Mensch hat die doppelte Trägheit eines 40-kg-Kindes.

Im klinischen Kontext ist das Trägheitsgesetz bei Dezelerationstraumen entscheidend: Bei einem Frontalaufprall bremst das Fahrzeug schlagartig ab, aber Organe (Leber, Milz, Aorta) bewegen sich aufgrund ihrer Trägheit weiter vorwärts. Dabei können Gefäßstiele abreißen — besonders die Aorta descendens (absteigender Teil der Hauptschlagader) ist anfällig für Transektionen (vollständige Gefäßdurchtrennung), weil sie an der Wirbelsäule fixiert ist, während der Aortenbogen sich weiter vorwärts bewegt.

## Das zweite Newtonsche Gesetz — Aktionsprinzip

**F = m · a** ist das wichtigste Gesetz der Mechanik. Eine Kraft von 1 Newton (N = kg·m/s²) beschleunigt 1 kg um 1 m/s². Das Gesetz ist vektoriell: Die Beschleunigung zeigt in dieselbe Richtung wie die resultierende Kraft.

**Formelklartext:** F = m·a heißt: **Kraft** = **Masse** × **Beschleunigung**. Bei gleicher Kraft: größere Masse → **kleinere** Beschleunigung. Bei gleicher Masse: größere Kraft → größere Beschleunigung. **Einheiten:** [F] = N = kg·m/s², [m] = kg, [a] = m/s². **MedAT:** Airbag verlängert Brems**zeit** Δt → gleiche Impulsänderung Δp = F·Δt bei **kleinerer** Kraft F. Brems**weg** s größer → kleinere Verzögerung a → F = m·a kleiner.

Aus F = m·a folgt direkt: Größere Masse → geringere Beschleunigung bei gleicher Kraft. Das erklärt, warum ein schwerer Patient schwieriger zu reanimieren ist — bei identischer Herzmassagekraft ist die erzeugte Thoraxkompression (Beschleunigung des Sternums) geringer. Die optimale Drucktiefe erfordert daher eine angepasste Kraft.

**Superpositionsprinzip:** Mehrere Kräfte überlagern sich zur Gesamtkraft F_res = F₁ + F₂ + ... (Vektorsumme). Im Gleichgewicht ist F_res = 0. Das Auflösen dieser Vektorgleichungen (Komponentenform: F_x = 0, F_y = 0) ist das Werkzeug der Statik.

## Das dritte Newtonsche Gesetz — Reaktionsprinzip (actio = reactio)

Wenn Körper A eine Kraft auf Körper B ausübt, übt Körper B gleichzeitig eine gleich große, aber entgegengesetzte Kraft auf Körper A aus. Beide Kräfte bilden ein Aktions-Reaktions-Paar, wirken aber auf verschiedene Körper — sie heben sich daher nicht auf!

Beim Laufen: Der Fuß drückt die Erde nach hinten-unten (Aktionskraft). Die Erde drückt den Fuß nach vorne-oben (Reaktionskraft = Bodenreaktionskraft). Nur diese Reaktionskraft beschleunigt den Menschen vorwärts. Bei der Injektion: Die Spritze drückt auf die Haut (Aktionskraft), die Haut drückt auf die Spritze zurück (Reaktionskraft) — der Arzt muss diese überwinden.

## Freie und erzwungene Schwingungen

Ein Pendel schwingt mit seiner Eigenfrequenz (natürliche Schwingungsfrequenz eines Systems) f₀ = (1/2π)·√(g/l). Resonanz (Mitschwingen bei passender Frequenz) tritt auf, wenn die Anregungsfrequenz gleich der Eigenfrequenz ist — dann wächst die Amplitude dramatisch. Im Körper: Knochen und Gelenke haben mechanische Eigenfrequenzen. Vibrationstraining nutzt Resonanzeffekte zur Muskelstimulation.

## Rechenbeispiele

**Beispiel 1 — Bremskraft bei Auffahrunfall:**
Auto (m = 1200 kg) bremst von 50 km/h (= 13,9 m/s) auf 0 in 0,5 s (Kollision).
Verzögerung: a = Δv/Δt = 13,9 / 0,5 = **27,8 m/s²** ≈ 2,8 g.
Kraft auf Insasse (80 kg): F = 80 × 27,8 = **2224 N** ≈ 227 kgf — ohne Gurt wirkt diese Kraft auf Thorax/Kopf.
Mit Airbag (Δt ≈ 0,15 s statt 0,05 s ohne Gurt gegen Lenkrad): a = 13,9/0,15 = 92,7 m/s² → F = 7416 N, aber über große Fläche verteilt → **Druck** stark reduziert. Ohne Airbag (Δt ≈ 0,05 s): a = 278 m/s² → F = 22 240 N auf kleiner Fläche — Rippenfrakturen.

**Beispiel 2 — Freier Fall und Sturztrauma:**
Patient stürzt von Leiter (h = 2 m): v = √(2 × 9,81 × 2) = √39,24 = **6,26 m/s** ≈ 22,5 km/h.
Kinetische Energie: E_kin = ½ × 75 × 39,24 = **1471 J**.
Bremsstrecke bei Aufprall auf Beton ~2 cm: a = v²/(2s) = 39,24/0,04 = **981 m/s² ≈ 100 g** → Frakturgefahr.
Bremsstrecke bei Aufprall auf Rasen ~10 cm: a = 39,24/0,2 = **196 m/s² ≈ 20 g** → deutlich weniger Verletzungsgefahr.

**Beispiel 3 — Herzdruckmassage (CPR):**
Kompressionstiefe s = 5 cm = 0,05 m, Kompressionsdauer Δt ≈ 0,3 s.
Gleichmäßige Beschleunigung: s = ½at² → a = 2s/t² = 2 × 0,05 / 0,09 ≈ 1,11 m/s².
Thoraxmasse ~20 kg: F = m × a = 20 × 1,11 ≈ **22 N** (dynamischer Anteil) + statische Last des Brustbeins.
Realistisch braucht CPR ca. **400–500 N** (Federwiderstand des Thorax dominiert über Trägheitskraft).

---

> **Merke:** Newtons Gesetze: (1) Trägheit — ohne Kraft keine Beschleunigung; (2) F = m · a — Kraft ist Masse mal Beschleunigung; (3) Actio = Reactio — Kräfte treten immer paarweise auf.

> **Merke:** Die Gewichtskraft F_G = m · g (g ≈ 9,81 m/s²) ist die Gravitationskraft an der Erdoberfläche. Masse (kg) ist ortsunabhängig, Gewichtskraft (N) hängt vom Gravitationsfeld ab.

> **Prüfungstipp:** MedAT fragt gern nach v²=v₀²+2as (ohne Zeit) und v=v₀+at (ohne Weg). Merke dir beide kinematischen Formeln — je nachdem, welche Größe fehlt, wählst du die passende. Häufige Falle: km/h nicht in m/s umgerechnet!`,
      diagram: "newton-forces",
      lernziele: [
        "Die drei Newtonschen Gesetze korrekt formulieren und auf biologische Beispiele anwenden",
        "Gleichförmige und gleichmäßig beschleunigte Bewegungen mathematisch beschreiben (v(t), s(t))",
        "Den Unterschied zwischen Kinematik und Dynamik erklären",
        "Vektorielle Addition von Kräften und Geschwindigkeiten durchführen",
        "Klinische Beispiele für Trägheit und Dezelerationstrauma benennen",
      ],
      sections: [
        {
          heading: "Kinematik: Gleichförmige und beschleunigte Bewegung",
          text: "Die Kinematik beschreibt Bewegung ohne Rücksicht auf ihre Ursachen. Bei gleichförmiger Bewegung gilt s = v·t (linearer Weg-Zeit-Zusammenhang). Bei gleichmäßiger Beschleunigung gilt v(t) = v₀ + a·t und s(t) = v₀·t + ½·a·t². Der freie Fall ist der wichtigste Sonderfall mit a = g = 9,81 m/s². Alle Bewegungsgrößen (v, a) sind Vektoren — bei schiefer Bewegung werden sie komponentenweise behandelt.",
          merksatz:
            "v = v₀ + at — Geschwindigkeit wächst linear mit der Zeit bei konstanter Beschleunigung. Fläche unter v(t)-Kurve = zurückgelegter Weg.",
        },
        {
          heading: "Die drei Newtonschen Gesetze",
          text: "1. Trägheitsgesetz: Kein Nettokraft → keine Zustandsänderung. 2. Aktionsprinzip: F = m·a — Kraft bestimmt Beschleunigung proportional zur Masse. 3. Reaktionsprinzip: actio = reactio — Kräfte treten immer paarweise auf, wirken auf verschiedene Körper. Diese drei Gesetze bilden das vollständige Framework der newtonschen Mechanik.",
          merksatz:
            "actio = reactio: Gleich groß, entgegengesetzt, aber auf verschiedene Körper wirkend — daher heben sie sich NICHT auf!",
        },
        {
          heading:
            "Klinische Anwendung: Dezelerationstrauma (Verletzung durch plötzliches Abbremsen)",
          text: "Bei plötzlichem Abbremsen (Autounfall, Sturz) wirkt die Trägheit: Organe setzen ihre Bewegung fort, während das Skelett aufgehalten wird. Besonders gefährdet sind: (1) Aorta descendens bei Aortenbogenverankerung, (2) Leber- und Milzstiele, (3) Gehirn (Contrecoup-Verletzung). Das zweite Newtonsche Gesetz erklärt, warum Körperschutz (Airbag, Helm) die Bremsstrecke verlängert und damit die Kraft F = m·a reduziert.",
          merksatz:
            "Airbag-Prinzip: Längere Bremsstrecke → geringere Verzögerung a → geringere Kraft F = m·a auf den Körper.",
        },
      ],

      merksätze: [
        "Trägheitsgesetz: Kein F_res → kein Δv. Alles bleibt so, wie es ist.",
        "F = m×a: Kraft ist Masse × Beschleunigung. 1 N = 1 kg×m/s².",
        "actio = reactio: Immer gleich groß, entgegengesetzt, verschiedene Körper.",
        "Freier Fall: g = 9,81 m/s² ≈ 10 m/s². Nach 1 s: v = 10 m/s, s = 5 m.",
        "v(t) = v₀ + a·t — lineare Geschwindigkeitszunahme bei konstanter Beschleunigung.",
        "s(t) = v₀·t + ½·a·t² — parabolischer Weg bei gleichmäßiger Beschleunigung.",
        "Vektoraddition: Kräfte und Geschwindigkeiten addieren sich komponentenweise.",
        "Dezelerationstrauma: Trägheit der Organe führt zu Gefäßabriss bei plötzlichem Stopp.",
        "Superpositionsprinzip: F_res = ΣFᵢ (Vektorsumme aller Einzelkräfte).",
        "Gleichgewicht: F_res = 0 → ΣFₓ = 0 und ΣFᵧ = 0 (für jede Komponente separat).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das zweite Newtonsche Gesetz (F = m·a) und zeigen Sie anhand von drei verschiedenen klinischen Beispielen, wie dieses Gesetz in der Medizin relevant ist.",
        answer: `Das zweite Newtonsche Gesetz besagt, dass die auf einen Körper wirkende Nettokraft gleich dem Produkt aus seiner Masse und der resultierenden Beschleunigung ist: F = m·a. Es handelt sich um eine Vektorgleichung — Kraft und Beschleunigung zeigen in dieselbe Richtung. Die Einheit der Kraft ist das Newton (N = kg·m/s²).

Klinisches Beispiel 1 — Herzreanimation (CPR): Beim Herzdruckmassage muss der Helfer eine ausreichende Kraft aufwenden, um das Sternum um 5–6 cm zu komprimieren. Da F = m·a gilt und der Thorax eine bestimmte Masse und Federsteifigkeit hat, muss die Druckkraft entsprechend angepasst werden. Bei adipösen Patienten ist mehr Kraft nötig, um dieselbe Kompressionstiefe zu erzielen.

Klinisches Beispiel 2 — Knochenbruch: Knochen brechen, wenn die einwirkende Kraft eine materialspezifische Bruchfestigkeit überschreitet. Die Kraft beim Aufprall (Sturz) ergibt sich aus F = m·a, wobei a die Verzögerung beim Aufprall ist. Ein Sturz auf hartem Boden (kurze Bremsstrecke, hohe Verzögerung) erzeugt eine größere Kraft als ein Sturz auf weichem Untergrund (längere Bremsstrecke, geringere Verzögerung). Schutzausrüstung (Helmpolster, Airbag) verlängert die Bremsstrecke gezielt, um a und damit F zu reduzieren.

Klinisches Beispiel 3 — Injektion und Venenpunktion: Um eine Kanüle in eine Vene einzuführen, muss der Arzt eine Kraft aufwenden, die den Gewebewiderstand überwindet. F = m·a beschreibt die Beschleunigung der Kanüle durch das Gewebe. Zu wenig Kraft führt dazu, dass die Kanüle nicht eindringt; zu viel Kraft bewirkt ein Durchstechen der Gegenwand. Die optimale Technik nutzt eine kontrollierte, mittelgroße Beschleunigung.`,
      },
      klinischerBezug:
        "Das Trägheitsgesetz erklärt Dezelerationstraumen bei Verkehrsunfällen: Organe (Aorta, Leber, Gehirn) setzen ihre Bewegung nach plötzlichem Fahrzeugstopp fort und können abreißen oder kontusionieren. Das zweite Newtonsche Gesetz ist direkt bei der Herzdruckmassage relevant — die Kompressionstiefe von 5–6 cm erfordert eine Kraft von ca. 400–500 N auf den Thorax. Beim Einführen von Kathetern und Kanülen muss die aufgebrachte Kraft an den Gewebewiderstand angepasst werden, um eine präzise, kontrollierte Penetration zu gewährleisten.",
      selfTest: [
        {
          question:
            "Ein Körper der Masse 4 kg wird mit einer Nettokraft von 20 N beschleunigt. Welche Beschleunigung erfährt er?",
          options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²", "80 m/s²"],
          correctIndex: 2,
          explanation:
            "Nach dem zweiten Newtonschen Gesetz gilt F = m·a, umgestellt a = F/m. Mit F = 20 N und m = 4 kg ergibt sich a = 20/4 = 5 m/s². Einheitencheck: N/kg = (kg·m/s²)/kg = m/s² — korrekt. Option A wäre a = F/m = 20/20 (falsche Masse), Option D würde F/m = 10 nur bei m = 2 kg gelten. Merke: Bei F = m·a immer zuerst die gesuchte Größe freistellen.",
          hints: [
            "Stelle F = m·a nach der gesuchten Größe a um: a = F/m.",
            "Setze F = 20 N und m = 4 kg ein und dividiere.",
          ],
          difficulty: 1,
          tags: ["newton", "kraft", "beschleunigung"],
        },
        {
          question:
            "Ein Stein fällt aus der Ruhe (v₀ = 0) frei nach unten. Nach 3 Sekunden beträgt seine Geschwindigkeit (g = 10 m/s²):",
          options: ["3 m/s", "10 m/s", "15 m/s", "30 m/s", "45 m/s"],
          correctIndex: 3,
          explanation:
            "Beim freien Fall gilt v(t) = v₀ + g·t. Mit v₀ = 0 und g = 10 m/s²: v(3 s) = 0 + 10·3 = 30 m/s. Die zurückgelegte Strecke wäre s = ½·g·t² = ½·10·9 = 45 m. Option C (15 m/s) wäre das Ergebnis nach 1,5 s. Option E (45 m/s) entspricht dem Weg in Metern, nicht der Geschwindigkeit. Die Geschwindigkeit beim freien Fall wächst linear mit der Zeit.",
          hints: ["Freier Fall: v(t) = g·t (da v₀ = 0).", "Multipliziere g = 10 m/s² mit t = 3 s."],
          difficulty: 1,
          tags: ["freier-fall", "kinematik", "geschwindigkeit"],
        },
        {
          question: "Welche Aussage zum dritten Newtonschen Gesetz (actio = reactio) ist KORREKT?",
          options: [
            "Aktions- und Reaktionskraft wirken auf denselben Körper und heben sich auf.",
            "Die Reaktionskraft ist immer kleiner als die Aktionskraft.",
            "Aktions- und Reaktionskraft wirken auf verschiedene Körper und heben sich nicht auf.",
            "Das Gesetz gilt nur für ruhende Körper.",
            "Aktionskraft und Reaktionskraft wirken in dieselbe Richtung.",
          ],
          correctIndex: 2,
          explanation:
            "Das dritte Newtonsche Gesetz besagt: Übt Körper A eine Kraft auf Körper B aus (Aktionskraft), so übt Körper B gleichzeitig eine gleich große, aber entgegengesetzte Kraft auf Körper A aus (Reaktionskraft). Entscheidend: Beide Kräfte wirken auf VERSCHIEDENE Körper — deshalb heben sie sich nicht auf und können keine resultierende Kraft auf ein System erzeugen. Anwendung: Beim Laufen drückt der Fuß die Erde nach hinten; die Erde drückt den Fuß nach vorne (Bodenreaktionskraft = Vortrieb). Option A ist falsch — gleiche Körper würden Aufhebung bedeuten.",
          hints: [
            "Aktions- und Reaktionskraft greifen immer an zwei verschiedenen Körpern an.",
            "Würden sie am selben Körper angreifen, würden sie sich aufheben — das ist aber nicht der Fall.",
          ],
          difficulty: 2,
          tags: ["newton", "actio-reactio", "kräfte"],
        },
        {
          question:
            "Ein Auto fährt mit v = 108 km/h und bremst auf einem Weg von 50 m auf v = 0 ab. Welche mittlere Verzögerung (Betrag der Beschleunigung) wirkt auf die Insassen?",
          options: ["2,16 m/s²", "5,4 m/s²", "9 m/s²", "18 m/s²", "27 m/s²"],
          correctIndex: 2,
          explanation:
            "108 km/h = 30 m/s. Nutze v² = v₀² − 2·a·s (mit Endgeschwindigkeit v = 0): 0 = 30² − 2·a·50 → 2·a·50 = 900 → a = 900/100 = 9 m/s². Das entspricht fast genau einer g-Kraft (g ≈ 9,81 m/s²). Bei solchen Verzögerungen wirken enorme Kräfte auf den Körper: F = m·a = 80 kg · 9 m/s² = 720 N. Ohne Sicherheitsgurt würde ein 80-kg-Mensch mit dieser Kraft gegen das Lenkrad gedrückt — erklärt die schweren Thoraxtraumen.",
          hints: [
            "Erst Einheitenumrechnung: 108 km/h = 108/3,6 = 30 m/s.",
            "Nutze die kinematische Formel v² = v₀² − 2·a·s und löse nach a auf.",
          ],
          difficulty: 3,
          tags: ["kinematik", "bremsen", "beschleunigung"],
        },
        {
          question:
            "Beim Venenpunktionstraining wird die Kanüle mit v₀ = 0 durch eine gleichförmige Beschleunigung von a = 0,4 m/s² in die Vene geführt. Wie lange dauert es, bis sie eine Tiefe von 2 cm (0,02 m) erreicht?",
          options: ["0,05 s", "0,1 s", "0,16 s", "0,32 s", "1,0 s"],
          correctIndex: 3,
          explanation:
            "s = ½·a·t² (da v₀ = 0). Umgestellt: t = √(2s/a) = √(2·0,02/0,4) = √(0,04/0,4) = √0,1 ≈ 0,316 s ≈ 0,32 s. Die Endgeschwindigkeit wäre v = a·t = 0,4·0,316 ≈ 0,13 m/s = 13 cm/s — eine realistische Einstechgeschwindigkeit. Zu schnelles Einstechen (hohe a) führt zu Durchstechen der Gegenwand; zu langsames Einstechen ermöglicht dem Gewebe, auszuweichen. Diese kinematischen Überlegungen helfen, optimale Punktionstechniken zu entwickeln.",
          hints: [
            "Bei v₀ = 0 gilt s = ½·a·t². Stelle nach t um: t = √(2s/a).",
            "Einheitencheck: √(m / (m/s²)) = √(s²) = s — korrekt.",
          ],
          difficulty: 3,
          tags: ["kinematik", "gleichförmig-beschleunigt", "zeit"],
        },
      ],
    },
    {
      id: "ph-2-02",
      title: "Erhaltungssätze — Energie, Impuls, Drehimpuls",
      stichworte: [
        "Energieerhaltung",
        "Impulserhaltung",
        "Drehimpulserhaltung",
        "kinetische Energie",
        "potenzielle Energie",
        "Arbeit",
        "Leistung",
        "Wirkungsgrad",
        "elastischer Stoß",
        "inelastischer Stoß",
        "Kraftstoß",
        "Herzarbeit",
      ],
      content: `


## Erhaltungssätze — Energie, Impuls, Drehimpuls



Erhaltungssätze gehören zu den tiefsten Prinzipien der Physik. Sie besagen, dass bestimmte physikalische Größen in einem **abgeschlossenen System** (kein Austausch mit der Umgebung) konstant bleiben — unabhängig von den internen Vorgängen. Die drei wichtigsten Erhaltungssätze der Mechanik sind: Energieerhaltung, Impulserhaltung und Drehimpulserhaltung.

## Halten ist keine Arbeit — die klassische MedAT-Falle

Bevor wir Formeln einführen, ein zentrales Konzept: **Physikalische Arbeit erfordert Bewegung.** Trägst du einen schweren Koffer horizontal durch die Halle, leistest du physikalisch **keine Arbeit** an ihm — deine Kraft zeigt nach oben (gegen die Schwerkraft), aber der Weg geht nach vorne. Kraft und Weg stehen senkrecht aufeinander, also ist die verrichtete Arbeit null. Auch wer einen Sack Zement einfach nur festhält und nicht bewegt, leistet physikalisch keine Arbeit — egal wie sehr die Muskeln brennen.

> **Merke:** Trägst du einen Koffer horizontal, leistest du physikalisch keine Arbeit an ihm — die Kraft zeigt nach oben, der Weg nach vorne. Arbeit = Kraft × Weg **in Kraftrichtung**. Senkrechte Kraft zum Weg → W = 0.

Warum fühlt sich Halten dann anstrengend an? Weil die Muskelfasern ständig kontrahieren und relaxieren (isometrische Kontraktion) — sie leisten biochemische Arbeit auf Zellebene, aber der Körper als Ganzes bewegt sich nicht.

---

{{DIAGRAM:newton-forces}}

## Von der Intuition zur Formel: Energieerhaltung

Stell dir einen Ball vor, der einen Hügel hinunterrollt. Oben steht er still — voller „gespeicherter" Energie durch seine Höhe. Beim Rollen wird er immer schneller. Woher kommt die Geschwindigkeit? Die Lageenergie (Höhe) wandelt sich in Bewegungsenergie um. Am Fuß des Hügels ist die gesamte Höhenenergie in Bewegung übergegangen. Genau das beschreibt der Energieerhaltungssatz.

**Potenzielle Energie** (Lageenergie) ist die Energie, die ein Körper durch seine Höhe über dem Boden besitzt. Je höher und schwerer ein Objekt, desto mehr Energie steckt darin:

**E_pot = m · g · h**

Das bedeutet: Ein 70-kg-Mensch auf einem 10-m-Sprungturm hat 70 × 10 × 10 = 7000 J gespeicherte Energie — genug, um beim Aufprall erhebliche Kräfte zu erzeugen.

**Kinetische Energie** (Bewegungsenergie) ist die Energie, die ein Körper durch seine Geschwindigkeit besitzt. Entscheidend: Sie wächst mit dem **Quadrat** der Geschwindigkeit:

**E_kin = ½ · m · v²**

Doppelte Geschwindigkeit bedeutet **vierfache** Bewegungsenergie — nicht doppelte. Das erklärt, warum der Bremsweg bei 100 km/h viermal so lang ist wie bei 50 km/h, und warum Hochgeschwindigkeitsprojektile so verheerend sind.

**Energieerhaltungssatz:** In einem abgeschlossenen System ohne Reibung gilt:

**E_kin + E_pot = const**

Oben am Hügel: viel E_pot, wenig E_kin. Unten: wenig E_pot, viel E_kin. Die Summe bleibt gleich. Mit Reibung nimmt die mechanische Energie ab, aber die entstehende Wärme kompensiert exakt den Verlust — die Gesamtenergie (thermisch + mechanisch) bleibt erhalten. Das ist nichts anderes als der Erste Hauptsatz der Thermodynamik.

Ein Ball, der aus Höhe h fällt, erreicht am Boden die Geschwindigkeit v = √(2gh) — direkt aus E_pot = E_kin hergeleitet.

---

## Arbeit: Die Brücke zwischen Kraft und Energie

Wie kommt Energie in ein System hinein oder heraus? Durch **Arbeit**. Arbeit ist das Produkt aus Kraft und Weg in Kraftrichtung:

**W = F · s · cos θ**

Dabei ist θ der Winkel zwischen Kraft und Weg. Steht die Kraft senkrecht auf dem Weg (θ = 90°, cos 90° = 0), wird **keine Arbeit** verrichtet — das ist genau der Koffer-Fall von oben. Beim senkrechten Heben (Kraft und Weg parallel nach oben) ist θ = 0° und W = F · s = m · g · h.

> **Prüfungstipp:** Klassische MedAT-Falle: „Beim Halten eines Gewichts wird mechanische Arbeit verrichtet" — falsch! W = F·s, und bei s = 0 ist W = 0. Auch wichtig: E_kin ~ v² bedeutet, dass doppelte Geschwindigkeit **vierfachen** Bremsweg ergibt, nicht doppelten.

---

## Impuls und Impulserhaltung

Wenn ein LKW und ein Fahrrad mit gleicher Geschwindigkeit fahren, ist der LKW schwerer zu stoppen — er hat mehr „Wucht". Diese Wucht heißt **Impuls**:

**p = m · v**

Der Impuls (Einheit: kg·m/s = N·s) ist ein **Vektor** — Betrag und Richtung sind entscheidend. Um den Impuls eines Körpers zu ändern, braucht man einen **Kraftstoß**: J = F · Δt = Δp. Daraus folgt: Dieselbe Impulsänderung kann durch eine große Kraft über kurze Zeit **oder** durch eine kleine Kraft über lange Zeit erreicht werden. Das ist das Airbag-Prinzip: Längere Einwirkzeit → geringere Spitzenkraft.

**Impulserhaltungssatz:** In einem abgeschlossenen System (keine äußeren Kräfte) bleibt der Gesamtimpuls konstant: p_ges = Σmᵢ·vᵢ = const. Das gilt für Explosionen, Kollisionen und sogar chemische Reaktionen.

**Elastischer Stoß** (z. B. Billardkugeln): Impuls **und** kinetische Energie bleiben erhalten. **Inelastischer Stoß** (z. B. Autounfall, Gewebetrauma): Nur der Impuls bleibt erhalten — kinetische Energie wird in Wärme und Verformung umgewandelt. Beim **vollkommen unelastischen Stoß** vereinigen sich beide Körper: m₁·v₁ + m₂·v₂ = (m₁+m₂)·v'.

> **Merke:** Kräfte überlagern sich wie Pfeile: Die Gesamtkraft auf einen Körper ist die Vektorsumme aller Einzelkräfte (F_res = F₁ + F₂ + ...). Zwei gleich große Kräfte in entgegengesetzter Richtung heben sich auf — wie beim Tauziehen im Gleichgewicht. Zwei Kräfte im rechten Winkel ergeben eine diagonale Resultante (Pythagoras).

---

## Leistung und Wirkungsgrad

Arbeit sagt nichts über die Geschwindigkeit aus. Ob du eine Treppe in 10 Sekunden oder 2 Minuten hochläufst — die Arbeit (m·g·h) ist dieselbe. Der Unterschied ist die **Leistung**:

**P = W / t = F · v**

Die Einheit ist Watt (W = J/s). Ein Mensch kann kurzfristig etwa 1000 W leisten (Sprint), im Dauerbetrieb etwa 100–200 W. Das Herz leistet ca. 1 J pro Schlag, bei 70 Schlägen/min ergibt das ca. 1 W mechanische Herzleistung. Weil der Herzmuskel nur ca. 17 % Wirkungsgrad hat, verbraucht das Herz metabolisch ca. 6 W.

**Wirkungsgrad** η = P_nutz / P_ges × 100 %. Der menschliche Körper hat beim Laufen einen Wirkungsgrad von ca. 20–25 % — der Rest wird als Wärme abgegeben. In biologischen Systemen: chemische Energie (ATP) → mechanische Arbeit (Muskelkontraktion) + Wärme.

---

{{DIAGRAM:inclined-plane}}

## Federkraft und elastische Energie

Die **Federkraft** folgt dem Hookeschen Gesetz (Kraft proportional zur Auslenkung): F = -k·x, wobei k die Federkonstante (N/m) und x die Auslenkung aus der Ruheposition ist. Das Minuszeichen bedeutet: Die Kraft wirkt immer der Auslenkung entgegen — sie zieht die Feder zurück.

Die in einer gedehnten Feder gespeicherte elastische Energie beträgt E_el = ½·k·x². Sehnen und Bänder verhalten sich näherungsweise wie Federn. Die Achillessehne speichert beim Laufen pro Schritt ca. 35 J elastische Energie und gibt sie beim Abstoß zurück — ein wichtiger Beitrag zur Laufeffizienz. Auch die Aortenwand fungiert als elastisches Reservoir (Windkesselfunktion): Während der Systole dehnt sich die Aorta und speichert Energie, die während der Diastole den Blutfluss aufrechterhält.

---

## Drehimpuls und Rotationsenergie

Der Drehimpuls ist das rotatorische Gegenstück zum linearen Impuls. Er beschreibt, wie viel „Rotationswucht" ein drehender Körper hat:

**L = I · ω**

Dabei ist I das **Trägheitsmoment** (Widerstand gegen Drehbeschleunigung, Einheit: kg·m²) und ω die **Winkelgeschwindigkeit** (rad/s). Das Trägheitsmoment hängt nicht nur von der Masse ab, sondern entscheidend davon, wie weit die Masse von der Drehachse entfernt ist (I = Σmᵢ·rᵢ²).

**Drehimpulserhaltung** erklärt den berühmten Pirouetteneffekt: Eine Eiskunstläuferin dreht sich langsam mit ausgestreckten Armen. Dann zieht sie die Arme eng an den Körper — ihr Trägheitsmoment I sinkt dramatisch (die Masse rückt näher an die Drehachse). Da der Drehimpuls L = I·ω erhalten bleiben muss und I kleiner wird, muss ω proportional steigen. Das Ergebnis: Sie dreht sich plötzlich viel schneller, ohne zusätzlichen Antrieb. Streckt sie die Arme wieder aus, wird sie sofort langsamer. Die zusätzliche Rotationsenergie stammt aus der Muskelarbeit gegen die Zentrifugalkraft beim Einziehen der Arme.

**Rotationsenergie:** E_rot = ½·I·ω² — analog zur kinetischen Energie ½·m·v².

> **Merke:** Die Energieerhaltung ist das universellste Prinzip der Physik — Energie kann weder erzeugt noch zerstört, sondern nur umgewandelt werden.

## Rechenbeispiele

**Beispiel 1 — Sturzenergie und Frakturrisiko:**
Patient (m = 75 kg) stürzt aus Standhöhe (h = 1,5 m).
E_pot = mgh = 75 × 9,81 × 1,5 = **1103 J**. Aufprallgeschwindigkeit: v = √(2gh) = √(29,43) = **5,42 m/s** ≈ 19,5 km/h.
Bruchenergie Oberschenkelhals (Osteoporose): ~20–40 J. → Nur ein Bruchteil (~3 %) der Sturzenergie reicht für eine Fraktur.

**Beispiel 2 — Impulsübertragung bei ballistischem Trauma:**
Projektil: m₁ = 8 g = 0,008 kg, v₁ = 400 m/s.
Impuls: p = 0,008 × 400 = **3,2 N·s**. Kinetische Energie: E = ½ × 0,008 × 160 000 = **640 J**.
Vollkommen inelastischer Stoß mit Gewebe (m₂ = 5 kg Torso-Segment):
v' = p/(m₁+m₂) = 3,2/5,008 = 0,64 m/s. Energieverlust: ΔE = 640 - ½ × 5,008 × 0,41 ≈ **639 J** → fast gesamte Energie in Gewebezerstörung.

**Beispiel 3 — Herzarbeit und Tagesleistung:**
Schlagvolumen SV = 70 mL, Herzfrequenz f = 72/min, mittlerer Aortendruck p = 100 mmHg = 13 300 Pa.
Arbeit pro Schlag: W = p × ΔV = 13 300 × 70 × 10⁻⁶ = **0,93 J**.
Mechanische Leistung: P = W × f = 0,93 × 72/60 = **1,12 W**.
Tagesarbeit: 0,93 × 72 × 60 × 24 = **96 422 J ≈ 96 kJ/Tag**.
Bei η = 17 %: metabolischer Verbrauch = 96/0,17 ≈ **565 kJ/Tag ≈ 135 kcal/Tag**.`,
      lernziele: [
        "Impuls (p = mv) und Kraftstoß (J = FΔt) definieren und den Impulserhaltungssatz anwenden",
        "Mechanische Arbeit, kinetische und potenzielle Energie berechnen",
        "Den Energieerhaltungssatz auf Reibungs- und reibungsfreie Systeme anwenden",
        "Leistung und Wirkungsgrad berechnen und biologische Beispiele nennen",
        "Elastische von inelastischen Stößen unterscheiden und Berechnungen durchführen",
      ],
      sections: [
        {
          heading: "Impuls und Kraftstoß",
          text: "Der Impuls p = m·v ist ein Vektor (Einheit: kg·m/s). Der Kraftstoß J = F·Δt = Δp beschreibt die Impulsänderung. Bei Kollisionen ist in abgeschlossenen Systemen der Gesamtimpuls erhalten: Σp_vorher = Σp_nachher. Elastische Stöße erhalten zusätzlich die kinetische Energie. Inelastische Stöße (Deformationen, Knochenbrüche, Gewebeschäden) wandeln kinetische Energie in andere Energieformen um.",
          merksatz:
            "p = m·v. Kraftstoß = Impulsänderung: F·Δt = Δp. Längerer Kontakt → geringere Kraft bei gleicher Impulsänderung.",
        },
        {
          heading: "Energieerhaltung: kinetisch und potenziell",
          text: "E_kin = ½mv², E_pot = mgh. Ohne Reibung: E_kin + E_pot = const. Ein Körper, der aus Höhe h fällt, erreicht am Boden v = √(2gh). Mit Reibung wird mechanische Energie in Wärme umgewandelt, die Gesamtenergie (inkl. thermisch) bleibt jedoch erhalten. Der Energieerhaltungssatz ist universell gültig — er gilt auch für elektrische, chemische und thermische Energie.",
          merksatz:
            "v = √(2gh) — Auftreffgeschwindigkeit beim freien Fall aus Höhe h (ohne Reibung).",
        },
        {
          heading: "Herzleistung und biologische Arbeit",
          text: "Das Herz leistet pro Herzschlag ca. W = p·ΔV ≈ 100 mmHg · 70 ml ≈ 1 J mechanische Arbeit. Bei 70 Schlägen/min ergibt das P ≈ 1,2 W mechanische Herzleistung. Da der Wirkungsgrad des Herzmuskels ca. 17 % beträgt, verbraucht das Herz metabolisch ca. 7 W. Im Dauerstress (Tachykardie, Hypertension) steigt dieser Wert stark an und führt zur Myokardhypertrophie.",
          merksatz:
            "Herzarbeit ≈ 1 J/Schlag. Mechanische Herzleistung ≈ 1 W (Ruhe). Gesamtmetabolismus Herz ≈ 7 W (η ≈ 17 %).",
        },
      ],
      merksätze: [
        "Koffer tragen = keine Arbeit: Kraft nach oben, Weg nach vorne — senkrecht zueinander, also W = 0.",
        'Impuls p = m·v: Die „Wucht" eines Körpers. LKW bei 50 km/h hat mehr Impuls als Fahrrad bei 50 km/h.',
        "Kraftstoß J = F·Δt = Δp. Längere Einwirkzeit → geringere Spitzenkraft (Airbag-Prinzip).",
        "E_kin = ½·m·v²: Doppelte Geschwindigkeit → vierfache Energie → vierfacher Bremsweg!",
        "E_pot = m·g·h: Ball oben am Hügel hat Lageenergie; beim Rollen wird sie zu Bewegungsenergie.",
        "Energieerhaltung: E_kin + E_pot = const. Oben langsam + hoch, unten schnell + tief.",
        "Leistung P = W/t = F·v: Gleiche Treppe, schneller hoch = mehr Leistung bei gleicher Arbeit.",
        "Elastischer Stoß: Impuls UND kinetische Energie erhalten (Billardkugeln).",
        "Inelastischer Stoß: NUR Impuls erhalten, Energie wird zu Wärme/Verformung (Autounfall).",
        "Pirouetteneffekt: Arme anziehen → I sinkt → ω steigt (L = I·ω = const). Kein zusätzlicher Antrieb nötig.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Unterschied zwischen elastischem und inelastischem Stoß und erklären Sie, welche Erhaltungsgrößen in jedem Fall gelten. Geben Sie ein klinisches Beispiel für einen inelastischen Stoß.",
        answer: `Bei einem elastischen Stoß bleiben sowohl der Gesamtimpuls als auch die gesamte kinetische Energie erhalten. Das bedeutet: Σ(m·v)_vorher = Σ(m·v)_nachher UND Σ(½·m·v²)_vorher = Σ(½·m·v²)_nachher. Ein klassisches Beispiel ist der Stoß zweier Billardkugeln — in der Praxis sind vollkommen elastische Stöße idealisiert, da immer geringe Verformungsenergie und Wärme entstehen.

Beim inelastischen Stoß ist nur der Gesamtimpuls erhalten, nicht die kinetische Energie. Ein Teil der kinetischen Energie wird in innere Energie (Verformung, Wärme, Schall) umgewandelt. Der Extremfall ist der vollkommen unelastische Stoß, bei dem sich beide Körper vereinigen: v' = (m₁·v₁ + m₂·v₂)/(m₁+m₂). Der Energieverlust ist maximal.

Klinisches Beispiel: Bei einem Sturz auf den Kopf (Schädel-Hirn-Trauma) trifft der Kopf (Masse ca. 5 kg, Geschwindigkeit ca. 4 m/s nach 80-cm-Sturz) auf den Boden. Der Stoß ist vollkommen unelastisch — der Kopf bleibt nach dem Aufprall am Boden. Die kinetische Energie (E = ½·5·16 = 40 J) wird in Deformationsenergie des Schädels, Schockwellen im Hirngewebe und Wärme umgewandelt. Der Impuls p = 5·4 = 20 kg·m/s wird durch die Bodenkraft abgebaut. Ein weicher Untergrund (Helm, Matte) verlängert den Stoßvorgang (größeres Δt), reduziert die Spitzenkraft und schützt das Gewebe.`,
      },
      klinischerBezug:
        "Der Impulserhaltungssatz erklärt ballistische Verletzungen: Ein Projektil (Masse ca. 10 g, Geschwindigkeit ca. 300 m/s, Impuls 3 N·s) überträgt seinen gesamten Impuls auf das Körpergewebe innerhalb von Millisekunden — die resultierende Gewebekraft kann tödlich sein. Die Herzleistung (mechanisch ca. 1 W, metabolisch ca. 7 W) ist ein Maß für den kardialen Sauerstoffbedarf; bei Hypertonie steigt die Druck-Volumen-Arbeit des Herzens, was den myokardialen O₂-Verbrauch erhöht und zur Linksherzhypertrophie führt.",
      selfTest: [
        {
          question:
            "Ein 70-kg-Patient springt aus 1,25 m Höhe und landet auf hartem Boden. Welche kinetische Energie hat er unmittelbar vor dem Aufprall (g = 10 m/s²)?",
          options: ["175 J", "350 J", "437,5 J", "875 J", "1225 J"],
          correctIndex: 3,
          explanation:
            "Energieerhaltung: E_pot = E_kin → mgh = E_kin. E_kin = 70·10·1,25 = 875 J. Alternativ: v = √(2gh) = √(2·10·1,25) = √25 = 5 m/s, dann E_kin = ½·70·25 = 875 J. Diese 875 J werden beim Aufprall in Verformungsenergie, Schallenergie und Wärme umgewandelt. Ein Sturz aus dieser Höhe kann bei älteren Patienten (Osteoporose) bereits zu Frakturen führen — die Knochen können nur begrenzte Energie elastisch und plastisch aufnehmen.",
          hints: [
            "Nutze Energieerhaltung: Die potenzielle Energie mgh wird vollständig in kinetische Energie umgewandelt.",
            "E_kin = mgh = 70 kg · 10 m/s² · 1,25 m.",
          ],
          difficulty: 2,
          tags: ["energieerhaltung", "potenzielle-energie", "kinetische-energie"],
        },
        {
          question:
            "Das Herz pumpt pro Schlag ein Schlagvolumen von 70 ml gegen einen mittleren Aortendruck von 100 mmHg. Welche mechanische Arbeit leistet das Herz pro Schlag? (1 mmHg = 133 Pa)",
          options: ["0,07 J", "0,093 J", "0,93 J", "9,3 J", "93 J"],
          correctIndex: 2,
          explanation:
            "W = p·ΔV. Druckumrechnung: 100 mmHg = 100·133 = 13300 Pa. Volumenstrom: 70 ml = 70·10⁻⁶ m³. W = 13300 Pa · 70·10⁻⁶ m³ = 13300 · 0,000070 = 0,931 J ≈ 0,93 J. Bei 70 Schlägen/min: P = 0,93 J · 70/60 s⁻¹ ≈ 1,08 W mechanische Herzleistung. Da der Herzmuskelwirkungsgrad nur ca. 17 % beträgt, verbraucht das Herz metabolisch ca. 6 W, was einem Tagesverbrauch von ca. 518 kJ entspricht.",
          hints: [
            "Herzarbeit = Druck × Volumen: W = p·ΔV. Erst Einheiten umrechnen: mmHg → Pa, ml → m³.",
            "1 mmHg = 133 Pa; 1 ml = 10⁻⁶ m³. Dann W = p·ΔV.",
          ],
          difficulty: 3,
          tags: ["herzarbeit", "druck", "arbeit"],
        },
        {
          question:
            "Ein Körper (m = 5 kg) wird von Ruhe aus über eine Strecke von 10 m mit einer konstanten Kraft von 20 N beschleunigt. Welche kinetische Energie hat er danach?",
          options: ["50 J", "100 J", "200 J", "400 J", "1000 J"],
          correctIndex: 2,
          explanation:
            "Geleistete Arbeit = Zunahme der kinetischen Energie: W = F·s = 20 N · 10 m = 200 J. Damit: E_kin = 200 J. Zur Kontrolle: a = F/m = 20/5 = 4 m/s². v² = 2·a·s = 2·4·10 = 80 m²/s². E_kin = ½·m·v² = ½·5·80 = 200 J. Beide Methoden liefern dasselbe Ergebnis — das Arbeit-Energie-Theorem ist elegant und oft schneller.",
          hints: [
            "Das Arbeit-Energie-Theorem: Die geleistete Arbeit W = F·s entspricht der Änderung der kinetischen Energie.",
            "W = F·s = 20·10 = 200 J = E_kin (da Startzustand: Ruhe, E_kin,0 = 0).",
          ],
          difficulty: 2,
          tags: ["arbeit", "energie", "kinetische-energie"],
        },
        {
          question:
            "Ein Eiskunstläufer (I₁ = 4 kg·m²) dreht mit ω₁ = 2 rad/s. Er zieht die Arme an und reduziert sein Trägheitsmoment auf I₂ = 1 kg·m². Wie groß ist die neue Winkelgeschwindigkeit ω₂?",
          options: ["0,5 rad/s", "2 rad/s", "4 rad/s", "8 rad/s", "16 rad/s"],
          correctIndex: 3,
          explanation:
            "Drehimpulserhaltung: L = I·ω = const → I₁·ω₁ = I₂·ω₂. Umgestellt: ω₂ = I₁·ω₁/I₂ = 4·2/1 = 8 rad/s. Der Läufer rotiert also viermal schneller als zuvor! Die Rotationsenergie ändert sich dabei: E₁ = ½·4·4 = 8 J, E₂ = ½·1·64 = 32 J — die Energie hat sich vervierfacht. Die zusätzliche Energie stammt aus der Muskelarbeit, die der Läufer aufwenden muss, um die Arme einzuziehen (gegen die Zentrifugalkraft).",
          hints: [
            "Drehimpulserhaltung: L = I·ω = const. Stelle nach ω₂ um: ω₂ = I₁·ω₁/I₂.",
            "I₁ = 4 kg·m², ω₁ = 2 rad/s, I₂ = 1 kg·m² → ω₂ = ?",
          ],
          difficulty: 3,
          tags: ["drehimpuls", "trägheitsmoment", "rotation"],
        },
        {
          question:
            "Welche Leistung erbringt ein Arzt, der eine 20-kg-Patientenliege in 4 Sekunden um 0,5 m anhebt (g = 10 m/s²)?",
          options: ["2,5 W", "10 W", "25 W", "100 W", "400 W"],
          correctIndex: 2,
          explanation:
            "W = F·s = m·g·h = 20·10·0,5 = 100 J. P = W/t = 100 J/4 s = 25 W. Das entspricht etwa 25 % der Dauerleistungsfähigkeit eines durchschnittlichen Menschen (ca. 100 W). Bei 8 Stunden Arbeit mit dieser Leistung würde ein Arzt 8·3600·25 = 720 kJ mechanische Arbeit leisten — der tatsächliche Energieverbrauch ist wegen η < 100 % höher. Diese Berechnungen sind relevant für die Ergonomie im Pflegebereich.",
          hints: [
            "Erst Arbeit berechnen: W = mgh = 20·10·0,5 = 100 J.",
            "Dann Leistung: P = W/t = 100 J / 4 s = 25 W.",
          ],
          difficulty: 2,
          tags: ["leistung", "arbeit", "wirkungsgrad"],
        },
      ],
    },
    {
      id: "ph-2-03",
      title: "Statik, Druck und Hebelmechanik",
      stichworte: [
        "Gleichgewicht",
        "Kräftegleichgewicht",
        "Momentengleichgewicht",
        "Schwerpunkt",
        "Drehmoment",
        "Hebelgesetz",
        "einseitiger Hebel",
        "zweiseitiger Hebel",
        "schiefe Ebene",
        "Hangabtriebskraft",
        "Normalkraft",
        "Druck",
        "Pascal-Prinzip",
        "hydrostatischer Druck",
        "Auftrieb",
      ],
      content: `


## Statik, Druck und Hebelmechanik

Wer schon einmal eine schwere Tür mit einem Finger am äußersten Rand geöffnet hat, kennt das Prinzip: Nicht die Kraft allein entscheidet, sondern **wo** sie ansetzt. Genau dieses Hebelgesetz nutzt der menschliche Körper in jedem Gelenk — und genau deshalb reißen Sehnen, wenn die Biomechanik an ihre Grenzen kommt. Orthopädie, Unfallchirurgie und Rehabilitationsmedizin beruhen auf den Gesetzen der Statik.

---

## Gleichgewichtsbedingungen

Ein Körper befindet sich im **mechanischen Gleichgewicht**, wenn zwei Bedingungen gleichzeitig erfüllt sind:

1. **Kräftegleichgewicht (Translationsgleichgewicht):** Die vektorielle Summe aller angreifenden Kräfte ist null:

**ΣF = 0**

Das bedeutet: Der Körper wird weder nach links, rechts, oben noch unten beschleunigt. Jede Kraft hat eine Gegenkraft — im Stehen drückt die Gewichtskraft nach unten, der Boden drückt mit der Normalkraft (Reaktionskraft des Bodens auf den Körper) gleich stark nach oben.

2. **Momentengleichgewicht (Rotationsgleichgewicht):** Die Summe aller Drehmomente um **jeden** beliebigen Punkt ist null:

**ΣM = 0**

Ohne diese Bedingung könnte ein Körper zwar kräftefrei sein, sich aber trotzdem drehen — wie ein Karussell, das sich mit konstanter Geschwindigkeit dreht.

> **Merke:** Gleichgewicht erfordert **immer beide** Bedingungen: ΣF = 0 **und** ΣM = 0. Nur Kräftegleichgewicht reicht nicht — ein Kräftepaar (zwei gleich große, entgegengesetzte Kräfte an verschiedenen Angriffspunkten) erzeugt eine Drehung bei ΣF = 0.

---

## Schwerpunkt

Der **Schwerpunkt** (Massenmittelpunkt) ist der Punkt, in dem man sich die gesamte Masse eines Körpers konzentriert denken kann. Greift die Schwerkraft am Schwerpunkt an, entsteht kein Drehmoment — der Körper kippt nicht.

- **Standsicherheit:** Ein Körper ist stabil, solange das **Lot vom Schwerpunkt** innerhalb der **Standfläche** (Unterstützungsfläche) fällt. Fällt es außerhalb → Umkippen.
- **Klinisch:** Patienten mit Beinprothesen oder Schwangere verlagern ihren Schwerpunkt — die Sturzgefahr steigt, wenn das Lot die Standfläche verlässt. Breitbeiniges Stehen vergrößert die Standfläche und erhöht die Stabilität.

---

## Drehmoment und Hebelgesetz

Das **Drehmoment** M beschreibt die Drehwirkung einer Kraft bezüglich einer Achse:

**M = F · d**

Dabei ist **d** der **Hebelarm** — der senkrechte Abstand von der Drehachse zur Wirkungslinie der Kraft. Einheit: N·m (Newton-Meter). Je größer der Hebelarm, desto größer die Drehwirkung bei gleicher Kraft.

{{DIAGRAM:lever-arm}}

**Das Hebelgesetz** beschreibt das Momentengleichgewicht eines Hebels:

**F₁ · d₁ = F₂ · d₂**

Es gibt zwei Grundtypen:

| Typ | Drehpunkt | Beispiel Alltag | Beispiel Körper |
|-----|-----------|-----------------|-----------------|
| **Einseitiger Hebel** (Typ 3) | Am Ende, Kraft und Last auf derselben Seite | Pinzette, Schubkarre | Bizeps–Unterarm–Hand |
| **Zweiseitiger Hebel** (Typ 1) | Zwischen Kraft und Last | Wippe, Schere | Atlanto-okzipitales Gelenk (Kopfnicken) |

**Klinisch — Gelenke als Hebel:** Der Unterarm funktioniert als **einseitiger Hebel (Typ 3)**. Der Bizeps setzt nur ~5 cm vom Ellenbogengelenk (Drehachse) an, während die Hand ~35 cm entfernt ist. Dieses ungünstige Hebelverhältnis von 1:7 bedeutet: Für eine Last von 10 kg (≈ 100 N) muss der Bizeps **700 N** aufbringen. Das ist anatomisch „nachteilig" für die Kraft, aber ein **Geschwindigkeitshebel** — kleine Muskelverkürzung erzeugt große Handbewegung.

Das **Kiefergelenk** ist ein weiteres klinisches Beispiel: Der Musculus masseter setzt nahe am Gelenk an (kurzer Hebelarm), die Schneidezähne sind weit entfernt. Deshalb ist die Beißkraft an den Molaren (kürzerer Lastarm) deutlich höher als an den Incisivi.

> **Merke:** Kurzer Muskelhebelarm → große Muskelkraft nötig, aber schnelle Bewegung. Langer Muskelhebelarm → weniger Kraft nötig, aber langsame Bewegung. Der Körper bevorzugt Geschwindigkeitshebel.

---

## Schiefe Ebene

Die schiefe Ebene zerlegt die Gewichtskraft F_G = m·g in zwei Komponenten:

{{DIAGRAM:inclined-plane}}

- **Hangabtriebskraft** (parallel zur Ebene): F_H = m·g·sin(α)
- **Normalkraft** (senkrecht zur Ebene): F_N = m·g·cos(α)

Je steiler der Winkel α, desto größer die Hangabtriebskraft und desto kleiner die Normalkraft.

**Klinisch:** In der Orthopädie nutzt man schiefe Ebenen bei **Extensionsbehandlungen** (Streckverbänden). Das Bein liegt auf einer geneigten Schiene, und das Eigengewicht erzeugt über die Hangabtriebskraft eine kontrollierte Zugkraft auf die Fraktur — ohne externes Gewicht.

> **Merke:** Schiefe Ebene: F_H = mg·sin(α), F_N = mg·cos(α). Bei α = 30°: sin(30°) = 0,5 → die Hangabtriebskraft ist genau die Hälfte der Gewichtskraft.

---

## Druck — Grundlagen

Der **Druck** p ist definiert als Kraft pro Fläche:

**p = F / A**

Einheit: Pascal (Pa = N/m²). Ein kleiner Querschnitt bei gleicher Kraft erzeugt hohen Druck — deshalb durchdringen Injektionsnadeln die Haut leicht (winzige Fläche, hoher Druck), obwohl die aufgewendete Kraft gering ist.

**Pascal'sches Prinzip:** In einer eingeschlossenen, inkompressiblen Flüssigkeit breitet sich eine Druckänderung **gleichmäßig in alle Richtungen** aus. Anwendung: Hydraulische Pressen und — im Körper — die gleichmäßige Druckübertragung in Gelenkkapseln (Synovialflüssigkeit).

**Hydrostatischer Druck:** In einer ruhenden Flüssigkeit steigt der Druck mit der Tiefe:

**p = ρ · g · h**

Dabei ist ρ die Dichte der Flüssigkeit, g die Fallbeschleunigung und h die Tiefe. **Klinisch:** Beim stehenden Patienten addiert sich der hydrostatische Blutdruck in den Beinen zum arteriellen Druck — bei 1,5 m Höhendifferenz (Herz↔Fuß) kommen ca. 115 mmHg hinzu. Das erklärt Beinödeme, Krampfadern und venöse Ulzera am Unterschenkel.

**Auftrieb (Archimedisches Prinzip):** Ein eingetauchter Körper erfährt eine Auftriebskraft F_A = ρ_Fl · g · V_verdrängt, die dem Gewicht des verdrängten Fluids entspricht. Therapeutisch genutzt in der **Hydrotherapie**: Im Wasser reduziert sich die effektive Gewichtsbelastung auf Gelenke — ideal für Rehabilitation nach Operationen.

> **Merke:** p = F/A → kleine Fläche = hoher Druck. Hydrostatisch: p = ρgh → Druck steigt mit Tiefe. Auftrieb: F_A = ρ_Fl·g·V.

---

## Hydrodynamik — Kurzüberblick

Die Strömungsmechanik von Fluiden (Blutfluss, Ventilation) wird im **Kapitel Fluidmechanik** (kap2) ausführlich behandelt. Dort findest du Bernoulli-Gleichung, Kontinuitätsgleichung, Poiseuille-Gesetz (Q ~ r⁴), Reynolds-Zahl und deren klinische Anwendung auf Gefäßstenosen, Kapillardurchblutung und Herzgeräusche.

---

## Rechenbeispiel — Schiefe Ebene

**Extensionsbehandlung:** Ein Bein (Masse 12 kg) liegt auf einer geneigten Schiene mit α = 20°.

- Gewichtskraft: F_G = 12 kg × 9,81 m/s² = **117,7 N**
- Hangabtriebskraft (Zugkraft auf die Fraktur): F_H = 117,7 × sin(20°) = 117,7 × 0,342 = **40,3 N**
- Normalkraft (Auflagekraft auf die Schiene): F_N = 117,7 × cos(20°) = 117,7 × 0,940 = **110,6 N**

Probe: F_H² + F_N² = 40,3² + 110,6² = 1624 + 12 232 = 13 856 ≈ 117,7² = 13 853 ✓

> **Merke:** Bei Rechenaufgaben zur schiefen Ebene: sin(α) für die Komponente **parallel** zur Ebene, cos(α) für die Komponente **senkrecht** zur Ebene. Eselsbrücke: „**S**inus = **s**chiefwärts (hangabwärts)."

> 💡 **Prüfungstipp:** Das Hebelgesetz (F₁·d₁ = F₂·d₂) wird im MedAT häufig am Beispiel Bizeps/Unterarm geprüft. Typische Falle: Vergessen, dass der Muskelhebelarm viel kürzer ist als der Lasthebelarm — die Muskelkraft ist daher immer ein Vielfaches der Last.`,
      lernziele: [
        "Die zwei Gleichgewichtsbedingungen (Kräfte- und Momentengleichgewicht) anwenden",
        "Drehmomente berechnen und das Hebelgesetz auf den Bewegungsapparat anwenden",
        "Einseitige und zweiseitige Hebel unterscheiden und klinische Beispiele nennen",
        "Die schiefe Ebene analysieren und Hangabtriebskraft/Normalkraft berechnen",
        "Druck (p=F/A), hydrostatischen Druck (p=ρgh) und Auftrieb erklären und anwenden",
      ],
      sections: [
        {
          heading: "Gleichgewichtsbedingungen",
          text: "Mechanisches Gleichgewicht erfordert zwei Bedingungen: (1) Kräftegleichgewicht ΣF = 0 — keine resultierende Kraft, keine Beschleunigung. (2) Momentengleichgewicht ΣM = 0 — keine resultierende Drehwirkung, keine Rotation. Beide müssen gleichzeitig erfüllt sein. Standsicherheit: Ein Körper kippt nicht, solange das Lot vom Schwerpunkt innerhalb der Standfläche fällt.",
          merksatz:
            "Gleichgewicht = ΣF = 0 UND ΣM = 0. Fehlt eine Bedingung → Translation oder Rotation.",
        },
        {
          heading: "Drehmoment und Hebelgesetz",
          text: "Drehmoment M = F·d (Kraft × senkrechter Hebelarm, Einheit N·m). Hebelgesetz: F₁·d₁ = F₂·d₂. Im Körper: Muskeln setzen nahe am Gelenk an (kurzer Hebelarm) → große Muskelkraft nötig, aber schnelle Bewegung. Bizeps–Unterarm: Hebelverhältnis 1:7, für 10 kg Last braucht der Bizeps 700 N. Kiefergelenk: Molaren näher am Drehpunkt → höhere Beißkraft als Incisivi.",
          merksatz:
            "M = F·d. Kurzer Muskelhebelarm → große Kraft, schnelle Bewegung (Geschwindigkeitshebel).",
        },
        {
          heading: "Schiefe Ebene",
          text: "Die schiefe Ebene zerlegt die Gewichtskraft in zwei Komponenten: Hangabtriebskraft F_H = mg·sin(α) parallel zur Ebene und Normalkraft F_N = mg·cos(α) senkrecht zur Ebene. Klinisch: Extensionsbehandlungen nutzen geneigte Schienen, um über das Eigengewicht kontrollierte Zugkräfte auf Frakturen auszuüben.",
          merksatz:
            "Schiefe Ebene: F_H = mg·sin(α), F_N = mg·cos(α). Sinus = schiefwärts (hangabwärts).",
        },
        {
          heading: "Druck und Hydrostatik",
          text: "Druck p = F/A (Pa = N/m²). Pascal'sches Prinzip: Druckänderung breitet sich gleichmäßig in alle Richtungen aus. Hydrostatischer Druck p = ρgh steigt mit der Tiefe — erklärt den erhöhten Blutdruck in den Beinen beim Stehen (+115 mmHg bei 1,5 m). Auftrieb F_A = ρ·g·V (Archimedisches Prinzip) — therapeutisch in der Hydrotherapie genutzt.",
          merksatz:
            "p = F/A → kleine Fläche = hoher Druck. Hydrostatisch: p = ρgh. Auftrieb: F_A = ρ·g·V.",
        },
      ],
      merksätze: [
        "Gleichgewicht: ΣF = 0 (Kräfte) UND ΣM = 0 (Momente). Beide Bedingungen müssen erfüllt sein.",
        "Schwerpunkt: Lot muss in Standfläche fallen → sonst Umkippen.",
        "Drehmoment M = F · d. Einheit: N·m. Großer Hebelarm → großes Drehmoment bei kleiner Kraft.",
        "Hebelgesetz: F₁·d₁ = F₂·d₂. Körperhebel: kurzer Muskelarm → große Kraft, schnelle Bewegung.",
        "Schiefe Ebene: F_H = mg·sin(α), F_N = mg·cos(α). Sinus = parallel, Cosinus = senkrecht.",
        "Druck p = F/A. Einheit Pascal (Pa). Hydrostatisch: p = ρgh.",
        "Archimedisches Prinzip: F_A = ρ_Fl·g·V. Auftrieb = Gewicht des verdrängten Fluids.",
        "Strömungsmechanik (Bernoulli, Poiseuille, Reynolds) → siehe Fluidmechanik-Kapitel.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Poiseuille-Gesetz und erläutern Sie, warum eine Koronarstenose mit 50%iger Lumenreduktion klinisch so kritisch ist. Welche therapeutischen Maßnahmen leiten sich daraus ab?",
        answer: `Das Hagen-Poiseuille-Gesetz beschreibt den Volumenstrom Q einer viskosen, inkompressiblen Flüssigkeit durch ein zylindrisches Rohr bei laminarer Strömung: Q = (π·r⁴·Δp)/(8·η·l). Dabei ist r der Gefäßradius, Δp der Druckgradient, η die dynamische Viskosität und l die Rohrlänge. Der kritische Parameter ist der Radius, der mit der vierten Potenz eingeht.

Eine 50%ige Lumenreduktion bedeutet eine Halbierung des Radius (r₂ = 0,5·r₁). Die Auswirkung auf den Volumenstrom: Q₂/Q₁ = (r₂/r₁)⁴ = (0,5)⁴ = 1/16 = 6,25 %. Der Koronarfluss sinkt also auf nur 6,25 % des ursprünglichen Wertes. In der Praxis versucht der Körper durch Erhöhung des Blutdrucks gegenzusteuern, was die kardiale Nachlast erhöht und die Herzarbeit steigert.

Klinische Konsequenzen: Schon bei moderater körperlicher Belastung kann das Koronargefäß nicht genug Blut liefern → Angina pectoris (ischämische Brustschmerzen). Bei maximaler Stenose (> 90 %) kann die Myokardversorgung auch in Ruhe insuffizient sein → Herzinfarkt.

Therapeutische Konsequenzen aus dem r⁴-Gesetz: (1) Perkutane transluminale Koronarangioplastie (PTCA/Stenting) — Ballon-Aufweitung von r = 0,5r₀ auf r₀ steigert den Fluss um Faktor 16. (2) Bypass-Operation — Umgehung der Stenose mit neuem Gefäß mit größerem r. (3) Medikamentöse Vasodilatation — Nitroglycerin erhöht r durch glatte Muskelrelaxation. Das Poiseuille-Gesetz zeigt, warum kleinste Radienänderungen massive Auswirkungen auf den Blutfluss haben.`,
      },
      klinischerBezug:
        "Das Poiseuille-Gesetz (Q ~ r⁴) erklärt die extreme klinische Relevanz von Gefäßstenosen: Eine Lumenreduktion um 50 % (Radiushalbierung) reduziert den Blutfluss auf 6,25 % des Normalen — das Herzmuskelgewebe wird ischämisch. Stenting bei Koronarstenosen nutzt genau dieses Gesetz: Schon eine kleine Radiusvergrößerung (r × 1,2) steigert den Fluss auf das 2,1-fache. Die Bernoulli-Gleichung erklärt zusätzlich, warum an Stenosen der Druck poststenotisch abfällt und Kalzifizierungen das Risiko einer plötzlichen Gefäßdissektion erhöhen.",
      selfTest: [
        {
          question:
            "Ein Muskel wirkt 4 cm vom Gelenk (Drehachse) entfernt. Eine Last von 50 N hängt 20 cm vom Gelenk. Wie groß muss die Muskelkraft im Gleichgewicht sein?",
          options: ["10 N", "50 N", "200 N", "250 N", "1000 N"],
          correctIndex: 3,
          explanation:
            "Momentengleichgewicht: F_Muskel · d_Muskel = F_Last · d_Last. F_M · 0,04 m = 50 N · 0,20 m → F_M = (50 · 0,20)/0,04 = 10/0,04 = 250 N. Der Muskel muss 250 N aufwenden, um eine Last von nur 50 N zu halten — Faktor 5. Dies ist typisch für Körperhebel: kurze Muskelhebelarme erfordern große Muskelkräfte, ermöglichen aber große Bewegungsgeschwindigkeiten. Die Gelenkreaktionskraft beträgt dabei: F_Gelenk = F_M − F_Last = 250 − 50 = 200 N.",
          hints: [
            "Momentengleichgewicht: F₁·d₁ = F₂·d₂. Drehmoment Muskel = Drehmoment Last.",
            "F_M · 4 cm = 50 N · 20 cm → F_M = 50·20/4.",
          ],
          difficulty: 2,
          tags: ["statik", "hebel", "drehmoment"],
        },
        {
          question:
            "In der Aorta (Querschnitt 5 cm²) fließt Blut mit 20 cm/s. Welche Geschwindigkeit hat das Blut in Kapillaren mit einem Gesamtquerschnitt von 2500 cm²?",
          options: ["0,002 cm/s", "0,004 cm/s", "0,04 cm/s", "4 cm/s", "10 cm/s"],
          correctIndex: 2,
          explanation:
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ → v₂ = A₁·v₁/A₂ = (5·20)/2500 = 100/2500 = 0,04 cm/s. Der Blutfluss in den Kapillaren ist 500-mal langsamer als in der Aorta! Diese extrem geringe Kapillarströmungsgeschwindigkeit ist physiologisch essenziell: Sie ermöglicht ausreichend Zeit für den Diffusionsaustausch von O₂, CO₂, Glukose und Metaboliten zwischen Blut und Gewebe. Würde das Blut schneller fließen, wäre der Diffusionsaustausch unvollständig.",
          hints: [
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂. Löse nach v₂ auf.",
            "v₂ = (A₁/A₂) · v₁ = (5/2500) · 20 cm/s.",
          ],
          difficulty: 2,
          tags: ["kontinuität", "strömung", "blutfluss"],
        },
        {
          question:
            "Ein Koronargefäß wird auf 1/3 seines ursprünglichen Radius verengt. Auf welchen Bruchteil sinkt der Volumenstrom (nach Poiseuille, bei gleichem Δp)?",
          options: ["1/3", "1/9", "1/27", "1/81", "1/243"],
          correctIndex: 3,
          explanation:
            "Poiseuille: Q ~ r⁴. Q_neu/Q_alt = (r_neu/r_alt)⁴ = (1/3)⁴ = 1/81 ≈ 1,2 % des ursprünglichen Flusses. Eine Drittelung des Radius reduziert den Blutfluss auf weniger als 2 % des Normalflusses! Das ist unter Ruhe-Sauerstoffbedarf — das Myokard wäre komplett ischämisch. In der klinischen Praxis versucht der Körper durch Druckerhöhung (Hypertension) gegenzusteuern, was die kardiale Arbeit massiv steigert und einen Teufelskreis initiiert.",
          hints: [
            "Poiseuille: Q ~ r⁴. Wenn r auf 1/3 schrumpft, wird Q zu (1/3)⁴.",
            "(1/3)⁴ = 1/(3⁴) = 1/81.",
          ],
          difficulty: 3,
          tags: ["poiseuille", "gefäßwiderstand", "radius"],
        },
        {
          question:
            "Was ist der hydrostatische Druck in einem Blutgefäß 1,5 m unterhalb des Herzens (ρ_Blut = 1050 kg/m³, g = 10 m/s²)?",
          options: ["105 Pa", "1050 Pa", "10500 Pa", "15750 Pa", "105000 Pa"],
          correctIndex: 3,
          explanation:
            "Hydrostatischer Druck: p = ρ·g·h = 1050 · 10 · 1,5 = 15750 Pa = 15,75 kPa. Umrechnung in mmHg: 15750/133 ≈ 118 mmHg. Das bedeutet: In den Fußvenen eines stehenden Menschen liegt der Blutdruck bei systolisch 120 + 118 ≈ 238 mmHg! Das erklärt das Krampfaderproblem (Veneninsuffizienz bei Stehenden), das Ödemrisiko in den Beinen und warum venöse Ulzera vorwiegend am Unterschenkel auftreten.",
          hints: [
            "Hydrostatischer Druck: p = ρ·g·h. Alle Einheiten SI: kg/m³, m/s², m → Pa.",
            "1050 · 10 · 1,5 = ?",
          ],
          difficulty: 2,
          tags: ["hydrostatik", "druck", "blutdruck"],
        },
        {
          question:
            "Ein Taucher befindet sich auf 10 m Tiefe (ρ_Wasser = 1000 kg/m³, g = 10 m/s², p_atm = 100000 Pa). Wie groß ist der Gesamtdruck auf ihn?",
          options: ["10000 Pa", "100000 Pa", "110000 Pa", "200000 Pa", "1000000 Pa"],
          correctIndex: 3,
          explanation:
            "Gesamtdruck = Atmosphärendruck + hydrostatischer Druck = p_atm + ρ·g·h = 100000 + 1000·10·10 = 100000 + 100000 = 200000 Pa = 2 bar. Pro 10 m Tauchtiefe kommt 1 bar Druck hinzu. Bei 10 m Tiefe hat sich der absolute Druck verdoppelt. Das ist relevant für das Boyle-Mariotte-Gesetz: Luft in der Lunge komprimiert sich auf die Hälfte des Volumens. Beim Auftauchen muss diese Kompression durch Ausatmen ausgeglichen werden — sonst Barotrauma.",
          hints: [
            "Gesamtdruck = p_atm + ρgh. Beide Anteile addieren sich.",
            "Hydrostatischer Anteil: 1000 · 10 · 10 = 100000 Pa = 1 bar.",
          ],
          difficulty: 2,
          tags: ["hydrostatik", "druck", "tauchen"],
        },
      ],
    },
    {
      id: "ph-2-04",
      title: "Gravitation und Rotation",
      stichworte: [
        "Gravitationsgesetz",
        "Gewichtskraft",
        "Masse vs. Gewicht",
        "Keplersche Gesetze",
        "Kreisbewegung",
        "Zentripetalkraft",
        "Zentrifugalkraft",
        "Zentrifuge",
        "RCF",
        "Trägheitsmoment",
        "Winkelgeschwindigkeit",
        "Schwerpunkt",
      ],
      content: `Warum trennt eine Zentrifuge Blut in seine Bestandteile? Warum werden Kampfjetpiloten bei scharfen Kurven ohnmächtig? Und warum sind ältere Menschen sturzgefährdeter? Die Antwort liegt in zwei Grundphänomenen: **Gravitation** (Anziehungskraft zwischen Massen) und **Rotation** (Kreisbewegung mit den dabei auftretenden Beschleunigungen und Kräften).

{{DIAGRAM:centripetal-force}}

---

## Newtonsches Gravitationsgesetz

Isaac Newton erkannte, dass dieselbe Kraft den Apfel fallen lässt und den Mond auf seiner Bahn hält:

**F_G = G · (m₁ · m₂) / r²**

| Größe | Bedeutung | Wert |
|-------|-----------|------|
| G | Gravitationskonstante | 6,674 x 10⁻¹¹ N·m²/kg² |
| m₁, m₂ | Die beiden Massen | in kg |
| r | Abstand der Massenmittelpunkte | in m |

**Abstandsquadratgesetz:** Doppelter Abstand → vierfach kleinere Kraft. Auf der Erdoberfläche vereinfacht sich die Formel zu **F_G = m · g** mit g = G·M_Erde/r_Erde² ≈ 9,81 m/s².

> **Merke:** Masse (kg) ≠ Gewichtskraft (N)! Masse ist eine unveränderliche Materieeigenschaft. Gewichtskraft F_G = m·g hängt vom Ort ab. Auf dem Mond (g ≈ 1,62 m/s²) wiegt ein 70-kg-Mensch nur ~113 N statt ~687 N auf der Erde — seine Masse bleibt 70 kg.

---

## Kreisbewegung — Formeln und Zusammenhänge

Bei gleichförmiger Kreisbewegung bleibt der Geschwindigkeitsbetrag konstant, aber die Richtung ändert sich ständig. Dafür braucht es eine ständige Beschleunigung zur Kreismitte — die **Zentripetalbeschleunigung** (Beschleunigung, die einen Körper auf einer Kreisbahn hält):

| Größe | Formel | Einheit |
|-------|--------|---------|
| Winkelgeschwindigkeit | omega = 2·pi/T = 2·pi·f | rad/s |
| Bahngeschwindigkeit | v = omega·r = 2·pi·r/T | m/s |
| Zentripetalbeschleunigung | a_z = v²/r = omega²·r | m/s² |
| Zentripetalkraft | F_z = m·v²/r = m·omega²·r | N |
| Umlaufzeit | T = 2·pi/omega | s |
| Frequenz | f = 1/T | Hz (= s⁻¹) |

Die Zentripetalkraft ist eine **reale Kraft** — sie wird z. B. durch Gravitation (Planeten), Reibung (Kurvenfahrt) oder Seilspannung bereitgestellt.

> **Merke:** a_z = v²/r = omega²·r. Doppelte Geschwindigkeit → vierfache Zentripetalbeschleunigung! Die Zentripetalkraft zeigt immer zur Kreismitte.

---

## Zentripetal- vs. Zentrifugalkraft

| | Zentripetalkraft | Zentrifugalkraft |
|---|-----------------|-----------------|
| Richtung | Zur Kreismitte | Von der Kreismitte weg |
| Typ | **Reale Kraft** | **Scheinkraft** (Trägheitskraft) |
| Bezugssystem | Inertialsystem (ruhender Beobachter) | Rotierendes Bezugssystem |
| Formel | F_z = m·omega²·r | F_cf = m·omega²·r (gleicher Betrag!) |
| MedAT-Falle | Was hält den Satelliten auf der Bahn? → **Gravitationskraft als Zentripetalkraft**, NICHT Zentrifugalkraft! |

> **Merke:** Im MedAT ist die Antwort auf „Welche Kraft hält einen Satelliten auf seiner Bahn?" immer die **Gravitationskraft** (als Zentripetalkraft). Zentrifugalkraft existiert nur im mitrotierenden System!

---

## Labormedizin: Zentrifugation

{{DIAGRAM:centrifuge-blood}}

Die Zentrifuge ist das wichtigste physikalische Gerät im klinischen Labor. Sie erzeugt durch Rotation Beschleunigungen von Hunderten bis Hunderttausenden g, unter denen sich Blutbestandteile nach Dichte trennen:

| Schicht (von unten) | Bestandteil | Dichte (g/mL) |
|---------------------|-------------|---------------|
| Unterste Schicht | Erythrozyten | ~1,10 |
| Buffy coat (helle Zwischenschicht) | Leukozyten + Thrombozyten | 1,04-1,07 |
| Oberste Schicht | Plasma (hellgelb) | ~1,025 |

**Relative Zentrifugalbeschleunigung (RCF):**

RCF = omega² · r / g

Vereinfachte Formel: RCF ≈ 1,118 x 10⁻⁵ x n² x r (n in rpm, r in mm).

| Anwendung | Typisches RCF | Zweck |
|-----------|---------------|-------|
| Plasma abtrennen | 300-500 x g | Erythrozyten pelletieren |
| Serumgewinnung | 1000-2000 x g | Volle Zelltrennung |
| Thrombozyten-Konzentrat | 200 → 1000 x g | Zweischritt-Trennung |
| Lipoprotein-Analytik | 100 000+ x g | LDL/HDL nach Dichte trennen |
| DNA-Aufreinigung | 100 000-500 000 x g | Ultrazentrifuge mit CsCl |

> **Merke:** RCF = omega²·r/g. Höheres RCF → schnellere Sedimentation dichterer Teilchen. Hämatokrit (Anteil der Erythrozyten am Blutvolumen) wird durch Mikrohämatokrit-Zentrifugation bestimmt.

---

## Rotation des Körpers: Trägheitsmoment und Stabilität

Das **Trägheitsmoment** I = Summe(m_i · r_i²) (kg·m²) ist das rotatorische Analogon zur Masse — es hängt davon ab, wie weit die Masse von der Drehachse entfernt ist:

| Translatorisch | Rotatorisch | Analogie |
|---------------|-------------|----------|
| Masse m | Trägheitsmoment I | „Widerstand gegen Änderung" |
| Kraft F | Drehmoment M = I·alpha | „Ursache der Änderung" |
| F = m·a | M = I·alpha | Grundgesetz |
| v = v₀ + a·t | omega = omega₀ + alpha·t | Kinematik |
| Impuls p = m·v | Drehimpuls L = I·omega | Erhaltungsgröße |

**Drehimpulserhaltung:** L = I·omega = const (ohne äußere Drehmomente). Eiskunstläufer zieht Arme an → I sinkt → omega steigt → schnellere Drehung.

**Gleichgewicht und Sturzprävention:**

| Gleichgewichtsart | Schwerpunkt bei Auslenkung | Beispiel |
|-------------------|---------------------------|----------|
| **Stabil** | Steigt (kehrt zurück) | Kugel in Mulde |
| **Labil** | Sinkt (kippt um) | Stift auf Spitze |
| **Indifferent** | Bleibt gleich | Kugel auf Ebene |

**Kippkriterium:** Die senkrechte Projektion des Schwerpunkts muss innerhalb der Standfläche liegen. Tiefer Schwerpunkt + große Standfläche = stabil. Ältere Menschen mit schmaler Standbasis und reduzierter Muskelkraft → erhöht sturzgefährdet. Gehstock verdoppelt die effektive Standbreite!

> **Merke:** Stabiles Gleichgewicht: Schwerpunkt tief, Standfläche groß, Lot des Schwerpunkts innerhalb der Standfläche. Drehimpulserhaltung: L = I·omega = const.

---

## g-Kräfte in der Medizin

| Situation | g-Wert | Medizinische Relevanz |
|-----------|--------|----------------------|
| Stehen/Liegen | 1 g | Referenzwert |
| Autobremsung | 0,5-1 g | Alltäglich, sicher |
| Achterbahn | 3-5 g | Kurzzeitig tolerierbar |
| Frontalaufprall 50 km/h | ~20 g | Organverletzungen, Frakturen |
| Kampfjetpilot | bis 9 g | G-LOC (Bewusstlosigkeit durch Blutversacken in die Beine) |
| Laborzentrifuge | ~1000 g | Bluttrennung |
| Ultrazentrifuge | 100 000+ g | Lipoprotein-/DNA-Trennung |

**Klinisch:** Bei Dezelerationstraumen (plötzliche Verzögerung, z. B. Aufprall) wirken auf innere Organe Kräfte von F = m·a = m·(Vielfaches von g). Bei 20 g können Aortentranssektionen (Abriss der Hauptschlagader), Leberrupturen und diffuse axonale Hirnverletzungen (Zerreißung von Nervenfasern) auftreten. Gurt und Airbag verlängern die Bremsstrecke → niedrigeres g → geringere Verletzungsgefahr.

---

## Rechenbeispiele

**Beispiel 1 — Zentrifuge: RCF berechnen:**
n = 3000 rpm, r = 15 cm = 0,15 m.
omega = 2·pi x 3000/60 = **314 rad/s**.
a_z = omega²·r = 314² x 0,15 = 98 596 x 0,15 = **14 789 m/s²**.
RCF = 14 789/9,81 ≈ **1507 x g** → Serumgewinnung möglich.

**Beispiel 2 — Ultrazentrifuge für Lipoproteine:**
Benötigt: RCF ≈ 100 000 g, r = 8 cm = 0,08 m.
omega² = RCF·g/r = 100 000 x 9,81 / 0,08 = 1,226 x 10⁷ → omega ≈ 3502 rad/s.
n = omega/(2·pi) x 60 ≈ **33 440 rpm**.

**Beispiel 3 — Kurvenfahrt:**
v = 20 m/s, r = 50 m → a_z = v²/r = 400/50 = **8 m/s² ≈ 0,8 g**.
Auf nasser Fahrbahn (mu ≈ 0,4): max. a = mu·g = 4 m/s² — das Auto würde bei 8 m/s² schleudern!

**Beispiel 4 — Sturzsicherheit:**
Patient (h = 1,80 m, Schwerpunkt bei 1,01 m), Standbreite 25 cm.
Kippwinkel: tan(theta) = 0,125/1,01 → theta ≈ **7,1°**.
Mit Gehstock (60 cm): theta ≈ **16,5°** → doppelte Kippstabilität.

**Prüfungsrelevante Zahlen:**
- G = 6,674 x 10⁻¹¹ N·m²/kg²; g ≈ 9,81 m/s²; g_Mond ≈ 1,62 m/s²
- a_z = v²/r = omega²·r; RCF = omega²·r/g
- Standard-Zentrifuge: ~1000-2000 g; Ultrazentrifuge: 100 000+ g
- Drehimpuls L = I·omega = const (Erhaltungsgröße)
- Kippstabilität: Lot des Schwerpunkts muss in Standfläche liegen`,
      lernziele: [
        "Das Newtonsche Gravitationsgesetz anwenden und zwischen Masse und Gewichtskraft unterscheiden",
        "Zentripetalbeschleunigung und Zentripetalkraft für gleichförmige Kreisbewegungen berechnen",
        "Das Prinzip der Zentrifugation und die relative Zentrifugalbeschleunigung (RCF) erklären",
        "Trägheitsmoment und Drehimpulserhaltung auf biologische Rotationsbewegungen anwenden",
        "Die Bedingungen für stabiles Gleichgewicht des menschlichen Körpers erläutern",
      ],
      sections: [
        {
          heading: "Gravitation: Universalgesetz und Erdanziehung",
          text: "F_G = G·m₁·m₂/r² — Gravitation wirkt zwischen allen Massen, nimmt mit dem Quadrat des Abstands ab. Auf der Erdoberfläche: F_G = m·g mit g ≈ 9,81 m/s². Wichtig: Masse (unveränderlich, kg) ≠ Gewicht (kraftabhängig, N). In der Schwerelosigkeit (ISS) ist F_G ≈ 0 — Muskeln und Knochen atrophieren durch fehlende mechanische Belastung (Osteoporose im Weltraum). Medizinisch relevant: Orthostase (Aufstehen) erfordert Gegenregulation gegen den hydrostatischen Blutdruck-Abfall.",
          merksatz:
            "F_G = m·g auf der Erdoberfläche. Gewicht ist eine Kraft (N), Masse ist eine Materieeigenschaft (kg). Im Weltraum: Masse bleibt, Gewicht → 0.",
        },
        {
          heading: "Zentripetalkraft und Kreisbewegung",
          text: "Gleichförmige Kreisbewegung: v = ω·r = 2πr/T. Zentripetalbeschleunigung: a_z = v²/r = ω²·r. Zentripetalkraft: F_z = m·v²/r — sie zeigt immer zur Kreismitte und wird durch eine reale Kraft bereitgestellt (Reibung, Gravitation, Seilspannung). In der Zentrifuge: a_z = ω²·r kann Hunderte bis Tausende von g erreichen und trennt Substanzen nach Dichte.",
          merksatz:
            "a_z = v²/r = ω²·r. Zentripetalkraft zeigt zur Mitte — sie ist keine Scheinkraft, sondern eine reale Kraft!",
        },
        {
          heading: "Zentrifuge in der Labormedizin",
          text: "Die Zentrifuge trennt Blutbestandteile durch die RCF: RCF = ω²·r/g. Typische Vollblutaufarbeitung: 300–500 × g für 10 min → Plasma (oben), Buffy coat (Leukozyten + Thrombozyten, Mitte), Erythrozyten (unten). Für Serumgewinnung: 1000–2000 × g. Für DNA-Aufreinigung: Dichtegradientenzentrifugation mit CsCl bei 100.000 × g (Ultrazentrifuge).",
          merksatz:
            "RCF = ω²·r/g. Höheres RCF → schnellere Sedimentation dichter Teilchen. 1 × g = Erdbeschleunigung = 9,81 m/s².",
        },
      ],
      merksätze: [
        "Gravitationsgesetz: F_G = G·m₁·m₂/r². Doppelter Abstand → vierfach kleinere Kraft (Abstandsquadratgesetz).",
        "g ≈ 9,81 m/s² (Erde) ≈ 1,62 m/s² (Mond). Masse (kg) bleibt gleich, Gewichtskraft (N) ändert sich!",
        "Zentripetalbeschleunigung a_z = v²/r = ω²·r. Doppelte v → vierfaches a_z!",
        "Zentripetalkraft = reale Kraft zur Kreismitte. Zentrifugalkraft = Scheinkraft (nur im rotierenden System)!",
        "Kreisbewegung: ω = 2π/T, v = ω·r, f = 1/T. Alles ineinander umrechenbar.",
        "RCF = ω²·r/g. Laborzentrifuge ~1000 g (Blut), Ultrazentrifuge 100 000+ g (Lipoproteine/DNA).",
        "Trägheitsmoment I = Σm·r². Masse fern von Achse → großes I. L = I·ω = const (Drehimpulserhaltung).",
        "Stabiles Gleichgewicht: Schwerpunkt tief + Standfläche groß + Lot innerhalb Standfläche.",
        "Satellit auf Kreisbahn: Gravitationskraft = Zentripetalkraft. NICHT Zentrifugalkraft!",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Prinzip der Laborzentrifuge, leiten Sie die Formel für die relative Zentrifugalbeschleunigung (RCF) her und erläutern Sie, wie Blut durch differentielle Zentrifugation in seine Bestandteile getrennt wird.",
        answer: `Eine Zentrifuge dreht Probenröhrchen mit hoher Winkelgeschwindigkeit ω um eine zentrale Achse. Auf jedes Teilchen der Masse m im Abstand r von der Drehachse wirkt eine Zentripetalbeschleunigung a_z = ω²·r (im Laborsystem) bzw. eine Zentrifugalkraft F_cf = m·ω²·r (im mitrotierenden System, nach außen). Schwerere und dichtere Teilchen erfahren eine größere Kraft und sedimentieren schneller nach außen (zum Boden des Röhrchens).

Herleitung der RCF: Die Zentrifugalbeschleunigung a_cf = ω²·r wird auf die Erdbeschleunigung g normiert: RCF = a_cf/g = ω²·r/g. Mit ω = 2πn (n = Umdrehungen/Sekunde): RCF = 4π²·n²·r/g. Praktisch: Bei n = 3000 rpm = 50 U/s und r = 0,1 m: RCF = 4π²·2500·0,1/9,81 ≈ 1005 g.

Differentielle Bluttrennung: Vollblut enthält Bestandteile unterschiedlicher Dichte und Größe. Bei 300–500 × g (10 min): Erythrozyten (Dichte ca. 1,10 g/ml) sedimentieren nach unten; Leukozyten und Thrombozyten (Dichte ca. 1,04–1,07 g/ml) bilden den Buffy coat; Plasma (Dichte ca. 1,025 g/ml) bleibt oben. Bei höheren RCF (1000–2000 × g) sedimentieren auch Thrombozyten. Für Thrombozyten-Konzentrate: Niedertourige Zentrifugation (200 × g) trennt zunächst Erythrozyten ab, dann hochtourig (1000 × g) pelletiert die Thrombozyten.

Ultrazentrifugation (100.000–500.000 × g): Trennt Lipoproteine (LDL, HDL nach Dichte), Zellorganellen, Ribosomen und sogar Makromoleküle. Dichtegradientenzentrifugation in CsCl oder Saccharose ermöglicht die Isopyknische Trennung — jede Substanz wandert in ihre charakteristische Gleichgewichtsdichte.`,
      },
      klinischerBezug:
        "Die Zentrifugation ist ein zentrales labormedizinisches Werkzeug: Vollblut-Zentrifugation trennt Plasma, Buffy coat und Erythrozyten für Blutbild, Gerinnung und Serumanalyse. Bei der Orthostase (Aufstehen aus dem Liegen) muss das kardiovaskuläre System den hydrostatischen Druckabfall von ca. 18 mmHg kompensieren — bei Versagen: orthostatische Hypotonie mit Synkope. Langfristige Schwerelosigkeit (Astronauten, ISS) führt zu Knochendemineralisierung (ca. 1–2 % Knochenmasse/Monat) und Muskelatrophie durch fehlende Gravitationsbelastung, was neue Therapieansätze für Osteoporose und Immobilisierungssyndrome inspiriert.",
      selfTest: [
        {
          question:
            "Eine Laborzentrifuge dreht mit 3000 rpm (Umdrehungen/Minute) und hat einen Radius von 10 cm. Wie groß ist die Zentripetalbeschleunigung in Einheiten von g (g = 10 m/s²)?",
          options: ["30 g", "100 g", "300 g", "1000 g", "3000 g"],
          correctIndex: 3,
          explanation:
            "ω = 3000 rpm = 3000/60 U/s = 50 U/s = 50 · 2π rad/s ≈ 314 rad/s. a_z = ω²·r = 314² · 0,1 = 98596 · 0,1 ≈ 9860 m/s². RCF = 9860/10 ≈ 986 g ≈ 1000 g. Vereinfachte Formel: RCF ≈ (n/1000)² · r_cm · 112 = (3)² · 10 · 11,2 ≈ 1008 g. Klinische Relevanz: Bei 1000 g sedimentieren Erythrozyten vollständig innerhalb von 5–10 min. Leukozyten und Thrombozyten benötigen höhere RCF oder längere Zeit.",
          hints: [
            "Erst ω umrechnen: rpm → rad/s: ω = 3000/60 · 2π ≈ 314 rad/s.",
            "a_z = ω²·r. Dann RCF = a_z / g (mit g = 10 m/s²).",
          ],
          difficulty: 3,
          tags: ["zentrifuge", "zentripetalbeschleunigung", "rcf"],
        },
        {
          question: "Welche Kraft hält einen Satelliten auf seiner Kreisbahn um die Erde?",
          options: [
            "Zentrifugalkraft (Scheinkraft nach außen)",
            "Trägheitskraft",
            "Gravitationskraft (als Zentripetalkraft)",
            "Magnetkraft der Erde",
            "Der Satellit braucht keine Kraft — er bewegt sich im Vakuum kräftefrei.",
          ],
          correctIndex: 2,
          explanation:
            "Die Gravitationskraft der Erde liefert die notwendige Zentripetalkraft für die Kreisbahn: F_G = m·g(r) = m·v²/r. In der richtigen Höhe und Geschwindigkeit fällt der Satellit ständig um die Erde herum — er bewegt sich nicht kräftefrei (das widerspräche dem Trägheitsgesetz, das geradlinige Bewegung ohne Kraft vorhersagt). Die Zentrifugalkraft ist eine Scheinkraft im mitrotierenden Bezugssystem — sie existiert nicht im Inertialsystem der Erde.",
          hints: [
            "Im Inertialsystem (Erde) wirkt nur eine reale Kraft auf den Satelliten: die Gravitationskraft.",
            "Zentrifugalkraft ist eine Scheinkraft im mitrotierenden System — sie ist keine reale Kraft.",
          ],
          difficulty: 2,
          tags: ["gravitation", "zentripetalkraft", "satellit"],
        },
        {
          question:
            "Ein Autofahrer fährt mit v = 20 m/s durch eine Kurve mit Radius r = 50 m. Wie groß ist die Zentripetalbeschleunigung?",
          options: ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²", "400 m/s²"],
          correctIndex: 2,
          explanation:
            "a_z = v²/r = (20)²/50 = 400/50 = 8 m/s² ≈ 0,82 g. Diese Beschleunigung wirkt zur Kurvenmitte und wird durch die Reibung zwischen Reifen und Fahrbahn bereitgestellt. Auf nasser Fahrbahn (geringer Reibkoeffizient μ ≈ 0,4) kann maximal a_max = μ·g = 0,4·10 = 4 m/s² durch Reibung erzeugt werden — bei 8 m/s² würde das Auto schleudern. Sicherheitsrelevant: Kurvenradius und Geschwindigkeit sind durch a_z = v²/r verknüpft — doppelte Geschwindigkeit erfordert viermal größeren Kurvenradius.",
          hints: ["Zentripetalbeschleunigung: a_z = v²/r.", "20² = 400. 400/50 = 8 m/s²."],
          difficulty: 1,
          tags: ["kreisbewegung", "zentripetalbeschleunigung", "kurvenfahrt"],
        },
        {
          question:
            "Welche Bedingung muss für stabiles Gleichgewicht des menschlichen Körpers im Stand erfüllt sein?",
          options: [
            "Der Schwerpunkt muss möglichst hoch liegen.",
            "Die Standfläche muss möglichst klein sein.",
            "Die senkrechte Projektion des Schwerpunkts muss innerhalb der Standfläche liegen.",
            "Der Körper muss symmetrisch belastet sein.",
            "Das Trägheitsmoment muss maximal sein.",
          ],
          correctIndex: 2,
          explanation:
            "Stabiles Gleichgewicht erfordert, dass die senkrechte Projektion (Lot) des Schwerpunkts innerhalb der Standfläche liegt. Wenn das Lot außerhalb fällt, erzeugt die Gewichtskraft ein Kippmoment — der Körper fällt. Zusätzliche Stabilitätsfaktoren: (1) Tiefer Schwerpunkt (kleines Kippmoment bei Auslenkung), (2) Große Standfläche (toleriert größere Auslenkungen). Ältere Menschen mit reduzierter Muskelkraft und eingeschränkter Tiefensensibilität sind sturzgefährdet.",
          hints: [
            "Stell dir vor, du lehnst dich weit vor — wann fällst du um? Wenn das Lot deines Schwerpunkts vor die Zehen gerät.",
            "Standfläche = Fläche zwischen den Füßen. Projektion des SP muss darin liegen.",
          ],
          difficulty: 2,
          tags: ["statik", "gleichgewicht", "schwerpunkt"],
        },
        {
          question:
            "Ein Raumschiff umkreist die Erde in 400 km Höhe. Dort ist g ≈ 8,7 m/s². Mit welcher Geschwindigkeit umkreist es die Erde (Erdradius r_E = 6400 km)? Nutze: g = v²/r.",
          options: ["2,9 km/s", "7,7 km/s", "11,2 km/s", "28,4 km/s", "40,0 km/s"],
          correctIndex: 1,
          explanation:
            "r = r_E + h = 6400 + 400 = 6800 km = 6,8·10⁶ m. Zentripetalbeschleunigung = Gravitationsbeschleunigung: g = v²/r → v = √(g·r) = √(8,7 · 6,8·10⁶) = √(59,16·10⁶) ≈ 7692 m/s ≈ 7,7 km/s. Das ist die erste kosmische Geschwindigkeit in dieser Höhe. Die ISS umkreist die Erde mit ca. 7,7 km/s und benötigt ca. 90 min für einen Umlauf. Option C (11,2 km/s) wäre die zweite kosmische Geschwindigkeit (Fluchtgeschwindigkeit) von der Erdoberfläche.",
          hints: [
            "Gravitationskraft = Zentripetalkraft: m·g = m·v²/r → v = √(g·r).",
            "Gesamtradius: r = 6400 + 400 = 6800 km = 6,8 × 10⁶ m.",
          ],
          difficulty: 3,
          tags: ["gravitation", "kreisbewegung", "satellit"],
        },
      ],
    },
  ],
};
