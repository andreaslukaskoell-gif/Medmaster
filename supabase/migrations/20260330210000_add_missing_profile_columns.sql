-- Add missing columns that sync.ts and syncService.ts expect
-- These columns were referenced in code but never added to the schema

-- profiles: sync.ts line 54 expects xp, level, streak_days, last_active_date
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS level INTEGER DEFAULT 1;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS streak_days INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_active_date TEXT;

-- profiles: syncService.ts line 156-166 expects these fields
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS learning_phase TEXT DEFAULT 'foundation';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS exam_date DATE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS daily_challenge_streak INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_daily_challenge TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS total_questions_answered INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS total_correct INTEGER DEFAULT 0;

-- fach_stats: syncService.ts line 212-219 expects fach, overall_success_rate, etc.
-- Current schema has (user_id, subject, total_questions, correct_questions)
-- Need to add missing columns and rename constraint
ALTER TABLE fach_stats ADD COLUMN IF NOT EXISTS fach TEXT;
ALTER TABLE fach_stats ADD COLUMN IF NOT EXISTS overall_success_rate REAL DEFAULT 0;
ALTER TABLE fach_stats ADD COLUMN IF NOT EXISTS weak_topics TEXT DEFAULT '[]';
ALTER TABLE fach_stats ADD COLUMN IF NOT EXISTS strong_topics TEXT DEFAULT '[]';
ALTER TABLE fach_stats ADD COLUMN IF NOT EXISTS recommended_daily_questions INTEGER DEFAULT 10;

-- Backfill fach from subject where null
UPDATE fach_stats SET fach = subject WHERE fach IS NULL AND subject IS NOT NULL;

-- Add unique constraint on (user_id, fach) if not exists
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fach_stats_user_id_fach_key'
  ) THEN
    -- Only add if no rows conflict
    BEGIN
      ALTER TABLE fach_stats ADD CONSTRAINT fach_stats_user_id_fach_key UNIQUE (user_id, fach);
    EXCEPTION WHEN duplicate_table THEN
      NULL;
    WHEN unique_violation THEN
      NULL;
    END;
  END IF;
END $$;

-- user_notes: sync.ts expects chapter_id, content
ALTER TABLE user_notes ADD COLUMN IF NOT EXISTS chapter_id TEXT;
-- Backfill chapter_id from content_id where null
UPDATE user_notes SET chapter_id = content_id WHERE chapter_id IS NULL AND content_id IS NOT NULL;
-- Rename 'note' to 'content' alias not needed — just add content column
ALTER TABLE user_notes ADD COLUMN IF NOT EXISTS content TEXT DEFAULT '';
UPDATE user_notes SET content = note WHERE content = '' AND note IS NOT NULL AND note != '';

-- user_bookmarks: sync.ts expects item_type, item_id
ALTER TABLE user_bookmarks ADD COLUMN IF NOT EXISTS item_type TEXT;
ALTER TABLE user_bookmarks ADD COLUMN IF NOT EXISTS item_id TEXT;
-- Backfill from existing columns
UPDATE user_bookmarks SET item_type = content_type WHERE item_type IS NULL AND content_type IS NOT NULL;
UPDATE user_bookmarks SET item_id = content_id WHERE item_id IS NULL AND content_id IS NOT NULL;

-- stichwort_stats: syncService.ts expects different schema than current
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS stichwort_id TEXT;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS total_attempts INTEGER DEFAULT 0;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS correct_attempts INTEGER DEFAULT 0;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS success_rate REAL DEFAULT 0;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS last_practiced TEXT;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS confidence REAL DEFAULT 0;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS streak INTEGER DEFAULT 0;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS avg_time_per_question REAL;
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'offen';
ALTER TABLE stichwort_stats ADD COLUMN IF NOT EXISTS next_review_at TIMESTAMPTZ;

-- Backfill stichwort_id from keyword (if keyword column exists)
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'stichwort_stats' AND column_name = 'keyword') THEN
    EXECUTE 'UPDATE stichwort_stats SET stichwort_id = keyword WHERE stichwort_id IS NULL AND keyword IS NOT NULL';
  END IF;
END $$;

-- Add unique constraint for upsert
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'stichwort_stats_user_id_stichwort_id_key'
  ) THEN
    BEGIN
      ALTER TABLE stichwort_stats ADD CONSTRAINT stichwort_stats_user_id_stichwort_id_key UNIQUE (user_id, stichwort_id);
    EXCEPTION WHEN duplicate_table THEN
      NULL;
    WHEN unique_violation THEN
      NULL;
    END;
  END IF;
END $$;

-- quiz_results table: sync.ts expects it, ensure it exists
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'bms',
  subject TEXT,
  chapter TEXT,
  total INTEGER DEFAULT 0,
  correct INTEGER DEFAULT 0,
  score REAL DEFAULT 0,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users can manage own quiz_results' AND tablename = 'quiz_results') THEN
    CREATE POLICY "Users can manage own quiz_results" ON quiz_results FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;
