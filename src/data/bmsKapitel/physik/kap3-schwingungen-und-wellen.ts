import type { Kapitel } from '../types';

export const physKap3: Kapitel = {
  id: 'phys-kap3',
  title: 'Schwingungen und Wellen',
  subject: 'physik',
  icon: '〰️',
  estimatedTime: '55 min',
  unterkapitel: [
    {
      id: 'ph-3-01',
      title: 'Harmonische Schwingungen',
      content: `Eine Schwingung ist eine periodische, d.h. sich regelmäßig wiederholende Bewegung um eine Gleichgewichtslage. Das Paradebeispiel ist das Fadenpendel: Ein Gewicht an einem Faden schwingt nach Auslenkung hin und her. Diese scheinbar simple Bewegung birgt eine der elegantesten Strukturen der Physik — und ihre mathematische Beschreibung erklärt Phänomene vom EKG bis zum MRI.

Die harmonische Schwingung ist die einfachste und wichtigste Schwingungsform. Sie wird beschrieben durch x(t) = A·cos(ω·t + φ₀). Dabei ist A die Amplitude (maximale Auslenkung), ω die Kreisfrequenz (ω = 2π/T = 2π·f), und φ₀ die Anfangsphase. Die Schwingung ist "harmonisch", weil die rücktreibende Kraft proportional zur Auslenkung ist (F = −k·x, Hookesches Gesetz). Dies führt direkt zur Differentialgleichung x'' + ω²·x = 0, deren Lösungen genau die trigonometrischen Funktionen sind.

Das Federpendel (Masse m an Feder mit Federkonstante k) schwingt mit T = 2π·√(m/k). Wichtige Aussage: Die Schwingungsdauer hängt nicht von der Amplitude ab — ein kleines und ein großes Ausschlag haben dieselbe Periode. Dies gilt auch für das Fadenpendel für kleine Winkel: T = 2π·√(L/g), wobei L die Fadenlänge und g die Erdbeschleunigung ist. Die Masse des Pendels spielt keine Rolle — leichte und schwere Pendel gleicher Länge schwingen synchron. Das erkannte bereits Galileo Galilei durch Beobachtung von Kirchenlampen.

Die Energie im harmonischen Oszillator wird zwischen kinetischer und potenzieller Form ausgetauscht: E = ½k·A² = konstant. In der Gleichgewichtslage ist die Geschwindigkeit maximal und die Auslenkung null (E_kin = ½mv² maximal, E_pot = 0). An den Umkehrpunkten ist die Auslenkung A, die Geschwindigkeit null (E_kin = 0, E_pot = ½k·A² maximal). Dieser Energieaustausch ist der Herzschlag (buchstäblich!) des Oszillators.

In der Realität gibt es immer Dämpfung: Luftwiderstand, Reibung, innere Materialspannungen. Gedämpfte Schwingungen zeigen eine exponentiell abnehmende Amplitude: A(t) = A₀·e^(−δt), wobei δ die Dämpfungskonstante ist. Starke Dämpfung lässt das System ohne Schwingung in die Gleichgewichtslage zurückkehren (Kriechfall). Bei erzwungenen Schwingungen, wenn eine äußere periodische Kraft wirkt, tritt Resonanz auf: Die Amplitude wird maximal, wenn die Erregerfrequenz der Eigenfrequenz entspricht (ω_Erreger = ω_Eigen). Resonanz kann Brücken zum Einsturz bringen — aber auch Körperzellen bei der MRI-Bildgebung zum Schwingen anregen.

Im EKG sieht man das Herz als periodischen elektrischen Oszillator. Die Herzfrequenz (60–100 /min) entspricht einer Frequenz von 1–1,67 Hz. Herzarrhythmien sind Störungen dieser Periodizität — Flattern (150–350 /min), Flimmern (aperiodisch, chaotisch). Das Elektroenzephalogramm (EEG) zeigt Hirnwellen: Delta (0,5–4 Hz, Tiefschlaf), Theta (4–8 Hz), Alpha (8–13 Hz, entspanntes Wachen), Beta (13–30 Hz, aktives Denken). Diese Frequenzbereiche entstehen durch synchronisierte Oszillationen von Nervenzellnetzwerken.`,
      lernziele: [
        'Harmonische Schwingung mathematisch beschreiben (Amplitude, Frequenz, Phase)',
        'Schwingungsdauer von Feder- und Fadenpendel berechnen',
        'Energieaustausch zwischen kinetischer und potenzieller Energie im Oszillator',
        'Resonanzphänomen erklären und medizinische Beispiele nennen',
      ],
      sections: [
        {
          heading: 'Grundgleichung der harmonischen Schwingung',
          text: 'x(t) = A·cos(ω·t + φ₀). Amplitude A [m] = maximale Auslenkung. Kreisfrequenz ω = 2π/T = 2πf [rad/s]. Periode T [s], Frequenz f [Hz = 1/s]. Rücktreibende Kraft: F = −k·x (Hookesches Gesetz). Schwingungsdauer: Federpendel T = 2π√(m/k); Fadenpendel T = 2π√(L/g). Wichtig: T hängt bei kleinen Amplituden NICHT von der Amplitude ab — Isochronie des Pendels.',
          merksatz: 'Fadenpendel: T = 2π√(L/g) — hängt von L und g, NICHT von Masse oder Amplitude ab!',
        },
        {
          heading: 'Energie und Dämpfung',
          text: 'Gesamtenergie im Oszillator: E = ½k·A² = konstant (ohne Dämpfung). An Umkehrpunkten: E = E_pot = ½k·A², v = 0. In Gleichgewichtslage: E = E_kin = ½mv_max², Auslenkung = 0. Mit Dämpfung: A(t) = A₀·e^(−δt); Energie klingt ab. Resonanz: Erregerfrequenz = Eigenfrequenz → maximale Amplitude. Resonanzkatastrophe: Tacoma Narrows Bridge (1940). In der Medizin: Resonanz beim MRI (Larmor-Frequenz).',
        },
        {
          heading: 'Biologische und medizinische Oszillatoren',
          text: 'Herz als elektrischer Oszillator: f = 1–1,67 Hz (60–100 /min). EEG-Frequenzbänder: Delta (< 4 Hz), Theta (4–8 Hz), Alpha (8–13 Hz), Beta (13–30 Hz), Gamma (> 30 Hz). Hormonzyklen: circadianer Rhythmus (24 h), Menstruationszyklus (28 Tage), ultradianer Rhythmus (90 min Schlafzyklen). Atemfrequenz: 12–20/min (0,2–0,33 Hz). Pathologische Schwingungen: Tremor bei Parkinson (4–6 Hz), essenzieller Tremor (8–12 Hz).',
        },
      ],
      merksätze: [
        'Fadenpendel: T = 2π√(L/g) — nur Länge und g bestimmen die Periode',
        'Resonanz: maximale Energieaufnahme wenn Erregerfrequenz = Eigenfrequenz',
        'Harmonische Schwingung: F = −kx → x(t) = A·cos(ωt + φ₀)',
      ],
      altfrage: {
        question: 'Ein Fadenpendel schwingt auf der Erde (g = 9,81 m/s²) mit einer Periode von 2 Sekunden. Welche Länge hat der Faden, und wie lange wäre die Periode auf dem Mond (g_Mond = 1,62 m/s²)?',
        answer: 'Länge: T = 2π√(L/g) → L = g·(T/2π)² = 9,81 × (2/2π)² = 9,81 × (1/π)² = 9,81/9,87 ≈ 0,994 m ≈ 1 m. Auf dem Mond: T_Mond = 2π√(L/g_Mond) = 2π√(1/1,62) = 2π × 0,786 ≈ 4,94 s. Auf dem Mond schwingt dasselbe Pendel etwa 2,5-mal langsamer — wegen der geringeren Schwerkraft.',
      },
      klinischerBezug: 'Das EKG (Elektrokardiogramm) nutzt die periodische Natur der Herzaktion. Die P-Welle zeigt Vorhofaktivierung, QRS-Komplex die Kammeraktivierung, T-Welle die Kammer-Repolarisation. Normale Herzfrequenz 60–100/min. Tachykardie (> 100/min) und Bradykardie (< 60/min) sind Abweichungen von der Ruhefrequenz. Kammerflimmern (300–600/min, aperiodisch) ist lebensbedrohlich — der Herzmuskel kontrahiert unkoordiniert und pumpt kein Blut mehr. Defibrillation setzt einen kurzen Hochenergiestrom ein, um alle Herzmuskelzellen gleichzeitig zu depolarisieren und den Sinusrhythmus wiederherzustellen.',
      selfTest: [
        {
          question: 'Wie ändert sich die Schwingungsdauer eines Fadenpendels, wenn man die Fadenlänge vervierfacht?',
          options: [
            'Sie halbiert sich',
            'Sie bleibt gleich',
            'Sie verdoppelt sich',
            'Sie vervierfacht sich',
            'Sie verachtfacht sich',
          ],
          correctIndex: 2,
          explanation: 'T = 2π√(L/g). Bei 4-facher Länge: T_neu = 2π√(4L/g) = 2 × 2π√(L/g) = 2·T. Die Periode verdoppelt sich. Merke: T ist proportional zur Wurzel der Länge — Vervierfachung der Länge → Verdopplung der Periode.',
          hints: ['T ~ √L. Wenn L → 4L, dann T ~ √(4L) = 2√L → T verdoppelt sich.', '√4 = 2 — das ist der Schlüssel.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was passiert mit der Energie eines harmonischen Oszillators, wenn die Amplitude verdoppelt wird?',
          options: [
            'Die Energie verdoppelt sich',
            'Die Energie vervierfacht sich',
            'Die Energie halbiert sich',
            'Die Energie bleibt gleich',
            'Die Energie nimmt um den Faktor 8 zu',
          ],
          correctIndex: 1,
          explanation: 'E = ½k·A². Wenn A → 2A: E_neu = ½k·(2A)² = ½k·4A² = 4·E. Die Energie vervierfacht sich! Das erklärt, warum eine doppelt so hohe Amplitude nicht doppelt so "schädlich" ist, sondern viermal so viel Energie trägt — relevant bei Schallwellen und mechanischen Schwingungen.',
          hints: ['E ~ A² — quadratische Abhängigkeit!', 'Wenn A verdoppelt wird: A² wird wie vervierfacht.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Bei welchem Zustand einer harmonischen Schwingung ist die Geschwindigkeit maximal?',
          options: [
            'An den Umkehrpunkten (maximale Auslenkung)',
            'Wenn die Kraft maximal ist',
            'In der Gleichgewichtslage (Auslenkung = 0)',
            'Wenn die Beschleunigung maximal ist',
            'Bei halber Amplitude',
          ],
          correctIndex: 2,
          explanation: 'In der Gleichgewichtslage (x = 0) ist die Auslenkung null, die potenzielle Energie E_pot = 0, und die gesamte Energie liegt als kinetische Energie vor: E_kin = ½mv² = maximal → v ist maximal. An den Umkehrpunkten (x = ±A) ist v = 0 und E_pot maximal.',
          hints: ['Energieerhaltung: E_kin + E_pot = const. Wo ist E_pot = 0?', 'Wenn keine potenzielle Energie vorhanden ist, ist die gesamte Energie kinetisch.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Federpendel mit m = 0,5 kg und k = 50 N/m — wie groß ist die Schwingungsdauer?',
          options: ['0,2 s', '0,63 s', '1,0 s', '2π s', '3,14 s'],
          correctIndex: 1,
          explanation: 'T = 2π√(m/k) = 2π√(0,5/50) = 2π√(0,01) = 2π × 0,1 = 0,628 s ≈ 0,63 s. Die Eigenfrequenz beträgt f = 1/T ≈ 1,59 Hz. Bei Resonanz würde eine externe Kraft mit 1,59 Hz die Amplitude maximieren.',
          hints: ['T = 2π√(m/k). Berechne zuerst m/k = 0,5/50 = 0,01.', '√0,01 = 0,1; dann T = 2π × 0,1 ≈ 0,63 s.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches EEG-Frequenzband ist typisch für entspanntes Wachen mit geschlossenen Augen?',
          options: [
            'Delta (0,5–4 Hz)',
            'Theta (4–8 Hz)',
            'Alpha (8–13 Hz)',
            'Beta (13–30 Hz)',
            'Gamma (> 30 Hz)',
          ],
          correctIndex: 2,
          explanation: 'Alpha-Wellen (8–13 Hz) sind charakteristisch für entspanntes, waches Bewusstsein mit geschlossenen Augen. Sie verschwinden bei Augenöffnung oder mentaler Aktivität (Alpha-Blockade). Delta-Wellen (< 4 Hz) dominieren im Tiefschlaf; Beta-Wellen (> 13 Hz) bei aktivem Denken; Theta bei Schläfrigkeit.',
          hints: ['Alpha = entspannt wach, Augen geschlossen — leicht zu merken durch "A wie Ausruhen".', 'Die Frequenzen steigen mit zunehmender Aktivität: Delta (Schlaf) → Theta → Alpha → Beta (aktiv).'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-3-02',
      title: 'Wellenphänomene',
      content: `Eine Welle ist die räumliche Ausbreitung einer Schwingung durch ein Medium — oder auch im Vakuum (elektromagnetische Wellen). Im Unterschied zur Teilchenbewegung transportiert eine Welle Energie, aber keine Materie. Das Wasser eines Sees bleibt an Ort und Stelle, wenn eine Welle darüberläuft — nur die Störung wandert.

Die allgemeine Wellengleichung für eine harmonische Welle lautet y(x,t) = A·sin(ω·t − k·x), wobei k = 2π/λ die Wellenzahl ist. Die Phasengeschwindigkeit c = ω/k = λ·f gibt an, wie schnell sich ein Wellenberg fortbewegt. Dies ist eine fundamentale Beziehung: Wellenlänge × Frequenz = Phasengeschwindigkeit. In einem gegebenen Medium ist c typischerweise konstant — wenn f steigt, sinkt λ und umgekehrt.

Es gibt zwei grundlegende Wellentypen. Bei Transversalwellen schwingt das Medium senkrecht zur Ausbreitungsrichtung — wie bei einer Gitarrensaite oder elektromagnetischen Wellen (E- und B-Feld senkrecht zur Ausbreitung). Bei Longitudinalwellen schwingt das Medium parallel zur Ausbreitungsrichtung — wie bei Schallwellen (Druckschwankungen in Ausbreitungsrichtung). Schall ist eine Longitudinalwelle und kann sich in Gasen, Flüssigkeiten und Festkörpern ausbreiten; Transversalwellen können sich in Flüssigkeiten und Gasen nicht ausbreiten (keine Scherkraft).

Die Schallgeschwindigkeit hängt vom Medium ab: In Luft (20°C) v_Schall ≈ 343 m/s, in Wasser ≈ 1500 m/s, in Knochen ≈ 3000–4000 m/s. Die höhere Schallgeschwindigkeit in Wasser erklärt, warum Ultraschall zur Bildgebung genutzt werden kann — Schall breitet sich effizient durch Körpergewebe aus. Ultraschall (> 20 kHz) hat kürzere Wellenlängen als hörbarer Schall und erlaubt daher bessere räumliche Auflösung (λ bestimmt das Auflösungsvermögen).

Der Dopplereffekt ist die scheinbare Frequenzverschiebung durch Relativbewegung zwischen Quelle und Beobachter: f' = f·(v + v_B)/(v − v_S), wobei v die Wellengeschwindigkeit, v_B die Beobachtergeschwindigkeit (+ wenn auf Quelle zu) und v_S die Quellengeschwindigkeit ist (+ wenn auf Beobachter zu). Bewegen sich Quelle und Beobachter aufeinander zu, steigt die wahrgenommene Frequenz; bei Entfernung sinkt sie. In der Medizin nutzt die Doppler-Sonographie diesen Effekt: Ultraschall wird von sich bewegenden Blutgefäßen reflektiert, wobei die Frequenzverschiebung der Blutgeschwindigkeit proportional ist. Die Farbdoppler-Echokardiographie macht Blutströmung im Herz sichtbar.

Die Schallintensität I [W/m²] ist die Schallenergie pro Fläche und Zeit. Der Schallpegel L = 10·log₁₀(I/I₀) wird in Dezibel (dB) angegeben, mit I₀ = 10⁻¹² W/m² als Hörschwelle. Die logarithmische Skala trägt der Wahrnehmung des menschlichen Ohrs Rechnung: 10 dB mehr entsprechen 10-facher Intensität, 20 dB mehr entsprechen 100-facher Intensität. Konversation liegt bei 60 dB, Schmerzgrenze bei 120 dB. Ein Gehörschaden entsteht bei dauerhafter Exposition über 85 dB.`,
      lernziele: [
        'Wellengleichung und Grundbegriffe (Amplitude, Wellenlänge, Frequenz) anwenden',
        'Transversal- und Longitudinalwellen unterscheiden',
        'Dopplereffekt erklären und auf medizinische Ultraschalldiagnostik anwenden',
        'Schallpegel in Dezibel berechnen',
      ],
      sections: [
        {
          heading: 'Grundbegriffe der Wellenlehre',
          text: 'Wellengleichung: y(x,t) = A·sin(ωt − kx). Wellenzahl k = 2π/λ. Phasengeschwindigkeit c = λ·f = ω/k. Wellenlänge λ [m], Frequenz f [Hz], Periode T = 1/f. Grundregel: c = λ·f — bei konstanter Wellengeschwindigkeit sind λ und f umgekehrt proportional. Schall: f = 20–20.000 Hz (hörbar); < 20 Hz Infraschall; > 20 kHz Ultraschall. Ultraschall medizinisch: 1–20 MHz.',
          merksatz: 'c = λ·f — Wellengeschwindigkeit = Wellenlänge × Frequenz',
        },
        {
          heading: 'Dopplereffekt und Ultraschall-Diagnostik',
          text: "Dopplereffekt: f' = f·(v ± v_B)/(v ∓ v_S). Auf Quelle zu: f' > f (höher). Von Quelle weg: f' < f (tiefer). Medizinisch: Doppler-Sonographie misst Blutflussgeschwindigkeit durch Frequenzverschiebung des reflektierten Ultraschalls. Δf = 2·f₀·v_Blut·cos(θ)/c, wobei θ der Winkel Schallstrahl/Gefäß ist. Farbdoppler: Rot = Fluss auf Schallkopf zu, Blau = Fluss vom Schallkopf weg. Power-Doppler: zeigt Fluss unabhängig von Richtung.",
        },
        {
          heading: 'Schallintensität und Dezibel-Skala',
          text: 'Schallintensität I [W/m²]. Schallpegel: L = 10·log₁₀(I/I₀) [dB], I₀ = 10⁻¹² W/m² (Hörschwelle). Referenzwerte: Flüstern 30 dB, Gespräch 60 dB, Straßenverkehr 80 dB, Konzert 100 dB, Schmerzgrenze 120 dB, Düsentriebwerk 140 dB. Verdopplung der Intensität: +3 dB. Verzehnfachung: +10 dB. Lärmschwerhörigkeit ab 85 dB Dauerbelastung. Audiogramm misst Hörschwelle in dB pro Frequenz.',
        },
      ],
      merksätze: [
        'c = λ·f — bei konstanter Wellengeschwindigkeit: höhere Frequenz = kürzere Wellenlänge',
        'Dopplereffekt: Annäherung → höhere Frequenz; Entfernung → tiefere Frequenz',
        'Dezibel: 10 dB mehr = 10-fache Intensität; 20 dB mehr = 100-fache Intensität',
      ],
      altfrage: {
        question: 'Ultraschall mit f = 5 MHz trifft auf Blut, das sich mit v = 0,5 m/s auf den Schallkopf zu bewegt (Schallgeschwindigkeit in Gewebe c = 1500 m/s, Winkel θ = 0°). Welche Doppler-Verschiebung Δf wird gemessen?',
        answer: 'Δf = 2·f₀·v_Blut·cos(θ)/c = 2 × 5 × 10⁶ Hz × 0,5 m/s × cos(0°)/1500 m/s = 2 × 5 × 10⁶ × 0,5/1500 = 5000000/1500 ≈ 3333 Hz ≈ 3,33 kHz. Diese Frequenzverschiebung liegt im Hörbereich (!) und kann prinzipiell als Ton wahrgenommen werden — ein historischer Vorteil der frühen Doppler-Geräte, die den Blutfluss hörbar machten.',
      },
      klinischerBezug: 'Der Doppler-Ultraschall ist in der Kardiologie und Gefäßmedizin unverzichtbar. Die transösophageale Echokardiographie (TEE) nutzt einen Ultraschallkopf im Ösophagus, um Herzklappen und -struktur aus unmittelbarer Nähe abzubilden. Aortenklappenstenose: Durch die Verengung beschleunigt das Blut (Venturi-Effekt, Kontinuitätsgleichung). Die Doppler-gemessene maximale Jet-Geschwindigkeit (oft > 4 m/s) erlaubt die Berechnung des Druckgradienten: ΔP = 4·v² (vereinfachte Bernoulli). Diese Information ist klinisch entscheidend für die Operationsindikation.',
      selfTest: [
        {
          question: 'Ultraschall hat eine Frequenz von 2 MHz und breitet sich in Gewebe mit c = 1500 m/s aus. Welche Wellenlänge hat dieser Ultraschall?',
          options: ['0,75 mm', '0,75 μm', '7,5 mm', '75 cm', '0,075 mm'],
          correctIndex: 0,
          explanation: 'λ = c/f = 1500 m/s / (2 × 10⁶ Hz) = 7,5 × 10⁻⁴ m = 0,75 mm. Diese kurze Wellenlänge ermöglicht eine räumliche Auflösung im Millimeterbereich — ausreichend für die klinische Bildgebung. Höhere Frequenzen liefern bessere Auflösung, dringen aber weniger tief ins Gewebe ein.',
          hints: ['λ = c/f. Berechne: 1500/(2 × 10⁶).', '1500/2.000.000 = 0,00075 m = 0,75 mm.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Schall breitet sich in Luft langsamer aus als in Wasser. Was folgt daraus für die Wellenlänge bei gleicher Frequenz?',
          options: [
            'In Wasser ist λ kleiner (wegen höherer Dichte)',
            'In Wasser ist λ größer (wegen höherer Schallgeschwindigkeit)',
            'λ ist identisch, da f gleich ist',
            'In Wasser ist f größer, daher λ kleiner',
            'In Luft ist λ größer, weil Luft compressabler ist',
          ],
          correctIndex: 1,
          explanation: 'λ = c/f. In Wasser: c ≈ 1500 m/s; in Luft: c ≈ 343 m/s. Bei gleicher Frequenz gilt: λ_Wasser/λ_Luft = c_Wasser/c_Luft = 1500/343 ≈ 4,4. In Wasser ist die Wellenlänge also etwa 4,4-mal größer als in Luft. Frequenz ändert sich beim Übergang zwischen Medien nicht, aber Wellenlänge und Phasengeschwindigkeit schon.',
          hints: ['λ = c/f — wenn c größer, wird λ größer (f bleibt gleich).', 'c_Wasser > c_Luft → λ_Wasser > λ_Luft.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Schallquelle bewegt sich mit v = 34 m/s auf einen ruhenden Beobachter zu. Schallgeschwindigkeit c = 340 m/s. Wie verändert sich die wahrgenommene Frequenz?',
          options: [
            'Sie sinkt um 10%',
            'Sie bleibt gleich',
            'Sie steigt um etwa 11%',
            'Sie verdoppelt sich',
            'Sie verdreifacht sich',
          ],
          correctIndex: 2,
          explanation: "f' = f·c/(c − v_S) = f·340/(340 − 34) = f·340/306 = f·1,111. Die wahrgenommene Frequenz steigt um etwa 11%. Bei v_S = c/2 = 170 m/s würde sich die Frequenz verdoppeln. Bei v_S → c (Schallgeschwindigkeit) geht f' → unendlich (Schallmauer).",
          hints: ["Formel für bewegte Quelle: f' = f·c/(c − v_S)..", 'c − v_S = 340 − 34 = 306; 340/306 ≈ 1,11.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welche Schallintensität entspricht einem Schallpegel von 80 dB? (I₀ = 10⁻¹² W/m²)',
          options: ['10⁻⁸ W/m²', '10⁻⁴ W/m²', '80 W/m²', '10⁻¹⁰ W/m²', '80 × 10⁻¹² W/m²'],
          correctIndex: 1,
          explanation: 'L = 10·log₁₀(I/I₀) → 80 = 10·log₁₀(I/10⁻¹²) → 8 = log₁₀(I/10⁻¹²) → I/10⁻¹² = 10⁸ → I = 10⁸ × 10⁻¹² = 10⁻⁴ W/m². 80 dB (Straßenverkehr) entspricht also 10⁻⁴ W/m² = 0,0001 W/m² — viermal der Hörschwelle (in log-Einheiten).',
          hints: ['L = 10·log₁₀(I/I₀) → I = I₀ × 10^(L/10).', 'I = 10⁻¹² × 10^(80/10) = 10⁻¹² × 10⁸ = 10⁻⁴ W/m².'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was unterscheidet eine Longitudinalwelle von einer Transversalwelle?',
          options: [
            'Longitudinalwellen haben höhere Frequenz',
            'Transversalwellen können sich im Vakuum nicht ausbreiten',
            'Bei Longitudinalwellen schwingt das Medium parallel zur Ausbreitungsrichtung',
            'Transversalwellen sind immer schneller',
            'Longitudinalwellen können polarisiert werden',
          ],
          correctIndex: 2,
          explanation: 'Bei Longitudinalwellen (z.B. Schall) schwingt das Medium parallel zur Ausbreitungsrichtung (Verdichtung/Verdünnung). Bei Transversalwellen (z.B. Licht, Seilwellen) schwingt das Medium senkrecht zur Ausbreitungsrichtung. Transversalwellen können polarisiert werden (definierte Schwingungsebene); Longitudinalwellen nicht. Licht (Transversalwelle) kann sich im Vakuum ausbreiten; Schall (Longitudinalwelle) nicht.',
          hints: ['Longitudinal = in Längsrichtung = parallel zur Ausbreitung.', 'Schall: Druckschwankungen vorwärts-rückwärts = längs. Seilwelle: auf-ab = quer.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-3-03',
      title: 'Interferenz und Beugung',
      content: `Wenn zwei oder mehr Wellen gleichzeitig am selben Ort sind, überlagern sie sich — dieses Phänomen heißt Superposition oder Interferenz. Das Überlagerungsprinzip der Wellenlehre besagt, dass die resultierende Auslenkung einfach die Summe der einzelnen Auslenkungen ist. Daraus folgen konstruktive Interferenz (Verstärkung), destruktive Interferenz (Auslöschung) und alle Zwischenstufen — je nach Phasenbeziehung der Wellen.

Konstruktive Interferenz tritt auf, wenn zwei Wellen mit identischer Frequenz und konstanter Phasenbeziehung (kohärente Wellen) so überlagern, dass ihre Wellenberge zusammenfallen. Dies geschieht, wenn der Gangunterschied Δ (Wegdifferenz der Wellen) ein ganzzahliges Vielfaches der Wellenlänge ist: Δ = n·λ (n = 0, 1, 2, ...). Die Amplitude des resultierenden Signals ist dann doppelt so groß — die Intensität ist viermal so groß (I ~ A²).

Destruktive Interferenz tritt auf, wenn Bergge einer Welle auf Täler der anderen treffen: Δ = (n + ½)·λ. Die Amplituden heben sich auf — Auslöschung. Dies ist die Basis für Noise-Cancelling-Kopfhörer: Ein Mikrofon misst den Umgebungslärm, und die Elektronik erzeugt eine Gegenwelle exakt mit Phasenversatz π — Auslöschung des Lärms. In der Medizin nutzt man Interferenz bei der optischen Kohärenztomographie (OCT): Licht wird in zwei Wege aufgespalten, reflektiert, und die Interferenz liefert hochauflösende Schnittbilder der Retina.

Das **Doppelspaltexperiment** (Thomas Young, 1801) ist der klassische Nachweis der Wellennatur des Lichts. Licht trifft auf eine Blende mit zwei schmalen Spalten — hinter der Blende entstehen zwei kohärente Wellenfronten, die interferieren. Auf einem Schirm dahinter sieht man abwechselnd helle und dunkle Streifen (Interferenzmuster). Helle Streifen: Δ = n·λ; dunkle Streifen: Δ = (n+½)·λ. Der Abstand der Streifen Δy = λ·L/d, wobei L der Abstand Spalt-Schirm und d der Spaltabstand ist. Aus diesem Muster lässt sich die Wellenlänge des Lichts bestimmen.

Das **Huygenssche Prinzip** gibt eine anschauliche Erklärung von Beugung und Ausbreitung: Jeder Punkt einer Wellenfront ist Ausgangspunkt einer neuen Kugelwelle (Elementarwelle). Die neue Wellenfront ist die Einhüllende aller Elementarwellen. Wenn eine Welle durch eine enge Öffnung tritt (Einzelspalt der Breite a), entstehen Elementarwellen, die in alle Richtungen laufen und miteinander interferieren. Das erste Beugungsminimum erscheint bei a·sin(θ) = λ — eine Gleichung analog zum Doppelspalt. Je enger der Spalt, desto stärker die Beugung (größerer Winkel).

In der Praxis bedeutet das: Beugung limitiert die Auflösung optischer Instrumente. Ein Mikroskop kann zwei Punkte nur dann trennen, wenn ihr Abstand größer als etwa λ/(2·NA) ist (Abbe-Limit), wobei NA die numerische Apertur ist. Für sichtbares Licht (λ ≈ 500 nm) liegt das Auflösungslimit bei etwa 200 nm — ausreichend, um Bakterien zu sehen, aber nicht Viren oder DNA-Strukturen. Elektronenmikroskope nutzen die kurze de-Broglie-Wellenlänge von Elektronen (pm-Bereich) und erreichen Atomauflösung.`,
      lernziele: [
        'Konstruktive und destruktive Interferenz an der Gangunterschiedbedingung erklären',
        'Das Youngs Doppelspaltexperiment beschreiben und Streifenabstand berechnen',
        'Huygensches Prinzip und Beugung am Einzelspalt erläutern',
        'Auflösungsgrenze optischer Instrumente durch Beugung verstehen',
      ],
      sections: [
        {
          heading: 'Superposition und Interferenz',
          text: 'Überlagerungsprinzip: Gesamtauslenkung = Summe der Einzelauslenkungen. Kohärente Wellen: gleiche Frequenz, feste Phasendifferenz. Konstruktive Interferenz: Δ = n·λ → maximale Amplitude. Destruktive Interferenz: Δ = (n+½)·λ → Auslöschung. Anwendungen: Noise-Cancelling, optische Kohärenztomographie (OCT), Holographie, Röntgenkristallographie (Bragg: 2d·sin(θ) = n·λ), Anti-Reflexionsschichten (Brillenglas: Schicht mit d = λ/4 für destruktive Interferenz des reflektierten Lichts).',
          merksatz: 'Konstruktiv: Δ = nλ (Verstärkung); destruktiv: Δ = (n+½)λ (Auslöschung)',
        },
        {
          heading: 'Youngsches Doppelspalt und Beugung',
          text: 'Doppelspalt: Bedingung für helle Streifen: d·sin(θ) = n·λ. Streifenabstand: Δy = λ·L/d. Einzelspalt-Minimum: a·sin(θ) = n·λ. Huygensches Prinzip: jeder Wellenpunkt ist Ausgangspunkt neuer Elementarwellen. Beugung nimmt zu, wenn Spaltbreite a → λ. Röntgenbeugung an Kristallen (Bragg): Gitterabstände d (nm) können aus dem Beugungsmuster bestimmt werden — Grundlage der Strukturaufklärung von DNA (Watson & Crick, 1953).',
        },
        {
          heading: 'Auflösungsgrenzen und Anwendungen',
          text: 'Abbe-Limit: d_min = λ/(2·NA). Lichtmikroskop: Auflösung ≈ 200 nm (sichtbares Licht). Elektronenmikroskop: Auflösung ≈ 0,1 nm (Atomgröße). OCT (Optische Kohärenztomographie): Interferenz von Licht zur Retina-Bildgebung; Auflösung ≈ 5–10 μm, ideal für Netzhautschichten. Ultraschallbeugung: Reflektierte Wellen aus verschiedenen Tiefen interferieren — gibt Tiefeninformation. Stoßwellenlithotripsie: Fokussierung von Schallwellen durch konstruktive Interferenz am Zielpunkt.',
        },
      ],
      merksätze: [
        'Konstruktive Interferenz: Gangunterschied = ganzzahliges Vielfaches der Wellenlänge',
        'Je schmaler der Spalt (< λ), desto stärker die Beugung',
        'Auflösungsgrenze Lichtmikroskop ≈ 200 nm = λ/2 (Abbe-Limit)',
      ],
      altfrage: {
        question: 'Im Youngschen Doppelspaltversuch mit grünem Licht (λ = 550 nm) beträgt der Spaltabstand d = 0,5 mm und der Schirm ist L = 2 m entfernt. Wie groß ist der Abstand zwischen zwei benachbarten hellen Streifen?',
        answer: 'Δy = λ·L/d = 550 × 10⁻⁹ m × 2 m / (0,5 × 10⁻³ m) = 1100 × 10⁻⁹/5 × 10⁻⁴ = 1100/500 × 10⁻⁶ m = 2,2 × 10⁻³ m = 2,2 mm. Der Streifenabstand beträgt 2,2 mm — im Experiment mit bloßem Auge sichtbar. Grünes Licht mit größerer Wellenlänge hätte größeren Streifenabstand als blaues Licht.',
      },
      klinischerBezug: 'Die optische Kohärenztomographie (OCT) ist das leistungsfähigste diagnostische Werkzeug der Ophthalmologie. Sie nutzt Licht-Interferenz (Weißlicht-Interferometrie), um Netzhautschichten mit Auflösungen von 5–10 μm darzustellen. Damit können frühe Veränderungen bei Makuladegeneration, Glaukom (Nervenfaserverlust) und diabetischer Retinopathie erkannt werden, lange bevor sie klinisch sichtbar sind. Das Grundprinzip: Licht wird in zwei Wege aufgespalten (Messarm → Auge, Referenzarm → Spiegel), reflektiert und zur Interferenz gebracht — das Muster kodiert die Tiefenstruktur der Retina.',
      selfTest: [
        {
          question: 'Unter welcher Bedingung tritt destruktive Interferenz bei zwei Wellen auf?',
          options: [
            'Gangunterschied Δ = n·λ (n = 0, 1, 2, ...)',
            'Gangunterschied Δ = (n + ½)·λ (n = 0, 1, 2, ...)',
            'Wenn beide Wellen gleiche Amplitude haben',
            'Wenn die Frequenzen identisch sind',
            'Wenn beide Wellen aus derselben Quelle stammen',
          ],
          correctIndex: 1,
          explanation: 'Destruktive Interferenz (Auslöschung) tritt auf, wenn der Gangunterschied Δ = (n + ½)·λ beträgt — also ein halbzahliges Vielfaches der Wellenlänge. Dann treffen Berge der einen Welle auf Täler der anderen, und die Amplituden heben sich auf. Konstruktive Interferenz: Δ = n·λ.',
          hints: ['Wenn der Gangunterschied genau λ/2 beträgt, ist die Phase um 180° verschoben.', 'Berg + Tal = 0 → Auslöschung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Das Huygenssche Prinzip besagt, dass:',
          options: [
            'Licht immer als gerade Strahlen propagiert',
            'Jeder Punkt einer Wellenfront Ausgangspunkt einer neuen Kugelwelle ist',
            'Wellen nur in einem Medium ausbreiten können',
            'Beugung nur bei Longitudinalwellen auftritt',
            'Interferenz nur bei kohärenten Quellen auftritt',
          ],
          correctIndex: 1,
          explanation: 'Das Huygenssche Prinzip: Jeder Punkt einer Wellenfront ist Ausgangspunkt einer neuen Elementarwelle (Kugelwelle). Die neue Wellenfront ist die Einhüllende all dieser Elementarwellen. Dies erklärt Beugung (Ausbreitung um Hindernisse), Brechung und Reflexion geometrisch. Es ist ein universelles Prinzip für alle Wellenarten.',
          hints: ['Huygens stellte sich Wellen als Summe vieler kleiner Kugelwellen vor.', 'An einem Spalt werden die Elementarwellen sichtbar — sie breiten sich in alle Richtungen aus.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Wellenlänge hat rotes Licht (f ≈ 4,5 × 10¹⁴ Hz) im Vakuum? (c = 3 × 10⁸ m/s)',
          options: ['667 nm', '66,7 nm', '6,67 μm', '667 μm', '133 nm'],
          correctIndex: 0,
          explanation: 'λ = c/f = 3 × 10⁸ m/s / (4,5 × 10¹⁴ Hz) = 6,67 × 10⁻⁷ m = 667 nm. Rotes Licht hat eine Wellenlänge von 620–750 nm. Sichtbares Licht insgesamt: 380–780 nm. Violett (380–450 nm) hat kürzere Wellenlänge und höhere Frequenz als Rot.',
          hints: ['λ = c/f. Berechne: (3 × 10⁸)/(4,5 × 10¹⁴).', '3/4,5 = 0,667; Exponent: 10⁸⁻¹⁴ = 10⁻⁶; also 0,667 × 10⁻⁶ m = 667 nm.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum können Lichtmikroskope Viren (Durchmesser 20–300 nm) nicht auflösen?',
          options: [
            'Weil Viren keine Farbe haben',
            'Weil die Auflösung durch die Wellenlänge des Lichts begrenzt ist (Abbe-Limit ≈ 200 nm)',
            'Weil Viren sich zu schnell bewegen',
            'Weil Glas die Virusteilchen absorbiert',
            'Weil die Linsen zu schwach vergrößern',
          ],
          correctIndex: 1,
          explanation: 'Das Abbe-Limit begrenzt die Auflösung des Lichtmikroskops auf etwa λ/2 ≈ 200 nm (sichtbares Licht). Viren mit Durchmessern von 20–300 nm liegen teilweise unterhalb dieser Grenze. Nur die kleinsten Viren (Parvoviren, Picornaviren, 20–30 nm) sind wirklich unsichtbar; sehr große Viren (Pockenvirus ≈ 300 nm) können im Lichtmikroskop gerade noch erkannt werden.',
          hints: ['Abbe-Limit: d_min ≈ λ/2 ≈ 200 nm für sichtbares Licht.', 'Viren: 20–300 nm — was davon liegt unterhalb der Auflösungsgrenze?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Anti-Reflexionsschichten auf Brillengläsern nutzen Interferenz. Warum ist die Schichtdicke d = λ/4 optimal?',
          options: [
            'Weil dann die Absorption maximiert wird',
            'Weil der Gangunterschied 2d = λ/2 destruktive Interferenz des Reflexlichts ergibt',
            'Weil d = λ/4 die Brechkraft der Schicht maximiert',
            'Weil dünnere Schichten nichts bewirken',
            'Weil λ/4 der Resonanzbedingung entspricht',
          ],
          correctIndex: 1,
          explanation: 'Das reflektierte Licht legt den Weg zur Schicht und zurück zurück: Gesamtwegunterschied = 2d. Für destruktive Interferenz: 2d = λ/2 → d = λ/4. Zusätzlich muss ein Phasensprung beim Übergang zwischen Medien verschiedener Brechungsindizes berücksichtigt werden. Wenn d = λ/4, löschen sich die Reflexionen an Vorderseite und Rückseite der Schicht aus → weniger Reflexion → mehr Transmission → klare Sicht.',
          hints: ['Licht läuft hin und zurück durch die Schicht: Gesamtweg = 2d.', 'Destruktiv wenn 2d = λ/2, also d = λ/4.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-3-04',
      title: 'Resonanz und stehende Wellen',
      content: `Stehende Wellen entstehen durch die Überlagerung zweier gleichfrequenter Wellen, die in entgegengesetzte Richtungen laufen. Wenn eine Welle von einer Wand reflektiert wird und mit der einlaufenden Welle interferiert, entstehen Orte minimaler Auslenkung (Knoten, nodes) und maximaler Auslenkung (Bäuche, antinodes). Diese Welle "steht" — sie wandert nicht, sondern schwingt an Ort und Stelle. Der Knotenabstand beträgt immer λ/2.

Die Bedingungen für stehende Wellen in einem Resonator hängen von den Randbedingungen ab. Bei einem beidseitig offenen Rohr (oder einem beidseitig festgespannten Seil) befinden sich an beiden Enden Schwingungsbäuche (offenes Ende) bzw. Knoten (festes Ende). Für ein beidseitig offenes Rohr: L = n·λ/2 (n = 1, 2, 3, ...), also λ_n = 2L/n und f_n = n·c/(2L). Die niedrigste Frequenz (n=1) heißt Grundfrequenz oder erste Harmonische; n=2 ist die zweite Harmonische (erste Oberschwingung), usw.

Für ein Rohr, das nur an einem Ende offen ist (z.B. Gehörgang, Querflöte): Formen sich dort Knoten und an der offenen Seite Bäuche. Dann: L = (2n−1)·λ/4, f_n = (2n−1)·c/(4L). Nur ungerade Harmonische sind möglich. Der menschliche Gehörgang (L ≈ 2,5 cm) wirkt als halboffenes Rohr: Resonanzfrequenz f₁ = c/(4L) = 343/(4 × 0,025) = 3430 Hz — genau im empfindlichsten Frequenzbereich des menschlichen Ohrs!

Resonanz ist das Phänomen, bei dem ein System durch externe Anregung mit seiner Eigenfrequenz stark zu schwingen beginnt. Die Amplitude wird dramatisch größer, wenn Erregerfrequenz ≈ Eigenfrequenz. In einem ideal ungedämpften System würde die Amplitude theoretisch unendlich groß — in der Praxis begrenzt Dämpfung die Amplitude. Die berühmteste Resonanzkatastrophe ist die Tacoma Narrows Bridge (1940): Windwirbel mit einer Frequenz nahe der Eigenfrequenz der Brücke erzeugten wachsende Schwingungsamplituden, bis die Brücke einstürzte.

Die MRI (Magnetresonanztomographie) nutzt Kernspinresonanz (NMR) — ein Resonanzphänomen in atomaren Dimensionen. Protonen im Körper (hauptsächlich in Wasser) haben einen Kernspin und präzedieren im starken externen Magnetfeld B₀ mit der Larmor-Frequenz: f_L = γ·B₀/(2π), wobei γ das gyromagnetische Verhältnis des Protons ist (γ/2π = 42,58 MHz/T). Bei einem 1,5 Tesla MRI-Gerät: f_L = 42,58 × 1,5 ≈ 63,9 MHz. Wenn Hochfrequenzpulse mit dieser Frequenz eingestrahlt werden, resorbieren die Protonen Energie (Resonanz) und kippen ihre Ausrichtung. Nach dem Puls kehren sie in die Ausgangslage zurück (Relaxation) und senden dabei Radiosignale aus, die zur Bildgebung genutzt werden.`,
      lernziele: [
        'Stehende Wellen und Randbedingungen für Resonatoren beschreiben',
        'Eigenfrequenzen für beidseitig offene und halboffene Rohre berechnen',
        'Resonanzphänomen erklären und klinische Beispiele nennen',
        'Grundprinzip der MRI-Resonanz (Larmor-Frequenz) kennen',
      ],
      sections: [
        {
          heading: 'Stehende Wellen — Entstehung und Knoten',
          text: 'Entstehung: Überlagerung zweier gegenläufiger Wellen gleicher Frequenz und Amplitude. Ergebnis: ortsfeste Amplitudenverteilung mit Knoten (A=0) und Bäuchen (A_max). Knotenabstand = λ/2. Beidseitig offen/geschlossen: Grundschwingung L = λ/2, Obertöne L = n·λ/2 (alle Harmonischen). Halboffenes Rohr (ein Ende offen): Grundschwingung L = λ/4, nur ungerade Harmonische. Beispiel: Orgelpfeifen (offen/geschlossen), Querflöte (offen), Klarinette (geschlossen).',
          merksatz: 'Knotenabstand = λ/2; Bauch am offenen Ende, Knoten am geschlossenen Ende',
        },
        {
          heading: 'Resonanz in der Medizin',
          text: 'Resonanz = maximale Energieübertragung bei Erregerfrequenz = Eigenfrequenz. Lungenperkussion: Klopfen erzeugt Schallwellen; luftgefüllte Lunge klingt resonant ("sonor"), flüssigkeitsgefüllte Lunge klingt gedämpft ("gedämpft"). Herzgeräusche entstehen bei turbulenter Strömung mit Resonanzcharakter. NMR/MRI: Larmor-Frequenz f_L = γ·B₀/(2π). Bei 1,5 T: f_L ≈ 64 MHz. Protonen in Resonanz absorbieren RF-Energie → nach Puls Relaxation → detektiertes Signal.',
        },
        {
          heading: 'Klinische Anwendungen stehender Wellen',
          text: 'Gehörgang als Resonator: L ≈ 2,5 cm (halboffenes Rohr). Resonanzfrequenz: f = c/(4L) = 343/(4×0,025) = 3430 Hz — Empfindlichkeitsmaximum des Ohrs. Perkussion: erzeugt stehende Wellen in Hohlräumen; Diagnose von Pleuraerguss, Pneumonie, Pneumothorax. Stoßwellenlithotripsie: Fokussierung durch konstruktive Interferenz an einem Punkt. Ultraschall-Therapie (Physiotherapie): stehende Wellen in Gewebe → thermische und mechanische Wirkung.',
        },
      ],
      merksätze: [
        'Stehende Welle: Knoten im Abstand λ/2; Bauch an offenem, Knoten an geschlossenem Ende',
        'MRI-Larmor-Frequenz: f_L = γ·B₀/(2π) — bei 1,5 T ≈ 64 MHz',
        'Resonanz: Erregerfrequenz = Eigenfrequenz → maximale Amplitude',
      ],
      altfrage: {
        question: 'Eine Querflöte (beidseitig offen) hat eine klingende Länge von L = 65 cm. Welche Grundfrequenz erzeugt sie? (c = 343 m/s) Welche Wellenlänge hat die erste Oberschwingung?',
        answer: 'Grundfrequenz (n=1): f₁ = c/(2L) = 343/(2 × 0,65) = 343/1,30 ≈ 264 Hz ≈ C₄ (mittleres C). Erste Oberschwingung (n=2): f₂ = 2·f₁ = 528 Hz ≈ C₅. Wellenlänge der ersten Oberschwingung: λ₂ = c/f₂ = 343/528 ≈ 0,65 m = 65 cm = L. Das stimmt — für n=2 ist λ₂ = 2L/2 = L.',
      },
      klinischerBezug: 'Die MRT (Magnetresonanztomographie) revolutionierte die medizinische Bildgebung seit den 1980er Jahren. Das Prinzip beruht auf der Kernspinresonanz von Wasserstoffprotonen im menschlichen Körper. Verschiedene Gewebe haben unterschiedliche Relaxationszeiten (T1, T2) nach RF-Anregung, was zu Bildkontrast führt. T1-gewichtete Bilder: Fett hell, Wasser dunkel (gut für Anatomie). T2-gewichtete Bilder: Wasser hell (gut für Pathologie — Ödeme, Entzündungen, Tumoren leuchten hell). Funktionelles MRI (fMRI) detektiert Oxygenierungsunterschiede (BOLD-Signal) und macht Hirnaktivität sichtbar. Keine ionisierende Strahlung — ideal für Kinder und Wiederholungsuntersuchungen.',
      selfTest: [
        {
          question: 'Eine Orgelpfeife ist beidseitig offen und 2 m lang. Welche Grundfrequenz erzeugt sie? (c = 340 m/s)',
          options: ['42,5 Hz', '85 Hz', '170 Hz', '340 Hz', '680 Hz'],
          correctIndex: 1,
          explanation: 'Für beidseitig offenes Rohr: f₁ = c/(2L) = 340/(2 × 2) = 340/4 = 85 Hz. Dies liegt im Bassbereich (Tiefton). Die zweite Harmonische wäre 170 Hz, die dritte 255 Hz usw. Eine 2 m lange Orgelpfeife entspricht einem tiefen Ton.',
          hints: ['Beidseitig offen: Grundfrequenz f₁ = c/(2L).', '340/(2×2) = 340/4 = 85 Hz.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Bei der Lungenperkussion klingt eine luftgefüllte Lunge resonant ("sonor"), eine flüssigkeitsgefüllte klingt gedämpft. Welches physikalische Prinzip liegt zugrunde?',
          options: [
            'Reflexionsgesetz: Schall reflektiert besser an Flüssigkeit',
            'Resonanz: Luftgefüllte Hohlräume haben Eigenfrequenzen, die angeregt werden können',
            'Absorption: Flüssigkeit absorbiert Schall besser als Luft',
            'Brechung: Schall ändert Richtung in Flüssigkeit',
            'Beugung: Luft erlaubt mehr Beugung als Flüssigkeit',
          ],
          correctIndex: 1,
          explanation: 'Luftgefüllte Lungenabschnitte sind Resonatoren: Das Klopfen erzeugt Schallwellen, und die Luft in den Alveolen schwingt resonant mit → langer, tiefer, resonanter Ton ("sonor"). Flüssigkeit (Pleuraerguss, Pneumonie) hat keine Eigenfrequenz für Schall; die Schwingung wird schnell gedämpft → kurzer, dumpfer Ton ("gedämpft"). Pneumothorax (Luft im Pleuraspalt) klingt hypersonor.',
          hints: ['Resonanz in Hohlräumen: Luft kann Eigenfrequenzen haben, Flüssigkeit nicht.', 'Leere Kiste klingt hohl, volle Kiste klingt dumpf — analoges Prinzip.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Larmor-Frequenz haben Protonen in einem 3-Tesla-MRI-Gerät? (γ/2π = 42,58 MHz/T)',
          options: ['14,2 MHz', '42,58 MHz', '85,2 MHz', '127,7 MHz', '255,5 MHz'],
          correctIndex: 3,
          explanation: 'f_L = γ·B₀/(2π) = 42,58 MHz/T × 3 T = 127,74 MHz ≈ 127,7 MHz. Bei 1,5 T wäre f_L = 63,9 MHz; bei 7 T (Hochfeld-MRI) ≈ 298 MHz. Höheres B₀ → höhere Larmor-Frequenz → besseres Signal-Rausch-Verhältnis → höhere Bildqualität.',
          hints: ['f_L = γ/2π × B₀ = 42,58 MHz/T × 3 T.', 'Einfach multiplizieren: 42,58 × 3 = 127,74 MHz.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Knoten einer stehenden Welle ist ein Ort, an dem:',
          options: [
            'Die Amplitude maximal ist',
            'Die Schallintensität maximal ist',
            'Die Auslenkung immer null ist',
            'Die Frequenz am höchsten ist',
            'Die Energie gespeichert wird',
          ],
          correctIndex: 2,
          explanation: 'An Knoten (nodes) einer stehenden Welle ist die Auslenkung zu jeder Zeit null — die destruktive Interferenz der hin- und rücklaufenden Welle ist vollständig. Zwischen Knoten liegen Bäuche (antinodes), wo die Amplitude maximal schwingt. Knotenabstand: λ/2.',
          hints: ['Knoten = "stillstehend", keine Schwingung. Bauch = maximale Schwingung.', 'Destruktive Interferenz an Knoten hebt die Auslenkung auf.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum klingt der menschliche Gehörgang (L ≈ 2,5 cm, halboffenes Rohr) besonders für Frequenzen um 3–4 kHz empfindlich?',
          options: [
            'Weil das Trommelfell in diesem Bereich am besten schwingt',
            'Weil die Resonanzfrequenz f = c/(4L) ≈ 3430 Hz im optimalen Hörbereich liegt',
            'Weil der Hörnerv besonders viele Fasern für diesen Bereich hat',
            'Weil Sprache hauptsächlich diese Frequenzen enthält',
            'Weil Lärm dieser Frequenz besonders schädlich ist',
          ],
          correctIndex: 1,
          explanation: 'Der Gehörgang wirkt als halboffenes Rohr (Trommelfell = geschlossenes Ende, Ohrmuschel = offenes Ende). Resonanzfrequenz: f = c/(4L) = 343/(4 × 0,025) = 3430 Hz. Dies entspricht dem Empfindlichkeitsmaximum des menschlichen Ohrs bei 3–4 kHz — eine evolutionäre Optimierung für das Verstehen von Sprache (Konsonanten: 1–4 kHz).',
          hints: ['Halboffenes Rohr: f₁ = c/(4L). Setze L = 0,025 m ein.', '343/(4 × 0,025) = 343/0,1 = 3430 Hz ≈ 3,4 kHz.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
