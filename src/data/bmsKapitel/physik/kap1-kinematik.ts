import type { Kapitel } from '../types';

export const physKap1: Kapitel = {
  id: 'phys-kap1',
  title: 'Mechanik — Kinematik',
  subject: 'physik',
  icon: '🏃',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap1-1',
      title: 'Gleichförmige Bewegung',
      content: `Die gleichförmige Bewegung ist die einfachste Form der Bewegung in der Physik. Ein Körper bewegt sich gleichförmig, wenn er in gleichen Zeitabschnitten gleiche Wegstrecken zurücklegt. Die Geschwindigkeit v bleibt dabei konstant und berechnet sich aus dem Quotienten von zurückgelegtem Weg s und der dafür benötigten Zeit t: v = s/t. Die SI-Einheit der Geschwindigkeit ist Meter pro Sekunde (m/s). Im Alltag wird häufig Kilometer pro Stunde (km/h) verwendet, wobei die Umrechnung über den Faktor 3,6 erfolgt: 1 m/s = 3,6 km/h. Diese Umrechnung ergibt sich daraus, dass ein Kilometer 1000 Meter entspricht und eine Stunde 3600 Sekunden hat.

Das Weg-Zeit-Diagramm ist ein fundamentales Werkzeug zur Darstellung von Bewegungen. Bei der gleichförmigen Bewegung ergibt sich im s-t-Diagramm eine Gerade, deren Steigung der Geschwindigkeit entspricht. Je steiler die Gerade, desto größer ist die Geschwindigkeit des Körpers. Ein waagerechter Verlauf im s-t-Diagramm bedeutet Stillstand (v = 0), während eine Gerade mit negativer Steigung eine Bewegung in entgegengesetzter Richtung beschreibt. Im Geschwindigkeit-Zeit-Diagramm (v-t-Diagramm) erscheint die gleichförmige Bewegung als horizontale Linie, und die Fläche unter dieser Linie entspricht dem zurückgelegten Weg. Diese grafische Interpretation ist besonders nützlich, um Bewegungsvorgänge anschaulich zu analysieren.

In der medizinischen Physik spielt die gleichförmige Bewegung beispielsweise bei der Blutströmung in großen Gefäßen eine Rolle, wenn man von einer vereinfachten, laminaren Strömung ausgeht. Auch die Ausbreitung von Schallwellen im Gewebe kann in erster Näherung als gleichförmige Bewegung beschrieben werden. Für die MedAT-Prüfung ist es essenziell, die Grundformel v = s/t sicher umstellen zu können: s = v · t zur Berechnung des Weges und t = s/v zur Berechnung der Zeit. Ebenso sollte man in der Lage sein, aus einem gegebenen Diagramm die entsprechenden physikalischen Größen abzulesen und zu interpretieren. Die Durchschnittsgeschwindigkeit berechnet sich bei mehreren Teilstrecken als Gesamtweg geteilt durch die Gesamtzeit, nicht als Mittelwert der Einzelgeschwindigkeiten.`,
      merksätze: [
        'Gleichförmige Bewegung: v = s/t = konstant. Im s-t-Diagramm ergibt sich eine Gerade, deren Steigung die Geschwindigkeit ist.',
        'Die Fläche unter dem v-t-Diagramm entspricht dem zurückgelegten Weg. Umrechnung: 1 m/s = 3,6 km/h.',
      ],
      altfrage: {
        question: 'Ein Auto fährt 90 km/h. Welche Strecke legt es in 20 Sekunden zurück?',
        answer: 'v = 90 km/h = 25 m/s. s = v · t = 25 m/s · 20 s = 500 m.',
      },
      klinischerBezug:
        'Die Blutflussgeschwindigkeit in der Aorta beträgt etwa 0,3–0,5 m/s und kann mit der Doppler-Sonographie gemessen werden. Bei Stenosen erhöht sich die Geschwindigkeit gemäß der Kontinuitätsgleichung — ein Prinzip, das auf der gleichförmigen Bewegung basiert.',
      selfTest: [
        {
          question: 'Ein Läufer legt 100 m in 10 s zurück. Wie groß ist seine Durchschnittsgeschwindigkeit in km/h?',
          options: ['10 km/h', '36 km/h', '100 km/h', '3,6 km/h', '72 km/h'],
          correctIndex: 1,
          explanation: 'v = s/t = 100 m / 10 s = 10 m/s. Umrechnung: 10 m/s × 3,6 = 36 km/h.',
        },
        {
          question: 'Im s-t-Diagramm einer gleichförmigen Bewegung entspricht die Steigung der Geraden:',
          options: ['der Beschleunigung', 'der Geschwindigkeit', 'dem zurückgelegten Weg', 'der kinetischen Energie', 'der Leistung des Körpers'],
          correctIndex: 1,
          explanation: 'Die Steigung im s-t-Diagramm ist Δs/Δt, was der Definition der Geschwindigkeit v = s/t entspricht.',
        },
        {
          question: 'Ein Zug fährt mit konstanter Geschwindigkeit. Im v-t-Diagramm ergibt sich:',
          options: [
            'eine ansteigende Gerade',
            'eine Parabel',
            'eine horizontale Linie',
            'eine abfallende Gerade',
            'eine Sinuskurve',
          ],
          correctIndex: 2,
          explanation: 'Bei konstanter Geschwindigkeit bleibt v über die Zeit unverändert, was im v-t-Diagramm einer horizontalen Linie entspricht.',
        },
      ],
    },
    {
      id: 'phys-kap1-2',
      title: 'Beschleunigte Bewegung',
      content: `Die gleichmäßig beschleunigte Bewegung liegt vor, wenn sich die Geschwindigkeit eines Körpers in gleichen Zeitabschnitten um den gleichen Betrag ändert. Die Beschleunigung a ist definiert als Geschwindigkeitsänderung pro Zeiteinheit: a = Δv/Δt. Ihre SI-Einheit ist m/s². Eine positive Beschleunigung bedeutet Schnellerwerden, eine negative Beschleunigung (Verzögerung oder Bremsen) bedeutet Langsamerwerden. Im v-t-Diagramm ergibt sich bei konstanter Beschleunigung eine Gerade, deren Steigung die Beschleunigung ist. Im s-t-Diagramm entsteht eine Parabel, da der Weg quadratisch mit der Zeit zunimmt.

Die zentralen Gleichungen der gleichmäßig beschleunigten Bewegung aus dem Stillstand (v₀ = 0) lauten: v = a · t für die Geschwindigkeit zum Zeitpunkt t und s = ½ · a · t² für den zurückgelegten Weg. Durch Elimination der Zeit ergibt sich die zusätzliche Beziehung v² = 2 · a · s, die besonders nützlich ist, wenn die Zeit nicht gegeben ist. Startet der Körper nicht aus der Ruhe, sondern mit einer Anfangsgeschwindigkeit v₀, erweitern sich die Formeln zu: v = v₀ + a · t und s = v₀ · t + ½ · a · t². Diese Gleichungen bilden das vollständige Werkzeug zur Lösung aller Aufgaben zur gleichmäßig beschleunigten Bewegung und sollten für die MedAT-Prüfung sicher beherrscht werden.

Im v-t-Diagramm einer beschleunigten Bewegung entspricht die Fläche unter der Kurve weiterhin dem zurückgelegten Weg. Bei konstanter Beschleunigung aus dem Stillstand ist dies ein Dreieck mit der Fläche ½ · v · t = ½ · a · t², was konsistent mit der Wegformel ist. Im Alltag begegnet uns die beschleunigte Bewegung ständig: beim Anfahren eines Autos, beim Abbremsen eines Zuges oder beim Beschleunigen im freien Fall. In der Medizin ist das Konzept der Beschleunigung relevant für das Verständnis von Traumata bei Unfällen (Dezelerationstrauma) sowie für die Funktionsweise des Vestibularorgans im Innenohr, das Beschleunigungen des Kopfes registriert und dem Gehirn so Informationen über Bewegung und Lage des Körpers liefert.`,
      merksätze: [
        'Gleichmäßig beschleunigte Bewegung: v = a·t und s = ½·a·t². Die Beschleunigung a = Δv/Δt wird in m/s² gemessen.',
        'Im v-t-Diagramm ist die Steigung = Beschleunigung und die Fläche unter der Kurve = zurückgelegter Weg.',
      ],
      altfrage: {
        question: 'Ein Auto beschleunigt aus dem Stand mit 2 m/s². Welche Geschwindigkeit hat es nach 5 Sekunden und welchen Weg hat es zurückgelegt?',
        answer: 'v = a·t = 2 · 5 = 10 m/s = 36 km/h. s = ½·a·t² = ½ · 2 · 25 = 25 m.',
      },
      klinischerBezug:
        'Bei einem Autounfall erfährt der Körper eine starke negative Beschleunigung (Dezeleration). Die dabei auf Organe wirkenden Kräfte können zu Aortenrupturen oder Hirnkontusionen führen. Die Bogengänge des Innenohrs registrieren Drehbeschleunigungen, die Otolithenorgane lineare Beschleunigungen.',
      selfTest: [
        {
          question: 'Ein Körper beschleunigt aus der Ruhe mit 4 m/s². Welchen Weg legt er in 3 Sekunden zurück?',
          options: ['12 m', '18 m', '36 m', '6 m', '24 m'],
          correctIndex: 1,
          explanation: 's = ½ · a · t² = ½ · 4 · 9 = 18 m.',
        },
        {
          question: 'Die Steigung im v-t-Diagramm entspricht:',
          options: ['der Geschwindigkeit', 'dem Weg', 'der Beschleunigung', 'der Leistung', 'dem Impuls'],
          correctIndex: 2,
          explanation: 'Die Steigung im v-t-Diagramm ist Δv/Δt, was der Definition der Beschleunigung entspricht.',
        },
        {
          question: 'Ein Auto bremst von 30 m/s auf 0 m/s in 6 s. Wie groß ist die Verzögerung?',
          options: ['5 m/s²', '-5 m/s²', '180 m/s²', '-180 m/s²', '-30 m/s²'],
          correctIndex: 1,
          explanation: 'a = Δv/Δt = (0 - 30)/6 = -5 m/s². Das Minuszeichen zeigt die Verzögerung an.',
        },
      ],
    },
    {
      id: 'phys-kap1-3',
      title: 'Freier Fall & Wurf',
      content: `Der freie Fall ist ein Spezialfall der gleichmäßig beschleunigten Bewegung, bei dem die Erdbeschleunigung g = 9,81 m/s² (gerundet oft 10 m/s²) als konstante Beschleunigung wirkt. Beim freien Fall aus der Ruhe gelten die bekannten Formeln mit a = g: v = g · t für die Fallgeschwindigkeit und h = ½ · g · t² für die Fallhöhe. Der freie Fall ist streng genommen nur im Vakuum realisiert, da der Luftwiderstand bei realen Fallvorgängen eine Rolle spielt. Galileo Galilei widerlegte bereits im 17. Jahrhundert die aristotelische Vorstellung, dass schwere Körper schneller fallen als leichte — im Vakuum fallen alle Körper gleich schnell, unabhängig von ihrer Masse. Die Erdbeschleunigung g variiert leicht mit dem Breitengrad und der Höhe über dem Meeresspiegel.

Beim senkrechten Wurf nach oben wird ein Körper mit einer Anfangsgeschwindigkeit v₀ senkrecht nach oben geworfen. Die Erdbeschleunigung wirkt als Verzögerung, bis der Körper im höchsten Punkt die Geschwindigkeit null erreicht. Die Steighöhe berechnet sich aus v₀² = 2 · g · hmax zu hmax = v₀²/(2g). Die Steigzeit ergibt sich aus v₀ = g · t zu tsteig = v₀/g. Aufgrund der Symmetrie des Vorgangs (ohne Luftwiderstand) ist die Fallzeit gleich der Steigzeit und die Aufprallgeschwindigkeit gleich der Abwurfgeschwindigkeit. Beim senkrechten Wurf nach unten addiert sich die Anfangsgeschwindigkeit zur Fallgeschwindigkeit.

Der waagerechte Wurf (horizontaler Wurf) ist eine Überlagerung zweier unabhängiger Bewegungen: einer gleichförmigen Bewegung in horizontaler Richtung (x = v₀ · t) und eines freien Falls in vertikaler Richtung (y = ½ · g · t²). Diese Überlagerung (Superpositionsprinzip) führt zu einer parabelförmigen Bahnkurve. Die Wurfweite und die Aufprallgeschwindigkeit lassen sich aus den beiden Komponenten berechnen. Die resultierende Geschwindigkeit beim Auftreffen ergibt sich aus der vektoriellen Addition der horizontalen und vertikalen Komponente: v = √(vx² + vy²). In der Medizin ist das Verständnis des freien Falls wichtig für die Beurteilung von Sturzverletzungen: Die Aufprallgeschwindigkeit und damit die kinetische Energie steigt mit der Fallhöhe, was die Schwere der Verletzungen bestimmt.`,
      merksätze: [
        'Freier Fall: h = ½·g·t², v = g·t mit g = 9,81 m/s². Alle Körper fallen im Vakuum gleich schnell — unabhängig von der Masse.',
        'Waagerechter Wurf: Überlagerung von gleichförmiger Horizontalbewegung (x = v₀·t) und freiem Fall (y = ½·g·t²). Die Bahn ist eine Parabel.',
      ],
      altfrage: {
        question: 'Ein Stein fällt 3 Sekunden frei. Welche Geschwindigkeit und welche Fallstrecke erreicht er? (g = 10 m/s²)',
        answer: 'v = g·t = 10 · 3 = 30 m/s. h = ½·g·t² = ½ · 10 · 9 = 45 m.',
      },
      klinischerBezug:
        'Bei Stürzen aus großer Höhe steigt die Aufprallgeschwindigkeit mit v = √(2gh). Ein Sturz aus 5 m Höhe ergibt bereits v ≈ 10 m/s (36 km/h). Die kinetische Energie beim Aufprall bestimmt das Verletzungsmuster: Fersenbein- und Wirbelsäulenfrakturen sind typisch für Stürze aus der Höhe (Dezelerationstrauma).',
      selfTest: [
        {
          question: 'Wie lange dauert der freie Fall aus 20 m Höhe? (g = 10 m/s²)',
          options: ['1 s', '2 s', '4 s', '√2 s', '3 s'],
          correctIndex: 1,
          explanation: 'h = ½·g·t² → t² = 2h/g = 2·20/10 = 4 → t = 2 s.',
        },
        {
          question: 'Ein Ball wird senkrecht nach oben mit 20 m/s geworfen. Welche maximale Höhe erreicht er? (g = 10 m/s²)',
          options: ['10 m', '20 m', '40 m', '200 m', '5 m'],
          correctIndex: 1,
          explanation: 'hmax = v₀²/(2g) = 400/20 = 20 m.',
        },
        {
          question: 'Beim waagerechten Wurf ist die horizontale Geschwindigkeitskomponente:',
          options: [
            'beschleunigt mit g',
            'konstant (v₀)',
            'null',
            'abhängig von der Masse',
            'proportional zur Fallhöhe',
          ],
          correctIndex: 1,
          explanation: 'Beim waagerechten Wurf wirkt keine horizontale Kraft (Luftwiderstand vernachlässigt), daher bleibt die horizontale Geschwindigkeit konstant bei v₀.',
        },
      ],
    },
  ],
};
