import type { Kapitel } from '../types';

export const bioKapOekologie: Kapitel = {
  id: 'bio-kap5',
  title: "Ökologie & Immunologie",
  subject: 'biologie',
  icon: '🌿',
  estimatedTime: '90 min',
  unterkapitel: [
    // === from kap10-oekologie ===

    {
      id: "bio-10-01",
      title: "Abiotische Faktoren — Toleranzkurven und Liebigs Minimum",
      content: `## Abiotische Faktoren — Definition und Überblick

**Abiotische Faktoren** sind die nicht-lebenden, physikalisch-chemischen Komponenten der Umwelt, die Organismen direkt beeinflussen. Sie umfassen Temperatur, Lichtintensität und Lichtqualität (Wellenlänge), Wasser (Verfügbarkeit, Salzgehalt, pH), Boden (Textur, pH, Nährstoffgehalt, Humusanteil), atmosphärischen Gasdruck, Strömungsgeschwindigkeit in Gewässern sowie Windverhältnisse. Jeder dieser Faktoren kann das Überleben, Wachstum und die Reproduktion eines Organismus limitieren. Das Zusammenspiel aller abiotischen Faktoren definiert das physikalische Habitat.

Abiotische Faktoren wirken dabei nicht unabhängig voneinander: hohe Temperatur erhöht die Evapotranspiration und kann Wassermangel verschärfen; niedriger pH kann die Löslichkeit von Schwermetallen erhöhen und diese toxisch wirken lassen. Die Ökologie analysiert diese Wechselwirkungen systematisch.

## Toleranzkurve (Reaktionskurve nach Shelford)

Die **Toleranzkurve** (Reaktionskurve) beschreibt die Reaktion eines Organismus — gemessen an Wachstum, Reproduktionsrate oder Überlebenswahrscheinlichkeit — auf einen abiotischen Faktor bei konstantem Wert aller anderen Faktoren. Die Kurve hat typischerweise eine Glockenkurvenform mit folgenden Zonen:

**Optimumbereich:** Hier zeigt der Organismus maximale Fitness, Wachstum und Reproduktion. Die physiologischen Prozesse laufen mit höchster Effizienz ab. Dieser Bereich ist charakteristisch für eine Art und hat evolutionär adaptiven Wert.

**Toleranzbereich (Präferenzbereich):** Beidseitig des Optimums kann der Organismus noch überleben und sich reproduzieren, ist aber physiologisch gestresst. Stressreaktionen werden aktiviert (z. B. Hitzeschockproteine, Antioxidantien), Wachstum und Reproduktion sind reduziert.

**Pessimum / Stressbereich:** Extreme Bedingungen, die zur Aktivierung maximaler Stressmechanismen führen. Überleben ist noch möglich, aber Reproduktion und Wachstum sind stark eingeschränkt oder eingestellt.

**Todespunkt (letale Grenzen):** Jenseits dieser Grenzen sterben Organismen ab — physiologische Anpassungsmechanismen sind überfordert (Proteindenaturierung, Membranschäden, irreversible Enzymhemmung).

Die **ökologische Amplitude** bezeichnet die Breite des gesamten Toleranzbereichs zwischen den beiden Todespunkten. Sie ist ein Maß für die Plastizität eines Organismus gegenüber Umweltschwankungen.

## Euryöke vs. stenöke Arten

**Euryöke Arten** (griech. eurys = breit) haben eine breite ökologische Amplitude und tolerieren ein weites Spektrum von Umweltbedingungen. Sie sind ökologische **Generalisten** und reagieren wenig empfindlich auf Umweltveränderungen. Beispiele: Hausratte (*Rattus norvegicus*) — lebt in Wüsten wie in Arktis nahen Gebieten; Fuchs (*Vulpes vulpes*) — von Tundra bis Wüste; Krähe (*Corvus corone*) — nahezu weltweit verbreitet.

**Stenöke Arten** (griech. stenos = eng) haben eine enge ökologische Amplitude und können nur in einem schmalen Spektrum von Umweltbedingungen überleben. Sie sind ökologische **Spezialisten**. Beispiele: Großer Panda (*Ailuropoda melanoleuca*) — nur Bambus als Nahrung; Korallen — nur bei 23–29°C und sehr engem pH-Fenster; Goldregenpfeifer — brütet nur in arktischer Tundra. Stenöke Arten reagieren hoch empfindlich auf Habitatveränderungen und Klimawandel; sie eignen sich als **Bioindikatoren** (Zeigerorganismen) für bestimmte Umweltbedingungen.

## Liebigs Minimumgesetz

Justus von Liebig formulierte 1840 sein **Minimumgesetz** ursprünglich für Pflanzenwachstum: Das Wachstum eines Organismus wird durch denjenigen Umweltfaktor begrenzt, der am weitesten vom Optimum entfernt ist (am stärksten im Minimum), unabhängig von der Verfügbarkeit aller anderen Faktoren.

Die klassische **Holzfass-Analogie**: Ein Fass mit unterschiedlich langen Holzdauben kann nur so viel Wasser halten, wie die kürzeste Daube erlaubt — egal wie lang die anderen Dauben sind. Die kürzeste Daube ist der limitierende Faktor.

**Anwendungsbeispiele:**
- *Landwirtschaft:* Stickstoff ist auf vielen Böden der limitierende Faktor für Getreidewachstum, selbst bei optimaler Bewässerung und ausreichend Kalium/Phosphor → Stickstoffdüngung
- *Gewässerökologie:* Phosphor ist häufig der limitierende Faktor für Phytoplanktonwachstum; Phosphateinleitung aus Kläranlagen führt zu Eutrophierung (Algenblüten, Sauerstoffmangel, Fischsterben)
- *Arktische Ökosysteme:* Licht ist im Winter der limitierende Faktor für die Primärproduktion

**Shelfords Toleranzgesetz (1913)** erweiterte Liebigs Gesetz: Nicht nur das Minimum, sondern auch ein Überangebot (Maximum) eines Faktors kann limitierend wirken. Beispiel: Zu viel Licht (Photoinhibition), zu viel Wasser (Wurzelfäule durch Sauerstoffmangel), Stickstoffüberdüngung → Toxizität. Das Toleranzgesetz erfasst somit beide Extrema der Toleranzkurve.

## Bioindikatoren (Zeigerorganismen)

**Bioindikatoren** sind Organismen, deren Vorkommen, Häufigkeit oder Vitalität zuverlässig auf bestimmte Umweltbedingungen schließen lässt. Sie sind meist stenöke Arten mit engem Toleranzbereich.

**Ellenberg-Zeigerwerte** klassifizieren Zeigerpflanzen nach Licht (L), Temperatur (T), Kontinentalität (K), Feuchtigkeit (F), Bodenreaktion/pH (R) und Stickstoff (N) auf einer Skala von 1–9.

Klassische Beispiele:
- *Brennnessel (Urtica dioica)* — Zeigt stickstoffreiche (N8–9), ruderalisierte Böden an (Kompostplätze, Dungstätten, gestörte Böden)
- *Heidekraut (Calluna vulgaris)* — Zeigt saure (R1–2), nährstoffarme, gut drainierte Böden an
- *Moose in Fließgewässern* — Sensitive Bioindikatoren für Wasserqualität und Saprobie (Verschmutzungsgrad)
- *Flechten* — Extrem sensitiv gegenüber SO₂ (Luftverschmutzung); Fehlen von Flechten in Städten zeigt Luftverschmutzung an (Flechtenwüste)
- *Makroinvertebraten in Gewässern* — Eintagesfliegenlarven (Ephemeroptera) nur in sauberem Wasser; Wasserasseln in stark verschmutztem Wasser

Das **Saprobiensystem** klassifiziert Gewässer nach dem organischen Belastungsgrad anhand von Indikatororganismen in vier Saprobiezonen (oligosaprob bis polysaprob).`,
      lernziele: [
        "Abiotische Faktoren aufzählen und das Konzept der Toleranzkurve (Optimum, Pessimum, Todespunkt, ökologische Amplitude) erläutern",
        "Den Unterschied zwischen euryöken und stenöken Arten erklären und Beispiele nennen",
        "Das Liebigsche Minimumgesetz und Shelfords Toleranzgesetz erläutern und praktische Anwendungen beschreiben",
        "Den Begriff Bioindikator erklären und konkrete Beispiele aus Pflanzen und Tieren nennen",
      ],
      sections: [
        {
          heading: "Euryök vs. stenök — Konsequenzen für den Naturschutz",
          text: 'Die Unterscheidung zwischen euryöken und stenöken Arten ist für den Naturschutz fundamental. Euryöke Generalisten (Fuchs, Krähe, Ratte) profitieren oft von anthropogener Habitatveränderung und Fragmentierung — sie können in gestörten Systemen überleben, wo Spezialisten ausgestorben sind. Stenöke Spezialisten hingegen sind besonders gefährdet: Der Klimawandel verschiebt Temperatur- und Niederschlagszonen, sodass stenöke Arten ihr Habitat verlieren, wenn sie nicht schnell genug migrieren oder sich anpassen können. Bergarten (z. B. Alpen-Murmeltier, Alpenblumen) sind besonders gefährdet, weil sie "bergauf" migrieren müssen — und irgendwann auf dem Gipfel keine weitere Ausweichmöglichkeit haben. Die ökologische Amplitude einer Art bestimmt unmittelbar ihre Vulnerabilität gegenüber Umweltveränderungen und ihre Eignung als Bioindikator.',
          merksatz:
            "Euryök = breite Amplitude, Generalist, widerstandsfähig. Stenök = enge Amplitude, Spezialist, gefährdet, Bioindikator.",
        },
        {
          heading: "Liebigs Minimum in der modernen Ökologie und Medizin",
          text: "Das Minimumgesetz gilt weit über Pflanzenwachstum hinaus. In der Gewässerökologie: Phosphor ist in Süßwasserseen oft der limitierende Faktor (Redfield-Verhältnis C:N:P = 106:16:1 im Phytoplankton). Selbst bei viel Stickstoff und Licht wächst das Phytoplankton nicht ohne Phosphor. Wird Phosphor durch Kläranlagenabwässer zugeführt, explodiert das Algenwachstum (Eutrophierung). In Gewächshäusern der Hochleistungslandwirtschaft wird CO₂ künstlich erhöht — hier ist CO₂ nicht mehr der limitierende Faktor, Licht und Wasser sind es. Shelfords Erweiterung (Toleranzgesetz) ist ebenfalls wichtig: Zu viel Kupfer, Zink oder andere Schwermetalle sind toxisch, obwohl diese Elemente in Spurenmengen essenziell sind. In der Humanmedizin findet sich eine direkte Analogie: Ein Intensivpatient kann trotz optimaler Beatmung, Hämodynamik und Antibiose an einem Mikronährstoffmangel (Selen, Zink, Vitamin D) sterben — der limitierende Mangelfaktor bestimmt das Outcome.",
          merksatz:
            "Liebigs Gesetz gilt für alle Ökosystemebenen: der knappste essentielle Faktor begrenzt das System, nicht die reichlichen. Shelford: auch Überschuss kann limitieren.",
        },
      ],
      merksätze: [
        "Toleranzkurve: Optimum → maximale Fitness. Toleranzbereich → Stress aber Überleben. Pessimum → kaum Reproduktion. Todespunkt → Sterben.",
        "Ökologische Amplitude = Breite des Toleranzbereichs. Euryök = breit (Generalist). Stenök = eng (Spezialist, Bioindikator).",
        "Liebigs Minimumgesetz (1840): das Wachstum wird durch den am stärksten limitierenden Faktor (Minimum) begrenzt, unabhängig von anderen Faktoren.",
        "Shelfords Toleranzgesetz (1913): auch Überschuss (Maximum) kann limitierend und toxisch wirken — erweitert Liebig.",
        "Bioindikatoren (Zeigerorganismen): stenöke Arten als Zeiger für Umweltbedingungen. Brennnessel → Stickstoffreich. Heidekraut → saurer, nährstoffarmer Boden. Flechten → saubere Luft.",
        "Saprobiensystem: Gewässerqualitätsbewertung durch Indikatororganismen (Ephemeroptera = sauber; Tubificiden = stark verschmutzt).",
        "In der Landwirtschaft: Stickstoff oft limitierender Faktor. In Gewässern: Phosphor oft limitierend → Eutrophierung bei Überdüngung.",
        "Medizinische Analogie: Intensivmedizin = Liebig-Prinzip. Schwächstes Glied (Mangelfaktor) bestimmt Überleben, nicht die optimierten Parameter.",
      ],
      klinischerBezug: `Das Minimumgesetz hat eine direkte klinische Entsprechung in der Intensiv- und Ernährungsmedizin: Wie in einem Ökosystem das Wachstum durch den knappsten Nährstoff limitiert wird, kann ein kritisch kranker Patient trotz optimaler Beatmung, Hämodynamik und antibiotischer Therapie an einem einzelnen Mikronährstoffmangel sterben. Selenium-Mangel beeinträchtigt die Glutathionperoxidase-Aktivität und damit den antioxidativen Schutz; Zinkmangel hemmt über 300 Enzyme und das Immunsystem. Das "Refeeding-Syndrom" nach längerer Mangelernährung demonstriert den Minimumsatz dramatisch: Beim Beginn der Ernährungstherapie werden Phosphat, Kalium und Magnesium rasch in Zellen aufgenommen (Anabolismus wird aktiviert) → akuter Mangel im Blut → potentiell letale Herzrhythmusstörungen und neuromuskuläre Störungen. Der klinisch limitierende Faktor muss zuerst identifiziert und behandelt werden.`,
      selfTest: [
        {
          question:
            "Wie nennt man Arten mit einem sehr engen Toleranzbereich, die nur unter spezifischen Umweltbedingungen überleben können und deshalb als Umweltzeiger genutzt werden?",
          options: [
            "Euryöke Arten (Generalisten)",
            "Ubiquisten",
            "Stenöke Arten (Spezialisten)",
            "Opportunisten",
            "Pionierarten",
          ],
          correctIndex: 2,
          explanation:
            "Stenöke Arten (griech. stenos = eng) haben eine enge ökologische Amplitude und tolerieren nur ein schmales Spektrum eines Umweltfaktors. Da sie empfindlich auf Schwankungen reagieren, eignen sie sich hervorragend als Bioindikatoren (Zeigerorganismen): Ihr Vorkommen zeigt spezifische Umweltbedingungen an. Beispiele: Korallen (nur 23–29°C, enges pH-Fenster), Flechten (sensitiv für Luftverschmutzung), Ephemeroptera-Larven (nur in sauberem Wasser). Euryöke Arten (Generalisten) hingegen tolerieren breite Bedingungsspannen.",
          hints: [
            "Stenos (griech.) = eng. Wer hat einen engen Toleranzbereich und ist deshalb als Indikator geeignet?",
            "Bioindikator = Zeiger für Umweltbedingungen. Nur Arten mit engem Toleranzbereich zeigen präzise an, was im Habitat los ist.",
          ],
          difficulty: 1,
          tags: ["stenök", "bioindikator", "toleranzbereich", "spezialist"],
        },
        {
          question:
            "Ein Landwirt fügt seinem Weizenfeld mehr Wasser, Licht und Kalium hinzu, der Ertrag steigt kaum. Nach Zugabe von Stickstoffdünger steigt der Ertrag stark. Was erklärt dieses Phänomen am besten?",
          options: [
            "Stickstoff ist toxisch für Schädlinge und verbessert dadurch den Ertrag",
            "Stickstoff war der limitierende Faktor gemäß Liebigs Minimumgesetz",
            "Wasser, Licht und Kalium waren in toxischer Menge vorhanden",
            "Der Weizen adaptierte sich durch Mutation an Stickstoffzugabe",
            "Shelfords Toleranzgesetz: zu viel Wasser war der limitierende Faktor",
          ],
          correctIndex: 1,
          explanation:
            "Liebigs Minimumgesetz erklärt dieses klassische Muster: Das Wachstum wird durch denjenigen Faktor begrenzt, der am weitesten vom Optimum entfernt ist (der limitierende Faktor). Obwohl Wasser, Licht und Kalium ausreichend vorhanden waren, war Stickstoff im Minimum — erst dessen Zugabe ermöglichte das volle Wachstumspotenzial. Weitere Zugaben der bereits ausreichenden Faktoren hätten keinen Effekt. Die Holzfass-Analogie: Die kürzeste Daube (Stickstoff) bestimmt den Wasserstand, nicht die langen Dauben.",
          hints: [
            "Welcher Faktor war neu hinzugefügt und bewirkte den Ertragsdurchbruch? Der war davor im Mangel.",
            "Liebig: Das schwächste Glied der Kette bestimmt die Stärke — nicht die starken Glieder.",
          ],
          difficulty: 1,
          tags: ["liebig", "minimumgesetz", "limitierender-faktor", "stickstoff"],
        },
        {
          question:
            "Die Brennnessel (Urtica dioica) wächst bevorzugt auf Dungplätzen, Komposthaufen und stark gedüngten Flächen. Welche Funktion übernimmt sie dabei ökologisch?",
          options: [
            "Sie ist ein euryöker Generalist, der überall wächst",
            "Sie ist ein Bioindikator (Zeigerpflanze) für stickstoffreiche Böden",
            "Sie ist ein Pionier in nährstoffarmen Böden (Sukzession)",
            "Sie ist ein K-Stratege in stabilen Klimaxgesellschaften",
            "Sie ist eine invasive Art, die andere Pflanzen verdrängt",
          ],
          correctIndex: 1,
          explanation:
            "Die Brennnessel ist ein klassischer Bioindikator für stickstoffreiche Böden (Ellenberg-Stickstoffzeigerwert N8–9). Als stenöke Art bevorzugt sie stark stickstoffhaltige Standorte und zeigt durch ihr Vorkommen zuverlässig anthropogen oder tierisch gedüngte Böden an. Das Ellenberg-System klassifiziert Zeigerpflanzen nach mehreren Umweltfaktoren — die Brennnessel ist in erster Linie ein N-Zeiger. Bioindikatoren sind wissenschaftlich wertvoller als chemische Sofortmessungen, weil sie langfristige Durchschnittsbedingungen anzeigen.",
          hints: [
            'Bioindikatoren "zeigen" Umweltbedingungen an. Auf welchen Böden wächst die Brennnessel?',
            "Ellenberg-Zeigerwerte klassifizieren Pflanzen nach Stickstoff N1 (arm) bis N9 (reich). Wo liegt die Brennnessel?",
          ],
          difficulty: 1,
          tags: ["brennnessel", "bioindikator", "stickstoff", "ellenberg"],
        },
        {
          question:
            "Ein Süßwassersee hat hohe Stickstoff- und Lichtmengen, aber sehr niedrige Phosphorkonzentrationen. Trotz Stickstoffdüngung steigt die Algenmasse nicht. Was ist der limitierende Faktor?",
          options: [
            "Stickstoff — er ist noch nicht ausreichend vorhanden",
            "Licht — die Algen brauchen mehr Licht",
            "Phosphor — er ist das Minimum im Gewässer gemäß Liebigs Gesetz",
            "CO₂ — die Photosynthese ist CO₂-limitiert",
            "Temperatur — das Wasser ist zu kalt",
          ],
          correctIndex: 2,
          explanation:
            "In Süßwasserseen ist Phosphor sehr häufig der limitierende Faktor für die Primärproduktion (Phytoplankton). Das Redfield-Verhältnis (C:N:P ≈ 106:16:1) zeigt, dass Algen relativ wenig Phosphor brauchen, aber dieser in Süßwasser selten in ausreichender Menge verfügbar ist. Stickstoffzugabe hat keinen Effekt, solange Phosphor im Minimum ist — Liebigs Minimumgesetz. Phosphoreinleitung aus Kläranlagen (Waschmittelphosphat) führt dagegen zu massiver Eutrophierung.",
          hints: [
            "Liebig: Nicht die reichlichen Faktoren bestimmen das Wachstum, sondern der knappste. Was ist knapp?",
            "In Süßwasserseen gilt: P limitiert (nicht N). In Meeresökosystemen oft N limitiert.",
          ],
          difficulty: 2,
          tags: ["phosphor", "eutrophierung", "liebig", "suesswasser"],
        },
        {
          question:
            "Shelfords Toleranzgesetz erweitert Liebigs Minimumgesetz. Was ist der entscheidende Unterschied?",
          options: [
            "Shelford bezieht sich nur auf Tiere, Liebig nur auf Pflanzen",
            "Shelford berücksichtigt, dass auch ein Überangebot (Maximum) eines Faktors limitierend wirken kann",
            "Liebig berücksichtigt Temperatur, Shelford berücksichtigt Licht",
            "Shelford gilt nur für aquatische, Liebig für terrestrische Ökosysteme",
            "Beide Gesetze sind identisch — Shelford hat Liebig nur neu formuliert",
          ],
          correctIndex: 1,
          explanation:
            "Liebig (1840) betrachtete nur das Minimum: Das Wachstum wird durch den knappsten Faktor begrenzt. Shelford (1913) erweiterte dies durch das Toleranzgesetz: Sowohl Minimum als auch Maximum können limitierend wirken. Organismen haben eine obere und untere Toleranzgrenze. Beispiele für Toxizität durch Überangebot: zu viel Kupfer oder Zink ist toxisch (auch wenn Spurenmengen essenziell sind); zu viel Licht → Photoinhibition; Stickstoffüberdüngung → Ammoniumtoxizität; zu viel Wasser → Wurzelfäule durch O₂-Mangel. Das Toleranzgesetz beschreibt damit die gesamte Toleranzkurve mit beiden Extrema.",
          hints: [
            "Liebig sah nur den Mangel als Problem. Was kann noch limitieren, wenn man an die Toleranzkurve denkt?",
            "Toleranzkurve hat zwei Grenzen: Minimum (Mangel) und Maximum (Überschuss). Wer hat das Maximums-Problem ergänzt?",
          ],
          difficulty: 2,
          tags: ["shelford", "toleranzgesetz", "maximum", "liebig-vergleich"],
        },
        {
          question:
            'Flechten sind bekannte Bioindikatoren für Luftverschmutzung. In stark verschmutzten Städten fehlen Flechten fast vollständig ("Flechtenwüste"). Welches Prinzip erklärt dies am besten?',
          options: [
            "Euryökie — Flechten sind zu weit verbreitet, um in Städten vorzukommen",
            "Liebigs Maximumgesetz — SO₂ überschreitet den oberen Toleranzpunkt der Flechten",
            "Logistisches Wachstum — Flechten wachsen zu langsam für das Stadtklima",
            "Konkurrenzausschluss — andere Pflanzen verdrängen Flechten in der Stadt",
            "Prädation — Vögel fressen Flechten bevorzugt in urbanen Gebieten",
          ],
          correctIndex: 1,
          explanation:
            'Flechten (Symbiose aus Pilz und Alge/Cyanobakterium) sind extrem sensitive Bioindikatoren für SO₂-Belastung. Als stenöke Organismen haben sie einen sehr engen Toleranzbereich für Luftschadstoffe, insbesondere SO₂. Das Shelfords Toleranzgesetz zeigt: SO₂ überschreitet den oberen Toleranzpunkt der Flechten — die Konzentration übersteigt das Maximum, was lethal ist. "Flechtenwüsten" in Städten waren historisch wichtige Indikatoren für Luftverschmutzung. Nach der Einführung von Entschwefelungsanlagen in Kraftwerken (ab 1980er Jahre) sind Flechten in vielen europäischen Städten wieder aufgetaucht.',
          hints: [
            "Flechten fehlen in verschmutzter Luft. Was überschreitet deren Toleranzgrenze — ist es Mangel oder Überschuss an SO₂?",
            "Shelfords Erweiterung: auch das Maximum (Überschuss) eines Faktors kann lethal sein. SO₂ ist Überschuss, kein Mangel.",
          ],
          difficulty: 2,
          tags: ["flechten", "bioindikator", "luftverschmutzung", "so2"],
        },
        {
          question: "Welcher Bereich der Toleranzkurve ist für den Organismus am günstigsten?",
          options: [
            "Das Pessimum — hier ist der Widerstand am größten",
            "Der Todespunkt — hier werden alle Ressourcen mobilisiert",
            "Der Toleranzbereich jenseits des Optimums — hier wird die Plastizität genutzt",
            "Das Optimum — hier sind Wachstum, Reproduktion und Fitness maximal",
            "Die Grenzwerte — hier ist die Konkurrenz am geringsten",
          ],
          correctIndex: 3,
          explanation:
            "Das Optimum ist der Bereich der Toleranzkurve, in dem der Organismus maximale Fitness, Wachstum und Reproduktionsrate zeigt. Hier laufen physiologische Prozesse mit höchster Effizienz ab, der Energieaufwand für Stressanpassung ist minimal, und die verfügbare Energie kann vollständig in Wachstum und Fortpflanzung investiert werden. Das Optimum ist daher evolutionär optimal für das Überleben und Fortpflanzen unter natürlichen Bedingungen. Das Pessimum ist das ungünstigste noch überlebbaren Bedingungen, und der Todespunkt markiert die physiologische Grenze.",
          hints: [
            "Optimum kommt von lat. optimum = das Beste. Wo auf der Glockenkurve liegt der höchste Punkt?",
            "Bei welchen Bedingungen wächst ein Organismus am schnellsten und pflanzt sich am besten fort?",
          ],
          difficulty: 1,
          tags: ["toleranzkurve", "optimum", "fitness", "wachstum"],
        },
        {
          question:
            "Ein Arzt bemerkt, dass ein unterernährter Patient trotz normalisierter Makronährstoffversorgung (Kohlenhydrate, Proteine, Fette) schwache Wundheilung und Immunsuppression zeigt. Welches ökologische Prinzip findet hier klinische Anwendung?",
          options: [
            "Logistisches Wachstum — die Zellen können nicht schneller als K wachsen",
            "Konkurrenzausschluss — Pathogene verdrängen körpereigene Abwehrzellen",
            "Liebigs Minimumgesetz — ein Mikronährstoff (z. B. Zink, Vitamin C) ist der limitierende Faktor",
            "Prädation — Makrophagen sind unterrepräsentiert",
            "Toleranzkurve — der Patient befindet sich im Pessimum",
          ],
          correctIndex: 2,
          explanation:
            'Liebigs Minimumgesetz findet direkte klinische Anwendung: Trotz ausreichend Makronährstoffen kann ein Mikronährstoffmangel (Zink, Vitamin C, Selen) der limitierende Faktor für Wundheilung und Immunfunktion sein. Zink ist für über 300 Enzyme essenziell, darunter Matrix-Metalloproteinasen (Wundheilung) und T-Zell-Funktion. Vitamin C ist essenziell für Kollagensynthese (Wundheilung) — Skorbut ist Extrembeispiel. Das "knappste Glied" (Mikronährstoff) limitiert den gesamten Heilungsprozess, unabhängig davon, dass Makronährstoffe ausreichend vorhanden sind.',
          hints: [
            "Wundheilung braucht spezifische Nährstoffe. Welcher ist der knappste — und bestimmt das Ergebnis?",
            "Liebig: Das Minimum (schwächstes Glied) bestimmt das System. Was könnte Minimum bei diesem Patienten sein?",
          ],
          difficulty: 3,
          tags: ["liebig-klinisch", "mikronaehrstoff", "wundheilung", "intensivmedizin"],
        },
      ],
    },
    {
      id: "bio-10-02",
      title: "Biotische Faktoren — Konkurrenz, Prädation und Symbiose",
      content: `## Biotische Faktoren — Definition und Überblick

**Biotische Faktoren** sind alle lebenden Bestandteile der Umwelt, die einen Organismus beeinflussen. Sie umfassen Interaktionen mit Individuen der eigenen Art (intraspezifische Interaktionen) und mit Individuen anderer Arten (interspezifische Interaktionen). Die wichtigsten biotischen Wechselwirkungen sind Konkurrenz, Prädation und die verschiedenen Formen der Symbiose. Diese Interaktionen sind treibende Kräfte der Evolution und strukturieren Lebensgemeinschaften (Biozönosen).

## Konkurrenz

### Intraspezifische Konkurrenz

**Intraspezifische Konkurrenz** bezeichnet den Wettbewerb zwischen Individuen derselben Art um begrenzte Ressourcen (Nahrung, Territorium, Paarungspartner, Brutplätze). Sie ist intensiver als interspezifische Konkurrenz, weil Individuen derselben Art identische ökologische Anforderungen haben — vollständige Nischenüberlappung.

Intraspezifische Konkurrenz ist **dichteabhängig**: Mit steigender Populationsdichte nimmt die Intensität der Konkurrenz zu und wirkt als negativer Rückkopplungsmechanismus → dies ist der zentrale Mechanismus des logistischen Wachstums (Annäherung an Kapazitätsgrenze K). Mechanismen: Territorialverhalten, Dominanzhierarchien (Hackordnung), Verzögerung der Geschlechtsreife bei hoher Dichte, Infantizid.

### Interspezifische Konkurrenz und das Gauß'sche Prinzip

**Interspezifische Konkurrenz** bezeichnet den Wettbewerb zwischen Individuen verschiedener Arten um dieselbe begrenzte Ressource. Das **Gauß'sche Konkurrenzausschlussprinzip** (Gause, 1934, nach G.F. Gauß): Zwei Arten, die vollständig dieselbe ökologische Nische besetzen, können nicht dauerhaft koexistieren — eine Art verdrängt die andere vollständig aus dem gemeinsamen Habitat.

Gause demonstrierte dies experimentell mit zwei Paramecium-Arten (*P. aurelia* und *P. caudatum*): In Monokulturen wuchsen beide Arten normal. In Mischkulturen verdrängte *P. aurelia* die *P. caudatum* vollständig.

**Ausnahmen und Koexistenz:** Das Konkurenzausschlussprinzip gilt bei vollständiger Nischenidentität. Koexistenz ist durch **Nischendifferenzierung** möglich: Arten entwickeln durch natürliche Selektion Unterschiede in der Ressourcennutzung, im Habitat oder in der zeitlichen Aktivität. Dies reduziert die Nischenüberlappung und ermöglicht Koexistenz.

**Formen der Konkurrenz:**
- *Ressourcenkonkurrenz (exploitative competition):* Beide Arten nutzen dieselbe Ressource; eine nutzt sie effizienter
- *Interferenzkonkurrenz (interference competition):* Direkte Interaktion zur Verdrängung (Allelopathie bei Pflanzen, Territorialkampf)

## Prädation

**Prädation** ist eine asymmetrische (+/-) Interaktion: Räuber profitiert (+), Beute wird geschädigt (-). Im Unterschied zum Parasitismus tötet der Räuber die Beute direkt (oder schnell). Prädation umfasst klassische Räuber-Beute-Beziehungen (Wolf frisst Hirsch), aber auch Herbivorie (Raupen fressen Blätter) und Pathogene (im weitesten Sinne).

### Lotka-Volterra-Modell der Räuber-Beute-Dynamik

Alfred Lotka (1925) und Vito Volterra (1926) entwickelten unabhängig voneinander ein mathematisches Modell der Räuber-Beute-Dynamik durch zwei gekoppelte Differentialgleichungen:

**Beute-Gleichung:** dN/dt = rN − aNP
(N = Beutepopulation, r = intrinsische Wachstumsrate Beute, a = Prädationsrate, P = Räuberpopulation)

**Räuber-Gleichung:** dP/dt = baNP − mP
(b = Effizienz der Energieumwandlung Beute→Räuber, m = Sterberate Räuber)

Das Modell sagt **oszillierende Zyklen** vorher: Die Räuberpopulation hinkt der Beutepopulation zeitlich nach. Wenn viel Beute vorhanden ist → Räuber wachsen → Beute nimmt ab → Räuber schrumpfen → Beute erholt sich → Zyklus wiederholt sich.

**Klassisches Beispiel:** Kanadischer Luchs (*Lynx canadensis*) und Schneehase (*Lepus americanus*) — Zyklen von ca. 10 Jahren, dokumentiert durch Pelzhandelsdaten der Hudson Bay Company (1845–1935).

**Grenzen des Lotka-Volterra-Modells:** Es ist ein stark vereinfachtes Modell und nimmt an: (1) unbegrenztes Wachstum der Beute ohne Räuber, (2) Räuber frisst nur diese eine Beute, (3) keine anderen Umweltfaktoren. In der Realität dämpfen Umweltrauschen, Migration und alternative Nahrungsquellen die Oszillationen.

### Trophische Kaskaden

Ein **Schlüsselpräator (keystone predator)** hat einen überproportional großen Einfluss auf die Struktur der Lebensgemeinschaft — weit größer als seine Biomasse vermuten lässt. Das Konzept wurde von Robert Paine (1969) mit Seesternen (*Pisaster ochraceus*) demonstriert: Das Entfernen der Seesterne führte zum explosiven Wachstum von Miesmuscheln, die alle anderen Arten verdrängten → Biodiversitätsverlust. Die Seesterne regulierten die Muscheln und ermöglichten Artenvielfralt.

**Yellowstone-Wölfe (1995):** Das Wiedereinführen von Wölfen in Yellowstone führte zu einer trophischen Kaskade: Wölfe regulierten Elche → Elche mieden Flussufer (Angst vor Wölfen, "Landscape of Fear") → Weidepflanzen an Flussufern erholten sich → Biber kehrten zurück → Biberdämme schufen Feuchtgebiete → Fischereihabitate verbesserten sich → sogar Flussbettmorphologie änderte sich. Diese "Ökosystem-Engineering" durch Wölfe illustriert trophische Kaskaden eindrucksvoll.

## Symbiose

**Symbiose** (griech. sym = zusammen, bios = Leben) bezeichnet im weiteren Sinn das enge Zusammenleben von Individuen verschiedener Arten (unabhängig von der Wirkung). Im engeren Sinn: nur mutualistisches Zusammenleben. Die drei Hauptformen:

### Mutualismus (+/+)

Beide Arten profitieren. Unterscheidung in:

*Obligater Mutualismus:* Beide Partner können ohne einander nicht überleben.
- **Mykorrhiza:** Pilzhyphen colonisieren Pflanzenwurzeln (90% aller Landpflanzen). Pilz liefert Wasser und Mineralien (besonders Phosphat, Stickstoff) durch das ausgedehnte Hyphengeflecht; Pflanze liefert Photosynthate (Zucker). Ektomykorrhiza (Hyphen umhüllen Wurzel, keine Penetration der Zellen — bei Bäumen wie Buche, Eiche) vs. Endomykorrhiza (Hyphen penetrieren Zellen → Arbuskuläre Mykorrhiza, AM — bei Mehrheit der Pflanzen).
- **Leguminosen-Rhizobium:** Bakterien (Bradyrhizobium, Rhizobium) in Wurzelknöllchen fixieren atmosphärischen N₂ → NH₃ (Nitrogenase-Enzym). Pflanze liefert Kohlenhydrate; Bakterien liefern fixierten Stickstoff. Essenziell für globale Stickstoffverfügbarkeit.
- **Mitochondrien und Chloroplasten:** Endosymbiontentheorie — beides waren ursprünglich freilebende Prokaryoten, die vor ca. 2 Mia. Jahren in Wirtszellen aufgenommen wurden (obligater Mutualismus mit Eukaryotenzelle).

*Fakultativer Mutualismus:* Beide Partner profitieren, können aber auch allein überleben.
- **Darmflora (Mikrobiom) und Mensch:** Darmbakterien produzieren Vitamine (K2, B12), bauen Ballaststoffe zu kurzkettigen Fettsäuren ab, schützen durch "competitive exclusion" vor Pathogenen. Mensch liefert Nahrung und Habitat.
- **Reinigungsfische und Haie:** Putzerfische (z. B. Labroides dimidiatus) entfernen Parasiten und Hautreste von Haien; Haie tolerieren die Putzerfische anstatt sie zu fressen.
- **Bestäubung:** Bienen erhalten Nektar (Energie) und Pollen (Protein); Pflanzen erhalten Bestäubung (Fortpflanzung).

### Kommensalismus (+/0)

Eine Art profitiert, die andere ist unbeeinträchtigt.
- **Epiphyten:** Orchideen, Bromelien, Moose wachsen auf Baumästen nur für den erhöhten Lichtzugang. Sie zapfen den Baum nicht an (keine Haustoria) und beeinflussen ihn kaum.
- **Hermitenkrebse** nutzen leere Schneckenhäuser — Schnecke tot, also kein Effekt auf sie.
- **Schmarotzer-Fische (Remoren):** Haften an Haien mit Saugnapf, profitieren von Futterfragmenten, beeinflussen den Hai kaum.

### Parasitismus (+/-)

Parasit profitiert auf Kosten des Wirts; Wirt wird geschädigt, aber normalerweise nicht sofort getötet (ein toter Wirt bietet keinen Lebensraum und keine Nahrung mehr). Unterscheidung:

*Ektoparasiten* leben auf der Körperoberfläche des Wirts: Zecken (*Ixodes ricinus* → Lyme-Borreliose, FSME), Läuse, Flöhe, Milben (*Sarcoptes scabiei* → Krätze).

*Endoparasiten* leben im Körperinneren: Protozoen (*Plasmodium falciparum* → Malaria; *Toxoplasma gondii* → Toxoplasmose; *Trypanosoma brucei* → Schlafkrankheit), Würmer (Taenia solium → Taeniasis/Neurozystizerkose; Ascaris lumbricoides → Askariasis), Bakterien (Mycobacterium tuberculosis → Tuberkulose).

**Koevolution zwischen Parasit und Wirt:** Evolutionäre Arme-Rennen (evolutionary arms race) — Wirt entwickelt Resistenz, Parasit umgeht sie. Historisches Beispiel: Sichelzellmutation (HbS) schützt heterozygot gegen *Plasmodium falciparum* (Malaria) — Kompromiss zwischen Malariaschutz und Sichelzellanämie-Risiko.`,
      lernziele: [
        "Intraspezifische und interspezifische Konkurrenz unterscheiden und das Gauß'sche Konkurrenzausschlussprinzip mit experimentellem Beleg erläutern",
        "Das Lotka-Volterra-Modell der Räuber-Beute-Dynamik und trophische Kaskaden beschreiben",
        "Die vier Symbioseformen (Mutualismus, Kommensalismus, Parasitismus; Prädation) mit Vorzeichen und Beispielen unterscheiden",
        "Medizinisch relevante Parasiten nennen und das Konzept der Koevolution am Beispiel Malaria/Sichelzellmutation erläutern",
      ],
      sections: [
        {
          heading: "Lotka-Volterra-Dynamik — Versetzte Zyklen als Naturgesetz",
          text: "Die Lotka-Volterra-Gleichungen beschreiben ein grundlegendes Muster in der Natur: Räuber- und Beutepopulationen oszillieren, wobei die Räuberpopulation der Beutepopulation zeitlich nachhinkt. Der Mechanismus: (1) Viel Beute → Räuber können sich gut ernähren → Räuberpopulation wächst. (2) Viele Räuber → Beutepopulation wird dezimiert → sinkt. (3) Wenig Beute → Räuber verhungern → Räuberpopulation sinkt. (4) Wenige Räuber → Beutepopulation erholt sich → Zyklus beginnt von vorn. Das Modell hat drei wichtige Aussagen: (A) Populationen oszillieren periodisch. (B) Räuber-Zyklus hinkt Beute-Zyklus nach. (C) Mittlere Populationsgrößen bleiben konstant (Lotka-Volterra-Invariante). In der Praxis sind die Zyklen selten rein sinusförmig — externe Störungen (El Niño, harte Winter) überlagern die endogene Dynamik. Das Yellowstone-Wolf-Experiment (1995) zeigte, dass Räuber durch Verhaltensveränderungen der Beute (Angst) sogar ohne direktes Fressen das Ökosystem strukturieren können.",
          merksatz:
            "Lotka-Volterra: Räuber- und Beute-Populationen bilden versetzte Zyklen. Räuber hinkt Beute zeitlich nach. Klassisch: Luchs-Schneehasezyklus (10 Jahre).",
        },
        {
          heading: "Das Darmmikrobiom als mutualistisches Ökosystem",
          text: 'Das humane Darmmikrobiom umfasst ca. 3,8 × 10¹³ Bakterienzellen (ungefähr gleich viele wie menschliche Körperzellen) und ca. 1.000 Bakterienarten — ein hochkomplexes mutualistisches Ökosystem. Funktionen des Mikrobioms: (1) Verdauung unverdaulicher Polysaccharide (Ballaststoffe) → kurzkettige Fettsäuren (Butyrat = Colonozyten-Energiequelle). (2) Vitaminsynthese (K2, B12, Biotin, Folat). (3) Immunmodulation — ca. 70% der Immunzellen im Darm (MALT = mucosa-associated lymphoid tissue); Mikrobiom trainiert Immunsystem (Toleranz vs. Abwehr). (4) Colonisation Resistance: etabliertes Mikrobiom verhindert durch Konkurrenz (Nischendifferenzierung, Bacteriocine) das Ansiedeln von Pathogenen. Antibiotika-assoziierte Diarrhö und Clostridioides-difficile-Infektionen entstehen, wenn Antibiotika das mutualistisches Ökosystem stören und Pathogene die freien Nischen besetzen. Das Mikrobiom wird zunehmend als "vergessenes Organ" verstanden, das Metabolismus, Immunsystem und sogar Verhalten (Darm-Hirn-Achse via Nervus vagus und Serotonin-Produktion) beeinflusst.',
          merksatz:
            "Darmmikrobiom = mutualistisches Ökosystem: Bakterien liefern Vitamine, Butyrat, Immunmodulation; Mensch liefert Nahrung und Habitat. Antibiotika stören das Ökosystem → C. difficile.",
        },
      ],
      merksätze: [
        "Konkurrenzausschlussprinzip (Gauß 1934): Zwei Arten in identischer Nische → eine verdrängt die andere. Koexistenz nur durch Nischendifferenzierung.",
        "Prädation (+/-): Räuber tötet Beute direkt. Parasitismus (+/-): Parasit schädigt Wirt, tötet ihn normalerweise nicht sofort.",
        "Lotka-Volterra: Räuber-Beute-Zyklen, zeitlich versetzt. Räuberpopulation hinkt Beutepopulation nach.",
        "Trophische Kaskade: Schlüsselprädatoren haben überproportional großen Ökosystemeinfluss (Seestern-Experiment Paine 1969; Yellowstone-Wölfe 1995).",
        "Mutualismus (+/+): Mykorrhiza, Leguminosen-Rhizobium, Darmmikrobiom-Mensch, Bestäubung.",
        "Kommensalismus (+/0): Epiphyten auf Baumästen, Remoren an Haien — eine Art profitiert, die andere ist unbeeinträchtigt.",
        "Parasitismus (+/-): Ektoparasiten (Zecken, Läuse) vs. Endoparasiten (Plasmodium, Toxoplasma, Taenia, Mycobacterium).",
        "Koevolution Parasit-Wirt: evolutionäres Arme-Rennen. Malaria-Sichelzellmutation: HbS heterozygot schützt gegen P. falciparum.",
        "Intraspezifische Konkurrenz: intensiver als interspezifische (vollständige Nischenüberlappung), dichteabhängige Regulation → logistisches Wachstum.",
      ],
      klinischerBezug: `Parasitismus ist eines der bedeutendsten medizinischen Themen weltweit. Malaria (Plasmodium falciparum, P. vivax, P. malariae, P. ovale) ist die tödlichste parasitäre Erkrankung: ca. 600.000 Todesfälle/Jahr (WHO 2022), vorwiegend Kinder unter 5 Jahren in Afrika. Die Koevolution zwischen Wirt und Parasit zeigt sich in der Sichelzellmutation (HbS): Heterozygote (HbAS) haben einen Überlebensvorteil in Malaria-Endemiegebieten, weil parasitierte Erythrozyten bei niedrigem O₂ sicheln und phagozytiert werden. Die höchste Frequenz der HbS-Mutation findet sich in Regionen mit historisch hoher Malaria-Prävalenz (Subsahara-Afrika, Mittelmeerraum) — ein direkter Fingerabdruck der Parasit-Wirt-Koevolution. Lyme-Borreliose (Borrelia burgdorferi, übertragen durch Ixodes-Zecken) ist in Europa und Nordamerika die häufigste vektorbürtige Erkrankung, mit zunehmender Ausbreitung durch Klimawandel (mildere Winter → mehr Zecken). Das "One-Health"-Konzept (WHO) betrachtet Mensch-, Tier- und Umweltgesundheit als untrennbar verbunden — Parasitosen sind Paradebeispiele dieser Verknüpfung.`,
      selfTest: [
        {
          question:
            "Zwei Paramecium-Arten (*P. aurelia* und *P. caudatum*) werden in Mischkultur gehalten und nutzen dieselbe Nahrung. Nach einigen Wochen überlebt nur noch *P. aurelia*. Welches Prinzip erklärt das?",
          options: [
            "Prädation — P. aurelia frisst P. caudatum",
            "Mutualismus — P. aurelia verdrängt P. caudatum durch gegenseitigen Nutzen",
            "Konkurrenzausschlussprinzip (Gauß) — zwei Arten in identischer Nische können nicht dauerhaft koexistieren",
            "Allopatrische Artbildung — P. caudatum entwickelt sich in eine neue Art",
            "Dichteabhängige Regulation durch logistisches Wachstum",
          ],
          correctIndex: 2,
          explanation:
            "Dies ist das klassische Gause-Experiment (1934), das das Konkurenzausschlussprinzip (Gauß'sches Prinzip) empirisch belegt. Zwei Arten, die dieselbe ökologische Nische (hier: dieselbe Nahrung im selben Habitat) vollständig besetzen, können nicht dauerhaft koexistieren. Die konkurrenzüberlegene Art (*P. aurelia* mit höherer Reproduktionsrate unter diesen Bedingungen) verdrängt die andere (*P. caudatum*) vollständig. Koexistenz wäre nur durch Nischendifferenzierung möglich (z. B. wenn eine Art andere Nahrungspartikel nutzt).",
          hints: [
            "Beide Arten nutzen dieselbe Nische. Was passiert laut Gauß mit zwei Arten in identischer Nische?",
            "Konkurrenzausschluss: eine Art gewinnt, eine verliert — bis eine vollständig verdrängt ist.",
          ],
          difficulty: 1,
          tags: ["konkurrenzausschluss", "gauss", "paramecium", "nische"],
        },
        {
          question:
            "Bei Räuber-Beute-Zyklen nach dem Lotka-Volterra-Modell: Wenn die Beutepopulation ihren Höhepunkt erreicht, was passiert mit der Räuberpopulation?",
          options: [
            "Die Räuberpopulation erreicht gleichzeitig ihren Höhepunkt",
            "Die Räuberpopulation sinkt sofort auf null",
            "Die Räuberpopulation beginnt zu steigen und erreicht ihren Höhepunkt zeitlich nach der Beute",
            "Die Räuberpopulation bleibt konstant, unabhängig von der Beute",
            "Die Räuberpopulation wechselt zu einer anderen Beuteart",
          ],
          correctIndex: 2,
          explanation:
            "Im Lotka-Volterra-Modell hinkt die Räuberpopulation der Beutepopulation zeitlich nach. Wenn die Beutepopulation ihren Höhepunkt erreicht, bedeutet das: viel Nahrung für Räuber → Räuber reproduzieren sich gut → Räuberpopulation steigt → Räuber übernehmen erst nach dem Beutehöhepunkt ihren eigenen Höhepunkt. Dann frisst die nun große Räuberpopulation die Beute stark dezimiert, Beutepopulation sinkt, und mit Zeitverzögerung sinkt dann auch die Räuberpopulation (Nahrungsmangel).",
          hints: [
            "Ursache (viel Beute) → Wirkung (Räuber wachsen) dauert Zeit. Was kommt zuerst: Höhepunkt der Beute oder der Räuber?",
            "Beute zuerst hoch → Räuber profitieren → Räuber erreichen Höhepunkt SPÄTER. Das ist die zeitliche Verzögerung.",
          ],
          difficulty: 2,
          tags: ["lotka-volterra", "raeuter-beute", "zyklen", "zeitverzögerung"],
        },
        {
          question:
            "Mykorrhizapilze und Pflanzenwurzeln unterhalten eine enge Beziehung. Welche Kategorie der Symbiose und welches Vorzeichen trifft am besten zu?",
          options: [
            "Parasitismus (+/-): Pilz schädigt die Pflanzenwurzel",
            "Kommensalismus (+/0): Pilz profitiert, Pflanze ist unbeeinträchtigt",
            "Mutualismus (+/+): Beide profitieren — Pilz erhält Zucker, Pflanze erhält Mineralien/Wasser",
            "Konkurrenz (-/-): Pilz und Pflanzenwurzel konkurrieren um Bodenmineralien",
            "Prädation (+/-): Pilz nutzt die Pflanze als Nahrung",
          ],
          correctIndex: 2,
          explanation:
            "Mykorrhiza ist ein obligater oder fakultativer Mutualismus (+/+): Der Pilz erhält Photosynthate (Glucose, Saccharose) von der Pflanze — bis zu 20% der pflanzlichen Nettoassimilation fließen in den Pilz. Dafür liefert der Pilz der Pflanze über sein ausgedehntes Hyphengeflecht (viel größere Oberfläche als Wurzeln) Wasser und Mineralstoffe, besonders Phosphat und Stickstoff. Ca. 90% aller Landpflanzen sind mykorrhiziert — die Beziehung ist für terrestrische Ökosysteme fundamental. Ohne Mykorrhiza wäre Pflanzenwachstum in nährstoffarmen Böden stark eingeschränkt.",
          hints: [
            "Was erhält der Pilz von der Pflanze? Was erhält die Pflanze vom Pilz? Wenn beide profitieren — welche Symbioseform?",
            "Mutualismus = +/+. Beide profitieren. Mykorrhiza: Pilz (Zucker) und Pflanze (Mineralien, Wasser) profitieren beide.",
          ],
          difficulty: 1,
          tags: ["mykorrhiza", "mutualismus", "symbiose", "pilz-pflanze"],
        },
        {
          question:
            "Das 1995 in Yellowstone wiedereingeführte Wolf-Rudel führte zu drastischen Veränderungen der Vegetation und sogar der Flussmorphologie, obwohl Wölfe Pflanzenfresser sind, keine Pflanzen. Wie nennt man diesen Effekt?",
          options: [
            "Liebigs Minimumgesetz — Wölfe sind der limitierende Faktor für Pflanzen",
            "Intraspezifische Konkurrenz zwischen Wolfsrudeln",
            "Trophische Kaskade — Schlüsselprädatoren beeinflussen alle Trophieebenen indirekt",
            "Logistisches Wachstum — Wölfe begrenzen die Elchpopulation auf K",
            "Nischendifferenzierung zwischen Wölfen und Elchen",
          ],
          correctIndex: 2,
          explanation:
            'Die Wiedereinführung der Wölfe in Yellowstone ist das bekannteste Beispiel einer trophischen Kaskade: Wölfe regulierten Elche (direkte Prädation und Verhaltensveränderung — "Landscape of Fear") → Elche mieden Flussufer → Weidepflanzen erholten sich → Biber kehrten zurück → Biberdämme schufen Feuchtgebiete → Fischhabitate verbesserten sich → sogar der Flusslauf veränderte sich (Uferostabilisierung durch Vegetation). Ein Schlüsselprädator (keystone predator) hat überproportional großen Einfluss auf die gesamte Ökosystemstruktur.',
          hints: [
            'Wölfe → Elche → Pflanzen → Biber → Fluss. Wie nennt man Effekte, die durch Nahrungsketten "kaskadieren"?',
            "Trophisch = Nahrung betreffend. Kaskade = kaskadenartiger Effekt durch alle Ebenen. Schlüsselprädator = Wolf.",
          ],
          difficulty: 2,
          tags: ["trophische-kaskade", "woelfe-yellowstone", "schlüsselpraedator", "nahrungskette"],
        },
        {
          question:
            "Worin besteht der entscheidende Unterschied zwischen Parasitismus und Prädation?",
          options: [
            "Parasitismus ist positiv für den Wirt; Prädation ist negativ",
            "Parasitismus tötet den Wirt normalerweise sofort; Prädation tötet nur selten",
            "Parasitismus schädigt den Wirt, tötet ihn aber normalerweise nicht sofort; Prädation tötet die Beute direkt",
            "Parasitismus betrifft nur Tiere; Prädation betrifft Pflanzen und Tiere",
            "Es gibt keinen biologischen Unterschied — beide sind (+/-) Interaktionen",
          ],
          correctIndex: 2,
          explanation:
            "Beide Interaktionen haben dasselbe Vorzeichen (+/-), unterscheiden sich aber wesentlich: Parasitismus: Der Parasit lebt auf/in dem Wirt, schädigt ihn chronisch, tötet ihn aber normalerweise nicht sofort (ein toter Wirt = kein Lebensraum und keine Nahrung mehr → nachteilig für Parasiten). Parasiten sind meist kleiner als der Wirt. Prädation: Der Räuber tötet die Beute sofort oder schnell und verzehrt sie. Der Räuber ist meist gleich groß oder größer. Evolutionäre Konsequenz: Parasiten sind unter Selektionsdruck, virulent, aber nicht übermäßig tödlich zu sein (optimale Virulenz-Theorie).",
          hints: [
            "Was ist für einen Parasiten vorteilhafter: ein lebendiger oder ein toter Wirt? Das erklärt den Unterschied.",
            "Parasit tötet seinen Wirt nicht sofort — ein toter Wirt bietet keine Ressourcen mehr. Räuber tötet sofort.",
          ],
          difficulty: 2,
          tags: ["parasitismus", "praedation", "unterschied", "wirt-tod"],
        },
        {
          question:
            "Die Sichelzellmutation (HbS) ist in Malaria-Endemiegebieten (Subsahara-Afrika) besonders häufig. Welcher ökologisch-evolutionäre Mechanismus erklärt das?",
          options: [
            "Gendrift — die Mutation breitete sich zufällig in kleinen Populationen aus",
            "Mutualismus zwischen Mensch und Plasmodium — beide profitieren von HbS",
            "Koevolution zwischen Parasit und Wirt — HbS heterozygot schützt vor Malaria und wird selektiert",
            "Kommensalismus — Plasmodium schadet Heterozygoten nicht",
            "Konkurrenzausschluss — HbS-Träger verdrängen Wildtypen in Malariaregionen",
          ],
          correctIndex: 2,
          explanation:
            "Die HbS-Mutation (Glutamat → Valin in β-Globin) ist ein Paradebeispiel balancierender Selektion durch Koevolution. Heterozygote (HbAS) haben einen Selektionsvorteil in Malaria-Endemiegebieten: In parasitierten HbAS-Erythrozyten führt physiologisch niedriger O₂-Partialdruck zum Sicheln der Zellen, die dann schneller phagozytiert werden → reduzierte Parasitenlast → 90% Schutz gegen schwere Malaria. Homozygote HbSS erkranken an Sichelzellanämie (negativ selektiert). Das Gleichgewicht zwischen Malariamortalität (selektiert für HbS) und Sichelzellanämie (selektiert gegen HbS) hält HbS auf stabiler Frequenz — typisch für balancierende Selektion durch Parasit-Wirt-Koevolution.",
          hints: [
            "HbS-Heterozygote (HbAS) überleben Malaria besser. Was passiert evolutionär, wenn ein Genotyp in einer Region Überlebensvorteil hat?",
            "Koevolution = Parasit und Wirt entwickeln sich gegenseitig. HbS ist die Antwort des Wirts auf Plasmodium.",
          ],
          difficulty: 3,
          tags: ["koevolution", "sichelzellmutation", "malaria", "balancierende-selektion"],
        },
        {
          question:
            "Welche Symbioseform zeigen Epiphyten (z. B. Orchideen, Bromelien), die auf Baumästen wachsen, um mehr Licht zu bekommen?",
          options: [
            "Parasitismus (+/-) — Epiphyten zapfen den Baum für Wasser an",
            "Mutualismus (+/+) — Epiphyten bestäuben den Baum",
            "Kommensalismus (+/0) — Epiphyten profitieren von erhöhtem Standort, Baum kaum beeinflusst",
            "Konkurrenz (-/-) — Epiphyten beschatten den Baum",
            "Prädation (+/-) — Epiphyten verdrängen Baumblätter",
          ],
          correctIndex: 2,
          explanation:
            "Epiphyten (von griech. epi = auf, phyton = Pflanze) sind Kommensalisten (+/0): Sie wachsen auf Baumästen oder -stämmen, nutzen den erhöhten Standort für besseren Lichtzugang, sind aber keine Parasiten — sie haben keine Haustoria (parasitische Saugorgane) und zapfen den Baum nicht an. Der Baum trägt lediglich das zusätzliche Gewicht, was bei sehr schwerer Beladung leicht negativ sein kann, ansonsten aber neutralen Einfluss hat. In tropischen Regenwäldern können Epiphyten bis zu 50% der Blattbiomasse eines Baumes ausmachen.",
          hints: [
            "Kommensalismus = +/0. Wer profitiert, wer ist neutral? Epiphyten profitieren — was ist mit dem Baum?",
            "Epiphyten haben keine Haustoria und zapfen den Baum nicht an. Sie nutzen nur den Standort.",
          ],
          difficulty: 1,
          tags: ["epiphyten", "kommensalismus", "symbiose", "licht"],
        },
      ],
    },

    // === from kap11-immunologie ===

    {
      id: "bio-11-01",
      title: "Antikörper — Aufbau, Klassen und Effektorfunktionen",
      content: `## Antikörper — Grundlagen

**Antikörper (Immunglobuline, Ig)** sind Y-förmige Glykoproteine, die von Plasmazellen (terminal differenzierten B-Zellen) sezerniert werden. Sie erkennen spezifisch Antigene und vermitteln deren Neutralisierung oder Markierung zur Zerstörung.

## Struktureller Aufbau von IgG

IgG ist das häufigste und beste verstandene Immunglobulin. Es besteht aus:
- **2 schwere Ketten (H-Ketten)** und **2 leichte Ketten (L-Ketten)**, verbunden durch **Disulfidbrücken**
- Jede Kette hat eine **variable Region (V)** und eine **konstante Region (C)**
- **Fab-Fragment (Fragment antigen-binding):** Enthält die variablen Regionen beider Ketten → Antigen-Bindestelle. Zwei Fab-Fragmente pro Antikörper → bivalent
- **Fc-Fragment (Fragment crystallizable):** Konstante Regionen der schweren Ketten → Effektorfunktionen (Bindung an Fc-Rezeptoren, Komplementaktivierung)

## Effektorfunktionen der Antikörper

- **Neutralisierung:** Antikörper blockieren Toxine oder Viruspartikel direkt (binden Virus → kann keine Zelle mehr infizieren)
- **Opsonisierung:** Antikörper (IgG) binden an Antigen-tragende Erreger → Fc-Rezeptoren auf Makrophagen und neutrophilen Granulozyten erkennen Fc-Teil → verstärkte Phagozytose
- **Komplementaktivierung (klassischer Weg):** IgG oder IgM gebunden an Antigen → C1q bindet Fc → Komplementkaskade → Membrane Attack Complex (MAC) → Lyse; C3b-Ablagerung → weitere Opsonisierung
- **ADCC (Antibody-Dependent Cellular Cytotoxicity):** NK-Zellen mit Fc-Rezeptoren töten antikörpermarkierte Zellen`,
      lernziele: [
        "Den Aufbau eines IgG-Antikörpers (schwere/leichte Ketten, Fab/Fc, Disulfidbrücken) beschreiben",
        "Die fünf Immunglobulin-Klassen und ihre jeweiligen Hauptfunktionen nennen",
        "Die Effektorfunktionen von Antikörpern (Neutralisierung, Opsonisierung, Komplementaktivierung) erläutern",
      ],
      sections: [
        {
          heading: "Immunglobulin-Klassen (Isotypen)",
          text: "Das Immunsystem produziert fünf Klassen von Immunglobulinen (Isotypen), die sich in Struktur, Vorkommen und Funktion unterscheiden.",
          merksatz:
            "Ig-Klassen: IgG (häufig, plazentagängig), IgA (Sekrete), IgM (Primär, Pentamer), IgE (Allergie), IgD (B-Zell-Signal).",
          table: {
            headers: ["Klasse", "Vorkommen", "Besonderheiten"],
            rows: [
              [
                "IgG",
                "Serum (75%), plazentagängig",
                "Häufigster Antikörper, Sekundärantwort, überwindet Plazenta (maternaler Schutz)",
              ],
              [
                "IgA",
                "Sekrete (Speichel, Muttermilch, Tränen), Serum",
                "Schützt Schleimhäute, dimerisch in Sekreten",
              ],
              [
                "IgM",
                "Serum",
                "Pentamer (10 Bindestellen), erste Reaktion (Primärantwort), starker Komplementaktivator",
              ],
              [
                "IgE",
                "Sehr wenig im Serum",
                "Bindet Mastzellen und Basophile → Allergie (Typ I), Parasitenabwehr",
              ],
              [
                "IgD",
                "B-Zell-Oberfläche",
                "B-Zell-Aktivierung (Signalübertragung), selten im Serum",
              ],
            ],
          },
        },
        {
          heading: "IgM — Der erste Responder",
          text: "IgM ist das erste Immunglobulin, das bei einer Immunantwort produziert wird (Primärantwort) und ein wichtiger diagnostischer Marker für akute Infektionen. IgM ist ein Pentamer aus fünf Ig-Monomeren, verbunden durch eine J-Kette — es hat daher 10 Antigenbindestellen (decavalent). Dies kompensiert die etwas geringere Affinität jeder einzelnen Bindestelle durch Avididtät (Gesamtbindungsstärke durch viele schwache Bindungen). IgM ist ein besonders starker Komplementaktivator, da pro Antikörper zwei benachbarte Fc-Stücke nötig sind, um C1q zu binden — und IgM bietet viele Fc-Stücke in räumlicher Nähe. IgM kann die Plazenta nicht überwinden (zu groß). Im Serum: IgM-Nachweis → akute Infektion; IgG-Nachweis → durchgemachte Infektion oder Impfung.",
          merksatz:
            "IgM: Pentamer, 10 Bindestellen, erster Responder (Primärantwort), starker Komplementaktivator, kann Plazenta nicht passieren.",
        },
        {
          heading: "Komplementsystem — Der klassische Aktivierungsweg",
          text: "Das Komplementsystem ist ein kaskadenartiges System aus ca. 30 Plasmaproteinen, das bei der Abwehr von Pathogenen hilft. Der klassische Weg wird durch Antigen-Antikörper-Komplexe aktiviert: C1q bindet an Fc-Regionen von IgG oder IgM, die an Antigen gebunden sind. Aktiviertes C1 spaltet C4 und C2 → C3-Konvertase → spaltet massenhaft C3 → C3b-Ablagerung auf Pathogenoberfläche (Opsonin für Phagozytose) → C5-Konvertase → C5b → C6, C7, C8, C9 assemblieren den Membrane Attack Complex (MAC) → Lochbildung in bakterieller Membran → osmotische Lyse. Nebenprodukte: C3a und C5a sind Anaphylatoxine → Mastzell-Degranulation, Gefäßerweiterung, Neutrophilenrekrutierung (Entzündung).",
          merksatz:
            "Komplementklassischer Weg: Ag-Ak-Komplex → C1q → C3-Konvertase → C3b (Opsonin) → MAC (Lyse). C3a/C5a = Anaphylatoxine.",
        },
      ],
      diagram: "immune-response",

      merksätze: [
        "IgG-Aufbau: 2H + 2L Ketten, Disulfidbrücken, Fab (Antigen) + Fc (Effektur). Y-Form.",
        "Effektorfunktionen: Neutralisierung, Opsonisierung (→ Phagozytose), Komplementaktivierung (klassischer Weg → MAC).",
      ],
      klinischerBezug:
        "Der serologische Nachweis von IgM vs. IgG ist klinisch essenziell: IgM zeigt eine akute Infektion an (z. B. IgM gegen CMV, EBV, Hepatitis A), IgG zeigt eine abgelaufene Infektion oder Immunität nach Impfung (z. B. Hepatitis-B-Oberflächenantikörper IgG nach Impfung). Bei SARS-CoV-2 werden IgG-Antikörper zur Bestimmung des Immunstatus eingesetzt.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Unterschied zwischen Fab- und Fc-Fragment eines Antikörpers und deren jeweilige Funktion.",
        answer:
          "Das Fab-Fragment (Fragment antigen-binding) enthält die variablen Regionen sowohl der schweren als auch der leichten Kette. Diese variablen Regionen bilden die hochspezifische Antigenbindestelle (CDRs, Complementarity Determining Regions). Die Spezifität des Antikörpers wird durch die Fab-Region bestimmt. Das Fc-Fragment (Fragment crystallizable) enthält die konstanten Regionen der schweren Ketten und vermittelt Effektorfunktionen: Bindung an Fc-Rezeptoren auf Makrophagen und NK-Zellen (Opsonisierung, ADCC), Aktivierung des Komplementsystems (klassischer Weg über C1q), Bindung an die neonatalen Fc-Rezeptoren (Plazentatransfer bei IgG) und Halbwertszeit-Verlängerung (Recycling über FcRn).",
      },
      selfTest: [
        {
          question: "Aus welchen Elementen besteht ein IgG-Antikörper?",
          options: [
            "Zwei schwere Ketten, zwei leichte Ketten, verbunden durch Disulfidbrücken, mit Fab- und Fc-Regionen",
            "Fünf schwere Ketten in Pentamer-Form mit einer J-Kette",
            "Einer schweren Kette und zwei leichten Ketten, verbunden durch Wasserstoffbrücken",
            "Zwei identischen Schwerketten ohne leichte Ketten",
            "Vier identischen Ketten, verknüpft durch kovalente Peptidbindungen",
          ],
          correctIndex: 0,
          explanation:
            "IgG besteht aus zwei schweren (H = Heavy) und zwei leichten (L = Light) Ketten. Schwere und leichte Ketten sind durch Disulfidbrücken verbunden, ebenso die zwei schweren Ketten untereinander (Hinge-Region). Das Molekül hat eine Y-Form: Die zwei Arme des Y entsprechen den Fab-Fragmenten (Antigenbindung), der Stamm des Y ist das Fc-Fragment (Effektorfunktionen).",
          hints: [
            "IgG = das 'Standard'-Immunglobulin. Y-Form mit 2+2 Ketten.",
            "Disulfidbrücken verbinden die Ketten — welche Ketten? Schwer-leicht und schwer-schwer.",
          ],
          difficulty: 1,
          tags: ["igg-aufbau", "fab-fc", "immunglobulin", "antikörper"],
        },
        {
          question:
            "Ein Patient hat eine akute Hepatitis-A-Infektion. Welcher Antikörpertyp ist diagnostisch für eine akute Infektion?",
          options: [
            "IgG gegen Hepatitis-A-Antigen (HAV-IgG)",
            "IgE gegen Hepatitis-A-Antigen",
            "IgM gegen Hepatitis-A-Antigen (HAV-IgM)",
            "IgA im Stuhl gegen Hepatitis-A",
            "IgD auf B-Lymphozyten gegen Hepatitis-A",
          ],
          correctIndex: 2,
          explanation:
            "IgM ist das erste Immunglobulin, das bei einer Immunantwort produziert wird (Primärantwort) und zeigt daher eine akute oder kürzlich erfolgte Infektion an. Bei Hepatitis A ist HAV-IgM der Standard-Diagnose-Marker einer akuten Infektion. HAV-IgG erscheint später und bleibt lebenslang als Zeichen der Immunität (nach Infektion oder Impfung) nachweisbar.",
          hints: [
            "Welches Ig kommt als erstes bei einer neuen Infektion? Das ist der Marker für akute Infektion.",
            "IgM = erstes; IgG = später und dauerhaft. Akut → welches?",
          ],
          difficulty: 2,
          tags: ["igm", "akute-infektion", "primaerantwort", "serologie"],
        },
        {
          question: "Was ist Opsonisierung und welches Immunglobulin ist dabei am wichtigsten?",
          options: [
            "Opsonisierung = Neutralisierung von Toxinen durch IgE",
            "Opsonisierung = Markierung von Erregern durch IgG, um Phagozytose zu fördern",
            "Opsonisierung = Aktivierung von T-Zellen durch IgM",
            "Opsonisierung = Lyse von Erregern durch den Membrane Attack Complex",
            "Opsonisierung = Degranulation von Mastzellen durch IgE",
          ],
          correctIndex: 1,
          explanation:
            "Opsonisierung ist die Markierung von Krankheitserregern mit Antikörpern (oder Komplementfragmenten wie C3b), um deren Phagozytose durch Makrophagen und neutrophile Granulozyten zu erleichtern. IgG ist das wichtigste Opsonin: Es bindet mit dem Fab-Teil an das Antigen auf der Erregerfläche und wird von Fc-Rezeptoren (FcgR) auf Phagozyten erkannt. Dieser 'Anker' (opsonos = griech. für Zukost / Appetithäppchen) stimuliert die Phagozytose stark.",
          hints: [
            "Opsonin = griechisch für 'Zutat' — Antikörper machen Erreger für Fresszellen schmackhafter.",
            "Phagozytose wird gefördert — was bindet der Phagozyt: das Antigen oder den Antikörper?",
          ],
          difficulty: 2,
          tags: ["opsonisierung", "phagozytose", "igg", "fc-rezeptor"],
        },
        {
          question:
            "Welches Immunglobulin kann die Plazentaschranke überwinden und vermittelt so passiven Schutz des Neugeborenen?",
          options: [
            "IgM (wegen seiner pentameren Größe besonders effektiv)",
            "IgE (wegen seiner hohen Affinität für zelluläre Rezeptoren)",
            "IgG (aktiver Transport über FcRn-Rezeptoren durch die Plazenta)",
            "IgA (über Übertragung in der Muttermilch)",
            "IgD (wegen seiner Signaltransduktionsfunktion)",
          ],
          correctIndex: 2,
          explanation:
            "IgG ist das einzige Immunglobulin, das aktiv über die Plazenta transportiert wird. Der neonatale Fc-Rezeptor (FcRn) auf Trophoblasten der Plazenta bindet IgG und transportiert es durch Transzytose in die fetale Zirkulation. IgM ist als Pentamer zu groß, um die Plazentaschranke zu überwinden. Die mütterlichen IgG-Antikörper verleihen dem Neugeborenen für die ersten 3–6 Monate passiven Immunschutz (maternale Antikörper), bis das eigene Immunsystem reift.",
          hints: [
            "Der FcRn-Rezeptor auf der Plazenta transportiert welches Ig aktiv?",
            "IgM ist ein Pentamer — kann so ein großes Molekül die Plazenta passieren?",
          ],
          difficulty: 2,
          tags: ["igg", "plazenta", "passiver-schutz", "fcrn"],
        },
        {
          question:
            "Welche Immunglobulin-Klasse ist hauptsächlich in Sekreten (Speichel, Muttermilch, Darminhalt) zu finden und schützt Schleimhäute?",
          options: ["IgG", "IgM", "IgA", "IgE", "IgD"],
          correctIndex: 2,
          explanation:
            "IgA ist das dominante Immunglobulin auf Schleimhäuten und in Sekreten (sekretorisches IgA, sIgA). Es liegt in Sekreten als Dimer vor, verbunden durch J-Kette und eine Sekretorische Komponente (schützt vor proteolytischem Abbau). sIgA verhindert das Anhaften von Pathogenen an Schleimhautzellen (immune exclusion). Über Muttermilch übertragen, schützt es den Säuglingsdarm vor Pathogenen.",
          hints: [
            "Welches Ig ist besonders für den Schutz von Schleimhäuten und Sekreten spezialisiert?",
            "IgA = 'A' wie 'Abwehr auf Schleimhäuten'. In Muttermilch, Speichel, Tränen.",
          ],
          difficulty: 1,
          tags: ["iga", "schleimhaut", "sekrete", "muttermilch"],
        },
      ],
    },
    {
      id: "bio-11-02",
      title: "Antikörper-Gene — V(D)J-Rekombination und Diversität",
      content: `## Antikörperdiversität — Das Grundproblem

Das menschliche Immunsystem kann Antikörper gegen praktisch jede Substanz bilden — eine unvorstellbare Vielfalt von mehr als 10¹⁰ verschiedenen Antikörperspezifitäten. Das Genom enthält jedoch nur ~20.000 Gene. Wie wird diese Diversität generiert?

## V(D)J-Rekombination

Die **somatische Rekombination (V(D)J-Rekombination)** löst dieses Problem. Antikörpergene werden nicht als vollständige Sequenzen vererbt, sondern aus Gensegmenten zusammengesetzt:

**Schwere Kette (IgH):**
- V-Segmente (Variable): ~40 funktionale
- D-Segmente (Diversity): ~25
- J-Segmente (Joining): 6
- Während der B-Zell-Entwicklung im Knochenmark wird zufällig je ein V, D und J ausgewählt und durch das RAG1/RAG2-Enzymkomplex ligiert.

**Leichte Ketten (IgL, IgK):**
- Nur V- und J-Segmente (kein D)

## Quellen der Diversität

1. **Kombinatorische Diversität:** Unterschiedliche V(D)J-Kombinationen. Für die schwere Kette allein: 40 × 25 × 6 = 6.000 Kombinationen.
2. **Kombinatorische Assoziation:** Zufällige Paarung von schwerer und leichter Kette → ~6.000 × 3.000 = 18 Millionen Kombinationen.
3. **Junctionale Diversität (P- und N-Nukleotide):** An den Verbindungsstellen der Segmente werden Nukleotide hinzugefügt (N-Nukleotide durch TdT) oder entfernt → erhöht Diversität massiv auf > 10¹⁰.

## Klonale Selektion (Burnet'sche Theorie)

Die **klonale Selektionstheorie** (Macfarlane Burnet, Nobelpreis 1960) erklärt die adaptive Immunantwort: Im Knochenmark reifen viele B-Zellen heran, jede mit einem zufällig generierten Antikörper-Rezeptor (BCR). Bei Antigenkontakt wird die B-Zelle mit passendem BCR aktiviert → **klonale Expansion** → viele identische Antikörper produzierende Plasmazellen.

## Affinitätsreifung und somatische Hypermutation

Nach Aktivierung in Keimzentren der Lymphknoten durchlaufen aktivierte B-Zellen **somatische Hypermutation**: Die V-Region-Gene mutieren mit einer Rate, die 10⁶-fach höher ist als in normalen Genen. B-Zellen mit Mutationen, die zu höherer Antigenaffinität führen, werden selektiert (Affinitätsreifung) → Antikörper der Sekundärantwort haben höhere Affinität als jene der Primärantwort.

## Gedächtniszellen

Aktivierte B-Zellen differenzieren auch zu langlebigen **Gedächtnis-B-Zellen**. Bei erneutem Antigenkontakt reagieren diese schneller und stärker (sekundäre Immunantwort, anamnestische Antwort). Basis der Impfeffektivität.`,
      lernziele: [
        "Das Prinzip der V(D)J-Rekombination zur Erzeugung von Antikörperdiversität erklären",
        "Die Quellen der Antikörperdiversität (kombinatorisch, junctional, somatische Hypermutation) beschreiben",
        "Die klonale Selektionstheorie und das Konzept der Gedächtniszellen erläutern",
      ],
      sections: [
        {
          heading: "V(D)J-Rekombination — Molekularer Mechanismus",
          text: "Die V(D)J-Rekombination wird durch den RAG1/RAG2-Komplex (Recombination Activating Gene) katalysiert. RAG1/RAG2 erkennen konservierte Rekombinationssignalsequenzen (RSS) neben den V-, D- und J-Segmenten. Die Rekombination erfolgt durch: (1) Bindung von RAG an RSS beider Segmente; (2) DNA-Doppelstrangbrüche; (3) Ligation durch die allgemeine DNA-Reparaturmaschinerie (NHEJ). Während des Ligationsschritts werden durch TdT (Terminal deoxynucleotidyl Transferase) zufällige Nukleotide (N-Nukleotide) an die Schnittstellen eingefügt — dies ist eine enorme Quelle junctionaler Diversität, da die Insertion in einem zufälligen Leseraster erfolgt (kann Frameshift verursachen → nicht-produktive Rearrangements). Nur Rearrangements im richtigen Leseraster führen zu funktionalem Antikörperprotein (produktiv).",
          merksatz:
            "V(D)J-Rekombination: RAG1/RAG2 schneidet, NHEJ ligiert, TdT fügt N-Nukleotide ein → junctionale Diversität. Nur produktive Rearrangements → B-Zelle überlebt.",
        },
        {
          heading: "Affinitätsreifung in Keimzentren",
          text: "Die Affinitätsreifung findet in Keimzentren der sekundären Lymphorgane (Lymphknoten, Milz) statt. Aktivierte B-Zellen proliferieren intensiv (Zentroblasten) und akkumulieren somatische Mutationen in den V-Regionen ihrer Antikörpergene (somatische Hypermutation durch das Enzym AID, Activation-Induced Cytidine Deaminase). Die mutierten B-Zellen (Zentrozyten) konkurrieren um begrenzte Antigendepots auf follikulären dendritischen Zellen. Nur B-Zellen mit höherer Affinität erhalten Überlebenssignale von follikulären T-Helfer-Zellen (Tfh). Zellen mit geringerer Affinität sterben durch Apoptose. Ergebnis: progressive Selektion von B-Zellen mit immer höherer Antigenaffinität über mehrere Wochen.",
          merksatz:
            "Affinitätsreifung: B-Zellen in Keimzentren → somatische Hypermutation (AID) → Selektion auf höhere Affinität → IgG der Sekundärantwort hat höhere Affinität.",
        },
      ],
      merksätze: [
        "V(D)J-Rekombination: zufällige Auswahl und Ligation von V, D, J-Segmenten → kombinatorische Diversität. N-Nukleotide (TdT) → junctionale Diversität.",
        "Klonale Selektion (Burnet): Antigen aktiviert B-Zelle mit passendem BCR → klonale Expansion → viele identische Antikörper.",
        "Affinitätsreifung: somatische Hypermutation (AID) in Keimzentren + Selektion → höhere Affinität der Sekundärantikörper.",
      ],
      klinischerBezug:
        "V(D)J-Rekombinationsfehler sind pathologisch relevant: Fehlerhaftes Rearrangement kann Proto-Onkogene in die Nähe aktiver Immungenpromotoren bringen → Lymphome (z. B. t(8;14) bei Burkitt-Lymphom: c-Myc unter IgH-Promotor). Nachweis von klonalen V(D)J-Rearrangements per PCR wird in der Diagnostik von B-Zell-Lymphomen genutzt (Klonalitätsnachweis).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welche drei Hauptquellen der Antikörperdiversität gibt es und wie viele verschiedene Antikörperspezifitäten können theoretisch erzeugt werden?",
        answer:
          "1. Kombinatorische Diversität: Zufällige Auswahl der V-, D- und J-Gensegmente für schwere und leichte Ketten sowie deren zufällige Paarung — ergibt bis zu ~18 Millionen Kombinationen. 2. Junctionale Diversität: An den Verbindungsstellen der Segmente werden zufällige Nukleotide (N-Nukleotide durch TdT) eingefügt oder durch Exonukleasen entfernt — erhöht die Diversität auf über 10¹⁰. 3. Somatische Hypermutation: In Keimzentren nach Antigenaktivierung mutieren V-Regionen hochfrequent → Affinitätsreifung. Insgesamt können mehr als 10¹⁰ verschiedene Antikörperspezifitäten erzeugt werden.",
      },
      selfTest: [
        {
          question: "Was ist das Prinzip der V(D)J-Rekombination?",
          options: [
            "Mehrere Antikörpergene werden durch RNA-Splicing zu einem mRNA zusammengesetzt",
            "Gensegmente (V, D, J) werden zufällig ausgewählt und durch somatische Rekombination zu einem vollständigen Antikörpergen zusammengesetzt",
            "Antikörpergene werden durch Keimbahnmutationen diversifiziert",
            "Die variable Region wird durch Transkriptionsfaktoren gesteuert",
            "Antikörpergene werden von Retroviren in das B-Zell-Genom eingeschleust",
          ],
          correctIndex: 1,
          explanation:
            "V(D)J-Rekombination ist eine somatische Rekombination, bei der zufällig ein V-Segment, ein D-Segment und ein J-Segment (für schwere Kette) oder V und J (für leichte Kette) ausgewählt und durch das RAG1/RAG2-Enzym-System ligiert werden. Dieses Zusammensetzen aus Segmenten — nicht die Keimbahn-Mutation — ist der Hauptmechanismus zur Erzeugung der enormen Antikörperdiversität.",
          hints: [
            "V = Variable, D = Diversity, J = Joining. Diese Segmente werden zufällig kombiniert.",
            "Das Ergebnis der Rekombination ist eine individuelle B-Zelle mit einem einzigartigen Antikörper.",
          ],
          difficulty: 1,
          tags: ["vdj-rekombination", "antikörperdiversität", "rag", "b-zelle"],
        },
        {
          question:
            "Warum hat die Sekundärantwort (bei erneutem Antigenkontakt) typischerweise schnellere und stärkere Antikörper mit höherer Affinität?",
          options: [
            "Weil das Immunsystem mehr B-Zellen produziert hat",
            "Weil bei der Sekundärantwort IgM produziert wird, das affiner ist als IgG",
            "Weil Gedächtnis-B-Zellen schnell aktiviert werden und Antikörper durch Affinitätsreifung höhere Affinität haben",
            "Weil das Antigen beim zweiten Kontakt bereits neutralisiert ist",
            "Weil die T-Zellen den B-Zellen bei der Sekundärantwort helfen, aber nicht bei der Primärantwort",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Sekundärantwort werden langlebige Gedächtnis-B-Zellen aktiviert, die: (1) bereits die Reifung durchlaufen haben und schnell zu Plasmazellen differenzieren können, (2) Antikörper produzieren, die durch Affinitätsreifung (somatische Hypermutation in Keimzentren) optimiert wurden und daher höhere Affinität haben als jene der Primärantwort, (3) den Klassenwechsel bereits vollzogen haben (IgG statt IgM). Die Sekundärantwort ist schneller, stärker und affiner.",
          hints: [
            "Was sind Gedächtniszellen, und warum sind sie bei der zweiten Begegnung von Vorteil?",
            "Affinitätsreifung in Keimzentren — welche Zellen haben das bereits durchlaufen?",
          ],
          difficulty: 2,
          tags: [
            "sekundaere-immunantwort",
            "gedaechtnis-b-zellen",
            "affinitaetsreifung",
            "impfung",
          ],
        },
        {
          question:
            "Was ist die Funktion des Enzyms TdT (Terminal deoxynucleotidyl Transferase) bei der V(D)J-Rekombination?",
          options: [
            "Es spaltet die DNA an Rekombinationssignalsequenzen (RSS)",
            "Es fügt zufällige Nukleotide (N-Nukleotide) an die Verbindungsstellen ein und erhöht so die junctionale Diversität",
            "Es methyliert die Verbindungsstellen nach der Rekombination",
            "Es selektiert die produktiven von den nicht-produktiven Rearrangements",
            "Es aktiviert die somatische Hypermutation in Keimzentren",
          ],
          correctIndex: 1,
          explanation:
            "TdT (Terminal deoxynucleotidyl Transferase) fügt an den offenen Enden der DNA-Stränge nach dem Schnitt durch RAG1/RAG2 zufällige Nukleotide (N-Nukleotide) ein, ohne eine Matrizenkette zu verwenden. Diese zufällige Insertion kann 1–15 Nukleotide umfassen und ist eine der wichtigsten Quellen junctionaler Diversität, da sie die Leserahmen der Verbindungsstellen verändert und unterschiedliche Aminosäuresequenzen in der Antigenbindestelle erzeugt.",
          hints: [
            "Terminal = am Ende. TdT fügt Nukleotide an die Enden an — ohne Matrize, also zufällig.",
            "N-Nukleotide = Nukleotide ohne Matrizenkopierung (Non-template). Was bewirken zufällige Insertionen?",
          ],
          difficulty: 3,
          tags: ["tdt", "n-nukleotide", "junctionale-diversitaet", "vdj"],
        },
        {
          question: "Was beschreibt die klonale Selektionstheorie (Burnet)?",
          options: [
            "Das Immunsystem produziert Antikörper nach dem Kontakt mit einem Antigen als direkte Reaktion auf das Antigen",
            "Jede B-Zelle trägt vor Antigenkontakt einen einzigartigen BCR; bei Antigenkontakt wird nur die B-Zelle mit passendem BCR aktiviert und klonal expandiert",
            "T-Zellen klonen sich nach Antigenkontakt, B-Zellen nicht",
            "Antikörper werden zuerst im Knochenmark gelagert und erst bei Bedarf freigesetzt",
            "Das Immunsystem wählt Antikörper nach ihrer Produktionskosten aus",
          ],
          correctIndex: 1,
          explanation:
            "Die klonale Selektionstheorie (Burnet, 1957) postuliert: (1) Jede B-Zelle trägt bereits vor Antigenkontakt einen einzigartigen BCR (durch V(D)J-Rekombination generiert). (2) Ein Antigen bindet an die B-Zelle mit dem komplementären BCR. (3) Diese spezifische B-Zelle wird aktiviert und klonal expandiert → viele genetisch identische Tochterzellen (ein Klon). (4) Diese Plasmazellen produzieren alle denselben spezifischen Antikörper. Das Antigen 'wählt' (selektiert) also den passenden Klon aus einer bereits vorhandenen Bibliothek.",
          hints: [
            "Klonal = alle Zellen eines Klons sind genetisch identisch. Selektion = das Antigen wählt aus.",
            "Die Antikörper werden nicht nach Antigenexposition neu erfunden — sie existieren bereits. Was macht das Antigen dann?",
          ],
          difficulty: 2,
          tags: ["klonale-selektion", "burnet", "bcr", "klonale-expansion"],
        },
        {
          question: "Was ist somatische Hypermutation und wo findet sie statt?",
          options: [
            "Mutationen im gesamten Zellgenom, die in der Keimbahn weitergegeben werden",
            "Hochfrequente Mutationen in den V-Regionen der Antikörpergene in Keimzentren, die zur Affinitätsreifung führen",
            "Mutationen, die durch V(D)J-Rekombination entstehen und N-Nukleotide einführen",
            "Mutationen in Tumorzellen, die Antikörpergene inaktivieren",
            "Zufällige Deletionen in den C-Regionen, die zu verschiedenen Isotypen führen",
          ],
          correctIndex: 1,
          explanation:
            "Somatische Hypermutation ist eine hochfrequente Mutageneserate (10⁵–10⁶ × höher als in normalen Genen) in den V-Regionen der Antikörpergene, die in Keimzentren der sekundären Lymphorgane stattfindet. Das Enzym AID (Activation-Induced Cytidine Deaminase) deaminiert Cytosin → Uracil in einzelsträngiger DNA. Durch Reparaturmechanismen entstehen Punktmutationen in den CDR-Regionen (Antigen-Bindestellen). B-Zellen mit Mutationen die höhere Affinität für das Antigen verleihen, werden selektiert → Affinitätsreifung.",
          hints: [
            "Somatisch = in Körperzellen (nicht Keimbahn), Hyper = extrem häufig. Wo findet die B-Zell-Reifung statt?",
            "AID = Activation-Induced Cytidine Deaminase. Was macht dieses Enzym?",
          ],
          difficulty: 2,
          tags: ["somatische-hypermutation", "aid", "keimzentrum", "affinitaetsreifung"],
        },
      ],
    },
    {
      id: "bio-11-03",
      title: "Blutgruppen-Vererbung — AB0-System und Kodominanz",
      content: `## AB0-Blutgruppensystem — Genetische Grundlagen

Das **AB0-Blutgruppensystem** wird durch das ABO-Gen auf Chromosom 9 bestimmt. Das Gen kodiert für eine Glykosyltransferase, die an der Synthese von Kohlenhydrat-Antigenen (A- und B-Antigenen) auf der Oberfläche roter Blutkörperchen beteiligt ist.

**Drei Allele (multiple Allele):**
- **I^A:** Kodiert für A-Transferase → Synthese des A-Antigens
- **I^B:** Kodiert für B-Transferase → Synthese des B-Antigens
- **i⁰:** Kodiert für kein funktionales Enzym → kein Antigen (O-Gruppe)

**Vererbungsmuster:**
- I^A und I^B sind **kodominant** zueinander (beide werden exprimiert)
- I^A und I^B sind beide **dominant** über i⁰ (rezessiv)

## Iso-Hämagglutinine (natürliche Antikörper)

**Anti-A und Anti-B** sind **natürliche Antikörper** (primär IgM), die auch ohne vorherigen Antigenkontakt vorhanden sind. Bildung wahrscheinlich durch Reaktion auf A- und B-ähnliche Antigene auf Bakterien und Nahrungsmitteln in den ersten Lebensmonaten.

Klinisch kritisch: Transfusion inkompatiblen Blutes → Isoagglutination → akute hämolytische Transfusionsreaktion (Hämolyse, Schock, Nierenversagen, Tod).

## Rhesus-System (kurz)

Das Rhesus-System (D-Antigen) ist das wichtigste nach AB0. Rh-positiv = D-Antigen vorhanden (dominant). Rh-negativ = kein D-Antigen. Bedeutung: Rh-Inkompatibilität bei Schwangerschaft (wird in UK4 ausführlich besprochen).

## Blutgruppenvererbung — Beispiele

**Beispiel 1:** Vater Blutgruppe AB (I^A I^B) × Mutter Blutgruppe 0 (i⁰ i⁰)
→ Kinder erhalten entweder I^A oder I^B vom Vater und i⁰ von der Mutter
→ 50% Blutgruppe A (I^A i⁰), 50% Blutgruppe B (I^B i⁰)

**Beispiel 2:** Beide Eltern Blutgruppe A (I^A i⁰)
→ 25% I^A I^A (A), 50% I^A i⁰ (A), 25% i⁰ i⁰ (0)
→ Blutgruppenverteilung der Kinder: 75% A, 25% 0`,
      lernziele: [
        "Die genetische Grundlage des AB0-Systems (drei Allele, Kodominanz) erklären",
        "Genotypen der vier Blutgruppen aufzählen und Blutgruppenvererbung berechnen",
        "Die klinische Relevanz des AB0-Systems bei Transfusionen erläutern",
      ],
      sections: [
        {
          heading: "Genotypen und Phänotypen",
          text: "Die vier AB0-Blutgruppen werden durch drei Allele (I^A, I^B, i⁰) bestimmt. Jede Blutgruppe hat charakteristische Genotypen, Antigene auf Erythrozyten und natürliche Antikörper im Serum.",
          merksatz:
            "AB0-System: 3 Allele (I^A, I^B, i⁰). I^A und I^B kodominant. Blutgruppe 0 = ii⁰ (homozygot rezessiv).",
          table: {
            headers: ["Blutgruppe", "Genotypen", "Antigen", "Antikörper im Serum"],
            rows: [
              ["A", "I^A I^A oder I^A i⁰", "A", "Anti-B"],
              ["B", "I^B I^B oder I^B i⁰", "B", "Anti-A"],
              ["AB", "I^A I^B", "A + B", "Keiner"],
              ["0", "i⁰ i⁰", "Keines", "Anti-A + Anti-B"],
            ],
          },
        },
        {
          heading: "Kodominanz — Beide Allele werden exprimiert",
          text: "Kodominanz bedeutet, dass beide Allele eines heterozygoten Individuums vollständig exprimiert werden und im Phänotyp erkennbar sind. Dies unterscheidet sich von dominanter/rezessiver Vererbung (ein Allel unterdrückt das andere) und von unvollständiger Dominanz (Intermediärphänotyp). Bei Blutgruppe AB werden sowohl A- als auch B-Antigen auf den roten Blutkörperchen exprimiert — beide Allele I^A und I^B sind aktiv und produzieren ihre jeweilige Glykosyltransferase. Wichtig für forensische Genetik und Vaterschaftstests: Eine Person mit Blutgruppe AB kann nicht Blutgruppe 0-Eltern haben (da keiner das AB-Kind-Allel weitergeben kann). Blutgruppen-Mismatch kann Vaterschaft ausschließen, aber nie beweisen.",
          merksatz:
            "Kodominanz: beide Allele werden exprimiert. AB = I^A I^B → A-Antigen + B-Antigen. Unterschied zu Dominanz/Rezessivität und unvollständiger Dominanz.",
        },
        {
          heading: "Universeller Spender und Empfänger",
          text: "In der klinischen Praxis gilt traditionell: Blutgruppe 0 Rh-negativ (0-) als universeller Spender (keine A-, B- oder D-Antigene auf Erythrozyten → kein Angriff durch Empfänger-Antikörper). Blutgruppe AB Rh-positiv (AB+) als universeller Empfänger (keine Anti-A oder Anti-B im Serum → kein Angriff auf Spendererythrozyten). In der modernen Transfusionsmedizin wird diese Vereinfachung vermieden — durch weitere Blutgruppensysteme (Kell, Duffy, Kidd, Lewis etc.) sind auch 0- und AB+-Blut inkompatibel möglich. Dennoch werden 0-Präparate in Notfallsituationen ohne Kreuzprobe eingesetzt. Pro Jahr werden Millionen von Transfusionen durchgeführt — AB0-Fehler durch Verwechslung sind eine vermeidbare Hauptursache schwerer Transfusionszwischenfälle.",
          merksatz:
            "0 Rh-: universeller Spender (keine Antigene). AB Rh+: universeller Empfänger (keine Anti-A/B). In der Praxis: immer blutgruppenidentisch transfundieren wenn möglich.",
        },
      ],
      diagram: "blood-groups",

      merksätze: [
        "Antikörper: Blutgruppe A → Anti-B; B → Anti-A; AB → keine; 0 → Anti-A und Anti-B.",
        "Transfusion: AB0-kompatibel wählen. 0- = universeller Spender (Notfall). Inkompatibilität → Hämolyse.",
      ],
      klinischerBezug:
        "AB0-Inkompatibilität bei Transfusion führt zur schwerwiegenden akuten hämolytischen Transfusionsreaktion (ABO-Fehltransfusion): innerhalb von Minuten Hämolyse, DIC (disseminierte intravasale Koagulation), Nierenversagen und Schock. Dies ist einer der häufigsten vermeidbaren Transfusionstode. Konsequenz: Strenge Identifikationsverfahren (Bedside-Test, Kreuzprobe) vor jeder Transfusion.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Welche Blutgruppen können Eltern mit den Blutgruppen A und B haben, wenn sie ein Kind mit Blutgruppe 0 bekommen?",
        answer:
          "Das Kind mit Blutgruppe 0 hat den Genotyp i⁰ i⁰ — es hat je ein i⁰-Allel von jedem Elternteil geerbt. Also müssen beide Elternteile mindestens ein i⁰-Allel tragen. Vater Blutgruppe A: muss den Genotyp I^A i⁰ haben (heterozygot). Mutter Blutgruppe B: muss den Genotyp I^B i⁰ haben (heterozygot). Hätte ein Elternteil den Genotyp I^A I^A (homozygot A) oder I^B I^B (homozygot B), könnte kein i⁰-Allel weitergegeben werden und das Kind könnte keine Blutgruppe 0 haben.",
      },
      selfTest: [
        {
          question: "Welche Antikörper hat eine Person mit Blutgruppe A?",
          options: [
            "Anti-A-Antikörper",
            "Anti-B-Antikörper",
            "Anti-A und Anti-B-Antikörper",
            "Keine Antikörper gegen AB0-Antigene",
            "Nur IgE-Antikörper gegen A-Antigene",
          ],
          correctIndex: 1,
          explanation:
            "Personen mit Blutgruppe A haben A-Antigene auf ihren Erythrozyten und produzieren natürliche Anti-B-Antikörper (primär IgM). Diese Antikörper reagieren gegen B-Antigene fremder Blutgruppen. Anti-A-Antikörper würden die eigenen Erythrozyten angreifen — das wird durch die Selbsttoleranz verhindert. Dieses Muster 'Antikörper gegen das, was man nicht hat' gilt für alle AB0-Blutgruppen.",
          hints: [
            "Merksatz: Man hat Antikörper gegen das, was man NICHT auf seinen Erythrozyten hat.",
            "Blutgruppe A = A-Antigen vorhanden. Welches Antigen fehlt? Und gegen welches bildet man daher Antikörper?",
          ],
          difficulty: 1,
          tags: ["blutgruppe-a", "anti-b", "isoagglutinin", "ab0-system"],
        },
        {
          question:
            "Vater hat Blutgruppe AB, Mutter hat Blutgruppe 0. Welche Blutgruppen können ihre Kinder haben?",
          options: [
            "Nur AB",
            "A, B, AB, oder 0",
            "A oder B (aber nicht AB oder 0)",
            "Nur 0",
            "AB oder 0 (aber nicht A oder B)",
          ],
          correctIndex: 2,
          explanation:
            "Vater AB: Genotyp I^A I^B — gibt entweder I^A oder I^B weiter. Mutter 0: Genotyp i⁰ i⁰ — gibt immer i⁰ weiter. Mögliche Kinderkombinationen: I^A i⁰ (Blutgruppe A, 50%) oder I^B i⁰ (Blutgruppe B, 50%). Blutgruppe AB (I^A I^B) ist nicht möglich, da die Mutter kein I^A oder I^B besitzt. Blutgruppe 0 (i⁰ i⁰) ist nicht möglich, da der Vater kein i⁰-Allel hat.",
          hints: [
            "Vater AB = I^A I^B. Mutter 0 = i⁰ i⁰. Was kann jeder weitergeben?",
            "Erstellen Sie einen Punnett-Quadrat: I^A und I^B vom Vater × i⁰ von der Mutter.",
          ],
          difficulty: 2,
          tags: ["blutgruppenvererbung", "punnett", "ab0-system", "kodominanz"],
        },
        {
          question: "Was bedeutet 'Kodominanz' bei den Blutgruppen I^A und I^B?",
          options: [
            "I^A unterdrückt I^B vollständig (dominiert)",
            "I^B unterdrückt I^A vollständig (dominiert)",
            "Beide Allele I^A und I^B werden gleichzeitig exprimiert — der Heterozygote (AB) zeigt beide Antigene",
            "I^A und I^B zeigen zusammen einen Intermediärphänotyp (weder A noch B, sondern ein neues Antigen)",
            "I^A und I^B schwächen sich gegenseitig ab, sodass nur wenig Antigen auf den Erythrozyten vorliegt",
          ],
          correctIndex: 2,
          explanation:
            "Kodominanz bedeutet, dass beide Allele vollständig exprimiert werden. Bei I^A I^B-Heterozygoten (Blutgruppe AB) werden sowohl A-Antigen als auch B-Antigen auf den Erythrozyten exprimiert. Beide Glykosyltransferasen (kodiert durch I^A bzw. I^B) sind aktiv und bauen ihre jeweiligen Kohlenhydrate auf die Zelloberfläche. Dies ist kein Intermediärphänotyp, sondern vollständige Expression beider Allele.",
          hints: [
            "Kodominanz = beide werden ausgedrückt, keines überdeckt das andere.",
            "Was ist der Unterschied zwischen AB-Blutgruppe (Kodominanz) und unvollständiger Dominanz (Mittelwert)?",
          ],
          difficulty: 2,
          tags: ["kodominanz", "blutgruppe-ab", "genexpression", "erbgang"],
        },
        {
          question:
            "Warum ist die Transfusion von Blutgruppe-0-Blut in einen Blutgruppe-A-Patienten sicherer als umgekehrt (A in 0)?",
          options: [
            "Weil Blutgruppe 0 keine Antigene auf den Erythrozyten hat, die vom Anti-A des Empfängers angegriffen werden könnten",
            "Weil Blutgruppe 0 mehr Erythrozyten pro Liter enthält",
            "Weil Blutgruppe A immer Anti-A produziert und sich selbst angreift",
            "Weil Blutgruppe 0 weniger immunogen ist als andere Blutgruppen",
            "Weil der 0-Spender keine Antikörper produziert",
          ],
          correctIndex: 0,
          explanation:
            "Blutgruppe 0 hat keine A- oder B-Antigene auf den Erythrozyten (i⁰ i⁰ → keine Glykosyltransferase). Ein Blutgruppe-A-Empfänger hat Anti-B-Antikörper, aber keine Anti-A (da er A-Antigene trägt und Self-Toleranz besteht). Transfundierte 0-Erythrozyten werden nicht angegriffen. Umgekehrt: A-Blut in 0-Empfänger → der 0-Patient hat Anti-A → sofortige Hämolyse der A-Erythrozyten.",
          hints: [
            "0-Blut hat keine A- oder B-Antigene. Welche Antikörper hat der A-Empfänger?",
            "Der Empfänger greift Spendererythrozyten an — wenn die keine Antigene haben, gibt es keinen Angriff.",
          ],
          difficulty: 2,
          tags: ["transfusion", "universeller-spender", "haemolyse", "ab0-kompatibilitaet"],
        },
        {
          question:
            "Ein Kind hat Blutgruppe 0. Welche Blutgruppengenotypen können die Eltern NICHT haben?",
          options: [
            "Vater I^A i⁰ und Mutter I^B i⁰",
            "Beide Eltern i⁰ i⁰",
            "Vater I^A I^B und Mutter i⁰ i⁰",
            "Vater I^A i⁰ und Mutter i⁰ i⁰",
            "Beide Eltern I^A i⁰",
          ],
          correctIndex: 2,
          explanation:
            "Ein Kind mit Blutgruppe 0 hat den Genotyp i⁰ i⁰ — es benötigt ein i⁰-Allel von jedem Elternteil. Ein Vater mit Genotyp I^A I^B hat kein i⁰-Allel — er kann nur I^A oder I^B weitergeben. Selbst wenn die Mutter i⁰ i⁰ ist, erhält das Kind entweder I^A i⁰ (Blutgruppe A) oder I^B i⁰ (Blutgruppe B) — niemals i⁰ i⁰ (Blutgruppe 0). Daher ist die Kombination Vater AB × Mutter 0 ausgeschlossen für ein 0-Kind.",
          hints: [
            "Blutgruppe 0-Kind = i⁰ i⁰. Woher bekommt das Kind jedes i⁰? Vom Vater UND von der Mutter.",
            "Wenn der Vater AB (I^A I^B) ist, hat er kein i⁰. Kann er einem Kind i⁰ weitergeben?",
          ],
          difficulty: 3,
          tags: ["blutgruppe-0", "genotyp-ausschluss", "vaterschaftstest", "punnett"],
        },
      ],
    },
    {
      id: "bio-11-04",
      title: "Rhesusfaktor — Vererbung, Inkompatibilität und Anti-D",
      content: `## Rhesusfaktor — Definition

Das **Rhesus-System** ist das medizinisch bedeutsamste Blutgruppensystem nach AB0. Das wichtigste Antigen ist das **D-Antigen (Rh-D)**, kodiert durch das RHD-Gen auf Chromosom 1.

- **Rh-positiv (Rh+):** D-Antigen vorhanden. Dominant — auch ein einziges funktionales RHD-Allel führt zur D-Antigen-Expression
- **Rh-negativ (Rh-):** Kein D-Antigen. Entweder Deletion des RHD-Gens (häufigste Ursache in Europa) oder nicht-funktionale Variante

**Genetik:**
- RhD wird autosomal dominant vererbt
- Rh+ kann homozygot (DD) oder heterozygot (Dd) sein
- Rh- ist homozygot (dd) — nur bei Homozygotie für das nicht-funktionale Allel

Häufigkeit: Ca. 85% der Europäer sind Rh+, 15% Rh-.

## Rhesus-Inkompatibilität in der Schwangerschaft

Eine klinisch bedeutsame Situation: **Rh-negative Mutter mit Rh-positivem Kind** (Vater Rh+).

**Erste Schwangerschaft:** Beim ersten Kind tritt in der Regel keine schwere Immunreaktion auf. Am Ende der Schwangerschaft oder bei der Geburt können fetale Erythrozyten in die mütterliche Zirkulation übertreten (fetomaternale Blutung). Erste Sensibilisierung: Mutter bildet Anti-D-Antikörper (zunächst IgM, dann IgG).

**Zweite und folgende Schwangerschaften mit Rh+ Fetus:** Mütterliche Anti-D-IgG-Antikörper können die Plazenta passieren (IgG ist plazentagängig!) → binden an fetale Rh+ Erythrozyten → Hämolyse → **Morbus haemolyticus neonatorum (MHN)** / Erythroblastosis fetalis.

Klinisches Bild: Anämie, Gelbsucht (Hyperbilirubinämie), Hydrops fetalis (schwerste Form → intrauteriner Tod).

## Anti-D-Prophylaxe

**Anti-D-Prophylaxe (Rhesusprophylaxe):** Verabreichung von Anti-D-Immunglobulin (polyklonale IgG-Antikörper gegen D-Antigen) an Rh-negative Mütter:
- Standardmäßig in der **28. SSW** und innerhalb von **72 Stunden nach Geburt** eines Rh+ Kindes
- Auch nach risikoträchtigen Situationen: Amniozentese, CVS, Blutungen, Aborte

**Wirkmechanismus:** Die verabreichten Anti-D-Antikörper binden an fetale Rh+ Erythrozyten, die in die Mutterzirkulation gelangt sind, und markieren sie zur schnellen Elimination durch Phagozytose — bevor das mütterliche Immunsystem auf sie reagieren und eine primäre Immunantwort (Sensibilisierung) aufbauen kann. "Passive Immunisierung, die aktive Immunisierung verhindert."

## Weiteres Rhesus-Antigensystem

Neben D-Antigen sind C, c, E, e-Antigene immunologisch relevant, aber weniger häufig Ursache schwerer Inkompatibilitäten. Vollständige Rhesus-Typisierung umfasst alle fünf Hauptantigene.`,
      lernziele: [
        "Die Vererbung des Rh-D-Antigens und die Bedeutung von Homozygotie/Heterozygotie erklären",
        "Den Mechanismus der Rhesus-Inkompatibilität und die Pathogenese des Morbus haemolyticus neonatorum beschreiben",
        "Den Wirkmechanismus der Anti-D-Prophylaxe erläutern",
      ],
      sections: [
        {
          heading: "Rhesus-Inkompatibilität — Schritt für Schritt",
          text: "Der Pathomechanismus der Rhesus-Inkompatibilität verläuft in zwei Phasen. Phase 1 (Sensibilisierung): Bei einer ersten Rh+ Schwangerschaft oder durch Bluttransfusion gelangen Rh+ Erythrozyten in die Zirkulation der Rh- Mutter. Das Rh-D-Antigen ist stark immunogen. Die Mutter bildet zunächst IgM-Anti-D-Antikörper (IgM kann Plazenta nicht passieren → erstes Kind kaum betroffen), dann IgG-Anti-D. Phase 2 (Reaktion): Bei der nächsten Rh+ Schwangerschaft passieren mütterliche IgG-Anti-D die Plazenta. Sie binden an D-Antigen auf fetalen Erythrozyten → Hämolyse durch Komplementaktivierung und ADCC → Anämie → extralobuläre Erythropoese (Leber, Milz) → Hepatomegalie, Splenomegalie → Hydrops fetalis (schwere Ödembildung) im schwersten Fall.",
          merksatz:
            "Rhesus-Inkompatibilität: Rh- Mutter + Rh+ Kind. 1. Schwangerschaft = Sensibilisierung. 2. Schwangerschaft = IgG-Anti-D passiert Plazenta → Hämolyse beim Kind.",
        },
        {
          heading: "Anti-D-Prophylaxe — Wirkmechanismus und Zeitpunkt",
          text: "Die Anti-D-Prophylaxe ist eine der großen Errungenschaften der pränatalen Medizin. Vor ihrer Einführung (1968) war Rhesusinkompatibilität eine der häufigsten Ursachen für perinatale Mortalität. Der Wirkmechanismus basiert auf dem Prinzip der Antikörper-vermittelten Suppression der Immunantwort: Exogen verabreichte Anti-D-IgG-Antikörper binden an Rh+ Erythrozyten in der mütterlichen Zirkulation und führen zu ihrer schnellen Clearance durch Makrophagen der Milz, bevor B-Zellen eine Primärantwort aufbauen können. Der genaue Mechanismus ist nicht vollständig geklärt — möglicherweise spielen auch FcgRIIb (inhibitorische Fc-Rezeptoren auf B-Zellen) eine Rolle. Die Prophylaxe wird in der 28. SSW (pränatale Prophylaxe, da 2% der Mütter sich bereits antepartum sensibilisieren) und innerhalb von 72 Stunden postpartal verabreicht.",
          merksatz:
            "Anti-D-Prophylaxe: verabreichte Anti-D-IgG → Phagozytose fetaler Rh+ Erythrozyten vor mütterlicher Immunantwort → keine Sensibilisierung. 28. SSW + <72h postpartal.",
        },
      ],
      merksätze: [
        "RhD: dominant (ein Allel reicht für Rh+). Rh- = homozygot dd (RHD-Deletion). 85% Europäer Rh+.",
        "Rhesus-Inkompatibilität: Rh- Mutter → Sensibilisierung → Anti-D IgG → passiert Plazenta → Hämolyse beim Rh+ Kind.",
        "Anti-D-Prophylaxe: 28. SSW und <72h post partum. Verhindert Sensibilisierung durch schnelle Elimination fetaler Rh+ Erythrozyten.",
      ],
      klinischerBezug:
        "Dank universeller Anti-D-Prophylaxe ist der Morbus haemolyticus neonatorum durch Rh-Inkompatibilität in Industrieländern selten geworden. Restrisiken bestehen bei nicht erkannten Sensibilisierungen (z. B. stille fetomaternale Transfusionen frühzeitig) oder bei nicht-D Rh-Antigenen (Kell, Kidd) ohne verfügbare Prophylaxe.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie, warum das erste Kind einer Rh-negativen Mutter mit einem Rh-positiven Vater meist nicht vom Morbus haemolyticus neonatorum betroffen ist, das zweite Kind jedoch gefährdet ist.",
        answer:
          "Beim ersten Kind findet die Sensibilisierung der Rh-negativen Mutter erst am Ende der Schwangerschaft oder bei der Geburt statt (fetomaternale Blutung). In dieser ersten Schwangerschaft bildet die Mutter zunächst Anti-D-IgM-Antikörper, die die Plazenta nicht passieren können (zu groß). Das erste Kind ist daher kaum betroffen. Nach der Geburt entwickelt die Mutter IgG-Anti-D-Antikörper (Gedächtnis-B-Zellen). Bei einer zweiten Schwangerschaft mit Rh+ Fetus können diese IgG-Anti-D die Plazenta passieren und fetale Erythrozyten lysieren → Morbus haemolyticus neonatorum.",
      },
      selfTest: [
        {
          question:
            "Eine Rh-negative Frau ist zum ersten Mal schwanger mit einem Rh-positiven Kind. Was sollte prophylaktisch unternommen werden?",
          options: [
            "Keine Maßnahmen nötig, da das erste Kind nicht gefährdet ist",
            "Sofortige Transfusion mit Rh-positivem Blut zur Desensibilisierung",
            "Anti-D-Immunglobulin in der 28. SSW und innerhalb von 72 Stunden nach der Geburt",
            "Nur Transfusion nach der Geburt, wenn das Kind Anämie zeigt",
            "Kortikosteroide zur Suppression der Immunantwort der Mutter",
          ],
          correctIndex: 2,
          explanation:
            "Die Standard-Anti-D-Prophylaxe bei Rh-negativen Müttern mit Rh-positivem Kind umfasst: pränatale Gabe in der 28. SSW (verhindert antepartale Sensibilisierung durch stille fetomaternale Bluttransfusionen) und postpartale Gabe innerhalb von 72 Stunden nach Geburt (verhindert Sensibilisierung durch peripartale fetomaternale Blutung). Ohne Prophylaxe würde die Mutter Anti-D-Antikörper bilden und eine folgende Schwangerschaft gefährdet.",
          hints: [
            "Anti-D-Prophylaxe verhindert die Sensibilisierung — wann droht Sensibilisierung?",
            "28. SSW (präpartal) und <72h postpartal. Beide Zeitpunkte sind wichtig.",
          ],
          difficulty: 1,
          tags: ["anti-d-prophylaxe", "rhesus-inkompatibilitaet", "sensibilisierung", "ssw"],
        },
        {
          question:
            "Warum kann Anti-D-IgG im Gegensatz zu Anti-D-IgM die Plazenta passieren und beim Feten Hämolyse verursachen?",
          options: [
            "Weil IgG kleiner ist als IgM und durch einfache Diffusion passiert",
            "Weil IgG durch den neonatalen Fc-Rezeptor (FcRn) aktiv durch die Plazenta transportiert wird; IgM ist als Pentamer zu groß",
            "Weil IgM durch Komplement aktiviert wird und dann die Plazenta nicht mehr passieren kann",
            "Weil IgG eine höhere Affinität für D-Antigene hat als IgM",
            "Weil IgM nur in der Milz produziert wird und nicht in die Zirkulation gelangt",
          ],
          correctIndex: 1,
          explanation:
            "IgG wird aktiv durch den neonatalen Fc-Rezeptor (FcRn) auf Trophoblasten der Plazenta transportiert — dieser Mechanismus dient normalerweise dem maternalen Schutz des Neugeborenen. IgM ist ein Pentamer mit einem Molekulargewicht von ca. 900 kDa — zu groß für den FcRn-Transport und für passive Diffusion durch die Plazentaschranke. Daher ist in der ersten Schwangerschaft (wenn hauptsächlich IgM gebildet wird) das Kind kaum gefährdet, in der zweiten (IgG dominiert) gefährdet.",
          hints: [
            "Welches Ig passiert die Plazenta und schützt das Neugeborene? Und wie?",
            "IgM als Pentamer — ist das groß oder klein? Kann ein so großes Molekül die Plazenta passieren?",
          ],
          difficulty: 2,
          tags: ["igg-plazentatransport", "fcrn", "igm-pentamer", "fetale-haemolyse"],
        },
        {
          question: "Wie wird der Rhesusfaktor D vererbt?",
          options: [
            "X-chromosomal rezessiv — Söhne von Rh-negativen Müttern sind immer Rh-negativ",
            "Autosomal rezessiv — Rh-positiv ist nur bei Homozygoten exprimiert",
            "Autosomal dominant — ein einziges funktionales RHD-Allel führt zur D-Antigen-Expression (Rh+)",
            "Mitochondrial — wird nur von der Mutter weitergegeben",
            "Codominant — DD-Individuen haben doppelt so viel D-Antigen wie Dd-Individuen",
          ],
          correctIndex: 2,
          explanation:
            "Das D-Antigen (Rh-D) wird autosomal dominant vererbt: Ein einziges funktionales RHD-Allel reicht aus, um das D-Antigen zu exprimieren (Rh-positiv). Rh-positiv kann daher homozygot (DD) oder heterozygot (Dd) sein. Rh-negativ (dd) tritt nur bei Homozygotie für das nicht-funktionale Allel auf (in Europa meist Deletion des RHD-Gens). Ca. 85% der Europäer sind Rh+ (DD oder Dd), 15% sind Rh- (dd).",
          hints: [
            "Dominant = ein Allel reicht aus für die Merkmalsexpression. Rh+ kann dd-Individuum sein? Nein, d ist das rezessive Allel.",
            "Wenn 85% Rh+ sind, wie viele können homozygot RhD+ (DD) oder heterozygot (Dd) sein?",
          ],
          difficulty: 2,
          tags: ["rhd-vererbung", "autosomal-dominant", "rh-positiv", "rhd-gen"],
        },
        {
          question: "Was ist der Wirkmechanismus der Anti-D-Prophylaxe?",
          options: [
            "Anti-D-IgM neutralisiert D-Antigene auf fetalen Erythrozyten und verhindert deren Eintritt in die Mutterzirkulation",
            "Anti-D-IgG bindet an Rh+ Erythrozyten in der Mutterzirkulation und führt zu ihrer Phagozytose bevor eine mütterliche Immunantwort entstehen kann",
            "Anti-D-IgG aktiviert Suppressorzellen, die die mütterliche B-Zell-Antwort unterdrücken",
            "Anti-D verhindert die Passage fetaler Erythrozyten durch die Plazenta",
            "Anti-D aktiviert natürliche Killerzellen, die fetale Rh+ Erythrozyten in der Plazenta zerstören",
          ],
          correctIndex: 1,
          explanation:
            "Anti-D-IgG-Immunglobulin bindet an Rh-D-Antigene auf fetalen Rh+ Erythrozyten in der mütterlichen Zirkulation (die während fetomaternaler Bluttransfusion eingetreten sind). Die IgG-markierten Erythrozyten werden schnell durch Makrophagen der Milz phagozytiert und eliminiert — bevor das mütterliche Immunsystem eine primäre Immunantwort (Sensibilisierung → B-Zell-Aktivierung → Anti-D-Produktion) aufbauen kann. Passiv verabreichte Antikörper 'löschen' also das Antigen, bevor die aktive Immunisierung beginnt.",
          hints: [
            "Passive Immunisierung verhindert aktive Immunisierung — wie? Das Antigen muss verschwinden, bevor eine Reaktion entsteht.",
            "Anti-D bindet Rh+ Erythrozyten → was passiert dann mit markierten Erythrozyten im Körper?",
          ],
          difficulty: 2,
          tags: [
            "anti-d-wirkmechanismus",
            "passive-immunisierung",
            "phagozytose",
            "sensibilisierungspraevention",
          ],
        },
        {
          question:
            "Eine Rh-negative Mutter hat bereits drei Rh-positive Kinder, war aber nie prophylaktisch behandelt. Ihr viertes Kind kommt mit schwerem Hydrops fetalis und Anämie zur Welt. Was hat die Mutter?",
          options: [
            "IgM-Anti-D-Antikörper, die die Plazenta passiert haben",
            "IgG-Anti-D-Antikörper, die durch Sensibilisierung in früheren Schwangerschaften entstanden sind und die Plazenta passiert haben",
            "IgE-Anti-D-Antikörper, die eine allergische Reaktion beim Kind auslösen",
            "Fehlende Antikörper — der Hydrops hat eine andere Ursache",
            "IgA-Anti-D-Antikörper aus der Muttermilch",
          ],
          correctIndex: 1,
          explanation:
            "Durch die unbehandelten früheren Rh+ Schwangerschaften hat die Mutter IgG-Anti-D-Antikörper gebildet (Sensibilisierung nach fetomaternalen Bluttransfusionen, besonders bei Geburten). IgG-Anti-D passiert die Plazenta über FcRn-Transport und bindet an die Rh+ Erythrozyten des Feten → Hämolyse → schwere Anämie → extralobuläre Erythropoese → Hydrops fetalis. Dies ist der klassische Morbus haemolyticus neonatorum, der durch Anti-D-Prophylaxe hätte verhindert werden können.",
          hints: [
            "Mehrere ungeschützte Rh+ Schwangerschaften → Sensibilisierung mit zunehmenden IgG-Anti-D-Titern.",
            "Welches Ig passiert die Plazenta und ist mit zunehmenden Schwangerschaften stärker?",
          ],
          difficulty: 2,
          tags: [
            "morbus-haemolyticus-neonatorum",
            "hydrops-fetalis",
            "igg-anti-d",
            "mehrfachschwangerschaft",
          ],
        },
      ],
    }
  ],
};
