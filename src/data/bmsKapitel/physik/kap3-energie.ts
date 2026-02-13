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
      content: `**W = F·s** — das ist die Grundformel der Arbeit (wenn Kraft und Weg parallel sind).

Allgemein: **W = F·s·cos(α)**, wobei α der Winkel zwischen Kraft und Weg ist. Steht die Kraft senkrecht auf dem Weg (α = 90°) → cos(90°) = 0 → W = 0. Keine Arbeit.

**Einheit:** 1 Joule = 1 N·m = 1 kg·m²/s².

**Die vier Arbeitsformen:**

**1. Hubarbeit:** WHub = m·g·h. Du hebst einen 10 kg schweren Koffer 2 m hoch → W = 10·10·2 = 200 J. Die Energie wird als potenzielle Energie gespeichert.

**2. Reibungsarbeit:** WReib = FR·s = μ·FN·s. Wird in Wärme umgewandelt. Dissipativ — die Energie geht dem System verloren.

**3. Beschleunigungsarbeit:** WBeschl = ½·m·v². Die Arbeit, um einen Körper auf Geschwindigkeit v zu bringen. Wird als kinetische Energie gespeichert.

**4. Spannarbeit:** WSpann = ½·k·s². Die Arbeit, um eine Feder zu dehnen oder zu stauchen. Wird als elastische Energie gespeichert.

**F-s-Diagramm:** Die Arbeit ist die Fläche unter der Kurve. Konstante Kraft → Rechteck (W = F·s). Feder → Dreieck (W = ½·k·s²).`,
      lernziele: [
        'Die Definition der mechanischen Arbeit (W = F·s·cos α) erklären und anwenden können',
        'Verschiedene Arbeitsformen (Hub-, Reibungs-, Beschleunigungs- und Spannarbeit) unterscheiden und berechnen können',
        'Die Bedeutung des Kraft-Weg-Diagramms für die Arbeit als Fläche unter der Kurve verstehen'
      ],
      sections: [
        {
          heading: 'Definition und Grundformel',
          text: `W = F·s·cos(α). Nur die Kraftkomponente IN Bewegungsrichtung verrichtet Arbeit.

Steht die Kraft senkrecht auf dem Weg → keine Arbeit. Beispiel: Du trägst einen Koffer horizontal durch den Raum. Die Gewichtskraft zeigt nach unten, der Weg ist horizontal → W = 0 (im physikalischen Sinne).`,
          merksatz: 'W = F · s · cos(α). Nur die Kraftkomponente IN Bewegungsrichtung verrichtet Arbeit. Senkrecht zum Weg → keine Arbeit.'
        },
        {
          heading: 'Formen der mechanischen Arbeit',
          text: `**Hubarbeit:** W = m·g·h (gegen die Schwerkraft, wird als Epot gespeichert).

**Reibungsarbeit:** W = μ·FN·s (wird in Wärme umgewandelt, dissipativ).

**Beschleunigungsarbeit:** W = ½·m·v² (wird als Ekin gespeichert).

**Spannarbeit:** W = ½·k·s² (wird als elastische Energie gespeichert).`,
          table: {
            headers: ['Arbeitsform', 'Formel', 'Energieumwandlung'],
            rows: [
              ['Hubarbeit', 'W = m · g · h', 'In potenzielle Energie'],
              ['Reibungsarbeit', 'W = μ · F<sub>N</sub> · s', 'In Wärmeenergie (dissipativ)'],
              ['Beschleunigungsarbeit', 'W = ½ · m · v²', 'In kinetische Energie'],
              ['Spannarbeit', 'W = ½ · k · s²', 'In elastische Energie']
            ]
          }
        },
        {
          heading: 'Kraft-Weg-Diagramm',
          text: `Arbeit = Fläche unter der Kurve im F-s-Diagramm.

Konstante Kraft → Rechteck (W = F·s). Feder → Dreieck (W = ½·F·s = ½·k·s²), da die Kraft linear mit s steigt.`,
          merksatz: 'Arbeit = Fläche unter der Kurve im F-s-Diagramm. Konstante Kraft → Rechteck, Feder → Dreieck.'
        }
      ],
      merksätze: [
        'Mechanische Arbeit: W = F·s·cos(α). Einheit: 1 Joule = 1 N·m. Steht die Kraft senkrecht zum Weg, wird keine Arbeit verrichtet.',
        'Hubarbeit: WHub = m·g·h. Reibungsarbeit: WReib = μ·FN·s (wird in Wärme umgewandelt). Spannarbeit: WSpann = ½·k·s².',
      ],
      altfrage: {
        question: 'Wie viel Hubarbeit muss verrichtet werden, um einen 50 kg schweren Koffer 3 m hoch zu heben? (g = 10 m/s²)',
        answer: 'WHub = m·g·h = 50 · 10 · 3 = 1500 J = 1,5 kJ.',
      },
      klinischerBezug:
        'Das Herz leistet pro Schlag ca. 1 J **Druckvolumenarbeit** (linker Ventrikel pumpt ca. 70 ml Blut gegen einen mittleren arteriellen Druck von ≈100 mmHg). Bei Herzfrequenz 70/min und Herzzeitvolumen 5 l/min: Herzleistung ≈ 1,2 W. Bei **Herzinsuffizienz** sinkt die Pumpleistung → reduziertes HZV → Symptome: Dyspnoe, Ödeme, Leistungsminderung. Messung: **Echokardiographie** (Ejektionsfraktion), **Rechtsherzkatheter** (direkte Druckmessung).',
      selfTest: [
        {
          question: 'Wie viel Arbeit verrichtet eine Kraft von 50 N auf einem Weg von 4 m, wenn Kraft und Weg parallel sind?',
          options: ['12,5 J', '200 J', '50 J', '800 J', '100 J'],
          correctIndex: 1,
          explanation: 'W = F·s = 50 N · 4 m = 200 J (α = 0°, cos(0°) = 1).',
        },
        {
          question: 'Ein Gewichtheber hält eine 100 kg Hantel auf gestreckten Armen über dem Kopf. Wie viel Arbeit verrichtet er?',
          options: ['1000 J', '980 J', '0 J', 'Abhängig von der Haltezeit', '490 J'],
          correctIndex: 2,
          explanation: 'Da der Weg s = 0 ist (die Hantel bewegt sich nicht), wird physikalisch keine Arbeit verrichtet: W = F·0 = 0 J. Der Körper verbraucht zwar metabolische Energie für die isometrische Muskelkontraktion, aber im physikalischen Sinne ist W = 0.',
        },
        {
          question: 'Die Fläche unter dem F-s-Diagramm entspricht:',
          options: ['der Kraft', 'der Leistung', 'der verrichteten Arbeit', 'der Beschleunigung', 'dem Impuls'],
          correctIndex: 2,
          explanation: 'Die Fläche unter der Kraft-Weg-Kurve im F-s-Diagramm entspricht der verrichteten Arbeit W.',
        },
      ],
    },
    {
      id: 'phys-kap3-2',
      title: 'Energie',
      content: `**Ekin = ½·m·v²** — die kinetische Energie. Proportional zu v². Doppelte Geschwindigkeit = vierfache Energie.

**Epot = m·g·h** — die potenzielle Energie. Hängt von der Höhe ab.

**Espann = ½·k·s²** — die elastische Energie einer gespannten Feder.

**Energieerhaltungssatz:** In einem abgeschlossenen System bleibt die Gesamtenergie konstant. Energie kann umgewandelt, aber nicht erzeugt oder vernichtet werden.

**Freier Fall:** Potenzielle Energie wird in kinetische umgewandelt. m·g·h = ½·m·v² → v = √(2gh). Die Masse kürzt sich raus.

**Beispiel:** Ball fällt aus 5 m Höhe. Mit welcher Geschwindigkeit trifft er auf? v = √(2·10·5) = √100 = 10 m/s.

**Pendel:** Die Energie schwingt ständig zwischen Epot (am höchsten Punkt) und Ekin (am tiefsten Punkt) hin und her. Ohne Reibung bleibt die Gesamtenergie konstant.

**Wichtig:** Verdoppelte Geschwindigkeit → vierfache kinetische Energie → vierfacher Bremsweg. Das ist entscheidend für die Verkehrssicherheit.`,
      lernziele: [
        'Die Formeln für kinetische, potenzielle und elastische Energie anwenden können',
        'Den Energieerhaltungssatz erklären und auf Aufgaben anwenden können',
        'Energieumwandlungen in physikalischen Systemen (Pendel, freier Fall) beschreiben können'
      ],
      sections: [
        {
          heading: 'Kinetische Energie',
          text: `Ekin = ½·m·v². Proportional zu v².

Doppelte Geschwindigkeit → vierfache Energie → vierfacher Bremsweg. Das ist der Grund, warum hohe Geschwindigkeiten so gefährlich sind.`,
          merksatz: 'Doppelte Geschwindigkeit = vierfache kinetische Energie = vierfacher Bremsweg!'
        },
        {
          heading: 'Potenzielle und elastische Energie',
          text: `Epot = m·g·h. Position im Gravitationsfeld bestimmt die Energie.

Espann = ½·k·s². Energie einer gespannten Feder. Wird beim Loslassen in kinetische Energie umgewandelt.`,
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
          text: `In einem abgeschlossenen System bleibt die Gesamtenergie konstant.

Freier Fall: m·g·h = ½·m·v² → v = √(2gh). Die Masse spielt keine Rolle.

Pendel: Epot + Ekin = konstant. Am höchsten Punkt: Epot maximal, Ekin = 0. Am tiefsten Punkt: Ekin maximal, Epot minimal.`,
          merksatz: 'Energieerhaltung: E<sub>pot</sub> + E<sub>kin</sub> = konstant (ohne Reibung). Freier Fall: v = √(2gh).'
        }
      ],
      merksätze: [
        'Kinetische Energie: Ekin = ½·m·v². Potenzielle Energie: Epot = m·g·h. Spannenergie: Espann = ½·k·s².',
        'Energieerhaltungssatz: Die Gesamtenergie in einem abgeschlossenen System bleibt konstant. Energie kann umgewandelt, aber nicht erzeugt oder vernichtet werden.',
      ],
      altfrage: {
        question: 'Ein 2 kg schwerer Ball fällt aus 5 m Höhe. Mit welcher Geschwindigkeit trifft er auf dem Boden auf? (g = 10 m/s²)',
        answer: 'Energieerhaltung: Epot = Ekin → m·g·h = ½·m·v² → v = √(2gh) = √(2·10·5) = √100 = 10 m/s. Die Masse kürzt sich heraus!',
      },
      klinischerBezug:
        'Der Energieerhaltungssatz gilt auch für den Stoffwechsel: Zugeführte chemische Energie (Nahrung) = Wärme + mechanische Arbeit + gespeicherte Energie. **Grundumsatz** eines Erwachsenen: ca. 80 W (≈2000 kcal/Tag). Bei einem **Herzstillstand** liefert ein **Defibrillator** 200–360 J elektrische Energie, um das Herz zu depolarisieren und den Sinusrhythmus wiederherzustellen. Indikation: **Kammerflimmern**, **pulslose ventrikuläre Tachykardie**.',
      selfTest: [
        {
          question: 'Wie ändert sich die kinetische Energie, wenn die Geschwindigkeit verdreifacht wird?',
          options: [
            'Sie verdreifacht sich',
            'Sie versechsfacht sich',
            'Sie verneunfacht sich',
            'Sie bleibt gleich',
            'Sie wird 27-mal so groß',
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
            'Am Umkehrpunkt der Schwingung',
          ],
          correctIndex: 1,
          explanation: 'Am tiefsten Punkt ist die gesamte potenzielle Energie in kinetische umgewandelt, daher ist Ekin dort maximal und Epot minimal.',
        },
        {
          question: 'Ein Stein (1 kg) liegt auf einer 10 m hohen Klippe. Wie groß ist seine potenzielle Energie? (g = 10 m/s²)',
          options: ['10 J', '100 J', '1000 J', '50 J', '9,81 J'],
          correctIndex: 1,
          explanation: 'Epot = m·g·h = 1·10·10 = 100 J.',
        },
      ],
    },
    {
      id: 'phys-kap3-3',
      title: 'Leistung & Wirkungsgrad',
      content: `**P = W/t = F·v** — die Leistung. Arbeit pro Zeit.

**Einheit:** 1 Watt = 1 J/s. 1 kW = 1000 W. 1 PS ≈ 736 W.

**Beispiel:** Motor verrichtet 6000 J Arbeit in 2 min (= 120 s). Leistung: P = 6000/120 = 50 W.

**Alternative Formel:** P = F·v. Nützlich, wenn die Geschwindigkeit gegeben ist. Beispiel: Auto fährt mit konstant 20 m/s gegen eine Reibungskraft von 500 N → P = 500·20 = 10.000 W = 10 kW.

**Energieeinheiten:**
- 1 kWh = 3,6·10⁶ J = 3,6 MJ (Stromrechnung)
- 1 kcal = 4,186 kJ (Ernährung)
- Täglicher Energiebedarf: ca. 2000–2500 kcal ≈ 8400–10.500 kJ
- Grundumsatz (Ruheleistung): ca. 80 W

**Wirkungsgrad: η = Pnutz/Pzu = Wnutz/Wzu**. Immer ≤ 1 (bzw. ≤ 100 %).

**Beispiel:** Motor hat 40 % Wirkungsgrad und gibt 200 W Nutzleistung ab. Zugeführte Leistung: Pzu = Pnutz/η = 200/0,4 = 500 W.

**Hintereinanderschaltung:** ηges = η₁·η₂·η₃. Zwei Maschinen mit η₁ = 0,8 und η₂ = 0,5 → ηges = 0,8·0,5 = 0,4 = 40 %.`,
      lernziele: [
        'Leistung als Arbeit pro Zeit (P = W/t = F·v) berechnen können',
        'Energieeinheiten (Joule, kWh, kcal) umrechnen können',
        'Den Wirkungsgrad berechnen und das Prinzip der Hintereinanderschaltung verstehen'
      ],
      sections: [
        {
          heading: 'Leistung',
          text: `P = W/t = F·v. Arbeit pro Zeit.

Einheit: 1 W = 1 J/s. Die Formel P = F·v ist nützlich bei Aufgaben mit konstanter Geschwindigkeit gegen eine Kraft (z. B. Reibung).`,
          merksatz: 'Leistung: P = W/t = F · v. Einheit: 1 Watt = 1 Joule pro Sekunde. 1 PS ≈ 736 W.'
        },
        {
          heading: 'Energieeinheiten',
          text: `1 kWh = 3,6 MJ (Stromrechnungen). 1 kcal = 4,186 kJ (Ernährung).

Grundumsatz: ca. 80 W. Täglicher Bedarf: ca. 2000–2500 kcal.`,
          table: {
            headers: ['Einheit', 'Umrechnung', 'Verwendung'],
            rows: [
              ['Joule (J)', '1 J = 1 N·m = 1 W·s', 'SI-Einheit der Energie'],
              ['Kilowattstunde (kWh)', '1 kWh = 3,6 MJ', 'Stromrechnungen'],
              ['Kilokalorie (kcal)', '1 kcal = 4,186 kJ', 'Ernährung/Medizin'],
              ['Elektronenvolt (eV)', '1 eV = 1,6 · 10<sup>-19</sup> J', 'Atom-/Kernphysik']
            ]
          }
        },
        {
          heading: 'Wirkungsgrad',
          text: `η = Pnutz/Pzu. Immer ≤ 1. 100 % ist unerreichbar (Verluste durch Reibung, Wärme).

Hintereinanderschaltung: ηges = η₁·η₂·η₃. Jede Umwandlung verschlechtert den Gesamtwirkungsgrad.`,
          merksatz: 'Wirkungsgrad η = P<sub>nutz</sub>/P<sub>zu</sub>, immer ≤ 1. Hintereinanderschaltung: η multiplizieren!'
        }
      ],
      merksätze: [
        'Leistung: P = W/t = F·v. Einheit: 1 Watt = 1 J/s. Energieumrechnung: 1 kWh = 3,6 MJ.',
        'Wirkungsgrad: η = Pnutz/Pzu (immer ≤ 1). Bei Hintereinanderschaltung: ηges = η₁·η₂·η₃... Die Verluste bestehen meist aus Wärme.',
      ],
      altfrage: {
        question: 'Ein Motor mit 500 W Leistung hebt eine 25 kg schwere Last 8 m hoch. Wie lange dauert das? (g = 10 m/s²)',
        answer: 'W = m·g·h = 25·10·8 = 2000 J. t = W/P = 2000/500 = 4 s.',
      },
      klinischerBezug:
        'Der **Wirkungsgrad des menschlichen Körpers** bei mechanischer Arbeit (z. B. Radfahren) beträgt nur ca. 25 % — 75 % der Stoffwechselenergie wird als Wärme abgegeben. Deshalb schwitzt man bei Anstrengung. Die **Herzleistung** beträgt ca. 1,2 W in Ruhe (Herzzeitvolumen 5 l/min, mittlerer arterieller Druck 100 mmHg). Bei Belastung kann sie auf über 5 W ansteigen. Messung: **Spiroergometrie** (VO₂max, Sauerstoffaufnahme).',
      selfTest: [
        {
          question: 'Eine Maschine verrichtet 6000 J Arbeit in 2 Minuten. Wie groß ist die Leistung?',
          options: ['3000 W', '50 W', '100 W', '12000 W', '500 W'],
          correctIndex: 1,
          explanation: 'P = W/t = 6000 J / 120 s = 50 W.',
        },
        {
          question: 'Ein Motor hat einen Wirkungsgrad von 40 % und gibt 200 W Nutzleistung ab. Wie groß ist die zugeführte Leistung?',
          options: ['80 W', '500 W', '800 W', '200 W', '1000 W'],
          correctIndex: 1,
          explanation: 'η = Pnutz/Pzu → Pzu = Pnutz/η = 200/0,4 = 500 W.',
        },
        {
          question: 'Zwei Maschinen mit Wirkungsgraden von 80 % und 50 % sind hintereinandergeschaltet. Wie groß ist der Gesamtwirkungsgrad?',
          options: ['65 %', '130 %', '40 %', '30 %', '90 %'],
          correctIndex: 2,
          explanation: 'ηges = η₁ · η₂ = 0,8 · 0,5 = 0,4 = 40 %.',
        },
      ],
    },
  ],
};
