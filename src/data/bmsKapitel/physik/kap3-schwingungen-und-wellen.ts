import type { Kapitel } from "../types";

export const physKap3: Kapitel = {
  id: "phys-kap3",
  title: "Schwingungen und Wellen",
  subject: "physik",
  icon: "〰️",
  estimatedTime: "80 min",
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────────────
    // UK 1: Harmonische Schwingungen
    // ─────────────────────────────────────────────────────────────────────────
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
      content: `## Einleitung

**Worum geht es?** Die **harmonische Schwingung** ist das Grundmodell periodischer Bewegung: Rückstellkraft proportional zur Auslenkung (F = −k·x), Auslenkung x(t) = A·cos(ωt+φ₀). **Fadenpendel** T = 2π√(l/g), **Federpendel** T = 2π√(m/k); **Resonanz** und **Dämpfung**. **Warum für den MedAT relevant?** Amplitude, Frequenz, Periodendauer, Kreisfrequenz ω = 2πf, Faden- vs. Federpendel, Resonanz (MRT), Dämpfung werden geprüft. **Welche Fragen werden beantwortet?** „T Fadenpendel — wovon abhängig?“; „E_kin = E_pot bei welcher Auslenkung?“; „ω vs. f?“; „Resonanz — wann maximale Amplitude?“; „Isochronie?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu harmonischen Schwingungen abgedeckt.

**In diesem Kapitel lernst du:**
- die **harmonische Schwingung** (x(t) = A·cos(ωt+φ₀)), **Amplitude** A, **Kreisfrequenz** ω = 2πf = 2π/T
- **Fadenpendel**: T = 2π√(l/g) — unabhängig von Masse und Amplitude (**Isochronie**)
- **Federpendel**: T = 2π√(m/k); Energie E_ges = ½·k·A² und Energiegleichstand bei x = A/√2
- **Resonanz** (Anregungsfrequenz = Eigenfrequenz → maximale Amplitude) und **Dämpfung** (Abklingen)
- typische Prüfungsfallen (ω vs. f, E ∝ A², Faden- vs. Federpendel) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **periodische Bewegungen** um eine Ruhelage: Rückstellkraft proportional zur Auslenkung (F = −k·x) führt zu Sinus-/Kosinus-Schwingungen. Das beschreibt Pendel, Federn, aber auch Schwingkreise in der Technik und Kernspin im MRT. Du brauchst es für Wellen (nächstes Unterkapitel), für Akustik und für MedAT-Aufgaben zu T, f, ω und Resonanz.

---

![Schwingung](/grafik-25-schwingung.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt die harmonische Schwingung x(t) = A·cos(ωt+φ), die Periodendauer beim Fadenpendel T = 2π√(l/g) und beim Federpendel T = 2π√(m/k), sowie Resonanz und Dämpfung.

Eine harmonische Schwingung ist die einfachste periodische Bewegung und beschreibt die zeitliche Auslenkung eines Körpers um eine Gleichgewichtslage. Die Rückstellkraft ist dabei stets proportional zur Auslenkung und dieser entgegengerichtet: **F = −k·x** (Hooke'sches Gesetz). Das mathematische Modell ist eine Sinus- oder Kosinusfunktion:

**x(t) = A · cos(ωt + φ₀)**

- **A** (Amplitude) – maximale Auslenkung aus der Ruhelage [m]
- **ω** (Kreisfrequenz) – ω = 2πf = 2π/T [rad/s]
- **T** (Periodendauer) – Zeit für eine vollständige Schwingung [s]
- **f** (Frequenz) – Anzahl der Schwingungen pro Sekunde [Hz = 1/s]
- **φ₀** (Anfangsphase) – bestimmt den Zustand zur Zeit t = 0

**Formelklartext:** x(t) = A·cos(ωt+φ₀) beschreibt, *wo* sich der Körper zu jedem Zeitpunkt t befindet: Die Auslenkung schwankt zwischen +A und −A; ωt ist der „Phasenwinkel“ (in Radiant), der angibt, wie weit die Schwingung in ihrer Periode fortgeschritten ist. **F = −k·x** bedeutet: Die Rückstellkraft ist proportional zur Auslenkung und wirkt immer zur Ruhelage hin; je steifer die Feder (größeres k), desto größer die Kraft bei gleicher Auslenkung.

> **Merke:** Die Kreisfrequenz ω = 2πf = 2π/T ist die zentrale Verknüpfungsgrösse zwischen allen Schwingungsparametern. Sie gibt an, welchen Winkel (in Radiant) die Schwingung pro Sekunde durchläuft.

Aus der Auslenkungsfunktion lassen sich Geschwindigkeit und Beschleunigung durch Ableitung gewinnen:
- v(t) = −A·ω·sin(ωt + φ₀)  →  v_max = A·ω (bei Durchgang durch Ruhelage)
- a(t) = −A·ω²·cos(ωt + φ₀) = −ω²·x(t)  →  a_max = A·ω² (bei maximaler Auslenkung)

Die Beschleunigung ist stets der Auslenkung entgegengerichtet (Rückstellkraft), was die charakteristische Eigenschaft des harmonischen Oszillators ist. Dieses Merkmal a = −ω²·x ist die **Differentialgleichung der harmonischen Schwingung** und definiert, ob ein System tatsächlich harmonisch schwingt.

## Schwingungsgrößen-Tabelle

| Grösse | Symbol | Einheit | Zusammenhang |
|--------|--------|---------|--------------|
| Amplitude | A | m | Maximale Auslenkung |
| Periodendauer | T | s | T = 1/f = 2π/ω |
| Frequenz | f | Hz | f = 1/T = ω/(2π) |
| Kreisfrequenz | ω | rad/s | ω = 2πf = 2π/T |
| Phase | φ₀ | rad | Anfangsbedingung |

## Fadenpendel

Für kleine Winkel (< 5°, Kleinwinkelnäherung sin θ ≈ θ) verhält sich ein Pendel der Länge l harmonisch:

**T = 2π · √(l/g)**

Die Periodendauer ist **unabhängig** von Masse und Amplitude (**Isochronie** = die Schwingungsdauer T ist unabhängig von der Amplitude, solange die Auslenkung klein bleibt; gilt für Faden- und Federpendel im Kleinwinkelbereich). Praktische Konsequenz: Verdoppelt man die Länge, steigt T um den Faktor √2 ≈ 1,41. Auf dem Mond (g ≈ 1,62 m/s²) schwingt dasselbe Pendel etwa 2,45-mal langsamer.

**Formelklartext:** T = 2π√(l/g) heißt: Die Schwingungsdauer wird nur von der **Fadenlänge** l und der **Fallbeschleunigung** g bestimmt. Längeres Pendel → längere T; größeres g (z. B. auf der Erde vs. Mond) → kürzere T. Masse und Amplitude (bei kleinen Winkeln) spielen keine Rolle – das ist die Isochronie.

**Größenordnung:** Pendel l = 1 m auf der Erde → T ≈ 2,0 s („Sekundenpendel“). l = 25 cm → T ≈ 1 s.

> **Merke:** Beim Fadenpendel bestimmen nur Fadenlänge l und Erdbeschleunigung g die Periodendauer. Masse und Amplitude spielen keine Rolle (solange die Winkel klein bleiben).

**Gültigkeitsgrenze:** Bei Auslenkungen > 15° weicht die wahre Periodendauer messbar vom idealisierten Wert ab. Für θ_max = 30° beträgt der Fehler bereits ~2 %.

## Federpendel (harmonischer Oszillator)

Eine Masse m an einer Feder mit Federkonstante k schwingt mit:

**T = 2π · √(m/k)**

Hier ist T unabhängig von der Amplitude (gleiche Isochronie), aber abhängig von der Masse. Größere Masse → längere Periodendauer; steifere Feder (größeres k) → kürzere Periodendauer.

**Formelklartext:** T = 2π√(m/k) bedeutet: Schwerere Masse (m ↑) schwingt langsamer (T ↑); steifere Feder (k ↑) schwingt schneller (T ↓). Die Amplitude beeinflusst T nicht (Isochronie). Einheitlich: [m] = kg, [k] = N/m → √(kg/(N/m)) = √(kg·m/N) = √(s²) = s ✓.

Die **Federkonstante k** (auch Federhärte, Einheit N/m) beschreibt den Widerstand der Feder gegen Dehnung. Sie lässt sich experimentell bestimmen: Hängt man eine Masse m an die Feder und misst die statische Dehnung Δx, gilt k = mg/Δx.

## Energie im harmonischen Oszillator

Die Gesamtmechanik-Energie bleibt konstant (ungedämpfter Fall) und pendelt zwischen kinetischer und potentieller Energie:

- E_kin = ½ · m · v² = ½ · m · ω² · A² · sin²(ωt)
- E_pot = ½ · k · x² = ½ · k · A² · cos²(ωt)
- E_ges = ½ · k · A² = const.

**Formelklartext:** E_ges = ½·k·A² heißt: Die **Gesamtenergie** des ungedämpften Oszillators ist konstant und wird allein durch **Federkonstante k** und **Amplitude A** bestimmt. Verdoppelte Amplitude → **viermal** mehr Energie (E ∝ A²). In der Ruhelage (x = 0) ist die gesamte Energie kinetisch (v maximal); in den Umkehrpunkten (x = ±A) ist sie vollständig potentiell.

**Einheiten:** E_kin, E_pot, E_ges in **Joule [J]**; k in **N/m**, A in **m** → ½·k·A² hat Einheit (N/m)·m² = N·m = J ✓.

**Gleichstand** (E_kin = E_pot) herrscht bei x = ±A/√2 ≈ ±0,707·A.

> **Merke:** E_ges ∝ A² — verdoppelt man die Amplitude, vervierfacht sich die Gesamtenergie des Oszillators. In der Ruhelage (x = 0) ist alle Energie kinetisch; bei maximaler Auslenkung (x = ±A) ist alle Energie potentiell.

Die Schwingungsenergie geht während jeder Viertelperiode vollständig von einer Form in die andere über. Dieser periodische Energietausch wiederholt sich mit der **doppelten Frequenz** der Schwingung (2f), weil E_kin und E_pot als sin² und cos² schwingen.

![Schwingung und Welle](/grafik-26-welle.svg)

**Erklärung zur Grafik:** Eine fortschreitende Welle entsteht, wenn eine Schwingung räumlich weitergegeben wird; die Grafik zeigt den Zusammenhang zwischen Schwingungsparametern und Wellengrößen (c = f·λ).

## Resonanz und Dämpfung

**Resonanz** tritt auf, wenn ein System mit seiner Eigenfrequenz f₀ durch eine externe periodische Kraft angeregt wird – die Amplitude wächst dann stark an. Beispiele: MRT-Gerät (Kernspinresonanz), Tacoma-Narrows-Brücke (Windresonanz), Mikrowelle (Resonanzfrequenz des Wassermoleküls).

Bei schwacher Dämpfung zeigt die **Resonanzkurve** (Amplitude vs. Anregungsfrequenz) ein scharfes Maximum bei f₀. Die **Güte Q** des Oszillators beschreibt, wie scharf die Resonanzkurve ist: hohe Güte → scharfe Resonanz, niedrige Güte → breite Resonanz. Q = f₀/Δf, wobei Δf die Halbwertsbreite ist.

**Dämpfung** beschreibt den Energieverlust durch Reibung. Die Amplitude nimmt exponentiell ab: A(t) = A₀ · e^(−δt). Man unterscheidet:
- **Schwache Dämpfung** (δ < ω₀): Abklingende Schwingung, Amplitude nimmt langsam ab
- **Aperiodischer Grenzfall** (δ = ω₀): Schnellstmögliche Rückkehr ohne Überschwinger
- **Kriechfall** (δ > ω₀): Langsame Rückkehr ohne Schwingung

In biologischen Systemen sorgt Dämpfung für Stabilität (z. B. Gelenkknorpel als Stossdämpfer, Trommelfell-Dämpfung verhindert Nachschwingen).

## Rechenbeispiele

**Beispiel 1 — Fadenpendel auf Erde und Mond:**
Pendellänge l = 1 m. Auf der Erde (g = 9,81 m/s²): T = 2π√(1/9,81) = 2π · 0,319 = 2,01 s.
Auf dem Mond (g = 1,62 m/s²): T = 2π√(1/1,62) = 2π · 0,786 = 4,94 s — fast 2,5-mal langsamer.

**Beispiel 2 — Federpendel mit bekannter Masse:**
m = 0,5 kg, Federkonstante k = 200 N/m. T = 2π√(0,5/200) = 2π · 0,05 = 0,314 s → f = 1/0,314 = 3,18 Hz. v_max = A · ω = A · 2πf = 0,1 · 2π · 3,18 = 2,0 m/s (bei A = 10 cm).

**Beispiel 3 — Energiegleichstand:**
Federpendel mit k = 100 N/m, A = 0,2 m. E_ges = ½ · 100 · 0,04 = 2 J. Gleichstand E_kin = E_pot bei x = A/√2 = 0,2/1,414 = 0,141 m. An diesem Punkt: E_kin = E_pot = 1 J.

**Beispiel 4 — Resonanzfrequenz im MRT:**
Die Larmorfrequenz eines Wasserstoffkerns im MRT berechnet sich als f = γ · B₀. Mit γ = 42,58 MHz/T und B₀ = 1,5 T: f = 42,58 · 1,5 = 63,87 MHz. Bei 3 T: f = 127,74 MHz. Die Anregung mit genau dieser Frequenz versetzt die Protonen in Resonanz — sie absorbieren die RF-Energie maximal.

**Beispiel 5 — Federkonstante bestimmen:**
An einer vertikalen Feder hängt eine Masse von 0,3 kg und dehnt sie um 6 cm. k = mg/Δx = 0,3 · 9,81 / 0,06 = 49,1 N/m. Die Schwingungsdauer beträgt dann T = 2π√(0,3/49,1) = 0,491 s.

## Klinische Vertiefung

**Herzfrequenzvariabilität (HRV):** Der Herzrhythmus ist annähernd periodisch. Die Analyse der Frequenzkomponenten (Fourier-Analyse) liefert diagnostische Informationen: hohe HRV (viele Frequenzanteile) zeigt gesundes autonomes Nervensystem, niedrige HRV ist ein Risikofaktor für kardiovaskuläre Ereignisse.

**Ultraschall-Schallkopf:** Der piezoelektrische Kristall im Schallkopf schwingt mit Frequenzen von 1–20 MHz. Die Resonanzfrequenz des Kristalls bestimmt die Sendefrequenz und damit die Eindringtiefe und Auflösung des Ultraschalls.

**Gelenkknorpel als Dämpfer:** Bei jedem Schritt wirken Stösse auf die Gelenke. Der viskoelastische Knorpel absorbiert diese Stösse (Dämpfung) und verhindert so Resonanzschäden am Knochen. Bei Arthrose ist diese Dämpfungsfunktion eingeschränkt.

**Aperiodischer Grenzfall in der Medizin:** Die Federung eines Krankenwagens ist so abgestimmt, dass sie im aperiodischen Grenzfall schwingt — der schnellste Ausgleich ohne Nachschwingen, um den Patienten nicht zusätzlich zu belasten.

---
## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Harmonische Schwingung, Fadenpendel T = 2π√(l/g), Federpendel T = 2π√(m/D), T unabhängig von Amplitude (ungedämpft), Frequenz f = 1/T.

**Ergänzend vertiefend:** Gedämpfte Schwingung (A(t) = A₀·e^(−δt)); aperiodischer Grenzfall und Kriechfall; Güte Q; Larmorfrequenz im MRT (f = γ·B₀). Typische Fallen: ω (Kreisfrequenz) ≠ f (Frequenz); E ∝ A²; Fadenpendel vs. Federpendel (verschiedene Rückstellkraft).

**Häufige Fragen:**
- "Wie ändert sich T beim Fadenpendel, wenn die Länge vervierfacht wird?" → T verdoppelt sich (T ∝ √l; √4 = 2)
- "Bei welcher Auslenkung sind E_kin und E_pot gleich?" → x = A/√2 ≈ 0,707·A
- "Wovon hängt die Periodendauer des Fadenpendels ab?" → nur von l und g (nicht von Masse oder Amplitude)
- "Was ist Resonanz?" → Anregungsfrequenz = Eigenfrequenz → maximale Amplitudenzunahme

**Typische Denkfehler (MedAT):**
- **ω ≠ f:** Kreisfrequenz ω [rad/s] ist 2π mal die Frequenz f [Hz]. „ω = 10 rad/s“ bedeutet nicht „10 Hz“, sondern f = ω/(2π) ≈ 1,59 Hz.
- **E ∝ A (falsch):** Energie geht mit **A²**; doppelte Amplitude = vierfache Energie. Nicht „doppelte Amplitude → doppelte Energie“.
- **Faden vs. Feder:** Beim Fadenpendel hängt T **nur** von l und g ab (nicht von m). Beim Federpendel hängt T von m **und** k ab. Beide: T unabhängig von A (Isochronie).
- **Resonanz:** Maximale Amplitude nur bei **f_Anregung = f_Eigen**. Nicht „bei höchster Anregungsfrequenz“ oder „bei kleinster Dämpfung“ (Dämpfung bestimmt nur die Breite der Resonanzkurve).
- **Gleichstand E_kin = E_pot:** Bei x = ±A/√2 ≈ ±0,707·A, **nicht** bei x = A/2.

**Prüfungsrelevante Zahlen/Fakten:**
- Fadenpendel: T = 2π√(l/g); l = 1 m auf Erde → T ≈ 2,0 s; auf Mond (g/6) → T ≈ 4,9 s
- Federpendel: T = 2π√(m/k); E_ges = ½·k·A²; v_max = A·ω in der Ruhelage
- Isochronie gilt nur für kleine Auslenkungen (< 15°; Fehler bei 30° bereits ~2 %)
- MRT-Resonanzfrequenz: f = γ·B₀; ¹H bei 1,5 T → f ≈ 64 MHz (Larmorfrequenz)

---
## Zusammenfassung (ultrakompakt)

- **Harmonische Schwingung**: x(t) = A·cos(ωt + φ₀); Rückstellkraft F = −k·x (Hooke)
- **Kreisfrequenz**: ω = 2πf = 2π/T [rad/s] — verbindet alle Schwingungsparameter
- **Fadenpendel**: T = 2π√(l/g) — unabhängig von Masse und Amplitude (Isochronie)
- **Federpendel**: T = 2π√(m/k) — unabhängig von Amplitude; T steigt mit Masse, sinkt mit Federhärte
- **Resonanz**: maximale Energieübertragung bei f_Anregung = f_Eigen; im MRT: Larmorfrequenz γ·B₀
- **Dämpfung**: D < 1 → Schwingfall (Nachschwingen); D = 1 → aperiodischer Grenzfall (Krankenwagen); D > 1 → Kriechfall`,

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

      diagram: "wave-types",

      merksätze: [
        "x(t) = A · cos(ωt + φ₀) – die Grundformel der harmonischen Schwingung.",
        "ω = 2πf = 2π/T – Kreisfrequenz verknüpft f und T.",
        "Fadenpendel: T = 2π√(l/g) – keine Masse, keine Amplitude (kleine Winkel!).",
        "Federpendel: T = 2π√(m/k) – größere Masse → langsamer, steifere Feder → schneller.",
        "v_max = A·ω tritt in der Ruhelage auf; a_max = A·ω² bei maximaler Auslenkung.",
        "E_ges = ½·k·A² = const. (ungedämpft); E_kin ↔ E_pot tauschen sich periodisch.",
        "E_kin = E_pot bei x = ±A/√2 ≈ ±0,707·A.",
        "Dämpfung: Amplitude nimmt exponentiell ab, Energie wird in Wärme umgewandelt.",
        "Resonanz tritt auf, wenn Anregungsfrequenz = Eigenfrequenz – Amplitude wird maximal.",
        "Isochronie: Periodendauer unabhängig von der Amplitude (bei kleinen Auslenkungen).",
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
            "Sie wird achtmal so gross.",
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
            "Bei welcher Auslenkung eines Federpendels (Amplitude A = 10 cm) sind kinetische und potentielle Energie gleich gross?",
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
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK 2: Wellen – Grundgrößen und Typen
    // ─────────────────────────────────────────────────────────────────────────
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
      content: `## Einleitung

**Worum geht es?** **Wellen** transportieren Energie durch den Raum ohne Materietransport. **Wellengleichung** c = f·λ; **Transversalwellen** (Schwingung ⊥ Ausbreitung, z. B. Licht) vs. **Longitudinalwellen** (Schwingung in Ausbreitungsrichtung, z. B. Schall). **Warum für den MedAT relevant?** c = f·λ, Schallgeschwindigkeit in Medien, elektromagnetisches Spektrum, **akustische Impedanz** Z = ρ·c und Reflexion/Transmission (Ultraschall) werden geprüft. **Welche Fragen werden beantwortet?** „c = f·λ — was bedeutet was?“; „Transversal vs. longitudinal?“; „Schall schneller in Wasser oder Luft?“; „Impedanz — Reflexion bei Medienwechsel?“; „Ultraschall Frequenz?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Wellen abgedeckt.

**In diesem Kapitel lernst du:**
- die **Wellengleichung** c = f·λ (Ausbreitungsgeschwindigkeit, Frequenz, Wellenlänge) und Grundgrößen der Welle
- **Transversalwellen** (Schwingung senkrecht zur Ausbreitung, z. B. Licht) vs. **Longitudinalwellen** (Schwingung in Ausbreitungsrichtung, z. B. Schall)
- **Schallgeschwindigkeit** in verschiedenen Medien und **elektromagnetisches Spektrum** (Bereiche, Anwendung)
- **Akustische Impedanz** Z = ρ·c und Reflexion/Transmission beim **Medienwechsel** (z. B. Ultraschall)
- typische Prüfungsfallen (c = f·λ, Einheiten, Impedanzanpassung) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Ausbreitung von Schwingungen**: Wellen transportieren Energie, nicht Materie. Schall (Longitudinalwelle), Licht und Röntgen (Transversalwellen) folgen c = f·λ. In der Medizin: Ultraschall (Echografie), MRT (Radiowellen), Röntgen. Du brauchst das für Optik, Atomphysik und für MedAT-Aufgaben zu Wellenlänge, Frequenz und Impedanz.

---

![Welle](/grafik-26-welle.svg)

**Erklärung zur Grafik:** Die Grafik veranschaulicht c = f·λ, transversale vs. longitudinale Wellen, Schallgeschwindigkeiten und das elektromagnetische Spektrum.

Eine Welle ist die räumliche und zeitliche Ausbreitung einer Schwingung. Wellen transportieren **Energie, aber keine Materie** – die Teilchen des Mediums führen nur lokale Schwingungen aus, während die Störung weiterwandert. Dieser fundamentale Unterschied zu Teilchen ist entscheidend: Ein Korken auf einer Wasserwelle bewegt sich vertikal auf und ab, wandert aber nicht horizontal mit der Welle mit.

![Harmonische Schwingung](/grafik-25-schwingung.svg)

**Erklärung zur Grafik:** Die lokale Schwingung der Teilchen (Amplitude A, Periodendauer T) ist die Grundlage jeder Welle; die Grafik zeigt den Zusammenhang zwischen Oszillator und Wellenausbreitung.

## Grundgrößen der Welle

**c = f · λ** – die fundamentale Wellengleichung (bzw. **c = λ · f**)

- **c** (Wellengeschwindigkeit) [m/s] – wird durch das Medium bestimmt, nicht durch die Quelle
- **f** (Frequenz) [Hz] – wird von der Quelle festgelegt und ändert sich beim Medienwechsel nicht
- **λ** (Wellenlänge) [m] – Abstand zweier benachbarter gleichphasiger Punkte (z. B. Wellenberg zu Wellenberg)

**Formelklartext:** c = f·λ bedeutet: **Ausbreitungsgeschwindigkeit** = **Frequenz** × **Wellenlänge**. Das Medium legt c fest; die Quelle legt f fest. Daraus folgt λ = c/f – die Wellenlänge **passt sich** an. Beim Übergang in ein schnelleres Medium (z. B. Schall: Luft → Wasser) wird λ **größer**; in ein langsameres Medium wird λ **kleiner**. Die Frequenz bleibt dabei immer gleich („Quelle schwingt weiter mit derselben Rate“).

**Prüfungsrelevante Zahlen:** **Lichtgeschwindigkeit** (Vakuum/Luft) **c ≈ 3·10⁸ m/s = 300 000 km/s**. **Sichtbares Licht** hat Wellenlängen im Bereich **380 nm bis 750 nm** (nanometer, nicht mm, cm oder km). Beispiel: Trägerfrequenz 2 GHz (z. B. Mobilfunk) → λ = c/f = 3·10⁸/(2·10⁹) = 0,15 m = **15 cm**.

> **Merke:** c gehört zum Medium, f gehört zur Quelle, λ = c/f passt sich an. Beim Medienwechsel ändert sich die Wellenlänge, nicht die Frequenz!

Da c medium-spezifisch und f quellenspezifisch ist, ändert sich beim Medienwechsel die Wellenlänge λ = c/f. In einem schnelleren Medium wird λ grösser, in einem langsameren kleiner – bei identischer Frequenz. Dieses Prinzip erklärt sowohl Brechung als auch die unterschiedlichen Wellenlängen von Ultraschall in verschiedenen Geweben.

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
In Gasen und Flüssigkeiten können nur Longitudinalwellen existieren (keine Scherkräfte → keine Transversalwellen). In Festkörpern existieren beide Typen.

## Schallwellen

Schall ist eine **mechanische Längswelle** – sie braucht ein Medium zur Ausbreitung (im Vakuum kein Schall!).

Schallgeschwindigkeiten:
- Luft (20 °C): **c ≈ 340 m/s** (temperaturabhängig: c ≈ 331 + 0,6·T [°C] m/s)
- Wasser: c ≈ 1480 m/s
- Weichgewebe: c ≈ 1540 m/s
- Knochen: c ≈ 3000–4000 m/s
- Stahl: c ≈ 5900 m/s

> **Merke:** Schall in dichteren/steiferen Medien ist schneller. Die Schallgeschwindigkeit in Luft steigt um ca. 0,6 m/s pro °C Temperaturerhöhung.

Der Hörbereich des Menschen liegt bei **20 Hz bis 20 kHz**. Infraschall (< 20 Hz) wird z. B. von Elefanten zur Kommunikation genutzt. Ultraschall (> 20 kHz) wird von Fledermäusen zur Echolokation und in der Medizin zur Bildgebung eingesetzt. Mit dem Alter nimmt die obere Hörgrenze ab (Presbyakusis): 60-Jährige hören typischerweise nur noch bis ~12 kHz.

## Elektromagnetische Wellen

Elektromagnetische (EM) Wellen sind Transversalwellen aus sich gegenseitig erzeugenden elektrischen und magnetischen Feldern. Sie benötigen **kein Medium** und breiten sich im Vakuum mit **c = 3 × 10⁸ m/s** aus. Die Frequenz bestimmt die Energie eines Photons: **E = h·f** (Planck'sche Beziehung, h = 6,626 × 10⁻³⁴ J·s).

Das EM-Spektrum umfasst (von niedrig nach hoch Frequenz):
- **Radiowellen** (< 300 MHz): MRT-Anregung, Radio
- **Mikrowellen** (300 MHz – 300 GHz): Mikrowellenherd, WLAN
- **Infrarot** (300 GHz – 400 THz): Wärmestrahlung, Thermographie
- **Sichtbares Licht** (**380–750 nm**): Augendiagnostik, Endoskopie; Wellenlänge in **Nanometern** (nm), nicht mm, cm oder m
- **UV** (10–400 nm): Desinfektion, Vitamin-D-Synthese
- **Röntgenstrahlung** (0,01–10 nm): Röntgendiagnostik, CT
- **Gammastrahlung** (< 0,01 nm): Nuklearmedizin, PET

## Medizinischer Ultraschall

Diagnostischer Ultraschall nutzt Frequenzen von **2–20 MHz** (weit über menschliches Hören hinaus). Hochfrequenter Ultraschall hat kurze Wellenlänge → bessere Ortsauflösung, aber geringere Gewebeeindringtiefe. Ultraschall breitet sich in Geweben mit c ≈ 1540 m/s aus.

Das **Impuls-Echo-Verfahren** (A-Mode, B-Mode) sendet kurze Ultraschallpulse und misst die Laufzeit des reflektierten Echos. Die Reflexionsstärke hängt vom Impedanzunterschied der Gewebe ab. Je grösser der Impedanzunterschied an einer Grenzfläche, desto stärker das Echo.

## Akustische Impedanz — Widerstand gegen Schallausbreitung

Die **akustische Impedanz** Z beschreibt, wie leicht sich Schall in einem Medium ausbreitet:

**Z = ρ · c** (mit ρ = Dichte des Mediums in kg/m³, c = Schallgeschwindigkeit in m/s, Einheit: Pa·s/m = Rayl)

**Formelklartext:** Z = ρ·c ist der „Widerstand“ des Mediums gegen Schallausbreitung. Hohe Dichte oder hohe Schallgeschwindigkeit → hohe Impedanz. An Grenzflächen mit **großem Z-Unterschied** (z. B. Luft–Gewebe) wird fast alles reflektiert; bei angeglichener Impedanz (Ultraschall-Gel) dringt der Schall ein. Einheit: [ρ]·[c] = (kg/m³)·(m/s) = kg/(m²·s) = Pa·s/m (Rayl).

Trifft eine Schallwelle auf eine Grenzfläche zwischen zwei Medien mit unterschiedlicher Impedanz (Z₁ ≠ Z₂), wird ein Teil reflektiert (Echographie nutzt dies) und ein Teil transmittiert.

**Reflexionskoeffizient:** R = [(Z₂ − Z₁)/(Z₂ + Z₁)]²

- Luft/Gewebe-Grenzfläche: R ≈ 0,998 → fast vollständige Reflexion → deshalb Ultraschall-Gel nötig
- Weichteil/Knochen-Grenzfläche: R ≈ 0,4 → starke Reflexion

> **Merke:** Große Impedanzdifferenz → starke Reflexion → schlechte Bildgebung. Gel beseitigt die Luft-Gewebe-Grenzfläche und ermöglicht optimale Schallkopplung.

## Rechenbeispiele

**Beispiel 1 — Wellenlänge berechnen:**
Ultraschall mit f = 5 MHz in Gewebe (c = 1540 m/s):
λ = c/f = 1540 / (5 × 10⁶) = 3,08 × 10⁻⁴ m = 0,308 mm.
Die Auflösung liegt grössenordnungsmässig bei λ, also ca. 0,3 mm — ausreichend für die meisten diagnostischen Zwecke.

**Beispiel 2 — Schallgeschwindigkeit und Eindringtiefe:**
Ultraschallpuls in Gewebe, Echo nach t = 0,13 ms empfangen. Reflexionsort:
d = c · t / 2 = 1540 · 0,00013 / 2 = 0,10 m = 10 cm (Hin- und Rückweg → durch 2).

**Beispiel 3 — EM-Spektrum:**
Sichtbares Licht (λ = 550 nm, grün): f = c/λ = (3 × 10⁸)/(550 × 10⁻⁹) = 5,45 × 10¹⁴ Hz.
Röntgenstrahlung (λ = 0,1 nm): f = (3 × 10⁸)/(10⁻¹⁰) = 3 × 10¹⁸ Hz → 10.000× höhere Frequenz und Energie als Licht.

**Beispiel 4 — Schallgeschwindigkeiten vergleichen:**

| Medium | c [m/s] | Impedanz Z [kg/m²s] |
|--------|---------|---------------------|
| Luft | 340 | 420 |
| Wasser | 1480 | 1,48 × 10⁶ |
| Weichgewebe | 1540 | 1,63 × 10⁶ |
| Knochen | 3500 | 6,3 × 10⁶ |

Die akustische Impedanz Z = ρ · c bestimmt die Reflexion an Grenzflächen. Je grösser der Impedanzunterschied, desto stärker die Reflexion (z. B. Gewebe–Knochen-Grenze: starkes Echo im Ultraschall). Der Reflexionskoeffizient berechnet sich als R = ((Z₂ − Z₁)/(Z₂ + Z₁))².

**Beispiel 5 — Reflexionskoeffizient Gewebe–Knochen:**
R = ((6,3 − 1,63)/(6,3 + 1,63))² × 10¹² / 10¹² = (4,67/7,93)² ≈ 0,347 → 34,7 % des Ultraschalls werden reflektiert. An der Grenze Gewebe–Luft wäre R ≈ 99,9 % — deshalb ist Ultraschallgel essenziell.

## Klinische Vertiefung

**Impedanzanpassung im Ultraschall:** Das Ultraschallgel zwischen Schallkopf und Haut eliminiert die Luft-Haut-Grenzfläche (Impedanzunterschied Luft–Haut wäre riesig → fast 100% Reflexion). Mit Gel wird die akustische Impedanz angeglichen und der Ultraschall kann ins Gewebe eindringen.

**Röntgen- vs. Ultraschall-Wellenlänge:** Röntgenstrahlen (λ ~ 0,01–10 nm) durchdringen Gewebe und werden je nach Dichte unterschiedlich absorbiert. Ultraschall (λ ~ 0,1–1 mm) wird an Impedanzgrenzen reflektiert. Beide Methoden nutzen Wellenphysik, aber fundamental unterschiedliche Mechanismen.

**Temperaturabhängigkeit im Alltag:** In einem Konzertsaal erwärmt das Publikum die Luft. Die Schallgeschwindigkeit steigt dadurch leicht an – ein Grund, warum Instrumente vor und nach dem Konzert nachgestimmt werden müssen.

---
## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** **c = λ·f**; **Lichtgeschwindigkeit c ≈ 3·10⁸ m/s**; **sichtbares Licht 380–750 nm**; Wellenlänge aus λ = c/f (z. B. 2 GHz → λ ≈ 15 cm). Wellengrößen (λ, f, c), Medienwechsel (f konstant, λ und c ändern sich), Reflexion, Brechung, Snellius, Dopplereffekt (f' bei Bewegung).

**Ergänzend vertiefend:** Stehende Welle (Knoten/Bäuche, λₙ = 2L/n); Kohärenz; Snellius und Totalreflexion. Typische Fallen: Licht 380–750 nm (nicht mm!); c zum Medium, f zur Quelle; Doppler Vorzeichen (näher = höher); konstruktiv n·λ, destruktiv (n+½)·λ.

**Häufige Fragen:**
- "Was ändert sich beim Medienwechsel einer Welle?" → λ ändert sich, f bleibt gleich (c ist mediumspezifisch)
- "Welche Wellenlänge hat Ultraschall (5 MHz) in Gewebe (c = 1540 m/s)?" → λ = 1540/5×10⁶ ≈ 0,3 mm
- "Können Transversalwellen in Flüssigkeiten existieren?" → Nein, nur Longitudinalwellen (keine Scherkräfte)
- "Warum braucht man Ultraschallgel?" → Luft-Haut-Impedanzsprung eliminieren (R ≈ 99,9 % ohne Gel)

**Typische Prüfungsfallen / Verwechslungen:**
- **Sichtbares Licht:** Wellenlänge **380–750 nm** (Nanometer), nicht 380–750 mm, cm, m oder km.
- **c = λ·f** mit c ≈ 3·10⁸ m/s; z. B. 2 GHz → λ = 0,15 m = 15 cm.
- c gehört zum **Medium** (nicht zur Quelle); f gehört zur **Quelle** (nicht zum Medium). **Beim Medienwechsel:** f bleibt gleich, c und λ ändern sich – nicht „f ändert sich“ oder „c bleibt gleich“.
- Schall = Longitudinalwelle; Licht = Transversalwelle — nicht umgekehrt!
- Höhere US-Frequenz → bessere Auflösung, **aber** geringere Eindringtiefe (Dämpfung ∝ f²)
- Schall breitet sich in Festkörpern am schnellsten aus; im Vakuum existiert er gar nicht
- **Impedanz:** Große Z-Differenz → starke Reflexion (Luft–Gewebe ohne Gel → fast 100 % Reflexion)

**Prüfungsrelevante Zahlen/Fakten:**
- c_Luft ≈ 340 m/s; c_Wasser ≈ 1480 m/s; c_Gewebe ≈ 1540 m/s; c_Licht = 3×10⁸ m/s
- Hörbereich: 20 Hz – 20 kHz; Ultraschall > 20 kHz; diagnostischer Ultraschall: 2–20 MHz
- Akustische Impedanz: Z = ρ·c; Reflexionskoeffizient: R = ((Z₂−Z₁)/(Z₂+Z₁))²
- EM-Spektrum (niedrig → hoch): Radio → Mikrowelle → IR → Sichtbar → UV → Röntgen → Gamma

---
## Zusammenfassung (ultrakompakt)

- **Wellengleichung**: c = f·λ; c hängt vom Medium ab (nicht von f oder λ)
- **Transversal** (z.B. Licht): Schwingung ⊥ Ausbreitung → polarisierbar; **Longitudinal** (Schall): Schwingung ∥ Ausbreitung → nicht polarisierbar
- **Schallgeschwindigkeit**: Luft ~340 m/s, Wasser ~1480 m/s, Gewebe ~1540 m/s, Knochen ~3500 m/s
- **Elektromagnetisches Spektrum**: Radiowellen (MRT) → Mikrowellen → IR → sichtbares Licht → UV → Röntgen → Gamma
- **Akustische Impedanz**: Z = ρ·c; R = ((Z₂−Z₁)/(Z₂+Z₁))²; große Impedanzdifferenz → starke Reflexion (Ultraschallgel nötig!)
- **Klinisch**: Ultraschall 1–20 MHz; Impedanzanpassung mit Gel; A-Modus (Auge), B-Modus (2D-Bild)`,

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

      diagram: "wave-types",

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

    // ─────────────────────────────────────────────────────────────────────────
    // UK 3: Wellenphänomene
    // ─────────────────────────────────────────────────────────────────────────
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
      diagram: "wave-types",
      content: `## Einleitung

**Worum geht es?** **Wellenphänomene**: **Interferenz** (konstruktiv/destruktiv nach Gangunterschied), **Doppler-Effekt** (Frequenzverschiebung bei Relativbewegung; Doppler-Sonographie Δf = 2·f₀·v·cos θ/c), **Reflexion/Brechung** (Snellius), **Totalreflexion** (Glasfaser, Endoskop). **Warum für den MedAT relevant?** Interferenz, Doppler (Blutflussmessung), Totalreflexion, Polarisation werden geprüft. **Welche Fragen werden beantwortet?** „Doppler — Quelle nähert sich?“; „Totalreflexion — Grenzwinkel?“; „Interferenz konstruktiv wann?“; „Stehende Welle — Knoten/Bäuche?“; „Doppler-Sonographie Formel?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Wellenphänomenen (Doppler, Interferenz, Totalreflexion) abgedeckt.

**In diesem Kapitel lernst du:**
- **Interferenz**: konstruktiv (Gangunterschied n·λ) vs. destruktiv ((n+½)·λ); **Superpositionsprinzip**
- **Stehende Wellen**: Knoten und Bäuche; Grundfrequenz und Obertöne (λₙ = 2L/n)
- **Doppler-Effekt**: Frequenzverschiebung bei Relativbewegung; **Doppler-Sonographie** (Δf = 2·f₀·v·cos θ/c)
- **Reflexion, Brechung** (Snellius), **Totalreflexion** und **Beugung**
- typische Prüfungsfallen (Doppler-Vorzeichen, Grenzwinkel) zu vermeiden

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Überlagerung und Ausbreitung von Wellen**: Interferenz (Verstärkung/Auslöschung), stehende Wellen, Doppler (Frequenzänderung durch Bewegung), Reflexion und Brechung. In der Medizin: Doppler-Ultraschall (Blutfluss), Endoskopie (Totalreflexion in Lichtleitern), Pulsoximetrie. Du brauchst das für Akustik (nächstes UK) und für MedAT-Aufgaben zu Doppler, Interferenz und Brechung.

---

![Interferenz Doppler](/grafik-26-welle.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt konstruktive und destruktive Interferenz (Gangunterschied n·λ bzw. (n+½)·λ), die Doppler-Formel und Totalreflexion (Snellius).

Wellen zeigen eine Reihe charakteristischer Phänomene, die sie von Teilchen unterscheiden: Interferenz, Beugung, Reflexion, Brechung und den Doppler-Effekt. Diese Phänomene sind in der modernen Medizintechnik allgegenwärtig und bilden die physikalische Grundlage für Ultraschall, MRT, Endoskopie und viele weitere diagnostische Verfahren.

## Überlagerung und Interferenz

Wenn zwei Wellen gleichzeitig am selben Ort vorhanden sind, überlagern sie sich gemäss dem **Superpositionsprinzip**: die Ausschläge addieren sich algebraisch. Dies gilt für alle Wellentypen – mechanische wie elektromagnetische.

**Konstruktive Interferenz** (Verstärkung): Gangunterschied Δs = n·λ (n = 0, 1, 2, …)
→ Beide Wellen sind in Phase, resultierende Amplitude = A₁ + A₂

**Destruktive Interferenz** (Auslöschung): Gangunterschied Δs = (n + ½)·λ
→ Wellen sind gegenphasig, resultierende Amplitude = |A₁ − A₂|; bei gleichen Amplituden = 0

> **Merke:** Gangunterschied = n·λ → konstruktiv (Verstärkung); = (n+½)·λ → destruktiv (Auslöschung). Dazwischen liegt partielle Interferenz.

Interferenz ist möglich bei **kohärenten** Wellen (gleiche Frequenz, feste Phasenbeziehung). Inkohärente Wellen (z. B. weisses Licht von einer Glühbirne) zeigen keine stabilen Interferenzmuster, da sich die Phasenbeziehung ständig ändert.

**Partielle Interferenz:** Bei einem Phasenunterschied von π/2 (90°) addieren sich die Amplituden vektoriell: A_res = √(A₁² + A₂²). Bei gleichen Amplituden ergibt das A·√2 ≈ 1,41·A.

**Alltagsanwendung:** Noise-Cancelling-Kopfhörer erzeugen eine gegenphasige Kopie des Umgebungslärms → destruktive Interferenz → Stille.

## Stehende Wellen

Wenn eine Welle an einem festen Ende reflektiert wird und sich mit der hinlaufenden Welle überlagert, entsteht eine **stehende Welle**. Charakteristisch sind:
- **Knoten** (K): Punkte ohne Auslenkung (destruktive Dauerinterferenz)
- **Bäuche** (B): Punkte maximaler Auslenkung

Auf einer beidseitig eingespannten Saite der Länge L gilt für die n-te Harmonische:
λₙ = 2L/n und fₙ = n·f₁ (mit f₁ = c/(2L) = Grundfrequenz)

Die n-te Harmonische hat (n−1) Knoten innerhalb der Saite.

| Harmonische | λ | f | Innere Knoten |
|-------------|-------|-------|---------------|
| 1. (Grundton) | 2L | c/(2L) | 0 |
| 2. (1. Oberton) | L | c/L | 1 |
| 3. (2. Oberton) | 2L/3 | 3c/(2L) | 2 |
| n-te | 2L/n | n·c/(2L) | n−1 |

> **Merke:** Stehende Wellen entstehen auch in Blasinstrumenten und Körperhöhlen. Bei der Lungen-Perkussion erzeugt der Klopfschall stehende Wellen – der resultierende Klang (sonor vs. gedämpft) gibt Auskunft über den Luftgehalt.

## Doppler-Effekt

Der Doppler-Effekt beschreibt die scheinbare Frequenzverschiebung, wenn sich Quelle und/oder Beobachter relativ zueinander bewegen:

**f_obs = f_Quelle · (c ± v_Beob) / (c ∓ v_Quelle)**

Konvention: oberes Zeichen, wenn Quelle und Beobachter aufeinander zubewegen (f_obs > f_Quelle); unteres Zeichen bei Entfernung (f_obs < f_Quelle).

Beispiel: Rettungswagen fährt auf Beobachter zu – Sirene klingt höher als tatsächlich. Nach Passieren: tieferer Ton. Die Tonhöhenänderung beim Passieren ist ein klassisches MedAT-Prüfungsbeispiel.

**Doppler-Sonographie:** Im medizinischen Kontext wird der Doppler-Effekt genutzt, um die Blutflussgeschwindigkeit zu messen. Der Ultraschallkopf sendet und empfängt gleichzeitig. Die Frequenzverschiebung ergibt sich aus:

**Δf = 2 · f₀ · v · cos(θ) / c**

Dabei ist θ der Winkel zwischen Schallstrahl und Blutfluss. Bei θ = 0° (parallel) ist Δf maximal; bei θ = 90° (senkrecht) ist Δf = 0 – der Blutfluss wird nicht detektiert. Daher muss der Schallkopf immer schräg zum Gefäss gehalten werden.

## Reflexion, Beugung, Brechung

**Reflexion**: Welle wird an Grenzfläche zurückgeworfen. Einfallswinkel = Reflexionswinkel (Reflexionsgesetz). Bei Reflexion am dichteren Medium: Phasensprung von π (Halbwelle). Bei Reflexion am dünneren Medium: kein Phasensprung. Dieses Verhalten ist wichtig für die Bildung stehender Wellen.

![Reflexion und Brechung](/grafik-optik.svg)

**Erklärung zur Grafik:** Einfallswinkel, Reflexionswinkel und Brechung (Snellius) an Grenzflächen — Grundlage für Totalreflexion in Lichtleitern und Ultraschall an Gewebegrenzen.

**Beugung**: Wellen breiten sich um Hindernisse oder durch Öffnungen in den geometrischen Schattenraum aus. Stärkstes Beugungseffekt, wenn Hindernisbreite ≈ λ. Beugung beweist den Wellencharakter von Licht. Schallwellen (λ ≈ 0,02–17 m) beugen leicht um Hindernisse wie Häuserecken; Lichtwellen (λ ≈ 500 nm) werden nur an Mikrostrukturen merklich gebeugt.

**Brechung**: Änderung der Ausbreitungsrichtung beim Übergang zwischen Medien mit verschiedenen Ausbreitungsgeschwindigkeiten. Snellius'sches Brechungsgesetz: **n₁·sin(α₁) = n₂·sin(α₂)**, wobei n = c₀/c (Brechungsindex). Übergang in dichteres Medium (n₂ > n₁) → Brechung zum Lot hin; in dünneres Medium → Brechung vom Lot weg.

> **Merke:** Brechung zum Lot = langsameres Medium (grösserer n); Brechung vom Lot = schnelleres Medium (kleinerer n).

**Totalreflexion**: Wenn eine Welle von einem optisch dichteren in ein dünneres Medium übergeht und der Einfallswinkel den **Grenzwinkel** α_G überschreitet, tritt keine Brechung mehr auf — die Welle wird vollständig reflektiert. sin(α_G) = n₂/n₁. Anwendung: Glasfasern (Endoskopie, Lichtleiter), Diamantschliff (hoher Brechungsindex n = 2,42 → niedriger Grenzwinkel von nur 24,4° → maximale Reflexion, daher das Funkeln).

## Rechenbeispiele

**Beispiel 1 — Doppler-Sonographie:**
Ultraschall f = 5 MHz trifft auf Erythrozyten (v = 0,5 m/s) unter θ = 60° zur Flussrichtung.
Δf = 2 · f · v · cos(θ) / c = 2 · 5×10⁶ · 0,5 · cos(60°) / 1540 = 2 · 5×10⁶ · 0,25 / 1540 ≈ 1623 Hz
Die Frequenzverschiebung von ~1,6 kHz ist im hörbaren Bereich — daher kann der Blutfluss als Tonsignal wiedergegeben werden.

**Beispiel 2 — Stehende Welle auf Saite:**
Gitarrensaite l = 0,65 m, c = 300 m/s.
Grundfrequenz: f₁ = c/(2L) = 300/(2·0,65) = 230,8 Hz (ca. Kammerton B).
2. Harmonische: f₂ = 2 · 230,8 = 461,6 Hz. 3. Harmonische: f₃ = 692,3 Hz.

**Beispiel 3 — Brechungsgesetz:**
Lichtstrahl geht von Luft (n₁ = 1,00) in Glas (n₂ = 1,50) unter α₁ = 30°:
sin(α₂) = n₁·sin(α₁)/n₂ = 1,00·sin(30°)/1,50 = 0,5/1,50 = 0,333 → α₂ = 19,5°
Der Strahl wird zum Lot hin gebrochen (dichtereres Medium).

**Beispiel 4 — Totalreflexion in Glasfaser:**
Glas (n₁ = 1,50), Luft (n₂ = 1,00): sin(α_G) = 1,00/1,50 = 0,667 → α_G = 41,8°.
Jeder Strahl, der unter einem Winkel > 41,8° auf die Grenzfläche trifft, wird total reflektiert — so funktioniert ein Glasfaser-Endoskop.

**Beispiel 5 — Brechungsindizes medizinisch relevanter Materialien:**

| Material | Brechungsindex n |
|----------|-----------------|
| Luft | 1,000 |
| Wasser | 1,333 |
| Hornhaut (Auge) | 1,376 |
| Linse (Auge) | 1,386–1,406 |
| Glaskörper (Auge) | 1,336 |
| Glas (Brille) | 1,50–1,90 |

Die Brechkraft des Auges (~60 Dioptrien) entsteht hauptsächlich an der Hornhaut-Luft-Grenzfläche (grösster n-Sprung).

## Klinische Vertiefung

**Endoskopie:** Glasfaserbündel leiten Licht durch Totalreflexion zum Untersuchungsort und das reflektierte Bild zurück. Die Biegung der Fasern ist möglich, da Totalreflexion an den Innenwänden auftritt.

**Pulsoximetrie:** Nutzt die unterschiedliche Lichtabsorption von oxygeniertem (rot, 660 nm) und deoxygeniertem (infrarot, 940 nm) Hämoglobin. Die Transmission durch das Gewebe hängt von der Wellenlänge ab — ein Wellenphänomen (Lambert-Beer-Gesetz). Das Verhältnis der Absorptionen bei beiden Wellenlängen ergibt die Sauerstoffsättigung SpO₂.

**Laser in der Medizin:** LASER (Light Amplification by Stimulated Emission of Radiation) erzeugt kohärentes Licht durch stimulierte Emission in einem optischen Resonator (stehende Wellen!). Anwendungen: Augen-LASIK (Hornhaut-Remodelling), Laser-Koagulation (Retina), Laser-Lithotripsie (Nierensteine).

**Farbdoppler-Sonographie:** In der klinischen Praxis wird der Doppler-Effekt farbkodiert dargestellt: Rot = Fluss auf den Schallkopf zu, Blau = Fluss vom Schallkopf weg. Turbulenzen (z. B. an Stenosen) erscheinen als Farbmosaik. Diese Methode ist essenziell in der Kardiologie und Gefässchirurgie.

---
## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Interferenz (konstruktiv Δs = n·λ, destruktiv Δs = (n+½)λ), Kohärenz, Beugung, Doppelspalt, Anwendung (Röntgenbeugung, Ultraschall).

**Ergänzend vertiefend:** Huygens-Prinzip (Elementarwellen); Polarisation. Typische Fallen: Gangunterschied n·λ konstruktiv, (n+½)·λ destruktiv; Doppler: aufeinander zu = höhere Frequenz; Totalreflexion nur dichter → dünner.

**Häufige Fragen:**
- "Wann ist Interferenz konstruktiv?" → Gangunterschied Δs = n·λ (ganzzahlige Vielfache der Wellenlänge)
- "Wie berechnet man die Doppler-Frequenzverschiebung?" → Δf = 2·f₀·v·cos(θ)/c
- "Warum muss der Schallkopf bei der Doppler-Sonographie schräg gehalten werden?" → Bei θ = 90° ist cos(90°) = 0 → kein Signal
- "Wann tritt Totalreflexion auf?" → Übergang vom optisch dichteren ins dünnere Medium mit α > α_G; sin(α_G) = n₂/n₁

**Typische Prüfungsfallen / Verwechslungen:**
- Gangunterschied n·λ → **konstruktiv** (Verstärkung); (n+½)·λ → **destruktiv** (Auslöschung) — nicht umgekehrt!
- Doppler: Quelle nähert sich → f_obs > f_Quelle (höherer Ton); entfernt sich → f_obs < f_Quelle (tieferer Ton)
- Totalreflexion nur bei Übergang vom optisch **DICHTEREN** ins **DÜNNERE** Medium (nicht umgekehrt)
- Brechung vom Lot weg = Übergang ins dünnere Medium (n₂ < n₁); zum Lot hin = ins dichtere Medium

**Prüfungsrelevante Zahlen/Fakten:**
- Grundschwingung (n=1): λ₁ = 2L; n-te Harmonische: λₙ = 2L/n; (n−1) innere Knoten
- Doppler-Rettungswagen: f_obs = f_Q · c/(c − v_Q) bei bewegter Quelle; c_Schall = 340 m/s
- Glasfaser (n_Glas ≈ 1,5, n_Luft = 1,0): Grenzwinkel ≈ 41,8° → Totalreflexion → Endoskopie
- Brechungsindex wichtiger Augenmedien: Hornhaut ≈ 1,376; Linse ≈ 1,40; Gesamtbrechkraft Auge ≈ 60 D

---
## Zusammenfassung (ultrakompakt)

- **Interferenz**: konstruktiv (Δφ = 0, 2π, …) → Verstärkung; destruktiv (Δφ = π, 3π, …) → Auslöschung
- **Doppler-Effekt**: f_beobachtet = f_Quelle · (c ± v_Beobachter)/(c ∓ v_Quelle); Annäherung → f↑; Entfernung → f↓
- **Doppler-Sonographie**: Blutflussgeschwindigkeit aus Frequenzverschiebung; rot = Fluss zum Schallkopf, blau = weg
- **Reflexion**: Einfallswinkel = Ausfallswinkel; **Brechung**: n₁·sin(α₁) = n₂·sin(α₂) (Snellius)
- **Totalreflexion**: bei Übergang in optisch dünneres Medium; Grenzwinkel α_G = arcsin(n₂/n₁); Basis der Endoskopie
- **Polarisation**: nur Transversalwellen polarisierbar; Pulsoximetrie nutzt wellenlängenspezifische Absorption`,

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
            "Beugung (Diffraktion) ist ein universelles Wellenphänomen – es tritt bei Schall, Licht und allen anderen Wellen auf. Der Effekt ist am ausgeprägtesten, wenn die Grösse des Hindernisses oder der Öffnung vergleichbar mit der Wellenlänge ist. Licht (λ ≈ 500 nm) beugt an Mikrostrukturen deutlich; Schall (λ ≈ 34 cm bei 1000 Hz) beugt um grosse Hindernisse wie Häuserecken. Die Frequenz bleibt bei Beugung unverändert.",
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
            "Welche physikalische Grösse misst die Doppler-Sonographie beim Blutfluss direkt?",
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

    // ─────────────────────────────────────────────────────────────────────────
    // UK 4: Akustik und Hörphysiologie
    // ─────────────────────────────────────────────────────────────────────────
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
      diagram: "doppler-effect",
      content: `## Einleitung

**Worum geht es?** **Akustik**: Schalldruck, **Dezibel-Skala** L = 20·log(p/p₀) [dB], **Cochlea** (Tonotopie: Basis = hohe, Apex = tiefe Frequenzen), Haarzellen, Schallleitungs- vs. Schallempfindungsschwerhörigkeit. **Warum für den MedAT relevant?** Dezibel, Hörschwelle 0 dB, Lärmschwelle 85 dB, Frequenzbereich des Hörens, Cochlea/Tonotopie, Lärmschutz werden geprüft. **Welche Fragen werden beantwortet?** „Dezibel-Formel?“; „+3 dB = doppelte Intensität?“; „Cochlea — wo hohe Frequenzen?“; „Schallleitungs- vs. Schallempfindungsschwerhörigkeit?“; „Weber/Rinne?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Akustik abgedeckt.

**In diesem Kapitel lernst du:**
- die **Dezibel-Skala** L = 20·log(p/p₀) [dB]; Hörschwelle 0 dB, Lärmschwelle 85 dB, Schmerzgrenze ~120 dB
- **Psychoakustik**: Tonhöhe (Frequenz), Lautstärke (Intensität), Klangfarbe (Obertöne)
- **Cochlea**: Schallleitung, Impedanzanpassung, **Tonotopie** (Basis = hohe Frequenzen, Apex = tiefe)
- **Haarzellen** (innere = Signalwandler, äußere = Verstärker) und **cochleärer Verstärker**
- **Schallleitungs-** vs. **Schallempfindungsschwerhörigkeit**; Audiometrie, Weber/Rinne

**Kontext — worum geht es und wofür brauchst du das?**  
Hier geht es um **Schall und Hören**: Schalldruck, Dezibel, wie das Ohr Frequenzen und Pegel verarbeitet (Cochlea, Tonotopie, Haarzellen). Klinisch: Hörverlust, Lärmschaden, Audiometrie, Schallleitungs- vs. Schallempfindungsstörung. Du brauchst das für Anamnese und Diagnostik und für MedAT-Aufgaben zu dB, Hörschwelle und Cochlea.

---

![Dezibel Cochlea](/grafik-26-welle.svg)

**Erklärung zur Grafik:** Die Grafik zeigt die Dezibel-Skala L = 20·log(p/p₀), die +3 dB / +6 dB-Regel, den Cochlea-Querschnitt und die Tonotopie (Basis = hohe Frequenzen).

Akustik ist die Lehre vom Schall und seinen physiologischen sowie psychophysischen Wirkungen. Die menschliche Hörbahn ist ein aussergewöhnliches Messsystem, das Druckschwankungen von weniger als einem Milliardstel des atmosphärischen Drucks wahrnehmen kann. Das Ohr deckt dabei einen Dynamikbereich von 10⁶ im Schalldruck ab – vom leisesten wahrnehmbaren Ton bis zur Schmerzgrenze.

![Schall und Sinne](/grafik-transduktion-sinne.svg)

**Erklärung zur Grafik:** Die Grafik veranschaulicht die Umwandlung von Schallreizen in Nervensignale (Transduktion) und die Rolle von Cochlea und Haarzellen beim Hören.

## Schallpegel und die Dezibel-Skala

Der Schalldruck p einer Welle wird relativ zur Hörschwelle p₀ = 2×10⁻⁵ Pa angegeben. Da das menschliche Ohr einem sehr grossen Druckbereich folgt (6 Zehnerpotenzen), verwendet man eine logarithmische Skala:

**L = 20 · log₁₀(p / p₀)   [dB]**

Alternativ über die Intensität I (Leistung pro Fläche):
**L = 10 · log₁₀(I / I₀)**   mit I₀ = 10⁻¹² W/m²

> **Merke:** Da Intensität ∝ p² gilt, hat die Schalldruck-Formel den Faktor 20, die Intensitäts-Formel den Faktor 10. Beide ergeben denselben Pegelwert.

Der Zusammenhang zwischen den beiden Formeln: L = 10·log(I/I₀) = 10·log(p²/p₀²) = 20·log(p/p₀).

Wichtige Pegelwerte:

| Situation | Pegel | Schalldruck |
|-----------|-------|-------------|
| Hörschwelle (1 kHz) | 0 dB | 2×10⁻⁵ Pa |
| Stille Nacht | 20 dB | 2×10⁻⁴ Pa |
| Normales Gespräch | 60 dB | 0,02 Pa |
| Strassenverkehr | 75 dB | 0,11 Pa |
| Lärmschwelle | **85 dB** | 0,36 Pa |
| Schmerzgrenze | 120 dB | 20 Pa |
| Düsentriebwerk | 140 dB | 200 Pa |

Entscheidend für die Schädlichkeit ist die **Exposition**: gleichmässige kurzzeitige Spitzen vs. dauerhafter Lärm über 85 dB. Die **Äquivalenzdosis** berücksichtigt: +3 dB halbiert die erlaubte Expositionszeit (bei 88 dB nur noch 4 h statt 8 h).

## Lautstärke und Tonhöhe: Psychoakustik

**Tonhöhe** (Pitch) entspricht physikalisch der Frequenz. Das menschliche Ohr hört Frequenzen von 20 Hz bis 20 kHz, mit grösster Empfindlichkeit zwischen 1–4 kHz (Sprachbereich). Diese Empfindlichkeit ist evolutionär durch Sprachkommunikation geprägt.

**Lautstärke** (Loudness) entspricht der Schallintensität/dem Schalldruck. Die subjektive Wahrnehmung ist frequenzabhängig – gleiche Dezibel-Werte klingen bei verschiedenen Frequenzen unterschiedlich laut (Lautheits-Konturlinien nach Fletcher-Munson). Bei 100 Hz muss der Pegel ca. 40 dB höher sein als bei 1 kHz, damit der Ton gleich laut empfunden wird.

**Klangfarbe** (Timbre) wird durch das Oberton-Spektrum bestimmt. Derselbe Ton (z. B. 440 Hz) klingt auf einer Geige anders als auf einer Klarinette, weil die Obertöne (Harmonische) unterschiedliche Amplituden haben.

## Anatomie und Physiologie der Cochlea

Das Innenohr (Cochlea) ist der eigentliche Wandler von Schallschwingungen in Nervenimpulse:

1. **Schallleitung**: Trommelfell → Gehörknöchelchen (Hammer, Amboss, Steigbügel) → Ovales Fenster
2. **Verstärkung**: Das Mittelohr verstärkt den Schalldruck durch das Flächenverhältnis Trommelfell/ovales Fenster (×17) und den Hebeleffekt der Gehörknöchelchen (×1,3) – gesamt ca. 22-fach (~27 dB). Diese **Impedanzanpassung** ist nötig, da ohne sie 99,9 % der Schallenergie an der Luft-Flüssigkeit-Grenze reflektiert würden.
3. **Wanderwellen in der Cochlea**: Der Steigbügel regt Perilymphe im Schneckengang an. Es entstehen Wanderwellen auf der Basilarmembran, deren Maximum je nach Frequenz an unterschiedlichen Orten liegt: **Tonotopie**.
4. **Tonotopie**: Hohe Frequenzen (z. B. 20 kHz) erregen die Basis der Cochlea (steife, schmale Membran); tiefe Frequenzen (z. B. 100 Hz) erregen die Apex (elastische, breite Membran). Dies ermöglicht Frequenzunterscheidung.
5. **Haarzellen**: An der Basilarmembran befinden sich ca. 3500 innere Haarzellen (IHC), die mechanische Auslenkung in elektrische Signale umwandeln (Mechanoelektrik). Ca. 12.000 äussere Haarzellen (OHC) verstärken aktiv durch Motilität (Prestin-Protein) – der **cochleäre Verstärker** verbessert die Empfindlichkeit um den Faktor 1000 (60 dB).

> **Merke:** Innere Haarzellen = Signalwandler (95 % der afferenten Nervenfasern); äussere Haarzellen = aktive Verstärker (empfindlich gegenüber Lärm und ototoxischen Medikamenten).

## Klinische Audiologie

**Audiometrie**: Messung des Hörvermögens durch Reintonaudiogramm oder Sprachaudiogramm. Normalhörige haben eine Hörschwelle von ≤ 20 dB HL (Hearing Level) über alle Frequenzen.

**Schallleitungsschwerhörigkeit**: Beeinträchtigung in Mittelohr (Trommelfell, Gehörknöchelchen, Otosklerose, Paukenerguss). Knochenleitung intakt, Luftleitung gestört. Weber-Versuch: Lateralisation zum kranken Ohr. Rinne-Versuch: negativ (Knochen > Luft).

**Schallempfindungsschwerhörigkeit (SNHL)**: Schäden an Haarzellen (Lärm, Alter, ototoxische Medikamente wie Aminoglykoside/Cisplatin) oder Hörnerv. Knochen- und Luftleitung gleich gestört. Weber: Lateralisation zum gesunden Ohr. Rinne: positiv (Luft > Knochen, aber beides reduziert). Häufigste Form der Lärmschwerhörigkeit: Schaden bei 4 kHz (C5-Senke im Audiogramm).

**Cochlea-Implantat**: Bei vollständiger Taubheit umgeht ein Elektrodenarray die defekten Haarzellen und stimuliert den Hörnerv direkt mit tonotop kodierten Impulsen. Elektroden an der Basis kodieren hohe, an der Apex tiefe Frequenzen.

## Rechenbeispiele

**Beispiel 1 — Dezibel-Rechnung:**
Schallintensität eines Gespräches: I = 10⁻⁶ W/m².
L = 10 · log₁₀(10⁻⁶ / 10⁻¹²) = 10 · log₁₀(10⁶) = 10 · 6 = 60 dB — normales Gespräch.

Verdopplung der Intensität: L_neu = 10 · log₁₀(2 × 10⁻⁶ / 10⁻¹²) = 10 · (6 + log₁₀ 2) = 10 · 6,3 = 63 dB.
Verdopplung der Intensität entspricht +3 dB. Verzehnfachung = +10 dB.

**Beispiel 2 — Verstärkung im Mittelohr:**
Trommelfell-Fläche: ca. 55 mm². Ovales-Fenster-Fläche: ca. 3,2 mm². Verhältnis: 55/3,2 ≈ 17.
Hebeleffekt Gehörknöchelchen: ≈ 1,3. Gesamtverstärkung: 17 × 1,3 ≈ 22-fach (Schalldruck).
In Dezibel: 20 · log₁₀(22) = 20 · 1,34 ≈ 27 dB — diese Verstärkung kompensiert den Impedanzunterschied zwischen Luft und Flüssigkeit im Innenohr.

**Beispiel 3 — Tonotopie:**
Frequenz 500 Hz → Maximum der Wanderwelle ca. 7 mm vom Apex.
Frequenz 4000 Hz → Maximum ca. 11 mm vom Apex (näher an der Basis).
Frequenz 16000 Hz → Maximum direkt an der Basis der Cochlea.
Bei Lärmschwerhörigkeit sind die Haarzellen im 4-kHz-Bereich zuerst betroffen → typische C5-Senke im Audiogramm.

**Beispiel 4 — Expositionszeit bei Lärm:**
Bei 85 dB sind 8 Stunden Exposition erlaubt. Pro +3 dB halbiert sich die Zeit: 88 dB → 4 h, 91 dB → 2 h, 94 dB → 1 h, 100 dB → 15 min, 110 dB → 1,5 min. Ein Rockkonzert mit 110 dB schädigt die Haarzellen bereits nach wenigen Minuten irreversibel.

## Dezibel-Merkregel

| Pegelveränderung | Physik | Wahrnehmung |
|------------------|--------|-------------|
| +3 dB | Intensität × 2 | Kaum merkbar |
| +6 dB | Schalldruck × 2 | Leicht lauter |
| +10 dB | Intensität × 10 | Doppelt so laut empfunden |
| +20 dB | Schalldruck × 10 | 4× so laut empfunden |

> **Merke:** 3-dB-Regel für Intensität, 6-dB-Regel für Schalldruck, 10-dB-Regel für subjektive Lautstärke. Diese drei Regeln sind MedAT-Klassiker!

---
## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Schall (Longitudinalwelle), Dezibel (dB = 10·log(I/I₀)), Verdopplung I → +3 dB, Hörschwelle, Schmerzgrenze, Ultraschall (Diagnostik), Dopplersonographie.

**Ergänzend vertiefend:** Schallgeschwindigkeit in Gewebe; Impedanzanpassung im Mittelohr; Weber/Rinne. Typische Fallen: L = 20·log für Druck vs. 10·log für Intensität; 85 dB Lärmschwelle; Mittelohr- vs. Innenohrschwerhörigkeit (Weber lateralisiert).

**Häufige Fragen:**
- "Wie viel dB entspricht einer Verdopplung der Schallintensität?" → +3 dB (I×2 → 10·log 2 ≈ 3 dB)
- "Wie viel dB entspricht einer Verdopplung des Schalldrucks?" → +6 dB (p×2 → 20·log 2 ≈ 6 dB)
- "Welcher Pegel gilt als Gehörschaden-Grenzwert?" → 85 dB (> 8 Stunden täglich → irreversibler Haarzellschaden)
- "Hohe Frequenzen in der Cochlea — wo?" → Basis (nahe ovalem Fenster, steife Membran); tiefe Frequenzen → Apex

**Typische Prüfungsfallen / Verwechslungen:**
- +3 dB ≠ +6 dB: Intensitätsverdopplung (+3 dB) vs. Schalldruckverdopplung (+6 dB) — I ∝ p², daher der Faktor 2
- Schallleitungsschwerhörigkeit = **Mittelohrproblem** (Knochenleitung intakt!) — Weber lateralisiert zum kranken Ohr
- Schallempfindungsschwerhörigkeit = **Innenohr/Haarzellproblem** (Knochen- und Luftleitung gleich gestört)
- Tonotopie: HOHE Frequenzen → BASIS (steif/schmal); TIEFE Frequenzen → APEX (elastisch/breit)

**Prüfungsrelevante Zahlen/Fakten:**
- Referenzwerte: p₀ = 2×10⁻⁵ Pa (Hörschwelle); I₀ = 10⁻¹² W/m²
- Dezibel-Formeln: L = 20·log(p/p₀) = 10·log(I/I₀) — beide Formeln ergeben denselben Wert!
- Grenzwerte: 0 dB (Hörschwelle) → 60 dB (Gespräch) → 85 dB (Lärm-Grenzwert!) → 120 dB (Schmerzgrenze)
- Pro +3 dB halbiert sich die erlaubte Expositionszeit: 85 dB/8h → 88 dB/4h → 91 dB/2h → 94 dB/1h
- C5-Senke bei 4 kHz im Audiogramm = pathognomonischer Befund der Lärmschwerhörigkeit
- Hörbereich: 20 Hz – 20 kHz; grösste Empfindlichkeit 1–4 kHz (Sprachbereich)

---
## Zusammenfassung (ultrakompakt)

- **Dezibel**: L = 20·log(p/p₀) = 10·log(I/I₀); p₀ = 2×10⁻⁵ Pa, I₀ = 10⁻¹² W/m²
- **3-dB-Regel**: +3 dB → I×2; **6-dB-Regel**: +6 dB → p×2; **10-dB-Regel**: +10 dB → doppelt so laut empfunden
- **Hörbereich**: 20 Hz – 20 000 Hz; Sprache 300–3400 Hz; maximale Empfindlichkeit ~1000–4000 Hz
- **Cochlea/Tonotopie**: hohe Frequenzen am ovalen Fenster, tiefe Frequenzen am Apex; Haarzellen = Sensorepithel
- **Schallleitungsschwerhörigkeit**: Mittelohr-Problem (Mittelohrentzündung, Tympanosklerose) → Rinne-Test negativ
- **Schallempfindungsschwerhörigkeit**: Innenohr/Cochlea/Nerv (Lärm, Altersschwerhörigkeit) → C5-Senke bei 4 kHz
- **Lärm**: 85 dB → max. 8h; pro +3 dB halbiert sich die zulässige Expositionszeit`,

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
          "Schall trifft als Druckwelle auf das Trommelfell und versetzt es in Schwingung. Die Gehörknöchelchen (Hammer, Amboss, Steigbügel) leiten die Schwingung zum ovalen Fenster weiter und verstärken dabei den Schalldruck: Das Flächenverhältnis von Trommelfell (~55 mm²) zu ovalem Fenster (~3,2 mm²) ergibt eine Druckverstärkung um den Faktor ~17, ergänzt durch den Hebeleffekt der Knöchelchen (~1,3) – insgesamt etwa 25–30-fache Druckerhöhung. Dies ist nötig, um Energie vom luftgefüllten Mittelohr in die flüssigkeitsgefüllte Cochlea zu übertragen (Impedanzanpassung). In der Cochlea erzeugt der Steigbügel Wanderwellen in der Perilymphe, die sich auf der Basilarmembran ausbreiten. Die Basilarmembran ist an der Basis schmal und steif (hohe Eigenfrequenz), am Apex breit und elastisch (tiefe Eigenfrequenz). Daher hat jede Frequenz ihren maximalen Amplitudenort: Tonotopie. An diesem Ort biegen sich die Stereozilien der Haarzellen und öffnen Ionenkanäle → Depolarisation → Aktionspotenziale im Hörnerv. Äussere Haarzellen verstärken aktiv durch Motilität (Prestin-Protein). Hoher Lärm (> 85 dB) schädigt bevorzugt Haarzellen bei 4 kHz irreversibel.",
      },

      klinischerBezug:
        "Audiometrie misst frequenzspezifische Hörschwellen (dB HL). Lärmschwerhörigkeit: Haarzellschaden bei 4 kHz, C5-Senke im Audiogramm. Cochlea-Implantat nutzt Tonotopie: tonotop kodierte Elektrodenmatrix stimuliert Hörnerv direkt. Schwerhörigkeit betrifft ~15 % der Bevölkerung.",

      selfTest: [
        {
          question:
            "Ein Schalldruckpegel von 60 dB entspricht einem Gespräch. Wie gross ist das Verhältnis p/p₀ des Schalldrucks zur Hörschwelle?",
          options: ["6", "60", "600", "1000", "1 000 000"],
          correctIndex: 3,
          explanation:
            "L = 20·log(p/p₀) → 60 = 20·log(p/p₀) → log(p/p₀) = 3 → p/p₀ = 10³ = 1000. Bei 60 dB ist der Schalldruck also 1000-mal so gross wie die Hörschwelle p₀. Häufiger Fehler: L = 60 mit p/p₀ = 60 gleichzusetzen (lineares statt logarithmisches Denken). Pro 20 dB steigt p/p₀ um Faktor 10: 0 dB → 1, 20 dB → 10, 40 dB → 100, 60 dB → 1000.",
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
            "Schallleitungsschwerhörigkeit entsteht durch Störungen im Aussenohr oder Mittelohr (Cerumen, Trommelfellriss, Otosklerose): Der Schall gelangt nicht normal zum Innenohr. Die Knochenleitung (Schall direkt über Knochen zum Innenohr) ist ungestört → Weberscher Versuch: Lateralisation zur betroffenen Seite. Schallempfindungsschwerhörigkeit (SNHL) betrifft Haarzellen oder Hörnerv: Knochen- und Luftleitung sind gleichermassen reduziert. SNHL ist meist irreversibel (Haarzellen regenerieren nicht). Lärmschwerhörigkeit ist eine SNHL.",
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
  ],
};
