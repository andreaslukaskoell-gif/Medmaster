# Supabase Integration für MedMaster

## Setup

1. **Supabase Projekt erstellen**
   - Gehe zu https://supabase.com
   - Erstelle ein neues Projekt
   - Notiere dir die Project URL und den Anon Key

2. **Umgebungsvariablen konfigurieren**

   ```bash
   cp .env.local.example .env.local
   ```

   - Fülle `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` aus

3. **SQL Schema ausführen**
   - Öffne Supabase Dashboard > SQL Editor
   - Kopiere den Inhalt von `migrations/001_bms_schema.sql`
   - Führe das SQL-Script aus

4. **Kapitel migrieren (optional)**
   - Öffne die Browser-Konsole auf `/bms`
   - Führe aus: `await window.syncChaptersToSupabase()`
   - Oder nutze die Admin-Funktion in der App

## Datenbank-Schema

### Tabellen

- **profiles**: User-Profile (erweitert auth.users)
- **bms_chapters**: BMS-Hauptkapitel
- **bms_subchapters**: BMS-Unterkapitel
- **user_progress**: User-Fortschritt pro Kapitel/Unterkapitel

### Row Level Security (RLS)

- **Chapters**: Öffentlich lesbar, nur Admins können schreiben
- **User Progress**: Jeder User kann nur seinen eigenen Fortschritt sehen/bearbeiten

## API-Funktionen

Siehe `src/lib/supabaseBMS.ts`:

- `loadBMSChaptersFromSupabase()`: Lädt alle Kapitel
- `loadBMSChaptersBySubject(subject)`: Lädt Kapitel nach Fach
- `getUserProgress(userId, chapterId?, subchapterId?)`: Lädt User-Fortschritt
- `saveUserProgress(...)`: Speichert User-Fortschritt
- `syncChaptersToSupabase(chapters)`: Migriert Kapitel von localStorage zu Supabase

## Admin-Zugriff

Um Kapitel zu erstellen/bearbeiten, muss der User eine E-Mail mit `@admin.medmaster` haben.

Du kannst die Admin-Prüfung in `001_bms_schema.sql` anpassen, falls nötig.

## Backend-Verbesserungen (Sicherheit & Robustheit)

- **Tasks:** Migration `20260225100000_tasks_rls_admin_only.sql` schränkt DELETE auf Admins ein; Pool-Fill aus der App bleibt möglich.
- **Edge Functions:** create-checkout parst JSON sicher; stripe-webhook prüft `STRIPE_WEBHOOK_SECRET` (503 wenn nicht gesetzt).
- **Sync:** Beim Pull werden `stichwort_stats`- und `fach_stats`-Zeilen validiert; ungültige Einträge werden übersprungen.
