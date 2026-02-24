import type { Kapitel } from "../types";

export const mathKapZahlen: Kapitel = {
  id: "mathe-kap1",
  title: "Zahlen, Einheiten & Größen",
  subject: "mathematik",
  icon: "🔢",
  estimatedTime: "90 min",
  unterkapitel: [
    // === from kap1-zehnerpotenzen ===
    {
      id: "ma-1-01",
      title: "Zehnerpotenzen — Schreibweise und Rechenregeln",
      stichworte: [
        "Zehnerpotenzen",
        "Exponenten",
        "Potenzgesetze",
        "Größenordnung",
        "negative Exponenten",
        "Multiplikation Zehnerpotenzen",
        "Division Zehnerpotenzen",
        "Potenzieren",
        "Normalisierte Form",
        "Vorfaktor",
        "medizinische Größenordnungen",
        "pH-Wert Exponenten",
      ],
      content: `## Einleitung

Ein rotes Blutkörperchen ist 8 µm groß. Ein Virus misst 100 nm. Glukose im Blut liegt bei 5 mmol/L. All das lässt sich nur mit **Zehnerpotenzen** bequem und fehlerfrei schreiben — also mit Ausdrücken der Form 10ⁿ, bei denen die **Zehnerpotenz** die kompakte Schreibweise für „10 × 10 × … (n-mal)“ oder „1 geteilt durch 10ⁿ“ ist. Wer Zehnerpotenzen nicht sicher beherrscht, stolpert über Dosierungsberechnungen, Laborwerte und Einheitenumrechnungen — exakt die Aufgaben, die im MedAT und im klinischen Alltag vorkommen. Für den MedAT sind Potenzschreibweise, die vier Rechenregeln und schnelles Abschätzen von Verhältnissen prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Zehnerpotenzen** mit positivem und negativem **Exponenten** zu lesen und in Dezimalzahlen umzurechnen (10³ = 1.000, 10⁻⁶ = 0,000001)
- die **vier Rechenregeln** für Zehnerpotenzen: Multiplikation (Exponenten addieren), Division (subtrahieren), Potenzieren (multiplizieren), Wurzel (Exponent halbieren)
- Produkte und Quotienten der Form (a × 10ᵐ) × (b × 10ⁿ) zu berechnen und in **normalisierter Form** (Vorfaktor zwischen 1 und 10) zu bringen
- **Verhältnisse** und **Größenordnungen** durch Exponenten-Subtraktion schnell abzuschätzen (z. B. wie oft konzentrierter?)
- typische **Fehlerquellen** zu vermeiden (10⁻³ ≠ −10³; bei Addition erst auf gleichen Exponenten bringen)

---

## Grunddefinition und positive Exponenten

**Um Zehnerpotenzen sicher zu nutzen,** starten wir mit der Definition. Danach bauen wir negative Exponenten und die Rechenregeln darauf auf.

Unter einer **Zehnerpotenz** versteht man einen Ausdruck 10ⁿ, bei dem die Zahl 10 genau **n-mal** mit sich selbst multipliziert wird. Die Zahl **n** heißt **Exponent** (Hochzahl) und gibt an, wie oft die 10 als Faktor vorkommt.

| Schreibweise | Bedeutung | Dezimal |
|--------------|------------|---------|
| 10¹ | 10 | 10 |
| 10² | 10 × 10 | 100 |
| 10³ | 10 × 10 × 10 | 1.000 |
| 10⁶ | 10 × … × 10 (6 Faktoren) | 1.000.000 |
| 10⁹ | 10 × … × 10 (9 Faktoren) | 1.000.000.000 |

**Eselsbrücke:** Bei **positivem** Exponenten gibt **n** an, wie viele **Nullen hinter der 1** stehen. Bei 10¹² stehen zwölf Nullen. Im Blut zirkulieren beim Erwachsenen ca. **5 × 10¹²** rote Blutkörperchen pro Liter — eine Zahl, die man nur mit Zehnerpotenzen handhabbar macht.

> **Merke:** **10ⁿ** (n positiv) = 1 mit **n Nullen** dahinter. Der **Exponent** ist die Hochzahl und bestimmt die **Größenordnung** (die „Macht von Zehn“) der Zahl.

---

## Negative Exponenten und der Sonderfall 10⁰

**Bisher haben wir gesehen:** Positive Exponenten beschreiben große Zahlen. **Aber was ist mit sehr kleinen Werten** — z. B. Konzentrationen in mmol/L oder Größen in nm? **Dafür** brauchen wir **negative Exponenten**.

**Negative Exponenten** beschreiben Brüche, also Zahlen **kleiner als 1**. Es gilt: **10⁻ⁿ = 1 / 10ⁿ**. Der Exponent gibt an, um wie viele Stellen die 1 **nach rechts** verschoben wird (wie viele Nullen **nach dem Komma vor** der 1 stehen).

| Schreibweise | Bedeutung | Dezimal |
|--------------|------------|---------|
| 10⁻¹ | 1/10 | 0,1 |
| 10⁻² | 1/100 | 0,01 |
| 10⁻³ | 1/1.000 | 0,001 |
| 10⁻⁶ | 1/10⁶ | 0,000 001 |
| 10⁻⁹ | 1/10⁹ | 0,000 000 001 |

**Wichtig:** 10⁻³ ist eine **positive** Zahl (0,001) — der Exponent ist negativ, die Zahl selbst nicht! Verwechslung mit −10³ (−1000) ist eine häufige Fehlerquelle.

**Sonderfall 10⁰ = 1:** Aus 10² / 10² = 1 und der Potenzregel 10²⁻² = 10⁰ folgt **10⁰ = 1**. Jede Zahl (außer 0) hoch null ergibt 1.

> **Merke:** **10⁻ⁿ = 1/10ⁿ** — negativer Exponent = Kehrbruch, Ergebnis ist **positiv** und kleiner als 1. **10⁰ = 1**.

## Die vier Grundrechenregeln für Zehnerpotenzen

**Um mit Zehnerpotenzen zu rechnen,** brauchst du vier feste Regeln. **Sie gelten nur für die Potenzen selbst** (10ᵃ, 10ᵇ); wenn später ein **Vorfaktor** davorsteht (z. B. 3 × 10⁴), kommt ein zusätzlicher Schritt dazu.

| Operation | Regel | Beispiel |
|-----------|-------|----------|
| **Multiplikation** | 10ᵃ × 10ᵇ = 10^(a+b) | 10³ × 10⁴ = 10⁷ |
| **Division** | 10ᵃ / 10ᵇ = 10^(a−b) | 10⁶ / 10² = 10⁴ |
| **Potenzieren** | (10ᵃ)ᵇ = 10^(a×b) | (10³)² = 10⁶ |
| **Wurzel** | √(10ⁿ) = 10^(n/2) | √(10⁶) = 10³ |

**Kurz:** Multiplikation → Exponenten **addieren**. Division → Exponenten **subtrahieren**. Potenzieren → Exponenten **multiplizieren**. Wurzel → Exponent **halbieren**. Für die Basis 10 ist jede Potenz eine klar benennbare **Größenordnung** (Tausend, Million, Millionstel usw.).

> **Merke:** Multiplikation → Exponenten **addieren** | Division → Exponenten **subtrahieren** | Potenzieren → Exponenten **multiplizieren** | Wurzel → Exponent halbieren. **Nicht** vertauschen (z. B. bei Multiplikation niemals Exponenten multiplizieren!).

**SVG-Hinweis (Vier Rechenregeln — Zehnerpotenzen):** Ein kleines Schema mit vier Kästchen: Multiplikation (Pfeil „Exponenten addieren“), Division („subtrahieren“), Potenzieren („multiplizieren“), Wurzel („halbieren“). Unterstützt das Einprägen der Operationen. *Typ: Übersicht / Schema.*

![Zehnerpotenzen](/grafik-zehnerpotenzen.svg)

---

## Multiplikation von Zahlen in Zehnerpotenzen-Form

**Bisher haben wir gesehen:** Reine Zehnerpotenzen 10ᵃ × 10ᵇ. **In der Praxis** stehen oft Ausdrücke wie **3 × 10⁴** oder **1,4 × 10⁻¹** — hier ist die Zahl in **Zehnerpotenzen-Form** geschrieben: ein **Vorfaktor** (die Zahl vor dem „mal“) × eine Zehnerpotenz. **Um solche Produkte zu berechnen,** gehst du in zwei Schritten vor.

Wenn Ausdrücke der Form **(a × 10ᵐ) × (b × 10ⁿ)** multipliziert werden:

1. **Vorfaktoren** a und b **normal multiplizieren** (a × b).
2. **Zehnerpotenzen** nach Regel 1 **addieren** (10ᵐ × 10ⁿ = 10^(m+n)).

Ergebnis: **(a × b) × 10^(m+n)**. Wenn der neue Vorfaktor (a×b) **≥ 10** oder **< 1** ist, bringst du das Ergebnis in **normalisierte Form**: Der **Vorfaktor** liegt dann zwischen **1 und 10** (1 inklusive, 10 exklusive), der Exponent wird entsprechend angepasst. Beispiel: 12 × 10² = **1,2 × 10³**.

**Beispiel:** (3 × 10⁴) × (4 × 10⁻²) = 12 × 10² = **1,2 × 10³**.

> **Merke:** Zuerst **Vorfaktoren** verrechnen, dann **Exponenten** addieren. Am Ende **normalisieren**, wenn der Vorfaktor nicht zwischen 1 und 10 liegt.

## Größenordnungen vergleichen und abschätzen

**Bisher haben wir gesehen:** Einzelne Zehnerpotenzen und ihre Rechenregeln. **Ein großer Vorteil** der Schreibweise ist das **schnelle Vergleichen von Größenordnungen**: Wie oft ist A größer oder konzentrierter als B? **Dafür** subtrahierst du die Exponenten — das Verhältnis ist dann 10^(Differenz).

- Konzentration A: 10⁻³ mol/L, B: 10⁻⁶ mol/L → Verhältnis A/B = 10⁻³ / 10⁻⁶ = 10³ → A ist **1.000-mal** konzentrierter als B.
- **Exponenten-Subtraktion** ersetzt komplizierte Divisionen und ist in Pharmakologie, Toxikologie und Labor alltäglich.

**Größenordnungen in der Biologie (Längen):**

| Objekt | Größenordnung | Ungefähr |
|--------|----------------|----------|
| Virus | 10⁻⁷ m | 100 nm |
| Bakterienzelle | 10⁻⁶ m | 1 µm |
| Menschliche Zelle | 10⁻⁵ m | 10 µm |
| Mensch (1 m) | 10⁰ m | 1 m |

Ein Virus (10⁻⁷ m) ist etwa **10-mal** kleiner als eine Bakterienzelle (10⁻⁶ m), **100-mal** kleiner als eine menschliche Zelle (10⁻⁵ m) und **10 Millionen Mal** kleiner als ein Mensch (10⁰ m). Solche Verhältnisse siehst du sofort durch Exponenten-Subtraktion.

> **Merke:** **Verhältnis** zweier Zehnerpotenzen = **Differenz der Exponenten** als neue Zehnerpotenz. 10⁻³ / 10⁻⁶ = 10³ = Faktor 1.000. Exponentendifferenz abschätzen — nicht lange ausrechnen!

**SVG-Hinweis (Größenordnungen — Medizin/Biologie):** Eine logarithmische Skala von 10⁻⁹ m (Nanometer) bis 10⁰ m (Meter) mit eingezeichneten Objekten (Atom, Virus, Bakterium, Zelle, Mensch) macht die Größenordnungen auf einen Blick erfassbar. *Typ: logarithmische Skala / Übersicht.*

![Größenordnungen](/grafik-groessenordnungen.svg)

---

## Fehlerquellen und häufige Missverständnisse

**Um typische MedAT-Fallen zu vermeiden,** hier die drei wichtigsten Fallstricke.

| Fallstrick | Falsch | Richtig |
|------------|--------|---------|
| **1** Negativer Exponent ≠ negative Zahl | 10⁻³ = „−1000“ | 10⁻³ = 0,001 (positiv!) |
| **2** Addition: Exponenten nicht addieren | 3×10³ + 2×10² = 5×10⁵ | Erst auf gleichen Exponenten: 3×10³ + 0,2×10³ = 3,2×10³ |
| **3** Multiplikation: Exponenten addieren, nicht multiplizieren | 10³ × 10⁴ = 10¹² | 10³ × 10⁴ = 10⁷ |

**Zu Fallstrick 2:** Beim **Addieren** müssen beide Summanden **denselben Exponenten** haben. Dann werden nur die **Vorfaktoren** addiert. Falsch wäre, die Exponenten zu addieren (→ 10⁵) oder die Vorfaktoren ohne Angleichung zu addieren.

> **Merke:** 10⁻³ ≠ −10³. Bei **Addition** zuerst auf **gleichen Exponenten** bringen, dann Vorfaktoren addieren. Bei **Multiplikation** Exponenten **addieren**, nicht multiplizieren.

---

## Rechenbeispiele für den MedAT

**Um das Gelernte anzuwenden,** folgen drei typische Aufgaben: Dosierung, Laborwert-Verhältnis und Zellbiologie. **Kernkompetenz** ist das schnelle Abschätzen durch Exponenten-Subtraktion.

**Aufgabe 1 — Dosierung:** Ein Patient (70 kg) erhält 5 µg/kg Fentanyl. Die Gesamtdosis beträgt: 5 × 10⁻⁶ g/kg × 70 kg = 350 × 10⁻⁶ g = 3,5 × 10⁻⁴ g = 0,35 mg. Hier zeigt sich die Stärke der Zehnerpotenzen: Man rechnet den Vorfaktor (5 × 70 = 350) und den Exponenten (10⁻⁶) getrennt, normalisiert am Ende.

**Aufgabe 2 — Laborwert-Verhältnis:** Serum-Natrium: 140 mmol/L = 1,4 × 10⁻¹ mol/L. Serum-Kalium: 4 mmol/L = 4 × 10⁻³ mol/L. Verhältnis Na⁺/K⁺ = (1,4 × 10⁻¹) / (4 × 10⁻³) = 0,35 × 10² = 35. Natrium ist also 35-mal konzentrierter als Kalium im Serum.

**Aufgabe 3 — Zellbiologie:** Ein Mitochondrium misst ca. 2 µm = 2 × 10⁻⁶ m. Ein ATP-Synthase-Komplex misst ca. 10 nm = 10⁻⁸ m. Wie viele ATP-Synthasen passen nebeneinander auf die Länge eines Mitochondriums? Verhältnis: (2 × 10⁻⁶) / (10⁻⁸) = 2 × 10² = 200.

> **Merke:** Die Kernkompetenz bei Zehnerpotenzen am MedAT ist das schnelle Abschätzen von Verhältnissen durch Exponenten-Subtraktion — nicht das Ausrechnen langer Dezimalzahlen. Wer die vier Potenzgesetze beherrscht, löst jede Aufgabe in unter 30 Sekunden.

---

## Übersichtstabelle der Potenzgesetze

Zur **schnellen Wiederholung** die vier Regeln im Überblick:

| Operation | Regel | Beispiel |
|-----------|-------|----------|
| Multiplikation | 10ᵃ × 10ᵇ = 10^(a+b) | 10³ × 10⁴ = 10⁷ |
| Division | 10ᵃ / 10ᵇ = 10^(a−b) | 10⁶ / 10² = 10⁴ |
| Potenzieren | (10ᵃ)ᵇ = 10^(a×b) | (10³)² = 10⁶ |
| Wurzel | √(10ⁿ) = 10^(n/2) | √(10⁶) = 10³ |

---
## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Zehnerpotenzen (10⁰=1, 10³, 10⁻⁶), Rechenregeln (Multiplikation/Division/Potenz: Exponenten addieren/subtrahieren/multiplizieren), Verhältnisse (Exponentendifferenz = Faktor), klinische Größenordnungen (Erythrozyten ~5×10¹²/L, pH log-Skala).

**Ergänzend vertiefend:** Wurzel als Potenz 10^(m/n); typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- "Was ist 10⁻⁶ in Dezimalform?" → 0,000001 (eine Millionstel; positiv!)
- "Was ergibt 10³ × 10⁻⁵?" → 10⁻² = 0,01 (Exponenten addieren: 3 + (−5) = −2)
- "Wie oft ist Substanz A (10⁻³ mol/L) konzentrierter als B (10⁻⁶ mol/L)?" → Exponentendifferenz: 10³ = 1.000-mal

**Typische Prüfungsfallen / Verwechslungen:**
- 10⁻³ ≠ −10³ — negativer Exponent ≠ negatives Vorzeichen; 10⁻³ = 0,001, eine **positive** Zahl
- 10ᵃ × 10ᵇ ≠ 10^(a×b) — Multiplikation: Exponenten **addieren**, nicht multiplizieren!
- 3 × 10³ + 2 × 10² ≠ 5 × 10⁵ — Addition: erst auf gleichen Exponenten bringen: = 3,2 × 10³

**Prüfungsrelevante Zahlen/Fakten:**
- 10⁰ = 1; 10³ = 1.000; 10⁶ = 1.000.000; 10⁻³ = 0,001; 10⁻⁶ = 0,000001; 10⁻⁹ = 0,000000001
- Multiplikation: 10ᵃ × 10ᵇ = 10^(a+b) | Division: 10ᵃ / 10ᵇ = 10^(a−b) | Potenzieren: (10ᵃ)ᵇ = 10^(a×b)
- Erythrozytenzahl: ~5 × 10¹² /L; Erythrozytengröße: 8 × 10⁻⁶ m; Virusgröße: ~10⁻⁷ m
- pH-Wert: Abfall um 1 Einheit = zehnfache H⁺-Konzentration (log-Skala)
---

## Zusammenfassung (ultrakompakt)

- **Zehnerpotenzen**: 10³ = 1.000; 10⁻⁶ = 0,000 001; negative Exponenten = Kehrwert
- **Multiplikation**: 10ᵃ × 10ᵇ = 10^(a+b); **Division**: 10ᵃ / 10ᵇ = 10^(a−b)
- **Potenzieren**: (10ᵃ)ᵇ = 10^(a×b); **Wurzel**: ⁿ√(10ᵐ) = 10^(m/n)
- **Verhältnisse**: Exponentendifferenz gibt Faktor an (10⁶ / 10⁻³ = 10⁹ = Milliardenfaktor)
- **Klinisch**: Zellgröße 8 µm = 8×10⁻⁶ m; Virus 100 nm = 10⁻⁷ m; [Na⁺] 140 mmol/L = 0,14 mol/L`,
      lernziele: [
        "Zehnerpotenzen mit positiven und negativen Exponenten korrekt interpretieren und ineinander umrechnen.",
        "Die vier Grundrechenregeln (Multiplikation, Division, Potenzieren, Wurzeln) auf Zehnerpotenzen anwenden.",
        "Produkte und Quotienten von Ausdrücken in Zehnerpotenzen-Form berechnen und normalisieren.",
        "Größenordnungen medizinisch relevanter Größen abschätzen und vergleichen.",
        "Typische Fehler (Addition von Potenzen, Verwechslung negativer Exponenten) erkennen und vermeiden.",
      ],
      sections: [
        {
          heading: "Positive und negative Exponenten im Überblick",
          text: "Positive Exponenten stehen für Vielfache von 10 (10¹ = 10, 10³ = 1.000, 10⁶ = 1.000.000), negative Exponenten für Bruchteile von 1 (10⁻¹ = 0,1; 10⁻³ = 0,001; 10⁻⁶ = 0,000 001). Der Exponent gibt immer an, um wie viele Dezimalstellen die Zahl gegenüber der 1 verschoben ist — nach links (positiv) oder nach rechts (negativ). Der Sonderfall 10⁰ = 1 ist der neutrale Ausgangspunkt. In der Medizin findet man beide Vorzeichen ständig: Wirkstoffkonzentrationen im Nanogrammbereich (10⁻⁹ g) und Blutvolumen in Litern (10⁰ L) existieren nebeneinander im selben Patienten.",
          merksatz:
            "Positiver Exponent = Nullen nach der 1; negativer Exponent = Nullen vor der 1 (hinter dem Komma). 10⁰ = 1 ist der gemeinsame Ursprung.",
        },
        {
          heading: "Rechenregeln: Multiplikation und Division",
          text: "Die wichtigsten Regeln im Alltag sind Multiplikation und Division. Beim Multiplizieren addiert man die Exponenten: 10³ × 10⁴ = 10⁷. Beim Dividieren subtrahiert man sie: 10⁶ ÷ 10² = 10⁴. Diese Regeln gelten unabhängig davon, ob die Exponenten positiv, negativ oder null sind. Beispiel aus der Pharmakologie: Eine Tablette enthält 500 × 10⁻³ g = 5 × 10⁻¹ g = 0,5 g Wirkstoff. Der Schritt vom Milli- in den normalen Bereich ist eine Division durch 10³, also eine Subtraktion des Exponenten um 3.",
          merksatz:
            "Multiplizieren → Exponenten addieren. Dividieren → Exponenten subtrahieren. Potenzieren → Exponenten multiplizieren.",
        },
        {
          heading: "Größenordnungen und Verhältnisse abschätzen",
          text: "Zwei Zahlen in Zehnerpotenzen-Darstellung zu vergleichen bedeutet: Man subtrahiert ihre Exponenten, um das Verhältnis zu bestimmen. Substanz A (10⁻⁴ mol/L) ist gegenüber Substanz B (10⁻⁷ mol/L) um den Faktor 10³ = 1.000 konzentrierter. Dieser Denkschritt ersetzt komplizierte Divisionen durch einfache Subtraktion. In der Toxikologie ist diese Methode essenziell: Wenn die letale Dosis eines Medikaments 10⁻² g/kg und die therapeutische Dosis 10⁻⁵ g/kg beträgt, ist der therapeutische Index 10³ — das Medikament hat also einen sehr großen Sicherheitsabstand.",
          merksatz:
            "Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz. 10⁻³ : 10⁻⁶ = 10³ = Faktor 1.000.",
        },
      ],
      merksätze: [
        "10ⁿ hat n Nullen hinter der 1 (n > 0) bzw. n Nullen vor der 1 nach dem Komma (n < 0).",
        "10⁰ = 1 — jede Zahl hoch null ergibt 1.",
        "Multiplizieren: Exponenten addieren. 10³ × 10⁴ = 10⁷.",
        "Dividieren: Exponenten subtrahieren. 10⁵ / 10² = 10³.",
        "Potenzieren: Exponenten multiplizieren. (10²)³ = 10⁶.",
        "10⁻ⁿ = 1/10ⁿ — negativer Exponent bedeutet Kehrbruch, nicht negative Zahl.",
        "Addition von Potenzen: erst auf gleichen Exponenten bringen, dann Vorfaktoren addieren.",
        "Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz.",
        "Normalisierte Form: Vorfaktor zwischen 1 (inklusiv) und 10 (exklusiv), z. B. 1,2 × 10³.",
        "Im Blut: ~5 × 10¹² Erythrozyten/L — ohne Zehnerpotenzen nicht handhabbar.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie, warum Zehnerpotenzen in der Medizin unverzichtbar sind, und beschreiben Sie an drei konkreten medizinischen Beispielen, wie Größenordnungen durch die Exponenten verglichen werden.",
        answer: `Zehnerpotenzen sind in der Medizin unverzichtbar, weil biologische und chemische Größen über einen Bereich von mehr als 30 Größenordnungen variieren — von subatomaren Abständen (10⁻¹⁵ m, Atomkernradius) bis zu makroskopischen Maßstäben. Ohne eine kompakte Exponentialschreibweise würden Zahlen mit Dutzenden von Nullen die Kommunikation und Berechnung unmöglich machen.

**Beispiel 1 — Ionenkonzentrationen:** Im Blutplasma beträgt die Natriumkonzentration ca. 140 × 10⁻³ mol/L = 1,4 × 10⁻¹ mol/L, während die Calciumkonzentration bei etwa 2,5 × 10⁻³ mol/L liegt. Das Verhältnis Na⁺ zu Ca²⁺ ergibt sich durch Subtraktion der Exponenten: (−1) − (−3) = 2, also Faktor 10² = 56. Klinisch bedeutsam ist, dass selbst kleine Verschiebungen in diesen Konzentrationen (z. B. Hypokalkämie: Ca²⁺ < 2 × 10⁻³ mol/L) zu Tetanie oder kardialen Arrhythmien führen.

**Beispiel 2 — Pharmakologie:** Die therapeutische Konzentration von Digoxin im Serum liegt bei 0,5–2 × 10⁻⁹ g/mL (Nanogrammbereich). Die toxische Konzentration beginnt bei >2 × 10⁻⁹ g/mL. Das therapeutische Fenster ist also extrem schmal — ein Faktor von ca. 4. Das erklärt, warum Digoxin engmaschiges Monitoring erfordert.

**Beispiel 3 — Zellbiologie:** Menschliche Zellen haben einen Durchmesser von ca. 10–100 µm = 10⁻⁵ bis 10⁻⁴ m. Viren messen ca. 20–300 nm = 2 × 10⁻⁸ bis 3 × 10⁻⁷ m. Das Verhältnis Zelle zu Virus beträgt 10⁻⁵ / 10⁻⁷ = 10² = Faktor 100 — eine Zelle ist mindestens 100-mal größer als ein typisches Virus. Dieses Verhältnis erklärt, warum Viren problemlos in Zellen eindringen und sich dort vervielflältigen können.

Zusammenfassend ermöglichen Zehnerpotenzen das schnelle Abschätzen von Verhältnissen durch bloße Subtraktion der Exponenten, was in der klinischen Entscheidungsfindung und im wissenschaftlichen Denken unverzichtbar ist.`,
      },
      klinischerBezug:
        "Medikamentendosen werden oft im Nanogramm- (10⁻⁹ g) oder Mikrogrammbereich (10⁻⁶ g) angegeben; eine Verwechslung der Exponenten um nur eine Stelle entspricht einem Zehnfachfehler in der Dosis — klinisch potentiell letal. Der pH-Wert des Blutes (7,35–7,45) basiert auf dem negativen dekadischen Logarithmus der H⁺-Konzentration: Ein pH-Abfall von 7,4 auf 6,4 entspricht einer zehnfachen Zunahme der H⁺-Ionen-Konzentration (von ~40 × 10⁻⁹ mol/L auf ~400 × 10⁻⁹ mol/L).",
      selfTest: [
        {
          question: "Welches Ergebnis liefert die Berechnung 10⁴ × 10⁻² ?",
          options: ["10⁸", "10²", "10⁶", "10⁻⁸", "10⁻²"],
          correctIndex: 1,
          explanation:
            "Bei der Multiplikation von Zehnerpotenzen werden die Exponenten addiert: 10⁴ × 10⁻² = 10^(4+(−2)) = 10². Der Vorfaktor 1 bleibt unverändert. Das Ergebnis 10² = 100 lässt sich zur Probe nachvollziehen: 10.000 × 0,01 = 100. Exponenten addieren — nicht multiplizieren — ist die korrekte Rechenregel für die Multiplikation von Zehnerpotenzen. Häufiger Fehler: Exponenten multiplizieren statt addieren, was 10⁻⁸ ergäbe.",
          hints: [
            "Bei der Multiplikation von Zehnerpotenzen werden die Exponenten nicht multipliziert, sondern addiert.",
            "Addiere 4 und (−2) und setze das Ergebnis als neuen Exponenten ein.",
          ],
          difficulty: 1,
          tags: ["zehnerpotenz", "multiplikation", "exponenten"],
        },
        {
          question:
            "Ein Medikament wird in einer Konzentration von 3 × 10⁻⁶ g/mL gelöst. Wie viel Gramm Wirkstoff sind in 2 × 10³ mL Lösung enthalten?",
          options: ["6 × 10⁻³ g", "6 × 10⁻² g", "6 × 10⁹ g", "1,5 × 10⁻⁹ g", "6 × 10⁻¹⁸ g"],
          correctIndex: 0,
          explanation:
            "Masse = Konzentration × Volumen. (3 × 10⁻⁶ g/mL) × (2 × 10³ mL) = (3 × 2) × 10^(−6+3) = 6 × 10⁻³ g = 0,006 g = 6 mg. Die Vorfaktoren werden normal multipliziert (3 × 2 = 6), die Exponenten addiert (−6 + 3 = −3). Das Ergebnis 6 mg ist eine pharmakologisch realistische Einzeldosis. Wichtig: Vorfaktoren und Exponenten immer getrennt behandeln.",
          hints: [
            "Berechne Masse = Konzentration × Volumen. Vorfaktoren multiplizieren, Exponenten addieren.",
            "Vorfaktoren: 3 × 2 = 6. Exponenten: (−6) + 3 = −3. Ergebnis: 6 × 10⁻³ g.",
          ],
          difficulty: 2,
          tags: ["zehnerpotenz", "konzentration", "pharmakologie"],
        },
        {
          question: "Was ist das Ergebnis von (10³)⁴ ?",
          options: ["10⁷", "10¹²", "10³⁴", "10⁸¹", "10⁴³"],
          correctIndex: 1,
          explanation:
            "Beim Potenzieren einer Zehnerpotenz werden die Exponenten multipliziert: (10ᵃ)ᵇ = 10^(a×b). Hier gilt (10³)⁴ = 10^(3×4) = 10¹². Das Ergebnis ist 1 Billion. Zur Probe: (10³)⁴ = 10³ × 10³ × 10³ × 10³ = 10^(3+3+3+3) = 10¹² — die Multiplikationsregel führt zum gleichen Ergebnis. Ein häufiger Fehler wäre, 3 und 4 zu addieren (= 10⁷) statt zu multiplizieren.",
          hints: [
            "Beim Potenzieren einer Zehnerpotenz werden die Exponenten miteinander multipliziert, nicht addiert.",
            "(10³)⁴ bedeutet 10³ viermal multipliziert: 3 × 4 = 12, also 10¹².",
          ],
          difficulty: 1,
          tags: ["zehnerpotenz", "potenzieren", "exponenten"],
        },
        {
          question:
            "Die H⁺-Konzentration im arteriellen Blut beträgt 4 × 10⁻⁸ mol/L. Im Urin beträgt sie 4 × 10⁻⁵ mol/L. Um welchen Faktor ist die H⁺-Konzentration im Urin höher als im Blut?",
          options: ["Faktor 3", "Faktor 10", "Faktor 100", "Faktor 1.000", "Faktor 10.000"],
          correctIndex: 3,
          explanation:
            "Das Verhältnis zweier Zehnerpotenzen ergibt sich durch Subtraktion der Exponenten: 10⁻⁵ / 10⁻⁸ = 10^(−5−(−8)) = 10^(−5+8) = 10³ = 1.000. Der Urin hat also eine tausendfach höhere H⁺-Konzentration als das Blut. Dies ist physiologisch plausibel: Blut hat pH 7,4 (stark gepuffert), während der Urin pH-Werte von 4,5–8,0 annehmen kann. Bei pH 5 liegt der H⁺-Gehalt etwa 2.500-mal höher als bei pH 7,4. Die Niere eliminiert täglich Säuren, die der Körperstoffwechsel produziert.",
          hints: [
            "Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz.",
            "Subtrahiere: (−5) − (−8) = +3. Der Faktor ist also 10³ = 1.000.",
          ],
          difficulty: 2,
          tags: ["ph-wert", "ionenkonzentration", "zehnerpotenz"],
        },
        {
          question: "Welche Aussage über 10⁻⁶ ist FALSCH?",
          options: [
            "10⁻⁶ = 1 / 10⁶",
            "10⁻⁶ = 0,000 001",
            "10⁻⁶ ist eine negative Zahl.",
            "10⁻⁶ × 10⁶ = 1",
            "10⁻⁶ entspricht dem Präfix Mikro (µ).",
          ],
          correctIndex: 2,
          explanation:
            "10⁻⁶ ist eine positive Zahl (nämlich 0,000 001 = ein Millionstel). Der negative Exponent bedeutet, dass die Zahl ein Bruchanteil von 1 ist, aber die Zahl selbst ist nicht negativ. Alle anderen Aussagen sind korrekt: 10⁻⁶ = 1/10⁶ (Definition negativer Exponenten); 10⁻⁶ = 0,000 001 (ausgeschriebene Dezimalform); 10⁻⁶ × 10⁶ = 10⁰ = 1 (Multiplikationsregel); und das SI-Präfix Mikro (µ) entspricht genau dem Faktor 10⁻⁶ (z. B. 1 µm = 10⁻⁶ m).",
          hints: [
            "Negativer Exponent bedeutet Bruchanteil — die Zahl selbst bleibt positiv.",
            "Denke daran: 10⁻⁶ = 1/1.000.000 = 0,000 001 — das ist eine kleine positive Zahl.",
          ],
          difficulty: 1,
          tags: ["zehnerpotenz", "negativer-exponent", "mikro"],
        },
        {
          question: "Berechne: (6 × 10⁵) / (2 × 10²) = ?",
          options: ["3 × 10⁷", "3 × 10³", "3 × 10²", "12 × 10³", "4 × 10³"],
          correctIndex: 1,
          explanation:
            "Bei der Division werden Vorfaktoren geteilt und Exponenten subtrahiert: (6/2) × 10^(5−2) = 3 × 10³ = 3.000. Zur Probe: 600.000 / 200 = 3.000. Das Vorgehen ist immer zweistufig: (1) Vorfaktoren teilen: 6/2 = 3; (2) Exponenten subtrahieren: 5 − 2 = 3. Das Ergebnis 3 × 10³ ist bereits in normalisierter Form (Vorfaktor zwischen 1 und 10).",
          hints: [
            "Bei der Division werden Vorfaktoren dividiert und Exponenten subtrahiert — zwei unabhängige Schritte.",
            "Vorfaktoren: 6/2 = 3. Exponenten: 5 − 2 = 3. Ergebnis: 3 × 10³.",
          ],
          difficulty: 2,
          tags: ["zehnerpotenz", "division", "rechenregeln"],
        },
        {
          question: "Was ergibt die Addition 5 × 10³ + 3 × 10²?",
          options: [
            "8 × 10⁵",
            "8 × 10³",
            "5,3 × 10³",
            "53 × 10² (nicht normalisiert, aber richtig)",
            "5,3 × 10⁴",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Addition von Zehnerpotenzen müssen zunächst beide Summanden auf denselben Exponenten gebracht werden. 3 × 10² = 0,3 × 10³. Dann: 5 × 10³ + 0,3 × 10³ = 5,3 × 10³. Probe: 5.000 + 300 = 5.300 = 5,3 × 10³. Der häufige Fehler wäre, die Exponenten zu addieren (→ 10⁵) oder die Vorfaktoren direkt zu addieren ohne Angleichung (→ 8 × 10³). Option D (53 × 10²) ist mathematisch gleich 5.300, aber nicht normalisiert.",
          hints: [
            "Bei Addition muss zuerst auf gleichen Exponenten gebracht werden — Exponenten können nicht einfach addiert werden.",
            "Schreibe 3 × 10² als 0,3 × 10³, dann addiere die Vorfaktoren: 5 + 0,3 = 5,3.",
          ],
          difficulty: 2,
          tags: ["zehnerpotenz", "addition", "vorfaktor"],
        },
        {
          question:
            "Ein Bakterium hat einen Durchmesser von 2 × 10⁻⁶ m, ein Virus von 2 × 10⁻⁸ m. Wie oft ist das Bakterium größer als das Virus?",
          options: [
            "2-mal größer",
            "10-mal größer",
            "100-mal größer",
            "1.000-mal größer",
            "10.000-mal größer",
          ],
          correctIndex: 2,
          explanation:
            "Das Verhältnis berechnet man als (2 × 10⁻⁶) / (2 × 10⁻⁸) = (2/2) × 10^(−6−(−8)) = 1 × 10² = 100. Das Bakterium ist 100-mal größer als das Virus. Zur Probe: 0,000 002 / 0,000 000 02 = 100. Diese Größenordnung ist biologisch bedeutsam: Sie erklärt, warum Bakterien mit dem Lichtmikroskop sichtbar sind (Auflösung ca. 200 nm = 2 × 10⁻⁷ m), während Viren ein Elektronenmikroskop erfordern. Der Mensch selbst ist nochmals ca. 10⁸ × größer als ein Virus.",
          hints: [
            "Dividiere die beiden Größen: Vorfaktoren teilen, Exponenten subtrahieren.",
            "Exponenten: (−6) − (−8) = +2. Faktor = 10² = 100.",
          ],
          difficulty: 2,
          tags: ["größenordnung", "mikroskop", "zehnerpotenz"],
        },
      ],
    },
    {
      id: "ma-1-02",
      title: "SI-Präfixe von Femto bis Tera",
      stichworte: [
        "SI-Präfixe",
        "Milli",
        "Mikro",
        "Nano",
        "Piko",
        "Femto",
        "Kilo",
        "Mega",
        "Giga",
        "Tera",
        "Präfix-Umrechnung",
        "Dosierungsfehler",
      ],
      content: `## Einleitung

"250 mg Paracetamol", "0,5 µg Fentanyl/h", "5 nmol/L TSH", "120 mmHg Blutdruck" — **SI-Präfixe** begegnen Ärzten täglich. Ein **Präfix** ist eine vorgestellte Silbe oder ein Zeichen (z. B. m, µ, n), die eine **Zehnerpotenz** zur Basiseinheit angeben. Ein Verwechseln von Mikro und Milli bei einer Dosierung kann tödlich sein. Präfixe sind keine optionale Extrakenntnis, sondern Grundvoraussetzung für sicheres Rechnen in der Medizin. 12 Präfixe von Femto bis Tera genügen für den Alltag. Für den MedAT sind Milli (m, 10⁻³), Mikro (µ, 10⁻⁶), Nano (n, 10⁻⁹), Piko (p, 10⁻¹²), Kilo (k, 10³) und Mega (M, 10⁶) besonders prüfungsrelevant.

**In diesem Kapitel lernst du:**
- die **Systematik der SI-Präfixe** (Dreierschritte 10³) von Femto (10⁻¹⁵) bis Tera (10¹²)
- **medizinisch relevante Präfixe** sicher zuordnen: Milli (mg, mmol, mL), Mikro (µg, µm), Nano (ng, nm), Piko, Femto (z. B. fL für MCV)
- **Umrechnungen** zwischen Präfixen (kleinere Einheit → größere Zahl; "wer kleiner misst, zählt mehr")
- **Dosierungsfallen** zu vermeiden (µg ≠ mg; 1 mg = 1.000 µg — Verwechslung = 1.000-facher Fehler)
- typische **MedAT-Aufgaben** (z. B. mmol/L → µmol/L, mg → µg) fehlerfrei zu lösen

---

## Die Systematik der SI-Präfixe

**Um Präfixe sicher zu nutzen,** brauchst du zuerst die **Systematik**: Welche Zeichen gibt es, und in welcher Reihenfolge? **Dafür** die Grundregel.

**SI-Präfixe** sind eindeutige, unveränderliche **Abkürzungen für Zehnerpotenzen**. Sie werden **vor** jede SI-Einheit gesetzt: Meter (m), Gramm (g), Liter (L), Mol (mol), Sekunde (s), Pascal (Pa), Volt (V) usw. Die Präfixe sind in **Dreierschritten** angeordnet — jede Stufe entspricht dem **Faktor 10³ = 1.000** zur Nachbarstufe. So bleiben Zahlen oft zwischen 1 und 1.000 handhabbar.

| Richtung | Präfixe (Auszug) | Zehnerpotenz |
|----------|------------------|--------------|
| **Klein** (Brüche) | Femto (f) → Piko (p) → Nano (n) → Mikro (µ) → Milli (m) | 10⁻¹⁵ → 10⁻¹² → 10⁻⁹ → 10⁻⁶ → 10⁻³ |
| **Basis** | (kein Präfix) | 10⁰ |
| **Groß** | Kilo (k) → Mega (M) → Giga (G) → Tera (T) | 10³ → 10⁶ → 10⁹ → 10¹² |

Für die Medizin sind die Bereiche von **Femto (10⁻¹⁵)** bis **Tera (10¹²)** relevant; der Alltag umfasst hauptsächlich **Milli, Mikro und Nano**.

> **Merke:** **Dreierschritte:** Jede Präfix-Stufe = Faktor **1.000** (10³) zur Nachbarstufe. Klein→groß: f → p → n → µ → m → [Basis] → k → M → G → T.

## Medizinisch relevante Präfixe im Detail

**Bisher haben wir gesehen:** Die Präfix-Leiter in Dreierschritten. **Um sie im Alltag anzuwenden,** schauen wir uns die **medizinisch wichtigsten** Präfixe nacheinander an — von Milli über Mikro und Nano bis Piko, Femto und die großen Präfixe.

### Milli (m) — 10⁻³

**Milli** (Symbol **m**) steht für **10⁻³ = 0,001** — also ein Tausendstel der Basiseinheit. Es ist der am häufigsten verwendete Präfix in der Klinik:
- **Millimeter (mm):** Blutdruckmessung in mmHg (z. B. 120/80 mmHg), EKG-Papier in mm-Abstand
- **Milligramm (mg):** Tablettendosen (250 mg Aspirin, 500 mg Paracetamol)
- **Millimol (mmol):** Elektrolytkonzentrationen im Blut (Na⁺: 136–145 mmol/L; K⁺: 3,5–5,0 mmol/L)
- **Milliliter (mL):** Injektionsvolumina (z. B. 5 mL NaCl 0,9 %)

1 mmol/L = 10⁻³ mol/L = 0,001 mol/L. Wenn man Laborwerte liest, sind Millimol pro Liter die Standardeinheit für die meisten Elektrolyte.

> **Merke:** **Milli (m) = 10⁻³.** Blutdruck (mmHg), Tabletten (mg), Elektrolyte (mmol/L), Injektionsvolumina (mL) — überall wo "milli" vorkommt, ist der Faktor 1.000 kleiner als die Basiseinheit.

### Mikro (µ) — 10⁻⁶

**Mikro** (Symbol **µ**, griech. "my") steht für **10⁻⁶ = 0,000001** — ein Millionstel. Es tritt v. a. bei sehr potenten Substanzen und biologischen Maßen auf:
- **Mikrometer (µm):** Zelldurchmesser (Erythrozyt: 6–8 µm; Lymphozyt: 10–14 µm; Hepatozyt: 20–30 µm)
- **Mikrogramm (µg):** Hochpotente Hormone und Medikamente (z. B. Fentanyl: 1–2 µg/kg; L-Thyroxin: 25–200 µg/Tag)
- **Mikromol (µmol):** Bilirubinkonzentration (Normwert <17 µmol/L), Serumkupfer (~15–24 µmol/L)
- **Mikroliter (µL):** Durchfluss in Kapillaren, Mikropipetten im Labor

Wichtig: 1 µg = 10⁻⁶ g = 0,001 mg. Eine Verwechslung von mg und µg entspricht einem Fehler um den Faktor 1.000 — klinisch lebensbedrohlich.

> **Merke:** µg ≠ mg! 1 mg = 1.000 µg. Das µ-Zeichen wird handschriftlich oft als m gelesen — deshalb empfiehlt die ISMP "mcg" statt "µg" in der Verschreibung.

### Nano (n) — 10⁻⁹

**Nano** (Symbol **n**) steht für **10⁻⁹ = 0,000000001** — ein Milliardstel. Nano-Größen sind typisch für Hormone, Vitamine und Viren:
- **Nanomol (nmol):** Steroide (Testosteron Normwert: 9–38 nmol/L; Progesteron: 1–80 nmol/L je Zyklusphase), Vitamin D (75–125 nmol/L)
- **Nanogramm (ng):** Tumormarker (PSA: <4 ng/mL), TSH (0,4–4,0 mU/L im Nanogramm-Bereich)
- **Nanometer (nm):** Virusgröße (SARS-CoV-2: ca. 100 nm; HIV: ca. 120 nm), Antikörpergröße (~10 nm)
- **Nanosekunden (ns):** Reaktionszeiten in Ionenkanälen

1 ng = 10⁻⁹ g = 0,001 µg. Nanotechnologie in der Medizin nutzt Nanopartikel (1–100 nm) als Wirkstoffträger für gezielte Tumortherapie.

### Piko (p) — 10⁻¹²

**Piko** (Symbol **p**) steht für **10⁻¹²** — ein Billionstel. Piko-Einheiten tauchen bei ultrasensitiven Laboranalysen auf:
- **Picomol (pmol):** T3 (freies Trijodthyronin: 2,6–5,7 pmol/L), Insulin-Wachstumsfaktor IGF-1
- **Pikogramm (pg):** Zytokinbestimmungen (z. B. IL-6: <7 pg/mL im Serum)
- 1 pg = 10⁻¹² g. Moderne ELISA- und Luminex-Assays können Konzentrationen im Pikogramm-Bereich nachweisen.

### Femto (f) — 10⁻¹⁵

**Femto** (Symbol **f**) steht für **10⁻¹⁵** — ein Billiardstel. Femto ist in der klinischen Routine selten, tritt aber in der Hämatologie auf:
- **Femtoliter (fL):** MCV (Mittleres Erythrozytenvolumen): Normwert 80–96 fL. Ein einzelnes rotes Blutkörperchen hat ein Volumen von ca. 90 fL = 90 × 10⁻¹⁵ L.

### Kilo (k), Mega (M) und darüber

- **Kilogramm (kg):** Körpergewicht (z. B. Dosierung: 5 mg/kg); 1 kg = 10³ g
- **Kilopascal (kPa):** Blutdruck alternativ in kPa (1 mmHg ≈ 0,133 kPa)
- **Megabecquerel (MBq):** Radioaktivitätsangaben in der Nuklearmedizin (z. B. 600 MBq ⁹⁹ᵐTc für Skelettszintigrafie)
- **Gigabyte (GB):** Datenspeicher in medizinischen Bildgebungssystemen (MRT-Datensätze)

> **Merke:** **Kilo (k) = 10³**, **Mega (M) = 10⁶** (Großbuchstabe!). Blutdruck in kPa; Radioaktivität in MBq; Körpergewicht in kg.

**SVG-Hinweis (Präfix-Leiter Femto bis Tera):** Eine vertikale Leiter oder Skala von f (10⁻¹⁵) bis T (10¹²) mit Symbolen und Zehnerpotenzen unterstützt die Merkfähigkeit der Reihenfolge. *Typ: Übersicht / Schema.*

![Präfix-Leiter](/grafik-praefix-leiter.svg)

---

## Umrechnung zwischen Präfixen

**Bisher haben wir gesehen:** Die einzelnen Präfixe und ihre klinische Bedeutung. **Um Werte zwischen Einheiten umzurechnen,** brauchst du eine klare Regel. **Die wichtigste:** Beim Wechsel in eine **kleinere** Einheit wird die **Zahl größer**; beim Wechsel in eine **größere** Einheit wird die **Zahl kleiner**.

Die Umrechnung erfolgt durch Multiplikation oder Division mit der entsprechenden Zehnerpotenz (jede Stufe = Faktor 1.000).

**Systematischer Umrechnungsweg:**
1. Ausgangseinheit als Zehnerpotenz schreiben: 1 mg = 1 × 10⁻³ g
2. Zieleinheit als Zehnerpotenz schreiben: 1 µg = 1 × 10⁻⁶ g
3. Verhältnis: 10⁻³ / 10⁻⁶ = 10³ → 1 mg = 10³ µg = 1.000 µg

Beispiel aus der Praxis: Ein Arzt verordnet 0,025 mg Levothyroxin. Apothekenpräparate sind in µg beschriftet: 0,025 mg × 1.000 µg/mg = 25 µg. Das entspricht einer Tablette "Euthyrox 25 µg".

> **Merke:** **Kleinere Einheit → größere Zahl; größere Einheit → kleinere Zahl.** Eselsbrücke: "Wer kleiner misst, zählt mehr." Systematisch: Ausgangs- und Zieleinheit als Zehnerpotenz schreiben, Verhältnis bilden.

**SVG-Hinweis (Umrechnung mg ↔ µg):** Ein einfaches Schema mit Pfeilen "mg → µg: × 1.000" und "µg → mg: ÷ 1.000" mit Beispiel (1 mg = 1.000 µg) reduziert Verwechslungen. *Typ: Schema / Eselsbrücke.*

![mg µg Umrechnung](/grafik-mg-ug.svg)

---

## MedAT-typische Umrechnungsaufgaben

**Um das Gelernte anzuwenden,** folgen drei typische Umrechnungsaufgaben. **Kernkompetenz** ist die richtige Richtung (× oder ÷) und der Faktor 1.000 pro Stufe.

**Aufgabe 1:** Ein Laborwert zeigt 250 nmol/L Vitamin D. Wie viel ist das in µmol/L?
Lösung: Von Nano (10⁻⁹) zu Mikro (10⁻⁶) ist eine Stufe nach oben → dividieren durch 1.000. 250 nmol/L ÷ 1.000 = 0,25 µmol/L.

**Aufgabe 2:** Ein Antibiotikum wird in einer Dosis von 500 mg verabreicht. Wie viel ist das in g und in µg?
Lösung: 500 mg = 500 × 10⁻³ g = 0,5 g. In µg: 500 mg × 1.000 µg/mg = 500.000 µg = 5 × 10⁵ µg.

**Aufgabe 3:** Der Serumspiegel eines Medikaments beträgt 8 ng/mL. Ist das mehr oder weniger als 0,01 µg/mL?
Lösung: 0,01 µg/mL = 10 ng/mL (da 1 µg = 1.000 ng → 0,01 × 1.000 = 10). Also ist 8 ng/mL weniger als 0,01 µg/mL.

> **Merke:** Bei Präfix-Umrechnungen gilt: Kleinere Einheit → größere Zahl; größere Einheit → kleinere Zahl. Eselsbrücke: "Wer kleiner misst, zählt mehr." Die häufigste MedAT-Falle ist die Verwechslung der Richtung beim Umrechnen.

## Vollständige Präfix-Umrechnungstabelle für die Medizin

| Von → Nach | Faktor | Beispiel |
|------------|--------|----------|
| g → mg | × 1.000 | 0,5 g = 500 mg |
| mg → µg | × 1.000 | 0,1 mg = 100 µg |
| µg → ng | × 1.000 | 2,5 µg = 2.500 ng |
| ng → pg | × 1.000 | 50 ng = 50.000 pg |
| mol → mmol | × 1.000 | 0,14 mol = 140 mmol |
| mmol → µmol | × 1.000 | 4,2 mmol = 4.200 µmol |
| L → mL | × 1.000 | 5 L = 5.000 mL |
| m → mm | × 1.000 | 1,7 m = 1.700 mm |

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** SI-Präfixe in Dreierschritten (10³); Reihenfolge f → p → n → µ → m → [Basis] → k → M → G → T; Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹) mit Symbol und Faktor; Umrechnungsregel „kleinere Einheit → größere Zahl“; µg ≠ mg (1 mg = 1.000 µg); typische Umrechnungen mmol/L ↔ µmol/L, mg ↔ µg ↔ ng; MCV in fL (80–96 fL).

**Ergänzend vertiefend (noch prüfungsnah):** Piko/Femto in Labor und Hämatologie; Mega (MBq) in der Nuklearmedizin; Groß-/Kleinschreibung (M vs. m); ISMP-Empfehlung „mcg“ statt „µg“ in der Verschreibung.

**Häufige Fragen:**
- "Welcher Faktor entspricht Nano (n)?" → 10⁻⁹ (= 0,000000001)
- "Wie viele µg sind 0,005 mg?" → 0,005 × 1.000 = 5 µg (mg → µg: × 1.000)
- "4,2 mmol/L Kalium in µmol/L?" → 4.200 µmol/L (mmol → µmol: × 1.000; kleinere Einheit = größere Zahl)

**Typische Prüfungsfallen / Verwechslungen:**
- µ (Mikro, 10⁻⁶) ≠ m (Milli, 10⁻³) — 1 mg = 1.000 µg; Verwechslung = **1.000-facher** Dosierungsfehler!
- M (Mega, 10⁶, Großbuchstabe) ≠ m (Milli, 10⁻³, Kleinbuchstabe) — Groß-/Kleinschreibung entscheidend
- Umrechnungsrichtung: kleinere Einheit → größere Zahl ("wer kleiner misst, zählt mehr")

**Prüfungsrelevante Zahlen/Fakten:**
- Reihe klein→groß: f (10⁻¹⁵) → p (10⁻¹²) → n (10⁻⁹) → µ (10⁻⁶) → m (10⁻³) → [Basis] → k (10³) → M (10⁶) → G (10⁹) → T (10¹²)
- 1 mg = 1.000 µg = 1.000.000 ng = 10⁹ pg; jede Stufe: Faktor 1.000
- Elektrolyte: Na⁺ 135–145 mmol/L; K⁺ 3,5–5,0 mmol/L; Hormone: nmol/L–pmol/L
- MCV (Erythrozytenvolumen): 80–96 fL (Femtoliter = 10⁻¹⁵ L); <80 fL = mikrozytär; >96 fL = makrozytär
---

## Zusammenfassung (ultrakompakt)

- **Kleine Präfixe**: m (Milli, 10⁻³), µ (Mikro, 10⁻⁶), n (Nano, 10⁻⁹), p (Piko, 10⁻¹²), f (Femto, 10⁻¹⁵)
- **Große Präfixe**: k (Kilo, 10³), M (Mega, 10⁶), G (Giga, 10⁹), T (Tera, 10¹²)
- **Umrechnung**: kleiner Präfix → größere Zahl; größerer Präfix → kleinere Zahl ("wer kleiner misst, zählt mehr")
- **MedAT-Falle**: µg ≠ mg! 1 mg = 1.000 µg; 1 µg = 1.000 ng; Dosis-Fehler hier sind lebensgefährlich
- **Klinisch relevant**: Glukose in mmol/L; Hormone in nmol/L bis pmol/L; Druck in mmHg; Dosierungen in µg/kg/min`,
      lernziele: [
        "Die SI-Präfixe von Femto (10⁻¹⁵) bis Tera (10¹²) mit Symbol, Faktor und Zehnerpotenz nennen und anwenden.",
        "Medizinisch häufige Präfixe (Milli, Mikro, Nano, Piko) in klinischen Kontexten korrekt interpretieren.",
        "Einheiten zwischen verschiedenen Präfixen sicher umrechnen (z. B. mg ↔ µg ↔ ng).",
        "Dosierungsfehler durch Präfixverwechslung erkennen und das klinische Risiko einschätzen.",
        "Das Prinzip der Dreiersprünge (10³ pro Präfixstufe) nutzen, um Umrechnungen im Kopf durchzuführen.",
      ],
      sections: [
        {
          heading: "Die Systematik der SI-Präfixe",
          text: "SI-Präfixe sind eindeutige, unveränderliche Abkürzungen für Potenzen von 10. Sie sind in Dreierschritten (10³) angeordnet.",
          table: {
            headers: ["Präfix", "Symbol", "Faktor", "Zehnerpotenz"],
            rows: [
              ["Tera", "T", "1.000.000.000.000", "10¹²"],
              ["Giga", "G", "1.000.000.000", "10⁹"],
              ["Mega", "M", "1.000.000", "10⁶"],
              ["Kilo", "k", "1.000", "10³"],
              ["(kein)", "—", "1", "10⁰"],
              ["Milli", "m", "0,001", "10⁻³"],
              ["Mikro", "µ", "0,000 001", "10⁻⁶"],
              ["Nano", "n", "0,000 000 001", "10⁻⁹"],
              ["Piko", "p", "0,000 000 000 001", "10⁻¹²"],
              ["Femto", "f", "0,000 000 000 000 001", "10⁻¹⁵"],
            ],
          },
          merksatz:
            "Femto (f) = 10⁻¹⁵ | Piko (p) = 10⁻¹² | Nano (n) = 10⁻⁹ | Mikro (µ) = 10⁻⁶ | Milli (m) = 10⁻³.",
        },
        {
          heading: "Von Femto bis Tera: die Präfix-Leiter",
          text: "SI-Präfixe folgen einem regelmäßigen Muster: Jede Stufe entspricht einem Faktor 10³ = 1.000 gegenüber der benachbarten Stufe. Von Nano (10⁻⁹) zu Mikro (10⁻⁶) sind es 10³, von Mikro zu Milli (10⁻³) ebenfalls 10³, von Milli zur Basiseinheit (10⁰) wieder 10³, und so weiter aufwärts bis Kilo, Mega, Giga, Tera. Diese Regelmäßigkeit ist kein Zufall, sondern gewollte Konstruktion des SI-Systems. In der Medizin nutzt man hauptsächlich die Stufen Femto, Piko, Nano, Mikro, Milli und Kilo — aber auch Mega (MBq in der Nuklearmedizin) und Giga (Anzahl der Erythrozyten: ~5 × 10¹²/L) sind relevant.",
          merksatz:
            "Jede Präfix-Stufe unterscheidet sich von der benachbarten um den Faktor 1.000 (10³). Femto → Piko → Nano → Mikro → Milli → Basis → Kilo → Mega → Giga → Tera.",
        },
        {
          heading: "Klinische Präfixfallen: mg vs. µg vs. ng",
          text: 'In der Pharmakologie sind Verwechslungen zwischen mg, µg und ng die häufigste Quelle von Medikationsfehlern. Fentanyl i.v. wird in µg/kg dosiert (~1–2 µg/kg), Morphin in mg/kg (~0,1 mg/kg). Eine Verwechslung von µg und mg bei Fentanyl bedeutet eine 1.000-fache Überdosierung — akut letal. Ebenso kritisch: Levothyroxin in µg (z. B. 100 µg/d), aber Depot-Vitamin-D-Injektionen in mg (z. B. 7,5 mg = 7.500 µg). Sicherheitsorganisationen wie die ISMP empfehlen, "mcg" statt "µg" zu schreiben, da das µ-Zeichen handschriftlich als m (Milli) gelesen werden kann.',
          merksatz:
            "1 mg = 1.000 µg = 1.000.000 ng. Jede Präfix-Stufe entspricht einem Faktor 1.000. Verwechslung von mg und µg = 1.000-facher Fehler.",
        },
        {
          heading: "Mikrometer in der Zellbiologie",
          text: "In der Zell- und Gewebslehre ist der Mikrometer (µm) die wichtigste Längeneinheit. Erythrozyten haben einen Durchmesser von 6–8 µm — das entspricht der Auflösungsgrenze des Lichtmikroskops (ca. 0,2 µm). Leukozyten sind mit 10–25 µm deutlich größer. Kapillaren haben einen Innendurchmesser von ca. 5–10 µm, gerade weit genug, dass Erythrozyten (6–8 µm) passieren können — oft durch Verformung. Histologische Schnitte sind typischerweise 4–7 µm dick. Der Übergang von µm zu nm ist der Übergang von Licht- zu Elektronenmikroskopie: Zellmembranen (~7 nm) und Ribosomen (~25 nm) können nur mit dem Elektronenmikroskop aufgelöst werden.",
          merksatz:
            "Erythrozyt: 7 µm; Kapillarinnendurchmesser: 5–10 µm; Zellmembran: 7 nm; Ribosom: ~25 nm. 1 µm = 1.000 nm.",
        },
      ],
      merksätze: [
        "Kilo (k) = 10³ | Mega (M) = 10⁶ | Giga (G) = 10⁹ | Tera (T) = 10¹².",
        "Jede Präfix-Stufe = Faktor 1.000 (10³) zur benachbarten Stufe.",
        "1 mg = 1.000 µg = 1.000.000 ng = 1.000.000.000 pg.",
        "Mikrometer (µm): Zellgröße; Nanometer (nm): Viren, Membrandicke; Pikometer (pm): Atomradius.",
        "MCV des Erythrozyten: ~90 fL (Femtoliter). Femto ist der kleinste klinisch verwendete Präfix.",
        "Na⁺-Normwert: 136–145 mmol/L — Millimol ist der Standard für Elektrolyte.",
        "Blutdruck: mmHg — Millimeter-Quecksilbersäule, Milli-Präfix in der Druckeinheit.",
        "Steroidhormone im Nanomol-Bereich (nmol/L); Peptidhormone oft im Picomol-Bereich (pmol/L).",
        "Radioaktivität: MBq (Megabecquerel = 10⁶ Zerfälle/s) in der Nuklearmedizin.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das System der SI-Präfixe und erklären Sie anhand von vier medizinischen Beispielen, warum die korrekte Verwendung von Präfixen in der klinischen Praxis eine Patientensicherheitsfrage ist.",
        answer: `Das System der SI-Präfixe ist eine standardisierte, international verbindliche Erweiterung des metrischen Einheitensystems. Präfixe werden der jeweiligen Basiseinheit (g, m, L, mol, s) vorangestellt und stehen für Zehnerpotenzen in Dreierschritten (10³). Von klein nach groß: Femto (10⁻¹⁵), Piko (10⁻¹²), Nano (10⁻⁹), Mikro (10⁻⁶), Milli (10⁻³), Basis (10⁰), Kilo (10³), Mega (10⁶), Giga (10⁹), Tera (10¹²). Die Dreierstruktur erlaubt Umrechnungen durch einfache Multiplikation oder Division mit 1.000.

**Beispiel 1 — Opioid-Analgetika:** Fentanyl wird in µg/kg dosiert (z. B. 1–2 µg/kg i.v. zur Anästhesie), Morphin hingegen in mg/kg (0,05–0,1 mg/kg). Eine Verwechslung von µg und mg bei Fentanyl (Faktor 1.000) würde bei einem 70-kg-Patienten aus einer korrekten Dosis von 100 µg eine versehentliche Dosis von 100 mg machen — eine Dosis, die akut atemlähmend und letal ist. Fentanyl-Überdosierungen durch Dosierungseinheitenfehler sind in der Literatur dokumentiert.

**Beispiel 2 — Schilddrüsenhormone:** L-Thyroxin (T4) wird in µg dosiert, typischerweise 25–200 µg/Tag. Ältere Beipackzettel listeten manchmal mg-Dosierungen (0,025–0,2 mg), was rechnerisch identisch ist, aber bei flüchtigem Lesen zu Verwechslungen führte. Heute ist die µg-Angabe Standard. Eine 1.000-fache Überdosierung würde eine thyreotoxische Krise auslösen.

**Beispiel 3 — Elektrolytkonzentrationen:** Kalium (K⁺) im Serum hat einen Normwert von 3,5–5,0 mmol/L. Hyperkaliämie (>6,5 mmol/L) kann Kammerflimmern auslösen. Eine gedankliche Verwechslung mit mol/L (Faktor 1.000 größer) oder µmol/L (Faktor 1.000 kleiner) würde falsche klinische Schlüsse ziehen — z. B. eine lebensbedrohliche Hyperkaliämie übersehen.

**Beispiel 4 — MCV (Mean Corpuscular Volume):** Das mittlere Erythrozytenvolumen wird in Femtoliter (fL = 10⁻¹⁵ L) angegeben, Normwert 80–96 fL. Bei makrozytärer Anämie (z. B. Vitamin-B12-Mangel) steigt es auf >100 fL, bei mikrozytärer Anämie (z. B. Eisenmangel) sinkt es auf <80 fL. Das Femtoliter als Einheit zeigt, wie winzig einzelne Zellen sind — und dass selbst im klinischen Alltag 10⁻¹⁵-Größen vorkommen.

Patientensicherheit: Die WHO und die Joint Commission listen "dangerous abbreviations and dose designations" explizit auf. Das µ-Zeichen für Mikro wird handschriftlich oft als m (Milli) gelesen. Deshalb empfehlen Sicherheitsorganisationen "mcg" statt "µg". Das korrekte Verständnis und die sorgfältige Kommunikation von Präfixen ist eine direkte Patientenschutzmaßnahme.`,
      },
      klinischerBezug:
        "Laborwerte für Steroidhormone (Testosteron: nmol/L), Peptidhormone (Insulin: pmol/L) und Vitamine (Vitamin D: nmol/L) verwenden unterschiedliche Präfixe — ein direkter Vergleich von Konzentrationen verschiedener Substanzen erfordert deshalb stets die Umrechnung auf eine gemeinsame Zehnerpotenz. Medikamentenverwechslungen zwischen mg und µg sind unter den häufigsten schwerwiegenden Medikationsfehlern in Krankenhäusern; internationale Patientensicherheitsinitiativen listen die korrekte Präfixverwendung ausdrücklich als Sicherheitsmaßnahme.",
      selfTest: [
        {
          question: 'Welchem Faktor entspricht das Präfix "Nano" (n)?',
          options: ["10⁻³", "10⁻⁶", "10⁻⁹", "10⁻¹²", "10⁻¹⁵"],
          correctIndex: 2,
          explanation:
            "Nano (Symbol: n) entspricht dem Faktor 10⁻⁹ = 0,000 000 001. In der Präfix-Hierarchie liegt Nano drei Stufen unterhalb der Basiseinheit: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹). Typische Nano-Größen in der Medizin: Hormone im nmol/L-Bereich (z. B. Testosteron 9–38 nmol/L), Viren im nm-Bereich (SARS-CoV-2: ~100 nm), Tumormarker in ng/mL (1 ng/mL = 1 µg/L = 10⁻⁹ g/mL). Option A ist Milli, B ist Mikro, D ist Piko, E ist Femto.",
          hints: [
            "Die Reihenfolge der kleinen Präfixe lautet: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹) → Piko (10⁻¹²) → Femto (10⁻¹⁵).",
            'Nano bedeutet "Zwerg" (griech.) — extrem klein, 10⁻⁹.',
          ],
          difficulty: 1,
          tags: ["si-präfixe", "nano", "einheiten"],
        },
        {
          question: "Ein Patient hat einen Kaliumwert von 4,2 mmol/L. Wie viel ist das in µmol/L?",
          options: ["0,0042 µmol/L", "42 µmol/L", "420 µmol/L", "4.200 µmol/L", "42.000 µmol/L"],
          correctIndex: 3,
          explanation:
            "Von Millimol (10⁻³) zu Mikromol (10⁻⁶) ist ein Sprung von 10³: 1 mmol = 1.000 µmol. Also: 4,2 mmol/L × 1.000 µmol/mmol = 4.200 µmol/L. Beim Wechsel in eine kleinere Einheit wird die Zahl größer. Die Methode über Zehnerpotenzen: 4,2 × 10⁻³ mol/L = 4.200 × 10⁻⁶ mol/L = 4.200 µmol/L. Klinisch: Der Kaliumwert liegt damit im Normbereich (3.500–5.000 µmol/L = 3,5–5,0 mmol/L).",
          hints: [
            "Von Milli zu Mikro ist eine Präfix-Stufe nach unten = Faktor 1.000 (× 1.000).",
            "4,2 mmol/L × 1.000 = 4.200 µmol/L. Kleinere Einheit → größere Zahl.",
          ],
          difficulty: 2,
          tags: ["si-präfixe", "millimol", "mikromol"],
        },
        {
          question: "Welches Organell/welche Struktur hat eine Größe im Nanometer-Bereich?",
          options: [
            "Erythrozyt (7 µm Durchmesser)",
            "Zellkern (~6 µm Durchmesser)",
            "Ribosom (~25 nm Durchmesser)",
            "Lymphozyt (~12 µm Durchmesser)",
            "Kapillarlumen (~8 µm Durchmesser)",
          ],
          correctIndex: 2,
          explanation:
            "Ribosomen haben einen Durchmesser von ca. 25–30 nm = 25–30 × 10⁻⁹ m. Sie liegen damit im Nanometerbereich und sind daher nicht mit dem Lichtmikroskop (Auflösungsgrenze ~200 nm) sichtbar — sie erfordern ein Elektronenmikroskop. Alle anderen genannten Strukturen (Erythrozyt, Zellkern, Lymphozyt, Kapillarlumen) liegen im Mikrometerbereich (µm = 10⁻⁶ m) und sind mit dem Lichtmikroskop darstellbar. 1 µm = 1.000 nm, also sind µm-Strukturen mindestens 1.000-mal größer als nm-Strukturen.",
          hints: [
            "Lichtmikroskopische Strukturen liegen im µm-Bereich; elektronenmikroskopische im nm-Bereich.",
            "Ribosomen benötigen Elektronenmikroskopie — das ist ein Hinweis auf Nanometer-Größe.",
          ],
          difficulty: 2,
          tags: ["zellbiologie", "ribosom", "nanometer"],
        },
        {
          question:
            "Eine Hormonkonzentration wird mit 2,5 ng/mL angegeben. Wie viel ist das in µg/L?",
          options: ["0,0025 µg/L", "0,25 µg/L", "2,5 µg/L", "25 µg/L", "2.500 µg/L"],
          correctIndex: 2,
          explanation:
            "1 ng/mL = 1 µg/L. Dies ergibt sich, weil beide Einheiten dasselbe Verhältnis beschreiben: ng/mL = (10⁻⁹ g) / (10⁻³ L) = 10⁻⁶ g/L = 1 µg/L. Also: 2,5 ng/mL = 2,5 µg/L. Diese Gleichwertigkeit ist in der klinischen Chemie und Pharmakologie sehr nützlich: Laborberichte in ng/mL können direkt als µg/L gelesen werden, ohne Rechenaufwand. PSA z. B. wird in ng/mL angegeben, aber µg/L ist äquivalent.",
          hints: [
            "Prüfe, ob ng/mL und µg/L denselben Faktor darstellen: ng = 10⁻⁹ g; mL = 10⁻³ L. Verhältnis = 10⁻⁶ g/L = µg/L.",
            "1 ng/mL = 1 µg/L ist eine häufig verwendete Äquivalenz in der Labordiagnostik.",
          ],
          difficulty: 3,
          tags: ["einheiten", "ng-ml", "ug-l"],
        },
        {
          question:
            "Das MCV (mittleres Erythrozytenvolumen) eines Patienten beträgt 72 fL. Was sagt dieser Wert aus?",
          options: [
            "Der Erythrozyt ist zu groß (Normwert 30–50 fL) — Hinweis auf Vitamin-B12-Mangel.",
            "Das Volumen ist im Normbereich (Normwert 60–75 fL) — kein pathologischer Befund.",
            "Der Erythrozyt ist zu klein (Normwert 80–96 fL) — Hinweis auf mikrozytäre Anämie z. B. bei Eisenmangel.",
            "Das fL (Femtoliter) ist keine Standard-SI-Einheit und der Wert daher nicht verwertbar.",
            "72 fL entspricht 72 µL, was im Normbereich liegt.",
          ],
          correctIndex: 2,
          explanation:
            "Das MCV wird in Femtoliter (fL = 10⁻¹⁵ L) angegeben. Der Normwert liegt bei 80–96 fL. Ein MCV von 72 fL ist erniedrigt (< 80 fL), was eine mikrozytäre Anämie anzeigt. Die häufigste Ursache ist Eisenmangelanämie; weitere Ursachen sind Thalassämie, Anämie chronischer Erkrankungen und Sideroblastenanaemie. Option D ist falsch: fL ist eine korrekte SI-Einheit (Femto + Liter). Option E ist falsch: 72 fL ≠ 72 µL — Femto ist 10⁻¹⁵, Mikro ist 10⁻⁶; der Unterschied beträgt 10⁹-fach.",
          hints: [
            "MCV-Normwert: 80–96 fL. Unter 80 fL = mikrozytär; über 96 fL = makrozytär.",
            "Femtoliter (fL) = 10⁻¹⁵ L — das kleinste in der klinischen Routine verwendete Präfix.",
          ],
          difficulty: 2,
          tags: ["mcv", "anämie", "femtoliter"],
        },
        {
          question: "Wie viele Nanogramm (ng) entsprechen 0,005 mg?",
          options: ["5 ng", "50 ng", "500 ng", "5.000 ng", "50.000 ng"],
          correctIndex: 3,
          explanation:
            "0,005 mg → in ng umrechnen. Von mg (10⁻³ g) zu ng (10⁻⁹ g) sind es 6 Zehnerpotenzen (= Faktor 10⁶ = 1.000.000). Also: 0,005 mg × 10⁶ ng/mg = 5.000 ng. Alternativ: 0,005 mg = 5 × 10⁻³ mg = 5 × 10⁻³ × 10⁻³ g = 5 × 10⁻⁶ g = 5 µg = 5.000 ng. Klinisches Beispiel: 0,005 mg Fentanyl = 5 µg = 5.000 ng — eine für die Anästhesie relevante Dosisgröße.",
          hints: [
            "Von mg zu ng sind es zwei Präfix-Stufen (mg → µg → ng), also Faktor 10³ × 10³ = 10⁶.",
            "0,005 mg × 1.000 = 5 µg; 5 µg × 1.000 = 5.000 ng. Schrittweise über Mikro.",
          ],
          difficulty: 2,
          tags: ["einheitsumrechnung", "milligramm", "nanogramm"],
        },
        {
          question: "Welche Aussage über das Präfix-System ist KORREKT?",
          options: [
            "Mega (M) entspricht 10⁹ und steht für eine Milliarde.",
            'Das Symbol für Mikro ist ein kleines m (wie in "mg").',
            "Von Milli zu Nano sind es zwei Präfix-Stufen und damit Faktor 10⁶.",
            "Kilo bedeutet 10⁴ = 10.000.",
            "Das Präfix Giga wird in der Medizin nie verwendet.",
          ],
          correctIndex: 2,
          explanation:
            "Von Milli (10⁻³) zu Nano (10⁻⁹) sind es genau zwei Stufen: Milli → Mikro (10⁻⁶) → Nano (10⁻⁹). Der Faktor beträgt 10⁶ = 1.000.000. 1 mmol = 10⁶ nmol = 1.000.000 nmol. Option A ist falsch: Mega = 10⁶ (nicht 10⁹; das ist Giga). Option B ist falsch: Mikro wird durch das griechische µ symbolisiert, nicht durch m (m steht für Milli). Option D ist falsch: Kilo = 10³ = 1.000. Option E ist falsch: Giga erscheint in der Medizin z. B. bei Erythrozytenzahlen (5 × 10¹²/L) und in der Datenspeicherung medizinischer Bilder.",
          hints: [
            "Zähle die Stufen: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹) — das sind zwei Stufen à 10³, also Faktor 10⁶.",
            "Das Symbol µ (mü/my) steht für Mikro; m steht für Milli — zwei verschiedene Präfixe.",
          ],
          difficulty: 2,
          tags: ["si-präfixe", "mega", "mikro"],
        },
        {
          question:
            "Die Nuklearmedizin verwendet 600 MBq ⁹⁹ᵐTc. Was bedeutet M in MBq, und wie viele Becquerel sind das?",
          options: [
            "M = Milli (10⁻³); 600 MBq = 0,6 Bq.",
            "M = Mega (10⁶); 600 MBq = 600.000.000 Bq = 6 × 10⁸ Bq.",
            "M = Mega (10⁶); 600 MBq = 60.000 Bq = 6 × 10⁴ Bq.",
            "M = Mikro (10⁻⁶); 600 MBq = 6 × 10⁻⁴ Bq.",
            "M = Mega (10⁶); 600 MBq = 6 × 10⁹ Bq.",
          ],
          correctIndex: 1,
          explanation:
            "Mega (M) = 10⁶. 600 MBq = 600 × 10⁶ Bq = 6 × 10² × 10⁶ Bq = 6 × 10⁸ Bq = 600.000.000 Zerfälle pro Sekunde. Das Becquerel (Bq) ist die SI-Einheit der Radioaktivität (1 Bq = 1 Zerfall/s). In der Nuklearmedizin werden typischerweise Aktivitäten im Bereich von Hunderten MBq verwendet, was Milliarden von Zerfällen pro Sekunde entspricht. Tc-99m hat eine sehr kurze Halbwertszeit von 6 Stunden. Achtung: M für Mega (groß) ist nicht zu verwechseln mit m für Milli (klein).",
          hints: [
            "Mega ist großgeschrieben M = 10⁶. Milli ist kleingeschrieben m = 10⁻³. Die Schreibweise ist bedeutsam.",
            "600 × 10⁶ = 6 × 10² × 10⁶ = 6 × 10⁸. Vorfaktor und Exponent getrennt behandeln.",
          ],
          difficulty: 3,
          tags: ["mega", "becquerel", "nuklearmedizin"],
        },
      ],
    },
    {
      id: "ma-1-03",
      title: "Wissenschaftliche Notation — Umrechnen und Rechnen",
      stichworte: [
        "Wissenschaftliche Notation",
        "Exponentialschreibweise",
        "Vorfaktor",
        "Normalisierung",
        "Kommaverschiebung",
        "Logarithmus",
        "pH-Wert",
        "Henderson-Hasselbalch",
        "Avogadro-Zahl",
        "Halbwertszeit",
      ],
      content: `## Einleitung

Der Serumkreatinin-Normwert liegt bei 0,000088 mol/L — oder sauberer: **8,8 × 10⁻⁵** mol/L. Avogadro-Zahl: **6,022 × 10²³**. Erythrozytenzahl: **5 × 10¹²**. Die **wissenschaftliche Notation** (auch Exponentialschreibweise) ist die Darstellung einer Zahl als **Produkt aus einem Vorfaktor und einer Zehnerpotenz** — so werden sehr große und sehr kleine Zahlen lesbar und rechenbar. Sie ist Voraussetzung für Physik, Chemie, Labormedizin und Pharmakologie. Am MedAT sind besonders Rechnen (Multiplizieren, Dividieren) und **Normalisieren** gefragt.

**In diesem Kapitel lernst du:**
- die **normalisierte Form** (a × 10ⁿ mit 1 ≤ a < 10) und warum sie eindeutig ist
- **Umrechnung** Dezimalzahl ↔ wissenschaftliche Notation (Kommaverschiebung → Exponent)
- **Multiplikation und Division** (Vorfaktoren getrennt, Exponenten addieren/subtrahieren; danach normalisieren)
- **Addition und Subtraktion** (erst gleichen Exponenten herstellen, dann Vorfaktoren verrechnen)
- **pH-Wert** als Logarithmus der H⁺-Konzentration und den **Dreischritt** für MedAT-Aufgaben (Vorfaktoren → Exponenten → Normieren)

---

## Definition und Normalform

**Um mit der wissenschaftlichen Notation zu rechnen,** brauchst du zuerst die **Definition** und die **normalisierte Form**. **Dafür** die feste Konvention.

Die **wissenschaftliche Notation** schreibt jede Zahl in der Form **a × 10ⁿ**, wobei:
- **a** der **Vorfaktor** ist (die Zahl vor „mal 10ⁿ“) und
- **n** der **Exponent** (ganze Zahl) ist.

In der **normalisierten Form** gilt zusätzlich: **1 ≤ a < 10** — der Vorfaktor hat also genau **eine Stelle vor dem Komma** (1 bis 9,…). So ist die Schreibweise **eindeutig** und der Exponent gibt direkt die **Größenordnung** an.

| Dezimal | Normalisierte Form | Vorfaktor a | Exponent n |
|---------|--------------------|-------------|------------|
| 1.234 | 1,234 × 10³ | 1,234 | +3 |
| 0,00456 | 4,56 × 10⁻³ | 4,56 | −3 |
| 0,0000000089 | 8,9 × 10⁻⁹ | 8,9 | −9 |
| 299.792.458 m/s | 2,998 × 10⁸ m/s | 2,998 | +8 |

> **Merke:** **Normalisierte Form:** **a × 10ⁿ** mit **1 ≤ a < 10**. Große Zahl → Komma nach **links** → **positiver** Exponent. Kleine Zahl (< 1) → Komma nach **rechts** → **negativer** Exponent.

## Umrechnung: Dezimalzahl → Wissenschaftliche Notation

**Bisher haben wir gesehen:** Die normalisierte Form a × 10ⁿ. **Um beliebige Dezimalzahlen** in diese Form zu bringen, gehst du in zwei Schritten vor. **Dafür** das folgende Verfahren.

**Schritt-für-Schritt-Verfahren:**
1. Komma so verschieben, dass die Zahl zwischen 1 und 10 liegt (das wird der Vorfaktor a).
2. Den Exponenten n bestimmen: Wie viele Stellen wurde das Komma verschoben?
   - Komma nach links verschoben (große Zahl → kleiner Vorfaktor): n ist positiv.
   - Komma nach rechts verschoben (kleine Zahl → größerer Vorfaktor): n ist negativ.

**Beispiel 1 — Große Zahl:** 45.300.000
Komma 7 Stellen nach links: 4,53 × 10⁷

**Beispiel 2 — Kleine Zahl:** 0,000 072
Komma 5 Stellen nach rechts: 7,2 × 10⁻⁵

**Beispiel 3 — Schon zwischen 1 und 10:** 6,02 × 10²³ (Avogadro-Konstante) ist bereits normalisiert.

**Merkhilfe Kommaverschiebung:**
- Große Zahl → Exponent positiv (Komma wandert links)
- Kleine Zahl (< 1) → Exponent negativ (Komma wandert rechts)

## Umrechnung: Wissenschaftliche Notation → Dezimalzahl

**Umgekehrt:** Aus einer Zahl in wissenschaftlicher Notation die **Dezimalzahl** zu machen, liest du den **Exponenten als Anweisung**, das Komma zu verschieben.
- Positiver Exponent n: Komma n Stellen nach rechts. 3,7 × 10⁴ → 37.000
- Negativer Exponent n: Komma n Stellen nach links. 5,1 × 10⁻³ → 0,0051

---

## Addieren und Subtrahieren in wissenschaftlicher Notation

**Bisher haben wir gesehen:** Umrechnen in beide Richtungen. **Beim Rechnen** unterscheiden sich Addition/Subtraktion von Multiplikation/Division. **Um Fehler zu vermeiden:** Nur Summanden mit **demselben Exponenten** dürfen direkt addiert werden.

Für Addition und Subtraktion:
1. Den kleineren Exponenten auf den größeren angleichen (Vorfaktor entsprechend anpassen).
2. Vorfaktoren addieren oder subtrahieren.
3. Ergebnis bei Bedarf normalisieren.

**Beispiel:** 3,5 × 10⁴ + 2,1 × 10³
→ 3,5 × 10⁴ + 0,21 × 10⁴ = 3,71 × 10⁴

**Warum Angleichung nötig?** Man kann nur Gleichartiges addieren. 35.000 + 2.100 = 37.100, nicht 5.600 — analog darf man Vorfaktoren nicht addieren, wenn die Exponenten verschieden sind.

> **Merke:** **Addition/Subtraktion:** erst auf **gleichen Exponenten** angleichen, dann **Vorfaktoren** addieren/subtrahieren. Danach normalisieren.

---

## Multiplizieren und Dividieren in wissenschaftlicher Notation

**Bisher haben wir gesehen:** Bei Addition/Subtraktion muss der Exponent angeglichen werden. **Bei Multiplikation und Division** ist es einfacher: **Vorfaktoren** und **Exponenten** getrennt verrechnen.

**Multiplikation:**
(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10^(m+n)
Danach normalisieren, falls Vorfaktor ≥ 10 oder < 1.

Beispiel: (3,0 × 10⁸) × (2,0 × 10⁻³) = 6,0 × 10⁵

**Division:**
(a × 10ᵐ) / (b × 10ⁿ) = (a/b) × 10^(m−n)
Danach normalisieren.

Beispiel: (8,4 × 10⁶) / (2,1 × 10²) = 4,0 × 10⁴

**Normalisierung nach der Rechnung:**
Falls das Ergebnis nicht normalisiert ist (Vorfaktor ≥ 10 oder < 1), muss man anpassen:
- Vorfaktor ≥ 10: Vorfaktor durch 10 teilen, Exponent um 1 erhöhen. 12 × 10³ → 1,2 × 10⁴
- Vorfaktor < 1: Vorfaktor mit 10 multiplizieren, Exponent um 1 verringern. 0,5 × 10⁻⁴ → 5 × 10⁻⁵

> **Merke:** **Multiplikation:** Vorfaktoren ×, Exponenten **addieren**. **Division:** Vorfaktoren ÷, Exponenten **subtrahieren**. Danach **normalisieren**.

**SVG-Hinweis (Rechenregeln wissenschaftliche Notation):** Ein kleines Schema: Multiplikation (Vorfaktor × Vorfaktor, Exponent + Exponent) und Division (Vorfaktor ÷ Vorfaktor, Exponent − Exponent) mit je einem Beispiel. *Typ: Übersicht / Schema.*

![Wissenschaftliche Notation](/grafik-wissenschaftliche-notation.svg)

---

## Logarithmen und Zehnerpotenzen: der natürliche Zusammenhang

**Bisher haben wir gesehen:** Rechnen mit Vorfaktor und Exponent. **Der pH-Wert** und viele medizinische Skalen nutzen den **Logarithmus**. **Um das zu verstehen,** der Zusammenhang: Der **dekadische Logarithmus** (log₁₀ oder lg) ist die **Umkehroperation** zur Zehnerpotenz:
log₁₀(10ⁿ) = n

Das bedeutet: log₁₀(1.000) = 3; log₁₀(0,001) = −3; log₁₀(1) = 0.

**Wichtige Logarithmuswerte auswendig:**
- log(2) ≈ 0,301
- log(3) ≈ 0,477
- log(5) ≈ 0,699
- log(10) = 1

**Logarithmusregeln:**
- log(a × b) = log(a) + log(b)
- log(a / b) = log(a) − log(b)
- log(aⁿ) = n × log(a)

**pH-Wert als Logarithmus:** pH = −log₁₀([H⁺]), wobei [H⁺] in mol/L. Das bedeutet: Bei [H⁺] = 10⁻⁷ mol/L ist pH = 7 (neutrales Wasser). Eine Änderung des pH um 1 entspricht einer zehnfachen Änderung der H⁺-Konzentration. pH 6 hat zehnmal mehr H⁺ als pH 7, pH 5 hat hundertmal mehr H⁺ als pH 7.

> **Merke:** **pH = −log₁₀([H⁺]).** 1 pH-Einheit Unterschied = **Faktor 10** in der H⁺-Konzentration. Physiologisch pH 7,4 ↔ [H⁺] ≈ 40 nmol/L.

**SVG-Hinweis (pH und Zehnerpotenzen):** Eine Skala von pH 0–14 mit zugehörigen [H⁺]-Werten (10⁰ bis 10⁻¹⁴) zeigt den logarithmischen Zusammenhang auf einen Blick. *Typ: Skala / Übersicht.*

![pH Zehnerpotenzen](/grafik-20-ph-skala.svg)

---

## Häufige Anwendungen in der Medizin

**Um die Notation im Kontext zu sehen,** folgen kurze Anwendungen: Avogadro-Zahl, Halbwertszeiten, Henderson-Hasselbalch.

**Avogadro-Zahl (Nₐ = 6,022 × 10²³ mol⁻¹):** Gibt an, wie viele Teilchen in einem Mol enthalten sind. Wenn 1 mmol = 10⁻³ mol Na⁺ in 1 L Lösung vorliegen, dann enthält diese Lösung 6,022 × 10²³ × 10⁻³ = 6,022 × 10²⁰ Na⁺-Ionen pro Liter.

**Halbwertszeiten:** Tc-99m hat eine Halbwertszeit von 6 h = 6 × 60 × 60 s = 2,16 × 10⁴ s. Die Aktivität nimmt exponentiell ab: A(t) = A₀ × (1/2)^(t/t½). Logarithmen sind nötig, um zu berechnen, nach welcher Zeit eine bestimmte Restaktivität vorliegt.

**Henderson-Hasselbalch-Gleichung:** pH = pKₐ + log([A⁻]/[HA]), die Grundformel für Puffersysteme im Blut. Der Logarithmus verknüpft pH, pKₐ und das Konzentrationsverhältnis von Base zu Säure.

---

## MedAT-Rechenbeispiele mit wissenschaftlicher Notation

**Um das Gelernte anzuwenden,** folgen zwei typische MedAT-Aufgaben. **Kernkompetenz** ist der **Dreischritt:** (1) Vorfaktoren getrennt, (2) Exponenten getrennt, (3) Ergebnis normalisieren.

**Aufgabe 1 — Infusionsberechnung:** Eine NaCl-Infusion (0,9 %) enthält 9 g NaCl pro Liter. Molmasse NaCl = 58,5 g/mol. Molarität: c = 9 / 58,5 = 0,154 mol/L = 1,54 × 10⁻¹ mol/L = 154 mmol/L. Diese Berechnung verbindet wissenschaftliche Notation, Molkonzentration und klinischen Alltag.

**Aufgabe 2 — Erythrozytenzahl:** Das Blut enthält ~5 × 10¹² Erythrozyten pro Liter. Bei einem Blutvolumen von 5 L: Gesamtzahl = 5 × 10¹² × 5 = 25 × 10¹² = 2,5 × 10¹³ rote Blutkörperchen. Normalisierung: Vorfaktor 25 → 2,5 × 10¹ → Gesamtexponent 12 + 1 = 13.

> **Merke:** Bei MedAT-Aufgaben mit wissenschaftlicher Notation immer zweistufig vorgehen: (1) Vorfaktoren getrennt rechnen, (2) Exponenten getrennt behandeln, (3) am Ende normalisieren. Dieser Dreischritt verhindert Rechenfehler zuverlässig.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Normalisierte Form (1 ≤ Vorfaktor < 10); Umrechnung Dezimal ↔ Notation (Kommaverschiebung → Exponent); Multiplikation (Vorfaktoren ×, Exponenten addieren); Division (Vorfaktoren ÷, Exponenten subtrahieren); Addition/Subtraktion (erst gleichen Exponenten herstellen); Normalisierung nach Rechnung; Dreischritt (Vorfaktoren → Exponenten → Normieren); pH = −log₁₀([H⁺]); 1 pH-Einheit = Faktor 10 in [H⁺]; Avogadro 6,022×10²³ mol⁻¹; Erythrozyten ~5×10¹²/L.

**Ergänzend vertiefend (noch prüfungsnah):** Logarithmusregeln (log(a×b), log(a/b), log(aⁿ)); Henderson-Hasselbalch; Halbwertszeit in wissenschaftlicher Notation; Signifikanz und Rundung.

**Häufige Fragen:**
- "Schreibe 0,000047 in normalisierter Form" → 4,7 × 10⁻⁵ (5 Stellen nach rechts = negativer Exponent)
- "Was ist (4 × 10⁻³) × (3 × 10⁵)?" → Vorfaktoren: 4×3=12; Exponenten: −3+5=2 → 12×10² → normiert: 1,2 × 10³
- "pH, wenn [H⁺] = 10⁻⁷ mol/L?" → pH = −log₁₀(10⁻⁷) = 7

**Typische Prüfungsfallen / Verwechslungen:**
- Nicht normalisiert ≠ falsch, aber Prüfung verlangt normalisierte Form: 15 × 10³ → richtig: 1,5 × 10⁴
- Bei Division: Exponenten **subtrahieren** (nicht dividieren!): 10⁶ / 10² = 10⁴
- Addition: erst gleiche Exponenten herstellen — 3 × 10³ + 4 × 10² = 3 × 10³ + 0,4 × 10³ = **3,4 × 10³** (nicht 7 × 10⁵!)

**Prüfungsrelevante Zahlen/Fakten:**
- Normalisierte Form: 1 ≤ Vorfaktor < 10; Dreischritt: (1) Vorfaktoren, (2) Exponenten, (3) Normieren
- pH = −log₁₀([H⁺]); pH 7,4 ↔ [H⁺] ≈ 40 nmol/L; pH-Differenz 0,3 ≈ Faktor 2 in [H⁺]; 1 pH-Einheit = Faktor 10
- Avogadro: 6,022 × 10²³ mol⁻¹; Erythrozyten: 5 × 10¹²/L; Lichtgeschwindigkeit: 2,998 × 10⁸ m/s
---

## Zusammenfassung (ultrakompakt)

- **Normierte Form**: a × 10ⁿ mit 1 ≤ a < 10; z.B. 0,0045 → 4,5 × 10⁻³
- **Multiplikation**: Vorfaktoren multiplizieren + Exponenten addieren; Ergebnis normieren
- **Division**: Vorfaktoren dividieren + Exponenten subtrahieren; Ergebnis normieren
- **Addition/Subtraktion**: erst gleiche Exponenten herstellen, dann Vorfaktoren addieren/subtrahieren
- **Dreischritt MedAT**: (1) Vorfaktoren, (2) Exponenten, (3) Normieren → verhindert Fehler
- **Klinisch**: Erythrozyten 5×10¹²/L; Elementarladung 1,6×10⁻¹⁹ C; Avogadro 6×10²³/mol`,
      lernziele: [
        "Beliebige Dezimalzahlen in normalisierte wissenschaftliche Notation umschreiben und umgekehrt.",
        "Addition, Subtraktion, Multiplikation und Division in wissenschaftlicher Notation korrekt durchführen.",
        "Den dekadischen Logarithmus als Umkehrfunktion der Zehnerpotenz erklären und grundlegende Logarithmenwerte kennen.",
        "Den pH-Wert als negativen dekadischen Logarithmus der H⁺-Konzentration interpretieren und klinisch einordnen.",
        "Ergebnisse von Rechnungen normalisieren und auf korrekte Signifikanz prüfen.",
      ],
      sections: [
        {
          heading: "Normalisierte Form: Vorfaktor zwischen 1 und 10",
          text: "Die normalisierte Form der wissenschaftlichen Notation verlangt, dass der Vorfaktor a genau im Bereich 1 ≤ a < 10 liegt. Das hat praktische Gründe: Mit dieser Konvention ist die Schreibweise einer Zahl eindeutig, und der Exponent gibt direkt die Größenordnung an. 0,034 m kann als 3,4 × 10⁻² m (normalisiert), 34 × 10⁻³ m (nicht normalisiert, aber korrekt) oder 340 × 10⁻⁴ m (nicht normalisiert) geschrieben werden — die normalisierte Form ist die einzige, die keine Mehrdeutigkeit lässt. Kommaverschiebung nach links (bei großen Zahlen) erzeugt positive Exponenten; nach rechts (bei kleinen Zahlen < 1) negative Exponenten. Als Kontrolle gilt: Die Zahl der verschobenen Stellen ist stets der Betrag des Exponenten.",
          merksatz:
            "Normalisierte Form: 1 ≤ Vorfaktor < 10. Komma nach links verschoben → Exponent positiv. Komma nach rechts verschoben → Exponent negativ.",
        },
        {
          heading: "Multiplikation und Division: der bequeme Weg",
          text: "Multiplikation und Division sind in wissenschaftlicher Notation eleganter als in Dezimaldarstellung. Man trennt konsequent Vorfaktoren (normal rechnen) von Zehnerpotenzen (Exponenten addieren/subtrahieren). Das Ergebnis wird dann normalisiert. Beispiel Blutchemie: Eine Probe enthält 1,4 × 10⁻¹ mol/L Na⁺. Das Volumen der Probe beträgt 5 × 10⁻³ L. Die enthaltene Na⁺-Menge ist: (1,4 × 10⁻¹) × (5 × 10⁻³) = 7,0 × 10⁻⁴ mol = 0,7 mmol. Dieser zweistufige Ansatz — erst Vorfaktoren, dann Exponenten — ist die wichtigste Rechenstrategie für Berechnungen mit Zehnerpotenzen.",
          merksatz:
            "Multiplizieren: Vorfaktoren ×, Exponenten +. Dividieren: Vorfaktoren ÷, Exponenten −. Danach normalisieren.",
        },
        {
          heading: "Logarithmen und der pH-Wert",
          text: "Der pH-Wert ist das wichtigste logarithmische Konzept in der Medizin: pH = −log₁₀([H⁺]). Bei physiologischem pH 7,4 beträgt [H⁺] = 10⁻⁷˒⁴ mol/L ≈ 40 × 10⁻⁹ mol/L = 40 nmol/L. Eine Azidose mit pH 7,0 hat [H⁺] = 10⁻⁷ mol/L = 100 nmol/L — 2,5-mal mehr als bei pH 7,4. Eine schwere Azidose mit pH 6,8 hat [H⁺] = 10⁻⁶˒⁸ mol/L ≈ 158 nmol/L. Der Logarithmus komprimiert den riesigen Konzentrationsbereich auf eine handliche Skala von 0 bis 14. Die Henderson-Hasselbalch-Gleichung erweitert dieses Konzept auf Puffersysteme: pH = pKₐ + log([HCO₃⁻]/[CO₂]).",
          merksatz:
            "pH = −log₁₀([H⁺]). pH↓ um 1 = H⁺-Konzentration × 10. Physiologischer pH 7,4 entspricht [H⁺] = 40 nmol/L.",
        },
        {
          heading: "Addition und Subtraktion: erst angleichen",
          text: "Für Addition und Subtraktion in Zehnerpotenzen-Darstellung gilt die eiserne Regel: Nur Zahlen mit gleichem Exponenten können direkt addiert werden. Der Trick ist, den Exponenten der kleineren Zahl an den der größeren anzupassen, indem der Vorfaktor entsprechend skaliert wird. Beispiel: 3,2 × 10⁵ + 4,8 × 10⁴ = 3,2 × 10⁵ + 0,48 × 10⁵ = 3,68 × 10⁵. Alternativ: beide auf 10⁴ bringen: 32 × 10⁴ + 4,8 × 10⁴ = 36,8 × 10⁴ = 3,68 × 10⁵. Das Ergebnis ist identisch, die zweite Variante ist nicht normalisiert. In der Labormedizin ist dieses Denken nötig, wenn man Konzentrationen aus verschiedenen Einheiten vergleicht.",
          merksatz:
            "Addition/Subtraktion: erst auf gleichen Exponenten angleichen, dann Vorfaktoren addieren/subtrahieren. Danach normalisieren.",
        },
      ],
      merksätze: [
        "Normalisierte Form: a × 10ⁿ mit 1 ≤ a < 10. Vorfaktor hat genau eine Stelle vor dem Komma.",
        "Große Zahl → Komma nach links → positiver Exponent. Kleine Zahl → Komma nach rechts → negativer Exponent.",
        "Multiplikation: Vorfaktoren multiplizieren, Exponenten addieren.",
        "Division: Vorfaktoren dividieren, Exponenten subtrahieren.",
        "Addition/Subtraktion: erst Exponenten angleichen, dann Vorfaktoren addieren/subtrahieren.",
        "Normalisierung: Vorfaktor ≥ 10 → Exponent +1; Vorfaktor < 1 → Exponent −1.",
        "log₁₀(10ⁿ) = n — Logarithmus und Zehnerpotenz sind Umkehroperationen.",
        "pH = −log₁₀([H⁺]); pH 7,4 ↔ [H⁺] ≈ 40 nmol/L = 4 × 10⁻⁸ mol/L.",
        "Eine pH-Einheit Unterschied = zehnfacher Unterschied in der H⁺-Konzentration.",
        "Avogadro: 6,022 × 10²³ Teilchen pro Mol — die Brücke von Mol zu Teilchenzahl.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Konzept der wissenschaftlichen Notation und demonstrieren Sie an einem medizinischen Rechenbeispiel die vollständige Durchführung einer Multiplikation sowie einer Addition in dieser Notation. Erläutern Sie außerdem, warum der pH-Wert als Logarithmus definiert ist.",
        answer: `Die wissenschaftliche Notation ist eine Standarddarstellung von Zahlen als Produkt a × 10ⁿ, wobei der Vorfaktor a im Bereich 1 ≤ a < 10 liegt und n eine ganze Zahl ist. Diese Notation hat zwei Vorteile: (1) Sie komprimiert beliebig große oder kleine Zahlen auf eine handhabbare Form; (2) Sie macht die Größenordnung einer Zahl sofort ablesbar — der Exponent n gibt die Größenordnung direkt an.

**Umrechnung:** Große Zahlen (> 10) erhalten positive Exponenten, weil das Komma nach links wandert: 45.000 = 4,5 × 10⁴ (4 Stellen nach links). Kleine Zahlen (< 1) erhalten negative Exponenten, weil das Komma nach rechts wandert: 0,0032 = 3,2 × 10⁻³ (3 Stellen nach rechts).

**Medizinisches Rechenbeispiel — Multiplikation:** Eine Infusion enthält Dopamin in einer Konzentration von 3,2 × 10⁻³ g/mL. Bei einer Infusionsrate von 2,5 × 10¹ mL/h, wie viel Gramm Dopamin erhält der Patient pro Stunde?
Masse/h = (3,2 × 10⁻³ g/mL) × (2,5 × 10¹ mL/h)
Vorfaktoren: 3,2 × 2,5 = 8,0
Exponenten: (−3) + 1 = −2
Ergebnis: 8,0 × 10⁻² g/h = 0,08 g/h = 80 mg/h.

**Medizinisches Rechenbeispiel — Addition:** Das Gesamthämoglobin eines Patienten setzt sich aus HbA₁ (3,8 × 10⁻² mol/L) und HbA₂ (9,0 × 10⁻⁴ mol/L) zusammen. Gesamthämoglobin?
Angleichen: 3,8 × 10⁻² + 0,09 × 10⁻² = 3,89 × 10⁻² mol/L ≈ 3,9 × 10⁻² mol/L.

**Warum pH als Logarithmus?** Die H⁺-Konzentration in biologischen Flüssigkeiten variiert von pH 1 (Magensäure: [H⁺] = 10⁻¹ mol/L) bis pH 8 (Bauchspeichel: [H⁺] = 10⁻⁸ mol/L) — ein Bereich von 7 Größenordnungen (Faktor 10⁷ = 10.000.000). Eine lineare Skala wäre für diese Variationsbreite unhandlich. Der Logarithmus komprimiert diesen riesigen Bereich auf die Skala 0–14.

Klinisch bedeutsam: Der arteriell gemessene pH liegt im Blut strikt bei 7,35–7,45. Eine Abweichung von nur 0,1 pH-Einheiten bedeutet eine 26 %ige Änderung der H⁺-Konzentration (da 10⁰˒¹ ≈ 1,26). Bei pH 6,8 — nur 0,6 Einheiten unter dem Normwert — ist die H⁺-Konzentration bereits 4-fach erhöht; dies ist mit dem Leben kaum vereinbar. Der Logarithmus macht diese feine, aber vitale Regulation numerisch greifbar.`,
      },
      klinischerBezug:
        "Der pH-Wert des arteriellen Blutes (Normwert 7,35–7,45) ist ein negativer Logarithmus der H⁺-Konzentration; eine Abweichung um 0,3 pH-Einheiten entspricht einer Verdoppelung bzw. Halbierung der H⁺-Konzentration — klinisch der Unterschied zwischen kompensierter Azidose und lebensbedrohlichem Ungleichgewicht. Pharmakokinetische Berechnungen (Serumhalbwertszeit, Clearance, Bioverfügbarkeit) verwenden durchgehend die wissenschaftliche Notation, da Plasmawirkstoffkonzentrationen von 10⁻⁹ bis 10⁻⁴ mol/L reichen und ohne Exponentialschreibweise nicht handhabbar wären.",
      selfTest: [
        {
          question: "Schreiben Sie 0,000 047 in normalisierter wissenschaftlicher Notation.",
          options: ["47 × 10⁻⁶", "4,7 × 10⁻⁵", "4,7 × 10⁵", "0,47 × 10⁻⁴", "4,7 × 10⁻⁴"],
          correctIndex: 1,
          explanation:
            "0,000 047: Das Komma muss 5 Stellen nach rechts verschoben werden, bis eine Zahl zwischen 1 und 10 entsteht: 0,000 047 → 4,7. Da das Komma nach rechts verschoben wurde (Zahl < 1), ist der Exponent negativ: 4,7 × 10⁻⁵. Probe: 4,7 × 10⁻⁵ = 4,7 × 0,000 01 = 0,000 047. Option A (47 × 10⁻⁶) ist mathematisch korrekt gleich 0,000 047, aber nicht normalisiert, da der Vorfaktor 47 > 10. Option D (0,47 × 10⁻⁴) ist ebenfalls korrekt aber nicht normalisiert (Vorfaktor < 1). Option E (4,7 × 10⁻⁴ = 0,00047) ist falsch.",
          hints: [
            "Kleine Zahl < 1: Komma nach rechts verschieben → negativer Exponent. Zähle die Stellen.",
            "0,000 047 → 4,7 braucht 5 Stellen Kommaverschiebung nach rechts → Exponent −5.",
          ],
          difficulty: 1,
          tags: ["wissenschaftliche-notation", "normalisierung", "kommaverschiebung"],
        },
        {
          question: "Berechne: (4,0 × 10⁻³) × (3,0 × 10⁵) = ?",
          options: ["12 × 10²", "1,2 × 10³", "7,0 × 10²", "1,2 × 10⁻¹⁵", "12 × 10⁻¹⁵"],
          correctIndex: 1,
          explanation:
            "Vorfaktoren multiplizieren: 4,0 × 3,0 = 12. Exponenten addieren: (−3) + 5 = 2. Zwischenergebnis: 12 × 10². Da 12 ≥ 10, normalisieren: 12 × 10² = 1,2 × 10³ (Vorfaktor durch 10 geteilt, Exponent um 1 erhöht). Probe: 0,004 × 300.000 = 1.200 = 1,2 × 10³. Option A ist nicht normalisiert (Vorfaktor 12 > 10), aber inhaltlich korrekt. Option B ist die normalisierte, korrekte Antwort.",
          hints: [
            "Vorfaktoren: 4 × 3 = 12. Exponenten: (−3) + 5 = 2. Zwischenergebnis: 12 × 10².",
            "12 × 10² ist nicht normalisiert (12 > 10). Normalisieren: 12 × 10² = 1,2 × 10³.",
          ],
          difficulty: 2,
          tags: ["wissenschaftliche-notation", "multiplikation", "normalisierung"],
        },
        {
          question: "Was ist der pH-Wert, wenn die H⁺-Konzentration 10⁻⁷˒⁴ mol/L beträgt?",
          options: [
            "pH = −7,4",
            "pH = 7,4",
            "pH = 10",
            "pH = 14 − 7,4 = 6,6",
            "pH = log(10⁻⁷˒⁴) ohne Vorzeichen = 7,4",
          ],
          correctIndex: 1,
          explanation:
            "pH = −log₁₀([H⁺]) = −log₁₀(10⁻⁷˒⁴) = −(−7,4) = 7,4. Der Logarithmus von 10ˣ ist x, also log₁₀(10⁻⁷˒⁴) = −7,4. Mit dem Minuszeichen in der pH-Definition: pH = −(−7,4) = 7,4. Dies ist der physiologische pH des arteriellen Blutes. Option A wäre der direkte Logarithmus ohne das Minuszeichen (falsch). Option D (14 − 7,4 = 6,6) berechnet den pOH, nicht den pH.",
          hints: [
            "pH = −log₁₀([H⁺]). Mit [H⁺] = 10⁻⁷˒⁴: log₁₀(10⁻⁷˒⁴) = −7,4. Mit Minuszeichen: pH = 7,4.",
            "Das Minuszeichen in der pH-Definition macht aus dem negativen Logarithmuswert eine positive Zahl.",
          ],
          difficulty: 2,
          tags: ["ph-wert", "logarithmus", "blut"],
        },
        {
          question:
            "Ein Patient hat pH 7,1 (Azidose). Um welchen Faktor ist seine H⁺-Konzentration höher als beim normalen pH 7,4?",
          options: [
            "Faktor 0,3 (also geringer)",
            "Faktor 2",
            "Faktor 10",
            "Faktor 2,0 (da 10⁰˒³ ≈ 2)",
            "Faktor 100",
          ],
          correctIndex: 3,
          explanation:
            "Die H⁺-Konzentration bei pH 7,1 ist 10⁻⁷˒¹ mol/L, bei pH 7,4 ist sie 10⁻⁷˒⁴ mol/L. Das Verhältnis: 10⁻⁷˒¹ / 10⁻⁷˒⁴ = 10^(−7,1−(−7,4)) = 10^(0,3) ≈ 2,0. Da log(2) ≈ 0,3, gilt 10⁰˒³ ≈ 2. Der Patient hat also ca. doppelt so viele H⁺-Ionen wie normal. Klinisch: Diese scheinbar kleine pH-Differenz von 0,3 Einheiten bedeutet eine Verdoppelung der H⁺-Konzentration — bei pH 7,1 sprechen wir von dekompensierter Azidose mit Auswirkungen auf Herzrhythmus, Enzymfunktion und Bewusstsein. Option C (Faktor 10) wäre der Unterschied für eine volle pH-Einheit.",
          hints: [
            "Verhältnis der H⁺-Konzentrationen: 10^(pH-Differenz) = 10^(7,4−7,1) = 10⁰˒³.",
            "log₁₀(2) ≈ 0,3, also 10⁰˒³ ≈ 2. Eine pH-Differenz von 0,3 entspricht Faktor 2.",
          ],
          difficulty: 3,
          tags: ["ph-wert", "azidose", "logarithmus"],
        },
        {
          question: "Addiere: 6,5 × 10⁴ + 8,0 × 10³ = ?",
          options: [
            "14,5 × 10⁷",
            "14,5 × 10⁴",
            "7,3 × 10⁴",
            "6,58 × 10⁴",
            "7,3 × 10⁴ (identisch mit C)",
          ],
          correctIndex: 2,
          explanation:
            "Für Addition angleichen: 8,0 × 10³ = 0,80 × 10⁴. Dann: 6,5 × 10⁴ + 0,80 × 10⁴ = 7,3 × 10⁴. Probe: 65.000 + 8.000 = 73.000 = 7,3 × 10⁴. Option A ist falsch (Exponenten wurden addiert statt die Vorfaktoren). Option B hat den richtigen Exponenten, aber falschen Vorfaktor (14,5 würde entstehen, wenn beide Zahlen denselben Exponenten 10⁴ hätten, was sie nicht tun). Option D (6,58 × 10⁴) ist falsch: 6,5 + 0,08 ≠ 6,58; 8 × 10³ = 0,8 × 10⁴, nicht 0,08 × 10⁴.",
          hints: [
            "Bei Addition muss zuerst auf gleichen Exponenten gebracht werden: 8,0 × 10³ = 0,80 × 10⁴.",
            "6,5 × 10⁴ + 0,80 × 10⁴ = (6,5 + 0,80) × 10⁴ = 7,3 × 10⁴.",
          ],
          difficulty: 2,
          tags: ["wissenschaftliche-notation", "addition", "exponenten-angleichen"],
        },
        {
          question:
            "Die Lichtgeschwindigkeit beträgt 2,998 × 10⁸ m/s. Wie weit reist Licht in 3 × 10⁻⁹ s (= 3 Nanosekunden)?",
          options: [
            "8,994 × 10⁻¹ m ≈ 0,9 m",
            "8,994 × 10¹⁷ m",
            "9,994 × 10⁻¹ m",
            "2,998 × 10⁻¹ m",
            "8,994 × 10⁻² m",
          ],
          correctIndex: 0,
          explanation:
            "Strecke = Geschwindigkeit × Zeit = (2,998 × 10⁸ m/s) × (3 × 10⁻⁹ s). Vorfaktoren: 2,998 × 3 ≈ 8,994. Exponenten: 8 + (−9) = −1. Ergebnis: 8,994 × 10⁻¹ m ≈ 0,9 m. Licht legt in 3 Nanosekunden also ca. 90 cm zurück. Dies ist in der Computertechnik relevant: Signallaufzeit in modernen Prozessoren liegt im Nanosekunden-Bereich. In der Medizin nutzt Ultraschall-Sonographie ähnliche Zeitskalen für Laufzeitmessungen.",
          hints: [
            "Strecke = Geschwindigkeit × Zeit. Vorfaktoren multiplizieren, Exponenten addieren.",
            "2,998 × 3 ≈ 9 (genau 8,994). Exponenten: 8 + (−9) = −1. Ergebnis: ~9 × 10⁻¹ m.",
          ],
          difficulty: 2,
          tags: ["wissenschaftliche-notation", "multiplikation", "lichtgeschwindigkeit"],
        },
        {
          question: "Welche Aussage zur wissenschaftlichen Notation ist KORREKT?",
          options: [
            "15 × 10³ ist eine normalisierte wissenschaftliche Notation.",
            "1,5 × 10⁴ ist dieselbe Zahl wie 15 × 10³ und die normalisierte Form.",
            "Bei 0,23 × 10⁵ muss der Exponent um 1 erhöht werden, um zu normalisieren.",
            "Normalisierung erfordert, dass der Exponent positiv ist.",
            "Jede Zahl hat genau eine mögliche wissenschaftliche Notation.",
          ],
          correctIndex: 1,
          explanation:
            "15 × 10³ = 15.000 = 1,5 × 10⁴. Die normalisierte Form ist 1,5 × 10⁴, da 1 ≤ 1,5 < 10. Option A ist falsch: 15 × 10³ ist nicht normalisiert (Vorfaktor 15 > 10). Option C ist falsch: Bei 0,23 × 10⁵ wird normalisiert zu 2,3 × 10⁴ (Exponent sinkt von 5 auf 4, nicht steigt). Option D ist falsch: Normalisierung bedeutet 1 ≤ a < 10, sagt nichts über das Vorzeichen des Exponenten aus. Option E ist falsch: 15.000 kann als 1,5 × 10⁴ oder 15 × 10³ oder 150 × 10² usw. geschrieben werden.",
          hints: [
            "Normalisiert: Vorfaktor genau zwischen 1 (inklusiv) und 10 (exklusiv). Exponent kann positiv oder negativ sein.",
            "Prüfe: 15 × 10³ — Vorfaktor 15 ist ≥ 10, also nicht normalisiert. 1,5 × 10⁴ ist die normalisierte Form.",
          ],
          difficulty: 2,
          tags: ["normalisierung", "vorfaktor", "wissenschaftliche-notation"],
        },
        {
          question: "Welcher Rechenweg ist korrekt für (9,6 × 10⁶) / (3,2 × 10⁻²)?",
          options: [
            "(9,6/3,2) × 10^(6/(−2)) = 3,0 × 10⁻³",
            "(9,6/3,2) × 10^(6−(−2)) = 3,0 × 10⁸",
            "(9,6/3,2) × 10^(6×(−2)) = 3,0 × 10⁻¹²",
            "(9,6 − 3,2) × 10^(6−(−2)) = 6,4 × 10⁸",
            "(9,6/3,2) × 10^(6+2) = 3,0 × 10⁸",
          ],
          correctIndex: 1,
          explanation:
            "Bei Division werden Vorfaktoren geteilt und Exponenten subtrahiert: (9,6 / 3,2) × 10^(6 − (−2)) = 3,0 × 10^(6+2) = 3,0 × 10⁸. Option A dividiert fälschlicherweise die Exponenten (statt zu subtrahieren). Option C multipliziert die Exponenten (das wäre Potenzieren, nicht Division). Option D subtrahiert die Vorfaktoren statt sie zu dividieren. Option E ist identisch mit B in der Rechnung (6 − (−2) = 6 + 2 = 8) und führt zum gleichen richtigen Ergebnis — B ist die Standardformulierung mit expliziter Subtraktion.",
          hints: [
            "Division: Vorfaktoren dividieren (9,6 / 3,2 = 3), Exponenten subtrahieren: 6 − (−2) = 8.",
            "Minus − gibt plus: 6 − (−2) = 6 + 2 = 8. Ergebnis: 3,0 × 10⁸.",
          ],
          difficulty: 2,
          tags: ["wissenschaftliche-notation", "division", "exponenten"],
        },
      ],
    },
    // === from kap4-einheiten ===
    {
      id: "ma-4-01",
      title: "Länge, Fläche und Volumen — Umrechnung",
      stichworte: [
        "Längeneinheiten",
        "Flächeneinheiten",
        "Volumeneinheiten",
        "Faktor quadrieren",
        "Faktor kubieren",
        "Liter Kubikdezimeter",
        "mL cm³",
        "Körperoberfläche",
        "Mosteller-Formel",
        "Neuner-Regel",
        "Alveolenfläche",
        "Deziliter",
      ],
      content: `## Einleitung

1 m² = 10.000 cm² (nicht 100!). 1 L = 1.000 mL = 1 dm³ = 1.000 cm³. Wer das nicht weiß, macht beim nächsten Berechnungsschritt einen **Faktor-10-Fehler** — ein klassischer MedAT-Stolperpunkt. **Länge, Fläche und Volumen** hängen über Potenzen zusammen: Bei der **Fläche** wird der Längenfaktor **quadriert** (k²), beim **Volumen** **kubiert** (k³). Für den MedAT sind Längenumrechnungen, Flächen- und Volumenumrechnungen, **Körperoberfläche (BSA)** für Dosierungen und Laborwerte (g/dL → g/L) prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Längeneinheiten** von km bis nm (Faktor 10 je Stufe) und medizinische Größenordnungen (Zelle µm, Virus nm)
- **Flächenumrechnung:** Faktor **quadrieren** — 1 m² = 10.000 cm² (nicht 100!)
- **Volumenumrechnung:** Faktor **kubieren** — 1 m³ = 10⁶ cm³; 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; **1 mL = 1 cm³**
- **Körperoberfläche (BSA)** nach Mosteller und klinische Anwendung (Chemotherapie, Verbrennungen)
- **Laborwerte** g/dL ↔ g/L (1 dL = 100 mL) und typische MedAT-Fallen

---

## Längeneinheiten — Die vollständige Hierarchie

**Um Längen sicher umzurechnen,** brauchst du die **metrische Hierarchie**. **Dafür** die Grundregel: Jede **Längeneinheit** unterscheidet sich von der nächsten um den **Faktor 10**.

Die metrischen Längeneinheiten sind durch Zehnerpotenzen verbunden:

1 km = 1.000 m = 10³ m
1 m = 10 dm = 100 cm = 1.000 mm
1 mm = 1.000 μm = 10³ μm
1 μm = 1.000 nm = 10³ nm
1 nm = 1.000 pm = 10³ pm

Eselsbrücke: km → m → dm → cm → mm → μm → nm, je Schritt Faktor 10. Für größere Sprünge: 1 m = 10⁶ μm; 1 m = 10⁹ nm.

In der Medizin sind folgende Größenordnungen essenziell:
- Menschliche Körpergröße: ~1,7 m = 170 cm = 1.700 mm
- Erythrozyten: Durchmesser ~7–8 μm
- Zellkern: ~5–10 μm; Mitochondrien: 0,5–10 μm
- Viren: 20–300 nm (nicht im Lichtmikroskop sichtbar; Wellenlänge sichtbares Licht 400–700 nm)
- DNA-Doppelhelix: 2 nm Durchmesser; Glukosemolekül: ~0,9 nm
- Atome: ~0,1 nm (1 Ångström = 10⁻¹⁰ m)

Das Lichtmikroskop löst bis ~200 nm auf: Bakterien (~1 μm) sichtbar, Viren (~100 nm) nicht.

> **Merke:** **Länge:** Jede Stufe = Faktor 10. 1 m = 10⁶ μm = 10⁹ nm. Zellen im μm-Bereich, Viren im nm-Bereich.

---

## Flächeneinheiten — Der häufigste Irrtum am MedAT

**Bisher haben wir gesehen:** Lineare Längen mit Faktor 10. **Bei Flächen** gilt etwas anderes: Der Umrechnungsfaktor wird **quadriert** (mit 2 potenziert). **Das ist der häufigste MedAT-Fehler.**

ACHTUNG: Bei **Flächeneinheiten** wird der Faktor **QUADRIERT**!

**1 m² = 10.000 cm² = 10⁴ cm²** (NICHT 100 cm²!)

Warum? 1 m² = 1 m × 1 m = 100 cm × 100 cm = 10.000 cm². In ein 1 m × 1 m Quadrat passen 100 × 100 = 10.000 Stück von 1 cm × 1 cm.

Allgemeine Regel: Wenn 1 Einheit₁ = k × Einheit₂, dann gilt 1 Einheit₁² = k² × Einheit₂².

> **Merke:** Fläche: Umrechnungsfaktor **quadrieren**! 1 m² = 100² cm² = 10.000 cm². Das ist der häufigste MedAT-Fehler — nicht 100 cm², sondern 10.000 cm²!

Vollständige Flächenumrechnungen:
- 1 km² = 10⁶ m² = 100 ha (Hektar)
- 1 ha = 10.000 m² = 10⁴ m²
- 1 m² = 10⁴ cm² = 10⁶ mm²
- 1 cm² = 10² mm² = 100 mm²
- 1 mm² = 10⁶ μm²; 1 μm² = 10⁶ nm²

Klinisch relevante Flächen:
- Körperoberfläche Erwachsener: ~1,7–2,0 m² = 17.000–20.000 cm²
- Alveolenfläche der Lunge: ~70–140 m² (enorme Austauschfläche!)
- Dünndarmoberfläche (mit Zotten und Mikrovilli): ~250–400 m²
- Handflächenfläche: ~0,8 % KOF (Neuner-Regel in der Verbrennungsmedizin)

**SVG-Hinweis (Fläche: Faktor quadrieren):** Ein Quadrat 1 m × 1 m mit 100×100-Kästchen (1 cm²) zeigt: 1 m² = 10.000 cm². *Typ: Schema / Veranschaulichung.*

![Fläche Quadrat](/grafik-flaeche-quadrat.svg)

---

## Volumeneinheiten — Der Faktor wird kubisch

**Bisher haben wir gesehen:** Fläche = Faktor². **Bei Volumen** wird der Faktor **kubiert** (mit 3 potenziert). **Dafür** die wichtigsten Beziehungen.

Bei Volumen wird der Faktor **KUBIERT**:

**1 m³ = 10⁶ cm³** (NICHT 10³ cm³!)

1 m³ = 100 cm × 100 cm × 100 cm = 10⁶ cm³ = 1.000.000 cm³

Wichtige Beziehungen:
- 1 m³ = 1.000 L (ein Kubikmeter fasst 1.000 Liter)
- **1 L = 1 dm³** (ein Liter = exakt ein Kubikdezimeter — Grunddefinition!)
- 1 L = 1.000 mL = 1.000 cm³
- **1 mL = 1 cm³** (sehr wichtig in der Medizin!)
- 1 dL = 100 mL (für Laborwerte: mg/dL, g/dL)
- 1 μL = 0,001 mL = 10⁻³ mL (Blutbild: Erythrozyten/μL)

Klinisch relevante Volumina:
- Gesamtblutvolumen Erwachsener: ~5 L = 5.000 mL
- Herzschlagvolumen: ~70 mL; HZV: ~5 L/min (Ruhe)
- Atemzugvolumen: ~500 mL; Totalkapazität Lunge: ~6 L
- Tagesharnmenge: ~1.500 mL; Perspiratio insensibilis: ~700 mL/Tag

> **Merke:** 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; **1 mL = 1 cm³** (exakte Gleichheit!); 1 dL = 100 mL (relevant für g/dL-Laborwerte). Volumen: Faktor **kubieren**!

**SVG-Hinweis (Volumen: 1 L = 1 dm³ = 1.000 cm³):** Ein Würfel 1 dm Kantenlänge mit Unterteilung in cm³ zeigt: 1 L = 1.000 cm³. *Typ: Schema / Veranschaulichung.*

![Volumen Liter](/grafik-volumen-liter.svg)

---

## Der allgemeine Umrechnungsalgorithmus

**Um jede Umrechnung sicher zu machen,** merk dir: **Dimension bestimmt die Potenz.** **Dafür** die drei Fälle:

1. **Länge:** Faktor k → k¹
2. Fläche: Faktor k → k²
3. Volumen: Faktor k → k³

Beispiel (1 km = 10³ m):
- Fläche: 1 km² = (10³)² m² = 10⁶ m²
- Volumen: 1 km³ = (10³)³ m³ = 10⁹ m³

## MedAT-Fallen zusammengefasst

1. 1 m² = 10.000 cm² (nicht 100 cm²!) — häufigster Fehler!
2. 1 m³ = 10⁶ cm³ (nicht 10³ cm³!)
3. 1 L = 1.000 mL (nicht 100 mL)
4. 1 mL = 1 cm³ (identisch, nicht 10 cm³)
5. 1 dL = 100 mL (für Laborwerte: g/dL, mg/dL)
6. 1 mm² = 10⁶ μm² (NICHT 10³ — Faktor quadrieren: 1 mm = 10³ μm → quadriert = 10⁶)

Körperoberfläche (Mosteller-Formel):
BSA [m²] = √(Größe[cm] × Gewicht[kg] / 3.600)
Für 170 cm, 70 kg: BSA = √(170 × 70 / 3.600) = √3,306 ≈ 1,82 m²

Die KOF wird in der Onkologie für Chemotherapiedosierungen und in der Intensivmedizin für Flüssigkeitsbilanzierung genutzt.

---

## MedAT-Rechenbeispiele

**Um das Gelernte anzuwenden,** folgen drei typische Aufgaben: Fläche, Volumen, Laborwert. **Kernfrage:** Ist der Faktor linear, quadratisch oder kubisch?

**Aufgabe 1 — Flächenumrechnung:** Eine Hauttransplantation erfordert eine Fläche von 0,15 m². Wie viel cm² ist das?
Lösung: 1 m² = 10.000 cm² → 0,15 m² = 0,15 × 10.000 = 1.500 cm². Das entspricht einem Hautlappen von ca. 30 cm × 50 cm.

**Aufgabe 2 — Volumenumrechnung:** Ein Zytostatikum wird in 250 cm³ NaCl gelöst. Wie viel mL und L sind das?
Lösung: 1 cm³ = 1 mL → 250 cm³ = 250 mL. In Liter: 250 mL = 0,25 L. Das entspricht einer Standard-Kurzinfusion.

**Aufgabe 3 — Laborwert:** Der Hb-Wert beträgt 14 g/dL. Wie viel g/L ist das?
Lösung: 1 dL = 100 mL = 0,1 L → 1 L = 10 dL → 14 g/dL × 10 = 140 g/L. Diese Umrechnung ist am MedAT häufig, da manche Labore g/dL, andere g/L verwenden.

> **Merke:** Bei Flächen- und Volumenumrechnungen immer fragen: "Ist der Faktor linear, quadratisch oder kubisch?" Die Dimension bestimmt die Potenz des Umrechnungsfaktors. Länge: k¹, Fläche: k², Volumen: k³.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Länge: Faktor 10 je Stufe (km → m → … → μm → nm); Fläche: Faktor **quadrieren** — 1 m² = 10.000 cm² (nicht 100!); Volumen: Faktor **kubieren** — 1 m³ = 10⁶ cm³; 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; **1 mL = 1 cm³**; 1 dL = 100 mL; g/dL → g/L: × 10; BSA Mosteller: √(Größe[cm]×Gewicht[kg]/3.600); Alveolenfläche ~70–140 m²; KOF ~1,7–2,0 m².

**Ergänzend vertiefend (noch prüfungsnah):** Neuner-Regel Verbrennungen; 1 mm² = 10⁶ μm²; Hektar; klinische Volumina (Blutvolumen, Herzzeitvolumen).

**Häufige Fragen:**
- "1 m² = ? cm²" → 10.000 cm² (Faktor quadrieren: 100² = 10.000 — nicht 100!)
- "2,5 L = ? mL" → 2.500 mL (1 L = 1.000 mL)
- "1 mL = ? cm³" → 1 cm³ (exakte Gleichheit per Definition — kein Umrechnen nötig!)
- "14 g/dL Hb = ? g/L" → 140 g/L (1 dL = 0,1 L → × 10)

**Typische Prüfungsfallen / Verwechslungen:**
- 1 m² ≠ 100 cm² — **häufigster MedAT-Fehler!** Richtig: 10.000 cm² (= 100²)
- 1 m³ ≠ 1.000 cm³ — Richtig: 1.000.000 cm³ (= 10⁶ cm³; Faktor kubieren: 100³)
- 1 mm² ≠ 1.000 µm² — Richtig: 1.000.000 µm² (1 mm = 10³ µm → quadriert: 10⁶ µm²)

**Prüfungsrelevante Zahlen/Fakten:**
- Dimension bestimmt Potenz: Länge k¹ | Fläche k² | Volumen k³
- 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³; 1 dL = 100 mL
- Mosteller-Formel: BSA [m²] = √(Größe[cm] × Gewicht[kg] / 3.600); Erwachsener: ~1,73 m²
- Alveolenfläche: 70–140 m²; Darmoberfläche: ~250–400 m²; Körperoberfläche: ~1,7–2,0 m²
---

## Zusammenfassung (ultrakompakt)

- **Länge**: 1 m = 100 cm = 1.000 mm = 10⁶ µm = 10⁹ nm; 1 km = 1.000 m
- **Fläche**: 1 m² = 10.000 cm² = 10⁶ mm²; Umrechnungsfaktor wird quadriert!
- **Volumen**: 1 m³ = 10⁶ cm³ = 10⁹ mm³; 1 L = 1 dm³ = 1.000 cm³ = 1.000 mL
- **BSA (Mosteller)**: √(Größe[cm] × Gewicht[kg] / 3.600); Erwachsener ~1,73 m²
- **Klinisch**: Hb 14 g/dL = 140 g/L; Hauttransplantation in cm² berechnen; Chemotherapiedosis in mg/m²`,
      lernziele: [
        "Längeneinheiten von km bis nm über die Zehnerpotenzen-Hierarchie korrekt umrechnen",
        "Den quadratischen Faktor bei Flächeneinheiten anwenden (1 m² = 10.000 cm², 1 cm² = 100 mm²)",
        "Den kubischen Faktor bei Volumeneinheiten anwenden (1 m³ = 10⁶ cm³, 1 L = 1 dm³ = 1.000 cm³)",
        "Die Beziehung 1 mL = 1 cm³ kennen und klinisch anwenden",
        "Medizinisch relevante Größenordnungen (Zellgröße, Organvolumina, Körperoberfläche) zuordnen",
      ],
      sections: [
        {
          heading: "Längeneinheiten — lineare Umrechnung Schritt für Schritt",
          text: "Die Hierarchie km → m → dm → cm → mm → μm → nm folgt dem Faktor 10 je Schritt. Für größere Sprünge addiert man die Zehnerpotenz-Exponenten: km → cm sind 5 Schritte à Faktor 10, also Faktor 10⁵. Konkret: 1 km = 10⁵ cm. Medizinische Größenordnungen als Ankerpunkte: Körpergröße ~1,7 m; Organebene Millimeter; Zellebene Mikrometer (μm); Virus- und DNA-Ebene Nanometer (nm). Das Lichtmikroskop löst bis ~200 nm auf, das Elektronenmikroskop bis ~0,1 nm. Zellen (μm-Bereich) sind im Lichtmikroskop sichtbar, Viren (nm-Bereich) nicht. Merktipp: Das Auflösungsvermögen des Auges beträgt ~0,1 mm = 100 μm — alles Kleinere braucht ein Mikroskop.",
          merksatz: "Längenreihe km–m–dm–cm–mm–μm–nm, je Schritt Faktor 10; 1 m = 10⁶ μm = 10⁹ nm",
        },
        {
          heading: "Flächeneinheiten — Faktor quadrieren",
          text: "Wenn 1 Einheit₁ = k × Einheit₂, dann 1 Einheit₁² = k² × Einheit₂². Anschaulich: 1 m = 100 cm → 1 m² = 100² cm² = 10.000 cm². Die Alveolenfläche der Lunge von 70–140 m² = 700.000–1.400.000 cm², erreicht durch ~300–400 Millionen Alveolen. Klinisch: Die Körperoberfläche (KOF) wird in m² für Chemotherapie-Dosierungen (mg/m²) und Verbrennungsflächenberechnungen eingesetzt. Die Neuner-Regel schätzt verbrannte KOF-Anteile in Prozent: Kopf 9 %, je Arm 9 %, Rumpf vorne 18 %, Rumpf hinten 18 %, je Bein 18 %. Ab 15–20 % verbrannter KOF droht Plasmaverlust und hypovolämischer Schock.",
          merksatz: "Fläche: Faktor quadrieren! 1 m² = 10.000 cm² (= 100² cm²), NICHT 100 cm²",
        },
        {
          heading: "Volumeneinheiten — Faktor kubieren",
          text: "Wenn 1 m = 100 cm, dann 1 m³ = (100 cm)³ = 10⁶ cm³. Die wichtigste Merkhilfe: 1 L = 1 dm³. Da 1 dm = 10 cm, gilt 1 dm³ = (10 cm)³ = 1.000 cm³. Also 1 L = 1.000 mL = 1.000 cm³. Daraus: 1 mL = 1 cm³. Diese Gleichheit ist in der Medizin allgegenwärtig: Infusionsmengen in mL, Injektionsvolumina in mL, Harnausscheidung in mL/h. Die Flüssigkeitsbilanz auf der Intensivstation wird stundengenau in mL geführt — Einfuhr − Ausfuhr ergibt die Bilanz.",
          merksatz: "1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³ (exakte Gleichheit!)",
        },
        {
          heading: "Klinische Volumenkonzepte im Überblick",
          text: "Gesamtkörperwasser (TBW): ~60 % des Körpergewichts = ~42 L bei 70 kg. Davon: Intrazellulärraum ~28 L (2/3), Extrazellulärraum ~14 L (1/3). EZR teilt sich: Interstitium ~11 L und Plasma ~3 L. Plasmavolumen ~3 L plus Erythrozytenvolumen ~2 L = Gesamtblutvolumen ~5 L. Infusionslösungen verteilen sich unterschiedlich: Kristalloide (NaCl 0,9 %, Ringerlaktat) im gesamten EZR; kolloidale Lösungen bleiben länger intravaskulär. Beim hypovolämischen Schock (Blutverlust >750 mL) ist schnelle Volumensubstitution lebensrettend: 1.000–2.000 mL Kristalloide initial.",
          merksatz:
            "Gesamtblutvolumen ~5 L; Gesamtkörperwasser ~42 L bei 70 kg; Plasmavolumen ~3 L",
        },
      ],
      merksätze: [
        "1 m² = 10.000 cm² (nicht 100!) — Flächenumrechnung: Faktor quadrieren",
        "1 m³ = 10⁶ cm³; 1 L = 1 dm³ = 1.000 mL = 1.000 cm³; 1 mL = 1 cm³",
        "Länge × k → Fläche × k² → Volumen × k³",
        "1 km = 10³ m = 10⁵ cm = 10⁶ mm = 10⁹ μm = 10¹² nm",
        "Alveolenfläche Lunge: ~70–140 m²; Darmoberfläche: ~250–400 m²",
        "1 dL = 100 mL (relevant für Laborwerte: mg/dL, g/dL)",
        "Zellgröße: μm-Bereich; Viren: nm-Bereich; Moleküle: sub-nm-Bereich",
        "1 ha = 10.000 m² = 10⁴ m²",
        "Körperoberfläche Erwachsener: ~1,73 m² (Mosteller-Formel)",
        "1 mm² = 10⁶ μm² (NICHT 10³ — Faktor quadrieren!)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Eine quadratische Wundfläche hat eine Kantenlänge von 3 cm. Berechnen Sie die Wundfläche in mm². Erklären Sie das Prinzip der Flächenumrechnung und nennen Sie ein klinisches Beispiel, bei dem Flächenberechnungen relevant sind.",
        answer:
          "Berechnung: Schritt 1: Fläche in cm²: A = 3 cm × 3 cm = 9 cm². Schritt 2: Umrechnung cm² → mm²: Da 1 cm = 10 mm, gilt für Flächen 1 cm² = (10 mm)² = 100 mm² — der Faktor wird quadriert! Daher: 9 cm² × 100 mm²/cm² = 900 mm². Alternativ direkt in mm rechnen: 3 cm = 30 mm → A = 30 mm × 30 mm = 900 mm². Ergebnis: 900 mm². Prinzip: Bei Flächenumrechnungen wird der Längenfaktor quadriert (k → k²). Klinisches Beispiel: In der Verbrennungsmedizin wird die verbrannte Körperoberfläche (KOF) nach der Neuner-Regel geschätzt. Ab 15–20 % verbrannter KOF droht hypovolämischer Schock durch Plasmaverlust. Volumentherapie nach Parkland-Formel: 4 mL × kg Körpergewicht × % verbrannte KOF in den ersten 24 Stunden. Bei 70 kg und 20 % verbrannter KOF: 4 × 70 × 20 = 5.600 mL in 24 h. Die KOF-Berechnung nach Mosteller: BSA = √(Größe[cm] × Gewicht[kg] / 3.600) liefert die absolute Fläche in m² für präzise Dosierungen.",
      },
      klinischerBezug:
        "In der Onkologie wird die Körperoberfläche (BSA) für Chemotherapiedosierungen genutzt: Dosierung [mg] = Dosis [mg/m²] × BSA [m²]. Die Darmoberfläche von ~250 m² ermöglicht die Resorption von täglich ~8–9 L Flüssigkeit; bei Resektion großer Dünndarmanteile (Kurzdarmsyndrom) ist die verbleibende Resorptionsfläche direkt lebensrelevant. Die Alveolenfläche von ~70–140 m² erlaubt Gasaustausch von 250 mL O₂/min in Ruhe und bis 3.500 mL O₂/min bei Maximalbelastung — dies erklärt, warum schon kleine Atelektasen (kollabierte Bezirke) messbare Oxygenierungsstörungen verursachen.",
      selfTest: [
        {
          question: "1 m² entspricht wie viel cm²?",
          options: ["10.000 cm²", "100 cm²", "1.000 cm²", "1.000.000 cm²", "10 cm²"],
          correctIndex: 0,
          explanation:
            "1 m = 100 cm. Bei Flächen wird der Faktor quadriert: 1 m² = (100 cm)² = 10.000 cm². Das ist der häufigste MedAT-Irrtum — viele denken 100 cm², aber der Faktor 100 muss quadriert werden: 100² = 10.000. Anschaulich: In ein 1 m × 1 m Quadrat passen 100 × 100 = 10.000 Quadrate von je 1 cm × 1 cm. Diese Frage wird regelmäßig am MedAT gestellt und ebenso regelmäßig falsch beantwortet.",
          hints: [
            "1 m = 100 cm. Was ist 100 zum Quadrat?",
            "In ein 1 m × 1 m Quadrat passen 100 × 100 = ? Zentimeterquadrate.",
          ],
          difficulty: 1,
          tags: ["flächeneinheiten", "umrechnung", "quadrat"],
        },
        {
          question: "Wie viele mL sind 2,5 L?",
          options: ["2.500 mL", "250 mL", "25.000 mL", "0,25 mL", "25 mL"],
          correctIndex: 0,
          explanation:
            "1 L = 1.000 mL. Daher: 2,5 L = 2,5 × 1.000 mL = 2.500 mL. Diese Umrechnung ist in der klinischen Praxis täglich relevant: Infusionsflaschen haben meist 250 mL, 500 mL oder 1.000 mL. Täglicher Flüssigkeitsbedarf eines Erwachsenen: ~2.500 mL = 2,5 L. Für die Intensivstation: stündliche Flüssigkeitsbilanz in mL/h erfordert die sichere Umrechnung.",
          hints: ["1 L = 1.000 mL. Multipliziere 2,5 mit 1.000.", "2,5 × 1.000 = 2.500."],
          difficulty: 1,
          tags: ["volumeneinheiten", "umrechnung", "liter"],
        },
        {
          question: "1 m³ entspricht wie viel cm³?",
          options: ["1.000.000 cm³", "1.000 cm³", "100.000 cm³", "10.000 cm³", "100 cm³"],
          correctIndex: 0,
          explanation:
            "1 m = 100 cm. Bei Volumen wird der Faktor kubiert: 1 m³ = (100 cm)³ = 100³ cm³ = 1.000.000 cm³ = 10⁶ cm³. Anschaulich: 1 m³ = 1.000 L (da 1 L = 1 dm³ und 1 m = 10 dm, also 1 m³ = 10³ dm³ = 1.000 L). Ein Badewannenvollbad fasst etwa 150–200 L = 0,15–0,20 m³. Merke: 100³ = 100 × 100 × 100 = 1.000.000.",
          hints: ["1 m = 100 cm. Was ist 100 hoch 3 (kubiert)?", "100 × 100 × 100 = ?"],
          difficulty: 2,
          tags: ["volumeneinheiten", "umrechnung", "kubikmeter"],
        },
        {
          question: "Ein Injektionsvolumen beträgt 2 mL. Wie viel cm³ ist das?",
          options: ["2 cm³", "0,2 cm³", "20 cm³", "0,002 cm³", "200 cm³"],
          correctIndex: 0,
          explanation:
            "1 mL = 1 cm³ — diese Gleichheit gilt exakt per Definition: 1 L = 1 dm³ → 1 mL = 1/1.000 L = 1/1.000 dm³ = 1 cm³. Daher: 2 mL = 2 cm³. In der Medizin sind mL und cm³ vollständig austauschbar. Spritzen werden in mL angegeben (1-mL, 5-mL, 10-mL-Spritze), und das Volumen entspricht der Angabe in cm³. Injektionen i.m. sind typischerweise 1–5 mL.",
          hints: [
            "1 mL = 1 cm³ ist eine exakte Gleichheit per Definition.",
            "Keine Umrechnung nötig: 2 mL = 2 cm³.",
          ],
          difficulty: 1,
          tags: ["volumeneinheiten", "milliliter", "klinisch"],
        },
        {
          question:
            "Eine rechteckige Wundauflage misst 5 cm × 8 cm. Wie groß ist die Fläche in mm²?",
          options: ["4.000 mm²", "400 mm²", "40 mm²", "40.000 mm²", "4 mm²"],
          correctIndex: 0,
          explanation:
            "Schritt 1: Fläche in cm²: A = 5 cm × 8 cm = 40 cm². Schritt 2: Umrechnung: 1 cm = 10 mm → 1 cm² = 10² mm² = 100 mm². A = 40 cm² × 100 = 4.000 mm². Alternativ: 5 cm = 50 mm; 8 cm = 80 mm → A = 50 mm × 80 mm = 4.000 mm². Beide Wege liefern das gleiche Ergebnis — immer auch durch Direktrechnung in der Zieleinheit prüfen.",
          hints: [
            "Zuerst Fläche in cm², dann 1 cm² = 100 mm² anwenden.",
            "5 × 8 = 40 cm²; 40 × 100 = 4.000 mm².",
          ],
          difficulty: 2,
          tags: ["flächeneinheiten", "umrechnung", "wundfläche"],
        },
        {
          question: "Welches Volumen in Liter hat ein Würfel mit Kantenlänge 2 dm?",
          options: ["8 L", "2 L", "6 L", "4 L", "0,008 L"],
          correctIndex: 0,
          explanation:
            "V = a³ = (2 dm)³ = 8 dm³. Da 1 dm³ = 1 L: V = 8 L. Ein Würfel mit Kantenlänge 2 dm hat das 8-fache Volumen des Einheitswürfels (1 dm Kante = 1 L). Verdoppelung der Kantenlänge → 2³ = 8-faches Volumen. Klinische Analogie: Verdoppelung des Gefäßradius → 16-facher Fluss (Hagen-Poiseuille-Gesetz: Q ∝ r⁴). Kubisches Skalieren erklärt biologische Wachstumsphänomene.",
          hints: ["V = a³ = (2 dm)³ = ? dm³. Und 1 dm³ = 1 L.", "2³ = 8; also 8 dm³ = 8 L."],
          difficulty: 2,
          tags: ["volumeneinheiten", "würfel", "dezimeter"],
        },
        {
          question: "1 mm² entspricht wie viel μm²?",
          options: ["1.000.000 μm²", "1.000 μm²", "100 μm²", "10.000 μm²", "100.000 μm²"],
          correctIndex: 0,
          explanation:
            "1 mm = 1.000 μm = 10³ μm. Für Flächen wird der Faktor quadriert: 1 mm² = (10³ μm)² = 10⁶ μm² = 1.000.000 μm². Anwendung: Ein Erythrozyt hat eine Fläche von ~140 μm² (bikonkave Scheibe, ~8 μm Durchmesser). In 1 mm² = 10⁶ μm² Blutausstrich-Fläche passen theoretisch viele tausend Erythrozyten — diese Größenordnung hilft bei Zellzählaufgaben.",
          hints: [
            "1 mm = 10³ μm. Bei Flächen: Faktor quadrieren: (10³)² = ?",
            "(10³)² = 10⁶ = 1.000.000.",
          ],
          difficulty: 3,
          tags: ["flächeneinheiten", "mikrometer", "umrechnung"],
        },
        {
          question: "Wie viel dL entsprechen 350 mL?",
          options: ["3,5 dL", "35 dL", "0,35 dL", "350 dL", "0,035 dL"],
          correctIndex: 0,
          explanation:
            "1 dL = 100 mL. Daher: 350 mL ÷ 100 = 3,5 dL. Der Deziliter ist in der Labormedizin wichtig: Blutglukose wird in mg/dL angegeben (Normwert nüchtern: 70–100 mg/dL), Hämoglobin in g/dL (Frauen 12–16 g/dL, Männer 13–17 g/dL). Umrechnung Glukose 100 mg/dL in mmol/L: 100 mg/dL = 1.000 mg/L = 1 g/L → in mmol/L: 1.000 mg/L ÷ 180 g/mol = 5,56 mmol/L (Molmasse Glukose: 180 g/mol).",
          hints: ["1 dL = 100 mL. Teile 350 durch 100.", "350 ÷ 100 = 3,5 dL."],
          difficulty: 1,
          tags: ["volumeneinheiten", "deziliter", "umrechnung"],
        },
      ],
    },
    {
      id: "ma-4-02",
      title: "Zeit, Geschwindigkeit, Beschleunigung",
      stichworte: [
        "Zeiteinheiten",
        "Geschwindigkeit",
        "Beschleunigung",
        "km/h in m/s",
        "Faktor 3,6",
        "Freier Fall",
        "Erdbeschleunigung",
        "Herzfrequenz",
        "Nervenleitgeschwindigkeit",
        "Kinematik",
        "Sexagesimalsystem",
        "Traumamechanismus",
      ],
      content: `## Einleitung

Ein EKG-Intervall wird in **ms** gemessen. Blutfluss in **m/s** oder cm/s. Bremsweg beim Autounfall in m und **g-Kräfte**. **Zeit, Geschwindigkeit und Beschleunigung** sind die **kinematischen Grundgrößen** — also die Größen, die Bewegung beschreiben (ohne die Ursache, die Kraft). Im MedAT erscheinen sie in Physikaufgaben zu Herzfrequenz, Blutfluss, Fallversuchen und Traumamechanismen. Für den MedAT sind Zeitumrechnungen (s/min/h), **v = s/t**, **a = Δv/Δt**, **g = 9,81 m/s²**, freier Fall und **km/h ↔ m/s** prüfungsrelevant.

**In diesem Kapitel lernst du:**
- **Zeiteinheiten** im 60er-System (1 min = 60 s, 1 h = 3.600 s) und medizinische Zeitskalen (EKG, Halbwertszeit)
- **Geschwindigkeit** v = s/t [m/s] und Umrechnung **km/h ↔ m/s** (Faktor 3,6)
- **Beschleunigung** a = Δv/Δt und die **drei Formeln** der gleichmäßig beschleunigten Bewegung
- **Freier Fall:** v = g×t, s = ½×g×t², Aufprall **v = √(2gh)**; g ≈ 10 m/s²
- **Herzfrequenz** in Hz (÷ 60) und **Nervenleitgeschwindigkeit** (NLG) als klinische Anwendung

---

## Zeiteinheiten — Das nicht-dezimale System

**Um Zeitintervalle sicher umzurechnen,** brauchst du das **60er-System**. **Anders** als Länge oder Masse folgen Zeiteinheiten keinem Dezimalsystem. **Dafür** die festen Umrechnungen.

Anders als metrische Längen- oder Masseneinheiten folgen **Zeiteinheiten** einem historisch gewachsenen **60er-System** (**Sexagesimalsystem**) aus dem babylonischen Raum:

1 Minute (min) = 60 Sekunden (s)
1 Stunde (h) = 60 min = 3.600 s
1 Tag = 24 h = 1.440 min = 86.400 s
1 Woche = 7 Tage = 604.800 s
1 Jahr = 365,25 Tage ≈ 3,156 × 10⁷ s ≈ π × 10⁷ s (praktische Näherung!)

Besonders prüfungsrelevant: 1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s.

> **Merke:** Zeiteinheiten folgen keinem Dezimalsystem: 1 min = 60 s; 1 h = 60 × 60 = **3.600 s**; 1 Tag = 24 × 3.600 = **86.400 s**. Herzfrequenz in Hz: HF [1/min] ÷ 60 = f [Hz].

Medizinische Zeitskalen:
- Herzfrequenz 70/min → Periode T = 60/70 s ≈ 0,857 s (= 857 ms) pro Herzschlag
- EKG-Intervalle: PR-Intervall 120–200 ms; QRS < 120 ms; QT-Zeit 350–440 ms
- Halbwertszeiten von Medikamenten: Adenosin t½ < 10 s; Heparin i.v. t½ ~1,5 h; Amiodaron t½ 40–55 Tage!
- Gerinnungskaskade: Fibrinpolymerisation innerhalb von Sekunden bis Minuten

Frequenz und Periode: f = 1/T und T = 1/f
- Herzfrequenz 60/min = 1 Hz → T = 1 s
- Herzfrequenz 75/min = 1,25 Hz → T = 0,8 s = 800 ms
- Herzfrequenz 120/min (Tachykardie) = 2 Hz → T = 0,5 s

---

## Geschwindigkeit und ihre Umrechnung

**Bisher haben wir gesehen:** Zeiteinheiten. **Die zentrale Größe der Bewegung** ist die **Geschwindigkeit** — sie gibt an, wie viel **Weg pro Zeit** zurückgelegt wird. **Formel:** **v = s/t** (Weg durch Zeit). SI-Einheit: **m/s**.

Umrechnung km/h ↔ m/s:
v [m/s] = v [km/h] / 3,6
v [km/h] = v [m/s] × 3,6

Herleitung: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s ≈ 0,278 m/s.

Merkhilfe-Tabelle:
- 36 km/h = 10 m/s
- 72 km/h = 20 m/s
- 108 km/h = 30 m/s
- 1 m/s = 3,6 km/h

Physiologische Geschwindigkeiten:
- Aorta (Systole): ~1 m/s
- Arteriolen: ~10 cm/s = 0,1 m/s
- Kapillaren: ~0,5–1 mm/s = 0,001 m/s (1.000× langsamer als Aorta!)
- Blut in großen Venen: ~10–20 cm/s
- Nervenleitgeschwindigkeit A-alpha-Fasern (motorisch): 60–80 m/s
- Nervenleitgeschwindigkeit A-delta-Fasern (Schmerz): 5–30 m/s
- Nervenleitgeschwindigkeit C-Fasern (unmyelinisiert): 0,5–2 m/s
- Schallgeschwindigkeit in Gewebe: ~1.540 m/s (Ultraschalldiagnostik)

Der erste, scharfe Schmerz bei Verletzung wird über A-delta-Fasern (5–30 m/s) geleitet; der anhaltende, dumpfe Schmerz über C-Fasern (0,5–2 m/s). Das erklärt das zeitliche Muster der Schmerzwahrnehmung.

> **Merke:** **km/h → m/s:** durch **3,6**; **m/s → km/h:** × **3,6**. Merkhilfe: 36 km/h = 10 m/s; 72 km/h = 20 m/s.

**SVG-Hinweis (km/h ↔ m/s):** Ein kleines Schema mit Pfeilen „÷ 3,6“ und „× 3,6“ und den Beispielen 36 km/h = 10 m/s unterstützt die Merkfähigkeit. *Typ: Schema / Eselsbrücke.*

![km/h m/s](/grafik-kmh-ms.svg)

**Erklärung zur Grafik:** Umrechnung zwischen km/h und m/s durch Faktor 3,6 (÷ 3,6 bzw. × 3,6); wichtig für Geschwindigkeitsangaben in Physik und Klinik.

![Bewegung und Einheiten](/grafik-koerper.svg)

**Erklärung zur Grafik:** Weg, Geschwindigkeit und Beschleunigung bauen auf den SI-Basiseinheiten m und s auf; die Grafik veranschaulicht den Zusammenhang für gleichförmige und beschleunigte Bewegung.

---

## Gleichförmige Bewegung

**Bisher haben wir gesehen:** Geschwindigkeit und ihre Umrechnung. **Wenn die Geschwindigkeit konstant ist** (keine Beschleunigung, a = 0), gilt die einfachste Bewegungsgleichung. **Dafür:**

Bei konstanter Geschwindigkeit (a = 0):
s = v × t (Weg = Geschwindigkeit × Zeit)

Umgestellt: v = s/t; t = s/v

Beispiel: Blut in der Aorta (v ≈ 0,5 m/s im Mittel) legt pro Minute zurück:
s = 0,5 m/s × 60 s = 30 m!

Die Kreislaufzeit beträgt beim Gesunden ~1 Minute.

---

## Gleichmäßig beschleunigte Bewegung

**Bisher haben wir gesehen:** Gleichförmige Bewegung (v = const). **Wenn eine konstante Kraft wirkt** (z. B. die Erdanziehung), entsteht **gleichmäßige Beschleunigung** — die **Beschleunigung** a gibt an, um wie viel sich die Geschwindigkeit pro Sekunde ändert (Einheit m/s²). **Dafür** die drei Grundformeln:

Die drei kinematischen Grundformeln:
1. v(t) = v₀ + a × t (Geschwindigkeit nach Zeit t)
2. s(t) = v₀ × t + ½ × a × t² (Weg nach Zeit t)
3. v² = v₀² + 2 × a × s (Geschwindigkeit nach Weg s, ohne t)

Freier Fall: a = g ≈ 9,81 m/s² ≈ 10 m/s², v₀ = 0:
- v(t) = g × t
- s(t) = ½ × g × t²
- Nach 1 s: v = 10 m/s, s = 5 m
- Nach 2 s: v = 20 m/s, s = 20 m
- Nach 3 s: v = 30 m/s, s = 45 m

Aufprallgeschwindigkeit beim Sturz aus Höhe h:
v = √(2 × g × h)
- Aus 5 m: v = √(100) = 10 m/s = 36 km/h
- Aus 20 m: v = √(400) = 20 m/s = 72 km/h

> **Merke:** **Freier Fall:** v = g×t; s = ½×g×t²; **Aufprallgeschwindigkeit** v = √(2×g×h). g ≈ 10 m/s². Ab 3 m Sturzhöhe: Hochrasanztrauma.

---

## Klinische Mechanik — Trauma

**Um Kinematik im Notfall einzuordnen:** die Energieübertragung auf den Körper. Fahrzeugkollision bei 50 km/h (= 13,9 m/s): Bei Airbag-Auslösung (Verzögerungszeit ~30 ms): a = 13,9 / 0,03 ≈ 463 m/s² ≈ 47 g. Sturz aus >3 m Höhe gilt als Hochrasanztrauma. Dezelerationstrauma der Aorta: Scherkraft-Riss am Aortenisthmus ist eine klassische Hochrasanzkomplikation.

---

## MedAT-Rechenbeispiele

**Um das Gelernte anzuwenden,** folgen drei typische Aufgaben: Geschwindigkeitsumrechnung, Herzfrequenz, Sturzhöhe. **Die drei wichtigsten Formeln:** km/h ÷ 3,6 = m/s; HF/min ÷ 60 = Hz; v = √(2gh).

**Aufgabe 1 — Geschwindigkeitsumrechnung:** Ein Krankenwagen fährt mit 108 km/h. Wie schnell ist das in m/s?
Lösung: 108 / 3,6 = 30 m/s. Merkhilfe: 36 km/h = 10 m/s → 108 = 3 × 36 → 3 × 10 = 30 m/s.

**Aufgabe 2 — Herzfrequenz:** Ein Patient hat eine Herzfrequenz von 90/min. Berechne die Periodendauer und die Frequenz in Hz.
Lösung: f = 90/60 Hz = 1,5 Hz. Periodendauer T = 1/f = 1/1,5 s ≈ 0,667 s = 667 ms. Bei dieser Herzfrequenz dauert die Systole ~250 ms, die Diastole ~417 ms.

**Aufgabe 3 — Sturzhöhe:** Ein Kind fällt vom Klettergerüst (Höhe 3 m). Mit welcher Geschwindigkeit trifft es auf dem Boden auf?
Lösung: v = √(2 × g × h) = √(2 × 10 × 3) = √60 ≈ 7,7 m/s = 7,7 × 3,6 ≈ 28 km/h. Klinisch: Ab 3 m Sturzhöhe Verdacht auf Hochrasanztrauma — Ganzkörper-CT (Polytrauma-CT) indiziert.

> **Merke:** Die drei wichtigsten Umrechnungen am MedAT: (1) km/h ÷ 3,6 = m/s, (2) Herzfrequenz/min ÷ 60 = Hz, (3) v = √(2gh) für Sturzgeschwindigkeiten. Diese drei Formeln decken >80 % aller MedAT-Kinematikaufgaben ab.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Zeiteinheiten: 1 min = 60 s, 1 h = 3.600 s, 1 Tag = 86.400 s; Geschwindigkeit v = s/t [m/s]; **km/h ÷ 3,6 = m/s**, m/s × 3,6 = km/h (36 km/h = 10 m/s); Beschleunigung a = Δv/Δt; drei Formeln gleichmäßig beschleunigt (v = v₀+at, s = v₀t+½at², v² = v₀²+2as); **Freier Fall:** v = g×t, s = ½×g×t², **Aufprall v = √(2gh)**; g ≈ 10 m/s²; Herzfrequenz: f [Hz] = HF [1/min] ÷ 60, T = 1/f; NLG A-alpha 60–80 m/s, C-Fasern 0,5–2 m/s; ab 3 m Sturzhöhe Hochrasanztrauma.

**Ergänzend vertiefend (noch prüfungsnah):** Trauma g-Kräfte; EKG-Intervalle in ms; Halbwertszeiten in verschiedenen Zeiteinheiten.

**Häufige Fragen:**
- "72 km/h = ? m/s" → 20 m/s (÷ 3,6; Merkhilfe: 36 km/h = 10 m/s)
- "Herzfrequenz 75/min → Periodendauer?" → T = 60/75 = 0,8 s = 800 ms
- "Fallhöhe aus 5 m → Aufprallgeschwindigkeit?" → v = √(2 × 10 × 5) = 10 m/s = 36 km/h

**Typische Prüfungsfallen / Verwechslungen:**
- km/h ÷ 3,6 = m/s (nicht × 3,6!) — und m/s × 3,6 = km/h
- s = ½ × g × t² (Fallweg) ≠ v = g × t (Fallgeschwindigkeit) — nicht verwechseln!
- Herzfrequenz in Hz: 60/min = 1 Hz (÷ 60 nicht vergessen; Einheit ist 1/s, nicht 1/min)

**Prüfungsrelevante Zahlen/Fakten:**
- 1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s
- g ≈ 9,81 m/s² ≈ 10 m/s²; Formeln freier Fall: v = g×t; s = ½×g×t²; Aufprall: v = √(2gh)
- NLG: A-alpha 60–80 m/s; A-delta 5–30 m/s; C-Fasern 0,5–2 m/s (myelinisiert = schneller)
- Ab Sturzhöhe 3 m: Verdacht auf Hochrasanztrauma → Polytrauma-CT
---

## Zusammenfassung (ultrakompakt)

- **Zeitumrechnung**: 1 min = 60 s; 1 h = 3.600 s; EKG-Intervalle in ms (QRS ~80 ms)
- **Geschwindigkeit**: v = s/t [m/s]; km/h → m/s: durch 3,6; m/s → km/h: × 3,6
- **Beschleunigung**: a = Δv/Δt [m/s²]; g = 9,81 ≈ 10 m/s²
- **Freier Fall**: v = g×t; s = ½×g×t²; Aufprallgeschwindigkeit v = √(2×g×h)
- **Herzfrequenz**: HF [1/min] ÷ 60 = f [Hz]; Periodendauer T = 1/f = 60/HF
- **Klinisch**: Sturzgeschwindigkeit aus 3 m ≈ 7,7 m/s; ab 3 m Hochrasanztrauma → Polytrauma-CT

| Größe | Formel | Einheit | Beispiel |
|-------|--------|---------|----------|
| Geschwindigkeit | v = s/t | m/s | Aorta: 1 m/s |
| Frequenz | f = 1/T | Hz (= 1/s) | Herz: 1,25 Hz bei 75/min |
| Beschleunigung | a = Δv/Δt | m/s² | g = 9,81 m/s² |
| Fallhöhe | s = ½gt² | m | 5 m nach 1 s |
| Aufprall-v | v = √(2gh) | m/s | 10 m/s aus 5 m |
`,
      lernziele: [
        "Zeiteinheiten (Stunden, Minuten, Sekunden) sicher umrechnen und für medizinische Zeitintervalle (EKG, Halbwertszeit) anwenden",
        "Geschwindigkeiten zwischen km/h und m/s mit dem Faktor 3,6 umrechnen",
        "Die drei Formeln der gleichmäßig beschleunigten Bewegung anwenden (v = v₀+at; s = v₀t+½at²; v² = v₀²+2as)",
        "Physiologische Geschwindigkeiten (Blutfluss, Nervenleitgeschwindigkeit) in Größenordnungen einordnen",
        "Den freien Fall mit g ≈ 9,81 m/s² ≈ 10 m/s² berechnen und auf Traumamechanismen anwenden",
      ],
      sections: [
        {
          heading: "Zeiteinheiten — nicht-dezimales 60er-System",
          text: "1 h = 60 min = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s. Das 60er-System stammt aus dem babylonischen Sexagesimalsystem und ist in Wissenschaft und Medizin universell. In der Medizin: Halbwertszeiten von Medikamenten in Stunden oder Minuten — Adenosin t½ < 10 s (ultraschnell, bei Tachykardie i.v. gegeben); Heparin i.v. t½ ~1,5 h; Warfarin t½ 36–42 h; Amiodaron t½ 40–55 Tage! EKG-Intervalle in ms: PR 120–200 ms, QRS < 120 ms. Herzfrequenz f = HR/60 Hz; T = 1/f.",
          merksatz:
            "1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s; Herzfrequenz 60/min = 1 Hz, T = 1 s",
        },
        {
          heading: "Geschwindigkeitsumrechnung: km/h ↔ m/s",
          text: "Der Faktor 3,6 verbindet km/h und m/s: m/s = km/h ÷ 3,6; km/h = m/s × 3,6. Herleitung: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s. Merkhilfe: 36 km/h = 10 m/s. Physiologische Referenzwerte: Aorta ~1 m/s = 3,6 km/h; Kapillarfluss ~1 mm/s = 0,0036 km/h; Nervenleitgeschwindigkeit 70 m/s = 252 km/h. Diese Größenordnungen helfen, Aufgaben sofort auf Plausibilität zu prüfen.",
          merksatz:
            "km/h → m/s: durch 3,6; m/s → km/h: × 3,6; Merke: 36 km/h = 10 m/s; 72 km/h = 20 m/s",
        },
        {
          heading: "Kinematik — Gleichförmig und beschleunigt",
          text: "Gleichförmige Bewegung (a = 0): s = v × t. Gleichmäßig beschleunigte Bewegung: (1) v = v₀ + at; (2) s = v₀t + ½at²; (3) v² = v₀² + 2as. Freier Fall: v₀ = 0, a = g ≈ 10 m/s². Nach 1 s: v = 10 m/s, s = 5 m. Nach 2 s: v = 20 m/s, s = 20 m. Aufprallgeschwindigkeit aus Höhe h: v = √(2gh). Klinisch: Sturz aus Bett (~80 cm): v = √(2 × 10 × 0,8) = 4 m/s = 14,4 km/h — schon ernstes Verletzungsrisiko bei Osteoporose.",
          merksatz: "Freier Fall: v = g × t; s = ½ × g × t²; Aufprall-v = √(2gh); g ≈ 10 m/s²",
        },
        {
          heading: "Nervenleitgeschwindigkeit — Klinische Kinetik",
          text: "Myelinisierte Fasern leiten durch saltatorische Erregungsleitung (Sprung von Ranvier-Knoten zu Ranvier-Knoten) viel schneller als unmyelinisierte. A-alpha (motorisch, propriozeptiv): 60–80 m/s; A-beta (Berührung, Vibration): 30–70 m/s; A-delta (Schmerz, Temperatur): 5–30 m/s; C-Fasern (Schmerz, vegetativ, unmyelinisiert): 0,5–2 m/s. NLG-Messung (Elektroneurographie) unterscheidet demyelinisierende Neuropathien (verlangsamte NLG < 40 m/s, z.B. Guillain-Barré-Syndrom) von axonalen Neuropathien (reduzierte Amplitude, normale NLG). Rechenbeispiel: Reiz an Zehe, NLG = 60 m/s, Weg 1 m → Latenz = 1/60 s ≈ 17 ms.",
          merksatz:
            "NLG: A-alpha 60–80 m/s; A-delta 5–30 m/s; C-Fasern 0,5–2 m/s — myelinisiert = schneller",
        },
      ],
      merksätze: [
        "v [m/s] = v [km/h] / 3,6; merke: 36 km/h = 10 m/s; 72 km/h = 20 m/s",
        "Freier Fall: v = g × t; s = ½ × g × t²; g ≈ 9,81 m/s² ≈ 10 m/s²",
        "1 h = 3.600 s; 1 Tag = 86.400 s; 1 Jahr ≈ π × 10⁷ s",
        "Herzfrequenz 60/min = 1 Hz; T = 1/f; bei 75/min: T = 0,8 s = 800 ms",
        "Aufprallgeschwindigkeit aus Höhe h: v = √(2gh)",
        "Kapillarfluss ~1 mm/s; Aorta-Fluss ~1 m/s — Faktor 1.000 Unterschied!",
        "NLG A-alpha ~70 m/s; C-Fasern ~1 m/s; erster Schmerz schnell, Dauerschmerz langsam",
        "Gleichmäßig beschleunigt: 3 Formeln — v = v₀+at; s = v₀t+½at²; v² = v₀²+2as",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Rettungswagen fährt mit 90 km/h zu einem Notfallpatienten 3 km entfernt. Wie viele Sekunden braucht er? Erklären Sie außerdem, warum die Nervenleitgeschwindigkeit klinisch wichtig ist, und nennen Sie zwei Fasertypen mit unterschiedlichen Leitgeschwindigkeiten.",
        answer:
          "Berechnung: Umrechnung: 90 km/h = 90/3,6 = 25 m/s. Weg s = 3 km = 3.000 m. Zeit: t = s/v = 3.000 m / 25 m/s = 120 s = 2 Minuten. Der Rettungswagen braucht exakt 2 Minuten. Nervenleitgeschwindigkeit (NLG): Die NLG gibt an, wie schnell ein Aktionspotenzial eine Nervenfaser entlangläuft. Sie hängt vom Myelinisierungsgrad und dem Faserdurchmesser ab: myelinisierte Fasern leiten durch saltatorische Erregungsleitung (Sprünge zwischen Ranvier-Schnürringen) wesentlich schneller als unmyelinisierte. Klinische Bedeutung: Die NLG-Messung (Elektroneurographie) unterscheidet demyelinisierende Neuropathien (verlangsamte NLG, z.B. Guillain-Barré-Syndrom — autoimmune Demyelinisierung, NLG teils unter 20 m/s) von axonalen Neuropathien (reduzierte Amplitude, normale NLG, z.B. toxische Neuropathie). Zwei Fasertypen: (1) A-alpha-Fasern (motorisch, stark myelinisiert): 60–80 m/s — schnelle Muskelsteuerung und Propriozeption. (2) C-Fasern (Schmerz, vegetativ, unmyelinisiert): 0,5–2 m/s — langsamer, dumpfer Dauerschmerz. Der 40-fache Geschwindigkeitsunterschied erklärt das zeitliche Muster der Schmerzwahrnehmung nach einer Verletzung: zuerst scharfer Sofortschmerz über A-delta, dann anhaltender Dauerschmerz über C-Fasern.",
      },
      klinischerBezug:
        "Die Nervenleitgeschwindigkeit (NLG) ist eine zentrale diagnostische Größe in der Neurologie. Bei der diabetischen Polyneuropathie kommt es zu Demyelinisierung und axonaler Degeneration — messbar als Verlangsamung der NLG unter 40 m/s. In der Notfallmedizin hilft das Verständnis der Kinematik, Verletzungsmuster vorherzusagen: Ein Sturz aus 5 m Höhe erzeugt eine Aufprallgeschwindigkeit von ~10 m/s = 36 km/h, ausreichend für Wirbelsäulen- und Organverletzungen. Kinetische Energie E = ½mv² steigt quadratisch mit der Geschwindigkeit — Verdopplung der Geschwindigkeit bedeutet vierfache Energie und vierfaches Verletzungsrisiko.",
      selfTest: [
        {
          question: "72 km/h entsprechen wie viel m/s?",
          options: ["20 m/s", "200 m/s", "0,02 m/s", "7,2 m/s", "2 m/s"],
          correctIndex: 0,
          explanation:
            "v [m/s] = v [km/h] / 3,6. Also: 72 / 3,6 = 20 m/s. Merkhilfe: 36 km/h = 10 m/s → 72 km/h = 20 m/s (doppelter Wert). Alternativ: 72 km/h = 72.000 m / 3.600 s = 20 m/s. Diese Umrechnung ist am MedAT häufig gefragt. 20 m/s entspricht auch der Größenordnung der Nervenleitgeschwindigkeit von A-delta-Fasern (5–30 m/s). Der Faktor 3,6 verbindet die beiden wichtigsten Geschwindigkeitseinheiten im Alltag und in der Physik.",
          hints: [
            "m/s = km/h ÷ 3,6. Merke: 36 km/h = 10 m/s.",
            "72 ÷ 3,6 = 72 × 10 / 36 = 720 / 36 = 20.",
          ],
          difficulty: 1,
          tags: ["geschwindigkeit", "umrechnung", "physik"],
        },
        {
          question:
            "Ein Körper fällt aus dem Stand (v₀ = 0) für 4 Sekunden (g ≈ 10 m/s²). Welche Fallhöhe?",
          options: ["80 m", "40 m", "160 m", "20 m", "8 m"],
          correctIndex: 0,
          explanation:
            "s = ½ × g × t² = ½ × 10 × 4² = ½ × 10 × 16 = 80 m. Die Aufprallgeschwindigkeit: v = g × t = 10 × 4 = 40 m/s = 144 km/h. In der Notfallmedizin gilt Sturz aus mehr als 6 m als schweres Hochrasanztrauma — aus 80 m ist das Überleben ohne Fallschirm nicht möglich. Die Falltiefe skaliert quadratisch mit der Zeit: doppelte Zeit bedeutet vierfache Fallhöhe.",
          hints: [
            "Freier Fall mit v₀ = 0: s = ½ × g × t². t = 4 s, g = 10 m/s².",
            "½ × 10 × 16 = 5 × 16 = 80 m.",
          ],
          difficulty: 2,
          tags: ["freier-fall", "kinematik", "mechanik"],
        },
        {
          question: "Wie viele Sekunden hat ein Tag?",
          options: ["86.400 s", "3.600 s", "1.440 s", "24.000 s", "100.000 s"],
          correctIndex: 0,
          explanation:
            "1 Tag = 24 h × 60 min/h × 60 s/min = 24 × 3.600 = 86.400 s. Rechenweg: 24 × 3.600 = (20 + 4) × 3.600 = 72.000 + 14.400 = 86.400 s. Klinisch: Langzeit-EKG (Holter) zeichnet 24 Stunden auf. Tagesbilanzen auf der Intensivstation (Flüssigkeit, Elektrolyte) beziehen sich auf 86.400 Sekunden. Medikamenten-Halbwertszeiten in Tagen bedeuten 86.400 s pro Tag.",
          hints: ["1 Stunde = 3.600 s. Ein Tag hat 24 Stunden.", "24 × 3.600 = ?"],
          difficulty: 1,
          tags: ["zeiteinheiten", "umrechnung", "sekunden"],
        },
        {
          question:
            "Ein Zug beschleunigt gleichmäßig von 0 auf 72 km/h in 10 s. Wie groß ist die Beschleunigung in m/s²?",
          options: ["2 m/s²", "7,2 m/s²", "0,2 m/s²", "72 m/s²", "20 m/s²"],
          correctIndex: 0,
          explanation:
            "Schritt 1: 72 km/h = 72/3,6 = 20 m/s. Schritt 2: a = Δv/Δt = 20 m/s / 10 s = 2 m/s². Diese Beschleunigung (2 m/s² ≈ 0,2 g) ist für Fahrgäste spürbar aber komfortabel. Ein Sportwagen beschleunigt mit ~5 m/s² (0 auf 100 km/h in ~5,5 s). Erdbeschleunigung g = 9,81 m/s² ≈ 10 m/s² als Referenz.",
          hints: [
            "Erst 72 km/h in m/s umrechnen (÷ 3,6 = 20 m/s).",
            "a = Δv / Δt = 20 m/s / 10 s = ?",
          ],
          difficulty: 2,
          tags: ["beschleunigung", "kinematik", "mechanik"],
        },
        {
          question:
            "Die Herzfrequenz beträgt 75 Schläge/min. Was ist die Periodendauer eines Herzschlags in ms?",
          options: ["800 ms", "750 ms", "13 ms", "1.250 ms", "60 ms"],
          correctIndex: 0,
          explanation:
            "f = 75/min = 75/60 Hz = 1,25 Hz. Periodendauer T = 1/f = 1/1,25 s = 0,8 s = 800 ms. In diesen 800 ms: Systole ~300 ms, Diastole ~500 ms. Bei Tachykardie (150/min → T = 400 ms) verkürzt sich vor allem die Diastole — weniger Zeit zur Koronardurchblutung und Ventrikelfüllung, was zu Ischämie führen kann. EKG-Mess-Formel für die QT-Zeit: QTc = QT / √RR (Bazett-Formel).",
          hints: ["f = 75/60 Hz = 1,25 Hz. T = 1/f.", "T = 1/1,25 = 0,8 s = 800 ms."],
          difficulty: 2,
          tags: ["herzfrequenz", "periodendauer", "frequenz"],
        },
        {
          question:
            "Welche Geschwindigkeit (m/s) hat ein Körper nach 5 s freiem Fall (v₀ = 0, g = 10 m/s²)?",
          options: ["50 m/s", "25 m/s", "250 m/s", "5 m/s", "100 m/s"],
          correctIndex: 0,
          explanation:
            "v = v₀ + g × t = 0 + 10 × 5 = 50 m/s = 180 km/h nach nur 5 Sekunden! Die zurückgelegte Strecke: s = ½ × 10 × 25 = 125 m. Kinetische Energie beim Aufprall: E = ½mv² = ½ × 70 × 50² = 87.500 J = 87,5 kJ für einen 70-kg-Menschen. Diese Energie erklärt die verheerenden Verletzungsmuster bei Hochrasanztraumen und Stürzen aus großer Höhe.",
          hints: ["v = v₀ + g × t. v₀ = 0, g = 10 m/s², t = 5 s.", "v = 0 + 10 × 5 = 50 m/s."],
          difficulty: 1,
          tags: ["freier-fall", "geschwindigkeit", "kinematik"],
        },
        {
          question:
            "Aus welcher Höhe muss ein Körper fallen, damit er mit 20 m/s aufprallt? (g = 10 m/s²)",
          options: ["20 m", "40 m", "10 m", "200 m", "2 m"],
          correctIndex: 0,
          explanation:
            "Formel: v² = 2 × g × h → h = v² / (2 × g) = 400 / (2 × 10) = 400/20 = 20 m. Aufprallgeschwindigkeit 20 m/s = 72 km/h aus 20 m Höhe (ca. 6-stöckiges Gebäude). In der Traumatologie gilt Sturz aus mehr als 3 m als Hochrasanztrauma; aus 20 m ist Polytrauma mit hoher Letalität zu erwarten. Die Formel v² = 2gh kommt aus der Energieerhaltung: mgh = ½mv².",
          hints: [
            "v² = 2gh → h = v²/(2g). v = 20 m/s, g = 10 m/s².",
            "h = 400/(2×10) = 400/20 = 20 m.",
          ],
          difficulty: 2,
          tags: ["freier-fall", "mechanik", "energie"],
        },
        {
          question:
            "Wie lange braucht ein Nervenimpuls (NLG = 60 m/s) vom Fuß (~1 m Weg) bis zum Rückenmark?",
          options: ["ca. 17 ms", "ca. 60 ms", "ca. 1,7 ms", "ca. 170 ms", "ca. 600 ms"],
          correctIndex: 0,
          explanation:
            "t = s/v = 1 m / 60 m/s ≈ 0,0167 s ≈ 17 ms. Diese Laufzeit ist neurophysiologisch bedeutsam: Reflexlatenzen (monosynaptischer Eigenreflex) betragen normal 20–30 ms. Bei verlangsamter NLG (Polyneuropathie) verlängert sich die Latenz — klinisch erkennbar als verzögerte oder fehlende Reflexe (Areflexie bei ausgeprägter Neuropathie). Beim Monosynaptischen Patellarsehnenreflex (PSR) legt das Signal ~50 cm zurück, Latenz bei NLG 60 m/s: t = 0,5/60 ≈ 8 ms.",
          hints: [
            "t = s/v = 1 m / 60 m/s. Ergebnis in s, dann × 1.000 für ms.",
            "1/60 s ≈ 0,0167 s = 16,7 ms ≈ 17 ms.",
          ],
          difficulty: 2,
          tags: ["nervenleitgeschwindigkeit", "neurologie", "zeiteinheiten"],
        },
      ],
    },
    {
      id: "ma-4-03",
      title: "SI-System — Grundeinheiten und abgeleitete Größen",
      stichworte: [
        "SI-Grundeinheiten",
        "Meter",
        "Kilogramm",
        "Sekunde",
        "Mol",
        "Kelvin",
        "Newton",
        "Pascal",
        "Joule",
        "Watt",
        "Dimensionsanalyse",
        "abgeleitete Einheiten",
      ],
      content: `## Einleitung

Kraft in **Newton**, Druck in **Pascal**, Energie in **Joule** — diese Einheiten tauchen in jeder MedAT-Physikaufgabe auf. **Aber wie hängen sie zusammen?** Alle **abgeleiteten Einheiten** lassen sich aus den **7 SI-Grundeinheiten** aufbauen — das sind die sieben Basisgrößen, aus denen sich alles andere durch Multiplikation und Division ableitet. Das **SI-System** ist das gemeinsame Fundament aller Naturwissenschaften und der Medizin. Die **Dimensionsanalyse** — das Prüfen, ob die Einheiten auf beiden Seiten einer Gleichung übereinstimmen — rettet vor Rechenfehlern. Für den MedAT sind die 7 Grundeinheiten, abgeleitete Einheiten (N, Pa, J, W, V), klinisch relevante Nicht-SI-Einheiten (mmHg, kcal) und Dimensionsanalyse prüfungsrelevant.

**In diesem Kapitel lernst du:**
- die **7 SI-Grundeinheiten** (m, kg, s, A, K, mol, cd) und warum **kg** die einzige mit Vorsilbe ist
- **abgeleitete Einheiten** und die **Ableitungskette** N → Pa → J → W (Newton, Pascal, Joule, Watt)
- **klinisch relevante Nicht-SI-Einheiten** (mmHg, kcal, Da) und ihre Umrechnung
- **Dimensionsanalyse** als Kontrolle (Einheiten beider Seiten müssen übereinstimmen)
- typische **MedAT-Aufgaben** (Druck mmHg↔Pa, Energie kcal↔kJ, Molkonzentration)

---

## Die sieben SI-Grundeinheiten

**Um das SI-System zu nutzen,** starten wir mit den **sieben Grundeinheiten**. **Sie sind so gewählt,** dass sich alle anderen physikalischen Einheiten daraus ableiten lassen.

Die sieben **Grundgrößen** und ihre **SI-Einheiten**:

| Grundgröße | Einheit | Symbol | Klinischer Bezug (Auszug) |
|------------|---------|--------|---------------------------|
| Länge | Meter | m | Körpergröße, Organabmessungen |
| Masse | **Kilogramm** | **kg** | Körpergewicht, Dosierung — **einzige** Grundeinheit mit Vorsilbe! |
| Zeit | Sekunde | s | EKG-Intervalle, Halbwertszeiten |
| Elektrische Stromstärke | Ampere | A | Defibrillation, Elektrostimulation |
| Thermodynamische Temperatur | Kelvin | K | Enzymkinetik; T[K] = T[°C] + 273 |
| Stoffmenge | Mol | mol | Laborwerte, Osmolarität |
| Lichtstärke | Candela | cd | Ophthalmologie (selten klinisch) |

> **Merke:** Es gibt genau **7 SI-Grundeinheiten**: m, kg, s, A, K, mol, cd. kg ist die einzige Grundeinheit MIT Vorsilbe. Temperatur in Kelvin (kein °-Symbol!): T[K] = T[°C] + 273.

Wichtige Besonderheiten:

Masse: Die SI-Grundeinheit ist Kilogramm (kg), NICHT Gramm! Das ist historisch ungewöhnlich — kg ist die einzige Grundeinheit mit Vorsilbe. Massenleiter: 1 kg = 1.000 g; 1 g = 1.000 mg; 1 mg = 1.000 μg; 1 μg = 1.000 ng.

Temperatur: Grundeinheit **Kelvin (K)**, KEIN Grad-Symbol! Umrechnung: T [K] = T [°C] + 273,15. Absolutnullpunkt: 0 K = −273,15°C. Körpertemperatur 37°C = 310 K. Fieber: >38°C = >311 K.

**Mol:** 1 mol = N_A = 6,022 × 10²³ Teilchen (**Avogadro-Zahl**). **Molare Masse** M in g/mol. Glukose C₆H₁₂O₆: M = 180 g/mol. NaCl: M = 58,5 g/mol.

**SVG-Hinweis (7 SI-Grundeinheiten):** Eine kompakte Tabelle oder Leiter mit m, kg, s, A, K, mol, cd unterstützt die Merkfähigkeit. *Typ: Übersichtstabelle / Schema.*

![SI-Grundeinheiten](/grafik-si-grundeinheiten.svg)

**Erklärung zur Grafik:** Die sieben SI-Basiseinheiten (m, kg, s, A, K, mol, cd) sind die Grundlage für alle abgeleiteten Einheiten wie Newton, Pascal, Joule und Watt.

![Dimensionsanalyse](/grafik-dimensionsanalyse.svg)

**Erklärung zur Grafik:** Abgeleitete Einheiten entstehen aus Basiseinheiten (z. B. N = kg×m/s²); die Grafik unterstützt die Dimensionskontrolle bei Umrechnungen.

---

## Abgeleitete SI-Einheiten

**Bisher haben wir gesehen:** Die sieben Grundeinheiten. **Alle weiteren** Einheiten (Kraft, Druck, Energie, Leistung, …) sind **abgeleitet** — sie entstehen durch Produkte und Quotienten der Grundeinheiten. **Dafür** die wichtigsten für den MedAT:

Kraft → **Newton (N)** = kg×m/s²; Klinisch: Gewebezug, Herzkontraktion
Druck → Pascal (Pa) = N/m² = kg/(m×s²); Klinisch: Blutdruck, Atemwegsdruck
Energie/Arbeit → Joule (J) = N×m = kg×m²/s²; Klinisch: Nahrungsenergie, Herzarbeit
Leistung → Watt (W) = J/s = kg×m²/s³; Klinisch: Herzleistung, Metabolismus
El. Ladung → Coulomb (C) = A×s; Klinisch: Defibrillationsenergie
El. Spannung → Volt (V) = J/C; Klinisch: Membranpotenzial (−70 mV), EKG
El. Widerstand → Ohm (Ω) = V/A; Klinisch: Körperwiderstand, Impedanz
Frequenz → Hertz (Hz) = 1/s; Klinisch: Herzfrequenz, Ultraschall (MHz)
Radioaktivität → Becquerel (Bq) = 1/s; Klinisch: Szintigraphie
Strahlendosis → Gray (Gy) = J/kg; Klinisch: Strahlentherapie (60–70 Gy)
Äquivalentdosis → Sievert (Sv) = J/kg × Wichtungsfaktor; Klinisch: Strahlenschutz

Ableitungsketten:
Newton → Joule → Watt: N (kg×m/s²) → N×m = J (kg×m²/s²) → J/s = W (kg×m²/s³)
Newton → Pascal: N/m² = Pa (kg/(m×s²))

> **Merke:** **Ableitungskette:** N = kg×m/s² → Pa = N/m² (Druck) → J = N×m (Energie) → W = J/s (Leistung). Diese Kette genügt für fast alle MedAT-Physikaufgaben!

---

## Klinisch relevante Nicht-SI-Einheiten

**Bisher haben wir gesehen:** SI-Grundeinheiten und abgeleitete SI-Einheiten. **In der Klinik** werden daneben noch **Nicht-SI-Einheiten** verwendet — du musst sie in SI umrechnen können. **Dafür** die wichtigsten:

Druck:
- mmHg: Blutdruck, Liquordruck, Augeninnendruck; 1 mmHg = 133,322 Pa
- 1 atm = 760 mmHg = 101.325 Pa; 1 bar = 10⁵ Pa ≈ 750 mmHg
- cmH₂O: Beatmungsdruck, ZVD; 1 cmH₂O ≈ 0,735 mmHg

Energie:
- 1 kcal = 4,184 kJ; Ruheumsatz ~2.000 kcal/Tag = ~8.400 kJ/Tag
- ATP-Hydrolyse: ~30,5 kJ/mol; 1 eV = 1,602 × 10⁻¹⁹ J

Molekülmasse:
- 1 Da = 1 g/mol = 1,66 × 10⁻²⁷ kg; 1 kDa = 1.000 Da
- Albumin: 66 kDa; IgG: 150 kDa; Hämoglobin (Tetramer): 64 kDa; Insulin: 5,8 kDa

## Dimensionsanalyse

**Um Formeln zu prüfen oder zu rekonstruieren,** nutzt du die **Dimensionsanalyse**: Die **Einheiten** auf beiden Seiten einer Gleichung müssen **übereinstimmen**.

Prinzip: Die Einheiten auf beiden Seiten einer Gleichung müssen übereinstimmen.

Beispiel 1 — Arbeit: W = F × s
[N] × [m] = [kg×m/s²] × [m] = [kg×m²/s²] = [J] ✓

Beispiel 2 — Hydrostatischer Druck: p = ρ × g × h
[kg/m³] × [m/s²] × [m] = [kg/(m×s²)] = [Pa] ✓

Beispiel 3 — Herzleistung: P = MAP × HZV
MAP = 100 mmHg = 13.300 Pa; HZV = 5 L/min = 8,33 × 10⁻⁵ m³/s
P = 13.300 × 8,33 × 10⁻⁵ ≈ 1,1 W
Dimensionen: [Pa] × [m³/s] = [N/m²] × [m³/s] = [N×m/s] = [J/s] = [W] ✓

Das Herz leistet in Ruhe ~1 Watt!

## Metrische Vorsätze

Giga (G) = 10⁹ → GBq
Mega (M) = 10⁶ → MHz (Ultraschall 2–20 MHz)
Kilo (k) = 10³ → kg, km, kJ, kPa
Milli (m) = 10⁻³ → mL, ms, mmol, mV
Mikro (μ) = 10⁻⁶ → μg, μL, μmol, μV
Nano (n) = 10⁻⁹ → nm, nmol (Hormonspiegel)
Piko (p) = 10⁻¹² → pmol (Schilddrüsenhormone T3/T4)

Klinische Konzentrationseinheiten im Labor:
- mmol/L: Elektrolyte (Na 135–145; K 3,5–5,0; Ca 2,2–2,6 mmol/L)
- mg/dL: Glukose (70–100 mg/dL), Cholesterin (<200 mg/dL)
- μg/dL: Kortisol, Hormonspiegel
- nmol/L: Vitamin D (optimal >75 nmol/L), Steroide
- pmol/L: T3 (3,5–7,8 pmol/L), T4 (12–22 pmol/L)
- mEq/L = mmol/L × Ladung: historische Einheit, heute durch mmol/L ersetzt
- mOsmol/kg: Osmolalität (Serum normal 275–295 mOsmol/kg)

## MedAT-Rechenbeispiele

**Um das Gelernte anzuwenden,** folgen vier typische Aufgaben: Druckumrechnung, Energieumrechnung, Dimensionsanalyse, Molkonzentration. **Kernwerkzeug:** Ableitungskette N → Pa → J → W und Einheitenkontrolle.

**Aufgabe 1 — Druckumrechnung:** Der diastolische Blutdruck beträgt 80 mmHg. Wie viel Pa ist das?
Lösung: 80 mmHg × 133 Pa/mmHg = 10.640 Pa ≈ 10,6 kPa. Der systolische Wert von 120 mmHg = 15.960 Pa ≈ 16 kPa.

**Aufgabe 2 — Energieumrechnung:** Ein Patient nimmt 2.000 kcal/Tag zu sich. Wie viel kJ/Tag ist das?
Lösung: 2.000 kcal × 4,184 kJ/kcal = 8.368 kJ ≈ 8.400 kJ/Tag. Davon nutzt der Grundumsatz ~60–70 %, der Rest geht in Thermogenese und körperliche Aktivität.

**Aufgabe 3 — Dimensionsanalyse:** Prüfe die Formel p = ρ × g × h (hydrostatischer Druck).
Lösung: [ρ] = kg/m³; [g] = m/s²; [h] = m. Eingesetzt: (kg/m³) × (m/s²) × m = kg/(m×s²) = N/m² = Pa. Die Einheit stimmt — die Formel ist dimensionell korrekt.

**Aufgabe 4 — Molkonzentration:** Ein Laborwert zeigt Glukose 100 mg/dL. Molmasse Glukose = 180 g/mol. Umrechnung in mmol/L?
Lösung: 100 mg/dL = 1.000 mg/L = 1 g/L. Molarität = 1 g/L ÷ 180 g/mol = 0,00556 mol/L = 5,56 mmol/L. Normwert nüchtern: 3,9–6,1 mmol/L → 100 mg/dL liegt im oberen Normbereich.

> **Merke:** Die Dimensionsanalyse ist am MedAT ein mächtiges Werkzeug: Wenn man eine Formel vergisst, kann man sie aus den Einheiten der gesuchten Größe rekonstruieren. Kraft [N = kg×m/s²], Druck [Pa = N/m²], Energie [J = N×m], Leistung [W = J/s] — diese Kette genügt für die meisten Physikaufgaben.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** 7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd; **kg** einzige mit Vorsilbe; Temperatur in K: T[K] = T[°C] + 273; Ableitungskette N = kg×m/s² → Pa = N/m² → J = N×m → W = J/s; 1 mmHg ≈ 133 Pa; 1 kcal = 4,184 kJ; Dimensionsanalyse (Einheiten beider Seiten müssen übereinstimmen); Mol, Avogadro 6,022×10²³; Glukose mg/dL → mmol/L (÷ 18 bzw. Molmasse 180).

**Ergänzend vertiefend (noch prüfungsnah):** Coulomb, Volt, Ohm, Hertz, Becquerel, Gray, Sievert; Da (Dalton); cmH₂O; mOsmol/kg.

**Häufige Fragen:**
- "Welche SI-Grundeinheit misst Stoffmenge?" → Mol (mol); Avogadro: 6,022 × 10²³ Teilchen/mol
- "Newton in SI-Grundeinheiten?" → kg×m/s² (F = m × a; Masse × Beschleunigung)
- "37°C in Kelvin?" → 37 + 273 = 310 K

**Typische Prüfungsfallen / Verwechslungen:**
- SI-Grundeinheit der Masse = kg (nicht g!) — kg ist die **einzige** Grundeinheit mit Vorsilbe
- Joule (Energie, J = N×m) ≠ Watt (Leistung, W = J/s) — Leistung ist Energie **pro Zeit**
- 1 mmHg ≈ 133 Pa (nicht 100 Pa!) — Blutdruck 120 mmHg ≈ 16.000 Pa ≈ 16 kPa

**Prüfungsrelevante Zahlen/Fakten:**
- 7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd
- Ableitungskette: N = kg×m/s² → Pa = N/m² → J = N×m → W = J/s → V = J/C
- 1 mmHg = 133 Pa; 760 mmHg = 1 atm ≈ 10⁵ Pa; 1 kcal = 4,184 kJ
- Glukose mg/dL → mmol/L: ÷ 18 (Molmasse Glukose 180 g/mol); Herzleistung Ruhe: ~1 W
---

## Zusammenfassung (ultrakompakt)

- **7 Grundeinheiten**: m (Länge), kg (Masse), s (Zeit), A (Strom), K (Temperatur), mol (Stoffmenge), cd (Lichtstärke)
- **Abgeleitete Einheiten**: N = kg×m/s² (Kraft); Pa = N/m² (Druck); J = N×m (Energie); W = J/s (Leistung); V = J/C (Spannung)
- **Dimensionsanalyse**: Prüfe Einheiten beider Gleichungsseiten → stimmen sie, ist die Formel plausibel
- **Nicht-SI**: 1 mmHg ≈ 133 Pa; 1 kcal ≈ 4,184 kJ; 1 Da ≈ 1,66×10⁻²⁷ kg (Dalton/atomare Masseneinheit)
- **Klinisch**: Blutdruck 120/80 mmHg = 16/10,7 kPa; 2.000 kcal/Tag = 8.368 kJ; Glukose mg/dL → mmol/L: ÷ 18`,
      lernziele: [
        "Die sieben SI-Grundeinheiten benennen, zuordnen und klinisch kontextualisieren",
        "Abgeleitete Einheiten (Newton, Pascal, Joule, Watt, Volt) aus Grundeinheiten ableiten und die Ableitungskette verstehen",
        "Klinisch relevante Nicht-SI-Einheiten (mmHg, kcal, Dalton, Sievert) kennen, in SI umrechnen und im medizinischen Kontext einordnen",
        "Dimensionsanalyse zur Formelüberprüfung und Herleitung einsetzen",
        "Metrische Vorsilben (Giga bis Piko) und klinische Konzentrationseinheiten (mmol/L, mg/dL, mEq/L) sicher anwenden",
      ],
      sections: [
        {
          heading: "Die sieben Grundeinheiten — Systematik und Klinik",
          text: "Meter (m), Kilogramm (kg), Sekunde (s), Ampere (A), Kelvin (K), Mol (mol), Candela (cd). Für den MedAT sind m, kg, s, A und mol die häufigsten. Besonderheit: kg ist die einzige Grundeinheit MIT Vorsilbe. Temperatur: T[K] = T[°C] + 273; Enzymoptimum bei 37°C = 310 K; Q10-Regel: Temperaturerhöhung um 10 K verdoppelt Reaktionsgeschwindigkeit. Mol: 1 mol = 6,022 × 10²³ Teilchen; Laborwerte in mmol/L: Kalium 3,5–5,0 mmol/L; Natrium 135–145 mmol/L; Glukose 3,9–6,1 mmol/L. Ampere: Defibrillator ~1–2 A bei 200–360 J Impulsenergie.",
          merksatz: "7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd — kg EINZIGE mit Vorsilbe!",
        },
        {
          heading: "Abgeleitete Einheiten — Ableitungsketten",
          text: "Newton N = kg×m/s² (F = ma). Pascal Pa = N/m² (Druck = Kraft/Fläche). Joule J = N×m (Arbeit = Kraft × Weg). Watt W = J/s (Leistung = Energie/Zeit). Volt V = J/C. Die Kette N → Pa, N → J → W hilft beim Ableiten ohne Auswendiglernen. Medizinisch: Blutdruck in Pa (1 mmHg = 133 Pa); Herzleistung in W (~1 W Ruhe); EKG-Potenziale in mV (Membranruhepotenzial −70 mV, Aktionspotenzial +30 mV); Defibrillationsenergie in J (200–360 J biphasisch); Strahlendosis in Gray (Gy = J/kg).",
          merksatz: "N = kg×m/s²; Pa = N/m²; J = N×m = kg×m²/s²; W = J/s; V = J/C",
        },
        {
          heading: "Klinische Konzentrationseinheiten — mmol/L, mg/dL, mEq/L",
          text: "Im klinischen Labor werden mehrere Konzentrationseinheiten verwendet: mmol/L (Molarität): direkt aus mol abgeleitet, heute bevorzugt — Natrium 135–145 mmol/L; Kalium 3,5–5,0 mmol/L; Kreatinin 53–115 μmol/L. mg/dL: Massenkonzentration in mg pro Deziliter — Glukose 70–100 mg/dL; Gesamtcholesterin <200 mg/dL; Harnstoff 15–45 mg/dL. Umrechnung mg/dL in mmol/L: (mg/dL × 10) / Molmasse [g/mol] = mmol/L. Für Glukose: 100 mg/dL × 10 / 180 = 5,56 mmol/L. mEq/L (Milliäquivalente pro Liter): historische Einheit für Elektrolyte; mEq/L = mmol/L × |Ladungszahl|; für Na⁺ und K⁺ (einwertig): mEq/L = mmol/L; für Ca²⁺ (zweiwertig): 2,5 mmol/L = 5 mEq/L.",
          merksatz:
            "mmol/L = mol/m³ × 10⁻³; mg/dL → mmol/L: (mg/dL × 10) / M [g/mol]; mEq/L = mmol/L × |Ladung|",
        },
        {
          heading: "Dimensionsanalyse — Formeln überprüfen",
          text: "Die Dimensionsanalyse prüft, ob eine Formel dimensionell konsistent ist. Methode: SI-Grundeinheiten einsetzen, vereinfachen, mit Zieleinheit vergleichen. Herzleistungs-Beispiel: P = MAP × HZV. MAP = 100 mmHg = 13.300 Pa = 13.300 N/m²; HZV = 5 L/min = 8,33 × 10⁻⁵ m³/s. P = 13.300 N/m² × 8,33 × 10⁻⁵ m³/s = 1,1 N×m/s = 1,1 J/s = 1,1 W. Dimensionen: [N/m²] × [m³/s] = [N×m/s] = [J/s] = [W] ✓. Nützlich am MedAT: Wenn man eine Formel vergisst, kann man sie aus der Einheit der gesuchten Größe rekonstruieren.",
          merksatz:
            "Dimensionsanalyse: Einheiten links = Einheiten rechts — Formelcheck ohne Formelblatt!",
        },
      ],
      merksätze: [
        "7 SI-Grundeinheiten: m, kg, s, A, K, mol, cd — kg EINZIGE mit Vorsilbe",
        "N = kg×m/s² (Kraft); Pa = N/m² (Druck); J = N×m (Energie); W = J/s (Leistung)",
        "1 mmHg = 133 Pa; 760 mmHg = 1 atm = 101.325 Pa ≈ 10⁵ Pa",
        "1 kcal = 4,184 kJ; Ruheumsatz ~2.000 kcal/Tag = ~8.400 kJ/Tag",
        "1 Da = 1 g/mol = 1,66 × 10⁻²⁷ kg; Albumin 66 kDa; IgG 150 kDa; Hb 64 kDa",
        "T [K] = T [°C] + 273; Körpertemperatur 37°C = 310 K",
        "1 mol = 6,022 × 10²³ Teilchen (Avogadro-Zahl N_A)",
        "mmol/L → mg/dL: × M/10; mg/dL → mmol/L: × 10/M (M = Molmasse)",
        "Herzleistung Ruhe: ~1 W (linkes Herz); Grundumsatz Mensch: ~80–100 W",
        "1 Gy = 1 J/kg (Strahlendosis); 1 Sv = 1 J/kg × Wichtungsfaktor",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient hat einen systolischen Blutdruck von 160 mmHg. Drücken Sie diesen Wert in Pascal aus und berechnen Sie die Herzleistung (Watt) des linken Herzens, wenn HZV = 5 L/min und MAP = 110 mmHg. Kommentieren Sie klinisch. (1 mmHg = 133 Pa)",
        answer:
          "Teil 1: Systolischer Blutdruck in Pascal: 160 mmHg × 133 Pa/mmHg = 21.280 Pa ≈ 21,3 kPa. Normwert: <120 mmHg = <15.960 Pa. 160 mmHg entspricht arteriellem Hypertonus Grad II (ESC-Leitlinie: Grad I 140–159; Grad II 160–179; Grad III ≥180 mmHg). Teil 2: Herzleistungsberechnung: MAP = 110 mmHg × 133 Pa/mmHg = 14.630 Pa. HZV = 5 L/min = 5.000 mL/min = 5 × 10⁻³ m³ / 60 s = 8,33 × 10⁻⁵ m³/s. Herzleistung P = MAP × HZV = 14.630 Pa × 8,33 × 10⁻⁵ m³/s = 1,22 W. Dimensionskontrolle: [Pa] × [m³/s] = [N/m²] × [m³/s] = [N×m/s] = [J/s] = [W] ✓. Klinischer Kommentar: ~1,2 W für das linke Herz entspricht ~20 % mehr als beim Normotonus (MAP ~100 mmHg → ~1,0 W). Chronische Hypertonie erhöht dauerhaft die kardiale Nachlast (Afterload). Über Jahre führt dies zu linksventrikulärer Hypertrophie (LVH, Wand >1,2 cm) und schließlich diastolischer Herzinsuffizienz. Echokardiographisch: verdickte Wand, eingeschränktes E/A-Verhältnis. Therapie: ACE-Hemmer/ARB, Kalziumantagonisten, Diuretika gemäß ESC-Leitlinien.",
      },
      klinischerBezug:
        "Die Herzarbeit (Joule) und Herzleistung (Watt) sind physikalische Maße der Pumpfunktion. In 70 Lebensjahren bei 70 Schlägen/min und Herzschlagvolumen 70 mL leistet das Herz eine Gesamtarbeit von ~3 × 10⁹ J. Strahlenschutz: Die Äquivalentdosis in Sievert (Sv) gibt die biologische Strahlenwirkung an. Ein Röntgen-Thorax liefert ~0,02 mSv; CT-Abdomen ~10–15 mSv; natürliche Jahreshintergrunddosis ~2,1 mSv in Österreich; Strahlenschutz-Grenze für beruflich Strahlenexponierte 20 mSv/Jahr nach österreichischem Strahlenschutzgesetz (§ 42 StrSchG 2020).",
      selfTest: [
        {
          question: "Welche SI-Grundeinheit misst die Stoffmenge?",
          options: ["Mol (mol)", "Gramm (g)", "Liter (L)", "Kilogramm (kg)", "Dalton (Da)"],
          correctIndex: 0,
          explanation:
            "Mol (mol) ist die SI-Grundeinheit der Stoffmenge. 1 mol enthält die Avogadro-Zahl N_A = 6,022 × 10²³ Teilchen. Gramm (g) ist keine SI-Grundeinheit (die Grundeinheit der Masse ist kg!). Liter ist keine SI-Grundeinheit (Volumen-SI-Einheit ist m³). Dalton ist keine SI-Einheit. Laborwerte in mmol/L: Kalium 3,5–5,0 mmol/L; Natrium 135–145 mmol/L; Glukose 3,9–6,1 mmol/L.",
          hints: [
            "Welche der 7 SI-Grundeinheiten quantifiziert die Teilchenanzahl in chemischen Reaktionen?",
            "Mol wird in Reaktionsgleichungen und für Laborkonzentrationen verwendet.",
          ],
          difficulty: 1,
          tags: ["si-einheiten", "stoffmenge", "mol"],
        },
        {
          question: "Welche Einheit hat Druck im SI-System?",
          options: ["Pa = N/m²", "N = kg×m/s²", "J = N×m", "W = J/s", "bar"],
          correctIndex: 0,
          explanation:
            "Druck = Kraft/Fläche. SI-Einheit: Pascal (Pa) = N/m² = kg/(m×s²). Newton ist die Einheit der Kraft. Joule ist die Einheit der Energie. Watt ist die Einheit der Leistung. Bar ist keine SI-Einheit (toleriert): 1 bar = 10⁵ Pa. Klinisch: Blutdruck 120 mmHg = 15.960 Pa; Augeninnendruck normal 10–21 mmHg = 1.330–2.800 Pa; Liquordruck im Liegen normal 7–18 cmH₂O = 686–1.765 Pa.",
          hints: [
            "Druck = Kraft / Fläche. Einheit der Kraft ist N, der Fläche ist m².",
            "N/m² = Pa.",
          ],
          difficulty: 1,
          tags: ["si-einheiten", "druck", "pascal"],
        },
        {
          question: "Wie viel Pa entsprechen 760 mmHg (= 1 atm)? (1 mmHg = 133 Pa)",
          options: ["101.080 Pa", "760 Pa", "7.600 Pa", "1.330 Pa", "5.700 Pa"],
          correctIndex: 0,
          explanation:
            "760 mmHg × 133 Pa/mmHg = 101.080 Pa ≈ 101.325 Pa (exakter Wert). 1 Atmosphäre = normaler Luftdruck auf Meereshöhe. Klinisch: Arterieller pO₂ ~100 mmHg = 13.300 Pa; pCO₂ ~40 mmHg = 5.320 Pa. Bei Hyperventilation sinkt pCO₂ → respiratorische Alkalose → Hypokalzämie-Symptome (Karpopedalspasmen). Berechnung: 760 × 133 = 760 × 130 + 760 × 3 = 98.800 + 2.280 = 101.080 Pa.",
          hints: ["1 mmHg = 133 Pa. 760 × 133 = ?", "760 × 130 + 760 × 3 = 98.800 + 2.280."],
          difficulty: 2,
          tags: ["druckeinheiten", "mmhg", "pascal"],
        },
        {
          question: "Welche Einheit hat Leistung im SI-System?",
          options: ["Watt (W = J/s)", "Joule (J)", "Newton (N)", "Pascal (Pa)", "Volt (V)"],
          correctIndex: 0,
          explanation:
            "Leistung P = Energie/Zeit. SI-Einheit: Watt (W) = J/s = kg×m²/s³. Joule ist die Einheit der Energie/Arbeit, nicht der Leistung. 1 kW = 1.000 W. Herzleistung in Ruhe ~1 W; menschlicher Grundumsatz ~80–100 W (der Körper gibt so viel Wärme ab wie eine Glühbirne!); bei körperlicher Maximalbelastung bis ~1.000 W kurzzeitig möglich. Ein Ausdauersportler kann über 1 h ~300–400 W aufrechterhalten.",
          hints: ["Leistung = Energie / Zeit. Energie in J, Zeit in s.", "J/s = W (Watt)."],
          difficulty: 1,
          tags: ["si-einheiten", "leistung", "watt"],
        },
        {
          question: "Die Körpertemperatur beträgt 37°C. Was ist das in Kelvin?",
          options: ["310 K", "37 K", "273 K", "100 K", "236 K"],
          correctIndex: 0,
          explanation:
            "T [K] = T [°C] + 273 = 37 + 273 = 310 K. Absolutnullpunkt 0 K = −273°C; Gefrierpunkt Wasser 0°C = 273 K; Siedepunkt Wasser 100°C = 373 K; Körpertemperatur 37°C = 310 K; Fieber >38°C = >311 K. In der Biochemie (Arrhenius-Gleichung k = A × exp(−Ea/RT), R = 8,314 J/(mol×K)): Q10-Regel — Temperaturerhöhung um 10 K (≈ 10°C) verdoppelt Reaktionsgeschwindigkeit, erklärt erhöhten Metabolismus bei Fieber.",
          hints: ["T [K] = T [°C] + 273.", "37 + 273 = 310 K."],
          difficulty: 1,
          tags: ["temperatureinheiten", "kelvin", "celsius"],
        },
        {
          question: "Welche Einheit hat Energie in SI-Grundeinheiten ausgedrückt?",
          options: ["kg×m²/s²", "kg×m/s²", "kg/m×s²", "kg×m²/s", "kg×m²×s"],
          correctIndex: 0,
          explanation:
            "Energie = Kraft × Weg: [E] = [F] × [s] = N × m = (kg×m/s²) × m = kg×m²/s² = J. Falsche Optionen: kg×m/s² ist Newton (Kraft); kg/m×s² = kg/(m×s²) ist Pascal (Druck: Pa = N/m² = kg×m/s² / m² = kg/(m×s²)); kg×m²/s ist Drehimpuls; kg×m²×s hat keine Standardbedeutung. Die Dimensionsanalyse: Energie = Leistung × Zeit = W × s = (kg×m²/s³) × s = kg×m²/s².",
          hints: [
            "Energie = Kraft × Weg. Kraft in SI = N = kg×m/s². Mal Meter = ?",
            "kg×m/s² × m = kg×m²/s².",
          ],
          difficulty: 3,
          tags: ["si-einheiten", "energie", "joule"],
        },
        {
          question: "Welche Molekülmasse hat Hämoglobin (64 kDa) in g/mol?",
          options: ["64.000 g/mol", "64 g/mol", "640 g/mol", "6.400 g/mol", "640.000 g/mol"],
          correctIndex: 0,
          explanation:
            "1 Da = 1 g/mol. 1 kDa = 1.000 Da = 1.000 g/mol. 64 kDa = 64.000 g/mol = 64 kg/mol. Hämoglobin ist ein Tetramer aus 4 Untereinheiten (je ~16 kDa = 16.000 g/mol), jede mit einer Häm-Gruppe und einem Fe²⁺-Ion. Molare Hb-Konzentration im Blut: ca. 150 g/L Hb; 150 g/L ÷ 64.000 g/mol ≈ 2,34 mmol/L (als Tetramer). Jede Hb-Einheit bindet bis zu 4 O₂-Moleküle (an den 4 Häm-Gruppen).",
          hints: [
            "1 kDa = 1.000 Da = 1.000 g/mol. 64 kDa = 64 × 1.000 g/mol.",
            "64 × 1.000 = 64.000 g/mol.",
          ],
          difficulty: 2,
          tags: ["molmasse", "hämoglobin", "dalton"],
        },
        {
          question:
            "Was ist der korrekte Ausdruck für 1 Gy (Gray, Strahlendosis) in SI-Grundeinheiten?",
          options: ["J/kg = m²/s²", "J/s = W", "C/kg (Coulomb/kg)", "N/m²", "J×kg"],
          correctIndex: 0,
          explanation:
            "1 Gy = 1 J/kg (absorbierte Energie pro Kilogramm Gewebe). In Grundeinheiten: J/kg = (kg×m²/s²)/kg = m²/s². Sievert: 1 Sv = Gy × Wichtungsfaktor w_R. Für Röntgen/Gamma: w_R = 1 → 1 Sv = 1 Gy. Für Alphastrahlung: w_R = 20 → 1 Gy Alpha-Strahlung = 20 Sv biologische Wirkung. Klinisch: Ganzkörperbestrahlung >1 Gy → Strahlenkrankheit; >6 Gy → letal ohne KMT; Strahlentherapie Karzinom: 60–70 Gy in 30 Fraktionen à 2 Gy.",
          hints: [
            "1 Gy = 1 J/kg. Joule in Grundeinheiten: J = kg×m²/s².",
            "J/kg = kg×m²/s² / kg = m²/s².",
          ],
          difficulty: 3,
          tags: ["strahlendosis", "gray", "si-einheiten"],
        },
      ],
    },
  ],
};
