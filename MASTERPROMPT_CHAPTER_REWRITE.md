# MASTERPROMPT: BMS-Kapitel-Überarbeitung (Anti-Mendel-Stil)

Du überarbeitest die BMS-Kapitel der MedMaster-Lernplattform für österreichische MedAT-Kandidaten.
Das Projekt liegt in `src/data/bmsKapitel/`. Die TypeScript-Typen sind in `src/data/bmsKapitel/types.ts` definiert.

---

## SCHRITT 0 — LIES DAS ZUERST: GOLDSTANDARD vs. NEGATIVBEISPIEL

### ✅ GOLDSTANDARD: `src/data/bmsKapitel/biologie/kap1-die-zelle.ts`

Öffne diese Datei und lies sie vollständig. Sie zeigt:

- Reinen Fließtext (keine Tabellen, keine Bullet-Listen im `content`-Feld)
- Korrekt gefüllte `lernziele`, `sections`, `merksätze`, `klinischerBezug`, `altfrage`
- Keine Metadaten-Header, keine Navigationslinks, keine ⭐-Sterne
- Max. 5 `selfTest`-Fragen mit `hints`

### ❌ NEGATIVBEISPIEL: `src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts`

Öffne diese Datei und erkenne die Fehler (die du in KEINER der neuen Dateien wiederholen darfst):

1. `Mendel''sche` — Doppelter Apostroph in Template-Literals (falsch: `''`, richtig: `'`)
2. Navigationslinks am Ende: `← [Zurück: Bio Kap 4 UK04 – Plazenta](Bio_Kap4_UK04_Plazenta.md)` → löschen
3. Metadaten-Header im Content: `**Priorität:** HOCH`, `**Geschätzte Lesezeit:** 14 Minuten`, `**Stichwortliste-Abdeckung:** 9/9` → löschen
4. `## 📌 Prüfungsfokus`-Blöcke → löschen
5. `⭐`-Sterne überall im Text → löschen
6. `lernziele: []`, `sections: []`, `merksätze: []` leer obwohl Inhalt da wäre → befüllen
7. Merksätze mit `>>>> `-Präfix im `content` eingebettet → aus Content entfernen, in `merksätze`-Array legen
8. Tabellen als primäre Inhaltsstruktur — `content` besteht fast nur aus `| Spalte | Spalte |`-Tabellen → Fließtext
9. 6 selfTest-Fragen in bio-5-01 → max. 5

---

## SCHRITT 1 — AUFGABE A: Schnellfix kap5 (Bugs ohne inhaltliche Überarbeitung)

Datei: `src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts`

Führe diese chirurgischen Fixes durch (KEIN inhaltlicher Umbau, nur Bereinigung):

1. **Alle `''` → `'`** in Template-Literals ersetzen (10 Stellen — `Mendel''sche` → `Mendel'sche`)
2. **Alle Navigationslinks löschen** — jede Zeile die mit `← [Zurück:` oder `[Weiter:` beginnt und auf `.md`-Dateien zeigt
3. **Metadaten-Header löschen** — die ersten 4 Zeilen jedes UK-Contents:
   ```
   **Priorität:** HOCH
   **Geschätzte Lesezeit:** XX Minuten
   **Stichwortliste-Abdeckung:** X/X Stichwörter
   ---
   ```
4. **`## 📌 Prüfungsfokus`-Blöcke löschen** — inklusive der nummerierten Liste darunter
5. **Alle `⭐`-Zeichen löschen** — global ersetzen mit leerem String
6. **`>>>> `-Merksätze aus Content entfernen**: Erkenne alle Zeilen die mit `>>>> **` beginnen, extrahiere ihren Text (ohne `>>>> `), und lege ihn in das `merksätze: []`-Array des betreffenden UK
7. **selfTest bio-5-01 auf 5 kürzen**: Entferne die 6. Frage (die letzte)

Danach muss `kap5` kompilierbar und ohne TypeScript-Fehler sein.

---

## SCHRITT 2 — AUFGABE B: Frontend-Fix — Fragen einzeln anzeigen

Datei: Finde die Komponente die selfTest-Fragen rendert (wahrscheinlich `src/components/chapter/SubchapterContent.tsx` oder ein separates `SelfTest`-Komponente).

**Problem:** Momentan werden ALLE selfTest-Fragen eines UK gleichzeitig untereinander angezeigt.
**Ziel:** Fragen sollen einzeln angezeigt werden — eine Frage auf einmal, mit "Weiter"-Button um zur nächsten zu kommen. Nach der letzten Frage: Zusammenfassung (X von Y richtig).

**Implementierung:**

