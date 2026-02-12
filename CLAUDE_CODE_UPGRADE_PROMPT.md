# MedMaster — Content-Aufwertung + Supabase Backend

## KONTEXT
Die Basis-App steht (Mega-Prompt ist abgearbeitet). Jetzt müssen wir:
1. Content auf Konkurrenz-Niveau bringen (StudyMed hat 15.000+ Aufgaben, 250+ Videos, Aufgabengenerator; MedGurus hat 6.000+ Fragen; get-to-med hat 16.000+ Übungen)
2. Supabase Backend integrieren (Auth, Datenbank, echte Nutzerdaten)

---

## TEIL A: CONTENT MASSIV AUFWERTEN

### A1. BMS-Lernkapitel — Lehrbuch-Qualität mit Grafiken

Unsere Kapitel müssen **besser** sein als die ÖH-Med-Wien-Skripten und StudyMed-Kapitel.
Jedes Kapitel muss folgende Struktur haben:

```
1. Überblick (Was lernst du? Warum ist es wichtig für den MedAT?)
2. Lernziele (3-5 konkrete Punkte)
3. Theorie mit eingebetteten SVG-Grafiken/Diagrammen
4. Merksätze in hervorgehobenen Boxen ("Merke: ...")
5. Klinische Bezüge ("Klinischer Bezug: Warum ist das für die Medizin relevant?")
6. Zusammenfassung (Bullet-Points der Key Facts)
7. Selbsttest (5 Fragen zum Kapitel)
```

### SVG-Grafiken für BMS erstellen!

Das ist unser DIFFERENZIERUNGSMERKMAL. Die Konkurrenz zeigt Text — wir zeigen interaktive Grafiken.

Erstelle React-Komponenten mit **inline SVG** für folgende Diagramme:

**Biologie:**
- Tierzelle mit beschrifteten Organellen (anklickbar → Detail-Info)
- Pflanzenzelle vs. Tierzelle Vergleich
- Zellmembran-Aufbau (Lipiddoppelschicht mit Proteinen)
- Mitose-Phasen (4 Bilder nebeneinander)
- Meiose I + II Übersicht
- DNA-Doppelhelix mit beschrifteten Teilen (Zucker, Phosphat, Basen)
- Transkription + Translation Ablauf
- Herz-Aufbau mit Blutfluss-Pfeilen
- Erregungsleitungssystem des Herzens
- Nephron-Aufbau mit Filtration/Resorption
- Aktionspotential-Kurve mit Phasen
- Synapse mit Neurotransmitter-Freisetzung
- Immunantwort-Schema (angeboren vs. adaptiv)
- Menstruationszyklus mit Hormonkurven (FSH, LH, Östrogen, Progesteron)
- Blutgruppen-Kreuzschema (AB0-System)
- Stammbaum-Analyse Beispiel (autosomal dominant/rezessiv)

**Chemie:**
- Periodensystem (interaktiv, Gruppen/Perioden hervorhebbar)
- Atomorbitalmodell (s, p, d Orbitale)
- Ionenbindung NaCl (Elektronenübergabe)
- Kovalente Bindung H2O (Lewis-Formel)
- pH-Skala mit Beispielen (Magensäure bis Natronlauge)
- Funktionelle Gruppen Übersicht (Tabelle mit Strukturformeln)
- Enzym-Substrat-Komplex (Schlüssel-Schloss-Prinzip)

**Physik:**
- Newton Kräftediagramme
- Stromkreis (Reihe vs. Parallel)
- Wellentypen (Longitudinal vs. Transversal)
- Linsenabbildung (Sammel- vs. Zerstreuungslinse)
- Elektromagnetisches Spektrum
- Doppler-Effekt Visualisierung

**Mathematik:**
- Koordinatensystem mit Funktionstypen
- Einheitskreis mit sin/cos
- Vektoraddition grafisch

**Implementation:** Erstelle eine Komponente `<DiagramSVG type="cell" />` die den richtigen SVG-Code rendert.
Jede Grafik soll:
- Saubere, professionelle SVGs sein (keine Bilder, alles Code)
- Beschriftungen auf Deutsch
- Farbig aber nicht überladen (nutze unsere Teal-Farbpalette)
- Auf Mobile gut lesbar (responsive SVGs mit viewBox)
- Optional: Hover-Effekte für mehr Details

