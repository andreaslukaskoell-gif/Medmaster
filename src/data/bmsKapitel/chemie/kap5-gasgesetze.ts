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
      content: `Die ideale Gasgleichung pV = nRT ist eine der fundamentalsten Gleichungen der Chemie und Physik. Sie verknüpft die vier Zustandsgrößen eines idealen Gases: den Druck p (in Pascal, Pa), das Volumen V (in Kubikmeter, m³ oder Liter, L), die Stoffmenge n (in Mol) und die absolute Temperatur T (in Kelvin, K). Die universelle Gaskonstante R hat den Wert 8,314 J/(mol·K) oder äquivalent 0,08314 L·bar/(mol·K). Ein ideales Gas ist ein Modellgas, bei dem die Gasteilchen als massepunktartig (ohne Eigenvolumen) angenommen werden und keine Wechselwirkungen (Anziehung oder Abstoßung) zwischen ihnen auftreten. Reale Gase verhalten sich unter Normalbedingungen bei nicht zu hohen Drücken und nicht zu niedrigen Temperaturen annähernd ideal.

Die ideale Gasgleichung lässt sich aus dem Avogadro-Gesetz und den empirischen Gasgesetzen herleiten. Das Avogadro-Gesetz (1811) besagt, dass gleiche Volumina verschiedener idealer Gase bei gleichem Druck und gleicher Temperatur die gleiche Anzahl von Teilchen enthalten. Bei Standardbedingungen (STP: T = 273,15 K, p = 101,325 kPa) nimmt 1 Mol jedes idealen Gases ein Volumen von 22,414 L ein. Aus der idealen Gasgleichung folgt: V = nRT/p, wobei bei konstantem T und p das Volumen direkt proportional zur Stoffmenge n ist (V ∝ n). Setzt man die Standardbedingungen ein, erhält man: V = (1 mol × 8,314 J/(mol·K) × 273,15 K) / 101325 Pa = 0,022414 m³ = 22,414 L, was das molare Volumen bestätigt.

Für praktische Berechnungen kann die ideale Gasgleichung in verschiedenen Formen verwendet werden. Kennt man die Masse m eines Gases und seine molare Masse M, kann man die Stoffmenge n = m/M einsetzen und erhält pV = (m/M)RT, woraus sich die molare Masse aus experimentellen Daten bestimmen lässt: M = mRT/(pV). Die Gasdichte ρ ergibt sich als ρ = m/V = pM/(RT), wobei die Dichte eines idealen Gases also proportional zum Druck und zur molaren Masse und umgekehrt proportional zur Temperatur ist. Für Gemische idealer Gase gilt das Dalton-Gesetz (siehe nächstes Unterkapitel), und der Gesamtdruck ist die Summe der Partialdrücke. Die ideale Gasgleichung versagt bei sehr hohen Drücken und sehr niedrigen Temperaturen, wo das Eigenvolumen der Teilchen und die intermolekularen Kräfte nicht mehr vernachlässigbar sind. In solchen Fällen verwendet man die Van-der-Waals-Gleichung als Korrektur: (p + a/V²)(V - b) = nRT, wobei a die Anziehungskräfte und b das Eigenvolumen der Teilchen berücksichtigt.`,
      merksaetze: [
        'Ideale Gasgleichung: pV = nRT (R = 8,314 J/(mol·K)). Ideales Gas: keine Wechselwirkungen, kein Eigenvolumen. Avogadro-Gesetz: Bei gleichem p und T enthalten gleiche Volumina gleich viele Teilchen.',
        'Aus pV = nRT folgt: M = mRT/(pV), ρ = pM/(RT). Bei STP (0 °C, 1 atm) beträgt das molare Volumen 22,4 L/mol.'
      ],
      altfrage: {
        question: 'Was besagt das Avogadro-Gesetz?',
        answer: 'Das Avogadro-Gesetz besagt, dass gleiche Volumina verschiedener idealer Gase bei gleichem Druck und gleicher Temperatur die gleiche Anzahl von Teilchen (Molekülen) enthalten. Bei STP nimmt 1 Mol jedes idealen Gases 22,414 L ein.'
      },
      klinischerBezug: 'Die ideale Gasgleichung ist grundlegend für die Lungenfunktionsdiagnostik und Beatmungsmedizin. Bei der Spirometrie werden Gasvolumina gemessen, die auf BTPS-Bedingungen (Body Temperature, Pressure, Saturated: 37 °C, Umgebungsdruck, wasserdampfgesättigt) umgerechnet werden. Anästhesisten nutzen die Gasgesetze zur Berechnung von Narkosegaskonzentrationen und zur Einstellung von Beatmungsgeräten.',
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
      content: `Die speziellen Gasgesetze beschreiben das Verhalten idealer Gase, wenn jeweils eine oder mehrere Zustandsgrößen konstant gehalten werden. Sie sind historisch vor der allgemeinen idealen Gasgleichung entdeckt worden und lassen sich alle als Spezialfälle von pV = nRT ableiten. Das Gesetz von Boyle-Mariotte (1662/1676) beschreibt den Zusammenhang zwischen Druck und Volumen bei konstanter Temperatur und Stoffmenge (isothermer Prozess): p × V = const., oder p₁V₁ = p₂V₂. Druck und Volumen sind also umgekehrt proportional: Wird das Volumen halbiert, verdoppelt sich der Druck. In einem p-V-Diagramm stellt eine Isotherme eine Hyperbel dar. Dieses Gesetz erklärt beispielsweise, warum die Luft in einer Fahrradpumpe komprimiert wird, wenn man den Kolben hineindrückt.

Das Gesetz von Gay-Lussac (auch Charles'sches Gesetz, 1787/1802) beschreibt den Zusammenhang zwischen Volumen und Temperatur bei konstantem Druck (isobarer Prozess): V/T = const., oder V₁/T₁ = V₂/T₂. Das Volumen ist direkt proportional zur absoluten Temperatur in Kelvin. Wird die Temperatur verdoppelt (in Kelvin!), verdoppelt sich auch das Volumen. Daraus ergibt sich auch der absolute Nullpunkt: Extrapoliert man die lineare V-T-Beziehung auf V = 0, erhält man T = 0 K = -273,15 °C (in der Praxis erreicht kein Gas diesen Punkt, da es vorher kondensiert). Das Gesetz von Amontons (oft ebenfalls Gay-Lussac zugeschrieben) beschreibt den Zusammenhang zwischen Druck und Temperatur bei konstantem Volumen (isochorer Prozess): p/T = const., oder p₁/T₁ = p₂/T₂. Der Druck ist direkt proportional zur absoluten Temperatur. Dieses Gesetz erklärt, warum der Reifendruck bei Kälte sinkt.

Das Daltonsche Gesetz der Partialdrücke (1801) ist besonders für die Medizin relevant. Es besagt, dass der Gesamtdruck eines idealen Gasgemisches gleich der Summe der Partialdrücke aller Einzelgase ist: p_gesamt = p₁ + p₂ + p₃ + ... Der Partialdruck pᵢ eines Gases ist der Druck, den dieses Gas ausüben würde, wenn es das gesamte Volumen allein einnähme. Er berechnet sich als pᵢ = xᵢ × p_gesamt, wobei xᵢ der Molenbruch (Stoffmengenanteil) des Gases ist. Für die Atmosphäre auf Meereshöhe (p_gesamt ≈ 101,3 kPa) ergibt sich beispielsweise: pO₂ = 0,21 × 101,3 kPa ≈ 21,3 kPa und pN₂ = 0,78 × 101,3 kPa ≈ 79 kPa. Der Partialdruck des Wasserdampfes in der Atemluft muss bei Berechnungen des alveolären Sauerstoffpartialdrucks berücksichtigt werden: pₐO₂ = FiO₂ × (p_atm - pH₂O) - paCO₂/RQ, wobei pH₂O bei 37 °C etwa 6,3 kPa beträgt.`,
      merksaetze: [
        'Boyle-Mariotte (T = const.): p₁V₁ = p₂V₂ (p und V umgekehrt proportional). Gay-Lussac (p = const.): V₁/T₁ = V₂/T₂ (V und T direkt proportional). Amontons (V = const.): p₁/T₁ = p₂/T₂.',
        'Dalton-Gesetz: p_gesamt = Σpᵢ. Partialdruck: pᵢ = xᵢ × p_gesamt. Der Molenbruch xᵢ gibt den Stoffmengenanteil des Gases im Gemisch an.'
      ],
      altfrage: {
        question: 'Was besagt das Gesetz von Boyle-Mariotte?',
        answer: 'Bei konstanter Temperatur und Stoffmenge sind Druck und Volumen eines idealen Gases umgekehrt proportional: p₁V₁ = p₂V₂. Wird das Volumen halbiert, verdoppelt sich der Druck und umgekehrt.'
      },
      klinischerBezug: 'Das Daltonsche Gesetz ist fundamental für die Respirationsphysiologie. Der alveoläre Sauerstoffpartialdruck (pₐO₂ ≈ 13,3 kPa) bestimmt den Sauerstoffübertritt ins Blut. In großer Höhe sinkt der Luftdruck und damit der pO₂, was zur Höhenkrankheit führen kann. Bei der Sauerstofftherapie wird die inspiratorische O₂-Fraktion (FiO₂) erhöht, um den pO₂ zu steigern. Auch die Tauchmedizin basiert auf dem Boyle-Mariotte-Gesetz: Beim Auftauchen dehnt sich die Luft in den Lungen aus, was bei zu schnellem Aufstieg zu einem Barotrauma führen kann.',
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