- State: `currentQuestionIndex` (0-based), `answers: Record<number, number>`, `showResult: boolean`
- Zeige immer nur Frage `currentQuestionIndex`
- Nach Antwort: Zeige Erklärung + "Weiter"-Button (oder "Ergebnis" bei letzter Frage)
- Am Ende: Ergebnis-Screen mit Score und Option "Nochmal"
- Kein Breaking Change an anderen Komponenten — nur diese eine UI-Änderung

---

## SCHRITT 3 — AUFGABE C: Vollständige Neuschreibung thin chapters

Die folgenden Kapitel haben durchschnittlich **unter 3.000 Zeichen pro Unterkapitel** — das ist zu wenig. Ziel: **5.000–6.500 Zeichen pro UK** in **reinem Fließtext** (wie kap1).

### ABSOLUTE PFLICHTREGELN FÜR ALLE INHALTE (VERLETZ DIESE NIEMALS):

**VERBOTEN im `content`-Feld:**

```
❌ Tabellen mit | Spalte | Spalte | — NUR erlaubt wenn Vergleich von 3+ Einträgen zwingend notwendig (max. 1 Tabelle pro UK)
❌ Bullet-Listen als primäre Inhaltsstruktur (•, -, *, 1. 2. 3. am Zeilenanfang im Fließtext)
❌ **Bold:** Label-Bullet-Pattern: "**Stoffwechsel:** Definition hier" als Liste
❌ ### 2a., #### 3b., ##### Unterpunkte — keine mehrfach verschachtelten Überschriften
❌ ⭐ Sterne, 📌 Emoji-Überschriften, 🔴 Farbpunkte
❌ "Prüfungsfokus", "Merksätze", "Navigation" als Sections im Content
❌ Metadaten-Header (Priorität, Lesezeit, Stichwortliste-Abdeckung)
❌ Navigationslinks zu .md-Dateien
❌ '' (doppelter Apostroph) in Template-Literals — immer ' schreiben
```

**GEBOTEN im `content`-Feld:**

```
✅ Fließende Prosa-Absätze (mindestens 4–8 Sätze pro Absatz)
✅ ## Überschriften (maximal 3–4 pro UK, keine Unterüberschriften mit ###)
✅ Bold nur für erstmalig eingeführte Fachbegriffe: "Das **Zentromer** verbindet..."
✅ Kausales Erklären: "weil", "daher", "das führt dazu dass", "der Grund ist"
✅ Übergänge zwischen Absätzen: "Daraus folgt...", "Im Gegensatz dazu...", "Klinisch bedeutsam ist..."
✅ Mindestens ein klinischer Bezug im Fließtext integriert
✅ Wenn Tabelle unumgänglich: maximal 3 Spalten, maximal 5 Zeilen
```

**PFLICHTFELDER — ALLE müssen befüllt sein (nicht `[]` lassen):**

```typescript
lernziele: [
  // 3–5 konkrete Lernziele als aktive Sätze
  // Format: "[Verb] [Objekt] [Kontext/Bedingung]"
  // Beispiel: "Die drei Mendelschen Regeln benennen und das Verhältnis der F2-Generation korrekt angeben"
  // Beispiel: "Den Unterschied zwischen intermediärer und kodominanter Vererbung anhand konkreter Beispiele erklären"
]

sections: [
  // 2–4 ContentSection-Objekte für Progressive Disclosure
  // Jede Section = ein Haupt-Unterabschnitt des content
  // heading: kurze Bezeichnung (max. 5 Wörter)
  // text: komprimierte Zusammenfassung des Abschnitts (3–6 Sätze)
  // merksatz (optional): 1 Merksatz speziell für diese Section
]

merksätze: [
  // 3–6 prägnante Merksätze
  // NICHT dasselbe wie Sections-Merksätze wiederholen
  // Format: kurze Eselsbrücken, Eselsbrücken, Zahlen, Verhältnisse
  // Beispiel: "Aa × Aa → F2: 3 dominant : 1 rezessiv (Phänotyp), 1:2:1 (Genotyp)"
  // Beispiel: "Testkreuzung mit aa: 100% dominant → Elter war AA; 1:1 → Elter war Aa"
]

klinischerBezug:
  // 1 Absatz, 4–8 Sätze, echter klinischer Fall oder Krankheitsbezug
  // Nicht nur die Krankheit nennen — den Mechanismus erklären
  // Beispiel: Welches Vererbungsmuster hat Mukoviszidose, warum, wie manifestiert sich das in einer Familie

altfrage: {
  question: // Typische MedAT-Altfragen-Formulierung
  answer:   // 3–6 Sätze Erklärung mit Mechanismus
}
```

**FRAGEN-REGELN:**

