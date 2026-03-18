-- Fix: create tables + index + RPCs (previous migration was rolled back on error)

-- 1. quiz_results
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_type text NOT NULL CHECK (quiz_type IN ('bms', 'kff', 'tv', 'sek', 'simulation')),
  subject text,
  chapter_id text,
  score integer NOT NULL,
  total integer NOT NULL,
  score_pct numeric GENERATED ALWAYS AS (CASE WHEN total > 0 THEN round((score::numeric / total) * 100, 1) ELSE 0 END) STORED,
  duration_seconds integer,
  answers jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Own quiz results" ON public.quiz_results FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON public.quiz_results (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_results_subject ON public.quiz_results (user_id, subject);
CREATE INDEX IF NOT EXISTS idx_quiz_results_type ON public.quiz_results (user_id, quiz_type);

-- 2. srs_cards
CREATE TABLE IF NOT EXISTS public.srs_cards (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id text NOT NULL,
  ease_factor numeric DEFAULT 2.5,
  interval_days integer DEFAULT 1,
  repetitions integer DEFAULT 0,
  next_review timestamptz DEFAULT now(),
  last_reviewed timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, question_id)
);
ALTER TABLE public.srs_cards ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Own SRS cards" ON public.srs_cards FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
CREATE INDEX IF NOT EXISTS idx_srs_due ON public.srs_cards (user_id, next_review);

