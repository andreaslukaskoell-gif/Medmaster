import type { TVOffiziellText } from "./tvOffiziell";

export const tvAussagenSet3: TVOffiziellText[] = [
  // =========================================================================
  // 1. Ozeanversauerung und ihre Folgen (tv7-2)
  // =========================================================================
  {
    id: "tv-a3-01",
    title: "Ozeanversauerung und ihre Folgen",
    text: `Die Ozeane der Erde nehmen etwa ein Viertel des vom Menschen verursachten Kohlendioxids auf und wirken damit als bedeutende Kohlenstoffsenke, die den Klimawandel bremst. Doch diese Aufnahme hat einen Preis: Wenn CO2 im Meerwasser gelöst wird, reagiert es mit Wasser zu Kohlensäure, die anschließend in Hydrogencarbonat-Ionen und Wasserstoff-Ionen dissoziiert. Die zunehmende Konzentration von Wasserstoff-Ionen führt zu einer Absenkung des pH-Werts, ein Vorgang, der als Ozeanversauerung bezeichnet wird. Seit Beginn der industriellen Revolution ist der pH-Wert der Meeresoberfläche von durchschnittlich 8,2 auf etwa 8,1 gesunken, was einer Zunahme der Wasserstoff-Ionen-Konzentration um rund 26 Prozent entspricht, da die pH-Skala logarithmisch ist. Besonders betroffen sind Organismen, die Kalkschalen oder Kalkskelette bilden, wie Korallen, Muscheln, Schnecken und bestimmte Planktonarten. Diese Lebewesen nutzen Calciumcarbonat als Baumaterial. Bei sinkendem pH-Wert steht jedoch weniger Carbonat im Wasser zur Verfügung, sodass die Bildung von Kalkstrukturen erschwert wird. Bei besonders niedrigen pH-Werten kann es sogar zur Auflösung bestehender Schalen kommen. Korallenriffe, die als Lebensraum für schätzungsweise ein Viertel aller marinen Arten dienen, sind doppelt bedroht: Neben der Versauerung leiden sie unter der Erwärmung der Meere, die zur sogenannten Korallenbleiche führt, bei der die Korallen ihre symbiotischen Algen abstoßen und schließlich absterben. Auch auf molekularer Ebene zeigen sich Auswirkungen der Versauerung. Studien haben gezeigt, dass ein niedrigerer pH-Wert das Verhalten bestimmter Fischarten beeinflussen kann, indem er die Funktion von Neurotransmitter-Rezeptoren im Gehirn verändert. Betroffene Fische zeigen eine verminderte Fähigkeit, Raubtiere zu erkennen, und weisen Orientierungsprobleme auf. Die Folgen der Ozeanversauerung betreffen letztlich auch den Menschen. Millionen von Menschen sind direkt von der Fischerei als Nahrungsquelle und Einkommensgrundlage abhängig, und der Rückgang mariner Ökosysteme bedroht diese Lebensgrundlage. Wissenschaftler fordern daher eine drastische Reduktion der CO2-Emissionen als einzig wirksame Maßnahme gegen die fortschreitende Versauerung der Ozeane.`,
    fragen: [
      {
        id: "tv-a3-01-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der pH-Wert der Meeresoberfläche ist seit der industriellen Revolution um 0,1 Einheiten gesunken.",
          },
          {
            nr: 2,
            text: "Die Ozeanversauerung betrifft ausschließlich Organismen mit Kalkschalen.",
          },
          {
            nr: 3,
            text: "Korallenriffe beherbergen etwa ein Viertel aller marinen Arten.",
          },
          {
            nr: 4,
            text: "Die pH-Skala ist linear, weshalb eine Senkung um 0,1 nur geringe Auswirkungen hat.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 3. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist korrekt: Der Text nennt eine Absenkung von 8,2 auf 8,1. Aussage 2 ist falsch: Der Text beschreibt auch Auswirkungen auf Fische (Neurotransmitter-Rezeptoren). Aussage 3 ist korrekt: Der Text sagt, Korallenriffe dienen als Lebensraum für "schätzungsweise ein Viertel aller marinen Arten". Aussage 4 ist falsch: Der Text sagt explizit, die pH-Skala ist logarithmisch, nicht linear.',
      },
      {
        id: "tv-a3-01-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "CO2 reagiert im Meerwasser zu Kohlensäure, die in Hydrogencarbonat-Ionen und Wasserstoff-Ionen dissoziiert.",
          },
          {
            nr: 2,
            text: "Die Korallenbleiche wird durch die Ozeanversauerung verursacht.",
          },
          {
            nr: 3,
            text: "Wissenschaftler fordern eine drastische Reduktion der CO2-Emissionen als Gegenmaßnahme.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist korrekt: Der Text beschreibt diesen chemischen Vorgang explizit. Aussage 2 ist falsch: Die Korallenbleiche wird laut Text durch die Erwärmung der Meere verursacht (nicht durch die Versauerung). Aussage 3 ist korrekt: Der Text nennt die CO2-Reduktion als "einzig wirksame Maßnahme".',
      },
    ],
  },

  // =========================================================================
  // 2. Vulkanismus und seine Auswirkungen auf das Klima (tv7-3)
  // =========================================================================
  {
    id: "tv-a3-02",
    title: "Vulkanismus und seine Auswirkungen auf das Klima",
    text: `Vulkanausbrüche gehören zu den gewaltigsten Naturereignissen auf der Erde und können erhebliche Auswirkungen auf das globale Klima haben. Bei einer Eruption werden neben Lava und Asche auch große Mengen an Gasen in die Atmosphäre geschleudert, darunter Wasserdampf, Kohlendioxid und Schwefeldioxid. Besonders das Schwefeldioxid spielt eine bedeutende klimatische Rolle. In der Stratosphäre, der Atmosphärenschicht zwischen etwa 10 und 50 Kilometern Höhe, reagiert Schwefeldioxid mit Wasser und bildet feine Schwefelsäuretröpfchen, sogenannte Sulfataerosole. Diese winzigen Partikel reflektieren einen Teil der einfallenden Sonnenstrahlung zurück in den Weltraum und verringern so die Menge an Energie, die die Erdoberfläche erreicht. Dieser Kühlungseffekt kann bei besonders starken Eruptionen über mehrere Jahre anhalten. Ein historisch gut dokumentiertes Beispiel ist der Ausbruch des Vulkans Tambora auf der indonesischen Insel Sumbawa im April 1815. Die Eruption schleuderte geschätzte 60 Millionen Tonnen Schwefeldioxid in die Stratosphäre und führte zu einem globalen Temperaturrückgang von etwa 0,4 bis 0,7 Grad Celsius. Das darauffolgende Jahr 1816 ging als Jahr ohne Sommer in die Geschichte ein, da in weiten Teilen Europas und Nordamerikas ungewöhnlich kalte Temperaturen, Ernteausfälle und Hungersnöte auftraten. Ein weiteres Beispiel ist der Ausbruch des Pinatubo auf den Philippinen im Juni 1991, der etwa 20 Millionen Tonnen Schwefeldioxid freisetzte und die globale Durchschnittstemperatur in den folgenden zwei Jahren um rund 0,5 Grad Celsius senkte. Gleichzeitig kann vulkanisches CO2 langfristig zum Treibhauseffekt beitragen, wobei die jährlichen vulkanischen CO2-Emissionen im Vergleich zu den anthropogenen Emissionen gering sind – sie machen weniger als ein Prozent der menschengemachten CO2-Emissionen aus. Vulkanausbrüche beeinflussen auch die Ozonschicht, da Sulfataerosole chemische Reaktionen beschleunigen können, die zum Abbau von Ozon führen. Nach dem Pinatubo-Ausbruch wurde ein messbarer Rückgang der Ozonkonzentration in der Stratosphäre beobachtet, der die ultraviolette Strahlung auf der Erdoberfläche vorübergehend erhöhte.`,
    fragen: [
      {
        id: "tv-a3-02-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Tambora-Ausbruch setzte etwa 60 Millionen Tonnen Schwefeldioxid frei.",
          },
          {
            nr: 2,
            text: "Vulkanische CO2-Emissionen übersteigen die menschengemachten CO2-Emissionen.",
          },
          {
            nr: 3,
            text: "Sulfataerosole können den Abbau von Ozon in der Stratosphäre beschleunigen.",
          },
          {
            nr: 4,
            text: "Der Pinatubo brach im Jahr 1815 auf den Philippinen aus.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1., 3. und 4. sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist korrekt: Der Text nennt "geschätzte 60 Millionen Tonnen Schwefeldioxid" für den Tambora. Aussage 2 ist falsch: Der Text sagt, vulkanische CO2-Emissionen machen weniger als ein Prozent der menschengemachten aus. Aussage 3 ist korrekt: Der Text beschreibt, dass Sulfataerosole chemische Reaktionen beschleunigen, die zum Ozonabbau führen. Aussage 4 ist falsch: Pinatubo brach 1991 aus, 1815 war Tambora.',
      },
      {
        id: "tv-a3-02-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Sulfataerosole reflektieren Sonnenstrahlung und verringern die Energiezufuhr zur Erdoberfläche.",
          },
          {
            nr: 2,
            text: "Das Jahr 1816 ging als Jahr ohne Sommer in die Geschichte ein.",
          },
          {
            nr: 3,
            text: "Der Pinatubo-Ausbruch senkte die globale Temperatur um etwa 0,5 Grad Celsius.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Alle drei Aussagen sind korrekt. Aussage 1: Der Text beschreibt, dass Sulfataerosole Sonnenstrahlung reflektieren. Aussage 2: Der Text nennt 1816 als "Jahr ohne Sommer". Aussage 3: Der Text gibt explizit 0,5 Grad Celsius Temperatursenkung durch den Pinatubo an.',
      },
    ],
  },

  // =========================================================================
  // 3. Genetische Drift – Zufall in der Evolution (tv7-4)
  // =========================================================================
  {
    id: "tv-a3-03",
    title: "Genetische Drift – Zufall in der Evolution",
    text: `Die Evolution wird häufig vor allem mit natürlicher Selektion in Verbindung gebracht, doch ein weiterer bedeutender Mechanismus der Evolutionsbiologie ist die genetische Drift. Unter genetischer Drift versteht man zufällige Veränderungen in der Allelfrequenz einer Population, die nicht durch Selektion, sondern durch Stichprobenfehler bei der Vererbung entstehen. In jeder Generation wird nur ein Teil der verfügbaren Allele an die Nachkommen weitergegeben, und durch Zufall können bestimmte Allele häufiger oder seltener werden, ohne dass sie einen Vor- oder Nachteil für das Überleben bieten. Die Auswirkungen genetischer Drift sind besonders in kleinen Populationen ausgeprägt, da dort zufällige Schwankungen einen größeren relativen Effekt auf die Allelfrequenzen haben. In großen Populationen hingegen gleichen sich die zufälligen Schwankungen statistisch weitgehend aus. Zwei besondere Szenarien veranschaulichen die Wirkung der genetischen Drift. Der sogenannte Gründereffekt tritt auf, wenn eine kleine Gruppe von Individuen eine neue Population gründet, beispielsweise bei der Besiedlung einer Insel. Die genetische Zusammensetzung dieser Gründerpopulation entspricht nicht der der Ursprungspopulation, da nur eine zufällige Stichprobe der Allele mitgenommen wird. Dies kann dazu führen, dass seltene Allele in der neuen Population überrepräsentiert sind. Ein bekanntes Beispiel ist die hohe Häufigkeit bestimmter Erbkrankheiten in isolierten Bevölkerungsgruppen wie den Amish in Nordamerika, die auf eine kleine Gründergruppe zurückgehen. Der Flaschenhalseffekt beschreibt eine drastische Reduktion der Populationsgröße durch ein Katastrophenereignis wie eine Seuche, eine Naturkatastrophe oder Bejagung. Die überlebenden Individuen repräsentieren nur einen Bruchteil der ursprünglichen genetischen Vielfalt, und selbst wenn die Population sich zahlenmäßig erholt, bleibt die genetische Diversität langfristig verringert. Ein klassisches Beispiel sind die Geparden, deren extrem geringe genetische Variabilität auf einen Flaschenhals in der Vergangenheit zurückgeführt wird. Die geringe genetische Diversität macht Geparden anfälliger für Krankheiten und verringert ihre Anpassungsfähigkeit an Umweltveränderungen. Genetische Drift kann somit langfristig zur Verarmung des Genpools und zur genetischen Differenzierung isolierter Populationen beitragen.`,
    fragen: [
      {
        id: "tv-a3-03-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Genetische Drift bevorzugt Allele, die einen Überlebensvorteil bieten.",
          },
          {
            nr: 2,
            text: "Die Amish in Nordamerika weisen aufgrund des Gründereffekts eine erhöhte Häufigkeit bestimmter Erbkrankheiten auf.",
          },
          {
            nr: 3,
            text: "In großen Populationen gleichen sich zufällige Schwankungen der Allelfrequenzen statistisch weitgehend aus.",
          },
          {
            nr: 4,
            text: "Der Flaschenhalseffekt führt stets zur vollständigen genetischen Erholung der Population.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 4. sind richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 2. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Genetische Drift entsteht durch Zufall, nicht durch Selektion vorteilhafter Allele. Aussage 2 ist korrekt: Der Text nennt die Amish als Beispiel für den Gründereffekt. Aussage 3 ist korrekt: Der Text sagt explizit, dass sich Schwankungen in großen Populationen statistisch ausgleichen. Aussage 4 ist falsch: Der Text betont, dass die genetische Diversität langfristig verringert bleibt.",
      },
      {
        id: "tv-a3-03-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Geparden haben eine extrem geringe genetische Variabilität als Folge eines Flaschenhalseffekts.",
          },
          {
            nr: 2,
            text: "Der Gründereffekt tritt auf, wenn eine kleine Gruppe eine neue Population gründet und nur eine zufällige Stichprobe der Allele mitbringt.",
          },
          {
            nr: 3,
            text: "Genetische Drift wirkt sich in kleinen und großen Populationen gleich stark aus.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Keine der Aussagen ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "1. und 2. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt Geparden als klassisches Beispiel für einen Flaschenhals mit extrem geringer genetischer Variabilität. Aussage 2 ist korrekt: Der Text definiert den Gründereffekt genau so. Aussage 3 ist falsch: Der Text betont, dass die Auswirkungen in kleinen Populationen stärker ausgeprägt sind als in großen.",
      },
    ],
  },

  // =========================================================================
  // 4. Symbiose – Zusammenleben in der Natur (tv7-5)
  // =========================================================================
  {
    id: "tv-a3-04",
    title: "Symbiose – Zusammenleben in der Natur",
    text: `Symbiose bezeichnet in der Biologie das enge Zusammenleben artverschiedener Organismen über einen längeren Zeitraum. Der Begriff stammt aus dem Griechischen und bedeutet wörtlich Zusammenleben. Er wurde 1879 vom deutschen Botaniker Heinrich Anton de Bary eingeführt, der damit zunächst jede Form des dauerhaften Zusammenlebens verschiedener Arten beschrieb, unabhängig davon, ob die Beziehung für beide Partner vorteilhaft ist. In der modernen Biologie werden verschiedene Formen der Symbiose unterschieden. Bei der Mutualismus genannten Form profitieren beide Partner von der Beziehung. Ein eindrucksvolles Beispiel ist die Mykorrhiza, die Symbiose zwischen Pilzen und Pflanzenwurzeln. Der Pilz vergrößert mit seinem feinen Fadengeflecht, dem Myzel, die Absorptionsfläche der Wurzeln erheblich und verbessert so die Aufnahme von Wasser und mineralischen Nährstoffen, insbesondere Phosphat. Im Gegenzug erhält der Pilz von der Pflanze organische Verbindungen, vor allem Zucker, die er für seinen Stoffwechsel benötigt. Schätzungen zufolge leben über 90 Prozent aller Landpflanzen in einer Mykorrhiza-Symbiose. Beim Kommensalismus profitiert ein Partner, während der andere weder Vor- noch Nachteile erfährt. Ein Beispiel sind Epiphyten, also Aufsitzerpflanzen wie bestimmte Orchideen und Bromelien, die auf Bäumen wachsen, um besseren Zugang zum Licht zu erhalten, ohne dem Wirtsbaum zu schaden. Beim Parasitismus hingegen profitiert ein Partner auf Kosten des anderen. Parasiten wie Bandwürmer, Zecken oder die Mistel entziehen ihrem Wirt Nährstoffe und können seine Gesundheit beeinträchtigen. Dennoch sind Parasiten ein wichtiger Bestandteil von Ökosystemen, da sie die Populationsdynamik regulieren und die biologische Vielfalt fördern. Eine besonders faszinierende Form der Symbiose ist die Endosymbiose, bei der ein Organismus im Inneren eines anderen lebt. Die Endosymbiontentheorie, die maßgeblich von der Biologin Lynn Margulis in den 1960er-Jahren entwickelt wurde, besagt, dass Mitochondrien und Chloroplasten in eukaryotischen Zellen ursprünglich freilebende Bakterien waren, die von Vorläuferzellen aufgenommen wurden und im Laufe der Evolution zu festen Zellbestandteilen wurden. Belege dafür sind unter anderem die eigene DNA dieser Organellen und ihre doppelte Membranstruktur.`,
    fragen: [
      {
        id: "tv-a3-04-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Über 90 Prozent aller Landpflanzen leben in einer Mykorrhiza-Symbiose.",
          },
          {
            nr: 2,
            text: "Beim Kommensalismus profitieren beide Partner gleichermaßen.",
          },
          {
            nr: 3,
            text: "Die Endosymbiontentheorie wurde von Lynn Margulis in den 1960er-Jahren entwickelt.",
          },
          {
            nr: 4,
            text: "Parasiten sind für Ökosysteme grundsätzlich schädlich und fördern keine biologische Vielfalt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist korrekt: Der Text nennt "über 90 Prozent aller Landpflanzen". Aussage 2 ist falsch: Beim Kommensalismus profitiert nur ein Partner, der andere erfährt weder Vor- noch Nachteile. Aussage 3 ist korrekt: Der Text sagt, Margulis entwickelte die Theorie "maßgeblich in den 1960er-Jahren". Aussage 4 ist falsch: Der Text sagt, Parasiten regulieren die Populationsdynamik und fördern die biologische Vielfalt.',
      },
      {
        id: "tv-a3-04-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Pilz in einer Mykorrhiza verbessert die Aufnahme von Wasser und Phosphat für die Pflanze.",
          },
          {
            nr: 2,
            text: "Der Begriff Symbiose wurde 1879 von Heinrich Anton de Bary eingeführt.",
          },
          {
            nr: 3,
            text: "Mitochondrien und Chloroplasten besitzen eigene DNA und eine doppelte Membranstruktur.",
          },
          {
            nr: 4,
            text: "Epiphyten entziehen dem Wirtsbaum Nährstoffe und sind daher Parasiten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 4. ist richtig." },
          { key: "B", beschreibung: "1. und 4. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt, dass der Pilz die Aufnahme von Wasser und Phosphat verbessert. Aussage 2 ist korrekt: Der Text nennt de Bary und 1879 explizit. Aussage 3 ist korrekt: Eigene DNA und doppelte Membranstruktur werden als Belege genannt. Aussage 4 ist falsch: Epiphyten sind Kommensalisten, die dem Wirtsbaum nicht schaden.",
      },
      {
        id: "tv-a3-04-q3",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "De Bary definierte Symbiose ursprünglich nur für Beziehungen, die für beide Partner vorteilhaft sind.",
          },
          {
            nr: 2,
            text: "Die Mistel wird im Text als Beispiel für Parasitismus angeführt.",
          },
          {
            nr: 3,
            text: "Laut der Endosymbiontentheorie waren Mitochondrien ursprünglich freilebende Bakterien.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist falsch: De Bary beschrieb "jede Form des dauerhaften Zusammenlebens verschiedener Arten, unabhängig davon, ob die Beziehung für beide Partner vorteilhaft ist". Aussage 2 ist korrekt: Die Mistel wird neben Bandwürmern und Zecken als Parasit genannt. Aussage 3 ist korrekt: Die Endosymbiontentheorie besagt, dass Mitochondrien "ursprünglich freilebende Bakterien waren".',
      },
    ],
  },

  // =========================================================================
  // 5. Neurotransmitter und ihre Rolle im Nervensystem (tv8-1)
  // =========================================================================
  {
    id: "tv-a3-05",
    title: "Neurotransmitter und ihre Rolle im Nervensystem",
    text: `Neurotransmitter sind chemische Botenstoffe, die die Signalübertragung zwischen Nervenzellen an spezialisierten Kontaktstellen, den Synapsen, ermöglichen. Wenn ein elektrisches Signal, das sogenannte Aktionspotenzial, das Ende einer Nervenzelle erreicht, werden Neurotransmitter aus kleinen Bläschen, den synaptischen Vesikeln, in den synaptischen Spalt freigesetzt. Dort binden sie an spezifische Rezeptoren auf der nachgeschalteten Zelle und lösen entweder eine erregende oder eine hemmende Wirkung aus. Zu den bekanntesten erregenden Neurotransmittern zählt Glutamat, das an etwa 80 Prozent aller erregenden Synapsen im Gehirn beteiligt ist und eine zentrale Rolle bei Lernprozessen und der Gedächtnisbildung spielt. Sein hemmendes Gegenstück ist die Gamma-Aminobuttersäure, kurz GABA, die neuronale Aktivität dämpft und so vor übermäßiger Erregung schützt. Ein Ungleichgewicht zwischen Glutamat und GABA wird mit neurologischen Erkrankungen wie Epilepsie in Verbindung gebracht, bei der eine unkontrollierte neuronale Erregung zu Krampfanfällen führt. Der Neurotransmitter Dopamin ist an der Steuerung von Motivation, Belohnung und motorischen Funktionen beteiligt. Ein Mangel an Dopamin in bestimmten Hirnregionen, insbesondere in der Substantia nigra, ist das zentrale Merkmal der Parkinson-Krankheit, die sich durch Zittern, Muskelsteifheit und verlangsamte Bewegungen äußert. Umgekehrt wird eine übermäßige Dopaminaktivität in bestimmten Hirnarealen mit der Entstehung von Schizophrenie in Zusammenhang gebracht. Serotonin beeinflusst Stimmung, Schlaf und Appetit. Viele Antidepressiva, die sogenannten selektiven Serotonin-Wiederaufnahmehemmer oder SSRI, wirken, indem sie den Abbau von Serotonin im synaptischen Spalt verlangsamen und so dessen Konzentration erhöhen. Nach der Signalübertragung müssen Neurotransmitter aus dem synaptischen Spalt entfernt werden, um eine Daueraktivierung zu verhindern. Dies geschieht durch drei Mechanismen: enzymatischen Abbau, Wiederaufnahme in die präsynaptische Zelle durch spezielle Transporterproteine oder Diffusion aus dem synaptischen Spalt. Störungen in diesen Prozessen können zu einer Vielzahl neuropsychiatrischer Erkrankungen beitragen und bilden den Ansatzpunkt vieler moderner Psychopharmaka, die gezielt in die Neurotransmitter-Systeme eingreifen.`,
    fragen: [
      {
        id: "tv-a3-05-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Glutamat ist an etwa 80 Prozent aller erregenden Synapsen im Gehirn beteiligt.",
          },
          {
            nr: 2,
            text: "Ein Dopaminmangel in der Substantia nigra wird mit Schizophrenie assoziiert.",
          },
          {
            nr: 3,
            text: "SSRI erhöhen die Serotoninkonzentration im synaptischen Spalt.",
          },
          {
            nr: 4,
            text: "Neurotransmitter werden ausschließlich durch enzymatischen Abbau aus dem synaptischen Spalt entfernt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt 80 Prozent explizit. Aussage 2 ist falsch: Dopaminmangel in der Substantia nigra wird mit Parkinson assoziiert; eine übermäßige Dopaminaktivität wird mit Schizophrenie in Verbindung gebracht. Aussage 3 ist korrekt: Der Text sagt, SSRI verlangsamen den Abbau von Serotonin und erhöhen so dessen Konzentration. Aussage 4 ist falsch: Der Text nennt drei Mechanismen: enzymatischen Abbau, Wiederaufnahme und Diffusion.",
      },
      {
        id: "tv-a3-05-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "GABA ist ein erregender Neurotransmitter, der neuronale Aktivität steigert.",
          },
          {
            nr: 2,
            text: "Dopamin steuert unter anderem Motivation, Belohnung und motorische Funktionen.",
          },
          {
            nr: 3,
            text: "Epilepsie wird mit einem Ungleichgewicht zwischen Glutamat und GABA in Verbindung gebracht.",
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
          "Aussage 1 ist falsch: GABA ist laut Text ein hemmendes Gegenstück zu Glutamat, das neuronale Aktivität dämpft, nicht steigert. Aussage 2 ist korrekt: Der Text nennt genau diese Funktionen von Dopamin. Aussage 3 ist korrekt: Der Text beschreibt ein Glutamat-GABA-Ungleichgewicht als Zusammenhang mit Epilepsie.",
      },
    ],
  },

  // =========================================================================
  // 6. Moderne Krebsforschung und Immuntherapie (tv8-2)
  // =========================================================================
  {
    id: "tv-a3-06",
    title: "Moderne Krebsforschung und Immuntherapie",
    text: `Krebs ist ein Sammelbegriff für eine Gruppe von Erkrankungen, bei denen Zellen unkontrolliert wachsen und sich teilen, wobei sie gesundes Gewebe verdrängen und zerstören können. Die Entstehung von Krebs, die sogenannte Karzinogenese, ist ein mehrstufiger Prozess, der durch Mutationen in Genen ausgelöst wird, die das Zellwachstum und die Zellteilung regulieren. Dabei spielen zwei Genklassen eine besondere Rolle: Onkogene, die bei Aktivierung das Zellwachstum unkontrolliert antreiben, und Tumorsuppressorgene, deren Inaktivierung die natürlichen Bremsen der Zellteilung aufhebt. Ein prominentes Beispiel für ein Tumorsuppressorgen ist p53, das als Wächter des Genoms bezeichnet wird, da es beschädigte Zellen in den programmierten Zelltod, die Apoptose, treiben kann. Mutationen im p53-Gen finden sich in über der Hälfte aller menschlichen Tumoren. Neben der klassischen Chemotherapie, die sich teilende Zellen unspezifisch angreift und daher erhebliche Nebenwirkungen verursacht, hat sich in den letzten Jahren die Immuntherapie als vielversprechender Ansatz etabliert. Ein revolutionärer Durchbruch war die Entwicklung der Immuncheckpoint-Inhibitoren, für die James Allison und Tasuku Honjo 2018 den Nobelpreis für Physiologie oder Medizin erhielten. Normalerweise verfügt das Immunsystem über Kontrollpunkte, sogenannte Checkpoints, die verhindern, dass T-Zellen körpereigenes Gewebe angreifen. Krebszellen nutzen diese Mechanismen jedoch aus, indem sie Checkpoint-Proteine auf ihrer Oberfläche exprimieren und so der Immunüberwachung entgehen. Checkpoint-Inhibitoren blockieren diese Proteine und ermöglichen es dem Immunsystem, Krebszellen wieder zu erkennen und zu zerstören. Ein weiterer innovativer Ansatz ist die CAR-T-Zelltherapie, bei der T-Zellen des Patienten entnommen, im Labor gentechnisch verändert und dann zurückgegeben werden. Die modifizierten Zellen tragen einen chimären Antigenrezeptor, der sie befähigt, bestimmte Oberflächenmerkmale von Krebszellen gezielt zu erkennen. Besonders bei bestimmten Formen von Blutkrebs wie der akuten lymphatischen Leukämie hat die CAR-T-Zelltherapie beeindruckende Remissionsraten gezeigt. Dennoch bestehen Herausforderungen wie der sogenannte Zytokinsturm, eine potenziell lebensbedrohliche überschießende Immunreaktion, sowie die hohen Kosten und die komplexe Herstellung.`,
    fragen: [
      {
        id: "tv-a3-06-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "p53 ist ein Onkogen, das unkontrolliertes Zellwachstum antreibt.",
          },
          {
            nr: 2,
            text: "Checkpoint-Inhibitoren ermöglichen es dem Immunsystem, Krebszellen wieder zu erkennen.",
          },
          {
            nr: 3,
            text: "Allison und Honjo erhielten 2018 den Nobelpreis für ihre Arbeit an Checkpoint-Inhibitoren.",
          },
          {
            nr: 4,
            text: "CAR-T-Zellen tragen einen chimären Antigenrezeptor, der Krebszellen gezielt erkennt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 2. sind richtig." },
          { key: "B", beschreibung: "1., 3. und 4. sind richtig." },
          { key: "C", beschreibung: "Nur 2. ist richtig." },
          { key: "D", beschreibung: "2., 3. und 4. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: p53 ist ein Tumorsuppressorgen (Wächter des Genoms), kein Onkogen. Aussage 2 ist korrekt: Der Text beschreibt, dass Checkpoint-Inhibitoren die Tarnung der Krebszellen aufheben. Aussage 3 ist korrekt: Der Text nennt 2018 und den Nobelpreis für Physiologie oder Medizin. Aussage 4 ist korrekt: Der Text beschreibt den chimären Antigenrezeptor der CAR-T-Zellen.",
      },
      {
        id: "tv-a3-06-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Mutationen im p53-Gen finden sich in über der Hälfte aller menschlichen Tumoren.",
          },
          {
            nr: 2,
            text: "Die klassische Chemotherapie greift gezielt nur Krebszellen an.",
          },
          {
            nr: 3,
            text: "Ein Zytokinsturm ist eine Herausforderung der CAR-T-Zelltherapie.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Keine der Aussagen ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "1. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist korrekt: Der Text nennt "über die Hälfte aller menschlichen Tumoren". Aussage 2 ist falsch: Der Text sagt, Chemotherapie greift sich teilende Zellen "unspezifisch" an und verursacht daher Nebenwirkungen. Aussage 3 ist korrekt: Der Zytokinsturm wird explizit als Herausforderung der CAR-T-Therapie genannt.',
      },
    ],
  },

  // =========================================================================
  // 7. CRISPR-Cas9 – Die Genschere (tv8-3)
  // =========================================================================
  {
    id: "tv-a3-07",
    title: "CRISPR-Cas9 – Die Genschere",
    text: `Die Entdeckung des CRISPR-Cas9-Systems hat die Molekularbiologie revolutioniert und gilt als einer der bedeutendsten wissenschaftlichen Durchbrüche des 21. Jahrhunderts. CRISPR steht für Clustered Regularly Interspaced Short Palindromic Repeats und bezeichnet kurze, sich wiederholende DNA-Sequenzen, die in den Genomen vieler Bakterien vorkommen. Zusammen mit dem Enzym Cas9 bilden sie ein natürliches Immunsystem der Bakterien gegen Viren, sogenannte Bakteriophagen. Wenn ein Bakterium eine Phageninfektion überlebt, speichert es Fragmente der viralen DNA zwischen den CRISPR-Sequenzen. Bei einer erneuten Infektion durch denselben Phagen wird diese gespeicherte Information genutzt, um eine komplementäre RNA zu erzeugen, die sogenannte Guide-RNA. Diese führt das Cas9-Enzym gezielt zu der passenden Stelle im viralen Genom, wo Cas9 die DNA durchschneidet und den Phagen damit unschädlich macht. Die Biochemikerinnen Jennifer Doudna und Emmanuelle Charpentier erkannten das Potenzial dieses Systems und zeigten 2012, dass es sich zu einem universellen Werkzeug für die Genombearbeitung umfunktionieren lässt. Indem man eine synthetische Guide-RNA entwirft, die zu einer beliebigen Zielsequenz komplementär ist, kann Cas9 die DNA an genau dieser Stelle schneiden. Die Zelle repariert den Schnitt anschließend mithilfe zelleigener Reparaturmechanismen, wobei Gene ausgeschaltet, verändert oder durch neue Sequenzen ersetzt werden können. Für diese Arbeit erhielten Doudna und Charpentier 2020 den Nobelpreis für Chemie. Die Anwendungsmöglichkeiten sind enorm. In der Landwirtschaft werden CRISPR-editierte Pflanzen entwickelt, die resistent gegen Schädlinge oder Dürre sind. In der Grundlagenforschung ermöglicht die Technologie, die Funktion einzelner Gene präzise zu untersuchen. In der Medizin werden klinische Studien durchgeführt, um genetische Erkrankungen wie die Sichelzellenanämie zu behandeln, bei der eine einzelne Punktmutation im Hämoglobin-Gen die Verformung roter Blutkörperchen verursacht. Dennoch wirft die Technologie ethische Fragen auf, insbesondere hinsichtlich der Keimbahnedierung, also der Veränderung von Genen in Ei- oder Samenzellen, die an künftige Generationen weitergegeben würden. Die meisten Länder haben Keimbahneingriffe am Menschen daher verboten oder stark eingeschränkt.`,
    fragen: [
      {
        id: "tv-a3-07-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Doudna und Charpentier erhielten 2020 den Nobelpreis für Medizin.",
          },
          {
            nr: 2,
            text: "Das CRISPR-Cas9-System dient Bakterien als natürliches Immunsystem gegen Viren.",
          },
          {
            nr: 3,
            text: "Eine synthetische Guide-RNA kann zu jeder beliebigen Zielsequenz komplementär entworfen werden.",
          },
          {
            nr: 4,
            text: "Keimbahneingriffe am Menschen sind weltweit vollständig erlaubt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 4. sind richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 2. ist richtig." },
          { key: "E", beschreibung: "2. und 3. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist falsch: Der Nobelpreis war für Chemie, nicht für Medizin. Aussage 2 ist korrekt: Der Text beschreibt CRISPR-Cas9 als natürliches Immunsystem der Bakterien. Aussage 3 ist korrekt: Der Text sagt, man kann eine synthetische Guide-RNA entwerfen, die zu einer "beliebigen Zielsequenz" komplementär ist. Aussage 4 ist falsch: Der Text sagt, die meisten Länder haben Keimbahneingriffe verboten oder stark eingeschränkt.',
      },
      {
        id: "tv-a3-07-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Sichelzellenanämie wird durch eine einzelne Punktmutation im Hämoglobin-Gen verursacht.",
          },
          {
            nr: 2,
            text: "Cas9 repariert die DNA nach dem Schnitt mithilfe eigener Reparaturenzyme.",
          },
          {
            nr: 3,
            text: "Bakterien speichern Fragmente viraler DNA zwischen den CRISPR-Sequenzen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist korrekt: Der Text beschreibt die Sichelzellenanämie als Folge einer "einzelnen Punktmutation im Hämoglobin-Gen". Aussage 2 ist falsch: Nicht Cas9 repariert den Schnitt, sondern die Zelle selbst repariert ihn "mithilfe zelleigener Reparaturmechanismen". Aussage 3 ist korrekt: Der Text sagt, dass Bakterien Fragmente viraler DNA "zwischen den CRISPR-Sequenzen" speichern.',
      },
      {
        id: "tv-a3-07-q3",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "CRISPR-Cas9 wurde erstmals 2012 als Werkzeug für die Genombearbeitung demonstriert.",
          },
          {
            nr: 2,
            text: "CRISPR-editierte Pflanzen werden in der Landwirtschaft zur Resistenz gegen Schädlinge oder Dürre entwickelt.",
          },
          {
            nr: 3,
            text: "Die Guide-RNA schneidet die DNA an der Zielstelle.",
          },
          {
            nr: 4,
            text: "Keimbahnedierung betrifft die Veränderung von Genen in Ei- oder Samenzellen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "2. und 4. sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Doudna und Charpentier zeigten 2012 das Potenzial des Systems. Aussage 2 ist korrekt: Der Text nennt Schädlings- und Dürreresistenz. Aussage 3 ist falsch: Die Guide-RNA führt Cas9 zur Stelle; das Enzym Cas9 schneidet die DNA, nicht die Guide-RNA. Aussage 4 ist korrekt: Der Text definiert Keimbahnedierung genau so.",
      },
    ],
  },

  // =========================================================================
  // 8. Klimawandel und menschliche Gesundheit (tv9-1)
  // =========================================================================
  {
    id: "tv-a3-08",
    title: "Klimawandel und menschliche Gesundheit",
    text: `Der Klimawandel wird zunehmend als eine der gravierendsten Bedrohungen für die menschliche Gesundheit im 21. Jahrhundert erkannt. Die Weltgesundheitsorganisation schätzt, dass zwischen 2030 und 2050 jährlich etwa 250.000 zusätzliche Todesfälle auf die Folgen des Klimawandels zurückzuführen sein werden, bedingt durch Hitzestress, Unterernährung, Durchfallerkrankungen und die Ausbreitung von Infektionskrankheiten. Steigende Temperaturen wirken sich direkt auf die Gesundheit aus. Hitzewellen führen zu einer erhöhten Sterblichkeit, insbesondere bei älteren Menschen, Kleinkindern und Personen mit Vorerkrankungen des Herz-Kreislauf-Systems. Der menschliche Körper reguliert seine Temperatur vor allem durch Schwitzen und die Erweiterung peripherer Blutgefäße, doch ab einer Kombination von Temperatur und Luftfeuchtigkeit, die als Feuchtkugeltemperatur über 35 Grad Celsius liegt, versagt diese Thermoregulation, und es droht ein tödlicher Hitzschlag. Indirekt beeinflusst der Klimawandel die Gesundheit über die Veränderung von Ökosystemen. Die Ausbreitung von Krankheitsüberträgern wie der Tigermücke Aedes albopictus in bisher gemäßigte Breiten erhöht das Risiko für Tropenkrankheiten wie Dengue-Fieber und Chikungunya in Regionen, die bislang davon verschont waren. In Europa wurden bereits autochthone, also lokal übertragene Fälle von Dengue-Fieber dokumentiert. Die Landwirtschaft leidet unter häufigeren Dürren und Extremwetterereignissen, was die Ernährungssicherheit gefährdet und Mangelernährung begünstigt. Zudem verschlechtert der Klimawandel die Luftqualität: Höhere Temperaturen fördern die Bildung von bodennahem Ozon, einem Reizgas, das Atemwegserkrankungen wie Asthma und chronisch obstruktive Lungenerkrankungen verschlimmert. Auch die psychische Gesundheit ist betroffen. Studien zeigen einen Zusammenhang zwischen steigenden Temperaturen und einer Zunahme von Aggressivität, Angststörungen und Depressionen. Der Begriff Solastalgie wurde geprägt, um den emotionalen Stress zu beschreiben, der durch die wahrgenommene Zerstörung der vertrauten Umwelt entsteht. Experten fordern daher eine Anpassung der Gesundheitssysteme an die klimatischen Veränderungen sowie eine konsequente Reduktion der Treibhausgasemissionen.`,
    fragen: [
      {
        id: "tv-a3-08-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die WHO schätzt jährlich etwa 250.000 zusätzliche Todesfälle durch den Klimawandel zwischen 2030 und 2050.",
          },
          {
            nr: 2,
            text: "Die Thermoregulation des Menschen versagt ab einer Feuchtkugeltemperatur von über 35 Grad Celsius.",
          },
          {
            nr: 3,
            text: "Der Klimawandel hat keine Auswirkungen auf die psychische Gesundheit.",
          },
          {
            nr: 4,
            text: "Bodennahes Ozon verschlimmert Atemwegserkrankungen wie Asthma.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "Nur 2. ist richtig." },
          { key: "D", beschreibung: "2. und 4. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt diese WHO-Schätzung explizit. Aussage 2 ist korrekt: Die 35-Grad-Schwelle wird im Text beschrieben. Aussage 3 ist falsch: Der Text nennt Aggressivität, Angststörungen, Depressionen und Solastalgie als psychische Folgen. Aussage 4 ist korrekt: Der Text beschreibt bodennahes Ozon als Reizgas, das Asthma verschlimmert.",
      },
      {
        id: "tv-a3-08-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Solastalgie beschreibt den emotionalen Stress durch die wahrgenommene Zerstörung der vertrauten Umwelt.",
          },
          {
            nr: 2,
            text: "Autochthone Fälle von Dengue-Fieber wurden bereits in Europa dokumentiert.",
          },
          {
            nr: 3,
            text: "Die Tigermücke Aedes albopictus überträgt ausschließlich Malaria.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "Keine der Aussagen ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "E", beschreibung: "1. und 2. sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist korrekt: Der Text definiert Solastalgie genau so. Aussage 2 ist korrekt: Der Text sagt, "In Europa wurden bereits autochthone Fälle von Dengue-Fieber dokumentiert." Aussage 3 ist falsch: Der Text nennt die Tigermücke im Zusammenhang mit Dengue-Fieber und Chikungunya, nicht mit Malaria.',
      },
    ],
  },

  // =========================================================================
  // 9. Pandemien – Lektionen aus der Geschichte (tv9-2)
  // =========================================================================
  {
    id: "tv-a3-09",
    title: "Pandemien – Lektionen aus der Geschichte",
    text: `Pandemien, also die weltweite Ausbreitung von Infektionskrankheiten, haben die Menschheitsgeschichte immer wieder entscheidend geprägt. Die verheerendste Pandemie des Mittelalters war der Schwarze Tod, der zwischen 1347 und 1353 schätzungsweise ein Drittel der europäischen Bevölkerung auslöschte. Verursacht wurde die Pest durch das Bakterium Yersinia pestis, das über Flöhe von Ratten auf den Menschen übertragen wurde. Die sozialen und wirtschaftlichen Folgen waren immens: Der Arbeitskräftemangel führte zu einer Aufwertung der Arbeit und trug langfristig zum Niedergang des feudalen Systems bei. Die Spanische Grippe von 1918 bis 1919, verursacht durch einen H1N1-Influenzavirus, infizierte schätzungsweise ein Drittel der damaligen Weltbevölkerung und forderte zwischen 50 und 100 Millionen Todesopfer. Bemerkenswert war, dass die höchste Sterblichkeit bei jungen Erwachsenen zwischen 20 und 40 Jahren lag, was auf eine überschießende Immunantwort, den sogenannten Zytokinsturm, zurückgeführt wird. Das Immunsystem dieser Altersgruppe reagierte so heftig auf das Virus, dass es das eigene Lungengewebe schwer schädigte. Die moderne Virologie und Epidemiologie haben seither erhebliche Fortschritte gemacht. Die Entwicklung von Impfstoffen innerhalb weniger Monate, wie bei der COVID-19-Pandemie geschehen, wäre vor wenigen Jahrzehnten undenkbar gewesen. Die mRNA-Technologie, die bei den Impfstoffen von BioNTech/Pfizer und Moderna zum Einsatz kam, nutzt synthetisch hergestellte Boten-RNA, die die Zellen des Geimpften anleitet, ein virales Protein zu produzieren, gegen das dann eine Immunantwort aufgebaut wird. Dennoch hat die COVID-19-Pandemie auch Schwächen offenbart: Die ungleiche Verteilung von Impfstoffen zwischen reichen und armen Ländern, die Anfälligkeit globaler Lieferketten und die Verbreitung von Fehlinformationen haben die Pandemiebekämpfung erheblich erschwert. Experten warnen, dass zukünftige Pandemien wahrscheinlicher werden, da der zunehmende Kontakt zwischen Menschen und Wildtieren durch Abholzung und Lebensraumzerstörung das Risiko sogenannter Zoonosen erhöht, also der Übertragung von Krankheitserregern vom Tier auf den Menschen.`,
    fragen: [
      {
        id: "tv-a3-09-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Pest wurde durch das Bakterium Yersinia pestis verursacht und über Flöhe von Ratten übertragen.",
          },
          {
            nr: 2,
            text: "Die Spanische Grippe betraf vor allem ältere Menschen über 60 Jahre.",
          },
          {
            nr: 3,
            text: "Der Schwarze Tod trug langfristig zum Niedergang des feudalen Systems bei.",
          },
          {
            nr: 4,
            text: "mRNA-Impfstoffe integrieren sich dauerhaft in die DNA des Geimpften.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist korrekt: Der Text beschreibt den Übertragungsweg über Flöhe und Ratten mit Yersinia pestis. Aussage 2 ist falsch: Die höchste Sterblichkeit lag bei jungen Erwachsenen zwischen 20 und 40 Jahren. Aussage 3 ist korrekt: Der Text sagt, der Arbeitskräftemangel "trug langfristig zum Niedergang des feudalen Systems bei". Aussage 4 ist falsch: Der Text erwähnt keine Integration in die DNA; mRNA-Technologie leitet Zellen an, ein Protein zu produzieren.',
      },
      {
        id: "tv-a3-09-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die hohe Sterblichkeit junger Erwachsener bei der Spanischen Grippe wird auf einen Zytokinsturm zurückgeführt.",
          },
          {
            nr: 2,
            text: "Zoonosen bezeichnen die Übertragung von Krankheitserregern vom Tier auf den Menschen.",
          },
          {
            nr: 3,
            text: "Die ungleiche Impfstoffverteilung erschwerte die COVID-19-Bekämpfung.",
          },
          {
            nr: 4,
            text: "Die Spanische Grippe forderte weniger als 10 Millionen Todesopfer.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "B", beschreibung: "1. und 4. sind richtig." },
          { key: "C", beschreibung: "Nur 2. ist richtig." },
          { key: "D", beschreibung: "2., 3. und 4. sind richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist korrekt: Der Text führt die hohe Sterblichkeit auf den Zytokinsturm zurück. Aussage 2 ist korrekt: Der Text definiert Zoonosen als "Übertragung von Krankheitserregern vom Tier auf den Menschen". Aussage 3 ist korrekt: Der Text nennt die ungleiche Verteilung als Schwäche. Aussage 4 ist falsch: Der Text spricht von 50 bis 100 Millionen Todesopfern.',
      },
    ],
  },

  // =========================================================================
  // 10. Suchtforschung – Die Neurobiologie der Abhängigkeit (tv9-5)
  // =========================================================================
  {
    id: "tv-a3-10",
    title: "Suchtforschung – Die Neurobiologie der Abhängigkeit",
    text: `Sucht ist eine chronische Erkrankung des Gehirns, die durch zwanghaftes Verlangen nach einer Substanz oder einem Verhalten, Kontrollverlust und fortgesetzten Konsum trotz negativer Konsequenzen gekennzeichnet ist. Moderne neurowissenschaftliche Forschung hat gezeigt, dass Abhängigkeit nicht auf mangelnde Willenskraft zurückzuführen ist, sondern auf tiefgreifende Veränderungen in der Hirnstruktur und -funktion. Im Zentrum der Suchtentwicklung steht das mesolimbische Belohnungssystem, das vom ventralen Tegmentum im Mittelhirn über den Nucleus accumbens bis zum präfrontalen Kortex verläuft. Natürliche Belohnungsreize wie Nahrung und soziale Interaktion aktivieren dieses System und lösen eine Ausschüttung des Neurotransmitters Dopamin im Nucleus accumbens aus, was als Wohlgefühl empfunden wird. Suchtmittel kapern dieses System, indem sie die Dopaminausschüttung um ein Vielfaches über das natürliche Maß hinaus steigern. Kokain beispielsweise blockiert die Wiederaufnahme von Dopamin in die präsynaptische Zelle, während Amphetamine die Freisetzung von Dopamin aus den Vesikeln zusätzlich steigern. Alkohol und Opioide wirken indirekt, indem sie hemmende Interneuronen im ventralen Tegmentum unterdrücken und so die Dopaminfreisetzung enthemmen. Bei wiederholtem Konsum passt sich das Gehirn an die übermäßige Stimulation an, ein Vorgang, der als neuroadaptive Toleranz bezeichnet wird. Die Anzahl der Dopaminrezeptoren im Nucleus accumbens wird herunterreguliert, sodass der Betroffene immer größere Mengen der Substanz benötigt, um dieselbe Wirkung zu erzielen. Gleichzeitig führt der dauerhafte Dopaminüberschuss zu Veränderungen im präfrontalen Kortex, der für Impulskontrolle, Entscheidungsfindung und die Bewertung langfristiger Konsequenzen zuständig ist. Diese Veränderungen erklären, warum Suchtkranke trotz besseren Wissens und negativer Folgen den Konsum fortsetzen. Moderne Therapieansätze kombinieren daher medikamentöse Behandlung, die in die gestörte Neurochemie eingreift, mit psychotherapeutischen Verfahren, die dem Patienten alternative Bewältigungsstrategien vermitteln und die Funktion des präfrontalen Kortex stärken.`,
    fragen: [
      {
        id: "tv-a3-10-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Kokain steigert die Dopaminfreisetzung aus den synaptischen Vesikeln.",
          },
          {
            nr: 2,
            text: "Neuroadaptive Toleranz umfasst eine Herunterregulierung der Dopaminrezeptoren im Nucleus accumbens.",
          },
          {
            nr: 3,
            text: "Alkohol und Opioide wirken indirekt, indem sie hemmende Interneuronen unterdrücken.",
          },
          {
            nr: 4,
            text: "Sucht wird im Text als Folge mangelnder Willenskraft beschrieben.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 4. sind richtig." },
          { key: "B", beschreibung: "2. und 3. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 2. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist falsch: Kokain blockiert die Wiederaufnahme von Dopamin; Amphetamine steigern die Freisetzung aus den Vesikeln. Aussage 2 ist korrekt: Der Text beschreibt die Herunterregulierung der Dopaminrezeptoren als Teil der neuroadaptiven Toleranz. Aussage 3 ist korrekt: Der Text sagt, Alkohol und Opioide unterdrücken hemmende Interneuronen. Aussage 4 ist falsch: Der Text sagt explizit, Abhängigkeit ist "nicht auf mangelnde Willenskraft zurückzuführen".',
      },
      {
        id: "tv-a3-10-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Das mesolimbische Belohnungssystem verläuft vom ventralen Tegmentum über den Nucleus accumbens bis zum präfrontalen Kortex.",
          },
          {
            nr: 2,
            text: "Moderne Therapieansätze kombinieren medikamentöse Behandlung mit psychotherapeutischen Verfahren.",
          },
          {
            nr: 3,
            text: "Der präfrontale Kortex ist für Impulskontrolle und Entscheidungsfindung zuständig.",
          },
          {
            nr: 4,
            text: "Amphetamine blockieren die Wiederaufnahme von Dopamin in die präsynaptische Zelle.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "2. und 3. sind richtig." },
          { key: "B", beschreibung: "1. und 4. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 4. ist richtig." },
          { key: "E", beschreibung: "Alle sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt den Verlauf des mesolimbischen Systems genau so. Aussage 2 ist korrekt: Der Text nennt die Kombination aus Medikamenten und Psychotherapie. Aussage 3 ist korrekt: Der Text schreibt dem präfrontalen Kortex diese Funktionen zu. Aussage 4 ist falsch: Amphetamine steigern die Freisetzung von Dopamin aus den Vesikeln; Kokain blockiert die Wiederaufnahme.",
      },
    ],
  },
];
