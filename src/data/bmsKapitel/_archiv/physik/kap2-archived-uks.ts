import type { Kapitel } from "../../types";

// Archived UKs from physik/kap2-fluidmechanik.ts
// Reason: Not in MedAT 2026 Stichwortliste for Physics
// (Stichwortliste lists only: Dichte, Auftrieb, Gesetz von Bernoulli)

export const archivedPhysFluidUKs: Kapitel["unterkapitel"] = [
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
    content: `


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
- **Scherverdünnung** (Pseudoplastizität, scheinbare Fließfähigkeit): η sinkt bei steigender Scherrate → Fluid wird „dünnflüssiger" bei Belastung. Beispiel: **Vollblut**, Ketchup, Farbe.
- **Scherverdickung** (Dilatanz): η steigt bei steigender Scherrate — selten prüfungsrelevant.
- **Bingham-Fluid**: Fließt erst ab einer Mindest-Scherspannung (Fließgrenze) — selten prüfungsrelevant.

**Blut als nicht-Newtonsches Fluid:**
Vollblut ist **scherverdünnend**: Bei niedriger Scherrate (langsame Strömung) bilden die Erythrozyten sogenannte **Geldrollenaggregate** (Rouleaux, münzenförmige Stapel von Erythrozyten) → hohe Viskosität. Bei hoher Scherrate (schnelle Strömung) richten sich die Erythrozyten aus und deformieren sich → niedrigere Viskosität.

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

> 💡 **Prüfungstipp:** Die **r⁴-Abhängigkeit** ist DER Schlüssel: „Radius halbiert → Fluss auf 1/16." Diese Rechnung kommt in fast jeder MedAT-Physikprüfung vor. Merke: (½)⁴ = 1/16.

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
Der TPR beschreibt den Gesamtwiderstand des Gefäßsystems. Er wird hauptsächlich durch die **Arteriolen** (kleinste Arterien) bestimmt (kleine r → großes R). Vasokonstriktion (Gefäßverengung, r↓) erhöht den TPR → Blutdruck steigt. Vasodilatation (Gefäßerweiterung, r↑) senkt den TPR → Blutdruck sinkt.

> **Merke:** Strömungswiderstand R = 8ηL/(πr⁴) — analog zum Ohmschen Gesetz: Δp = R·Q. Arteriolen bestimmen den TPR. Vasokonstriktion → R↑ → Blutdruck↑.

---

## Fåhræus-Lindqvist-Effekt

Bei der Anwendung von Hagen-Poiseuille auf den Blutkreislauf muss man beachten, dass Blut kein Newtonsches Fluid ist. In **engen Gefäßen** (d < 300 µm) tritt ein besonderer Effekt auf: Die **scheinbare Viskosität** des Blutes **sinkt** mit abnehmendem Gefäßdurchmesser.

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
4. **Niedrigere Viskosität** (η↓): kristalloide (salzhaltige Lösungen wie NaCl) fließen schneller als kolloide Lösungen (eiweisshaltige Lösungen) oder Blutkonserven

**Faustregel:** Der Durchfluss hängt extrem vom Radius ab (r⁴!). Ein Katheter mit doppeltem Radius hat 16× den Durchfluss. Deshalb ist die Kanülengröße der mit Abstand wichtigste Faktor.

**Rechenbeispiel:**
Infusion durch eine 18G-Kanüle (r = 0,6 mm, L = 5 cm), Δp = 10 kPa, η_NaCl ≈ 10⁻³ Pa·s:
Q = π · r⁴ · Δp / (8 · η · L) = π · (6×10⁻⁴)⁴ · 10⁴ / (8 · 10⁻³ · 0,05) ≈ **10,2 mL/s ≈ 612 mL/min**

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
];
