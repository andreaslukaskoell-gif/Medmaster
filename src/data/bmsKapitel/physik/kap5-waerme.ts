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
      content: `**Temperatur** ist die mittlere kinetische Energie der Teilchen. Schneller bewegte Atome = höhere Temperatur. Die SI-Einheit ist Kelvin (K). Umrechnung: T(K) = T(°C) + 273,15. Der **absolute Nullpunkt** bei 0 K = -273,15 °C ist die tiefstmögliche Temperatur.

**Wärme Q** ist Energieübertragung zwischen Körpern unterschiedlicher Temperatur. Wärme fließt immer von warm nach kalt. Die Formel: Q = m · c · ΔT. Dabei ist m die Masse, c die **spezifische Wärmekapazität** (wie viel Energie 1 kg eines Stoffes pro Kelvin aufnimmt) und ΔT = T₂ - T₁ die Temperaturänderung.

Wasser hat c = 4186 J/(kg·K). Das ist extrem hoch. Wasser braucht also viel Energie zum Erwärmen und gibt viel Energie beim Abkühlen ab. Perfekter Wärmespeicher.

Die hohe Wärmekapazität des Wassers stabilisiert die Körpertemperatur. Der Körper (ca. 60 % Wasser) hat eine Wärmekapazität von etwa 3,5 kJ/(kg·K). Bei Mischungsaufgaben: Die vom heißen Körper abgegebene Wärmemenge = die vom kalten Körper aufgenommene (Richmannsche Mischungsregel): m₁ · c₁ · (T₁ - Tm) = m₂ · c₂ · (Tm - T₂). Tm ist die Mischungstemperatur.`,
      merksätze: [
        'Wärmemenge: Q = m·c·ΔT. Die spezifische Wärmekapazität von Wasser beträgt c = 4186 J/(kg·K) — die höchste aller gewöhnlichen Flüssigkeiten.',
        'Temperaturskalen: T(K) = T(°C) + 273,15. Der absolute Nullpunkt liegt bei 0 K = -273,15 °C. Wärme fließt immer von warm nach kalt.',
      ],
      altfrage: {
        question: 'Wie viel Energie wird benötigt, um 2 kg Wasser von 20 °C auf 80 °C zu erwärmen? (c = 4200 J/(kg·K))',
        answer: 'Q = m·c·ΔT = 2 · 4200 · (80-20) = 2 · 4200 · 60 = 504000 J = 504 kJ.',
      },
      klinischerBezug:
        'Bei **Fieber** (39 °C statt 37 °C) wird viel Energie benötigt: 70 kg Körper: Q = 70 · 3500 · 2 ≈ 490 kJ. Die **therapeutische Hypothermie** nach Herzstillstand (Kühlung auf 33 °C) nutzt die hohe Wärmekapazität zur Neuroprotektion. Der **Defibrillator** gibt elektrische Energie von 200–360 J ab. Die hohe Wärmekapazität verhindert abrupte Temperaturschwankungen.',
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
      content: `Stoffe liegen in drei Zuständen vor: fest, flüssig, gasförmig. Der Übergang erfordert Energie. Die Temperatur bleibt dabei konstant.

**Schmelzen** (fest → flüssig): Erfordert die **Schmelzwärme** Qs = m · qs. Für Wasser: qs = 334 kJ/kg. Während des Schmelzens bleibt T konstant bei 0 °C (Normaldruck). Die Energie bricht die Kristallstruktur auf, erhöht aber nicht die Temperatur. **Erstarren** (flüssig → fest) setzt dieselbe Energie wieder frei.

**Verdampfen** (flüssig → gasförmig): Erfordert die **Verdampfungswärme** Qv = m · qv. Für Wasser: qv = 2257 kJ/kg. Deutlich mehr als Schmelzwärme. Beim Verdampfen müssen alle intermolekularen Bindungen überwunden werden. **Kondensieren** (gasförmig → flüssig) setzt die Energie wieder frei.

Der Siedepunkt ist druckabhängig. Niedriger Druck → niedrigerer Siedepunkt (z. B. am Berg). Höherer Druck → höherer Siedepunkt (Schnellkochtopf). **Sublimation**: direkter Übergang fest → gasförmig (Trockeneis). **Resublimation**: gasförmig → fest (Reifbildung).

Das **Phasendiagramm** zeigt die Aggregatzustände in Abhängigkeit von Druck und Temperatur. Am **Tripelpunkt** koexistieren alle drei Phasen (Wasser: 0,01 °C und 611 Pa). Oberhalb des kritischen Punkts: überkritischer Zustand (keine Unterscheidung flüssig/gasförmig).

Die **Anomalie des Wassers**: Maximale Dichte bei 4 °C. Deshalb schwimmt Eis auf Wasser. Seen frieren von oben zu. Leben im Wasser wird geschützt.`,
      merksätze: [
        'Schmelzwärme: Qs = m·qs (für Wasser: qs = 334 kJ/kg). Verdampfungswärme: Qv = m·qv (für Wasser: qv = 2257 kJ/kg). Während des Phasenübergangs bleibt T konstant.',
        'Tripelpunkt: Alle drei Phasen koexistieren. Der Siedepunkt ist druckabhängig. Wasser hat seine maximale Dichte bei 4 °C (Anomalie des Wassers).',
      ],
      altfrage: {
        question: 'Wie viel Energie wird benötigt, um 0,5 kg Eis bei 0 °C vollständig zu schmelzen? (qs = 334 kJ/kg)',
        answer: 'Qs = m · qs = 0,5 · 334 = 167 kJ. Die Temperatur bleibt während des gesamten Schmelzvorgangs bei 0 °C.',
      },
      klinischerBezug:
        '**Schwitzen** ist der effektivste Kühlmechanismus. 1 Liter verdunsteter Schweiß entzieht dem Körper 2257 kJ Wärme. Bei **Hitzschlag** versagt dieser Mechanismus. **Kältepackungen** (Cold Packs) nutzen die Schmelzwärme von Eis (334 kJ/kg) oder endotherme Salz-Lösungsvorgänge zur lokalen Kühlung bei Sportverletzungen.',
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
      content: `Wärme wird auf drei Arten übertragen: Leitung, Konvektion, Strahlung.

**Wärmeleitung** (Konduktion): Direkte Übertragung kinetischer Energie zwischen Teilchen. Kein Materietransport. Gute Leiter: Metalle (Silber, Kupfer, Aluminium). Schlechte Leiter (Isolatoren): Gase, Kunststoffe, Holz, Luft. Fouriersches Gesetz: Q̇ = λ · A · ΔT/d. λ ist die **Wärmeleitfähigkeit** in W/(m·K), A die Querschnittsfläche, ΔT die Temperaturdifferenz, d die Dicke. Luft hat sehr geringe Wärmeleitfähigkeit. Deshalb isolieren Doppelverglasung und Daunenjacken so gut.

**Konvektion**: Wärmeübertragung durch Strömung eines Fluids. **Natürliche Konvektion**: Dichteunterschiede durch Temperatur (warme Luft steigt, kalte sinkt). **Erzwungene Konvektion**: Pumpen oder Ventilatoren erzeugen die Strömung. Konvektion ist viel effizienter als reine Leitung. Heizungen nutzen Konvektion.

**Wärmestrahlung** (Infrarot): Einzige Form ohne Medium. Elektromagnetische Strahlung. Funktioniert im Vakuum (Sonnenwärme durch Weltraum). Stefan-Boltzmann-Gesetz: P = ε · σ · A · T⁴. ε ist der Emissionsgrad (0 ≤ ε ≤ 1, schwarzer Strahler: ε = 1), σ = 5,67 · 10⁻⁸ W/(m²·K⁴) die Stefan-Boltzmann-Konstante, A die Oberfläche, T die absolute Temperatur. Wichtig: T⁴-Abhängigkeit. Verdopplung von T → 16-fache Strahlung.`,
      merksätze: [
        'Drei Arten der Wärmeübertragung: Leitung (Teilchenkontakt), Konvektion (Strömung), Strahlung (elektromagnetisch — auch im Vakuum).',
        'Stefan-Boltzmann-Gesetz: P = ε·σ·A·T⁴. Die Strahlungsleistung steigt mit der vierten Potenz der Temperatur. Luft ist ein schlechter Wärmeleiter → guter Isolator.',
      ],
      altfrage: {
        question: 'Warum isoliert eine Daunenjacke so gut?',
        answer: 'Daunen schließen viele kleine Luftkammern ein. Luft ist ein schlechter Wärmeleiter (λ ≈ 0,025 W/(m·K)), und die eingeschlossene Luft kann nicht konvektieren. Dadurch wird sowohl Wärmeleitung als auch Konvektion minimiert.',
      },
      klinischerBezug:
        'Der Körper verliert Wärme durch alle drei Mechanismen: **Wärmeleitung** (Kontakt mit kalten Oberflächen), **Konvektion** (Luftströmung an der Haut, Windchill-Effekt — bei Wind kühlt der Körper schneller ab), **Strahlung** (Infrarotemission der Haut, ca. 60 % des Gesamtwärmeverlusts in Ruhe). Die **Infrarot-Thermographie** misst die Wärmestrahlung (28–32 °C Hauttemperatur) und erkennt Durchblutungsstörungen und Entzündungen.',
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
      content: `Die Hauptsätze der Thermodynamik sind fundamentale Naturgesetze für alle Energieumwandlungen.

**0. Hauptsatz**: Thermisches Gleichgewicht ist transitiv. Wenn System A und B je im Gleichgewicht mit C sind, dann sind A und B auch untereinander im Gleichgewicht. Das ist die Grundlage der Temperaturmessung. Ein Thermometer zeigt die Temperatur korrekt, weil es im Gleichgewicht mit dem Messobjekt ist.

**1. Hauptsatz**: Energieerhaltung für thermische Systeme. ΔU = Q + W. Die innere Energie U ändert sich nur durch Wärmezufuhr Q oder Arbeit W. Vorzeichenkonvention: Q > 0 bei zugeführter Wärme, W > 0 bei am System verrichteter Arbeit. Ein **Perpetuum mobile 1. Art** (Energie aus dem Nichts) ist unmöglich. Die innere Energie eines idealen Gases hängt nur von T ab: U = n · Cv · T. Bei adiabatischen Prozessen (Q = 0): ΔU = W. Bei isothermen Prozessen (ΔT = 0, ΔU = 0): Q = -W.

**2. Hauptsatz**: Beschreibt die Richtung natürlicher Prozesse. Einführung der **Entropie S** als zentraler Größe. Wärme fließt nie spontan von kalt nach warm (Clausius). Es ist unmöglich, periodisch Wärme vollständig in Arbeit umzuwandeln (Kelvin-Planck). Ein **Perpetuum mobile 2. Art** ist unmöglich. Die Entropie ist ein Maß für Unordnung: ΔS ≥ Q/T. In einem abgeschlossenen System nimmt die Entropie nur zu oder bleibt gleich. Bei irreversiblen (natürlichen) Prozessen steigt sie. Der maximale Wirkungsgrad einer Wärmekraftmaschine: ηCarnot = 1 - Tkalt/Twarm. Kein Motor erreicht 100 % Wirkungsgrad.`,
      merksätze: [
        '0. Hauptsatz: Thermisches Gleichgewicht ist transitiv → Grundlage der Temperaturmessung. 1. Hauptsatz: ΔU = Q + W → Energieerhaltung, kein Perpetuum mobile 1. Art.',
        '2. Hauptsatz: Die Entropie eines abgeschlossenen Systems nimmt nie ab (ΔS ≥ 0). Wärme fließt spontan nur von warm nach kalt. Kein Perpetuum mobile 2. Art. Carnot: ηmax = 1 - Tkalt/Twarm.',
      ],
      altfrage: {
        question: 'Eine Wärmekraftmaschine arbeitet zwischen 600 K (heiß) und 300 K (kalt). Wie groß ist der maximale Wirkungsgrad?',
        answer: 'ηCarnot = 1 - Tkalt/Twarm = 1 - 300/600 = 1 - 0,5 = 0,5 = 50 %. Kein realer Motor kann diesen Wert überschreiten.',
      },
      klinischerBezug:
        'Der Körper unterliegt den Hauptsätzen der Thermodynamik. Die **Stoffwechselenergie** (1. Hauptsatz) wird in Arbeit und Wärme umgewandelt. Die **Körpertemperatur von 37 °C** wird aufrechterhalten, indem ständig Wärme an die kältere Umgebung abgegeben wird (2. Hauptsatz). Die Entropie der aufgenommenen Nahrung ist geringer als die der Ausscheidungsprodukte — der Körper erhöht die Entropie der Umgebung, um seine eigene niedrige Entropie aufrechtzuerhalten. Der **Grundumsatz** (ca. 7000 kJ/Tag bei 70 kg) entspricht der minimalen Energieumwandlung zur Aufrechterhaltung der Körperfunktionen.',
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
