import type { Kapitel } from '../types';

export const physKap4: Kapitel = {
  id: 'phys-kap4',
  title: 'Impuls & Drehbewegung',
  subject: 'physik',
  icon: '🎱',
  estimatedTime: '15 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap4-1',
      title: 'Impuls',
      content: `Der Impuls p ist eine vektorielle Größe, die als Produkt aus Masse und Geschwindigkeit definiert ist: p = m · v. Seine SI-Einheit ist kg·m/s (= N·s). Der Impuls beschreibt den Bewegungszustand eines Körpers umfassender als die Geschwindigkeit allein, da er auch die Masse berücksichtigt. Ein schwerer Lastwagen hat bei gleicher Geschwindigkeit einen viel größeren Impuls als ein Fahrrad. Das zweite Newtonsche Gesetz lässt sich in seiner allgemeineren Form als F = Δp/Δt ausdrücken: Die auf einen Körper wirkende Kraft entspricht der zeitlichen Änderung seines Impulses. Ist die Masse konstant, reduziert sich dies zu F = m · a. Der Kraftstoß (Impulsänderung) F · Δt = Δp ist besonders nützlich bei der Analyse von Stoßvorgängen, bei denen große Kräfte über kurze Zeitintervalle wirken.

Der Impulserhaltungssatz ist eines der fundamentalsten Prinzipien der Physik: In einem abgeschlossenen System (ohne äußere Kräfte) bleibt der Gesamtimpuls konstant. Dies gilt für alle Stoßvorgänge: m₁·v₁ + m₂·v₂ = m₁·v₁' + m₂·v₂', wobei die gestrichenen Größen die Geschwindigkeiten nach dem Stoß bezeichnen. Man unterscheidet zwei Idealfälle: Beim elastischen (vollkommen elastischen) Stoß bleiben sowohl Impuls als auch kinetische Energie erhalten — die Körper prallen ohne Energieverlust voneinander ab. Ein gutes Beispiel sind Billardkugeln. Beim unelastischen (plastischen) Stoß bleiben die Körper nach dem Stoß aneinander haften und bewegen sich mit einer gemeinsamen Geschwindigkeit weiter. Hier bleibt zwar der Impuls erhalten, aber ein Teil der kinetischen Energie wird in Verformungsarbeit und Wärme umgewandelt.

Beim vollkommen unelastischen Stoß verschmelzen die Körper: m₁·v₁ + m₂·v₂ = (m₁ + m₂)·v', woraus sich die gemeinsame Geschwindigkeit v' = (m₁·v₁ + m₂·v₂)/(m₁ + m₂) ergibt. Der Energieverlust beim unelastischen Stoß lässt sich als Differenz der kinetischen Energien vor und nach dem Stoß berechnen. In der Medizin ist der Impulserhaltungssatz relevant für die Biomechanik von Verletzungen: Bei einem Autounfall bestimmt der Impuls des aufprallenden Fahrzeugs die auf den Insassen wirkenden Kräfte. Airbags und Knautschzonen verlängern die Stoßzeit Δt, wodurch bei gleichem Impulsübertrag die maximale Kraft F = Δp/Δt reduziert wird — ein lebensrettendes Prinzip der Fahrzeugsicherheit. Auch der Rückstoß einer Waffe oder einer Rakete lässt sich mit dem Impulserhaltungssatz erklären.`,
      merksaetze: [
        'Impuls: p = m·v. Impulserhaltungssatz: In einem abgeschlossenen System gilt p_vorher = p_nachher. Kraftstoß: F·Δt = Δp.',
        'Elastischer Stoß: Impuls und kinetische Energie erhalten. Unelastischer Stoß: Nur Impuls erhalten, kinetische Energie geht teilweise in Verformung/Wärme über.',
      ],
      altfrage: {
        question: 'Ein 1000 kg schweres Auto fährt mit 20 m/s gegen ein stehendes 1000 kg schweres Auto (vollkommen unelastischer Stoß). Mit welcher Geschwindigkeit bewegen sich beide nach dem Stoß?',
        answer: 'v\' = (m₁·v₁ + m₂·v₂)/(m₁ + m₂) = (1000·20 + 1000·0)/2000 = 10 m/s. Die Hälfte der kinetischen Energie geht verloren.',
      },
      klinischerBezug:
        'Airbags und Knautschzonen nutzen das Prinzip F = Δp/Δt: Durch Verlängerung der Stoßzeit Δt wird die auf den Körper wirkende Kraft bei gleichem Impulsübertrag deutlich reduziert. Ohne Airbag: Kopf trifft Lenkrad in ≈ 1 ms → extrem hohe Kraft. Mit Airbag: Verzögerung über ≈ 100 ms → Kraft um Faktor 100 reduziert.',
      selfTest: [
        {
          question: 'Wie groß ist der Impuls eines 70 kg schweren Läufers bei 5 m/s?',
          options: ['14 kg·m/s', '350 kg·m/s', '350 N', '70 J', '1225 kg·m/s'],
          correctIndex: 1,
          explanation: 'p = m·v = 70 kg · 5 m/s = 350 kg·m/s.',
        },
        {
          question: 'Welche Aussage über den vollkommen unelastischen Stoß ist korrekt?',
          options: [
            'Impuls und kinetische Energie bleiben erhalten',
            'Nur die kinetische Energie bleibt erhalten',
            'Nur der Impuls bleibt erhalten',
            'Weder Impuls noch Energie bleiben erhalten',
            'Die Gesamtmasse des Systems nimmt ab',
          ],
          correctIndex: 2,
          explanation: 'Beim vollkommen unelastischen Stoß bleiben die Körper aneinander haften. Der Impuls bleibt erhalten, aber ein Teil der kinetischen Energie wird in Verformungsenergie und Wärme umgewandelt.',
        },
        {
          question: 'Warum reduziert ein Airbag die Verletzungsgefahr bei einem Unfall?',
          options: [
            'Er reduziert den Impuls des Fahrers',
            'Er verlängert die Stoßzeit und reduziert so die Kraft',
            'Er erhöht die Masse des Fahrers',
            'Er absorbiert die gesamte kinetische Energie',
            'Er verringert die Geschwindigkeit des Fahrzeugs vor dem Aufprall',
          ],
          correctIndex: 1,
          explanation: 'F = Δp/Δt: Bei gleichem Impulsübertrag Δp führt eine größere Stoßzeit Δt zu einer kleineren Kraft F. Der Airbag verlängert Δt erheblich.',
        },
      ],
    },
    {
      id: 'phys-kap4-2',
      title: 'Drehmoment & Hebel',
      content: `Das Drehmoment M beschreibt die Drehwirkung einer Kraft und ist definiert als Produkt aus Kraft und Hebelarm: M = F · r, wobei r der senkrechte Abstand der Wirklinie der Kraft von der Drehachse ist (Hebelarm). Die SI-Einheit des Drehmoments ist Newtonmeter (N·m). Man beachte, dass trotz gleicher Einheit Drehmoment und Arbeit verschiedene physikalische Größen sind. Das Drehmoment ist eine vektorielle Größe — seine Richtung steht senkrecht auf der Ebene, die von Kraft und Hebelarm aufgespannt wird. Ein größerer Hebelarm ermöglicht bei gleicher Kraft ein größeres Drehmoment, was erklärt, warum ein langer Schraubenschlüssel das Lösen einer Schraube erleichtert.

Das Hebelgesetz (Momentengleichgewicht) besagt, dass sich ein Hebel im Gleichgewicht befindet, wenn die Summe aller linksdrehenden Drehmomente gleich der Summe aller rechtsdrehenden Drehmomente ist: F₁ · r₁ = F₂ · r₂. Man unterscheidet den einseitigen Hebel (Drehpunkt am Ende, beide Kräfte auf derselben Seite — z. B. Schubkarre, Flaschenöffner) und den zweiseitigen Hebel (Drehpunkt zwischen den Kräften — z. B. Wippe, Zange, Schere). Der Hebel ist eine der sechs einfachen Maschinen und ermöglicht es, mit kleiner Kraft große Lasten zu bewegen, allerdings muss dafür der längere Weg zurückgelegt werden (goldene Regel der Mechanik: Was man an Kraft spart, muss man an Weg zusetzen — die Arbeit bleibt gleich).

In der Medizin und Biomechanik sind Hebelprinzipien allgegenwärtig. Der menschliche Bewegungsapparat funktioniert als System von Hebeln: Die Knochen sind die Hebelarme, die Gelenke die Drehpunkte (Hypomochlien) und die Muskeln erzeugen die Kräfte. Beispielsweise wirkt der Unterarm als einseitiger Hebel mit dem Ellbogengelenk als Drehpunkt: Der Bizeps setzt nahe am Drehpunkt an (kurzer Kraftarm, ca. 5 cm), während die Last am Handgelenk wirkt (langer Lastarm, ca. 35 cm). Dies bedeutet, dass der Bizeps etwa die siebenfache Kraft der gehaltenen Last aufbringen muss — ein mechanischer Nachteil, der aber durch einen Geschwindigkeitsvorteil kompensiert wird (kleine Muskelverkürzung → große Bewegung der Hand). Auch die Wirbelsäule kann als Hebel modelliert werden, was die hohen Belastungen der Bandscheiben beim Heben schwerer Lasten mit vorgebeugtem Oberkörper erklärt.`,
      merksaetze: [
        'Drehmoment: M = F·r (Kraft × Hebelarm). Einheit: N·m. Je größer der Hebelarm, desto größer die Drehwirkung bei gleicher Kraft.',
        'Hebelgesetz (Gleichgewicht): F₁·r₁ = F₂·r₂. Goldene Regel der Mechanik: Was an Kraft gespart wird, muss an Weg zugesetzt werden.',
      ],
      altfrage: {
        question: 'Auf einer Wippe sitzt ein Kind (30 kg) 2 m vom Drehpunkt entfernt. In welcher Entfernung muss ein 60 kg schwerer Erwachsener sitzen, damit Gleichgewicht herrscht?',
        answer: 'F₁·r₁ = F₂·r₂ → 30·10·2 = 60·10·r₂ → r₂ = 600/600 = 1 m.',
      },
      klinischerBezug:
        'Der Unterarm ist ein einseitiger Hebel: Der Bizeps greift ca. 5 cm vom Ellbogengelenk an, die Last wirkt ca. 35 cm entfernt. Um 10 kg zu halten (≈ 100 N), muss der Bizeps F = 100·35/5 = 700 N aufbringen. Beim Heben mit gebeugtem Rücken kann die Belastung der Bandscheibe L5/S1 das 10-fache des gehobenen Gewichts betragen — ein häufiger Grund für Bandscheibenvorfälle.',
      selfTest: [
        {
          question: 'Welches Drehmoment erzeugt eine Kraft von 20 N bei einem Hebelarm von 0,5 m?',
          options: ['40 N·m', '10 N·m', '20 N·m', '100 N·m', '5 N·m'],
          correctIndex: 1,
          explanation: 'M = F·r = 20 N · 0,5 m = 10 N·m.',
        },
        {
          question: 'Auf einem zweiseitigen Hebel wirkt links eine Kraft von 100 N bei 3 m Hebelarm. Welche Kraft braucht man rechts bei 6 m Hebelarm für Gleichgewicht?',
          options: ['200 N', '50 N', '300 N', '600 N', '150 N'],
          correctIndex: 1,
          explanation: 'F₁·r₁ = F₂·r₂ → 100·3 = F₂·6 → F₂ = 300/6 = 50 N.',
        },
        {
          question: 'Warum muss der Bizeps viel mehr Kraft aufbringen als das Gewicht der gehaltenen Last?',
          options: [
            'Der Bizeps ist ein schwacher Muskel',
            'Der Kraftarm (Ansatz des Bizeps) ist viel kürzer als der Lastarm',
            'Das Ellbogengelenk absorbiert Kraft',
            'Die Schwerkraft wirkt doppelt',
            'Die Reibung im Gelenk erhöht den Kraftbedarf',
          ],
          correctIndex: 1,
          explanation: 'Der Bizeps setzt nahe am Drehpunkt (Ellbogengelenk) an — sein Hebelarm ist viel kürzer als der Lastarm. Nach dem Hebelgesetz muss er daher eine entsprechend größere Kraft aufbringen.',
        },
      ],
    },
  ],
};
