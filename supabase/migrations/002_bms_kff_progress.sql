-- MedMaster: BMS Chapters, KFF Tasks, User Progress
-- Im Supabase Dashboard → SQL Editor ausführen

-- =============================================================================
-- 1. bms_chapters
-- =============================================================================
CREATE TABLE IF NOT EXISTS bms_chapters (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL CHECK (subject IN ('biologie', 'chemie', 'physik', 'mathematik')),
  content_markdown TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bms_chapters_subject ON bms_chapters(subject);
CREATE INDEX IF NOT EXISTS idx_bms_chapters_order ON bms_chapters(order_index);

COMMENT ON TABLE bms_chapters IS 'BMS-Kapitel (38 Kapitel); content_markdown = vollständiger Markdown-Inhalt inkl. Unterkapitel-Struktur';

-- =============================================================================
-- 2. kff_tasks
-- =============================================================================
CREATE TABLE IF NOT EXISTS kff_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,  -- z.B. Schlauchfiguren, Wortflüssigkeit, Zahlenfolgen, ...
  difficulty TEXT CHECK (difficulty IN ('leicht', 'mittel', 'schwer') OR difficulty IS NULL),
  data_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_kff_tasks_category ON kff_tasks(category);
CREATE INDEX IF NOT EXISTS idx_kff_tasks_difficulty ON kff_tasks(difficulty);

COMMENT ON TABLE kff_tasks IS 'KFF-Aufgaben (Kognitive Fähigkeiten & Fertigkeiten)';

-- =============================================================================
-- 3. user_progress
-- =============================================================================
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,   -- chapter_id oder task_id
  item_type TEXT NOT NULL CHECK (item_type IN ('BMS', 'KFF')),
  status TEXT NOT NULL DEFAULT 'started',  -- z.B. started, completed, skipped
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, item_id, item_type)
);

CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_item ON user_progress(item_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_type ON user_progress(item_type);

COMMENT ON TABLE user_progress IS 'User-Fortschritt pro BMS-Kapitel oder KFF-Task';

-- =============================================================================
-- RLS (Row Level Security)
-- =============================================================================
ALTER TABLE bms_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE kff_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- bms_chapters: öffentlich lesbar
CREATE POLICY "bms_chapters_select" ON bms_chapters FOR SELECT USING (true);

-- kff_tasks: öffentlich lesbar
CREATE POLICY "kff_tasks_select" ON kff_tasks FOR SELECT USING (true);

-- user_progress: nur eigener User
CREATE POLICY "user_progress_select" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_progress_insert" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_progress_update" ON user_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "user_progress_delete" ON user_progress FOR DELETE USING (auth.uid() = user_id);

-- =============================================================================
-- updated_at Trigger
-- =============================================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS bms_chapters_updated_at ON bms_chapters;
CREATE TRIGGER bms_chapters_updated_at
  BEFORE UPDATE ON bms_chapters
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS kff_tasks_updated_at ON kff_tasks;
CREATE TRIGGER kff_tasks_updated_at
  BEFORE UPDATE ON kff_tasks
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS user_progress_updated_at ON user_progress;
CREATE TRIGGER user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