```
✅ Max. 5 selfTest-Fragen pro UK
✅ Immer 5 Antwortoptionen (A–E)
✅ Richtige Antwort ist IMMER Option C (Index 2) — für konsistente Lernpsychologie
✅ Jede Frage hat hints: [2 Hinweise] — sokratisch, führen hin ohne zu verraten
✅ difficulty: 1 (konzeptuell), 2 (Anwendung), 3 (Verknüpfung/Ausnahme)
✅ Verteilung: 1-2x Schwierigkeit 1, 2x Schwierigkeit 2, 1x Schwierigkeit 3
✅ Erklärung: erklärt WARUM die anderen 4 Optionen falsch sind (A, B, D, E jeweils)
```

---

### C1 — `src/data/bmsKapitel/biologie/kap11-immunologie.ts`

Lies die Datei vollständig. Aktuelle Schwäche: ~2.200 Zeichen/UK, keine sections, keine lernziele.

**Stichwortliste-Pflichtthemen** (alle müssen abgedeckt sein):

- Antikörper (Struktur, IgG/IgM/IgA/IgE/IgD, Fab/Fc-Region)
- Gene der Antikörper (V-D-J-Rekombination, somatische Hypermutation)
- Blutgruppen-Vererbung (ABO-System: Allele I^A, I^B, i; Vererbungsmuster; welche Antikörper bei welcher Blutgruppe)
- Rhesusfaktor (Rh-positiv/-negativ; Rhesusinkompatibilität in der Schwangerschaft; Anti-D-Prophylaxe)

Schreibe alle UKs neu mit min. 5.000 Zeichen Fließtext. Kein UK darf unter 4.500 Zeichen Content haben.

---

### C2 — `src/data/bmsKapitel/biologie/kap8-humangenetik.ts`

Lies die Datei vollständig. Aktuelle Schwäche: ~2.400 Zeichen/UK.

**Stichwortliste-Pflichtthemen:**

- Gonosomale Vererbung (X-chromosomal dominant/rezessiv; Y-chromosomal; hemizygot beim Mann)
- Blutgruppen-Vererbung (hier: Kodominanz I^A I^B, Epistase 0; Kreuzungsschemas mit realen Beispielen)
- Stammbaumanalyse (autosomal-dominant, autosomal-rezessiv, X-chromosomal-rezessiv am Stammbaum erkennen)
- Genommutationen (Aneuploidie: Trisomie 21, 18, 13; Turner, Klinefelter — Mechanismus Nicht-Disjunktion)

---

### C3 — `src/data/bmsKapitel/biologie/kap4-entwicklungsbiologie.ts`

Lies die Datei vollständig. Aktuelle Schwäche: ~2.600 Zeichen/UK.

**Stichwortliste-Pflichtthemen:**

- Furchung (holoblastisch vs. meroblastisch; Blastula; Kompaktierung)
- Gastrulation (Keimblätter: Ektoderm, Mesoderm, Entoderm; was wird woraus)
- Embryonalentwicklung (Neurulation; Organogenese; Somiten; kritische Phasen = Teratogenität)
- Plazenta (Funktion; Chorionzotten; maternofetaler Austausch; Immuntoleranz)

---

### C4 — `src/data/bmsKapitel/biologie/kap9-evolution.ts`

Lies die Datei vollständig. Aktuelle Schwäche: ~2.500 Zeichen/UK.

**Stichwortliste-Pflichtthemen:**

- Synthetische Evolutionstheorie (Mutation + Rekombination + Selektion + Drift + Genfluss)
- Selektionsarten (stabilisierende, direktionale, disruptive Selektion; Fitness)
- Artbildung (allopatrisch, sympatrisch; Reproduktionsbarrieren prä- und postzygotisch)
- Entwicklung des Menschen (Hominiden-Stammbaum; Homo sapiens; **ACHTUNG: bio-9-07 existiert bereits in der Datei — nur erweitern wenn inhaltlich zu dünn, nicht neu anlegen**)
- Molekulare Evolution (homologe Strukturen, molekulare Phylogenetik, neutralistische Theorie)
- Evolutionäre Entwicklungsbiologie (Evo-Devo; Hox-Gene; Parallelentwicklung)

---

### C5 — `src/data/bmsKapitel/biologie/kap10-oekologie.ts`

Lies die Datei vollständig. Die ersten 2 UKs (Abiotische Faktoren, Biotische Faktoren) sind gut.
Fehlende UKs hinzufügen:

**Neues UK: `bio-10-03` — "Population und Ökologische Nische"**

