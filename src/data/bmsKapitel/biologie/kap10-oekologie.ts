import type { Kapitel } from "../types";

export const bioKap10: Kapitel = {
  id: "bio-kap10",
  title: "Ökologie",
  subject: "biologie",
  icon: "🌿",
  estimatedTime: "120 min",
  unterkapitel: [
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
  ],
};
