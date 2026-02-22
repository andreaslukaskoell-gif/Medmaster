import type { Kapitel } from '../types';

export const chemKap12: Kapitel = {
  id: 'chem-kap12',
  title: "Organische Chemie",
  subject: 'chemie',
  icon: '🫧',
  estimatedTime: '75 min',
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────
    // UK 01 — Kohlenwasserstoffe: Alkane, Alkene, Alkine
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch-12-01',
      title: "Kohlenwasserstoffe — Alkane, Alkene, Alkine",
      content: `# Kohlenwasserstoffe — Alkane, Alkene, Alkine

Die organische Chemie befasst sich mit Verbindungen des Kohlenstoffs. Der Kohlenstoff ist einzigartig, weil er stabile Ketten und Ringe bilden kann (Katenation). Kohlenwasserstoffe (KW) enthalten ausschließlich C- und H-Atome und bilden die Grundgerüste aller organischen Verbindungen.

## Alkane — gesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ₊₂

Alkane besitzen ausschließlich C-C-Einfachbindungen (σ-Bindungen). Sie sind gesättigt, das heißt, sie können keine weiteren Atome aufnehmen. Alle Kohlenstoffatome sind sp³-hybridisiert und bilden eine tetraederförmige Anordnung mit einem Bindungswinkel von 109,5°.

**Eigenschaften:**
Alkane sind unpolare Moleküle. Die einzigen intermolekularen Wechselwirkungen sind schwache van-der-Waals-Kräfte (London-Dispersionskräfte). Mit steigender Molekülgröße wächst die Kontaktfläche und damit die Stärke dieser Kräfte — der Siedepunkt steigt. Methan ist bei Raumtemperatur gasförmig, Pentan ist flüssig, Heptan und größere Alkane sind ölige Flüssigkeiten.

**Typische Reaktion:** Radikalische Substitution
Alkane reagieren unter UV-Licht oder hohen Temperaturen mit Halogenen. Dabei wird ein H-Atom durch ein Halogenatom ersetzt:
CH₄ + Cl₂ → CH₃Cl + HCl
Die Reaktion läuft über drei Phasen: Kettenstart (Cl₂ → 2 Cl•), Kettenfortpflanzung (Cl• + CH₄ → CH₃• + HCl; CH₃• + Cl₂ → CH₃Cl + Cl•), Kettenabbruch.

## Alkene — einfach ungesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ

Alkene enthalten mindestens eine C=C-Doppelbindung, bestehend aus einer σ- und einer π-Bindung. Die beteiligten C-Atome sind sp²-hybridisiert, der Bindungswinkel beträgt 120°. Die π-Bindung ist energiereicher und reaktiver als die σ-Bindung.

**Typische Reaktion:** Elektrophile Addition (Additionsreaktion)
Das elektronenreiche π-System greift elektrophile Reagenzien an:
C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-Dibromethan)

**Bromwasser-Nachweis:** Bromwasser (orange) entfärbt sich bei Anwesenheit einer Doppelbindung — die klassische Nachweisreaktion für Alkene und Alkine.

**Markovnikov-Regel:** Bei der Addition von HX an ein asymmetrisches Alken addiert das H an das C-Atom mit mehr H-Atomen (das H-ärmere C erhält X).

## Alkine — zweifach ungesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ₋₂

Alkine besitzen eine C≡C-Dreifachbindung (eine σ- und zwei π-Bindungen). Die Kohlenstoffatome sind sp-hybridisiert, das Molekül ist linear (180°). Alkine reagieren ebenfalls durch elektrophile Addition, können aber zwei Äquivalente des Additionspartners aufnehmen.

**Wichtigstes Alkin:** Ethin (Acetylen, C₂H₂) — wird zum Autogenschweißen genutzt.

## Siedepunkte und Van-der-Waals-Kräfte

In der homologen Reihe der Alkane gilt: Je länger die Kette und je verzweigter die Struktur, desto kleiner die Oberfläche und desto geringer der Siedepunkt bei gleicher Summenformel. n-Pentan (Sdp. 36°C) siedet höher als Neopentan (Sdp. 9,5°C) — obwohl beide C₅H₁₂ haben — weil n-Pentan eine größere Kontaktfläche hat.

## Klinischer Bezug

Kohlenwasserstoffe spielten historisch als Narkosemittel eine Rolle (Chloroform, Diethylether). Ethanol (ein alkoholischer KW-Abkömmling) wird im Körper über Acetaldehyd zur Essigsäure abgebaut (Alkoholdehydrogenase → Aldehyddehydrogenase). Kohlenwasserstoffe in der Atemluft (z.B. Ethan, Pentan) gelten als Biomarker für oxidativen Stress.
`,
      lernziele: [
        "Die allgemeinen Formeln CₙH₂ₙ₊₂ (Alkane), CₙH₂ₙ (Alkene) und CₙH₂ₙ₋₂ (Alkine) kennen und anwenden.",
        "Die IUPAC-Namen der ersten 10 Alkane (Methan bis Decan) auswendig beherrschen.",
        "Den Zusammenhang zwischen Kettenlänge, van-der-Waals-Kräften und Siedepunkt erklären.",
        "Die radikalische Substitution (Alkane) und die elektrophile Addition (Alkene/Alkine) als typische Reaktionen benennen.",
        "Den Bromwasser-Test als Nachweis für Doppelbindungen erklären und die Markovnikov-Regel anwenden.",
      ],
      sections: [
        {
          heading: "Hybridisierung und Bindungswinkel",
          text: "Alkane: sp³-Hybridisierung, Tetraedergeometrie, Bindungswinkel 109,5°. Alkene: sp²-Hybridisierung, trigonal-planare Geometrie, Bindungswinkel 120°. Alkine: sp-Hybridisierung, lineare Geometrie, Bindungswinkel 180°. Die Hybridisierung bestimmt die Geometrie und die Reaktivität: mehr p-Charakter (sp > sp² > sp³) bedeutet kürzere, stärkere, aber reaktivere π-Bindungen.",
          merksatz: "sp³ = gesättigt (Alkan), sp² = eine Doppelbindung (Alken), sp = Dreifachbindung (Alkin). Mehr π-Bindungen = mehr Reaktivität.",
        },
        {
          heading: "Radikalische Substitution vs. elektrophile Addition",
          text: "Alkane gehen radikalische Substitutionen ein, weil ihre C-H-Bindungen homolytisch gespalten werden können. Alkene und Alkine bevorzugen elektrophile Additionen, weil ihre π-Elektronen nucleophil wirken und Elektrophile angreifen. Diese grundlegenden Reaktionsprinzipien sind für den MedAT-H essentiell.",
          merksatz: "Alkan + Halogen/UV → Substitution (ein H raus, Halogen rein). Alken + Br₂ → Addition (Bromwasser entfärbt sich). Merke: Gesättigte substituieren, ungesättigte addieren.",
        },
        {
          heading: "Homologe Reihe und Siedepunkte",
          text: "Eine homologe Reihe ist eine Gruppe organischer Verbindungen, die sich durch eine CH₂-Gruppe unterscheiden. In der Alkan-Reihe steigen die Siedepunkte pro CH₂-Einheit um ca. 20-30°C. Die Siedepunkte hängen von den van-der-Waals-Kräften ab: Methan (-162°C), Ethan (-89°C), Propan (-42°C), Butan (-1°C), Pentan (36°C), Hexan (69°C), Heptan (98°C), Octan (126°C).",
          merksatz: "Mehr C-Atome → größere Moleküloberfläche → stärkere van-der-Waals-Kräfte → höherer Siedepunkt. Verzweigung verkleinert die Oberfläche und senkt den Siedepunkt.",
        },
        {
          heading: "IUPAC-Namen der ersten 10 Alkane",
          text: "Die Homologe Reihe der Alkane (auswendig lernen!):",
          table: {
            headers: ["n", "Name", "Formel"],
            rows: [
              ["1", "Methan", "CH₄"],
              ["2", "Ethan", "C₂H₆"],
              ["3", "Propan", "C₃H₈"],
              ["4", "Butan", "C₄H₁₀"],
              ["5", "Pentan", "C₅H₁₂"],
              ["6", "Hexan", "C₆H₁₄"],
              ["7", "Heptan", "C₇H₁₆"],
              ["8", "Octan", "C₈H₁₈"],
              ["9", "Nonan", "C₉H₂₀"],
              ["10", "Decan", "C₁₀H₂₂"],
            ]
          }
        },
      ],
      diagram: 'functional-groups',

      merksätze: [
        "Alkane: CₙH₂ₙ₊₂ — gesättigt, nur Einfachbindungen, reagieren durch radikalische Substitution.",
        "Alkene: CₙH₂ₙ — eine Doppelbindung, reagieren durch elektrophile Addition.",
        "Alkine: CₙH₂ₙ₋₂ — Dreifachbindung, reaktiver als Alkene.",
        "Die ersten 10 Alkane: Met-Eth-Prop-But-Pent-Hex-Hept-Oct-Non-Dec.",
        "Bromwassertest: Entfärbung von Bromwasser zeigt eine C=C- oder C≡C-Bindung an.",
        "Siedepunkte in der homologen Reihe: mit steigender Kettenlänge steigen die van-der-Waals-Kräfte und damit der Siedepunkt.",
        "Markovnikov-Regel: H geht an das C-Atom mit mehr H-Atomen (H wandert zur H-reichen Seite).",
        "sp³ (Alkan) → Tetraeder (109,5°); sp² (Alken) → planar (120°); sp (Alkin) → linear (180°).",
        "Alkane sind unpolar und hydrophob — daher nicht mit Wasser mischbar (außer kleine Moleküle unter Druck).",
        "Ethin (Acetylen, C₂H₂) = einfachstes Alkin; sp-hybridisiert, lineares Molekül.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie die radikalische Halogenierung von Methan und beschreiben Sie die drei Phasen der Kettenreaktion.",
        answer: "Die radikalische Halogenierung ist eine Substitutionsreaktion, bei der ein Wasserstoffatom eines Alkans durch ein Halogenatom ersetzt wird. Sie wird durch UV-Licht oder hohe Temperaturen initiiert und läuft als Kettenreaktion in drei Phasen ab. In der Startphase (Initiation) wird die Halogenmolekülbindung homolytisch gespalten: Cl₂ → 2 Cl•. Dabei entstehen hochreaktive Chlorradikale. In der Fortpflanzungsphase (Propagation) reagiert das Chlorradikal mit Methan: Cl• + CH₄ → •CH₃ + HCl (ein neues Methylradikal entsteht). Dann: •CH₃ + Cl₂ → CH₃Cl + Cl• (ein neues Chlorradikal regeneriert). Diese zwei Schritte wiederholen sich tausende Male, weshalb aus einem Cl•-Radikal viele Produktmoleküle entstehen. In der Abbruchphase (Termination) rekombinieren zwei Radikale miteinander: Cl• + Cl• → Cl₂; •CH₃ + Cl• → CH₃Cl; •CH₃ + •CH₃ → C₂H₆. Da Methan vier gleichwertige H-Atome hat, entsteht zunächst nur Chlormethan. Bei Überschuss an Cl₂ können auch Di-, Tri- und Tetrachlormethan entstehen (stufenweise Substitution). Die Reaktion ist für Alkane typisch, weil sie keine reaktiven π-Elektronen besitzen.",
      },
      klinischerBezug: "Ethan und Pentan im Ausatemluft gelten als Biomarker für oxidativen Stress (Lipidperoxidation). Ethanol wird hepatisch über Acetaldehyd zur Essigsäure (Acetat) abgebaut; der Acetaldehyd ist für den Kater-Effekt verantwortlich.",
      selfTest: [
        {
          question: "Was ist die allgemeine Summenformel der Alkane?",
          options: [
            "CₙH₂ₙ₊₂",
            "CₙH₂ₙ",
            "CₙH₂ₙ₋₂",
            "CₙH₂ₙ₊₁",
            "CₙHₙ",
          ],
          correctIndex: 0,
          explanation: "Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich C-C-Einfachbindungen. Jedes C-Atom bildet vier Bindungen. An einem endständigen C sitzen 3 H-Atome, an einem Mittel-C je 2 H-Atome. Die Ableitung: CₙH₂ₙ₊₂. Prüfung: Methan CH₄ (n=1: 2·1+2=4 ✓), Ethan C₂H₆ (n=2: 2·2+2=6 ✓), Propan C₃H₈ (n=3: 2·3+2=8 ✓).",
          hints: ["Alkane sind gesättigt — denke an die maximale Anzahl H-Atome pro C.", "Methan CH₄ hat 1 C und 4 H: passt welche Formel?"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welcher Name bezeichnet das Alkan mit 7 Kohlenstoffatomen?",
          options: [
            "Hexan",
            "Octan",
            "Heptan",
            "Nonan",
            "Pentan",
          ],
          correctIndex: 2,
          explanation: "Die IUPAC-Namen der Alkane: C1=Methan, C2=Ethan, C3=Propan, C4=Butan, C5=Pentan, C6=Hexan, C7=Heptan, C8=Octan, C9=Nonan, C10=Decan. Die griechischen Präfixe spiegeln die Kohlenstoffanzahl wider: Hepta- = 7. Heptan (C₇H₁₆) ist eine farblose Flüssigkeit (Siedepunkt 98°C) und Bestandteil von Benzin.",
          hints: ["Die Namen basieren auf griechischen Zahlwörtern: hexa=6, hepta=7, okta=8.", "Merkhilfe: Met-Eth-Prop-But-Pent-Hex-Hept-Oct-Non-Dec"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie wird der Nachweis einer C=C-Doppelbindung mit Bromwasser durchgeführt, und was ist das Ergebnis?",
          options: [
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein weißer Niederschlag",
            "Bromwasser wird zugegeben; bei Doppelbindung entfärbt sich die orange Lösung",
            "Bromwasser wird zugegeben; bei Doppelbindung färbt sich die Lösung blau",
            "Bromwasser wird zugegeben; bei Doppelbindung steigt die Temperatur messbar an",
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein Gas",
          ],
          correctIndex: 1,
          explanation: "Der Bromwassertest ist der klassische Nachweis für ungesättigte Verbindungen (Alkene, Alkine). Bromwasser ist eine orange-braune Lösung von Br₂ in Wasser. Bei Kontakt mit einem Alken addiert Br₂ an die C=C-Doppelbindung (elektrophile Addition): R-CH=CH-R + Br₂ → R-CHBr-CHBr-R. Da das Br₂ verbraucht wird, verschwindet die orange Farbe (Entfärbung). Gesättigte Verbindungen (Alkane) reagieren unter diesen Bedingungen nicht mit Bromwasser — keine Entfärbung.",
          hints: ["Brom ist orange-braun. Was passiert, wenn es reagiert und verbraucht wird?", "Alkene reagieren durch Addition — das Br₂ wird in das Produkt eingebaut."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Reaktion ist typisch für Alkane?",
          options: [
            "Elektrophile Addition",
            "Nucleophile Substitution",
            "Eliminierung",
            "Radikalische Substitution",
            "Elektrophile aromatische Substitution",
          ],
          correctIndex: 3,
          explanation: "Alkane haben keine reaktiven Funktionalitäten (keine π-Elektronen, keine freien Elektronenpaare). Sie reagieren daher kaum. Die wichtigste Reaktion ist die radikalische Halogenierung unter UV-Licht oder hohen Temperaturen, bei der ein H-Atom durch ein Halogenatom ersetzt wird. Die Reaktion läuft über Radikale (homolytische Bindungsspaltung) in drei Phasen: Start, Fortpflanzung, Abbruch. Elektrophile Addition ist typisch für Alkene (π-Elektronen), nicht für Alkane.",
          hints: ["Alkane haben nur σ-Bindungen — keine π-Elektronen. Was für eine Reaktion braucht keine Elektrophile?", "UV-Licht kann Bindungen homolytisch spalten und Radikale erzeugen."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Hybridisierung haben die C-Atome in Ethen (C₂H₄)?",
          options: [
            "sp³",
            "sp²",
            "sp",
            "sp³d",
            "d²sp³",
          ],
          correctIndex: 1,
          explanation: "In Ethen (H₂C=CH₂) sind die C-Atome sp²-hybridisiert. Drei sp²-Hybridorbitale bilden die σ-Gerüstbindungen (120° Winkel, trigonal-planar). Das verbleibende unhybridisierte p-Orbital steht senkrecht zur Molekülebene und bildet mit dem benachbarten p-Orbital die π-Bindung. Zum Vergleich: sp³ (Alkan, Tetraeder, 109,5°), sp (Alkin, linear, 180°). Die sp²-Hybridisierung erklärt die planare Struktur der Doppelbindung und die cis/trans-Isomerie.",
          hints: ["Zähle die σ-Bindungspartner + freie Elektronenpaare am C von Ethen: das gibt die Hybridisierung.", "sp³=4, sp²=3, sp=2 σ-Bindungsgruppen."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Das Alkan Butan (C₄H₁₀) hat zwei Konstitutionsisomere. Welches hat den niedrigeren Siedepunkt?",
          options: [
            "n-Butan (unverzweigt), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es kugelförmiger und die Oberfläche kleiner ist",
            "Beide haben den gleichen Siedepunkt, da gleiche Summenformel",
            "n-Butan, weil es leichter ist",
          ],
          correctIndex: 2,
          explanation: "Beide Isomere (n-Butan und 2-Methylpropan/Isobutan) haben C₄H₁₀ und das gleiche Molekulargewicht. Der Siedepunkt wird durch die Stärke der van-der-Waals-Kräfte bestimmt, die von der Moleküloberfläche abhängt. n-Butan ist gestreckt (größere Oberfläche, Sdp. -1°C), 2-Methylpropan ist kompakter/kugelförmiger (kleinere Oberfläche, Sdp. -12°C). Mehr Verzweigung → kleinere Oberfläche → schwächere van-der-Waals-Kräfte → niedrigerer Siedepunkt. Dieser Effekt ist prüfungsrelevant!",
          hints: ["Van-der-Waals-Kräfte sind oberflächenabhängig. Welches Molekül hat mehr Kontaktfläche?", "Streckt man ein Molekül aus, wird die Oberfläche größer — mehr Kontakt mit Nachbarmolekülen möglich."],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was ist das Hauptprodukt bei der Addition von HBr an Propen (CH₃-CH=CH₂) nach der Markovnikov-Regel?",
          options: [
            "1-Brompropan (Br an C1)",
            "2-Brompropan (Br an C2)",
            "1,2-Dibrompropan",
            "Propan",
            "Propin",
          ],
          correctIndex: 1,
          explanation: "Die Markovnikov-Regel besagt: Bei der Addition von HX an ein asymmetrisches Alken addiert das H an das C-Atom mit den meisten H-Atomen (das elektronenreichere C), das X an das C-Atom mit weniger H-Atomen. Bei Propen (CH₃-CH=CH₂): C1 der Doppelbindung hat 2 H (=CH₂), C2 hat 1 H (-CH=). Nach Markovnikov: H an C1, Br an C2 → 2-Brompropan (CH₃-CHBr-CH₃). Mechanistisch entsteht das stabilere Carbokation (sekundär > primär) als Zwischenstufe.",
          hints: ["Markovnikov: 'Das Reiche wird reicher' — H geht zur H-reichen Seite.", "Das stabilere Carbokation (sekundär > primär) bestimmt das Hauptprodukt."],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 02 — Isomerie und Stereochemie
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch-12-02',
      title: "Isomerie und Stereochemie",
      content: `# Isomerie und Stereochemie

Isomere sind Verbindungen mit gleicher Summenformel aber unterschiedlicher Struktur. Das Konzept der Isomerie ist grundlegend für das Verständnis biologischer Aktivität, da oft nur ein Isomer eine spezifische Wirkung hat.

## Konstitutionsisomere (Strukturisomere)

Konstitutionsisomere unterscheiden sich in der Reihenfolge (Konnektivität) der Atome. Sie haben die gleiche Summenformel, aber verschiedene Bindungspartner.

**Beispiele:**
- Butan (CH₃-CH₂-CH₂-CH₃) und 2-Methylpropan ((CH₃)₂CH-CH₃) — beide C₄H₁₀
- Ethanol (CH₃-CH₂-OH) und Dimethylether (CH₃-O-CH₃) — beide C₂H₆O
- Die Anzahl der Strukturisomere wächst mit der Molekülgröße stark an: C₄H₁₀ → 2 Isomere, C₅H₁₂ → 3 Isomere, C₆H₁₄ → 5 Isomere

## Stereoisomere

Stereoisomere haben die gleiche Konnektivität, unterscheiden sich aber in der räumlichen Anordnung der Atome. Sie unterteilen sich in:

### cis/trans-Isomerie (Z/E-Isomerie)

Tritt auf bei C=C-Doppelbindungen oder in Ringen, wenn an beiden Doppelbindungsatomen zwei verschiedene Substituenten hängen. Die freie Drehbarkeit ist durch die π-Bindung blockiert.

- **cis** (Z, zusammen): gleiche/ähnliche Substituenten auf der gleichen Seite
- **trans** (E, entgegengesetzt): gleiche/ähnliche Substituenten auf gegenüberliegenden Seiten

Für die Z/E-Nomenklatur werden Prioritäten nach CIP-Regeln vergeben: höhere Ordnungszahl = höhere Priorität.

**Beispiel:** cis-2-Buten und trans-2-Buten sind verschiedene Verbindungen mit unterschiedlichen Eigenschaften (cis: Sdp. 3,7°C; trans: Sdp. 0,9°C).

### Chiralität und R/S-Isomerie (Enantiomere)

Ein Kohlenstoffatom ist chiral (stereogenes Zentrum), wenn es vier verschiedene Substituenten trägt. Das Molekül ist dann nicht mit seinem Spiegelbild identisch (nicht superponierbar).

**Merke:** Chiral = asymmetrisch = vier verschiedene Gruppen am C-Atom.

**Enantiomere** sind nicht superponierbare Spiegelbilder. Sie haben:
- Gleiche physikalische Eigenschaften (Siedepunkt, Schmelzpunkt, Löslichkeit)
- Gleiche chemische Eigenschaften in achiraler Umgebung
- Verschiedene optische Aktivität: drehen polarisiertes Licht in entgegengesetzte Richtungen (+/- oder d/l)
- Verschiedene biologische Wirkung (da Enzyme/Rezeptoren chiral sind!)

**L-/D-System (Aminosäuren und Zucker):**
- Vergleich mit L-Glycerinaldehyd als Referenz
- Proteinogene Aminosäuren: alle L-Konfiguration
- Glucose im Stoffwechsel: D-Form

**R/S-System (CIP-Nomenklatur):**
1. Priorität nach Ordnungszahl zuweisen
2. Gruppe mit niedrigster Priorität nach hinten drehen
3. Drehen von 1→2→3: im Uhrzeigersinn = R (rectus), gegen Uhrzeigersinn = S (sinister)

## Racemisch und meso-Verbindungen

- **Racemisches Gemisch:** 1:1-Gemisch aus R- und S-Enantiomer; optisch inaktiv (Drehungen heben sich auf)
- **Meso-Verbindung:** Molekül mit Chiralitätszentren, aber innerer Spiegelebene → optisch inaktiv

## Diastereomere

Stereoisomere, die keine Spiegelbilder sind. Bei 2 Chiralitätszentren: bis zu 4 Stereoisomere (2ⁿ-Regel, n = Anzahl der Chiralitätszentren). Diastereomere unterscheiden sich in physikalischen Eigenschaften.

## Klinische Relevanz der Chiralität

Die biologische Bedeutung der Isomerie ist enorm: Enzyme, Rezeptoren und Transportproteine sind chiral und erkennen Enantiomere unterschiedlich.

**Thalidomid (Contergan):** R-Enantiomer wirkt als Sedativum; S-Enantiomer ist teratogen (verursacht Missbildungen). Tragisch: Im Körper interkonvertieren beide Formen!
**Ibuprofen:** S(+)-Ibuprofen ist der aktive Wirkstoff; R(-)-Ibuprofen ist deutlich schwächer wirksam (wird aber in vivo teilweise in S-Form umgewandelt).
**L-Dopa vs. D-Dopa:** Bei Parkinson wird nur L-Dopa therapeutisch eingesetzt; D-Dopa hat keine Wirkung, da die DOPA-Decarboxylase stereoselektiv ist.
`,
      lernziele: [
        "Den Unterschied zwischen Konstitutionsisomeren und Stereoisomeren erklären und Beispiele nennen.",
        "cis/trans-Isomerie (Z/E) an C=C-Doppelbindungen erkennen und benennen.",
        "Chiralität definieren und ein Chiralitätszentrum im Strukturbild identifizieren.",
        "Die R/S-Konfiguration nach CIP-Regeln bestimmen und die Begriffe Enantiomer, Diastereomer, Racemat erklären.",
        "Die klinische Bedeutung von Chiraliät anhand von Thalidomid und L-/D-Aminosäuren erläutern.",
      ],
      sections: [
        {
          heading: "Typen der Isomerie — Überblick",
          text: "Isomerie teilt sich auf in: (1) Konstitutionsisomerie (verschiedene Konnektivität, z.B. n-Butan vs. Isobutan) und (2) Stereoisomerie (gleiche Konnektivität, verschiedene Raumanordnung). Stereoisomerie umfasst: (2a) cis/trans-Isomerie an C=C-Doppelbindungen; (2b) Enantiomerie (Spiegelbildisomerie, R/S, optisch aktiv); (2c) Diastereomerie (alle anderen Stereoisomere, die keine Enantiomere sind). Racemat = 1:1-Gemisch von Enantiomeren, optisch inaktiv.",
          merksatz: "Gleiche Formel → Isomere. Verschiedene Konnektivität → Konstitutionsisomere. Gleiche Konnektivität, verschiedene Raumanordnung → Stereoisomere (cis/trans oder R/S).",
        },
        {
          heading: "Das chirale Kohlenstoffatom",
          text: "Ein Kohlenstoffatom ist chiral, wenn es vier verschiedene Substituenten trägt (sp³-hybridisiert). Dann gibt es zwei nicht-superponierbare Spiegelbildformen (Enantiomere). Jedes Chiralitätszentrum verdoppelt theoretisch die Zahl der Stereoisomere (2ⁿ-Regel). In der Biochemie sind fast alle wichtigen Moleküle chiral: Aminosäuren, Monosaccharide, Nucleoside, Steroide. Biologische Systeme (Enzyme, Rezeptoren) sind stereoselektiv — sie erkennen oft nur ein Enantiomer.",
          merksatz: "Vier verschiedene Gruppen am C → chirales Zentrum → Enantiomere möglich. Proteinogene Aminosäuren sind alle L-konfiguriert. Bei n Chiralitätszentren: maximal 2ⁿ Stereoisomere.",
        },
        {
          heading: "Klinischer Fall: Thalidomid — das Contergan-Desaster",
          text: "Thalidomid (Contergan) wurde in den 1950er-60er Jahren als Schlaf- und Beruhigungsmittel vermarktet. Es enthält ein Chiralitätszentrum. Das R-Enantiomer hat sedierende Wirkung. Das S-Enantiomer ist teratogen (löst Missbildungen aus — Phokomelie). Das tragische Problem: Im menschlichen Körper findet spontane Racemisierung statt — selbst reines R-Enantiomer wandelt sich in vivo ins S-Enantiomer um, sodass die teratogene Wirkung nicht durch Verabreichung nur des R-Isomers verhindert werden kann. Dieser Fall begründete die moderne Arzneimittelregulierung für chirale Wirkstoffe.",
          merksatz: "Thalidomid: R=Sedativum, S=teratogen. Racemisierung in vivo macht Trennung klinisch unwirksam. Lehre: Chirale Arzneimittel müssen auf jedes Enantiomer einzeln geprüft werden.",
        },
      ],
      merksätze: [
        "Isomere haben gleiche Summenformel, aber verschiedene Struktur oder Raumanordnung.",
        "Konstitutionsisomere (Strukturisomere): gleiche Formel, verschiedene Konnektivität der Atome.",
        "cis/trans-Isomerie: entsteht durch blockierte Rotation an C=C-Doppelbindungen.",
        "Chiralität: C mit vier verschiedenen Substituenten → nicht-superponierbare Spiegelbilder (Enantiomere).",
        "R/S-Nomenklatur: CIP-Priorität nach Ordnungszahl; R=Uhrzeigersinn, S=gegen Uhrzeigersinn (Gruppe 4 nach hinten).",
        "Enantiomere unterscheiden sich nur in der optischen Aktivität, nicht in Siedepunkt oder Löslichkeit.",
        "Diastereomere: Stereoisomere, die keine Enantiomere sind; unterschiedliche physikalische Eigenschaften.",
        "L-Aminosäuren sind in allen Proteinen; D-Aminosäuren kommen in Bakterienzellwänden vor.",
        "Thalidomid-Prinzip: R-aktiv, S-teratogen; in vivo Racemisierung möglich.",
        "Ibuprofen: nur S(+)-Form ist analgetisch aktiv; R(-)-Form wird in vivo teilweise umgewandelt.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was versteht man unter Enantiomeren, und welche klinische Bedeutung hat die Chiralität bei Arzneimitteln? Erläutern Sie das Beispiel Thalidomid.",
        answer: "Enantiomere sind zwei Stereoisomere, die sich wie Bild und nicht-superponiertes Spiegelbild verhalten. Sie entstehen an einem chiralen Kohlenstoffatom, das vier verschiedene Substituenten trägt. Enantiomere haben identische physikalische Eigenschaften (Schmelzpunkt, Siedepunkt, Löslichkeit) und identische Reaktivität in achiraler Umgebung. Sie unterscheiden sich ausschließlich in der optischen Aktivität (Drehung polarisierten Lichts in entgegengesetzte Richtungen: (+) rechtsdrehend, (−) linksdrehend) und in ihrem Verhalten gegenüber anderen chiralen Molekülen wie Enzymen und Rezeptoren. Die klinische Bedeutung der Chiralität liegt darin, dass biologische Zielmoleküle (Enzyme, Rezeptoren, Transporter) selbst chiral sind und zwei Enantiomere eines Arzneimittels komplett unterschiedliche biologische Wirkungen haben können. Das deutlichste Beispiel ist Thalidomid (Contergan), das in den späten 1950er Jahren als Racemat als Schlafmittel und Antiemetikum bei Schwangerschaftsübelkeit eingesetzt wurde. Das R-Enantiomer hat die therapeutisch gewünschte sedierende Wirkung. Das S-Enantiomer ist teratogen und verursachte schwere Gliedmaßenfehlbildungen (Phokomelie) bei Tausenden von Kindern. Besonders tragisch ist, dass selbst die Verabreichung des reinen R-Enantiomers die Teratogenität nicht verhindert hätte, da im menschlichen Körper spontane Racemisierung stattfindet (Interkonversion beider Formen). Dieser Fall war ein Wendepunkt in der Pharmakologie und führte zur Einführung strenger Zulassungsvorschriften, die heute die separate Prüfung jedes Enantiomers verlangen.",
      },
      klinischerBezug: "Chirale Arzneimittel (Enantiomere) können sehr unterschiedliche Wirkungen haben: Thalidomid (R=Sedativum, S=teratogen), L-Dopa (wirksam bei Parkinson, D-Dopa inaktiv), S-Ibuprofen (aktive Form).",
      selfTest: [
        {
          question: "Was ist die Grundbedingung für das Vorliegen eines chiralen Kohlenstoffatoms?",
          options: [
            "Das C-Atom trägt mindestens eine OH-Gruppe",
            "Das C-Atom ist sp²-hybridisiert",
            "Das C-Atom trägt vier verschiedene Substituenten",
            "Das C-Atom ist Teil eines Rings",
            "Das C-Atom trägt mindestens zwei gleiche Substituenten",
          ],
          correctIndex: 2,
          explanation: "Ein Kohlenstoffatom ist chiral (stereogen), wenn es vier verschiedene Substituenten trägt — das können Atome oder Atomgruppen sein. Dann gibt es zwei Möglichkeiten, diese vier Substituenten räumlich anzuordnen: die zwei Anordnungen sind Spiegelbilder voneinander und nicht superponierbar (Enantiomere). Wenn zwei oder mehr Substituenten gleich sind, gibt es nur eine Anordnung (kein chirales Zentrum). Ein sp²-hybridisiertes C (z.B. in einer Doppelbindung) kann kein Chiralitätszentrum sein, da es nur drei Bindungspartner hat.",
          hints: ["Denke an eine Hand: links und rechts sind Spiegelbilder. Was macht eine Hand chiral?", "Wenn zwei Substituenten gleich sind, kann man das Molekül durch Rotation in sein Spiegelbild überführen."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Zwei Verbindungen haben die Summenformel C₄H₈: But-1-en (CH₂=CH-CH₂-CH₃) und Cyclobutan (viergliedriger Ring). In welche Isomerieklasse fallen diese beiden?",
          options: [
            "Enantiomere",
            "Diastereomere",
            "Konstitutionsisomere",
            "cis/trans-Isomere",
            "Meso-Verbindungen",
          ],
          correctIndex: 2,
          explanation: "But-1-en und Cyclobutan haben beide die Summenformel C₄H₈, aber eine völlig unterschiedliche Konnektivität der Atome: But-1-en ist eine offenkettige Verbindung mit einer Doppelbindung, Cyclobutan ist ein gesättigter Ring. Verschiedene Konnektivität = Konstitutionsisomere (Strukturisomere). Enantiomere und Diastereomere sind Stereoisomere (gleiche Konnektivität, verschiedene Raumanordnung). cis/trans-Isomerie ist ein Spezialfall von Diastereomerie bei Doppelbindungen oder Ringen.",
          hints: ["Konstitutionsisomere unterscheiden sich in der Reihenfolge der verbundenen Atome — vergleiche die Bindungspartner.", "Stereoisomere haben gleiche Konnektivität. Haben But-1-en und Cyclobutan gleiche Bindungspartner?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Stereoisomerieverhältnis besteht zwischen L-Alanin und D-Alanin?",
          options: [
            "Konstitutionsisomere",
            "Diastereomere",
            "Enantiomere",
            "cis/trans-Isomere",
            "Mesomere",
          ],
          correctIndex: 2,
          explanation: "L-Alanin und D-Alanin sind Enantiomere: Sie haben identische Summenformel (C₃H₇NO₂) und gleiche Konnektivität (je -NH₂, -COOH, -CH₃ und -H am α-C), unterscheiden sich aber in der räumlichen Anordnung (das α-C-Atom ist chiral). Sie verhalten sich wie Bild und Spiegelbild, sind nicht superponierbar. L-Alanin dreht polarisiertes Licht anders als D-Alanin. Im menschlichen Körper kommen ausschließlich L-Aminosäuren in Proteinen vor; D-Aminosäuren treten in Bakterienzellwänden auf.",
          hints: ["L- und D-Aminosäuren: was unterscheidet sie strukturell, wenn sie gleiche Summenformel haben?", "Spiegelbildisomere, die nicht deckbar sind, heißen..."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche der folgenden Aussagen über ein racemisches Gemisch ist korrekt?",
          options: [
            "Ein Racemat besteht aus einem Konstitutionsisomeren-Gemisch",
            "Ein Racemat dreht polarisiertes Licht stark nach rechts",
            "Ein Racemat ist ein 1:1-Gemisch aus R- und S-Enantiomeren und ist optisch inaktiv",
            "Ein Racemat hat immer andere physikalische Eigenschaften als die reinen Enantiomere",
            "Ein Racemat enthält nur meso-Verbindungen",
          ],
          correctIndex: 2,
          explanation: "Ein racemisches Gemisch (Racemat) enthält gleiche Mengen (1:1) des R- und S-Enantiomers einer chiralen Verbindung. Da beide Enantiomere polarisiertes Licht in entgegengesetzte Richtungen und im gleichen Ausmaß drehen, heben sich die Drehungen gegenseitig auf — das Racemat ist optisch inaktiv (Drehwert = 0). Das erklärt, warum chemisch synthetisierte chirale Verbindungen oft als Racemate anfallen (keine bevorzugte Reaktionsrichtung), während biologische Systeme stereoselektiv nur ein Enantiomer produzieren.",
          hints: ["'Racemat' kommt von 'Traubensäure' (Racema = Traube), die als Gemisch gefunden wurde.", "Was passiert mit der optischen Drehung, wenn man gleiche Mengen (+) und (−) mischt?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum können cis- und trans-2-Buten nicht ineinander umgewandelt werden, ohne Bindungen zu brechen?",
          options: [
            "Weil ihre Molekulargewichte unterschiedlich sind",
            "Weil die C=C-Doppelbindung eine π-Bindung enthält, die freie Rotation verhindert",
            "Weil cis-Isomere grundsätzlich stabiler als trans-Isomere sind",
            "Weil die σ-Bindung in der Doppelbindung zu stark ist",
            "Weil beide Moleküle verschiedene Summenformeln haben",
          ],
          correctIndex: 1,
          explanation: "Die C=C-Doppelbindung besteht aus einer σ-Bindung (Rotationsachse) und einer π-Bindung (seitliche Überlappung der p-Orbitale). Die π-Bindung kann nur bestehen, wenn die beiden p-Orbitale parallel ausgerichtet sind — eine freie Rotation um die C-C-Achse würde die p-Orbital-Überlappung und damit die π-Bindung zerstören. Das bedeutet: cis- und trans-Isomere sind durch eine Rotationsbarriere getrennt (Bindungsbruch nötig). Bei Einfachbindungen (σ) ist freie Rotation möglich → keine cis/trans-Isomerie.",
          hints: ["Die π-Bindung in der Doppelbindung ist eine seitliche p-Orbital-Überlappung. Was passiert bei Rotation?", "Vergleiche: σ-Bindung erlaubt Rotation, π-Bindung nicht — warum?"],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Ein Molekül mit zwei Chiralitätszentren hat wie viele maximale Stereoisomere?",
          options: [
            "2",
            "4",
            "6",
            "8",
            "1",
          ],
          correctIndex: 1,
          explanation: "Die 2ⁿ-Regel gilt für die maximale Anzahl von Stereoisomeren, wobei n die Anzahl der Chiralitätszentren ist. Bei n=2: 2² = 4 maximale Stereoisomere. Bei zwei Chiralitätszentren gibt es die Konfigurationen (R,R), (S,S), (R,S) und (S,R). (R,R) und (S,S) sind Enantiomere; (R,S) und (S,R) sind Enantiomere; aber (R,R) und (R,S) sind Diastereomere. Sonderfall: Wenn die Verbindung eine innere Spiegelebene hat, ist (R,S) = (S,R) (meso-Form) → dann nur 3 Stereoisomere statt 4.",
          hints: ["Mit jedem neuen Chiralitätszentrum verdoppelt sich die mögliche Anzahl der Stereoisomere.", "2ⁿ: n = Anzahl der Chiralitätszentren."],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Arzneimittel wurde als Racemat vermarktet, wobei ein Enantiomer sedierend und das andere teratogen wirkt?",
          options: [
            "Ibuprofen",
            "Aspirin",
            "Thalidomid",
            "L-Dopa",
            "Penicillin",
          ],
          correctIndex: 2,
          explanation: "Thalidomid (Handelsname Contergan) wurde in den 1950er/60er Jahren als Racemat gegen Schlaflosigkeit und Schwangerschaftserbrechen eingesetzt. Das R-Enantiomer besitzt sedierende/hypnotische Wirkung. Das S-Enantiomer ist stark teratogen und verursacht bei der Embryonalentwicklung schwere Fehlbildungen der Gliedmaßen (Phokomelie). Das Desaster führte zu über 10.000 geschädigten Kindern und revolutionierte die Arzneimittelzulassung. Wichtig: Racemisierung im Körper macht selbst das 'sichere' R-Enantiomer allein nicht verwendbar.",
          hints: ["Dieses Mittel führte Ende der 1950er/Anfang 1960er zu einem der größten Arzneimittelskandale.", "Der Handelsname war Contergan. Welche Substanz verbirgt sich dahinter?"],
          difficulty: 1,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 03 — Funktionelle Gruppen der Organik
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch-12-03',
      title: "Funktionelle Gruppen der Organik",
      content: `# Funktionelle Gruppen der Organischen Chemie

Funktionelle Gruppen sind spezifische Atomanordnungen im Molekül, die dessen chemisches Verhalten bestimmen. Sie sind verantwortlich für die charakteristischen Reaktionen einer Verbindungsklasse. Das Grundgerüst (Kohlenwasserstoffrest R) ist in den meisten Reaktionen relativ inert; die Reaktivität liegt in der funktionellen Gruppe.

## Alkohole (−OH, Hydroxylgruppe)

Alkohole enthalten eine Hydroxylgruppe (-OH) an einem Kohlenstoffatom. Die OH-Gruppe macht das Molekül polar und ermöglicht Wasserstoffbrückenbindungen.

**Einteilung:**
- Primärer Alkohol: -CH₂-OH (C trägt 1 weiteres C)
- Sekundärer Alkohol: -CH(OH)- (C trägt 2 weitere C)
- Tertiärer Alkohol: -C(OH)< (C trägt 3 weitere C)

**Wichtige Alkohole:**
- Methanol (CH₃OH): giftig! Metabolisierung zu Formaldehyd und Ameisensäure → Blindheit, Tod
- Ethanol (C₂H₅OH): Genussmittel; Abbau über Acetaldehyd (ADH) zur Essigsäure (ALDH)
- Glycerin (Propan-1,2,3-triol): dreiwertiger Alkohol, Bestandteil der Triglyceride

**Reaktionen der Alkohole:**
- Oxidation: primärer Alkohol → Aldehyd → Carbonsäure; sekundärer Alkohol → Keton
- Dehydratisierung (mit konz. H₂SO₄): Alkohol → Alken (intramolekular) oder Ether (intermolekular)
- Veresterung: Alkohol + Carbonsäure → Ester + H₂O

## Aldehyde (−CHO, Aldehydgruppe)

Aldehyde enthalten die Carbonylgruppe (C=O) am Kettenende, gebunden an mindestens ein H-Atom: R-CHO.

**Wichtige Aldehyde:**
- Formaldehyd (HCHO, Methanal): Konservierungsmittel, toxisch, Formalin (40% wässrige Lösung)
- Acetaldehyd (CH₃CHO, Ethanal): Zwischenprodukt beim Ethanolabbau; verantwortlich für Kater-Symptome
- Glucose (in offenkettiger Form): Aldehydgruppe am C1

**Reaktionen:** Oxidation zu Carbonsäure (spezifisch für Aldehyde, nicht Ketone!); Reduktion zu Alkohol.

## Ketone (C=O in der Kette)

Ketone haben die Carbonylgruppe innerhalb der Kohlenstoffkette, gebunden an zwei C-Atome: R-CO-R'.

**Wichtige Ketone:**
- Aceton (Propan-2-on, CH₃-CO-CH₃): wichtiger Ketonkörper; Lösungsmittel; süßlicher "Acetongeruch" bei Ketoazidose
- β-Hydroxybutyrat und Acetoacetat: weitere Ketonkörper bei Fasten/Diabetes

**Ketonkörper im Stoffwechsel:** Bei Diabetes mellitus oder längerem Fasten kann der Körper keine ausreichenden Mengen Glucose verwerten. Als Ersatz synthetisiert die Leber Ketonkörper (aus Acetyl-CoA). Bei Überproduktion → Ketoazidose (Blut-pH sinkt).

## Carbonsäuren (−COOH, Carboxylgruppe)

Carbonsäuren enthalten die Carboxylgruppe -COOH (Kombination aus Carbonyl C=O und Hydroxyl -OH). Sie sind Brønsted-Säuren und geben ein Proton ab: R-COOH ⇌ R-COO⁻ + H⁺.

**Typische pKₐ-Werte:** 4–5 (deutlich schwächer als Salzsäure pKₐ = -7, aber Protonen-Donor!)

**Wichtige Carbonsäuren:**
- Ameisensäure (HCOOH, Methansäure): Ameisengift, Brennnesseln
- Essigsäure (CH₃COOH, Ethansäure): Essig, Endprodukt Ethanolabbau
- Milchsäure (Lactat): Glykolyse-Endprodukt bei Sauerstoffmangel; Muskelschmerz nach Sport
- Zitronensäure (C₆H₈O₇): Tricarbonsäure, zentrales Molekül im Citratzyklus; 3 COOH-Gruppen
- Fettsäuren: langkettige Carbonsäuren (C16-C18), gesättigt/ungesättigt; Bausteine der Lipide

**Reaktionen:** Veresterung mit Alkoholen; Säure-Base-Reaktionen; Bildung von Säurechloriden, Amiden.

## Ester (−COO−, Estergruppe)

Ester entstehen durch Veresterung (Kondensationsreaktion) zwischen einer Carbonsäure und einem Alkohol unter Wasserabspaltung (Gleichgewichtsreaktion):
R-COOH + R'-OH ⇌ R-COO-R' + H₂O

**Wichtige Ester:**
- Triglyceride: Glycerin + 3 Fettsäuren → Neutralfette (Fette und Öle); Energiespeicher
- Aspirin (Acetylsalicylsäure): Ester aus Salicylsäure und Essigsäure
- Ethylacetat (CH₃COO-C₂H₅): wichtiges Lösungsmittel; Fruchtgeruch

**Hydrolyse:** Ester können durch Wasser (sauer oder basisch katalysiert) in Carbonsäure + Alkohol gespalten werden. Basische Hydrolyse von Fetten = Verseifung (Seifenherstellung).

## Amine (−NH₂, Aminogruppe)

Amine sind organische Derivate des Ammoniaks, in dem ein oder mehrere H-Atome durch organische Reste ersetzt sind.

- Primäres Amin: R-NH₂ (1 Substituent)
- Sekundäres Amin: R₂-NH (2 Substituenten)
- Tertiäres Amin: R₃-N (3 Substituenten)

Amine sind basisch (freies Elektronenpaar am N nimmt Protonen auf): R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻

**Klinisch wichtige Amine:**
- Aminosäuren: enthalten sowohl -NH₂ als auch -COOH (amphotere Verbindungen)
- Neurotransmitter: Dopamin, Serotonin, Histamin, GABA (alle enthalten Aminogruppen!)
- Adrenalin, Noradrenalin (Catecholamine): biogene Amine
- Histamin: aus Histidin (Decarboxylierung); verantwortlich für allergische Reaktionen
`,
      lernziele: [
        "Die wichtigsten funktionellen Gruppen (−OH, −CHO, C=O, −COOH, −COO−, −NH₂) benennen und deren Verbindungsklasse zuordnen.",
        "Die Oxidationsstufen: primärer Alkohol → Aldehyd → Carbonsäure erklären.",
        "Die Veresterungsreaktion als Gleichgewichtsreaktion formulieren und das Produkt benennen.",
        "Die Bedeutung der Ketonkörper (Aceton, Acetoacetat, β-Hydroxybutyrat) bei Diabetes und Fasten erläutern.",
        "Amine als basische Verbindungen identifizieren und klinisch relevante Amine (Neurotransmitter) nennen.",
      ],
      sections: [
        {
          heading: "Oxidationsstufen der Sauerstoff-Funktionen",
          text: "Die Oxidationsstufen im organischen C sind: Alkan (C-H, niedrig) → Alkohol (C-OH) → Aldehyd (C=O am Ende) → Carbonsäure (COOH, hoch) → CO₂ (max. oxidiert). Primäre Alkohole werden zu Aldehyden oxidiert, dann zu Carbonsäuren. Sekundäre Alkohole werden zu Ketonen oxidiert (keine weitere Oxidation ohne C-C-Spaltung). Tertiäre Alkohole werden unter normalen Bedingungen nicht oxidiert. Diese Stufenfolge ist für die Biochemie essentiell: z.B. Ethanolabbau (Ethanol → Acetaldehyd → Acetat).",
          merksatz: "Oxidation: primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (Sackgasse). Tertiärer Alkohol → keine Oxidation ohne C-C-Spaltung.",
        },
        {
          heading: "Veresterung und Hydrolyse — Gleichgewichtsreaktionen",
          text: "Die Veresterung (Carbonsäure + Alkohol → Ester + Wasser) ist eine reversible Gleichgewichtsreaktion. Das Gleichgewicht liegt oft auf Seite der Edukte, daher verwendet man Überschuss einer Komponente oder entfernt das Wasser (Le Chatelier). Katalysator: konz. Schwefelsäure (H⁺). Die Rückreaktion (Hydrolyse) kann sauer oder basisch katalysiert werden. Basische Hydrolyse (Verseifung): Ester + NaOH → Carboxylat (Seife) + Alkohol — irreversibel, weil das Carboxylat-Anion nicht zurück reagiert. Triglyceride (Fette) werden durch Lipasen hydrolysiert: Triglycerid + 3 H₂O → Glycerin + 3 Fettsäuren.",
          merksatz: "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser (Gleichgewicht). Triglyceride = Glycerin + 3 Fettsäuren (verbunden durch Esterbindungen). Aspirin = Ester der Salicylsäure.",
        },
        {
          heading: "Ketonkörper und klinische Relevanz",
          text: "Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen in der Leber aus Acetyl-CoA, wenn Glucose mangelt (Fasten, Diabetes mellitus Typ 1). Sie werden von Muskel und Gehirn als alternativer Brennstoff verwendet. Bei übermäßiger Ketonkörperproduktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Symptome: Acetongeruch im Atem (Fruchteruch), Hyperventilation (Kussmaul-Atmung als respiratorische Kompensation), Übelkeit, Bewusstseinseintrübung. Im Labor: erhöhte Ketonkörper im Urin (Ketonurie) und Blut. Nachweis: Nitroprussid-Test (Urin-Stix).",
          merksatz: "Ketonkörper bei Diabetes/Fasten: Aceton (Atemgeruch), Acetoacetat, β-Hydroxybutyrat. Ketoazidose: pH sinkt < 7,35. Kussmaul-Atmung = tiefe, schnelle Atemzüge als Kompensation.",
        },
      ],
      diagram: 'functional-groups',

      merksätze: [
        "Alkohole (-OH): polar, Wasserstoffbrücken, kleiner Siedepunkt-Boost. Primär → Aldehyd, sekundär → Keton bei Oxidation.",
        "Methanol ist giftig! Abbau zu Formaldehyd → Erblindung (Retinasschädigung) und Tod.",
        "Aldehyde (-CHO am Kettenende) können weiter zur Carbonsäure oxidiert werden; Ketone nicht ohne C-C-Spaltung.",
        "Carbonsäuren (-COOH): schwache Säuren (pKₐ 4-5), Protonendonoren, typische Veresterung mit Alkoholen.",
        "Ester (-COO-): Produkt der Veresterung; Triglyceride sind Glycerinester; Aspirin ist ein Ester.",
        "Amine (-NH₂): basisch durch freies Elektronenpaar am Stickstoff; Neurotransmitter-Grundbaustein.",
        "Ketonkörper (Aceton, Acetoacetat, β-Hydroxybutyrat) bei Hunger/Diabetes als Ersatzenergielieferanten.",
        "Ketoazidose: Blut-pH < 7,35, Acetongeruch, Kussmaul-Atmung.",
        "Verseifung = basische Esterspaltung: Fett + NaOH → Glycerin + Fettsäure-Natriumsalze (Seife).",
        "Amphotere Verbindungen tragen sowohl -NH₂ als auch -COOH: Aminosäuren sind amphoter.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Beschreiben Sie die Oxidationsreihe der Alkohole von der Alkanstufe bis zur Carbonsäure. Welche biochemische Reaktionskette entspricht dem Abbau von Ethanol im menschlichen Körper?",
        answer: "Die Oxidationsreihe organischer Sauerstoffverbindungen verläuft stufenweise. Ausgehend vom Alkan steigt der Oxidationsgrad: Alkan (C-H-Bindungen) → Alkohol (Zugabe einer OH-Gruppe, Oxidation des C-Atoms von -2 auf -1) → Aldehyd (primärer Alkohol verliert ein H, C-Oxidation von -1 auf 0, Produkt: R-CHO) → Carbonsäure (weiterer Oxidationsschritt, C-Oxidation von 0 auf +1, Produkt: R-COOH) → Kohlendioxid (maximale Oxidation +4). Für sekundäre Alkohole endet die Oxidation beim Keton (R-CO-R'), da kein weiteres H am Carbonyl-C vorhanden ist. Der biochemische Ethanolabbau folgt genau dieser Stufenfolge: Ethanol (CH₃-CH₂-OH, primärer Alkohol) wird durch das Enzym Alkohol-Dehydrogenase (ADH) mit NAD⁺ als Elektronenakzeptor zu Acetaldehyd (CH₃-CHO, Ethanal) oxidiert. Acetaldehyd ist das toxische Zwischenprodukt, das für viele Symptome des Katers verantwortlich ist. Im zweiten Schritt oxidiert die Aldehyd-Dehydrogenase (ALDH) den Acetaldehyd zu Essigsäure (Acetat, CH₃-COO⁻). Das Acetat kann in den Citratzyklus eingeschleust werden (als Acetyl-CoA) und vollständig zu CO₂ und Wasser verbrannt werden. Genetische Varianten der ALDH (besonders ALDH2*2 in Ostasien) führen zur Ansammlung von Acetaldehyd und verursachen die Flush-Reaktion (Rötung, Übelkeit).",
      },
      klinischerBezug: "Ketonkörper (β-Hydroxybutyrat, Acetoacetat, Aceton) bei Diabetes/Fasten: Acetongeruch, Ketoazidose. Methanol-Vergiftung: Formaldehyd-Metabolit schädigt Retina. Aspirin = Acetylsalicylsäure (Ester).",
      selfTest: [
        {
          question: "Welche funktionelle Gruppe ist charakteristisch für Alkohole?",
          options: [
            "Carbonylgruppe (C=O) am Kettenende",
            "Carboxylgruppe (-COOH)",
            "Hydroxylgruppe (-OH) am C-Atom",
            "Aminogruppe (-NH₂)",
            "Estergruppe (-COO-)",
          ],
          correctIndex: 2,
          explanation: "Alkohole sind definiert durch die Hydroxylgruppe (-OH), die an ein Kohlenstoffatom gebunden ist. Die -OH-Gruppe ist polar und ermöglicht Wasserstoffbrückenbindungen, was die Siedepunkte von Alkoholen im Vergleich zu entsprechenden Alkanen deutlich erhöht und die Wasserlöslichkeit kleiner Alkohole erklärt. Wichtig: Nicht alle -OH-Gruppen machen eine Verbindung zum Alkohol — in Carbonsäuren ist die -OH-Gruppe Teil der -COOH-Gruppe.",
          hints: ["'Alkohol' enthält '-ol' — was bedeutet die Endung '-ol' in der IUPAC-Nomenklatur?", "Ethanol (C₂H₅OH): Was ist die charakteristische Gruppe?"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Zwischenprodukt entsteht beim Abbau von Ethanol zu Essigsäure (Acetat) im menschlichen Körper?",
          options: [
            "Propanol",
            "Aceton",
            "Acetaldehyd (Ethanal)",
            "Formaldehyd",
            "Milchsäure",
          ],
          correctIndex: 2,
          explanation: "Der hepatische Ethanolabbau verläuft zweistufig: (1) Ethanol → Acetaldehyd (Ethanal): katalysiert durch Alkohol-Dehydrogenase (ADH), NAD⁺ → NADH. (2) Acetaldehyd → Acetat (Essigsäure): katalysiert durch Aldehyd-Dehydrogenase (ALDH2), NAD⁺ → NADH. Acetaldehyd ist das toxische Zwischenprodukt, das für Flush-Reaktion, Kater-Symptome (Kopfschmerz, Übelkeit) und langfristige Leberschäden verantwortlich ist. Menschen mit ALDH2*2-Mutation bauen Acetaldehyd langsamer ab → stärkere Reaktionen.",
          hints: ["Primärer Alkohol → bei Oxidation entsteht zuerst ein Aldehyd.", "ADH = Alkohol-Dehydrogenase; was oxidiert sie Ethanol zu?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Reaktion entsteht aus Essigsäure (CH₃COOH) und Ethanol (C₂H₅OH) unter Katalyse mit konz. H₂SO₄?",
          options: [
            "Acetaldehyd und Wasser",
            "Diethylether und Wasser",
            "Ethylacetat (Ester) und Wasser",
            "Aceton und Wasser",
            "Milchsäure und Wasser",
          ],
          correctIndex: 2,
          explanation: "Die Veresterungsreaktion: Carbonsäure + Alkohol ⇌ Ester + Wasser. CH₃COOH (Essigsäure) + C₂H₅OH (Ethanol) → CH₃-COO-C₂H₅ (Ethylacetat, Essigsäureethylester) + H₂O. Ethylacetat riecht fruchtig und wird als Lösungsmittel verwendet (z.B. in Nagellackentferner). Katalysator: konz. H₂SO₄ oder andere starke Säuren. Die Reaktion ist reversibel (Gleichgewicht); Wasserentfernung verschiebt das Gleichgewicht zur Esterseite.",
          hints: ["Veresterung = Carbonsäure + Alkohol. Welche Gruppe bleibt aus der Säure, welche aus dem Alkohol?", "Ester hat die Struktur R-COO-R'. Die Endung 'acetat' kommt von Essigsäure."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum sind Amine basisch?",
          options: [
            "Weil sie ein H⁺ abgeben können",
            "Weil der Stickstoff ein freies Elektronenpaar hat, das Protonen aufnehmen kann",
            "Weil sie eine -OH-Gruppe enthalten",
            "Weil sie in Wasser dissoziieren wie starke Basen",
            "Weil ihre Kohlenstoffkette unpolar ist",
          ],
          correctIndex: 1,
          explanation: "Amine sind organische Derivate des Ammoniaks (NH₃). Der Stickstoff in Aminen besitzt ein freies (nicht-bindendes) Elektronenpaar. Dieses Elektronenpaar kann ein Proton (H⁺) aufnehmen, was das Amin zur Base macht: R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻. Die Basenstärke von Aminen hängt von der Elektronendichte am N ab (aliphatische Amine sind basischer als aromatische Amine). Aminosäuren sind amphoter: die -NH₂-Gruppe ist basisch, die -COOH-Gruppe ist sauer.",
          hints: ["Basen nehmen Protonen auf (Brønsted). Was am N-Atom ermöglicht das?", "NH₃ (Ammoniak) ist eine Base. Was haben Amine mit Ammoniak gemeinsam?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Verbindungsklasse enthält die Carboxylgruppe (-COOH)?",
          options: [
            "Ester",
            "Amine",
            "Ketone",
            "Carbonsäuren",
            "Aldehyde",
          ],
          correctIndex: 3,
          explanation: "Carbonsäuren sind charakterisiert durch die Carboxylgruppe -COOH, die eine Kombination aus Carbonylgruppe (C=O) und Hydroxylgruppe (-OH) darstellt. Sie sind Brønsted-Säuren und können ein Proton abgeben: R-COOH ⇌ R-COO⁻ + H⁺. Typische pKₐ-Werte: 4-5 (schwache Säuren). Wichtige Vertreter: Ameisensäure (pKₐ 3,75), Essigsäure (pKₐ 4,75), Milchsäure (pKₐ 3,86), Zitronensäure (pKₐ1 3,13). Carbonsäuren bilden Ester durch Reaktion mit Alkoholen.",
          hints: ["Die Endsilbe '-säure' deutet auf welche Verbindungsklasse hin?", "-COOH = Carbonyl + Hydroxyl. Diese Kombination ist typisch für..."],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was sind Ketonkörper, und bei welcher Stoffwechsellage entstehen sie vermehrt?",
          options: [
            "Aminosäuren; entstehen bei hohem Proteinkonsum",
            "Glucose-Abkömmlinge; entstehen nach Mahlzeiten",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; entstehen bei Glucose-Mangel (Fasten, Diabetes)",
            "Fettsäuren; entstehen bei Fettreicher Ernährung",
            "Triglyceride; entstehen bei hohem Insulinspiegel",
          ],
          correctIndex: 2,
          explanation: "Ketonkörper (Acetoacetat, β-Hydroxybutyrat und Aceton) werden in der Leber aus Acetyl-CoA gebildet, wenn die β-Oxidation die Kapazität des Citratzyklus übersteigt — d.h. bei Glucose-Mangel (Fasten, Hunger) oder wenn Glucose nicht genutzt werden kann (Diabetes mellitus Typ 1, Insulinmangel). Ketonkörper dienen als alternativer Energieträger für Gehirn und Muskel. Bei exzessiver Produktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Aceton (flüchtig) verleiht dem Atem einen charakteristischen süßlich-fruchtigen Geruch.",
          hints: ["Glucose-Mangel → Leber sucht Alternative. Was wird aus Acetyl-CoA wenn der Citratzyklus überlastet ist?", "Ketoazidose ist eine lebensbedrohliche Komplikation beim Typ-1-Diabetes. Welche Verbindungen verursachen den niedrigen pH?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches der folgenden Medikamente ist chemisch gesehen ein Ester?",
          options: [
            "Ibuprofen (Carbonsäure)",
            "Paracetamol (Amid)",
            "Aspirin (Acetylsalicylsäure)",
            "Penicillin (β-Lactam)",
            "Metformin (Guanidin-Derivat)",
          ],
          correctIndex: 2,
          explanation: "Aspirin (Acetylsalicylsäure) ist ein Ester: Es entsteht durch Reaktion der Hydroxylgruppe der Salicylsäure mit Essigsäureanhydrid (Veresterung). Die Estergruppe (-COO-) verbindet den Benzolring der Salicylsäure mit der Acetylgruppe. Im Körper wird Aspirin hydrolysiert (gespalten) zu Salicylsäure und Acetat. Aspirin hemmt irreversibel die Cyclooxygenase (COX-1 und COX-2) durch Acetylierung → Hemmung der Prostaglandinsynthese → analgetisch, antipyretisch, antiinflammatorisch, thrombozytenaggregationshemmend.",
          hints: ["Aspirin = Acetylsalicylsäure. 'Acetyl-' deutet auf welche Verbindungsklasse hin, wenn es an -OH gebunden ist?", "Ester enthalten die Gruppe -COO-. Welches Mittel hat eine solche Gruppe in seiner Struktur?"],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 04 — Aromate und biologisch relevante organische Verbindungen
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch-12-04',
      title: "Aromate und biologisch relevante organische Verbindungen",
      content: `# Aromate und biologisch relevante organische Verbindungen

## Benzol und Aromatizität

Benzol (C₆H₆) ist die einfachste aromatische Verbindung. Es besitzt eine ringförmige planare Struktur mit sechs Kohlenstoffatomen und sechs π-Elektronen (delokalisiert über den gesamten Ring).

**Hückel-Regel für Aromatizität:**
Eine cyclische, planare, vollständig konjugierte Verbindung ist aromatisch, wenn sie 4n+2 π-Elektronen hat (n = 0, 1, 2, ...):
- n=0: 2 π-Elektronen (Cyclopropenylkation)
- n=1: 6 π-Elektronen → Benzol (C₆H₆)! ✓
- n=2: 10 π-Elektronen (Naphthalin, Azulen)

**Merkmale aromatischer Verbindungen:**
- Planarer Ring (alle Atome in einer Ebene)
- Vollständige Konjugation (abwechselnde Einzel- und Doppelbindungen oder freie Elektronenpaare)
- Delokalisierte π-Elektronen (gleiche Bindungslänge aller C-C-Bindungen in Benzol: 139 pm, zwischen Einfach- und Doppelbindung)
- Besondere thermodynamische Stabilität (Mesomerie-Energie / Resonanzenergie ≈ 150 kJ/mol)

**Darstellung:** Benzol wird als Kreis im Sechseck dargestellt (delokalisiert) oder als Kekulé-Struktur mit alternierenden Doppelbindungen.

## Reaktionen der Aromate: Elektrophile aromatische Substitution (EAS)

Aromate erhalten ihre Stabilität durch die delokalisierten π-Elektronen. Um diese Stabilität zu erhalten, bevorzugen sie Substitutionsreaktionen (nicht Addition!).

**Mechanismus der EAS:**
1. Ein Elektrophil (E⁺) greift das π-System an → Bildung eines Areniumions (Meisenheimer-Komplex)
2. Ein Proton wird abgespalten (H⁺) → Aromazustand wird wiederhergestellt

**Wichtige EAS-Reaktionen:**
- **Nitrierung:** Benzol + HNO₃ + H₂SO₄ → Nitrobenzol + H₂O (E⁺ = NO₂⁺, Nitroniumion)
- **Sulfonierung:** Benzol + rauchende H₂SO₄ → Benzolsulfonsäure (E⁺ = SO₃)
- **Halogenierung:** Benzol + Cl₂/FeCl₃ → Chlorbenzol + HCl (Katalysator Lewis-Säure nötig!)
- **Friedel-Crafts-Alkylierung:** Benzol + R-Cl/AlCl₃ → Alkylbenzol + HCl

## Aminosäuren — Struktur und Eigenschaften

Aminosäuren sind die Bausteine der Proteine. Sie enthalten am α-C-Atom vier Gruppen: −NH₂ (Aminogruppe), −COOH (Carboxylgruppe), −R (Seitenkette), −H. Das α-C ist chiral (außer Glycin, R=H).

**20 proteinogene Aminosäuren** — eingeteilt nach Seitenkette:
- Unpolar, aliphatisch: Glycin, Alanin, Valin, Leucin, Isoleucin, Prolin, Methionin
- Unpolar, aromatisch: Phenylalanin (Phe, F), Tyrosin (Tyr, Y), Tryptophan (Trp, W)
- Polar, ungeladen: Serin, Threonin, Cystein, Asparagin, Glutamin
- Positiv geladen (basisch): Lysin, Arginin, Histidin
- Negativ geladen (sauer): Aspartat, Glutamat

**Essentielle Aminosäuren** (nicht körpereigensyntheseierbar, Nahrung nötig!): Phenylalanin, Valin, Threonin, Tryptophan, Isoleucin, Methionin, Histidin, Leucin, Lysin — Eselsbrücke: **PVT TIM HaLL** (auf Englisch) oder **MILVF HTKW** (Methionin, Isoleucin, Leucin, Valin, Phenylalanin, Histidin, Threonin, Lysin, Tryptophan).

**Zwitterion:** Im neutralen pH liegt die Aminosäure als Zwitterion vor (internes Salz): −NH₃⁺ und −COO⁻. Isoelektrischer Punkt (pI): pH, bei dem keine Nettoladung vorliegt.

## Nukleotide und Nukleinsäuren

Nukleotide bestehen aus: (1) Stickstoffbase, (2) Pentose (Desoxyribose in DNA, Ribose in RNA), (3) Phosphatgruppe.

**Purinbasen (zweiring):** Adenin (A), Guanin (G)
**Pyrimidinbasen (einring):** Cytosin (C), Thymin (T, nur DNA), Uracil (U, nur RNA)

**Chargaff-Regeln:** In DNA: A = T (2 H-Brücken), G ≡ C (3 H-Brücken). Daher: A+G = C+T (Purine = Pyrimidine).

**Energetische Funktion:** ATP (Adenosintriphosphat) als universeller Energieträger der Zelle. Spaltung der Phosphoanhydridbindung: ATP → ADP + Pᵢ (ΔG = -30 kJ/mol) oder ATP → AMP + PPᵢ.

## Purinstoffwechsel und Gicht

**Abbau der Purine:** Adenin und Guanin werden zu Xanthin abgebaut, das durch die Xanthinoxidase zu Harnsäure (Urat) oxidiert wird. Harnsäure ist das Endprodukt des Purinstoffwechsels beim Menschen (andere Säugetiere besitzen Uricase und bauen Harnsäure weiter ab).

**Gicht (Hyperurikämie):** Erhöhte Harnsäurekonzentration im Blut > 6,8 mg/dl → Ausfällung von Natriumurat-Kristallen in Gelenken (v.a. Großzehengrundgelenk, Podagra) und Niere → akute Arthritis mit starken Schmerzen.

Therapie: Allopurinol (Xanthinoxidase-Hemmer) → reduziert Harnsäureproduktion; Colchicin (Mitosehemmer, hemmt Neutrophilen-Migration) bei akutem Gichtanfall.

## Aromatische Aminosäuren als Neurotransmitter-Vorläufer

Phenylalanin, Tyrosin und Tryptophan sind aromatische Aminosäuren mit besonderen Eigenschaften:

- **Phenylalanin → Tyrosin** (durch Phenylalanin-Hydroxylase): Defekt → Phenylketonurie (PKU)
- **Tyrosin → Dopa → Dopamin → Noradrenalin → Adrenalin** (Catecholaminbiosynthese)
- **Tryptophan → Serotonin** (5-Hydroxytryptamin, 5-HT): Tryptophan-Hydroxylase
- **Tryptophan → Melatonin**: Schlaf-Wach-Rhythmus (Zirbeldrüse)
- **Tyrosin → Schilddrüsenhormone** (T3, T4): benötigt Iod
`,
      lernziele: [
        "Die Hückel-Regel (4n+2 π-Elektronen) erklären und Benzol als aromatische Verbindung identifizieren.",
        "Die elektrophile aromatische Substitution (Nitrierung, Halogenierung) im Mechanismus erklären.",
        "Den Aufbau der 20 proteinogenen Aminosäuren (α-C, -NH₂, -COOH, -R) und das Zwitterion-Konzept beschreiben.",
        "Die Bausteine eines Nukleotids (Base, Zucker, Phosphat) benennen und Purine von Pyrimidinen unterscheiden.",
        "Den Purinstoffwechsel und die Entstehung von Gicht (Harnsäureablagerungen) erläutern.",
      ],
      sections: [
        {
          heading: "Hückel-Regel und Benzol-Struktur",
          text: "Benzol (C₆H₆) erfüllt alle Bedingungen der Aromatizität: (1) planarer Ring, (2) vollständige Konjugation, (3) 6 π-Elektronen (n=1, 4·1+2=6). Die sechs p-Orbitale der sp²-hybridisierten C-Atome überlappen seitlich zu einem durchgehenden π-System oberhalb und unterhalb der Ringebene. Alle C-C-Bindungen sind gleichlang (139 pm). Die Resonanzenergie (Mesomerie-Energie) von ca. 150 kJ/mol erklärt, warum Benzol Additionsreaktionen meidet — Addition würde das aromatische System zerstören. Benzol reagiert daher bevorzugt durch elektrophile Substitution (EAS), bei der das π-System erhalten bleibt.",
          merksatz: "Hückel: 4n+2 π-Elektronen → aromatisch. Benzol: 6 π-Elektronen (n=1). Aromatisch = planar, konjugiert, stabil. EAS bevorzugt (nicht Addition!), um Aromatizität zu erhalten.",
        },
        {
          heading: "Aminosäuren — Struktur und Zwitterion",
          text: "Alle 20 proteinogenen Aminosäuren haben dasselbe Grundgerüst am α-C: -NH₂, -COOH, -H und eine variable R-Gruppe (Seitenkette). Das α-C ist sp³-hybridisiert und bei allen Aminosäuren (außer Glycin) chiral. Im physiologischen pH-Bereich liegt die Aminosäure als Zwitterion vor: die Aminogruppe ist protoniert (-NH₃⁺, positiv) und die Carboxylgruppe deprotoniert (-COO⁻, negativ) → Nettoladung 0 am isoelektrischen Punkt (pI). Die Seitenkette R bestimmt die besonderen Eigenschaften: hydrophob/polar/geladen. Essentielle Aminosäuren (9 beim Menschen) müssen mit der Nahrung zugeführt werden, da der Körper sie nicht selbst synthetisieren kann.",
          merksatz: "Aminosäure = α-C mit -NH₂, -COOH, -H, -R. Alle L-konfiguriert in Proteinen. Zwitterion bei pH=pI: -NH₃⁺ und -COO⁻. Essenziell: 9 AA müssen über Nahrung aufgenommen werden.",
        },
        {
          heading: "Purinstoffwechsel — Harnsäure und Gicht",
          text: "Purinbasen (Adenin, Guanin) aus dem Nukleotidabbau werden zu Hypoxanthin und Xanthin abgebaut. Das Enzym Xanthinoxidase oxidiert Xanthin zu Harnsäure (Urat). Beim Menschen ist Harnsäure das Endprodukt (fehlende Uricase). Harnsäure hat geringe Wasserlöslichkeit; bei Hyperurikämie (> 6,8 mg/dl) präzipitieren Natriumurat-Kristalle in Gelenken (Gicht, Podagra) und Nieren (Urolithiasis). Allopurinol (Xanthinoxidase-Hemmer) verhindert die Harnsäureproduktion. Der Xanthin-Inhibitor Febuxostat ist eine neuere Alternative. Diät: purinreiche Nahrung meiden (Fleisch, Innereien, Bier).",
          merksatz: "Purine → Xanthin → Harnsäure (Xanthinoxidase). Hyperurikämie → Gicht (Urat-Kristalle in Gelenken). Allopurinol hemmt Xanthinoxidase. Podagra = Gicht im Großzehengrundgelenk.",
        },
      ],
      merksätze: [
        "Hückel-Regel: 4n+2 π-Elektronen → aromatisch. Benzol: n=1, 6 π-Elektronen.",
        "Aromate: bevorzugen elektrophile aromatische Substitution (EAS), nicht Addition.",
        "EAS: Elektrophil greift π-System an, H⁺ wird abgespalten → Aromatizität bleibt erhalten.",
        "Nitrierung: Benzol + NO₂⁺ (aus HNO₃/H₂SO₄) → Nitrobenzol; Ausgangsstoff für Anilin/Arzneimittel.",
        "Aminosäure-Grundbaustein: α-C mit -NH₂, -COOH, -H, -R. Außer Glycin alle chiral.",
        "Proteinogene AA: alle L-Konfiguration. 9 essenzielle AA müssen mit der Nahrung zugeführt werden.",
        "Nukleotide = Base + Pentose + Phosphat. Purine: Adenin, Guanin (Doppelring). Pyrimidine: Cytosin, Thymin, Uracil.",
        "Chargaff: A=T (2 H-Brücken), G≡C (3 H-Brücken) in der DNA.",
        "Purinstoffwechsel → Harnsäure → Gicht bei Hyperurikämie. Allopurinol: Xanthinoxidase-Hemmer.",
        "Aromatische AA (Phe, Tyr, Trp) als Vorläufer von Catecholaminen, Serotonin, Melatonin, Schilddrüsenhormonen.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was versteht man unter elektrophiler aromatischer Substitution? Erklären Sie den Mechanismus am Beispiel der Nitrierung von Benzol und begründen Sie, warum Aromate bevorzugt Substitution statt Addition eingehen.",
        answer: "Die elektrophile aromatische Substitution (EAS) ist die charakteristische Reaktion aromatischer Verbindungen. Bei dieser Reaktion wird ein Wasserstoffatom des Aromaten durch ein Elektrophil (elektronenarme Spezies) ersetzt, wobei das aromatische π-System erhalten bleibt. Der Mechanismus der Nitrierung von Benzol verläuft in zwei Schritten: Im ersten Schritt wird durch Reaktion von konzentrierter Salpetersäure (HNO₃) mit konzentrierter Schwefelsäure (H₂SO₄) das Nitroniumion (NO₂⁺) als reaktives Elektrophil gebildet: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Im zweiten Schritt greift das Nitroniumion (NO₂⁺) das π-Elektronensystem des Benzols nucleophil an. Dabei entsteht ein kationischer Übergangszustand (Wheland-Intermediat oder Areniumion), in dem die aromatische Stabilität kurzzeitig verloren geht — der betroffene Kohlenstoff ist sp³-hybridisiert. Im dritten Schritt wird ein Proton (H⁺) abgespalten; die Aromatizität wird wiederhergestellt, das Proton wird von HSO₄⁻ aufgenommen. Produkt: Nitrobenzol. Aromate bevorzugen Substitution statt Addition aus thermodynamischen Gründen: Die Mesomerie-Energie (Resonanzenergie) des aromatischen Systems beträgt ca. 150 kJ/mol. Eine Additionsreaktion würde diese Resonanzenergie zerstören und ein nicht-aromatisches, energetisch ungünstigeres Produkt liefern. Die Substitution hingegen erhält das aromatische π-System — die 'Treibkraft' ist die Wiederherstellung der Aromatizität durch Protonenabspaltung. Dieses Prinzip erklärt auch die biologische Inertheit von aromatischen Ringen in Biomolekülen.",
      },
      klinischerBezug: "Purinstoffwechsel: Harnsäure (Gicht, Hyperurikämie). Aromatische AA: Phe→PKU bei Enzymdefekt; Tyr→Catecholamine (Dopamin, Adrenalin); Trp→Serotonin/Melatonin. Allopurinol hemmt Xanthinoxidase.",
      selfTest: [
        {
          question: "Welche Aussage über Benzol ist korrekt?",
          options: [
            "Benzol reagiert bevorzugt durch Additionsreaktionen wie Alkene",
            "Benzol hat drei lokalisierte Doppelbindungen und drei Einfachbindungen alternierend",
            "Benzol hat 6 delokalisierte π-Elektronen und ist nach der Hückel-Regel aromatisch",
            "Benzol ist nicht planar und daher nicht aromatisch",
            "Benzol hat eine Formel C₆H₈",
          ],
          correctIndex: 2,
          explanation: "Benzol (C₆H₆) ist die klassische aromatische Verbindung. Die sechs sp²-hybridisierten C-Atome bilden einen planaren hexagonalen Ring. Jedes C-Atom hat ein p-Orbital senkrecht zur Ringmembran; diese sechs p-Orbitale überlappen zu einem delokalisierten π-System mit 6 π-Elektronen. Die Hückel-Regel (4n+2 mit n=1 → 6 π-Elektronen) ist erfüllt. Alle C-C-Bindungen sind gleichlang (139 pm). Benzol reagiert bevorzugt durch EAS (Substitution), nicht durch Addition — um die Aromatizität und die damit verbundene Resonanzenergie zu erhalten.",
          hints: ["Hückel-Regel: 4n+2 π-Elektronen. Für n=1: wie viele π-Elektronen?", "Aromatisch = planar, konjugiert, 4n+2 π-Elektronen. Was ist charakteristisch?"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was unterscheidet Purinbasen von Pyrimidinbasen?",
          options: [
            "Purine haben eine OH-Gruppe, Pyrimidine nicht",
            "Purine sind zweiringaromatische Basen, Pyrimidine sind einringaromatisch",
            "Purine kommen nur in RNA vor, Pyrimidine nur in DNA",
            "Purine sind positiv geladen, Pyrimidine negativ",
            "Purine haben 4n+2 π-Elektronen, Pyrimidine nicht",
          ],
          correctIndex: 1,
          explanation: "Stickstoffbasen der Nukleinsäuren werden nach ihrer Ringstruktur unterschieden: Purine bestehen aus einem Pyrimidin-Ring und einem Imidazol-Ring (Doppelring = Bicyclus, 9 Atome). Purine: Adenin (A) und Guanin (G) — kommen in DNA und RNA vor. Pyrimidine haben nur einen Sechsring (6 Atome, Monocyclus). Pyrimidine: Cytosin (C, in DNA und RNA), Thymin (T, nur DNA), Uracil (U, nur RNA). Eselsbrücke: 'CUT the Pyrimidine' (Cytosin, Uracil, Thymin sind Pyrimidine).",
          hints: ["'Pyr-' kommt von Pyrexis/Pyrimidin (ein Ring). 'Pur-' (Purin) — wie viele Ringe?", "Denke an die Größe: Purine sind größer (zwei Ringe), Pyrimidine kleiner (ein Ring)."],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zur Chargaff-Regel ist korrekt?",
          options: [
            "In der DNA ist A = G und C = T (gleiche Mengen gleicher Ringtypen)",
            "In der DNA ist A = T und G = C (komplementäre Basenpaarung)",
            "In der RNA ist A = T, weil RNA einzelsträngig ist",
            "Purine und Pyrimidine kommen in der DNA im Verhältnis 2:1 vor",
            "Chargaff-Regel gilt nur für RNA, nicht für DNA",
          ],
          correctIndex: 1,
          explanation: "Chargaff stellte fest, dass in doppelsträngiger DNA die Menge von Adenin immer gleich der Menge von Thymin ist (A = T), und die Menge von Guanin gleich der von Cytosin (G = C). Dies ergibt sich aus der Watson-Crick-Basenpaarung: A-T-Paar (2 Wasserstoffbrücken), G-C-Paar (3 Wasserstoffbrücken). Folgerung: Purine (A+G) = Pyrimidine (C+T). Diese Regel gilt für doppelsträngige DNA; für einzelsträngige RNA oder Einzelstrang-DNA nicht.",
          hints: ["Chargaff: denke an komplementäre Basenpaarung in der Doppelhelix.", "A paart mit T (2 H-Brücken), G paart mit C (3 H-Brücken). Was folgt daraus quantitativ?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Erkrankung entsteht durch Ablagerung von Natriumurat-Kristallen in Gelenken?",
          options: [
            "Diabetes mellitus",
            "Phenylketonurie",
            "Gicht (Arthritis urica)",
            "Alkaptonurie",
            "Homocystinurie",
          ],
          correctIndex: 2,
          explanation: "Gicht (Arthritis urica, Hyperurikämie) ist eine Stoffwechselerkrankung des Purinstoffwechsels. Purine werden im Menschen zu Harnsäure abgebaut (letzter Schritt: Xanthinoxidase). Bei Überproduktion oder verminderter renaler Ausscheidung akkumuliert Harnsäure im Blut. Ab einer Konzentration von ca. 6,8 mg/dl ist die Löslichkeitsgrenze überschritten, Natriumurat kristallisiert aus und lagert sich in Gelenken (bevorzugt Großzehengrundgelenk = Podagra, aber auch Finger, Knie) und in der Niere (Nierensteine) ab. Die Kristalle lösen eine Entzündungsreaktion aus (akuter Gichtanfall mit starken Schmerzen). Therapie: Allopurinol (Xanthinoxidase-Hemmer).",
          hints: ["Harnsäure ist das Endprodukt des Purinstoffwechsels. Was passiert, wenn sie zu hoch konzentriert ist?", "Natriumurat-Kristalle fallen aus und lagern sich ab. Wo verursacht das Schmerzen?"],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aminosäure dient als Vorläufer für Dopamin, Adrenalin und Noradrenalin (Catecholamine)?",
          options: [
            "Tryptophan",
            "Histidin",
            "Tyrosin",
            "Glycin",
            "Phenylalanin (direkt)",
          ],
          correctIndex: 2,
          explanation: "Die Catecholaminbiosynthese beginnt mit Tyrosin (einer aromatischen Aminosäure). Der Weg: Tyrosin → L-DOPA (durch Tyrosinhydroxylase, dem geschwindigkeitsbestimmenden Schritt) → Dopamin (durch DOPA-Decarboxylase) → Noradrenalin (durch Dopamin-β-Hydroxylase) → Adrenalin (durch PNMT). Phenylalanin ist der Vorläufer von Tyrosin (Phenylalanin-Hydroxylase); bei Phenylketonurie (PKU) ist diese Hydroxylase defekt. Tryptophan ist Vorläufer von Serotonin und Melatonin. Histidin ist Vorläufer von Histamin.",
          hints: ["Catecholamine haben einen Catechol-Ring (Benzol mit zwei benachbarten OH-Gruppen). Welche AA hat bereits den Benzolring?", "L-DOPA (bei Parkinson eingesetzt) kommt von welcher Aminosäure?"],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Patient hat erhöhte Harnsäurewerte (Hyperurikämie). Welcher Mechanismus liegt bei der Therapie mit Allopurinol zugrunde?",
          options: [
            "Allopurinol erhöht die renale Ausscheidung von Harnsäure",
            "Allopurinol hemmt die Xanthinoxidase und reduziert so die Harnsäureproduktion",
            "Allopurinol löst Urat-Kristalle in den Gelenken auf",
            "Allopurinol blockiert die Purinaufnahme im Darm",
            "Allopurinol aktiviert die Uricase, die Harnsäure abbaut",
          ],
          correctIndex: 1,
          explanation: "Allopurinol ist ein Strukturanalog des Hypoxanthins. Es hemmt kompetitiv die Xanthinoxidase, das Enzym, das Hypoxanthin → Xanthin → Harnsäure katalysiert. Durch Hemmung der Xanthinoxidase wird weniger Harnsäure gebildet; stattdessen akkumulieren Hypoxanthin und Xanthin (die löslicher als Harnsäure sind und leichter renal ausgeschieden werden). Die Harnsäurekonzentration im Blut sinkt. Allopurinol selbst wird durch die Xanthinoxidase zu Oxipurinol metabolisiert, das ebenfalls ein wirksamer Xanthinoxidase-Inhibitor ist. Menschen haben keine Uricase (anders als die meisten anderen Säugetiere), daher ist Harnsäure unser Endprodukt.",
          hints: ["Allopurinol ist ein Strukturanalog des Hypoxanthin-Substrats der Xanthinoxidase — was macht ein Substratanalog?", "Harnsäure entsteht durch Xanthinoxidase. Wenn man dieses Enzym hemmt..."],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Verbindung ist nach der Hückel-Regel (4n+2 π-Elektronen) NICHT aromatisch?",
          options: [
            "Benzol (C₆H₆, 6 π-Elektronen)",
            "Cyclooctatetraen (C₈H₈, 8 π-Elektronen)",
            "Naphthalin (C₁₀H₈, 10 π-Elektronen)",
            "Pyrrol (C₄H₄NH, 6 π-Elektronen)",
            "Pyridin (C₅H₅N, 6 π-Elektronen)",
          ],
          correctIndex: 1,
          explanation: "Cyclooctatetraen (COT, C₈H₈) hat 8 π-Elektronen. Nach der Hückel-Regel sind 4n+2 π-Elektronen für Aromatizität nötig. Prüfung: 4n+2 = 8 → 4n = 6 → n = 1,5 (kein ganzzahliges n!). Daher ist COT NICHT aromatisch — es ist antiaromatisch (4n π-Elektronen wären sogar destabilisierend). COT ist tatsächlich nicht planar, sondern wannenförmig, um die Antiaromatizität zu vermeiden. Im Gegensatz: Benzol (6, n=1 ✓), Naphthalin (10, n=2 ✓), Pyrrol und Pyridin (beide 6, n=1 ✓).",
          hints: ["4n+2 für n=0,1,2,3 gibt: 2, 6, 10, 14 π-Elektronen. Welche Zahl ist nicht dabei?", "8 π-Elektronen: ist 8 = 4n+2 für ganzzahliges n lösbar?"],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
