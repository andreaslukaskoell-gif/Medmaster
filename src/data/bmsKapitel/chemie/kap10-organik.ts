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
      content: `**Kohlenwasserstoffe** bestehen nur aus C und H. Sie bilden das Grundgerüst der organischen Chemie.

**Alkane** (CₙH₂ₙ₊₂) sind gesättigt — nur Einfachbindungen (C–C). Homologe Reihe: Methan (CH₄), Ethan (C₂H₆), Propan (C₃H₈), Butan (C₄H₁₀). Alkane sind reaktionsträge, da C–C- und C–H-Bindungen unpolar und stabil sind. Wichtigste Reaktion: Verbrennung und radikalische Substitution (Halogenierung). Ab Butan gibt es Konstitutionsisomere: n-Butan und Isobutan (2-Methylpropan) haben gleiche Summenformel, unterschiedliche Struktur.

**Alkene** (CₙH₂ₙ) enthalten mindestens eine C=C-Doppelbindung — ungesättigt. Doppelbindung besteht aus σ-Bindung + π-Bindung. Die π-Bindung verhindert Rotation um die Bindungsachse → cis/trans-Isomerie möglich. Alkene sind reaktiver als Alkane. Die π-Elektronen werden leicht angegriffen. Typische Reaktionen: elektrophile Additionen (Hydrierung, Halogenierung, Hydratisierung). Ethen (C₂H₄) ist Rohstoff für Polyethylen.

**Alkine** (CₙH₂ₙ₋₂) enthalten C≡C-Dreifachbindung (eine σ- + zwei π-Bindungen) — noch ungesättigter. Ethin (Acetylen, C₂H₂) wird zum Autogenschweißen verwendet.

**IUPAC-Nomenklatur**: (1) Längste durchgehende C-Kette bestimmt Stammnamen (Methan, Ethan, Propan...). (2) Seitenketten als Präfixe (Methyl-, Ethyl-). (3) Position der Seitenketten durch Nummern (niedrigste Zahlen wählen). (4) Doppelbindungen → Endung „-en", Dreifachbindungen → „-in", mit Positionsangabe. Beispiel: 2-Methylbut-2-en (4 C = But-, Doppelbindung an C2 = -2-en, Methylgruppe an C2). Cyclische KW: Präfix „Cyclo-" (z. B. Cyclohexan).`,
      merksätze: [
        'Alkane CₙH₂ₙ₊₂ (gesättigt, Einfachbindungen), Alkene CₙH₂ₙ (eine C=C), Alkine CₙH₂ₙ₋₂ (eine C≡C). Ungesättigtheit steigt → Reaktivität steigt.',
        'IUPAC: Längste Kette = Stammname → Seitenketten als Präfix mit Positionsnummer → Endung: -an (gesättigt), -en (Doppelbindung), -in (Dreifachbindung).'
      ],
      altfrage: {
        question: 'Wie lautet der IUPAC-Name einer Verbindung mit 5 C-Atomen in der Hauptkette, einer Methylgruppe an C3 und einer Doppelbindung zwischen C1 und C2?',
        answer: '3-Methylpent-1-en. Hauptkette: Pent (5 C), Doppelbindung an Position 1 (-1-en), Methylgruppe an Position 3 (3-Methyl-).'
      },
      klinischerBezug: 'Inhalationsanästhetika wie **Halothan** (CF₃–CHBrCl) und **Sevofluran** sind halogenierte Kohlenwasserstoffe. Wirkung: Beeinflussung der Lipiddoppelschicht neuronaler Membranen und Modulation von GABA-Rezeptoren. Halogensubstituenten ändern Siedepunkt, Lipophilie, metabolische Stabilität. Bei Überdosierung → Leberschädigung (Halothan-Hepatitis), maligne Hyperthermie (genetische Prädisposition).',
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
      content: `**Isomere** haben gleiche Summenformel, unterschiedliche Struktur oder räumliche Anordnung.

**Konstitutionsisomerie** (Strukturisomerie): Gleiche Summenformel, verschiedene Bindungsreihenfolge. Beispiele: n-Butan und Isobutan (C₄H₁₀), Ethanol (CH₃CH₂OH) und Dimethylether (CH₃OCH₃) — beide C₂H₆O. Konstitutionsisomere unterscheiden sich stark in physikalischen und chemischen Eigenschaften.

**Stereoisomere**: Gleiche Konstitution (gleiche Bindungsreihenfolge), verschiedene räumliche Anordnung. Zwei Typen: cis/trans-Isomere und Enantiomere/Diastereomere.

**Cis/trans-Isomerie** tritt an C=C-Doppelbindungen auf. Eingeschränkte Rotation ermöglicht zwei räumliche Anordnungen. Cis-But-2-en: beide Methylgruppen auf derselben Seite. Trans-But-2-en: auf gegenüberliegenden Seiten. Z/E-Nomenklatur (CIP-Regeln): Priorität nach Ordnungszahl. Z (zusammen) ≈ cis, E (entgegen) ≈ trans.

**Optische Isomerie** (Chiralität): tritt auf, wenn ein C-Atom vier verschiedene Substituenten trägt — **chirales Zentrum**. Beide Enantiomere verhalten sich wie Bild und Spiegelbild, nicht deckungsgleich (wie linke und rechte Hand). Identische physikalische Eigenschaften (Schmelzpunkt, Siedepunkt), aber drehen polarisiertes Licht in entgegengesetzte Richtungen: (+) rechtsdrehend, (-) linksdrehend. Absolute Konfiguration: R/S nach CIP-Regeln. (1) Substituenten nach abnehmender Priorität ordnen (höchste Ordnungszahl = höchste Priorität). (2) Niedrigste Priorität nach hinten. (3) Richtung 1→2→3 im Uhrzeigersinn = R (rectus), gegen den Uhrzeigersinn = S (sinister).`,
      merksätze: [
        'Konstitutionsisomere: gleiche Summenformel, verschiedene Bindungsreihenfolge. Stereoisomere: gleiche Konstitution, verschiedene räumliche Anordnung.',
        'Chiralität: 4 verschiedene Substituenten am C → Enantiomere (Bild/Spiegelbild). R/S nach CIP-Regeln. Enantiomere drehen polarisiertes Licht entgegengesetzt.'
      ],
      altfrage: {
        question: 'Was versteht man unter einem chiralen Zentrum und welche Eigenschaft haben Enantiomere bezüglich polarisierten Lichts?',
        answer: 'Ein chirales Zentrum ist ein C-Atom mit vier verschiedenen Substituenten. Enantiomere sind nicht-deckungsgleiche Spiegelbildisomere, die die Ebene des polarisierten Lichts um den gleichen Betrag, aber in entgegengesetzte Richtungen drehen (optische Aktivität).'
      },
      klinischerBezug: 'Der **Contergan-Skandal** (Thalidomid, 1960er) zeigt die klinische Relevanz der Chiralität. (R)-Enantiomer: sedativ. (S)-Enantiomer: teratogen (fruchtschädigend — Phokomelie, Amelie). Da Racemisierung im Körper möglich ist, war Trennung nicht ausreichend. Heute: Enantiomere müssen getrennt auf Wirksamkeit und Sicherheit geprüft werden. Viele moderne Arzneimittel als Einzelenantiomer: z. B. (S)-Ibuprofen (aktiv), (R)-Ibuprofen (inaktiv).',
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
      content: `**Funktionelle Gruppen** bestimmen das chemische Verhalten organischer Moleküle.

**Alkohole** (R–OH) enthalten Hydroxylgruppe. Einteilung: primär (1°, –CH₂OH), sekundär (2°, R₂CHOH), tertiär (3°, R₃COH). Methanol (CH₃OH) ist giftig (Erblindung, Tod). Ethanol (C₂H₅OH) ist Trinkalkohol. Alkohole werden zu Aldehyden/Ketonen oxidiert, mit Carbonsäuren zu Estern verestert.

**Aldehyde** (R–CHO) und **Ketone** (R–CO–R') enthalten Carbonylgruppe (C=O). Aldehyde: am Kettenende, leicht oxidierbar (positive Fehling- und Tollens-Probe). Ketone: innerhalb der Kette, schwerer oxidierbar.

**Carbonsäuren** (R–COOH) enthalten Carboxylgruppe. Deutlich stärker sauer als Alkohole (pKs 4–5, z. B. Essigsäure pKs = 4,75). Elektronegativitätseffekte beeinflussen Säurestärke: Trichloressigsäure (pKs ≈ 0,65) ist viel stärker als Essigsäure — Cl-Atome stabilisieren Carboxylat-Ion. **Ester** (R–COO–R') entstehen durch Kondensation von Carbonsäure + Alkohol unter Wasserabspaltung (Fischer-Veresterung). Ester sind oft für fruchtigen Geruch verantwortlich (z. B. Ethylbutanoat = Ananasaroma).

**Amine** (R–NH₂, R₂NH, R₃N) sind organische Stickstoffverbindungen, fungieren als Brønsted-Basen (freies Elektronenpaar am N nimmt Proton auf). Primäre, sekundäre, tertiäre Amine. Aminosäuren enthalten –NH₂ und –COOH — Bausteine der Proteine. **Ether** (R–O–R'): reaktionsträge, Lösungsmittel. **Thiole** (R–SH): wichtig für Disulfidbrücken in Proteinen. **Amide** (R–CO–NH₂): Peptidbindungen.`,
      merksätze: [
        'Oxidationsreihe: Primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (nicht weiter oxidierbar). Tertiärer Alkohol → nicht direkt oxidierbar.',
        'Carbonsäure + Alkohol → Ester + H₂O (Veresterung). Ester + H₂O → Carbonsäure + Alkohol (Hydrolyse/Verseifung). Amine sind organische Basen (freies e⁻-Paar am N).'
      ],
      altfrage: {
        question: 'Welche funktionelle Gruppe wird bei der Fehling-Probe nachgewiesen und wie?',
        answer: 'Die Fehling-Probe weist Aldehyde nach. Aldehyde reduzieren Cu²⁺-Ionen (blau) zu Cu₂O (ziegelrot). Der Aldehyd wird dabei zur Carbonsäure oxidiert. Ketone geben keine positive Fehling-Probe, da sie schwerer oxidierbar sind.'
      },
      klinischerBezug: '**Methanol-Vergiftung**: Methanol wird durch Alkoholdehydrogenase zu Formaldehyd und dann zu **Ameisensäure** oxidiert. Ameisensäure schädigt Sehnerv (Erblindung) und löst metabolische Azidose aus. Therapie: **Ethanol** oder **Fomepizol** als kompetitiver Inhibitor der Alkoholdehydrogenase, um toxische Metabolite zu verhindern. Hämodialyse bei schwerer Vergiftung. Quelle: gepanschter Schnaps, Frostschutzmittel.',
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
      content: `Organische Reaktionen lassen sich in vier Mechanismustypen einteilen: **Substitution**, **Addition**, **Eliminierung**, **Kondensation**.

**Substitution**: Ein Atom/Atomgruppe wird ersetzt. **Nukleophile Substitution** (Sₙ1/Sₙ2) und **radikalische Substitution** (Sᴿ). Bei **Sₙ2**: Nukleophil greift von Rückseite an (Walden-Umkehr, Inversion), Übergangszustand fünffach koordiniert, ein Schritt (konzertiert). Bei **Sₙ1**: erst Carbokation (geschwindigkeitsbestimmend), dann Nukleophil-Angriff → Racemat (Retention + Inversion zu gleichen Teilen). Sₙ2 bevorzugt: primäre Substrate, starke Nukleophile. Sₙ1 bevorzugt: tertiäre Substrate, schwache Nukleophile.

**Elektrophile Addition**: typische Reaktion der Alkene. Elektrophil greift elektronenreiche Doppelbindung an. **Markownikow-Regel**: H-Atom addiert sich an C-Atom mit den meisten H-Atomen (stabileres Carbokation wird gebildet). Beispiel: HBr + Propen → bevorzugt 2-Brompropan (nicht 1-Brompropan). Weitere elektrophile Additionen: Halogenierung (Br₂-Addition, Entfärbung von Bromwasser = Nachweis für C=C), Hydrierung (H₂-Addition mit Katalysator).

**Eliminierung**: Umkehrung der Addition. Unter Abspaltung kleiner Moleküle (H₂O, HX) entsteht Doppelbindung. E1/E2-Mechanismen analog zu Sₙ1/Sₙ2.

**Kondensation**: Zwei Moleküle verknüpfen sich unter Abspaltung eines kleinen Moleküls (meist H₂O). Beispiele: Veresterung (Carbonsäure + Alkohol → Ester + H₂O), Peptidbindung (AS + AS → Dipeptid + H₂O), Polykondensation (Nylon, PET). Umkehrung: **Hydrolyse** (Molekül wird unter Wasseranlagerung gespalten). In biologischen Systemen katalysieren Enzyme beide — z. B. Proteasen spalten Peptidbindungen (Hydrolyse), Ligasen verknüpfen Biomoleküle (Kondensation).`,
      merksätze: [
        'Sₙ2: ein Schritt, Rückseitenangriff, Inversion (primäre Substrate). Sₙ1: zwei Schritte, Carbokation, Racemat (tertiäre Substrate). Markownikow: H geht an das C mit mehr H-Atomen.',
        'Kondensation: Verknüpfung unter H₂O-Abspaltung. Hydrolyse: Spaltung unter H₂O-Anlagerung. Beide sind Umkehrreaktionen zueinander.'
      ],
      altfrage: {
        question: 'Welches Hauptprodukt entsteht bei der Addition von HBr an Propen nach der Markownikow-Regel?',
        answer: '2-Brompropan. Nach Markownikow addiert sich H an das C-Atom mit den meisten H-Atomen (C1), und Br geht an das C mit weniger H-Atomen (C2), da dort das stabilere sekundäre Carbokation entsteht.'
      },
      klinischerBezug: 'Viele Arzneimittel werden über nukleophile Substitutionen synthetisiert. **Alkylanzien** (z. B. Cyclophosphamid, Ifosfamid) wirken als Zytostatika: Sie bilden über Sₙ1-Reaktion ein Carbokation, das mit DNA reagiert und Quervernetzungen bildet. DNA-Schäden verhindern Zellteilung — genutzt in Chemotherapie. Nebenwirkung: auch gesunde Zellen betroffen (Knochenmark, Darmepithel). Bei **Nitroprussid-Test** (Nachweis von Thiolen) läuft nukleophile Substitution ab.',
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
      content: `**Benzol** (C₆H₆) ist der Grundkörper aromatischer Verbindungen. Planare, hexagonale Ringstruktur mit sechs sp²-hybridisierten C-Atomen. Die sechs p-Elektronen sind über den gesamten Ring **delokalisiert** (Mesomerie) — nicht in drei einzelnen Doppelbindungen lokalisiert.

Diese Delokalisierung verleiht **Resonanz- oder Mesomerieenergie** (ca. 150 kJ/mol). Benzol ist viel stabiler, als man für Cyclohexatrien (drei isolierte C=C) erwarten würde. Darstellung: alternierende Einzel-/Doppelbindungen (Kekulé) oder Kreis im Sechsring (Symbol für Delokalisierung).

**Hückel-Regel**: Ein planares, cyclisches, vollständig konjugiertes Molekül ist aromatisch, wenn es (4n + 2) π-Elektronen besitzt (n = 0, 1, 2, ...). Benzol: 6 π-Elektronen (n = 1) → aromatisch. Auch heterocyclisch: Pyridin (C₅H₅N, 6 π-e⁻), Pyrrol (C₄H₅N, 6 π-e⁻ unter Einbeziehung des freien Elektronenpaars am N), Furan (C₄H₄O). Antiaromatisch: 4n π-Elektronen (z. B. Cyclobutadien, 4 π-e⁻) → besonders instabil.

**Elektrophile aromatische Substitution** (SEAr): typische Reaktion der Aromaten. H-Atom wird ersetzt, aromatischer Charakter bleibt erhalten. Mechanismus: (1) Elektrophil greift Ring an, bildet σ-Komplex (Areniumion, Wheland-Komplex) — Aromatizität vorübergehend aufgehoben. (2) Proton wird abgespalten, Aromatizität wiederhergestellt. Wichtige SEAr: **Nitrierung** (NO₂⁺ aus HNO₃/H₂SO₄), **Halogenierung** (Cl⁺/Br⁺ mit Lewis-Säure wie FeBr₃), **Friedel-Crafts-Alkylierung** (R⁺ mit AlCl₃), **Sulfonierung** (SO₃). Substituenten beeinflussen Reaktivität und Orientierung: Elektronendonatoren (+M/-I, z. B. –OH, –NH₂) aktivieren, dirigieren ortho/para. Elektronenakzeptoren (–M/+I, z. B. –NO₂, –COOH) desaktivieren, dirigieren meta.`,
      merksätze: [
        'Aromatizität nach Hückel: planar, cyclisch, konjugiert, (4n+2) π-Elektronen. Benzol: 6 π-e⁻ → besonders stabil durch Mesomerie (ca. 150 kJ/mol Resonanzenergie).',
        'SEAr: Elektrophil ersetzt H am Ring → Aromatizität bleibt erhalten. Aktivierende Gruppen → ortho/para-Dirigenten; desaktivierende Gruppen → meta-Dirigenten.'
      ],
      altfrage: {
        question: 'Warum reagiert Benzol bevorzugt über Substitution und nicht über Addition?',
        answer: 'Bei einer Additionsreaktion würde die Aromatizität (Resonanzenergie von ca. 150 kJ/mol) zerstört werden. Bei der elektrophilen aromatischen Substitution (SEAr) bleibt der aromatische Ring erhalten, da nur ein H-Atom durch das Elektrophil ersetzt wird. Daher ist die Substitution thermodynamisch bevorzugt.'
      },
      klinischerBezug: 'Viele Medikamente enthalten aromatische Ringsysteme — **Aspirin** (Acetylsalicylsäure), **Paracetamol**, Antibiotika. **Polyzyklische aromatische Kohlenwasserstoffe** (PAK) wie **Benzo[a]pyren** (Zigarettenrauch, verkohltes Grillgut) sind karzinogen: Sie werden durch Cytochrom-P450-Enzyme zu reaktiven Epoxiden metabolisiert → DNA-Addukte → Mutationen → Lungenkrebs, Blasenkrebs. PAK-Exposition auch durch Dieselabgase, Industrieemissionen.',
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
