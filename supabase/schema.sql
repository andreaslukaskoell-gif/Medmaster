-- MedMaster Supabase Schema
-- Run this in the Supabase SQL Editor

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

-- Einzelne Antworten (fuer Schwaechenanalyse)
CREATE TABLE answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  question_type TEXT NOT NULL,
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
  session_type TEXT NOT NULL,
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

-- Lernaktivitaet (fuer Heatmap)
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

-- Indexes fuer Performance
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

-- View fuer Rangliste (anonymisiert)
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

-- Rangliste fuer alle lesbar machen
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

-- Trigger fuer automatische Profilerstellung
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Funktion: Schwaechenanalyse pro User
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
