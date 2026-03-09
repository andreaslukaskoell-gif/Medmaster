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
    {
      id: "ph-3-04",
      title: "Akustik und Hörphysiologie",
      stichworte: [
        "Dezibel",
        "Schallpegel",
        "Hörschwelle",
        "Schmerzgrenze",
        "Tonotopie",
        "Cochlea",
        "Basilarmembran",
        "Haarzellen",
        "Schallleitungsschwerhörigkeit",
        "Schallempfindungsschwerhörigkeit",
        "Audiometrie",
        "Lärmschwerhörigkeit",
      ],
      content: `


## Dezibel: Lautstärke messen

Unser Ohr kann unglaublich leise und extrem laute Geräusche hören. Um diesen riesigen Bereich handlich zu machen, benutzt man die **Dezibel-Skala** (dB). Sie ist **logarithmisch** -- das heißt, gleiche dB-Schritte bedeuten immer eine Vervielfachung der Schallenergie.

Die wichtigsten Werte:
- 0 dB: Hörschwelle (gerade noch hörbar)
- 60 dB: normales Gespräch
- 85 dB: ab hier drohen Gehörschäden bei Dauerbelastung
- 120 dB: Schmerzgrenze

**Die drei goldenen Regeln:**
- **+3 dB** = doppelte Schallenergie (kaum hörbar)
- **+10 dB** = 10-fache Schallenergie (klingt doppelt so laut)
- **+20 dB** = 100-fache Schallenergie

> **Merke:** +3 dB = doppelte Energie. +10 dB = 10-fache Energie und klingt doppelt so laut. Ab 85 dB wird es bei Dauerbelastung gefährlich.

---

## Wie dein Ohr funktioniert

Schall trifft auf dein Trommelfell und wird über drei winzige Knöchelchen (Hammer, Amboss, Steigbügel) ins Innenohr weitergeleitet. Zwei Mechanismen verstärken den Schalldruck: Das **Flächenverhältnis** von Trommelfell (~55 mm²) zu ovalem Fenster (~3,2 mm²) ergibt einen Faktor ~17, der **Hebeleffekt** der Knöchelchenkette einen Faktor ~1,3 — insgesamt eine Druckverstärkung um etwa das **22-Fache** (Impedanzanpassung Luft → Perilymphe). Diese Verstärkung ist nötig, weil im Innenohr Flüssigkeit statt Luft ist.

Im Innenohr sitzt die **Schnecke** (Cochlea). Sie ist wie eine aufgerollte Flötenröhre. An verschiedenen Stellen reagiert sie auf verschiedene Töne:
- **Am Eingang** (Basis): hohe Töne (z. B. Pfeiftöne)
- **Am Ende** (Spitze/Apex): tiefe Töne (z. B. Brummen)

Das nennt man **Tonotopie** -- jede Tonhöhe hat ihren eigenen Platz in der Schnecke.

Winzige **Haarzellen** wandeln die Schwingungen in elektrische Signale um, die zum Gehirn gehen. Diese Haarzellen sind empfindlich -- Lärm kann sie dauerhaft zerstören (beim Menschen derzeit nicht regenerierbar).

> **Merke:** Hohe Töne am Eingang der Schnecke, tiefe Töne am Ende. Haarzellen wandeln Schwingungen in Nervenimpulse um -- einmal geschädigt, derzeit nicht reparierbar.

---

## Zwei Arten von Schwerhörigkeit

**Schallleitungs-Schwerhörigkeit:** Das Problem sitzt im Mittelohr (z. B. verstopfter Gehörgang, defektes Trommelfell). Der Schall kommt nicht richtig zum Innenohr durch. Aber wenn du eine Stimmgabel auf den Kopf setzt, hörst du den Ton trotzdem -- weil der Schall über den Knochen direkt zum Innenohr kommt.

**Schallempfindungs-Schwerhörigkeit:** Das Problem sitzt im Innenohr -- die Haarzellen sind beschädigt (z. B. durch Lärm oder Alter). Hier hilft auch die Knochenleitung nicht, weil das Innenohr selbst betroffen ist. Typisch: Ein Hörverlust speziell bei 4000 Hz (sogenannte C5-Senke), verursacht durch zu laute Musik oder Maschinenlärm.

> **Merke:** Mittelohr-Problem = Schallleitungs-Schwerhörigkeit (Knochenleitung funktioniert noch). Innenohr-Problem = Schallempfindungs-Schwerhörigkeit (beides gestört).

---

## Wann wird Lärm gefährlich?

Ab **85 dB** bei dauerhafter Belastung (8 Stunden) droht Gehörschaden. Pro +3 dB halbiert sich die erlaubte Zeit: Bei 88 dB nur noch 4 Stunden, bei 91 dB nur noch 2 Stunden. Ein Rockkonzert mit 110 dB kann schon nach wenigen Minuten die Haarzellen schädigen -- und zwar für immer.

> **Merke:** 85 dB = Gefahrengrenze bei 8 Stunden. Pro +3 dB halbiert sich die sichere Zeit. Haarzellschäden sind beim Menschen derzeit nicht reversibel.`,

      lernziele: [
        "Den Schalldruckpegel in Dezibel berechnen und die Skala mit klinisch relevanten Werten verknüpfen.",
        "Den Unterschied zwischen Lautstärke und Tonhöhe sowie ihre physikalischen Korrelate erklären.",
        "Den Aufbau der Cochlea und das Prinzip der Tonotopie beschreiben.",
        "Die Wanderwellen der Basilarmembran und ihre Bedeutung für die Frequenzauflösung erläutern.",
        "Schallleitungs- und Schallempfindungsschwerhörigkeit unterscheiden und Audiometrie-Grundprinzipien kennen.",
      ],

      sections: [
        {
          heading: "Dezibel-Skala und Logarithmus",
          text: "Der Mensch hört Schalldrücke von 2×10⁻⁵ Pa (Hörschwelle) bis 20 Pa (Schmerzgrenze) – ein Faktor von 10⁶. Eine lineare Skala wäre unpraktisch; der Logarithmus komprimiert diesen Bereich auf 0–120 dB. Verdopplung des Schalldrucks ergibt +6 dB; Verdopplung der Intensität (Leistung) ergibt +3 dB. Zehnfache Intensität = +10 dB. Dieser Unterschied (6 vs. 3 dB für Verdopplung) liegt daran, dass Intensität ∝ p², also L_dB = 10·log(I/I₀) = 10·log(p²/p₀²) = 20·log(p/p₀).",
          merksatz:
            "L = 20·log(p/p₀) dB; +6 dB → doppelter Schalldruck; +20 dB → 10-facher Schalldruck.",
        },
        {
          heading: "Tonotopie und Haarzellen",
          text: "Die Cochlea ist eine spiralförmige Kammer (ca. 2,5 Windungen) gefüllt mit Perilymphe und Endolymphe. Schallwellen erzeugen Wanderwellen auf der Basilarmembran, deren Amplitude je nach Frequenz an unterschiedlichen Stellen maximal ist: hohe Frequenzen → Basis (steif), tiefe Frequenzen → Apex (elastisch). Diese räumliche Frequenzauftrennung – Tonotopie – ist die anatomische Grundlage der Tonhöhendiskriminierung. Die inneren Haarzellen wandeln Membranauslenkung in Rezeptorpotenziale um; äussere Haarzellen verstärken aktiv die Schwingung (2000-fache Verstärkung), was die extreme Sensitivität erklärt.",
          merksatz: "Tonotopie: Basis = hohe Frequenzen; Apex = tiefe Frequenzen.",
        },
        {
          heading: "Lärmschwerhörigkeit und Audiometrie",
          text: "Dauerexposition > 85 dB schädigt äussere Haarzellen irreversibel – vor allem im Bereich 4 kHz (Empfindlichkeitsmaximum des Ohrs). Im Audiogramm zeigt sich eine charakteristische C5-Senke. Tinnitus entsteht oft durch Spontanaktivität beschädigter Haarzellen oder des Hörnervs. Das Reintonaudiogramm misst die Hörschwelle frequenzspezifisch. Das Cochlea-Implantat (CI) stimuliert den Hörnerv direkt: Elektroden an der Basis aktivieren höhere Frequenzen, an der Apex tiefere – die Tonotopie wird elektronisch nachgeahmt.",
          merksatz:
            "Lärm > 85 dB → irreversibler Haarzellschaden bei 4 kHz (C5-Senke im Audiogramm).",
        },
      ],
      merksätze: [
        "L = 20·log₁₀(p/p₀) dB mit p₀ = 2×10⁻⁵ Pa (Hörschwelle bei 1 kHz).",
        "Hörschwelle: 0 dB; Gespräch: ~60 dB; Schmerzgrenze: ~120 dB.",
        "+6 dB = doppelter Schalldruck; +20 dB = 10-facher Schalldruck.",
        "Hörbereich: 20 Hz – 20 kHz; grösste Empfindlichkeit bei 1–4 kHz.",
        "Tonhöhe = Frequenz; Lautstärke = Schalldruckpegel.",
        "Cochlea-Wanderwellen: Tonotopie – Basis für hohe, Apex für tiefe Frequenzen.",
        "Haarzellen wandeln Mechanik in elektrische Signale (Mechanoelektrik).",
        "Schallleitungsschwerhörigkeit: Mittelohrproblem; Knochenleitung intakt.",
        "Schallempfindungsschwerhörigkeit: Haarzell- oder Hörnervschaden; beides gestört.",
        "Lärmschwerhörigkeit: Haarzellschaden > 85 dB, typisch bei 4 kHz (C5-Senke).",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Physiologie des Hörens von der Schallaufnahme bis zur Frequenzauflösung in der Cochlea. Gehen Sie dabei auf die physikalischen Prinzipien der Schallverstärkung und der Tonotopie ein.",
        answer:
          "Schall trifft als Druckwelle auf das Trommelfell und versetzt es in Schwingung. Die Gehörknöchelchen (Hammer, Amboss, Steigbügel) leiten die Schwingung zum ovalen Fenster weiter und verstärken dabei den Schalldruck: Das Flächenverhältnis von Trommelfell (~55 mm²) zu ovalem Fenster (~3,2 mm²) ergibt eine Druckverstärkung um den Faktor ~17, ergänzt durch den Hebeleffekt der Knöchelchen (~1,3) – insgesamt etwa 22-fache Druckerhöhung. Dies ist nötig, um Energie vom luftgefüllten Mittelohr in die flüssigkeitsgefüllte Cochlea zu übertragen (Impedanzanpassung). In der Cochlea erzeugt der Steigbügel Wanderwellen in der Perilymphe, die sich auf der Basilarmembran ausbreiten. Die Basilarmembran ist an der Basis schmal und steif (hohe Eigenfrequenz), am Apex breit und elastisch (tiefe Eigenfrequenz). Daher hat jede Frequenz ihren maximalen Amplitudenort: Tonotopie. An diesem Ort biegen sich die Stereozilien der Haarzellen und öffnen Ionenkanäle → Depolarisation → Aktionspotenziale im Hörnerv. Äussere Haarzellen verstärken aktiv durch Motilität (Prestin-Protein). Hoher Lärm (> 85 dB) schädigt bevorzugt Haarzellen bei 4 kHz irreversibel.",
      },

      klinischerBezug:
        "Audiometrie misst frequenzspezifische Hörschwellen (dB HL). Lärmschwerhörigkeit: Haarzellschaden bei 4 kHz, C5-Senke im Audiogramm. Cochlea-Implantat nutzt Tonotopie: tonotop kodierte Elektrodenmatrix stimuliert Hörnerv direkt. Schwerhörigkeit betrifft ~15 % der Bevölkerung.",

      selfTest: [
        {
          question:
            "Ein Schalldruckpegel von 60 dB entspricht einem Gespräch. Wie groß ist das Verhältnis p/p₀ des Schalldrucks zur Hörschwelle?",
          options: ["6", "60", "600", "1000", "1 000 000"],
          correctIndex: 3,
          explanation:
            "L = 20·log(p/p₀) → 60 = 20·log(p/p₀) → log(p/p₀) = 3 → p/p₀ = 10³ = 1000. Bei 60 dB ist der Schalldruck also 1000-mal so groß wie die Hörschwelle p₀. Häufiger Fehler: L = 60 mit p/p₀ = 60 gleichzusetzen (lineares statt logarithmisches Denken). Pro 20 dB steigt p/p₀ um Faktor 10: 0 dB → 1, 20 dB → 10, 40 dB → 100, 60 dB → 1000.",
          hints: ["60 = 20·log(p/p₀) → log(p/p₀) = 3.", "10³ = ?"],
          difficulty: 2,
          tags: ["schalldruckpegel", "dezibel", "logarithmus"],
        },
        {
          question: "Welche Frequenzen regen bei der Tonotopie die Basis der Cochlea an?",
          options: [
            "Tiefe Frequenzen (< 500 Hz)",
            "Hohe Frequenzen (> 4000 Hz)",
            "Mittelfrequenzen (1000–2000 Hz)",
            "Alle Frequenzen gleichmässig",
            "Nur der Frequenzbereich 20–100 Hz",
          ],
          correctIndex: 1,
          explanation:
            "Die Basilarmembran ist an der Basis (nahe dem ovalen Fenster) schmal und steif – sie resoniert bei hohen Frequenzen (> 4 kHz). Am Apex (Spitze der Cochlea) ist sie breit und elastisch – sie resoniert bei tiefen Frequenzen (20–100 Hz). Diese räumliche Frequenzauftrennung (Tonotopie) ermöglicht dem Gehirn, Töne nach Frequenz zu unterscheiden. Das Cochlea-Implantat nutzt dieses Prinzip: Elektroden nahe der Basis stimulieren höhere Frequenzen, Elektroden nahe dem Apex tiefere.",
          hints: [
            "Basis = steif = hohe Eigenfrequenz; Apex = elastisch = tiefe Eigenfrequenz.",
            "Erinnerung: eine steife Feder schwingt schnell (hohe f).",
          ],
          difficulty: 2,
          tags: ["cochlea", "tonotopie", "hörorgan"],
        },
        {
          question:
            "Der Schallpegel steigt von 60 dB auf 80 dB. Um welchen Faktor steigt die Schallintensität?",
          options: ["Faktor 2", "Faktor 10", "Faktor 20", "Faktor 100", "Faktor 1000"],
          correctIndex: 3,
          explanation:
            "L = 10·log(I/I₀). Eine Differenz von 20 dB: ΔL = 10·log(I₂/I₁) → 20 = 10·log(I₂/I₁) → log(I₂/I₁) = 2 → I₂/I₁ = 10² = 100. Ein Anstieg von 10 dB entspricht einem 10-fachen Intensitätsanstieg; 20 dB entsprechen dem 100-fachen. Der Schalldruck steigt dabei nur um Faktor 10 (weil I ∝ p²).",
          hints: [
            "ΔL = 10·log(I₂/I₁); 20 dB Differenz → log(?) = 2.",
            "Pro 10 dB steigt I um Faktor 10 – was gilt für 20 dB?",
          ],
          difficulty: 2,
          tags: ["schallintensität", "dezibel", "schallpegel"],
        },
        {
          question:
            "Was unterscheidet Schallleitungsschwerhörigkeit von Schallempfindungsschwerhörigkeit?",
          options: [
            "Schallleitungsschwerhörigkeit betrifft das Innenohr; Schallempfindungsschwerhörigkeit das Mittelohr.",
            "Bei Schallleitungsschwerhörigkeit ist die Knochenleitung intakt; bei Schallempfindungsschwerhörigkeit sind Knochen- und Luftleitung gleich betroffen.",
            "Beide Typen sind nicht unterscheidbar.",
            "Schallleitungsschwerhörigkeit betrifft nur tiefe Frequenzen.",
            "Schallempfindungsschwerhörigkeit ist immer reversibel.",
          ],
          correctIndex: 1,
          explanation:
            "Schallleitungsschwerhörigkeit entsteht durch Störungen im Außenohr oder Mittelohr (Cerumen, Trommelfellriss, Otosklerose): Der Schall gelangt nicht normal zum Innenohr. Die Knochenleitung (Schall direkt über Knochen zum Innenohr) ist ungestört → Weberscher Versuch: Lateralisation zur betroffenen Seite. Schallempfindungsschwerhörigkeit (SNHL) betrifft Haarzellen oder Hörnerv: Knochen- und Luftleitung sind gleichermassen reduziert. SNHL ist meist irreversibel (Haarzellen regenerieren nicht). Lärmschwerhörigkeit ist eine SNHL.",
          hints: [
            "Schallleitungs- = Mittelohrproblem; Schallempfindungs- = Innenohrproblem.",
            "Knochenleitung umgeht das Mittelohr – welcher Typ ist gestört, wenn Knochen intakt?",
          ],
          difficulty: 2,
          tags: ["schwerhörigkeit", "audiologie", "cochlea"],
        },
        {
          question: "Welche dB-Grenze gilt als Schwelle für dauerhaft gehörschädigenden Lärm?",
          options: ["60 dB", "75 dB", "85 dB", "100 dB", "120 dB"],
          correctIndex: 2,
          explanation:
            "Bei kontinuierlicher Exposition > 85 dB über mehrere Stunden täglich kommt es zu irreversibler Haarzellschädigung in der Cochlea – bevorzugt im Bereich um 4 kHz. Dies entspricht dem arbeitsmedizinischen Grenzwert (EU-Richtlinie: 85 dB(A) als unterer Auslösewert). Einmalige kurze Spitzen bis 120 dB sind weniger schädlich als stundenlanger Lärm bei 90 dB. 60 dB (Gespräch) ist vollkommen unbedenklich; 120 dB (Schmerzgrenze) verursacht sofort Schmerzen und kann auch kurzfristig schädigen.",
          hints: [
            "EU-Arbeitsschutz: ab welchem Wert sind Gehörschützer Pflicht?",
            "85 dB ist der kritische Dauerpegel – merken für den MedAT!",
          ],
          difficulty: 1,
          tags: ["lärm", "gehörschaden", "dezibel"],
        },
        {
          question:
            "Warum klingt ein Ton bei 1000 Hz subjektiv lauter als ein gleich starker Ton bei 100 Hz (gleicher Schalldruckpegel)?",
          options: [
            "Weil 1000 Hz eine höhere Ausbreitungsgeschwindigkeit hat.",
            "Weil das menschliche Ohr bei 1000–4000 Hz empfindlicher ist als bei tiefen Frequenzen.",
            "Weil tiefe Töne weniger Energie transportieren.",
            "Weil 100 Hz im Infraschallbereich liegt.",
            "Weil 1000 Hz Licht-interferiert.",
          ],
          correctIndex: 1,
          explanation:
            "Die Empfindlichkeit des menschlichen Gehörs ist stark frequenzabhängig. Im Bereich 1–4 kHz ist das Ohr am empfindlichsten (evolutionäre Anpassung für Sprachkommunikation). Bei tiefen Frequenzen (100 Hz) muss der Schalldruckpegel deutlich höher sein, um gleich laut zu klingen (Fletcher-Munson-Kurven / isophones Lautheitsdiagramm). Bei 100 Hz liegt die Wahrnehmungsschwelle etwa 40 dB über der bei 1000 Hz. 100 Hz ist kein Infraschall – Infraschall liegt unter 20 Hz.",
          hints: [
            "Fletcher-Munson-Kurven: gleiche Lautheit bei verschiedenen Frequenzen erfordert welchen Pegel?",
            "Evolutionärer Vorteil: Sprachfrequenzen von 1–4 kHz werden bevorzugt verarbeitet.",
          ],
          difficulty: 2,
          tags: ["psychoakustik", "lautheit", "frequenz"],
        },
        {
          question:
            "Ein Audiogramm zeigt bei einem Patienten eine tiefe Senke bei 4 kHz, während die restlichen Frequenzen normal sind. Was ist die wahrscheinlichste Ursache?",
          options: [
            "Mittelohrentzündung",
            "Cerumen im Gehörgang",
            "Lärminduzierte Schallempfindungsschwerhörigkeit (C5-Senke)",
            "Borreliose",
            "Kongenitale Schallleitungsschwerhörigkeit",
          ],
          correctIndex: 2,
          explanation:
            "Die klassische C5-Senke (Hörverlust bei ca. 4 kHz) ist das pathognomonische Muster einer lärminduzierte Schallempfindungsschwerhörigkeit. Die äusseren Haarzellen bei 4 kHz sind besonders vulnerabel für Lärmschäden, da dieser Bereich der maximalen Empfindlichkeit des Ohrs entspricht. Mittelohrentzündung und Cerumen verursachen eine Schallleitungsschwerhörigkeit mit flachem Abfall über alle Frequenzen (keine spezifische Senke). Eine kongenitale Schallempfindungsschwerhörigkeit betrifft meist alle Frequenzen gleichmässig oder bevorzugt hohe Frequenzen.",
          hints: [
            "C5-Senke bei 4 kHz = welche Art von Schwerhörigkeit, welche Ursache?",
            "4 kHz ist das empfindlichste Gebiet des Ohrs – welche Exposition schädigt dort?",
          ],
          difficulty: 3,
          tags: ["c5-senke", "lärmschwerhörigkeit", "audiogramm"],
        },
      ],
    },
    {
      id: "ph-3-06",
      title: "Akustik Vertiefung — Schallpegel, Impedanz und Doppler-Ultraschall",
      stichworte: [
        "Schallpegel",
        "Dezibel-Rechnung",
        "Schallimpedanz",
        "Reflexionskoeffizient",
        "Doppler-Effekt",
        "Doppler-Sonographie",
        "Ultraschall-Diagnostik",
        "Frequenzbereiche",
        "Infraschall",
        "Hörschall",
        "Ultraschall",
        "Blutflussmessung",
      ],
      content: `Lärmschwerhörigkeit ist die häufigste anerkannte Berufskrankheit in Österreich — und ein Paradebeispiel dafür, warum die Physik des Schalls klinisch hochrelevant ist. Ob ein HNO-Arzt das Tonaudiogramm eines Bauarbeiters beurteilt, eine Radiologin die optimale Ultraschallfrequenz für ein Abdomen-Screening wählt oder ein Arbeitsmediziner Grenzwerte für Gehörschutz festlegt: Die Konzepte Schallpegel, Impedanz und Doppler-Effekt sind unverzichtbar.

---

## Die Dezibel-Skala — Logarithmisch denken

Der **Schallpegel** (auch Schalldruckpegel) L wird in Dezibel (dB) angegeben und ist logarithmisch definiert:

**L = 10 · log₁₀(I / I₀)** mit der Bezugsintensität I₀ = 10⁻¹² W/m² (Hörschwelle bei 1 kHz)

Alternativ über den Schalldruck p: **L = 20 · log₁₀(p / p₀)** mit p₀ = 2 × 10⁻⁵ Pa

Warum logarithmisch? Das menschliche Ohr verarbeitet einen enormen Intensitätsbereich — von der Hörschwelle (0 dB) bis zur Schmerzgrenze (~130 dB) liegt ein Faktor von 10¹³ in der Intensität. Die logarithmische Skala komprimiert diesen Bereich auf handliche Zahlen. Die Analogie: Auch die Richter-Skala für Erdbeben ist logarithmisch — Stufe 7 ist nicht doppelt so stark wie 3,5, sondern rund 2000-mal.

**Zentrale Rechenregeln:**

| Änderung | Intensität | Schalldruck | Wahrnehmung |
|----------|-----------|-------------|-------------|
| +3 dB | × 2 | × 1,41 | Gerade wahrnehmbar |
| +6 dB | × 4 | × 2 | Deutlich lauter |
| +10 dB | × 10 | × 3,16 | Doppelt so laut empfunden |
| +20 dB | × 100 | × 10 | Vierfach so laut empfunden |

Die drei goldenen dB-Regeln:
- **Verdopplung der Quellen:** 2 gleiche Quellen → +3 dB (nicht doppelte dB!)
- **Verzehnfachung der Quellen:** 10 gleiche Quellen → +10 dB
- **Abstandsgesetz:** Doppelter Abstand → −6 dB (Freifeld, I ∝ 1/r²)

> **Merke:** Dezibel addieren sich logarithmisch. Zwei identische 80-dB-Quellen ergeben 83 dB — nicht 160 dB. Pro Entfernungsverdopplung sinkt der Pegel um 6 dB.

**Rechenbeispiel — Schallpegel im OP:**
Ein chirurgisches Sauggerät erzeugt 75 dB. Vier identische Geräte laufen gleichzeitig.
→ L_ges = 75 + 10 · log₁₀(4) = 75 + 10 · 0,602 = 75 + 6 = **81 dB**
Zusätzlich steht ein Patient 8 m statt 2 m entfernt:
→ ΔL = −20 · log₁₀(8/2) = −20 · log₁₀(4) = −20 · 0,602 = **−12 dB** → 81 − 12 = 69 dB

{{DIAGRAM:decibel-scale}}

---

## Lautstärke — Phon, Sone und Isophone

Der physikalische Schallpegel (dB) beschreibt die Intensität objektiv. Die **empfundene Lautstärke** hängt aber zusätzlich von der Frequenz ab — das Ohr ist bei verschiedenen Frequenzen unterschiedlich empfindlich. Ein 50-dB-Ton bei 100 Hz klingt wesentlich leiser als ein 50-dB-Ton bei 3 kHz.

**Phon** — Die frequenzgewichtete Lautstärkeeinheit:
- Ein Ton beliebiger Frequenz hat X Phon, wenn er subjektiv genauso laut klingt wie ein 1-kHz-Ton mit X dB
- Bei 1 kHz gilt daher: **dB = Phon** (Referenzfrequenz)
- Bei tiefen Frequenzen (z. B. 100 Hz) braucht man deutlich mehr dB, um dieselbe Phon-Zahl zu erreichen — tiefe Töne werden schlechter gehört

**Isophone (Fletcher-Munson-Kurven)** verbinden alle Frequenz-Pegel-Kombinationen gleicher Lautstärke. Sie zeigen:
- Maximale Empfindlichkeit bei **2–5 kHz** (Sprachbereich!) — hier ist die Hörschwelle am niedrigsten (~−5 dB bei 3,5 kHz)
- Starker Empfindlichkeitsverlust unter 500 Hz und über 10 kHz
- Bei hohen Pegeln (>80 Phon) verlaufen die Kurven flacher — der Frequenzeffekt nimmt ab

**Sone** — Die lineare Lautheitsskala:
- 1 Sone = Lautheit eines 1-kHz-Tons bei 40 dB (= 40 Phon)
- Verdopplung der Sone-Zahl = subjektiv doppelt so laut
- Umrechnung: +10 Phon ≈ doppelte Sone-Zahl (80 Phon = 16 Sone, 90 Phon = 32 Sone)

> **Merke:** Phon = frequenzgewichtete Lautstärke (bei 1 kHz: Phon = dB). Sone = lineares Lautheitsmaß (+10 Phon → doppelte Sone). Die Isophonen zeigen: Das Ohr hört tiefe Töne schlecht und Sprache (2–5 kHz) am besten.

{{DIAGRAM:isophone-curves}}

---

## Hörbereich und Presbyakusis

Das gesunde junge Ohr nimmt Frequenzen von **20 Hz bis 20 kHz** wahr:

| Bereich | Frequenz | Beispiele |
|---------|----------|-----------|
| Infraschall | < 20 Hz | Erdbeben, Windturbinen — nicht hörbar, aber spürbar |
| Hörschall | 20 Hz – 20 kHz | Sprache (250 Hz – 4 kHz), Musik |
| Ultraschall | > 20 kHz | Diagnostik (2–20 MHz), Fledermäuse |

Die obere Hörgrenze sinkt mit dem Alter — **Presbyakusis** (Altersschwerhörigkeit) betrifft zuerst die hohen Frequenzen. Ab dem 30. Lebensjahr verliert man etwa 1 dB/Jahr bei 4 kHz. Ursache: progressive Degeneration der äußeren Haarzellen (Verstärkerfunktion) in der Cochlea (Hörschnecke im Innenohr), beginnend an der Basis (Hochtonbereich).

Klinisch wichtig: Ein 60-Jähriger hört typischerweise nur noch bis ~12 kHz. Konsonanten (hohe Frequenzen: s, f, sch) werden undeutlich → "Ich höre, aber verstehe nicht."

> **Merke:** Hörbereich 20 Hz – 20 kHz. Presbyakusis: Hochtonverlust ab ~30 Jahren, äußere Haarzellen degenerieren von basal nach apikal. Sprache (250 Hz – 4 kHz) bleibt am längsten erhalten.

---

## Audiometrie — Das Tonaudiogramm

Die **Tonaudiometrie** ist die Standardmethode zur Hörprüfung. Das Ergebnis — das Audiogramm — zeigt die Hörschwelle in dB HL (Hearing Level) für jede Prüffrequenz (250 Hz bis 8 kHz).

{{DIAGRAM:audiogram}}

**Zwei Leitungswege, zwei Kurven:**

- **Luftleitung (LL):** Schall über Kopfhörer → Gehörgang → Trommelfell → Gehörknöchelchen → Innenohr. Testet die gesamte Hörkette.
- **Knochenleitung (KL):** Vibrator auf dem Mastoid (Knochen hinter dem Ohr) → Schädelknochen → direkt Innenohr. Umgeht das Mittelohr komplett.

Aus dem Vergleich beider Kurven ergibt sich die Diagnose:

| Befund | Luftleitung | Knochenleitung | Differenz (Air-Bone Gap) |
|--------|-------------|----------------|--------------------------|
| **Schallleitungsschwerhörigkeit** | ↓ | Normal | Groß (> 10 dB) |
| **Schallempfindungsschwerhörigkeit** | ↓ | ↓ | Klein (< 10 dB) |
| **Kombinierte Schwerhörigkeit** | ↓↓ | ↓ | Vorhanden |

**Schallleitungsschwerhörigkeit** — Problem im Außen-/Mittelohr (Cerumen, Paukenerguss, Otosklerose). Die Knochenleitung ist intakt, weil das Innenohr funktioniert.

**Schallempfindungsschwerhörigkeit** — Problem im Innenohr oder Hörnerv (Lärm, Presbyakusis, Akustikusneurinom). Beide Kurven fallen gleichmäßig ab, weil das Innenohr selbst geschädigt ist.

> **Merke:** Air-Bone Gap = Differenz zwischen LL und KL. Große Lücke → Schallleitung gestört. Keine Lücke → Schallempfindung gestört. Klassiker im MedAT!

---

## Schallimpedanz und Reflexion

Die **akustische Impedanz** (Schallkennimpedanz) Z beschreibt den Widerstand eines Mediums gegen Schallausbreitung:

**Z = ρ · c** (Einheit: Rayl = kg/(m² · s))

Dabei ist ρ die Dichte des Mediums und c die Schallgeschwindigkeit. Stell dir Z als akustisches Analogon zum elektrischen Widerstand vor — je größer der Impedanzunterschied an einer Grenzfläche, desto mehr Schall wird reflektiert.

**Typische Impedanzwerte:**

| Medium | Z (× 10⁶ Rayl) | c (m/s) |
|--------|----------------|---------|
| Luft | 0,000408 | 343 |
| Wasser | 1,48 | 1480 |
| Weichgewebe | 1,63 | 1540 |
| Knochen | 6,30 | 3500 |
| Fett | 1,38 | 1450 |

Der **Reflexionskoeffizient** R an einer senkrecht beschallten Grenzfläche zwischen Medium 1 (Z₁) und Medium 2 (Z₂):

**R = [(Z₂ − Z₁) / (Z₂ + Z₁)]²**

Der Transmissionskoeffizient (durchgelassener Anteil) ist T = 1 − R.

**Rechenbeispiel — Weichgewebe → Knochen:**
R = [(6,30 − 1,63) / (6,30 + 1,63)]² = [4,67 / 7,93]² = 0,589² ≈ **0,35** → 35 % Reflexion.
Deshalb wirft Knochen ein starkes Echo und erzeugt einen **akustischen Schatten** dahinter.

**Rechenbeispiel — Luft → Gewebe:**
R = [(1,63 × 10⁶ − 408) / (1,63 × 10⁶ + 408)]² ≈ [0,9995]² ≈ **0,999** → 99,9 % Reflexion.
Deshalb ist Ultraschallgel unverzichtbar: Es hat Z ≈ Z_Gewebe und eliminiert die Luftschicht.

> **Merke:** Z = ρ · c. Je größer der Z-Unterschied an einer Grenzfläche, desto stärker die Reflexion. Luft-Gewebe: 99,9 % reflektiert (darum Gel). Gewebe-Knochen: ~35 % reflektiert (akustischer Schatten).

---

## Der Doppler-Effekt und Doppler-Sonographie

Der **Doppler-Effekt** beschreibt die Frequenzänderung, wenn sich Quelle und Beobachter relativ zueinander bewegen. Ein Rettungswagen klingt beim Näherkommen höher und beim Entfernen tiefer — die Schallwellen werden vor dem Fahrzeug komprimiert (höhere Frequenz) und dahinter gedehnt (niedrigere Frequenz).

**Allgemeine Doppler-Formel (Akustik):**

**f' = f₀ · (c ± v_B) / (c ∓ v_Q)**

Dabei ist f₀ die Sendefrequenz, c die Schallgeschwindigkeit, v_B die Geschwindigkeit des Beobachters und v_Q die Geschwindigkeit der Quelle. Oberes Vorzeichen bei Annäherung, unteres bei Entfernung.

**Doppler-Sonographie — Blutfluss messen:**

In der klinischen Doppler-Sonographie sendet ein Schallkopf Ultraschall der Frequenz f₀ auf ein Blutgefäß. Bewegte Erythrozyten reflektieren den Schall mit veränderter Frequenz. Die **Doppler-Verschiebung** (Doppler-Shift) beträgt:

**Δf = (2 · f₀ · v · cos θ) / c**

- v = Blutflussgeschwindigkeit
- θ = Winkel zwischen Schallstrahl und Gefäßachse
- c = Schallgeschwindigkeit im Gewebe (~1540 m/s)
- Faktor 2: Der Schall legt den Weg zweimal zurück (hin und zurück)

{{DIAGRAM:doppler-ultrasound}}

**Warum der Winkel θ entscheidend ist:**
- Bei **θ = 0°** (Schallstrahl parallel zum Fluss): cos 0° = 1 → maximales Signal
- Bei **θ = 60°**: cos 60° = 0,5 → halbes Signal — klinisch der Standardwinkel
- Bei **θ = 90°** (senkrecht zum Fluss): cos 90° = 0 → **kein Signal!** Obwohl Blut fließt, misst man Δf = 0. Ein fataler Messfehler, keine fehlende Durchblutung.

**Rechenbeispiel — Karotis-Doppler:**
f₀ = 5 MHz, Δf = 3000 Hz, θ = 60°, c = 1540 m/s.
v = Δf · c / (2 · f₀ · cos θ) = 3000 × 1540 / (2 × 5 × 10⁶ × 0,5) = 4.620.000 / 5.000.000 ≈ **0,92 m/s**
Normwert A. carotis interna: 0,6–1,0 m/s systolisch. Werte > 2,3 m/s → hochgradige Stenose (> 70 %).

**Farbkodierung im Farbdoppler:**

| Farbe | Bedeutung |
|-------|-----------|
| Rot | Fluss auf den Schallkopf zu (positives Δf) |
| Blau | Fluss vom Schallkopf weg (negatives Δf) |
| Mosaik/Aliasing | Turbulenter Fluss (z. B. Stenose, Klappenvitium) |

> **Merke:** Δf = 2f₀v·cos θ/c. Bei θ = 90° kein Signal (cos 90° = 0) — optimaler Winkel: 30–60°. Rot = zum Schallkopf, Blau = weg (Eselsbrücke: BART — Blue Away, Red Towards).

---

## Ultraschall in der Diagnostik

Diagnostischer Ultraschall nutzt Frequenzen von **2–20 MHz** — weit oberhalb des Hörbereichs. Das Grundprinzip: Ein **Piezo-Kristall** (piezoelektrischer Wandler) im Schallkopf sendet kurze Ultraschallpulse ins Gewebe. An Grenzflächen mit unterschiedlicher akustischer Impedanz wird ein Teil reflektiert und als Echo empfangen. Aus der Laufzeit des Echos berechnet der Computer die Tiefe der reflektierenden Struktur.

**Frequenzwahl — Der Tiefen-Auflösungs-Kompromiss:**

| Frequenz | Eindringtiefe | Auflösung | Anwendung |
|----------|---------------|-----------|-----------|
| 2–3,5 MHz | 15–20 cm | ~1 mm | Abdomen, Herz (Echokardiographie) |
| 5–7,5 MHz | 5–10 cm | ~0,5 mm | Schilddrüse, Gefäße, Mammasonographie |
| 10–15 MHz | 2–4 cm | ~0,2 mm | Haut, Gelenke, muskuloskelettale Diagnostik |
| 20 MHz | < 1 cm | ~0,1 mm | Auge, intradermale Strukturen |

**Zusammenhang:** Höhere Frequenz → kürzere Wellenlänge (λ = c/f) → bessere Auflösung. Gleichzeitig steigt die Gewebedämpfung (∝ f²) → geringere Eindringtiefe. Jede Untersuchung erfordert einen Kompromiss.

**Warum Ultraschallgel?** Die akustische Impedanz von Luft (Z ≈ 408 Rayl) unterscheidet sich um den Faktor ~4000 von Gewebe (Z ≈ 1,63 × 10⁶ Rayl). An einer Luft-Haut-Grenze werden **99,9 %** des Ultraschalls reflektiert — kein Bild möglich. Das Gel (Z ≈ Z_Gewebe) eliminiert die Luftschicht und ermöglicht nahezu vollständige Transmission.

**Therapeutischer Ultraschall:** Neben der Diagnostik wird Ultraschall auch therapeutisch eingesetzt:
- **HIFU** (hochintensiver fokussierter Ultraschall): Fokussierte Energie → lokale Erhitzung > 60 °C → Koagulationsnekrose (z. B. Uterusmyome, Prostatatumoren)
- **ESWL** (extrakorporale Stoßwellen-Lithotripsie): Fokussierte Druckwellen fragmentieren Nierensteine an Impedanzgrenzen

> **Merke:** Ultraschallgel überbrückt den Impedanz-Mismatch zwischen Luft und Haut (Faktor ~4000). Frequenzwahl: hohe f = gute Auflösung, geringe Tiefe; niedrige f = umgekehrt. HIFU: therapeutische Wärme; ESWL: Steinfragmentierung.

---

## Lärmschutz und Grenzwerte

Ab **85 dB** Dauerbelastung (8-Stunden-Arbeitstag) besteht Gehörgefährdung — die gesetzliche Grenze für verpflichtenden Gehörschutz am Arbeitsplatz. Die Schädigung betrifft zuerst die äußeren Haarzellen bei **4 kHz** (c5-Senke im Audiogramm), weil dort die mechanische Belastung der Basilarmembran am größten ist.

**Lärmexpositions-Halbierungsregel:** Pro +3 dB halbiert sich die zulässige Expositionszeit:

| Pegel | Zulässige Dauer | Alltagsbeispiel |
|-------|----------------|-----------------|
| 85 dB | 8 Stunden | Straßenverkehr, lautes Restaurant |
| 88 dB | 4 Stunden | Rasenmäher |
| 91 dB | 2 Stunden | Motorrad |
| 100 dB | 15 Minuten | MRT-Gerät, Diskothek |
| 110 dB | ~1 Minute | Rockkonzert (Bühne) |
| 115 dB | Sofort gefährlich | Presslufthammer |
| 140 dB | Schmerzgrenze | Schusswaffe (akutes Knalltrauma) |

Klinische Relevanz: Selbst im OP erreichen Instrumente 80–95 dB — chirurgisches Personal ist chronisch exponiert.

> **Merke:** Ab 85 dB/8 h → Gehörgefährdung. Pro +3 dB halbiert sich die erlaubte Zeit. Lärm-Audiogramm: 4-kHz-Senke (c5-Senke) als Frühzeichen. Lärmschutz ist die wichtigste Prävention der Innenohr-Schwerhörigkeit.

---

## Prüfungsrelevante Zahlen und Fakten

| Größe | Wert |
|-------|------|
| Hörschwelle | I₀ = 10⁻¹² W/m², p₀ = 2 × 10⁻⁵ Pa, 0 dB |
| Schmerzgrenze | ~130 dB (~1 W/m²) |
| Hörbereich | 20 Hz – 20 kHz |
| Sprachbereich | 250 Hz – 4 kHz |
| Maximale Empfindlichkeit | 2–5 kHz (~3,5 kHz) |
| Schallgeschwindigkeit Luft | 343 m/s (bei 20 °C) |
| Schallgeschwindigkeit Gewebe | ~1540 m/s |
| Z Luft | 408 Rayl |
| Z Weichgewebe | 1,63 × 10⁶ Rayl |
| Z Knochen | 6,30 × 10⁶ Rayl |
| Gehörgefährdung | ab 85 dB / 8 h |
| c5-Senke (Lärmschwerhörigkeit) | 4 kHz |
| Presbyakusis-Rate | ~1 dB/Jahr ab 30 LJ bei 4 kHz |
| Doppler-Optimalwinkel | 30–60° |
| Karotis v_syst normal | 0,6–1,0 m/s |`,

      lernziele: [
        "Dezibel-Aufgaben systematisch lösen: Quellenaddition, Abstandsgesetz, Pegelunterschiede.",
        "Die Schallimpedanz Z = ρ·c und den Reflexionskoeffizienten berechnen und klinisch interpretieren.",
        "Den Doppler-Effekt quantitativ beschreiben und auf Doppler-Sonographie anwenden.",
        "Frequenzbereiche des Ultraschalls kennen und die Wahl der Frequenz begründen.",
        "Die Bedeutung der Impedanzanpassung (Ultraschallgel) physikalisch erklären.",
      ],

      sections: [
        {
          heading: "Dezibel-Rechnung: Nicht-lineare Addition",
          text: "Die Dezibel-Skala ist logarithmisch: Intensitäten addieren sich linear (I_ges = I₁ + I₂), aber in der dB-Skala ergibt die Verdopplung der Intensität nur +3 dB. Zwei identische Schallquellen à 80 dB erzeugen 83 dB, nicht 160 dB. Pro Verdopplung des Abstands nimmt der Pegel um 6 dB ab (I ∝ 1/r²). Diese Rechenregeln sind MedAT-Klassiker.",
          merksatz: "2 gleiche Quellen → +3 dB; 10 gleiche Quellen → +10 dB; 2× Abstand → −6 dB.",
        },
        {
          heading: "Frequenz-Tiefen-Kompromiss im Ultraschall",
          text: "Höhere Ultraschallfrequenz bedeutet kürzere Wellenlänge und bessere Auflösung — aber auch stärkere Gewebedämpfung (∝ f²) und geringere Eindringtiefe. Für tiefe Organe (Leber, Herz: 5–15 cm) nutzt man 2–3,5 MHz; für oberflächliche Strukturen (Schilddrüse, Haut: 1–4 cm) 7,5–15 MHz. Die Impedanztabelle und den Reflexionskoeffizienten findest du in UK 02.",
          merksatz:
            "Hohe US-Frequenz → gute Auflösung, wenig Tiefe; niedrige Frequenz → umgekehrt.",
        },
        {
          heading: "Therapeutischer Ultraschall: HIFU und ESWL",
          text: "Neben der Diagnostik wird Ultraschall auch therapeutisch eingesetzt. HIFU (hochintensiver fokussierter Ultraschall) konzentriert Energie im Brennpunkt → lokale Erhitzung > 60 °C → Koagulationsnekrose (z. B. Uterusmyome, Prostatatumoren). ESWL (extrakorporale Stosswellen-Lithotripsie) fragmentiert Nierensteine durch fokussierte Druckwellen, die an Impedanzgrenzen im Stein Reflexion und Scherspannung erzeugen.",
          merksatz:
            "HIFU = fokussierte Wärme zur Tumorablation; ESWL = fokussierte Druckwellen zur Steinfragmentierung.",
        },
      ],

      merksätze: [
        "2 gleiche Quellen → +3 dB; 10 gleiche → +10 dB; doppelter Abstand → −6 dB.",
        "Phon = dB bei 1 kHz; +10 Phon → doppelte Sone-Zahl (subjektiv doppelt so laut).",
        "Z = ρ · c; R = [(Z₂−Z₁)/(Z₂+Z₁)]² — je größer ΔZ, desto mehr Reflexion.",
        "Doppler: Δf = 2f₀v·cos θ/c — bei θ = 90° kein Signal! Optimal: 30–60°.",
        "Ultraschall: hohe f → gute Auflösung, wenig Tiefe; niedrige f → umgekehrt.",
        "Gehörgefährdung ab 85 dB/8 h; +3 dB → halbe erlaubte Zeit; Frühzeichen: c5-Senke bei 4 kHz.",
      ],

      altfrage: {
        question:
          "Erläutern Sie das physikalische Prinzip der Doppler-Sonographie zur Blutflussmessung. Gehen Sie auf die Rolle des Winkels θ, die Farbkodierung und typische klinische Anwendungen ein.",
        answer:
          "Die Doppler-Sonographie nutzt den Doppler-Effekt: Ein Ultraschallkopf sendet Schallwellen einer definierten Frequenz f₀ (typisch 2–10 MHz) in Richtung eines Blutgefässes. Bewegte Erythrozyten reflektieren den Schall mit veränderter Frequenz. Der Frequenzunterschied (Doppler-Shift) beträgt Δf = 2f₀v·cos θ/c, wobei v die Blutflussgeschwindigkeit, θ der Winkel zwischen Schallstrahl und Gefäss und c die Schallgeschwindigkeit im Gewebe (~1540 m/s) ist. Der Faktor 2 entsteht, weil der Schall den Weg zweimal durchläuft (zum Erythrozyten und zurück). Entscheidend: Bei θ = 90° ist cos 90° = 0 → kein Signal → der Schallkopf muss schräg zum Gefäss stehen (optimal 30–60°). In der Farbdoppler-Darstellung wird Blut, das auf den Schallkopf zufließt, rot kodiert (positives Δf), Blut, das sich entfernt, blau (negatives Δf). Turbulente Strömung (z. B. an Stenosen) erscheint als Farbmosaik. Klinisch: Diagnose von Karotisstenosen (erhöhte v), Venenthrombosen (fehlendes Signal), Herzklappenfehler (Regurgitation), fetale Durchblutung (Nabelschnur-Doppler).",
      },

      klinischerBezug:
        "Doppler-Sonographie: Karotisstenose-Diagnostik, tiefe Venenthrombose, Echokardiographie (Klappenvitien, Regurgitation). Ultraschall-Impedanzanpassung mit Gel. Obstetrik: fetaler Doppler (Nabelschnurarterie). Therapeutisch: HIFU (fokussierter Ultraschall für Tumorablation), ESWL (Lithotripsie).",

      selfTest: [
        {
          question:
            "Zwei identische Maschinen erzeugen jeweils 85 dB. Wie hoch ist der Gesamtpegel?",
          options: ["85 dB", "88 dB", "90 dB", "170 dB", "82 dB"],
          correctIndex: 1,
          explanation:
            "Zwei gleich laute Quellen verdoppeln die Intensität: L_ges = 85 + 10·log₁₀(2) = 85 + 3 = 88 dB. Nicht 170 dB — das wäre lineare Addition der Pegel, ein fundamentaler Fehler. Dezibel addieren sich logarithmisch: Intensitäten addieren, dann in dB umrechnen.",
          hints: [
            "Intensitäten addieren sich: I_ges = 2·I → wie viel dB ist das mehr?",
            "+3 dB = Intensitätsverdopplung → 85 + 3 = ?",
          ],
          difficulty: 1,
          tags: ["dezibel", "quellenaddition", "logarithmus"],
        },
        {
          question:
            "Ein Lautsprecher erzeugt 90 dB in 2 m Abstand. Welcher Pegel herrscht in 20 m Abstand (Freifeld)?",
          options: ["70 dB", "80 dB", "84 dB", "45 dB", "88 dB"],
          correctIndex: 0,
          explanation:
            "Abstandsgesetz: ΔL = −20·log₁₀(r₂/r₁) = −20·log₁₀(20/2) = −20·log₁₀(10) = −20 dB. L = 90 − 20 = 70 dB. Der Abstand verzehnfacht sich, die Intensität sinkt um Faktor 100 (I ∝ 1/r²), was −20 dB entspricht.",
          hints: ["Verzehnfachung des Abstands → welche dB-Änderung?", "−20·log₁₀(10) = −20 dB."],
          difficulty: 2,
          tags: ["abstandsgesetz", "dezibel", "schallpegel"],
        },
        {
          question: "Was beschreibt die akustische Impedanz Z und wie berechnet man sie?",
          options: [
            "Z = f · λ — Produkt aus Frequenz und Wellenlänge",
            "Z = ρ · c — Produkt aus Dichte und Schallgeschwindigkeit des Mediums",
            "Z = p / v — Quotient aus Druck und Geschwindigkeit der Quelle",
            "Z = I / A — Quotient aus Intensität und Fläche",
            "Z = m · a — Produkt aus Masse und Beschleunigung",
          ],
          correctIndex: 1,
          explanation:
            "Die akustische Impedanz Z = ρ · c (Einheit: Rayl = kg/(m²·s)) beschreibt den Widerstand eines Mediums gegen Schallausbreitung. Je größer der Impedanzunterschied an einer Grenzfläche, desto mehr Schall wird reflektiert. Typisch: Z_Luft ≈ 408 Rayl, Z_Gewebe ≈ 1,63 × 10⁶ Rayl.",
          hints: [
            "Z hängt von den Materialeigenschaften ab: Dichte ρ und Schallgeschwindigkeit c.",
            "Einheit: Rayl = kg/(m²·s).",
          ],
          difficulty: 1,
          tags: ["impedanz", "grundlagen", "definition"],
        },
        {
          question: "Warum ist Ultraschallgel für die Sonographie unverzichtbar?",
          options: [
            "Es kühlt den Schallkopf und verhindert Überhitzung.",
            "Es gleicht die akustische Impedanz zwischen Luft und Haut an und verhindert 99,9 % Reflexion.",
            "Es verstärkt die Ultraschallfrequenz um den Faktor 10.",
            "Es filtert Störfrequenzen aus dem Umgebungslärm.",
            "Es erhöht die Schallgeschwindigkeit im Gewebe auf Lichtgeschwindigkeit.",
          ],
          correctIndex: 1,
          explanation:
            "Z_Luft ≈ 408 Rayl vs. Z_Gewebe ≈ 1,63×10⁶ Rayl — Faktor ~4000. Der Reflexionskoeffizient an der Luft-Haut-Grenze beträgt R ≈ 0,999 (99,9 %). Das Gel hat Z ≈ Z_Gewebe und eliminiert die Luftschicht → nahezu vollständige Transmission.",
          hints: [
            "Z_Luft vs. Z_Gewebe — Faktor ~4000 Unterschied → wie viel wird reflektiert?",
            "Gel hat Z ≈ Z_Gewebe → minimaler Impedanzsprung → Transmission.",
          ],
          difficulty: 1,
          tags: ["ultraschallgel", "impedanz", "reflexion"],
        },
        {
          question:
            "Bei der Doppler-Sonographie wird der Schallkopf senkrecht (θ = 90°) zum Blutgefäß gehalten. Was passiert?",
          options: [
            "Das Signal wird maximal stark.",
            "Die Frequenzverschiebung ist maximal.",
            "Es wird kein Doppler-Signal detektiert (Δf = 0).",
            "Die Farbkodierung zeigt automatisch Rot.",
            "Der Ultraschall wird total reflektiert.",
          ],
          correctIndex: 2,
          explanation:
            "Δf = 2f₀v·cos(θ)/c. Bei θ = 90° ist cos(90°) = 0 → Δf = 0 → kein Doppler-Signal, obwohl Blut fließt. Kein Signal ≠ kein Fluss — es bedeutet nur: falscher Winkel. Optimaler Beschallungswinkel: 30–60°.",
          hints: [
            "cos(90°) = 0 — was passiert mit Δf = 2f₀v·cos(θ)/c?",
            "Kein Doppler-Signal ≠ kein Blutfluss! Es bedeutet nur: falscher Winkel.",
          ],
          difficulty: 2,
          tags: ["doppler", "winkel", "sonographie"],
        },
        {
          question:
            "Ein Ultraschall mit f = 3,5 MHz wird für die Leber gewählt. Warum nicht 15 MHz?",
          options: [
            "15 MHz ist zu teuer für den klinischen Einsatz.",
            "Die Leber liegt tief im Abdomen; 15 MHz wird zu stark gedämpft und dringt nicht tief genug ein.",
            "15 MHz erzeugt Artefakte an der Leberoberfläche.",
            "Die Wellenlänge bei 15 MHz ist zu groß für die Leber.",
            "15 MHz liegt im Infraschallbereich und wird nicht reflektiert.",
          ],
          correctIndex: 1,
          explanation:
            "Ultraschalldämpfung im Gewebe steigt mit f² (Dämpfung ∝ f²). Bei 15 MHz: Eindringtiefe nur ~2–3 cm — viel zu wenig für die Leber (5–15 cm tief). Bei 3,5 MHz: ~15 cm Eindringtiefe bei ~1 mm Auflösung — ein guter Kompromiss.",
          hints: [
            "Dämpfung ∝ f² — hohe Frequenz → starke Absorption → geringe Eindringtiefe.",
            "3,5 MHz → ~15 cm Tiefe; 15 MHz → nur ~2–3 cm.",
          ],
          difficulty: 2,
          tags: ["ultraschall", "frequenzwahl", "eindringtiefe"],
        },
        {
          question:
            "Bei einer Doppler-Untersuchung der A. carotis beträgt die Frequenzverschiebung 3000 Hz (f₀ = 5 MHz, θ = 60°, c = 1540 m/s). Wie groß ist die Blutflussgeschwindigkeit?",
          options: ["0,23 m/s", "0,46 m/s", "0,92 m/s", "1,54 m/s", "0,06 m/s"],
          correctIndex: 2,
          explanation:
            "v = Δf·c / (2·f₀·cos θ) = 3000 × 1540 / (2 × 5×10⁶ × 0,5) = 4.620.000 / 5.000.000 ≈ 0,92 m/s. Normwert A. carotis interna: 0,6–1,0 m/s systolisch. Werte > 2,3 m/s → hochgradige Stenose (> 70 %).",
          hints: [
            "Formel nach v umstellen: v = Δf·c / (2·f₀·cos θ).",
            "cos(60°) = 0,5 → einsetzen und berechnen.",
          ],
          difficulty: 3,
          tags: ["doppler-sonographie", "blutfluss", "karotis"],
        },
        {
          question:
            "Welcher Reflexionskoeffizient ergibt sich an der Grenzfläche Weichgewebe (Z = 1,63×10⁶ Rayl) → Knochen (Z = 6,30×10⁶ Rayl)?",
          options: ["R ≈ 0,001", "R ≈ 0,05", "R ≈ 0,15", "R ≈ 0,35", "R ≈ 0,99"],
          correctIndex: 3,
          explanation:
            "R = [(Z₂−Z₁)/(Z₂+Z₁)]² = [(6,30−1,63)/(6,30+1,63)]² = [4,67/7,93]² = 0,589² ≈ 0,35. Etwa 35 % werden reflektiert — Knochen erzeugt ein starkes Echo und einen akustischen Schatten dahinter. Vergleich: Luft-Gewebe R ≈ 0,999.",
          hints: [
            "R = [(Z₂−Z₁)/(Z₂+Z₁)]² — Differenz, Quotient, quadrieren.",
            "Großer Z-Unterschied → großes R → starke Reflexion.",
          ],
          difficulty: 3,
          tags: ["reflexionskoeffizient", "impedanz", "knochen"],
        },
      ],
    },
    // ph-3-05 entfernt (Duplikat von ph-6-01/ph-6-04 in kap4)
  ],
};
