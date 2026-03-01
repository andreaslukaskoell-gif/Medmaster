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
      diagram: "coordinate-system",
      content: `<!-- DIAGRAM:coordinate-system -->

<!-- DIAGRAM:geometric-shapes -->

## Druck -- Wiederholung und Grundbegriff

**Bevor wir den Druck in Fluiden betrachten,** wiederholen wir die Definition: **Druck** ist definiert als Kraft pro Flaeche:

**p = F / A**

Die SI-Einheit ist **Pascal** (Pa = N/m2 = kg*m-1*s-2). In der Medizin wird der Blutdruck in **mmHg** (Millimeter Quecksilbersaeule) angegeben: **1 mmHg ca. 133,3 Pa**.

Weitere Druckeinheiten:
- 1 atm = 101 325 Pa = 760 mmHg (Atmosphaerendruck auf Meereshoehe)
- 1 bar = 100 000 Pa ca. 750 mmHg
- 1 cmH2O ca. 98,07 Pa (Beatmungsmedizin)

> **Merke:** Druck p = F/A hat die Einheit Pascal (Pa). In der Klinik: 1 mmHg ca. 133 Pa, 1 atm = 760 mmHg = 101 325 Pa.

---

## Hydrostatischer Druck (Schweredruck)


**p = rho * g * h**

Dabei ist:
- **rho** = Dichte der Fluessigkeit (in kg/m3; Wasser: rho ca. 1000 kg/m3, Blut: rho ca. 1060 kg/m3)
- **g** = Erdbeschleunigung (ca. 9,81 m/s2)
- **h** = Tiefe (Hoehe der Fluessigkeitssaeule in m)

Der **Gesamtdruck** in einer Tiefe h betraegt: **p_gesamt = p_0 + rho*g*h**, wobei p_0 der Druck an der Oberflaeche (z. B. Atmosphaerendruck) ist.

**Rechenbeispiel -- Schweredruck im Blutgefaess:**
Wie gross ist der hydrostatische Druckunterschied zwischen Herz und Fuss (Hoehendifferenz h ca. 1,3 m)?
Delta-p = rho_Blut * g * h = 1060 kg/m3 * 9,81 m/s2 * 1,3 m ca. **13 520 Pa ca. 101 mmHg**

Das bedeutet: Im Stehen ist der Blutdruck am Fuss um ca. **100 mmHg hoeher** als auf Herzhoehe! Im Kopf (ca. 0,4 m ueber dem Herzen) ist er entsprechend ca. 30 mmHg niedriger.

> **Merke:** p = rho*g*h -- der hydrostatische Druck steigt linear mit der Tiefe. Pro 10 m Wassersaeule nimmt der Druck um ca. 1 atm zu. Pro 1,3 m Blutsaeule (Herz -> Fuss) um ca. 100 mmHg.

---

## Hydrostatisches Paradoxon

**Um das zu verstehen,** muss man ein Prinzip begreifen, das zunaechst ueberraschend wirkt: Der Bodendruck in einem mit Fluessigkeit gefuellten Gefaess haengt **nur** von der Fuellhoehe h und der Dichte rho ab -- **nicht von der Gefaessform** und nicht vom Gesamtvolumen.

Drei verschieden geformte Gefaesse (schmal, breit, trichterfoermig), die mit derselben Fluessigkeit auf dieselbe Hoehe h gefuellt sind, haben exakt **denselben Bodendruck**: p = rho*g*h.

Das erscheint paradox, weil die Gewichtskraft der Fluessigkeit in den drei Gefaessen unterschiedlich ist. Die Erklaerung: Bei schraegen oder sich verengenden Waenden uebt die Fluessigkeit Normalkraefte auf die Wand aus, die den Unterschied kompensieren.

> **Merke:** Hydrostatisches Paradoxon: Der Bodendruck haengt nur von rho, g und h ab -- nicht von der Gefaessform oder dem Volumen!

---

## Pascalsches Prinzip


> Ein auf eine eingeschlossene Fluessigkeit ausguebter Druck breitet sich **gleichmaessig in alle Richtungen** aus und wirkt auf jede Flaecheneinheit der Gefaesswand gleich stark.

**Anwendung -- Die hydraulische Presse:**

An einem Kolben mit kleiner Flaeche A1 wird die Kraft F1 aufgebracht. Da der Druck p = F/A ueberall gleich ist, gilt:

**F1 / A1 = F2 / A2 -> F2 = F1 * (A2 / A1)**

Bei A2 = 10*A1 wird die Kraft **verzehnfacht** -- allerdings bewegt sich der grosse Kolben nur 1/10 des Weges (Energieerhaltung: W = F*s = const).

**Klinisch:** Das Pascalsche Prinzip erklaert, warum ein erhoehter intraabdomineller Druck (Druck im Bauchraum, z. B. bei Aszites, einer Fluessigkeitsansammlung im Bauchraum) gleichmaessig auf alle umliegenden Organe wirkt und die Zwerchfellbewegung einschraenken kann.

> **Merke:** Pascalsches Prinzip: Druck in einer eingeschlossenen Fluessigkeit breitet sich allseitig gleich aus. Hydraulische Presse: Kraftverstaerkung F2 = F1 * (A2/A1), aber s2 = s1 * (A1/A2).

---

## Manometer und Blutdruckmessung nach Riva-Rocci

**Um den Druck zu messen,** verwendet man Manometer. In der Medizin ist das **Quecksilber-Manometer** (Sphygmomanometer, griech. Pulsmesser) nach **Riva-Rocci** historisch bedeutend:

Die Manschette wird am Oberarm auf **Herzhoehe** aufgepumpt, bis die Arteria brachialis (Oberarmarterie) komprimiert ist. Beim langsamen Ablassen des Drucks werden mit dem Stethoskop die **Korotkow-Geraeusche** (pulssynchrone Stroemungsgeraeusche) auskultiert (abgehoert):
- **Systolischer Wert**: erstes hoerbares Klopfen (Blut presst sich durch die Stenose, d. h. Gefaessverengung)
- **Diastolischer Wert**: Verschwinden der Geraeusche (freier Blutfluss)

**Warum Herzhoehe?** Liegt die Manschette 15 cm unter Herzhoehe, ist der gemessene Druck um Delta-p = rho*g*h = 1060 * 9,81 * 0,15 ca. 1561 Pa ca. **12 mmHg zu hoch**. Bei der Diagnose einer Hypertonie (Bluthochdruck, Grenzwert 140/90 mmHg) kann das den Unterschied zwischen "normal" und "behandlungsbeduertig" ausmachen!

> **Merke:** Blutdruckmessung immer auf Herzhoehe! Jeder Zentimeter Abweichung verfaelscht das Ergebnis um ca. 0,8 mmHg (ca. rho_Blut * g * 0,01 m / 133 Pa/mmHg).`,

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
      diagram: "newton-forces",
      content: `<!-- DIAGRAM:newton-forces -->

<!-- DIAGRAM:geometric-shapes -->

## Archimedisches Prinzip

**Ein in ein Fluid eingetauchter Koerper** erfaehrt eine nach oben gerichtete Kraft -- die **Auftriebskraft** F_A. Diese ist gleich der Gewichtskraft des verdraengten Fluids:

**F_A = rho_Fluid * g * V_verdraengt**

Dabei ist V_verdraengt das Volumen des eingetauchten Koerperteils. Die Auftriebskraft wirkt im **Schwerpunkt** des verdraengten Fluidvolumens (Druckpunkt).

**Herleitung (vereinfacht):** Der Druck an der Unterseite des Koerpers ist groesser als an der Oberseite (p = rho*g*h nimmt mit der Tiefe zu). Die resultierende Druckdifferenz ergibt eine Nettokraft nach oben -- das ist die Auftriebskraft.

> **Merke:** Archimedisches Prinzip: Die Auftriebskraft F_A = rho_Fluid * g * V_verdraengt entspricht der Gewichtskraft des verdraengten Fluids. Sie haengt NICHT von der Dichte des eingetauchten Koerpers ab, sondern von der Dichte des Fluids und dem verdraengten Volumen.

---

## Schwimmen, Schweben und Sinken


| Bedingung | Verhalten | Beispiel |
|-----------|-----------|----------|
| rho_Koerper < rho_Fluid | **Schwimmen** (ragt teilweise heraus) | Holz auf Wasser, Eisberg |
| rho_Koerper = rho_Fluid | **Schweben** (in jeder Tiefe stabil) | U-Boot (reguliert Ballast) |
| rho_Koerper > rho_Fluid | **Sinken** (bis zum Boden) | Stein in Wasser |

**Warum schwimmt ein Stahlschiff?** Stahl hat rho ca. 7800 kg/m3 (viel dichter als Wasser). Aber das Schiff ist hohl -- die **mittlere Dichte** von Stahl + eingeschlossener Luft ist kleiner als rho_Wasser. Es verdraengt genug Wasser, damit F_A = F_G.

**Rechenbeispiel -- Eisberg:**
Eis hat rho_Eis ca. 917 kg/m3, Meerwasser rho_Meer ca. 1025 kg/m3.
Anteil ueber Wasser: 1 - rho_Eis/rho_Meer = 1 - 917/1025 ca. 0,105 -> ca. **10,5 %** ragen heraus.
Also schwimmen ca. **89,5 %** unter Wasser -- "Spitze des Eisbergs"!

> **Merke:** Schwimmen: rho_Koerper < rho_Fluid; Schweben: rho_Koerper = rho_Fluid; Sinken: rho_Koerper > rho_Fluid. Die mittlere Dichte zaehlt -- ein hohler Stahlkoerper kann schwimmen!

---

## Oberflaechenspannung

**Um das zu verstehen,** muss man die molekularen Kraefte an der Oberflaeche einer Fluessigkeit betrachten. Molekuele im Inneren werden allseitig von Nachbarmolekuelen angezogen (Kohaesionskraefte, d. h. Anziehungskraefte zwischen gleichartigen Molekuelen, heben sich auf). An der **Oberflaeche** fehlen die Nachbarn nach oben -- es entsteht eine resultierende Kraft ins Innere. Die Oberflaeche verhaelt sich wie eine **gespannte elastische Haut**.

Die **Oberflaechenspannung sigma** ist definiert als Kraft pro Laenge entlang einer gedachten Linie auf der Oberflaeche:

**sigma = F / l** (Einheit: N/m = J/m2)

Typische Werte:
- Wasser (20 Grad C): sigma ca. 0,073 N/m
- Blutplasma: sigma ca. 0,050 N/m
- Surfactant-Loesung: sigma ca. 0,025 N/m (stark erniedrigt!)

**Kapillaritaet:** In engen Roehren (Kapillaren) steigt oder sinkt die Fluessigkeit je nach dem Verhaeltnis von Adhaesions- (Fluid-Wand) zu Kohaesionskraeften (Fluid-Fluid):
- **Adhaesion > Kohaesion** -> konkaver Meniskus (nach innen gewoelbte Fluessigkeitsoberflaeche) -> Fluessigkeit steigt (Wasser in Glasroehre)
- **Kohaesion > Adhaesion** -> konvexer Meniskus -> Fluessigkeit sinkt (Quecksilber in Glasroehre)

> **Merke:** Oberflaechenspannung sigma = F/l entsteht durch unausgeglichene Kohaesionskraefte an der Oberflaeche. Kapillaritaet: Adhaesion > Kohaesion -> Steigen; Kohaesion > Adhaesion -> Sinken.

---

## Laplace-Gesetz und Surfactant


Fuer eine Kugelblase mit einer Wand (z. B. Alveole, Lungenblaeschen):

**Delta-p = 2*sigma / r**

Dabei ist:
- **Delta-p** = Druckdifferenz (innen - aussen)
- **sigma** = Oberflaechenspannung
- **r** = Radius der Blase

**Entscheidende Konsequenz:** Je **kleiner** der Radius r, desto **groesser** der Innendruck Delta-p. Kleine Alveolen haetten ohne Gegenmassnahme einen viel hoeheren Innendruck als grosse -> sie wuerden in die grossen Alveolen "hineinblasen" -> **Kollaps** der kleinen Alveolen (= **Atelektase**).

**Surfactant (Surface Active Agent):**
Typ-II-Pneumozyten (Alveolarepithelzellen) produzieren **Surfactant** -- eine Mischung aus Phospholipiden und Proteinen. Surfactant:
- **senkt die Oberflaechenspannung** an der Luft-Wasser-Grenzflaeche der Alveolen
- wirkt **radiusabhaengig**: In kleinen Alveolen (Surfactant-Molekuele dichter gepackt) ist sigma staerker reduziert als in grossen -> **Druckausgleich** zwischen verschieden grossen Alveolen
- verhindert **Atelektase** (Alveolarkollaps)

**Klinisch -- Fruehgeborene:** Ab der ca. 24. SSW (Schwangerschaftswoche) beginnt die Surfactant-Produktion, ab der 35. SSW ist sie ausreichend. Fruehgeborene vor der 35. SSW haben oft **Atemnotsyndrom (IRDS)** durch Surfactant-Mangel -> Behandlung: Surfactant-Substitution ueber den Tubus (Beatmungsschlauch) + CPAP-Beatmung (Continuous Positive Airway Pressure, kontinuierlicher Atemwegsuebberdruck).

> **Merke:** Laplace-Gesetz: Delta-p = 2*sigma/r -- kleinere Blasen haben hoeheren Innendruck! Surfactant senkt sigma radiusabhaengig -> stabilisiert kleine Alveolen -> verhindert Atelektase. Fruehgeborene: Surfactant-Mangel -> IRDS.`,

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
      id: "ph-fluid-03",
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
      content: `<!-- DIAGRAM:newton-forces -->

<!-- DIAGRAM:coordinate-system -->

## Ideale Fluide und Volumenstrom

**Bevor wir die Stroemungsgesetze betrachten,** definieren wir das Modell des **idealen Fluids**:
- **inkompressibel** (Dichte rho = const; gilt gut fuer Fluessigkeiten, naeherungsweise fuer langsame Gasstroemungen)
- **reibungsfrei** (keine innere Reibung / Viskositaet -> wird in UK 4 ergaenzt)
- **stationaer** (Stroemungsfeld zeitlich konstant)

Der **Volumenstrom** Q gibt an, welches Fluidvolumen pro Zeiteinheit durch einen Querschnitt fliesst:

**Q = V/t = A * v** (Einheit: m3/s)

Dabei ist A die Querschnittsflaeche und v die mittlere Stroemungsgeschwindigkeit.

> **Merke:** Volumenstrom Q = A * v (Einheit: m3/s). Fuer ein ideales Fluid: inkompressibel, reibungsfrei, stationaer.

---

## Kontinuitaetsgleichung


**A1 * v1 = A2 * v2 = const**

**Konsequenz:** Verengt sich ein Rohr (A2 < A1), so muss die Stroemungsgeschwindigkeit **zunehmen** (v2 > v1) -- und umgekehrt.

**Rechenbeispiel -- Aortenstenose:**
Die Aorta hat einen Querschnitt A1 ca. 4,5 cm2 = 4,5 x 10-4 m2 und die mittlere Blutgeschwindigkeit betraegt v1 ca. 0,3 m/s. Bei einer Stenose verengt sich der Querschnitt auf A2 ca. 1,5 cm2 = 1,5 x 10-4 m2.
v2 = v1 * (A1/A2) = 0,3 * (4,5/1,5) = 0,3 * 3 = **0,9 m/s**

Die Geschwindigkeit verdreifacht sich an der Stenose! Bei staerkerer Verengung kann v2 so gross werden, dass die Stroemung turbulent wird -> **Stroemungsgeraeusche** (auskultierbar).

**Klinisch -- Gesamtquerschnitt des Kapillarbetts:**
Die Aorta (A ca. 4,5 cm2) verzweigt sich in Milliarden Kapillaren mit Gesamtquerschnitt A ca. 4500 cm2 -> v_Kapillare = v_Aorta * (A_Aorta/A_Kapillaren) = 0,3 * (4,5/4500) = **0,0003 m/s ca. 0,3 mm/s**. Diese extrem langsame Stroemung ermoeglicht den **Stoffaustausch** in den Kapillaren!

> **Merke:** Kontinuitaetsgleichung: A1*v1 = A2*v2. Engere Stelle -> hoehere Geschwindigkeit. Kapillarbett: riesiger Gesamtquerschnitt -> extrem langsame Stroemung -> optimaler Stoffaustausch.

---

## Bernoulli-Gleichung


**p + 0,5*rho*v2 + rho*g*h = const**

Die drei Terme:
- **p** = statischer Druck (der "normale" Druck, den man mit einem Manometer misst)
- **0,5*rho*v2** = dynamischer Druck (Staudruck; entsteht durch die Bewegung)
- **rho*g*h** = hydrostatischer Druck (Schweredruck; Einfluss der Hoehe)

**Kernaussage:** Wo die Geschwindigkeit v zunimmt, sinkt der statische Druck p -- und umgekehrt!

**Venturi-Effekt:** Fliesst ein Fluid durch eine Verengung (Venturi-Rohr), nimmt v zu (Kontinuitaet) und p sinkt (Bernoulli). Dieser Druckabfall kann genutzt werden, um ein zweites Fluid anzusaugen (Prinzip der Wasserstrahlpumpe, Zerstaeuber).

**Rechenbeispiel -- Druckabfall an einer Stenose:**
Ausgangszustand in der Aorta: v1 = 0,3 m/s, p1 = 100 mmHg ca. 13 330 Pa. An der Stenose: v2 = 0,9 m/s (aus dem Kontinuitaetsbeispiel). Gleiche Hoehe (h1 = h2):

p2 = p1 + 0,5*rho*(v1-2 - v2-2) = 13 330 + 0,5 * 1060 * (0,09 - 0,81) = 13 330 + 530 * (-0,72) = 13 330 - 382 ca. **12 948 Pa ca. 97 mmHg**

Der statische Druck sinkt um ca. **3 mmHg** an der Stenose. Bei staerkerer Stenose (z. B. v2 = 3 m/s) waere der Druckabfall erheblich groesser.

> **Merke:** Bernoulli: p + 0,5*rho*v2 + rho*g*h = const. Hoehere Geschwindigkeit -> niedrigerer statischer Druck (Venturi-Effekt). Der dynamische Druck 0,5*rho*v2 beschreibt die kinetische Energie des Fluids pro Volumen.

---

## Laminare vs. turbulente Stroemung

**Um das zu verstehen,** betrachten wir zwei grundlegend verschiedene Stroemungsformen:

**Laminare Stroemung:** Die Fluidteilchen bewegen sich in parallelen Schichten (lat. Laminae, Blaettchen); die Stroemung ist geordnet und vorhersagbar. Im Rohr entsteht ein **parabolisches Geschwindigkeitsprofil** -- maximal in der Mitte, null an der Wand (Haftbedingung).

**Turbulente Stroemung:** Die Fluidteilchen bewegen sich chaotisch mit Wirbeln und Fluktuationen. Hoeherer Energieverlust, hoeherer Stroemungswiderstand, **auskultierbare Geraeusche** (Stroemungsgeraeusche, Stenosegeraeusche).

Die **Reynolds-Zahl** Re (dimensionslos) entscheidet, welche Stroemungsform vorliegt:

**Re = (rho * v * d) / eta**

Dabei ist d der Rohrdurchmesser und eta die dynamische Viskositaet.

| Reynolds-Zahl | Stroemungsform |
|---------------|---------------|
| Re < 2300 | **laminar** |
| 2300 < Re < 4000 | Uebergangsbereich |
| Re > 4000 | **turbulent** |

**Klinisch relevant:** Normalerweise ist die Blutstroemung in den meisten Gefaessen **laminar**. Bei Stenosen steigt v -> Re steigt -> Uebergang zu **turbulenter** Stroemung -> **Stroemungsgeraeusche** (z. B. Karotisstenose). Auch bei Anaemie (Blutarmut, niedrige Viskositaet eta) steigt Re und kann zu funktionellen Herzgeraeuchen fuehren.

> **Merke:** Re = rho*v*d/eta. Re < 2300: laminar (geordnet, parabolisches Profil). Re > 4000: turbulent (chaotisch, Geraeusche). Stenose -> v steigt -> Re steigt -> turbulent -> auskultierbare Geraeusche.

---

## Klinische Anwendungen: Stenose und Aneurysma

**Stenose (Verengung):**
- A sinkt -> v steigt (Kontinuitaet)
- p sinkt an der Engstelle (Bernoulli)
- Re steigt -> turbulente Stroemung -> **Stenosegeraeusche**
- Beispiel: Karotisstenose (Verengung der Halsschlagader) -> Stroemungsgeraeusch ueber der A. carotis

**Aneurysma (Aussackung):**
- A steigt -> v sinkt (Kontinuitaet)
- p steigt in der Aussackung (Bernoulli)
- Die Wandspannung sigma = p*r/(2d) steigt mit dem Radius (Laplace!)
- **Teufelskreis**: Aussackung -> hoeherer Druck -> Wand dehnt sich weiter -> noch groessere Aussackung -> **Ruptur** (Gefaessriss)

> **Merke:** Stenose: A sinkt -> v steigt -> p sinkt -> turbulent -> Geraeusche. Aneurysma: A steigt -> v sinkt -> p steigt -> Wandspannung steigt -> Rupturrisiko! Beide erklaerbar durch Kontinuitaet + Bernoulli.`,

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
      ],
    },

    // === UK 4: Viskosität & Hagen-Poiseuille ===
    {
      id: "ph-fluid-04",
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
      diagram: "circuit",
      content: `<!-- DIAGRAM:circuit -->

<!-- DIAGRAM:coordinate-system -->

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


**Newtonsches Fluid:** Die Viskosität η ist **konstant** — unabhängig von der Scherrate dv/dy. Die Scherspannung ist linear proportional zur Scherrate. Beispiele: Wasser, Blutplasma, Kochsalzlösung, die meisten Gase.

**Nicht-Newtonsches Fluid:** Die **Viskosität** hängt von der Scherrate ab. Es gibt verschiedene Typen:
- **Scherverdünnung** (Pseudoplastizität, scheinbare Fliessfaehigkeit): η sinkt bei steigender Scherrate → Fluid wird „dünnflüssiger" bei Belastung. Beispiel: **Vollblut**, Ketchup, Farbe.
- **Scherverdickung** (Dilatanz, Aufweitung unter Belastung): η steigt bei steigender Scherrate. Beispiel: Maisstärke-Wasser-Gemisch.
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


**R = Δp / Q = 8·η·L / (π·r⁴)**

Die Analogie zum Ohmschen Gesetz ist vollständig:

| Strömung | Elektrik |
|----------|----------|
| Δp (Druckdifferenz) | U (Spannung) |
| Q (Volumenstrom) | I (Strom) |
| R = 8ηL/(πr⁴) | R (elektrischer Widerstand) |

**Reihen- und Parallelschaltung:** Bei hintereinander geschalteten Gefäßen addieren sich die Widerstände: R_gesamt = R₁ + R₂ + ... Bei parallelen Gefäßen: 1/R_gesamt = 1/R₁ + 1/R₂ + ...

**Klinisch — Totaler peripherer Widerstand (TPR):**
Der TPR beschreibt den Gesamtwiderstand des Gefäßsystems. Er wird hauptsächlich durch die **Arteriolen** (kleinste Arterien) bestimmt (kleine r → großes R). Vasokonstriktion (Gefaessverengung, r↓) erhöht den TPR → Blutdruck steigt. Vasodilatation (r↑) senkt den TPR → Blutdruck sinkt.

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

> **Merke:** Infusionsrate optimieren: größere Kanüle (r⁴-Effekt!), höherer Druck, kürzere Leitung, niedrigere Viskosität. Im Schock: großlumige Zugänge (14G/16G) → maximaler Volumenstrom.`,

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

      altfrage: {
        question:
          "Der Radius einer Arteriole wird durch Vasokonstriktion auf die Hälfte reduziert. Um welchen Faktor ändert sich der Strömungswiderstand nach Hagen-Poiseuille?\n\nA) Der Widerstand verdoppelt sich (Faktor 2).\nB) Der Widerstand vervierfacht sich (Faktor 4).\nC) Der Widerstand steigt auf das 8-Fache (Faktor 8).\nD) Der Widerstand steigt auf das 16-Fache (Faktor 16).\nE) Der Widerstand bleibt gleich, da die Viskosität unverändert ist.",
        answer:
          "Richtig ist D. Nach Hagen-Poiseuille ist der Strömungswiderstand R = 8·η·L / (π·r⁴), also umgekehrt proportional zur vierten Potenz des Radius. Bei Halbierung des Radius: R_neu = R_alt / (0,5)⁴ = R_alt / 0,0625 = 16 · R_alt. Der Widerstand steigt auf das 16-Fache, der Volumenstrom sinkt auf 1/16. A, B und C unterschätzen den r⁴-Effekt. E ist falsch, da der Radius den Widerstand dominiert (vierte Potenz).",
      },

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
