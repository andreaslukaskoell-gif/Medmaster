-- Per-user activity: today vs last 7 days (for admin dashboard)
-- Owner-only: same check as admin_dashboard_stats
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
LANGUAGE plpgsql STABLE SECURITY DEFINER
AS $$
BEGIN
  -- Only allow the owner
  IF auth.uid() IS NULL OR auth.uid() != 'ea304abb-6b1c-4b50-b870-0404f92306ec' THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  RETURN QUERY
  WITH today AS (
    SELECT (now() AT TIME ZONE 'Europe/Vienna')::date AS d
  ),
  quiz_agg AS (
    SELECT
      q.user_id,
      COALESCE(SUM(q.total) FILTER (
        WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)
      ), 0) AS questions_today,
      COALESCE(SUM(q.duration_seconds) FILTER (
        WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)
      ), 0) / 60 AS minutes_today,
      COALESCE(SUM(q.total) FILTER (
        WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6
      ), 0) AS questions_7d,
      COALESCE(SUM(q.duration_seconds) FILTER (
        WHERE (q.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6
      ), 0) / 60 AS minutes_7d,
      MAX((q.created_at AT TIME ZONE 'Europe/Vienna')::date) AS last_active
    FROM quiz_results q
    WHERE q.created_at >= now() - interval '7 days'
    GROUP BY q.user_id
  ),
  chapter_agg AS (
    SELECT
      e.user_id,
      COUNT(DISTINCT e.page_path) FILTER (
        WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date = (SELECT d FROM today)
      ) AS chapters_today,
      COUNT(DISTINCT e.page_path) FILTER (
        WHERE (e.created_at AT TIME ZONE 'Europe/Vienna')::date >= (SELECT d FROM today) - 6
      ) AS chapters_7d
    FROM analytics_events e
    WHERE e.event_name = 'page_view'
      AND e.page_path LIKE '/bms/%'
      AND e.user_id IS NOT NULL
      AND e.created_at >= now() - interval '7 days'
    GROUP BY e.user_id
  )
  SELECT
    COALESCE(qa.user_id, ca.user_id) AS user_id,
    u.email,
    p.subscription_tier,
    COALESCE(qa.questions_today, 0),
    COALESCE(qa.minutes_today, 0),
    COALESCE(qa.questions_7d, 0),
    COALESCE(qa.minutes_7d, 0),
    COALESCE(ca.chapters_today, 0),
    COALESCE(ca.chapters_7d, 0),
    qa.last_active
  FROM quiz_agg qa
  FULL OUTER JOIN chapter_agg ca ON ca.user_id = qa.user_id
  JOIN auth.users u ON u.id = COALESCE(qa.user_id, ca.user_id)
  LEFT JOIN profiles p ON p.id = u.id
  WHERE COALESCE(qa.questions_7d, 0) + COALESCE(ca.chapters_7d, 0) > 0
  ORDER BY COALESCE(qa.questions_today, 0) + COALESCE(ca.chapters_today, 0) DESC,
           COALESCE(qa.questions_7d, 0) DESC
  LIMIT lim;
END;
$$;
