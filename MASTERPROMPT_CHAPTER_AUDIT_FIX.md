# MASTERPROMPT: Chapter Content Quality Audit & Fix

## MedMaster — BMS Lerninhalt Qualitätssicherung

Dieses Prompt basiert auf einem systematischen Audit von 152 Unterkapiteln (UKs) über alle 4 Fächer.

---

## KONTEXT — Was du VORHER lesen musst

```
Read /sessions/.../src/data/bmsKapitel/biologie/kap1-die-zelle.ts        ← GOLDSTANDARD
Read /sessions/.../src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts ← NEGATIVBEISPIEL
Read /sessions/.../src/data/bmsKapitel/types.ts                           ← Interfaces
Read /sessions/.../src/components/diagrams/DiagramSVG.tsx                 ← Verfügbare SVGs
Read /sessions/.../src/pages/BMSUnterkapitel.tsx                          ← Rendering-Logik
```

---

## AUDIT-ERGEBNISSE — Bekannte Probleme

### A. kap5-klassische-genetik.ts [DRINGEND]

**10× doppeltes Apostroph** → im Browser sichtbar als `Mendel''sche`

```
Mendel''sche → Mendelsche      (NICHT Mendel'sche!)
```

**28× `>>>> ` Merksatz-Marker im content-Feld** → rendern als roher Text

```
>>>> Dominanz: Das dominante Allel... → gehört in merksätze: ['Dominanz: ...']
```

Alle `>>>>` Zeilen aus content extrahieren → in das `merksätze: []` Array übertragen.

**Nav-Links am Ende von content-Feldern** → tote Links, entfernen:

```
← [Zurück: Bio Kap 4 UK04 – Plazenta](Bio_Kap4_UK04_Plazenta.md)
```

**⭐ Sterne und `## 📌 Prüfungsfokus` Blöcke** → aus content entfernen.

**Metadata-Header** → aus content entfernen:

```
**Priorität:** HOCH
**Geschätzte Lesezeit:** 14 Minuten
**Stichwortliste-Abdeckung:** 9/9
```

**Strukturlose Datenfelder** → kap5 hat `lernziele: []`, `sections: []`, `merksätze: []` → befüllen!

- Aus dem vorhandenen content die Lernziele ableiten
- Aus den H2-Überschriften im content → `sections[]` anlegen
- `>>>> ` Marker → `merksätze[]`

**SelfTest** → in einigen kap5-UKs >5 Fragen → auf max. 5 kürzen.

---

### B. Markdown-Tabellen in content-Feldern (23 UKs)

**Problem:** 23 UKs haben markdown `|---|` Tabellen direkt im `content`-Feld, OBWOHL diese UKs `sections[]` haben.
Die Tabellen rendern zwar (via ReactMarkdown + remarkGfm), aber ohne das schöne Styling des `sections[i].table` Formats.

**Regel:** Tabellen sind **OK für Gegenüberstellungen** (z.B. Prokaryoten vs. Eukaryoten, ionisch vs. kovalent).
Aber wenn ein UK bereits `sections[]` hat, sollen Vergleichstabellen in das sections.table-Format überführt werden.

**So geht's:**

```typescript
// VORHER: Tabelle im content-Feld (markdown)
content: `
## Vergleich Prokaryoten vs. Eukaryoten

| Merkmal | Prokaryoten | Eukaryoten |
|---------|-------------|------------|
| Kern | kein Kern | Kern vorhanden |
| Ribosomen | 70S | 80S |
`;

// NACHHER: Tabelle in sections[i].table
sections: [
  {
    heading: "Vergleich Prokaryoten vs. Eukaryoten",
    text: "Die wichtigsten strukturellen Unterschiede auf einen Blick:",
    table: {
      headers: ["Merkmal", "Prokaryoten", "Eukaryoten"],
      rows: [
        ["Kern", "kein Kern", "Kern vorhanden"],
        ["Ribosomen", "70S", "80S"],
      ],
    },
  },
];
```

**Betroffene UKs (23 Stück):**
biologie: bio-11-01, bio-11-03, bio-7-05
chemie: ch-10-02, ch-11-02, ch-12-01, ch-12-02, ch-12-04, ch-13-02, ch-13-03, ch-13-04,
ch-2-01, ch-2-02, ch-2-03, ch-3-01, ch-3-02, ch-6-01, ch-6-02, ch-6-03,
ch-7-03
physik: ph-1-01, ph-1-02, ph-1-03, ph-4-01, ph-4-02, ph-4-04, ph-7-02
mathematik: ma-1-02, ma-3-04