### A2. BMS-Fragen MASSIV erweitern

Aktuell haben wir ~120 Fragen. Ziel: **mindestens 500 BMS-Fragen**.

Verteilung nach Fach UND Häufigkeit in echten Tests:

**Biologie (200 Fragen):**
- Zellbiologie: 30 Fragen (Organellen, Membrantransport, Zellzyklus)
- Genetik: 40 Fragen (Mendel, DNA/RNA, Transkription, Translation, Mutationen)
- Herz-Kreislauf: 25 Fragen (Aufbau, Erregungsleitung, Blutdruck, Blutgruppen)
- Nervensystem: 20 Fragen (Neuron, Synapse, ZNS/PNS, Reflexe)
- Endokrinologie: 15 Fragen (Hormone, Regelkreise, Diabetes)
- Immunsystem: 20 Fragen (B/T-Zellen, Antikörper, Impfung)
- Verdauung: 15 Fragen
- Niere/Harn: 10 Fragen
- Atmung: 10 Fragen
- Fortpflanzung/Entwicklung: 15 Fragen

**Chemie (120 Fragen):**
- Atombau/PSE: 20 Fragen
- Chemische Bindung: 15 Fragen
- Stöchiometrie: 20 Fragen (Mol-Berechnungen!)
- Säure/Base/pH: 25 Fragen (häufigster Chemie-Bereich!)
- Redox: 15 Fragen
- Organische Chemie: 15 Fragen
- Biochemie/Naturstoffe: 10 Fragen

**Physik (100 Fragen):**
- Mechanik: 30 Fragen (Newton, Energie, Impuls)
- Elektrizität: 25 Fragen (Ohm, Kirchhoff, Magnetismus)
- Optik: 15 Fragen
- Wärmelehre: 15 Fragen
- Wellen/Schwingungen: 10 Fragen
- Atomphysik: 5 Fragen

**Mathematik (80 Fragen):**
- Algebra/Gleichungen: 25 Fragen
- Zehnerpotenzen/Einheiten: 15 Fragen
- Funktionen: 15 Fragen
- Geometrie: 10 Fragen
- Trigonometrie: 10 Fragen
- Vektorrechnung: 5 Fragen

**Jede Frage MUSS haben:**
- 5 Antwortoptionen (A-E)
- Detaillierte Erklärung warum die richtige Antwort richtig ist
- Kurze Erklärung warum JEDE falsche Antwort falsch ist
- Schwierigkeitsgrad (leicht/mittel/schwer)
- Tags (Stichwortliste-Zuordnung)

### A3. KFF — Aufgabengenerator

StudyMed hat einen Aufgabengenerator für Zahlenfolgen und Allergieausweise. Das brauchen wir auch!

**Zahlenfolgen-Generator:**
```typescript
// Erstelle eine Funktion die zufällige Zahlenfolgen generiert
function generateZahlenfolge(difficulty: 'leicht' | 'mittel' | 'schwer'): ZahlenfolgeQuestion {
  // Leicht: Einfache arithmetische/geometrische Folgen
  // Mittel: Verschachtelte Folgen, wechselnde Operationen
  // Schwer: Fibonacci-artig, Differenzenfolgen, Quadratfolgen
  // Generiert automatisch 5 Antwortoptionen (1 richtig, 4 plausible Distraktoren)
}
```

**Allergieausweis-Generator:**
```typescript
// Generiert zufällige Allergieausweise für die Merkfähigkeit
function generateAllergyCards(count: number): AllergyCard[] {
  // Zufällige 2-silbige Fantasienamen aus Silben-Pool
  // Zufällige Geburtstage (01-28, 01-12)
  // Zufällige Blutgruppen (A, B, AB, 0)
  // Zufällige Allergien aus medizinischem Pool
  // Zufällige 5-stellige Ausweisnummern
  // Zufällige Länder
  // Ja/Nein Medikamenteneinnahme
}

function generateMemoryQuestions(cards: AllergyCard[]): MemoryQuestion[] {
  // Generiert 25 Fragen zu den 8 Ausweisen
  // Fragetypen: Name→Blutgruppe, Ausweisnummer→Allergie, etc.
}
```

