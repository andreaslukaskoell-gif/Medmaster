-- User feedback on individual questions (BMS, KFF, TV, SEK)
CREATE TABLE IF NOT EXISTS question_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  question_type TEXT NOT NULL CHECK (question_type IN (
    'bms', 'kff-zahlenfolgen', 'kff-figuren', 'kff-implikationen',
    'kff-wortfluessigkeit', 'kff-gedaechtnis', 'tv', 'sek-ee', 'sek-er', 'sek-se'
  )),
  feedback_text TEXT NOT NULL CHECK (char_length(feedback_text) > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for admin queries
CREATE INDEX idx_question_feedback_created ON question_feedback (created_at DESC);
CREATE INDEX idx_question_feedback_type ON question_feedback (question_type, created_at DESC);

-- RLS: users can insert their own feedback, only admins can read all
ALTER TABLE question_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own feedback"
  ON question_feedback FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own feedback"
  ON question_feedback FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
