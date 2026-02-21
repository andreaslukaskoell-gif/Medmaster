// @ts-nocheck
import type { Kapitel } from '../types';

export const chemKap5: Kapitel = {
  id: 'chem-kap5',
  title: 'Periodensystem der Elemente',
  subject: 'chemie',
  icon: '📋',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ch-5-01',
      title: 'Aufbau und Ordnungsprinzip des PSE',
      content: `## Geschichte und Entwicklung des Periodensystems

Das Periodensystem der Elemente (PSE) ist eines der fundamentalsten Ordnungssysteme der Naturwissenschaften. Im Jahr 1869 veröffentlichten **Dmitri Iwanowitsch Mendelejew** (Russland) und **Lothar Meyer** (Deutschland) unabhaengig Tabellen, die Elemente nach Atommasse anordneten und Periodizitaeten der Eigenschaften zeigten. Mendelejews geniale Leistung lag darin, Luecken fuer noch unentdeckte Elemente vorherzusagen: Eka-Aluminium (Gallium, 1875), Eka-Bor (Scandium, 1879), Eka-Silicium (Germanium, 1886) stimmten fast exakt mit seinen Vorhersagen ueberein.

Das moderne PSE basiert auf der **Kernladungszahl (Ordnungszahl Z)**, also der Protonenzahl. Henry Moseley klaerte dies 1913 durch Roentgenspektroskopie: Charakteristische Roentgenfrequenzen haengen von Z ab, nicht von der Atommasse. Seither werden Elemente von Wasserstoff (Z=1) bis Oganesson (Z=118) geordnet. Die Umstellung loeste alle scheinbaren Anomalien: Ar (Atommasse 39,9, Z=18) steht korrekt vor K (39,1, Z=19).

## Perioden: Horizontale Zeilen

Das PSE besitzt **7 Perioden** (horizontale Zeilen). Die Periodennummer entspricht der hoechsten Hauptquantenzahl n der Valenzelektronen:

- **Periode 1** (n=1): H, He - nur 1s-Orbitale, 2 Elemente
- **Periode 2** (n=2): Li bis Ne - 2s und 2p-Orbitale, 8 Elemente
- **Periode 3** (n=3): Na bis Ar - 3s und 3p-Orbitale, 8 Elemente
- **Periode 4** (n=4): K bis Kr - 4s, 3d und 4p-Orbitale, 18 Elemente (erstmals d-Block)
- **Periode 5** (n=5): Rb bis Xe - 5s, 4d und 5p-Orbitale, 18 Elemente
- **Periode 6** (n=6): Cs bis Rn - 6s, 4f, 5d und 6p-Orbitale, 32 Elemente (Lanthanoide)
- **Periode 7** (n=7): Fr bis Og - 7s, 5f, 6d und 7p-Orbitale, 32 Elemente (Actinoide)

Merkreihe Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32 (aus Kapazitat der Unterschalen: s=2, p=6, d=10, f=14).

## Gruppen: Vertikale Spalten

Das PSE hat **18 Gruppen** (IUPAC-Nummerierung 1-18). Elemente derselben Gruppe haben identische Valenzelektronenzahl und aehnliche chemische Eigenschaften:

- **Gruppe 1** (Alkalimetalle): 1 Valenzelektron (ns¹), bilden +1-Ionen
- **Gruppe 2** (Erdalkalimetalle): 2 Valenzelektronen (ns²), bilden +2-Ionen
- **Gruppen 3-12** (Uebergangsmetalle / d-Block): variable Oxidationsstufen
- **Gruppe 13**: 3 Valenzelektronen (s²p¹), z.B. Al, B
- **Gruppe 14**: 4 Valenzelektronen (s²p²), z.B. C, Si
- **Gruppe 15**: 5 Valenzelektronen (s²p³), z.B. N, P
- **Gruppe 16** (Chalkogene): 6 Valenzelektronen (s²p⁴), z.B. O, S
- **Gruppe 17** (Halogene): 7 Valenzelektronen (s²p⁵), bilden -1-Ionen
- **Gruppe 18** (Edelgase): 8 Valenzelektronen (s²p⁶; He: 1s²), chemisch inert

Im p-Block gilt: Gruppenummer = 10 + Anzahl der Valenzelektronen.

## Bloecke: Orbital-Besetzung und Position

Die PSE-Position spiegelt direkt wider, welches Orbital zuletzt besetzt wird (Aufbauprinzip):

- **s-Block** (Gruppen 1-2): Letzte Elektronen in s-Orbitalen (Na: [Ne] 3s¹; Ca: [Ar] 4s²)
- **p-Block** (Gruppen 13-18): Letzte Elektronen in p-Orbitalen (Al: [Ne] 3s²3p¹ bis Ar: [Ne] 3s²3p⁶)
- **d-Block** (Gruppen 3-12): Letzte Elektronen in d-Orbitalen der vorletzten Schale (Fe: [Ar] 3d⁶ 4s²)
- **f-Block** (Lanthanoide, Actinoide): Letzte Elektronen in f-Orbitalen; aus Platzgruenden unten ausgelagert

## Metallcharakter und Trennlinie

Eine Treppenlinie (B -> Si -> Ge -> As -> Sb -> Te -> At) trennt **Metalle** (links/unten) von **Nichtmetallen** (rechts/oben). Entlang dieser Linie stehen die **Halbmetalle (Metalloide)**: B, Si, Ge, As, Sb, Te, At. Silicium ist die Basis der Mikroelektronik (Transistoren, integrierte Schaltkreise durch p- und n-Dotierung). As₂O₃ (Trisenox) ist ein zugelassenes Therapeutikum bei akuter Promyelozyten-Leukaemie (APL).

Der **Metallcharakter** nimmt zu: in einer Periode von rechts nach links und in einer Gruppe von oben nach unten.

## Ausnahmen beim Aufbauprinzip: Chrom und Kupfer

- **Chrom (Z=24)**: Erwartet [Ar] 3d⁴ 4s², tatsaechlich **[Ar] 3d⁵ 4s¹** - halbgefuelltes d⁵ (maximale Austauschenergie nach Hund)
- **Kupfer (Z=29)**: Erwartet [Ar] 3d⁹ 4s², tatsaechlich **[Ar] 3d¹⁰ 4s¹** - vollgefuelltes d¹⁰ ist besonders stabil

Chrom(III): essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung). Chrom(VI): stark karzinogen.`,

      lernziele: [
        'Den Aufbau des PSE mit Perioden, Gruppen und Bloecken erklaeren und den Zusammenhang zur Quantenzahlsystematik herstellen',
        'Die Entwicklung des PSE von Mendelejew (Atommasse) zum modernen System nach Kernladungszahl historisch einordnen',
        'Den Zusammenhang zwischen PSE-Position und Elektronenkonfiguration fuer Haupt- und Nebengruppenelemente ableiten',
        'Den Trend des Metallcharakters und die Lage der Halbmetalle (Metalloide) im PSE beschreiben',
        'Aus einer Elektronenkonfiguration Periode, Gruppe und Block direkt bestimmen',
      ],

      sections: [
        {
          heading: 'Perioden: Schalenzahl und Elementanzahl',
          text: 'Die Laenge jeder Periode richtet sich nach der Kapazitaet der besetzten Unterschalen. Periode 1: nur 1s, max. 2e- => 2 Elemente (H, He). Perioden 2 und 3: s und p-Unterschalen, max. 8e- => je 8 Elemente. Perioden 4 und 5: s, d und p, max. 18e- => je 18 Elemente. Perioden 6 und 7: s, f, d und p, max. 32e- => je 32 Elemente (f-Block = Lanthanoide/Actinoide). Lanthanoide (Ce-Lu) und Actinoide (Th-Lr) werden aus Platzgruenden unten ausgelagert, gehoeren aber formal zu Perioden 6 und 7. Alle Actinoide ab Uran (Z=92) sind radioaktiv. Merkregel: 2 - 8 - 8 - 18 - 18 - 32 - 32.',
          merksatz: 'Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32 (entspricht Kapazitaet der Unterschalen)',
        },
        {
          heading: 'Gruppen: gleiche Valenzelektronen = gleiche Chemie',
          text: 'Elemente der gleichen Gruppe haben gleich viele Valenzelektronen und nahezu identische chemische Eigenschaften. Beispiel Gruppe 1: Li, Na, K, Rb, Cs bilden alle +1-Ionen, reagieren mit Wasser zu Lauge + H2, bilden weisse, gut loesliche Salze. Im p-Block: Gruppenummer = 10 + Valenzelektronen (Gr.13 = 3 VE; Gr.17 = 7 VE). Im s-Block: Gruppenummer = Valenzelektronen (Gr.1 = 1 VE; Gr.2 = 2 VE). Die IUPAC-Nummerierung 1-18 ist international verbindlich; aeltere Systeme (IA-VIIIA) finden sich noch in vielen Pruefungsunterlagen.',
          merksatz: 'p-Block Gruppenummer = 10 + Valenzelektronen (Gr.13: 3 VE = Al, B; Gr.17: 7 VE = Halogene)',
        },
        {
          heading: 'Halbmetalle: Grenzelemente mit Halbleitereigenschaften',
          text: 'Halbmetalle (Metalloide: B, Si, Ge, As, Sb, Te, At) liegen entlang der Treppenlinie. Ihre elektrische Leitfaehigkeit liegt zwischen Metallen und Nichtmetallen und steigt mit Temperatur (Halbleiterverhalten). Silicium (Si) ist Basis der Mikroelektronik: Dotierung mit Gruppe-13-Atomen (p-Typ, z.B. Bor: erzeugt Loechriger) oder Gruppe-15-Atomen (n-Typ, z.B. Phosphor: erzeugt ueberschuessige Elektronen) erzeugt pn-Uebergaenge fuer Transistoren. Germanium (Ge): erstes Halbleitermaterial (Bell Labs 1947). As2O3 (Trisenox): Therapeutikum bei akuter Promyelozyten-Leukaemie (APL) - induziert Differenzierung und Apoptose von Leukaemiezellen.',
          merksatz: 'Halbmetalle: B, Si, Ge, As, Sb, Te, At - Halbleiter entlang der Treppenlinie; Si = Grundlage der Mikroelektronik',
        },
        {
          heading: 'Ausnahmen beim Aufbauprinzip: Cr und Cu',
          text: 'Chrom (Z=24): Statt [Ar] 3d4 4s2 => tatsaechlich [Ar] 3d5 4s1, weil halbgefuelltes 3d5 (alle 5 d-Orbitale einfach besetzt, paralleler Spin) durch maximale Austauschenergie (Hund) besonders stabil ist. Kupfer (Z=29): Statt [Ar] 3d9 4s2 => tatsaechlich [Ar] 3d10 4s1, weil vollgefuelltes d10 besonders stabil. Diese Ausnahmen werden im MedAT regelmaessig geprueft. Klinisch: Chrom(III) ist essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung am Rezeptor). Chrom(VI) ist stark karzinogen (oxidiert DNA-Basen => Mutationen => Lungenkrebs bei Industriearbeitern).',
          merksatz: 'Cr: [Ar] 3d5 4s1 (halbgefuellt); Cu: [Ar] 3d10 4s1 (vollgefuellt) - Ausnahmen durch Stabilitaetsgewinn',
        },
      ],

      merksaetze: [
        'PSE: 7 Perioden (horizontal, = Schalenanzahl n), 18 Gruppen (vertikal, = Valenzelektronen)',
        'Mendelejew ordnete nach Atommasse; modernes PSE ordnet nach Kernladungszahl Z (Moseley, 1913)',
        's-Block: Gr.1-2; p-Block: Gr.13-18; d-Block: Gr.3-12; f-Block: Lanthanoide/Actinoide',
        'Metallcharakter: in Periode von links nach rechts ab; in Gruppe von oben nach unten zu',
        'Halbmetalle (Metalloide): B, Si, Ge, As, Sb, Te, At - Halbleiter entlang der Treppenlinie',
        'Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32',
        'Cr: [Ar] 3d5 4s1 und Cu: [Ar] 3d10 4s1 - Ausnahmen vom Aufbauprinzip',
        'p-Block Gruppenummer = 10 + Valenzelektronen (Gr.15 = N, P = 5 VE)',
        'Lanthanoide: f-Block, Periode 6, Ce-Lu; Actinoide: Periode 7, Th-Lr (alle radioaktiv ab U)',
      ],

      klinischerBezug: 'Die Position im PSE bestimmt die biologische Rolle: Gruppe 1 (Na+, K+) sind die dominanten Elektrolyte fuer Membranpotenzial und Erregungsleitung; Gruppe 2 (Ca2+, Mg2+) sind Cofaktoren und Strukturelemente des Knochens; Halbmetalle (Si, Ge) ermoeglichen moderne Medizintechnik (MRT-Elektronik); As (Halbmetall) ist als Trisenox (As2O3) ein zugelassenes Therapeutikum bei akuter Promyelozyten-Leukaemie, wo es das Onkoprotein PML-RARalpha degradiert und Apoptose in Leukaemiezellen induziert.',

      altfrage: {
        question: 'Erklaeren Sie, warum Mendelejews Periodensystem trotz Orientierung an der Atommasse so erfolgreich war, und wo es Schwaechen zeigte. Welches moderne Prinzip loeste das Problem?',
        answer: 'Mendelejews Erfolg beruhte auf der empirischen Beobachtung, dass chemische Eigenschaften sich periodisch mit steigender Atommasse wiederholen. Da Atommasse und Kernladungszahl fuer die meisten Elemente in derselben Reihenfolge wachsen, funktionierte sein System fuer den Grossteil des PSE korrekt. Schwaechen zeigten sich bei Elementpaaren, bei denen die Reihenfolge nach Atommasse der Reihenfolge nach Eigenschaften widersprach: Argon (Atommasse 39,9) muesste nach Atommasse nach Kalium (39,1) stehen - nach Eigenschaften gehoert Ar aber zu den Edelgasen (Gruppe 18) und K zu den Alkalimetallen (Gruppe 1). Ebenso problematisch: Tellur/Jod und Cobalt/Nickel. Mendelejew vermutete Messfehler. Henry Moseley klaerte 1913 durch Roentgenspektroskopie, dass die charakteristischen Roentgenfrequenzen der Elemente von der Protonenzahl Z (Kernladungszahl) abhaengen. Z ist das korrekte Ordnungsprinzip: Ar hat Z=18, K hat Z=19 - die richtige Reihenfolge, ohne Anomalie. Das moderne PSE nach Kernladungszahl ist quantenmechanisch begruendet: Z bestimmt die Elektronenkonfiguration (Aufbauprinzip), diese bestimmt die chemischen Eigenschaften. Damit wurden alle scheinbaren Anomalien aufgeloest, und Mendelejews Luecken erwiesen sich als korrekte Vorhersagen unentdeckter Elemente (Gallium, Scandium, Germanium).',
      },

      selfTest: [
        {
          question: 'Welche Kernladungszahl hat das Element in Periode 3, Gruppe 16?',
          options: [
            'Z = 14 (Silicium)',
            'Z = 15 (Phosphor)',
            'Z = 16 (Schwefel)',
            'Z = 17 (Chlor)',
            'Z = 18 (Argon)',
          ],
          correctIndex: 2,
          explanation: 'Periode 3 bedeutet aeusserste Schale n=3. Gruppe 16 entspricht 6 Valenzelektronen (s2p4). Die Konfiguration ist [Ne] 3s2 3p4 => 10 (Ne) + 2 (3s) + 4 (3p) = Z=16 = Schwefel (S). In Periode 3 gilt: Z = 10 + Gruppenummer fuer Gruppen 13-18 (z.B. Gruppe 16: Z = 10 + 6 = 16). Schwefel ist ein Mengenelement im menschlichen Koerper - Bestandteil der Aminosaeure Cystein und Methionin, Disulfidbindungen in Proteinen (Keratin, Insulin), Coenzym A, Glutathion (wichtigstes zellulares Antioxidans).',
          hints: [
            'Periode 3 beginnt mit Na (Z=11) in Gruppe 1 und endet mit Ar (Z=18) in Gruppe 18',
            'Fuer Gruppen 13-18 in Periode 3: Z = 10 + Gruppenummer',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie viele Perioden hat das Periodensystem?',
          options: [
            '4',
            '6',
            '7',
            '8',
            '18',
          ],
          correctIndex: 2,
          explanation: 'Das PSE hat 7 Perioden (horizontale Zeilen), entsprechend den Hauptquantenzahlen n=1 bis n=7. Die 7. Periode ist vollstaendig (bis Oganesson, Z=118, alle Elemente darin sind radioaktiv). Es gibt 18 Gruppen (vertikale Spalten). Haeufige Verwechslung: 18 sind die Gruppen, 7 die Perioden. Die Periodennummer entspricht der Hauptquantenzahl der Valenzelektronen (Periode 4 => K: 4s1, n=4).',
          hints: [
            'Perioden = waagerechte Zeilen; Gruppen = senkrechte Spalten',
            'Die Periodennummer entspricht der hoechsten Hauptquantenzahl der Valenzelektronen',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Aussage ueber Halbmetalle (Metalloide) ist korrekt?',
          options: [
            'Halbmetalle leiten elektrischen Strom ebenso gut wie Kupfer oder Aluminium',
            'Halbmetalle befinden sich ausschliesslich in der 4. Periode des PSE',
            'Halbmetalle wie Silicium haben temperaturabhaengige Leitfaehigkeit und werden als Halbleiter eingesetzt',
            'Halbmetalle bilden ausschliesslich negative Ionen wie Nichtmetalle',
            'Halbmetalle sind alle radioaktiv und kommen in der Natur nicht vor',
          ],
          correctIndex: 2,
          explanation: 'Halbmetalle (B, Si, Ge, As, Sb, Te, At) haben eine elektrische Leitfaehigkeit zwischen Metallen und Nichtmetallen. Charakteristisch ist die Temperaturabhaengigkeit: Bei steigender Temperatur nimmt die Leitfaehigkeit zu (Halbleiterverhalten, umgekehrt zu Metallen). Silicium ist Basis der Mikroelektronik - Dotierung mit Gruppe-13-Atomen (p-Typ) oder Gruppe-15-Atomen (n-Typ) erzeugt pn-Uebergaenge fuer Transistoren. Halbmetalle erstrecken sich von Periode 2 (Bor) bis Periode 6 (Astat).',
          hints: [
            'Halbmetalle liegen entlang der Treppenlinie zwischen Metallen und Nichtmetallen',
            'Der wichtigste Halbleiter in der Elektronik (Chips) ist ein Halbmetall der 3. Periode',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Element hat die Elektronenkonfiguration [Ne] 3s2 3p1. In welcher Gruppe und Periode steht es?',
          options: [
            'Gruppe 2, Periode 3',
            'Gruppe 13, Periode 3',
            'Gruppe 1, Periode 2',
            'Gruppe 3, Periode 3',
            'Gruppe 13, Periode 2',
          ],
          correctIndex: 1,
          explanation: '[Ne] entspricht Z=10. Dann 3s2 3p1 = 3 weitere Elektronen => Z=13 = Aluminium. Aeusserste Schale n=3 => Periode 3. Valenzelektronen: 3s2 3p1 = 3 VE => Gruppe 13 (p-Block: Gruppenummer = 10 + 3 VE). Aluminium ist das haeufigste Metall in der Erdkruste. Al-Salze werden als Antazida (Al(OH)3: puffert Magensaeure) und Antiperspirantien eingesetzt; bei Niereninsuffizienz kann Al akkumulieren und zur Aluminiumenzephalopathie fuehren.',
          hints: [
            'Periodennummer = Hauptquantenzahl der aeussersten Schale (hier n=3)',
            'Gruppenummer im p-Block = 10 + Valenzelektronen (hier 3)',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welches Element hat die Elektronenkonfiguration [Ar] 3d5 4s1 (abweichend vom Aufbauprinzip)?',
          options: [
            'Eisen (Fe, Z=26)',
            'Mangan (Mn, Z=25)',
            'Chrom (Cr, Z=24)',
            'Vanadium (V, Z=23)',
            'Nickel (Ni, Z=28)',
          ],
          correctIndex: 2,
          explanation: 'Chrom (Cr, Z=24) weicht vom Aufbauprinzip ab. Die erwartete Konfiguration waere [Ar] 3d4 4s2, die tatsaechliche ist [Ar] 3d5 4s1, weil die halbgefuellte d5-Konfiguration (alle 5 d-Orbitale einfach besetzt, paralleler Spin) durch maximale Austauschenergie nach Hund besonders stabil ist. Analoges Beispiel: Cu (Z=29) => [Ar] 3d10 4s1 statt [Ar] 3d9 4s2. Chrom(III) ist essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung). Chrom(VI) ist stark karzinogen (oxidiert DNA-Basen => Mutationen, Lungenkrebs).',
          hints: [
            'Zwei Uebergangsmetalle weichen vom Aufbauprinzip ab: Z=24 (Cr) und Z=29 (Cu)',
            'Halbgefuellte (d5) und vollgefuellte (d10) d-Unterschalen sind energetisch besonders stabil',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Warum wurden bei Mendelejews urspruenglichem PSE Luecken gelassen?',
          options: [
            'Weil er die Elemente alphabetisch ordnete und bestimmte Buchstaben fehlten',
            'Weil Elemente mit unbekannter Atommasse nicht eingeordnet werden konnten',
            'Weil er erkannte, dass bei strenger Periodizitaet noch unentdeckte Elemente existieren muessen, und er deren Eigenschaften voraussagte',
            'Weil radioaktive Elemente damals noch nicht bekannt waren',
            'Weil die Luecken die Lanthanoide und Actinoide repraesentieren',
          ],
          correctIndex: 2,
          explanation: 'Mendelejews brillante Leistung war die Erkenntnis, dass die Periodizitaet wichtiger ist als eine lueckenlose Reihenfolge. Wenn ein Element nicht an die Stelle passte, die seine Eigenschaften erforderten, liess er eine Luecke und sagte Eigenschaften des fehlenden Elements vorher: Eka-Aluminium (=> Gallium, 1875), Eka-Bor (=> Scandium, 1879), Eka-Silicium (=> Germanium, 1886). Alle drei stimmten fast exakt mit seinen Vorhersagen ueberein (Schmelzpunkt, Dichte, Valenz, Oxide) - der entscheidende Beweis fuer die Gueltigkeit seines Systems.',
          hints: [
            'Mendelejew nutzte Luecken als Vorhersage-Werkzeug, nicht als Eingestaendnis von Unwissen',
            'Eka-Aluminium und Eka-Silicium wurden als Gallium und Germanium entdeckt',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'In welchem Block des PSE steht Calcium (Z=20)?',
          options: [
            'p-Block, weil es in Periode 4 steht',
            's-Block, Gruppe 2, weil seine Valenzelektronen im 4s-Orbital sitzen',
            'd-Block, weil es ein Metall ist',
            'f-Block, weil es zur 4. Periode gehoert',
            's-Block, Gruppe 1, weil Calcium ein reaktives Metall ist',
          ],
          correctIndex: 1,
          explanation: 'Calcium (Z=20) hat die Elektronenkonfiguration [Ar] 4s2. Die beiden Valenzelektronen befinden sich im 4s-Orbital => s-Block, Gruppe 2 (Erdalkalimetalle), Periode 4. Calcium ist das haeufigste Metall im menschlichen Koerper (~1 kg, 99% als Hydroxyapatit Ca10(PO4)6(OH)2 in Knochen und Zaehnen). Als Ca2+-Ion (Plasma: 2,2-2,6 mmol/L) ist es unverzichtbar fuer Muskelkontraktion (Troponin-C), Blutgerinnung (Faktor IV), Neurotransmitterfreisetzung und als Second Messenger (Ca2+-Calmodulin-System).',
          hints: [
            'Der Block ergibt sich aus dem Orbital, in das das letzte Elektron aufgenommen wird',
            'Gruppe 2 = Erdalkalimetalle = s-Block (Konfiguration ns2)',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches der folgenden Elemente ist ein Halbmetall (Metalloid)?',
          options: [
            'Phosphor (P)',
            'Aluminium (Al)',
            'Schwefel (S)',
            'Germanium (Ge)',
            'Calcium (Ca)',
          ],
          correctIndex: 3,
          explanation: 'Germanium (Ge, Z=32) ist ein klassisches Halbmetall. Es steht in Periode 4, Gruppe 14, an der Grenzlinie zwischen Metallen und Nichtmetallen. Ge war das erste kommerzielle Halbleitermaterial (Transistor, Bell Labs 1947) und wird heute in Glasfasern und Infrarot-Optik eingesetzt. Phosphor und Schwefel sind Nichtmetalle; Aluminium ist ein typisches Metall; Calcium ist ein Erdalkalimetall (s-Block, Gruppe 2). Die klassischen Halbmetalle: B, Si, Ge, As, Sb, Te (manchmal At hinzugezaehlt).',
          hints: [
            'Die Halbmetalle liegen entlang der Treppenlinie: B, Si, Ge, As, Sb, Te, At',
            'Halbmetalle sind Halbleiter mit temperaturabhaengiger Leitfaehigkeit',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-5-02',
      title: 'Periodische Trends — Eigenschaften im PSE',
      content: `## Effektive Kernladung: die treibende Kraft aller Trends

Alle periodischen Trends lassen sich auf die **effektive Kernladung** (Z_eff) zurückführen. Ein Valenzelektron spürt nicht die volle Kernladung Z, weil innere Elektronen die Kernladung teilweise abschirmen:

**Z_eff = Z − σ** (σ nach Slater: gleiche Schale ≈0,35; nächstinnere ≈0,85; alle weiter innen ≈1,0)

**In einer Periode** (links→rechts): Z steigt, σ bleibt nahezu konstant → Z_eff steigt → Elektronen stärker gebunden → Radius↓, IE↑, EN↑.

**In einer Gruppe** (oben→unten): Z steigt, aber neue vollständige Schalen schirmen effektiv ab (σ≈1,0) → Z_eff bleibt ähnlich, aber räumlicher Abstand der Valenzelektronen wächst mit n² → Radius↑, IE↓, EN↓.

## Atomradius

**Trend in der Periode** (links→rechts): Atomradius nimmt ab. Z_eff steigt → stärkere Coulomb-Anziehung.
Periode 3: Na (186 pm) > Mg (160 pm) > Al (143 pm) > Si (111 pm) > P (107 pm) > S (105 pm) > Cl (99 pm)

**Trend in der Gruppe** (oben→unten): Atomradius nimmt zu. Neue Schalen → Valenzelektronen weiter entfernt.
Gruppe 1: Li (152 pm) < Na (186 pm) < K (227 pm) < Rb (248 pm) < Cs (265 pm)

**Ionenradien**: Kationen kleiner als Neutralatom; Anionen größer.
Na⁺ (102 pm) < Na (186 pm); Cl⁻ (181 pm) > Cl (99 pm).
Isoelektronische Reihe ([Ne]-Konfiguration): O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺ > Al³⁺

## Ionisierungsenergie (IE₁)

**M(g) → M⁺(g) + e⁻; ΔH = IE₁ > 0**

Trends: In der Periode↑ (Z_eff steigt); in der Gruppe↓ (Valenzelektronen weiter vom Kern).

**IE-Ausnahmen Periode 2**:
- IE₁(B) < IE₁(Be): Bors 5. Elektron im energiereicheren 2p-Orbital → leichter zu entfernen trotz höherem Z
- IE₁(O) < IE₁(N): Stickstoff hat halbgefülltes 2p³ (maximale Austauschenergie, stabil nach Hund). Sauerstoffs 4. 2p-Elektron muss ein besetztes Orbital teilen → Pairing Penalty (Coulomb-Abstoßung) → leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol

Analoge Ausnahmen Periode 3: IE(Al) < IE(Mg) und IE(S) < IE(P).

**Successive IE**: Großer Sprung zwischen IE_n und IE_{n+1} wenn letztes Valenzelektron entfernt → n Valenzelektronen → Gruppe n.
Beispiel: IE₁=590, IE₂=1145, IE₃=4912 kJ/mol → Sprung bei IE₂/IE₃ → 2 VE → Gruppe 2 (Calcium).

## Elektronenaffinität (EA)

**M(g) + e⁻ → M⁻(g); ΔH = −EA**

Höchste EA: **Chlor** (349 kJ/mol) > Fluor (328 kJ/mol), weil Fluors kompakte 2p-Orbitale starke Elektron-Elektron-Abstoßung verursachen. Chlors 3p-Orbitale sind räumlich ausgedehnter → bessere Elektronenaufnahme. Muster: EA(O)<EA(S), EA(N)<EA(P). Edelgase, Erdalkalimetalle: negative EA.

## Elektronegativität (EN) nach Pauling

Dimensionslos, normiert auf F=4,0. Wichtige Werte: F(4,0) > O(3,44) > Cl(3,16) > N(3,04) > Br(2,96) > S(2,58) > C(2,55) > H(2,20) > P(2,19) > Si(1,90) > Mg(1,31) > Ca(1,00) > Na(0,93).

Trend: In der Periode↑; in der Gruppe↓. Höchste EN: Fluor (oben rechts im PSE, max. Z_eff bei kleinstem Radius aller Nichtmetalle).

**ΔEN und Bindungscharakter**:
- ΔEN < 0,4: unpolare kovalente Bindung (H₂, Cl₂, C-C)
- 0,4 ≤ ΔEN < 1,7: polare kovalente Bindung (H₂O: ΔEN=1,24; HCl: ΔEN=0,96)
- ΔEN ≥ 1,7: überwiegend ionisch (NaCl: ΔEN=2,23; MgO: ΔEN=2,13)`,

      lernziele: [
        'Das Konzept der effektiven Kernladung (Z_eff) als gemeinsame Ursache aller periodischen Trends erklären',
        'Die Trends von Atomradius, Ionenradius, IE, EA und EN in Periode und Gruppe beschreiben und begründen',
        'Aus EN-Differenzen (ΔEN) den Bindungscharakter ableiten',
        'Successive IE zur Bestimmung der Hauptgruppenzugehörigkeit nutzen',
        'IE-Ausnahmen (B/Be, O/N) mit Pairing Penalty und Orbitalmodell erklären',
      ],

      sections: [
        {
          heading: 'Effektive Kernladung: Ursache aller Trends',
          text: 'Z_eff = Z − σ. In einer Periode steigt Z, σ bleibt nahezu konstant (neue Elektronen der gleichen Schale schirmen kaum ab, σ≈0,35) → Z_eff steigt → Elektronen fester gebunden → Radius sinkt, IE steigt, EN steigt. In einer Gruppe steigt Z, aber vollständige neue Schalen schirmen mit σ≈0,85–1,0 effektiv ab → Z_eff ähnlich; aber räumlicher Abstand der Valenzelektronen wächst mit n² → Radius wächst, IE sinkt, EN sinkt. Konkret: Z_eff(Li)≈1,28; Z_eff(Na)≈2,51; Z_eff(K)≈3,50 — trotz wachsendem Z steigt Z_eff langsam, aber der Schalenabstand wächst viel schneller.',
          merksatz: 'Z_eff = Z − σ: In Periode steigt Z_eff → IE, EN↑, Radius↓. In Gruppe: Z_eff ähnlich, Abstand wächst → IE, EN↓, Radius↑',
        },
        {
          heading: 'IE-Ausnahmen Periode 2: Pairing Penalty und halbgefüllte Orbitale',
          text: 'Zwei klassische Ausnahmen: (1) IE₁(B) < IE₁(Be): Be hat volles 2s² (besonders stabil). Bs 5. Elektron sitzt im energiereicheren 2p → leichter entfernbar trotz höherem Z. (2) IE₁(O) < IE₁(N): N hat halbgefülltes 2p³ — alle drei 2p-Orbitale je einfach besetzt, paralleler Spin, maximale Austauschenergie nach Hund, besonders stabil. O muss das 4. 2p-Elektron in ein besetztes Orbital packen → Pairing Penalty: Coulomb-Abstoßung zwischen antiparallelen Elektronen → dieses Elektron leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol. Analoge Ausnahmen Periode 3: IE(Al)<IE(Mg) und IE(S)<IE(P).',
          merksatz: 'IE-Ausnahmen: IE₁(B)<IE₁(Be) [2p energiereicher als 2s] und IE₁(O)<IE₁(N) [Pairing Penalty im 2p-Orbital]',
        },
        {
          heading: 'EN-Differenz und Bindungscharakter in der Pharmakologie',
          text: 'ΔEN bestimmt Bindungscharakter und pharmakologische Eigenschaften. Polare Bindungen → Hydrophilie → bessere Wasserlöslichkeit. Unpolare Bindungen → Lipophilie → bessere Membranpermeation. C-F-Bindung (ΔEN=1,45): stark polar, sehr stark (~485 kJ/mol), metabolisch stabil — CYP450 kann C-F kaum hydroxylieren. Fluorierte Arzneistoffe haben verlängerte Halbwertszeiten: Fluorochinolone (Ciprofloxacin, hemmt Topoisomerase), 5-Fluoruracil (hemmt Thymidylatsynthase → kein dTTP → Tumorzell-Apoptose), Fluoxetin (SSRI), Isofluran (Narkotikum), Fluticason (Steroid). O-H-Bindung (ΔEN=1,24): polar kovalent → Wasserstoffbrücken → einzigartiges Lösungsmittel Wasser.',
          merksatz: 'C-F-Bindung: ΔEN=1,45, stark polar, sehr stabil (~485 kJ/mol), metabolisch resistent → fluorierte Arzneistoffe haben lange HWZ',
        },
        {
          heading: 'Successive IE: Hauptgruppe aus IE-Daten bestimmen',
          text: 'Successive Ionisierungsenergien (IE₁ < IE₂ < IE₃ < ...) steigen kontinuierlich an. Beim Übergang vom letzten Valenzelektron zum ersten Rumpfelektron: großer Sprung (Faktor 3–10). Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n. Beispiel: IE₁=590, IE₂=1145, IE₃=4912, IE₄=6474 kJ/mol → Sprung zwischen IE₂/IE₃ → 2 VE → Gruppe 2 = Calcium (Z=20). Mg hätte IE₁=738 kJ/mol. Prinzip: Die enorm hohe IE₃ des Mg erklärt, warum Mg ausschließlich als Mg²⁺ vorkommt — IE₃ entspricht Rumpfelektron der stabilen [Ne]-Konfiguration.',
          merksatz: 'Großer IE-Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n im PSE',
        },
      ],

      merksätze: [
        'Atomradius: in Periode↓; in Gruppe↑ — Ursache: Z_eff und Schalenabstand',
        'IE und EN: in Periode↑; in Gruppe↓ — gleiche Ursache: Z_eff',
        'Höchste EN: Fluor (4,0) — "F ist am gierigsten auf Elektronen"',
        'Kationen kleiner als Neutralatom; Anionen größer (Na⁺ < Na; Cl⁻ > Cl)',
        'IE-Ausnahmen Periode 2: IE(B)<IE(Be) und IE(O)<IE(N) — Pairing Penalty',
        'ΔEN < 0,4: unpolar; 0,4–1,7: polar kovalent; >1,7: ionisch',
        'Höchste EA: Chlor (349 kJ/mol), nicht Fluor — 2p-Orbitale von F zu beengt',
        'Successive IE: großer Sprung nach n Schritten → n Valenzelektronen → Gruppe n',
        'C-F-Bindung: stark polar, metabolisch stabil → fluorierte Arzneistoffe haben lange HWZ',
        'O-H-Bindung in Wasser: ΔEN=1,24 (polar kovalent) → Wasserstoffbrücken ermöglicht',
      ],

      klinischerBezug: 'Die EN-Theorie erklärt, warum Fluor so häufig in Arzneistoffen eingesetzt wird: C-F-Bindungen (ΔEN=1,45) sind stark polar aber metabolisch stabil, weil CYP450 C-F-Bindungen (~485 kJ/mol) kaum angreift → verlängerte Halbwertszeit und verbesserte Bioverfügbarkeit. Fluorierte Arzneistoffe: Fluorochinolone (Antibiotika), 5-Fluoruracil (Zytostatikum), Fluticason (Kortikosteroid), Fluoxetin (SSRI). Die O-H-Bindung im Wasser (ΔEN=1,24, polar kovalent) begründet die Wasserstoffbrückenbildung — die physikalische Grundlage des einzigartigen biologischen Lösungsmittels Wasser.',

      altfrage: {
        question: 'Erklären Sie alle vier periodischen Haupttrends anhand der effektiven Kernladung Z_eff, und erläutern Sie die IE-Ausnahmen IE₁(B)<IE₁(Be) und IE₁(O)<IE₁(N).',
        answer: 'Alle Trends lassen sich auf Z_eff = Z − σ zurückführen. In einer Periode: Z steigt um 1, σ bleibt nahezu konstant (Elektronen gleicher Schale schirmen mit σ≈0,35 kaum ab) → Z_eff steigt → (1) Atomradius sinkt (stärkere Coulomb-Anziehung), (2) IE steigt (Elektronen schwerer zu entfernen), (3) EA steigt (weiteres Elektron stärker angezogen), (4) EN steigt (Bindungselektronen stärker angezogen). In einer Gruppe: Z steigt, aber vollständige neue Schalen schirmen mit σ≈1,0 ab → Z_eff bleibt ähnlich, aber räumlicher Abstand der Valenzelektronen wächst mit n² → (1) Radius steigt, (2) IE sinkt, (3) EA sinkt, (4) EN sinkt. IE-Ausnahmen: (1) IE₁(B)<IE₁(Be): Beryllium hat volles 2s² (besonders stabil). Bors 5. Elektron befindet sich im energiereicheren 2p-Orbital, das trotz höherem Z leichter ionisiert wird. (2) IE₁(O)<IE₁(N): N hat halbgefülltes 2p³ — alle drei p-Orbitale einfach besetzt mit parallelem Spin → maximale Austauschenergie (Hund), besonders stabil. O hat 2p⁴ — das 4. Elektron muss in ein bereits besetztes Orbital (Pairing Penalty: Coulomb-Abstoßung antiparalleler Elektronen im selben Orbital) → dieses Elektron leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol trotz Z(O)>Z(N). Analoge Ausnahmen in Periode 3: IE(Al)<IE(Mg) und IE(S)<IE(P).',
      },

      selfTest: [
        {
          question: 'Wie verändert sich der Atomradius innerhalb einer Gruppe von oben nach unten?',
          options: [
            'Er nimmt ab, weil die Kernladungszahl steigt',
            'Er bleibt konstant, weil die Valenzelektronenzahl gleich bleibt',
            'Er nimmt zu, weil neue Elektronenschalen hinzukommen',
            'Er zeigt kein regelmäßiges Muster',
            'Er nimmt zuerst zu, dann ab (Minimum in der 4. Periode)',
          ],
          correctIndex: 2,
          explanation: 'In einer Gruppe kommen von oben nach unten neue vollständige Elektronenschalen hinzu. Die Valenzelektronen befinden sich auf immer höheren Hauptquantenzahlen n, deren Abstand zum Kern mit n² wächst. Obwohl auch Z steigt, wird die steigende Kernladung durch innere Schalen abgeschirmt (Z_eff bleibt ähnlich), aber der räumliche Abstand der Valenzelektronen steigt → Atomradius wächst. Beispiel Gruppe 17: F (64 pm) < Cl (99 pm) < Br (114 pm) < I (133 pm). Klinisch relevant: Größere Ionen (I⁻, Br⁻) passieren enge Ionenkanäle schlechter als kleinere (F⁻, Cl⁻).',
          hints: [
            'In einer Gruppe nimmt die Hauptquantenzahl n der Valenzelektronen von oben nach unten zu',
            'Mehr Schalen = weiter vom Kern entfernte Valenzelektronen = größerer Radius',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Element hat die höchste Elektronegativität?',
          options: [
            'Sauerstoff (O, EN=3,44)',
            'Stickstoff (N, EN=3,04)',
            'Chlor (Cl, EN=3,16)',
            'Fluor (F, EN=4,0)',
            'Wasserstoff (H, EN=2,20)',
          ],
          correctIndex: 3,
          explanation: 'Fluor hat mit EN=4,0 (nach Pauling) die höchste Elektronegativität aller Elemente. Fluor steht in der 2. Periode, Gruppe 17 — maximale Z_eff bei kleinstem Radius aller Nichtmetalle. Keine andere Kombination übertrifft diese Anziehungskraft. Sauerstoff (EN=3,44) ist das zweitelectronegativste Element. Merkhilfe: Das elektronegativste Element steht oben rechts im PSE (Edelgase haben keine EN-Werte). C-F-Bindung durch hohe EN des F ist Grundlage fluorierter Arzneistoffe.',
          hints: [
            'Das elektronegativste Element steht oben rechts im PSE (ohne Edelgase)',
            'Halogene haben sehr hohe EN — welches Halogen steht am weitesten oben?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche der folgenden Reihen zeigt Elemente mit korrekt abnehmender Ionisierungsenergie?',
          options: [
            'Na < Mg < Al (Periode 3, von links nach rechts: zunehmend)',
            'F > Cl > Br > I (Halogene, Gruppe 17, von oben nach unten: abnehmend)',
            'Li < Na < K (Alkalimetalle, Gruppe 1, von oben nach unten: zunehmend)',
            'He > H (nur 2 Elemente)',
            'Ne > F > O (Edelgas höchste IE einer Periode — stimmt, aber keine Gruppe)',
          ],
          correctIndex: 1,
          explanation: 'In einer Gruppe nimmt die IE von oben nach unten ab. F, Cl, Br, I sind Halogene (Gruppe 17) → IE nimmt korrekt ab: F (1681 kJ/mol) > Cl (1251) > Br (1140) > I (1008 kJ/mol). Option A ist falsch wegen IE-Ausnahme: IE(Al)<IE(Mg). Option C zeigt eine zunehmende Reihe (Radien, nicht IE). Die IE in der Gruppe ist: Li (520) > Na (496) > K (419) kJ/mol — abnehmend in der Gruppe.',
          hints: [
            'IE nimmt in einer Gruppe von oben nach unten ab',
            'F, Cl, Br, I sind alle in Gruppe 17 — vergleiche von oben nach unten',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Bindung bildet sich zwischen Na (EN=0,93) und Cl (EN=3,16)?',
          options: [
            'Unpolare kovalente Bindung (ΔEN < 0,4)',
            'Polare kovalente Bindung (ΔEN 0,4–1,7)',
            'Ionenbindung (ΔEN > 1,7)',
            'Metallbindung',
            'Wasserstoffbrückenbindung',
          ],
          correctIndex: 2,
          explanation: 'ΔEN = 3,16 − 0,93 = 2,23 > 1,7 → Ionenbindung. Natrium gibt Valenzelektron vollständig ab: Na→Na⁺+e⁻ (IE₁=496 kJ/mol) und Cl+e⁻→Cl⁻ (EA=349 kJ/mol). Im Kristallgitter von NaCl sind Na⁺ und Cl⁻ durch elektrostatische Coulomb-Kräfte in kubisch-flächenzentriertem Ionengitter gebunden (Gitterenergie=787 kJ/mol). NaCl ist das wichtigste Elektrolyt im extrazellulären Raum: Plasma ~140 mmol/L Na⁺ und ~100 mmol/L Cl⁻ → osmotischer Druck, Blutvolumen, Membranpotenzial.',
          hints: [
            'Berechne ΔEN = EN(Cl) − EN(Na)',
            'Grenzwert für Ionenbindung: ΔEN > 1,7',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist IE₁(O) kleiner als IE₁(N), obwohl Sauerstoff die höhere Kernladungszahl hat?',
          options: [
            'Weil Sauerstoff einen größeren Atomradius als Stickstoff hat',
            'Weil beim Sauerstoff das 4. 2p-Elektron ein bereits besetztes Orbital besetzen muss und durch Elektron-Elektron-Abstoßung leichter zu entfernen ist (Pairing Penalty)',
            'Weil Stickstoff weiter oben in der Gruppe steht und daher eine höhere IE hat',
            'Weil Sauerstoff im p-Block steht und alle p-Block-Elemente niedrigere IE haben',
            'Weil Sauerstoff eine höhere EN als Stickstoff hat, was die IE erniedrigt',
          ],
          correctIndex: 1,
          explanation: 'Stickstoff hat Konfiguration 2p³ — jedes der drei 2p-Orbitale einfach besetzt (Hund: maximale Spinmultiplizität, paralleler Spin → maximale Austauschenergie → besonders stabil). Sauerstoffs 4. 2p-Elektron muss in ein besetztes 2p-Orbital (Pairing Penalty: Coulomb-Abstoßung antiparalleler Elektronen im gleichen Orbital) → leichter zu entfernen trotz höherem Z. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol. Analoge Ausnahme Periode 3: IE(S)<IE(P).',
          hints: [
            'N hat 2p³ (halbgefüllt, maximale Austauschenergie stabil); O hat 2p⁴ (Pairing Penalty)',
            'Zwei Elektronen im selben Orbital stoßen sich ab → das gepaarte Elektron leichter entfernbar',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Ein Element hat IE₁=590, IE₂=1145, IE₃=4912, IE₄=6474 kJ/mol. Welcher Hauptgruppe gehört es an?',
          options: [
            'Gruppe 1 (1 Valenzelektron)',
            'Gruppe 2 (2 Valenzelektronen)',
            'Gruppe 13 (3 Valenzelektronen)',
            'Gruppe 14 (4 Valenzelektronen)',
            'Gruppe 3 (Nebengruppe)',
          ],
          correctIndex: 1,
          explanation: 'Der große Sprung liegt zwischen IE₂ (1145 kJ/mol) und IE₃ (4912 kJ/mol) — Faktor ~4,3. Die ersten zwei Elektronen sind Valenzelektronen, das dritte ist ein Rumpfelektron → 2 Valenzelektronen → Gruppe 2 (Erdalkalimetalle). Mit IE₁≈590 kJ/mol: Calcium (Z=20, Gruppe 2, Periode 4). Mg hätte IE₁=738 kJ/mol. Prinzip allgemein: Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n.',
          hints: [
            'Suche den großen Sprung (Faktor >3) zwischen aufeinanderfolgenden IE-Werten',
            'Der Sprung: letztes VE → erstes Rumpfelektron → n Valenzelektronen → Gruppe n',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Welchen Bindungscharakter hat die O-H-Bindung in Wasser (EN(O)=3,44; EN(H)=2,20)?',
          options: [
            'Ionisch, weil Sauerstoff viel elektronegativer ist als Wasserstoff',
            'Unpolar kovalent, weil beide Elemente Nichtmetalle sind',
            'Polar kovalent, weil ΔEN=1,24 im Bereich 0,4–1,7 liegt',
            'Metallisch, weil Wasser elektrisch leitet',
            'Koordinativ, weil Sauerstoff freie Elektronenpaare besitzt',
          ],
          correctIndex: 2,
          explanation: 'ΔEN = 3,44 − 2,20 = 1,24. Im Bereich 0,4 ≤ ΔEN < 1,7 → polare kovalente Bindung. O zieht Bindungselektronen zu sich → O erhält δ−, H erhält δ+. Diese Polarität ermöglicht Wasserstoffbrücken zwischen Wassermolekülen (~20 kJ/mol). Folgen: hoher Siedepunkt (100°C statt −80°C), hohe Wärmekapazität. H-Brücken sind auch Grundlage der DNA-Basenpaarung (A-T: 2, G-C: 3) und Proteinsekundärstruktur (α-Helix, β-Faltblatt).',
          hints: [
            'Berechne ΔEN = EN(O) − EN(H) = 3,44 − 2,20',
            'Grenzwerte: <0,4 unpolar; 0,4–1,7 polar kovalent; >1,7 ionisch',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum hat Chlor eine höhere Elektronenaffinität als Fluor, obwohl Fluor elektronegativer ist?',
          options: [
            'Weil Chlor in der 3. Periode steht und mehr Elektronen aufnehmen kann',
            'Weil Fluors 2p-Orbitale sehr kompakt sind, sodass ein zusätzliches Elektron starke Abstoßung erfährt, während Chlors 3p-Orbitale räumlich ausgedehnter sind',
            'Weil Chlor eine geringere Kernladung hat und das Elektron weniger abgestoßen wird',
            'Weil EA und EN völlig unabhängige Eigenschaften ohne Zusammenhang sind',
            'Weil Fluor eine zu hohe IE hat, die die Elektronenaufnahme verhindert',
          ],
          correctIndex: 1,
          explanation: 'Obwohl Fluor EN=4,0 hat, ist EA(F)=328 kJ/mol < EA(Cl)=349 kJ/mol. Ursache: Fluors 2p-Orbitale sind sehr kompakt — ein zusätzliches Elektron im kleinen 2p-Orbital erfährt starke Coulomb-Abstoßung durch die schon vorhandenen 2p-Elektronen (F hat 7 → wird 8 im F⁻). Chlors 3p-Orbitale sind räumlich ausgedehnter → bessere Aufnahme → höhere EA. Muster: EA(O)<EA(S), EA(N)<EA(P) — Elemente der 2. Periode haben oft niedrigere EA als schwerere Homologe.',
          hints: [
            'EA (isoliertes Atom) und EN (Atom in Bindung) sind verwandt, aber nicht identisch',
            'Sehr kleine Atome der 2. Periode haben manchmal niedrigere EA durch räumliche Enge der 2p-Orbitale',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-5-03',
      title: 'Wichtige Elementgruppen',
      content: `## Alkalimetalle (Gruppe 1): Die reaktivsten Metalle

**Elemente**: Li (Z=3), Na (Z=11), K (Z=19), Rb (Z=37), Cs (Z=55), Fr (Z=87).

**Eigenschaften**: Weiche, silbrig glänzende Metalle; niedrige Schmelzpunkte (Li: 180°C → Cs: 28,5°C). Geringe Dichte: Li (0,53 g/cm³), Na (0,97 g/cm³), K (0,86 g/cm³) — alle drei schwimmen auf Wasser. 1 Valenzelektron (ns¹), niedrigste IE aller Metalle, bilden immer +1-Ionen. Reaktivität steigt von Li nach Cs:
- Li + H₂O → LiOH + ½H₂ (ruhig zischt)
- Na + H₂O → NaOH + ½H₂ (heftig, gelbe Flamme)
- K + H₂O → KOH + ½H₂ (violette Flamme, sofortige H₂-Entzündung)
- Rb, Cs + H₂O → explosionsartig

**Biologisch-medizinisch**:
- **Na⁺**: Hauptkation des Extrazellularraums (Plasma: ~140 mmol/L). Na⁺/K⁺-ATPase pumpt 3 Na⁺ raus, 2 K⁺ rein pro ATP → Ruhemembranpotenzial (~−70 mV). Hyponatriämie (<135 mmol/L) → Hirnödem, Krampfanfälle; Hypernatriämie → Dehydratation, Bewusstseinsstörungen.
- **K⁺**: Hauptkation des Intrazellularraums (~150 mmol/L intrazellulär vs. ~4,5 mmol/L extrazellulär). Hypokaliämie (<3,5 mmol/L) → Herzrhythmusstörungen (verlängertes QT, Torsades de pointes), Muskelschwäche. Hyperkaliämie (>5,5 mmol/L) → lebensbedrohliche Herzarrhythmie.
- **Li⁺**: Therapeutisch bei bipolaren Störungen (Li₂CO₃, therapeutischer Bereich 0,6–1,2 mmol/L). Hemmt Inositolmonophosphatase und GSK-3β. Enger therapeutischer Index.

## Erdalkalimetalle (Gruppe 2): Strukturbildner und Cofaktoren

**Elemente**: Be (Z=4), Mg (Z=12), Ca (Z=20), Sr (Z=38), Ba (Z=56), Ra (Z=88; radioaktiv).

**Eigenschaften**: Härter als Alkalimetalle; 2 Valenzelektronen (ns²), bilden +2-Ionen. Be ist amphoter; lösliche Ba²⁺-Salze sind hochgiftig.

**Biologisch-medizinisch**:
- **Ca²⁺**: Häufigstes Metall im Körper (~1 kg, 99% als Hydroxyapatit Ca₁₀(PO₄)₆(OH)₂ in Knochen/Zähnen). Plasma: 2,2–2,6 mmol/L. Essentiell für Muskelkontraktion (Troponin-C), Blutgerinnung (Faktor IV), Neurotransmitterfreisetzung, Second Messenger (Ca²⁺-Calmodulin). Reguliert durch PTH (↑), Calcitonin (↓), Calcitriol (↑ intestinale Resorption). Hypokalzämie (<2,0 mmol/L): Tetanie, Chvostek-Zeichen, Trousseau-Zeichen, verlängertes QT. Hyperkalzämie (>2,75 mmol/L): "Stones, Bones, Groans, Psychic Moans" — Nierensteine, Knochenschmerzen, Obstipation, psychische Symptome.
- **Mg²⁺**: Cofaktor von >300 Enzymen; alle ATP-abhängigen Reaktionen benötigen Mg-ATP-Komplex. Hypomagnesämie → Tetanie, Herzrhythmusstörungen, begleitende Hypokaliämie. MgSO₄ i.v.: Therapie der Präeklampsie und Torsades de pointes.
- **BaSO₄**: Ksp ≈ 1,1×10⁻¹⁰ → unlöslich → nicht resorbiert → sicheres Röntgenkontrastmittel für GI-Trakt. Lösliche Ba²⁺-Salze: blockieren K⁺-Kanäle → hochgiftig.
- **²²³Ra-Dichlorid** (Xofigo): Zytostatikum bei Prostatakarzinom-Knochenmetastasen — wie Ca²⁺ in Knochen eingebaut, α-Strahler.

## Halogene (Gruppe 17): Salzbildner mit hoher Reaktivität

**Elemente**: F (Z=9), Cl (Z=17), Br (Z=35), I (Z=53), At (Z=85; radioaktiv).

**Eigenschaften**: 7 Valenzelektronen (s²p⁵), bilden −1-Ionen, starke Oxidationsmittel. Aggregatzustand bei RT: F₂ und Cl₂ sind Gase, Br₂ ist die einzige nicht-metallische Flüssigkeit (braun), I₂ ist ein violett glänzender Feststoff (sublimiert zu violettem Gas). Reaktivität: F₂ > Cl₂ > Br₂ > I₂.

**Medizinisch**:
- **F⁻**: Fluorid → Fluorapatit Ca₁₀(PO₄)₆F₂ (säureresistenter als Hydroxyapatit) → Kariesschutz. Hemmt Enolase in Kariesbakterien (S. mutans). Fluorose bei Überdosis (>3 mg/Tag): Zahnflecken, Knochenschäden.
- **Cl⁻**: Hauptanion extrazellulär (~100 mmol/L). HCl im Magensaft (pH~1,5). Desinfektionsmittel: Cl₂, NaOCl (Hypochlorit), HOCl (eigentliches Wirkprinzip — oxidiert Bakterienzellwandproteine).
- **I**: Essentiell für T3 (Triiodthyronin, 3 I-Atome) und T4 (Thyroxin, 4 I-Atome). Jodaufnahme durch NIS-Symporter → Jodierung von Thyreoglobulin durch TPO → T3/T4. Jodmangel → Hypothyreose, Struma, Kretinismus (irreversible geistige Behinderung, häufigste vermeidbare Ursache weltweit). ¹³¹I: Beta-Emitter, Therapie von Schilddrüsenkarzinomen und Hyperthyreose.
- **Fluorierte Arzneistoffe**: Fluorochinolone (Ciprofloxacin, hemmt Topoisomerase II/IV), 5-Fluoruracil (hemmt Thymidylatsynthase → kein dTTP → Tumorzell-Apoptose), Fluticason, Fluoxetin (SSRI), Isofluran (Narkotikum).

## Edelgase (Gruppe 18): Inertheit als Leitprinzip

**Elemente**: He (Z=2), Ne (Z=10), Ar (Z=18), Kr (Z=36), Xe (Z=54), Rn (Z=86; radioaktiv).

**Eigenschaften**: He: 1s² (Dublett); alle anderen: ns²np⁶ (Oktett) → chemisch inert. Keine normalen chemischen Verbindungen (Ausnahme: XeF₂, XeF₄ unter extremen Bedingungen, 1962 erstmals synthetisiert). He hat den tiefsten Siedepunkt aller Stoffe (−269°C, 4 K).

**Medizinisch**:
- **He**: MRT-Kühlung (supraleitende Magnete bei 4 K). Heliox (He/O₂): niedrigere Viskosität als Luft → bei Atemwegsobstruktion (Asthma, Larynxödem) weniger Atemwegswiderstand. Tauchen: verhindert Stickstoffnarkose.
- **Ar**: Schutzgas beim Schweißen. Argon-Plasma-Koagulation (APC): endoskopische Blutstillung durch ionisiertes Ar-Plasma.
- **Xe**: Als Vollnarkotikum zugelassen (Europa). NMDA-Rezeptor-Antagonist → Narkosewirkung. Kein Metabolismus (vollständig abgeatmet), exzellente kardiovaskuläre Stabilität, schnelle Aufwachphase. Hyperpolarisiertes ¹²⁹Xe: Lungen-MRT (Ventilationsbildgebung ohne ionisierende Strahlung).
- **Rn**: α-Strahler, natürliches Zerfallsprodukt von Ra. Akkumulation in Häusern → zweithäufigste Ursache für Lungenkrebs (nach Rauchen).

## Übergangsmetalle (Gruppen 3–12): Redox-Akteure in der Biologie

Unvollständig gefüllte d-Orbitale → variable Oxidationsstufen, Komplexbildung (Lewis-Säuren), Katalyse, Paramagnetismus.

**Medizinisch essentiell**:
- **Fe**: Fe²⁺/Fe³⁺-Wechsel. Hämoglobin: 4 Fe²⁺ in Häm, je 1 O₂. Cytochrome: Elektronentransport. Eisenmangelanämie: mikrozytär hypochrom (MCV↓, Hb↓, Ferritin↓). Hämochromatose (HFE-Mutation): Fe-Überladung → Leber, Herz, Pankreas.
- **Cu**: Cu⁺/Cu²⁺. Cytochromoxidase (Komplex IV: O₂→H₂O), Coeruloplasmin (Fe-Oxidation), Cu/Zn-SOD. Wilson-Krankheit (ATP7B-Mutation): Cu-Akkumulation → Leberzirrhose, Hirnschäden, Kayser-Fleischer-Ring. Menkes-Krankheit: Cu-Resorptionsstörung → Neurodegeneration.
- **Zn**: Kofaktor in >300 Metalloproteasen und Zinkfinger-Transkriptionsfaktoren. Carboanhydrase, Alkoholdehydrogenase, Matrix-Metalloproteasen. Insulin: Zn-Komplex in β-Zellen. Zinkmangel → Wachstumsstörungen, Wundheilungsstörungen, Immunschwäche.
- **Co**: Zentralatom in Vitamin B12 (Co³⁺ im Corrin-Ring). Methylcobalamin (Methionin-Synthase: Homocystein → Methionin), Adenosylcobalamin (Methylmalonyl-CoA-Mutase). Mangel → megaloblastäre Anämie + funikuläre Myelose.
- **Mn**: Mn-SOD (mitochondriale Superoxiddismutase, SOD2). Arginase (Harnstoffzyklus). Manganismus (Mn-Toxizität) → Parkinson-ähnliches Syndrom.
- **Mo**: Xanthinoxidase (Hypoxanthin → Xanthin → Harnsäure). Gicht-Therapie: Allopurinol hemmt Xanthinoxidase.
- **Pt**: Cisplatin, Carboplatin (Pt(II)-Komplexe) quervernetzen DNA (Guanin-Guanin intrastrand crosslinks) → Apoptose. Wichtige Zytostatika bei Hoden-, Ovarial-, Lungen-, Blasenkarzinomen.`,

      lernziele: [
        'Die wichtigen Elementgruppen (Alkalimetalle, Erdalkalimetalle, Halogene, Edelgase, Übergangsmetalle) mit charakteristischen Eigenschaften beschreiben',
        'Medizinisch relevante Elemente den Gruppen zuordnen und biologische Funktionen erklären (Na, K, Ca, Mg, F, Cl, I, Fe, Cu, Zn, Co)',
        'Ionenladungen der Hauptgruppen aus der Valenzelektronenzahl ableiten',
        'Klinische Syndrome bei Elektrolytstörungen und Spurenelementmangel den betroffenen Elementen zuordnen',
        'Reaktivitätstrends innerhalb Alkalimetallen und Halogenen mit dem Periodizitätsprinzip erklären',
      ],

      sections: [
        {
          heading: 'Biologisch essentielle Elemente: Mengen- und Spurenelemente',
          text: 'Biologisch essentielle Elemente verteilen sich über das gesamte PSE. Hauptelemente (>1%): O (65%), C (18%), H (10%), N (3%) — Grundbausteine aller Biomoleküle. Mengenelemente (0,01–1%): Ca (1,5%, Knochen), P (1,0%, DNA, ATP, Phospholipide), K (0,35%, intrazellulär), S (0,25%, Cystein, Methionin, Disulfidbrücken), Na (0,15%, extrazellulär), Cl (0,15%, HCl, osmotisch), Mg (0,05%, Enzymkofaktor). Spurenelemente (<0,01%): Fe, Zn, Cu, Mn, I, Se, Mo, Co, Cr, F. Merkhilfe Hauptelemente: CHNOPS (Kohlenstoff, Wasserstoff, Stickstoff, Sauerstoff, Phosphor, Schwefel). Jeder Mangel eines essentiellen Spurenelements führt zu spezifischen Krankheitsbildern: Fe → Anämie; I → Struma/Kretinismus; Zn → Wundheilungsstörungen; Co (B12) → perniziöse Anämie; Se → Keshan-Krankheit (Kardiomyopathie).',
          merksatz: 'Haupt-Mengenelemente: CHNOPS — Kohlenstoff, Wasserstoff, Stickstoff, Sauerstoff, Phosphor, Schwefel',
        },
        {
          heading: 'Halogene in der Medizin: Desinfektion, Schilddrüse, Pharmakologie',
          text: 'Halogene sind aufgrund ihrer hohen EN und Oxidationskraft in der Medizin allgegenwärtig. Desinfektion: Cl₂ (Trinkwasserchlorierung, 0,1–0,3 mg/L), NaOCl (Dakin-Lösung, Wunddesinfektion), PVP-Iod (Betaisodona: langsame I₂-Freisetzung für breites Antiseptikum). Kariesprävention: NaF in Zahnpasta (1000–1500 ppm). Jod-Kontrastmittel: ionische (Urographin) und nichtionische (Iohexol, Iomeprol) jodhaltige Verbindungen — hohes Atomgewicht des Jods (Z=53) absorbiert Röntgenstrahlen stark. ¹³¹I (Beta-Emitter, HWZ 8 Tage): selektive Aufnahme in Schilddrüsengewebe → Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Fluorierte Arzneistoffe: Fluorochinolone (hemmen bakterielle Topoisomerase II/IV), 5-Fluoruracil (hemmt Thymidylatsynthase → Tumorzellen ohne dTTP → Apoptose), Fluticason, Fluoxetin.',
          merksatz: 'Jod: T3/T4-Synthese (Schilddrüse), Antiseptikum (PVP-Iod), ¹³¹I-Therapie; Chlor: Desinfektion, Hauptanion extrazellulär; Fluor: Zahnschutz, fluorierte Arzneistoffe',
        },
        {
          heading: 'Übergangsmetalle als Redox-Katalysatoren: Elektronen übertragen ist Leben',
          text: 'Übergangsmetalle sind in der Enzymkatalyse unverzichtbar, weil variable Oxidationsstufen Elektronenübertragung ermöglichen. Fe²⁺/Fe³⁺ in Cytochrom c der Atmungskette: nimmt Elektronen von NADH (Fe³⁺→Fe²⁺), gibt sie an O₂ (Fe²⁺→Fe³⁺). Cu⁺/Cu²⁺ in Cytochromoxidase (Komplex IV): O₂→H₂O (letzter Schritt der Atmungskette). Mn⁴⁺ im Oxygen-Evolving-Complex des Photosystem II: H₂O→O₂+H⁺+e⁻ (Quelle des atmosphärischen O₂). Mo in Nitrogenase: N₂-Fixierung (N₂+8H⁺+8e⁻→2NH₃). Platinkomplexe: Cisplatin (Pt(II)) quervernetzt DNA (Guanin-Guanin-intrastrand crosslinks) → Apoptose — erstes metallhaltiges Zytostatikum (entdeckt durch Zufall 1965, Barnett Rosenberg).',
          merksatz: 'Fe²⁺/Fe³⁺ in Hämoglobin und Cytochromen; Cu⁺/Cu²⁺ in Cytochromoxidase; Zn²⁺ in >300 Metalloenzymen; Co³⁺ in Vitamin B12',
        },
        {
          heading: 'Na⁺/K⁺-Homöostase: Alkalimetalle als Grundlage der Zellphysiologie',
          text: 'Die Na⁺/K⁺-ATPase transportiert aktiv 3 Na⁺ nach außen und 2 K⁺ nach innen pro ATP → elektrochemischer Gradient: intrazellulär [K⁺]≈150, [Na⁺]≈15 mmol/L; extrazellulär [K⁺]≈4,5, [Na⁺]≈140 mmol/L → Ruhemembranpotenzial (~−70 mV). Aktionspotenzial: spannungsgesteuerte Na⁺-Kanäle öffnen (Depolarisation bis +30 mV), dann K⁺-Kanäle (Repolarisation). Pharmakologische Angriffspunkte: Herzglykoside (Digoxin): hemmt Na⁺/K⁺-ATPase → Na⁺ intrazellulär↑ → Na⁺/Ca²⁺-Austauscher reduziert → Ca²⁺↑ → positiv inotrop. Schleifendiuretika (Furosemid): blockiert NKCC2 (Na⁺/K⁺/2Cl⁻-Cotransporter) in Henlescher Schleife → Na⁺, K⁺, Cl⁻, Wasser ausgeschieden. Lokalanästhetika (Lidocain): blockiert spannungsgesteuerte Na⁺-Kanäle → kein Aktionspotenzial → Schmerzunterdrückung.',
          merksatz: 'Na⁺/K⁺-ATPase: 3Na⁺ raus, 2K⁺ rein, 1 ATP → RMP −70 mV; Digoxin hemmt diese Pumpe → positiv inotrop',
        },
      ],

      merksätze: [
        'Alkalimetalle (Gr.1): ns¹, +1-Ion — Na⁺ extrazellulär (~140 mmol/L), K⁺ intrazellulär (~150 mmol/L)',
        'Erdalkalimetalle (Gr.2): ns², +2-Ion — Ca²⁺ Knochen/Signaling, Mg²⁺ Enzymkofaktor',
        'Halogene (Gr.17): ns²np⁵, −1-Ion, starke Oxidationsmittel — I essentiell für Schilddrüse',
        'Edelgase (Gr.18): vollständige Valenzschale, inert — He für MRT-Kühlung, Xe als Narkosemittel',
        'Reaktivität Alkalimetalle: Li < Na < K < Rb < Cs (steigt von oben nach unten)',
        'Reaktivität Halogene: F₂ > Cl₂ > Br₂ > I₂ (sinkt von oben nach unten)',
        'Fe²⁺ in Hämoglobin (O₂-Transport) und Cytochromen (Elektronentransport)',
        'Zn²⁺: >300 Metalloenzyme, Zinkfinger-Proteine, Insulinspeicherung',
        'Co³⁺ in Vitamin B12 — Mangel: perniziöse Anämie + funikuläre Myelose',
        'BaSO₄: unlöslich (Ksp≈10⁻¹⁰) → sicheres GI-Kontrastmittel; lösliche Ba-Salze: hochgiftig',
      ],

      klinischerBezug: 'Calcium (Gruppe 2) hat drei kritische Rollen: strukturelle Funktion als Hydroxyapatit (99% des Körper-Ca), Second-Messenger-Rolle (Ca²⁺-Calmodulin aktiviert u.a. Myosin-Leichtketten-Kinase → glatte Muskelkontraktion, eNOS → NO-Synthese), und Auslöser der Skelettmuskelkontraktion (Ca²⁺ bindet Troponin-C → Aktomyosin-Querbrückenzyklus). Hypokalzämie → Tetanie, Chvostek-Zeichen, Trousseau-Zeichen, verlängertes QT. Hyperkalzämie → "Stones, Bones, Groans, Psychic Moans". Jod (Gruppe 17) ist für T3/T4 essentiell; Jodmangel betrifft weltweit über 2 Milliarden Menschen und ist die häufigste vermeidbare Ursache geistiger Behinderung (Kretinismus).',

      altfrage: {
        question: 'Erklären Sie die medizinische Bedeutung von Jod (Gruppe 17) und Calcium (Gruppe 2) und zeigen Sie auf, welche klinischen Syndrome bei Mangel oder Überschuss auftreten.',
        answer: 'Jod (I, Z=53, Gruppe 17) ist ein essentielles Spurenelement für die Schilddrüsenfunktion. Es wird über den Natrium-Jodid-Symporter (NIS) aktiv in Thyreozyten aufgenommen (gegen einen 20–40-fachen Konzentrationsgradienten, sekundär aktiv über Na⁺-Gradient). Thyreoperoxidase (TPO) oxidiert Jodid und jodiert Tyrosinreste des Thyreoglobulins → Monoiodtyrosin (MIT) und Diiodtyrosin (DIT). Kopplung: MIT+DIT→T3 (Triiodthyronin, 3 I-Atome, biologisch aktiv); DIT+DIT→T4 (Thyroxin, 4 I-Atome, Prohormon). T4 wird peripher durch Deiodinasen zu T3 konvertiert. Jodmangel → Hypothyreose mit kompensatorischer TSH-Erhöhung → Schilddrüsenhyperplasie (Struma). Bei kongenitaler Hypothyreose (Jodmangel pränatal und im ersten Lebensjahr) → Kretinismus: schwere irreversible geistige Behinderung (IQ-Verlust 10–15 Punkte im Durchschnitt), Kleinwuchs, Taubstummheit, spastische Diplegie. Kretinismus ist die häufigste vermeidbare Ursache geistiger Behinderung weltweit — Prävention durch Jodierung von Speisesalz. ¹³¹I (Beta-Emitter, HWZ 8 Tage): selektive Aufnahme in Schilddrüsengewebe → Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Calcium (Ca, Z=20, Gruppe 2) ist das häufigste Metall im Körper (~1 kg). 99% als Hydroxyapatit in Knochen und Zähnen (Strukturfunktion + Ca-Reservoir). Extraossäres Ca: Plasma 2,2–2,6 mmol/L (50% ionisiert Ca²⁺ biologisch aktiv; 40% an Albumin gebunden; 10% komplexiert). PTH (Parathyreoidhormon) erhöht Ca²⁺ durch Knochenresorption (Osteoklasten), renale Rückresorption und Aktivierung von Calcitriol (1,25-(OH)₂-Vitamin-D → steigert intestinale Ca-Absorption). Calcitonin senkt Ca²⁺ (hemmt Osteoklasten). Hypokalzämie (<2,0 mmol/L): erhöhte neuromuskuläre Erregbarkeit → Tetanie (Pfötchenstellung), Chvostek-Zeichen (Fazialisschlag → Gesichtsmuskelzucken), Trousseau-Zeichen (Blutdruckmanschette 3 min → Karpopedalspasmen), Laryngospasmus (lebensbedrohlich!), verlängertes QT-Intervall im EKG. Ursachen: Hypoparathyreoidismus (postoperativ), Vitamin-D-Mangel, Hypomagnesämie. Hyperkalzämie (>2,75 mmol/L): "Stones, Bones, Groans, Psychic Moans" — Nierensteine (Ca-Oxalat, Ca-Phosphat), Osteolyse/Knochenschmerzen, Nausea, Obstipation, Polyurie/Polydipsie (Ca²⁺ hemmt ADH-Wirkung), Bewusstseinstrübung, Depression. Häufigste Ursachen: primärer Hyperparathyreoidismus (Nebenschilddrüsenadenom) und maligne Erkrankungen (osteolytische Metastasen, ektope PTHrP-Sekretion).',
      },

      selfTest: [
        {
          question: 'Welche Ionenladung bilden Erdalkalimetalle typischerweise und warum?',
          options: [
            '+1, weil sie ein Valenzelektron im s-Orbital haben',
            '+2, weil sie zwei Valenzelektronen (ns²) abgeben und dabei die stabile Edelgaskonfiguration erreichen',
            '+3, weil sie drei Elektronen in s- und p-Orbitalen tragen',
            '−2, weil sie zwei Elektronen aufnehmen, um das Oktett zu vervollständigen',
            '+2 oder +3, variabel wie Übergangsmetalle',
          ],
          correctIndex: 1,
          explanation: 'Erdalkalimetalle (Gruppe 2) haben 2 Valenzelektronen in der ns²-Konfiguration. Durch Abgabe beider Elektronen erreichen sie die stabile Edelgaskonfiguration. Mg→Mg²⁺+2e⁻: [Ne]-Konfiguration; Ca→Ca²⁺+2e⁻: [Ar]-Konfiguration. Die dritte Ionisierungsenergie (erstes Rumpfelektron) ist enorm hoch (Mg: IE₃>4000 kJ/mol) → +3-Ionen bilden Erdalkalimetalle nicht. Wichtige +2-Ionen: Ca²⁺ (Knochen, Second Messenger), Mg²⁺ (>300 Enzymreaktionen, ATP-Kofaktor), Ba²⁺ (als unlösliches BaSO₄: Röntgenkontrastmittel).',
          hints: [
            'Erdalkalimetalle haben 2 Valenzelektronen in der Konfiguration ns²',
            'Sie geben beide ab und erreichen die stabile Edelgaskonfiguration (leere Valenzschale)',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Halogen ist für die Schilddrüsenhormone T3 und T4 essentiell?',
          options: [
            'Fluor (F) — wegen seiner hohen Reaktivität und Oxidationskraft',
            'Chlor (Cl) — weil es das häufigste Halogen im menschlichen Körper ist',
            'Brom (Br) — als Bestandteil bromierter Tyrosinderivate',
            'Jod (I) — als Baustein von Thyroxin (T4) und Triiodthyronin (T3)',
            'Astat (At) — als schwerstes natürliches Halogen',
          ],
          correctIndex: 3,
          explanation: 'Jod (I, Z=53) ist das einzige biologisch essentielle Halogen für die Schilddrüsenfunktion. T4 (Thyroxin) enthält 4 Jodatome, T3 (Triiodthyronin) 3 Jodatome — beide an Tyrosinreste des Thyreoglobulins gebunden durch Thyreoperoxidase (TPO). Jodaufnahme: aktiv durch Natrium-Jodid-Symporter (NIS). Täglicher Jodbedarf: 150 µg (Erwachsene), 200 µg (Schwangerschaft). Jodmangel → Hypothyreose, Struma, Kretinismus. ¹³¹Jod (Beta-Emitter): Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Chlor (Cl⁻) ist häufigstes Halogenanion im Körper, hat aber keine Funktion in der Hormonsynthese.',
          hints: [
            'Die Schilddrüsenhormone T4 (Thyroxin) und T3 (Triiodthyronin) — die Zahlen verraten die Anzahl von Jodatomen',
            'Das biologisch essentielle Halogen für die Schilddrüse hat Z=53 und steht in Periode 5',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum sind Edelgase chemisch inert, und welches Edelgas ist in der modernen Anästhesiologie als Narkosemittel zugelassen?',
          options: [
            'Edelgase sind inert, weil sie radioaktiv sind; Helium wird als Narkosemittel verwendet',
            'Edelgase sind inert, weil ihre Valenzschale vollständig besetzt ist (Oktett); Xenon ist als Narkosemittel zugelassen',
            'Edelgase sind inert, weil sie zu schwer für chemische Reaktionen sind; Argon wird als Narkosemittel verwendet',
            'Edelgase sind inert wegen ihrer hohen EN; Krypton ist als Narkosemittel zugelassen',
            'Edelgase sind inert, weil sie keine Elektronen besitzen; Radon wird therapeutisch verwendet',
          ],
          correctIndex: 1,
          explanation: 'Edelgase (Gruppe 18) haben vollständig besetzte Valenzschalen: He: 1s² (Dublett), alle anderen: ns²np⁶ (Oktett). Diese Konfiguration ist energetisch maximal stabil — kein Trieb zur Elektronenabgabe, -aufnahme oder -teilung → chemisch inert. Xenon (Xe, Z=54, Periode 5) ist als Vollnarkotikum zugelassen (Europa). Wirkmechanismus: NMDA-Rezeptor-Antagonismus (wie Ketamin). Vorteile: kein Metabolismus (vollständig abgeatmet), exzellente kardiovaskuläre Stabilität, schnelle An- und Abflutung, analgetische Wirkung. Nachteil: hoher Preis, Closed-Circuit-System zur Rückgewinnung erforderlich.',
          hints: [
            'Edelgasinertheit: vollständig besetzte Valenzschale — kein Bedarf zur Bindungsbildung',
            'Das schwerste stabile, nicht-radioaktive Edelgas (Periode 5) ist als Narkotikum bekannt',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Übergangsmetall ist das Zentralatom im Hämoglobin und ermöglicht den reversiblen O₂-Transport?',
          options: [
            'Kupfer (Cu²⁺) — wegen der Fähigkeit zur Komplexbildung',
            'Zink (Zn²⁺) — weil Zink das häufigste Übergangsmetall im Körper ist',
            'Eisen (Fe²⁺) — in der Häm-Gruppe bindet Fe²⁺ reversibel O₂',
            'Mangan (Mn²⁺) — als Zentralatom der mitochondrialen SOD',
            'Cobalt (Co³⁺) — als Zentralatom in Vitamin B12',
          ],
          correctIndex: 2,
          explanation: 'Eisen (Fe²⁺) ist das Zentralatom der Häm-Gruppe in Hämoglobin (Hb). Jedes Hb-Tetramer (2α+2β) enthält 4 Häm-Gruppen, jede mit Fe²⁺ im Zentrum des Protoporphyrin-IX-Rings. Fe²⁺ bindet reversibel O₂ in der Lunge (hoher pO₂, Oxy-Hb: hellrot) und gibt es im Gewebe ab (niedriger pO₂, Desoxy-Hb: dunkelrot). Fe³⁺ (Methämoglobin) bindet kein O₂. Eisenmangelanämie: mikrozytär (MCV↓), hypochrom (MCH↓), Ferritin↓ — häufigste Mangelkrankheit weltweit. Hämochromatose (HFE-Mutation): Fe-Überladung → Leber, Herz, Pankreas, Gonaden.',
          hints: [
            'Das Hämoglobin ist rot — das Zentralatom bildet mit O₂ einen farbigen Komplex',
            'Fe-Mangel führt zur häufigsten Anämieform weltweit',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Reaktivitätsreihenfolge gilt für Alkalimetalle (Gruppe 1)?',
          options: [
            'Li > Na > K > Rb > Cs (reaktivstes ist Lithium)',
            'Cs < Rb < K < Na < Li (Caesium am wenigsten reaktiv)',
            'Na > K > Li > Rb > Cs (Natrium am reaktivsten)',
            'Li < Na < K < Rb < Cs (Reaktivität steigt von Li nach Cs)',
            'Alle Alkalimetalle sind gleichmäßig reaktiv',
          ],
          correctIndex: 3,
          explanation: 'Reaktivität der Alkalimetalle steigt von Li nach Cs (Li < Na < K < Rb < Cs), weil das Valenzelektron mit zunehmender Schalenzahl leichter abgegeben wird. IE₁-Werte: Li=520, Na=496, K=419, Rb=403, Cs=376 kJ/mol. Reaktion mit Wasser: Li zischt ruhig (rote Flamme); Na gleitet und brennt (gelbe Flamme); K entzündet H₂ sofort (violette Flamme); Rb und Cs explodieren. Caesium ist das reaktivste der stabilen Alkalimetalle. Francium (Fr) ist radioaktiv und existiert nur in Spuren.',
          hints: [
            'Reaktivität der Alkalimetalle steigt in der Gruppe von oben nach unten — gleicher Trend wie sinkende IE',
            'Cs hat die niedrigste IE der stabilen Alkalimetalle → leichteste Elektronenabgabe → reaktivst',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches klinische Syndrom entsteht bei schwerem Jodmangel während der Embryonalentwicklung?',
          options: [
            'Rachitis (Vitamin-D-Mangel mit Knochendeformitäten)',
            'Perniziöse Anämie (Vitamin-B12-Mangel mit megaloblastärer Anämie)',
            'Kretinismus (schwere geistige Behinderung, Kleinwuchs, Taubstummheit durch kongenitale Hypothyreose)',
            'Hämochromatose (Eisenüberladung mit Organschäden)',
            'Wilson-Krankheit (Kupferspeichererkrankung mit Leber- und Hirnschäden)',
          ],
          correctIndex: 2,
          explanation: 'Schwerer Jodmangel während der Embryonalentwicklung und frühen Kindheit führt zum Kretinismus: schwere irreversible geistige Behinderung (IQ-Verlust 10–15 Punkte im Durchschnitt bei moderatem Jodmangel), Kleinwuchs, Taubstummheit, spastische Diplegie, myxödematöse Hypothyreose mit Struma. Ursache: Schilddrüsenhormone T3/T4 sind essentiell für Gehirnentwicklung (Myelinisierung, Synapsenbildung, Neuroproliferation) in der frühen Kindheit und pränatal. Jodmangel ist die häufigste vermeidbare Ursache geistiger Behinderung weltweit. Prävention: Jodierung von Speisesalz (20–40 µg/g), Jodsubstitution in Schwangerschaft (200 µg/Tag). Neugeborenen-TSH-Screening ermöglicht frühzeitige Therapie.',
          hints: [
            'Schilddrüsenhormone T3/T4 enthalten Jod und sind essentiell für Gehirnentwicklung',
            'Das Syndrom bei kongenitaler Hypothyreose durch Jodmangel führt zu irreversibler Hirnschädigung wenn unbehandelt',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Verbindung enthält Cobalt (Co) als Zentralatom und ist für die Hämatopoese essentiell?',
          options: [
            'Hämoglobin (Fe²⁺ als Zentralatom)',
            'Vitamin B12 (Cobalamin, Co³⁺ als Zentralatom im Corrin-Ring)',
            'Vitamin D (keine Metallkomponente)',
            'Coeruloplasmin (Cu²⁺ als Zentralatom)',
            'Glutathionperoxidase (Selenocystein als katalytisches Zentrum)',
          ],
          correctIndex: 1,
          explanation: 'Vitamin B12 (Cobalamin) enthält Co³⁺ als Zentralatom in einem Corrin-Ring-System. Biologisch aktive Formen: Methylcobalamin (Cofaktor der Methionin-Synthase: Homocystein→Methionin + Methylierung von Tetrahydrofolat) und Adenosylcobalamin (Cofaktor der Methylmalonyl-CoA-Mutase: Methylmalonyl-CoA→Succinyl-CoA→Citratzyklus). Cobalaminmangel (durch Mangel an Intrinsic Factor bei perniziöser Anämie, Magenresektion, vegane Ernährung ohne Supplementation) → megaloblastäre Anämie (MCV↑, Riesenerythrozyten, hypersegmentierte Neutrophile) + funikuläre Myelose (Demyelinisierung von Hinter- und Seitensträngen → Ataxie, Spastik, Parästhesien).',
          hints: [
            'Co ist Zentralatom eines Vitamins — der Name "Cobalamin" enthält "Cobalt"',
            'Das Vitamin mit Co-Zentralatom ist essentiell für Hämatopoese und Nervenmyelinisierung',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Barium (Ba, Gruppe 2) wird als Kontrastmittel eingesetzt, obwohl lösliche Ba-Salze giftig sind. Warum ist BaSO₄ sicher?',
          options: [
            'Weil BaSO₄ im Magen zu ungiftigem Ba(OH)₂ umgewandelt wird',
            'Weil BaSO₄ nahezu unlöslich ist (Ksp ≈ 10⁻¹⁰) und nicht resorbiert wird, sondern den GI-Trakt unverdaut passiert',
            'Weil Ba in Gruppe 2 steht und alle Erdalkalimetalle biologisch harmlos sind',
            'Weil BaSO₄ im Körper durch Leberenzyme entgiftet wird',
            'Weil BaSO₄ die Röntgenstrahlen reflektiert statt absorbiert',
          ],
          correctIndex: 1,
          explanation: 'BaSO₄ (Bariumsulfat) hat Ksp ≈ 1,1×10⁻¹⁰ mol²/L² → praktisch unlöslich in Wasser und Körperflüssigkeiten. Da unlöslich, werden keine Ba²⁺-Ionen ins Blut aufgenommen → kein Toxizitätspotenzial. BaSO₄ passiert den GI-Trakt als inertes Pulver (weiße Suspension) und wird im Stuhl ausgeschieden. Röntgenkontrastwirkung: Ba hat hohe Ordnungszahl (Z=56) → starke Röntgenstrahlungsabsorption → hoher Kontrast. Lösliche Ba-Salze (BaCl₂) blockieren K⁺-Kanäle → Hypokaliämie-ähnliches Bild, Herzarrhythmie, Atemlähmung. Antidot: Na₂SO₄ → fällt Ba²⁺ als unlösliches BaSO₄ aus.',
          hints: [
            'Die Sicherheit liegt nicht in der chemischen Natur des Bariums, sondern in der Unlöslichkeit der Verbindung',
            'Unlösliche Salze können nicht durch den GI-Trakt resorbiert werden und sind biologisch inert',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
