import type { Kapitel } from "../types";

export const physKapMechanik: Kapitel = {
  id: "physik-kap1",
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
      diagram: "coordinate-system",
      content: `## Einleitung

Wie misst man Blutdruck in mmHg, Körpermasse in kg und Herzleistung in Watt? Physik und Medizin teilen dieselbe Sprache: Einheiten. Das **Internationale Einheitensystem (SI)** stellt sicher, dass alle Messungen weltweit vergleichbar sind. Wer die Basisgrößen und abgeleiteten Einheiten kennt, kann Messwerte verstehen, Formeln anwenden und klinische Werte interpretieren. Für den MedAT sind SI-Einheiten, Präfixe, Vektoren vs. Skalare und Dimensionsanalyse prüfungsrelevant.

## Das Internationale Einheitensystem (SI)

Die Physik beschreibt die Natur mit Hilfe von **Größen** — messbaren Eigenschaften wie Länge, Masse oder Zeit. Um weltweit vergleichbare Messungen zu ermöglichen, haben sich Wissenschaftlerinnen und Wissenschaftler auf ein einheitliches System geeinigt: das **Internationale Einheitensystem** (SI, Système International d'unités). Es bildet das Fundament jeder exakten Naturwissenschaft und damit auch der Medizin.

Das SI-System definiert **sieben Basisgrößen**, aus denen sich alle anderen physikalischen Größen ableiten lassen.

Die **Länge** wird in Meter (m) gemessen — ursprünglich als ein Zehnmillionstel des Weges vom Nordpol zum Äquator festgelegt, heute über die Lichtgeschwindigkeit definiert: 1 m ist die Strecke, die Licht im Vakuum in 1/299 792 458 Sekunde zurücklegt. Die **Masse** hat die Einheit Kilogramm (kg); bis 2019 war ein physisches Platiniridiumzylinder in Paris der internationale Standard, seither wird das Kilogramm über die Planck-Konstante h = 6,626 × 10⁻³⁴ J·s definiert. Die **Zeit** in Sekunden (s) wird durch Atomuhren mit einer Genauigkeit von 10⁻¹⁸ s realisiert — basierend auf 9 192 631 770 Schwingungen der Cäsium-133-Hyperfeinstruktur.

## Abgeleitete Einheiten

Alle weiteren physikalischen Größen werden aus den Basisgrößen durch Multiplikation und Division abgeleitet. Diese **abgeleiteten Einheiten** tragen oft eigene Namen:

**Kraft** (Newton, N): Ein Newton ist die Kraft, die einer Masse von 1 kg die Beschleunigung 1 m/s² erteilt.
1 N = 1 kg·m·s⁻²

**Druck** (Pascal, Pa): Druck ist Kraft pro Fläche.
1 Pa = 1 N/m² = 1 kg·m⁻¹·s⁻²

**Energie und Arbeit** (Joule, J): Energie ist Kraft mal Weg.
1 J = 1 N·m = 1 kg·m²·s⁻²

**Leistung** (Watt, W): Leistung ist Energie pro Zeit.
1 W = 1 J/s = 1 kg·m²·s⁻³

**Elektrische Spannung** (Volt, V): Spannung ist Leistung pro Stromstärke.
1 V = 1 W/A = 1 kg·m²·A⁻¹·s⁻³

**Frequenz** (Hertz, Hz): Frequenz ist Anzahl der Schwingungen pro Sekunde.
1 Hz = 1 s⁻¹

## Physikalische Größen als Produkt: Zahlenwert × Einheit

Eine physikalische Größe G ist immer das Produkt aus einem **Zahlenwert** {G} und einer **Einheit** [G]:

G = {G} · [G]

Beispiel: Eine Körpergröße von 1,75 m bedeutet: Zahlenwert = 1,75 und Einheit = m. Dies ist keine bloße Konvention — es hat mathematische Konsequenzen: Wenn man die Einheit wechselt (z.B. von m zu cm), ändert sich der Zahlenwert entsprechend. 1,75 m = 175 cm. Die Größe selbst — die tatsächliche Körpergröße — bleibt natürlich unverändert.

## Skalare und vektorielle Größen

Physikalische Größen lassen sich in **skalare** und **vektorielle** Größen unterteilen:

**Skalare Größen** werden vollständig durch einen Zahlenwert mit Einheit beschrieben. Beispiele: Masse (5 kg), Temperatur (37 °C), Energie (500 J), Zeit (3 s). Skalare haben keine Richtung.

**Vektorielle Größen** (Vektoren) benötigen zusätzlich zum Betrag eine **Richtungsangabe**. Beispiele: Kraft (10 N nach oben), Geschwindigkeit (30 m/s nach Norden), Beschleunigung (9,81 m/s² nach unten). In der Notation werden Vektoren oft mit einem Pfeil über dem Symbol geschrieben.

Im medizinischen Kontext ist diese Unterscheidung wichtig: Der **Blutdruck** (Pa) ist eine skalare Größe — er wirkt in alle Richtungen gleich. Die **Blutströmungsgeschwindigkeit** hingegen ist ein Vektor — sie hat eine definierte Richtung im Gefäß.

## Intensive und extensive Größen

Eine weitere wichtige Unterscheidung:

**Extensive Größen** sind abhängig von der Systemgröße — sie addieren sich, wenn man Systeme zusammenfügt. Beispiele: Masse, Volumen, Energie, Stoffmenge. Ein Liter Wasser + ein Liter Wasser = zwei Liter Wasser.

**Intensive Größen** sind unabhängig von der Systemgröße. Beispiele: Temperatur, Druck, Dichte, Konzentration. Zwei Behälter mit Wasser bei 20 °C ergeben nach dem Zusammenschütten immer noch 20 °C (nicht 40 °C!).

Diese Unterscheidung ist in der Pharmakologie und Physiologie von Bedeutung: Die Konzentration eines Medikaments im Blut (intensiv) ist entscheidend für die Wirkung, nicht die absolute Menge (extensiv). Der Arzt berechnet die Dosis (extensive Größe in mg) so, dass die gewünschte Konzentration (intensive Größe in mg/L) im Plasma erreicht wird — unter Berücksichtigung des Verteilungsvolumens und der Nierenclearance.

## Körpergewicht, Masse und Gewichtskraft

Ein häufiger Irrtum im Alltag: Die Masse eines Menschen (in kg) und seine Gewichtskraft (in N) sind verschiedene Größen. Die Masse ist eine intrinsische, ortsunabhängige Eigenschaft. Die Gewichtskraft F_G = m × g hängt von der Erdbeschleunigung g = 9,81 m/s² ab. Ein Mensch mit Masse 70 kg hat auf der Erde eine Gewichtskraft von 70 × 9,81 = 686,7 N. Auf dem Mond (g = 1,62 m/s²) wäre F_G = 113,4 N — aber seine Masse bleibt 70 kg. Diese Unterscheidung ist in der Weltraummedizin und bei Astronautentraining relevant.

## Rechenbeispiele

**Beispiel 1 — Infusionsrate berechnen (Dopamin):**
Verordnung: 5 µg/kg/min Dopamin, Patient 80 kg. Lösung: 200 mg in 250 mL NaCl.
Gesamtdosis pro Minute: 5 µg/kg/min × 80 kg = 400 µg/min = 0,4 mg/min.
Konzentration der Lösung: 200 mg / 250 mL = 0,8 mg/mL.
Infusionsrate: 0,4 mg/min / 0,8 mg/mL = 0,5 mL/min = **30 mL/h**.
> **Merke:** Einheiten systematisch kürzen: (µg/kg/min) × kg = µg/min → mg/min ÷ mg/mL = mL/min → × 60 = mL/h.

**Beispiel 2 — Blutdruck: mmHg → Pascal:**
Normaler Blutdruck 120/80 mmHg in SI-Einheiten:
Systolisch: 120 mmHg × 133,3 Pa/mmHg = 15 996 Pa ≈ **16,0 kPa**.
Diastolisch: 80 mmHg × 133,3 Pa/mmHg = 10 664 Pa ≈ **10,7 kPa**.
Druckdifferenz (Pulsamplitude): 40 mmHg ≈ 5,3 kPa — diese Pulsamplitude treibt die Pulswelle in den Arterien.

**Beispiel 3 — Grundumsatz in Watt:**
Grundumsatz eines Erwachsenen: ~1800 kcal/Tag.
Umrechnung: 1800 kcal × 4184 J/kcal = 7 531 200 J/Tag.
Ein Tag = 86 400 s.
Leistung P = 7 531 200 J / 86 400 s ≈ **87 W** — vergleichbar mit einer Glühbirne! Bei körperlicher Aktivität steigt der Energieumsatz auf 300–500 W.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Was ist die SI-Einheit des Drucks?" → Pascal (Pa = N/m² = kg·m⁻¹·s⁻²)
- "Wie viele SI-Basisgrößen gibt es, und welche?" → 7: Länge (m), Masse (kg), Zeit (s), Strom (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)
- "Was ist der Unterschied zwischen Skalar und Vektor?" → Skalar: nur Betrag (z.B. Temperatur, Druck); Vektor: Betrag + Richtung (z.B. Kraft, Geschwindigkeit)
- "Was ist 1 Watt in Basiseinheiten?" → W = J/s = kg·m²·s⁻³
- "Was ist der Unterschied zwischen intensiver und extensiver Größe?" → Intensiv: unabhängig von der Menge (Konzentration, Temperatur); extensiv: proportional zur Menge (Masse, Volumen)

**Achtung — typische Verwechslungen:**
- Masse (kg) ≠ Gewichtskraft (N): Masse ist ortsunabhängig, Gewichtskraft F_G = m·g hängt von g ab
- Newton ist KEINE Basiseinheit, sondern abgeleitet: N = kg·m/s²
- Intensive Größen addieren sich NICHT beim Zusammenfügen: 2 × (20°C Wasser) = 20°C, nicht 40°C
- "Körpergewicht 70 kg" ist physikalisch die Masse — die Gewichtskraft beträgt 70 × 9,81 ≈ 687 N

**Prüfungsrelevante Zahlen/Fakten:**
- 1 mmHg ≈ 133 Pa; 120 mmHg ≈ 16 kPa (normaler systolischer Blutdruck in SI)
- Grundumsatz Erwachsener ≈ 87 W (vergleichbar mit einer Glühbirne)
- Gewichtskraft 70 kg: F_G = 70 × 9,81 ≈ 687 N
- 7 SI-Basisgrößen — Kraft (Newton) ist KEINE Basisgröße!

---
## Zusammenfassung

- **7 SI-Basisgrößen**: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)
- **Abgeleitete Einheiten**: Newton (N = kg·m/s²), Pascal (Pa = N/m²), Joule (J = N·m), Watt (W = J/s)
- **Präfixe**: μ (10⁻⁶), m (10⁻³), k (10³), M (10⁶), G (10⁹) — wichtig für klinische Einheiten (mmHg, mL, μg)
- **Skalare**: nur Betrag (Temperatur, Masse, Druck); **Vektoren**: Betrag + Richtung (Kraft, Geschwindigkeit, Beschleunigung)
- **Dimensionsanalyse**: Einheiten beider Seiten einer Gleichung müssen identisch sein → überprüft Formeln
- **Klinisch**: 1 mmHg ≈ 133 Pa; Grundumsatz ~87 W; Blutdruck 120/80 mmHg = 16/10,7 kPa`,

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
            "Merkhilfe für die 7 SI-Basisgrößen: Länge(m) — Masse(kg) — Zeit(s) — Ampere(A) — Kelvin(K) — Mol(mol) — Candela(cd). Abkürzung: LaMZAKMC",
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
        'Merkhilfe: "Luise Mag Zwei Alte Katzen Mit Charme" → L, M, Z(eit), A, K, M(ol), C(andela)',
        "Abgeleitete Einheit = Kombination von Basiseinheiten: N = kg·m·s⁻², Pa = N/m², J = N·m, W = J/s",
        "Jede physikalische Größe G = Zahlenwert {G} × Einheit [G] — Zahlenwert allein ist bedeutungslos!",
        "Skalar = nur Betrag (Temperatur, Druck, Masse). Vektor = Betrag + Richtung (Kraft, Geschwindigkeit, Beschleunigung)",
        "Intensiv ≠ Extensiv: Konzentration verdoppelt sich nicht beim Verdoppeln des Volumens — Masse schon",
        "1 mmHg ≈ 133 Pa — klinischer Blutdruck in mmHg, SI-Einheit ist Pascal",
        "Das Kilogramm ist seit 2019 über die Planck-Konstante definiert — keine physischen Artefakte mehr",
        "Kelvin (K) = absolutes Temperaturmaß; 0 K = absoluter Nullpunkt = -273,15 °C; T(K) = T(°C) + 273,15",
        "1 mol enthält genau 6,022 × 10²³ Teilchen (Avogadro-Konstante) — definiert seit SI-Reform 2019",
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
      content: `## Einleitung

Ein Wasserstoffatom ist 0,1 nm groß, ein Mensch 1,7 m und die Milchstraße 10²¹ m breit. Die Medizin arbeitet mit µg/mL (Plasmaspiegel), mmol/L (Elektrolyte) und kPa (Blutdruck) — alles Variationen von SI-Einheiten mit **Präfixen**. Wer Präfixe sicher beherrscht, vermeidet tödliche Dosierungsfehler (µg vs. mg = Faktor 1000!). Für den MedAT sind SI-Präfixe, wissenschaftliche Notation und Einheitenumrechnungen prüfungsrelevant.

## Warum brauchen wir Präfixe?

Die Natur operiert auf extrem unterschiedlichen Größenskalen. Ein Wasserstoffatom hat einen Durchmesser von etwa 0,000 000 000 106 m, während der Abstand von der Erde zur Sonne ca. 150 000 000 000 m beträgt. Das Herz schlägt in einer Frequenz von ca. 1,2 Hz, Röntgenstrahlung schwingt bei 10¹⁸ Hz, und radioaktive Isotope haben Halbwertszeiten von Millisekunden bis zu Milliarden Jahren. Um diese enormen Spannen handhabbar zu machen, gibt es zwei komplementäre Werkzeuge: **SI-Präfixe** und **wissenschaftliche Notation**.

## SI-Präfixe: Das metrische Vorsatzsystem

SI-Präfixe sind Vorsätze, die vor eine Einheit gestellt werden und sie mit einer Zehnerpotenz multiplizieren.

## Wissenschaftliche Notation (Exponentialschreibweise)

Jede Zahl lässt sich in der wissenschaftlichen Notation schreiben als a × 10ⁿ, wobei gilt: 1 ≤ |a| < 10 und n eine ganzzahlige Potenz ist. Der Faktor a heißt **Mantisse**, n der **Exponent**.

**Beispiele:**
- 0,000 053 m = 5,3 × 10⁻⁵ m = 53 µm (Durchmesser einer menschlichen Eizelle)
- 6 000 000 000 = 6 × 10⁹ (6 Milliarden)
- 0,000 000 001 m = 1 × 10⁻⁹ m = 1 nm (Durchmesser eines DNA-Doppelstrangs: ~2 nm)
- 299 792 458 m/s ≈ 3 × 10⁸ m/s (Lichtgeschwindigkeit)

## Rechenregeln für Zehnerpotenzen

**Multiplizieren** — Exponenten addieren:
10³ × 10⁵ = 10⁸ (1 000 × 100 000 = 100 000 000)

**Dividieren** — Exponenten subtrahieren:
10⁷ / 10³ = 10⁴ (10 000 000 / 1 000 = 10 000)

**Potenzieren** — Exponenten multiplizieren:
(10³)² = 10⁶ (1 000² = 1 000 000)

**Mantissen korrekt verrechnen:**
(3 × 10⁴) × (2 × 10³) = 6 × 10⁷

Wenn das Ergebnis der Mantissenmultiplikation ≥ 10 ist, muss normiert werden:
(5 × 10⁴) × (4 × 10³) = 20 × 10⁷ = 2 × 10⁸

## Präfixe bei Flächen und Volumen: Die häufigste Fehlerquelle

Bei Flächen- und Volumeneinheiten mit Präfixen müssen die Präfixpotenzen quadriert bzw. kubiert werden.

Flächen: 1 cm² = (10⁻² m)² = 10⁻⁴ m² (nicht 10⁻² m²!)
Volumen: 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³

Klinisch wichtig:
1 mL = 1 cm³ = 10⁻⁶ m³
1 L = 1 dm³ = (10⁻¹ m)³ = 10⁻³ m³
1 m³ = 1000 L

## Medizinisch relevante Größenordnungen

**Länge:**
- DNA-Doppelhelix-Durchmesser: ~2 nm = 2 × 10⁻⁹ m
- Rote Blutkörperchen (Erythrozyten): ~8 µm = 8 × 10⁻⁶ m Durchmesser
- Zellkern: ~6 µm = 6 × 10⁻⁶ m
- Kapillardurchmesser: ~5–10 µm — entspricht gerade dem Erythrozytendurchmesser!

**Druck:**
- Atmosphärendruck: 101 325 Pa ≈ 10⁵ Pa ≈ 760 mmHg
- Systolischer Blutdruck: 120 mmHg ≈ 16 000 Pa = 16 kPa
- Osmotischer Druck des Blutes: ~780 kPa

**Konzentration:**
- Normalglukose: 3,9–6,1 mmol/L (in USA: 70–110 mg/dL)
- Normalnatrium: 135–145 mmol/L
- Troponin T (Herzmarker, hochsensitiv): < 14 ng/L = < 14 × 10⁻⁹ g/L

**Energie:**
- Täglicher Grundumsatz: ~7 500 kJ = 7,5 × 10⁶ J
- Energie eines ATP-Moleküls: ~5 × 10⁻²⁰ J pro Molekül
- Energie pro Mol ATP: ~30,5 kJ/mol

**Zeit:**
- Halbwertszeit von ¹⁸F (PET-Tracer): ~110 min = 6600 s
- Halbwertszeit von ¹³¹I (Schilddrüsentherapie): ~8 Tage = ~6,9 × 10⁵ s
- Aktionspotentialdauer: ~1–5 ms = 10⁻³ s

Das Beherrschen dieser Größenordnungen ermöglicht eine schnelle Plausibilitätsprüfung im klinischen Alltag: Wenn ein Laborwert "außerhalb des Rahmens" erscheint, könnte ein Einheitenfehler vorliegen.

> **Merke:** Die korrekte Zuordnung von Präfixen und Zehnerpotenzen ist eine der häufigsten Fehlerquellen bei Dosierungsberechnungen. Ein Sprung von Milli (10⁻³) zu Mikro (10⁻⁶) bedeutet Faktor 1000 — bei Medikamenten wie Fentanyl, Digoxin oder Adrenalin kann diese Verwechslung tödlich sein.

## Signifikante Stellen und Rundung

In der Medizin und Naturwissenschaft ist es wichtig, Messergebnisse mit der korrekten Anzahl **signifikanter Stellen** anzugeben. Signifikante Stellen sind alle Ziffern eines Messwertes, die Informationsgehalt haben — führende Nullen zählen nicht.

**Regeln:**
- Alle Nicht-Null-Ziffern sind signifikant: 3,14 hat 3 signifikante Stellen
- Nullen zwischen Nicht-Null-Ziffern sind signifikant: 1,005 hat 4 signifikante Stellen
- Führende Nullen sind NICHT signifikant: 0,0045 hat nur 2 signifikante Stellen (4 und 5)
- Endnullen nach dem Komma sind signifikant: 2,50 hat 3 signifikante Stellen

Beim Rechnen: Das Ergebnis hat so viele signifikante Stellen wie der ungenaueste Eingangswert. In der wissenschaftlichen Notation wird die Anzahl signifikanter Stellen sofort sichtbar: 4,5 × 10⁻⁵ hat 2 signifikante Stellen.

> **Merke:** Klinische Relevanz: Ein Blutzuckerwert von 5,5 mmol/L hat 2 signifikante Stellen. Ihn als 5,500 mmol/L anzugeben würde eine Messgenauigkeit suggerieren, die das Gerät gar nicht liefert.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Was ist 0,000 045 m in wissenschaftlicher Notation?" → 4,5 × 10⁻⁵ m = 45 µm
- "Wie viele µg sind 1 mg?" → 1000 µg (Faktor 10³)
- "Was ist 1 cm² in m²?" → 10⁻⁴ m² (Exponent quadrieren: (10⁻²)² = 10⁻⁴)
- "Was ist 5 mL in m³?" → 5 × 10⁻⁶ m³ (1 mL = 1 cm³ = 10⁻⁶ m³)
- "Was bedeutet M (Mega) vs. m (Milli)?" → M = 10⁶; m = 10⁻³ — Unterschied Faktor 10⁹!

**Achtung — typische Verwechslungen:**
- **cm² vs. m²:** 1 cm² = 10⁻⁴ m² (nicht 10⁻² m²!) — der Exponent wird quadriert
- **mL vs. m³:** 1 mL = 1 cm³ = 10⁻⁶ m³ (nicht 10⁻³ m³!)
- **ng vs. µg vs. mg:** jeder Schritt ist Faktor 1000; ng → µg → mg (÷ 1000 je Schritt)
- **Mega/Milli:** M (Groß) = 10⁶; m (Klein) = 10⁻³ — Groß-/Kleinschreibung entscheidet!
- Mantisse in wissenschaftlicher Notation muss zwischen 1 und 10 liegen: 4,5 × 10⁻⁵ (korrekt), nicht 45 × 10⁻⁶

**Prüfungsrelevante Zahlen/Fakten:**
- Erythrozyt-Durchmesser: ~8 µm; DNA-Doppelhelix-Durchmesser: ~2 nm
- Normalglukose: 3,9–6,1 mmol/L; Normalnatrium: 135–145 mmol/L
- 1 mL = 1 cm³ = 10⁻⁶ m³; 1 L = 1 dm³ = 10⁻³ m³
- Lichtgeschwindigkeit c ≈ 3 × 10⁸ m/s; Avogadro N_A ≈ 6 × 10²³ mol⁻¹

---
## Rechenbeispiele

**Beispiel 1 — Volumenumrechnung Blutprobe:**
PCR-Ansatz: 25 µL Template-DNA + 12,5 µL Mastermix + 2,5 µL Primer = 40 µL Gesamtvolumen.
In mL: 40 µL × 10⁻³ mL/µL = 0,040 mL.
In m³: 40 µL = 40 × 10⁻⁶ L = 40 × 10⁻⁹ m³ = **4 × 10⁻⁸ m³**.

**Beispiel 2 — Wirkstoffmenge aus Plasmakonzentration:**
Gentamicin-Spitzenspiegel: 8 µg/mL. Verteilungsvolumen: 17,5 L (0,25 L/kg × 70 kg).
Gesamtmenge = 8 µg/mL × 17 500 mL = 140 000 µg = 140 mg = **0,14 g**.
Einheitenkette: µg/mL × mL = µg → ÷ 10³ = mg → ÷ 10³ = g.

**Beispiel 3 — Röntgenstrahlung Frequenz in Wellenlänge:**
Röntgenstrahlung f = 3 × 10¹⁸ Hz. Wellenlänge λ = c/f = (3 × 10⁸ m/s) / (3 × 10¹⁸ s⁻¹) = 10⁻¹⁰ m = **0,1 nm = 1 Å** (Ångström). Diese Wellenlänge liegt im Bereich atomarer Abstände — erklärt, warum Röntgenstrahlung Kristallstrukturen auflösen kann.

## Zusammenfassung

- **Präfixe**: f (10⁻¹⁵), p (10⁻¹²), n (10⁻⁹), μ (10⁻⁶), m (10⁻³), c (10⁻²), k (10³), M (10⁶), G (10⁹), T (10¹²)
- **Groß-/Kleinschreibung**: M (Mega, 10⁶) ≠ m (Milli, 10⁻³) — Faktor 10⁹ Unterschied!
- **Wissenschaftliche Notation**: a × 10ⁿ; Multiplikation: Mantissen multiplizieren, Exponenten addieren
- **Flächenumrechnung**: 1 cm² = 10⁻⁴ m² (Quadrat!); 1 mL = 10⁻⁶ m³ (Kubik!)
- **Klinisch**: µg/mL × mL = µg; Verwechslung mg/µg → 1000-fache Über-/Unterdosierung möglich`,

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
        "Faustformel: Je drei Stellen → ein Präfix. 1 km = 1 000 m, 1 mm = 0,001 m, 1 µm = 0,001 mm",
        "Wissenschaftliche Notation: immer eine Stelle vor dem Komma — 3,5 × 10⁴, nicht 35 × 10³",
        "Exponentenregeln: Mult → addieren (10³·10⁴=10⁷), Div → subtrahieren (10⁷/10³=10⁴), Potenz → multiplizieren ((10³)²=10⁶)",
        "1 mL = 1 cm³; 1 L = 1 dm³; 1 m³ = 1000 L — diese Volumengleichheiten auswendig!",
        "Flächenpräfix quadrieren: 1 cm² = 10⁻⁴ m² (nicht 10⁻² m²!) — kubisch: 1 cm³ = 10⁻⁶ m³",
        "Mikro (µ) = 10⁻⁶: Rote Blutkörperchen ~8 µm; DNA-Strang ~2 nm; Zellkern ~6 µm",
        "Klinischer Merker: mg vs. µg Faktor 1000 — bei Adrenalin, Fentanyl, Heparin IMMER Einheit prüfen!",
        "Normalglukose: 3,9–6,1 mmol/L; Natrium: 135–145 mmol/L — medizinische Referenzbereiche in Millimol",
        "Lichtgeschwindigkeit c ≈ 3 × 10⁸ m/s; Avogadro NA ≈ 6 × 10²³ mol⁻¹ — wichtige Naturkonstanten",
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
      content: `## Einleitung

Eine falsche Einheit kann Leben kosten — eine bekannte Katastrophe ereignete sich, als eine Raumsonde zwischen Meilen und Kilometern verwechselt wurde. In der Medizin ist das Gleiche möglich: mg statt µg, mL/h statt µg/kg/min. **Dimensionsanalyse** ist die Methode, Formeln und Berechnungen auf Einheiten-Konsistenz zu prüfen: beide Seiten einer Gleichung müssen dieselbe Dimension haben. Sie dient auch als universelles Werkzeug zur Einheitenumrechnung. Für den MedAT sind Dimensionsanalyse, Einheitenumrechnungen (mmHg↔Pa, kcal↔kJ) und dimensionslose Größen prüfungsrelevant.

## Was ist Dimensionsanalyse?

Die **Dimensionsanalyse** (auch: Einheitenanalyse oder dimensionale Analyse) ist eine mächtige Technik, die auf folgender Grundaussage beruht: **Jede korrekte physikalische Gleichung muss auf beiden Seiten dieselbe Dimension haben.** Wenn man eine Formel aufschreibt und die Einheiten nicht übereinstimmen, ist die Formel falsch — oder es liegt ein Umrechnungsfehler vor. Diese Methode dient gleichzeitig als Werkzeug zur Einheitenumrechnung und als Überprüfungsinstrument für Formeln.

Die **Dimension** einer Größe beschreibt ihre physikalische Natur — unabhängig vom Zahlenwert oder der gewählten Einheit. Die sieben Basisdimensionen entsprechen den sieben SI-Basisgrößen.

Die Dimension einer abgeleiteten Größe wird in eckigen Klammern angegeben:
- [Kraft] = M·L·T⁻² (entspricht Newton)
- [Druck] = M·L⁻¹·T⁻² (entspricht Pascal)
- [Energie] = M·L²·T⁻² (entspricht Joule)
- [Leistung] = M·L²·T⁻³ (entspricht Watt)
- [Impuls] = M·L·T⁻¹ (kg·m/s)

Wichtig: **Dimensionslose Größen** (wie Wirkungsgrad, Brechungsindex, pH-Wert, Reynolds-Zahl) haben keine Dimension. Auch Winkel (in Radiant oder Grad) sind dimensionslos.

## Dimensionsanalyse als Formelprüfung

Angenommen, jemand behauptet, die kinetische Energie sei E_kin = m·v (statt E_kin = ½·m·v²). Die Dimensionsanalyse entlarvt den Fehler:

Linke Seite: [E_kin] = M·L²·T⁻² (Energie)
Rechte Seite: [m·v] = M·L·T⁻¹ (Masse × Geschwindigkeit = Impuls!)

Die Dimensionen stimmen nicht überein — die Formel ist falsch. Das korrekte Ergebnis E_kin = ½·m·v² hat die Dimension [m·v²] = M·L²·T⁻² — korrekt!

Ebenso: Wenn eine Herleitung zum Ergebnis "Meter plus Sekunden" führt, ist garantiert ein Fehler passiert — verschiedene Dimensionen können nicht addiert werden. Diese Regel, bekannt als das **Prinzip der dimensionalen Homogenität**, ist ein unveränderliches Gesetz der Physik.

## Einheitenumrechnung mit dem Kettenmultiplikationsverfahren

Das sicherste Verfahren zur Einheitenumrechnung ist die **Multiplikation mit 1** in Form von Umrechnungsfaktoren. Da 1 km = 1000 m gilt, ist der Faktor (1000 m / 1 km) = 1. Man multipliziert mit so vielen dieser "Einser" wie nötig, bis die gewünschte Einheit erscheint.

**Beispiel: 72 km/h in m/s:**
72 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 72 × 1000/3600 m/s = 20 m/s

Merke: km/h ÷ 3,6 = m/s

**Beispiel Druck: 120 mmHg in Pa:**
1 mmHg = 133,322 Pa
120 mmHg × (133,322 Pa / 1 mmHg) = 15 998,6 Pa ≈ 16 kPa

**Beispiel Energie: 500 kcal in Joule:**
1 kcal = 4,184 kJ = 4184 J
500 kcal × (4184 J / 1 kcal) = 2 092 000 J = 2092 kJ ≈ 2,09 MJ

## Wichtige klinische Umrechnungen

**Temperatur:**
T(°F) = 1,8 × T(°C) + 32
T(°C) = (T(°F) - 32) / 1,8
T(K) = T(°C) + 273,15

Klinisch: 37°C = 310,15 K = 98,6°F. Fieber: > 38°C = > 100,4°F. Hyperthermie: > 40°C = > 104°F.

**Druck:**
1 atm = 101 325 Pa ≈ 760 mmHg ≈ 1,013 bar ≈ 14,7 psi
1 cmH₂O ≈ 98,1 Pa (für Beatmungsdrücke üblich)
1 mmHg ≈ 133,3 Pa

**Energie/Nährwert:**
1 kcal = 4,184 kJ
Grundumsatz: ~1700–2000 kcal/d = ~7000–8400 kJ/d
1 g Kohlenhydrate: ~4 kcal = ~17 kJ
1 g Fett: ~9 kcal = ~37 kJ
1 g Protein: ~4 kcal = ~17 kJ

## Reynolds-Zahl: Dimensionsloser Quotient in der Hämodynamik

In der Physik spielen **dimensionslose Kennzahlen** eine wichtige Rolle. Die **Reynolds-Zahl** Re beschreibt das Strömungsverhalten:

Re = (ρ · v · d) / η

wobei:
- ρ = Dichte (kg/m³)
- v = Strömungsgeschwindigkeit (m/s)
- d = Gefäßdurchmesser (m)
- η = dynamische Viskosität (Pa·s = kg·m⁻¹·s⁻¹)

Dimensionsanalyse von Re:
[Re] = (kg/m³ · m/s · m) / (kg/(m·s)) = (kg·m⁻¹·s⁻¹) / (kg·m⁻¹·s⁻¹) = 1 (dimensionslos)

Re < 2300: laminare Strömung (geordnet, in Schichten — normal in kleinen Blutgefäßen)
Re > 4000: turbulente Strömung (chaotisch — bei Herzfehlern, Aneurysmen als Geräusch hörbar)
2300 < Re < 4000: Übergangsbereich

Klinische Anwendung: Bei Anämie sinkt die Blutviskosität η, Re steigt, Turbulenz entsteht — erklärt Strömungsgeräusche bei Anämie. Bei Stenosen steigt v lokal stark an, Re erhöht sich, Turbulenzen entstehen — hörbar als Herzgeräusch (Systolikum).

## Wirkungsgrad: Ein weiterer dimensionsloser Quotient

Der **Wirkungsgrad** η (eta) = nutzbarer Energieoutput / zugeführter Energieinput ist dimensionslos (Energie/Energie = 1). Der Wirkungsgrad des menschlichen Herzens beträgt ca. 20–25 % — d.h. von der chemischen Energie des ATP werden nur 20–25 % in hydraulische Herzarbeit umgewandelt, der Rest wird als Wärme abgegeben. Das erklärt, warum körperliche Arbeit wärmt.

## Rechenbeispiele

**Beispiel 1 — Dimensionsprüfung einer Formel:**
Ist die Formel v = √(2·g·h) dimensionskonsistent?
[v] = L·T⁻¹. Rechte Seite: [g·h] = (L·T⁻²)·L = L²·T⁻². Also [√(g·h)] = L·T⁻¹ ✓ — die Formel ist korrekt.
Zahlenbeispiel: Sturz aus h = 3 m → v = √(2 × 9,81 × 3) = √58,86 ≈ **7,67 m/s** ≈ 27,6 km/h.

**Beispiel 2 — Blutdruck: mmHg → cmH₂O → Pa:**
Systolischer Blutdruck 140 mmHg.
In cmH₂O: 140 × 1,36 = **190,4 cmH₂O** (Vergleich: Beatmungsdruck PEEP ~5–15 cmH₂O).
In Pascal: 140 × 133,3 = **18 662 Pa ≈ 18,7 kPa**.
Dimensionscheck: mmHg × (Pa/mmHg) = Pa ✓.

**Beispiel 3 — Kalorimetrische Berechnung einer Mahlzeit:**
Mahlzeit: 80 g Kohlenhydrate, 30 g Fett, 25 g Protein.
KH: 80 × 17 kJ/g = 1 360 kJ. Fett: 30 × 37 kJ/g = 1 110 kJ. Protein: 25 × 17 kJ/g = 425 kJ.
Gesamt: 1 360 + 1 110 + 425 = **2 895 kJ ≈ 692 kcal** (÷ 4,184).
Bei Grundumsatz ~7 500 kJ/d deckt diese Mahlzeit ~38,6 % des Tagesbedarfs.

**Beispiel 4 — Reynolds-Zahl der Aorta:**
ρ_Blut = 1060 kg/m³, v = 0,5 m/s, d_Aorta = 0,025 m, η = 3,5 × 10⁻³ Pa·s.
Re = (1060 × 0,5 × 0,025) / (3,5 × 10⁻³) = 13,25 / 0,0035 ≈ **3786** → Übergangsbereich (2300–4000), bei Belastung turbulent.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Welche Dimension hat Druck?" → M·L⁻¹·T⁻² (= kg·m⁻¹·s⁻² = Pa)
- "Welche Dimension hat Energie?" → M·L²·T⁻² (= kg·m²·s⁻² = J)
- "Was ist dimensionslos?" → Reynolds-Zahl, Wirkungsgrad, pH-Wert, Brechungsindex
- "Wie rechnet man 72 km/h in m/s um?" → 72 ÷ 3,6 = 20 m/s (oder × 1000/3600)
- "Was ist 2500 kcal in kJ?" → 2500 × 4,184 = 10 460 kJ ≈ 10,5 MJ

**Achtung — typische Verwechslungen:**
- [m·v] = M·L·T⁻¹ ist Impuls (kg·m/s), NICHT Energie! Energie = M·L²·T⁻² benötigt v²
- [m·a] = N (Kraft), [m·v²] = J (Energie), [m·v] = kg·m/s (Impuls) — alle ähnlich, aber verschieden!
- 1 mmHg ≠ 1 cmH₂O: 1 mmHg = 1,36 cmH₂O (Dichteverhältnis Hg/H₂O = 13,6)
- Dimensionsanalyse bestätigt Formel, schließt aber nicht alle inhaltlichen Fehler aus

**Prüfungsrelevante Zahlen/Fakten:**
- 1 mmHg = 133,3 Pa; 120 mmHg ≈ 16 kPa (normaler systolischer Blutdruck)
- 1 kcal = 4,184 kJ; Grundumsatz ~1800 kcal/d ≈ 7500 kJ/d ≈ 87 W
- 1 km/h = 1/3,6 m/s; 36 km/h = 10 m/s; 72 km/h = 20 m/s
- Reynolds-Zahl Aorta: ~3800 (Übergangsbereich); Re < 2300 laminar; Re > 4000 turbulent
- 1 g Kohlenhydrate: ~17 kJ; 1 g Fett: ~37 kJ; 1 g Protein: ~17 kJ

---
## Zusammenfassung

- **Dimensionsanalyse**: beide Seiten einer Gleichung müssen gleiche Dimension haben → Fehlerprüfung für Formeln
- **Basisdimensionen**: L (Länge), M (Masse), T (Zeit), I (Strom), Θ (Temperatur), N (Stoffmenge), J (Lichtstärke)
- **Einheitenumrechnung**: Kettenmultiplikation — Umrechnungsfaktoren als Brüche (Einheit kürzt sich)
- **Wichtige Umrechnungen**: 1 mmHg = 133,3 Pa; 1 kcal = 4,184 kJ; 1 km/h = 1/3,6 m/s
- **Dimensionslose Größen**: Reynolds-Zahl (Re), Wirkungsgrad (η), pH — keine Einheit, reiner Zahlenwert
- **Klinisch**: Reynolds-Zahl der Aorta ~3800 → Übergangsbereich; Herzwirkungsgrad ~20–25%`,

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
        "Dimensionsanalyse: Beide Seiten einer Gleichung müssen die GLEICHE Dimension haben — sonst ist die Formel falsch",
        "[Kraft] = M·L·T⁻² = kg·m·s⁻²; [Druck] = M·L⁻¹·T⁻² = kg·m⁻¹·s⁻²; [Energie] = M·L²·T⁻² = kg·m²·s⁻²",
        "[Leistung] = M·L²·T⁻³ = kg·m²·s⁻³; [Impuls] = M·L·T⁻¹ = kg·m·s⁻¹",
        "Kettenmultiplikation: Einheiten wie Brüche kürzen. 72 km/h × (1000 m/km) × (1 h/3600 s) = 20 m/s",
        "Wichtige Umrechnung: km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h",
        "1 mmHg ≈ 133 Pa; 120 mmHg ≈ 16 kPa (normaler Blutdruck); 1 atm ≈ 760 mmHg ≈ 101 325 Pa",
        "Temperatur: T(K) = T(°C) + 273,15; T(°F) = 1,8 × T(°C) + 32; 37°C = 310,15 K = 98,6°F",
        "1 kcal = 4,184 kJ; Grundumsatz ~1800 kcal/d ≈ 7500 kJ/d; 1 g Fett liefert ~9 kcal = ~37 kJ",
        "Reynolds-Zahl Re < 2300: laminar; Re > 4000: turbulent — dimensionslos, Einheiten kürzen sich heraus",
        "pH-Wert, Wirkungsgrad, Brechungsindex, Reynolds-Zahl: dimensionslose Größen ohne Einheit",
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
      content: `## Einleitung

Warum bricht ein Knochen beim Sturz? Warum muss man für eine effektive Herzdruckmassage stark drücken? Die Antworten liefert die **Newtonsche Mechanik**: Drei Gesetze, die Bewegung unter Krafteinfluss vollständig beschreiben. Kinematik beschreibt die Bewegung (ohne Ursachen), Dynamik erklärt sie mit Kräften. Für den MedAT sind die drei Newtonschen Gesetze, freier Fall, Dezelerationstrauma und die Grundbegriffe der Kinematik prüfungsrelevant.

## Newtonsche Gesetze und Kinematik

Die klassische Mechanik ist das Fundament der Physik und beschreibt, wie sich Körper unter dem Einfluss von Kräften bewegen. Isaac Newton formulierte im 17. Jahrhundert drei Grundgesetze, die für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit bis heute uneingeschränkt gültig sind. Diese Gesetze sind keine abstrakten Theorien — sie erklären, warum Knochen brechen, wie das Herz Blut pumpt und weshalb Venenpunktionen eine bestimmte Kraft erfordern.

## Kinematik: Bewegung ohne Kräfte

Die Kinematik beschreibt Bewegung rein geometrisch, ohne die Ursachen zu hinterfragen. Grundgrößen sind Ort (s), Zeit (t), Geschwindigkeit (v) und Beschleunigung (a).

**Gleichförmige Bewegung:** Bei konstanter Geschwindigkeit gilt s = v · t. Der Weg ist proportional zur Zeit. Im v-t-Diagramm ist das eine Horizontale; die Fläche unter der Kurve ergibt den zurückgelegten Weg.

**Gleichmäßig beschleunigte Bewegung:** Wenn eine konstante Kraft auf einen Körper wirkt, gilt a = const. Die Geschwindigkeit wächst linear: v(t) = v₀ + a · t. Der Weg folgt einer Parabelgleichung: s(t) = s₀ + v₀·t + ½·a·t². Der freie Fall ist der Spezialfall mit a = g ≈ 9,81 m/s² (Erdbeschleunigung). Ein Körper, der aus der Ruhe fällt, erreicht nach 1 s eine Geschwindigkeit von 9,81 m/s und hat 4,9 m zurückgelegt.

**Vektorielle Darstellung:** Geschwindigkeit und Beschleunigung sind Vektoren — sie haben Betrag (Skalar) und Richtung. Bei schiefer Wurf-Bewegung zerlegt man die Bewegung in horizontale (v_x = const) und vertikale Komponente (v_y = v₀y − g·t). Die Bahnkurve ist eine Parabel.

**Relativbewegung:** Geschwindigkeiten addieren sich vektoriell. Wenn ein Läufer mit 4 m/s in einem Zug fährt, der selbst 30 m/s schnell fährt, ist seine Geschwindigkeit relativ zur Erde 34 m/s (in Fahrtrichtung) oder 26 m/s (entgegen). Dieses Superpositionsprinzip gilt für alle Bewegungsgrößen.

## Das erste Newtonsche Gesetz — Trägheitsgesetz

Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn wirkt. Trägheit (lat. inertia) bedeutet Widerstandsfähigkeit gegen Zustandsänderung. Die Trägheit ist proportional zur Masse: Ein 80-kg-Mensch hat die doppelte Trägheit eines 40-kg-Kindes.

Im klinischen Kontext ist das Trägheitsgesetz bei Dezelerationstraumen entscheidend: Bei einem Frontalaufprall bremst das Fahrzeug schlagartig ab, aber Organe (Leber, Milz, Aorta) bewegen sich aufgrund ihrer Trägheit weiter vorwärts. Dabei können Gefäßstiele abreißen — besonders die Aorta descendens ist anfällig für Transektionen, weil sie an der Wirbelsäule fixiert ist, während der Aortenbogen sich weiter vorwärts bewegt.

## Das zweite Newtonsche Gesetz — Aktionsprinzip

F = m · a ist das wichtigste Gesetz der Mechanik. Eine Kraft von 1 Newton (N = kg·m/s²) beschleunigt 1 kg um 1 m/s². Das Gesetz ist vektoriell: Die Beschleunigung zeigt in dieselbe Richtung wie die resultierende Kraft.

Aus F = m·a folgt direkt: Größere Masse → geringere Beschleunigung bei gleicher Kraft. Das erklärt, warum ein schwerer Patient schwieriger zu reanimieren ist — bei identischer Herzmassagekraft ist die erzeugte Thoraxkompression (Beschleunigung des Sternums) geringer. Die optimale Drucktiefe erfordert daher eine angepasste Kraft.

**Superpositionsprinzip:** Mehrere Kräfte überlagern sich zur Gesamtkraft F_res = F₁ + F₂ + ... (Vektorsumme). Im Gleichgewicht ist F_res = 0. Das Auflösen dieser Vektorgleichungen (Komponentenform: F_x = 0, F_y = 0) ist das Werkzeug der Statik.

## Das dritte Newtonsche Gesetz — Reaktionsprinzip (actio = reactio)

Wenn Körper A eine Kraft auf Körper B ausübt, übt Körper B gleichzeitig eine gleich große, aber entgegengesetzte Kraft auf Körper A aus. Beide Kräfte bilden ein Aktions-Reaktions-Paar, wirken aber auf verschiedene Körper — sie heben sich daher nicht auf!

Beim Laufen: Der Fuß drückt die Erde nach hinten-unten (Aktionskraft). Die Erde drückt den Fuß nach vorne-oben (Reaktionskraft = Bodenreaktionskraft). Nur diese Reaktionskraft beschleunigt den Menschen vorwärts. Bei der Injektion: Die Spritze drückt auf die Haut (Aktionskraft), die Haut drückt auf die Spritze zurück (Reaktionskraft) — der Arzt muss diese überwinden.

## Freie und erzwungene Schwingungen

Ein Pendel schwingt mit seiner Eigenfrequenz f₀ = (1/2π)·√(g/l). Resonanz tritt auf, wenn die Anregungsfrequenz gleich der Eigenfrequenz ist — dann wächst die Amplitude dramatisch. Im Körper: Knochen und Gelenke haben mechanische Eigenfrequenzen. Vibrationstraining nutzt Resonanzeffekte zur Muskelstimulation.

## Rechenbeispiele

**Beispiel 1 — Bremskraft bei Auffahrunfall:**
Auto (m = 1200 kg) bremst von 50 km/h (= 13,9 m/s) auf 0 in 0,5 s (Kollision).
Verzögerung: a = Δv/Δt = 13,9 / 0,5 = **27,8 m/s²** ≈ 2,8 g.
Kraft auf Insasse (80 kg): F = 80 × 27,8 = **2224 N** ≈ 227 kgf — ohne Gurt wirkt diese Kraft auf Thorax/Kopf.
Mit Airbag (Δt ≈ 0,15 s): a = 13,9/0,15 = 92,7 m/s² → F = 7416 N, aber über große Fläche verteilt → Druck reduziert.

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
## MedAT-Fokus

**Häufige Fragen:**
- "Was besagt das 1. Newtonsche Gesetz?" → Kein Nettokraft → keine Zustandsänderung (Trägheit)
- "Was ist die Einheit der Kraft?" → Newton: N = kg·m/s² (abgeleitet, keine Basiseinheit!)
- "Wie groß ist g?" → 9,81 m/s² ≈ 10 m/s²; nach 1 s freiem Fall: v = 10 m/s, s = 5 m
- "Was gilt für actio = reactio?" → Gleich groß, entgegengesetzt, verschiedene Körper — heben sich NICHT auf
- "Wie berechnet man den Bremsweg?" → v² = v₀² − 2·a·s → a = v₀²/(2s)

**Achtung — typische Verwechslungen:**
- actio = reactio: Beide Kräfte wirken auf VERSCHIEDENE Körper — deshalb heben sie sich nicht auf!
- v(t) = v₀ + at (Geschwindigkeit, linear) vs. s(t) = v₀t + ½at² (Weg, parabolisch) — nicht verwechseln
- Freier Fall: a = g (Beschleunigung), nicht F = g (g ist keine Kraft, sondern m/s²)
- Trägheitsgesetz: Körper im freien Weltraum ohne Krafteinwirkung bewegt sich GERADLINIG mit konstanter Geschwindigkeit — er bleibt nicht automatisch stehen

**Prüfungsrelevante Zahlen/Fakten:**
- g = 9,81 m/s² ≈ 10 m/s²; freier Fall 1 s: v = 9,8 m/s, s = 4,9 m
- CPR: ~400–500 N Druckkraft, 5–6 cm Kompressionstiefe erforderlich
- Airbag-Prinzip: längere Bremsstrecke → kleinere Verzögerung a → kleinere Kraft F = m·a
- Dezelerationstrauma: Aorta descendens besonders gefährdet (am Aortenbogen fixiert)

---
## Zusammenfassung

- **1. Newtonsches Gesetz (Trägheit)**: kein Nettokraft → kein Δv; Dezelerationstrauma: Organe bewegen sich weiter
- **2. Newtonsches Gesetz**: F = m·a; 1 N = 1 kg·m/s²; größere Masse → geringere Beschleunigung bei gleicher Kraft
- **3. Newtonsches Gesetz**: actio = reactio; Kräfte immer paarweise an verschiedenen Körpern
- **Gleichförmig beschleunigte Bewegung**: v(t) = v₀ + a·t; s(t) = v₀·t + ½·a·t²; freier Fall: a = g = 9,81 m/s²
- **Freier Fall**: v = √(2gh); nach 1 s: v ≈ 9,8 m/s, s = 4,9 m
- **Klinisch**: Airbag verlängert Bremsstrecke → a↓ → F↓; CPR: ~400–500 N Druckkraft erforderlich`,
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
          heading: "Klinische Anwendung: Dezelerationstrauma",
          text: "Bei plötzlichem Abbremsen (Autounfall, Sturz) wirkt die Trägheit: Organe setzen ihre Bewegung fort, während das Skelett aufgehalten wird. Besonders gefährdet sind: (1) Aorta descendens bei Aortenbogenverankerung, (2) Leber- und Milzstiele, (3) Gehirn (Contrecoup-Verletzung). Das zweite Newtonsche Gesetz erklärt, warum Körperschutz (Airbag, Helm) die Bremsstrecke verlängert und damit die Kraft F = m·a reduziert.",
          merksatz:
            "Airbag-Prinzip: Längere Bremsstrecke → geringere Verzögerung a → geringere Kraft F = m·a auf den Körper.",
        },
      ],
      diagram: "newton-forces",

      merksätze: [
        "Trägheitsgesetz: Kein F_res → kein Δv. Alles bleibt so, wie es ist.",
        "F = m·a: Kraft ist Masse mal Beschleunigung. 1 N = 1 kg·m/s².",
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
      diagram: "coordinate-system",
      content: `## Einleitung

Warum bricht ein Knochen beim Sturz aus einer bestimmten Höhe? Warum überträgt ein Projektil seine gesamte kinetische Energie auf Gewebe? Warum leistet das Herz täglich ~96 kJ mechanische Arbeit? All das erklären die **Erhaltungssätze**: Energie, Impuls und Drehimpuls bleiben in abgeschlossenen Systemen konstant. Diese Prinzipien sind universell und fundamental. Für den MedAT sind Energieerhaltung, kinetische/potenzielle Energie, Impuls, Herzarbeit und Wirkungsgrad prüfungsrelevant.

## Erhaltungssätze — Energie, Impuls, Drehimpuls

Erhaltungssätze gehören zu den tiefsten Prinzipien der Physik. Sie besagen, dass bestimmte physikalische Größen in einem abgeschlossenen System konstant bleiben — unabhängig von den internen Vorgängen. Die drei wichtigsten Erhaltungssätze der Mechanik sind: Energieerhaltung, Impulserhaltung und Drehimpulserhaltung. Sie folgen aus fundamentalen Symmetrieprinzipien (Noether-Theorem): Energieerhaltung aus Zeitsymmetrie, Impulserhaltung aus Translationssymmetrie, Drehimpulserhaltung aus Rotationssymmetrie.

## Impuls und Impulserhaltung

Der Impuls p = m · v ist das Produkt aus Masse und Geschwindigkeit (Einheit: kg·m/s = N·s). Impuls ist ein Vektor — Betrag und Richtung sind entscheidend. Der Kraftstoß J = F · Δt = Δp beschreibt die Änderung des Impulses durch eine Kraft über eine Zeitspanne. Daraus folgt das zweite Newtonsche Gesetz in allgemeinerer Form: F = dp/dt.

Impulserhaltungssatz: In einem abgeschlossenen System (keine äußeren Kräfte) bleibt der Gesamtimpuls konstant: p_ges = Σmᵢ·vᵢ = const. Das gilt unabhängig davon, welche inneren Kräfte wirken (Explosionen, Kollisionen, chemische Reaktionen).

Anwendungen: Bei einem elastischen Stoß (Billardkugeln) sind sowohl Impuls als auch kinetische Energie erhalten. Bei einem inelastischen Stoß (Knetmasse-Kollision) ist nur der Impuls erhalten — kinetische Energie wird in Wärme, Verformungsenergie umgewandelt. Beim vollkommen unelastischen Stoß vereinigen sich beide Körper: m₁·v₁ + m₂·v₂ = (m₁+m₂)·v'. In der Medizin: Ballistisches Trauma — ein Projektil überträgt seinen Impuls auf das Gewebe: F·Δt = Δp. Hohle Projektile (Deformationsgeschosse) verlängern den Kontaktzeitraum und erhöhen die Gewebedeformation.

## Arbeit, Energie und der Energieerhaltungssatz

Mechanische Arbeit W = F · s · cos(θ) ist das Produkt aus Kraft, Weg und dem Kosinus des Winkels zwischen Kraft- und Wegrichtung (Einheit: Joule, J = N·m = kg·m²/s²). Nur die Kraftkomponente parallel zum Weg leistet Arbeit. Eine Kraft senkrecht zur Bewegungsrichtung (z. B. Zentripetalkraft) leistet keine Arbeit!

**Kinetische Energie** (Bewegungsenergie): E_kin = ½·m·v². Sie ist proportional zum Quadrat der Geschwindigkeit — bei doppelter Geschwindigkeit viermal so viel kinetische Energie. Das erklärt, warum Hochgeschwindigkeitsprojektile so verheerend sind und warum der Bremsweg bei Kraftfahrzeugen quadratisch mit der Geschwindigkeit wächst.

**Potenzielle Energie** (Lageenergie): E_pot = m·g·h. Die potenzielle Energie ist eine Zustandsgröße — sie hängt nur von der Höhe h über einem gewählten Referenzniveau ab, nicht vom zurückgelegten Weg.

**Energieerhaltungssatz:** In einem abgeschlossenen System ohne Reibung gilt: E_kin + E_pot = const. Energie kann zwischen kinetischer und potenzieller Form umgewandelt werden, aber die Gesamtenergie bleibt konstant. Mit Reibung gilt: Die mechanische Energie nimmt ab, aber die freigesetzte Wärme kompensiert exakt den Verlust — die Gesamtenergie (thermisch + mechanisch) bleibt erhalten.

## Leistung und Wirkungsgrad

Leistung P = W/t = F·v (Einheit: Watt, W = J/s). Leistung ist Arbeit pro Zeit. Ein Mensch kann kurzfristig etwa 1000 W (1 kW) leisten, im Dauerbetrieb etwa 100–200 W. Das Herz pumpt täglich ca. 8000 l Blut und leistet dabei eine mechanische Arbeit von ca. 1 J pro Herzschlag (70 Schläge/min → ca. 1 W mechanische Herzleistung, tatsächlich benötigt das Herz ca. 6 W wegen des Wirkungsgrades des Herzmuskelgewebes von etwa 17 %).

Wirkungsgrad η = P_nutz / P_ges · 100 %. Der menschliche Körper hat beim Laufen einen Wirkungsgrad von ca. 20–25 % — der Rest wird als Wärme abgegeben.

> **Merke:** Die Energieerhaltung ist das universellste Prinzip der Physik — Energie kann weder erzeugt noch zerstört, sondern nur umgewandelt werden. In biologischen Systemen: chemische Energie (ATP) → mechanische Arbeit (Muskelkontraktion) + Wärme. Der Erste Hauptsatz der Thermodynamik ist nichts anderes als die Energieerhaltung, angewandt auf Wärmeprozesse.

## Federkraft und elastische Energie

In der Biomechanik spielen elastische Strukturen eine zentrale Rolle. Die **Federkraft** folgt dem Hookeschen Gesetz: F = -k·x, wobei k die Federkonstante (N/m) und x die Auslenkung aus der Ruheposition ist. Die in einer gedehnten Feder gespeicherte elastische Energie beträgt E_el = ½·k·x². Sehnen und Bänder verhalten sich näherungsweise wie Federn — sie speichern bei Dehnung Energie, die bei Entlastung wieder freigegeben wird. Die Achillessehne speichert beim Laufen pro Schritt ca. 35 J elastische Energie und gibt sie beim Abstoß zurück — ein wichtiger Beitrag zur Laufeffizienz. Auch die Aortenwand fungiert als elastisches Reservoir (Windkesselfunktion): Während der Systole dehnt sich die Aorta und speichert Energie, die während der Diastole den Blutfluss aufrechterhält.

## Drehimpuls und Rotationsenergie

Drehimpuls L = I · ω, wobei I das Trägheitsmoment (kg·m²) und ω die Winkelgeschwindigkeit (rad/s) ist. Drehimpulserhaltung: In Abwesenheit äußerer Drehmomente bleibt L = const. Der Pirouetten-Effekt: Wenn ein Eiskunstläufer die Arme anzieht (verringert I), erhöht sich ω — bei konstantem L. Rotationsenergie: E_rot = ½·I·ω². Im Körper bestimmt das Trägheitsmoment der Gliedmaßen die Energieeffizienz der Bewegung.

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
Bei η = 17 %: metabolischer Verbrauch = 96/0,17 ≈ **565 kJ/Tag ≈ 135 kcal/Tag**.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Was ist E_kin bei doppelter Geschwindigkeit?" → 4-fach (E_kin ~ v²)
- "Welche Erhaltungsgröße gilt immer, auch beim inelastischen Stoß?" → Impuls (nicht kinetische Energie!)
- "Wie viel Arbeit leistet das Herz pro Schlag?" → ~1 J; mechanische Leistung ~1 W; täglich ~96 kJ
- "Was ist der Unterschied zwischen Arbeit und Leistung?" → Arbeit = F·s (J); Leistung = W/t (W = J/s)
- "Wann leistet eine Kraft keine Arbeit?" → Wenn Kraft senkrecht zum Weg steht (cos 90° = 0)

**Achtung — typische Verwechslungen:**
- Impuls p = mv (Vektor, N·s) ≠ kinetische Energie E = ½mv² (Skalar, J) — verschiedene Größen!
- Kraftstoß J = F·Δt = Δp, beschreibt Impulsänderung — NICHT Energieänderung
- Elastischer Stoß: Impuls UND kinetische Energie erhalten; inelastischer: NUR Impuls erhalten
- Arbeit W = F·s·cosα: senkrechte Kraft (α = 90°) → cos 90° = 0 → keine Arbeit geleistet (z.B. Zentripetalkraft)
- Federkraft F = −k·x (negatives Vorzeichen = Rückstellkraft!); elastische Energie E_el = ½·k·x²

**Prüfungsrelevante Zahlen/Fakten:**
- E_kin = ½mv²; E_pot = mgh; Aufprallgeschwindigkeit: v = √(2gh)
- Herzarbeit: ~1 J/Schlag; P_mech ≈ 1 W; Wirkungsgrad η ≈ 17 % → metabolisch ~7 W nötig
- Wirkungsgrad Mensch beim Laufen: ~20–25 % (Rest = Wärme)
- Achillessehne speichert ~35 J elastische Energie pro Laufschritt

---
## Zusammenfassung

- **Kinetische Energie**: E_kin = ½mv²; **Potenzielle Energie**: E_pot = mgh; Erhaltung (ohne Reibung): E_kin + E_pot = const
- **Impuls**: p = m·v (Vektor, kg·m/s); **Kraftstoß**: J = F·Δt = Δp; Impulserhaltung in abgeschlossenen Systemen
- **Elastischer Stoß**: kinetische Energie erhalten; **inelastischer Stoß**: Energie in Wärme/Deformation umgewandelt
- **Arbeit**: W = F·s·cosα (J); **Leistung**: P = W/t (W = J/s); **Wirkungsgrad**: η = P_nutz/P_zu
- **Herzarbeit**: W ≈ p·ΔV ≈ 0,93 J/Schlag; P_mech ≈ 1 W; η ≈ 17 % → metabolisch ~7 W
- **Aufprallgeschwindigkeit**: v = √(2gh) (reibungsfreier Fall)`,
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
        "Impuls p = m·v: Vektorgröße in kg·m/s. Impulserhaltung in abgeschlossenen Systemen.",
        "Kraftstoß J = F·Δt = Δp. Längere Einwirkzeit → geringere Spitzenkraft (Airbag-Prinzip).",
        "E_kin = ½·m·v²: Bei doppelter Geschwindigkeit viermal so viel kinetische Energie.",
        "E_pot = m·g·h: Lageenergie abhängig von Höhe, Masse und Erdbeschleunigung.",
        "Energieerhaltung: E_kin + E_pot = const (ohne Reibungsverluste).",
        "Arbeit W = F·s·cos(θ): Senkrechte Kraft zum Weg → keine Arbeit geleistet.",
        "Leistung P = W/t = F·v: Einheit Watt (W = J/s).",
        "Elastischer Stoß: Impuls UND kinetische Energie erhalten.",
        "Inelastischer Stoß: NUR Impuls erhalten, kinetische Energie nimmt ab.",
        "Drehimpulserhaltung: I·ω = const → kleineres I → größeres ω (Pirouetteneffekt).",
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
      title: "Statik, Druck und Hydrodynamik",
      stichworte: [
        "Gleichgewicht",
        "Drehmoment",
        "Hebelgesetz",
        "Druck",
        "Pascal-Prinzip",
        "hydrostatischer Druck",
        "Auftrieb",
        "Bernoulli-Gleichung",
        "Kontinuitätsgleichung",
        "Poiseuille-Gesetz",
        "Viskosität",
        "laminare Strömung",
      ],
      diagram: "newton-forces",
      content: `## Einleitung

Warum braucht der Bizeps 700 N, um 10 kg zu heben? Warum kollabiert eine Koronarstenose den Blutfluss auf ein Sechzehntel? Warum ist der Blutdruck am Fuß im Stehen um 100 mmHg höher als am Herzen? Statik erklärt Kräftegleichgewichte (Hebelprinzip im Skelett), Hydrodynamik den Blutfluss. Für den MedAT sind Drehmoment, Hebelgesetz, Poiseuille-Gesetz (Q ~ r⁴), Bernoulli-Gleichung, Kontinuität und Reynolds-Zahl prüfungsrelevant.

## Statik, Druck und Hydrodynamik

Die Statik untersucht Körper und Systeme im Gleichgewicht, während die Hydrodynamik die Bewegung von Flüssigkeiten und Gasen beschreibt. Beide Gebiete sind für die Medizin von zentraler Bedeutung: Statik erklärt die Mechanik des Bewegungsapparates (Hebelprinzipien im Skelett), Hydrodynamik beschreibt den Blutfluss und die Funktion der Lunge.

## Statik und Gleichgewichtsbedingungen

Ein Körper befindet sich im mechanischen Gleichgewicht, wenn zwei Bedingungen gleichzeitig erfüllt sind:
1. **Kräftegleichgewicht:** Die Summe aller Kräfte (Vektoren) ist null: ΣF = 0. Damit ist Translationsgleichgewicht gewährleistet.
2. **Momentengleichgewicht:** Die Summe aller Drehmomente um jeden beliebigen Punkt ist null: ΣM = 0. Damit ist Rotationsgleichgewicht gewährleistet.

**Drehmoment:** M = F · d, wobei d der senkrechte Hebelarm (Abstand von der Drehachse zur Wirkungslinie der Kraft) ist. Einheit: N·m. Ein großer Hebelarm ermöglicht es, mit kleiner Kraft ein großes Drehmoment zu erzeugen — das ist das Hebelgesetz.

Im Körper: Der Unterarm ist ein einarmiger Hebel (Typ 3). Der Bizeps (Kraft F_B) wirkt ca. 5 cm vom Ellenbogengelenk (Drehachse) entfernt. Eine Last von 10 kg (100 N) in der Hand wirkt ca. 35 cm von der Drehachse. Momentengleichgewicht: F_B · 0,05 = 100 · 0,35 → F_B = 700 N. Der Muskel muss eine siebenmal größere Kraft aufwenden als die Last — das ist anatomisch nachteilig, aber ermöglicht schnelle, weite Bewegungen (Geschwindigkeitshebel).

## Druck in Flüssigkeiten

Druck p = F/A (Einheit: Pascal, Pa = N/m²). Der Druck wirkt in alle Richtungen gleich (Pascal'sches Prinzip). Der hydrostatische Druck in einer Flüssigkeit der Dichte ρ in Tiefe h beträgt p = ρ·g·h. Im menschlichen Körper: Der arterielle Blutdruck (systolisch ca. 120 mmHg) überwindet den peripheren Gefäßwiderstand und treibt das Blut durch den Kreislauf. Der venöse Druck (ca. 5 mmHg) ist viel niedriger — Klappen verhindern Rückfluss.

**Auftrieb:** Ein in eine Flüssigkeit eingetauchter Körper erfährt eine Auftriebskraft F_A = ρ_Fl · g · V_verdrängt (Archimedisches Prinzip). Für den menschlichen Körper (Dichte ca. 0,98 kg/dm³ im Wasser) ist der Auftrieb fast vollständig gleich dem Gewicht — das ermöglicht therapeutisches Schwimmen und Rehabilitationsübungen im Wasser.

## Strömungslehre: Kontinuitätsgleichung und Bernoulli

**Kontinuitätsgleichung:** In einer inkompressiblen, reibungsfreien Strömung gilt: A₁·v₁ = A₂·v₂ (Volumenstrom Q = A·v = const). Wenn der Querschnitt kleiner wird, steigt die Strömungsgeschwindigkeit. Im Körper: In der Aorta (Durchmesser ca. 2,5 cm, Querschnitt ca. 5 cm²) fließt Blut mit ca. 20 cm/s. In den Kapillaren (Gesamtquerschnitt ca. 5000 cm², 1000-fach größer) fließt Blut nur ca. 0,03 cm/s — optimal für den Stoffaustausch.

**Bernoulli-Gleichung:** ½·ρ·v² + ρ·g·h + p = const. Dies ist der Energieerhaltungssatz für Strömungen. An engen Stellen (hohe Geschwindigkeit) ist der Druck niedrig, an weiten Stellen (geringe Geschwindigkeit) ist der Druck hoch. Anwendung: Bei einer Arterienstenose steigt die Strömungsgeschwindigkeit — der Druck fällt hinter der Stenose ab (poststenotischer Druckabfall).

**Poiseuille-Gesetz (reibungsbehaftete Strömung):** Der Volumenstrom durch ein zylindrisches Gefäß ist Q = (π·r⁴·Δp)/(8·η·l). Der Radius geht mit der vierten Potenz ein! Eine Halbierung des Gefäßradius reduziert den Volumenstrom auf 1/16 des ursprünglichen Wertes. Das erklärt, warum Koronarstenosen so kritisch sind: Eine 50%ige Radiusreduktion reduziert den Blutfluss auf 6,25 % des Normalen.

## Viskosität und Strömungstypen

Viskosität η (Einheit: Pa·s) beschreibt den inneren Reibungswiderstand einer Flüssigkeit. Wasser: η ≈ 10⁻³ Pa·s; Blut: η ≈ 3–4·10⁻³ Pa·s (nicht-newtonsches Fluid — abhängig von Hämatokrit und Scherrate). Bei laminarer Strömung (Reynoldszahl Re < 2300) fließen Flüssigkeitsschichten parallel ohne Vermischung. Bei turbulenter Strömung (Re > 4000) entstehen Wirbel — Herzgeräusche (Turbulenzen an verengten Klappen) sind klinisch diagnostisch wichtig.

> **Merke:** Der **totale periphere Widerstand** (TPR) des Kreislaufs lässt sich analog zum Ohmschen Gesetz formulieren: Δp = Q · R_ges, wobei R_ges = 8ηl/(πr⁴) nach Poiseuille. Da die Arteriolen den größten Widerstand liefern und ihren Radius aktiv regulieren (Vasokonstriktion/Vasodilatation), sind sie der wichtigste Stellhebel für den Blutdruck.

## Oberflächenspannung und Kapillarität

Die **Oberflächenspannung** σ (Einheit: N/m) entsteht durch intermolekulare Anziehungskräfte an der Grenzfläche einer Flüssigkeit. Wasser hat eine Oberflächenspannung von σ ≈ 0,073 N/m bei 20 °C. In der Lunge ist Oberflächenspannung klinisch zentral: Die Alveolen sind mit einem dünnen Flüssigkeitsfilm bedeckt, dessen Oberflächenspannung die Alveolen zum Kollaps bringen würde. **Surfactant** (surface-active agent), ein Phospholipid-Gemisch, reduziert die Oberflächenspannung in den Alveolen auf ca. 0,001–0,025 N/m und verhindert so den Alveolarkollaps (Atelektase). Frühgeborene vor der 34. Schwangerschaftswoche haben häufig einen Surfactant-Mangel, was zum **Atemnotsyndrom des Neugeborenen** (IRDS) führt.

Die **Kapillarität** (Kapillarwirkung) beschreibt das Aufsteigen oder Absenken von Flüssigkeiten in engen Röhren. Die Steighöhe h = 2σ·cos(θ)/(ρ·g·r), wobei θ der Kontaktwinkel ist. Im Körper spielt Kapillarität beim Tränenfilm des Auges und bei der Verteilung von Gewebeflüssigkeit in engen Gewebespalten eine Rolle.

## Rechenbeispiele

**Beispiel 1 — Bizepskraft beim Tragen (Hebelgesetz):**
Last in der Hand: 5 kg (= 49 N). Abstand Hand↔Ellenbogen: 35 cm. Bizepsansatz: 5 cm vom Ellenbogen.
Momentengleichgewicht: F_B × 0,05 = 49 × 0,35 → F_B = 17,15 / 0,05 = **343 N** ≈ 35 kgf.
Der Bizeps muss das Siebenfache der Last aufbringen — erklärt Sehnenverletzungen bei schwerem Heben.

**Beispiel 2 — Koronarstenose (Poiseuille-Gesetz):**
Normale Koronararterie: r = 1,5 mm. Stenose reduziert Radius auf r' = 1,0 mm (33 % Reduktion).
Q'/Q = (r'/r)⁴ = (1,0/1,5)⁴ = (0,667)⁴ = **0,198 ≈ 20 %** des normalen Flusses!
Nur 33 % Radiusverengung → 80 % Flussreduktion. Bei 50 % Stenose: (0,5)⁴ = **6,25 %** → kritische Ischämie.

**Beispiel 3 — Hydrostatischer Druck im Stehen:**
Blutdruckdifferenz Kopf↔Fuß: Höhe h = 1,7 m, ρ_Blut = 1060 kg/m³.
Δp = ρgh = 1060 × 9,81 × 1,7 = **17 677 Pa ≈ 133 mmHg**.
Am Fuß: 120 + 133 ≈ **253 mmHg** systolisch. Am Kopf: 120 - 25 ≈ **95 mmHg** (30 cm über Herz).
Klinisch: Bei längerem Stehen → venöse Pooling in Beinen → orthostatische Hypotonie → Schwindel.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Was besagt das Poiseuille-Gesetz?" → Q = π·r⁴·Δp/(8·η·l); Q ~ r⁴ — Radius ist der dominierende Parameter
- "Was folgt aus der Kontinuitätsgleichung?" → A₁·v₁ = A₂·v₂; enger Querschnitt → höhere Strömungsgeschwindigkeit
- "Was bedeutet Re < 2300?" → Laminare Strömung (geordnet, schichtenweise, geräuschlos)
- "Wie berechnet man Bizepskraft für 10 kg Last (Hebelarm 35 cm, Ansatz 5 cm)?" → F_B × 5 = 100 × 35 → F_B = 700 N
- "Was erklärt Bernoulli bei Stenosen?" → Enger Querschnitt → v↑ → p↓ (poststenotischer Druckabfall)

**Achtung — typische Verwechslungen:**
- Poiseuille: Q ~ r⁴ (4. Potenz!), NICHT Q ~ r²! Radius halbieren → Fluss auf 1/16 (nicht 1/4)
- Bernoulli: Enge Stelle → Geschwindigkeit↑, Druck↓ — nicht umgekehrt!
- Drehmoment M = F·d (d = senkrechter Hebelarm!) — wenn die Kraft nicht senkrecht zum Hebel steht, gilt nur die senkrechte Komponente
- Turbulenz entsteht bei HOHEM Re (> 4000), nicht bei niedrigem
- Archimedisches Prinzip: Auftrieb = Gewicht des VERDRÄNGTEN Fluids (nicht des Körpers!)

**Prüfungsrelevante Zahlen/Fakten:**
- Poiseuille: 50 % Radiusreduktion → Fluss auf (0,5)⁴ = 6,25 %; 33 % Reduktion → (0,67)⁴ ≈ 20 %
- Hydrostatischer Druckunterschied Kopf↔Fuß im Stehen: ~130 mmHg
- Kapillaren: Gesamtquerschnitt ~1000× größer als Aorta → Blutfluss ~1000× langsamer
- Bizeps-Hebel: Typ-3-Hebel, Kraftuntersetzung 1:7 → für 10 kg Last ~700 N Muskelkraft
- Surfactant verhindert Alveolarkollaps; fehlt bei Frühgeborenen < 34. SSW → IRDS

---
## Zusammenfassung

- **Gleichgewicht**: ΣF = 0 UND ΣM = 0; **Drehmoment**: M = F·d (N·m)
- **Hebelgesetz**: F₁·d₁ = F₂·d₂; Muskelansatz nahe Gelenk → große Muskelkraft erforderlich
- **Druck**: p = F/A (Pa); **hydrostatisch**: p = ρ·g·h; am Fuß im Stehen +100 mmHg
- **Poiseuille**: Q = π·r⁴·Δp/(8·η·l); **Q ~ r⁴** → Radius halbiert = Fluss auf 1/16
- **Kontinuität**: A₁·v₁ = A₂·v₂; Kapillaren (großer Gesamtquerschnitt) → langsamer Fluss
- **Bernoulli**: ½ρv² + ρgh + p = const; Stenose → v↑ → p↓ (Venturi-Effekt)
- **Reynolds**: Re = ρvd/η; < 2300 laminar; > 4000 turbulent → Herzgeräusche bei Stenosen`,
      lernziele: [
        "Die zwei Gleichgewichtsbedingungen (Kräfte- und Momentengleichgewicht) anwenden",
        "Drehmomente berechnen und das Hebelgesetz auf den Bewegungsapparat anwenden",
        "Die Bernoulli-Gleichung und Kontinuitätsgleichung auf den Blutkreislauf anwenden",
        "Das Poiseuille-Gesetz erklären und die Bedeutung des Radius⁴-Gesetzes für Gefäßstenosen verstehen",
        "Laminare und turbulente Strömung unterscheiden und die Reynoldszahl einordnen",
      ],
      sections: [
        {
          heading: "Hebelgesetz und Muskelkräfte",
          text: "Ein Hebel im Gleichgewicht erfüllt: F₁·d₁ = F₂·d₂ (Drehmomentgleichgewicht). Im Körper sind Muskeln nahe an Gelenken angesetzt (kleiner Hebelarm), was große Muskelkräfte erfordert, aber schnelle und weite Bewegungen ermöglicht. Der Unterarm-Bizeps-Mechanismus ist ein Typ-3-Hebel: Muskelkraft (ca. 5 cm vom Gelenk) vs. Last (ca. 35 cm vom Gelenk) → Kraft-Übersetzung 1:7. Für 10 kg Last braucht der Bizeps ca. 700 N.",
          merksatz:
            "M = F·d. Kleiner Hebelarm → große Kraft nötig. Großer Hebelarm → kleine Kraft nötig. Gleichgewicht: F₁·d₁ = F₂·d₂.",
        },
        {
          heading: "Bernoulli und Blutdruck",
          text: "Die Bernoulli-Gleichung (½ρv² + ρgh + p = const) besagt: Schnelle Strömung → niedriger Druck. Bei Gefäßstenosen steigt v, fällt p. Das Poiseuille-Gesetz Q = πr⁴Δp/(8ηl) zeigt die extreme Abhängigkeit vom Radius — das r⁴-Gesetz macht den Gefäßradius zum dominanten Faktor für den Blutfluss.",
          merksatz:
            "Poiseuille: Q ~ r⁴. Radius halbiert → Fluss auf 1/16 reduziert. Gefäßverengung ist extrem flusslimitierend.",
        },
        {
          heading: "Laminare vs. turbulente Strömung",
          text: "Die Reynoldszahl Re = ρ·v·d/η entscheidet über den Strömungstyp: Re < 2300 → laminar (geordnet, schichtenweise); Re > 4000 → turbulent (wirbelnd, Energieverlust). Turbulente Strömung erzeugt Geräusche (Herzgeräusche, Strömungsgeräusche bei Stenosen). Im normalen Kreislauf ist die Strömung meist laminar; an Klappen, Stenosen und Biegungen kann Turbulenz entstehen. Turbulenz erhöht den Strömungswiderstand und den Energiebedarf des Herzens.",
          merksatz:
            "Re = ρvd/η. Re < 2300: laminar (leise, effizient). Re > 4000: turbulent (laut, energieaufwendig).",
        },
      ],
      merksätze: [
        "Gleichgewicht: ΣF = 0 (Kräfte) UND ΣM = 0 (Momente). Beide Bedingungen müssen erfüllt sein.",
        "Drehmoment M = F · d. Einheit: N·m. Großer Hebelarm → großes Drehmoment bei kleiner Kraft.",
        "Druck p = F/A. Einheit Pascal (Pa). Hydrostatisch: p = ρgh.",
        "Bernoulli: ½ρv² + ρgh + p = const. Schnell → niedriger Druck (Venturi-Effekt).",
        "Kontinuität: A₁v₁ = A₂v₂. Enger Querschnitt → schnellere Strömung.",
        "Poiseuille: Q = πr⁴Δp/(8ηl). Radius geht mit 4. Potenz ein!",
        "Reynoldszahl: Re = ρvd/η. Laminar: Re < 2300. Turbulent: Re > 4000.",
        "Archimedisches Prinzip: F_A = ρ_Fl·g·V. Auftrieb = Gewicht des verdrängten Fluids.",
        "Kapillaren: Gesamtquerschnitt 1000× größer als Aorta → Blutfluss 1000× langsamer (Kontinuität).",
        "Arterienstenose 50 % Radius → Fluss auf (0,5)⁴ = 6,25 % des Normalflusses (Poiseuille).",
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
      diagram: "coordinate-system",
      content: `## Einleitung

Warum atrophieren Muskeln und Knochen im Weltraum? Warum trennt eine Zentrifuge Blut in Plasma und Blutzellen? Warum ist ein Gehstock so wertvoll gegen Sturzgefahr? Gravitation und Rotationsbewegung erklären es. Das Gravitationsgesetz und die Zentripetalkraft sind die Grundlagen — im Labor (Zentrifuge), in der Medizin (g-Kräfte bei Trauma) und im Körper (Standfläche, Schwerpunkt). Für den MedAT sind Gravitationsgesetz, Masse vs. Gewicht, Zentripetalkraft, RCF (Zentrifuge) und Schwerpunktlage prüfungsrelevant.

## Gravitation und Rotation

Gravitation und Rotation sind zwei der fundamentalsten Phänomene der Physik. Die Gravitation beschreibt die Anziehungskraft zwischen Massen, Rotation beschreibt die Kreisbewegung und die damit verbundenen Beschleunigungen und Kräfte. Beide sind in der Medizin präsent: von der Erdanziehung auf den menschlichen Körper (Blutverteilung, orthopädische Belastung) bis zur Zentrifugation in der Labormedizin.

## Newtonsches Gravitationsgesetz

Isaac Newton erkannte, dass dieselbe Kraft, die einen Apfel fallen lässt, auch den Mond auf seiner Bahn hält. Das Gravitationsgesetz: F_G = G · (m₁ · m₂)/r², wobei G = 6,674·10⁻¹¹ N·m²/kg² die Gravitationskonstante ist. Die Gravitationskraft ist proportional zu beiden Massen und nimmt mit dem Quadrat des Abstands ab (Abstandsquadratgesetz). Auf der Erdoberfläche vereinfacht sich die Formel: F_G = m·g, wobei g = G·M_Erde/r_Erde² ≈ 9,81 m/s².

**Gewichtskraft vs. Masse:** Masse m ist eine unveränderliche Eigenschaft des Körpers (Menge der Materie). Gewichtskraft F_G = m·g ist die Gravitationskraft auf der Erde. Auf dem Mond (g_Mond ≈ 1,62 m/s²) wiegt derselbe Körper nur 1/6 seines Erdgewichts. In der Schwerelosigkeit (Raumstation, freier Fall) ist F_G = 0 — der Körper ist gewichtslos, aber seine Masse bleibt gleich.

**Keplersche Gesetze:** (1) Planeten bewegen sich auf Ellipsen mit der Sonne im Brennpunkt. (2) Der Fahrstrahl überstreicht in gleichen Zeiten gleiche Flächen — das folgt aus der Drehimpulserhaltung. (3) Das Quadrat der Umlaufzeit ist proportional zur dritten Potenz der großen Halbachse: T² ~ a³. Diese Gesetze gelten analog für Satelliten und ermöglichen die Berechnung von GPS-Satellitenbahnen.

## Kreisbewegung und Zentripetalbeschleunigung

Gleichförmige Kreisbewegung bedeutet konstante Bahngeschwindigkeit v bei sich ständig ändernder Richtung. Die Zentripetalbeschleunigung zeigt immer zur Kreismitte: a_z = v²/r = ω²·r (ω = Winkelgeschwindigkeit in rad/s). Die Zentripetalkraft F_z = m·a_z = m·v²/r = m·ω²·r muss durch eine reale Kraft bereitgestellt werden (Gravitation bei Planeten, Normalkraft auf einer Kurve, Seilspannung).

Wichtige Beziehungen: Umlaufzeit T = 2π/ω. Frequenz f = 1/T. Bahngeschwindigkeit v = ω·r = 2πr/T.

**Scheinkräfte bei Rotation:** Im rotierenden Bezugssystem wirken Scheinkräfte (Trägheitskräfte): Zentrifugalkraft F_cf = m·ω²·r (nach außen gerichtet) und Corioliskraft (bei Bewegungen im rotierenden System).

## Labormedizin: Zentrifugation

Die Zentrifuge nutzt die Zentrifugalkraft zur Trennung von Blutbestandteilen. Bei r = 10 cm und ω = 300 rad/s berechnet sich die Zentrifugalbeschleunigung: a = ω²·r = 90000 · 0,1 = 9000 m/s² ≈ 918 g. In diesem Feld sedimentieren Erythrozyten (dichteste Komponente), dann Leukozyten und Thrombozyten (Buffy coat), dann Plasma (hellgelb) von unten nach oben. Der Hämatokrit wird durch Mikrohämatokrit-Zentrifugation bestimmt.

**Relative Zentrifugalbeschleunigung (RCF):** RCF = (ω²·r)/g. Gängige Vereinfachung: RCF = 1,118 · 10⁻⁵ · n² · r (mit n in rpm und r in mm).

## Rotation des menschlichen Körpers: Biomechanik

Das Trägheitsmoment I = Σmᵢ·rᵢ² (Einheit: kg·m²) ist das rotatorische Analogon zur Masse. Es hängt nicht nur von der Masse ab, sondern auch davon, wie weit die Masse von der Drehachse entfernt ist. Ausgestreckte Arme erhöhen I erheblich — daher drehen Eiskunstläufer mit angezogenen Armen schneller (Drehimpulserhaltung).

**Winkelkinematik:** ω = ω₀ + α·t und θ = θ₀ + ω₀·t + ½·α·t² (mit Winkelbeschleunigung α). Das Drehmoment M = I·α ist das rotatorische Analogon zu F = m·a.

**Stabilität und Gleichgewicht:** Ein Körper ist im stabilen Gleichgewicht, wenn sein Schwerpunkt möglichst tief liegt und die Standfläche groß ist. Das Gleichgewichtskriterium: Die senkrechte Projektion des Schwerpunkts muss innerhalb der Standfläche liegen. Ältere Menschen mit hohem Schwerpunkt und schmaler Standfläche sind sturzgefährdeter.

> **Merke:** Die drei Gleichgewichtsarten: **Stabiles Gleichgewicht** — bei kleiner Auslenkung kehrt der Körper zurück (Schwerpunkt steigt bei Auslenkung, z. B. Kugel in Mulde). **Labiles Gleichgewicht** — bei kleiner Auslenkung kippt der Körper (Schwerpunkt sinkt, z. B. Stift auf Spitze). **Indifferentes Gleichgewicht** — der Schwerpunkt bleibt auf gleicher Höhe (z. B. Kugel auf Ebene).

## g-Kräfte in der Medizin

Die Belastung des menschlichen Körpers durch Beschleunigung wird häufig in Vielfachen der Erdbeschleunigung g angegeben. Im Alltag erfahren wir 1 g. In einer Achterbahn wirken kurzzeitig 3–5 g. Piloten von Kampfjets erleben bis zu 9 g — dabei wird das Blut in die Beine gedrückt, die Sauerstoffversorgung des Gehirns kann sistieren (G-LOC, g-induced loss of consciousness). Anti-G-Hosen komprimieren die Beinvenen und verhindern venöses Pooling.

In der Notfallmedizin sind g-Kräfte bei Dezelerationstraumen zentral: Ein Frontalaufprall bei 50 km/h mit Bremsstrecke 50 cm erzeugt ca. 20 g. Die dabei auf innere Organe wirkenden Kräfte (F = m·a = m·20g) können Gefäßabrisse (Aortentranssektion), Leberrupturen und diffuse axonale Hirnverletzungen verursachen. Sicherheitsgurte und Airbags verlängern die Bremsstrecke und reduzieren damit die maximale g-Belastung — ein direktes Resultat von F = m·a.

## Rechenbeispiele

**Beispiel 1 — Zentrifuge: RCF berechnen:**
Laborzentrifuge: Drehzahl n = 3000 rpm, Radius r = 15 cm = 0,15 m.
ω = 2π × 3000/60 = **314 rad/s**.
a_z = ω²r = 314² × 0,15 = 98 596 × 0,15 = **14 789 m/s²**.
RCF = a_z/g = 14 789/9,81 ≈ **1507 × g** → ausreichend für Serumgewinnung aus Vollblut.

**Beispiel 2 — Geostationärer Satellit (GPS-Anwendung):**
Umlaufzeit T = 24 h = 86 400 s. M_Erde = 5,97 × 10²⁴ kg, G = 6,674 × 10⁻¹¹ N·m²/kg².
Aus F_z = F_G: m·ω²·r = G·M·m/r² → r³ = G·M/ω² = G·M·T²/(4π²).
r³ = 6,674 × 10⁻¹¹ × 5,97 × 10²⁴ × (86 400)² / (4π²) = 7,53 × 10²² m³.
r = **42 164 km** ≈ 35 786 km über der Erdoberfläche — dort kreisen TV- und Kommunikationssatelliten.

**Beispiel 3 — Sturzsicherheit (Standfläche und Schwerpunkt):**
Patient (h = 1,80 m, Schwerpunkt bei 0,56 × h = 1,01 m) steht auf Standfläche Breite 25 cm.
Max. Neigungswinkel bis Kipp: tan(θ) = (0,125 m) / (1,01 m) → θ = arctan(0,124) ≈ **7,1°**.
Mit Gehstock (effektive Standbreite ~60 cm): θ = arctan(0,30/1,01) ≈ **16,5°** → doppelte Kippstabilität.

---
## MedAT-Fokus

**Häufige Fragen:**
- "Was ist der Unterschied zwischen Masse und Gewichtskraft?" → Masse (kg): ortsunabhängig, Materieeigenschaft; Gewichtskraft (N) = m·g, ortsabhängig
- "Was ist RCF?" → Relative Zentrifugalbeschleunigung = ω²·r/g (gibt an, wie oft größer als g)
- "Was hält einen Satelliten auf seiner Bahn?" → Die Gravitationskraft dient als Zentripetalkraft — keine Scheinkraft!
- "Was gilt für stabiles Gleichgewicht?" → Projektion des Schwerpunkts muss innerhalb der Standfläche liegen
- "Wie berechnet man die Zentripetalbeschleunigung?" → a_z = v²/r = ω²·r

**Achtung — typische Verwechslungen:**
- Zentrifugalkraft ist eine SCHEINKRAFT im rotierenden System — sie existiert nicht im ruhenden (Inertial-)System der Erde
- Im Weltraum (ISS): Gewichtskraft ≈ 0 (Schwerelosigkeit), aber die Masse des Körpers bleibt unverändert
- Stabiles Gleichgewicht: die PROJEKTION (das Lot) des Schwerpunkts muss innerhalb der Standfläche liegen — nicht der Schwerpunkt selbst
- ω in rad/s, nicht rpm: 3000 rpm = 3000/60 × 2π ≈ 314 rad/s (Umrechnung nicht vergessen!)

**Prüfungsrelevante Zahlen/Fakten:**
- g_Erde = 9,81 m/s²; g_Mond ≈ 1,62 m/s² (ca. 1/6 der Erde)
- Zentrifuge 3000 rpm, r = 15 cm → RCF ≈ 1500 × g (ausreichend für Serumgewinnung)
- Schwerelosigkeit (ISS): Knochenverlust ~1–2 % pro Monat ohne Gegenmaßnahmen
- ISS-Umlaufgeschwindigkeit: ~7,7 km/s bei ~400 km Höhe; Umlaufzeit ~90 min

---
## Zusammenfassung

- **Gravitationsgesetz**: F_G = G·m₁·m₂/r²; auf Erde: F_G = m·g (g = 9,81 m/s²); **Masse** (kg) ≠ **Gewicht** (N)
- **Kreisbewegung**: v = ω·r; a_z = v²/r = ω²·r (Zentripetal-); F_z = m·ω²·r zeigt zur Kreismitte
- **RCF**: RCF = ω²·r/g; bei 3000 rpm, r = 15 cm → ~1500 × g; trennt Blut (Plasma/Erythrozyten)
- **Trägheitsmoment**: I = Σm·r²; Drehimpuls L = I·ω = const (ohne äußeres Drehmoment)
- **Stabiles Gleichgewicht**: Schwerpunkt tief + Standfläche groß; Gehstock erweitert Standfläche → sicherer
- **Klinisch**: Schwerelosigkeit → Muskelschwund, Osteoporose; g-Kräfte bei Trauma → Aortentranssektion`,
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
        "F_G = G·m₁·m₂/r². Abstandsquadratgesetz: Doppelter Abstand → viermal kleinere Kraft.",
        "g = 9,81 m/s² ≈ 10 m/s² auf der Erdoberfläche. Auf dem Mond: g_M ≈ 1,62 m/s².",
        "Gewichtskraft F_G = m·g (Newton). Masse m (Kilogramm). Nicht verwechseln!",
        "Zentripetalbeschleunigung a_z = v²/r = ω²·r. Zeigt zur Kreismitte.",
        "Zentripetalkraft F_z = m·ω²·r — sie ist real, keine Scheinkraft.",
        "ω (Winkelgeschwindigkeit) in rad/s. v = ω·r. T = 2π/ω. f = 1/T.",
        "Trägheitsmoment I = Σmᵢ·rᵢ². Masse fern von der Achse → großes I.",
        "Drehimpuls L = I·ω = const (ohne äußere Drehmomente).",
        "Stabiles Gleichgewicht: Schwerpunkt tief, Standfläche groß, Projektion des SP innerhalb der Standfläche.",
        "Zentrifuge: RCF = ω²·r/g. 3000 rpm, r = 10 cm → RCF ≈ 1000 g.",
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
