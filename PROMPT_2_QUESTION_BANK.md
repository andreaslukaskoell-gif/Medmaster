# Claude Code Prompt 2 — Supabase bms_questions Hauptfragen-Bank

**Laufzeit:** ~60–90 Minuten | **Modus:** --dangerously-skip-permissions

## AUFGABE

Generiere die **Hauptfragen-Bank** für den MedAT-Trainer. Schreibe eine SQL-Migrationsdatei mit ~10–15 Fragen pro Unterkapitel (UK) für alle 106 Stichwort-UKs — gemischt TYP A und TYP K, MedAT-examensnah.

## ZIEL-DATEI

```
supabase/migrations/20260221000000_seed_bms_questions_main.sql
```

Falls die Datei bereits existiert: **überschreiben** (nicht appendieren).

## DATENBANKSCHEMA

```sql
CREATE TABLE bms_questions (
  id              TEXT PRIMARY KEY,
  typ             TEXT NOT NULL CHECK (typ IN ('A','K','M')),
  fach            TEXT NOT NULL CHECK (fach IN ('biologie','chemie','physik','mathematik')),
  uk_id           TEXT REFERENCES bms_subchapters(id) ON DELETE CASCADE,
  stamm           TEXT NOT NULL,
  optionen        JSONB,        -- TYP A: [{key:'A',text:'...'}, {key:'B',...}, ...]
  korrekte_option TEXT,         -- TYP A: 'A'|'B'|'C'|'D'|'E'
  aussagen        JSONB,        -- TYP K: [{nr:1,text:'...',korrekt:true}, ...]
  kombinationen   JSONB,        -- TYP K: [{key:'A',nummern:[1,3,5]}, ...]
  erklaerung      TEXT NOT NULL DEFAULT '',
  schwierigkeit   INTEGER NOT NULL DEFAULT 2 CHECK (schwierigkeit IN (1,2,3)),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

## FRAGENTYPEN

### TYP A — Einfache Auswahl (Single Best Answer)

- `stamm`: Frage oder Fallvignette
- `optionen`: genau 5 Optionen [{key:'A',text:'...'}, {key:'B',...}, {key:'C',...}, {key:'D',...}, {key:'E',...}]
- `korrekte_option`: 'A'|'B'|'C'|'D'|'E'
- `aussagen`: NULL oder '[]'::jsonb
- `kombinationen`: NULL oder '[]'::jsonb
- `erklaerung`: Warum richtig/falsch (3–5 Sätze, alle Optionen addressieren)

### TYP K — Kombinationsfragen (Aussagen 1–5 → welche sind korrekt?)

- `stamm`: "Welche der folgenden Aussagen zu [Thema] sind korrekt?"
- `optionen`: '[]'::jsonb (leer)
- `korrekte_option`: 'A'|'B'|'C'|'D'|'E' (Kombination mit 3 richtigen Aussagen)
- `aussagen`: [{nr:1,text:'...',korrekt:true}, {nr:2,text:'...',korrekt:false}, {nr:3,...}, {nr:4,...}, {nr:5,...}]
- `kombinationen`: [{key:'A',nummern:[...]}, {key:'B',nummern:[...]}, {key:'C',nummern:[...]}, {key:'D',nummern:[...]}, {key:'E',nummern:[...]}]
  - Exakt 3 Aussagen sind korrekt. Die korrekte Kombination enthält genau die 3 richtigen Nummern.
  - Falsche Kombinationen überlappen teilweise (2 richtig + 1 falsch), um echter MedAT-Struktur zu entsprechen.
- `erklaerung`: Erklärt jede Aussage einzeln (korrekt: ..., falsch: ...)

## ID-SCHEMA

```
typ{BUCHSTABE}-{fach}-{uk_id}-{kurzthema}

Beispiele:
  typa-bio-1-01-zellmembran
  typk-bio-1-02-organellen
  typa-ch-3-01-saeure-base
  typk-ph-2-01-newton
  typa-ma-1-01-bruchrechnung
