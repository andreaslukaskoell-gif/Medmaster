-- Migration 003: Main Store Sync
-- Run in Supabase SQL Editor AFTER migration_002
-- Voraussetzung: profiles-Tabelle existiert bereits (Auth Trigger)

-- ============================================================
-- 1) profiles: fehlende Spalten hinzufügen (NICHT neu erstellen)
-- ============================================================
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS medat_type TEXT DEFAULT 'medat-h';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS test_date DATE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'starter';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_expires_at TIMESTAMPTZ;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS level INTEGER DEFAULT 1;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS streak_days INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_active_date DATE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

-- ============================================================
-- 2) quiz_results
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('bms','kff','tv','sek','simulation')),
  subject TEXT,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  answers JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 3) spaced_repetition
-- ============================================================
CREATE TABLE IF NOT EXISTS spaced_repetition (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  last_answered DATE NOT NULL,
  next_due DATE NOT NULL,
  interval_days INTEGER DEFAULT 0,
  ease_factor REAL DEFAULT 2.5,
  repetitions INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, question_id)
);

-- ============================================================
-- 4) user_notes
-- ============================================================
CREATE TABLE IF NOT EXISTS user_notes (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  content TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, chapter_id)
);

-- ============================================================
-- 5) user_bookmarks
-- ============================================================
CREATE TABLE IF NOT EXISTS user_bookmarks (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL CHECK (item_type IN ('chapter','question')),
  item_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, item_type, item_id)
);

-- ============================================================
-- 6) activity_log
-- ============================================================
CREATE TABLE IF NOT EXISTS activity_log (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  minutes INTEGER DEFAULT 0,
  questions INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, date)
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_spaced_due ON spaced_repetition(user_id, next_due);

-- ============================================================
-- RLS
-- ============================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE spaced_repetition ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;

-- Policies: Jeder User sieht nur seine eigenen Daten
-- (DROP IF EXISTS damit Migration idempotent ist)
DO $$ BEGIN
  DROP POLICY IF EXISTS "Users see own data" ON profiles;
  DROP POLICY IF EXISTS "Users see own data" ON quiz_results;
  DROP POLICY IF EXISTS "Users see own data" ON spaced_repetition;
  DROP POLICY IF EXISTS "Users see own data" ON user_notes;
  DROP POLICY IF EXISTS "Users see own data" ON user_bookmarks;
  DROP POLICY IF EXISTS "Users see own data" ON activity_log;
END $$;

CREATE POLICY "Users see own data" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users see own data" ON quiz_results FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users see own data" ON spaced_repetition FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users see own data" ON user_notes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users see own data" ON user_bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users see own data" ON activity_log FOR ALL USING (auth.uid() = user_id);

-- ============================================================
-- Trigger: Profil automatisch bei Registrierung erstellen
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', NEW.email),
    NEW.raw_user_meta_data->>'display_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger nur erstellen wenn er nicht existiert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
