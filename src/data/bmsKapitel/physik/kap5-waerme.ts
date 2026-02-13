import type { Kapitel } from '../types';

export const physKap5: Kapitel = {
  id: 'phys-kap5',
  title: 'Wärmelehre',
  subject: 'physik',
  icon: '🌡️',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap5-1',
      title: 'Temperatur & Wärme',
      content: `Die Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes. Je schneller sich die Atome und Moleküle bewegen, desto höher ist die Temperatur. In der Physik wird die Temperatur in Kelvin (K) gemessen — der SI-Einheit der Temperatur. Der absolute Nullpunkt bei 0 K = -273,15 °C ist die tiefstmögliche Temperatur, bei der die Teilchenbewegung ihr Minimum erreicht (Quantenmechanisch: Nullpunktsenergie). Die Umrechnung zwischen Celsius und Kelvin ist einfach: T(K) = T(°C) + 273,15. Die Fahrenheit-Skala wird vor allem in den USA verwendet und spielt für die MedAT-Prüfung eine untergeordnete Rolle.

Wärme Q ist eine Form der Energieübertragung zwischen Körpern unterschiedlicher Temperatur. Wärme fließt stets vom wärmeren zum kälteren Körper, bis ein thermisches Gleichgewicht erreicht ist. Die Wärmemenge, die nötig ist, um einen Körper zu erwärmen, berechnet sich mit Q = m · c · ΔT, wobei m die Masse, c die spezifische Wärmekapazität und ΔT = T₂ - T₁ die Temperaturänderung ist. Die spezifische Wärmekapazität c gibt an, wie viel Energie benötigt wird, um 1 kg eines Stoffes um 1 K (oder 1 °C) zu erwärmen. Wasser hat mit c = 4186 J/(kg·K) eine besonders hohe spezifische Wärmekapazität — es braucht also viel Energie, um Wasser zu erwärmen, gibt aber auch viel Energie beim Abkühlen ab. Diese Eigenschaft macht Wasser zu einem hervorragenden Wärmespeicher.

Die hohe Wärmekapazität des Wassers hat fundamentale Bedeutung für den menschlichen Körper, der zu etwa 60 % aus Wasser besteht. Sie sorgt dafür, dass die Körpertemperatur relativ stabil bleibt und nicht bei jeder Stoffwechselaktivität stark schwankt. Die Wärmekapazität des gesamten Körpers beträgt etwa 3,5 kJ/(kg·K). Bei Mischungsaufgaben gilt: Die vom heißen Körper abgegebene Wärmemenge ist gleich der vom kalten Körper aufgenommenen (Richmannsche Mischungsregel): m₁ · c₁ · (T₁ - Tm) = m₂ · c₂ · (Tm - T₂), wobei Tm die Mischungstemperatur ist. Diese Gleichung wird häufig in Prüfungen abgefragt und sollte sicher umgestellt werden können. Auch die Kalorimetrie — die experimentelle Bestimmung von Wärmemengen — basiert auf diesem Prinzip.`,
      merksätze: [
        'Wärmemenge: Q = m·c·ΔT. Die spezifische Wärmekapazität von Wasser beträgt c = 4186 J/(kg·K) — die höchste aller gewöhnlichen Flüssigkeiten.',
        'Temperaturskalen: T(K) = T(°C) + 273,15. Der absolute Nullpunkt liegt bei 0 K = -273,15 °C. Wärme fließt immer von warm nach kalt.',
      ],
      altfrage: {
        question: 'Wie viel Energie wird benötigt, um 2 kg Wasser von 20 °C auf 80 °C zu erwärmen? (c = 4200 J/(kg·K))',
        answer: 'Q = m·c·ΔT = 2 · 4200 · (80-20) = 2 · 4200 · 60 = 504000 J = 504 kJ.',
      },
      klinischerBezug:
        'Die hohe Wärmekapazität des Wassers stabilisiert die Körpertemperatur. Fieber (z. B. 39 °C statt 37 °C) erfordert eine beachtliche Energiemenge: Für einen 70 kg schweren Körper: Q = 70 · 3500 · 2 ≈ 490 kJ. Therapeutische Hypothermie nach Herzstillstand (Kühlung auf 33 °C) nutzt dieses Prinzip zur Neuroprotektion.',
      selfTest: [
        {
          question: 'Welche Temperatur entspricht 0 °C in Kelvin?',
          options: ['0 K', '100 K', '273,15 K', '-273,15 K', '373,15 K'],
          correctIndex: 2,
          explanation: 'T(K) = T(°C) + 273,15 = 0 + 273,15 = 273,15 K.',
        },
        {
          question: 'Warum kühlt ein See im Herbst langsamer ab als die Luft?',
          options: [
            'Wasser leitet Wärme schlecht',
            'Wasser hat eine hohe spezifische Wärmekapazität',
            'Wasser reflektiert Sonnenlicht',
            'Wasser ist weniger dicht als Luft',
            'Wasser absorbiert keine Infrarotstrahlung',
          ],
          correctIndex: 1,
          explanation: 'Wasser hat eine sehr hohe spezifische Wärmekapazität (c ≈ 4200 J/(kg·K)), daher speichert es viel Energie und gibt diese nur langsam ab.',
        },
        {
          question: 'Wie viel Energie braucht man, um 0,5 kg Wasser um 10 K zu erwärmen? (c = 4200 J/(kg·K))',
          options: ['2100 J', '21000 J', '210 J', '42000 J', '4200 J'],
          correctIndex: 1,
          explanation: 'Q = m·c·ΔT = 0,5 · 4200 · 10 = 21000 J = 21 kJ.',
        },
      ],
    },
    {
      id: 'phys-kap5-2',
      title: 'Aggregatzustandsänderungen',
      content: `Stoffe können in drei Aggregatzuständen vorliegen: fest, flüssig und gasförmig. Der Übergang zwischen diesen Zuständen erfordert die Zufuhr oder Abgabe von Energie, ohne dass sich dabei die Temperatur ändert. Beim Schmelzen (fest → flüssig) muss die Schmelzwärme Qs = m · qs zugeführt werden, wobei qs die spezifische Schmelzwärme ist. Für Wasser beträgt qs = 334 kJ/kg. Beim Erstarren (flüssig → fest) wird dieselbe Energiemenge wieder frei. Während des gesamten Schmelz- bzw. Erstarrungsvorgangs bleibt die Temperatur konstant bei der Schmelztemperatur (für Wasser: 0 °C bei Normaldruck). Die zugeführte Energie wird verwendet, um die regelmäßige Kristallstruktur aufzubrechen, nicht um die Temperatur zu erhöhen.

Beim Verdampfen (flüssig → gasförmig) muss die Verdampfungswärme Qv = m · qv zugeführt werden. Für Wasser beträgt qv = 2257 kJ/kg — deutlich mehr als die Schmelzwärme, da beim Verdampfen alle intermolekularen Bindungen überwunden werden müssen. Beim Kondensieren (gasförmig → flüssig) wird diese Energie wieder freigesetzt. Der Siedepunkt ist druckabhängig: Bei niedrigerem Druck (z. B. auf einem hohen Berg) siedet Wasser bei niedrigerer Temperatur, bei höherem Druck bei höherer Temperatur (Schnellkochtopf-Prinzip). Die Sublimation bezeichnet den direkten Übergang von fest zu gasförmig (z. B. Trockeneis), die Resublimation den umgekehrten Vorgang (z. B. Reifbildung).

Das Phasendiagramm stellt die Aggregatzustände eines Stoffes in Abhängigkeit von Druck und Temperatur dar. Die Grenzkurven trennen die Bereiche der drei Phasen voneinander. Am Tripelpunkt köxistieren alle drei Phasen gleichzeitig (für Wasser bei 0,01 °C und 611 Pa). Oberhalb des kritischen Punktes gibt es keinen Unterschied mehr zwischen flüssiger und gasförmiger Phase — man spricht vom überkritischen Zustand. Die anomale Dichteeigenschaft des Wassers (maximale Dichte bei 4 °C) ist biologisch von immenser Bedeutung: Eis schwimmt auf Wasser, wodurch Seen von oben zufrieren und das Leben darunter geschützt wird. In der Medizin spielt die Verdampfungswärme eine große Rolle beim Schwitzen: Jeder Liter verdunsteter Schweiß entzieht dem Körper etwa 2257 kJ Wärme und ist damit der effektivste Mechanismus der Thermoregulation.`,
      merksätze: [
        'Schmelzwärme: Qs = m·qs (für Wasser: qs = 334 kJ/kg). Verdampfungswärme: Qv = m·qv (für Wasser: qv = 2257 kJ/kg). Während des Phasenübergangs bleibt T konstant.',
        'Tripelpunkt: Alle drei Phasen köxistieren. Der Siedepunkt ist druckabhängig. Wasser hat seine maximale Dichte bei 4 °C (Anomalie des Wassers).',
      ],
      altfrage: {
        question: 'Wie viel Energie wird benötigt, um 0,5 kg Eis bei 0 °C vollständig zu schmelzen? (qs = 334 kJ/kg)',
        answer: 'Qs = m · qs = 0,5 · 334 = 167 kJ. Die Temperatur bleibt während des gesamten Schmelzvorgangs bei 0 °C.',
      },
      klinischerBezug:
        'Das Schwitzen ist der effektivste Mechanismus der Thermoregulation. Die Verdunstung von 1 Liter Schweiß entzieht dem Körper ca. 2257 kJ Wärme. Bei Hitzschlag versagt dieser Mechanismus. Kältepackungen (Cold Packs) nutzen die Schmelzwärme von Eis bzw. die endotherme Lösung von Salzen zur lokalen Kühlung bei Sportverletzungen.',
      selfTest: [
        {
          question: 'Während des Schmelzens eines Stoffes:',
          options: [
            'steigt die Temperatur kontinuierlich',
            'sinkt die Temperatur',
            'bleibt die Temperatur konstant',
            'ändert sich die Masse',
            'verdoppelt sich die Wärmekapazität',
          ],
          correctIndex: 2,
          explanation: 'Während des Phasenübergangs (Schmelzen) bleibt die Temperatur konstant. Die zugeführte Energie wird zum Aufbrechen der Kristallstruktur verwendet.',
        },
        {
          question: 'Die Verdampfungswärme von Wasser ist deutlich größer als die Schmelzwärme, weil:',
          options: [
            'Wasser bei 100 °C heißer ist als bei 0 °C',
            'beim Verdampfen alle intermolekularen Bindungen überwunden werden müssen',
            'Wasserdampf leichter ist als Eis',
            'der Druck beim Verdampfen höher ist',
            'die Moleküle beim Verdampfen ihre chemische Struktur ändern',
          ],
          correctIndex: 1,
          explanation: 'Beim Verdampfen müssen alle intermolekularen Bindungen (Wasserstoffbrückenbindungen) vollständig überwunden werden, was deutlich mehr Energie erfordert als das Aufbrechen der Kristallstruktur beim Schmelzen.',
        },
        {
          question: 'Am Tripelpunkt eines Stoffes:',
          options: [
            'existiert nur die feste Phase',
            'existieren zwei Phasen gleichzeitig',
            'existieren alle drei Phasen gleichzeitig',
            'existiert der Stoff nur als Gas',
            'ist der Druck immer gleich dem Normaldruck',
          ],
          correctIndex: 2,
          explanation: 'Der Tripelpunkt ist der einzige Punkt im Phasendiagramm, an dem feste, flüssige und gasförmige Phase gleichzeitig im Gleichgewicht stehen.',
        },
      ],
    },
    {
      id: 'phys-kap5-3',
      title: 'Wärmeübertragung',
      content: `Wärme kann auf drei grundlegende Arten übertragen werden: durch Wärmeleitung, Konvektion und Wärmestrahlung. Die Wärmeleitung (Konduktion) erfolgt durch direkte Übertragung kinetischer Energie zwischen benachbarten Teilchen ohne Materietransport. Gute Wärmeleiter sind Metalle (besonders Silber, Kupfer, Aluminium), schlechte Wärmeleiter (Isolatoren) sind Gase, Kunststoffe, Holz und Luft. Der Wärmestrom durch Leitung wird durch das Fouriersche Gesetz beschrieben: Q̇ = λ · A · ΔT/d, wobei λ die Wärmeleitfähigkeit des Materials (in W/(m·K)), A die Querschnittsfläche, ΔT die Temperaturdifferenz und d die Dicke des Materials ist. Luft hat eine sehr geringe Wärmeleitfähigkeit, weshalb ruhende Luftschichten hervorragend isolieren — das Prinzip hinter Doppelverglasung und Daunenjacken.

Die Konvektion ist Wärmeübertragung durch Strömung eines Fluids (Flüssigkeit oder Gas). Man unterscheidet natürliche (freie) Konvektion, die durch Dichteunterschiede aufgrund von Temperaturunterschieden angetrieben wird (warme Luft steigt auf, kalte sinkt ab), und erzwungene Konvektion, bei der die Strömung durch äußere Einflüsse wie Pumpen oder Ventilatoren erzeugt wird. Konvektion ist deutlich effizienter als Wärmeleitung allein, weshalb Heizungen in Räumen die Luft umwälzen und Warmwasserheizungen das Prinzip der Konvektion nutzen. In der Meteorologie treibt Konvektion Wind- und Wettersysteme an.

Die Wärmestrahlung (Infrarotstrahlung) ist die einzige Form der Wärmeübertragung, die kein Medium benötigt — sie erfolgt durch elektromagnetische Strahlung und funktioniert auch im Vakuum (so erreicht uns die Sonnenwärme durch den leeren Weltraum). Das Stefan-Boltzmann-Gesetz beschreibt die abgestrahlte Leistung eines Körpers: P = ε · σ · A · T⁴, wobei ε der Emissionsgrad (0 ≤ ε ≤ 1, für einen schwarzen Strahler ε = 1), σ = 5,67 · 10⁻⁸ W/(m²·K⁴) die Stefan-Boltzmann-Konstante, A die Oberfläche und T die absolute Temperatur in Kelvin ist. Bemerkenswert ist die T⁴-Abhängigkeit: Eine Verdopplung der Temperatur führt zu einer 16-fachen Strahlung. In der Medizin nutzt die Thermographie die Infrarotstrahlung des Körpers zur Temperaturmessung und Diagnostik (z. B. Erkennung von Entzündungen oder Durchblutungsstörungen).`,
      merksätze: [
        'Drei Arten der Wärmeübertragung: Leitung (Teilchenkontakt), Konvektion (Strömung), Strahlung (elektromagnetisch — auch im Vakuum).',
        'Stefan-Boltzmann-Gesetz: P = ε·σ·A·T⁴. Die Strahlungsleistung steigt mit der vierten Potenz der Temperatur. Luft ist ein schlechter Wärmeleiter → guter Isolator.',
      ],
      altfrage: {
        question: 'Warum isoliert eine Daunenjacke so gut?',
        answer: 'Daunen schließen viele kleine Luftkammern ein. Luft ist ein schlechter Wärmeleiter (λ ≈ 0,025 W/(m·K)), und die eingeschlossene Luft kann nicht konvektieren. Dadurch wird sowohl Wärmeleitung als auch Konvektion minimiert.',
      },
      klinischerBezug:
        'Der menschliche Körper verliert Wärme durch alle drei Mechanismen: Wärmeleitung (Kontakt mit kalten Oberflächen), Konvektion (Luftströmung an der Haut, Windchill-Effekt), Strahlung (Infrarotemission der Hautoberfläche, ca. 60 % des Gesamtwärmeverlusts in Ruhe). Die Infrarot-Thermographie nutzt die Wärmestrahlung zur Diagnostik von Durchblutungsstörungen und Entzündungen.',
      selfTest: [
        {
          question: 'Welche Form der Wärmeübertragung funktioniert auch im Vakuum?',
          options: ['Wärmeleitung', 'Konvektion', 'Wärmestrahlung', 'Alle drei', 'Keine davon'],
          correctIndex: 2,
          explanation: 'Nur die Wärmestrahlung benötigt kein Medium — sie wird durch elektromagnetische Wellen übertragen und funktioniert auch im Vakuum.',
        },
        {
          question: 'Laut Stefan-Boltzmann-Gesetz: Wie ändert sich die Strahlungsleistung, wenn die absolute Temperatur verdoppelt wird?',
          options: [
            'Sie verdoppelt sich',
            'Sie vervierfacht sich',
            'Sie verachtfacht sich',
            'Sie wird 16-mal so groß',
            'Sie wird 32-mal so groß',
          ],
          correctIndex: 3,
          explanation: 'P ∝ T⁴. Bei Verdopplung von T: P → (2T)⁴ = 16·T⁴. Die Strahlungsleistung wird 16-mal so groß.',
        },
        {
          question: 'Warum steigt warme Luft auf?',
          options: [
            'Warme Luft ist leichter, weil sich die Masse verringert',
            'Warme Luft dehnt sich aus, wird weniger dicht und erfährt Auftrieb',
            'Warme Luft wird vom Magnetfeld der Erde angezogen',
            'Die Schwerkraft wirkt auf warme Luft schwächer',
            'Warme Luft hat eine höhere elektrische Leitfähigkeit',
          ],
          correctIndex: 1,
          explanation: 'Warme Luft dehnt sich aus (bei konstantem Druck), ihre Dichte nimmt ab. Die umgebende kühlere, dichtere Luft sinkt nach unten und verdrängt die warme Luft nach oben (Auftrieb). Dies ist das Prinzip der natürlichen Konvektion.',
        },
      ],
    },
    {
      id: 'phys-kap5-4',
      title: 'Hauptsätze der Thermodynamik',
      content: `Die Hauptsätze der Thermodynamik sind fundamentale Naturgesetze, die die Grundregeln für alle Energieumwandlungen beschreiben. Der nullte Hauptsatz definiert den Begriff des thermischen Gleichgewichts: Wenn zwei Systeme jeweils im thermischen Gleichgewicht mit einem dritten System stehen, dann stehen sie auch untereinander im thermischen Gleichgewicht. Dieser scheinbar triviale Satz ist die physikalische Grundlage der Temperaturmessung — ein Thermometer zeigt die Temperatur korrekt an, weil es sich im thermischen Gleichgewicht mit dem zu messenden Körper befindet. Ohne den nullten Hauptsatz wäre der Temperaturbegriff nicht wohldefiniert.

Der erste Hauptsatz der Thermodynamik ist die Formulierung des Energieerhaltungssatzes für thermische Systeme: ΔU = Q + W (Vorzeichenkonvention: Q > 0 bei zugeführter Wärme, W > 0 bei am System verrichteter Arbeit). Die innere Energie U eines Systems kann sich nur durch Wärmezufuhr Q oder Arbeit W ändern. Ein Perpetuum mobile erster Art — eine Maschine, die Energie aus dem Nichts erzeugt — ist nach diesem Hauptsatz unmöglich. Die innere Energie eines idealen Gases hängt nur von der Temperatur ab: U = n · Cv · T (mit Cv als molare Wärmekapazität bei konstantem Volumen). Bei adiabatischen Prozessen (Q = 0) ändert sich die innere Energie nur durch Arbeit: ΔU = W. Bei isothermen Prozessen (ΔT = 0, also ΔU = 0) wird die zugeführte Wärme vollständig in Arbeit umgewandelt: Q = -W.

Der zweite Hauptsatz der Thermodynamik beschreibt die Richtung natürlicher Prozesse und führt die Entropie S als zentrale Größe ein. Er besagt in einer Formulierung: Wärme fließt nie spontan von einem kälteren zu einem wärmeren Körper (Clausius). In einer anderen Formulierung: Es ist unmöglich, eine periodisch arbeitende Maschine zu konstruieren, die ausschließlich Wärme in Arbeit umwandelt (Kelvin-Planck) — ein Perpetuum mobile zweiter Art ist unmöglich. Die Entropie ist ein Maß für die Unordnung eines Systems: ΔS ≥ Q/T. In einem abgeschlossenen System kann die Entropie nur zunehmen oder gleich bleiben — sie nimmt bei irreversiblen (natürlichen) Prozessen zu. Der zweite Hauptsatz erklärt, warum ein Ei sich nicht von selbst zusammensetzt, warum Wärme nicht spontan bergauf fließt und warum kein Motor einen Wirkungsgrad von 100 % erreichen kann. Der maximale Wirkungsgrad einer Wärmekraftmaschine wird durch den Carnot-Wirkungsgrad beschränkt: ηCarnot = 1 - Tkalt/Twarm.`,
      merksätze: [
        '0. Hauptsatz: Thermisches Gleichgewicht ist transitiv → Grundlage der Temperaturmessung. 1. Hauptsatz: ΔU = Q + W → Energieerhaltung, kein Perpetuum mobile 1. Art.',
        '2. Hauptsatz: Die Entropie eines abgeschlossenen Systems nimmt nie ab (ΔS ≥ 0). Wärme fließt spontan nur von warm nach kalt. Kein Perpetuum mobile 2. Art. Carnot: ηmax = 1 - Tkalt/Twarm.',
      ],
      altfrage: {
        question: 'Eine Wärmekraftmaschine arbeitet zwischen 600 K (heiß) und 300 K (kalt). Wie groß ist der maximale Wirkungsgrad?',
        answer: 'ηCarnot = 1 - Tkalt/Twarm = 1 - 300/600 = 1 - 0,5 = 0,5 = 50 %. Kein realer Motor kann diesen Wert überschreiten.',
      },
      klinischerBezug:
        'Der menschliche Körper unterliegt den Hauptsätzen der Thermodynamik. Die Stoffwechselenergie (1. Hauptsatz) wird in Arbeit und Wärme umgewandelt. Die Körpertemperatur von 37 °C wird aufrechterhalten, indem ständig Wärme an die kältere Umgebung abgegeben wird (2. Hauptsatz). Die Entropie der aufgenommenen Nahrung ist geringer als die der Ausscheidungsprodukte — der Körper erhöht die Entropie der Umgebung, um seine eigene niedrige Entropie aufrechtzürhalten.',
      selfTest: [
        {
          question: 'Der erste Hauptsatz der Thermodynamik besagt:',
          options: [
            'Wärme fließt immer von warm nach kalt',
            'Die Entropie nimmt stets zu',
            'Die innere Energie ändert sich durch Wärme und Arbeit: ΔU = Q + W',
            'Alle Körper im Gleichgewicht haben die gleiche Temperatur',
            'Der Wirkungsgrad jeder Maschine beträgt maximal 50 %',
          ],
          correctIndex: 2,
          explanation: 'Der erste Hauptsatz ist die Energieerhaltung für thermodynamische Systeme: ΔU = Q + W.',
        },
        {
          question: 'Was verbietet der zweite Hauptsatz der Thermodynamik?',
          options: [
            'Die Umwandlung von Arbeit in Wärme',
            'Den spontanen Wärmefluss von kalt nach warm',
            'Die Existenz des absoluten Nullpunkts',
            'Die Zunahme der inneren Energie',
            'Die Übertragung von Wärme durch Strahlung',
          ],
          correctIndex: 1,
          explanation: 'Der zweite Hauptsatz besagt (nach Clausius), dass Wärme nie spontan von einem kälteren zu einem wärmeren Körper fließt.',
        },
        {
          question: 'Der Carnot-Wirkungsgrad einer Maschine zwischen 400 K und 300 K beträgt:',
          options: ['75 %', '25 %', '33 %', '50 %', '10 %'],
          correctIndex: 1,
          explanation: 'ηCarnot = 1 - Tkalt/Twarm = 1 - 300/400 = 1 - 0,75 = 0,25 = 25 %.',
        },
      ],
    },
  ],
};
