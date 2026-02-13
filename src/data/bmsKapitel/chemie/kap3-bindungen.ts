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
      content: `Die Ionenbindung entsteht durch die vollständige Übertragung von Elektronen von einem Metall auf ein Nichtmetall. Dabei gibt das Metallatom seine Valenzelektronen ab und wird zum positiv geladenen Kation, während das Nichtmetallatom diese Elektronen aufnimmt und zum negativ geladenen Anion wird. Die treibende Kraft für diese Elektronenübertragung ist das Bestreben beider Atome, die energetisch günstige Edelgaskonfiguration (Oktettregel) zu erreichen. Die elektrostatische Anziehung zwischen den entgegengesetzt geladenen Ionen bildet die Grundlage der Ionenbindung. Typischerweise entsteht eine Ionenbindung, wenn die Elektronegativitätsdifferenz (ΔEN) zwischen den Bindungspartnern größer als 1,7 ist.

Das klassische Beispiel für eine Ionenverbindung ist Natriumchlorid (NaCl). Natrium (Elektronenkonfiguration [Ne] 3s¹) gibt sein einziges Valenzelektron ab und bildet Na⁺ ([Ne]-Konfiguration). Chlor ([Ne] 3s² 3p⁵) nimmt dieses Elektron auf und bildet Cl⁻ ([Ar]-Konfiguration). Die dabei freiwerdende Energie lässt sich über den Born-Haber-Kreisprozess berechnen, der die Sublimationsenergie, Ionisierungsenergie, Dissoziationsenergie, Elektronenaffinität und Gitterenergie zusammenfasst. Die Gitterenergie ist die Energie, die beim Aufbau eines Ionengitters aus einzelnen gasförmigen Ionen frei wird. Sie ist umso größer, je kleiner die Ionenradien und je höher die Ladungen der Ionen sind (Coulomb-Gesetz: E ∝ q₁·q₂/r).

Ionenverbindungen bilden im festen Zustand regelmäßige Kristallgitter, in denen jedes Ion von mehreren entgegengesetzt geladenen Ionen umgeben ist. Beim NaCl-Gitter ist jedes Na⁺-Ion von sechs Cl⁻-Ionen umgeben und umgekehrt (Koordinationszahl 6). Ionenverbindungen haben charakteristische Eigenschaften: hohe Schmelz- und Siedepunkte (NaCl: Smp. 801 °C), Härte bei gleichzeitiger Sprödigkeit (bei Verschiebung der Gitterschichten stoßen gleichnamige Ladungen aufeinander), elektrische Leitfähigkeit nur in gelöstem oder geschmolzenem Zustand (frei bewegliche Ionen), und gute Löslichkeit in polaren Lösungsmitteln wie Wasser. Im festen Zustand sind die Ionen an ihren Gitterplätzen fixiert und können sich nicht frei bewegen, weshalb feste Ionenverbindungen Nichtleiter (Isolatoren) sind.`,
      merksätze: [
        'Ionenbindung = Elektronenübertragung von Metall zu Nichtmetall (ΔEN > 1,7). Die Gitterenergie steigt mit zunehmender Ionenladung und abnehmendem Ionenradius.',
        'Ionenverbindungen: hohe Schmelzpunkte, spröde, leiten nur in Lösung/Schmelze elektrischen Strom, löslich in polaren Lösungsmitteln.'
      ],
      altfrage: {
        question: 'Warum leiten Ionenverbindungen im festen Zustand keinen elektrischen Strom?',
        answer: 'Im festen Ionenkristall sind die Ionen an ihren Gitterplätzen fixiert und können sich nicht frei bewegen. Erst in Lösung oder in der Schmelze sind die Ionen beweglich und können Ladung transportieren.'
      },
      klinischerBezug: 'Elektrolyte wie NaCl, KCl und CaCl₂ sind für den menschlichen Körper lebenswichtig. Die Infusion von physiologischer Kochsalzlösung (0,9 % NaCl) ist eine der häufigsten medizinischen Maßnahmen zur Volumensubstitution. Störungen des Elektrolythaushalts können zu schwerwiegenden Komplikationen wie Herzrhythmusstörungen, Muskelkrämpfen und neurologischen Symptomen führen.',
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
      content: `Die kovalente Bindung (Atombindung, Elektronenpaarbindung) beruht auf der gemeinsamen Nutzung von Elektronenpaaren zwischen zwei Nichtmetallatomen. Jedes beteiligte Atom stellt in der Regel ein oder mehrere Elektronen zur Verfügung, die als bindendes Elektronenpaar zwischen den Kernen lokalisiert sind. Die Triebkraft ist wiederum das Erreichen der Edelgaskonfiguration (Oktettregel). Die kovalente Bindung tritt bei Elementen mit ähnlicher Elektronegativität auf (ΔEN < 1,7). Im Wasserstoffmolekül (H₂) teilen sich zwei Wasserstoffatome ein Elektronenpaar und erreichen damit die Helium-Konfiguration mit zwei Elektronen. Einfachbindungen bestehen aus einem bindenden Elektronenpaar (σ-Bindung), Doppelbindungen aus zwei Elektronenpaaren (eine σ- und eine π-Bindung), und Dreifachbindungen aus drei Elektronenpaaren (eine σ- und zwei π-Bindungen).

Die Lewis-Schreibweise (Elektronenstrichformel) ist ein wichtiges Werkzeug zur Darstellung kovalenter Bindungen. Dabei werden bindende Elektronenpaare als Striche zwischen den Atomen und freie (nichtbindende) Elektronenpaare als Punktepaare oder Striche an den Atomen dargestellt. Zur Erstellung einer Lewis-Formel zählt man zunächst die Gesamtzahl der Valenzelektronen, ordnet die Atome an (das Atom mit der niedrigsten EN kommt meist in die Mitte), verbindet sie mit Einfachbindungen und verteilt die restlichen Elektronen als freie Elektronenpaare, sodass jedes Atom die Oktettregel erfüllt. Reichen die Elektronen nicht aus, werden Mehrfachbindungen eingeführt. Bei manchen Molekülen ist eine einzige Lewis-Formel nicht ausreichend, um die tatsächliche Elektronenverteilung zu beschreiben; man verwendet dann mesomere Grenzstrukturen (Resonanzstrukturen), die durch einen Doppelpfeil verbunden werden.

Die Polarität einer kovalenten Bindung hängt von der Elektronegativitätsdifferenz der Bindungspartner ab. Bei ΔEN = 0 liegt eine unpolare kovalente Bindung vor (z. B. H-H, Cl-Cl). Bei 0 < ΔEN < 1,7 entsteht eine polare kovalente Bindung, bei der die Elektronendichte zum elektronegativeren Atom verschoben ist. Dies erzeugt partielle Ladungen (δ+ und δ-) und ein Dipolmoment. Beispiele sind die O-H-Bindung in Wasser (ΔEN = 1,4) und die C-O-Bindung. Das Dipolmoment μ eines Moleküls ist das Produkt aus dem Ladungsbetrag und dem Ladungsabstand (μ = q × d). Ob ein Molekül insgesamt ein Dipolmolekül ist, hängt nicht nur von den Bindungspolaritäten ab, sondern auch von der Molekülgeometrie: Bei symmetrischen Molekülen wie CO₂ (linear) heben sich die Bindungsdipole gegenseitig auf, sodass kein Gesamtdipolmoment resultiert, obwohl die einzelnen C=O-Bindungen polar sind.`,
      merksätze: [
        'Kovalente Bindung = gemeinsame Elektronenpaare zwischen Nichtmetallen. Einfachbindung (1 σ), Doppelbindung (1 σ + 1 π), Dreifachbindung (1 σ + 2 π).',
        'Polare Bindung bei 0 < ΔEN < 1,7 (partielle Ladungen δ+/δ-). Ob ein Molekül ein Dipol ist, hängt zusätzlich von der Geometrie ab (symmetrische Moleküle können trotz polarer Bindungen apolar sein).'
      ],
      altfrage: {
        question: 'Warum ist CO₂ trotz polarer C=O-Bindungen ein unpolares Molekül?',
        answer: 'CO₂ ist linear aufgebaut. Die beiden C=O-Bindungsdipole zeigen in entgegengesetzte Richtungen und heben sich gegenseitig auf. Das Gesamtdipolmoment ist daher null.'
      },
      klinischerBezug: 'Die Polarität von Molekülen bestimmt ihre Löslichkeit und damit ihre Verteilung im Körper (Pharmakologie: „Similia similibus solvuntur“ – Ähnliches löst sich in Ähnlichem). Polare Arzneistoffe verteilen sich bevorzugt im wässrigen Kompartiment (Blutplasma), während unpolare Substanzen die Zellmembran leichter durchdringen und sich im Fettgewebe anreichern.',
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
          explanation: 'H₂O ist gewinkelt (104,5°), weshalb sich die polaren O-H-Bindungsdipole nicht aufheben. CO₂ (linear), CH₄ und CCl₄ (teträdrisch) sind symmetrisch, sodass sich die Bindungsdipole kompensieren.'
        }
      ]
    },
    {
      id: 'chem-kap3-uk3',
      title: 'Metallische Bindung',
      content: `Die metallische Bindung erklärt den Zusammenhalt der Atome in Metallen und Legierungen. Im Gegensatz zur Ionen- und kovalenten Bindung werden die Valenzelektronen bei der metallischen Bindung nicht zwischen bestimmten Atomen übertragen oder geteilt, sondern von allen Metallatomen gemeinsam genutzt. Die Metallatome geben ihre Valenzelektronen ab und bilden positiv geladene Atomrümpfe (Metallkationen), die in einem regelmäßigen Gitter angeordnet sind. Die abgegebenen Elektronen bilden ein frei bewegliches Elektronengas, das sich durch das gesamte Metallgitter bewegt und die positiven Atomrümpfe zusammenhält. Dieses Modell wird als Elektronengasmodell (Drude-Modell) bezeichnet und erklärt viele charakteristische Eigenschaften der Metalle.

Die freie Beweglichkeit der Elektronen im Metallgitter erklärt die hohe elektrische Leitfähigkeit der Metalle. Wird eine Spannung angelegt, fließen die delokalisierten Elektronen als elektrischer Strom durch das Metall. Die elektrische Leitfähigkeit nimmt mit steigender Temperatur ab, da die zunehmenden Gitterschwingungen der Metallkationen die Elektronenbewegung behindern. Ebenso erklärt das Elektronengasmodell die hohe Wärmeleitfähigkeit, da die frei beweglichen Elektronen kinetische Energie effizient transportieren können. Der metallische Glanz entsteht dadurch, dass die delokalisierten Elektronen Photonen aller Wellenlängen absorbieren und sofort wieder emittieren, was zu einer Reflexion des Lichts führt.

Eine weitere wichtige Eigenschaft der Metalle ist ihre Verformbarkeit (Duktilität und Malleabilität). Im Gegensatz zu Ionenkristallen, die beim Verschieben von Gitterschichten spröde brechen, können Metallgitter verformt werden, ohne dass die Bindung zerstört wird. Dies liegt daran, dass das delokalisierte Elektronengas die Bindung unabhängig von der genauen Position der Atomrümpfe aufrechterhalten kann. Gitterschichten können gegeneinander gleiten, wobei die metallische Bindung erhalten bleibt. Die Stärke der metallischen Bindung hängt von der Anzahl der Valenzelektronen und der Größe der Atomrümpfe ab. Übergangsmetalle mit vielen Valenzelektronen (z. B. Wolfram mit hoher Schmelztemperatur von 3422 °C) bilden besonders starke metallische Bindungen. Legierungen entstehen durch Einlagerung anderer Metallatome in das Gitter, was die mechanischen Eigenschaften gezielt verändern kann (z. B. Stahl als Legierung von Eisen und Kohlenstoff).`,
      merksätze: [
        'Metallische Bindung: Positive Atomrümpfe im Gitter, umgeben von einem delokalisierten Elektronengas. Die Stärke hängt von der Valenzelektronenanzahl und dem Atomrumpfradius ab.',
        'Metalleigenschaften: hohe elektrische und thermische Leitfähigkeit, metallischer Glanz, Duktilität (Verformbarkeit). Die Leitfähigkeit sinkt bei steigender Temperatur.'
      ],
      altfrage: {
        question: 'Warum sind Metalle im Gegensatz zu Ionenkristallen verformbar (duktil)?',
        answer: 'Im Metallgitter kann das delokalisierte Elektronengas die Bindung auch bei Verschiebung der Gitterschichten aufrechterhalten. Bei Ionenkristallen treffen bei Verschiebung gleichnamige Ladungen aufeinander, was zum Bruch führt.'
      },
      klinischerBezug: 'Metallische Werkstoffe spielen in der Medizin eine große Rolle. Titan und seine Legierungen werden für Gelenkprothesen, Schrauben und Platten in der Orthopädie verwendet, da sie biokompatibel, korrosionsbeständig und mechanisch belastbar sind. Edelstahl wird für chirurgische Instrumente genutzt. Die Kenntnis der metallischen Bindung hilft beim Verständnis der Materialeigenschaften von Implantaten.',
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
      content: `Zwischenmolekulare Kräfte (intermolekulare Wechselwirkungen) wirken zwischen Molekülen und sind deutlich schwächer als kovalente oder ionische Bindungen, bestimmen aber maßgeblich die physikalischen Eigenschaften von Stoffen wie Schmelz- und Siedepunkte, Viskosität und Löslichkeit. Die schwächsten zwischenmolekularen Kräfte sind die Van-der-Waals-Kräfte (London-Dispersionskräfte). Sie entstehen durch temporäre (induzierte) Dipole, die durch zufällige Schwankungen in der Elektronenverteilung eines Atoms oder Moleküls auftreten. Diese temporären Dipole induzieren in benachbarten Molekülen ebenfalls Dipole, was zu einer kurzlebigen elektrostatischen Anziehung führt. Van-der-Waals-Kräfte treten bei allen Molekülen und Atomen auf und nehmen mit der Molekülgröße (Anzahl der Elektronen) und der Oberfläche des Moleküls zu. So siedet n-Pentan (Sdp. 36 °C) deutlich höher als Neopentan (Sdp. 9,5 °C), obwohl beide die gleiche Summenformel C₅H₁₂ haben, da n-Pentan eine größere Kontaktfläche bietet.

Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen auf, die ein permanentes Dipolmoment besitzen. Die partielle positive Ladung (δ+) eines Moleküls richtet sich bevorzugt zur partiellen negativen Ladung (δ-) eines Nachbarmoleküls aus. Diese Kräfte sind stärker als reine Van-der-Waals-Kräfte und erklären, warum polare Moleküle höhere Siedepunkte haben als unpolare Moleküle ähnlicher Größe. Ein Spezialfall der Dipol-Dipol-Wechselwirkung ist die Ion-Dipol-Wechselwirkung, die zwischen einem Ion und einem polaren Molekül auftritt und die Grundlage für die Hydratation von Ionen in wässriger Lösung bildet. Außerdem gibt es die Debye-Kräfte (Keesom-Kräfte), bei denen ein permanenter Dipol in einem unpolaren Nachbarmolekül einen Dipol induziert.

Die stärkste Form der zwischenmolekularen Kräfte ist die Wasserstoffbrückenbindung. Sie tritt auf, wenn ein Wasserstoffatom, das kovalent an ein stark elektronegatives Atom (F, O oder N) gebunden ist, eine Wechselwirkung mit einem freien Elektronenpaar eines anderen elektronegativen Atoms eingeht. Die Wasserstoffbrückenbindung hat eine typische Stärke von 10–40 kJ/mol und ist damit etwa zehnmal stärker als typische Van-der-Waals-Kräfte, aber deutlich schwächer als kovalente Bindungen (200–400 kJ/mol). Wasserstoffbrücken erklären die anomal hohen Schmelz- und Siedepunkte von Wasser (Sdp. 100 °C), Fluorwasserstoff und Ammoniak im Vergleich zu den schwereren Homologen. Sie sind auch für die Dichteanomalie des Wassers verantwortlich: Eis hat eine geringere Dichte als flüssiges Wasser, da die Wasserstoffbrücken im Eis ein offenes, hexagonales Kristallgitter erzwingen, das mehr Volumen einnimmt als die weniger geordnete Flüssigkeit.`,
      merksätze: [
        'Stärke der zwischenmolekularen Kräfte: Van-der-Waals (London) < Dipol-Dipol < Wasserstoffbrücken. Alle sind schwächer als kovalente/ionische Bindungen.',
        'Wasserstoffbrücken: Voraussetzung ist ein H-Atom gebunden an F, O oder N und ein freies Elektronenpaar am Akzeptor. Sie erklären die hohen Siedepunkte von H₂O, HF und NH₃.'
      ],
      altfrage: {
        question: 'Warum hat Wasser einen so ungewöhnlich hohen Siedepunkt im Vergleich zu H₂S?',
        answer: 'Wasser bildet starke Wasserstoffbrückenbindungen (O-H···O), da Sauerstoff sehr elektronegativ ist und freie Elektronenpaare besitzt. H₂S kann keine Wasserstoffbrücken bilden, da Schwefel nicht elektronegativ genug ist. Daher hat H₂S einen Siedepunkt von -60 °C, während Wasser bei 100 °C siedet.'
      },
      klinischerBezug: 'Wasserstoffbrücken sind für die Biologie von zentraler Bedeutung. Sie stabilisieren die Sekundärstruktur von Proteinen (α-Helix und β-Faltblatt) sowie die Doppelhelixstruktur der DNA (Basenpaarung: Adenin-Thymin mit 2, Guanin-Cytosin mit 3 Wasserstoffbrücken). Die Denaturierung von Proteinen bei Fieber beruht auf dem Aufbrechen dieser Wasserstoffbrücken.',
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
      content: `Die räumliche Anordnung der Atome in einem Molekül wird durch das VSEPR-Modell (Valence Shell Electron Pair Repulsion, Elektronenpaarabstoßungsmodell) vorhergesagt. Das Grundprinzip besagt, dass sich die Elektronenpaare (sowohl bindende als auch freie) um ein Zentralatom so anordnen, dass ihre gegenseitige Abstoßung minimiert wird. Dabei werden zunächst die Elektronenpaare des Zentralatoms gezählt: bindende Elektronenpaare (auch Mehrfachbindungen zählen als eine Elektronendomäne) und freie Elektronenpaare. Die Anzahl der Elektronendomänen bestimmt die Elektronengeometrie, während die Anordnung nur der Atome (ohne freie Elektronenpaare) die Molekülgeometrie ergibt. Bei zwei Domänen ist die Anordnung linear (180°), bei drei trigonal-planar (120°), bei vier teträdrisch (109,5°), bei fünf trigonal-bipyramidal und bei sechs oktädrisch.

Freie Elektronenpaare nehmen mehr Raum ein als bindende Paare, da sie nur von einem Kern angezogen werden und sich daher stärker ausbreiten. Dies führt zu Abweichungen von den idealen Bindungswinkeln. Wasser (H₂O) hat vier Elektronendomänen am Sauerstoff (zwei bindende, zwei freie), die eine teträdrische Elektronengeometrie ergeben. Da aber nur zwei Domänen Bindungen zu Wasserstoffatomen sind, ist die Molekülgeometrie gewinkelt mit einem Bindungswinkel von 104,5° statt der idealen 109,5°. Ammoniak (NH₃) hat ebenfalls vier Elektronendomänen (drei bindende, ein freies Paar), was zu einer trigonal-pyramidalen Molekülgeometrie mit einem Winkel von 107° führt. Methan (CH₄) hingegen hat vier bindende Domänen ohne freie Paare und zeigt die ideale teträdrische Geometrie mit 109,5°.

Die Hybridisierung ist ein mathematisches Konzept, das erklärt, wie die Atomorbitale eines Zentralatoms sich zu gleichwertigen Hybridorbitalen mischen, um die beobachtete Molekülgeometrie zu ermöglichen. Bei der sp³-Hybridisierung verschmelzen ein s- und drei p-Orbitale zu vier gleichwertigen sp³-Hybridorbitalen, die teträdrisch ausgerichtet sind (Winkel 109,5°). Beispiel: Methan (CH₄). Bei der sp²-Hybridisierung entstehen aus einem s- und zwei p-Orbitalen drei trigonal-planare sp²-Hybridorbitale (120°), wobei das verbleibende p-Orbital senkrecht zur Ebene steht und für π-Bindungen zur Verfügung steht. Beispiel: Ethen (C₂H₄). Bei der sp-Hybridisierung mischen sich ein s- und ein p-Orbital zu zwei linearen sp-Hybridorbitalen (180°), während zwei p-Orbitale für π-Bindungen verfügbar bleiben. Beispiel: Ethin (C₂H₂). Die Hybridisierung korreliert direkt mit der Anzahl der σ-Bindungen und freien Elektronenpaare am Zentralatom: 4 → sp³, 3 → sp², 2 → sp.`,
      merksätze: [
        'VSEPR: Elektronendomänen ordnen sich so an, dass die Abstoßung minimal ist. 2 Domänen → linear (180°), 3 → trigonal-planar (120°), 4 → teträdrisch (109,5°). Freie Elektronenpaare verkleinern den Bindungswinkel.',
        'Hybridisierung: sp³ = teträdrisch (4 σ-Bindungen/freie Paare), sp² = trigonal-planar (3 σ + 1 freies p für π), sp = linear (2 σ + 2 freie p für π).'
      ],
      altfrage: {
        question: 'Warum ist der Bindungswinkel in Wasser (104,5°) kleiner als der ideale Teträderwinkel (109,5°)?',
        answer: 'Wasser hat am Sauerstoff zwei bindende und zwei freie Elektronenpaare. Die freien Paare beanspruchen mehr Raum als die bindenden Paare und drücken die O-H-Bindungen enger zusammen, wodurch der Winkel von 109,5° auf 104,5° abnimmt.'
      },
      klinischerBezug: 'Die Molekülgeometrie bestimmt die biologische Aktivität von Wirkstoffen. Die Wirkung von Enzyminhibitoren und Rezeptorliganden beruht auf der räumlichen Passgenauigkeit (Schlüssel-Schloss-Prinzip). Schon kleine Änderungen der Bindungswinkel oder der räumlichen Anordnung können darüber entscheiden, ob ein Molekül als Agonist oder Antagonist wirkt. Die teträdrische Geometrie des sp³-hybridisierten Kohlenstoffs ist für die Chiralität organischer Moleküle und damit für die Stereoselektivität von Arzneistoffen verantwortlich.',
      selfTest: [
        {
          question: 'Welche Molekülgeometrie hat Ammoniak (NH₃)?',
          options: [
            'Teträdrisch',
            'Trigonal-planar',
            'Trigonal-pyramidal',
            'Gewinkelt',
            'Linear'
          ],
          correctIndex: 2,
          explanation: 'NH₃ hat 4 Elektronendomänen am Stickstoff (3 bindende + 1 freies Paar). Die Elektronengeometrie ist teträdrisch, aber die Molekülgeometrie (nur Atompositionen) ist trigonal-pyramidal.'
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
