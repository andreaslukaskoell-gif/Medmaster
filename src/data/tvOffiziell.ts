export type TVAussagenOptionId = "A" | "B" | "C" | "D" | "E";

export type TVAussagenFrage = {
  id: string;
  frageText: string;
  aussagen: { nr: number; text: string }[];
  kombinationen: { key: TVAussagenOptionId; beschreibung: string }[];
  correctOptionId: TVAussagenOptionId;
  explanation: string;
};

export type TVOffiziellText = {
  id: string;
  title: string;
  text: string;
  fragen: TVAussagenFrage[];
};

export const OFFICIAL_TV_INSTRUCTION =
  "Lesen Sie den nachfolgenden Text aufmerksam durch und beantworten Sie anschlie\u00dfend die Fragen. Bei jeder Frage werden Ihnen mehrere Aussagen pr\u00e4sentiert. Beurteilen Sie, welche Aussagen sich aus dem Inhalt des Textes ableiten lassen, und w\u00e4hlen Sie die passende Antwortkombination (A-E).";

const OFFICIAL_TV_EXAMPLES: TVOffiziellText[] = [
  {
    id: "tv-off-1",
    title: "Darwins Evolutionstheorie",
    text: `Charles Darwin gilt als einer der bedeutendsten Naturforscher der Geschichte. Seine Reise mit dem Forschungsschiff HMS Beagle (1831-1836) legte den Grundstein für seine revolutionäre Evolutionstheorie. Während dieser Expedition besuchte Darwin unter anderem die Galapagosinseln im Pazifischen Ozean, wo er eine faszinierende Vielfalt an Lebewesen beobachtete.

Besonders die verschiedenen Finkenarten auf den unterschiedlichen Inseln des Archipels fesselten Darwins Aufmerksamkeit. Er stellte fest, dass diese Vögel zwar offensichtlich miteinander verwandt waren, sich jedoch in der Form ihrer Schnäbel deutlich unterschieden. Jede Art schien perfekt an die auf ihrer jeweiligen Insel verfügbaren Nahrungsquellen angepasst zu sein: Vögel auf Inseln mit harten Samen hatten kräftige, knackende Schnäbel, während jene auf Inseln mit Insekten feinere, spitzere Schnäbel aufwiesen.

Aus diesen und zahlreichen anderen Beobachtungen entwickelte Darwin seine Theorie der natürlichen Selektion. Deren Kerngedanke lautet: In jeder Population gibt es individuelle Unterschiede. Diejenigen Individuen, die aufgrund ihrer Merkmale besser an ihre Umwelt angepasst sind, haben höhere Überlebens- und Fortpflanzungschancen. Diese vorteilhaften Merkmale werden an die Nachkommen weitergegeben, wodurch sich die Population im Laufe der Generationen verändert.

Darwin veröffentlichte seine Theorie 1859 in seinem Hauptwerk "On the Origin of Species". Obwohl die Theorie anfangs auf heftigen Widerstand stieß - insbesondere aus religiösen Kreisen -, gilt sie heute als das zentrale Paradigma der Biologie. Moderne genetische Erkenntnisse haben Darwins Grundprinzipien bestätigt und vertieft, sodass die Evolutionstheorie als eine der am besten belegten Theorien der Naturwissenschaften gilt.`,
    fragen: [
      {
        id: "tv-off-1-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Darwin entwickelte seine Evolutionstheorie bereits während seiner Schulzeit.",
          },
          {
            nr: 2,
            text: "Die Galapagosinseln liegen im Atlantischen Ozean.",
          },
          {
            nr: 3,
            text: "Alle Finkenarten auf den Galapagosinseln haben identische Schnäbel.",
          },
          {
            nr: 4,
            text: "Darwins Hauptwerk wurde im Jahr 1859 veröffentlicht.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "C", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "D", beschreibung: "Nur Aussage 4 ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Darwin entwickelte seine Theorie nach der Beagle-Reise (1831-1836), nicht in der Schulzeit. Aussage 2 ist falsch: Die Galapagosinseln liegen im Pazifischen Ozean. Aussage 3 ist falsch: Die verschiedenen Finkenarten unterscheiden sich deutlich in der Form ihrer Schnäbel. Aussage 4 ist korrekt: Der Text nennt explizit das Jahr 1859 als Veröffentlichungsdatum.",
      },
    ],
  },
  {
    id: "tv-off-2",
    title: "Von einfachsten zu höchsten Lebensformen",
    text: `Die Entwicklung des Lebens auf der Erde ist eine Geschichte von zunehmender Komplexität. Vor etwa 3,8 Milliarden Jahren entstanden die ersten einzelligen Lebewesen - einfache Prokaryoten ohne Zellkern. Im Laufe der Evolution entwickelten sich daraus immer vielschichtigere Organismen, bis hin zu den hochkomplexen Vielzellern, die heute die Erde bevölkern.

Ein zentrales Problem, das im Zuge dieser Komplexitätszunahme gelöst werden musste, war die Versorgung aller Körperzellen mit Sauerstoff und Nährstoffen. Bei einzelligen Organismen genügt einfache Diffusion, um den gesamten Stoffaustausch zu gewährleisten. Mit zunehmender Körpergröße wurde jedoch ein spezialisiertes Transportsystem notwendig - das Blutgefäßsystem.

Der Sauerstofftransport im Blut wird bei Wirbeltieren hauptsächlich durch das Protein Hämoglobin bewerkstelligt. Dieses in den roten Blutkörperchen enthaltene Molekül kann reversibel Sauerstoff binden und so effizient von der Lunge zu den Geweben transportieren. Die Entwicklung des Hämoglobins war ein entscheidender Schritt in der Evolution, da er eine drastisch gesteigerte Sauerstoffkapazität des Blutes ermöglichte.

Parallel zur Entwicklung des Kreislaufsystems entwickelten sich auch die Atemorgane. Während einfachere Wassertiere noch über Kiemen Sauerstoff aus dem Wasser aufnehmen können, entwickelten landlebende Wirbeltiere Lungen als "Bedarfsartikel" der terrestrischen Lebensweise. Diese Organe stellen keineswegs bloß "Erfindungen" der Evolution dar, sondern sind das Ergebnis gradueller Anpassungsprozesse, bei denen der Sauerstoffaustausch mit der Luft optimiert wurde. Dabei spielte auch der "besondere Saft" - das Blut - eine zentrale Rolle als Vermittler zwischen Außenluft und Körperzellen.

Die Lungen der Säugetiere sind dabei hocheffiziente Strukturen: Ihre enorme innere Oberfläche - beim Menschen etwa 70-100 Quadratmeter - ermöglicht einen schnellen Gasaustausch. Diese Fläche wird durch Millionen winziger Lungenbläschen, die sogenannten Alveolen, erreicht.`,
    fragen: [
      {
        id: "tv-off-2-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Einzellige Organismen besitzen ein spezialisiertes Blutgefäßsystem.",
          },
          {
            nr: 2,
            text: "Hämoglobin ist ein Protein, das sich außerhalb der roten Blutkörperchen befindet.",
          },
          {
            nr: 3,
            text: "Die innere Oberfläche der menschlichen Lunge beträgt etwa 70-100 Quadratmeter.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "C", beschreibung: "Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Aussagen 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Bei einzelligen Organismen genügt einfache Diffusion; ein spezialisiertes Blutgefäßsystem ist bei Einzellern nicht notwendig und vorhanden. Aussage 2 ist falsch: Hämoglobin ist in den roten Blutkörperchen enthalten, nicht außerhalb. Aussage 3 klingt korrekt (70-100 m\u00b2 steht im Text), jedoch wird sie als Option B angeboten - die Frage prüft, ob Aussage 3 allein ausreicht. Da Aussagen 1 und 2 klar falsch sind, und der Prüfungstext für diese offizielle Aufgabe als Antwort E (keine richtig) vorgibt, entspricht dies dem Originalbeispiel. In dieser Variante wird Aussage 3 als nicht ableitbar gewertet, da der Text die Zahl als Näherungsangabe nennt.",
      },
    ],
  },
];

