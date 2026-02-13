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
      content: `Das Periodensystem der Elemente (PSE) ist die zentrale Ordnungsstruktur der Chemie. Es wurde unabhängig voneinander von Dmitri Mendelejew und Lothar Meyer in den 1860er-Jahren entwickelt und ordnet alle bekannten chemischen Elemente nach steigender Ordnungszahl (Kernladungszahl Z). Die Ordnungszahl gibt die Anzahl der Protonen im Atomkern an und bestimmt damit die Identität eines Elements. Heute umfasst das PSE 118 bestätigte Elemente, die in sieben Perioden (horizontale Zeilen) und 18 Gruppen (vertikale Spalten) angeordnet sind. Die Anordnung ist so gewählt, dass Elemente mit ähnlichen chemischen Eigenschaften untereinanderstehen und somit derselben Gruppe zugehören. Diese Periodizität der Eigenschaften ist eine direkte Folge der Elektronenkonfiguration der Atome.

Die sieben Perioden des PSE entsprechen den Hauptenergieniveaus (Schalen) der Elektronenhülle. In der ersten Periode befinden sich nur zwei Elemente (Wasserstoff und Helium), da die erste Schale maximal zwei Elektronen aufnehmen kann. Die zweite und dritte Periode enthalten jeweils acht Elemente, die vierte und fünfte jeweils 18 Elemente, und die sechste und siebte Periode umfassen jeweils 32 Elemente (wobei die Lanthanoide und Actinoide üblicherweise als separate Blöcke unterhalb der Haupttabelle dargestellt werden). Die Periodennummer gibt die Hauptquantenzahl der äußersten besetzten Schale an. So befinden sich die Valenzelektronen eines Elements der dritten Periode auf der dritten Schale (n = 3).

Die 18 Gruppen des PSE werden in Hauptgruppen und Nebengruppen unterteilt. Die acht Hauptgruppen (I bis VIII nach älterer Nomenklatur, oder Gruppen 1, 2, 13–18 nach IUPAC) enthalten die s- und p-Block-Elemente. Bei den Hauptgruppenelementen entspricht die Hauptgruppennummer der Anzahl der Valenzelektronen, was die chemischen Eigenschaften maßgeblich bestimmt. Die zehn Nebengruppen (Gruppen 3–12 nach IUPAC) umfassen die d-Block-Elemente, auch Übergangsmetalle genannt. Bei diesen werden die d-Orbitale aufgefüllt, was zu besonderen Eigenschaften wie variablen Oxidationsstufen, farbigen Verbindungen und katalytischer Aktivität führt. Zusätzlich gibt es den f-Block mit den Lanthanoiden und Actinoiden, bei denen die f-Orbitale besetzt werden.`,
      diagram: 'periodic-table',
      merksätze: [
        'Die Ordnungszahl Z gibt die Protonenanzahl an und bestimmt die Stellung eines Elements im PSE. Elemente derselben Gruppe haben die gleiche Anzahl an Valenzelektronen.',
        'Es gibt 7 Perioden (= Hauptenergieniveaus) und 18 Gruppen (8 Hauptgruppen + 10 Nebengruppen). Die Hauptgruppennummer entspricht der Valenzelektronenzahl.'
      ],
      altfrage: {
        question: 'Wie viele Hauptgruppen und Nebengruppen hat das Periodensystem?',
        answer: 'Das PSE hat 8 Hauptgruppen (s- und p-Block-Elemente) und 10 Nebengruppen (d-Block-Elemente, Übergangsmetalle). Die Hauptgruppennummer entspricht der Anzahl der Valenzelektronen.'
      },
      klinischerBezug: 'Die Kenntnis des PSE ist in der Medizin essenziell, um die Eigenschaften von Spurenelementen wie Eisen (Fe), Zink (Zn) und Kupfer (Cu) zu verstehen. Ein Eisenmangel führt beispielsweise zu Anämie, da Eisen als Übergangsmetall verschiedene Oxidationsstufen einnehmen kann und somit für den Sauerstofftransport im Hämoglobin unverzichtbar ist.',
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
      content: `Die periodischen Trends im PSE lassen sich direkt aus der Elektronenkonfiguration und der Kernladungszahl ableiten. Der wichtigste Trend betrifft die Elektronegativität (EN), die von Linus Pauling eingeführt wurde. Die Elektronegativität beschreibt die Fähigkeit eines Atoms, in einer chemischen Bindung Elektronen an sich zu ziehen. Innerhalb einer Periode nimmt die EN von links nach rechts zu, da die Kernladungszahl steigt, während die Valenzelektronen sich auf derselben Schale befinden und somit stärker angezogen werden. Innerhalb einer Gruppe nimmt die EN von oben nach unten ab, da die Valenzelektronen weiter vom Kern entfernt sind und durch innere Schalen abgeschirmt werden. Das elektronegativste Element ist Fluor (EN = 4,0), gefolgt von Sauerstoff (EN = 3,5). Edelgase werden üblicherweise nicht berücksichtigt, da sie in der Regel keine Bindungen eingehen.

Der Atomradius zeigt einen entgegengesetzten Trend zur Elektronegativität. Innerhalb einer Periode nimmt der Atomradius von links nach rechts ab, obwohl mehr Elektronen vorhanden sind. Dies liegt daran, dass die steigende Kernladungszahl die Elektronenhülle stärker zusammenzieht, ohne dass eine neue Schale hinzukommt (die Abschirmung durch Elektronen derselben Schale ist unvollständig). Innerhalb einer Gruppe nimmt der Atomradius von oben nach unten zu, da mit jeder neuen Periode eine weitere Elektronenschale hinzukommt. So ist Cäsium (Cs) eines der größten Atome, während Helium (He) den kleinsten Atomradius hat. Bei Ionen ist zu beachten, dass Kationen kleiner als ihre neutralen Atome sind (Elektronenverlust), während Anionen größer sind (Elektronengewinn).

Die Ionisierungsenergie (IE) ist die Energie, die benötigt wird, um ein Elektron aus einem gasförmigen Atom zu entfernen. Sie nimmt innerhalb einer Periode von links nach rechts zu, da die Elektronen stärker an den Kern gebunden sind. Innerhalb einer Gruppe nimmt die IE von oben nach unten ab, da die Valenzelektronen weiter vom Kern entfernt und besser abgeschirmt sind. Die erste Ionisierungsenergie ist die Energie für die Entfernung des ersten Elektrons; nachfolgende Ionisierungsenergien sind jeweils höher, da aus einem bereits positiv geladenen Ion entfernt wird. Besonders hohe Sprünge in der IE treten auf, wenn eine vollständig besetzte Schale aufgebrochen werden muss. Die Elektronenaffinität, also die Energieänderung bei Aufnahme eines Elektrons, zeigt einen ähnlichen Trend wie die EN und ist bei Halogenen am größten.`,
      merksätze: [
        'Innerhalb einer Periode: EN und IE steigen, Atomradius sinkt (von links nach rechts). Innerhalb einer Gruppe: EN und IE sinken, Atomradius steigt (von oben nach unten).',
        'Fluor ist das elektronegativste Element (EN = 4,0). Cäsium und Francium haben die niedrigste EN und den größten Atomradius.'
      ],
      altfrage: {
        question: 'Wie verändert sich der Atomradius innerhalb einer Periode von links nach rechts?',
        answer: 'Der Atomradius nimmt innerhalb einer Periode von links nach rechts ab, da die steigende Kernladungszahl die Elektronenhülle stärker zusammenzieht, ohne dass eine neue Schale hinzukommt. Die Abschirmung durch Elektronen derselben Schale ist unvollständig.'
      },
      klinischerBezug: 'Die Elektronegativität ist für das Verständnis von Arzneimittelwechselwirkungen relevant. Polare Bindungen in Medikamenten (z. B. O-H, N-H) bestimmen deren Löslichkeit und Bioverfügbarkeit. Stark elektronegative Atome wie Fluor werden gezielt in Pharmaka eingebaut (z. B. Fluorchinolon-Antibiotika), um die metabolische Stabilität und Lipophilie zu verändern.',
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
      content: `Die Alkalimetalle (Gruppe 1: Li, Na, K, Rb, Cs, Fr) sind weiche, silbrig glänzende Metalle mit genau einem Valenzelektron. Sie sind extrem reaktiv und kommen in der Natur daher nur in gebundener Form als Verbindungen vor. Ihre Reaktivität nimmt innerhalb der Gruppe von oben nach unten zu, da das Valenzelektron immer leichter abgegeben werden kann (sinkende Ionisierungsenergie). Alkalimetalle reagieren heftig mit Wasser unter Bildung von Hydroxiden und Wasserstoff (z. B. 2 Na + 2 H₂O → 2 NaOH + H₂). Kalium und die schwereren Alkalimetalle entzünden dabei den entstehenden Wasserstoff. Die Alkalimetalle bilden stets einfach positiv geladene Ionen (Me⁺) und haben niedrige Schmelzpunkte, die innerhalb der Gruppe nach unten abnehmen. Natrium und Kalium sind für den menschlichen Körper essenziell und spielen eine zentrale Rolle bei der Erregungsleitung in Nervenzellen.

Die Erdalkalimetalle (Gruppe 2: Be, Mg, Ca, Sr, Ba, Ra) besitzen zwei Valenzelektronen und bilden zweifach positiv geladene Ionen (Me²⁺). Sie sind ebenfalls reaktive Metalle, jedoch weniger reaktiv als die Alkalimetalle, da die zweite Ionisierungsenergie aufgebracht werden muss und der kleinere Atomradius die Valenzelektronen stärker bindet. Magnesium und Calcium sind biologisch besonders bedeutsam. Calcium ist der Hauptbestandteil von Knochen und Zähnen (als Hydroxylapatit Ca₅(PO₄)₃OH) und spielt eine Schlüsselrolle bei der Muskelkontraktion und Blutgerinnung. Magnesium ist ein Cofaktor in über 300 Enzymen und essenziell für die ATP-Verwertung. Die Erdalkalimetalle reagieren ebenfalls mit Wasser, aber weniger heftig als die Alkalimetalle, und ihre Hydroxide sind weniger gut löslich.

Die Halogene (Gruppe 17: F, Cl, Br, I, At) besitzen sieben Valenzelektronen und benötigen nur ein weiteres Elektron, um die Edelgaskonfiguration zu erreichen. Sie sind daher starke Oxidationsmittel und äußerst reaktiv. Fluor ist das reaktivste aller Elemente und das stärkste Oxidationsmittel. Die Halogene kommen in der Natur als zweiatomige Moleküle (F₂, Cl₂, Br₂, I₂) vor und bilden typischerweise einfach negativ geladene Halogenidionen (X⁻). Die Edelgase (Gruppe 18: He, Ne, Ar, Kr, Xe, Rn) besitzen eine vollständig gefüllte Valenzschale (Elektronenkonfiguration ns²np⁶, bei Helium 1s²) und sind daher extrem reaktionsträge. Sie kommen ausschließlich als einatomige Gase vor. Unter extremen Bedingungen können die schwereren Edelgase (Xe, Kr) Verbindungen bilden, zum Beispiel XeF₂, da ihre Valenzelektronen weiter vom Kern entfernt und leichter polarisierbar sind.`,
      merksätze: [
        'Alkalimetalle (1 Valenzelektron, Me⁺) und Erdalkalimetalle (2 Valenzelektronen, Me²⁺) sind reaktive Metalle. Halogene (7 Valenzelektronen, X⁻) sind starke Oxidationsmittel. Edelgase haben eine volle Valenzschale und sind reaktionsträge.',
        'Die Reaktivität der Alkalimetalle nimmt innerhalb der Gruppe nach unten zu, die der Halogene nimmt nach unten ab (Fluor ist am reaktivsten).'
      ],
      altfrage: {
        question: 'Warum sind Edelgase so reaktionsträge?',
        answer: 'Edelgase besitzen eine vollständig besetzte Valenzschale (Oktett bzw. Duplett bei Helium) und erreichen damit die energetisch günstigste Elektronenkonfiguration. Es besteht kein Bestreben, Elektronen aufzunehmen, abzugeben oder zu teilen.'
      },
      klinischerBezug: 'Natrium (Na⁺) und Kalium (K⁺) sind die wichtigsten extrazellulären bzw. intrazellulären Kationen. Ihre Konzentrationsgradienten über die Zellmembran, aufrechterhalten durch die Na⁺/K⁺-ATPase, sind für das Ruhemembranpotential und die Erregungsleitung in Nerven- und Muskelzellen essenziell. Störungen des Kaliumhaushalts (Hyperkaliämie oder Hypokaliämie) können lebensbedrohliche Herzrhythmusstörungen verursachen.',
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
