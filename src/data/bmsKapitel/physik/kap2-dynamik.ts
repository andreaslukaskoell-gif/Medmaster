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
      content: `Die drei Newtonschen Gesetze bilden das Fundament der klassischen Mechanik und beschreiben den Zusammenhang zwischen Kräften und Bewegungen. Das erste Newtonsche Gesetz (Trägheitsprinzip) besagt: Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine äußere Kraft auf ihn einwirkt. Dieses Gesetz definiert gleichzeitig den Begriff des Inertialsystems — eines Bezugssystems, in dem das Trägheitsprinzip gilt. Im Alltag begegnet uns die Trägheit beispielsweise, wenn Passagiere in einem plötzlich bremsenden Bus nach vorne fallen oder wenn ein Tischtuch unter Geschirr weggezogen wird, ohne dass die Gegenstände kippen.

Das zweite Newtonsche Gesetz (Aktionsprinzip) ist das zentrale Gesetz der Dynamik: F = m · a. Die auf einen Körper wirkende resultierende Kraft F ist gleich dem Produkt aus seiner Masse m und seiner Beschleunigung a. Dieses Gesetz verknüpft die Kinematik (Beschreibung der Bewegung) mit der Dynamik (Ursache der Bewegung). Die Einheit der Kraft ist das Newton: 1 N = 1 kg · m/s². Wirken mehrere Kräfte auf einen Körper, so bestimmt die vektorielle Summe aller Kräfte (die Resultierende) die Beschleunigung. Ist die Resultierende null, befindet sich der Körper im Kräftegleichgewicht — er ruht oder bewegt sich gleichförmig geradlinig (Zusammenhang mit dem ersten Gesetz).

Das dritte Newtonsche Gesetz (Wechselwirkungsprinzip, Actio = Reactio) besagt: Übt ein Körper A eine Kraft auf Körper B aus (Actio), so übt Körper B eine gleich große, aber entgegengesetzte Kraft auf Körper A aus (Reactio). Wichtig ist, dass diese beiden Kräfte an verschiedenen Körpern angreifen und sich daher nicht gegenseitig aufheben. Beispielsweise drückt ein Buch auf den Tisch (Gewichtskraft), und der Tisch drückt mit gleicher Kraft zurück (Normalkraft). Beim Gehen drückt der Fuß nach hinten auf den Boden, und die Reibungskraft des Bodens treibt den Körper nach vorne. Das Wechselwirkungsprinzip erklärt auch, warum eine Rakete im Vakuum fliegen kann: Die ausgestoßenen Gase erfahren eine Kraft nach hinten, und die Rakete eine gleichgroße Kraft nach vorne.`,
      sections: [
        {
          heading: 'Erstes Newtonsches Gesetz (Trägheitsprinzip)',
          text: `Das erste Newtonsche Gesetz besagt: Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine äußere Kraft auf ihn einwirkt. Dieses Gesetz definiert gleichzeitig den Begriff des Inertialsystems — eines Bezugssystems, in dem das Trägheitsprinzip gilt. Im Alltag begegnet uns die Trägheit beispielsweise, wenn Passagiere in einem plötzlich bremsenden Bus nach vorne fallen oder wenn ein Tischtuch unter Geschirr weggezogen wird, ohne dass die Gegenstände kippen.`,
        },
        {
          heading: 'Zweites Newtonsches Gesetz (F = m·a)',
          text: `Das zweite Newtonsche Gesetz ist das zentrale Gesetz der Dynamik: F = m · a. Die auf einen Körper wirkende resultierende Kraft F ist gleich dem Produkt aus seiner Masse m und seiner Beschleunigung a. Dieses Gesetz verknüpft die Kinematik (Beschreibung der Bewegung) mit der Dynamik (Ursache der Bewegung). Die Einheit der Kraft ist das Newton: 1 N = 1 kg · m/s². Wirken mehrere Kräfte auf einen Körper, so bestimmt die vektorielle Summe aller Kräfte (die Resultierende) die Beschleunigung. Ist die Resultierende null, befindet sich der Körper im Kräftegleichgewicht — er ruht oder bewegt sich gleichförmig geradlinig.`,
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
          text: `Das dritte Newtonsche Gesetz (Wechselwirkungsprinzip) besagt: Übt ein Körper A eine Kraft auf Körper B aus (Actio), so übt Körper B eine gleich große, aber entgegengesetzte Kraft auf Körper A aus (Reactio). Wichtig ist, dass diese beiden Kräfte an verschiedenen Körpern angreifen und sich daher nicht gegenseitig aufheben. Beispielsweise drückt ein Buch auf den Tisch (Gewichtskraft), und der Tisch drückt mit gleicher Kraft zurück (Normalkraft). Beim Gehen drückt der Fuß nach hinten auf den Boden, und die Reibungskraft des Bodens treibt den Körper nach vorne. Das Wechselwirkungsprinzip erklärt auch, warum eine Rakete im Vakuum fliegen kann: Die ausgestoßenen Gase erfahren eine Kraft nach hinten, und die Rakete eine gleichgroße Kraft nach vorne.`,
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
        'Das Trägheitsprinzip erklärt das Schleudertrauma bei Auffahrunfällen: Der Kopf verharrt aufgrund seiner Trägheit in der Ruheposition, während der Rumpf durch den Aufprall beschleunigt wird. Dies führt zu einer Überstreckung der Halswirbelsäule. Sicherheitsgurte und Kopfstützen sind Anwendungen der Newtonschen Gesetze zur Unfallprävention.',
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
      content: `In der Mechanik treten verschiedene Kraftarten auf, die für das Verständnis physikalischer Vorgänge essenziell sind. Die Gewichtskraft FG = m · g ist die Kraft, mit der die Erde einen Körper anzieht. Sie ist proportional zur Masse m und zur Erdbeschleunigung g ≈ 9,81 m/s². Die Gewichtskraft zeigt stets senkrecht nach unten zum Erdmittelpunkt. Die Normalkraft FN ist die Reaktionskraft einer Unterlage auf einen aufliegenden Körper und steht senkrecht auf der Oberfläche. Auf einer waagerechten Fläche ist die Normalkraft betragsmäßig gleich der Gewichtskraft, auf einer schiefen Ebene ist sie jedoch kleiner. Diese Unterscheidung ist für viele Prüfungsaufgaben entscheidend.

Die Reibungskraft FR wirkt der Bewegung entgegen und ist proportional zur Normalkraft: FR = μ · FN, wobei μ der dimensionslose Reibungsköffizient ist. Man unterscheidet Haftreibung (μH, Körper ruht noch) und Gleitreibung (μG, Körper bewegt sich bereits), wobei die Haftreibung in der Regel größer ist als die Gleitreibung. Dies erklärt, warum es mehr Kraft braucht, einen Schrank in Bewegung zu setzen, als ihn in Bewegung zu halten. Die Reibung ist im Alltag meist erwünscht (Gehen, Bremsen, Greifen), kann aber auch unerwünscht sein (Verschleiß, Energieverlust in Maschinen). Die Rollreibung ist deutlich kleiner als die Gleitreibung, weshalb Räder den Transport erheblich erleichtern.

Die Federkraft folgt dem Hookeschen Gesetz: F = k · s (auch F = D · x geschrieben). Dabei ist k (oder D) die Federkonstante in N/m und s (oder x) die Auslenkung aus der Ruhelage. Die Federkraft ist eine rücktreibende Kraft, die proportional zur Ausdehnung oder Stauchung der Feder ist und ihr entgegenwirkt. Das Hookesche Gesetz gilt nur im linearen Bereich — bei zu großer Auslenkung wird die Feder plastisch verformt und kehrt nicht mehr in ihre Ausgangsform zurück. Federn speichern potenzielle Energie (Espann = ½ · k · s²) und spielen in der Medizintechnik eine Rolle, beispielsweise in Blutdruckmessgeräten, Spritzen und orthopädischen Prothesen. Auch Sehnen und Bänder im menschlichen Körper verhalten sich in gewissen Bereichen federartig.`,
      merksätze: [
        'Gewichtskraft: FG = m·g. Reibungskraft: FR = μ·FN. Federkraft (Hooke): F = k·s. Die Haftreibung ist größer als die Gleitreibung (μH > μG).',
        'Die Normalkraft steht immer senkrecht auf der Kontaktfläche. Auf waagerechtem Boden gilt FN = FG = m·g.',
      ],
      altfrage: {
        question: 'Eine Feder mit k = 200 N/m wird um 5 cm gedehnt. Wie groß ist die rücktreibende Kraft?',
        answer: 'F = k·s = 200 N/m · 0,05 m = 10 N.',
      },
      klinischerBezug:
        'Sehnen und Bänder verhalten sich in gewissen Grenzen wie elastische Federn — sie folgen dem Hookeschen Gesetz. Bei Überbelastung (über den linearen Bereich hinaus) kommt es zu plastischer Verformung oder Riss. Die Reibung zwischen Gelenkflächen wird durch Synovialflüssigkeit minimiert, was die Beweglichkeit der Gelenke gewährleistet.',
      selfTest: [
        {
          question: 'Ein Körper von 5 kg liegt auf einem Tisch. Wie groß ist die Normalkraft? (g = 10 m/s²)',
          options: ['5 N', '50 N', '500 N', '0,5 N', '9,81 N'],
          correctIndex: 1,
          explanation: 'Auf waagerechter Fläche: FN = FG = m·g = 5 · 10 = 50 N.',
        },
        {
          question: 'Der Reibungsköffizient beträgt μ = 0,4. Wie groß ist die Reibungskraft bei einer Normalkraft von 100 N?',
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
      content: `Die schiefe Ebene ist ein klassisches Thema der Mechanik und ein Dauerbrenner in Physikprüfungen. Liegt ein Körper auf einer geneigten Fläche mit dem Neigungswinkel α, so wird die Gewichtskraft FG = m · g in zwei Komponenten zerlegt: die Hangabtriebskraft FH = m · g · sin(α), die den Körper entlang der Ebene nach unten zieht, und die Normalkraft FN = m · g · cos(α), die senkrecht auf der Ebene steht und den Körper gegen die Oberfläche drückt. Diese Kräftezerlegung ist der Schlüssel zur Lösung aller Aufgaben zur schiefen Ebene. Man beachte, dass bei α = 0° (horizontale Ebene) FH = 0 und FN = FG gilt, und bei α = 90° (senkrechte Wand) FH = FG und FN = 0 ist.

Ob der Körper auf der schiefen Ebene ruht oder gleitet, hängt vom Verhältnis zwischen Hangabtriebskraft und Reibungskraft ab. Die maximale Haftreibungskraft beträgt FR,max = μH · FN = μH · m · g · cos(α). Der Körper beginnt zu gleiten, wenn FH > FR,max, also wenn m · g · sin(α) > μH · m · g · cos(α). Durch Kürzen ergibt sich die Bedingung tan(α) > μH. Der Winkel, bei dem der Körper gerade zu gleiten beginnt, heißt Grenzwinkel der Haftreibung: αgrenz = arctan(μH). Diese Beziehung ist bemerkenswert, weil der Grenzwinkel unabhängig von der Masse des Körpers ist — ein schwerer und ein leichter Körper beginnen bei demselben Winkel zu rutschen, sofern der Reibungsköffizient gleich ist.

Bewegt sich der Körper auf der schiefen Ebene, so bestimmt die Resultierende aus Hangabtriebskraft und Gleitreibungskraft die Beschleunigung. Die Beschleunigung entlang der Ebene beträgt a = g · (sin(α) - μG · cos(α)). Ist diese positiv, beschleunigt der Körper hangabwärts; ist sie null, gleitet er mit konstanter Geschwindigkeit. In der medizinischen Praxis ist das Prinzip der schiefen Ebene beim Lagern von Patienten relevant: Eine Schrägstellung des Bettes ändert die auf den Körper wirkenden Kraftkomponenten, was beispielsweise bei Trendelenburg-Lagerung therapeutisch genutzt wird. Auch die Biomechanik des Gehens auf Steigungen und Gefällen lässt sich mit dem Modell der schiefen Ebene analysieren.`,
      merksätze: [
        'Schiefe Ebene: Hangabtriebskraft FH = m·g·sin(α), Normalkraft FN = m·g·cos(α). Der Körper gleitet, wenn tan(α) > μH.',
        'Die Beschleunigung auf der schiefen Ebene: a = g·(sin(α) - μ·cos(α)). Der Grenzwinkel der Haftreibung αgrenz = arctan(μH) ist massenunabhängig.',
      ],
      altfrage: {
        question: 'Ein 10 kg schwerer Körper liegt auf einer schiefen Ebene mit α = 30°. Wie groß sind Hangabtriebskraft und Normalkraft? (g = 10 m/s²)',
        answer: 'FH = m·g·sin(30°) = 10·10·0,5 = 50 N. FN = m·g·cos(30°) = 10·10·0,866 = 86,6 N.',
      },
      klinischerBezug:
        'Die Trendelenburg-Lagerung (Kopftieflage) nutzt das Prinzip der schiefen Ebene: Durch Schrägstellung des Bettes wird der venöse Rückstrom zum Herzen erleichtert. Bei der Anti-Trendelenburg-Lagerung (Oberkörperhochlage) reduziert sich der Druck auf das Zwerchfell, was die Atmung erleichtert.',
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
          explanation: 'Der Grenzwinkel αgrenz = arctan(μH) hängt nur vom Reibungsköffizienten ab und ist massenunabhängig.',
        },
      ],
    },
    {
      id: 'phys-kap2-4',
      title: 'Kreisbewegung',
      content: `Die gleichförmige Kreisbewegung beschreibt die Bewegung eines Körpers auf einer kreisförmigen Bahn mit konstantem Geschwindigkeitsbetrag. Obwohl der Betrag der Geschwindigkeit konstant bleibt, ändert sich ihre Richtung ständig — der Körper wird daher permanent beschleunigt. Diese Beschleunigung zeigt immer zum Mittelpunkt des Kreises und heißt Zentripetalbeschleunigung: az = v²/r = ω²·r, wobei v die Bahngeschwindigkeit, r der Radius und ω die Winkelgeschwindigkeit ist. Die Winkelgeschwindigkeit ω = 2π/T = 2π·f beschreibt die Winkeländerung pro Zeiteinheit und wird in rad/s gemessen, wobei T die Umlaufdauer und f die Frequenz ist.

Die Zentripetalkraft ist die Kraft, die den Körper auf der Kreisbahn hält und stets zum Mittelpunkt gerichtet ist: FZ = m · v²/r = m · ω² · r. Sie ist keine eigenständige Kraft, sondern wird von anderen Kräften bereitgestellt — beispielsweise von der Gravitationskraft bei Planetenbewegungen, von der Seilkraft bei einem Karussell, von der Reibungskraft bei einem Auto in der Kurve oder von der Lorentzkraft bei geladenen Teilchen im Magnetfeld. Im nicht-inertialen Bezugssystem des mitrotierenden Beobachters tritt die sogenannte Zentrifugalkraft als Scheinkraft auf, die nach außen gerichtet ist. Sie hat denselben Betrag wie die Zentripetalkraft, ist aber keine reale Kraft, sondern ein Trägheitseffekt.

Die Kreisbewegung hat in der Medizin vielfältige Anwendungen. Die Zentrifuge ist ein unentbehrliches Laborgerät, das die Zentrifugalkraft nutzt, um Blutbestandteile (Erythrozyten, Leukozyten, Plasma) voneinander zu trennen. Dabei werden die dichteren Bestandteile nach außen gedrückt, während die weniger dichten Bestandteile weiter innen bleiben. Die Beschleunigung in einer Zentrifuge kann ein Vielfaches der Erdbeschleunigung betragen (z. B. 3000 g). Auch in der Computertomographie (CT) rotiert die Röntgenröhre um den Patienten und führt so eine Kreisbewegung aus. Die Bahngeschwindigkeit berechnet sich aus dem Umfang der Bahn geteilt durch die Umlaufdauer: v = 2π·r/T.`,
      merksätze: [
        'Zentripetalkraft: FZ = m·v²/r = m·ω²·r. Die Zentripetalbeschleunigung zeigt immer zum Kreismittelpunkt.',
        'Winkelgeschwindigkeit: ω = 2π/T = 2π·f. Bahngeschwindigkeit: v = ω·r = 2π·r/T. Die Zentrifugalkraft ist eine Scheinkraft im rotierenden Bezugssystem.',
      ],
      altfrage: {
        question: 'Ein 2 kg schwerer Körper bewegt sich mit 4 m/s auf einer Kreisbahn mit r = 2 m. Wie groß ist die Zentripetalkraft?',
        answer: 'FZ = m·v²/r = 2·16/2 = 16 N.',
      },
      klinischerBezug:
        'Die Zentrifuge im Labor nutzt die Zentrifugalkraft zur Trennung von Blutbestandteilen. Bei einer Blutgasanalyse oder einem Differentialblutbild werden die Proben zentrifugiert. Typische Zentrifugen erreichen 3000–15000 g, Ultrazentrifugen bis zu 100000 g für die Trennung von Proteinen und Zellorganellen.',
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
