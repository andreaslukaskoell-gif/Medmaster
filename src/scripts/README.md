# Skripte

## seedTaskDb.ts – Task-DB (BMS/KFF/SEK) befüllen

Persistente Aufgaben-Datenbank: Offizielle Beispiele und optionale Generator-Batches in die Tabelle **tasks** schreiben.

### Voraussetzungen

1. **Migration ausführen:** Die Tabelle `tasks` muss existieren. In Supabase SQL Editor die Datei `supabase/migrations/20260225000000_tasks_table.sql` ausführen (oder `supabase link` + `supabase db push`).
2. **Umgebungsvariablen** (z. B. in `.env`): `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`. Das Skript lädt `.env` via `dotenv/config`.

### Ausführung

```bash
# Nur offizielle Beispiele (Zahlenfolgen, Figuren, Implikationen, Wortflüssigkeit, SEK)
npx tsx src/scripts/seedTaskDb.ts

# Zusätzlich 100 generierte Aufgaben für eine Domain (z. B. kff-figuren)
npx tsx src/scripts/seedTaskDb.ts --generate kff-figuren 100
```

Unterstützte Domains für `--generate`: `kff-zahlenfolgen`, `kff-figuren`, `kff-implikationen`, `kff-wortflüssigkeit`.

---

## importLocalStorageBackup.ts – localStorage-Backup nach Supabase

Kapitel, die **nur im localStorage** liegen (z. B. aus dem Editor), in Supabase retten:

1. **Backup in Konsole erzeugen:** App im Browser öffnen (mit Account, der localStorage mit `bms-chapters` hat). Konsole öffnen (F12). Beim Laden erscheint ein JSON-Block zwischen `=== BMS localStorage Backup … ===` und `=== Ende Backup ===`. Alles dazwischen kopieren (nur den JSON, ohne die beiden Zeilen mit `===`).

2. **In Datei speichern:** In `src/scripts/backup-bms-chapters.json` einfügen (Datei anlegen, falls nicht vorhanden) und speichern.

3. **Import ausführen:**
   ```bash
   npx tsx src/scripts/importLocalStorageBackup.ts
   ```
   Optional eigener Pfad:
   ```bash
   npx tsx src/scripts/importLocalStorageBackup.ts pfad/zur/mein-backup.json
   ```

Env wie bei seedDatabase: `VITE_SUPABASE_URL` (oder `SUPABASE_URL`) und `SUPABASE_SERVICE_ROLE_KEY`.

**Hinweis:** Die temporäre Funktion in `App.tsx`, die beim Laden den Backup-JSON in die Konsole schreibt, kannst du nach dem Import wieder entfernen.

---

## seedDatabase.ts – Datenbank einmalig befüllen

Lädt **BMS-Kapitel** aus den TypeScript-Daten (`data/bmsKapitel`) und **KFF-Aufgaben** aus den KFF-Dateien (z. B. `kffWortfluessigkeit.ts`, `kffZahlenfolgen.ts`, `figurenGenerator.ts` usw.) und schreibt sie in Supabase:

- **bms_chapters** und **bms_subchapters**
- **kff_tasks** (Tabelle laut Migration 002; Kategorien: wortfluessigkeit, zahlenfolgen, implikationen, figuren, emotionen-erkennen, emotionen-regulieren, soziales-entscheiden, textverstaendnis)

### Voraussetzungen

1. **Service Role Key** aus der Supabase-Konsole:
   - Supabase Dashboard → **Settings** → **API** → **Project API keys** → **service_role** (geheim, nur serverseitig verwenden).

2. Umgebungsvariablen setzen (z. B. in `.env` im Projektroot, **nicht** committen):
   ```bash
   VITE_SUPABASE_URL=https://dein-projekt.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=dein-service-role-key
   ```
   Statt `VITE_SUPABASE_URL` kannst du auch `SUPABASE_URL` verwenden.

### Ausführung (einmalig)

**Option A – mit tsx (empfohlen, kein Extra-Config):**

```bash
# Im Projektroot (medmaster)
npx tsx src/scripts/seedDatabase.ts
```

Falls die Env-Variablen in `.env` stehen, kannst du sie vorher laden:

```bash
export $(grep -v '^#' .env | xargs)
npx tsx src/scripts/seedDatabase.ts
```

**Option B – mit ts-node:**

```bash
npm install -D ts-node tsconfig-paths
npx ts-node --esm -r tsconfig-paths/register -P tsconfig.app.json src/scripts/seedDatabase.ts
```

(Paths-Auflösung für `@/` kann je nach Setup abweichen; tsx umgeht das meist.)

### Hinweise

- **BMS:** Es werden alle Einträge aus `alleKapitel` (alle Fächer) eingelesen. Kapitel werden per `upsert` nach `id` geschrieben, Unterkapitel ebenfalls – mehrfaches Ausführen aktualisiert vorhandene Einträge.
- **KFF:** `kff_tasks` hat einen UUID-Primary-Key ohne inhaltlichen Unique-Constraint. Jeder Lauf fügt neue Zeilen ein; bei mehrfachem Ausführen entstehen doppelte Aufgaben. Für ein sauberes Re-Seed vorher in Supabase die Tabelle `kff_tasks` leeren (oder ein eigenes „Replace by category“-Skript verwenden).
