# BMS Content Guide

Kurze Anleitung für die Überarbeitung von Kapitel-Inhalten (Vorlage: `BMS_CONTENT_MASTER.json`).

---

## 0. Standardisierte ContentStructure (neue Seiten/Kapitel)

Jedes Markdown-Kapitel kann optional mit **Metadaten** beginnen und mit einem **Quiz-Block** enden. Die App wertet beides aus und bleibt auch ohne Metadaten stabil (Safe-Fallback).

### Header-Tags (YAML-Frontmatter)

Am **Anfang der Datei**, eingeschlossen von `---`:

```yaml
---
subject: Biologie
topic: Zellbiologie
difficulty: 3
keywords: Zelle, Zellmembran, Mitochondrium, Ribosom
---
```

- **subject:** Fach (z. B. Biologie, Chemie) – für Analyse und Zuordnung. Fallback: `Allgemein`.
- **topic:** Thema (z. B. Zellbiologie). Fallback: `Allgemein`.
- **difficulty:** 1–5 (Einfluss auf XP). Fallback: `3`.
- **keywords:** Komma-/Semikolon-getrennte Liste für die **Knowledge-Bridge**: Begriffe aus anderen Kapiteln werden im Text dezent verlinkt (Smart-Linker).

**Hinweis:** Fehlen die Metadaten oder sind sie ungültig, stürzt die App nicht ab – es werden Standard-XP und das Thema „Allgemein“ verwendet.

### Quiz-Integration

Quizfragen **am Ende des Markdowns** werden automatisch erkannt und in die Quiz-Komponente geladen (nicht hart codiert). Format:

```markdown
## Übungsfragen
## Kontrollfragen
## Selbsttest
## Quiz
```

Danach die gleiche Struktur wie bisher:

```markdown
1. Frage text?
   A) Option 1
   B) Option 2
   C) Option 3
2. Nächste Frage...
```

Die App parst diese Blöcke und zeigt sie als interaktives Quiz.

### Smart-Linker (Keywords anderer Kapitel)

Begriffe, die in den **keywords** anderer Kapitel vorkommen, werden im Text **dezent unterstrichen und verlinkt** (Tooltip mit Thema, Klick führt zum Kapitel). Keine Änderung am Markdown nötig – die Verlinkung erfolgt automatisch über die ContentStructure.

---

## 1. Tabellen in Markdown formatieren

Verwende **GFM (GitHub Flavored Markdown)**. Eine Zeile pro Zeile, Spalten mit `|` getrennt, nach der Kopfzeile eine Trennzeile mit `|---|`.

**Beispiel:**

```markdown
| Spalte A   | Spalte B   | Spalte C   |
|------------|------------|------------|
| Wert 1     | Wert 2     | Wert 3     |
| Wert 4     | Wert 5     | Wert 6     |
```

- Leerzeichen um die `|` sind optional, verbessern aber die Lesbarkeit in der Rohdatei.
- **Fett** und *Kursiv* in Zellen sind erlaubt: `| **Fett** | *Kursiv* |`.
- Breite Tabellen (z. B. 5+ Spalten) werden in der App horizontal scrollbar dargestellt – kein Umbau nötig.

---

## 2. Optimale Bildgröße

- **Empfohlen:** **800×600 px** (4:3) oder **1200×800 px** (3:2) für Inhaltsbilder.
- Format: PNG oder JPG; für Diagramme/Schemas SVG, sofern in der App unterstützt.
- Dateipfad in der Vorlage z. B. `/images/kapitel-name.svg` oder eine externe URL (z. B. von deinem CDN).
- Die App lädt Bilder lazy und zeigt bei Fehlern einen Platzhalter; zu große Bilder (z. B. > 2000 px Breite) können auf Mobilgeräten Speicher und Ladezeit kosten – 1200 px Breite ist ein guter Kompromiss.

---

## 3. JSON-Snippet: eine Quizfrage zum Kopieren

```json
{
  "question": "Deine Frage hier?",
  "options": [
    "Antwort A",
    "Antwort B",
    "Antwort C",
    "Antwort D"
  ],
  "correctIndex": 0,
  "explanation": "Kurze Erklärung, warum die richtige Antwort stimmt (und ggf. warum die anderen falsch sind)."
}
```

- `correctIndex`: **0** = erste Option, **1** = zweite, usw.
- Mindestens 2 Optionen, typisch 4. Lange Optionen und Erklärungen sind erlaubt; bei sehr langen Texten das Quiz-Layout auf Mobile prüfen.
