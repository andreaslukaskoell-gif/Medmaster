import type { Kapitel } from "../types";

export const chemKapOrganisch: Kapitel = {
  id: "chem-kap6",
  title: "Organische Chemie & Naturstoffe",
  subject: "chemie",
  icon: "🌿",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap12-organische-chemie ===
    // ─────────────────────────────────────────────────────────────────
    // UK 01 — Kohlenwasserstoffe: Alkane, Alkene, Alkine
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-01",
      title: "Kohlenwasserstoffe — Alkane, Alkene, Alkine",
      content: `# Kohlenwasserstoffe — Alkane, Alkene, Alkine

Die organische Chemie befasst sich mit Verbindungen des Kohlenstoffs. Der Kohlenstoff ist einzigartig, weil er stabile Ketten und Ringe bilden kann (Katenation). Kohlenwasserstoffe (KW) enthalten ausschließlich C- und H-Atome und bilden die Grundgerüste aller organischen Verbindungen.

## Alkane — gesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ₊₂

Alkane besitzen ausschließlich C-C-Einfachbindungen (σ-Bindungen). Sie sind gesättigt, das heißt, sie können keine weiteren Atome aufnehmen. Alle Kohlenstoffatome sind sp³-hybridisiert und bilden eine tetraederförmige Anordnung mit einem Bindungswinkel von 109,5°.

**Eigenschaften:**
Alkane sind unpolare Moleküle. Die einzigen intermolekularen Wechselwirkungen sind schwache van-der-Waals-Kräfte (London-Dispersionskräfte). Mit steigender Molekülgröße wächst die Kontaktfläche und damit die Stärke dieser Kräfte — der Siedepunkt steigt. Methan ist bei Raumtemperatur gasförmig, Pentan ist flüssig, Heptan und größere Alkane sind ölige Flüssigkeiten.

**Nomenklatur (IUPAC)**: Längste Kette = Stammname (Methan, Ethan, Propan...). Seitenketten als Präfix: Methyl-, Ethyl-. Nummerierung so, dass Substituenten die niedrigsten Ziffern erhalten. Beispiel: 2-Methylpropan = Isobutan (C₄H₁₀, verzweigt).

**Konstitutionsisomerie**: Ab Butan (C₄H₁₀) existieren Konstitutionsisomere: n-Butan (linear) und Isobutan (verzweigt). Die Zahl der Isomere steigt stark: C₅ hat 3, C₆ hat 5, C₁₀ hat 75 Isomere.

**Cycloalkane**: Ringförmige Alkane (CₙH₂ₙ, gleiche Formel wie Alkene!). Cyclohexan (Sesselkonformation) ist spannungsfrei. Cyclopropan hat hohe Ringspannung (Bindungswinkel 60° statt 109,5°) → reaktiver. **cis/trans-Isomerie** bei disubstituierten Cycloalkanen: cis = Substituenten auf gleicher Seite, trans = gegenüberliegend.

**Typische Reaktion:** Radikalische Substitution (SR)
Alkane reagieren unter UV-Licht oder hohen Temperaturen mit Halogenen. Dabei wird ein H-Atom durch ein Halogenatom ersetzt:
CH₄ + Cl₂ → CH₃Cl + HCl
Die Reaktion läuft über drei Phasen: **Kettenstart** (Cl₂ →[hν] 2 Cl• , homolytische Spaltung), **Kettenfortpflanzung** (Cl• + CH₄ → CH₃• + HCl; CH₃• + Cl₂ → CH₃Cl + Cl•), **Kettenabbruch** (Radikalkombination: 2 Cl• → Cl₂ oder CH₃• + Cl• → CH₃Cl). Die Reaktivität tertiärer C-H > sekundärer > primärer (Stabilität der Radikale durch Hyperkonjugation).

## Alkene — einfach ungesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ

Alkene enthalten mindestens eine C=C-Doppelbindung, bestehend aus einer σ- und einer π-Bindung. Die beteiligten C-Atome sind sp²-hybridisiert, der Bindungswinkel beträgt 120°. Die π-Bindung ist energiereicher und reaktiver als die σ-Bindung.

**Typische Reaktion:** Elektrophile Addition (Additionsreaktion)
Das elektronenreiche π-System greift elektrophile Reagenzien an:
C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-Dibromethan)

**Bromwasser-Nachweis:** Bromwasser (orange) entfärbt sich bei Anwesenheit einer Doppelbindung — die klassische Nachweisreaktion für Alkene und Alkine.

**Markovnikov-Regel:** Bei der Addition von HX an ein asymmetrisches Alken addiert das H an das C-Atom mit mehr H-Atomen (das H-ärmere C erhält X). Grund: Das stabilere (höher substituierte) Carbokation wird als Intermediat bevorzugt.

**cis/trans-Isomerie bei Alkenen**: Die C=C-Doppelbindung ist nicht frei drehbar → wenn beide C-Atome jeweils zwei verschiedene Substituenten tragen, existieren cis- und trans-Isomere. cis-But-2-en: beide Methylgruppen auf gleicher Seite; trans-But-2-en: gegenüberliegende Seite. Bei komplexeren Fällen: E/Z-Nomenklatur (nach CIP-Prioritätsregeln).

## Alkine — zweifach ungesättigte Kohlenwasserstoffe

**Allgemeine Formel:** CₙH₂ₙ₋₂

Alkine besitzen eine C≡C-Dreifachbindung (eine σ- und zwei π-Bindungen). Die Kohlenstoffatome sind sp-hybridisiert, das Molekül ist linear (180°). Alkine reagieren ebenfalls durch elektrophile Addition, können aber zwei Äquivalente des Additionspartners aufnehmen.

**Wichtigstes Alkin:** Ethin (Acetylen, C₂H₂) — wird zum Autogenschweißen genutzt (Verbrennungstemperatur ~3100°C mit O₂).

**Vergleich der drei KW-Klassen:**

| Eigenschaft | Alkan | Alken | Alkin |
|---|---|---|---|
| Hybridisierung | sp³ | sp² | sp |
| Bindungswinkel | 109,5° | 120° | 180° |
| Bindungstyp | nur σ | σ + 1π | σ + 2π |
| Allg. Formel | CₙH₂ₙ₊₂ | CₙH₂ₙ | CₙH₂ₙ₋₂ |
| Typische Reaktion | Radik. Substitution | Elektrophile Addition | Elektrophile Addition |

## Polymerisation

Alkene können durch radikalische oder koordinative Polymerisation zu Makromolekülen verknüpft werden: n CH₂=CH₂ → (−CH₂−CH₂−)ₙ = **Polyethylen (PE)**. Weitere Polymere: Polypropylen (PP), PVC (aus Vinylchlorid), Polystyrol (PS). Klinisch relevant: Polymere in Implantaten, Einwegspritzen und Infusionsbeuteln.

## Siedepunkte und intermolekulare Wechselwirkungen

In der homologen Reihe der Alkane gilt: Je länger die Kette, desto größer die Moleküloberfläche, desto stärkere van-der-Waals-Kräfte (London-Dispersionskräfte), desto höherer Siedepunkt. Beispiele: Methan (−162°C), Ethan (−89°C), Propan (−42°C), Butan (−1°C), Pentan (36°C), Hexan (69°C), Heptan (98°C), Octan (126°C).

**Einfluss der Verzweigung**: n-Pentan (Sdp. 36°C) siedet höher als Neopentan (Sdp. 9,5°C) — obwohl beide C₅H₁₂ haben — weil n-Pentan eine größere Kontaktfläche hat. Mehr Verzweigung → kompaktere, kugelähnliche Form → kleinere Oberfläche → schwächere VdW-Kräfte → niedrigerer Siedepunkt.

**Vergleich: KW vs. funktionalisierte Moleküle**: Ethanol (Sdp. 78°C) siedet viel höher als Dimethylether (−24°C, gleiche Summenformel C₂H₆O), weil Ethanol H-Brücken bilden kann (OH-Gruppe). Carbonsäuren bilden besonders starke H-Brücken (Dimere über COOH-Gruppen) → noch höhere Siedepunkte.

## Klinischer Bezug

Kohlenwasserstoffe spielten historisch als Narkosemittel eine Rolle (Chloroform CHCl₃, Diethylether). Ethanol (ein alkoholischer KW-Abkömmling) wird in der Leber zweistufig abgebaut: Ethanol →[ADH] Acetaldehyd (toxisch!) →[ALDH] Essigsäure → Acetyl-CoA. Disulfiram (Antabus) hemmt ALDH → Acetaldehydakkumulation → Aversionstherapie bei Alkoholismus. Kohlenwasserstoffe in der Atemluft (z.B. Ethan, Pentan) gelten als Biomarker für Lipidperoxidation und oxidativen Stress. **Benzol** (aromatischer KW, 6π-Elektronen, Hückel-Regel) ist krebserregend (akute myeloische Leukämie bei chronischer Exposition). **Methan (CH₄)** als Treibhausgas: 80× stärkerer Treibhauseffekt als CO₂ (auf 20 Jahre), entsteht bei anaerober Zersetzung. **Halogenkohlenwasserstoffe**: Chloroform (CHCl₃, historisches Narkotikum, hepatotoxisch), Tetrachlorkohlenstoff (CCl₄, lebertoxisch → radikalische Metabolisierung in Leber). **FCKW** (Fluorchlorkohlenwasserstoffe): zerstören Ozonschicht durch Freisetzung von Cl-Radikalen in der Stratosphäre (Montreal-Protokoll 1987).
`,
      stichworte: [
        "Alkane",
        "Alkene",
        "Alkine",
        "Kohlenwasserstoffe",
        "sp³-Hybridisierung",
        "sp²-Hybridisierung",
        "sp-Hybridisierung",
        "Bromwassertest",
        "Markovnikov-Regel",
        "Siedepunkte",
        "van-der-Waals-Kräfte",
        "Polymerisation",
      ],
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
          merksatz:
            "sp³ = gesättigt (Alkan), sp² = eine Doppelbindung (Alken), sp = Dreifachbindung (Alkin). Mehr π-Bindungen = mehr Reaktivität.",
        },
        {
          heading: "Radikalische Substitution vs. elektrophile Addition",
          text: "Alkane gehen radikalische Substitutionen ein, weil ihre C-H-Bindungen homolytisch gespalten werden können. Alkene und Alkine bevorzugen elektrophile Additionen, weil ihre π-Elektronen nucleophil wirken und Elektrophile angreifen. Diese grundlegenden Reaktionsprinzipien sind für den MedAT-H essentiell.",
          merksatz:
            "Alkan + Halogen/UV → Substitution (ein H raus, Halogen rein). Alken + Br₂ → Addition (Bromwasser entfärbt sich). Merke: Gesättigte substituieren, ungesättigte addieren.",
        },
        {
          heading: "Homologe Reihe und Siedepunkte",
          text: "Eine homologe Reihe ist eine Gruppe organischer Verbindungen, die sich durch eine CH₂-Gruppe unterscheiden. In der Alkan-Reihe steigen die Siedepunkte pro CH₂-Einheit um ca. 20-30°C. Die Siedepunkte hängen von den van-der-Waals-Kräften ab: Methan (-162°C), Ethan (-89°C), Propan (-42°C), Butan (-1°C), Pentan (36°C), Hexan (69°C), Heptan (98°C), Octan (126°C).",
          merksatz:
            "Mehr C-Atome → größere Moleküloberfläche → stärkere van-der-Waals-Kräfte → höherer Siedepunkt. Verzweigung verkleinert die Oberfläche und senkt den Siedepunkt.",
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
            ],
          },
        },
      ],
      diagram: "functional-groups",

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
        question:
          "Erklären Sie die radikalische Halogenierung von Methan und beschreiben Sie die drei Phasen der Kettenreaktion.",
        answer:
          "Die radikalische Halogenierung ist eine Substitutionsreaktion, bei der ein Wasserstoffatom eines Alkans durch ein Halogenatom ersetzt wird. Sie wird durch UV-Licht oder hohe Temperaturen initiiert und läuft als Kettenreaktion in drei Phasen ab. In der Startphase (Initiation) wird die Halogenmolekülbindung homolytisch gespalten: Cl₂ → 2 Cl•. Dabei entstehen hochreaktive Chlorradikale. In der Fortpflanzungsphase (Propagation) reagiert das Chlorradikal mit Methan: Cl• + CH₄ → •CH₃ + HCl (ein neues Methylradikal entsteht). Dann: •CH₃ + Cl₂ → CH₃Cl + Cl• (ein neues Chlorradikal regeneriert). Diese zwei Schritte wiederholen sich tausende Male, weshalb aus einem Cl•-Radikal viele Produktmoleküle entstehen. In der Abbruchphase (Termination) rekombinieren zwei Radikale miteinander: Cl• + Cl• → Cl₂; •CH₃ + Cl• → CH₃Cl; •CH₃ + •CH₃ → C₂H₆. Da Methan vier gleichwertige H-Atome hat, entsteht zunächst nur Chlormethan. Bei Überschuss an Cl₂ können auch Di-, Tri- und Tetrachlormethan entstehen (stufenweise Substitution). Die Reaktion ist für Alkane typisch, weil sie keine reaktiven π-Elektronen besitzen.",
      },
      klinischerBezug:
        "Ethan und Pentan im Ausatemluft gelten als Biomarker für oxidativen Stress (Lipidperoxidation). Ethanol wird hepatisch über Acetaldehyd zur Essigsäure (Acetat) abgebaut; der Acetaldehyd ist für den Kater-Effekt verantwortlich.",
      selfTest: [
        {
          question: "Was ist die allgemeine Summenformel der Alkane?",
          options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙHₙ"],
          correctIndex: 0,
          explanation:
            "Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich C-C-Einfachbindungen. Jedes C-Atom bildet vier Bindungen. An einem endständigen C sitzen 3 H-Atome, an einem Mittel-C je 2 H-Atome. Die Ableitung: CₙH₂ₙ₊₂. Prüfung: Methan CH₄ (n=1: 2·1+2=4 ✓), Ethan C₂H₆ (n=2: 2·2+2=6 ✓), Propan C₃H₈ (n=3: 2·3+2=8 ✓).",
          hints: [
            "Alkane sind gesättigt — denke an die maximale Anzahl H-Atome pro C.",
            "Methan CH₄ hat 1 C und 4 H: passt welche Formel?",
          ],
          difficulty: 1,
          tags: ["alkane", "allgemeine-formel", "cn-h2n2"],
        },
        {
          question: "Welcher Name bezeichnet das Alkan mit 7 Kohlenstoffatomen?",
          options: ["Hexan", "Octan", "Heptan", "Nonan", "Pentan"],
          correctIndex: 2,
          explanation:
            "Die IUPAC-Namen der Alkane: C1=Methan, C2=Ethan, C3=Propan, C4=Butan, C5=Pentan, C6=Hexan, C7=Heptan, C8=Octan, C9=Nonan, C10=Decan. Die griechischen Präfixe spiegeln die Kohlenstoffanzahl wider: Hepta- = 7. Heptan (C₇H₁₆) ist eine farblose Flüssigkeit (Siedepunkt 98°C) und Bestandteil von Benzin.",
          hints: [
            "Die Namen basieren auf griechischen Zahlwörtern: hexa=6, hepta=7, okta=8.",
            "Merkhilfe: Met-Eth-Prop-But-Pent-Hex-Hept-Oct-Non-Dec",
          ],
          difficulty: 1,
          tags: ["iupac", "alkan-namen", "heptan"],
        },
        {
          question:
            "Wie wird der Nachweis einer C=C-Doppelbindung mit Bromwasser durchgeführt, und was ist das Ergebnis?",
          options: [
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein weißer Niederschlag",
            "Bromwasser wird zugegeben; bei Doppelbindung entfärbt sich die orange Lösung",
            "Bromwasser wird zugegeben; bei Doppelbindung färbt sich die Lösung blau",
            "Bromwasser wird zugegeben; bei Doppelbindung steigt die Temperatur messbar an",
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein Gas",
          ],
          correctIndex: 1,
          explanation:
            "Der Bromwassertest ist der klassische Nachweis für ungesättigte Verbindungen (Alkene, Alkine). Bromwasser ist eine orange-braune Lösung von Br₂ in Wasser. Bei Kontakt mit einem Alken addiert Br₂ an die C=C-Doppelbindung (elektrophile Addition): R-CH=CH-R + Br₂ → R-CHBr-CHBr-R. Da das Br₂ verbraucht wird, verschwindet die orange Farbe (Entfärbung). Gesättigte Verbindungen (Alkane) reagieren unter diesen Bedingungen nicht mit Bromwasser — keine Entfärbung.",
          hints: [
            "Brom ist orange-braun. Was passiert, wenn es reagiert und verbraucht wird?",
            "Alkene reagieren durch Addition — das Br₂ wird in das Produkt eingebaut.",
          ],
          difficulty: 2,
          tags: ["bromwasser", "alken-nachweis", "elektrophile-addition"],
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
          explanation:
            "Alkane haben keine reaktiven Funktionalitäten (keine π-Elektronen, keine freien Elektronenpaare). Sie reagieren daher kaum. Die wichtigste Reaktion ist die radikalische Halogenierung unter UV-Licht oder hohen Temperaturen, bei der ein H-Atom durch ein Halogenatom ersetzt wird. Die Reaktion läuft über Radikale (homolytische Bindungsspaltung) in drei Phasen: Start, Fortpflanzung, Abbruch. Elektrophile Addition ist typisch für Alkene (π-Elektronen), nicht für Alkane.",
          hints: [
            "Alkane haben nur σ-Bindungen — keine π-Elektronen. Was für eine Reaktion braucht keine Elektrophile?",
            "UV-Licht kann Bindungen homolytisch spalten und Radikale erzeugen.",
          ],
          difficulty: 2,
          tags: ["alkane", "radikalische-substitution", "uv-licht"],
        },
        {
          question: "Welche Hybridisierung haben die C-Atome in Ethen (C₂H₄)?",
          options: ["sp³", "sp²", "sp", "sp³d", "d²sp³"],
          correctIndex: 1,
          explanation:
            "In Ethen (H₂C=CH₂) sind die C-Atome sp²-hybridisiert. Drei sp²-Hybridorbitale bilden die σ-Gerüstbindungen (120° Winkel, trigonal-planar). Das verbleibende unhybridisierte p-Orbital steht senkrecht zur Molekülebene und bildet mit dem benachbarten p-Orbital die π-Bindung. Zum Vergleich: sp³ (Alkan, Tetraeder, 109,5°), sp (Alkin, linear, 180°). Die sp²-Hybridisierung erklärt die planare Struktur der Doppelbindung und die cis/trans-Isomerie.",
          hints: [
            "Zähle die σ-Bindungspartner + freie Elektronenpaare am C von Ethen: das gibt die Hybridisierung.",
            "sp³=4, sp²=3, sp=2 σ-Bindungsgruppen.",
          ],
          difficulty: 2,
          tags: ["hybridisierung", "sp2", "ethen"],
        },
        {
          question:
            "Das Alkan Butan (C₄H₁₀) hat zwei Konstitutionsisomere. Welches hat den niedrigeren Siedepunkt?",
          options: [
            "n-Butan (unverzweigt), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es kugelförmiger und die Oberfläche kleiner ist",
            "Beide haben den gleichen Siedepunkt, da gleiche Summenformel",
            "n-Butan, weil es leichter ist",
          ],
          correctIndex: 2,
          explanation:
            "Beide Isomere (n-Butan und 2-Methylpropan/Isobutan) haben C₄H₁₀ und das gleiche Molekulargewicht. Der Siedepunkt wird durch die Stärke der van-der-Waals-Kräfte bestimmt, die von der Moleküloberfläche abhängt. n-Butan ist gestreckt (größere Oberfläche, Sdp. -1°C), 2-Methylpropan ist kompakter/kugelförmiger (kleinere Oberfläche, Sdp. -12°C). Mehr Verzweigung → kleinere Oberfläche → schwächere van-der-Waals-Kräfte → niedrigerer Siedepunkt. Dieser Effekt ist prüfungsrelevant!",
          hints: [
            "Van-der-Waals-Kräfte sind oberflächenabhängig. Welches Molekül hat mehr Kontaktfläche?",
            "Streckt man ein Molekül aus, wird die Oberfläche größer — mehr Kontakt mit Nachbarmolekülen möglich.",
          ],
          difficulty: 3,
          tags: ["isomere", "van-der-waals", "siedepunkt"],
        },
        {
          question:
            "Was ist das Hauptprodukt bei der Addition von HBr an Propen (CH₃-CH=CH₂) nach der Markovnikov-Regel?",
          options: [
            "1-Brompropan (Br an C1)",
            "2-Brompropan (Br an C2)",
            "1,2-Dibrompropan",
            "Propan",
            "Propin",
          ],
          correctIndex: 1,
          explanation:
            "Die Markovnikov-Regel besagt: Bei der Addition von HX an ein asymmetrisches Alken addiert das H an das C-Atom mit den meisten H-Atomen (das elektronenreichere C), das X an das C-Atom mit weniger H-Atomen. Bei Propen (CH₃-CH=CH₂): C1 der Doppelbindung hat 2 H (=CH₂), C2 hat 1 H (-CH=). Nach Markovnikov: H an C1, Br an C2 → 2-Brompropan (CH₃-CHBr-CH₃). Mechanistisch entsteht das stabilere Carbokation (sekundär > primär) als Zwischenstufe.",
          hints: [
            "Markovnikov: 'Das Reiche wird reicher' — H geht zur H-reichen Seite.",
            "Das stabilere Carbokation (sekundär > primär) bestimmt das Hauptprodukt.",
          ],
          difficulty: 3,
          tags: ["markovnikov", "hbr-addition", "carbokation"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 02 — Isomerie und Stereochemie
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-02",
      title: "Isomerie und Stereochemie",
      content: `# Isomerie und Stereochemie

Isomere sind Verbindungen mit gleicher Summenformel aber unterschiedlicher Struktur. Das Konzept der Isomerie ist grundlegend für das Verständnis biologischer Aktivität, da oft nur ein Isomer eine spezifische Wirkung hat.

## Konstitutionsisomere (Strukturisomere)

Konstitutionsisomere unterscheiden sich in der Reihenfolge (Konnektivität) der Atome. Sie haben die gleiche Summenformel, aber verschiedene Bindungspartner und damit unterschiedliche chemische und physikalische Eigenschaften.

**Untergruppen:**
- **Skelettisomere**: unterschiedliche Kohlenstoffgerüste (n-Butan vs. Isobutan)
- **Stellungsisomere (Positionsisomere)**: gleiche funktionelle Gruppe an verschiedener Position (1-Propanol vs. 2-Propanol)
- **Funktionsisomere**: verschiedene funktionelle Gruppen bei gleicher Summenformel (Ethanol CH₃CH₂OH vs. Dimethylether CH₃OCH₃, beide C₂H₆O)

**Beispiele:**
- Butan (CH₃-CH₂-CH₂-CH₃) und 2-Methylpropan ((CH₃)₂CH-CH₃) — beide C₄H₁₀, aber verschiedene Sdp. (−1°C vs. −12°C)
- Die Anzahl der Strukturisomere wächst mit der Molekülgröße stark an: C₄H₁₀ → 2, C₅H₁₂ → 3, C₆H₁₄ → 5, C₁₀H₂₂ → 75 Isomere

## Konformationsisomere

Konformere entstehen durch Rotation um C-C-Einfachbindungen (keine Bindung wird gebrochen) und sind ineinander umwandelbar. Bei Ethan: gestaffelte Konformation (Substituenten auf Lücke, energieärmer) vs. ekliptische Konformation (Substituenten auf Deckung, energiereicher, sterische Abstoßung). Bei Cyclohexan: **Sesselkonformation** (spannungsfrei, axiale und äquatoriale Positionen). Große Substituenten (z.B. tert-Butyl) bevorzugen die äquatoriale Position (weniger 1,3-diaxiale Wechselwirkungen).

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
- Gleiche physikalische Eigenschaften (Siedepunkt, Schmelzpunkt, Löslichkeit, IR/UV-Spektrum)
- Gleiche chemische Reaktivität in achiraler Umgebung
- **Verschiedene optische Aktivität**: drehen die Schwingungsebene von linear polarisiertem Licht um den gleichen Betrag, aber in entgegengesetzte Richtungen: (+) = rechtsdrehend (dextrogyr) vs. (−) = linksdrehend (lävogyr). Messung mit dem **Polarimeter** (spez. Drehung [α] = α / (c · l), α = gemessener Drehwinkel, c = Konzentration, l = Schichtdicke)
- **Verschiedene biologische Wirkung** (da Enzyme, Rezeptoren und Transporter selbst chiral sind → stereoselektive Erkennung)

**L-/D-System (Aminosäuren und Zucker):**
- Vergleich mit L-Glycerinaldehyd als Referenz
- Proteinogene Aminosäuren: alle L-Konfiguration
- Glucose im Stoffwechsel: D-Form

**R/S-System (CIP-Nomenklatur):**
1. Alle vier Substituenten am chiralen C nach CIP-Priorität ordnen: höhere Ordnungszahl = höhere Priorität. Bei gleicher direkter Bindung: nächste Atomschicht vergleichen (O > N > C > H)
2. Gruppe mit niedrigster Priorität (4) nach hinten orientieren (vom Betrachter weg)
3. Die verbleibenden drei Gruppen von 1→2→3 abfahren: im Uhrzeigersinn = **R** (rectus, lat. „rechts"), gegen Uhrzeigersinn = **S** (sinister, lat. „links")

**Optische Aktivität und Polarimetrie**: Chirale Moleküle drehen die Schwingungsebene von linear polarisiertem Licht. Gemessen mit dem **Polarimeter**: spezifische Drehung [α]²⁰_D = α / (c × l), mit c = Konzentration (g/mL), l = Küvettenlänge (dm). Das (+)-Enantiomer dreht nach rechts, das (−)-Enantiomer nach links. Achtung: R/S sagt nichts über (+)/(−) aus — diese Zuordnung muss experimentell bestimmt werden!

## Racemisch und meso-Verbindungen

- **Racemisches Gemisch:** 1:1-Gemisch aus R- und S-Enantiomer; optisch inaktiv (Drehungen heben sich auf)
- **Meso-Verbindung:** Molekül mit Chiralitätszentren, aber innerer Spiegelebene → achiral, optisch inaktiv trotz Stereozentren. Beispiel: meso-Weinsäure (zwei Chiralitätszentren, aber innere Spiegelebene → kein Enantiomer, nur Diastereomere möglich)
- **Prochiralität**: Ein sp³-C mit zwei gleichen Substituenten kann durch eine einzige Reaktion chiral werden (relevant für enzymatische Stereospezifität, z.B. Citrat im Citratzyklus)

## Diastereomere

Stereoisomere, die keine Spiegelbilder voneinander sind. Bei n Chiralitätszentren: bis zu 2ⁿ Stereoisomere (Ausnahme: meso-Verbindungen). Diastereomere unterscheiden sich — im Gegensatz zu Enantiomeren — in physikalischen Eigenschaften (Schmelzpunkt, Löslichkeit, Rf-Wert) und können daher durch konventionelle Methoden (Chromatographie, Kristallisation) getrennt werden.

**Spezialfälle der Diastereomerie:**
- **Epimere**: Diastereomere, die sich an genau einem Chiralitätszentrum unterscheiden (z.B. D-Glucose vs. D-Galactose = C4-Epimere; D-Glucose vs. D-Mannose = C2-Epimere)
- **Anomere**: Spezielle Epimere am anomeren C-Atom (α- und β-D-Glucose, relevant für Kohlenhydratchemie)
- **cis/trans-Isomere** an Doppelbindungen oder Ringen sind ebenfalls Diastereomere

## Klinische Relevanz der Chiralität

Die biologische Bedeutung der Isomerie ist enorm: Enzyme, Rezeptoren und Transportproteine sind chiral und erkennen Enantiomere unterschiedlich.

**Thalidomid (Contergan):** R-Enantiomer wirkt als Sedativum; S-Enantiomer ist teratogen (verursacht Missbildungen). Tragisch: Im Körper interkonvertieren beide Formen!
**Ibuprofen:** S(+)-Ibuprofen ist der aktive Wirkstoff; R(-)-Ibuprofen ist deutlich schwächer wirksam (wird aber in vivo teilweise in S-Form umgewandelt).
**L-Dopa vs. D-Dopa:** Bei Parkinson wird nur L-Dopa therapeutisch eingesetzt; D-Dopa hat keine Wirkung, da die DOPA-Decarboxylase stereoselektiv ist.

**Eutomer und Distomer**: Bei chiralen Arzneimitteln heißt das wirksamere Enantiomer **Eutomer**, das weniger wirksame **Distomer**. Moderne Arzneimittelzulassung verlangt separate Prüfung beider Enantiomere. Racemate werden zunehmend durch reine Enantiomere ersetzt: Omeprazol (Racemat) → Esomeprazol (S-Enantiomer, stärkere Wirkung).
`,
      stichworte: [
        "Isomerie",
        "Konstitutionsisomere",
        "Stereoisomere",
        "Chiralität",
        "Enantiomere",
        "Diastereomere",
        "R/S-Konfiguration",
        "cis/trans-Isomerie",
        "Polarimetrie",
        "Thalidomid",
        "optische Aktivität",
        "Eutomer",
      ],
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
          merksatz:
            "Gleiche Formel → Isomere. Verschiedene Konnektivität → Konstitutionsisomere. Gleiche Konnektivität, verschiedene Raumanordnung → Stereoisomere (cis/trans oder R/S).",
        },
        {
          heading: "Das chirale Kohlenstoffatom",
          text: "Ein Kohlenstoffatom ist chiral, wenn es vier verschiedene Substituenten trägt (sp³-hybridisiert). Dann gibt es zwei nicht-superponierbare Spiegelbildformen (Enantiomere). Jedes Chiralitätszentrum verdoppelt theoretisch die Zahl der Stereoisomere (2ⁿ-Regel). In der Biochemie sind fast alle wichtigen Moleküle chiral: Aminosäuren, Monosaccharide, Nucleoside, Steroide. Biologische Systeme (Enzyme, Rezeptoren) sind stereoselektiv — sie erkennen oft nur ein Enantiomer.",
          merksatz:
            "Vier verschiedene Gruppen am C → chirales Zentrum → Enantiomere möglich. Proteinogene Aminosäuren sind alle L-konfiguriert. Bei n Chiralitätszentren: maximal 2ⁿ Stereoisomere.",
        },
        {
          heading: "Klinischer Fall: Thalidomid — das Contergan-Desaster",
          text: "Thalidomid (Contergan) wurde in den 1950er-60er Jahren als Schlaf- und Beruhigungsmittel vermarktet. Es enthält ein Chiralitätszentrum. Das R-Enantiomer hat sedierende Wirkung. Das S-Enantiomer ist teratogen (löst Missbildungen aus — Phokomelie). Das tragische Problem: Im menschlichen Körper findet spontane Racemisierung statt — selbst reines R-Enantiomer wandelt sich in vivo ins S-Enantiomer um, sodass die teratogene Wirkung nicht durch Verabreichung nur des R-Isomers verhindert werden kann. Dieser Fall begründete die moderne Arzneimittelregulierung für chirale Wirkstoffe.",
          merksatz:
            "Thalidomid: R=Sedativum, S=teratogen. Racemisierung in vivo macht Trennung klinisch unwirksam. Lehre: Chirale Arzneimittel müssen auf jedes Enantiomer einzeln geprüft werden.",
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
        question:
          "Was versteht man unter Enantiomeren, und welche klinische Bedeutung hat die Chiralität bei Arzneimitteln? Erläutern Sie das Beispiel Thalidomid.",
        answer:
          "Enantiomere sind zwei Stereoisomere, die sich wie Bild und nicht-superponiertes Spiegelbild verhalten. Sie entstehen an einem chiralen Kohlenstoffatom, das vier verschiedene Substituenten trägt. Enantiomere haben identische physikalische Eigenschaften (Schmelzpunkt, Siedepunkt, Löslichkeit) und identische Reaktivität in achiraler Umgebung. Sie unterscheiden sich ausschließlich in der optischen Aktivität (Drehung polarisierten Lichts in entgegengesetzte Richtungen: (+) rechtsdrehend, (−) linksdrehend) und in ihrem Verhalten gegenüber anderen chiralen Molekülen wie Enzymen und Rezeptoren. Die klinische Bedeutung der Chiralität liegt darin, dass biologische Zielmoleküle (Enzyme, Rezeptoren, Transporter) selbst chiral sind und zwei Enantiomere eines Arzneimittels komplett unterschiedliche biologische Wirkungen haben können. Das deutlichste Beispiel ist Thalidomid (Contergan), das in den späten 1950er Jahren als Racemat als Schlafmittel und Antiemetikum bei Schwangerschaftsübelkeit eingesetzt wurde. Das R-Enantiomer hat die therapeutisch gewünschte sedierende Wirkung. Das S-Enantiomer ist teratogen und verursachte schwere Gliedmaßenfehlbildungen (Phokomelie) bei Tausenden von Kindern. Besonders tragisch ist, dass selbst die Verabreichung des reinen R-Enantiomers die Teratogenität nicht verhindert hätte, da im menschlichen Körper spontane Racemisierung stattfindet (Interkonversion beider Formen). Dieser Fall war ein Wendepunkt in der Pharmakologie und führte zur Einführung strenger Zulassungsvorschriften, die heute die separate Prüfung jedes Enantiomers verlangen.",
      },
      klinischerBezug:
        "Chirale Arzneimittel (Enantiomere) können sehr unterschiedliche Wirkungen haben: Thalidomid (R=Sedativum, S=teratogen), L-Dopa (wirksam bei Parkinson, D-Dopa inaktiv), S-Ibuprofen (aktive Form).",
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
          explanation:
            "Ein Kohlenstoffatom ist chiral (stereogen), wenn es vier verschiedene Substituenten trägt — das können Atome oder Atomgruppen sein. Dann gibt es zwei Möglichkeiten, diese vier Substituenten räumlich anzuordnen: die zwei Anordnungen sind Spiegelbilder voneinander und nicht superponierbar (Enantiomere). Wenn zwei oder mehr Substituenten gleich sind, gibt es nur eine Anordnung (kein chirales Zentrum). Ein sp²-hybridisiertes C (z.B. in einer Doppelbindung) kann kein Chiralitätszentrum sein, da es nur drei Bindungspartner hat.",
          hints: [
            "Denke an eine Hand: links und rechts sind Spiegelbilder. Was macht eine Hand chiral?",
            "Wenn zwei Substituenten gleich sind, kann man das Molekül durch Rotation in sein Spiegelbild überführen.",
          ],
          difficulty: 1,
          tags: ["chiralität", "chiralitätszentrum", "vier-verschiedene-substituenten"],
        },
        {
          question:
            "Zwei Verbindungen haben die Summenformel C₄H₈: But-1-en (CH₂=CH-CH₂-CH₃) und Cyclobutan (viergliedriger Ring). In welche Isomerieklasse fallen diese beiden?",
          options: [
            "Enantiomere",
            "Diastereomere",
            "Konstitutionsisomere",
            "cis/trans-Isomere",
            "Meso-Verbindungen",
          ],
          correctIndex: 2,
          explanation:
            "But-1-en und Cyclobutan haben beide die Summenformel C₄H₈, aber eine völlig unterschiedliche Konnektivität der Atome: But-1-en ist eine offenkettige Verbindung mit einer Doppelbindung, Cyclobutan ist ein gesättigter Ring. Verschiedene Konnektivität = Konstitutionsisomere (Strukturisomere). Enantiomere und Diastereomere sind Stereoisomere (gleiche Konnektivität, verschiedene Raumanordnung). cis/trans-Isomerie ist ein Spezialfall von Diastereomerie bei Doppelbindungen oder Ringen.",
          hints: [
            "Konstitutionsisomere unterscheiden sich in der Reihenfolge der verbundenen Atome — vergleiche die Bindungspartner.",
            "Stereoisomere haben gleiche Konnektivität. Haben But-1-en und Cyclobutan gleiche Bindungspartner?",
          ],
          difficulty: 2,
          tags: ["konstitutionsisomere", "strukturisomere", "konnektivität"],
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
          explanation:
            "L-Alanin und D-Alanin sind Enantiomere: Sie haben identische Summenformel (C₃H₇NO₂) und gleiche Konnektivität (je -NH₂, -COOH, -CH₃ und -H am α-C), unterscheiden sich aber in der räumlichen Anordnung (das α-C-Atom ist chiral). Sie verhalten sich wie Bild und Spiegelbild, sind nicht superponierbar. L-Alanin dreht polarisiertes Licht anders als D-Alanin. Im menschlichen Körper kommen ausschließlich L-Aminosäuren in Proteinen vor; D-Aminosäuren treten in Bakterienzellwänden auf.",
          hints: [
            "L- und D-Aminosäuren: was unterscheidet sie strukturell, wenn sie gleiche Summenformel haben?",
            "Spiegelbildisomere, die nicht deckbar sind, heißen...",
          ],
          difficulty: 2,
          tags: ["enantiomere", "l-aminosäuren", "optische-aktivität"],
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
          explanation:
            "Ein racemisches Gemisch (Racemat) enthält gleiche Mengen (1:1) des R- und S-Enantiomers einer chiralen Verbindung. Da beide Enantiomere polarisiertes Licht in entgegengesetzte Richtungen und im gleichen Ausmaß drehen, heben sich die Drehungen gegenseitig auf — das Racemat ist optisch inaktiv (Drehwert = 0). Das erklärt, warum chemisch synthetisierte chirale Verbindungen oft als Racemate anfallen (keine bevorzugte Reaktionsrichtung), während biologische Systeme stereoselektiv nur ein Enantiomer produzieren.",
          hints: [
            "'Racemat' kommt von 'Traubensäure' (Racema = Traube), die als Gemisch gefunden wurde.",
            "Was passiert mit der optischen Drehung, wenn man gleiche Mengen (+) und (−) mischt?",
          ],
          difficulty: 2,
          tags: ["racemat", "optisch-inaktiv", "r-s-enantiomere"],
        },
        {
          question:
            "Warum können cis- und trans-2-Buten nicht ineinander umgewandelt werden, ohne Bindungen zu brechen?",
          options: [
            "Weil ihre Molekulargewichte unterschiedlich sind",
            "Weil die C=C-Doppelbindung eine π-Bindung enthält, die freie Rotation verhindert",
            "Weil cis-Isomere grundsätzlich stabiler als trans-Isomere sind",
            "Weil die σ-Bindung in der Doppelbindung zu stark ist",
            "Weil beide Moleküle verschiedene Summenformeln haben",
          ],
          correctIndex: 1,
          explanation:
            "Die C=C-Doppelbindung besteht aus einer σ-Bindung (Rotationsachse) und einer π-Bindung (seitliche Überlappung der p-Orbitale). Die π-Bindung kann nur bestehen, wenn die beiden p-Orbitale parallel ausgerichtet sind — eine freie Rotation um die C-C-Achse würde die p-Orbital-Überlappung und damit die π-Bindung zerstören. Das bedeutet: cis- und trans-Isomere sind durch eine Rotationsbarriere getrennt (Bindungsbruch nötig). Bei Einfachbindungen (σ) ist freie Rotation möglich → keine cis/trans-Isomerie.",
          hints: [
            "Die π-Bindung in der Doppelbindung ist eine seitliche p-Orbital-Überlappung. Was passiert bei Rotation?",
            "Vergleiche: σ-Bindung erlaubt Rotation, π-Bindung nicht — warum?",
          ],
          difficulty: 3,
          tags: ["cis-trans-isomerie", "pi-bindung", "rotationsbarriere"],
        },
        {
          question: "Ein Molekül mit zwei Chiralitätszentren hat wie viele maximale Stereoisomere?",
          options: ["2", "4", "6", "8", "1"],
          correctIndex: 1,
          explanation:
            "Die 2ⁿ-Regel gilt für die maximale Anzahl von Stereoisomeren, wobei n die Anzahl der Chiralitätszentren ist. Bei n=2: 2² = 4 maximale Stereoisomere. Bei zwei Chiralitätszentren gibt es die Konfigurationen (R,R), (S,S), (R,S) und (S,R). (R,R) und (S,S) sind Enantiomere; (R,S) und (S,R) sind Enantiomere; aber (R,R) und (R,S) sind Diastereomere. Sonderfall: Wenn die Verbindung eine innere Spiegelebene hat, ist (R,S) = (S,R) (meso-Form) → dann nur 3 Stereoisomere statt 4.",
          hints: [
            "Mit jedem neuen Chiralitätszentrum verdoppelt sich die mögliche Anzahl der Stereoisomere.",
            "2ⁿ: n = Anzahl der Chiralitätszentren.",
          ],
          difficulty: 3,
          tags: ["stereoisomere", "2-hoch-n-regel", "diastereomere"],
        },
        {
          question:
            "Welches Arzneimittel wurde als Racemat vermarktet, wobei ein Enantiomer sedierend und das andere teratogen wirkt?",
          options: ["Ibuprofen", "Aspirin", "Thalidomid", "L-Dopa", "Penicillin"],
          correctIndex: 2,
          explanation:
            "Thalidomid (Handelsname Contergan) wurde in den 1950er/60er Jahren als Racemat gegen Schlaflosigkeit und Schwangerschaftserbrechen eingesetzt. Das R-Enantiomer besitzt sedierende/hypnotische Wirkung. Das S-Enantiomer ist stark teratogen und verursacht bei der Embryonalentwicklung schwere Fehlbildungen der Gliedmaßen (Phokomelie). Das Desaster führte zu über 10.000 geschädigten Kindern und revolutionierte die Arzneimittelzulassung. Wichtig: Racemisierung im Körper macht selbst das 'sichere' R-Enantiomer allein nicht verwendbar.",
          hints: [
            "Dieses Mittel führte Ende der 1950er/Anfang 1960er zu einem der größten Arzneimittelskandale.",
            "Der Handelsname war Contergan. Welche Substanz verbirgt sich dahinter?",
          ],
          difficulty: 1,
          tags: ["thalidomid", "teratogenität", "racemat-klinik"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 03 — Funktionelle Gruppen der Organik
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-03",
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

**Oxidationsreihe (zentral für MedAT!):**
- Primärer Alkohol →[Oxidation] **Aldehyd** (−CHO) →[Oxidation] **Carbonsäure** (−COOH)
- Sekundärer Alkohol →[Oxidation] **Keton** (C=O) → keine weitere Oxidation ohne C-C-Spaltung!
- Tertiärer Alkohol → nicht oxidierbar unter Standardbedingungen

Biologisches Beispiel: Ethanol →[ADH] Acetaldehyd →[ALDH] Essigsäure → Acetyl-CoA (Lebermetabolismus)

**Weitere Reaktionen der Alkohole:**
- Dehydratisierung (konz. H₂SO₄, Wärme): Alkohol → Alken (intramolekulare Eliminierung) oder Ether (intermolekulare Kondensation)
- Veresterung: Alkohol + Carbonsäure ⇌ Ester + H₂O (Fischer-Veresterung, säurekatalysiert, Gleichgewicht)
- Nucleophile Substitution: R-OH → R-X (mit HX oder SOCl₂ → Alkylhalogenid)

## Ether (R−O−R')

Ether enthalten ein O-Atom zwischen zwei organischen Resten. Sie sind relativ unreaktiv (keine H-Brücken-Donor-Funktion) und haben niedrigere Siedepunkte als vergleichbare Alkohole. **Diethylether** (C₂H₅-O-C₂H₅): Historisches Narkosemittel (1846, erste Äthernarkose), heute Lösungsmittel. **Cyclische Ether**: Tetrahydrofuran (THF), Epoxide (reaktiv, weil Ring gespannt → nucleophile Ringöffnung). Biologisch wichtig: Epoxid-Intermediate bei Aromatenstoffwechsel (Benzo[a]pyren → Epoxid → DNA-Addukte → Krebs).

## Aldehyde (−CHO, Aldehydgruppe)

Aldehyde enthalten die Carbonylgruppe (C=O) am Kettenende, gebunden an mindestens ein H-Atom: R-CHO. Die Carbonylgruppe ist polar (δ⁺C=Oδ⁻) → nucleophiler Angriff am C möglich (nucleophile Addition).

**Wichtige Aldehyde:**
- Formaldehyd (HCHO, Methanal): Konservierungsmittel, toxisch (Quervernetzung von Proteinen), Formalin (37% wässrige Lösung). Karzinogen bei chronischer Inhalation
- Acetaldehyd (CH₃CHO, Ethanal): Zwischenprodukt beim Ethanolabbau; verantwortlich für Kater-Symptome und Flush-Syndrom (ALDH2-Polymorphismus bei ~30% der Ostasiaten)
- Glucose (offenkettig): Aldehydgruppe am C1 → reduzierende Eigenschaft (Fehling-Probe positiv)
- Retinal (Vitamin-A-Aldehyd): Sehpigment in der Retina, cis-trans-Isomerisierung bei Lichteinfall

**Reaktionen:** Oxidation zu Carbonsäure (Tollens-Probe: Ag⁺ → Ag-Spiegel; Fehling-Probe: Cu²⁺ → Cu₂O-Niederschlag — beide spezifisch für Aldehyde, nicht Ketone!); nucleophile Addition (Bildung von Halbacetalen mit Alkoholen, z.B. Ringschluss der Glucose); Reduktion zu primärem Alkohol (NaBH₄).

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

Amine sind basisch (freies Elektronenpaar am N nimmt Protonen auf): R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻. Basizität: aliphatische Amine > NH₃ > aromatische Amine (Anilin, freies Elektronenpaar in Konjugation mit Ring → weniger verfügbar).

**Amide** (R-CO-NH₂): Derivate von Carbonsäuren und Aminen. Die **Peptidbindung** (−CO−NH−) ist ein Amid und das zentrale Bindungsmotiv in Proteinen. Amidbindungen sind planar (partieller Doppelbindungscharakter durch Mesomerie) und relativ stabil (Hydrolyse nur enzymatisch durch Proteasen oder unter extremen pH-Bedingungen).

**Thiole** (R-SH): Schwefelanaloga der Alkohole. Cystein enthält eine Thiolgruppe → oxidative Kupplung zweier Cysteine bildet **Disulfidbrücken** (−S−S−, kovalent, stabilisiert Proteinstruktur). Glutathion (GSH): Tripeptid mit Thiolgruppe, wichtigstes intrazelluläres Antioxidans (GSH → GSSG).

**Klinisch wichtige Amine (biogene Amine):**
- Aminosäuren: enthalten sowohl -NH₂ als auch -COOH (amphotere Verbindungen, Zwitterion bei physiologischem pH)
- **Catecholamine**: Dopamin → Noradrenalin → Adrenalin (aus Tyrosin, Synthese in Nebennierenmark und sympathischen Neuronen)
- **Serotonin** (5-HT): aus Tryptophan; Stimmungsregulation, Darmperistaltik
- **Histamin**: aus Histidin (Decarboxylierung); Entzündungsmediator, Magensäuresekretion, allergische Reaktionen. Antihistaminika blockieren H₁-/H₂-Rezeptoren
- **GABA** (γ-Aminobuttersäure): wichtigster inhibitorischer Neurotransmitter im ZNS; Benzodiazepine verstärken GABA-Wirkung

## Zusammenfassung: Funktionelle Gruppen und Oxidationsstufen

| Funktionelle Gruppe | Verbindungsklasse | Oxidationsstufe am C | Beispiel |
|---|---|---|---|
| −OH | Alkohol | niedrig | Ethanol |
| −CHO | Aldehyd | mittel | Acetaldehyd |
| C=O (in Kette) | Keton | mittel | Aceton |
| −COOH | Carbonsäure | hoch | Essigsäure |
| −COO− | Ester | hoch | Triglyceride |
| −CONH₂ | Amid | hoch | Peptidbindung |
| −NH₂ | Amin | — | Dopamin |
| −SH | Thiol | — | Cystein |
`,
      stichworte: [
        "Alkohole",
        "Aldehyde",
        "Ketone",
        "Carbonsäuren",
        "Ester",
        "Amine",
        "Thiole",
        "Oxidationsstufen",
        "Veresterung",
        "Ketonkörper",
        "Neurotransmitter",
        "Disulfidbrücken",
      ],
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
          merksatz:
            "Oxidation: primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (Sackgasse). Tertiärer Alkohol → keine Oxidation ohne C-C-Spaltung.",
        },
        {
          heading: "Veresterung und Hydrolyse — Gleichgewichtsreaktionen",
          text: "Die Veresterung (Carbonsäure + Alkohol → Ester + Wasser) ist eine reversible Gleichgewichtsreaktion. Das Gleichgewicht liegt oft auf Seite der Edukte, daher verwendet man Überschuss einer Komponente oder entfernt das Wasser (Le Chatelier). Katalysator: konz. Schwefelsäure (H⁺). Die Rückreaktion (Hydrolyse) kann sauer oder basisch katalysiert werden. Basische Hydrolyse (Verseifung): Ester + NaOH → Carboxylat (Seife) + Alkohol — irreversibel, weil das Carboxylat-Anion nicht zurück reagiert. Triglyceride (Fette) werden durch Lipasen hydrolysiert: Triglycerid + 3 H₂O → Glycerin + 3 Fettsäuren.",
          merksatz:
            "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser (Gleichgewicht). Triglyceride = Glycerin + 3 Fettsäuren (verbunden durch Esterbindungen). Aspirin = Ester der Salicylsäure.",
        },
        {
          heading: "Ketonkörper und klinische Relevanz",
          text: "Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen in der Leber aus Acetyl-CoA, wenn Glucose mangelt (Fasten, Diabetes mellitus Typ 1). Sie werden von Muskel und Gehirn als alternativer Brennstoff verwendet. Bei übermäßiger Ketonkörperproduktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Symptome: Acetongeruch im Atem (Fruchteruch), Hyperventilation (Kussmaul-Atmung als respiratorische Kompensation), Übelkeit, Bewusstseinseintrübung. Im Labor: erhöhte Ketonkörper im Urin (Ketonurie) und Blut. Nachweis: Nitroprussid-Test (Urin-Stix).",
          merksatz:
            "Ketonkörper bei Diabetes/Fasten: Aceton (Atemgeruch), Acetoacetat, β-Hydroxybutyrat. Ketoazidose: pH sinkt < 7,35. Kussmaul-Atmung = tiefe, schnelle Atemzüge als Kompensation.",
        },
      ],
      diagram: "functional-groups",

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
        question:
          "Beschreiben Sie die Oxidationsreihe der Alkohole von der Alkanstufe bis zur Carbonsäure. Welche biochemische Reaktionskette entspricht dem Abbau von Ethanol im menschlichen Körper?",
        answer:
          "Die Oxidationsreihe organischer Sauerstoffverbindungen verläuft stufenweise. Ausgehend vom Alkan steigt der Oxidationsgrad: Alkan (C-H-Bindungen) → Alkohol (Zugabe einer OH-Gruppe, Oxidation des C-Atoms von -2 auf -1) → Aldehyd (primärer Alkohol verliert ein H, C-Oxidation von -1 auf 0, Produkt: R-CHO) → Carbonsäure (weiterer Oxidationsschritt, C-Oxidation von 0 auf +1, Produkt: R-COOH) → Kohlendioxid (maximale Oxidation +4). Für sekundäre Alkohole endet die Oxidation beim Keton (R-CO-R'), da kein weiteres H am Carbonyl-C vorhanden ist. Der biochemische Ethanolabbau folgt genau dieser Stufenfolge: Ethanol (CH₃-CH₂-OH, primärer Alkohol) wird durch das Enzym Alkohol-Dehydrogenase (ADH) mit NAD⁺ als Elektronenakzeptor zu Acetaldehyd (CH₃-CHO, Ethanal) oxidiert. Acetaldehyd ist das toxische Zwischenprodukt, das für viele Symptome des Katers verantwortlich ist. Im zweiten Schritt oxidiert die Aldehyd-Dehydrogenase (ALDH) den Acetaldehyd zu Essigsäure (Acetat, CH₃-COO⁻). Das Acetat kann in den Citratzyklus eingeschleust werden (als Acetyl-CoA) und vollständig zu CO₂ und Wasser verbrannt werden. Genetische Varianten der ALDH (besonders ALDH2*2 in Ostasien) führen zur Ansammlung von Acetaldehyd und verursachen die Flush-Reaktion (Rötung, Übelkeit).",
      },
      klinischerBezug:
        "Ketonkörper (β-Hydroxybutyrat, Acetoacetat, Aceton) bei Diabetes/Fasten: Acetongeruch, Ketoazidose. Methanol-Vergiftung: Formaldehyd-Metabolit schädigt Retina. Aspirin = Acetylsalicylsäure (Ester).",
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
          explanation:
            "Alkohole sind definiert durch die Hydroxylgruppe (-OH), die an ein Kohlenstoffatom gebunden ist. Die -OH-Gruppe ist polar und ermöglicht Wasserstoffbrückenbindungen, was die Siedepunkte von Alkoholen im Vergleich zu entsprechenden Alkanen deutlich erhöht und die Wasserlöslichkeit kleiner Alkohole erklärt. Wichtig: Nicht alle -OH-Gruppen machen eine Verbindung zum Alkohol — in Carbonsäuren ist die -OH-Gruppe Teil der -COOH-Gruppe.",
          hints: [
            "'Alkohol' enthält '-ol' — was bedeutet die Endung '-ol' in der IUPAC-Nomenklatur?",
            "Ethanol (C₂H₅OH): Was ist die charakteristische Gruppe?",
          ],
          difficulty: 1,
          tags: ["alkohole", "hydroxylgruppe", "funktionelle-gruppe"],
        },
        {
          question:
            "Welches Zwischenprodukt entsteht beim Abbau von Ethanol zu Essigsäure (Acetat) im menschlichen Körper?",
          options: ["Propanol", "Aceton", "Acetaldehyd (Ethanal)", "Formaldehyd", "Milchsäure"],
          correctIndex: 2,
          explanation:
            "Der hepatische Ethanolabbau verläuft zweistufig: (1) Ethanol → Acetaldehyd (Ethanal): katalysiert durch Alkohol-Dehydrogenase (ADH), NAD⁺ → NADH. (2) Acetaldehyd → Acetat (Essigsäure): katalysiert durch Aldehyd-Dehydrogenase (ALDH2), NAD⁺ → NADH. Acetaldehyd ist das toxische Zwischenprodukt, das für Flush-Reaktion, Kater-Symptome (Kopfschmerz, Übelkeit) und langfristige Leberschäden verantwortlich ist. Menschen mit ALDH2*2-Mutation bauen Acetaldehyd langsamer ab → stärkere Reaktionen.",
          hints: [
            "Primärer Alkohol → bei Oxidation entsteht zuerst ein Aldehyd.",
            "ADH = Alkohol-Dehydrogenase; was oxidiert sie Ethanol zu?",
          ],
          difficulty: 2,
          tags: ["ethanolabbau", "acetaldehyd", "aldehyd-dehydrogenase"],
        },
        {
          question:
            "Welche Reaktion entsteht aus Essigsäure (CH₃COOH) und Ethanol (C₂H₅OH) unter Katalyse mit konz. H₂SO₄?",
          options: [
            "Acetaldehyd und Wasser",
            "Diethylether und Wasser",
            "Ethylacetat (Ester) und Wasser",
            "Aceton und Wasser",
            "Milchsäure und Wasser",
          ],
          correctIndex: 2,
          explanation:
            "Die Veresterungsreaktion: Carbonsäure + Alkohol ⇌ Ester + Wasser. CH₃COOH (Essigsäure) + C₂H₅OH (Ethanol) → CH₃-COO-C₂H₅ (Ethylacetat, Essigsäureethylester) + H₂O. Ethylacetat riecht fruchtig und wird als Lösungsmittel verwendet (z.B. in Nagellackentferner). Katalysator: konz. H₂SO₄ oder andere starke Säuren. Die Reaktion ist reversibel (Gleichgewicht); Wasserentfernung verschiebt das Gleichgewicht zur Esterseite.",
          hints: [
            "Veresterung = Carbonsäure + Alkohol. Welche Gruppe bleibt aus der Säure, welche aus dem Alkohol?",
            "Ester hat die Struktur R-COO-R'. Die Endung 'acetat' kommt von Essigsäure.",
          ],
          difficulty: 2,
          tags: ["veresterung", "ester", "ethylacetat"],
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
          explanation:
            "Amine sind organische Derivate des Ammoniaks (NH₃). Der Stickstoff in Aminen besitzt ein freies (nicht-bindendes) Elektronenpaar. Dieses Elektronenpaar kann ein Proton (H⁺) aufnehmen, was das Amin zur Base macht: R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻. Die Basenstärke von Aminen hängt von der Elektronendichte am N ab (aliphatische Amine sind basischer als aromatische Amine). Aminosäuren sind amphoter: die -NH₂-Gruppe ist basisch, die -COOH-Gruppe ist sauer.",
          hints: [
            "Basen nehmen Protonen auf (Brønsted). Was am N-Atom ermöglicht das?",
            "NH₃ (Ammoniak) ist eine Base. Was haben Amine mit Ammoniak gemeinsam?",
          ],
          difficulty: 2,
          tags: ["amine", "freies-elektronenpaar", "brønsted-base"],
        },
        {
          question: "Welche Verbindungsklasse enthält die Carboxylgruppe (-COOH)?",
          options: ["Ester", "Amine", "Ketone", "Carbonsäuren", "Aldehyde"],
          correctIndex: 3,
          explanation:
            "Carbonsäuren sind charakterisiert durch die Carboxylgruppe -COOH, die eine Kombination aus Carbonylgruppe (C=O) und Hydroxylgruppe (-OH) darstellt. Sie sind Brønsted-Säuren und können ein Proton abgeben: R-COOH ⇌ R-COO⁻ + H⁺. Typische pKₐ-Werte: 4-5 (schwache Säuren). Wichtige Vertreter: Ameisensäure (pKₐ 3,75), Essigsäure (pKₐ 4,75), Milchsäure (pKₐ 3,86), Zitronensäure (pKₐ1 3,13). Carbonsäuren bilden Ester durch Reaktion mit Alkoholen.",
          hints: [
            "Die Endsilbe '-säure' deutet auf welche Verbindungsklasse hin?",
            "-COOH = Carbonyl + Hydroxyl. Diese Kombination ist typisch für...",
          ],
          difficulty: 1,
          tags: ["carbonsäuren", "carboxylgruppe", "schwache-säure"],
        },
        {
          question:
            "Was sind Ketonkörper, und bei welcher Stoffwechsellage entstehen sie vermehrt?",
          options: [
            "Aminosäuren; entstehen bei hohem Proteinkonsum",
            "Glucose-Abkömmlinge; entstehen nach Mahlzeiten",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; entstehen bei Glucose-Mangel (Fasten, Diabetes)",
            "Fettsäuren; entstehen bei Fettreicher Ernährung",
            "Triglyceride; entstehen bei hohem Insulinspiegel",
          ],
          correctIndex: 2,
          explanation:
            "Ketonkörper (Acetoacetat, β-Hydroxybutyrat und Aceton) werden in der Leber aus Acetyl-CoA gebildet, wenn die β-Oxidation die Kapazität des Citratzyklus übersteigt — d.h. bei Glucose-Mangel (Fasten, Hunger) oder wenn Glucose nicht genutzt werden kann (Diabetes mellitus Typ 1, Insulinmangel). Ketonkörper dienen als alternativer Energieträger für Gehirn und Muskel. Bei exzessiver Produktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Aceton (flüchtig) verleiht dem Atem einen charakteristischen süßlich-fruchtigen Geruch.",
          hints: [
            "Glucose-Mangel → Leber sucht Alternative. Was wird aus Acetyl-CoA wenn der Citratzyklus überlastet ist?",
            "Ketoazidose ist eine lebensbedrohliche Komplikation beim Typ-1-Diabetes. Welche Verbindungen verursachen den niedrigen pH?",
          ],
          difficulty: 2,
          tags: ["ketonkörper", "ketoazidose", "diabetes-fasten"],
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
          explanation:
            "Aspirin (Acetylsalicylsäure) ist ein Ester: Es entsteht durch Reaktion der Hydroxylgruppe der Salicylsäure mit Essigsäureanhydrid (Veresterung). Die Estergruppe (-COO-) verbindet den Benzolring der Salicylsäure mit der Acetylgruppe. Im Körper wird Aspirin hydrolysiert (gespalten) zu Salicylsäure und Acetat. Aspirin hemmt irreversibel die Cyclooxygenase (COX-1 und COX-2) durch Acetylierung → Hemmung der Prostaglandinsynthese → analgetisch, antipyretisch, antiinflammatorisch, thrombozytenaggregationshemmend.",
          hints: [
            "Aspirin = Acetylsalicylsäure. 'Acetyl-' deutet auf welche Verbindungsklasse hin, wenn es an -OH gebunden ist?",
            "Ester enthalten die Gruppe -COO-. Welches Mittel hat eine solche Gruppe in seiner Struktur?",
          ],
          difficulty: 2,
          tags: ["aspirin", "ester", "cox-hemmung"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 04 — Aromate und biologisch relevante organische Verbindungen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-04",
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

## Heteroaromaten — Stickstoffhaltige Ringsysteme

Heteroaromaten enthalten neben Kohlenstoff mindestens ein Heteroatom (N, O, S) im aromatischen Ring:
- **Pyridin** (6-Ring, 1 N): Stickstoff-Analogon des Benzols, basisch (freies Elektronenpaar am N steht senkrecht zum π-System). Bestandteil von NAD⁺/NADH, Vitamin B₃ (Niacin)
- **Pyrrol** (5-Ring, 1 N): Nicht basisch (Elektronenpaar des N ist in das π-System einbezogen, 6 π-Elektronen). Grundgerüst des **Porphyrins** (4 Pyrrol-Ringe → Häm in Hämoglobin, Chlorophyll)
- **Imidazol** (5-Ring, 2 N): Enthält pyridin-artigen N (basisch) und pyrrol-artigen N (im π-System). Histidin-Seitenkette! pKₐ ~6 → Pufferfunktion bei physiologischem pH
- **Purin** = Imidazol + Pyrimidin (kondensiert): Grundgerüst von Adenin und Guanin
- **Pyrimidin** (6-Ring, 2 N): Grundgerüst von Cytosin, Thymin und Uracil

**Dirigierende Effekte in EAS**: Substituenten am Benzolring beeinflussen die Position der nächsten Substitution:
- **+M/+I-Substituenten** (−OH, −NH₂, −OR, −Alkyl): Elektronendichte im Ring erhöht → aktivierend, dirigieren in **ortho/para**-Position
- **−M/−I-Substituenten** (−NO₂, −COOH, −SO₃H, −CN): Elektronendichte verringert → desaktivierend, dirigieren in **meta**-Position
- Halogene (−F, −Cl, −Br): desaktivierend (−I), aber ortho/para-dirigierend (+M überwiegt bei Richtung)

**Polycyclische aromatische Kohlenwasserstoffe (PAK)**: Naphthalin (2 Ringe), Anthracen (3 Ringe), Benzo[a]pyren (5 Ringe → im Tabakrauch, starkes Karzinogen: metabolische Aktivierung durch CYP450 → Diolepoxid → DNA-Addukte → Mutationen).

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
- **Tyrosin → Schilddrüsenhormone** (T3, T4): benötigt Iod; Iodmangel → Struma (Kropf)
- **Histidin → Histamin**: Decarboxylierung; allergische Reaktion, Magensäuresekretion, Neurotransmitter

## Peptidbindung und Proteinaufbau

Die **Peptidbindung** (−CO−NH−) entsteht durch Kondensation zwischen der α-Carboxylgruppe einer Aminosäure und der α-Aminogruppe der nächsten unter Wasserabspaltung. Die Peptidbindung ist **planar** (partieller Doppelbindungscharakter durch Mesomerie: C=O ↔ C−O⁻/N⁺) und nicht frei drehbar. Die Rotationswinkel Φ (um N−Cα) und Ψ (um Cα−C) bestimmen die Sekundärstruktur.

Peptide: Dipeptid (2 AS), Oligopeptid (3–10 AS), Polypeptid (>10 AS), Protein (>100 AS, gefaltete 3D-Struktur). Proteinstrukturebenen: Primär (AS-Sequenz), Sekundär (α-Helix, β-Faltblatt durch H-Brücken im Rückgrat), Tertiär (3D-Faltung durch hydrophobe WW, ionische WW, Disulfidbrücken, H-Brücken der Seitenketten), Quartär (Anordnung mehrerer Untereinheiten, z.B. Hämoglobin α₂β₂).
`,
      stichworte: [
        "Benzol",
        "Aromatizität",
        "Hückel-Regel",
        "elektrophile Substitution",
        "Heteroaromaten",
        "Pyridin",
        "Purin",
        "Pyrimidin",
        "Aminosäuren",
        "Peptidbindung",
        "Neurotransmitter",
        "Proteinstruktur",
      ],
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
          merksatz:
            "Hückel: 4n+2 π-Elektronen → aromatisch. Benzol: 6 π-Elektronen (n=1). Aromatisch = planar, konjugiert, stabil. EAS bevorzugt (nicht Addition!), um Aromatizität zu erhalten.",
        },
        {
          heading: "Aminosäuren — Struktur und Zwitterion",
          text: "Alle 20 proteinogenen Aminosäuren haben dasselbe Grundgerüst am α-C: -NH₂, -COOH, -H und eine variable R-Gruppe (Seitenkette). Das α-C ist sp³-hybridisiert und bei allen Aminosäuren (außer Glycin) chiral. Im physiologischen pH-Bereich liegt die Aminosäure als Zwitterion vor: die Aminogruppe ist protoniert (-NH₃⁺, positiv) und die Carboxylgruppe deprotoniert (-COO⁻, negativ) → Nettoladung 0 am isoelektrischen Punkt (pI). Die Seitenkette R bestimmt die besonderen Eigenschaften: hydrophob/polar/geladen. Essentielle Aminosäuren (9 beim Menschen) müssen mit der Nahrung zugeführt werden, da der Körper sie nicht selbst synthetisieren kann.",
          merksatz:
            "Aminosäure = α-C mit -NH₂, -COOH, -H, -R. Alle L-konfiguriert in Proteinen. Zwitterion bei pH=pI: -NH₃⁺ und -COO⁻. Essenziell: 9 AA müssen über Nahrung aufgenommen werden.",
        },
        {
          heading: "Purinstoffwechsel — Harnsäure und Gicht",
          text: "Purinbasen (Adenin, Guanin) aus dem Nukleotidabbau werden zu Hypoxanthin und Xanthin abgebaut. Das Enzym Xanthinoxidase oxidiert Xanthin zu Harnsäure (Urat). Beim Menschen ist Harnsäure das Endprodukt (fehlende Uricase). Harnsäure hat geringe Wasserlöslichkeit; bei Hyperurikämie (> 6,8 mg/dl) präzipitieren Natriumurat-Kristalle in Gelenken (Gicht, Podagra) und Nieren (Urolithiasis). Allopurinol (Xanthinoxidase-Hemmer) verhindert die Harnsäureproduktion. Der Xanthin-Inhibitor Febuxostat ist eine neuere Alternative. Diät: purinreiche Nahrung meiden (Fleisch, Innereien, Bier).",
          merksatz:
            "Purine → Xanthin → Harnsäure (Xanthinoxidase). Hyperurikämie → Gicht (Urat-Kristalle in Gelenken). Allopurinol hemmt Xanthinoxidase. Podagra = Gicht im Großzehengrundgelenk.",
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
        question:
          "Was versteht man unter elektrophiler aromatischer Substitution? Erklären Sie den Mechanismus am Beispiel der Nitrierung von Benzol und begründen Sie, warum Aromate bevorzugt Substitution statt Addition eingehen.",
        answer:
          "Die elektrophile aromatische Substitution (EAS) ist die charakteristische Reaktion aromatischer Verbindungen. Bei dieser Reaktion wird ein Wasserstoffatom des Aromaten durch ein Elektrophil (elektronenarme Spezies) ersetzt, wobei das aromatische π-System erhalten bleibt. Der Mechanismus der Nitrierung von Benzol verläuft in zwei Schritten: Im ersten Schritt wird durch Reaktion von konzentrierter Salpetersäure (HNO₃) mit konzentrierter Schwefelsäure (H₂SO₄) das Nitroniumion (NO₂⁺) als reaktives Elektrophil gebildet: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Im zweiten Schritt greift das Nitroniumion (NO₂⁺) das π-Elektronensystem des Benzols nucleophil an. Dabei entsteht ein kationischer Übergangszustand (Wheland-Intermediat oder Areniumion), in dem die aromatische Stabilität kurzzeitig verloren geht — der betroffene Kohlenstoff ist sp³-hybridisiert. Im dritten Schritt wird ein Proton (H⁺) abgespalten; die Aromatizität wird wiederhergestellt, das Proton wird von HSO₄⁻ aufgenommen. Produkt: Nitrobenzol. Aromate bevorzugen Substitution statt Addition aus thermodynamischen Gründen: Die Mesomerie-Energie (Resonanzenergie) des aromatischen Systems beträgt ca. 150 kJ/mol. Eine Additionsreaktion würde diese Resonanzenergie zerstören und ein nicht-aromatisches, energetisch ungünstigeres Produkt liefern. Die Substitution hingegen erhält das aromatische π-System — die 'Treibkraft' ist die Wiederherstellung der Aromatizität durch Protonenabspaltung. Dieses Prinzip erklärt auch die biologische Inertheit von aromatischen Ringen in Biomolekülen.",
      },
      klinischerBezug:
        "Purinstoffwechsel: Harnsäure (Gicht, Hyperurikämie). Aromatische AA: Phe→PKU bei Enzymdefekt; Tyr→Catecholamine (Dopamin, Adrenalin); Trp→Serotonin/Melatonin. Allopurinol hemmt Xanthinoxidase.",
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
          explanation:
            "Benzol (C₆H₆) ist die klassische aromatische Verbindung. Die sechs sp²-hybridisierten C-Atome bilden einen planaren hexagonalen Ring. Jedes C-Atom hat ein p-Orbital senkrecht zur Ringmembran; diese sechs p-Orbitale überlappen zu einem delokalisierten π-System mit 6 π-Elektronen. Die Hückel-Regel (4n+2 mit n=1 → 6 π-Elektronen) ist erfüllt. Alle C-C-Bindungen sind gleichlang (139 pm). Benzol reagiert bevorzugt durch EAS (Substitution), nicht durch Addition — um die Aromatizität und die damit verbundene Resonanzenergie zu erhalten.",
          hints: [
            "Hückel-Regel: 4n+2 π-Elektronen. Für n=1: wie viele π-Elektronen?",
            "Aromatisch = planar, konjugiert, 4n+2 π-Elektronen. Was ist charakteristisch?",
          ],
          difficulty: 1,
          tags: ["benzol", "hückel-regel", "aromatizität"],
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
          explanation:
            "Stickstoffbasen der Nukleinsäuren werden nach ihrer Ringstruktur unterschieden: Purine bestehen aus einem Pyrimidin-Ring und einem Imidazol-Ring (Doppelring = Bicyclus, 9 Atome). Purine: Adenin (A) und Guanin (G) — kommen in DNA und RNA vor. Pyrimidine haben nur einen Sechsring (6 Atome, Monocyclus). Pyrimidine: Cytosin (C, in DNA und RNA), Thymin (T, nur DNA), Uracil (U, nur RNA). Eselsbrücke: 'CUT the Pyrimidine' (Cytosin, Uracil, Thymin sind Pyrimidine).",
          hints: [
            "'Pyr-' kommt von Pyrexis/Pyrimidin (ein Ring). 'Pur-' (Purin) — wie viele Ringe?",
            "Denke an die Größe: Purine sind größer (zwei Ringe), Pyrimidine kleiner (ein Ring).",
          ],
          difficulty: 2,
          tags: ["purine", "pyrimidine", "nukleinsäuren"],
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
          explanation:
            "Chargaff stellte fest, dass in doppelsträngiger DNA die Menge von Adenin immer gleich der Menge von Thymin ist (A = T), und die Menge von Guanin gleich der von Cytosin (G = C). Dies ergibt sich aus der Watson-Crick-Basenpaarung: A-T-Paar (2 Wasserstoffbrücken), G-C-Paar (3 Wasserstoffbrücken). Folgerung: Purine (A+G) = Pyrimidine (C+T). Diese Regel gilt für doppelsträngige DNA; für einzelsträngige RNA oder Einzelstrang-DNA nicht.",
          hints: [
            "Chargaff: denke an komplementäre Basenpaarung in der Doppelhelix.",
            "A paart mit T (2 H-Brücken), G paart mit C (3 H-Brücken). Was folgt daraus quantitativ?",
          ],
          difficulty: 2,
          tags: ["chargaff-regel", "basenpaarung", "dna-doppelhelix"],
        },
        {
          question:
            "Welche Erkrankung entsteht durch Ablagerung von Natriumurat-Kristallen in Gelenken?",
          options: [
            "Diabetes mellitus",
            "Phenylketonurie",
            "Gicht (Arthritis urica)",
            "Alkaptonurie",
            "Homocystinurie",
          ],
          correctIndex: 2,
          explanation:
            "Gicht (Arthritis urica, Hyperurikämie) ist eine Stoffwechselerkrankung des Purinstoffwechsels. Purine werden im Menschen zu Harnsäure abgebaut (letzter Schritt: Xanthinoxidase). Bei Überproduktion oder verminderter renaler Ausscheidung akkumuliert Harnsäure im Blut. Ab einer Konzentration von ca. 6,8 mg/dl ist die Löslichkeitsgrenze überschritten, Natriumurat kristallisiert aus und lagert sich in Gelenken (bevorzugt Großzehengrundgelenk = Podagra, aber auch Finger, Knie) und in der Niere (Nierensteine) ab. Die Kristalle lösen eine Entzündungsreaktion aus (akuter Gichtanfall mit starken Schmerzen). Therapie: Allopurinol (Xanthinoxidase-Hemmer).",
          hints: [
            "Harnsäure ist das Endprodukt des Purinstoffwechsels. Was passiert, wenn sie zu hoch konzentriert ist?",
            "Natriumurat-Kristalle fallen aus und lagern sich ab. Wo verursacht das Schmerzen?",
          ],
          difficulty: 1,
          tags: ["gicht", "harnsäure", "natriumurat"],
        },
        {
          question:
            "Welche Aminosäure dient als Vorläufer für Dopamin, Adrenalin und Noradrenalin (Catecholamine)?",
          options: ["Tryptophan", "Histidin", "Tyrosin", "Glycin", "Phenylalanin (direkt)"],
          correctIndex: 2,
          explanation:
            "Die Catecholaminbiosynthese beginnt mit Tyrosin (einer aromatischen Aminosäure). Der Weg: Tyrosin → L-DOPA (durch Tyrosinhydroxylase, dem geschwindigkeitsbestimmenden Schritt) → Dopamin (durch DOPA-Decarboxylase) → Noradrenalin (durch Dopamin-β-Hydroxylase) → Adrenalin (durch PNMT). Phenylalanin ist der Vorläufer von Tyrosin (Phenylalanin-Hydroxylase); bei Phenylketonurie (PKU) ist diese Hydroxylase defekt. Tryptophan ist Vorläufer von Serotonin und Melatonin. Histidin ist Vorläufer von Histamin.",
          hints: [
            "Catecholamine haben einen Catechol-Ring (Benzol mit zwei benachbarten OH-Gruppen). Welche AA hat bereits den Benzolring?",
            "L-DOPA (bei Parkinson eingesetzt) kommt von welcher Aminosäure?",
          ],
          difficulty: 2,
          tags: ["tyrosin", "catecholamine", "dopamin-biosynthese"],
        },
        {
          question:
            "Ein Patient hat erhöhte Harnsäurewerte (Hyperurikämie). Welcher Mechanismus liegt bei der Therapie mit Allopurinol zugrunde?",
          options: [
            "Allopurinol erhöht die renale Ausscheidung von Harnsäure",
            "Allopurinol hemmt die Xanthinoxidase und reduziert so die Harnsäureproduktion",
            "Allopurinol löst Urat-Kristalle in den Gelenken auf",
            "Allopurinol blockiert die Purinaufnahme im Darm",
            "Allopurinol aktiviert die Uricase, die Harnsäure abbaut",
          ],
          correctIndex: 1,
          explanation:
            "Allopurinol ist ein Strukturanalog des Hypoxanthins. Es hemmt kompetitiv die Xanthinoxidase, das Enzym, das Hypoxanthin → Xanthin → Harnsäure katalysiert. Durch Hemmung der Xanthinoxidase wird weniger Harnsäure gebildet; stattdessen akkumulieren Hypoxanthin und Xanthin (die löslicher als Harnsäure sind und leichter renal ausgeschieden werden). Die Harnsäurekonzentration im Blut sinkt. Allopurinol selbst wird durch die Xanthinoxidase zu Oxipurinol metabolisiert, das ebenfalls ein wirksamer Xanthinoxidase-Inhibitor ist. Menschen haben keine Uricase (anders als die meisten anderen Säugetiere), daher ist Harnsäure unser Endprodukt.",
          hints: [
            "Allopurinol ist ein Strukturanalog des Hypoxanthin-Substrats der Xanthinoxidase — was macht ein Substratanalog?",
            "Harnsäure entsteht durch Xanthinoxidase. Wenn man dieses Enzym hemmt...",
          ],
          difficulty: 3,
          tags: ["allopurinol", "xanthinoxidase", "gicht-therapie"],
        },
        {
          question:
            "Welche Verbindung ist nach der Hückel-Regel (4n+2 π-Elektronen) NICHT aromatisch?",
          options: [
            "Benzol (C₆H₆, 6 π-Elektronen)",
            "Cyclooctatetraen (C₈H₈, 8 π-Elektronen)",
            "Naphthalin (C₁₀H₈, 10 π-Elektronen)",
            "Pyrrol (C₄H₄NH, 6 π-Elektronen)",
            "Pyridin (C₅H₅N, 6 π-Elektronen)",
          ],
          correctIndex: 1,
          explanation:
            "Cyclooctatetraen (COT, C₈H₈) hat 8 π-Elektronen. Nach der Hückel-Regel sind 4n+2 π-Elektronen für Aromatizität nötig. Prüfung: 4n+2 = 8 → 4n = 6 → n = 1,5 (kein ganzzahliges n!). Daher ist COT NICHT aromatisch — es ist antiaromatisch (4n π-Elektronen wären sogar destabilisierend). COT ist tatsächlich nicht planar, sondern wannenförmig, um die Antiaromatizität zu vermeiden. Im Gegensatz: Benzol (6, n=1 ✓), Naphthalin (10, n=2 ✓), Pyrrol und Pyridin (beide 6, n=1 ✓).",
          hints: [
            "4n+2 für n=0,1,2,3 gibt: 2, 6, 10, 14 π-Elektronen. Welche Zahl ist nicht dabei?",
            "8 π-Elektronen: ist 8 = 4n+2 für ganzzahliges n lösbar?",
          ],
          difficulty: 3,
          tags: ["hückel-regel", "antiaromatisch", "cyclooctatetraen"],
        },
      ],
    },
    // === from kap13-naturstoffe ===
    {
      id: "ch-13-01",
      title: "Aminosäuren und Proteine",
      content: `# Aminosäuren und Proteine

## Grundstruktur der Aminosäuren

Alle 20 proteinogenen Aminosäuren besitzen einen einheitlichen Grundbauplan am α-Kohlenstoff: eine **α-Aminogruppe** (–NH₂), eine **α-Carboxylgruppe** (–COOH), ein Wasserstoffatom und eine variable **Seitenkette (R-Gruppe)**. Glycin ist die einzige Ausnahme ohne Stereozentrum (R = H), alle anderen liegen als L-Enantiomere vor.

## Klassifikation der Aminosäuren

Nach der Polarität der R-Gruppe unterscheidet man:
- **Unpolare (hydrophobe)**: Alanin, Valin, Leucin, Isoleucin, Phenylalanin, Tryptophan, Methionin, Prolin
- **Polare ungeladene**: Serin, Threonin, Cystein, Tyrosin, Asparagin, Glutamin
- **Saure (negativ bei pH 7)**: Asparaginsäure, Glutaminsäure
- **Basische (positiv bei pH 7)**: Lysin, Arginin, Histidin
- **Schwefelhaltige**: Cystein (–SH, Disulfidbrücken) und Methionin (–S–CH₃)
- **Aromatische**: Phenylalanin, Tyrosin, Tryptophan

**Essentielle Aminosäuren** (8 beim Erwachsenen): Isoleucin, Leucin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan, Valin. Histidin ist essentiell für Kinder.

## Peptidbindung

Die Peptidbindung entsteht durch **Kondensationsreaktion** zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe der nächsten unter Abspaltung eines Wassermoleküls. Das Resultat ist eine Amidbindung (–CO–NH–). Charakteristika der Peptidbindung: **planar** (sp²-Hybridisierung), **partieller Doppelbindungscharakter** (Mesomerie), **keine freie Rotation** um die C–N-Achse, Syntheserichtung von N-Terminus → C-Terminus.

## Proteinstruktur

Die räumliche Organisation von Proteinen wird in vier Ebenen beschrieben:
- **Primärstruktur**: lineare Aminosäuresequenz, durch Peptidbindungen festgelegt; bestimmt alle übergeordneten Strukturen
- **Sekundärstruktur**: lokale räumliche Anordnung durch H-Brücken im Peptidrückgrat; α-Helix (H-Brücken zwischen C=O an Position n und N–H an n+4), β-Faltblatt (H-Brücken zwischen parallelen oder antiparallelen Strängen)
- **Tertiärstruktur**: gesamte 3D-Faltung des Polypeptids; stabilisiert durch hydrophobe Wechselwirkungen (unpolarer Kern), Disulfidbrücken (Cystein–Cystein), ionische Salzbrücken, H-Brücken und Van-der-Waals-Kräfte
- **Quartärstruktur**: Anordnung mehrerer Untereinheiten (Polypeptidketten) zu einem funktionstüchtigen Proteinkomplex; Beispiel: Hämoglobin (2α + 2β)

## Isoelektrischer Punkt und Zwitterion

Aminosäuren sind **Ampholyte** — sie tragen sowohl eine Amino- als auch eine Carboxylgruppe und existieren in Lösung als **Zwitterion**: bei physiologischem pH liegt die Aminogruppe protoniert (–NH₃⁺) und die Carboxylgruppe deprotoniert (–COO⁻) vor. Die Nettoladung hängt vom pH ab:

| pH-Bereich | Aminogruppe | Carboxylgruppe | Nettoladung |
|------------|-------------|----------------|-------------|
| Stark sauer (pH < 2) | –NH₃⁺ | –COOH | +1 (Kation) |
| pH = pI | –NH₃⁺ | –COO⁻ | 0 (Zwitterion) |
| Stark basisch (pH > 10) | –NH₂ | –COO⁻ | −1 (Anion) |

Der **isoelektrische Punkt (pI)** ist der pH-Wert, bei dem die Nettoladung null beträgt. Für eine einfache Aminosäure ohne ionisierbare Seitenkette: **pI = (pKs₁ + pKs₂) / 2**. Für Aminosäuren mit geladenen Seitenketten (Asp, Glu, Lys, Arg, His) wird pI aus den beiden pKs-Werten berechnet, die das Zwitterion einschließen.

> **Merke:** Am pI wandert die Aminosäure in der Elektrophorese nicht — sie hat keine Nettoladung. Bei pH < pI ist sie positiv geladen (wandert zur Kathode), bei pH > pI negativ (wandert zur Anode).

**Elektrophorese-Anwendung:** In der **SDS-PAGE** werden Proteine nach Molekulargewicht aufgetrennt. SDS überdeckt die Eigenladung und verleiht allen Proteinen eine gleichmäßige negative Ladung → Trennung ausschließlich nach Größe. In der **isoelektrischen Fokussierung** wandern Proteine im pH-Gradienten zu ihrem pI.

---

## Proteinstruktur — Vertiefung

**α-Helix im Detail:** Rechtsgängige Spirale mit 3,6 Aminosäureresten pro Windung. Steighöhe: 0,54 nm pro Windung. H-Brücken verlaufen parallel zur Helixachse zwischen C=O(n) und N–H(n+4). **Prolin** unterbricht die Helix ("Helix-Brecher" durch starre Ringstruktur). α-Keratine (Haare, Nägel) bestehen hauptsächlich aus α-Helices.

**β-Faltblatt im Detail:** Polypeptidketten liegen nebeneinander in Zickzack-Konformation. H-Brücken verlaufen senkrecht zur Kettenrichtung. **Parallel** (gleiche Richtung, schwächere H-Brücken) und **antiparallel** (gegenläufig, stärkere H-Brücken). β-Faltblätter dominieren in Fibroin (Seide) und Immunglobulin-Domänen.

**Ramachandran-Plot:** Jede Aminosäure hat zwei frei drehbare Winkel (φ und ψ) im Peptidrückgrat. Der Ramachandran-Plot zeigt die sterisch erlaubten Kombinationen. α-Helix und β-Faltblatt liegen in klar definierten erlaubten Regionen — Glycin hat den größten erlaubten Bereich (kleinstmögliche Seitenkette).

---

## Post-translationale Modifikationen

Nach der Translation werden viele Proteine chemisch modifiziert:
- **Phosphorylierung** (an Serin, Threonin, Tyrosin): wichtigster Regulationsmechanismus; Kinasen phosphorylieren, Phosphatasen dephosphorylieren
- **Glykosylierung** (N-linked an Asparagin, O-linked an Serin/Threonin): Zelloberflächenproteine, Blutgruppenantigene, Immunglobuline
- **Ubiquitinierung**: Markierung für proteasomalen Abbau (Proteinqualitätskontrolle)
- **Acetylierung** (v.a. Histone): epigenetische Genregulation
- **Disulfidbrückenbildung** (im ER): stabilisiert extrazelluläre Proteine (Insulin, Antikörper)

---

## Denaturierung

Denaturierung = **Verlust der nativen Raumstruktur** (Sekundär- bis Quartärstruktur) bei erhaltener Primärstruktur.

| Auslöser | Mechanismus | Beispiel |
|----------|-------------|---------|
| Hitze (>60 °C) | Zerstörung von H-Brücken und hydrophoben WW | Kochen von Ei |
| Extremer pH | Protonierung/Deprotonierung ionischer Gruppen | Magendenaturierung (HCl) |
| Organische LM | Stören des hydrophoben Effekts | Ethanolfixierung (Histologie) |
| Reduktionsmittel | Spaltung von –S–S– → –SH | β-Mercaptoethanol im Labor |
| Harnstoff/Guanidin | Aufbrechen aller nicht-kovalenten WW | 6 M Harnstoff-Gele |

Denaturierung kann **reversibel** sein (Renaturierung durch langsames Entfernen des Denaturierungsmittels, assistiert durch **Chaperone** wie Hsp70 und GroEL) oder **irreversibel** (gekochtes Ei, Prion-Fehlfaltung). Bei **Prionerkrankungen** (Creutzfeldt-Jakob, BSE) wandelt fehlgefaltetes PrP^Sc (β-Faltblatt-reich) normales PrP^C (α-Helix-reich) in die pathologische Konformation um — autokatalytische Fehlfaltung.

---

## Klinische Relevanz

**Sichelzellanämie**: Punktmutation Glu→Val an Position 6 der β-Globinkette. Die hydrophobe Val-Seitenkette passt in eine hydrophobe Tasche des benachbarten Desoxy-HbS → Polymerisation → sichelförmige Erythrozyten → Gefäßverschlüsse, Hämolyse. Heterozygote (HbAS) haben einen Selektionsvorteil gegen Malaria.

**Phenylketonurie (PKU)**: Autosomal-rezessiver Enzymdefekt der Phenylalanin-Hydroxylase → Phenylalanin akkumuliert, Tyrosin (und damit Dopamin, Melanin, Schilddrüsenhormone) fehlt. Unbehandelt: schwere intellektuelle Behinderung. Therapie: phenylalaninarme Diät ab Geburt. Neugeborenenscreening (Guthrie-Test) ist in Österreich Pflicht.

**Enzym-Biomarker**: Troponin T/I (hochspezifisch Herzinfarkt, Anstieg 3-6 h), CK-MB (Herzmuskelnekrose, früherer Anstieg), LDH (unspezifisch: Hämolyse, Infarkt), GPT/ALT (leberspezifisch: Hepatitis), AST/GOT (Herz + Leber). **Lipase** und **Amylase**: akute Pankreatitis.`,
      stichworte: [
        "Aminosäuren",
        "Proteine",
        "Peptidbindung",
        "Primärstruktur",
        "Sekundärstruktur",
        "Tertiärstruktur",
        "Quartärstruktur",
        "Disulfidbrücken",
        "α-Helix",
        "β-Faltblatt",
        "Denaturierung",
        "Troponin",
      ],
      lernziele: [
        "Den Grundaufbau einer Aminosäure (α-C, Amino-, Carboxylgruppe, R-Gruppe) beschreiben und Aminosäuren nach Polarität und Ladung klassifizieren",
        "Die Bildung einer Peptidbindung als Kondensationsreaktion erklären und ihre strukturellen Besonderheiten (planar, partieller Doppelbindungscharakter) nennen",
        "Die vier Ebenen der Proteinstruktur und die jeweiligen stabilisierenden Wechselwirkungen beschreiben",
        "Denaturierung erklären und Beispiele für reversible und irreversible Denaturierung nennen",
        "Klinisch relevante Proteindefekte (Sichelzellanämie, PKU) und enzymatische Biomarker kennen",
      ],
      sections: [
        {
          heading: "Peptidbindung und Proteinstruktur im Überblick",
          text: "Die Peptidbindung ist das Rückgrat aller Proteine. Sie entsteht durch Kondensation (–H₂O) zwischen –COOH und –NH₂. Ihre Planarität durch Mesomerie schränkt die Rotation ein und zwingt das Polypeptid in definierte Konformationen. Auf der Primärstruktur (Sequenz) bauen Sekundärstruktur (α-Helix, β-Faltblatt durch H-Brücken im Rückgrat), Tertiärstruktur (globale 3D-Faltung durch Seitenketten-WW) und Quartärstruktur (Multimerbildung) auf.",
          merksatz:
            "Primär = Sequenz; Sekundär = H-Brücken im Rückgrat; Tertiär = Seitenketten-Wechselwirkungen; Quartär = Untereinheiten.",
        },
        {
          heading: "Essentielle Aminosäuren und ihre klinische Bedeutung",
          text: "Die acht essentiellen Aminosäuren des Erwachsenen (Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) können vom Körper nicht synthetisiert werden. PKU entsteht bei fehlendem Abbau von Phenylalanin (Enzymdefekt Phe-Hydroxylase → fehlendes Tyrosin, toxische Phe-Metabolite → Hirnschäden wenn unbehandelt). Die Sichelzellanämie zeigt, wie ein einziger Aminosäurenaustausch in der Primärstruktur die gesamte Proteinfunktion und klinische Manifestation verändert.",
          merksatz:
            "Essentielle AS: Ile-Leu-Lys-Met-Phe-Thr-Trp-Val — Merkhilfe: 'Ich Liebe Leckere Mahlzeiten, Phanta-stisch Toll Wirklich Verdient'.",
        },
        {
          heading: "Enzymatische Biomarker in der Klinik",
          text: "Intrazelluläre Enzyme treten bei Zellschäden ins Blut aus und dienen als diagnostische Marker. Troponin T und I sind herzmuskelspezifisch und hochsensitiv für den Myokardinfarkt. CK-MB (Kreatinkinase, Herzfraktion) steigt früh an. LDH (Laktatdehydrogenase) ist wenig spezifisch, aber sensibel. GPT/ALT ist leberparenchymspezifisch (Hepatitis), AST/GOT findet sich in Herz und Leber.",
          merksatz: "Troponin → Herzinfarkt; GPT/ALT → Leber; CK-MB → frühzeitig bei Herzschäden.",
        },
      ],
      merksätze: [
        "Alle proteinogenen Aminosäuren (außer Glycin) sind L-konfiguriert und tragen am α-C: –NH₂, –COOH, –H, –R.",
        "Essentielle AS (8 Erwachsene): Ile, Leu, Lys, Met, Phe, Thr, Trp, Val — Histidin zusätzlich für Kinder.",
        "Peptidbindung = Amidbindung; entsteht durch Kondensation (–H₂O); ist planar wegen Mesomerie.",
        "Synthese am Ribosom: N-Terminus → C-Terminus (5'→3' auf mRNA kodiert).",
        "Sekundärstruktur α-Helix: H-Brücken zwischen C=O(n) und N–H(n+4), rechtsgängig.",
        "Disulfidbrücken (Cys–Cys) sind die einzigen kovalenten Bindungen in der Tertiär-/Quartärstruktur (außer Peptidbindungen).",
        "Denaturierung zerstört Sekundär- bis Quartärstruktur, nicht die Primärstruktur.",
        "Sichelzellanämie: Glu6Val in β-Globin → Hämoglobin-S aggregiert bei Desoxigenierung.",
        "PKU: Phenylalanin-Hydroxylase-Defekt → Phe akkumuliert, Tyrosin wird nicht gebildet.",
        "Biomarker: Troponin = Herzinfarkt; GPT/ALT = Leberschaden; LDH = unspezifisch.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Zusammenhang zwischen Primärstruktur und den höheren Strukturebenen eines Proteins am Beispiel der Sichelzellanämie.",
        answer:
          "Die Primärstruktur eines Proteins ist die lineare Abfolge der Aminosäuren, die durch Peptidbindungen verknüpft sind. Sie wird direkt durch die DNA-Sequenz kodiert und legt alle übergeordneten Strukturen fest, da sie die chemischen Eigenschaften der Seitenketten bestimmt, die für Faltung und Funktion verantwortlich sind. Bei der Sichelzellanämie ist dies exemplarisch zu sehen: Eine einzige Punktmutation im β-Globin-Gen führt zum Austausch der hydrophilen, negativ geladenen Glutaminsäure an Position 6 durch die hydrophobe, ungeladene Aminosäure Valin (Glu6Val). Dieser Austausch verändert die Tertiärstruktur geringfügig, hat aber dramatische Konsequenzen für die Quartärstruktur: Desoxy-HbS-Moleküle polymerisieren, da die hydrophobe Val-Seitenkette in eine komplementäre hydrophobe Tasche eines benachbarten Moleküls passt. Die langen HbS-Polymere verformen Erythrozyten zu sichelförmigen Zellen, die Kapillaren verstopfen und vorzeitig hämolysieren. Dieses Beispiel zeigt, dass die gesamte Funktion eines Proteins – von der atomaren Struktur bis zum klinischen Krankheitsbild – in der Primärstruktur kodiert ist und ein einziger Aminosäureaustausch diese gesamte Kaskade verändern kann.",
      },
      klinischerBezug:
        "Troponin, CK-MB und LDH als Serummarker bei Myokardinfarkt; PKU-Screening bei Neugeborenen; Sichelzellanämie als Modell für Struktur-Funktions-Beziehung.",
      selfTest: [
        {
          question:
            "Welche der folgenden Aminosäuren ist die einzige achirale proteinogene Aminosäure?",
          options: ["Alanin", "Glycin", "Cystein", "Serin", "Valin"],
          correctIndex: 1,
          explanation:
            "Glycin (H₂N–CH₂–COOH) ist die einzige proteinogene Aminosäure ohne Stereozentrum, da das α-Kohlenstoffatom zwei identische Wasserstoffatome trägt (R = H). Damit fehlt die Voraussetzung für Chiralität (vier verschiedene Substituenten am sp³-C). Alle anderen 19 proteinogenen Aminosäuren tragen vier unterschiedliche Gruppen am α-C und liegen ausschließlich in der L-Konfiguration vor. Alanin (R = –CH₃), Cystein (R = –CH₂–SH), Serin (R = –CH₂–OH) und Valin (R = –CH(CH₃)₂) sind alle chiral.",
          hints: [
            "Chiralität erfordert vier verschiedene Substituenten am zentralen Kohlenstoffatom.",
            "Betrachte, was die Seitenkette (R-Gruppe) dieser Aminosäure ist — sie ist die kleinste denkbare.",
          ],
          tags: ["aminosäuren", "chiralität", "glycin"],
          difficulty: 1,
        },
        {
          question:
            "Welche strukturelle Besonderheit der Peptidbindung verhindert die freie Rotation um die C–N-Achse?",
          options: [
            "Die Peptidbindung ist eine Einfachbindung mit großem Raumanspruch",
            "Die Peptidbindung hat partiellen Doppelbindungscharakter durch Mesomerie",
            "Die Peptidbindung ist eine Disulfidbrücke zwischen Cysteinen",
            "Die Peptidbindung enthält ein Metallatom als Rotationshemmung",
            "Die freie Rotation wird ausschließlich durch sterische Hinderung der R-Gruppen verhindert",
          ],
          correctIndex: 1,
          explanation:
            "Die Peptidbindung (–CO–NH–) besitzt partiellen Doppelbindungscharakter aufgrund von Mesomerie: Das freie Elektronenpaar des Stickstoffs ist in das π-System der benachbarten Carbonylgruppe delokalisiert. Dadurch liegt die C–N-Bindung energetisch zwischen Einfach- und Doppelbindung (Bindungslänge ~1,32 Å, kürzer als typische C–N-Einfachbindung mit ~1,47 Å). Diese Elektronendelokalisierung macht die Bindung planar und starr — alle vier Atome (Cα, C=O, N, H sowie der folgende Cα) liegen in einer Ebene. Dies schränkt die möglichen Konformationen eines Polypeptids erheblich ein und ist Grundlage für definierte Sekundärstrukturen.",
          hints: [
            "Erinnere dich an das Konzept der Mesomerie bei der Amid-Gruppe.",
            "Bei welchem Hybridisierungszustand ist keine freie Rotation möglich?",
          ],
          tags: ["peptidbindung", "mesomerie", "proteinstruktur"],
          difficulty: 2,
        },
        {
          question: "Welche Wechselwirkungen stabilisieren die α-Helix als Sekundärstruktur?",
          options: [
            "Kovalente Disulfidbrücken zwischen Cysteinen im gleichen Strang",
            "Ionische Wechselwirkungen zwischen geladenen Seitenketten",
            "Intramolekulare Wasserstoffbrücken zwischen C=O(n) und N–H(n+4) im Peptidrückgrat",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Seitenketten",
            "Phosphodiesterbindungen zwischen den Aminosäureresten",
          ],
          correctIndex: 2,
          explanation:
            "Die α-Helix wird durch intramolekulare Wasserstoffbrücken zwischen der Carbonylgruppe (C=O) der Aminosäure an Position n und der Amidgruppe (N–H) der Aminosäure an Position n+4 im selben Strang stabilisiert. Diese H-Brücken verlaufen parallel zur Helixachse. Eine vollständige Windung umfasst 3,6 Aminosäurereste. Disulfidbrücken und ionische Wechselwirkungen stabilisieren die Tertiärstruktur, hydrophobe Effekte tragen ebenfalls zur Tertiärstruktur bei. Phosphodiesterbindungen gehören zur DNA/RNA, nicht zu Proteinen.",
          hints: [
            "Sekundärstruktur wird durch H-Brücken im Peptidrückgrat (nicht in den Seitenketten) stabilisiert.",
            "Die Zahl 'n+4' ist der Schlüssel zur α-Helix-Definition.",
          ],
          tags: ["sekundärstruktur", "alpha-helix", "wasserstoffbrücken"],
          difficulty: 2,
        },
        {
          question:
            "Bei der Sichelzellanämie liegt die Ursache in welcher Strukturebene des Hämoglobins?",
          options: [
            "Tertiärstruktur: Fehlfaltung der β-Globinkette durch Disulfidbrückenbruch",
            "Primärstruktur: Glu→Val-Austausch an Position 6 der β-Globinkette",
            "Sekundärstruktur: Zerstörung der α-Helix-Segmente",
            "Quartärstruktur: α- und β-Ketten können sich nicht zusammenlagern",
            "Kovalente Modifikation der Häm-Gruppe durch Oxidation",
          ],
          correctIndex: 1,
          explanation:
            "Die Sichelzellanämie wird durch eine Punktmutation im β-Globin-Gen verursacht, die zu einem Aminosäureaustausch in der Primärstruktur führt: Glutaminsäure (hydrophil, negativ geladen) an Position 6 wird durch Valin (hydrophob, ungeladen) ersetzt. Die veränderte Primärstruktur (HbS statt HbA) führt dazu, dass desoxygenierte HbS-Moleküle polymerisieren, weil die hydrophobe Val6-Seitenkette in eine komplementäre hydrophobe Tasche des Nachbarmoleküls passt. Dieses Beispiel illustriert, wie die Primärstruktur alle übergeordneten Strukturen und die Funktion eines Proteins determiniert.",
          hints: [
            "Beginne bei der molekularen Ursache: eine DNA-Mutation führt zu einem einzigen Aminosäurenaustausch.",
            "Welche Strukturebene beschreibt die Aminosäuresequenz eines Proteins?",
          ],
          tags: ["sichelzellanämie", "primärstruktur", "hämoglobin", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welche der folgenden Bindungstypen trägt zur Stabilisierung der Tertiärstruktur bei, NICHT aber zur Sekundärstruktur?",
          options: [
            "Wasserstoffbrücken zwischen Peptidrückgrat-Gruppen",
            "Disulfidbrücken zwischen Cysteinen",
            "Peptidbindungen zwischen Aminosäureresten",
            "Die planare Struktur der Peptidbindung",
            "Van-der-Waals-Kräfte im Rückgrat",
          ],
          correctIndex: 1,
          explanation:
            "Disulfidbrücken (–S–S–) entstehen durch oxidative Kupplung zweier Cystein-Thiolgruppen (–SH) und sind kovalente Bindungen zwischen Seitenketten — ein charakteristisches Merkmal der Tertiär- (und Quartär-)struktur. Sekundärstrukturen (α-Helix, β-Faltblatt) werden hingegen durch nicht-kovalente Wasserstoffbrücken im Peptidrückgrat stabilisiert. Peptidbindungen definieren die Primärstruktur. Die Planarität der Peptidbindung begrenzt Konformationen, ist aber kein Stabilisierungsmechanismus für eine bestimmte Strukturebene.",
          hints: [
            "Sekundärstruktur = Wasserstoffbrücken im Rückgrat. Was ist dagegen eine kovalente Bindung zwischen Seitenketten?",
            "Cystein enthält eine –SH-Gruppe, die eine besondere kovalente Bindung eingehen kann.",
          ],
          tags: ["tertiärstruktur", "disulfidbrücken", "cystein"],
          difficulty: 3,
        },
        {
          question: "Welche Aussage zur Denaturierung von Proteinen ist korrekt?",
          options: [
            "Denaturierung spaltet alle Peptidbindungen und setzt Aminosäuren frei",
            "Denaturierung zerstört die Primärstruktur, lässt aber höhere Strukturen intakt",
            "Denaturierung hebt Sekundär- bis Quartärstruktur auf, die Primärstruktur bleibt erhalten",
            "Denaturierung ist immer reversibel durch Wiederherstellung physiologischer Bedingungen",
            "Denaturierung betrifft nur die Quartärstruktur, nicht die Sekundärstruktur",
          ],
          correctIndex: 2,
          explanation:
            "Denaturierung bezeichnet den Verlust der nativen räumlichen Struktur (Sekundär-, Tertiär- und Quartärstruktur), wobei die kovalenten Peptidbindungen (Primärstruktur) erhalten bleiben. Auslöser sind Hitze (> Optimum → Zerstörung von H-Brücken und hydrophoben WW), extremer pH (Veränderung ionischer WW), organische Lösungsmittel (Störung des hydrophoben Effekts) und Reduktionsmittel (β-Mercaptoethanol → Spaltung von Disulfidbrücken). Denaturierung kann reversibel sein (manche Enzyme renaturieren bei Normalbedingungen, Chaperone helfen), ist aber häufig irreversibel (gekochtes Eiweiß, Prionen).",
          hints: [
            "Welche Bindungen in einem Protein sind kovalent und welche nicht-kovalent?",
            "Denaturierung = 'Verlust der Natur(form)' — der chemische Rückgrat bleibt, nur die Faltung geht verloren.",
          ],
          tags: ["denaturierung", "proteinstruktur", "reversibel"],
          difficulty: 1,
        },
        {
          question:
            "Ein 45-jähriger Patient kommt mit typischen Brustschmerzen in die Notaufnahme. Welcher der folgenden Labormarker ist am spezifischsten für einen akuten Myokardinfarkt und steigt frühzeitig an?",
          options: [
            "LDH (Laktatdehydrogenase)",
            "GPT/ALT (Alaninaminotransferase)",
            "Amylase",
            "Troponin T oder Troponin I",
            "Gesamtprotein im Serum",
          ],
          correctIndex: 3,
          explanation:
            "Troponin T und Troponin I sind kardiale Proteine des kontraktilen Apparats der Herzmuskelzellen und sind bei gesunden Personen im Blut kaum nachweisbar. Bei Myokardnekrose werden sie frühzeitig (3–6 h nach Ereignis) freigesetzt und sind für mehrere Tage erhöht. Sie gelten heute als Goldstandard für die Infarktdiagnostik (hohe Sensitivität und Spezifität). LDH ist wenig spezifisch (kommt in vielen Geweben vor). GPT/ALT ist ein Leberwert (hepatozellulärer Schaden). Amylase weist auf Pankreatitis hin.",
          hints: [
            "Welches Protein ist ausschließlich im Herzmuskel in dieser Form vorhanden?",
            "Der gesuchte Marker ist seit den 1990ern der Standard für Herzinfarktdiagnostik und hat CK-MB weitgehend ersetzt.",
          ],
          tags: ["biomarker", "troponin", "herzinfarkt", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-02",
      title: "Kohlenhydrate — Mono-, Di- und Polysaccharide",
      content: `# Kohlenhydrate — Mono-, Di- und Polysaccharide

## Monosaccharide — Grundbausteine

Monosaccharide sind nicht weiter hydrolysierbare Zucker mit der allgemeinen Formel (CH₂O)ₙ. Einteilung nach Kettenlänge: **Triosen** (n=3, z.B. Glycerinaldehyd), Tetrosen, **Pentosen** (n=5: Ribose, Desoxyribose), **Hexosen** (n=6: Glucose, Fructose, Galactose). Einteilung nach funktioneller Gruppe: **Aldosen** (Aldehydgruppe am C1, z.B. Glucose) vs. **Ketosen** (Ketogruppe am C2, z.B. Fructose).

**Fischer-Projektion**: Darstellung als offene Kette; Referenz ist D-Glycerinaldehyd (OH rechts am letzten Chiralitätszentrum → D-Konfiguration). **Haworth-Projektion**: Ringform (Pyranose = Sechsring bei Hexosen, Furanose = Fünfring). Bei der Ringschluss-Reaktion entsteht ein neues Chiralitätszentrum: **α-Anomer** (OH am anomeren C1 axial = auf gleicher Seite wie die Ringbildung; in Haworth: unten) vs. **β-Anomer** (OH am C1 äquatorial; in Haworth: oben).

**Epimere**: Konfigurationsisomere, die sich nur an einem Chiralitätszentrum unterscheiden. D-Galactose ist das C4-Epimer von D-Glucose (C4-OH nach oben in Haworth statt unten). D-Mannose ist das C2-Epimer der Glucose.

**Mutarotation**: In wässriger Lösung stellt sich ein Gleichgewicht zwischen α- und β-Form ein, vermittelt über die offenkettige Aldehydform (<1%). Bei D-Glucose: ~36% α-D-Glucopyranose (spez. Drehung +112°), ~64% β-D-Glucopyranose (+18,7°), Gleichgewichtswert +52,7°. Die β-Form überwiegt, da die äquatoriale OH-Position am C1 sterisch günstiger ist (weniger 1,3-diaxiale Wechselwirkungen in der Sesselkonformation).

## Wichtige Monosaccharide

- **D-Glucose**: Aldohexose, Blutglukose (Normalwert 3,9–6,1 mmol/L nüchtern), einziges regulär nutzbares Substrat des Gehirns (Ausnahme: Ketonkörper bei längerem Fasten). Eintritt in die Glykolyse: Phosphorylierung zu Glucose-6-phosphat (G6P) durch Hexokinase. G6P = metabolischer Knotenpunkt (Glykolyse, Pentosephosphatweg, Glykogensynthese, Gluconeogenese)
- **D-Fructose**: Ketohexose, süßester natürlicher Zucker (relative Süßkraft 1,7 vs. Glucose 0,7), Bestandteil von Saccharose. Hepatischer Abbau: Fructose → Fructose-1-phosphat (Fructokinase) → Spaltung durch Aldolase B in Glycerinaldehyd + Dihydroxyacetonphosphat
- **D-Galactose**: Aldohexose, C4-Epimer der Glucose, Bestandteil von Laktose. Umwandlung zu Glucose über Leloir-Pathway: Gal → Gal-1-P → UDP-Gal → UDP-Glc (erfordert Galactose-1-phosphat-Uridyltransferase)
- **D-Ribose**: Aldopentose, Bestandteil der RNA sowie von ATP, NAD⁺, FAD und Coenzym A
- **2-Desoxy-D-Ribose**: Aldopentose, Bestandteil der DNA (OH an C2 durch H ersetzt → chemisch stabilerer Doppelstrang, da weniger anfällig für alkalische Hydrolyse als RNA)

## Glykolyse — Kurzüberblick (Glucose-Abbau)

Die Glykolyse (Embden-Meyerhof-Weg) ist der zentrale Glucoseabbauweg im Zytoplasma: Glucose → 2 Pyruvat + 2 ATP (netto) + 2 NADH. Schlüsselenzyme: **Hexokinase** (Glucose → G6P, irreversibel, ATP-abhängig), **Phosphofructokinase-1** (PFK-1, Schrittmacherenzym, allosterisch reguliert: Aktivatoren AMP, Fructose-2,6-bisphosphat; Inhibitoren ATP, Citrat), **Pyruvatkinase** (PEP → Pyruvat + ATP). Unter aeroben Bedingungen: Pyruvat →[Pyruvatdehydrogenase] Acetyl-CoA → Citratzyklus → Atmungskette (Gesamtbilanz aerob: ~30–32 ATP/Glucose). Unter anaeroben Bedingungen: Pyruvat →[LDH] Lactat (Milchsäuregärung, regeneriert NAD⁺ für fortgesetzte Glykolyse bei O₂-Mangel, z.B. Sprint-Muskulatur).

## Disaccharide und glykosidische Bindung

Zwei Monosaccharide verbinden sich unter Wasserabspaltung durch eine **glykosidische Bindung** (O-glykosidisch) zwischen dem anomeren C und einer OH-Gruppe des zweiten Zuckers. Die Nomenklatur gibt an: Anomerie (α oder β), C-Nummer des ersten Zuckers → C-Nummer des zweiten (z.B. α-1,4-glykosidisch).

**Reduzierende Zucker** besitzen eine freie Halbacetalgruppe (anomeres C), die in der offenkettigen Form als Aldehyd vorliegt und Cu²⁺ in der **Fehling-Probe** zu Cu₂O reduzieren kann (ziegelroter Niederschlag). Maltose und Laktose sind reduzierend (nur ein anomeres C ist an der Bindung beteiligt). Saccharose ist **nicht reduzierend**, da beide anomeren C (C1 der Glucose und C2 der Fructose) an der α-1→β-2-Bindung beteiligt sind — keine freie Halbacetalgruppe.

**Iod-Stärke-Reaktion**: Iod (I₃⁻) lagert sich in die helikale Amylose-Struktur ein → intensiv blau-violette Färbung. Amylopektin → rotbraun (kürzere Helixabschnitte). Cellulose zeigt keine Einlagerung (β-1,4-Ketten bilden keine Helix).

## Polysaccharide

- **Stärke**: Speicherpolysaccharid der Pflanzen. Amylose (20–30%, unverzweigt, α-1,4, Helixstruktur) + Amylopektin (70–80%, verzweigt, α-1,4-Kette mit α-1,6-Verzweigungen alle 20–25 Reste). Abbau: Speichel-α-Amylase (Ptyalin) und Pankreas-α-Amylase spalten α-1,4-Bindungen → Maltose, Maltotriose, Grenzdextrine. Die α-1,6-Verzweigungsstellen werden durch Isomaltase (Bürstensaumenzym) hydrolysiert
- **Glykogen**: Tierisches Speicherpolysaccharid in Leber (~100 g, Blutglukoseregulation) und Skelettmuskel (~400 g, lokale Energiereserve). Wie Amylopektin, aber stärker verzweigt (α-1,6-Verzweigung alle 8–12 Reste → viele nicht-reduzierende Enden → schnelle Glucose-Mobilisierung). **Synthese**: Glykogen-Synthase (α-1,4) + Branching-Enzym (α-1,6). **Abbau**: Glykogen-Phosphorylase (α-1,4 → Glucose-1-phosphat) + Debranching-Enzym. Regulation: Insulin stimuliert Synthese; Glucagon (Leber) und Adrenalin (Muskel) aktivieren Phosphorylase via cAMP-Kaskade
- **Cellulose**: Strukturpolysaccharid der Pflanzenzellwand; β-1,4-verknüpfte Glucose; lineare Ketten mit intramolekularen H-Brücken → unlösliche Mikrofibrillen. Keine Hydrolyse durch humane Enzyme (fehlendes β-1,4-Glucosidase-Gen) → Ballaststoff. Wiederkäuer nutzen bakterielle Cellulasen im Pansen

## Klinischer Bezug

**Laktoseintoleranz**: Laktasemangel (Laktase-Phlorizin-Hydrolase, Bürstensaumenzym) → Laktose wird nicht zu Galactose + Glucose gespalten → unverdaute Laktose im Dickdarm → osmotische Diarrhö + bakterielle Fermentation (CO₂, H₂ → Blähungen). Diagnose: H₂-Atemtest. Primäre Form: altersbedingte Laktase-Herunterregulation bei ~75% der Weltbevölkerung (Laktasepersistenz v.a. in Nordeuropa durch Selektion).

**Galaktosämie**: Mangel an Galactose-1-phosphat-Uridyltransferase (klassische Galaktosämie, autosomal-rezessiv) → Galactose-1-phosphat akkumuliert → Leberschäden, Katarakt (Galactitol-Ablagerung in Linse), geistige Retardierung. Therapie: strikte galactose-/laktosefreie Diät. Neugeborenenscreening.

**Hereditäre Fructoseintoleranz**: Aldolase-B-Mangel → Fructose-1-phosphat akkumuliert in Leber → ATP-Verbrauch, Hypoglykämie, Leberschädigung. Nicht verwechseln mit intestinaler Fructosemalabsorption (häufiger, harmloser; GLUT5-Transporter-Kapazität überschritten → Blähungen).

**Diabetes mellitus / HbA1c**: Chronische Hyperglykämie → nicht-enzymatische Glykierung (Amadori-Umlagerung) von Hämoglobin an N-terminalem Valin der β-Globinkette → **HbA1c** als Langzeitmarker (8–12 Wochen, Erythrozyten-Lebensdauer ~120 Tage). Zielwert bei Typ-2-Diabetes: <7% (53 mmol/mol).

**Glykogenspeicherkrankheiten (Glykogenosen)**: Morbus von Gierke (Typ I, Glucose-6-phosphatase-Mangel → Hypoglykämie, Hepatomegalie), Morbus Pompe (Typ II, lysosomale α-Glucosidase-Mangel → Kardiomyopathie, Muskelschwäche), Morbus McArdle (Typ V, Muskel-Phosphorylase-Mangel → Belastungsintoleranz, Myoglobinurie).`,
      stichworte: [
        "Monosaccharide",
        "Disaccharide",
        "Polysaccharide",
        "Glucose",
        "Maltose",
        "Saccharose",
        "Laktose",
        "Stärke",
        "Glykogen",
        "Cellulose",
        "HbA1c",
        "Glykogenosen",
      ],
      lernziele: [
        "Monosaccharide nach Kettenlänge und funktioneller Gruppe klassifizieren sowie Aldosen und Ketosen unterscheiden",
        "Die Fischer- und Haworth-Projektion erklären und α- und β-Anomere von D-Glucose benennen",
        "Die wichtigsten Disaccharide (Maltose, Saccharose, Laktose) nach Bestandteilen und Bindungstyp unterscheiden sowie das Konzept 'reduzierend/nicht-reduzierend' erklären",
        "Die Polysaccharide Stärke, Glykogen und Cellulose in Struktur und Funktion vergleichen",
        "HbA1c als Langzeitmarker der Glukosekontrolle und Laktoseintoleranz biochemisch erklären",
      ],
      sections: [
        {
          heading: "α- und β-Anomere der Glucose",
          text: "Beim Ringschluss der offenkettigen D-Glucose zur Pyranoseform (Sechsring) greift das C5-OH nukleophil die Aldehydgruppe am C1 an. Dabei entsteht ein neues Chiralitätszentrum am C1 (anomeres Kohlenstoffatom). In der Haworth-Projektion zeigt die OH-Gruppe am C1 bei α-D-Glucose nach unten (gleiche Seite wie die Ringbildung), bei β-D-Glucose nach oben. In wässriger Lösung stellt sich ein Gleichgewicht ein: ~36% α, ~64% β, <1% offenkettige Form (Mutarotation). Der Unterschied ist biologisch bedeutsam: Stärke (α) ist verdaulich, Cellulose (β) ist es nicht.",
          merksatz:
            "α = OH unten in Haworth; β = OH oben. 'α steht axial' (in der Sesselkonformation von Pyranose).",
        },
        {
          heading: "Saccharose ist nicht reduzierend",
          text: "Reduzierende Zucker haben eine freie Halbacetalgruppe (anomere OH) und können Cu²⁺ in der Fehling-Probe reduzieren. Saccharose ist das einzige häufige Disaccharid, das nicht reduzierend ist, weil sowohl das anomere C1 der Glucose als auch das anomere C2 der Fructose an der glykosidischen Bindung (α-1→β-2) beteiligt sind — es gibt keine freie Halbacetalgruppe. Maltose und Laktose sind reduzierend (nur C1 der einen Komponente ist gebunden, C1' der anderen ist frei).",
          merksatz:
            "Saccharose = nicht reduzierend (beide anomere C gebunden). Maltose & Laktose = reduzierend.",
        },
        {
          heading: "HbA1c: Biochemie und klinische Bedeutung",
          text: "HbA1c entsteht durch nicht-enzymatische Glykierung (Maillard-Reaktion): Glucose reagiert spontan mit der freien Aminogruppe am N-terminalen Valin der β-Globinkette über eine Schiff-Base zur stabilen Amadori-Verbindung. Da Erythrozyten keine Membranproteine erneuern (kernlos, keine Proteinsynthese), spiegelt HbA1c die durchschnittliche Blutglukose der letzten ~8–12 Wochen wider. Therapieziel bei Typ-2-Diabetes meist HbA1c < 7% (53 mmol/mol). Beachte: Anämie oder Hämolysezustände verfälschen den HbA1c-Wert.",
          merksatz: "HbA1c = Glykiertes Hämoglobin = 8–12 Wochen Glukosegedächtnis.",
        },
        {
          heading: "Wichtige Disaccharide im Überblick",
          text: "Maltose, Saccharose und Laktose im Vergleich:",
          table: {
            headers: ["Disaccharid", "Bestandteile", "Bindungstyp", "Reduzierend?"],
            rows: [
              ["Maltose", "Glc + Glc", "α-1→4", "ja"],
              ["Saccharose", "Glc + Frc", "α-1→β-2", "nein"],
              ["Laktose", "Gal + Glc", "β-1→4", "ja"],
            ],
          },
        },
      ],
      merksätze: [
        "Aldosen haben die Aldehyd- (–CHO) am C1, Ketosen die Ketofunktion am C2 (z.B. Fructose).",
        "α-D-Glucose: OH an C1 nach unten (axial in Sesselkonformation); β-D-Glucose: OH an C1 nach oben (äquatorial).",
        "D-Galactose = C4-Epimer der D-Glucose (nur C4-OH-Konfiguration unterscheidet sich).",
        "Maltose: Glc-α1,4-Glc; Saccharose: Glc-α1-β2-Frc (nicht reduzierend!); Laktose: Gal-β1,4-Glc.",
        "Amylose: α-1,4-unverzweigt (Helix); Amylopektin: α-1,4 mit α-1,6-Verzweigungen alle 20–25 Reste.",
        "Glykogen = wie Amylopektin, aber α-1,6-Verzweigung alle 8–12 Reste (stärker verzweigt).",
        "Cellulose: β-1,4-Glc → unlöslich; Mensch hat keine Cellulase → Ballaststoff.",
        "HbA1c = nicht-enzymatische Glykierung, spiegelt Ø-Blutglukose der letzten 8–12 Wochen wider.",
        "Laktoseintoleranz: Laktasemangel → Gal+Glc werden nicht freigesetzt → Diarrhö, Blähungen.",
        "Ribose (RNA) = Pentose mit OH am C2; Desoxyribose (DNA) = Pentose ohne OH am C2.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Unterschied zwischen Amylose, Amylopektin und Glykogen in Bezug auf Struktur und physiologische Bedeutung.",
        answer:
          "Amylose, Amylopektin und Glykogen sind alle Glucosepolymere aus α-D-Glucose, unterscheiden sich aber erheblich in ihrer Verzweigungsstruktur und ihrer biologischen Funktion. Amylose ist ein lineares Polymer aus α-1,4-glykosidisch verknüpfter D-Glucose, das in wässriger Lösung eine Helixstruktur annimmt. In dieser Helix werden Jodmoleküle eingelagert, was zu der charakteristischen blau-violetten Färbung beim Stärke-Iod-Nachweis führt. Amylopektin dagegen ist ein verzweigtes Molekül: Es hat ebenfalls ein α-1,4-verknüpftes Grundgerüst, aber zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Beide zusammen bilden die Stärke in Pflanzen als Reservekohlenhydrat. Glykogen ist das funktionelle Analogon in Tier und Mensch und wird vor allem in der Leber (Regulierung des Blutglukosespiegels) und im Skelettmuskel (lokale Energiereserve) gespeichert. Es ähnelt dem Amylopektin strukturell, ist aber noch stärker verzweigt: Die α-1,6-Verzweigungen treten bereits alle 8–12 Glucosereste auf. Diese hohe Verzweigungsdichte hat eine entscheidende physiologische Bedeutung: Sie erzeugt viele nicht-reduzierende Enden, an denen Glykogen-Phosphorylase gleichzeitig Glucosereste abspalten kann, was eine sehr schnelle Mobilisierung von Glucose ermöglicht — wichtig für plötzlichen Energiebedarf (z.B. Flucht, intensive körperliche Belastung).",
      },
      klinischerBezug:
        "HbA1c als Therapiemonitor bei Diabetes mellitus; Laktoseintoleranz durch Laktasemangel; Glykogenspeicherkrankheiten bei Enzymdefekten des Glykogenabbaus.",
      selfTest: [
        {
          question: "Welche Aussage zur Saccharose ist korrekt?",
          options: [
            "Saccharose besteht aus zwei α-D-Glucosemolekülen",
            "Saccharose ist ein reduzierendes Disaccharid",
            "Saccharose wird durch eine α-1→β-2-glykosidische Bindung zwischen Glucose und Fructose gebildet",
            "Saccharose kann durch die Fehling-Probe nachgewiesen werden",
            "Saccharose enthält eine freie Halbacetalgruppe am anomeren Kohlenstoff",
          ],
          correctIndex: 2,
          explanation:
            "Saccharose (Haushaltszucker) besteht aus α-D-Glucose und β-D-Fructose, die durch eine α-1→β-2-glykosidische Bindung verknüpft sind. Diese Bindung involviert beide anomeren Kohlenstoffatome (C1 der Glucose und C2 der Fructose), sodass keine freie Halbacetalgruppe mehr vorliegt. Deshalb ist Saccharose das einzige unter den häufigen Disacchariden, das nicht reduzierend ist und die Fehling-Probe negativ reagiert. Maltose (α-1,4, Glc+Glc) und Laktose (β-1,4, Gal+Glc) sind reduzierend.",
          hints: [
            "Welches Disaccharid hat eine Bindung zwischen beiden anomeren Kohlenstoffatomen?",
            "Nicht-reduzierende Zucker haben keine freie Halbacetalgruppe — warum ist das bei Saccharose so?",
          ],
          tags: ["saccharose", "disaccharide", "reduzierend", "glykosidische-bindung"],
          difficulty: 2,
        },
        {
          question: "Was unterscheidet Amylopektin strukturell von Amylose?",
          options: [
            "Amylopektin besteht aus β-D-Glucose, Amylose aus α-D-Glucose",
            "Amylopektin ist unverzweigt, Amylose enthält α-1,6-Verzweigungen",
            "Amylopektin enthält α-1,6-Verzweigungen alle 20–25 Reste, Amylose ist unverzweigt",
            "Amylopektin kommt nur in Tieren vor, Amylose nur in Pflanzen",
            "Amylopektin hat eine kürzere Kettenlänge als Amylose",
          ],
          correctIndex: 2,
          explanation:
            "Amylose und Amylopektin sind beide Bestandteile der pflanzlichen Stärke und bestehen aus α-D-Glucose mit α-1,4-glykosidischen Hauptkettenbindungen. Amylose ist jedoch ein lineares, unverzweigtes Polymer (bildet Helixstruktur → Iod-Einlagerung → blau). Amylopektin hat dagegen zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Das tierische/humane Glykogen ist strukturell ähnlich wie Amylopektin, aber noch stärker verzweigt (alle 8–12 Reste). Cellulose (nicht Amylose) besteht aus β-D-Glucose.",
          hints: [
            "Denke an den Stärke-Iod-Test: Welcher Stärketyp bildet eine Helix für die Iod-Einlagerung?",
            "Das Präfix 'Pektin' kommt von 'pectus' und weist auf Verzweigung hin — welche Bindung ist für Verzweigungen verantwortlich?",
          ],
          tags: ["amylose", "amylopektin", "stärke", "glykogen"],
          difficulty: 2,
        },
        {
          question: "D-Galactose ist das C4-Epimer von D-Glucose. Was bedeutet 'Epimer'?",
          options: [
            "Zwei Verbindungen mit gleicher Summenformel aber unterschiedlicher Funktionsgruppe",
            "Zwei Stereoisomere, die sich an genau einem Chiralitätszentrum unterscheiden",
            "Zwei Enantiomere, die Spiegelbilder voneinander sind",
            "Zwei Verbindungen, die ineinander umgewandelt werden können ohne Bindungsbruch",
            "Zwei Anomere mit unterschiedlicher Konfiguration am anomeren Kohlenstoff",
          ],
          correctIndex: 1,
          explanation:
            "Epimere sind Diastereomere, die sich nur in der Konfiguration an einem einzigen Chiralitätszentrum unterscheiden. D-Galactose ist das C4-Epimer von D-Glucose: Beide sind Aldohexosen (C₆H₁₂O₆), unterscheiden sich aber ausschließlich in der Konfiguration der OH-Gruppe am C4-Atom (in Haworth: OH nach unten bei Glucose, nach oben bei Galactose). Enantiomere sind vollständige Spiegelbilder (alle Chiralitätszentren invertiert, z.B. D- und L-Glucose). Anomere sind spezielle Epimere am anomeren C (C1 bei Aldosen). Konformere entstehen durch Rotation ohne Bindungsbruch.",
          hints: [
            "Epimere sind eine Untergruppe der Diastereomere — wie viele Chiralitätszentren unterscheiden sich?",
            "Vergleiche die Haworth-Strukturen: An welchem Kohlenstoffatom zeigt die OH-Gruppe bei Galactose anders als bei Glucose?",
          ],
          tags: ["epimere", "galactose", "glucose", "stereoisomerie"],
          difficulty: 3,
        },
        {
          question: "Ein Patient hat HbA1c = 9,5% (80 mmol/mol). Was gibt dieser Wert an?",
          options: [
            "Die aktuelle Blutglukosekonzentration zum Zeitpunkt der Messung",
            "Die durchschnittliche Blutglukosekonzentration der letzten 8–12 Wochen",
            "Den prozentualen Anteil des Hämoglobins, der durch enzymatische Reaktionen verändert wurde",
            "Die Konzentration von freier Glucose im Blutplasma",
            "Den Anteil des Hämoglobins, der durch Oxidation denaturiert ist",
          ],
          correctIndex: 1,
          explanation:
            "HbA1c (Hämoglobin A1c) entsteht durch nicht-enzymatische Glykierung: Glucose reagiert spontan mit der freien α-Aminogruppe des N-terminalen Valins der β-Globinkette. Da Erythrozyten (kernlos, keine Proteinsynthese) ihre Proteine nicht erneuern, akkumuliert HbA1c proportional zur durchschnittlichen Blutglukose über die gesamte Lebensspanne des Erythrozyten (~120 Tage, relevanter Zeitraum 8–12 Wochen). Ein HbA1c von 9,5% entspricht einer durchschnittlichen Glukose von ~12–13 mmol/L und zeigt eine deutlich unzureichende Diabeteskontrolle an. Ein Zielwert < 7% (53 mmol/mol) wird oft angestrebt.",
          hints: [
            "Erythrozyten haben keine Zellkern — können sie ihre Proteine ersetzen?",
            "HbA1c ist das 'glykierte' Hämoglobin — über welchen Zeitraum sammelt sich diese Modifikation an?",
          ],
          tags: ["hba1c", "diabetes", "glykierung", "klinisch"],
          difficulty: 1,
        },
        {
          question: "Warum kann der Mensch Cellulose nicht als Energiequelle nutzen?",
          options: [
            "Cellulose ist aus L-Glucose aufgebaut, die im Stoffwechsel nicht verwertbar ist",
            "Cellulose besitzt keine glykosidischen Bindungen und kann daher nicht hydrolysiert werden",
            "Der Mensch besitzt keine Enzyme zur Hydrolyse der β-1,4-glykosidischen Bindungen",
            "Cellulose enthält kovalent gebundene Phosphatgruppen, die ihre Verdauung verhindern",
            "Cellulose ist zu wasserunlöslich, um überhaupt mit Enzymen in Kontakt zu kommen",
          ],
          correctIndex: 2,
          explanation:
            "Cellulose besteht aus β-1,4-glykosidisch verknüpfter D-Glucose. Der Mensch (und die meisten Säugetiere) besitzen keine β-1,4-Glucosidase (Cellulase), die diese spezifische Bindung hydrolysieren kann. Menschliche Amylasen (Speichel und Pankreas) können nur α-1,4-glykosidische Bindungen spalten (Stärke, Glykogen). Wiederkäuer haben im Pansen Bakterien, die Cellulasen produzieren. Cellulose wird deshalb als unverdaulicher Ballaststoff klassifiziert, obwohl sie aus demselben Monomer (Glucose) wie Stärke besteht. Die Ursache liegt also ausschließlich in der Anomerie (β statt α) der glykosidischen Bindung.",
          hints: [
            "Stärke (α-1,4) und Cellulose (β-1,4) bestehen beide aus Glucose — warum ist nur Stärke verdaulich?",
            "Welche Eigenschaft hat das für Cellulose spezifische Enzym, das Menschen fehlen?",
          ],
          tags: ["cellulose", "beta-1-4", "ballaststoff", "verdauung"],
          difficulty: 2,
        },
        {
          question:
            "Welches Monosaccharid ist der exklusive Energielieferant des Gehirns unter Normalbedingungen?",
          options: ["Fructose", "Galactose", "Glucose", "Ribose", "Mannose"],
          correctIndex: 2,
          explanation:
            "Das Gehirn ist auf eine kontinuierliche Zufuhr von D-Glucose angewiesen, da es keine nennenswerten eigenen Glykogenspeicher hat und unter Normalbedingungen keine freien Fettsäuren oxidieren kann (Blut-Hirn-Schranke limitiert den Transport langkettiger Fettsäuren). Sinkt der Blutglukosespiegel unter ~3 mmol/L (Hypoglykämie), kommt es zu Bewusstseinsstörungen bis zum Koma. Ausnahme: Bei längerem Fasten oder diabetischer Ketoazidose kann das Gehirn schrittweise auf Ketonkörper (Acetoacetat, β-Hydroxybutyrat) umstellen, die aus der hepatischen Fettsäureoxidation entstehen.",
          hints: [
            "Das Gehirn kann keine Fettsäuren direkt verbrennen — was ist dann sein Primärsubstrat?",
            "Hypoglykämie betrifft zuerst das Gehirn — welcher Zucker fehlt dabei?",
          ],
          tags: ["glucose", "gehirn", "hypoglykämie", "energieversorgung"],
          difficulty: 1,
        },
        {
          question:
            "Bei Laktoseintoleranz liegt ein Mangel an welchem Enzym vor, und welche biochemische Konsequenz hat dies direkt?",
          options: [
            "Amylase-Mangel → Stärke wird nicht verdaut → Hyperglykämie",
            "Laktase-Mangel → Laktose wird nicht in Galactose und Glucose gespalten → osmotische Diarrhö",
            "Saccharase-Mangel → Saccharose akkumuliert → Laktoseintoleranz",
            "Galactosidase-Mangel → Galactosämie mit Laktose im Blut",
            "Glucosidasemangel → Glykogenose Typ II (Pompe) mit Laktoseintoleranz",
          ],
          correctIndex: 1,
          explanation:
            "Laktase (Laktase-Phlorizin-Hydrolase) ist eine Disaccharidase im Bürstensaum des Dünndarmepithels, die Laktose (β-1,4-Gal-Glc) in D-Galactose und D-Glucose spaltet. Bei Laktasemangel (primär genetisch, mit zunehmendem Alter bei vielen Ethnien normal) gelangt unverdaute Laktose in den Dickdarm. Dort fermentieren Darmbakterien die Laktose zu kurzkettigen Fettsäuren, CO₂ und H₂ → Blähungen, Schmerzen. Außerdem wirkt unverdaute Laktose osmotisch → osmotische Diarrhö. Amylasemangel betrifft Stärke, Saccharasemangel betrifft Saccharose, Pompe betrifft Glykogen.",
          hints: [
            "Laktase = das Enzym, das Laktose spaltet. Welches Disaccharid ist das und welche Monosaccharide entstehen?",
            "Unverdaulicher Zucker im Dickdarm → Was machen Darmbakterien damit?",
          ],
          tags: ["laktoseintoleranz", "laktase", "disaccharidase", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-03",
      title: "Lipide — Fette, Phospholipide und Steroide",
      stichworte: [
        "Fettsäuren",
        "Triglyceride",
        "Phospholipide",
        "Cholesterin",
        "Steroide",
        "β-Oxidation",
        "Lipoproteine",
        "Statine",
        "Ketonkörper",
        "Membranbildung",
        "Essentielle Fettsäuren",
        "Trans-Fettsäuren",
      ],
      content: `# Lipide — Fette, Phospholipide und Steroide

## Fettsäuren

Fettsäuren sind unverzweigte Carbonsäuren mit langer Kohlenwasserstoffkette (meist 12–24 C-Atome, gerade Anzahl wegen biosynthetischer Verlängerung um je 2 C durch Acetyl-CoA). Einteilung nach Sättigungsgrad:
- **Gesättigte Fettsäuren**: Keine Doppelbindungen; gestreckte Ketten, dicht packbar → festes Fett bei Raumtemperatur. Wichtige Vertreter: **Laurinsäure** (C12:0, Kokosöl), **Myristinsäure** (C14:0), **Palmitinsäure** (C16:0, häufigste gesättigte FS), **Stearinsäure** (C18:0)
- **Einfach ungesättigte (MUFA)**: Eine C=C-Doppelbindung. **Ölsäure** (C18:1Δ9, cis; Hauptfettsäure in Olivenöl) → flüssig bei Raumtemperatur. Palmitoleinsäure (C16:1Δ9)
- **Mehrfach ungesättigte (PUFA)**: ≥2 Doppelbindungen. **Essentielle Fettsäuren** (können nicht de novo synthetisiert werden): Linolsäure (C18:2, ω-6) und α-Linolensäure (C18:3, ω-3). Daraus werden langkettige Derivate gebildet: Arachidonsäure (C20:4, ω-6 → Vorläufer der **Eicosanoide**: Prostaglandine, Thromboxane, Leukotriene) sowie EPA (C20:5, ω-3) und DHA (C22:6, ω-3, wichtig für Gehirn und Retina)

**ω-Nomenklatur**: Die ω-Position gibt die erste Doppelbindung vom Methylende (ω-Ende) aus gezählt an. ω-3: erste Doppelbindung am C3 vom Ende; ω-6: erste Doppelbindung am C6 vom Ende. Die Δ-Nomenklatur zählt dagegen vom Carboxylende (Δ9 = Doppelbindung zwischen C9 und C10).

**cis vs. trans**: Natürlich vorkommende ungesättigte FS liegen fast ausschließlich in **cis-Konfiguration** vor: Knick von ~30° in der Kette → schlechtere Packung → niedrigerer Schmelzpunkt → flüssiges Öl. **Trans-Fettsäuren** (industrielle Fetthärtung, teilgehärtete Pflanzenfette) haben gestreckte Ketten wie gesättigte FS → höherer Schmelzpunkt, fest. Klinisch relevant: Trans-FS erhöhen LDL und senken HDL → atherogen; EU-Verordnung: max. 2% TFA in Lebensmitteln.

**Energiedichte**: Lipide liefern **38 kJ/g** (~9 kcal/g), mehr als doppelt so viel wie Kohlenhydrate oder Proteine (je ~17 kJ/g ≈ 4 kcal/g). Ursache: Fettsäuren sind stärker reduziert (hoher H-Gehalt, wenig O) als Kohlenhydrate (formal CH₂O, „partiell oxidiert"). Zudem speichert Fettgewebe wasserarm, während Glykogen ~2 g Wasser pro g Glykogen bindet.

## Triglyceride (Triacylglycerine)

Triglyceride (TAG) entstehen durch **Veresterung** (Kondensation) von Glycerin mit drei Fettsäuren. Drei OH-Gruppen des Glycerins reagieren mit je einer –COOH-Gruppe → 3 Esterbindungen + 3 H₂O. TAG sind vollständig hydrophob (keine polare Gruppe) und bilden die wichtigsten Energiespeicher in Fettzellen (Adipozyten) — ein 70-kg-Mensch speichert ~15 kg Fett (≈ 570.000 kJ), genug für ~40 Tage Fasten. **Lipolyse**: TAG → Glycerin + 3 freie Fettsäuren (FFS) durch Lipasen: hormonsensitive Lipase (HSL, intrazellulär, durch Adrenalin/Glucagon via cAMP aktiviert, durch Insulin gehemmt), Lipoproteinlipase (LPL, Endothel, spaltet TAG in Lipoproteinen). Die FFS werden im Blut an Albumin gebunden transportiert.

**β-Oxidation**: Die freigesetzten Fettsäuren werden in den Mitochondrien (nach Aktivierung zu Acyl-CoA und Carnitin-Shuttle-Transport durch die innere Mitochondrienmembran) schrittweise um je 2 C-Atome verkürzt → pro Zyklus: 1 Acetyl-CoA + 1 FADH₂ + 1 NADH. Palmitinsäure (C16) liefert nach vollständiger β-Oxidation 8 Acetyl-CoA → Citratzyklus + Atmungskette → ~106 ATP (netto).

## Phospholipide

Phospholipide (v.a. **Glycerophospholipide**) ähneln Triglyceriden, aber die dritte Fettsäure ist durch eine **Phosphatgruppe mit polarem Kopf** ersetzt: sn-1 (meist gesättigte FS) und sn-2 (meist ungesättigte FS, z.B. Arachidonsäure) am Glycerin tragen Fettsäuren, sn-3 trägt Phosphat + polaren Rest. Wichtige Vertreter:

| Phospholipid | Polarer Rest | Funktion |
|---|---|---|
| Phosphatidylcholin (Lecithin) | Cholin | Häufigstes Membranphospholipid, Lungensurfactant |
| Phosphatidylserin | Serin | Innere Membranseite; Apoptosesignal bei Exposition auf Außenseite |
| Phosphatidylethanolamin | Ethanolamin | Zweithäufigstes PL, v.a. innere Membranseite |
| Phosphatidylinositol (PI) | Inositol | Signaltransduktion: PIP₂ → IP₃ + DAG (Second Messenger) |

**Sphingolipide**: Zweite Lipidklasse der Membranen, basierend auf Sphingosin (statt Glycerin): Ceramid (Sphingosin + Fettsäure), Sphingomyelin (Ceramid + Phosphocholin, Myelinscheiden), Glykolipide (Cerebroside, Ganglioside — enthalten Zucker, wichtig für Zell-Zell-Erkennung und Blutgruppenantigene).

**Amphipathischer Charakter**: polarer Phosphatkopf (hydrophil) + zwei unpolare Fettsäureschwänze (hydrophob) → spontane **Bilayer-Bildung** in wässriger Umgebung (treibende Kraft: hydrophober Effekt). Diese Eigenschaft macht Phospholipide zum Grundbaustein aller biologischen Membranen. **Phospholipase A₂** spaltet die Fettsäure an sn-2 (oft Arachidonsäure) ab → Eicosanoid-Synthese (COX → Prostaglandine/Thromboxane; LOX → Leukotriene). NSAIDs (Ibuprofen, ASS) hemmen COX.

## Steroide

Steroide basieren auf dem **Sterangerüst** (Cyclopentanoperhydrophenanthren): drei kondensierte Sechsringe (A, B, C) + ein Fünfring (D). Alle Steroide sind von **Cholesterin** abgeleitet (27 C-Atome, 3β-OH-Gruppe, Δ5-Doppelbindung):
- **Cholesterin**: Membrankomponente (reguliert Fluidität durch Einlagerung zwischen FS-Schwänze), Ausgangsstoff aller Steroide. Biosynthese in der Leber über Mevalonat-Weg (Acetyl-CoA → HMG-CoA → Mevalonat → ... → Cholesterin). Schlüsselenzym: **HMG-CoA-Reduktase** (Ziel der Statine)
- **Gallensäuren** (Cholsäure, Chenodesoxycholsäure): Emulgatoren für Nahrungsfette im Darm. Enterohepatischer Kreislauf (Synthese Leber → Gallensekretion → Resorption terminales Ileum → Pfortader → Leber)
- **Steroidhormone**: Glucocorticoide (Cortisol), Mineralocorticoide (Aldosteron), Androgene (Testosteron), Östrogene (Östradiol), Gestagene (Progesteron). Synthese in NNR und Gonaden. Alle lipophil → intrazelluläre Rezeptoren (Kernrezeptoren) → Genregulation
- **Vitamin D₃**: Cholecalciferol (Haut: 7-Dehydrocholesterin + UV-B) → 25-OH-D₃ (Leber) → 1,25-(OH)₂-D₃ = Calcitriol (Niere, aktive Form) → Calcium/Phosphat-Homöostase

**Lipoproteine** — Lipidtransport im Blut: Lipide sind wasserunlöslich und werden in Lipoproteinen transportiert (Kern: TAG + Cholesterinester; Hülle: Phospholipid-Monolayer + Apolipoproteine). Wichtigste Klassen: **Chylomikronen** (Darm → Gewebe, TAG-reich, exogene Lipide), **VLDL** (Leber → Gewebe, TAG-reich, endogene Lipide), **LDL** („schlechtes" Cholesterin, Cholesterin → periphere Gewebe, atherogen bei Exzess), **HDL** („gutes" Cholesterin, reverser Cholesterintransport → Leber).

## Klinischer Bezug

**Hypercholesterinämie und Atherosklerose**: LDL > 160 mg/dL → Atheroskleroserisiko steigt deutlich. Pathogenese: LDL dringt in Intimaschicht ein → oxidiertes LDL (oxLDL) wird von Makrophagen über Scavenger-Rezeptoren aufgenommen → **Schaumzellbildung** → Fettstreifen → fibröse Plaques → Plaque-Ruptur → Thrombose → Myokardinfarkt/Schlaganfall. **Statine** hemmen HMG-CoA-Reduktase (Schlüsselenzym des Mevalonat-Wegs) → weniger endogene Cholesterinsynthese → Hochregulation der LDL-Rezeptoren in Hepatozyten → LDL-Senkung um 30–50%.

**Omega-3-Fettsäuren** (EPA, DHA aus Fischöl): antiinflammatorisch (hemmen Arachidonsäure-Metabolismus), senken Triglyceride, leicht blutdrucksenkend. Empfohlen bei Hypertriglyceridämie.

**Ketonkörper** (Acetoacetat, β-Hydroxybutyrat, Aceton): Entstehen in Leber-Mitochondrien aus überschüssigem Acetyl-CoA bei gesteigerter β-Oxidation, wenn Oxalacetat für den Citratzyklus nicht ausreicht (Fasten, unkontrollierter Typ-1-Diabetes). Extrahepatische Gewebe (Gehirn, Herz, Muskel) können Ketonkörper als alternative Energiequelle nutzen. Bei unkontrolliertem Diabetes: massive Ketonkörperproduktion → metabolische Azidose (diabetische Ketoazidose, pH < 7,3, Acetongeruch der Atemluft, Kußmaul-Atmung).

**Morbus Gaucher**: Häufigste Sphingolipidose — Mangel an Glucocerebrosidase → Glucocerebrosid akkumuliert in Makrophagen (Gaucher-Zellen) → Hepatosplenomegalie, Knochenbefall. Enzymersatztherapie verfügbar.`,
      lernziele: [
        "Fettsäuren nach Sättigungsgrad klassifizieren, den Unterschied zwischen cis/trans-Konfiguration und seine physiologische Bedeutung erklären",
        "Die Struktur von Triglyceriden und ihre Bildung durch Veresterung beschreiben sowie die Lipolyse erklären",
        "Den amphipathischen Aufbau von Phospholipiden und die Konsequenz für die Membranbildung erläutern",
        "Das Sterangerüst und die wichtigsten Steroide (Cholesterin, Steroidhormone, Vitamin D, Gallensäuren) benennen",
        "Hypercholesterinämie, Atherosklerose und das Wirkprinzip von Statinen (HMG-CoA-Reduktase-Hemmung) erklären",
      ],
      sections: [
        {
          heading: "Fettsäuren: Struktur und Eigenschaften",
          text: "Die Länge der Kohlenwasserstoffkette und der Sättigungsgrad bestimmen physikalische Eigenschaften und biologische Wirkung von Fettsäuren. Gesättigte Fettsäuren (keine Doppelbindungen, Palmitinsäure C16:0, Stearinsäure C18:0) können sich gestreckt eng aneinanderlagern → hohe Van-der-Waals-Kräfte → festes Fett bei Raumtemperatur. Ungesättigte Fettsäuren (Ölsäure C18:1Δ9, cis) haben einen Knick an der Doppelbindung → schlechtere Packung → niedriger Schmelzpunkt → flüssiges Öl. Trans-Fettsäuren aus industrieller Fetthärtung sind atherogen. Essentielle Fettsäuren (Linolsäure ω-6, α-Linolensäure ω-3) dienen als Vorläufer für Eicosanoide (Prostaglandine, Leukotriene).",
          merksatz:
            "Gesättigte Fettsäuren = fest, arteriogen; ungesättigte cis = flüssig, protektiv; trans = fest, arteriogen.",
        },
        {
          heading: "Phospholipide und Membranbildung",
          text: "Glycerophospholipide (z.B. Phosphatidylcholin = Lecithin) bestehen aus Glycerin, zwei Fettsäuren (sn-1 meist gesättigt, sn-2 meist ungesättigt), einer Phosphatgruppe und einem polaren Alkohol-Rest (Cholin, Serin etc.). Sie sind amphipathisch: Der polare Phosphokopf interagiert mit Wasser (hydrophil), die unpolaren Fettsäureschwänze meiden Wasser (hydrophob). In wässrigem Milieu organisieren sich Phospholipide spontan zu einem Bilayer — die Grundstruktur aller biologischen Membranen. Cholesterin lagert sich zwischen die Fettsäureschwänze und moduliert die Membranfluidität (bei tiefen Temperaturen verhindernd Erstarren; bei hohen Temperaturen verhindernd Überfließen).",
          merksatz:
            "Phospholipid = Amphiphil; polarer Kopf außen, apolare Schwänze innen → Bilayer = Membran.",
        },
        {
          heading: "Cholesterin und Statine",
          text: "Cholesterin wird in der Leber aus Acetyl-CoA über den Mevalonat-Weg synthetisiert; das Schlüsselenzym ist HMG-CoA-Reduktase. Im Blut wird Cholesterin in Lipoproteinen transportiert: LDL transportiert Cholesterin zu peripheren Geweben (hohes LDL = 'schlechtes' Cholesterin → Atherosklerose), HDL holt Cholesterin aus Geweben zurück zur Leber. Statine (Atorvastatin, Simvastatin) hemmen kompetitiv HMG-CoA-Reduktase → weniger endogene Cholesterinsynthese → Hochregulation der LDL-Rezeptoren in Hepatozyten → mehr LDL-Aufnahme aus Blut → LDL-Senkung um 30–50%.",
          merksatz:
            "Statine hemmen HMG-CoA-Reduktase → weniger Cholesterinsynthese → LDL-Rezeptor-Hochregulation → LDL-Senkung.",
        },
        {
          heading: "Wichtige Steroide und ihre Funktionen",
          text: "Alle Steroide leiten sich vom Cholesterin ab:",
          table: {
            headers: ["Steroid", "Funktion"],
            rows: [
              [
                "Cholesterin",
                "Membrankomponente (reguliert Fluidität), Ausgangsstoff für alle Steroide",
              ],
              ["Cortisol", "Glucocorticoid; Stressreaktion, Gluconeogenese, Antiinflammation"],
              ["Aldosteron", "Mineralocorticoid; Na⁺/K⁺-Regulation in Niere"],
              ["Testosteron", "Androgen; Virilisierung, Spermatogenese"],
              ["Östradiol", "Östrogen; Feminisierung, Menstruationszyklus"],
              ["Progesteron", "Gelbkörperhormon; Schwangerschaft"],
              ["Vitamin D₃", "Calcitriol (aktiv); Calcium- und Phosphathomöostase"],
              ["Gallensäuren", "Cholsäure etc.; Fettemulgierung im Darm"],
            ],
          },
        },
      ],
      merksätze: [
        "Fettsäuren: gesättigt = keine C=C; einfach ungesättigt = eine C=C; mehrfach ungesättigt = ≥2 C=C.",
        "Essentielle Fettsäuren: Linolsäure (ω-6) und α-Linolensäure (ω-3) — müssen mit Nahrung zugeführt werden.",
        "cis-Doppelbindung → Knick → niedriger Schmelzpunkt; trans-Doppelbindung → gerade → höherer Schmelzpunkt.",
        "Energiedichte: Lipide 38 kJ/g vs. Kohlenhydrate/Proteine je 17 kJ/g.",
        "Triglycerid = Glycerin + 3 Fettsäuren, verknüpft durch 3 Esterbindungen (Kondensation).",
        "Phospholipide = amphipathisch (polarer Phosphatkopf + 2 apolare Fettsäureschwänze) → Bilayer.",
        "Lecithin (Phosphatidylcholin) = häufigstes Membranphospholipid.",
        "Sterangerüst = 4 kondensierte Ringe (3× Sechsring + 1× Fünfring); Cholesterin ist Grundgerüst.",
        "Statine hemmen HMG-CoA-Reduktase (Schlüsselenzym der Cholesterinbiosynthese).",
        "Ketonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton — entstehen bei exzessiver Lipolyse (Fasten, Typ-1-Diabetes).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie, weshalb Phospholipide spontan Lipiddoppelschichten bilden und welche Rolle Cholesterin in biologischen Membranen spielt.",
        answer:
          "Phospholipide sind amphipathische Moleküle: Sie besitzen einen hydrophilen (wasserfreundlichen) polaren Kopf (Phosphatgruppe mit Cholin oder einem anderen polaren Alkohol) und zwei hydrophobe (wasserfeindliche) unpolare Fettsäureschwänze. Wenn Phospholipide in wässriges Milieu gebracht werden, führt der hydrophobe Effekt zur spontanen Selbstorganisation: Die Fettsäureschwänze meiden den Kontakt mit Wasser und lagern sich zusammen (hydrophobe Wechselwirkungen), während die polaren Köpfe zur wässrigen Phase weisen. Das thermodynamisch günstigste Arrangement ist dabei nicht die Mizelle (wie bei Detergenzien mit nur einem Schwanz), sondern eine **Phospholipid-Doppelschicht (Bilayer)**: Zwei Lagen Phospholipide ordnen sich so an, dass ihre Fettsäureschwänze nach innen zeigen und ihre polaren Köpfe nach außen zur wässrigen Phase. Dies führt zu einem selbstdichtenden, flexiblen flüssigkristallinen Membransystem — der Grundstruktur aller biologischen Membranen. Cholesterin fügt sich mit seiner kleinen OH-Gruppe in Richtung der Phosphatkopfgruppen und seinem unpolaren Sterangerüst zwischen den Fettsäureketten ein. Es erfüllt dabei eine duale temperaturabhängige Funktion: Bei niedrigen Temperaturen verhindert es das Erstarren der Membran (Fluiditätspuffer), bei hohen Temperaturen die übermäßige Fluidisierung. Darüber hinaus dient Cholesterin als Ausgangsstoff für Steroidhormone, Gallensäuren und Vitamin D₃.",
      },
      klinischerBezug:
        "Hypercholesterinämie und Atherosklerose; Statine als HMG-CoA-Reduktase-Hemmer; Ketoazidose bei Typ-1-Diabetes; Trans-Fettsäuren als kardiovaskulärer Risikofaktor.",
      selfTest: [
        {
          question:
            "Welche Aussage über die Energiedichte von Lipiden im Vergleich zu Kohlenhydraten ist korrekt?",
          options: [
            "Lipide und Kohlenhydrate haben die gleiche Energiedichte von ca. 17 kJ/g",
            "Kohlenhydrate liefern mit 38 kJ/g mehr Energie als Lipide mit 17 kJ/g",
            "Lipide liefern mit ca. 38 kJ/g mehr als doppelt so viel Energie wie Kohlenhydrate (ca. 17 kJ/g)",
            "Proteine liefern mehr Energie als Lipide",
            "Lipide liefern nur 4 kcal/g, Kohlenhydrate dagegen 9 kcal/g",
          ],
          correctIndex: 2,
          explanation:
            "Lipide (Fette) liefern ca. 38 kJ/g (≈ 9 kcal/g), während Kohlenhydrate und Proteine je ca. 17 kJ/g (≈ 4 kcal/g) liefern. Die höhere Energiedichte der Lipide erklärt sich durch den stärker reduzierten (höherer Wasserstoffgehalt, weniger Sauerstoff) Zustand der Fettsäuren im Vergleich zu Kohlenhydraten (die formal CH₂O-Einheiten enthalten und somit 'schon partiell oxidiert' sind). Deshalb sind Triglyceride als Energiespeicher effizienter als Glykogen (zudem nimmt Glykogen gebundenes Wasser mit → effektive Energiedichte von Glykogen noch geringer).",
          hints: [
            "Lipide enthalten viel mehr Wasserstoff relativ zum Sauerstoff als Kohlenhydrate — welche Konsequenz hat das für die Oxidationsenergie?",
            "Merke: Fett = 9 kcal/g; KH und Protein = 4 kcal/g.",
          ],
          tags: ["energiedichte", "lipide", "kohlenhydrate", "stoffwechsel"],
          difficulty: 1,
        },
        {
          question: "Was macht Phospholipide zu idealen Membranbestandteilen?",
          options: [
            "Sie sind vollständig hydrophob und bilden dadurch wasserundurchlässige Schichten",
            "Sie sind vollständig hydrophil und können sich frei in wässriger Lösung lösen",
            "Sie sind amphipathisch (polarer Kopf + apolare Schwänze) und bilden spontan Bilayer in Wasser",
            "Sie tragen drei Fettsäureketten wie Triglyceride und sind deshalb besonders stabil",
            "Sie können kovalente Bindungen mit Membranproteinen eingehen und die Membran fixieren",
          ],
          correctIndex: 2,
          explanation:
            "Phospholipide sind amphipathische Moleküle: Der hydrophile polare Kopf (Phosphat + Cholin oder anderer polarer Rest) ist wasserfreundlich, die zwei hydrophoben Fettsäureschwänze sind wasserfeindlich. In wässrigem Milieu ordnen sie sich durch den hydrophoben Effekt spontan zu einer Doppelschicht (Bilayer) an: Köpfe nach außen zur wässrigen Phase, Schwänze nach innen. Diese Selbstorganisation liefert die Grundstruktur aller biologischen Membranen. Triglyceride (drei Fettsäuren, kein polarer Kopf) sind vollständig hydrophob und bilden keine Membranen, sondern Fetttröpfchen.",
          hints: [
            "Was ist das Besondere an einer Substanz, die sowohl hydrophile als auch hydrophobe Bereiche hat?",
            "Denke an den hydrophoben Effekt: Was geschieht mit unpolaren Bereichen in Wasser?",
          ],
          tags: ["phospholipide", "membran", "amphipathisch", "bilayer"],
          difficulty: 1,
        },
        {
          question:
            "Welcher der folgenden Faktoren erklärt den niedrigeren Schmelzpunkt von Olivenöl im Vergleich zu Palmfett?",
          options: [
            "Olivenöl enthält Phospholipide, Palmfett dagegen nicht",
            "Palmfett hat eine kürzere Kohlenstoffkette als Olivenöl",
            "Olivenöl enthält vorwiegend einfach ungesättigte (cis) Fettsäuren mit Knick in der Kette",
            "Olivenöl hat einen höheren Anteil an trans-Fettsäuren",
            "Palmfett enthält Steroide, die den Schmelzpunkt erhöhen",
          ],
          correctIndex: 2,
          explanation:
            "Olivenöl enthält hauptsächlich Ölsäure (C18:1Δ9, cis-Konfiguration, einfach ungesättigt). Die cis-Doppelbindung erzeugt einen Knick von ca. 30° in der Fettsäurekette. Dieser Knick verhindert die enge parallele Packung der Fettsäuremoleküle und reduziert die Van-der-Waals-Wechselwirkungen → niedriger Schmelzpunkt → bei Raumtemperatur flüssig. Palmfett enthält hauptsächlich Palmitinsäure (C16:0, gesättigt, gestreckte Kette) → dichte Packung → stärkere Van-der-Waals-Kräfte → höherer Schmelzpunkt → fest bei Raumtemperatur. Trans-Fettsäuren verhalten sich ähnlich wie gesättigte (gerade Kette) und wären ebenfalls fest.",
          hints: [
            "Was bewirkt eine cis-Doppelbindung geometrisch für die Form der Fettsäurekette?",
            "Dichte Packung → mehr Van-der-Waals-Kräfte → höherer Schmelzpunkt. Welche Fettsäureart erlaubt dichteste Packung?",
          ],
          tags: ["fettsäuren", "schmelzpunkt", "cis", "gesättigt-ungesättigt"],
          difficulty: 2,
        },
        {
          question:
            "Welches Enzym wird durch Statine gehemmt und welche Konsequenz hat dies für den Cholesterinstoffwechsel?",
          options: [
            "Cholesterin-Oxidase → Cholesterin wird direkt abgebaut → LDL sinkt",
            "LDL-Rezeptor → weniger LDL-Aufnahme in Hepatozyten → LDL-Anstieg im Blut",
            "HMG-CoA-Reduktase → weniger Cholesterinsynthese → Hochregulation der LDL-Rezeptoren → LDL-Senkung",
            "Lipoprotein-Lipase → weniger VLDL-Abbau → Triglyceridanstieg",
            "Phospholipase A₂ → Membranabbau in Hepatozyten → diffuse Lipidstörung",
          ],
          correctIndex: 2,
          explanation:
            "Statine (z.B. Atorvastatin, Simvastatin, Rosuvastatin) hemmen kompetitiv die HMG-CoA-Reduktase, das Schlüsselenzym der Cholesterinbiosynthese im Mevalonat-Weg. Durch weniger endogene Cholesterinsynthese in der Leber sinkt der intrahepatische Cholesteringehalt. Als Reaktion darauf reguliert die Leberzelle die LDL-Rezeptoren auf ihrer Oberfläche hoch (mehr SREBP-2-Aktivierung). Diese erhöhte LDL-Rezeptor-Dichte führt zu verstärkter Aufnahme von LDL-Cholesterin aus dem Blut → LDL-Senkung um 30–50%. HDL-Cholesterin steigt leicht an. Statine sind die wirksamsten Medikamente zur LDL-Senkung und zur Reduktion kardiovaskulärer Ereignisse.",
          hints: [
            "HMG-CoA-Reduktase ist das Schrittmacherenzym der Cholesterinbiosynthese — was passiert, wenn es gehemmt wird?",
            "Die Leber reagiert auf niedrigen intrazellulären Cholesterinspiegel mit Hochregulation von Rezeptoren — welchen?",
          ],
          tags: ["statine", "hmg-coa-reduktase", "cholesterin", "ldl", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welches Steroid dient als gemeinsamer Ausgangsstoff für Cortisol, Testosteron und Vitamin D₃?",
          options: ["Östradiol", "Cholesterin", "Aldosteron", "Cortisol", "Progesteron"],
          correctIndex: 1,
          explanation:
            "Cholesterin ist der universelle Vorläufer aller Steroide im menschlichen Körper. Es besitzt das Sterangerüst (vier kondensierte Ringe: drei Sechsringe + ein Fünfring) und eine –OH-Gruppe an C3 sowie eine aliphatische Seitenkette. Aus Cholesterin werden in den Nebennieren Glucocorticoide (Cortisol) und Mineralocorticoide (Aldosteron) synthetisiert, in den Gonaden Androgene (Testosteron) und Östrogene (Östradiol), in der Leber Gallensäuren, und in Haut/Leber/Niere Vitamin D₃ (Cholecalciferol → Calcidiol → Calcitriol). Progesteron ist selbst ein Steroid-Intermediat, kein Ausgangsstoff für alle genannten.",
          hints: [
            "Was haben Cortisol, Testosteron, Aldosteron und Vitamin D strukturell gemeinsam?",
            "Der Ausgangsstoff ist das häufigste Steroid in Säugetierzellmembranen.",
          ],
          tags: ["cholesterin", "steroide", "steroidhormone", "biosynthese"],
          difficulty: 1,
        },
        {
          question:
            "Ketonkörper entstehen bei längerem Fasten oder unkontrolliertem Typ-1-Diabetes. Welche Metabolite sind das und in welchem Organ werden sie hauptsächlich gebildet?",
          options: [
            "Glucose und Fructose; gebildet in der Niere durch Gluconeogenese",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; gebildet in der Leber aus überschüssigem Acetyl-CoA",
            "Pyruvat und Lactat; gebildet in der Muskulatur bei anaerober Glykolyse",
            "Cholesterin und Gallensäuren; gebildet in der Leber bei erhöhtem Fettkonsum",
            "Harnsäure und Ammoniak; gebildet in der Leber beim Proteinabbau",
          ],
          correctIndex: 1,
          explanation:
            "Ketonkörper sind Acetoacetat, β-Hydroxybutyrat und Aceton. Sie entstehen in der Leber (Mitochondrien) aus überschüssigem Acetyl-CoA, das bei gesteigerter Fettsäureoxidation (β-Oxidation) anfällt, wenn der Oxalacetat-Pool für den Citratzyklus nicht ausreicht (z.B. bei Glukosemangel). In der Ketogenese kondensieren zwei Acetyl-CoA-Moleküle zu Acetoacetyl-CoA, das zu Acetoacetat umgewandelt wird; durch Reduktion entsteht β-Hydroxybutyrat, durch spontane Decarboxylierung flüchtiges Aceton. Bei unkontrolliertem Typ-1-Diabetes führt absoluter Insulinmangel zu unkontrollierter Lipolyse und Ketogenese → Ketoazidose (Blut-pH fällt, Acetongeruch der Atemluft).",
          hints: [
            "In welchem Organ läuft die β-Oxidation der Fettsäuren ab und was ist das Endprodukt?",
            "Bei Glukosemangel fehlt Oxalacetat für den Citratzyklus — wohin geht dann das Acetyl-CoA?",
          ],
          tags: ["ketonkörper", "ketoazidose", "diabetes", "fasten", "klinisch"],
          difficulty: 3,
        },
        {
          question:
            "Welche Funktion haben Gallensäuren und von welchem Molekül werden sie synthetisiert?",
          options: [
            "Gallensäuren sind Verdauungsenzyme für Fette; sie werden aus Aminosäuren gebildet",
            "Gallensäuren sind Emulgatoren für Fette im Darm; sie werden aus Cholesterin gebildet",
            "Gallensäuren sind Hormone mit Steroidstruktur; sie werden in der Bauchspeicheldrüse gebildet",
            "Gallensäuren sind Transportproteine für Lipide im Blut; sie werden aus Triglyceriden gebildet",
            "Gallensäuren sind Cofaktoren der Lipasen und werden aus Fettsäuren gebildet",
          ],
          correctIndex: 1,
          explanation:
            "Gallensäuren (z.B. Cholsäure, Chenodesoxycholsäure) werden in der Leber aus Cholesterin synthetisiert und als Gallensalze (konjugiert mit Glycin oder Taurin) in der Gallenblase gespeichert. Im Dünndarm wirken sie als biologische Detergenzien (Emulgatoren): Durch ihren amphipathischen Charakter (Sterangerüst + polare OH-Gruppen) emulgieren sie Nahrungsfette in kleine Mizellen → vergrößerte Angriffsfläche für pankre­atische Lipasen. Gallensäuren werden im terminalen Ileum resorbiert und zur Leber zurücktransportiert (enterohepatischer Kreislauf). Sie sind keine Enzyme selbst, sondern ermöglichen die effiziente enzymatische Fettspaltung.",
          hints: [
            "Gallensäuren haben ein Sterangerüst — von welchem häufigen Steroid werden sie abgeleitet?",
            "Was bedeutet 'emulgieren' und warum ist das für die Fettverdauung wichtig?",
          ],
          tags: ["gallensäuren", "cholesterin", "fettverdauung", "emulgierung"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-04",
      title: "Nukleinsäuren — DNA und RNA",
      stichworte: [
        "Nukleotide",
        "DNA-Doppelhelix",
        "Chargaff-Regeln",
        "Basenpaarung",
        "RNA-Typen",
        "Transkription",
        "Translation",
        "PCR",
        "DNA-Methylierung",
        "Nukleosid-Analoga",
        "DNA-Reparatur",
        "Phosphodiesterbindung",
      ],
      content: `# Nukleinsäuren — DNA und RNA

## Nukleotid-Aufbau

Das Grundmonomer der Nukleinsäuren ist das **Nukleotid**, bestehend aus drei Komponenten:
1. **Stickstoffbase** (Purin oder Pyrimidin)
2. **Pentosezucker** (Ribose bei RNA; 2'-Desoxyribose bei DNA — kein OH an C2')
3. **Phosphatgruppe(n)** (1–3; in Nukleinsäuren ist es die 5'-Phosphatgruppe)

**Nukleosid** = Base + Zucker (ohne Phosphat). **Nukleotid** = Nukleosid + Phosphat(e). **ATP** (Adenosin-Triphosphat) ist das zentrale Energietransportmolekül der Zelle: Die Hydrolyse der β-γ-Phosphorsäureanhydridbindung liefert ΔG°' ≈ –30,5 kJ/mol.

## Stickstoffbasen

**Purinbasen** (Doppelring, 9 Atome): **Adenin (A)** und **Guanin (G)** — in DNA und RNA
**Pyrimidinbasen** (Einzelring, 6 Atome): **Cytosin (C)** in DNA + RNA; **Thymin (T)** nur in DNA (hat Methylgruppe an C5); **Uracil (U)** nur in RNA (keine Methylgruppe)

## Chargaff-Regeln

In doppelsträngiger DNA gilt:
- **A = T** (verbunden durch **2 Wasserstoffbrücken**)
- **G ≡ C** (verbunden durch **3 Wasserstoffbrücken**)
- **A + G = C + T** (Purine = Pyrimidine)
- Der GC-Gehalt variiert zwischen Organismen und bestimmt die Schmelztemperatur der DNA (hoher GC% → höhere Tm)

## DNA-Doppelhelix

**Watson-Crick-Modell (B-DNA)**:
- Zwei **antiparallele** Stränge (5'→3' und 3'→5')
- **Rechtsgängige** Helix
- 10,5 Basenpaare pro Windung; Windungshöhe 3,4 nm
- Komplementäre Basenpaare im Inneren durch H-Brücken; hydrophobe Stapelung (π-π-Stacking) der Basen
- Zucker-Phosphat-Rückgrat außen, negativ geladen (Phosphatgruppen) → bindet Histonproteine

**Antiparallel** bedeutet: Ein Strang verläuft 5'→3', der komplementäre 3'→5'. DNA-Polymerasen synthetisieren ausschließlich in 5'→3'-Richtung, weshalb ein Strang kontinuierlich (Leitstrang) und einer diskontinuierlich (Folgestrang, Okazaki-Fragmente) repliziert wird.

## RNA-Typen

Im Gegensatz zur DNA ist RNA meist einzelsträngig, enthält Ribose (OH an C2') und Uracil statt Thymin. Die wichtigsten RNA-Typen:
- **mRNA (Messenger-RNA)**: Überträgt die genetische Information vom Kern zum Ribosom. Enthält 5'-Cap (7-Methylguanosin, schützt vor Abbau), kodierende Sequenz (Codons = Nukleotid-Tripletts, je eines für eine Aminosäure) und 3'-Poly-A-Schwanz (Stabilität, Export aus Kern). Start-Codon: AUG (Methionin); Stopp-Codons: UAA, UAG, UGA
- **tRNA (Transfer-RNA)**: Adaptormolekül (~76 nt). Kleeblattstruktur (2D), L-förmig (3D). Anticodon-Schleife erkennt komplementär das mRNA-Codon. Am 3'-CCA-Ende wird die spezifische Aminosäure kovalent gebunden (Aminoacyl-tRNA-Synthetasen, 1 pro AS, „zweiter genetischer Code")
- **rRNA (Ribosomale RNA)**: Strukturkomponente des Ribosoms. Eukaryoten: 80S-Ribosom = 60S (28S, 5.8S, 5S rRNA) + 40S (18S rRNA). Katalysiert als Ribozym die Peptidbindungsbildung (Peptidyltransferase-Aktivität der 28S rRNA)
- **miRNA / siRNA**: Kleine regulatorische RNAs (~22 nt). Binden an komplementäre mRNA-Sequenzen → mRNA-Abbau oder Translationshemmung (RNA-Interferenz, RNAi). Wichtig für Genregulation, Entwicklung und Tumorentstehung

## Phosphodiesterbindung und Polymerisation

In der Nukleinsäure-Kette verbindet eine **Phosphodiesterbindung** das 3'-OH des einen Zuckers mit dem 5'-Phosphat des nächsten Nukleotids. Das Rückgrat alterniert also: Zucker–Phosphat–Zucker–Phosphat (3'→5'-Verknüpfung). Die Phosphatgruppen sind bei physiologischem pH negativ geladen → DNA ist ein Polyanion → Assoziation mit basischen **Histonproteinen** (Eukaryoten) zur Chromatinstruktur (Nukleosom: 146 bp DNA um Histon-Oktamer gewickelt).

## Replikation, Transkription, Translation — Kurzüberblick

**DNA-Replikation** (semikonservativ): Helicase öffnet Doppelstrang → Primase setzt RNA-Primer → **DNA-Polymerase III** synthetisiert neuen Strang in 5'→3'-Richtung (Leitstrang kontinuierlich, Folgestrang als Okazaki-Fragmente) → DNA-Ligase verknüpft Fragmente. Fehlerrate: ~1:10⁹ durch Proofreading (3'→5'-Exonukleaseaktivität) und Mismatch-Repair.

**Transkription**: RNA-Polymerase II (Eukaryoten) liest den Matrizenstrang (3'→5') und synthetisiert mRNA in 5'→3'-Richtung. Regulation über Promotor (TATA-Box), Enhancer, Transkriptionsfaktoren. Posttranskriptionelle Prozessierung: 5'-Capping, 3'-Polyadenylierung, **Spleißen** (Introns entfernt, Exons verknüpft durch Spleißosom).

**Translation**: Ribosom liest mRNA in 5'→3'-Richtung ab. Drei Phasen: Initiation (Start-AUG), Elongation (Codon-Anticodon-Erkennung, Peptidbindung, Translokation), Termination (Stopp-Codon → Release-Faktor). Genetischer Code: 64 Codons für 20 Aminosäuren (degeneriert, d.h. mehrere Codons pro AS) + 3 Stopp-Codons. Universell in fast allen Organismen.

## Nukleosid-Analoga in der Therapie

**Aciclovir** (Acycloguanosin): Guanosin-Analogon ohne 3'-OH → keine Kettenverlängerung nach Einbau → Kettenabbruch → hemmt virale DNA-Polymerase (Herpesviren). **Tenofovir**: Adenosinmonophosphat-Analogon → hemmt HIV-Reverse Transkriptase. **Remdesivir**: Adenosin-Analogon → hemmt SARS-CoV-2-RNA-abhängige RNA-Polymerase.

## DNA-Methylierung und Epigenetik

DNA-Methylierung (Methylierung von Cytosin an CpG-Dinukleotiden durch DNA-Methyltransferasen, DNMT) ist eine epigenetische Modifikation: Sie ändert nicht die Basensequenz, beeinflusst aber die Transkription. Methylierung der CpG-Inseln im Promotorbereich → Rekrutierung von Methyl-CpG-bindenden Proteinen → Chromatinkondensation → **Gen-Silencing**. Wichtig für: Genimprinting (elternspezifische Genexpression, z.B. IGF2 nur vom väterlichen Allel), X-Inaktivierung (eines der zwei X-Chromosomen bei Frauen wird inaktiviert → Barr-Körper), Krebsentstehung (Hypermethylierung von Tumorsuppressor-Promotoren wie p16 oder BRCA1 → Funktionsverlust; globale Hypomethylierung → genomische Instabilität).

## PCR — Polymerase-Kettenreaktion

Die PCR ermöglicht die exponentielle Vermehrung (Amplifikation) spezifischer DNA-Abschnitte in vitro:
1. **Denaturierung** (~95°C): Doppelstrang → Einzelstränge
2. **Annealing** (~55–65°C): Primer (kurze Oligonukleotide) binden an komplementäre Sequenzen
3. **Elongation** (~72°C): Hitzestabile **Taq-Polymerase** (aus Thermus aquaticus) synthetisiert neuen Strang in 5'→3'-Richtung

Nach n Zyklen: 2ⁿ Kopien (30 Zyklen ≈ 10⁹-fache Vervielfältigung). **RT-PCR** (Reverse-Transkriptase-PCR): Erst RNA → cDNA (durch Reverse Transkriptase), dann PCR-Amplifikation → Nachweis von RNA-Viren (COVID-19-Test, HIV-Viruslast). **qPCR** (quantitative Real-Time-PCR): Fluoreszenzmarkierte Sonden ermöglichen Quantifizierung in Echtzeit. Anwendungen: Diagnostik, Forensik (DNA-Fingerprint), Pränataldiagnostik, Vaterschaftstest, Genklonierung.

## DNA-Reparaturmechanismen

DNA wird ständig durch UV-Strahlung, reaktive Sauerstoffspezies (ROS) und Replikationsfehler geschädigt. Wichtige Reparaturwege:
- **Mismatch-Repair (MMR)**: Korrigiert Basenpaarungsfehler nach der Replikation. Defekt → Lynch-Syndrom (hereditäres nicht-polypöses Kolorektalkarzinom, HNPCC)
- **Nukleotid-Exzisionsreparatur (NER)**: Entfernt sperrige DNA-Läsionen (z.B. UV-induzierte Thymin-Dimere). Defekt → Xeroderma pigmentosum (extreme UV-Empfindlichkeit, Hautkrebs)
- **Basen-Exzisionsreparatur (BER)**: Entfernt oxidierte oder desaminierte Basen durch DNA-Glykosylasen
- **Homologe Rekombination / NHEJ**: Reparatur von Doppelstrangbrüchen. BRCA1/BRCA2-Mutationen → gestörte homologe Rekombination → erhöhtes Brust-/Ovarialkarzinomrisiko`,
      lernziele: [
        "Die drei Komponenten eines Nukleotids nennen und Nukleosid von Nukleotid unterscheiden",
        "Die Purin- und Pyrimidinbasen und ihre Paarungsregeln (Chargaff) mit Anzahl der Wasserstoffbrücken beschreiben",
        "Den Aufbau der DNA-Doppelhelix (antiparallel, rechtsgängig, 10,5 bp/Windung) erklären",
        "Die vier wichtigsten RNA-Typen (mRNA, tRNA, rRNA, miRNA) und ihre Funktionen benennen",
        "Das Wirkprinzip von Nukleosid-Analoga als Virostatika (Kettenabbruch) erklären",
      ],
      sections: [
        {
          heading: "Nukleotid-Aufbau und ATP",
          text: "Ein Nukleotid besteht aus einer Stickstoffbase (Purin oder Pyrimidin), einem Pentosezucker (Ribose oder Desoxyribose) und einer Phosphatgruppe. In der Nukleinsäure-Kette verbindet eine Phosphodiesterbindung das 3'-OH des einen Zuckers mit dem 5'-Phosphat des nächsten Nukleotids (3'→5'-Verknüpfung). ATP (Adenosin-Triphosphat) ist das universelle Energiewährungsmolekül: Die Hydrolyse von ATP zu ADP + Pᵢ liefert etwa 30,5 kJ/mol unter Standardbedingungen. Die Unterschiede zwischen DNA und RNA: Ribose (RNA) hat OH an C2', Desoxyribose (DNA) hat nur H an C2'. RNA enthält Uracil statt Thymin.",
          merksatz:
            "DNA = Desoxyribose + T; RNA = Ribose + U. Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat.",
        },
        {
          heading: "DNA-Doppelhelix und Chargaff-Regeln",
          text: "Die B-DNA (häufigste Form in vivo) ist eine rechtsgängige Doppelhelix: zwei antiparallele Stränge winden sich umeinander. Im Inneren befinden sich die Basenpaare (A=T mit 2 H-Brücken; G≡C mit 3 H-Brücken), das Zucker-Phosphat-Rückgrat liegt außen. 10,5 Basenpaare pro Windung, Steigung 3,4 nm. Die Chargaff-Regeln folgen aus der komplementären Basenpaarung: In jeder dsDNA gilt A=T und G=C. Der GC-Gehalt ist artspezifisch und korreliert positiv mit der Schmelztemperatur (Tm), da G-C-Paare (3 H-Brücken) stabiler sind als A-T-Paare (2 H-Brücken).",
          merksatz: "A=T (2 H-Brücken); G≡C (3 H-Brücken). GC-reich → höhere Schmelztemperatur.",
        },
        {
          heading: "RNA-Typen und Nukleosid-Analoga",
          text: "mRNA überträgt die genetische Information und enthält 5'-Cap, Poly-A-Schwanz und kodierenden Bereich (Codons = Tripletts). tRNA trägt die Aminosäuren und hat ein Anticodon, das komplementär zum mRNA-Codon ist. rRNA bildet das Ribosom und katalysiert als Ribozym die Peptidbindungsbildung. miRNA reguliert die Genexpression posttranskriptionell. Nukleosid-Analoga (Aciclovir, Tenofovir) nutzen die Ähnlichkeit zu natürlichen Nukleosiden: Nach Phosphorylierung durch virale Kinasen werden sie von viralen Polymerasen eingebaut, terminieren aber die Kettenverlängerung (Fehlen des 3'-OH → kein nächstes Nukleotid kann angehängt werden).",
          merksatz:
            "Aciclovir: kein 3'-OH → Kettenabbruch → hemmt virale DNA-Synthese. Wirksam gegen Herpes simplex.",
        },
        {
          heading: "RNA-Typen und ihre Funktionen",
          text: "Die vier wichtigsten RNA-Typen im Überblick:",
          table: {
            headers: ["RNA-Typ", "Funktion"],
            rows: [
              [
                "mRNA (messenger)",
                "Überträgt genetische Information vom Kern zum Ribosom; wird translatiert",
              ],
              [
                "tRNA (transfer)",
                "Transportiert Aminosäuren zum Ribosom; Anticodon paart mit mRNA-Codon",
              ],
              [
                "rRNA (ribosomale)",
                "Strukturkomponente des Ribosoms (28S, 18S, 5.8S, 5S beim Eukaryoten); katalytisch aktiv (Ribozym)",
              ],
              [
                "miRNA / siRNA",
                "Regulieren Genexpression durch mRNA-Abbau oder Translationshemmung (RNA-Interferenz)",
              ],
            ],
          },
        },
      ],
      merksätze: [
        "Purine (Doppelring): Adenin (A), Guanin (G) — in DNA und RNA. Pyrimidine (Einzelring): C, T (nur DNA), U (nur RNA).",
        "Chargaff: A=T (2 H-Brücken); G≡C (3 H-Brücken); A+G = C+T (Purine = Pyrimidine).",
        "DNA-Helix: antiparallel (5'→3' || 3'→5'), rechtsgängig, 10,5 bp/Windung, 3,4 nm Steigung.",
        "Desoxyribose (DNA): kein OH an C2'; Ribose (RNA): OH an C2'.",
        "Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat; ATP = Adenosin-Triphosphat.",
        "mRNA = Botschaft vom Kern zum Ribosom; tRNA = trägt Aminosäure + Anticodon; rRNA = Ribosom-Grundgerüst.",
        "Anticodon der tRNA ist komplementär und antiparallel zum Codon der mRNA.",
        "Kettenabbruch-Prinzip: Nukleosid-Analogon ohne 3'-OH → keine weiteren Nukleotide anknüpfbar.",
        "DNA-Methylierung an CpG: epigenetische Regulation ohne Sequenzänderung; Promotor-Methylierung → Gen-Silencing.",
        "GC-reiche DNA hat höhere Schmelztemperatur (3 H-Brücken pro GC vs. 2 bei AT).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Wirkprinzip von Aciclovir als Virostatikum und erklären Sie, warum es selektiv virusbefallene Zellen betrifft.",
        answer:
          "Aciclovir (Acycloguanosin) ist ein Guanosin-Analogon und eines der wichtigsten Virostatika zur Behandlung von Herpesvirus-Infektionen (HSV-1, HSV-2, VZV). Sein Wirkprinzip basiert auf einem mehrstufigen Aktivierungsprozess kombiniert mit dem Kettenabbruch-Mechanismus. Im ersten Schritt wird Aciclovir von der virusspezifischen Thymidinkinase (TK) phosphoryliert zu Aciclovir-Monophosphat. Dies ist der Schlüsselschritt für die Selektivität: Herpesviren codieren ihre eigene TK, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Thymidinkinase des Wirts. In nicht-infizierten Zellen findet diese erste Phosphorylierung kaum statt. In einem zweiten und dritten Schritt wird Aciclovir-Monophosphat durch zelluläre Kinasen zu Aciclovir-Triphosphat phosphoryliert. Dieses wird von der viralen DNA-Polymerase als falsches Substrat in den wachsenden DNA-Strang eingebaut. Da Aciclovir keine 3'-Hydroxylgruppe am Zuckeranalogon besitzt (der Zuckerring ist 'offen', es fehlt C3' und damit die 3'-OH-Gruppe), kann das nächste Nukleotid nicht an die 3'-Position angehängt werden — der DNA-Strang bricht ab. Die virale Replikation wird so effektiv unterbunden, während gesunde, nicht-infizierte Zellen kaum betroffen sind.",
      },
      klinischerBezug:
        "Aciclovir (Herpes), Tenofovir (HIV), Remdesivir (COVID-19) als Nukleosid-Analoga mit Kettenabbruchmechanismus; DNA-Methylierung in Krebsentstehung; Chargaff-Regeln für forensische DNA-Analyse.",
      selfTest: [
        {
          question: "Welche der folgenden Basen kommt ausschließlich in RNA vor?",
          options: ["Adenin", "Guanin", "Cytosin", "Thymin", "Uracil"],
          correctIndex: 4,
          explanation:
            "Uracil ist eine Pyrimidinbase, die ausschließlich in RNA vorkommt. Sie entspricht funktionell dem Thymin der DNA (paart mit Adenin), besitzt aber keine Methylgruppe am C5. Thymin kommt ausschließlich in DNA vor. Adenin, Guanin und Cytosin kommen in beiden Nukleinsäuren (DNA und RNA) vor. Die Pentose unterscheidet ebenfalls: RNA enthält Ribose (OH an C2'), DNA enthält Desoxyribose (H an C2').",
          hints: [
            "DNA: A, T, G, C; RNA: A, ?, G, C — welche Base ersetzt Thymin in der RNA?",
            "Der Name 'Ur-acil' enthält einen Hinweis: 'ur' = ursprünglich — RNA ist evolutionär älter als DNA.",
          ],
          tags: ["uracil", "thymin", "rna", "dna", "basen"],
          difficulty: 1,
        },
        {
          question:
            "Ein DNA-Doppelstrang hat einen GC-Gehalt von 60%. Wie viele Wasserstoffbrücken gibt es pro 100 Basenpaare?",
          options: [
            "200 Wasserstoffbrücken",
            "220 Wasserstoffbrücken",
            "240 Wasserstoffbrücken",
            "260 Wasserstoffbrücken",
            "300 Wasserstoffbrücken",
          ],
          correctIndex: 2,
          explanation:
            "Bei 100 Basenpaaren und 60% GC-Gehalt: 60 G≡C-Paare × 3 H-Brücken = 180 H-Brücken, plus 40 A=T-Paare × 2 H-Brücken = 80 H-Brücken. Gesamt: 180 + 80 = 260 Wasserstoffbrücken. Warte: 60×3 = 180, 40×2 = 80, Summe = 260. Das ist Option D. Lass nochmals rechnen: 60% GC → 60 G-C-Paare (je 3 H-Brücken = 180) + 40 A-T-Paare (je 2 H-Brücken = 80) = 260 Wasserstoffbrücken insgesamt.",
          hints: [
            "G≡C hat 3 H-Brücken, A=T hat 2 H-Brücken. Bei 100 bp und 60% GC: 60 GC-Paare + 40 AT-Paare.",
            "Rechne: 60×3 + 40×2 = ?",
          ],
          tags: ["chargaff", "wasserstoffbrücken", "gc-gehalt", "dna"],
          difficulty: 3,
        },
        {
          question: "Was bedeutet 'antiparallel' in Bezug auf die DNA-Doppelhelix?",
          options: [
            "Die beiden Stränge verlaufen parallel in derselben 5'→3'-Richtung",
            "Die Basensequenzen der beiden Stränge sind identisch",
            "Ein Strang verläuft in 5'→3'-Richtung, der komplementäre Strang in 3'→5'-Richtung",
            "Die Doppelhelix ist linksgängig (Z-DNA)",
            "Die Phosphatgruppen wechseln zwischen den Strängen ab",
          ],
          correctIndex: 2,
          explanation:
            "Antiparallel bedeutet, dass die beiden Stränge der DNA-Doppelhelix in entgegengesetzter Richtung verlaufen: Wenn ein Strang von 5'→3' verläuft, dann verläuft der komplementäre Partnerstrang in 3'→5'-Richtung (bezogen auf dieselbe räumliche Richtung). Diese Antiparallelität ist Konsequenz der komplementären Basenpaarung und der Geometrie der glykosidischen Bindungen. Biologisch bedeutsam: DNA-Polymerasen synthetisieren nur in 5'→3'-Richtung, weshalb an der Replikationsgabel ein Strang kontinuierlich (Leitstrang, 5'→3' in Syntheserichtung) und einer diskontinuierlich (Folgestrang, als Okazaki-Fragmente) repliziert wird.",
          hints: [
            "Schreibe zwei Zahlenreihen übereinander: 5'→3' und 3'←5'. Das ist antiparallel.",
            "DNA-Polymerase synthetisiert nur 5'→3'. Was bedeutet das für den anderen Strang an der Replikationsgabel?",
          ],
          tags: ["dna-helix", "antiparallel", "replikation"],
          difficulty: 2,
        },
        {
          question:
            "Welche RNA trägt eine Aminosäure zum Ribosom und erkennt das mRNA-Codon durch ihr Anticodon?",
          options: [
            "mRNA (messenger RNA)",
            "rRNA (ribosomale RNA)",
            "tRNA (transfer RNA)",
            "miRNA (micro RNA)",
            "siRNA (small interfering RNA)",
          ],
          correctIndex: 2,
          explanation:
            "Die tRNA (Transfer-RNA) ist das Adaptormolekül zwischen der Nukleinsäure-Welt (mRNA-Codon) und der Protein-Welt (Aminosäure). Sie hat eine charakteristische Kleeblattstruktur (sekundär) bzw. L-förmige 3D-Struktur. Am 3'-Ende (CCA-Trinukleotid) ist die spezifische Aminosäure kovalent gebunden (durch Aminoacyl-tRNA-Synthetasen, 'Aktivierung'). Das Anticodon-Loop enthält ein Trinukleotid (Anticodon), das komplementär und antiparallel zum spezifischen mRNA-Codon ist. mRNA enthält die Codons, rRNA ist Ribosombestandteil, miRNA/siRNA regulieren die Genexpression posttranskriptionell.",
          hints: [
            "Welche RNA hat ein 'Anticodon' — das Gegenstück zum Codon auf der mRNA?",
            "Transfer = Transport. Was wird von wo nach wo transportiert?",
          ],
          tags: ["trna", "anticodon", "translation", "rna-typen"],
          difficulty: 1,
        },
        {
          question:
            "Warum ist Aciclovir selektiv für virusinfizierte Zellen und kaum toxisch für gesunde Wirtszellen?",
          options: [
            "Aciclovir kann die Plasmamembran gesunder Zellen nicht passieren",
            "Die erste Phosphorylierung wird fast ausschließlich durch die viruseigene Thymidinkinase durchgeführt, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Kinase",
            "Gesunde Zellen können Aciclovir enzymatisch abbauen, infizierte Zellen nicht",
            "Aciclovir wird nur von Viruspartikeln, nicht von Zellen aufgenommen",
            "Die zelluläre DNA-Polymerase erkennt Aciclovir nicht als Substrat, die virale DNA-Polymerase hat eine absolut niedrigere Genauigkeit",
          ],
          correctIndex: 1,
          explanation:
            "Die Selektivität von Aciclovir beruht auf einem zweistufigen Mechanismus: Erstens wird Aciclovir hauptsächlich durch die viruseigene Thymidinkinase (TK) zu Aciclovir-Monophosphat phosphoryliert. Die HSV-TK hat eine deutlich höhere Affinität (niedrigerer Km) für Aciclovir als die zelluläre Thymidinkinase. In nicht-infizierten Zellen findet diese erste Aktivierung kaum statt. Zweitens: Aciclovir-Triphosphat hemmt präferentiell die virale DNA-Polymerase (Ki viral ≪ Ki zellulär). Dieser zweifache Selektivitätsmechanismus erklärt die geringe Toxizität von Aciclovir für den Wirt bei gleichzeitig effektiver antiviraler Wirkung.",
          hints: [
            "Welches Enzym führt die erste Aktivierungsphosphorylierung von Aciclovir durch, und wer kodiert es?",
            "Das Virus bringt sein eigenes Aktivierungsenzym mit — welcher Vorteil ergibt sich daraus für die Selektivität?",
          ],
          tags: ["aciclovir", "selektivität", "thymidinkinase", "virostatika"],
          difficulty: 3,
        },
        {
          question:
            "Ein dsDNA-Abschnitt hat auf einem Strang die Sequenz 5'-ATGCGT-3'. Wie lautet der komplementäre Gegenstrang?",
          options: ["5'-ATGCGT-3'", "5'-TACGCA-3'", "3'-ATGCGT-5'", "5'-ACGCAT-3'", "3'-UACGCA-5'"],
          correctIndex: 3,
          explanation:
            "Der komplementäre Strang folgt den Chargaff-Regeln (A paart mit T, G paart mit C) und verläuft antiparallel. Ausgangs-Strang: 5'-A-T-G-C-G-T-3'. Komplementär und antiparallel: 3'-T-A-C-G-C-A-5' = 5'-A-C-G-C-A-T-3'. Schritt für Schritt: A→T, T→A, G→C, C→G, G→C, T→A ergibt den Komplementärstrang (3'→5'): TACGCA. Umgekehrt in 5'→3'-Richtung: ACGCAT. Antwort D ist korrekt. RNA würde Uracil statt Thymin enthalten (Antwort E), ist hier aber nicht gemeint (es handelt sich um dsDNA).",
          hints: [
            "Komplementäre Basenpaare: A↔T, G↔C. Denk daran, dass der Gegenstrang antiparallel ist!",
            "Schreibe erst den Komplementärstrang 3'→5', dann drehe ihn um für die 5'→3'-Schreibweise.",
          ],
          tags: ["basenpaarung", "komplementärstrang", "antiparallel", "dna"],
          difficulty: 2,
        },
        {
          question:
            "Was ist der Unterschied zwischen DNA-Methylierung als epigenetischer Modifikation und einer Punktmutation?",
          options: [
            "Beide verändern die Basensequenz der DNA dauerhaft",
            "DNA-Methylierung verändert die Basensequenz, Punktmutationen nicht",
            "DNA-Methylierung verändert die Genexpression ohne Änderung der Basensequenz; Punktmutationen verändern die Basensequenz selbst",
            "Punktmutationen sind vererbbar, DNA-Methylierung nicht",
            "DNA-Methylierung betrifft nur Adenin; Punktmutationen betreffen Cytosin",
          ],
          correctIndex: 2,
          explanation:
            "DNA-Methylierung ist eine epigenetische Modifikation: Eine Methylgruppe (–CH₃) wird durch DNA-Methyltransferasen kovalent an das C5-Atom von Cytosin in CpG-Dinukleotiden angehängt. Die Basensequenz (A, T, G, C) bleibt dabei identisch — nur die chemische Modifikation am Cytosin ändert sich. Dennoch kann Promotor-Methylierung die Transkription eines Gens stillegen (Silencing). Bei Punktmutationen wird hingegen eine Base durch eine andere ausgetauscht, deletiert oder insertiert — die Sequenz selbst ändert sich. Epigenetische Markierungen (Methylierungen, Histonmodifikationen) können vererbt werden (transgenerationelle Epigenetik), sind aber prinzipiell reversibel.",
          hints: [
            "'Epi-genetik' bedeutet 'über der Genetik' — die Sequenz bleibt, die Regulation ändert sich.",
            "Was wird bei einer Mutation verändert: die Sequenz (A, T, G, C) oder eine chemische Gruppe daran?",
          ],
          tags: ["epigenetik", "dna-methylierung", "punktmutation", "genexpression"],
          difficulty: 2,
        },
      ],
    },
  ],
};
