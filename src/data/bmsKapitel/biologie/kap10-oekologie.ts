import type { Kapitel } from '../types';

export const bioKap10: Kapitel = {
  id: 'bio-kap10',
  title: 'Ökologie',
  subject: 'biologie',
  icon: '🌿',
  estimatedTime: '75 min',
  unterkapitel: [
    {
      id: 'bio-10-01',
      title: 'Abiotische Faktoren — Toleranzkurven und Liebigs Minimum',
      content: `## Abiotische Faktoren — Definition

**Abiotische Faktoren** sind nicht-lebende Umweltkomponenten, die Organismen beeinflussen. Wichtigste Faktoren: Temperatur, Licht(intensität und -qualität), Wasser (Verfügbarkeit und Qualität), Boden (pH, Nährstoffe, Textur), Salzgehalt, Strömungsgeschwindigkeit.

## Toleranzkurve (Reaktionskurve)

Die **Toleranzkurve** beschreibt die Reaktion eines Organismus (Wachstum, Reproduktion, Aktivität) auf einen abiotischen Faktor. Sie hat typischerweise eine Glockenkurvenform:

- **Optimum:** Bereich des maximalen Wohlbefindens / maximaler Aktivität
- **Toleranzbereich (Präferenzbereich):** Bereich, in dem der Organismus überleben kann, aber unter Stress
- **Pessimum / Grenzwert:** Bereich extremer Belastung, nahe der physiologischen Grenze
- **Todespunkt (Minimum/Maximum):** Außerhalb dieses Bereichs stirbt der Organismus

Arten mit breitem Toleranzbereich heißen **euryök** (z. B. Ratte, Fuchs — anpassungsfähig an viele Bedingungen). Arten mit engem Toleranzbereich heißen **stenök** (z. B. Panda — nur Bambus; Korallen — nur 23–29°C). Stenöke Arten reagieren empfindlich auf Umweltveränderungen.

## Liebigs Minimumgesetz

Justus von Liebig (1840): Das **Minimumgesetz** besagt, dass das Wachstum eines Organismus durch denjenigen Faktor begrenzt wird, der am stärksten vom Optimum abweicht (der limitierende Faktor), unabhängig von der Verfügbarkeit anderer Faktoren.

Analogie: Das Wasser in einem Fass mit Lücken in den Holzdauben kann nur so hoch steigen wie die kürzeste Daube — egal wie lang die anderen sind.

Anwendung in der Landwirtschaft: Stickstoff ist häufig der limitierende Faktor für Pflanzenwachstum, auch wenn Wasser, Licht und andere Nährstoffe ausreichend vorhanden sind → Stickstoffdünger.

## Zeigerorganismen (Bioindikatoren)

**Zeigerpflanzen** sind stenöke Arten, die als Indikatoren für bestimmte Umweltbedingungen dienen. Ellenberg-Zeigerwerte charakterisieren Pflanzen nach Licht, Temperatur, Kontinentalität, Feuchtigkeit, pH und Stickstoff.

Beispiele:
- Brennnessel (*Urtica dioica*): Zeigt stickstoffreiche Böden an
- Heidekraut (*Calluna vulgaris*): Zeigt saure, nährstoffarme Böden an
- Bachbett-Moose: Zeigen sauberes Wasser an (sensitiv gegenüber Schadstoffen)`,
      lernziele: [
        "Abiotische Faktoren aufzählen und das Konzept der Toleranzkurve (Optimum, Pessimum, euryök/stenök) erklären",
        "Das Liebig'sche Minimumgesetz erläutern und seine Bedeutung für Landwirtschaft und Ökologie beschreiben",
        "Den Begriff des Bioindikators (Zeigerorganismus) erläutern und Beispiele nennen",
      ],
      sections: [
        {
          heading: "Toleranzkurven im Vergleich — euryök vs. stenök",
          text: "Die Unterscheidung zwischen euryöken und stenöken Arten hat praktische Konsequenzen für den Naturschutz. Euryöke Arten (z. B. Hausratte, Krähe, Fuchs) überleben in einem breiten Spektrum von Umweltbedingungen — sie sind Generalisten, die von menschlichen Eingriffen oft profitieren. Stenöke Arten (z. B. Eisbär: nur kalte Temperaturen; Korallenriff-Organismen: nur bestimmte Wassertemperatur und -qualität) reagieren sensibel auf Umweltveränderungen und sind stark gefährdet durch den Klimawandel. Der Begriff 'ökologische Amplitudo' beschreibt die Breite des Toleranzbereichs. Generalisten haben breite ökologische Amplitudos, Spezialisten (Stenöken) enge.",
          merksatz: "Euryök = breiter Toleranzbereich (Generalist, widerstandsfähig). Stenök = enger Toleranzbereich (Spezialist, empfindlich, Indikatorart).",
        },
        {
          heading: "Liebigs Minimum in der modernen Ökologie",
          text: "Das Liebig'sche Minimumgesetz gilt nicht nur für Pflanzen-Nährstoffe, sondern für alle Ökosystemsprozesse. In der Gewässerökologie ist Phosphor oft der limitierende Faktor für Algenblüten — selbst bei ausreichend Stickstoff und Licht wächst das Phytoplankton nicht, wenn Phosphor fehlt. Bei übermäßiger Phosphateinleitung (Eutrophierung) explodiert das Algenwachstum, führt zu Sauerstoffmangel und Fischsterben. In der Klimaforschung ist CO₂ (als Kohlenstoffquelle für Photosynthese) in Hochleistungs-Gewächshäusern oft kein limitierender Faktor mehr — Licht und Wasser sind die begrenzenden Faktoren. Das Minimumgesetz wurde später von Shelford zum Toleranzgesetz erweitert: Auch ein Überangebot (Maximum) kann limitierend wirken.",
          merksatz: "Liebig: Wachstum wird durch den knappsten Faktor (Minimum) begrenzt — nicht durch die reichlichen. Shelford erweiterte: Auch Maximum (Überschuss) kann schaden.",
        },
      ],
      merksätze: [
        "Toleranzkurve: Optimum — Toleranzbereich — Pessimum — Todespunkt. Euryök = breit, stenök = eng.",
        "Liebigs Minimumgesetz: der limitierende Faktor bestimmt das Wachstum, nicht die reichlichen Faktoren.",
        "Bioindikatoren (Zeigerorganismen): stenöke Arten zeigen Umweltbedingungen an (Brennnessel = Stickstoff, Heidekraut = saurer Boden).",
      ],
      klinischerBezug: "Das Konzept des limitierenden Faktors ist in der Intensivmedizin analog: Ein kritisch kranker Patient kann trotz optimaler Beatmung und Kreislaufunterstützung an einem Nährstoffmangel (z. B. Selen, Zink) sterben — der Mangelfaktor bestimmt das Outcome, nicht die optimierten Parameter.",
      altfrage: {
        question: "Erklären Sie Liebigs Minimumgesetz und nennen Sie ein Beispiel aus der Landwirtschaft und eines aus der Gewässerökologie.",
        answer: "Liebigs Minimumgesetz: Das Wachstum eines Organismus wird durch denjenigen Umweltfaktor begrenzt, der am weitesten vom Optimum entfernt ist (am stärksten im Minimum), unabhängig von der Verfügbarkeit anderer Faktoren. Landwirtschaft: Stickstoff ist oft der limitierende Faktor für Getreidewachstum — trotz ausreichend Wasser, Licht und anderen Nährstoffen ist das Wachstum begrenzt, bis Stickstoffdünger zugefügt wird. Gewässer: Phosphor ist oft der limitierende Faktor für Phytoplanktonwachstum — Phosphat-Einleitung aus Kläranlagen führt zur Eutrophierung (übermäßiges Algenwachstum).",
      },
      selfTest: [
        {
          question: "Wie nennt man Arten mit einem sehr engen Toleranzbereich, die nur unter spezifischen Umweltbedingungen überleben können?",
          options: [
            "Euryöke Arten",
            "Generalisten",
            "Stenöke Arten",
            "Ubiquisten",
            "Opportunisten",
          ],
          correctIndex: 2,
          explanation: "Stenöke Arten (von griech. stenos = eng) haben einen engen Toleranzbereich und können nur in einem schmalen Spektrum von Umweltbedingungen überleben. Beispiele: Korallenriff-Organismen (nur bestimmter Temperatur-/pH-Bereich), Panda (nur Bambus als Nahrung). Stenöke Arten sind wertvolle Bioindikatoren, aber auch besonders gefährdet durch Umweltveränderungen.",
          hints: [
            "Steno (griech.) = eng. Welcher Begriff beschreibt Arten mit engem Toleranzbereich?",
            "Euryök = breit, stenök = eng. Welche sind anfälliger für Umweltveränderungen?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Bauer versucht, seinen Weizenertrag zu verbessern. Er fügt mehr Wasser, Licht und Kalium hinzu, aber der Ertrag steigt kaum. Dann fügt er Stickstoffdünger hinzu und der Ertrag steigt stark. Was erklärt das?",
          options: [
            "Stickstoff ist toxisch für Schädlinge und verbessert deshalb den Ertrag",
            "Stickstoff war der limitierende Faktor (Minimumgesetz von Liebig)",
            "Wasser, Licht und Kalium waren überflüssig",
            "Der Weizen adaptierte sich an Stickstoffzugabe durch Mutation",
            "Stickstoff ist der einzige Nährstoff, den Pflanzen brauchen",
          ],
          correctIndex: 1,
          explanation: "Liebigs Minimumgesetz erklärt dieses Muster: Das Wachstum wird durch den am stärksten limitierenden Faktor bestimmt. Obwohl Wasser, Licht und Kalium vorhanden waren, war Stickstoff im Minimum — er war der limitierende Faktor. Erst als dieser Mangel behoben wurde, konnte das Wachstumspotenzial ausgeschöpft werden. Weitere Zugaben von Wasser etc. hätten keine Wirkung gezeigt, solange Stickstoff begrenzt war.",
          hints: [
            "Der Faktor, der fehlt, bestimmt das Wachstum — nicht die vorhandenen Faktoren.",
            "Liebig: Das schwächste Glied der Kette bestimmt die Stärke der Kette.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Die Brennnessel (Urtica dioica) wächst bevorzugt auf stickstoffreichen Böden. In welcher Eigenschaft fungiert sie dabei?",
          options: [
            "Als euryöke Art mit breitem Toleranzbereich",
            "Als Bioproduktion (Primärproduzent)",
            "Als Bioindikator (Zeigerpflanze) für stickstoffreiche Böden",
            "Als K-Stratege in nährstoffreichen Habitaten",
            "Als invasive Art in gestörten Ökosystemen",
          ],
          correctIndex: 2,
          explanation: "Die Brennnessel ist ein klassischer Bioindikator (Zeigerpflanze) für stickstoffreiche Böden: Sie wächst bevorzugt in der Nähe von Kompost, Dungplätzen, Latrinen und auf gedüngten Flächen. Das Ellenberg-Stickstoffzeigerfeld N8–9 klassifiziert sie als Zeiger für stickstoffreiche Standorte. Bioindikatoren sind meist stenöke Arten, die bestimmte Umweltbedingungen bevorzugen.",
          hints: [
            "Bioindikatoren 'zeigen' Umweltbedingungen an — was 'zeigt' die Brennnessel an?",
            "Zeigerpflanzen = stenöke Arten, die spezifische Umweltbedingungen bevorzugen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welcher Bereich der Toleranzkurve zeigt das physiologische Optimum eines Organismus?",
          options: [
            "Der Bereich niedrigster Aktivität nahe dem Todespunkt",
            "Der Bereich, in dem der Organismus überleben, aber nicht optimal gedeihen kann (Pessimum)",
            "Der Bereich maximaler Aktivität und Fitness (Optimum-Bereich)",
            "Der Bereich jenseits der Überlebensgrenzen (Letalbereich)",
            "Der Bereich, in dem andere Arten konkurrenzüberlegen sind",
          ],
          correctIndex: 2,
          explanation: "Das physiologische Optimum ist der Bereich auf der Toleranzkurve, in dem der Organismus maximale Aktivität, Wachstum und Reproduktion zeigt. In diesem Bereich sind die physiologischen Prozesse am effizientesten. Außerhalb des Optimums, aber noch im Toleranzbereich, kann der Organismus überleben, ist aber physiologisch gestresst (Pessimum). Jenseits der Toleranzgrenzen (Minimum und Maximum) tritt der Tod ein.",
          hints: [
            "Optimum = lat. für 'das Beste'. Wo auf der Glockenkurve liegt der höchste Punkt?",
            "Das Optimum ist von Pessimum (schlechtester noch überlebbarer Bereich) zu unterscheiden.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was bedeutet es, wenn ein Organismus als 'euryök' bezeichnet wird?",
          options: [
            "Der Organismus ist auf eine sehr spezifische Nahrungsquelle spezialisiert",
            "Der Organismus hat einen breiten Toleranzbereich und kann in vielen verschiedenen Umweltbedingungen überleben",
            "Der Organismus lebt ausschließlich in extremen Habitaten (Extremophil)",
            "Der Organismus hat kein Optimum und reagiert gleichmäßig auf alle Bedingungen",
            "Der Organismus ist ein Parasit mit breitem Wirtsspektrum",
          ],
          correctIndex: 1,
          explanation: "Euryöke Arten (von griech. eurys = breit) haben eine breite ökologische Amplitude — sie tolerieren ein weites Spektrum von Umweltbedingungen und sind Generalisten. Beispiele: Ratte, Fuchs, Krähe. Diese Arten profitieren oft von der Vielfalt der Umgebungen, die menschliche Siedlungen bieten. Im Gegensatz zu stenöken Arten (enges Toleranzspektrum) sind euryöke Arten weniger gefährdet durch Umweltveränderungen.",
          hints: [
            "Eurys (griech.) = breit. Welcher Begriff beschreibt Arten mit breitem Toleranzbereich?",
            "Euryök = Generalist (viele Bedingungen toleriert). Stenök = Spezialist (enge Anforderungen).",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-10-02',
      title: 'Biotische Faktoren — Konkurrenz, Prädation und Symbiose',
      content: `## Biotische Faktoren — Definition

**Biotische Faktoren** sind lebende Bestandteile der Umwelt, die Organismen beeinflussen: andere Individuen derselben Art (intraspezifisch) und andere Arten (interspezifisch). Wichtigste biotische Wechselwirkungen: Konkurrenz, Prädation, Symbiose (Mutualismus, Kommensalismus, Parasitismus).

## Intraspezifische Konkurrenz

**Intraspezifische Konkurrenz** bezeichnet den Wettbewerb zwischen Individuen derselben Art um begrenzte Ressourcen (Nahrung, Territorium, Paarungspartner). Reguliert die Populationsdichte dichteabhängig — je höher die Dichte, desto stärker die Konkurrenz → logistisches Wachstum.

## Interspezifische Konkurrenz und Gauß-Prinzip

**Interspezifische Konkurrenz** bezeichnet den Wettbewerb zwischen Individuen verschiedener Arten um dieselbe Ressource. Das **Gauß'sche Prinzip (Konkurrenzausschlussprinzip):** Zwei Arten, die dieselbe ökologische Nische besetzen, können nicht dauerhaft koexistieren — eine Art verdrängt die andere (competitive exclusion). Lösung: **Nischendifferenzierung** — Arten entwickeln Unterschiede in Ressourcennutzung, Habitat oder Zeit → ermöglicht Koexistenz.

## Prädation und Räuber-Beute-Zyklen

**Prädation** ist eine +/- Interaktion: Räuber (+) profitieren; Beute (-) wird geschädigt. Räuber-Beute-Systeme zeigen charakteristische **Zyklen**: Wenn Beutetiere zunehmen → Räuberpopulation wächst → Beutepopulation nimmt ab → Räuberpopulation schrumpft → Beutetiere nehmen wieder zu.

**Lotka-Volterra-Gleichungen** (1926) modellieren diese Dynamik mathematisch. Klassisches Beispiel: Kanadischer Luchs und Schneehasepopulation — Zyklen von ca. 10 Jahren.

## Symbiose

**Symbiose** (im weiteren Sinn) bezeichnet enges Zusammenleben verschiedener Arten:

- **Mutualismus (+/+):** Beide Arten profitieren. Beispiele: Wurzelknöllchen (Rhizobium-Bakterien und Leguminosen), Mykorrhiza (Pilz-Wurzel-Gemeinschaft), Reinigungsfische und Haie
- **Kommensalismus (+/0):** Eine Art profitiert, die andere wird nicht beeinflusst. Beispiel: Epiphyten auf Baumstämmen
- **Parasitismus (+/-):** Parasit profitiert auf Kosten des Wirts. Endoparasiten (Bandwurm, Plasmodium) und Ektoparasiten (Zecke, Laus). Unterschied zu Prädation: Parasit tötet Wirt selten sofort.`,
      lernziele: [
        "Intraspezifische und interspezifische Konkurrenz unterscheiden und das Gauß'sche Konkurrenzausschlussprinzip erläutern",
        "Räuber-Beute-Zyklen beschreiben und die Bedeutung der Lotka-Volterra-Gleichungen erklären",
        "Die verschiedenen Formen der Symbiose (Mutualismus, Kommensalismus, Parasitismus) mit Beispielen unterscheiden",
      ],
      sections: [
        {
          heading: "Räuber-Beute-Dynamik und Lotka-Volterra",
          text: "Alfred Lotka und Vito Volterra entwickelten unabhängig (1925/1926) ein mathematisches Modell der Räuber-Beute-Dynamik. Das Modell basiert auf zwei gekoppelten Differentialgleichungen: (1) Beutewachstum durch intrinsisches Wachstum minus Prädationsrate; (2) Räuberwachstum durch Nahrungsaufnahme minus Sterberate. Das Modell sagt oszillierende Zyklen vorher — die Räuberpopulation hinkt der Beutepopulation zeitlich nach. In der Realität sind Lotka-Volterra-Zyklen selten rein — Umweltrauschen, Migration und andere Nahrungsquellen dämpfen die Schwingungen. Das klassische Beispiel ist der Schneehasenzyklus in Kanada (Daten aus Pelztierjagdaufzeichnungen der Hudson Bay Company). Räuber sind oft wichtige Regulatoren der Ökosystemstabilität: Das Wiedereinführen von Wölfen in Yellowstone (1995) veränderte das gesamte Ökosystem (Trophic Cascade).",
          merksatz: "Lotka-Volterra: Räuber und Beute zeigen versetzte Zyklen. Räuberpopulation folgt der Beutepopulation zeitlich nach.",
        },
        {
          heading: "Mutualismus — Enge Wechselseitigkeit",
          text: "Mutualismus ist eine symbiotische Beziehung, bei der beide Partner profitieren. Manche mutualistischen Beziehungen sind so eng, dass beide Partner ohne einander nicht überleben können (obligater Mutualismus). Beispiele: Mykorrhizapilze (colonisieren die meisten Landpflanzen) — Pilz liefert Wasser und Mineralien (v. a. Phosphat); Pflanze liefert Photosynthate (Zucker). Leguminosen und Rhizobium-Bakterien: Bakterien in Wurzelknöllchen fixieren atmosphärischen Stickstoff (N₂ → NH₃), der für die Pflanze nutzbar ist; die Pflanze liefert Kohlenhydrate. Diese Beziehung ist für die globale Stickstoffverfügbarkeit essenziell. Darmflora und Mensch: Darmbakterien liefern Vitamine, bauen unverdauliche Kohlenhydrate ab und schützen vor Pathogenen; im Gegenzug erhalten sie Nahrung und Habitat.",
          merksatz: "Mutualismus (+/+): Mykorrhiza (Pilz + Pflanze), Leguminosen + Rhizobium, Darmflora + Mensch. Fakultativ oder obligat.",
        },
      ],
      merksätze: [
        "Konkurrenzausschlussprinzip (Gauß): Zwei Arten in derselben Nische → eine verdrängt die andere. Lösung: Nischendifferenzierung.",
        "Räuber-Beute-Zyklen: versetzte Oszillationen. Lotka-Volterra-Modell. Räuber regulieren Beutepopulationen.",
        "Symbioseformen: Mutualismus (+/+), Kommensalismus (+/0), Parasitismus (+/-). Prädation (+/-) tötet Beute sofort.",
      ],
      klinischerBezug: "Parasitismus ist medizinisch hochrelevant: Plasmodium falciparum (Malaria), Trypanosoma (Schlafkrankheit), Toxoplasma gondii (Toxoplasmose) sind obligate Endoparasiten des Menschen. Das Mikrobiom als mutualistisches Ökosystem wird zunehmend als Einflussgröße auf Immunität, Stoffwechsel und sogar psychische Gesundheit (Darm-Hirn-Achse) erkannt.",
      altfrage: {
        question: "Was besagt das Konkurrenzausschlussprinzip (Gauß'sches Prinzip) und wie wird Koexistenz trotzdem ermöglicht?",
        answer: "Das Konkurrenzausschlussprinzip (G.F. Gauß, 1934) besagt, dass zwei Arten, die vollständig dieselbe ökologische Nische besetzen, nicht dauerhaft koexistieren können — eine Art wird die andere verdrängen. Koexistenz ist jedoch möglich durch Nischendifferenzierung: Arten entwickeln durch Evolution Unterschiede in der Ressourcennutzung (z. B. verschiedene Nahrungsgrößen), im genutzten Habitat (z. B. verschiedene Baumschichten) oder in der zeitlichen Aktivität (z. B. tag- vs. nachtaktiv). Durch diese Differenzierung überlappen sich die Nischen weniger und Konkurrenz wird reduziert.",
      },
      selfTest: [
        {
          question: "Zwei Vogeljarten besiedeln dasselbe Gebiet und fressen dieselben Insekten in derselben Baumschicht. Was prognostiziert das Konkurrenzausschlussprinzip?",
          options: [
            "Beide Arten werden stärker und gedeihen gemeinsam",
            "Eine Art wird die andere langfristig verdrängen",
            "Beide Arten werden durch Prädation reguliert",
            "Beide Arten werden durch Mutation neue Nischen entwickeln",
            "Beide Arten fusionieren zu einer Hybridart",
          ],
          correctIndex: 1,
          explanation: "Das Konkurrenzausschlussprinzip (Gauß) besagt: Wenn zwei Arten dieselbe ökologische Nische besetzen, wird die überlegene Konkurrenzart die andere verdrängen. Da beide Vogelarten identische Ressourcen und Habitate nutzen, befinden sie sich in direkter Konkurrenz. Die Art mit der höheren Reproduktions- und Überlebensrate in diesem spezifischen Umfeld wird langfristig dominieren, die andere wird abgenommen oder das Gebiet verlassen.",
          hints: [
            "Gauß'sches Prinzip: Eine Nische kann dauerhaft nur von einer Art besetzt werden.",
            "Wenn zwei Arten gleich sind, welche überlebt — die eine oder die andere? Eine muss weichen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Wechselwirkung beschreibt das Verhältnis zwischen Rhizobium-Bakterien und Leguminosen?",
          options: [
            "Parasitismus — die Bakterien schädigen die Pflanzenwurzeln",
            "Kommensalismus — die Bakterien profitieren, die Pflanze ist unbeeinflusst",
            "Mutualismus — beide Partner profitieren (Bakterien: Nahrung; Pflanze: Stickstoff)",
            "Prädation — die Pflanze verdaut die Bakterien",
            "Konkurrenz — beide kämpfen um denselben Stickstoff",
          ],
          correctIndex: 2,
          explanation: "Rhizobium-Bakterien und Leguminosen (Hülsenfrüchte, z. B. Erbsen, Bohnen, Klee) unterhalten eine mutualistisch (+/+) Beziehung: Die Bakterien leben in Wurzelknöllchen der Pflanze und fixieren atmosphärischen Stickstoff (N₂ → NH₃), der für die Pflanze nutzbar wird. Die Pflanze liefert Kohlenhydrate (aus Photosynthese) als Energiequelle für die Bakterien. Beide profitieren — das ist Mutualismus.",
          hints: [
            "Was leisten die Bakterien für die Pflanze? Was leistet die Pflanze für die Bakterien?",
            "Wenn beide Partner profitieren, welche Symbioseform liegt vor?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei Räuber-Beute-Zyklen nach dem Lotka-Volterra-Modell gilt: Wenn die Beutepopulation ihren Höhepunkt erreicht...",
          options: [
            "sinkt die Räuberpopulation gleichzeitig",
            "erreicht die Räuberpopulation ebenfalls ihren Höhepunkt gleichzeitig",
            "beginnt die Räuberpopulation zu steigen und erreicht ihren Höhepunkt zeitlich nach der Beute",
            "wird die Räuberpopulation durch Konkurrenz verdrängt",
            "sinkt die Beutepopulation sofort auf null",
          ],
          correctIndex: 2,
          explanation: "In Lotka-Volterra-Zyklen hinkt die Räuberpopulation der Beutepopulation zeitlich nach. Wenn die Beute ihren Höhepunkt erreicht, beginnt die Räuberpopulation erst stark zu wachsen (viel Nahrung vorhanden). Die Räuber erreichen ihren Höhepunkt zeitlich nach dem Beutehöhepunkt. Dann fällt durch Überprädation die Beutepopulation, gefolgt von der Räuberpopulation (Nahrungsmangel). Der Zyklus beginnt von vorn.",
          hints: [
            "Wie viel Nahrung ein Räuber hat, bestimmt, wie viele Räuber sich fortpflanzen — was kommt zuerst?",
            "Räuber-Zyklus folgt dem Beute-Zyklus: erst viel Beute → dann viele Räuber → dann wenig Beute.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Beispiel zeigt Kommensalismus?",
          options: [
            "Bandwurm im menschlichen Darm — Bandwurm profitiert, Mensch verliert Nährstoffe",
            "Reinigungsfische entfernen Parasiten von Haien — beide profitieren",
            "Epiphyten (z. B. Orchideen) wachsen auf Baumästen für Licht — Orchidee profitiert, Baum kaum beeinflusst",
            "Luchse fressen Schneehasen — Luchs profitiert, Schneehasepopulation nimmt ab",
            "Löwen und Geparden konkurrieren um Beutetiere — beide werden beeinflusst",
          ],
          correctIndex: 2,
          explanation: "Kommensalismus (+/0): Eine Art profitiert, die andere wird nicht nennenswert beeinflusst. Epiphyten (z. B. Orchideen, Bromelien) wachsen auf Baumästen, um Zugang zu Licht zu haben — sie leben nicht parasitisch von der Pflanze (keine Haustoria). Der Baum trägt nur das zusätzliche Gewicht, wird aber weder geschädigt noch gefördert (im Wesentlichen). Das ist Kommensalismus.",
          hints: [
            "Kommensalismus: +/0. Wer profitiert? Wer ist unbeeinflusst?",
            "Epiphyten sitzen auf dem Baum, zapfen ihn aber nicht an — sie nutzen nur den Standort.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Worin unterscheidet sich Parasitismus von Prädation?",
          options: [
            "Parasitismus ist positiv für beide Arten; Prädation nur für eine",
            "Parasitismus tötet den Wirt normalerweise sofort; Prädation tötet nur selten",
            "Parasitismus tötet den Wirt normalerweise nicht sofort und lebt auf/in ihm; Prädation tötet die Beute sofort",
            "Parasitismus betrifft nur Pflanzen; Prädation betrifft nur Tiere",
            "Es gibt keinen biologischen Unterschied zwischen Parasitismus und Prädation",
          ],
          correctIndex: 2,
          explanation: "Parasitismus (+/-): Der Parasit profitiert auf Kosten des Wirts, tötet ihn aber normalerweise nicht sofort — ein toter Wirt wäre für den Parasiten nachteilig (kein Lebensraum, keine Nahrung mehr). Parasiten sind in der Regel kleiner als der Wirt. Prädation (+/-): Der Räuber tötet die Beute sofort (oder schnell). Der Räuber ist meist gleich groß oder größer als die Beute. Beide Interaktionen haben das gleiche Vorzeichen (+/-), unterscheiden sich aber im Ablauf und der Sterblichkeitsrate des Betroffenen.",
          hints: [
            "Ein Parasit will seinen Wirt lebendig halten — warum?",
            "Was ist vorteilhafter für einen Parasiten: ein toter oder ein lebendiger Wirt?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-10-03',
      title: 'Populationsökologie — Wachstum und r/K-Strategie',
      content: `## Populationsökologie — Grundbegriffe

**Population:** Individuen einer Art, die im selben Gebiet zur selben Zeit leben und sich potenziell miteinander fortpflanzen können. **Populationsökologie** untersucht Dichte, Wachstum, Struktur und Dynamik von Populationen.

## Exponentielles Wachstum

**Exponentielles Wachstum** tritt auf, wenn Ressourcen unlimitiert verfügbar sind. Die Wachstumsrate ist proportional zur aktuellen Populationsgröße:

dN/dt = r × N

wobei r = intrinsische Wachstumsrate (biotic potential), N = Populationsgröße. Das Ergebnis ist eine J-förmige Wachstumskurve. In der Natur selten nachhaltig — begrenzte Ressourcen führen zu logistischem Wachstum.

## Logistisches Wachstum

**Logistisches Wachstum** berücksichtigt die **Kapazitätsgrenze K** (carrying capacity) — die maximale Populationsgröße, die ein Habitat dauerhaft tragen kann:

dN/dt = r × N × (K - N) / K

Das Ergebnis ist eine **S-förmige (sigmoidale) Wachstumskurve**. Das Wachstum ist maximal bei N = K/2 (Wendepunkt). Bei N = K ist das Wachstum = 0 (Gleichgewicht). Faktoren, die K bestimmen: Nahrungsverfügbarkeit, Brutplätze, Wasser, Territorium.

## r-Strategen und K-Strategen

**r-Strategen (Opportunisten):**
- Hohe Wachstumsrate r, viele Nachkommen
- Kurze Generationszeit, frühe Reife
- Geringe elterliche Fürsorge
- Kleine Körpergröße
- Typisch für frühe Sukzessionsstadien und instabile Umgebungen
- Beispiele: Mäuse, Insekten, Fliegen, einjährige Pflanzen

**K-Strategen (Equalisierer):**
- Populationsgröße nahe K, wenige Nachkommen
- Lange Generationszeit, späte Reife
- Hohe elterliche Fürsorge
- Große Körpergröße
- Typisch für stabile Ökosysteme (Klimaxgesellschaften)
- Beispiele: Elefant, Wal, Mensch, Eiche

## Altersstruktur und Populationsdynamik

Die **Altersstruktur** einer Population zeigt das Verhältnis von Vorreproduk tiven (jung), Reproduktiven (adult) und Nachreproduktiven (alt) Individuen:
- **Wachsende Population:** breite Basis (viele Junge)
- **Stabile Population:** gleichmäßige Pyramide
- **Schrumpfende Population:** schmale Basis (wenige Junge)

**Demographischer Übergang:** Industrialisierung führt zu Übergang von hoher Geburtens- und Sterberate zu niedriger Geburten- und Sterberate (Europa, Japan: schrumpfende Populationen).`,
      lernziele: [
        "Exponentielles und logistisches Wachstum unterscheiden und die Kapazitätsgrenze K erläutern",
        "r-Strategen und K-Strategen mit ihren Merkmalen und Beispielen beschreiben",
        "Altersstruktur-Pyramiden interpretieren und ihre Bedeutung für Populationsdynamik erläutern",
      ],
      sections: [
        {
          heading: "Logistisches Wachstum — Warum S-Kurve?",
          text: "Das logistische Wachstumsmodell nimmt an, dass der Wachstumswiderstand mit zunehmender Populationsdichte steigt (dichteabhängige Regulation). Der Term (K-N)/K drückt aus, welcher Anteil der Kapazität noch 'ungenutzt' ist: Bei N klein ist (K-N)/K ≈ 1 → exponentielles Wachstum. Bei N = K/2 ist der Wachstumsterm maximal. Bei N → K ist (K-N)/K → 0 → kein Wachstum mehr. Die S-Kurve ist ein Modell — reale Populationen überschießen oft K (Overshooting) und oszillieren dann um K. Dichteabhängige Faktoren, die das Wachstum bremsen: Nahrungskonkurrenz, Prädation (steigt mit Beutedichte), Krankheiten (übertragen sich leichter bei hoher Dichte), Territoriumsmangel. Dichteunabhängige Faktoren (z. B. Frost, Dürre) wirken unabhängig von der Dichte.",
          merksatz: "Logistisches Wachstum: dN/dt = rN(K-N)/K. S-Kurve. Maximales Wachstum bei N = K/2. Gleichgewicht bei N = K.",
        },
        {
          heading: "r/K-Kontinuum in der Praxis",
          text: "Die r/K-Unterscheidung ist eine vereinfachende Kontinuum-Konzept — die meisten Organismen liegen irgendwo dazwischen. Das Konzept hat wichtige Anwendungen: In der Fischereiwirtschaft sind viele großkommerzielle Fischarten (Thunfisch, Kabeljau) K-Strategen — sie brauchen lange zur Reife und reproduzieren langsam. Überfischung reduziert die Population unter das Niveau, bei dem maximale Ernte (K/2) möglich ist. Die Population erholt sich langsam. Im Gegensatz dazu erholen sich r-Strategen-Schädlinge (Mäuse, Insekten) schnell nach Bekämpfungsmaßnahmen. Im Naturschutz: K-Strategen (z. B. Elefanten, Wale) sind besonders gefährdet und erholen sich langsam nach Überjagung — Schutzmaßnahmen müssen langfristig angelegt sein.",
          merksatz: "r-Stratege: viele, kleine, schnell wachsende Nachkommen. K-Stratege: wenige, große, langsam wachsende Nachkommen mit Fürsorge.",
        },
      ],
      merksätze: [
        "Exponentielles Wachstum: dN/dt = rN. J-Kurve. Keine Ressourcengrenze. Nur kurzfristig in Natur.",
        "Logistisches Wachstum: dN/dt = rN(K-N)/K. S-Kurve. K = Kapazitätsgrenze. Maximum bei K/2.",
        "r-Strateg: viele Nachkommen, kurze Generationszeit, geringe Fürsorge. K-Strateg: wenige Nachkommen, lange Generationszeit, hohe Fürsorge.",
      ],
      klinischerBezug: "In der Epidemiologie beschreibt das logistische Wachstumsmodell die Ausbreitung von Infektionskrankheiten: Die S-Kurve repräsentiert kumulativ Infizierte, die Kapazitätsgrenze K entspricht dem Anteil der Suszeptiblen. Das SIR-Modell (Susceptible-Infected-Recovered) erweitert dies um Immunität. Herd-Immunität durch Impfung reduziert effektives K und stoppt die Epidemie.",
      altfrage: {
        question: "Erläutern Sie den Unterschied zwischen r-Strategen und K-Strategen mit je einem Beispiel und erklären Sie, in welcher Umgebung jede Strategie vorteilhaft ist.",
        answer: "r-Strategen investieren in maximale Reproduktionsrate: viele, kleine Nachkommen, kurze Generationszeit, geringe elterliche Fürsorge. Vorteilhaft in instabilen, unvorhersehbaren Umgebungen (Frühsukzessionsstadien, Störungsökosysteme), wo schnelles Wachstum wichtiger ist als Anpassung. Beispiel: Maus (viele Junge pro Jahr, kurze Generationszeit). K-Strategen investieren in Qualität: wenige, große Nachkommen mit intensiver Fürsorge. Vorteilhaft in stabilen, vorhersehbaren Umgebungen nahe K, wo Konkurrenzfähigkeit wichtiger ist als Wachstumsrate. Beispiel: Elefant (1 Kalb alle 4–5 Jahre, lange Jugendphase).",
      },
      selfTest: [
        {
          question: "Was ist die 'Kapazitätsgrenze K' im logistischen Wachstumsmodell?",
          options: [
            "Die Geschwindigkeit, mit der eine Population wächst",
            "Die maximale Populationsgröße, die ein Habitat dauerhaft tragen kann",
            "Der Zeitpunkt des schnellsten Bevölkerungswachstums",
            "Der Wert der intrinsischen Wachstumsrate",
            "Die minimale Population, bei der eine Art aussterben würde",
          ],
          correctIndex: 1,
          explanation: "Die Kapazitätsgrenze K (carrying capacity) ist die maximale Populationsgröße, die ein Habitat dauerhaft unterstützen kann, gegeben die verfügbaren Ressourcen (Nahrung, Wasser, Brutplätze, Territorium). Im logistischen Wachstumsmodell ist K der Gleichgewichtspunkt — bei N = K ist das Wachstum null, weil Ressourcen vollständig ausgeschöpft sind.",
          hints: [
            "K = 'capacity'. Was bestimmt, wie viele Individuen ein Lebensraum tragen kann?",
            "Bei N = K ist dN/dt = 0 — die Population wächst nicht mehr. Warum?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Mäusepopulation hat eine kurze Generationszeit, viele Jungtiere pro Wurf und geringe elterliche Fürsorge. Welcher Evolutionsstrategie entspricht das?",
          options: [
            "K-Strategie",
            "r-Strategie",
            "Gemischte Strategie (intermediate)",
            "K-Strategie unter Ressourcenmangel",
            "Parasitische Strategie",
          ],
          correctIndex: 1,
          explanation: "Mäuse sind klassische r-Strategen: hohe intrinsische Wachstumsrate r, viele Nachkommen pro Reproduktionszyklus, kurze Generationszeit (Geschlechtsreife in 6 Wochen), geringe elterliche Investition pro Jungtier. Diese Strategie ermöglicht schnelle Populationserholung nach Dezimierung und ist vorteilhaft in unvorhersehbaren Umgebungen.",
          hints: [
            "r in r-Strategie steht für die intrinsische Wachstumsrate — hohe Rate = r-Stratege.",
            "Mäuse vs. Elefanten: Wer hat mehr Nachkommen, wer hat eine kürzere Generationszeit?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei welcher Populationsgröße ist das Wachstum im logistischen Modell am größten?",
          options: [
            "Bei sehr kleiner Populationsgröße (N nahe 0)",
            "Bei N = K (Kapazitätsgrenze)",
            "Bei N = K/2 (halbe Kapazitätsgrenze)",
            "Bei N = 2K (doppelte Kapazitätsgrenze)",
            "Das Wachstum ist bei allen Populationsgrößen gleich",
          ],
          correctIndex: 2,
          explanation: "Im logistischen Modell dN/dt = rN(K-N)/K ist die Wachstumsrate bei N = K/2 maximal, da hier das Produkt N × (K-N) seinen Höchstwert erreicht (Wendepunkt der S-Kurve). Bei kleinem N ist wenig reproduzierendes Material vorhanden; bei N nahe K ist die Ressourcenbegrenzung stark. Der Kompromiss liegt bei K/2 — dieses Konzept ist grundlegend für die Ernte-Theorie (maximale nachhaltige Ernte bei K/2 der Population).",
          hints: [
            "Der Wendepunkt der S-Kurve liegt in der Mitte — bei welchem N-Wert?",
            "Im Fischfang: Wo liegt die maximale nachhaltige Ernte — bei voller oder halber Kapazitätsgrenze?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Bevölkerungspyramide einer Population zeigt eine schmale Basis und eine breite Mitte. Was bedeutet das für die Populationsdynamik?",
          options: [
            "Die Population wächst stark (viele Junge)",
            "Die Population ist stabil (gleichmäßige Altersverteilung)",
            "Die Population schrumpft (wenige Junge, überwiegend alte Individuen)",
            "Die Population nähert sich der Kapazitätsgrenze K",
            "Die Population zeigt r-Strategie",
          ],
          correctIndex: 2,
          explanation: "Eine Altersstruktur-Pyramide mit schmaler Basis (wenige Junge) und breiter Mitte (viele Erwachsene) zeigt eine schrumpfende Population: Die Geburtenrate ist geringer als die Sterberate. Wenige Jungtiere bedeuten, dass die reproduktive Klasse nicht vollständig ersetzt wird. Dies ist typisch für Industrieländer mit niedrigen Geburtenraten (Deutschland, Japan).",
          hints: [
            "Breite Basis = viele Junge = Wachstum. Schmale Basis = wenige Junge = ?",
            "Welche Länder haben niedrige Geburtenraten und alternde Gesellschaften?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum erholen sich überfischte K-Strategen-Fischbestände (z. B. Kabeljau) langsamer als r-Strategen?",
          options: [
            "Weil K-Strategen schnellere Mutationsraten haben",
            "Weil K-Strategen in tiefem Wasser leben und schwerer zu schützen sind",
            "Weil K-Strategen wenige Nachkommen, lange Generationszeiten und intensive Jungenaufzucht haben — eine langsame Reproduktionsrate",
            "Weil K-Strategen durch Konkurrenz mit r-Strategen verdrängt werden",
            "Weil r-Strategen speziell für Erholung nach Überfischung evolviert sind",
          ],
          correctIndex: 2,
          explanation: "K-Strategen zeichnen sich durch wenige Nachkommen und lange Generationszeiten aus. Nach Überfischung dauert es viele Jahre, bis Kabeljau (Geschlechtsreife mit 3–8 Jahren) wieder reproduktionsreife Individuen hervorbringt, und die Nachwuchsrate ist gering. r-Strategen (z. B. Heringe) haben kürzere Generationszeiten und mehr Nachkommen — sie erholen sich schneller. Dies macht K-Strategen besonders anfällig für Überfischung und erklärt, warum Bestände wie Atlantik-Kabeljau (Großer Bankenkollaps 1992) sich trotz Fangverboten nur sehr langsam erholen.",
          hints: [
            "Kurze Generationszeit → schnelle Erholung. Welche Strategie hat kurze Generationszeiten?",
            "K-Strategen investieren viel in jeden Nachkommen — haben sie viele oder wenige?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-10-04',
      title: 'Ökologische Nische',
      content: `## Ökologische Nische — Definition

Der Begriff **ökologische Nische** beschreibt die gesamte Rolle einer Art im Ökosystem — nicht nur ihren physischen Lebensraum (Habitat), sondern alle Umweltbedingungen und Ressourcen, die eine Art nutzt, und ihren funktionellen Beitrag zum Ökosystem.

**Grinnell'sche Nische** (1917): räumliche Nische — Habitat, Ernährung, Verhalten.
**Eltonian Nische** (1927): funktionale Nische — Rolle der Art im Nahrungsnetz (was frisst sie, was frisst sie?).
**Hutchinsonsche Nische** (1957): N-dimensionale Hypervolumen-Nische — jede Umweltvariable ist eine Dimension.

## Fundamentale vs. realisierte Nische

**Fundamentale Nische:** Der gesamte Bereich an Umweltbedingungen, unter dem eine Art theoretisch überleben und sich reproduzieren könnte (ohne Konkurrenz).

**Realisierte Nische:** Der tatsächlich von einer Art genutzte Bereich, der durch Konkurrenz, Prädation und andere biotische Interaktionen eingeschränkt ist. Immer kleiner als oder gleich der fundamentalen Nische.

Beispiel: Barnacles (Seepocken) auf Felsen: *Chthamalus* kann sowohl in der oberen als auch unteren Gezeitenzone überleben (fundamentale Nische), wird aber von *Semibalanus* aus der unteren Zone verdrängt (realisierte Nische = nur obere Zone). *Semibalanus* besetzt nur die untere Zone (kann nicht in der oberen überleben).

## Konkurrenzausschlussprinzip und Nischendifferenzierung

Das Gauß'sche Prinzip besagt: Zwei Arten in identischer Nische → eine wird verdrängt. Die Koexistenz wird durch **Nischendifferenzierung** ermöglicht: Arten entwickeln durch Selektion Unterschiede in der Ressourcennutzung.

**Character Displacement (Charakterverschiebung):** In Gebieten, wo zwei ähnliche Arten koexistieren, entwickeln sie sich morphologisch stärker auseinander als in Gebieten, wo nur eine Art vorkommt. Dies reduziert die Konkurrenz. Klassisches Beispiel: Darwinfinken auf Galapagos — Schnabelgrößen divergieren, wo zwei Arten koexistieren.

## Nischen-Überlappung und Ressourcenteilung

**Nischen-Überlappung** ist unvermeidbar in artenreichen Lebensgemeinschaften. **Ressourcenteilung (Resource Partitioning):** Arten mit ähnlichen Nischen teilen Ressourcen durch räumliche Trennung (verschiedene Baumschichten), zeitliche Trennung (tag- vs. nachtaktiv) oder Ernährungsunterschiede (verschiedene Beutetiergröße). Erhöht die Artenvielfalt in einem Habitat.`,
      lernziele: [
        "Den Unterschied zwischen fundamentaler und realisierter Nische erläutern",
        "Das Konzept der Nischendifferenzierung und Character Displacement beschreiben",
        "Das Hutchinsonsche Nischen-Konzept als multidimensionales Hypervolumen erklären",
      ],
      sections: [
        {
          heading: "Seepocken-Experiment — Fundamentale vs. realisierte Nische",
          text: "Das klassische Experiment von Connell (1961) mit Seepocken auf schottischen Felsen illustriert den Unterschied zwischen fundamentaler und realisierter Nische perfekt. Chthamalus stellatus lebt in der oberen Gezeitenzone (trocken, heiß), Semibalanus balanoides in der unteren (feucht, kälter). Wenn Connell Semibalanus aus der unteren Zone entfernte, besiedelte Chthamalus die untere Zone — seine fundamentale Nische umfasst also auch die untere Zone. Wenn Chthamalus aus der oberen Zone entfernt wurde, drang Semibalanus in die obere Zone ein — auch seine fundamentale Nische umfasst die obere Zone. Im natürlichen Zustand ist Chthamalus auf die obere Zone beschränkt (realisierte Nische < fundamentale Nische), weil Semibalanus in der unteren Zone konkurrenzüberlegen ist. Semibalanus ist auf die untere Zone beschränkt (abiotische Begrenzung: trocknet in der oberen Zone aus).",
          merksatz: "Fundamentale Nische: alles, was theoretisch möglich ist. Realisierte Nische: tatsächlich genutzt (durch Konkurrenz und andere biotische Faktoren eingeschränkt).",
        },
        {
          heading: "Character Displacement — Evolution durch Konkurrenz",
          text: "Character Displacement (Brown & Wilson, 1956) beschreibt das Phänomen, dass in Gebieten wo zwei ähnliche Arten koexistieren (Sympatrie), ihre Merkmale (z. B. Schnabelgröße, Körpergröße) stärker divergieren als in Gebieten, wo jede Art allein vorkommt (Allopatrie). Der Mechanismus: Konkurrenzdruck selektiert für Individuen, die sich von der Konkurrenzart unterscheiden — sie nutzen Ressourcen, die nicht von der anderen Art genutzt werden. Über Generationen führt dies zur morphologischen Divergenz. Klassisches Beispiel: Darwinfinken auf Galapagos-Inseln, wo mehrere Finkenarten koexistieren, haben stärker differenzierte Schnabelgrößen als auf Inseln mit nur einer Finkenart. Character Displacement reduziert die Nischenüberlappung und ermöglicht Koexistenz.",
          merksatz: "Character Displacement: Koexistenz → evolutionäre Divergenz der Merkmale. Beispiel: Darwinfinken-Schnabelgrößen divergieren dort, wo Arten koexistieren.",
        },
      ],
      merksätze: [
        "Fundamentale Nische = theoretisch möglich (ohne biotische Interaktion). Realisierte Nische = tatsächlich genutzt (kleiner durch Konkurrenz).",
        "Nischendifferenzierung: Koexistenz durch räumliche, zeitliche oder Ressourcentrennung.",
        "Character Displacement: Konkurrenz treibt morphologische Divergenz zwischen koexistierenden Arten.",
      ],
      klinischerBezug: "Das Nischenkonzept wird in der Mikrobiologie auf das Darmmikrobiom angewendet: Viele Bakterienarten koexistieren durch Nischendifferenzierung (verschiedene Substrate, verschiedene Darmabschnitte, verschiedene pH-Toleranzen). Antibiotika-Gabe kann diese Nischen stören und opportunistischen Pathogenen (z. B. Clostridioides difficile) ermöglichen, die leere Nische zu besetzen.",
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen fundamentaler und realisierter Nische anhand eines konkreten Beispiels.",
        answer: "Die fundamentale Nische ist der gesamte Bereich an Umweltbedingungen, unter dem eine Art theoretisch überleben und sich reproduzieren könnte, wenn keine anderen Arten (Konkurrenten, Räuber) vorhanden wären. Die realisierte Nische ist der tatsächlich von einer Art genutzte Bereich, der durch biotische Interaktionen (v. a. Konkurrenz) eingeschränkt wird. Beispiel: Im Seepocken-Experiment kann Chthamalus prinzipiell in der gesamten Gezeitenzone überleben (fundamentale Nische), ist aber durch die überlegene Konkurrenz von Semibalanus auf die obere Zone beschränkt (realisierte Nische).",
      },
      selfTest: [
        {
          question: "Wie wird die 'realisierte Nische' einer Art im Vergleich zur 'fundamentalen Nische' beschrieben?",
          options: [
            "Die realisierte Nische ist größer als die fundamentale Nische",
            "Die realisierte Nische ist immer gleich groß wie die fundamentale Nische",
            "Die realisierte Nische ist kleiner als oder gleich der fundamentalen Nische (durch biotische Faktoren eingeschränkt)",
            "Die realisierte Nische beschreibt nur die Nahrungsquelle der Art",
            "Realisierte und fundamentale Nische sind synonyme Begriffe",
          ],
          correctIndex: 2,
          explanation: "Die realisierte Nische ist immer kleiner als oder gleich der fundamentalen Nische. Die fundamentale Nische beschreibt, was theoretisch möglich wäre (ohne Konkurrenz, Prädation etc.), die realisierte Nische das, was tatsächlich genutzt wird. Biotische Interaktionen (v. a. Konkurrenz) schränken die fundamentale Nische auf die realisierte Nische ein. In der Abwesenheit von Konkurrenten kann eine Art ihre fundamentale Nische voll nutzen.",
          hints: [
            "Fundamental = theortisch. Realisiert = in der Praxis. Was passiert durch Konkurrenz mit der nutzbaren Nische?",
            "Biotische Faktoren schränken ein — machen sie die Nische größer oder kleiner?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Auf einer Galapagos-Insel mit zwei koexistierenden Finkenarten haben die Vögel deutlich unterschiedliche Schnabelgrößen. Auf einer Nachbarinsel mit nur einer dieser Arten sind die Schnabelgrößen homogener. Was beschreibt dieses Phänomen?",
          options: [
            "Konkurrenzausschluss (eine Art wird verdrängt)",
            "Character Displacement (Charakterverschiebung durch Konkurrenz)",
            "Gendrift in kleinen Inselpopulationen",
            "Allopatrische Artbildung durch geografische Isolation",
            "Mutualistischer Koevolution zwischen den Finkenarten",
          ],
          correctIndex: 1,
          explanation: "Character Displacement beschreibt, dass in Sympatrie (Koexistenz) koexistierende Arten morphologisch stärker divergieren als in Allopatrie (ohne die andere Art). Auf Inseln mit zwei Finkenarten selektiert Konkurrenzdruck für Individuen mit Schnabelgrößen, die die Konkurrenzart am wenigsten imitieren — dies führt zu evolutionärer Divergenz der Schnabelgrößen. Auf Inseln mit nur einer Art fehlt dieser Selektionsdruck.",
          hints: [
            "Wo Konkurrenz wirkt (Koexistenz), wird morphologische Divergenz selektiert.",
            "Character Displacement = Charakter (Merkmal) verschiebt sich (Displacement) durch Konkurrenz auseinander.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was beschreibt das Hutchinsonsche Nischen-Konzept (multidimensionales Hypervolumen)?",
          options: [
            "Die geografische Verteilung einer Art auf einer Karte",
            "Die Nische als n-dimensionalen Raum, bei dem jede Umweltvariable eine Dimension darstellt",
            "Die evolutionäre Geschichte einer Art über Millionen von Jahren",
            "Die Biomasse einer Art in einem Ökosystem",
            "Die Anzahl der anderen Arten, mit denen eine Art interagiert",
          ],
          correctIndex: 1,
          explanation: "G. Evelyn Hutchinson (1957) definierte die Nische als n-dimensionales Hypervolumen: Jede relevante Umweltvariable (Temperatur, Feuchtigkeit, Nahrungsgröße, pH, etc.) wird als eigene Dimension dargestellt. Die Nische einer Art ist das Volumen in diesem mehrdimensionalen Raum, innerhalb dessen die Art überlebt und sich reproduziert. Dieses abstrakte Konzept ermöglicht präzisere Nischenvergleiche als eindimensionale Beschreibungen.",
          hints: [
            "Hutchinson dachte die Nische als mathematischen Raum. Jede Variable ist eine Achse.",
            "n-dimensional = viele Dimensionen gleichzeitig berücksichtigen. Welche Umweltvariablen könnten Dimensionen sein?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Drei Vogelarten fressen ähnliche Insekten, koexistieren aber in demselben Wald. Art A frisst in der Baumkrone, Art B auf mittlerer Höhe, Art C am Boden. Wie wird diese Koexistenz ermöglicht?",
          options: [
            "Durch Prädation — eine Art frisst die anderen",
            "Durch räumliche Nischendifferenzierung (Ressourcenteilung)",
            "Durch Mutualism zwischen den drei Arten",
            "Durch genetische Isolation (verschiedene Chromosomenzahlen)",
            "Durch Parasitismus (eine Art schwächt die anderen)",
          ],
          correctIndex: 1,
          explanation: "Räumliche Nischendifferenzierung ermöglicht die Koexistenz ähnlicher Arten, indem sie unterschiedliche Ressourcen nutzen oder denselben Lebensraum räumlich aufteilen. Hier nutzen alle drei Vogelarten ähnliche Nahrung (Insekten), aber in verschiedenen Höhenzonen des Waldes — dadurch ist die direkte Konkurrenz reduziert. Dies ist ein Beispiel für Ressourcenteilung (Resource Partitioning).",
          hints: [
            "Alle drei Arten fressen Insekten — aber wo? Das ist der entscheidende Unterschied.",
            "Koexistenz durch Unterschiede in der Raumnutzung ist ein klassisches Nischendifferenzierungs-Beispiel.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "In Abwesenheit des Konkurrenten kann eine Art ihre fundamentale Nische voll nutzen. Was demonstriert dieses Prinzip?",
          options: [
            "Dass realisierte Nische = fundamentale Nische ohne Konkurrenten",
            "Dass alle Arten dieselbe fundamentale Nische haben",
            "Dass Konkurrenz die fundamentale Nische vergrößert",
            "Dass fundamentale Nischen immer kleiner sind als realisierte Nischen",
            "Dass Prädation die wichtigste Einschränkung der Nische ist",
          ],
          correctIndex: 0,
          explanation: "In Abwesenheit von Konkurrenten (und anderen biotischen Einschränkungen) kann eine Art die gesamte fundamentale Nische nutzen — realisierte Nische = fundamentale Nische. Dies wurde im Seepocken-Experiment demonstriert: Als Semibalanus entfernt wurde, besiedelte Chthamalus die gesamte Gezeitenzone (seine fundamentale Nische). Das zeigt, dass die realisierte Nische durch biotische Interaktionen eingeschränkt wird, nicht durch abiotische Faktoren allein.",
          hints: [
            "Was passiert, wenn der Konkurrent weg ist? Die Art kann ihren theoretisch möglichen Bereich nutzen.",
            "Fundamentale Nische = was möglich ist. Realisierte Nische = was tatsächlich genutzt wird.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-10-05',
      title: 'Ökosysteme, Stoffkreisläufe und Umweltschutz',
      content: `## Ökosystem — Definition und Struktur

Ein **Ökosystem** umfasst alle Lebewesen (Biozönose) in einem definierten Lebensraum (Biotop) und ihre Wechselwirkungen untereinander sowie mit der abiotischen Umgebung. Ökosysteme sind offene Systeme — Energie fließt durch sie hindurch, Materie zirkuliert in Kreisläufen.

## Trophische Ebenen und Nahrungsnetze

**Produzenten (Autotrophe):** Pflanzen, Algen, Cyanobakterien — produzieren organische Substanz aus anorganischer Energie (Licht oder Chemosynthese). Basis jedes Ökosystems.

**Konsumenten (Heterotrophe):** Herbivore (K1), Karnivore (K2, K3), Omnivore. Konsumieren organische Substanz.

**Destruenten (Zersetzer):** Bakterien und Pilze — zersetzen organisches Material zu anorganischen Verbindungen (Mineralisierung).

**10%-Regel:** Beim Übergang von einer Trophieebene zur nächsten werden ca. 90% der Energie als Wärme abgegeben — nur ~10% sind für die nächste Ebene verfügbar. Daher: Je höher die Trophieebene, desto weniger Biomasse kann getragen werden.

**Nahrungsnetz:** Realistische Verknüpfung vieler Nahrungsketten. Kettenreaktionen möglich: Verlust eines Schlüsselprädators kann Herbivoren explodieren lassen → Vegetationsschäden.

## Kohlenstoffkreislauf

CO₂ aus der Atmosphäre wird durch Photosynthese in organische Verbindungen umgewandelt. Durch Respiration, Verbrennung (fossile Brennstoffe) und Zersetzung wird CO₂ freigesetzt. **Anthropogene Störung:** Verbrennung fossiler Brennstoffe und Abholzung setzen in geologisch kurzer Zeit enorme CO₂-Mengen frei → Treibhauseffekt → Klimaerwärmung.

## Stickstoffkreislauf

Atmosphärischer N₂ wird durch Stickstoff-fixierende Bakterien (Rhizobium, Azotobacter, Cyanobakterien) in Ammoniak (NH₃) umgewandelt. Nitrifikation: NH₃ → NO₂⁻ → NO₃⁻ (Nitrat, von Pflanzen aufnehmbar). Denitrifikation: NO₃⁻ → N₂ (zurück in Atmosphäre, durch Bakterien in anaeroben Bedingungen).

**Anthropogene Störung:** Stickstoffdünger → Nitratauswaschung → Eutrophierung der Gewässer.

## Biodiversität und Umweltschutz

**Biodiversität** umfasst: Artenvielfalt, genetische Vielfalt, Ökosystemvielfalt. Artenvielfalt wird durch den **Shannon-Index** quantifiziert. Biodiversität erhöht Ökosystemstabilität (Redundanz) und Produktivität.

**Bedrohungen:** Habitatverlust (Hauptursache), Übernutzung, invasive Arten, Klimawandel, Verschmutzung. **Massenaussterben:** Aktuelle Rate ~100–1.000× natürliche Hintergrundrate.`,
      lernziele: [
        "Produzenten, Konsumenten und Destruenten in einem Ökosystem und die 10%-Regel erläutern",
        "Den Kohlenstoff- und Stickstoffkreislauf mit den wichtigsten Schritten beschreiben",
        "Ursachen des Biodiversitätsverlusts nennen und die Bedeutung von Biodiversität erläutern",
      ],
      sections: [
        {
          heading: "10%-Regel und ihre Konsequenzen",
          text: "Die 10%-Regel besagt, dass beim Übergang von einer Trophieebene zur nächsten durchschnittlich nur 10% der Energie als Biomasse weitergegeben wird — 90% gehen als Wärme (Metabolismus, Bewegung), unverdauliche Teile (Fäkalien) und nicht genutzte Biomasse verloren. Konsequenz: Eine Nahrungskette kann selten mehr als 4–5 Ebenen haben, weil die verfügbare Energie zu schnell abnimmt. Ernährungsrelevanz: Pflanzliche Ernährung ist energieeffizienter als tierische — um 1 kg Rindfleisch zu erzeugen, werden ~10 kg Pflanzenmasse benötigt. Ein Mensch, der Getreide direkt isst (2. Ebene), verbraucht 10× weniger Pflanzenbiomasse als jemand, der Rindfleisch isst (3. Ebene). Diese Berechnung unterstützt Argumente für pflanzliche Ernährung aus ökologischer Sicht.",
          merksatz: "10%-Regel: von jeder Trophieebene zur nächsten bleiben ~10% der Energie. Lange Nahrungsketten = ineffizient. Pflanzliche Ernährung = energieeffizienter.",
        },
        {
          heading: "Stickstoffkreislauf — Biologische und anthropogene Einflüsse",
          text: "Der Stickstoffkreislauf ist komplex und wird von spezialisierten Bakteriengruppen getrieben. Stickstoffixierung: Rhizobium (Leguminosen-Symbiont), frei lebende Azotobacter und Cyanobakterien reduzieren N₂ → NH₃ (nur diese Prokaryoten können das Triple-Bond von N₂ brechen). Ammonifikation: Destruenten zersetzen organische Stickstoffverbindungen → NH₃. Nitrifikation: Nitrosomonas (NH₃ → NO₂⁻) und Nitrobacter (NO₂⁻ → NO₃⁻) — nur unter aeroben Bedingungen. Denitrifikation: Paracoccus denitrificans und andere Anaerobe (NO₃⁻ → N₂). Die Haber-Bosch-Synthese (industrielle N₂-Fixierung für Dünger) hat die natürliche Stickstoffixierungsrate vervielfacht und zur Eutrophierung vieler Gewässer und terrestrischer Ökosysteme geführt.",
          merksatz: "Stickstoffkreislauf: N₂-Fixierung (Rhizobium) → Nitrifikation (NH₃ → NO₃⁻) → Pflanzenaufnahme → Mineralisierung → Denitrifikation (NO₃⁻ → N₂).",
        },
      ],
      merksätze: [
        "10%-Regel: ~10% der Energie werden an die nächste Trophieebene weitergegeben; 90% Verlust als Wärme.",
        "Kohlenstoffkreislauf: CO₂ → Photosynthese → organisch → Respiration/Verbrennung → CO₂. Fossile Brennstoffe = gespeicherter Kohlenstoff.",
        "Stickstoffkreislauf: N₂-Fixierung → Nitrifikation → Denitrifikation. Rhizobium fixiert N₂ in Leguminosen-Wurzeln.",
      ],
      klinischerBezug: "Der Klimawandel hat direkte medizinische Konsequenzen: Ausbreitung tropischer Krankheitsvektoren (Aedes aegypti-Mücken → Dengue, Zika, Chikungunya) in bisher temperierte Regionen. Hitzestress erhöht kardiovaskuläre und renale Morbidität. Schlechte Luftqualität (Ozon, Feinstaub durch Waldbrandrauch) verschlechtert Atemwegserkrankungen.",
      altfrage: {
        question: "Erklären Sie die 10%-Regel und ihre Implikation für die Länge von Nahrungsketten.",
        answer: "Die 10%-Regel besagt, dass beim Übergang von einer Trophieebene zur nächsten nur etwa 10% der in der unteren Ebene gespeicherten Energie als Biomasse an die nächste Ebene weitergegeben wird. 90% gehen als Wärme (Metabolismus), durch Exkretion und unverdauliche Anteile verloren. Konsequenz: Nahrungsketten können selten mehr als 4–5 Ebenen haben, da nach wenigen Stufen die verfügbare Energie zu gering wird, um eine Räuberpopulation zu erhalten. Beispiel: 1.000 kg Pflanzenmasse → 100 kg Herbivore → 10 kg Karnivore → 1 kg Spitzenprädator.",
      },
      selfTest: [
        {
          question: "Welche Gruppe spielt die Rolle der 'Destruenten' in einem Ökosystem?",
          options: [
            "Pflanzenfresser (Herbivore)",
            "Spitzenprädatoren wie Adler und Wölfe",
            "Autotrophe Organismen wie Pflanzen",
            "Bakterien und Pilze, die organisches Material mineralisieren",
            "Omnivore, die sowohl Pflanzen als auch Tiere fressen",
          ],
          correctIndex: 3,
          explanation: "Destruenten (Zersetzer) — hauptsächlich Bakterien und Pilze — zersetzen totes organisches Material (Falllaub, Kadaver, Fäkalien) durch Mineralisation zu anorganischen Verbindungen (CO₂, Wasser, Mineralien). Diese werden wieder für Produzenten (Pflanzen) verfügbar. Destruenten schließen damit die Kreisläufe und sind essentiell für die Nährstoffverfügbarkeit im Ökosystem.",
          hints: [
            "Destruenten = lat. destruere = zerstören/zersetzen. Wer baut organisches Material ab?",
            "Ohne Destruenten würden Nährstoffe in totem Material akkumulieren — Pflanzen hätten keinen Zugang.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Nahrungskette lautet: Gras → Heuschrecke → Frosch → Schlange → Adler. Wenn der Adler 10 kJ Energie enthält, wie viel Energie (ungefähr) war im Gras vorhanden (10%-Regel)?",
          options: [
            "100 kJ",
            "1.000 kJ",
            "10.000 kJ",
            "100.000 kJ",
            "1.000.000 kJ",
          ],
          correctIndex: 2,
          explanation: "Die Nahrungskette hat 5 Glieder: Gras (P) → Heuschrecke (K1) → Frosch (K2) → Schlange (K3) → Adler (K4). Von Gras zu Adler sind 4 Übergänge, bei jedem Übergang bleiben 10%. Adler: 10 kJ. Schlange: 10 kJ / 0,1 = 100 kJ. Frosch: 100 kJ / 0,1 = 1.000 kJ. Heuschrecke: 1.000 / 0,1 = 10.000 kJ. Gras: 10.000 / 0,1 = 100.000 kJ. Also 100.000 kJ im Gras.",
          hints: [
            "Bei jedem Übergang bleiben 10% = der Kehrwert ist ×10 pro Ebene rückwärts.",
            "Zählen Sie die Übergänge: von Gras zu Adler sind es 4 Schritte. 10⁴ = 10.000 × 10 kJ.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche anthropogene Aktivität ist die Hauptursache für die erhöhten CO₂-Konzentrationen in der Atmosphäre?",
          options: [
            "Intensive Landwirtschaft durch erhöhte Bodenatmung",
            "Verbrennung fossiler Brennstoffe (Kohle, Öl, Erdgas)",
            "Zunahme der Weltbevölkerung und damit der Atmung",
            "Überdüngung mit Stickstoffdünger",
            "Abnahme der Meerestemperatur",
          ],
          correctIndex: 1,
          explanation: "Die Verbrennung fossiler Brennstoffe (Kohle, Erdöl, Erdgas) ist die Hauptursache für den anthropogenen CO₂-Anstieg. Fossile Brennstoffe enthalten Kohlenstoff, der vor Millionen von Jahren in Pflanzen und Meeresorganismen gespeichert wurde. Verbrennung setzt diesen gespeicherten Kohlenstoff als CO₂ frei — in geologisch sehr kurzer Zeit. Entwaldung ist die zweitwichtigste Ursache (Photosynthese-Kapazität reduziert).",
          hints: [
            "Fossile Brennstoffe = gebundener Kohlenstoff aus der Erdgeschichte. Verbrennen = CO₂ freisetzen.",
            "Welche menschliche Aktivität setzt in kurzer Zeit riesige Mengen gespeicherter Kohlenstoffverbindungen frei?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Organismen sind für die biologische Stickstoff-Fixierung (N₂ → NH₃) verantwortlich?",
          options: [
            "Alle grünen Pflanzen durch Photosynthese",
            "Tiere durch Proteinhydrolyse",
            "Prokaryoten wie Rhizobium, Azotobacter und Cyanobakterien",
            "Pilze durch Destruktion organischen Materials",
            "Nitrifizierende Bakterien (Nitrosomonas, Nitrobacter)",
          ],
          correctIndex: 2,
          explanation: "Nur bestimmte Prokaryoten können das sehr stabile N₂-Molekül (dreifache Bindung) aufbrechen und in Ammoniak (NH₃) umwandeln — dieser Prozess erfordert das Enzym Nitrogenase. Wichtige Stickstoff-Fixierer: Rhizobium (in Wurzelknöllchen von Leguminosen, Symbiose), Azotobacter (frei lebend im Boden), Cyanobakterien (Wasser und terrestrische Ökosysteme). Nitrifizierende Bakterien (Nitrosomonas, Nitrobacter) oxidieren NH₃ zu Nitrat, fixieren aber keinen N₂.",
          hints: [
            "N₂-Fixierung = dreifache Bindung von N₂ aufbrechen. Nur wenige Organismen haben das nötige Enzym (Nitrogenase).",
            "Rhizobium in Leguminosen-Knöllchen ist das klassische Beispiel — welche Organismengruppe ist das?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Hauptursache für den weltweiten Biodiversitätsverlust?",
          options: [
            "Übernutzung durch Jagd und Fischerei",
            "Einschleppung invasiver Arten",
            "Klimawandel",
            "Habitatverlust und -fragmentierung",
            "Verschmutzung durch Chemikalien",
          ],
          correctIndex: 3,
          explanation: "Habitatverlust und -fragmentierung ist die mit Abstand wichtigste Ursache des aktuellen Biodiversitätsverlusts. Durch Abholzung, Urbanisierung, Umwandlung in Ackerland und Entwässerung werden natürliche Lebensräume zerstört oder in kleine, isolierte Fragmente aufgeteilt. Fragmentierung verhindert genetischen Austausch zwischen Populationen und erhöht den Aussterberisiko kleiner Subpopulationen. Die weiteren Ursachen (Übernutzung, invasive Arten, Klimawandel, Verschmutzung) sind ebenfalls bedeutend, aber in ihrer Gesamtwirkung derzeit kleiner als Habitatverlust.",
          hints: [
            "Der Lebensraum einer Art ist die grundlegendste Ressource — was passiert, wenn er verschwindet?",
            "Welche menschliche Aktivität verändert die Erdoberfläche am stärksten?",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
