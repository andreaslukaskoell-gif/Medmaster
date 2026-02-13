import type { Kapitel } from '../types';

export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Ökologie',
  subject: 'biologie',
  icon: '🌍',
  estimatedTime: '50 Minuten',
  unterkapitel: [
    // ──────────────────────────────────────────────
    // 7.1 Ökologische Grundbegriffe
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-1',
      title: 'Ökologische Grundbegriffe',
      content:
        'Die Ökologie ist die Wissenschaft von den Wechselbeziehungen zwischen Organismen und ihrer Umwelt. Der Begriff wurde 1866 von Ernst Häckel geprägt (griechisch: oikos = Haushalt, logos = Lehre). Die Ökologie untersucht, wie Lebewesen mit ihrer belebten (biotischen) und unbelebten (abiotischen) Umwelt interagieren, und befasst sich mit der Verteilung und Häufigkeit von Organismen. Sie ist eine integrative Wissenschaft, die Erkenntnisse aus Zoologie, Botanik, Mikrobiologie, Physiologie, Genetik und Geowissenschaften zusammenführt. Die Ökologie gliedert sich in verschiedene Organisationsebenen: Autökologie (Einzelorganismus und Umwelt), Populationsökologie (Populationen), Synökologie (Lebensgemeinschaften), Ökosystemökologie und Biosphärenökologie.\n\n' +
        'Die zentralen Grundbegriffe der Ökologie beschreiben verschiedene Organisationsebenen der belebten Natur. Ein Biotop (griechisch: bios = Leben, topos = Ort) ist der Lebensraum einer Lebensgemeinschaft — der unbelebte, physikalisch-chemisch definierte Standort mit seinen spezifischen Umweltbedingungen (z. B. ein Teich, ein Waldstück, eine Wiese). Die Biozönose (Lebensgemeinschaft) ist die Gesamtheit aller Organismen, die ein Biotop besiedeln — Pflanzen (Phytozönose), Tiere (Zoozönose) und Mikroorganismen (Mikrozönose). Ein Ökosystem ist die funktionelle Einheit aus Biotop und Biozönose — also der Lebensraum zusammen mit allen seinen Bewohnern und ihren Wechselbeziehungen, einschließlich der Stoff- und Energieflüsse. Die Biosphäre ist die Gesamtheit aller Ökosysteme der Erde — der belebte Teil unseres Planeten, der sich von der Tiefsee bis in die obere Atmosphäre erstreckt.\n\n' +
        'Die ökologische Nische ist ein abstraktes Konzept, das die Gesamtheit aller Umweltfaktoren und Ressourcen beschreibt, die eine Art zum Überleben und zur Fortpflanzung benötigt. Sie ist kein Ort, sondern eine „Berufsbeschreibung“ der Art in ihrem Ökosystem (nach Charles Elton und G. Evelyn Hutchinson). Man unterscheidet die Fundamentalnische (das theoretisch mögliche Spektrum aller Lebensbedingungen, unter denen eine Art existieren könnte) von der Realnische (der tatsächlich realisierte Anteil, der durch Konkurrenz mit anderen Arten und andere biotische Faktoren eingeschränkt ist). Das Konkurrenzausschlussprinzip (Gause, 1934) besagt, dass zwei Arten nicht dauerhaft dieselbe ökologische Nische besetzen können — eine Art wird die andere verdrängen. Köxistenz ist nur möglich, wenn die Nischen sich zumindest teilweise unterscheiden (Nischendifferenzierung).',
      merksätze: [
        'Ökosystem = Biotop (Lebensraum) + Biozönose (Lebensgemeinschaft). Die Biosphäre ist die Gesamtheit aller Ökosysteme der Erde.',
        'Ökologische Nische = „Berufsbeschreibung“ einer Art, KEIN Ort. Fundamentalnische > Realnische (durch Konkurrenz eingeschränkt). Konkurrenzausschlussprinzip: Zwei Arten können nicht dieselbe Nische besetzen.',
      ],
      altfrage: {
        question: 'Was versteht man unter der ökologischen Nische einer Art?',
        answer:
          'Die ökologische Nische ist kein Ort, sondern beschreibt die Gesamtheit aller abiotischen und biotischen Umweltfaktoren, die eine Art zum Überleben braucht — ihre „Berufsbeschreibung“ im Ökosystem. Die Fundamentalnische wird durch Konkurrenz zur kleineren Realnische eingeschränkt.',
      },
      klinischerBezug:
        'Ökologische Konzepte finden Anwendung in der Epidemiologie: Die Verbreitung von Infektionskrankheiten hängt von ökologischen Faktoren ab. Beispielsweise ist die Verbreitung von Malaria an das Vorkommen der Anopheles-Mücke gebunden, das wiederum von Temperatur und Feuchtigkeit abhängt. Der Klimawandel verändert die ökologischen Nischen von Vektoren und damit das Verbreitungsgebiet tropischer Krankheiten.',
      selfTest: [
        {
          question: 'Was ist ein Ökosystem?',
          options: [
            'Nur die Gesamtheit aller Lebewesen eines Gebiets',
            'Nur der unbelebte Lebensraum mit seinen Umweltfaktoren',
            'Die funktionelle Einheit aus Biotop und Biozönose',
            'Ein anderes Wort für Biosphäre',
            'Die Gesamtheit aller Nahrungsketten in einem Gebiet',
          ],
          correctIndex: 2,
          explanation:
            'Ein Ökosystem ist die funktionelle Einheit aus Biotop (Lebensraum) und Biozönose (Lebensgemeinschaft), einschließlich aller Stoff- und Energieflüsse.',
        },
        {
          question: 'Was besagt das Konkurrenzausschlussprinzip?',
          options: [
            'Zwei Arten können problemlos dieselbe Nische besetzen',
            'Zwei Arten können nicht dauerhaft dieselbe ökologische Nische besetzen',
            'Konkurrenz führt immer zum Aussterben beider Arten',
            'Nur die größere Art überlebt bei Konkurrenz',
            'Konkurrenz tritt nur zwischen verschiedenen Arten auf, nie innerhalb einer Art',
          ],
          correctIndex: 1,
          explanation:
            'Das Konkurrenzausschlussprinzip (Gause) besagt, dass zwei Arten nicht dauerhaft dieselbe ökologische Nische besetzen können — eine wird die andere verdrängen. Köxistenz erfordert Nischendifferenzierung.',
        },
        {
          question: 'Was unterscheidet Fundamental- von Realnische?',
          options: [
            'Die Fundamentalnische ist kleiner als die Realnische',
            'Die Realnische beschreibt das theoretische Maximum',
            'Die Fundamentalnische wird durch Konkurrenz zur Realnische eingeschränkt',
            'Beide Begriffe sind synonym',
            'Die Realnische wird ausschließlich durch abiotische Faktoren bestimmt',
          ],
          correctIndex: 2,
          explanation:
            'Die Fundamentalnische ist das theoretisch mögliche Spektrum aller Lebensbedingungen einer Art. Durch interspezifische Konkurrenz wird sie zur kleineren Realnische eingeschränkt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.2 Abiotische Faktoren
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-2',
      title: 'Abiotische Faktoren',
      content:
        'Abiotische Umweltfaktoren sind die unbelebten physikalisch-chemischen Bedingungen eines Lebensraums, die auf Organismen einwirken. Sie umfassen Temperatur, Licht, Wasser, Boden (edaphische Faktoren), Salzgehalt, pH-Wert, Sauerstoffgehalt und viele weitere Parameter. Abiotische Faktoren bestimmen, welche Arten an einem bestimmten Standort vorkommen können, und beeinflussen deren Physiologie, Verhalten und Verbreitung. Die Reaktion eines Organismus auf einen abiotischen Faktor wird durch die Toleranzkurve (ökologische Potenz) beschrieben, die zeigt, in welchem Bereich eines Umweltfaktors eine Art existieren und sich fortpflanzen kann.\n\n' +
        'Die Toleranzkurve stellt den Zusammenhang zwischen der Intensität eines Umweltfaktors und der Leistungsfähigkeit (Wachstum, Fortpflanzung, Überleben) eines Organismus dar. Sie hat typischerweise eine glockenförmige Gestalt mit einem Optimum (höchste Leistung), einem Minimum und einem Maximum (untere bzw. obere Toleranzgrenze). Der Bereich zwischen Minimum und Maximum ist der Toleranzbereich (ökologische Valenz). Euryöke Arten haben einen breiten Toleranzbereich und sind Generalisten — sie können unter sehr unterschiedlichen Bedingungen leben (z. B. Ratten, Schaben). Stenöke Arten haben einen engen Toleranzbereich und sind Spezialisten — sie sind auf bestimmte Bedingungen angewiesen (z. B. Forellen, die kühles, sauerstoffreiches Wasser benötigen). Stenöke Arten eignen sich gut als Bioindikatoren für bestimmte Umweltbedingungen. Die Bezeichnungen werden mit Präfixen kombiniert: eurytherm/stenotherm (Temperatur), euryhalin/stenohalin (Salzgehalt), euryök/stenök (allgemein).\n\n' +
        'Das Gesetz des Minimums (Liebig, 1840) besagt, dass das Wachstum eines Organismus von dem Faktor begrenzt wird, der im Verhältnis zum Bedarf am stärksten limitiert ist — dem Minimumfaktor. Selbst wenn alle anderen Faktoren optimal vorhanden sind, bestimmt der knappste Faktor die Wachstumsgrenze (Tonnenprinzip: Das kürzeste Daubenholz bestimmt den Füllstand eines Fasses). Die Temperatur ist einer der wichtigsten abiotischen Faktoren, da sie alle biochemischen Prozesse beeinflusst. Die RGT-Regel (Reaktionsgeschwindigkeit-Temperatur-Regel, van\u0027t Hoff) besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit enzymatischer Prozesse ungefähr verdoppelt bis verdreifacht (Q₁₀-Wert ≈ 2–3). Bei Überschreitung des Temperaturoptimums kommt es zur Denaturierung von Enzymen und zum Zusammenbruch des Stoffwechsels. Licht ist essenziell für die Photosynthese und beeinflusst als Zeitgeber biologische Rhythmen (Photoperiodismus: Tageslänge steuert Blühzeitpunkt, Winterruhe, Zugverhalten). Wasser ist Lösungsmittel, Reaktionspartner und Lebensraum — die Wasserverfügbarkeit ist in vielen Ökosystemen der limitierende Faktor.',
      merksätze: [
        'Toleranzkurve: Minimum → Optimum → Maximum. Euryök = breiter Toleranzbereich (Generalist). Stenök = enger Toleranzbereich (Spezialist, guter Bioindikator).',
        'Liebigsches Minimumgesetz: Der knappste Faktor begrenzt das Wachstum. RGT-Regel: +10 °C ≈ Verdopplung der Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3).',
      ],
      altfrage: {
        question: 'Was besagt das Gesetz des Minimums nach Liebig?',
        answer:
          'Das Gesetz des Minimums besagt, dass das Wachstum eines Organismus von dem Faktor begrenzt wird, der relativ zum Bedarf am stärksten limitiert ist (Minimumfaktor). Selbst bei optimaler Versorgung mit allen anderen Faktoren bestimmt der knappste Faktor die Wachstumsgrenze.',
      },
      klinischerBezug:
        'Die Temperaturtoleranz von Mikroorganismen ist klinisch relevant: Pathogene Bakterien haben typischerweise ein Temperaturoptimum bei ca. 37 °C (Körpertemperatur des Menschen). Fieber ist eine unspezifische Immunreaktion, die die Körpertemperatur über das Optimum vieler Erreger hinaus erhöht und deren Wachstum hemmt. Sterilisation und Pasteurisierung nutzen die Hitzeempfindlichkeit von Mikroorganismen.',
      selfTest: [
        {
          question: 'Was kennzeichnet eine euryöke Art?',
          options: [
            'Einen sehr engen Toleranzbereich',
            'Einen breiten Toleranzbereich für einen Umweltfaktor',
            'Eine besonders hohe Spezialisierung',
            'Ein Vorkommen ausschließlich in tropischen Gebieten',
            'Eine besonders hohe Empfindlichkeit gegenüber pH-Wert-Änderungen',
          ],
          correctIndex: 1,
          explanation:
            'Euryöke Arten haben einen breiten Toleranzbereich für einen oder mehrere Umweltfaktoren. Sie sind Generalisten und können unter verschiedenen Bedingungen existieren.',
        },
        {
          question: 'Was besagt die RGT-Regel?',
          options: [
            'Die Artenvielfalt verdoppelt sich alle 10 Jahre',
            'Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit',
            'Jede Population verdoppelt sich in 10 Generationen',
            'Die Mutationsrate steigt um 10 % pro Generation',
            'Pro 10 °C Temperaturerhöhung halbiert sich die Enzymaktivität',
          ],
          correctIndex: 1,
          explanation:
            'Die RGT-Regel (van\u0027t Hoff) besagt, dass eine Temperaturerhöhung um 10 °C die Geschwindigkeit enzymatischer Reaktionen ungefähr verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3).',
        },
        {
          question: 'Welche Aussage zum Minimumgesetz ist korrekt?',
          options: [
            'Der häufigste Faktor bestimmt das Wachstum',
            'Alle Faktoren müssen gleichzeitig im Minimum sein',
            'Der knappste Faktor relativ zum Bedarf begrenzt das Wachstum',
            'Das Gesetz gilt nur für Pflanzen, nicht für Tiere',
            'Alle Faktoren wirken gemeinsam additiv auf das Wachstum',
          ],
          correctIndex: 2,
          explanation:
            'Das Minimumgesetz nach Liebig besagt, dass der Faktor, der relativ zum Bedarf am stärksten limitiert ist (Minimumfaktor), das Wachstum begrenzt — auch wenn alle anderen Faktoren im Überfluss vorhanden sind.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.3 Biotische Faktoren
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-3',
      title: 'Biotische Faktoren',
      content:
        'Biotische Umweltfaktoren sind die Wechselbeziehungen zwischen Lebewesen innerhalb einer Lebensgemeinschaft (Biozönose). Sie umfassen alle Interaktionen zwischen Organismen derselben oder verschiedener Arten und sind wesentliche Triebkräfte der Evolution und der Strukturierung von Ökosystemen. Die wichtigsten biotischen Faktoren sind Konkurrenz, Räuber-Beute-Beziehungen, Symbiose, Parasitismus und Kommensalismus. Diese Interaktionen bestimmen maßgeblich die Populationsdynamik, die Artenvielfalt und die Nischenstruktur in Ökosystemen. Man unterscheidet intraspezifische Interaktionen (zwischen Individün derselben Art) und interspezifische Interaktionen (zwischen verschiedenen Arten).\n\n' +
        'Konkurrenz (Wettbewerb) entsteht, wenn zwei oder mehr Organismen um dieselben begrenzten Ressourcen (Nahrung, Wasser, Lebensraum, Fortpflanzungspartner) konkurrieren. Intraspezifische Konkurrenz (innerhalb einer Art) ist oft besonders intensiv, da Individün derselben Art dieselben Ressourcen benötigen. Sie reguliert die Populationsdichte und ist dichteabhängig — je höher die Dichte, desto stärker die Konkurrenz. Interspezifische Konkurrenz (zwischen verschiedenen Arten) tritt auf, wenn Arten überlappende ökologische Nischen haben. Sie kann zur kompetitiven Verdrängung einer Art führen (Konkurrenzausschluss) oder zur Nischendifferenzierung (character displacement), bei der die Arten ihre Nischen so aufteilen, dass sie köxistieren können. Das Lotka-Volterra-Konkurrenzmodell beschreibt die Dynamik zweier konkurrierender Populationen mathematisch und sagt voraus, unter welchen Bedingungen Köxistenz oder Ausschluss eintritt.\n\n' +
        'Räuber-Beute-Beziehungen (Prädation) sind fundamentale ökologische Interaktionen, bei denen eine Art (Räuber, Prädator) eine andere Art (Beute) als Nahrung nutzt. Die Lotka-Volterra-Regeln beschreiben die typische Dynamik von Räuber-Beute-Systemen in einem vereinfachten mathematischen Modell: (1) Periodische Schwankungen: Die Populationsgrößen von Räuber und Beute schwanken periodisch um einen Mittelwert. (2) Phasenverschiebung: Die Maxima der Räuberpopulation folgen zeitversetzt auf die Maxima der Beutepopulation. (3) Konstanter Mittelwert: Die mittleren Populationsgrößen bleiben über lange Zeiträume konstant. (4) Erholungsregel: Werden beide Populationen gleichmäßig dezimiert (z. B. durch Pestizide), erholt sich die Beutepopulation schneller als die Räuberpopulation. In der Realität sind die Schwankungen oft weniger regelmäßig, da weitere Faktoren wie Umweltschwankungen, räumliche Heterogenität und Arteninteraktionen eine Rolle spielen.\n\n' +
        'Symbiose (im weiteren Sinne) umfasst alle Formen des engen Zusammenlebens verschiedener Arten. Mutualismus ist eine Beziehung mit beiderseitigem Vorteil (z. B. Mykorrhiza: Pilz liefert der Pflanze Mineralstoffe, Pflanze liefert dem Pilz Zucker). Kommensalismus ist eine Beziehung, bei der ein Partner profitiert und der andere nicht beeinflusst wird (z. B. Haibegleitfische, die Nahrungsreste des Hais fressen). Parasitismus ist eine Beziehung zum Nachteil des Wirts: Der Parasit entzieht dem Wirt Nährstoffe oder schädigt ihn auf andere Weise. Parasitismus unterscheidet sich von Prädation dadurch, dass der Parasit seinen Wirt in der Regel nicht sofort tötet, sondern langfristig auf ihn angewiesen ist.',
      merksätze: [
        'Lotka-Volterra-Regeln (Räuber-Beute): (1) Periodische Schwankungen, (2) Räuber-Maximum folgt zeitversetzt auf Beute-Maximum, (3) Konstante Mittelwerte, (4) Beute erholt sich schneller als Räuber.',
        'Konkurrenz: Intraspezifisch = innerhalb einer Art (dichteabhängig). Interspezifisch = zwischen Arten (kann zu Verdrängung oder Nischendifferenzierung führen).',
      ],
      altfrage: {
        question: 'Was besagen die Lotka-Volterra-Regeln?',
        answer:
          'Die Lotka-Volterra-Regeln beschreiben die Dynamik von Räuber-Beute-Systemen: Die Populationsgrößen schwanken periodisch, das Räuber-Maximum folgt zeitversetzt auf das Beute-Maximum, die Mittelwerte bleiben langfristig konstant, und nach gleichmäßiger Dezimierung erholt sich die Beute schneller.',
      },
      klinischerBezug:
        'Die Lotka-Volterra-Modelle finden Anwendung in der Infektionsmedizin: Das Immunsystem (Räuber) und Pathogene (Beute) zeigen ähnliche Populationsdynamiken. Die Erholungsregel erklärt, warum nach Immunsuppression (z. B. Chemotherapie) Infektionen gehäuft auftreten — die Pathogene erholen sich schneller als die Immunzellen.',
      selfTest: [
        {
          question: 'Was beschreibt die Phasenverschiebung in Lotka-Volterra-Systemen?',
          options: [
            'Räuber und Beute schwanken gleichzeitig',
            'Das Räuber-Maximum folgt zeitversetzt auf das Beute-Maximum',
            'Die Beutepopulation folgt dem Räubermaximum',
            'Beide Populationen wachsen gleichzeitig exponentiell',
            'Die Räuberpopulation erreicht ihr Minimum vor der Beutepopulation',
          ],
          correctIndex: 1,
          explanation:
            'Die Phasenverschiebung besagt, dass das Maximum der Räuberpopulation zeitversetzt auf das Maximum der Beutepopulation folgt: Erst wächst die Beute, dann vermehren sich die Räuber.',
        },
        {
          question: 'Was passiert laut Erholungsregel nach gleichmäßiger Dezimierung beider Populationen?',
          options: [
            'Beide erholen sich gleich schnell',
            'Der Räuber erholt sich schneller',
            'Die Beute erholt sich schneller als der Räuber',
            'Beide sterben aus',
            'Der Räuber verdoppelt seine Population, während die Beute konstant bleibt',
          ],
          correctIndex: 2,
          explanation:
            'Die Erholungsregel (4. Lotka-Volterra-Regel) besagt, dass sich die Beutepopulation nach gleichmäßiger Dezimierung schneller erholt als die Räuberpopulation, da die Beute weniger Nahrungsdruck hat.',
        },
        {
          question: 'Was ist ein Beispiel für Mutualismus?',
          options: [
            'Bandwurm im menschlichen Darm',
            'Mykorrhiza zwischen Pilz und Pflanzenwurzel',
            'Löwe jagt Zebra',
            'Kuckuck legt Eier in fremde Nester',
            'Flechte als Verbindung von Alge und Pilz',
          ],
          correctIndex: 1,
          explanation:
            'Mykorrhiza ist Mutualismus: Der Pilz liefert der Pflanze Wasser und Mineralstoffe, die Pflanze liefert dem Pilz Zucker aus der Photosynthese. Beide Partner profitieren.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.4 Populationsökologie
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-4',
      title: 'Populationsökologie',
      content:
        'Die Populationsökologie untersucht die Dynamik von Populationen — ihre Größe, Dichte, Altersstruktur, Wachstumsraten und die Faktoren, die diese Parameter beeinflussen. Eine Population ist die Gesamtheit aller Individün einer Art, die in einem bestimmten Gebiet zur gleichen Zeit leben und eine Fortpflanzungsgemeinschaft bilden. Populationen sind die grundlegenden Einheiten der Evolution, da Allelfrequenzveränderungen auf Populationsebene stattfinden. Die Populationsgröße (N) wird durch Geburtenrate (Natalität), Sterberate (Mortalität), Zuwanderung (Immigration) und Abwanderung (Emigration) bestimmt.\n\n' +
        'Das exponentielle Wachstum beschreibt die theoretische Populationszunahme unter idealen Bedingungen ohne limitierende Faktoren. Die Wachstumsrate ist proportional zur aktüllen Populationsgröße: dN/dt = r · N, wobei r die intrinsische Wachstumsrate ist. Dies führt zu einer J-förmigen Wachstumskurve mit zunehmend schnellerem Wachstum. In der Natur tritt exponentielles Wachstum nur kurzzeitig auf, z. B. bei der Besiedlung neuer Lebensräume oder nach Katastrophen. Langfristig wird das Wachstum durch Ressourcenknappheit und andere Faktoren begrenzt. Das logistische Wachstum berücksichtigt diese Begrenzung durch die Umweltkapazität (Kapazitätsgrenze, K): dN/dt = r · N · (K−N)/K. Es ergibt eine S-förmige (sigmoide) Wachstumskurve: Anfangs wächst die Population exponentiell, verlangsamt sich dann und stabilisiert sich bei der Kapazitätsgrenze K. K ist die maximale Populationsgröße, die ein Lebensraum dauerhaft tragen kann.\n\n' +
        'Die Unterscheidung zwischen r-Strategen und K-Strategen beschreibt zwei gegensätzliche Lebensstrategien, die als Extreme eines Spektrums zu verstehen sind. r-Strategen (Vermehrungsoptimierer) investieren in eine hohe Reproduktionsrate: Sie erzeugen viele Nachkommen mit wenig Energieinvestition pro Individuum, haben eine kurze Generationszeit und eine hohe Sterblichkeit. Sie sind typisch für instabile, unvorhersagbare Lebensräume und besiedeln schnell neue Habitate (Pionierstrategie). Beispiele sind Bakterien, Insekten, viele Fische und einjährige Pflanzen. K-Strategen (Kapazitätsoptimierer) investieren in die Qualität der Nachkommen: Sie erzeugen wenige Nachkommen mit hoher Energieinvestition (Brutpflege), haben eine lange Lebensdauer und eine niedrige Sterblichkeit. Sie sind typisch für stabile, vorhersagbare Lebensräume und leben nahe der Kapazitätsgrenze. Beispiele sind Elefanten, Wale, Menschenaffen und der Mensch. Die meisten Arten liegen zwischen diesen Extremen.',
      merksätze: [
        'Exponentielles Wachstum: dN/dt = r·N (J-Kurve, ohne Limit). Logistisches Wachstum: dN/dt = r·N·(K−N)/K (S-Kurve, mit Kapazitätsgrenze K).',
        'r-Strategen: Viele Nachkommen, wenig Investition, instabile Lebensräume. K-Strategen: Wenige Nachkommen, viel Investition (Brutpflege), stabile Lebensräume.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen exponentiellem und logistischem Wachstum?',
        answer:
          'Exponentielles Wachstum (J-Kurve) beschreibt unbegrenztes Wachstum ohne limitierende Faktoren. Logistisches Wachstum (S-Kurve) berücksichtigt die Kapazitätsgrenze K des Lebensraums: Das Wachstum verlangsamt sich und stabilisiert sich bei K.',
      },
      klinischerBezug:
        'Bakterien zeigen typisches exponentielles Wachstum in der logarithmischen Phase ihrer Wachstumskurve. Das Verständnis bakteriellen Populationswachstums ist essenziell für die Antibiotikatherapie: Antibiotika sind am wirksamsten in der exponentiellen Wachstumsphase, wenn die Bakterien aktiv teilen und stoffwechselnd sind.',
      selfTest: [
        {
          question: 'Welche Wachstumsform zeigt eine S-förmige Kurve?',
          options: [
            'Exponentielles Wachstum',
            'Logistisches Wachstum',
            'Lineares Wachstum',
            'Negatives Wachstum',
            'Hyperbolisches Wachstum',
          ],
          correctIndex: 1,
          explanation:
            'Logistisches Wachstum zeigt eine S-förmige (sigmoide) Kurve: Nach anfänglich exponentiellem Wachstum verlangsamt es sich bei Annäherung an die Kapazitätsgrenze K.',
        },
        {
          question: 'Welches ist ein typisches Merkmal von r-Strategen?',
          options: [
            'Wenige Nachkommen mit intensiver Brutpflege',
            'Lange Lebensdauer und späte Geschlechtsreife',
            'Viele Nachkommen mit hoher Sterblichkeitsrate',
            'Leben nahe der Kapazitätsgrenze in stabilen Ökosystemen',
            'Hohe genetische Diversität innerhalb der Population',
          ],
          correctIndex: 2,
          explanation:
            'r-Strategen erzeugen viele Nachkommen mit wenig Investition pro Individuum. Die Sterblichkeitsrate ist hoch, aber die hohe Reproduktionsrate sichert das Überleben der Art.',
        },
        {
          question: 'Was beschreibt die Kapazitätsgrenze K?',
          options: [
            'Die maximale Reproduktionsrate einer Art',
            'Die maximale Populationsgröße, die ein Lebensraum dauerhaft tragen kann',
            'Die minimale überlebensfähige Populationsgröße',
            'Die Geschwindigkeit des Populationswachstums',
            'Die Anzahl der Trophieebenen in einem Nahrungsnetz',
          ],
          correctIndex: 1,
          explanation:
            'Die Kapazitätsgrenze K ist die maximale Populationsgröße, die ein Lebensraum auf Dauer tragen kann. Sie wird durch die verfügbaren Ressourcen und Umweltbedingungen bestimmt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.5 Stoffkreisläufe
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-5',
      title: 'Stoffkreisläufe',
      content:
        'Stoffkreisläufe (biogeochemische Kreisläufe) beschreiben den Weg chemischer Elemente durch die verschiedenen Sphären der Erde — Biosphäre, Atmosphäre, Hydrosphäre und Lithosphäre. Im Gegensatz zur Energie, die das Ökosystem als Wärme verlässt und ständig nachgeliefert werden muss (Sonnenlicht), werden Stoffe innerhalb des Ökosystems zyklisch umgewandelt und wiederverwendet. Produzenten nehmen anorganische Stoffe auf und bauen sie in organische Verbindungen ein, Konsumenten geben diese weiter, und Destrünten zersetzen organisches Material wieder in anorganische Substanzen. Die wichtigsten biogeochemischen Kreisläufe sind der Kohlenstoffkreislauf, der Stickstoffkreislauf und der Wasserkreislauf.\n\n' +
        'Der Kohlenstoffkreislauf ist eng mit dem Energiefluss in Ökosystemen verknüpft. Kohlenstoff liegt in der Atmosphäre als CO₂ vor (ca. 0,04 %). Durch Photosynthese nehmen Pflanzen CO₂ auf und fixieren den Kohlenstoff in organischen Verbindungen (Glucose): 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Durch Zellatmung (alle Lebewesen) wird organischer Kohlenstoff wieder zu CO₂ oxidiert: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie. Destrünten (Bakterien, Pilze) zersetzen totes organisches Material und setzen dabei CO₂ frei (Mineralisation). Langfristige Kohlenstoffspeicher (Senken) sind fossile Brennstoffe (Kohle, Erdöl, Erdgas), Kalkgestein und die Ozeane. Die Verbrennung fossiler Brennstoffe durch den Menschen setzt gespeicherten Kohlenstoff als CO₂ frei und erhöht den atmosphärischen CO₂-Gehalt — die Hauptursache des anthropogenen Treibhauseffekts.\n\n' +
        'Der Stickstoffkreislauf ist komplex, da Stickstoff in verschiedenen Oxidationsstufen vorkommt und zahlreiche Umwandlungen durchläuft. Atmosphärischer Stickstoff (N₂, ca. 78 % der Luft) ist für die meisten Organismen nicht direkt nutzbar. Die Stickstofffixierung durch bestimmte Bakterien (z. B. Rhizobium in Symbiose mit Leguminosen, freilebende Cyanobakterien) und durch Blitzentladungen wandelt N₂ in Ammonium (NH₄⁺) um. Nitrifikation ist die bakterielle Oxidation von Ammonium zu Nitrit (NO₂⁻, durch Nitrosomonas) und weiter zu Nitrat (NO₃⁻, durch Nitrobacter). Pflanzen nehmen Nitrat und Ammonium auf und bauen den Stickstoff in Aminosäuren und Proteine ein (Assimilation). Bei der Zersetzung organischen Materials wird Stickstoff als Ammonium freigesetzt (Ammonifikation). Die Denitrifikation durch anärobe Bakterien wandelt Nitrat zurück in atmosphärischen N₂ und schließt den Kreislauf. Der Wasserkreislauf verbindet alle Ökosysteme: Verdunstung (Evaporation), Transpiration durch Pflanzen, Wolkenbildung, Niederschlag und Abfluss in Gewässer bilden einen globalen Kreislauf, der den Transport von Nährstoffen und die Verteilung von Wärme beeinflusst.',
      merksätze: [
        'Kohlenstoffkreislauf: CO₂-Fixierung (Photosynthese) ↔ CO₂-Freisetzung (Zellatmung, Zersetzung, Verbrennung). Fossile Brennstoffe = langfristige C-Speicher.',
        'Stickstoffkreislauf: N₂-Fixierung (Bakterien) → NH₄⁺ → Nitrifikation → NO₃⁻ → Assimilation → Ammonifikation → NH₄⁺ / Denitrifikation → N₂.',
      ],
      altfrage: {
        question: 'Welche Bakterien sind an der Nitrifikation beteiligt?',
        answer:
          'Nitrifikation ist ein zweistufiger Prozess: Nitrosomonas oxidiert Ammonium (NH₄⁺) zu Nitrit (NO₂⁻), und Nitrobacter oxidiert Nitrit weiter zu Nitrat (NO₃⁻). Nitrat ist die Hauptstickstoffquelle für Pflanzen.',
      },
      klinischerBezug:
        'Der Stickstoffkreislauf ist klinisch relevant: Übermäßige Stickstoffdüngung in der Landwirtschaft kann zur Nitratbelastung des Trinkwassers führen. Im Magen-Darm-Trakt kann Nitrat zu Nitrit reduziert werden, das mit Aminen zu krebserregenden Nitrosaminen reagieren kann. Bei Säuglingen kann Nitrit Methämoglobinämie (Blausucht) verursachen.',
      selfTest: [
        {
          question: 'Welcher Prozess fixiert atmosphärischen Stickstoff (N₂)?',
          options: [
            'Nitrifikation durch Nitrobacter',
            'Denitrifikation durch anärobe Bakterien',
            'Stickstofffixierung durch Rhizobium und Cyanobakterien',
            'Ammonifikation durch Destrünten',
            'Assimilation durch Pflanzenwurzeln in Form von N₂',
          ],
          correctIndex: 2,
          explanation:
            'Die Stickstofffixierung wird von spezialisierten Bakterien durchgeführt (z. B. Rhizobium in Symbiose mit Leguminosen, freilebende Cyanobakterien). Sie wandeln atmosphärisches N₂ in biologisch nutzbares Ammonium (NH₄⁺) um.',
        },
        {
          question: 'Was ist die Hauptursache des anthropogenen Treibhauseffekts?',
          options: [
            'Übermäßige Photosynthese',
            'Verbrennung fossiler Brennstoffe und Freisetzung von CO₂',
            'Zunahme der Denitrifikation',
            'Abholzung von Nadelwäldern',
            'Anstieg der Methanproduktion durch Vulkanismus',
          ],
          correctIndex: 1,
          explanation:
            'Die Verbrennung fossiler Brennstoffe (Kohle, Erdöl, Erdgas) setzt langfristig gespeicherten Kohlenstoff als CO₂ frei und erhöht den atmosphärischen CO₂-Gehalt — die Hauptursache des anthropogenen (menschengemachten) Treibhauseffekts.',
        },
        {
          question: 'Was beschreibt die Denitrifikation?',
          options: [
            'Die Umwandlung von N₂ in NH₄⁺',
            'Die Oxidation von NH₄⁺ zu NO₃⁻',
            'Die Umwandlung von NO₃⁻ zurück in N₂ durch anärobe Bakterien',
            'Die Aufnahme von Nitrat durch Pflanzen',
            'Die Oxidation von Ammonium zu Nitrit durch Nitrosomonas',
          ],
          correctIndex: 2,
          explanation:
            'Denitrifikation ist die Umwandlung von Nitrat (NO₃⁻) zurück in atmosphärischen Stickstoff (N₂) durch anärobe Bakterien. Sie schließt den Stickstoffkreislauf und findet in sauerstoffarmen Böden und Gewässern statt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.6 Energiefluss
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-6',
      title: 'Energiefluss',
      content:
        'Der Energiefluss durch ein Ökosystem folgt den Gesetzen der Thermodynamik und ist — im Gegensatz zu den Stoffkreisläufen — ein gerichteter, nicht-zyklischer Prozess. Die Sonnenenergie ist die primäre Energiequelle für fast alle Ökosysteme (Ausnahme: chemolithoautotrophe Ökosysteme an Tiefseequellen). Nur ein kleiner Teil der eingestrahlten Sonnenenergie (ca. 1–2 %) wird von den Produzenten durch Photosynthese in chemische Energie umgewandelt und steht der Biozönose zur Verfügung. Diese Energie fließt durch die verschiedenen Trophieebenen (Ernährungsstufen) des Ökosystems und wird bei jeder Weitergabe stark reduziert, da ein Großteil als Wärme verloren geht (2. Hauptsatz der Thermodynamik).\n\n' +
        'Die Trophieebenen (Ernährungsstufen) gliedern die Organismen eines Ökosystems nach ihrer Stellung im Nahrungsnetz. Produzenten (autotrophe Organismen, v. a. grüne Pflanzen und Algen) bilden die erste Trophieebene: Sie wandeln anorganische Stoffe durch Photosynthese in energiereiche organische Verbindungen um und sind die Grundlage jeder Nahrungskette. Primärkonsumenten (Herbivoren, Pflanzenfresser) bilden die zweite Trophieebene. Sekundärkonsumenten (Karnivoren erster Ordnung) fressen Herbivoren. Tertiärkonsumenten (Karnivoren zweiter Ordnung) fressen Sekundärkonsumenten. Destrünten (Zersetzer: Bakterien und Pilze) bauen totes organisches Material aller Trophieebenen ab und führen die Nährstoffe dem Kreislauf wieder zu. Eine Nahrungskette ist eine lineare Abfolge von Organismen, bei der jede Art von der vorhergehenden als Nahrung dient. Ein Nahrungsnetz ist die Gesamtheit aller miteinander verflochtenen Nahrungsketten eines Ökosystems — es ist realistischer, da die meisten Organismen mehrere Nahrungsquellen haben.\n\n' +
        'Die 10-Prozent-Regel (Lindeman, 1942) besagt, dass bei der Weitergabe von Energie von einer Trophieebene zur nächsten nur etwa 10 % der Energie übergeht — 90 % gehen durch Zellatmung als Wärme verloren, werden in nicht-verwertbare Biomasse eingebaut oder werden nicht gefressen. Dies erklärt, warum Nahrungsketten typischerweise nur 4–5 Trophieebenen umfassen: Die verfügbare Energie reicht nicht aus, um weitere Ebenen zu ernähren. Es erklärt auch, warum die Biomasse mit jeder Trophieebene abnimmt (ökologische Pyramide oder Eltonian Pyramid). Die Bruttoprimärproduktion (BPP) ist die Gesamtmenge an organischer Substanz, die Produzenten durch Photosynthese erzeugen. Die Nettoprimärproduktion (NPP) ist die BPP abzüglich der Eigenatmung der Produzenten — sie steht den Konsumenten als Nahrung zur Verfügung.',
      merksätze: [
        'Trophieebenen: Produzenten → Primärkonsumenten (Herbivoren) → Sekundärkonsumenten (Karnivoren 1. Ordnung) → Tertiärkonsumenten. Destrünten zersetzen totes Material aller Ebenen.',
        '10-Prozent-Regel: Nur ca. 10 % der Energie geht von einer Trophieebene zur nächsten über. Deshalb haben Nahrungsketten meist nur 4–5 Ebenen.',
      ],
      altfrage: {
        question: 'Warum haben Nahrungsketten typischerweise nur 4–5 Glieder?',
        answer:
          'Aufgrund der 10-Prozent-Regel geht bei jeder Trophieebene ca. 90 % der Energie als Wärme verloren. Nach 4–5 Ebenen ist die verbleibende Energiemenge zu gering, um weitere Trophieebenen zu unterstützen.',
      },
      klinischerBezug:
        'Die Bioakkumulation (Anreicherung) von Schadstoffen in der Nahrungskette ist klinisch relevant: Lipophile Giftstoffe wie DDT, PCB oder Quecksilber reichern sich in höheren Trophieebenen zunehmend an (Biomagnifikation). Endkonsumenten wie Raubfische oder der Mensch können dadurch gesundheitsschädliche Konzentrationen erreichen — z. B. Quecksilber in Thunfisch (Minamata-Krankheit).',
      selfTest: [
        {
          question: 'Wie viel Prozent der Energie werden typischerweise von einer Trophieebene zur nächsten weitergegeben?',
          options: [
            'Ca. 50 %',
            'Ca. 90 %',
            'Ca. 10 %',
            'Ca. 1 %',
            'Ca. 25 %',
          ],
          correctIndex: 2,
          explanation:
            'Die 10-Prozent-Regel besagt, dass nur ca. 10 % der Energie von einer Trophieebene zur nächsten übergeht. 90 % gehen durch Zellatmung als Wärme verloren oder werden nicht verwertet.',
        },
        {
          question: 'Was ist der Unterschied zwischen Nahrungskette und Nahrungsnetz?',
          options: [
            'Es gibt keinen Unterschied',
            'Die Nahrungskette beschreibt nur Pflanzen, das Nahrungsnetz nur Tiere',
            'Die Nahrungskette ist linear, das Nahrungsnetz umfasst alle verflochtenen Nahrungsketten',
            'Das Nahrungsnetz hat nur 2 Trophieebenen',
            'Die Nahrungskette beginnt immer mit Konsumenten, das Nahrungsnetz mit Produzenten',
          ],
          correctIndex: 2,
          explanation:
            'Eine Nahrungskette ist eine lineare Abfolge von Organismen. Ein Nahrungsnetz ist die Gesamtheit aller miteinander verflochtenen Nahrungsketten — es bildet die Realität besser ab, da Organismen meist mehrere Nahrungsquellen haben.',
        },
        {
          question: 'Was beschreibt die Nettoprimärproduktion?',
          options: [
            'Die Gesamtmenge an Energie im Ökosystem',
            'Die Bruttoprimärproduktion abzüglich der Eigenatmung der Produzenten',
            'Die Energiemenge, die Destrünten freisetzen',
            'Die Energieaufnahme der Konsumenten',
            'Die Gesamtbiomasse aller Trophieebenen eines Ökosystems',
          ],
          correctIndex: 1,
          explanation:
            'Die Nettoprimärproduktion (NPP) = Bruttoprimärproduktion (BPP) minus Eigenatmung der Produzenten. Die NPP steht den Konsumenten als Nahrung zur Verfügung.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.7 Ökosystem Wald/See
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-7',
      title: 'Ökosystem Wald/See',
      content:
        'Ökosysteme weisen charakteristische räumliche Strukturen auf, die als Zonierung bezeichnet werden. Im Wald unterscheidet man vertikale Schichten (Stockwerke): Baumschicht (Kronendach), Strauchschicht, Krautschicht, Moosschicht und Bodenschicht (Edaphon). Diese Schichtung bietet zahlreiche ökologische Nischen und ermöglicht die Köxistenz vieler Arten. Wälder sind die produktivsten terrestrischen Ökosysteme und spielen eine zentrale Rolle im globalen Kohlenstoffkreislauf als CO₂-Senken. In Mitteleuropa dominieren Buchenwälder als natürliche Vegetation (potenziell natürliche Vegetation), die durch menschliche Nutzung vielerorts durch Nadelwälder (Fichten) oder Agrarland ersetzt wurden.\n\n' +
        'Ein See zeigt eine charakteristische horizontale und vertikale Zonierung. Horizontal unterscheidet man die Uferzone (Litoral, mit Wasserpflanzen, hohe Artenvielfalt), die Freiwasserzone (Pelagial, mit Plankton und Fischen) und die Tiefenzone (Profundal, lichtlos, von Destrünten besiedelt). Vertikal wird der See in die trophogene Zone (euphotische Zone, Licht reicht für Photosynthese, Produktion > Abbau) und die tropholytische Zone (aphotische Zone, kein Licht, Abbau > Produktion) unterteilt. Die Grenze ist die Kompensationsebene, an der Photosynthese und Zellatmung im Gleichgewicht stehen. Die Temperaturschichtung eines Sees (Epilimnion = warme Oberflächenschicht, Metalimnion/Thermokline = Sprungschicht mit raschem Temperaturabfall, Hypolimnion = kalte Tiefenschicht) beeinflusst die Zirkulation und Nährstoffverteilung. Die Herbst- und Frühjahrszirkulation (Durchmischung) ist essenziell für den Nährstofftransport in die trophogene Zone.\n\n' +
        'Sukzession bezeichnet die zeitliche Abfolge von Lebensgemeinschaften an einem Standort. Die Primärsukzession beginnt auf unbesiedeltem Substrat (z. B. nach einem Vulkanausbruch, auf einer neuen Insel, auf einem Gletscher-Rückzugsgebiet): Pionierpflanzen (Flechten, Moose) besiedeln den Standort als erste, verbessern die Bodenbedingungen und werden nach und nach durch Gräser, Sträucher und schließlich Bäume ersetzt. Die Sekundärsukzession erfolgt nach einer Störung auf bereits vorhandenem Boden (z. B. nach Waldbrand, Rodung, Sturmschaden) und verläuft schneller als die Primärsukzession. Die Sukzession endet in der Klimaxgesellschaft — dem stabilen Endzustand der Vegetationsentwicklung, der unter den gegebenen Klimabedingungen langfristig bestehen bleibt. In Mitteleuropa ist die Klimaxgesellschaft typischerweise ein Buchenwald. In der Realität wird die Klimaxgesellschaft oft durch Störungen (Feuer, Stürme, menschliche Nutzung) verhindert oder zurückgesetzt.',
      merksätze: [
        'See-Zonierung: Litoral (Ufer) → Pelagial (Freiwasser) → Profundal (Tiefe). Trophogene Zone (Licht, Produktion) vs. Tropholytische Zone (kein Licht, Abbau). Kompensationsebene = Gleichgewicht.',
        'Sukzession: Pionierstadium → Zwischenstadien → Klimaxgesellschaft (stabiler Endzustand). Primärsukzession auf neuem Substrat, Sekundärsukzession nach Störung.',
      ],
      altfrage: {
        question: 'Was ist die Kompensationsebene in einem See?',
        answer:
          'Die Kompensationsebene ist die Tiefe, in der Photosynthese und Zellatmung genau im Gleichgewicht stehen. Oberhalb (trophogene Zone) überwiegt die Produktion, unterhalb (tropholytische Zone) überwiegt der Abbau organischer Substanz.',
      },
      klinischerBezug:
        'Die Eutrophierung von Seen (übermäßiger Nährstoffeintrag durch Dünger und Abwässer) fördert Algenblüten, die beim Absterben Sauerstoffzehrung verursachen (Hypoxie). Dies kann zur Freisetzung von Toxinen (z. B. durch Cyanobakterien) führen, die im Trinkwasser gesundheitsgefährdend sind — Symptome reichen von Hautreizungen bis zu Leberschäden.',
      selfTest: [
        {
          question: 'Was beschreibt die trophogene Zone eines Sees?',
          options: [
            'Die lichtlose Tiefenzone',
            'Die durchlichtete Zone, in der Produktion überwiegt',
            'Die Uferzone mit Wasserpflanzen',
            'Die Sprungschicht mit raschem Temperaturabfall',
            'Die Zone mit der höchsten Destrüntenaktivität',
          ],
          correctIndex: 1,
          explanation:
            'Die trophogene Zone (euphotische Zone) ist der durchlichtete Bereich eines Sees, in dem Photosynthese stattfindet und die Produktion den Abbau überwiegt.',
        },
        {
          question: 'Was ist die Klimaxgesellschaft?',
          options: [
            'Die erste Lebensgemeinschaft bei der Primärsukzession',
            'Eine instabile Übergangsgesellschaft',
            'Der stabile Endzustand der Sukzession unter gegebenen Klimabedingungen',
            'Eine künstlich angelegte Pflanzengemeinschaft',
            'Die artenreichste Phase der Sukzession vor dem Endzustand',
          ],
          correctIndex: 2,
          explanation:
            'Die Klimaxgesellschaft ist der stabile Endzustand der Sukzession, der unter den gegebenen Klimabedingungen langfristig bestehen bleibt. In Mitteleuropa ist dies typischerweise ein Buchenwald.',
        },
        {
          question: 'Was ist der Unterschied zwischen Primär- und Sekundärsukzession?',
          options: [
            'Primärsukzession ist schneller als Sekundärsukzession',
            'Primärsukzession beginnt auf unbesiedeltem Substrat, Sekundärsukzession auf vorhandenem Boden',
            'Sekundärsukzession findet nur in Wäldern statt',
            'Es gibt keinen Unterschied',
            'Sekundärsukzession beginnt immer mit Flechten als Pionierorganismen',
          ],
          correctIndex: 1,
          explanation:
            'Primärsukzession beginnt auf unbesiedeltem Substrat (kein Boden vorhanden). Sekundärsukzession erfolgt nach einer Störung auf bereits vorhandenem Boden und verläuft schneller.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 7.8 Umweltprobleme
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap7-8',
      title: 'Umweltprobleme',
      content:
        'Die menschliche Zivilisation hat durch Industrialisierung, Landwirtschaft, Urbanisierung und Ressourcenverbrauch tiefgreifende Auswirkungen auf die Biosphäre. Die wichtigsten globalen Umweltprobleme sind der Treibhauseffekt und die damit verbundene Klimärwärmung, die Zerstörung der Ozonschicht, der Verlust der biologischen Vielfalt, die Verschmutzung von Luft, Wasser und Boden sowie die Übernutzung natürlicher Ressourcen. Diese Probleme sind miteinander verknüpft und erfordern ein grundlegendes Verständnis ökologischer Zusammenhänge für ihre Lösung. Das Konzept der Nachhaltigkeit fordert einen Umgang mit natürlichen Ressourcen, der die Bedürfnisse der gegenwärtigen Generation befriedigt, ohne die Möglichkeiten künftiger Generationen zu gefährden.\n\n' +
        'Der Treibhauseffekt ist ein natürlicher Prozess, der für das Leben auf der Erde essenziell ist: Treibhausgase in der Atmosphäre (CO₂, CH₄, N₂O, H₂O) absorbieren langwellige Wärmestrahlung der Erdoberfläche und strahlen sie teilweise zurück — ohne diesen natürlichen Treibhauseffekt läge die mittlere Erdtemperatur bei ca. −18 °C statt der tatsächlichen +15 °C. Der anthropogene (menschengemachte) Treibhauseffekt bezeichnet die Verstärkung des natürlichen Treibhauseffekts durch die erhöhte Freisetzung von Treibhausgasen, insbesondere CO₂ (Verbrennung fossiler Brennstoffe, Abholzung), CH₄ (Methan: Viehwirtschaft, Reisanbau, Permafrostauftauen) und N₂O (Lachgas: Landwirtschaft). Die Folgen umfassen globale Erwärmung, Anstieg des Meeresspiegels, Veränderung von Niederschlagsmustern, Zunahme extremer Wetterereignisse und Verschiebung von Klima- und Vegetationszonen.\n\n' +
        'Das Ozonloch bezeichnet die Ausdünnung der Ozonschicht (O₃) in der Stratosphäre (ca. 15–35 km Höhe), besonders über der Antarktis. Die Ozonschicht absorbiert schädliche UV-B-Strahlung der Sonne und schützt Lebewesen vor DNA-Schäden und Hautkrebs. FCKW (Fluorchlorkohlenwasserstoffe, verwendet in Kühlmitteln und Treibgasen) setzen in der Stratosphäre Chlorradikale frei, die katalytisch Ozon abbauen: Ein einziges Chloratom kann tausende Ozonmoleküle zerstören. Das Montreal-Protokoll (1987) verbot die Produktion von FCKW und gilt als Erfolgsbeispiel internationaler Umweltpolitik — die Ozonschicht regeneriert sich langsam.\n\n' +
        'Der Biodiversitätsverlust (Artenschwund) ist eine der gravierendsten Umweltkrisen. Die Hauptursachen sind Lebensraumzerstörung (Abholzung, Urbanisierung, Landwirtschaft), Übernutzung (Überfischung, Wilderei), invasive Arten, Umweltverschmutzung und Klimawandel. Das derzeitige Massenaussterben (6. Massenaussterben) ist um das 100- bis 1000-fache schneller als die natürliche Hintergrundaussterberate. Biodiversität umfasst drei Ebenen: genetische Vielfalt (innerhalb von Arten), Artenvielfalt und Ökosystemvielfalt. Der Verlust von Biodiversität hat weitreichende Konsequenzen: Zusammenbruch von Nahrungsnetzen, Verlust von Ökosystemdienstleistungen (Bestäubung, Wasserreinigung, Klimaregulation, medizinisch nutzbare Substanzen) und verringerte Resilienz von Ökosystemen gegenüber Störungen. Nachhaltigkeit (sustainable development, Brundtland-Bericht, 1987) fordert die Nutzung natürlicher Ressourcen in einem Maße, das deren Regenerationsfähigkeit nicht übersteigt.',
      merksätze: [
        'Natürlicher Treibhauseffekt: +33 °C (von −18 °C auf +15 °C). Anthropogener Treibhauseffekt: Verstärkung durch CO₂, CH₄, N₂O aus fossilen Brennstoffen, Landwirtschaft etc.',
        'Ozonloch: FCKW → Chlorradikale → katalytischer Ozonabbau. Montreal-Protokoll (1987) = Erfolg. Biodiversitätsverlust: 6. Massenaussterben durch Habitatzerstörung, Übernutzung, Klimawandel.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen natürlichem und anthropogenem Treibhauseffekt?',
        answer:
          'Der natürliche Treibhauseffekt ist lebensnotwendig und erhöht die Erdtemperatur um ca. 33 °C (von −18 °C auf +15 °C). Der anthropogene Treibhauseffekt verstärkt diesen Effekt durch die menschengemachte Freisetzung zusätzlicher Treibhausgase (v. a. CO₂ aus fossilen Brennstoffen), was zur globalen Erwärmung führt.',
      },
      klinischerBezug:
        'Der Klimawandel hat direkte gesundheitliche Auswirkungen: Zunahme hitzebedingter Erkrankungen und Todesfälle, Ausbreitung tropischer Infektionskrankheiten (Malaria, Dengue) in gemäßigte Breiten, Zunahme von Allergien durch verlängerte Pollenflugzeiten, und psychische Belastungen. Die Ausdünnung der Ozonschicht erhöht die UV-B-Belastung und damit das Risiko für Hautkrebs (Melanom) und Katarakt.',
      selfTest: [
        {
          question: 'Welches Gas ist der Haupttreiber des anthropogenen Treibhauseffekts?',
          options: [
            'Ozon (O₃)',
            'Stickstoff (N₂)',
            'Kohlendioxid (CO₂)',
            'Sauerstoff (O₂)',
            'Methan (CH₄)',
          ],
          correctIndex: 2,
          explanation:
            'CO₂ aus der Verbrennung fossiler Brennstoffe ist der Haupttreiber des anthropogenen Treibhauseffekts. Weitere wichtige Treibhausgase sind Methan (CH₄) und Lachgas (N₂O).',
        },
        {
          question: 'Was verursacht das Ozonloch?',
          options: [
            'Erhöhte CO₂-Konzentration',
            'FCKW, die Chlorradikale freisetzen und katalytisch Ozon abbauen',
            'Natürliche UV-Strahlung',
            'Vulkanausbrüche',
            'Übermäßiger Einsatz von Stickstoffdüngern in der Landwirtschaft',
          ],
          correctIndex: 1,
          explanation:
            'FCKW (Fluorchlorkohlenwasserstoffe) setzen in der Stratosphäre Chlorradikale frei, die katalytisch Ozon abbauen. Ein Chloratom kann tausende Ozonmoleküle zerstören.',
        },
        {
          question: 'Was sind die drei Ebenen der Biodiversität?',
          options: [
            'Bakterien, Pflanzen, Tiere',
            'Genetische Vielfalt, Artenvielfalt, Ökosystemvielfalt',
            'Wasser, Land, Luft',
            'Produzenten, Konsumenten, Destrünten',
            'Morphologische Vielfalt, Verhaltensvielfalt, Stoffwechselvielfalt',
          ],
          correctIndex: 1,
          explanation:
            'Biodiversität umfasst drei Ebenen: (1) Genetische Vielfalt innerhalb von Arten, (2) Artenvielfalt in Lebensgemeinschaften, (3) Ökosystemvielfalt in der Landschaft.',
        },
      ],
    },
  ],
};