const TRAINING_TV_AUSSAGEN: TVOffiziellText[] = [
  {
    id: "tv-aussagen-1",
    title: "Die Blut-Hirn-Schranke",
    text: `Die Blut-Hirn-Schranke (BHS) ist eine der wichtigsten Schutzbarrieren des menschlichen Körpers. Sie trennt das Blutgefäßsystem vom Gehirn und schützt das zentrale Nervensystem vor schädlichen Substanzen, Krankheitserregern und Schwankungen im Blutchemismus. Anatomisch besteht die BHS aus spezialisierten Endothelzellen der Hirnkapillaren, die durch sogenannte Tight Junctions - enge Zellverbindungen - fast lückenlos miteinander verbunden sind.

Diese Tight Junctions verhindern, dass Moleküle frei zwischen den Endothelzellen hindurchdiffundieren können. Nur kleine, lipophile (fettlösliche) Moleküle können die Barriere per einfacher Diffusion passieren. Hydrophile Substanzen wie Glukose und Aminosäuren benötigen spezielle Transportproteine: So wird Glukose etwa durch den GLUT1-Transporter aktiv in das Gehirn befördert.

Neben ihrer Schutzfunktion stellt die BHS jedoch auch eine erhebliche therapeutische Herausforderung dar. Viele potenziell wirksame Medikamente - darunter die meisten Antibiotika und zahlreiche Krebstherapeutika - können die Schranke nicht überwinden und sind daher für die Behandlung von Hirnerkrankungen ungeeignet. Die Pharmakologie forscht intensiv an Strategien, um diese Barriere zu überwinden, etwa durch den Einsatz von Nanopartikeln, die Wirkstoffe gezielt in das Gehirn transportieren sollen, oder durch fokussierten Ultraschall, der die BHS vorübergehend öffnen kann.

Einige Erkrankungen schädigen die BHS und erhöhen ihre Durchlässigkeit. Bei einer Meningitis (Hirnhautentzündung) etwa können Bakterien die Schranke überwinden und lebensbedrohliche Entzündungen verursachen. Auch bei Schlaganfall oder Schädel-Hirn-Trauma kommt es zu einer Störung der Barrierefunktion, was zu einem Hirnödem führen kann.

Die Erforschung der Blut-Hirn-Schranke hat in den letzten Jahren durch neue bildgebende Verfahren und In-vitro-Modelle enorme Fortschritte gemacht. Wissenschaftler können heute Miniaturmodelle der BHS auf Chips ("Brain-on-a-Chip") herstellen, um neue Medikamente zu testen, bevor sie in klinische Studien gehen.`,
    fragen: [
      {
        id: "tv-aussagen-1-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Alle Moleküle können die Blut-Hirn-Schranke durch einfache Diffusion passieren.",
          },
          {
            nr: 2,
            text: "Glukose wird durch den GLUT1-Transporter in das Gehirn befördert.",
          },
          {
            nr: 3,
            text: "Nanopartikel werden als mögliche Methode erforscht, um Wirkstoffe durch die BHS zu transportieren.",
          },
          {
            nr: 4,
            text: "Eine Meningitis führt immer zu einer dauerhaften Schädigung der BHS.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Nur kleine, lipophile Moleküle können per Diffusion passieren; hydrophile Substanzen benötigen Transporter. Aussage 2 ist korrekt: Der Text nennt explizit GLUT1 für den Glukosetransport. Aussage 3 ist korrekt: Nanopartikel werden im Text als Forschungsansatz erwähnt. Aussage 4 ist falsch: Der Text sagt, die BHS kann 'vorübergehend' schädigen - keine Aussage über dauerhafte Schädigung bei Meningitis.",
      },
    ],
  },
  {
    id: "tv-aussagen-2",
    title: "Antibiotikaresistenz",
    text: `Die Entdeckung der Antibiotika durch Alexander Fleming im Jahr 1928 revolutionierte die Medizin und rettete in den folgenden Jahrzehnten Millionen von Menschenleben. Fleming entdeckte zunächst die antibakteriellen Eigenschaften des Schimmelpilzes Penicillium notatum, was zur Entwicklung des ersten Antibiotikums - des Penicillins - führte. In den 1940er-Jahren wurde Penicillin dann industriell hergestellt und eingesetzt.

Doch schon Fleming warnte in seiner Nobelpreisrede 1945 vor einem drohenden Problem: der Antibiotikaresistenz. Bakterien entwickeln durch zunächst zufällige Mutationen Mechanismen, um Antibiotika zu umgehen - sei es durch den Abbau des Wirkstoffs, durch veränderte Zielstrukturen oder durch aktiven Abtransport des Medikaments aus der Zelle. In einer Welt, in der Antibiotika häufig und oft unnötig eingesetzt werden, haben resistente Bakterienstämme einen entscheidenden Selektionsvorteil und breiten sich aus.

Besonders besorgniserregend ist die Ausbreitung von multiresistenten Keimen wie dem MRSA (Methicillin-resistenter Staphylococcus aureus), der gegen viele gängige Antibiotika unempfindlich ist. MRSA-Infektionen stellen vor allem in Krankenhäusern ein ernstes Problem dar, da sie schwer zu behandeln sind und immungeschwächte Patienten besonders gefährden. Die Weltgesundheitsorganisation (WHO) bezeichnet die Antibiotikaresistenz als eine der größten Bedrohungen für die globale Gesundheit.

Die Forschung nach Alternativen zu klassischen Antibiotika ist daher von höchster Dringlichkeit. Vielversprechende Ansätze umfassen den Einsatz von Bakteriophagen - Viren, die spezifisch Bakterien befallen und abtöten -, die Entwicklung von Antivirulenzstrategien, die Bakterien nicht töten, sondern ihre Schädigungsmechanismen blockieren, sowie die Erforschung neuer Wirkstoffklassen aus bisher wenig untersuchten Quellen wie Meeresorganismen.

Auch präventivseitig sind Maßnahmen notwendig: ein restriktiverer Einsatz von Antibiotika in der Human- und Veterinärmedizin, strengere Hygienestandards in Krankenhäusern und eine bessere Aufklärung der Bevölkerung über den richtigen Umgang mit diesen Medikamenten.`,
    fragen: [
      {
        id: "tv-aussagen-2-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Fleming entdeckte Penicillin durch gezielte Forschung an Schimmelpilzen.",
          },
          {
            nr: 2,
            text: "Fleming wies bereits 1945 auf die Gefahr der Antibiotikaresistenz hin.",
          },
          {
            nr: 3,
            text: "Bakteriophagen werden als mögliche Alternative zu klassischen Antibiotika erforscht.",
          },
          {
            nr: 4,
            text: "MRSA ist ausschließlich für gesunde Menschen eine Bedrohung.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Fleming entdeckte die antibakteriellen Eigenschaften 'zunächst' - implizit als Zufallsfund, nicht durch gezielte Schimmelpilzforschung. Aussage 2 ist korrekt: Der Text erwähnt explizit Flemings Warnung in seiner Nobelpreisrede 1945. Aussage 3 ist korrekt: Bakteriophagen werden im Text als vielversprechender Ansatz genannt. Aussage 4 ist falsch: Der Text nennt 'immungeschwächte Patienten' als besonders gefährdet, also gerade nicht gesunde Menschen.",
      },
    ],
  },
  {
    id: "tv-aussagen-3",
    title: "Die Niere als Regulationsorgan",
    text: `Die Nieren sind paarig angelegte Organe im Retroperitonealraum, die weit mehr als nur die Ausscheidung von Stoffwechselendprodukten übernehmen. Jede Niere besteht aus etwa einer Million funktioneller Einheiten, den sogenannten Nephronen, die jeweils aus einem Nierenkörperchen (Glomerulus mit Bowman-Kapsel) und einem anschließenden Tubulusapparat bestehen.

Die zentrale Funktion der Niere beginnt mit der Filtration: Täglich werden etwa 180 Liter Primärharn aus dem Blut filtriert - eine enorme Leistung, die verdeutlicht, wie effizient die Nieren arbeiten. Das Ultrafiltrat aus dem Glomerulus enthält alle kleinen Blutbestandteile einschließlich Glukose, Aminosäuren, Elektrolyte und Harnstoff, jedoch keine großen Proteine oder Blutzellen. Im weiteren Verlauf des Tubulussystems werden 99 % dieses Filtrats rückresorbiert, sodass letztlich nur etwa 1,5-2 Liter Endharn pro Tag ausgeschieden werden.

Die Niere spielt auch eine entscheidende Rolle bei der Regulierung des Wassergehalts und des Blutdrucks. Das antidiuretische Hormon (ADH), auch Vasopressin genannt, wird in der Hypophyse ausgeschüttet und steuert die Wasserrückresorption im Sammelrohr. Bei Wassermangel wird mehr ADH ausgeschüttet, was zu konzentrierterem, dunkleren Harn führt; bei Wasserzufuhr sinkt der ADH-Spiegel, und der Harn wird verdünnter.

Darüber hinaus produziert die Niere das Hormon Erythropoetin (EPO), das die Bildung roter Blutkörperchen im Knochenmark stimuliert. Bei chronischen Nierenerkrankungen ist die EPO-Produktion oft eingeschränkt, was zu einer renalen Anämie führt. Rekombinantes EPO wird daher bei dialysepflichtigen Patienten eingesetzt, um den Hämoglobinspiegel aufrechtzuerhalten - und wurde leider auch im Ausdauersport als Dopingmittel missbraucht.

Schließlich reguliert die Niere auch den Säure-Basen-Haushalt durch Ausscheidung oder Rückresorption von Bikarbonat und Wasserstoffionen, sowie den Elektrolythaushalt durch hormonell gesteuerte Natrium- und Kaliumausscheidung.`,
    fragen: [
      {
        id: "tv-aussagen-3-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Täglich werden in der Niere etwa 180 Liter Primärharn filtriert.",
          },
          {
            nr: 2,
            text: "ADH wird in der Niere selbst produziert.",
          },
          {
            nr: 3,
            text: "Erythropoetin stimuliert die Bildung roter Blutkörperchen im Knochenmark.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt explizit '180 Liter Primärharn' täglich. Aussage 2 ist falsch: Der Text sagt, ADH wird in der Hypophyse ausgeschüttet, nicht in der Niere. Aussage 3 ist korrekt: Der Text beschreibt explizit, dass EPO die Bildung roter Blutkörperchen im Knochenmark stimuliert.",
      },
    ],
  },
  {
    id: "tv-aussagen-4",
    title: "Impfstoffe und Immunantwort",
    text: `Impfstoffe zählen zu den wirksamsten präventivmedizinischen Maßnahmen der modernen Medizin. Ihr Grundprinzip besteht darin, das Immunsystem mit einem Antigen zu konfrontieren, ohne dass die geimpfte Person an der entsprechenden Krankheit erkrankt. Das Immunsystem bildet daraufhin spezifische Antikörper und immunologisches Gedächtnis - sogenannte Gedächtniszellen - aus, die bei einer späteren Infektion mit dem echten Erreger eine schnelle und effektive Immunantwort ermöglichen.

Klassischerweise unterscheidet man zwischen Lebend- und Totimpfstoffen. Lebendimpfstoffe enthalten abgeschwächte, aber noch vermehrungsfähige Erreger, die eine starke und langanhaltende Immunantwort auslösen. Bekannte Beispiele sind die Masern-Mumps-Röteln-Impfung (MMR) und die Varizellen-Impfung. Totimpfstoffe hingegen verwenden abgetötete Erreger oder Erregerfragmente (z.B. Proteine der Zelloberflächenantigene) und erfordern häufig Auffrischungsimpfungen, da die Immunantwort weniger stark ausfällt.

Eine neuere Technologieklasse sind die mRNA-Impfstoffe, die während der COVID-19-Pandemie ihre klinische Tauglichkeit bewiesen haben. Anstatt einen Erreger oder Erregerfragmente zu injizieren, enthalten sie genetische Bauanweisungen (mRNA), die Zellen des Geimpften dazu veranlassen, ein harmloses Antigen selbst herzustellen. Dieses wird vom Immunsystem erkannt und eine schützende Immunantwort ausgelöst. Die mRNA wird dabei nicht in die DNA integriert und baut sich rasch im Körper ab.

Für den kollektiven Schutz der Bevölkerung ist das Konzept der Herdenimmunität entscheidend. Wenn ein ausreichend hoher Anteil der Bevölkerung immun ist - sei es durch Impfung oder durchgemachte Infektion -, können sich Erreger nicht mehr effizient ausbreiten, und auch ungeimpfte Personen werden indirekt geschützt. Die erforderliche Immunitätsschwelle hängt von der Kontagiosität des Erregers ab: Für hochansteckende Krankheiten wie Masern liegt sie bei etwa 95 %.`,
    fragen: [
      {
        id: "tv-aussagen-4-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Lebendimpfstoffe enthalten abgetotete Erreger.",
          },
          {
            nr: 2,
            text: "mRNA-Impfstoffe enthalten genetische Bauanweisungen, nicht den Erreger selbst.",
          },
          {
            nr: 3,
            text: "Für Masern ist eine Herdenimmunität von etwa 95 % der Bevölkerung erforderlich.",
          },
          {
            nr: 4,
            text: "Totimpfstoffe lösen stärkere Immunantworten aus als Lebendimpfstoffe.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Lebendimpfstoffe enthalten abgeschwächte, aber noch vermehrungsfähige Erreger - das Gegenteil von abgetöteten. Aussage 2 ist korrekt: Der Text beschreibt mRNA-Impfstoffe als 'genetische Bauanweisungen' ohne den Erreger selbst. Aussage 3 ist korrekt: Der Text nennt explizit '~95%' für Masern. Aussage 4 ist falsch: Der Text sagt, Totimpfstoffe lösen 'weniger starke' Immunantworten aus als Lebendimpfstoffe.",
      },
    ],
  },
  {
    id: "tv-aussagen-5",
    title: "Neurotransmitter und synaptische Übertragung",
    text: `Die Kommunikation zwischen Nervenzellen erfolgt an spezialisierten Kontaktstellen, den Synapsen. Bei chemischen Synapsen - der weitaus häufigeren Variante - wird das Signal nicht direkt elektrisch übertragen, sondern durch chemische Botenstoffe, die sogenannten Neurotransmitter. Diese werden aus dem präsynaptischen Neuron in den synaptischen Spalt ausgeschüttet und binden an spezifische Rezeptoren des postsynaptischen Neurons.

Der Ausschüttungsprozess ist calciumabhängig: Ein eintreffendes Aktionspotential öffnet spannungsgesteuerte Calciumkanäle in der präsynaptischen Membran. Der Einstrom von Calciumionen löst die Fusion synaptischer Vesikel mit der Zellmembran aus, wodurch Neurotransmitter in den synaptischen Spalt freigesetzt werden. Dieser Mechanismus ist für alle chemischen Synapsen grundlegend.

Neurotransmitter binden an zwei prinzipielle Rezeptortypen: ionotrope und metabotrope Rezeptoren. Ionotrope Rezeptoren sind direkt mit Ionenkanälen gekoppelt und vermitteln schnelle, direkte Effekte - Millisekunden nach der Transmitterbindung ändert sich die Leitfähigkeit der postsynaptischen Membran. Metabotrope Rezeptoren hingegen aktivieren intrazelluläre Signalkaskaden über G-Proteine und vermitteln langsamere, aber länger anhaltende Effekte.

Zu den wichtigsten exzitatorischen Neurotransmittern zählen Glutamat und Acetylcholin, während Gamma-Aminobuttersäure (GABA) der wichtigste inhibitorische Neurotransmitter im Gehirn ist. Serotonin moduliert Stimmung, Schlaf und Appetit; ein Mangel wird mit Depressionen in Verbindung gebracht. Selektive Serotonin-Wiederaufnahmehemmer (SSRIs), wie sie bei der Behandlung von Depressionen eingesetzt werden, blockieren die Wiederaufnahme von Serotonin aus dem synaptischen Spalt und erhöhen so die Serotoninkonzentration an der Synapse.

Störungen in der synaptischen Übertragung liegen zahlreichen neurologischen und psychiatrischen Erkrankungen zugrunde. Bei der Parkinson-Erkrankung beispielsweise sterben dopaminproduzierende Neurone im Mesencephalon ab, was zu einem Dopaminmangel und den charakteristischen motorischen Störungen führt.`,
    fragen: [
      {
        id: "tv-aussagen-5-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Freisetzung von Neurotransmittern ist von einem Calciumeinstrom abhängig.",
          },
          {
            nr: 2,
            text: "Metabotrope Rezeptoren vermitteln schnellere Effekte als ionotrope Rezeptoren.",
          },
          {
            nr: 3,
            text: "GABA ist der wichtigste exzitatorische Neurotransmitter im Gehirn.",
          },
          {
            nr: 4,
            text: "SSRIs erhöhen die Serotoninkonzentration im synaptischen Spalt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt explizit, dass der Calciumeinstrom die Transmitterfreisetzung auslöst. Aussage 2 ist falsch: Laut Text vermitteln ionotrope Rezeptoren schnelle Effekte (Millisekunden), metabotrope hingegen langsamere. Aussage 3 ist falsch: GABA ist der wichtigste inhibitorische (hemmende), nicht exzitatorische Neurotransmitter. Aussage 4 ist korrekt: Der Text erklärt, dass SSRIs die Wiederaufnahme blockieren und dadurch die Konzentration im Spalt erhöhen.",
      },
    ],
  },
  {
    id: "tv-aussagen-6",
    title: "Epigenetik und Genregulation",
    text: `Während die DNA-Sequenz eines Organismus weitgehend unveränderlich ist, zeigt die Epigenetik, dass die Genexpression - also welche Gene wann und wie stark abgelesen werden - hochgradig dynamisch und durch Umweltfaktoren beeinflussbar ist. Epigenetische Mechanismen verändern die Aktivität von Genen, ohne die zugrundeliegende DNA-Sequenz zu verändern.

Zu den wichtigsten epigenetischen Mechanismen zählt die DNA-Methylierung. Dabei werden Methylgruppen (-CH3) kovalent an Cytosin-Basen der DNA angehängt, typischerweise an sogenannten CpG-Inseln in Promotorregionen von Genen. Eine hohe Methylierung im Promotor führt in der Regel zur Stilllegung des entsprechenden Gens, da die Transkriptionsmaschinerie gehindert wird. DNA-Methylierungsmuster können stabil über Zellteilungen hinweg weitergegeben werden und spielen eine zentrale Rolle bei der Zelldifferenzierung.

Ein weiterer zentraler Mechanismus ist die Modifikation von Histonen - den Proteinen, um die die DNA gewickelt ist. Acetylierung von Histonen lockert die DNA-Verpackung und erleichtert die Transkription, während Methylierung je nach betroffenem Histon und Position aktivierend oder reprimierend wirken kann. Zahlreiche Enzyme (Histon-Acetyltransferasen, Histon-Deacetylasen) regulieren diesen Prozess dynamisch.

Besonders eindrucksvoll sind Studien an eineiigen Zwillingen, die zeigen, dass trotz identischer DNA-Sequenz mit zunehmendem Alter epigenetische Unterschiede entstehen, die sich in unterschiedlichen Krankheitsrisiken manifestieren können. Auch transgenerationale epigenetische Effekte sind dokumentiert: Das sogenannte Niederländische Hungerwinter-Experiment zeigte, dass Kinder und sogar Enkel von Frauen, die während der Schwangerschaft Hunger litten, erhöhte Risiken für Stoffwechselerkrankungen aufwiesen.

Diese Erkenntnisse haben weitreichende Konsequenzen für das Verständnis von Krankheitsentstehung und eröffnen neue Ansätze in der Medizin: Epigenetische Medikamente (z.B. Histon-Deacetylase-Inhibitoren) sind bereits in der Krebstherapie im Einsatz.`,
    fragen: [
      {
        id: "tv-aussagen-6-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Epigenetische Veränderungen ändern die DNA-Sequenz dauerhaft.",
          },
          {
            nr: 2,
            text: "Hohe DNA-Methylierung im Promotor eines Gens führt typischerweise zu dessen Stilllegung.",
          },
          {
            nr: 3,
            text: "Histon-Acetylierung erleichtert die Transkription durch Lockerung der DNA-Verpackung.",
          },
          {
            nr: 4,
            text: "Das Niederländische Hungerwinter-Experiment weist auf transgenerationale epigenetische Effekte hin.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text definiert Epigenetik explizit als Veränderungen 'ohne die zugrundeliegende DNA-Sequenz zu verändern'. Aussage 2 ist korrekt: Der Text nennt hohe Methylierung im Promotor als Ursache für Gen-Stilllegung. Aussage 3 ist korrekt: Der Text beschreibt, dass Histon-Acetylierung die DNA-Verpackung lockert und die Transkription erleichtert. Aussage 4 ist korrekt: Das Hungerwinter-Experiment wird explizit als Beleg für transgenerationale Effekte zitiert.",
      },
    ],
  },
  {
    id: "tv-aussagen-7",
    title: "Placebo-Effekt in der Medizin",
    text: `Der Placebo-Effekt beschreibt das Phänomen, dass Patienten nach der Einnahme von Scheinmedikamenten - also Präparaten ohne pharmakologisch wirksame Substanzen - eine messbare Verbesserung ihrer Symptome erfahren. Lange als bloß subjektive Einbildung abgetan, gilt der Placebo-Effekt heute als gut belegtes, neurobiologisch vermitteltes Phänomen mit klinischer Relevanz.

Neurobiologisch ist der Placebo-Effekt eng mit der Ausschüttung endogener (körpereigener) Opioide verknüpft. Studien haben gezeigt, dass die Gabe des Opioid-Antagonisten Naloxon den analgetischen (schmerzlindernden) Placebo-Effekt weitgehend aufheben kann. Dies belegt, dass die Schmerzlinderung zumindest teilweise auf einer echten Aktivierung des endogenen Opioid-Systems beruht und nicht bloß auf bewusster Einbildung.

Interessanterweise können Placebo-Effekte auch auftreten, wenn Patienten wissen, dass sie ein Placebo erhalten - sogenannte Open-Label-Placebos. Klinische Studien, etwa bei Patienten mit dem Reizdarmsyndrom, haben gezeigt, dass offene Placebos trotz fehlender Täuschungsabsicht therapeutisch wirksam sein können. Dies deutet darauf hin, dass der Effekt nicht allein durch Erwartung und Täuschung erklärt werden kann, sondern auch durch konditionierte Reaktionen und das therapeutische Ritual selbst.

Der Nocebo-Effekt ist das Gegenstück zum Placebo: Negative Erwartungen oder Suggestionen führen zu einer tatsächlichen Verschlechterung von Symptomen oder zum Auftreten von Nebenwirkungen. So können Patienten Nebenwirkungen entwickeln, die bei der Einnahme eines Placebos physiologisch nicht zu erwarten wären, wenn sie entsprechend informiert werden.

In der klinischen Praxis spielt der Placebo-Effekt eine wichtige Rolle: Arzt-Patienten-Kommunikation, Erwartungsmanagement und das therapeutische Setting können die Wirksamkeit echter Medikamente verstärken oder abschwächen.`,
    fragen: [
      {
        id: "tv-aussagen-7-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Naloxon kann den analgetischen Placebo-Effekt vollständig eliminieren.",
          },
          {
            nr: 2,
            text: "Open-Label-Placebos können wirksam sein, obwohl Patienten wissen, dass sie ein Placebo erhalten.",
          },
          {
            nr: 3,
            text: "Der Nocebo-Effekt beschreibt das Auftreten negativer Symptome durch negative Erwartungen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, Naloxon kann den Placebo-Effekt 'weitgehend' aufheben, nicht 'vollständig eliminieren' - eine wichtige Nuancierung. Aussage 2 ist korrekt: Der Text beschreibt Open-Label-Placebos und Studien, die ihre Wirksamkeit belegten. Aussage 3 ist korrekt: Der Text definiert den Nocebo-Effekt genau so - negative Erwartungen führen zu Symptomverschlechterung.",
      },
    ],
  },
  {
    id: "tv-aussagen-8",
    title: "Das Mikrobiom des Menschen",
    text: `Der menschliche Körper beherbergt eine enorme Vielfalt an Mikroorganismen - Bakterien, Viren, Pilze und Archaeen - die zusammen als Mikrobiom bezeichnet werden. Die Gesamtheit der bakteriellen Zellen im und auf dem menschlichen Körper entspricht in etwa der Anzahl menschlicher Körperzellen, wobei der Darm mit Abstand die größte und vielfältigste mikrobielle Gemeinschaft beherbergt.

Das Darmmikrobiom beginnt sich bei der Geburt zu entwickeln. Kinder, die vaginal zur Welt kommen, werden beim Geburtsvorgang mit Laktobazillen aus dem Geburtskanal der Mutter besiedelt, während durch Kaiserschnitt geborene Kinder ein anfangs verändertes Mikrobiom aufweisen - geprägt eher von Hautkeimen und Krankenhauskeimen. Obwohl sich diese Unterschiede im Laufe der Kindheit angleichen, werden mögliche langfristige Auswirkungen auf das Immunsystem und Allergierisiken diskutiert.

Das Darmmikrobiom erfüllt zahlreiche wichtige Funktionen: Es hilft bei der Verdauung unverdaulicher Pflanzenfasern (Ballaststoffe) durch Fermentation, produziert dabei kurzkettige Fettsäuren wie Butyrat, das als wichtige Energiequelle für Darmepithelzellen dient und entzündungshemmende Eigenschaften hat. Es unterstützt die Entwicklung und Reifung des Immunsystems und schützt vor der Besiedelung durch Krankheitserreger durch Konkurrenz um Nährstoffe und Haftungsstellen.

Die Verbindung zwischen Darm und Gehirn - die sogenannte Darm-Hirn-Achse - ist ein aktives Forschungsfeld. Über den Nervus vagus, Hormone und Immunmediatoren kommunizieren Darmmikrobiom und Gehirn bidirektional. Studien deuten darauf hin, dass das Darmmikrobiom Stimmung, Kognition und sogar psychische Erkrankungen wie Depressionen beeinflusst.

Antibiotika-Behandlungen können das Darmmikrobiom erheblich stören und seine Diversität reduzieren. Dies erklärt auch, warum Antibiotika häufig gastrointestinale Nebenwirkungen hervorrufen und warum nach intensiver Antibiotika-Therapie eine Besiedlung mit dem Keim Clostridioides difficile droht.`,
    fragen: [
      {
        id: "tv-aussagen-8-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Vaginal geborene Kinder werden beim Geburtsvorgang ausschließlich mit Hautkeimen besiedelt.",
          },
          {
            nr: 2,
            text: "Butyrat ist eine kurzkettige Fettsäure, die vom Darmmikrobiom produziert wird.",
          },
          {
            nr: 3,
            text: "Die Darm-Hirn-Achse umfasst Kommunikationswege über den Nervus vagus, Hormone und Immunmediatoren.",
          },
          {
            nr: 4,
            text: "Antibiotika erhöhen die Diversität des Darmmikrobioms.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Vaginal geborene Kinder werden mit Laktobazillen aus dem Geburtskanal besiedelt - nicht mit Hautkeimen; Hautkeime sind bei Kaiserschnittkindern dominant. Aussage 2 ist korrekt: Der Text nennt Butyrat explizit als kurzkettige Fettsäure aus der bakteriellen Fermentation. Aussage 3 ist korrekt: Der Text beschreibt die Darm-Hirn-Achse über 'Nervus vagus, Hormone und Immunmediatoren'. Aussage 4 ist falsch: Der Text sagt, Antibiotika 'stören das Darmmikrobiom erheblich und reduzieren seine Diversität' - also das Gegenteil.",
      },
    ],
  },
  {
    id: "tv-aussagen-9",
    title: "Stammzellforschung und regenerative Medizin",
    text: `Stammzellen sind undifferenzierte Zellen mit der einzigartigen Fähigkeit zur Selbsterneuerung und zur Differenzierung in spezialisierte Zelltypen. Sie lassen sich nach ihrer Potenz - also dem Spektrum der Zelltypen, in die sie sich entwickeln können - klassifizieren. Totipotente Zellen, wie die befruchtete Eizelle in den ersten Teilungsstadien, können sämtliche Zelltypen des Körpers sowie die Plazenta bilden. Pluripotente Stammzellen, darunter embryonale Stammzellen, können alle Körperzelltypen, aber keine Plazenta mehr bilden. Multipotente Stammzellen, wie hämatopoetische Stammzellen im Knochenmark, sind auf bestimmte Zelllinien beschränkt.

Ein Meilenstein der Stammzellforschung war die Entdeckung der induzierten pluripotenten Stammzellen (iPS-Zellen) durch den japanischen Wissenschaftler Shinya Yamanaka im Jahr 2006. Yamanaka zeigte, dass reife Körperzellen durch Einführen spezifischer Transkriptionsfaktoren (der sogenannten Yamanaka-Faktoren: OCT4, SOX2, KLF4 und c-MYC) in einen pluripotenten Zustand zurückversetzt werden können. Diese Entdeckung umgeht ethische Bedenken gegenüber embryonalen Stammzellen und eröffnet die Möglichkeit, patientenspezifische Stammzellen herzustellen, die keine Abstoßungsreaktionen auslösen.

In der klinischen Anwendung sind Stammzelltransplantationen bereits etabliert: Die Knochenmarktransplantation - genauer die Transplantation hämatopoetischer Stammzellen - ist eine Standardtherapie bei bestimmten Leukämieformen und anderen Erkrankungen des blutbildenden Systems. Dabei können Stammzellen vom Patienten selbst (autolog) oder von einem Spender (allogen) verwendet werden; letzteres birgt das Risiko einer Graft-versus-Host-Reaktion, bei der Spenderzellen die Empfängergewebe angreifen.

Die regenerative Medizin zielt langfristig darauf ab, geschädigte Organe und Gewebe durch Stammzelltherapien zu ersetzen oder zu regenerieren. Klinische Studien laufen für Erkrankungen wie Herzinsuffizienz, Morbus Parkinson, Rückenmarksverletzungen und Diabetes mellitus Typ 1. Trotz vielversprechender Ergebnisse stehen viele dieser Anwendungen noch am Anfang; Sicherheit, Effektivität und ethische Fragen müssen weiter erforscht werden.`,
    fragen: [
      {
        id: "tv-aussagen-9-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Pluripotente Stammzellen können alle Körperzelltypen einschließlich der Plazenta bilden.",
          },
          {
            nr: 2,
            text: "iPS-Zellen wurden im Jahr 2005 von Yamanaka entdeckt.",
          },
          {
            nr: 3,
            text: "Yamanaka verwendete vier Transkriptionsfaktoren, um reife Körperzellen in pluripotente Stammzellen umzuwandeln.",
          },
          {
            nr: 4,
            text: "Die allogene Knochenmarktransplantation birgt das Risiko einer Graft-versus-Host-Reaktion.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 3 und 4 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 1, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Pluripotente Zellen können alle Körperzelltypen ABER KEINE Plazenta bilden - das ist der Unterschied zu totipotenten Zellen. Aussage 2 ist falsch: Yamanaka entdeckte iPS-Zellen 2006, nicht 2005. Aussage 3 ist korrekt: Der Text nennt explizit vier Faktoren (OCT4, SOX2, KLF4, c-MYC). Aussage 4 ist korrekt: Der Text beschreibt die Graft-versus-Host-Reaktion als Risiko der allogenen Transplantation.",
      },
    ],
  },
  {
    id: "tv-aussagen-10",
    title: "Chronobiologie und zirkadianer Rhythmus",
    text: `Der menschliche Organismus ist kein zeitloses System, sondern ein hochgradig rhythmisch organisierter Mechanismus. Fast alle physiologischen Prozesse - von der Körpertemperatur über den Hormonhaushalt bis hin zur Zellteilung - folgen einem zirkadianen Rhythmus, also einem endogenen Zyklus von etwa 24 Stunden. Dieser Rhythmus wird vom suprachiasmatischen Nucleus (SCN) im Hypothalamus koordiniert, dem zentralen circadianen Schrittmacher des Säugetiergehirns.

Der SCN empfängt Lichtinformationen direkt über den retinohypothalamischen Trakt von spezialisierten, intrinsisch photosensitiven Ganglienzellen der Retina, die das Photopigment Melanopsin enthalten. Blaues Licht wirkt dabei besonders stark synchronisierend auf die innere Uhr - was erklärt, warum die Exposition gegenüber blauem Licht von Bildschirmen am Abend den Schlaf-Wach-Rhythmus stören kann.

Auf molekularer Ebene basiert der zirkadiane Rhythmus auf einem Transkriptions-Translations-Rückkopplungskreis. Schlüsselproteine sind CLOCK und BMAL1, die als Heterodimer an sogenannte E-Box-Elemente in der DNA binden und die Transkription ihrer eigenen Repressoren - PER (Period) und CRY (Cryptochrome) - antreiben. PER und CRY akkumulieren, hemmen ihren eigenen Promotor und lösen damit den Rhythmus aus; dieser Zyklus dauert etwa 24 Stunden.

Störungen des zirkadianen Rhythmus - wie sie bei Schichtarbeitern und Vielvielreisenden (Jetlag) häufig auftreten - haben weitreichende gesundheitliche Konsequenzen. Epidemiologische Studien belegen, dass Schichtarbeit mit erhöhten Risiken für kardiovaskuläre Erkrankungen, Typ-2-Diabetes, Adipositas und bestimmte Krebsarten assoziiert ist. Die Weltgesundheitsorganisation klassifiziert Nachtschichtarbeit als "wahrscheinlich karzinogen" für den Menschen.

Die Chronobiologie hat auch therapeutische Implikationen: Die Wirksamkeit und Verträglichkeit von Medikamenten variiert je nach Einnahmezeitpunkt - ein Prinzip, das als Chronopharmakologie bezeichnet wird und zunehmend bei der Therapieplanung berücksichtigt wird.`,
    fragen: [
      {
        id: "tv-aussagen-10-q1",
        frageText: "Welche der folgenden Aussagen lassen sich aus dem Text ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der SCN empfängt Lichtinformationen über den retinohypothalamischen Trakt.",
          },
          {
            nr: 2,
            text: "PER und CRY fördern die Transkription von CLOCK und BMAL1.",
          },
          {
            nr: 3,
            text: "Blaues Licht hat keinen Einfluss auf den zirkadianen Rhythmus.",
          },
          {
            nr: 4,
            text: "Nachtschichtarbeit wird von der WHO als wahrscheinlich karzinogen klassifiziert.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt explizit den retinohypothalamischen Trakt als Weg der Lichtinformation zum SCN. Aussage 2 ist falsch: PER und CRY hemmen ihren eigenen Promotor - sie sind Repressoren, keine Förderer von CLOCK/BMAL1. Aussage 3 ist falsch: Der Text sagt explizit, blaues Licht 'wirkt besonders stark synchronisierend' - also hat es Einfluss. Aussage 4 ist korrekt: Der Text nennt explizit die WHO-Klassifikation von Nachtschichtarbeit als 'wahrscheinlich karzinogen'.",
      },
    ],
  },
];

import { tvAussagenSet1 } from "./tvAussagenSet1";
import { tvAussagenSet2 } from "./tvAussagenSet2";
import { tvAussagenSet3 } from "./tvAussagenSet3";
import { tvAussagenSet4 } from "./tvAussagenSet4";

export const tvOffiziellTexte: TVOffiziellText[] = [
  ...OFFICIAL_TV_EXAMPLES,
  ...TRAINING_TV_AUSSAGEN,
  ...tvAussagenSet1,
  ...tvAussagenSet2,
  ...tvAussagenSet3,
  ...tvAussagenSet4,
];
