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
      content: `Die Entwicklung der Atommodelle zeigt, wie Wissenschaft funktioniert: Jedes neue Modell erklärt mehr als das vorherige.

**Dalton** (1803) stellte sich Atome als unteilbare Kugeln vor. Das erklärte chemische Reaktionen, aber nicht, warum Atome elektrisch geladen sein können.

**Thomson** (1897) entdeckte das Elektron. Sein Rosinenkuchenmodell: Negative Elektronen sind in eine positive Masse eingebettet. Das Atom ist insgesamt neutral.

**Rutherford** (1911) führte den berühmten Streuversuch durch. Er schoss Alpha-Teilchen auf eine Goldfolie. Die meisten flogen durch, einige wurden stark abgelenkt, manche zurückgeworfen. Seine Schlussfolgerung: Die gesamte positive Ladung und fast die gesamte Masse stecken in einem winzigen Kern (Durchmesser ca. 10⁻¹⁵ m), das Atom selbst ist ca. 10⁻¹⁰ m groß. Die Elektronen kreisen um den Kern. Problem: Nach klassischer Physik müssten kreisende Elektronen ständig Energie abstrahlen und in den Kern stürzen.

**Bohr** (1913) löste das Problem. Er postulierte: Elektronen bewegen sich nur auf bestimmten stabilen Bahnen (Schalen), ohne Energie abzustrahlen. Energieaustausch nur beim Übergang zwischen Bahnen (ΔE = h·f als Photon). Das erklärte das Linienspektrum von Wasserstoff perfekt, versagte aber bei Mehrelektronensystemen.

Das **Orbitalmodell** (1920er-Jahre, Schrödinger, Heisenberg) ist heute gültig. Elektronen sind keine Teilchen auf festen Bahnen, sondern **Wellenfunktionen**. Ein **Orbital** ist der Raumbereich, in dem sich ein Elektron mit 90 % Wahrscheinlichkeit aufhält.`,
      lernziele: [
        'Die historische Entwicklung der Atommodelle beschreiben können',
        'Die Ergebnisse des Rutherford-Streuversuchs erklären können',
        'Den Unterschied zwischen Bohrschen Bahnen und Orbitalen verstehen'
      ],
      sections: [
        {
          heading: 'Von Dalton bis Thomson',
          text: `**Dalton** (1803) stellte sich Atome als unteilbare Kugeln vor. Das erklärte chemische Reaktionen, aber nicht, warum Atome elektrisch geladen sein können.

**Thomson** (1897) entdeckte das Elektron durch Kathodenstrahlexperimente. Sein Rosinenkuchenmodell: Negative Elektronen sind in eine positive Masse eingebettet. Das Atom ist insgesamt neutral.`
        },
        {
          heading: 'Rutherfords Streuversuch',
          text: `**Rutherford** (1911) schoss Alpha-Teilchen auf eine Goldfolie. Die meisten flogen durch, einige wurden stark abgelenkt, manche zurückgeworfen.

Seine Schlussfolgerung: Die gesamte positive Ladung und fast die gesamte Masse stecken in einem winzigen Kern (Durchmesser ca. 10⁻¹⁵ m), das Atom selbst ist ca. 10⁻¹⁰ m groß. Die Elektronen kreisen um den Kern. Problem: Nach klassischer Physik müssten kreisende Elektronen ständig Energie abstrahlen und in den Kern stürzen.`,
          merksatz: 'Die Entwicklung der Atommodelle: Dalton (massive Kugel) → Thomson (Rosinenkuchen) → Rutherford (Kern-Hülle) → Bohr (Schalen mit quantisierten Bahnen) → Orbitalmodell (Aufenthaltswahrscheinlichkeit).'
        },
        {
          heading: 'Bohrsches Modell und Quantenmechanik',
          text: `**Bohr** (1913) postulierte: Elektronen bewegen sich nur auf bestimmten stabilen Bahnen (Schalen), ohne Energie abzustrahlen. Energieaustausch nur beim Übergang zwischen Bahnen (ΔE = h·f als Photon). Das erklärte das Linienspektrum von Wasserstoff perfekt, versagte aber bei Mehrelektronensystemen.

Das **Orbitalmodell** (1920er-Jahre, Schrödinger, Heisenberg) ist heute gültig. Elektronen sind keine Teilchen auf festen Bahnen, sondern Wellenfunktionen. Ein Orbital ist der Raumbereich, in dem sich ein Elektron mit 90 % Wahrscheinlichkeit aufhält.`,
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
      merksätze: [
        'Die Entwicklung der Atommodelle: Dalton (massive Kugel) → Thomson (Rosinenkuchen) → Rutherford (Kern-Hülle) → Bohr (Schalen mit quantisierten Bahnen) → Orbitalmodell (Aufenthaltswahrscheinlichkeit).',
        'Im Orbitalmodell beschreiben Wellenfunktionen die Aufenthaltswahrscheinlichkeit der Elektronen. Ein Orbital ist kein fester Weg, sondern ein Wahrscheinlichkeitsraum (ca. 90 %).'
      ],
      altfrage: {
        question: 'Welche Beobachtung im Rutherford-Streuversuch führte zur Entdeckung des Atomkerns?',
        answer: 'Einige Alpha-Teilchen wurden beim Durchgang durch eine dünne Goldfolie stark abgelenkt oder sogar zurückgeworfen. Dies bewies, dass die positive Ladung und fast die gesamte Masse des Atoms in einem winzigen, dichten Kern konzentriert sind.'
      },
      klinischerBezug: '**Röntgendiagnostik** (konventionelles Röntgen, CT) nutzt das Bohrsche Atommodell. Wenn hochenergetische Röntgenstrahlung auf Materie trifft, werden innere Elektronen (z. B. K-Schale) aus dem Atom geschlagen. Äußere Elektronen rücken nach, dabei wird **charakteristische Röntgenstrahlung** emittiert (Energiedifferenz zwischen den Schalen als Photon). Die Energie ist elementspezifisch — Knochen (Ca, P) absorbieren mehr Röntgenstrahlung als Weichteile → Kontrastbildung auf dem Röntgenbild.',
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
      content: `Die **Elektronenkonfiguration** beschreibt, wie Elektronen auf Orbitale verteilt sind. Drei Regeln bestimmen die Verteilung:

**Aufbauprinzip** (Klechkowski-Regel): Orbitale werden in der Reihenfolge steigender Energie besetzt. Die Reihenfolge ist: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s. Wichtig: 4s kommt vor 3d.

**Pauli-Prinzip**: Keine zwei Elektronen können in allen vier Quantenzahlen übereinstimmen. Ein Orbital (definiert durch n, l, mₗ) kann maximal 2 Elektronen mit entgegengesetztem Spin (mₛ = +½ und -½) aufnehmen. Daraus folgt: s-Orbitale (1 Orientierung) → max. 2 Elektronen, p-Orbitale (3 Orientierungen) → max. 6 Elektronen, d-Orbitale (5 Orientierungen) → max. 10 Elektronen, f-Orbitale (7 Orientierungen) → max. 14 Elektronen. Pro Schale n maximal 2n² Elektronen.

**Hundsche Regel**: Energetisch gleichwertige Orbitale (z. B. die drei 2p-Orbitale) werden erst einzeln mit parallelem Spin besetzt, bevor eine Doppelbesetzung erfolgt. Das ist energetisch günstiger (Austauschwechselwirkung). Beispiel: Stickstoff (Z = 7) hat 1s² 2s² 2p³, wobei jedes der drei 2p-Orbitale einfach besetzt ist (↑ ↑ ↑).

Besonders stabile Konfigurationen: Halbgefüllte und vollgefüllte Unterschalen. Das erklärt Ausnahmen: **Chrom** (Cr) hat [Ar] 3d⁵ 4s¹ statt [Ar] 3d⁴ 4s², weil 3d⁵ halbgefüllt besonders stabil ist. **Kupfer** (Cu) hat [Ar] 3d¹⁰ 4s¹ statt [Ar] 3d⁹ 4s², weil 3d¹⁰ vollgefüllt besonders stabil ist.`,
      merksätze: [
        'Aufbauprinzip: Orbitale werden in der Reihenfolge steigender Energie besetzt (1s, 2s, 2p, 3s, 3p, 4s, 3d, ...). Pauli: max. 2 Elektronen pro Orbital mit entgegengesetztem Spin. Hund: Gleichwertige Orbitale werden erst einfach besetzt.',
        'Maximale Elektronenzahl: s = 2, p = 6, d = 10, f = 14. Pro Schale n maximal 2n² Elektronen. Halbgefüllte und vollgefüllte Unterschalen sind besonders stabil.'
      ],
      altfrage: {
        question: 'Warum hat Chrom die Elektronenkonfiguration [Ar] 3d⁵ 4s¹ und nicht [Ar] 3d⁴ 4s²?',
        answer: 'Halbgefüllte Unterschalen (3d⁵) sind besonders stabil. Die Austauschwechselwirkung bei fünf parallelen Spins in den d-Orbitalen ist energetisch so günstig, dass ein Elektron aus dem 4s-Orbital in das 3d-Orbital wechselt.'
      },
      klinischerBezug: '**Eisen** ist das zentrale Atom im Häm-Komplex von Hämoglobin und Myoglobin. Fe²⁺ hat die Konfiguration [Ar] 3d⁶. Das Fe²⁺-Ion kann reversibel O₂ binden, ohne oxidiert zu werden (bleibt Fe²⁺). Bei der **Methämoglobinbildung** wird Fe²⁺ zu Fe³⁺ oxidiert ([Ar] 3d⁵) — dieses kann keinen Sauerstoff mehr transportieren. Methämoglobin > 20 % → Zyanose und Hypoxie. In der **Atmungskette** (Komplexe I–IV) wechselt Eisen zwischen Fe²⁺ und Fe³⁺ und transportiert Elektronen.',
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
      content: `Ein **Nuklid** wird durch Ordnungszahl Z (Protonen) und Massenzahl A (Protonen + Neutronen) charakterisiert. Schreibweise: ᴬ_Z X.

Die **Ordnungszahl Z** bestimmt das Element. Z = 6 → Kohlenstoff, egal wie viele Neutronen. Die **Neutronenzahl** ist N = A - Z. Neutronen tragen zur Masse bei, beeinflussen aber nicht die chemischen Eigenschaften (die hängen von den Elektronen ab).

**Isotope** sind Atome desselben Elements mit unterschiedlicher Neutronenzahl. Kohlenstoff hat ¹²C (6 Neutronen, 98,9 %) und ¹³C (7 Neutronen, 1,1 %) als stabile Isotope, plus radioaktives ¹⁴C (8 Neutronen).

Die **relative Atommasse** im PSE ist der gewichtete Mittelwert aller natürlichen Isotope. Chlor hat 35,45 u, weil es aus ³⁵Cl (75,77 %) und ³⁷Cl (24,23 %) besteht. Die atomare Masseneinheit u ist 1/12 der Masse von ¹²C und beträgt 1,66054 × 10⁻²⁷ kg.

**Radioaktiver Zerfall**: Instabile Kerne (Radionuklide) zerfallen unter Strahlungsemission. **Alpha-Zerfall** (α): Ein He-4-Kern wird emittiert → A sinkt um 4, Z sinkt um 2. **Beta-minus-Zerfall** (β⁻): Ein Neutron wird zu einem Proton → Z steigt um 1, A bleibt gleich. Ein Elektron und Antineutrino werden emittiert. **Gamma-Zerfall** (γ): Überschüssige Energie als elektromagnetische Strahlung, ohne Änderung von A oder Z.

Die **Halbwertszeit** t₁/₂ ist die Zeit, in der die Hälfte der radioaktiven Atome zerfällt. Sie reicht von Bruchteilen einer Sekunde bis zu Milliarden Jahren (z. B. ²³⁸U: t₁/₂ ≈ 4,5 × 10⁹ Jahre).`,
      merksätze: [
        'Isotope sind Atome desselben Elements (gleiche Protonenzahl Z) mit unterschiedlicher Neutronenzahl N. Sie haben gleiche chemische, aber unterschiedliche physikalische Eigenschaften (Masse, Stabilität).',
        'Radioaktiver Zerfall: α-Zerfall (A-4, Z-2), β⁻-Zerfall (A gleich, Z+1), γ-Zerfall (keine Änderung von A und Z, nur Energieabgabe). Die Halbwertszeit t₁/₂ ist die Zeit, in der die Hälfte der Kerne zerfällt.'
      ],
      altfrage: {
        question: 'Was passiert bei einem Beta-minus-Zerfall mit der Ordnungszahl und der Massenzahl?',
        answer: 'Beim β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt. Die Ordnungszahl Z steigt um 1 (ein Proton mehr), die Massenzahl A bleibt gleich (ein Neutron weniger, ein Proton mehr). Es wird ein Elektron (β⁻-Teilchen) und ein Antineutrino emittiert.'
      },
      klinischerBezug: '**⁹⁹ᵐTc** (Technetium-99m, t₁/₂ = 6 h) ist das meistgenutzte Radionuklid in der Nuklearmedizin (Szintigraphie). Es zerfällt per γ-Zerfall → keine Änderung von A oder Z, nur Energieabgabe als Gammastrahlung. Diese wird außerhalb des Körpers detektiert → Funktionsdiagnostik (Schilddrüsen-, Knochen-, Nierenszintigraphie). **¹³¹I** (Iod-131, t₁/₂ = 8 d) wird zur Radiojodtherapie bei Schilddrüsenüberfunktion und Schilddrüsenkarzinom eingesetzt. **¹⁸F-FDG** (Fluor-18-Fluordesoxyglucose, t₁/₂ = 110 min) ist der Standardtracer in der PET (Positronen-Emissions-Tomographie) zur Tumordiagnostik.',
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
