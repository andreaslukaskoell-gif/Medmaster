-- =============================================================================
-- Fix 1: Drop overly permissive profile RLS policy (DSGVO-kritisch)
-- The original "Profiles are viewable by everyone" USING (true) from
-- 001_bms_schema.sql was never dropped when the restrictive policy was added.
-- Supabase OR-combines permissive policies, so the open one always wins.
-- =============================================================================
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON profiles;

-- Ensure the restrictive policy exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles' AND policyname = 'Users can read own profile'
  ) THEN
    CREATE POLICY "Users can read own profile" ON profiles
      FOR SELECT USING (auth.uid() = id);
  END IF;
END $$;

-- =============================================================================
-- Fix 2: IDOR in get_weakness_analysis — ignore p_user_id, use auth.uid()
-- Previously any authenticated user could pass any UUID and read other users'
-- learning analytics.
-- =============================================================================
CREATE OR REPLACE FUNCTION public.get_weakness_analysis(p_user_id uuid DEFAULT NULL)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
DECLARE
  result jsonb;
  actual_uid uuid;
BEGIN
  actual_uid := auth.uid();
  IF actual_uid IS NULL THEN
    RETURN NULL;
  END IF;

  SELECT jsonb_build_object(
    'weakest_chapters', (
      SELECT jsonb_agg(row_to_json(c.*) ORDER BY c.pct ASC)
      FROM (
        SELECT subject, chapter_id, total, correct, pct
        FROM (
          SELECT
            pq.subject,
            pq.chapter_id,
            count(*) AS total,
            count(*) FILTER (WHERE pq.correct) AS correct,
            round(count(*) FILTER (WHERE pq.correct)::numeric / GREATEST(count(*), 1) * 100, 1) AS pct
          FROM (
            SELECT
              (a.val->>'questionId') AS question_id,
              qr.subject,
              qr.chapter_id,
              (a.val->>'correct')::boolean AS correct
            FROM public.quiz_results qr,
                 LATERAL jsonb_array_elements(qr.answers) AS a(val)
            WHERE qr.user_id = actual_uid
              AND qr.quiz_type = 'bms'
              AND qr.created_at > now() - interval '30 days'
              AND a.val->>'questionId' IS NOT NULL
          ) pq
          WHERE pq.chapter_id IS NOT NULL
          GROUP BY pq.subject, pq.chapter_id
          HAVING count(*) >= 3
        ) stats
        WHERE pct < 70
        LIMIT 10
      ) c
    ),
    'subject_scores', (
      SELECT jsonb_object_agg(ss.subject, jsonb_build_object(
        'total', ss.total,
        'correct', ss.correct,
        'pct', ss.pct
      ))
      FROM (
        SELECT
          pq2.subject,
          sum(cnt) AS total,
          sum(cor) AS correct,
          round(sum(cor)::numeric / GREATEST(sum(cnt), 1) * 100, 1) AS pct
        FROM (
          SELECT
            qr.subject,
            qr.chapter_id,
            count(*) AS cnt,
            count(*) FILTER (WHERE (a.val->>'correct')::boolean) AS cor
          FROM public.quiz_results qr,
               LATERAL jsonb_array_elements(qr.answers) AS a(val)
          WHERE qr.user_id = actual_uid
            AND qr.quiz_type = 'bms'
            AND qr.created_at > now() - interval '30 days'
            AND a.val->>'questionId' IS NOT NULL
            AND qr.chapter_id IS NOT NULL
          GROUP BY qr.subject, qr.chapter_id
          HAVING count(*) >= 3
        ) pq2
        GROUP BY pq2.subject
      ) ss
    ),
    'analyzed_at', now()
  ) INTO result;

  RETURN result;
END;
$$;
