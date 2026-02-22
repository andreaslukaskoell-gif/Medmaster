import type { Kapitel } from '../types';

export const bioKap11: Kapitel = {
  id: 'bio-kap11',
  title: 'Immunologie',
  subject: 'biologie',
  icon: '🛡️',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'bio-11-01',
      title: 'Antikörper — Aufbau, Klassen und Effektorfunktionen',
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
          table: {
            headers: ["Klasse", "Vorkommen", "Besonderheiten"],
            rows: [
              ["IgG", "Serum (75%), plazentagängig", "Häufigster Antikörper, Sekundärantwort, überwindet Plazenta (maternaler Schutz)"],
              ["IgA", "Sekrete (Speichel, Muttermilch, Tränen), Serum", "Schützt Schleimhäute, dimerisch in Sekreten"],
              ["IgM", "Serum", "Pentamer (10 Bindestellen), erste Reaktion (Primärantwort), starker Komplementaktivator"],
              ["IgE", "Sehr wenig im Serum", "Bindet Mastzellen und Basophile → Allergie (Typ I), Parasitenabwehr"],
              ["IgD", "B-Zell-Oberfläche", "B-Zell-Aktivierung (Signalübertragung), selten im Serum"],
            ],
          },
        },
        {
          heading: "IgM — Der erste Responder",
          text: "IgM ist das erste Immunglobulin, das bei einer Immunantwort produziert wird (Primärantwort) und ein wichtiger diagnostischer Marker für akute Infektionen. IgM ist ein Pentamer aus fünf Ig-Monomeren, verbunden durch eine J-Kette — es hat daher 10 Antigenbindestellen (decavalent). Dies kompensiert die etwas geringere Affinität jeder einzelnen Bindestelle durch Avididtät (Gesamtbindungsstärke durch viele schwache Bindungen). IgM ist ein besonders starker Komplementaktivator, da pro Antikörper zwei benachbarte Fc-Stücke nötig sind, um C1q zu binden — und IgM bietet viele Fc-Stücke in räumlicher Nähe. IgM kann die Plazenta nicht überwinden (zu groß). Im Serum: IgM-Nachweis → akute Infektion; IgG-Nachweis → durchgemachte Infektion oder Impfung.",
          merksatz: "IgM: Pentamer, 10 Bindestellen, erster Responder (Primärantwort), starker Komplementaktivator, kann Plazenta nicht passieren.",
        },
        {
          heading: "Komplementsystem — Der klassische Aktivierungsweg",
          text: "Das Komplementsystem ist ein kaskadenartiges System aus ca. 30 Plasmaproteinen, das bei der Abwehr von Pathogenen hilft. Der klassische Weg wird durch Antigen-Antikörper-Komplexe aktiviert: C1q bindet an Fc-Regionen von IgG oder IgM, die an Antigen gebunden sind. Aktiviertes C1 spaltet C4 und C2 → C3-Konvertase → spaltet massenhaft C3 → C3b-Ablagerung auf Pathogenoberfläche (Opsonin für Phagozytose) → C5-Konvertase → C5b → C6, C7, C8, C9 assemblieren den Membrane Attack Complex (MAC) → Lochbildung in bakterieller Membran → osmotische Lyse. Nebenprodukte: C3a und C5a sind Anaphylatoxine → Mastzell-Degranulation, Gefäßerweiterung, Neutrophilenrekrutierung (Entzündung).",
          merksatz: "Komplementklassischer Weg: Ag-Ak-Komplex → C1q → C3-Konvertase → C3b (Opsonin) → MAC (Lyse). C3a/C5a = Anaphylatoxine.",
        },
      ],
      diagram: 'immune-response',

      merksätze: [
        "IgG-Aufbau: 2H + 2L Ketten, Disulfidbrücken, Fab (Antigen) + Fc (Effektur). Y-Form.",
        "Ig-Klassen: IgG (häufig, plazentagängig), IgA (Sekrete), IgM (Primär, Pentamer), IgE (Allergie), IgD (B-Zell-Signal).",
        "Effektorfunktionen: Neutralisierung, Opsonisierung (→ Phagozytose), Komplementaktivierung (klassischer Weg → MAC).",
      ],
      klinischerBezug: "Der serologische Nachweis von IgM vs. IgG ist klinisch essenziell: IgM zeigt eine akute Infektion an (z. B. IgM gegen CMV, EBV, Hepatitis A), IgG zeigt eine abgelaufene Infektion oder Immunität nach Impfung (z. B. Hepatitis-B-Oberflächenantikörper IgG nach Impfung). Bei SARS-CoV-2 werden IgG-Antikörper zur Bestimmung des Immunstatus eingesetzt.",
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen Fab- und Fc-Fragment eines Antikörpers und deren jeweilige Funktion.",
        answer: "Das Fab-Fragment (Fragment antigen-binding) enthält die variablen Regionen sowohl der schweren als auch der leichten Kette. Diese variablen Regionen bilden die hochspezifische Antigenbindestelle (CDRs, Complementarity Determining Regions). Die Spezifität des Antikörpers wird durch die Fab-Region bestimmt. Das Fc-Fragment (Fragment crystallizable) enthält die konstanten Regionen der schweren Ketten und vermittelt Effektorfunktionen: Bindung an Fc-Rezeptoren auf Makrophagen und NK-Zellen (Opsonisierung, ADCC), Aktivierung des Komplementsystems (klassischer Weg über C1q), Bindung an die neonatalen Fc-Rezeptoren (Plazentatransfer bei IgG) und Halbwertszeit-Verlängerung (Recycling über FcRn).",
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
          explanation: "IgG besteht aus zwei schweren (H = Heavy) und zwei leichten (L = Light) Ketten. Schwere und leichte Ketten sind durch Disulfidbrücken verbunden, ebenso die zwei schweren Ketten untereinander (Hinge-Region). Das Molekül hat eine Y-Form: Die zwei Arme des Y entsprechen den Fab-Fragmenten (Antigenbindung), der Stamm des Y ist das Fc-Fragment (Effektorfunktionen).",
          hints: [
            "IgG = das 'Standard'-Immunglobulin. Y-Form mit 2+2 Ketten.",
            "Disulfidbrücken verbinden die Ketten — welche Ketten? Schwer-leicht und schwer-schwer.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Patient hat eine akute Hepatitis-A-Infektion. Welcher Antikörpertyp ist diagnostisch für eine akute Infektion?",
          options: [
            "IgG gegen Hepatitis-A-Antigen (HAV-IgG)",
            "IgE gegen Hepatitis-A-Antigen",
            "IgM gegen Hepatitis-A-Antigen (HAV-IgM)",
            "IgA im Stuhl gegen Hepatitis-A",
            "IgD auf B-Lymphozyten gegen Hepatitis-A",
          ],
          correctIndex: 2,
          explanation: "IgM ist das erste Immunglobulin, das bei einer Immunantwort produziert wird (Primärantwort) und zeigt daher eine akute oder kürzlich erfolgte Infektion an. Bei Hepatitis A ist HAV-IgM der Standard-Diagnose-Marker einer akuten Infektion. HAV-IgG erscheint später und bleibt lebenslang als Zeichen der Immunität (nach Infektion oder Impfung) nachweisbar.",
          hints: [
            "Welches Ig kommt als erstes bei einer neuen Infektion? Das ist der Marker für akute Infektion.",
            "IgM = erstes; IgG = später und dauerhaft. Akut → welches?",
          ],
          difficulty: 2,
          tags: [],
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
          explanation: "Opsonisierung ist die Markierung von Krankheitserregern mit Antikörpern (oder Komplementfragmenten wie C3b), um deren Phagozytose durch Makrophagen und neutrophile Granulozyten zu erleichtern. IgG ist das wichtigste Opsonin: Es bindet mit dem Fab-Teil an das Antigen auf der Erregerfläche und wird von Fc-Rezeptoren (FcgR) auf Phagozyten erkannt. Dieser 'Anker' (opsonos = griech. für Zukost / Appetithäppchen) stimuliert die Phagozytose stark.",
          hints: [
            "Opsonin = griechisch für 'Zutat' — Antikörper machen Erreger für Fresszellen schmackhafter.",
            "Phagozytose wird gefördert — was bindet der Phagozyt: das Antigen oder den Antikörper?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Immunglobulin kann die Plazentaschranke überwinden und vermittelt so passiven Schutz des Neugeborenen?",
          options: [
            "IgM (wegen seiner pentameren Größe besonders effektiv)",
            "IgE (wegen seiner hohen Affinität für zelluläre Rezeptoren)",
            "IgG (aktiver Transport über FcRn-Rezeptoren durch die Plazenta)",
            "IgA (über Übertragung in der Muttermilch)",
            "IgD (wegen seiner Signaltransduktionsfunktion)",
          ],
          correctIndex: 2,
          explanation: "IgG ist das einzige Immunglobulin, das aktiv über die Plazenta transportiert wird. Der neonatale Fc-Rezeptor (FcRn) auf Trophoblasten der Plazenta bindet IgG und transportiert es durch Transzytose in die fetale Zirkulation. IgM ist als Pentamer zu groß, um die Plazentaschranke zu überwinden. Die mütterlichen IgG-Antikörper verleihen dem Neugeborenen für die ersten 3–6 Monate passiven Immunschutz (maternale Antikörper), bis das eigene Immunsystem reift.",
          hints: [
            "Der FcRn-Rezeptor auf der Plazenta transportiert welches Ig aktiv?",
            "IgM ist ein Pentamer — kann so ein großes Molekül die Plazenta passieren?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Immunglobulin-Klasse ist hauptsächlich in Sekreten (Speichel, Muttermilch, Darminhalt) zu finden und schützt Schleimhäute?",
          options: [
            "IgG",
            "IgM",
            "IgA",
            "IgE",
            "IgD",
          ],
          correctIndex: 2,
          explanation: "IgA ist das dominante Immunglobulin auf Schleimhäuten und in Sekreten (sekretorisches IgA, sIgA). Es liegt in Sekreten als Dimer vor, verbunden durch J-Kette und eine Sekretorische Komponente (schützt vor proteolytischem Abbau). sIgA verhindert das Anhaften von Pathogenen an Schleimhautzellen (immune exclusion). Über Muttermilch übertragen, schützt es den Säuglingsdarm vor Pathogenen.",
          hints: [
            "Welches Ig ist besonders für den Schutz von Schleimhäuten und Sekreten spezialisiert?",
            "IgA = 'A' wie 'Abwehr auf Schleimhäuten'. In Muttermilch, Speichel, Tränen.",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-11-02',
      title: 'Antikörper-Gene — V(D)J-Rekombination und Diversität',
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
          merksatz: "V(D)J-Rekombination: RAG1/RAG2 schneidet, NHEJ ligiert, TdT fügt N-Nukleotide ein → junctionale Diversität. Nur produktive Rearrangements → B-Zelle überlebt.",
        },
        {
          heading: "Affinitätsreifung in Keimzentren",
          text: "Die Affinitätsreifung findet in Keimzentren der sekundären Lymphorgane (Lymphknoten, Milz) statt. Aktivierte B-Zellen proliferieren intensiv (Zentroblasten) und akkumulieren somatische Mutationen in den V-Regionen ihrer Antikörpergene (somatische Hypermutation durch das Enzym AID, Activation-Induced Cytidine Deaminase). Die mutierten B-Zellen (Zentrozyten) konkurrieren um begrenzte Antigendepots auf follikulären dendritischen Zellen. Nur B-Zellen mit höherer Affinität erhalten Überlebenssignale von follikulären T-Helfer-Zellen (Tfh). Zellen mit geringerer Affinität sterben durch Apoptose. Ergebnis: progressive Selektion von B-Zellen mit immer höherer Antigenaffinität über mehrere Wochen.",
          merksatz: "Affinitätsreifung: B-Zellen in Keimzentren → somatische Hypermutation (AID) → Selektion auf höhere Affinität → IgG der Sekundärantwort hat höhere Affinität.",
        },
      ],
      merksätze: [
        "V(D)J-Rekombination: zufällige Auswahl und Ligation von V, D, J-Segmenten → kombinatorische Diversität. N-Nukleotide (TdT) → junctionale Diversität.",
        "Klonale Selektion (Burnet): Antigen aktiviert B-Zelle mit passendem BCR → klonale Expansion → viele identische Antikörper.",
        "Affinitätsreifung: somatische Hypermutation (AID) in Keimzentren + Selektion → höhere Affinität der Sekundärantikörper.",
      ],
      klinischerBezug: "V(D)J-Rekombinationsfehler sind pathologisch relevant: Fehlerhaftes Rearrangement kann Proto-Onkogene in die Nähe aktiver Immungenpromotoren bringen → Lymphome (z. B. t(8;14) bei Burkitt-Lymphom: c-Myc unter IgH-Promotor). Nachweis von klonalen V(D)J-Rearrangements per PCR wird in der Diagnostik von B-Zell-Lymphomen genutzt (Klonalitätsnachweis).",
      altfrage: {
        question: "Welche drei Hauptquellen der Antikörperdiversität gibt es und wie viele verschiedene Antikörperspezifitäten können theoretisch erzeugt werden?",
        answer: "1. Kombinatorische Diversität: Zufällige Auswahl der V-, D- und J-Gensegmente für schwere und leichte Ketten sowie deren zufällige Paarung — ergibt bis zu ~18 Millionen Kombinationen. 2. Junctionale Diversität: An den Verbindungsstellen der Segmente werden zufällige Nukleotide (N-Nukleotide durch TdT) eingefügt oder durch Exonukleasen entfernt — erhöht die Diversität auf über 10¹⁰. 3. Somatische Hypermutation: In Keimzentren nach Antigenaktivierung mutieren V-Regionen hochfrequent → Affinitätsreifung. Insgesamt können mehr als 10¹⁰ verschiedene Antikörperspezifitäten erzeugt werden.",
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
          explanation: "V(D)J-Rekombination ist eine somatische Rekombination, bei der zufällig ein V-Segment, ein D-Segment und ein J-Segment (für schwere Kette) oder V und J (für leichte Kette) ausgewählt und durch das RAG1/RAG2-Enzym-System ligiert werden. Dieses Zusammensetzen aus Segmenten — nicht die Keimbahn-Mutation — ist der Hauptmechanismus zur Erzeugung der enormen Antikörperdiversität.",
          hints: [
            "V = Variable, D = Diversity, J = Joining. Diese Segmente werden zufällig kombiniert.",
            "Das Ergebnis der Rekombination ist eine individuelle B-Zelle mit einem einzigartigen Antikörper.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum hat die Sekundärantwort (bei erneutem Antigenkontakt) typischerweise schnellere und stärkere Antikörper mit höherer Affinität?",
          options: [
            "Weil das Immunsystem mehr B-Zellen produziert hat",
            "Weil bei der Sekundärantwort IgM produziert wird, das affiner ist als IgG",
            "Weil Gedächtnis-B-Zellen schnell aktiviert werden und Antikörper durch Affinitätsreifung höhere Affinität haben",
            "Weil das Antigen beim zweiten Kontakt bereits neutralisiert ist",
            "Weil die T-Zellen den B-Zellen bei der Sekundärantwort helfen, aber nicht bei der Primärantwort",
          ],
          correctIndex: 2,
          explanation: "Bei der Sekundärantwort werden langlebige Gedächtnis-B-Zellen aktiviert, die: (1) bereits die Reifung durchlaufen haben und schnell zu Plasmazellen differenzieren können, (2) Antikörper produzieren, die durch Affinitätsreifung (somatische Hypermutation in Keimzentren) optimiert wurden und daher höhere Affinität haben als jene der Primärantwort, (3) den Klassenwechsel bereits vollzogen haben (IgG statt IgM). Die Sekundärantwort ist schneller, stärker und affiner.",
          hints: [
            "Was sind Gedächtniszellen, und warum sind sie bei der zweiten Begegnung von Vorteil?",
            "Affinitätsreifung in Keimzentren — welche Zellen haben das bereits durchlaufen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Funktion des Enzyms TdT (Terminal deoxynucleotidyl Transferase) bei der V(D)J-Rekombination?",
          options: [
            "Es spaltet die DNA an Rekombinationssignalsequenzen (RSS)",
            "Es fügt zufällige Nukleotide (N-Nukleotide) an die Verbindungsstellen ein und erhöht so die junctionale Diversität",
            "Es methyliert die Verbindungsstellen nach der Rekombination",
            "Es selektiert die produktiven von den nicht-produktiven Rearrangements",
            "Es aktiviert die somatische Hypermutation in Keimzentren",
          ],
          correctIndex: 1,
          explanation: "TdT (Terminal deoxynucleotidyl Transferase) fügt an den offenen Enden der DNA-Stränge nach dem Schnitt durch RAG1/RAG2 zufällige Nukleotide (N-Nukleotide) ein, ohne eine Matrizenkette zu verwenden. Diese zufällige Insertion kann 1–15 Nukleotide umfassen und ist eine der wichtigsten Quellen junctionaler Diversität, da sie die Leserahmen der Verbindungsstellen verändert und unterschiedliche Aminosäuresequenzen in der Antigenbindestelle erzeugt.",
          hints: [
            "Terminal = am Ende. TdT fügt Nukleotide an die Enden an — ohne Matrize, also zufällig.",
            "N-Nukleotide = Nukleotide ohne Matrizenkopierung (Non-template). Was bewirken zufällige Insertionen?",
          ],
          difficulty: 3,
          tags: [],
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
          explanation: "Die klonale Selektionstheorie (Burnet, 1957) postuliert: (1) Jede B-Zelle trägt bereits vor Antigenkontakt einen einzigartigen BCR (durch V(D)J-Rekombination generiert). (2) Ein Antigen bindet an die B-Zelle mit dem komplementären BCR. (3) Diese spezifische B-Zelle wird aktiviert und klonal expandiert → viele genetisch identische Tochterzellen (ein Klon). (4) Diese Plasmazellen produzieren alle denselben spezifischen Antikörper. Das Antigen 'wählt' (selektiert) also den passenden Klon aus einer bereits vorhandenen Bibliothek.",
          hints: [
            "Klonal = alle Zellen eines Klons sind genetisch identisch. Selektion = das Antigen wählt aus.",
            "Die Antikörper werden nicht nach Antigenexposition neu erfunden — sie existieren bereits. Was macht das Antigen dann?",
          ],
          difficulty: 2,
          tags: [],
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
          explanation: "Somatische Hypermutation ist eine hochfrequente Mutageneserate (10⁵–10⁶ × höher als in normalen Genen) in den V-Regionen der Antikörpergene, die in Keimzentren der sekundären Lymphorgane stattfindet. Das Enzym AID (Activation-Induced Cytidine Deaminase) deaminiert Cytosin → Uracil in einzelsträngiger DNA. Durch Reparaturmechanismen entstehen Punktmutationen in den CDR-Regionen (Antigen-Bindestellen). B-Zellen mit Mutationen die höhere Affinität für das Antigen verleihen, werden selektiert → Affinitätsreifung.",
          hints: [
            "Somatisch = in Körperzellen (nicht Keimbahn), Hyper = extrem häufig. Wo findet die B-Zell-Reifung statt?",
            "AID = Activation-Induced Cytidine Deaminase. Was macht dieses Enzym?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-11-03',
      title: 'Blutgruppen-Vererbung — AB0-System und Kodominanz',
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
          merksatz: "Kodominanz: beide Allele werden exprimiert. AB = I^A I^B → A-Antigen + B-Antigen. Unterschied zu Dominanz/Rezessivität und unvollständiger Dominanz.",
        },
        {
          heading: "Universeller Spender und Empfänger",
          text: "In der klinischen Praxis gilt traditionell: Blutgruppe 0 Rh-negativ (0-) als universeller Spender (keine A-, B- oder D-Antigene auf Erythrozyten → kein Angriff durch Empfänger-Antikörper). Blutgruppe AB Rh-positiv (AB+) als universeller Empfänger (keine Anti-A oder Anti-B im Serum → kein Angriff auf Spendererythrozyten). In der modernen Transfusionsmedizin wird diese Vereinfachung vermieden — durch weitere Blutgruppensysteme (Kell, Duffy, Kidd, Lewis etc.) sind auch 0- und AB+-Blut inkompatibel möglich. Dennoch werden 0-Präparate in Notfallsituationen ohne Kreuzprobe eingesetzt. Pro Jahr werden Millionen von Transfusionen durchgeführt — AB0-Fehler durch Verwechslung sind eine vermeidbare Hauptursache schwerer Transfusionszwischenfälle.",
          merksatz: "0 Rh-: universeller Spender (keine Antigene). AB Rh+: universeller Empfänger (keine Anti-A/B). In der Praxis: immer blutgruppenidentisch transfundieren wenn möglich.",
        },
      ],
      diagram: 'blood-groups',

      merksätze: [
        "AB0-System: 3 Allele (I^A, I^B, i⁰). I^A und I^B kodominant. Blutgruppe 0 = ii⁰ (homozygot rezessiv).",
        "Antikörper: Blutgruppe A → Anti-B; B → Anti-A; AB → keine; 0 → Anti-A und Anti-B.",
        "Transfusion: AB0-kompatibel wählen. 0- = universeller Spender (Notfall). Inkompatibilität → Hämolyse.",
      ],
      klinischerBezug: "AB0-Inkompatibilität bei Transfusion führt zur schwerwiegenden akuten hämolytischen Transfusionsreaktion (ABO-Fehltransfusion): innerhalb von Minuten Hämolyse, DIC (disseminierte intravasale Koagulation), Nierenversagen und Schock. Dies ist einer der häufigsten vermeidbaren Transfusionstode. Konsequenz: Strenge Identifikationsverfahren (Bedside-Test, Kreuzprobe) vor jeder Transfusion.",
      altfrage: {
        question: "Welche Blutgruppen können Eltern mit den Blutgruppen A und B haben, wenn sie ein Kind mit Blutgruppe 0 bekommen?",
        answer: "Das Kind mit Blutgruppe 0 hat den Genotyp i⁰ i⁰ — es hat je ein i⁰-Allel von jedem Elternteil geerbt. Also müssen beide Elternteile mindestens ein i⁰-Allel tragen. Vater Blutgruppe A: muss den Genotyp I^A i⁰ haben (heterozygot). Mutter Blutgruppe B: muss den Genotyp I^B i⁰ haben (heterozygot). Hätte ein Elternteil den Genotyp I^A I^A (homozygot A) oder I^B I^B (homozygot B), könnte kein i⁰-Allel weitergegeben werden und das Kind könnte keine Blutgruppe 0 haben.",
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
          explanation: "Personen mit Blutgruppe A haben A-Antigene auf ihren Erythrozyten und produzieren natürliche Anti-B-Antikörper (primär IgM). Diese Antikörper reagieren gegen B-Antigene fremder Blutgruppen. Anti-A-Antikörper würden die eigenen Erythrozyten angreifen — das wird durch die Selbsttoleranz verhindert. Dieses Muster 'Antikörper gegen das, was man nicht hat' gilt für alle AB0-Blutgruppen.",
          hints: [
            "Merksatz: Man hat Antikörper gegen das, was man NICHT auf seinen Erythrozyten hat.",
            "Blutgruppe A = A-Antigen vorhanden. Welches Antigen fehlt? Und gegen welches bildet man daher Antikörper?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Vater hat Blutgruppe AB, Mutter hat Blutgruppe 0. Welche Blutgruppen können ihre Kinder haben?",
          options: [
            "Nur AB",
            "A, B, AB, oder 0",
            "A oder B (aber nicht AB oder 0)",
            "Nur 0",
            "AB oder 0 (aber nicht A oder B)",
          ],
          correctIndex: 2,
          explanation: "Vater AB: Genotyp I^A I^B — gibt entweder I^A oder I^B weiter. Mutter 0: Genotyp i⁰ i⁰ — gibt immer i⁰ weiter. Mögliche Kinderkombinationen: I^A i⁰ (Blutgruppe A, 50%) oder I^B i⁰ (Blutgruppe B, 50%). Blutgruppe AB (I^A I^B) ist nicht möglich, da die Mutter kein I^A oder I^B besitzt. Blutgruppe 0 (i⁰ i⁰) ist nicht möglich, da der Vater kein i⁰-Allel hat.",
          hints: [
            "Vater AB = I^A I^B. Mutter 0 = i⁰ i⁰. Was kann jeder weitergeben?",
            "Erstellen Sie einen Punnett-Quadrat: I^A und I^B vom Vater × i⁰ von der Mutter.",
          ],
          difficulty: 2,
          tags: [],
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
          explanation: "Kodominanz bedeutet, dass beide Allele vollständig exprimiert werden. Bei I^A I^B-Heterozygoten (Blutgruppe AB) werden sowohl A-Antigen als auch B-Antigen auf den Erythrozyten exprimiert. Beide Glykosyltransferasen (kodiert durch I^A bzw. I^B) sind aktiv und bauen ihre jeweiligen Kohlenhydrate auf die Zelloberfläche. Dies ist kein Intermediärphänotyp, sondern vollständige Expression beider Allele.",
          hints: [
            "Kodominanz = beide werden ausgedrückt, keines überdeckt das andere.",
            "Was ist der Unterschied zwischen AB-Blutgruppe (Kodominanz) und unvollständiger Dominanz (Mittelwert)?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist die Transfusion von Blutgruppe-0-Blut in einen Blutgruppe-A-Patienten sicherer als umgekehrt (A in 0)?",
          options: [
            "Weil Blutgruppe 0 keine Antigene auf den Erythrozyten hat, die vom Anti-A des Empfängers angegriffen werden könnten",
            "Weil Blutgruppe 0 mehr Erythrozyten pro Liter enthält",
            "Weil Blutgruppe A immer Anti-A produziert und sich selbst angreift",
            "Weil Blutgruppe 0 weniger immunogen ist als andere Blutgruppen",
            "Weil der 0-Spender keine Antikörper produziert",
          ],
          correctIndex: 0,
          explanation: "Blutgruppe 0 hat keine A- oder B-Antigene auf den Erythrozyten (i⁰ i⁰ → keine Glykosyltransferase). Ein Blutgruppe-A-Empfänger hat Anti-B-Antikörper, aber keine Anti-A (da er A-Antigene trägt und Self-Toleranz besteht). Transfundierte 0-Erythrozyten werden nicht angegriffen. Umgekehrt: A-Blut in 0-Empfänger → der 0-Patient hat Anti-A → sofortige Hämolyse der A-Erythrozyten.",
          hints: [
            "0-Blut hat keine A- oder B-Antigene. Welche Antikörper hat der A-Empfänger?",
            "Der Empfänger greift Spendererythrozyten an — wenn die keine Antigene haben, gibt es keinen Angriff.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Kind hat Blutgruppe 0. Welche Blutgruppengenotypen können die Eltern NICHT haben?",
          options: [
            "Vater I^A i⁰ und Mutter I^B i⁰",
            "Beide Eltern i⁰ i⁰",
            "Vater I^A I^B und Mutter i⁰ i⁰",
            "Vater I^A i⁰ und Mutter i⁰ i⁰",
            "Beide Eltern I^A i⁰",
          ],
          correctIndex: 2,
          explanation: "Ein Kind mit Blutgruppe 0 hat den Genotyp i⁰ i⁰ — es benötigt ein i⁰-Allel von jedem Elternteil. Ein Vater mit Genotyp I^A I^B hat kein i⁰-Allel — er kann nur I^A oder I^B weitergeben. Selbst wenn die Mutter i⁰ i⁰ ist, erhält das Kind entweder I^A i⁰ (Blutgruppe A) oder I^B i⁰ (Blutgruppe B) — niemals i⁰ i⁰ (Blutgruppe 0). Daher ist die Kombination Vater AB × Mutter 0 ausgeschlossen für ein 0-Kind.",
          hints: [
            "Blutgruppe 0-Kind = i⁰ i⁰. Woher bekommt das Kind jedes i⁰? Vom Vater UND von der Mutter.",
            "Wenn der Vater AB (I^A I^B) ist, hat er kein i⁰. Kann er einem Kind i⁰ weitergeben?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-11-04',
      title: 'Rhesusfaktor — Vererbung, Inkompatibilität und Anti-D',
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
          merksatz: "Rhesus-Inkompatibilität: Rh- Mutter + Rh+ Kind. 1. Schwangerschaft = Sensibilisierung. 2. Schwangerschaft = IgG-Anti-D passiert Plazenta → Hämolyse beim Kind.",
        },
        {
          heading: "Anti-D-Prophylaxe — Wirkmechanismus und Zeitpunkt",
          text: "Die Anti-D-Prophylaxe ist eine der großen Errungenschaften der pränatalen Medizin. Vor ihrer Einführung (1968) war Rhesusinkompatibilität eine der häufigsten Ursachen für perinatale Mortalität. Der Wirkmechanismus basiert auf dem Prinzip der Antikörper-vermittelten Suppression der Immunantwort: Exogen verabreichte Anti-D-IgG-Antikörper binden an Rh+ Erythrozyten in der mütterlichen Zirkulation und führen zu ihrer schnellen Clearance durch Makrophagen der Milz, bevor B-Zellen eine Primärantwort aufbauen können. Der genaue Mechanismus ist nicht vollständig geklärt — möglicherweise spielen auch FcgRIIb (inhibitorische Fc-Rezeptoren auf B-Zellen) eine Rolle. Die Prophylaxe wird in der 28. SSW (pränatale Prophylaxe, da 2% der Mütter sich bereits antepartum sensibilisieren) und innerhalb von 72 Stunden postpartal verabreicht.",
          merksatz: "Anti-D-Prophylaxe: verabreichte Anti-D-IgG → Phagozytose fetaler Rh+ Erythrozyten vor mütterlicher Immunantwort → keine Sensibilisierung. 28. SSW + <72h postpartal.",
        },
      ],
      merksätze: [
        "RhD: dominant (ein Allel reicht für Rh+). Rh- = homozygot dd (RHD-Deletion). 85% Europäer Rh+.",
        "Rhesus-Inkompatibilität: Rh- Mutter → Sensibilisierung → Anti-D IgG → passiert Plazenta → Hämolyse beim Rh+ Kind.",
        "Anti-D-Prophylaxe: 28. SSW und <72h post partum. Verhindert Sensibilisierung durch schnelle Elimination fetaler Rh+ Erythrozyten.",
      ],
      klinischerBezug: "Dank universeller Anti-D-Prophylaxe ist der Morbus haemolyticus neonatorum durch Rh-Inkompatibilität in Industrieländern selten geworden. Restrisiken bestehen bei nicht erkannten Sensibilisierungen (z. B. stille fetomaternale Transfusionen frühzeitig) oder bei nicht-D Rh-Antigenen (Kell, Kidd) ohne verfügbare Prophylaxe.",
      altfrage: {
        question: "Erklären Sie, warum das erste Kind einer Rh-negativen Mutter mit einem Rh-positiven Vater meist nicht vom Morbus haemolyticus neonatorum betroffen ist, das zweite Kind jedoch gefährdet ist.",
        answer: "Beim ersten Kind findet die Sensibilisierung der Rh-negativen Mutter erst am Ende der Schwangerschaft oder bei der Geburt statt (fetomaternale Blutung). In dieser ersten Schwangerschaft bildet die Mutter zunächst Anti-D-IgM-Antikörper, die die Plazenta nicht passieren können (zu groß). Das erste Kind ist daher kaum betroffen. Nach der Geburt entwickelt die Mutter IgG-Anti-D-Antikörper (Gedächtnis-B-Zellen). Bei einer zweiten Schwangerschaft mit Rh+ Fetus können diese IgG-Anti-D die Plazenta passieren und fetale Erythrozyten lysieren → Morbus haemolyticus neonatorum.",
      },
      selfTest: [
        {
          question: "Eine Rh-negative Frau ist zum ersten Mal schwanger mit einem Rh-positiven Kind. Was sollte prophylaktisch unternommen werden?",
          options: [
            "Keine Maßnahmen nötig, da das erste Kind nicht gefährdet ist",
            "Sofortige Transfusion mit Rh-positivem Blut zur Desensibilisierung",
            "Anti-D-Immunglobulin in der 28. SSW und innerhalb von 72 Stunden nach der Geburt",
            "Nur Transfusion nach der Geburt, wenn das Kind Anämie zeigt",
            "Kortikosteroide zur Suppression der Immunantwort der Mutter",
          ],
          correctIndex: 2,
          explanation: "Die Standard-Anti-D-Prophylaxe bei Rh-negativen Müttern mit Rh-positivem Kind umfasst: pränatale Gabe in der 28. SSW (verhindert antepartale Sensibilisierung durch stille fetomaternale Bluttransfusionen) und postpartale Gabe innerhalb von 72 Stunden nach Geburt (verhindert Sensibilisierung durch peripartale fetomaternale Blutung). Ohne Prophylaxe würde die Mutter Anti-D-Antikörper bilden und eine folgende Schwangerschaft gefährdet.",
          hints: [
            "Anti-D-Prophylaxe verhindert die Sensibilisierung — wann droht Sensibilisierung?",
            "28. SSW (präpartal) und <72h postpartal. Beide Zeitpunkte sind wichtig.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum kann Anti-D-IgG im Gegensatz zu Anti-D-IgM die Plazenta passieren und beim Feten Hämolyse verursachen?",
          options: [
            "Weil IgG kleiner ist als IgM und durch einfache Diffusion passiert",
            "Weil IgG durch den neonatalen Fc-Rezeptor (FcRn) aktiv durch die Plazenta transportiert wird; IgM ist als Pentamer zu groß",
            "Weil IgM durch Komplement aktiviert wird und dann die Plazenta nicht mehr passieren kann",
            "Weil IgG eine höhere Affinität für D-Antigene hat als IgM",
            "Weil IgM nur in der Milz produziert wird und nicht in die Zirkulation gelangt",
          ],
          correctIndex: 1,
          explanation: "IgG wird aktiv durch den neonatalen Fc-Rezeptor (FcRn) auf Trophoblasten der Plazenta transportiert — dieser Mechanismus dient normalerweise dem maternalen Schutz des Neugeborenen. IgM ist ein Pentamer mit einem Molekulargewicht von ca. 900 kDa — zu groß für den FcRn-Transport und für passive Diffusion durch die Plazentaschranke. Daher ist in der ersten Schwangerschaft (wenn hauptsächlich IgM gebildet wird) das Kind kaum gefährdet, in der zweiten (IgG dominiert) gefährdet.",
          hints: [
            "Welches Ig passiert die Plazenta und schützt das Neugeborene? Und wie?",
            "IgM als Pentamer — ist das groß oder klein? Kann ein so großes Molekül die Plazenta passieren?",
          ],
          difficulty: 2,
          tags: [],
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
          explanation: "Das D-Antigen (Rh-D) wird autosomal dominant vererbt: Ein einziges funktionales RHD-Allel reicht aus, um das D-Antigen zu exprimieren (Rh-positiv). Rh-positiv kann daher homozygot (DD) oder heterozygot (Dd) sein. Rh-negativ (dd) tritt nur bei Homozygotie für das nicht-funktionale Allel auf (in Europa meist Deletion des RHD-Gens). Ca. 85% der Europäer sind Rh+ (DD oder Dd), 15% sind Rh- (dd).",
          hints: [
            "Dominant = ein Allel reicht aus für die Merkmalsexpression. Rh+ kann dd-Individuum sein? Nein, d ist das rezessive Allel.",
            "Wenn 85% Rh+ sind, wie viele können homozygot RhD+ (DD) oder heterozygot (Dd) sein?",
          ],
          difficulty: 2,
          tags: [],
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
          explanation: "Anti-D-IgG-Immunglobulin bindet an Rh-D-Antigene auf fetalen Rh+ Erythrozyten in der mütterlichen Zirkulation (die während fetomaternaler Bluttransfusion eingetreten sind). Die IgG-markierten Erythrozyten werden schnell durch Makrophagen der Milz phagozytiert und eliminiert — bevor das mütterliche Immunsystem eine primäre Immunantwort (Sensibilisierung → B-Zell-Aktivierung → Anti-D-Produktion) aufbauen kann. Passiv verabreichte Antikörper 'löschen' also das Antigen, bevor die aktive Immunisierung beginnt.",
          hints: [
            "Passive Immunisierung verhindert aktive Immunisierung — wie? Das Antigen muss verschwinden, bevor eine Reaktion entsteht.",
            "Anti-D bindet Rh+ Erythrozyten → was passiert dann mit markierten Erythrozyten im Körper?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Rh-negative Mutter hat bereits drei Rh-positive Kinder, war aber nie prophylaktisch behandelt. Ihr viertes Kind kommt mit schwerem Hydrops fetalis und Anämie zur Welt. Was hat die Mutter?",
          options: [
            "IgM-Anti-D-Antikörper, die die Plazenta passiert haben",
            "IgG-Anti-D-Antikörper, die durch Sensibilisierung in früheren Schwangerschaften entstanden sind und die Plazenta passiert haben",
            "IgE-Anti-D-Antikörper, die eine allergische Reaktion beim Kind auslösen",
            "Fehlende Antikörper — der Hydrops hat eine andere Ursache",
            "IgA-Anti-D-Antikörper aus der Muttermilch",
          ],
          correctIndex: 1,
          explanation: "Durch die unbehandelten früheren Rh+ Schwangerschaften hat die Mutter IgG-Anti-D-Antikörper gebildet (Sensibilisierung nach fetomaternalen Bluttransfusionen, besonders bei Geburten). IgG-Anti-D passiert die Plazenta über FcRn-Transport und bindet an die Rh+ Erythrozyten des Feten → Hämolyse → schwere Anämie → extralobuläre Erythropoese → Hydrops fetalis. Dies ist der klassische Morbus haemolyticus neonatorum, der durch Anti-D-Prophylaxe hätte verhindert werden können.",
          hints: [
            "Mehrere ungeschützte Rh+ Schwangerschaften → Sensibilisierung mit zunehmenden IgG-Anti-D-Titern.",
            "Welches Ig passiert die Plazenta und ist mit zunehmenden Schwangerschaften stärker?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
