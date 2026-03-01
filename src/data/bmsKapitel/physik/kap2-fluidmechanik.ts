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
      content: `## Einleitung

Stell dir vor, du tauchst im Schwimmbad auf den Boden. Je tiefer du tauchst, desto staerker drueckt das Wasser auf deine Ohren. Das ist der **hydrostatische Druck** -- und genau dieses Prinzip erklaert, warum Druck in Fluessigkeiten mit der Tiefe zunimmt.

**In diesem Kapitel lernst du:**
- wie der **Druck in ruhenden Fluessigkeiten** von Tiefe, Dichte und Schwerkraft abhaengt
- warum die **Form des Gefaesses** fuer den Bodendruck keine Rolle spielt
- wie sich Druck in einer eingeschlossenen Fluessigkeit **gleichmaessig in alle Richtungen** ausbreitet
- wie man Druck misst und warum die **Messhoehe** wichtig ist
- welche Formeln du fuer die Pruefung brauchst

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:geometric-shapes}}

## Was ist Druck?

**Druck** ist Kraft pro Flaeche: **p = F / A**. Die Einheit ist **Pascal** (Pa). Stell dir vor, du stehst auf Schnee: Mit Schneeschuhen (grosse Flaeche) sinkst du weniger ein als mit Stoekelschuhen (kleine Flaeche) -- bei gleicher Kraft (deinem Gewicht) ist der Druck kleiner.

In der Medizin wird der Blutdruck in **mmHg** gemessen. Wichtige Umrechnung: **1 mmHg = 133 Pa**. Der normale Luftdruck betraegt 1 atm = 760 mmHg.

> **Merke:** Druck p = F/A (Einheit: Pa). In der Medizin: 1 mmHg = 133 Pa. Normaler Luftdruck: 1 atm = 760 mmHg.

---

## Druck in Fluessigkeiten: p = rho * g * h

Wenn du im Schwimmbad 2 Meter tief tauchst, drueckt die Wassersaeule ueber dir auf dich. Je tiefer, desto mehr Wasser liegt ueber dir, desto groesser der Druck:

**p = rho * g * h**

- **rho** = Dichte der Fluessigkeit (Wasser: 1000 kg/m3)
- **g** = Erdbeschleunigung (9,81 m/s2)
- **h** = Tiefe in Metern

Pro 10 Meter Wassertiefe steigt der Druck um etwa 1 atm. Der **Gesamtdruck** ist: p_gesamt = Luftdruck + rho * g * h.

**Beispiel:** In 5 m Tiefe: p = 1000 * 9,81 * 5 = 49 050 Pa. Dazu kommt noch der Luftdruck von 101 325 Pa.

> **Merke:** p = rho * g * h -- der Druck steigt gleichmaessig mit der Tiefe. Pro 10 m Wasser kommt rund 1 atm dazu.

---

## Hydrostatisches Paradoxon

Drei verschiedene Gefaesse -- ein schmales, ein breites und ein trichterfoermiges -- sind gleich hoch mit Wasser gefuellt. Der Bodendruck ist in allen drei Gefaessen **exakt gleich**! Nur die Hoehe zaehlt, nicht die Form und nicht die Wassermenge.

> **Merke:** Der Bodendruck haengt nur von rho, g und h ab -- nicht von der Gefaessform oder dem Volumen!

---

## Pascalsches Prinzip

Drueckst du auf eine eingeschlossene Fluessigkeit, breitet sich der Druck **gleichmaessig in alle Richtungen** aus. Das nutzt die **hydraulische Presse**: Du drueckst mit wenig Kraft auf einen kleinen Kolben. Weil der Druck ueberall gleich ist, entsteht am grossen Kolben eine viel groessere Kraft:

**F2 = F1 * (A2 / A1)**

Ist der grosse Kolben 10-mal so gross, wird die Kraft verzehnfacht. Dafuer bewegt sich der grosse Kolben nur 1/10 so weit -- Energie bleibt erhalten.

> **Merke:** Druck in eingeschlossener Fluessigkeit breitet sich allseitig gleich aus. Hydraulische Presse: groessere Flaeche = groessere Kraft, aber kuerzerer Weg.

---

## Blutdruckmessung und Messhoehe

Beim Blutdruckmessen muss die Manschette auf Herzhoehe sitzen. Liegt sie tiefer, misst du einen zu hohen Wert -- weil die Blutsaeule zusaetzlichen Druck erzeugt. Pro 10 cm Hoehenunterschied sind das etwa 8 mmHg Fehler. Das kann ueber die Diagnose "Bluthochdruck" entscheiden!

> **Merke:** Blutdruckmessung immer auf Herzhoehe! Jeder cm Abweichung verfaelscht um ca. 0,8 mmHg.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Formel p = rho * g * h anwenden
- Hydrostatisches Paradoxon: Bodendruck unabhaengig von Gefaessform
- Pascalsches Prinzip und hydraulische Presse
- Umrechnung mmHg und Pa (1 mmHg = 133 Pa)

**Typische Fallen:**
- Bodendruck haengt NICHT vom Volumen ab
- Hydraulische Presse verstaerkt die Kraft, aber NICHT die Energie
- Messhoehe bei Blutdruck beachten

---

## Zusammenfassung

- **Druck in Fluessigkeiten**: p = rho * g * h -- steigt linear mit der Tiefe
- **Paradoxon**: Nur die Hoehe zaehlt, nicht die Gefaessform
- **Pascal**: Druck breitet sich allseitig aus -- hydraulische Presse verstaerkt Kraft
- **Blutdruck**: Immer auf Herzhoehe messen
- **Einheiten**: 1 mmHg = 133 Pa; 1 atm = 760 mmHg`,

      contentExtended: `## Einleitung

Warum muss die Blutdruckmanschette immer auf Herzhoehe angelegt werden? Die Antwort liefert die **Hydrostatik** -- die Physik des Drucks in ruhenden Fluessigkeiten. Jeder Zentimeter Hoehenunterschied erzeugt einen messbaren Druckunterschied, der in der Medizin ueber korrekte oder falsche Diagnosen entscheiden kann.

**In diesem Kapitel lernst du:**
- wie der **hydrostatische Druck** (Schweredruck) von Tiefe, Dichte und Erdbeschleunigung abhaengt: p = rho*g*h
- warum die **Gefaessform** fuer den Bodendruck keine Rolle spielt (Hydrostatisches Paradoxon)
- wie das **Pascalsche Prinzip** die gleichmaessige Druckausbreitung in Fluiden beschreibt -- und warum die hydraulische Presse funktioniert
- wie ein **Manometer** den Druck misst und wie die **Riva-Rocci-Methode** in der Blutdruckmessung funktioniert
- warum die Messung auf **Herzhoehe** entscheidend ist und welche Fehler bei falschem Messpunkt entstehen

---

{{DIAGRAM:coordinate-system}}

{{DIAGRAM:geometric-shapes}}

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

**Bisher haben wir gesehen:** Druck als Kraft pro Flaeche. **In einer ruhenden Fluessigkeit** entsteht allein durch das Gewicht der darueber liegenden Fluessigkeitssaeule ein Druck -- der **hydrostatische Druck** (Schweredruck):

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

**Bisher haben wir gesehen:** Schweredruck und Hydrostatisches Paradoxon. **Ein weiteres fundamentales Gesetz** der Hydrostatik ist das **Pascalsche Prinzip** (Blaise Pascal, 1653):

> Ein auf eine eingeschlossene Fluessigkeit ausguebter Druck breitet sich **gleichmaessig in alle Richtungen** aus und wirkt auf jede Flaecheneinheit der Gefaesswand gleich stark.

**Anwendung -- Die hydraulische Presse:**

An einem Kolben mit kleiner Flaeche A1 wird die Kraft F1 aufgebracht. Da der Druck p = F/A ueberall gleich ist, gilt:

**F1 / A1 = F2 / A2 -> F2 = F1 * (A2 / A1)**

Bei A2 = 10*A1 wird die Kraft **verzehnfacht** -- allerdings bewegt sich der grosse Kolben nur 1/10 des Weges (Energieerhaltung: W = F*s = const).

**Klinisch:** Das Pascalsche Prinzip erklaert, warum ein erhoehter intraabdomineller Druck (z. B. bei Aszites) gleichmaessig auf alle umliegenden Organe wirkt und die Zwerchfellbewegung einschraenken kann.

> **Merke:** Pascalsches Prinzip: Druck in einer eingeschlossenen Fluessigkeit breitet sich allseitig gleich aus. Hydraulische Presse: Kraftverstaerkung F2 = F1 * (A2/A1), aber s2 = s1 * (A1/A2).

---

## Manometer und Blutdruckmessung nach Riva-Rocci

**Um den Druck zu messen,** verwendet man Manometer. In der Medizin ist das **Quecksilber-Manometer** (Sphygmomanometer) nach **Riva-Rocci** historisch bedeutend:

Die Manschette wird am Oberarm auf **Herzhoehe** aufgepumpt, bis die Arteria brachialis komprimiert ist. Beim langsamen Ablassen des Drucks werden mit dem Stethoskop die **Korotkow-Geraeusche** auskultiert:
- **Systolischer Wert**: erstes hoerbares Klopfen (Blut presst sich durch die Stenose)
- **Diastolischer Wert**: Verschwinden der Geraeusche (freier Blutfluss)

**Warum Herzhoehe?** Liegt die Manschette 15 cm unter Herzhoehe, ist der gemessene Druck um Delta-p = rho*g*h = 1060 * 9,81 * 0,15 ca. 1561 Pa ca. **12 mmHg zu hoch**. Bei der Diagnose einer Hypertonie (Grenzwert 140/90 mmHg) kann das den Unterschied zwischen "normal" und "behandlungsbeduertig" ausmachen!

> **Merke:** Blutdruckmessung immer auf Herzhoehe! Jeder Zentimeter Abweichung verfaelscht das Ergebnis um ca. 0,8 mmHg (ca. rho_Blut * g * 0,01 m / 133 Pa/mmHg).

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Formel p = rho*g*h und deren Anwendung (Schweredruck berechnen)
- Hydrostatisches Paradoxon: Bodendruck unabhaengig von Gefaessform
- Pascalsches Prinzip und hydraulische Presse (Kraftverstaerkung)
- Umrechnung mmHg <-> Pa (1 mmHg ca. 133,3 Pa)

**Haeufige Pruefungsfragen:**
- "Wie gross ist der Druckunterschied zwischen Herz und Fuss?" -> Delta-p = rho*g*h ca. 100 mmHg
- "Wovon haengt der Bodendruck ab?" -> Nur von rho, g und h -- nicht von der Gefaessform
- "Was besagt das Pascalsche Prinzip?" -> Druck breitet sich allseitig gleich aus

**Typische Pruefungsfallen:**
- Bodendruck haengt NICHT vom Volumen oder der Gefaessform ab (Paradoxon!)
- Hydraulische Presse: Kraft wird verstaerkt, aber NICHT die Energie (Wegunterschiede!)
- mmHg und Pa sind verschiedene Einheiten fuer DIESELBE Groesse (Druck)
- Blutdruckmessung: Hoehe ueber/unter dem Herzen verfaelscht systematisch

---

## Zusammenfassung (ultrakompakt)

- **Hydrostatischer Druck**: p = rho*g*h -- linear mit Tiefe, unabhaengig von Gefaessform
- **Gesamtdruck**: p_gesamt = p_0 + rho*g*h (Atmosphaerendruck + Schweredruck)
- **Paradoxon**: Bodendruck haengt nur von h, rho, g ab -- nicht von Form oder Volumen
- **Pascal**: Druck breitet sich allseitig gleich aus -> hydraulische Presse F2 = F1*(A2/A1)
- **Blutdruck**: Herz -> Fuss (ca. 1,3 m) -> Delta-p ca. 100 mmHg; Messung stets auf Herzhoehe
- **Einheiten**: 1 mmHg ca. 133 Pa; 1 atm = 760 mmHg = 101 325 Pa
- **Klinisch**: Falsche Manschettenhoehe -> falsche Diagnose; Aszites -> allseitige Druckbelastung`,

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
      content: `## Einleitung

Spring ins Schwimmbad und lass dich treiben -- du spuerst, wie das Wasser dich nach oben drueckt. Das ist der **Auftrieb**. Gleichzeitig laufen Wasserlaeufer ueber die Oberflaeche, als waere sie eine Haut -- das ist die **Oberflaechenspannung**. Beides spielt in der Lunge eine wichtige Rolle.

**In diesem Kapitel lernst du:**
- warum Koerper im Wasser leichter werden und was **Auftrieb** ist
- wann ein Gegenstand **schwimmt, schwebt oder sinkt**
- was **Oberflaechenspannung** bedeutet und wie Wasser in duennen Roehrchen steigt
- warum kleine Blasen einen hoeheren Innendruck haben als grosse
- wie **Surfactant** in der Lunge kleine Lungenblaeschen vor dem Zusammenfallen schuetzt

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:geometric-shapes}}

## Auftrieb -- warum du im Wasser leichter bist

Tauchst du einen Gegenstand in Wasser, drueckt das Wasser ihn nach oben. Diese Kraft heisst **Auftriebskraft**:

**F_A = rho_Fluid * g * V_verdraengt**

Die Auftriebskraft entspricht dem Gewicht des verdraengten Wassers. Wichtig: Es zaehlt die Dichte der **Fluessigkeit**, nicht die des Gegenstands!

**Beispiel:** Du haeltst einen 0,5-Liter-Ball unter Wasser. Die Auftriebskraft betraegt: 1000 * 9,81 * 0,0005 = 4,9 N -- das Gewicht von einem halben Liter Wasser.

> **Merke:** Auftrieb = Gewicht des verdraengten Wassers. Die Dichte des eingetauchten Koerpers spielt fuer die Auftriebskraft keine Rolle -- nur das verdraengte Volumen und die Fluessigkeitsdichte zaehlen.

---

## Schwimmen, Schweben, Sinken

Ob etwas schwimmt oder sinkt, haengt vom Dichtevergleich ab:

| Dichtevergleich | Was passiert? | Beispiel |
|-----------------|---------------|----------|
| Gegenstand leichter als Wasser | **Schwimmt** (ragt teilweise heraus) | Holz, Eiswuerfel |
| Gleiche Dichte | **Schwebt** (bleibt in jeder Tiefe) | Fisch mit Schwimmblase |
| Gegenstand schwerer als Wasser | **Sinkt** | Stein, Muenze |

**Warum schwimmt ein Schiff aus Stahl?** Stahl ist schwerer als Wasser -- aber das Schiff ist innen hohl. Die **durchschnittliche Dichte** (Stahl + Luft) ist geringer als die von Wasser.

**Eiswuerfel im Glas:** Eis ist etwas leichter als Wasser. Deshalb schwimmt etwa 90 % des Eiswuerfels unter Wasser und nur 10 % ragen heraus.

> **Merke:** Schwimmen, wenn der Gegenstand im Schnitt leichter ist als die Fluessigkeit. Sinken, wenn er schwerer ist. Die durchschnittliche Dichte entscheidet!

---

## Oberflaechenspannung

Hast du schon gesehen, wie eine Nadel auf Wasser schwimmt? An der Oberflaeche ziehen sich die Wasserteilchen gegenseitig an. Nach oben fehlen Partner -- deshalb wirkt die Oberflaeche wie eine gespannte Haut.

**Kapillareffekt:** In einem duennen Glasroehrchen steigt Wasser von selbst hoch. Das Wasser "klebt" an der Glaswand (Anziehung Wasser-Glas) und zieht sich nach oben. Je duenner das Roehrchen, desto hoeher steigt es. Pflanzen nutzen diesen Effekt, um Wasser nach oben zu transportieren.

> **Merke:** Oberflaechenspannung entsteht, weil Teilchen an der Oberflaeche nur nach innen gezogen werden. Deshalb verhaelt sich die Oberflaeche wie eine elastische Haut.

---

## Kleine Blasen und das Laplace-Gesetz

Stell dir zwei Seifenblasen vor -- eine kleine und eine grosse. Verbindest du sie mit einem Rohr, blaest die kleine in die grosse hinein! Warum? In kleineren Blasen herrscht ein **hoeherer Innendruck**:

**Delta-p = 2 * sigma / r**

Je kleiner der Radius r, desto groesser der Druck. Das ist in der Lunge entscheidend: Ohne Gegenmassnahme wuerden kleine Lungenblaeschen (Alveolen) zusammenfallen.

**Surfactant** ist ein Stoff, der die Oberflaechenspannung in den Lungenblaeschen senkt. In kleinen Blaeschen wirkt er staerker als in grossen -- so gleicht er den Druckunterschied aus und verhindert, dass kleine Blaeschen kollabieren.

> **Merke:** Kleine Blasen haben hoeheren Innendruck (Delta-p = 2 * sigma / r). Surfactant senkt die Oberflaechenspannung und schuetzt so kleine Lungenblaeschen vor dem Zusammenfallen.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Auftrieb: F_A = rho_Fluid * g * V_verdraengt
- Schwimmen/Schweben/Sinken ueber Dichtevergleich
- Laplace-Gesetz: kleiner Radius = hoeherer Innendruck
- Surfactant schuetzt kleine Lungenblaeschen

**Typische Fallen:**
- Auftrieb haengt von der Fluessigkeit ab, NICHT vom eingetauchten Koerper
- Kleiner Radius = HOEHERER Druck (nicht niedriger!)
- Surfactant SENKT die Oberflaechenspannung
- Beim Schwimmen zaehlt die DURCHSCHNITTLICHE Dichte

---

## Zusammenfassung

- **Auftrieb**: F_A = rho_Fluid * g * V_verdraengt -- Gewicht des verdraengten Wassers
- **Schwimmen**: wenn Gegenstand leichter als Fluessigkeit; Sinken wenn schwerer
- **Oberflaechenspannung**: Oberflaeche wirkt wie gespannte Haut; Kapillareffekt in duennen Roehren
- **Laplace**: Kleine Blasen = hoher Innendruck (Delta-p = 2 * sigma / r)
- **Surfactant**: Senkt Oberflaechenspannung in Lungenblaeschen, verhindert Kollaps`,

      contentExtended: `## Einleitung

Warum schwimmt ein Stahlschiff, obwohl Stahl dichter als Wasser ist? Und warum kollabieren Lungenblaeschen bei Fruehgeborenen ohne Surfactant? Die Antworten liefern zwei zentrale Konzepte: das **Archimedische Prinzip** fuer den Auftrieb und das **Laplace-Gesetz** fuer die Oberflaechenspannung. Beide sind im MedAT hochrelevant -- besonders die klinischen Anwendungen.

**In diesem Kapitel lernst du:**
- das **Archimedische Prinzip**: F_A = rho_Fluid * g * V_verdraengt und seine Konsequenzen
- die Bedingungen fuer **Schwimmen, Schweben und Sinken** (Vergleich der Dichten)
- was **Oberflaechenspannung** ist und wie **Kapillaritaet** funktioniert
- das **Laplace-Gesetz** und die Rolle des **Surfactant** in der Lunge
- klinische Bedeutung: Atelektase bei Surfactant-Mangel, Alveolenstabilitaet

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:geometric-shapes}}

## Archimedisches Prinzip

**Ein in ein Fluid eingetauchter Koerper** erfaehrt eine nach oben gerichtete Kraft -- die **Auftriebskraft** F_A. Diese ist gleich der Gewichtskraft des verdraengten Fluids:

**F_A = rho_Fluid * g * V_verdraengt**

Dabei ist V_verdraengt das Volumen des eingetauchten Koerperteils. Die Auftriebskraft wirkt im **Schwerpunkt** des verdraengten Fluidvolumens (Druckpunkt).

**Herleitung (vereinfacht):** Der Druck an der Unterseite des Koerpers ist groesser als an der Oberseite (p = rho*g*h nimmt mit der Tiefe zu). Die resultierende Druckdifferenz ergibt eine Nettokraft nach oben -- das ist die Auftriebskraft.

> **Merke:** Archimedisches Prinzip: Die Auftriebskraft F_A = rho_Fluid * g * V_verdraengt entspricht der Gewichtskraft des verdraengten Fluids. Sie haengt NICHT von der Dichte des eingetauchten Koerpers ab, sondern von der Dichte des Fluids und dem verdraengten Volumen.

---

## Schwimmen, Schweben und Sinken

**Bisher haben wir gesehen:** Die Auftriebskraft haengt vom Fluid ab. **Ob ein Koerper schwimmt, schwebt oder sinkt,** haengt vom Verhaeltnis seiner mittleren Dichte rho_Koerper zur Fluiddichte rho_Fluid ab:

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

**Um das zu verstehen,** muss man die molekularen Kraefte an der Oberflaeche einer Fluessigkeit betrachten. Molekuele im Inneren werden allseitig von Nachbarmolekuelen angezogen (Kohaesionskraefte heben sich auf). An der **Oberflaeche** fehlen die Nachbarn nach oben -- es entsteht eine resultierende Kraft ins Innere. Die Oberflaeche verhaelt sich wie eine **gespannte elastische Haut**.

Die **Oberflaechenspannung sigma** ist definiert als Kraft pro Laenge entlang einer gedachten Linie auf der Oberflaeche:

**sigma = F / l** (Einheit: N/m = J/m2)

Typische Werte:
- Wasser (20 Grad C): sigma ca. 0,073 N/m
- Blutplasma: sigma ca. 0,050 N/m
- Surfactant-Loesung: sigma ca. 0,025 N/m (stark erniedrigt!)

**Kapillaritaet:** In engen Roehren (Kapillaren) steigt oder sinkt die Fluessigkeit je nach dem Verhaeltnis von Adhaesions- (Fluid-Wand) zu Kohaesionskraeften (Fluid-Fluid):
- **Adhaesion > Kohaesion** -> konkaver Meniskus -> Fluessigkeit steigt (Wasser in Glasroehre)
- **Kohaesion > Adhaesion** -> konvexer Meniskus -> Fluessigkeit sinkt (Quecksilber in Glasroehre)

> **Merke:** Oberflaechenspannung sigma = F/l entsteht durch unausgeglichene Kohaesionskraefte an der Oberflaeche. Kapillaritaet: Adhaesion > Kohaesion -> Steigen; Kohaesion > Adhaesion -> Sinken.

---

## Laplace-Gesetz und Surfactant

**Bisher haben wir gesehen:** Oberflaechenspannung und Kapillaritaet. **In kugelfoermigen Hohlraeumen** (Blasen, Alveolen) erzeugt die Oberflaechenspannung einen **Ueberdruck** nach innen -- beschrieben durch das **Laplace-Gesetz**:

Fuer eine Kugelblase mit einer Wand (z. B. Alveole):

**Delta-p = 2*sigma / r**

Dabei ist:
- **Delta-p** = Druckdifferenz (innen - aussen)
- **sigma** = Oberflaechenspannung
- **r** = Radius der Blase

**Entscheidende Konsequenz:** Je **kleiner** der Radius r, desto **groesser** der Innendruck Delta-p. Kleine Alveolen haetten ohne Gegenmassnahme einen viel hoeheren Innendruck als grosse -> sie wuerden in die grossen Alveolen "hineinblasen" -> **Kollaps** der kleinen Alveolen (= **Atelektase**).

**Surfactant (Surface Active Agent):**
Typ-II-Pneumozyten produzieren **Surfactant** -- eine Mischung aus Phospholipiden und Proteinen. Surfactant:
- **senkt die Oberflaechenspannung** an der Luft-Wasser-Grenzflaeche der Alveolen
- wirkt **radiusabhaengig**: In kleinen Alveolen (Surfactant-Molekuele dichter gepackt) ist sigma staerker reduziert als in grossen -> **Druckausgleich** zwischen verschieden grossen Alveolen
- verhindert **Atelektase** (Alveolarkollaps)

**Klinisch -- Fruehgeborene:** Ab der ca. 24. SSW beginnt die Surfactant-Produktion, ab der 35. SSW ist sie ausreichend. Fruehgeborene vor der 35. SSW haben oft **Atemnotsyndrom (IRDS)** durch Surfactant-Mangel -> Behandlung: Surfactant-Substitution ueber den Tubus + CPAP-Beatmung.

> **Merke:** Laplace-Gesetz: Delta-p = 2*sigma/r -- kleinere Blasen haben hoeheren Innendruck! Surfactant senkt sigma radiusabhaengig -> stabilisiert kleine Alveolen -> verhindert Atelektase. Fruehgeborene: Surfactant-Mangel -> IRDS.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Archimedisches Prinzip: F_A = rho_Fluid * g * V_verdraengt
- Bedingungen fuer Schwimmen/Schweben/Sinken (Dichtevergleich)
- Laplace-Gesetz: Delta-p = 2*sigma/r und Konsequenzen fuer Alveolen
- Surfactant: Funktion, Bedeutung, Fruehgeborene

**Haeufige Pruefungsfragen:**
- "Wovon haengt die Auftriebskraft ab?" -> Von rho_Fluid, g und V_verdraengt -- NICHT von rho_Koerper!
- "Was passiert bei Surfactant-Mangel?" -> Kleine Alveolen kollabieren (Atelektase)
- "Warum schwimmt Eis auf Wasser?" -> rho_Eis < rho_Wasser (Anomalie des Wassers)

**Typische Pruefungsfallen:**
- Auftriebskraft haengt NICHT von der Dichte des eingetauchten Koerpers ab, sondern vom Fluid
- Laplace: KLEINER Radius -> HOEHERER Innendruck (kontraintuitiv!)
- Surfactant SENKT die Oberflaechenspannung -- erhoeht sie nicht
- Schwimmen: Die MITTLERE Dichte zaehlt (hohler Stahlkoerper!)

---

## Zusammenfassung (ultrakompakt)

- **Archimedes**: F_A = rho_Fluid * g * V_verdraengt (Auftrieb = Gewicht des verdraengten Fluids)
- **Schwimmen**: rho_Koerper < rho_Fluid; Schweben: rho_Koerper = rho_Fluid; Sinken: rho_Koerper > rho_Fluid
- **Oberflaechenspannung**: sigma = F/l; Kohaesion innen vs. ungesaettigte Kraefte an der Oberflaeche
- **Kapillaritaet**: Adhaesion > Kohaesion -> Steigen; umgekehrt -> Sinken
- **Laplace**: Delta-p = 2*sigma/r -- kleiner r -> grosser Innendruck -> Kollapsrisiko
- **Surfactant**: senkt sigma radiusabhaengig, stabilisiert kleine Alveolen, verhindert Atelektase
- **Klinisch**: IRDS bei Fruehgeborenen (Surfactant-Mangel -> Atelektase -> Surfactant-Substitution)`,

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
      content: `## Einleitung

Halte den Daumen auf einen Gartenschlauch -- das Wasser spritzt viel weiter! Warum? Weil das Wasser an der engen Stelle schneller werden muss. Dieses einfache Prinzip erklaert, wie Fluessigkeiten durch Rohre und Leitungen stroemen.

**In diesem Kapitel lernst du:**
- warum Wasser an engen Stellen **schneller** fliesst (Kontinuitaetsgleichung)
- warum schnelleres Wasser einen **niedrigeren Druck** hat (Bernoulli-Gleichung)
- den Unterschied zwischen **ruhiger** (laminarer) und **wirbelnder** (turbulenter) Stroemung
- warum Verengungen in Rohren Geraeusche erzeugen
- warum Aussackungen in Wasserleitungen gefaehrlich werden koennen

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:coordinate-system}}

## Volumenstrom -- wie viel fliesst durch?

Der **Volumenstrom** sagt dir, wie viel Fluessigkeit pro Sekunde durch ein Rohr fliesst:

**Q = A * v**

A ist der Querschnitt des Rohrs, v die Geschwindigkeit. Je groesser das Rohr und je schneller die Stroemung, desto mehr fliesst durch.

> **Merke:** Volumenstrom Q = Querschnitt mal Geschwindigkeit. Einheit: m3/s (Kubikmeter pro Sekunde).

---

## Enge Stelle = schnellere Stroemung

Stell dir eine Wasserleitung vor, die sich verengt. Was hineinfliesst, muss auch hinauskommen -- nichts geht verloren. An der engen Stelle muss das Wasser also **schneller** fliessen, damit dieselbe Menge durchkommt:

**A1 * v1 = A2 * v2**

Das ist die **Kontinuitaetsgleichung**. Halbiert sich der Querschnitt, verdoppelt sich die Geschwindigkeit.

**Beispiel Gartenschlauch:** Drueckst du die Oeffnung mit dem Daumen auf die Haelfte zusammen, spritzt das Wasser doppelt so schnell heraus.

> **Merke:** Engere Stelle = schnellere Stroemung. Was reinfliesst, muss auch rauskommen. A1 * v1 = A2 * v2.

---

## Schneller = weniger Druck (Bernoulli)

Das klingt erst komisch: Wo Wasser schneller fliesst, ist der Druck **niedriger**. Aber denk an einen Zerstaeuber -- der schnelle Luftstrom saugt die Fluessigkeit an, weil der Druck dort sinkt.

Die **Bernoulli-Gleichung** fasst das zusammen:

**p + 0,5 * rho * v2 + rho * g * h = konstant**

- p = Druck
- 0,5 * rho * v2 = "Bewegungsdruck" (je schneller, desto groesser)
- rho * g * h = Druck durch die Hoehe

Wenn v steigt, muss p sinken, damit die Summe gleich bleibt. Das heisst **Venturi-Effekt**.

> **Merke:** Schnelle Stroemung = niedriger Druck. Langsame Stroemung = hoher Druck. Das ist der Venturi-Effekt.

---

## Ruhige vs. wirbelnde Stroemung

Wasser kann **ruhig** (laminar) oder **wirbelnd** (turbulent) fliessen:

- **Laminar:** Das Wasser fliesst in geordneten Schichten -- leise und gleichmaessig. So fliesst Wasser normalerweise aus dem Wasserhahn bei niedrigem Druck.
- **Turbulent:** Wirbel und Chaos -- man hoert ein Rauschen. Das passiert, wenn du den Wasserhahn voll aufdrehst.

Ob die Stroemung ruhig oder wirbelnd ist, haengt von der Geschwindigkeit, dem Rohrdurchmesser und der Zaehigkeit der Fluessigkeit ab. Faustregel: **Je schneller und je groesser das Rohr, desto eher wird die Stroemung turbulent.**

An einer **Verengung** in der Wasserleitung steigt die Geschwindigkeit -- und ab einem bestimmten Punkt wird die Stroemung turbulent. Dann hoerst du ein **Rauschen oder Pfeifen**.

> **Merke:** Langsam und eng = ruhige Stroemung (laminar). Schnell und weit = wirbelnde Stroemung (turbulent). Verengungen erzeugen Geraeusche, weil die Stroemung turbulent wird.

---

## Verengung vs. Aussackung

**Verengung (Stenose):**
- Querschnitt sinkt -> Geschwindigkeit steigt -> Druck sinkt
- Stroemung wird turbulent -> hoerbare Geraeusche

**Aussackung (Aneurysma):**
- Querschnitt steigt -> Geschwindigkeit sinkt -> Druck steigt
- Hoeherer Druck dehnt die Wand weiter -> Teufelskreis -> Gefahr des Platzens

> **Merke:** Verengung: schneller, weniger Druck, Geraeusche. Aussackung: langsamer, mehr Druck, Wand wird weiter gedehnt -- gefaehrlich!

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Kontinuitaetsgleichung: A1 * v1 = A2 * v2
- Bernoulli: schnell = niedriger Druck
- Verengung vs. Aussackung erklaeren koennen

**Typische Fallen:**
- Bei Verengung wird die Stroemung SCHNELLER, nicht langsamer
- Schnellere Stroemung = NIEDRIGERER Druck (nicht hoeher!)
- Verengungen erzeugen Geraeusche durch turbulente Stroemung

---

## Zusammenfassung

- **Volumenstrom**: Q = A * v -- wie viel pro Sekunde durchfliesst
- **Kontinuitaet**: Enge Stelle = schnellere Stroemung (A1 * v1 = A2 * v2)
- **Bernoulli**: Schnell = niedriger Druck, langsam = hoher Druck
- **Laminar**: Ruhig, geordnet. **Turbulent**: Wirbelnd, laut
- **Verengung**: Schneller, Druck sinkt, Geraeusche
- **Aussackung**: Langsamer, Druck steigt, Wand wird gedehnt`,

      contentExtended: `## Einleitung

Warum hoert man bei einer Gefaessstenose mit dem Stethoskop ein Stroemungsgeraeusch? Warum platzt ein Aneurysma leichter als ein normales Gefaess? Die Antworten liefern die **Kontinuitaetsgleichung** und die **Bernoulli-Gleichung** -- zwei Grundpfeiler der Stroemungsmechanik, die im MedAT regelmaessig abgefragt werden.

**In diesem Kapitel lernst du:**
- die **Kontinuitaetsgleichung** (A1*v1 = A2*v2) und ihre Konsequenzen fuer Blutgefaesse
- die **Bernoulli-Gleichung** (p + 0,5*rho*v2 + rho*g*h = const) und den **Venturi-Effekt**
- den Unterschied zwischen **laminarer** und **turbulenter** Stroemung und die **Reynolds-Zahl**
- warum Stenosen Geraeusche verursachen und Aneurysmen gefaehrlich sind
- klinische Anwendungen: Karotisstenose, Koronarangiografie, Herzklappendefekte

---

{{DIAGRAM:newton-forces}}

{{DIAGRAM:coordinate-system}}

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

**Bisher haben wir gesehen:** den Volumenstrom Q = A*v. **Da ein ideales Fluid inkompressibel ist,** kann Fluessigkeit weder "verschwinden" noch "entstehen" -- was in ein Rohr hineinfliesst, muss auch hinausfliessen. Daraus folgt die **Kontinuitaetsgleichung**:

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

**Bisher haben wir gesehen:** Die Kontinuitaet bestimmt die Geschwindigkeit. **Um den Zusammenhang zwischen Geschwindigkeit und Druck zu verstehen,** benoetigen wir die **Bernoulli-Gleichung** (fuer ideale Fluide entlang einer Stromlinie):

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

**Laminare Stroemung:** Die Fluidteilchen bewegen sich in parallelen Schichten (Laminae); die Stroemung ist geordnet und vorhersagbar. Im Rohr entsteht ein **parabolisches Geschwindigkeitsprofil** -- maximal in der Mitte, null an der Wand (Haftbedingung).

**Turbulente Stroemung:** Die Fluidteilchen bewegen sich chaotisch mit Wirbeln und Fluktuationen. Hoeherer Energieverlust, hoeherer Stroemungswiderstand, **auskultierbare Geraeusche** (Stroemungsgeraeusche, Stenosegeraeusche).

Die **Reynolds-Zahl** Re (dimensionslos) entscheidet, welche Stroemungsform vorliegt:

**Re = (rho * v * d) / eta**

Dabei ist d der Rohrdurchmesser und eta die dynamische Viskositaet.

| Reynolds-Zahl | Stroemungsform |
|---------------|---------------|
| Re < 2300 | **laminar** |
| 2300 < Re < 4000 | Uebergangsbereich |
| Re > 4000 | **turbulent** |

**Klinisch relevant:** Normalerweise ist die Blutstroemung in den meisten Gefaessen **laminar**. Bei Stenosen steigt v -> Re steigt -> Uebergang zu **turbulenter** Stroemung -> **Stroemungsgeraeusche** (z. B. Karotisstenose). Auch bei Anaemie (niedrige Viskositaet eta) steigt Re und kann zu funktionellen Herzgeraeuchen fuehren.

> **Merke:** Re = rho*v*d/eta. Re < 2300: laminar (geordnet, parabolisches Profil). Re > 4000: turbulent (chaotisch, Geraeusche). Stenose -> v steigt -> Re steigt -> turbulent -> auskultierbare Geraeusche.

---

## Klinische Anwendungen: Stenose und Aneurysma

**Stenose (Verengung):**
- A sinkt -> v steigt (Kontinuitaet)
- p sinkt an der Engstelle (Bernoulli)
- Re steigt -> turbulente Stroemung -> **Stenosegeraeusche**
- Beispiel: Karotisstenose -> Stroemungsgeraeusch ueber der A. carotis

**Aneurysma (Aussackung):**
- A steigt -> v sinkt (Kontinuitaet)
- p steigt in der Aussackung (Bernoulli)
- Die Wandspannung sigma = p*r/(2d) steigt mit dem Radius (Laplace!)
- **Teufelskreis**: Aussackung -> hoeherer Druck -> Wand dehnt sich weiter -> noch groessere Aussackung -> **Ruptur**

> **Merke:** Stenose: A sinkt -> v steigt -> p sinkt -> turbulent -> Geraeusche. Aneurysma: A steigt -> v sinkt -> p steigt -> Wandspannung steigt -> Rupturrisiko! Beide erklaerbar durch Kontinuitaet + Bernoulli.

---

## MedAT-Fokus

**Zur gezielten Pruefungsvorbereitung** im Ueberblick:

**Zentral pruefungsrelevant:**
- Kontinuitaetsgleichung A1*v1 = A2*v2 und Rechenbeispiele
- Bernoulli-Gleichung p + 0,5*rho*v2 + rho*g*h = const
- Reynolds-Zahl Re = rho*v*d/eta und kritischer Wert (ca. 2300)
- Klinische Anwendung: Stenose vs. Aneurysma

**Haeufige Pruefungsfragen:**
- "Was passiert mit der Blutgeschwindigkeit bei Stenose?" -> steigt (Kontinuitaet)
- "Warum hoert man bei Stenosen Geraeusche?" -> turbulente Stroemung (Re > 2300)
- "Was sagt die Bernoulli-Gleichung aus?" -> p + 0,5*rho*v2 + rho*g*h = const

**Typische Pruefungsfallen:**
- Kontinuitaet: Die Stroemung wird bei Verengung SCHNELLER, nicht langsamer
- Bernoulli: Hoehere Geschwindigkeit -> NIEDRIGERER statischer Druck (kontraintuitiv!)
- Reynolds-Zahl: dimensionsLOS (keine Einheit!) -- nicht verwechseln mit dem Druck
- Kapillarbett: trotz enormer Zahl der Kapillaren ist die GESAMTFLAECHE viel groesser -> v sinkt dramatisch

---

## Zusammenfassung (ultrakompakt)

- **Volumenstrom**: Q = A*v (m3/s); ideales Fluid: inkompressibel, reibungsfrei, stationaer
- **Kontinuitaet**: A1*v1 = A2*v2 -> Verengung -> schneller; Erweiterung -> langsamer
- **Bernoulli**: p + 0,5*rho*v2 + rho*g*h = const -> schnell = niedriger Druck (Venturi-Effekt)
- **Reynolds**: Re = rho*v*d/eta; < 2300 laminar, > 4000 turbulent; dimensionslos
- **Stenose**: v steigt, p sinkt, Re steigt -> turbulent -> Geraeusche
- **Aneurysma**: v sinkt, p steigt, Wandspannung steigt (Laplace) -> Rupturrisiko
- **Kapillarbett**: Gesamtquerschnitt ca. 1000x Aorta -> v ca. 0,3 mm/s -> optimaler Stoffaustausch`,

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
      content: `## Einleitung

Stell dir vor, du versuchst Honig durch einen Strohhalm zu saugen -- und dann Wasser. Das Wasser fliesst viel leichter, weil es duennfluessiger ist. Wie zaehfluessig eine Fluessigkeit ist, nennt man **Viskositaet**. Und wie viel durch ein Rohr fliesst, haengt extrem stark vom Durchmesser ab -- das beschreibt das **Hagen-Poiseuille-Gesetz**.

**In diesem Kapitel lernst du:**
- was **Viskositaet** (innere Reibung) ist und warum Honig langsamer fliesst als Wasser
- warum Ketchup beim Schuetteln duennfluessiger wird (und was Blut damit gemeinsam hat)
- die wichtigste Formel fuer Rohre: **Q haengt von r hoch 4 ab** -- halber Durchmesser bedeutet 16-mal weniger Fluss!
- warum ein dicker Strohhalm so viel besser funktioniert als ein duenner

---

{{DIAGRAM:circuit}}

{{DIAGRAM:coordinate-system}}

## Was ist Viskositaet?

Stell dir zwei Schichten Fluessigkeit vor, die uebereinander gleiten -- wie Spielkarten in einem Stapel. Je schwerer sich die Schichten gegeneinander verschieben lassen, desto hoeher ist die **Viskositaet** (eta). Die Einheit ist **Pa mal s**.

Wasser ist duennfluessig (eta ungefaehr 0,001 Pa mal s). Blut ist 3- bis 4-mal zaehfluessiger. Honig ist extrem zaeh. Warme Fluessigkeiten fliessen leichter als kalte -- deshalb fliesst warmer Honig besser als kalter.

> **Merke:** Viskositaet eta beschreibt, wie zaehfluessig etwas ist. Wasser: niedrig. Blut: 3-4 mal zaehfluessiger als Wasser. Waerme macht Fluessigkeiten duennfluessiger.

---

## Ketchup und Blut: Nicht immer gleich zaeh

Bei Wasser bleibt die Zaehigkeit immer gleich, egal ob du schnell oder langsam ruehrst. Solche Fluessigkeiten heissen **Newtonsch**.

Bei Ketchup ist das anders: Wenn du die Flasche schuettelst, wird er duennfluessiger und fliesst. Ohne Schuetteln bleibt er zaeh. Das nennt man **scherverduennend**.

Blut verhaelt sich genauso! Bei langsamer Stroemung klumpen die roten Blutkoerperchen zu kleinen Roellchen zusammen -- das macht das Blut zaeh. Bei schneller Stroemung richten sie sich aus und das Blut fliesst leichter.

> **Merke:** Wasser: immer gleich zaeh (Newtonsch). Blut und Ketchup: werden duennfluessiger bei schneller Bewegung (scherverduennend).

---

## Die Formel fuer Rohre: Q haengt von r hoch 4 ab

Wie viel Fluessigkeit pro Sekunde durch ein Rohr fliesst, beschreibt das **Hagen-Poiseuille-Gesetz**:

**Q = (pi mal r hoch 4 mal Druckunterschied) / (8 mal eta mal L)**

Das Entscheidende ist **r hoch 4** -- der Radius des Rohres in der vierten Potenz!

Was das bedeutet:
- Machst du den Rohr-Durchmesser **halb so gross**, fliesst nur noch **1/16** durch (2 mal 2 mal 2 mal 2 = 16)
- Machst du ihn **doppelt so gross**, fliesst **16-mal so viel** durch
- Schon 20 Prozent enger bedeutet: nur noch 41 Prozent Fluss

Stell dir einen Gartenschlauch vor: Ein etwas dickerer Schlauch bringt VIEL mehr Wasser als ein duennerer. Nicht doppelt, nicht vierfach -- sondern 16-mal mehr bei doppeltem Durchmesser!

> **Merke:** Der Fluss durch ein Rohr haengt von r hoch 4 ab. Halber Radius = nur 1/16 des Flusses. Das ist extrem empfindlich!

---

## Stroemungswiderstand -- wie beim Strom

Genau wie beim elektrischen Strom gibt es auch beim Fliessen einen **Widerstand**:

**R = 8 mal eta mal L / (pi mal r hoch 4)**

Die Parallele zur Elektrik:
- Druckunterschied = wie Spannung
- Durchfluss = wie Strom
- Stroemungswiderstand = wie elektrischer Widerstand

Rohre hintereinander: Widerstaende addieren sich. Rohre nebeneinander: Gesamtwiderstand sinkt (wie Parallelschaltung).

> **Merke:** Stroemungswiderstand ist wie elektrischer Widerstand. Engere Rohre = viel mehr Widerstand (r hoch 4!).

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Hagen-Poiseuille: Fluss haengt von r hoch 4 ab
- Halber Radius = Fluss auf 1/16
- Viskositaet: Einheit Pa mal s; Blut ist zaehfluessiger als Wasser
- Blut ist nicht-Newtonsch (scherverduennend)

**Typische Fallen:**
- r hoch 4, NICHT r hoch 2 -- der Effekt ist viel staerker als man denkt
- Viskositaet sinkt bei hoeherer Temperatur
- Formel gilt nur fuer gleichmaessige, ruhige Stroemung (laminar)

---

## Zusammenfassung

- **Viskositaet**: wie zaehfluessig etwas ist; Wasser duenn, Honig zaeh, Blut 3-4 mal zaehfluessiger als Wasser
- **Newtonsch vs. nicht-Newtonsch**: Wasser immer gleich zaeh; Blut wird bei schneller Stroemung duennfluessiger
- **Hagen-Poiseuille**: Q haengt von r hoch 4 ab -- halber Radius = nur 1/16 Fluss
- **Widerstand**: wie in der Elektrik -- enge Rohre haben hohen Widerstand
- **Pruefungstipp**: r hoch 4 ist DER Schluessel -- kleine Aenderungen am Durchmesser haben riesige Auswirkungen`,

      contentExtended: `## Einleitung

Warum sinkt der Blutfluss bei einer Arteriosklerose so dramatisch — selbst bei nur geringer Gefäßverengung? Die Antwort liegt im **Hagen-Poiseuille-Gesetz**: Der Volumenstrom hängt von der **vierten Potenz** des Radius ab. Eine Halbierung des Radius reduziert den Fluss auf **1/16** — das hat enorme klinische Konsequenzen!

**In diesem Kapitel lernst du:**
- was **dynamische Viskosität η** ist und wie sie die innere Reibung eines Fluids beschreibt
- den Unterschied zwischen **Newtonschen** und **nicht-Newtonschen** Fluiden (insbesondere Blut)
- das **Hagen-Poiseuille-Gesetz**: Q = π·r⁴·Δp / (8·η·L)
- den **Strömungswiderstand** R = 8ηL/(πr⁴) als Analogie zum elektrischen Widerstand
- klinische Konsequenzen: Arteriosklerose, Infusionsrate, Fåhræus-Lindqvist-Effekt

---

{{DIAGRAM:circuit}}

{{DIAGRAM:coordinate-system}}

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
- **Arteriosklerose**: 25 % Radiusreduktion → Fluss auf nur 31,6 % — fruehe klinische Relevanz`,

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
