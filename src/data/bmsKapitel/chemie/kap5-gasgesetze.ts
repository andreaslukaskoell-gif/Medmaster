import type { Kapitel } from '../types';

export const chemKap5: Kapitel = {
  id: 'chem-kap5',
  title: 'Gasgesetze',
  subject: 'chemie',
  icon: '💨',
  estimatedTime: '15 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap5-uk1',
      title: 'Ideale Gasgleichung',
      content: `Die **ideale Gasgleichung** lautet pV = nRT. Sie verknüpft Druck p, Volumen V, Stoffmenge n und Temperatur T eines Gases. Die **Gaskonstante** R beträgt 8,314 J/(mol·K).

Ein **ideales Gas** ist ein Modell. Die Teilchen haben kein Eigenvolumen. Zwischen ihnen wirken keine Kräfte. Reale Gase verhalten sich bei niedrigen Drücken und hohen Temperaturen annähernd ideal.

Das **Avogadro-Gesetz** besagt: Gleiche Volumina verschiedener Gase enthalten bei gleichem p und T die gleiche Teilchenzahl. Bei Standardbedingungen (STP: 0 °C, 1 atm) nimmt 1 Mol jedes idealen Gases 22,4 L ein. Aus pV = nRT folgt bei konstantem p und T: V ∝ n. Das Volumen ist proportional zur Stoffmenge.

Für Berechnungen gilt: n = m/M (Masse durch molare Masse). Daraus folgt pV = (m/M)RT. Die molare Masse lässt sich bestimmen: M = mRT/(pV). Die **Gasdichte** berechnet sich: ρ = m/V = pM/(RT). Die Dichte ist proportional zu p und M, umgekehrt proportional zu T.

Bei sehr hohen Drücken und niedrigen Temperaturen versagt die ideale Gasgleichung. Dann verwendet man die **Van-der-Waals-Gleichung**: (p + a/V²)(V - b) = nRT. Der Parameter a korrigiert für Anziehungskräfte, b für das Eigenvolumen der Teilchen.`,
      merksätze: [
        'Ideale Gasgleichung: pV = nRT (R = 8,314 J/(mol·K)). Ideales Gas: keine Wechselwirkungen, kein Eigenvolumen. Avogadro-Gesetz: Bei gleichem p und T enthalten gleiche Volumina gleich viele Teilchen.',
        'Aus pV = nRT folgt: M = mRT/(pV), ρ = pM/(RT). Bei STP (0 °C, 1 atm) beträgt das molare Volumen 22,4 L/mol.'
      ],
      altfrage: {
        question: 'Was besagt das Avogadro-Gesetz?',
        answer: 'Das Avogadro-Gesetz besagt, dass gleiche Volumina verschiedener idealer Gase bei gleichem Druck und gleicher Temperatur die gleiche Anzahl von Teilchen (Molekülen) enthalten. Bei STP nimmt 1 Mol jedes idealen Gases 22,414 L ein.'
      },
      klinischerBezug: 'Bei der **Spirometrie** werden Lungenvolumina gemessen und auf BTPS-Bedingungen umgerechnet (Body Temperature, Pressure, Saturated: 37 °C, Umgebungsdruck, wasserdampfgesättigt). Anästhesisten nutzen pV = nRT zur Berechnung von Narkosegaskonzentrationen. Bei der **Beatmung** muss das Gasvolumen an Körpertemperatur und Luftdruck angepasst werden. Die ideale Gasgleichung ist die Grundlage aller volumetrischen Berechnungen in der Lungenfunktionsdiagnostik.',
      selfTest: [
        {
          question: 'Welches Volumen nimmt 0,5 Mol eines idealen Gases bei STP (0 °C, 1 atm) ein?',
          options: [
            '44,8 L',
            '11,2 L',
            '22,4 L',
            '5,6 L',
            '16,8 L'
          ],
          correctIndex: 1,
          explanation: 'V = n × Vm = 0,5 mol × 22,4 L/mol = 11,2 L. Bei STP beträgt das molare Volumen eines idealen Gases 22,4 L/mol.'
        },
        {
          question: 'Welche Annahme gilt NICHT für ein ideales Gas?',
          options: [
            'Die Teilchen haben kein Eigenvolumen',
            'Zwischen den Teilchen gibt es keine Anziehungskräfte',
            'Die Teilchen bewegen sich geradlinig und gleichförmig zwischen den Stößen',
            'Die Teilchen üben starke Anziehungskräfte aufeinander aus',
            'Die Stöße zwischen den Teilchen sind vollkommen elastisch'
          ],
          correctIndex: 3,
          explanation: 'Im Modell des idealen Gases werden keine Wechselwirkungen (Anziehungskräfte) zwischen den Teilchen angenommen. Die Teilchen werden als Massenpunkte ohne Eigenvolumen betrachtet, die nur elastisch stoßen.'
        },
        {
          question: 'Wie ändert sich das Volumen eines idealen Gases, wenn man die Stoffmenge bei konstantem Druck und Temperatur verdoppelt?',
          options: [
            'Es halbiert sich',
            'Es bleibt gleich',
            'Es verdoppelt sich',
            'Es vervierfacht sich',
            'Es nimmt um den Faktor 1,5 zu'
          ],
          correctIndex: 2,
          explanation: 'Aus pV = nRT folgt bei konstantem p und T: V ∝ n (Avogadro-Gesetz). Verdoppelt man die Stoffmenge, verdoppelt sich auch das Volumen.'
        }
      ]
    },
    {
      id: 'chem-kap5-uk2',
      title: 'Spezielle Gasgesetze',
      content: `Die speziellen Gasgesetze sind Spezialfälle von pV = nRT. Sie gelten, wenn bestimmte Zustandsgrößen konstant gehalten werden.

**Boyle-Mariotte** (T konstant): Bei konstanter Temperatur sind Druck und Volumen umgekehrt proportional. p₁V₁ = p₂V₂. Halbiert man das Volumen, verdoppelt sich der Druck. Beispiel: Fahrradpumpe. Im p-V-Diagramm ergibt sich eine Hyperbel.

**Gay-Lussac** (p konstant): Bei konstantem Druck sind Volumen und Temperatur direkt proportional. V₁/T₁ = V₂/T₂. Achtung: T muss in Kelvin angegeben werden. Verdoppelt man T, verdoppelt sich V. Extrapoliert man V auf null, erhält man den absoluten Nullpunkt bei -273,15 °C.

**Amontons** (V konstant): Bei konstantem Volumen sind Druck und Temperatur direkt proportional. p₁/T₁ = p₂/T₂. Verdoppelt man T, verdoppelt sich p. Beispiel: Reifendruck sinkt bei Kälte.

**Dalton-Gesetz**: Der Gesamtdruck eines Gasgemisches ist die Summe der Partialdrücke. p_gesamt = p₁ + p₂ + p₃ + ... Der **Partialdruck** pᵢ berechnet sich: pᵢ = xᵢ × p_gesamt. xᵢ ist der **Molenbruch** (Stoffmengenanteil).

Beispiel Atmosphäre (Meereshöhe, p = 101,3 kPa): pO₂ = 0,21 × 101,3 kPa ≈ 21,3 kPa. pN₂ = 0,78 × 101,3 kPa ≈ 79 kPa.`,
      merksätze: [
        'Boyle-Mariotte (T = const.): p₁V₁ = p₂V₂ (p und V umgekehrt proportional). Gay-Lussac (p = const.): V₁/T₁ = V₂/T₂ (V und T direkt proportional). Amontons (V = const.): p₁/T₁ = p₂/T₂.',
        'Dalton-Gesetz: p_gesamt = Σpᵢ. Partialdruck: pᵢ = xᵢ × p_gesamt. Der Molenbruch xᵢ gibt den Stoffmengenanteil des Gases im Gemisch an.'
      ],
      altfrage: {
        question: 'Was besagt das Gesetz von Boyle-Mariotte?',
        answer: 'Bei konstanter Temperatur und Stoffmenge sind Druck und Volumen eines idealen Gases umgekehrt proportional: p₁V₁ = p₂V₂. Wird das Volumen halbiert, verdoppelt sich der Druck und umgekehrt.'
      },
      klinischerBezug: 'Der **alveoläre Sauerstoffpartialdruck** (pₐO₂) beträgt etwa 13,3 kPa (100 mmHg) und treibt die O₂-Diffusion ins Blut an. In großer Höhe sinkt der Luftdruck, damit sinkt pO₂ trotz unveränderter O₂-Konzentration (21 %). Ab 2500 m droht **Höhenkrankheit** (Kopfschmerz, Übelkeit). Bei der **Sauerstofftherapie** wird FiO₂ erhöht, um pO₂ zu steigern. In der **Tauchmedizin** gilt Boyle-Mariotte: Beim Auftauchen dehnt sich die Luft in den Lungen aus. Zu schnelles Auftauchen ohne Ausatmen führt zu **Barotrauma** (Lungenriss). Bei 10 m Tiefe (2 bar) hat die Luft das halbe Volumen wie an der Oberfläche.',
      selfTest: [
        {
          question: 'Ein ideales Gas hat bei 1 bar ein Volumen von 10 L. Wie groß ist das Volumen bei 2 bar (gleiche Temperatur)?',
          options: [
            '20 L',
            '5 L',
            '10 L',
            '2,5 L',
            '7,5 L'
          ],
          correctIndex: 1,
          explanation: 'Nach Boyle-Mariotte: p₁V₁ = p₂V₂ → 1 bar × 10 L = 2 bar × V₂ → V₂ = 5 L. Bei Verdopplung des Drucks halbiert sich das Volumen.'
        },
        {
          question: 'Wie hoch ist der Partialdruck von Sauerstoff (21 %) in der Atmosphäre auf Meereshöhe (p = 101,3 kPa)?',
          options: [
            '78,0 kPa',
            '21,3 kPa',
            '50,6 kPa',
            '10,1 kPa',
            '42,5 kPa'
          ],
          correctIndex: 1,
          explanation: 'pO₂ = xO₂ × p_gesamt = 0,21 × 101,3 kPa ≈ 21,3 kPa. Der Partialdruck berechnet sich aus dem Molenbruch und dem Gesamtdruck.'
        },
        {
          question: 'Ein Gas hat bei 300 K ein Volumen von 6 L (bei konstantem Druck). Welches Volumen hat es bei 600 K?',
          options: [
            '3 L',
            '6 L',
            '12 L',
            '24 L',
            '9 L'
          ],
          correctIndex: 2,
          explanation: 'Nach Gay-Lussac: V₁/T₁ = V₂/T₂ → 6 L / 300 K = V₂ / 600 K → V₂ = 12 L. Verdopplung der Temperatur (in Kelvin) bei konstantem Druck verdoppelt das Volumen.'
        }
      ]
    }
  ]
};
