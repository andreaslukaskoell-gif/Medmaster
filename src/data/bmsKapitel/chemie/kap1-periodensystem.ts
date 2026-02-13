import type { Kapitel } from '../types';

export const chemKap1: Kapitel = {
  id: 'chem-kap1',
  title: 'Periodensystem',
  subject: 'chemie',
  icon: '📊',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap1-uk1',
      title: 'Aufbau des PSE',
      content: `Das Wichtigste zuerst: Das PSE ordnet alle 118 Elemente nach ihrer **Ordnungszahl Z** (= Protonenzahl). Elemente in derselben Spalte (Gruppe) haben ähnliche Eigenschaften.

Die **Ordnungszahl Z** gibt an, wie viele Protonen im Kern sitzen. Sie bestimmt, welches Element vorliegt. Wasserstoff hat Z = 1, Kohlenstoff Z = 6, Sauerstoff Z = 8. Das PSE hat 7 waagrechte Zeilen (Perioden) und 18 senkrechte Spalten (Gruppen).

Die **Periodennummer** zeigt, auf welcher Schale die äußersten Elektronen sitzen (Hauptquantenzahl n). Natrium steht in Periode 3 → seine Valenzelektronen sind auf der 3. Schale. Periode 1 hat nur 2 Elemente (H, He), Periode 2 und 3 jeweils 8 Elemente, Periode 4 und 5 jeweils 18 Elemente.

Es gibt 8 **Hauptgruppen** (Spalten 1, 2, 13–18) und 10 **Nebengruppen** (Spalten 3–12). Bei Hauptgruppenelementen entspricht die Gruppennummer der Anzahl der Valenzelektronen. Sauerstoff steht in Gruppe 16 → 6 Valenzelektronen. Die Nebengruppen enthalten die d-Block-Elemente (Übergangsmetalle wie Fe, Cu, Zn). Bei diesen werden d-Orbitale aufgefüllt, was zu variablen Oxidationsstufen und farbigen Verbindungen führt.`,
      diagram: 'periodic-table',
      merksätze: [
        'Die Ordnungszahl Z gibt die Protonenanzahl an und bestimmt die Stellung eines Elements im PSE. Elemente derselben Gruppe haben die gleiche Anzahl an Valenzelektronen.',
        'Es gibt 7 Perioden (= Hauptenergieniveaus) und 18 Gruppen (8 Hauptgruppen + 10 Nebengruppen). Die Hauptgruppennummer entspricht der Valenzelektronenzahl.'
      ],
      altfrage: {
        question: 'Wie viele Hauptgruppen und Nebengruppen hat das Periodensystem?',
        answer: 'Das PSE hat 8 Hauptgruppen (s- und p-Block-Elemente) und 10 Nebengruppen (d-Block-Elemente, Übergangsmetalle). Die Hauptgruppennummer entspricht der Anzahl der Valenzelektronen.'
      },
      klinischerBezug: '**Eisenmangel** ist die häufigste Mangelerkrankung weltweit. Eisen (Fe) ist ein Übergangsmetall in Gruppe 8 und kann zwischen Fe²⁺ und Fe³⁺ wechseln. Ohne Fe²⁺ im Häm-Komplex kann Hämoglobin keinen Sauerstoff transportieren → mikrozytäre hypochrome Anämie. Auch **Zink** (Zn, Gruppe 12) ist als Cofaktor in über 300 Enzymen essenziell (Carboanhydrase, Alkoholdehydrogenase).',
      selfTest: [
        {
          question: 'Was gibt die Periodennummer im PSE an?',
          options: [
            'Die Anzahl der Valenzelektronen',
            'Die Hauptquantenzahl der äußersten besetzten Schale',
            'Die Gesamtzahl der Elektronen',
            'Die Anzahl der Neutronen',
            'Die Anzahl der Elektronenschalen minus eins'
          ],
          correctIndex: 1,
          explanation: 'Die Periodennummer entspricht der Hauptquantenzahl n der äußersten besetzten Elektronenschale. Ein Element in der 3. Periode hat seine Valenzelektronen auf der Schale n = 3.'
        },
        {
          question: 'Welche Elemente gehören zu den Nebengruppen?',
          options: [
            's-Block-Elemente',
            'p-Block-Elemente',
            'd-Block-Elemente (Übergangsmetalle)',
            'Edelgase',
            'f-Block-Elemente (Lanthanoide)'
          ],
          correctIndex: 2,
          explanation: 'Die Nebengruppen (Gruppen 3–12) umfassen die d-Block-Elemente, auch Übergangsmetalle genannt. Bei ihnen werden die d-Orbitale aufgefüllt.'
        },
        {
          question: 'Wie viele Elemente enthält die zweite Periode des PSE?',
          options: [
            '2',
            '8',
            '18',
            '32',
            '10'
          ],
          correctIndex: 1,
          explanation: 'Die zweite Periode enthält 8 Elemente (Li bis Ne). Die erste Schale (n = 1) ist bereits voll, und es werden die 2s- und 2p-Orbitale befüllt, was maximal 8 Elektronen ergibt.'
        }
      ]
    },
    {
      id: 'chem-kap1-uk2',
      title: 'Trends im PSE',
      content: `Die **Elektronegativität** (EN) ist die wichtigste Größe. Sie gibt an, wie stark ein Atom in einer Bindung Elektronen anzieht. Erfunden von Linus Pauling.

Innerhalb einer Periode (von links nach rechts): EN steigt. Warum? Die Kernladung nimmt zu, aber die Elektronen sitzen auf derselben Schale. Sie werden stärker angezogen. Innerhalb einer Gruppe (von oben nach unten): EN sinkt. Die Valenzelektronen sind weiter vom Kern entfernt und werden durch innere Schalen abgeschirmt.

**Fluor** (F) ist das elektronegativste Element (EN = 4,0). Danach kommt Sauerstoff (EN = 3,5). Edelgase zählen nicht, sie bilden keine Bindungen.

Der **Atomradius** verhält sich umgekehrt. Innerhalb einer Periode nimmt der Radius ab. Mehr Protonen ziehen die Elektronenhülle stärker zusammen, ohne dass eine neue Schale hinzukommt. Innerhalb einer Gruppe nimmt der Radius zu, weil jede Periode eine neue Schale bringt. Cäsium (Cs) ist eines der größten Atome, Helium (He) das kleinste.

Bei Ionen: Kationen (z. B. Na⁺) sind kleiner als ihre neutralen Atome. Sie haben ein Elektron verloren, die gleiche Kernladung zieht weniger Elektronen an. Anionen (z. B. Cl⁻) sind größer, weil sie ein Elektron gewonnen haben.

Die **Ionisierungsenergie** (IE) ist die Energie, um ein Elektron zu entfernen. Sie steigt innerhalb einer Periode (stärkere Kernbindung) und sinkt innerhalb einer Gruppe (Elektronen weiter weg, besser abgeschirmt).`,
      merksätze: [
        'Innerhalb einer Periode: EN und IE steigen, Atomradius sinkt (von links nach rechts). Innerhalb einer Gruppe: EN und IE sinken, Atomradius steigt (von oben nach unten).',
        'Fluor ist das elektronegativste Element (EN = 4,0). Cäsium und Francium haben die niedrigste EN und den größten Atomradius.'
      ],
      altfrage: {
        question: 'Wie verändert sich der Atomradius innerhalb einer Periode von links nach rechts?',
        answer: 'Der Atomradius nimmt innerhalb einer Periode von links nach rechts ab, da die steigende Kernladungszahl die Elektronenhülle stärker zusammenzieht, ohne dass eine neue Schale hinzukommt. Die Abschirmung durch Elektronen derselben Schale ist unvollständig.'
      },
      klinischerBezug: '**Fluorchinolon-Antibiotika** (z. B. Ciprofloxacin, Levofloxacin) nutzen Fluor gezielt. Das stark elektronegative F-Atom erhöht die metabolische Stabilität und Lipophilie. So durchdringt das Molekül Zellmembranen besser und wird langsamer abgebaut. Bei **Thyroxin** (Schilddrüsenhormon T4) sind 4 Iod-Atome gebunden — ihre Elektronegativität (I: EN = 2,5) macht das Hormon lipophil genug für den Zellmembran-Transport.',
      selfTest: [
        {
          question: 'Welches Element hat die höchste Elektronegativität?',
          options: [
            'Chlor',
            'Sauerstoff',
            'Fluor',
            'Stickstoff',
            'Brom'
          ],
          correctIndex: 2,
          explanation: 'Fluor hat mit 4,0 die höchste Elektronegativität aller Elemente nach der Pauling-Skala. Es steht oben rechts im PSE (Periode 2, Gruppe 17) und vereint hohe Kernladungszahl bei kleinem Atomradius.'
        },
        {
          question: 'Was passiert mit der Ionisierungsenergie innerhalb einer Gruppe von oben nach unten?',
          options: [
            'Sie steigt an',
            'Sie bleibt gleich',
            'Sie nimmt ab',
            'Sie verdoppelt sich pro Periode',
            'Sie hängt nur von der Elektronegativität ab'
          ],
          correctIndex: 2,
          explanation: 'Die Ionisierungsenergie nimmt innerhalb einer Gruppe von oben nach unten ab, da die Valenzelektronen weiter vom Kern entfernt und durch innere Schalen besser abgeschirmt sind.'
        },
        {
          question: 'Warum ist ein Natriumion (Na⁺) kleiner als ein neutrales Natriumatom (Na)?',
          options: [
            'Weil es weniger Protonen hat',
            'Weil es ein Elektron verloren hat und die verbleibenden Elektronen stärker vom Kern angezogen werden',
            'Weil es ein zusätzliches Neutron aufgenommen hat',
            'Weil die Kernladungszahl abnimmt',
            'Weil die Elektronenschalen beim Ionisieren zusammenfallen'
          ],
          correctIndex: 1,
          explanation: 'Na⁺ hat ein Elektron weniger als Na. Die gleiche Kernladung wirkt nun auf weniger Elektronen, wodurch die Elektronenhülle stärker zusammengezogen wird und der Ionenradius kleiner ist.'
        }
      ]
    },
    {
      id: 'chem-kap1-uk3',
      title: 'Wichtige Elementgruppen',
      content: `**Alkalimetalle** (Gruppe 1: Li, Na, K, Rb, Cs, Fr) haben 1 Valenzelektron. Sie sind extrem reaktiv und kommen nur in Verbindungen vor. Sie bilden Me⁺-Ionen (einfach positiv). Reaktion mit Wasser: 2 Na + 2 H₂O → 2 NaOH + H₂. Bei Kalium entzündet sich der Wasserstoff. Natrium und Kalium sind lebenswichtig für die Erregungsleitung in Nerven.

**Erdalkalimetalle** (Gruppe 2: Be, Mg, Ca, Sr, Ba, Ra) haben 2 Valenzelektronen. Sie bilden Me²⁺-Ionen. Weniger reaktiv als Alkalimetalle, weil zwei Elektronen abgegeben werden müssen. **Calcium** (Ca) ist der Hauptbestandteil von Knochen und Zähnen (Hydroxylapatit: Ca₅(PO₄)₃OH). Etwa 99 % des Körpercalciums stecken dort. **Magnesium** (Mg) ist Cofaktor in über 300 Enzymen, essenziell für ATP-Verwertung.

**Halogene** (Gruppe 17: F, Cl, Br, I, At) haben 7 Valenzelektronen. Sie brauchen nur 1 Elektron zur Edelgaskonfiguration → starke Oxidationsmittel. **Fluor** ist das reaktivste Element überhaupt. Halogene kommen als zweiatomige Moleküle vor (F₂, Cl₂, Br₂, I₂) und bilden X⁻-Ionen (einfach negativ).

**Edelgase** (Gruppe 18: He, Ne, Ar, Kr, Xe, Rn) haben eine volle Valenzschale. Sie sind extrem reaktionsträge. Helium hat 1s², alle anderen ns²np⁶. Sie kommen als einatomige Gase vor. Nur die schweren Edelgase (Xe, Kr) können unter extremen Bedingungen Verbindungen bilden (z. B. XeF₂).`,
      merksätze: [
        'Alkalimetalle (1 Valenzelektron, Me⁺) und Erdalkalimetalle (2 Valenzelektronen, Me²⁺) sind reaktive Metalle. Halogene (7 Valenzelektronen, X⁻) sind starke Oxidationsmittel. Edelgase haben eine volle Valenzschale und sind reaktionsträge.',
        'Die Reaktivität der Alkalimetalle nimmt innerhalb der Gruppe nach unten zu, die der Halogene nimmt nach unten ab (Fluor ist am reaktivsten).'
      ],
      altfrage: {
        question: 'Warum sind Edelgase so reaktionsträge?',
        answer: 'Edelgase besitzen eine vollständig besetzte Valenzschale (Oktett bzw. Duplett bei Helium) und erreichen damit die energetisch günstigste Elektronenkonfiguration. Es besteht kein Bestreben, Elektronen aufzunehmen, abzugeben oder zu teilen.'
      },
      klinischerBezug: '**Hyperkaliämie** (K⁺ > 5,5 mmol/L im Serum) kann lebensbedrohliche Herzrhythmusstörungen auslösen. Das liegt am gestörten Konzentrationsgradient über die Zellmembran: Die **Na⁺/K⁺-ATPase** pumpt 3 Na⁺ raus und 2 K⁺ rein. Daraus entsteht das Ruhemembranpotential (-70 mV). Bei Hyperkaliämie depolarisiert die Membran, Aktionspotentiale werden nicht mehr korrekt fortgeleitet → Kammerflimmern möglich. **Hypokaliämie** (K⁺ < 3,5 mmol/L) führt zu Muskelschwäche und Herzrhythmusstörungen.',
      selfTest: [
        {
          question: 'Welche Oxidationsstufe nehmen Alkalimetalle typischerweise in Verbindungen ein?',
          options: [
            '+2',
            '+1',
            '-1',
            '0',
            '+3'
          ],
          correctIndex: 1,
          explanation: 'Alkalimetalle haben ein Valenzelektron, das sie leicht abgeben, um die Edelgaskonfiguration zu erreichen. Sie bilden daher stets einfach positiv geladene Ionen (Me⁺, Oxidationsstufe +1).'
        },
        {
          question: 'Welches Halogen ist das stärkste Oxidationsmittel?',
          options: [
            'Chlor',
            'Brom',
            'Iod',
            'Fluor',
            'Astat'
          ],
          correctIndex: 3,
          explanation: 'Fluor ist das elektronegativste und reaktivste aller Elemente. Es hat die stärkste Tendenz, ein Elektron aufzunehmen, und ist damit das stärkste Oxidationsmittel unter den Halogenen.'
        },
        {
          question: 'Welches Erdalkalimetall ist der Hauptbestandteil von Knochen und Zähnen?',
          options: [
            'Magnesium',
            'Barium',
            'Calcium',
            'Strontium',
            'Beryllium'
          ],
          correctIndex: 2,
          explanation: 'Calcium ist als Hydroxylapatit Ca₅(PO₄)₃OH der Hauptbestandteil von Knochen und Zähnen. Etwa 99 % des körpereigenen Calciums sind dort gespeichert.'
        }
      ]
    }
  ]
};