Vorgehen per UK:

1. Markdown-Tabelle aus content entfernen
2. Als sections[i].table Eintrag anlegen (mit passendem heading + text)
3. content bleibt als sauberer Fließtext ohne Tabelle

---

### C. Merksätze — Inline-Platzierung unter relevanten Absätzen

**Aktuell:** Alle `merksätze[]` werden am Ende des UKs angezeigt (nach den Sections).
**Gewünscht:** Merksätze direkt unter den relevanten Abschnitt — in `sections[i].merksatz`.

**Vorgehen:**

1. Für jedes UK mit sections[] + merksätze[]: Prüfe welcher Merksatz zu welcher Section gehört
2. Passendes Merksatz → in `sections[i].merksatz: "..."` übertragen
3. Wenn Merksatz zu keiner Section passt → bleibt in `merksätze[]`
4. WICHTIG: `merksätze[]` darf danach leer sein (`[]`) — ist OK

**Beispiel:**

```typescript
// VORHER
sections: [
  { heading: "70S vs 80S Ribosomen", text: "Prokaryoten haben 70S Ribosomen..." },
  { heading: "Zellwand", text: "Prokaryoten haben meist Peptidoglykan..." }
],
merksätze: [
  "70S = prokaryotisch, 80S = eukaryotisch: Basis der Antibiotikaselektivität",
  "Gram+ hat dicke Peptidoglykanschicht, Gram- hat dünne + äußere Membran"
]

// NACHHER
sections: [
  {
    heading: "70S vs 80S Ribosomen",
    text: "Prokaryoten haben 70S Ribosomen...",
    merksatz: "70S = prokaryotisch, 80S = eukaryotisch: Basis der Antibiotikaselektivität"
  },
  {
    heading: "Zellwand",
    text: "Prokaryoten haben meist Peptidoglykan...",
    merksatz: "Gram+ hat dicke Peptidoglykanschicht, Gram- hat dünne + äußere Membran"
  }
],
merksätze: []
```

---

### D. Fehlende sections[] in 3 Bio-Kapiteln

**kap3-anatomie-physiologie.ts** (10 UKs): alle haben `sections: []`
**kap5-klassische-genetik.ts** (7 UKs): alle haben `sections: []`
**kap6-molekulargenetik.ts** (4 UKs): alle haben `sections: []`

**Vorgehen:**

1. H2-Überschriften (`## Heading`) aus content als section.heading verwenden
2. Den Text nach jeder H2 bis zur nächsten H2 als section.text
3. `## ` Prefix aus content entfernen (wird dann in section.heading übernommen)
4. Passendes Merksatz-Mapping: `>>>>` Marker → section.merksatz

**Ziel:** content enthält danach sauberen Einstiegs-Fließtext (ohne H2s),
sections[] enthält die strukturierten Abschnitte mit heading + text + optional merksatz/table.

---

### E. Altfragen — Format und Qualität

**Aktuell:** 127 Altfragen sind offene Fragen `{ question: '...', answer: '...' }`.
Keine einzige ist als echte MedAT-Frage markiert oder im Multiple-Choice-Format.

**Was zu tun ist:**

1. **Jede Altfrage prüfen:** Ist sie in einem Format, das MedAT-gerecht ist?
   - MedAT-Fragen sind Multiple Choice (5 Optionen, eine richtig)
   - Offene Fragen sind KEINE echten Altfragen, sondern Übungsfragen

2. **Wenn die Frage eine gute Multiple-Choice-Frage werden kann:**
   Konvertiere sie in das selfTest-Format und füge sie zu `selfTest[]` hinzu.
   Lass `altfrage` als offene Prüfungsfrage stehen ODER entferne sie.

3. **Markierung hinzufügen** — ergänze eine Quelle wenn bekannt:

   ```typescript
   altfrage: {
     question: 'Warum ist Chloramphenicol für Prokaryoten toxisch?',
     answer: 'Es blockiert die 50S-Untereinheit der 70S-Ribosomen...',
     // Füge hinzu wenn bekannt:
     // source: 'MedAT 2022' ODER source: 'Übungsformat'
   }
   ```

   → HINWEIS an den Entwickler in einem Kommentar:
   `// TODO: echte MedAT-Altfrage einfügen, diese ist eine Übungsfrage`

