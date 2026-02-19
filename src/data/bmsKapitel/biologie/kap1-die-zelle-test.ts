import type { Kapitel } from '../types';

export const bioKap1: Kapitel = {
  id: 'bio-kap1',
  title: 'Die Zelle',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'bio-kap1-uk01',
      title: 'Zellstruktur und Zellmembran',
      content: `# Zellstruktur und Zellmembran

Die Zelle ist die kleinste lebende Einheit aller Organismen. Sie ist das fundamentale Bauprinzip des Lebens – von einzelligen Bakterien bis zu komplexen mehrzelligen Organismen wie dem Menschen. Das Verständnis der Zellstruktur ist die Grundlage für das gesamte Verständnis biologischer und medizinischer Prozesse.

## Zelltheorie

Die Zelltheorie bildet das Fundament der modernen Biologie. Sie besagt: Alle Lebewesen bestehen aus Zellen, Zellen entstehen nur aus Zellen, und die Zelle ist die kleinste lebende Einheit. Diese drei Grundsätze wurden im 19. Jahrhundert etabliert und gelten bis heute unverändert.

> **MerksatzBox type="merke":** Omnis cellula e cellula – jede Zelle entsteht aus einer Zelle (Rudolf Virchow, 1855). Dieser Grundsatz schließt spontane Entstehung von Leben aus.

## Prokaryoten vs. Eukaryoten

Die grundlegende Unterscheidung in der Zellbiologie ist die zwischen Prokaryoten und Eukaryoten. Prokaryoten (Bakterien, Archaeen) haben keinen membranumschlossenen Zellkern – ihre DNA liegt frei im Zytoplasma (Nukleoid). Eukaryoten (Tiere, Pflanzen, Pilze, Protisten) besitzen einen echten Zellkern und weitere membranumschlossene Organellen.

> **MerksatzBox type="klinisch":** Antibiotika nutzen die Unterschiede zwischen Prokaryoten und Eukaryoten aus: Penicillin hemmt die bakterielle Zellwandsynthese, schadet menschlichen Zellen aber nicht, da diese keine Zellwand besitzen.

> **MerksatzBox type="altfragen":** Die Unterscheidung Prokaryot/Eukaryot wird im MedAT regelmäßig abgefragt – achte besonders auf das Merkmal "Zellkern" als entscheidendes Kriterium.

## Biomembranen

Die Plasmamembran umgibt jede Zelle und trennt das Zellinnere von der Außenwelt. Sie besteht aus einer Lipiddoppelschicht (Phospholipid-Bilayer) mit eingelagerten Proteinen – dies wird als Flüssig-Mosaik-Modell bezeichnet. Die hydrophoben Fettsäureketten der Phospholipide bilden das Innere der Membran, während die hydrophilen Kopfgruppen zur wässrigen Umgebung zeigen.

### Membranproteine

Membranproteine erfüllen vielfältige Aufgaben und lassen sich in zwei Hauptkategorien einteilen:

- **Integrale Proteine:** Durchspannen die Membran vollständig (transmembran). Beispiele sind Ionenkanäle, Transporter und Rezeptoren.
- **Periphere Proteine:** Liegen an der Membranoberfläche, ohne sie zu durchspannen. Sie können leichter von der Membran gelöst werden.

> **MerksatzBox type="merke":** Lipiddoppelschicht = Barriere für polare Moleküle; Proteine = Tore, Transporter und Signalempfänger. Ohne Proteine wäre die Membran nur eine passive Barriere.

## Transportmechanismen

Der Transport von Molekülen durch die Zellmembran erfolgt über verschiedene Mechanismen, die sich grundsätzlich in passiv und aktiv unterteilen lassen.

**Passiver Transport:**
- **Einfache Diffusion:** Kleine, unpolare Moleküle (O₂, CO₂, N₂) diffundieren direkt durch die Lipiddoppelschicht entlang des Konzentrationsgradienten
- **Osmose:** Diffusion von Wasser durch die Membran (bzw. durch Aquaporine)
- **Erleichterte Diffusion:** Polare Moleküle (z.B. Glucose) nutzen Kanalproteine oder Carrier, aber folgen dennoch dem Gradienten – kein ATP nötig

**Aktiver Transport:**
- Erfolgt gegen den Konzentrationsgradienten
- Benötigt Energie in Form von ATP
- Beispiel: Na⁺/K⁺-ATPase (Natrium-Kalium-Pumpe)

> **MerksatzBox type="altfragen":** Die Na⁺/K⁺-Pumpe ist ein MedAT-Klassiker: Sie pumpt 3 Natrium-Ionen nach außen und 2 Kalium-Ionen nach innen – unter ATP-Verbrauch. Dies erzeugt das Ruhepotential von Nervenzellen.

> **MerksatzBox type="klinisch":** Cystische Fibrose (Mukoviszidose) entsteht durch einen defekten Chlorid-Kanal (CFTR-Protein). Der fehlende Chloridtransport führt zu zähem Schleim in Lunge und Pankreas – eine der häufigsten Erbkrankheiten in Europa.`,
      lernziele: [
        'Zelltheorie erklären und ihre drei Grundsätze benennen',
        'Prokaryoten von Eukaryoten unterscheiden',
        'Biomembran-Aufbau nach dem Flüssig-Mosaik-Modell beschreiben',
        'Transportmechanismen (passiv vs. aktiv) klassifizieren',
        'Na⁺/K⁺-ATPase als Beispiel für aktiven Transport erklären'
      ],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "Was ist der Hauptunterschied zwischen Prokaryoten und Eukaryoten?",
          options: [
            "Prokaryoten haben Mitochondrien, Eukaryoten nicht",
            "Prokaryoten haben keinen membranumschlossenen Zellkern",
            "Eukaryoten haben keine Ribosomen",
            "Prokaryoten sind immer mehrzellig",
            "Eukaryoten haben keine DNA"
          ],
          correctIndex: 1,
          explanation: "Prokaryoten (z.B. Bakterien) besitzen keinen Zellkern – ihre DNA liegt frei im Zytoplasma in einer Region namens Nukleoid. Eukaryoten haben einen membranumschlossenen Kern. Beide Zelltypen haben Ribosomen (Option C falsch), aber Prokaryoten haben keine Mitochondrien (Option A ist umgekehrt). DNA ist in allen Zellen vorhanden (Option E falsch). Prokaryoten sind typischerweise einzellig (Option D falsch).",
          hints: [
            "Der Unterschied liegt im Kern – überlege, was 'eu-karyon' (echter Kern) bedeutet.",
            "Bakterien sind Prokaryoten. Haben Bakterien einen Zellkern?"
          ],
          tags: ["zelltheorie", "prokaryot", "eukaryot"],
          difficulty: 1
        },
        {
          question: "Welcher Transportmechanismus benötigt ATP?",
          options: [
            "Einfache Diffusion von O₂",
            "Osmose von Wasser",
            "Erleichterte Diffusion von Glucose",
            "Aktiver Transport durch Na⁺/K⁺-ATPase",
            "Diffusion von CO₂"
          ],
          correctIndex: 3,
          explanation: "Nur aktiver Transport benötigt ATP, da er gegen den Konzentrationsgradienten arbeitet. Die Na⁺/K⁺-ATPase pumpt 3 Natrium-Ionen raus und 2 Kalium-Ionen rein – unter ATP-Verbrauch. Alle anderen Optionen (A, B, C, E) sind passive Transportmechanismen, die entlang des Gradienten verlaufen und daher keine Energie benötigen.",
          hints: [
            "ATP = Energie. Welcher Prozess braucht Energie, weil er gegen die natürliche Richtung läuft?",
            "Überlege: Diffusion folgt dem Gradienten (kein ATP nötig). Was ist der Gegensatz?"
          ],
          tags: ["transport", "atp", "natrium-kalium-pumpe"],
          difficulty: 2
        },
        {
          question: "Was beschreibt das Flüssig-Mosaik-Modell?",
          options: [
            "Die Struktur der DNA-Doppelhelix",
            "Die Anordnung von Ribosomen im Zytoplasma",
            "Die Biomembran als Lipiddoppelschicht mit eingelagerten Proteinen",
            "Die Organisation des Zytoskeletts",
            "Die Struktur von Mitochondrien"
          ],
          correctIndex: 2,
          explanation: "Das Flüssig-Mosaik-Modell (Singer & Nicolson, 1972) beschreibt die Struktur der Zellmembran: Eine flüssige Lipiddoppelschicht, in der Proteine wie in einem Mosaik eingelagert sind. 'Flüssig' bedeutet, dass Lipide und Proteine lateral beweglich sind; 'Mosaik' bezieht sich auf die verschiedenen eingelagerten Proteine. Die anderen Optionen beschreiben andere zelluläre Strukturen.",
          hints: [
            "Das Modell bezieht sich auf die Zellmembran.",
            "Überlege: Was ist 'flüssig' und was bildet das 'Mosaik'?"
          ],
          tags: ["zellmembran", "biomembran", "flüssig-mosaik-modell"],
          difficulty: 2
        },
        {
          question: "Welche Aussage zur Osmose ist korrekt?",
          options: [
            "Osmose ist der Transport von gelösten Stoffen durch die Membran",
            "Osmose benötigt immer ATP",
            "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran",
            "Osmose erfolgt nur durch Carrier-Proteine",
            "Osmose ist ein Beispiel für aktiven Transport"
          ],
          correctIndex: 2,
          explanation: "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran – vom Ort niedriger Lösungsmittelkonzentration (= hohe Wasserkonzentration) zum Ort hoher Lösungsmittelkonzentration (= niedrige Wasserkonzentration). Es ist ein passiver Prozess (kein ATP nötig, Optionen B und E falsch). Wasser kann direkt durch die Lipiddoppelschicht oder durch spezialisierte Aquaporine diffundieren. Osmose betrifft Wasser, nicht gelöste Stoffe (Option A falsch).",
          hints: [
            "Osmose ist eine spezielle Form der Diffusion – welcher Stoff diffundiert?",
            "Passiv oder aktiv? Überlege, ob Energie benötigt wird."
          ],
          tags: ["osmose", "transport", "diffusion"],
          difficulty: 1
        },
        {
          question: "Was macht die Na⁺/K⁺-ATPase?",
          options: [
            "Sie pumpt 2 Natrium-Ionen raus und 3 Kalium-Ionen rein",
            "Sie pumpt 3 Natrium-Ionen raus und 2 Kalium-Ionen rein",
            "Sie öffnet Natrium-Kanäle passiv",
            "Sie synthetisiert ATP aus ADP",
            "Sie pumpt Calcium-Ionen in die Zelle"
          ],
          correctIndex: 1,
          explanation: "Die Na⁺/K⁺-ATPase (Natrium-Kalium-Pumpe) ist ein primär-aktiver Transporter, der unter ATP-Verbrauch 3 Natrium-Ionen aus der Zelle herauspumpt und 2 Kalium-Ionen in die Zelle hineinpumpt. Dieser elektrogene Transport (3 positive Ladungen raus, 2 rein = Netto-1 raus) erzeugt das negative Ruhemembranpotential von Nervenzellen (-70 mV). Option A hat die Zahlen vertauscht.",
          hints: [
            "Die Pumpe erzeugt eine elektrische Ladungsdifferenz (mehr positive Ladungen verlassen die Zelle).",
            "Die Zahlen sind wichtig: Welche Kombination ergibt netto eine negative Innenseite?"
          ],
          tags: ["natrium-kalium-pumpe", "aktiver-transport", "membranpotential"],
          difficulty: 2
        },
        {
          question: "Warum können polare Moleküle die Lipiddoppelschicht nicht direkt durchqueren?",
          options: [
            "Weil sie zu groß sind",
            "Weil das Innere der Lipiddoppelschicht hydrophob ist",
            "Weil sie positiv geladen sind",
            "Weil sie von der Membran abgestoßen werden",
            "Weil sie zu schnell sind"
          ],
          correctIndex: 1,
          explanation: "Die Lipiddoppelschicht hat ein hydrophobes (wasserabweisendes) Innere, gebildet von den unpolaren Fettsäureketten. Polare Moleküle (wie Glucose, Aminosäuren, Ionen) sind hydrophil und können diese hydrophobe Barriere energetisch nicht überwinden. Sie benötigen daher Transportproteine (Carrier oder Kanäle). Größe spielt eine Rolle (Option A), ist aber nicht der Hauptgrund – selbst kleine polare Moleküle brauchen Hilfe.",
          hints: [
            "Überlege: Öl und Wasser mischen sich nicht. Warum?",
            "Das Innere der Membran ist fettähnlich – welche Eigenschaft hat Fett?"
          ],
          tags: ["lipiddoppelschicht", "polarität", "hydrophob"],
          difficulty: 2
        }
      ]
    },
    {
      id: 'bio-kap1-uk02',
      title: 'Zellorganellen',
      content: `# Zellorganellen

Eukaryotische Zellen sind durch membranumschlossene Organellen kompartimentiert – jedes Organell hat spezialisierte Funktionen. Diese Arbeitsteilung ermöglicht hocheffiziente und gleichzeitig ablaufende Prozesse. Das Verständnis der Organellen ist essentiell für Pathophysiologie und Pharmakologie.

## Zellkern (Nucleus)

Der Zellkern ist das größte Organell und die "Kommandozentrale" der Zelle. Er enthält die genetische Information (DNA) in Form von Chromosomen. Die Kernhülle besteht aus zwei Membranen (äußere und innere Kernmembran), die an Kernporen durchbrochen sind. Diese Poren regulieren den Austausch zwischen Kern und Zytoplasma.

> **MerksatzBox type="merke":** Zellkern = Speicherort der DNA und Ort der Transkription (DNA → mRNA). Die Translation (mRNA → Protein) findet dagegen im Zytoplasma statt.

Der Nucleolus (Kernkörperchen) liegt innerhalb des Kerns und ist der Ort der ribosomalen RNA-Synthese (rRNA) und Ribosomen-Assemblierung.

## Endoplasmatisches Retikulum (ER)

Das ER ist ein verzweigtes Netzwerk von Membranen, das zwei Formen annimmt:

### Raues ER (RER)

Das raue ER ist mit Ribosomen besetzt (daher "rau" im Elektronenmikroskop). Hier werden Proteine synthetisiert, die für den Export, die Plasmamembran oder Lysosomen bestimmt sind. Die Proteine werden co-translational in das ER-Lumen geschleust und dort gefaltet.

### Glattes ER (SER)

Das glatte ER hat keine Ribosomen. Seine Funktionen umfassen:
- Lipidsynthese (Phospholipide, Cholesterol)
- Calcium-Speicherung (wichtig in Muskelzellen für Kontraktion)
- Entgiftung lipophiler Substanzen (besonders in Leberzellen)
- Steroidsynthese (in endokrinen Zellen)

> **MerksatzBox type="klinisch":** Chronischer Alkoholkonsum führt zu einer Vermehrung des glatten ER in Leberzellen (enzymatische Adaptation), was die Alkoholtoleranz erhöht – aber auch andere Medikamente schneller abgebaut werden (z.B. Antibiotika).

## Golgi-Apparat

Der Golgi-Apparat besteht aus gestapelten Membranscheiben (Zisternen) und ist das "Post-Verteilzentrum" der Zelle. Proteine aus dem ER werden hier modifiziert (Glykosylierung, Phosphorylierung), sortiert und in Vesikeln zu ihren Zielorten transportiert.

**Funktionen:**
- Protein-Modifikation (posttranslationale Modifikationen)
- Sortierung von Proteinen (durch Signalsequenzen)
- Bildung von Lysosomen
- Sekretion von Proteinen

> **MerksatzBox type="merke":** Sekretionsweg: RER → Golgi → Sekretionsvesikel → Exozytose. Dieser Weg gilt für alle sekretierten Proteine (Hormone, Antikörper, Verdauungsenzyme).

## Mitochondrien

Mitochondrien sind die "Kraftwerke der Zelle" – hier läuft die oxidative Phosphorylierung (Atmungskette + ATP-Synthase), die den Großteil des zellulären ATP produziert. Mitochondrien haben eine Doppelmembran:
- **Äußere Membran:** Durchlässig für kleine Moleküle
- **Innere Membran:** Stark gefaltet (Cristae), undurchlässig, enthält die Atmungskette

> **MerksatzBox type="altfragen":** Mitochondrien haben eigene DNA (mtDNA) – zirkulär wie bei Bakterien. Dies stützt die Endosymbionten-Theorie (Mitochondrien stammen von symbiontischen Bakterien ab). Im MedAT wird oft die maternale Vererbung der mtDNA abgefragt.

> **MerksatzBox type="klinisch":** Mitochondriale Myopathien entstehen durch Mutationen in der mitochondrialen DNA. Da Mitochondrien maternal vererbt werden (Eizelle bringt alle Mitochondrien ein, Spermium nicht), zeigen diese Erkrankungen ein matrilineares Vererbungsmuster.

## Lysosomen

Lysosomen sind membranumschlossene Vesikel mit saurem pH (ca. 4,5-5) und enthalten hydrolytische Enzyme (Proteasen, Lipasen, Nukleasen). Sie sind die "Recycling-Zentren" der Zelle und verdauen:
- Aufgenommene Partikel (Phagozytose)
- Abgestorbene Organellen (Autophagie)
- Defekte Proteine

> **MerksatzBox type="klinisch":** Lysosomale Speicherkrankheiten (z.B. Morbus Gaucher, Tay-Sachs) entstehen durch defekte lysosomale Enzyme. Unverdaute Substrate akkumulieren in Lysosomen → Zellschädigung und Organversagen.

## Peroxisomen

Peroxisomen sind kleine Organellen, die vor allem am Fettsäureabbau (β-Oxidation sehr langer Fettsäuren) und der Entgiftung von Wasserstoffperoxid (H₂O₂) beteiligt sind. Sie enthalten Katalase, die H₂O₂ in H₂O und O₂ spaltet.

> **MerksatzBox type="merke":** Katalase-Test: Peroxisomen + H₂O₂ → Sauerstoffblasen (nutzt man zur Identifikation bestimmter Bakterien).`,
      lernziele: [
        'Funktion und Struktur des Zellkerns erklären',
        'Raues und glattes ER unterscheiden',
        'Golgi-Apparat als Sortier- und Modifikationszentrum beschreiben',
        'Mitochondrien-Aufbau und ATP-Synthese erklären',
        'Lysosomen und Peroxisomen funktionell abgrenzen'
      ],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "Welche Organelle ist primär für die ATP-Synthese zuständig?",
          options: [
            "Endoplasmatisches Retikulum",
            "Golgi-Apparat",
            "Mitochondrium",
            "Lysosom",
            "Peroxisom"
          ],
          correctIndex: 2,
          explanation: "Mitochondrien sind die 'Kraftwerke der Zelle' – hier läuft die oxidative Phosphorylierung (Atmungskette + ATP-Synthase), die den Großteil des zellulären ATP produziert (ca. 30-32 ATP pro Glucose). ER (A) synthetisiert Proteine/Lipide, Golgi (B) modifiziert/sortiert Proteine, Lysosomen (D) verdauen Makromoleküle, Peroxisomen (E) bauen sehr lange Fettsäuren ab und entgiften H₂O₂.",
          hints: [
            "Überlege: ATP = Energie. Welche Organelle wird als 'Kraftwerk der Zelle' bezeichnet?",
            "Die Atmungskette läuft in der inneren Membran dieser Organelle."
          ],
          tags: ["mitochondrien", "atp", "zellorganellen"],
          difficulty: 1
        },
        {
          question: "Was unterscheidet raues ER von glattem ER?",
          options: [
            "Raues ER hat Ribosomen, glattes ER nicht",
            "Raues ER ist größer als glattes ER",
            "Glattes ER synthetisiert Proteine, raues ER nicht",
            "Raues ER kommt nur in Nervenzellen vor",
            "Glattes ER hat eine Doppelmembran"
          ],
          correctIndex: 0,
          explanation: "Das raue ER (RER) ist mit Ribosomen besetzt, die Proteine synthetisieren – daher erscheint es 'rau' im Elektronenmikroskop. Das glatte ER (SER) hat keine Ribosomen und ist für Lipidsynthese, Calcium-Speicherung und Entgiftung zuständig. Beide sind Teil desselben kontinuierlichen Membransystems. Option C ist umgekehrt falsch (RER synthetisiert Proteine). Beide ER-Typen kommen in vielen Zelltypen vor (Option D falsch).",
          hints: [
            "Der Name 'rau' bezieht sich auf das Aussehen im Mikroskop.",
            "Was macht die Oberfläche 'rau'?"
          ],
          tags: ["endoplasmatisches-retikulum", "ribosomen", "zellorganellen"],
          difficulty: 1
        },
        {
          question: "Welche Funktion hat der Golgi-Apparat?",
          options: [
            "ATP-Synthese",
            "DNA-Replikation",
            "Protein-Modifikation und -Sortierung",
            "Photosynthese",
            "Zellteilung"
          ],
          correctIndex: 2,
          explanation: "Der Golgi-Apparat ist das 'Post-Verteilzentrum' der Zelle. Er modifiziert Proteine aus dem ER (z.B. durch Glykosylierung), sortiert sie anhand von Signalsequenzen und verpackt sie in Vesikel für den Transport zu ihren Zielorten (Lysosomen, Plasmamembran, Sekretion). ATP-Synthese (A) findet in Mitochondrien statt, DNA-Replikation (B) im Zellkern, Photosynthese (D) in Chloroplasten (nur Pflanzen), Zellteilung (E) ist kein Organellen-Prozess.",
          hints: [
            "Überlege: Welche Organelle kommt nach dem ER im Sekretionsweg?",
            "Der Name 'Post-Verteilzentrum' gibt einen Hinweis auf die Funktion."
          ],
          tags: ["golgi-apparat", "proteinsortierung", "zellorganellen"],
          difficulty: 2
        },
        {
          question: "Warum haben Mitochondrien eigene DNA?",
          options: [
            "Weil sie größer sind als andere Organellen",
            "Weil sie wahrscheinlich von symbiontischen Bakterien abstammen (Endosymbionten-Theorie)",
            "Weil sie sich schneller teilen müssen",
            "Weil sie mehr Proteine benötigen",
            "Weil sie im Zellkern keinen Platz haben"
          ],
          correctIndex: 1,
          explanation: "Die Endosymbionten-Theorie (Lynn Margulis) besagt, dass Mitochondrien von α-Proteobakterien abstammen, die in eine Wirtszelle aufgenommen wurden. Belege: Mitochondrien haben eigene zirkuläre DNA (wie Bakterien), eigene Ribosomen (70S wie bei Bakterien, nicht 80S wie eukaryotische Ribosomen), Doppelmembran und werden durch Teilung vermehrt. Die mtDNA ist maternal vererbt (nur die Eizelle bringt Mitochondrien in die Zygote ein).",
          hints: [
            "Die Antwort hängt mit der Evolution zusammen.",
            "Überlege: Woher könnten Mitochondrien ursprünglich stammen?"
          ],
          tags: ["mitochondrien", "endosymbionten-theorie", "evolution"],
          difficulty: 3
        },
        {
          question: "Was passiert in Lysosomen?",
          options: [
            "ATP-Synthese",
            "Proteinsynthese",
            "Verdauung von Makromolekülen durch hydrolytische Enzyme",
            "DNA-Replikation",
            "Lipidsynthese"
          ],
          correctIndex: 2,
          explanation: "Lysosomen sind die 'Recycling-Zentren' der Zelle. Sie enthalten hydrolytische Enzyme (Proteasen, Lipasen, Nukleasen), die bei saurem pH (4,5-5) arbeiten. Lysosomen verdauen aufgenommene Partikel (Phagozytose), abgestorbene Organellen (Autophagie) und defekte Proteine. Die anderen Prozesse finden in anderen Organellen statt: ATP-Synthese in Mitochondrien (A), Proteinsynthese an Ribosomen (B), DNA-Replikation im Kern (D), Lipidsynthese im glatten ER (E).",
          hints: [
            "Der Name 'Lysosom' kommt von 'lysis' = Auflösung.",
            "Welche Organelle hat einen sauren pH und Verdauungsenzyme?"
          ],
          tags: ["lysosomen", "autophagie", "zellorganellen"],
          difficulty: 1
        },
        {
          question: "Welche Aussage zur mitochondrialen DNA (mtDNA) ist korrekt?",
          options: [
            "mtDNA ist linear wie im Zellkern",
            "mtDNA wird biparental vererbt (von beiden Eltern)",
            "mtDNA ist zirkulär und wird maternal vererbt",
            "mtDNA kodiert alle mitochondrialen Proteine",
            "mtDNA ist identisch mit nukleärer DNA"
          ],
          correctIndex: 2,
          explanation: "Mitochondriale DNA ist zirkulär (wie bakterielle DNA) und wird ausschließlich maternal vererbt – nur die Eizelle bringt Mitochondrien in die Zygote ein, Spermien-Mitochondrien werden nicht übertragen. mtDNA kodiert nur 13 Proteine der Atmungskette; die meisten mitochondrialen Proteine (>1000) werden im Zellkern kodiert und importiert. Dies ist wichtig für mitochondriale Erkrankungen, die ein matrilineares Vererbungsmuster zeigen.",
          hints: [
            "Überlege: Welche Keimzelle bringt das meiste Zytoplasma (und damit Organellen) ein?",
            "Die Form der DNA ähnelt der von Bakterien."
          ],
          tags: ["mitochondrien", "mtdna", "vererbung"],
          difficulty: 2
        }
      ]
    },
    {
      id: 'bio-kap1-uk03',
      title: 'Zytoskelett und Zellbewegung',
      content: `# Zytoskelett und Zellbewegung

Das Zytoskelett ist das "Skelett" der Zelle – ein dynamisches Netzwerk aus Proteinfilamenten, das Form, Stabilität und Beweglichkeit ermöglicht. Anders als ein starres Knochengerüst kann das Zytoskelett sich schnell auf- und abbauen und so zelluläre Prozesse wie Zellteilung, Transport und Fortbewegung steuern.

## Die drei Filamenttypen

Das Zytoskelett besteht aus drei Haupttypen von Proteinfilamenten, die sich in Größe, Zusammensetzung und Funktion unterscheiden.

### Mikrotubuli

Mikrotubuli sind die dicksten Filamente (ca. 25 nm Durchmesser) und bestehen aus Tubulin-Dimeren (α-Tubulin und β-Tubulin). Sie sind hohl und bilden röhrenförmige Strukturen. Mikrotubuli haben eine ausgeprägte Polarität: ein Plus-Ende (schnelles Wachstum) und ein Minus-Ende (langsames Wachstum).

**Funktionen:**
- Zellteilung: Spindelapparat zieht Chromosomen auseinander (Mitose)
- Intrazellulärer Transport: Schienen für Motorproteine
- Zellform-Erhaltung: Strukturelle Stütze
- Zilien und Flagellen: Bewegungsorganellen

> **MerksatzBox type="merke":** Mikrotubuli wachsen vom Zentrosom (Mikrotubuli-Organisationszentrum, MTOC) aus. Das Zentrosom enthält zwei Zentriolen und liegt nahe dem Zellkern.

> **MerksatzBox type="klinisch":** Colchicin und Taxol sind Mikrotubuli-Gifte: Colchicin verhindert Polymerisation (nutzt man bei Gicht-Anfällen), Taxol stabilisiert Mikrotubuli übermäßig (Chemotherapeutikum, hemmt Zellteilung von Tumorzellen).

### Mikrofilamente (Aktinfilamente)

Mikrofilamente sind die dünnsten Filamente (ca. 7 nm) und bestehen aus polymerisiertem Aktin (G-Aktin → F-Aktin). Sie sind ebenfalls polar und können schnell auf- und abgebaut werden.

**Funktionen:**
- Muskelkontraktion: Aktin + Myosin (Gleitfilament-Mechanismus)
- Zellbewegung: Pseudopodien bei Amöben, Lamellipodien bei wandernden Zellen
- Zytokinese: Aktin-Ring schnürt Zelle nach Mitose durch
- Mikrovillibildung: Oberflächenvergrößerung (Darmepithel)

> **MerksatzBox type="altfragen":** Aktin-Myosin-Interaktion ist zentral für Muskelkontraktion. Im MedAT wird oft der Querbrücken-Zyklus oder die Rolle von Ca²⁺ und ATP abgefragt.

### Intermediärfilamente

Intermediärfilamente haben einen mittleren Durchmesser (ca. 10 nm) und sind nicht polar. Sie sind sehr stabil und bestehen aus verschiedenen Proteinen je nach Zelltyp:
- **Keratine:** Epithelzellen, Haare, Nägel
- **Vimentin:** Bindegewebszellen, Leukozyten
- **Neurofilamente:** Nervenzellen
- **Desmin:** Muskelzellen
- **Lamine:** Kernlamina (stützt Kernhülle)

**Funktionen:**
- Mechanische Stabilität (besonders unter Zugspannung)
- Verankerung des Zellkerns
- Zelluläre Integrität bei Stress

> **MerksatzBox type="klinisch":** Epidermolysis bullosa: Mutationen in Keratin-Genen führen zu extrem empfindlicher Haut – bereits leichte Reibung verursacht Blasenbildung. Zeigt die Bedeutung von Intermediärfilamenten für Gewebestabilität.

## Motorproteine

Motorproteine sind ATPasen, die entlang Zytoskelett-Filamenten "wandern" und dabei Fracht (Vesikel, Organellen, Moleküle) transportieren oder Filamente gegeneinander verschieben.

### Kinesin und Dynein (Mikrotubuli-Motoren)

- **Kinesin:** Transportiert zum Plus-Ende (meist vom Zentrosom weg zur Zellperipherie)
- **Dynein:** Transportiert zum Minus-Ende (meist zum Zentrosom hin)

> **MerksatzBox type="merke":** Kinesin = anterograd (nach vorne/außen), Dynein = retrograd (rückwärts/innen). Merkhilfe: "Dy-back" (Dynein bringt zurück).

### Myosin (Aktin-Motor)

Myosine wandern entlang Aktinfilamenten. Myosin II ist das klassische Muskelprotein (Querbrücken-Zyklus), andere Myosine transportieren Vesikel oder erzeugen Membranspannung.

> **MerksatzBox type="klinisch":** Axonaler Transport in Nervenzellen: Kinesin transportiert Vesikel vom Zellkörper zum Axonende (anterograd), Dynein bringt Signalmoleküle zurück (retrograd). Störungen führen zu neurodegenerativen Erkrankungen (z.B. Amyotrophe Lateralsklerose).

## Zilien und Flagellen

Zilien und Flagellen sind bewegliche Zellfortsätze, die aus Mikrotubuli aufgebaut sind. Sie folgen dem "9+2"-Muster: 9 äußere Mikrotubuli-Dupletts umgeben 2 zentrale Mikrotubuli.

**Zilien (kurz, zahlreich):**
- Primärzilien: Sensorische Funktion (z.B. Niere)
- Bewegliche Zilien: Schlagen koordiniert (Atemwegsepithel transportiert Schleim)

**Flagellen (lang, meist einzeln):**
- Spermien: Fortbewegung durch peitschenartigen Schlag

> **MerksatzBox type="klinisch":** Kartagener-Syndrom (Primäre Ciliäre Dyskinesie): Defekte Dynein-Arme → Zilien unbeweglich. Folgen: chronische Sinusitis, Bronchiektasen, Infertilität (Spermien bewegungslos). Oft verbunden mit Situs inversus (50% der Fälle).`,
      lernziele: [
        'Die drei Zytoskelett-Filamenttypen unterscheiden (Größe, Aufbau, Funktion)',
        'Mikrotubuli-Polarität und Zentrosom erklären',
        'Motorproteine (Kinesin, Dynein, Myosin) und ihre Transportrichtung benennen',
        'Zilien und Flagellen strukturell beschreiben (9+2-Muster)',
        'Klinische Relevanz von Zytoskelett-Defekten verstehen'
      ],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "Welche Zytoskelett-Filamente sind am Aufbau des Spindelapparats während der Mitose beteiligt?",
          options: [
            "Mikrofilamente (Aktin)",
            "Mikrotubuli",
            "Intermediärfilamente",
            "Nur Myosinfilamente",
            "Kollagenfasern"
          ],
          correctIndex: 1,
          explanation: "Mikrotubuli bilden den Spindelapparat (Mitosespindel), der während der Mitose die Chromosomen zu den Zellpolen zieht. Die Mikrotubuli wachsen vom Zentrosom aus und heften sich an die Kinetochore der Chromosomen. Mikrofilamente (A) sind für Zytokinese (Zellteilung nach Mitose) wichtig, aber nicht für die Chromosomentrennung. Intermediärfilamente (C) bieten mechanische Stabilität. Kollagen (E) ist ein extrazelluläres Protein.",
          hints: [
            "Überlege: Welche Filamente sind lang und starr genug, um Chromosomen zu ziehen?",
            "Der Spindelapparat besteht aus Strukturen, die vom Zentrosom ausgehen."
          ],
          tags: ["zytoskelett", "mikrotubuli", "mitose"],
          difficulty: 2
        },
        {
          question: "Was ist die Funktion von Kinesin?",
          options: [
            "Transport zum Minus-Ende von Mikrotubuli",
            "Transport zum Plus-Ende von Mikrotubuli",
            "Kontraktion von Muskelzellen",
            "Stabilisierung der Kernhülle",
            "Bildung von Zilien"
          ],
          correctIndex: 1,
          explanation: "Kinesin ist ein Motorprotein, das unter ATP-Verbrauch zum Plus-Ende von Mikrotubuli wandert – typischerweise vom Zentrosom weg zur Zellperipherie (anterograder Transport). Dynein (Option A) transportiert zum Minus-Ende (retrograd). Myosin (Option C) ist für Muskelkontraktion verantwortlich und wandert auf Aktin, nicht Mikrotubuli. Lamine (Option D) stabilisieren die Kernhülle. Zilien (Option E) werden aus Mikrotubuli aufgebaut, aber nicht von Kinesin.",
          hints: [
            "Kinesin transportiert 'nach außen', Dynein 'nach innen'.",
            "Plus-Ende bedeutet meist Richtung Zellperipherie."
          ],
          tags: ["motorproteine", "kinesin", "zytoskelett"],
          difficulty: 2
        },
        {
          question: "Aus welchem Protein bestehen Mikrofilamente?",
          options: [
            "Tubulin",
            "Keratin",
            "Aktin",
            "Myosin",
            "Kollagen"
          ],
          correctIndex: 2,
          explanation: "Mikrofilamente (auch Aktinfilamente genannt) bestehen aus polymerisiertem Aktin. Globuläres Aktin (G-Aktin) polymerisiert zu filamentösem Aktin (F-Aktin). Tubulin (A) bildet Mikrotubuli, Keratin (B) ist ein Intermediärfilament, Myosin (D) ist ein Motorprotein (wandert auf Aktin), Kollagen (E) ist ein extrazelluläres Strukturprotein.",
          hints: [
            "Der alternative Name 'Aktinfilament' gibt einen deutlichen Hinweis.",
            "Welches Protein interagiert mit Myosin bei der Muskelkontraktion?"
          ],
          tags: ["zytoskelett", "mikrofilamente", "aktin"],
          difficulty: 1
        },
        {
          question: "Was beschreibt das '9+2'-Muster?",
          options: [
            "Die Struktur der Zellmembran",
            "Die Anordnung von Mikrotubuli in Zilien und Flagellen",
            "Die Anzahl der Chromosomen",
            "Die Verteilung von Ribosomen",
            "Die Phasen der Mitose"
          ],
          correctIndex: 1,
          explanation: "Das '9+2'-Muster beschreibt die charakteristische Anordnung von Mikrotubuli in beweglichen Zilien und Flagellen: 9 äußere Mikrotubuli-Dupletts (Paare) umgeben 2 zentrale Mikrotubuli. Diese Struktur ermöglicht die koordinierte Bewegung durch Dynein-Arme, die zwischen den äußeren Dupletts Gleitbewegungen erzeugen. Primärzilien haben dagegen ein '9+0'-Muster (keine zentralen Mikrotubuli) und sind unbeweglich.",
          hints: [
            "Dieses Muster bezieht sich auf bewegliche Zellfortsätze.",
            "Die Zahlen beschreiben die Anordnung von Mikrotubuli im Querschnitt."
          ],
          tags: ["zilien", "flagellen", "mikrotubuli"],
          difficulty: 2
        },
        {
          question: "Welche Erkrankung entsteht durch defekte Motorproteine in Zilien?",
          options: [
            "Diabetes mellitus",
            "Kartagener-Syndrom (Primäre Ciliäre Dyskinesie)",
            "Hämophilie",
            "Mukoviszidose",
            "Phenylketonurie"
          ],
          correctIndex: 1,
          explanation: "Das Kartagener-Syndrom (Primäre Ciliäre Dyskinesie, PCD) entsteht durch defekte Dynein-Arme in Zilien. Die Zilien können sich nicht bewegen → Schleim in Atemwegen wird nicht abtransportiert (chronische Sinusitis, Bronchiektasen), Spermien sind unbeweglich (Infertilität). Bei 50% der Patienten liegt zusätzlich ein Situs inversus vor (spiegelverkehrte Organanordnung), da Zilien während der Embryonalentwicklung die Links-Rechts-Asymmetrie festlegen.",
          hints: [
            "Die Erkrankung betrifft die Beweglichkeit von Zilien.",
            "Symptome umfassen Atemwegsprobleme und Unfruchtbarkeit."
          ],
          tags: ["kartagener-syndrom", "zilien", "motorproteine"],
          difficulty: 3
        },
        {
          question: "Welche Aussage zu Intermediärfilamenten ist korrekt?",
          options: [
            "Sie sind polar wie Mikrotubuli",
            "Sie bestehen aus Tubulin",
            "Sie sind sehr stabil und bieten mechanische Festigkeit",
            "Sie sind an der Muskelkontraktion beteiligt",
            "Sie bauen sich sehr schnell auf und ab"
          ],
          correctIndex: 2,
          explanation: "Intermediärfilamente sind nicht polar (im Gegensatz zu Mikrotubuli und Mikrofilamenten) und sehr stabil – sie bauen sich langsam auf und ab (Option E falsch). Sie bieten mechanische Festigkeit, besonders unter Zugspannung. Je nach Zelltyp bestehen sie aus verschiedenen Proteinen: Keratine (Epithelzellen), Vimentin (Bindegewebe), Neurofilamente (Nervenzellen), Desmin (Muskel), Lamine (Kernhülle). Sie sind nicht direkt an Muskelkontraktion beteiligt (Option D falsch).",
          hints: [
            "Der Name 'Intermediär' bezieht sich auf die mittlere Größe (zwischen Mikro- und Makrofilamenten).",
            "Diese Filamente sind die 'Stahlträger' des Zytoskeletts."
          ],
          tags: ["zytoskelett", "intermediärfilamente", "mechanische-stabilität"],
          difficulty: 2
        }
      ]
    },
    {
      id: 'bio-kap1-uk04',
      title: 'Zellzyklus und Zellteilung',
      content: `# Zellzyklus und Zellteilung

Der Zellzyklus ist der geordnete Ablauf von Wachstum, DNA-Replikation und Teilung einer Zelle. Die präzise Regulation des Zellzyklus ist essentiell – Fehler können zu unkontrollierter Zellteilung (Krebs) oder Zelltod führen. Das Verständnis des Zellzyklus ist Grundlage für Krebstherapien und Entwicklungsbiologie.

## Phasen des Zellzyklus

Der Zellzyklus besteht aus Interphase (G1, S, G2) und M-Phase (Mitose + Zytokinese).

### Interphase

**G1-Phase (Gap 1 - Wachstumsphase):**
- Zellwachstum und Proteinsynthese
- Organellen werden vermehrt
- Entscheidung: Weiterteilung oder Eintritt in G0 (Ruhephase)
- Restriktionspunkt (R-Punkt): Übergang zu S-Phase wird geprüft

> **MerksatzBox type="merke":** G0-Phase: Viele Zellen (z.B. Nervenzellen, Herzmuskelzellen) treten nach Differenzierung permanent in G0 ein und teilen sich nicht mehr. Andere (z.B. Leberzellen) können bei Bedarf reaktiviert werden.

**S-Phase (Synthesis - Replikationsphase):**
- DNA-Replikation: Chromosomen werden verdoppelt (aus 1-Chromatid-Chromosomen werden 2-Chromatid-Chromosomen)
- Nach S-Phase: diploider Chromosomensatz (2n), aber doppelter DNA-Gehalt (4c)
- Histone werden ebenfalls synthetisiert

**G2-Phase (Gap 2 - zweite Wachstumsphase):**
- Weitere Proteinsynthese (besonders Mikrotubuli-Proteine)
- Vorbereitung auf Mitose
- G2/M-Checkpoint: Prüfung, ob DNA korrekt repliziert wurde

> **MerksatzBox type="altfragen":** DNA-Gehalt der Zelle: G1 = 2c, nach S-Phase = 4c, nach Mitose = 2c (wieder wie in G1). Der Chromosomensatz (2n) ändert sich nicht zwischen G1, S, G2 – nur bei Meiose wird er halbiert.

### M-Phase (Mitose + Zytokinese)

Die Mitose ist die Kernteilung, gefolgt von der Zytokinese (Zellteilung). Sie verläuft in 5 Phasen:

**1. Prophase:**
- Chromosomen kondensieren (werden sichtbar)
- Zentrosomen wandern zu den Polen
- Kernhülle beginnt sich aufzulösen
- Spindelapparat beginnt zu formen

**2. Prometaphase:**
- Kernhülle vollständig aufgelöst
- Kinetochore (Proteinstrukturen) bilden sich an Zentromeren
- Mikrotubuli heften sich an Kinetochore

**3. Metaphase:**
- Chromosomen ordnen sich in der Äquatorialebene an (Metaphaseplatte)
- Spindel-Checkpoint: Prüfung, ob alle Chromosomen korrekt angeheftet sind

> **MerksatzBox type="merke":** Metaphase = "M" wie Mitte. Alle Chromosomen stehen in der Mitte der Zelle aufgereiht.

**4. Anaphase:**
- Schwesterchromatiden trennen sich (Kohäsin wird gespalten)
- Chromatiden werden zu den Polen gezogen
- Kürzester Abschnitt der Mitose

**5. Telophase:**
- Chromosomen dekondensieren
- Kernhülle bildet sich um beide Chromosomensätze neu
- Spindelapparat wird abgebaut

**Zytokinese:**
- Teilung des Zytoplasmas durch Aktin-Myosin-Ring (Furche)
- Ergebnis: 2 genetisch identische Tochterzellen (2n, 2c)

> **MerksatzBox type="klinisch":** Zytostatika (Chemotherapeutika) greifen oft in die Mitose ein: Vincristin und Vinblastin hemmen Mikrotubuli-Polymerisation → Spindelapparat kann nicht gebildet werden → Mitose-Blockade → Tumorzellen sterben. Nachteil: Auch gesunde, sich teilende Zellen (Haarfollikel, Darmepithel) sind betroffen.

## Regulation des Zellzyklus

Der Zellzyklus wird durch Cyclin-abhängige Kinasen (CDKs) und Cycline gesteuert.

**Checkpoints (Kontrollpunkte):**
1. **G1/S-Checkpoint (Restriktionspunkt):** DNA-Schäden? Wachstumssignale vorhanden?
2. **G2/M-Checkpoint:** DNA vollständig und korrekt repliziert?
3. **Metaphase-Checkpoint (Spindel-Checkpoint):** Alle Chromosomen korrekt angeheftet?

Bei Problemen an einem Checkpoint wird der Zellzyklus angehalten. Tumorsuppressor p53 ist der "Wächter des Genoms" – bei DNA-Schäden stoppt p53 den Zyklus oder löst Apoptose aus.

> **MerksatzBox type="klinisch":** p53 ist in >50% aller Tumoren mutiert oder inaktiviert. Ohne funktionsfähiges p53 können geschädigte Zellen unkontrolliert weiter teilen → Tumorentstehung. p53-Mutationen sind ein Schlüsselereignis in der Karzinogenese.

## Meiose (Überblick)

Die Meiose ist eine spezielle Form der Zellteilung zur Bildung von Keimzellen (Gameten). Sie besteht aus zwei aufeinanderfolgenden Teilungen (Meiose I und II) ohne DNA-Replikation dazwischen.

**Ergebnis:** Aus einer diploiden Zelle (2n, 4c) entstehen 4 haploide Zellen (1n, 1c).

**Hauptunterschiede zur Mitose:**
- Zwei Teilungsschritte (Meiose I und II)
- Homologe Chromosomen paaren sich (Synapsis) → Crossing-over (genetische Rekombination)
- Halbierung des Chromosomensatzes (2n → 1n)
- Genetische Variabilität durch Rekombination und zufällige Verteilung

> **MerksatzBox type="merke":** Mitose: 1 Teilung, 2 genetisch identische Zellen (2n). Meiose: 2 Teilungen, 4 genetisch verschiedene Zellen (1n).

> **MerksatzBox type="klinisch":** Non-Disjunction (Nicht-Trennung von Chromosomen) in der Meiose führt zu Aneuploidie: Trisomie 21 (Down-Syndrom), Trisomie 18 (Edwards-Syndrom), Trisomie 13 (Pätau-Syndrom). Das Risiko steigt mit mütterlichem Alter.`,
      lernziele: [
        'Phasen der Interphase (G1, S, G2) beschreiben',
        'Ablauf der Mitose (Prophase bis Telophase) erklären',
        'DNA-Gehalt und Chromosomensatz im Zellzyklus nachvollziehen',
        'Checkpoints und ihre Funktion verstehen',
        'Mitose von Meiose unterscheiden'
      ],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "In welcher Phase des Zellzyklus findet die DNA-Replikation statt?",
          options: [
            "G1-Phase",
            "S-Phase",
            "G2-Phase",
            "M-Phase (Mitose)",
            "G0-Phase"
          ],
          correctIndex: 1,
          explanation: "Die DNA-Replikation findet in der S-Phase (Synthesis) statt. Hier wird die DNA verdoppelt, sodass aus 1-Chromatid-Chromosomen 2-Chromatid-Chromosomen werden. Der DNA-Gehalt steigt von 2c auf 4c, aber der Chromosomensatz bleibt diploid (2n). G1 (A) ist Wachstumsphase vor der Replikation, G2 (C) ist Vorbereitung nach Replikation, M-Phase (D) ist Zellteilung, G0 (E) ist Ruhephase ohne Teilungsaktivität.",
          hints: [
            "S-Phase steht für 'Synthesis' – was wird synthetisiert?",
            "Überlege: Wann muss die DNA verdoppelt werden, damit beide Tochterzellen einen vollständigen Satz erhalten?"
          ],
          tags: ["zellzyklus", "s-phase", "dna-replikation"],
          difficulty: 1
        },
        {
          question: "Welche Aussage zur Metaphase der Mitose ist korrekt?",
          options: [
            "Chromosomen kondensieren erstmalig",
            "Schwesterchromatiden trennen sich",
            "Chromosomen ordnen sich in der Äquatorialebene an",
            "Die Kernhülle bildet sich neu",
            "Die Zytokinese beginnt"
          ],
          correctIndex: 2,
          explanation: "In der Metaphase ordnen sich die Chromosomen in der Äquatorialebene (Metaphaseplatte) an. Alle Kinetochore sind an Spindelmikrotubuli angeheftet. Der Spindel-Checkpoint prüft, ob alle Chromosomen korrekt angeheftet sind, bevor die Anaphase beginnt. Kondensation (A) findet in der Prophase statt, Chromatidentrennung (B) in der Anaphase, Kernhülle-Neubildung (D) in der Telophase, Zytokinese (E) nach der Telophase.",
          hints: [
            "Metaphase = 'M' wie Mitte.",
            "In dieser Phase sind die Chromosomen am besten sichtbar (z.B. für Karyogramme)."
          ],
          tags: ["mitose", "metaphase", "zellzyklus"],
          difficulty: 2
        },
        {
          question: "Was ist die Funktion von Checkpoints im Zellzyklus?",
          options: [
            "Beschleunigung der Zellteilung",
            "Überprüfung kritischer Prozesse und Stopp bei Fehlern",
            "Energieproduktion für die Mitose",
            "Transport von Chromosomen",
            "Abbau alter Proteine"
          ],
          correctIndex: 1,
          explanation: "Checkpoints sind Kontrollpunkte, die kritische Prozesse überprüfen: G1/S-Checkpoint prüft DNA-Schäden und Wachstumssignale, G2/M-Checkpoint prüft korrekte DNA-Replikation, Metaphase-Checkpoint prüft korrekte Chromosomen-Anheftung. Bei Problemen wird der Zellzyklus angehalten. Das Tumorsuppressor-Protein p53 ist ein zentraler Checkpoint-Wächter – bei irreparablen Schäden löst es Apoptose aus.",
          hints: [
            "Checkpoints sind Qualitätskontrollen.",
            "Was passiert bei einer Kontrolle, wenn etwas nicht stimmt?"
          ],
          tags: ["zellzyklus", "checkpoints", "regulation"],
          difficulty: 2
        },
        {
          question: "Wie viele Tochterzellen entstehen bei der Meiose und welchen Chromosomensatz haben sie?",
          options: [
            "2 Zellen mit diploidem Satz (2n)",
            "2 Zellen mit haploidem Satz (1n)",
            "4 Zellen mit diploidem Satz (2n)",
            "4 Zellen mit haploidem Satz (1n)",
            "8 Zellen mit haploidem Satz (1n)"
          ],
          correctIndex: 3,
          explanation: "Die Meiose besteht aus zwei Teilungen (Meiose I und II) und erzeugt aus einer diploiden Ausgangszelle (2n) vier haploide Tochterzellen (1n). Diese werden zu Gameten (Spermien oder Eizellen). Die Halbierung des Chromosomensatzes ist essentiell, damit bei der Befruchtung (Fusion zweier Gameten) wieder eine diploide Zygote (2n) entsteht. Im Gegensatz dazu erzeugt Mitose 2 diploide (2n) Tochterzellen.",
          hints: [
            "Meiose ist für die Bildung von Geschlechtszellen (Gameten).",
            "Überlege: Was muss passieren, damit bei der Befruchtung nicht 4n entsteht?"
          ],
          tags: ["meiose", "chromosomensatz", "haploid"],
          difficulty: 2
        },
        {
          question: "Was ist die Rolle von p53 im Zellzyklus?",
          options: [
            "Beschleunigung der Zellteilung",
            "Tumorsuppressor – stoppt Zellzyklus bei DNA-Schäden oder löst Apoptose aus",
            "Aktivierung von Wachstumsfaktoren",
            "DNA-Replikation",
            "Bildung des Spindelapparats"
          ],
          correctIndex: 1,
          explanation: "p53 ist ein Tumorsuppressor-Protein und wird als 'Wächter des Genoms' bezeichnet. Bei DNA-Schäden aktiviert p53 Checkpoint-Mechanismen: Es stoppt den Zellzyklus (Arrest in G1 oder G2), aktiviert DNA-Reparatur-Gene oder löst bei irreparablen Schäden Apoptose (programmierten Zelltod) aus. Mutationen in p53 finden sich in >50% aller Tumoren – ohne funktionsfähiges p53 können geschädigte Zellen unkontrolliert weiterteilen.",
          hints: [
            "p53 ist ein 'Tumor-Suppressor' – was macht ein Suppressor?",
            "Überlege: Was sollte mit einer Zelle passieren, deren DNA stark beschädigt ist?"
          ],
          tags: ["p53", "tumorsuppressor", "zellzyklus"],
          difficulty: 3
        },
        {
          question: "Welche Phase folgt unmittelbar nach der Anaphase?",
          options: [
            "Prophase",
            "Metaphase",
            "Telophase",
            "Interphase",
            "Zytokinese"
          ],
          correctIndex: 2,
          explanation: "Nach der Anaphase (Trennung der Schwesterchromatiden und Transport zu den Polen) folgt die Telophase. In der Telophase dekondensieren die Chromosomen, die Kernhülle bildet sich um beide Chromosomensätze neu, und der Spindelapparat wird abgebaut. Danach folgt die Zytokinese (Teilung des Zytoplasmas). Die korrekte Reihenfolge der Mitose-Phasen ist: Prophase → Prometaphase → Metaphase → Anaphase → Telophase.",
          hints: [
            "Die Mitose-Phasen haben eine feste Reihenfolge.",
            "Nach der Trennung (Anaphase) folgt der Abschluss der Kernteilung."
          ],
          tags: ["mitose", "telophase", "zellzyklus"],
          difficulty: 1
        }
      ]
    }
  ]
};
