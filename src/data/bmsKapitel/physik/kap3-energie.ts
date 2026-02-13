import type { Kapitel } from '../types';

export const physKap3: Kapitel = {
  id: 'phys-kap3',
  title: 'Energie, Arbeit & Leistung',
  subject: 'physik',
  icon: '⚡',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap3-1',
      title: 'Mechanische Arbeit',
      content: `Mechanische Arbeit wird verrichtet, wenn eine Kraft F einen Körper entlang eines Weges s verschiebt. Die physikalische Arbeit ist definiert als W = F · s · cos(α), wobei α der Winkel zwischen Kraftrichtung und Wegrichtung ist. Zeigen Kraft und Weg in die gleiche Richtung (α = 0°), so vereinfacht sich die Formel zu W = F · s. Die SI-Einheit der Arbeit ist das Joule: 1 J = 1 N · m = 1 kg · m²/s². Steht die Kraft senkrecht auf dem Weg (α = 90°), wird keine Arbeit verrichtet — beispielsweise leistet die Normalkraft auf einer horizontalen Fläche keine Arbeit, da sie senkrecht zur Bewegungsrichtung wirkt.

Es gibt verschiedene Formen der mechanischen Arbeit. Die Hubarbeit WHub = m · g · h wird verrichtet, wenn ein Körper der Masse m um die Höhe h angehoben wird. Dabei wird gegen die Schwerkraft gearbeitet, und die aufgewendete Energie wird als potenzielle Energie gespeichert. Die Reibungsarbeit WReib = FR · s = μ · FN · s wird gegen die Reibungskraft verrichtet und in Wärmeenergie umgewandelt — diese Energie geht dem mechanischen System verloren, weshalb Reibungsarbeit als dissipative (zerstreuende) Arbeit bezeichnet wird. Die Beschleunigungsarbeit WBeschl = ½ · m · v² ist die Arbeit, die nötig ist, um einen Körper aus der Ruhe auf die Geschwindigkeit v zu beschleunigen, und entspricht der kinetischen Energie des Körpers.

Die Spannarbeit WSpann = ½ · k · s² wird beim Dehnen oder Stauchen einer Feder verrichtet und als elastische potenzielle Energie (Spannenergie) gespeichert. Im Kraft-Weg-Diagramm entspricht die verrichtete Arbeit der Fläche unter der Kurve. Bei konstanter Kraft ergibt sich ein Rechteck (W = F · s), bei der Feder ergibt sich ein Dreieck (W = ½ · F · s = ½ · k · s²), da die Kraft linear mit der Auslenkung zunimmt. Dieses Prinzip der Flächenberechnung im F-s-Diagramm ist universell anwendbar und ein wichtiges Werkzeug zur Lösung von Aufgaben, bei denen die Kraft nicht konstant ist. In der Medizin wird das Konzept der Arbeit beispielsweise bei der Berechnung der Herzarbeit verwendet: Das Herz verrichtet bei jeder Kontraktion Arbeit, um das Blut gegen den Gefäßwiderstand zu pumpen.`,
      lernziele: [
        'Die Definition der mechanischen Arbeit (W = F·s·cos α) erklaeren und anwenden koennen',
        'Verschiedene Arbeitsformen (Hub-, Reibungs-, Beschleunigungs- und Spannarbeit) unterscheiden und berechnen koennen',
        'Die Bedeutung des Kraft-Weg-Diagramms fuer die Arbeit als Flaeche unter der Kurve verstehen'
      ],
      sections: [
        {
          heading: 'Definition und Grundformel',
          text: 'Mechanische Arbeit wird verrichtet, wenn eine Kraft F einen Koerper entlang eines Weges s verschiebt. Die physikalische Arbeit ist definiert als W = F · s · cos(α), wobei α der Winkel zwischen Kraftrichtung und Wegrichtung ist. Zeigen Kraft und Weg in die gleiche Richtung (α = 0°), so vereinfacht sich die Formel zu W = F · s.\n\nDie SI-Einheit der Arbeit ist das Joule: 1 J = 1 N · m = 1 kg · m²/s². Steht die Kraft senkrecht auf dem Weg (α = 90°), wird keine Arbeit verrichtet — beispielsweise leistet die Normalkraft auf einer horizontalen Flaeche keine Arbeit, da sie senkrecht zur Bewegungsrichtung wirkt.',
          merksatz: 'W = F · s · cos(α). Nur die Kraftkomponente IN Bewegungsrichtung verrichtet Arbeit. Senkrecht zum Weg → keine Arbeit.'
        },
        {
          heading: 'Formen der mechanischen Arbeit',
          text: 'Die Hubarbeit W<sub>Hub</sub> = m · g · h wird verrichtet, wenn ein Koerper der Masse m um die Hoehe h angehoben wird. Dabei wird gegen die Schwerkraft gearbeitet, und die aufgewendete Energie wird als potenzielle Energie gespeichert.\n\nDie Reibungsarbeit W<sub>Reib</sub> = μ · F<sub>N</sub> · s wird gegen die Reibungskraft verrichtet und in Waermeenergie umgewandelt — diese Energie geht dem mechanischen System verloren (dissipative Arbeit). Die Beschleunigungsarbeit W<sub>Beschl</sub> = ½ · m · v² ist die Arbeit, um einen Koerper auf die Geschwindigkeit v zu beschleunigen.',
          table: {
            headers: ['Arbeitsform', 'Formel', 'Energieumwandlung'],
            rows: [
              ['Hubarbeit', 'W = m · g · h', 'In potenzielle Energie'],
              ['Reibungsarbeit', 'W = μ · F<sub>N</sub> · s', 'In Waermeenergie (dissipativ)'],
              ['Beschleunigungsarbeit', 'W = ½ · m · v²', 'In kinetische Energie'],
              ['Spannarbeit', 'W = ½ · k · s²', 'In elastische Energie']
            ]
          }
        },
        {
          heading: 'Kraft-Weg-Diagramm',
          text: 'Im Kraft-Weg-Diagramm entspricht die verrichtete Arbeit der Flaeche unter der Kurve. Bei konstanter Kraft ergibt sich ein Rechteck (W = F · s), bei der Feder ergibt sich ein Dreieck (W = ½ · F · s = ½ · k · s²), da die Kraft linear mit der Auslenkung zunimmt.\n\nDieses Prinzip der Flaechenberechnung im F-s-Diagramm ist universell anwendbar und ein wichtiges Werkzeug zur Loesung von Aufgaben, bei denen die Kraft nicht konstant ist.',
          merksatz: 'Arbeit = Flaeche unter der Kurve im F-s-Diagramm. Konstante Kraft → Rechteck, Feder → Dreieck.'
        }
      ],
      merksaetze: [
        'Mechanische Arbeit: W = F·s·cos(α). Einheit: 1 Joule = 1 N·m. Steht die Kraft senkrecht zum Weg, wird keine Arbeit verrichtet.',
        'Hubarbeit: WHub = m·g·h. Reibungsarbeit: WReib = μ·FN·s (wird in Wärme umgewandelt). Spannarbeit: WSpann = ½·k·s².',
      ],
      altfrage: {
        question: 'Wie viel Hubarbeit muss verrichtet werden, um einen 50 kg schweren Koffer 3 m hoch zu heben? (g = 10 m/s²)',
        answer: 'WHub = m·g·h = 50 · 10 · 3 = 1500 J = 1,5 kJ.',
      },
      klinischerBezug:
        'Das Herz leistet pro Schlag etwa 1 J Arbeit (linker Ventrikel) und pumpt dabei ca. 70 ml Blut gegen den mittleren arteriellen Druck. Bei einem Herzzeitvolumen von 5 l/min und einer Herzfrequenz von 70/min ergibt sich eine Herzleistung von etwa 1,2 W. Bei Herzinsuffizienz sinkt diese Pumpleistung.',
      selfTest: [
        {
          question: 'Wie viel Arbeit verrichtet eine Kraft von 50 N auf einem Weg von 4 m, wenn Kraft und Weg parallel sind?',
          options: ['12,5 J', '200 J', '50 J', '800 J'],
          correctIndex: 1,
          explanation: 'W = F·s = 50 N · 4 m = 200 J (α = 0°, cos(0°) = 1).',
        },
        {
          question: 'Ein Gewichtheber hält eine 100 kg Hantel auf gestreckten Armen über dem Kopf. Wie viel Arbeit verrichtet er?',
          options: ['1000 J', '980 J', '0 J', 'Abhängig von der Haltezeit'],
          correctIndex: 2,
          explanation: 'Da der Weg s = 0 ist (die Hantel bewegt sich nicht), wird physikalisch keine Arbeit verrichtet: W = F·0 = 0 J. Der Körper verbraucht zwar metabolische Energie für die isometrische Muskelkontraktion, aber im physikalischen Sinne ist W = 0.',
        },
        {
          question: 'Die Fläche unter dem F-s-Diagramm entspricht:',
          options: ['der Kraft', 'der Leistung', 'der verrichteten Arbeit', 'der Beschleunigung'],
          correctIndex: 2,
          explanation: 'Die Fläche unter der Kraft-Weg-Kurve im F-s-Diagramm entspricht der verrichteten Arbeit W.',
        },
      ],
    },
    {
      id: 'phys-kap3-2',
      title: 'Energie',
      content: `Energie ist eine der fundamentalsten Größen der Physik. Sie beschreibt die Fähigkeit eines Systems, Arbeit zu verrichten. Die kinetische Energie (Bewegungsenergie) eines Körpers mit Masse m und Geschwindigkeit v beträgt Ekin = ½ · m · v². Sie ist immer positiv und proportional zum Quadrat der Geschwindigkeit — verdoppelt man die Geschwindigkeit, vervierfacht sich die kinetische Energie. Dies hat enorme Auswirkungen auf die Verkehrssicherheit: Der Bremsweg wächst quadratisch mit der Geschwindigkeit. Bei doppelter Geschwindigkeit ist der Bremsweg viermal so lang und die bei einem Aufprall freigesetzte Energie viermal so groß.

Die potenzielle Energie (Lageenergie) eines Körpers in der Höhe h über einem Bezugsniveau beträgt Epot = m · g · h. Sie wird durch die Position des Körpers im Gravitationsfeld bestimmt und kann in kinetische Energie umgewandelt werden (z. B. beim freien Fall). Das Bezugsniveau für die potenzielle Energie kann frei gewählt werden — nur Differenzen der potenziellen Energie sind physikalisch relevant. Daneben gibt es die elastische potenzielle Energie einer gespannten Feder Espann = ½ · k · s², die beim Loslassen in kinetische Energie umgewandelt werden kann (z. B. beim Abschuss eines Pfeils mit einem Bogen).

Der Energieerhaltungssatz ist eines der wichtigsten Prinzipien der Physik: In einem abgeschlossenen System bleibt die Gesamtenergie konstant. Energie kann weder erzeugt noch vernichtet, sondern nur von einer Form in eine andere umgewandelt werden. Beim freien Fall wird potenzielle Energie in kinetische Energie umgewandelt: m · g · h = ½ · m · v², woraus sich v = √(2gh) ergibt. Beim Pendel schwingt die Energie ständig zwischen potenzieller und kinetischer Energie hin und her. In realen Systemen geht immer ein Teil der mechanischen Energie durch Reibung in Wärme über — die Gesamtenergie bleibt aber erhalten, wenn man die Wärmeenergie mitberücksichtigt. Der Energieerhaltungssatz ermöglicht elegante Lösungen vieler Aufgaben, ohne den genauen Bewegungsverlauf kennen zu müssen.`,
      lernziele: [
        'Die Formeln fuer kinetische, potenzielle und elastische Energie anwenden koennen',
        'Den Energieerhaltungssatz erklaeren und auf Aufgaben anwenden koennen',
        'Energieumwandlungen in physikalischen Systemen (Pendel, freier Fall) beschreiben koennen'
      ],
      sections: [
        {
          heading: 'Kinetische Energie',
          text: 'Energie beschreibt die Faehigkeit eines Systems, Arbeit zu verrichten. Die kinetische Energie (Bewegungsenergie) eines Koerpers mit Masse m und Geschwindigkeit v betraegt E<sub>kin</sub> = ½ · m · v². Sie ist immer positiv und proportional zum Quadrat der Geschwindigkeit.\n\nVerdoppelt man die Geschwindigkeit, vervierfacht sich die kinetische Energie. Dies hat enorme Auswirkungen auf die Verkehrssicherheit: Der Bremsweg waechst quadratisch mit der Geschwindigkeit.',
          merksatz: 'Doppelte Geschwindigkeit = vierfache kinetische Energie = vierfacher Bremsweg!'
        },
        {
          heading: 'Potenzielle und elastische Energie',
          text: 'Die potenzielle Energie (Lageenergie) eines Koerpers in der Hoehe h ueber einem Bezugsniveau betraegt E<sub>pot</sub> = m · g · h. Sie wird durch die Position im Gravitationsfeld bestimmt und kann in kinetische Energie umgewandelt werden (z. B. beim freien Fall).\n\nDaneben gibt es die elastische potenzielle Energie einer gespannten Feder E<sub>spann</sub> = ½ · k · s², die beim Loslassen in kinetische Energie umgewandelt werden kann.',
          table: {
            headers: ['Energieform', 'Formel', 'Beispiel'],
            rows: [
              ['Kinetische Energie', 'E<sub>kin</sub> = ½ · m · v²', 'Fahrendes Auto'],
              ['Potenzielle Energie', 'E<sub>pot</sub> = m · g · h', 'Stein auf Klippe'],
              ['Elastische Energie', 'E<sub>spann</sub> = ½ · k · s²', 'Gespannte Feder']
            ]
          }
        },
        {
          heading: 'Energieerhaltungssatz',
          text: 'In einem abgeschlossenen System bleibt die Gesamtenergie konstant. Energie kann weder erzeugt noch vernichtet, sondern nur von einer Form in eine andere umgewandelt werden.\n\nBeim freien Fall wird potenzielle in kinetische Energie umgewandelt: m · g · h = ½ · m · v², woraus sich v = √(2gh) ergibt. Beim Pendel schwingt die Energie staendig zwischen potenzieller und kinetischer Energie hin und her. In realen Systemen geht ein Teil durch Reibung in Waerme ueber.',
          merksatz: 'Energieerhaltung: E<sub>pot</sub> + E<sub>kin</sub> = konstant (ohne Reibung). Freier Fall: v = √(2gh).'
        }
      ],
      merksaetze: [
        'Kinetische Energie: Ekin = ½·m·v². Potenzielle Energie: Epot = m·g·h. Spannenergie: Espann = ½·k·s².',
        'Energieerhaltungssatz: Die Gesamtenergie in einem abgeschlossenen System bleibt konstant. Energie kann umgewandelt, aber nicht erzeugt oder vernichtet werden.',
      ],
      altfrage: {
        question: 'Ein 2 kg schwerer Ball fällt aus 5 m Höhe. Mit welcher Geschwindigkeit trifft er auf dem Boden auf? (g = 10 m/s²)',
        answer: 'Energieerhaltung: Epot = Ekin → m·g·h = ½·m·v² → v = √(2gh) = √(2·10·5) = √100 = 10 m/s. Die Masse kürzt sich heraus!',
      },
      klinischerBezug:
        'Der Energieerhaltungssatz gilt auch für den menschlichen Körper: Die mit der Nahrung aufgenommene chemische Energie wird in Wärme, mechanische Arbeit und gespeicherte Energie umgewandelt. Der Grundumsatz eines Erwachsenen beträgt etwa 80 W (≈ 2000 kcal/Tag). Bei einem Herzstillstand liefert ein Defibrillator 200–360 J elektrische Energie, um das Herz zu depolarisieren.',
      selfTest: [
        {
          question: 'Wie ändert sich die kinetische Energie, wenn die Geschwindigkeit verdreifacht wird?',
          options: [
            'Sie verdreifacht sich',
            'Sie versechsfacht sich',
            'Sie verneunfacht sich',
            'Sie bleibt gleich',
          ],
          correctIndex: 2,
          explanation: 'Ekin = ½·m·v². Bei v → 3v: Ekin → ½·m·(3v)² = 9·½·m·v². Sie verneunfacht sich.',
        },
        {
          question: 'Ein Pendel schwingt reibungsfrei. In welchem Punkt ist die kinetische Energie maximal?',
          options: [
            'Am höchsten Punkt',
            'Am tiefsten Punkt (Ruhelage)',
            'In der Mitte zwischen höchstem und tiefstem Punkt',
            'Die kinetische Energie ist überall gleich',
          ],
          correctIndex: 1,
          explanation: 'Am tiefsten Punkt ist die gesamte potenzielle Energie in kinetische umgewandelt, daher ist Ekin dort maximal und Epot minimal.',
        },
        {
          question: 'Ein Stein (1 kg) liegt auf einer 10 m hohen Klippe. Wie groß ist seine potenzielle Energie? (g = 10 m/s²)',
          options: ['10 J', '100 J', '1000 J', '50 J'],
          correctIndex: 1,
          explanation: 'Epot = m·g·h = 1·10·10 = 100 J.',
        },
      ],
    },
    {
      id: 'phys-kap3-3',
      title: 'Leistung & Wirkungsgrad',
      content: `Die Leistung P beschreibt, wie schnell Arbeit verrichtet wird, also die Arbeit pro Zeiteinheit: P = W/t. Ihre SI-Einheit ist das Watt: 1 W = 1 J/s. Ein häufig verwendetes Vielfaches ist das Kilowatt (1 kW = 1000 W). Die historische Einheit Pferdestärke (PS) entspricht etwa 736 W. Die Leistung lässt sich auch als Produkt aus Kraft und Geschwindigkeit ausdrücken: P = F · v, was sich leicht aus P = W/t = F·s/t = F·v herleiten lässt. Diese Darstellung ist besonders nützlich bei Aufgaben, in denen die Geschwindigkeit gegeben ist, beispielsweise bei der Berechnung der Antriebsleistung eines Fahrzeugs bei konstanter Geschwindigkeit gegen eine Reibungskraft.

Die Energieeinheit Kilowattstunde (kWh) wird häufig zur Angabe elektrischer Energie verwendet: 1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J = 3,6 MJ. Diese Einheit ist zwar keine SI-Einheit, aber im Alltag weit verbreitet, insbesondere bei Stromrechnungen. In der Ernährungswissenschaft und Medizin wird die Energieeinheit Kalorie (cal) bzw. Kilokalorie (kcal) verwendet: 1 kcal = 4,186 kJ. Der tägliche Energiebedarf eines Erwachsenen liegt bei etwa 2000–2500 kcal ≈ 8400–10500 kJ. Die Leistung des menschlichen Körpers im Ruhezustand (Grundumsatz) beträgt etwa 80 W und kann bei schwerer körperlicher Arbeit auf über 500 W ansteigen.

Der Wirkungsgrad η (eta) beschreibt das Verhältnis von Nutzleistung (oder Nutzarbeit) zu zugeführter Leistung (oder zugeführter Arbeit): η = Pnutz/Pzu = Wnutz/Wzu. Er wird oft in Prozent angegeben und liegt immer zwischen 0 und 1 (bzw. 0 % und 100 %). Ein Wirkungsgrad von 100 % ist in der Praxis unerreichbar, da stets Verluste (vor allem durch Reibung und Wärmeabgabe) auftreten. Der Wirkungsgrad eines Ottomotors liegt bei etwa 30–40 %, einer Glühbirne bei nur 5 % (95 % werden als Wärme abgegeben), während ein Elektromotor bis zu 95 % erreichen kann. Werden mehrere Maschinen hintereinandergeschaltet, multiplizieren sich die Einzelwirkungsgrade zum Gesamtwirkungsgrad: ηges = η₁ · η₂ · η₃ · ... Dieses Prinzip zeigt, dass jede zusätzliche Energieumwandlung den Gesamtwirkungsgrad verschlechtert.`,
      lernziele: [
        'Leistung als Arbeit pro Zeit (P = W/t = F·v) berechnen koennen',
        'Energieeinheiten (Joule, kWh, kcal) umrechnen koennen',
        'Den Wirkungsgrad berechnen und das Prinzip der Hintereinanderschaltung verstehen'
      ],
      sections: [
        {
          heading: 'Leistung',
          text: 'Die Leistung P beschreibt, wie schnell Arbeit verrichtet wird: P = W/t. Ihre SI-Einheit ist das Watt: 1 W = 1 J/s. Die Leistung laesst sich auch als Produkt aus Kraft und Geschwindigkeit ausdruecken: P = F · v.\n\nDiese Darstellung ist besonders nuetzlich bei Aufgaben, in denen die Geschwindigkeit gegeben ist, beispielsweise bei der Berechnung der Antriebsleistung eines Fahrzeugs gegen eine Reibungskraft.',
          merksatz: 'Leistung: P = W/t = F · v. Einheit: 1 Watt = 1 Joule pro Sekunde. 1 PS ≈ 736 W.'
        },
        {
          heading: 'Energieeinheiten',
          text: 'Die Kilowattstunde (kWh) ist eine gaengige Energieeinheit: 1 kWh = 3,6 · 10⁶ J = 3,6 MJ. In der Ernaehrungswissenschaft und Medizin wird die Kilokalorie (kcal) verwendet: 1 kcal = 4,186 kJ.\n\nDer taegliche Energiebedarf eines Erwachsenen liegt bei etwa 2000-2500 kcal ≈ 8400-10500 kJ. Die Leistung des menschlichen Koerpers im Ruhezustand (Grundumsatz) betraegt etwa 80 W.',
          table: {
            headers: ['Einheit', 'Umrechnung', 'Verwendung'],
            rows: [
              ['Joule (J)', '1 J = 1 N·m = 1 W·s', 'SI-Einheit der Energie'],
              ['Kilowattstunde (kWh)', '1 kWh = 3,6 MJ', 'Stromrechnungen'],
              ['Kilokalorie (kcal)', '1 kcal = 4,186 kJ', 'Ernaehrung/Medizin'],
              ['Elektronenvolt (eV)', '1 eV = 1,6 · 10<sup>-19</sup> J', 'Atom-/Kernphysik']
            ]
          }
        },
        {
          heading: 'Wirkungsgrad',
          text: 'Der Wirkungsgrad η (eta) beschreibt das Verhaeltnis von Nutzleistung zu zugefuehrter Leistung: η = P<sub>nutz</sub>/P<sub>zu</sub>. Er liegt immer zwischen 0 und 1 (bzw. 0 % und 100 %). Ein Wirkungsgrad von 100 % ist in der Praxis unerreichbar.\n\nWerden mehrere Maschinen hintereinandergeschaltet, multiplizieren sich die Einzelwirkungsgrade: η<sub>ges</sub> = η₁ · η₂ · η₃. Jede zusaetzliche Energieumwandlung verschlechtert den Gesamtwirkungsgrad.',
          merksatz: 'Wirkungsgrad η = P<sub>nutz</sub>/P<sub>zu</sub>, immer ≤ 1. Hintereinanderschaltung: η multiplizieren!'
        }
      ],
      merksaetze: [
        'Leistung: P = W/t = F·v. Einheit: 1 Watt = 1 J/s. Energieumrechnung: 1 kWh = 3,6 MJ.',
        'Wirkungsgrad: η = Pnutz/Pzu (immer ≤ 1). Bei Hintereinanderschaltung: ηges = η₁·η₂·η₃... Die Verluste bestehen meist aus Wärme.',
      ],
      altfrage: {
        question: 'Ein Motor mit 500 W Leistung hebt eine 25 kg schwere Last 8 m hoch. Wie lange dauert das? (g = 10 m/s²)',
        answer: 'W = m·g·h = 25·10·8 = 2000 J. t = W/P = 2000/500 = 4 s.',
      },
      klinischerBezug:
        'Der Wirkungsgrad des menschlichen Körpers bei mechanischer Arbeit (z. B. Radfahren) beträgt nur etwa 25 % — 75 % der Stoffwechselenergie wird als Wärme abgegeben. Dies erklärt, warum man bei körperlicher Anstrengung schwitzt. Die Herzleistung beträgt etwa 1,2 W in Ruhe und kann bei Belastung auf über 5 W ansteigen.',
      selfTest: [
        {
          question: 'Eine Maschine verrichtet 6000 J Arbeit in 2 Minuten. Wie groß ist die Leistung?',
          options: ['3000 W', '50 W', '100 W', '12000 W'],
          correctIndex: 1,
          explanation: 'P = W/t = 6000 J / 120 s = 50 W.',
        },
        {
          question: 'Ein Motor hat einen Wirkungsgrad von 40 % und gibt 200 W Nutzleistung ab. Wie groß ist die zugeführte Leistung?',
          options: ['80 W', '500 W', '800 W', '200 W'],
          correctIndex: 1,
          explanation: 'η = Pnutz/Pzu → Pzu = Pnutz/η = 200/0,4 = 500 W.',
        },
        {
          question: 'Zwei Maschinen mit Wirkungsgraden von 80 % und 50 % sind hintereinandergeschaltet. Wie groß ist der Gesamtwirkungsgrad?',
          options: ['65 %', '130 %', '40 %', '30 %'],
          correctIndex: 2,
          explanation: 'ηges = η₁ · η₂ = 0,8 · 0,5 = 0,4 = 40 %.',
        },
      ],
    },
  ],
};