4. **Wann echte Fragen einfügen:** Nur wenn du sicher bist, dass es eine
   offizielle MedAT/MedAT-AT Frage ist. Nie erfundene Fragen als "MedAT" markieren.

---

### F. Diagramm-Felder ergänzen

**Verfügbare SVG-Typen** (aus DiagramSVG.tsx DIAGRAM_MAP):

```
Biologie: animal-cell, plant-vs-animal-cell, cell-membrane, mitosis, meiosis,
          dna-helix, transcription-translation, heart-anatomy, cardiac-conduction,
          nephron, action-potential, synapse, immune-response, menstrual-cycle,
          blood-groups, pedigree-analysis, cell-cycle, membrane-transport,
          blutkreislauf, atmungssystem, verdauungssystem, nervensystem-übersicht,
          hormonsystem, sinnesorgane, prokaryote-vs-eukaryote, endomembrane-system,
          sarkomer, blutbestandteile, double-membrane-organelles, stem-cells

Chemie: periodic-table, atomic-orbitals, ionic-bond, covalent-bond, ph-scale,
        functional-groups, enzyme-substrate

Physik: newton-forces, circuit, wave-types, lens-imaging, em-spectrum, doppler-effect

Mathe: coordinate-system, unit-circle, vector-addition
```

**Vorgehen:** Für jedes UK das ein Diagramm-Thema behandelt:

- `diagram: "passender-typ"` ergänzen wenn noch nicht vorhanden
- Das Diagramm erscheint am Ende des sections-Blocks — gut als visueller Abschluss

**Beispiele für fehlende Diagramme:**

- bio-1-02 (Prokaryoten vs. Eukaryoten) → `diagram: "prokaryote-vs-eukaryote"` ✓ schon da?
- bio-2-01 (Epithelgewebe) → evtl. noch kein passendes Diagramm vorhanden
- ch-1-xx (Atombau) → `diagram: "atomic-orbitals"` prüfen
- ph-3-xx (Schwingungen) → `diagram: "wave-types"` prüfen

---

### G. Content-Heading-Struktur (H2 im content-Feld)

**Befund:** 120 UKs haben `## H2` Überschriften im content-Feld.
**Status:** ✅ KEIN FEHLER — das ist gewollte Prosa-Struktur.

H2s in content = Unterabschnitte des Fließtexts (z.B. "## Historischer Kontext")
Sections-Headings = Review-Zusammenfassungen (z.B. "Strukturelle Unterschiede")
→ Diese sind UNTERSCHIEDLICH, keine Duplikation.

**Einzige Korrektur:** Wenn ein UK `sections[]` hat, SOLLEN die H2-Überschriften im
content-Feld nicht die gleichen sein wie die section.headings.
Falls sie identisch sind → content-H2 entfernen (section übernimmt das Heading).

---

### H. Versteckte Features (quiz, imageUrl, additionalNotes)

**Befund aus dem Audit:**

- `quiz?: QuizItem[]` — in types.ts definiert, in BMSUnterkapitel.tsx NICHT gerendert
  (nur als Debug-Status "Vorhanden/Fehlt" angezeigt)
- `imageUrl?: string` — in types.ts definiert, NICHT gerendert
- `additionalNotes?: string` — in types.ts definiert, wird in BMSUnterkapitel.tsx GERENDERT
  (aber kein UK nutzt es aktuell)

**TODO für den Entwickler:**

1. `quiz` und `imageUrl` entweder rendern ODER aus types.ts entfernen
2. `additionalNotes` nutzen für "Weiterführende Hinweise" am Ende des UKs
3. Empfehlung: `imageUrl` durch die vorhandene SVG-Diagram-Infrastruktur ersetzen
   (DiagramSVG.tsx hat 40+ Typen, braucht kein imageUrl)

---

## AUSFÜHRUNGSPLAN

### Schritt 1: kap5 Quick-Fixes [~45 min]

Datei: `src/data/bmsKapitel/biologie/kap5-klassische-genetik.ts`