**Wortflüssigkeit-Generator:**
```typescript
// Pool von 500+ deutschen Substantiven (6-10 Buchstaben, kein Ü/Ö/Ä/ß)
const WORD_POOL = ["HAUSTIER", "GESCHENK", "BRUNNEN", "PFLASTER", ...];

function generateAnagram(): WortflüssigkeitQuestion {
  // Wählt zufälliges Wort
  // Scrambled die Buchstaben
  // Generiert 4 falsche Anfangsbuchstaben + ggf. "Keine Antwort richtig"
}
```

### A4. Testsimulation verbessern

Unsere Testsimulation muss **exakt** dem echten MedAT entsprechen:

```
MedAT-H Simulation — Gesamtdauer: ca. 9 Stunden (realistisch!)

08:00 - Biologie (40 Fragen, 30 Min)
         → 5 Min Pause
08:35 - Chemie (24 Fragen, 18 Min)
         → 5 Min Pause
08:58 - Physik (18 Fragen, 16 Min)
         → 5 Min Pause
09:19 - Mathe (12 Fragen, 11 Min)
         → 30 Min Pause

10:00 - Textverständnis (12 Aufgaben, 35 Min)
         → 15 Min Pause

10:50 - KFF Figuren zusammensetzen (15 Aufgaben, 20 Min)
         → 5 Min Pause
11:15 - KFF Gedächtnis Lernphase (8 Ausweise, 8 Min)
         → direkt weiter zu:
11:23 - KFF Zahlenfolgen (10 Aufgaben, 15 Min)
11:38 - KFF Wortflüssigkeit (15 Aufgaben, 20 Min)
         → direkt weiter zu:
11:58 - KFF Gedächtnis Abrufphase (25 Fragen, 15 Min)
12:13 - KFF Implikationen (10 Aufgaben, 10 Min)
         → 15 Min Pause

12:38 - SEK Emotionen erkennen (10 Aufgaben, 15 Min)
12:53 - SEK Emotionen regulieren (12 Aufgaben, 18 Min)
13:11 - SEK Soziales Entscheiden (10 Aufgaben, 15 Min)

→ FERTIG. Gesamtauswertung mit Gewichtung.
```

Implementiere einen Timer der die echte Reihenfolge einhält!
Biete auch einen "Kurztest"-Modus an (nur 1 Untertest, für schnelles Üben).

### A5. Karteikarten-System (wie StudyMed)

StudyMed hat 5.000+ Karteikarten. Erstelle ein Karteikarten-Feature:

```typescript
interface Flashcard {
  id: string;
  front: string;  // Frage
  back: string;   // Antwort
  category: 'bio' | 'chemie' | 'physik' | 'mathe';
  topic: string;
  difficulty: 'leicht' | 'mittel' | 'schwer';
  nextReview: Date;  // Spaced Repetition
  easeFactor: number; // SM-2
}
```

- Automatisch aus Kapitel-Inhalten generieren (Key Facts → Karteikarten)
- Spaced Repetition eingebaut (SM-2 Algorithmus)
- Swipe-Geste auf Mobile (richtig/falsch)
- "Gewusst" / "Nicht gewusst" Buttons
- Statistik pro Kartenstapel

### A6. Duell-Modus (wie StudyMed App)

Auch ohne echten Multiplayer simulierbar:

```typescript
interface DuelSession {
  id: string;
  category: string;
  questions: BMSQuestion[];  // 5 zufällige Fragen
  playerScore: number;
  opponentScore: number;    // KI-Gegner mit realistischer Fehlerquote
  opponentName: string;     // Zufälliger Name
  timePerQuestion: number;  // 30 Sekunden
}
```

- 5 Fragen, 30 Sekunden pro Frage
- KI-Gegner antwortet mit realistischer Verzögerung und Fehlerquote
- Punkte-System, Rangliste
- "Freund herausfordern" (später mit echtem Backend)

---

## TEIL B: SUPABASE BACKEND

### B1. Supabase Setup

```bash
npm install @supabase/supabase-js
```

