DROP FUNCTION IF EXISTS admin_user_activity(int);

CREATE OR REPLACE FUNCTION admin_user_activity(lim int DEFAULT 50)
RETURNS TABLE(
  user_id uuid,
  email text,
  tier text,
  questions_today bigint,
  minutes_today bigint,
  questions_7d bigint,
  minutes_7d bigint,
  chapters_today bigint,
  chapters_7d bigint,
  last_active date
)
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  WITH today AS (
    SELECT (now() AT TIME ZONE 'Europe/Vienna')::date AS d
  ),
  quiz_agg AS (
    SELECT
      q.user_id,
      COALESCE(SUM(q.total) FILTER (WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)), 0) AS questions_today,
      COALESCE(SUM(q.total) FILTER (WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6), 0) AS questions_7d,
      MAX((q.created_at AT TIME ZONE 'Europe/Vienna')::date) AS last_active
    FROM quiz_results q
    WHERE q.created_at >= now() - interval '7 days'
    GROUP BY q.user_id
  ),
  -- Active minutes from session_end events (session_duration_seconds in properties)
  session_agg AS (
    SELECT
      e.user_id,
      COALESCE(SUM((e.properties->>'session_duration_seconds')::numeric) FILTER (
        WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)
      ), 0) / 60 AS minutes_today,
      COALESCE(SUM((e.properties->>'session_duration_seconds')::numeric) FILTER (
        WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6
      ), 0) / 60 AS minutes_7d
    FROM analytics_events e
    WHERE e.event_name = 'session_end'
      AND e.user_id IS NOT NULL
      AND e.created_at >= now() - interval '7 days'
      AND (e.properties->>'session_duration_seconds')::numeric BETWEEN 3 AND 7200
    GROUP BY e.user_id
  ),
  chapter_agg AS (
    SELECT
      e.user_id,
      COUNT(DISTINCT e.page_path) FILTER (WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)) AS chapters_today,
      COUNT(DISTINCT e.page_path) FILTER (WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6) AS chapters_7d
    FROM analytics_events e
    WHERE e.event_name = 'page_view'
      AND e.page_path LIKE '/bms/%'
      AND e.user_id IS NOT NULL
      AND e.created_at >= now() - interval '7 days'
    GROUP BY e.user_id
  ),
  combined AS (
    SELECT COALESCE(qa.user_id, ca.user_id, sa.user_id) AS uid
    FROM quiz_agg qa
    FULL OUTER JOIN chapter_agg ca ON ca.user_id = qa.user_id
    FULL OUTER JOIN session_agg sa ON sa.user_id = COALESCE(qa.user_id, ca.user_id)
  )
  SELECT
    c.uid,
    u.email,
    p.subscription_tier,
    COALESCE(qa.questions_today, 0),
    COALESCE(sa.minutes_today, 0)::bigint,
    COALESCE(qa.questions_7d, 0),
    COALESCE(sa.minutes_7d, 0)::bigint,
    COALESCE(ca.chapters_today, 0),
    COALESCE(ca.chapters_7d, 0),
    qa.last_active
  FROM (SELECT DISTINCT uid FROM combined) c
  JOIN auth.users u ON u.id = c.uid
  LEFT JOIN profiles p ON p.id = c.uid
  LEFT JOIN quiz_agg qa ON qa.user_id = c.uid
  LEFT JOIN session_agg sa ON sa.user_id = c.uid
  LEFT JOIN chapter_agg ca ON ca.user_id = c.uid
  WHERE COALESCE(qa.questions_7d, 0) + COALESCE(ca.chapters_7d, 0) > 0
  ORDER BY COALESCE(qa.questions_today, 0) + COALESCE(ca.chapters_today, 0) DESC, COALESCE(qa.questions_7d, 0) DESC
  LIMIT lim;
$$;

NOTIFY pgrst, 'reload schema';
