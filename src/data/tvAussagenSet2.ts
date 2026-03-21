import type { TVOffiziellText } from "./tvOffiziell";

// ---------------------------------------------------------------------------
// Aussagen-Kombination questions for TV texts 11–20 (Set 3 + Set 4) and
// texts 1–5 from Set 6 (tvTextsExpanded2).
// Format matches tvOffiziell.ts exactly.
// ---------------------------------------------------------------------------

export const tvAussagenSet2: TVOffiziellText[] = [
  // =========================================================================
  // SET 3 – Text 1: Der Placebo-Effekt in der Medizin
  // =========================================================================
  {
    id: "tv-a2-01",
    title: "Der Placebo-Effekt in der Medizin",
    text: `Der Placebo-Effekt bezeichnet die messbare Verbesserung des Gesundheitszustands eines Patienten, die nicht auf die pharmakologische Wirkung eines Medikaments zurückzuführen ist, sondern auf die Erwartungshaltung und den Glauben an die Wirksamkeit einer Behandlung. In klinischen Studien erhalten Kontrollgruppen häufig Placebos – Scheinmedikamente ohne Wirkstoff –, um die tatsächliche Wirkung eines neuen Medikaments vom Placebo-Effekt abzugrenzen. Erstaunlicherweise zeigen Placebos in manchen Bereichen erhebliche Wirkungen: Bei Schmerzstudien berichten bis zu 30 Prozent der Placebo-Empfänger über eine deutliche Schmerzlinderung. Neurowissenschaftliche Untersuchungen haben gezeigt, dass Placebos tatsächlich die Ausschüttung körpereigener Schmerzmittel – sogenannter Endorphine – anregen können. Interessant ist auch, dass die Darreichungsform den Placebo-Effekt beeinflusst: Injektionen wirken stärker als Tabletten, teure Placebos stärker als billige, und auch die Farbe von Kapseln spielt eine Rolle – rote Kapseln werden als stimulierend, blaue als beruhigend wahrgenommen. Ethisch umstritten ist die bewusste Verabreichung von Placebos in der klinischen Praxis. Neuere Studien zeigen jedoch, dass sogenannte offene Placebos – bei denen der Patient weiß, dass er ein Placebo erhält – in einigen Fällen dennoch wirksam sein können, was die bisherige Annahme in Frage stellt, dass Täuschung eine notwendige Voraussetzung für den Placebo-Effekt sei.`,
    fragen: [
      {
        id: "tv-a2-01-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Bei Schmerzstudien berichten bis zu 50 Prozent der Placebo-Empfänger über eine Schmerzlinderung.",
          },
          {
            nr: 2,
            text: "Placebos können die Ausschüttung von Endorphinen anregen.",
          },
          {
            nr: 3,
            text: "Injektionen wirken als Placebo stärker als Tabletten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text nennt bis zu 30 Prozent, nicht 50 Prozent. Aussage 2 ist richtig: Der Text sagt explizit, dass Placebos die Ausschüttung von Endorphinen anregen können. Aussage 3 ist richtig: Der Text stellt fest, dass Injektionen stärker wirken als Tabletten.",
      },
      {
        id: "tv-a2-01-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Offene Placebos können wirksam sein, obwohl der Patient über das Placebo informiert ist.",
          },
          {
            nr: 2,
            text: "Blaue Kapseln werden als stimulierend wahrgenommen.",
          },
          {
            nr: 3,
            text: "Die bewusste Verabreichung von Placebos in der klinischen Praxis ist ethisch umstritten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist richtig: Der Text beschreibt, dass offene Placebos in einigen Fällen wirksam sein können. Aussage 2 ist falsch: Laut Text werden blaue Kapseln als beruhigend, nicht als stimulierend wahrgenommen – rote Kapseln gelten als stimulierend. Aussage 3 ist richtig: Der Text nennt die bewusste Placebo-Verabreichung explizit als ethisch umstritten.",
      },
    ],
  },

  // =========================================================================
  // SET 3 – Text 2: Quantencomputer und ihre Möglichkeiten
  // =========================================================================
  {
    id: "tv-a2-02",
    title: "Quantencomputer und ihre Möglichkeiten",
    text: `Während klassische Computer Informationen in Form von Bits verarbeiten, die entweder den Zustand 0 oder 1 annehmen können, nutzen Quantencomputer sogenannte Qubits. Das Besondere an Qubits ist, dass sie sich dank des quantenmechanischen Prinzips der Superposition gleichzeitig in mehreren Zuständen befinden können – also gewissermaßen 0 und 1 zugleich sein können, bis sie gemessen werden. Ein weiteres zentrales Prinzip ist die Verschränkung: Zwei verschränkte Qubits sind so miteinander verbunden, dass der Zustand des einen den Zustand des anderen unmittelbar beeinflusst, unabhängig von der räumlichen Entfernung. Diese Eigenschaften ermöglichen es Quantencomputern, bestimmte Berechnungen exponentiell schneller durchzuführen als klassische Computer. Potenzielle Anwendungsfelder umfassen die Simulation von Molekülen für die Medikamentenentwicklung, die Optimierung komplexer logistischer Systeme und die Kryptografie. Allerdings stehen Quantencomputer noch vor erheblichen technischen Herausforderungen. Qubits sind extrem empfindlich gegenüber Umgebungseinflüssen wie Temperatur und elektromagnetischer Strahlung, weshalb sie in der Regel bei Temperaturen nahe dem absoluten Nullpunkt – also bei etwa minus 273 Grad Celsius – betrieben werden müssen. Fehlerraten sind derzeit noch hoch, und die Entwicklung fehlerkorrigierender Verfahren gilt als eine der größten Herausforderungen auf dem Weg zu praxistauglichen Quantencomputern.`,
    fragen: [
      {
        id: "tv-a2-02-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Qubits können sich dank der Verschränkung gleichzeitig in mehreren Zuständen befinden.",
          },
          {
            nr: 2,
            text: "Quantencomputer müssen bei Temperaturen nahe dem absoluten Nullpunkt betrieben werden.",
          },
          {
            nr: 3,
            text: "Die Simulation von Molekülen für die Medikamentenentwicklung ist ein genanntes Anwendungsfeld.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. und 3. sind richtig." },
          { key: "C", beschreibung: "Nur 1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Das Prinzip, durch das Qubits gleichzeitig mehrere Zustände annehmen können, heißt Superposition, nicht Verschränkung. Die Verschränkung betrifft die Korrelation zwischen zwei Qubits. Aussage 2 ist richtig: Der Text nennt Temperaturen nahe dem absoluten Nullpunkt (minus 273 Grad Celsius). Aussage 3 ist richtig: Die Molekülsimulation für die Medikamentenentwicklung wird explizit als Anwendungsfeld genannt.",
      },
      {
        id: "tv-a2-02-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Bei verschränkten Qubits beeinflusst der Zustand des einen den Zustand des anderen, unabhängig von der Entfernung.",
          },
          {
            nr: 2,
            text: "Quantencomputer können bereits heute alle Berechnungen schneller durchführen als klassische Computer.",
          },
          {
            nr: 3,
            text: "Die Entwicklung fehlerkorrigierender Verfahren ist eine der größten Herausforderungen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist richtig: Der Text beschreibt genau diesen Zusammenhang bei verschränkten Qubits. Aussage 2 ist falsch: Der Text sagt, Quantencomputer können "bestimmte Berechnungen" exponentiell schneller durchführen – nicht alle Berechnungen. Aussage 3 ist richtig: Der Text nennt fehlerkorrigierende Verfahren explizit als eine der größten Herausforderungen.',
      },
    ],
  },

  // =========================================================================
  // SET 3 – Text 3: Mikroplastik in der Umwelt
  // =========================================================================
  {
    id: "tv-a2-03",
    title: "Mikroplastik in der Umwelt",
    text: `Als Mikroplastik werden Kunststoffpartikel mit einer Größe von weniger als fünf Millimetern bezeichnet. Man unterscheidet zwischen primärem Mikroplastik, das industriell in dieser Größe hergestellt wird – beispielsweise als Schleifmittel in Kosmetikprodukten oder als Granulat für die Kunststoffproduktion –, und sekundärem Mikroplastik, das durch den Zerfall größerer Kunststoffteile entsteht. Wind, Wellen und UV-Strahlung zersetzen Plastikabfälle in immer kleinere Fragmente, ohne sie chemisch vollständig abzubauen. Mikroplastik wurde inzwischen in nahezu allen Ökosystemen nachgewiesen: in Ozeanen, Flüssen, Böden, in arktischem Eis und sogar in der Luft. Über die Nahrungskette gelangt es in die Körper von Tieren und Menschen. Studien haben Mikroplastik in menschlichem Blut, in der Plazenta schwangerer Frauen und in der Muttermilch gefunden. Die gesundheitlichen Auswirkungen sind noch nicht abschließend geklärt, doch es gibt Hinweise darauf, dass Mikroplastikpartikel Entzündungsreaktionen auslösen, Schadstoffe wie Weichmacher und Schwermetalle binden und transportieren und möglicherweise das Hormonsystem beeinflussen können. Die Europäische Union hat auf diese Erkenntnisse reagiert und ein schrittweises Verbot von absichtlich zugesetztem Mikroplastik in Produkten beschlossen, das ab 2023 stufenweise in Kraft tritt.`,
    fragen: [
      {
        id: "tv-a2-03-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Sekundäres Mikroplastik wird industriell hergestellt.",
          },
          {
            nr: 2,
            text: "Mikroplastik wurde unter anderem in menschlichem Blut und in der Muttermilch nachgewiesen.",
          },
          {
            nr: 3,
            text: "Die EU hat ein sofortiges Totalverbot aller Kunststoffprodukte beschlossen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "Nur 2. ist richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Primäres Mikroplastik wird industriell hergestellt; sekundäres entsteht durch den Zerfall größerer Kunststoffteile. Aussage 2 ist richtig: Der Text nennt explizit Blut und Muttermilch als Fundorte. Aussage 3 ist falsch: Die EU hat ein schrittweises Verbot von absichtlich zugesetztem Mikroplastik beschlossen, kein Totalverbot aller Kunststoffprodukte.",
      },
      {
        id: "tv-a2-03-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Mikroplastikpartikel können Schadstoffe wie Weichmacher und Schwermetalle binden und transportieren.",
          },
          {
            nr: 2,
            text: "Wind, Wellen und UV-Strahlung bauen Plastikabfälle chemisch vollständig ab.",
          },
          {
            nr: 3,
            text: "Mikroplastik wurde in nahezu allen Ökosystemen nachgewiesen, einschließlich arktischem Eis.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist richtig: Der Text nennt explizit die Bindung und den Transport von Weichmachern und Schwermetallen. Aussage 2 ist falsch: Der Text sagt, dass Wind, Wellen und UV-Strahlung Plastikabfälle zersetzen, "ohne sie chemisch vollständig abzubauen". Aussage 3 ist richtig: Der Text bestätigt den Nachweis in nahezu allen Ökosystemen, einschließlich arktischem Eis.',
      },
    ],
  },

  // =========================================================================
  // SET 3 – Text 4: Die Industrielle Revolution und ihre Folgen
  // =========================================================================
  {
    id: "tv-a2-04",
    title: "Die Industrielle Revolution und ihre Folgen",
    text: `Die Industrielle Revolution, die in der zweiten Hälfte des 18. Jahrhunderts in Großbritannien begann, markiert einen der tiefgreifendsten Umbrüche in der Menschheitsgeschichte. Die Erfindung und Weiterentwicklung der Dampfmaschine durch James Watt ermöglichte es erstmals, mechanische Energie in großem Maßstab zu nutzen, was die Textilproduktion, den Bergbau und das Transportwesen revolutionierte. Die Folgen waren weitreichend und ambivalent. Einerseits führte die Industrialisierung zu einem enormen Anstieg der Produktivität und langfristig zu einem höheren Lebensstandard für breite Bevölkerungsschichten. Andererseits waren die sozialen Kosten zunächst erheblich: Millionen von Landarbeitern strömten in die Städte, wo sie unter miserablen Bedingungen in Fabriken arbeiteten – Arbeitstage von 14 bis 16 Stunden, Kinderarbeit und fehlender Arbeitsschutz waren die Regel. Die Umweltverschmutzung nahm drastisch zu; Flüsse wurden zu Abwasserkanälen und die Luftqualität in Industriestädten war gesundheitsschädlich. Als Reaktion auf diese Missstände entstanden Arbeiterbewegungen und Gewerkschaften, die schrittweise Verbesserungen erkämpften: kürzere Arbeitszeiten, ein Verbot der Kinderarbeit und erste Ansätze einer Sozialgesetzgebung. Die Industrielle Revolution legte damit nicht nur den Grundstein für die moderne Wirtschaft, sondern auch für den modernen Sozialstaat.`,
    fragen: [
      {
        id: "tv-a2-04-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Industrielle Revolution begann in der ersten Hälfte des 18. Jahrhunderts in Frankreich.",
          },
          {
            nr: 2,
            text: "Arbeitstage von 14 bis 16 Stunden und Kinderarbeit waren in den frühen Fabriken die Regel.",
          },
          {
            nr: 3,
            text: "Die Industrielle Revolution legte den Grundstein für die moderne Wirtschaft und den modernen Sozialstaat.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Laut Text begann die Industrielle Revolution in der zweiten Hälfte des 18. Jahrhunderts in Großbritannien, nicht in der ersten Hälfte und nicht in Frankreich. Aussage 2 ist richtig: Der Text nennt explizit diese Arbeitsbedingungen. Aussage 3 ist richtig: Der letzte Satz des Textes formuliert genau diese doppelte Grundsteinlegung.",
      },
      {
        id: "tv-a2-04-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "James Watt erfand die Dampfmaschine und revolutionierte damit die Textilproduktion, den Bergbau und das Transportwesen.",
          },
          {
            nr: 2,
            text: "Die Folgen der Industriellen Revolution werden im Text als ambivalent beschrieben.",
          },
          {
            nr: 3,
            text: "Gewerkschaften erkämpften unter anderem kürzere Arbeitszeiten und ein Verbot der Kinderarbeit.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "2. und 3. sind richtig." },
          { key: "B", beschreibung: "Nur 1. ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Der Text spricht von der "Erfindung und Weiterentwicklung" der Dampfmaschine durch Watt – er hat sie also nicht allein erfunden, sondern weiterentwickelt. Die Formulierung "erfand die Dampfmaschine" ist daher nicht korrekt ableitbar. Aussage 2 ist richtig: Der Text verwendet explizit das Wort "ambivalent". Aussage 3 ist richtig: Der Text nennt kürzere Arbeitszeiten und ein Verbot der Kinderarbeit als erkämpfte Verbesserungen.',
      },
    ],
  },

  // =========================================================================
  // SET 3 – Text 5: Warum Musik Emotionen auslöst
  // =========================================================================
  {
    id: "tv-a2-05",
    title: "Warum Musik Emotionen auslöst",
    text: `Musik hat die bemerkenswerte Fähigkeit, starke emotionale Reaktionen hervorzurufen – von Freude und Euphorie bis hin zu Trauer und Nostalgie. Neurowissenschaftliche Untersuchungen zeigen, dass beim Hören von als angenehm empfundener Musik das Belohnungssystem des Gehirns aktiviert wird, insbesondere der Nucleus accumbens, der auch bei anderen Belohnungsreizen wie Nahrung oder sozialer Interaktion eine Rolle spielt. Dabei wird der Neurotransmitter Dopamin ausgeschüttet, was das Glücksgefühl erklärt, das viele Menschen beim Musikhören empfinden. Besonders intensiv sind die emotionalen Reaktionen an sogenannten musikalischen Höhepunkten – Momenten, in denen eine Melodie eine erwartete Auflösung erreicht oder eine unerwartete harmonische Wendung nimmt. Dieses Wechselspiel aus Erwartung und Überraschung scheint ein Schlüsselelement der emotionalen Wirkung von Musik zu sein. Kulturelle Prägung spielt ebenfalls eine Rolle: Dur-Tonarten werden in westlichen Kulturen typischerweise als fröhlich empfunden, Moll-Tonarten als traurig, doch diese Zuordnung ist nicht universell. Studien mit Angehörigen isolierter Gemeinschaften, die mit westlicher Musik nicht vertraut waren, zeigten, dass die emotionale Interpretation von Dur und Moll kulturell erlernt und nicht angeboren ist.`,
    fragen: [
      {
        id: "tv-a2-05-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Beim Musikhören wird der Neurotransmitter Serotonin im Nucleus accumbens ausgeschüttet.",
          },
          {
            nr: 2,
            text: "Die Zuordnung von Dur als fröhlich und Moll als traurig ist kulturell erlernt, nicht angeboren.",
          },
          {
            nr: 3,
            text: "Das Wechselspiel aus Erwartung und Überraschung ist ein Schlüsselelement der emotionalen Wirkung von Musik.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text nennt Dopamin als ausgeschütteten Neurotransmitter, nicht Serotonin. Aussage 2 ist richtig: Der Text stellt explizit fest, dass diese Zuordnung kulturell erlernt und nicht angeboren ist. Aussage 3 ist richtig: Der Text beschreibt das Wechselspiel aus Erwartung und Überraschung als Schlüsselelement.",
      },
      {
        id: "tv-a2-05-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Nucleus accumbens spielt auch bei Belohnungsreizen wie Nahrung eine Rolle.",
          },
          {
            nr: 2,
            text: "Musikalische Höhepunkte sind Momente, in denen die Melodie abrupt endet.",
          },
          {
            nr: 3,
            text: "Alle Menschen weltweit empfinden Moll-Tonarten als traurig.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist richtig: Der Text nennt den Nucleus accumbens als Struktur, die auch bei Belohnungsreizen wie Nahrung aktiv ist. Aussage 2 ist falsch: Musikalische Höhepunkte werden als Momente beschrieben, in denen eine Melodie eine erwartete Auflösung erreicht oder eine unerwartete harmonische Wendung nimmt – nicht als abruptes Ende. Aussage 3 ist falsch: Der Text betont, dass die Zuordnung Dur = fröhlich / Moll = traurig nicht universell ist.",
      },
    ],
  },

  // =========================================================================
  // SET 4 – Text 1: Epigenetik: Gene und Umwelt
  // =========================================================================
  {
    id: "tv-a2-06",
    title: "Epigenetik: Gene und Umwelt",
    text: `Die Epigenetik untersucht Veränderungen der Genaktivität, die nicht auf Änderungen der DNA-Sequenz selbst zurückgehen, sondern auf chemische Modifikationen, die bestimmen, ob und wie stark ein Gen abgelesen wird. Die bekannteste dieser Modifikationen ist die DNA-Methylierung, bei der Methylgruppen an bestimmte Stellen der DNA angelagert werden und so das Ablesen eines Gens unterdrücken können. Auch Veränderungen an Histonen – den Proteinen, um die die DNA gewickelt ist – beeinflussen die Genaktivität. Das Revolutionäre an der Epigenetik ist die Erkenntnis, dass Umweltfaktoren wie Ernährung, Stress, Schadstoffbelastung und soziale Erfahrungen epigenetische Veränderungen hervorrufen können. Tierversuche haben gezeigt, dass Stress bei trächtigen Mäusen epigenetische Veränderungen im Nachwuchs bewirken kann, die dessen Stressreaktion dauerhaft beeinflusst. Noch bemerkenswerter ist die Beobachtung, dass manche epigenetischen Veränderungen über Generationen hinweg weitergegeben werden können – ein Phänomen, das als transgenerationale epigenetische Vererbung bezeichnet wird. Diese Erkenntnisse haben auch Auswirkungen auf die Medizin: Fehlregulierte epigenetische Mechanismen werden mit der Entstehung von Krebs, Autoimmunerkrankungen und psychischen Störungen in Verbindung gebracht, und epigenetische Therapien sind ein wachsendes Forschungsfeld.`,
    fragen: [
      {
        id: "tv-a2-06-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Epigenetische Veränderungen beruhen auf Änderungen der DNA-Sequenz selbst.",
          },
          {
            nr: 2,
            text: "DNA-Methylierung kann das Ablesen eines Gens unterdrücken.",
          },
          {
            nr: 3,
            text: "Manche epigenetischen Veränderungen können über Generationen weitergegeben werden.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Der Text definiert Epigenetik explizit als Veränderungen, die nicht auf Änderungen der DNA-Sequenz zurückgehen. Aussage 2 ist richtig: Der Text beschreibt DNA-Methylierung als Mechanismus, der das Ablesen unterdrücken kann. Aussage 3 ist richtig: Transgenerationale epigenetische Vererbung wird im Text explizit erwähnt.",
      },
      {
        id: "tv-a2-06-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Stress bei trächtigen Mäusen kann epigenetische Veränderungen im Nachwuchs bewirken.",
          },
          {
            nr: 2,
            text: "Epigenetische Therapien haben bereits alle herkömmlichen Krebsbehandlungen ersetzt.",
          },
          {
            nr: 3,
            text: "Fehlregulierte epigenetische Mechanismen werden mit Krebs, Autoimmunerkrankungen und psychischen Störungen in Verbindung gebracht.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist richtig: Der Text beschreibt diesen Zusammenhang bei Tierversuchen mit Mäusen. Aussage 2 ist falsch: Der Text bezeichnet epigenetische Therapien als "wachsendes Forschungsfeld" – sie haben herkömmliche Behandlungen keineswegs ersetzt. Aussage 3 ist richtig: Genau diese drei Krankheitskategorien werden im Text genannt.',
      },
    ],
  },

  // =========================================================================
  // SET 4 – Text 2: Der Utilitarismus als ethische Theorie
  // =========================================================================
  {
    id: "tv-a2-07",
    title: "Der Utilitarismus als ethische Theorie",
    text: `Der Utilitarismus ist eine ethische Theorie, die im 18. und 19. Jahrhundert maßgeblich von den britischen Philosophen Jeremy Bentham und John Stuart Mill entwickelt wurde. Ihr Grundprinzip lautet, dass eine Handlung dann moralisch richtig ist, wenn sie das größtmögliche Glück für die größtmögliche Zahl von Menschen hervorbringt. Bentham formulierte das „Prinzip der Nützlichkeit" und versuchte, Glück quantitativ zu messen – anhand von Kriterien wie Intensität, Dauer, Gewissheit und Nähe eines Vergnügens. Mill modifizierte diesen Ansatz, indem er zwischen höheren und niederen Freuden unterschied: Intellektuelle und moralische Freuden seien qualitativ wertvoller als rein körperliche. Der Utilitarismus hatte großen Einfluss auf Gesetzgebung und Sozialpolitik, da er eine rationale Grundlage für die Bewertung politischer Maßnahmen bietet. Kritiker wenden jedoch ein, dass die Theorie individuelle Rechte zugunsten des Gesamtwohls opfern könnte: Wenn die Folter eines Einzelnen das Leid vieler verhindert, wäre sie nach streng utilitaristischer Logik gerechtfertigt. Zudem sei es praktisch unmöglich, alle Konsequenzen einer Handlung vorherzusehen und das Glück verschiedener Menschen vergleichend zu quantifizieren. Moderne Varianten wie der Regelutilitarismus versuchen diese Probleme zu lösen, indem sie nicht einzelne Handlungen, sondern allgemeine Handlungsregeln nach ihrem Nutzen bewerten.`,
    fragen: [
      {
        id: "tv-a2-07-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Bentham versuchte Glück anhand von Kriterien wie Intensität, Dauer, Gewissheit und Nähe zu messen.",
          },
          {
            nr: 2,
            text: "Mill lehnte das Prinzip der Nützlichkeit vollständig ab.",
          },
          {
            nr: 3,
            text: "Der Regelutilitarismus bewertet allgemeine Handlungsregeln statt einzelner Handlungen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist richtig: Der Text nennt genau diese Kriterien für Benthams Glücksmessung. Aussage 2 ist falsch: Mill lehnte das Prinzip nicht ab, sondern modifizierte Benthams Ansatz, indem er zwischen höheren und niederen Freuden unterschied. Aussage 3 ist richtig: Der Text beschreibt den Regelutilitarismus als Variante, die allgemeine Handlungsregeln nach ihrem Nutzen bewertet.",
      },
      {
        id: "tv-a2-07-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Kritiker bemängeln, dass der Utilitarismus individuelle Rechte zugunsten des Gesamtwohls opfern könnte.",
          },
          {
            nr: 2,
            text: "Mill bewertete intellektuelle Freuden als qualitativ wertvoller als rein körperliche.",
          },
          {
            nr: 3,
            text: "Der Utilitarismus wurde ausschließlich von Bentham entwickelt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 3. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "1. und 2. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist richtig: Der Text beschreibt genau diese Kritik mit dem Folter-Beispiel. Aussage 2 ist richtig: Der Text sagt, Mill bewertete intellektuelle und moralische Freuden als qualitativ wertvoller als rein körperliche. Aussage 3 ist falsch: Der Text nennt sowohl Bentham als auch Mill als Entwickler der Theorie.",
      },
    ],
  },

  // =========================================================================
  // SET 4 – Text 3: Das Phänomen Déjà-vu
  // =========================================================================
  {
    id: "tv-a2-08",
    title: "Das Phänomen Déjà-vu",
    text: `Fast jeder Mensch hat schon einmal ein Déjà-vu erlebt – das intensive Gefühl, eine Situation bereits zuvor erlebt zu haben, obwohl sie objektiv neu ist. Der Begriff stammt aus dem Französischen und bedeutet wörtlich „schon gesehen". Studien zufolge berichten etwa 60 bis 80 Prozent der Bevölkerung, mindestens einmal ein Déjà-vu gehabt zu haben. Das Phänomen tritt besonders häufig bei jungen Erwachsenen auf und nimmt mit zunehmendem Alter ab. Die genauen Ursachen sind wissenschaftlich noch nicht abschließend geklärt, doch eine führende Hypothese erklärt Déjà-vus als eine Art Gedächtnisfehler: Normalerweise wird eine neue Erfahrung zunächst wahrgenommen und dann als Erinnerung gespeichert. Bei einem Déjà-vu könnte es zu einer Fehlfunktion kommen, bei der das Gehirn eine aktuelle Wahrnehmung fälschlicherweise als Erinnerung einstuft. Eine andere Theorie besagt, dass Déjà-vus auftreten, wenn die aktuelle Umgebung einer früheren ähnelt, die nicht mehr bewusst erinnert wird. Das Gehirn erkennt die Ähnlichkeit unbewusst, ohne die konkrete Quelle benennen zu können. Bemerkenswert ist, dass Déjà-vus bei Epilepsiepatienten mit Temporallappenepilepsie deutlich häufiger auftreten und dort sogar als Vorboten eines epileptischen Anfalls gelten können, was die Beteiligung des Temporallappens an diesem Phänomen nahelegt.`,
    fragen: [
      {
        id: "tv-a2-08-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Déjà-vus treten mit zunehmendem Alter häufiger auf.",
          },
          {
            nr: 2,
            text: "Etwa 60 bis 80 Prozent der Bevölkerung berichten, mindestens einmal ein Déjà-vu gehabt zu haben.",
          },
          {
            nr: 3,
            text: "Déjà-vus bei Epilepsiepatienten mit Temporallappenepilepsie können als Vorboten eines Anfalls gelten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt das Gegenteil – Déjà-vus treten besonders häufig bei jungen Erwachsenen auf und nehmen mit zunehmendem Alter ab. Aussage 2 ist richtig: Der Text nennt genau diese Prozentzahl. Aussage 3 ist richtig: Der Text beschreibt Déjà-vus bei Temporallappenepilepsie als mögliche Vorboten eines Anfalls.",
      },
      {
        id: "tv-a2-08-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die genauen Ursachen von Déjà-vus sind wissenschaftlich abschließend geklärt.",
          },
          {
            nr: 2,
            text: "Eine Theorie erklärt Déjà-vus als Gedächtnisfehler, bei dem das Gehirn eine aktuelle Wahrnehmung als Erinnerung einstuft.",
          },
          {
            nr: 3,
            text: 'Der Begriff Déjà-vu bedeutet wörtlich „schon gehört".',
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Der Text sagt explizit, dass die Ursachen "noch nicht abschließend geklärt" sind. Aussage 2 ist richtig: Der Text beschreibt diese Hypothese als führend. Aussage 3 ist falsch: Laut Text bedeutet Déjà-vu "schon gesehen", nicht "schon gehört".',
      },
    ],
  },

  // =========================================================================
  // SET 4 – Text 4: Der Halo-Effekt in der Sozialpsychologie
  // =========================================================================
  {
    id: "tv-a2-09",
    title: "Der Halo-Effekt in der Sozialpsychologie",
    text: `Der Halo-Effekt, erstmals 1920 vom amerikanischen Psychologen Edward Thorndike beschrieben, ist eine kognitive Verzerrung, bei der ein einzelnes positives Merkmal einer Person die Wahrnehmung ihrer anderen Eigenschaften beeinflusst. Der Name leitet sich vom Heiligenschein (englisch: halo) ab, der eine Person umgibt und alles in günstigem Licht erscheinen lässt. Ein klassisches Beispiel: Attraktive Menschen werden häufig auch als intelligenter, kompetenter und vertrauenswürdiger eingeschätzt, obwohl es keinen objektiven Zusammenhang zwischen Aussehen und diesen Eigenschaften gibt. Der Halo-Effekt wirkt auch in die umgekehrte Richtung – ein einzelnes negatives Merkmal kann dazu führen, dass eine Person insgesamt negativer beurteilt wird, was als Horn-Effekt bezeichnet wird. In Bewerbungsverfahren hat der Halo-Effekt besondere Relevanz: Ein souveräner erster Eindruck kann dazu führen, dass Schwächen des Bewerbers übersehen werden, während ein unsicheres Auftreten die Wahrnehmung vorhandener Stärken trübt. Auch in der Markenwahrnehmung spielt der Effekt eine Rolle – ein erfolgreiches Produkt eines Unternehmens kann die Bewertung aller anderen Produkte derselben Marke positiv beeinflussen. Strukturierte Interviews und standardisierte Bewertungskriterien werden als Maßnahmen empfohlen, um den Halo-Effekt in professionellen Kontexten zu reduzieren.`,
    fragen: [
      {
        id: "tv-a2-09-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Halo-Effekt wurde erstmals 1920 von Sigmund Freud beschrieben.",
          },
          {
            nr: 2,
            text: "Der Horn-Effekt beschreibt das Phänomen, dass ein einzelnes negatives Merkmal die Gesamtbeurteilung verschlechtert.",
          },
          {
            nr: 3,
            text: "Strukturierte Interviews werden als Maßnahme empfohlen, um den Halo-Effekt zu reduzieren.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Der Text nennt Edward Thorndike als Erstbeschreiber, nicht Sigmund Freud. Aussage 2 ist richtig: Der Text definiert den Horn-Effekt genau so. Aussage 3 ist richtig: Strukturierte Interviews werden im Text explizit als empfohlene Maßnahme genannt.",
      },
      {
        id: "tv-a2-09-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Es gibt einen objektiven Zusammenhang zwischen Attraktivität und Intelligenz.",
          },
          {
            nr: 2,
            text: "Ein erfolgreiches Produkt kann die Bewertung aller anderen Produkte derselben Marke positiv beeinflussen.",
          },
          {
            nr: 3,
            text: 'Der Name "Halo-Effekt" leitet sich vom Heiligenschein ab.',
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "2. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt explizit, dass es keinen objektiven Zusammenhang zwischen Aussehen und Intelligenz/Kompetenz gibt. Aussage 2 ist richtig: Der Text beschreibt diesen Effekt in der Markenwahrnehmung. Aussage 3 ist richtig: Der Text erklärt die Namensherkunft vom Heiligenschein (halo).",
      },
    ],
  },

  // =========================================================================
  // SET 4 – Text 5: Auftauender Permafrost und Klimawandel
  // =========================================================================
  {
    id: "tv-a2-10",
    title: "Auftauender Permafrost und Klimawandel",
    text: `Permafrost ist Boden, der über mindestens zwei aufeinanderfolgende Jahre hinweg ununterbrochen gefroren bleibt. Er bedeckt etwa ein Viertel der Landoberfläche der Nordhalbkugel, vor allem in Sibirien, Alaska, Kanada und Skandinavien. Der Permafrost enthält enorme Mengen an organischem Material – abgestorbene Pflanzenreste und Tierkadaver, die über Jahrtausende unter Luftabschluss konserviert wurden. Wissenschaftler schätzen, dass im Permafrost etwa 1.500 Gigatonnen Kohlenstoff gespeichert sind – fast doppelt so viel wie in der gesamten Erdatmosphäre. Durch die globale Erwärmung taut der Permafrost in vielen Regionen auf, und Mikroorganismen beginnen, das freigesetzte organische Material zu zersetzen. Dabei entstehen die Treibhausgase Kohlendioxid und Methan. Methan ist als Treibhausgas etwa 80-mal wirksamer als CO₂ über einen Zeitraum von 20 Jahren. Die Freisetzung dieser Gase kann die Erderwärmung weiter beschleunigen, was wiederum mehr Permafrost zum Auftauen bringt – ein Rückkopplungsmechanismus, der als Permafrost-Klima-Rückkopplung bezeichnet wird. Neben den klimatischen Folgen hat das Auftauen des Permafrosts auch direkte Auswirkungen auf die Infrastruktur: In betroffenen Regionen werden Gebäude, Straßen und Pipelines destabilisiert, da der Untergrund seine Festigkeit verliert.`,
    fragen: [
      {
        id: "tv-a2-10-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Im Permafrost sind etwa 1.500 Gigatonnen Kohlenstoff gespeichert – fast doppelt so viel wie in der Erdatmosphäre.",
          },
          {
            nr: 2,
            text: "Methan ist als Treibhausgas etwa 80-mal wirksamer als CO₂ über einen Zeitraum von 100 Jahren.",
          },
          {
            nr: 3,
            text: "Die Freisetzung von Treibhausgasen aus dem Permafrost kann die Erderwärmung weiter beschleunigen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist richtig: Der Text nennt genau diese Zahl und den Vergleich. Aussage 2 ist falsch: Der Text sagt, Methan sei 80-mal wirksamer über einen Zeitraum von 20 Jahren, nicht 100 Jahren. Aussage 3 ist richtig: Der Text beschreibt den Rückkopplungsmechanismus, bei dem freigesetzte Gase die Erwärmung beschleunigen.",
      },
      {
        id: "tv-a2-10-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Permafrost bedeckt etwa die Hälfte der Landoberfläche der Nordhalbkugel.",
          },
          {
            nr: 2,
            text: "Das Auftauen des Permafrosts destabilisiert Gebäude, Straßen und Pipelines.",
          },
          {
            nr: 3,
            text: "Beim Auftauen des Permafrosts zersetzen Mikroorganismen das freigesetzte organische Material.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt etwa ein Viertel, nicht die Hälfte der Landoberfläche. Aussage 2 ist richtig: Der Text beschreibt die Destabilisierung von Gebäuden, Straßen und Pipelines. Aussage 3 ist richtig: Der Text erklärt, dass Mikroorganismen das freigesetzte organische Material zersetzen.",
      },
      {
        id: "tv-a2-10-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Permafrost ist Boden, der über mindestens fünf Jahre gefroren bleibt.",
          },
          {
            nr: 2,
            text: "Der Rückkopplungsmechanismus wird als Permafrost-Klima-Rückkopplung bezeichnet.",
          },
          {
            nr: 3,
            text: "Im Permafrost konserviertes organisches Material umfasst abgestorbene Pflanzenreste und Tierkadaver.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 2. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist falsch: Der Text definiert Permafrost als Boden, der mindestens zwei aufeinanderfolgende Jahre gefroren bleibt, nicht fünf. Aussage 2 ist richtig: Der Text nennt diesen Begriff explizit. Aussage 3 ist richtig: Der Text beschreibt das konservierte Material als "abgestorbene Pflanzenreste und Tierkadaver".',
      },
    ],
  },

  // =========================================================================
  // SET 6 – Text 1: Grundlagen der Immunologie
  // =========================================================================
  {
    id: "tv-a2-11",
    title: "Grundlagen der Immunologie",
    text: `Das menschliche Immunsystem ist ein hochkomplexes Netzwerk aus Zellen, Geweben und Organen, das den Körper vor Krankheitserregern wie Bakterien, Viren, Pilzen und Parasiten schützt. Man unterscheidet grundsätzlich zwischen dem angeborenen und dem erworbenen Immunsystem. Das angeborene Immunsystem stellt die erste Verteidigungslinie dar und reagiert schnell, aber unspezifisch auf Eindringlinge. Dazu gehören physikalische Barrieren wie die Haut und Schleimhäute, aber auch zelluläre Bestandteile wie Makrophagen und natürliche Killerzellen. Makrophagen sind Fresszellen, die Erreger aufnehmen und verdauen können, wobei sie gleichzeitig Signalstoffe freisetzen, die weitere Immunzellen zum Infektionsort locken. Dieser Prozess wird als Entzündungsreaktion bezeichnet und äußert sich typischerweise durch Rötung, Schwellung, Wärme und Schmerz. Das erworbene Immunsystem hingegen arbeitet hochspezifisch und benötigt nach dem Erstkontakt mit einem Erreger einige Tage, um eine maßgeschneiderte Abwehr aufzubauen. Die Hauptakteure sind dabei die B-Lymphozyten und die T-Lymphozyten. B-Lymphozyten produzieren Antikörper, die gezielt an Oberflächenstrukturen der Erreger, sogenannte Antigene, binden und diese so für die Zerstörung markieren. T-Lymphozyten lassen sich in verschiedene Untergruppen einteilen: T-Helferzellen koordinieren die Immunantwort, indem sie andere Immunzellen aktivieren, während zytotoxische T-Zellen infizierte Körperzellen direkt abtöten können. Eine besondere Eigenschaft des erworbenen Immunsystems ist das immunologische Gedächtnis. Nach einer überstandenen Infektion verbleiben sogenannte Gedächtniszellen im Körper, die bei einem erneuten Kontakt mit demselben Erreger eine deutlich schnellere und stärkere Immunantwort ermöglichen. Dieses Prinzip bildet die Grundlage der Impfung: Durch die Verabreichung abgeschwächter oder inaktivierter Erreger beziehungsweise deren Bestandteile wird das Immunsystem trainiert, ohne dass die Krankheit ausbricht. So entsteht ein Schutz, der im Idealfall Jahre oder sogar ein Leben lang anhält. Störungen des Immunsystems können zu Autoimmunerkrankungen führen, bei denen sich die Abwehr irrtümlich gegen körpereigene Strukturen richtet, oder zu Immundefizienzen, bei denen die Abwehr geschwächt ist und Infektionen gehäuft auftreten.`,
    fragen: [
      {
        id: "tv-a2-11-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Das angeborene Immunsystem reagiert hochspezifisch auf einzelne Erreger.",
          },
          {
            nr: 2,
            text: "Makrophagen setzen Signalstoffe frei, die weitere Immunzellen zum Infektionsort locken.",
          },
          {
            nr: 3,
            text: "Zytotoxische T-Zellen können infizierte Körperzellen direkt abtöten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Das angeborene Immunsystem reagiert schnell, aber unspezifisch – nicht hochspezifisch. Hochspezifisch arbeitet das erworbene Immunsystem. Aussage 2 ist richtig: Der Text beschreibt genau diese Funktion der Makrophagen. Aussage 3 ist richtig: Der Text nennt das direkte Abtöten infizierter Körperzellen als Funktion zytotoxischer T-Zellen.",
      },
      {
        id: "tv-a2-11-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "B-Lymphozyten produzieren Antikörper, die an Antigene binden und Erreger für die Zerstörung markieren.",
          },
          {
            nr: 2,
            text: "Impfungen basieren auf dem Prinzip des immunologischen Gedächtnisses.",
          },
          {
            nr: 3,
            text: "Bei Autoimmunerkrankungen ist die Immunabwehr geschwächt und Infektionen treten gehäuft auf.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 2. sind richtig." },
          { key: "B", beschreibung: "Nur 3. ist richtig." },
          { key: "C", beschreibung: "Alle sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist richtig: Der Text beschreibt genau diese Funktion der B-Lymphozyten. Aussage 2 ist richtig: Der Text verbindet Gedächtniszellen und Impfung als Grundlage. Aussage 3 ist falsch: Bei Autoimmunerkrankungen richtet sich die Abwehr irrtümlich gegen körpereigene Strukturen – die geschwächte Abwehr mit gehäuften Infektionen beschreibt der Text als Immundefizienzen, nicht als Autoimmunerkrankungen.",
      },
      {
        id: "tv-a2-11-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Entzündungsreaktion äußert sich typischerweise durch Rötung, Schwellung, Wärme und Schmerz.",
          },
          {
            nr: 2,
            text: "T-Helferzellen töten infizierte Zellen direkt ab.",
          },
          {
            nr: 3,
            text: "Das erworbene Immunsystem benötigt nach dem Erstkontakt einige Tage, um eine Abwehr aufzubauen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist richtig: Der Text nennt genau diese vier typischen Anzeichen einer Entzündungsreaktion. Aussage 2 ist falsch: T-Helferzellen koordinieren die Immunantwort, indem sie andere Immunzellen aktivieren – das direkte Abtöten ist die Funktion der zytotoxischen T-Zellen. Aussage 3 ist richtig: Der Text beschreibt, dass das erworbene Immunsystem einige Tage benötigt.",
      },
    ],
  },

  // =========================================================================
  // SET 6 – Text 2: Stammzellen und ihre Bedeutung für die Medizin
  // =========================================================================
  {
    id: "tv-a2-12",
    title: "Stammzellen und ihre Bedeutung für die Medizin",
    text: `Stammzellen sind undifferenzierte Zellen, die über zwei besondere Fähigkeiten verfügen: Sie können sich durch Zellteilung selbst erneuern und sich unter bestimmten Bedingungen in spezialisierte Zelltypen wie Muskelzellen, Nervenzellen oder Blutzellen differenzieren. In der biologischen Forschung und der Medizin spielen Stammzellen eine zentrale Rolle, da sie das Potenzial besitzen, geschädigtes Gewebe zu reparieren oder zu ersetzen. Man unterscheidet verschiedene Arten von Stammzellen. Embryonale Stammzellen werden aus der inneren Zellmasse der Blastozyste gewonnen, einem frühen Entwicklungsstadium des Embryos, das etwa fünf Tage nach der Befruchtung erreicht wird. Diese Zellen gelten als pluripotent, da sie sich in nahezu jeden Zelltyp des Körpers differenzieren können. Adulte Stammzellen hingegen finden sich in verschiedenen Geweben des erwachsenen Organismus, beispielsweise im Knochenmark, in der Haut oder im Darm. Sie sind in der Regel multipotent, das heißt, sie können sich nur in eine begrenzte Anzahl von Zelltypen entwickeln. Hämatopoetische Stammzellen im Knochenmark etwa können alle Zelltypen des Blutes hervorbringen, jedoch keine Nervenzellen oder Muskelzellen bilden. Ein Durchbruch gelang im Jahr 2006, als der japanische Forscher Shinya Yamanaka zeigte, dass sich bereits ausdifferenzierte Körperzellen durch die Einführung bestimmter Gene in einen stammzellähnlichen Zustand zurückversetzen lassen. Diese sogenannten induzierten pluripotenten Stammzellen, kurz iPS-Zellen, eröffneten völlig neue Perspektiven für die regenerative Medizin, da sie ethische Bedenken umgehen, die mit der Verwendung embryonaler Stammzellen verbunden sind. In der klinischen Praxis werden Stammzellen bereits seit Jahrzehnten bei Knochenmarktransplantationen eingesetzt, etwa zur Behandlung von Leukämie und anderen Erkrankungen des blutbildenden Systems. Aktuelle Forschungsprojekte untersuchen darüber hinaus den Einsatz von Stammzellen bei neurodegenerativen Erkrankungen wie Parkinson und Alzheimer, bei Herzinfarkten sowie bei Rückenmarksverletzungen. Trotz vielversprechender Ergebnisse in Tierversuchen stehen viele dieser Therapien beim Menschen jedoch noch am Anfang, und Risiken wie die unkontrollierte Zellteilung, die zur Tumorbildung führen könnte, müssen sorgfältig erforscht werden.`,
    fragen: [
      {
        id: "tv-a2-12-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Embryonale Stammzellen gelten als multipotent.",
          },
          {
            nr: 2,
            text: "iPS-Zellen umgehen ethische Bedenken, die mit embryonalen Stammzellen verbunden sind.",
          },
          {
            nr: 3,
            text: "Hämatopoetische Stammzellen können alle Zelltypen des Blutes hervorbringen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Embryonale Stammzellen gelten als pluripotent, nicht multipotent. Multipotent sind die adulten Stammzellen. Aussage 2 ist richtig: Der Text nennt das Umgehen ethischer Bedenken als Vorteil der iPS-Zellen. Aussage 3 ist richtig: Der Text beschreibt, dass hämatopoetische Stammzellen alle Blutzelltypen hervorbringen können.",
      },
      {
        id: "tv-a2-12-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Yamanaka entdeckte iPS-Zellen im Jahr 2006.",
          },
          {
            nr: 2,
            text: "Die unkontrollierte Zellteilung ist ein mögliches Risiko der Stammzelltherapie.",
          },
          {
            nr: 3,
            text: "Stammzelltherapien für neurodegenerative Erkrankungen sind bereits etabliert und werden routinemäßig angewendet.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 2. sind richtig." },
          { key: "B", beschreibung: "Nur 3. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist richtig: Der Text nennt das Jahr 2006 für Yamanakas Durchbruch. Aussage 2 ist richtig: Der Text warnt vor dem Risiko unkontrollierter Zellteilung und möglicher Tumorbildung. Aussage 3 ist falsch: Der Text sagt explizit, dass viele dieser Therapien beim Menschen noch am Anfang stehen.",
      },
    ],
  },

  // =========================================================================
  // SET 6 – Text 3: Prionen – Infektiöse Proteine
  // =========================================================================
  {
    id: "tv-a2-13",
    title: "Prionen – Infektiöse Proteine",
    text: `Prionen sind eine ungewöhnliche Klasse von Krankheitserregern, die sich grundlegend von Bakterien, Viren und Parasiten unterscheiden. Während alle anderen bekannten Erreger genetisches Material in Form von DNA oder RNA enthalten, bestehen Prionen ausschließlich aus fehlgefalteten Proteinen. Der Begriff wurde 1982 vom amerikanischen Neurologen Stanley Prusiner geprägt und leitet sich von dem englischen Ausdruck proteinaceous infectious particle ab. Prusiner erhielt für seine Entdeckung 1997 den Nobelpreis für Physiologie oder Medizin, obwohl seine Theorie zunächst auf erheblichen Widerstand in der wissenschaftlichen Gemeinschaft stieß. Das normale Prion-Protein, abgekürzt PrPC, kommt natürlicherweise auf der Oberfläche von Nervenzellen vor und spielt vermutlich eine Rolle beim Zellschutz und der Signalübertragung. Bei der Prionenerkrankung wandelt sich dieses Protein in eine pathologische Form um, die als PrPSc bezeichnet wird. Das fehlgefaltete Protein zeichnet sich durch einen erhöhten Anteil an Beta-Faltblatt-Strukturen aus, was es extrem widerstandsfähig gegen Hitze, UV-Strahlung, chemische Desinfektionsmittel und sogar Proteasen macht – Enzyme, die normalerweise Proteine abbauen. Das Gefährliche an PrPSc ist seine Fähigkeit, benachbarte normale Prion-Proteine in die pathologische Form umzufalten. Dadurch entsteht eine Kettenreaktion, die zu einer fortschreitenden Ansammlung fehlgefalteter Proteine im Gehirn führt. Diese Ablagerungen zerstören nach und nach Nervenzellen und hinterlassen im Hirngewebe charakteristische schwammartige Hohlräume, weshalb man von spongiformen Enzephalopathien spricht. Zu den bekanntesten Prionenerkrankungen gehören die Creutzfeldt-Jakob-Krankheit beim Menschen, die bovine spongiforme Enzephalopathie, bekannt als Rinderwahnsinn, bei Rindern sowie Scrapie bei Schafen. Alle Prionenerkrankungen verlaufen tödlich, und bis heute gibt es keine wirksame Therapie. Die Symptome umfassen rasch fortschreitende Demenz, Bewegungsstörungen und Persönlichkeitsveränderungen. Die Inkubationszeit kann jedoch Jahre bis Jahrzehnte betragen, was die Diagnose und die Erforschung zusätzlich erschwert.`,
    fragen: [
      {
        id: "tv-a2-13-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Prionen enthalten genetisches Material in Form von RNA.",
          },
          {
            nr: 2,
            text: "Prusiner erhielt 1997 den Nobelpreis, obwohl seine Theorie zunächst auf Widerstand stieß.",
          },
          {
            nr: 3,
            text: "Alle Prionenerkrankungen verlaufen tödlich und es gibt bis heute keine wirksame Therapie.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Prionen enthalten kein genetisches Material – sie bestehen ausschließlich aus fehlgefalteten Proteinen. Aussage 2 ist richtig: Der Text beschreibt den Nobelpreis 1997 und den anfänglichen Widerstand. Aussage 3 ist richtig: Der Text stellt beides explizit fest.",
      },
      {
        id: "tv-a2-13-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "PrPSc kann benachbarte normale Prion-Proteine in die pathologische Form umfalten.",
          },
          {
            nr: 2,
            text: "Das normale Prion-Protein PrPC kommt auf der Oberfläche von Muskelzellen vor.",
          },
          {
            nr: 3,
            text: "Die Inkubationszeit von Prionenerkrankungen kann Jahre bis Jahrzehnte betragen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist richtig: Der Text beschreibt die Fähigkeit von PrPSc, benachbarte Proteine umzufalten. Aussage 2 ist falsch: PrPC kommt laut Text auf der Oberfläche von Nervenzellen vor, nicht Muskelzellen. Aussage 3 ist richtig: Der Text nennt Jahre bis Jahrzehnte als Inkubationszeit.",
      },
    ],
  },

  // =========================================================================
  // SET 6 – Text 4: Antibiotikaresistenz – Eine globale Bedrohung
  // =========================================================================
  {
    id: "tv-a2-14",
    title: "Antibiotikaresistenz – Eine globale Bedrohung",
    text: `Seit der Entdeckung des Penicillins durch Alexander Fleming im Jahr 1928 haben Antibiotika die Medizin revolutioniert und unzählige Leben gerettet. Doch der zunehmende und oft unsachgemäße Einsatz dieser Medikamente hat zu einem wachsenden Problem geführt: der Antibiotikaresistenz. Resistente Bakterien sind Mikroorganismen, die die Fähigkeit entwickelt haben, der Wirkung von Antibiotika zu widerstehen, sodass Infektionen schwerer oder gar nicht mehr behandelbar werden. Resistenzen entstehen durch genetische Veränderungen in den Bakterien. Diese können spontan durch Mutationen auftreten oder durch den Austausch von Resistenzgenen zwischen verschiedenen Bakterienarten über horizontalen Gentransfer weitergegeben werden. Der Selektionsdruck durch Antibiotika begünstigt resistente Stämme: Während empfindliche Bakterien abgetötet werden, überleben resistente Varianten und vermehren sich ungehindert. Besonders besorgniserregend sind multiresistente Erreger wie der Methicillin-resistente Staphylococcus aureus, bekannt als MRSA, der gegen mehrere Antibiotikaklassen unempfindlich ist. Solche Keime treten gehäuft in Krankenhäusern auf, wo sie immungeschwächte Patienten besonders gefährden. Die Weltgesundheitsorganisation stuft Antibiotikaresistenz als eine der größten Bedrohungen für die globale Gesundheit ein. Schätzungen zufolge sterben weltweit jedes Jahr über eine Million Menschen an Infektionen mit resistenten Erregern, und Prognosen warnen davor, dass diese Zahl bis zur Mitte des Jahrhunderts drastisch ansteigen könnte, wenn keine Gegenmaßnahmen ergriffen werden. Die Ursachen des Problems sind vielfältig. In der Humanmedizin werden Antibiotika häufig bei viralen Infektionen verschrieben, obwohl sie nur gegen Bakterien wirksam sind. Auch das vorzeitige Absetzen einer Antibiotikatherapie begünstigt die Selektion resistenter Keime. In der Landwirtschaft werden große Mengen Antibiotika prophylaktisch in der Tiermast eingesetzt, was ebenfalls zur Verbreitung resistenter Bakterien beiträgt. Gegenstrategien umfassen die Entwicklung neuer Antibiotika, die Erforschung alternativer Therapieansätze wie Bakteriophagen und antimikrobielle Peptide sowie die Förderung eines verantwortungsvollen Umgangs mit bestehenden Antibiotika durch Aufklärungskampagnen und strengere Verschreibungsrichtlinien.`,
    fragen: [
      {
        id: "tv-a2-14-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Antibiotika sind gegen virale Infektionen wirksam.",
          },
          {
            nr: 2,
            text: "Resistenzgene können durch horizontalen Gentransfer zwischen verschiedenen Bakterienarten übertragen werden.",
          },
          {
            nr: 3,
            text: "Weltweit sterben jährlich über eine Million Menschen an Infektionen mit resistenten Erregern.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "2. und 3. sind richtig." },
          { key: "B", beschreibung: "Nur 1. ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt explizit, dass Antibiotika nur gegen Bakterien wirksam sind, obwohl sie häufig bei viralen Infektionen verschrieben werden. Aussage 2 ist richtig: Horizontaler Gentransfer wird als Übertragungsweg für Resistenzgene genannt. Aussage 3 ist richtig: Der Text nennt die Zahl von über einer Million Todesfällen jährlich.",
      },
      {
        id: "tv-a2-14-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "MRSA ist nur gegen eine einzige Antibiotikaklasse resistent.",
          },
          {
            nr: 2,
            text: "Bakteriophagen werden als alternativer Therapieansatz erforscht.",
          },
          {
            nr: 3,
            text: "Das vorzeitige Absetzen einer Antibiotikatherapie begünstigt die Selektion resistenter Keime.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: MRSA ist laut Text gegen mehrere Antibiotikaklassen unempfindlich, nicht nur gegen eine. Aussage 2 ist richtig: Bakteriophagen werden im Text als alternativer Therapieansatz genannt. Aussage 3 ist richtig: Der Text beschreibt das vorzeitige Absetzen explizit als begünstigenden Faktor.",
      },
    ],
  },

  // =========================================================================
  // SET 6 – Text 5: Die Geschichte und Herausforderungen der Organtransplantation
  // =========================================================================
  {
    id: "tv-a2-15",
    title: "Die Geschichte und Herausforderungen der Organtransplantation",
    text: `Die Organtransplantation zählt zu den bedeutendsten Errungenschaften der modernen Medizin. Die erste erfolgreiche Nierentransplantation wurde 1954 in Boston von Joseph Murray durchgeführt, wobei die Niere zwischen eineiigen Zwillingen übertragen wurde. Da die Zwillinge genetisch identisch waren, trat keine Abstoßungsreaktion auf. Murray erhielt für seine Pionierarbeit 1990 den Nobelpreis für Physiologie oder Medizin. In den folgenden Jahrzehnten gelang es, auch Herz, Leber, Lunge und Bauchspeicheldrüse erfolgreich zu transplantieren. Die größte Hürde war dabei stets die Abstoßungsreaktion des Immunsystems, das fremdes Gewebe als Bedrohung erkennt und angreift. Ein Meilenstein war die Entdeckung des Immunsuppressivums Ciclosporin in den 1970er-Jahren, das die Abstoßung transplantierter Organe wirksam unterdrückt und die Erfolgsrate von Transplantationen erheblich steigerte. Ciclosporin hemmt gezielt die Aktivierung von T-Lymphozyten, ohne das gesamte Immunsystem vollständig lahmzulegen. Dennoch müssen Transplantationspatienten in der Regel lebenslang Immunsuppressiva einnehmen, was das Risiko für Infektionen und bestimmte Krebserkrankungen erhöht. Ein weiteres zentrales Problem ist der chronische Mangel an Spenderorganen. In vielen Ländern übersteigt die Nachfrage das Angebot bei weitem, sodass zahlreiche Patienten auf den Wartelisten versterben. Um diesem Mangel zu begegnen, werden verschiedene Ansätze verfolgt. Einige Länder wie Österreich haben eine Widerspruchslösung eingeführt, bei der jeder Bürger automatisch als Organspender gilt, sofern er zu Lebzeiten nicht aktiv widersprochen hat. Andere Länder setzen auf die Zustimmungslösung, bei der eine ausdrückliche Einwilligung erforderlich ist. Darüber hinaus wird an der Xenotransplantation geforscht, also der Übertragung tierischer Organe auf den Menschen. Besonders Schweineherzen rücken dabei in den Fokus, da sie dem menschlichen Herzen in Größe und Funktion ähneln. Erste experimentelle Transplantationen genetisch veränderter Schweineherzen auf Menschen wurden bereits durchgeführt, jedoch bleiben die langfristigen Ergebnisse abzuwarten. Auch das sogenannte Tissue Engineering, bei dem Organe aus körpereigenen Zellen im Labor gezüchtet werden, bietet langfristig Hoffnung, den Organmangel zu überwinden.`,
    fragen: [
      {
        id: "tv-a2-15-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die erste erfolgreiche Nierentransplantation fand 1964 statt.",
          },
          {
            nr: 2,
            text: "Ciclosporin hemmt gezielt die Aktivierung von T-Lymphozyten.",
          },
          {
            nr: 3,
            text: "In Österreich gilt die Widerspruchslösung bei der Organspende.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Der Text nennt 1954, nicht 1964. Aussage 2 ist richtig: Der Text beschreibt die gezielte Hemmung der T-Lymphozyten durch Ciclosporin. Aussage 3 ist richtig: Der Text nennt Österreich als Beispiel für die Widerspruchslösung.",
      },
      {
        id: "tv-a2-15-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Xenotransplantation bezeichnet die Übertragung tierischer Organe auf den Menschen.",
          },
          {
            nr: 2,
            text: "Ciclosporin legt das gesamte Immunsystem vollständig lahm.",
          },
          {
            nr: 3,
            text: "Transplantationspatienten müssen in der Regel lebenslang Immunsuppressiva einnehmen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist richtig: Der Text definiert Xenotransplantation genau so. Aussage 2 ist falsch: Der Text sagt explizit, dass Ciclosporin die T-Lymphozyten hemmt, "ohne das gesamte Immunsystem vollständig lahmzulegen". Aussage 3 ist richtig: Der Text beschreibt die lebenslange Einnahme als Regelfall.',
      },
      {
        id: "tv-a2-15-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Schweineherzen werden für die Xenotransplantation erforscht, da sie dem menschlichen Herzen in Größe und Funktion ähneln.",
          },
          {
            nr: 2,
            text: "Murray erhielt den Nobelpreis für die Entdeckung von Ciclosporin.",
          },
          {
            nr: 3,
            text: "Beim Tissue Engineering werden Organe aus körpereigenen Zellen im Labor gezüchtet.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "Keine ist richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist richtig: Der Text beschreibt die Ähnlichkeit in Größe und Funktion als Grund. Aussage 2 ist falsch: Murray erhielt den Nobelpreis für seine Pionierarbeit bei der Nierentransplantation, nicht für die Entdeckung von Ciclosporin. Aussage 3 ist richtig: Der Text definiert Tissue Engineering als das Züchten von Organen aus körpereigenen Zellen im Labor.",
      },
    ],
  },
];
