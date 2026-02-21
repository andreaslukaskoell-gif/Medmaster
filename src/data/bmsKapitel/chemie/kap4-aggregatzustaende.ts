import type { Kapitel } from '../types';

export const chemKap4: Kapitel = {
  id: 'chem-kap4',
  title: 'Aggregatzustände',
  subject: 'chemie',
  icon: '🧊',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ch-4-01',
      title: 'Aggregatzustände und molekulare Basis',
      content: `## Die vier Aggregatzustände der Materie

Materie tritt in vier grundlegenden Aggregatzuständen auf, die sich durch Energie, Anordnung und Beweglichkeit ihrer Teilchen fundamental unterscheiden. Welcher Aggregatzustand vorliegt, hängt von der Bilanz zwischen der **kinetischen Energie der Teilchen** (Wärmebewegung) und der **potentiellen Energie** durch intermolekulare Wechselwirkungen ab.

### Fester Aggregatzustand (solid)

Im festen Zustand überwiegen die intermolekularen Anziehungskräfte bei weitem über die thermische Bewegungsenergie. Die Teilchen sind in einer geordneten dreidimensionalen Struktur – dem **Kristallgitter** – fixiert. Sie verlassen ihre Gleichgewichtslage nicht, sondern führen nur kleine Schwingungen um diese aus (**Gitterschwingungen**). Feste Stoffe haben ein **definiertes Volumen** und eine **definierte Form**, sie sind praktisch **inkompressibel**.

Es werden mehrere Kristalltypen unterschieden:
- **Ionenkristalle** (NaCl, CaCO₃): Kationen und Anionen wechselwirken elektrostatisch. Hohe Schmelzpunkte (NaCl: 801°C), hart, spröde, leitend nur in Schmelze/Lösung.
- **Molekülkristalle** (Eis, Naphthalin, I₂): Moleküle werden durch Van-der-Waals-Kräfte oder Wasserstoffbrücken zusammengehalten. Niedrige Schmelzpunkte, weich.
- **Kovalente Netzwerkkristalle** (Diamant, SiO₂): Atome durch kovalente Bindungen verknüpft. Extrem hart, sehr hohe Schmelzpunkte (Diamant: >3550°C).
- **Metallkristalle** (Fe, Cu, Al): Positive Ionenrümpfe in einem Elektronengas. Gut elektrisch leitend, duktil, metallischer Glanz.

### Flüssiger Aggregatzustand (liquid)

Im flüssigen Zustand sind kinetische und potentielle Energie ähnlich groß. Teilchen befinden sich in unmittelbarer Nachbarschaft (**Nahordnung** statt Fernordnung), können sich aber relativ zueinander bewegen. Flüssigkeiten haben ein **definiertes Volumen**, aber **keine eigene Form** – sie nehmen die Form ihres Behälters an.

Die **Oberflächenspannung** ist eine direkte Folge der intermolekularen Kohäsionskräfte: Moleküle an der Oberfläche haben nach außen hin keine Nachbarn und erfahren eine resultierende Kraft nach innen. Wasser hat eine besonders hohe Oberflächenspannung (72 mN/m bei 20°C) aufgrund seiner Wasserstoffbrücken – dies ermöglicht den Kapillartransport in Pflanzen und im menschlichen Gefäßsystem.

Die **Viskosität** beschreibt den Fließwiderstand einer Flüssigkeit. Wasser hat bei 20°C eine dynamische Viskosität von 1,002 mPa·s, Blut etwa 3–4 mPa·s (bedingt durch Erythrozyten und Plasmaproteine). Erhöhte Blutviskosität (Polyzythämie, Paraproteinämie) erhöht den peripheren Gefäßwiderstand und belastet das Herz.

### Gasförmiger Aggregatzustand (gaseous)

Im gasförmigen Zustand dominiert die kinetische Energie vollständig. Teilchen bewegen sich chaotisch und schnell – bei 25°C beträgt die mittlere Geschwindigkeit von N₂-Molekülen etwa 515 m/s, von H₂O-Dampf etwa 640 m/s (nach der **Maxwell-Boltzmann-Verteilung**). Intermolekulare Wechselwirkungen sind vernachlässigbar gering. Gase sind hochgradig kompressibel, nehmen jeden verfügbaren Raum ein und können vollständig diffundieren.

Das **ideale Gasgesetz** (pV = nRT) gilt für verdünnte Gase gut: p = Druck (Pa), V = Volumen (m³), n = Stoffmenge (mol), R = 8,314 J/(mol·K), T = Temperatur (K). Reale Gase weichen davon ab – die Van-der-Waals-Gleichung berücksichtigt Eigenvolumen der Moleküle und intermolekulare Anziehungen.

### Plasma

Plasma ist ionisiertes Gas, in dem Elektronen von Atomkernen getrennt sind. Es ist der bei weitem häufigste Zustand sichtbarer Materie im Universum (Sterne, Blitze, Fluoreszenzlampen). Im medizinischen Sprachgebrauch bezeichnet "Blutplasma" den flüssigen Bestandteil des Blutes nach Entfernung der Zellen – ein biologischer Begriff ohne Bezug zum physikalischen Plasma.

## Anomalie des Wassers – ein Leben ermöglichendes Phänomen

Wasser zeigt ein physikalisch einzigartiges Verhalten: Seine Dichte nimmt beim Abkühlen von 100°C zunächst zu, erreicht ein **Maximum bei 3,98°C** (ρ = 0,9998 g/cm³) und nimmt dann beim weiteren Abkühlen bis 0°C wieder ab. Beim Gefrieren zu Eis sinkt die Dichte abrupt auf **ρ_Eis ≈ 0,917 g/cm³** – Eis ist also leichter als flüssiges Wasser.

**Ursache**: Wassermoleküle sind gewinkelt (Bindungswinkel 104,5°) und stark polar (Dipolmoment 1,85 D). Im flüssigen Wasser bestehen dynamische Wasserstoffbrückennetzwerke – jedes Molekül bildet im Mittel 3,4 Wasserstoffbrücken. Im Eiskristall (hexagonale Struktur) sind es genau 4 Wasserstoffbrücken pro Molekül, die ein offenes, weiträumiges hexagonales Gitter bilden. Diese Gitterstruktur ist weniger dicht gepackt als die Flüssigkeit.

**Biologische Bedeutung**: Diese Anomalie ist entscheidend für das Leben in gemäßigten Klimazonen:
1. Im Winter sinkt das dichtere 4°C-Wasser auf den Grund von Gewässern (Dichteausgleich)
2. Das leichtere kältere Wasser bleibt an der Oberfläche und gefriert zu Eis
3. Das Eis bildet eine isolierende Decke und schützt das darunter liegende flüssige Wasser
4. Fische und Mikroorganismen überleben bei ~4°C unter der Eisdecke

Ohne diese Anomalie würden Seen vollständig von unten nach oben gefrieren – aquatisches Leben wäre in gemäßigten Klimazonen unmöglich.

## Intermolekulare Wechselwirkungen als Grundlage der Aggregatzustände

Die Art und Stärke der intermolekularen Wechselwirkungen bestimmt maßgeblich, bei welcher Temperatur ein Stoff welchen Aggregatzustand einnimmt:

**Van-der-Waals-Kräfte** (London-Dispersionskräfte): Entstehen durch temporäre Dipole in allen Molekülen. Stärke steigt mit Molekülmasse und -größe. CH₄ (16 g/mol) siedet bei −162°C, C₈H₁₈ (114 g/mol) bei 126°C.

**Dipol-Dipol-Wechselwirkungen**: Zwischen permanenten Dipolen. HCl hat trotz ähnlicher Masse einen höheren Siedepunkt als Ar, weil HCl ein Dipol ist.

**Wasserstoffbrückenbindungen** (H-Brücken): Besonders starke Dipol-Dipol-Wechselwirkung zwischen H-Atom (gebunden an N, O oder F) und freiem Elektronenpaar von N, O oder F. Energie 10–40 kJ/mol. H₂O, HF und NH₃ haben anomal hohe Siedepunkte für ihre Molekülmasse.

**Ionische Wechselwirkungen**: Elektrische Anziehung zwischen entgegengesetzt geladenen Ionen. Energie bis zu 1000 kJ/mol. Ionische Verbindungen haben extrem hohe Schmelzpunkte.`,
      lernziele: [
        'Die vier Aggregatzustände anhand von Teilchenanordnung, Energie und makroskopischen Eigenschaften beschreiben und vergleichen',
        'Die vier Typen intermolekularer Wechselwirkungen (Van-der-Waals, Dipol-Dipol, Wasserstoffbrücken, ionisch) in ihrer Stärke einordnen und Beispiele nennen',
        'Die Anomalie des Wassers (Dichtemaximum bei 4°C, Ausdehnung beim Gefrieren) mechanistisch erklären und ihre biologische Bedeutung darlegen',
        'Den Zusammenhang zwischen Aggregatzustand und dem Verhältnis von kinetischer zu potentieller Energie der Teilchen erläutern',
        'Die verschiedenen Kristalltypen (Ionenkristall, Molekülkristall, Netzwerkkristall, Metallkristall) mit Beispielen und Eigenschaften nennen',
      ],
      sections: [
        {
          heading: 'Molekulare Grundlage der Aggregatzustände: Energiebilanz',
          text: 'Der Aggregatzustand einer Substanz ist das Ergebnis einer energetischen Konkurrenz. Die thermische Bewegungsenergie (kinetische Energie E_kin ∝ T) strebt danach, die Teilchen voneinander zu trennen und chaotisch zu bewegen. Die intermolekularen Wechselwirkungen (potentielle Energie E_pot) streben danach, die Teilchen zusammenzuhalten und zu ordnen. Im festen Zustand: E_pot >> E_kin – Teilchen sitzen in tiefen Potenzialmulden ihrer Nachbarn und schwingen darin. In der Flüssigkeit: E_pot ≈ E_kin – Teilchen können Nachbarn wechseln, verlassen aber den Verband nicht. Im Gas: E_kin >> E_pot – Teilchen bewegen sich nahezu frei. Diese Bilanz erklärt, warum polar-protonische Lösungsmittel wie Wasser bei viel höheren Temperaturen sieden als unpolare Moleküle gleicher Masse: Ethanol (M = 46 g/mol, Kp = 78°C) vs. Propan (M = 44 g/mol, Kp = −42°C) – ein Siedepunktunterschied von 120°C allein durch die OH-Gruppe und ihre Wasserstoffbrücken.',
          merksatz: 'E_kin > E_pot → Gas; E_kin ≈ E_pot → Flüssigkeit; E_kin < E_pot → Festkörper. Je stärker die intermolekularen Kräfte, desto höher der Siedepunkt.',
        },
        {
          heading: 'Anomalie des Wassers: Mechanismus und Konsequenzen',
          text: 'Die Dichteanomalie des Wassers ist eine direkte Folge seiner Wasserstoffbrückenstruktur. Im flüssigen Wasser bei hoher Temperatur überwiegt die thermische Bewegung: das H-Brücken-Netzwerk ist unvollständig und dynamisch, die Moleküle sind eng gepackt. Beim Abkühlen auf 4°C ordnen sich die Moleküle zunehmend in ein vollständigeres H-Brücken-Netzwerk – die engste Packung vor der Kristallisation. Unterhalb von 4°C beginnt die Ausbildung der hexagonalen Gitterstruktur, die trotz vollständigerem H-Brücken-Netzwerk eine geringere Packungsdichte aufweist (offenes Gitter mit Hohlräumen). Beim Gefrieren zu Eis dehnt sich Wasser um ca. 9% aus. Diese Ausdehnung hat praktische Folgen: Wasserleitungen können bei Frost platzen (Frostsprengung), Gesteinsspalten werden durch gefrierendes Wasser erweitert (Frostverwitterung), und Zellmembranen werden durch Eiskristallbildung zerstört – klinisch relevant bei Erfrierungen und beim Einfrieren von Gewebe ohne Kryoprotektiva.',
          merksatz: 'Wasser: Dichtemaximum bei 3,98°C, Eis ist leichter (ρ ≈ 0,917 g/cm³) → Seen gefrieren von oben → aquatisches Leben überlebt den Winter.',
        },
        {
          heading: 'Intermolekulare Wechselwirkungen und ihre Stärken',
          text: 'Die Stärke der intermolekularen Wechselwirkungen folgt der Hierarchie: Ionische Wechselwirkungen (bis 1000 kJ/mol) > Wasserstoffbrücken (10–40 kJ/mol) > Dipol-Dipol (1–10 kJ/mol) > London-Dispersion (0,05–40 kJ/mol, steigt mit Molekülgröße). London-Dispersionskräfte entstehen durch spontane Fluktuationen der Elektronenverteilung, die temporäre Dipole erzeugen und in Nachbarmolekülen induzierte Dipole induzieren. Wasserstoffbrücken entstehen durch die starke Polarisierung des H-Atoms, wenn es an elektronegative Atome (N, O, F) gebunden ist. H-Brücken sind richtungsabhängig und für viele biologische Strukturen konstitutiv: DNA-Doppelhelix (A-T: 2 H-Brücken; G-C: 3 H-Brücken), Proteinsekundärstruktur (α-Helix, β-Faltblatt).',
          merksatz: 'H-Brücken nur zwischen H (gebunden an N, O, F) und freiem Elektronenpaar von N, O oder F. Stärke: ionisch > H-Brücke > Dipol-Dipol > London.',
        },
      ],
      merksätze: [
        'Fest: geordnetes Gitter, definierte Form und Volumen, Gitterschwingungen',
        'Flüssig: Nahordnung, definiertes Volumen, nimmt Behälterform an, fließfähig',
        'Gasförmig: keine Ordnung, kein Eigenvolumen, vollständig kompressibel, chaotische Bewegung',
        'Plasma: ionisiertes Gas mit freien Elektronen – häufigster Zustand im Universum',
        'Wasser: Dichtemaximum bei 3,98°C → Eis schwimmt → Seen gefrieren von oben',
        'H-Brücken: H gebunden an N, O oder F wechselwirkt mit freiem Elektronenpaar von N, O, F',
        'Stärke intermol. Kräfte: ionisch > H-Brücke > Dipol-Dipol > London-Dispersion',
        'Wasserstoffbrücken erklären: hoher Siedepunkt von H₂O, DNA-Stabilität, Proteinstruktur',
        'Ionenkristall (NaCl): hoher Smp., spröde; Metallkristall: duktil, leitend; Netzwerkkristall (Diamant): härtester Stoff',
        'Viskosität Blut (3–4 mPa·s) > Wasser (1 mPa·s) → erhöhte Blutviskosität belastet das Herz',
      ],
      klinischerBezug: 'Die Viskosität des Blutes wird durch den Hämatokrit und die Plasmaproteine bestimmt. Bei Erkrankungen wie Polyzythämia vera oder multiplem Myelom (Paraproteinämie) steigt die Blutviskosität stark an, erhöht den peripheren Widerstand und kann zu Thrombosen, Schlaganfall und Herzversagen führen – Hyperviskositätssyndrom. Kryoprotektiva (z.B. Glycerin, DMSO) schützen bei der Kryokonservierung von Stammzellen vor der durch Eiskristallbildung bedingten Zellzerstörung, indem sie H-Brücken mit Wasser eingehen und die Kristallisation hemmen.',
      altfrage: {
        question: 'Erklären Sie mechanistisch, warum Wasser bei 4°C seine maximale Dichte hat und welche biologischen Konsequenzen die Dichteanomalie hat.',
        answer: 'Die Dichteanomalie des Wassers hat ihre Ursache in der Konkurrenz zwischen thermischer Bewegung und Wasserstoffbrücken-Netzwerkbildung. Bei hohen Temperaturen ist das H-Brücken-Netzwerk unvollständig und dynamisch, die Moleküle sind relativ eng gepackt. Beim Abkühlen nimmt die kinetische Energie ab, das H-Brücken-Netzwerk wird vollständiger – die Packungsdichte steigt zunächst (Dichte nimmt zu). Unterhalb von 4°C beginnt die Ausbildung der hexagonalen Eiskristallstruktur, die trotz maximaler H-Brücken-Verknüpfung (4 H-Brücken pro Molekül) ein offenes Gitter mit Hohlräumen bildet – die Dichte nimmt wieder ab. Im Eis liegt die Dichte bei 0,917 g/cm³, also rund 8% unter der des flüssigen Wassers. Biologische Konsequenzen: (1) In Gewässern sinkt das dichtere 4°C-Wasser auf den Grund, an der Oberfläche gefriert das kältere, leichtere Wasser zu Eis. Die Eisdecke isoliert thermisch – aquatische Organismen überleben bei ca. 4°C. Ohne diese Anomalie würden Seen vollständig durchgefrieren. (2) Die Ausdehnung beim Gefrieren (ca. 9%) führt zu Frostsprengung in Gesteinsspalten und zum Platzen von Wasserleitungen. (3) In lebenden Zellen bilden Eiskristalle scharfkantige Strukturen, die Zellmembranen zerstören – relevant bei Erfrierungen und in der Kryokonservierung, wo Kryoprotektiva (Glycerin, DMSO) die Kristallisation hemmen.',
      },
      selfTest: [
        {
          question: 'Was charakterisiert den flüssigen Aggregatzustand auf molekularer Ebene am besten?',
          options: [
            'Teilchen sind in einem geordneten Kristallgitter fixiert und führen nur Gitterschwingungen aus',
            'Teilchen bewegen sich frei und unabhängig, intermolekulare Wechselwirkungen sind vernachlässigbar',
            'Teilchen haben Nahordnung, können sich relativ zueinander bewegen, bleiben aber durch Kohäsionskräfte im Verband',
            'Teilchen sind ionisiert und bewegen sich in einem gemeinsamen Elektronengas',
            'Teilchen haben keine kinetische Energie und bilden ein starres Netzwerk mit maximaler H-Brücken-Zahl',
          ],
          correctIndex: 2,
          explanation: 'Im flüssigen Zustand besteht eine Nahordnung (im Gegensatz zur Fernordnung im Kristall und zur vollständigen Unordnung im Gas). Teilchen können sich relativ zueinander bewegen (daher Fließfähigkeit), verlassen aber den Flüssigkeitsverband nicht, da intermolekulare Kohäsionskräfte (Van-der-Waals, H-Brücken, Dipol-Dipol) noch wirksam sind. Daher haben Flüssigkeiten ein definiertes Volumen (im Gegensatz zum Gas), aber keine eigene Form (im Gegensatz zum Festkörper). Diese Struktur erklärt auch Phänomene wie Oberflächenspannung und Viskosität.',
          hints: [
            'Flüssigkeiten fließen (Teilchen beweglich), aber haben ein eigenes Volumen (Teilchen bleiben zusammen)',
            'Nahordnung bedeutet: lokale Struktur ja, aber kein langreichweitiges Gitter',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Bei welcher Temperatur hat flüssiges Wasser seine maximale Dichte?',
          options: [
            '0°C (Gefrierpunkt)',
            '3,98°C (ca. 4°C)',
            '20°C (Raumtemperatur)',
            '37°C (Körpertemperatur)',
            '100°C (Siedepunkt)',
          ],
          correctIndex: 1,
          explanation: 'Wasser hat sein Dichtemaximum bei exakt 3,98°C (gerundet 4°C) mit ρ = 0,9998 g/cm³. Diese Dichteanomalie ist eine Folge der Konkurrenz zwischen thermischer Kontraktion (bei Abkühlung) und der Ausbildung des offenen hexagonalen H-Brücken-Netzwerks (das die Dichte verringert). Unterhalb von 4°C nimmt die Dichte wieder ab – ein für fast alle anderen Flüssigkeiten unbekanntes Verhalten. Das Dichtemaximum bei 4°C bewirkt, dass der Boden von Seen im Winter die wärmste Schicht (4°C) enthält, was das Überleben aquatischer Organismen ermöglicht.',
          hints: [
            'Die Dichteanomalie des Wassers ist ein zentrales Merkwissen in Chemie und Biologie',
            'Zwischen 0°C und 4°C nimmt die Dichte von Wasser mit steigender Temperatur zu – ungewöhnlich!',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche intermolekulare Wechselwirkung ist am stärksten?',
          options: [
            'London-Dispersionskräfte zwischen großen Molekülen',
            'Dipol-Dipol-Wechselwirkungen zwischen polaren Molekülen',
            'Wasserstoffbrückenbindungen',
            'Ionische Wechselwirkungen zwischen entgegengesetzt geladenen Ionen',
            'Hydrophobe Wechselwirkungen zwischen unpolaren Molekülen',
          ],
          correctIndex: 3,
          explanation: 'Ionische Wechselwirkungen sind mit Energien von mehreren hundert bis über 1000 kJ/mol die stärksten intermolekularen Wechselwirkungen. Die Hierarchie der Stärke lautet: ionisch (bis ~1000 kJ/mol) > Wasserstoffbrücken (10–40 kJ/mol) > Dipol-Dipol (1–10 kJ/mol) > London-Dispersion (0,05–40 kJ/mol, je nach Molekülgröße). Diese Hierarchie spiegelt sich direkt in den Schmelzpunkten wider: Ionenkristalle (NaCl: 801°C) schmelzen bei viel höheren Temperaturen als Molekülkristalle (Eis: 0°C) oder Van-der-Waals-Feststoffe.',
          hints: [
            'Ionenkristalle (NaCl) haben sehr hohe Schmelzpunkte – was sagt das über die Bindungsstärke?',
            'Denken Sie an die Hierarchie: ionisch > H-Brücken > Dipol-Dipol > London',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die biologische Hauptbedeutung der Tatsache, dass Eis eine geringere Dichte als flüssiges Wasser hat?',
          options: [
            'Pflanzen können Wasser leichter durch Kapillarkräfte aufsteigen lassen',
            'Aquatische Organismen überleben den Winter, weil Gewässer von oben gefrieren und eine isolierende Eisschicht bilden',
            'Das Blut des Menschen kann leichter vom Herzen durch den Körper gepumpt werden',
            'Schneeflocken können in der Luft schweben und damit Niederschlag bilden',
            'Wasservögel können auf dem Wasser laufen dank der Oberflächenspannung des Eises',
          ],
          correctIndex: 1,
          explanation: 'Da Eis (ρ ≈ 0,917 g/cm³) leichter als flüssiges Wasser ist, schwimmt es oben. Im Winter kühlt sich die Wasseroberfläche ab – unter 4°C wird das Wasser leichter und gefriert schließlich an der Oberfläche. Das Eis bildet eine thermische Isolierschicht, die das darunter liegende Wasser vor weiterer Abkühlung schützt. Unter der Eisdecke bleibt das Wasser flüssig (bei ~4°C), und Fische, Mikroorganismen sowie andere aquatische Lebewesen können überleben. Ohne diese Anomalie würden Seen von unten nach oben vollständig durchgefrieren, und aquatisches Leben in gemäßigten Klimazonen wäre weitgehend unmöglich.',
          hints: [
            'Was passiert in einem See im Winter, wenn die Außentemperatur unter 0°C fällt?',
            'Die Eisschicht oben wirkt wie ein Isolator für das Wasser darunter',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Kristalltyp ist elektrisch leitend, duktil (verformbar) und hat einen metallischen Glanz?',
          options: [
            'Ionenkristall (z.B. NaCl)',
            'Molekülkristall (z.B. Eis)',
            'Kovalenter Netzwerkkristall (z.B. Diamant)',
            'Metallkristall (z.B. Kupfer)',
            'Molekülkristall mit Wasserstoffbrücken (z.B. NH₃ fest)',
          ],
          correctIndex: 3,
          explanation: 'Metallkristalle bestehen aus positiv geladenen Ionenrümpfen, die in einem delokalisierten Elektronengas eingebettet sind. Die frei beweglichen Elektronen ermöglichen elektrische Leitfähigkeit und Wärmeleitung. Die nicht-direktionale Natur der Metallbindung erlaubt plastische Verformung (Duktilität, Hämmerbarkeit) ohne Sprödbruch. Der metallische Glanz entsteht durch Absorption und Reemission von Licht durch die freien Elektronen. Ionenkristalle sind bei Raumtemperatur nicht leitend (Ionen fixiert im Gitter), bei Schmelze oder in Lösung hingegen leitend. Diamant ist das härteste natürliche Material, aber elektrisch nicht leitend und spröde.',
          hints: [
            'Welcher Kristalltyp enthält frei bewegliche Elektronen?',
            'Kupferdraht leitet Strom und lässt sich biegen – welchem Kristalltyp entspricht das?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Zwischen welchen Atomen können Wasserstoffbrückenbindungen gebildet werden?',
          options: [
            'Zwischen jedem H-Atom und jedem Atom mit freiem Elektronenpaar',
            'Nur zwischen zwei O-Atomen über ein H-Atom',
            'Zwischen einem H-Atom, das an N, O oder F gebunden ist, und einem freien Elektronenpaar eines N-, O- oder F-Atoms',
            'Zwischen einem H-Atom und jedem negativen Ion',
            'Nur zwischen O-H-Gruppen in Wasser und Alkoholen',
          ],
          correctIndex: 2,
          explanation: 'Wasserstoffbrückenbindungen entstehen durch die starke Polarisierung des H-Atoms, wenn es kovalent an ein stark elektronegatiges Atom (N, O oder F) gebunden ist. Das H-Atom trägt dann eine ausgeprägte positive Partialladung (δ+) und kann mit dem freien Elektronenpaar eines benachbarten N-, O- oder F-Atoms in Wechselwirkung treten. Die Stärke (10–40 kJ/mol) liegt zwischen kovalenten Bindungen (~350 kJ/mol für C-H) und gewöhnlichen Van-der-Waals-Kräften (~1 kJ/mol). H-Brücken sind essentiell für DNA-Struktur (A-T: 2 H-Brücken, G-C: 3 H-Brücken), Proteinsekundärstruktur (α-Helix, β-Faltblatt) und die einzigartigen Eigenschaften von Wasser.',
          hints: [
            'Nur die elektronegativsten Elemente: N, O und F können H-Brücken ausbilden',
            'Das H-Atom muss an eines dieser Elemente gebunden sein UND mit einem freien Elektronenpaar wechselwirken',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum hat Ethanol (C₂H₅OH, M = 46 g/mol, Kp = 78°C) einen viel höheren Siedepunkt als Dimethylether (CH₃-O-CH₃, M = 46 g/mol, Kp = −24°C), obwohl beide die gleiche Molmasse haben?',
          options: [
            'Ethanol hat eine größere Moleküloberfläche und damit stärkere London-Kräfte',
            'Ethanol kann über seine OH-Gruppe Wasserstoffbrückenbindungen mit anderen Ethanolmolekülen ausbilden, Dimethylether hingegen nicht',
            'Ethanol ist ein stärkerer Elektrolyt und dissoziiert in Lösung',
            'Dimethylether hat ein größeres Dipolmoment als Ethanol',
            'Ethanol hat eine höhere Dichte und damit stärkere ionische Wechselwirkungen',
          ],
          correctIndex: 1,
          explanation: 'Trotz gleicher Molmasse (M = 46 g/mol) unterscheiden sich die Siedepunkte von Ethanol (78°C) und Dimethylether (−24°C) um 102°C. Der entscheidende Unterschied liegt in der Fähigkeit zur Wasserstoffbrückenbildung: Ethanol besitzt eine OH-Gruppe, deren H-Atom starke H-Brücken mit dem freien Elektronenpaar des O-Atoms benachbarter Ethanolmoleküle ausbilden kann. Zum Sieden müssen diese H-Brücken gebrochen werden – das erfordert erheblich mehr Energie. Dimethylether hat zwar auch ein O-Atom mit freien Elektronenpaaren (kann H-Brücken akzeptieren), aber kein H an O oder N – es kann keine H-Brücken als Donor bilden. Es wirken nur schwächere Dipol-Dipol-Kräfte und London-Kräfte.',
          hints: [
            'H-Brückenbildung erfordert H an N, O oder F',
            'Gleiche Masse, aber fundamental andere Wechselwirkungen – welches Molekül hat eine OH-Gruppe?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Ein Patient mit multiplem Myelom hat eine stark erhöhte Konzentration von Immunglobulinen im Blut. Welche physikalische Eigenschaft des Blutes ändert sich und welche klinische Konsequenz folgt?',
          options: [
            'Die Oberflächenspannung steigt, was zu Hämolyse führt',
            'Der osmotische Druck sinkt, was zu generalisiertem Ödem führt',
            'Die Viskosität steigt, was den peripheren Widerstand erhöht und Thrombosen begünstigt',
            'Die Dichte sinkt, was zu einem verringerten venösen Rückfluss führt',
            'Der pH-Wert steigt (Alkalose), da Immunglobuline basische Proteine sind',
          ],
          correctIndex: 2,
          explanation: 'Beim multiplen Myelom produzieren maligne Plasmazellen große Mengen monoklonaler Immunglobuline (Paraproteine). Diese hochmolekularen Proteine erhöhen die Viskosität des Blutplasmas erheblich. Erhöhte Blutviskosität (Hyperviskositätssyndrom) führt zu: erhöhtem peripherem Gefäßwiderstand, vermindertem Blutfluss in Kapillaren, erhöhtem Thromboserisiko durch verlangsamten Blutfluss (Stase), und neurologischen Symptomen (Kopfschmerzen, Sehstörungen, Verwirrtheit) durch gestörte Hirndurchblutung. Therapeutisch kann eine Plasmapherese (Plasmatrennverfahren) die Viskosität akut senken.',
          hints: [
            'Hohe Proteinkonzentration im Plasma – wie beeinflusst das die Fließeigenschaften?',
            'Denken Sie an die Viskosität und ihre Bedeutung für den Blutfluss',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-4-02',
      title: 'Phasenübergänge – Energetik und Bedingungen',
      content: `## Phasenübergänge: Überblick und Nomenklatur

Phasenübergänge sind Zustandsänderungen zwischen den Aggregatzuständen, die bei definierten Temperatur-Druck-Bedingungen stattfinden. Sie sind stets mit einer Enthalpieänderung verbunden (latente Wärme), die **nicht** zur Temperaturänderung, sondern zur Änderung der Molekülanordnung und der intermolekularen Abstände verwendet wird. Auf einer **Heizkurve** (Temperatur gegen Zeit bei konstanter Wärmezufuhr) erscheinen Phasenübergänge als **Plateaus** – die Temperatur bleibt konstant, obwohl weiterhin Energie zugeführt wird.

Die sechs Phasenübergänge:
- **Schmelzen** (fest → flüssig): endotherm, ΔH > 0; Gitterstruktur wird aufgebrochen
- **Erstarren** (flüssig → fest): exotherm, ΔH < 0; Kristallgitter bildet sich
- **Verdampfen** (flüssig → gasförmig): endotherm, ΔH > 0; alle intermolekularen Bindungen werden gelöst
- **Kondensieren** (gasförmig → flüssig): exotherm, ΔH < 0; intermolekulare Bindungen bilden sich
- **Sublimieren** (fest → gasförmig): endotherm, ΔH > 0; ΔH_sub = ΔH_s + ΔH_v
- **Resublimieren** (gasförmig → fest): exotherm, ΔH < 0; z.B. Reifbildung

Die Enthalpie eines Phasenübergangs und seines Umkehrprozesses sind stets betragsmäßig gleich und haben entgegengesetztes Vorzeichen (Hess'scher Satz).

## Schmelzenthalpie und Verdampfungsenthalpie von Wasser

**Schmelzenthalpie**: ΔH_s(H₂O) = **6,01 kJ/mol = 333 J/g** (bei 0°C, 1 bar)
Zum Schmelzen von 1 g Eis bei 0°C werden 333 J benötigt – deutlich mehr als zum Erwärmen von 1 g flüssigem Wasser um 1°C (4,18 J). Ein Gramm schmelzendes Eis bei 0°C entnimmt der Umgebung dieselbe Wärmemenge wie die Abkühlung von 80 g Wasser um 1°C – deshalb kühlt Eis im Getränk so effizient.

**Verdampfungsenthalpie**: ΔH_v(H₂O) = **40,7 kJ/mol = 2257 J/g** (bei 100°C, 1 bar)
Dies ist ein außergewöhnlich hoher Wert – verursacht durch die starken Wasserstoffbrücken, die beim Verdampfen vollständig gebrochen werden müssen. Verglichen mit: Methanol: 1104 J/g; Benzol: 393 J/g; Diethylether: 358 J/g.

**Verhältnis**: ΔH_v / ΔH_s = 2257 / 333 ≈ 6,8 – Verdampfen erfordert fast siebmal mehr Energie als Schmelzen, weil beim Verdampfen alle verbleibenden intermolekularen Wechselwirkungen gebrochen werden müssen, beim Schmelzen hingegen nur die Gitterstruktur aufgelöst wird (Moleküle bleiben in Kontakt).

## Thermoregulation durch Schweiß

Der menschliche Körper nutzt die hohe Verdampfungsenthalpie des Wassers zur Thermoregulation:
- Bei starker körperlicher Aktivität können 1–2 Liter Schweiß pro Stunde produziert werden
- Verdunstung von 1 Liter Wasser entzieht der Haut: 1000 g × 2257 J/g = 2.257.000 J = **2,26 MJ/h ≈ 627 W**
- Bei Hypohidrose (verminderte Schweißsekretion, z.B. durch anticholinerge Medikamente) ist die Thermoregulation gestört → Hyperthermierisiko

## Kolligative Eigenschaften: Siedepunktserhöhung und Gefrierpunktserniedrigung

Gelöste Stoffe verändern Siedepunkt und Gefrierpunkt des Lösungsmittels. Diese **kolligativen Eigenschaften** hängen ausschließlich von der **Anzahl der gelösten Teilchen** (Molalität b), nicht von deren chemischer Natur ab:

### Gefrierpunktserniedrigung
ΔT_f = K_f × b × i

- K_f (kryoskopische Konstante für Wasser) = **1,86 K·kg/mol**
- b = Molalität (mol gelöster Stoff pro kg Lösungsmittel)
- i = Van't-Hoff-Faktor (Teilchenanzahl pro Formeleinheit bei Dissoziation)

Beispiele:
- Glucose (nicht-Elektrolyt, i = 1): 1 mol/kg → ΔT_f = 1,86 K
- NaCl (i ≈ 2, da Na⁺ + Cl⁻): 1 mol/kg → ΔT_f ≈ 3,72 K
- CaCl₂ (i ≈ 3, da Ca²⁺ + 2Cl⁻): 1 mol/kg → ΔT_f ≈ 5,58 K

### Siedepunktserhöhung
ΔT_s = K_s × b × i

- K_s (ebullioskopische Konstante für Wasser) = **0,512 K·kg/mol**

### Klinische Anwendung: Osmolalität des Blutes

Die Blutosmolalität (normal: 280–300 mosmol/kg) kann durch Kryoskopie (Messung der Gefrierpunktserniedrigung) exakt bestimmt werden. Normaler Gefrierpunkt des Blutes: ca. −0,52°C. Osmolalitätslücke (gemessen − berechnet) > 10 mosmol/kg → Hinweis auf osmotisch wirksame unbekannte Substanzen (z.B. Ethanol, Methanol, Ethylenglykol bei Intoxikationen).

## Verdunstung vs. Sieden

**Sieden** tritt auf, wenn der Sättigungsdampfdruck der Flüssigkeit den Umgebungsdruck erreicht (Blasenbildung im Volumen).

**Verdunstung** findet bei jeder Temperatur unterhalb des Siedepunkts an der **Oberfläche** statt. Gemäß der Maxwell-Boltzmann-Verteilung haben immer einige Oberflächenmoleküle genug kinetische Energie, um die intermolekularen Bindungen zu überwinden und zu entweichen. Verdunstung kühlt die Oberfläche (Abtransport energiereicher Moleküle) – dies ist der physikalische Grund für das Kältegefühl nach dem Schwimmen oder beim Auftragen von Desinfektionsmittel (Ethanol verdunstet schnell).`,
      lernziele: [
        'Alle sechs Phasenübergänge benennen, in der Energetik (endo-/exotherm) einordnen und mit Beispielen illustrieren',
        'Die Schmelzenthalpie (333 J/g) und Verdampfungsenthalpie (2257 J/g) von Wasser kennen, den Unterschied erklären und einfache Berechnungen durchführen',
        'Siedepunktserhöhung und Gefrierpunktserniedrigung als kolligative Eigenschaften erläutern, die Formeln anwenden und den Van\'t-Hoff-Faktor bei Elektrolyten berücksichtigen',
        'Den Unterschied zwischen Verdunstung und Sieden erklären und auf die Thermoregulation des Menschen anwenden',
        'Die klinische Bedeutung der Osmolalitätsmessung (Kryoskopie) und der Gefrierpunktserniedrigung für die Diagnostik erläutern',
      ],
      sections: [
        {
          heading: 'Energetik der Phasenübergänge: Heizkurven und latente Wärme',
          text: 'Bei der Erwärmung einer Substanz von tiefer Temperatur bis zum Dampfzustand zeigt die Heizkurve (T gegen t bei konstanter Wärmezufuhr) charakteristische Plateaus. Beim Schmelzpunkt steigt die Temperatur nicht mehr an, obwohl weiterhin Energie zugeführt wird: Die zugeführte Wärme wird als latente Wärme (Schmelzenthalpie) verbraucht, um die Gitterstruktur aufzubrechen – ohne Temperaturänderung. Für Wasser zeigt die Heizkurve von −20°C bis 150°C bei 1 bar: Anstieg (Eis erwärmt sich, c_Eis = 2,09 J/(g·K)), Plateau bei 0°C (Schmelzen, 333 J/g), Anstieg (Wasser erwärmt sich, c_Wasser = 4,18 J/(g·K)), Plateau bei 100°C (Verdampfen, 2257 J/g), Anstieg (Dampf erwärmt sich, c_Dampf = 2,01 J/(g·K)). Das Verhältnis der Plateaulängen spiegelt das Verhältnis der Enthalpien wider: Das Siedeplatz-Plateau ist etwa sechsmal breiter als das Schmelzplateau.',
          merksatz: 'An Phasenübergängen bleibt T konstant (Plateaus in der Heizkurve) – Energie ändert die Molekülanordnung, nicht die Temperatur. ΔH_v(H₂O) = 2257 J/g >> ΔH_s(H₂O) = 333 J/g.',
        },
        {
          heading: 'Kolligative Eigenschaften: Osmolalität und klinische Diagnostik',
          text: 'Kolligative Eigenschaften sind Eigenschaften von Lösungen, die nur von der Anzahl (Konzentration) der gelösten Teilchen abhängen, nicht von deren Art. Neben Siedepunktserhöhung und Gefrierpunktserniedrigung zählen dazu auch der osmotische Druck (π = i·c·R·T) und die Dampfdruckerniedrigung (Raoult\'sches Gesetz). Klinisch zentral ist die Osmolalität des Blutes, abgeschätzt durch: 2 × Na⁺ (mmol/L) + Glucose (mg/dL)/18 + Harnstoff (mg/dL)/2,8. Die Osmolalitätslücke (gemessene − berechnete Osmolalität) > 10 mosmol/kg weist auf osmotisch wirksame Substanzen hin – klassischerweise bei Intoxikation mit Ethanol, Methanol, Ethylenglykol oder Isopropanol. Methanol- und Ethylenglykolintoxikationen sind lebensbedrohlich und medizinische Notfälle (Therapie: Fomepizol hemmt die Alkoholdehydrogenase).',
          merksatz: 'ΔT_f = K_f · b · i (H₂O: K_f = 1,86 K·kg/mol). Osmolalitätslücke > 10 mosmol/kg → Verdacht auf osmotisch wirksame Toxine (Methanol, Ethylenglykol).',
        },
        {
          heading: 'Thermoregulation und Sublimation in der Medizin',
          text: 'Die Gefriertrocknung (Lyophilisation) ist das wichtigste medizintechnische Verfahren, das auf Sublimation basiert. Wasserhaltige Präparate (Impfstoffe, Blutprodukte, Antibiotika) werden zunächst schockgefroren (bei −40°C bis −80°C). Dann wird der Umgebungsdruck unter den Tripelpunkts-Druck von Wasser (611 Pa) abgesenkt. Bei diesem niedrigen Druck sublimiert das Eis direkt in die Gasphase, ohne flüssig zu werden. Das Ergebnis ist ein trockenes, poröses Pulver, das bei Raumtemperatur jahrelang lagerfähig ist und durch Zugabe von Wasser (Rekonstitution) schnell wieder gelöst werden kann. Vorteile: kein Hitze-Schaden an Proteinen und Nukleinsäuren, geringe Schrumpfung. Sublimation tritt auch in der Natur auf: Schnee und Eis sublimieren bei trockener, kalter Luft.',
          merksatz: 'Lyophilisation: Gefrieren + Vakuum → Sublimation (fest → gasförmig, ohne flüssig zu werden) → trockenes, lagerfähiges Produkt. Grundlage für haltbare Impfstoffe und Blutprodukte.',
        },
      ],
      merksätze: [
        'Sechs Phasenübergänge: Schmelzen, Erstarren, Verdampfen, Kondensieren, Sublimieren, Resublimieren',
        'Endotherm (Energie wird aufgenommen): Schmelzen, Verdampfen, Sublimieren',
        'Exotherm (Energie wird abgegeben): Erstarren, Kondensieren, Resublimieren',
        'ΔH_s(H₂O) = 333 J/g (6,01 kJ/mol); ΔH_v(H₂O) = 2257 J/g (40,7 kJ/mol)',
        'Verdampfen braucht ~7× mehr Energie als Schmelzen → alle H-Brücken müssen gebrochen werden',
        'Kolligativ: nur Teilchenanzahl (Molalität) zählt, nicht die Art des gelösten Stoffs',
        'ΔT_f = K_f · b · i (H₂O: K_f = 1,86); ΔT_s = K_s · b · i (H₂O: K_s = 0,512)',
        'Elektrolyte: NaCl (i ≈ 2), CaCl₂ (i ≈ 3) → stärkere Gefrierpunktserniedrigung',
        'Osmolalitätslücke > 10 mosmol/kg → Verdacht auf Toxine (Methanol, Ethylenglykol)',
        'Schweiß: 1 L/h Verdunstung → ~627 W Wärmeabgabe (2257 kJ/L)',
      ],
      klinischerBezug: 'Die Kryoskopie (Messung der Gefrierpunktserniedrigung) ist eine Standardmethode zur Bestimmung der Plasmaosmolalität. Eine erhöhte Osmolalitätslücke (gemessen minus berechnet > 10 mosmol/kg) ist ein wichtiger diagnostischer Hinweis auf eine Vergiftung mit osmotisch aktiven Substanzen wie Methanol oder Ethylenglykol (Frostschutzmittel) – beide lebensbedrohlich. Die hohe Verdampfungsenthalpie des Wassers (2257 J/g) ist physiologisch zentral für die Thermoregulation durch Schwitzen; anticholinerge Medikamente, die die Schweißsekretion hemmen, können bei körperlicher Belastung oder hohen Umgebungstemperaturen zu gefährlicher Hyperthermie führen.',
      altfrage: {
        question: 'Ein Patient trinkt versehentlich Frostschutzmittel (Ethylenglykol). Wie kann man dies laborchemisch durch Messung der Gefrierpunktserniedrigung erkennen, und warum ist der Van\'t-Hoff-Faktor bei der Interpretation zu beachten?',
        answer: 'Ethylenglykol (Ethandiol, C₂H₆O₂, M = 62 g/mol) ist ein nicht-elektrolytischer, organischer Alkohol (i = 1 – er dissoziiert nicht in Ionen). Im Blutplasma erhöht er die Osmolalität, da jedes gelöste Molekül als ein Osmolyt zählt. Klinische Erkennung durch Osmolalitätslücke: Die gemessene Plasma-Osmolalität (durch Kryoskopie) übersteigt die berechnete Osmolalität (aus Na⁺, Glucose, Harnstoff) deutlich. Die Differenz – die Osmolalitätslücke – ist erhöht (>10 mosmol/kg, bei Vergiftung oft >30–50 mosmol/kg). Van\'t-Hoff-Faktor: Ethylenglykol ist kein Elektrolyt (i = 1), erzeugt also pro Mol nur eine Teilcheneinheit. NaCl hingegen ergibt i = 2 (Na⁺ + Cl⁻), was eine doppelt so starke Gefrierpunktserniedrigung pro Mol verursacht. Bei der Interpretation muss daher die Art des Gelösten berücksichtigt werden. Ethylenglykol wird zu toxischen Metaboliten (Glykolsäure, Oxalsäure → Hyperoxalurie, Nierenversagen durch Calciumoxalat-Kristalle) abgebaut. Therapie: Fomepizol oder Ethanol hemmen die Alkoholdehydrogenase kompetitiv und verhindern die Bildung der toxischen Metabolite. Frühzeitige Diagnose ist lebenswichtig.',
      },
    },
  ],
};
