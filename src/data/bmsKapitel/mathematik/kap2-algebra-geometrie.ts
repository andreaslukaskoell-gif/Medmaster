import type { Kapitel } from "../types";

export const mathKapAlgebra: Kapitel = {
  id: "mathe-kap2",
  title: "Algebra & Geometrie",
  subject: "mathematik",
  icon: "📐",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap2-algebra ===
    {
      id: "ma-2-01",
      title: "Gleichungen und Ungleichungen",
      stichworte: [
        "Lineare Gleichung",
        "Äquivalenzumformung",
        "Gleichungssystem",
        "Substitutionsverfahren",
        "Additionsverfahren",
        "Gleichsetzungsverfahren",
        "Ungleichung",
        "Vorzeichenumkehr",
        "Bruchgleichung",
        "Definitionsmenge",
        "Dosierungsberechnung",
        "Verdünnungsformel",
      ],
      content: `## Wie viel NaCl für 500 mL einer 0,9%-Lösung?

Physiologische Kochsalzlösung (NaCl 0,9 %) gehört zu den häufigsten Infusionen im Krankenhaus. Die Frage „Wie viel Gramm NaCl brauche ich für 500 mL?" ist nichts anderes als eine **lineare Gleichung**: 0,009 × 500 = x → x = 4,5 g. Gleichungen lösen heißt: eine unbekannte Größe systematisch isolieren — und genau das trainiert dieses Kapitel.

---

{{DIAGRAM:equation-balance}}

## Äquivalenzumformung — das Waage-Modell

Stell dir eine Gleichung als **Balkenwaage** vor: links und rechts liegt jeweils ein Ausdruck, und die Waage ist im Gleichgewicht (A = B). Solange du auf **beiden Seiten** dasselbe tust, bleibt das Gleichgewicht erhalten.

**Erlaubte Operationen (Äquivalenzumformungen):**

- **Addition/Subtraktion** derselben Zahl auf beiden Seiten
- **Multiplikation/Division** beider Seiten mit derselben Zahl (**niemals durch null!**)
- **Funktion anwenden** auf beiden Seiten (z. B. Wurzelziehen, Logarithmieren — Definitionsbereich beachten)

**Verboten:** Operation nur auf einer Seite durchführen (Gleichung wird falsch). Durch null teilen (undefiniert). Kehrwert falsch bilden: (a/b)⁻¹ = b/a, **nicht** a/b.

> **Merke:** Was links passiert, passiert auch rechts — die goldene Regel der Gleichungsumformung. Jede Operation auf BEIDE Seiten anwenden, sonst verliert die Gleichung ihre Gültigkeit.

---

## Lineare Gleichungen — Schritt für Schritt

Eine **lineare Gleichung** hat die Form **ax + b = c** (a ≠ 0). Der Lösungsweg folgt immer demselben Schema:

1. **Klammern** ausmultiplizieren (Distributivgesetz: a(b + c) = ab + ac)
2. **Brüche** beseitigen: beide Seiten mit dem **Hauptnenner** (kgV aller Nenner) multiplizieren
3. Alle **x-Terme** auf eine Seite, alle **Zahlen** auf die andere
4. Durch den **Koeffizienten von x** dividieren
5. **Probe:** Lösung in die Ausgangsgleichung einsetzen

**Rechenbeispiel — Denkprozess:**

Gegeben: 5x − 3 = 2x + 9.
*Denkprozess:* Keine Klammern/Brüche → direkt x-Terme sammeln.
Schritt 3: −2x auf beiden Seiten → 3x − 3 = 9.
Schritt 4: +3 auf beiden Seiten → 3x = 12.
Schritt 5: ÷3 → **x = 4**.
Probe: 5(4) − 3 = 17 und 2(4) + 9 = 17 ✓

**Rechenbeispiel mit Brüchen — Denkprozess:**

Gegeben: x/3 + x/4 = 7.
*Denkprozess:* Hauptnenner von 3 und 4 ist 12. Beide Seiten × 12.
4x + 3x = 84 → 7x = 84 → **x = 12**.
Probe: 12/3 + 12/4 = 4 + 3 = 7 ✓

> **Merke:** Schema für lineare Gleichungen: (1) Klammern auflösen, (2) Hauptnenner multiplizieren, (3) x-Terme sammeln, (4) durch Koeffizient dividieren, (5) Probe einsetzen — in dieser Reihenfolge.

---

## Lineare Gleichungssysteme (2 × 2)

Zwei Gleichungen mit zwei Unbekannten (x, y) haben im Regelfall genau eine Lösung. Drei Verfahren stehen zur Wahl:

**1. Einsetzungsverfahren (Substitution):** Eine Gleichung nach einer Variablen auflösen, in die andere einsetzen. Ideal, wenn eine Variable Koeffizient ±1 hat.

**Rechenbeispiel — Denkprozess:**

(I) x + y = 10, (II) 3x − y = 6.
*Denkprozess:* In (I) steht y mit Koeffizient 1 → leicht isolierbar.
Aus (I): y = 10 − x. Einsetzen in (II): 3x − (10 − x) = 6 → 4x − 10 = 6 → 4x = 16 → **x = 4**, y = 6.
Probe: (I) 4 + 6 = 10 ✓ (II) 12 − 6 = 6 ✓

**2. Gleichsetzungsverfahren:** Beide Gleichungen nach derselben Variablen auflösen und gleichsetzen.

**3. Additionsverfahren (Elimination):** Gleichungen so multiplizieren, dass sich eine Variable bei Addition aufhebt.

**Rechenbeispiel — Denkprozess:**

(I) 2x + 3y = 12, (II) 4x − y = 10.
*Denkprozess:* Multipliziere (II) × 3 → 12x − 3y = 30. Addiere mit (I): 14x = 42 → **x = 3**. Einsetzen: 6 + 3y = 12 → **y = 2**.
Probe: (I) 6 + 6 = 12 ✓ (II) 12 − 2 = 10 ✓

> **Merke:** Substitution bei Koeffizient ±1. Addition bei leicht eliminierbaren Koeffizienten. Immer Probe in BEIDE Originalgleichungen einsetzen!

---

{{DIAGRAM:inequality-numberline}}

## Ungleichungen — die Vorzeichenfalle

Ungleichungen (A < B, A ≤ B, …) werden wie Gleichungen umgeformt — mit einer **kritischen Ausnahme:**

**Bei Multiplikation oder Division mit einer negativen Zahl kehrt sich das Ungleichungszeichen um!** Grund: Die Anordnung auf der Zahlengeraden wird gespiegelt (z. B. 2 < 3, aber −2 > −3).

**Rechenbeispiel — Denkprozess:**

Gegeben: −3x + 6 > 12.
*Denkprozess:* Erst +/− ohne Vorzeichenwechsel, dann Division durch negative Zahl.
Schritt 1: −6 auf beiden Seiten → −3x > 6.
Schritt 2: ÷(−3) → **x < −2** (Zeichen dreht um!).

**Doppelte Ungleichung — Denkprozess:**

Gegeben: 1 ≤ 2x − 3 < 7.
*Denkprozess:* Alle Operationen auf **alle drei Teile** anwenden.
+3 überall: 4 ≤ 2x < 10. ÷2: **2 ≤ x < 5**. Lösungsmenge: [2, 5).

**Betragsungleichungen:** |x − a| < r bedeutet a − r < x < a + r (offenes Intervall um a mit Radius r). |x − a| > r bedeutet x < a − r oder x > a + r.

> **Merke:** Multiplikation/Division mit negativer Zahl: Ungleichungszeichen umkehren! Aus < wird >, aus ≥ wird ≤. Das ist die häufigste Fehlerquelle im MedAT-Mathe-Teil.

---

## Bruchgleichungen — Definitionsmenge beachten

Bei Gleichungen mit der Variablen im **Nenner** muss vor dem Lösen die **Definitionsmenge** bestimmt werden: Alle x-Werte, für die ein Nenner null wird, sind ausgeschlossen.

**Rechenbeispiel — Denkprozess:**

Gegeben: 3/(x − 2) = 6/x.
*Denkprozess:* Nenner x − 2 und x → Definitionsmenge: x ≠ 0 und x ≠ 2.
Beide Seiten × x(x − 2): 3x = 6(x − 2) → 3x = 6x − 12 → −3x = −12 → **x = 4**.
Probe: 3/(4 − 2) = 3/2 und 6/4 = 3/2 ✓. x = 4 liegt in der Definitionsmenge ✓.

**Typische Falle:** Eine rechnerische Lösung kann außerhalb der Definitionsmenge liegen — dann hat die Gleichung keine Lösung. Immer prüfen!

> **Merke:** Bei Bruchgleichungen zuerst Definitionsmenge bestimmen (Nenner ≠ 0), dann mit dem Nenner multiplizieren. Jede Lösung gegen die Definitionsmenge prüfen!

---

## Klinische Anwendung: Verdünnungsformel und Mischungsrechnung

Die **Verdünnungsformel c₁ × V₁ = c₂ × V₂** ist eine lineare Gleichung und kommt täglich bei Infusionszubereitung, Chemotherapie und Notfallmedikamenten vor.

**Rechenbeispiel — Denkprozess:**

Stammlösung c₁ = 20 mg/mL, Ziel: c₂ = 5 mg/mL bei V₂ = 100 mL.
*Denkprozess:* Nach V₁ auflösen: V₁ = c₂ × V₂ / c₁ = 5 × 100 / 20 = **25 mL** Stammlösung, aufgefüllt auf 100 mL.

**Rechenbeispiel — Gleichungssystem (Mischung zweier Lösungen):**

Lösung A: 5 % Glucose, Lösung B: 20 % Glucose. Ziel: 500 mL einer 8%-Lösung.
System: V_A + V_B = 500 und 0,05 V_A + 0,20 V_B = 40.
Substitution: V_A = 500 − V_B → 0,05(500 − V_B) + 0,20 V_B = 40 → 25 + 0,15 V_B = 40 → V_B = **100 mL**, V_A = **400 mL**.`,
      lernziele: [
        "Lineare Gleichungen durch systematische Umformung nach einer Variablen auflösen und die Lösung mit einer Probe überprüfen",
        "Lineare Gleichungssysteme mit zwei Unbekannten mithilfe des Substitutions- und des Additionsverfahrens lösen",
        "Bruchgleichungen unter Beachtung der Definitionsmenge lösen und Scheinlösungen erkennen",
        "Ungleichungen korrekt umformen und dabei die Vorzeichenregel bei Multiplikation und Division mit negativen Zahlen beachten",
        "Klinische Dosierungs- und Verdünnungsaufgaben als lineare Gleichungen formulieren und lösen",
      ],
      sections: [
        {
          heading: "Äquivalenzumformung — das Waage-Modell",
          text: "Eine Gleichung ist wie eine Balkenwaage im Gleichgewicht. Erlaubte Operationen: Addition/Subtraktion, Multiplikation/Division (nie durch null), Funktion anwenden auf beiden Seiten. So wird die Variable schrittweise isoliert.",
          merksatz:
            "Was links passiert, passiert auch rechts — die goldene Regel der Gleichungsumformung.",
        },
        {
          heading: "Lineare Gleichungen — Schritt für Schritt",
          text: "Schema: (1) Klammern ausmultiplizieren, (2) Hauptnenner multiplizieren, (3) x-Terme auf eine Seite, (4) durch Koeffizient dividieren, (5) Probe einsetzen. In der Medizin erscheinen lineare Gleichungen bei Infusionsraten, Verdünnungsformeln und Dosierungsberechnungen.",
          merksatz:
            "Klammern → Brüche → x-Terme sammeln → dividieren → Probe. In dieser Reihenfolge.",
        },
        {
          heading: "Ungleichungen — die Vorzeichenfalle",
          text: "Ungleichungen funktionieren wie Gleichungen, mit einer kritischen Ausnahme: Bei Multiplikation oder Division mit einer negativen Zahl dreht sich das Ungleichungszeichen um. Bei doppelten Ungleichungen alle Operationen auf alle drei Teile anwenden. Betragsungleichungen ergeben Intervalle.",
          merksatz:
            "Multiplikation/Division mit negativer Zahl: Ungleichungszeichen umkehren! Aus < wird >, aus ≥ wird ≤.",
        },
        {
          heading: "Gleichungssysteme und Bruchgleichungen",
          text: "Drei Verfahren für 2×2-Systeme: Einsetzung (bei Koeffizient ±1), Gleichsetzung, Addition (bei leicht eliminierbaren Koeffizienten). Bei Bruchgleichungen zuerst Definitionsmenge bestimmen (Nenner ≠ 0), dann mit Nenner multiplizieren und Lösung gegen Definitionsmenge prüfen.",
          merksatz:
            "Substitution bei Koeffizient ±1, Addition bei leicht eliminierbaren Koeffizienten. Bruchgleichungen: Definitionsmenge zuerst!",
        },
      ],
      merksätze: [
        "Was links passiert, passiert auch rechts — Grundregel jeder Gleichungsumformung.",
        "Schema: Klammern → Hauptnenner → x-Terme sammeln → dividieren → Probe.",
        "Bei Division/Multiplikation mit negativer Zahl: Ungleichungszeichen umkehren!",
        "Substitution bei Koeffizient ±1, Addition bei leicht eliminierbaren Koeffizienten.",
        "Bruchgleichungen: Definitionsmenge bestimmen (Nenner ≠ 0), Lösung prüfen.",
        "Betragsungleichung |x − a| < r ergibt Intervall (a − r, a + r).",
        "Verdünnungsformel: c₁ × V₁ = c₂ × V₂ ist eine lineare Gleichung.",
        "Probe immer durchführen: Lösung einsetzen und Gleichung überprüfen.",
        "Doppelte Ungleichung: alle Operationen auf alle drei Teile anwenden.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Intensivpatient (80 kg) soll mit Noradrenalin behandelt werden. Die Laufrate beträgt 0,1 µg/kg/min. Eine Fertigspritze enthält 4 mg Noradrenalin in 40 mL NaCl. Berechnen Sie die nötige Infusionsrate in mL/h. Wie lange reicht eine Fertigspritze?",
        answer:
          "Schritt 1 — Dosierung: 0,1 µg/kg/min × 80 kg = 8 µg/min. Schritt 2 — Konzentration der Spritze: 4 mg in 40 mL = 4000 µg in 40 mL = 100 µg/mL. Schritt 3 — Volumenrate: 8 µg/min geteilt durch 100 µg/mL = 0,08 mL/min. Umrechnung: 0,08 × 60 = 4,8 mL/h. Schritt 4 — Laufzeit: 40 mL geteilt durch 4,8 mL/h ergibt ungefähr 8,33 h, also rund 8 Stunden 20 Minuten. Jeder Schritt ist eine lineare Gleichung in einer Unbekannten. Im klinischen Alltag müssen diese Berechnungen rasch und fehlerfrei ausgeführt werden, da Fehler bei vasoaktiven Substanzen lebensbedrohliche Folgen haben können. Die Formalisierung als Gleichungskette reduziert die Fehlerrate erheblich und ermöglicht systematische Plausibilitätsprüfung.",
      },
      klinischerBezug:
        "In der Anästhesie und Intensivmedizin werden Infusionsraten vasoaktiver Medikamente wie Noradrenalin, Dobutamin und Propofol über lineare Gleichungen berechnet. Die Verdünnungsformel c1V1 = c2V2 wird täglich bei der Zubereitung von Chemotherapeutika, Antibiotika-Infusionen und Notfallmedikamenten angewendet. Fehler bei diesen Berechnungen sind eine häufige Ursache von Medikationsfehlern im Krankenhaus und können zu lebensbedrohlichen Über- oder Unterdosierungen führen.",
      selfTest: [
        {
          question: "Welche Lösungen hat x² − 7x + 10 = 0?",
          options: [
            "x = 2 und x = 5",
            "x = − 2 und x = − 5",
            "x = 1 und x = 10",
            "x = 7 und x = 0",
            "Keine reelle Lösung",
          ],
          correctIndex: 0,
          explanation:
            "Diskriminante: D = 49 − 40 = 9 > 0. Lösungsformel: x = (7 +/- 3) / 2. Damit x1 = 5 und x2 = 2. Alternativ Vieta: zwei Zahlen mit Summe 7 und Produkt 10 sind 2 und 5. Probe: 2² − 7 × 2 + 10 = 4 − 14 + 10 = 0. Korrekt. Beide Methoden — Lösungsformel und Vieta — liefern dasselbe Ergebnis, wobei Vieta bei ganzzahligen Lösungen schneller ist.",
          hints: [
            "Berechne D = b² − 4ac mit a=1, b=−7, c=10.",
            "Oder Vieta: zwei Zahlen mit Summe 7 und Produkt 10?",
          ],
          difficulty: 2,
          tags: ["quadratische-gleichung", "diskriminante", "vieta"],
        },
        {
          question: "Lösen Sie: − 4x + 5 > 13. Was gilt für x?",
          options: ["x < − 2", "x > − 2", "x < 2", "x > 2", "x = − 2"],
          correctIndex: 0,
          explanation:
            "Subtrahiere 5: − 4x > 8. Dividiere durch − 4 — Vorzeichen dreht um!: x < − 2. Dies ist die klassische Fehlerquelle bei Ungleichungen: Bei Division durch eine negative Zahl wird aus > ein <. Die Lösungsmenge ist das offene Intervall (−∞, − 2). Ohne Vorzeichen-Umkehr wäre das Ergebnis falsch.",
          hints: [
            "Erst 5 subtrahieren: − 4x > 8.",
            "Division durch − 4: Vorzeichen dreht um! > wird <.",
          ],
          difficulty: 1,
          tags: ["ungleichung", "vorzeichenumkehr", "algebra"],
        },
        {
          question: "Gegeben: (I) 2x + y = 8, (II) x − y = 1. Was ist x?",
          options: ["3", "2", "4", "5", "1"],
          correctIndex: 0,
          explanation:
            "Additionsverfahren: (I) + (II) ergibt 2x + y + x − y = 8 + 1, also 3x = 9, x = 3. Dann y aus (I): 2(3) + y = 8, y = 2. Probe in (II): 3 − 2 = 1. Korrekt. Das Additionsverfahren ist hier ideal, da sich y direkt eliminiert, weil die y-Koeffizienten entgegengesetzt gleich sind (+1 und − 1).",
          hints: ["Addiere beide Gleichungen, um y zu eliminieren.", "(2x+y) + (x − y) = 3x = 9."],
          difficulty: 2,
          tags: ["gleichungssystem", "additionsverfahren", "algebra"],
        },
        {
          question:
            "Eine Wirkstofflösung (c1 = 25 mg/mL) soll auf c2 = 5 mg/mL verdünnt werden. Wie viel mL der Stammlösung werden für 100 mL Gebrauchslösung benötigt?",
          options: ["20 mL", "25 mL", "10 mL", "50 mL", "5 mL"],
          correctIndex: 0,
          explanation:
            "Verdünnungsformel: c1 × V1 = c2 × V2. Einsetzen: 25 × V1 = 5 × 100 = 500. V1 = 500 / 25 = 20 mL. Das bedeutet: 20 mL Stammlösung werden mit 80 mL Verdünnungsmittel auf 100 mL aufgefüllt. Einheitenkontrolle: (mg/mL) × mL = mg, auf beiden Seiten gleich. Dies ist eine der häufigsten klinischen Berechnungsaufgaben bei der Zubereitung von Infusionen.",
          hints: [
            "Formel: c1 × V1 = c2 × V2. Hier ist V1 gesucht.",
            "25 × V1 = 5 × 100, also V1 = 500 / 25.",
          ],
          difficulty: 2,
          tags: ["verdünnung", "konzentration", "dreisatz"],
        },
        {
          question:
            "Ein Patient (90 kg) erhält Morphin i.v. mit 0,05 mg/kg. Das Morphin liegt als 10 mg/10 mL vor. Wie viel mL werden injiziert?",
          options: ["4,5 mL", "9 mL", "0,5 mL", "2,25 mL", "5 mL"],
          correctIndex: 0,
          explanation:
            "Schritt 1: Gesamtdosis = 0,05 mg/kg × 90 kg = 4,5 mg. Schritt 2: Konzentration = 10 mg / 10 mL = 1 mg/mL. Schritt 3: Volumen = 4,5 mg / 1 mg/mL = 4,5 mL. Einheitenkontrolle: mg geteilt durch (mg/mL) ergibt mL. Die Kette aus drei linearen Gleichungen ist das Standardschema für jede Dosierungsberechnung — Dosis bestimmen, Konzentration ermitteln, Volumen berechnen.",
          hints: [
            "Schritt 1: Dosis = 0,05 × 90 mg. Schritt 2: Konzentration = 10/10 mg/mL.",
            "Volumen = Dosis / Konzentration = 4,5 / 1.",
          ],
          difficulty: 2,
          tags: ["dosierung", "morphin", "gleichung"],
        },
      ],
    },
    {
      id: "ma-2-04",
      title: "Potenzgesetze & Logarithmen",
      stichworte: [
        "Potenzgesetz",
        "Wurzelgesetz",
        "Exponent",
        "Basis",
        "Negativer Exponent",
        "Bruchexponent",
        "Zehnerpotenzen",
        "Wissenschaftliche Notation",
        "Logarithmus",
        "pH-Wert",
        "Dezibel",
        "Henderson-Hasselbalch",
        "Halbwertszeit",
      ],
      content: `Potenzen und Logarithmen komprimieren enorme Zahlenbereiche auf handliche Werte. Ohne sie wären pH-Skala, Dezibel, Richterskala und Medikamentendosierung nicht formulierbar. Ein pH von 7 klingt harmlos — dahinter steckt eine H⁺-Konzentration von 10⁻⁷ mol/L, also 0,0000001. Die Potenz macht das lesbar. Der Logarithmus macht es rechenfähig.

---

## Die acht Potenzgesetze — mit Intuition

Eine Potenz ist wiederholte Multiplikation: a³ = a × a × a (drei Faktoren a). Alle Regeln folgen aus dieser einen Idee.

**Regel 1 — Multiplikation gleicher Basis:** a hoch n × a hoch m = a hoch (n+m). Du reihst Faktoren aneinander: a³ × a² = (a×a×a)(a×a) = a⁵. Eselsbrücke: „Multiplizieren = Exponenten addieren."

**Regel 2 — Division gleicher Basis:** a hoch n / a hoch m = a hoch (n−m). Du kürzt Faktoren: a⁵/a² = a³. Eselsbrücke: „Dividieren = Exponenten subtrahieren."

**Regel 3 — Potenz einer Potenz:** (a hoch n) hoch m = a hoch (n×m). Du potenzierst eine Potenz: (a³)² = (a×a×a)(a×a×a) = a⁶ = a hoch (3×2). **Häufigster MedAT-Fehler:** hier wird n×m mit n+m verwechselt!

**Regel 4 — Produkt potenzieren:** (a×b) hoch n = a hoch n × b hoch n. Jeder Faktor wird einzeln potenziert.

**Regel 5 — Quotient potenzieren:** (a/b) hoch n = a hoch n / b hoch n.

**Regel 6 — Nullter Exponent:** a⁰ = 1 (für a ≠ 0). Warum? Betrachte das Muster: 2³ = 8, 2² = 4, 2¹ = 2. Jeder Schritt teilt durch 2. Der nächste Schritt muss 2⁰ = 1 ergeben. Alternativ: a hoch n / a hoch n = a hoch (n−n) = a⁰, und jede Zahl durch sich selbst ist 1.

**Regel 7 — Negativer Exponent:** a hoch (−n) = 1/a hoch n. Der negative Exponent erzeugt den Kehrwert, **nicht** ein Minuszeichen! Beispiel: 2⁻³ = 1/2³ = 1/8, **nicht** −8.

**Regel 8 — Gebrochener Exponent:** a hoch (1/n) = n-te Wurzel aus a. Allgemein: a hoch (m/n) = (n-te Wurzel aus a) hoch m. Der Nenner gibt den Wurzelindex, der Zähler den Exponenten. Beispiel: 8 hoch (2/3) = (Kubikwurzel aus 8)² = 2² = 4.

> **Merke:** Drei klassische Fallen: (1) (aⁿ)ᵐ = aⁿˣᵐ, NICHT aⁿ⁺ᵐ. (2) a⁻ⁿ = 1/aⁿ, NICHT −aⁿ. (3) (a+b)ⁿ ≠ aⁿ+bⁿ — Potenzgesetz gilt NUR für Produkte, nie für Summen!

---

## Wurzelgesetze — Spezialfall gebrochener Exponenten

Da Wurzeln Potenzen mit gebrochenem Exponenten sind (n-te Wurzel aus a = a hoch 1/n), folgen die Wurzelgesetze direkt aus den Potenzgesetzen.

**Produktregel:** √(a×b) = √a × √b. Anwendung: √72 = √(36×2) = 6√2 — suche den größten quadratischen Teiler.

**Quotientenregel:** √(a/b) = √a / √b. Beispiel: √(9/16) = 3/4.

**Die verbotene Summenregel:** √(a+b) ≠ √a + √b! Gegenbeispiel: √(9+16) = √25 = **5**, aber √9 + √16 = 3 + 4 = **7** ≠ 5. Dieser Fehler wird am MedAT gezielt abgefragt.

**Wurzel und Betrag:** √(a²) = |a|, nicht ±a. Die Quadratwurzel ist **immer** nicht-negativ.

> **Merke:** Erlaubt: √(a×b) = √a × √b. Verboten: √(a+b) ≠ √a + √b. Und: √(a²) = |a| (immer positiv).

---

## Logarithmus — Definition als Umkehrung

Der Logarithmus beantwortet genau eine Frage: **„Auf welche Potenz muss ich die Basis erheben, um x zu erhalten?"**

**Definition:** log_b(x) = y bedeutet b hoch y = x. Der Logarithmus „entpackt" den Exponenten.

Drei wichtige Basen:
- **lg (= log₁₀):** Dekadischer Logarithmus — für pH, Dezibel, Richterskala
- **ln (= logₑ):** Natürlicher Logarithmus — für Zerfallskonstanten, Pharmakokinetik
- **log₂:** Binärlogarithmus — für Halbwertszeiten (jede HWZ halbiert → log₂)

Beispiel: lg(1000) = 3, weil 10³ = 1000. ln(e²) = 2. log₂(8) = 3, weil 2³ = 8.

---

## Warum braucht die Medizin Logarithmen? — Das pH-Motiv

Die H⁺-Konzentration im Körper reicht von 10⁻¹⁴ mol/L (starke Lauge) bis 10⁰ mol/L (konzentrierte Säure) — das sind **14 Größenordnungen**. Auf einer linearen Skala wäre der physiologische Bereich (pH 7,35–7,45) ein unsichtbarer Punkt. Die logarithmische Skala staucht diese riesige Spanne auf übersichtliche Zahlen von 0 bis 14.

**pH = −lg[H⁺]**

Warum das Minuszeichen? Weil [H⁺] im physiologischen Bereich immer kleiner als 1 ist (z. B. 10⁻⁷), ist lg[H⁺] negativ (z. B. −7). Das Minuszeichen dreht das Vorzeichen, damit pH **steigt**, wenn die Azidität **sinkt** — intuitiv für Kliniker.

**Die entscheidende Einsicht — pH-Abfall von 0,3 = [H⁺] verdoppelt:**

Warum? lg(2) ≈ 0,301. Wenn sich [H⁺] verdoppelt, ändert sich lg[H⁺] um +0,30. Da pH = −lg[H⁺], sinkt der pH um 0,30.

Konkretes Beispiel: Arterielles Blut pH 7,40: [H⁺] = 10⁻⁷·⁴⁰ ≈ 3,98 × 10⁻⁸ mol/L ≈ 40 nmol/L. Metabolische Azidose pH 7,10: [H⁺] = 10⁻⁷·¹⁰ ≈ 7,94 × 10⁻⁸ mol/L ≈ 80 nmol/L. Die H⁺-Konzentration hat sich **verdoppelt** — klinisch lebensbedrohlich. Auf der pH-Skala sieht das nach „nur 0,3 Einheiten" aus.

> **Merke:** pH sinkt um 0,3 → [H⁺] verdoppelt sich. pH sinkt um 1,0 → [H⁺] verzehnfacht sich. Kleine pH-Änderungen bedeuten große Konzentrationsänderungen!

---

## Henderson-Hasselbalch — die klinische Puffergleichung

Puffersysteme halten den pH stabil, indem sie H⁺-Ionen aufnehmen oder abgeben. Das wichtigste Puffersystem im Blut ist CO₂/HCO₃⁻. Die Henderson-Hasselbalch-Gleichung beschreibt den Zusammenhang:

**pH = pKₐ + lg([A⁻]/[HA])**

Dabei ist HA die Säure (z. B. CO₂ × 0,03 = gelöstes CO₂), A⁻ die konjugierte Base (HCO₃⁻), und pKₐ = −lg(Kₐ) die Säurestärke.

Für den Bicarbonat-Puffer: **pH = 6,1 + lg([HCO₃⁻] / (0,03 × pCO₂))**

Normal: [HCO₃⁻] = 24 mmol/L, pCO₂ = 40 mmHg. pH = 6,1 + lg(24/1,2) = 6,1 + lg(20) = 6,1 + 1,30 = **7,40**. Das Verhältnis 20:1 (Base:Säure) ergibt den normalen Blut-pH.

> **Merke:** Henderson-Hasselbalch: pH = pKₐ + lg([A⁻]/[HA]). Für Blut: pH = 6,1 + lg([HCO₃⁻]/(0,03 × pCO₂)). Normales Verhältnis 20:1 ergibt pH 7,40.

---

## Logarithmus-Rechenregeln

Die drei Rechenregeln folgen direkt aus den Potenzgesetzen:

- **log(a×b) = log a + log b** — Multiplikation wird zu Addition (daher erleichtert der Logarithmus das Rechnen mit riesigen Zahlen)
- **log(a/b) = log a − log b** — Division wird zu Subtraktion
- **log(aⁿ) = n × log a** — der Exponent wird zum Faktor herausgezogen

**Basiswechsel:** log_a(x) = ln(x)/ln(a) = lg(x)/lg(a). Damit rechnest du jeden Logarithmus in ln oder lg um.

**Verbotener Fehler:** lg(a+b) ≠ lg(a) + lg(b)! Die Produktregel gilt für Multiplikation, **nicht** für Addition. Gegenbeispiel: lg(10+10) = lg(20) ≈ 1,30, aber lg(10) + lg(10) = 1 + 1 = 2 ≠ 1,30.

Nützliche Werte: lg(2) ≈ 0,301; lg(3) ≈ 0,477; ln(2) ≈ 0,693; ln(10) ≈ 2,303.

> **Merke:** log(a×b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n × log a. Aber: log(a+b) ≠ log a + log b — das ist der häufigste Logarithmusfehler!

---

## Dezibel — Logarithmus der Schallintensität

Die Dezibelskala komprimiert den enormen Bereich hörbarer Schallintensitäten (Faktor 10¹² zwischen Hörschwelle und Schmerzgrenze) auf eine Skala von 0–130 dB.

**L = 10 × lg(I/I₀)** mit I₀ = 10⁻¹² W/m² (Hörschwelle).

Zwei Faustregeln, die du dir merken solltest:
- **+10 dB = 10-fache Intensität** (weil lg(10) = 1, also 10 × 1 = 10 dB)
- **+3 dB ≈ doppelte Intensität** (weil lg(2) ≈ 0,3, also 10 × 0,3 = 3 dB)

Beispiel: Verdopplung der Schallintensität: ΔL = 10 × lg(2) = 10 × 0,301 ≈ **3 dB**. 20 dB Unterschied: Faktor = 10^(20/10) = 10² = **100-fache Intensität**.

Beachte die Parallele zum pH: Dort bedeuten 0,3 Einheiten eine Verdopplung der [H⁺], hier bedeuten 3 dB eine Verdopplung der Intensität — beides folgt aus lg(2) ≈ 0,3.

> **Merke:** +3 dB ≈ doppelte Intensität; +10 dB = 10-fache Intensität. Grundformel: L = 10 × lg(I/I₀).

---

## Halbwertszeit — Potenzen in der Pharmakokinetik

Der Abbau vieler Medikamente folgt einer Exponentialfunktion:

**N(t) = N₀ × (1/2) hoch (t/T½)**

Konkretes Beispiel — Paracetamol mit T½ = 2 h und Anfangsdosis 1000 mg: Nach 8 h sind 8/2 = 4 Halbwertszeiten vergangen. Restmenge = 1000 × (1/2)⁴ = 1000/16 = **62,5 mg**.

Faustregel: Nach 5 Halbwertszeiten sind noch (1/2)⁵ ≈ 3 % vorhanden — das Medikament gilt als **ausgewaschen**. Zerfallskonstante: λ = ln(2)/T½ ≈ 0,693/T½.

Dosierungsintervalle hängen direkt von T½ ab: Aspirin (T½ ≈ 15 min), Amoxicillin (T½ ≈ 1 h, dreimal täglich), Digoxin (T½ ≈ 36 h, einmal täglich).

> **Merke:** Nach n Halbwertszeiten: (1/2)ⁿ der Ausgangsmenge. 5 HWZ ≈ 3 % (ausgewaschen). λ = ln(2)/T½ ≈ 0,693/T½.

---

## Zehnerpotenzen und wissenschaftliche Notation

Sehr große und kleine Zahlen werden als **a × 10 hoch n** geschrieben (1 ≤ a < 10).

Medizinische Beispiele:
- Avogadro-Konstante: 6,022 × 10²³ /mol
- Elementarladung: 1,602 × 10⁻¹⁹ C
- Erythrozytendurchmesser: ca. 8 µm = 8 × 10⁻⁶ m
- Normale [H⁺] im Blut: 4 × 10⁻⁸ mol/L = 40 nmol/L

Rechenregel: (a × 10ⁿ) × (b × 10ᵐ) = (a×b) × 10^(n+m). Beispiel: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷.

---

## Rechenbeispiele

**Beispiel 1 — pH bei Azidose:**
Blut-pH sinkt von 7,40 auf 7,10 (Differenz 0,30). Wie ändert sich [H⁺]? Da ΔpH = 0,30 ≈ lg(2), verdoppelt sich [H⁺]. Rechnung: [H⁺] bei pH 7,40 = 10⁻⁷·⁴⁰ ≈ 40 nmol/L. Bei pH 7,10 = 10⁻⁷·¹⁰ ≈ 80 nmol/L. Verhältnis: 80/40 = 2. Bestätigt: **pH-Abfall um 0,3 = Verdopplung der [H⁺].**

**Beispiel 2 — Dezibel:**
Ein Presslufthammer (100 dB) neben einem zweiten gleichen: I_gesamt = 2 × I₁. ΔL = 10 × lg(2) ≈ 3 dB. Ergebnis: **103 dB**, nicht 200 dB!

**Beispiel 3 — Wurzelfalle erkennen:**
Ist √(a²+b²) = a+b? Probe: a=3, b=4: √(9+16) = √25 = 5, aber 3+4 = 7 ≠ 5. Die Summenregel ist **verboten**. √(a²+b²) lässt sich nicht vereinfachen.

**Beispiel 4 — Henderson-Hasselbalch:**
Patient mit [HCO₃⁻] = 12 mmol/L und pCO₂ = 40 mmHg. pH = 6,1 + lg(12/1,2) = 6,1 + lg(10) = 6,1 + 1,0 = **7,10**. Das halbierte Bicarbonat hat den pH von 7,40 auf 7,10 gesenkt — metabolische Azidose.`,
      lernziele: [
        "Alle acht Potenzgesetze sicher anwenden, insbesondere negative und gebrochene Exponenten korrekt handhaben",
        "Den Logarithmus als Umkehrfunktion des Potenzierens definieren und die drei Rechenregeln anwenden",
        "Erklären, warum der pH-Wert logarithmisch ist, und die Faustregel 'pH sinkt um 0,3 = [H⁺] verdoppelt' herleiten",
        "Henderson-Hasselbalch auf den Bicarbonat-Puffer anwenden und pH-Änderungen abschätzen",
        "Die Dezibelskala interpretieren: +3 dB ≈ doppelte Intensität, +10 dB = 10-fache Intensität",
        "Halbwertszeit-Berechnungen mit Potenzen durchführen (Pharmakokinetik, Radioaktivität)",
      ],
      sections: [
        {
          heading: "Potenzgesetze — die acht Grundregeln mit Tücken",
          text: "Die drei häufigsten Fehler: Erstens wird (a hoch n) hoch m = a hoch (n×m) mit a hoch (n+m) verwechselt — es ist Multiplikation, nicht Addition. Zweitens gilt (a+b) hoch n ungleich a hoch n + b hoch n — das Potenzgesetz gilt nur für Produkte. Drittens bedeutet a hoch (−n) nicht −a hoch n, sondern 1/a hoch n. Der nullte Exponent folgt aus dem Muster: 2³=8, 2²=4, 2¹=2, 2⁰=1 — jeder Schritt halbiert.",
          merksatz:
            "Multiplizieren = Exponenten addieren. Potenzieren = Exponenten multiplizieren. Nicht verwechseln!",
        },
        {
          heading: "pH-Motivation — warum logarithmisch?",
          text: "[H⁺] spannt 14 Größenordnungen (10⁻¹⁴ bis 10⁰ mol/L). Linear wäre der physiologische Bereich unsichtbar. Der Logarithmus staucht das auf 0–14. Das Minus in pH = −lg[H⁺] sorgt dafür, dass pH steigt wenn Azidität sinkt — intuitiv für Kliniker. Schlüsseleinsicht: lg(2) ≈ 0,30, daher bedeutet ein pH-Abfall von 0,3 eine Verdopplung der H⁺-Konzentration. pH 7,40 → 7,10 = [H⁺] von 40 auf 80 nmol/L — metabolische Azidose.",
          merksatz:
            "pH sinkt um 0,3 → [H⁺] verdoppelt sich. pH sinkt um 1,0 → [H⁺] verzehnfacht sich.",
        },
        {
          heading: "Henderson-Hasselbalch und Dezibel — Logarithmen in Aktion",
          text: "Henderson-Hasselbalch: pH = pKₐ + lg([A⁻]/[HA]). Für Blut: pH = 6,1 + lg([HCO₃⁻]/(0,03×pCO₂)). Normales Verhältnis 20:1 ergibt pH 7,40. Dezibel: L = 10×lg(I/I₀). +3 dB ≈ doppelte Intensität (weil lg 2 ≈ 0,3). +10 dB = 10-fache Intensität. Beide Skalen nutzen dasselbe Prinzip: Logarithmus komprimiert riesige Bereiche.",
          merksatz:
            "Henderson-Hasselbalch: pH = 6,1 + lg([HCO₃⁻]/(0,03×pCO₂)). Dezibel: +3 dB = doppelt, +10 dB = zehnfach.",
        },
      ],
      merksätze: [
        "a hoch n × a hoch m = a hoch (n+m); a hoch n / a hoch m = a hoch (n−m); (a hoch n) hoch m = a hoch (n×m).",
        "a⁰ = 1 (Muster: 2³→2²→2¹→2⁰ halbiert jedes Mal); a⁻ⁿ = 1/aⁿ; a hoch (m/n) = (n-te Wurzel aus a) hoch m.",
        "(a×b)ⁿ = aⁿ×bⁿ, aber (a+b)ⁿ ≠ aⁿ+bⁿ! √(a+b) ≠ √a+√b!",
        "log(a×b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n×log a. Aber: log(a+b) ≠ log a + log b!",
        "pH = −lg[H⁺]. pH sinkt um 0,3 → [H⁺] verdoppelt. pH sinkt um 1 → [H⁺] verzehnfacht.",
        "Henderson-Hasselbalch: pH = pKₐ + lg([A⁻]/[HA]). Blut: pH = 6,1 + lg([HCO₃⁻]/(0,03×pCO₂)).",
        "Dezibel: L = 10×lg(I/I₀). +3 dB ≈ doppelte Intensität. +10 dB = 10-fache Intensität.",
        "Nach n Halbwertszeiten: (1/2)ⁿ der Ausgangsmenge. 5 HWZ ≈ 3 %. λ = ln(2)/T½.",
        "lg(2) ≈ 0,301; lg(3) ≈ 0,477; ln(2) ≈ 0,693; ln(10) ≈ 2,303.",
        "Wissenschaftliche Notation: a × 10 hoch n mit 1 ≤ a < 10.",
      ],
      altfrage: {
        question:
          "Der arterielle Blut-pH eines Patienten sinkt von 7,40 auf 6,80. (a) Um welchen Faktor hat sich die H⁺-Konzentration geändert? (b) Berechnen Sie die H⁺-Konzentration bei beiden pH-Werten. (c) Erklären Sie mithilfe der Henderson-Hasselbalch-Gleichung, welche Änderung des HCO₃⁻/CO₂-Verhältnisses diesen pH-Shift verursachen könnte.",
        answer:
          "Teil a: ΔpH = 7,40 − 6,80 = 0,60 = 2 × 0,30. Da pH-Abfall um 0,30 eine Verdopplung von [H⁺] bedeutet (lg 2 ≈ 0,30), entspricht 0,60 einer Vervierfachung. Alternativ: Faktor = 10^(ΔpH) = 10^0,60 ≈ 4. Teil b: Bei pH 7,40: [H⁺] = 10⁻⁷·⁴⁰ ≈ 3,98 × 10⁻⁸ mol/L ≈ 40 nmol/L. Bei pH 6,80: [H⁺] = 10⁻⁶·⁸⁰ ≈ 1,58 × 10⁻⁷ mol/L ≈ 158 nmol/L. Verhältnis: 158/40 ≈ 4 ✓. Teil c: Henderson-Hasselbalch: pH = 6,1 + lg([HCO₃⁻]/(0,03×pCO₂)). Normal: lg(20) = 1,30 → pH 7,40. Für pH 6,80: 6,80 = 6,1 + lg(R), also lg(R) = 0,70, R = 10^0,70 ≈ 5. Das Verhältnis ist von 20:1 auf 5:1 gefallen — z. B. durch HCO₃⁻-Verlust bei metabolischer Azidose oder CO₂-Anstieg bei respiratorischer Azidose.",
      },
      klinischerBezug:
        "Pharmakokinetik: Halbwertszeit bestimmt Dosierungsintervall (5 HWZ = ausgewaschen). pH = −lg[H⁺]: Arteriell 7,35–7,45 entspricht 35–45 nmol/L H⁺; pH-Abfall um 0,3 = Verdopplung der [H⁺] — lebensbedrohlich. Henderson-Hasselbalch erklärt metabolische und respiratorische Azidose/Alkalose über das HCO₃⁻/CO₂-Verhältnis. Dezibel: Lärmschwerhörigkeit ab 85 dB Dauerbelastung; jede Verdopplung der Schallintensität = +3 dB.",
      selfTest: [
        {
          question: "Was ergibt 3 hoch 4 × 3 hoch (−2)?",
          options: ["9", "81", "27", "3", "729"],
          correctIndex: 0,
          explanation:
            "3 hoch 4 × 3 hoch (−2) = 3 hoch (4+(−2)) = 3 hoch 2 = 9. Gleiche Basis: Exponenten addieren. 4+(−2) = 2. 3² = 9. Alternativ: 3⁴ = 81; 3⁻² = 1/9; 81 × 1/9 = 9.",
          hints: ["Gleiche Basis: Exponenten addieren. 4 + (−2) = ?", "3 hoch 2 = ?"],
          difficulty: 1,
          tags: ["potenzgesetze", "exponenten", "algebra"],
        },
        {
          question:
            "Der Blut-pH sinkt von 7,40 auf 7,10. Um welchen Faktor ändert sich die H⁺-Konzentration?",
          options: [
            "Sie verdoppelt sich",
            "Sie verzehnfacht sich",
            "Sie halbiert sich",
            "Sie bleibt gleich",
            "Sie vervierfacht sich",
          ],
          correctIndex: 0,
          explanation:
            "pH-Abfall um 0,30 Einheiten bedeutet Verdopplung der [H⁺], weil lg(2) ≈ 0,301. Rechnung: [H⁺] bei pH 7,40 ≈ 40 nmol/L, bei pH 7,10 ≈ 80 nmol/L. 80/40 = 2. Allgemein: ΔpH = 0,3 → Faktor 2; ΔpH = 1,0 → Faktor 10.",
          hints: [
            "lg(2) ≈ 0,30 — was bedeutet das für die pH-Skala?",
            "pH sinkt um 0,30 → [H⁺] ändert sich um Faktor 10^0,30 ≈ ?",
          ],
          difficulty: 2,
          tags: ["ph-wert", "logarithmus", "klinisch"],
        },
        {
          question:
            "Zwei identische Schallquellen: Eine allein erzeugt 80 dB. Wie viel dB erzeugen beide zusammen?",
          options: ["83 dB", "160 dB", "80 dB", "86 dB", "90 dB"],
          correctIndex: 0,
          explanation:
            "Zwei identische Quellen = doppelte Intensität. ΔL = 10 × lg(2) ≈ 10 × 0,301 ≈ 3 dB. Also 80 + 3 = 83 dB. Dezibel addieren sich NICHT linear (nicht 80+80=160), weil die Skala logarithmisch ist.",
          hints: ["Doppelte Intensität: ΔL = 10 × lg(2) ≈ ?", "lg(2) ≈ 0,301. Also ΔL ≈ 3 dB."],
          difficulty: 2,
          tags: ["dezibel", "logarithmus", "schall"],
        },
        {
          question:
            "Ein Medikament hat T½ = 8 h. Nach 24 h sind noch wie viel Prozent der Ausgangsdosis vorhanden?",
          options: ["12,5 %", "25 %", "50 %", "6,25 %", "33,3 %"],
          correctIndex: 0,
          explanation:
            "Anzahl Halbwertszeiten: 24/8 = 3. Restanteil: (1/2)³ = 1/8 = 12,5 %. Schrittweise: 100 % → 50 % → 25 % → 12,5 %. Nach jeder HWZ halbiert sich die Konzentration.",
          hints: ["Wie viele Halbwertszeiten passen in 24 h?", "(1/2) hoch 3 = ?"],
          difficulty: 1,
          tags: ["halbwertszeit", "pharmakokinetik", "exponentialfunktion"],
        },
        {
          question:
            "Henderson-Hasselbalch: pH = 6,1 + lg([HCO₃⁻]/(0,03 × pCO₂)). Bei [HCO₃⁻] = 24 mmol/L und pCO₂ = 80 mmHg ergibt sich welcher pH?",
          options: ["7,10", "7,40", "6,80", "7,70", "6,10"],
          correctIndex: 0,
          explanation:
            "Einsetzen: pH = 6,1 + lg(24/(0,03×80)) = 6,1 + lg(24/2,4) = 6,1 + lg(10) = 6,1 + 1,0 = 7,10. Der erhöhte pCO₂ (normal 40, hier 80 = verdoppelt) senkt den pH von 7,40 auf 7,10 — respiratorische Azidose.",
          hints: ["Berechne 0,03 × 80 = ?", "lg(24/2,4) = lg(10) = ?"],
          difficulty: 3,
          tags: ["henderson-hasselbalch", "puffer", "logarithmus", "klinisch"],
        },
        {
          question: "Welche Aussage über Logarithmen ist FALSCH?",
          options: [
            "lg(a+b) = lg(a) + lg(b)",
            "lg(a×b) = lg(a) + lg(b)",
            "lg(a/b) = lg(a) − lg(b)",
            "lg(aⁿ) = n × lg(a)",
            "lg(1) = 0",
          ],
          correctIndex: 0,
          explanation:
            "lg(a+b) = lg(a) + lg(b) ist FALSCH. Die Produktregel gilt nur für Multiplikation: lg(a×b) = lg(a) + lg(b). Gegenbeispiel: lg(10+10) = lg(20) ≈ 1,30, aber lg(10) + lg(10) = 1 + 1 = 2. Alle anderen Aussagen sind korrekt.",
          hints: [
            "Prüfe jede Aussage mit konkreten Zahlen.",
            "Welche Rechenoperation steht im Argument des Logarithmus?",
          ],
          difficulty: 2,
          tags: ["logarithmus", "rechenregeln", "falsch-aussage"],
        },
      ],
    },
    {
      id: "ma-2-02",
      title: "Terme, Rechengesetze und Betragsgleichungen",
      stichworte: [
        "Termumformung",
        "Distributivgesetz",
        "Kommutativgesetz",
        "Assoziativgesetz",
        "Ausklammern",
        "Betrag",
        "Betragsgleichung",
        "Betragsungleichung",
        "Faktorisierung",
        "Vorzeichenregeln",
        "Klammernregeln",
        "Summenzeichen",
      ],
      content: `Ein Patient erhält Methotrexat in ansteigender Dosierung: Woche 1 bekommt er 5 mg, Woche 2 dann 10 mg, Woche 3 dann 15 mg — immer 5 mg mehr. Nach 8 Wochen will der Arzt die kumulative Gesamtdosis berechnen. Dafür braucht er Termumformung, das Summenzeichen und sicheres Rechnen mit Klammern. Genau dieses Handwerkszeug — Rechengesetze, Vorzeichen, Betrag und Σ — steckt hinter fast jeder MedAT-Rechenaufgabe.

---

## Die drei Grundrechengesetze

Drei Gesetze regeln, wie du Terme umordnen und umklammern darfst. Ihre Namen kommen aus dem Lateinischen und verraten ihre Bedeutung:

**Kommutativgesetz** (lat. *commutare* = vertauschen): Die Reihenfolge ist egal.
- a + b = b + a und a × b = b × a
- Gilt **nicht** für Subtraktion und Division: 5 − 3 ≠ 3 − 5 und 6 ÷ 2 ≠ 2 ÷ 6

**Assoziativgesetz** (lat. *associare* = verbinden): Die Klammergruppierung ist egal.
- (a + b) + c = a + (b + c) und (a × b) × c = a × (b × c)
- Rechentrick: 17 + 48 + 3 = (17 + 3) + 48 = 20 + 48 = 68

**Distributivgesetz** (lat. *distribuere* = verteilen): Multiplikation wird über die Addition „verteilt".
- **a × (b + c) = a × b + a × c**

Warum funktioniert das? Stell dir ein Rechteck mit Breite a und Höhe (b + c) vor. Die Gesamtfläche ist a × (b + c). Du kannst es in zwei Teilrechtecke zerlegen — eines mit Höhe b, eines mit Höhe c. Die Flächen addiert ergeben dasselbe: a × b + a × c.

{{DIAGRAM:distributive-rectangle}}

**Vorwärts** = Ausmultiplizieren: 3(x + 4) = 3x + 12.
**Rückwärts** = Ausklammern: 3x + 12 = 3(x + 4).

> **Merke:** Kommutativ (Reihenfolge) und Assoziativ (Klammerung) gelten NUR für Addition und Multiplikation. Das Distributivgesetz a(b+c) = ab + ac verbindet Multiplikation mit Addition — vorwärts ausmultiplizieren, rückwärts ausklammern.

---

## Vorzeichenregeln und die Minusklammer-Falle

**Vorzeichenregeln:** Gleiche Vorzeichen → positiv, verschiedene → negativ.
- (+) × (+) = (+), (−) × (−) = (+)
- (+) × (−) = (−), (−) × (+) = (−)

**Minusklammer auflösen — der häufigste MedAT-Fehler:**

−(a + b − c) = −a − b + c

*Denkprozess:* Das Minus vor der Klammer ist eigentlich der Faktor (−1). Das Distributivgesetz liefert: (−1) × a + (−1) × b + (−1) × (−c) = −a − b + c. Jedes Vorzeichen dreht sich um.

Konkretes Beispiel: −(3x − 5) = −3x **+ 5**, nicht −3x − 5! Der Fehler passiert, weil man das Vorzeichen von −5 vergisst umzudrehen.

**Klammer mal Klammer:** (a + b)(c + d) = ac + ad + bc + bd — jeder Term der ersten Klammer mit jedem der zweiten (→ binomische Formeln in ma-2-03).

**Rechenbeispiel — Medikamenten-Gesamtkosten:**
Ein Krankenhaus bestellt n Packungen. Preis pro Packung: p Euro, Versandkosten pro Packung: v Euro, Rabatt pro Packung: r Euro. Gesamtkosten:

*Denkprozess:* K = n × p + n × v − n × r. Jeder Summand enthält den Faktor n. Ausklammern: K = n(p + v − r). Sofort erkennbar: Stückkosten = (p + v − r).

> **Merke:** Minus vor Klammer = Distributivgesetz mit Faktor (−1). ALLE Vorzeichen drehen sich um: −(a − b) = −a + b. Immer durch Rückmultiplizieren kontrollieren!

---

## Ausklammern und Faktorisieren

Ausklammern ist das Distributivgesetz rückwärts — und eine der wichtigsten Vereinfachungstechniken.

**Systematisches Vorgehen:**
1. **ggT der Koeffizienten bestimmen:** Bei 12x² + 18x → ggT(12, 18) = 6
2. **Kleinste Potenz gemeinsamer Variablen:** x kommt in beiden Termen vor, kleinste Potenz x¹ → Faktor 6x
3. **Herausziehen und Probe:** 12x² + 18x = 6x(2x + 3) — Probe: 6x × 2x = 12x², 6x × 3 = 18x ✓

**Rechenbeispiel — Infusionsrate:**
Gesamtvolumen V = π r² h₁ + π r² h₂ (Volumen zweier zylindrischer Infusionsbeutel mit gleichem Radius).

*Denkprozess:* Gemeinsame Faktoren: π, r², also V = π r²(h₁ + h₂). Das Gesamtvolumen hängt nur noch von der Höhensumme ab — eine sofort interpretierbare Form.

**Bruchrechnung mit Variablen** nutzt dieselbe Technik. Um (6x² + 12x) / (3x) zu vereinfachen: Zähler ausklammern → 6x(x + 2) / (3x) = 2(x + 2). Kürzen geht nur mit Faktoren, nie mit Summanden!

> **Merke:** Ausklammern = ggT der Koeffizienten × kleinste gemeinsame Variablenpotenz. Kürzen von Brüchen nur mit Faktoren — niemals einzelne Summanden streichen!

---

## Betrag — Abstand auf der Zahlengeraden

Der **Betrag** |a| gibt den Abstand von a zur Null an: |5| = 5, |−3| = 3, |0| = 0. Er ist immer ≥ 0.

Formal: |a| = a falls a ≥ 0, und |a| = −a falls a < 0 (das Minus macht die negative Zahl positiv).

Die entscheidende Einsicht: **|a − b| = Abstand zwischen a und b** auf der Zahlengeraden. |7 − 3| = 4 und |3 − 7| = 4 — egal, in welche Richtung du misst.

**Rechenregeln:**
- |a × b| = |a| × |b|
- |a / b| = |a| / |b| (für b ≠ 0)
- |a + b| ≤ |a| + |b| (**Dreiecksungleichung** — der Umweg ist nie kürzer als der direkte Weg)

---

## Betragsgleichungen und -ungleichungen

|x − 3| = 5 bedeutet geometrisch: „x hat den Abstand 5 von 3." Auf der Zahlengeraden gibt es genau **zwei** solche Punkte: 3 + 5 = **8** (rechts) und 3 − 5 = **−2** (links).

{{DIAGRAM:absolute-value-numberline}}

**Allgemeines Verfahren für |f(x)| = c (c ≥ 0):**
1. Fall 1: f(x) = c → lösen
2. Fall 2: f(x) = −c → lösen
3. Lösungsmengen vereinigen (für c < 0: keine Lösung, da Betrag nie negativ)

**Betragsungleichungen** als Intervalle:
- |x − a| < d → x liegt näher als d an a → **offenes Intervall (a − d, a + d)**
- |x − a| > d → x liegt weiter als d von a → **x < a − d oder x > a + d**

**Rechenbeispiel — Blut-pH-Toleranz:**

*Denkprozess:* Der physiologische pH-Wert ist 7,40. Toleranz: ±0,05. Als Betragsungleichung: |pH − 7,40| ≤ 0,05. Auflösen: −0,05 ≤ pH − 7,40 ≤ 0,05. Addition von 7,40: **7,35 ≤ pH ≤ 7,45**. Werte außerhalb → Azidose (< 7,35) oder Alkalose (> 7,45).

**Rechenbeispiel — Betragsgleichung:**
|2x + 1| = 7. Fall 1: 2x + 1 = 7 → x = 3. Fall 2: 2x + 1 = −7 → x = −4. Probe: |2(3)+1| = 7 ✓; |2(−4)+1| = 7 ✓. Lösungsmenge: {−4, 3}.

> **Merke:** |x − a| = d → zwei Lösungen: x = a ± d. |x − a| < d → Intervall (a−d, a+d). Betragsungleichungen modellieren Toleranzbereiche in der Labormedizin.

---

## Summenzeichen Σ — Kurzschreibweise für Reihen

Wenn du viele gleichartige Terme addierst, wird die Schreibweise schnell unhandlich. Das **Summenzeichen** Σ (griechisch *Sigma*, der Buchstabe für „S" wie Summe) fasst zusammen:

**Σ(i=1 bis n) aᵢ = a₁ + a₂ + ... + aₙ**

Lies: „Summiere aᵢ für i von 1 bis n." Dabei heißt i der **Laufindex**, 1 die untere und n die obere Grenze.

**Rechenregeln:**
- Konstante herausziehen: Σ(i=1 bis n) c × aᵢ = c × Σ(i=1 bis n) aᵢ
- Summe aufteilen: Σ(i=1 bis n) (aᵢ + bᵢ) = Σ aᵢ + Σ bᵢ
- Index-Verschiebung: Σ(i=1 bis n) aᵢ = Σ(j=0 bis n−1) a_{j+1} (gleiche Summe, anderer Startindex)

Die **Gaußsche Summenformel** ist die wichtigste geschlossene Form: Σ(i=1 bis n) i = n(n+1)/2. Gauß erkannte als Schüler: 1+100 = 101, 2+99 = 101, ..., 50+51 = 101 — 50 Paare à 101 = 5050.

**Rechenbeispiel — kumulative Medikamentendosis:**
Zurück zum Eingangsbeispiel: Methotrexat-Dosis in Woche k = 5k mg. Gesamtdosis nach 8 Wochen:

*Denkprozess:* Σ(k=1 bis 8) 5k = 5 × Σ(k=1 bis 8) k = 5 × 8 × 9/2 = 5 × 36 = **180 mg**.
Die Konstante 5 wird vor das Σ gezogen (Rechenregel 1), dann Gauß-Formel anwenden.

In der Medizin begegnet dir Σ beim **Mittelwert**: x̄ = (1/n) × Σ(i=1 bis n) xᵢ — mittlere Herzfrequenz, Blutdruck-Durchschnitt, Studienergebnisse.

> **Merke:** Σ fasst gleichartige Additionen zusammen. Konstanten dürfen herausgezogen werden. Gaußsche Summenformel: 1 + 2 + ... + n = n(n+1)/2. Index-Verschiebung ändert die Summe nicht, nur den Startpunkt.

---

## Rechenbeispiele

**Beispiel 1 — Distributivgesetz und Minusklammer:**
Vereinfache: −2(3x − 4) + 5(x + 1).

*Denkprozess:* Zuerst ausmultiplizieren: −2 × 3x = −6x, −2 × (−4) = +8, 5 × x = 5x, 5 × 1 = 5. Zusammenfassen: (−6x + 5x) + (8 + 5) = **−x + 13**. Probe mit x = 3: −2(9−4) + 5(4) = −10 + 20 = 10. Und −3 + 13 = 10 ✓.

**Beispiel 2 — Ausklammern eines Bruchs:**
Vereinfache: (4x² − 8x) / (2x).

*Denkprozess:* Zähler ausklammern: 4x(x − 2). Kürzen: 4x(x − 2) / (2x) = **2(x − 2) = 2x − 4**. Achtung: x ≠ 0 (Definitionsbereich!). Probe mit x = 5: (100 − 40)/10 = 6. Und 2(5) − 4 = 6 ✓.

**Beispiel 3 — Betragsungleichung als Labortoleranz:**
Ein Laborwert soll maximal 10 % vom Sollwert S = 120 mg/dL abweichen: |x − 120| ≤ 12. Auflösen: 108 ≤ x ≤ 132. Ganzzahlige Werte im Toleranzbereich: 132 − 108 + 1 = **25 Werte**.`,
      lernziele: [
        "Die drei Rechengesetze (kommutativ, assoziativ, distributiv) sicher anwenden und typische Fehlschlüsse vermeiden",
        "Terme durch Ausklammern und Faktorisieren vereinfachen",
        "Betragsgleichungen und -ungleichungen durch Fallunterscheidung lösen",
        "Das Summenzeichen Σ lesen und einfache Summenformeln anwenden",
      ],
      sections: [
        {
          heading: "Rechengesetze — Kommutativ, Assoziativ, Distributiv",
          text: "Kommutativ- und Assoziativgesetz gelten für Addition und Multiplikation, NICHT für Subtraktion und Division. Das Distributivgesetz a(b+c) = ab+ac ist die Grundlage für Ausmultiplizieren (vorwärts) und Ausklammern (rückwärts). Typische MedAT-Falle: Minusklammer nicht korrekt auflösen — −(a−b) = −a+b (nicht −a−b).",
          merksatz:
            "Distributivgesetz: a(b+c) = ab + ac. Minusklammer: −(a−b) = −a+b. Kommutativgesetz gilt NICHT für Subtraktion!",
        },
        {
          heading: "Betrag und Betragsgleichungen",
          text: "|a| = Abstand von a zu Null. Betragsgleichung |f(x)| = c: Zwei Fälle aufstellen (f(x) = c und f(x) = −c), Lösungsmengen vereinigen. Betragsungleichung |x−a| < d ergibt Intervall (a−d, a+d). Klinisch: Toleranzbereich eines Laborwerts = Betragsungleichung.",
          merksatz:
            "|f(x)| = c → zwei Fälle: f(x) = c oder f(x) = −c. |x−a| < d → Intervall (a−d, a+d).",
        },
        {
          heading: "Ausklammern und Faktorisieren",
          text: "Ausklammern = Distributivgesetz rückwärts. Gemeinsamen Faktor aller Summanden identifizieren (ggT der Koeffizienten und kleinste Potenz gemeinsamer Variablen), vor die Klammer schreiben, Rest in die Klammer. Probe durch Rückmultiplizieren. Faktorisieren erleichtert das Kürzen von Brüchen und das Erkennen von Nullstellen.",
          merksatz:
            "Ausklammern: ggT aller Koeffizienten finden, kleinste Variable-Potenz nehmen, Probe durch Rückmultiplizieren.",
        },
      ],
      merksätze: [
        "Distributivgesetz: a(b+c) = ab + ac — vorwärts ausmultiplizieren, rückwärts ausklammern.",
        "Minus vor Klammer dreht ALLE Vorzeichen: −(a − b + c) = −a + b − c.",
        "Gleiche Vorzeichen → positiv; verschiedene Vorzeichen → negativ.",
        "Betrag |a| = Abstand von Null. Immer ≥ 0. |a×b| = |a|×|b|.",
        "Dreiecksungleichung: |a + b| ≤ |a| + |b|.",
        "Betragsgleichung: |f(x)| = c → zwei Fälle (f(x) = c und f(x) = −c).",
        "|x − a| < d → offenes Intervall (a−d, a+d).",
        "Gaußsche Summenformel: 1 + 2 + ... + n = n(n+1)/2.",
        "Ausklammern: ggT der Koeffizienten × kleinste gemeinsame Variablenpotenz.",
      ],
      altfrage: {
        question:
          "Ein Laborwert soll maximal 5 Einheiten vom Sollwert 120 mg/dL abweichen. Formulieren Sie dies als Betragsungleichung und geben Sie den Toleranzbereich an. Wie viele ganzzahlige Werte liegen im Toleranzbereich?",
        answer:
          "Betragsungleichung: |x − 120| ≤ 5. Auflösen: −5 ≤ x − 120 ≤ 5. Addition von 120: 115 ≤ x ≤ 125. Toleranzbereich: [115, 125]. Ganzzahlige Werte: 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125 = 11 Werte. Allgemein: |x − a| ≤ d hat (2d + 1) ganzzahlige Lösungen (bei ganzzahligem a und d). In der klinischen Labormedizin werden Referenzbereiche häufig als Toleranzintervalle um einen Mittelwert angegeben.",
      },
      klinischerBezug:
        "Rechengesetze und Termumformungen sind in der Medizin allgegenwärtig: Pharmakokinetische Formeln umstellen (Clearance = Dosis/AUC), Laborwert-Toleranzbereiche als Betragsungleichungen (z.B. |pH − 7,40| ≤ 0,05 → pH 7,35–7,45), Dosisberechnungen ausklammern (Gesamtdosis = n × Einzeldosis × Bioverfügbarkeit). Die Gaußsche Summenformel erscheint bei kumulativen Dosierungsschemata.",
      selfTest: [
        {
          question: "Was ergibt −(3x − 5) + 2(x + 1)?",
          options: ["−x + 7", "−x + 3", "−5x + 7", "x + 7", "−x − 3"],
          correctIndex: 0,
          explanation:
            "Schritt 1: −(3x − 5) = −3x + 5 (Minusklammer: BEIDE Vorzeichen drehen). Schritt 2: 2(x + 1) = 2x + 2 (Distributivgesetz). Schritt 3: −3x + 5 + 2x + 2 = −x + 7. Häufiger Fehler: −(3x − 5) = −3x − 5 (Vorzeichen von −5 nicht umgedreht).",
          hints: [
            "Minusklammer auflösen: −(3x − 5) = −3x + ?",
            "Dann zusammenfassen: (−3x + 2x) + (5 + 2) = ?",
          ],
          difficulty: 1,
          tags: ["termumformung", "klammern", "vorzeichen"],
        },
        {
          question: "Lösen Sie: |2x − 6| = 10. Welche Lösungsmenge ergibt sich?",
          options: ["{−2, 8}", "{8}", "{−2}", "{−8, 2}", "Keine Lösung"],
          correctIndex: 0,
          explanation:
            "Zwei Fälle: Fall 1: 2x − 6 = 10 → 2x = 16 → x = 8. Fall 2: 2x − 6 = −10 → 2x = −4 → x = −2. Probe: |2(8) − 6| = |10| = 10 ✓; |2(−2) − 6| = |−10| = 10 ✓. Lösungsmenge: {−2, 8}.",
          hints: [
            "Betragsgleichung → zwei Fälle: 2x − 6 = 10 und 2x − 6 = −10.",
            "Jeden Fall separat nach x lösen.",
          ],
          difficulty: 2,
          tags: ["betragsgleichung", "fallunterscheidung", "algebra"],
        },
        {
          question: "Klammern Sie aus: 12x³ − 8x² + 4x. Was ist der gemeinsame Faktor?",
          options: ["4x", "4x²", "2x", "4", "x"],
          correctIndex: 0,
          explanation:
            "ggT der Koeffizienten: ggT(12, 8, 4) = 4. Kleinste x-Potenz: x¹. Gemeinsamer Faktor: 4x. Ergebnis: 4x(3x² − 2x + 1). Probe: 4x × 3x² = 12x³; 4x × (−2x) = −8x²; 4x × 1 = 4x ✓.",
          hints: [
            "ggT der Koeffizienten 12, 8, 4 bestimmen.",
            "Kleinste Potenz von x in allen Termen finden.",
          ],
          difficulty: 1,
          tags: ["ausklammern", "faktorisierung", "terme"],
        },
        {
          question: "Welche Werte erfüllen |x − 5| < 3?",
          options: ["2 < x < 8", "x < 2 oder x > 8", "−3 < x < 3", "x = 2 oder x = 8", "5 < x < 8"],
          correctIndex: 0,
          explanation:
            "|x − 5| < 3 bedeutet: Der Abstand von x zu 5 ist kleiner als 3. Auflösen: −3 < x − 5 < 3. Addition von 5: 2 < x < 8. Lösungsmenge: das offene Intervall (2, 8). Geometrisch: alle Punkte auf der Zahlengeraden, die näher als 3 Einheiten an 5 liegen.",
          hints: [
            "|x − a| < d ergibt das Intervall (a − d, a + d).",
            "Hier: a = 5, d = 3. Also (5 − 3, 5 + 3) = ?",
          ],
          difficulty: 2,
          tags: ["betragsungleichung", "intervall", "algebra"],
        },
        {
          question: "Berechne: Σ(i=1 bis 10) i mit der Gaußschen Summenformel.",
          options: ["55", "50", "100", "45", "110"],
          correctIndex: 0,
          explanation:
            "Gaußsche Summenformel: n(n+1)/2 = 10 × 11/2 = 110/2 = 55. Probe: 1+2+3+4+5+6+7+8+9+10 = 55. Die Formel stammt von Gauß, der als Schüler die Paare (1+10, 2+9, ...) bildete: 5 Paare à 11 = 55.",
          hints: ["Formel: n(n+1)/2 mit n = 10.", "10 × 11 = 110. Dann 110/2 = ?"],
          difficulty: 1,
          tags: ["summenzeichen", "gauss", "algebra"],
        },
      ],
    },
    {
      id: "ma-2-03",
      title: "Quadratische Gleichungen und binomische Formeln",
      stichworte: [
        "Binomische Formeln",
        "Quadratische Ergänzung",
        "Scheitelpunktform",
        "Normalform",
        "p-q-Formel",
        "Faktorisierung",
        "Nullstellen",
        "Parabel",
        "Vieta-Satz",
        "Diskriminante",
      ],
      content: `**Idee:** Binomische Formeln fassen (a±b)² und (a+b)(a−b) in feste Muster; **der mittlere Term 2ab** wird oft vergessen. Quadratische Gleichungen: **Diskriminante D** entscheidet über Anzahl der Lösungen; **Scheitelpunkt** einer Parabel = Optimum; **Vieta** liefert aus Summe und Produkt der Lösungen die Koeffizienten.

**Verfahren — Schrittfolge:** (1) **Binome:** (a+b)² = a²+2ab+b²; (a−b)² = a²−2ab+b²; (a+b)(a−b) = a²−b². (2) **Quadratische Gleichung:** D = b²−4ac; x = (−b±√D)/(2a); D>0: 2 Lösungen, D=0: 1, D<0: keine. (3) **Scheitelpunkt:** x_S = −b/(2a), y_S = f(x_S). (4) **Vieta** (x²+px+q=0): x₁+x₂ = −p, x₁×x₂ = q.

**Typische Prüfungsfehler:** (a+b)² = a²+b² (2ab vergessen). Vieta: Summe = −p (Minus!). Scheitelpunkt: x_S = −b/(2a), nicht b/(2a).

---

## Die drei binomischen Formeln — Herleitung und Anwendung





Alle drei binomischen Formeln entstehen durch einfaches Ausmultiplizieren. Ihre Gültigkeit kann jederzeit durch Ausmultiplizieren überprüft werden.

### Erste binomische Formel — Quadrat der Summe

(a + b)² = a² + 2ab + b²

Herleitung: (a+b)² = (a+b) × (a+b) = a × a + a × b + b × a + b × b = a² + ab + ba + b² = a² + 2ab + b².

Der mittlere Term 2ab ist der häufigste Vergesskandidat! Der typische Fehler: (a+b)² = a² + b². Das ist falsch.

Beispiele:
- (x + 3)² = x² + 6x + 9
- (2x + 5)² = 4x² + 20x + 25 (hier: a = 2x, b = 5)
- (10 + 0,01)² = 100 + 0,2 + 0,0001 = 100,2001 (schnelle Näherungsrechnung)

### Zweite binomische Formel — Quadrat der Differenz

(a − b)² = a² − 2ab + b²

Herleitung: (a − b)² = (a − b)(a − b) = a² − ab − ba + b² = a² − 2ab + b².

Das mittlere Glied ist negativ (−2ab), die äußeren Quadrate sind positiv. Merkhilfe: Minus in der Mitte.

Beispiele:
- (x − 4)² = x² − 8x + 16
- (3x − 2)² = 9x² − 12x + 4
- (Wurzel aus 5 − 1)² = 5 − 2 Wurzel 5 + 1 = 6 − 2 Wurzel 5

### Dritte binomische Formel — Differenz der Quadrate

(a + b)(a − b) = a² − b²

Herleitung: (a+b)(a − b) = a² − ab + ba − b² = a² − b². Die mittleren Terme heben sich auf.

Diese Formel ist besonders wertvoll für schnelles Faktorisieren und mentale Arithmetik.

Beispiele:
- (x + 5)(x − 5) = x² − 25
- (2x + 3)(2x − 3) = 4x² − 9
- (Wurzel aus 7 + Wurzel aus 3)(Wurzel aus 7 − Wurzel aus 3) = 7 − 3 = 4
- 99 × 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999 (mentale Arithmetik)

> **Merke:** Die drei binomischen Formeln: (1) (a+b)² = a²+2ab+b²; (2) (a−b)² = a²−2ab+b²; (3) (a+b)(a−b) = a²−b². Häufigster Fehler: (a+b)² = a²+b² (der mittlere Term 2ab fehlt!).

## Rückwärtsanwendung — Faktorisieren

Die binomischen Formeln rückwärts gelesen ermöglichen das Faktorisieren.

Muster erkennen:
- x² + 6x + 9 = (x+3)² — erste binomische Formel rückwärts
- x² − 8x + 16 = (x − 4)² — zweite binomische Formel rückwärts
- x² − 25 = (x+5)(x − 5) — dritte binomische Formel rückwärts
- 4x² − 1 = (2x+1)(2x − 1) — dritte binomische Formel mit a=2x, b=1

Vorgehen beim Faktorisieren:
1. Liegt ein vollständiges Quadrat vor? (a² +/- 2ab + b²) — erste oder zweite binomische Formel.
2. Liegt eine Differenz zweier Quadrate vor? (a² − b²) — dritte binomische Formel.
3. Sonst: Vieta'sche Formeln oder allgemeine Lösungsformel verwenden.

> **Merke:** Faktorisier-Checkliste: (1) Vollständiges Quadrat? → 1./2. binomische Formel. (2) Differenz zweier Quadrate? → 3. binomische Formel. (3) Ganzzahlige Lösungen erkennbar? → Vieta. (4) Sonst → Mitternachtsformel.

## Rationalisierung von Nennern

Mit der dritten binomischen Formel lassen sich Nenner rationalisieren (Wurzeln aus dem Nenner entfernen).

Beispiel: 1 / (Wurzel aus 3 − 1). Erweitern mit (Wurzel aus 3 + 1):
= (Wurzel aus 3 + 1) / ((Wurzel aus 3 − 1)(Wurzel aus 3 + 1)) = (Wurzel aus 3 + 1) / (3 − 1) = (Wurzel aus 3 + 1) / 2.

## Scheitelpunktform und quadratisches Ergänzen

Jede quadratische Funktion f(x) = ax² + bx + c lässt sich durch quadratisches Ergänzen in die Scheitelpunktform umschreiben:

f(x) = a(x − d)² + e, wobei (d, e) der **Scheitelpunkt** (Vertex, Umkehrpunkt) der Parabel ist.

Der Scheitelpunkt ist das Minimum (wenn a > 0) oder das Maximum (wenn a < 0) der Funktion.

Berechnung des Scheitelpunkts:
- x-Koordinate: d = − b / (2a)
- y-Koordinate: e = f(d) = c − b² / (4a)

Quadratisches Ergänzen — schrittweise:
f(x) = x² + bx + c.
Schritt 1: x² + bx = (x + b/2)² − (b/2)².
Schritt 2: f(x) = (x + b/2)² − (b/2)² + c.
Scheitelpunkt: d = − b/2, e = c − b² / 4.

Beispiel: f(x) = x² − 6x + 11.
Schritt 1: x² − 6x = (x − 3)² − 9.
Schritt 2: f(x) = (x − 3)² − 9 + 11 = (x − 3)² + 2.
Scheitelpunkt: (3, 2). Da a = 1 > 0 ist das Minimum der Funktion gleich 2, erreicht bei x = 3.

## Vieta'sche Formeln

Für eine quadratische Gleichung x² + px + q = 0 (führender Koeffizient 1) mit den Lösungen x1 und x2 gilt:

- x1 + x2 = − p (Summe der Lösungen = negativer Koeffizient von x)
- x1 × x2 = q (Produkt der Lösungen = konstantes Glied)

Herleitung: x² + px + q = (x − x1)(x − x2) = x² − (x1+x2)x + x1 × x2. Koeffizientenvergleich ergibt die Formeln.

Anwendung: x² − 5x + 6 = 0. Gesucht: zwei Zahlen mit Summe 5 und Produkt 6. Kandidaten: 2 und 3 (2+3=5, 2 × 3=6). Also x1=2, x2=3.

Für allgemeine ax² + bx + c = 0 gilt: x1+x2 = − b/a und x1 × x2 = c/a.

Die Vieta'schen Formeln ermöglichen auch die Prüfung von Ergebnissen: Summe und Produkt der gefundenen Lösungen müssen stimmen.

> **Merke:** Vieta für x² + px + q = 0: Summe x₁+x₂ = −p; Produkt x₁×x₂ = q. Zwei Zahlen mit der richtigen Summe und dem richtigen Produkt finden → fertig. Funktioniert nur bei ganzzahligen/einfachen Lösungen schnell.

## Rechenbeispiele

**Beispiel 1 — BSA-Berechnung (Körperoberfläche nach Mosteller):**
BSA = Wurzel aus (Größe [cm] × Gewicht [kg] / 3600). Patient: 180 cm, 75 kg. BSA = Wurzel aus (180 × 75 / 3600) = Wurzel aus (13500/3600) = Wurzel aus 3,75 = **1,94 m²**. Zytostatikum 150 mg/m²: Dosis = 150 × 1,94 = **291 mg**.

**Beispiel 2 — Wundfläche und Skalierung (dritte binomische Formel):**
Runde Wunde mit Radius (r+2) cm am Morgen und (r+8) cm am Abend. Flächendifferenz: pi × ((r+8)² − (r+2)²) = pi × ((r+8)+(r+2)) × ((r+8) − (r+2)) = pi × (2r+10) × 6. Für r = 1: Delta A = pi × 12 × 6 = **72 pi ungefähr 226 cm²**. Dritte binomische Formel vereinfacht die Berechnung erheblich.

**Beispiel 3 — Parabel: Optimale Dosis (Scheitelpunkt):**
Wirksamkeit E(d) = − 0,5 d² + 10d − 12 (d = Dosis in mg). Scheitelpunkt: d_opt = − b/(2a) = − 10/(2 × (−0,5)) = **10 mg**. E_max = − 0,5 × 100 + 100 − 12 = **38 Einheiten**. Parabelform zeigt: zu wenig und zu viel Dosis reduzieren die Wirksamkeit.`,
      lernziele: [
        "Die drei binomischen Formeln auswendig kennen, herleiten und vorwärts sowie rückwärts (zum Faktorisieren) anwenden",
        "Quadratische Ausdrücke durch Erkennen des Musters faktorisieren (vollständige Quadrate und Differenz der Quadrate)",
        "Den Scheitelpunkt einer Parabel durch quadratisches Ergänzen oder direkte Formel berechnen und die Scheitelpunktform interpretieren",
        "Die Vieta'schen Formeln zum schnellen Lösen quadratischer Gleichungen und zur Lösungsprüfung nutzen",
      ],
      sections: [
        {
          heading: "Die drei binomischen Formeln — auswendig und sicher",
          text: "Formel 1: (a+b)² = a² + 2ab + b². Formel 2: (a − b)² = a² − 2ab + b². Formel 3: (a+b)(a − b) = a² − b². Der häufigste Fehler ist (a+b)² = a² + b² ohne den mittleren Term. Zum Beweis: einfach ausmultiplizieren. Merkhilfe: Erstes Quadrat, doppeltes Produkt, zweites Quadrat für Formel 1 und 2. Formel 3 ist die Differenz der Quadrate — die mittleren Terme heben sich auf. Rückwärts gelesen ermöglicht Formel 3 das schnelle mentale Rechnen: 98 × 102 = (100 − 2)(100 + 2) = 10000 − 4 = 9996.",
          merksatz:
            "(a+b)² = a² + 2ab + b² — der mittlere Term 2ab ist der häufigste Vergesskandidat!",
        },
        {
          heading: "Scheitelpunktform und quadratisches Ergänzen",
          text: "Die Scheitelpunktform f(x) = a(x − d)² + e zeigt direkt das Minimum oder Maximum: (d, e) ist der Scheitelpunkt. Die x-Koordinate d = − b/(2a) ist leicht zu merken — sie entspricht der x-Koordinate der Symmetrieachse der Parabel. Quadratisches Ergänzen: x² + bx wird ergänzt zu (x + b/2)² − (b/2)². Dies ist die Herleitung der allgemeinen Lösungsformel. In der Medizin führen Optimierungsprobleme (minimale Kosten, maximale Wirkung bei minimaler Dosis) zu Parabeln, deren Scheitelpunkt das Optimum beschreibt.",
          merksatz: "Scheitelpunkt: d = − b/(2a); e = f(d). Bei a>0: Minimum; bei a<0: Maximum.",
        },
        {
          heading: "Vieta und Faktorisierung — schnelles Lösen",
          text: "Für x² + px + q = 0 sucht man zwei Zahlen, die addiert − p und multipliziert q ergeben. Sind diese Zahlen ganze Zahlen, ist Faktorisieren schneller als die Lösungsformel. Beispiel: x² − 7x + 12 = 0: Summe = 7, Produkt = 12, gesucht sind 3 und 4. Also (x − 3)(x − 4) = 0. Wenn keine ganzzahligen Lösungen erkennbar sind, muss die allgemeine Lösungsformel verwendet werden. Vieta eignet sich auch zur Probe: Wenn x1+x2 ungleich − b/a oder x1 × x2 ungleich c/a, liegt ein Rechenfehler vor.",
          merksatz:
            "Vieta für x² + px + q = 0: Summe der Lösungen = − p; Produkt = q. Zwei Zahlen finden, die beides erfüllen.",
        },
      ],
      merksätze: [
        "(a+b)² = a² + 2ab + b² — nie vergessen: der mittlere Term 2ab!",
        "(a − b)² = a² − 2ab + b² — mittlerer Term negativ.",
        "(a+b)(a − b) = a² − b² — Differenz der Quadrate.",
        "Scheitelpunkt: d = − b/(2a); e = f(d) = c − b² / (4a).",
        "Vieta: x1+x2 = − b/a; x1 × x2 = c/a für ax² + bx + c = 0.",
        "Quadratisches Ergänzen: x² + bx = (x + b/2)² − (b/2)².",
        "Rationalisierung: Nenner mit konjugiertem Ausdruck erweitern und dritte binomische Formel anwenden.",
        "Faktorisieren: erst a² +/- 2ab + b² oder a² − b² prüfen, dann Vieta, zuletzt Lösungsformel.",
        "Mentale Arithmetik: 97 × 103 = (100 − 3)(100 + 3) = 10000 − 9 = 9991.",
        "Diskriminante D > 0: Parabel schneidet x-Achse zweimal. D = 0: berührt x-Achse. D < 0: schneidet nicht.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Eine kreisförmige Wundfläche vergrößert sich täglich. Am Morgen hat der Wundrand Radius (x+3) cm, am Abend Radius (x+7) cm. Die Abend-Fläche beträgt das 4-Fache der Morgen-Fläche. Bestimmen Sie x und die Radien. Welche Beziehung zwischen Radius und Fläche liegt vor?",
        answer:
          "Kreisfläche A = pi × r². Morgens: A1 = pi × (x+3)². Abends: A2 = pi × (x+7)². Bedingung: A2 = 4 × A1. Einsetzen: pi × (x+7)² = 4 × pi × (x+3)². Kürze pi: (x+7)² = 4 × (x+3)². Wurzel ziehen: x+7 = 2(x+3) oder x+7 = − 2(x+3). Fall 1: x+7 = 2x+6, also x = 1. Fall 2: x+7 = − 2x − 6, also 3x = − 13, x = − 13/3 (ergibt negativen Radius, ausgeschlossen). Lösung: x = 1. Radius morgens: 4 cm. Radius abends: 8 cm. Probe: A1 = pi × 16, A2 = pi × 64 = 4 × pi × 16. Korrekt. Der Zusammenhang zwischen Radius und Fläche ist quadratisch: Bei Verdopplung des Radius vervierfacht sich die Fläche. Dies ist keine lineare Proportionalität, sondern eine quadratische Beziehung.",
      },
      klinischerBezug:
        "Quadratische Zusammenhänge finden sich in der Medizin bei der Berechnung der Körperoberfläche BSA, die für Chemotherapiedosierungen entscheidend ist: BSA in m² ist ungefähr gleich der Wurzel aus (Größe in cm × Gewicht in kg geteilt durch 3600). Zytostatikadosen werden auf die BSA bezogen, um individuelle Unterschiede in der Körpergröße zu berücksichtigen. Die dritte binomische Formel erscheint bei der Rationalisierung von Wurzelausdrücken in Berechnungen zur Schallausbreitung und beim Berechnen von Gefäßwiderständen.",
      selfTest: [
        {
          question: "Was ergibt (3x − 4)²?",
          options: [
            "9x² − 24x + 16",
            "9x² + 16",
            "6x² − 24x + 16",
            "9x² − 12x + 16",
            "9x² − 24x − 16",
          ],
          correctIndex: 0,
          explanation:
            "(3x − 4)² = (3x)² − 2 × (3x) × 4 + 4² = 9x² − 24x + 16. Zweite binomische Formel mit a = 3x und b = 4. Mittlerer Term: − 2 × (3x) × 4 = − 24x. Der häufige Fehler wäre das Vergessen des mittleren Terms.",
          hints: [
            "(a − b)² = a² − 2ab + b² mit a=3x und b=4.",
            "(3x)² = 9x²; 2 × (3x) × 4 = 24x; 4² = 16.",
          ],
          difficulty: 2,
          tags: ["binomische-formel", "quadrat", "algebra"],
        },
        {
          question: "Welche Faktorisierung gilt für 4x² − 49?",
          options: [
            "(2x+7)(2x − 7)",
            "(4x+7)(x − 7)",
            "(2x − 7)²",
            "(4x − 7)(x+7)",
            "(2x+49)(2x − 1)",
          ],
          correctIndex: 0,
          explanation:
            "4x² − 49 = (2x)² − 7². Dritte binomische Formel: (2x+7)(2x − 7). Probe: (2x+7)(2x − 7) = 4x² − 14x + 14x − 49 = 4x² − 49. Korrekt.",
          hints: ["Erkenne a² − b² mit 4x² = (2x)² und 49 = 7².", "(a+b)(a − b) = a² − b²."],
          difficulty: 2,
          tags: ["binomische-formel", "faktorisierung", "differenz-der-quadrate"],
        },
        {
          question: "Was ist der Scheitelpunkt von f(x) = 2x² − 8x + 10?",
          options: ["(2, 2)", "(−2, 2)", "(4, 10)", "(2, 10)", "(−4, 2)"],
          correctIndex: 0,
          explanation:
            "Scheitelpunkt-x: d = − b / (2a) = − (−8) / (2 × 2) = 8/4 = 2. Scheitelpunkt-y: e = f(2) = 2 × 4 − 8 × 2 + 10 = 8 − 16 + 10 = 2. Scheitelpunkt: (2, 2). Da a = 2 > 0 ist das ein Minimum.",
          hints: ["d = − b/(2a) = 8/4 = 2.", "e = f(2) = 2 × 4 − 8 × 2 + 10 = ?"],
          difficulty: 2,
          tags: ["parabel", "scheitelpunkt", "quadratische-funktion"],
        },
        {
          question: "Mit Vieta: Welche Gleichung hat die Lösungen x1 = − 2 und x2 = 5?",
          options: [
            "x² − 3x − 10 = 0",
            "x² + 3x − 10 = 0",
            "x² − 3x + 10 = 0",
            "x² + 7x − 10 = 0",
            "x² − 7x + 10 = 0",
          ],
          correctIndex: 0,
          explanation:
            "Summe: x1 + x2 = − 2 + 5 = 3 = − p, also p = − 3. Produkt: x1 × x2 = − 2 × 5 = − 10 = q. Gleichung: x² − 3x − 10 = 0. Probe: (x + 2)(x − 5) = x² − 3x − 10. Korrekt.",
          hints: [
            "Summe der Lösungen = − 2 + 5 = 3 = − p, also p = ?",
            "Produkt = − 2 × 5 = − 10 = q. Gleichung: x² + px + q = 0.",
          ],
          difficulty: 2,
          tags: ["vieta", "quadratische-gleichung", "algebra"],
        },
        {
          question: "Was ergibt (Wurzel aus 6 + Wurzel aus 2)(Wurzel aus 6 − Wurzel aus 2)?",
          options: ["4", "Wurzel aus 8", "8", "Wurzel aus 4", "2 Wurzel aus 3"],
          correctIndex: 0,
          explanation:
            "(Wurzel aus 6 + Wurzel aus 2)(Wurzel aus 6 − Wurzel aus 2) = (Wurzel aus 6)² − (Wurzel aus 2)² = 6 − 2 = 4. Dritte binomische Formel mit a = Wurzel aus 6 und b = Wurzel aus 2.",
          hints: [
            "(a+b)(a − b) = a² − b² mit a = Wurzel aus 6 und b = Wurzel aus 2.",
            "(Wurzel aus 6)² = 6; (Wurzel aus 2)² = 2.",
          ],
          difficulty: 2,
          tags: ["binomische-formel", "rationalisierung", "wurzel"],
        },
      ],
    },

    // === Trigonometrie ===
    {
      id: "ma-2-05",
      title: "Trigonometrie-Grundlagen",
      stichworte: [
        "Sinus",
        "Kosinus",
        "Tangens",
        "Einheitskreis",
        "Bogenmaß",
        "Gradmaß",
        "SOH-CAH-TOA",
        "Trigonometrischer Pythagoras",
        "Rechtwinkliges Dreieck",
        "Kräftezerlegung",
        "Winkelfunktion",
        "Umrechnung Grad Bogenmaß",
      ],
      content: `## Sinus, Kosinus und Tangens am rechtwinkligen Dreieck

**Idee:** In jedem rechtwinkligen Dreieck stehen die Seitenlängen in einem festen Verhältnis zueinander, das nur vom Winkel abhängt — nicht von der Größe des Dreiecks. Dieses Verhältnis beschreiben die drei trigonometrischen Funktionen Sinus, Kosinus und Tangens.

**Verfahren — SOH-CAH-TOA (Merkhilfe):**

- **S**inus = **O**pposite / **H**ypotenuse → sin α = Gegenkathete / Hypotenuse
- **C**osinus = **A**djacent / **H**ypotenuse → cos α = Ankathete / Hypotenuse
- **T**angens = **O**pposite / **A**djacent → tan α = Gegenkathete / Ankathete

Dabei ist:
- **Hypotenuse:** die längste Seite, gegenüber dem rechten Winkel (90°)
- **Gegenkathete:** die Seite gegenüber dem betrachteten Winkel α
- **Ankathete:** die Seite neben dem betrachteten Winkel α (nicht die Hypotenuse)

Zusätzlich gilt: **tan α = sin α / cos α** (solange cos α ≠ 0).

> **Merke:** SOH-CAH-TOA — Sinus = Gegenkathete/Hypotenuse, Cosinus = Ankathete/Hypotenuse, Tangens = Gegenkathete/Ankathete. Die Hypotenuse liegt IMMER gegenüber dem rechten Winkel und ist die längste Seite.

---

{{DIAGRAM:unit-circle}}

## Rechenbeispiel 1 — Seitenlänge bestimmen

**Aufgabe:** Ein rechtwinkliges Dreieck hat eine Hypotenuse von 10 cm und einen Winkel α = 30°. Berechne die Gegenkathete und die Ankathete.

**Schritt 1:** Gegenkathete über Sinus: sin 30° = Gegenkathete / 10 cm.
sin 30° = 0,5 → Gegenkathete = 10 cm × 0,5 = **5 cm**.

**Schritt 2:** Ankathete über Kosinus: cos 30° = Ankathete / 10 cm.
cos 30° = √3/2 ≈ 0,866 → Ankathete = 10 cm × 0,866 = **8,66 cm**.

**Probe:** 5² + 8,66² = 25 + 75 = 100 = 10² ✓ (Satz des Pythagoras bestätigt)

---

## Rechenbeispiel 2 — Winkelberechnung

**Aufgabe:** In einem rechtwinkligen Dreieck sind Gegenkathete = 6 cm und Ankathete = 6 cm. Bestimme den Winkel α.

**Lösung:** tan α = Gegenkathete / Ankathete = 6/6 = 1.
α = arctan(1) = **45°**.

**Kontrolle:** sin 45° = 6 / Hypotenuse → Hypotenuse = 6 / sin 45° = 6 / (√2/2) = 6√2 ≈ 8,49 cm.
Probe: 6² + 6² = 72 = (6√2)² ✓

---

## Der Einheitskreis

**Idee:** Der Einheitskreis hat den Radius r = 1 und den Mittelpunkt im Koordinatenursprung. Jeder Punkt P auf dem Kreis hat die Koordinaten P = (cos α, sin α), wobei α der Winkel zur positiven x-Achse ist (gegen den Uhrzeigersinn gemessen).

**Verfahren:** Zeichne den Einheitskreis (r = 1). Der Winkel α wird vom positiven x-Achsenabschnitt gegen den Uhrzeigersinn gemessen. Die x-Koordinate des Punktes auf dem Kreis ist cos α, die y-Koordinate ist sin α.

Daraus folgt direkt:
- cos α liegt immer zwischen −1 und +1
- sin α liegt immer zwischen −1 und +1
- Am Einheitskreis gilt: x² + y² = r² = 1 → **sin²α + cos²α = 1**

**Vorzeichen in den Quadranten:**
- I. Quadrant (0°–90°): sin > 0, cos > 0 → tan > 0
- II. Quadrant (90°–180°): sin > 0, cos < 0 → tan < 0
- III. Quadrant (180°–270°): sin < 0, cos < 0 → tan > 0
- IV. Quadrant (270°–360°): sin < 0, cos > 0 → tan < 0

> **Merke:** Am Einheitskreis ist die x-Koordinate = cos α und die y-Koordinate = sin α. Daraus folgt der trigonometrische Pythagoras: sin²α + cos²α = 1 — diese Identität gilt für JEDEN Winkel α.

---

## Bogenmaß vs. Gradmaß

**Idee:** Das Bogenmaß (Radiant, rad) misst Winkel über die Bogenlänge auf dem Einheitskreis. Ein voller Kreis = Umfang 2π → **360° = 2π rad**.

**Umrechnungsformeln:**
- Grad → Bogenmaß: **α(rad) = α(°) × π / 180**
- Bogenmaß → Grad: **α(°) = α(rad) × 180 / π**

**Wichtige Umrechnungen:**

| Grad | Bogenmaß |
|------|----------|
| 0° | 0 |
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

**Rechenbeispiel:** 120° in Bogenmaß: 120 × π/180 = 2π/3 rad.
Rückrechnung: 2π/3 × 180/π = 120° ✓

> **Merke:** 360° = 2π rad; 180° = π rad; 90° = π/2 rad. Umrechnung: Grad × π/180 = Bogenmaß; Bogenmaß × 180/π = Grad. In der Physik wird fast immer das Bogenmaß verwendet.

---

## Wichtige Werte — Merktabelle

Die Werte für die fünf Standard-Winkel solltest du auswendig kennen:

| Winkel α | sin α | cos α | tan α |
|----------|-------|-------|-------|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 ≈ 0,866 | 1/√3 ≈ 0,577 |
| 45° | √2/2 ≈ 0,707 | √2/2 ≈ 0,707 | 1 |
| 60° | √3/2 ≈ 0,866 | 1/2 | √3 ≈ 1,732 |
| 90° | 1 | 0 | nicht definiert |

**Merkschema für Sinus:** Die Zähler von sin lauten: √0/2, √1/2, √2/2, √3/2, √4/2 = 0, 1/2, √2/2, √3/2, 1. Für Kosinus: dieselbe Folge rückwärts.

**Rechenbeispiel:** Bestätige sin 60° = √3/2 über ein rechtwinkliges Dreieck mit 30°-60°-90°: Seitenverhältnisse 1 : √3 : 2 (kurze Kathete : lange Kathete : Hypotenuse). sin 60° = lange Kathete / Hypotenuse = √3/2 ✓

> **Merke:** 30-60-90-Dreieck: Seiten im Verhältnis 1 : √3 : 2. 45-45-90-Dreieck: Seiten im Verhältnis 1 : 1 : √2. Diese beiden Spezial-Dreiecke liefern alle wichtigen Werte für sin, cos, tan.

---

## Trigonometrischer Pythagoras und Identitäten

**sin²α + cos²α = 1** — gilt für alle Winkel α.

Daraus abgeleitet:
- sin²α = 1 − cos²α
- cos²α = 1 − sin²α
- 1 + tan²α = 1/cos²α (durch Division mit cos²α)

**Rechenbeispiel:** Gegeben: sin α = 3/5. Bestimme cos α (für α im I. Quadranten).
cos²α = 1 − sin²α = 1 − 9/25 = 16/25 → cos α = 4/5.
Dann: tan α = sin α / cos α = (3/5) / (4/5) = 3/4.

**Probe:** sin²α + cos²α = (3/5)² + (4/5)² = 9/25 + 16/25 = 25/25 = 1 ✓. Außerdem: Gegenkathete = 3, Ankathete = 4, Hypotenuse = 5 — das klassische 3-4-5-Dreieck.

---

## Medizinische Anwendung: Kräftezerlegung

**Idee:** In der Orthopädie und Biomechanik wird eine Kraft F häufig in zwei senkrechte Komponenten zerlegt: eine Komponente entlang der Knochenachse und eine senkrecht dazu.

**Verfahren:** Wenn die Kraft F unter dem Winkel α zur Bezugsrichtung wirkt:
- Komponente parallel: F_parallel = F × cos α
- Komponente senkrecht: F_senkrecht = F × sin α

**Rechenbeispiel:** Ein Muskel übt eine Kraft von F = 500 N unter einem Winkel von α = 30° zur Knochenachse aus.
F_parallel = 500 × cos 30° = 500 × 0,866 = **433 N** (Zugkraft entlang des Knochens)
F_senkrecht = 500 × sin 30° = 500 × 0,5 = **250 N** (Kompressionskraft senkrecht zum Knochen)

Probe: √(433² + 250²) = √(187489 + 62500) = √249989 ≈ 500 N ✓

**Drehmoment** (Kraft mal Hebelarm)**:** M = r × F × sin θ, wobei θ der Winkel zwischen Hebelarm und Kraftvektor ist. Bei senkrechtem Angriff (θ = 90°): sin 90° = 1 → M = r × F.`,
      merksätze: [
        "SOH-CAH-TOA: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete.",
        "Trigonometrischer Pythagoras: sin²α + cos²α = 1 — gilt für JEDEN Winkel.",
        "360° = 2π rad; Grad → Bogenmaß: × π/180; Bogenmaß → Grad: × 180/π.",
        "30-60-90-Dreieck: Seiten 1 : √3 : 2. 45-45-90-Dreieck: Seiten 1 : 1 : √2.",
        "Kräftezerlegung: F_parallel = F × cos α; F_senkrecht = F × sin α.",
      ],
      klinischerBezug:
        "Kräftezerlegung in der Orthopädie (Muskelzug am Knochen); Drehmoment an Gelenken (M = r × F × sin θ); EKG-Herzachse als Vektorwinkel; Strahlentherapie-Winkelplanung; Optik (Brechungsgesetz: n₁ sin θ₁ = n₂ sin θ₂).",
      selfTest: [
        {
          question:
            "Ein rechtwinkliges Dreieck hat eine Hypotenuse von 13 cm und eine Gegenkathete von 5 cm. Wie groß ist sin α?",
          options: ["5/12", "5/13", "12/13", "13/5", "12/5"],
          correctIndex: 1,
          explanation:
            "sin α = Gegenkathete / Hypotenuse = 5/13. Die Ankathete ergibt sich aus dem Satz des Pythagoras: √(13² − 5²) = √(169 − 25) = √144 = 12 cm. Also: sin α = 5/13, cos α = 12/13, tan α = 5/12. Das 5-12-13-Dreieck ist ein pythagoreisches Tripel (5² + 12² = 25 + 144 = 169 = 13²).",
          hints: ["sin α = Gegenkathete / Hypotenuse.", "Gegenkathete = 5 cm, Hypotenuse = 13 cm."],
          tags: ["sinus", "rechtwinkliges-dreieck", "soh-cah-toa"],
          difficulty: 1,
        },
        {
          question: "Wie viel Bogenmaß entsprechen 150°?",
          options: ["π/3", "2π/3", "3π/4", "5π/6", "5π/4"],
          correctIndex: 3,
          explanation:
            "Umrechnung: 150° × π/180 = 150π/180 = 5π/6. Zur Kontrolle: 5π/6 × 180/π = 5 × 180/6 = 5 × 30 = 150° ✓. Merkhilfe: 150° = 180° − 30° = π − π/6 = 5π/6. Alternativ: 30° = π/6, also 150° = 5 × 30° = 5 × π/6 = 5π/6.",
          hints: [
            "Formel: Grad × π/180 = Bogenmaß.",
            "150 × π / 180 vereinfachen: kürze durch 30.",
          ],
          tags: ["bogenmass", "gradmass", "umrechnung"],
          difficulty: 1,
        },
        {
          question: "Gegeben: sin α = 0,6 und α liegt im I. Quadranten. Wie groß ist cos α?",
          options: ["0,4", "0,5", "0,6", "0,8", "1,0"],
          correctIndex: 3,
          explanation:
            "Trigonometrischer Pythagoras: sin²α + cos²α = 1. Also cos²α = 1 − sin²α = 1 − 0,36 = 0,64. cos α = √0,64 = 0,8. (Positiv, da I. Quadrant.) Probe: 0,6² + 0,8² = 0,36 + 0,64 = 1 ✓. Das entspricht einem 3-4-5-Dreieck (sin = 3/5 = 0,6; cos = 4/5 = 0,8).",
          hints: ["Nutze sin²α + cos²α = 1.", "cos²α = 1 − 0,6² = 1 − 0,36 = ?"],
          tags: ["trigonometrischer-pythagoras", "sinus", "kosinus"],
          difficulty: 2,
        },
        {
          question:
            "Eine Kraft F = 200 N wirkt unter α = 60° zur Horizontalen. Wie groß ist die horizontale Komponente F_x?",
          options: ["100 N", "141 N", "173 N", "200 N", "50 N"],
          correctIndex: 0,
          explanation:
            "Die horizontale Komponente berechnet sich als F_x = F × cos α = 200 N × cos 60° = 200 × 0,5 = 100 N. Die vertikale Komponente wäre F_y = F × sin 60° = 200 × √3/2 ≈ 173 N. Probe: √(100² + 173²) = √(10000 + 29929) = √39929 ≈ 200 N ✓. Bei 60° zur Horizontalen ist die vertikale Komponente größer als die horizontale.",
          hints: ["Horizontale Komponente = F × cos α.", "cos 60° = 1/2 = 0,5."],
          tags: ["kraeftezerlegung", "kosinus", "biomechanik"],
          difficulty: 2,
        },
        {
          question: "Welcher Wert von tan α ist NICHT definiert?",
          options: [
            "tan 0° = 0",
            "tan 30° = 1/√3",
            "tan 45° = 1",
            "tan 60° = √3",
            "tan 90° — nicht definiert",
          ],
          correctIndex: 4,
          explanation:
            "tan α = sin α / cos α. Bei α = 90° gilt cos 90° = 0, daher ist die Division durch null nicht definiert. Geometrisch: Bei 90° ist die Ankathete gleich null, und Gegenkathete/Ankathete = Gegenkathete/0 ist undefiniert. Am Einheitskreis nähert sich tan α für α → 90° dem Wert +∞ (von links). Analog ist tan 270° nicht definiert. Alle anderen Werte in den Optionen sind korrekt: tan 0° = 0/1 = 0; tan 30° = (1/2)/(√3/2) = 1/√3; tan 45° = (√2/2)/(√2/2) = 1; tan 60° = (√3/2)/(1/2) = √3.",
          hints: [
            "tan α = sin α / cos α — wann wird der Nenner null?",
            "cos 90° = 0, also Division durch null.",
          ],
          tags: ["tangens", "definition", "einheitskreis"],
          difficulty: 1,
        },
      ],
      diagram: "unit-circle",
    },

    // === from kap3-geometrie ===
    // ──────────────────────────────────────────────────────────────
    // UK ma-3-01  Ebene Figuren — Flächen und Umfang
    // ──────────────────────────────────────────────────────────────
    {
      id: "ma-3-01",
      title: "Ebene Figuren — Flächen und Umfang",
      stichworte: [
        "Rechteck",
        "Dreieck",
        "Kreisfläche",
        "Kreisumfang",
        "Trapez",
        "Parallelogramm",
        "Heronsche Formel",
        "Kreissektor",
        "Kreisring",
        "Raute",
        "Ähnlichkeit",
        "Skalierungsfaktor",
        "Körperoberfläche",
        "DuBois-Formel",
        "Neuner-Regel",
      ],
      content: `Ebene Figuren (Flächen in einer Ebene) begegnen dir in der Medizin überall: Die Aortenklappenöffnungsfläche entscheidet über eine OP-Indikation, die Körperoberfläche (KOF) bestimmt die Zytostatika-Dosis, und die Neuner-Regel bei Verbrennungen basiert auf geometrischen Flächenanteilen. Im MedAT werden Flächen- und Umfangsformeln regelmäßig abgefragt — oft in Kombination mit klinischen Szenarien.

---

{{DIAGRAM:geometric-shapes}}

## 1. Rechteck und Quadrat — der einfachste Baustein

Das Rechteck ist die Grundform: Länge l und Breite b spannen eine Fläche auf.

- Fläche: **A = l × b**
- Umfang: **U = 2 × (l + b)**
- Diagonale: **d = √(l² + b²)** (Satz des Pythagoras)

Das **Quadrat** ist der Sonderfall l = b = a: A = a², U = 4a, d = a√2.

**Rechenbeispiel:** Ein Operationsfeld wird als Rechteck 8 cm × 5 cm markiert. Fläche: A = 8 × 5 = 40 cm². Umfang: U = 2 × (8 + 5) = 26 cm. Diagonale: d = √(64 + 25) = √89 ≈ 9,4 cm.

> **Merke:** Bei Flächen steht immer eine quadratische Einheit (cm², m²). Wer „40 cm" statt „40 cm²" schreibt, verwechselt Umfang und Fläche — ein klassischer MedAT-Fehler.

---

## 2. Dreieck — die halbe Rechteckfläche

Jedes Dreieck lässt sich als halbes Rechteck verstehen: Zeichne um ein Dreieck ein Rechteck mit der Grundlinie g als Breite und der Höhe h als Länge — das Dreieck nimmt genau die Hälfte der Fläche ein.

**A = ½ × g × h**

Für das **rechtwinklige Dreieck** mit Katheten a und b: A = ½ × a × b (die Katheten sind Grundlinie und Höhe).

**Winkelsumme:** In jedem Dreieck beträgt die Summe der Innenwinkel **180°**. Im rechtwinkligen Dreieck gilt zusätzlich der Satz des Pythagoras: a² + b² = c² (c = Hypotenuse).

**Spezialfälle:**
- Gleichseitiges Dreieck (alle Seiten a): A = (√3/4) × a², Höhe h = (√3/2) × a
- Gleichschenkliges Dreieck (Basis b, Schenkel a): h = √(a² − (b/2)²)

### Die Heronsche Formel — Fläche nur aus Seitenlängen

Wenn keine Höhe bekannt ist, aber alle drei Seiten a, b, c:

1. Halbumfang berechnen: **s = (a + b + c) / 2**
2. Fläche: **A = √(s × (s − a) × (s − b) × (s − c))**

**Rechenbeispiel:** Dreieck mit a = 7, b = 8, c = 9 cm. s = (7+8+9)/2 = 12. A = √(12 × 5 × 4 × 3) = √720 = 12√5 ≈ 26,8 cm².

**Rechenbeispiel — Dreieck vs. Rechteck (MedAT-typisch):** Ein Dreieck mit g = 5 cm und h = 8 cm hat A = (5 × 8)/2 = **20 cm²**. Hat dieses Dreieck ein Drittel der Fläche eines Rechtecks mit Breite 5 cm, so ist die Rechteckfläche 3 × 20 = **60 cm²**, also Länge = 60/5 = **12 cm**.

> **Merke:** Dreiecksfläche = halbe Rechteckfläche (½ × g × h). Die Heronsche Formel ist der Rettungsanker, wenn nur die drei Seiten gegeben sind.

---

## 3. Kreis, Kreissektor und Kreisring

Beim Kreis mit Radius r:

- Fläche: **A = π × r²**
- Umfang: **U = 2 × π × r**
- Durchmesser: d = 2r, also auch A = π × d²/4

**Kreissektor** (Kreisausschnitt, „Tortenstück") mit Mittelpunktswinkel α:
- Sektorfläche: **A = r² × α / 2** (α in Radiant)
- Bogenlänge: **b = r × α** (α in Radiant)
- Umrechnung: α [Grad] → α [rad] = α × π/180. Vollkreis = 360° = 2π rad.

**Kreisring** (Ringfläche zwischen zwei konzentrischen Kreisen, Radien R > r):
**A = π × (R² − r²)**

> **Merke:** Verdopplung des Radius vervierfacht die Fläche (r² → (2r)² = 4r²), verdoppelt aber nur den Umfang. Diese quadratische Skalierung ist ein häufiger Stolperstein im MedAT.

**Rechenbeispiel — Kreisring (Gefäßwand):** Arterie mit Außenradius R = 3 mm, Innenradius r = 2 mm. Gefäßwand-Querschnitt: A = π × (9 − 4) = 5π ≈ 15,7 mm². Lumen: A = π × 4 ≈ 12,6 mm². Wandanteil: 15,7/(15,7 + 12,6) ≈ 55 %.

**Rechenbeispiel — Aortenklappe:** Gesunde Klappe: d = 2,5 cm → A = π × 1,25² ≈ **4,9 cm²**. Schwere Stenose: A = 0,8 cm² — nur noch **16 %** der Normalfläche. OP-Indikation bei A < 1,0 cm².

---

## 4. Weitere Vierecke

### Parallelogramm
Grundseite g, senkrechte Höhe h (nicht die Schrägseite!):
**A = g × h**, Umfang U = 2 × (a + b)

Braucht man die Höhe aus einem Winkel, hilft sin (siehe Kapitel ma-2-05 Trigonometrie): h = b × sin(α).

### Trapez
Parallele Seiten a und c, Höhe h:
**A = ½ × (a + c) × h** — entspricht einem Rechteck mit der mittleren Breite (a + c)/2.

### Raute (Rhombus) und Drachen
Beide haben senkrechte Diagonalen d₁ und d₂:
**A = ½ × d₁ × d₂**

Die Raute ist ein Spezialfall des Parallelogramms mit vier gleich langen Seiten.

> **Merke:** Beim Parallelogramm ist h die senkrechte Höhe, nicht die Schrägseite — das ist der häufigste Fehler. Die Trapezformel nutzt den Mittelwert der Parallelseiten.

---

## 5. Ähnlichkeit und Skalierung

Zwei Figuren sind **ähnlich**, wenn alle Winkel gleich und alle Seiten im gleichen Verhältnis k stehen.

- Längen skalieren mit **k**
- Flächen skalieren mit **k²**
- (Volumina bei Körpern mit **k³**)

**Rechenbeispiel — Tumorwachstum:** Ein Tumor hat im MRT im Januar d = 2 cm (A₁ = π × 1² ≈ 3,14 cm²), im Juni d = 3 cm (A₂ = π × 1,5² ≈ 7,07 cm²). Skalierungsfaktor k = 1,5. Flächenzunahme: k² = 2,25 — die Querschnittsfläche hat sich um **125 %** vergrößert, obwohl der Durchmesser nur um 50 % gewachsen ist.

> **Merke:** Flächen skalieren mit k², nicht mit k. Doppelte Größe (k = 2) = vierfache Fläche. Das gilt für MRT-Bilder, Organquerschnitte und Wunden gleichermaßen.

---

## 6. Zusammengesetzte Flächen

Viele MedAT-Aufgaben kombinieren einfache Figuren:
- **Zerlegung:** Komplexe Form in Rechtecke, Dreiecke, Kreisausschnitte zerlegen und aufsummieren
- **Subtraktion:** Von einer größeren Fläche eine kleinere abziehen (z. B. Kreisring = großer Kreis − kleiner Kreis)
- **Wundflächen:** Irreguläre Wunden werden durch Rechtecke oder Dreiecke angenähert

---

## 7. Klinische Anwendungen

### Körperoberfläche (KOF)
Die KOF bestimmt die Dosierung von Zytostatika und Immunsuppressiva.

- **DuBois-Formel:** KOF = 0,007184 × Gewicht^0,425 × Größe^0,725 (Gewicht in kg, Größe in cm, KOF in m²)
- **Mosteller (vereinfacht):** KOF = √(Gewicht × Größe / 3600)

Für 70 kg, 175 cm: KOF = √(70 × 175 / 3600) = √3,403 ≈ **1,84 m²**.

### Neuner-Regel nach Wallace
Teilt den Körper in Flächenanteile von je ~9 % KOF: Kopf 9 %, jeder Arm 9 %, Brust 9 %, Bauch 9 %, Rücken 18 %, jedes Bein 18 %, Genitale 1 %. Damit wird der Anteil verbrannter Körperoberfläche (VKOF) rasch abgeschätzt.

**Rechenbeispiel — Verbrennungsfläche:** Kreisförmige Verbrennung mit d = 12 cm: A = π × 6² = 36π ≈ **113 cm² ≈ 0,011 m²**. Bei KOF = 1,8 m²: Anteil = 0,011/1,8 × 100 ≈ **0,6 % der KOF**.

**Rechenbeispiel — Hauttransplantat (Heron):** Dreiseitige Wunde mit a = 5, b = 7, c = 8 cm. s = 10. A = √(10 × 5 × 3 × 2) = √300 ≈ **17,3 cm²**. Mit 10 % Zuschlag: **19 cm²** Transplantatfläche.

---

## Häufige Fallen im MedAT

- **Einheiten vergessen:** Fläche immer in Quadrateinheiten (cm², m²), nicht in cm oder m
- **π-Rundungsfehler:** π ≈ 3,14 genügt meist; bei π² ≈ 9,87 nicht 3,14 × 3,14 = 9,86 verwechseln
- **Umfang ≠ Fläche:** Zwei Figuren können gleichen Umfang, aber sehr verschiedene Flächen haben
- **Parallelogramm-Höhe:** Immer die senkrechte Höhe verwenden, nicht die Schrägseite
- **Radius vs. Durchmesser:** In der Kreisformel steht r, nicht d — häufig wird d/2 vergessen

---

## Formelübersicht

| Figur | Fläche A | Umfang U |
|---|---|---|
| Rechteck | l × b | 2(l + b) |
| Quadrat | a² | 4a |
| Dreieck | ½ × g × h | a + b + c |
| Kreis | π × r² | 2πr |
| Parallelogramm | g × h | 2(a + b) |
| Trapez | ½(a + c) × h | a + b + c + d |
| Raute/Drachen | ½ × d₁ × d₂ | 4a (Raute) |
| Kreissektor | r²α/2 (α in rad) | 2r + rα |
| Kreisring | π(R² − r²) | — |`,
      lernziele: [
        "Flächen und Umfänge von Rechteck, Dreieck, Kreis, Trapez und Parallelogramm korrekt berechnen.",
        "Die Heronsche Formel auf Dreiecke mit bekannten Seitenlängen anwenden.",
        "Kreissektor-Fläche und Bogenlänge bei gegebenem Mittelpunktswinkel bestimmen.",
        "Den Ähnlichkeitsfaktor k und seinen Einfluss auf Längen (k) und Flächen (k²) erklären.",
        "Klinische Anwendungen (KOF, Neuner-Regel, Aortenklappenöffnungsfläche) mit Flächenformeln verknüpfen.",
      ],
      sections: [
        {
          heading: "Grundformeln ebener Figuren",
          text: `Die wichtigsten Figuren und ihre Formeln im Überblick:

| Figur | Fläche A | Umfang U |
|---|---|---|
| Rechteck | l × b | 2(l + b) |
| Quadrat | a² | 4a |
| Dreieck | ½ × g × h | a + b + c |
| Kreis | π × r² | 2πr |
| Parallelogramm | g × h | 2(a + b) |
| Trapez | ½(a + c) × h | a + b + c + d |
| Raute/Drachen | ½ × d₁ × d₂ | 4a (Raute) |
| Kreissektor | r²α/2 (α rad) | 2r + rα |

Merkhilfe Kreis: Fläche „πr²" (quadratisch → wächst schnell), Umfang „2πr" (linear → wächst langsam).`,
          merksatz:
            "Fläche hat immer Quadrateinheiten (cm², m²). Verdopplung des Radius vervierfacht die Kreisfläche, verdoppelt aber nur den Umfang.",
        },
        {
          heading: "Ähnlichkeit und Skalierung",
          text: `Ähnliche Figuren haben gleiche Winkel und proportionale Seiten (Faktor k).

- Längen: k-fach
- Flächen: k²-fach
- Volumina: k³-fach

Beispiel: Ein Rechteck 3 × 4 cm (A = 12 cm²) mit k = 3 vergrößert → 9 × 12 cm (A = 108 cm² = 12 × 3² = 12 × 9).

Klinisch: Wächst ein Tumor-Durchmesser um 50 % (k = 1,5), steigt die Querschnittsfläche um 125 % (k² = 2,25).`,
          merksatz:
            "Flächen skalieren mit k², Längen mit k — wird ein Organ doppelt so groß (k = 2), vervierfacht sich seine Querschnittsfläche.",
        },
        {
          heading: "Klinische Anwendungen",
          text: `Die **Körperoberfläche** (KOF, ca. 1,7–1,9 m² bei Erwachsenen) bestimmt die Dosierung von Zytostatika und Immunsuppressiva. Die Mosteller-Formel liefert schnell: KOF = √(kg × cm / 3600).

Die **Neuner-Regel** (Kopf 9 %, Arm je 9 %, Brust/Bauch je 9 %, Rücken 18 %, Bein je 18 %, Genitale 1 %) ermöglicht die rasche Abschätzung verbrannter Körperoberfläche.

Die **Aortenklappenöffnungsfläche** (normal ~3–4 cm²) wird per Echokardiografie als Kreisfläche berechnet — eine schwere Stenose liegt bei A < 1,0 cm² vor.`,
          merksatz:
            "Zytostatika-Dosis = Dosierung [mg/m²] × KOF [m²]. KOF-Abweichungen ändern die Gesamtdosis erheblich.",
        },
      ],
      merksätze: [
        "Fläche = Quadrateinheiten (cm², m²); Umfang = lineare Einheiten (cm, m) — niemals verwechseln.",
        "Dreieck = halbes Rechteck: A = ½ × g × h. Heron-Formel als Rettungsanker, wenn nur drei Seiten bekannt.",
        "Kreis: A = πr², U = 2πr. Verdopplung von r → vierfache Fläche, doppelter Umfang.",
        "Ähnlichkeit: Längen × k, Flächen × k², Volumina × k³.",
        "Parallelogramm: A = g × h — h ist die senkrechte Höhe, nicht die Schrägseite.",
        "KOF (Mosteller): √(kg × cm / 3600) ≈ 1,7–1,9 m² bei Erwachsenen.",
      ],
      altfrage: {
        question:
          "Ein Dreieck hat die Seitenlängen a = 5 cm, b = 7 cm und c = 8 cm. Berechnen Sie die Fläche des Dreiecks mithilfe der Heronschen Formel.",
        answer:
          "Zuerst wird der Halbumfang s bestimmt: s = (a + b + c) / 2 = (5 + 7 + 8) / 2 = 20 / 2 = 10 cm. Dann werden die Differenzen berechnet: s − a = 10 − 5 = 5 cm, s − b = 10 − 7 = 3 cm, s − c = 10 − 8 = 2 cm. Die Heronsche Formel lautet: A = √(s × (s−a) × (s−b) × (s−c)) = √(10 × 5 × 3 × 2) = √300. Da 300 = 100 × 3, ergibt sich A = 10 × √3 ≈ 10 × 1,732 ≈ 17,32 cm².",
      },
      klinischerBezug:
        "KOF-basierte Chemotherapie-Dosierung (DuBois/Mosteller); Neuner-Regel bei Verbrennungen; Aortenklappenöffnungsfläche als OP-Kriterium; Wundflächenbestimmung für Hauttransplantate.",
      selfTest: [
        {
          question:
            "Ein Trapez hat die parallelen Seiten a = 6 cm und c = 10 cm sowie eine Höhe h = 4 cm. Wie groß ist seine Fläche?",
          options: ["32 cm²", "40 cm²", "48 cm²", "24 cm²", "64 cm²"],
          correctIndex: 0,
          explanation:
            "Trapezfläche: A = ½ × (a + c) × h = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32 cm². Die Formel nutzt den Mittelwert der parallelen Seiten (hier 8 cm) × Höhe. Wichtig: h ist die senkrechte Höhe zwischen den Parallelseiten, nicht die Schrägseite.",
          hints: [
            "Die Trapezformel verwendet den Mittelwert der beiden parallelen Seiten.",
            "A = ½ × (Summe der parallelen Seiten) × Höhe.",
          ],
          tags: ["trapez", "fläche", "geometrie"],
          difficulty: 1,
        },
        {
          question:
            "Ein Kreissektor hat einen Radius von 8 cm und einen Mittelpunktswinkel von 45°. Wie lang ist die Bogenlänge? (π ≈ 3,14)",
          options: ["3,14 cm", "6,28 cm", "12,56 cm", "25,12 cm", "4,71 cm"],
          correctIndex: 1,
          explanation:
            "45° ist genau 1/8 des Vollkreises (360°/45° = 8). Gesamtumfang: 2πr = 2 × 3,14 × 8 = 50,24 cm. Ein Achtel: 50,24/8 = 6,28 cm. Alternativ: α = 45° × π/180 = π/4 ≈ 0,785 rad; b = r × α = 8 × 0,785 ≈ 6,28 cm.",
          hints: [
            "45° ist genau ein Achtel des Vollkreises (360° / 45° = 8).",
            "Bogenlänge = Anteil des Vollkreisumfangs entsprechend dem Winkelanteil.",
          ],
          tags: ["kreissektor", "bogenlänge", "kreisgeometrie"],
          difficulty: 2,
        },
        {
          question:
            "Zwei ähnliche Dreiecke haben einen Ähnlichkeitsfaktor k = 4. Das kleinere Dreieck hat eine Fläche von 6 cm². Wie groß ist die Fläche des größeren Dreiecks?",
          options: ["24 cm²", "48 cm²", "96 cm²", "192 cm²", "36 cm²"],
          correctIndex: 2,
          explanation:
            "Flächen skalieren mit k²: A_groß = A_klein × k² = 6 × 4² = 6 × 16 = 96 cm². Achtung: Nicht mit k multiplizieren (das wäre nur 24 cm²), sondern mit k². Klinisch: Wenn ein Organ-Querschnitt im MRT vierfach skaliert wird, ist die Fläche 16-fach größer.",
          hints: [
            "Flächen skalieren mit k², nicht mit k.",
            "k = 4 bedeutet k² = 16 für die Fläche.",
          ],
          tags: ["ähnlichkeit", "skalierung", "flächenverhältnis"],
          difficulty: 2,
        },
        {
          question:
            "Ein gleichseitiges Dreieck hat eine Seitenlänge von 6 cm. Berechnen Sie mithilfe der Heronschen Formel die Fläche.",
          options: [
            "6√3 cm² ≈ 10,39 cm²",
            "9√3 cm² ≈ 15,59 cm²",
            "12√3 cm² ≈ 20,78 cm²",
            "18 cm²",
            "36 cm²",
          ],
          correctIndex: 1,
          explanation:
            "Heron: s = (6+6+6)/2 = 9. A = √(9 × 3 × 3 × 3) = √243 = √(81 × 3) = 9√3 ≈ 15,59 cm². Kontrolle: A = (√3/4) × 6² = (√3/4) × 36 = 9√3. Beide Wege stimmen überein.",
          hints: [
            "Für Heron: s = (a+b+c)/2; alle drei Seiten sind gleich lang.",
            "A = √(s × (s−a)³) bei gleichseitigem Dreieck.",
          ],
          tags: ["heron", "dreieck", "fläche"],
          difficulty: 3,
        },
        {
          question:
            "Ein Patient (70 kg, 175 cm) hat eine KOF von 1,84 m². Ein Zytostatikum wird mit 50 mg/m² dosiert. Welche Gesamtdosis erhält der Patient?",
          options: ["50 mg", "70 mg", "92 mg", "175 mg", "84 mg"],
          correctIndex: 2,
          explanation:
            "Gesamtdosis = Dosierung × KOF = 50 mg/m² × 1,84 m² = 92 mg. Die KOF-basierte Dosierung ist klinisch wichtig, weil die Toxizität von Zytostatika eng mit der Körperoberfläche korreliert.",
          hints: ["Gesamtdosis = Dosierung × KOF (die KOF ist gegeben).", "50 mg/m² × 1,84 m² = ?"],
          tags: ["kof", "zytostatikum", "dosierung"],
          difficulty: 1,
        },
        {
          question:
            "Eine kreisförmige Verbrennung hat einen Durchmesser von 10 cm. Wie groß ist die verbrannte Fläche? (π ≈ 3,14)",
          options: ["31,4 cm²", "78,5 cm²", "314 cm²", "50 cm²", "100 cm²"],
          correctIndex: 1,
          explanation:
            "Durchmesser d = 10 cm → Radius r = 5 cm. A = π × r² = 3,14 × 25 = 78,5 cm². Häufiger Fehler: d statt r in die Formel einsetzen (ergibt 314 cm² — viermal zu viel).",
          hints: ["Erst den Radius berechnen: r = d/2.", "A = π × r², nicht π × d²."],
          tags: ["kreis", "fläche", "verbrennung"],
          difficulty: 1,
        },
      ],
      diagram: "geometric-shapes",
    },

    // ──────────────────────────────────────────────────────────────
    // UK ma-3-02  Körper — Volumen und Oberfläche
    // ──────────────────────────────────────────────────────────────
    {
      id: "ma-3-02",
      title: "Körper — Volumen und Oberfläche",
      stichworte: [
        "Quader",
        "Würfel",
        "Zylinder",
        "Kegel",
        "Kugel",
        "Ellipsoid",
        "Volumen",
        "Oberfläche",
        "Mantelfläche",
        "Hagen-Poiseuille",
        "Tumorvolummetrie",
        "Oberfläche-Volumen-Verhältnis",
      ],
      content: `**Idee:** Volumen V = „Rauminhalt", Oberfläche O = „Hüllfläche". **Quader:** V = a×b×c (nicht 2(ab+ac+bc) — das ist O!). **Kugel:** V = (4/3)πr³, O = 4πr². **Zylinder:** V = πr²h, Mantel = 2πrh. **O/V-Verhältnis** bei Kugel = 3/r (kleine Körper = großes O/V).

**Verfahren — Schrittfolge:** (1) **Quader/Würfel:** V = a×b×c, O = 2(ab+ac+bc); Würfel V = a³, O = 6a². (2) **Zylinder:** V = πr²h, O = 2πr²+2πrh. (3) **Kugel:** V = (4/3)πr³, O = 4πr². (4) **Kegel:** V = (1/3)πr²h. (5) **Ellipsoid:** V ≈ (4/3)πabc (Herz).

**Typische Prüfungsfehler:** Quader: V mit O verwechseln (V = a×b×c, nicht 2(ab+ac+bc)). Kugel: V = (4/3)πr³ (r³, nicht r²). O/V-Verhältnis Kugel = 3/r (nicht 4/r).

---

## Quader





Ein Quader mit Länge l, Breite b und Höhe h (bzw. Kanten a, b, c):
- **Volumen: V = l × b × h = a · b · c** (alle drei Kanten multiplizieren, nicht addieren!)

> **Merke:** **V(Quader) = a · b · c.** MedAT-Falle: Das Volumen ist **nicht** 2(a·b + a·c + b·c) (das ist die Oberfläche O), **nicht** (a+b+c)³ und **nicht** 2·a·b·c.
- **Oberfläche: O = 2 × (l×b + b×h + l×h)**
- **Raumdiagonale: d = √(l² + b² + h²)**

Der Würfel ist ein Sonderfall (l = b = h = a): V = a³, O = 6a², d = a × √3.

> **Merke:** Beim Würfel ist die Oberfläche 6 × die Fläche einer Seite (6a²). Die Raumdiagonale d = a × √3 ≈ 1,73a — sie ist länger als die Flächendiagonale (a × √2 ≈ 1,41a).

**Rechenbeispiel:** Eine Medikamentenschachtel misst 12 cm × 8 cm × 3 cm. Volumen: V = 12 × 8 × 3 = 288 cm³. Oberfläche: O = 2 × (96 + 24 + 36) = 2 × 156 = 312 cm². Raumdiagonale: d = √(144 + 64 + 9) = √217 ≈ 14,7 cm.

## Zylinder

Ein Zylinder mit Radius r und Höhe h:
- **Volumen: V = π × r² × h**
- **Mantelfläche: M = 2 × π × r × h** (abgewickelt ein Rechteck mit Breite 2πr und Höhe h)
- **Gesamtoberfläche: O = 2 × π × r × h + 2 × π × r² = 2πr(h + r)**

**Rechenbeispiel — Infusionsflasche:** Zylindrische Flasche mit r = 3 cm, h = 20 cm. V = π × 9 × 20 = 180π ≈ 565 cm³ ≈ 565 mL. Mantelfläche (Etikettengröße): M = 2π × 3 × 20 = 120π ≈ 377 cm².

**MedAT-typisch — Zylinder, Volumen konstant:** Ein zylinderförmiger Muskel (Länge l, Durchmesser d) verkürzt sich um 30 %, das Volumen bleibt konstant. Dann L' = 0,7·l. V = π·(d/2)²·l = π·(D/2)²·L' ⇒ (d/2)²·l = (D/2)²·0,7·l ⇒ D² = d²/0,7 ⇒ D = d/√0,7 ≈ 1,195·d. Der Durchmesser steigt um etwa **19,5 %** (nicht 54 %, 39 %, 82 % oder 83 % — typische MedAT-Falschantworten).

**MedAT-typisch:** Aus der Formel V = π × r² × h kann nach jeder Variablen aufgelöst werden: r = √(V/(πh)) oder h = V/(πr²). Beispiel: Welche Höhe muss ein Zylindergefäß (r = 2 cm) haben, um 250 mL = 250 cm³ zu fassen? h = 250/(π × 4) = 250/12,57 ≈ 19,9 cm.

## Kegel

Ein gerader Kreiskegel mit Grundkreisradius r, Höhe h und Mantellinie s (s = √(r² + h²)):
- **Volumen: V = ⅓ × π × r² × h**
- **Mantelfläche: M = π × r × s**
- **Gesamtoberfläche: O = π × r × s + π × r² = πr(s + r)**

> **Merke:** Das Kegelvolumen ist genau ein Drittel des Zylindervolumens mit gleichem Radius und gleicher Höhe. V_Kegel = ⅓ × V_Zylinder. Ebenso: V_Pyramide = ⅓ × V_Prisma.

**Rechenbeispiel:** Kegel mit r = 3 cm, h = 4 cm. Mantellinie: s = √(9+16) = √25 = 5 cm. Volumen: V = ⅓ × π × 9 × 4 = 12π ≈ 37,7 cm³. Mantelfläche: M = π × 3 × 5 = 15π ≈ 47,1 cm².

## Pyramide

Eine Pyramide mit Grundfläche A_G und Höhe h:
- **Volumen: V = ⅓ × A_G × h**

Für eine quadratische Pyramide mit Grundkante a: A_G = a², Mantelfläche: M = 2 × a × s_a (s_a = Seitenhöhe der Dreiecksfläche).

## Kugel

Eine Kugel mit Radius r:
- **Volumen: V = (4/3) × π × r³**
- **Oberfläche: O = 4 × π × r²**

Formaler Zusammenhang: Die Oberfläche O ist die Ableitung des Volumens nach r: dV/dr = 4πr² = O. Umgekehrt: V = Integral von 0 bis r über 4πt² dt = (4/3)πr³.

**Rechenbeispiel — Kugelvolumen einer Zyste:** Zyste mit Durchmesser d = 4 cm (r = 2 cm). V = (4/3) × π × 8 = 32π/3 ≈ 33,5 cm³ ≈ 33,5 mL. Oberfläche: O = 4π × 4 = 16π ≈ 50,3 cm².

**MedAT-typisch — Umkehraufgabe:** Kugelvolumen V = 904,32 cm³. Gesucht: r. Umstellen: r³ = 3V/(4π) = 3 × 904,32/(4 × 3,14) = 2712,96/12,56 = 216. r = Kubikwurzel aus 216 = 6 cm (da 6³ = 216).

## Ellipsoid (medizinisch wichtig)

Für Tumor-Volumetrie und Organvermessung wird häufig das Ellipsoid-Modell genutzt:
**V = (π / 6) × a × b × c ≈ 0,524 × a × b × c**
wobei a, b, c die drei orthogonalen Durchmesser sind (gemessen im Ultraschall oder MRT).

Das Ellipsoid kann auch als „gestauchte Kugel" verstanden werden: Sind alle drei Durchmesser gleich (a = b = c = d), ergibt sich V = (π/6) × d³ = (4/3) × π × (d/2)³ — die Kugelformel.

## Klinischer Kontext

**Harnblasenvolumen**: Im Ultraschall wird die Blase als Ellipsoid genähert: V ≈ 0,52 × a × b × c. Bei einer Restharnmessung von > 100 ml besteht klinischer Handlungsbedarf.

**Tumor-Volumetrie (RECIST)**: Tumoren werden im CT als Ellipsoide gemessen. Das Volumen V = π/6 × a × b × c dient zur Verlaufskontrolle unter Therapie. Progressive Disease: > 20% Volumenzunahme.

**Gefäßquerschnitt und Hagen-Poiseuille**: Der Querschnitt eines Gefäßes berechnet sich als A = π × r². Entscheidend ist das **Hagen-Poiseuille-Gesetz**: V̇ = (π × r⁴ × ΔP) / (8 × η × l). Der Volumenstrom V̇ ist proportional zu r⁴. Eine Halbierung des Radius reduziert den Fluss auf (½)⁴ = 1/16 — von direkter klinischer Relevanz bei Arteriosklerose und Stenosen.

**Kapazität von Körperhöhlen**: Perikard (normal ~ 15–50 ml), Pleurahöhle (< 10 ml physiologisch), Gelenkhöhlen — geometrische Abschätzungen helfen bei der Beurteilung von Ergüssen.

**Oberfläche-Volumen-Verhältnis**: O/V einer Kugel = 3/r. Je kleiner r, desto größer O/V — biologisch entscheidend für den Stoffaustausch (Alveolen: r ≈ 0,15 mm, Gesamtoberfläche ca. 70 m² bei nur 6 L Volumen).

## Rechenbeispiele

**Beispiel 1 — Tumor-Volumetrie (Ellipsoid):**
CT-Befund: Tumor 4,2 cm x 3,0 cm x 2,8 cm. V = (pi/6) × 4,2 × 3,0 × 2,8 = 0,524 × 35,28 = **18,5 cm³ = 18,5 mL**. Kontroll-CT nach 6 Monaten: 5,0 x 3,5 x 3,2 cm → V = 0,524 × 56 = **29,3 mL**. Volumenzunahme: (29,3 − 18,5)/18,5 = **58%** — deutliche Progression (RECIST: >20% = Progressive Disease).

**Beispiel 2 — Hagen-Poiseuille: 70%-Stenose:**
Normale Koronararterie r = 2 mm. Nach 70%-Stenose: r_sten = 0,30 × 2 = 0,6 mm. Flussreduktion: (0,6/2) hoch 4 = (0,3) hoch 4 = **0,0081 = 0,81%** des Normalflusses. Klinisch: Ruhedurchblutung reicht bei >80% Stenose nicht mehr aus → Angina pectoris, Indikation zur PCI.

**Beispiel 3 — Harnblasenvolumen (Restharn):**
Ultraschallmessung: a = 8 cm, b = 6 cm, c = 5 cm. V = 0,52 × 8 × 6 × 5 = 0,52 × 240 = **125 mL**. Grenzwert Restharn: > 100 mL → **pathologisch**, Abklärung (BPH, neurogene Blasenentleerungsstörung). Therapeutischer Normwert: < 50 mL.

**Beispiel 4 — Zylinder vs. Kugel (Kapselvolumen):**
Zylindrische Kapsel: r = 0,4 cm, h = 1,5 cm. V_Zyl = π × 0,16 × 1,5 = 0,24π ≈ 0,75 cm³ = **0,75 mL**. Kugelförmiges Granulat: r = 0,5 cm. V_Kugel = (4/3) × π × 0,125 = 0,524 cm³ ≈ **0,52 mL**. Die Kapselform fasst 44% mehr Volumen als die Kugel bei ähnlichen Abmessungen.`,
      lernziele: [
        "Volumen und Oberfläche von Quader, Zylinder, Kegel und Kugel nach Formel berechnen.",
        "Die Ellipsoid-Näherungsformel für die medizinische Volumetrie korrekt anwenden.",
        "Den Zusammenhang zwischen Gefäßradius und Volumenstrom (Hagen-Poiseuille, r⁴-Abhängigkeit) erklären.",
        "Klinische Messgrößen (Harnblasenvolumen, Tumorvolumen) geometrisch einordnen.",
        "Mantelfläche und Gesamtoberfläche von Zylinder und Kegel unterscheiden und berechnen.",
      ],
      sections: [
        {
          heading: "Formeln im Überblick",
          text: `| Körper    | Volumen V              | Oberfläche O               |
|-----------|------------------------|----------------------------|
| Quader    | l × b × h              | 2(lb + bh + lh)            |
| Würfel    | a³                     | 6a²                        |
| Zylinder  | π × r² × h             | 2πr(r + h)                 |
| Kegel     | ⅓ × π × r² × h         | πr(r + s), s = √(r²+h²)   |
| Kugel     | (4/3) × π × r³         | 4 × π × r²                 |
| Ellipsoid | (π/6) × a × b × c      | (Näherung für Organe)      |

Merkhilfe Kugel: „Vier-Drittel-Pi-r-hoch-drei" für das Volumen; die Oberfläche ist die Ableitung davon (d/dr von (4/3)πr³ = 4πr²).`,
          merksatz:
            "Kugelvolumen V = (4/3)πr³; Kugeloberfläche O = 4πr² — die Oberfläche ist die Ableitung des Volumens nach r (formaler Zusammenhang).",
        },
        {
          heading: "Hagen-Poiseuille und Gefäßgeometrie",
          text: `Das Hagen-Poiseuille-Gesetz beschreibt den laminaren Volumenstrom V̇ durch ein Rohr:
**V̇ = (π × r⁴ × ΔP) / (8 × η × l)**

r = Radius, ΔP = Druckdifferenz, η = dynamische Viskosität, l = Rohrlänge.

Die r⁴-Abhängigkeit ist klinisch entscheidend:
- Halbierung des Radius (z. B. durch Plaque) → Reduktion des Flusses auf (1/2)⁴ = 1/16
- Verdoppelung des Radius (z. B. nach Dilatation) → 16-facher Fluss

Beispiel: Eine Koronarstenose von 70 % (Radius auf 30 % des Normwertes) reduziert den Fluss auf 0,3⁴ = 0,0081, also auf weniger als 1 % des normalen Wertes.`,
          merksatz:
            "Hagen-Poiseuille: Volumenstrom ~ r⁴ — kleine Änderungen des Gefäßradius haben dramatische Auswirkungen auf den Blutfluss.",
        },
        {
          heading: "Oberflächenvolumen-Verhältnis in der Biologie",
          text: `Das Verhältnis von Oberfläche zu Volumen (O/V-Verhältnis) ist biologisch fundamental:
- Kugel: O/V = (4πr²) / ((4/3)πr³) = 3/r
- Je kleiner r, desto größer das O/V-Verhältnis

Kleine Zellen haben ein großes O/V-Verhältnis → effizienter Stoffaustausch.
Große Organismen müssen durch Faltungen (Darmzotten, Alveolen) ihre Oberfläche künstlich vergrößern.

Die **Lungenalveolen** haben einen Radius von ca. 0,1–0,2 mm; die Gesamtoberfläche der Lunge beträgt ~ 70–80 m² (entspricht einem Tennisplatz) bei einem Lungenvolumen von ~ 6 Litern.`,
          merksatz:
            "O/V-Verhältnis einer Kugel = 3/r — kleinere Strukturen tauschen Stoffe effizienter aus als größere.",
        },
      ],
      merksätze: [
        "Quader: V = l×b×h; O = 2×(lb + bh + lh).",
        "Zylinder: V = π×r²×h; O = 2πr×(r + h).",
        "Kegel: V = ⅓×π×r²×h; Mantellinie s = √(r² + h²); M = π×r×s.",
        "Kugel: V = (4/3)×π×r³; O = 4×π×r² — merke: O ist Ableitung von V nach r.",
        "Ellipsoid (Organe/Tumoren): V ≈ (π/6) × a × b × c ≈ 0,52 × a × b × c.",
        "Hagen-Poiseuille: V̇ ~ r⁴ — Halbierung des Radius reduziert Fluss auf 1/16.",
        "Gefäßquerschnitt: A = π×r²; Durchmesser d = 2r.",
        "O/V-Verhältnis der Kugel = 3/r — kleiner r bedeutet effizienteren Stoffaustausch.",
        "Harnblasenvolumen (US): V = 0,52×a×b×c; Restharn > 100 ml ist klinisch relevant.",
        "RECIST-Tumorvolumen: Ellipsoid-Näherung ermöglicht Verlaufskontrolle unter Therapie.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie, warum das Hagen-Poiseuille-Gesetz für das Verständnis von Gefäßstenosen klinisch von zentraler Bedeutung ist. Gehen Sie auf die mathematische r⁴-Abhängigkeit ein.",
        answer:
          "Das Hagen-Poiseuille-Gesetz beschreibt den laminaren Volumenstrom durch ein zylindrisches Rohr: V̇ = (π × r⁴ × ΔP) / (8 × η × l). Der Volumenstrom ist proportional zur vierten Potenz des Radius r. Diese r⁴-Abhängigkeit hat dramatische klinische Konsequenzen: Wird der Gefäßradius durch eine atherosklerotische Plaque halbiert, reduziert sich der Blutfluss auf (1/2)⁴ = 1/16 des Ausgangswertes — also auf etwa 6 % — bei gleichem Druckgradienten. Umgekehrt bedeutet eine Verdoppelung des Radius (z. B. nach PTCA) einen 16-fach erhöhten Fluss. In der klinischen Praxis wird die Stenose oft als prozentualer Durchmesserverlust angegeben. Eine hämodynamisch signifikante Stenose liegt üblicherweise bei > 50 % Lumenreduktion vor. Bei 70 % Stenose (Radius auf 30 % reduziert) fällt der Fluss auf 0,3⁴ ≈ 0,008, also unter 1 % des Normwerts. Dies erklärt, warum hochgradige Koronarstenosen zu Angina pectoris und Myokardinfarkt führen und warum eine Revaskularisierung (Stent, Bypass) den Fluss drastisch verbessert.",
      },
      klinischerBezug:
        "Tumorvolummetrie (Ellipsoid-Formel); Harnblasen-Restharn (Ultraschall); Hagen-Poiseuille r⁴-Abhängigkeit bei Koronarstenosen und Arteriosklerose.",
      selfTest: [
        {
          question:
            "Ein Zylinder hat einen Radius von 4 cm und eine Höhe von 10 cm. Wie groß ist seine Gesamtoberfläche? (π ≈ 3,14)",
          options: ["351,68 cm²", "175,84 cm²", "251,2 cm²", "452,16 cm²", "301,44 cm²"],
          correctIndex: 0,
          explanation:
            "Die Gesamtoberfläche eines Zylinders ist O = 2πr(r + h). Einsetzen: O = 2 × 3,14 × 4 × (4 + 10) = 2 × 3,14 × 4 × 14 = 8 × 3,14 × 14 = 25,12 × 14 = 351,68 cm². Diese setzt sich zusammen aus dem Mantel (2πrh = 2 × 3,14 × 4 × 10 = 251,2 cm²) und den beiden Kreisflächen (2 × π × r² = 2 × 3,14 × 16 = 100,48 cm²). Summe: 251,2 + 100,48 = 351,68 cm².",
          hints: [
            "Gesamtoberfläche = Mantelfläche + 2 × Grundkreisfläche.",
            "O = 2πr×h + 2×π×r² = 2πr(h + r).",
          ],
          tags: ["zylinder", "oberfläche", "körpergeometrie"],
          difficulty: 2,
        },
        {
          question:
            "Ein Tumor wird im CT als Ellipsoid mit den Durchmessern a = 3 cm, b = 4 cm, c = 5 cm vermessen. Wie groß ist das Tumorvolumen nach der Ellipsoid-Formel? (π ≈ 3,14)",
          options: ["31,4 cm³", "62,8 cm³", "94,2 cm³", "125,6 cm³", "188,4 cm³"],
          correctIndex: 0,
          explanation:
            "Das Ellipsoidvolumen berechnet sich nach V = (π/6) × a × b × c. Einsetzen: V = (3,14/6) × 3 × 4 × 5 = 0,5233 × 60 ≈ 31,4 cm³. Die Formel (π/6) ≈ 0,524 wird im klinischen Alltag auch als 0,52 × a × b × c vereinfacht. Bei a = 3, b = 4, c = 5: 0,52 × 60 = 31,2 cm³ (geringfügige Abweichung durch Näherung). Klinisch ist das RECIST-Kriterium (> 20 % Volumenzunahme = Progression) auf dieser Grundlage definiert.",
          hints: [
            "Ellipsoid-Formel: V = (π/6) × a × b × c ≈ 0,524 × a × b × c.",
            "Zuerst das Produkt a × b × c berechnen, dann mit π/6 multiplizieren.",
          ],
          tags: ["ellipsoid", "tumorvolumen", "ct"],
          difficulty: 2,
        },
        {
          question:
            "Der Radius einer Arterie wird durch eine Stenose auf die Hälfte reduziert. Auf welchen Bruchteil des ursprünglichen Wertes sinkt der Blutfluss (Hagen-Poiseuille)?",
          options: ["1/2", "1/4", "1/8", "1/16", "1/32"],
          correctIndex: 3,
          explanation:
            "Nach dem Hagen-Poiseuille-Gesetz gilt V̇ ~ r⁴. Bei Halbierung des Radius (r → r/2) ergibt sich: V̇_neu = (r/2)⁴ / r⁴ = r⁴/16 / r⁴ = 1/16. Der Fluss fällt also auf ein Sechzehntel des Originalwerts. Diese extreme r⁴-Abhängigkeit erklärt, warum schon moderate Stenosen (z. B. 50 % Durchmesserreduktion = Radius auf 50 % = 1/2) den Fluss dramatisch verringern. In der Klinik ist dies der Grund, warum hochgradige Stenosen revaskularisiert werden müssen.",
          hints: [
            "Hagen-Poiseuille: Fluss ~ r⁴.",
            "r wird halbiert → r⁴ wird (1/2)⁴ = 1/16 des ursprünglichen Wertes.",
          ],
          tags: ["hagen-poiseuille", "stenose", "blutfluss"],
          difficulty: 2,
        },
        {
          question:
            "Eine Kugel hat ein Volumen von 904,32 cm³. Wie groß ist ihr Radius? (π ≈ 3,14)",
          options: ["4 cm", "5 cm", "6 cm", "7 cm", "8 cm"],
          correctIndex: 2,
          explanation:
            "Das Kugelvolumen ist V = (4/3)×π×r³. Umgestellt: r³ = V × 3 / (4×π) = 904,32 × 3 / (4 × 3,14) = 2712,96 / 12,56 = 216. Also r = ∛216 = 6 cm (da 6³ = 216). Überprüfung: V = (4/3) × 3,14 × 216 = (4/3) × 678,24 = 904,32 cm². Korrekt. Bei Kugeln ist es oft praktisch, r³ direkt zu berechnen und dann die Kubikwurzel zu ziehen.",
          hints: [
            "V = (4/3)×π×r³ nach r³ auflösen: r³ = 3V / (4π).",
            "6³ = 216 — welche glatten Kubikzahlen kennst du?",
          ],
          tags: ["kugel", "volumen", "wurzel"],
          difficulty: 2,
        },
        {
          question:
            "Die Lunge eines Erwachsenen hat eine Gesamtoberfläche von ca. 70 m² bei einem Volumen von ca. 6 L = 0,006 m³. Welche dieser Aussagen erklärt am besten, warum diese große Oberfläche biologisch notwendig ist?",
          options: [
            "Eine große Oberfläche erhöht den Atemwegswiderstand und verlangsamt die Atmung.",
            "Eine große Oberfläche minimiert das Oberflächen-Volumen-Verhältnis und spart Energie.",
            "Eine große Oberfläche maximiert die Kontaktfläche für den O₂/CO₂-Gasaustausch zwischen Alveolen und Kapillaren.",
            "Eine große Oberfläche erhöht das Lungenvolumen proportional.",
            "Eine große Oberfläche ist notwendig, um den Blutdruck im Lungenkreislauf zu erhöhen.",
          ],
          correctIndex: 2,
          explanation:
            "Der Gasaustausch (O₂-Aufnahme, CO₂-Abgabe) findet durch Diffusion an der Alveolaroberfläche statt. Nach dem Fickschen Diffusionsgesetz ist der Diffusionsstrom proportional zur Austauschfläche. Die ~ 300 Millionen Alveolen erzeugen durch ihre kleine Größe (r ≈ 0,1–0,2 mm) ein extrem hohes O/V-Verhältnis (3/r ist bei kleinem r groß). Trotz nur 6 L Volumen entsteht so eine Austauschfläche von 70 m² — vergleichbar mit einem Tennisplatz. Dies ermöglicht den Sauerstofftransport von 250–300 mL O₂/min in Ruhe (bis zu 3–4 L/min unter Belastung). Option A ist falsch (große Oberfläche erhöht nicht den Widerstand). Option B ist falsch (die Oberfläche ist bewusst maximiert, nicht minimiert).",
          hints: [
            "Diffusionsstrom ist proportional zur Austauschfläche (Ficksches Gesetz).",
            "Kleine Alveolen haben ein großes Oberfläche-Volumen-Verhältnis (O/V = 3/r).",
          ],
          tags: ["lunge", "gasaustausch", "oberfläche-volumen"],
          difficulty: 3,
        },
      ],
    },

    // ──────────────────────────────────────────────────────────────
    // UK ma-3-03  Koordinatensystem und analytische Geometrie
    // ──────────────────────────────────────────────────────────────
    {
      id: "ma-3-03",
      title: "Koordinatensystem und analytische Geometrie",
      stichworte: [
        "Kartesisches Koordinatensystem",
        "Abstandsformel",
        "Mittelpunkt",
        "Geradengleichung",
        "Steigung",
        "Schnittpunkt",
        "Kreisgleichung",
        "Polarkoordinaten",
        "Regressionsgerade",
        "Bland-Altman-Plot",
        "Vierfelder-Tafel",
        "EKG-Herzachse",
      ],
      content: `**Idee:** Punkte durch (x,y) beschrieben; **Abstand** = Pythagoras: d = √((x₂−x₁)²+(y₂−y₁)²). **Gerade** y = mx+b: m = Steigung, b = y-Achsenabschnitt; aus zwei Punkten: m = (y₂−y₁)/(x₂−x₁), dann b = y₁−m×x₁.

**Verfahren — Schrittfolge:** (1) **Abstand:** d = √((Δx)²+(Δy)²). **Mittelpunkt:** M = ((x₁+x₂)/2, (y₁+y₂)/2). (2) **Gerade aus 2 Punkten:** m = (y₂−y₁)/(x₂−x₁), b = y₁−m×x₁. (3) **Schnittpunkt:** Gleichsetzen, nach x auflösen. (4) **Polarkoordinaten:** x = r×cos φ, y = r×sin φ.

**Typische Prüfungsfehler:** Abstand: Differenzen quadrieren (Δx)²+(Δy)², nicht (x₁²+x₂²). Steigung: Δy/Δx — y im Zähler. Senkrechte Geraden: m₂ = −1/m₁.

---

{{DIAGRAM:coordinate-system}}

## Kartesisches Koordinatensystem





Ein Punkt P im zweidimensionalen kartesischen Koordinatensystem wird durch ein geordnetes Paar (x, y) beschrieben. Die x-Achse (Abszisse) ist horizontal, die y-Achse (Ordinate) vertikal; der Ursprung O = (0, 0) liegt im Schnittpunkt.

Die vier Quadranten:
- I. Quadrant: x > 0, y > 0 (rechts oben)
- II. Quadrant: x < 0, y > 0 (links oben)
- III. Quadrant: x < 0, y < 0 (links unten)
- IV. Quadrant: x > 0, y < 0 (rechts unten)

**Abstand zwischen zwei Punkten** P₁(x₁, y₁) und P₂(x₂, y₂):
**d = √((x₂ − x₁)² + (y₂ − y₁)²)**

Dies ist eine direkte Anwendung des Satzes von Pythagoras im Koordinatensystem.

**Mittelpunkt** M der Strecke P₁P₂:
M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)

> **Merke:** Die Abstandsformel ist der Satz des Pythagoras in Koordinatenform. Die Koordinatendifferenzen Δx und Δy sind die Katheten, der Abstand d ist die Hypotenuse.

**Rechenbeispiel:** P₁(−3, 1) und P₂(5, 7). Δx = 5 − (−3) = 8, Δy = 7 − 1 = 6. d = √(64 + 36) = √100 = 10. Mittelpunkt: M = ((−3+5)/2, (1+7)/2) = (1, 4). Merke: Auch bei negativen Koordinaten funktioniert die Formel, da quadriert wird.

## Geradengleichung

Die **Normalform** (Slope-Intercept-Form):
**y = m × x + b**
- m = Steigung (Tangens des Steigungswinkels α: **m = tan α**)
- b = y-Achsenabschnitt (Wert bei x = 0)

**Trigonometrie im rechtwinkligen Dreieck (MedAT-relevant):** Mit Hypotenuse, Gegenkathete (gegenüber von α) und Ankathete (an α): **sin(α) = Gegenkathete/Hypotenuse**, **cos(α) = Ankathete/Hypotenuse**, **tan(α) = Gegenkathete/Ankathete**. **Steigung in %** = (Höhenunterschied / Horizontaldistanz) × 100 = **tan(α) × 100 %**. Beispiel: 16 % Steigung bedeutet bei 100 m horizontaler Strecke 16 m Höhendifferenz — das Verhältnis 16/100 entspricht dem **Tangens** des Steigungswinkels (nicht Sinus, nicht Cosinus). MedAT-Frage „Welche Winkelfunktion?" → **Tangens**.

Steigung aus zwei Punkten: **m = (y₂ − y₁) / (x₂ − x₁) = Δy / Δx**

Interpretation der Steigung: m = 2 bedeutet: Pro 1 Einheit nach rechts steigt die Gerade um 2 Einheiten. m = −0,5 bedeutet: Pro 1 Einheit nach rechts fällt die Gerade um 0,5 Einheiten. m = 0 ist eine waagerechte Linie. Senkrechte Linien haben keine definierte Steigung (x = const.).

**Punkt-Steigungsform**: y − y₁ = m × (x − x₁). Nützlich, wenn ein Punkt und die Steigung bekannt sind.

**Zwei-Punkte-Form**: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)] × (x − x₁). Nützlich, wenn zwei Punkte gegeben sind.

> **Merke:** Für den MedAT gibt es drei Standardaufgabentypen zu Geraden: (1) Geradengleichung aus zwei Punkten aufstellen, (2) Schnittpunkt zweier Geraden berechnen, (3) prüfen ob Geraden parallel oder senkrecht sind.

**Schnittpunkt zweier Geraden**: Gleichungssystem lösen
y = m₁x + b₁ und y = m₂x + b₂
→ m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁) / (m₁ − m₂)

Parallele Geraden (m₁ = m₂, b₁ ≠ b₂) haben keinen Schnittpunkt.
Senkrechte Geraden: m₁ × m₂ = −1 (Steigungsprodukt gleich − eins).

**Rechenbeispiel — Geradengleichung aufstellen:** Durch P₁(2, 3) und P₂(6, 11). Steigung: m = (11−3)/(6−2) = 8/4 = 2. Einsetzen in y = mx + b: 3 = 2 × 2 + b → b = −1. Geradengleichung: y = 2x − 1. Probe mit P₂: 2 × 6 − 1 = 11. Korrekt.

**Rechenbeispiel — Schnittpunkt:** g₁: y = 2x + 1, g₂: y = −x + 7. Gleichsetzen: 2x + 1 = −x + 7 → 3x = 6 → x = 2. y = 2 × 2 + 1 = 5. Schnittpunkt: (2, 5). Senkrecht? m₁ × m₂ = 2 × (−1) = −2 ≠ −1 → nicht senkrecht.

## Nullstellen und Achsenabschnitte

Nullstelle (Schnittpunkt mit x-Achse): y = 0 setzen → 0 = mx + b → x = −b/m.

y-Achsenabschnitt: x = 0 setzen → y = b.

Beispiel: y = 3x − 6. Nullstelle: x = 6/3 = 2. y-Achsenabschnitt: y = −6.

## Kreis im Koordinatensystem

Ein Kreis mit Mittelpunkt M(x₀, y₀) und Radius r:
**(x − x₀)² + (y − y₀)² = r²**

Bei Mittelpunkt im Ursprung: **x² + y² = r²**

Allgemeine Form: x² + y² + Dx + Ey + F = 0. Durch quadratische Ergänzung erhält man Mittelpunkt und Radius: x₀ = −D/2, y₀ = −E/2, r = √((D/2)² + (E/2)² − F).

**Rechenbeispiel:** x² + y² − 6x + 4y − 12 = 0. Quadratisch ergänzen: (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 = 25. Also (x − 3)² + (y + 2)² = 25. Mittelpunkt M(3, −2), Radius r = 5.

## Polarkoordinaten

Statt (x, y) beschreibt man Punkte durch (r, φ):
- r = Abstand vom Ursprung (r ≥ 0)
- φ = Winkel gegen die positive x-Achse (0 ≤ φ < 2π)

Umrechnung: **x = r × cos φ**, **y = r × sin φ**
Rück: **r = √(x² + y²)**, **φ = arctan(y / x)** (Quadrant beachten!)

> **Merke:** Beim arctan den Quadranten beachten! arctan liefert Werte nur zwischen −90° und +90°. Liegt der Punkt im II. oder III. Quadranten, muss 180° addiert werden.

Polarkoordinaten sind natürlich bei zirkulären Geometrien (EKG-Achse, Herzwinkel, CT-Rotationsscanner).

**Rechenbeispiel:** Punkt P hat kartesische Koordinaten (−3, 4). r = √(9 + 16) = 5. φ = arctan(4/(−3)) → Grundwert ≈ −53°, aber P liegt im II. Quadranten → φ = 180° − 53° = 127°. Polarkoordinaten: (5, 127°).

## Klinischer Kontext

**Streudiagramme (Scatterplots)**: In klinischen Studien werden zwei Messgrößen im kartesischen KS gegeneinander aufgetragen. Die Korrelation wird durch die Regressionsgerade (y = mx + b) beschrieben. Der Korrelationskoeffizient r quantifiziert den linearen Zusammenhang: r = +1 perfekt positiv, r = −1 perfekt negativ, r = 0 kein linearer Zusammenhang.

**Bland-Altman-Plot**: Auf der x-Achse: Mittelwert zweier Messmethoden; y-Achse: Differenz. Methodenübereinstimmung wird durch „Limits of Agreement" (±1,96×SD) beurteilt. Ein Bias (systematische Abweichung) zeigt sich als Verschiebung der mittleren Differenz von null.

**Vierfelder-Tafel**: Eine 2×2-Matrix entspricht einem Koordinatensystem mit den Achsen „Test positiv/negativ" und „Krank/Gesund". Sensitivität = TP/(TP+FN), Spezifität = TN/(TN+FP), PPV = TP/(TP+FP), NPV = TN/(TN+FN).

**EKG-Achse**: Die elektrische Herzachse wird als Vektor in der Frontalebene dargestellt, beschrieben durch einen Winkel im Koordinatensystem (Lagetypen: Steiltyp ~ +90°, Linkstyp < 0°, Normotyp 0° bis +90°).

## Rechenbeispiele

**Beispiel 1 — Abstand zweier Lymphknoten im CT:**
LK1 bei P₁(2, 5) cm, LK2 bei P₂(6, 8) cm (vom Referenzpunkt). d = √((6−2)² + (8−5)²) = √(16 + 9) = √25 = **5 cm**. Mittelpunkt (Mitte der Strecke): M = ((2+6)/2, (5+8)/2) = **(4, 6,5)**. Klinisch: Abstand >3 cm zwischen Metastasen beeinflusst Bestrahlungsfeld-Planung.

**Beispiel 2 — Regressionsgerade: HbA1c vs. mittlerer Blutzucker:**
Gerade y = 28,7x − 46,7 (y = mittlerer BZ in mg/dL, x = HbA1c in %). Für HbA1c = 7%: BZ = 28,7 × 7 − 46,7 = 200,9 − 46,7 = **154 mg/dL**. Steigung 28,7: pro 1% HbA1c-Anstieg steigt der mittlere BZ um 28,7 mg/dL. Ziel HbA1c < 7%: BZ < 154 mg/dL.

**Beispiel 3 — Kreisgleichung: Pupillenfläche bei Mydriasis:**
Pupille als Kreis: normal d = 3 mm → r = 1,5 mm. A = π × 1,5² = **7,07 mm²**. Mydriasis d = 8 mm → r = 4 mm. A = π × 4² = **50,3 mm²**. Faktor: 50,3/7,07 = **7,1-fach** mehr Lichteinfall. Kreisgleichung: x² + y² = 16 (Mittelpunkt Ursprung, r = 4 mm).

**Beispiel 4 — Parallele und senkrechte Geraden:**
g₁: y = ¾x + 2. Parallele Gerade durch P(4, 1): y = ¾x + b. Einsetzen: 1 = ¾ × 4 + b → b = 1 − 3 = −2. g₂: y = ¾x − 2. Senkrechte Gerade durch P(4, 1): m_perp = −1/(¾) = −4/3. y = −4/3 × x + b. Einsetzen: 1 = −4/3 × 4 + b → b = 1 + 16/3 = 19/3. g₃: y = −4/3 × x + 19/3.`,

      lernziele: [
        "Abstände und Mittelpunkte im kartesischen Koordinatensystem berechnen.",
        "Geradengleichungen aufstellen, Steigung und y-Achsenabschnitt interpretieren sowie Schnittpunkte zweier Geraden bestimmen.",
        "Die Kreisgleichung im Koordinatensystem anwenden und Mittelpunkt sowie Radius ablesen.",
        "Kartesische und Polarkoordinaten ineinander umrechnen.",
        "Klinische Diagrammtypen (Streudiagramm, Bland-Altman) geometrisch einordnen.",
      ],
      sections: [
        {
          heading: "Kartesisches System und Distanzformel",
          text: `Das kartesische Koordinatensystem bildet die Grundlage für die analytische Geometrie. Jeder Punkt P(x, y) ist eindeutig durch seine Koordinaten definiert.

Abstandsformel zwischen P₁(2, 3) und P₂(6, 7):
d = √((6−2)² + (7−3)²) = √(16 + 16) = √32 = 4√2 ≈ 5,66

Mittelpunkt M = ((2+6)/2, (3+7)/2) = (4, 5)

Für die Geradengleichung y = mx + b:
Beispiel: Durch P₁(1, 2) und P₂(3, 6):
m = (6−2)/(3−1) = 4/2 = 2
b = y − mx = 2 − 2×1 = 0
→ y = 2x`,
          merksatz:
            "Abstand zweier Punkte = Hypotenuse des rechtwinkligen Dreiecks mit den Koordinatendifferenzen als Katheten.",
        },
        {
          heading: "Kreisgleichung und Schnittpunkte",
          text: `Ein Kreis mit Mittelpunkt (3, 4) und Radius 5 hat die Gleichung:
(x − 3)² + (y − 4)² = 25

Schnittpunkt der Geraden y = 2x + 1 und y = −x + 7:
2x + 1 = −x + 7
3x = 6
x = 2; y = 2×2 + 1 = 5 → Schnittpunkt: (2, 5)

Bedingungen für Geraden:
- Parallel: gleiche Steigung m₁ = m₂
- Senkrecht: m₁ × m₂ = −1 (Steigungsprodukt = −1)
- Kongruent (identisch): m₁ = m₂ und b₁ = b₂`,
          merksatz: "Senkrechte Geraden: m₁ × m₂ = −1; parallele Geraden: m₁ = m₂.",
        },
        {
          heading: "Klinische Diagramme und Koordinatensystem",
          text: `Der Bland-Altman-Plot dient dem Methodenvergleich in der klinischen Messtechnik:
- x-Achse: (Methode A + Methode B) / 2
- y-Achse: Methode A − Methode B
- „Limits of Agreement": Mittelwert der Differenz ± 1,96×Standardabweichung

Die Vierfelder-Tafel entspricht einem 2×2-Gitter:
- TP (wahr positiv), FP (falsch positiv): erste Zeile
- FN (falsch negativ), TN (wahr negativ): zweite Zeile
- Sensitivität = TP / (TP + FN); Spezifität = TN / (TN + FP)

Im Streudiagramm zeigt die Regressionsgerade y = mx + b die Richtung und Stärke des Zusammenhangs. Der Korrelationskoeffizient r (−1 bis +1) quantifiziert den linearen Zusammenhang.`,
          merksatz:
            "Bland-Altman: Differenz gegen Mittelwert — zeigt systematische Messfehler (Bias) und zufällige Streuung (Präzision) zwischen zwei Messmethoden.",
        },
      ],

      merksätze: [
        "Abstand zweier Punkte: d = √((Δx)² + (Δy)²).",
        "Mittelpunkt zweier Punkte: M = ((x₁+x₂)/2, (y₁+y₂)/2).",
        "Geradengleichung: y = mx + b; m = Steigung, b = y-Achsenabschnitt.",
        "Steigung aus zwei Punkten: m = (y₂−y₁)/(x₂−x₁).",
        "Schnittpunkt zweier Geraden: Gleichungssystem; Gleichungen gleichsetzen.",
        "Senkrechte Geraden: m₁ × m₂ = −1.",
        "Kreisgleichung: (x−x₀)² + (y−y₀)² = r².",
        "Polarkoordinaten: x = r×cos φ; y = r×sin φ.",
        "Bland-Altman-Plot: Methodenvergleich durch Differenz vs. Mittelwert.",
        "Vierfelder-Tafel: 2×2-Matrix für Sensitivität (TP/(TP+FN)) und Spezifität (TN/(TN+FP)).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Zwei Geraden g₁: y = 3x − 2 und g₂: y = −x + 6 schneiden sich in einem Punkt. Bestimmen Sie den Schnittpunkt und geben Sie an, ob die Geraden senkrecht zueinander stehen.",
        answer:
          "Für den Schnittpunkt werden die Gleichungen gleichgesetzt: 3x − 2 = −x + 6. Umformen: 3x + x = 6 + 2 → 4x = 8 → x = 2. y-Wert einsetzen: y = 3 × 2 − 2 = 6 − 2 = 4. Der Schnittpunkt liegt bei P(2, 4). Überprüfung mit g₂: y = −2 + 6 = 4. Stimmt überein. Zur Prüfung auf Orthogonalität: m₁ = 3, m₂ = −1. Das Produkt der Steigungen: m₁ × m₂ = 3 × (−1) = −3 ≠ −1. Da m₁ × m₂ ≠ −1, stehen die Geraden nicht senkrecht zueinander. Für Senkrechtstehen wäre beispielsweise m₂ = −1/3 erforderlich. Die Geraden schneiden sich also in P(2, 4) unter einem spitzen Winkel.",
      },
      klinischerBezug:
        "Streudiagramme und Regressionsgeraden in klinischen Studien; Bland-Altman-Methodenvergleich; Vierfelder-Tafel für Testgüte (Sensitivität, Spezifität).",
      selfTest: [
        {
          question: "Wie groß ist der Abstand zwischen den Punkten P₁(1, 2) und P₂(4, 6)?",
          options: ["3", "4", "5", "6", "7"],
          correctIndex: 2,
          explanation:
            "Die Abstandsformel lautet d = √((x₂−x₁)² + (y₂−y₁)²). Einsetzen: d = √((4−1)² + (6−2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5. Dies ist wieder das pythagoräische Tripel (3, 4, 5). Die Abstandsformel ist direkt aus dem Satz des Pythagoras abgeleitet: Die Koordinatendifferenzen Δx = 3 und Δy = 4 sind die Katheten, der gesuchte Abstand d = 5 ist die Hypotenuse.",
          hints: [
            "d = √((Δx)² + (Δy)²); berechne Δx = x₂ − x₁ und Δy = y₂ − y₁.",
            "Erkenne das pythagoräische Tripel (3, 4, 5).",
          ],
          tags: ["abstandsformel", "koordinaten", "pythagoras"],
          difficulty: 1,
        },
        {
          question:
            "Welche der folgenden Kreisgleichungen beschreibt einen Kreis mit Mittelpunkt M(−2, 3) und Radius 4?",
          options: [
            "(x + 2)² + (y − 3)² = 4",
            "(x − 2)² + (y + 3)² = 16",
            "(x + 2)² + (y − 3)² = 16",
            "(x − 2)² + (y − 3)² = 16",
            "(x + 2)² + (y + 3)² = 16",
          ],
          correctIndex: 2,
          explanation:
            "Die allgemeine Kreisgleichung lautet (x − x₀)² + (y − y₀)² = r². Mit Mittelpunkt M(−2, 3): x₀ = −2, y₀ = 3. Einsetzen: (x − (−2))² + (y − 3)² = 4² → (x + 2)² + (y − 3)² = 16. Achtung bei den Vorzeichen: (x − (−2)) = (x + 2). Option A hat r² = 4, entspricht also r = 2 (falsch). Option B hat andere Vorzeichen (x − 2)² statt (x + 2)². Option D hat (x − 2)² statt (x + 2)².",
          hints: [
            "Kreisgleichung: (x − x₀)² + (y − y₀)² = r²; r² = 16, nicht r = 16.",
            "x₀ = −2 führt zu (x − (−2))² = (x + 2)².",
          ],
          tags: ["kreis", "kreisgleichung", "koordinaten"],
          difficulty: 2,
        },
        {
          question:
            "Ein Punkt P hat Polarkoordinaten (r = 5, φ = 53°). Was sind die kartesischen Koordinaten (näherungsweise)? (cos 53° ≈ 0,6; sin 53° ≈ 0,8)",
          options: ["(4, 3)", "(3, 4)", "(5, 5)", "(0,6; 0,8)", "(2,5; 4)"],
          correctIndex: 1,
          explanation:
            "Umrechnung von Polar- in kartesische Koordinaten: x = r × cos φ = 5 × 0,6 = 3; y = r × sin φ = 5 × 0,8 = 4. Der Punkt liegt also bei P(3, 4). Überprüfung: Abstand vom Ursprung = √(3² + 4²) = √25 = 5. Korrekt. Der Winkel: arctan(4/3) ≈ 53°. Korrekt. Polarkoordinaten sind besonders nützlich bei Kreisbewegungen und in der Medizin bei der Darstellung der EKG-Herzachse (Lagetypen).",
          hints: ["x = r × cos φ; y = r × sin φ.", "r = 5, cos 53° ≈ 0,6, sin 53° ≈ 0,8."],
          tags: ["polarkoordinaten", "koordinatenumrechnung", "trigonometrie"],
          difficulty: 2,
        },
        {
          question:
            "In einem Bland-Altman-Plot werden zwei Blutdruckmessgeräte A und B verglichen. Fünf Patienten zeigen folgende Werte (A; B): (120;122), (130;128), (140;144), (150;148), (160;162). Was ist die mittlere Differenz (Bias) A − B?",
          options: ["+2 mmHg", "−2 mmHg", "0 mmHg", "+1 mmHg", "−1 mmHg"],
          correctIndex: 4,
          explanation:
            "Die Differenzen A − B berechnen sich: 120−122 = −2; 130−128 = +2; 140−144 = −4; 150−148 = +2; 160−162 = −2. Summe: −2 + 2 − 4 + 2 − 2 = −4. Mittlere Differenz (Bias): −4/5 = −0,8 ≈ −1 mmHg. Am nächsten ist Option E (−1 mmHg). Tatsächlich ist der Wert −0,8 — unter den gegebenen Optionen ist −1 mmHg die beste Annäherung. Ein negativer Bias bedeutet, dass Gerät A im Mittel niedrigere Werte liefert als Gerät B. Im klinischen Kontext würde man prüfen, ob dieser Bias klinisch relevant ist (bei Blutdruck: > 5 mmHg gilt als bedeutsam).",
          hints: [
            "Bias = Mittelwert aller (A − B)-Differenzen.",
            "Berechne zuerst alle fünf Differenzen, dann den Durchschnitt.",
          ],
          tags: ["bland-altman", "bias", "methodenvergleich"],
          difficulty: 3,
        },
        {
          question:
            "Ein Streudiagramm zeigt den Zusammenhang zwischen Serumcholesterin (x-Achse, mmol/L) und kardiovaskulärem Risiko (y-Achse, %). Die Regressionsgerade hat die Gleichung y = 8x − 10. Welchen Risikowert sagt die Gerade für einen Cholesterin von 6 mmol/L vorher?",
          options: ["28 %", "36 %", "38 %", "48 %", "58 %"],
          correctIndex: 2,
          explanation:
            "Einsetzen von x = 6 in die Geradengleichung y = 8x − 10: y = 8 × 6 − 10 = 48 − 10 = 38 %. Die Gerade sagt bei einem Cholesterinwert von 6 mmol/L ein kardiovaskuläres Risiko von 38 % vorher. Die Steigung m = 8 bedeutet: pro zusätzlichem mmol/L Cholesterin steigt das Risiko um 8 Prozentpunkte. Der y-Achsenabschnitt b = −10 ist hier rechnerisch ein negativer Risikowert (bei x = 0), was biologisch nicht sinnvoll ist — Regressionsgeraden gelten nur im relevanten Wertebereich.",
          hints: ["Setze x = 6 in y = 8x − 10 ein.", "8 × 6 = 48; 48 − 10 = ?"],
          tags: ["regression", "cholesterin", "lineare-funktion"],
          difficulty: 1,
        },
      ],
      diagram: "coordinate-system",
    },

    // ──────────────────────────────────────────────────────────────
    // UK ma-3-04  Vektoren und räumliche Geometrie
    // ──────────────────────────────────────────────────────────────
    {
      id: "ma-3-04",
      title: "Vektoren und räumliche Geometrie",
      stichworte: [
        "Vektor",
        "Betrag",
        "Skalarprodukt",
        "Kreuzprodukt",
        "Orthogonalität",
        "Ebenengleichung",
        "Normalenvektor",
        "Vektoraddition",
        "Drehmoment",
        "EKG-Herzachse",
        "Strahlentherapie",
        "Biomechanik",
      ],
      content: `## Warum Vektoren in der Medizin?

Wenn ein Kardiologe die elektrische Herzachse im EKG bestimmt, rechnet er mit Vektoren: Die Amplituden der Ableitungen I und aVF bilden die x- und y-Komponente eines Pfeils, dessen Winkel den Lagetyp verrät. Auch CT-gesteuerte Nadelführungen und Drehmomente an Gelenken sind Vektorprobleme. Die Grundlagen dafür stehen hier.

---

## Vektor-Grundlagen (Kurzwiederholung)

Ein **Vektor** hat Betrag und Richtung; ein **Skalar** ist nur eine Zahl. In 3D schreibt man **a** = (a₁, a₂, a₃).

- **Betrag (Länge):** |**a**| = √(a₁² + a₂² + a₃²)
- **Einheitsvektor:** **â** = **a** / |**a**| — gleiche Richtung, Länge 1
- **Ortsvektor A → B:** **AB** = **b** − **a** = (b₁−a₁, b₂−a₂, b₃−a₃)
- **Addition:** komponentenweise, geometrisch = Pfeile aneinanderhängen
- **Skalierung:** c × **a** = (c·a₁, c·a₂, c·a₃); bei c < 0 kehrt die Richtung um

Vertiefung zu Vektorraum, Basis und Koordinatensystemen: siehe Kapitel ma-6-01.

> **Merke:** Zwei Punkte A und B im Raum verbindet der Differenzvektor **AB** = **b** − **a**. Sein Betrag |**AB**| ist der Abstand zwischen den Punkten.

---

{{DIAGRAM:vector-addition-parallelogram}}

## Skalarprodukt — Winkel und Orthogonalität

Das Skalarprodukt misst, wie stark zwei Vektoren in dieselbe Richtung zeigen. Es liefert immer eine **Zahl** (keinen Vektor):

**a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a| · |b| · cos θ**

- **a · b = 0** → Vektoren senkrecht (orthogonal), θ = 90°
- **a · b > 0** → spitzer Winkel (θ < 90°)
- **a · b < 0** → stumpfer Winkel (θ > 90°)

**Winkel berechnen:** cos θ = (a · b) / (|a| · |b|) → θ = arccos(…)

**Projektion** eines Vektors **a** auf **b**: Die Komponente von **a** in Richtung **b** hat den Betrag (a · b) / |b|. In der Kardiologie wird genau das genutzt, um die EKG-Herzachse auf die einzelnen Ableitungsrichtungen zu projizieren.

> **Merke:** Skalarprodukt = Zahl; Skalarprodukt = 0 ↔ senkrecht. Häufigster Prüfungsfehler: Skalarprodukt mit Kreuzprodukt verwechseln (Zahl vs. Vektor).

---

## Kreuzprodukt — Fläche und Drehmoment

Das Kreuzprodukt **a × b** erzeugt einen neuen **Vektor**, der senkrecht auf **a** und **b** steht:

**a × b** = (a₂b₃ − a₃b₂,  a₃b₁ − a₁b₃,  a₁b₂ − a₂b₁)

- **|a × b| = |a| · |b| · sin θ** — gleich der Fläche des aufgespannten Parallelogramms
- **a × b = 0** → Vektoren parallel (θ = 0° oder 180°)
- **Antikommutativ:** a × b = −(b × a) — Reihenfolge zählt!

Die Richtung bestimmt die **Rechte-Hand-Regel**: Zeigefinger = **a**, Mittelfinger = **b**, Daumen = **a × b**.

{{DIAGRAM:cross-product-right-hand}}

**Klinische Anwendung — Drehmoment:** Am Gelenk gilt **M** = **r** × **F**. Der Betrag ist |M| = |r| · |F| · sin θ. Maximales Drehmoment entsteht bei θ = 90° (Kraft senkrecht zum Hebelarm, sin 90° = 1).

> **Merke:** Kreuzprodukt = Vektor senkrecht zu beiden Ausgangsvektoren. Kreuzprodukt = 0 ↔ parallel. |a × b| = Parallelogrammfläche; Dreiecksfläche = ½ |a × b|.

---

## Rechenbeispiel — EKG-Herzachse als Vektorproblem

**Aufgabe:** Ableitung I zeigt +8 mm, Ableitung aVF zeigt +4 mm. Bestimme den Betrag und Winkel der Herzachse.

**Denkprozess:**

1. Vektor aufstellen: **v** = (I, aVF) = (8, 4).
2. Betrag: |**v**| = √(8² + 4²) = √(64 + 16) = √80 ≈ **8,9 mm**.
3. Winkel: φ = arctan(aVF / I) = arctan(4/8) = arctan(0,5) ≈ **26,6°**.
4. Interpretation: 26,6° liegt zwischen 0° und +90° → **Normaltyp** (Indifferenztyp wäre bei ca. 60°, hier eher Linkstyp-nah).

**Probe:** cos 26,6° ≈ 0,894; sin 26,6° ≈ 0,447. Rückrechnung: 8,9 × 0,894 ≈ 8 ✓; 8,9 × 0,447 ≈ 4 ✓.

> **Merke:** EKG-Herzachse = resultierender Depolarisationsvektor. Ableitung I = x-Komponente, aVF = y-Komponente. Winkel φ = arctan(aVF/I) bestimmt den Lagetyp.

---

{{DIAGRAM:ekg-axis-vector}}

## Geraden im Raum

Eine Gerade wird in **Parameterform** beschrieben: **r**(t) = **p** + t · **v**, wobei **p** ein Stützpunkt und **v** der Richtungsvektor ist. Jeder Wert von t liefert einen Punkt auf der Geraden.

Zwei Geraden im 3D-Raum können:
- **sich schneiden** (gemeinsamer Punkt, verschiedene Richtungen)
- **parallel** sein (gleiche Richtung, kein gemeinsamer Punkt)
- **identisch** sein (gleiche Richtung und ein gemeinsamer Punkt)
- **windschief** sein — weder parallel noch schneidend (nur in 3D möglich)

**Abstand Punkt P von Gerade** (Stützpunkt **p**, Richtung **v**):
d = |(**P** − **p**) × **v**| / |**v**|

Klinisch: Der Abstand eines Tumorzentrums von einem CT-Nadelweg lässt sich so berechnen — liegt der Tumor nah genug an der geplanten Trajektorie?

> **Merke:** Parameterform einer Geraden: **r** = **p** + t · **v**. Windschiefe Geraden existieren nur im 3D-Raum (2D unmöglich).

---

## Rechenbeispiel — Drehmoment am Ellenbogengelenk

**Aufgabe:** Der Bizeps übt F = 300 N unter θ = 80° auf einen Hebelarm von r = 4 cm an.

**Denkprozess:**

1. Einheiten umrechnen: r = 0,04 m.
2. Formel: |M| = r · F · sin θ = 0,04 · 300 · sin 80°.
3. sin 80° ≈ 0,985 → |M| = 0,04 × 300 × 0,985 = **11,8 N·m**.
4. Vergleich: Bei θ = 90° wäre |M| = 12 N·m (Maximum). Bei θ = 30°: |M| = 0,04 × 300 × 0,5 = 6 N·m — die Krafteffizienz halbiert sich bei flachem Ansatzwinkel.

---

## Ebenengleichung (vertiefend, Kurzüberblick)

Eine Ebene im Raum lässt sich durch einen Punkt **r₀** und einen **Normalenvektor** **n** beschreiben: **n** · (**r** − **r₀**) = 0, oder in Koordinatenform: n₁x + n₂y + n₃z = d.

Den Normalenvektor aus drei Punkten A, B, C erhält man über das Kreuzprodukt: **n** = (**B** − **A**) × (**C** − **A**). Der Abstand eines Punktes P von der Ebene beträgt |n₁xP + n₂yP + n₃zP − d| / |**n**|.

Im MRT definiert jede Bildschicht eine Ebene; der Normalenvektor legt die Schichtorientierung fest (axial, sagittal, koronal). Weiterführend: siehe Kapitel ma-6-03.

---

## Typische Prüfungsfehler

- **Skalar- vs. Kreuzprodukt verwechselt:** Skalarprodukt → Zahl, Kreuzprodukt → Vektor
- **Orthogonalitätstest:** senkrecht ↔ Skalarprodukt = 0 (nicht Kreuzprodukt = 0!)
- **Parallelitätstest:** parallel ↔ Kreuzprodukt = 0 (nicht Skalarprodukt = 0!)
- **Reihenfolge beim Kreuzprodukt:** a × b = −(b × a) — Vorzeichen beachten
- **Betrag vergessen:** cos θ = (a · b) / (|a| · |b|), nicht einfach a · b

---

## Zusammenfassung

| Operation | Ergebnis | Formel | Bedeutung |
|-----------|----------|--------|-----------|
| Betrag | Skalar | √(a₁²+a₂²+a₃²) | Länge des Vektors |
| Skalarprodukt | Skalar | a₁b₁+a₂b₂+a₃b₃ | Winkel, Orthogonalität |
| Kreuzprodukt | Vektor | (a₂b₃−a₃b₂, …) | Fläche, Drehmoment |
| Gerade | Parameterform | **p** + t·**v** | Stützpunkt + Richtung |`,

      lernziele: [
        "Betrag, Addition, Subtraktion und Skalierung von Vektoren berechnen.",
        "Das Skalarprodukt berechnen und zur Bestimmung von Winkeln und Orthogonalität nutzen.",
        "Das Kreuzprodukt berechnen und seine geometrische Bedeutung (Flächeninhalt, Senkrechter) erklären.",
        "Die Ebenengleichung aufstellen und den Normalenvektor interpretieren.",
        "Vektoren in medizinischen Kontexten (EKG-Achse, Strahlentherapie, Biomechanik) erkennen.",
      ],
      sections: [
        {
          heading: "Skalar- und Kreuzprodukt",
          text: `Skalarprodukt — Beispiel:
**a** = (1, 2, 3), **b** = (4, −1, 2)
**a · b** = 1×4 + 2×(−1) + 3×2 = 4 − 2 + 6 = 8

Winkel: cos θ = (**a · b**) / (|**a**| × |**b**|)
|**a**| = √(1+4+9) = √14; |**b**| = √(16+1+4) = √21
cos θ = 8 / (√14 × √21) = 8 / √294 ≈ 8/17,15 ≈ 0,467 → θ ≈ 62°

Kreuzprodukt — Beispiel:
**a** = (1, 0, 0), **b** = (0, 1, 0)
**a × b** = (0×0−0×1, 0×0−1×0, 1×1−0×0) = (0, 0, 1)
→ Ergibt den Einheitsvektor in z-Richtung (senkrecht zur xy-Ebene).`,
          merksatz: "Skalarprodukt = 0 → senkrecht; Kreuzprodukt = 0 → parallel.",
        },
        {
          heading: "Ebenengleichung und Normalenvektor",
          text: `Eine Ebene kann durch drei Punkte oder durch Punkt + Normalenvektor definiert werden.

Normalenform: **n · (r − r₀) = 0**

Beispiel: Ebene durch P₀(1, 2, 3) mit Normalenvektor **n** = (1, −1, 2):
1×(x−1) + (−1)×(y−2) + 2×(z−3) = 0
x − 1 − y + 2 + 2z − 6 = 0
x − y + 2z − 5 = 0

Für drei gegebene Punkte A, B, C berechnet man **n** = (B−A) × (C−A).

Im MRT definiert jede Bildschicht eine Ebene; der Normalenvektor entspricht der Schichtorientierung (axial, sagittal, koronal).`,
          merksatz:
            "Normalenvektor n steht senkrecht auf der Ebene; Ebenengleichung: n₁x + n₂y + n₃z = d (mit d = n × r₀).",
        },
        {
          heading: "Vektoren in der Medizin",
          text: `EKG-Herzachse: Die resultierende elektrische Herzachse in der Frontalebene wird als Winkelangabe in Grad beschrieben. Bei einem Normaltyp liegt sie zwischen −30° und +90°.

Berechnung aus Ableitungen I und aVF (vereinfacht):
- Amplitude in I → x-Komponente des Vektors
- Amplitude in aVF → y-Komponente des Vektors
- Winkel φ = arctan(aVF/I)

Biomechanik: Das Drehmoment M = r × F (Kreuzprodukt aus Hebelarm r und Kraft F). |M| = |r| × |F| × sin θ. Für maximales Drehmoment: θ = 90° (Kraft senkrecht zum Hebelarm).

Strahlentherapie: Mehrere Strahlenfelder aus verschiedenen Richtungen (Vektoren) können so addiert werden, dass die therapeutische Dosis am Tumorvolumen maximiert und die Belastung des Normalgewebes minimiert wird (IMRT, Stereotaxie).`,
          merksatz:
            "Drehmoment M = r × F — maximales Drehmoment wenn Kraft und Hebelarm senkrecht (θ = 90°); |M| = |r| × |F| × sin 90° = |r| × |F|.",
        },
      ],
      merksätze: [
        "Betrag eines Vektors: |a| = √(a₁² + a₂² + a₃²).",
        "Skalarprodukt: a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a|·|b|·cos θ.",
        "Senkrecht ↔ Skalarprodukt = 0; parallel ↔ Kreuzprodukt = 0.",
        "Kreuzprodukt a × b ist senkrecht zu beiden Vektoren; |a × b| = |a|×|b|×sin θ.",
        "|a × b| = Fläche des Parallelogramms, das a und b aufspannen.",
        "Ebenengleichung: n · (r − r₀) = 0; n ist der Normalenvektor der Ebene.",
        "EKG-Herzachse = resultierender Depolarisationsvektor; Winkel definiert Lagetyp.",
        "Strahlentherapie: Strahlengang als Vektor durch Tumor — Summe aus verschiedenen Richtungen.",
        "Drehmoment M = r × F; maximal wenn Kraft senkrecht zum Hebelarm.",
        "3D-MRT-Schichten: jede Schichtebene hat einen Normalenvektor (Schichtorientierung).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Die Vektoren **a** = (2, 1, −1) und **b** = (1, −1, 2) sind gegeben. Berechnen Sie das Skalarprodukt und bestimmen Sie den Winkel zwischen den Vektoren (cos⁻¹ angeben). Sind die Vektoren senkrecht zueinander?",
        answer:
          "Das Skalarprodukt berechnet sich komponentenweise: a · b = a₁b₁ + a₂b₂ + a₃b₃ = 2×1 + 1×(−1) + (−1)×2 = 2 − 1 − 2 = −1. Die Beträge der Vektoren: |a| = √(2² + 1² + (−1)²) = √(4 + 1 + 1) = √6; |b| = √(1² + (−1)² + 2²) = √(1 + 1 + 4) = √6. Der Kosinus des Winkels: cos θ = (a · b) / (|a| · |b|) = −1 / (√6 × √6) = −1/6 ≈ −0,167. Der Winkel: θ = arccos(−0,167) ≈ 99,6°. Da das Skalarprodukt −1 ≠ 0 ist, sind die Vektoren nicht senkrecht zueinander; sie schließen einen stumpfen Winkel von ca. 100° ein. Senkrecht wären sie nur, wenn das Skalarprodukt exakt null wäre.",
      },
      klinischerBezug:
        "EKG-Herzachse als Vektor (Lagetypen); MRT-Schichtorientierung via Normalenvektoren; Strahlentherapieplanung (Isodosen); Drehmoment in der Biomechanik.",
      selfTest: [
        {
          question: "Welcher Vektor ist der Summenvektor von a = (2, −1, 3) und b = (−1, 4, 2)?",
          options: ["(3, −5, 1)", "(1, 3, 5)", "(−2, −4, 6)", "(3, 3, 5)", "(1, −5, 5)"],
          correctIndex: 1,
          explanation:
            "Vektoren werden komponentenweise addiert: a + b = (2+(−1), (−1)+4, 3+2) = (1, 3, 5). Die Addition erfolgt für jede Koordinate separat: x-Komponente: 2 + (−1) = 1; y-Komponente: −1 + 4 = 3; z-Komponente: 3 + 2 = 5. Das Ergebnis ist der Vektor (1, 3, 5). Vektoraddition entspricht geometrisch dem Aneinanderhängen der Pfeile (Dreiecksregel) oder dem Aufspannen eines Parallelogramms (Parallelogrammregel).",
          hints: [
            "Vektoren werden komponentenweise addiert: (a₁+b₁, a₂+b₂, a₃+b₃).",
            "x: 2+(−1) = ?; y: −1+4 = ?; z: 3+2 = ?",
          ],
          tags: ["vektoraddition", "komponentenweise", "vektor"],
          difficulty: 1,
        },
        {
          question: "Welches Skalarprodukt haben die Vektoren a = (3, 0, −2) und b = (1, 5, 3)?",
          options: ["−3", "0", "3", "9", "−9"],
          correctIndex: 0,
          explanation:
            "Das Skalarprodukt berechnet sich komponentenweise: a · b = a₁b₁ + a₂b₂ + a₃b₃ = 3×1 + 0×5 + (−2)×3 = 3 + 0 − 6 = −3. Das Ergebnis −3 ist ein negativer Skalar, was bedeutet, dass der Winkel zwischen den Vektoren stumpf ist (> 90°). Da das Skalarprodukt ≠ 0, sind die Vektoren nicht senkrecht. Ein Skalarprodukt von 0 würde Orthogonalität bedeuten. Das Skalarprodukt ist immer eine Zahl (Skalar), kein Vektor.",
          hints: ["a · b = a₁b₁ + a₂b₂ + a₃b₃.", "3×1 = 3; 0×5 = 0; (−2)×3 = −6; Summe?"],
          tags: ["skalarprodukt", "vektor", "algebra"],
          difficulty: 1,
        },
        {
          question:
            "Ein Muskel zieht mit einer Kraft F = 200 N senkrecht an einem Hebelarm der Länge r = 0,05 m (5 cm). Wie groß ist das Drehmoment |M| = |r × F|?",
          options: ["0,01 N×m", "0,1 N×m", "1 N×m", "10 N×m", "4000 N×m"],
          correctIndex: 3,
          explanation:
            "Das Drehmoment M = r × F. Da die Kraft senkrecht zum Hebelarm wirkt (θ = 90°), gilt sin 90° = 1. Also: |M| = |r| × |F| × sin θ = 0,05 m × 200 N × 1 = 10 N×m. Ein Drehmoment von 10 N×m an einem 5-cm-Hebelarm erfordert 200 N Muskelkraft. In der Biomechanik sind solche Berechnungen wichtig für die Belastungsanalyse von Gelenken (z. B. Kniegelenk beim Strecken, Schultergelenk beim Heben).",
          hints: [
            "|M| = |r| × |F| × sin θ; bei senkrechter Kraft ist θ = 90°, sin 90° = 1.",
            "0,05 m × 200 N = ?",
          ],
          tags: ["drehmoment", "kreuzprodukt", "biomechanik"],
          difficulty: 2,
        },
        {
          question: "Welcher der folgenden Vektoren ist senkrecht zu n = (1, −2, 3)?",
          options: ["(1, 2, 3)", "(2, −4, 6)", "(6, 3, 0)", "(−3, 1, 1)", "(−1, 2, −3)"],
          correctIndex: 2,
          explanation:
            "Ein Vektor v ist senkrecht zu n, wenn das Skalarprodukt n · v = 0. Testen wir Option C: v = (6, 3, 0): n · v = 1×6 + (−2)×3 + 3×0 = 6 − 6 + 0 = 0 ✓. Die anderen: A: 1×1 + (−2)×2 + 3×3 = 1−4+9 = 6 ≠ 0. B: (2, −4, 6) = 2×(1, −2, 3) = 2n → parallel, nicht senkrecht. D: 1×(−3) + (−2)×1 + 3×1 = −3−2+3 = −2 ≠ 0. E: (−1, 2, −3) = −1×(1, −2, 3) = −n → antiparallel, nicht senkrecht.",
          hints: [
            "Senkrecht ↔ Skalarprodukt n · v = 0.",
            "Berechne n · v für jeden Optionsvektor.",
          ],
          tags: ["skalarprodukt", "orthogonalität", "vektor"],
          difficulty: 2,
        },
        {
          question:
            "Die EKG-Ableitungen I und aVF zeigen bei einem Patienten Amplituden von +6 mm (I) und +6 mm (aVF). Der Winkel der Herzachse ergibt sich aus arctan(aVF/I). Welchem Lagetyp entspricht ein Winkel von ca. 45°?",
          options: [
            "Überdrehter Linkstyp (< −30°)",
            "Linkstyp (−30° bis 0°)",
            "Normotyp (0° bis +90°)",
            "Rechtstyp (+90° bis +120°)",
            "Überdrehter Rechtstyp (> +120°)",
          ],
          correctIndex: 2,
          explanation:
            "arctan(6/6) = arctan(1) = 45°. Ein Winkel von 45° liegt im Bereich des Normotyps (0° bis +90°). Die EKG-Herzachse beschreibt den resultierenden elektrischen Depolarisationsvektor in der Frontalebene. Ableitung I entspricht der horizontalen (x-)Komponente, Ableitung aVF der vertikalen (y-)Komponente (nach unten positiv). Bei gleichen positiven Ausschlägen in beiden Ableitungen zeigt der Vektor schräg nach unten rechts — klassisch für den Normaltyp. Klinisch relevant: Linksachsenabweichung bei Linksschenkelblock oder Linksherzhypertrophie; Rechtsachsenabweichung bei Lungenembolie oder Rechtsherzbelastung.",
          hints: ["arctan(6/6) = arctan(1) = 45°.", "Normotyp: Herzachse zwischen 0° und +90°."],
          tags: ["ekg", "herzachse", "normotyp"],
          difficulty: 3,
        },
      ],
    },
  ],
};
