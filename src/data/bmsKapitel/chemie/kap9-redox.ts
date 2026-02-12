import type { Kapitel } from '../types';

export const chemKap9: Kapitel = {
  id: 'chem-kap9',
  title: 'Redox-Reaktionen',
  subject: 'chemie',
  icon: '🔋',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap9-1',
      title: 'Oxidation & Reduktion',
      content: `**Redox-Reaktionen** sind chemische Reaktionen, bei denen Elektronen von einem Reaktionspartner auf einen anderen übertragen werden. Die **Oxidation** ist definiert als die Abgabe von Elektronen (Erhöhung der Oxidationszahl), die **Reduktion** als die Aufnahme von Elektronen (Erniedrigung der Oxidationszahl). Oxidation und Reduktion treten immer gemeinsam auf — man spricht deshalb von „gekoppelten" Teilreaktionen. Der Stoff, der Elektronen abgibt, wird oxidiert und heißt **Reduktionsmittel** (er reduziert den anderen). Der Stoff, der Elektronen aufnimmt, wird reduziert und heißt **Oxidationsmittel** (er oxidiert den anderen). Eine bekannte Eselsbrücke lautet **„LEO der Löwe sagt GER"**: Loss of Electrons = Oxidation, Gain of Electrons = Reduction.

Die **Oxidationszahl** (OZ) ist eine formale Ladung, die jedem Atom in einer Verbindung zugeordnet wird und die Elektronenverteilung beschreibt. Wichtige Regeln zur Bestimmung: (1) Elemente in elementarer Form haben OZ = 0. (2) Einatomige Ionen haben die OZ ihrer Ladung (z. B. Na⁺ → +I, Cl⁻ → -I). (3) Fluor hat in Verbindungen immer OZ = -I. (4) Sauerstoff hat meist OZ = -II (Ausnahme: Peroxide wie H₂O₂ → -I). (5) Wasserstoff hat meist OZ = +I (Ausnahme: Metallhydride wie NaH → -I). (6) Die Summe aller OZ in einer neutralen Verbindung ist 0, in einem Ion gleich der Ionenladung. Diese Regeln ermöglichen es, die Oxidationszahlen aller Atome in einer Verbindung systematisch zu bestimmen.

Ein anschauliches Beispiel für eine Redox-Reaktion ist die Reaktion von Zink mit Kupfersulfat-Lösung: Zn + CuSO₄ → ZnSO₄ + Cu. Zink (OZ 0 → +II) wird oxidiert und gibt 2 Elektronen ab — es ist das Reduktionsmittel. Kupfer (OZ +II → 0) wird reduziert und nimmt 2 Elektronen auf — CuSO₄ ist das Oxidationsmittel. Die Triebkraft dieser Reaktion liegt darin, dass Zink ein stärkeres Reduktionsmittel als Kupfer ist (negativeres Standardpotential). In der elektrochemischen Spannungsreihe stehen unedle Metalle (starke Reduktionsmittel) oben und edle Metalle (schwache Reduktionsmittel) unten. Generell gilt: Ein unedleres Metall kann ein edleres Metall aus seiner Salzlösung verdrängen.`,
      merksaetze: [
        'LEO GER: Loss of Electrons = Oxidation, Gain of Electrons = Reduction. Oxidation = Elektronenabgabe = OZ steigt. Reduktion = Elektronenaufnahme = OZ sinkt.',
        'Oxidationsmittel wird selbst reduziert (nimmt e⁻ auf). Reduktionsmittel wird selbst oxidiert (gibt e⁻ ab). Unedle Metalle verdrängen edle aus Lösung.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Oxidationszahlen aller Atome in KMnO₄ und geben Sie an, welches Atom bei der Reduktion zu Mn²⁺ reduziert wird.',
        answer: 'K = +I, O = -II (×4 = -VIII), Mn = +VII (da +I + x + (-VIII) = 0 → x = +VII). Bei der Reduktion zu Mn²⁺ sinkt die OZ von Mn von +VII auf +II — Mangan wird reduziert (nimmt 5 Elektronen auf).'
      },
      klinischerBezug: 'In der Zellatmung werden organische Moleküle (z. B. Glucose) schrittweise oxidiert, während die Coenzyme NAD⁺ und FAD als Oxidationsmittel fungieren und zu NADH bzw. FADH₂ reduziert werden. Die Elektronen werden schließlich in der Atmungskette auf Sauerstoff übertragen — daher ist die Zellatmung eine biologische Redox-Kaskade.',
      selfTest: [
        {
          question: 'Was ist die Oxidationszahl von Schwefel in H₂SO₄?',
          options: [
            '+II',
            '+IV',
            '+VI',
            '-II'
          ],
          correctIndex: 2,
          explanation: 'H = +I (×2 = +II), O = -II (×4 = -VIII). Für die neutrale Verbindung gilt: +II + x + (-VIII) = 0, also x = +VI. Schwefel hat die Oxidationszahl +VI.'
        },
        {
          question: 'In der Reaktion Fe + CuSO₄ → FeSO₄ + Cu — welcher Stoff ist das Reduktionsmittel?',
          options: [
            'CuSO₄',
            'Cu',
            'Fe',
            'FeSO₄'
          ],
          correctIndex: 2,
          explanation: 'Eisen (Fe) gibt Elektronen ab (OZ: 0 → +II), wird also oxidiert. Das Reduktionsmittel ist der Stoff, der selbst oxidiert wird und dabei den anderen (Cu²⁺) reduziert.'
        },
        {
          question: 'Welche Aussage zu Redox-Reaktionen ist FALSCH?',
          options: [
            'Oxidation und Reduktion treten immer gemeinsam auf.',
            'Bei der Oxidation sinkt die Oxidationszahl.',
            'Das Oxidationsmittel wird selbst reduziert.',
            'Unedle Metalle sind starke Reduktionsmittel.'
          ],
          correctIndex: 1,
          explanation: 'Bei der Oxidation STEIGT die Oxidationszahl (Elektronenabgabe), sie sinkt nicht. Die anderen Aussagen sind korrekt: Oxidation und Reduktion sind immer gekoppelt, das Oxidationsmittel wird reduziert, und unedle Metalle geben leicht Elektronen ab.'
        }
      ]
    },
    {
      id: 'chem-kap9-2',
      title: 'Redoxgleichungen aufstellen',
      content: `Das Aufstellen von **Redoxgleichungen** erfordert ein systematisches Vorgehen, um sicherzustellen, dass sowohl die Atome als auch die Ladungen auf beiden Seiten ausgeglichen sind. Die Methode der **Teilgleichungen** (auch Halbreaktionsmethode) ist dabei besonders zuverlässig. Im ersten Schritt werden die Oxidationszahlen aller Atome bestimmt und die Atome identifiziert, deren OZ sich ändert. Dann wird die Gesamtreaktion in zwei Teilgleichungen aufgespalten: eine Oxidations-Teilgleichung (Elektronenabgabe) und eine Reduktions-Teilgleichung (Elektronenaufnahme).

Im zweiten Schritt werden die **Teilgleichungen** jeweils für sich ausgeglichen: (1) Zunächst werden die Atome ausgeglichen, deren OZ sich ändert. (2) Dann werden in saurer Lösung die Sauerstoffatome mit H₂O und die Wasserstoffatome mit H⁺ ausgeglichen; in basischer Lösung werden zusätzlich OH⁻-Ionen verwendet. (3) Anschließend wird die Ladung mit Elektronen (e⁻) ausgeglichen. Beispiel in saurer Lösung: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O (Reduktions-Teilgleichung). Das Permanganat-Ion nimmt 5 Elektronen auf, Mangan wird von +VII auf +II reduziert.

Im dritten Schritt werden die beiden **Teilgleichungen zusammengeführt**, wobei die Elektronenzahl in beiden Teilgleichungen gleich sein muss. Dazu werden die Teilgleichungen mit geeigneten Faktoren multipliziert (kleinstes gemeinsames Vielfaches der Elektronen). Beispiel: Oxidation von Fe²⁺ durch KMnO₄ in saurer Lösung. Oxidation: Fe²⁺ → Fe³⁺ + e⁻ (×5). Reduktion: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O (×1). Gesamt: 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O. Zur Kontrolle prüft man, ob die Atom- und Ladungsbilanz stimmt: Links: 5(+2) + (-1) + 8(+1) = +17; Rechts: 5(+3) + (+2) + 0 = +17 — korrekt! Diese systematische Vorgehensweise ist besonders bei komplexen Gleichungen unverzichtbar.`,
      merksaetze: [
        'Teilgleichungsmethode: (1) OZ bestimmen, (2) Teilgleichungen aufstellen und mit e⁻ ausgleichen, (3) Elektronenzahl angleichen und addieren.',
        'Kontrolle: Sowohl die Atombilanz als auch die Ladungsbilanz müssen auf beiden Seiten übereinstimmen!'
      ],
      altfrage: {
        question: 'Stellen Sie die Redox-Teilgleichungen für die Reaktion von Zink mit Salzsäure auf (Zn + HCl → ZnCl₂ + H₂).',
        answer: 'Oxidation: Zn → Zn²⁺ + 2 e⁻ (OZ: 0 → +II). Reduktion: 2 H⁺ + 2 e⁻ → H₂ (OZ: +I → 0). Gesamt: Zn + 2 H⁺ → Zn²⁺ + H₂. Zink ist das Reduktionsmittel, H⁺ das Oxidationsmittel.'
      },
      klinischerBezug: 'Kaliumpermanganat (KMnO₄) wird in der Medizin als Desinfektionsmittel verwendet. Seine stark oxidierende Wirkung (Mn geht von +VII auf +II oder +IV) zerstört Bakterien und organisches Material. Auch Wasserstoffperoxid (H₂O₂) wirkt als Oxidationsmittel bei der Wunddesinfektion — es wird zu H₂O und O₂ reduziert, wobei der freigesetzte Sauerstoff antimikrobiell wirkt.',
      selfTest: [
        {
          question: 'Wie viele Elektronen gibt Eisen in der Teilgleichung Fe → Fe³⁺ + ? e⁻ ab?',
          options: [
            '1 Elektron',
            '2 Elektronen',
            '3 Elektronen',
            '6 Elektronen'
          ],
          correctIndex: 2,
          explanation: 'Eisen geht von OZ 0 auf +III → die OZ steigt um 3. Da jede OZ-Erhöhung um 1 einer Elektronenabgabe entspricht, werden 3 Elektronen abgegeben: Fe → Fe³⁺ + 3 e⁻.'
        },
        {
          question: 'Beim Ausgleich von Redoxgleichungen in saurer Lösung werden Sauerstoffatome ausgeglichen mit:',
          options: [
            'O₂-Molekülen',
            'OH⁻-Ionen',
            'H₂O-Molekülen',
            'O²⁻-Ionen'
          ],
          correctIndex: 2,
          explanation: 'In saurer Lösung werden fehlende Sauerstoffatome mit H₂O ausgeglichen (auf der sauerstoffarmen Seite) und dann die Wasserstoffatome mit H⁺ ausgeglichen. In basischer Lösung verwendet man OH⁻.'
        },
        {
          question: 'Was muss beim Zusammenführen der Teilgleichungen gleich sein?',
          options: [
            'Die Anzahl der Atome',
            'Die Anzahl der übertragenen Elektronen',
            'Die Temperatur',
            'Die Konzentration der Lösungen'
          ],
          correctIndex: 1,
          explanation: 'Die Elektronenzahl in der Oxidations-Teilgleichung muss gleich der Elektronenzahl in der Reduktions-Teilgleichung sein, damit sich die Elektronen beim Addieren aufheben. Dazu werden die Teilgleichungen mit passenden Faktoren multipliziert.'
        }
      ]
    },
    {
      id: 'chem-kap9-3',
      title: 'Elektrochemie',
      content: `Die **galvanische Zelle** (auch Daniell-Element) wandelt chemische Energie in elektrische Energie um. Sie besteht aus zwei Halbzellen, die durch ein Salzbrücke oder eine semipermeable Membran verbunden sind. Jede Halbzelle enthält eine Elektrode in einer Elektrolytlösung. In der klassischen Daniell-Zelle taucht eine Zinkplatte in ZnSO₄-Lösung (Anode, Oxidation: Zn → Zn²⁺ + 2 e⁻) und eine Kupferplatte in CuSO₄-Lösung (Kathode, Reduktion: Cu²⁺ + 2 e⁻ → Cu). Elektronen fließen durch den äußeren Leiter von der Anode (Minus-Pol) zur Kathode (Plus-Pol). Die Salzbrücke schließt den inneren Stromkreis, indem sie Ionen transportiert und die Elektroneutralität in beiden Halbzellen aufrechterhält.

Die **Standardpotentiale** (E°) geben die Spannung einer Halbzelle gegenüber der Normal-Wasserstoffelektrode (NHE, E° = 0,00 V per Definition) unter Standardbedingungen (25 °C, 1 mol/L, 1 atm) an. In der **elektrochemischen Spannungsreihe** sind die Redoxpaare nach steigendem Potential geordnet: Unedle Metalle wie Li (-3,04 V), Na (-2,71 V) und Zn (-0,76 V) haben stark negative Potentiale und sind gute Reduktionsmittel. Edle Metalle wie Cu (+0,34 V), Ag (+0,80 V) und Au (+1,50 V) haben positive Potentiale und sind schwache Reduktionsmittel. Die **Zellspannung** (EMK) berechnet sich als: E°(Zelle) = E°(Kathode) - E°(Anode). Für die Daniell-Zelle: E° = (+0,34) - (-0,76) = +1,10 V.

Die **Elektrolyse** ist der umgekehrte Prozess: Elektrische Energie wird zugeführt, um eine nicht-spontane Redox-Reaktion zu erzwingen. Dabei wird die Anode (Pluspol der externen Stromquelle) zum Ort der Oxidation und die Kathode (Minuspol) zum Ort der Reduktion — die Polarität ist also gegenüber der galvanischen Zelle umgekehrt! Ein Beispiel ist die Elektrolyse von Wasser: An der Kathode entsteht H₂ (2 H₂O + 2 e⁻ → H₂ + 2 OH⁻), an der Anode O₂ (2 H₂O → O₂ + 4 H⁺ + 4 e⁻). Die Faradayschen Gesetze beschreiben den Zusammenhang zwischen der abgeschiedenen Stoffmenge und der geflossenen Ladung: m = (M · I · t) / (z · F), wobei F = 96485 C/mol die Faraday-Konstante ist und z die Anzahl der übertragenen Elektronen.`,
      merksaetze: [
        'Galvanische Zelle: Anode = Oxidation = Minuspol, Kathode = Reduktion = Pluspol. E°(Zelle) = E°(Kathode) - E°(Anode).',
        'Elektrolyse: Erzwungene Redox-Reaktion durch externe Spannung. Anode = Oxidation (Pluspol!), Kathode = Reduktion (Minuspol!) — Polarität umgekehrt zur galvanischen Zelle!'
      ],
      altfrage: {
        question: 'Berechnen Sie die Standardzellspannung für eine galvanische Zelle aus Zink (E° = -0,76 V) und Silber (E° = +0,80 V).',
        answer: 'Zink ist unedler → Anode (Oxidation). Silber ist edler → Kathode (Reduktion). E°(Zelle) = E°(Kathode) - E°(Anode) = (+0,80) - (-0,76) = +1,56 V.'
      },
      klinischerBezug: 'Die Nervenleitung basiert auf elektrochemischen Prinzipien: Das Ruhemembranpotential (-70 mV) entsteht durch Konzentrationsunterschiede von Na⁺ und K⁺ über die Zellmembran, analog zu galvanischen Halbzellen. Die Na⁺/K⁺-ATPase arbeitet wie eine „biologische Elektrolyse" — sie verbraucht ATP-Energie, um Ionen gegen ihren Konzentrationsgradienten zu pumpen.',
      selfTest: [
        {
          question: 'Wo findet in einer galvanischen Zelle die Oxidation statt?',
          options: [
            'An der Kathode (Pluspol)',
            'An der Anode (Minuspol)',
            'In der Salzbrücke',
            'An der Kathode (Minuspol)'
          ],
          correctIndex: 1,
          explanation: 'In einer galvanischen Zelle ist die Anode der Minuspol, an dem die Oxidation (Elektronenabgabe) stattfindet. Die Kathode ist der Pluspol (Reduktion). Merke: AN-OX (Anode-Oxidation).'
        },
        {
          question: 'Was ist die Funktion der Salzbrücke in einer galvanischen Zelle?',
          options: [
            'Sie transportiert Elektronen zwischen den Halbzellen.',
            'Sie schließt den inneren Stromkreis durch Ionentransport.',
            'Sie erhöht die Zellspannung.',
            'Sie verhindert jeglichen Stofftransport.'
          ],
          correctIndex: 1,
          explanation: 'Die Salzbrücke ermöglicht den Ionentransport zwischen den Halbzellen und hält so die Elektroneutralität aufrecht. Elektronen fließen nur durch den äußeren Leiter, nicht durch die Salzbrücke.'
        },
        {
          question: 'Bei der Elektrolyse von Wasser entsteht an der Kathode:',
          options: [
            'Sauerstoff (O₂)',
            'Wasserstoff (H₂)',
            'Chlor (Cl₂)',
            'Ozon (O₃)'
          ],
          correctIndex: 1,
          explanation: 'An der Kathode findet die Reduktion statt: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻. Wasserstoff wird abgeschieden. Sauerstoff entsteht an der Anode durch Oxidation.'
        }
      ]
    },
    {
      id: 'chem-kap9-4',
      title: 'Korrosion & Alltag',
      content: `**Korrosion** ist die unerwünschte elektrochemische Zersetzung von Metallen durch Reaktion mit ihrer Umgebung. Das bekannteste Beispiel ist das **Rosten von Eisen**, ein komplexer elektrochemischer Prozess: An anodischen Bereichen (z. B. Kratzer, Korngrenzen) wird Eisen oxidiert: Fe → Fe²⁺ + 2 e⁻. An kathodischen Bereichen wird Sauerstoff in Gegenwart von Wasser reduziert: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Die Fe²⁺-Ionen reagieren weiter zu Eisen(III)-hydroxid (Fe(OH)₃), das zu Rost (Fe₂O₃ · n H₂O) dehydratisiert wird. Rost bildet keine schützende Schicht, sodass das Eisen weiter korrodiert — im Gegensatz zu Aluminium, das eine dichte Al₂O₃-Passivierungsschicht bildet.

**Korrosionsschutz** kann auf verschiedene Weisen erreicht werden: (1) **Beschichtung** — Lacke, Farben oder Kunststoffe schließen das Metall von Sauerstoff und Wasser ab. (2) **Verzinkung** — Zink (E° = -0,76 V) ist unedler als Eisen (E° = -0,44 V) und wird bevorzugt oxidiert (Opferanode). Selbst bei Beschädigung der Zinkschicht ist das Eisen geschützt, solange Zink vorhanden ist. (3) **Kathodischer Schutz** — ein noch unedleres Metall (z. B. Magnesium) wird als Opferanode angebracht und korrodiert statt des zu schützenden Eisens. Dieses Prinzip wird bei Pipelines und Schiffen angewendet. (4) **Legierung** — Edelstahl enthält Chrom (mind. 10,5 %), das eine passive Cr₂O₃-Schutzschicht bildet.

**Batterien** und **Brennstoffzellen** nutzen Redox-Reaktionen zur Energiegewinnung im Alltag. Eine Alkali-Mangan-Batterie verwendet Zink als Anode und Mangandioxid (MnO₂) als Kathode mit einer Spannung von ca. 1,5 V. Lithium-Ionen-Akkumulatoren (wiederaufladbar) nutzen die Interkalation von Li⁺-Ionen in Graphit (Anode) und Lithium-Metalloxide (Kathode) und liefern ca. 3,7 V. **Brennstoffzellen** wandeln den Brennstoff (meist Wasserstoff) kontinuierlich in elektrische Energie um: An der Anode wird H₂ oxidiert (H₂ → 2 H⁺ + 2 e⁻), an der Kathode wird O₂ reduziert (O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O). Brennstoffzellen haben einen höheren Wirkungsgrad als Verbrennungsmotoren (bis zu 60 %) und emittieren nur Wasser — sie gelten als vielversprechende Technologie für nachhaltige Energieversorgung und Mobilität.`,
      merksaetze: [
        'Rost entsteht durch elektrochemische Korrosion: Fe wird oxidiert, O₂ in Gegenwart von H₂O reduziert. Rost ist NICHT schützend (im Gegensatz zu Al₂O₃ bei Aluminium).',
        'Opferanode: Ein unedleres Metall (z. B. Zink für Eisen) korrodiert bevorzugt und schützt das edlere Metall — Prinzip der Verzinkung und des kathodischen Schutzes.'
      ],
      altfrage: {
        question: 'Warum schützt eine Verzinkung Eisen auch dann noch vor Korrosion, wenn die Zinkschicht beschädigt ist?',
        answer: 'Zink (E° = -0,76 V) ist unedler als Eisen (E° = -0,44 V). An der Beschädigungsstelle bildet sich ein Lokalelement, in dem Zink als Opferanode bevorzugt oxidiert wird. Eisen wird zur Kathode und ist so kathodisch geschützt, solange noch Zink vorhanden ist.'
      },
      klinischerBezug: 'Bei metallischen Implantaten (z. B. Gelenkprothesen aus Titan oder Edelstahl) ist Korrosionsbeständigkeit essenziell. Titan bildet eine stabile TiO₂-Passivierungsschicht und ist biokompatibel. Korrosion bei minderwertigen Legierungen kann Metallionen freisetzen, die zu lokalen Entzündungen, allergischen Reaktionen oder systemischen Vergiftungen führen.',
      selfTest: [
        {
          question: 'Warum bildet Aluminium im Gegensatz zu Eisen keine fortschreitende Korrosion?',
          options: [
            'Aluminium ist edler als Eisen und korrodiert nicht.',
            'Aluminium bildet eine dichte Al₂O₃-Passivierungsschicht.',
            'Aluminium reagiert nicht mit Sauerstoff.',
            'Aluminium ist ein Nichtmetall.'
          ],
          correctIndex: 1,
          explanation: 'Aluminium ist sogar unedler als Eisen, korrodiert also leichter. Es bildet jedoch eine extrem dünne, dichte Al₂O₃-Schicht, die das darunterliegende Metall vor weiterem Angriff schützt. Rost (Fe₂O₃·nH₂O) ist dagegen porös und bietet keinen Schutz.'
        },
        {
          question: 'In einer Wasserstoff-Brennstoffzelle entsteht an der Kathode:',
          options: [
            'Wasserstoff (H₂)',
            'Sauerstoff (O₂)',
            'Wasser (H₂O)',
            'Wasserstoffperoxid (H₂O₂)'
          ],
          correctIndex: 2,
          explanation: 'An der Kathode wird O₂ reduziert: O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O. Wasser ist das einzige Produkt einer Wasserstoff-Brennstoffzelle — daher gilt sie als besonders umweltfreundlich.'
        },
        {
          question: 'Welches Metall eignet sich als Opferanode für Eisen (E° = -0,44 V)?',
          options: [
            'Kupfer (E° = +0,34 V)',
            'Silber (E° = +0,80 V)',
            'Magnesium (E° = -2,37 V)',
            'Gold (E° = +1,50 V)'
          ],
          correctIndex: 2,
          explanation: 'Eine Opferanode muss unedler sein als das zu schützende Metall, also ein negativeres Standardpotential haben. Nur Magnesium (E° = -2,37 V) ist unedler als Eisen (E° = -0,44 V). Cu, Ag und Au sind edler.'
        }
      ]
    }
  ]
};