```

Fach-Präfixe in uk_id:

- Biologie: bio-1-01, bio-2-03, ... bio-11-04
- Chemie: ch-1-01, ch-2-01, ... ch-13-01
- Physik: ph-1-01, ph-2-01, ... ph-7-03
- Mathematik: ma-1-01, ma-2-01, ... ma-6-03

## QUALITÄTSSTANDARDS

### Inhalt

1. **MedAT-Niveau**: Schwierigkeit 1 = Konzeptverständnis, 2 = Anwendung/Mechanismus, 3 = Fallanalyse/Ausnahmen
2. **Keine Trivialfragen** wie "Was ist eine Zelle?" — mindestens mechanistisch oder anwendungsbezogen
3. **Klinischer Bezug bevorzugt**: Symptome, Pathomechanismen, Pharmakologie wo sinnvoll
4. **Präzise Sprache**: Korrekte Fachbegriffe, keine Umgangssprache
5. **Distraktoren plausibel**: Falsche Optionen sind nicht offensichtlich falsch — typische Verwechslungen

### Verteilung pro UK

- 3–5 TYP A Fragen
- 2–3 TYP K Fragen
- Gesamt: 5–8 Fragen pro UK (realistisch für einen autonomen Durchlauf)
- Schwierigkeitsverteilung: ~30% Stufe 1, ~50% Stufe 2, ~20% Stufe 3

### Erklärungen

- TYP A: Richtige Antwort begründen + kurz erklären warum die anderen falsch sind
- TYP K: Jede der 5 Aussagen einzeln kommentieren (korrekt weil... / falsch weil...)

## UK-LISTE NACH FACH

Lies die folgenden TS-Dateien um UK-IDs und Inhalte zu ermitteln:

### Biologie (kap1–kap11)

```
src/data/bmsKapitel/biologie/kap1-die-zelle.ts
src/data/bmsKapitel/biologie/kap2-gewebe.ts
src/data/bmsKapitel/biologie/kap3-genetik.ts
src/data/bmsKapitel/biologie/kap4-evolution.ts
src/data/bmsKapitel/biologie/kap5-oekologie.ts
src/data/bmsKapitel/biologie/kap6-molekulargenetik.ts
src/data/bmsKapitel/biologie/kap7-biotechnologie.ts
src/data/bmsKapitel/biologie/kap8-physiologie.ts
src/data/bmsKapitel/biologie/kap9-immunologie.ts
src/data/bmsKapitel/biologie/kap10-neurobiologie.ts
src/data/bmsKapitel/biologie/kap11-reproduktion.ts
```

### Chemie (kap1–kap13)

```
src/data/bmsKapitel/chemie/kap1-atombau.ts
src/data/bmsKapitel/chemie/kap2-periodensystem.ts
src/data/bmsKapitel/chemie/kap3-chemische-bindung.ts
src/data/bmsKapitel/chemie/kap4-stoechiometrie.ts
src/data/bmsKapitel/chemie/kap5-saeure-base.ts
src/data/bmsKapitel/chemie/kap6-redox.ts
src/data/bmsKapitel/chemie/kap7-organische-chemie.ts
src/data/bmsKapitel/chemie/kap8-kohlenhydrate.ts
src/data/bmsKapitel/chemie/kap9-lipide.ts
src/data/bmsKapitel/chemie/kap10-proteine.ts
src/data/bmsKapitel/chemie/kap11-enzyme.ts
src/data/bmsKapitel/chemie/kap12-nukleinsaeuren.ts
src/data/bmsKapitel/chemie/kap13-stoffwechsel.ts
```

### Physik (kap1–kap7)

```
src/data/bmsKapitel/physik/kap1-mechanik.ts
src/data/bmsKapitel/physik/kap2-thermodynamik.ts
src/data/bmsKapitel/physik/kap3-elektrizitaet.ts
src/data/bmsKapitel/physik/kap4-wellen.ts
src/data/bmsKapitel/physik/kap5-optik.ts
src/data/bmsKapitel/physik/kap6-atomphysik.ts
src/data/bmsKapitel/physik/kap7-biomechanik.ts
```

### Mathematik (kap1–kap6)

```
src/data/bmsKapitel/mathematik/kap1-grundlagen.ts
src/data/bmsKapitel/mathematik/kap2-algebra.ts
src/data/bmsKapitel/mathematik/kap3-analysis.ts
src/data/bmsKapitel/mathematik/kap4-geometrie.ts
src/data/bmsKapitel/mathematik/kap5-statistik.ts
src/data/bmsKapitel/mathematik/kap6-wahrscheinlichkeit.ts
```

## VORGEHEN (schrittweise)

### Schritt 1: UK-IDs sammeln

Für jede TS-Datei: Extrahiere alle `id`-Felder der `unterkapitel`-Objekte.
Erstelle intern eine Liste: `{uk_id, fach, title, content_summary}`.

### Schritt 2: Fragen generieren (Fach für Fach)

Für jedes UK:

1. Lies `title`, `content`, `sections` und `merksätze` des UKs
2. Identifiziere 5–8 prüfungsrelevante Kernkonzepte
3. Generiere 3–5 TYP A Fragen + 2–3 TYP K Fragen
4. Achte auf Variation: nicht alle Fragen zum selben Detail

### Schritt 3: SQL aufbauen

Struktur der Datei:

```sql
-- ============================================================
-- BMS Questions Main Bank — Seed Migration
-- Generiert: [Datum]
-- UKs: [Anzahl] | Fragen: [Anzahl]
-- ============================================================

