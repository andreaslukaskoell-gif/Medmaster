import type { Kapitel } from '../types';

export const physKap1: Kapitel = {
  id: 'phys-kap1',
  title: 'Größen und Einheiten',
  subject: 'physik',
  icon: '📏',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ph-1-01',
      title: 'SI-Grundgrößen und abgeleitete Einheiten',
      content: `## Das Internationale Einheitensystem (SI)

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

Ein häufiger Irrtum im Alltag: Die Masse eines Menschen (in kg) und seine Gewichtskraft (in N) sind verschiedene Größen. Die Masse ist eine intrinsische, ortsunabhängige Eigenschaft. Die Gewichtskraft F_G = m × g hängt von der Erdbeschleunigung g = 9,81 m/s² ab. Ein Mensch mit Masse 70 kg hat auf der Erde eine Gewichtskraft von 70 × 9,81 = 686,7 N. Auf dem Mond (g = 1,62 m/s²) wäre F_G = 113,4 N — aber seine Masse bleibt 70 kg. Diese Unterscheidung ist in der Weltraummedizin und bei Astronautentraining relevant.`,

      lernziele: [
        'Die sieben SI-Basisgrößen mit ihren Einheiten und Formelzeichen nennen und erklären können',
        'Abgeleitete SI-Einheiten (Newton, Pascal, Joule, Watt, Volt, Hertz) auf Basiseinheiten zurückführen können',
        'Den Unterschied zwischen skalaren und vektoriellen Größen erklären und Beispiele aus der Medizin nennen können',
        'Intensive und extensive Größen voneinander unterscheiden und klinische Relevanz erläutern können',
        'Physikalische Größen als Produkt aus Zahlenwert und Einheit korrekt anwenden können',
      ],

      sections: [
        {
          heading: 'SI-Basisgrößen — Übersicht',
          text: 'Das SI-System definiert sieben fundamental unabhängige Basisgrößen. Aus diesen lassen sich alle weiteren physikalischen Größen ableiten.',
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
        },
        {
          heading: 'Die sieben SI-Basisgrößen',
          text: 'Das SI-System beruht auf sieben fundamental unabhängigen Basisgrößen: Länge (m), Masse (kg), Zeit (s), elektrische Stromstärke (A), thermodynamische Temperatur (K), Stoffmenge (mol) und Lichtstärke (cd). Diese sieben Größen sind so gewählt, dass sie unabhängig voneinander sind — keine lässt sich aus den anderen ableiten — und zusammen ausreichen, um jede bekannte physikalische Größe zu beschreiben. Seit der SI-Reform von 2019 werden alle Basiseinheiten durch Naturkonstanten definiert, nicht mehr durch physische Artefakte. Das Kilogramm ist nun über die Planck-Konstante, das Ampere über die Elementarladung, das Kelvin über die Boltzmann-Konstante und das Mol über die Avogadro-Konstante definiert. Diese Neudefinition macht das SI-System zeitlos und ortsunabhängig — jedes gut ausgestattete Labor der Welt kann die Einheiten eigenständig realisieren, ohne Zugang zu einem physischen Referenzartefakt zu benötigen.',
          merksatz: 'Merkhilfe für die 7 SI-Basisgrößen: Länge(m) — Masse(kg) — Zeit(s) — Ampere(A) — Kelvin(K) — Mol(mol) — Candela(cd). Abkürzung: LaMZAKMC',
        },
        {
          heading: 'Abgeleitete Einheiten und ihre Basisdarstellung',
          text: 'Abgeleitete Einheiten entstehen durch algebraische Verknüpfung der Basiseinheiten. Der Newton (N = kg·m·s⁻²) beschreibt Kraft, das Pascal (Pa = kg·m⁻¹·s⁻²) Druck, das Joule (J = kg·m²·s⁻²) Energie und das Watt (W = kg·m²·s⁻³) Leistung. Besonders im medizinischen Bereich sind Druckeinheiten bedeutsam: Der Blutdruck wird klinisch in mmHg (Millimeter Quecksilbersäule) angegeben, obwohl die SI-Einheit Pascal ist. Umrechnung: 1 mmHg ≈ 133,3 Pa. Ein normaler systolischer Blutdruck von 120 mmHg entspricht also ca. 16 000 Pa bzw. 16 kPa. Das Verständnis der Basisdarstellung ermöglicht es, Formeln dimensionsanalytisch zu überprüfen und Umrechnungen korrekt durchzuführen.',
          merksatz: 'Newton = kg·m/s² (Kraft = Masse × Beschleunigung); Pascal = N/m² (Druck = Kraft/Fläche); Joule = N·m (Arbeit = Kraft × Weg); Watt = J/s (Leistung = Energie/Zeit)',
        },
        {
          heading: 'Skalare vs. Vektoren in der Medizin',
          text: 'Physikalische Größen sind entweder Skalare (nur Betrag) oder Vektoren (Betrag + Richtung). In der Medizin begegnen uns beide Typen ständig: Körpertemperatur, Blutdruck, Herzfrequenz und Laborwerte sind Skalare. Blutströmungsgeschwindigkeit, Muskelkräfte und elektrische Feldvektoren im EKG sind Vektoren. Das EKG misst tatsächlich den Herzvektor — die vektorielle Summe aller elektrischen Kräfte im Herzmuskel zu einem bestimmten Zeitpunkt. Die zwölf EKG-Ableitungen erfassen diesen Vektor aus verschiedenen Winkeln und ermöglichen so eine räumliche Diagnose von Herzerkrankungen. Bei Vektoraddition können sich gleichgroße Kräfte aus verschiedenen Richtungen aufheben (destruktive Interferenz) oder verstärken (konstruktive Interferenz) — ein Prinzip, das für das Verständnis von EKG-Mustern grundlegend ist.',
          merksatz: 'Skalar = nur Betrag (z.B. Temperatur 37°C). Vektor = Betrag + Richtung (z.B. Kraft 10 N nach oben). Vektoren werden addiert wie Pfeile — nicht einfach arithmetisch!',
        },
        {
          heading: 'Intensive vs. extensive Größen',
          text: 'Intensive Größen (Temperatur, Druck, Konzentration, Dichte) sind unabhängig von der Systemmenge. Extensive Größen (Masse, Volumen, Energie, Stoffmenge) sind proportional zur Systemmenge. Diese Unterscheidung ist pharmakologisch entscheidend: Die therapeutische Wirkung eines Medikaments hängt von seiner Plasmakonzentration (intensiv, Einheit: mg/L oder mmol/L) ab, nicht von der absoluten verabreichten Menge allein. Der Arzt berechnet die Dosis (extensive Größe in mg) so, dass die gewünschte Konzentration (intensive Größe in mg/L) im Plasma erreicht wird — unter Berücksichtigung des Verteilungsvolumens und der Nierenclearance. Interessanterweise ist der Quotient zweier extensiver Größen eine intensive Größe: Masse/Volumen = Dichte (intensiv).',
          merksatz: 'Intensiv = unabhängig von der Menge (Temp., Druck, Konzentration). Extensiv = proportional zur Menge (Masse, Volumen, Energie). Zwei Tassen heißer Kaffee → doppeltes Volumen, aber gleich heiß!',
        },
      ],

      merksätze: [
        'Die 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)',
        'Merkhilfe: "Luise Mag Zwei Alte Katzen Mit Charme" → L, M, Z(eit), A, K, M(ol), C(andela)',
        'Abgeleitete Einheit = Kombination von Basiseinheiten: N = kg·m·s⁻², Pa = N/m², J = N·m, W = J/s',
        'Jede physikalische Größe G = Zahlenwert {G} × Einheit [G] — Zahlenwert allein ist bedeutungslos!',
        'Skalar = nur Betrag (Temperatur, Druck, Masse). Vektor = Betrag + Richtung (Kraft, Geschwindigkeit, Beschleunigung)',
        'Intensiv ≠ Extensiv: Konzentration verdoppelt sich nicht beim Verdoppeln des Volumens — Masse schon',
        '1 mmHg ≈ 133 Pa — klinischer Blutdruck in mmHg, SI-Einheit ist Pascal',
        'Das Kilogramm ist seit 2019 über die Planck-Konstante definiert — keine physischen Artefakte mehr',
        'Kelvin (K) = absolutes Temperaturmaß; 0 K = absoluter Nullpunkt = -273,15 °C; T(K) = T(°C) + 273,15',
        '1 mol enthält genau 6,022 × 10²³ Teilchen (Avogadro-Konstante) — definiert seit SI-Reform 2019',
      ],

      altfrage: {
        question: 'Erläutern Sie das SI-Einheitensystem und erklären Sie, warum ein einheitliches Messsystem in der Medizin unverzichtbar ist. Gehen Sie dabei auf mindestens drei Basisgrößen und zwei abgeleitete Einheiten ein.',
        answer: `Das Internationale Einheitensystem (SI) ist das weltweit gültige Messsystem, das auf sieben unabhängigen Basisgrößen beruht. Diese sieben Größen — Länge (Meter, m), Masse (Kilogramm, kg), Zeit (Sekunde, s), elektrische Stromstärke (Ampere, A), thermodynamische Temperatur (Kelvin, K), Stoffmenge (Mol, mol) und Lichtstärke (Candela, cd) — sind so fundamental, dass alle anderen physikalischen Größen aus ihnen abgeleitet werden können.

Für die Medizin ist ein einheitliches System aus mehreren Gründen unverzichtbar: Erstens ermöglicht es die globale Vergleichbarkeit von Laborbefunden und Forschungsergebnissen. Ein Blutzuckerwert von 5,5 mmol/L bedeutet weltweit dasselbe. Zweitens verhindert es gefährliche Verwechslungen bei Dosierungen — die SI-Einheit mg/kg Körpergewicht für Medikamentendosen ist eindeutig und sicher. Drittens erlaubt es konsistente Berechnungen: Der Blutdruck in Pascal (Pa = kg·m⁻¹·s⁻²) lässt sich direkt mit Strömungsformeln verbinden.

Wichtige abgeleitete Einheiten in der Medizin sind der Pascal (Pa) für den Blutdruck — klinisch oft in mmHg angegeben, aber physikalisch in Pa — und das Joule (J = kg·m²·s⁻²) für den Energieumsatz des Körpers. Der Grundumsatz eines Erwachsenen beträgt etwa 8.000 kJ/Tag. Das Watt (W = J/s) beschreibt die Herzleistung: Das Herz erbringt in Ruhe eine hydraulische Leistung von ca. 1–2 W.

Ohne ein einheitliches Messsystem wären internationale Studien, Gerätekalibrierungen und sichere Medikamentendosierungen nicht möglich. Berühmte Katastrophen wie der Mars-Climate-Orbiter-Absturz 1999 (Verwechslung von Pound-force und Newton) zeigen, was fehlendes Einheitenbewusstsein anrichten kann — in der Medizin stehen dabei Menschenleben auf dem Spiel.`,
      },

      klinischerBezug: `In der klinischen Praxis ist das Verständnis von SI-Einheiten direkt lebensrelevant: Medikamentendosen werden in mg/kg Körpergewicht berechnet, Infusionsraten in mL/h oder µg/kg/min angegeben, und Laborwerte wie Serumkreatinin (µmol/L), Hämoglobin (g/dL) oder Troponin (ng/mL) müssen korrekt interpretiert werden. Ein systolischer Blutdruck von 120 mmHg entspricht 15 998 Pa — Ärzte arbeiten mit mmHg, Physiker mit Pascal, beide müssen dieselbe Realität beschreiben. Fehler bei Einheitenumrechnungen können bei intensivmedizinischen Patienten tödlich sein: Eine Verwechslung von mg und µg bei der Adrenalin-Dosierung (Faktor 1000!) führt zu lebensbedrohlichen Komplikationen.`,

      selfTest: [
        {
          question: 'Welche der folgenden Größen ist KEINE SI-Basisgröße?',
          options: [
            'Elektrische Stromstärke (Ampere)',
            'Stoffmenge (Mol)',
            'Kraft (Newton)',
            'Thermodynamische Temperatur (Kelvin)',
            'Lichtstärke (Candela)',
          ],
          correctIndex: 2,
          explanation: 'Die Kraft wird in Newton (N) gemessen, aber Newton ist eine abgeleitete Einheit, keine Basiseinheit. Sie lässt sich aus den Basisgrößen ableiten: 1 N = 1 kg·m·s⁻². Die sieben SI-Basisgrößen sind: Länge (m), Masse (kg), Zeit (s), elektrische Stromstärke (A), thermodynamische Temperatur (K), Stoffmenge (mol) und Lichtstärke (cd). Alle anderen physikalischen Größen — Kraft, Druck, Energie, Leistung, Spannung — sind abgeleitet und können auf diese sieben Basisgrößen zurückgeführt werden. Ein einfacher Test: Kann man die Einheit durch Kombination anderer SI-Einheiten ausdrücken? Wenn ja, ist es eine abgeleitete Einheit.',
          hints: [
            'Es gibt genau 7 SI-Basisgrößen — Kraft gehört interessanterweise nicht dazu.',
            'Newton = kg·m/s² — das sind alles Basiseinheiten kombiniert!',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Patient erhält eine Infusion mit einer Konzentration von 5 mg/mL. Bei einem Volumen von 500 mL beträgt die Gesamtmenge des Wirkstoffs:',
          options: [
            '100 mg',
            '2500 mg',
            '500 mg',
            '0,01 g',
            '5000 µg',
          ],
          correctIndex: 1,
          explanation: 'Gesamtmenge = Konzentration × Volumen = 5 mg/mL × 500 mL = 2500 mg. Dies ist ein klassisches Beispiel für den Unterschied zwischen intensiven und extensiven Größen: Die Konzentration (5 mg/mL) ist eine intensive Größe — sie ist unabhängig davon, wie viel Lösung vorhanden ist. Die Gesamtmenge des Wirkstoffs (2500 mg) ist eine extensive Größe — sie ist proportional zum Volumen. In der klinischen Praxis ist diese Rechnung alltäglich: Pflegepersonal und Ärzte müssen Infusionsmengen, Konzentrationen und Gesamtdosen sicher berechnen können. Ein Rechenfehler kann zur Über- oder Unterdosierung führen. 2500 mg = 2,5 g — eine klinisch relevante Größenordnung für viele Medikamente.',
          hints: [
            'Gesamtmenge = Konzentration × Volumen — achte auf die Einheiten!',
            'mg/mL × mL = mg — die Einheiten kürzen sich heraus.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche der folgenden ist eine INTENSIVE physikalische Größe?',
          options: [
            'Masse eines Patienten (80 kg)',
            'Volumen des Blutes im Körper (5 L)',
            'Gesamtenergie des Körpers (500 kJ)',
            'Körpertemperatur (37 °C)',
            'Gesamtstoffmenge an Hämoglobin (mol)',
          ],
          correctIndex: 3,
          explanation: 'Die Körpertemperatur ist eine intensive Größe, weil sie unabhängig von der Menge des Systems ist. Egal ob man einen kleinen oder großen Menschen misst — 37 °C bleibt 37 °C. Intensive Größen charakterisieren den Zustand eines Systems, nicht seine Menge. Beispiele: Temperatur, Druck, Konzentration, Dichte, spezifische Wärmekapazität. Extensive Größen hingegen (Masse, Volumen, Energie, Stoffmenge) sind proportional zur Systemmenge. Wenn man ein System verdoppelt, verdoppeln sich extensive Größen — intensive nicht. Diese Unterscheidung ist in der Pharmakologie fundamental: Der therapeutische Effekt hängt von der Plasmakonzentration (intensiv) ab, nicht von der absoluten Wirkstoffmenge allein.',
          hints: [
            'Intensiv = unabhängig von der Menge. Frage dich: Ändert sich die Größe, wenn ich mehr Substanz nehme?',
            'Temperatur ändert sich nicht, wenn man mehr Blut nimmt — Masse schon.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die SI-Einheit des Drucks (Pascal) lässt sich in Basiseinheiten ausdrücken als:',
          options: [
            'kg·m·s⁻¹',
            'kg·m⁻¹·s⁻²',
            'kg·m²·s⁻²',
            'kg·m²·s⁻³',
            'kg·m·s⁻²',
          ],
          correctIndex: 1,
          explanation: 'Druck P = Kraft/Fläche = F/A. Die Kraft hat die Einheit Newton (N = kg·m·s⁻²) und die Fläche hat die Einheit m². Also: Pa = N/m² = (kg·m·s⁻²)/m² = kg·m⁻¹·s⁻². Das Verständnis dieser Ableitung ist wichtig für die Dimensionsanalyse: Wenn eine Formel korrekt ist, müssen die Einheiten auf beiden Seiten übereinstimmen. Zur Orientierung: kg·m²·s⁻² ist Joule (Energie), kg·m²·s⁻³ ist Watt (Leistung), kg·m·s⁻² ist Newton (Kraft). Diese Hierarchie — von Basiseinheiten zu abgeleiteten Einheiten — ist der Schlüssel zur Dimensionsanalyse und ermöglicht es, Formeln auf Korrektheit zu überprüfen.',
          hints: [
            'Druck = Kraft/Fläche. Was ist die Einheit der Kraft? Was ist die Einheit der Fläche?',
            'N/m² = (kg·m·s⁻²)/m² — kürze m² heraus!',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Herzmuskel erzeugt eine Kraft von 2 N und verschiebt Blut um 0,05 m. Welche Arbeit wird dabei verrichtet?',
          options: [
            '0,1 J',
            '40 J',
            '0,04 J',
            '2,05 J',
            '10 J',
          ],
          correctIndex: 0,
          explanation: 'Arbeit W = Kraft × Weg = F × s = 2 N × 0,05 m = 0,1 N·m = 0,1 J. Die Einheit Joule (J) ist definiert als 1 J = 1 N·m = 1 kg·m²·s⁻². In der Physiologie ist die mechanische Herzarbeit ein wichtiger Parameter: Das Herz verrichtet pro Schlag (Herzaktion) etwa 0,5–1 J mechanische Arbeit, bei einer Herzfrequenz von 70/min also ca. 35–70 J/min = ca. 0,6–1,2 W hydraulische Leistung. Diese Zahlen verdeutlichen die Effizienz des Herzens — und die enorme Belastung bei körperlicher Aktivität, wo die Herzleistung auf 4–5 W steigen kann. Die Formel W = F·s gilt nur, wenn Kraft und Weg parallel sind.',
          hints: [
            'Arbeit W = Kraft × Weg. Einheit: N × m = J.',
            'Achte auf die Größenordnung: 2 N × 0,05 m — multipliziere sorgfältig.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage über Vektoren und Skalare ist KORREKT?',
          options: [
            'Temperatur ist ein Vektor, weil Wärme fließt.',
            'Druck ist ein Vektor, weil er auf Flächen wirkt.',
            'Masse ist ein Vektor, weil sie durch Schwerkraft nach unten zieht.',
            'Geschwindigkeit ist ein Vektor, weil sie Betrag und Richtung hat.',
            'Energie ist ein Vektor, weil sie übertragen werden kann.',
          ],
          correctIndex: 3,
          explanation: 'Geschwindigkeit ist ein klassischer Vektor: Sie hat einen Betrag (z.B. 30 m/s) und eine Richtung (z.B. nach Norden). Im Gegensatz dazu ist Temperatur ein Skalar — sie hat nur einen Zahlenwert, keine Richtung. Auch wenn Wärme fließt, ist die Temperatur selbst skalar (der Temperaturgradient ist ein Vektor, die Temperatur nicht). Druck ist ebenfalls ein Skalar — er wirkt in alle Richtungen gleich (isotropisch). Masse ist skalar — die Gewichtskraft (= m·g) ist ein Vektor, nicht die Masse selbst. Energie ist skalar — auch wenn Energieübertragung gerichtet sein kann, ist die Energie selbst eine skalare Größe ohne räumliche Richtungskomponente.',
          hints: [
            'Vektor = Betrag + Richtung. Frage dich: Hat die Größe eine definierte Richtung im Raum?',
            'Kraft, Geschwindigkeit, Beschleunigung → Vektoren. Masse, Temperatur, Energie → Skalare.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Aussage zur SI-Reform von 2019 ist KORREKT?',
          options: [
            'Das Kilogramm wird jetzt durch die Avogadro-Konstante definiert.',
            'Das Kilogramm wird jetzt durch die Planck-Konstante definiert.',
            'Das Meter wird jetzt durch die Boltzmann-Konstante definiert.',
            'Die Anzahl der Basisgrößen wurde von 7 auf 6 reduziert.',
            'Das Mol wird jetzt durch die Planck-Konstante definiert.',
          ],
          correctIndex: 1,
          explanation: 'Seit der SI-Reform von 2019 wird das Kilogramm durch den festgelegten Zahlenwert der Planck-Konstante h = 6,626 070 15 × 10⁻³⁴ J·s definiert. Diese Reform macht das Einheitensystem vollständig unabhängig von physischen Artefakten. Das Mol wird durch die Avogadro-Konstante NA = 6,022 140 76 × 10²³ mol⁻¹ definiert. Das Kelvin wird durch die Boltzmann-Konstante kB = 1,380 649 × 10⁻²³ J·K⁻¹ definiert. Das Meter war bereits seit 1983 durch die Lichtgeschwindigkeit c = 299 792 458 m/s definiert. Die Anzahl der Basisgrößen blieb bei sieben. Diese Reform ist historisch bedeutend: Erstmals sind alle Basiseinheiten durch unveränderliche Naturkonstanten definiert.',
          hints: [
            'Die Planck-Konstante h spielt in der Quantenmechanik eine zentrale Rolle — und seit 2019 auch in der Metrologie.',
            'Jede Basisgröße hat "ihre" Naturkonstante: kg → Planck, mol → Avogadro, K → Boltzmann.',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Ein Patient wiegt 70 kg. Welche Gewichtskraft wirkt auf ihn? (g = 9,81 m/s²)',
          options: [
            '70 N',
            '686,7 N',
            '7,13 N',
            '700 Pa',
            '6867 J',
          ],
          correctIndex: 1,
          explanation: 'Die Gewichtskraft F_G = m × g = 70 kg × 9,81 m/s² = 686,7 kg·m·s⁻² = 686,7 N. Wichtig: Masse (in kg) und Gewichtskraft (in N) sind verschiedene Größen! Masse ist eine intrinsische Eigenschaft der Materie — unveränderlich, ortsunabhängig. Gewichtskraft ist die Anziehungskraft der Erde — abhängig vom Ort (auf dem Mond wäre g ≈ 1,62 m/s², also F_G ≈ 113 N). Im Alltag sagen wir "ich wiege 70 kg" — physikalisch korrekt wäre "meine Masse beträgt 70 kg" und "meine Gewichtskraft beträgt ca. 687 N". In der Medizin ist diese Unterscheidung beim Thema Schwerelosigkeit relevant: Die Masse des Astronauten bleibt 70 kg, aber die Gewichtskraft nähert sich null.',
          hints: [
            'Gewichtskraft F = m × g — die Einheit N = kg·m/s² ergibt sich direkt.',
            'Masse (kg) ist nicht dasselbe wie Gewichtskraft (N) — im Alltag verwechselt, in der Physik streng unterschieden!',
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },

    {
      id: 'ph-1-02',
      title: 'Präfixe und wissenschaftliche Notation',
      content: `## Warum brauchen wir Präfixe?

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

Das Beherrschen dieser Größenordnungen ermöglicht eine schnelle Plausibilitätsprüfung im klinischen Alltag: Wenn ein Laborwert "außerhalb des Rahmens" erscheint, könnte ein Einheitenfehler vorliegen.`,

      lernziele: [
        'Die SI-Präfixe von Femto (10⁻¹⁵) bis Tera (10¹²) mit Symbolen und Faktoren nennen können',
        'Zahlen in wissenschaftliche Notation umwandeln und zurückrechnen können',
        'Rechenregeln für Zehnerpotenzen (Multiplikation, Division, Potenzieren) sicher anwenden',
        'Quadratische und kubische Einheiten mit Präfixen korrekt umrechnen (cm² → m², mL → m³)',
        'Medizinisch relevante Größenordnungen einordnen und mit korrekten Präfixen benennen',
      ],

      sections: [
        {
          heading: 'SI-Präfixe: Übersicht',
          text: 'SI-Präfixe sind Vorsätze, die vor eine Einheit gestellt werden und sie mit einer Zehnerpotenz multiplizieren. Sie ermöglichen eine kompakte Darstellung sehr großer und sehr kleiner Zahlen.',
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
        },
        {
          heading: 'SI-Präfixe: Vom Femto zum Tera',
          text: 'Das metrische Präfixsystem ermöglicht es, mit einem Buchstaben vor der Einheit Faktoren von 10⁻¹⁵ bis 10¹² auszudrücken. Die wichtigsten Präfixe für die Medizin sind Mikro (µ, 10⁻⁶), Milli (m, 10⁻³), Kilo (k, 10³) und Mega (M, 10⁶). In der Labormedizin dominieren Mikro- und Milligrößen: Serumkonzentrationen in µmol/L, Volumina in µL (Mikroliter) bei PCR-Ansätzen, Arzneimitteldosen in mg bis µg. Besondere Vorsicht ist beim Symbol µ (Mikro) geboten — es darf nicht mit m (Milli) verwechselt werden. Ein Fehler von Faktor 1000 (z.B. 1 mg statt 1 µg) kann bei potenten Substanzen wie Fentanyl oder Adrenalin tödlich sein. Die WHO listet Einheitenverwechslungen als eine der häufigsten vermeidbaren Medikationsfehlerquellen.',
          merksatz: 'Präfixe von groß zu klein: Tera(T, 10¹²) — Giga(G, 10⁹) — Mega(M, 10⁶) — Kilo(k, 10³) — [Einheit] — Milli(m, 10⁻³) — Mikro(µ, 10⁻⁶) — Nano(n, 10⁻⁹) — Piko(p, 10⁻¹²) — Femto(f, 10⁻¹⁵)',
        },
        {
          heading: 'Wissenschaftliche Notation und Rechenregeln',
          text: 'Die wissenschaftliche Notation a × 10ⁿ (mit 1 ≤ |a| < 10) ist das Standardwerkzeug für sehr große und sehr kleine Zahlen. Rechenregeln: Beim Multiplizieren werden Exponenten addiert (10³ × 10⁴ = 10⁷), beim Dividieren subtrahiert (10⁷/10³ = 10⁴), beim Potenzieren multipliziert ((10³)² = 10⁶). Diese Regeln gelten für Zehnerpotenzen exakt — aber auch die Mantissen müssen korrekt verrechnet werden: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷. Wenn das Ergebnis der Mantissenmultiplikation ≥ 10 ist, muss normiert werden: (5 × 10⁴) × (4 × 10³) = 20 × 10⁷ = 2 × 10⁸. Das Normieren ist der entscheidende letzte Schritt, den viele vergessen.',
          merksatz: 'Potenzen multiplizieren → Exponenten addieren: 10³·10⁵ = 10⁸. Dividieren → subtrahieren: 10⁸/10³ = 10⁵. Potenzieren → multiplizieren: (10³)⁴ = 10¹².',
        },
        {
          heading: 'Volumenpräfixe: Die häufigste Fehlerquelle',
          text: 'Bei Flächen- und Volumeneinheiten mit Präfixen müssen die Präfixpotenzen quadriert bzw. kubiert werden. 1 cm² = (10⁻² m)² = 10⁻⁴ m² — nicht 10⁻² m²! 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³. Klinisch wichtig: 1 mL = 1 cm³ = 10⁻⁶ m³. 1 L = 1 dm³ = (10⁻¹ m)³ = 10⁻³ m³. Diese Umrechnungen sind im klinischen Alltag allgegenwärtig: Infusionsvolumina (mL, L), Laborprobenvolumina (µL), Injektionsvolumina (mL). Das korrekte Einheitenhandling verhindert Größenordnungsfehler, die in der Intensivmedizin lebensbedrohlich sein können.',
          merksatz: '1 mL = 1 cm³ (merke: Milli-Liter = Kubik-Zentimeter) — fundamental und täglich nützlich! 1 L = 1 dm³ = 1000 cm³ = 1000 mL.',
        },
      ],

      merksätze: [
        'Präfixe von groß zu klein: Tera(T)-Giga(G)-Mega(M)-Kilo(k) — Einheit — Milli(m)-Mikro(µ)-Nano(n)-Piko(p)-Femto(f)',
        'Faustformel: Je drei Stellen → ein Präfix. 1 km = 1 000 m, 1 mm = 0,001 m, 1 µm = 0,001 mm',
        'Wissenschaftliche Notation: immer eine Stelle vor dem Komma — 3,5 × 10⁴, nicht 35 × 10³',
        'Exponentenregeln: Mult → addieren (10³·10⁴=10⁷), Div → subtrahieren (10⁷/10³=10⁴), Potenz → multiplizieren ((10³)²=10⁶)',
        '1 mL = 1 cm³; 1 L = 1 dm³; 1 m³ = 1000 L — diese Volumengleichheiten auswendig!',
        'Flächenpräfix quadrieren: 1 cm² = 10⁻⁴ m² (nicht 10⁻² m²!) — kubisch: 1 cm³ = 10⁻⁶ m³',
        'Mikro (µ) = 10⁻⁶: Rote Blutkörperchen ~8 µm; DNA-Strang ~2 nm; Zellkern ~6 µm',
        'Klinischer Merker: mg vs. µg Faktor 1000 — bei Adrenalin, Fentanyl, Heparin IMMER Einheit prüfen!',
        'Normalglukose: 3,9–6,1 mmol/L; Natrium: 135–145 mmol/L — medizinische Referenzbereiche in Millimol',
        'Lichtgeschwindigkeit c ≈ 3 × 10⁸ m/s; Avogadro NA ≈ 6 × 10²³ mol⁻¹ — wichtige Naturkonstanten',
      ],

      altfrage: {
        question: 'Erläutern Sie das System der SI-Präfixe und die wissenschaftliche Notation. Warum sind korrekte Präfixkenntnisse in der Medizin sicherheitsrelevant? Geben Sie zwei konkrete klinische Beispiele.',
        answer: `Das SI-Präfixsystem ermöglicht es, physikalische Größen über viele Größenordnungen hinweg kompakt und eindeutig auszudrücken. Präfixe sind Vorsätze vor die Einheit, die einen Multiplikationsfaktor (Zehnerpotenz) angeben. Die medizinisch bedeutsamsten Präfixe sind Kilo (k, 10³), Milli (m, 10⁻³), Mikro (µ, 10⁻⁶), Nano (n, 10⁻⁹) und Femto (f, 10⁻¹⁵).

Die wissenschaftliche Notation schreibt Zahlen als a × 10ⁿ mit 1 ≤ |a| < 10. Dies erleichtert Berechnungen erheblich: Beim Multiplizieren werden Exponenten addiert, beim Dividieren subtrahiert. Für Flächen und Volumina gilt: Der Präfixfaktor muss ebenfalls potenziert werden — 1 cm² = 10⁻⁴ m², 1 cm³ = 10⁻⁶ m³.

In der Medizin sind korrekte Präfixkenntnisse sicherheitsrelevant, weil Dosierungsfehler bei potenten Substanzen lebensgefährlich sein können. Zwei konkrete Beispiele:

Erstens Adrenalin (Epinephrin): Die Reanimationsdosis beträgt 1 mg i.v., die anaphylaxiebehandelnde Dosis 0,3–0,5 mg i.m. Eine zehnfache Überdosis (10 mg) kann durch extreme Vasokonstriktion und Herzrhythmusstörungen tödlich sein. Verwechslungen zwischen mg und µg (Faktor 1000) sind als Medikationsfehler dokumentiert und haben zu Todesfällen geführt.

Zweitens Heparin: Standarddosen werden in Einheiten (IE) oder mg/kg angegeben. In der Neonatologie wurden tödliche Überdosierungen durch Verwechslung der Konzentration (1000 IE/mL vs. 10 000 IE/mL) dokumentiert. Das System der SI-Präfixe stellt also nicht nur eine mathematische Konvention dar, sondern ist ein klinisches Sicherheitsinstrument. Die WHO listet Einheitenverwechslungen als eine der häufigsten Ursachen vermeidbarer Medikationsfehler.`,
      },

      klinischerBezug: `Laborwerte nutzen fast immer Präfixe: Hämoglobin in g/dL, Glukose in mmol/L, Troponin in ng/mL oder µg/L, Gerinnungsparameter in Sekunden. Der Wechsel zwischen Einheitensystemen (z.B. mg/dL für Glukose in den USA vs. mmol/L in Europa, Umrechnungsfaktor 18) hat klinische Relevanz: Ein Wert von 180 mg/dL entspricht 10 mmol/L — beide beschreiben dieselbe Hyperglykämie. Medikamentendosierungen reichen von Gramm (Paracetamol 500 mg–1 g) über Mikrogramm (Fentanyl 25–100 µg) bis Nanogramm (Calcitriol 0,25 µg = 250 ng) — ein Bereich von über 10⁶; korrekte Präfixkenntnisse sind hier buchstäblich lebenswichtig.`,

      selfTest: [
        {
          question: 'Wie lautet 0,000 045 m in wissenschaftlicher Notation und mit korrektem SI-Präfix?',
          options: [
            '45 × 10⁻⁶ m = 45 nm',
            '4,5 × 10⁻⁵ m = 45 µm',
            '0,45 × 10⁻⁴ m = 45 mm',
            '4,5 × 10⁻⁵ m = 45 mm',
            '45 × 10⁻⁶ m = 45 µm',
          ],
          correctIndex: 1,
          explanation: '0,000 045 m = 4,5 × 10⁻⁵ m. In wissenschaftlicher Notation muss die Mantisse zwischen 1 und 10 liegen: 4,5 (korrekt), nicht 45 (zu groß) oder 0,45 (zu klein). Für den Präfix: 10⁻⁵ liegt zwischen 10⁻⁶ (Mikro) und 10⁻³ (Milli). Man schreibt es am besten als 45 × 10⁻⁶ m = 45 µm (45 Mikrometer). Mikro (µ) = 10⁻⁶. Also: 4,5 × 10⁻⁵ m = 45 × 10⁻⁶ m = 45 µm. Korrekte wissenschaftliche Notation: 4,5 × 10⁻⁵ m. Mit Präfix: 45 µm. Beide Antworten beschreiben dieselbe Länge — in der Physik wird die normierte wissenschaftliche Notation bevorzugt, in der Medizin oft der Präfix.',
          hints: [
            'Wissenschaftliche Notation: genau eine Stelle vor dem Komma. Dann Präfix aus der Zehnerpotenz ablesen.',
            'Mikro = 10⁻⁶. 10⁻⁵ = 10 × 10⁻⁶ = 10 µ — so: 4,5 × 10⁻⁵ m = 45 × 10⁻⁶ m = 45 µm.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Labor misst ein Blutvolumen von 5 mL. Wie viel ist das in µL und in m³?',
          options: [
            '500 µL und 5 × 10⁻⁶ m³',
            '5000 µL und 5 × 10⁻⁶ m³',
            '5000 µL und 5 × 10⁻³ m³',
            '500 µL und 5 × 10⁻³ m³',
            '50 000 µL und 5 × 10⁻⁸ m³',
          ],
          correctIndex: 1,
          explanation: '5 mL in µL: 1 mL = 1000 µL, also 5 mL = 5000 µL = 5 × 10³ µL. 5 mL in m³: 1 mL = 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³. Also 5 mL = 5 × 10⁻⁶ m³. Der häufigste Fehler ist das Vergessen der Kubizierung: 1 cm = 10⁻² m, aber 1 cm³ ist nicht 10⁻² m³ — es gilt (10⁻² m)³ = 10⁻⁶ m³! Man berechnet: Exponent von m kubizieren: -2 × 3 = -6. In der Praxis: 5 mL Blut ist eine typische Röhrchenmenge für Laboruntersuchungen (Hämatologie, Biochemie). Das korrekte Handling von mL, µL und m³ ist in der Labormedizin alltäglich.',
          hints: [
            '1 mL = 1 cm³ = 10⁻⁶ m³ (auswendig lernen!). Von mL zu µL: × 1000.',
            'Kubizierung: (10⁻² m)³ = 10⁻⁶ m³. Den Exponenten mit 3 multiplizieren: -2 × 3 = -6.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Berechnen Sie: (3 × 10⁴) × (4 × 10⁻⁷) = ?',
          options: [
            '12 × 10⁻³',
            '1,2 × 10⁻²',
            '12 × 10³',
            '7 × 10⁻³',
            '1,2 × 10³',
          ],
          correctIndex: 1,
          explanation: '(3 × 10⁴) × (4 × 10⁻⁷) = (3 × 4) × (10⁴ × 10⁻⁷) = 12 × 10⁴⁺⁽⁻⁷⁾ = 12 × 10⁻³. Da 12 ≥ 10, muss normiert werden: 12 × 10⁻³ = 1,2 × 10⁻². Das Ergebnis ist also 1,2 × 10⁻² = 0,012. Das Normieren (sicherstellen, dass die Mantisse zwischen 1 und 10 liegt) ist der entscheidende letzte Schritt, den viele vergessen. Das Ergebnis 12 × 10⁻³ ist mathematisch korrekt, aber nicht in normierter wissenschaftlicher Notation. In der Physik und Chemie wird immer die normierte Form erwartet: 1,2 × 10⁻². In der Medizin könnten solche Berechnungen z.B. bei der Berechnung von Partikelkonzentrationen oder radioaktiven Zerfallsraten auftreten.',
          hints: [
            'Mantissen multiplizieren: 3 × 4 = 12. Exponenten addieren: 4 + (-7) = -3.',
            'Wenn Mantisse ≥ 10: durch 10 dividieren und Exponent um 1 erhöhen. 12 × 10⁻³ = 1,2 × 10⁻².',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Wirkstoff hat eine Plasmakonzentration von 250 ng/mL. Ein Patient hat 5 L Blut. Wie viel mg des Wirkstoffs sind insgesamt im Blut?',
          options: [
            '0,00125 mg',
            '1,25 mg',
            '125 mg',
            '0,125 mg',
            '12,5 mg',
          ],
          correctIndex: 1,
          explanation: 'Konzentration = 250 ng/mL. Umrechnung: 1 ng = 10⁻⁹ g = 10⁻⁶ mg. Also 250 ng/mL = 250 × 10⁻⁶ mg/mL = 0,00025 mg/mL = 0,25 µg/mL. Blutvolumen = 5 L = 5000 mL. Gesamtmenge = 0,00025 mg/mL × 5000 mL = 1,25 mg. Alternativ: 250 ng/mL × 5000 mL = 1 250 000 ng = 1 250 µg = 1,25 mg. Dies ist ein typisches pharmakokinetisches Rechenbeispiel: aus Plasmakonzentration und Verteilungsvolumen die Gesamtmenge berechnen. In der Praxis werden solche Berechnungen beim therapeutischen Drug Monitoring (TDM) durchgeführt, um zu kontrollieren, ob Medikamentenspiegel im therapeutischen Fenster liegen.',
          hints: [
            'Einheit umrechnen: ng zu mg ist Faktor 10⁻⁶ (nano = 10⁻⁹, also 1 ng = 10⁻⁶ mg).',
            'Gesamtmenge = Konzentration × Volumen. 5 L = 5000 mL nicht vergessen!',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welcher Präfix entspricht dem Faktor 10⁻⁹?',
          options: [
            'Mikro (µ)',
            'Piko (p)',
            'Nano (n)',
            'Femto (f)',
            'Milli (m)',
          ],
          correctIndex: 2,
          explanation: 'Nano (n) entspricht dem Faktor 10⁻⁹. Die Reihenfolge der kleinen Präfixe: Milli (m) = 10⁻³, Mikro (µ) = 10⁻⁶, Nano (n) = 10⁻⁹, Piko (p) = 10⁻¹², Femto (f) = 10⁻¹⁵. Nano ist in der Biomedizin besonders wichtig: DNA-Strukturen liegen im Nanometerbereich (Helixdurchmesser ~2 nm), Nanopartikel für Drug Delivery (10–1000 nm), hochsensitives Troponin T Referenzwert < 14 ng/L = 14 × 10⁻⁹ g/L. Merkhilfe: zwischen Mikro (10⁻⁶) und Piko (10⁻¹²) liegt Nano (10⁻⁹) — jeweils 3 Zehnerpotenzen Abstand. Zwischen je zwei benachbarten Präfixen liegt immer ein Faktor 10³ = 1000.',
          hints: [
            'Merke die Reihenfolge: Milli(10⁻³), Mikro(10⁻⁶), Nano(10⁻⁹), Piko(10⁻¹²), Femto(10⁻¹⁵).',
            'Zwischen je zwei Präfixen ist ein Faktor 10³ = 1000 Unterschied.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Die Halbwertszeit eines Medikaments beträgt 1,5 × 10⁴ s. Wie viele Stunden sind das?',
          options: [
            '4,17 h',
            '41,7 h',
            '0,417 h',
            '15 000 min',
            '250 min',
          ],
          correctIndex: 0,
          explanation: '1,5 × 10⁴ s = 15 000 s. Umrechnung: 1 h = 3600 s, also 15 000 s / 3600 s/h = 4,167 h ≈ 4,17 h. Das entspricht etwa 4 Stunden und 10 Minuten. Zum Vergleich: Die Halbwertszeit von Aspirin beträgt ca. 15–20 min = ~1000–1200 s, die von Phenobarbital ca. 79–120 h = ~285 000–432 000 s, die von Digoxin ca. 36 h. Eine Halbwertszeit von ~4 h liegt im Bereich kurzwirksamer Substanzen wie Morphin (2–4 h) oder Metoprolol (3–7 h). Nach ~5 Halbwertszeiten (hier ~21 h) ist der Wirkstoff praktisch vollständig eliminiert — ein wichtiges Konzept für die Dosierungsplanung.',
          hints: [
            '1 h = 3600 s. Teile durch 3600.',
            '1,5 × 10⁴ s = 15 000 s ÷ 3600 ≈ 4,2 h.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie viele nm sind 1 µm?',
          options: [
            '0,001 nm',
            '1000 nm',
            '100 nm',
            '0,1 nm',
            '10 nm',
          ],
          correctIndex: 1,
          explanation: '1 µm = 10⁻⁶ m und 1 nm = 10⁻⁹ m. Also: 1 µm / 1 nm = 10⁻⁶ m / 10⁻⁹ m = 10³ = 1000. Daher gilt: 1 µm = 1000 nm. Umgekehrt: 1 nm = 0,001 µm = 10⁻³ µm. Diese Umrechnung ist in der Zellbiologie fundamental: Zellorganellen (Mitochondrien: 1–10 µm = 1000–10 000 nm), Proteine (10–100 nm), DNA-Helix (2 nm Durchmesser). Das Auflösungsvermögen des Lichtmikroskops beträgt ca. 200 nm = 0,2 µm — alles Kleinere braucht Elektronenmikroskopie. Viren (20–300 nm) liegen unterhalb der Lichtmikroskopgrenze — sie sind im Lichtmikroskop nicht direkt sichtbar.',
          hints: [
            'Mikro = 10⁻⁶, Nano = 10⁻⁹. Faktor = 10⁻⁶/10⁻⁹ = 10³ = 1000.',
            'Je drei Potenzen → ein Präfix-Sprung → Faktor 1000.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Körper hat eine Masse von 0,075 kg. Wie lautet das in Gramm (g) und Milligramm (mg)?',
          options: [
            '75 g und 75 000 mg',
            '0,75 g und 750 mg',
            '7,5 g und 7500 mg',
            '750 g und 750 000 mg',
            '75 g und 7500 mg',
          ],
          correctIndex: 0,
          explanation: '0,075 kg × (1000 g/kg) = 75 g. 75 g × (1000 mg/g) = 75 000 mg = 7,5 × 10⁴ mg. Die Kette der Umrechnungen: kg → g: Faktor × 10³; g → mg: Faktor × 10³; also kg → mg: Faktor × 10⁶. 0,075 kg = 7,5 × 10⁻² kg = 7,5 × 10⁻² × 10³ g = 7,5 × 10¹ g = 75 g = 75 × 10³ mg = 75 000 mg. In der Pharmakologie entspricht 75 mg der Standarddosis von Clopidogrel (Thrombozytenaggregationshemmer) oder der Erhaltungsdosis von Diclofenac. Das Denken in Masseneinheiten und das sichere Konvertieren zwischen kg, g, mg und µg ist eine Grundkompetenz für Dosiersicherheit.',
          hints: [
            '1 kg = 1000 g = 10⁶ mg. Also × 10³ pro Präfix-Stufe.',
            '0,075 kg × 1000 = 75 g; 75 g × 1000 = 75 000 mg.',
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },

    {
      id: 'ph-1-03',
      title: 'Dimensionsanalyse und Einheitenumrechnung',
      content: `## Was ist Dimensionsanalyse?

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

Der **Wirkungsgrad** η (eta) = nutzbarer Energieoutput / zugeführter Energieinput ist dimensionslos (Energie/Energie = 1). Der Wirkungsgrad des menschlichen Herzens beträgt ca. 20–25 % — d.h. von der chemischen Energie des ATP werden nur 20–25 % in hydraulische Herzarbeit umgewandelt, der Rest wird als Wärme abgegeben. Das erklärt, warum körperliche Arbeit wärmt.`,

      lernziele: [
        'Die Methode der Dimensionsanalyse verstehen und zur Formelprüfung einsetzen können',
        'Physikalische Dimensionen der wichtigsten abgeleiteten Größen angeben können (Kraft, Druck, Energie, Leistung, Impuls)',
        'Einheiten sicher umrechnen mit dem Kettenmultiplikationsverfahren (km/h → m/s, mmHg → Pa, kcal → kJ)',
        'Klinisch relevante Umrechnungen beherrschen: Temperatur (°C, K, °F), Druck (mmHg, Pa, cmH₂O), Energie (kcal, kJ)',
        'Dimensionslose Größen erkennen und die Reynolds-Zahl als Beispiel aus der Hämodynamik erläutern können',
      ],

      sections: [
        {
          heading: 'Basisdimensionen des SI-Systems',
          text: 'Jede physikalische Größe lässt sich auf sieben Basisdimensionen zurückführen. Die Dimensionsanalyse nutzt diese Basisdimensionen, um die Korrektheit von Formeln zu prüfen.',
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
          heading: 'Dimensionsanalyse: Formeln überprüfen',
          text: 'Die Dimensionsanalyse nutzt die Tatsache, dass in jeder korrekten physikalischen Gleichung beide Seiten dieselbe Dimension haben müssen. Die Dimension einer Größe beschreibt ihre physikalische Natur in Form der Basisdimensionen Länge (L), Masse (M), Zeit (T), Stromstärke (I), Temperatur (Θ), Stoffmenge (N) und Lichtstärke (J). Jede abgeleitete Größe hat eine eindeutige Dimensionsformel: Kraft = M·L·T⁻², Druck = M·L⁻¹·T⁻², Energie = M·L²·T⁻², Leistung = M·L²·T⁻³. Wenn eine Herleitung zu einem Ausdruck führt, bei dem Dimensionen nicht stimmen (z.B. Meter + Sekunden addiert werden), ist garantiert ein Fehler passiert. Dimensionsanalyse ist damit eine zuverlässige Plausibilitätsprüfung — ohne Kenntnis der Lösung.',
          merksatz: 'Dimensionscheck: Beide Seiten einer Gleichung müssen dieselbe Dimension haben. Unterschiedliche Dimensionen addieren ist verboten — genauso wie Äpfel zu Orangen addieren.',
        },
        {
          heading: 'Kettenmultiplikation zur Einheitenumrechnung',
          text: 'Die sicherste Methode zur Einheitenumrechnung ist das Aufschreiben und Kürzen von Einheiten wie Brüche. Man multipliziert die gegebene Größe sukzessive mit Umrechnungsfaktoren der Form (neue Einheit / alte Einheit) — da Zähler und Nenner gleich sind, ist jeder Faktor = 1 und ändert den Wert nicht. Die alten Einheiten kürzen sich heraus. Beispiel: 72 km/h × (1000 m/1 km) × (1 h/3600 s) = 20 m/s. Das explizite Aufschreiben der Einheiten und das Kürzen verhindert Fehler. Diese Methode, auch "factor-label method" genannt, ist in der Chemie und Physik Standard und in der Medizin für Dosierungsberechnungen unverzichtbar.',
          merksatz: 'Merke: 1 m/s = 3,6 km/h (oder: km/h ÷ 3,6 = m/s). 1 mmHg ≈ 133 Pa. 1 kcal = 4,184 kJ. T(K) = T(°C) + 273,15.',
        },
        {
          heading: 'Klinische Druckumrechnungen',
          text: 'Im klinischen Alltag werden mehrere Druckeinheiten parallel verwendet. Der Blutdruck wird in mmHg (Millimeter Quecksilbersäule) gemessen, Beatmungsdrücke in cmH₂O (Zentimeter Wassersäule), der Atmosphärendruck in hPa oder bar, und die SI-Einheit ist Pascal. Umrechnungen: 1 mmHg = 133,3 Pa; 1 cmH₂O = 98,1 Pa; 1 bar = 10⁵ Pa; 1 atm = 101 325 Pa. Für einen normalen systolischen Blutdruck von 120 mmHg: 120 × 133,3 Pa = 15 996 Pa ≈ 16 kPa. Beatmungsdrücke liegen typischerweise bei 10–30 cmH₂O = 1–3 kPa. Das Verständnis dieser Zahlenverhältnisse hilft bei der Beurteilung von Beatmungsparametern und hämodynamischen Werten sowie beim Vergleich internationaler Fachliteratur.',
          merksatz: 'Druckumrechnungen: 1 atm = 101 325 Pa ≈ 760 mmHg ≈ 1013 hPa. Normal-RR: 120/80 mmHg ≈ 16/10,7 kPa. Beatmung: PEEP 5 cmH₂O ≈ 490 Pa ≈ 0,49 kPa.',
        },
        {
          heading: 'Reynolds-Zahl und Hämodynamik',
          text: 'Die Reynolds-Zahl (Re = ρ·v·d/η) ist eine dimensionslose Kennzahl, die angibt, ob eine Strömung laminar (geordnet, Re < 2300) oder turbulent (chaotisch, Re > 4000) ist. In der Physiologie fließt Blut in den meisten Gefäßen laminar — dies ist energieeffizient und geräuschlos. Turbulenz tritt auf bei hohen Flussgeschwindigkeiten, großen Gefäßdurchmessern oder niederer Viskosität (z.B. bei schwerer Anämie). Pathologische Turbulenzen in den Herzklappen erzeugen die hörbaren Herzgeräusche. Bei Aortenstenose steigt die Strömungsgeschwindigkeit durch die verengte Klappe dramatisch an — Re erhöht sich weit über 4000, Turbulenzen entstehen, das charakteristische raue Systolikum wird hörbar. Die Dimensionsanalyse bestätigt, dass Re einheitenlos ist.',
          merksatz: 'Reynolds-Zahl Re < 2300: laminar (normal in kleinen Gefäßen). Re > 4000: turbulent (Herzgeräusche, Aneurysmen). Re = ρ·v·d/η — dimensionslos, weil alle Einheiten sich heraus kürzen!',
        },
      ],

      merksätze: [
        'Dimensionsanalyse: Beide Seiten einer Gleichung müssen die GLEICHE Dimension haben — sonst ist die Formel falsch',
        '[Kraft] = M·L·T⁻² = kg·m·s⁻²; [Druck] = M·L⁻¹·T⁻² = kg·m⁻¹·s⁻²; [Energie] = M·L²·T⁻² = kg·m²·s⁻²',
        '[Leistung] = M·L²·T⁻³ = kg·m²·s⁻³; [Impuls] = M·L·T⁻¹ = kg·m·s⁻¹',
        'Kettenmultiplikation: Einheiten wie Brüche kürzen. 72 km/h × (1000 m/km) × (1 h/3600 s) = 20 m/s',
        'Wichtige Umrechnung: km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h',
        '1 mmHg ≈ 133 Pa; 120 mmHg ≈ 16 kPa (normaler Blutdruck); 1 atm ≈ 760 mmHg ≈ 101 325 Pa',
        'Temperatur: T(K) = T(°C) + 273,15; T(°F) = 1,8 × T(°C) + 32; 37°C = 310,15 K = 98,6°F',
        '1 kcal = 4,184 kJ; Grundumsatz ~1800 kcal/d ≈ 7500 kJ/d; 1 g Fett liefert ~9 kcal = ~37 kJ',
        'Reynolds-Zahl Re < 2300: laminar; Re > 4000: turbulent — dimensionslos, Einheiten kürzen sich heraus',
        'pH-Wert, Wirkungsgrad, Brechungsindex, Reynolds-Zahl: dimensionslose Größen ohne Einheit',
      ],

      altfrage: {
        question: 'Erklären Sie das Prinzip der Dimensionsanalyse und zeigen Sie am Beispiel der kinetischen Energie und des Blutdrucks, wie man Formeln prüft und Einheiten korrekt umrechnet.',
        answer: `Die Dimensionsanalyse beruht auf dem Prinzip der **dimensionalen Homogenität**: In jeder physikalisch korrekten Gleichung müssen beide Seiten dieselbe Dimension aufweisen. Dimensionen beschreiben die physikalische Natur einer Größe in Form der sieben Basisdimensionen Länge (L), Masse (M), Zeit (T), elektrische Stromstärke (I), Temperatur (Θ), Stoffmenge (N) und Lichtstärke (J).

**Beispiel kinetische Energie:** Die Formel E_kin = ½·m·v² lässt sich dimensionsanalytisch überprüfen. Die linke Seite hat die Dimension [E] = M·L²·T⁻². Die rechte Seite: [m·v²] = M·(L·T⁻¹)² = M·L²·T⁻². Beide Seiten stimmen überein — die Formel ist dimensionskonsistent. Würde man versehentlich E = m·v schreiben, ergäbe die rechte Seite M·L·T⁻¹ (= Dimension des Impulses) — ungleich der Energiedimension M·L²·T⁻². Der Fehler ist sofort sichtbar.

**Einheitenumrechnung Blutdruck:** Ein systolischer Blutdruck von 120 mmHg soll in Pascal (SI) umgerechnet werden. Mit dem Kettenmultiplikationsverfahren: 120 mmHg × (133,322 Pa / 1 mmHg) = 15 998,6 Pa ≈ 16 kPa. Der Umrechnungsfaktor 133,322 Pa/mmHg ergibt sich aus der Dichte von Quecksilber (13 600 kg/m³) und der Erdbeschleunigung: 1 mmHg = ρ·g·h = 13 600 kg/m³ × 9,81 m/s² × 0,001 m = 133,4 Pa.

Die Dimensionsanalyse ist ein doppelt nützliches Werkzeug: als Formelprüfung und als systematisches Umrechnungsverfahren. In der klinischen Praxis ist korrektes Einheitenhandling direkt sicherheitsrelevant — falsche Einheiten bei Medikamentendosen, Infusionsraten oder Laborwerten können zu schwerwiegenden Behandlungsfehlern führen.`,
      },

      klinischerBezug: `Dimensionsanalyse ist in der Medizin ein alltägliches Sicherheitsinstrument. Bei der Dosierungsberechnung (Dosis [mg] = Konzentration [mg/mL] × Volumen [mL]) sorgt das Einheitentracking für Fehlerfreiheit. Die Umrechnung zwischen mmHg und Pa ist notwendig, wenn Blutdruckmessgeräte kalibriert werden oder Druckgradienten bei Herzklappenstenosen berechnet werden. Die vereinfachte Bernoulli-Gleichung der Echokardiographie (ΔP = 4·v²; v in m/s, ΔP in mmHg) enthält einen impliziten Umrechnungsfaktor — Echokardiographen müssen diese Einheitenkonvention kennen. Ernährungsberechnungen (kcal ↔ kJ, g Makronährstoff → kJ) nutzen ebenfalls täglich das Kettenmultiplikationsverfahren.`,

      selfTest: [
        {
          question: 'Welche Dimension hat die physikalische Größe "Druck"?',
          options: [
            'M·L·T⁻²',
            'M·L²·T⁻²',
            'M·L⁻¹·T⁻²',
            'M·L²·T⁻³',
            'M·T⁻²',
          ],
          correctIndex: 2,
          explanation: 'Druck = Kraft/Fläche. Die Dimension der Kraft ist M·L·T⁻² (Newton = kg·m·s⁻²). Die Dimension der Fläche ist L². Also: Dimension des Drucks = (M·L·T⁻²)/L² = M·L⁻¹·T⁻². In SI-Einheiten: Pascal (Pa) = kg·m⁻¹·s⁻² = N/m². Der negative Exponent bei L im Druck bedeutet, dass Druck inversely proportional zur Fläche ist — je kleiner die Fläche, auf die eine Kraft wirkt, desto größer der Druck. Zur Übersicht: M·L·T⁻² ist Newton (Kraft), M·L²·T⁻² ist Joule (Energie), M·L²·T⁻³ ist Watt (Leistung). Diese Dimensionen auswendig zu kennen ist fundamental für die Dimensionsanalyse.',
          hints: [
            'Druck = Kraft / Fläche. Was ist die Dimension von Kraft? Von Fläche?',
            '[Kraft] = M·L·T⁻². [Fläche] = L². Also [Druck] = M·L·T⁻²/L² = M·L⁻¹·T⁻².',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie lautet die Umrechnung von 36 km/h in m/s?',
          options: [
            '100 m/s',
            '9,97 m/s',
            '10 m/s',
            '0,1 m/s',
            '360 m/s',
          ],
          correctIndex: 2,
          explanation: '36 km/h × (1000 m/km) × (1 h/3600 s) = 36 × 1000/3600 m/s = 36/3,6 m/s = 10 m/s. Die Faustregel lautet: km/h ÷ 3,6 = m/s. Also: 36 km/h ÷ 3,6 = 10 m/s. Umgekehrt: m/s × 3,6 = km/h. Diese Umrechnung kommt häufig in Physikaufgaben vor. Zum Vergleich: Maximale Blutströmungsgeschwindigkeit in der Aorta ca. 1,5 m/s = 5,4 km/h; Schrittmachergeschwindigkeit beim Gehen ca. 1,4 m/s ≈ 5 km/h; Nervenleitungsgeschwindigkeit motorisch bis 70 m/s = 252 km/h. Die Nervenleitungsgeschwindigkeit übersteigt damit ein Auto auf der Autobahn!',
          hints: [
            'Faustformel: km/h ÷ 3,6 = m/s. Oder: × (1000/3600).',
            '36 ÷ 3,6 = 10. Einheitenprüfung: km/h × m/km × h/s = m/s.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Patient hat eine Körpertemperatur von 39,5 °C (Fieber). Wie viel ist das in Kelvin und Fahrenheit?',
          options: [
            '312,65 K und 103,1 °F',
            '312,65 K und 71,1 °F',
            '366,5 K und 103,1 °F',
            '39,5 K und 103,1 °F',
            '310,15 K und 102,1 °F',
          ],
          correctIndex: 0,
          explanation: 'Kelvin: T(K) = T(°C) + 273,15 = 39,5 + 273,15 = 312,65 K. Fahrenheit: T(°F) = 1,8 × T(°C) + 32 = 1,8 × 39,5 + 32 = 71,1 + 32 = 103,1 °F. Körpertemperatur 37,0 °C = 310,15 K = 98,6 °F (Normwert). Fieberdefinition: > 38,0 °C = > 100,4 °F. 39,5 °C gilt als hohes Fieber. Ab 41 °C (= 105,8 °F = 314,15 K) drohen Hirnschäden durch Proteindenaturierung — Enzyme verlieren ihre Raumstruktur und damit ihre Funktion. Die Kelvin-Skala beginnt beim absoluten Nullpunkt (0 K = -273,15 °C), wo jede thermische Bewegung aufhört — relevant für Gasgesetze und thermodynamische Berechnungen.',
          hints: [
            'T(K) = T(°C) + 273,15. T(°F) = 1,8 × T(°C) + 32.',
            '39,5 + 273,15 = 312,65 K. 1,8 × 39,5 = 71,1; 71,1 + 32 = 103,1 °F.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche der folgenden Gleichungen ist dimensionsanalytisch FALSCH?',
          options: [
            'v = s / t (Geschwindigkeit = Weg/Zeit)',
            'F = m·a (Kraft = Masse × Beschleunigung)',
            'E = m·v (Energie = Masse × Geschwindigkeit)',
            'P = F·v (Leistung = Kraft × Geschwindigkeit)',
            'p = F/A (Druck = Kraft/Fläche)',
          ],
          correctIndex: 2,
          explanation: 'E = m·v ist dimensionsanalytisch falsch. [m·v] = M·L·T⁻¹ — das ist die Dimension des Impulses (kg·m/s), nicht der Energie! Die korrekte Formel für kinetische Energie ist E_kin = ½·m·v², mit Dimension [m·v²] = M·(L·T⁻¹)² = M·L²·T⁻², was der Dimension der Energie entspricht. Zum Vergleich: [v] = L·T⁻¹ (korrekt für Geschwindigkeit); [m·a] = M·L·T⁻² = N (korrekt für Newton); [F·v] = M·L·T⁻²·L·T⁻¹ = M·L²·T⁻³ = W (korrekt für Watt); [F/A] = M·L·T⁻²/L² = M·L⁻¹·T⁻² = Pa (korrekt für Pascal). Die Dimensionsanalyse entlarvt also die Verwechslung von Impuls und Energie sofort.',
          hints: [
            'Dimension der Energie: M·L²·T⁻² = kg·m²/s². Prüfe jede Option auf diese Dimension.',
            'E = m·v: [m·v] = kg·m/s = Impuls ≠ Energie! Energie braucht v² (Quadrat der Geschwindigkeit).',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Ernährungsplan enthält 2500 kcal/Tag. Wie viel ist das in MJ/Tag? (1 kcal = 4,184 kJ)',
          options: [
            '597,7 MJ/Tag',
            '10,46 MJ/Tag',
            '1046 MJ/Tag',
            '0,598 MJ/Tag',
            '10 460 MJ/Tag',
          ],
          correctIndex: 1,
          explanation: '2500 kcal × 4,184 kJ/kcal = 10 460 kJ = 10 460 × 10³ J / 10⁶ = 10,46 MJ. Die kcal (Kilokalorie) ist die traditionelle Einheit für den Energiegehalt von Lebensmitteln. 1 kcal ist die Energie, die nötig ist, um 1 kg Wasser um 1 °C zu erwärmen. In der Physik und modernen Ernährungswissenschaft wird SI-konform in Joule (oder Kilojoule) gemessen. Der Grundumsatz eines erwachsenen Menschen beträgt ca. 1600–2000 kcal/d = 6,7–8,4 MJ/d. 2500 kcal/d entspricht einem leicht erhöhten Energiebedarf — typisch für jemanden mit moderater körperlicher Aktivität. Die Nährwertdeklaration auf Lebensmitteln in der EU enthält seit 2014 verpflichtend beide Angaben: kJ und kcal.',
          hints: [
            '1 kcal = 4,184 kJ. Also 2500 kcal × 4,184 = ? kJ. Dann kJ in MJ: ÷ 1000.',
            '2500 × 4,184 = 10 460 kJ = 10,46 MJ.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zur Reynolds-Zahl ist KORREKT?',
          options: [
            'Die Reynolds-Zahl hat die Einheit Pascal.',
            'Bei Re > 2300 ist die Strömung immer laminar.',
            'Die Reynolds-Zahl ist dimensionslos; turbulente Strömung tritt bei Re > 4000 auf.',
            'Die Reynolds-Zahl misst den Blutdruck in Gefäßen.',
            'Bei geringer Viskosität des Blutes sinkt die Reynolds-Zahl.',
          ],
          correctIndex: 2,
          explanation: 'Die Reynolds-Zahl Re = ρ·v·d/η ist dimensionslos — alle Einheiten kürzen sich heraus. Laminar ist die Strömung bei Re < 2300, turbulent bei Re > 4000, dazwischen liegt ein Übergangsbereich. Im menschlichen Körper ist Blutströmung in kleinen Gefäßen (Kapillaren, Arteriolen) immer laminar (Re << 2300). In der Aorta kann Re ca. 1500–4500 erreichen — bei hohem Herzauswurf (Sport, Fieber) auch turbulent. Bei Anämie sinkt die Blutviskosität η, was Re erhöht und Turbulenz begünstigt — das erklärt das Anämiegeräusch (strömungsbedingte Herzgeräusche bei starker Anämie). Eine sinkende Viskosität erhöht Re (nicht senkt es), weil η im Nenner steht.',
          hints: [
            'Reynolds-Zahl: Re = ρ·v·d/η — η (Viskosität) steht im Nenner. Kleines η → großes Re.',
            'Dimensionslos = keine Einheit. Laminar bei Re < 2300, turbulent bei Re > 4000.',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welche Dimension hat die Leistung P = W/t (Arbeit/Zeit)?',
          options: [
            'M·L·T⁻²',
            'M·L²·T⁻²',
            'M·L²·T⁻³',
            'M·L⁻¹·T⁻²',
            'M·L·T⁻³',
          ],
          correctIndex: 2,
          explanation: 'Leistung P = Arbeit/Zeit = W/t. Die Dimension der Arbeit (Energie) ist M·L²·T⁻². Die Dimension der Zeit ist T. Also: [P] = M·L²·T⁻²/T = M·L²·T⁻³. In SI-Einheiten: Watt (W) = J/s = kg·m²·s⁻³. Zur Übersicht: M·L·T⁻² ist Newton, M·L²·T⁻² ist Joule, M·L⁻¹·T⁻² ist Pascal. Die Herzleistung in Ruhe beträgt ca. 1–2 W (hydraulisch); bei maximaler Belastung bis ~20–25 W. Die metabolische Gesamtleistung des Körpers in Ruhe (Grundumsatz) beträgt ca. 80–90 W — davon erbringt das Herz nur ~2 W hydraulisch, der Rest wird als Wärme abgegeben oder von anderen Organen verbraucht.',
          hints: [
            '[Leistung] = [Energie]/[Zeit] = M·L²·T⁻²/T — Exponent von T um 1 erhöhen.',
            'Watt = Joule/Sekunde = kg·m²·s⁻³. Der Exponent -3 bei T (nicht -2 wie bei Joule).',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Blutdruck von 80 mmHg (diastolisch) soll in cmH₂O umgerechnet werden. (1 mmHg = 1,36 cmH₂O)',
          options: [
            '58,8 cmH₂O',
            '108,8 cmH₂O',
            '80 cmH₂O',
            '1088 cmH₂O',
            '5,88 cmH₂O',
          ],
          correctIndex: 1,
          explanation: '80 mmHg × 1,36 cmH₂O/mmHg = 108,8 cmH₂O. Der Faktor 1,36 ergibt sich aus dem Dichteverhältnis von Quecksilber (13 600 kg/m³) zu Wasser (1000 kg/m³): 13 600/1000 = 13,6 — ein mm Hg entspricht 13,6 mm H₂O = 1,36 cm H₂O. Drücke in cmH₂O werden oft in der Beatmungsmedizin verwendet: PEEP (Positiver endexspiratorischer Druck) typisch 5–20 cmH₂O, Atemwegsdruck 10–40 cmH₂O. Der diastolische Blutdruck von 80 mmHg = 108,8 cmH₂O verdeutlicht, dass Beatmungsdrücke (5–40 cmH₂O) weit kleiner als der Blutdruck (80–120 mmHg = 109–163 cmH₂O) sind — das Herz ist der stärkere Druckerzeuger.',
          hints: [
            'Kettenmultiplikation: 80 mmHg × (1,36 cmH₂O / 1 mmHg) = ?',
            '80 × 1,36 = 108,8. Einheit: mmHg kürzt sich, übrig bleibt cmH₂O.',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