- Populationsdynamik (Wachstumsmodelle: exponentiell r-Strategen, logistisch K-Strategen; Kapazitätsgrenze)
- Ökologische Nische (Hutchinsons n-dimensionaler Hyperraum; Fundamental- vs. Realnische; Konkurrenzausschluss-Prinzip)
- Min. 5.000 Zeichen Fließtext

**Neues UK: `bio-10-04` — "Ökosysteme und Stoffkreisläufe"**

- Nahrungsketten und -netze (Produzenten, Konsumenten I/II/III, Destruenten; Energiefluss: 10%-Regel)
- Biogeochemische Kreisläufe (Kohlenstoff-, Stickstoff-, Wasserkreislauf)
- Primärproduktion (terrestrisch vs. aquatisch; Limitierungsfaktoren)
- Min. 5.000 Zeichen Fließtext

**Neues UK: `bio-10-05` — "Umweltschutz und Biodiversität"**

- Biodiversität (alpha, beta, gamma; Messung; Hotspots)
- Bedrohungen (Habitatverlust, invasive Arten, Klimawandel, Übernutzung — mit Zahlen)
- Ökosystemdienstleistungen (provisioning, regulating, cultural, supporting)
- Naturschutzstrategien (in-situ, ex-situ; IUCN-Kategorien)
- Min. 4.500 Zeichen Fließtext

---

### C6 — `src/data/bmsKapitel/physik/kap3-schwingungen.ts` (wenn vorhanden)

Lies die Datei. Falls Zeichen/UK unter 3.000: Alle UKs auf min. 4.500 Zeichen Fließtext erweitern.

---

## SCHRITT 4 — AUFGABE D: Globaler Fragen-Trim auf max. 5 pro UK

Führe folgendes Python-Skript aus um alle UKs mit >5 Fragen zu finden:

```python
import os, re

root = "src/data/bmsKapitel"
for dirpath, _, files in os.walk(root):
    for fname in files:
        if not fname.endswith(".ts"):
            continue
        path = os.path.join(dirpath, fname)
        content = open(path).read()
        # Count selfTest question blocks
        questions = re.findall(r'question:\s*["`]', content)
        # This is approximate - manual check needed for files with >5
        if len(questions) > 5:
            print(f"{path}: ~{len(questions)} questions")
```

Für jede Datei mit >5 Fragen: Kürze die überschüssigen Fragen (behalte die besten 5 — die mit den höchsten difficulty-Werten und breitester Themenabdeckung).

---

## QUALITÄTSCHECKLISTE — vor jedem Commit prüfen

Für jede bearbeitete Datei:

- [ ] Kein `''` (Doppel-Apostroph) in Template-Literals
- [ ] Kein Navigationslink (`← [Zurück:` oder `[Weiter:`)
- [ ] Kein Metadaten-Header (Priorität/Lesezeit/Stichwortliste) im content
- [ ] Kein `📌 Prüfungsfokus`-Block
- [ ] Kein `⭐` im content
- [ ] Kein `>>>> `-Merksatz im content (stattdessen in `merksätze: []`)
- [ ] `lernziele` hat 3–5 Einträge
- [ ] `sections` hat 2–4 Einträge
- [ ] `merksätze` hat 3–6 Einträge
- [ ] `klinischerBezug` befüllt (kein leerer String)
- [ ] `altfrage` befüllt
- [ ] Jedes UK hat max. 5 selfTest-Fragen
- [ ] Richtige Antwort ist correctIndex: 2 (Option C)
- [ ] Jede Frage hat `hints: [string, string]`
- [ ] Kein TypeScript-Fehler (`npx tsc --noEmit`)
- [ ] Content min. 4.500 Zeichen (zähle mit `content.length`)

---

## REIHENFOLGE DER AUSFÜHRUNG

1. `SCHRITT 0` — Goldstandard (kap1) und Negativbeispiel (kap5) lesen
2. `SCHRITT 1` — kap5 Quick-Bugs fixen (15 min)
3. `SCHRITT 2` — Frontend selfTest-Anzeige (einzeln statt alle)
4. `SCHRITT 3 C1` — kap11-Immunologie neuschreiben
5. `SCHRITT 3 C2` — kap8-Humangenetik neuschreiben
6. `SCHRITT 3 C3` — kap4-Entwicklungsbiologie neuschreiben
7. `SCHRITT 3 C4` — kap9-Evolution neuschreiben
8. `SCHRITT 3 C5` — kap10-Ökologie 3 UKs hinzufügen
9. `SCHRITT 3 C6` — kap3-Schwingungen Physik prüfen und ggf. erweitern
10. `SCHRITT 4` — Globaler Fragen-Trim alle Subjects
11. `npx tsc --noEmit` — TypeScript-Check
12. Qualitätscheckliste für jede Datei durchgehen
