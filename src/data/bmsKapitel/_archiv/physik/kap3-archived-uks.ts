/**
 * Archived UKs from physik/kap3-schwingungen-und-wellen.ts
 *
 * Reason: NOT in the official MedAT 2026 Stichwortliste for "Schwingungen und Wellen".
 * The Stichwortliste lists: Pendel, Harmonische Schwingungen, Gedämpfte Schwingungen,
 * Elementarwellen, Harmonische Wellen, Überlagerung von Wellen, Polarisation.
 * Akustik is NOT listed.
 *
 * Archived on: 2026-03-11
 */

import type { Unterkapitel } from "../../types";

export const archivedPhysWellenUKs: Unterkapitel[] = [
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
        merksatz: "Hohe US-Frequenz → gute Auflösung, wenig Tiefe; niedrige Frequenz → umgekehrt.",
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
        question: "Zwei identische Maschinen erzeugen jeweils 85 dB. Wie hoch ist der Gesamtpegel?",
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
        question: "Ein Ultraschall mit f = 3,5 MHz wird für die Leber gewählt. Warum nicht 15 MHz?",
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
];
