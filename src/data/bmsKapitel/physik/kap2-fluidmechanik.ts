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
      id: "ph-2-01",
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
      diagram: "newton-forces",
      content: `## Einleitung

Warum muss die Blutdruckmanschette immer auf Herzhöhe angelegt werden? Die Antwort liefert die **Hydrostatik** — die Physik des Drucks in ruhenden Flüssigkeiten. Jeder Zentimeter Höhenunterschied erzeugt einen messbaren Druckunterschied, der in der Medizin über korrekte oder falsche Diagnosen entscheiden kann.

**In diesem Kapitel lernst du:**
- wie der **hydrostatische Druck** (Schweredruck) von Tiefe, Dichte und Erdbeschleunigung abhängt: p = ρ·g·h
- warum die **Gefäßform** für den Bodendruck keine Rolle spielt (Hydrostatisches Paradoxon)
- wie das **Pascalsche Prinzip** die gleichmäßige Druckausbreitung in Fluiden beschreibt — und warum die hydraulische Presse funktioniert
- wie ein **Manometer** den Druck misst und wie die **Riva-Rocci-Methode** in der Blutdruckmessung funktioniert
- warum die Messung auf **Herzhöhe** entscheidend ist und welche Fehler bei falschem Messpunkt entstehen

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:newton-forces}}

## Druck — Wiederholung und Grundbegriff

**Bevor wir den Druck in Fluiden betrachten,** wiederholen wir die Definition: **Druck** ist definiert als Kraft pro Fläche:

**p = F / A**

Die SI-Einheit ist **Pascal** (Pa = N/m² = kg·m⁻¹·s⁻²). In der Medizin wird der Blutdruck in **mmHg** (Millimeter Quecksilbersäule) angegeben: **1 mmHg ≈ 133,3 Pa**.

Weitere Druckeinheiten:
- 1 atm = 101 325 Pa = 760 mmHg (Atmosphärendruck auf Meereshöhe)
- 1 bar = 100 000 Pa ≈ 750 mmHg
- 1 cmH₂O ≈ 98,07 Pa (Beatmungsmedizin)

> **Merke:** Druck p = F/A hat die Einheit Pascal (Pa). In der Klinik: 1 mmHg ≈ 133 Pa, 1 atm = 760 mmHg = 101 325 Pa.

---

## Hydrostatischer Druck (Schweredruck)

**Bisher haben wir gesehen:** Druck als Kraft pro Fläche. **In einer ruhenden Flüssigkeit** entsteht allein durch das Gewicht der darüber liegenden Flüssigkeitssäule ein Druck — der **hydrostatische Druck** (Schweredruck):

**p = ρ · g · h**

Dabei ist:
- **ρ** = Dichte der Flüssigkeit (in kg/m³; Wasser: ρ ≈ 1000 kg/m³, Blut: ρ ≈ 1060 kg/m³)
- **g** = Erdbeschleunigung (≈ 9,81 m/s²)
- **h** = Tiefe (Höhe der Flüssigkeitssäule in m)

Der **Gesamtdruck** in einer Tiefe h beträgt: **p_gesamt = p_0 + ρ·g·h**, wobei p_0 der Druck an der Oberfläche (z. B. Atmosphärendruck) ist.

**Rechenbeispiel — Schweredruck im Blutgefäß:**
Wie groß ist der hydrostatische Druckunterschied zwischen Herz und Fuß (Höhendifferenz h ≈ 1,3 m)?
Δp = ρ_Blut · g · h = 1060 kg/m³ · 9,81 m/s² · 1,3 m ≈ **13 520 Pa ≈ 101 mmHg**

Das bedeutet: Im Stehen ist der Blutdruck am Fuß um ca. **100 mmHg höher** als auf Herzhöhe! Im Kopf (ca. 0,4 m über dem Herzen) ist er entsprechend ca. 30 mmHg niedriger.

> **Merke:** p = ρ·g·h — der hydrostatische Druck steigt linear mit der Tiefe. Pro 10 m Wassersäule nimmt der Druck um ca. 1 atm zu. Pro 1,3 m Blutsäule (Herz → Fuß) um ca. 100 mmHg.

---

## Hydrostatisches Paradoxon

**Um das zu verstehen,** muss man ein Prinzip begreifen, das zunächst überraschend wirkt: Der Bodendruck in einem mit Flüssigkeit gefüllten Gefäß hängt **nur** von der Füllhöhe h und der Dichte ρ ab — **nicht von der Gefäßform** und nicht vom Gesamtvolumen.

Drei verschieden geformte Gefäße (schmal, breit, trichterförmig), die mit derselben Flüssigkeit auf dieselbe Höhe h gefüllt sind, haben exakt **denselben Bodendruck**: p = ρ·g·h.

Das erscheint paradox, weil die Gewichtskraft der Flüssigkeit in den drei Gefäßen unterschiedlich ist. Die Erklärung: Bei schrägen oder sich verengenden Wänden übt die Flüssigkeit Normalkräfte auf die Wand aus, die den Unterschied kompensieren.

> **Merke:** Hydrostatisches Paradoxon: Der Bodendruck hängt nur von ρ, g und h ab — nicht von der Gefäßform oder dem Volumen!

---

## Pascalsches Prinzip

**Bisher haben wir gesehen:** Schweredruck und Hydrostatisches Paradoxon. **Ein weiteres fundamentales Gesetz** der Hydrostatik ist das **Pascalsche Prinzip** (Blaise Pascal, 1653):

> Ein auf eine eingeschlossene Flüssigkeit ausgeübter Druck breitet sich **gleichmäßig in alle Richtungen** aus und wirkt auf jede Flächeneinheit der Gefäßwand gleich stark.

**Anwendung — Die hydraulische Presse:**

An einem Kolben mit kleiner Fläche A₁ wird die Kraft F₁ aufgebracht. Da der Druck p = F/A überall gleich ist, gilt:

**F₁ / A₁ = F₂ / A₂ → F₂ = F₁ · (A₂ / A₁)**

Bei A₂ = 10·A₁ wird die Kraft **verzehnfacht** — allerdings bewegt sich der große Kolben nur 1/10 des Weges (Energieerhaltung: W = F·s = const).

**Klinisch:** Das Pascalsche Prinzip erklärt, warum ein erhöhter intraabdomineller Druck (z. B. bei Aszites) gleichmäßig auf alle umliegenden Organe wirkt und die Zwerchfellbewegung einschränken kann.

> **Merke:** Pascalsches Prinzip: Druck in einer eingeschlossenen Flüssigkeit breitet sich allseitig gleich aus. Hydraulische Presse: Kraftverstärkung F₂ = F₁ · (A₂/A₁), aber s₂ = s₁ · (A₁/A₂).

---

## Manometer und Blutdruckmessung nach Riva-Rocci

**Um den Druck zu messen,** verwendet man Manometer. In der Medizin ist das **Quecksilber-Manometer** (Sphygmomanometer) nach **Riva-Rocci** historisch bedeutend:

Die Manschette wird am Oberarm auf **Herzhöhe** aufgepumpt, bis die Arteria brachialis komprimiert ist. Beim langsamen Ablassen des Drucks werden mit dem Stethoskop die **Korotkow-Geräusche** auskultiert:
- **Systolischer Wert**: erstes hörbares Klopfen (Blut presst sich durch die Stenose)
- **Diastolischer Wert**: Verschwinden der Geräusche (freier Blutfluss)

**Warum Herzhöhe?** Liegt die Manschette 15 cm unter Herzhöhe, ist der gemessene Druck um Δp = ρ·g·h = 1060 · 9,81 · 0,15 ≈ 1561 Pa ≈ **12 mmHg zu hoch**. Bei der Diagnose einer Hypertonie (Grenzwert 140/90 mmHg) kann das den Unterschied zwischen „normal" und „behandlungsbedürftig" ausmachen!

> **Merke:** Blutdruckmessung immer auf Herzhöhe! Jeder Zentimeter Abweichung verfälscht das Ergebnis um ca. 0,8 mmHg (≈ ρ_Blut · g · 0,01 m / 133 Pa/mmHg).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- Formel p = ρ·g·h und deren Anwendung (Schweredruck berechnen)
- Hydrostatisches Paradoxon: Bodendruck unabhängig von Gefäßform
- Pascalsches Prinzip und hydraulische Presse (Kraftverstärkung)
- Umrechnung mmHg ↔ Pa (1 mmHg ≈ 133,3 Pa)

**Häufige Prüfungsfragen:**
- "Wie groß ist der Druckunterschied zwischen Herz und Fuß?" → Δp = ρ·g·h ≈ 100 mmHg
- "Wovon hängt der Bodendruck ab?" → Nur von ρ, g und h — nicht von der Gefäßform
- "Was besagt das Pascalsche Prinzip?" → Druck breitet sich allseitig gleich aus

**Typische Prüfungsfallen:**
- Bodendruck hängt NICHT vom Volumen oder der Gefäßform ab (Paradoxon!)
- Hydraulische Presse: Kraft wird verstärkt, aber NICHT die Energie (Wegunterschiede!)
- mmHg und Pa sind verschiedene Einheiten für DIESELBE Größe (Druck)
- Blutdruckmessung: Höhe über/unter dem Herzen verfälscht systematisch

---

## Zusammenfassung (ultrakompakt)

- **Hydrostatischer Druck**: p = ρ·g·h — linear mit Tiefe, unabhängig von Gefäßform
- **Gesamtdruck**: p_gesamt = p_0 + ρ·g·h (Atmosphärendruck + Schweredruck)
- **Paradoxon**: Bodendruck hängt nur von h, ρ, g ab — nicht von Form oder Volumen
- **Pascal**: Druck breitet sich allseitig gleich aus → hydraulische Presse F₂ = F₁·(A₂/A₁)
- **Blutdruck**: Herz → Fuß (≈1,3 m) → Δp ≈ 100 mmHg; Messung stets auf Herzhöhe
- **Einheiten**: 1 mmHg ≈ 133 Pa; 1 atm = 760 mmHg = 101 325 Pa
- **Klinisch**: Falsche Manschettenhöhe → falsche Diagnose; Aszites → allseitige Druckbelastung`,

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
      id: "ph-2-02",
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
      diagram: "newton-forces",
      content: `## Einleitung

Warum schwimmt ein Stahlschiff, obwohl Stahl dichter als Wasser ist? Und warum kollabieren Lungenbläschen bei Frühgeborenen ohne Surfactant? Die Antworten liefern zwei zentrale Konzepte: das **Archimedische Prinzip** für den Auftrieb und das **Laplace-Gesetz** für die Oberflächenspannung. Beide sind im MedAT hochrelevant — besonders die klinischen Anwendungen.

**In diesem Kapitel lernst du:**
- das **Archimedische Prinzip**: F_A = ρ_Fluid · g · V_verdrängt und seine Konsequenzen
- die Bedingungen für **Schwimmen, Schweben und Sinken** (Vergleich der Dichten)
- was **Oberflächenspannung** ist und wie **Kapillarität** funktioniert
- das **Laplace-Gesetz** und die Rolle des **Surfactant** in der Lunge
- klinische Bedeutung: Atelektase bei Surfactant-Mangel, Alveolenstabilität

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:newton-forces}}

## Archimedisches Prinzip

**Ein in ein Fluid eingetauchter Körper** erfährt eine nach oben gerichtete Kraft — die **Auftriebskraft** F_A. Diese ist gleich der Gewichtskraft des verdrängten Fluids:

**F_A = ρ_Fluid · g · V_verdrängt**

Dabei ist V_verdrängt das Volumen des eingetauchten Körperteils. Die Auftriebskraft wirkt im **Schwerpunkt** des verdrängten Fluidvolumens (Druckpunkt).

**Herleitung (vereinfacht):** Der Druck an der Unterseite des Körpers ist größer als an der Oberseite (p = ρ·g·h nimmt mit der Tiefe zu). Die resultierende Druckdifferenz ergibt eine Nettokraft nach oben — das ist die Auftriebskraft.

> **Merke:** Archimedisches Prinzip: Die Auftriebskraft F_A = ρ_Fluid · g · V_verdrängt entspricht der Gewichtskraft des verdrängten Fluids. Sie hängt NICHT von der Dichte des eingetauchten Körpers ab, sondern von der Dichte des Fluids und dem verdrängten Volumen.

---

## Schwimmen, Schweben und Sinken

**Bisher haben wir gesehen:** Die Auftriebskraft hängt vom Fluid ab. **Ob ein Körper schwimmt, schwebt oder sinkt,** hängt vom Verhältnis seiner mittleren Dichte ρ_Körper zur Fluiddichte ρ_Fluid ab:

| Bedingung | Verhalten | Beispiel |
|-----------|-----------|----------|
| ρ_Körper < ρ_Fluid | **Schwimmen** (ragt teilweise heraus) | Holz auf Wasser, Eisberg |
| ρ_Körper = ρ_Fluid | **Schweben** (in jeder Tiefe stabil) | U-Boot (reguliert Ballast) |
| ρ_Körper > ρ_Fluid | **Sinken** (bis zum Boden) | Stein in Wasser |

**Warum schwimmt ein Stahlschiff?** Stahl hat ρ ≈ 7800 kg/m³ (viel dichter als Wasser). Aber das Schiff ist hohl — die **mittlere Dichte** von Stahl + eingeschlossener Luft ist kleiner als ρ_Wasser. Es verdrängt genug Wasser, damit F_A = F_G.

**Rechenbeispiel — Eisberg:**
Eis hat ρ_Eis ≈ 917 kg/m³, Meerwasser ρ_Meer ≈ 1025 kg/m³.
Anteil über Wasser: 1 − ρ_Eis/ρ_Meer = 1 − 917/1025 ≈ 0,105 → ca. **10,5 %** ragen heraus.
Also schwimmen ca. **89,5 %** unter Wasser — „Spitze des Eisbergs"!

> **Merke:** Schwimmen: ρ_Körper < ρ_Fluid; Schweben: ρ_Körper = ρ_Fluid; Sinken: ρ_Körper > ρ_Fluid. Die mittlere Dichte zählt — ein hohler Stahlkörper kann schwimmen!

---

## Oberflächenspannung

**Um das zu verstehen,** muss man die molekularen Kräfte an der Oberfläche einer Flüssigkeit betrachten. Moleküle im Inneren werden allseitig von Nachbarmolekülen angezogen (Kohäsionskräfte heben sich auf). An der **Oberfläche** fehlen die Nachbarn nach oben — es entsteht eine resultierende Kraft ins Innere. Die Oberfläche verhält sich wie eine **gespannte elastische Haut**.

Die **Oberflächenspannung σ** (sigma) ist definiert als Kraft pro Länge entlang einer gedachten Linie auf der Oberfläche:

**σ = F / l** (Einheit: N/m = J/m²)

Typische Werte:
- Wasser (20°C): σ ≈ 0,073 N/m
- Blutplasma: σ ≈ 0,050 N/m
- Surfactant-Lösung: σ ≈ 0,025 N/m (stark erniedrigt!)

**Kapillarität:** In engen Röhren (Kapillaren) steigt oder sinkt die Flüssigkeit je nach dem Verhältnis von Adhäsions- (Fluid-Wand) zu Kohäsionskräften (Fluid-Fluid):
- **Adhäsion > Kohäsion** → konkaver Meniskus → Flüssigkeit steigt (Wasser in Glasröhre)
- **Kohäsion > Adhäsion** → konvexer Meniskus → Flüssigkeit sinkt (Quecksilber in Glasröhre)

> **Merke:** Oberflächenspannung σ = F/l entsteht durch unausgeglichene Kohäsionskräfte an der Oberfläche. Kapillarität: Adhäsion > Kohäsion → Steigen; Kohäsion > Adhäsion → Sinken.

---

## Laplace-Gesetz und Surfactant

**Bisher haben wir gesehen:** Oberflächenspannung und Kapillarität. **In kugelförmigen Hohlräumen** (Blasen, Alveolen) erzeugt die Oberflächenspannung einen **Überdruck** nach innen — beschrieben durch das **Laplace-Gesetz**:

Für eine Kugelblase mit einer Wand (z. B. Alveole):

**Δp = 2σ / r**

Dabei ist:
- **Δp** = Druckdifferenz (innen − außen)
- **σ** = Oberflächenspannung
- **r** = Radius der Blase

**Entscheidende Konsequenz:** Je **kleiner** der Radius r, desto **größer** der Innendruck Δp. Kleine Alveolen hätten ohne Gegenmaßnahme einen viel höheren Innendruck als große → sie würden in die großen Alveolen „hineinblasen" → **Kollaps** der kleinen Alveolen (= **Atelektase**).

**Surfactant (Surface Active Agent):**
Typ-II-Pneumozyten produzieren **Surfactant** — eine Mischung aus Phospholipiden (v. a. Dipalmitoylphosphatidylcholin) und Proteinen. Surfactant:
- **senkt die Oberflächenspannung** an der Luft-Wasser-Grenzfläche der Alveolen
- wirkt **radiusabhängig**: In kleinen Alveolen (Surfactant-Moleküle dichter gepackt) ist σ stärker reduziert als in großen → **Druckausgleich** zwischen verschieden großen Alveolen
- verhindert **Atelektase** (Alveolarkollaps)

**Klinisch — Frühgeborene:** Ab der ca. 24. SSW beginnt die Surfactant-Produktion, ab der 35. SSW ist sie ausreichend. Frühgeborene vor der 35. SSW haben oft **Atemnotsyndrom (IRDS)** durch Surfactant-Mangel → Behandlung: Surfactant-Substitution über den Tubus + CPAP-Beatmung.

> **Merke:** Laplace-Gesetz: Δp = 2σ/r — kleinere Blasen haben höheren Innendruck! Surfactant senkt σ radiusabhängig → stabilisiert kleine Alveolen → verhindert Atelektase. Frühgeborene: Surfactant-Mangel → IRDS.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- Archimedisches Prinzip: F_A = ρ_Fluid · g · V_verdrängt
- Bedingungen für Schwimmen/Schweben/Sinken (Dichtevergleich)
- Laplace-Gesetz: Δp = 2σ/r und Konsequenzen für Alveolen
- Surfactant: Funktion, Bedeutung, Frühgeborene

**Häufige Prüfungsfragen:**
- "Wovon hängt die Auftriebskraft ab?" → Von ρ_Fluid, g und V_verdrängt — NICHT von ρ_Körper!
- "Was passiert bei Surfactant-Mangel?" → Kleine Alveolen kollabieren (Atelektase)
- "Warum schwimmt Eis auf Wasser?" → ρ_Eis < ρ_Wasser (Anomalie des Wassers)

**Typische Prüfungsfallen:**
- Auftriebskraft hängt NICHT von der Dichte des eingetauchten Körpers ab, sondern vom Fluid
- Laplace: KLEINER Radius → HÖHERER Innendruck (kontraintuitiv!)
- Surfactant SENKT die Oberflächenspannung — erhöht sie nicht
- Schwimmen: Die MITTLERE Dichte zählt (hohler Stahlkörper!)

---

## Zusammenfassung (ultrakompakt)

- **Archimedes**: F_A = ρ_Fluid · g · V_verdrängt (Auftrieb = Gewicht des verdrängten Fluids)
- **Schwimmen**: ρ_Körper < ρ_Fluid; Schweben: ρ_Körper = ρ_Fluid; Sinken: ρ_Körper > ρ_Fluid
- **Oberflächenspannung**: σ = F/l; Kohäsion innen vs. ungesättigte Kräfte an der Oberfläche
- **Kapillarität**: Adhäsion > Kohäsion → Steigen; umgekehrt → Sinken
- **Laplace**: Δp = 2σ/r — kleiner r → großer Innendruck → Kollapsrisiko
- **Surfactant**: senkt σ radiusabhängig, stabilisiert kleine Alveolen, verhindert Atelektase
- **Klinisch**: IRDS bei Frühgeborenen (Surfactant-Mangel → Atelektase → Surfactant-Substitution)`,

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

      selfTest: [
        {
          question:
            "Ein Körper mit einem Volumen von 0,5 m³ ist vollständig in Wasser (ρ = 1000 kg/m³) eingetaucht. Wie groß ist die Auftriebskraft? (g = 9,81 m/s²)",
          options: ["500 N", "4905 N", "9810 N", "490,5 N", "49 050 N"],
          correctIndex: 1,
          explanation:
            "F_A = ρ_Fluid · g · V_verdrängt = 1000 kg/m³ · 9,81 m/s² · 0,5 m³ = 4905 N. Die Auftriebskraft entspricht der Gewichtskraft von 0,5 m³ Wasser (= 500 kg). Beachte: Die Dichte des eingetauchten Körpers spielt für die Auftriebskraft keine Rolle — nur das verdrängte Fluidvolumen und die Fluiddichte zählen!",
          hints: [
            "Archimedisches Prinzip: F_A = ρ_Fluid · g · V_verdrängt — setze die Werte ein!",
            "1000 · 9,81 · 0,5 = ? Achte auf die Einheiten: kg/m³ · m/s² · m³ = N.",
          ],
          difficulty: 1,
          tags: ["archimedes", "auftrieb", "kraft"],
        },
        {
          question:
            "Ein Gegenstand hat die Dichte ρ = 800 kg/m³ und wird in Salzwasser (ρ = 1025 kg/m³) gelegt. Was passiert?",
          options: [
            "Er sinkt auf den Boden",
            "Er schwebt vollständig untergetaucht in beliebiger Tiefe",
            "Er schwimmt — ein Teil ragt aus dem Wasser",
            "Er löst sich im Salzwasser auf",
            "Die Auftriebskraft ist null",
          ],
          correctIndex: 2,
          explanation:
            "Da ρ_Körper (800 kg/m³) < ρ_Fluid (1025 kg/m³), schwimmt der Körper. Er taucht soweit ein, bis die Auftriebskraft gleich der Gewichtskraft ist: V_eingetaucht/V_gesamt = ρ_Körper/ρ_Fluid = 800/1025 ≈ 0,78 → ca. 78 % sind unter Wasser, 22 % ragen heraus.",
          hints: [
            "Vergleiche die Dichten: Ist ρ_Körper kleiner, gleich oder größer als ρ_Fluid?",
            "Schwimmen: ρ_Körper < ρ_Fluid — der Körper taucht nur teilweise ein.",
          ],
          difficulty: 1,
          tags: ["schwimmen", "dichte", "auftrieb"],
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
            "Laplace-Gesetz: Δp = 2σ/r. Das Verhältnis Δp₁/Δp₂ = (2σ/r₁)/(2σ/r₂) = r₂/r₁ = 0,15/0,05 = 3. Also ist der Innendruck in der kleinen Alveole dreimal so groß wie in der großen. Ohne Surfactant würde die kleine Alveole in die große hineinblasen → Atelektase. Surfactant gleicht dies aus, indem σ in kleinen Alveolen stärker gesenkt wird.",
          hints: [
            "Laplace: Δp = 2σ/r — wie verhält sich Δp, wenn r dreimal kleiner ist?",
            "Bilde das Verhältnis Δp₁/Δp₂ = r₂/r₁.",
          ],
          difficulty: 2,
          tags: ["laplace", "alveolen", "surfactant"],
        },
        {
          question: "Welche Funktion erfüllt Surfactant in den Lungenalveolen?",
          options: [
            "Es erhöht die Oberflächenspannung, damit die Alveolen stabil bleiben",
            "Es senkt die Oberflächenspannung radiusabhängig und verhindert Atelektase",
            "Es erhöht die Viskosität der Alveolarflüssigkeit",
            "Es wirkt als Antibiotikum gegen Lungenerreger",
            "Es transportiert Sauerstoff durch die Alveolarmembran",
          ],
          correctIndex: 1,
          explanation:
            "Surfactant (Surface Active Agent) ist eine Mischung aus Phospholipiden und Proteinen, produziert von Typ-II-Pneumozyten. Es SENKT die Oberflächenspannung an der Luft-Wasser-Grenzfläche der Alveolen — und zwar radiusabhängig: In kleinen Alveolen ist die Surfactant-Schicht dichter gepackt → stärkere Reduktion von σ → Druckausgleich zwischen verschieden großen Alveolen → Verhinderung von Atelektase (Alveolarkollaps).",
          hints: [
            "Das Wort 'Surfactant' kommt von 'Surface Active Agent' — es beeinflusst die Oberfläche.",
            "Denke an das Laplace-Gesetz: Kleine Alveolen haben hohen Innendruck — Surfactant gleicht das aus.",
          ],
          difficulty: 2,
          tags: ["surfactant", "alveolen", "atelektase"],
        },
        {
          question:
            "Ein Eisberg (ρ_Eis = 920 kg/m³) schwimmt im Meer (ρ_Meer = 1025 kg/m³). Welcher Anteil des Eisbergs befindet sich über der Wasseroberfläche?",
          options: ["Etwa 5 %", "Etwa 10 %", "Etwa 20 %", "Etwa 50 %", "Etwa 90 %"],
          correctIndex: 1,
          explanation:
            "Im Gleichgewicht gilt: F_A = F_G → ρ_Meer · g · V_unter = ρ_Eis · g · V_gesamt → V_unter/V_gesamt = ρ_Eis/ρ_Meer = 920/1025 ≈ 0,898. Unter Wasser befinden sich ca. 89,8 %, über Wasser also ca. 10,2 % ≈ 10 %. Das ist die berühmte 'Spitze des Eisbergs'!",
          hints: [
            "Im Schwimmgleichgewicht: V_unter/V_gesamt = ρ_Eis/ρ_Meer.",
            "920/1025 ≈ 0,90 → 90 % unter Wasser → 10 % über Wasser.",
          ],
          difficulty: 2,
          tags: ["archimedes", "schwimmen", "eisberg"],
        },
      ],
    },

    // === UK 3: Strömende Fluide ===
    {
      id: "ph-2-03",
      title: "Strömende Fluide: Kontinuität & Bernoulli",
      stichworte: [
        "Kontinuitätsgleichung",
        "Bernoulli-Gleichung",
        "Venturi-Effekt",
        "laminare Strömung",
        "turbulente Strömung",
        "Reynolds-Zahl",
        "Stenose",
        "Aneurysma",
        "Strömungsgeräusche",
        "Volumenstrom",
      ],
      diagram: "newton-forces",
      content: `## Einleitung

Warum hört man bei einer Gefäßstenose mit dem Stethoskop ein Strömungsgeräusch? Warum platzt ein Aneurysma leichter als ein normales Gefäß? Die Antworten liefern die **Kontinuitätsgleichung** und die **Bernoulli-Gleichung** — zwei Grundpfeiler der Strömungsmechanik, die im MedAT regelmäßig abgefragt werden.

**In diesem Kapitel lernst du:**
- die **Kontinuitätsgleichung** (A₁·v₁ = A₂·v₂) und ihre Konsequenzen für Blutgefäße
- die **Bernoulli-Gleichung** (p + ½ρv² + ρgh = const) und den **Venturi-Effekt**
- den Unterschied zwischen **laminarer** und **turbulenter** Strömung und die **Reynolds-Zahl**
- warum Stenosen Geräusche verursachen und Aneurysmen gefährlich sind
- klinische Anwendungen: Karotisstenose, Koronarangiografie, Herzklappendefekte

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:newton-forces}}

## Ideale Fluide und Volumenstrom

**Bevor wir die Strömungsgesetze betrachten,** definieren wir das Modell des **idealen Fluids**:
- **inkompressibel** (Dichte ρ = const; gilt gut für Flüssigkeiten, näherungsweise für langsame Gasströmungen)
- **reibungsfrei** (keine innere Reibung / Viskosität → wird in UK 4 ergänzt)
- **stationär** (Strömungsfeld zeitlich konstant)

Der **Volumenstrom** Q̇ (auch Q) gibt an, welches Fluidvolumen pro Zeiteinheit durch einen Querschnitt fließt:

**Q̇ = V/t = A · v** (Einheit: m³/s)

Dabei ist A die Querschnittsfläche und v die mittlere Strömungsgeschwindigkeit.

> **Merke:** Volumenstrom Q̇ = A · v (Einheit: m³/s). Für ein ideales Fluid: inkompressibel, reibungsfrei, stationär.

---

## Kontinuitätsgleichung

**Bisher haben wir gesehen:** den Volumenstrom Q̇ = A·v. **Da ein ideales Fluid inkompressibel ist,** kann Flüssigkeit weder „verschwinden" noch „entstehen" — was in ein Rohr hineinfließt, muss auch hinausfließen. Daraus folgt die **Kontinuitätsgleichung**:

**A₁ · v₁ = A₂ · v₂ = const**

**Konsequenz:** Verengt sich ein Rohr (A₂ < A₁), so muss die Strömungsgeschwindigkeit **zunehmen** (v₂ > v₁) — und umgekehrt.

**Rechenbeispiel — Aortenstenose:**
Die Aorta hat einen Querschnitt A₁ ≈ 4,5 cm² = 4,5 × 10⁻⁴ m² und die mittlere Blutgeschwindigkeit beträgt v₁ ≈ 0,3 m/s. Bei einer Stenose verengt sich der Querschnitt auf A₂ ≈ 1,5 cm² = 1,5 × 10⁻⁴ m².
v₂ = v₁ · (A₁/A₂) = 0,3 · (4,5/1,5) = 0,3 · 3 = **0,9 m/s**

Die Geschwindigkeit verdreifacht sich an der Stenose! Bei stärkerer Verengung kann v₂ so groß werden, dass die Strömung turbulent wird → **Strömungsgeräusche** (auskultierbar).

**Klinisch — Gesamtquerschnitt des Kapillarbetts:**
Die Aorta (A ≈ 4,5 cm²) verzweigt sich in Milliarden Kapillaren mit Gesamtquerschnitt A ≈ 4500 cm² → v_Kapillare = v_Aorta · (A_Aorta/A_Kapillaren) = 0,3 · (4,5/4500) = **0,0003 m/s ≈ 0,3 mm/s**. Diese extrem langsame Strömung ermöglicht den **Stoffaustausch** in den Kapillaren!

> **Merke:** Kontinuitätsgleichung: A₁·v₁ = A₂·v₂. Engere Stelle → höhere Geschwindigkeit. Kapillarbett: riesiger Gesamtquerschnitt → extrem langsame Strömung → optimaler Stoffaustausch.

---

## Bernoulli-Gleichung

**Bisher haben wir gesehen:** Die Kontinuität bestimmt die Geschwindigkeit. **Um den Zusammenhang zwischen Geschwindigkeit und Druck zu verstehen,** benötigen wir die **Bernoulli-Gleichung** (für ideale Fluide entlang einer Stromlinie):

**p + ½ρv² + ρgh = const**

Die drei Terme:
- **p** = statischer Druck (der „normale" Druck, den man mit einem Manometer misst)
- **½ρv²** = dynamischer Druck (Staudruck; entsteht durch die Bewegung)
- **ρgh** = hydrostatischer Druck (Schweredruck; Einfluss der Höhe)

**Kernaussage:** Wo die Geschwindigkeit v zunimmt, sinkt der statische Druck p — und umgekehrt!

**Venturi-Effekt:** Fließt ein Fluid durch eine Verengung (Venturi-Rohr), nimmt v zu (Kontinuität) und p sinkt (Bernoulli). Dieser Druckabfall kann genutzt werden, um ein zweites Fluid anzusaugen (Prinzip der Wasserstrahlpumpe, Zerstäuber).

**Rechenbeispiel — Druckabfall an einer Stenose:**
Ausgangszustand in der Aorta: v₁ = 0,3 m/s, p₁ = 100 mmHg ≈ 13 330 Pa. An der Stenose: v₂ = 0,9 m/s (aus dem Kontinuitätsbeispiel). Gleiche Höhe (h₁ = h₂):

p₂ = p₁ + ½ρ(v₁² − v₂²) = 13 330 + ½ · 1060 · (0,09 − 0,81) = 13 330 + 530 · (−0,72) = 13 330 − 382 ≈ **12 948 Pa ≈ 97 mmHg**

Der statische Druck sinkt um ca. **3 mmHg** an der Stenose. Bei stärkerer Stenose (z. B. v₂ = 3 m/s) wäre der Druckabfall erheblich größer.

> **Merke:** Bernoulli: p + ½ρv² + ρgh = const. Höhere Geschwindigkeit → niedrigerer statischer Druck (Venturi-Effekt). Der dynamische Druck ½ρv² beschreibt die kinetische Energie des Fluids pro Volumen.

---

## Laminare vs. turbulente Strömung

**Um das zu verstehen,** betrachten wir zwei grundlegend verschiedene Strömungsformen:

**Laminare Strömung:** Die Fluidteilchen bewegen sich in parallelen Schichten (Laminae); die Strömung ist geordnet und vorhersagbar. Im Rohr entsteht ein **parabolisches Geschwindigkeitsprofil** — maximal in der Mitte, null an der Wand (Haftbedingung).

**Turbulente Strömung:** Die Fluidteilchen bewegen sich chaotisch mit Wirbeln und Fluktuationen. Höherer Energieverlust, höherer Strömungswiderstand, **auskultierbare Geräusche** (Strömungsgeräusche, Stenosegeräusche).

Die **Reynolds-Zahl** Re (dimensionslos) entscheidet, welche Strömungsform vorliegt:

**Re = (ρ · v · d) / η**

Dabei ist d der Rohrdurchmesser und η die dynamische Viskosität.

| Reynolds-Zahl | Strömungsform |
|---------------|---------------|
| Re < 2300 | **laminar** |
| 2300 < Re < 4000 | Übergangsbereich |
| Re > 4000 | **turbulent** |

**Klinisch relevant:** Normalerweise ist die Blutströmung in den meisten Gefäßen **laminar**. Bei Stenosen steigt v → Re steigt → Übergang zu **turbulenter** Strömung → **Strömungsgeräusche** (z. B. Karotisstenose). Auch bei Anämie (niedrige Viskosität η) steigt Re und kann zu funktionellen Herzgeräuschen führen.

> **Merke:** Re = ρ·v·d/η. Re < 2300: laminar (geordnet, parabolisches Profil). Re > 4000: turbulent (chaotisch, Geräusche). Stenose → v↑ → Re↑ → turbulent → auskultierbare Geräusche.

---

## Klinische Anwendungen: Stenose und Aneurysma

**Stenose (Verengung):**
- A sinkt → v steigt (Kontinuität)
- p sinkt an der Engstelle (Bernoulli)
- Re steigt → turbulente Strömung → **Stenosegeräusche**
- Beispiel: Karotisstenose → Strömungsgeräusch über der A. carotis

**Aneurysma (Aussackung):**
- A steigt → v sinkt (Kontinuität)
- p steigt in der Aussackung (Bernoulli)
- Die Wandspannung σ = p·r/(2d) steigt mit dem Radius (Laplace!)
- **Teufelskreis**: Aussackung → höherer Druck → Wand dehnt sich weiter → noch größere Aussackung → **Ruptur**

> **Merke:** Stenose: A↓ → v↑ → p↓ → turbulent → Geräusche. Aneurysma: A↑ → v↓ → p↑ → Wandspannung↑ → Rupturrisiko! Beide erklärbar durch Kontinuität + Bernoulli.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- Kontinuitätsgleichung A₁·v₁ = A₂·v₂ und Rechenbeispiele
- Bernoulli-Gleichung p + ½ρv² + ρgh = const
- Reynolds-Zahl Re = ρ·v·d/η und kritischer Wert (≈ 2300)
- Klinische Anwendung: Stenose vs. Aneurysma

**Häufige Prüfungsfragen:**
- "Was passiert mit der Blutgeschwindigkeit bei Stenose?" → steigt (Kontinuität)
- "Warum hört man bei Stenosen Geräusche?" → turbulente Strömung (Re > 2300)
- "Was sagt die Bernoulli-Gleichung aus?" → p + ½ρv² + ρgh = const

**Typische Prüfungsfallen:**
- Kontinuität: Die Strömung wird bei Verengung SCHNELLER, nicht langsamer
- Bernoulli: Höhere Geschwindigkeit → NIEDRIGERER statischer Druck (kontraintuitiv!)
- Reynolds-Zahl: dimensionsLOS (keine Einheit!) — nicht verwechseln mit dem Druck
- Kapillarbett: trotz enormer Zahl der Kapillaren ist die GESAMTFLÄCHE viel größer → v sinkt dramatisch

---

## Zusammenfassung (ultrakompakt)

- **Volumenstrom**: Q̇ = A·v (m³/s); ideales Fluid: inkompressibel, reibungsfrei, stationär
- **Kontinuität**: A₁·v₁ = A₂·v₂ → Verengung → schneller; Erweiterung → langsamer
- **Bernoulli**: p + ½ρv² + ρgh = const → schnell = niedriger Druck (Venturi-Effekt)
- **Reynolds**: Re = ρ·v·d/η; < 2300 laminar, > 4000 turbulent; dimensionslos
- **Stenose**: v↑, p↓, Re↑ → turbulent → Geräusche
- **Aneurysma**: v↓, p↑, Wandspannung↑ (Laplace) → Rupturrisiko
- **Kapillarbett**: Gesamtquerschnitt ≈ 1000× Aorta → v ≈ 0,3 mm/s → optimaler Stoffaustausch`,

      lernziele: [
        "Die Kontinuitätsgleichung anwenden und Geschwindigkeitsänderungen bei Querschnittsänderungen berechnen können",
        "Die Bernoulli-Gleichung auf Strömungsprobleme anwenden und den Venturi-Effekt erklären können",
        "Laminare und turbulente Strömung unterscheiden und die Reynolds-Zahl berechnen können",
        "Stenose und Aneurysma mit Kontinuität und Bernoulli physikalisch erklären können",
      ],

      merksätze: [
        "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ — Verengung → höhere Geschwindigkeit",
        "Bernoulli: p + ½ρv² + ρgh = const — höhere Geschwindigkeit → niedrigerer statischer Druck",
        "Reynolds-Zahl Re = ρ·v·d/η — dimensionslos; Re < 2300 laminar, Re > 4000 turbulent",
        "Stenose: v↑ → p↓ → turbulent → Geräusche; Aneurysma: v↓ → p↑ → Wandspannung↑ → Rupturrisiko",
        "Kapillarbett: riesiger Gesamtquerschnitt → extrem langsame Strömung (0,3 mm/s) → optimaler Stoffaustausch",
      ],

      klinischerBezug:
        "Die Kontinuitätsgleichung erklärt, warum die Blutströmung in den Kapillaren (Gesamtquerschnitt ≈ 4500 cm²) extrem langsam ist (≈ 0,3 mm/s) — optimal für den Stoffaustausch. Bei einer Karotisstenose steigt die Blutgeschwindigkeit an der Engstelle, die Strömung wird turbulent und verursacht auskultierbare Geräusche. Die Duplexsonografie nutzt den Doppler-Effekt, um die Blutgeschwindigkeit an Stenosen zu messen und den Stenosegrad zu bestimmen. Aneurysmen (z. B. Bauchaortenaneurysma) sind lebensgefährlich: Der erhöhte Wanddruck und die zunehmende Wandspannung (Laplace) können zur Ruptur führen — ein chirurgischer Notfall mit hoher Mortalität.",

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
      ],
    },

    // === UK 4: Viskosität & Hagen-Poiseuille ===
    {
      id: "ph-2-04",
      title: "Viskosität & Hagen-Poiseuille",
      stichworte: [
        "dynamische Viskosität",
        "Newtonsches Fluid",
        "Hagen-Poiseuille-Gesetz",
        "Strömungswiderstand",
        "Nicht-Newtonsche Fluide",
        "Fåhræus-Lindqvist-Effekt",
        "Arteriosklerose",
        "Infusionsrate",
        "Blut als Fluid",
        "Scherverdünnung",
      ],
      diagram: "newton-forces",
      content: `## Einleitung

Warum sinkt der Blutfluss bei einer Arteriosklerose so dramatisch — selbst bei nur geringer Gefäßverengung? Die Antwort liegt im **Hagen-Poiseuille-Gesetz**: Der Volumenstrom hängt von der **vierten Potenz** des Radius ab. Eine Halbierung des Radius reduziert den Fluss auf **1/16** — das hat enorme klinische Konsequenzen!

**In diesem Kapitel lernst du:**
- was **dynamische Viskosität η** ist und wie sie die innere Reibung eines Fluids beschreibt
- den Unterschied zwischen **Newtonschen** und **nicht-Newtonschen** Fluiden (insbesondere Blut)
- das **Hagen-Poiseuille-Gesetz**: Q = π·r⁴·Δp / (8·η·L)
- den **Strömungswiderstand** R = 8ηL/(πr⁴) als Analogie zum elektrischen Widerstand
- klinische Konsequenzen: Arteriosklerose, Infusionsrate, Fåhræus-Lindqvist-Effekt

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:newton-forces}}

## Viskosität — innere Reibung von Fluiden

**In UK 3 haben wir ideale (reibungsfreie) Fluide betrachtet.** In der Realität haben alle Fluide eine **innere Reibung** — die **Viskosität**. Sie beschreibt den Widerstand, den ein Fluid einer Scherung (Verschiebung paralleler Schichten gegeneinander) entgegensetzt.

Die **dynamische Viskosität η** (eta) ist definiert über das **Newtonsche Reibungsgesetz**:

**τ = η · (dv/dy)**

Dabei ist:
- **τ** = Scherspannung (Kraft pro Fläche parallel zur Strömung, in Pa)
- **dv/dy** = Scherrate (Geschwindigkeitsgradient senkrecht zur Strömung, in s⁻¹)
- **η** = dynamische Viskosität (Einheit: **Pa·s** = kg·m⁻¹·s⁻¹)

Typische Werte:
| Fluid | Viskosität η (bei 37°C) |
|-------|-------------------------|
| Wasser | 0,7 × 10⁻³ Pa·s |
| Blutplasma | 1,2 × 10⁻³ Pa·s |
| Vollblut | 3–4 × 10⁻³ Pa·s |
| Honig | 2–10 Pa·s |
| Olivenöl | 0,08 Pa·s |

Die **kinematische Viskosität ν** (nü) = η/ρ (Einheit: m²/s) — tritt in der Reynolds-Zahl auf: Re = v·d/ν.

> **Merke:** Dynamische Viskosität η (Pa·s) beschreibt die innere Reibung. Wasser: η ≈ 10⁻³ Pa·s, Vollblut: η ≈ 3–4 × 10⁻³ Pa·s (also 3–4× zähflüssiger als Wasser). Die Viskosität sinkt mit steigender Temperatur (Fluide werden „dünnflüssiger").

---

## Newtonsche und nicht-Newtonsche Fluide

**Bisher haben wir gesehen:** η als Proportionalitätskonstante. **Das gilt aber nur für Newtonsche Fluide:**

**Newtonsches Fluid:** Die Viskosität η ist **konstant** — unabhängig von der Scherrate dv/dy. Die Scherspannung ist linear proportional zur Scherrate. Beispiele: Wasser, Blutplasma, Kochsalzlösung, die meisten Gase.

**Nicht-Newtonsches Fluid:** Die **Viskosität** hängt von der Scherrate ab. Es gibt verschiedene Typen:
- **Scherverdünnung** (Pseudoplastizität): η sinkt bei steigender Scherrate → Fluid wird „dünnflüssiger" bei Belastung. Beispiel: **Vollblut**, Ketchup, Farbe.
- **Scherverdickung** (Dilatanz): η steigt bei steigender Scherrate. Beispiel: Maisstärke-Wasser-Gemisch.
- **Bingham-Fluid**: Fließt erst ab einer Mindest-Scherspannung (Fließgrenze). Beispiel: Zahnpasta.

**Blut als nicht-Newtonsches Fluid:**
Vollblut ist **scherverdünnend**: Bei niedriger Scherrate (langsame Strömung) bilden die Erythrozyten sogenannte **Geldrollenaggregate** (Rouleaux) → hohe Viskosität. Bei hoher Scherrate (schnelle Strömung) richten sich die Erythrozyten aus und deformieren sich → niedrigere Viskosität.

> **Merke:** Newtonsche Fluide: η = const (Wasser, Plasma). Nicht-Newtonsche: η hängt von der Scherrate ab. Blut ist scherverdünnend: schnelle Strömung → niedrigere Viskosität (Erythrozyten richten sich aus).

---

## Hagen-Poiseuille-Gesetz

**Um den Volumenstrom in einem realen Rohr (mit Reibung) zu berechnen,** verwendet man das **Hagen-Poiseuille-Gesetz** (1838/1840). Es gilt für:
- **laminare** Strömung (Re < 2300)
- **Newtonsche** Fluide (η = const)
- **stationäre** Strömung in einem **zylindrischen** Rohr

**Q = (π · r⁴ · Δp) / (8 · η · L)**

Dabei ist:
- **Q** = Volumenstrom (m³/s)
- **r** = Innenradius des Rohres (m) — **Achtung: r⁴!**
- **Δp** = Druckdifferenz zwischen Ein- und Ausgang (Pa)
- **η** = dynamische Viskosität (Pa·s)
- **L** = Rohrlänge (m)

**Die entscheidende Größe ist r⁴:** Der Volumenstrom hängt von der **vierten Potenz** des Radius ab!

| Radius-Änderung | Fluss-Änderung |
|-----------------|----------------|
| r → r/2 (halbiert) | Q → Q/16 (auf 1/16!) |
| r → 0,8r (20% enger) | Q → 0,41·Q (auf 41%) |
| r → 2r (verdoppelt) | Q → 16·Q (16-fach!) |

**Rechenbeispiel — Arteriosklerose:**
Ein Gefäß mit r = 2 mm hat Q₁. Durch Arteriosklerose verengt sich der Radius auf r = 1,5 mm (25 % Reduktion).
Q₂/Q₁ = (r₂/r₁)⁴ = (1,5/2)⁴ = (0,75)⁴ = **0,316**
Der Blutfluss sinkt auf nur noch **31,6 %** — bei nur 25 % Radiusreduktion! Das erklärt, warum schon moderate Stenosen klinisch relevant werden.

> **Merke:** Hagen-Poiseuille: Q = π·r⁴·Δp/(8·η·L). Der Volumenstrom hängt von r⁴ ab! Halbierung des Radius → Q sinkt auf 1/16. Das ist DAS zentrale klinische Gesetz der Hämodynamik.

---

## Strömungswiderstand

**Bisher haben wir gesehen:** Q = π·r⁴·Δp/(8·η·L). **Analog zum elektrischen Widerstand** (U = R·I → I = U/R) definiert man den **Strömungswiderstand**:

**R = Δp / Q = 8·η·L / (π·r⁴)**

Die Analogie zum Ohmschen Gesetz ist vollständig:

| Strömung | Elektrik |
|----------|----------|
| Δp (Druckdifferenz) | U (Spannung) |
| Q (Volumenstrom) | I (Strom) |
| R = 8ηL/(πr⁴) | R (elektrischer Widerstand) |

**Reihen- und Parallelschaltung:** Bei hintereinander geschalteten Gefäßen addieren sich die Widerstände: R_gesamt = R₁ + R₂ + ... Bei parallelen Gefäßen: 1/R_gesamt = 1/R₁ + 1/R₂ + ...

**Klinisch — Totaler peripherer Widerstand (TPR):**
Der TPR beschreibt den Gesamtwiderstand des Gefäßsystems. Er wird hauptsächlich durch die **Arteriolen** bestimmt (kleine r → großes R). Vasokonstriktion (r↓) erhöht den TPR → Blutdruck steigt. Vasodilatation (r↑) senkt den TPR → Blutdruck sinkt.

> **Merke:** Strömungswiderstand R = 8ηL/(πr⁴) — analog zum Ohmschen Gesetz: Δp = R·Q. Arteriolen bestimmen den TPR. Vasokonstriktion → R↑ → Blutdruck↑.

---

## Fåhræus-Lindqvist-Effekt

**Um das zu verstehen,** muss man beachten, dass Blut kein Newtonsches Fluid ist. In **engen Gefäßen** (d < 300 µm) tritt ein besonderer Effekt auf: Die **scheinbare Viskosität** des Blutes **sinkt** mit abnehmendem Gefäßdurchmesser.

**Erklärung:** In engen Gefäßen wandern die Erythrozyten zur Gefäßmitte (axiale Migration) — es entsteht eine zellfreie Randschicht (Plasmaschicht) mit niedriger Viskosität. Da die Wandreibung hauptsächlich von der Randschicht bestimmt wird, sinkt der effektive Strömungswiderstand.

**Minimum** bei ca. d ≈ 7 µm (Kapillardurchmesser). Darunter steigt die Viskosität wieder an (Erythrozyten müssen sich verformen → höherer Widerstand).

> **Merke:** Fåhræus-Lindqvist-Effekt: In Gefäßen < 300 µm sinkt die scheinbare Blutviskosität (zellfreie Randschicht). Minimum bei d ≈ 7 µm (Kapillardurchmesser). Darunter steigt η wieder (Erythrozytenverformung).

---

## Klinische Anwendung: Infusionsrate

**Um die Infusionsrate zu optimieren,** wendet man Hagen-Poiseuille direkt an:

Q = π·r⁴·Δp / (8·η·L)

Für eine schnellere Infusion gibt es vier Stellschrauben:
1. **Größere Kanüle** (r↑): r⁴-Effekt! Eine 14G-Kanüle (r = 0,8 mm) liefert 16× mehr Fluss als eine 20G-Kanüle (r = 0,4 mm)
2. **Höherer Druck** (Δp↑): Infusionsbeutel höher hängen oder Druckinfusor
3. **Kürzere Leitung** (L↓): z. B. kürzere Kanüle
4. **Niedrigere Viskosität** (η↓): kristalloide (NaCl) fließen schneller als kolloide Lösungen oder Blutkonserven

**Rechenbeispiel:**
Infusion durch eine 18G-Kanüle (r = 0,6 mm = 6 × 10⁻⁴ m, L = 5 cm = 0,05 m), Δp = 10 kPa, η_NaCl ≈ 10⁻³ Pa·s:
Q = π · (6×10⁻⁴)⁴ · 10 000 / (8 · 10⁻³ · 0,05) = π · 1,296×10⁻¹³ · 10⁴ / (4×10⁻⁴) ≈ **1,02 × 10⁻⁵ m³/s ≈ 10,2 mL/s ≈ 612 mL/min**

In der Praxis ist der Fluss durch Turbulenzen und nicht-ideale Bedingungen deutlich niedriger, aber die r⁴-Abhängigkeit bleibt der dominierende Faktor.

> **Merke:** Infusionsrate optimieren: größere Kanüle (r⁴-Effekt!), höherer Druck, kürzere Leitung, niedrigere Viskosität. Im Schock: großlumige Zugänge (14G/16G) → maximaler Volumenstrom.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- Hagen-Poiseuille: Q = π·r⁴·Δp/(8·η·L) — insbesondere r⁴-Abhängigkeit!
- Strömungswiderstand R = 8ηL/(πr⁴) und Analogie zum Ohmschen Gesetz
- Arteriosklerose: r halbiert → Q auf 1/16
- Newtonsche vs. nicht-Newtonsche Fluide (Blut!)

**Häufige Prüfungsfragen:**
- "Um welchen Faktor sinkt Q bei Halbierung des Radius?" → auf 1/16 (= 1/2⁴)
- "Was ist die SI-Einheit der Viskosität?" → Pa·s (= kg·m⁻¹·s⁻¹)
- "Warum ist Blut ein nicht-Newtonsches Fluid?" → Viskosität hängt von Scherrate ab (Erythrozyten)

**Typische Prüfungsfallen:**
- r⁴, NICHT r² — der Fluss reagiert EXTREM empfindlich auf Radiusänderungen
- Hagen-Poiseuille gilt NUR für laminare Strömung in Newtonschen Fluiden (Blut → nur näherungsweise)
- Viskosität η sinkt mit steigender Temperatur (Blut wird „dünnflüssiger" bei Fieber)
- Fåhræus-Lindqvist: In engen Gefäßen sinkt η — das ist KEIN Widerspruch zu Hagen-Poiseuille
- Strömungswiderstand: Reihenschaltung addiert sich, Parallelschaltung nicht (wie Elektrik!)

---

## Zusammenfassung (ultrakompakt)

- **Viskosität η** (Pa·s): innere Reibung; Wasser ≈ 10⁻³ Pa·s, Blut ≈ 3–4 × 10⁻³ Pa·s
- **Newtonsch**: η = const (Wasser, Plasma); **nicht-Newtonsch**: η variiert (Blut = scherverdünnend)
- **Hagen-Poiseuille**: Q = π·r⁴·Δp/(8·η·L) — r halbiert → Q auf 1/16!
- **Strömungswiderstand**: R = 8ηL/(πr⁴); Analogie: Δp = R·Q (wie U = R·I)
- **TPR**: hauptsächlich durch Arteriolen bestimmt; Vasokonstriktion → R↑ → RR↑
- **Fåhræus-Lindqvist**: In engen Gefäßen (< 300 µm) sinkt die scheinbare Blutviskosität
- **Infusion**: r⁴-Effekt entscheidend → großlumige Kanüle (14G) im Schock
- **Arteriosklerose**: 25 % Radiusreduktion → Fluss auf nur 31,6 % — frühe klinische Relevanz`,

      lernziele: [
        "Die dynamische Viskosität definieren und Newtonsche von nicht-Newtonschen Fluiden unterscheiden können",
        "Das Hagen-Poiseuille-Gesetz anwenden und die r⁴-Abhängigkeit klinisch begründen können",
        "Den Strömungswiderstand berechnen und die Analogie zum Ohmschen Gesetz erklären können",
        "Den Fåhræus-Lindqvist-Effekt und seine Bedeutung für die Mikrozirkulation erklären können",
      ],

      merksätze: [
        "Dynamische Viskosität η (Pa·s) = innere Reibung; Blut ≈ 3–4× zähflüssiger als Wasser",
        "Hagen-Poiseuille: Q = π·r⁴·Δp/(8·η·L) — r⁴! Radius halbiert → Fluss auf 1/16",
        "Strömungswiderstand R = 8ηL/(πr⁴) — Ohm-Analogie: Δp = R·Q",
        "Blut ist nicht-Newtonsch (scherverdünnend): schnelle Strömung → niedrigere Viskosität",
        "Fåhræus-Lindqvist: In Gefäßen < 300 µm sinkt die scheinbare Blutviskosität (zellfreie Randschicht)",
      ],

      klinischerBezug:
        "Das Hagen-Poiseuille-Gesetz ist DIE zentrale Gleichung der Hämodynamik. Bei Arteriosklerose (atherosklerotische Plaques verengen das Gefäßlumen) sinkt der Blutfluss dramatisch: 25 % Radiusreduktion = 68 % Flussverlust. Deshalb werden Stenosen ab ca. 50 % Durchmesserreduktion (= 75 % Querschnittsreduktion) klinisch symptomatisch. In der Notfallmedizin gilt: Bei Schock großlumige Zugänge (14G oder 16G) legen — der r⁴-Effekt macht den Unterschied zwischen lebensrettender Volumentherapie und unzureichendem Zufluss. Der totale periphere Widerstand (TPR) wird zu ca. 80 % durch die Arteriolen bestimmt — deren Tonusregulation (Sympathikus, NO, Endothelin) ist der Hauptmechanismus der Blutdruckregulation.",

      selfTest: [
        {
          question:
            "Ein Gefäß hat den Radius r = 2 mm. Durch Arteriosklerose verengt sich der Radius auf r = 1 mm (Halbierung). Um welchen Faktor sinkt der Volumenstrom nach Hagen-Poiseuille?",
          options: [
            "Auf die Hälfte (Faktor 2)",
            "Auf ein Viertel (Faktor 4)",
            "Auf ein Achtel (Faktor 8)",
            "Auf ein Sechzehntel (Faktor 16)",
            "Auf ein Zweiunddreißigstel (Faktor 32)",
          ],
          correctIndex: 3,
          explanation:
            "Q ∝ r⁴. Wenn r sich halbiert: Q_neu/Q_alt = (r_neu/r_alt)⁴ = (1/2)⁴ = 1/16. Der Volumenstrom sinkt auf ein Sechzehntel! Das ist die dramatische klinische Konsequenz der r⁴-Abhängigkeit: Schon moderate Gefäßverengungen führen zu massiven Flussstörungen.",
          hints: [
            "Hagen-Poiseuille: Q ∝ r⁴. Was ergibt (½)⁴?",
            "½ · ½ · ½ · ½ = 1/16 — der Fluss sinkt um den Faktor 16!",
          ],
          difficulty: 1,
          tags: ["hagen-poiseuille", "arteriosklerose", "radius"],
        },
        {
          question: "Welche der folgenden Aussagen über Blut als Fluid ist korrekt?",
          options: [
            "Blut ist ein Newtonsches Fluid mit konstanter Viskosität",
            "Die Viskosität von Blut steigt bei schnellerer Strömung (Scherverdickung)",
            "Blut ist scherverdünnend — bei höherer Scherrate sinkt die Viskosität",
            "Die Viskosität von Blut ist gleich der von Wasser",
            "Die Viskosität von Blut ist unabhängig vom Hämatokrit",
          ],
          correctIndex: 2,
          explanation:
            "Blut ist ein nicht-Newtonsches, scherverdünnendes Fluid. Bei niedriger Scherrate (langsame Strömung) bilden Erythrozyten Geldrollenaggregate (Rouleaux) → hohe Viskosität. Bei hoher Scherrate (schnelle Strömung) richten sich die Erythrozyten aus und verformen sich → Viskosität sinkt. Die Blutviskosität (3–4 × 10⁻³ Pa·s) ist ca. 3–4× höher als die von Wasser und steigt mit dem Hämatokrit.",
          hints: [
            "Blut enthält Zellen (Erythrozyten) — kann das ein Newtonsches Fluid sein?",
            "Bei langsamer Strömung verklumpen Erythrozyten (Rouleaux) → hohe η; bei schneller richten sie sich aus → niedrigere η.",
          ],
          difficulty: 2,
          tags: ["blut", "viskosität", "nicht-newtonsch"],
        },
        {
          question: "In welcher Einheit wird die dynamische Viskosität η angegeben?",
          options: [
            "Pa (Pascal)",
            "Pa·s (Pascal-Sekunde)",
            "m²/s (Quadratmeter pro Sekunde)",
            "N/m (Newton pro Meter)",
            "kg/m³ (Kilogramm pro Kubikmeter)",
          ],
          correctIndex: 1,
          explanation:
            "Die dynamische Viskosität η hat die SI-Einheit Pa·s (Pascal-Sekunde) = kg·m⁻¹·s⁻¹. Sie ergibt sich aus τ = η·(dv/dy): η = τ/(dv/dy) = Pa/s⁻¹ = Pa·s. Die Einheit m²/s (Option C) ist die kinematische Viskosität ν = η/ρ. Die alte cgs-Einheit Poise (P) = 0,1 Pa·s wird manchmal noch verwendet: 1 cP = 10⁻³ Pa·s (die Viskosität von Wasser bei 20°C).",
          hints: [
            "η = τ/(dv/dy). Was sind die Einheiten von Scherspannung und Scherrate?",
            "τ in Pa, dv/dy in s⁻¹ → η = Pa/s⁻¹ = Pa·s.",
          ],
          difficulty: 1,
          tags: ["viskosität", "einheiten", "pa-s"],
        },
        {
          question:
            "Warum werden in der Notfallmedizin bei Schock großlumige Venenkatheter (z. B. 14G statt 20G) gelegt?",
          options: [
            "Größere Katheter sind stabiler und verrutschen weniger",
            "Der Volumenstrom hängt von r⁴ ab — ein doppelt so großer Radius liefert 16-fach mehr Fluss",
            "Größere Katheter haben eine geringere Infektionsrate",
            "Der Druck in größeren Kathetern ist höher",
            "Größere Katheter ermöglichen eine bessere Blutentnahme",
          ],
          correctIndex: 1,
          explanation:
            "Nach Hagen-Poiseuille ist Q ∝ r⁴. Ein 14G-Katheter hat etwa den doppelten Innendurchmesser eines 20G-Katheters → (2)⁴ = 16-fach höherer Volumenstrom! Im Schock ist schnelle Volumentherapie lebensrettend — daher der Standard: mindestens zwei großlumige periphere Venenzugänge (14G oder 16G). Die r⁴-Abhängigkeit ist der physikalische Grund, warum Kanülengröße DER entscheidende Faktor für die Infusionsgeschwindigkeit ist.",
          hints: [
            "Hagen-Poiseuille: Q ∝ r⁴ — doppelter Radius = 16-facher Fluss!",
            "Im Schock zählt jede Sekunde — großlumige Zugänge sind lebensrettend.",
          ],
          difficulty: 2,
          tags: ["hagen-poiseuille", "infusion", "notfallmedizin"],
        },
        {
          question:
            "Der Fåhræus-Lindqvist-Effekt beschreibt, dass die scheinbare Blutviskosität in engen Gefäßen (< 300 µm) sinkt. Was ist die Ursache?",
          options: [
            "Die Erythrozyten werden in engen Gefäßen zerstört (Hämolyse)",
            "Die Bluttemperatur steigt in engen Gefäßen durch Reibungswärme",
            "Erythrozyten wandern zur Gefäßmitte (axiale Migration) — eine zellfreie Plasmarandschicht entsteht",
            "Der Blutdruck ist in engen Gefäßen zu niedrig für normale Viskosität",
            "Engen Gefäße filtern die Erythrozyten heraus, sodass nur Plasma fließt",
          ],
          correctIndex: 2,
          explanation:
            "Der Fåhræus-Lindqvist-Effekt entsteht durch axiale Migration der Erythrozyten: In engen Gefäßen werden die Erythrozyten zur Gefäßmitte hin gedrängt, sodass eine zellfreie Randschicht (Plasmaschicht) entsteht. Diese Randschicht hat eine niedrige Viskosität (nur Plasma, η ≈ 1,2 × 10⁻³ Pa·s) und bestimmt maßgeblich den Wandreibungswiderstand. Ergebnis: niedrigere scheinbare Gesamtviskosität. Das Minimum liegt bei ca. d ≈ 7 µm (Kapillardurchmesser); darunter steigt η wieder, weil sich Erythrozyten stark verformen müssen.",
          hints: [
            "Was passiert mit Erythrozyten in engen Röhren? Sie wandern zur Mitte!",
            "Zellfreie Randschicht = niedrige Viskosität am Rand = geringerer Widerstand.",
          ],
          difficulty: 3,
          tags: ["fåhræus-lindqvist", "mikrozirkulation", "viskosität"],
        },
      ],
    },
  ],
};
