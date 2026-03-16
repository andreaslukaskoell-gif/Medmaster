import type { Kapitel } from "../types";

export const chemKapStoech: Kapitel = {
  id: "chem-kap-stoech",
  title: "Stöchiometrie, Mol-Konzept & Lösungen",
  subject: "chemie",
  icon: "⚖️",
  estimatedTime: "120 min",
  unterkapitel: [
    // === UK 1: Mol-Konzept & Avogadro ===
    {
      id: "ch-3s-01",
      title: "Mol-Konzept & Avogadro",
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption:
        "Abb.: Mol-Konzept und Avogadro-Zahl bei chemischen Reaktionen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Mol",
        "Avogadro-Zahl",
        "Molare Masse",
        "Stoffmenge",
        "Teilchenanzahl",
        "Umrechnungen",
        "Glucose",
        "Medikamentendosis",
        "Dalton",
        "Atommasse",
      ],
      content: `Jede Tablette, jede Infusion, jeder Laborwert beruht auf einer einzigen Frage: Wie viele Teilchen sind in dieser Probe?

## Das Mol — die SI-Einheit der Stoffmenge Die Antwort liefert die **Stoffmenge n** mit der Einheit Mol. Seit der SI-Reform von 2019 ist das Mol über eine exakte Zahl definiert: **1 Mol = exakt 6,022 140 76 × 10²³ Teilchen**. Diese Zahl heißt **Avogadro-Zahl N_A** und bildet die Brücke zwischen der makroskopischen Welt, in der wir in Gramm und Litern messen, und der atomaren Welt, in der einzelne Atome und Moleküle existieren.

Man kann sich das Mol als gigantische Zähleinheit vorstellen — ähnlich wie ein Dutzend 12 Stück bedeutet, nur dass die Avogadro-Zahl unfassbar viel größer ist. Historisch wurde N_A so gewählt, dass 1 Mol Kohlenstoff-12-Atome exakt 12 g wiegt. Damit ergibt sich ein eleganter Zusammenhang: Die Zahlenwerte der atomaren Massen im Periodensystem entsprechen direkt den Massen in Gramm pro Mol.

> **Merke:** 1 Mol = 6,022 × 10²³ Teilchen. Die Avogadro-Zahl N_A verbindet die makroskopische Welt (Gramm) mit der atomaren Welt (Teilchen).

{{DIAGRAM:water-molecule}}

> **Prüfungstipp:** Der MedAT fragt häufig nach der exakten Definition des Mols. Merke dir: Seit 2019 ist N_A eine **festgelegte Zahl** (nicht mehr über ¹²C definiert, sondern umgekehrt). Die Antwort „6,022 × 10²³" muss sitzen — sie kommt in fast jeder Stöchiometrie-Aufgabe vor.

---

## Molare Masse M

Die **molare Masse M** gibt an, wie viel Gramm ein Mol eines bestimmten Stoffes wiegt. Sie wird in g/mol angegeben und lässt sich direkt aus dem Periodensystem ablesen: Für Elemente entspricht M numerisch der relativen Atommasse A_r, für Moleküle addiert man die Atommassen aller Atome der Summenformel.

Einige Beispiele für Elemente: M(C) = 12,01 g/mol, M(O) = 16,00 g/mol, M(H) = 1,008 g/mol und M(Na) = 22,99 g/mol. Für Moleküle wird die Rechnung etwas aufwendiger, folgt aber immer demselben Prinzip. Wasser beispielsweise besteht aus zwei Wasserstoff- und einem Sauerstoffatom: M(H₂O) = 2 × 1,008 + 16,00 = **18,02 g/mol**. Glucose (C₆H₁₂O₆) bringt es auf M = 6 × 12,01 + 12 × 1,008 + 6 × 16,00 = **180,16 g/mol**, und Kochsalz hat M(NaCl) = 22,99 + 35,45 = **58,44 g/mol**.

In der Biochemie und Molekularbiologie begegnet man anstelle von g/mol häufig der Einheit **Dalton (Da)** oder **Kilodalton (kDa)**: 1 Da = 1 g/mol. So hat Hämoglobin eine Molmasse von rund 64.500 Da = 64,5 kDa — eine Angabe, die bei Proteinen und Nukleinsäuren wesentlich handlicher ist als g/mol.

> **Merke:** M(Stoff) = Summe aller Atommassen aus dem PSE. 1 Da = 1 g/mol. Glucose: 180 g/mol, NaCl: 58,4 g/mol, H₂O: 18 g/mol — diese Werte auswendig kennen!

> **Prüfungstipp:** Bei MedAT-Rechenaufgaben wird die molare Masse oft in der Angabe mitgeliefert. Trotzdem solltest du M(H₂O) = 18, M(Glucose) = 180 und M(NaCl) = 58,4 auswendig parat haben — das spart wertvolle Sekunden. Rechne die Summenformel-Masse immer systematisch: erst alle C-Atome, dann H, dann O, dann den Rest.

---

## Die drei Grundformeln: n, m, N

Das gesamte stöchiometrische Rechnen basiert auf drei Formeln, die sich wie ein Dreieck gegenseitig verbinden. Wer diese drei Beziehungen beherrscht, kann jede Mol-Aufgabe lösen:

Die zentrale Formel lautet **n = m / M** — die Stoffmenge ergibt sich aus der Masse geteilt durch die molare Masse. Umgestellt liefert sie **m = n × M**, also die Masse aus Stoffmenge und molarer Masse. Die dritte Beziehung verbindet die Stoffmenge mit der Teilchenanzahl: **N = n × N_A**. Daraus folgen auch **n = N / N_A** und **m = N × M / N_A** als abgeleitete Formen.

In der Praxis begegnet einem dieser Dreisatz ständig. Wenn ein Arzt wissen will, wie viele Moleküle in einer Infusion stecken, rechnet er zuerst die Masse in Mol um und multipliziert dann mit der Avogadro-Zahl. Wenn ein Apotheker aus einer Stoffmenge die einzuwiegende Masse bestimmen will, nutzt er m = n × M. Diese Kette — Gramm zu Mol zu Teilchen — ist das Rückgrat der quantitativen Chemie.

---

## Rechenbeispiel 1: Glucose-Infusion

**Aufgabe:** Eine Klinik verabreicht 500 mL einer 5 %-Glucose-Lösung (ρ ≈ 1 g/mL). Wie viel Mol Glucose enthält die Infusion, und wie vielen Molekülen entspricht das?

**Lösung:**
1. Die Masse der Lösung beträgt bei ρ ≈ 1 g/mL rund 500 g. Davon sind 5 % Glucose: m = 0,05 × 500 g = **25 g**.
2. Die Stoffmenge folgt aus n = m/M = 25 g / 180,16 g/mol = **0,139 mol**.
3. Die Teilchenanzahl ist N = n × N_A = 0,139 × 6,022 × 10²³ = **8,37 × 10²² Moleküle**.

Diese Glucose-Infusion ist ein Standardpräparat auf jeder Station: Sie liefert Energie (ca. 100 kcal pro 500 mL) und ist mit rund 278 mmol/L osmotisch wirksamen Teilchen annähernd **isoton** zum Blutplasma.

---

## Rechenbeispiel 2: Medikamentendosis

**Aufgabe:** Ein Patient erhält 500 mg Paracetamol (M = 151,16 g/mol). Wie viele Mol sind das?

**Lösung:** Zunächst die Einheit umrechnen: 500 mg = 0,500 g. Dann n = m/M = 0,500 g / 151,16 g/mol = **3,31 × 10⁻³ mol = 3,31 mmol**. In der Pharmakologie ist die millimolare Angabe oft praktikabler als die molare, da Medikamentendosen typischerweise im Milligramm- bis Gramm-Bereich liegen.

> **Merke:** Rechenweg immer: Masse (g) → Stoffmenge (mol) über n = m/M → Teilchenanzahl (N) über N = n × N_A. Einheiten konsequent umrechnen (mg → g)!

> **Prüfungstipp:** Der häufigste Fehler bei Mol-Aufgaben im MedAT: Die Masse wird in **mg** angegeben, aber nicht in **g** umgerechnet, bevor man n = m/M anwendet. Ergebnis: Faktor 1000 daneben. Schreibe als ersten Schritt immer „mg → g" hin!

---

## Atomare Masseneinheit und relative Atommasse

Auf atomarer Ebene sind Massen winzig klein. Um mit handlichen Zahlen arbeiten zu können, hat man die **atomare Masseneinheit u** (unified atomic mass unit) eingeführt: 1 u ist definiert als genau 1/12 der Masse eines ¹²C-Atoms und beträgt 1,6605 × 10⁻²⁴ g. Die **relative Atommasse A_r** ist eine dimensionslose Verhältniszahl, die angibt, wie schwer ein Atom im Vergleich zu 1/12 eines ¹²C-Atoms ist. So hat Kohlenstoff A_r = 12,01 (der Dezimalanteil stammt von den natürlichen Isotopen ¹³C und ¹⁴C). Der entscheidende Zusammenhang: A_r(C) = 12,01 bedeutet M(C) = 12,01 g/mol — die Zahlenwerte von relativer Atommasse und molarer Masse sind identisch, nur die Einheit unterscheidet sich.

Dieses Konzept macht das PSE zu einem universellen Nachschlagewerk für stöchiometrische Berechnungen: Jede Zahl unter dem Elementsymbol ist gleichzeitig die relative Atommasse in u und die molare Masse in g/mol.`,
      merksätze: [
        "1 Mol = 6,022 × 10²³ Teilchen (Avogadro-Zahl N_A) — die Brücke zwischen Gramm und Atomen.",
        "Molare Masse M [g/mol] = Summe aller Atommassen aus dem PSE; 1 Dalton = 1 g/mol.",
        "Umrechnungsdreieck: n = m/M (Masse → Mol), N = n × N_A (Mol → Teilchen).",
        "Glucose: 180 g/mol, NaCl: 58,4 g/mol, H₂O: 18 g/mol — diese Werte auswendig können!",
        "Einheiten immer prüfen: mg → g umrechnen, bevor man n = m/M anwendet.",
      ],
      klinischerBezug:
        "In der Klinik werden Medikamentendosen in mg oder g angegeben, Laborwerte jedoch oft in mmol/L (z. B. Glucose: 3,9–5,5 mmol/L nüchtern). Das Mol-Konzept ist unentbehrlich für die Umrechnung zwischen Masse- und Stoffmengenkonzentration. Infusionslösungen (z. B. Glucose 5 %, NaCl 0,9 %) werden über n = m/M auf ihren molaren Gehalt berechnet, um isotone Bedingungen sicherzustellen.",

      altfrage: {
        question:
          "Wie viele Moleküle Glucose sind in 0,5 mol Glucose enthalten? (N_A = 6,022 × 10²³ mol⁻¹)\n\nA) 3,011 × 10²³\nB) 6,022 × 10²³\nC) 1,204 × 10²⁴\nD) 3,011 × 10²²\nE) 6,022 × 10²²",
        answer:
          "Richtige Antwort: A) 3,011 × 10²³\n\nDie Teilchenanzahl N berechnet sich aus N = n × N_A. Mit n = 0,5 mol und N_A = 6,022 × 10²³ mol⁻¹ ergibt sich: N = 0,5 × 6,022 × 10²³ = 3,011 × 10²³ Moleküle. Option B entspräche 1 mol, Option C entspräche 2 mol. Die Avogadro-Konstante N_A ist definiert als die Anzahl der Teilchen in genau 1 mol eines Stoffes — sie verknüpft die makroskopische Stoffmenge mit der Teilchenzahl auf atomarer Ebene.",
      },
      selfTest: [
        {
          question: "Wie viel Mol Glucose (M = 180 g/mol) sind in 36 g Glucose enthalten?",
          options: ["0,1 mol", "1,0 mol", "0,5 mol", "0,2 mol", "5,0 mol"],
          correctIndex: 3,
          explanation:
            "n = m/M = 36 g / 180 g/mol = 0,2 mol. Die molare Masse von Glucose beträgt 180 g/mol (6×12 + 12×1 + 6×16). 36 g sind genau ein Fünftel von 180 g, also 0,2 mol.",
          hints: [
            "Verwende n = m/M. Die molare Masse M von Glucose (C₆H₁₂O₆) beträgt 180 g/mol.",
            "36 geteilt durch 180 — vereinfache den Bruch.",
          ],
          difficulty: 1,
          tags: ["mol", "glucose", "rechnen"],
        },
        {
          question: "Wie viele Wassermoleküle (M = 18 g/mol) sind in 9 g Wasser enthalten?",
          options: ["3,01 × 10²²", "6,02 × 10²³", "1,20 × 10²⁴", "9,03 × 10²³", "3,01 × 10²³"],
          correctIndex: 4,
          explanation:
            "n = m/M = 9/18 = 0,5 mol. N = n × N_A = 0,5 × 6,022 × 10²³ = 3,01 × 10²³ Moleküle. 9 g Wasser sind ein halbes Mol, also die Hälfte der Avogadro-Zahl.",
          hints: [
            "Erst Stoffmenge berechnen: n = m/M = 9 g / 18 g/mol.",
            "Dann: N = n × N_A. Die Hälfte von 6,022 × 10²³ ist …",
          ],
          difficulty: 1,
          tags: ["teilchenanzahl", "avogadro", "wasser"],
        },
        {
          question:
            "Welche molare Masse hat Calciumcarbonat CaCO₃ (Ca = 40, C = 12, O = 16 g/mol)?",
          options: ["100 g/mol", "84 g/mol", "68 g/mol", "116 g/mol", "44 g/mol"],
          correctIndex: 0,
          explanation:
            "M(CaCO₃) = 40 + 12 + 3 × 16 = 40 + 12 + 48 = 100 g/mol. Option E (44 g/mol) ist die Molmasse von CO₂. Häufiger Fehler: Nur CO₃ berechnen (12 + 48 = 60) und Ca vergessen.",
          hints: [
            "Addiere die Atommassen aller Atome in der Summenformel: Ca + C + 3×O.",
            "Achtung: CaCO₃ enthält 3 Sauerstoff-Atome, nicht nur 1.",
          ],
          difficulty: 1,
          tags: ["molare-masse", "summenformel", "berechnung"],
        },
        {
          question:
            "Ein Patient erhält 500 mg Paracetamol (M = 151 g/mol). Welche Stoffmenge entspricht das?",
          options: ["0,33 mol", "3,31 mmol", "3,31 mol", "33,1 mmol", "0,033 mmol"],
          correctIndex: 1,
          explanation:
            "Erst mg in g umrechnen: 500 mg = 0,500 g. Dann n = m/M = 0,500/151 = 0,00331 mol = 3,31 mmol. Typische Falle: mg nicht in g umgerechnet → Faktor 1000 daneben.",
          hints: [
            "Achtung: 500 mg müssen zuerst in Gramm umgerechnet werden (÷ 1000).",
            "n = 0,5 g / 151 g/mol. Das Ergebnis ist klein — in mmol angeben.",
          ],
          difficulty: 2,
          tags: ["medikament", "umrechnung", "mg-g"],
        },
        {
          question: "Welche Aussage zum Mol-Konzept ist FALSCH?",
          options: [
            "1 Mol H₂O enthält 2 Mol Wasserstoffatome und 1 Mol Sauerstoffatome.",
            "Die Avogadro-Zahl beträgt 6,022 × 10²³ mol⁻¹.",
            "1 Mol eines Stoffes wiegt immer exakt 1 Gramm.",
            "1 Dalton entspricht numerisch 1 g/mol.",
            "Die molare Masse von CO₂ beträgt 44 g/mol.",
          ],
          correctIndex: 2,
          explanation:
            "C ist FALSCH: 1 Mol wiegt M Gramm (die molare Masse, nicht 1 g). 1 Mol H₂O wiegt 18 g, 1 Mol Glucose wiegt 180 g. Nur 1 Mol Wasserstoffatome wiegt ca. 1 g. Alle anderen Aussagen sind korrekt.",
          hints: [
            "Suche die falsche Aussage. Überlege: Wiegt 1 Mol jedes Stoffes gleich viel?",
            "1 Mol H₂O = 18 g, 1 Mol NaCl = 58,4 g — die Masse hängt von M ab.",
          ],
          difficulty: 2,
          tags: ["mol-konzept", "falsch-aussage", "molare-masse"],
        },
      ],
    },

    // === UK 2: Stöchiometrie & Reaktionsgleichungen ===
    {
      id: "ch-3s-02",
      title: "Stöchiometrie & Reaktionsgleichungen",
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption:
        "Abb.: Stöchiometrie und Massenerhaltung bei chemischen Reaktionen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Reaktionsgleichung",
        "Ausgleichen",
        "Stöchiometrische Koeffizienten",
        "Massenerhaltung",
        "Limitierendes Reagenz",
        "Überschuss",
        "Ausbeute",
        "Massenberechnung",
        "Neutralisation",
        "Verbrennungsreaktion",
      ],
      content: `Wer das Mol-Konzept beherrscht, kann den nächsten Schritt gehen: chemische Reaktionen quantitativ beschreiben. Dafür braucht man ausgeglichene Reaktionsgleichungen — sie zeigen, in welchen Verhältnissen Stoffe miteinander reagieren.

## Chemische Reaktionsgleichungen

Antoine Lavoisier formulierte 1789 ein Prinzip, das die gesamte quantitative Chemie trägt: **Bei einer chemischen Reaktion geht kein Atom verloren und keines kommt hinzu.** Dieses Gesetz der Massenerhaltung hat eine unmittelbare Konsequenz für chemische Gleichungen — auf beiden Seiten des Reaktionspfeils muss exakt die gleiche Anzahl jeder Atomsorte stehen. Eine Gleichung, die diese Bedingung erfüllt, heißt **ausgeglichen**.

Betrachten wir die Verbrennung von Methan als Beispiel. Die unausgeglichene Gleichung CH₄ + O₂ → CO₂ + H₂O zeigt zwar die richtigen Edukte und Produkte, verletzt aber die Atombilanz: Links stehen 4 Wasserstoffatome, rechts nur 2. Erst mit den richtigen Koeffizienten wird die Gleichung korrekt: **CH₄ + 2 O₂ → CO₂ + 2 H₂O**. Die Prüfung bestätigt: links C:1, H:4, O:4 — rechts C:1, H:4, O:4.

Ein entscheidender Punkt wird dabei oft übersehen: Die Koeffizienten 1, 2, 1, 2 geben **Stoffmengenverhältnisse** an, keine Massenverhältnisse. Das heißt: 1 mol CH₄ (16 g) reagiert mit 2 mol O₂ (64 g) zu 1 mol CO₂ (44 g) und 2 mol H₂O (36 g). Die Massenerhaltung bestätigt sich: 16 + 64 = 80 g links, 44 + 36 = 80 g rechts.

> **Merke:** Stöchiometrische Koeffizienten geben Molverhältnisse an, nicht Massenverhältnisse! 1 mol CH₄ (16 g) + 2 mol O₂ (64 g) → 1 mol CO₂ (44 g) + 2 mol H₂O (36 g). Massenerhaltung: 80 g = 80 g ✓

{{DIAGRAM:reaction-types}}

> **Prüfungstipp:** Im MedAT wird häufig gefragt, ob eine Gleichung korrekt ausgeglichen ist. Prüfe **jedes Element einzeln** — ein einziges nicht-stimmendes Element macht die ganze Gleichung falsch. Beginne immer mit dem komplexesten Molekül.

---

## Systematisches Ausgleichen

Das Ausgleichen einer Reaktionsgleichung folgt einer bewährten schrittweisen Methode. Zuerst schreibt man die Summenformeln aller Edukte und Produkte auf. Dann beginnt man mit dem Element, das die meisten Bindungspartner hat — häufig Metalle oder Kohlenstoff. Danach gleicht man Wasserstoff aus und zuletzt Sauerstoff, da dieser oft in mehreren Verbindungen vorkommt und sich beim Ändern anderer Koeffizienten mitverändert. Falls dabei gebrochene Koeffizienten entstehen, multipliziert man alle Koeffizienten mit dem kleinsten gemeinsamen Faktor, um ganzzahlige Werte zu erhalten. Die abschließende Kontrolle ist unverzichtbar: Für jedes einzelne Element muss die Atomanzahl links und rechts übereinstimmen.

Ein klinisch relevantes Beispiel ist die Neutralisation von Magnesiumhydroxid mit Salzsäure: **Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O**. Die Kontrolle ergibt: Mg: 1 = 1, O: 2 = 2, H: 2 + 2 = 4 = 4, Cl: 2 = 2 — alles stimmt. Diese Reaktion beschreibt, was geschieht, wenn ein Patient ein Antacidum (Mittel gegen Magensäure) auf Magnesiumbasis einnimmt.

---

## Stöchiometrisches Rechnen

Das stöchiometrische Rechnen ist die Königsdisziplin der quantitativen Chemie und folgt immer demselben vierstufigen Schema: **Masse Edukt → Mol Edukt → (Koeffizientenverhältnis) → Mol Produkt → Masse Produkt**. Der entscheidende Schritt in der Mitte — die Umrechnung über das Koeffizientenverhältnis — unterscheidet die Stöchiometrie von einer einfachen Mol-Aufgabe. Ohne ausgeglichene Gleichung ist dieser Schritt unmöglich, weshalb das korrekte Ausgleichen die Voraussetzung für jede stöchiometrische Berechnung darstellt.

### Rechenbeispiel: CO₂ aus Glucose-Verbrennung

**Aufgabe:** Wie viel Gramm CO₂ entstehen bei vollständiger Verbrennung von 90 g Glucose (C₆H₁₂O₆)?

**Gleichung:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O

**Lösung:**
1. **Masse → Mol:** n(Glucose) = m/M = 90 g / 180 g/mol = **0,5 mol**
2. **Koeffizientenverhältnis:** Laut Gleichung ergibt 1 mol Glucose genau 6 mol CO₂
3. **Mol Produkt:** n(CO₂) = 6 × 0,5 = **3 mol**
4. **Mol → Masse:** m(CO₂) = n × M = 3 mol × 44 g/mol = **132 g**

Dieses Beispiel ist zugleich biologisch bedeutsam: Die Gleichung beschreibt die Zellatmung — den Prozess, mit dem jede Körperzelle Glucose zu CO₂ und Wasser abbaut und dabei Energie gewinnt.

> **Merke:** Stöchiometrisches Rechnen: g → mol (÷M) → Koeffizientenverhältnis → mol → g (×M). Die Koeffizienten sind das Herzstück!

> **Prüfungstipp:** Bei MedAT-Stöchiometrie-Aufgaben schreibe dir den Vierschritt als Gerüst auf: m → n → Verhältnis → n → m. Viele Prüflinge vergessen den mittleren Schritt (Koeffizientenverhältnis) und rechnen direkt von Edukt-Mol auf Produkt-Masse. Das geht nur dann, wenn das Verhältnis 1:1 beträgt!

---

## Limitierendes Reagenz und Ausbeute

In der Praxis liegen Edukte selten im perfekten stöchiometrischen Verhältnis vor. Wenn ein Reagenz aufgebraucht ist, stoppt die Reaktion — unabhängig davon, wie viel vom anderen Reagenz noch übrig ist. Das zuerst verbrauchte Edukt heißt **limitierendes Reagenz** (Mangelreagenz), das verbleibende befindet sich im **Überschuss**.

### Rechenbeispiel: Limitierendes Reagenz

**Aufgabe:** 10 g H₂ reagieren mit 80 g O₂ zu Wasser. Wie viel Wasser entsteht? (2 H₂ + O₂ → 2 H₂O)

**Lösung:**
1. **Stoffmengen berechnen:** n(H₂) = 10 g / 2 g/mol = 5 mol; n(O₂) = 80 g / 32 g/mol = 2,5 mol
2. **Bedarf prüfen:** Laut Gleichung benötigen 5 mol H₂ genau 5/2 = 2,5 mol O₂ → exakt passend!
3. **Produkt berechnen:** n(H₂O) = 5 mol → m(H₂O) = 5 × 18 = **90 g**

Was wäre anders, wenn nur 1,5 mol O₂ vorhanden wären? Dann könnten nur 3 mol H₂ reagieren (weil 2 H₂ pro 1 O₂ benötigt werden). Sauerstoff wäre das limitierende Reagenz, es entstünden nur n(H₂O) = 3 mol = 54 g, und 2 mol H₂ (4 g) blieben unreagiert im Überschuss.

In der pharmazeutischen Industrie spielt die Ausbeute eine zentrale Rolle. Die **theoretische Ausbeute** ist die maximal mögliche Produktmenge laut stöchiometrischer Berechnung. Die **tatsächliche Ausbeute** fällt durch Nebenreaktionen, unvollständige Umsetzung oder Verluste bei der Aufarbeitung stets geringer aus. Die **prozentuale Ausbeute** = (tatsächlich / theoretisch) × 100 % ist ein Maß für die Effizienz einer Synthese — bei der Arzneimittelherstellung sind Werte über 90 % das Ziel.

> **Merke:** Das limitierende Reagenz bestimmt die maximale Produktmenge. Identifizierung: Für jedes Edukt berechnen, wie viel Produkt es maximal liefern kann — das Edukt mit dem geringsten Produktertrag ist limitierend.

---

## Klinische Anwendungen der Stöchiometrie

Die Stöchiometrie ist alles andere als abstrakte Theorie — sie begegnet Ärztinnen und Ärzten täglich. Ein anschauliches Beispiel ist die **Neutralisation von Magensäure** durch Antacida: Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O. Eine Antacidum-Tablette mit 300 mg Mg(OH)₂ enthält n = 0,300 g / 58,3 g/mol = 5,15 mmol Magnesiumhydroxid. Da das Molverhältnis 1:2 beträgt, neutralisiert sie 2 × 5,15 = 10,3 mmol HCl — eine beachtliche Menge, wenn man bedenkt, dass der Magen täglich etwa 50–100 mmol HCl produziert.

Die Stöchiometrie chemischer Reaktionen lässt sich auch auf den Stoffwechsel anwenden — der Respiratorische Quotient (RQ) gibt das Verhältnis von produziertem CO₂ zu verbrauchtem O₂ an:

Bei der vollständigen Oxidation von 1 mol Glucose (180 g) entstehen 6 mol CO₂ (264 g) und 6 mol H₂O. Das Verhältnis von produziertem CO₂ zu verbrauchtem O₂ heißt **respiratorischer Quotient (RQ)**: Für Kohlenhydrate beträgt RQ = 6/6 = 1,0, für Fette sinkt er auf etwa 0,7 (Fettsäuren benötigen mehr O₂ pro erzeugtem CO₂). Klinisch wird der RQ über indirekte Kalorimetrie bestimmt und gibt Aufschluss über den aktuellen Substratmix der Energiegewinnung eines Patienten.

> **Prüfungstipp:** Der RQ wird im MedAT gerne als Verknüpfung zwischen Stöchiometrie und Physiologie gefragt. Merke: RQ = 1,0 (Kohlenhydrate), RQ ≈ 0,7 (Fette), RQ ≈ 0,8 (Proteine). Ein gemischter RQ von 0,85 entspricht einer normalen Mischkost.`,
      merksätze: [
        "Stöchiometrische Koeffizienten sind Molverhältnisse, nicht Massenverhältnisse!",
        "Rechenweg: g → mol (÷M) → Koeffizientenverhältnis → mol → g (×M).",
        "Massenerhaltung: Die Gesamtmasse der Edukte entspricht der Gesamtmasse der Produkte.",
        "Limitierendes Reagenz = das Edukt, das zuerst aufgebraucht wird → bestimmt die maximale Produktmenge.",
        "Glucose-Verbrennung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O — RQ = 1,0 für Kohlenhydrate.",
      ],
      klinischerBezug:
        "Stöchiometrische Berechnungen sind in der Pharmazie (Wirkstoff-Synthese, Dosierung) und Klinik allgegenwärtig. Antacida neutralisieren Magensäure in definiertem Molverhältnis. Der respiratorische Quotient (RQ) — das stöchiometrische Verhältnis CO₂/O₂ — gibt Auskunft über den Substratmix der Energiegewinnung (RQ = 1,0 für KH, 0,7 für Fette). In der Dialyse wird die Harnstoff-Clearance stöchiometrisch aus der Dialysatmenge berechnet.",

      altfrage: {
        question:
          "Für die vollständige Verbrennung von Methan gilt: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Wie viel Mol O₂ werden benötigt, um 3 mol CH₄ vollständig zu verbrennen?\n\nA) 2 mol\nB) 3 mol\nC) 4 mol\nD) 6 mol\nE) 8 mol",
        answer:
          "Richtige Antwort: D) 6 mol\n\nLaut der ausgeglichenen Reaktionsgleichung reagiert 1 mol CH₄ mit 2 mol O₂. Die Koeffizienten geben das Molverhältnis der Reaktionspartner an. Für 3 mol CH₄ werden daher 3 × 2 = 6 mol O₂ benötigt. Das stöchiometrische Rechnen mit Molverhältnissen ist die Grundlage jeder quantitativen Chemie — von der Synthese eines Arzneistoffs bis zur Berechnung der benötigten Sauerstoffmenge bei der Zellatmung.",
      },
      selfTest: [
        {
          question:
            "Wie lautet die korrekt ausgeglichene Gleichung für die Verbrennung von Ethanol C₂H₅OH?",
          options: [
            "2 C₂H₅OH + 5 O₂ → 4 CO₂ + 6 H₂O",
            "C₂H₅OH + 2 O₂ → 2 CO₂ + 2 H₂O",
            "C₂H₅OH + O₂ → CO₂ + H₂O",
            "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O",
            "C₂H₅OH + 3 O₂ → 2 CO₂ + 2 H₂O",
          ],
          correctIndex: 3,
          explanation:
            "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. Prüfung: C: 2=2 ✓, H: 6=6 ✓, O: 1+6=7 und 4+3=7 ✓. Option D ist zwar auch korrekt ausgeglichen, aber nicht die kürzeste Form (alle Koeffizienten halbierbar zu Option A).",
          hints: [
            "Zähle zuerst C-Atome (2 links → 2 CO₂), dann H-Atome (6 → 3 H₂O), dann O-Atome.",
            "Links: 1 O aus Ethanol + X×2 O aus O₂. Rechts: 2×2 + 3×1 = 7 O-Atome → 6 O aus O₂ nötig → 3 O₂.",
          ],
          difficulty: 2,
          tags: ["ausgleichen", "verbrennung", "ethanol"],
        },
        {
          question:
            "Bei der Reaktion 2 Al + 3 Cl₂ → 2 AlCl₃: Wie viel Gramm AlCl₃ (M = 133,5 g/mol) entstehen aus 5,4 g Aluminium (M = 27 g/mol)?",
          options: ["13,35 g", "66,75 g", "40,05 g", "53,4 g", "26,7 g"],
          correctIndex: 4,
          explanation:
            "n(Al) = 5,4/27 = 0,2 mol. Verhältnis: 2 mol Al → 2 mol AlCl₃ (1:1). n(AlCl₃) = 0,2 mol. m(AlCl₃) = 0,2 × 133,5 = 26,7 g. Das Koeffizientenverhältnis Al:AlCl₃ = 2:2 = 1:1 vereinfacht die Rechnung.",
          hints: [
            "Berechne n(Al) = m/M. Dann Koeffizientenverhältnis 2 Al : 2 AlCl₃ = 1:1.",
            "n(AlCl₃) = n(Al). Dann m = n × M(AlCl₃).",
          ],
          difficulty: 2,
          tags: ["stöchiometrie", "massenberechnung", "rechnen"],
        },
        {
          question:
            "4 g H₂ (M = 2) und 32 g O₂ (M = 32) reagieren: 2 H₂ + O₂ → 2 H₂O. Welche Aussage ist korrekt?",
          options: [
            "Beide Reagenzien sind exakt im stöchiometrischen Verhältnis; es entstehen 36 g H₂O.",
            "H₂ ist limitierend; es entstehen 36 g H₂O.",
            "O₂ ist limitierend; es entstehen 18 g H₂O.",
            "O₂ ist limitierend; es entstehen 36 g H₂O.",
            "H₂ ist limitierend; es entstehen 18 g H₂O.",
          ],
          correctIndex: 0,
          explanation:
            "n(H₂) = 4/2 = 2 mol, n(O₂) = 32/32 = 1 mol. Verhältnis laut Gleichung: 2 H₂ : 1 O₂. Tatsächliches Verhältnis: 2:1 — exakt passend! n(H₂O) = 2 mol → m = 2 × 18 = 36 g. Massenerhaltung: 4 + 32 = 36 ✓.",
          hints: [
            "Berechne die Stoffmengen beider Edukte und vergleiche mit dem Koeffizientenverhältnis 2:1.",
            "Wenn das Verhältnis exakt stimmt, ist keines limitierend.",
          ],
          difficulty: 2,
          tags: ["limitierendes-reagenz", "stöchiometrie", "rechnen"],
        },
        {
          question:
            "Was versteht man unter dem respiratorischen Quotienten (RQ) und welchen Wert hat er für reine Kohlenhydratverbrennung?",
          options: [
            "RQ = O₂ verbraucht / CO₂ produziert; RQ = 1,0",
            "RQ = CO₂ produziert / O₂ verbraucht; RQ = 1,0",
            "RQ = CO₂ produziert / O₂ verbraucht; RQ = 0,7",
            "RQ = CO₂ / N₂; RQ = 0,8",
            "RQ = O₂ / CO₂; RQ = 0,7",
          ],
          correctIndex: 1,
          explanation:
            "RQ = V(CO₂ produziert) / V(O₂ verbraucht). Für Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O → RQ = 6/6 = 1,0. Für Fette ist RQ ≈ 0,7 (mehr O₂ nötig pro CO₂). Für Proteine RQ ≈ 0,8. Ein gemischter RQ von 0,85 ist typisch für Normalkost.",
          hints: [
            "RQ ist definiert als produziertes CO₂ geteilt durch verbrauchtes O₂.",
            "Bei Glucose: 6 CO₂ / 6 O₂ = 1,0. Fette brauchen mehr O₂ → RQ < 1.",
          ],
          difficulty: 2,
          tags: ["rq", "stoffwechsel", "glucose-verbrennung"],
        },
        {
          question: "Welche der folgenden Reaktionsgleichungen ist NICHT korrekt ausgeglichen?",
          options: [
            "2 H₂ + O₂ → 2 H₂O",
            "N₂ + 3 H₂ → 2 NH₃",
            "Fe + O₂ → Fe₂O₃",
            "CaCO₃ → CaO + CO₂",
            "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
          ],
          correctIndex: 2,
          explanation:
            "D ist NICHT korrekt ausgeglichen: Links 1 Fe + 2 O, rechts 2 Fe + 3 O. Korrekt: 4 Fe + 3 O₂ → 2 Fe₂O₃. Alle anderen Gleichungen sind korrekt ausgeglichen: A: H 4=4, O 2=2 ✓; B: N 2=2, H 6=6 ✓; C: Ca 1=1, C 1=1, O 3=3 ✓; E: C 1=1, H 4=4, O 4=4 ✓.",
          hints: [
            "Prüfe für jede Gleichung: Ist die Atomanzahl links = rechts für jedes Element?",
            "Bei D: Wie viele Fe-Atome stehen links, wie viele rechts?",
          ],
          difficulty: 1,
          tags: ["ausgleichen", "atombilanzen", "fehlersuche"],
        },
      ],
    },

    // === UK 3: Lösungen, Konzentration & Löslichkeit ===
    {
      id: "ch-3s-03",
      title: "Lösungen, Konzentration & Löslichkeit",
      imageUrl: "/images/bms/ch-loesungen.jpg",
      imageCaption:
        "Abb.: Konzentration und Löslichkeit von Salzen in Wasser (OpenStax, CC BY 4.0)",
      stichworte: [
        "Molarität",
        "Massenanteil",
        "Massenkonzentration",
        "Löslichkeit",
        "Löslichkeitsprodukt",
        "Verdünnungsformel",
        "Sättigungskonzentration",
        "Infusionslösung",
        "NaCl 0,9%",
        "Blutglucose",
        "Äquivalentkonzentration",
        "Osmolarität",
        "Normalität",
      ],
      content: `Ein Patient kommt mit Bewusstseinstrübung in die Notaufnahme.

## Konzentration — die Sprache der Klinik Das Labor meldet: Blutglucose 350 mg/dL, Natrium 128 mmol/L, Serumosmolalität 310 mosmol/kg. Drei Werte, drei Einheiten — und jede davon muss das Notfallteam sofort interpretieren können. Konzentrationsangaben sind die gemeinsame Sprache zwischen Labor, Apotheke und Station. Wer sie sicher beherrscht, versteht Infusionspläne, Dosierungen und Laborergebnisse auf einen Blick.

---

## Stoffmengenkonzentration (Molarität)

Die **Molarität c** (Stoffmengenkonzentration) ist die mit Abstand häufigste Konzentrationsangabe in Chemie und Medizin. Sie beschreibt, wie viele Mol eines Stoffes in einem Liter Lösung gelöst sind:

**c = n / V** — Einheit: mol/L (oft als „M" abgekürzt, z. B. „0,1 M NaOH")

In der Klinik begegnet dir die Molarität fast immer in **mmol/L** — Elektrolyte wie Natrium (Na⁺: 135–145 mmol/L), Kalium (K⁺: 3,5–5,0 mmol/L) und Calcium (Ca²⁺: 2,2–2,6 mmol/L) werden standardmäßig in mmol/L angegeben. Die Molarität ist **volumenbasiert** und damit temperaturabhängig: Da sich Flüssigkeiten bei Erwärmung ausdehnen, ändert sich das Volumen und damit die Molarität — im Laboralltag spielt das bei Raumtemperatur kaum eine Rolle, wohl aber bei der Molalität (dazu gleich mehr).

### Rechenbeispiel: Molarität einer NaCl-Lösung

**Aufgabe:** 5,85 g NaCl (M = 58,5 g/mol) werden in Wasser gelöst und auf 500 mL aufgefüllt. Welche Molarität hat die Lösung?

**Schritt 1:** Stoffmenge berechnen: n = m / M = 5,85 g / 58,5 g/mol = 0,1 mol

**Schritt 2:** Volumen in Liter: 500 mL = 0,5 L

**Schritt 3:** Molarität: c = n / V = 0,1 mol / 0,5 L = **0,2 mol/L**

> **Merke:** c = n/V [mol/L]. Volumen immer in Liter umrechnen! Häufigster MedAT-Fehler: mL statt L einsetzen → Ergebnis um Faktor 1000 daneben.

---

## Massenkonzentration und Massenanteil

Neben der Molarität sind zwei massebasierte Konzentrationsangaben im klinischen Alltag unverzichtbar: die **Massenkonzentration** und der **Massenanteil**.

### Massenkonzentration β

**β = m(Stoff) / V(Lösung)** — Einheit: g/L oder mg/dL

Die Massenkonzentration gibt an, wie viel Gramm eines Stoffes pro Liter (oder mg pro Deziliter) Lösung enthalten sind. In der US-amerikanischen und historisch österreichischen Labormedizin wird Blutglucose oft in **mg/dL** angegeben (Normalwert nüchtern: 70–100 mg/dL). Das SI-konforme Pendant ist mmol/L — die Umrechnung ist eine klassische MedAT-Aufgabe.

### Massenanteil w (Gewichtsprozent)

**w = m(Stoff) / m(Lösung) × 100 %**

Der Massenanteil gibt den prozentualen Masseanteil des gelösten Stoffes an der Gesamtmasse an. „NaCl 0,9 %" bedeutet: **0,9 g NaCl in 100 g Lösung** — nicht in 100 mL! Bei verdünnten wässrigen Lösungen (ρ ≈ 1 g/mL) darf man jedoch g ≈ mL setzen.

### Rechenbeispiel: mg/dL in mmol/L umrechnen (Blutglucose)

**Aufgabe:** Nüchtern-Blutzucker = 126 mg/dL. Wie viel ist das in mmol/L? (M_Glucose = 180 g/mol)

**Schritt 1:** Einheit umrechnen: 126 mg/dL × 10 = 1260 mg/L = 1,26 g/L

**Schritt 2:** Stoffmenge: n = m / M = 1,26 g / 180 g/mol = 0,007 mol/L = **7,0 mmol/L**

**Schnellformel Glucose:** mmol/L = mg/dL ÷ 18 (da M = 180 und dL→L-Faktor = 10 → 180/10 = 18). Also: 126 ÷ 18 = 7,0 mmol/L. Ein Nüchternwert ≥ 7,0 mmol/L (≥ 126 mg/dL) gilt als Diabetes-Schwelle!

> **Merke:** Massenkonzentration β = m/V [g/L]; Massenanteil w = m(Stoff)/m(Lösung) × 100 %. Glucose-Schnellformel: mmol/L = mg/dL ÷ 18. NaCl 0,9 % = 0,9 g pro 100 g Lösung.

---

## Weitere Konzentrationsangaben

{{DIAGRAM:ph-scale}}

Über Molarität und Massenanteil hinaus gibt es Konzentrationsangaben, die am MedAT seltener, aber gezielt gefragt werden:

| Größe | Formel | Einheit | Besonderheit |
|-------|--------|---------|-------------|
| **Molalität b** | n(Stoff) / m(LM) | mol/kg | Temperaturunabhängig (massebasiert!) |
| **Molenbruch x** | n(Stoff) / n(gesamt) | dimensionslos | Summe aller x = 1 |
| **Äquivalentkonzentration** | c × z | val/L (= eq/L) | z = Wertigkeit (H⁺ oder Ladungen) |
| **ppm** | mg/kg ≈ mg/L | — | Spurenkonzentrationen |

Die **Molalität** ist besonders wichtig für kolligative Eigenschaften (Siedepunktserhöhung, Gefrierpunktserniedrigung), weil sie unabhängig von der Temperatur ist — im Gegensatz zur Molarität, die sich mit dem Volumen ändert.

Die **Äquivalentkonzentration** (Normalität, N) berücksichtigt die Wertigkeit z des gelösten Stoffes: 1 M H₂SO₄ = 2 N (da H₂SO₄ zwei H⁺ liefert). In der klinischen Blutgasanalyse und bei Elektrolytangaben in mval/L (Milliäquivalent) wird sie noch verwendet.

**Osmolarität und Osmolalität** geben die Gesamtzahl osmotisch wirksamer Teilchen an. Die Plasma-Osmolalität beträgt 285–295 mosmol/kg und wird berechnet als: **≈ 2 × Na⁺ + Glucose + Harnstoff** (alles in mmol/L). Der Faktor 2 vor Na⁺ berücksichtigt die begleitenden Anionen.

> **Merke:** Molarität (mol/L) ist temperaturabhängig, Molalität (mol/kg) nicht. Äquivalentkonzentration = Molarität × Wertigkeit. Plasma-Osmolalität ≈ 290 mosmol/kg.

---

## Verdünnungsregel: c₁ × V₁ = c₂ × V₂

Beim Verdünnen wird nur Lösungsmittel zugefügt — die Stoffmenge n bleibt gleich. Da n = c × V, folgt direkt die Verdünnungsformel:

**c₁ × V₁ = c₂ × V₂**

Diese Formel ist das Arbeitspferd der Apotheke und des Labors. Ob Antibiotikum-Infusion, Desinfektionsmittel oder Laborstandard — überall wird verdünnt.

### Rechenbeispiel: Herstellung einer NaCl-Infusion

**Aufgabe:** Aus einer 10 %igen NaCl-Stammlösung sollen 500 mL physiologische Kochsalzlösung (0,9 %) hergestellt werden. Wie viel Stammlösung wird benötigt?

**Lösung:** V₁ = c₂ × V₂ / c₁ = 0,9 × 500 / 10 = **45 mL**

Man pipettiert 45 mL der 10 %-Lösung in einen Messkolben und füllt mit destilliertem Wasser auf exakt 500 mL auf.

### Rechenbeispiel: Medikamentenverdünnung

**Aufgabe:** Ein Antibiotikum liegt als 500 mg/50 mL Infusionslösung vor (β = 10 mg/mL). Du sollst eine Lösung mit 2 mg/mL herstellen. Auf welches Volumen musst du 20 mL der Stammlösung verdünnen?

**Lösung:** c₁V₁ = c₂V₂ → V₂ = c₁V₁ / c₂ = 10 × 20 / 2 = **100 mL**

> **Merke:** c₁V₁ = c₂V₂ gilt NUR für Verdünnungen (Lösungsmittel zugeben). Bei Mischung zweier verschiedener Konzentrationen → Mischungskreuz verwenden. Immer gleiche Einheiten auf beiden Seiten!

---

## Löslichkeit und Löslichkeitsprodukt K_sp

{{DIAGRAM:ionic-bond}}

Warum bilden sich Nierensteine? Warum fällt BaSO₄ beim Röntgen-Kontrastmittel aus? Die Antwort liegt im **Löslichkeitsprodukt K_sp** — dem Gleichgewicht zwischen gelösten Ionen und ungelöstem Feststoff.

### Löslichkeit

Die **Löslichkeit** gibt die maximale Masse (oder Stoffmenge) eines Stoffes an, die sich bei einer bestimmten Temperatur in einem definierten Volumen Lösungsmittel löst. Bei Erreichen dieser Grenze ist die Lösung **gesättigt** — jedes weitere Gramm fällt als Feststoff aus (Bodenkörper). Die Löslichkeit der meisten Salze steigt mit der Temperatur, Ausnahme: Calciumsulfat und einige Carbonate.

### Löslichkeitsprodukt K_sp

Für schwer lösliche Salze beschreibt K_sp das heterogene Gleichgewicht zwischen Feststoff und gelösten Ionen. Am Beispiel von Calciumfluorid:

**CaF₂ ⇌ Ca²⁺ + 2 F⁻** → K_sp = [Ca²⁺] × [F⁻]²

Allgemein für ein Salz A_mB_n: **K_sp = [A]^m × [B]^n**

Das K_sp ist eine **Gleichgewichtskonstante** — temperaturabhängig, aber konzentrationsunabhängig (Aktivität des Feststoffs = 1). Der entscheidende Vergleich im MedAT:

- **Ionenprodukt Q < K_sp** → Lösung ungesättigt, Stoff löst sich weiter
- **Q = K_sp** → Lösung gesättigt, Gleichgewicht
- **Q > K_sp** → Übersättigt, **Niederschlag fällt aus**

### Rechenbeispiel: Sättigungskonzentration von AgCl

**Aufgabe:** K_sp(AgCl) = 1,8 × 10⁻¹⁰. Wie hoch ist die Sättigungskonzentration von Ag⁺?

**Lösung:** AgCl ⇌ Ag⁺ + Cl⁻ (1:1-Salz). Sei s = [Ag⁺] = [Cl⁻].

K_sp = s × s = s² → s = √(K_sp) = √(1,8 × 10⁻¹⁰) = **1,34 × 10⁻⁵ mol/L**

### Klinischer Bezug: Nierensteine

K_sp bestimmt, ob Calciumoxalat (CaC₂O₄) und Calciumphosphat im Urin ausfallen. Hohe Ca²⁺-Konzentration im Urin, alkalischer pH (fördert Phosphatfällung) und wenig Flüssigkeitsaufnahme (konzentrierter Urin) erhöhen das Ionenprodukt Q über K_sp — Nierensteine entstehen. Trinken verdünnt den Urin → Q sinkt unter K_sp → kein Niederschlag.

> **Merke:** K_sp = Produkt der Ionenkonzentrationen (Exponenten = stöchiometrische Koeffizienten). Q > K_sp → Fällung, Q < K_sp → Lösung ungesättigt. Für 1:1-Salze: s = √(K_sp); für 1:2-Salze: s = ∛(K_sp/4).

---

## Prüfungsrelevante Zahlen und typische Fallen

| Größe | Wert | Kontext |
|-------|------|---------|
| NaCl 0,9 % | ≈ 154 mmol/L, ≈ 308 mosmol/L | Isotone Infusion |
| Glucose 5 % | ≈ 278 mmol/L, ≈ 278 mosmol/L | Isotone Infusion (i = 1) |
| Nüchtern-BZ | 70–100 mg/dL = 3,9–5,6 mmol/L | Diabetes ab ≥ 126 mg/dL |
| Plasma-Na⁺ | 135–145 mmol/L | Hauptosmolyt |
| Plasma-Osmolalität | 285–295 mosmol/kg | 2 × Na⁺ + Glc + Harnstoff |

**Typische MedAT-Fallen:**
- mL nicht in L umgerechnet → Faktor 1000 daneben
- Massenanteil w verwechselt mit Volumenanteil φ
- Verdünnungsformel auf Mischung zweier Lösungen angewendet (falsch!)
- Beim K_sp die stöchiometrischen Exponenten vergessen (z. B. [F⁻]² bei CaF₂)
- Osmolalität (pro kg LM) und Osmolarität (pro L Lösung) verwechselt`,
      sections: [
        {
          heading: "Stoffmengenkonzentration (Molarität)",
          text: "Die Molarität c = n/V [mol/L] ist die wichtigste Konzentrationsangabe in Chemie und Klinik. Elektrolyte (Na⁺, K⁺, Ca²⁺) werden in mmol/L angegeben. Rechenweg: Masse → Stoffmenge (n = m/M) → Molarität (c = n/V). Volumen immer in Liter!",
          merksatz:
            "c = n/V [mol/L]. Volumen immer in Liter umrechnen! 1 M = 1 mol/L. Klinisch meist mmol/L.",
        },
        {
          heading: "Massenkonzentration, Massenanteil und Umrechnungen",
          text: "Massenkonzentration β = m/V [g/L, mg/dL]. Massenanteil w = m(Stoff)/m(Lösung) × 100 %. NaCl 0,9 % = 0,9 g pro 100 g Lösung. Glucose-Schnellformel: mmol/L = mg/dL ÷ 18 (da M = 180 g/mol). Weitere: Molalität (mol/kg, temperaturunabhängig), Äquivalentkonzentration (c × z), Osmolarität/Osmolalität.",
          merksatz:
            "Massenanteil w in % bezieht sich auf die Gesamtmasse der Lösung, nicht auf das Volumen. Glucose: mmol/L = mg/dL ÷ 18.",
        },
        {
          heading: "Verdünnungsregel c₁V₁ = c₂V₂",
          text: "Beim Verdünnen bleibt die Stoffmenge n konstant (nur Lösungsmittel wird zugefügt). Daraus folgt c₁V₁ = c₂V₂. Gilt nicht für Mischungen verschiedener Konzentrationen — dort Mischungskreuz verwenden. Einheiten müssen auf beiden Seiten übereinstimmen.",
          merksatz:
            "c₁V₁ = c₂V₂ nur bei reiner Verdünnung (Lösungsmittel zugeben). Bei Mischungen → Mischungskreuz.",
        },
        {
          heading: "Löslichkeit und Löslichkeitsprodukt K_sp",
          text: "K_sp = Produkt der Ionenkonzentrationen im Sättigungsgleichgewicht (Exponenten = stöchiometrische Koeffizienten). Ionenprodukt Q vs. K_sp: Q < K_sp → ungesättigt, Q > K_sp → Fällung. Klinisch: Nierensteinbildung bei Q(CaOx) > K_sp im Urin. Für 1:1-Salze: s = √(K_sp).",
          merksatz:
            "K_sp: Q > K_sp → Niederschlag, Q < K_sp → Lösung ungesättigt. Exponenten nicht vergessen!",
        },
      ],
      merksätze: [
        "Molarität c = n/V [mol/L]; Massenanteil w = m(Stoff)/m(Lösung) × 100 %; Massenkonzentration β = m/V [g/L].",
        "NaCl 0,9 % ≈ 154 mmol/L NaCl → 308 mosmol/L (isoton zum Blutplasma).",
        "Verdünnungsformel c₁V₁ = c₂V₂ — nur bei Zugabe von reinem Lösungsmittel gültig!",
        "Löslichkeitsprodukt K_sp: Q > K_sp → Fällung, Q < K_sp → ungesättigt.",
        "Blutglucose: mmol/L = mg/dL ÷ 18 (Umrechnungsfaktor für Glucose).",
        "Plasma-Osmolalität ≈ 290 mosmol/kg. Schnellformel: 2 × Na⁺ + Glucose + Harnstoff.",
      ],
      klinischerBezug:
        "Konzentrationsangaben sind im klinischen Alltag allgegenwärtig: Blutglucose (mg/dL oder mmol/L), Elektrolyte (mmol/L), Infusionslösungen (% oder g/L). Physiologische Kochsalzlösung (NaCl 0,9 %) ist isoton zum Blutplasma und die meistverwendete Infusionslösung. Laborwerte in verschiedenen Einheitensystemen (SI vs. konventionell) müssen sicher umgerechnet werden. Das Löslichkeitsprodukt erklärt die Bildung von Nierensteinen (CaOx, CaP) und Gallensteinen (Cholesterol). Die Verdünnungsformel wird täglich in Apotheke und auf Station für Medikamenten- und Infusionszubereitungen angewendet.",

      altfrage: {
        question:
          "Welche Konzentration hat eine Lösung, die durch Auflösen von 5,85 g NaCl (M = 58,5 g/mol) in Wasser auf ein Gesamtvolumen von 500 mL hergestellt wird?\n\nA) 0,01 mol/L\nB) 0,1 mol/L\nC) 0,2 mol/L\nD) 1,0 mol/L\nE) 0,5 mol/L",
        answer:
          "Richtige Antwort: C) 0,2 mol/L\n\nZuerst wird die Stoffmenge berechnet: n = m/M = 5,85 g / 58,5 g/mol = 0,1 mol. Die Molarität (Stoffmengenkonzentration) ist c = n/V. Das Volumen muss in Liter umgerechnet werden: 500 mL = 0,5 L. Damit: c = 0,1 mol / 0,5 L = 0,2 mol/L. Ein häufiger Fehler ist, das Volumen nicht in Liter umzurechnen (was fälschlich 0,1/500 = 0,0002 mol/L ergeben würde). Die Molarität c = n/V ist die in der Chemie und Klinik am häufigsten verwendete Konzentrationsangabe.",
      },
      selfTest: [
        {
          question:
            "Wie viel Gramm NaCl (M = 58,44 g/mol) sind in 500 mL einer 0,9 %igen NaCl-Lösung (ρ ≈ 1 g/mL) enthalten?",
          options: ["0,9 g", "45 g", "9,0 g", "4,5 g", "0,45 g"],
          correctIndex: 3,
          explanation:
            "0,9 % bedeutet: 0,9 g NaCl pro 100 g Lösung. Bei 500 mL (≈ 500 g bei ρ ≈ 1): m = 0,9 × 500/100 = 4,5 g NaCl. Häufiger Fehler: 0,9 % von 500 mL nicht korrekt berechnen.",
          hints: [
            "0,9 % = 0,9 g pro 100 g (oder 100 mL bei ρ ≈ 1). Wie viel ist das in 500 mL?",
            "Dreisatz: 100 mL → 0,9 g, also 500 mL → ?",
          ],
          difficulty: 1,
          tags: ["nacl", "massenanteil", "infusion"],
        },
        {
          question:
            "Welche Molarität hat eine Lösung, in der 4 g NaOH (M = 40 g/mol) in 500 mL Wasser gelöst sind?",
          options: ["0,1 mol/L", "2,0 mol/L", "0,4 mol/L", "0,05 mol/L", "0,2 mol/L"],
          correctIndex: 4,
          explanation:
            "n(NaOH) = m/M = 4/40 = 0,1 mol. V = 500 mL = 0,5 L. c = n/V = 0,1/0,5 = 0,2 mol/L. Häufiger Fehler: Volumen nicht in Liter umrechnen (→ Faktor 1000 daneben).",
          hints: [
            "Berechne zuerst n = m/M, dann c = n/V. Vergiss nicht, mL in L umzurechnen!",
            "n = 4/40 = 0,1 mol. V = 0,5 L. c = ?",
          ],
          difficulty: 1,
          tags: ["molarität", "naoh", "rechnen"],
        },
        {
          question:
            "Aus 200 mL einer 5 mol/L HCl-Lösung soll eine 0,5 mol/L Lösung hergestellt werden. Welches Endvolumen ist nötig?",
          options: ["2000 mL", "1000 mL", "500 mL", "250 mL", "100 mL"],
          correctIndex: 0,
          explanation:
            "c₁V₁ = c₂V₂ → V₂ = c₁V₁/c₂ = 5 × 200 / 0,5 = 2000 mL = 2 L. Die Lösung muss 10-fach verdünnt werden (5/0,5 = 10), also von 200 mL auf 2000 mL auffüllen.",
          hints: [
            "Verdünnungsformel: c₁V₁ = c₂V₂. Stelle nach V₂ um.",
            "Verdünnungsfaktor = c₁/c₂ = 5/0,5 = 10. V₂ = V₁ × 10.",
          ],
          difficulty: 2,
          tags: ["verdünnung", "c1v1", "rechnen"],
        },
        {
          question:
            "Für das schwer lösliche Salz AgCl (K_sp = 1,8 × 10⁻¹⁰) gilt AgCl ⇌ Ag⁺ + Cl⁻. Welche Sättigungskonzentration hat Ag⁺?",
          options: [
            "1,8 × 10⁻¹⁰ mol/L",
            "1,34 × 10⁻⁵ mol/L",
            "9,0 × 10⁻⁶ mol/L",
            "1,8 × 10⁻⁵ mol/L",
            "4,24 × 10⁻³ mol/L",
          ],
          correctIndex: 1,
          explanation:
            "AgCl ⇌ Ag⁺ + Cl⁻. Sei s = [Ag⁺] = [Cl⁻]. K_sp = s × s = s². s = √(K_sp) = √(1,8 × 10⁻¹⁰) = 1,34 × 10⁻⁵ mol/L. Häufiger Fehler: K_sp nicht als Quadratwurzel aufzulösen.",
          hints: [
            "Für AgCl (1:1-Salz) gilt K_sp = s². Also s = √(K_sp).",
            "√(1,8 × 10⁻¹⁰): √1,8 ≈ 1,34 und √(10⁻¹⁰) = 10⁻⁵.",
          ],
          difficulty: 3,
          tags: ["löslichkeitsprodukt", "agcl", "rechnen"],
        },
        {
          question:
            "Ein Blutglucosewert wird mit 126 mg/dL gemessen. Wie viel ist das in mmol/L? (M_Glucose = 180 g/mol)",
          options: ["5,0 mmol/L", "12,6 mmol/L", "7,0 mmol/L", "2,27 mmol/L", "22,7 mmol/L"],
          correctIndex: 2,
          explanation:
            "126 mg/dL = 1260 mg/L = 1,26 g/L. n = m/M = 1,26/180 = 0,007 mol/L = 7,0 mmol/L. Schnellformel: mmol/L = mg/dL ÷ 18 = 126/18 = 7,0 mmol/L. Wert > 7,0 nüchtern = Diabetes-Diagnose!",
          hints: [
            "mg/dL → g/L: × 10 (von dL auf L). Dann n = m/M.",
            "Schneller: mmol/L = mg/dL ÷ 18 (für Glucose, da M = 180).",
          ],
          difficulty: 2,
          tags: ["blutglucose", "einheiten", "umrechnung"],
        },
      ],
    },

    // [ARCHIVED → _archiv/chemie/kap3-archived-uks.ts] ch-3s-04: Kolligative Eigenschaften & Osmose — NOT in scope
  ],
};