Erstelle eine Datei `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Erstelle `.env.example`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### B2. Datenbank-Schema (SQL für Supabase)

Erstelle `supabase/schema.sql`:

```sql
-- Benutzer-Profil (erweitert die Supabase auth.users Tabelle)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  medat_type TEXT DEFAULT 'medat-h' CHECK (medat_type IN ('medat-h', 'medat-z')),
  test_date DATE,
  subscription_tier TEXT DEFAULT 'starter' CHECK (subscription_tier IN ('starter', 'standard', 'pro')),
  subscription_expires_at TIMESTAMPTZ,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak_days INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lernfortschritt pro Modul
CREATE TABLE module_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  module TEXT NOT NULL CHECK (module IN ('bms-bio', 'bms-chemie', 'bms-physik', 'bms-mathe', 'kff-fz', 'kff-gm', 'kff-zf', 'kff-wf', 'kff-imp', 'tv', 'sek-ee', 'sek-er', 'sek-se')),
  questions_answered INTEGER DEFAULT 0,
  questions_correct INTEGER DEFAULT 0,
  chapters_completed TEXT[] DEFAULT '{}',
  last_practiced_at TIMESTAMPTZ,
  UNIQUE(user_id, module)
);

-- Einzelne Antworten (für Schwächenanalyse)
CREATE TABLE answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  question_type TEXT NOT NULL, -- 'bms', 'kff-zf', 'kff-imp', 'tv', 'sek-ee', etc.
  module TEXT NOT NULL,
  topic TEXT,
  subtopic TEXT,
  is_correct BOOLEAN NOT NULL,
  selected_answer TEXT,
  time_spent_seconds INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz-Sessions
CREATE TABLE quiz_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL, -- 'practice', 'simulation', 'duel', 'spaced-repetition'
  module TEXT,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percentage DECIMAL(5,2),
  weighted_score DECIMAL(5,2),
  time_spent_seconds INTEGER,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Spaced Repetition Queue
CREATE TABLE spaced_repetition (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  ease_factor DECIMAL(3,2) DEFAULT 2.50,
  interval_days INTEGER DEFAULT 1,
  repetitions INTEGER DEFAULT 0,
  next_review_date DATE NOT NULL,
  last_reviewed_at TIMESTAMPTZ,
  UNIQUE(user_id, question_id)
);

-- Lernaktivität (für Heatmap)
CREATE TABLE learning_activity (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  activity_date DATE NOT NULL,
  minutes_spent INTEGER DEFAULT 0,
  questions_answered INTEGER DEFAULT 0,
  xp_earned INTEGER DEFAULT 0,
  UNIQUE(user_id, activity_date)
);

-- Notizen
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, chapter_id)
);

-- Karteikarten (benutzerdefiniert)
CREATE TABLE user_flashcards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  category TEXT,
  topic TEXT,
  ease_factor DECIMAL(3,2) DEFAULT 2.50,
  interval_days INTEGER DEFAULT 1,
  next_review_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes für Performance
CREATE INDEX idx_answers_user_module ON answers(user_id, module);
CREATE INDEX idx_answers_user_topic ON answers(user_id, topic);
CREATE INDEX idx_spaced_repetition_due ON spaced_repetition(user_id, next_review_date);
CREATE INDEX idx_learning_activity_user_date ON learning_activity(user_id, activity_date);
CREATE INDEX idx_quiz_sessions_user ON quiz_sessions(user_id, completed_at);

-- Row Level Security (RLS) aktivieren
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE spaced_repetition ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_flashcards ENABLE ROW LEVEL SECURITY;

-- Policies: Jeder User sieht nur seine eigenen Daten
CREATE POLICY "Users can read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can read own progress" ON module_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own answers" ON answers FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own sessions" ON quiz_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own SR" ON spaced_repetition FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own activity" ON learning_activity FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own notes" ON notes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own flashcards" ON user_flashcards FOR ALL USING (auth.uid() = user_id);

-- View für Rangliste (anonymisiert)
CREATE VIEW leaderboard AS
SELECT
  profiles.username,
  profiles.display_name,
  profiles.xp,
  profiles.level,
  profiles.streak_days,
  RANK() OVER (ORDER BY profiles.xp DESC) as rank
FROM profiles
WHERE profiles.xp > 0
ORDER BY profiles.xp DESC
LIMIT 100;

