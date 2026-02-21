-- ============================================================
-- Phase 6: BMS Fragen-Trainer
-- Creates bms_questions + user_question_attempts tables
-- Migrates existing questions from bms_subchapters.questions JSONB
-- ============================================================

-- ── 1. bms_questions ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bms_questions (
  id              TEXT PRIMARY KEY,
  typ             TEXT NOT NULL CHECK (typ IN ('A','K','M')),
  fach            TEXT NOT NULL CHECK (fach IN ('biologie','chemie','physik','mathematik')),
  uk_id           TEXT REFERENCES bms_subchapters(id) ON DELETE CASCADE,
  stamm           TEXT NOT NULL,
  -- TYP A + M: Antwortoptionen [{key:'A', text:'...'}]
  optionen        JSONB,
  korrekte_option TEXT,
  -- TYP K: Aussagen [{nr:1, text:'...', korrekt:true}]
  aussagen        JSONB,
  -- TYP K: Kombinationen [{key:'A', nummern:[1,3,5]}]
  kombinationen   JSONB,
  erklaerung      TEXT NOT NULL DEFAULT '',
  -- 1=leicht 2=mittel 3=schwer
  schwierigkeit   INTEGER NOT NULL DEFAULT 2 CHECK (schwierigkeit IN (1,2,3)),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ── 2. user_question_attempts ────────────────────────────────
CREATE TABLE IF NOT EXISTS user_question_attempts (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  -- nullable so unauthenticated users can still use trainer (local fallback)
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id     TEXT REFERENCES bms_questions(id) ON DELETE CASCADE,
  answered_at     TIMESTAMPTZ DEFAULT NOW(),
  correct         BOOLEAN NOT NULL,
  -- 0=Raten 1=Unsicher 2=Sicher (BEFORE answering)
  confidence      INTEGER CHECK (confidence IN (0,1,2)),
  -- 1=Wieder 2=Schwer 3=Gut 4=Leicht (AFTER answering, FSRS rating)
  fsrs_rating     INTEGER CHECK (fsrs_rating IN (1,2,3,4)),
  -- FSRS state after this attempt (persisted per-question latest state)
  fsrs_stability  FLOAT DEFAULT 1.0,
  fsrs_difficulty FLOAT DEFAULT 5.0,
  fsrs_due        TIMESTAMPTZ DEFAULT NOW(),
  fsrs_reps       INTEGER DEFAULT 0
);

-- ── 3. Indexes ───────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_bms_q_uk       ON bms_questions(uk_id);
CREATE INDEX IF NOT EXISTS idx_bms_q_fach     ON bms_questions(fach);
CREATE INDEX IF NOT EXISTS idx_uqa_user_q     ON user_question_attempts(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_uqa_due        ON user_question_attempts(user_id, fsrs_due);
CREATE INDEX IF NOT EXISTS idx_uqa_answered   ON user_question_attempts(user_id, answered_at DESC);

-- ── 4. RLS ───────────────────────────────────────────────────
ALTER TABLE bms_questions          ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_question_attempts ENABLE ROW LEVEL SECURITY;

-- Questions: anyone can read
DROP POLICY IF EXISTS "bms_questions_read"  ON bms_questions;
CREATE POLICY "bms_questions_read" ON bms_questions
  FOR SELECT USING (true);

-- Attempts: users own their data; anon users pass user_id = null (handled client-side)
DROP POLICY IF EXISTS "uqa_own_read"   ON user_question_attempts;
DROP POLICY IF EXISTS "uqa_own_insert" ON user_question_attempts;
DROP POLICY IF EXISTS "uqa_anon_read"  ON user_question_attempts;

CREATE POLICY "uqa_own_read" ON user_question_attempts
  FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "uqa_own_insert" ON user_question_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- ── 5. Migrate existing questions from bms_subchapters ───────
-- All existing questions are TYP A (Einzelauswahl, 5 Optionen A-E)
-- Transform: {id, question, options:[{id, text}], correct, explanation, difficulty}
--         → {id, typ, fach, uk_id, stamm, optionen:[{key, text}], korrekte_option, erklaerung, schwierigkeit}

INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm, optionen, korrekte_option, erklaerung, schwierigkeit
)
SELECT
  -- Compound ID: subchapter-id + question-id to avoid collisions
  bs.id || '~' || (q->>'id')                              AS id,
  'A'                                                      AS typ,
  CASE
    WHEN bs.chapter_id LIKE 'bio%'  THEN 'biologie'
    WHEN bs.chapter_id LIKE 'chem%' THEN 'chemie'
    WHEN bs.chapter_id LIKE 'phys%' THEN 'physik'
    WHEN bs.chapter_id LIKE 'math%' THEN 'mathematik'
    ELSE 'biologie'
  END                                                      AS fach,
  bs.id                                                    AS uk_id,
  COALESCE(q->>'question', '')                             AS stamm,
  -- Transform options array: [{id:'A', text:'...'} → {key:'A', text:'...'}]
  (
    SELECT jsonb_agg(
      jsonb_build_object('key', opt->>'id', 'text', opt->>'text')
      ORDER BY opt->>'id'
    )
    FROM jsonb_array_elements(q->'options') AS opt
  )                                                        AS optionen,
  q->>'correct'                                            AS korrekte_option,
  COALESCE(q->>'explanation', '')                          AS erklaerung,
  CASE q->>'difficulty'
    WHEN 'easy' THEN 1
    WHEN 'hard' THEN 3
    ELSE 2
  END                                                      AS schwierigkeit
FROM
  bms_subchapters bs,
  jsonb_array_elements(bs.questions) AS q
WHERE
  bs.questions IS NOT NULL
  AND jsonb_typeof(bs.questions) = 'array'
  AND jsonb_array_length(bs.questions) > 0
ON CONFLICT (id) DO NOTHING;
