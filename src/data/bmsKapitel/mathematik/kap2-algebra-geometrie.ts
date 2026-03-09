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
        "Quadratische Gleichung",
        "Diskriminante",
        "Mitternachtsformel",
        "Ungleichung",
        "Vorzeichenumkehr",
        "Gleichungssystem",
        "Substitutionsverfahren",
        "Additionsverfahren",
        "Vieta",
        "Dosierungsberechnung",
        "Verdünnungsformel",
      ],
      content: `## Grundprinzip der Gleichungsumformung

**Idee:** Eine Gleichung A = B bleibt „wahr", wenn auf **beiden Seiten** dieselbe Operation ausgeführt wird. So kannst du schrittweise die gesuchte Variable isolieren (allein auf einer Seite), ohne die Lösungsmenge zu ändern. Ziel ist immer: x = … (bzw. die gesuchte Größe).

**Verfahren:** Erlaubte Schritte: Addition/Subtraktion derselben Zahl auf beiden Seiten; Multiplikation/Division beider Seiten mit derselben Zahl (niemals durch 0); Wurzelziehen oder Logarithmieren auf beiden Seiten (Definitionsbereich beachten). Bei linearen Gleichungen: Klammern auflösen → Brüche beseitigen (Hauptnenner) → x-Terme auf eine Seite, Zahlen auf die andere → durch Koeffizient von x teilen → Probe.



Eine **Gleichung** ist eine Aussage der Form **A = B**, wobei A und B mathematische Ausdrücke sind. **Äquivalenzumformung** (gültigkeitserhaltende Umformung) bedeutet: Die Gleichung bleibt gültig, wenn du auf **beiden Seiten** dieselbe Operation durchführst. Erlaubte Operationen sind:

- Addition oder Subtraktion derselben Zahl auf beiden Seiten
- Multiplikation oder Division beider Seiten mit derselben Zahl (niemals durch null)
- Anwenden einer Funktion auf beiden Seiten (z.B. Wurzelziehen, Logarithmieren — Definitionsbereich beachten)

Ziel ist stets, die gesuchte Variable zu isolieren, d.h. allein auf einer Seite stehen zu haben.

**Typische Prüfungsfehler:** Operation nur auf einer Seite durchführen (Gleichung wird falsch). Durch null teilen. Bei Ungleichungen: Multiplikation/Division mit negativer Zahl ohne Vorzeichenumkehr. Kehrwert falsch: (a/b)⁻¹ = b/a (nicht a/b). Hauptnenner vergessen bei Brüchen.

**Umformen von Termen (MedAT-typisch):** Ist **a = b/c** gegeben und **d = a⁻¹** (Kehrwert von a), so gilt **d = 1/a = 1/(b/c) = c/b**. Merke: Bruch invertieren heißt Zähler und Nenner tauschen — also **d = c/b** (nicht d = b/c, nicht d = b−c). Allgemein: **a/b invertieren → (a/b)⁻¹ = b/a**.

> **Merke:** Was links passiert, passiert auch rechts — jede Operation auf BEIDE Seiten der Gleichung anwenden, sonst verliert sie ihre Gültigkeit. **a = b/c und d = a⁻¹ ⇒ d = c/b.**

## Lineare Gleichungen — Rechenprinzip Schritt für Schritt

Eine **lineare Gleichung** in einer Unbekannten x hat die Form **ax + b = c** (a, b, c reelle Zahlen, a ≠ 0). **Rechenweg immer in dieser Reihenfolge:**

1. **Klammern** ausmultiplizieren (Distributivgesetz: a(b+c) = ab+ac)
2. **Brüche** beseitigen: mit dem **Hauptnenner** (kgV = kleinstes gemeinsames Vielfaches aller Nenner) multiplizieren
3. Alle **Terme mit x** auf eine Seite bringen (Addition/Subtraktion)
4. Alle **Zahlen** auf die andere Seite bringen
5. Durch den **Koeffizienten** (Vorfaktor) **von x** dividieren
6. **Probe:** Lösung in die Ausgangsgleichung einsetzen

**Beispiel (Schritt für Schritt):** 5x − 3 = 2x + 9.  
Schritt 1–2: Keine Klammern/Brüche.  
Schritt 3: 2x subtrahieren → 3x − 3 = 9.  
Schritt 4: +3 addieren → 3x = 12.  
Schritt 5: durch 3 teilen → **x = 4**.  
Schritt 6: Probe: 5(4) − 3 = 17 und 2(4) + 9 = 17 ✓

Gleichungen mit Brüchen: Mit dem Hauptnenner (kgV aller Nenner) multiplizieren, um Brüche zu eliminieren. Beispiel: x/3 + x/4 = 7. Multipliziere mit 12: 4x + 3x = 84, also 7x = 84, x = 12.

Gleichungen mit Klammern: Zuerst ausmultiplizieren (Distributivgesetz), dann wie gewohnt vorgehen. Beispiel: 3(2x − 4) = 2(x + 5) ergibt 6x − 12 = 2x + 10, dann 4x = 22, x = 5,5.

> **Merke:** Schema für lineare Gleichungen: (1) Klammern ausmultiplizieren, (2) Brüche durch HN-Multiplikation eliminieren, (3) x-Terme auf eine Seite, Zahlen auf die andere, (4) durch Koeffizient dividieren, (5) Probe einsetzen.

## Gleichungssysteme mit zwei Unbekannten

Ein lineares Gleichungssystem mit zwei Gleichungen und zwei Unbekannten (x, y) hat im Allgemeinen genau eine Lösung.

Substitutionsverfahren (Einsetzmethode): Eine Gleichung nach einer Variablen auflösen, Ergebnis einsetzen.

Beispiel: (I) x + y = 10 und (II) 3x − y = 6. Aus (I): y = 10 − x. Einsetzen in (II): 3x − (10 − x) = 6, also 4x = 16, x = 4. Dann y = 10 − 4 = 6.

Additionsverfahren: Die Gleichungen mit Faktoren multiplizieren, sodass eine Variable eliminiert wird.

Beispiel: (I) 2x + 3y = 12 und (II) 4x − y = 10. Multipliziere (II) mit 3: 12x − 3y = 30. Addiere mit (I): 14x = 42, x = 3. Einsetzen: 2(3) + 3y = 12, y = 2.

> **Merke:** Substitution eignet sich, wenn eine Variable Koeffizient ±1 hat. Addition/Elimination eignet sich, wenn sich Koeffizienten durch Multiplikation leicht aufheben lassen. Immer Probe durch Einsetzen in BEIDE Originalgleichungen!

## Quadratische Gleichungen (Kurzüberblick)

> **Vertiefung:** Ausführliche Behandlung inkl. binomischer Formeln, pq-Formel und Anwendungen im UK **Quadratische Gleichungen und binomische Formeln** (ma-2-03). Hier: Kurzüberblick für den Zusammenhang mit linearen Gleichungen und Ungleichungen.

Eine quadratische Gleichung hat die Normalform ax² + bx + c = 0 (a ungleich null). Die allgemeine Lösungsformel (Mitternachtsformel, auch abc-Formel genannt) lautet:

x = (−b +/- Wurzel aus (b² − 4ac)) / (2a)

Der Ausdruck D = b² − 4ac heißt **Diskriminante** (lat. „Unterscheider" -- entscheidet über Lösungsanzahl):
- D > 0: zwei verschiedene reelle Lösungen
- D = 0: genau eine Lösung (Doppellösung): x = − b / (2a)
- D < 0: keine reelle Lösung

Beispiel: 2x² − 5x + 3 = 0. a = 2, b = − 5, c = 3. D = 25 − 24 = 1. x = (5 +/- 1) / 4. Also x1 = 6/4 = 1,5 und x2 = 4/4 = 1.

Faktorisierung: Wenn Lösungen ganze Zahlen sind, kann man faktorisieren. Beispiel: x² − 7x + 12 = 0. Zwei Zahlen mit Summe 7 und Produkt 12 sind 3 und 4. Also (x − 3)(x − 4) = 0, Lösungen x1 = 3, x2 = 4.

Quadratisches Ergänzen: x² + px + q = 0 wird zu (x + p/2)² = (p/2)² − q, woraus x = − p/2 +/- Wurzel aus ((p/2)² − q).

> **Merke:** Diskriminante D = b² − 4ac: D > 0 → zwei reelle Lösungen, D = 0 → eine Doppellösung (x = −b/2a), D < 0 → keine reelle Lösung. Mitternachtsformel: x = (−b ± √D) / (2a).

## Ungleichungen

**Idee:** Ungleichungen (A < B, A ≤ B, …) werden wie Gleichungen umgeformt — **gleiche Operation auf beiden Seiten** — mit einer **kritischen Ausnahme:** Multiplizierst oder dividierst du mit einer **negativen** Zahl, dreht sich das Relationszeichen um, weil die Anordnung auf der Zahlengeraden sich umkehrt.

**Verfahren:** Wie bei Gleichungen: Terme sortieren, Variable isolieren. **Vor Division/Multiplikation prüfen:** Steht da eine **negative** Zahl? → Dann < ↔ > und ≤ ↔ ≥ **umkehren**. Bei positiven Zahlen kein Umdrehen.

**Typische Fallen:** Nach Division durch −3 das Zeichen vergessen umzudrehen (z. B. −3x > 6 fälschlich zu x > −2 statt x < −2). Doppelte Ungleichung: Operation auf **alle drei** Teile anwenden.

---

Ungleichungen verwenden statt = eines der Zeichen <, >, ≤, ≥. Die Umformungsregeln sind fast identisch zu Gleichungen, mit einer entscheidenden Ausnahme:

Bei Multiplikation oder Division mit einer negativen Zahl kehrt sich das Ungleichungszeichen um!

Beispiel: − 3x + 6 > 12. Subtrahiere 6: − 3x > 6. Dividiere durch − 3 (Vorzeichen dreht um!): x < − 2.

Doppelte Ungleichungen: Alle Operationen auf alle drei Teile anwenden. Beispiel: 1 ≤ 2x − 3 < 7. Addiere 3 überall: 4 ≤ 2x < 10. Dividiere durch 2: 2 ≤ x < 5. Lösungsmenge: [2, 5).

> **Merke:** Ungleichungs-Falle: Bei Multiplikation/Division mit einer NEGATIVEN Zahl dreht sich das Ungleichungszeichen um! Aus < wird >, aus ≥ wird ≤. Positive Zahlen → kein Umdrehen.

## Klinische Anwendung: Dosierungsberechnungen

In der Klinik treten lineare Gleichungen bei nahezu jeder Dosierungsaufgabe auf.

Gesamtdosis [mg] = Dosierung [mg/kg] × Körpergewicht [kg].

Für ein Medikament mit 5 mg/kg Dosis und einem 72-kg-Patienten: D = 5 × 72 = 360 mg.

Liegt das Medikament als Lösung vor: V [mL] = D [mg] / c [mg/mL]. Für 360 mg bei c = 4 mg/mL: V = 360 / 4 = 90 mL.

Die Verdünnungsformel c1 × V1 = c2 × V2 ist ebenfalls eine lineare Gleichung. Beispiel: Stammlösung c1 = 20 mg/mL, Gebrauchslösung c2 = 5 mg/mL mit V2 = 100 mL. V1 = c2 × V2 / c1 = 5 × 100 / 20 = 25 mL Stammlösung, aufgefüllt auf 100 mL.

## Rechenbeispiele

**Beispiel 1 — Infusionsrate Propofol (Gleichungssystem):**
Propofol-Dosis: 6 mg/kg/h, Patient 80 kg. Stammlösung: 10 mg/mL. Schritt 1: Dosis/h = 6 × 80 = 480 mg/h. Schritt 2: V = 480 / 10 = **48 mL/h**. Tropfgeschwindigkeit bei 20 Tropfen/mL: 48 × 20 / 60 = **16 Tropfen/min**.

**Beispiel 2 — Quadratische Gleichung in der Pharmakokinetik:**
Wirkstoffkonzentration c(t) = − 2t² + 20t (in mg/L, t in Stunden). Maximale Konzentration: t_max = − b/(2a) = − 20/(2 × (−2)) = **5 h**. c_max = − 2 × 25 + 20 × 5 = **50 mg/L**. Scheitelpunkt der Parabel bestimmt optimale Dosierungszeit.

**Beispiel 3 — Gleichungssystem: Mischung zweier Infusionslösungen:**
Lösung A: 5% Glucose, Lösung B: 20% Glucose. Ziel: 500 mL einer 8%-Lösung. System: V_A + V_B = 500 und 0,05 × V_A + 0,20 × V_B = 0,08 × 500 = 40. Substitution: V_A = 500 − V_B. Einsetzen: 0,05 × (500 − V_B) + 0,20 × V_B = 40. 25 − 0,05 V_B + 0,20 V_B = 40. 0,15 V_B = 15. V_B = **100 mL**, V_A = **400 mL**.`,
      lernziele: [
        "Lineare Gleichungen durch systematische Umformung nach einer Variablen auflösen und die Lösung mit einer Probe überprüfen",
        "Lineare Gleichungssysteme mit zwei Unbekannten mithilfe des Substitutions- und des Additionsverfahrens lösen",
        "Quadratische Gleichungen mit der allgemeinen Lösungsformel, durch Faktorisierung und durch Vieta-Beziehungen lösen sowie die Diskriminante interpretieren",
        "Ungleichungen korrekt umformen und dabei die Vorzeichenregel bei Multiplikation und Division mit negativen Zahlen beachten",
        "Klinische Dosierungs- und Verdünnungsaufgaben als lineare Gleichungen formulieren und lösen",
      ],
      sections: [
        {
          heading: "Lineare Gleichungen — Umformungsregeln und Strategie",
          text: "Das Grundprinzip: Was man auf einer Seite tut, muss man auf der anderen auch tun. Die vier erlaubten Basisoperationen sind Addition, Subtraktion, Multiplikation und Division mit derselben Zahl (Division niemals durch null). Bei Gleichungen mit Klammern zuerst ausmultiplizieren (Distributivgesetz); bei Gleichungen mit Brüchen zuerst mit dem Hauptnenner multiplizieren. Nach jeder Umformung empfiehlt sich eine Probe durch Einsetzen. In der Medizin erscheinen lineare Gleichungen bei der Berechnung der Infusionsrate (V = c × t), der Verdünnungsformel (c1V1 = c2V2) oder der Dosierungsformel (Dosis = Konzentration × Körpergewicht).",
          merksatz:
            "Was links passiert, passiert auch rechts — die goldene Regel der Gleichungsumformung. Probe nie vergessen!",
        },
        {
          heading: "Quadratische Gleichungen und die Diskriminante",
          text: "Die Lösungsformel x = (−b +/- Wurzel aus D) / (2a) ist das Universalwerkzeug für quadratische Gleichungen. Die Diskriminante D = b² − 4ac gibt vor der Rechnung Auskunft: D > 0 bedeutet zwei Lösungen, D = 0 bedeutet eine Doppellösung, D < 0 bedeutet keine reelle Lösung. Bei einfachen Koeffizienten ist das Faktorisieren via Vieta oft schneller. Quadratisches Ergänzen liefert zusätzlich den Scheitelpunkt der Parabel.",
          merksatz:
            "Diskriminante D = b² − 4ac: D>0 ergibt 2 Lösungen, D=0 eine Lösung, D<0 keine reelle Lösung.",
        },
        {
          heading: "Ungleichungen — die Vorzeichenfalle",
          text: "Ungleichungen funktionieren wie Gleichungen, mit einer kritischen Ausnahme: Bei Multiplikation oder Division mit einer negativen Zahl dreht sich das Ungleichungszeichen um. Das ist die häufigste Fehlerquelle. Bei doppelten Ungleichungen müssen alle Operationen auf alle drei Teile angewendet werden. Die Lösungsmenge einer Ungleichung ist ein Intervall, kein einzelner Punkt.",
          merksatz:
            "Multiplikation/Division mit negativer Zahl: Ungleichungszeichen umkehren! Aus < wird >, aus ≥ wird ≤.",
        },
        {
          heading: "Gleichungssysteme — Substitution vs. Addition",
          text: "Beim Substitutionsverfahren wird eine Gleichung nach einer Variablen aufgelöst und eingesetzt — geeignet, wenn eine Variable Koeffizient 1 oder − 1 hat. Beim Additionsverfahren werden Gleichungen mit Faktoren multipliziert, sodass eine Variable bei Addition eliminiert wird. Beide Verfahren liefern dasselbe Ergebnis. In der Medizin erscheinen Systeme z.B. bei der Berechnung gemischter Lösungen oder bei der Bestimmung zweier unbekannter Parameter aus zwei Messwerten.",
          merksatz:
            "Substitution: wenn eine Variable leicht isolierbar ist. Addition: wenn Koeffizienten sich leicht eliminieren lassen.",
        },
      ],
      merksätze: [
        "Was links passiert, passiert auch rechts — Grundregel jeder Gleichungsumformung.",
        "Bei Division/Multiplikation mit negativer Zahl: Ungleichungszeichen umkehren!",
        "Diskriminante D = b² − 4ac bestimmt die Anzahl reeller Lösungen.",
        "Lösungsformel: x = (−b +/- Wurzel aus D) / (2a) — Mitternachtsformel.",
        "Vieta: Summe x1+x2 = − b/a und Produkt x1 × x2 = c/a.",
        "Probe immer durchführen: Lösung einsetzen und Gleichung überprüfen.",
        "Gleichungssysteme: Substitution oder Addition führen zum selben Ergebnis.",
        "Verdünnungsformel: c1 × V1 = c2 × V2 ist eine lineare Gleichung.",
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
      title: "Potenz- und Wurzelgesetze",
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
        "Wurzelziehen",
      ],
      content: `Potenzen komprimieren Multiplikation. Wurzeln sind deren Umkehrung. Logarithmen übersetzen zwischen Potenz und Exponent. Wer diese drei Werkzeuge beherrscht, kann Halbwertszeiten berechnen, pH-Werte interpretieren und wissenschaftliche Notation lesen — alles Kernkompetenzen am MedAT.

---

## Potenzen multiplizieren und dividieren — Faktoren zählen

Eine Potenz ist nichts anderes als wiederholte Multiplikation: a hoch 3 = a × a × a (drei Faktoren a). Wenn du jetzt a hoch 3 × a hoch 2 rechnest, schreibst du die Faktoren hintereinander:

(a × a × a) × (a × a) = a × a × a × a × a = a hoch 5

Du **zählst** einfach die Faktoren zusammen: 3 + 2 = 5. Daraus folgt die Regel direkt:

**a hoch n × a hoch m = a hoch (n+m)** — Exponenten addieren, weil du Faktoren aneinanderreihst.

Konkretes Beispiel: 2 hoch 4 × 2 hoch 3 = (2×2×2×2) × (2×2×2) = 2 hoch 7 = 128.

Bei der Division funktioniert es genauso — du **kürzt** gemeinsame Faktoren heraus:

a hoch 5 / a hoch 2 = (a×a×a×a×a) / (a×a) = a×a×a = a hoch 3

**a hoch n / a hoch m = a hoch (n−m)** — Exponenten subtrahieren, weil du Faktoren wegnimmst.

> **Merke:** Gleiche Basis → nur die Exponenten verrechnen. Multiplikation: addieren. Division: subtrahieren. Das sind die beiden Grundregeln, aus denen sich alle anderen ableiten.

---

## Potenz einer Potenz — multiplizieren, nicht addieren!

Was bedeutet (a hoch 3) hoch 2? Du nimmst den Ausdruck "a × a × a" und multiplizierst ihn **zweimal** mit sich selbst:

(a × a × a) × (a × a × a) = a hoch 6

Das sind 3 × 2 = 6 Faktoren. Die Exponenten werden **multipliziert**, nicht addiert:

**(a hoch n) hoch m = a hoch (n × m)**

Das ist der häufigste Fehler am MedAT: Viele schreiben a hoch (n+m) statt a hoch (n×m). Der Unterschied: Bei a hoch n × a hoch m stehen zwei **separate** Potenzen, deren Faktoren du aneinanderreihst (addieren). Bei (a hoch n) hoch m **potenzierst du eine Potenz** (multiplizieren).

Beispiel: (3 hoch 2) hoch 4 = 3 hoch 8 = 6561, **nicht** 3 hoch 6!

---

## Potenzen von Produkten und Summen — hier lauert die Falle

Ein Produkt potenzieren geht Term für Term: **(a × b) hoch n = a hoch n × b hoch n.** Warum? (a × b) hoch 3 = (ab)(ab)(ab) = (a·a·a)(b·b·b) = a³ × b³.

Beispiel: (2 × 5) hoch 3 = 2³ × 5³ = 8 × 125 = 1000 = 10³. Analog: **(a/b) hoch n = a hoch n / b hoch n.**

Aber für **Summen gilt das nicht**: (a+b) hoch n ≠ a hoch n + b hoch n!

Gegenbeispiel: (2+3)² = 5² = 25, aber 2² + 3² = 4 + 9 = 13 ≠ 25. Wer Summen potenziert, muss die binomischen Formeln verwenden (→ ma-2-03).

---

## Spezialfälle — warum a hoch 0 = 1 sein muss

Die folgenden Erweiterungen sind keine willkürlichen Definitionen. Sie ergeben sich **zwingend**, wenn die Grundregeln widerspruchsfrei bleiben sollen.

**Nullter Exponent:** a hoch n / a hoch n = a hoch (n−n) = a hoch 0. Gleichzeitig ist jede Zahl durch sich selbst geteilt gleich 1. Also: **a hoch 0 = 1** (für a ≠ 0).

**Negativer Exponent:** a hoch 3 / a hoch 5 = a hoch (3−5) = a hoch (−2). Gleichzeitig: a³/a⁵ = 1/a². Also: **a hoch (−n) = 1/a hoch n** — der negative Exponent erzeugt den Kehrwert. Achtung: a hoch (−3) = 1/8, **nicht** −8!

**Gebrochener Exponent:** Was muss a hoch (1/2) sein, damit (a hoch (1/2))² = a hoch 1 = a gilt? Die Antwort: die Quadratwurzel! Allgemein: **a hoch (1/n) = n-te Wurzel aus a**, und **a hoch (m/n) = (n-te Wurzel aus a) hoch m**. Der Nenner gibt den Wurzelindex, der Zähler den Exponenten.

Beispiel: 8 hoch (2/3) = (Kubikwurzel aus 8) hoch 2 = 2² = 4.

> **Merke:** Drei klassische Fallen: (1) (aⁿ)ᵐ = aⁿˣᵐ, NICHT aⁿ⁺ᵐ. (2) a⁻ⁿ = 1/aⁿ, NICHT −aⁿ. (3) (a+b)ⁿ ≠ aⁿ+bⁿ — Potenzgesetz gilt NUR für Produkte!

---

## Wurzelgesetze — Potenzen mit gebrochenem Exponenten

Da Wurzeln spezielle Potenzen sind (n-te Wurzel aus a = a hoch 1/n), folgen die Wurzelgesetze direkt aus den Potenzgesetzen.

**Produktregel:** Wurzel aus (a × b) = Wurzel aus a × Wurzel aus b. Das folgt aus (ab)^(1/2) = a^(1/2) × b^(1/2). Anwendung: Wurzel aus 72 = Wurzel aus (36 × 2) = 6 × Wurzel aus 2 — du suchst den größten quadratischen Teiler.

**Quotientenregel:** Wurzel aus (a/b) = Wurzel aus a / Wurzel aus b. Beispiel: Wurzel aus (9/16) = 3/4.

**Die verbotene Summenregel:** √(a+b) ≠ √a + √b! Konkretes Gegenbeispiel: √(9+16) = √25 = **5**, aber √9 + √16 = 3 + 4 = **7** ≠ 5. Dieser Fehler ist so häufig, dass er am MedAT gezielt abgefragt wird.

**Wurzel und Betrag:** √(a²) = |a|, nicht ±a. Die Quadratwurzel ist **immer** nicht-negativ: √9 = 3 (nicht ±3).

**Rationalisierung:** Wurzeln im Nenner eliminierst du durch Erweitern mit der konjugierten Form (dritte binomische Formel): 1/(√a − √b) × (√a + √b)/(√a + √b) = (√a + √b)/(a − b).

> **Merke:** Erlaubt: √(a×b) = √a × √b. Verboten: √(a+b) ≠ √a + √b. Und: √(a²) = |a| (immer positiv, nie ±a).

---

## Logarithmen — die Frage nach dem Exponenten

Der Logarithmus beantwortet eine einzige Frage: **„Welchen Exponenten brauche ich?"**

Beispiel: 10 hoch **?** = 1000. Antwort: 3, denn 10³ = 1000. Schreibweise: lg(1000) = 3.

Allgemein: **log_a(x) = y** bedeutet **a hoch y = x**. Der Logarithmus ist die Umkehrfunktion des Potenzierens — er „entpackt" den Exponenten.

> **Vertiefung:** Ausführliche Behandlung von Logarithmengesetzen, Henderson-Hasselbalch-Gleichung, Semilog-Plots und Basiswechsel findest du im UK **Logarithmusfunktionen** (ma-5-04).

Die drei Rechenregeln folgen direkt aus den Potenzgesetzen:
- **log(a×b) = log a + log b** — Multiplikation → Exponenten addieren
- **log(a/b) = log a − log b** — Division → Exponenten subtrahieren
- **log(aⁿ) = n × log a** — Potenz → Exponent als Faktor herausziehen

Basiswechsel: log_a(x) = ln(x) / ln(a) — damit rechnest du jeden Logarithmus in ln oder lg um.

---

## Halbwertszeit — Potenzen in der Medizin

Warum sind Potenzen medizinisch relevant? Weil der Abbau vieler Medikamente einer Exponentialfunktion folgt:

**N(t) = N₀ × (1/2) hoch (t / T½)**

Konkretes Beispiel — Paracetamol mit T½ = 2 h und Anfangsdosis 1000 mg: Nach 8 Stunden sind 8/2 = 4 Halbwertszeiten vergangen. Restmenge = 1000 × (1/2)⁴ = 1000/16 = **62,5 mg**.

Faustregel: Nach 5 Halbwertszeiten sind noch (1/2)⁵ ≈ 3 % vorhanden — das Medikament gilt als ausgewaschen. Zerfallskonstante: λ = ln(2)/T½ ≈ 0,693/T½.

**pH = − lg[H⁺]:** Auch der pH-Wert basiert auf Potenzen. Pro pH-Einheit ändert sich die H⁺-Konzentration um **Faktor 10**. Normal arteriell: pH 7,35–7,45.

> **Merke:** Nach n Halbwertszeiten: (1/2)ⁿ der Ausgangsmenge. 5 HWZ ≈ 3 %. λ = ln(2)/T½. pH = −lg[H⁺]: eine pH-Einheit = Faktor 10.

---

## Zehnerpotenzen und wissenschaftliche Notation

Sehr große und sehr kleine Zahlen werden als Produkt einer Zahl zwischen 1 und 10 und einer Zehnerpotenz geschrieben: **a × 10 hoch n** (1 ≤ a < 10).

Medizinische Beispiele:
- Avogadro-Konstante: 6,022 × 10²³ pro Mol
- Elementarladung: 1,602 × 10⁻¹⁹ C
- Erythrozytendurchmesser: ca. 8 µm = 8 × 10⁻⁶ m

Rechenregel: (a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10^(n+m). Beispiel: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷.

---

## Rechenbeispiele

**Beispiel 1 — Dezibel-Berechnung (Logarithmus):**
Schallintensität verdoppelt sich: ΔL = 10 × lg(I₂/I₁) = 10 × lg(2) = 10 × 0,301 = **3,01 dB**. Verdopplung = +3 dB. Umgekehrt: 20 dB Unterschied = Faktor 10^(20/10) = 10² = **100-fache Intensität**.

**Beispiel 2 — pH-Berechnung bei Azidose:**
Blut-pH 7,40: [H⁺] = 10⁻⁷·⁴⁰ = **3,98 × 10⁻⁸ mol/L**. Azidose pH 7,10: [H⁺] = 10⁻⁷·¹⁰ = **7,94 × 10⁻⁸ mol/L**. Die H⁺-Konzentration verdoppelt sich bei pH-Abfall um nur 0,30 Einheiten (da lg 2 ≈ 0,30). Kleine pH-Änderung = große Konzentrationsänderung.

**Beispiel 3 — Wurzelfalle erkennen:**
Ist √(a²+b²) = a + b? Probe mit a = 3, b = 4: √(9+16) = √25 = 5, aber 3 + 4 = 7 ≠ 5. Also nein — die Summenregel ist **verboten**. Korrekt: √(a²+b²) lässt sich nicht weiter vereinfachen.`,
      lernziele: [
        "Alle acht Potenzgesetze sicher anwenden, insbesondere negative und gebrochene Exponenten korrekt handhaben",
        "Wurzeln vereinfachen durch Erkennen quadratischer Teiler und Anwendung der Produktregel",
        "Halbwertszeit-Berechnungen mit Potenzen durchführen (Pharmakokinetik, Radioaktivität)",
        "Zahlen in wissenschaftlicher Notation schreiben und mit Zehnerpotenzen rechnen",
      ],
      sections: [
        {
          heading: "Potenzgesetze — die acht Grundregeln mit Tücken",
          text: "Die drei häufigsten Fehler: Erstens wird (a hoch n) hoch m = a hoch (n × m) mit a hoch (n+m) verwechselt — es ist Multiplikation, nicht Addition. Zweitens gilt (a+b) hoch n ungleich a hoch n + b hoch n — das Potenzgesetz gilt nur für Produkte, nicht für Summen. Drittens bedeutet a hoch (−n) nicht − a hoch n, sondern 1 / a hoch n. Strategie: Bei jeder Umformung die Basis identifizieren und prüfen, welches Gesetz anwendbar ist.",
          merksatz:
            "a hoch n × a hoch m = a hoch (n+m); (a hoch n) hoch m = a hoch (n × m) — addieren vs. multiplizieren der Exponenten nicht verwechseln!",
        },
        {
          heading: "Gebrochene Exponenten und Wurzeln vereinfachen",
          text: "a hoch (m/n) = (n-te Wurzel aus a) hoch m — der Nenner des Exponenten ist der Wurzelindex, der Zähler ist der Exponent. Beispiel: 27 hoch (2/3) = (Kubikwurzel aus 27) hoch 2 = 3 hoch 2 = 9. Wurzeln vereinfachen: Größten quadratischen Teiler ausklammern. Wurzel aus 200 = Wurzel aus (100 × 2) = 10 × Wurzel aus 2. Wichtige Verbote: Die Wurzel einer Summe darf nicht aufgeteilt werden. Wurzel aus (a+b) ist ungleich Wurzel aus a + Wurzel aus b!",
          merksatz:
            "a hoch (m/n) = (n-te Wurzel aus a) hoch m. Wurzelregel: Wurzel aus (a × b) = Wurzel aus a × Wurzel aus b erlaubt. Wurzel aus (a+b) ungleich Wurzel aus a + Wurzel aus b verboten!",
        },
        {
          heading: "Halbwertszeit — Potenzen in der Pharmakokinetik",
          text: "N(t) = N0 × (1/2) hoch (t / T(1/2)) beschreibt radioaktiven Zerfall und Medikamentenabbau 1. Ordnung. Nach n Halbwertszeiten sind noch (1/2) hoch n der Ausgangsmenge vorhanden. Nach 5 T(1/2): noch ungefähr 3%; nach 10 T(1/2): unter 0,1%. Klinische Faustregel: Ein Medikament gilt nach 5 Halbwertszeiten als ausgewaschen. Logarithmengesetze, pH und Henderson-Hasselbalch → siehe UK Logarithmusfunktionen (ma-5-04).",
          merksatz:
            "Nach n Halbwertszeiten: (1/2) hoch n der Ausgangsmenge. Nach 5 T(1/2): ungefähr 3%. Lambda = ln(2) / T(1/2) ungefähr 0,693 / T(1/2).",
        },
      ],
      merksätze: [
        "a hoch n × a hoch m = a hoch (n+m); a hoch n / a hoch m = a hoch (n − m); (a hoch n) hoch m = a hoch (n × m).",
        "a hoch 0 = 1 (für a ≠ 0); a hoch (−n) = 1 / a hoch n; a hoch (m/n) = (n-te Wurzel aus a) hoch m.",
        "(a × b) hoch n = a hoch n × b hoch n, aber (a+b) hoch n ungleich a hoch n + b hoch n!",
        "Wurzel aus (a × b) = Wurzel aus a × Wurzel aus b; Wurzel aus (a hoch 2) = Betrag von a.",
        "log(a × b) = log a + log b; log(a/b) = log a − log b; log(a hoch n) = n × log a.",
        "pH = − lg[H+]; pro pH-Einheit ändert sich [H+] um Faktor 10.",
        "Nach n Halbwertszeiten: (1/2) hoch n der Ausgangsmenge vorhanden.",
        "Halbwertszeit T(1/2) = ln(2) / lambda ungefähr 0,693 / lambda; lambda = Zerfallskonstante.",
        "Wissenschaftliche Notation: a × 10 hoch n mit 1 ≤ a kleiner 10.",
        "ln(x) ungefähr 2,303 × lg(x); ln(2) ungefähr 0,693; ln(10) ungefähr 2,303.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient erhält eine Chemotherapie mit einem Wirkstoff der Halbwertszeit 12 Stunden. Die Initialdosis beträgt 800 mg. (a) Wie viel mg sind nach 36 Stunden noch im Körper? (b) Nach wie vielen Stunden ist die Konzentration auf unter 50 mg gefallen? (c) Wie hängen Halbwertszeit und Zerfallskonstante lambda zusammen?",
        answer:
          "Teil a: 36 Stunden entsprechen 36 / 12 = 3 Halbwertszeiten. N(36) = 800 × (1/2) hoch 3 = 800 × 1/8 = 100 mg. Nach 36 Stunden sind noch 100 mg vorhanden. Teil b: Gesucht ist t, sodass N(t) < 50 mg. Also 800 × (1/2) hoch (t/12) < 50. Dividiere durch 800: (1/2) hoch (t/12) < 1/16. Da 1/16 = (1/2) hoch 4, folgt t/12 > 4, also t > 48 Stunden. Logarithmisch: (t/12) × ln(1/2) < ln(1/16), also − (t/12) × ln(2) < − 4 × ln(2), also t/12 > 4. Genau bei t = 48 Stunden sind 800 × (1/2) hoch 4 = 50 mg vorhanden, also fällt die Konzentration nach mehr als 48 Stunden unter 50 mg. Teil c: T(1/2) = ln(2) / lambda ungefähr 0,693 / lambda. Hergeleitet aus N(T(1/2)) = N0/2 = N0 × e hoch (−lambda × T(1/2)). Kürze N0 und logarithmiere: − lambda × T(1/2) = ln(1/2) = − ln(2). Damit T(1/2) = ln(2) / lambda.",
      },
      klinischerBezug:
        "Pharmakokinetik basiert auf Exponentialfunktionen: Viele Medikamente werden nach Kinetik 1. Ordnung abgebaut. Die Halbwertszeit bestimmt das Dosierungsintervall — Aspirin mit T(1/2) ungefähr 15 min, Amoxicillin mit T(1/2) ungefähr 1 h (dreimal täglich), Digoxin mit T(1/2) ungefähr 36 h (einmal täglich), Amiodaron mit T(1/2) ungefähr 40 bis 55 Tage (erfordert Loading-Dose-Regime). pH = − lg[H+]: Der arterielle pH 7,35 bis 7,45 entspricht H+-Konzentrationen von 35 bis 45 nmol/L. Eine Azidose auf pH 7,0 bedeutet eine Verdopplung der H+-Konzentration — klinisch lebensbedrohlich.",
      selfTest: [
        {
          question: "Was ergibt 3 hoch 4 × 3 hoch (−2)?",
          options: ["9", "81", "27", "3", "729"],
          correctIndex: 0,
          explanation:
            "3 hoch 4 × 3 hoch (−2) = 3 hoch (4 + (−2)) = 3 hoch 2 = 9. Gleiche Basis: Exponenten addieren. 4 + (−2) = 2. 3 hoch 2 = 9. Alternativ: 3 hoch 4 = 81; 3 hoch (−2) = 1/9. 81 × 1/9 = 9. Beide Wege liefern dasselbe Ergebnis. Die Regel lautet: Gleiche Basis × gleiche Basis ergibt gleiche Basis mit Exponentensumme.",
          hints: [
            "Gleiche Basis: Exponenten addieren. 4 + (−2) = ?",
            "3 hoch (4 − 2) = 3 hoch 2 = ?",
          ],
          difficulty: 1,
          tags: ["potenzgesetze", "exponenten", "algebra"],
        },
        {
          question: "Was ist 16 hoch (3/4)?",
          options: ["8", "12", "4", "32", "64"],
          correctIndex: 0,
          explanation:
            "16 hoch (3/4) = (vierte Wurzel aus 16) hoch 3 = 2 hoch 3 = 8. Der Nenner 4 ist der Wurzelindex, der Zähler 3 der Exponent. Vierte Wurzel aus 16 = 2, weil 2 hoch 4 = 16. Dann 2 hoch 3 = 8. Alternativ: 16 hoch (3/4) = (16 hoch 3) hoch (1/4) = 4096 hoch (1/4) = 8 (da 8 hoch 4 = 4096). Beide Wege liefern dasselbe Ergebnis.",
          hints: [
            "a hoch (m/n) = (n-te Wurzel aus a) hoch m. Hier: (vierte Wurzel aus 16) hoch 3.",
            "Vierte Wurzel aus 16 = 2, da 2 hoch 4 = 16. Dann 2 hoch 3 = ?",
          ],
          difficulty: 3,
          tags: ["potenzgesetze", "gebrochener-exponent", "wurzel"],
        },
        {
          question: "Was ergibt lg(1000) − lg(10)?",
          options: ["2", "100", "3", "1", "10"],
          correctIndex: 0,
          explanation:
            "lg(1000) = lg(10 hoch 3) = 3 und lg(10) = lg(10 hoch 1) = 1. Differenz: 3 − 1 = 2. Alternativ mit Quotientenregel: lg(1000) − lg(10) = lg(1000/10) = lg(100) = lg(10 hoch 2) = 2. Beide Wege liefern 2. Die Quotientenregel des Logarithmus sagt: Der Logarithmus eines Quotienten ist die Differenz der Logarithmen.",
          hints: [
            "lg(10 hoch n) = n. Was sind die Exponenten für 1000 und 10?",
            "Oder: Quotientenregel: lg(1000) − lg(10) = lg(1000/10) = lg(100).",
          ],
          difficulty: 1,
          tags: ["logarithmus", "lg", "rechenregeln"],
        },
        {
          question:
            "Ein Medikament hat T(1/2) = 8 h. Nach 24 h sind noch wie viel Prozent der Ausgangsdosis vorhanden?",
          options: ["12,5%", "25%", "50%", "6,25%", "33,3%"],
          correctIndex: 0,
          explanation:
            "Anzahl Halbwertszeiten: 24 h / 8 h = 3. Verbleibender Anteil: (1/2) hoch 3 = 1/8 = 12,5%. Schrittweise: 100% nach 1 T(1/2) ergibt 50%; nach 2 T(1/2) ergibt 25%; nach 3 T(1/2) ergibt 12,5%. Nach jeder Halbwertszeit halbiert sich die Konzentration. Dies ist das Grundprinzip der Pharmakokinetik 1. Ordnung und des radioaktiven Zerfalls.",
          hints: [
            "Wie viele Halbwertszeiten passen in 24 h?",
            "Nach 3 T(1/2): (1/2) hoch 3 = 1/8 = ?%",
          ],
          difficulty: 2,
          tags: ["halbwertszeit", "pharmakokinetik", "exponentialfunktion"],
        },
        {
          question: "Welchen pH hat eine Lösung mit [H+] = 10 hoch (−5) mol/L?",
          options: ["5", "−5", "0,00001", "10", "100000"],
          correctIndex: 0,
          explanation:
            "pH = − lg[H+] = − lg(10 hoch (−5)) = − (−5) = 5. Die Formel pH = − lg[H+] gibt direkt den pH-Wert. Da [H+] = 10 hoch (−5), ist lg(10 hoch (−5)) = − 5, und pH = − (−5) = 5. Dieser pH-Wert entspricht einer sauren Lösung (pH < 7). Normal arteriell: pH 7,35 bis 7,45.",
          hints: [
            "pH = − lg[H+]. Hier [H+] = 10 hoch (−5).",
            "lg(10 hoch (−5)) = − 5. Also pH = − (−5) = ?",
          ],
          difficulty: 2,
          tags: ["ph-wert", "logarithmus", "säure-base"],
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
      content: `Terme umformen ist das Werkzeug für alles Weitere — Gleichungen, Funktionen, Physikformeln. Wer sicher umformt, spart Zeit und vermeidet Fehler. Die drei Rechengesetze, das Ausklammern und der Betrag bilden zusammen das Handwerkszeug, das du bei fast jeder MedAT-Rechenaufgabe brauchst.

**Hinweis:** Grundlagen zu Bruchrechnung, Prozentrechnung und Dreisatz findest du in den Grundlagen-Kapiteln (ma-grund-01 bis ma-grund-03).

---

## Das Distributivgesetz — das wichtigste der drei Gesetze

Bevor wir alle drei Rechengesetze sehen, beginnen wir mit dem einen, das die meisten Fehler verursacht und gleichzeitig am nützlichsten ist: dem **Distributivgesetz**.

**a × (b + c) = a × b + a × c**

Warum funktioniert das? Stell dir ein Rechteck vor mit Breite a und Höhe (b + c). Die Gesamtfläche ist a × (b + c). Dasselbe Rechteck kannst du in zwei Teilrechtecke zerlegen: eines mit Höhe b (Fläche a × b) und eines mit Höhe c (Fläche a × c). Die Gesamtfläche ist also auch a × b + a × c. Die Gleichheit folgt geometrisch — die Fläche ändert sich nicht.

**Vorwärts** = Ausmultiplizieren: 3(x + 4) = 3x + 12.
**Rückwärts** = Ausklammern: 3x + 12 = 3(x + 4).

Beide Richtungen brauchst du ständig — Ausmultiplizieren beim Lösen von Gleichungen, Ausklammern beim Vereinfachen von Termen.

Die anderen beiden Gesetze sind weniger fehleranfällig, aber trotzdem wichtig:

**Kommutativgesetz (Vertauschung):** a + b = b + a und a × b = b × a — die Reihenfolge ist egal. Gilt **nicht** für Subtraktion und Division: 5 − 3 ≠ 3 − 5 und 6/2 ≠ 2/6.

**Assoziativgesetz (Umklammerung):** (a + b) + c = a + (b + c) und (a × b) × c = a × (b × c) — die Klammersetzung ist egal. Nützlich, um günstige Rechenreihenfolgen zu wählen: 17 + 48 + 3 = 17 + 3 + 48 = 20 + 48 = 68.

> **Merke:** Distributivgesetz: a(b+c) = ab + ac — vorwärts ausmultiplizieren, rückwärts ausklammern. Kommutativ/Assoziativ gelten NUR für Addition und Multiplikation, NICHT für Subtraktion und Division!

---

## Vorzeichenregeln und die Minusklammer-Falle

**Vorzeichenregeln:** Gleiche Vorzeichen → positiv, verschiedene → negativ. Also: (+)(+) = (+), (−)(−) = (+), (+)(−) = (−), (−)(+) = (−).

**Minusklammer auflösen — der häufigste MedAT-Fehler:**

−(a + b − c) = −a − b + c

Das Minus vor der Klammer dreht **jedes** Vorzeichen um. Konkret: −(3x − 5) = −3x **+ 5**, nicht −3x − 5! Der Fehler passiert, weil man das Vorzeichen des zweiten Terms vergisst umzudrehen.

Warum? Weil −(3x − 5) eigentlich (−1) × (3x − 5) bedeutet — das Distributivgesetz in Aktion: (−1) × 3x + (−1) × (−5) = −3x + 5.

**Klammer mal Klammer:** (a + b)(c + d) = ac + ad + bc + bd — jeder Term der ersten Klammer mit jedem der zweiten (→ binomische Formeln in ma-2-03).

> **Merke:** Minus vor Klammer = Distributivgesetz mit Faktor (−1). ALLE Vorzeichen drehen sich um: −(a − b) = −a + b.

---

## Ausklammern — das Distributivgesetz rückwärts

Wenn du einen Term wie 6x + 15 siehst, erkennst du mit dem Distributivgesetz: Beide Summanden enthalten den Faktor 3. Du „ziehst" ihn heraus: 6x + 15 = 3(2x + 5). Das ist Ausklammern — die Umkehrung des Ausmultiplizierens.

**Wie findest du den gemeinsamen Faktor?**
1. **ggT der Koeffizienten:** ggT(6, 15) = 3
2. **Kleinste Potenz gemeinsamer Variablen:** Bei 4x² − 8x ist x in beiden Termen, kleinste Potenz x¹ → Faktor 4x
3. **Probe:** Rückmultiplizieren muss den Originalterm ergeben

Beispiele:
- 4x² − 8x = 4x(x − 2) — Probe: 4x × x = 4x², 4x × (−2) = −8x ✓
- 12ab + 18a²b − 6ab² = 6ab(2 + 3a − b)

**Warum ausklammern?** Es vereinfacht Brüche (gemeinsame Faktoren kürzen), macht Zusammenhänge sichtbar und ist der erste Schritt beim Faktorisieren. Medizinisches Beispiel: Gesamtkosten K = n × p + n × v = n(p + v) — sofort sieht man: Stückkosten = (p + v).

> **Merke:** Ausklammern = Distributivgesetz rückwärts. Checkliste: ggT der Koeffizienten, kleinste Variable-Potenz, Probe durch Rückmultiplizieren.

---

## Betrag — geometrisch denken

Der **Betrag** |a| gibt den Abstand von a zu Null auf der Zahlengeraden an: |5| = 5, |−3| = 3, |0| = 0. Er ist immer ≥ 0.

Formal: |a| = a falls a ≥ 0, und |a| = −a falls a < 0 (das Minus macht die negative Zahl positiv).

Die entscheidende Einsicht: **|a − b| = Abstand zwischen a und b.** |7 − 3| = 4 und |3 − 7| = 4 — egal, in welche Richtung du misst.

Rechenregeln:
- |a × b| = |a| × |b|
- |a/b| = |a| / |b| (für b ≠ 0)
- |a + b| ≤ |a| + |b| (**Dreiecksungleichung**)

---

## Betragsgleichungen — zwei Punkte auf der Zahlengeraden

Betrachte |x − 3| = 5. Was bedeutet das geometrisch? „x hat den Abstand 5 von 3." Wo auf der Zahlengeraden liegt x? An genau **zwei** Punkten: 5 Einheiten rechts von 3 (also 3 + 5 = **8**) und 5 Einheiten links von 3 (also 3 − 5 = **−2**).

Das ist der Grund, warum Betragsgleichungen immer zwei Fälle brauchen — nicht als Rechentrick, sondern weil es geometrisch zwei Richtungen gibt.

**Allgemeines Verfahren für |f(x)| = c (c ≥ 0):**
1. Fall 1: f(x) = c → lösen
2. Fall 2: f(x) = −c → lösen
3. Lösungsmengen vereinigen (für c < 0: keine Lösung, da Betrag nie negativ)

**Betragsungleichungen** folgen derselben Logik:
- |x − a| < d → x liegt **näher** als d an a → offenes Intervall (a−d, a+d)
- |x − a| > d → x liegt **weiter** als d von a → x < a−d oder x > a+d

**Klinisches Beispiel:** pH-Toleranzbereich: |pH − 7,40| ≤ 0,05 → 7,35 ≤ pH ≤ 7,45. Laborwert-Toleranz: |Messwert − S| ≤ 0,1 × S → 0,9 S ≤ Messwert ≤ 1,1 S.

> **Merke:** |x − a| = d → zwei Lösungen: x = a + d und x = a − d (geometrisch: zwei Punkte mit Abstand d von a). |x−a| < d → Intervall (a−d, a+d). |x−a| > d → Komplement.

---

## Summenzeichen Σ — Kurzschreibweise für viele Terme

Sobald du viele gleichartige Terme addieren willst, wird die Schreibweise 1 + 2 + 3 + ... + 100 unhandlich. Das **Summenzeichen** Σ (griechisch Sigma) löst das:

**Σ(i=1 bis n) aᵢ = a₁ + a₂ + ... + aₙ**

Lies es so: „Summiere aᵢ für i von 1 bis n." Beispiel: Σ(i=1 bis 4) i² = 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30.

Die wichtigste Formel dazu ist die **Gaußsche Summenformel**: Σ(i=1 bis n) i = n(n+1)/2. Gauß erkannte als Schüler: 1+100 = 101, 2+99 = 101, ..., 50+51 = 101 — das sind 50 Paare à 101 = 5050. Allgemein: n/2 Paare mit Summe (n+1).

In der Medizin begegnet dir Σ vor allem beim **Mittelwert**: x̄ = (1/n) × Σ(i=1 bis n) xᵢ — mittlerer Blutdruck, mittlere Herzfrequenz, Studiendurchschnitte.

---

## Rechenbeispiele

**Beispiel 1 — Minusklammer und Distributivgesetz:**
Vereinfache: −2(3x − 4) + 5(x + 1). Schritt 1: −6x + 8 + 5x + 5 = **−x + 13**. Probe: Für x = 3: −2(9−4) + 5(3+1) = −2(5) + 5(4) = −10 + 20 = 10. Und −3 + 13 = 10 ✓.

**Beispiel 2 — Betragsgleichung:**
|2x + 1| = 7. Fall 1: 2x + 1 = 7 → x = 3. Fall 2: 2x + 1 = −7 → x = −4. Probe: |2(3)+1| = |7| = 7 ✓; |2(−4)+1| = |−7| = 7 ✓. Lösungsmenge: {−4, 3}.

**Beispiel 3 — Gaußsche Summenformel in der Praxis:**
Ein Arzt gibt in einer Impfkampagne am 1. Tag 1, am 2. Tag 2, ..., am 20. Tag 20 Impfungen. Gesamt: Σ(i=1 bis 20) i = 20 × 21/2 = **210** Impfungen.`,
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
      content: `**Idee:** **Vektor** = Betrag + Richtung (Pfeil); **Skalar** = nur Zahl. **Betrag** |a| = √(a₁²+a₂²+a₃²). **Skalarprodukt** a·b = |a||b|cos θ → Winkel und Orthogonalität (a·b = 0). **Kreuzprodukt** a×b = Vektor ⊥ zu beiden, |a×b| = |a||b|sin θ.

**Verfahren — Schrittfolge:** (1) **Betrag:** |a| = √(a₁²+a₂²+a₃²). (2) **Addition/Subtraktion:** komponentenweise. (3) **Skalarprodukt:** a·b = a₁b₁+a₂b₂+a₃b₃; cos θ = a·b/(|a||b|); orthogonal ⇔ a·b = 0. (4) **Kreuzprodukt:** a×b steht senkrecht auf a und b; Recht-Hand-Regel.

**Typische Prüfungsfehler:** Skalarprodukt = Zahl (nicht Vektor!); Kreuzprodukt = Vektor. Orthogonal: a·b = 0 (nicht a×b = 0). Betrag: Wurzel aus Summe der Quadrate der Komponenten.

---

## Grundbegriffe





Ein Vektor **a** in 3D wird durch seine Komponenten beschrieben: **a** = (a₁, a₂, a₃). Im 2D entsprechend: **a** = (a₁, a₂).

**Betrag (Länge)** eines Vektors:
|**a**| = √(a₁² + a₂² + a₃²)

Im 2D: |**a**| = √(a₁² + a₂²).

**Einheitsvektor** (Länge 1): **â** = **a** / |**a**|. Er gibt nur die Richtung an.

**Addition und Subtraktion** (komponentenweise):
**a** + **b** = (a₁+b₁, a₂+b₂, a₃+b₃)
**a** − **b** = (a₁−b₁, a₂−b₂, a₃−b₃)

Geometrisch: Addition nach der Parallelogrammregel oder Dreiecksregel (Pfeile aneinanderhängen).

**Skalierung**: c × **a** = (c×a₁, c×a₂, c×a₃). Bei c > 0 bleibt die Richtung gleich; bei c < 0 kehrt sie sich um.

> **Merke:** Der Ortsvektor vom Punkt A zum Punkt B ist der Differenzvektor: **AB** = **b** − **a** = (b₁−a₁, b₂−a₂, b₃−a₃). Der Abstand zwischen A und B ist |**AB**|.

**Rechenbeispiel:** **a** = (3, −1, 2), **b** = (1, 4, −3). Summe: **a** + **b** = (4, 3, −1). Differenz: **a** − **b** = (2, −5, 5). Betrag von **a**: |**a**| = √(9+1+4) = √14 ≈ 3,74. Einheitsvektor: **â** = (3/√14, −1/√14, 2/√14).

## Skalarprodukt (Inneres Produkt)

Das Skalarprodukt zweier Vektoren **a** und **b**:
**a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a| × |b| × cos θ**

θ = Winkel zwischen den Vektoren.

**Bedeutung**:
- Wenn **a · b = 0**: die Vektoren sind senkrecht (θ = 90°)
- Wenn **a · b > 0**: spitzer Winkel (θ < 90°)
- Wenn **a · b < 0**: stumpfer Winkel (θ > 90°)

**Winkelberechnung**: cos θ = (**a** · **b**) / (|**a**| × |**b**|) → θ = arccos((**a** · **b**) / (|**a**| × |**b**|))

> **Merke:** Das Skalarprodukt liefert immer eine Zahl (einen Skalar), keinen Vektor. Es beantwortet die Frage: „Wie stark zeigen die Vektoren in dieselbe Richtung?"

**Rechenbeispiel — Winkel zwischen Vektoren:** **a** = (1, 2, 2), **b** = (2, −1, 2). **a** × **b** = 2 − 2 + 4 = 4. |**a**| = √(1+4+4) = 3. |**b**| = √(4+1+4) = 3. cos θ = 4/(3×3) = 4/9 ≈ 0,444. θ = arccos(0,444) ≈ 63,6°.

## Kreuzprodukt (Vektorielles Produkt)

Das Kreuzprodukt **a × b** ergibt einen Vektor senkrecht zu beiden:
**a × b** = (a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁)

**|a × b| = |a| × |b| × sin θ** — entspricht der Fläche des von **a** und **b** aufgespannten Parallelogramms.

Wenn **a × b = 0**: die Vektoren sind parallel (θ = 0° oder 180°).

Wichtige Eigenschaft: **a × b = −(b × a)** — das Kreuzprodukt ist antikommutativ (Reihenfolge zählt!).

**Rechenbeispiel:** **a** = (1, 0, 0), **b** = (0, 1, 0). **a × b** = (0×0 − 0×1, 0×0 − 1×0, 1×1 − 0×0) = (0, 0, 1) → Einheitsvektor in z-Richtung. **b × a** = (0, 0, −1) → umgekehrte Richtung!

**Rechenbeispiel — Dreiecksfläche:** Dreieck mit Eckpunkten A(1,0,0), B(0,2,0), C(0,0,3). Vektoren: **AB** = (−1,2,0), **AC** = (−1,0,3). **AB × AC** = (2×3−0×0, 0×(−1)−(−1)×3, (−1)×0−2×(−1)) = (6, 3, 2). |**AB × AC**| = √(36+9+4) = √49 = 7. Dreiecksfläche = ½ × 7 = 3,5 Flächeneinheiten.

## Ebenengleichung

Eine Ebene wird durch einen Punkt **r₀** auf der Ebene und einen Normalenvektor **n** (senkrecht zur Ebene) beschrieben:
**n × (r − r₀) = 0**

Ausgeschrieben: n₁(x − x₀) + n₂(y − y₀) + n₃(z − z₀) = 0

Koordinatenform: n₁x + n₂y + n₃z = d, wobei d = n₁x₀ + n₂y₀ + n₃z₀.

**Parameterform**: **r** = **r₀** + s × **u** + t × **v**, wobei **u** und **v** zwei nicht-parallele Richtungsvektoren in der Ebene sind und s, t reelle Parameter.

**Normalenvektor aus drei Punkten**: Gegeben A, B, C. Berechne **n** = (**B** − **A**) × (**C** − **A**).

**Abstand eines Punktes P von einer Ebene** (n₁x + n₂y + n₃z = d):
**Abstand = |n₁×xP + n₂×yP + n₃×zP − d| / |n|**

> **Merke:** Der Normalenvektor steht senkrecht auf der Ebene. Seine Richtung bestimmt die Orientierung der Ebene; sein Betrag spielt für die Lage der Ebene keine Rolle (er kann normiert werden).

**Rechenbeispiel:** Ebene durch P₀(1, 2, 3) mit **n** = (1, −1, 2). Gleichung: 1×(x−1) + (−1)×(y−2) + 2×(z−3) = 0 → x − y + 2z = 5. Abstand des Punktes Q(3, 1, 0): |3 − 1 + 0 − 5| / √(1+1+4) = |−3| / √6 = 3/√6 ≈ 1,22.

## Geraden im Raum

Eine Gerade im 3D-Raum in Parameterform: **r** = **p** + t × **v**, wobei **p** ein Punkt auf der Gerade und **v** der Richtungsvektor ist.

Zwei Geraden im Raum können sich schneiden, parallel sein, identisch sein oder windschief sein (weder parallel noch schneidend — ein Phänomen, das nur in 3D existiert).

## Klinischer Kontext

**3D-Bildgebung**: Im MRT und CT wird der Körper in diskrete Volumenelemente (Voxel) unterteilt. Jedes Voxel entspricht einem Quader; Schichtdicke, Pixelgröße und Rekonstruktionsalgorithmen basieren auf Vektormathematik. Jede Bildschicht definiert eine Ebene mit einem Normalenvektor, der die Schichtorientierung festlegt (axial, sagittal, koronal).

**Strahlentherapie**: Der Strahlengang eines Bestrahlungsfeldes wird als Vektor durch den Tumor beschrieben. Mehrere Felder können so geplant werden, dass sich die Strahlendosen am Tumor addieren, im umgebenden Gewebe jedoch minimal bleiben (Isodosen-Planung, IMRT).

**EKG-Herzachse**: Die elektrische Herzachse wird als resultierender Vektor der Depolarisationswellen in der Frontalebene modelliert. Der Winkel dieses Vektors (typisch zwischen −30° und +90°) definiert den Lagetyp (Normaltyp, Links-/Rechtstyp, Steiltyp). Die Berechnung aus den Amplituden der Ableitungen I (x-Komponente) und aVF (y-Komponente) ist ein klassisches Vektorproblem.

**Biomechanik**: Kräfte an Gelenken werden als Vektoren addiert (Vektoraddition). Der Kraftvektor des Muskels und die Hebelwirkung bestimmen das resultierende Drehmoment: **M** = **r** × **F**. Maximales Drehmoment entsteht, wenn Kraft und Hebelarm senkrecht zueinander stehen (sin 90° = 1).

## Rechenbeispiele

**Beispiel 1 — EKG-Herzachse aus Ableitungen I und aVF:**
Amplitude I = +8 mm, aVF = +4 mm. Vektor v = (8, 4). Betrag: |v| = √(64+16) = √80 = **8,94 mm**. Winkel: φ = arctan(4/8) = arctan(0,5) = **26,6°** → Normaltyp (0° bis +90°). Indifferenztyp liegt bei ca. 60°: hier eher Linkstyp-nah.

**Beispiel 2 — Drehmoment am Ellenbogengelenk:**
Bizeps-Kraft F = 300 N, Hebelarm r = 4 cm = 0,04 m, Ansatzwinkel θ = 80°. |M| = |r| × |F| × sin θ = 0,04 × 300 × sin 80° = 0,04 × 300 × 0,985 = **11,8 N×m**. Bei θ = 90° (optimal): |M| = 12 N×m. Bei θ = 30°: |M| = 6 N×m — Krafteffizienz halbiert bei flachem Ansatz.

**Beispiel 3 — Strahlentherapie: Isodosen-Addition:**
Zwei Bestrahlungsfelder mit Dosisanteil-Vektoren d₁ = (1,5; 0,8; 0,4) Gy und d₂ = (0,4; 0,8; 1,5) Gy (Komponenten: Tumor, Normalgewebe links, Normalgewebe rechts). Gesamtdosis: d₁ + d₂ = **(1,9; 1,6; 1,9) Gy**. Tumordosis 1,9 Gy pro Fraktion, Normalgewebe max. 1,9 Gy — Ziel: Tumordosis >> Normalgewebe durch mehr Felder aus verschiedenen Richtungen.

**Beispiel 4 — Abstand Punkt-Ebene (Tumorrand zum Resektionsrand):**
Resektionsebene: 2x − y + 2z = 10. Tumorzentrum bei T(3, 2, 4). Abstand: |2×3 − 2 + 2×4 − 10| / √(4+1+4) = |6 − 2 + 8 − 10| / 3 = |2| / 3 = **0,67 cm**. Sicherheitsabstand von 1 cm nicht erreicht → Nachresektion erforderlich.`,

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
