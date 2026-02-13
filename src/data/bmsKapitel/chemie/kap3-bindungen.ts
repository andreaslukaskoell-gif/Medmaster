import type { Kapitel } from '../types';

export const chemKap3: Kapitel = {
  id: 'chem-kap3',
  title: 'Chemische Bindungen',
  subject: 'chemie',
  icon: '🔗',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap3-uk1',
      title: 'Ionenbindung',
      diagram: 'ionic-bond',
      content: `Die **Ionenbindung** entsteht, wenn ein Metall Elektronen an ein Nichtmetall abgibt. Vollständige Übertragung, keine gemeinsame Nutzung.

Das Metall wird zum positiven **Kation** (gibt Elektronen ab), das Nichtmetall zum negativen **Anion** (nimmt Elektronen auf). Beide erreichen die Edelgaskonfiguration (Oktettregel). Die elektrostatische Anziehung zwischen den entgegengesetzt geladenen Ionen ist die Ionenbindung. Faustregel: Ionenbindung bei ΔEN > 1,7.

Beispiel **Natriumchlorid** (NaCl): Natrium ([Ne] 3s¹) gibt 1 Elektron ab → Na⁺ ([Ne]-Konfiguration). Chlor ([Ne] 3s² 3p⁵) nimmt es auf → Cl⁻ ([Ar]-Konfiguration). Die **Gitterenergie** ist die Energie, die beim Aufbau des Kristallgitters frei wird. Je kleiner die Ionen und je höher ihre Ladung, desto größer die Gitterenergie (Coulomb-Gesetz: E ∝ q₁·q₂/r).

Ionenverbindungen bilden regelmäßige **Kristallgitter**. Im NaCl-Gitter ist jedes Na⁺ von 6 Cl⁻ umgeben (und umgekehrt) → Koordinationszahl 6.

Eigenschaften: Hohe Schmelz- und Siedepunkte (NaCl: 801 °C). Spröde (bei Verschiebung stoßen gleichnamige Ladungen aufeinander → Abstoßung → Bruch). Elektrische Leitfähigkeit nur in Lösung oder Schmelze (bewegliche Ionen). Im festen Zustand Isolatoren (Ionen fixiert). Gut löslich in polaren Lösungsmitteln wie Wasser.`,
      merksätze: [
        'Ionenbindung = Elektronenübertragung von Metall zu Nichtmetall (ΔEN > 1,7). Die Gitterenergie steigt mit zunehmender Ionenladung und abnehmendem Ionenradius.',
        'Ionenverbindungen: hohe Schmelzpunkte, spröde, leiten nur in Lösung/Schmelze elektrischen Strom, löslich in polaren Lösungsmitteln.'
      ],
      altfrage: {
        question: 'Warum leiten Ionenverbindungen im festen Zustand keinen elektrischen Strom?',
        answer: 'Im festen Ionenkristall sind die Ionen an ihren Gitterplätzen fixiert und können sich nicht frei bewegen. Erst in Lösung oder in der Schmelze sind die Ionen beweglich und können Ladung transportieren.'
      },
      klinischerBezug: '**Physiologische Kochsalzlösung** (0,9 % NaCl, 154 mmol/L) ist isoton zum Blutplasma und die meistgenutzte Infusionslösung zur Volumensubstitution. **Hyperkaliämie** (K⁺ > 5,5 mmol/L) führt zu Depolarisation der Zellmembran → Herzrhythmusstörungen bis Kammerflimmern. **Hyponatriämie** (Na⁺ < 135 mmol/L) verursacht Hirnödem durch osmotische Wasserzunahme in Neuronen → Krampfanfälle, Koma. **Hyperkalzämie** (Ca²⁺ > 2,6 mmol/L) kann bei Tumoren auftreten → QT-Verkürzung im EKG, Herzrhythmusstörungen.',
      selfTest: [
        {
          question: 'Ab welcher Elektronegativitätsdifferenz spricht man typischerweise von einer Ionenbindung?',
          options: [
            'ΔEN > 0,5',
            'ΔEN > 1,0',
            'ΔEN > 1,7',
            'ΔEN > 2,5',
            'ΔEN > 0,1'
          ],
          correctIndex: 2,
          explanation: 'Ab einer Elektronegativitätsdifferenz von etwa 1,7 wird die Bindung als ionisch eingestuft. Darunter liegt eine polare kovalente Bindung vor.'
        },
        {
          question: 'Welche Koordinationszahl hat Na⁺ im NaCl-Kristallgitter?',
          options: [
            '4',
            '6',
            '8',
            '12',
            '2'
          ],
          correctIndex: 1,
          explanation: 'Im NaCl-Gitter ist jedes Na⁺-Ion oktädrisch von 6 Cl⁻-Ionen umgeben (und umgekehrt). Die Koordinationszahl beträgt daher 6.'
        },
        {
          question: 'Warum sind Ionenkristalle spröde?',
          options: [
            'Weil die Ionen sehr leicht sind',
            'Weil die Elektronenwolken starr sind',
            'Weil bei Verschiebung der Gitterschichten gleichnamig geladene Ionen aufeinandertreffen und sich abstoßen',
            'Weil die Gitterenergie sehr niedrig ist',
            'Weil die Ionen im Kristall keine geordnete Struktur haben'
          ],
          correctIndex: 2,
          explanation: 'Wenn durch mechanische Belastung Gitterschichten gegeneinander verschoben werden, treffen gleichnamig geladene Ionen aufeinander. Die resultierende Abstoßung führt zum Bruch des Kristalls.'
        }
      ]
    },
    {
      id: 'chem-kap3-uk2',
      title: 'Kovalente Bindung',
      diagram: 'covalent-bond',
      content: `Die **kovalente Bindung** (Atombindung, Elektronenpaarbindung) entsteht zwischen Nichtmetallen. Elektronen werden gemeinsam genutzt, nicht übertragen.

Beide Atome stellen Elektronen zur Verfügung. Das **bindende Elektronenpaar** sitzt zwischen den Kernen. Ziel: Edelgaskonfiguration (Oktettregel). Kovalente Bindung tritt bei ähnlicher Elektronegativität auf (ΔEN < 1,7).

Beispiel **Wasserstoff** (H₂): Zwei H-Atome teilen sich 1 Elektronenpaar → beide erreichen die He-Konfiguration (2 Elektronen). **Einfachbindung**: 1 bindendes Paar (σ-Bindung). **Doppelbindung**: 2 bindende Paare (1 σ + 1 π). **Dreifachbindung**: 3 bindende Paare (1 σ + 2 π).

Die **Lewis-Schreibweise** zeigt Elektronen. Bindende Paare als Striche zwischen Atomen, freie Elektronenpaare als Punktepaare oder Striche am Atom. Vorgehen: (1) Valenzelektronen zählen, (2) Atome anordnen (niedrigste EN in die Mitte), (3) Einfachbindungen zeichnen, (4) restliche Elektronen als freie Paare verteilen (Oktettregel), (5) wenn nötig Mehrfachbindungen einführen. Bei manchen Molekülen braucht man mehrere Grenzstrukturen (Mesomerie/Resonanz).

**Polarität**: Bei ΔEN = 0 ist die Bindung unpolar (z. B. H-H, Cl-Cl). Bei 0 < ΔEN < 1,7 ist die Bindung polar → Elektronendichte zum elektronegativeren Atom verschoben → partielle Ladungen δ+ und δ-. Beispiel: O-H-Bindung in Wasser (ΔEN = 1,4).

Das **Dipolmoment** μ ist das Produkt aus Ladung und Abstand (μ = q × d). Ob ein Molekül insgesamt ein Dipol ist, hängt auch von der Geometrie ab. **CO₂** ist linear → die beiden C=O-Dipole heben sich auf → kein Gesamtdipolmoment, obwohl die einzelnen Bindungen polar sind.`,
      merksätze: [
        'Kovalente Bindung = gemeinsame Elektronenpaare zwischen Nichtmetallen. Einfachbindung (1 σ), Doppelbindung (1 σ + 1 π), Dreifachbindung (1 σ + 2 π).',
        'Polare Bindung bei 0 < ΔEN < 1,7 (partielle Ladungen δ+/δ-). Ob ein Molekül ein Dipol ist, hängt zusätzlich von der Geometrie ab (symmetrische Moleküle können trotz polarer Bindungen apolar sein).'
      ],
      altfrage: {
        question: 'Warum ist CO₂ trotz polarer C=O-Bindungen ein unpolares Molekül?',
        answer: 'CO₂ ist linear aufgebaut. Die beiden C=O-Bindungsdipole zeigen in entgegengesetzte Richtungen und heben sich gegenseitig auf. Das Gesamtdipolmoment ist daher null.'
      },
      klinischerBezug: 'Die Polarität bestimmt, wie ein Arzneistoff im Körper verteilt wird (Pharmakologie: "Similia similibus solvuntur"). **Polare Wirkstoffe** (z. B. Penicilline mit O-H- und N-H-Gruppen) verteilen sich im wässrigen Kompartiment (Blutplasma, Interstitium), durchdringen Lipidmembranen schlecht. **Unpolare Substanzen** (z. B. Benzodiazepine) durchdringen die Blut-Hirn-Schranke leicht und reichern sich im Fettgewebe an → längere Halbwertszeit, ZNS-Wirkung.',
      selfTest: [
        {
          question: 'Aus wie vielen Elektronenpaaren besteht eine Dreifachbindung?',
          options: [
            'Einem σ-Elektronenpaar',
            'Drei σ-Elektronenpaaren',
            'Einem σ- und zwei π-Elektronenpaaren',
            'Zwei σ- und einem π-Elektronenpaar',
            'Drei π-Elektronenpaaren ohne σ-Anteil'
          ],
          correctIndex: 2,
          explanation: 'Eine Dreifachbindung besteht aus einer σ-Bindung (Kopf-an-Kopf-Überlappung der Orbitale) und zwei π-Bindungen (seitliche Überlappung), also insgesamt drei bindenden Elektronenpaaren.'
        },
        {
          question: 'Was versteht man unter mesomeren Grenzstrukturen?',
          options: [
            'Verschiedene Isomere eines Moleküls',
            'Verschiedene Lewis-Formeln, die die tatsächliche Elektronenverteilung eines Moleküls zusammen beschreiben',
            'Strukturen von Molekülen bei verschiedenen Temperaturen',
            'Zerfallsprodukte eines instabilen Moleküls',
            'Konformere, die durch Rotation um Einfachbindungen entstehen'
          ],
          correctIndex: 1,
          explanation: 'Mesomere Grenzstrukturen (Resonanzstrukturen) sind verschiedene Lewis-Formeln desselben Moleküls, die jeweils eine mögliche Elektronenverteilung zeigen. Die reale Struktur ist ein Hybrid aller Grenzstrukturen.'
        },
        {
          question: 'Welches Molekül hat ein permanentes Dipolmoment?',
          options: [
            'CO₂',
            'CH₄',
            'H₂O',
            'CCl₄',
            'BF₃'
          ],
          correctIndex: 2,
          explanation: 'H₂O ist gewinkelt (104,5°), weshalb sich die polaren O-H-Bindungsdipole nicht aufheben. CO₂ (linear), CH₄ und CCl₄ (tetraedrisch) sind symmetrisch, sodass sich die Bindungsdipole kompensieren.'
        }
      ]
    },
    {
      id: 'chem-kap3-uk3',
      title: 'Metallische Bindung',
      content: `Die **metallische Bindung** erklärt, warum Metalle leiten und verformbar sind. Anders als bei Ionen- oder kovalenten Bindungen werden die Valenzelektronen von allen Atomen gemeinsam genutzt.

Die Metallatome geben ihre Valenzelektronen ab → positiv geladene **Atomrümpfe** (Metallkationen) im Gitter. Die abgegebenen Elektronen bilden ein frei bewegliches **Elektronengas**, das das Gitter zusammenhält. Dieses Modell heißt Elektronengasmodell (Drude-Modell).

Die freie Beweglichkeit der Elektronen erklärt die hohe **elektrische Leitfähigkeit**. Wird eine Spannung angelegt, fließen die Elektronen als Strom. Die Leitfähigkeit nimmt mit steigender Temperatur ab (Gitterschwingungen behindern die Elektronenbewegung). Auch die **Wärmeleitfähigkeit** ist hoch, weil die Elektronen kinetische Energie transportieren.

Der **metallische Glanz** entsteht, weil die delokalisierten Elektronen Photonen aller Wellenlängen absorbieren und sofort wieder emittieren → Reflexion.

**Verformbarkeit** (Duktilität, Malleabilität): Im Gegensatz zu Ionenkristallen können Metallgitter verformt werden, ohne zu brechen. Das Elektronengas hält die Bindung auch bei verschobenen Schichten aufrecht. Bei Ionenkristallen treffen bei Verschiebung gleichnamige Ladungen aufeinander → Bruch.

Die Stärke der metallischen Bindung hängt von der Anzahl der Valenzelektronen und der Größe der Atomrümpfe ab. Übergangsmetalle mit vielen Valenzelektronen (z. B. Wolfram: Smp. 3422 °C) haben besonders starke Bindungen. Legierungen (z. B. Stahl = Fe + C) entstehen durch Einlagerung anderer Atome ins Gitter.`,
      merksätze: [
        'Metallische Bindung: Positive Atomrümpfe im Gitter, umgeben von einem delokalisierten Elektronengas. Die Stärke hängt von der Valenzelektronenanzahl und dem Atomrumpfradius ab.',
        'Metalleigenschaften: hohe elektrische und thermische Leitfähigkeit, metallischer Glanz, Duktilität (Verformbarkeit). Die Leitfähigkeit sinkt bei steigender Temperatur.'
      ],
      altfrage: {
        question: 'Warum sind Metalle im Gegensatz zu Ionenkristallen verformbar (duktil)?',
        answer: 'Im Metallgitter kann das delokalisierte Elektronengas die Bindung auch bei Verschiebung der Gitterschichten aufrechterhalten. Bei Ionenkristallen treffen bei Verschiebung gleichnamige Ladungen aufeinander, was zum Bruch führt.'
      },
      klinischerBezug: '**Titan** und seine Legierungen (z. B. Ti-6Al-4V) sind der Goldstandard für Gelenkprothesen (Hüft-TEP, Knie-TEP), Schrauben und Platten in der Orthopädie und Traumatologie. Titan ist biokompatibel (keine Immunreaktion), korrosionsbeständig und hat einen Elastizitätsmodul nahe dem von Knochen → weniger Stress-Shielding. **Edelstahl** (Fe-Cr-Ni-Legierung) wird für chirurgische Instrumente genutzt. **Niob-Titan** (Nitinol) ist eine Formgedächtnislegierung für Stents und Gefäßclips.',
      selfTest: [
        {
          question: 'Was beschreibt das Elektronengasmodell?',
          options: [
            'Elektronen werden zwischen zwei Atomen geteilt',
            'Elektronen werden von einem Atom zum anderen übertragen',
            'Valenzelektronen sind delokalisiert und bewegen sich frei durch das gesamte Metallgitter',
            'Elektronen sind fest an einzelne Atome gebunden',
            'Elektronen werden nur zwischen benachbarten Atompaaren geteilt'
          ],
          correctIndex: 2,
          explanation: 'Im Elektronengasmodell geben alle Metallatome ihre Valenzelektronen ab, die ein frei bewegliches Elektronengas bilden. Dieses umgibt die positiv geladenen Atomrümpfe und hält das Gitter zusammen.'
        },
        {
          question: 'Warum nimmt die elektrische Leitfähigkeit von Metallen bei steigender Temperatur ab?',
          options: [
            'Weil Elektronen bei hoher Temperatur den Festkörper verlassen',
            'Weil die Gitterschwingungen der Atomrümpfe zunehmen und die Elektronenbewegung behindern',
            'Weil das Elektronengas bei Hitze fest wird',
            'Weil die Valenzelektronen an die Atomrümpfe gebunden werden',
            'Weil die Metallionen bei Erwärmung ihre Ladung verlieren'
          ],
          correctIndex: 1,
          explanation: 'Bei steigender Temperatur schwingen die Metallkationen stärker um ihre Gitterplätze. Diese Schwingungen behindern die gerichtete Bewegung der Elektronen und erhöhen den elektrischen Widerstand.'
        },
        {
          question: 'Welche Eigenschaft unterscheidet Metalle grundlegend von Ionenkristallen?',
          options: [
            'Metalle haben höhere Schmelzpunkte',
            'Metalle leiten im festen Zustand elektrischen Strom',
            'Metalle sind in Wasser löslich',
            'Metalle bilden keine Kristallgitter',
            'Metalle sind immer diamagnetisch'
          ],
          correctIndex: 1,
          explanation: 'Metalle leiten bereits im festen Zustand elektrischen Strom durch ihr delokalisiertes Elektronengas. Ionenkristalle leiten erst in Lösung oder Schmelze, da die Ionen im Festkörper nicht frei beweglich sind.'
        }
      ]
    },
    {
      id: 'chem-kap3-uk4',
      title: 'Zwischenmolekulare Kräfte',
      content: `Zwischenmolekulare Kräfte (intermolekulare Wechselwirkungen) wirken zwischen Molekülen. Sie sind viel schwächer als kovalente oder ionische Bindungen, bestimmen aber Schmelz-/Siedepunkte, Viskosität und Löslichkeit.

**Van-der-Waals-Kräfte** (London-Dispersionskräfte) sind die schwächsten. Sie entstehen durch temporäre Dipole (zufällige Schwankungen der Elektronenverteilung). Diese Dipole induzieren in Nachbarmolekülen ebenfalls Dipole → kurzlebige Anziehung. Alle Moleküle und Atome haben Van-der-Waals-Kräfte. Sie nehmen mit Molekülgröße (Elektronenzahl) und Oberfläche zu. Beispiel: n-Pentan (gestreckt, Sdp. 36 °C) siedet höher als Neopentan (kompakt, Sdp. 9,5 °C), obwohl beide C₅H₁₂ sind → größere Kontaktfläche.

**Dipol-Dipol-Wechselwirkungen** treten zwischen polaren Molekülen auf (permanente Dipolmomente). Die δ+-Seite richtet sich zur δ--Seite des Nachbarn aus. Stärker als Van-der-Waals-Kräfte. Ein Spezialfall ist die **Ion-Dipol-Wechselwirkung** zwischen einem Ion und einem polaren Molekül (Grundlage der Hydratation von Ionen in Wasser).

**Wasserstoffbrücken** sind die stärksten zwischenmolekularen Kräfte. Voraussetzung: Ein H-Atom ist kovalent an F, O oder N gebunden und wechselwirkt mit einem freien Elektronenpaar eines anderen elektronegativen Atoms. Stärke: 10–40 kJ/mol (ca. 10× stärker als Van-der-Waals, aber viel schwächer als kovalente Bindungen mit 200–400 kJ/mol).

Wasserstoffbrücken erklären die anomal hohen Siedepunkte von H₂O (100 °C), HF und NH₃ im Vergleich zu schwereren Homologen. Sie sind auch für die **Dichteanomalie** von Wasser verantwortlich: Eis hat eine geringere Dichte als flüssiges Wasser, weil die Wasserstoffbrücken im Eis ein offenes, hexagonales Gitter erzwingen.`,
      merksätze: [
        'Stärke der zwischenmolekularen Kräfte: Van-der-Waals (London) < Dipol-Dipol < Wasserstoffbrücken. Alle sind schwächer als kovalente/ionische Bindungen.',
        'Wasserstoffbrücken: Voraussetzung ist ein H-Atom gebunden an F, O oder N und ein freies Elektronenpaar am Akzeptor. Sie erklären die hohen Siedepunkte von H₂O, HF und NH₃.'
      ],
      altfrage: {
        question: 'Warum hat Wasser einen so ungewöhnlich hohen Siedepunkt im Vergleich zu H₂S?',
        answer: 'Wasser bildet starke Wasserstoffbrückenbindungen (O-H···O), da Sauerstoff sehr elektronegativ ist und freie Elektronenpaare besitzt. H₂S kann keine Wasserstoffbrücken bilden, da Schwefel nicht elektronegativ genug ist. Daher hat H₂S einen Siedepunkt von -60 °C, während Wasser bei 100 °C siedet.'
      },
      klinischerBezug: 'Wasserstoffbrücken stabilisieren die **Sekundärstruktur von Proteinen** (α-Helix und β-Faltblatt) und die **DNA-Doppelhelix** (Basenpaarung: Adenin–Thymin mit 2, Guanin–Cytosin mit 3 Wasserstoffbrücken). Bei **Fieber** > 41 °C brechen Wasserstoffbrücken in Proteinen auf → Denaturierung → Funktionsverlust von Enzymen. Die **Löslichkeit von Arzneistoffen** hängt von Wasserstoffbrücken ab: Aspirin (mit O-H-Gruppen) ist in Wasser mäßig löslich, Paracetamol (mit O-H- und N-H-Gruppen) besser.',
      selfTest: [
        {
          question: 'Welche Bedingung muss erfüllt sein, damit eine Wasserstoffbrückenbindung entsteht?',
          options: [
            'Ein H-Atom muss an ein Metallatom gebunden sein',
            'Ein H-Atom muss an F, O oder N gebunden sein und mit einem freien Elektronenpaar eines weiteren elektronegativen Atoms wechselwirken',
            'Zwei Wasserstoffatome müssen direkt aneinander gebunden sein',
            'Ein H-Atom muss an Kohlenstoff gebunden sein',
            'Zwei polare Moleküle müssen in der Gasphase vorliegen'
          ],
          correctIndex: 1,
          explanation: 'Wasserstoffbrücken entstehen, wenn H an ein stark elektronegatives Atom (F, O, N) kovalent gebunden ist und mit einem freien Elektronenpaar eines anderen elektronegativen Atoms wechselwirkt.'
        },
        {
          question: 'Warum siedet n-Pentan höher als das verzweigte Isomer Neopentan?',
          options: [
            'n-Pentan hat eine größere molare Masse',
            'n-Pentan ist polarer',
            'n-Pentan hat eine größere Moleküloberfläche und damit stärkere Van-der-Waals-Kräfte',
            'n-Pentan bildet Wasserstoffbrücken',
            'n-Pentan hat stärkere Dipol-Dipol-Wechselwirkungen'
          ],
          correctIndex: 2,
          explanation: 'Beide Isomere haben dieselbe Summenformel und Masse. Das langgestreckte n-Pentan hat jedoch eine größere Kontaktfläche als das kompakte Neopentan, was zu stärkeren Van-der-Waals-Kräften und einem höheren Siedepunkt führt.'
        },
        {
          question: 'Welche zwischenmolekulare Kraft ist für die Dichteanomalie des Wassers verantwortlich?',
          options: [
            'Van-der-Waals-Kräfte',
            'Dipol-Dipol-Wechselwirkungen',
            'Wasserstoffbrückenbindungen',
            'Metallische Bindung',
            'Kovalente Bindungen zwischen den Wassermolekülen'
          ],
          correctIndex: 2,
          explanation: 'Im Eis bilden die Wasserstoffbrücken ein offenes, hexagonales Kristallgitter, das mehr Volumen einnimmt als die weniger geordnete Flüssigkeit. Daher hat Eis eine geringere Dichte als flüssiges Wasser.'
        }
      ]
    },
    {
      id: 'chem-kap3-uk5',
      title: 'Molekülgeometrie',
      content: `Die räumliche Anordnung der Atome in einem Molekül wird durch das **VSEPR-Modell** (Valence Shell Electron Pair Repulsion, Elektronenpaarabstoßungsmodell) vorhergesagt.

Grundprinzip: Elektronenpaare (bindende und freie) um ein Zentralatom ordnen sich so an, dass die gegenseitige Abstoßung minimal ist. Zuerst zählt man die **Elektronendomänen** am Zentralatom: bindende Paare (auch Mehrfachbindungen zählen als eine Domäne) + freie Elektronenpaare.

Die Anzahl der Elektronendomänen bestimmt die **Elektronengeometrie**. 2 Domänen → linear (180°). 3 Domänen → trigonal-planar (120°). 4 Domänen → tetraedrisch (109,5°). 5 Domänen → trigonal-bipyramidal. 6 Domänen → oktädrisch.

Die **Molekülgeometrie** berücksichtigt nur die Atompositionen (ohne freie Elektronenpaare). Freie Elektronenpaare nehmen mehr Raum ein als bindende Paare (nur von einem Kern angezogen) → sie drücken die Bindungswinkel zusammen.

Beispiel **Wasser** (H₂O): 4 Elektronendomänen am Sauerstoff (2 bindende + 2 freie) → tetraedrische Elektronengeometrie. Aber nur 2 Domänen sind Bindungen → Molekülgeometrie ist gewinkelt mit 104,5° (statt idealer 109,5°).

Beispiel **Ammoniak** (NH₃): 4 Elektronendomänen (3 bindende + 1 freies Paar) → trigonal-pyramidale Molekülgeometrie, Winkel 107°.

Beispiel **Methan** (CH₄): 4 bindende Domänen, keine freien Paare → ideale tetraedrische Geometrie, 109,5°.

**Hybridisierung** erklärt, wie Atomorbitale zu gleichwertigen Hybridorbitalen verschmelzen. **sp³-Hybridisierung**: 1s + 3p → 4 sp³-Hybridorbitale, tetraedrisch (109,5°). Beispiel: CH₄. **sp²-Hybridisierung**: 1s + 2p → 3 sp²-Hybridorbitale, trigonal-planar (120°), 1p bleibt für π-Bindung. Beispiel: Ethen (C₂H₄). **sp-Hybridisierung**: 1s + 1p → 2 sp-Hybridorbitale, linear (180°), 2p bleiben für π-Bindungen. Beispiel: Ethin (C₂H₂).`,
      merksätze: [
        'VSEPR: Elektronendomänen ordnen sich so an, dass die Abstoßung minimal ist. 2 Domänen → linear (180°), 3 → trigonal-planar (120°), 4 → tetraedrisch (109,5°). Freie Elektronenpaare verkleinern den Bindungswinkel.',
        'Hybridisierung: sp³ = tetraedrisch (4 σ-Bindungen/freie Paare), sp² = trigonal-planar (3 σ + 1 freies p für π), sp = linear (2 σ + 2 freie p für π).'
      ],
      altfrage: {
        question: 'Warum ist der Bindungswinkel in Wasser (104,5°) kleiner als der ideale Tetraederwinkel (109,5°)?',
        answer: 'Wasser hat am Sauerstoff zwei bindende und zwei freie Elektronenpaare. Die freien Paare beanspruchen mehr Raum als die bindenden Paare und drücken die O-H-Bindungen enger zusammen, wodurch der Winkel von 109,5° auf 104,5° abnimmt.'
      },
      klinischerBezug: 'Die Molekülgeometrie bestimmt die biologische Aktivität von Wirkstoffen (Schlüssel-Schloss-Prinzip). **Chiralität** (Händigkeit) entsteht durch ein sp³-hybridisiertes C-Atom mit vier verschiedenen Substituenten. **Thalidomid** (Contergan) hat zwei Enantiomere: Das (R)-Enantiomer ist teratogen (Fehlbildungen), das (S)-Enantiomer nicht — aber im Körper racemisieren beide. **Ibuprofen**: Nur das (S)-Enantiomer ist pharmakologisch aktiv (COX-Hemmung). Die räumliche Anordnung von Rezeptor-Ligand-Bindungen entscheidet über Agonismus oder Antagonismus.',
      selfTest: [
        {
          question: 'Welche Molekülgeometrie hat Ammoniak (NH₃)?',
          options: [
            'Tetraedrisch',
            'Trigonal-planar',
            'Trigonal-pyramidal',
            'Gewinkelt',
            'Linear'
          ],
          correctIndex: 2,
          explanation: 'NH₃ hat 4 Elektronendomänen am Stickstoff (3 bindende + 1 freies Paar). Die Elektronengeometrie ist tetraedrisch, aber die Molekülgeometrie (nur Atompositionen) ist trigonal-pyramidal.'
        },
        {
          question: 'Welche Hybridisierung liegt bei einem Kohlenstoffatom mit einer Doppelbindung vor (z. B. in Ethen)?',
          options: [
            'sp',
            'sp²',
            'sp³',
            'sp³d',
            'sp³d²'
          ],
          correctIndex: 1,
          explanation: 'Ein C-Atom in Ethen bildet 3 σ-Bindungen (2× C-H + 1× C-C) und 1 π-Bindung. Das ergibt 3 σ-Domänen → sp²-Hybridisierung mit trigonal-planarer Geometrie (120°).'
        },
        {
          question: 'Wie viele Elektronendomänen hat das Zentralatom in einem linearen Molekül laut VSEPR-Modell?',
          options: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ],
          correctIndex: 1,
          explanation: 'Bei zwei Elektronendomänen am Zentralatom ordnen sich diese linear an (180° Winkel), um die gegenseitige Abstoßung zu minimieren. Beispiel: CO₂ mit zwei Doppelbindungen als jeweils eine Domäne.'
        }
      ]
    }
  ]
};