```
1a. Alle 10× '' → ' ersetzen (Mendel''sche → Mendelsche)
1b. Alle 28× ">>>> Text" aus content extrahieren → in merksätze[] übertragen
1c. Nav-Links (← [Zurück:...]) aus content entfernen
1d. ⭐ Sterne aus content entfernen
1e. ## 📌 Prüfungsfokus Blöcke (heading + Liste) aus content entfernen
1f. **Priorität:** / **Lesezeit:** / **Stichwortliste:** Zeilen entfernen
1g. Für jeden UK: lernziele[] aus content ableiten und befüllen
1h. Für jeden UK: sections[] aus H2-Struktur ableiten und anlegen
1i. selfTest: auf max. 5 Fragen kürzen (schlechteste 2 entfernen)
```

### Schritt 2: Tabellen aus content → sections.table [~90 min]

Für die 23 betroffenen UKs:

- Markdown-Tabelle identifizieren
- Als sections[i].table konvertieren
- Aus content-Fließtext entfernen

**Priorität:** zuerst Bio (3 UKs), dann Chemie (17 UKs), dann Physik (6 UKs), dann Mathe (2 UKs)

### Schritt 3: Merksätze inline platzieren [~60 min]

Für alle UKs mit sections[] + merksätze[]:

- Zuordnung: welcher Merksatz gehört zu welcher Section?
- sections[i].merksatz befüllen
- merksätze[] leeren oder auf nicht-zuordenbare reduzieren

### Schritt 4: sections[] für kap3/kap5/kap6 anlegen [~90 min]

- H2-Struktur aus content in sections[] überführen
- Merksatz-Marker (`>>>>`) in sections[i].merksatz einbauen
- content bereinigen (H2s entfernen, Einstiegsparagraph stehen lassen)

### Schritt 5: Diagramme ergänzen [~30 min]

- Pro UK prüfen: gibt es ein passendes Diagramm in DIAGRAM_MAP?
- Falls ja und noch nicht vorhanden: `diagram: "type"` ergänzen

### Schritt 6: Altfragen-Audit [~45 min]

- TODO-Kommentare zu allen 127 Altfragen hinzufügen: `// Quelle: Übungsformat`
- Altfragen die sich für MC eignen → als zusätzliche selfTest-Frage konvertieren
  (nur wenn selfTest < 5 Fragen hat)
- Altfrage in { question, answer } Format beibehalten

---

## VERBOTEN (wie im Goldstandard kap1)

- ❌ `''` Doppel-Apostroph (immer: `'`)
- ❌ `>>>> ` Merksatz-Marker im content-Feld
- ❌ Navigation-Links `← [Zurück:...]`
- ❌ `⭐` Sterne
- ❌ `## 📌 Prüfungsfokus` Blöcke
- ❌ `**Priorität:**`, `**Lesezeit:**`, `**Stichwortliste-Abdeckung:**`
- ❌ sections[i].heading = content H2-Heading (Duplikation)
- ❌ Merksätze erfinden die inhaltlich falsch sind
- ❌ Mehr als 5 selfTest-Fragen pro UK

## PFLICHT (wie im Goldstandard kap1)

- ✅ content = echter Fließtext (erklärender Prosatext mit sub-H2s für Struktur)
- ✅ lernziele[]: 3-5 Lernziele, als vollständige Sätze mit Verb
- ✅ sections[]: 2-4 Sections als Review-Zusammenfassungen (heading + text + optional merksatz/table)
- ✅ merksätze[]: relevante Kernsätze, inline in sections[i].merksatz wenn zuordenbar
- ✅ selfTest[]: 4-5 MC-Fragen (5 Optionen A-E, correctIndex: 2, hints[])
- ✅ klinischerBezug: kurzer klinischer Anwendungsfall (1-3 Sätze)
- ✅ altfrage: { question, answer } — offene Prüfungsfrage
- ✅ diagram: passender SVG-Typ wenn vorhanden

---

## QUALITÄTSCHECKLISTE

Nach jedem UK prüfen:

- [ ] Kein `''` im content
- [ ] Kein `>>>>` im content
- [ ] Keine Nav-Links, Sterne, Metadata
- [ ] content = Fließtext, kein reines Listen-Dump
- [ ] sections[].heading ≠ content H2 (nicht dupliziert)
- [ ] Markdown-Tabellen → sections[i].table (wenn UK sections hat)
- [ ] Merksätze: inline in sections[i].merksatz wo sinnvoll
- [ ] selfTest ≤ 5 Fragen, correctIndex: 2, alle hints[] befüllt
- [ ] diagram: Feld gesetzt wenn passendes SVG verfügbar
- [ ] altfrage: logische Prüfungsfrage, nicht trivial
