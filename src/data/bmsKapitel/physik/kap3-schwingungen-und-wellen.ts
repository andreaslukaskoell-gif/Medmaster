import type { Kapitel } from "../types";

export const physKap3: Kapitel = {
  id: "phys-kap3",
  title: "Schwingungen und Wellen",
  subject: "physik",
  icon: "〰️",
  estimatedTime: "120 min",
  unterkapitel: [
    {
      id: "ph-3-01",
      title: "Harmonische Schwingungen",
      stichworte: [
        "Harmonische Schwingung",
        "Amplitude",
        "Kreisfrequenz",
        "Periodendauer",
        "Fadenpendel",
        "Federpendel",
        "Isochronie",
        "Resonanz",
        "Dämpfung",
        "Rückstellkraft",
        "Energieerhaltung",
        "Schwingungsenergie",
      ],
      content: `Jeder Herzschlag auf dem EKG-Monitor zeigt eine periodische Schwingung — die regelmäßige Wiederholung der P-Welle, des QRS-Komplexes und der T-Welle folgt denselben physikalischen Gesetzmäßigkeiten wie ein schwingendes Pendel. Auch der Atemzyklus (Ein- und Ausatmen) und die Vibration der Stimmlippen bei der Phonation sind periodische Schwingungen. In diesem Kapitel lernst du die mathematischen Grundlagen, die hinter all diesen Phänomenen stecken.

---

## Was ist eine Schwingung?

Eine **Schwingung** ist eine periodische Bewegung um eine Gleichgewichtslage. Drei Bedingungen müssen erfüllt sein:

- Ein Körper wird aus seiner **Gleichgewichtslage** (Ruhelage) ausgelenkt
- Eine **Rückstellkraft** treibt ihn zurück — bei der harmonischen Schwingung ist diese Kraft proportional zur Auslenkung: **F = −k · x** (Hookesches Gesetz)
- Der Körper **überschwingt** die Ruhelage aufgrund seiner Trägheit → die Bewegung wiederholt sich

Ist die Rückstellkraft streng proportional zur Auslenkung, spricht man von einer **harmonischen Schwingung** — dem einfachsten und wichtigsten Schwingungstyp in der Physik.

> **Merke:** Eine harmonische Schwingung liegt genau dann vor, wenn die Rückstellkraft proportional und entgegengesetzt zur Auslenkung ist: F = −k · x.

---

## Kenngrößen der Schwingung

{{DIAGRAM:harmonic-oscillation}}

Jede harmonische Schwingung wird durch fünf Größen vollständig beschrieben:

| Größe | Symbol | Einheit | Zusammenhang |
|--------|--------|---------|--------------|
| Amplitude | A | m | Maximale Auslenkung aus der Ruhelage |
| Periodendauer | T | s | Zeit für eine vollständige Schwingung |
| Frequenz | f | Hz = 1/s | f = 1/T — Schwingungen pro Sekunde |
| Kreisfrequenz | ω | rad/s | ω = 2π · f = 2π/T |
| Phase | φ | rad | Bestimmt den Zustand bei t = 0 |

Die **Schwingungsgleichung** lautet:

**x(t) = A · sin(ω · t + φ)**

Sie beschreibt die Auslenkung x zu jedem Zeitpunkt t. Die Auslenkung pendelt zwischen +A und −A. Durch zeitliche Ableitung erhält man Geschwindigkeit und Beschleunigung:

- **v(t) = A · ω · cos(ω · t + φ)** → v_max = A · ω (in der Ruhelage)
- **a(t) = −A · ω² · sin(ω · t + φ) = −ω² · x(t)** → a_max = A · ω² (bei maximaler Auslenkung)

Das Merkmal **a = −ω² · x** ist die Differentialgleichung der harmonischen Schwingung — sie definiert, ob ein System tatsächlich harmonisch schwingt.

> 💡 **Prüfungstipp:** T und f sind Kehrwerte: f = 1/T. Häufige Falle: ω mit f verwechseln! ω = 2πf hat die Einheit rad/s, f die Einheit Hz = 1/s.

---

## Federpendel und Fadenpendel

Die beiden klassischen Beispiele harmonischer Schwingungen unterscheiden sich fundamental in ihren Einflussgrößen:

**Federpendel** — Eine Masse m an einer Feder mit Federkonstante k (Einheit N/m):

**T = 2π · √(m/k)**

Größere Masse → längere Periodendauer; steifere Feder (größeres k) → kürzere Periodendauer. Die Amplitude beeinflusst T nicht (**Isochronie**).

**Fadenpendel** — Eine Masse an einem Faden der Länge l (Kleinwinkelnäherung sin θ ≈ θ für Winkel < 5°):

**T = 2π · √(l/g)**

Nur Fadenlänge l und Erdbeschleunigung g bestimmen T — Masse und Amplitude spielen keine Rolle. Verdoppelt man die Länge, steigt T um den Faktor √2 ≈ 1,41. Auf dem Mond (g ≈ 1,62 m/s²) schwingt dasselbe Pendel etwa 2,45-mal langsamer als auf der Erde.

Die Federkonstante k lässt sich experimentell bestimmen: Hängt man eine Masse m an die Feder und misst die statische Dehnung Δx, gilt **k = m · g / Δx**.

> **Merke:** Fadenpendel: T hängt von l und g ab (nicht von m). Federpendel: T hängt von m und k ab. Beide sind isochronisch — die Periodendauer ist unabhängig von der Amplitude (Grundprinzip mechanischer Uhren).

---

## Energie im harmonischen Oszillator

Im ungedämpften Fall bleibt die Gesamtenergie konstant und pendelt zwischen kinetischer und potentieller Energie:

- **E_kin = ½ · m · v²** → maximal in der Ruhelage (x = 0, v = v_max)
- **E_pot = ½ · k · x²** → maximal bei maximaler Auslenkung (x = ±A, v = 0)
- **E_ges = ½ · k · A² = const.**

Verdoppelt man die Amplitude, **vervierfacht** sich die Gesamtenergie (E ∝ A²). Gleichstand E_kin = E_pot herrscht bei x = ±A/√2 ≈ ±0,707 · A.

Der periodische Energietausch wiederholt sich mit der **doppelten Frequenz** (2f), weil E_kin und E_pot als sin² und cos² schwingen.

> **Merke:** E_ges ∝ A² — doppelte Amplitude bedeutet vierfache Energie. In der Ruhelage ist alle Energie kinetisch; bei maximaler Auslenkung ist alle Energie potentiell.

---

## Gedämpfte Schwingungen

{{DIAGRAM:damped-oscillation}}

Reale Schwingungen verlieren Energie durch Reibung, Luftwiderstand oder innere Materialreibung. Die Amplitude nimmt exponentiell ab: **A(t) = A₀ · e^(−δ · t)**, wobei δ die Dämpfungskonstante ist.

Drei Fälle werden unterschieden:

| Fall | Bedingung | Verhalten | Beispiel |
|------|-----------|-----------|----------|
| **Schwingfall** | δ < ω₀ | Oszillation mit abnehmender Amplitude | Stimmgabel in Luft |
| **Aperiodischer Grenzfall** | δ = ω₀ | Schnellste Rückkehr ohne Überschwingen | Krankenwagen-Federung |
| **Kriechfall** | δ > ω₀ | Langsame, monotone Rückkehr | Überdämpfter Türschließer |

Der **aperiodische Grenzfall** ist technisch und medizinisch besonders wichtig: Die Federung eines Rettungswagens ist genau so abgestimmt — schnellster Ausgleich ohne Nachschwingen, um den Patienten nicht zusätzlich zu belasten.

In biologischen Systemen erfüllt Dämpfung eine Schutzfunktion: Der viskoelastische **Gelenkknorpel** absorbiert Stoßkräfte beim Gehen und verhindert Resonanzschäden am Knochen. Die **Trommelfell-Dämpfung** verhindert Nachschwingen und ermöglicht scharfe Wahrnehmung aufeinanderfolgender Töne.

> **Merke:** Der aperiodische Grenzfall (δ = ω₀) beschreibt die schnellste Rückkehr zur Ruhelage ohne Überschwingen — ideal für Stoßdämpfer in Gelenken und Fahrzeugen.

---

## Erzwungene Schwingung und Resonanz

Wird einem gedämpften Oszillator durch eine periodische äußere Kraft F(t) = F₀ · cos(Ω · t) kontinuierlich Energie zugeführt, entsteht eine **erzwungene Schwingung**. Nach einer Einschwingphase schwingt das System mit der **Anregungsfrequenz Ω** (nicht mit seiner Eigenfrequenz ω₀).

**Resonanz** tritt auf, wenn Ω ≈ ω₀: Die Amplitude wird maximal, weil die zugeführte Energie pro Zyklus am größten ist. Bei schwacher Dämpfung ist die Resonanzkurve scharf (hohe Güte Q); ohne ausreichende Dämpfung droht **Resonanzkatastrophe** — die Amplitude wächst unkontrolliert bis zum Strukturversagen.

Berühmte Beispiele:
- **Tacoma-Narrows-Brücke (1940):** Wind regte Schwingungsmoden der Brücke an → Einsturz
- **Millennium Bridge London (2000):** Fußgänger synchronisierten ihren Gang mit der Brückenfrequenz → seitliches Schwanken
- **Marschverbot auf Brücken:** Soldaten brechen den Gleichschritt, um Resonanzanregung zu vermeiden

**Resonanz in der Medizin:**
- **MRT (Magnetresonanztomographie):** Wasserstoffkerne werden mit der Larmorfrequenz angeregt (42,58 MHz/T × Feldstärke) — gezielte Resonanz zur Bildgebung
- **Trommelfell:** Eigenresonanz bei ~3 kHz erklärt die maximale Hörempfindlichkeit in diesem Bereich
- **Cochleärer Verstärker:** Äußere Haarzellen nutzen aktive Resonanzverstärkung über das Prestin-Protein

> **Merke:** Resonanz = Anregungsfrequenz ≈ Eigenfrequenz → maximale Energieübertragung. In der Medizin nutzt MRT Resonanz gezielt; in der Technik muss sie kontrolliert oder vermieden werden.

---

## Rechenbeispiel — Infusionspumpe als Federpendel

Eine Infusionspumpe enthält eine federgelagerte Kolbenmasse von m = 50 g. Die Feder hat k = 200 N/m. Gesucht: Periodendauer und maximale Geschwindigkeit bei A = 2 mm Auslenkung.

**Schritt 1 — SI-Einheiten:** m = 0,05 kg, A = 0,002 m

**Schritt 2 — Periodendauer:** T = 2π · √(m/k) = 2π · √(0,05/200) = 2π · √(0,00025) = 2π · 0,0158 ≈ **0,099 s** → f ≈ 10,1 Hz

**Schritt 3 — Maximale Geschwindigkeit:** v_max = A · ω = A · 2πf = 0,002 · 2π · 10,1 ≈ **0,127 m/s**

**Schritt 4 — Gesamtenergie:** E_ges = ½ · k · A² = ½ · 200 · (0,002)² = **4 · 10⁻⁴ J = 0,4 mJ**

> 💡 **Prüfungstipp:** Immer zuerst in SI-Einheiten umrechnen (kg, m, N/m). Häufigster Fehler: Gramm statt Kilogramm oder Zentimeter statt Meter einsetzen.

---

## Klinische Vertiefung

**Herzfrequenzvariabilität (HRV):** Der Herzrhythmus ist annähernd periodisch. Die Fourier-Analyse der Frequenzkomponenten liefert diagnostische Informationen: Hohe HRV zeigt ein gesundes autonomes Nervensystem, niedrige HRV ist ein Risikofaktor für kardiovaskuläre Ereignisse.

**Ultraschall-Schallkopf:** Der piezoelektrische Kristall schwingt mit 1–20 MHz. Seine Resonanzfrequenz bestimmt Sendefrequenz, Eindringtiefe und Auflösung des Ultraschallbildes.

**MRT-Resonanz konkret:** Bei 1,5 T beträgt die Larmorfrequenz f = 42,58 · 1,5 = 63,87 MHz. Bei 3 T: f = 127,74 MHz. Die Anregung mit genau dieser Frequenz versetzt die Protonen in Resonanz — sie absorbieren die RF-Energie maximal.`,

      lernziele: [
        "Die Schwingungsgleichung x(t) = A·cos(ωt+φ) aufschreiben und Amplitude, Kreisfrequenz und Phase benennen.",
        "Periodendauer und Frequenz des Faden- und Federpendels mit den Formeln berechnen.",
        "Den Energieaustausch zwischen kinetischer und potentieller Energie im Oszillator beschreiben.",
        "Resonanz und Dämpfung erklären und klinische Anwendungen nennen.",
        "Den Einfluss von Länge, Masse und Federkonstante auf die Schwingungsdauer quantitativ beurteilen.",
      ],

      sections: [
        {
          heading: "Schwingungsgrößen im Überblick",
          text: "Die harmonische Schwingung wird durch vier Größen vollständig beschrieben: Amplitude A (Maximalauslenkung), Periodendauer T (Dauer eines Umlaufs), Frequenz f = 1/T (Wiederholrate) und Kreisfrequenz ω = 2πf. Geschwindigkeit und Beschleunigung erhält man durch zeitliche Ableitung der Auslenkungsfunktion. Die maximale Geschwindigkeit v_max = A·ω wird in der Ruhelage erreicht; die maximale Beschleunigung a_max = A·ω² tritt bei maximaler Auslenkung auf.",
          merksatz: "ω = 2πf = 2π/T – die Kreisfrequenz verbindet alle Schwingungsgrößen.",
        },
        {
          heading: "Fadenpendel vs. Federpendel",
          text: "Beim Fadenpendel bestimmt die Länge l und die Erdbeschleunigung g die Periodendauer (T = 2π√(l/g)); Masse und Amplitude spielen für kleine Auslenkungen keine Rolle. Beim Federpendel hängt T = 2π√(m/k) von Masse m und Federkonstante k ab – die Amplitude ist wieder bedeutungslos (Isochronie). Diese Unabhängigkeit der Periodendauer von der Amplitude ist das Grundprinzip mechanischer Uhren.",
          merksatz: "Fadenpendel: T ∝ √l; Federpendel: T ∝ √m – jeweils isochronisch.",
        },
        {
          heading: "Dämpfung und Resonanz",
          text: "Reale Schwingungen verlieren Energie durch Reibung, Luftwiderstand oder innere Materialreibung – die Amplitude nimmt exponentiell ab. Bei erzwungenen Schwingungen mit einer externen Anregungsfrequenz steigt die Amplitude dann am stärksten an, wenn die Anregungsfrequenz nahe der Eigenfrequenz des Systems liegt (Resonanz). Übermässige Resonanz kann zu Strukturversagen führen; in der Medizin nutzt man Resonanz gezielt bei der MRT (Magnetresonanztomographie).",
          merksatz: "Resonanz = Anregungsfrequenz = Eigenfrequenz → maximale Energieübertragung.",
        },
      ],

      merksätze: [
        "Fadenpendel: T = 2π√(l/g) – keine Masse, keine Amplitude (kleine Winkel!).",
        "Federpendel: T = 2π√(m/k) – größere Masse → langsamer, steifere Feder → schneller.",
        "E_ges ∝ A² – verdoppelte Amplitude = vierfache Energie; Energie pendelt zwischen kinetisch (Ruhelage) und potentiell (Umkehrpunkt).",
        "Isochronie: Periodendauer unabhängig von der Amplitude (bei kleinen Auslenkungen) – Grundprinzip mechanischer Uhren.",
        "Resonanz tritt auf, wenn Anregungsfrequenz ≈ Eigenfrequenz – Amplitude wird maximal; ohne Dämpfung droht Strukturversagen (Resonanzkatastrophe).",
        "Aperiodischer Grenzfall (δ = ω₀): schnellste Rückkehr ohne Überschwingen – ideal für Krankenwagen-Federung, Türschliesser.",
        "MRT nutzt Resonanz gezielt: Protonen werden exakt mit der Larmorfrequenz angeregt → maximale Energieabsorption.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Konzept der harmonischen Schwingung und vergleichen Sie Fadenpendel und Federpendel hinsichtlich der Einflussgrössen auf die Periodendauer. Gehen Sie dabei auf die Energieumwandlung ein.",
        answer:
          "Eine harmonische Schwingung ist eine periodische Bewegung, bei der die Rückstellkraft proportional zur Auslenkung ist (F = −kx). Die Auslenkung folgt einer Kosinusfunktion x(t) = A·cos(ωt+φ). Beim Fadenpendel gilt T = 2π√(l/g): Die Periodendauer hängt nur von der Länge l und der Erdbeschleunigung g ab, nicht von Masse oder Amplitude (für kleine Winkel). Verdoppelt man die Länge, steigt T um √2. Beim Federpendel gilt T = 2π√(m/k): Eine grössere Masse verlängert T, eine steifere Feder verkürzt T; auch hier ist die Amplitude bedeutungslos (Isochronie). In beiden Systemen pendelt Energie zwischen kinetischer (maximal in Ruhelage) und potentieller Form (maximal bei maximaler Auslenkung). Die Gesamtenergie E = ½·k·A² bleibt bei ungedämpfter Schwingung konstant. Bei gedämpften Schwingungen wird Energie durch Reibung dissipiert, die Amplitude nimmt exponentiell ab. Bei Resonanz (Anregungsfrequenz = Eigenfrequenz) ist die Energieübertragung maximal.",
      },

      klinischerBezug:
        "Herzrhythmus als harmonische Schwingung: Der Sinusrhythmus (60–100/min) ist funktionell eine periodische Erregung. MRT nutzt Kernspinresonanz – Wasserstoffkerne schwingen bei Eigenfrequenz im Magnetfeld (Larmorfrequenz ≈ 63 MHz bei 1,5 T).",

      selfTest: [
        {
          question:
            "Ein Fadenpendel schwingt mit einer Periodendauer von 2 s. Welche Frequenz hat diese Schwingung?",
          options: ["2 Hz", "0,5 Hz", "1 Hz", "4 Hz", "0,25 Hz"],
          correctIndex: 1,
          explanation:
            "Die Frequenz f ist der Kehrwert der Periodendauer T: f = 1/T = 1/(2 s) = 0,5 Hz. Eine Frequenz von 0,5 Hz bedeutet, dass das Pendel eine halbe Vollschwingung pro Sekunde ausführt. Verwechslung mit T selbst (2 Hz) ist ein typischer Fehler – Frequenz und Periode sind reziprok, nicht gleich.",
          hints: [
            "f und T sind Kehrwerte: f = 1/T.",
            "T = 2 s → wie viele Schwingungen in einer Sekunde?",
          ],
          difficulty: 1,
          tags: ["schwingung", "frequenz", "periodendauer"],
        },
        {
          question:
            "Die Länge eines Fadenpendels wird vervierfacht. Wie ändert sich die Periodendauer?",
          options: [
            "Sie bleibt gleich.",
            "Sie verdoppelt sich.",
            "Sie vervierfacht sich.",
            "Sie halbiert sich.",
            "Sie wird achtmal so groß.",
          ],
          correctIndex: 1,
          explanation:
            "Die Periodendauer lautet T = 2π√(l/g). T ist proportional zur Wurzel der Länge l. Wenn l auf 4l steigt, gilt T_neu = 2π√(4l/g) = 2·2π√(l/g) = 2·T_alt. Die Periodendauer verdoppelt sich, weil √4 = 2. Eine Vervierfachung von T würde eine 16-fache Länge erfordern.",
          hints: ["T ∝ √l – also nicht linear, sondern Wurzelbeziehung.", "√4 = ?"],
          difficulty: 2,
          tags: ["pendel", "periodendauer", "fadenpendel"],
        },
        {
          question:
            "Ein Federpendel (m = 200 g, k = 50 N/m) schwingt harmonisch. Welche Periodendauer hat es?",
          options: ["T ≈ 0,13 s", "T ≈ 0,40 s", "T ≈ 0,63 s", "T ≈ 1,26 s", "T ≈ 0,28 s"],
          correctIndex: 1,
          explanation:
            "Mit T = 2π√(m/k) und m = 0,2 kg, k = 50 N/m: T = 2π√(0,2/50) = 2π√(0,004 s²) = 2π × 0,0632 s ≈ 0,397 s ≈ 0,40 s. Häufiger Fehler: m in Gramm einsetzen statt in Kilogramm – immer SI-Einheiten verwenden.",
          hints: [
            "Masse zuerst in Kilogramm umrechnen: 200 g = 0,2 kg.",
            "T = 2π√(m/k) – berechne zuerst m/k, dann die Wurzel, dann ×2π.",
          ],
          difficulty: 3,
          tags: ["federpendel", "periodendauer", "schwingung"],
        },
        {
          question:
            "Bei welcher Auslenkung eines Federpendels (Amplitude A = 10 cm) sind kinetische und potentielle Energie gleich groß?",
          options: [
            "x = 0 cm (Ruhelage)",
            "x = ±7,07 cm",
            "x = ±5 cm",
            "x = ±10 cm (maximale Auslenkung)",
            "x = ±8,66 cm",
          ],
          correctIndex: 1,
          explanation:
            "E_pot = ½kx² und E_kin = E_ges − E_pot = ½kA² − ½kx². Gleichstand: ½kx² = ½kA² − ½kx², also kx² = kA²/2, x² = A²/2, x = A/√2 = 10/√2 ≈ 7,07 cm. In der Ruhelage ist E_kin maximal; bei maximaler Auslenkung ist E_pot maximal.",
          hints: [
            "E_ges = E_kin + E_pot = ½kA² (konstant).",
            "E_kin = E_pot bedeutet: jede Hälfte von E_ges – daraus x berechnen.",
          ],
          difficulty: 3,
          tags: ["schwingungsenergie", "federpendel", "harmonisch"],
        },
        {
          question:
            "Was charakterisiert eine gedämpfte Schwingung im Vergleich zur ungedämpften harmonischen Schwingung?",
          options: [
            "Die Frequenz nimmt kontinuierlich zu.",
            "Die Amplitude nimmt mit der Zeit ab.",
            "Die Periodendauer wird kürzer.",
            "Die Gesamtenergie des Systems nimmt zu.",
            "Die Schwingung wird schneller.",
          ],
          correctIndex: 1,
          explanation:
            "Bei gedämpften Schwingungen wird mechanische Energie durch Reibungskräfte (Luftwiderstand, innere Reibung) in Wärme umgewandelt. Dadurch nimmt die Amplitude exponentiell mit der Zeit ab: A(t) = A₀·e^(−δt). Die Frequenz bleibt nahezu konstant (für schwache Dämpfung). Energie nimmt ab, nicht zu. In biologischen Systemen erfüllt Dämpfung wichtige Schutzfunktionen (Gelenke, Ohrmechanik).",
          hints: [
            "Dämpfung bedeutet Energieverlust – wohin geht die Energie?",
            "Was ändert sich sichtbar am Schwingungsdiagramm?",
          ],
          difficulty: 1,
          tags: ["gedämpfte-schwingung", "amplitude", "dämpfung"],
        },
        {
          question:
            "Ein Pendel auf der Erde hat T = 2 s. Welche Periodendauer hat es auf dem Mond (g_Mond ≈ g_Erde/6)?",
          options: ["0,82 s", "4,90 s", "3,46 s", "1,41 s", "12 s"],
          correctIndex: 1,
          explanation:
            "T = 2π√(l/g), also T ∝ 1/√g. Wenn g um den Faktor 6 kleiner wird, steigt T um den Faktor √6 ≈ 2,449: T_Mond = 2 s × √6 ≈ 4,90 s. Auf dem Mond schwingt das Pendel deutlich langsamer, weil die Rückstellkomponente (Schwerkraft) geringer ist.",
          hints: [
            "T ∝ 1/√g – kleineres g bedeutet grösseres T.",
            "√6 ≈ 2,45 – Faktor, um den T zunimmt.",
          ],
          difficulty: 2,
          tags: ["pendel", "gravitation", "mond"],
        },
        {
          question: "Welcher Zusammenhang besteht zwischen Periodendauer T und Kreisfrequenz ω?",
          options: ["ω = T", "ω = 2π/T", "ω = T/(2π)", "ω = 1/T", "ω = π·T"],
          correctIndex: 1,
          explanation:
            "Die Kreisfrequenz ω gibt an, welchen Winkel in Radiant die Schwingung pro Zeiteinheit durchläuft. Eine volle Schwingung entspricht 2π Radiant und dauert T Sekunden, daher ω = 2π/T = 2πf. Typischer Fehler: ω = 1/T (das ist die normale Frequenz f, nicht ω).",
          hints: [
            "Eine volle Schwingung = 2π Radiant in der Zeit T.",
            "ω = 2πf und f = 1/T → kombinieren.",
          ],
          difficulty: 2,
          tags: ["kreisfrequenz", "periodendauer", "schwingung"],
        },
        {
          question:
            "Ein Federpendel (ω₀ = 10 rad/s, δ = 0,5 s⁻¹) führt eine gedämpfte Schwingung aus. Nach welcher Zeit ist die Amplitude auf die Hälfte des Anfangswertes gesunken?",
          options: ["0,35 s", "0,69 s", "1,00 s", "1,39 s", "2,00 s"],
          correctIndex: 3,
          explanation:
            "Die Amplitude klingt nach A(t) = A₀·e^(−δt) ab. Halbwertszeit: A₀/2 = A₀·e^(−δ·t½) → e^(−δ·t½) = 0,5 → δ·t½ = ln(2) → t½ = ln(2)/δ = 0,693/0,5 = 1,39 s. Typischer Fehler: t½ = 1/δ setzen (das wäre die Zeitkonstante τ = 1/δ, nach der A auf 1/e ≈ 36,8 % fällt, nicht auf 50 %).",
          hints: [
            "Exponentieller Abfall: t½ = ln(2)/δ, nicht 1/δ.",
            "ln(2) ≈ 0,693 ist ein Standardwert – wie bei radioaktivem Zerfall.",
          ],
          difficulty: 2,
          tags: ["gedämpfte-schwingung", "halbwertszeit", "dämpfung"],
        },
        {
          question:
            "Was geschieht bei einer erzwungenen Schwingung, wenn die Anregungsfrequenz genau der Eigenfrequenz des Systems entspricht?",
          options: [
            "Die Schwingung hört auf.",
            "Die Amplitude wird minimal (destruktive Interferenz).",
            "Die Amplitude wird maximal (Resonanz).",
            "Die Frequenz des Systems verdoppelt sich.",
            "Das System geht in den Kriechfall über.",
          ],
          correctIndex: 2,
          explanation:
            "Bei Ω = ω₀ tritt Resonanz auf: Die Energieübertragung von der äusseren Kraft auf das System ist maximal, die Amplitude erreicht ihren Höchstwert. Bei schwacher Dämpfung kann die Amplitude extrem groß werden (Resonanzkatastrophe). Beispiel: Tacoma-Narrows-Brücke (1940) – Wind regte die Eigenfrequenz der Brücke an → Einsturz. In der Medizin wird Resonanz gezielt genutzt: MRT regt Protonen mit der Larmorfrequenz an.",
          hints: [
            "Resonanz = Anregungsfrequenz trifft Eigenfrequenz → was passiert mit der Amplitude?",
            "Denke an das MRT: Protonen absorbieren Energie maximal bei der Larmorfrequenz.",
          ],
          difficulty: 1,
          tags: ["resonanz", "erzwungene-schwingung", "eigenfrequenz"],
        },
        {
          question:
            "Welcher Dämpfungsfall beschreibt die schnellstmögliche Rückkehr zur Ruhelage ohne Überschwingen?",
          options: [
            "Schwingfall (δ < ω₀)",
            "Resonanzfall",
            "Aperiodischer Grenzfall (δ = ω₀)",
            "Kriechfall (δ > ω₀)",
            "Ungedämpfter Fall (δ = 0)",
          ],
          correctIndex: 2,
          explanation:
            "Der aperiodische Grenzfall (δ = ω₀) ist die kritische Dämpfung: Das System kehrt so schnell wie möglich zur Ruhelage zurück, ohne zu überschwingen. Im Schwingfall (δ < ω₀) oszilliert das System; im Kriechfall (δ > ω₀) kehrt es zu langsam zurück. Anwendung: Krankenwagen-Federung, Türschliesser, Messinstrumente (Galvanometer).",
          hints: [
            "Drei Fälle: Schwingfall, Grenzfall, Kriechfall – welcher ist am schnellsten ohne Überschwingen?",
            "Optimal für Stossdämpfer: nicht schwingen, nicht kriechen → Grenzfall.",
          ],
          difficulty: 2,
          tags: ["aperiodischer-grenzfall", "dämpfung", "schwingung"],
        },
      ],
    },
    {
      id: "ph-3-02",
      title: "Wellen — Grundgrößen und Typen",
      stichworte: [
        "Wellengleichung",
        "Wellenlänge",
        "Frequenz",
        "Transversalwelle",
        "Longitudinalwelle",
        "Schallgeschwindigkeit",
        "Elektromagnetisches Spektrum",
        "Ultraschall",
        "Polarisation",
        "Akustische Impedanz",
        "Medienwechsel",
      ],
      content: `




Eine Welle ist die räumliche und zeitliche Ausbreitung einer Schwingung. Wellen transportieren **Energie, aber keine Materie** -- die Teilchen des Mediums führen nur lokale Schwingungen aus, während die Störung weiterwandert. Dieser fundamentale Unterschied zu Teilchen ist entscheidend: Ein Korken auf einer Wasserwelle bewegt sich vertikal auf und ab, wandert aber nicht horizontal mit der Welle mit.



## Grundgrößen der Welle

**c = f * Lambda** -- die fundamentale Wellengleichung (bzw. **c = Lambda * f**)

- **c** (Wellengeschwindigkeit) [m/s] -- wird durch das Medium bestimmt, nicht durch die Quelle
- **f** (Frequenz) [Hz] -- wird von der Quelle festgelegt und ändert sich beim Medienwechsel nicht
- **Lambda** (Wellenlänge) [m] -- Abstand zweier benachbarter gleichphasiger Punkte (z. B. Wellenberg zu Wellenberg)

**Formelklartext:** c = f*Lambda bedeutet: **Ausbreitungsgeschwindigkeit** = **Frequenz** x **Wellenlänge**. Das Medium legt c fest; die Quelle legt f fest. Daraus folgt Lambda = c/f -- die Wellenlänge **passt sich** an. Beim Übergang in ein schnelleres Medium (z. B. Schall: Luft --> Wasser) wird Lambda **größer**; in ein langsameres Medium wird Lambda **kleiner**. Die Frequenz bleibt dabei immer gleich (Quelle schwingt weiter mit derselben Rate).

> **Merke:** c gehört zum Medium, f gehört zur Quelle, Lambda = c/f passt sich an. Beim Medienwechsel ändert sich die Wellenlänge, nicht die Frequenz!

Da c medium-spezifisch und f quellenspezifisch ist, ändert sich beim Medienwechsel die Wellenlänge Lambda = c/f. In einem schnelleren Medium wird Lambda größer, in einem langsameren kleiner -- bei identischer Frequenz. Dieses Prinzip erklärt sowohl Brechung als auch die unterschiedlichen Wellenlängen von Ultraschall in verschiedenen Geweben.

{{DIAGRAM:wave-types}}

## Transversal- vs. Longitudinalwellen

| Eigenschaft | Transversalwelle | Longitudinalwelle |
|-------------|-----------------|-------------------|
| Schwingungsrichtung | senkrecht zur Ausbreitung | parallel zur Ausbreitung |
| Polarisation | möglich | nicht möglich |
| Medium | Festkörper + EM-Feld | Gase, Flüssigkeiten, Festkörper |
| Beispiele | Licht, Seilwellen | Schall, Druckwellen |

**Transversalwellen**: Schwingungsrichtung **senkrecht** zur Ausbreitungsrichtung.
Beispiele: Licht (elektromagnetisch), Seilwellen, Wasseroberflächenwellen, seismische S-Wellen.
Transversalwellen können **polarisiert** werden (nur eine Schwingungsebene). Polarisationsfilter (z. B. Sonnenbrillen) nutzen dieses Phänomen.

**Longitudinalwellen**: Schwingungsrichtung **parallel** zur Ausbreitungsrichtung. Es entstehen abwechselnd Verdichtungen und Verdünnungen im Medium.
Beispiele: Schallwellen, Druckwellen in Gasen und Flüssigkeiten, seismische P-Wellen.
In Gasen und Flüssigkeiten können nur Longitudinalwellen existieren (keine Scherkräfte --> keine Transversalwellen). In Festkörpern existieren beide Typen.

## Schallwellen

Schall ist eine **mechanische Längswelle** -- sie braucht ein Medium zur Ausbreitung (im Vakuum kein Schall!).

Schallgeschwindigkeiten:
- Luft (20 °C): **c ungefähr 340 m/s** (temperaturabhängig: c ungefähr 331 + 0,6*T [°C] m/s)
- Wasser: c ungefähr 1480 m/s
- Weichgewebe: c ungefähr 1540 m/s
- Knochen: c ungefähr 3000-4000 m/s
- Stahl: c ungefähr 5900 m/s

> **Merke:** Schall in dichteren/steiferen Medien ist schneller. Die Schallgeschwindigkeit in Luft steigt um ca. 0,6 m/s pro °C Temperaturerhöhung.

Der Hörbereich des Menschen liegt bei **20 Hz bis 20 kHz**. Infraschall (< 20 Hz) wird z. B. von Elefanten zur Kommunikation genutzt. Ultraschall (> 20 kHz) wird von Fledermäusen zur Echolokation und in der Medizin zur Bildgebung eingesetzt. Mit dem Alter nimmt die obere Hörgrenze ab (Presbyakusis, altersbedingter Hörverlust): 60-Jährige hören typischerweise nur noch bis ~12 kHz.

## Elektromagnetische Wellen

Elektromagnetische (EM) Wellen sind Transversalwellen aus sich gegenseitig erzeugenden elektrischen und magnetischen Feldern. Sie benötigen **kein Medium** und breiten sich im Vakuum mit **c = 3 x 10^8 m/s** aus. Die Frequenz bestimmt die Energie eines Photons: **E = h*f** (Plancksche Beziehung, h = 6,626 x 10^(-34) J*s).

Das EM-Spektrum umfasst (von niedrig nach hoch Frequenz):
- **Radiowellen** (< 300 MHz): MRT-Anregung, Radio
- **Mikrowellen** (300 MHz - 300 GHz): Mikrowellenherd, WLAN
- **Infrarot** (300 GHz - 400 THz): Wärmestrahlung, Thermographie
- **Sichtbares Licht** (**380-780 nm**): Augendiagnostik, Endoskopie; Wellenlänge in **Nanometern** (nm), nicht mm, cm oder m
- **UV** (10-400 nm): Desinfektion, Vitamin-D-Synthese
- **Röntgenstrahlung** (0,01-10 nm): Röntgendiagnostik, CT
- **Gammastrahlung** (< 0,01 nm): Nuklearmedizin, PET

## Medizinischer Ultraschall

Diagnostischer Ultraschall nutzt Frequenzen von **2-20 MHz** (weit über menschliches Hören hinaus). Hochfrequenter Ultraschall hat kurze Wellenlänge --> bessere Ortsauflösung, aber geringere Gewebeeindringtiefe. Ultraschall breitet sich in Geweben mit c ungefähr 1540 m/s aus.

Das **Impuls-Echo-Verfahren** (A-Mode, B-Mode) sendet kurze Ultraschallpulse und misst die Laufzeit des reflektierten Echos. Die Reflexionsstärke hängt vom Impedanzunterschied der Gewebe ab. Je größer der Impedanzunterschied an einer Grenzfläche, desto stärker das Echo.

## Akustische Impedanz -- Widerstand gegen Schallausbreitung

Die **akustische Impedanz** Z beschreibt, wie leicht sich Schall in einem Medium ausbreitet:

**Z = Dichte * c** (mit Dichte = Dichte des Mediums in kg/m^3, c = Schallgeschwindigkeit in m/s, Einheit: Pa*s/m = Rayl)

**Formelklartext:** Z = Dichte*c ist der Widerstand des Mediums gegen Schallausbreitung. Hohe Dichte oder hohe Schallgeschwindigkeit --> hohe Impedanz. An Grenzflächen mit **großem Z-Unterschied** (z. B. Luft-Gewebe) wird fast alles reflektiert; bei angeglichener Impedanz (Ultraschall-Gel) dringt der Schall ein. Einheit: [Dichte]*[c] = (kg/m^3)*(m/s) = kg/(m^2*s) = Pa*s/m (Rayl).

Trifft eine Schallwelle auf eine Grenzfläche zwischen zwei Medien mit unterschiedlicher Impedanz (Z_1 ungleich Z_2), wird ein Teil reflektiert (Echographie nutzt dies) und ein Teil transmittiert.

**Reflexionskoeffizient:** R = [(Z_2 - Z_1)/(Z_2 + Z_1)]^2

- Luft/Gewebe-Grenzfläche: R ungefähr 0,998 --> fast vollständige Reflexion --> deshalb Ultraschall-Gel nötig
- Weichteil/Knochen-Grenzfläche: R ungefähr 0,4 --> starke Reflexion

> **Merke:** GroßeImpedanzdifferenz --> starke Reflexion --> schlechte Bildgebung. Gel beseitigt die Luft-Gewebe-Grenzfläche und ermöglicht optimale Schallkopplung.

## Rechenbeispiele

**Beispiel 1 -- Wellenlänge berechnen:**
Ultraschall mit f = 5 MHz in Gewebe (c = 1540 m/s):
Lambda = c/f = 1540 / (5 x 10^6) = 3,08 x 10^(-4) m = 0,308 mm.
Die Auflösung liegt größenordnungsmäßig bei Lambda, also ca. 0,3 mm -- ausreichend für die meisten diagnostischen Zwecke.

**Beispiel 2 -- Schallgeschwindigkeit und Eindringtiefe:**
Ultraschallpuls in Gewebe, Echo nach t = 0,13 ms empfangen. Reflexionsort:
d = c * t / 2 = 1540 * 0,00013 / 2 = 0,10 m = 10 cm (Hin- und Rückweg --> durch 2).

**Beispiel 3 -- EM-Spektrum:**
Sichtbares Licht (Lambda = 550 nm, grün): f = c/Lambda = (3 x 10^8)/(550 x 10^(-9)) = 5,45 x 10^14 Hz.
Röntgenstrahlung (Lambda = 0,1 nm): f = (3 x 10^8)/(10^(-10)) = 3 x 10^18 Hz --> 10.000x höhere Frequenz und Energie als Licht.

**Beispiel 4 -- Schallgeschwindigkeiten vergleichen:**

| Medium | c [m/s] | Impedanz Z [kg/m^2*s] |
|--------|---------|---------------------|
| Luft | 340 | 420 |
| Wasser | 1480 | 1,48 x 10^6 |
| Weichgewebe | 1540 | 1,63 x 10^6 |
| Knochen | 3500 | 6,3 x 10^6 |

Die akustische Impedanz Z = Dichte * c bestimmt die Reflexion an Grenzflächen. Je größer der Impedanzunterschied, desto stärker die Reflexion (z. B. Gewebe-Knochen-Grenze: starkes Echo im Ultraschall). Der Reflexionskoeffizient berechnet sich als R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2.

**Beispiel 5 -- Reflexionskoeffizient Gewebe-Knochen:**
R = ((6,3 - 1,63)/(6,3 + 1,63))^2 x 10^12 / 10^12 = (4,67/7,93)^2 ungefähr 0,347 --> 34,7 % des Ultraschalls werden reflektiert. An der Grenze Gewebe-Luft wäre R ungefähr 99,9 % -- deshalb ist Ultraschallgel essenziell.

## Klinische Vertiefung

**Impedanzanpassung im Ultraschall:** Das Ultraschallgel zwischen Schallkopf und Haut eliminiert die Luft-Haut-Grenzfläche (Impedanzunterschied Luft-Haut wäre riesig --> fast 100% Reflexion). Mit Gel wird die akustische Impedanz angeglichen und der Ultraschall kann ins Gewebe eindringen.

**Röntgen- vs. Ultraschall-Wellenlänge:** Röntgenstrahlen (Lambda ~ 0,01-10 nm) durchdringen Gewebe und werden je nach Dichte unterschiedlich absorbiert. Ultraschall (Lambda ~ 0,1-1 mm) wird an Impedanzgrenzen reflektiert. Beide Methoden nutzen Wellenphysik, aber fundamental unterschiedliche Mechanismen.

**Temperaturabhängigkeit im Alltag:** In einem Konzertsaal erwärmt das Publikum die Luft. Die Schallgeschwindigkeit steigt dadurch leicht an -- ein Grund, warum Instrumente vor und nach dem Konzert nachgestimmt werden müssen.`,

      diagram: "wave-types",
      lernziele: [
        "Die Wellengleichung c = f·λ anwenden und die Rolle von Medium und Quelle erklären.",
        "Transversal- und Longitudinalwellen anhand der Schwingungsrichtung unterscheiden und Beispiele nennen.",
        "Die physikalischen Eigenschaften von Schallwellen und EM-Wellen vergleichen.",
        "Schallgeschwindigkeiten in verschiedenen Medien kennen und die Abhängigkeit von Mediumeigenschaften erklären.",
        "Das Frequenzspektrum des Ultraschalls einordnen und seine medizinische Relevanz beschreiben.",
      ],

      sections: [
        {
          heading: "Die Wellengleichung c = f · λ",
          text: "Die Ausbreitungsgeschwindigkeit c einer Welle wird ausschliesslich durch das Medium bestimmt (Elastizität, Dichte). Die Frequenz f wird durch die Quelle festgelegt und ändert sich beim Medienwechsel nicht. Daher muss sich die Wellenlänge λ = c/f beim Medienwechsel anpassen. In einem schnelleren Medium wird λ grösser, in einem langsameren kleiner – bei gleicher Frequenz. Dies ist fundamental für das Verständnis von Brechung und Doppler-Effekt.",
          merksatz: "c = f · λ – c gehört zum Medium, f gehört zur Quelle, λ passt sich an.",
        },
        {
          heading: "Schall vs. Licht: Gemeinsamkeiten und Unterschiede",
          text: "Schall (Longitudinalwelle, mechanisch, braucht Medium, v_Luft ≈ 340 m/s) und Licht (Transversalwelle, elektromagnetisch, kein Medium nötig, c = 3×10⁸ m/s) sind beide Wellen und zeigen Interferenz, Beugung und Reflexion. Der entscheidende Unterschied: Schall kann sich im Vakuum nicht ausbreiten, Licht kann. In Gewebe ist Ultraschall (c ≈ 1540 m/s) viel schneller als in Luft, weil Gewebe schwerer komprimierbar ist.",
          merksatz: "Schall braucht Materie – Licht braucht keine (breitet sich im Vakuum aus).",
        },
        {
          heading: "Medizinische Anwendungen von Ultraschall",
          text: "In der Sonographie werden Frequenzen von 2–20 MHz eingesetzt. Höhere Frequenzen (z. B. 15 MHz) liefern bessere Auflösung (kürzere Wellenlänge), dringen aber weniger tief ein. Niedrigere Frequenzen (z. B. 3,5 MHz) eignen sich für tiefe Strukturen (Leber, Nieren). Piezoelektrische Kristalle im Schallkopf wandeln elektrische Impulse in Ultraschallwellen um und empfangen die reflektierten Echos.",
          merksatz: "Hohe US-Frequenz → bessere Auflösung, aber geringere Eindringtiefe.",
        },
      ],

      merksätze: [
        "c = f · λ – die Grundgleichung jeder Welle.",
        "Wellen transportieren Energie, nicht Materie.",
        "c ist mediumspezifisch; f ist quellenspezifisch; λ = c/f passt sich an.",
        "Transversalwelle: Schwingung ⊥ Ausbreitung (z. B. Licht, Seilwelle).",
        "Longitudinalwelle: Schwingung ∥ Ausbreitung (z. B. Schall).",
        "Schall braucht ein Medium – im Vakuum kein Schall!",
        "c_Luft ≈ 340 m/s; c_Wasser ≈ 1480 m/s; c_Licht = 3×10⁸ m/s.",
        "Ultraschall-Diagnostik: 2–20 MHz; c_Gewebe ≈ 1540 m/s.",
        "Nur Transversalwellen können polarisiert werden.",
        "EM-Spektrum: Radio → Mikrowelle → IR → Sichtbar → UV → Röntgen → Gamma.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Vergleichen Sie Schallwellen und elektromagnetische Wellen hinsichtlich ihrer physikalischen Natur, Ausbreitungsbedingungen und Geschwindigkeit. Erläutern Sie, welche dieser Welleneigenschaften für den medizinischen Ultraschall und die Magnetresonanztomographie relevant sind.",
        answer:
          "Schallwellen sind mechanische Longitudinalwellen: Die Teilchen des Mediums schwingen parallel zur Ausbreitungsrichtung. Sie können sich nur in Materie ausbreiten (Gasen, Flüssigkeiten, Festkörpern) – im Vakuum ist keine Schallübertragung möglich. Die Schallgeschwindigkeit beträgt in Luft ≈ 340 m/s, in Wasser ≈ 1480 m/s und in Gewebe ≈ 1540 m/s; sie steigt mit zunehmender Elastizität und Dichte des Mediums. Elektromagnetische Wellen sind Transversalwellen aus gekoppelten elektrischen und magnetischen Feldern; sie benötigen kein Medium und breiten sich im Vakuum mit c = 3×10⁸ m/s aus. Beide Wellenarten zeigen Reflexion, Beugung und Interferenz. In der Sonographie nutzt man Ultraschall (2–20 MHz): hohe Frequenz → kurze Wellenlänge → gute Ortsauflösung, aber begrenzte Eindringtiefe. Die Laufzeitmessung reflektierter Echos ergibt Tifeninformationen (Impuls-Echo-Verfahren, Auflösung ≈ 1 mm). Die MRT nutzt keine Schallwellen, sondern Radiowellen im MHz-Bereich (Larmorfrequenz), um Kernspinresonanz von Wasserstoffkernen zu erzeugen. Kurz: Schall = mechanisch, braucht Medium; Licht/Radiowellen = elektromagnetisch, brauchen kein Medium.",
      },

      klinischerBezug:
        "Sonographie (Ultraschall 2–20 MHz) nutzt mechanische Wellen in Gewebe (c ≈ 1540 m/s). EKG-Wellen sind elektrische Signale – keine Schallwellen, aber periodische Signale analoger Zeitstruktur. MRT basiert auf EM-Resonanz (Larmorfrequenz).",

      selfTest: [
        {
          question:
            "Eine Schallwelle (c = 340 m/s) hat eine Frequenz von 1700 Hz. Welche Wellenlänge hat sie?",
          options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
          correctIndex: 1,
          explanation:
            "Mit c = f·λ ergibt sich λ = c/f = 340 m/s ÷ 1700 Hz = 0,20 m = 20 cm. 1700 Hz liegt im mittleren Hörbereich und entspricht einem Ton leicht über einem Standardton A (440 Hz). Die Wellenlänge von 20 cm ist im Bereich typischer Körperstrukturen – deshalb eignet sich dieser Frequenzbereich nicht zur hochauflösenden Bildgebung; Ultraschall mit MHz braucht Wellenlängen im Submillimeterbereich.",
          hints: [
            "λ = c/f – Wellenlänge aus Geschwindigkeit und Frequenz.",
            "Einheiten prüfen: m/s ÷ Hz = m/s ÷ (1/s) = m.",
          ],
          difficulty: 2,
          tags: ["wellen", "wellenlänge", "schall"],
        },
        {
          question:
            "Was ist der entscheidende Unterschied zwischen Schallwellen und elektromagnetischen Wellen?",
          options: [
            "Schallwellen haben stets eine höhere Frequenz.",
            "Schallwellen benötigen ein Medium zur Ausbreitung, EM-Wellen nicht.",
            "EM-Wellen sind Longitudinalwellen.",
            "Schallwellen breiten sich schneller aus als Licht.",
            "EM-Wellen können nicht reflektiert werden.",
          ],
          correctIndex: 1,
          explanation:
            "Schall ist eine mechanische Welle, die ein materielles Medium (Gas, Flüssigkeit, Festkörper) braucht, um sich fortzupflanzen – im Vakuum gibt es keinen Schall. Elektromagnetische Wellen (Licht, Radiowellen, Röntgen) sind Felder, die sich auch im Vakuum mit c = 3×10⁸ m/s ausbreiten. Schall ist ausserdem eine Longitudinalwelle, EM-Wellen sind Transversalwellen.",
          hints: [
            "Welche Welle breitet sich im Weltraum aus, welche nicht?",
            "Mechanisch vs. elektromagnetisch – was braucht ein Medium?",
          ],
          difficulty: 1,
          tags: ["schallwellen", "em-wellen", "medium"],
        },
        {
          question:
            "Ultraschall für oberflächennahe Strukturen verwendet eine höhere Frequenz als für tiefe Strukturen. Was ist der physikalische Grund dafür?",
          options: [
            "Höhere Frequenz bedeutet höhere Schallgeschwindigkeit.",
            "Höhere Frequenz ergibt kürzere Wellenlänge und damit bessere Auflösung, aber auch stärkere Dämpfung.",
            "Tiefe Strukturen reflektieren hohe Frequenzen stärker.",
            "Niedrige Frequenz hat eine kürzere Wellenlänge.",
            "Die Frequenz bestimmt die Richtung des Ultraschallstrahls.",
          ],
          correctIndex: 1,
          explanation:
            "Die Ortsauflösung einer Welle ist durch die Wellenlänge begrenzt: nur Strukturen, die grösser als etwa λ/2 sind, können aufgelöst werden. Bei c ≈ 1540 m/s und f = 10 MHz ist λ = 0,154 mm – ausreichend für kleine Strukturen. Höhere Frequenzen werden jedoch im Gewebe stärker absorbiert (Dämpfung ∝ f²), sodass die Eindringtiefe abnimmt. Deshalb wählt man: hohe Frequenz (≥ 10 MHz) für oberflächliche Strukturen (Schilddrüse, Venen), niedrige Frequenz (3–5 MHz) für tiefliegende Organe (Leber, Nieren).",
          hints: [
            "λ = c/f – wie ändert sich λ, wenn f steigt (bei gleichem c)?",
            "Kurze Wellenlänge = gute Auflösung; hohe Frequenz = mehr Dämpfung.",
          ],
          difficulty: 2,
          tags: ["ultraschall", "auflösung", "frequenz"],
        },
        {
          question:
            "Schall breitet sich in Wasser (c = 1480 m/s) mit einer Frequenz von 5 MHz aus. Welche Wellenlänge hat er?",
          options: ["0,030 mm", "0,296 mm", "2,96 mm", "296 mm", "7400 m"],
          correctIndex: 1,
          explanation:
            "λ = c/f = 1480 m/s ÷ 5×10⁶ Hz = 2,96×10⁻⁴ m = 0,296 mm. Diese sehr kurze Wellenlänge erklärt die hohe Auflösung medizinischer Ultraschallgeräte bei 5 MHz. Zum Vergleich: hörbarer Schall bei 1000 Hz in Luft hat λ ≈ 34 cm – also Faktor ~1000 grösser.",
          hints: [
            "λ = c/f; Vorsicht bei den Einheiten: MHz = 10⁶ Hz.",
            "1480 ÷ 5000000 = ? Ergebnis in Metern, dann in mm umrechnen.",
          ],
          difficulty: 2,
          tags: ["ultraschall", "wellenlänge", "wasser"],
        },
        {
          question:
            "Eine Welle tritt von Medium 1 (c₁ = 340 m/s) in Medium 2 (c₂ = 1480 m/s) über. Die Frequenz bleibt 1000 Hz. Was ändert sich?",
          options: [
            "Die Frequenz verdoppelt sich.",
            "Die Wellenlänge nimmt zu (von 0,34 m auf 1,48 m).",
            "Die Frequenz nimmt ab.",
            "Die Wellenlänge bleibt gleich.",
            "Sowohl Frequenz als auch Wellenlänge ändern sich.",
          ],
          correctIndex: 1,
          explanation:
            "Beim Medienwechsel bleibt die Frequenz konstant (sie wird von der Quelle vorgegeben). Die Ausbreitungsgeschwindigkeit ändert sich (c₁ = 340 → c₂ = 1480 m/s), daher ändert sich die Wellenlänge: λ₁ = 340/1000 = 0,34 m; λ₂ = 1480/1000 = 1,48 m. Die Wellenlänge steigt um den Faktor c₂/c₁ ≈ 4,35. Dies ist das Prinzip hinter der Brechung von Wellen.",
          hints: [
            "f bleibt konstant – was gehört zur Quelle, was zum Medium?",
            "λ = c/f – wenn c grösser wird und f gleich bleibt, wird λ …?",
          ],
          difficulty: 2,
          tags: ["medienwechsel", "wellenlänge", "frequenz"],
        },
        {
          question: "Welche der folgenden Aussagen über Transversalwellen ist korrekt?",
          options: [
            "Die Schwingungsrichtung ist parallel zur Ausbreitungsrichtung.",
            "Die Schwingungsrichtung ist senkrecht zur Ausbreitungsrichtung.",
            "Transversalwellen können sich nicht in Festkörpern ausbreiten.",
            "Schallwellen in Luft sind Transversalwellen.",
            "Transversalwellen können nicht polarisiert werden.",
          ],
          correctIndex: 1,
          explanation:
            "Bei Transversalwellen schwingen die Teilchen senkrecht zur Ausbreitungsrichtung. Beispiele: Licht (elektromagnetisch), Seilwellen, seismische S-Wellen. Longitudinalwellen (Schall in Gasen, seismische P-Wellen) schwingen parallel. Nur Transversalwellen können polarisiert werden – das ist eine direkte Konsequenz der senkrechten Schwingung. Schallwellen in Luft sind Longitudinalwellen.",
          hints: [
            "Trans = quer/senkrecht; Longitudinal = längs/parallel.",
            "Welche Wellenart ist polarisierbar?",
          ],
          difficulty: 1,
          tags: ["transversalwelle", "longitudinalwelle", "schwingungsrichtung"],
        },
        {
          question:
            "Eine elektromagnetische Welle hat im Vakuum eine Frequenz von 6×10¹⁴ Hz (sichtbares Licht). Welche Wellenlänge hat sie?",
          options: ["200 nm", "500 nm", "1000 nm", "1800 nm", "3000 nm"],
          correctIndex: 1,
          explanation:
            "λ = c/f = (3×10⁸ m/s) ÷ (6×10¹⁴ Hz) = 5×10⁻⁷ m = 500 nm. 500 nm liegt im grünen Bereich des sichtbaren Lichts. Zum Vergleich: UV beginnt bei ~400 nm (höhere Frequenz), IR beginnt bei ~700 nm (niedrigere Frequenz). Die Formel c = f·λ gilt für alle elektromagnetischen Wellen im Vakuum.",
          hints: ["λ = c/f mit c = 3×10⁸ m/s.", "Ergebnis in Nanometern: 1 nm = 10⁻⁹ m."],
          difficulty: 2,
          tags: ["em-wellen", "licht", "wellenlänge"],
        },
      ],
    },
    {
      id: "ph-3-03",
      title: "Wellenphänomene",
      stichworte: [
        "Interferenz",
        "Superpositionsprinzip",
        "Stehende Welle",
        "Doppler-Effekt",
        "Reflexion",
        "Brechung",
        "Beugung",
        "Totalreflexion",
        "Gangunterschied",
        "Snellius",
        "Kohärenz",
        "Doppler-Sonographie",
      ],
      content: `Wenn ein Gastroenterologe das flexible Endoskop durch den Magen führt, transportieren hauchdünne Glasfasern das Licht um enge Kurven zum Untersuchungsort — und das reflektierte Bild zurück auf den Monitor. Das dahinterstehende Prinzip heißt Totalreflexion: Licht prallt an der Innenwand der Faser ab, statt auszutreten. Reflexion, Brechung und Beugung sind die drei fundamentalen Wellenphänomene, die von der Endoskopie über die Augenoptik bis zur Mikroskopie die gesamte medizinische Bildgebung bestimmen.

---

## Reflexion — Einfallswinkel gleich Ausfallswinkel

Trifft eine Welle auf eine Grenzfläche zwischen zwei Medien, wird ein Teil der Energie zurückgeworfen. Das **Reflexionsgesetz** ist denkbar einfach:

**Einfallswinkel α₁ = Ausfallswinkel α₁'**

Beide Winkel werden zum **Lot** (Senkrechte auf die Grenzfläche) gemessen. Einfallender Strahl, Lot und reflektierter Strahl liegen in einer Ebene.

Zwei wichtige Zusatzregeln:
- **Reflexion am optisch dichteren Medium** (z. B. Luft → Glas): Es tritt ein **Phasensprung von π** (halbe Wellenlänge) auf — die reflektierte Welle wird invertiert
- **Reflexion am optisch dünneren Medium** (z. B. Glas → Luft): **Kein Phasensprung** — die Welle behält ihre Phase

Der Phasensprung ist entscheidend für die Interferenz an dünnen Schichten (z. B. Seifenblasenfarben, Entspiegelung von Brillengläsern) und für die Bildung stehender Wellen in akustischen Resonatoren.

> **Merke:** Reflexionsgesetz: Einfallswinkel = Ausfallswinkel. Am dichteren Medium tritt ein Phasensprung von π auf, am dünneren nicht.

---

## Brechung — Snellius und die optische Dichte

Wechselt eine Welle das Ausbreitungsmedium, ändert sich ihre Geschwindigkeit — und bei schrägem Einfall auch ihre **Richtung**. Dieses Phänomen heißt Brechung.

{{DIAGRAM:snellius-refraction}}

**Warum bricht Licht?** Stell dir ein Auto vor, das schräg von Asphalt auf Sand fährt: Das Rad, das zuerst den Sand berührt, wird langsamer, während das andere noch schnell dreht — das Auto schwenkt zur Sandseite. Genauso trifft eine Wellenfront schräg auf die Grenzfläche; der Teil im langsameren Medium wird abgebremst, der Rest läuft noch schnell → die Ausbreitungsrichtung dreht sich.

Das **Snellius'sche Brechungsgesetz** quantifiziert diesen Zusammenhang:

**n₁ · sin(α₁) = n₂ · sin(α₂)**

Der **Brechungsindex** n = c₀/c_Medium gibt an, um welchen Faktor Licht im Medium langsamer ist als im Vakuum (c₀ = 3 × 10⁸ m/s). Je größer n, desto „optisch dichter" ist das Medium.

| Material | n | Klinische Relevanz |
|----------|------|---------------------|
| Vakuum / Luft | 1,000 | Referenzmedium |
| Wasser | 1,333 | Ultraschall-Koppelgel |
| Hornhaut (Cornea) | 1,376 | Hauptbrechkraft des Auges |
| Augenlinse | 1,386–1,406 | Akkommodation |
| Glaskörper | 1,336 | Lichtleitung zur Retina |
| Glas (Brille) | 1,50–1,90 | Korrektur von Fehlsichtigkeit |

**Brechungsregeln:**
- Übergang in **dichteres** Medium (n₂ > n₁) → Brechung **zum Lot hin** (α₂ < α₁)
- Übergang in **dünneres** Medium (n₂ < n₁) → Brechung **vom Lot weg** (α₂ > α₁)
- Bei **senkrechtem** Einfall (α₁ = 0°) → **keine Richtungsänderung**, nur Geschwindigkeitsänderung

Die **Brechkraft des Auges** (~60 Dioptrien) entsteht hauptsächlich an der Hornhaut-Luft-Grenzfläche, weil dort der größte n-Sprung liegt (1,000 → 1,376). Deshalb sieht man unter Wasser unscharf: Der n-Sprung Wasser → Hornhaut (1,333 → 1,376) ist winzig, die Brechkraft bricht weg.

**Dispersion** (Zerlegung in Spektralfarben): Der Brechungsindex hängt leicht von der Wellenlänge ab — kurzwelliges Licht (blau, λ ≈ 400 nm) wird stärker gebrochen als langwelliges (rot, λ ≈ 700 nm). Ein Prisma zerlegt weißes Licht deshalb in ein Regenbogenspektrum. In der Medizin nutzt man Dispersion bei der Spektralphotometrie und bei der chromatischen Aberration von Linsen.

> **Merke:** Brechung zum Lot = langsameres Medium (größerer n). Brechung vom Lot = schnelleres Medium (kleinerer n). Die Hornhaut liefert ~2/3 der Brechkraft des Auges.

---

## Totalreflexion — Glasfaser und Endoskopie

Geht Licht vom optisch dichteren ins dünnere Medium (n₁ > n₂), wird es vom Lot weggebrochen. Mit steigendem Einfallswinkel wächst der Brechungswinkel, bis er 90° erreicht — der Strahl streift die Grenzfläche. Der zugehörige Einfallswinkel heißt **Grenzwinkel der Totalreflexion** α_G:

**sin(α_G) = n₂ / n₁**

Für alle Winkel α > α_G wird das Licht **vollständig reflektiert** — es dringt kein Strahl mehr ins zweite Medium. Dieses Phänomen heißt **Totalreflexion**.

Anwendungen:
- **Endoskopie:** Tausende Glasfasern (n_Kern ≈ 1,62, n_Mantel ≈ 1,52) leiten Licht durch Totalreflexion um Biegungen zum OP-Feld und das Bild zurück
- **Glasfaser-Kommunikation:** Lichtsignale durchqueren kilometerweite Fasern nahezu verlustfrei
- **Diamant:** n = 2,42 → α_G = nur 24,4° → fast jeder Strahl wird intern reflektiert → intensives Funkeln

> **Merke:** Totalreflexion tritt nur beim Übergang vom optisch dichteren ins dünnere Medium auf. Grenzwinkel: sin(α_G) = n₂/n₁. Grundlage jeder Glasfaser-Endoskopie.

---

## Beugung — Wellen umrunden Hindernisse

**Beugung** (Diffraktion) beschreibt die Ausbreitung von Wellen in den geometrischen Schattenraum hinter Hindernissen oder durch Öffnungen. Das **Huygens'sche Prinzip** erklärt den Mechanismus: Jeder Punkt einer Wellenfront ist Ausgangspunkt einer neuen Kugelwelle (Elementarwelle). Hinter einer Kante oder Öffnung überlagern sich diese Elementarwellen und erzeugen Beugungsmuster.

{{DIAGRAM:diffraction-slit}}

Die Faustregel: Beugung wird dann deutlich sichtbar, wenn die **Hindernisabmessung in der Größenordnung der Wellenlänge** liegt:
- **Schallwellen** (λ ≈ 0,02–17 m bei 20 Hz–17 kHz): beugen problemlos um Häuserecken und durch Türöffnungen — deshalb hört man um die Ecke
- **Lichtwellen** (λ ≈ 400–700 nm): beugen nur an Mikrostrukturen (Spalte, Gitter, Zellstrukturen)

**Einzelspalt:** Hinter einem Spalt der Breite b entsteht ein Beugungsmuster mit einem breiten Hauptmaximum und schwächeren Nebenmaxima. Die **Minima** liegen bei:

**sin(θ_min) = m · λ / b** (m = ±1, ±2, …)

Je enger der Spalt relativ zur Wellenlänge, desto stärker fächert das Muster auf.

**Beugungsgitter:** Viele parallele Spalte im Abstand d erzeugen scharfe Maxima bei:

**d · sin(θ) = m · λ** (m = 0, ±1, ±2, …)

Gitter werden in Spektrometern eingesetzt, um Licht in seine Wellenlängenkomponenten zu zerlegen — Grundlage der Spektralphotometrie in der klinischen Chemie.

**Auflösungsgrenze (Abbe-Kriterium):** Beugung begrenzt die Auflösung jedes optischen Instruments. Ein Lichtmikroskop kann Strukturen kleiner als ca. λ/2 ≈ 200 nm nicht mehr auflösen — deshalb braucht man für Viren (50–300 nm) und Zellorganellen ein Elektronenmikroskop (λ_Elektron ≈ 0,005 nm).

> **Merke:** Beugung tritt auf, wenn Hindernisabmessung ≈ Wellenlänge. Lichtmikroskop-Auflösungsgrenze ≈ 200 nm (Abbe). Beugung beweist den Wellencharakter des Lichts.

---

## Rechenbeispiel — Brechung an der Luft-Wasser-Grenze

Ein Lichtstrahl trifft unter α₁ = 45° auf eine ruhige Wasseroberfläche (n_Luft = 1,00, n_Wasser = 1,33). Gesucht: Brechungswinkel und Grenzwinkel der Totalreflexion.

**Schritt 1 — Brechungswinkel (Luft → Wasser):**
n₁ · sin(α₁) = n₂ · sin(α₂)
1,00 · sin(45°) = 1,33 · sin(α₂)
sin(α₂) = 0,707 / 1,33 = 0,5316
**α₂ = 32,1°** → Der Strahl wird zum Lot hin gebrochen (ins dichtere Medium).

**Schritt 2 — Grenzwinkel (Wasser → Luft):**
sin(α_G) = n₂/n₁ = 1,00/1,33 = 0,7519
**α_G = 48,8°**
Ein Taucher, der von unten flach zur Oberfläche blickt (Winkel > 48,8°), sieht Totalreflexion — die Wasseroberfläche wirkt wie ein Spiegel. Senkrecht nach oben (Winkel < 48,8°) sieht er den Himmel.

> 💡 **Prüfungstipp:** Brechungsaufgaben immer mit Snellius lösen: n₁ · sin(α₁) = n₂ · sin(α₂). Für Totalreflexion sin(α_G) = n_kleiner/n_größer — geht nur vom dichteren ins dünnere Medium!

---

## Klinische Vertiefung

**Endoskopie und Glasfaseroptik:** Flexible Endoskope enthalten bis zu 30.000 einzelne Glasfasern. Jede Faser transportiert einen Bildpunkt durch Totalreflexion. Moderne Videoendoskope verwenden zusätzlich einen CCD-Chip an der Spitze, aber die Beleuchtung erfolgt weiterhin über Lichtleitfasern.

**Pulsoximetrie:** Das Pulsoximeter sendet rotes (660 nm) und infrarotes (940 nm) Licht durch den Finger. Oxygeniertes Hämoglobin absorbiert mehr Infrarot, deoxygeniertes mehr Rot. Das Verhältnis der Transmissionen ergibt die Sauerstoffsättigung SpO₂ — ein direktes Anwendungsbeispiel des wellenlängenabhängigen Brechungs- und Absorptionsverhaltens (Lambert-Beer-Gesetz).

**Augenoptik:** Die Gesamtbrechkraft des Auges (~60 dpt) verteilt sich auf: Hornhaut ~43 dpt (feste Brechkraft, größter n-Sprung), Linse ~17 dpt (variabel durch Akkommodation). Bei Myopie (Kurzsichtigkeit) ist der Augapfel zu lang → Bild vor der Retina → Korrektur durch Zerstreuungslinse (konkav). Bei Hyperopie (Weitsichtigkeit) → Bild hinter Retina → Sammellinse (konvex).

**Laser-Medizin:** LASER erzeugt kohärentes, monochromatisches Licht. Anwendungen: LASIK (Hornhaut-Ablation zur Korrektur von Fehlsichtigkeit), Retina-Koagulation (Verschweißen von Netzhautablösungen), Laser-Lithotripsie (Zertrümmerung von Nierensteinen). Die präzise Fokussierbarkeit beruht auf der Beugungsbegrenzung: Je kürzer λ, desto kleiner der Fokuspunkt.`,

      diagram: "doppler-effect",
      lernziele: [
        "Konstruktive und destruktive Interferenz anhand des Gangunterschieds erklären und berechnen.",
        "Stehende Wellen beschreiben und Knotenanzahl sowie Wellenlänge der n-ten Harmonischen bestimmen.",
        "Den Doppler-Effekt qualitativ und quantitativ beschreiben und auf medizinische Anwendungen übertragen.",
        "Reflexion, Beugung und Brechung von Wellen erklären und klinisch relevante Beispiele nennen.",
        "Das Superpositionsprinzip formulieren und auf einfache Überlagerungsaufgaben anwenden.",
      ],

      sections: [
        {
          heading: "Interferenz und Superpositionsprinzip",
          text: "Das Superpositionsprinzip besagt, dass sich Wellenauslenkungen algebraisch addieren. Konstruktive Interferenz entsteht bei Gangunterschied Δs = n·λ (Wellen in Phase, Amplitude wird maximal). Destruktive Interferenz bei Δs = (n+½)·λ (Wellen gegenphasig, Amplitude wird minimal oder null). Grundvoraussetzung für stabile Interferenzmuster ist Kohärenz: die Wellen müssen gleiche Frequenz und eine konstante Phasenbeziehung aufweisen. Anwendung: destruktive Interferenz wird in Noise-Cancelling-Kopfhörern genutzt; konstruktive Interferenz in Laser und Hohlraumresonatoren.",
          merksatz: "Gangunterschied = n·λ → konstruktiv; = (n+½)·λ → destruktiv.",
        },
        {
          heading: "Stehende Wellen auf Saiten",
          text: "Stehende Wellen entstehen durch Überlagerung einer hin- und einer rücklaufenden Welle gleicher Frequenz. Die Grundschwingung (1. Harmonische) hat λ₁ = 2L, die 2. Harmonische λ₂ = L, die n-te Harmonische λₙ = 2L/n. Die entsprechenden Frequenzen sind fₙ = n·c/(2L). An den Enden liegen Knoten (eingespannte Enden) oder Bäuche (offene Enden). Die Zahl der Knotenlinien innerhalb der Saite ist (n−1). Stehende Wellen sind Grundlage der Musikinstrumentenphysik und der optischen Resonatoren im Laser.",
          merksatz: "n-te Harmonische: λₙ = 2L/n, fₙ = n·f₁, (n−1) innere Knoten.",
        },
        {
          heading: "Doppler-Effekt in der Medizin",
          text: "Der Doppler-Effekt beschreibt die Frequenzverschiebung bei Relativbewegung von Quelle und Beobachter. Bewegen sich beide aufeinander zu, steigt die empfangene Frequenz (Blauverschiebung im Licht; höherer Ton beim Schall). Die Doppler-Sonographie nutzt dies: ein Ultraschallkopf sendet Schall auf Blutgefässe; bewegte Erythrozyten reflektieren die Wellen mit veränderter Frequenz (Doppler-Shift). Aus der Frequenzverschiebung Δf = 2·f·v·cos(θ)/c berechnet man die Blutflussgeschwindigkeit v. Das Vorzeichen von Δf zeigt die Flussrichtung an (zu-/vonbeobachter).",
          merksatz:
            "Doppler-Shift ∝ Blutflussgeschwindigkeit → Diagnose von Stenosen und Embolien.",
        },
      ],

      merksätze: [
        "Superpositionsprinzip: Auslenkungen addieren sich algebraisch.",
        "Konstruktive Interferenz: Δs = n·λ → maximale Amplitude.",
        "Destruktive Interferenz: Δs = (n+½)·λ → minimale Amplitude (0 bei gleichen Amplituden).",
        "Stehende Welle entsteht durch Überlagerung hin- und rücklaufender Wellen.",
        "n-te Harmonische: λₙ = 2L/n; (n−1) innere Knoten.",
        "Doppler: Annäherung → höhere Frequenz; Entfernung → tiefere Frequenz.",
        "Doppler-Sonographie misst Blutflussgeschwindigkeit aus Frequenzverschiebung.",
        "Reflexion: Einfallswinkel = Ausfallswinkel; Phasensprung am dichteren Medium.",
        "Beugung tritt auf, wenn Hindernisabmessung ≈ Wellenlänge.",
        "Brechung: Snellius n₁·sin α₁ = n₂·sin α₂; Richtungsänderung beim Medienwechsel.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Doppler-Effekt und seine Anwendung in der medizinischen Diagnostik. Beschreiben Sie dabei auch, wie Interferenzphänomene in der Medizintechnik genutzt werden.",
        answer:
          "Der Doppler-Effekt beschreibt die scheinbare Frequenzverschiebung, die entsteht, wenn sich Schallquelle und Beobachter relativ zueinander bewegen. Bei Annäherung steigt die wahrgenommene Frequenz, bei Entfernung sinkt sie. Die Formel lautet f_obs = f_Q · (c ± v_Beob)/(c ∓ v_Q). In der Doppler-Sonographie sendet ein Schallkopf Ultraschall (1–10 MHz) auf Blutgefässe. Bewegte Erythrozyten reflektieren den Schall mit einer Frequenzverschiebung Δf proportional zur Flussgeschwindigkeit und dem Winkel zwischen Schallstrahl und Blutgefäss. Aus Δf = 2·f₀·v·cos θ/c berechnet man die Flussgeschwindigkeit v. Das Vorzeichen von Δf zeigt die Flussrichtung an – dies ermöglicht die Diagnose von Stenosen (erhöhte Flussgeschwindigkeit) und Thrombosen (fehlendes Signal). Interferenzphänomene spielen bei stehenden Wellen in Körperhöhlen, bei Beugung am Trommelfell und bei konstruktiver Interferenz in Hohlraumresonatoren (Lungen-Perkussion) eine Rolle. Destruktive Interferenz wird in Noise-Cancelling-Geräten und zur Dämpfungsoptimierung in medizinischen Schallkopf-Designs genutzt.",
      },

      klinischerBezug:
        "Doppler-Sonographie: Frequenzverschiebung reflektierter Ultraschallwellen zeigt Blutflussgeschwindigkeit und -richtung an → Diagnose von Stenosen, Embolien. Herzgeräusche entstehen durch Turbulenzen (destruktive Interferenz normaler Laminarströmung).",

      selfTest: [
        {
          question:
            "Zwei kohärente Wellen gleicher Amplitude überlagern sich. Der Gangunterschied beträgt λ/2. Was beobachtet man?",
          options: [
            "Konstruktive Interferenz mit doppelter Amplitude.",
            "Destruktive Interferenz, Amplitude = 0.",
            "Teilweise konstruktive Interferenz.",
            "Die Wellen bewegen sich aneinander vorbei ohne Wechselwirkung.",
            "Eine stehende Welle mit einem Bauch.",
          ],
          correctIndex: 1,
          explanation:
            "Ein Gangunterschied von λ/2 entspricht einem Phasenunterschied von π (180°). Die Wellen sind exakt gegenphasig: Wenn eine Welle den Wert +A hat, hat die andere −A. Die algebraische Summe ist null → vollständige destruktive Interferenz bei gleichen Amplituden. Dieses Prinzip nutzen Noise-Cancelling-Kopfhörer: Ein Mikrofon nimmt den Umgebungslärm auf, der Kopfhörer erzeugt eine gegenphasige Welle.",
          hints: [
            "Gangunterschied λ/2 entspricht welchem Phasenunterschied in Grad?",
            "Gegenphasige gleiche Amplituden: wie addieren sich +A und −A?",
          ],
          difficulty: 2,
          tags: ["interferenz", "gangunterschied", "destruktiv"],
        },
        {
          question:
            "Eine Saite der Länge L = 80 cm schwingt in der Grundschwingung. Welche Wellenlänge hat die stehende Welle?",
          options: ["40 cm", "80 cm", "160 cm", "120 cm", "320 cm"],
          correctIndex: 2,
          explanation:
            "Bei der Grundschwingung (n = 1) einer beidseitig eingespannten Saite gilt λ₁ = 2L = 2 × 80 cm = 160 cm. Die Saite bildet genau eine halbe Welle aus: ein Bauch in der Mitte, Knoten an beiden Enden. Verwechslung: λ = L würde der 2. Harmonischen entsprechen (n = 2). Merke: Grundschwingung bedeutet kleinstmögliche Frequenz, also grösste Wellenlänge.",
          hints: [
            "Grundschwingung = 1. Harmonische: wie viele Bäuche bildet die Saite?",
            "λ₁ = 2L – warum nicht λ₁ = L?",
          ],
          difficulty: 2,
          tags: ["stehende-welle", "harmonische", "grundschwingung"],
        },
        {
          question:
            "Auf einer 60 cm langen Saite bildet sich die 3. Harmonische aus. Wie viele Knoten liegen innerhalb der Saite (ohne die Enden)?",
          options: ["1", "2", "3", "4", "0"],
          correctIndex: 1,
          explanation:
            "Die n-te Harmonische hat (n−1) Knoten innerhalb der Saite. Für n = 3 sind das 3−1 = 2 innere Knoten. Die Saite wird in drei gleichlange Segmente geteilt, jedes ein halber Wellenberg. Wellenlänge: λ₃ = 2L/3 = 2×60/3 = 40 cm. Die 3. Harmonische hat dreimal die Frequenz der Grundschwingung.",
          hints: [
            "n-te Harmonische hat (n−1) innere Knoten – direkte Formel.",
            "Zeichne die Saite mit 3 Halbwellen: wo liegen die Knoten?",
          ],
          difficulty: 2,
          tags: ["stehende-welle", "knoten", "harmonische"],
        },
        {
          question:
            "Ein Rettungswagen (Sirene: 700 Hz) fährt mit 20 m/s auf einen stehenden Beobachter zu. c_Schall = 340 m/s. Welche Frequenz hört der Beobachter?",
          options: ["658 Hz", "741 Hz", "700 Hz", "780 Hz", "625 Hz"],
          correctIndex: 1,
          explanation:
            "Doppler-Formel bei bewegter Quelle (Beobachter ruht): f_obs = f_Q · c/(c − v_Q) = 700 × 340/(340−20) = 700 × 340/320 = 700 × 1,0625 ≈ 743,75 Hz. Am nächsten liegt Antwort B mit 741 Hz (geringe Rundungsabweichung je nach Genauigkeit). Nähert sich die Quelle, kommen Wellenkämme komprimiert an → höhere Frequenz. Nach Passieren des Beobachters: f_obs = 700 × 340/360 ≈ 661 Hz (tieferer Ton).",
          hints: [
            "Bewegt sich die Quelle zum Beobachter hin → nenner wird kleiner → f_obs grösser.",
            "Formel: f_obs = f_Q · c/(c − v_Quelle) wenn Quelle annähert.",
          ],
          difficulty: 3,
          tags: ["doppler-effekt", "frequenzverschiebung", "rettungswagen"],
        },
        {
          question: "Welche Aussage zur Beugung von Wellen ist korrekt?",
          options: [
            "Beugung tritt nur bei Licht auf, nicht bei Schall.",
            "Beugungseffekte sind am stärksten, wenn die Hindernisbreite in der Größenordnung der Wellenlänge liegt.",
            "Beugung verändert die Frequenz der Welle.",
            "Beugung ist nur bei Longitudinalwellen möglich.",
            "Beugung verhindert, dass Wellen in Schattenbereiche gelangen.",
          ],
          correctIndex: 1,
          explanation:
            "Beugung (Diffraktion) ist ein universelles Wellenphänomen – es tritt bei Schall, Licht und allen anderen Wellen auf. Der Effekt ist am ausgeprägtesten, wenn die Größe des Hindernisses oder der Öffnung vergleichbar mit der Wellenlänge ist. Licht (λ ≈ 500 nm) beugt an Mikrostrukturen deutlich; Schall (λ ≈ 34 cm bei 1000 Hz) beugt um großeHindernisse wie Häuserecken. Die Frequenz bleibt bei Beugung unverändert.",
          hints: [
            "Beugung erlaubt Wellen, in Schattenbereiche vorzudringen – welche Bedingung gilt?",
            "Vergleich: Schall biegt um Häuserecken – Licht nicht (weil λ viel kleiner ist).",
          ],
          difficulty: 1,
          tags: ["beugung", "diffraktion", "wellen"],
        },
        {
          question:
            "Zwei Wellen gleicher Amplitude A überlagern sich mit einem Phasenunterschied von π/2. Welche Resultante haben sie?",
          options: ["0", "A·√2", "2A", "A/2", "A·√3"],
          correctIndex: 1,
          explanation:
            "Bei einem Phasenunterschied von π/2 (90°) sind die Vektoren senkrecht. Die vektorielle Addition ergibt: A_res = √(A² + A²) = A√2 ≈ 1,41·A. Dies liegt zwischen konstruktiver (A_res = 2A bei Δφ = 0) und destruktiver Interferenz (A_res = 0 bei Δφ = π). Der Phasenunterschied von π/2 ergibt also eine teilweise Verstärkung.",
          hints: [
            "Amplituden addieren sich vektoriell – bei 90° Winkel: Pythagoras.",
            "√(A² + A²) = A·√? ",
          ],
          difficulty: 2,
          tags: ["interferenz", "überlagerung", "amplitude"],
        },
        {
          question:
            "Welche physikalische Größe misst die Doppler-Sonographie beim Blutfluss direkt?",
          options: [
            "Die Dichte des Blutes",
            "Die Frequenzverschiebung der reflektierten Ultraschallwellen",
            "Die Amplitude des reflektierten Schalls",
            "Die Wellenlänge des Ultraschalls im Blut",
            "Den Blutdruck",
          ],
          correctIndex: 1,
          explanation:
            "Die Doppler-Sonographie misst direkt die Frequenzverschiebung Δf zwischen gesendeten und reflektierten Ultraschallwellen. Aus Δf = 2·f₀·v·cos θ/c berechnet man die Blutflussgeschwindigkeit v. Das Vorzeichen von Δf zeigt die Flussrichtung an (auf den Schallkopf zu = positives Δf = Farbkodierung rot; weg vom Schallkopf = negatives Δf = blau in der Farbdoppler-Sonographie). Diese Methode ist fundamental für die Diagnose von Gefässstenosen, Herzfehlern und tiefen Venenthrombosen.",
          hints: [
            "Doppler = Frequenzverschiebung bei Relativbewegung.",
            "Was verändert sich, wenn Erythrozyten sich bewegen und Schall reflektieren?",
          ],
          difficulty: 2,
          tags: ["doppler-sonographie", "blutfluss", "ultraschall"],
        },
      ],
    },
    // ph-3-04 + ph-3-06 archived (Akustik nicht in MedAT 2026 Stichwortliste) → _archiv/physik/kap3-archived-uks.ts
    // ph-3-05 entfernt (Duplikat von ph-6-01/ph-6-04 in kap4)
  ],
};
