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
      content: `**v = s/t** — das ist DIE Formel der gleichförmigen Bewegung.

Stell dir vor, du fährst auf der Autobahn mit Tempomat. In jeder Sekunde legst du exakt gleich viel Strecke zurück. Das ist gleichförmige Bewegung. Die **Geschwindigkeit** (Weg pro Zeit, v = s/t) bleibt konstant.

**Einheiten:** 1 m/s = 3,6 km/h. Der Faktor 3,6 kommt daher: 1 km = 1000 m, 1 h = 3600 s. Also 1 m/s = (1 m)/(1 s) × (3600 s)/(1000 m) = 3,6 km/h.

**s-t-Diagramm:** Die Kurve ist eine Gerade. Die Steigung ist die Geschwindigkeit. Steiler = schneller. Horizontal = Stillstand (v = 0). Negative Steigung = Bewegung in die andere Richtung.

**v-t-Diagramm:** Die Kurve ist eine horizontale Linie. Die Fläche unter dieser Linie ist der zurückgelegte Weg.

**Durchschnittsgeschwindigkeit:** Bei mehreren Teilstrecken NICHT einfach die Geschwindigkeiten mitteln. Immer Gesamtweg/Gesamtzeit rechnen.

**Formeln umstellen:** v = s/t → s = v·t → t = s/v. Das musst du im Schlaf beherrschen.`,
      merksätze: [
        'Gleichförmige Bewegung: v = s/t = konstant. Im s-t-Diagramm ergibt sich eine Gerade, deren Steigung die Geschwindigkeit ist.',
        'Die Fläche unter dem v-t-Diagramm entspricht dem zurückgelegten Weg. Umrechnung: 1 m/s = 3,6 km/h.',
      ],
      altfrage: {
        question: 'Ein Auto fährt 90 km/h. Welche Strecke legt es in 20 Sekunden zurück?',
        answer: 'v = 90 km/h = 25 m/s. s = v · t = 25 m/s · 20 s = 500 m.',
      },
      klinischerBezug:
        'Blutflussgeschwindigkeit in der Aorta: ca. 0,3–0,5 m/s (gemessen mit **Doppler-Sonographie**). Bei einer **Aortenstenose** (Verengung) steigt die Geschwindigkeit lokal auf über 4 m/s — das Blut muss durch die Engstelle schneller strömen (Kontinuitätsgleichung). Typische Symptome: Dyspnoe, Angina pectoris, Synkope.',
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
      content: `**v = a·t** — das ist DIE zentrale Formel der beschleunigten Bewegung aus dem Stand. Merke sie dir JETZT.

Die **Beschleunigung** (Geschwindigkeitsänderung pro Zeit, a = Δv/Δt) ist konstant. Einheit: m/s². Positiv = schneller werden. Negativ = Bremsen.

**Die drei Schlüsselformeln (Start aus Ruhe, v₀ = 0):**
- v = a·t (Geschwindigkeit)
- s = ½·a·t² (Weg — quadratisch mit Zeit)
- v² = 2·a·s (ohne Zeit, direkt Weg-Geschwindigkeit)

**Mit Anfangsgeschwindigkeit v₀:**
- v = v₀ + a·t
- s = v₀·t + ½·a·t²

**v-t-Diagramm:** Die Kurve ist eine Gerade. Steigung = Beschleunigung. Fläche unter der Kurve = zurückgelegter Weg.

**s-t-Diagramm:** Die Kurve ist eine Parabel. Der Weg wächst quadratisch mit der Zeit.

**Beispiel:** Auto beschleunigt mit 2 m/s² aus dem Stand. Nach 5 s: v = 2·5 = 10 m/s. Weg: s = ½·2·25 = 25 m.`,
      merksätze: [
        'Gleichmäßig beschleunigte Bewegung: v = a·t und s = ½·a·t². Die Beschleunigung a = Δv/Δt wird in m/s² gemessen.',
        'Im v-t-Diagramm ist die Steigung = Beschleunigung und die Fläche unter der Kurve = zurückgelegter Weg.',
      ],
      altfrage: {
        question: 'Ein Auto beschleunigt aus dem Stand mit 2 m/s². Welche Geschwindigkeit hat es nach 5 Sekunden und welchen Weg hat es zurückgelegt?',
        answer: 'v = a·t = 2 · 5 = 10 m/s = 36 km/h. s = ½·a·t² = ½ · 2 · 25 = 25 m.',
      },
      klinischerBezug:
        'Bei einem Autounfall mit 50 km/h (≈14 m/s) und plötzlichem Stopp in 0,1 s wirkt eine **Dezeleration** von a = 14/0,1 = 140 m/s² ≈ 14 g auf den Körper. Typische Verletzungen: **Schleudertrauma** (HWS-Distorsion durch ruckartige Überstreckung), **Aortenruptur** (Aorta isthmi — Aufhängungsstelle reißt bei starker Dezeleration), **Hirnkontusion** (Gehirn prallt gegen Schädelinnenseite). Airbag verlängert die Stoßzeit auf ca. 0,03–0,05 s → a sinkt auf ≈3–5 g.',
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
      content: `**Freier Fall: v = g·t und h = ½·g·t²** mit **g = 9,81 m/s²** (oft gerundet: 10 m/s²).

Der freie Fall ist beschleunigte Bewegung mit konstanter Erdbeschleunigung. Alle Körper fallen gleich schnell — egal ob Feder oder Stein (im Vakuum). Galilei hat das bewiesen.

**Wichtig:** g variiert leicht mit Breiten- und Höhengrad, aber für den MedAT gilt g ≈ 10 m/s².

**Senkrechter Wurf nach oben:** Du wirfst einen Ball mit v₀ nach oben. Die Schwerkraft bremst ihn ab (a = -g). Am höchsten Punkt: v = 0.
- Steighöhe: hmax = v₀²/(2g)
- Steigzeit: tsteig = v₀/g
- Symmetrie: Fallzeit = Steigzeit, Aufprallgeschwindigkeit = Abwurfgeschwindigkeit

**Waagerechter Wurf:** Überlagerung zweier unabhängiger Bewegungen:
- Horizontal: x = v₀·t (gleichförmig)
- Vertikal: y = ½·g·t² (freier Fall)

Resultierende Bahn: Parabel. Aufprallgeschwindigkeit: v = √(vx² + vy²).`,
      merksätze: [
        'Freier Fall: h = ½·g·t², v = g·t mit g = 9,81 m/s². Alle Körper fallen im Vakuum gleich schnell — unabhängig von der Masse.',
        'Waagerechter Wurf: Überlagerung von gleichförmiger Horizontalbewegung (x = v₀·t) und freiem Fall (y = ½·g·t²). Die Bahn ist eine Parabel.',
      ],
      altfrage: {
        question: 'Ein Stein fällt 3 Sekunden frei. Welche Geschwindigkeit und welche Fallstrecke erreicht er? (g = 10 m/s²)',
        answer: 'v = g·t = 10 · 3 = 30 m/s. h = ½·g·t² = ½ · 10 · 9 = 45 m.',
      },
      klinischerBezug:
        'Bei Stürzen aus großer Höhe gilt: v = √(2gh). Sturz aus 5 m Höhe → v ≈ 10 m/s (36 km/h). Sturz aus 20 m → v ≈ 20 m/s (72 km/h). Typische Verletzungen: **Kalkaneusfraktur** (Fersenbein — oft beidseitig), **Wirbelsäulenfrakturen** (v.a. Th12/L1-Übergang), **Pilon-tibiale-Fraktur** (distale Tibia). Bei Sturz >6 m: Letalität steigt drastisch. **Dezelerationstrauma** beim Aufprall — Organe prallen gegen Skelett.',
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
