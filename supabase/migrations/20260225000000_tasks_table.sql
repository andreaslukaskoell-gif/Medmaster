-- ============================================================
-- Persistent Task Database: BMS, KFF, SEK
-- Single source of truth; generators only fill the pool.
-- ============================================================

CREATE TABLE IF NOT EXISTS tasks (
  id                TEXT PRIMARY KEY,
  domain            TEXT NOT NULL CHECK (domain IN (
    'bms-bio','bms-chem','bms-phys','bms-math',
    'kff-zahlenfolgen','kff-figuren','kff-implikationen','kff-wortflüssigkeit','kff-merkfähigkeit',
    'sek-erkennen','sek-regulieren','sek-entscheiden'
  )),
  type              TEXT NOT NULL,
  difficulty        INTEGER NOT NULL CHECK (difficulty >= 0 AND difficulty <= 1000),
  data              JSONB NOT NULL DEFAULT '{}',
  correct_answer    JSONB NOT NULL,
  explanation       TEXT,
  source            TEXT NOT NULL CHECK (source IN ('official','generated','curated')),
  validated         BOOLEAN NOT NULL DEFAULT false,
  invalid_reason    TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tasks_domain ON tasks(domain);
CREATE INDEX IF NOT EXISTS idx_tasks_domain_validated ON tasks(domain, validated);
CREATE INDEX IF NOT EXISTS idx_tasks_domain_difficulty ON tasks(domain, difficulty);
CREATE INDEX IF NOT EXISTS idx_tasks_source ON tasks(source);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at DESC);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tasks_read" ON tasks;
CREATE POLICY "tasks_read" ON tasks FOR SELECT USING (true);

DROP POLICY IF EXISTS "tasks_insert" ON tasks;
CREATE POLICY "tasks_insert" ON tasks FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "tasks_update" ON tasks;
CREATE POLICY "tasks_update" ON tasks FOR UPDATE USING (true);

DROP POLICY IF EXISTS "tasks_delete" ON tasks;
CREATE POLICY "tasks_delete" ON tasks FOR DELETE USING (true);

COMMENT ON TABLE tasks IS 'Persistent validated tasks for BMS, KFF, SEK. Generators fill this pool; UI only reads.';