-- 3. simulation_results
CREATE TABLE IF NOT EXISTS public.simulation_results (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bms_score integer, bms_total integer,
  tv_score integer, kff_score integer, sek_score integer,
  total_score numeric,
  duration_minutes integer,
  details jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.simulation_results ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Own simulation results" ON public.simulation_results FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Simulation results index
CREATE INDEX IF NOT EXISTS idx_sim_results_user ON public.simulation_results (user_id, created_at DESC);

-- 4. user_streaks
CREATE TABLE IF NOT EXISTS public.user_streaks (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak integer DEFAULT 0,
  longest_streak integer DEFAULT 0,
  last_active_date date,
  streak_freezes integer DEFAULT 1,
  frozen_days date[] DEFAULT '{}',
  xp integer DEFAULT 0,
  daily_goal_minutes integer DEFAULT 30,
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN CREATE POLICY "Own streak" ON public.user_streaks FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- RLS for simulation_results (may already exist)
DO $$ BEGIN
  ALTER TABLE public.simulation_results ENABLE ROW LEVEL SECURITY;
EXCEPTION WHEN others THEN NULL;
END $$;

-- RLS for user_streaks (may already exist)
DO $$ BEGIN
  ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;
EXCEPTION WHEN others THEN NULL;
END $$;

-- ── Weakness Analysis (plpgsql, no nested aggregates) ──
CREATE OR REPLACE FUNCTION public.get_weakness_analysis(p_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
DECLARE
  v_weakest jsonb;
  v_scores jsonb;
BEGIN
  WITH recent_answers AS (
    SELECT
      jsonb_array_elements(answers) AS answer,
      subject,
      chapter_id
    FROM public.quiz_results
    WHERE user_id = p_user_id
      AND quiz_type = 'bms'
      AND created_at > now() - interval '30 days'
  ),
  per_question AS (
    SELECT subject, chapter_id, (answer->>'correct')::boolean AS correct
    FROM recent_answers
    WHERE answer->>'questionId' IS NOT NULL
  ),
  per_chapter AS (
    SELECT
      subject, chapter_id,
      count(*) AS total,
      count(*) FILTER (WHERE correct) AS correct_count,
      round(count(*) FILTER (WHERE correct)::numeric / GREATEST(count(*), 1) * 100, 1) AS pct
    FROM per_question
    WHERE chapter_id IS NOT NULL
    GROUP BY subject, chapter_id
    HAVING count(*) >= 3
  )
  SELECT jsonb_agg(
    jsonb_build_object('subject', subject, 'chapter_id', chapter_id, 'total', total, 'correct', correct_count, 'pct', pct)
    ORDER BY pct ASC
  )
  INTO v_weakest
  FROM per_chapter WHERE pct < 70;

  WITH recent_answers AS (
    SELECT jsonb_array_elements(answers) AS answer, subject
    FROM public.quiz_results
    WHERE user_id = p_user_id AND quiz_type = 'bms' AND created_at > now() - interval '30 days'
  ),
  per_question AS (
    SELECT subject, (answer->>'correct')::boolean AS correct
    FROM recent_answers WHERE answer->>'questionId' IS NOT NULL
  ),
  per_subject AS (
    SELECT subject, count(*) AS total, count(*) FILTER (WHERE correct) AS correct_count,
      round(count(*) FILTER (WHERE correct)::numeric / GREATEST(count(*), 1) * 100, 1) AS pct
    FROM per_question GROUP BY subject
  )
  SELECT jsonb_object_agg(subject, jsonb_build_object('total', total, 'correct', correct_count, 'pct', pct))
  INTO v_scores FROM per_subject;

  RETURN jsonb_build_object(
    'weakest_chapters', COALESCE(v_weakest, '[]'::jsonb),
    'subject_scores', COALESCE(v_scores, '{}'::jsonb),
    'analyzed_at', now()
  );
END;
$$;

-- ── Data Export (DSGVO Art. 20) ──
CREATE OR REPLACE FUNCTION public.export_user_data()
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
DECLARE v_result jsonb;
BEGIN
  SELECT jsonb_build_object(
    'profile', (SELECT row_to_json(p) FROM public.profiles p WHERE p.id = auth.uid()),
    'quiz_results', COALESCE((SELECT jsonb_agg(row_to_json(q) ORDER BY q.created_at DESC) FROM public.quiz_results q WHERE q.user_id = auth.uid()), '[]'::jsonb),
    'srs_cards', COALESCE((SELECT jsonb_agg(row_to_json(s)) FROM public.srs_cards s WHERE s.user_id = auth.uid()), '[]'::jsonb),
    'simulation_results', COALESCE((SELECT jsonb_agg(row_to_json(sr) ORDER BY sr.created_at DESC) FROM public.simulation_results sr WHERE sr.user_id = auth.uid()), '[]'::jsonb),
    'progress', COALESCE((SELECT jsonb_agg(row_to_json(up)) FROM public.user_progress up WHERE up.user_id = auth.uid()), '[]'::jsonb),
    'streak', (SELECT row_to_json(us) FROM public.user_streaks us WHERE us.user_id = auth.uid()),
    'leaderboard', (SELECT row_to_json(lb) FROM public.leaderboard_snapshots lb WHERE lb.user_id = auth.uid()),
    'exported_at', now()
  ) INTO v_result;
  RETURN v_result;
END;
$$;

-- ── Streak Cron ──
CREATE OR REPLACE FUNCTION public.check_streaks_daily()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE affected integer := 0; r record;
BEGIN
  FOR r IN
    SELECT user_id, current_streak, last_active_date, streak_freezes, frozen_days
    FROM public.user_streaks WHERE current_streak > 0 AND last_active_date < CURRENT_DATE
  LOOP
    IF r.last_active_date = CURRENT_DATE - 1 THEN CONTINUE;
    ELSIF r.last_active_date = CURRENT_DATE - 2 AND r.streak_freezes > 0 THEN
      UPDATE public.user_streaks SET streak_freezes = streak_freezes - 1, frozen_days = frozen_days || (CURRENT_DATE - 1)::date, updated_at = now() WHERE user_id = r.user_id;
    ELSE
      UPDATE public.user_streaks SET current_streak = 0, updated_at = now() WHERE user_id = r.user_id;
      affected := affected + 1;
    END IF;
  END LOOP;
  RETURN affected;
END;
$$;

-- ── SRS Review (SM-2) ──
CREATE OR REPLACE FUNCTION public.sync_srs_review(p_question_id text, p_correct boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_ease numeric; v_interval integer; v_reps integer;
BEGIN
  INSERT INTO public.srs_cards (user_id, question_id) VALUES (auth.uid(), p_question_id) ON CONFLICT (user_id, question_id) DO NOTHING;
  SELECT ease_factor, interval_days, repetitions INTO v_ease, v_interval, v_reps FROM public.srs_cards WHERE user_id = auth.uid() AND question_id = p_question_id;
  IF p_correct THEN
    v_reps := v_reps + 1;
    IF v_reps = 1 THEN v_interval := 1; ELSIF v_reps = 2 THEN v_interval := 6; ELSE v_interval := round(v_interval * v_ease); END IF;
    v_ease := GREATEST(1.3, v_ease + 0.1 - 0.5 * (5 - 4) - 0.08 * (5 - 4) * (5 - 4));
  ELSE
    v_reps := 0; v_interval := 1; v_ease := GREATEST(1.3, v_ease - 0.2);
  END IF;
  UPDATE public.srs_cards SET ease_factor = v_ease, interval_days = v_interval, repetitions = v_reps, next_review = now() + (v_interval || ' days')::interval, last_reviewed = now() WHERE user_id = auth.uid() AND question_id = p_question_id;
END;
$$;
