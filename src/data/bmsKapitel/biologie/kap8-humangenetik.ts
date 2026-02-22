import type { Kapitel } from "../types";

export const bioKap8: Kapitel = {
  id: "bio-kap8",
  title: "Humangenetik",
  subject: "biologie",
  icon: "👨‍⚕️",
  estimatedTime: "60 min",
  unterkapitel: [
    {
      id: "bio-8-01",
      title: "Stammbaumanalyse — Alle 4 Erbgänge mit Beispielen",
      content: `## Stammbaumanalyse — Grundlagen

Die **Stammbaumanalyse** (Pedigreee-Analyse) ermöglicht die Bestimmung des Erbgangs einer Erkrankung durch systematische Auswertung betroffener Familienmitglieder. Standardsymbole: Kreis = weiblich, Quadrat = männlich, ausgefüllte Symbole = betroffen, Horizontalstrich = Elternpaar, Vertikalstrich = Nachkommen.

## Autosomal dominanter Erbgang

Merkmale: (1) Erkrankung in jeder Generation (kein Generationssprung), (2) jedes Geschlecht gleich häufig betroffen, (3) betroffener Elternteil gibt Allel mit 50% Wahrscheinlichkeit weiter, (4) heterozygote Anlageträger sind krank.

Beispiele:
- **Marfan-Syndrom:** Mutation im FBN1-Gen (Fibrillin-1). Phänotyp: Hochwuchs, Arachnodaktylie, Augenlinsenektopie, Aortenerweiterung (Rupturrisiko)
- **Huntington-Krankheit:** CAG-Trinukleotidwiederholung im HTT-Gen. Vollständige Penetranz, Beginn meist nach dem 40. Lebensjahr, progrediente Neurodegeneration. Antizipation: Wiederholungen nehmen über Generationen zu (v. a. väterliche Weitergabe)

## Autosomal rezessiver Erbgang

Merkmale: (1) Generationssprung möglich (gesunde Trägereltern), (2) beide Geschlechter gleich häufig betroffen, (3) Konsanguinität erhöht Erkrankungsrisiko, (4) zwei pathogene Allele nötig (homozygot oder compound-heterozygot).

Beispiele:
- **Mukoviszidose (Cystische Fibrose):** Mutation im CFTR-Gen (häufigste: deltaF508). Chloridkanaldefekt → zähes Mukus in Lunge, Pankreas, Darm
- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Defekt → Phenylalanin-Akkumulation → Hirnschäden (Neugeborenenscreening!)

## X-chromosomal rezessiver Erbgang

Merkmale: (1) Söhne betroffener Väter sind nicht betroffen (Vater gibt Y an Söhne), (2) Töchter betroffener Väter sind obligate Konduktorinnen, (3) Söhne von Konduktorinnen zu 50% betroffen, (4) Männer sind häufiger klinisch betroffen (hemizygot).

Beispiele:
- **Hämophilie A:** Faktor-VIII-Mangel (F8-Gen auf Xq28), Blutungsneigung
- **Hämophilie B:** Faktor-IX-Mangel (F9-Gen)
- **Duchenne Muskeldystrophie:** Dystrophin-Gen (größtes menschliches Gen), progressive Muskelschwäche ab Kleinkindalter

## X-chromosomal dominanter Erbgang

Merkmale: (1) Töchter betroffener Väter sind alle betroffen, (2) Söhne betroffener Väter alle gesund, (3) betroffene Mütter geben Merkmal an 50% der Söhne und Töchter weiter.

Beispiele: Hypophosphatämie (Vitamin-D-resistente Rachitis), Rett-Syndrom (MECP2, lethal für hemizygote Männer)`,
      lernziele: [
        "Die vier Erbgänge (autosomal dominant/rezessiv, X-chromosomal dominant/rezessiv) anhand von Stammbaum-Merkmalen erkennen",
        "Konkrete Krankheitsbeispiele jedem Erbgang zuordnen und klinische Merkmale nennen",
        "Erkrankungswahrscheinlichkeiten für Nachkommen anhand eines Stammbaums berechnen",
      ],
      sections: [
        {
          heading: "Der Begriff 'Konduktorin' beim X-chromosomal rezessiven Erbgang",
          text: "Eine Konduktorin (Überträgerin) ist eine Frau, die heterozygot für ein X-chromosomal rezessives Allel ist (X^A X^a). Sie ist selbst nicht klinisch krank (das zweite, gesunde X-Chromosom kompensiert), aber sie kann das pathogene Allel weitergeben. Söhne einer Konduktorin haben ein 50%iges Risiko, das Allel zu erben und zu erkranken (da sie hemizygot sind: X^a Y). Töchter haben ein 50%iges Risiko, selbst Konduktorin zu werden. Eine obligate Konduktorin ist eine Frau, bei der die Trägerschaft aufgrund des Stammbaums sicher feststeht (z. B. Mutter eines betroffenen Sohnes, Tochter eines betroffenen Vaters). Bei der Hämophilie war Victoria I. von England eine berühmte obligate Konduktorin.",
          merksatz:
            "Konduktorin: heterozygot X^A X^a, phänotypisch gesund, gibt pathogenes Allel an 50% der Söhne (krank) und 50% der Töchter (Konduktorin) weiter.",
        },
        {
          heading: "Huntington — Besonderheiten des autosomal dominanten Erbgangs",
          text: "Die Huntington-Krankheit zeigt mehrere Besonderheiten: Erstens vollständige Penetranz — jeder Träger des mutierten HTT-Allels (> 40 CAG-Wiederholungen) erkrankt. Zweitens spätes Manifestationsalter (meist 30–50 Jahre) — Betroffene haben oft bereits Kinder bekommen, bevor sie wissen, ob sie das Allel tragen. Drittens Antizipation — bei väterlicher Weitergabe nehmen die CAG-Wiederholungen oft zu, was zu früherem und schwererem Erkrankungsbeginn in Folge-Generationen führt. Die Prädiktivdiagnostik (genetischer Test vor Symptomausbruch) ist ethisch belastet: Wer möchte wissen, ob er in 20 Jahren erkranken wird?",
          merksatz:
            "Huntington: CAG-Repeats > 40 → vollständige Penetranz, Antizipation (Repeats nehmen zu). Prädiktivdiagnostik ethisch komplex.",
        },
      ],
      diagram: "pedigree-analysis",

      merksätze: [
        "AD: jede Generation betroffen, 50% Risiko, kein Generationssprung. Beispiele: Marfan, Huntington.",
        "AR: Generationssprung möglich, beide Eltern Träger, 25% Risiko bei Trägerpaar. Beispiele: Mukoviszidose, PKU.",
        "XR: Männer betroffen (hemizygot), Frauen meist Konduktorin. Beispiele: Hämophilie A/B, Duchenne.",
      ],
      klinischerBezug:
        "Duchenne Muskeldystrophie (X-rezessiv) betrifft ca. 1:3.500 Knaben und führt unbehandelt zur Rollstuhlpflichtigkeit im zweiten Lebensjahrzehnt. Exon-Skipping-Therapien (Antisense-Oligonukleotide) und Gentherapien befinden sich in klinischen Studien und zeigen erste Erfolge in der Verlangsamung der Progression.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Stammbaum zeigt, dass ausschließlich Söhne erkrankt sind, erkrankte Väter keine erkrankten Söhne haben, und Töchter von erkrankten Vätern alle Konduktorinnen sind. Welcher Erbgang liegt vor?",
        answer:
          "Es liegt ein X-chromosomal rezessiver Erbgang vor. Da erkrankte Väter ihr X-Chromosom nur an Töchter (nicht an Söhne) weitergeben, erkranken Söhne betroffener Väter nicht. Töchter betroffener Väter erhalten das pathogene X-Allel sicher und sind obligate Konduktorinnen. Das Muster — nur Söhne betroffen, Übertragung durch klinisch gesunde Frauen — ist charakteristisch für X-chromosomal rezessiv.",
      },
      selfTest: [
        {
          question:
            "Welcher Erbgang liegt vor, wenn eine Erkrankung in jeder Generation vorkommt, Männer und Frauen gleich häufig betroffen sind, und ein betroffener Elternteil das Merkmal mit 50% Wahrscheinlichkeit weitergibt?",
          options: [
            "Autosomal rezessiv",
            "X-chromosomal rezessiv",
            "Autosomal dominant",
            "X-chromosomal dominant",
            "Mitochondrial",
          ],
          correctIndex: 2,
          explanation:
            "Autosomal dominanter Erbgang zeigt folgende Merkmale: Die Erkrankung tritt in jeder Generation auf (kein Generationssprung), beide Geschlechter sind gleich häufig betroffen (da das Gen auf einem Autosom liegt), und jeder Betroffene gibt das Allel mit 50% Wahrscheinlichkeit an seine Nachkommen weiter (heterozygot). Beispiele: Marfan-Syndrom, Huntington-Krankheit.",
          hints: [
            "Wenn die Erkrankung in jeder Generation auftaucht, muss das pathogene Allel dominant sein.",
            "Gleiches Verhältnis bei Männern und Frauen schließt X-chromosomale Erbgänge weitgehend aus.",
          ],
          difficulty: 1,
          tags: ["autosomal-dominant", "erbgang", "stammbaumanalyse", "mendel"],
        },
        {
          question:
            "Beide Eltern sind phänotypisch gesund, ihr Kind leidet an Mukoviszidose. Welche Aussage ist korrekt?",
          options: [
            "Mukoviszidose muss eine neue Mutation (de novo) sein",
            "Beide Eltern sind heterozygote Träger des CFTR-Allels (autosomal rezessiv)",
            "Die Mutter ist Konduktorin, der Vater ist gesund",
            "Das Kind hat das Allel nur von der Mutter geerbt",
            "Mukoviszidose folgt einem X-chromosomal rezessiven Erbgang",
          ],
          correctIndex: 1,
          explanation:
            "Mukoviszidose folgt einem autosomal rezessiven Erbgang. Wenn beide Eltern phänotypisch gesund, aber das Kind betroffen ist, müssen beide Eltern heterozygote Anlageträger (Aa) sein. Das Erkrankungsrisiko für jedes Kind beträgt 25% (aa). Die häufigste Mutation ist deltaF508 im CFTR-Gen auf Chromosom 7.",
          hints: [
            "Autosomal rezessiv: Beide Kopien des Gens müssen mutiert sein, um zu erkranken.",
            "Wenn gesunde Eltern ein erkranktes Kind haben, müssen beide Eltern Träger sein.",
          ],
          difficulty: 2,
          tags: ["autosomal-rezessiv", "mukoviszidose", "träger", "erbgang"],
        },
        {
          question:
            "Eine Frau ist Konduktorin für Hämophilie A (X^H X^h). Ihr Partner ist gesund. Wie hoch ist die Wahrscheinlichkeit, dass ihr Sohn an Hämophilie A erkrankt?",
          options: ["100%", "75%", "50%", "25%", "0%"],
          correctIndex: 2,
          explanation:
            "Die Konduktorin (X^H X^h) gibt entweder X^H oder X^h mit je 50% Wahrscheinlichkeit weiter. Der Vater ist gesund (X^H Y) und gibt das Y-Chromosom an Söhne weiter. Söhne erhalten also entweder X^H Y (gesund, 50%) oder X^h Y (erkrankt, 50%). Die Erkrankungswahrscheinlichkeit für jeden Sohn beträgt daher 50%.",
          hints: [
            "Söhne erhalten ihr X-Chromosom immer von der Mutter und das Y vom Vater.",
            "Die Konduktorin trägt das pathogene Allel auf einem ihrer X-Chromosomen — mit welcher Wahrscheinlichkeit gibt sie dieses weiter?",
          ],
          difficulty: 2,
          tags: ["haemophilie", "x-chromosomal", "konduktorin", "erbgang"],
        },
        {
          question:
            "Welches der folgenden Merkmale spricht GEGEN einen X-chromosomal rezessiven Erbgang?",
          options: [
            "Nur Söhne sind betroffen",
            "Töchter von erkrankten Vätern sind Konduktorinnen",
            "Ein erkrankter Vater hat einen erkrankten Sohn",
            "Gesunde Mütter haben erkrankte Söhne",
            "Erkrankungsrisiko für Söhne von Konduktorinnen beträgt 50%",
          ],
          correctIndex: 2,
          explanation:
            "Beim X-chromosomal rezessiven Erbgang geben Väter ihr X-Chromosom ausschließlich an Töchter weiter — niemals an Söhne (Söhne erhalten das Y-Chromosom vom Vater). Daher kann ein erkrankter Vater (X^h Y) sein pathogenes X-Allel NICHT an Söhne weitergeben. Ein erkrankter Vater mit erkranktem Sohn widerspricht damit dem X-chromosomal rezessiven Erbgang — es müsste ein anderer Erbgang (z. B. autosomal rezessiv) vorliegen.",
          hints: [
            "Welches Chromosom geben Väter an ihre Söhne weiter?",
            "Können Söhne das X-Chromosom ihres Vaters erhalten? Nein — sie erhalten das Y.",
          ],
          difficulty: 3,
          tags: ["x-chromosomal-rezessiv", "stammbaumanalyse", "erbgang", "diagnostik"],
        },
        {
          question: "Welche Erkrankung zeigt das Phänomen der 'Antizipation'?",
          options: [
            "Mukoviszidose",
            "Hämophilie A",
            "Huntington-Krankheit",
            "Marfan-Syndrom",
            "Duchenne Muskeldystrophie",
          ],
          correctIndex: 2,
          explanation:
            "Antizipation bezeichnet das Phänomen, dass eine erbliche Erkrankung in aufeinanderfolgenden Generationen früher auftritt und/oder schwerer verläuft. Bei der Huntington-Krankheit nimmt die Anzahl der CAG-Trinukleotidwiederholungen im HTT-Gen über Generationen zu — besonders bei väterlicher Weitergabe. Mehr Wiederholungen korrelieren mit früherem Erkrankungsbeginn.",
          hints: [
            "Antizipation ist typisch für Trinukleotidrepeat-Erkrankungen.",
            "Welche der genannten Erkrankungen basiert auf einer CAG-Wiederholungsexpansion?",
          ],
          difficulty: 2,
          tags: ["antizipation", "huntington", "trinukleotid-repeat", "erbgang"],
        },
      ],
    },
    {
      id: "bio-8-03",
      title: "Erbgänge vertieft — Polygenie, Pleiotropie, Penetranz",
      content: `## Über die Mendelschen Regeln hinaus

Die klassischen Mendelschen Regeln (Uniformitäts-, Spaltungs-, Unabhängigkeitsregel) beschreiben Erbgänge für einzelne Gene mit klarer Dominant-Rezessiv-Beziehung. Viele Merkmale und Erkrankungen folgen jedoch komplexeren Mustern.

## Multifaktorielle Vererbung

**Multifaktorielle Erkrankungen** entstehen durch das Zusammenwirken mehrerer Gene (Polygenie) und Umweltfaktoren. Merkmale: (1) Erkrankung häuft sich in Familien, folgt aber nicht einem einfachen Mendel-Erbgang, (2) eineiige Zwillinge haben höhere Konkordanz als zweieiige, aber keine 100%, (3) je mehr Gene betroffen sind, desto stärker der Umwelteinfluss.

Beispiele: Typ-2-Diabetes, arterielle Hypertonie, koronare Herzerkrankung, Schizophrenie, Lippen-Kiefer-Gaumen-Spalte

## Polygenie

Bei **Polygenie** beeinflussen mehrere Gene (Polygene) dasselbe Merkmal. Jedes einzelne Gen hat einen kleinen additiven Beitrag. Das Merkmal ist **quantitativ** — es zeigt eine **Normalverteilung** in der Population (z. B. Körpergröße, Hautfarbe, Intelligenz).

Körpergröße: Mehrere Hundert Genloci mit je kleinem Effekt plus starke Umweltkomponente (Ernährung, Hormonstatus)
Hautfarbe: Mindestens 6 Gene (z. B. MC1R, OCA2, SLC24A5) → kontinuierliches Spektrum

## Pleiotropie

**Pleiotropie** bezeichnet das Phänomen, dass ein einziges Gen mehrere scheinbar unabhängige Phänotypen beeinflusst. Ursache: Das Genprodukt (Protein) ist in mehreren Geweben oder Stoffwechselwegen aktiv.

Beispiele:
- **Phenylketonurie (PKU):** Phenylalanin-Hydroxylase-Defekt → erhöhtes Phenylalanin → Hirnentwicklungsstörung, Hypopigmentierung, Mausurin-Geruch (alle Symptome durch ein Gen)
- **Marfan-Syndrom:** FBN1-Mutation → Bindegewebsschwäche in Aorta, Augenlinse, Skelett

## Penetranz und Expressivität

**Penetranz:** Anteil der Genträger, die den Phänotyp tatsächlich zeigen.
- **Vollständige Penetranz (100%):** Jeder Träger erkrankt (z. B. Huntington mit >40 Repeats)
- **Unvollständige Penetranz:** Nur ein Teil der Träger zeigt den Phänotyp (z. B. BRCA1-Mutationen: ca. 70% Brustkrebs-Lebensrisiko)

**Expressivität:** Beschreibt, wie stark der Phänotyp bei Trägern ausgeprägt ist.
- **Variable Expressivität:** Träger zeigen unterschiedlich schwere Ausprägung (z. B. Neurofibromatose Typ 1: von wenigen Café-au-lait-Flecken bis massiven Tumoren)

Ursachen für variable Penetranz/Expressivität: modifizierende Gene, Umweltfaktoren, epigenetische Einflüsse`,
      lernziele: [
        "Polygenie und Pleiotropie definieren und mit je einem Beispiel erläutern",
        "Vollständige und unvollständige Penetranz sowie variable Expressivität unterscheiden",
        "Multifaktorielle Erkrankungen von monogenen Erkrankungen abgrenzen",
      ],
      sections: [
        {
          heading: "Penetranz vs. Expressivität — Ein klinisch wichtiger Unterschied",
          text: "Penetranz und Expressivität werden häufig verwechselt. Penetranz ist binär: Entweder zeigt der Genträger den Phänotyp oder nicht (Prozentsatz der Träger, die betroffen sind). Expressivität beschreibt die Schwere des Phänotyps bei denjenigen, die bereits betroffen sind (quantitatives Ausmaß). Beispiel: Bei der Neurofibromatose Typ 1 (NF1, autosomal dominant) beträgt die Penetranz fast 100% — fast alle Träger zeigen irgendein Symptom. Die Expressivität ist jedoch sehr variabel: Von minimalen Café-au-lait-Flecken bis zu multiplen Neurofibromen und kognitiven Beeinträchtigungen. Selbst innerhalb einer Familie können Eltern und Kinder sehr unterschiedlich stark betroffen sein.",
          merksatz:
            "Penetranz: Wie viele Träger erkranken? (0–100%). Expressivität: Wie schwer erkranken die Betroffenen? (variabel/konstant).",
        },
        {
          heading: "Polygenie und Normalverteilung",
          text: "Wenn viele Gene mit kleinen, additiven Effekten ein Merkmal beeinflussen, entsteht durch den Zentralen Grenzwertsatz eine Normalverteilung in der Population. Die Körpergröße ist das klassische Lehrbuchbeispiel: Hunderte von Genloci tragen je wenige Millimeter bei. Dazu kommt eine große Umweltkomponente (Ernährung, chronische Erkrankungen, Hormonstatus). Zwillingsstudien quantifizieren die genetische Komponente: Bei eineiigen Zwillingen korrelieren Körpergrößen stärker als bei zweieiigen. Die Heritabilität (h²) der Körpergröße beträgt etwa 80% in westlichen Populationen. GWAS-Studien (Genome-Wide Association Studies) haben bereits über 3.000 Varianten identifiziert, die gemeinsam aber nur ~25% der Varianz erklären — die 'missing heritability' ist Gegenstand aktueller Forschung.",
          merksatz:
            "Polygenie → viele Gene mit kleinen additiven Effekten → Merkmal normalverteilt in Population. Körpergröße, Hautfarbe: klassische Beispiele.",
        },
      ],
      merksätze: [
        "Polygenie: Ein Merkmal wird durch viele Gene beeinflusst → Normalverteilung (Körpergröße, Hautfarbe).",
        "Pleiotropie: Ein Gen → viele Phänotypen (PKU: Hirnschaden + Hypopigmentierung + Geruch).",
        "Penetranz: Anteil erkrankter Träger (vollständig 100% vs. unvollständig). Expressivität: Schwere bei Betroffenen (variabel).",
      ],
      klinischerBezug:
        "BRCA1/2-Mutationen zeigen unvollständige Penetranz: Das Lebenszeitrisiko für Brustkrebs beträgt ca. 70% (nicht 100%). Das prädiktive Testen und prophylaktische Operationen (Mastektomie, Salpingo-Oophorektomie) werden im Rahmen der Genberatung diskutiert. Die variable Expressivität des Marfan-Syndroms kann dazu führen, dass mildere Fälle jahrelang undiagnostiziert bleiben.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen Penetranz und Expressivität? Erläutern Sie an einem Beispiel.",
        answer:
          "Penetranz bezeichnet den Anteil der Genträger, die den zugehörigen Phänotyp zeigen (prozentual). Vollständige Penetranz bedeutet, dass 100% der Träger erkranken. Expressivität beschreibt die Schwere des Phänotyps bei denjenigen, die bereits betroffen sind. Beispiel: Neurofibromatose Typ 1 hat nahezu vollständige Penetranz (fast alle Träger zeigen Symptome), aber variable Expressivität (von minimalen Hautveränderungen bis zu multiplen Tumoren und kognitiven Einschränkungen).",
      },
      selfTest: [
        {
          question: "Was beschreibt der Begriff 'Pleiotropie'?",
          options: [
            "Mehrere Gene beeinflussen dasselbe Merkmal",
            "Ein einziges Gen beeinflusst mehrere scheinbar unabhängige Phänotypen",
            "Ein Allel ist in manchen Trägern dominant, in anderen rezessiv",
            "Ein Merkmal wird ausschließlich durch Umweltfaktoren bestimmt",
            "Zwei verschiedene Gene liegen auf demselben Chromosom (Kopplung)",
          ],
          correctIndex: 1,
          explanation:
            "Pleiotropie bezeichnet das Phänomen, dass ein einziges Gen (bzw. sein Produkt) mehrere, scheinbar unabhängige Phänotypen beeinflusst. Ursache ist, dass das Genprodukt in verschiedenen Geweben oder Stoffwechselwegen eine Rolle spielt. Beispiel: FBN1-Mutation (Marfan-Syndrom) → Bindegewebsschwäche in Aorta, Augenlinse und Skelett durch ein einziges Gen.",
          hints: [
            "Pleio (griech.) = vielfach. Ein Gen, viele Wirkungen.",
            "Vergleichen Sie mit Polygenie (umgekehrt): viele Gene, ein Merkmal.",
          ],
          difficulty: 1,
          tags: ["pleiotropie", "phänotyp", "genprodukt", "mehrsystemerkrankung"],
        },
        {
          question:
            "Welche der folgenden Erkrankungen ist ein klassisches Beispiel für Pleiotropie?",
          options: [
            "Körpergröße (multifaktoriell beeinflusst)",
            "Typ-2-Diabetes (polygenetisch und umweltbedingt)",
            "Phenylketonurie (PKU): ein Gen → Hirnschäden, Hypopigmentierung, Uringeruch",
            "Trisomie 21 (Chromosomenstörung)",
            "Duchenne Muskeldystrophie (X-chromosomal rezessiv)",
          ],
          correctIndex: 2,
          explanation:
            "Phenylketonurie (PKU) ist ein Paradebeispiel für Pleiotropie: Die Mutation im PAH-Gen (Phenylalanin-Hydroxylase) führt zu erhöhtem Phenylalanin, das mehrere Organsysteme schädigt: Hirnentwicklungsstörung (geistige Behinderung), Hypopigmentierung der Haut und Haare (Phenylalanin hemmt Melanin-Synthese) und charakteristischer Mausurin-Geruch (Phenylketone im Urin). Ein Gen, viele Phänotypen.",
          hints: [
            "Pleiotropie = ein Gen, viele Symptome. Welche Erkrankung zeigt ein breites Symptomspektrum aus einem einzigen Gendefekt?",
            "PKU wird durch Neugeborenenscreening erkannt — der Enzymdefekt betrifft die Phenylalanin-Hydroxylase.",
          ],
          difficulty: 2,
          tags: ["pleiotropie", "pku", "phenylalanin", "einzel-gen"],
        },
        {
          question:
            "Ein Merkmal ist normalverteilt in der Population (wie Körpergröße). Was schlussfolgern Sie über seinen Erbgang?",
          options: [
            "Das Merkmal folgt einem autosomal dominanten Erbgang mit einem einzigen Gen",
            "Das Merkmal wird ausschließlich durch Umweltfaktoren bestimmt",
            "Das Merkmal ist polygen — viele Gene mit je kleinen additiven Effekten",
            "Das Merkmal folgt X-chromosomaler Vererbung",
            "Das Merkmal zeigt unvollständige Penetranz mit einem einzigen Gen",
          ],
          correctIndex: 2,
          explanation:
            "Wenn viele Gene mit kleinen, additiven Effekten ein Merkmal beeinflussen (Polygenie), entsteht durch den Zentralen Grenzwertsatz eine Normalverteilung in der Population. Körpergröße, Hautfarbe und viele psychologische Merkmale folgen diesem Muster. Monogene Merkmale zeigen dagegen diskrete Klassen (z. B. krank/gesund bei vollständiger Penetranz).",
          hints: [
            "Die Normalverteilung entsteht, wenn viele unabhängige, additiv wirkende Faktoren zusammenkommen.",
            "Diskrete Merkmale (z. B. Blutgruppen) folgen monogenen Erbgängen; kontinuierliche Merkmale folgen polygener Vererbung.",
          ],
          difficulty: 2,
          tags: ["polygenie", "normalverteilung", "körpergrösse", "additiv"],
        },
        {
          question:
            "BRCA1-Mutationsträgerinnen haben ein Lebenszeitrisiko von ca. 70% für Brustkrebs (nicht 100%). Welches genetische Konzept erklärt dies?",
          options: [
            "Variable Expressivität",
            "Unvollständige Penetranz",
            "Pleiotropie",
            "Epistasie",
            "Antizipation",
          ],
          correctIndex: 1,
          explanation:
            "Unvollständige Penetranz bedeutet, dass nicht alle Träger eines pathogenen Allels den zugehörigen Phänotyp entwickeln. Bei BRCA1-Mutationen erkranken ca. 70% der Trägerinnen im Laufe ihres Lebens an Brustkrebs (nicht 100%). Modifizierende Gene, Umweltfaktoren (Hormonexposition, Reproduktionsverhalten) und zufällige somatische Mutationen beeinflussen, ob der Phänotyp auftritt.",
          hints: [
            "Penetranz = Anteil der Träger, die erkranken. Wenn nicht alle Träger erkranken, ist sie unvollständig.",
            "Expressivität würde die Schwere der Erkrankung bei Betroffenen beschreiben — hier geht es aber um das Ob, nicht das Wie.",
          ],
          difficulty: 2,
          tags: ["penetranz", "brca1", "unvollstaendig", "brustkrebsrisiko"],
        },
        {
          question:
            "Was ist der Unterschied zwischen multifaktoriellen und monogenen Erkrankungen?",
          options: [
            "Monogene Erkrankungen werden durch viele Gene verursacht; multifaktorielle durch ein einziges Gen",
            "Multifaktorielle Erkrankungen werden durch das Zusammenwirken mehrerer Gene und Umweltfaktoren verursacht; monogene durch Mutation in einem einzigen Gen",
            "Multifaktorielle Erkrankungen folgen immer einem autosomal rezessiven Erbgang",
            "Monogene Erkrankungen zeigen keine Familienanhäufung; multifaktorielle schon",
            "Es gibt keinen praktisch relevanten Unterschied zwischen beiden Begriffen",
          ],
          correctIndex: 1,
          explanation:
            "Monogene Erkrankungen (z. B. Mukoviszidose, Huntington) werden durch Mutationen in einem einzigen Gen verursacht und folgen Mendel-Erbgängen. Multifaktorielle Erkrankungen (z. B. Typ-2-Diabetes, Hypertonie) entstehen durch das Zusammenwirken vieler Gene mit je kleinem Effekt und Umweltfaktoren. Sie häufen sich in Familien, folgen aber nicht einem einfachen Mendel-Erbgang und zeigen keine 100%-Penetranz.",
          hints: [
            "Mono = eines. Multi = viele. Welches beschreibt das Zusammenspiel von Genen und Umwelt?",
            "Mukoviszidose ist ein klassisches monogenes Beispiel; Herzerkrankungen sind ein klassisches multifaktorielles Beispiel.",
          ],
          difficulty: 1,
          tags: ["multifaktoriell", "monogen", "polygenie", "umweltfaktoren"],
        },
      ],
    },
    {
      id: "bio-8-02",
      title: "Genetische Beratung und Risikoberechnung",
      content: `## Genetische Beratung — Ziele und Prinzipien

Die **genetische Beratung** ist ein Kommunikationsprozess zwischen Fachleuten (Humangenetiker, genetisch geschulte Ärzte) und Ratsuchenden. Ziele: Information über Erkrankung, Erbgang und Wiederholungsrisiko; Unterstützung bei Entscheidungen (Familienplanung, prädiktive Diagnostik); psychologische Begleitung. Prinzip der Nicht-Direktivität: Der Berater informiert, trifft aber keine Entscheidungen für die Ratsuchenden.

## Basisrisikoberechnung nach Mendel

Für einfache Erbgänge lässt sich das Erkrankungsrisiko direkt aus dem Stammbaum ableiten:
- **Autosomal dominant:** 50% Risiko für jedes Kind eines heterozygoten Betroffenen
- **Autosomal rezessiv:** 25% Erkrankungsrisiko für jedes Kind zweier heterozygoter Träger
- **X-chromosomal rezessiv:** 50% der Söhne einer Konduktorin erkranken; 50% der Töchter werden Konduktorinnen

## Bayessche Wahrscheinlichkeit

Die **Bayessche Analyse** ermöglicht die Berechnung einer posterioren Wahrscheinlichkeit unter Berücksichtigung zusätzlicher Information (z. B. klinische Befunde, vorherige Kinder). Sie kombiniert Vorinformation (Prior) mit neuer Information (Likelihood) zu einer aktualisierten Wahrscheinlichkeit (Posterior).

Beispiel: Eine Frau hat eine 50%ige Vorinformation (Prior), Konduktorin zu sein (Mutter ist Konduktorin). Sie hat drei gesunde Söhne. Die Wahrscheinlichkeit, drei gesunde Söhne zu haben, wenn sie Konduktorin ist, beträgt (1/2)³ = 1/8. Posterior: 50% × 1/8 / (50% × 1/8 + 50% × 1) = 1/9. Ihre Konduktrinnenwahrscheinlichkeit sinkt von 50% auf ~11%.

## Hardy-Weinberg-Gesetz für Häufigkeitsberechnung

Das **Hardy-Weinberg-Gesetz** beschreibt die Allel- und Genotyphäufigkeiten in einer idealen Population im Gleichgewicht:

p² + 2pq + q² = 1, wobei p + q = 1

p = Häufigkeit des Wildtyp-Allels, q = Häufigkeit des pathogenen Allels

- p² = Häufigkeit Homozygot Wildtyp (AA)
- 2pq = Häufigkeit Heterozygote Träger (Aa)
- q² = Häufigkeit Erkrankte (aa)

Anwendung: Mukoviszidose-Trägerfrequenz: Erkrankungshäufigkeit q² = 1/2.500, also q = 1/50, Trägerfrequenz 2pq ≈ 2 × (49/50) × (1/50) ≈ 1/25.`,
      lernziele: [
        "Erkrankungsrisiken für Nachkommen aus Stammbäumen berechnen (autosomal dominant/rezessiv, X-chromosomal)",
        "Das Hardy-Weinberg-Gesetz anwenden, um Trägerfrequenzen aus Erkrankungshäufigkeiten zu berechnen",
        "Das Prinzip der Bayesschen Analyse bei der genetischen Risikoberechnung erläutern",
      ],
      sections: [
        {
          heading: "Hardy-Weinberg-Gesetz — Anwendung in der Praxis",
          text: "Das Hardy-Weinberg-Gesetz gilt unter folgenden Bedingungen: große Population, zufällige Partnerwahl (panmiktisch), keine Mutation, keine Selektion, kein Genfluss (Migration). In der Realität sind diese Bedingungen nie vollständig erfüllt, aber das Gesetz liefert trotzdem nützliche Näherungen. Klinische Anwendung: Wenn die Erkrankungsfrequenz einer autosomal rezessiven Erkrankung bekannt ist, kann die Trägerfrequenz berechnet werden. Beispiel Phenylketonurie: Erkrankungshäufigkeit ca. 1:10.000 in Europa → q² = 1/10.000 → q = 1/100 → Trägerfrequenz 2pq ≈ 2 × 99/100 × 1/100 ≈ 1/50. Abweichungen vom Hardy-Weinberg-Gleichgewicht können auf evolutionäre Einflüsse (z. B. Heterozygotenvorteil bei Sichelzellanämie in Malariaregionen) hinweisen.",
          merksatz:
            "Hardy-Weinberg: p² + 2pq + q² = 1. q² = Erkrankungshäufigkeit → q = Allelhäufigkeit → 2pq = Trägerfrequenz.",
        },
        {
          heading: "Nicht-Direktivität in der genetischen Beratung",
          text: "Das Prinzip der Nicht-Direktivität ist ein Kernprinzip der genetischen Beratung: Der Berater soll keine Empfehlung geben, was der Patient tun soll, sondern nur sachliche Information und emotionale Unterstützung bereitstellen. Hintergrund: Historische Erfahrungen mit Eugenik (z. B. Zwangssterilisierungen im Nationalsozialismus) haben die Genetik zu besonderer Zurückhaltung veranlasst. In der Praxis ist strikte Nicht-Direktivität schwer umzusetzen, da Berater durch Betonung bestimmter Informationen die Entscheidung beeinflussen. Aktuelle Diskussion: In manchen Kontexten (z. B. pränatale Diagnose einer schweren letalen Erkrankung) wird mehr patientenzentrierte Beratung gefordert, die auch Behandlungsempfehlungen einschließen kann.",
          merksatz:
            "Nicht-Direktivität: Berater informiert, entscheidet nicht. Autonomie und Selbstbestimmung des Ratsuchenden stehen im Mittelpunkt.",
        },
      ],
      merksätze: [
        "Hardy-Weinberg: p² + 2pq + q² = 1; p+q = 1. Gilt für: große Population, Panmixie, kein Selektionsdruck.",
        "Trägerfrequenz berechnen: q² (Erkrankungsrate) → q (Allelfrequenz) → 2pq (Trägerfrequenz).",
        "Bayessche Analyse: Prior × Likelihood → Posterior; aktualisiert Wahrscheinlichkeit mit neuer Information.",
      ],
      klinischerBezug:
        "Im Rahmen der präkonzeptionellen Beratung bei Risikofamilien (z. B. bekannte BRCA-Mutation, Mukoviszidose-Träger) wird genetische Beratung angeboten. In Österreich regelt das Genanalysegesetz (GAG) die Rahmenbedingungen für prädiktive Gentests: Beratungspflicht vor und nach dem Test, kein Testen von Minderjährigen ohne therapeutischen Nutzen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Die Häufigkeit der Mukoviszidose beträgt in der europäischen Bevölkerung etwa 1:2.500. Berechnen Sie die Trägerfrequenz mithilfe des Hardy-Weinberg-Gesetzes.",
        answer:
          "Gegeben: q² = 1/2.500 (Erkrankungshäufigkeit). Daraus folgt: q = 1/50 (Häufigkeit des pathogenen CFTR-Allels). Da p + q = 1 gilt: p = 49/50. Trägerfrequenz = 2pq = 2 × (49/50) × (1/50) = 98/2.500 ≈ 1/25. Etwa jede 25. Person in der europäischen Bevölkerung ist heterozygoter Träger des CFTR-Allels.",
      },
      selfTest: [
        {
          question:
            "Beide Eltern sind heterozygote Träger (Aa) einer autosomal rezessiven Erkrankung. Wie hoch ist die Wahrscheinlichkeit, dass ihr nächstes Kind erkrankt?",
          options: ["50%", "25%", "75%", "100%", "12,5%"],
          correctIndex: 1,
          explanation:
            "Bei zwei heterozygoten Trägern (Aa × Aa) ergibt sich nach dem Mendelschen Spaltungsgesetz: 25% AA (gesund, kein Träger), 50% Aa (gesund, Träger), 25% aa (erkrankt). Das Erkrankungsrisiko für jedes Kind beträgt unabhängig von den Geschwistern 25%.",
          hints: [
            "Erstellen Sie einen Punnett-Quadrat: Aa × Aa.",
            "Die Erkrankung ist autosomal rezessiv — das Kind muss zwei pathogene Allele (aa) haben, um zu erkranken.",
          ],
          difficulty: 1,
          tags: ["autosomal-rezessiv", "erkrankungsrisiko", "punnett", "mendel"],
        },
        {
          question:
            "Die Häufigkeit einer autosomal rezessiven Erkrankung beträgt 1:10.000. Wie hoch ist die Trägerfrequenz in der Population (Hardy-Weinberg-Gesetz)?",
          options: ["1:100", "1:50", "1:25", "Etwa 2:100 (1:50)", "1:10.000"],
          correctIndex: 1,
          explanation:
            "q² = 1/10.000 → q = 1/100. p = 1 - 1/100 = 99/100. Trägerfrequenz = 2pq = 2 × (99/100) × (1/100) = 198/10.000 ≈ 1/50. Etwa jede 50. Person ist heterozygoter Träger des pathogenen Allels.",
          hints: [
            "Hardy-Weinberg: q² = Erkrankungshäufigkeit → nehmen Sie die Wurzel für q.",
            "Trägerfrequenz = 2pq, wobei p ≈ 1 wenn q sehr klein ist.",
          ],
          difficulty: 3,
          tags: ["hardy-weinberg", "trägerfrequenz", "allelfrequenz", "berechnung"],
        },
        {
          question: "Was bedeutet 'Nicht-Direktivität' in der genetischen Beratung?",
          options: [
            "Der Berater darf dem Patienten keine Diagnose mitteilen",
            "Der Berater informiert sachlich, trifft aber keine Entscheidungen für den Patienten — die Autonomie des Patienten wird respektiert",
            "Genetische Beratung muss ohne schriftliche Dokumentation erfolgen",
            "Der Berater empfiehlt immer die sicherste medizinische Option",
            "Genetische Tests dürfen nur ohne Beratung durchgeführt werden",
          ],
          correctIndex: 1,
          explanation:
            "Nicht-Direktivität ist ein ethisches Kernprinzip der genetischen Beratung: Der Berater stellt sachliche Informationen über Erkrankung, Erbgang und Risiken zur Verfügung und unterstützt die Entscheidungsfindung, ohne eigene Empfehlungen zu geben. Die Entscheidungshoheit verbleibt beim Ratsuchenden. Historischer Hintergrund: Negative Erfahrungen mit direktiver Eugenik haben dieses Prinzip etabliert.",
          hints: [
            "Denken Sie an das Prinzip der Patientenautonomie in der Medizinethik.",
            "'Nicht-direktiv' bedeutet, keine Richtung vorzugeben — der Patient entscheidet selbst.",
          ],
          difficulty: 2,
          tags: ["nicht-direktivitaet", "genetische-beratung", "autonomie", "ethik"],
        },
        {
          question: "Unter welchen Bedingungen gilt das Hardy-Weinberg-Gleichgewicht?",
          options: [
            "Kleine isolierte Population mit hoher Inzuchtrate",
            "Große Population, zufällige Partnerwahl, keine Mutation, keine Selektion, kein Genfluss",
            "Population mit starker natürlicher Selektion auf das betrachtete Allel",
            "Population mit bekannten Migrationsbewegungen und Genfluss",
            "Hardy-Weinberg gilt immer und unter allen Bedingungen",
          ],
          correctIndex: 1,
          explanation:
            "Das Hardy-Weinberg-Gleichgewicht gilt unter idealisierten Bedingungen: (1) große Population (kein Gendrift), (2) zufällige Partnerwahl (Panmixie), (3) keine Mutation, (4) keine Selektion (alle Genotypen gleich fit), (5) kein Genfluss (keine Migration). Abweichungen von diesen Bedingungen verändern die Allelhäufigkeiten über Generationen.",
          hints: [
            "Hardy-Weinberg beschreibt eine Gleichgewichtssituation ohne evolutionäre Kräfte.",
            "Merken Sie sich fünf Bedingungen: große Population, Panmixie, keine Mutation, keine Selektion, kein Genfluss.",
          ],
          difficulty: 2,
          tags: ["hardy-weinberg", "gleichgewicht", "bedingungen", "panmixie"],
        },
        {
          question: "Was ermöglicht die Bayessche Analyse in der genetischen Risikoberechnung?",
          options: [
            "Die direkte Bestimmung der Gensequenz aus Stammbaumdaten",
            "Die Aktualisierung einer Vorinformation (Prior) mit neuer Information zu einer aktualisierten Wahrscheinlichkeit (Posterior)",
            "Die Berechnung der Trägerfrequenz aus der Erkrankungshäufigkeit",
            "Die Bestimmung des Erbgangs aus dem Stammbaum allein",
            "Die Berechnung des Erkrankungsrisikos ohne Stammbaumdaten",
          ],
          correctIndex: 1,
          explanation:
            "Die Bayessche Analyse kombiniert eine Vorinformation (Prior-Wahrscheinlichkeit) mit neuer, zusätzlicher Information (Likelihood) zu einer aktualisierten Wahrscheinlichkeit (Posterior). In der Genetik wird sie beispielsweise verwendet, um die Konduktorinnenwahrscheinlichkeit einer Frau neu zu berechnen, wenn sie mehrere gesunde Söhne hat (zusätzliche Information, die die Prior-Wahrscheinlichkeit reduziert).",
          hints: [
            "Bayessche Statistik: neue Evidenz aktualisiert bestehende Wahrscheinlichkeiten.",
            "Prior + Likelihood → Posterior. Die gesunden Söhne liefern neue Information über die Konduktorinnenwahrscheinlichkeit.",
          ],
          difficulty: 3,
          tags: ["bayes", "prior", "posterior", "risikoberechnung"],
        },
      ],
    },
    {
      id: "bio-8-04",
      title: "PID, PND und Pränataldiagnostik — Methoden und Ethik",
      content: `## Pränataldiagnostik — Überblick

**Pränataldiagnostik (PND)** umfasst alle Methoden zur Untersuchung des Embryos/Feten vor der Geburt auf strukturelle, chromosomale oder genetische Auffälligkeiten. Ziel: Information und Beratung der Eltern; gegebenenfalls Einleitung von Therapien (intrauterine Eingriffe) oder Vorbereitung auf ein behindertes Kind.

## Ultraschall

Der **Ultraschall** ist die wichtigste nicht-invasive Methode. Im ersten Trimester (11.–13. SSW) wird die **Nackentransparenz (NT-Messung)** durchgeführt: eine verdickte Nackenfalte korreliert mit erhöhtem Trisomie-21-Risiko. Weitere Strukturen: Nasenbein, Herzaktionen. Organultraschall (18.–20. SSW) untersucht alle Organe auf Fehlbildungen.

## Serumscreening und NIPT

**Ersttrimester-Screening (ETS):** Kombination aus NT-Messung und Serummarkern (PAPP-A, freies Beta-HCG) berechnet ein statistisches Risiko für Trisomie 21, 18, 13.

**NIPT (Nicht-invasiver Pränataltest):** Sequenzierung zellfreier fetaler DNA (cffDNA) aus dem mütterlichen Blut ab der 10. SSW. Hohe Sensitivität und Spezifität für Trisomie 21 (>99%), 18, 13 und Geschlechtschromosom-Aneuploidien. Kein Fehlgeburtsrisiko, aber keine diagnostische Sicherheit (Screeningtest, keine Diagnose).

## Invasive Methoden

**Chorionzottenbiopsie (CVS):** Entnahme von Chorionzottengewebe (fetaler Herkunft) transabdominal oder transzervikal in der 11.–13. SSW. Fehlgeburtsrisiko: ca. 0,5–1%. Ermöglicht Chromosomenanalyse (Karyotyp) und molekulargenetische Tests.

**Amniozentese:** Entnahme von Fruchtwasser (15–20 ml) transabdominal in der 16.–18. SSW. Fehlgeburtsrisiko: ca. 0,3–0,5%. Fetale Zellen werden kultiviert für Karyotyp oder direkte DNA-Analyse.

## PID — Präimplantationsdiagnostik

**PID (Präimplantationsdiagnostik)** untersucht Embryonen im Rahmen einer In-vitro-Fertilisation (IVF) vor dem Einsetzen in die Gebärmutter. Biopsie einer oder weniger Zellen (Blastomere) am 3. Tag oder Trophoblastzellen am 5./6. Tag (Blastozyste). Anwendung: Paare mit bekanntem hohem Risiko für schwere Erbkrankheiten (z. B. Mukoviszidose, Huntington).

**Rechtliche Lage:** In Österreich ist PID seit 2015 unter strengen Voraussetzungen erlaubt (Fortpflanzungsmedizinrechts-Änderungsgesetz). In Deutschland seit 2011 eingeschränkt erlaubt.

## Ethische Aspekte

- **Selektion von Embryonen:** Wann beginnt schutzwürdiges Leben? Ablehnung unerwünschter Embryonen (Diskriminierung von Behinderten?)
- **Slippery slope:** Weg von medizinischer Indikation zu Designerbabys ("Wunschkind")?
- **Druck auf Betroffene:** Gesellschaftlicher Druck, Kinder mit Behinderungen nicht auszutragen
- **Ressourcenverteilung:** Kostenintensive Methoden für wen zugänglich?`,
      lernziele: [
        "Die Methoden der Pränataldiagnostik (Ultraschall, NIPT, Amniozentese, CVS) mit Zeitpunkt und Risiken beschreiben",
        "PID von PND abgrenzen und die Voraussetzungen für PID in Österreich nennen",
        "Ethische Argumente für und gegen PID und PND darlegen",
      ],
      sections: [
        {
          heading: "NIPT — Revolution in der Pränataldiagnostik",
          text: "Zellfreie fetale DNA (cffDNA) macht ab der 10. SSW etwa 5–15% der gesamten zellfreien DNA im mütterlichen Blut aus. NIPT-Tests sequenzieren diese DNA und analysieren die relative Häufigkeit der Chromosomen: Beim Vorliegen einer Trisomie 21 ist der Anteil an Chromosom-21-Sequenzen leicht erhöht. Die Sensitivität für Trisomie 21 übersteigt 99%, die Spezifität 99,9%. Damit ist NIPT dem Ersttrimester-Screening in der Präzision weit überlegen. Allerdings bleibt NIPT ein Screening-Test: Bei positiven Ergebnissen muss immer eine invasive Methode (Amniozentese, CVS) zur Bestätigung angeboten werden. Wichtige Einschränkungen: Falsch-positive Befunde durch mütterliche Chromosomenstörungen oder Plazentamosaike; für seltene Syndrome weniger validiert.",
          merksatz:
            "NIPT: cffDNA aus Mutterblut ab 10. SSW → hohe Sensitivität für Trisomie 21 (>99%), kein Fehlgeburtsrisiko, aber nur Screening (kein Diagnosetest).",
        },
        {
          heading: "Amniozentese vs. Chorionzottenbiopsie — Vergleich",
          text: "Amniozentese und Chorionzottenbiopsie sind beide invasive diagnostische Methoden mit geringem, aber realem Fehlgeburtsrisiko. Die CVS kann früher durchgeführt werden (11.–13. SSW vs. 16.–18. SSW bei Amniozentese), ermöglicht also frühere Entscheidungen. Allerdings besteht bei CVS ein leicht höheres Fehlgeburtsrisiko. Die Amniozentese nutzt fetale Zellen aus dem Fruchtwasser, die kultiviert werden müssen (Wartezeit 2–3 Wochen), während CVS-Zellen direkt genetisch analysiert werden können (schnellere FISH-Ergebnisse in 48 Stunden). Beide liefern einen vollständigen Karyotyp und ermöglichen molekulargenetische Analysen.",
          merksatz:
            "CVS: 11.–13. SSW, Fehlgeburtsrisiko ~1%. Amniozentese: 16.–18. SSW, Fehlgeburtsrisiko ~0,5%. CVS = früher, etwas mehr Risiko.",
        },
      ],
      merksätze: [
        "NIPT: Nicht-invasiv, ab 10. SSW, cffDNA aus Mutterblut, >99% Sensitivität für Trisomie 21, kein Fehlgeburtsrisiko.",
        "CVS (11.–13. SSW) vs. Amniozentese (16.–18. SSW): beide invasiv, beide liefern Karyotyp, CVS früher aber etwas höheres Risiko.",
        "PID: Diagnostik VOR Einsetzen des IVF-Embryos → nur bei hohem Risiko für schwere Erbkrankheiten erlaubt.",
      ],
      klinischerBezug:
        "NIPT hat in vielen europäischen Ländern das Erstrimester-Screening als Erstlinienmethode abgelöst. In Österreich ist NIPT seit 2020 im Mutter-Kind-Pass-Programm vorgesehen. Bei Trisomie 21 (Down-Syndrom, Häufigkeit ca. 1:700–1:800 Geburten) ist eine nicht-direktive Beratung essenziell, da Betroffene ein breites Spektrum an Lebensqualität zeigen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen PID und PND, und wann wird jede Methode eingesetzt?",
        answer:
          "PID (Präimplantationsdiagnostik) untersucht Embryonen vor der Einpflanzung in die Gebärmutter im Rahmen einer IVF — sie findet also vor der Schwangerschaft statt. PND (Pränataldiagnostik) untersucht den Feten während einer bestehenden Schwangerschaft. PID wird eingesetzt, wenn Paare ein hohes genetisches Risiko haben und IVF bereit sind — sie vermeidet den Schwangerschaftsabbruch. PND wird routinemäßig oder bei Risikofaktoren während der Schwangerschaft angeboten.",
      },
      selfTest: [
        {
          question:
            "In welcher Schwangerschaftswoche wird die Amniozentese typischerweise durchgeführt?",
          options: ["6.–8. SSW", "11.–13. SSW", "16.–18. SSW", "24.–26. SSW", "32.–34. SSW"],
          correctIndex: 2,
          explanation:
            "Die Amniozentese wird typischerweise in der 16.–18. Schwangerschaftswoche (SSW) durchgeführt. Zu diesem Zeitpunkt ist genug Fruchtwasser vorhanden (15–20 ml können entnommen werden, ohne den Feten zu gefährden), und die fetalen Zellen im Fruchtwasser können für eine Chromosomenanalyse (Karyotyp) kultiviert werden. Das Fehlgeburtsrisiko beträgt ca. 0,3–0,5%.",
          hints: [
            "Amniozentese wird im zweiten Trimester durchgeführt — nach dem 15. Woche, wenn genügend Fruchtwasser vorhanden ist.",
            "Die Chorionzottenbiopsie (CVS) wird früher durchgeführt — merken Sie sich den Unterschied.",
          ],
          difficulty: 1,
          tags: ["amniozentese", "pränataldiagnostik", "ssw", "fruchtwasser"],
        },
        {
          question: "Was ist das Prinzip des NIPT (Nicht-invasiver Pränataltest)?",
          options: [
            "Entnahme von Chorionzottengewebe zur Chromosomenanalyse",
            "Sequenzierung zellfreier fetaler DNA (cffDNA) aus dem Blut der Mutter",
            "Ultraschallmessung der Nackentransparenz des Feten",
            "Analyse fetaler Zellen aus dem Urin der Mutter",
            "Messung von Hormonen im Blut der Mutter (PAPP-A, Beta-HCG)",
          ],
          correctIndex: 1,
          explanation:
            "NIPT (Nicht-invasiver Pränataltest) basiert auf der Sequenzierung zellfreier fetaler DNA (cffDNA), die ab der 10. SSW im Blut der Mutter nachweisbar ist. Diese fetale DNA stammt hauptsächlich aus Plazentazellen (Trophoblasten) und macht ca. 5–15% der gesamten zellfreien DNA im mütterlichen Blut aus. Durch Sequenzierung und Analyse der relativen Häufigkeit chromosomaler Sequenzen können Aneuploidien (z. B. Trisomie 21) erkannt werden.",
          hints: [
            "NIPT = Nicht-invasiv — kein Einstechen in den Uterus. Das Blut der Mutter genügt.",
            "cffDNA = cell-free fetal DNA — Fragmenten der fetalen DNA zirkulieren im mütterlichen Blutkreislauf.",
          ],
          difficulty: 1,
          tags: ["nipt", "cffDNA", "nicht-invasiv", "trisomie"],
        },
        {
          question:
            "Ein Paar mit einem bekannten hohen Risiko für Mukoviszidose (beide Eltern sind Träger) möchte die Geburt eines erkrankten Kindes vermeiden, ohne einen Schwangerschaftsabbruch in Betracht zu ziehen. Welche Option ist geeignet?",
          options: [
            "NIPT ab der 10. SSW",
            "Amniozentese in der 16. SSW mit anschließendem Schwangerschaftsabbruch bei positivem Befund",
            "Präimplantationsdiagnostik (PID) im Rahmen einer IVF",
            "Chorionzottenbiopsie in der 12. SSW",
            "Verzicht auf Kinder als einzige ethisch akzeptable Option",
          ],
          correctIndex: 2,
          explanation:
            "PID (Präimplantationsdiagnostik) ermöglicht die genetische Untersuchung von Embryonen vor dem Einsetzen in die Gebärmutter im Rahmen einer IVF. Nur Embryonen ohne die Mukoviszidose-Mutation werden eingesetzt. Damit kann ein erkranktes Kind verhindert werden, ohne dass eine bestehende Schwangerschaft abgebrochen werden muss. Dies ist für viele Paare eine ethisch akzeptablere Alternative zu PND mit Schwangerschaftsabbruch.",
          hints: [
            "Das Paar möchte keinen Schwangerschaftsabbruch — die Diagnostik muss also VOR der Schwangerschaft erfolgen.",
            "PID findet im Rahmen einer IVF statt — Embryonen werden analysiert, bevor sie eingesetzt werden.",
          ],
          difficulty: 2,
          tags: ["pid", "ivf", "praeimplantation", "mukoviszidose"],
        },
        {
          question: "Welches der folgenden Merkmale unterscheidet NIPT von der Amniozentese?",
          options: [
            "NIPT liefert einen vollständigen Karyotyp; Amniozentese nur für Trisomien",
            "NIPT hat kein Fehlgeburtsrisiko und ist ein Screeningtest; Amniozentese hat ein geringes Fehlgeburtsrisiko und ist diagnostisch",
            "NIPT kann nur im dritten Trimester durchgeführt werden; Amniozentese im zweiten",
            "NIPT analysiert mütterliche DNA; Amniozentese analysiert fetale Zellen",
            "NIPT und Amniozentese sind gleichwertige Methoden ohne wesentliche Unterschiede",
          ],
          correctIndex: 1,
          explanation:
            "Der wesentliche Unterschied: NIPT ist nicht-invasiv (kein Fehlgeburtsrisiko), kann ab der 10. SSW eingesetzt werden und ist hochsensitiv für häufige Trisomien — aber es bleibt ein Screeningtest, der bei positivem Befund durch invasive Diagnostik bestätigt werden muss. Die Amniozentese ist invasiv (Fehlgeburtsrisiko ~0,3–0,5%), liefert aber einen vollständigen Karyotyp und ermöglicht eine definitive Diagnose.",
          hints: [
            "NIPT = nicht-invasiv → kein Fehlgeburtsrisiko. Was ist der Preis dafür?",
            "Screeningtest vs. Diagnosetest: Welcher liefert ein definitives Ergebnis?",
          ],
          difficulty: 2,
          tags: ["nipt", "amniozentese", "vergleich", "screening-vs-diagnose"],
        },
        {
          question:
            "Die Nackentransparenz (NT-Messung) im Ultraschall ist ein Screening-Parameter für welche Chromosomenstörung?",
          options: [
            "Turner-Syndrom (45,X)",
            "Klinefelter-Syndrom (47,XXY)",
            "Trisomie 21 (Down-Syndrom)",
            "Trisomie 13 (Pätau-Syndrom) — ausschließlich",
            "Translokationen zwischen Chromosom 1 und 2",
          ],
          correctIndex: 2,
          explanation:
            "Eine vergrößerte Nackentransparenz (NT > 3 mm, gemessen in der 11.–13. SSW) ist der wichtigste Ultraschallmarker für ein erhöhtes Risiko einer Trisomie 21 (Down-Syndrom). Sie kann auch bei anderen Chromosomenstörungen (Trisomie 18, 13, Turner-Syndrom) und bestimmten Herzfehlern erhöht sein. NT allein ist kein Diagnosetest, sondern ein Risikomarker — das Ergebnis wird mit mütterlichem Alter und Serummarkern (PAPP-A, Beta-HCG) kombiniert.",
          hints: [
            "Die Nackentransparenz wird in der 11.–13. SSW gemessen — im ersten Trimester-Screening.",
            "Down-Syndrom (Trisomie 21) ist die häufigste chromosomale Ursache geistiger Behinderung — welcher Ultraschallbefund korreliert damit?",
          ],
          difficulty: 1,
          tags: ["nackentransparenz", "trisomie-21", "ultraschall", "ersttrimester"],
        },
      ],
    },
  ],
};
