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
      content: `**p = m·v** — der Impuls. Masse × Geschwindigkeit. Einheit: kg·m/s (= N·s).

Der **Impuls** (Bewegungsgröße) beschreibt den Bewegungszustand eines Körpers umfassender als die Geschwindigkeit allein. Ein schwerer LKW hat bei gleicher Geschwindigkeit viel mehr Impuls als ein Fahrrad.

**Kraftstoß:** F·Δt = Δp. Die Kraft multipliziert mit der Zeit ergibt die Impulsänderung. Das ist der Schlüssel zum Verständnis von Stößen.

**Impulserhaltungssatz:** In einem abgeschlossenen System (keine äußeren Kräfte) bleibt der Gesamtimpuls konstant. m₁·v₁ + m₂·v₂ = m₁·v₁' + m₂·v₂' (vor dem Stoß = nach dem Stoß).

**Elastischer Stoß:** Impuls UND kinetische Energie bleiben erhalten. Beispiel: Billardkugeln.

**Unelastischer Stoß:** Nur Impuls bleibt erhalten. Kinetische Energie geht teilweise in Verformung/Wärme über.

**Vollkommen unelastischer Stoß:** Die Körper bleiben aneinander haften. m₁·v₁ + m₂·v₂ = (m₁ + m₂)·v'. Beispiel: Auto (1000 kg, 20 m/s) trifft stehendes Auto (1000 kg, 0 m/s) → v' = (1000·20 + 1000·0)/2000 = 10 m/s.

**Wichtig:** F = Δp/Δt (allgemeine Form des 2. Newton). Je größer Δt, desto kleiner F bei gleichem Impulsübertrag. Das ist das Prinzip von Airbags.`,
      merksätze: [
        'Impuls: p = m·v. Impulserhaltungssatz: In einem abgeschlossenen System gilt p_vorher = p_nachher. Kraftstoß: F·Δt = Δp.',
        'Elastischer Stoß: Impuls und kinetische Energie erhalten. Unelastischer Stoß: Nur Impuls erhalten, kinetische Energie geht teilweise in Verformung/Wärme über.',
      ],
      altfrage: {
        question: 'Ein 1000 kg schweres Auto fährt mit 20 m/s gegen ein stehendes 1000 kg schweres Auto (vollkommen unelastischer Stoß). Mit welcher Geschwindigkeit bewegen sich beide nach dem Stoß?',
        answer: 'v\' = (m₁·v₁ + m₂·v₂)/(m₁ + m₂) = (1000·20 + 1000·0)/2000 = 10 m/s. Die Hälfte der kinetischen Energie geht verloren.',
      },
      klinischerBezug:
        '**Airbags und Knautschzonen** nutzen F = Δp/Δt: Durch Verlängerung der Stoßzeit Δt wird die Kraft bei gleichem Impulsübertrag drastisch reduziert. Ohne Airbag: Kopf trifft Lenkrad in ≈1 ms → F ≈ 50 kN. Mit Airbag: Verzögerung über ≈100 ms → F ≈ 500 N (Faktor 100 weniger). Typische Verletzungen ohne Airbag: **Schädel-Hirn-Trauma**, **Gesichtsfrakturen** (Mittelgesicht, Mandibula), **Thoraxtrauma**. Der Airbag reduziert die Letalität um ca. 30 %.',
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
      content: `**M = F·r** — das Drehmoment. Kraft × Hebelarm. Einheit: N·m.

Der **Hebelarm** r ist der senkrechte Abstand der Wirklinie der Kraft von der Drehachse. Je größer r, desto größer die Drehwirkung. Deshalb ist ein langer Schraubenschlüssel effektiver als ein kurzer.

**Hebelgesetz (Gleichgewicht):** F₁·r₁ = F₂·r₂. Die Summe der linksdrehenden Drehmomente = Summe der rechtsdrehenden Drehmomente.

**Zweiseitiger Hebel:** Drehpunkt zwischen den Kräften. Beispiel: Wippe, Zange, Schere.

**Einseitiger Hebel:** Drehpunkt am Ende. Beide Kräfte auf derselben Seite. Beispiel: Schubkarre, Flaschenöffner, Unterarm.

**Goldene Regel der Mechanik:** Was du an Kraft sparst, musst du an Weg zusetzen. Die Arbeit bleibt gleich.

**Beispiel:** Auf einer Wippe sitzt ein Kind (30 kg) 2 m vom Drehpunkt. Wo muss ein Erwachsener (60 kg) sitzen? F₁·r₁ = F₂·r₂ → 30·10·2 = 60·10·r₂ → r₂ = 1 m.

**Biomechanik:** Der Unterarm ist ein einseitiger Hebel. Ellbogengelenk = Drehpunkt. Bizeps greift ca. 5 cm vom Drehpunkt an (Kraftarm), Last wirkt ca. 35 cm entfernt (Lastarm). Verhältnis: 35/5 = 7. Der Bizeps muss die 7-fache Kraft der Last aufbringen.`,
      merksätze: [
        'Drehmoment: M = F·r (Kraft × Hebelarm). Einheit: N·m. Je größer der Hebelarm, desto größer die Drehwirkung bei gleicher Kraft.',
        'Hebelgesetz (Gleichgewicht): F₁·r₁ = F₂·r₂. Goldene Regel der Mechanik: Was an Kraft gespart wird, muss an Weg zugesetzt werden.',
      ],
      altfrage: {
        question: 'Auf einer Wippe sitzt ein Kind (30 kg) 2 m vom Drehpunkt entfernt. In welcher Entfernung muss ein 60 kg schwerer Erwachsener sitzen, damit Gleichgewicht herrscht?',
        answer: 'F₁·r₁ = F₂·r₂ → 30·10·2 = 60·10·r₂ → r₂ = 600/600 = 1 m.',
      },
      klinischerBezug:
        'Der **Unterarm als Hebel:** Ellbogengelenk = Drehpunkt (Hypomochlion). Bizeps greift ca. 5 cm vom Gelenk an, Last wirkt ca. 35 cm entfernt. Um 10 kg (≈100 N) zu halten, muss der Bizeps F = 100·35/5 = 700 N aufbringen. Beim **Heben mit gebeugtem Rücken** (z. B. Kiste vom Boden) kann die Belastung der Bandscheibe L5/S1 das 10-fache des gehobenen Gewichts betragen → häufiger Grund für **Bandscheibenvorfälle**. Richtige Technik: Rücken gerade, aus den Beinen heben (verkürzt Lastarm).',
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
