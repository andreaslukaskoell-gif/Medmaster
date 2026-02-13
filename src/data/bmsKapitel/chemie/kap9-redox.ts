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
      content: `**Oxidation** ist Elektronenabgabe. **Reduktion** ist Elektronenaufnahme. Beide laufen immer gleichzeitig ab.

Das **Reduktionsmittel** gibt Elektronen ab und wird dabei selbst oxidiert. Das **Oxidationsmittel** nimmt Elektronen auf und wird dabei selbst reduziert. Merksatz: **LEO GER** — Loss of Electrons = Oxidation, Gain of Electrons = Reduction.

Die **Oxidationszahl** (OZ) ist eine formale Ladung, die jedem Atom zugeordnet wird. Wichtige Regeln: Elemente haben OZ = 0. Einatomige Ionen haben die OZ ihrer Ladung (Na⁺ → +I, Cl⁻ → -I). Fluor hat immer OZ = -I. Sauerstoff meist OZ = -II (Ausnahme: Peroxide wie H₂O₂ → -I). Wasserstoff meist OZ = +I (Ausnahme: Metallhydride wie NaH → -I). Die Summe aller OZ in neutralen Verbindungen ist 0, in Ionen gleich der Ionenladung.

Beispiel: Zn + CuSO₄ → ZnSO₄ + Cu. Zink geht von OZ 0 auf +II → Oxidation, 2 Elektronen abgegeben. Kupfer geht von +II auf 0 → Reduktion, 2 Elektronen aufgenommen. Zink ist das Reduktionsmittel, CuSO₄ das Oxidationsmittel. Triebkraft: Zink ist unedler als Kupfer (negativeres Standardpotential). In der elektrochemischen Spannungsreihe stehen unedle Metalle oben, edle unten. Unedle Metalle verdrängen edle aus Lösung.`,
      merksätze: [
        'LEO GER: Loss of Electrons = Oxidation, Gain of Electrons = Reduction. Oxidation = Elektronenabgabe = OZ steigt. Reduktion = Elektronenaufnahme = OZ sinkt.',
        'Oxidationsmittel wird selbst reduziert (nimmt e⁻ auf). Reduktionsmittel wird selbst oxidiert (gibt e⁻ ab). Unedle Metalle verdrängen edle aus Lösung.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Oxidationszahlen aller Atome in KMnO₄ und geben Sie an, welches Atom bei der Reduktion zu Mn²⁺ reduziert wird.',
        answer: 'K = +I, O = -II (×4 = -VIII), Mn = +VII (da +I + x + (-VIII) = 0 → x = +VII). Bei der Reduktion zu Mn²⁺ sinkt die OZ von Mn von +VII auf +II — Mangan wird reduziert (nimmt 5 Elektronen auf).'
      },
      klinischerBezug: 'Bei **Methämoglobinämie** wird Fe²⁺ im Hämoglobin zu Fe³⁺ oxidiert — das Hämoglobin kann dann kein O₂ mehr binden. Symptome: Zyanose, Atemnot. Therapie: **Methylenblau** i.v. als Reduktionsmittel, das Fe³⁺ wieder zu Fe²⁺ reduziert. Auslöser: Nitrit (z. B. aus verdorbenem Gemüse), Lokalanästhetika (Prilocain), Dapson.',
      selfTest: [
        {
          question: 'Was ist die Oxidationszahl von Schwefel in H₂SO₄?',
          options: [
            '+II',
            '+IV',
            '+VI',
            '-II',
            '+VIII'
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
            'FeSO₄',
            'SO₄²⁻'
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
            'Unedle Metalle sind starke Reduktionsmittel.',
            'Das Reduktionsmittel nimmt Elektronen auf.'
          ],
          correctIndex: 1,
          explanation: 'Bei der Oxidation STEIGT die Oxidationszahl (Elektronenabgabe), sie sinkt nicht. Die anderen Aussagen sind korrekt: Oxidation und Reduktion sind immer gekoppelt, das Oxidationsmittel wird reduziert, und unedle Metalle geben leicht Elektronen ab.'
        }
      ]
    },
    {
      id: 'chem-kap9-2',
      title: 'Redoxgleichungen aufstellen',
      content: `Redoxgleichungen werden mit der **Teilgleichungsmethode** (Halbreaktionsmethode) aufgestellt. Sie ist systematisch und zuverlässig.

**Schritt 1**: Oxidationszahlen bestimmen. Atome identifizieren, deren OZ sich ändert. Gesamtreaktion in zwei Teilgleichungen aufspalten: Oxidation (Elektronenabgabe) und Reduktion (Elektronenaufnahme).

**Schritt 2**: Jede Teilgleichung einzeln ausgleichen. (1) Atome mit OZ-Änderung ausgleichen. (2) In saurer Lösung: Sauerstoffatome mit H₂O ausgleichen, Wasserstoffatome mit H⁺. In basischer Lösung zusätzlich OH⁻ verwenden. (3) Ladung mit Elektronen (e⁻) ausgleichen. Beispiel saure Lösung: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O. Permanganat nimmt 5 Elektronen auf, Mangan geht von +VII auf +II.

**Schritt 3**: Beide Teilgleichungen zusammenführen. Elektronenzahl muss gleich sein. Teilgleichungen mit passenden Faktoren multiplizieren (kleinstes gemeinsames Vielfaches). Beispiel: Oxidation von Fe²⁺ durch KMnO₄ in saurer Lösung. Oxidation: Fe²⁺ → Fe³⁺ + e⁻ (×5). Reduktion: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O (×1). Gesamt: 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O. Kontrolle: Atom- UND Ladungsbilanz prüfen. Links: 5(+2) + (-1) + 8(+1) = +17. Rechts: 5(+3) + (+2) + 0 = +17. Stimmt.`,
      merksätze: [
        'Teilgleichungsmethode: (1) OZ bestimmen, (2) Teilgleichungen aufstellen und mit e⁻ ausgleichen, (3) Elektronenzahl angleichen und addieren.',
        'Kontrolle: Sowohl die Atombilanz als auch die Ladungsbilanz müssen auf beiden Seiten übereinstimmen!'
      ],
      altfrage: {
        question: 'Stellen Sie die Redox-Teilgleichungen für die Reaktion von Zink mit Salzsäure auf (Zn + HCl → ZnCl₂ + H₂).',
        answer: 'Oxidation: Zn → Zn²⁺ + 2 e⁻ (OZ: 0 → +II). Reduktion: 2 H⁺ + 2 e⁻ → H₂ (OZ: +I → 0). Gesamt: Zn + 2 H⁺ → Zn²⁺ + H₂. Zink ist das Reduktionsmittel, H⁺ das Oxidationsmittel.'
      },
      klinischerBezug: '**Kaliumpermanganat** (KMnO₄) wird als Desinfektionsmittel verwendet (z. B. bei Hautpilz, Fußbad). Mn geht von +VII auf +II oder +IV — die stark oxidierende Wirkung zerstört Bakterien und organisches Material. **Wasserstoffperoxid** (H₂O₂) wird zur Wunddesinfektion eingesetzt: Es wird zu H₂O und O₂ reduziert, der freigesetzte Sauerstoff wirkt antimikrobiell (Schäumen). Achtung: H₂O₂ schädigt auch gesundes Gewebe.',
      selfTest: [
        {
          question: 'Wie viele Elektronen gibt Eisen in der Teilgleichung Fe → Fe³⁺ + ? e⁻ ab?',
          options: [
            '1 Elektron',
            '2 Elektronen',
            '3 Elektronen',
            '6 Elektronen',
            '4 Elektronen'
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
            'O²⁻-Ionen',
            'H₂O₂-Molekülen'
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
            'Die Konzentration der Lösungen',
            'Die Oxidationszahlen aller beteiligten Elemente'
          ],
          correctIndex: 1,
          explanation: 'Die Elektronenzahl in der Oxidations-Teilgleichung muss gleich der Elektronenzahl in der Reduktions-Teilgleichung sein, damit sich die Elektronen beim Addieren aufheben. Dazu werden die Teilgleichungen mit passenden Faktoren multipliziert.'
        }
      ]
    },
    {
      id: 'chem-kap9-3',
      title: 'Elektrochemie',
      content: `Die **galvanische Zelle** wandelt chemische Energie in elektrische Energie um. Sie besteht aus zwei Halbzellen, verbunden durch eine Salzbrücke. Jede Halbzelle: Elektrode in Elektrolytlösung.

**Daniell-Element**: Zinkplatte in ZnSO₄ (Anode, Oxidation: Zn → Zn²⁺ + 2 e⁻). Kupferplatte in CuSO₄ (Kathode, Reduktion: Cu²⁺ + 2 e⁻ → Cu). Elektronen fließen durch äußeren Leiter von Anode (Minuspol) zur Kathode (Pluspol). Salzbrücke schließt inneren Stromkreis durch Ionentransport — hält Elektroneutralität in beiden Halbzellen aufrecht.

**Standardpotentiale** (E°): Spannung einer Halbzelle gegen Normal-Wasserstoffelektrode (NHE, E° = 0,00 V per Definition) bei Standardbedingungen (25 °C, 1 mol/L, 1 atm). Elektrochemische Spannungsreihe: Unedle Metalle (Li -3,04 V, Na -2,71 V, Zn -0,76 V) → stark negative Potentiale, gute Reduktionsmittel. Edle Metalle (Cu +0,34 V, Ag +0,80 V, Au +1,50 V) → positive Potentiale, schwache Reduktionsmittel. Zellspannung: E°(Zelle) = E°(Kathode) - E°(Anode). Daniell-Zelle: E° = (+0,34) - (-0,76) = +1,10 V.

**Elektrolyse**: Umkehrter Prozess. Elektrische Energie wird zugeführt, um nicht-spontane Redox-Reaktion zu erzwingen. Anode (Pluspol) → Oxidation. Kathode (Minuspol) → Reduktion. Polarität umgekehrt zur galvanischen Zelle! Beispiel Wasserelektrolyse: Kathode: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻. Anode: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Faradaysche Gesetze: m = (M · I · t) / (z · F). F = 96485 C/mol (Faraday-Konstante), z = Anzahl übertragener Elektronen.`,
      merksätze: [
        'Galvanische Zelle: Anode = Oxidation = Minuspol, Kathode = Reduktion = Pluspol. E°(Zelle) = E°(Kathode) - E°(Anode).',
        'Elektrolyse: Erzwungene Redox-Reaktion durch externe Spannung. Anode = Oxidation (Pluspol!), Kathode = Reduktion (Minuspol!) — Polarität umgekehrt zur galvanischen Zelle!'
      ],
      altfrage: {
        question: 'Berechnen Sie die Standardzellspannung für eine galvanische Zelle aus Zink (E° = -0,76 V) und Silber (E° = +0,80 V).',
        answer: 'Zink ist unedler → Anode (Oxidation). Silber ist edler → Kathode (Reduktion). E°(Zelle) = E°(Kathode) - E°(Anode) = (+0,80) - (-0,76) = +1,56 V.'
      },
      klinischerBezug: 'Das **Ruhemembranpotential** (-70 mV) entsteht durch Konzentrationsunterschiede von Na⁺ und K⁺ über die Zellmembran — analog zu galvanischen Halbzellen. Die **Na⁺/K⁺-ATPase** arbeitet wie eine biologische Elektrolyse: Sie verbraucht ATP-Energie, um Ionen gegen ihren Konzentrationsgradienten zu pumpen (3 Na⁺ raus, 2 K⁺ rein). Bei Herzschrittmachern kommen Lithium-Ionen-Batterien zum Einsatz (galvanisches Prinzip).',
      selfTest: [
        {
          question: 'Wo findet in einer galvanischen Zelle die Oxidation statt?',
          options: [
            'An der Kathode (Pluspol)',
            'An der Anode (Minuspol)',
            'In der Salzbrücke',
            'An der Kathode (Minuspol)',
            'An beiden Elektroden gleichzeitig'
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
            'Sie verhindert jeglichen Stofftransport.',
            'Sie speichert die freigesetzte Energie als Wärme.'
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
            'Ozon (O₃)',
            'Wasserdampf (H₂O(g))'
          ],
          correctIndex: 1,
          explanation: 'An der Kathode findet die Reduktion statt: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻. Wasserstoff wird abgeschieden. Sauerstoff entsteht an der Anode durch Oxidation.'
        }
      ]
    },
    {
      id: 'chem-kap9-4',
      title: 'Korrosion & Alltag',
      content: `**Korrosion** ist elektrochemische Zersetzung von Metallen durch Umgebungseinflüsse. Bekanntestes Beispiel: **Rosten von Eisen**.

Mechanismus: An anodischen Bereichen (Kratzer, Korngrenzen) wird Eisen oxidiert: Fe → Fe²⁺ + 2 e⁻. An kathodischen Bereichen wird Sauerstoff reduziert: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Fe²⁺ reagiert weiter zu Fe(OH)₃, das zu Rost (Fe₂O₃ · n H₂O) dehydratisiert. Rost bildet KEINE schützende Schicht — Eisen korrodiert weiter. Im Gegensatz dazu: Aluminium bildet dichte Al₂O₃-Passivierungsschicht.

**Korrosionsschutz**: (1) **Beschichtung** — Lacke, Farben schließen Metall von O₂ und H₂O ab. (2) **Verzinkung** — Zink (E° = -0,76 V) ist unedler als Eisen (E° = -0,44 V), wird bevorzugt oxidiert (Opferanode). Selbst bei Beschädigung schützt Zink das Eisen. (3) **Kathodischer Schutz** — noch unedleres Metall (z. B. Mg) wird als Opferanode angebracht, korrodiert statt des Eisens. Anwendung: Pipelines, Schiffe. (4) **Legierung** — Edelstahl enthält Chrom (mind. 10,5 %), bildet passive Cr₂O₃-Schutzschicht.

**Batterien** nutzen Redox-Reaktionen. Alkali-Mangan-Batterie: Zn-Anode, MnO₂-Kathode, 1,5 V. Lithium-Ionen-Akku: Li⁺-Interkalation in Graphit (Anode) und Li-Metalloxide (Kathode), 3,7 V. **Brennstoffzellen** wandeln Brennstoff kontinuierlich in Strom um. H₂-Brennstoffzelle: Anode: H₂ → 2 H⁺ + 2 e⁻. Kathode: O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O. Wirkungsgrad bis 60 % (höher als Verbrennungsmotor). Emission: nur Wasser.`,
      merksätze: [
        'Rost entsteht durch elektrochemische Korrosion: Fe wird oxidiert, O₂ in Gegenwart von H₂O reduziert. Rost ist NICHT schützend (im Gegensatz zu Al₂O₃ bei Aluminium).',
        'Opferanode: Ein unedleres Metall (z. B. Zink für Eisen) korrodiert bevorzugt und schützt das edlere Metall — Prinzip der Verzinkung und des kathodischen Schutzes.'
      ],
      altfrage: {
        question: 'Warum schützt eine Verzinkung Eisen auch dann noch vor Korrosion, wenn die Zinkschicht beschädigt ist?',
        answer: 'Zink (E° = -0,76 V) ist unedler als Eisen (E° = -0,44 V). An der Beschädigungsstelle bildet sich ein Lokalelement, in dem Zink als Opferanode bevorzugt oxidiert wird. Eisen wird zur Kathode und ist so kathodisch geschützt, solange noch Zink vorhanden ist.'
      },
      klinischerBezug: 'Bei metallischen **Implantaten** (Gelenkprothesen aus Titan oder Edelstahl) ist Korrosionsbeständigkeit essenziell. **Titan** bildet stabile TiO₂-Passivierungsschicht, ist biokompatibel. Minderwertige Legierungen können korrodieren und Metallionen freisetzen → lokale Entzündung, allergische Reaktion (z. B. Nickelallergie), systemische Vergiftung. Bei MRT-Untersuchungen können ferromagnetische Implantate (z. B. Stahl) Probleme verursachen.',
      selfTest: [
        {
          question: 'Warum bildet Aluminium im Gegensatz zu Eisen keine fortschreitende Korrosion?',
          options: [
            'Aluminium ist edler als Eisen und korrodiert nicht.',
            'Aluminium bildet eine dichte Al₂O₃-Passivierungsschicht.',
            'Aluminium reagiert nicht mit Sauerstoff.',
            'Aluminium ist ein Nichtmetall.',
            'Aluminium hat ein höheres Standardpotential als Eisen.'
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
            'Wasserstoffperoxid (H₂O₂)',
            'Hydroxid-Ionen (OH⁻)'
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
            'Gold (E° = +1,50 V)',
            'Zinn (E° = -0,14 V)'
          ],
          correctIndex: 2,
          explanation: 'Eine Opferanode muss unedler sein als das zu schützende Metall, also ein negativeres Standardpotential haben. Nur Magnesium (E° = -2,37 V) ist unedler als Eisen (E° = -0,44 V). Cu, Ag und Au sind edler.'
        }
      ]
    }
  ]
};
