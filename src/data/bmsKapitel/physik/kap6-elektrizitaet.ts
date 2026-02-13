import type { Kapitel } from '../types';

export const physKap6: Kapitel = {
  id: 'phys-kap6',
  title: 'Elektrizität & Magnetismus',
  subject: 'physik',
  icon: '🔌',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap6-1',
      title: 'Elektrostatik',
      content: `**Elektrische Ladung** ist eine fundamentale Eigenschaft der Materie. Es gibt zwei Arten: positiv und negativ. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die SI-Einheit ist Coulomb (C). Die **Elementarladung** e = 1,602 · 10⁻¹⁹ C ist die kleinste freie Ladung. Proton: +e, Elektron: -e. Die Ladung ist erhalten. In einem abgeschlossenen System bleibt die Gesamtladung konstant. Ladung kann nicht erzeugt oder vernichtet werden, nur getrennt oder neutralisiert.

**Coulomb-Gesetz**: Die Kraft zwischen zwei Punktladungen q₁ und q₂ im Abstand r: F = k · q₁ · q₂ / r². Dabei ist k = 1/(4πε₀) ≈ 9 · 10⁹ N·m²/C². Die Kraft ist anziehend bei ungleichnamigen, abstoßend bei gleichnamigen Ladungen. Sie nimmt mit r² ab (Abstandsgesetz).

Das **elektrische Feld E** beschreibt den Raum um eine Ladung. Es ist die Kraft pro Ladungseinheit: E = F/q. Einheit: V/m oder N/C. Feldlinien zeigen von + nach - und geben die Richtung der Kraft auf eine positive Probeladung an.

Der **Kondensator** speichert elektrische Energie. Ein Plattenkondensator hat zwei parallele Metallplatten (Fläche A, Abstand d). Kapazität: C = ε₀ · εr · A/d. εr ist die relative Permittivität (Dielektrizitätszahl). Einheit: Farad (1 F = 1 C/V). Gespeicherte Energie: W = ½ · C · U² = ½ · Q · U = Q²/(2C). Dabei ist U die Spannung, Q = C · U die Ladung.`,
      merksätze: [
        'Coulomb-Gesetz: F = k·q₁·q₂/r². Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die Kraft nimmt mit r² ab.',
        'Kondensator: C = ε₀·εr·A/d, gespeicherte Energie: W = ½·C·U². Elementarladung: e = 1,602·10⁻¹⁹ C.',
      ],
      altfrage: {
        question: 'Wie ändert sich die Coulomb-Kraft, wenn der Abstand zwischen zwei Ladungen verdreifacht wird?',
        answer: 'F ∝ 1/r². Bei Verdreifachung des Abstands: F_neu = F/(3²) = F/9. Die Kraft wird auf ein Neuntel reduziert.',
      },
      klinischerBezug:
        'Der **Defibrillator** nutzt einen Kondensator, der auf bis zu 5000 V aufgeladen wird und dann 200–360 J in wenigen Millisekunden abgibt. Die Depolarisation aller Herzmuskelzellen soll den normalen Sinusrhythmus wiederherstellen. Das **Ruhepotenzial** der Zellmembran (ca. -70 mV) basiert auf dem Kondensatorprinzip. Der **Herzschrittmacher** gibt elektrische Impulse von 2–5 V ab. Gefährlich wird Strom ab ca. 50 mA — **Herzkammerflimmern**.',
      selfTest: [
        {
          question: 'Zwei Ladungen werden um den Faktor 2 voneinander entfernt. Wie ändert sich die Coulomb-Kraft?',
          options: [
            'Sie halbiert sich',
            'Sie wird ein Viertel',
            'Sie verdoppelt sich',
            'Sie bleibt gleich',
            'Sie wird ein Achtel',
          ],
          correctIndex: 1,
          explanation: 'F ∝ 1/r². Bei Verdopplung des Abstands: F_neu = F/(2²) = F/4. Die Kraft wird auf ein Viertel reduziert.',
        },
        {
          question: 'Die Elementarladung beträgt ungefähr:',
          options: ['1 C', '1,6 · 10⁻¹⁹ C', '9,81 C', '6,022 · 10²³ C', '9,1 · 10⁻³¹ C'],
          correctIndex: 1,
          explanation: 'Die Elementarladung e = 1,602 · 10⁻¹⁹ C ist die Ladung eines Protons (bzw. der Betrag der Elektronenladung).',
        },
        {
          question: 'Wie ändert sich die im Kondensator gespeicherte Energie, wenn die Spannung verdoppelt wird?',
          options: [
            'Sie verdoppelt sich',
            'Sie vervierfacht sich',
            'Sie halbiert sich',
            'Sie bleibt gleich',
            'Sie verachtfacht sich',
          ],
          correctIndex: 1,
          explanation: 'W = ½·C·U². Bei Verdopplung von U: W → ½·C·(2U)² = 4·½·C·U². Die Energie vervierfacht sich.',
        },
      ],
    },
    {
      id: 'phys-kap6-2',
      title: 'Stromkreise',
      diagram: 'circuit',
      content: `**Elektrischer Strom I** ist gerichtete Bewegung von Ladungsträgern. Definition: I = Q/t. Einheit: Ampere (A): 1 A = 1 C/s. Die konventionelle Stromrichtung verläuft von + nach - (technische Stromrichtung). Elektronen fließen von - nach + (physikalische Stromrichtung).

**Spannung U** ist die Potenzialdifferenz zwischen zwei Punkten. Sie beschreibt die Energie pro Ladung: U = W/Q. Einheit: Volt (V): 1 V = 1 J/C. Spannung ist die treibende Kraft für Strom. Ohne Spannung kein Strom.

**Ohmsches Gesetz**: U = R · I. Der **elektrische Widerstand R** wird in Ohm (Ω) gemessen: 1 Ω = 1 V/A. Der Widerstand eines Leiters: R = ρ · l/A. ρ ist der spezifische Widerstand, l die Länge, A die Querschnittsfläche. Niedriges ρ (Metalle) = gute Leiter. Hohes ρ (Kunststoffe) = Isolatoren.

**Reihenschaltung**: Widerstände addieren sich: Rges = R₁ + R₂ + R₃. Strom überall gleich, Spannung teilt sich auf. **Parallelschaltung**: Leitwerte addieren sich: 1/Rges = 1/R₁ + 1/R₂ + 1/R₃. Spannung überall gleich, Strom teilt sich auf.

**Kirchhoffsche Regeln**: **Knotenregel** (1. Gesetz): Summe aller zufließenden Ströme = Summe aller abfließenden Ströme (ΣI_zu = ΣI_ab). Folgt aus der Ladungserhaltung. **Maschenregel** (2. Gesetz): Summe aller Spannungen in einer geschlossenen Masche = 0 (ΣU = 0). Folgt aus der Energieerhaltung.`,
      merksätze: [
        'Ohmsches Gesetz: U = R·I. Reihenschaltung: Rges = R₁ + R₂ (gleicher Strom). Parallelschaltung: 1/Rges = 1/R₁ + 1/R₂ (gleiche Spannung).',
        'Kirchhoff: Knotenregel ΣI = 0 (Ladungserhaltung). Maschenregel ΣU = 0 (Energieerhaltung). Strom I = Q/t, Spannung U = W/Q.',
      ],
      altfrage: {
        question: 'Zwei Widerstände R₁ = 6 Ω und R₂ = 3 Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
        answer: '1/Rges = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → Rges = 2 Ω. Der Gesamtwiderstand der Parallelschaltung ist immer kleiner als der kleinste Einzelwiderstand.',
      },
      klinischerBezug:
        'Das **EKG** misst Spannungsdifferenzen (typisch 1–3 mV) zwischen Elektroden an der Körperoberfläche, die durch die Erregungsausbreitung im Herzmuskel entstehen. Der menschliche Körper hat einen Widerstand von ca. 500–1000 Ω (bei feuchter Haut). **Ströme ab 50 mA** durch das Herz können **Kammerflimmern** auslösen. Daher sind Schutzmaßnahmen gegen elektrischen Strom lebenswichtig.',
      selfTest: [
        {
          question: 'Durch einen Widerstand von 100 Ω fließt ein Strom von 0,2 A. Wie groß ist die Spannung?',
          options: ['500 V', '20 V', '0,002 V', '2 V', '200 V'],
          correctIndex: 1,
          explanation: 'U = R · I = 100 Ω · 0,2 A = 20 V.',
        },
        {
          question: 'Drei Widerstände zu je 30 Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
          options: ['90 Ω', '10 Ω', '30 Ω', '15 Ω', '3 Ω'],
          correctIndex: 1,
          explanation: '1/Rges = 1/30 + 1/30 + 1/30 = 3/30 = 1/10 → Rges = 10 Ω. Drei gleiche Widerstände parallel: Rges = R/3.',
        },
        {
          question: 'Die Knotenregel von Kirchhoff basiert auf:',
          options: [
            'der Energieerhaltung',
            'der Ladungserhaltung',
            'dem Ohmschen Gesetz',
            'der Impulserhaltung',
            'der Massenerhaltung',
          ],
          correctIndex: 1,
          explanation: 'Die Knotenregel (ΣI = 0 an jedem Knoten) basiert auf der Ladungserhaltung: Ladung kann in einem Knoten weder erzeugt noch vernichtet werden.',
        },
      ],
    },
    {
      id: 'phys-kap6-3',
      title: 'Elektrische Leistung',
      content: `**Elektrische Leistung** ist die pro Zeit umgesetzte Energie: P = U · I. Durch Einsetzen des Ohmschen Gesetzes: P = I² · R und P = U²/R. Einheit: Watt (1 W = 1 V · A). Diese drei Formeln sind prüfungsrelevant. P = I²·R: Bei gegebenem Widerstand steigt die Verlustleistung quadratisch mit dem Strom. P = U²/R: Bei gegebener Spannung verbraucht kleinerer Widerstand mehr Leistung.

**Elektrische Energie**: Häufig in Kilowattstunden (kWh). Umrechnung: 1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J = 3,6 MJ. Berechnung: W = P · t = U · I · t.

**Joulesche Wärme**: In einem Leiter wird elektrische Energie in Wärme umgewandelt: Q = I² · R · t. Dieses Prinzip nutzen Heizgeräte, Toaster, Haartrockner. In Hochspannungsleitungen ist Joulesche Wärme unerwünscht. Deshalb wird Energie mit hoher Spannung und niedrigem Strom transportiert (P_Verlust = I²·R ist bei kleinem I minimal).`,
      merksätze: [
        'Elektrische Leistung: P = U·I = I²·R = U²/R. Einheit: 1 Watt = 1 V·A. Elektrische Energie: W = P·t.',
        'Joulesche Wärme: Q = I²·R·t. Hochspannungsübertragung minimiert Leitungsverluste (P_Verlust = I²·R). 1 kWh = 3,6 MJ.',
      ],
      altfrage: {
        question: 'Ein Wasserkocher (230 V, 2000 W) läuft 3 Minuten. Wie viel Energie verbraucht er?',
        answer: 'W = P·t = 2000 W · 180 s = 360000 J = 360 kJ = 0,1 kWh.',
      },
      klinischerBezug:
        'In der **Elektrochirurgie** (Hochfrequenzchirurgie) wird hochfrequenter Strom (300 kHz–3 MHz) mit 30–400 W eingesetzt, um Gewebe zu schneiden oder zu koagulieren. Bei monopolarer Technik fließt der Strom durch den Körper zu einer Neutralelektrode. Die hohe Stromdichte an der kleinen Aktivelektrode erzeugt genug Wärme zum Schneiden (P = I²·R). An der großen Neutralelektrode entsteht keine Verbrennung (niedrige Stromdichte).',
      selfTest: [
        {
          question: 'Eine Glühbirne ist an 230 V angeschlossen und zieht 0,26 A. Wie groß ist die Leistung?',
          options: ['60 W', '230 W', '885 W', '0,001 W', '120 W'],
          correctIndex: 0,
          explanation: 'P = U·I = 230 V · 0,26 A ≈ 60 W.',
        },
        {
          question: 'Durch einen 50 Ω Widerstand fließt ein Strom von 2 A. Wie groß ist die umgesetzte Leistung?',
          options: ['100 W', '200 W', '25 W', '400 W', '50 W'],
          correctIndex: 1,
          explanation: 'P = I²·R = 4·50 = 200 W.',
        },
        {
          question: 'Warum wird Strom mit Hochspannung transportiert?',
          options: [
            'Hochspannung ist billiger zu erzeugen',
            'Bei hoher Spannung fließt weniger Strom, und die Verluste (P = I²·R) sinken',
            'Hochspannung geht nicht durch die Luft verloren',
            'Der Widerstand der Leitung wird durch Hochspannung reduziert',
            'Hochspannung erzeugt ein stärkeres Magnetfeld im Leiter',
          ],
          correctIndex: 1,
          explanation: 'P_Transport = U·I ist konstant. Bei hoher Spannung U ist der Strom I klein. Die Verlustleistung P_Verlust = I²·R sinkt dadurch quadratisch — bei 10-facher Spannung sinken die Verluste auf 1/100.',
        },
      ],
    },
    {
      id: 'phys-kap6-4',
      title: 'Magnetismus',
      content: `**Magnetismus** entsteht durch bewegte elektrische Ladungen. Jeder stromdurchflossene Leiter erzeugt ein Magnetfeld. Die **magnetische Flussdichte B** (auch magnetische Induktion) beschreibt die Stärke. Einheit: Tesla (T): 1 T = 1 V·s/m². Erdmagnetfeld: ca. 50 μT. Kühlschrankmagnet: ca. 5 mT. MRT-Scanner: 1,5–7 T.

Permanentmagnete haben immer Nord- und Südpol. **Magnetische Monopole existieren nicht.** Feldlinien verlaufen außerhalb vom Nordpol zum Südpol und bilden geschlossene Schleifen. Um einen stromdurchflossenen Leiter: konzentrische kreisförmige Feldlinien. Richtung: **Rechte-Hand-Regel** (Daumen = Stromrichtung, gekrümmte Finger = Feldlinien).

**Lorentzkraft** ist die Kraft auf eine bewegte Ladung im Magnetfeld: F = q · v · B · sin(α). α ist der Winkel zwischen Geschwindigkeit und Magnetfeld. Für einen stromdurchflossenen Leiter (Länge l): F = B · I · l · sin(α). Richtung: **Rechte-Hand-Regel (UVW)**: Zeigefinger = Geschwindigkeit (Ursache), Mittelfinger = Magnetfeld (Vermittlung), Daumen = Kraft (Wirkung). Die Lorentzkraft steht senkrecht auf v. Sie ändert nur die Richtung, nicht den Betrag der Geschwindigkeit. Geladene Teilchen werden auf Kreisbahnen abgelenkt.

Ein **Elektromagnet** ist eine stromdurchflossene Spule (Solenoid). Magnetfeld innerhalb: B = μ₀ · n · I. μ₀ = 4π · 10⁻⁷ T·m/A ist die magnetische Feldkonstante, n = N/l die Windungszahl pro Länge, I der Strom. Ein Eisenkern verstärkt das Feld um den Faktor μr (Eisen: μr ≈ 1000–5000). Vorteil: Feldstärke regelbar und abschaltbar.`,
      merksätze: [
        'Lorentzkraft: F = q·v·B·sin(α) (auf bewegte Ladung) bzw. F = B·I·l (auf stromdurchflossenen Leiter). Richtung: Rechte-Hand-Regel (UVW).',
        'Elektromagnet: B = μ₀·n·I. Eisenkern verstärkt das Feld um Faktor μr. Magnetische Monopole existieren nicht — Feldlinien sind geschlossene Schleifen.',
      ],
      altfrage: {
        question: 'Ein Elektron (q = 1,6·10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht zu einem Magnetfeld von B = 0,1 T. Wie groß ist die Lorentzkraft?',
        answer: 'F = q·v·B·sin(90°) = 1,6·10⁻¹⁹ · 10⁶ · 0,1 · 1 = 1,6·10⁻¹⁴ N. Da α = 90°, ist sin(α) = 1.',
      },
      klinischerBezug:
        'Die **Magnetresonanztomographie (MRT)** nutzt starke Magnetfelder (1,5–7 T) und Hochfrequenzpulse. Wasserstoffkerne (Protonen) im Körper richten sich im Magnetfeld aus und werden durch RF-Pulse angeregt. Beim Zurückkehren senden sie Signale aus, die zu Bildern verarbeitet werden. Die MRT ist besonders gut für Weichteilgewebe und arbeitet ohne ionisierende Strahlung. Kontraindikationen: metallische Implantate (Herzschrittmacher, Cochlea-Implantate).',
      selfTest: [
        {
          question: 'Die Lorentzkraft auf eine ruhende Ladung im Magnetfeld beträgt:',
          options: ['F = qB', 'F = qvB', '0 N', 'F = qE', 'F = mv²/r'],
          correctIndex: 2,
          explanation: 'F = q·v·B·sin(α). Bei v = 0 ist F = 0. Die Lorentzkraft wirkt nur auf bewegte Ladungen.',
        },
        {
          question: 'Wie ändert sich das Magnetfeld einer Spule, wenn der Strom verdoppelt wird?',
          options: [
            'Es halbiert sich',
            'Es verdoppelt sich',
            'Es vervierfacht sich',
            'Es bleibt gleich',
            'Es nimmt um den Faktor √2 zu',
          ],
          correctIndex: 1,
          explanation: 'B = μ₀·n·I. B ist proportional zu I, daher verdoppelt sich B bei doppeltem Strom.',
        },
        {
          question: 'In welche Richtung wirkt die Lorentzkraft auf eine positive Ladung, die sich nach rechts in einem Magnetfeld bewegt, das in den Bildschirm zeigt?',
          options: ['nach links', 'nach oben', 'nach unten', 'in den Bildschirm', 'aus dem Bildschirm heraus'],
          correctIndex: 1,
          explanation: 'Rechte-Hand-Regel: Zeigefinger nach rechts (v), Mittelfinger in den Bildschirm (B) → Daumen zeigt nach oben (F).',
        },
      ],
    },
    {
      id: 'phys-kap6-5',
      title: 'Induktion',
      content: `**Elektromagnetische Induktion**: Erzeugung einer Spannung durch zeitliche Änderung des magnetischen Flusses. Entdeckt von Michael Faraday 1831. Der **magnetische Fluss** Φ = B · A · cos(α) ist das Produkt aus magnetischer Flussdichte B, Fläche A und cos des Winkels α zwischen Feldrichtung und Flächennormale. Einheit: Weber (Wb): 1 Wb = 1 V·s = 1 T·m².

**Faradaysches Induktionsgesetz**: Uind = -N · dΦ/dt = -N · ΔΦ/Δt (für N Windungen). Eine Spannung wird induziert, wenn sich B, A, α oder eine Kombination zeitlich ändert.

**Lenzsche Regel** bestimmt die Richtung: Der induzierte Strom fließt so, dass sein Magnetfeld der Ursache der Induktion entgegenwirkt. Beispiel: Magnet wird in Spule hineinbewegt → induzierter Strom erzeugt ein Magnetfeld, das den Magneten abstößt. Magnet wird herausgezogen → anziehendes Feld. Die Lenzsche Regel folgt aus der Energieerhaltung. Das Minuszeichen in Uind = -N·ΔΦ/Δt ist der mathematische Ausdruck der Lenzschen Regel.

Der **Generator** wandelt mechanische in elektrische Energie um. Eine Spule rotiert in einem Magnetfeld. Durch die sich ändernde Fläche A·cos(ωt) entsteht sinusförmige Wechselspannung: U(t) = U₀ · sin(ωt). U₀ ist die Amplitude, ω = 2πf die Kreisfrequenz. Netzfrequenz in Europa: 50 Hz.

Der **Transformator** nutzt Induktion zur Umwandlung von Wechselspannungen. Zwei Spulen (Primär, Sekundär) auf gemeinsamem Eisenkern. Übersetzungsverhältnis: U₁/U₂ = N₁/N₂ und I₁/I₂ = N₂/N₁ (idealer Transformator). Leistung bleibt erhalten: U₁·I₁ = U₂·I₂.`,
      merksätze: [
        'Faradaysches Induktionsgesetz: Uind = -N·ΔΦ/Δt. Induktion entsteht durch zeitliche Änderung des magnetischen Flusses (Änderung von B, A oder α).',
        'Lenzsche Regel: Der induzierte Strom wirkt seiner Ursache entgegen. Transformator: U₁/U₂ = N₁/N₂, die Leistung bleibt erhalten (P₁ = P₂).',
      ],
      altfrage: {
        question: 'Ein idealer Transformator hat primär 1000 Windungen und sekundär 100 Windungen. Wie wird eine Primärspannung von 230 V transformiert?',
        answer: 'U₂ = U₁ · N₂/N₁ = 230 · 100/1000 = 23 V. Es handelt sich um einen Abwärtstransformator.',
      },
      klinischerBezug:
        'In der **transkraniellen Magnetstimulation (TMS)** wird durch schnelle Änderung des Magnetfeldes einer Spule am Kopf eine Spannung im Hirngewebe induziert, die Neuronen erregt. Die TMS wird diagnostisch (Messung der motorischen Leitungsgeschwindigkeit) und therapeutisch (Behandlung von Depressionen) eingesetzt. **Induktionsherde** erzeugen Wärme durch Induktion von Wirbelströmen im Topfboden.',
      selfTest: [
        {
          question: 'Wann wird in einer Spule eine Spannung induziert?',
          options: [
            'Wenn ein konstantes Magnetfeld durch die Spule verläuft',
            'Wenn sich der magnetische Fluss durch die Spule zeitlich ändert',
            'Wenn die Spule an eine Batterie angeschlossen wird',
            'Wenn die Spule erhitzt wird',
            'Wenn die Spule aus Kupfer statt aus Aluminium besteht',
          ],
          correctIndex: 1,
          explanation: 'Nach dem Faradayschen Gesetz wird eine Spannung nur bei zeitlicher Änderung des magnetischen Flusses induziert: Uind = -N·ΔΦ/Δt.',
        },
        {
          question: 'Ein idealer Transformator hat primär 500 und sekundär 2000 Windungen bei 100 V Eingangsspannung. Wie groß ist die Ausgangsspannung?',
          options: ['25 V', '100 V', '400 V', '200 V', '50 V'],
          correctIndex: 2,
          explanation: 'U₂ = U₁ · N₂/N₁ = 100 · 2000/500 = 400 V (Aufwärtstransformator).',
        },
        {
          question: 'Die Lenzsche Regel besagt:',
          options: [
            'Der induzierte Strom verstärkt die Flussänderung',
            'Der induzierte Strom wirkt der Flussänderung entgegen',
            'Der induzierte Strom ist immer konstant',
            'Die Induktion hängt nicht von der Geschwindigkeit ab',
            'Der induzierte Strom fließt nur in Spulen mit Eisenkern',
          ],
          correctIndex: 1,
          explanation: 'Die Lenzsche Regel: Der induzierte Strom fließt stets so, dass er seiner Ursache (der Flussänderung) entgegenwirkt. Dies folgt aus der Energieerhaltung.',
        },
      ],
    },
  ],
};