-- Rangliste für alle lesbar machen
GRANT SELECT ON leaderboard TO authenticated;

-- Funktion: Profil automatisch bei Registrierung erstellen
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, username, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', 'user_' || LEFT(NEW.id::text, 8)),
    COALESCE(NEW.raw_user_meta_data->>'display_name', 'Neuer MedMaster')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger für automatische Profilerstellung
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Funktion: Schwächenanalyse pro User
CREATE OR REPLACE FUNCTION get_weakness_analysis(p_user_id UUID)
RETURNS TABLE(
  topic TEXT,
  total_questions BIGINT,
  correct_questions BIGINT,
  success_rate DECIMAL(5,2)
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    a.topic,
    COUNT(*)::BIGINT as total_questions,
    COUNT(*) FILTER (WHERE a.is_correct)::BIGINT as correct_questions,
    ROUND(COUNT(*) FILTER (WHERE a.is_correct)::DECIMAL / NULLIF(COUNT(*), 0) * 100, 2) as success_rate
  FROM answers a
  WHERE a.user_id = p_user_id
  GROUP BY a.topic
  HAVING COUNT(*) >= 3
  ORDER BY success_rate ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Funktion: Perzentil berechnen
CREATE OR REPLACE FUNCTION get_user_percentile(p_user_id UUID)
RETURNS DECIMAL(5,2) AS $$
DECLARE
  user_xp INTEGER;
  total_users INTEGER;
  users_below INTEGER;
BEGIN
  SELECT xp INTO user_xp FROM profiles WHERE id = p_user_id;
  SELECT COUNT(*) INTO total_users FROM profiles WHERE xp > 0;
  SELECT COUNT(*) INTO users_below FROM profiles WHERE xp < user_xp AND xp > 0;

  IF total_users = 0 THEN RETURN 0; END IF;
  RETURN ROUND(users_below::DECIMAL / total_users * 100, 2);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### B3. Auth-Komponenten

Erstelle die Auth-Seiten:

**`src/pages/LoginPage.tsx`** — Login mit E-Mail/Passwort + Google OAuth
**`src/pages/RegisterPage.tsx`** — Registrierung mit Username, E-Mail, Passwort
**`src/pages/ForgotPasswordPage.tsx`** — Passwort zurücksetzen
**`src/components/auth/AuthGuard.tsx`** — Protected Routes (leitet zu Login wenn nicht eingeloggt)
**`src/components/auth/SubscriptionGuard.tsx`** — Prüft ob User Premium hat für gesperrte Inhalte

### B4. Daten-Hooks

Erstelle Custom Hooks die den Zustand zwischen localStorage und Supabase synchronisieren:

```typescript
// src/hooks/useAuth.ts — Login-Status, User-Profil
// src/hooks/useProgress.ts — Lernfortschritt speichern/laden
// src/hooks/useQuizSession.ts — Quiz-Session in DB speichern
// src/hooks/useSpacedRepetition.ts — SR-Queue aus DB laden
// src/hooks/useLeaderboard.ts — Rangliste laden
// src/hooks/useActivity.ts — Lernaktivität tracken
// src/hooks/useNotes.ts — Notizen CRUD
// src/hooks/useFlashcards.ts — Karteikarten CRUD
```

**Offline-First Strategie:**
- Primär: Daten in Supabase speichern
- Fallback: localStorage wenn offline
- Beim nächsten Online-Besuch: Sync localStorage → Supabase

### B5. Stripe Integration (vorbereiten)

Erstelle die Struktur (noch ohne echten Stripe-Key):

```typescript
// src/lib/stripe.ts
// Pricing-Tabelle mit Stripe Price IDs (Platzhalter)
export const PRICING = {
  standard: {
    monthly: 'price_PLACEHOLDER_standard_monthly', // €14.99
    yearly: 'price_PLACEHOLDER_standard_yearly',    // €119.88 (€9.99/mo)
  },
  pro: {
    monthly: 'price_PLACEHOLDER_pro_monthly',       // €24.99
    yearly: 'price_PLACEHOLDER_pro_yearly',          // €199.88 (€16.66/mo)
  }
}
```

Die Pricing-Seite soll einen Button haben der zur Checkout-Session weiterleitet.
Zeige auch einen **Jahresabo-Rabatt** an (20% günstiger als monatlich).

### B6. Content-Freischaltung nach Tier

```typescript
// src/utils/permissions.ts
export function canAccess(tier: 'starter' | 'standard' | 'pro', feature: string): boolean {
  const permissions = {
    starter: {
      bms_questions: 10,       // 10 Fragen pro Fach
      bms_chapters: 2,         // Erste 2 Kapitel pro Fach
      kff_exercises: 5,        // 5 Übungen pro Untertest
      tv_texts: 1,             // 1 Übungstext
      sek_situations: 3,       // 3 Situationen
      simulations: 0,          // Keine Simulation
      flashcards: 50,          // 50 Karteikarten
      leaderboard: false,
      weakness_analysis: false,
      spaced_repetition: false,
      heatmap: false,
      notes: false,
      duel_mode: true,         // Duell als Teaser
    },
    standard: {
      bms_questions: 'unlimited',
      bms_chapters: 'unlimited',
      kff_exercises: 'unlimited',
      tv_texts: 'unlimited',
      sek_situations: 'unlimited',
      simulations: 1,
      flashcards: 'unlimited',
      leaderboard: true,
      weakness_analysis: true,
      spaced_repetition: true,
      heatmap: true,
      notes: true,
      duel_mode: true,
    },
    pro: {
      // Alles aus standard plus:
      simulations: 'unlimited',
      advanced_analytics: true,
      priority_support: true,
      early_access: true,
    }
  };
  return permissions[tier]?.[feature] ?? false;
}
```

Gesperrte Inhalte sollen einen **schönen Paywall-Overlay** anzeigen:
- Unscharfer Hintergrund (blur)
- Lock-Icon
- "Upgrade auf Standard für alle BMS-Kapitel"
- CTA-Button zum Pricing

---

## TEIL C: QUALITÄTS-DIFFERENZIERUNG

Was uns BESSER macht als die Konkurrenz:

| Feature | StudyMed | MedGurus | get-to-med | MedMaster |
|---------|----------|----------|------------|-----------|
| Interaktive SVG-Grafiken | ❌ | ❌ | ❌ | ✅ |
| Aufgabengenerator (unendlich) | ✅ (teilweise) | ❌ | ❌ | ✅ |
| Spaced Repetition | ❌ | ❌ | ❌ | ✅ |
| Schwächenanalyse pro Subtopic | ❌ | ❌ | ❌ | ✅ |
| Dark Mode | ❌ | ❌ | ❌ | ✅ |
| Keyboard Shortcuts | ❌ | ❌ | ❌ | ✅ |
| Lernplan-Generator | ❌ | ❌ | ✅ (PDF) | ✅ (interaktiv) |
| Karteikarten | ✅ (5000) | ❌ | ❌ | ✅ (auto-gen) |
| Duell-Modus | ✅ (App) | ❌ | ❌ | ✅ (Web) |
| GitHub-Heatmap | ❌ | ❌ | ❌ | ✅ |
| Notizen pro Kapitel | ❌ | ❌ | ❌ | ✅ |
| Videos | ✅ (250+) | ✅ | ✅ (60h) | ❌ (Phase 2) |
| Preis | €59-169 | €150+ | €19.99/mo | €14.99/mo |

---

## ZUSAMMENFASSUNG DER AKTIONEN

1. **SVG-Grafiken:** 25+ interaktive Diagramme für BMS erstellen
2. **BMS-Fragen:** Von 120 auf 500+ erweitern
3. **Aufgabengeneratoren:** Für Zahlenfolgen, Allergieausweise, Wortflüssigkeit
4. **Karteikarten-System:** Auto-generiert aus Kapitel-Inhalten
5. **Duell-Modus:** Gegen KI-Gegner
6. **Testsimulation:** Exakter MedAT-Ablauf mit Pausen
7. **Supabase:** Schema, Auth, Hooks, RLS, Leaderboard
8. **Stripe-Vorbereitung:** Pricing mit Paywall
9. **Content-Freischaltung:** Starter/Standard/Pro Tiers

STARTE MIT DEN SVG-GRAFIKEN (größter visueller Unterschied zur Konkurrenz), dann Fragen erweitern, dann Supabase.
