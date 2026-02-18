# Pre-Launch Checklist – MedMaster für MedAT-Studierende

Priorisiert nach **Absturzrisiko** und **kritischen Fehlern**. Vor dem Live-Gang für andere MedAT-Studierende abarbeiten.

---

## Kritisch (kann App zum Absturz bringen)

### 1. ~~Supabase-Client ohne Env-Variablen~~ ✅ Erledigt

**Datei:** `src/lib/supabase.ts`  
- Env-Check ergänzt: Fehlende Variablen werden in der Konsole ausgegeben (`[MedMaster] Supabase ist nicht konfiguriert. Bitte in .env setzen: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY`).
- `supabase` ist jetzt `SupabaseClient | null`; alle Aufrufer (useAuth, sync, syncService, useDashboardProfile, supabaseBMS, migrateBMS) prüfen auf `null` und brechen ab, sodass die App nicht crasht.

---

### 2. ~~useAuth: Kein Fehler-Handling bei Profile-Fetch~~ ✅ Erledigt

**Datei:** `src/hooks/useAuth.ts` – `fetchProfile()`  
- Abfrage auf `.maybeSingle()` umgestellt; `error` wird ausgewertet und geloggt.
- Bei **keinem Profil** (neuer User): Es wird ein Standard-Profil (starter, xp/level 0) gesetzt, sodass die App einen Willkommen-Zustand anzeigen kann und nicht hängt.

---

### 3. ~~Duell: Absturz bei nur einer Antwort-Option~~ ✅ Erledigt

**Datei:** `src/pages/Duel.tsx`  
- Falsche Optionen werden in `wrongOptions` gesammelt; die Gegner-Antwort wird nur aus `wrongOptions[Math.floor(Math.random() * wrongOptions.length)]` gewählt, wenn `wrongOptions.length > 0`, sonst Fallback auf `q.correctOptionId` (kein Crash).

---

### 4. ~~Main-Store-Sync beim Login fehlt~~ ✅ Erledigt

**Datei:** `src/hooks/useAuth.ts`  
- Beim Login wird neben `startAutoSync(userId)` nun auch `startMainSync(userId)` aufgerufen.
- Beim Logout wird `stopMainSync()` aufgerufen. XP, Quiz-Ergebnisse, Notizen etc. werden damit beim Gerätewechsel aus Supabase geladen.

---

## Hoch (stabile Nutzung / Datenkonsistenz)

### 5. pullFromSupabase: Profile-Abfrage mit `.single()`

**Datei:** `src/lib/sync.ts` – `pullFromSupabase()`  
**Problem:** `profiles` wird mit `.single()` abgefragt. Bei neuem User (noch keine Zeile) setzt Supabase `error`; `data` ist dann null. Der Code nutzt nur `profileRes.data`, wirft also nicht – aber ein explizites „kein Profil“-Handling und ggf. `.maybeSingle()` machen das robuster und vermeiden Log-Warnungen.

**Fix:** Auf `.maybeSingle()` umstellen und Fall „kein Profil“ klar behandeln (z. B. nur lokale Daten behalten, kein Merge).

---

### 6. AuthGuard: In DEV wird Auth komplett übersprungen

**Datei:** `src/components/AuthGuard.tsx`  
**Problem:** `if (import.meta.env.DEV) return <>{children} />` – in der Entwicklung sind alle geschützten Routen **ohne Login** erreichbar.  
**Risiko:** Nur relevant, wenn ein **Production-Build** versehentlich mit `DEV === true` ausgeliefert wird (z. B. falsche Env). Dann wären geschützte Seiten ohne Auth erreichbar.

**Fix:** Sicherstellen, dass für Production-Build (z. B. `vite build`) `import.meta.env.DEV` false ist (Vite setzt das standardmäßig). Optional: In CI/Deployment prüfen, dass kein `NODE_ENV=development` für den Client-Build gesetzt ist.

---

### 7. Permissions: In DEV immer „Pro“

**Datei:** `src/lib/permissions.ts`  
**Problem:** `import.meta.env.DEV ? "pro" : tier` – in Entwicklung haben alle Nutzer effektiv „Pro“.  
**Risiko:** Gleich wie oben: Nur kritisch, wenn ein Build mit DEV-Flag in Production landet. Dann hätten alle Nutzer Pro-Rechte.

**Fix:** Wie bei AuthGuard: Production-Build ohne DEV; keine Änderung nötig, solange Build-Konfiguration stimmt.

---

## Mittel (bessere Robustheit / UX)

### 8. ErrorBoundary: Kein Reset / keine Fehler-ID

**Datei:** `src/components/ErrorBoundary.tsx`  
**Problem:** Nach einem Fehler bleibt der Boundary im Fehlerzustand; Nutzer kann nur über „Zurück zum Dashboard“ neu starten. Kein „Erneut versuchen“ oder Reset des Boundaries.

**Fix:** Optional: State zurücksetzen (z. B. Button „Seite neu laden“ oder `resetErrorBoundary`-Callback), damit man ohne kompletten Reload die gleiche Route nochmal versuchen kann.

---

### 9. Fehlende Env-Dokumentation für Production

**Problem:** `.env.example` existiert; ob und welche Variablen für **Production** (z. B. Vercel) gesetzt werden müssen, ist für andere nicht zentral dokumentiert.

**Fix:** In README oder `docs/` kurz auflisten: z. B. `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`; Hinweis, dass die App ohne sie beim Auth-Check abstürzen kann (siehe Punkt 1).

---

### 10. useAuth fetchProfile: Fehler nicht geloggt

**Datei:** `src/hooks/useAuth.ts` – `fetchProfile()`  
**Problem:** Bei Supabase-Fehler (Netzwerk, RLS, etc.) wird nichts geloggt; nur `data` wird ausgewertet. Debugging und Monitoring sind schwer.

**Fix:** `error` loggen (z. B. `console.warn` oder später Sentry), besonders in Production, um Auth-/Profil-Probleme schneller zu erkennen.

---

## Geprüft und unkritisch

- **Prognose `ema()`:** Es gibt `if (results.length === 0) return 0` – kein Zugriff auf `sorted[0]` bei leerem Array.
- **syncService (stichwort_stats / fach_stats):** Bereits fehlertolerant mit try/catch und leeren Arrays.
- **useKFFResultsSWR / useKFFResults:** Prüfen `if (!supabase)` und fangen Fehler ab.
- **ErrorBoundary:** Wird in `AppShell` um den Haupt-Outlet genutzt; fängt Render-Fehler in Seiten ab.
- **Dashboard:** Verwendung von `row?.`, `payload?.` etc. – optional chaining vorhanden.

---

## Kurz-Check vor Go-Live

1. **Env:** `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` in Production (z. B. Vercel) gesetzt?
2. **Build:** `npm run build` mit Production-Modus (kein DEV)?
3. **Login:** Nach Login wird `startMainSync` (oder äquivalent) aufgerufen, damit XP/Quiz/Notizen synchronisiert werden?
4. **Supabase:** RLS-Policies für `profiles`, `quiz_results`, `kff_results`, `stichwort_stats` etc. so gesetzt, dass Nutzer nur eigene Daten sehen?
5. **Duell:** Alle BMS-Fragen, die im Duell vorkommen, haben mindestens 2 Optionen (oder Duell-Code ist gegen 0 falsche Optionen abgesichert)?

Wenn diese Punkte erledigt sind, sind die größten Absturz- und Datenrisiken adressiert.
