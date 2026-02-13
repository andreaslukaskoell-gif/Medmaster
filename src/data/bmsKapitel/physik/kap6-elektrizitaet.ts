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
      content: `Die elektrische Ladung ist eine fundamentale Eigenschaft der Materie. Es gibt zwei Arten von Ladung: positive und negative. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die SI-Einheit der Ladung ist das Coulomb (C). Die Elementarladung e = 1,602 · 10⁻¹⁹ C ist die kleinste frei vorkommende Ladungsmenge — die Ladung eines Protons (+e) oder Elektrons (-e). Die elektrische Ladung ist eine Erhaltungsgröße: In einem abgeschlossenen System bleibt die Gesamtladung konstant (Ladungserhaltungssatz). Ladung kann nicht erzeugt oder vernichtet werden, sondern nur getrennt oder neutralisiert werden. Die Quantisierung der Ladung (nur ganzzahlige Vielfache von e) und die Ladungserhaltung gehören zu den fundamentalsten Prinzipien der Physik.

Das Coulomb-Gesetz beschreibt die Kraft zwischen zwei punktförmigen Ladungen q₁ und q₂ im Abstand r: F = k · q₁ · q₂ / r², wobei k = 1/(4πε₀) ≈ 9 · 10⁹ N·m²/C² die Coulomb-Konstante ist und ε₀ die elektrische Feldkonstante (Permittivität des Vakuums). Die Kraft ist anziehend bei ungleichnamigen und abstoßend bei gleichnamigen Ladungen und nimmt mit dem Quadrat des Abstands ab (Abstandsgesetz). Das Coulomb-Gesetz hat die gleiche mathematische Struktur wie das Gravitationsgesetz, ist aber um viele Größenordnungen stärker. Das elektrische Feld E beschreibt den Zustand des Raumes um eine Ladung und wird definiert als Kraft pro Ladungseinheit: E = F/q. Die Einheit ist V/m (Volt pro Meter) oder N/C. Feldlinien zeigen von positiven zu negativen Ladungen und geben die Richtung der Kraft auf eine positive Probeladung an.

Der Kondensator ist ein Bauelement zur Speicherung elektrischer Energie. Ein Plattenkondensator besteht aus zwei parallelen Metallplatten mit der Fläche A im Abstand d. Seine Kapazität beträgt C = ε₀ · εr · A/d, wobei εr die relative Permittivität (Dielektrizitätszahl) des Materials zwischen den Platten ist. Die Einheit der Kapazität ist das Farad: 1 F = 1 C/V. Die im Kondensator gespeicherte Energie beträgt W = ½ · C · U² = ½ · Q · U = Q²/(2C), wobei U die Spannung und Q = C · U die gespeicherte Ladung ist. In der Medizin sind Kondensatoren essenziell für Defibrillatoren: Sie werden langsam aufgeladen und geben die gespeicherte Energie dann schlagartig als Stromstoß ab, um das Herz bei Kammerflimmern zu depolarisieren. Auch EKG-Geräte nutzen Kondensatoren zur Signalfilterung.`,
      merksätze: [
        'Coulomb-Gesetz: F = k·q₁·q₂/r². Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die Kraft nimmt mit r² ab.',
        'Kondensator: C = ε₀·εr·A/d, gespeicherte Energie: W = ½·C·U². Elementarladung: e = 1,602·10⁻¹⁹ C.',
      ],
      altfrage: {
        question: 'Wie ändert sich die Coulomb-Kraft, wenn der Abstand zwischen zwei Ladungen verdreifacht wird?',
        answer: 'F ∝ 1/r². Bei Verdreifachung des Abstands: F_neu = F/(3²) = F/9. Die Kraft wird auf ein Neuntel reduziert.',
      },
      klinischerBezug:
        'Ein Defibrillator nutzt einen Kondensator, der auf bis zu 5000 V aufgeladen wird und dann 200–360 J elektrische Energie in wenigen Millisekunden an den Herzmuskel abgibt. Die Depolarisation aller Herzmuskelzellen gleichzeitig soll den normalen Sinusrhythmus wiederherstellen. Die Ladung auf Zellmembranen (ca. -70 mV Ruhepotenzial) basiert auf dem Prinzip des Kondensators.',
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
      content: `Der elektrische Strom I ist die gerichtete Bewegung elektrischer Ladungsträger und wird als Ladung pro Zeit definiert: I = Q/t. Seine SI-Einheit ist das Ampere (A): 1 A = 1 C/s. Die konventionelle Stromrichtung verläuft von Plus nach Minus (technische Stromrichtung), während die Elektronen tatsächlich von Minus nach Plus fließen (physikalische Stromrichtung). Die elektrische Spannung U ist die Potenzialdifferenz zwischen zwei Punkten und beschreibt die Energie pro Ladungseinheit: U = W/Q. Ihre Einheit ist das Volt: 1 V = 1 J/C. Die Spannung ist die treibende Kraft für den Strom — ohne Spannung fließt kein Strom.

Das Ohmsche Gesetz beschreibt den Zusammenhang zwischen Spannung, Strom und Widerstand: U = R · I. Der elektrische Widerstand R wird in Ohm (Ω) gemessen: 1 Ω = 1 V/A. Der Widerstand eines Leiters hängt von seiner Geometrie und dem Material ab: R = ρ · l/A, wobei ρ der spezifische Widerstand, l die Länge und A die Querschnittsfläche des Leiters ist. Materialien mit niedrigem ρ (Metalle) sind gute Leiter, Materialien mit hohem ρ (Kunststoffe, Keramik) sind Isolatoren. Bei der Reihenschaltung von Widerständen addieren sich die Einzelwiderstände: Rges = R₁ + R₂ + R₃. Der Strom ist überall gleich, die Spannung teilt sich auf. Bei der Parallelschaltung addieren sich die Leitwerte: 1/Rges = 1/R₁ + 1/R₂ + 1/R₃. Die Spannung ist überall gleich, der Strom teilt sich auf.

Die Kirchhoffschen Regeln sind fundamentale Gesetze zur Analyse von Stromkreisen. Die Knotenregel (1. Kirchhoffsches Gesetz) besagt, dass die Summe aller in einen Knoten fließenden Ströme gleich der Summe aller abfließenden Ströme ist: ΣI_zu = ΣI_ab. Sie folgt aus der Ladungserhaltung. Die Maschenregel (2. Kirchhoffsches Gesetz) besagt, dass die Summe aller Spannungen in einer geschlossenen Masche null ergibt: ΣU = 0. Sie folgt aus der Energieerhaltung. Mit diesen beiden Regeln lässt sich jeder beliebig komplexe Gleichstromkreis berechnen. In der Medizin ist das Verständnis von Stromkreisen essenziell für die Elektrokardiographie (EKG), bei der die elektrischen Potenziale des Herzens an der Körperoberfläche gemessen werden, sowie für die Gefahren des elektrischen Stroms (Stromschlag).`,
      merksätze: [
        'Ohmsches Gesetz: U = R·I. Reihenschaltung: Rges = R₁ + R₂ (gleicher Strom). Parallelschaltung: 1/Rges = 1/R₁ + 1/R₂ (gleiche Spannung).',
        'Kirchhoff: Knotenregel ΣI = 0 (Ladungserhaltung). Maschenregel ΣU = 0 (Energieerhaltung). Strom I = Q/t, Spannung U = W/Q.',
      ],
      altfrage: {
        question: 'Zwei Widerstände R₁ = 6 Ω und R₂ = 3 Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
        answer: '1/Rges = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → Rges = 2 Ω. Der Gesamtwiderstand der Parallelschaltung ist immer kleiner als der kleinste Einzelwiderstand.',
      },
      klinischerBezug:
        'Das EKG misst Spannungsdifferenzen (typisch 1–3 mV) zwischen verschiedenen Elektroden an der Körperoberfläche, die durch die Erregungsausbreitung im Herzmuskel entstehen. Der menschliche Körper hat einen Widerstand von ca. 500–1000 Ω (bei feuchter Haut). Ströme ab 50 mA durch das Herz können Kammerflimmern auslösen — daher sind Schutzmaßnahmen gegen elektrischen Strom lebenswichtig.',
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
      content: `Die elektrische Leistung beschreibt die pro Zeiteinheit umgesetzte elektrische Energie und berechnet sich als Produkt aus Spannung und Stromstärke: P = U · I. Durch Einsetzen des Ohmschen Gesetzes (U = R · I bzw. I = U/R) ergeben sich zwei weitere äquivalente Darstellungen: P = I² · R und P = U²/R. Die SI-Einheit der Leistung ist das Watt (1 W = 1 V · A). Diese drei Formeln sind für die MedAT-Prüfung essenziell und sollten sicher angewendet werden können. Die Form P = I²·R zeigt, dass bei gegebenem Widerstand die Verlustleistung quadratisch mit dem Strom steigt. Die Form P = U²/R zeigt, dass bei gegebener Spannung ein kleinerer Widerstand mehr Leistung verbraucht.

Die elektrische Energie wird häufig in der Einheit Kilowattstunde (kWh) angegeben, besonders bei der Abrechnung von Stromverbrauch. Die Umrechnung lautet: 1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J = 3,6 MJ. Ein typischer Haushalt in Österreich verbraucht etwa 3500 kWh pro Jahr. Die Berechnung der elektrischen Energie erfolgt über W = P · t = U · I · t. Bei der Wärmeentwicklung in einem Leiter (Joulesche Wärme) wird die elektrische Energie vollständig in Wärme umgewandelt: Q = I² · R · t. Dieses Prinzip wird in Heizgeräten, Toastern, Haartrocknern und Schmelzsicherungen genutzt. In Hochspannungsleitungen ist die Joulesche Wärme unerwünscht, weshalb elektrische Energie mit hoher Spannung und niedrigem Strom transportiert wird (P_Verlust = I²·R ist bei kleinem I minimal).

In der Medizin ist die elektrische Leistung bei vielen diagnostischen und therapeutischen Verfahren relevant. Die Hochfrequenzchirurgie (Elektrochirurgie) nutzt hochfrequenten Wechselstrom (300 kHz–3 MHz), um Gewebe gezielt zu schneiden oder zu koagulieren. Die dabei eingesetzte Leistung beträgt 30–400 W. Beim Defibrillator wird die im Kondensator gespeicherte Energie (W = ½·C·U²) in wenigen Millisekunden an den Herzmuskel abgegeben, was einer kurzzeitigen Leistung von mehreren Kilowatt entspricht. Die TENS-Therapie (transkutane elektrische Nervenstimulation) arbeitet dagegen mit sehr geringen Leistungen zur Schmerzbehandlung. Die sichere Anwendung elektrischer Geräte in der Medizin erfordert ein fundiertes Verständnis der zugrunde liegenden physikalischen Zusammenhänge.`,
      merksätze: [
        'Elektrische Leistung: P = U·I = I²·R = U²/R. Einheit: 1 Watt = 1 V·A. Elektrische Energie: W = P·t.',
        'Joulesche Wärme: Q = I²·R·t. Hochspannungsübertragung minimiert Leitungsverluste (P_Verlust = I²·R). 1 kWh = 3,6 MJ.',
      ],
      altfrage: {
        question: 'Ein Wasserkocher (230 V, 2000 W) läuft 3 Minuten. Wie viel Energie verbraucht er?',
        answer: 'W = P·t = 2000 W · 180 s = 360000 J = 360 kJ = 0,1 kWh.',
      },
      klinischerBezug:
        'In der Elektrochirurgie wird hochfrequenter Strom mit 30–400 W eingesetzt. Bei monopolarer Technik fließt der Strom durch den Körper zu einer Neutralelektrode — die hohe Stromdichte an der kleinen Aktivelektrode erzeugt genug Wärme zum Schneiden (P = I²·R), während an der großen Neutralelektrode keine Verbrennung auftritt (niedrige Stromdichte).',
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
      content: `Magnetismus entsteht durch bewegte elektrische Ladungen. Jeder stromdurchflossene Leiter erzeugt ein Magnetfeld, dessen Stärke durch die magnetische Flussdichte B (auch magnetische Induktion) beschrieben wird. Die SI-Einheit ist das Tesla (T): 1 T = 1 V·s/m² = 1 kg/(A·s²). Das Erdmagnetfeld beträgt etwa 50 μT, ein Kühlschrankmagnet etwa 5 mT und ein MRT-Scanner 1,5–7 T. Permanentmagnete haben stets einen Nord- und einen Südpol — magnetische Monopole existieren nicht. Die Feldlinien verlaufen außerhalb des Magneten vom Nordpol zum Südpol und bilden stets geschlossene Schleifen. Um einen geraden stromdurchflossenen Leiter bilden sich konzentrische kreisförmige Feldlinien, deren Richtung durch die Rechte-Hand-Regel bestimmt wird: Zeigt der Daumen in Stromrichtung, geben die gekrümmten Finger die Richtung der Feldlinien an.

Die Lorentzkraft ist die Kraft, die ein Magnetfeld auf eine bewegte Ladung ausübt: F = q · v · B · sin(α), wobei α der Winkel zwischen Geschwindigkeit und Magnetfeld ist. Für einen stromdurchflossenen Leiter der Länge l im Magnetfeld gilt: F = B · I · l · sin(α). Die Richtung der Lorentzkraft steht senkrecht auf der Ebene von Geschwindigkeit und Magnetfeld und wird durch die Rechte-Hand-Regel (oder UVW-Regel) bestimmt: Zeigt der Zeigefinger in Richtung der Geschwindigkeit (v, Ursache), der Mittelfinger in Richtung des Magnetfelds (B, Vermittlung), so zeigt der Daumen in Richtung der Kraft (F, Wirkung). Da die Lorentzkraft stets senkrecht zur Geschwindigkeit steht, ändert sie nur die Richtung, nicht den Betrag der Geschwindigkeit — geladene Teilchen werden auf Kreisbahnen abgelenkt.

Ein Elektromagnet besteht aus einer Spule (Solenoid), die von Strom durchflossen wird. Das Magnetfeld innerhalb einer langen Spule ist näherungsweise homogen und beträgt B = μ₀ · n · I, wobei μ₀ = 4π · 10⁻⁷ T·m/A die magnetische Feldkonstante, n = N/l die Windungszahl pro Länge und I der Strom ist. Ein Eisenkern verstärkt das Feld um den Faktor der relativen Permeabilität μr (für Eisen: μr ≈ 1000–5000). Elektromagnete haben den Vorteil, dass ihre Feldstärke durch den Strom regelbar und abschaltbar ist. In der Medizin spielen Magnetfelder eine zentrale Rolle bei der Magnetresonanztomographie (MRT): Ein starkes statisches Magnetfeld (1,5–7 T) richtet die Wasserstoffkerne im Körper aus, und Hochfrequenzpulse regen sie an. Das Signal der rückkehrenden Kerne liefert detaillierte Bilder ohne ionisierende Strahlung.`,
      merksätze: [
        'Lorentzkraft: F = q·v·B·sin(α) (auf bewegte Ladung) bzw. F = B·I·l (auf stromdurchflossenen Leiter). Richtung: Rechte-Hand-Regel (UVW).',
        'Elektromagnet: B = μ₀·n·I. Eisenkern verstärkt das Feld um Faktor μr. Magnetische Monopole existieren nicht — Feldlinien sind geschlossene Schleifen.',
      ],
      altfrage: {
        question: 'Ein Elektron (q = 1,6·10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht zu einem Magnetfeld von B = 0,1 T. Wie groß ist die Lorentzkraft?',
        answer: 'F = q·v·B·sin(90°) = 1,6·10⁻¹⁹ · 10⁶ · 0,1 · 1 = 1,6·10⁻¹⁴ N. Da α = 90°, ist sin(α) = 1.',
      },
      klinischerBezug:
        'Die Magnetresonanztomographie (MRT) nutzt starke Magnetfelder (1,5–7 T) und Hochfrequenzpulse. Wasserstoffkerne (Protonen) im Körper richten sich im Magnetfeld aus und werden durch RF-Pulse angeregt. Beim Zurückkehren in den Grundzustand senden sie Signale aus, die zu Bildern verarbeitet werden. Die MRT ist besonders gut für Weichteilgewebe und arbeitet ohne ionisierende Strahlung.',
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
      content: `Die elektromagnetische Induktion, entdeckt von Michäl Faraday 1831, beschreibt die Erzeugung einer elektrischen Spannung durch die zeitliche Änderung des magnetischen Flusses. Der magnetische Fluss Φ = B · A · cos(α) ist das Produkt aus magnetischer Flussdichte B, der durchsetzten Fläche A und dem Kosinus des Winkels α zwischen Feldrichtung und Flächennormale. Seine Einheit ist das Weber: 1 Wb = 1 V·s = 1 T·m². Das Faradaysche Induktionsgesetz besagt, dass die induzierte Spannung gleich der negativen zeitlichen Änderung des magnetischen Flusses ist: Uind = -N · dΦ/dt = -N · ΔΦ/Δt (für N Windungen einer Spule). Eine Spannung wird also induziert, wenn sich entweder B, A, α oder eine Kombination davon zeitlich ändert.

Die Lenzsche Regel bestimmt die Richtung des induzierten Stroms: Der induzierte Strom fließt stets so, dass sein Magnetfeld der Ursache der Induktion entgegenwirkt. Wird beispielsweise ein Magnet in eine Spule hineinbewegt, erzeugt der induzierte Strom ein Magnetfeld, das den Magneten abstößt und so der Flussänderung entgegenwirkt. Wird der Magnet herausgezogen, erzeugt der Strom ein anziehendes Feld. Die Lenzsche Regel ist eine Konsequenz des Energieerhaltungssatzes: Würde der induzierte Strom die Flussänderung verstärken, entstünde Energie aus dem Nichts (Perpetuum mobile). Das Minuszeichen im Faradayschen Gesetz (Uind = -N·ΔΦ/Δt) ist der mathematische Ausdruck der Lenzschen Regel.

Der Generator wandelt mechanische Energie in elektrische Energie um, indem eine Spule in einem Magnetfeld rotiert wird. Durch die sich ständig ändernde Fläche A·cos(ωt) entsteht eine sinusförmige Wechselspannung: U(t) = U₀ · sin(ωt), wobei U₀ die Amplitude und ω = 2πf die Kreisfrequenz ist. Die Netzfrequenz in Europa beträgt 50 Hz. Der Transformator nutzt die Induktion zur Umwandlung von Wechselspannungen. Er besteht aus zwei Spulen (Primär- und Sekundärspule) auf einem gemeinsamen Eisenkern. Das Übersetzungsverhältnis lautet: U₁/U₂ = N₁/N₂ und I₁/I₂ = N₂/N₁ (idealer Transformator ohne Verluste). Die Leistung bleibt erhalten: U₁·I₁ = U₂·I₂. Transformatoren werden in der Energieversorgung eingesetzt, um die Spannung für die Hochspannungsübertragung heraufzusetzen und vor dem Verbraucher wieder herabzusetzen.`,
      merksätze: [
        'Faradaysches Induktionsgesetz: Uind = -N·ΔΦ/Δt. Induktion entsteht durch zeitliche Änderung des magnetischen Flusses (Änderung von B, A oder α).',
        'Lenzsche Regel: Der induzierte Strom wirkt seiner Ursache entgegen. Transformator: U₁/U₂ = N₁/N₂, die Leistung bleibt erhalten (P₁ = P₂).',
      ],
      altfrage: {
        question: 'Ein idealer Transformator hat primär 1000 Windungen und sekundär 100 Windungen. Wie wird eine Primärspannung von 230 V transformiert?',
        answer: 'U₂ = U₁ · N₂/N₁ = 230 · 100/1000 = 23 V. Es handelt sich um einen Abwärtstransformator.',
      },
      klinischerBezug:
        'In der transkraniellen Magnetstimulation (TMS) wird durch eine schnelle Änderung des Magnetfeldes einer Spule am Kopf eine Spannung im Hirngewebe induziert, die Neuronen erregt. Die TMS wird diagnostisch (Messung der motorischen Leitungsgeschwindigkeit) und therapeutisch (Behandlung von Depressionen) eingesetzt. Auch Induktionsherde erzeugen Wärme durch Induktion von Wirbelströmen im Topfboden.',
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
