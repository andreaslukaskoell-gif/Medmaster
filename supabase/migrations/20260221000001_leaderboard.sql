-- Leaderboard snapshots: echte User statt Mock-Daten
CREATE TABLE IF NOT EXISTS public.leaderboard_snapshots (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  nickname text NOT NULL DEFAULT 'Anonym',
  xp integer DEFAULT 0,
  level integer DEFAULT 1,
  xp_this_week integer DEFAULT 0,
  subject_scores jsonb DEFAULT '{}',
  badge_ids text[] DEFAULT '{}',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE public.leaderboard_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read leaderboard" ON public.leaderboard_snapshots
  FOR SELECT USING (true);

CREATE POLICY "Own write leaderboard" ON public.leaderboard_snapshots
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS leaderboard_xp_idx ON public.leaderboard_snapshots (xp DESC);
CREATE INDEX IF NOT EXISTS leaderboard_weekly_idx ON public.leaderboard_snapshots (xp_this_week DESC);
