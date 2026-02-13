import type { Kapitel } from '../types';

export const chemKap10: Kapitel = {
  id: 'chem-kap10',
  title: 'Organische Chemie',
  subject: 'chemie',
  icon: '⬡',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap10-1',
      title: 'Kohlenwasserstoffe',
      content: `**Kohlenwasserstoffe** bestehen ausschließlich aus Kohlenstoff und Wasserstoff und bilden das Grundgerüst der organischen Chemie. **Alkane** (CₙH₂ₙ₊₂) sind gesättigte Kohlenwasserstoffe, die nur Einfachbindungen (C–C) enthalten. Die homologe Reihe beginnt mit Methan (CH₄), Ethan (C₂H₆), Propan (C₃H₈) und Butan (C₄H₁₀). Alkane sind relativ reaktionsträge, da C–C- und C–H-Bindungen unpolar und stabil sind. Ihre wichtigste Reaktion ist die Verbrennung und die radikalische Substitution (z. B. Halogenierung). Ab Butan treten Konstitutionsisomere auf: n-Butan und Isobutan (2-Methylpropan) haben die gleiche Summenformel, aber unterschiedliche Strukturen.

**Alkene** (CₙH₂ₙ) enthalten mindestens eine C=C-Doppelbindung und sind daher ungesättigt. Die Doppelbindung besteht aus einer σ-Bindung und einer π-Bindung, wobei die π-Bindung die Rotation um die Bindungsachse verhindert und so cis/trans-Isomerie ermöglicht. Alkene sind reaktiver als Alkane, da die π-Elektronen der Doppelbindung leicht angegriffen werden können — typische Reaktionen sind elektrophile Additionen (z. B. Hydrierung, Halogenierung, Hydratisierung). Ethen (C₂H₄) ist der einfachste Vertreter und dient als wichtiger Rohstoff für die Kunststoffindustrie (Polyethylen). **Alkine** (CₙH₂ₙ₋₂) enthalten eine C≡C-Dreifachbindung (eine σ- und zwei π-Bindungen) und sind noch ungesättigter. Ethin (Acetylen, C₂H₂) wird zum Autogenschweißen verwendet.

Die **IUPAC-Nomenklatur** folgt systematischen Regeln: (1) Die längste durchgehende Kohlenstoffkette bestimmt den Stammnamen (Methan, Ethan, Propan...). (2) Seitenketten werden als Präfixe angegeben (Methyl-, Ethyl-). (3) Die Position der Seitenketten wird durch Nummern angegeben, wobei die niedrigsten Positionsnummern gewählt werden. (4) Doppelbindungen werden durch die Endung „-en“ und Dreifachbindungen durch „-in“ angezeigt, mit Positionsangabe. Beispiel: 2-Methylbut-2-en (Hauptkette: 4 C = But-; Doppelbindung an C2 = -2-en; Methylgruppe an C2). Cyclische Kohlenwasserstoffe erhalten das Präfix „Cyclo-“ (z. B. Cyclohexan). Die korrekte Benennung ist für das MedAT wichtig, da häufig nach IUPAC-Namen gefragt wird.`,
      merksaetze: [
        'Alkane CₙH₂ₙ₊₂ (gesättigt, Einfachbindungen), Alkene CₙH₂ₙ (eine C=C), Alkine CₙH₂ₙ₋₂ (eine C≡C). Ungesättigtheit steigt → Reaktivität steigt.',
        'IUPAC: Längste Kette = Stammname → Seitenketten als Präfix mit Positionsnummer → Endung: -an (gesättigt), -en (Doppelbindung), -in (Dreifachbindung).'
      ],
      altfrage: {
        question: 'Wie lautet der IUPAC-Name einer Verbindung mit 5 C-Atomen in der Hauptkette, einer Methylgruppe an C3 und einer Doppelbindung zwischen C1 und C2?',
        answer: '3-Methylpent-1-en. Hauptkette: Pent (5 C), Doppelbindung an Position 1 (-1-en), Methylgruppe an Position 3 (3-Methyl-).'
      },
      klinischerBezug: 'Inhalationsanästhetika wie Halothan (CF₃–CHBrCl) und Sevofluran sind halogenierte Kohlenwasserstoffe. Ihre Wirkung beruht auf der Beeinflussung der Lipiddoppelschicht neuronaler Membranen und der Modulation von GABA-Rezeptoren. Die Halogensubstituenten verändern Siedepunkt, Lipophilie und metabolische Stabilität im Vergleich zu den unhalogenierten Stammverbindungen.',
      selfTest: [
        {
          question: 'Welche allgemeine Summenformel haben Alkene?',
          options: [
            'CₙH₂ₙ₊₂',
            'CₙH₂ₙ',
            'CₙH₂ₙ₋₂',
            'CₙHₙ',
            'CₙH₂ₙ₊₁'
          ],
          correctIndex: 1,
          explanation: 'Alkene haben die allgemeine Formel CₙH₂ₙ. CₙH₂ₙ₊₂ gilt für Alkane, CₙH₂ₙ₋₂ für Alkine. Jede Doppelbindung reduziert die Anzahl der H-Atome um 2.'
        },
        {
          question: 'Warum sind Alkene reaktiver als Alkane?',
          options: [
            'Alkene haben mehr C–H-Bindungen.',
            'Die π-Elektronen der Doppelbindung sind leicht angreifbar.',
            'Alkene sind stärker polar.',
            'Alkene haben eine höhere molare Masse.',
            'Alkene besitzen mehr freie Elektronenpaare am Kohlenstoff.'
          ],
          correctIndex: 1,
          explanation: 'Die π-Bindung in der Doppelbindung hat eine geringere Bindungsenergie als eine σ-Bindung und die Elektronendichte liegt oberhalb und unterhalb der Bindungsebene, was sie für elektrophile Angriffe zugänglich macht.'
        },
        {
          question: 'Wie lautet der IUPAC-Name von CH₃–CH(CH₃)–CH₃?',
          options: [
            'Propan',
            '2-Methylpropan',
            'Butan',
            'Methylpropan',
            'Dimethylethan'
          ],
          correctIndex: 1,
          explanation: 'Die längste Kette hat 3 C-Atome (Propan). An C2 sitzt eine Methylgruppe. Der korrekte IUPAC-Name ist 2-Methylpropan (auch bekannt als Isobutan).'
        }
      ]
    },
    {
      id: 'chem-kap10-2',
      title: 'Isomerie',
      content: `**Isomere** sind Moleküle mit gleicher Summenformel, aber unterschiedlicher Struktur oder räumlicher Anordnung. Man unterscheidet grundlegend zwischen **Konstitutionsisomerie** (Strukturisomerie) und **Stereoisomerie**. Konstitutionsisomere haben die gleiche Molekülformel, unterscheiden sich aber in der Reihenfolge der Atombindungen — sie haben also verschiedene Strukturformeln. Beispiele: n-Butan und Isobutan (C₄H₁₀), Ethanol (CH₃CH₂OH) und Dimethylether (CH₃OCH₃) — beide C₂H₆O. Konstitutionsisomere können sich in physikalischen und chemischen Eigenschaften deutlich unterscheiden, da ihre Bindungsstruktur verschieden ist.

**Stereoisomere** haben die gleiche Konstitution (gleiche Bindungsreihenfolge), unterscheiden sich aber in der räumlichen Anordnung der Atome. Zu den Stereoisomeren gehören **cis/trans-Isomere** (geometrische Isomerie) und **Enantiomere/Diastereomere** (optische Isomerie). Cis/trans-Isomerie tritt an C=C-Doppelbindungen auf, da die eingeschränkte Rotation zwei verschiedene räumliche Anordnungen ermöglicht. Bei cis-But-2-en liegen beide Methylgruppen auf derselben Seite der Doppelbindung, bei trans-But-2-en auf gegenüberliegenden Seiten. Nach der Z/E-Nomenklatur (CIP-Regeln) wird die Priorität der Substituenten nach Ordnungszahl bestimmt: Z (zusammen) entspricht oft cis, E (entgegen) oft trans.

Die **optische Isomerie** (Chiralität) tritt auf, wenn ein Kohlenstoffatom vier verschiedene Substituenten trägt — dieses C-Atom heißt **chirales Zentrum** oder stereogenes Zentrum. Die beiden Enantiomere verhalten sich wie Bild und Spiegelbild und sind nicht zur Deckung zu bringen (wie linke und rechte Hand). Sie haben identische physikalische Eigenschaften (Schmelzpunkt, Siedepunkt), drehen aber die Ebene des polarisierten Lichts in entgegengesetzte Richtungen: (+) für rechtsdrehend, (-) für linksdrehend. Die absolute Konfiguration wird mit R/S nach den CIP-Regeln angegeben: (1) Substituenten nach abnehmender Priorität ordnen (höchste Ordnungszahl = höchste Priorität), (2) niedrigste Priorität nach hinten richten, (3) Richtung 1→2→3 im Uhrzeigersinn = R (rectus), gegen den Uhrzeigersinn = S (sinister). Chiralität ist in der Pharmakologie von enormer Bedeutung, da Enantiomere völlig unterschiedliche biologische Wirkungen haben können.`,
      merksaetze: [
        'Konstitutionsisomere: gleiche Summenformel, verschiedene Bindungsreihenfolge. Stereoisomere: gleiche Konstitution, verschiedene räumliche Anordnung.',
        'Chiralität: 4 verschiedene Substituenten am C → Enantiomere (Bild/Spiegelbild). R/S nach CIP-Regeln. Enantiomere drehen polarisiertes Licht entgegengesetzt.'
      ],
      altfrage: {
        question: 'Was versteht man unter einem chiralen Zentrum und welche Eigenschaft haben Enantiomere bezüglich polarisierten Lichts?',
        answer: 'Ein chirales Zentrum ist ein C-Atom mit vier verschiedenen Substituenten. Enantiomere sind nicht-deckungsgleiche Spiegelbildisomere, die die Ebene des polarisierten Lichts um den gleichen Betrag, aber in entgegengesetzte Richtungen drehen (optische Aktivität).'
      },
      klinischerBezug: 'Der Contergan-Skandal (Thalidomid, 1960er) zeigte die klinische Relevanz der Chiralität: Das (R)-Enantiomer wirkte sedativ, das (S)-Enantiomer war teratogen (fruchtschädigend). Da sich Enantiomere im Körper ineinander umwandeln können (Racemisierung), war eine Trennung nicht ausreichend. Heute müssen Arzneimittel-Enantiomere getrennt auf Wirksamkeit und Sicherheit geprüft werden.',
      selfTest: [
        {
          question: 'Welche Art von Isomerie liegt zwischen cis-But-2-en und trans-But-2-en vor?',
          options: [
            'Konstitutionsisomerie',
            'Enantiomerie',
            'cis/trans-Isomerie (geometrische Isomerie)',
            'Tautomerie',
            'Diastereomerie durch chirale Zentren'
          ],
          correctIndex: 2,
          explanation: 'Cis- und trans-But-2-en haben die gleiche Konstitution, unterscheiden sich aber in der räumlichen Anordnung an der C=C-Doppelbindung. Es handelt sich um cis/trans-Isomerie (eine Form der Stereoisomerie).'
        },
        {
          question: 'Wann ist ein Kohlenstoffatom chiral?',
          options: [
            'Wenn es an einer Doppelbindung beteiligt ist.',
            'Wenn es vier gleiche Substituenten trägt.',
            'Wenn es vier verschiedene Substituenten trägt.',
            'Wenn es an einem Ring beteiligt ist.',
            'Wenn es sp²-hybridisiert ist.'
          ],
          correctIndex: 2,
          explanation: 'Ein chirales Zentrum liegt vor, wenn ein C-Atom vier verschiedene Substituenten trägt. Nur dann existieren zwei nicht-deckungsgleiche Spiegelbilder (Enantiomere).'
        },
        {
          question: 'Ethanol (CH₃CH₂OH) und Dimethylether (CH₃OCH₃) sind:',
          options: [
            'Enantiomere',
            'cis/trans-Isomere',
            'Konstitutionsisomere',
            'Identische Verbindungen',
            'Stereoisomere'
          ],
          correctIndex: 2,
          explanation: 'Beide haben die Summenformel C₂H₆O, unterscheiden sich aber in der Verknüpfung der Atome (–OH vs. –O–). Sie sind Konstitutionsisomere (Strukturisomere) mit völlig verschiedenen Eigenschaften.'
        }
      ]
    },
    {
      id: 'chem-kap10-3',
      title: 'Funktionelle Gruppen',
      diagram: 'functional-groups',
      content: `**Funktionelle Gruppen** sind Atomgruppen in organischen Molekülen, die das chemische Verhalten der Verbindung maßgeblich bestimmen. **Alkohole** (R–OH) enthalten eine Hydroxylgruppe und werden in primäre (1°, –CH₂OH), sekundäre (2°, R₂CHOH) und tertiäre (3°, R₃COH) Alkohole eingeteilt. Methanol (CH₃OH) ist giftig (Erblindung, Tod), Ethanol (C₂H₅OH) ist der Trinkalkohol. Alkohole können zu Aldehyden/Ketonen oxidiert und durch Veresterung mit Carbonsäuren zu Estern umgesetzt werden. **Aldehyde** (R–CHO) und **Ketone** (R–CO–R') enthalten beide eine Carbonylgruppe (C=O): Bei Aldehyden sitzt sie am Kettenende und ist leicht oxidierbar (positive Fehling- und Tollens-Probe), bei Ketonen sitzt sie innerhalb der Kette und ist schwerer oxidierbar.

**Carbonsäuren** (R–COOH) enthalten die Carboxylgruppe, die durch die Kombination von Carbonyl- und Hydroxylgruppe eine deutlich stärkere Acidität aufweist als Alkohole. Der pKs-Wert typischer Carbonsäuren liegt bei 4–5 (z. B. Essigsäure pKs = 4,75). Durch Elektronegativitätseffekte substituierter Gruppen kann die Säurestärke variieren: Trichloressigsäure (pKs ≈ 0,65) ist deutlich stärker als Essigsäure, da die elektronenziehenden Cl-Atome die negative Ladung des Carboxylat-Ions stabilisieren. **Ester** (R–COO–R') entstehen durch Kondensation einer Carbonsäure mit einem Alkohol unter Wasserabspaltung (Veresterung nach Fischer). Ester sind oft für den fruchtigen Geruch vieler Lebensmittel verantwortlich (z. B. Ethylbutanoat = Ananasaroma).

**Amine** (R–NH₂, R₂NH, R₃N) sind organische Stickstoffverbindungen, die als Brønsted-Basen fungieren, da das freie Elektronenpaar am Stickstoff ein Proton aufnehmen kann. Man unterscheidet primäre, sekundäre und tertiäre Amine. Amine spielen in der Biochemie eine zentrale Rolle: Aminosäuren enthalten sowohl eine Aminogruppe (–NH₂) als auch eine Carboxylgruppe (–COOH) und sind die Bausteine der Proteine. Weitere wichtige funktionelle Gruppen sind **Ether** (R–O–R'), die relativ reaktionsträge sind und als Lösungsmittel dienen, **Thiole** (R–SH), die in der Biochemie für Disulfidbrücken in Proteinen wichtig sind, und **Amide** (R–CO–NH₂), die die Verknüpfung in Peptidbindungen darstellen. Die systematische Kenntnis der funktionellen Gruppen ist essenziell für das Verständnis biochemischer Prozesse.`,
      merksaetze: [
        'Oxidationsreihe: Primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (nicht weiter oxidierbar). Tertiärer Alkohol → nicht direkt oxidierbar.',
        'Carbonsäure + Alkohol → Ester + H₂O (Veresterung). Ester + H₂O → Carbonsäure + Alkohol (Hydrolyse/Verseifung). Amine sind organische Basen (freies e⁻-Paar am N).'
      ],
      altfrage: {
        question: 'Welche funktionelle Gruppe wird bei der Fehling-Probe nachgewiesen und wie?',
        answer: 'Die Fehling-Probe weist Aldehyde nach. Aldehyde reduzieren Cu²⁺-Ionen (blau) zu Cu₂O (ziegelrot). Der Aldehyd wird dabei zur Carbonsäure oxidiert. Ketone geben keine positive Fehling-Probe, da sie schwerer oxidierbar sind.'
      },
      klinischerBezug: 'Methanol-Vergiftungen entstehen durch Aufnahme von Methylalkohol (z. B. in gepanschtem Schnaps). Im Körper wird Methanol durch Alkoholdehydrogenase zu Formaldehyd und dann zu Ameisensäure oxidiert, die den Sehnerv schädigt und eine metabolische Azidose auslöst. Therapie: Ethanol oder Fomepizol als kompetitiver Inhibitor der Alkoholdehydrogenase, um die Bildung toxischer Metabolite zu verhindern.',
      selfTest: [
        {
          question: 'Welche funktionelle Gruppe hat ein Aldehyd?',
          options: [
            '–OH (Hydroxylgruppe)',
            '–CHO (Aldehydgruppe, endständige Carbonylgruppe)',
            '–COOH (Carboxylgruppe)',
            '–NH₂ (Aminogruppe)',
            '–CO–R (Ketogruppe)'
          ],
          correctIndex: 1,
          explanation: 'Aldehyde tragen die Aldehydgruppe (–CHO), eine Carbonylgruppe (C=O) am Ende der Kohlenstoffkette. Im Gegensatz dazu sitzt die Carbonylgruppe bei Ketonen innerhalb der Kette.'
        },
        {
          question: 'Was entsteht bei der Oxidation eines sekundären Alkohols?',
          options: [
            'Ein Aldehyd',
            'Eine Carbonsäure',
            'Ein Keton',
            'Ein Ester',
            'Ein Ether'
          ],
          correctIndex: 2,
          explanation: 'Sekundäre Alkohole (R₂CHOH) werden zu Ketonen (R₂C=O) oxidiert. Nur primäre Alkohole werden über Aldehyde zu Carbonsäuren oxidiert. Tertiäre Alkohole sind unter normalen Bedingungen nicht direkt oxidierbar.'
        },
        {
          question: 'Welche Reaktion beschreibt die Veresterung?',
          options: [
            'Alkohol + Alkohol → Ether + H₂O',
            'Carbonsäure + Alkohol → Ester + H₂O',
            'Amin + Carbonsäure → Amid + CO₂',
            'Aldehyd + H₂ → Alkohol',
            'Carbonsäure + Amin → Amid + H₂O'
          ],
          correctIndex: 1,
          explanation: 'Bei der Veresterung (Fischer-Veresterung) reagiert eine Carbonsäure mit einem Alkohol unter Abspaltung von Wasser zu einem Ester: R–COOH + R\'–OH ⇌ R–COO–R\' + H₂O.'
        }
      ]
    },
    {
      id: 'chem-kap10-4',
      title: 'Reaktionsmechanismen',
      content: `Organische Reaktionen lassen sich in vier grundlegende Mechanismustypen einteilen: **Substitution**, **Addition**, **Eliminierung** und **Kondensation**. Bei der **Substitution** wird ein Atom oder eine Atomgruppe durch ein anderes ersetzt. Man unterscheidet die **nukleophile Substitution** (Sₙ1 und Sₙ2) und die **radikalische Substitution** (Sᴿ). Bei der Sₙ2-Reaktion greift das Nukleophil von der Rückseite an (Walden-Umkehr, Inversion der Konfiguration), der Übergangszustand ist fünffach koordiniert, und die Reaktion verläuft in einem Schritt (konzertiert). Bei der Sₙ1-Reaktion bildet sich zuerst ein Carbokation (geschwindigkeitsbestimmender Schritt), das dann vom Nukleophil angegriffen wird — es entsteht ein Racemat (Retention und Inversion zu gleichen Teilen). Sₙ2 wird durch primäre Substrate und starke Nukleophile begünstigt, Sₙ1 durch tertiäre Substrate und schwache Nukleophile.

Die **elektrophile Addition** ist die typische Reaktion der Alkene. Ein Elektrophil greift die elektronenreiche Doppelbindung an. Beispiel: Addition von HBr an Propen — nach der **Markownikow-Regel** addiert sich das H-Atom an das C-Atom mit den meisten H-Atomen (das stabilere Carbokation wird gebildet). Somit entsteht bevorzugt 2-Brompropan und nicht 1-Brompropan. Weitere elektrophile Additionen sind die Halogenierung (Br₂-Addition mit Entfärbung von Bromwasser als Nachweisreaktion für C=C) und die Hydrierung (H₂-Addition mit Katalysator). Die **Eliminierung** ist die Umkehrung der Addition: Unter Abspaltung kleiner Moleküle (z. B. H₂O oder HX) entsteht eine Doppelbindung. E1- und E2-Mechanismen sind analog zu Sₙ1 und Sₙ2.

Die **Kondensation** ist eine Reaktion, bei der zwei Moleküle unter Abspaltung eines kleinen Moleküls (meist Wasser) miteinander verknüpft werden. Beispiele sind die Veresterung (Carbonsäure + Alkohol → Ester + H₂O), die Peptidbindungsbildung (Aminosäure + Aminosäure → Dipeptid + H₂O) und die Polykondensation zur Herstellung von Kunststoffen wie Nylon oder PET. Die Umkehrreaktion der Kondensation ist die **Hydrolyse**, bei der ein Molekül unter Wasseranlagerung gespalten wird. In biologischen Systemen katalysieren Enzyme sowohl Kondensations- als auch Hydrolysereaktionen — z. B. spalten Proteasen Peptidbindungen durch Hydrolyse und Ligasen verknüpfen Biomoleküle durch Kondensation. Das Verständnis dieser vier Grundmechanismen ermöglicht es, das Reaktionsverhalten organischer Verbindungen systematisch vorherzusagen.`,
      merksaetze: [
        'Sₙ2: ein Schritt, Rückseitenangriff, Inversion (primäre Substrate). Sₙ1: zwei Schritte, Carbokation, Racemat (tertiäre Substrate). Markownikow: H geht an das C mit mehr H-Atomen.',
        'Kondensation: Verknüpfung unter H₂O-Abspaltung. Hydrolyse: Spaltung unter H₂O-Anlagerung. Beide sind Umkehrreaktionen zueinander.'
      ],
      altfrage: {
        question: 'Welches Hauptprodukt entsteht bei der Addition von HBr an Propen nach der Markownikow-Regel?',
        answer: '2-Brompropan. Nach Markownikow addiert sich H an das C-Atom mit den meisten H-Atomen (C1), und Br geht an das C mit weniger H-Atomen (C2), da dort das stabilere sekundäre Carbokation entsteht.'
      },
      klinischerBezug: 'Viele Arzneimittel werden über nukleophile Substitutionen synthetisiert. Stickstoflost (ein Alkylanz) wirkt als Zytostatikum, indem es über eine Sₙ1-Reaktion ein Carbokation bildet, das dann mit der DNA reagiert und Quervernetzungen bildet. Diese DNA-Schäden verhindern die Zellteilung und werden in der Chemotherapie genutzt.',
      selfTest: [
        {
          question: 'Was ist typisch für den Sₙ2-Mechanismus?',
          options: [
            'Bildung eines Carbokations als Zwischenstufe',
            'Konzertierter Mechanismus mit Walden-Umkehr (Inversion)',
            'Bevorzugung an tertiären C-Atomen',
            'Entstehung eines Racemats',
            'Bevorzugung in polaren, protischen Lösungsmitteln'
          ],
          correctIndex: 1,
          explanation: 'Der Sₙ2-Mechanismus verläuft in einem Schritt (konzertiert): Das Nukleophil greift von der Rückseite an, während die Abgangsgruppe gleichzeitig abgeht. Es kommt zur Inversion der Konfiguration (Walden-Umkehr). Primäre Substrate und starke Nukleophile begünstigen Sₙ2.'
        },
        {
          question: 'Welche Aussage zur Markownikow-Regel ist korrekt?',
          options: [
            'H addiert sich an das C-Atom mit den wenigsten H-Atomen.',
            'H addiert sich an das C-Atom mit den meisten H-Atomen.',
            'Die Regel gilt nur für Substitutionsreaktionen.',
            'Es entsteht immer das Anti-Markownikow-Produkt.',
            'Das Halogen geht an das C-Atom mit den meisten H-Atomen.'
          ],
          correctIndex: 1,
          explanation: 'Nach Markownikow addiert sich bei der elektrophilen Addition von HX an ein unsymmetrisches Alken das H-Atom an das C-Atom mit den meisten H-Atomen (der Wasserstoff geht dorthin, wo bereits mehr Wasserstoff ist). Dies führt zum stabileren Carbokation.'
        },
        {
          question: 'Die Peptidbindungsbildung ist ein Beispiel für welchen Reaktionstyp?',
          options: [
            'Elektrophile Addition',
            'Nukleophile Substitution',
            'Kondensation',
            'Eliminierung',
            'Radikalische Substitution'
          ],
          correctIndex: 2,
          explanation: 'Bei der Peptidbindungsbildung reagieren zwei Aminosäuren unter Abspaltung von Wasser (Kondensation): –COOH + H₂N– → –CO–NH– + H₂O. Die Umkehrung (Hydrolyse) spaltet Peptidbindungen.'
        }
      ]
    },
    {
      id: 'chem-kap10-5',
      title: 'Aromaten',
      content: `**Benzol** (C₆H₆) ist der Grundkörper der aromatischen Verbindungen. Es besitzt eine planare, hexagonale Ringstruktur mit sechs sp²-hybridisierten Kohlenstoffatomen. Die sechs p-Elektronen sind nicht in drei einzelnen Doppelbindungen lokalisiert, sondern über den gesamten Ring **delokalisiert** (Mesomerie). Diese Elektronendelokalisierung verleiht Benzol eine besondere Stabilität, die als **Resonanz- oder Mesomerieenergie** bezeichnet wird (ca. 150 kJ/mol). Benzol ist daher stabiler, als man es für eine hypothetische Verbindung mit drei isolierten C=C-Doppelbindungen (Cyclohexatrien) erwarten würde. Die Darstellung erfolgt entweder mit alternierenden Einzel-/Doppelbindungen (Kekulé-Strukturen) oder mit einem Kreis im Sechsring (Symbol für Delokalisierung).

Die **Hückel-Regel** definiert die Bedingung für Aromatizität: Ein planares, cyclisches, vollständig konjugiertes Molekül ist aromatisch, wenn es (4n + 2) π-Elektronen besitzt (n = 0, 1, 2, ...). Benzol mit 6 π-Elektronen (n = 1) erfüllt diese Regel. Auch heterocyclische Verbindungen wie Pyridin (C₅H₅N, 6 π-Elektronen), Pyrrol (C₄H₅N, 6 π-Elektronen unter Einbeziehung des freien Elektronenpaars am N) und Furan (C₄H₄O) sind aromatisch. Antiaromatische Systeme mit 4n π-Elektronen (z. B. Cyclobutadien mit 4 π-Elektronen) sind besonders instabil. Die Aromatizität erklärt, warum Benzol trotz seiner Doppelbindungen keine typischen Additionsreaktionen eingeht — es würde dabei die wertvolle Mesomerieenergie verlieren.

Die **elektrophile aromatische Substitution** (SEAr) ist die typische Reaktion der Aromaten. Dabei wird ein H-Atom am Ring durch ein Elektrophil ersetzt, ohne den aromatischen Charakter zu zerstören. Der Mechanismus verläuft in zwei Schritten: (1) Das Elektrophil greift den aromatischen Ring an, bildet einen σ-Komplex (Areniumion, Wheland-Komplex), wobei die Aromatizität vorübergehend aufgehoben ist. (2) Ein Proton wird abgespalten, und die Aromatizität wird wiederhergestellt. Wichtige SEAr-Reaktionen sind: **Nitrierung** (NO₂⁺ als Elektrophil, aus HNO₃/H₂SO₄), **Halogenierung** (Cl⁺ oder Br⁺ mit Lewis-Säure-Katalysator wie FeBr₃), **Friedel-Crafts-Alkylierung** (R⁺ mit AlCl₃) und **Sulfonierung** (SO₃). Substituenten am Ring beeinflussen die Reaktivität und die Orientierung: Elektronendonatoren (+M/-I, z. B. –OH, –NH₂) aktivieren den Ring und dirigieren in ortho/para-Position; Elektronenakzeptoren (–M/+I, z. B. –NO₂, –COOH) desaktivieren den Ring und dirigieren in meta-Position.`,
      merksaetze: [
        'Aromatizität nach Hückel: planar, cyclisch, konjugiert, (4n+2) π-Elektronen. Benzol: 6 π-e⁻ → besonders stabil durch Mesomerie (ca. 150 kJ/mol Resonanzenergie).',
        'SEAr: Elektrophil ersetzt H am Ring → Aromatizität bleibt erhalten. Aktivierende Gruppen → ortho/para-Dirigenten; desaktivierende Gruppen → meta-Dirigenten.'
      ],
      altfrage: {
        question: 'Warum reagiert Benzol bevorzugt über Substitution und nicht über Addition?',
        answer: 'Bei einer Additionsreaktion würde die Aromatizität (Resonanzenergie von ca. 150 kJ/mol) zerstört werden. Bei der elektrophilen aromatischen Substitution (SEAr) bleibt der aromatische Ring erhalten, da nur ein H-Atom durch das Elektrophil ersetzt wird. Daher ist die Substitution thermodynamisch bevorzugt.'
      },
      klinischerBezug: 'Viele Medikamente enthalten aromatische Ringsysteme — z. B. Aspirin (Acetylsalicylsäure), Paracetamol und die meisten Antibiotika. Polyzyklische aromatische Kohlenwasserstoffe (PAK) wie Benzo[a]pyren (im Zigarettenrauch) sind karzinogen: Sie werden im Körper durch Cytochrom-P450-Enzyme zu reaktiven Epoxiden metabolisiert, die DNA-Addukte bilden und so Mutationen auslösen können.',
      selfTest: [
        {
          question: 'Wie viele π-Elektronen hat Benzol?',
          options: [
            '3',
            '4',
            '6',
            '8',
            '12'
          ],
          correctIndex: 2,
          explanation: 'Benzol hat 6 π-Elektronen (3 Doppelbindungen × 2 Elektronen). Dies erfüllt die Hückel-Regel (4n+2 mit n=1: 4·1+2=6) und erklärt die Aromatizität.'
        },
        {
          question: 'Was ist das typische Reaktionsverhalten von Benzol?',
          options: [
            'Elektrophile Addition',
            'Elektrophile aromatische Substitution',
            'Nukleophile Addition',
            'Radikalische Eliminierung',
            'Nukleophile Substitution am Ring'
          ],
          correctIndex: 1,
          explanation: 'Benzol reagiert bevorzugt über elektrophile aromatische Substitution (SEAr), bei der ein H-Atom durch ein Elektrophil ersetzt wird. Die Aromatizität bleibt dabei erhalten, während sie bei einer Addition verloren ginge.'
        },
        {
          question: 'Eine –NH₂-Gruppe am Benzolring dirigiert neue Substituenten in:',
          options: [
            'meta-Position',
            'ortho- und para-Position',
            'Nur ortho-Position',
            'Nur para-Position',
            'Alle Positionen gleichmäßig'
          ],
          correctIndex: 1,
          explanation: 'Die –NH₂-Gruppe ist ein +M-Substituent (Elektronendonator), der den Ring aktiviert und in ortho- und para-Position dirigiert, da dort die Elektronendichte besonders erhöht wird.'
        }
      ]
    }
  ]
};
