-- Fix activity_log: add columns that sync code expects
ALTER TABLE activity_log ADD COLUMN IF NOT EXISTS date DATE;
ALTER TABLE activity_log ADD COLUMN IF NOT EXISTS minutes INTEGER DEFAULT 0;
ALTER TABLE activity_log ADD COLUMN IF NOT EXISTS questions INTEGER DEFAULT 0;
ALTER TABLE activity_log ALTER COLUMN activity_type DROP NOT NULL;
ALTER TABLE activity_log ALTER COLUMN activity_type SET DEFAULT 'daily';

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'activity_log_user_id_date_key') THEN
    ALTER TABLE activity_log ADD CONSTRAINT activity_log_user_id_date_key UNIQUE (user_id, date);
  END IF;
END $$;

-- Fix fach_stats: subject nullable (code only sends fach)
ALTER TABLE fach_stats ALTER COLUMN subject DROP NOT NULL;
ALTER TABLE fach_stats ALTER COLUMN subject SET DEFAULT '';
