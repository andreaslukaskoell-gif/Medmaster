import type { Kapitel } from '../types';

export const chemKap2: Kapitel = {
  id: 'chem-kap2',
  title: 'Atombau',
  subject: 'chemie',
  icon: '⚛️',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap2-uk1',
      title: 'Atommodelle',
      content: `Die Entwicklung der Atommodelle ist eine faszinierende Geschichte der Naturwissenschaften, die von der Antike bis zur modernen Quantenmechanik reicht. Das erste wissenschaftliche Atommodell wurde von John Dalton Anfang des 19. Jahrhunderts formuliert. Dalton stellte sich Atome als unteilbare, massive Kugeln vor, die sich je nach Element in Masse und Größe unterscheiden. Sein Modell erklärte das Gesetz der konstanten Proportionen und das Gesetz der multiplen Proportionen, konnte jedoch elektrische Phänomene nicht beschreiben. 1897 entdeckte J. J. Thomson das Elektron durch Kathodenstrahlexperimente und entwickelte das sogenannte Rosinenkuchenmodell (Plumpudding-Modell). In diesem Modell sind negativ geladene Elektronen gleichmäßig in eine positiv geladene Masse eingebettet, sodass das Atom insgesamt elektrisch neutral ist.

Ernest Rutherford führte 1911 den berühmten Streuversuch durch, bei dem Alpha-Teilchen auf eine dünne Goldfolie geschossen wurden. Die Beobachtung, dass die meisten Alpha-Teilchen die Folie ungehindert durchdrangen, einige jedoch stark abgelenkt wurden und manche sogar zurückgeworfen wurden, führte zu einem revolutionären Schluss: Die gesamte positive Ladung und fast die gesamte Masse des Atoms sind in einem winzigen Kern konzentriert, der nur etwa 10⁻¹⁵ m Durchmesser hat, während das Atom selbst einen Durchmesser von etwa 10⁻¹⁰ m besitzt. Die Elektronen umkreisen diesen Kern in großem Abstand. Dieses Kern-Hülle-Modell hatte jedoch ein Problem: Nach der klassischen Elektrodynamik müssten kreisende Elektronen ständig Energie abstrahlen und letztlich in den Kern stürzen.

Niels Bohr löste dieses Problem 1913 mit seinem Postulat, dass Elektronen nur auf bestimmten stabilen Bahnen (Schalen) um den Kern kreisen, ohne Energie abzustrahlen. Energieabgabe oder -aufnahme erfolgt nur beim Übergang zwischen diesen Bahnen in Form von Photonen mit der Energie ΔE = h·f. Bohrs Modell erklärte das Linienspektrum des Wasserstoffs exakt, versagte jedoch bei Mehrelektronensystemen. Das heute gültige Orbitalmodell (quantenmechanisches Modell) wurde in den 1920er-Jahren von Schrödinger, Heisenberg und Dirac entwickelt. Es beschreibt Elektronen nicht als Teilchen auf festen Bahnen, sondern als Wellenfunktionen (Orbitale), die die Aufenthaltswahrscheinlichkeit des Elektrons im Raum angeben. Ein Orbital ist der Raumbereich, in dem sich ein Elektron mit einer Wahrscheinlichkeit von etwa 90 % aufhält.`,
      lernziele: [
        'Die historische Entwicklung der Atommodelle beschreiben können',
        'Die Ergebnisse des Rutherford-Streuversuchs erklären können',
        'Den Unterschied zwischen Bohrschen Bahnen und Orbitalen verstehen'
      ],
      sections: [
        {
          heading: 'Von Dalton bis Thomson',
          text: `Das erste wissenschaftliche Atommodell wurde von John Dalton Anfang des 19. Jahrhunderts formuliert. Dalton stellte sich Atome als unteilbare, massive Kugeln vor, die sich je nach Element in Masse und Größe unterscheiden. Sein Modell erklärte das Gesetz der konstanten Proportionen und das Gesetz der multiplen Proportionen, konnte jedoch elektrische Phänomene nicht beschreiben.

1897 entdeckte J. J. Thomson das Elektron durch Kathodenstrahlexperimente und entwickelte das sogenannte Rosinenkuchenmodell (Plumpudding-Modell). In diesem Modell sind negativ geladene Elektronen gleichmäßig in eine positiv geladene Masse eingebettet, sodass das Atom insgesamt elektrisch neutral ist.`
        },
        {
          heading: 'Rutherfords Streuversuch',
          text: `Ernest Rutherford führte 1911 den berühmten Streuversuch durch, bei dem Alpha-Teilchen auf eine dünne Goldfolie geschossen wurden. Die Beobachtung, dass die meisten Alpha-Teilchen die Folie ungehindert durchdrangen, einige jedoch stark abgelenkt wurden und manche sogar zurückgeworfen wurden, führte zu einem revolutionären Schluss: Die gesamte positive Ladung und fast die gesamte Masse des Atoms sind in einem winzigen Kern konzentriert, der nur etwa 10⁻¹⁵ m Durchmesser hat, während das Atom selbst einen Durchmesser von etwa 10⁻¹⁰ m besitzt.

Die Elektronen umkreisen diesen Kern in großem Abstand. Dieses Kern-Hülle-Modell hatte jedoch ein Problem: Nach der klassischen Elektrodynamik müssten kreisende Elektronen ständig Energie abstrahlen und letztlich in den Kern stürzen.`,
          merksatz: 'Die Entwicklung der Atommodelle: Dalton (massive Kugel) → Thomson (Rosinenkuchen) → Rutherford (Kern-Hülle) → Bohr (Schalen mit quantisierten Bahnen) → Orbitalmodell (Aufenthaltswahrscheinlichkeit).'
        },
        {
          heading: 'Bohrsches Modell und Quantenmechanik',
          text: `Niels Bohr löste dieses Problem 1913 mit seinem Postulat, dass Elektronen nur auf bestimmten stabilen Bahnen (Schalen) um den Kern kreisen, ohne Energie abzustrahlen. Energieabgabe oder -aufnahme erfolgt nur beim Übergang zwischen diesen Bahnen in Form von Photonen mit der Energie ΔE = h·f. Bohrs Modell erklärte das Linienspektrum des Wasserstoffs exakt, versagte jedoch bei Mehrelektronensystemen.

Das heute gültige Orbitalmodell (quantenmechanisches Modell) wurde in den 1920er-Jahren von Schrödinger, Heisenberg und Dirac entwickelt. Es beschreibt Elektronen nicht als Teilchen auf festen Bahnen, sondern als Wellenfunktionen (Orbitale), die die Aufenthaltswahrscheinlichkeit des Elektrons im Raum angeben. Ein Orbital ist der Raumbereich, in dem sich ein Elektron mit einer Wahrscheinlichkeit von etwa 90 % aufhält.`,
          table: {
            headers: ['Modell', 'Entwickler', 'Kernidee', 'Limitation'],
            rows: [
              ['Massivkugel-Modell', 'John Dalton (ca. 1803)', 'Atome sind unteilbare, massive Kugeln unterschiedlicher Masse', 'Kann elektrische Phänomene nicht erklären'],
              ['Rosinenkuchenmodell', 'J. J. Thomson (1897)', 'Elektronen sind in eine positive Masse eingebettet', 'Kann die Konzentration positiver Ladung im Kern nicht erklären'],
              ['Kern-Hülle-Modell', 'Ernest Rutherford (1911)', 'Positive Ladung und Masse im winzigen Kern konzentriert, Elektronen in der Hülle', 'Kreisende Elektronen müssten Energie abstrahlen und in den Kern stürzen'],
              ['Schalenmodell', 'Niels Bohr (1913)', 'Elektronen auf stabilen, quantisierten Bahnen; Energieaustausch nur bei Übergängen', 'Versagt bei Mehrelektronensystemen']
            ]
          }
        }
      ],
      merksaetze: [
        'Die Entwicklung der Atommodelle: Dalton (massive Kugel) → Thomson (Rosinenkuchen) → Rutherford (Kern-Hülle) → Bohr (Schalen mit quantisierten Bahnen) → Orbitalmodell (Aufenthaltswahrscheinlichkeit).',
        'Im Orbitalmodell beschreiben Wellenfunktionen die Aufenthaltswahrscheinlichkeit der Elektronen. Ein Orbital ist kein fester Weg, sondern ein Wahrscheinlichkeitsraum (ca. 90 %).'
      ],
      altfrage: {
        question: 'Welche Beobachtung im Rutherford-Streuversuch führte zur Entdeckung des Atomkerns?',
        answer: 'Einige Alpha-Teilchen wurden beim Durchgang durch eine dünne Goldfolie stark abgelenkt oder sogar zurückgeworfen. Dies bewies, dass die positive Ladung und fast die gesamte Masse des Atoms in einem winzigen, dichten Kern konzentriert sind.'
      },
      klinischerBezug: 'Das Bohrsche Atommodell bildet die Grundlage für das Verständnis der Röntgendiagnostik. Wenn innere Elektronen aus ihren Schalen herausgeschlagen werden und äußere Elektronen nachrücken, wird charakteristische Röntgenstrahlung emittiert. Dieses Prinzip wird in der Computertomographie (CT) und konventionellen Röntgenaufnahmen genutzt.',
      selfTest: [
        {
          question: 'Welches Atommodell beschreibt Elektronen als Wellenfunktionen mit Aufenthaltswahrscheinlichkeiten?',
          options: [
            'Dalton-Modell',
            'Bohr-Modell',
            'Rutherford-Modell',
            'Orbitalmodell (quantenmechanisches Modell)',
            'Thomson-Modell (Rosinenkuchenmodell)'
          ],
          correctIndex: 3,
          explanation: 'Das Orbitalmodell beschreibt Elektronen nicht als Teilchen auf festen Bahnen, sondern als Wellenfunktionen (Orbitale), die die Aufenthaltswahrscheinlichkeit im Raum angeben.'
        },
        {
          question: 'Was war die zentrale Erkenntnis aus dem Rutherford-Streuversuch?',
          options: [
            'Atome sind unteilbar',
            'Elektronen bewegen sich auf festen Bahnen',
            'Die positive Ladung und Masse sind in einem winzigen Kern konzentriert',
            'Elektronen sind negativ geladen',
            'Atome bestehen hauptsächlich aus Neutronen'
          ],
          correctIndex: 2,
          explanation: 'Die starke Ablenkung und teilweise Reflexion von Alpha-Teilchen an einer Goldfolie bewies, dass Atome einen winzigen, massereichen, positiv geladenen Kern besitzen.'
        },
        {
          question: 'Welches Problem hatte das Rutherford-Modell, das Bohr löste?',
          options: [
            'Es konnte die Masse des Atoms nicht erklären',
            'Kreisende Elektronen müssten nach klassischer Physik Energie abstrahlen und in den Kern stürzen',
            'Es konnte keine negativen Ladungen erklären',
            'Es sagte eine zu große Atomgröße voraus',
            'Es konnte die Existenz von Neutronen nicht erklären'
          ],
          correctIndex: 1,
          explanation: 'Nach der klassischen Elektrodynamik strahlen beschleunigte Ladungen (kreisende Elektronen) ständig Energie ab. Bohr postulierte stabile Bahnen ohne Energieabstrahlung und löste damit das Problem.'
        }
      ]
    },
    {
      id: 'chem-kap2-uk2',
      title: 'Elektronenkonfiguration',
      diagram: 'atomic-orbitals',
      content: `Die Elektronenkonfiguration beschreibt die Verteilung der Elektronen eines Atoms auf die verschiedenen Orbitale. Sie wird durch drei fundamentale Prinzipien bestimmt: das Aufbauprinzip (Klechkowski-Regel), die Hundsche Regel und das Pauli-Prinzip. Das Aufbauprinzip besagt, dass die Orbitale in der Reihenfolge steigender Energie besetzt werden. Die energetische Reihenfolge folgt dabei dem Schema: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p. Auffällig ist, dass das 4s-Orbital vor dem 3d-Orbital besetzt wird, da es bei neutralen Atomen eine niedrigere Energie aufweist. Bei Ionen kann sich diese Reihenfolge jedoch umkehren.

Das Pauli-Prinzip (Pauli-Verbot) besagt, dass keine zwei Elektronen in einem Atom in allen vier Quantenzahlen übereinstimmen dürfen. Da ein Orbital durch drei Quantenzahlen (n, l, mₗ) definiert wird, kann jedes Orbital maximal zwei Elektronen mit entgegengesetztem Spin (mₛ = +½ und mₛ = -½) aufnehmen. Daraus ergibt sich die maximale Besetzung der Unterschalen: s-Orbitale (l = 0) haben eine Orientierung (mₗ = 0), also maximal 2 Elektronen; p-Orbitale (l = 1) haben drei Orientierungen (mₗ = -1, 0, +1), also maximal 6 Elektronen; d-Orbitale (l = 2) haben fünf Orientierungen, also maximal 10 Elektronen; f-Orbitale (l = 3) haben sieben Orientierungen, also maximal 14 Elektronen. Die maximale Elektronenzahl pro Schale beträgt somit 2n².

Die Hundsche Regel (Regel der maximalen Multiplizität) besagt, dass energetisch gleichwertige Orbitale (z. B. die drei p-Orbitale) zunächst einfach besetzt werden, bevor eine Doppelbesetzung erfolgt, und zwar mit parallelem Spin. Dies führt zu einer energetisch günstigeren Konfiguration, da sich Elektronen mit gleichem Spin gegenseitig besser ausweichen (Austauschwechselwirkung). Als Beispiel hat Stickstoff (Z = 7) die Konfiguration 1s² 2s² 2p³, wobei jedes der drei 2p-Orbitale einfach besetzt ist. Besonders stabile Elektronenkonfigurationen ergeben sich bei halbgefüllten und vollständig gefüllten Unterschalen. Dies erklärt die Ausnahmen bei Chrom (Cr: [Ar] 3d⁵ 4s¹ statt [Ar] 3d⁴ 4s²) und Kupfer (Cu: [Ar] 3d¹⁰ 4s¹ statt [Ar] 3d⁹ 4s²), wo die besondere Stabilität der halbgefüllten bzw. vollgefüllten d-Unterschale die reguläre Besetzungsreihenfolge überwiegt.`,
      merksaetze: [
        'Aufbauprinzip: Orbitale werden in der Reihenfolge steigender Energie besetzt (1s, 2s, 2p, 3s, 3p, 4s, 3d, ...). Pauli: max. 2 Elektronen pro Orbital mit entgegengesetztem Spin. Hund: Gleichwertige Orbitale werden erst einfach besetzt.',
        'Maximale Elektronenzahl: s = 2, p = 6, d = 10, f = 14. Pro Schale n maximal 2n² Elektronen. Halbgefüllte und vollgefüllte Unterschalen sind besonders stabil.'
      ],
      altfrage: {
        question: 'Warum hat Chrom die Elektronenkonfiguration [Ar] 3d⁵ 4s¹ und nicht [Ar] 3d⁴ 4s²?',
        answer: 'Halbgefüllte Unterschalen (3d⁵) sind besonders stabil. Die Austauschwechselwirkung bei fünf parallelen Spins in den d-Orbitalen ist energetisch so günstig, dass ein Elektron aus dem 4s-Orbital in das 3d-Orbital wechselt.'
      },
      klinischerBezug: 'Die Elektronenkonfiguration bestimmt die chemischen Eigenschaften von Übergangsmetallen, die als Cofaktoren in Enzymen dienen. Eisen kann zwischen Fe²⁺ ([Ar] 3d⁶) und Fe³⁺ ([Ar] 3d⁵) wechseln, was für den Elektronentransport in der Atmungskette und den Sauerstofftransport im Hämoglobin essenziell ist.',
      selfTest: [
        {
          question: 'Wie lautet die Elektronenkonfiguration von Sauerstoff (Z = 8)?',
          options: [
            '1s² 2s² 2p⁶',
            '1s² 2s² 2p⁴',
            '1s² 2s² 2p² 3s²',
            '1s² 2p⁶',
            '1s² 2s² 2p³ 3s¹'
          ],
          correctIndex: 1,
          explanation: 'Sauerstoff hat 8 Elektronen. Nach dem Aufbauprinzip: 1s² (2) → 2s² (4) → 2p⁴ (8). Die verbleibenden 4 Elektronen werden auf die 2p-Orbitale verteilt.'
        },
        {
          question: 'Wie viele Elektronen passen maximal in die dritte Schale (n = 3)?',
          options: [
            '8',
            '18',
            '32',
            '2',
            '12'
          ],
          correctIndex: 1,
          explanation: 'Die maximale Elektronenzahl pro Schale beträgt 2n². Für n = 3: 2 × 3² = 18 Elektronen (verteilt auf 3s, 3p und 3d).'
        },
        {
          question: 'Was besagt die Hundsche Regel?',
          options: [
            'Orbitale werden in Reihenfolge steigender Energie besetzt',
            'Jedes Orbital kann maximal zwei Elektronen aufnehmen',
            'Energetisch gleichwertige Orbitale werden erst einfach und mit parallelem Spin besetzt',
            'Elektronen können nicht gleichzeitig in allen vier Quantenzahlen übereinstimmen',
            'Die Elektronenspins in einem Orbital müssen immer parallel sein'
          ],
          correctIndex: 2,
          explanation: 'Die Hundsche Regel besagt, dass energetisch gleichwertige Orbitale (z. B. die drei p-Orbitale) zunächst einfach besetzt werden, bevor eine Doppelbesetzung erfolgt, und zwar mit parallelem Spin.'
        }
      ]
    },
    {
      id: 'chem-kap2-uk3',
      title: 'Isotope & Nuklide',
      content: `Jedes Atom wird durch seine Ordnungszahl Z (Anzahl der Protonen) und seine Massenzahl A (Summe aus Protonen und Neutronen) eindeutig als Nuklid charakterisiert. Die Schreibweise ist ᴬ_Z X, wobei X das Elementsymbol ist. Die Ordnungszahl Z bestimmt, um welches Element es sich handelt, und ist identisch mit der Anzahl der Elektronen im neutralen Atom. Die Neutronen (N = A - Z) tragen zur Masse bei, beeinflussen aber nicht die chemischen Eigenschaften, da diese von der Elektronenkonfiguration abhängen. Atome desselben Elements mit unterschiedlicher Neutronenzahl werden als Isotope bezeichnet. So hat Kohlenstoff die stabilen Isotope ¹²C (6 Neutronen, 98,9 % Häufigkeit) und ¹³C (7 Neutronen, 1,1 % Häufigkeit) sowie das radioaktive Isotop ¹⁴C (8 Neutronen).

Die relative Atommasse eines Elements, wie sie im PSE angegeben ist, stellt den gewichteten Mittelwert der Atommassen aller natürlich vorkommenden Isotope dar. So beträgt die relative Atommasse von Chlor 35,45 u, was den Mittelwert aus ³⁵Cl (75,77 %) und ³⁷Cl (24,23 %) widerspiegelt. Die atomare Masseneinheit u (unified atomic mass unit) ist als ein Zwölftel der Masse eines ¹²C-Atoms definiert und beträgt 1,66054 × 10⁻²⁷ kg. Isotope unterscheiden sich zwar nicht in ihren chemischen Eigenschaften, können aber physikalische Unterschiede aufweisen, wie unterschiedliche Diffusionsgeschwindigkeiten oder Schwingungsfrequenzen (Isotopeneffekt). Diese Unterschiede werden in der Analytik genutzt, beispielsweise in der Massenspektrometrie.

Radioaktive Isotope (Radionuklide) besitzen instabile Kerne, die unter Aussendung von Strahlung zerfallen. Es gibt drei Hauptarten des radioaktiven Zerfalls: Beim Alpha-Zerfall (α) wird ein Helium-4-Kern (2 Protonen + 2 Neutronen) emittiert, wobei die Ordnungszahl um 2 und die Massenzahl um 4 sinkt. Beim Beta-minus-Zerfall (β⁻) wird ein Neutron in ein Proton umgewandelt, wobei ein Elektron und ein Antineutrino emittiert werden; die Ordnungszahl steigt um 1. Beim Gamma-Zerfall (γ) wird überschüssige Energie als elektromagnetische Strahlung abgegeben, ohne dass sich Ordnungszahl oder Massenzahl ändern. Die Halbwertszeit t₁/₂ ist die Zeit, in der die Hälfte der radioaktiven Atome zerfallen ist. Sie ist für jedes Radionuklid charakteristisch und reicht von Bruchteilen einer Sekunde bis zu Milliarden von Jahren (z. B. ²³⁸U: t₁/₂ ≈ 4,5 × 10⁹ Jahre).`,
      merksaetze: [
        'Isotope sind Atome desselben Elements (gleiche Protonenzahl Z) mit unterschiedlicher Neutronenzahl N. Sie haben gleiche chemische, aber unterschiedliche physikalische Eigenschaften (Masse, Stabilität).',
        'Radioaktiver Zerfall: α-Zerfall (A-4, Z-2), β⁻-Zerfall (A gleich, Z+1), γ-Zerfall (keine Änderung von A und Z, nur Energieabgabe). Die Halbwertszeit t₁/₂ ist die Zeit, in der die Hälfte der Kerne zerfällt.'
      ],
      altfrage: {
        question: 'Was passiert bei einem Beta-minus-Zerfall mit der Ordnungszahl und der Massenzahl?',
        answer: 'Beim β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt. Die Ordnungszahl Z steigt um 1 (ein Proton mehr), die Massenzahl A bleibt gleich (ein Neutron weniger, ein Proton mehr). Es wird ein Elektron (β⁻-Teilchen) und ein Antineutrino emittiert.'
      },
      klinischerBezug: 'Radioaktive Isotope sind in der Medizin unentbehrlich. ⁹⁹ᵐTc (Technetium-99m, t₁/₂ = 6 h) ist das am häufigsten verwendete Radionuklid in der nuklearmedizinischen Diagnostik (Szintigraphie). ¹³¹I (Iod-131) wird zur Therapie von Schilddrüsenerkrankungen eingesetzt, und ¹⁴C wird in der Radiokarbonmethode zur Altersbestimmung verwendet. In der PET-Diagnostik kommen kurzlebige Positronenemitter wie ¹⁸F zum Einsatz.',
      selfTest: [
        {
          question: 'Wie viele Neutronen hat das Isotop ¹⁴C?',
          options: [
            '6',
            '8',
            '14',
            '12',
            '7'
          ],
          correctIndex: 1,
          explanation: 'Kohlenstoff hat die Ordnungszahl Z = 6 (6 Protonen). Bei ¹⁴C ist die Massenzahl A = 14. Die Neutronenzahl ist N = A - Z = 14 - 6 = 8.'
        },
        {
          question: 'Was entsteht beim Alpha-Zerfall von ²²⁶Ra (Radium-226)?',
          options: [
            'Ein Element mit Z-1 und A-1',
            'Ein Element mit Z-2 und A-4 plus ein Helium-4-Kern',
            'Ein Element mit Z+1 und gleichem A',
            'Ein Element mit Z+2 und A+4',
            'Ein Element mit Z-1 und A-2 plus ein Deuteriumkern'
          ],
          correctIndex: 1,
          explanation: 'Beim α-Zerfall wird ein Helium-4-Kern (2p + 2n) emittiert. Die Ordnungszahl sinkt um 2 (Z: 88→86, Radon) und die Massenzahl um 4 (A: 226→222).'
        },
        {
          question: 'Warum ist die relative Atommasse von Chlor im PSE 35,45 u und nicht genau 35 oder 37?',
          options: [
            'Weil Chloratome ihre Masse ständig ändern',
            'Weil es ein Messfehler ist',
            'Weil es ein gewichteter Mittelwert der natürlich vorkommenden Isotope ³⁵Cl und ³⁷Cl ist',
            'Weil Chlor 35,45 Neutronen hat',
            'Weil die Bindungsenergie der Nukleonen den Massenwert verändert'
          ],
          correctIndex: 2,
          explanation: 'Die relative Atommasse ist der gewichtete Mittelwert aller natürlich vorkommenden Isotope. Chlor besteht zu 75,77 % aus ³⁵Cl und zu 24,23 % aus ³⁷Cl, was einen Mittelwert von 35,45 u ergibt.'
        }
      ]
    }
  ]
};
