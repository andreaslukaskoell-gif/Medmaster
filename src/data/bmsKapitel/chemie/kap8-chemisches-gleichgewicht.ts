import type { Kapitel } from '../types';

export const chemKap8: Kapitel = {
  id: "chem-kap8",
  title: "Chemisches Gleichgewicht",
  subject: "chemie",
  icon: "⚖️",
  estimatedTime: "50 min",
  unterkapitel: [
    {
      id: "ch-8-01",
      title: "Reaktionsgeschwindigkeit und Aktivierungsenergie",
      content: `## Reaktionsgeschwindigkeit

Die Reaktionsgeschwindigkeit v beschreibt, wie schnell sich die Konzentration einer Substanz mit der Zeit ändert. Formal gilt:

**v = Δc / Δt**

wobei Δc die Konzentrationsänderung und Δt das Zeitintervall ist. Die Einheit ist mol·L⁻¹·s⁻¹. Für Produkte ist v positiv, für Edukte negativ.

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**Konzentration:** Höhere Konzentration der Reaktionspartner bedeutet mehr Teilchenkollisionen pro Zeiteinheit — schnellere Reaktion. Dieser Zusammenhang wird durch das Geschwindigkeitsgesetz beschrieben: v = k·[A]^m·[B]^n, wobei k die Geschwindigkeitskonstante und m, n die partiellen Reaktionsordnungen sind.

**Temperatur und die RGT-Regel:** Die Van't-Hoff-Regel (Reaktionsgeschwindigkeits-Temperatur-Regel, RGT-Regel) besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit näherungsweise verdoppelt. Der Temperaturfaktor Q₁₀ ≈ 2 gilt für viele chemische und biologische Reaktionen. Bei Enzymen gilt dies jedoch nur im physiologischen Bereich; oberhalb der optimalen Temperatur kommt es zur Denaturierung.

## Aktivierungsenergie und das Arrhenius-Konzept

Damit eine Reaktion ablaufen kann, müssen die Reaktionspartner die **Aktivierungsenergie E_A** aufbringen. Diese entspricht dem Energieberg im Potenzialprofil, den Moleküle überwinden müssen, um vom Edukt- in den Produktzustand zu gelangen.

Die **Arrhenius-Gleichung** (qualitativ) beschreibt den Zusammenhang zwischen Temperatur und Geschwindigkeitskonstante:

k = A · e^(−E_A / RT)

Dabei ist A der präexponentielle Faktor (Stoßfrequenz und geometrische Anforderungen), R die Gaskonstante (8,314 J·mol⁻¹·K⁻¹) und T die absolute Temperatur (Kelvin). Hohe E_A führt zu langsamer Reaktion bei Raumtemperatur. Erhöht man T, steigt k exponentiell.

## Reaktionskoordinate und Übergangszustand

Im Energiediagramm liegt zwischen Edukten und Produkten der **Übergangszustand (aktivierter Komplex)**. Die Differenz zwischen Eduktenergie und Energiegipfel ist E_A der Hinreaktion, die Differenz zwischen Produktenergie und Gipfel ist E_A der Rückreaktion. Die Reaktionsenthalpie ΔH ist die Differenz zwischen Produkt- und Eduktenergie.

Exotherme Reaktionen (ΔH < 0) haben niedrigere Produktenergie als Edukte; endotherme Reaktionen (ΔH > 0) umgekehrt. Beide benötigen aber eine Aktivierungsenergie.

## Bedeutung für Biologie und Medizin

Im menschlichen Körper läuft die Mehrzahl chemischer Reaktionen bei 37 °C ab — eine Temperatur, die ohne Enzyme viele Reaktionen prohibitiv langsam machen würde. Fieber (39–41 °C) beschleunigt biochemische Reaktionen leicht, kann aber Enzymdenaturierung verursachen.`,
      lernziele: [
        "Die Reaktionsgeschwindigkeit formal definieren und Einflussfaktoren nennen können",
        "Die RGT-Regel (Q₁₀ ≈ 2) erklären und anwenden können",
        "Den Begriff der Aktivierungsenergie im Potenzialdiagramm interpretieren können",
      ],
      sections: [
        {
          heading: "RGT-Regel im Detail",
          text: "Die RGT-Regel besagt: Eine Temperaturerhöhung um 10 °C (=Q₁₀) verdoppelt die Reaktionsgeschwindigkeit näherungsweise. Bei einer Ausgangstemperatur von 20 °C und einem Q₁₀ von 2 ist die Geschwindigkeit bei 30 °C doppelt so hoch, bei 40 °C viermal so hoch. Für biologische Enzyme gilt dies nur im optimalen Temperaturbereich. Darüber sinkt die Geschwindigkeit durch Denaturierung rapide. Im klinischen Kontext erklärt die RGT-Regel, warum Fieber den Stoffwechsel beschleunigt — bei hohem Fieber über 40 °C können jedoch Enzymschäden auftreten. Der Q₁₀-Wert variiert je nach Reaktionstyp: einfache Diffusion hat Q₁₀ ≈ 1,2–1,5, enzymatische Reaktionen oft Q₁₀ ≈ 2–3.",
          merksatz: "RGT: +10 °C → Q₁₀ ≈ 2 (doppelte Geschwindigkeit)",
        },
        {
          heading: "Aktivierungsenergie und Katalyse",
          text: "Die Aktivierungsenergie E_A ist die minimale Energiemenge, die Reaktanten besitzen müssen, damit eine Reaktion ablaufen kann. Sie erscheint im Energieprofil als Hügel zwischen Edukten und Produkten. Ein Katalysator senkt E_A, indem er einen alternativen Reaktionsweg mit niedrigerem Energieprofil bereitstellt. Er wird dabei selbst nicht verbraucht. Enzyme als biologische Katalysatoren können E_A um mehrere Zehner kJ/mol senken und damit Reaktionen um Faktoren von 10⁶ bis 10¹² beschleunigen. Die Gesamtreaktionsenthalpie ΔH bleibt dabei unverändert — der Katalysator beeinflusst nur die Kinetik, nicht die Thermodynamik.",
          merksatz: "Katalysator senkt E_A — ΔH bleibt gleich",
        },
      ],
      merksätze: [
        "v = Δc/Δt — Konzentration über Zeit",
        "RGT-Regel: +10 °C → doppelte Geschwindigkeit (Q₁₀ ≈ 2)",
        "Arrhenius: k steigt exponentiell mit Temperatur",
      ],
      klinischerBezug: "Fieber erhöht die Reaktionsgeschwindigkeit enzymatischer Prozesse (RGT-Regel), beschleunigt so Immunreaktionen, kann aber bei über 40 °C zur Enzymdenaturierung führen. Hyperthermie-Therapie nutzt dieses Prinzip bei Tumorbehandlung.",
      altfrage: {
        question: "Was versteht man unter der Aktivierungsenergie einer Reaktion?",
        answer: "Die Aktivierungsenergie E_A ist die Mindestenergie, die Reaktanten aufbringen müssen, um den Übergangszustand (aktivierten Komplex) zu erreichen und damit die Reaktion zu ermöglichen. Im Energiediagramm entspricht sie dem Energieunterschied zwischen Eduktniveau und dem Energiemaximum (Übergangszustand).",
      },
      selfTest: [
        {
          question: "Eine Reaktion hat bei 20 °C eine Geschwindigkeit von 0,4 mol/L·s. Wie groß ist die Geschwindigkeit bei 40 °C (Q₁₀ = 2)?",
          options: [
            "0,8 mol/L·s",
            "1,2 mol/L·s",
            "1,6 mol/L·s",
            "2,0 mol/L·s",
            "3,2 mol/L·s",
          ],
          correctIndex: 2,
          explanation: "Bei +10 °C verdoppelt sich die Geschwindigkeit (Q₁₀ = 2). Von 20 °C auf 30 °C: 0,4 × 2 = 0,8 mol/L·s. Von 30 °C auf 40 °C: 0,8 × 2 = 1,6 mol/L·s. Also zwei Verdopplungsschritte → Faktor 4 → 1,6 mol/L·s.",
          hints: [
            "Q₁₀ = 2 bedeutet Verdopplung pro 10 °C Schritt",
            "Von 20 auf 40 °C sind es zwei 10-°C-Schritte",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was bewirkt ein Katalysator in einer chemischen Reaktion?",
          options: [
            "Er erhöht die Reaktionsenthalpie ΔH",
            "Er senkt die Aktivierungsenergie E_A",
            "Er verschiebt das chemische Gleichgewicht auf die Produktseite",
            "Er erhöht die Konzentration der Produkte",
            "Er wird im Verlauf der Reaktion verbraucht",
          ],
          correctIndex: 1,
          explanation: "Ein Katalysator stellt einen alternativen Reaktionspfad mit niedrigerer Aktivierungsenergie bereit. Er beeinflusst weder ΔH noch die Lage des Gleichgewichts und wird selbst nicht verbraucht — er geht aus der Reaktion unverändert hervor.",
          hints: [
            "Katalysatoren verändern die Kinetik, nicht die Thermodynamik",
            "Werden Katalysatoren im Verlauf der Reaktion verbraucht?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage zur Arrhenius-Gleichung k = A·e^(−E_A/RT) ist korrekt?",
          options: [
            "Hohe E_A führt zu hoher Geschwindigkeitskonstante k",
            "Die Geschwindigkeitskonstante k sinkt mit steigender Temperatur",
            "k steigt exponentiell mit zunehmender Temperatur",
            "Der Faktor A beschreibt die Reaktionsenthalpie",
            "R ist die Boltzmann-Konstante in J/mol·K",
          ],
          correctIndex: 2,
          explanation: "In der Arrhenius-Gleichung steigt k exponentiell mit der Temperatur T: Mit höherem T wird der Exponent −E_A/RT weniger negativ, sodass e^(−E_A/RT) größer wird. Hohe E_A führt dagegen zu kleinerem k (träge Reaktion). R ist die universelle Gaskonstante (8,314 J/mol·K).",
          hints: [
            "Betrachte den Exponenten: −E_A/RT — was passiert, wenn T steigt?",
            "Hohe Aktivierungsenergie hemmt oder beschleunigt?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was beschreibt die Reaktionsgeschwindigkeit v = Δc/Δt?",
          options: [
            "Die Energieänderung pro Zeiteinheit",
            "Die Konzentrationsänderung pro Zeiteinheit",
            "Die Molmassenänderung pro Zeiteinheit",
            "Die Druckänderung pro Zeiteinheit",
            "Die Temperaturänderung pro Zeiteinheit",
          ],
          correctIndex: 1,
          explanation: "Die Reaktionsgeschwindigkeit v = Δc/Δt gibt an, wie stark sich die Konzentration eines Stoffs (in mol/L) pro Zeiteinheit (in Sekunden) ändert. Die Einheit ist mol·L⁻¹·s⁻¹. Für Produkte ist v positiv (Konzentration steigt), für Edukte negativ (Konzentration sinkt).",
          hints: [
            "Δc steht für Konzentrationsänderung",
            "Δt steht für Zeitintervall",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Im Energieprofil einer exothermen Reaktion gilt:",
          options: [
            "Produkte liegen energetisch höher als Edukte",
            "E_A der Hinreaktion ist größer als E_A der Rückreaktion",
            "ΔH ist positiv",
            "Der Übergangszustand liegt auf dem Energieminimum",
            "Die Reaktion benötigt keine Aktivierungsenergie",
          ],
          correctIndex: 1,
          explanation: "Bei einer exothermen Reaktion (ΔH < 0) liegen die Produkte energetisch tiefer als die Edukte. Die Aktivierungsenergie der Hinreaktion (von Edukten zum Übergangszustand) ist daher größer als die der Rückreaktion (von Produkten zum Übergangszustand). Trotzdem ist eine Aktivierungsenergie notwendig.",
          hints: [
            "Exotherm bedeutet ΔH < 0 — Produkte haben niedrigere Energie",
            "Wie liegt der Übergangszustand relativ zu Edukten und Produkten?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: "ch-8-02",
      title: "Chemisches Gleichgewicht und Massenwirkungsgesetz",
      content: `## Das dynamische chemische Gleichgewicht

Ein chemisches Gleichgewicht entsteht, wenn in einem geschlossenen System Hin- und Rückreaktion mit gleicher Geschwindigkeit ablaufen. Man spricht von einem **dynamischen Gleichgewicht**, weil beide Reaktionen weiterhin stattfinden — makroskopisch ändert sich jedoch keine Konzentration mehr. Die Reaktion wird mit einem Doppelpfeil ⇌ geschrieben.

**Wichtig:** Das Gleichgewicht wird nur in geschlossenen Systemen erreicht. In offenen Systemen (z. B. CO₂-Abgabe beim Atmen) findet keine Gleichgewichtseinstellung statt.

## Das Massenwirkungsgesetz (MWG)

Für die allgemeine Reaktion: a·A + b·B ⇌ p·P + q·Q

lautet die Gleichgewichtskonstante:

**K_c = [P]^p · [Q]^q / ([A]^a · [B]^b)**

Die eckigen Klammern bezeichnen Gleichgewichtskonzentrationen in mol/L. Die Exponenten entsprechen den stöchiometrischen Koeffizienten.

## Interpretation von K_c

- **K >> 1:** Das Gleichgewicht liegt auf der Produktseite (Produkte bevorzugt)
- **K ≈ 1:** Edukte und Produkte in vergleichbaren Mengen
- **K << 1:** Das Gleichgewicht liegt auf der Eduktseite (Edukte bevorzugt)
- K ist temperaturabhängig, aber konzentrations- und druckunabhängig

## K_p versus K_c bei Gasen

Für Gasreaktionen kann man die Gleichgewichtskonstante auch über Partialdrücke ausdrücken:

**K_p = K_c · (RT)^Δn**

wobei Δn = Summe der stöchiometrischen Koeffizienten der Produkte minus Summe der Edukte in der Gasphase ist. Wenn Δn = 0 (gleiche Molzahlen auf beiden Seiten), gilt K_p = K_c.

## Reaktionsquotient Q

Ist das System noch nicht im Gleichgewicht, berechnet man den **Reaktionsquotienten Q** mit denselben Formeln wie K_c, aber mit aktuellen (nicht Gleichgewichts-) Konzentrationen:

- Q < K_c: Reaktion läuft in Richtung Produkte (Hinreaktion bevorzugt)
- Q > K_c: Reaktion läuft in Richtung Edukte (Rückreaktion bevorzugt)
- Q = K_c: System im Gleichgewicht

## Beispiel: Essigsäure-Dissoziation

CH₃COOH ⇌ CH₃COO⁻ + H⁺

K_s = [CH₃COO⁻][H⁺] / [CH₃COOH] ≈ 1,8 × 10⁻⁵

Da K_s << 1, liegt das Gleichgewicht stark auf der Seite der undissoziierten Säure — Essigsäure ist eine schwache Säure.`,
      lernziele: [
        "Das dynamische chemische Gleichgewicht definieren und von statischem Gleichgewicht abgrenzen",
        "Das Massenwirkungsgesetz für eine gegebene Reaktion aufstellen können",
        "K_c interpretieren und K_p von K_c unterscheiden",
      ],
      sections: [
        {
          heading: "Massenwirkungsgesetz — Aufstellung und Interpretation",
          text: "Das Massenwirkungsgesetz (MWG) verknüpft die Gleichgewichtskonzentrationen aller Reaktionspartner mit einer Konstante K_c. Die Produkte stehen im Zähler, die Edukte im Nenner, jeweils potenziert mit den stöchiometrischen Koeffizienten. Reine Feststoffe und reine Flüssigkeiten (wie Wasser als Lösungsmittel) werden im MWG nicht berücksichtigt, da ihre Aktivitäten definitionsgemäß gleich 1 sind. Ein großes K_c bedeutet, dass bei Gleichgewicht viel mehr Produkt als Edukt vorhanden ist. K_c ist charakteristisch für eine bestimmte Reaktion bei einer bestimmten Temperatur und kann aus Standard-Tabellen entnommen werden.",
          merksatz: "K_c: Produkte im Zähler, Edukte im Nenner (je Koeffizient potenziert)",
        },
        {
          heading: "Reaktionsquotient Q vs. Gleichgewichtskonstante K",
          text: "Der Reaktionsquotient Q hat dieselbe mathematische Form wie K_c, wird aber mit aktuellen Konzentrationen berechnet — nicht mit Gleichgewichtskonzentrationen. Vergleicht man Q mit K_c, kann man vorhersagen, in welche Richtung die Reaktion läuft: Ist Q < K_c, müssen mehr Produkte entstehen (Hinreaktion). Ist Q > K_c, muss die Rückreaktion überwiegen. Nur wenn Q = K_c herrscht echtes Gleichgewicht. Dieses Konzept ist besonders bei klinischen Berechnungen wichtig, z. B. wenn sich pH-Werte durch Zugabe von Pufferkomponenten verschieben.",
          merksatz: "Q < K → Hinreaktion, Q > K → Rückreaktion, Q = K → Gleichgewicht",
        },
      ],
      merksätze: [
        "Dynamisches GGW: Hin- und Rückreaktion gleich schnell",
        "K_c = [Produkte]^n / [Edukte]^m (Koeff. als Exponenten)",
        "K >> 1: Produkte bevorzugt; K << 1: Edukte bevorzugt",
      ],
      klinischerBezug: "Die Sauerstoffbindung an Hämoglobin ist ein Gleichgewicht: Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂) liegt K auf der HbO₂-Seite; im Gewebe (niedriger pO₂) wird O₂ freigesetzt. CO₂ und pH beeinflussen K (Bohr-Effekt).",
      altfrage: {
        question: "Was versteht man unter dem dynamischen chemischen Gleichgewicht?",
        answer: "Im dynamischen chemischen Gleichgewicht laufen Hin- und Rückreaktion mit gleicher Geschwindigkeit ab. Die Konzentrationen aller Reaktionspartner ändern sich makroskopisch nicht, obwohl auf molekularer Ebene ständig Reaktionen stattfinden.",
      },
      selfTest: [
        {
          question: "Für die Reaktion N₂(g) + 3H₂(g) ⇌ 2NH₃(g) lautet K_c korrekt:",
          options: [
            "K_c = [N₂]·[H₂]³ / [NH₃]²",
            "K_c = [NH₃]² / ([N₂]·[H₂]³)",
            "K_c = [NH₃] / ([N₂]·[H₂])",
            "K_c = [N₂]·[H₂] / [NH₃]",
            "K_c = [NH₃]² · [N₂] · [H₂]³",
          ],
          correctIndex: 1,
          explanation: "Nach dem Massenwirkungsgesetz stehen die Produkte im Zähler und die Edukte im Nenner, jeweils potenziert mit den stöchiometrischen Koeffizienten. NH₃ hat Koeffizient 2, N₂ hat 1, H₂ hat 3. Also K_c = [NH₃]² / ([N₂]·[H₂]³).",
          hints: [
            "Produkte im Zähler, Edukte im Nenner",
            "Stöchiometrische Koeffizienten werden zu Exponenten",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eine Reaktion hat K_c = 1×10⁻⁸. Was bedeutet das?",
          options: [
            "Die Reaktion läuft vollständig in Richtung Produkte ab",
            "Edukte und Produkte sind im Gleichgewicht gleich konzentriert",
            "Das Gleichgewicht liegt stark auf der Eduktseite",
            "Die Reaktion ist irreversibel",
            "Die Reaktionsgeschwindigkeit ist sehr hoch",
          ],
          correctIndex: 2,
          explanation: "K_c = 1×10⁻⁸ ist sehr klein (K << 1). Das bedeutet, dass im Gleichgewicht die Eduktkonzentrationen die Produktkonzentrationen bei weitem überwiegen — das Gleichgewicht liegt stark auf der Eduktseite. Die Reaktion läuft nur zu einem sehr geringen Ausmaß ab.",
          hints: [
            "K << 1 oder K >> 1 — was sagt das jeweils aus?",
            "Wo stehen die Produkte im MWG-Ausdruck?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Für welche Gasreaktion gilt K_p = K_c?",
          options: [
            "N₂ + 3H₂ ⇌ 2NH₃ (Δn = −2)",
            "H₂ + I₂ ⇌ 2HI (Δn = 0)",
            "2SO₂ + O₂ ⇌ 2SO₃ (Δn = −1)",
            "N₂O₄ ⇌ 2NO₂ (Δn = +1)",
            "C(s) + O₂ ⇌ CO₂",
          ],
          correctIndex: 1,
          explanation: "K_p = K_c · (RT)^Δn. Nur wenn Δn = 0 (gleiche Molzahl an Gasteilchen auf beiden Seiten), gilt K_p = K_c. Bei H₂ + I₂ ⇌ 2HI ist Δn = 2 − (1+1) = 0, also gilt K_p = K_c.",
          hints: [
            "Berechne Δn = Σ Produktkoeff. − Σ Eduktkoeff. (nur Gase)",
            "K_p = K_c wenn Δn = 0",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Das chemische Gleichgewicht ist 'dynamisch', weil:",
          options: [
            "Die Konzentrationen sich ständig ändern",
            "Hin- und Rückreaktion gleichzeitig mit gleicher Rate ablaufen",
            "Nur die Hinreaktion weiterläuft",
            "Die Temperatur sich kontinuierlich ändert",
            "Die Reaktion im Gleichgewicht stillsteht",
          ],
          correctIndex: 1,
          explanation: "Das Gleichgewicht wird als dynamisch bezeichnet, weil auf molekularer Ebene beide Reaktionsrichtungen (Hin- und Rückreaktion) weiterhin ablaufen — nur mit gleicher Geschwindigkeit. Makroskopisch sind keine Konzentrationsänderungen messbar, aber mikroskopisch herrscht rege Aktivität.",
          hints: [
            "Dynamisch bedeutet 'in Bewegung' — was bewegt sich noch?",
            "Sind die makroskopischen Konzentrationen konstant oder ändernd?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Für eine Reaktion gilt gerade Q = 5 und K_c = 0,1. In welche Richtung läuft die Reaktion?",
          options: [
            "In Richtung Produkte (Hinreaktion)",
            "In Richtung Edukte (Rückreaktion)",
            "Das System befindet sich im Gleichgewicht",
            "Die Reaktion steht still",
            "Keine Aussage möglich ohne Temperaturangabe",
          ],
          correctIndex: 1,
          explanation: "Da Q = 5 > K_c = 0,1, gibt es zu viele Produkte im Verhältnis zu den Edukten. Das System muss in Richtung Edukte (Rückreaktion) reagieren, bis Q = K_c erreicht ist. Merkregel: Q > K → Rückreaktion.",
          hints: [
            "Vergleiche Q mit K: Q > K oder Q < K?",
            "Q > K bedeutet: zu viele Produkte vorhanden",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-8-03",
      title: "Le Chatelier-Prinzip — Störung des Gleichgewichts",
      content: `## Das Prinzip von Le Chatelier (Prinzip des kleinsten Zwangs)

Das **Prinzip von Le Chatelier** (1884) besagt: Wird ein System im chemischen Gleichgewicht durch eine äußere Einwirkung gestört, so verschiebt es sich in die Richtung, die der Störung entgegenwirkt. Das System weicht der Störung aus.

Dieses Prinzip ermöglicht es, ohne Berechnung vorherzusagen, wie sich ein Gleichgewicht bei Veränderungen von Konzentration, Temperatur und Druck verhält.

## Störung durch Konzentrationsänderung

**Konzentration eines Edukts erhöhen** → Gleichgewicht verschiebt sich in Richtung Produkte (Hinreaktion bevorzugt), um die erhöhte Eduktkonzentration abzubauen.

**Konzentration eines Produkts erhöhen** → Gleichgewicht verschiebt sich in Richtung Edukte (Rückreaktion).

**Konzentration eines Produkts senken** (z.B. Produkt entfernen) → Gleichgewicht verschiebt sich in Richtung Produkte.

K_c selbst ändert sich bei Konzentrationsänderungen nicht — nur die Lage des Gleichgewichts.

## Störung durch Temperaturänderung

**Temperaturerhöhung** → Gleichgewicht verschiebt sich in Richtung der **endothermen Seite** (nimmt Wärme auf, wirkt der Erhöhung entgegen).

**Temperaturerniedrigung** → Gleichgewicht verschiebt sich in Richtung der **exothermen Seite** (gibt Wärme ab).

K_c ändert sich bei Temperaturänderung. Endotherme Reaktionen: K steigt mit T; exotherme Reaktionen: K sinkt mit T.

## Störung durch Druckänderung (bei Gasen)

**Druckerhöhung** → Gleichgewicht verschiebt sich zur Seite mit **kleinerer Molzahl** an Gasteilchen (verkleinert das Volumen → senkt den Druck).

**Druckerniedrigung** → Gleichgewicht verschiebt sich zur Seite mit **größerer Molzahl**.

Bei gleicher Molzahl (Δn = 0) hat Druckänderung keinen Einfluss auf die Gleichgewichtslage.

## Haber-Bosch-Verfahren als Fallbeispiel

N₂(g) + 3H₂(g) ⇌ 2NH₃(g)    ΔH = −92 kJ/mol

- **Hoher Druck** (150–300 bar): Δn = 2 − 4 = −2 → hoher Druck begünstigt NH₃ (weniger Mole)
- **Niedrige Temperatur** günstiger (exotherm) — aber zu langsam
- **Kompromiss:** ca. 400–500 °C mit Eisenkatalysator
- **Entfernung von NH₃** (flüssig kondensiert) hält GGW auf Produktseite

Das Haber-Bosch-Verfahren ist industriell und biologisch bedeutsam (Düngemittel → Nahrungsmittelproduktion).`,
      lernziele: [
        "Das Le-Chatelier-Prinzip formulieren und auf konkrete Störungen anwenden",
        "Die Auswirkungen von Konzentrations-, Temperatur- und Druckänderungen auf ein Gleichgewicht vorhersagen",
        "Das Haber-Bosch-Verfahren als Beispiel für angewandtes Le-Chatelier erläutern",
      ],
      sections: [
        {
          heading: "Temperatureinfluss und K_c",
          text: "Bei Konzentrationsänderungen bleibt K_c konstant — nur die Lage des Gleichgewichts ändert sich. Bei Temperaturänderungen hingegen ändert sich K_c selbst. Für eine exotherme Reaktion (ΔH < 0) sinkt K_c mit steigender Temperatur, weil die erhöhte Temperatur das GGW zur endothermen (Rück-)Reaktion verschiebt. Für endotherme Reaktionen steigt K_c mit T. Diese Temperaturabhängigkeit von K_c wird durch die Van't-Hoff-Gleichung beschrieben: ln(K₂/K₁) = −ΔH/R · (1/T₂ − 1/T₁). Im Haber-Bosch-Prozess führt Temperaturerhöhung zwar zu schnellerer Kinetik, aber kleinerem K_c — ein typischer Kompromiss zwischen Kinetik und Thermodynamik.",
          merksatz: "Temperatur ändert K_c; Konzentration/Druck ändern nur die GGW-Lage",
        },
        {
          heading: "Druckeinfluss und biologische Anwendung",
          text: "Druckänderungen betreffen nur Gleichgewichte mit Gasteilnehmern und wirken durch Verschiebung zur molzahlärmeren Seite. Im Körper ist dies bei der Atmung relevant: Auf Meereshöhe (hoher pO₂) bindet Hämoglobin effizient O₂. In großer Höhe (niedrigerer Luftdruck, niedrigerer pO₂) verschiebt sich das Gleichgewicht Hb + O₂ ⇌ HbO₂ zur linken Seite — weniger O₂ wird gebunden. Bergsteiger reagieren mit erhöhter Erythrozytenproduktion (mehr Hb) als Kompensation. Taucherkrankheit ist ein weiteres Druckbeispiel: beim Tauchen löst sich mehr N₂ im Blut (Henry-Gesetz), rasches Auftauchen lässt N₂-Blasen entstehen.",
          merksatz: "Druckerhöhung → GGW zur Seite mit weniger Gasmolen",
        },
      ],
      merksätze: [
        "Le Chatelier: GGW weicht der Störung aus",
        "Temp.↑ → GGW zur endothermen Seite (K_c ändert sich!)",
        "Druck↑ → GGW zu kleinerer Gasmolzahl",
      ],
      klinischerBezug: "Der Bohr-Effekt bei Hämoglobin ist eine physiologische Anwendung von Le Chatelier: Erhöhtes CO₂ und niedrigerer pH im Gewebe verschieben das O₂-Hb-Gleichgewicht zur Dissoziation (O₂-Abgabe). In der Lunge (niedrig CO₂, hoher O₂) verschiebt sich das GGW zurück zur O₂-Bindung.",
      altfrage: {
        question: "Wie reagiert das Gleichgewicht N₂ + 3H₂ ⇌ 2NH₃ auf Druckerhöhung?",
        answer: "Bei Druckerhöhung verschiebt sich das Gleichgewicht nach Le Chatelier in Richtung der Seite mit kleinerer Gasmolzahl. Auf der linken Seite sind 1+3=4 Mol Gas, auf der rechten 2 Mol. Das Gleichgewicht verschiebt sich also in Richtung NH₃ (Produkte).",
      },
      selfTest: [
        {
          question: "Was passiert mit der Gleichgewichtslage von N₂ + 3H₂ ⇌ 2NH₃ (exotherm) bei Temperaturerhöhung?",
          options: [
            "GGW verschiebt sich zu mehr NH₃ (Produkte)",
            "GGW verschiebt sich zu mehr N₂ und H₂ (Edukte)",
            "GGW bleibt unverändert",
            "Die Reaktion wird irreversibel",
            "K_c bleibt konstant, nur v ändert sich",
          ],
          correctIndex: 1,
          explanation: "Bei Temperaturerhöhung verschiebt sich das GGW zur endothermen Seite (Le Chatelier: weicht der Wärmezufuhr aus). Da die Reaktion exotherm ist (ΔH < 0), ist die Rückreaktion endotherm. Das GGW verschiebt sich also zur Eduktseite (mehr N₂ und H₂, weniger NH₃). Außerdem sinkt K_c bei exothermen Reaktionen mit steigender T.",
          hints: [
            "Exotherm bedeutet die Rückreaktion ist endotherm",
            "Le Chatelier: Temperaturerhöhung → GGW weicht zur wärmeaufnehmenden Seite",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum wird beim Haber-Bosch-Verfahren hoher Druck eingesetzt?",
          options: [
            "Weil hoher Druck K_c erhöht",
            "Weil Druck die Aktivierungsenergie senkt",
            "Weil die Produktseite weniger Gasmole hat (Δn = −2)",
            "Weil Druck die Temperatur erhöht",
            "Weil NH₃ bei hohem Druck stabiler ist",
          ],
          correctIndex: 2,
          explanation: "N₂ + 3H₂ ⇌ 2NH₃: links 4 Mol Gas, rechts 2 Mol Gas, also Δn = −2. Nach Le Chatelier verschiebt Druckerhöhung das GGW zur molzahlärmeren Seite (NH₃). Hoher Druck erhöht die NH₃-Ausbeute. K_c selbst ändert sich durch Druck nicht.",
          hints: [
            "Zähle die Gasmole auf jeder Seite",
            "Druckerhöhung → GGW zur Seite mit weniger Molen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Man entfernt kontinuierlich ein Reaktionsprodukt aus einem Gleichgewichtssystem. Was geschieht?",
          options: [
            "K_c sinkt",
            "Die Rückreaktion wird bevorzugt",
            "Das GGW verschiebt sich in Richtung der Produkte",
            "Die Reaktion hört auf",
            "Die Temperatur steigt",
          ],
          correctIndex: 2,
          explanation: "Entfernt man ein Produkt, sinkt dessen Konzentration unter den Gleichgewichtswert. Das System reagiert (Le Chatelier) durch vermehrte Produktbildung, um den Verlust auszugleichen. Das GGW verschiebt sich in Richtung Produkte. Dieses Prinzip wird technisch genutzt (z.B. NH₃-Kondensation im Haber-Bosch).",
          hints: [
            "Produktentfernung senkt die Produktkonzentration",
            "Le Chatelier: System versucht, den Verlust auszugleichen",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Reaktion ist NICHT durch Druckerhöhung in Richtung Produkte zu verschieben?",
          options: [
            "N₂ + 3H₂ ⇌ 2NH₃",
            "2SO₂ + O₂ ⇌ 2SO₃",
            "H₂ + I₂ ⇌ 2HI (Δn = 0)",
            "N₂O₄ ⇌ 2NO₂ — Druck begünstigt Edukt",
            "CO + 3H₂ ⇌ CH₄ + H₂O",
          ],
          correctIndex: 2,
          explanation: "Bei H₂ + I₂ ⇌ 2HI ist Δn = 2 − 2 = 0. Da beide Seiten gleich viele Gasmole haben, hat Druckänderung keinen Einfluss auf die Gleichgewichtslage. Bei allen anderen Reaktionen mit Δn ≠ 0 verschiebt Druckerhöhung das GGW zur molzahlärmeren Seite.",
          hints: [
            "Berechne Δn für jede Reaktion",
            "Druckänderung wirkt nur bei Δn ≠ 0",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Das Le-Chatelier-Prinzip besagt:",
          options: [
            "Jede Störung erhöht K_c",
            "Das GGW verschiebt sich immer in Richtung Produkte",
            "Ein gestörtes System reagiert so, dass es der Störung entgegenwirkt",
            "Nur Temperaturänderungen stören das GGW",
            "Das GGW ist bei allen Bedingungen gleich",
          ],
          correctIndex: 2,
          explanation: "Le Chatelier (Prinzip des kleinsten Zwangs): Wird ein GGW gestört, verschiebt es sich in die Richtung, die der Störung entgegenwirkt. Das System weicht aus. Konzentrationserhöhung eines Edukts → Produkte werden bevorzugt; Temperaturerhöhung → endotherme Seite bevorzugt; Druckerhöhung → molzahlärmere Seite bevorzugt.",
          hints: [
            "Le Chatelier = Prinzip des kleinsten Zwangs",
            "Das System widersetzt sich der Störung",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: "ch-8-04",
      title: "Katalysatoren — Enzyme als biologische Katalysatoren",
      content: `## Katalysatoren — Allgemeine Eigenschaften

Ein **Katalysator** ist ein Stoff, der die Reaktionsgeschwindigkeit erhöht, ohne selbst verbraucht zu werden. Er wirkt durch Bereitstellung eines alternativen Reaktionsmechanismus mit niedrigerer Aktivierungsenergie E_A.

**Wesentliche Eigenschaften:**
- Senken E_A (nicht ΔH, nicht K_c)
- Werden nicht verbraucht (gehen unverändert aus der Reaktion hervor)
- Beschleunigen Hin- und Rückreaktion gleichermaßen
- Können die GGW-Lage nicht verschieben

**Homogene Katalyse:** Katalysator und Reaktanten in derselben Phase (z. B. H⁺ katalysiert Veresterung in Lösung).
**Heterogene Katalyse:** Katalysator in anderer Phase als Reaktanten (z. B. Eisenkatalysator im Haber-Bosch, Platin im Abgaskatalysator).

## Enzyme — Biologische Katalysatoren

Enzyme sind meist Proteine (selten RNA = Ribozyme), die biologische Reaktionen extrem präzise und effizient katalysieren. Merkmale:

- **Substratspezifität:** Jedes Enzym erkennt nur spezifische Substrate (Schlüssel-Schloss-Modell; realistischer: Induced-Fit-Modell)
- **Aktives Zentrum:** Räumlich definierte Bindungstasche; Aminosäurereste positionieren Substrat und senken E_A
- **Cofaktoren/Coenzyme:** Viele Enzyme benötigen Metallionen (Zn²⁺, Fe²⁺) oder organische Coenzyme (NAD⁺, FAD, Coenzym A)

## Michaelis-Menten-Kinetik

Die Michaelis-Menten-Kinetik beschreibt die Abhängigkeit der Reaktionsgeschwindigkeit v von der Substratkonzentration [S]:

**v = v_max · [S] / (K_M + [S])**

- **v_max:** Maximale Geschwindigkeit (alle Enzymaktivzentren besetzt)
- **K_M (Michaelis-Konstante):** Substratkonzentration, bei der v = v_max/2. Niedrig K_M = hohe Affinität.
- Bei [S] >> K_M gilt v ≈ v_max (Sättigung).
- Bei [S] << K_M ist v proportional zu [S] (lineare Kinetik).

## Enzymhemmung

**Kompetitive Hemmung:** Inhibitor konkurriert mit Substrat um das aktive Zentrum. K_M scheinbar erhöht, v_max unverändert. Durch hohe Substratkonzentration überwindbar.

**Nicht-kompetitive Hemmung:** Inhibitor bindet an allosterische Stelle (nicht aktives Zentrum). v_max sinkt, K_M unverändert. Nicht durch Substrat überwindbar.

**Irreversible Hemmung:** Inhibitor bindet kovalent (z. B. Aspirin hemmt COX, Organophosphate hemmen Acetylcholinesterase).

Enzyme sind Schlüsselziele für Medikamente: Statine (HMG-CoA-Reduktase-Hemmer), ACE-Hemmer, Protonenpumpenhemmer (H⁺/K⁺-ATPase), Antibiotika.`,
      lernziele: [
        "Katalysatoren von Reaktanten abgrenzen und homo-/heterogene Katalyse unterscheiden",
        "Die Michaelis-Menten-Gleichung erklären und K_M, v_max interpretieren",
        "Kompetitive und nicht-kompetitive Enzymhemmung vergleichen",
      ],
      sections: [
        {
          heading: "Michaelis-Menten-Kinetik im Detail",
          text: "Die Michaelis-Menten-Gleichung v = v_max·[S]/(K_M+[S]) beschreibt eine hyperbolische Kurve. Trägt man v gegen [S] auf, sieht man bei niedrigen [S] einen linearen Anstieg, der bei hohen [S] in eine Sättigung (v_max) übergeht. Der K_M-Wert ist die Substratkonzentration bei halbmaximaler Geschwindigkeit (v_max/2). Ein kleiner K_M bedeutet hohe Substrataffinität — das Enzym ist schon bei niedrigen Konzentrationen halb gesättigt. Zum Beispiel hat Hexokinase K_M ≈ 0,1 mM für Glucose, Glucokinase K_M ≈ 10 mM — was ihre unterschiedlichen physiologischen Rollen erklärt (Glucokinase als Glucosesensor in der Leber).",
          merksatz: "K_M = [S] bei v_max/2; kleines K_M = hohe Affinität",
        },
        {
          heading: "Enzymhemmung und klinische Relevanz",
          text: "Kompetitive Inhibitoren ähneln strukturell dem Substrat und besetzen das aktive Zentrum. Im Lineweaver-Burk-Plot (1/v gegen 1/[S]) ändert sich der x-Achsenabschnitt (K_M scheinbar größer), während der y-Achsenabschnitt (1/v_max) konstant bleibt. Nicht-kompetitive Inhibitoren binden außerhalb des aktiven Zentrums, verändern dessen Konformation und reduzieren v_max, ohne K_M zu ändern. Beispiele: Methotrexat hemmt kompetitiv Dihydrofolatreduktase (Krebstherapie); Cyanid hemmt irreversibel Cytochrom-c-Oxidase der Atmungskette; Physostigmin hemmt reversibel Acetylcholinesterase (Myasthenia gravis).",
          merksatz: "Kompetitiv: K_M↑, v_max gleich — nicht-kompetitiv: v_max↓, K_M gleich",
        },
      ],
      merksätze: [
        "Katalysator: senkt E_A, wird nicht verbraucht, ändert K_c nicht",
        "K_M klein = hohe Enzymaffinität, K_M = [S] bei v_max/2",
        "Kompetitiv: K_M↑; nicht-kompetitiv: v_max↓",
      ],
      klinischerBezug: "Statine hemmen kompetitiv die HMG-CoA-Reduktase (Cholesterinsynthese). Metformin aktiviert AMPK und hemmt die hepatische Gluconeogenese. Aspirin inaktiviert irreversibel COX-1/2 durch Acetylierung (Thrombozytenaggregationshemmung, Analgesie).",
      altfrage: {
        question: "Was versteht man unter der Michaelis-Konstante K_M?",
        answer: "K_M ist die Substratkonzentration, bei der ein Enzym die halbe maximale Reaktionsgeschwindigkeit (v_max/2) erreicht. Ein kleines K_M bedeutet hohe Substrataffinität (Sättigung bereits bei niedrigen Konzentrationen), ein großes K_M niedrige Affinität.",
      },
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen kompetitiver und nicht-kompetitiver Enzymhemmung?",
          options: [
            "Kompetitiv: v_max↓, nicht-kompetitiv: K_M↑",
            "Kompetitiv: K_M↑, v_max gleich; nicht-kompetitiv: v_max↓, K_M gleich",
            "Beide erniedrigen v_max und erhöhen K_M",
            "Nur kompetitive Hemmung ist reversibel",
            "Nicht-kompetitiv bindet am aktiven Zentrum",
          ],
          correctIndex: 1,
          explanation: "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um das aktive Zentrum. K_M erscheint erhöht (schlechtere scheinbare Affinität), v_max bleibt erreichbar bei hohem [S]. Bei nicht-kompetitiver Hemmung bindet der Inhibitor an allosterischer Stelle und reduziert v_max, ohne K_M zu verändern.",
          hints: [
            "Wo bindet der Inhibitor jeweils?",
            "Kann man kompetitive Hemmung durch viel Substrat überwinden?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Enzyme als Katalysatoren ist FALSCH?",
          options: [
            "Enzyme werden im Verlauf der Reaktion nicht verbraucht",
            "Enzyme senken die Aktivierungsenergie der Reaktion",
            "Enzyme können die Gleichgewichtslage einer Reaktion verschieben",
            "Enzyme beschleunigen Hin- und Rückreaktion gleichermaßen",
            "Enzyme zeigen Substratspezifität",
          ],
          correctIndex: 2,
          explanation: "Enzyme sind Katalysatoren und können die Lage des chemischen Gleichgewichts (K_c) nicht verändern — sie beschleunigen lediglich das Erreichen des Gleichgewichts. K_c wird nur durch Temperatur beeinflusst. Enzyme senken E_A und werden dabei nicht verbraucht.",
          hints: [
            "Was können Katalysatoren grundsätzlich nicht verändern?",
            "Katalysatoren beeinflussen Kinetik oder Thermodynamik?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Enzym hat K_M = 0,5 mM. Bei welcher Substratkonzentration ist v = v_max/2?",
          options: [
            "0,25 mM",
            "0,5 mM",
            "1,0 mM",
            "5,0 mM",
            "v_max/2 ist nicht definiert",
          ],
          correctIndex: 1,
          explanation: "Per Definition ist K_M die Substratkonzentration, bei der v = v_max/2 gilt. Das ist direkt aus der Michaelis-Menten-Gleichung ableitbar: v = v_max·[S]/(K_M+[S]). Setzt man [S] = K_M ein: v = v_max·K_M/(K_M+K_M) = v_max/2. Also gilt v = v_max/2 bei [S] = 0,5 mM.",
          hints: [
            "K_M ist per Definition [S] bei v_max/2",
            "Setze [S] = K_M in die MM-Gleichung ein",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Enzymmodell erklärt am besten die Substratspezifität?",
          options: [
            "Schlüssel-Schloss-Modell (Fischer, 1894) — perfekte komplementäre Form",
            "Induced-Fit-Modell (Koshland) — Enzym passt sich dem Substrat an",
            "Random-Coil-Modell",
            "Michaelis-Menten-Modell",
            "Arrhenius-Modell",
          ],
          correctIndex: 1,
          explanation: "Das Induced-Fit-Modell (Koshland, 1958) ist das modernere und realistischere Modell: Das aktive Zentrum ist flexibel und passt seine Konformation beim Substratbinden an. Dies erklärt auch, warum ähnliche Substrate unterschiedlich gut passen. Das klassische Schlüssel-Schloss-Modell (Fischer) geht von starrer Komplementarität aus, ist aber zu vereinfacht.",
          hints: [
            "Welches Modell berücksichtigt die Flexibilität des Enzyms?",
            "Schlüssel-Schloss vs. Induced-Fit — welches ist aktueller?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum wird im Lineweaver-Burk-Plot bei kompetitiver Hemmung nur der x-Achsen-Schnittpunkt verändert?",
          options: [
            "Weil v_max sinkt",
            "Weil K_M kleiner wird",
            "Weil v_max konstant bleibt (y-Achse: 1/v_max unverändert), K_M aber scheinbar steigt",
            "Weil der Inhibitor v_max erhöht",
            "Weil K_M sinkt und v_max steigt",
          ],
          correctIndex: 2,
          explanation: "Im Lineweaver-Burk-Plot ist der y-Achsenabschnitt = 1/v_max und der x-Achsenabschnitt = −1/K_M. Bei kompetitiver Hemmung bleibt v_max konstant (y-Achsenabschnitt unverändert), aber K_M(app) ist erhöht (x-Achsenabschnitt verschiebt sich, da −1/K_M kleiner = weniger negativ). Die Geraden treffen sich auf der y-Achse.",
          hints: [
            "Kompetitive Hemmung ändert K_M, nicht v_max",
            "y-Achsenabschnitt = 1/v_max; x-Achsenabschnitt = −1/K_M",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
