import type { Kapitel } from '../types';

export const physKap2: Kapitel = {
  id: 'phys-kap2',
  title: 'Mechanik — Dynamik',
  subject: 'physik',
  icon: '💪',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap2-1',
      title: 'Newtonsche Gesetze',
      diagram: 'newton-forces',
      lernziele: [
        'Die drei Newtonschen Gesetze formulieren und anwenden können',
        'Kraft, Masse und Beschleunigung rechnerisch verknüpfen können',
        'Das Wechselwirkungsprinzip an Beispielen erklären können',
      ],
      content: `**F = m·a** — das zweite Newtonsche Gesetz. DIE zentrale Formel der Dynamik. Kraft = Masse × Beschleunigung.

**Die drei Newtonschen Gesetze:**

**1. Newton (Trägheitsprinzip):** Ein Körper bleibt in Ruhe oder bewegt sich gleichförmig geradlinig, solange keine Kraft auf ihn wirkt. Beispiel: Du sitzt im Bus. Der Bus bremst plötzlich. Du fliegst nach vorne — dein Körper will seine Bewegung beibehalten.

**2. Newton (Aktionsprinzip):** F = m·a. Die Kraft bestimmt die Beschleunigung. Mehr Kraft → mehr Beschleunigung. Mehr Masse → weniger Beschleunigung. Einheit der Kraft: 1 Newton = 1 kg·m/s².

**3. Newton (Actio = Reactio):** Jede Kraft hat eine gleich große Gegenkraft. Du drückst auf den Tisch → der Tisch drückt zurück. Wichtig: Die beiden Kräfte greifen an VERSCHIEDENEN Körpern an. Sie heben sich NICHT gegenseitig auf.

**Kräftegleichgewicht:** Wenn die Summe aller Kräfte null ist, ruht der Körper oder bewegt sich gleichförmig. Beispiel: Auto fährt mit konstanter Geschwindigkeit → Antriebskraft = Reibungskraft.`,
      sections: [
        {
          heading: 'Erstes Newtonsches Gesetz (Trägheitsprinzip)',
          text: `Ein Körper bleibt in Ruhe oder bewegt sich gleichförmig geradlinig, solange keine Kraft wirkt. Das definiert das **Inertialsystem** (Bezugssystem, in dem das Trägheitsprinzip gilt).

Beispiele: Passagier fliegt nach vorne, wenn der Bus bremst. Tischtuch wird unter Geschirr weggezogen — Gegenstände bleiben stehen.`,
        },
        {
          heading: 'Zweites Newtonsches Gesetz (F = m·a)',
          text: `F = m·a verknüpft Kraft, Masse und Beschleunigung. Die resultierende Kraft (Summe aller Kräfte) bestimmt die Beschleunigung.

Einheit: 1 N = 1 kg·m/s². Ist die Resultierende null, herrscht Kräftegleichgewicht — der Körper ruht oder bewegt sich gleichförmig.`,
          merksatz: 'Die Einheit der Kraft ist das Newton: 1 N = 1 kg·m/s². Kräftegleichgewicht herrscht, wenn die Resultierende aller Kräfte null ist.',
          table: {
            headers: ['Gesetz', 'Formel', 'Bedeutung'],
            rows: [
              ['1. Newton (Trägheit)', 'F = 0 → a = 0', 'Ohne Kraft keine Änderung des Bewegungszustands'],
              ['2. Newton (Aktionsprinzip)', 'F = m·a', 'Kraft bewirkt Beschleunigung proportional zur Masse'],
              ['3. Newton (Wechselwirkung)', 'F_AB = -F_BA', 'Kräfte treten immer paarweise auf, gleich groß und entgegengesetzt'],
            ],
          },
        },
        {
          heading: 'Drittes Newtonsches Gesetz (Actio = Reactio)',
          text: `Körper A drückt auf Körper B (Actio) → Körper B drückt gleich stark zurück auf A (Reactio). Die Kräfte greifen an VERSCHIEDENEN Körpern an — sie heben sich nicht auf.

Beispiele: Buch drückt auf Tisch, Tisch drückt zurück. Beim Gehen drückt der Fuß nach hinten, der Boden treibt dich nach vorne. Rakete stößt Gas nach hinten, Gas treibt Rakete nach vorne.`,
        },
      ],
      merksätze: [
        '1. Newton: Trägheitsprinzip — ohne Kraft keine Änderung des Bewegungszustands. 2. Newton: F = m·a — Kraft bewirkt Beschleunigung. 3. Newton: Actio = Reactio — Kräfte treten immer paarweise auf.',
        'Die Einheit der Kraft ist das Newton: 1 N = 1 kg·m/s². Kräftegleichgewicht herrscht, wenn die Resultierende aller Kräfte null ist.',
      ],
      altfrage: {
        question: 'Welche Kraft ist nötig, um einen 80 kg schweren Körper mit 2 m/s² zu beschleunigen?',
        answer: 'F = m·a = 80 kg · 2 m/s² = 160 N.',
      },
      klinischerBezug:
        '**Schleudertrauma** (HWS-Distorsion) bei Auffahrunfällen: Der Rumpf wird durch den Aufprall beschleunigt, der Kopf bleibt aufgrund der Trägheit zurück → Überstreckung der HWS. Typische Symptome: Nackenschmerz, Kopfschmerz, Schwindel. Diagnose: Röntgen (zum Frakturausschluss), ggf. MRT. Prävention: **Kopfstützen** (reduzieren Überstreckung), **Sicherheitsgurte** (verteilen Kräfte auf Becken/Schulter statt Hals).',
      selfTest: [
        {
          question: 'Welches Newtonsche Gesetz beschreibt, dass eine 5 kg schwere Masse bei Einwirkung von 10 N eine Beschleunigung von 2 m/s² erfährt?',
          options: [
            '1. Newtonsches Gesetz (Trägheitsprinzip)',
            '2. Newtonsches Gesetz (F = m·a)',
            '3. Newtonsches Gesetz (Actio = Reactio)',
            'Energieerhaltungssatz',
            'Impulserhaltungssatz',
          ],
          correctIndex: 1,
          explanation: 'F = m·a → 10 N = 5 kg · 2 m/s². Das ist das 2. Newtonsche Gesetz.',
        },
        {
          question: 'Ein Astronaut schwebt frei im Weltall. Er wirft einen Ball nach rechts. Was passiert mit dem Astronauten?',
          options: [
            'Er bleibt an Ort und Stelle',
            'Er bewegt sich nach rechts',
            'Er bewegt sich nach links',
            'Er dreht sich um die eigene Achse',
            'Er wird nach oben beschleunigt',
          ],
          correctIndex: 2,
          explanation: 'Nach dem Wechselwirkungsprinzip (Actio = Reactio) erfährt der Astronaut eine gleich große Kraft in entgegengesetzter Richtung — er bewegt sich nach links.',
        },
        {
          question: 'Ein Körper bewegt sich geradlinig mit konstanter Geschwindigkeit. Welche Aussage ist korrekt?',
          options: [
            'Es wirkt keine Kraft auf den Körper',
            'Die Resultierende aller Kräfte ist null',
            'Die Beschleunigung ist positiv',
            'Die Reibungskraft ist null',
            'Die Geschwindigkeit nimmt stetig ab',
          ],
          correctIndex: 1,
          explanation: 'Bei konstanter Geschwindigkeit ist a = 0, also F_res = m·a = 0. Es können Kräfte wirken, aber ihre Summe muss null sein (z. B. Antriebskraft = Reibungskraft).',
        },
      ],
    },
    {
      id: 'phys-kap2-2',
      title: 'Kräfte',
      content: `**Gewichtskraft: FG = m·g**. Die Erde zieht dich nach unten. g ≈ 9,81 m/s². Ein 50 kg schwerer Körper wiegt FG = 50·10 = 500 N (gerundet).

**Normalkraft FN:** Die Unterlage drückt zurück. Steht immer senkrecht auf der Oberfläche. Auf waagerechtem Boden: FN = FG. Auf schiefer Ebene: FN < FG.

**Reibungskraft FR = μ·FN:** Wirkt gegen die Bewegung. μ ist der Reibungskoeffizient (dimensionslos).
- **Haftreibung** (μH): Körper ruht noch
- **Gleitreibung** (μG): Körper bewegt sich bereits
- Immer gilt: μH > μG

Deshalb braucht es mehr Kraft, einen Schrank anzuschieben, als ihn in Bewegung zu halten. **Rollreibung** ist viel kleiner als Gleitreibung — deshalb haben wir Räder erfunden.

**Federkraft (Hooke): F = k·s**. k ist die Federkonstante (N/m), s die Auslenkung. Die Kraft ist proportional zur Dehnung. Beispiel: Feder mit k = 200 N/m, gedehnt um 5 cm → F = 200·0,05 = 10 N.

**Wichtig:** Das Hookesche Gesetz gilt nur im linearen Bereich. Bei zu starker Dehnung wird die Feder plastisch verformt — sie kehrt nicht mehr zurück.`,
      merksätze: [
        'Gewichtskraft: FG = m·g. Reibungskraft: FR = μ·FN. Federkraft (Hooke): F = k·s. Die Haftreibung ist größer als die Gleitreibung (μH > μG).',
        'Die Normalkraft steht immer senkrecht auf der Kontaktfläche. Auf waagerechtem Boden gilt FN = FG = m·g.',
      ],
      altfrage: {
        question: 'Eine Feder mit k = 200 N/m wird um 5 cm gedehnt. Wie groß ist die rücktreibende Kraft?',
        answer: 'F = k·s = 200 N/m · 0,05 m = 10 N.',
      },
      klinischerBezug:
        'Sehnen und Bänder verhalten sich wie Federn — sie folgen dem **Hookeschen Gesetz** (im physiologischen Bereich). Bei Überbelastung: **plastische Verformung** (Zerrung) oder **Riss**. Beispiel: **Vorderes Kreuzband** (LCA) reißt bei plötzlicher Rotation + Valgus-Stress (typisch: Fußball, Skifahren). Symptome: Knie gibt nach, Hämarthros, pos. **Lachman-Test**. Die **Synovialflüssigkeit** (Gelenkschmiere) minimiert Reibung zwischen Gelenkflächen — μ ≈ 0,01, niedriger als Eis auf Eis.',
      selfTest: [
        {
          question: 'Ein Körper von 5 kg liegt auf einem Tisch. Wie groß ist die Normalkraft? (g = 10 m/s²)',
          options: ['5 N', '50 N', '500 N', '0,5 N', '9,81 N'],
          correctIndex: 1,
          explanation: 'Auf waagerechter Fläche: FN = FG = m·g = 5 · 10 = 50 N.',
        },
        {
          question: 'Der Reibungskoeffizient beträgt μ = 0,4. Wie groß ist die Reibungskraft bei einer Normalkraft von 100 N?',
          options: ['4 N', '40 N', '400 N', '250 N', '0,4 N'],
          correctIndex: 1,
          explanation: 'FR = μ · FN = 0,4 · 100 = 40 N.',
        },
        {
          question: 'Was passiert, wenn eine Feder über den linearen Bereich hinaus gedehnt wird?',
          options: [
            'Die Federkonstante verdoppelt sich',
            'Das Hookesche Gesetz gilt weiterhin',
            'Es tritt plastische Verformung ein',
            'Die Kraft wird null',
            'Die Feder speichert keine Energie mehr',
          ],
          correctIndex: 2,
          explanation: 'Jenseits des linearen Bereichs wird die Feder plastisch verformt — sie kehrt nicht mehr vollständig in ihre Ausgangslage zurück und das Hookesche Gesetz gilt nicht mehr.',
        },
      ],
    },
    {
      id: 'phys-kap2-3',
      title: 'Schiefe Ebene',
      content: `**Die Schlüsselformeln:**
- **Hangabtriebskraft:** FH = m·g·sin(α) (zieht den Körper runter)
- **Normalkraft:** FN = m·g·cos(α) (drückt senkrecht auf die Ebene)

Stell dir einen Körper auf einer schiefen Rampe vor. Die Gewichtskraft FG = m·g zeigt senkrecht nach unten. Wir zerlegen sie in zwei Komponenten: parallel zur Ebene (Hangabtriebskraft) und senkrecht zur Ebene (Normalkraft).

**Wann rutscht der Körper?** Wenn FH > FR,max. Die maximale Haftreibung ist FR,max = μH·FN. Also: m·g·sin(α) > μH·m·g·cos(α). Die Masse kürzt sich! Es bleibt: **tan(α) > μH**.

**Grenzwinkel der Haftreibung:** αgrenz = arctan(μH). Unabhängig von der Masse. Ein 1 kg schwerer Stein und ein 100 kg schwerer Stein rutschen bei demselben Winkel.

**Beschleunigung auf der Ebene (wenn er rutscht):** a = g·(sin(α) - μG·cos(α)).

**Beispiel:** α = 30°, m = 10 kg, g = 10 m/s². Dann: FH = 10·10·sin(30°) = 100·0,5 = 50 N. FN = 10·10·cos(30°) = 100·0,866 ≈ 86,6 N.`,
      merksätze: [
        'Schiefe Ebene: Hangabtriebskraft FH = m·g·sin(α), Normalkraft FN = m·g·cos(α). Der Körper gleitet, wenn tan(α) > μH.',
        'Die Beschleunigung auf der schiefen Ebene: a = g·(sin(α) - μ·cos(α)). Der Grenzwinkel der Haftreibung αgrenz = arctan(μH) ist massenunabhängig.',
      ],
      altfrage: {
        question: 'Ein 10 kg schwerer Körper liegt auf einer schiefen Ebene mit α = 30°. Wie groß sind Hangabtriebskraft und Normalkraft? (g = 10 m/s²)',
        answer: 'FH = m·g·sin(30°) = 10·10·0,5 = 50 N. FN = m·g·cos(30°) = 10·10·0,866 = 86,6 N.',
      },
      klinischerBezug:
        '**Trendelenburg-Lagerung** (Kopftieflage, ca. 15–30°): Der Patient liegt schräg mit dem Kopf tiefer als die Beine. Die Hangabtriebskraft treibt das Blut Richtung Herz → verbessert den venösen Rückstrom. Indikationen: **Schock** (hypovolämisch), **V.-cava-superior-Syndrom**. Kontraindikationen: erhöhter Hirndruck, Lungenödem. **Anti-Trendelenburg-Lagerung** (Oberkörperhochlage): Erleichtert die Atmung (Zwerchfell hat mehr Platz), reduziert Hirndruck. Indikation: ARDS, Hirnödem.',
      selfTest: [
        {
          question: 'Auf einer schiefen Ebene mit α = 30° beträgt die Normalkraft eines 20 kg schweren Körpers (g = 10 m/s²):',
          options: ['200 N', '100 N', '173 N', '50 N', '86 N'],
          correctIndex: 2,
          explanation: 'FN = m·g·cos(30°) = 20·10·cos(30°) = 200·0,866 ≈ 173 N.',
        },
        {
          question: 'Ein Körper rutscht nicht auf einer schiefen Ebene. Was lässt sich sicher sagen?',
          options: [
            'Die Reibungskraft ist null',
            'Die Hangabtriebskraft ist größer als die Normalkraft',
            'tan(α) ≤ μH',
            'Die Masse des Körpers ist zu groß',
            'Der Neigungswinkel beträgt genau 45°',
          ],
          correctIndex: 2,
          explanation: 'Der Körper rutscht nicht, solange die Haftreibung die Hangabtriebskraft kompensieren kann, also solange tan(α) ≤ μH.',
        },
        {
          question: 'Wie ändert sich der Grenzwinkel der Haftreibung, wenn man die Masse des Körpers verdoppelt?',
          options: [
            'Er verdoppelt sich',
            'Er halbiert sich',
            'Er bleibt gleich',
            'Er wird viermal so groß',
            'Er hängt vom Material der Oberfläche ab',
          ],
          correctIndex: 2,
          explanation: 'Der Grenzwinkel αgrenz = arctan(μH) hängt nur vom Reibungskoeffizienten ab und ist massenunabhängig.',
        },
      ],
    },
    {
      id: 'phys-kap2-4',
      title: 'Kreisbewegung',
      content: `**Zentripetalkraft: FZ = m·v²/r = m·ω²·r**. DIE zentrale Formel der Kreisbewegung.

Stell dir vor, du schwingst einen Stein an einer Schnur im Kreis. Der Stein will geradeaus fliegen (Trägheit), aber die Schnur zwingt ihn auf die Kreisbahn. Die Schnur übt die **Zentripetalkraft** aus — sie zeigt immer zum Mittelpunkt.

**Zentripetalbeschleunigung:** az = v²/r = ω²·r. Zeigt auch zum Mittelpunkt. Obwohl die Geschwindigkeit konstant bleibt, ändert sich die Richtung ständig → der Körper wird beschleunigt.

**Winkelgeschwindigkeit:** ω = 2π/T = 2π·f. Einheit: rad/s. T ist die Umlaufdauer, f die Frequenz.

**Bahngeschwindigkeit:** v = ω·r = 2π·r/T.

**Zentrifugalkraft:** Scheinkraft im rotierenden Bezugssystem. Du sitzt im Karussell und fühlst dich nach außen gedrückt. Vom inertialen Bezugssystem aus gesehen wirkt nur die Zentripetalkraft nach innen.

**Beispiel:** Körper (2 kg) auf Kreisbahn (r = 2 m) mit v = 4 m/s. Dann: FZ = 2·16/2 = 16 N.`,
      merksätze: [
        'Zentripetalkraft: FZ = m·v²/r = m·ω²·r. Die Zentripetalbeschleunigung zeigt immer zum Kreismittelpunkt.',
        'Winkelgeschwindigkeit: ω = 2π/T = 2π·f. Bahngeschwindigkeit: v = ω·r = 2π·r/T. Die Zentrifugalkraft ist eine Scheinkraft im rotierenden Bezugssystem.',
      ],
      altfrage: {
        question: 'Ein 2 kg schwerer Körper bewegt sich mit 4 m/s auf einer Kreisbahn mit r = 2 m. Wie groß ist die Zentripetalkraft?',
        answer: 'FZ = m·v²/r = 2·16/2 = 16 N.',
      },
      klinischerBezug:
        '**Zentrifuge im Labor:** Trennt Blutbestandteile nach Dichte. Bei 3000–5000 U/min (Umdrehungen pro Minute) erreicht die Zentrifuge ca. 1000–3000 g (g = Vielfaches der Erdbeschleunigung). Dichtere Bestandteile (Erythrozyten) sedimentieren nach außen, leichtere (Plasma) bleiben innen. Typische Anwendungen: **Hämatokrit**-Bestimmung, **Blutgasanalyse**, **Differentialblutbild**. **Ultrazentrifugen** (bis 100.000 g) trennen Zellorganellen, Proteine, DNA.',
      selfTest: [
        {
          question: 'Die Zentripetalkraft bei einer Kreisbewegung zeigt:',
          options: [
            'nach außen (weg vom Mittelpunkt)',
            'zum Kreismittelpunkt hin',
            'tangential zur Kreisbahn',
            'in Bewegungsrichtung',
            'senkrecht zur Bahnebene',
          ],
          correctIndex: 1,
          explanation: 'Die Zentripetalkraft ist immer zum Mittelpunkt der Kreisbahn gerichtet. Sie hält den Körper auf der Bahn.',
        },
        {
          question: 'Wie ändert sich die Zentripetalkraft, wenn die Geschwindigkeit verdoppelt wird (bei gleichem Radius)?',
          options: [
            'Sie verdoppelt sich',
            'Sie vervierfacht sich',
            'Sie halbiert sich',
            'Sie bleibt gleich',
            'Sie wird achtmal so groß',
          ],
          correctIndex: 1,
          explanation: 'FZ = m·v²/r. Bei Verdopplung von v wird FZ proportional zu (2v)² = 4v², also vervierfacht.',
        },
        {
          question: 'Die Umlaufdauer eines Körpers auf einer Kreisbahn beträgt 2 s. Wie groß ist die Winkelgeschwindigkeit?',
          options: ['π rad/s', '2π rad/s', '4π rad/s', 'π/2 rad/s', '4π² rad/s'],
          correctIndex: 0,
          explanation: 'ω = 2π/T = 2π/2 = π rad/s.',
        },
      ],
    },
  ],
};