-- ============================================================
-- BIOLOGIE
-- ============================================================

-- ── Kapitel 1: Die Zelle ─────────────────────────────────
-- UK bio-1-01: [Titel]

INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
( ... ),
( ... )
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-02: [Titel]
INSERT INTO bms_questions (...) VALUES
...
ON CONFLICT (id) DO NOTHING;

-- [weiter für alle UKs]

-- ============================================================
-- CHEMIE
-- ============================================================
...
```

### Schritt 4: Validierung

Nach dem Schreiben der Datei:

```bash
# Syntax-Check: Prüfe ob alle INSERT-Blöcke korrekt geschlossen sind
grep -c "ON CONFLICT" supabase/migrations/20260221000000_seed_bms_questions_main.sql

# Fragen pro Fach zählen
grep -c "typa-bio" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typk-bio" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typa-ch" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typk-ch" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typa-ph" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typk-ph" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typa-ma" supabase/migrations/20260221000000_seed_bms_questions_main.sql
grep -c "typk-ma" supabase/migrations/20260221000000_seed_bms_questions_main.sql
```

Minimum-Checks:

- Mindestens 400 Fragen gesamt
- Jedes Fach hat mindestens 50 Fragen
- Keine doppelten IDs (grep für duplikate IDs)

## BEISPIELE ZUR ORIENTIERUNG

### TYP A Beispiel

```sql
(
  'typa-bio-1-01-membranpotenzial',
  'A', 'biologie', 'bio-1-01',
  'Ein Neuron hat ein Ruhemembranpotenzial von –70 mV. Welcher Mechanismus ist hauptverantwortlich für die Aufrechterhaltung dieses Potenzials?',
  '[
    {"key":"A","text":"Passiver K⁺-Ausstrom durch Kaliumleckkanäle"},
    {"key":"B","text":"Aktiver Na⁺-Einstrom durch spannungsgesteuerte Natriumkanäle"},
    {"key":"C","text":"Na⁺/K⁺-ATPase pumpt 2 Na⁺ rein und 3 K⁺ raus"},
    {"key":"D","text":"Cl⁻-Ionen erzeugen durch Einstrom das negative Innenpotentzial"},
    {"key":"E","text":"Ca²⁺-Kanäle hyperpolarisieren die Membran durch Ca²⁺-Ausstrom"}
  ]'::jsonb,
  'A',
  NULL, NULL,
  'Korrekt: A. Das Ruhemembranpotenzial entsteht hauptsächlich durch den passiven K⁺-Ausstrom über Kaliumleckkanäle, da die Membran im Ruhezustand für K⁺ am durchlässigsten ist. Die Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein) hält die Ionengradienten aufrecht, ist aber nicht direkt für das Ruhepotenzial verantwortlich. Option C hat die Richtung falsch (Na⁺ raus, K⁺ rein — nicht umgekehrt). Cl⁻ und Ca²⁺ spielen sekundäre Rollen.',
  2
),
```

### TYP K Beispiel

```sql
(
  'typk-bio-1-02-organellen',
  'K', 'biologie', 'bio-1-02',
  'Welche der folgenden Aussagen zu Zellorganellen sind korrekt?',
  '[]'::jsonb,
  'B',
  '[
    {"nr":1,"text":"Mitochondrien besitzen eine eigene DNA und können sich durch Teilung vermehren.","korrekt":true},
    {"nr":2,"text":"Der Golgi-Apparat synthetisiert Proteine direkt aus Aminosäuren.","korrekt":false},
    {"nr":3,"text":"Lysosomen enthalten hydrolytische Enzyme und bauen zelluläre Abfallprodukte ab.","korrekt":true},
    {"nr":4,"text":"Das raue ER ist mit Ribosomen besetzt und dient der Lipidsynthese.","korrekt":false},
    {"nr":5,"text":"Der Zellkern enthält die chromosomale DNA und wird von einer Doppelmembran umgeben.","korrekt":true}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[1,2,4]},
    {"key":"B","nummern":[1,3,5]},
    {"key":"C","nummern":[2,3,5]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[2,4,5]}
  ]'::jsonb,
  'Korrekt: 1, 3, 5. — (1) Mitochondrien: eigene zirkuläre DNA + Ribosomen → Endosymbiontentheorie, teilen sich durch Fission. (3) Lysosomen: saures Milieu (pH 4,5–5), Hydrolasen verdauen Makromoleküle (Autophagie, Phagozytose). (5) Zellkern: Doppelmembran (innere + äußere Kernmembran) mit Kernporen. — Falsch: (2) Proteine werden an Ribosomen synthetisiert, nicht im Golgi (Golgi modifiziert und sortiert fertige Proteine). (4) Raues ER dient der Proteinsynthese/Faltung; Lipidsynthese findet am glatten ER statt.',
  2
),
```

## WICHTIGE HINWEISE

1. **Jede INSERT-Gruppe mit `ON CONFLICT (id) DO NOTHING;` abschließen** — damit Re-runs sicher sind
2. **Einzel-Inserts für jedes UK** (nicht alles in einem riesigen INSERT) — bessere Lesbarkeit und Fehlersuche
3. **JSON korrekt escapen**: Einfache Anführungszeichen in SQL-Strings verdoppeln: `''` statt `'`
4. **Apostrophe in deutschem Text**: z.B. `It''s`, `Körper''s` → `''` verwenden
5. **Aussagen-Nummern** für TYP K immer bei `nr:1` starten, maximal 5 Aussagen
6. **Kombinationen**: Exakt 5 Optionen (A–E), wobei exakt eine die 3 richtigen Aussagen enthält
7. **Keine Frage doppelt**: jede ID einmalig, jedes Thema max. einmal pro UK

## FERTIG-KRITERIUM

```bash
# Gesamtanzahl Fragen
grep -c "ON CONFLICT" supabase/migrations/20260221000000_seed_bms_questions_main.sql
```

Mindestens **300 INSERT-Blöcke** (= 300 einzelne ON CONFLICT Zeilen).
Ideal: 400–600 Fragen gesamt.

Fertig wenn:

- Datei existiert und nicht leer ist
- Mindestens 300 ON CONFLICT Einträge
- Kein offensichtlicher SQL-Syntaxfehler (Klammern ausgewogen prüfen)
