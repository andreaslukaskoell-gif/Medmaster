import type { Kapitel } from "../types";

export const physKapFluid: Kapitel = {
  id: "phys-kap2",
  title: "Fluidmechanik & Hämodynamik",
  subject: "physik",
  icon: "💧",
  estimatedTime: "120 min",
  unterkapitel: [
    // === UK 1: Hydrostatik ===
    {
      id: "ph-fluid-01",
      title: "Hydrostatik: Druck in ruhenden Fluiden",
      stichworte: [
        "Hydrostatischer Druck",
        "Schweredruck",
        "Pascalsches Prinzip",
        "Hydrostatisches Paradoxon",
        "Manometer",
        "Blutdruckmessung",
        "Riva-Rocci",
        "Druck in Flüssigkeiten",
        "Herzhöhe",
        "hydraulische Presse",
      ],
      content: `Blutdruck, Hirnwasser, Beatmungsdruck — in der Medizin sind ruhende Flüssigkeiten allgegenwärtig. Ihre Physik lässt sich auf ein einziges Konzept zurückführen: **Druck**.

## Druck — der zentrale Begriff der Fluidmechanik

Jeder, der schon einmal tief getaucht ist, kennt das Druckgefühl auf den Ohren. Dieses alltägliche Phänomen führt direkt zum physikalischen Kernbegriff der Hydrostatik: dem **Druck**. Physikalisch ist Druck definiert als Kraft pro Fläche:

**p = F / A**

Die SI-Einheit ist das **Pascal** (1 Pa = 1 N/m² = 1 kg·m⁻¹·s⁻²). Ein Pascal ist ein überraschend kleiner Druck — der atmosphärische Luftdruck beträgt bereits rund 101 325 Pa. In der Medizin hat sich deshalb eine andere Einheit durchgesetzt: **Millimeter Quecksilbersäule** (mmHg). Die Umrechnung lautet **1 mmHg ≈ 133,3 Pa**, und der Normaldruck auf Meereshöhe entspricht **1 atm = 760 mmHg**. In der Beatmungsmedizin begegnet man zudem der Einheit cmH₂O (1 cmH₂O ≈ 98 Pa), die bei der Einstellung von PEEP-Werten (positiver endexspiratorischer Druck) am Beatmungsgerät eine Rolle spielt.

> **Merke:** Druck p = F/A hat die Einheit Pascal (Pa). In der Klinik: 1 mmHg ≈ 133 Pa, 1 atm = 760 mmHg = 101 325 Pa.

---

{{DIAGRAM:laminar-flow-profile}}

## Hydrostatischer Druck (Schweredruck)

Stellt man sich eine ruhende Flüssigkeitssäule vor, so lastet auf jeder Schicht das Gewicht aller darüber liegenden Schichten. Daraus folgt die fundamentale Beziehung der Hydrostatik:

**p = ρ · g · h**

Hier steht **ρ** für die Dichte der Flüssigkeit (Wasser: ≈ 1000 kg/m³, Blut: ≈ 1060 kg/m³), **g** für die Erdbeschleunigung (9,81 m/s²) und **h** für die Höhe der Flüssigkeitssäule. Der **Gesamtdruck** in einer bestimmten Tiefe ergibt sich als Summe aus dem Oberflächendruck und dem Schweredruck: **p_gesamt = p₀ + ρ·g·h**.

Diese Gleichung hat weitreichende Konsequenzen. Pro 10 m Wassersäule nimmt der Druck um etwa 1 atm zu — ein Taucher in 30 m Tiefe steht also unter rund 4 atm Gesamtdruck (1 atm Luft + 3 atm Wasser). Für die Tauchmedizin bedeutet das: Stickstoff löst sich unter Druck vermehrt im Blut und kann beim zu schnellen Auftauchen als Gasblasen ausfallen — die gefürchtete **Dekompressionskrankheit** (Caisson-Krankheit).

**Rechenbeispiel — Blutdruckunterschied Herz–Fuß:**

Wie groß ist der hydrostatische Druckunterschied zwischen Herzhöhe und den Füßen bei einer stehenden Person (Höhendifferenz h ≈ 1,3 m)?

Δp = ρ_Blut · g · h = 1060 kg/m³ · 9,81 m/s² · 1,3 m ≈ **13 520 Pa ≈ 101 mmHg**

Das ist ein gewaltiger Betrag: Im Stehen herrscht am Fuß ein um rund **100 mmHg höherer** Blutdruck als auf Herzhöhe. Umgekehrt ist der Druck im Kopf (ca. 0,4 m über dem Herzen) um etwa 30 mmHg niedriger. Dieser Gradient erklärt, warum langes Stehen zu Beinödemen führt und warum ein plötzlicher Lagewechsel (Aufstehen) Schwindel auslösen kann — die orthostatische Dysregulation.

> **Merke:** p = ρ·g·h — der hydrostatische Druck steigt linear mit der Tiefe. Pro 10 m Wassersäule ca. 1 atm, pro 1,3 m Blutsäule ca. 100 mmHg.

> 💡 **Prüfungstipp:** Klassische MedAT-Rechnung: „Druckunterschied Herz–Fuß?" → Δp = ρ·g·h = 1060 · 9,81 · 1,3 ≈ 13 500 Pa ≈ 101 mmHg. Merke die Faustformel: **~100 mmHg pro 1,3 m Blutsäule**.

---

## Hydrostatisches Paradoxon

Ein auf den ersten Blick verblüffendes Ergebnis: Der Bodendruck in einem mit Flüssigkeit gefüllten Gefäß hängt **ausschließlich** von der Füllhöhe h und der Dichte ρ ab — **nicht von der Gefäßform** und nicht vom Gesamtvolumen. Drei unterschiedlich geformte Gefäße (schmal-zylindrisch, bauchig, trichterförmig), die mit derselben Flüssigkeit auf dieselbe Höhe h gefüllt sind, zeigen exakt **denselben Bodendruck**: p = ρ·g·h.

Das erscheint paradox, weil die Gewichtskraft der Flüssigkeit in den drei Gefäßen unterschiedlich groß ist. Die physikalische Erklärung liegt in den Normalkräften auf die Gefäßwände: Bei schrägen oder sich verengenden Wänden übt die Flüssigkeit Druckkräfte senkrecht auf die Wand aus, die eine vertikale Komponente besitzen. Diese vertikalen Wandkräfte kompensieren exakt den Gewichtsunterschied. Das Paradoxon hat klinische Relevanz: Auch in Blutgefäßen mit unregelmäßiger Geometrie — etwa bei Aneurysmen — bestimmt die Flüssigkeitssäule über dem betrachteten Punkt den hydrostatischen Druck, nicht die lokale Gefäßform.

> **Merke:** Hydrostatisches Paradoxon: Der Bodendruck hängt nur von ρ, g und h ab — nicht von der Gefäßform oder dem Volumen!

> 💡 **Prüfungstipp:** Im MedAT taucht das Paradoxon gern als Verständnisfrage auf: „In welchem Gefäß ist der Bodendruck am größten?" — Die Antwort ist immer: **In allen gleich**, sofern Dichte und Füllhöhe identisch sind.

---

{{DIAGRAM:continuity-equation}}

## Pascalsches Prinzip

Blaise Pascal formulierte 1653 ein Grundgesetz, das die gesamte Hydraulik begründet: Ein auf eine **eingeschlossene, inkompressible Flüssigkeit** ausgeübter Druck pflanzt sich **gleichmäßig in alle Richtungen** fort und wirkt auf jede Flächeneinheit der Gefäßwand mit gleicher Stärke.

Die technisch wichtigste Anwendung ist die **hydraulische Presse**. An einem Kolben mit kleiner Fläche A₁ wird die Kraft F₁ aufgebracht. Da der Druck p = F/A in der gesamten Flüssigkeit gleich ist, gilt am großen Kolben mit Fläche A₂:

**F₂ = F₁ · (A₂ / A₁)**

Bei einem Flächenverhältnis A₂/A₁ = 10 wird die Kraft verzehnfacht. Der Energieerhaltungssatz bleibt dabei gewahrt: Der große Kolben bewegt sich nur ein Zehntel des Weges, denn die Arbeit W = F·s muss auf beiden Seiten gleich sein.

**Rechenbeispiel — Hydraulische Presse:**
Ein Automechaniker drückt mit F₁ = 200 N auf einen Kolben mit A₁ = 5 cm². Der Hebekolben hat A₂ = 500 cm².
F₂ = 200 N · (500/5) = **20 000 N = 20 kN** — genug, um ein Fahrzeug anzuheben.
Der kleine Kolben muss dafür aber 100-mal weiter gedrückt werden als sich der Hebekolben bewegt.

In der Medizin erklärt das Pascalsche Prinzip die Druckverteilung in flüssigkeitsgefüllten Körperhöhlen. Ein erhöhter **intraabdomineller Druck** (z. B. bei Aszites oder abdominellem Kompartmentsyndrom) wirkt gleichmäßig auf alle umliegenden Organe: Leber, Nieren und Darm werden komprimiert, das Zwerchfell wird nach kranial (kopfwärts) gedrängt, und die Lungenentfaltung wird eingeschränkt.

> **Merke:** Pascalsches Prinzip: Druck in einer eingeschlossenen Flüssigkeit breitet sich allseitig gleich aus. Hydraulische Presse: F₂ = F₁·(A₂/A₁), aber s₂ = s₁·(A₁/A₂).

---

## Manometer und Blutdruckmessung nach Riva-Rocci

Die praktische Messung von Drücken erfolgt mit **Manometern**. In der Medizin hat das **Quecksilber-Sphygmomanometer** (griech. sphygmós = Puls) nach Scipione **Riva-Rocci** (1896) historische Bedeutung und definiert bis heute die Einheit mmHg.

Das Messprinzip ist elegant: Eine aufblasbare Manschette wird am Oberarm — zwingend auf **Herzhöhe** — so weit aufgepumpt, dass die **Arteria brachialis** (Oberarmarterie) vollständig komprimiert wird und kein Blut mehr fließt. Beim langsamen Ablassen des Manschettendrucks öffnet sich das Gefäß schrittweise, und mit einem Stethoskop über der Ellenbeuge werden die **Korotkow-Geräusche** auskultiert (abgehört). Diese pulssynchronen Strömungsgeräusche entstehen durch turbulente Strömung im teilweise komprimierten Gefäß:

Der **systolische Wert** (oberer Wert) entspricht dem Manschettendruck, bei dem das erste Klopfgeräusch hörbar wird — das Blut presst sich gerade durch die Stenose. Der **diastolische Wert** (unterer Wert) wird beim Verschwinden der Geräusche abgelesen, wenn das Gefäß wieder frei durchströmt wird und die Strömung laminar ist.

**Warum muss auf Herzhöhe gemessen werden?** Der hydrostatische Druck der Blutsäule verfälscht jede Messung, die nicht auf Herzhöhe stattfindet. Liegt die Manschette nur 15 cm unter Herzhöhe, ergibt sich ein Messfehler von:

Δp = ρ·g·h = 1060 · 9,81 · 0,15 ≈ 1561 Pa ≈ **12 mmHg zu hoch**

Bei einem echten Blutdruck von 132/88 mmHg würde man 144/100 mmHg messen — und fälschlich eine behandlungsbedürftige **Hypertonie** (Grenzwert 140/90 mmHg) diagnostizieren. Als Faustformel gilt: Jeder Zentimeter Höhenabweichung verfälscht das Ergebnis um rund 0,8 mmHg.

> **Merke:** Blutdruckmessung immer auf Herzhöhe! Jeder Zentimeter Abweichung verfälscht das Ergebnis um ca. 0,8 mmHg (≈ ρ_Blut · g · 0,01 m / 133 Pa/mmHg).

> 💡 **Prüfungstipp:** „Manschette 20 cm zu tief — wie groß ist der Fehler?" → Δp = 1060 · 9,81 · 0,20 ≈ 2080 Pa ÷ 133 ≈ **15,6 mmHg zu hoch**. Immer ρ_Blut ≈ 1060 kg/m³ verwenden, nicht ρ_Wasser!`,

      lernziele: [
        "Den hydrostatischen Druck mit p = ρ·g·h berechnen können",
        "Das Hydrostatische Paradoxon erklären können",
        "Das Pascalsche Prinzip auf die hydraulische Presse anwenden können",
        "Die Blutdruckmessung nach Riva-Rocci und die Bedeutung der Herzhöhe erklären können",
      ],

      merksätze: [
        "Hydrostatischer Druck p = ρ·g·h — linear mit Tiefe, unabhängig von der Gefäßform",
        "Pascalsches Prinzip: Druck in eingeschlossener Flüssigkeit breitet sich allseitig gleich aus",
        "Hydraulische Presse: Kraftverstärkung F₂ = F₁·(A₂/A₁), aber Weg umgekehrt proportional",
        "Blutdruckmessung auf Herzhöhe: jeder cm Abweichung ≈ 0,8 mmHg Fehler",
        "1 mmHg ≈ 133 Pa; 1 atm = 760 mmHg; Blut-Dichte ρ ≈ 1060 kg/m³",
      ],

      klinischerBezug:
        "In der Klinik ist der hydrostatische Druck direkt relevant: Die Blutdruckmessung muss auf Herzhöhe erfolgen, da jeder Zentimeter Höhendifferenz das Ergebnis um ca. 0,8 mmHg verfälscht. Bei bettlägerigen Patienten muss die Manschettenposition angepasst werden. Im Stehen ist der venöse Druck in den Beinen deutlich erhöht (ca. 90 mmHg am Knöchel), was zu Ödemen und Varizen beiträgt. Bei Aszites (Flüssigkeitsansammlung im Bauchraum) wirkt der Druck nach dem Pascalschen Prinzip allseitig auf die Organe und kann das Zwerchfell hochdrücken — mit Einschränkung der Atmung.",

      altfrage: {
        question:
          "Welche Aussage zum hydrostatischen Druck ist richtig?\n\nA) Der hydrostatische Druck ist proportional zum Volumen der Flüssigkeit im Gefäß.\nB) Der Bodendruck in einem Gefäß hängt von der Form des Gefäßes ab.\nC) Der hydrostatische Druck in einer ruhenden Flüssigkeit steigt linear mit der Tiefe und ist unabhängig von der Gefäßform.\nD) Das Pascalsche Prinzip gilt nur für ideale Gase, nicht für Flüssigkeiten.\nE) Der hydrostatische Druck ist umgekehrt proportional zur Dichte der Flüssigkeit.",
        answer:
          "Richtig ist C. Der hydrostatische Druck berechnet sich nach p = ρ·g·h und hängt nur von der Dichte ρ, der Erdbeschleunigung g und der Tiefe h ab — nicht von der Gefäßform oder dem Gesamtvolumen (Hydrostatisches Paradoxon). A ist falsch, da das Volumen keine Rolle spielt. B ist falsch (Hydrostatisches Paradoxon). D ist falsch, das Pascalsche Prinzip gilt gerade für Flüssigkeiten. E ist falsch, der Druck ist direkt proportional (nicht umgekehrt proportional) zur Dichte.",
      },

      selfTest: [
        {
          question:
            "Ein Taucher befindet sich in 5 m Tiefe in einem Süßwassersee (ρ = 1000 kg/m³). Wie groß ist der hydrostatische Druck (Schweredruck) in dieser Tiefe? (g = 9,81 m/s²)",
          options: ["4905 Pa", "49 050 Pa", "50 000 Pa", "9810 Pa", "98 100 Pa"],
          correctIndex: 1,
          explanation:
            "p = ρ·g·h = 1000 kg/m³ · 9,81 m/s² · 5 m = 49 050 Pa ≈ 49 kPa. Das ist der reine Schweredruck (ohne Atmosphärendruck). Der Gesamtdruck in 5 m Tiefe wäre p_gesamt = p_atm + ρ·g·h = 101 325 Pa + 49 050 Pa ≈ 150 375 Pa ≈ 1,5 atm. Merke: Pro 10 m Wassertiefe steigt der Druck um ca. 1 atm (≈ 100 000 Pa).",
          hints: [
            "Verwende die Formel p = ρ·g·h — setze alle Werte in SI-Einheiten ein.",
            "1000 · 9,81 · 5 = ? Achte auf die Größenordnung!",
          ],
          difficulty: 1,
          tags: ["hydrostatik", "schweredruck", "druck"],
        },
        {
          question:
            "Drei unterschiedlich geformte Gefäße (zylindrisch, kegelförmig, bauchig) sind mit derselben Flüssigkeit auf dieselbe Höhe h gefüllt. Welche Aussage zum Bodendruck ist korrekt?",
          options: [
            "Das bauchige Gefäß hat den höchsten Bodendruck, weil es das größte Volumen enthält",
            "Das kegelförmige Gefäß hat den niedrigsten Bodendruck, weil es nach unten schmaler wird",
            "Alle drei Gefäße haben exakt denselben Bodendruck",
            "Der Bodendruck hängt vom Gesamtgewicht der Flüssigkeit ab",
            "Nur bei zylindrischen Gefäßen gilt p = ρ·g·h",
          ],
          correctIndex: 2,
          explanation:
            "Hydrostatisches Paradoxon: Der Bodendruck p = ρ·g·h hängt ausschließlich von der Dichte ρ, der Erdbeschleunigung g und der Füllhöhe h ab — nicht von der Gefäßform, dem Volumen oder dem Gesamtgewicht der Flüssigkeit. Bei nicht-zylindrischen Gefäßen kompensieren die Normalkräfte der Flüssigkeit auf die schrägen Wände den Gewichtsunterschied.",
          hints: [
            "Denke an das Hydrostatische Paradoxon — was zählt wirklich für den Bodendruck?",
            "p = ρ·g·h enthält keinen Term für die Gefäßform oder das Volumen!",
          ],
          difficulty: 1,
          tags: ["hydrostatisches-paradoxon", "bodendruck"],
        },
        {
          question:
            "Bei einer hydraulischen Presse hat der kleine Kolben eine Fläche von 2 cm² und der große Kolben 200 cm². Welche Kraft entsteht am großen Kolben, wenn auf den kleinen 50 N drücken?",
          options: ["500 N", "5000 N", "50 N", "0,5 N", "100 N"],
          correctIndex: 1,
          explanation:
            "Nach dem Pascalschen Prinzip: F₂ = F₁ · (A₂/A₁) = 50 N · (200 cm²/2 cm²) = 50 N · 100 = 5000 N. Die Kraft wird um den Faktor A₂/A₁ = 100 verstärkt. Allerdings bewegt sich der große Kolben nur 1/100 des Weges des kleinen — Energieerhaltung bleibt gewahrt: W = F₁·s₁ = F₂·s₂.",
          hints: [
            "Pascalsches Prinzip: Der Druck ist überall gleich → F₁/A₁ = F₂/A₂.",
            "Flächenverhältnis: 200/2 = 100 — die Kraft wird um diesen Faktor verstärkt.",
          ],
          difficulty: 2,
          tags: ["pascal", "hydraulische-presse", "kraft"],
        },
        {
          question:
            "Ein Arzt misst den Blutdruck am Oberarm, aber die Manschette liegt 20 cm unterhalb der Herzhöhe. Wie verfälscht dies den gemessenen Wert? (ρ_Blut = 1060 kg/m³)",
          options: [
            "Der Wert ist ca. 16 mmHg zu hoch",
            "Der Wert ist ca. 16 mmHg zu niedrig",
            "Der Wert ist ca. 8 mmHg zu hoch",
            "Die Position hat keinen Einfluss auf die Messung",
            "Der Wert ist ca. 30 mmHg zu hoch",
          ],
          correctIndex: 0,
          explanation:
            "Liegt die Manschette 20 cm (= 0,2 m) unterhalb der Herzhöhe, ist der hydrostatische Druck dort höher: Δp = ρ·g·h = 1060 · 9,81 · 0,2 = 2080 Pa ≈ 2080/133 ≈ 15,6 mmHg ≈ 16 mmHg zu hoch. Bei einem echten Blutdruck von 130/85 mmHg würde man ca. 146/101 mmHg messen — fälschlich Hypertonie diagnostizieren!",
          hints: [
            "Unterhalb des Herzens ist der Druck HÖHER (Gewicht der Blutsäule).",
            "Berechne Δp = ρ·g·h und rechne in mmHg um (÷ 133).",
          ],
          difficulty: 2,
          tags: ["blutdruck", "hydrostatik", "messfehler"],
        },
        {
          question: "Welche der folgenden Aussagen zum Pascalschen Prinzip ist FALSCH?",
          options: [
            "Der Druck breitet sich in einer eingeschlossenen Flüssigkeit allseitig gleich aus",
            "Die hydraulische Presse nutzt das Pascalsche Prinzip zur Kraftverstärkung",
            "Bei einer hydraulischen Presse wird sowohl die Kraft als auch die Energie verstärkt",
            "Das Prinzip gilt für inkompressible Flüssigkeiten",
            "Der Druck wirkt senkrecht auf jede Begrenzungsfläche",
          ],
          correctIndex: 2,
          explanation:
            "Die Aussage 'Kraft UND Energie werden verstärkt' ist falsch. Die hydraulische Presse verstärkt zwar die Kraft (F₂ = F₁·A₂/A₁), aber die Arbeit (Energie) bleibt gleich: W = F₁·s₁ = F₂·s₂. Der große Kolben bewegt sich entsprechend weniger weit. Der Energieerhaltungssatz wird nie verletzt — eine Maschine kann Kraft umwandeln, aber nie Energie erzeugen.",
          hints: [
            "Kann eine Maschine Energie aus dem Nichts erzeugen?",
            "Energieerhaltung: W = F·s — wenn F steigt, muss s sinken!",
          ],
          difficulty: 2,
          tags: ["pascal", "energieerhaltung", "hydraulische-presse"],
        },
      ],
    },

    // === UK 2: Auftrieb & Oberflächenspannung ===
    {
      id: "ph-fluid-02",
      title: "Auftrieb & Oberflächenspannung",
      stichworte: [
        "Archimedisches Prinzip",
        "Auftriebskraft",
        "Schwimmen",
        "Schweben",
        "Sinken",
        "Oberflächenspannung",
        "Kapillarität",
        "Surfactant",
        "Laplace-Gesetz",
        "Atelektase",
      ],
      content: `## Zwei Kräfte, die das Verhalten von Objekten in Fluiden bestimmen

Warum schwimmt ein tonnenschweres Stahlschiff, aber ein winziger Stein sinkt? Warum bilden Wassertropfen Kugeln, und warum kollabieren die kleinsten Lungenbläschen ohne einen speziellen Schutzfilm? Hinter beidem stecken zwei fundamentale Phänomene: **Auftrieb** (bestimmt, ob ein Objekt schwimmt oder sinkt) und **Oberflächenspannung** (bestimmt, wie sich Flüssigkeitsoberflächen verhalten). Beide sind für die Medizin unmittelbar relevant — vom Hydrotherapie-Bad bis zur Neugeborenen-Intensivstation.

---

{{DIAGRAM:continuity-equation}}

## Auftrieb — das Archimedische Prinzip

Die Grundidee ist verblüffend einfach: Ein Objekt in einer Flüssigkeit fühlt sich leichter an, weil das Fluid mit einer Kraft zurückdrückt, die genau dem Gewicht des verdrängten Fluids entspricht. Diese nach oben gerichtete Kraft heißt **Auftriebskraft** F_A.

**F_A = ρ_Fluid · g · V_verdrängt**

- **ρ_Fluid** = Dichte des umgebenden Fluids (Wasser: 1000 kg/m³, Blut: 1060 kg/m³)
- **g** = Erdbeschleunigung (9,81 m/s²)
- **V_verdrängt** = Volumen des eingetauchten Körperteils

Die physikalische Ursache: Der hydrostatische Druck p = ρ·g·h nimmt mit der Tiefe zu. Die Unterseite eines eingetauchten Objekts liegt tiefer als die Oberseite — dort herrscht also ein höherer Druck. Die resultierende Druckkraft nach oben überwiegt die nach unten. Diese Nettokraft ist die Auftriebskraft.

> **Merke:** Auftriebskraft F_A = ρ_Fluid · g · V_verdrängt — sie hängt nur von der Fluiddichte und dem verdrängten Volumen ab, NICHT von der Dichte oder Masse des eingetauchten Körpers.

**Rechenbeispiel — Schwimmt ein Eiswürfel in Wasser?**
- ρ_Eis = 917 kg/m³, ρ_Wasser = 1000 kg/m³
- Da ρ_Eis < ρ_Wasser, schwimmt er. Im Gleichgewicht (F_A = F_G) ist der eingetauchte Anteil: V_ein/V_ges = ρ_Eis/ρ_Wasser = 917/1000 = 0,917
- Ergebnis: **91,7 % unter Wasser**, nur 8,3 % ragen heraus
- Eis ist also weniger dicht als flüssiges Wasser — eine Anomalie, die dafür sorgt, dass Seen von oben zufrieren und Lebewesen darunter überleben

---

## Schwimmen, Schweben, Sinken — die Dichte entscheidet

Ob ein Körper schwimmt, schwebt oder sinkt, hängt ausschließlich vom Vergleich der **mittleren Körperdichte** mit der **Fluiddichte** ab:

| Bedingung | Verhalten | Beispiel |
|-----------|-----------|----------|
| ρ_Körper < ρ_Fluid | **Schwimmen** — ragt teilweise heraus | Holz (550 kg/m³) auf Wasser, Eisberg |
| ρ_Körper = ρ_Fluid | **Schweben** — in jeder Tiefe stabil | U-Boot (reguliert Ballasttanks), Fisch (Schwimmblase) |
| ρ_Körper > ρ_Fluid | **Sinken** — fällt zum Boden | Kieselstein (2600 kg/m³), Eisennagel |

**Der menschliche Körper:** ρ_Mensch ≈ 1020–1080 kg/m³ (abhängig von Fett-/Muskelanteil). In Süßwasser (1000 kg/m³) sinken die meisten Menschen leicht; im Toten Meer (ρ ≈ 1240 kg/m³) schwimmt jeder mühelos — die extrem hohe Salzdichte erzeugt genug Auftrieb.

**Warum schwimmt ein Stahlschiff?** Stahl allein hat ρ ≈ 7800 kg/m³ und würde sofort sinken. Aber ein Schiff ist hohl — die **mittlere Dichte** (Stahl + eingeschlossene Luft) beträgt nur etwa 200–300 kg/m³, also weit weniger als Wasser. Der Rumpf verdrängt genug Wasser, damit F_A = F_G. Wird der Rumpf leck und flutet, steigt die mittlere Dichte über 1000 kg/m³ → das Schiff sinkt.

> **Merke:** Schwimmen (ρ_K < ρ_F), Schweben (ρ_K = ρ_F), Sinken (ρ_K > ρ_F). Entscheidend ist die **mittlere** Dichte, nicht die Masse! „Schwere Objekte sinken" ist falsch — ein 100 000-Tonnen-Schiff schwimmt, ein 5-Gramm-Nagel sinkt.

> 💡 **Prüfungstipp:** Typische MedAT-Falle: „Ein Objekt ist schwerer als Wasser — sinkt es?" Antwort: Nicht unbedingt. Es kommt auf die Dichte an, nicht auf das Gewicht. Ein Supertanker wiegt Hunderttausende Tonnen und schwimmt.

---

## Klinische Relevanz des Auftriebs

- **Hydrotherapie:** Im Wasser verliert ein Patient scheinbar bis zu 90 % seines Körpergewichts (Auftrieb). Gelenke und Wirbelsäule werden entlastet → ideale Bedingung für Rehabilitation nach Frakturen, Gelenkersatz oder bei rheumatischen Erkrankungen.
- **Tauchmedizin:** Ein Taucher muss seinen Auftrieb aktiv regulieren (Bleigurt, Tarierweste). Zu viel Auftrieb → unkontrolliertes Aufsteigen → Dekompressionskrankheit.
- **Infusionslösungen:** Bei Pleurapunktion oder Aszitesdrainage: Die Dichte der abgeleiteten Flüssigkeit gibt diagnostische Hinweise (Transsudat vs. Exsudat).

---

## Oberflächenspannung — warum Tropfen rund sind

An der Grenzfläche zwischen Flüssigkeit und Luft herrschen besondere Verhältnisse. Moleküle im Inneren einer Flüssigkeit werden von allen Seiten gleich stark von ihren Nachbarn angezogen (**Kohäsionskräfte**, Anziehungskräfte zwischen gleichartigen Molekülen). An der **Oberfläche** fehlen die Nachbarn nach oben — es entsteht eine resultierende Kraft ins Innere. Die Oberfläche verhält sich wie eine gespannte elastische Membran, die ihre Fläche minimiert. Deshalb nehmen freie Tropfen Kugelform an — die Kugel hat die kleinste Oberfläche bei gegebenem Volumen.

Die **Oberflächenspannung** σ (sigma) quantifiziert diese Kraft:

**σ = F / l** (Einheit: N/m = J/m²)

| Substanz | σ (bei 20 °C) |
|----------|--------------|
| Wasser | 0,073 N/m |
| Blutplasma | 0,050 N/m |
| Surfactant-Lösung (Alveolen) | 0,025 N/m |
| Ethanol | 0,022 N/m |

Seife und Spülmittel (Tenside, oberflächenaktive Substanzen) senken die Oberflächenspannung von Wasser drastisch — deshalb perlt Spülwasser nicht ab, sondern benetzt Geschirr flächig.

> **Merke:** Oberflächenspannung σ = F/l entsteht durch unausgeglichene Kohäsionskräfte an der Oberfläche. Die Oberfläche minimiert ihre Fläche → Tropfen werden kugelförmig.

---

## Kapillarität — wenn Flüssigkeiten klettern

In engen Röhren (Kapillaren) steigt oder sinkt eine Flüssigkeit entgegen der Schwerkraft. Ob sie steigt oder sinkt, hängt vom Verhältnis zweier Kräfte ab:

- **Adhäsionskräfte** (Anziehung Fluid ↔ Wand): Ziehen die Flüssigkeit an der Wand hoch
- **Kohäsionskräfte** (Anziehung Fluid ↔ Fluid): Halten die Flüssigkeit zusammen

**Adhäsion > Kohäsion** → konkaver Meniskus (Rand höher als Mitte) → Flüssigkeit **steigt**
Beispiel: Wasser in einer Glaskapillare. Die Wassermoleküle „kleben" an der hydrophilen Glaswand und ziehen den Wasserspiegel hoch.

**Kohäsion > Adhäsion** → konvexer Meniskus (Mitte höher als Rand) → Flüssigkeit **sinkt**
Beispiel: Quecksilber in Glas. Quecksilberatome ziehen sich untereinander stärker an als sie vom Glas angezogen werden.

Die Steighöhe berechnet sich aus: **h = 2σ · cos θ / (ρ · g · r)** — je enger die Kapillare (kleiner r), desto höher steigt die Flüssigkeit.

**Klinisch — Kapillare Blutabnahme:** Bei der Blutentnahme aus der Fingerbeere (Lanzettstich) wird ein hauchdünnes Glasröhrchen an den Bluttropfen gehalten. Durch Kapillarkräfte steigt das Blut automatisch in das Röhrchen — ohne Ansaugen. Dies funktioniert, weil Blut Glas gut benetzt (Adhäsion > Kohäsion).

> **Merke:** Kapillarität: Adhäsion > Kohäsion → konkaver Meniskus → Flüssigkeit steigt (Wasser in Glas). Kohäsion > Adhäsion → konvexer Meniskus → Flüssigkeit sinkt (Quecksilber in Glas). Je enger das Rohr, desto stärker der Effekt.

---

{{DIAGRAM:laminar-flow-profile}}

## Laplace-Gesetz — warum kleine Blasen gefährlicher sind

Das Laplace-Gesetz verknüpft Oberflächenspannung mit dem Innendruck einer Blase. Für eine kugelförmige Blase mit einer Wand (z. B. eine Alveole):

**Δp = 2σ / r**

- **Δp** = Druckdifferenz zwischen Innen- und Außenseite
- **σ** = Oberflächenspannung der Grenzfläche
- **r** = Radius der Blase

Die entscheidende Konsequenz steckt im Bruch: **Je kleiner der Radius, desto größer der Innendruck.** Eine Blase mit halbem Radius braucht den doppelten Innendruck, um nicht zu kollabieren.

**Rechenbeispiel — Zwei Alveolen:**
- Große Alveole: r₁ = 0,15 mm → Δp₁ = 2σ / 0,15
- Kleine Alveole: r₂ = 0,05 mm → Δp₂ = 2σ / 0,05
- Verhältnis: Δp₂ / Δp₁ = 0,15 / 0,05 = **3** → Die kleine Alveole hat den **dreifachen Innendruck**

Ohne Gegenmaßnahme würde Luft aus der kleinen Alveole (hoher Druck) in die große Alveole (niedriger Druck) strömen → die kleine **kollabiert** (= **Atelektase**, Zusammenfallen von Lungengewebe), die große bläht sich auf. Die Lunge wäre funktionsunfähig.

> **Merke:** Laplace-Gesetz: Δp = 2σ/r — kleinerer Radius → höherer Innendruck. Ohne Surfactant würden kleine Alveolen kollabieren und große sich überblähen.

---

## Surfactant — der Lebensretter in der Lunge

Die Lösung des Laplace-Problems liefert **Surfactant** (Surface Active Agent), ein Gemisch aus Phospholipiden (v. a. Dipalmitoylphosphatidylcholin, DPPC) und spezifischen Proteinen (SP-A, SP-B, SP-C, SP-D). Produziert wird es von **Typ-II-Pneumozyten** (Alveolarepithelzellen Typ II).

Surfactant wirkt über zwei Mechanismen:

1. **Senkung der Oberflächenspannung:** σ sinkt von ca. 0,070 N/m (reines Wasser) auf ca. 0,025 N/m → der Innendruck aller Alveolen wird reduziert → weniger Atemarbeit nötig

2. **Radiusabhängige Wirkung:** In kleinen Alveolen sind die Surfactant-Moleküle auf weniger Fläche dichter gepackt → σ wird dort **stärker** gesenkt als in großen Alveolen → Δp wird angeglichen → **Druckausgleich** zwischen verschieden großen Alveolen → kein Kollaps

**Klinisch — Atemnotsyndrom des Neugeborenen (IRDS):**
- Surfactant-Produktion beginnt ab ca. 24. SSW (Schwangerschaftswoche), reicht ab ca. 35. SSW
- Frühgeborene vor der 35. SSW haben häufig **Surfactant-Mangel** → kleine Alveolen kollabieren → massiv eingeschränkter Gasaustausch → **IRDS** (Infant Respiratory Distress Syndrome, Atemnotsyndrom des Neugeborenen)
- **Therapie:** Surfactant-Substitution direkt über den Tubus (Beatmungsschlauch) + CPAP-Beatmung (Continuous Positive Airway Pressure) → hält Alveolen offen
- **Prävention:** Gabe von Glukokortikoiden (Betamethason) an die Mutter bei drohender Frühgeburt → beschleunigt die fetale Surfactant-Produktion

Auch bei Erwachsenen kann Surfactant-Mangel auftreten: Bei schwerem **ARDS** (Acute Respiratory Distress Syndrome, akutes Lungenversagen) — z. B. nach Pneumonie, Aspiration oder Sepsis — wird Surfactant geschädigt → alveolärer Kollaps → lebensbedrohliche Hypoxie (Sauerstoffmangel).

> **Merke:** Surfactant = Phospholipid-Protein-Gemisch aus Typ-II-Pneumozyten. Senkt σ radiusabhängig → stabilisiert kleine Alveolen → verhindert Atelektase. Frühgeborene < 35. SSW → Surfactant-Mangel → IRDS. Therapie: Surfactant-Gabe + CPAP.

---

## Häufige Missverständnisse und Prüfungsfallen

**„Schwere Objekte sinken"** — Falsch. Ein Flugzeugträger (100 000 t) schwimmt, eine Büroklammer (1 g) sinkt. Entscheidend ist die **Dichte**, nicht die Masse. Ein Stahlschiff schwimmt, weil seine mittlere Dichte (Stahl + Luft) kleiner als ρ_Wasser ist.

**„Die Auftriebskraft hängt von der Dichte des Körpers ab"** — Falsch. F_A = ρ_Fluid · g · V_verdrängt enthält nur die Fluiddichte und das verdrängte Volumen. Ein Bleiklotz und ein gleich großer Holzklotz, vollständig eingetaucht, erfahren exakt dieselbe Auftriebskraft.

**„Größere Alveolen kollabieren eher"** — Falsch, genau umgekehrt. Laplace: Δp = 2σ/r → die **kleinen** Alveolen haben den höheren Innendruck und neigen zum Kollaps, nicht die großen.

**„Oberflächenspannung ist eine Kraft"** — Unpräzise. σ ist eine Kraft **pro Länge** (N/m), nicht eine Kraft (N). Sie beschreibt die Energie, die nötig ist, um die Oberfläche um eine Flächeneinheit zu vergrößern (J/m² = N/m).

> 💡 **Prüfungstipp:** Bei Auftriebsaufgaben immer fragen: Was ist ρ_Körper vs. ρ_Fluid? Bei Laplace-Aufgaben: Welcher Radius ist kleiner → dort ist Δp größer. Surfactant = Ausgleich zwischen groß und klein.`,

      lernziele: [
        "Das Archimedische Prinzip mathematisch anwenden und Auftriebskräfte berechnen können",
        "Bedingungen für Schwimmen, Schweben und Sinken ableiten können",
        "Oberflächenspannung und Kapillarität erklären können",
        "Das Laplace-Gesetz auf Alveolen anwenden und die Rolle des Surfactant begründen können",
      ],

      merksätze: [
        "Archimedisches Prinzip: F_A = ρ_Fluid · g · V_verdrängt — Auftrieb = Gewichtskraft des verdrängten Fluids",
        "Schwimmen (ρ_K < ρ_F), Schweben (ρ_K = ρ_F), Sinken (ρ_K > ρ_F) — die mittlere Dichte entscheidet",
        "Oberflächenspannung σ = F/l entsteht durch unausgeglichene Kohäsionskräfte an der Oberfläche",
        "Laplace-Gesetz: Δp = 2σ/r — kleiner Radius → höherer Innendruck → Kollapsrisiko",
        "Surfactant senkt σ radiusabhängig → stabilisiert kleine Alveolen → verhindert Atelektase bei Frühgeborenen",
      ],

      klinischerBezug:
        "Das Archimedische Prinzip erklärt die Hydrotherapie: Im Wasser ist die Gewichtsbelastung geringer (Auftrieb), was Rehabilitation erleichtert. Das Laplace-Gesetz ist klinisch hochrelevant für die Lungenfunktion: Surfactant-Mangel bei Frühgeborenen (< 35. SSW) führt zum Infant Respiratory Distress Syndrome (IRDS) mit Atelektase. Therapie: Surfactant-Substitution über Tubus und CPAP-Beatmung. Auch bei Erwachsenen kann Surfactant-Mangel (z. B. bei ARDS nach Pneumonie) zum Alveolarkollaps führen. Die Oberflächenspannung spielt zudem bei der Tränenfilm-Stabilität und der Benetzung von Kontaktlinsen eine Rolle.",

      altfrage: {
        question:
          "Ein Holzblock (ρ = 600 kg/m³, V = 0,1 m³) schwimmt in Wasser (ρ = 1000 kg/m³). Welcher Anteil des Blocks ragt über die Wasseroberfläche?\n\nA) 60 % des Volumens ragen heraus.\nB) 40 % des Volumens ragen heraus.\nC) 10 % des Volumens ragen heraus.\nD) Der Block sinkt vollständig unter.\nE) 50 % des Volumens ragen heraus.",
        answer:
          "Richtig ist B. Beim Schwimmen gilt: Die Auftriebskraft gleicht die Gewichtskraft aus (F_A = F_G). Das eingetauchte Volumen beträgt V_ein = V · (ρ_Körper / ρ_Fluid) = 0,1 m³ · (600/1000) = 0,06 m³ = 60 % des Gesamtvolumens. Somit ragen 40 % über die Oberfläche. A ist falsch (verwechselt eingetauchten und herausragenden Anteil). C und E sind rechnerisch falsch. D ist falsch, da ρ_Holz < ρ_Wasser — der Körper schwimmt.",
      },

      selfTest: [
        {
          question:
            "Ein Körper mit einem Volumen von 0,5 m³ ist vollständig in Wasser (ρ = 1000 kg/m³) eingetaucht. Wie groß ist die Auftriebskraft? (g = 9,81 m/s²)",
          options: ["500 N", "4905 N", "9810 N", "490,5 N", "49 050 N"],
          correctIndex: 1,
          explanation:
            "F_A = ρ_Fluid · g · V_verdrängt = 1000 · 9,81 · 0,5 = 4905 N. Die Auftriebskraft entspricht der Gewichtskraft von 0,5 m³ Wasser (= 500 kg). Die Dichte des eingetauchten Körpers spielt keine Rolle — nur Fluiddichte und verdrängtes Volumen zählen.",
          hints: [
            "Archimedisches Prinzip: F_A = ρ_Fluid · g · V_verdrängt — setze die Werte ein!",
            "1000 · 9,81 · 0,5 = ? Einheiten: kg/m³ · m/s² · m³ = N.",
          ],
          difficulty: 1,
          tags: ["archimedes", "auftrieb", "rechenfrage"],
        },
        {
          question:
            "Ein Gegenstand (ρ = 800 kg/m³) wird in Salzwasser (ρ = 1025 kg/m³) gelegt. Was passiert?",
          options: [
            "Er sinkt auf den Boden",
            "Er schwebt vollständig untergetaucht in beliebiger Tiefe",
            "Er schwimmt — ein Teil ragt aus dem Wasser",
            "Er löst sich im Salzwasser auf",
            "Die Auftriebskraft ist null",
          ],
          correctIndex: 2,
          explanation:
            "Da ρ_Körper (800 kg/m³) < ρ_Fluid (1025 kg/m³), schwimmt der Körper. Er taucht ein, bis F_A = F_G: V_ein/V_ges = ρ_Körper/ρ_Fluid = 800/1025 ≈ 0,78 → ca. 78 % unter Wasser, 22 % heraus.",
          hints: [
            "Vergleiche: Ist ρ_Körper kleiner, gleich oder größer als ρ_Fluid?",
            "ρ_Körper < ρ_Fluid → der Körper schwimmt und taucht nur teilweise ein.",
          ],
          difficulty: 1,
          tags: ["schwimmen", "dichte", "auftrieb"],
        },
        {
          question: "Welche Aussage zur Oberflächenspannung ist FALSCH?",
          options: [
            "Sie entsteht durch unausgeglichene Kohäsionskräfte an der Flüssigkeitsoberfläche",
            "Ihre Einheit ist N/m, was äquivalent zu J/m² ist",
            "Tenside (z. B. Spülmittel) erhöhen die Oberflächenspannung von Wasser",
            "Freie Tropfen nehmen Kugelform an, weil die Kugel die kleinste Oberfläche hat",
            "Surfactant in den Alveolen senkt die Oberflächenspannung",
          ],
          correctIndex: 2,
          explanation:
            "Tenside SENKEN die Oberflächenspannung, sie erhöhen sie nicht. Tenside (wie Spülmittel oder Surfactant) lagern sich an der Grenzfläche an und verringern die Kohäsionskräfte zwischen den Wassermolekülen an der Oberfläche. Alle anderen Aussagen sind korrekt.",
          hints: [
            "Tenside = oberflächenaktive Substanzen. Was bedeutet 'aktiv' hier — verstärken oder schwächen?",
            "Denke an Spülmittel: Wasser perlt nicht mehr ab, sondern benetzt flächig — die Oberflächenspannung ist geringer.",
          ],
          difficulty: 1,
          tags: ["oberflaechenspannung", "tenside", "falschaussage"],
        },
        {
          question:
            "Zwei Alveolen (klein: r₁ = 0,05 mm, groß: r₂ = 0,15 mm) haben dieselbe Oberflächenspannung σ. Wie verhält sich der Laplace-Druck Δp₁ der kleinen zur großen Alveole (Δp₂)?",
          options: [
            "Δp₁ = Δp₂ (gleich groß)",
            "Δp₁ = 3 · Δp₂ (dreifach)",
            "Δp₁ = 9 · Δp₂ (neunfach)",
            "Δp₁ = ⅓ · Δp₂ (ein Drittel)",
            "Δp₁ = 2 · Δp₂ (doppelt)",
          ],
          correctIndex: 1,
          explanation:
            "Laplace: Δp = 2σ/r. Verhältnis Δp₁/Δp₂ = r₂/r₁ = 0,15/0,05 = 3. Der Innendruck der kleinen Alveole ist dreimal so groß. Ohne Surfactant würde Luft von der kleinen in die große Alveole strömen → Atelektase.",
          hints: [
            "Δp ist umgekehrt proportional zu r. Dreimal kleinerer Radius → dreimal höherer Druck.",
            "Bilde das Verhältnis: Δp₁/Δp₂ = (2σ/r₁) / (2σ/r₂) = r₂/r₁.",
          ],
          difficulty: 2,
          tags: ["laplace", "alveolen", "rechenfrage"],
        },
        {
          question:
            "Ein Frühgeborenes (30. SSW) zeigt Atemnot mit zunehmender Zyanose. Die Diagnose lautet IRDS. Welche pathophysiologische Ursache liegt zugrunde?",
          options: [
            "Überschuss an Surfactant führt zu Überblähung der Alveolen",
            "Surfactant-Mangel → hohe Oberflächenspannung → Kollaps kleiner Alveolen (Atelektase)",
            "Erhöhte Viskosität des Blutes verhindert den Gasaustausch",
            "Verengung der Bronchien durch allergische Reaktion",
            "Fehlbildung der Alveolarsepten mit Shunt-Bildung",
          ],
          correctIndex: 1,
          explanation:
            "Vor der 35. SSW produzieren Typ-II-Pneumozyten nicht genügend Surfactant. Ohne Surfactant bleibt σ hoch → nach dem Laplace-Gesetz (Δp = 2σ/r) kollabieren bevorzugt kleine Alveolen → Atelektase → massiv eingeschränkter Gasaustausch → IRDS. Therapie: Surfactant-Substitution + CPAP.",
          hints: [
            "Surfactant-Produktion reicht erst ab ca. 35. SSW — was fehlt bei 30. SSW?",
            "Laplace-Gesetz: Ohne Surfactant → hohe σ → hoher Druck in kleinen Alveolen → Kollaps.",
          ],
          difficulty: 2,
          tags: ["surfactant", "irds", "klinisch"],
        },
        {
          question:
            "Ein Stahlschiff (Masse 50 000 t) schwimmt im Ozean, ein Stahlnagel (Masse 5 g) sinkt. Welche Begründung ist physikalisch korrekt?",
          options: [
            "Das Schiff hat eine größere Oberfläche und wird daher vom Wasser getragen",
            "Die Auftriebskraft ist bei größeren Objekten grundsätzlich stärker als die Gewichtskraft",
            "Die mittlere Dichte des Schiffs (Stahl + Luft) ist kleiner als ρ_Wasser, die des Nagels größer",
            "Der Ozean hat eine höhere Oberflächenspannung als Süßwasser und trägt schwerere Objekte",
            "Das Schiff sinkt tatsächlich auch — nur sehr langsam aufgrund seiner Größe",
          ],
          correctIndex: 2,
          explanation:
            "Schwimmen vs. Sinken hängt ausschließlich von der mittleren Dichte ab. Das Schiff ist hohl: ρ_mittel (Stahl + Luft) ≈ 200–300 kg/m³ < ρ_Wasser (1025 kg/m³) → es schwimmt. Der massive Stahlnagel hat ρ ≈ 7800 kg/m³ > ρ_Wasser → er sinkt. Masse und Größe allein sind irrelevant.",
          hints: [
            "Erinnere dich: Nicht die Masse entscheidet, sondern die Dichte!",
            "Ein Schiff ist hohl — welche mittlere Dichte ergibt sich aus Stahl + eingeschlossener Luft?",
          ],
          difficulty: 3,
          tags: ["schwimmen", "sinken", "dichte", "missverstaendnis"],
        },
      ],
    },

    // === UK 3: Strömende Fluide ===
    {
      id: "ph-fluid-03",
      title: "Strömende Fluide: Kontinuität & Bernoulli",
      stichworte: [
        "Kontinuitätsgleichung",
        "Bernoulli-Gleichung",
        "Venturi-Effekt",
        "laminare Strömung",
        "turbulente Strömung",
        "Reynolds-Zahl",
        "Hagen-Poiseuille",
        "Stenose",
        "Aneurysma",
        "Strömungsgeräusche",
        "Volumenstrom",
        "Strömungswiderstand",
        "Infusionsschlauch",
        "Arteriosklerose",
        "Herzgeräusche",
      ],
      content: `Warum beschleunigt Blut an einer Stenose, und weshalb bilden sich Thromben in Aneurysmen? Die Antworten liefern vier Gleichungen, die gemeinsam das Strömungsverhalten in Gefäßen und Schläuchen beschreiben.

## Ideale Fluide und Volumenstrom

Blut fließt, Infusionen tropfen, Kontrastmittel wird injiziert — die Physik strömender Fluide begegnet Medizinerinnen und Medizinern täglich. Um diese Phänomene quantitativ zu beschreiben, startet man mit einem vereinfachten Modell: dem **idealen Fluid**. Es ist inkompressibel (konstante Dichte ρ), reibungsfrei (keine innere Reibung/Viskosität) und die Strömung ist stationär (zeitlich unveränderlich). Reale Fluide — insbesondere Blut — weichen von diesem Ideal ab, doch die grundlegenden Gesetze liefern erstaunlich gute Näherungen.

Der **Volumenstrom** (auch Durchflussrate) Q beschreibt, welches Fluidvolumen pro Zeiteinheit durch einen Querschnitt strömt:

**Q = A · v** (Einheit: m³/s)

Dabei ist A die Querschnittsfläche des Rohres (oder Gefäßes) und v die mittlere Strömungsgeschwindigkeit. In der Klinik begegnet man dem Volumenstrom z. B. als Herzzeitvolumen (HZV ≈ 5 L/min ≈ 8,3 · 10⁻⁵ m³/s) oder als Infusionsrate (ml/h).

> **Merke:** Volumenstrom Q = A · v (Einheit: m³/s). Ideales Fluid: inkompressibel, reibungsfrei, stationär. Das HZV (ca. 5 L/min) ist der Volumenstrom des Herzens.

---

## Kontinuitätsgleichung

Was links in ein Rohr hineinfließt, muss rechts herauskommen — Masse geht nicht verloren. Wird das Rohr enger, muss das Fluid schneller strömen, damit derselbe Volumenstrom erhalten bleibt. Diese Massenerhaltung für inkompressible Fluide heißt **Kontinuitätsgleichung**:

**A₁ · v₁ = A₂ · v₂ = const**

{{DIAGRAM:continuity-equation}}

**Konsequenz:** Verengt sich ein Rohr (A₂ < A₁), nimmt die Strömungsgeschwindigkeit **zu** (v₂ > v₁). Erweitert sich das Rohr, wird die Strömung langsamer.

> **Merke:** Kontinuitätsgleichung: A₁·v₁ = A₂·v₂. Engere Stelle → höhere Geschwindigkeit. Weitere Stelle → niedrigere Geschwindigkeit. Gilt für jedes inkompressible Fluid.

**Rechenbeispiel — Aortenstenose:**
Die Aorta hat einen Querschnitt A₁ ≈ 4,5 cm² und eine mittlere Blutgeschwindigkeit v₁ ≈ 0,3 m/s. Bei einer Stenose verengt sich der Querschnitt auf A₂ ≈ 1,5 cm².
v₂ = v₁ · (A₁/A₂) = 0,3 · (4,5/1,5) = 0,3 · 3 = **0,9 m/s**

Die Geschwindigkeit verdreifacht sich! Bei hochgradiger Stenose (A₂ ≈ 0,5 cm²) erreicht v₂ = 0,3 · 9 = **2,7 m/s** — so schnell, dass die Strömung turbulent wird und **Stenosegeräusche** entstehen (mit dem Stethoskop auskultierbar). Prüfungstipp: Die Duplexsonografie nutzt genau diese Geschwindigkeitserhöhung, um den Stenosegrad zu quantifizieren.

**Klinisch — Stenose vs. Aneurysma (Kontinuitätsgleichung):**
Die Kontinuitätsgleichung erklärt zwei gegenläufige Pathologien auf einen Schlag:
- **Stenose** (z. B. Karotisstenose, Aortenklappenstenose): A↓ → v↑. Je enger das Gefäß, desto schneller schießt das Blut hindurch. Die erhöhte Geschwindigkeit erzeugt Scherkräfte auf das Endothel und begünstigt Thrombusablösung.
- **Aneurysma** (z. B. Bauchaortenaneurysma): A↑ → v↓. Die Strömung verlangsamt sich in der Aussackung, was Wirbelbildung und Thrombusformation begünstigt. Wandständige Thromben (murale Thromben) sind eine typische Komplikation des Aneurysmas.

> **Merke:** Stenose → v↑ → Endothelschäden, Strömungsgeräusche. Aneurysma → v↓ → Stase, Thrombenbildung. Beide Pathologien folgen direkt aus A₁·v₁ = A₂·v₂.

**Klinisch — Gesamtquerschnitt des Kapillarbetts:**
Die Aorta (A ≈ 4,5 cm²) verzweigt sich in Milliarden Kapillaren mit einem Gesamtquerschnitt von A ≈ 4500 cm². Daraus folgt:
v_Kapillare = v_Aorta · (A_Aorta / A_Kapillaren) = 0,3 · (4,5/4500) = **0,0003 m/s ≈ 0,3 mm/s**

Diese extrem langsame Strömung ist kein Defekt, sondern biologisch essentiell: Nur bei so geringer Geschwindigkeit bleibt genug Kontaktzeit für den **Stoffaustausch** (O₂, CO₂, Glukose, Harnstoff) zwischen Blut und Gewebe.

> **Merke:** Kapillarbett: Gesamtquerschnitt ca. 1000× größer als Aorta → v sinkt auf 1/1000 (≈ 0,3 mm/s) → optimaler Stoffaustausch. Die Einzelkapillare ist zwar eng, aber der *Gesamt*querschnitt aller Kapillaren ist riesig.

---

## Bernoulli-Gleichung

Die Bernoulli-Gleichung (Energieerhaltung der Strömungslehre) verknüpft Druck, Geschwindigkeit und Höhe entlang einer Stromlinie. Wenn an einer Stelle die Geschwindigkeit steigt, muss der Druck sinken — genau wie beim Gartenschlauch, wenn man den Daumen auf die Öffnung drückt.

**p + ½·ρ·v² + ρ·g·h = const**

Die drei Terme repräsentieren verschiedene Energieformen pro Volumen:

| Term | Name | Bedeutung |
|------|------|-----------|
| p | Statischer Druck | "Normaler" Druck, messbar mit Manometer |
| ½·ρ·v² | Dynamischer Druck (Staudruck) | Kinetische Energie pro Volumen |
| ρ·g·h | Hydrostatischer Druck | Potentielle Energie pro Volumen (Höheneinfluss) |

**Kernaussage:** Wo v zunimmt, sinkt p — und umgekehrt! Das gilt streng nur für ideale Fluide auf einer Stromlinie.

> **Merke:** Bernoulli = Energieerhaltung für Fluide: p + ½ρv² + ρgh = const. Höhere Geschwindigkeit → niedrigerer statischer Druck. Der Gesamtdruck (statisch + dynamisch + hydrostatisch) bleibt konstant.

**Venturi-Effekt und medizinische Anwendungen:**
Fließt ein Fluid durch eine Verengung (Venturi-Rohr), nimmt v zu (Kontinuität) und der statische Druck p sinkt (Bernoulli). Dieser lokale Druckabfall kann genutzt werden, um ein zweites Fluid anzusaugen — das ist der **Venturi-Effekt**. Je stärker die Verengung, desto größer der Druckabfall und desto stärker die Ansaugwirkung.

Das Prinzip findet breite Anwendung in der klinischen Medizin:

- **Wasserstrahlpumpe:** Unterdruck durch schnelle Wasserströmung saugt Luft/Gas an — Prinzip wird in Laborabsaugungen genutzt
- **Zerstäuber (Vernebler):** Druckluft oder Sauerstoff strömt mit hoher Geschwindigkeit durch eine Düse → lokaler Unterdruck saugt Medikamentenlösung aus dem Reservoir an → Flüssigkeit wird in feine Tröpfchen (Aerosol, 1–5 µm) zerstäubt → Inhalationstherapie bei Asthma, COPD, Mukoviszidose. Die Tröpfchengröße bestimmt die Depositionstiefe: <3 µm erreichen die Alveolen, >5 µm lagern sich im Pharynx ab.
- **Venturi-Maske (O₂-Therapie):** Reiner Sauerstoff strömt durch eine enge, farbcodierte Düse → Umgebungsluft wird durch seitliche Öffnungen angesaugt und beigemischt → präzise einstellbare O₂-Konzentration (24–60 %). Der Vorteil gegenüber einer einfachen Nasenbrille: Die FiO₂ (inspiratorische O₂-Fraktion) ist unabhängig vom Atemminutenvolumen des Patienten konstant. Verschiedene Düsenfarben kodieren verschiedene FiO₂-Werte (z. B. blau = 24 %, weiß = 28 %, gelb = 35 %). Prüfungstipp: Die Venturi-Maske ist das Standardbeispiel für den Venturi-Effekt im MedAT.

> **Merke:** Venturi-Effekt: Verengung → v↑ → p↓ → Ansaugwirkung. Klinische Anwendungen: Vernebler (Aerosoltherapie, Tröpfchengröße bestimmt Depositionsort), Venturi-Maske (konstante FiO₂ unabhängig vom Atemminutenvolumen), Wasserstrahlpumpe.

**Rechenbeispiel — Druckabfall an einer Stenose (Schritt für Schritt):**
Aorta: v₁ = 0,3 m/s, p₁ = 100 mmHg ≈ 13 333 Pa, ρ_Blut = 1060 kg/m³.
Stenose: v₂ = 0,9 m/s (aus Kontinuität: A₁/A₂ = 3 → v₂ = 3·v₁).

Bernoulli bei gleicher Höhe (h₁ = h₂ → ρgh-Terme heben sich auf):
p₁ + ½ρv₁² = p₂ + ½ρv₂²
→ p₂ = p₁ + ½ρ(v₁² − v₂²) = 13 333 + ½ · 1060 · (0,09 − 0,81)
→ p₂ = 13 333 + 530 · (−0,72) = 13 333 − 382 Pa
→ Δp = 382 Pa ≈ **2,9 mmHg** → p₂ ≈ **97 mmHg**

Bei hochgradiger Stenose (v₂ = 3 m/s): Δp = ½ · 1060 · (9 − 0,09) ≈ 4728 Pa ≈ **35 mmHg** — klinisch hochrelevant! Solche Druckgradienten werden echokardiografisch gemessen, um den Schweregrad einer Aortenklappenstenose zu bestimmen. In der Echokardiografie wird die vereinfachte Bernoulli-Gleichung genutzt: **Δp ≈ 4 · v²** (mit v in m/s und Δp in mmHg) — eine Formel, die sich direkt aus der Bernoulli-Gleichung ableiten lässt, wenn man v₁ ≪ v₂ annimmt.

---

## Hagen-Poiseuille-Gesetz: Reale Strömung im Rohr

{{DIAGRAM:laminar-flow-profile}}

Die Bernoulli-Gleichung ignoriert Reibung — reale Fluide haben aber eine Viskosität η (innere Reibung). Das **Hagen-Poiseuille-Gesetz** beschreibt die laminare Strömung eines viskosen Fluids durch ein zylindrisches Rohr und ist für die Medizin besonders relevant:

**Q = (π · Δp · r⁴) / (8 · η · L)**

| Größe | Bedeutung | Einheit |
|-------|-----------|---------|
| Q | Volumenstrom | m³/s |
| Δp | Druckdifferenz zwischen Rohranfang und -ende | Pa |
| r | Innenradius des Rohres | m |
| η | Dynamische Viskosität des Fluids | Pa·s |
| L | Rohrlänge | m |

Die entscheidende Erkenntnis steckt in **r⁴**: Der Volumenstrom hängt von der **vierten Potenz** des Radius ab! Halbiert sich der Radius, sinkt der Volumenstrom auf 1/16 (= 0,5⁴) des ursprünglichen Wertes. Diese extreme Abhängigkeit hat in der Medizin dramatische Konsequenzen.

> **Merke:** Hagen-Poiseuille: Q = π·Δp·r⁴ / (8·η·L). Der Radius geht mit der **4. Potenz** ein — r halbiert → Q sinkt auf 1/16! Gilt nur für laminare, stationäre Strömung in starren Rohren.

Den **Strömungswiderstand** R_S kann man analog zum elektrischen Widerstand (Ohmsches Gesetz) definieren:

**R_S = Δp / Q = (8 · η · L) / (π · r⁴)**

Prüfungstipp: Die Analogie Δp ↔ U (Spannung), Q ↔ I (Strom), R_S ↔ R (Widerstand) wird im MedAT gerne abgefragt. Auch Reihen- und Parallelschaltung von Widerständen lässt sich übertragen: Gefäße in Serie (z. B. Arterie → Arteriole → Kapillare) addieren ihre Widerstände (R_ges = R₁ + R₂ + …), parallel geschaltete Gefäße (z. B. Kapillarbett) verringern den Gesamtwiderstand (1/R_ges = 1/R₁ + 1/R₂ + …).

> **Merke:** Strömungswiderstand R_S = 8ηL/(πr⁴), analog zum Ohmschen Gesetz: Δp = R_S · Q. Serienschaltung: R addieren. Parallelschaltung: 1/R addieren. Die Arteriolen liefern den größten Einzelbeitrag zum peripheren Gesamtwiderstand (TPR).

**Klinische Relevanz — warum r⁴ Leben rettet (oder gefährdet):**

- **Arteriosklerose:** Eine 50 %-ige Radiusverengung durch Plaques reduziert den Blutfluss auf (0,5)⁴ = 1/16 ≈ **6 %** des Normalwerts — also ein Flussverlust von **94 %**! Der Körper kompensiert durch Blutdruckerhöhung (Δp↑), was das Herz belastet → Hypertonie, Herzinsuffizienz. Umgekehrt: Bereits eine geringe Weitstellung (z. B. durch Nitroglycerin) erhöht den Fluss drastisch.
- **Infusionskatheter-Vergleich (Gauge-System):** Venenkatheter werden nach dem Gauge-System klassifiziert — kleinere Gauge-Zahl = größerer Innendurchmesser. Typische maximale Flussraten:
  - **14 G** (r ≈ 1,0 mm): bis zu **270 ml/min** — Trauma, Massentransfusion
  - **16 G** (r ≈ 0,8 mm): bis zu **180 ml/min** — OP, Bluttransfusion
  - **18 G** (r ≈ 0,6 mm): bis zu **90 ml/min** — Standardinfusion
  - **20 G** (r ≈ 0,45 mm): bis zu **55 ml/min** — pädiatrisch, dünne Venen
  - **22 G** (r ≈ 0,35 mm): bis zu **31 ml/min** — Kinder, Neugeborene
  Die Flussraten spiegeln exakt die r⁴-Abhängigkeit wider: 14 G vs. 22 G → (1,0/0,35)⁴ ≈ 67-fache Flussrate bei gleichem Druck!
- **Bronchospasmus:** Verengung der Bronchien (r↓) erhöht den Atemwegswiderstand drastisch (∝ 1/r⁴) → Atemnot bei Asthma. Bronchodilatatoren (z. B. Salbutamol) wirken, indem sie r geringfügig erhöhen — dank r⁴ reicht schon eine kleine Erweiterung für eine deutliche Widerstandssenkung.
- **Schlauchklemme:** Wird ein Infusionsschlauch teilweise abgeklemmt, sinkt der effektive Radius → Flussrate sinkt überproportional.

> **Merke:** r⁴-Abhängigkeit klinisch: Arteriosklerose (50 % Stenose → 94 % Flussverlust), Infusionszugang (14 G liefert bis 67× mehr Fluss als 22 G!), Bronchospasmus (r↓ → Atemwegswiderstand ↑↑↑). Körper kompensiert mit Δp↑ (Blutdruck ↑).

**Rechenbeispiel — Infusionsrate:**
Zwei Venenkatheter: Katheter A hat r = 0,8 mm, Katheter B hat r = 0,4 mm (halber Radius). Gleiche Länge, gleicher Druck, gleiche Flüssigkeit.
Q_B / Q_A = (r_B / r_A)⁴ = (0,4/0,8)⁴ = (0,5)⁴ = **1/16 ≈ 6 %**
Katheter B liefert nur 6 % der Flussrate von Katheter A — daher bei Schock: dickstmöglicher Zugang!

**Rechenbeispiel — Arteriosklerose in Stufen:**
Wie stark sinkt der Blutfluss bei verschiedenen Stenosegraden (Radiusreduktion)?

| Radiusreduktion | Verbleibender Radius | Q/Q₀ = (r/r₀)⁴ | Flussverlust |
|-----------------|---------------------|-----------------|--------------|
| 20 % | 0,8 · r₀ | 0,41 (41 %) | 59 % |
| 30 % | 0,7 · r₀ | 0,24 (24 %) | 76 % |
| 50 % | 0,5 · r₀ | 0,0625 (6 %) | 94 % |
| 70 % | 0,3 · r₀ | 0,0081 (0,8 %) | 99,2 % |

Bereits bei 30 % Radiusreduktion sind drei Viertel des Flusses verloren! Das erklärt, warum selbst „moderate" Arteriosklerose klinisch relevant wird und Angina pectoris (Brustenge bei Belastung) auslösen kann.

---

## Laminare vs. turbulente Strömung und Reynolds-Zahl

Alle bisherigen Gesetze (Bernoulli, Hagen-Poiseuille) setzen eine geordnete, **laminare** Strömung voraus. Doch ab einer bestimmten Geschwindigkeit bricht die Ordnung zusammen — die Strömung wird **turbulent**. Die **Reynolds-Zahl** Re entscheidet, wann dieser Übergang stattfindet.

**Laminare Strömung** (lat. lamina = Schicht): Die Fluidteilchen bewegen sich in parallelen Schichten. Im Rohr entsteht ein **parabolisches Geschwindigkeitsprofil** — maximal in der Rohrmitte, null an der Wand (Haftbedingung, engl. no-slip condition). Geringer Energieverlust, leise. Die Geschwindigkeit in der Rohrmitte beträgt exakt das Doppelte der mittleren Geschwindigkeit: v_max = 2·v̄.

**Turbulente Strömung:** Chaotische Wirbel und Fluktuationen. Flaches Geschwindigkeitsprofil (stärker durchmischt). Deutlich höherer Energieverlust, höherer Strömungswiderstand und — klinisch entscheidend — **auskultierbare Geräusche**. Prüfungstipp: Bei turbulenter Strömung gilt Hagen-Poiseuille **nicht** mehr — der Druckverlust steigt dann überproportional (∝ v² statt ∝ v).

Die **Reynolds-Zahl** (dimensionslos) quantifiziert das Verhältnis von Trägheitskräften zu Reibungskräften:

**Re = (ρ · v · d) / η**

Dabei: ρ = Dichte, v = mittlere Geschwindigkeit, d = Rohrdurchmesser, η = dynamische Viskosität.

| Reynolds-Zahl | Strömungsform | Klinisches Beispiel |
|---------------|---------------|---------------------|
| Re < 2300 | **laminar** | Normale Blutströmung in peripheren Gefäßen |
| 2300 < Re < 4000 | Übergangsbereich | Gefäßverzweigungen (Bifurkationen) |
| Re > 4000 | **turbulent** | Aorta bei Belastung, Karotisstenose |

> **Merke:** Re = ρ·v·d/η (dimensionslos). Re < 2300: laminar (parabolisches Profil, leise). Re > 4000: turbulent (Wirbel, Geräusche). Im Übergangsbereich (2300–4000) kann die Strömung kippen.

**Rechenbeispiel — Reynolds-Zahl in der Aorta:**
ρ_Blut = 1060 kg/m³, v = 0,3 m/s, d = 2,4 cm = 0,024 m, η = 3,5 · 10⁻³ Pa·s.
Re = (1060 · 0,3 · 0,024) / 0,00035 = 7,63 / 0,0035 ≈ **2180**

Die Aorta liegt also in Ruhe knapp unter der kritischen Schwelle! Bei körperlicher Belastung (v↑) oder Fieber (η↓) überschreitet Re leicht 2300 → turbulente Strömung → auskultierbare Strömungsgeräusche.

**Klinische Bedeutung der Reynolds-Zahl:**

- **Stenose → Strömungsgeräusch:** Bei einer Karotisstenose steigt v (Kontinuität) → Re steigt → Strömung wird turbulent → Stenosegeräusch über der A. carotis (auskultierbar mit Stethoskop). Prüfungstipp: Stenosegeräusche entstehen *distal* der Engstelle, wo die Jet-Strömung auf langsamer fließendes Blut trifft.

- **Anämie → funktionelles Herzgeräusch:** Bei Anämie sinkt die Blutviskosität η (weniger Erythrozyten, weniger innere Reibung) → Re steigt auch ohne anatomische Engstelle → **funktionelles Herzgeräusch** ohne strukturelle Herzkrankheit. Verschwindet nach Therapie der Anämie. Auch bei Schwangerschaft (physiologische Hämodilution → η↓) treten funktionelle Herzgeräusche auf.

- **Herzgeräusche bei Fieber/Belastung:** Höhere Herzfrequenz → höheres HZV → v↑ → Re↑ → mögliche Turbulenzen an Klappen. Auch physiologisch bei Kindern und Jugendlichen (akzidentelle Herzgeräusche — harmlos, kein Strukturdefekt).

- **Korotkoff-Geräusche bei der Blutdruckmessung:** Die Manschette komprimiert die A. brachialis teilweise → Stenose → v↑ → Re↑ → turbulente Strömung → hörbare Korotkoff-Geräusche. Das erste Geräusch markiert den systolischen, das Verschwinden den diastolischen Blutdruck.

> **Merke:** Stenosegeräusche: v↑ → Re↑ → turbulent. Funktionelle Herzgeräusche bei Anämie: η↓ → Re↑ → turbulent (ohne Strukturdefekt!). Korotkoff-Geräusche: Manschette → partielle Stenose → Turbulenzen. Alle über die Reynolds-Zahl erklärbar.

---

## Klinische Synthese: Stenose und Aneurysma

Die vier Gleichungen (Kontinuität, Bernoulli, Hagen-Poiseuille, Reynolds) wirken bei pathologischen Gefäßveränderungen zusammen:

**Stenose (Gefäßverengung, z. B. Karotisstenose, Aortenklappenstenose):**
- A↓ → v↑ (Kontinuität)
- v↑ → p↓ an der Engstelle (Bernoulli)
- r↓ → R_S ↑↑↑ (Hagen-Poiseuille, r⁴!)
- v↑ → Re↑ → turbulente Strömung → **Stenosegeräusche** (auskultierbar)
- Klinisch: Karotisstenose → Strömungsgeräusch über A. carotis → Duplexsonografie → ggf. Stent/OP

**Aneurysma (Gefäßaussackung, z. B. Bauchaortenaneurysma):**
- A↑ → v↓ (Kontinuität)
- v↓ → p↑ in der Aussackung (Bernoulli)
- Wandspannung τ_W = p · r / (2 · d_Wand) steigt mit r (Laplace-Gesetz!)
- **Teufelskreis:** Aussackung → p↑ + r↑ → Wandspannung ↑↑ → Wand dehnt sich weiter → größere Aussackung → **Ruptur** (lebensbedrohlich)
- Prüfungstipp: Doppelter Durchmesser = vierfache Querschnittsfläche (A ∝ d²) → v sinkt auf ¼ → deutlicher Druckanstieg.

> **Merke:** Stenose: A↓ → v↑ → p↓ → Re↑ → turbulent → Geräusche. Aneurysma: A↑ → v↓ → p↑ → Wandspannung ↑ (Laplace) → Teufelskreis → Rupturrisiko. Alle vier Gleichungen (Kontinuität, Bernoulli, Hagen-Poiseuille, Reynolds) spielen zusammen.

---

## Prüfungsrelevante Zahlen

| Größe | Wert |
|-------|------|
| Querschnitt Aorta | ≈ 4,5 cm² |
| Gesamtquerschnitt Kapillaren | ≈ 4500 cm² (1000× Aorta) |
| v Aorta | ≈ 0,3 m/s (30 cm/s) |
| v Kapillaren | ≈ 0,3 mm/s |
| Re-Grenze laminar | < 2300 |
| Re-Grenze turbulent | > 4000 |
| Re Aorta (Ruhe) | ≈ 2180 (knapp unter Grenze!) |
| ρ Blut | ≈ 1060 kg/m³ |
| η Blut (37 °C) | ≈ 3–4 · 10⁻³ Pa·s |
| HZV | ≈ 5 L/min |
| Hagen-Poiseuille r-Abhängigkeit | Q ∝ r⁴ |
| 50 % Radiusstenose → Flussverlust | 94 % |
| 14 G Katheter max. Fluss | ≈ 270 ml/min |
| 22 G Katheter max. Fluss | ≈ 31 ml/min |
| Venturi-Maske FiO₂-Bereich | 24–60 % |`,

      lernziele: [
        "Die Kontinuitätsgleichung anwenden und Geschwindigkeitsänderungen bei Querschnittsänderungen berechnen können",
        "Die Bernoulli-Gleichung auf Strömungsprobleme anwenden und den Venturi-Effekt erklären können",
        "Das Hagen-Poiseuille-Gesetz anwenden und die klinische Bedeutung der r⁴-Abhängigkeit erklären können",
        "Laminare und turbulente Strömung unterscheiden und die Reynolds-Zahl berechnen können",
        "Stenose und Aneurysma mit allen vier Strömungsgesetzen physikalisch erklären können",
      ],

      merksätze: [
        "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ — Verengung → höhere Geschwindigkeit",
        "Bernoulli: p + ½ρv² + ρgh = const — höhere Geschwindigkeit → niedrigerer statischer Druck",
        "Venturi-Effekt: Verengung → v↑ → p↓ → Ansaugwirkung (Vernebler, Venturi-Maske)",
        "Hagen-Poiseuille: Q = π·Δp·r⁴/(8·η·L) — Radius halbiert → Fluss auf 1/16!",
        "Reynolds-Zahl Re = ρ·v·d/η — dimensionslos; Re < 2300 laminar, Re > 4000 turbulent",
        "Stenose: v↑ → p↓ → turbulent → Geräusche; Aneurysma: v↓ → p↑ → Wandspannung↑ → Rupturrisiko",
        "Kapillarbett: riesiger Gesamtquerschnitt → extrem langsame Strömung (0,3 mm/s) → optimaler Stoffaustausch",
        "Anämie → η↓ → Re↑ → funktionelle Herzgeräusche ohne Strukturdefekt",
      ],

      klinischerBezug:
        "Die Kontinuitätsgleichung erklärt, warum die Blutströmung in den Kapillaren (Gesamtquerschnitt ≈ 4500 cm²) extrem langsam ist (≈ 0,3 mm/s) — optimal für den Stoffaustausch. Bei einer Karotisstenose steigt die Blutgeschwindigkeit an der Engstelle, die Strömung wird turbulent und verursacht auskultierbare Geräusche. Die Duplexsonografie nutzt den Doppler-Effekt, um die Blutgeschwindigkeit an Stenosen zu messen und den Stenosegrad zu bestimmen. Das Hagen-Poiseuille-Gesetz erklärt, warum bei Arteriosklerose bereits eine 50 %-ige Radiusverengung den Blutfluss auf 6 % reduziert — der Körper kompensiert mit Blutdruckerhöhung (Hypertonie). In der Notfallmedizin wählt man den größtmöglichen Venenzugang (Q ∝ r⁴). Bei Anämie sinkt die Blutviskosität, die Reynolds-Zahl steigt und es entstehen funktionelle Herzgeräusche ohne strukturelle Herzkrankheit. Aneurysmen (z. B. Bauchaortenaneurysma) sind lebensgefährlich: Der erhöhte Wanddruck und die zunehmende Wandspannung (Laplace) können zur Ruptur führen — ein chirurgischer Notfall mit hoher Mortalität.",

      altfrage: {
        question:
          "Blut strömt mit 30 cm/s durch die Aorta (Querschnitt: 5 cm²). Der Gesamtquerschnitt der Kapillaren beträgt 4500 cm². Welche Aussage zur Strömungsgeschwindigkeit in den Kapillaren ist richtig?\n\nA) Die Geschwindigkeit in den Kapillaren beträgt ca. 0,033 cm/s.\nB) Die Geschwindigkeit bleibt gleich, da der Blutdruck konstant ist.\nC) Die Geschwindigkeit steigt, weil die Kapillaren enger sind als die Aorta.\nD) Die Geschwindigkeit lässt sich ohne Kenntnis der Viskosität nicht berechnen.\nE) Die Geschwindigkeit in den Kapillaren beträgt ca. 3 cm/s.",
        answer:
          "Richtig ist A. Nach der Kontinuitätsgleichung (A₁·v₁ = A₂·v₂) gilt: v_Kapillaren = v_Aorta · (A_Aorta / A_Kapillaren) = 30 cm/s · (5 / 4500) = 0,033 cm/s ≈ 0,3 mm/s. Der riesige Gesamtquerschnitt der Kapillaren führt zu extrem langsamer Strömung — ideal für den Stoffaustausch. B ist falsch (der Druck ist nicht konstant). C verwechselt Einzelquerschnitt mit Gesamtquerschnitt. D ist falsch, die Kontinuitätsgleichung benötigt keine Viskosität. E ist um den Faktor 100 zu groß.",
      },

      selfTest: [
        {
          question:
            "In einer Rohrleitung verengt sich der Querschnitt von 10 cm² auf 2 cm². Die Strömungsgeschwindigkeit im weiten Teil beträgt 0,5 m/s. Wie groß ist sie im engen Teil?",
          options: ["0,1 m/s", "1,0 m/s", "2,5 m/s", "5,0 m/s", "10,0 m/s"],
          correctIndex: 2,
          explanation:
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ → v₂ = v₁·(A₁/A₂) = 0,5 · (10/2) = 0,5 · 5 = 2,5 m/s. Die Geschwindigkeit verfünffacht sich, weil der Querschnitt auf ein Fünftel sinkt. Klinisch: Bei einer Stenose in einem Blutgefäß tritt genau dasselbe Prinzip auf.",
          hints: [
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ → nach v₂ umstellen.",
            "Verhältnis A₁/A₂ = 10/2 = 5 → v₂ = 5 · v₁.",
          ],
          difficulty: 1,
          tags: ["kontinuität", "strömung", "geschwindigkeit"],
        },
        {
          question: "Welche Aussage zur Bernoulli-Gleichung ist korrekt?",
          options: [
            "An Stellen hoher Geschwindigkeit ist der statische Druck hoch",
            "Die Bernoulli-Gleichung gilt nur für turbulente Strömungen",
            "An Stellen hoher Geschwindigkeit ist der statische Druck niedrig",
            "Der dynamische Druck ist unabhängig von der Strömungsgeschwindigkeit",
            "Die Bernoulli-Gleichung enthält keinen Höhenterm",
          ],
          correctIndex: 2,
          explanation:
            "Bernoulli: p + ½ρv² + ρgh = const. Wenn v steigt, muss p sinken (bei gleicher Höhe), damit die Summe konstant bleibt. Das ist der Venturi-Effekt: An Verengungen sinkt der statische Druck. Achtung: Die Bernoulli-Gleichung gilt für ideale (reibungsfreie, inkompressible) Fluide in laminarer, stationärer Strömung — nicht für turbulente!",
          hints: [
            "p + ½ρv² = const (bei gleicher Höhe). Was passiert mit p, wenn v steigt?",
            "Venturi-Effekt: Verengung → schneller → niedrigerer Druck.",
          ],
          difficulty: 1,
          tags: ["bernoulli", "venturi", "druck"],
        },
        {
          question:
            "Die Reynolds-Zahl eines Blutgefäßes beträgt Re = 3500. Welche Strömungsform liegt vor?",
          options: [
            "Rein laminare Strömung",
            "Rein turbulente Strömung",
            "Übergangsbereich zwischen laminar und turbulent",
            "Keine Strömung (Stillstand)",
            "Superlaminare Strömung",
          ],
          correctIndex: 2,
          explanation:
            "Re = 3500 liegt im Übergangsbereich (2300 < Re < 4000). Hier kann die Strömung zwischen laminar und turbulent wechseln. Unter Re = 2300 ist die Strömung stabil laminar, über Re = 4000 voll turbulent. Klinisch bedeutet der Übergangsbereich: Gelegentliche Turbulenzen, die mit dem Stethoskop als leise Geräusche hörbar sein können.",
          hints: [
            "Kritische Reynolds-Zahlen: Re < 2300 → laminar, Re > 4000 → turbulent.",
            "Re = 3500 liegt dazwischen — was bedeutet das?",
          ],
          difficulty: 2,
          tags: ["reynolds", "laminar", "turbulent"],
        },
        {
          question:
            "Warum ist die Blutströmungsgeschwindigkeit in den Kapillaren so niedrig (ca. 0,3 mm/s), obwohl die Aorta-Geschwindigkeit ca. 30 cm/s beträgt?",
          options: [
            "Die Viskosität des Blutes ist in den Kapillaren viel höher",
            "Der Blutdruck fällt in den Kapillaren auf null ab",
            "Der Gesamtquerschnitt aller Kapillaren ist etwa 1000-mal größer als der Aortenquerschnitt",
            "Die Kapillaren sind zu kurz für schnelle Strömung",
            "Das Herz pumpt weniger Blut in die Kapillaren",
          ],
          correctIndex: 2,
          explanation:
            "Kontinuitätsgleichung: A_Aorta · v_Aorta = A_Kapillaren · v_Kapillaren. Da der Gesamtquerschnitt aller Kapillaren ca. 1000-mal größer ist als der Aortenquerschnitt, sinkt v entsprechend auf 1/1000 des Aortawertes. Das ist biologisch sinnvoll: Die extrem langsame Strömung in den Kapillaren ermöglicht den Stoffaustausch (O₂, CO₂, Nährstoffe, Stoffwechselprodukte) zwischen Blut und Gewebe.",
          hints: [
            "Denke an die Kontinuitätsgleichung: Q̇ = A·v = const.",
            "Milliarden Kapillaren → riesiger Gesamtquerschnitt → v muss sinken!",
          ],
          difficulty: 2,
          tags: ["kapillaren", "kontinuität", "stoffaustausch"],
        },
        {
          question:
            "Ein Patient hat ein Aortenaneurysma — die Aorta ist auf den doppelten Durchmesser erweitert. Welche physikalischen Veränderungen treten an der Aussackung auf?",
          options: [
            "Geschwindigkeit steigt, Druck sinkt, Wandspannung sinkt",
            "Geschwindigkeit sinkt, Druck steigt, Wandspannung steigt",
            "Geschwindigkeit steigt, Druck steigt, Wandspannung steigt",
            "Geschwindigkeit sinkt, Druck sinkt, Wandspannung sinkt",
            "Geschwindigkeit und Druck bleiben gleich, nur die Wandspannung steigt",
          ],
          correctIndex: 1,
          explanation:
            "Bei einem Aneurysma (A↑) gilt: (1) Kontinuität: A↑ → v↓ (Geschwindigkeit sinkt auf ¼ bei doppeltem Durchmesser, da A ∝ d²). (2) Bernoulli: v↓ → p↑ (statischer Druck steigt). (3) Laplace: σ = p·r/(2d_Wand) — bei größerem r UND höherem p steigt die Wandspannung → Teufelskreis → Rupturrisiko. Doppelter Durchmesser = vierfache Fläche → v sinkt auf ¼!",
          hints: [
            "Aneurysma = Erweiterung → Querschnitt A steigt. Was sagen Kontinuität und Bernoulli?",
            "Laplace-Gesetz: Wandspannung steigt mit dem Radius — Teufelskreis!",
          ],
          difficulty: 3,
          tags: ["aneurysma", "bernoulli", "kontinuität", "laplace"],
        },
        {
          question:
            "Nach dem Hagen-Poiseuille-Gesetz: Was passiert mit dem Volumenstrom Q, wenn sich der Gefäßradius durch Arteriosklerose halbiert (bei sonst gleichen Bedingungen)?",
          options: [
            "Q sinkt auf die Hälfte (1/2)",
            "Q sinkt auf ein Viertel (1/4)",
            "Q sinkt auf ein Achtel (1/8)",
            "Q sinkt auf ein Sechzehntel (1/16)",
            "Q bleibt gleich, nur die Geschwindigkeit ändert sich",
          ],
          correctIndex: 3,
          explanation:
            "Hagen-Poiseuille: Q = π·Δp·r⁴ / (8·η·L). Da Q ∝ r⁴, gilt: Halbierung des Radius → Q_neu = (r/2)⁴ · Q_alt = (1/16) · Q_alt. Der Volumenstrom sinkt auf nur 6,25 % des Ausgangswertes! Das erklärt, warum bereits moderate Gefäßverengungen durch Arteriosklerose zu massiven Durchblutungsstörungen führen. Der Körper kompensiert durch Blutdruckerhöhung (Δp↑).",
          hints: [
            "Hagen-Poiseuille: Q hängt von r⁴ ab — nicht von r² oder r!",
            "(1/2)⁴ = 1/16. Das ist die dramatische r⁴-Abhängigkeit.",
          ],
          difficulty: 2,
          tags: ["hagen-poiseuille", "arteriosklerose", "strömungswiderstand"],
        },
        {
          question:
            "Welche Aussage zu funktionellen Herzgeräuschen bei Anämie ist physikalisch korrekt?",
          options: [
            "Die Blutviskosität steigt bei Anämie, was Turbulenzen verursacht",
            "Die Reynolds-Zahl sinkt bei Anämie, da weniger Erythrozyten vorhanden sind",
            "Die verminderte Blutviskosität erhöht die Reynolds-Zahl, was Turbulenzen begünstigt",
            "Anämie verursacht Stenosen, die zu Herzgeräuschen führen",
            "Herzgeräusche bei Anämie haben keine physikalische Erklärung",
          ],
          correctIndex: 2,
          explanation:
            "Bei Anämie sinkt die Zahl der Erythrozyten → die Blutviskosität η sinkt. Da Re = ρ·v·d/η und η im Nenner steht, steigt die Reynolds-Zahl. Der kritische Wert für den laminar-turbulenten Übergang wird leichter überschritten → Turbulenzen → auskultierbare Geräusche, obwohl keine strukturelle Herzkrankheit vorliegt (= funktionelles Herzgeräusch). Nach Behandlung der Anämie verschwinden die Geräusche.",
          hints: [
            "Re = ρ·v·d/η — was passiert mit Re, wenn η sinkt?",
            "Anämie = weniger Erythrozyten → dünnflüssigeres Blut → η↓.",
          ],
          difficulty: 3,
          tags: ["reynolds", "anämie", "herzgeräusch", "viskosität"],
        },
      ],
    },
  ],
};
