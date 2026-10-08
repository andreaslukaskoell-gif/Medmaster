---
name: bms-uk-quality
description: Prüft BMS-Unterkapitel gegen die MedMaster-Qualitäts-Standards (Länge, Hook, Lernziele-Box, Worked Example, Fehler-Box, Mnemonic, MedAT-Fokus, Zusammenfassung). Nutze vor UK-Rewrites um Lücken zu sehen, nach Rewrites zur Qualitätssicherung, und beim Mass-Rewrite als Vorlage für konsistente Verbesserung.
---

# BMS-UK Qualitäts-Check

## Wann nutzen

- **Vor einem UK-Rewrite:** `npx tsx scripts/audit-uk-quality.mts bio-4-16` zeigt was fehlt
- **Nach einem UK-Rewrite:** gleicher Befehl prüft ob die neuen Elemente drin sind
- **Für Mass-Audit:** `npx tsx scripts/audit-uk-quality.mts` zeigt die 15 schlechtesten UKs priorisiert
- **Pro Fach:** Score-Durchschnitt macht Bio-vs-Chemie-vs-Physik-vs-Mathe-Qualität vergleichbar

## Was geprüft wird (16 Checks, gewichtet)

**Pflicht (severity=fail/warn, zählt stark):**
- **Länge** 700-2500 W (Ziel 900-1800)
- **Hook-Einstieg** nicht "Dieses Kapitel behandelt..."
- **Lernziele-Box** `> **Lernziele:**` Block vorhanden
- **Diagramm** mindestens 1 `{{DIAGRAM:...}}`
- **3-5 H2-Sektionen** mit genug Struktur
- **Mindestens 2 Merksätze** `> **Merke:**`
- **MedAT-Fokus-Marker** `> **MedAT-Fokus:**`
- **Zusammenfassung** als `## Zusammenfassung` am Ende
- **KI-Boilerplate**: keine Floskeln wie "es ist wichtig zu beachten", "im folgenden werden wir"

**Soll (severity=info, Bonus-Punkte):**
- **Worked Example** `> **Beispiel:**` Block
- **Typische-Fehler-Box** `> **Achtung`
- **Mnemonic/Eselsbrücke** `> **Eselsbrücke:**`
- **Übergangssätze** zwischen Sektionen (mindestens 2)
- **Bullet-Count ≤ 25** (Overload vermeiden)
- **Tabellen-Count ≤ 5**
- **Section-Separatoren** mindestens 2× `---`

## Score

Jeder Check hat ein Gewicht: fail=3, warn=2, info=1. Score = `passed_weight / total_weight × 100`.

| Score | Qualität |
|---|---|
| 85-100 | ★★★★ Benchmark |
| 70-84 | ★★★ Gut |
| 50-69 | ★★ Mittelmaß |
| <50 | ★ Rewrite nötig |

## Pflicht-Struktur eines Benchmark-UK (im Standard)

```markdown
[Hook: 1 Absatz, 50-100 W, Prüfungsrelevanz oder reale Beobachtung]

{{DIAGRAM:xxx}}

> **Lernziele:** Nach diesem Kapitel kannst du
> - Bloom-Verb X verstehen
> - Bloom-Verb Y anwenden
> - Bloom-Verb Z ableiten

---

## Erste Haupt-Sektion

[Übergangssatz zum Hook. Fließtext mit höchstens 2 Bulletlists]

> **Merke:** Kondensat des Abschnitts in 1 Satz.

---

## Zweite Haupt-Sektion

[Übergangssatz "Nachdem wir X verstehen...". Fließtext]

> **Beispiel:** [konkrete Rechenaufgabe oder Fallbeispiel]
>
> **Lösung:** [Schritt für Schritt]

> **Merke:** ...

---

## Dritte Haupt-Sektion

[Übergangssatz. Fließtext.]

> **Achtung — häufige Fehler:**
> - Verwechslung A ↔ B
> - Falsche Interpretation von C

> **Eselsbrücke:** [Mnemonic zum Alltag]

---

## MedAT-Fokus

> **MedAT-Fokus:** [kompakte Prüfungs-Essenz]

**Zentral prüfungsrelevant:**
- Punkt 1
- Punkt 2

**Prüfungsrelevante Zahlen:**
- Zahl 1
- Zahl 2

## Zusammenfassung

- Kernaussage 1 (ultrakompakt)
- Kernaussage 2
- Kernaussage 3
```

## Benchmark-UK Referenzen

Nach dem Oktober-2026-Rewrite erfüllen diese UKs den Standard:
- `bio-4-01` DNA Gene Chromosomen (~1300 W, alle Elemente)
- `bio-4-16` Zwillingsforschung Heritabilität (~1300 W, mit Falconer-Worked-Example)

Beide stehen in `src/data/bmsKapitel/biologie/kap4-genetik.ts`.

## Rewrite-Workflow

1. `npx tsx scripts/audit-uk-quality.mts <uk-id>` — zeigt was fehlt
2. UK-Datei öffnen und nach Benchmark-UK rewriten
3. `npx tsx scripts/audit-uk-quality.mts <uk-id>` — Score prüfen
4. Erst committen wenn Score ≥ 70
5. `npm run typecheck && npm run audit-bms && npm run audit-images`

## Prioritäten (Oktober 2026 Audit)

**Tier-1 (Score < 40, kritisch):**
- bio-2-01 Epithelgewebe · ph-7-02 Radioaktivität · ma-7-04 Normalverteilung
- bio-1-01 Kennzeichen Leben · bio-10-06 Populationsdynamik
- bio-3-04 Herz-Kreislauf · bio-3-12 Fortpflanzung · ph-6-04 Optik des Auges

**Tier-2 (Score 40-50, hohe Priorität):**
- bio-2-02 Binde-/Stützgewebe · bio-2-03 Muskelgewebe · bio-2-04 Nervengewebe
- bio-3-10 Harnsystem · bio-9-01 Endosymbiontentheorie
- bio-4-01e Befruchtung · bio-4-01b Furchung/Blastozyste

**Tier-3:** Alle 57 UKs mit Score < 50 progressiv angehen.

## Element-Coverage Baseline (vor Mass-Rewrite)

Was in den 158 UKs aktuell vorkommt:
- Hook OK: 100% · Merke-Box: 98% · Diagramm: 77% · Boilerplate-frei: 99%
- **Fast überall fehlt:** Lernziele-Box 1% · Worked Example 1% · Fehler-Box 2% · Mnemonic 1% · MedAT-Fokus 1% · Zusammenfassung 6%

Diese 6 Elemente sind der Haupt-Hebel für den Mass-Rewrite.
