import type { Kapitel } from '../types';

export const mathKap4: Kapitel = {
  id: 'math-kap4',
  title: 'Einheiten und Maße',
  subject: 'mathematik',
  icon: '📊',
  estimatedTime: '45 min',
  unterkapitel: [
    {
      id: 'ma-4-01',
      title: 'Länge, Fläche und Volumen — Umrechnung',
      content: `# Länge, Fläche und Volumen — Umrechnung

Die Umrechnung von Maßeinheiten gehört zu den häufigsten Fehlerquellen am MedAT. Besonders tückisch sind Flächen- und Volumeneinheiten, da bei der Umrechnung nicht der Faktor 10, 100 oder 1000, sondern dessen Quadrat oder Kubik angewendet werden muss. Dieser Abschnitt erklärt das Prinzip systematisch und mit klinischen Bezügen.

## Längeneinheiten

Die metrischen Längeneinheiten sind durch Zehnerpotenzen verbunden:
1 km = 1.000 m = 10³ m
1 m = 10 dm = 100 cm = 1.000 mm
1 mm = 1.000 μm = 10³ μm
1 μm = 1.000 nm = 10³ nm

Eselsbrücke für die Reihenfolge: km — m — dm — cm — mm — μm — nm (je Schritt Faktor 10).

In der Medizin: Zellgröße 10–100 μm; Zellkern 5–10 μm; Mitochondrien 0,5–10 μm; Ribosomen ~25 nm; DNA-Doppelhelix 2 nm Durchmesser.

## Flächeneinheiten — der häufigste Irrtum

**ACHTUNG:** Bei Flächeneinheiten wird der Faktor QUADRIERT!

1 m² = 100 cm × 100 cm = 10.000 cm² = 10⁴ cm²

(NICHT 100 cm²! Das ist der häufigste Fehler am MedAT!)

Warum? Eine Fläche von 1 m² = 1 m × 1 m = 100 cm × 100 cm = 10.000 cm².

Weitere Flächenumrechnungen:
- 1 km² = 10⁶ m² (nicht 10³ m²!)
- 1 m² = 10⁴ cm²
- 1 cm² = 10² mm² = 100 mm²
- 1 mm² = 10⁶ μm²

**Regel:** Beim Umrechnen von Längeneinheiten in Flächeneinheiten den Faktor quadrieren. Wenn 1 m = 100 cm, dann 1 m² = 100² cm² = 10.000 cm².

## Volumeneinheiten — der Faktor wird kubisch

Bei Volumen wird der Faktor KUBIERT:

1 m³ = 100 cm × 100 cm × 100 cm = 1.000.000 cm³ = 10⁶ cm³

Wichtige Beziehungen:
- 1 m³ = 1.000 L (ein Kubikdezimeter = ein Liter!)
- 1 L = 1 dm³ = 1.000 mL = 1.000 cm³
- 1 mL = 1 cm³ (sehr wichtig in der Medizin!)
- 1 dL = 100 mL

Diese Beziehungen sind für Laborbefunde essenziell: Blutvolumen ~5 L = 5.000 mL = 5.000 cm³.

## Praxisnähe — MedAT-Fallen

Die häufigsten Fallen am MedAT zu Einheiten:
1. 1 m² = 10.000 cm² (nicht 100 cm²)
2. 1 L = 1.000 mL (nicht 100 mL)
3. 1 mL = 1 cm³ (nicht 10 cm³)
4. 1 m³ = 10⁶ cm³ (nicht 10³ cm³)

**Körperoberfläche** wird in m² angegeben und in Dosierungsberechnungen (z.B. Chemotherapie) genutzt. Normal: ~1,7–2,0 m² für einen erwachsenen Menschen. Die Mosteller-Formel: BSA = √(Größe × Gewicht / 3600) in m².

**Flüssigkeitsbilanz** im Krankenhaus wird in mL gemessen. Einfuhr (Trinken + Infusionen) und Ausfuhr (Urin + Verluste) werden bilanziert. Normal: Tagesharnmenge ~1.500 mL, Perspiratio insensibilis ~700 mL (über Haut und Lungen).`,
      lernziele: [
        'Längeneinheiten von km bis nm korrekt umrechnen',
        'Den quadratischen Faktor bei Flächeneinheiten anwenden (1 m² = 10.000 cm²)',
        'Den kubischen Faktor bei Volumeneinheiten anwenden (1 m³ = 10⁶ cm³)',
        'Die Beziehung 1 mL = 1 cm³ = 1/1000 L kennen',
      ],
      sections: [
        {
          heading: 'Längeneinheiten — lineare Umrechnung',
          text: 'km → m → dm → cm → mm → μm → nm, je Schritt Faktor 10. Für große Sprünge: 1 km = 10⁶ mm; 1 m = 10⁹ nm. Medizinische Größenordnungen: Körpergröße ~1,7 m; Zellen 10–100 μm; Viren 20–300 nm; Proteinmoleküle 1–10 nm; Atome ~0,1 nm (1 Ångström). Das Verständnis dieser Größenordnungen ist für die Biologie und Physik am MedAT wichtig.',
          merksatz: 'Längenreihe: km–m–dm–cm–mm–μm–nm, je Faktor 10; 1 m = 10⁹ nm',
        },
        {
          heading: 'Flächeneinheiten — Faktor wird quadriert',
          text: '1 m = 100 cm → 1 m² = 100² cm² = 10.000 cm². Das ist die wichtigste Regel! Merkhilfe: Stell dir ein 1 m × 1 m-Quadrat vor. In jeder Richtung 100 cm → 100 × 100 = 10.000 Zentimeter-Quadrate. Weitere Beispiele: 1 cm = 10 mm → 1 cm² = 100 mm²; 1 km = 1.000 m → 1 km² = 10⁶ m². Klinisch: Körperoberfläche ~1,73 m², Hautfläche eines einzelnen Blatts ~20 cm².',
        },
        {
          heading: 'Volumeneinheiten — Faktor wird kubiert',
          text: '1 m = 100 cm → 1 m³ = 100³ cm³ = 10⁶ cm³. Wichtig: 1 L = 1 dm³ (ein Liter entspricht exakt einem Kubikdezimeter). Da 1 dm = 10 cm, gilt 1 dm³ = 10³ cm³ = 1.000 cm³ = 1.000 mL. Also 1 mL = 1 cm³ — diese Gleichheit wird in der klinischen Praxis ständig genutzt (Injektionsvolumen in mL = cm³). Blutvolumen Erwachsener: 5 L = 5.000 mL = 5.000 cm³.',
        },
      ],
      merksätze: [
        '1 m² = 10.000 cm² (nicht 100!) — Flächenumrechnung: Faktor quadrieren',
        '1 m³ = 10⁶ cm³; 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³',
        'Länge × k → Fläche × k² → Volumen × k³',
      ],
      altfrage: {
        question: 'Eine quadratische Wundfläche hat eine Kantenlänge von 3 cm. Wie groß ist die Wundfläche in mm²?',
        answer: 'Schritt 1: Fläche in cm²: A = 3 cm × 3 cm = 9 cm². Schritt 2: Umrechnung cm² → mm²: 1 cm = 10 mm → 1 cm² = 100 mm². Also: 9 cm² × 100 = 900 mm². Ergebnis: Die Wundfläche beträgt 900 mm². (Alternativ: 3 cm = 30 mm → A = 30 mm × 30 mm = 900 mm².)',
      },
      klinischerBezug: 'In der Onkologie und Dermatologie werden Wund- und Tumorflächen gemessen. Die Verbrennungsflächenregel "Neunerregel" gibt Körperanteile als Prozent der Körperoberfläche (KOF) an: Kopf 9%, je Arm 9%, Rumpf vorne 18%, Rumpf hinten 18%, je Bein 18%, Genitale 1% = 100%. Die KOF eines Erwachsenen beträgt ~1,7–2,0 m² = 17.000–20.000 cm². Bei Verbrennungen über 15–20% KOF droht lebensbedrohlicher Flüssigkeitsverlust — ein klinisch unmittelbar relevantes Konzept.',
      selfTest: [
        {
          question: '1 m² entspricht wie viel cm²?',
          options: ['10.000 cm²', '100 cm²', '1.000 cm²', '1.000.000 cm²', '10 cm²'],
          correctIndex: 0,
          explanation: '1 m = 100 cm. 1 m² = (100 cm)² = 10.000 cm². Der Faktor wird beim Flächenübergang quadriert: 100² = 10.000.',
          hints: ['1 m = 100 cm. Was ist 100²?', '1 m × 1 m = 100 cm × 100 cm = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viele mL sind 2,5 L?',
          options: ['2.500 mL', '250 mL', '25.000 mL', '0,25 mL', '25 mL'],
          correctIndex: 0,
          explanation: '1 L = 1.000 mL. 2,5 L = 2,5 × 1.000 = 2.500 mL. Diese Umrechnung ist in der klinischen Praxis täglich relevant (Infusionsmengen, Flüssigkeitsbilanz).',
          hints: ['1 L = 1.000 mL. Multipliziere 2,5 mit 1.000.', '2,5 × 1.000 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: '1 m³ entspricht wie viel cm³?',
          options: ['1.000.000 cm³', '1.000 cm³', '100.000 cm³', '10.000 cm³', '100 cm³'],
          correctIndex: 0,
          explanation: '1 m = 100 cm. 1 m³ = (100 cm)³ = 10⁶ cm³ = 1.000.000 cm³. Der Faktor wird kubiert: 100³ = 1.000.000.',
          hints: ['1 m = 100 cm. Was ist 100³?', '100 × 100 × 100 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Injektionsvolumen beträgt 2 mL. Wie viel cm³ ist das?',
          options: ['2 cm³', '0,2 cm³', '20 cm³', '0,002 cm³', '200 cm³'],
          correctIndex: 0,
          explanation: '1 mL = 1 cm³ — diese Gleichheit gilt exakt! 2 mL = 2 cm³. In der Medizin werden Injektionsvolumina in mL und Spritzenvolumina in mL angegeben, aber das Volumen ist identisch mit cm³.',
          hints: ['1 mL = 1 cm³ ist eine exakte Gleichheit.', 'Also 2 mL = 2 cm³.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine rechteckige Wundauflage misst 5 cm × 8 cm. Wie groß ist die Fläche in mm²?',
          options: ['4.000 mm²', '400 mm²', '40 mm²', '40.000 mm²', '4 mm²'],
          correctIndex: 0,
          explanation: 'Fläche in cm²: 5 × 8 = 40 cm². Umrechnung: 1 cm = 10 mm → 1 cm² = 100 mm². 40 cm² × 100 = 4.000 mm². Alternativ: 50 mm × 80 mm = 4.000 mm².',
          hints: ['Zuerst Fläche in cm², dann Umrechnung: 1 cm² = 100 mm².', '5 × 8 = 40 cm²; 40 × 100 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Volumen in Liter hat ein Würfel mit Kantenlänge 2 dm?',
          options: ['8 L', '2 L', '6 L', '4 L', '0,008 L'],
          correctIndex: 0,
          explanation: 'V = (2 dm)³ = 8 dm³ = 8 L (da 1 dm³ = 1 L). Ein Würfel mit 2 dm Kantenlänge hat 8× das Volumen eines Einheitswürfels mit 1 dm Kantenlänge (= 1 L).',
          hints: ['V = a³ = (2 dm)³ = 8 dm³. Und 1 dm³ = 1 L.', '2³ = 8 → 8 dm³ = 8 L.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-4-02',
      title: 'Zeit, Geschwindigkeit, Beschleunigung',
      content: `# Zeit, Geschwindigkeit, Beschleunigung

Zeit, Geschwindigkeit und Beschleunigung sind die kinematischen Grundgrößen. In der Medizin erscheinen sie bei der Berechnung der Herzfrequenz (Schläge pro Sekunde = Hz), der Nervenimpulsgeschwindigkeit (m/s), der Blutströmungsgeschwindigkeit (cm/s) und der Beschleunigung des Blutes während der Herzaktion. Für den MedAT sind vor allem die Umrechnungen und die kinematischen Grundformeln relevant.

## Zeiteinheiten

Das Standardsystem der Zeiteinheiten:
- 1 Minute = 60 Sekunden (s)
- 1 Stunde (h) = 60 Minuten = 3.600 s
- 1 Tag = 24 h = 1.440 min = 86.400 s
- 1 Jahr ≈ 365,25 Tage ≈ 3,156 × 10⁷ s

Diese Umrechnungen sind nicht dezimal (wie bei metrischen Einheiten), sondern historisch gewachsen (60er-System aus Babylonien). Besonders die 86.400 Sekunden pro Tag und die ~3,15 × 10⁷ Sekunden pro Jahr kommen in physikalischen Aufgaben vor.

Herzfrequenz: 70 Schläge/min = 70/60 Schläge/s ≈ 1,17 Hz. Die Periode (Dauer eines Herzschlags): T = 1/f = 1/1,17 s ≈ 0,86 s (bei 70/min).

## Geschwindigkeit und ihre Umrechnung

Geschwindigkeit v = s/t (Weg durch Zeit). SI-Einheit: m/s.

Umrechnung km/h → m/s: v [m/s] = v [km/h] / 3,6

Merksatz: "Durch 3,6 teilen, um von km/h auf m/s zu kommen." Umgekehrt: × 3,6.

Herleitung: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s.

Beispiele:
- 36 km/h = 10 m/s
- 100 km/h = 27,8 m/s
- 1 m/s = 3,6 km/h

Nervenimpulsgeschwindigkeit myelinisierter A-Fasern: 40–70 m/s; unmyelinisierter C-Fasern: 0,5–2 m/s. Aorta-Blutströmung systolisch: ~1 m/s; kapilläre Strömung: ~1 mm/s = 0,001 m/s — 1.000× langsamer!

## Gleichförmige Bewegung

Bei konstanter Geschwindigkeit gilt: s = v × t (Weg = Geschwindigkeit × Zeit).

Diese Formel wird oft umgestellt: v = s/t oder t = s/v. Typische Aufgabe: Blut legt im Kreislauf pro Minute welchen Weg zurück? Mit v ≈ 0,5 m/s und t = 60 s: s = 0,5 × 60 = 30 m. Eine erstaunlich große Strecke!

## Gleichmäßig beschleunigte Bewegung

Wenn eine Kraft konstant auf ein Objekt wirkt, entsteht gleichförmige Beschleunigung a (in m/s²).

Die kinematischen Grundformeln:
1. v = v₀ + a × t (Geschwindigkeit zu Zeit t, wenn v₀ die Anfangsgeschwindigkeit)
2. s = v₀ × t + ½ × a × t² (Weg bei gleichmäßiger Beschleunigung)
3. v² = v₀² + 2 × a × s (Geschwindigkeit als Funktion des Wegs)

Der freie Fall: a = g = 9,81 m/s² ≈ 10 m/s² (Erdbeschleunigung). Bei v₀ = 0 vereinfacht sich: v = g × t und s = ½ × g × t².

Fallhöhe-Aufgabe: Aus welcher Höhe fällt ein Körper, wenn er nach 3 s aufschlägt? s = ½ × 10 × 9 = 45 m.

## Klinischer Bezug

In der Notfallmedizin ist die Kinetik von Bedeutung: Bei einem Verkehrsunfall aus 50 km/h (= 13,9 m/s) wirken auf den Körper enorme Kräfte (F = m × a). Die Verzögerungszeit beim Airbag beträgt ~20 ms; die Verzögerungsbeschleunigung: a = Δv/Δt = 13,9/0,02 = 695 m/s² ≈ 71 g (71-fache Erdbeschleunigung). Das erklärt Verletzungsmuster bei Hochrasanztraumen.`,
      lernziele: [
        'Zeiteinheiten (Stunden, Minuten, Sekunden) korrekt umrechnen',
        'Geschwindigkeit von km/h nach m/s und zurück umrechnen',
        'Die Formeln der gleichförmigen und gleichmäßig beschleunigten Bewegung anwenden',
        'Alltagsphysikalische Größen (Erdbeschleunigung g ≈ 10 m/s²) in Berechnungen nutzen',
      ],
      sections: [
        {
          heading: 'Zeiteinheiten — nicht-dezimales System',
          text: '1 h = 60 min = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ 3,15 × 10⁷ s. Das 60er-System stammt aus Babylonien. In der Medizin: Halbwertszeiten von Medikamenten werden in Stunden oder Minuten angegeben. Herzfrequenz in Schlägen/min. EKG-Intervalle in ms (Millisekunden): PR-Intervall 120–200 ms, QRS-Komplex < 120 ms. Blut-Kreislaufzeit: ~1 Minute beim Gesunden.',
          merksatz: '1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s (Näherung für Physikaufgaben)',
        },
        {
          heading: 'Geschwindigkeitsumrechnung: km/h ↔ m/s',
          text: 'Der Faktor 3,6 verbindet km/h und m/s: m/s = km/h ÷ 3,6; km/h = m/s × 3,6. Herleitung: 1 km/h = 1000 m / 3600 s = 1/3,6 m/s. Merkhilfe: 36 km/h = 10 m/s (leicht merkbar). Im MedAT-Kontext: Blutströmung in Aorta ~100 cm/s = 1 m/s = 3,6 km/h; Nervenleitgeschwindigkeit 70 m/s = 252 km/h. Diese Größenordnungen helfen beim Einschätzen physiologischer Parameter.',
        },
        {
          heading: 'Kinematik — Gleichförmig und beschleunigt',
          text: 'Gleichförmige Bewegung (a=0): s = v × t. Gleichmäßig beschleunigt (a=const): v = v₀ + at; s = v₀t + ½at²; v² = v₀² + 2as. Freier Fall: v₀ = 0, a = g = 9,81 m/s² ≈ 10 m/s². Nach t Sekunden: v = g × t, s = ½ × g × t². Ein Körper fällt in 1 s: s = ½ × 10 × 1 = 5 m. In der Notfallmedizin relevant: Aufprallgeschwindigkeit beim Sturz aus Höhe h: v = √(2gh).',
        },
      ],
      merksätze: [
        'Geschwindigkeit: v [m/s] = v [km/h] / 3,6; merke 36 km/h = 10 m/s',
        'Freier Fall: v = g × t; s = ½ × g × t²; g ≈ 9,81 m/s² ≈ 10 m/s²',
        '1 h = 3.600 s; 1 Tag = 86.400 s; Herzfrequenz 60/min = 1 Hz',
      ],
      altfrage: {
        question: 'Ein Rettungswagen fährt mit 90 km/h. Wie lange braucht er (in Sekunden), um 500 m zurückzulegen?',
        answer: 'Schritt 1: Umrechnung: 90 km/h = 90/3,6 = 25 m/s. Schritt 2: Zeit: t = s/v = 500 m / 25 m/s = 20 s. Antwort: Der Rettungswagen braucht 20 Sekunden.',
      },
      klinischerBezug: 'Die Nervenleitgeschwindigkeit (NLG) ist eine wichtige neurophysiologische Messgröße. Myelinisierte A-alpha-Fasern (propriozeptiv, motorisch): 60–80 m/s. A-delta-Fasern (Schmerz, Temperatur): 5–30 m/s. C-Fasern (Schmerz, unmyelinisiert): 0,5–2 m/s. Diese enormen Unterschiede erklären, warum man bei Verbrennung zuerst scharfen Sofortschmerz (A-delta, schnell) spürt, dann dumpfen Dauerschmerz (C-Fasern, langsam). Die NLG-Messung wird diagnostisch bei Polyneuropathie eingesetzt.',
      selfTest: [
        {
          question: '72 km/h entsprechen wie viel m/s?',
          options: ['20 m/s', '200 m/s', '0,02 m/s', '7,2 m/s', '2 m/s'],
          correctIndex: 0,
          explanation: 'v [m/s] = 72 / 3,6 = 20 m/s. Merke: 36 km/h = 10 m/s → 72 km/h = 20 m/s. Oder direkt: 72.000 m / 3.600 s = 20 m/s.',
          hints: ['m/s = km/h / 3,6. Merke: 36 km/h = 10 m/s.', '72 / 3,6 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Körper fällt aus dem Stand (v₀=0) für 4 Sekunden (g ≈ 10 m/s²). Welche Fallhöhe legt er zurück?',
          options: ['80 m', '40 m', '160 m', '20 m', '8 m'],
          correctIndex: 0,
          explanation: 's = ½ × g × t² = ½ × 10 × 16 = 80 m. Bei gleichmäßig beschleunigter Bewegung mit v₀=0 gilt s = ½at².',
          hints: ['Freier Fall, v₀=0: s = ½ × g × t². t = 4 s, g = 10 m/s².', '½ × 10 × 4² = ½ × 10 × 16 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie viele Sekunden hat ein Tag?',
          options: ['86.400 s', '3.600 s', '1.440 s', '24.000 s', '100.000 s'],
          correctIndex: 0,
          explanation: '1 Tag = 24 h × 60 min/h × 60 s/min = 24 × 3.600 = 86.400 s.',
          hints: ['1 Stunde = 3.600 s. Ein Tag hat 24 Stunden.', '24 × 3.600 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Zug beschleunigt gleichmäßig von 0 auf 72 km/h in 10 s. Wie groß ist die Beschleunigung in m/s²?',
          options: ['2 m/s²', '7,2 m/s²', '0,2 m/s²', '72 m/s²', '20 m/s²'],
          correctIndex: 0,
          explanation: 'Umrechnung: 72 km/h = 20 m/s. Beschleunigung: a = Δv/Δt = 20 m/s / 10 s = 2 m/s².',
          hints: ['Erst 72 km/h in m/s umrechnen (÷ 3,6).', 'a = Δv / Δt = 20 m/s / 10 s.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die Herzfrequenz beträgt 75 Schläge/min. Was ist die Periodendauer eines Herzschlags?',
          options: ['0,8 s', '75 s', '0,013 s', '1,25 s', '0,08 s'],
          correctIndex: 0,
          explanation: 'f = 75/min = 75/60 Hz = 1,25 Hz. T = 1/f = 1/1,25 = 0,8 s. Die Periodendauer beträgt 0,8 s (800 ms). In 800 ms: Systole ~300 ms, Diastole ~500 ms.',
          hints: ['Frequenz f = 75/60 Schläge/Sekunde = 1,25 Hz. Periodendauer T = 1/f.', 'T = 1/1,25 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Geschwindigkeit (m/s) hat ein Körper nach 5 s freiem Fall (v₀=0, g=10 m/s²)?',
          options: ['50 m/s', '25 m/s', '250 m/s', '5 m/s', '100 m/s'],
          correctIndex: 0,
          explanation: 'v = v₀ + g × t = 0 + 10 × 5 = 50 m/s. Das entspricht 50 × 3,6 = 180 km/h — nach nur 5 Sekunden freiem Fall! Dies zeigt die Gefährlichkeit von Stürzen aus großer Höhe.',
          hints: ['v = v₀ + g × t. v₀ = 0, g = 10 m/s², t = 5 s.', 'v = 0 + 10 × 5 = ?'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-4-03',
      title: 'SI-System — Grundeinheiten und abgeleitete Größen',
      content: `# SI-System — Grundeinheiten und abgeleitete Größen

Das Internationale Einheitensystem (Système International d'Unités, SI) ist das weltweit verbindliche Maßsystem für Wissenschaft und Medizin. Es basiert auf sieben Grundeinheiten, aus denen alle anderen Maßeinheiten abgeleitet werden. Für den MedAT ist das Verständnis des SI-Systems fundamental — sowohl für Physik als auch für Chemie und Biologie.

## Die sieben SI-Grundeinheiten

| Größe | Einheit | Symbol |
|-------|---------|--------|
| Länge | Meter | m |
| Masse | Kilogramm | kg |
| Zeit | Sekunde | s |
| Elektrische Stromstärke | Ampere | A |
| Temperatur | Kelvin | K |
| Stoffmenge | Mol | mol |
| Lichtstärke | Candela | cd |

Merksatz für die ersten vier (die wichtigsten für den MedAT): **"Meter, Kilogramm, Sekunde, Ampere"** — m, kg, s, A.

Wichtige Besonderheit: Die Temperatur-Basiseinheit ist Kelvin (K), nicht Celsius (°C). T [K] = T [°C] + 273,15. Der absolute Nullpunkt ist 0 K = −273,15°C, bei dem jede Wärmebewegung aufhört.

## Abgeleitete SI-Einheiten

Aus den Grundeinheiten werden alle anderen Größen abgeleitet:

| Größe | Einheit | Symbol | In Grundeinheiten |
|-------|---------|--------|-------------------|
| Kraft | Newton | N | kg·m/s² |
| Druck | Pascal | Pa | N/m² = kg/(m·s²) |
| Energie/Arbeit | Joule | J | N·m = kg·m²/s² |
| Leistung | Watt | W | J/s = kg·m²/s³ |
| Elektrische Ladung | Coulomb | C | A·s |
| Spannung | Volt | V | J/C = kg·m²/(A·s³) |
| Widerstand | Ohm | Ω | V/A = kg·m²/(A²·s³) |
| Frequenz | Hertz | Hz | 1/s |

## Medizinisch relevante Nicht-SI-Einheiten

In der klinischen Medizin werden auch Einheiten verwendet, die nicht zum SI-System gehören, aber toleriert werden:

- **mmHg (Millimeter Quecksilbersäule):** Blutdruck, Augeninnendruck; 1 mmHg = 133,32 Pa; 1 atm = 760 mmHg = 101.325 Pa
- **bar:** 1 bar = 10⁵ Pa; Beatmungsgeräte in mbar
- **kcal/kJ:** Energiegehalt von Nahrung; 1 kcal = 4,184 kJ; Ruheumsatz ~2.000 kcal/Tag
- **Dalton (Da):** Molekülmasse; 1 Da = 1 g/mol = 1,66 × 10⁻²⁷ kg; Hämoglobin 64 kDa

## Dimensionsanalyse

Die Dimensionsanalyse ist eine Methode, um Formeln zu überprüfen und Einheiten umzurechnen. Das Prinzip: Die Einheiten auf beiden Seiten einer Gleichung müssen übereinstimmen.

Beispiel: Arbeit W = F × s. Einheiten: [N] × [m] = [kg·m/s²] × [m] = [kg·m²/s²] = [J]. Stimmt!

Beispiel 2: Überprüfung der Druckformel P = ρ × g × h (hydrostatischer Druck). [kg/m³] × [m/s²] × [m] = [kg/(m·s²)] = [Pa]. Stimmt!

Die Dimensionsanalyse hilft beim MedAT, wenn man sich an eine Formel nicht erinnert — man kann sie aus den Einheiten rekonstruieren.

## Klinische Anwendungen

Blutdruck: Systolisch 120 mmHg = 120 × 133,32 Pa ≈ 16.000 Pa = 16 kPa. Der physiologische Druck ist moderat; zum Vergleich: Ein Autoreifen hat ~2–3 bar = 2–3 × 10⁵ Pa. Herzleistung: Das Herz pumpt ~70 mL Blut pro Schlag bei einem mittleren arteriellen Druck von ~100 mmHg = 13.330 Pa. Leistung = F × v = P × Q (Druck × Volumenstrom) ≈ 13.330 Pa × 80 × 10⁻⁶ m³/s ≈ 1,07 W. Das Herz leistet unter Ruhebedingungen ca. 1 Watt Pumpleistung.`,
      lernziele: [
        'Die sieben SI-Grundeinheiten benennen und zuordnen',
        'Abgeleitete Einheiten (Newton, Pascal, Joule, Watt) aus Grundeinheiten ableiten',
        'Klinisch relevante Nicht-SI-Einheiten (mmHg, kcal, Dalton) kennen und umrechnen',
        'Dimensionsanalyse zur Formelüberprüfung anwenden',
      ],
      sections: [
        {
          heading: 'Die sieben Grundeinheiten',
          text: 'Meter (m) für Länge, Kilogramm (kg) für Masse, Sekunde (s) für Zeit, Ampere (A) für elektrischen Strom, Kelvin (K) für Temperatur, Mol (mol) für Stoffmenge, Candela (cd) für Lichtstärke. Für den MedAT sind m, kg, s, A und mol die häufigsten. Mol ist besonders wichtig für die Chemie: 1 mol enthält N_A = 6,022 × 10²³ Teilchen. Temperatur in Kelvin: T[K] = T[°C] + 273. Körpertemperatur 37°C = 310 K.',
          merksatz: '7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd — für MedAT besonders: m, kg, s, A, mol',
        },
        {
          heading: 'Abgeleitete Einheiten und ihre Bedeutung',
          text: 'Newton N = kg·m/s² ist die Einheit der Kraft (F = m×a). Pascal Pa = N/m² ist die Einheit des Drucks. Joule J = N·m ist die Einheit der Energie und Arbeit. Watt W = J/s ist die Einheit der Leistung. Diese Kette (N → Pa, J → W) hilft beim Umrechnen. Medizinisch: Blutdruck in Pa, Herzleistung in W, Strahlendosis in Gray (Gy = J/kg), elektrisches Potential des Herzens in mV.',
        },
        {
          heading: 'Nicht-SI-Einheiten in der Klinik',
          text: 'Der Blutdruck wird weltweit in mmHg gemessen: 1 mmHg = 133 Pa. Der Augeninnendruck (normal: 10–21 mmHg) ebenfalls. Energiegehalt von Lebensmitteln: 1 kcal = 4,184 kJ. Tagesbedarf ~2.000 kcal = 8,368 MJ. Molekülmassen in Dalton (Da): 1 Da = 1 g/mol. Albumin 66 kDa, Antikörper 150 kDa, Hämoglobin 64 kDa. Diese Einheiten sind nicht SI-konform, aber klinisch unverzichtbar.',
        },
      ],
      merksätze: [
        '7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd',
        'N = kg·m/s² (Kraft); Pa = N/m² (Druck); J = N·m (Energie); W = J/s (Leistung)',
        '1 mmHg = 133 Pa; 760 mmHg = 1 atm; 1 kcal = 4,184 kJ; 1 Da = 1 g/mol',
      ],
      altfrage: {
        question: 'Ein Patient hat einen Blutdruck von 140 mmHg systolisch. Drücken Sie diesen Druck in Pascal aus. (1 mmHg = 133 Pa)',
        answer: 'P = 140 mmHg × 133 Pa/mmHg = 18.620 Pa ≈ 18,6 kPa. Der systolische Blutdruck von 140 mmHg entspricht 18.620 Pa = 18,62 kPa. Zum Vergleich: Normaler arterieller Mitteldruck ~100 mmHg = 13.300 Pa.',
      },
      klinischerBezug: 'Die Herzarbeit wird in Joule oder Watt gemessen. Das linke Herz pumpt pro Minute das Herzminutenvolumen (HZV = ~5 L/min = 83 mL/s) gegen den arteriellen Druck (MAP = 100 mmHg = 13.300 Pa). Herzleistung P = MAP × HZV = 13.300 Pa × 83 × 10⁻⁶ m³/s ≈ 1,1 W (Ruhe). Bei Belastung: HZV steigt auf 20 L/min → P ≈ 4,4 W (linkes Herz allein). Das Herz leistet in 70 Jahren ~2,5 Milliarden Schläge — ein faszinierendes Bild der Herzleistung als physikalische Größe.',
      selfTest: [
        {
          question: 'Welche SI-Grundeinheit misst die Stoffmenge?',
          options: ['Mol (mol)', 'Gramm (g)', 'Liter (L)', 'Kilogramm (kg)', 'Dalton (Da)'],
          correctIndex: 0,
          explanation: 'Mol (mol) ist die SI-Grundeinheit der Stoffmenge. 1 mol enthält die Avogadro-Zahl (6,022 × 10²³) an Elementarteilchen. Gramm ist keine SI-Grundeinheit (kg ist es!), und Liter ist keine Grundeinheit (m³ ist es).',
          hints: ['Welche der 7 SI-Grundeinheiten bezieht sich auf Teilchenmengen in der Chemie?', 'Mol wird in der Chemie für Substanzmengen verwendet.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Einheit hat Druck im SI-System?',
          options: ['Pa = N/m²', 'N = kg·m/s²', 'J = N·m', 'W = J/s', 'bar'],
          correctIndex: 0,
          explanation: 'Druck = Kraft/Fläche. SI-Einheit: Pa (Pascal) = N/m². Newton ist die Einheit der Kraft, nicht des Drucks. Bar ist keine SI-Einheit (aber toleriert).',
          hints: ['Druck = Kraft / Fläche. Einheit der Kraft ist N, Einheit der Fläche ist m².', 'N/m² = Pa (Pascal).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viel Pa entsprechen 760 mmHg (= 1 atm)? (1 mmHg = 133 Pa)',
          options: ['101.080 Pa', '760 Pa', '7.600 Pa', '1.330 Pa', '133 Pa'],
          correctIndex: 0,
          explanation: '760 mmHg × 133 Pa/mmHg = 101.080 Pa ≈ 101.325 Pa (exakter Wert 1 atm). Dies entspricht dem normalen Luftdruck auf Meereshöhe.',
          hints: ['1 mmHg = 133 Pa. 760 × 133 = ?', '760 × 133 = 760 × 130 + 760 × 3 = 98.800 + 2.280 = 101.080.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'In welcher Einheit wird die Leistung im SI-System gemessen?',
          options: ['Watt (W = J/s)', 'Joule (J)', 'Newton (N)', 'Pascal (Pa)', 'Volt (V)'],
          correctIndex: 0,
          explanation: 'Leistung = Energie/Zeit. SI-Einheit: Watt (W) = Joule/Sekunde (J/s) = kg·m²/s³. Joule ist die Einheit der Energie (nicht der Leistung). 1 W = 1 J/s.',
          hints: ['Leistung = Energie / Zeit. Einheit der Energie ist J, Zeit ist s.', 'J/s = W (Watt).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Die Körpertemperatur beträgt 37°C. Was ist das in Kelvin?',
          options: ['310 K', '37 K', '273 K', '100 K', '236 K'],
          correctIndex: 0,
          explanation: 'T [K] = T [°C] + 273 = 37 + 273 = 310 K. Der absolute Nullpunkt (0 K) entspricht −273°C. Der Gefrierpunkt des Wassers ist 0°C = 273 K.',
          hints: ['T [K] = T [°C] + 273.', '37 + 273 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Einheit hat Energie in SI-Grundeinheiten ausgedrückt?',
          options: ['kg·m²/s²', 'kg·m/s²', 'kg/m·s²', 'kg·m²/s', 'kg·m²·s'],
          correctIndex: 0,
          explanation: 'Energie = Kraft × Weg = N × m = (kg·m/s²) × m = kg·m²/s² = J (Joule). Die Dimensionsanalyse ergibt: [E] = [F] × [s] = kg·m·s⁻² × m = kg·m²·s⁻².',
          hints: ['Energie = Kraft × Weg. Kraft in SI = kg·m/s². Mal Meter = ?', 'kg·m/s² × m = kg·m²/s².'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
