-- Active users deduplicated by user_id, with email from auth.users
-- Shows unique logged-in users active in the last 30 minutes

CREATE OR REPLACE FUNCTION analytics_active_users_by_email()
RETURNS TABLE(
  user_id uuid,
  email text,
  current_page text,
  page_since timestamptz,
  pages_viewed bigint
)
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  WITH active_events AS (
    SELECT
      ae.user_id,
      ae.page_path,
      ae.created_at,
      ROW_NUMBER() OVER (PARTITION BY ae.user_id ORDER BY ae.created_at DESC) AS rn,
      COUNT(*) OVER (PARTITION BY ae.user_id) AS total_pages
    FROM analytics_events ae
    WHERE ae.event_name = 'page_view'
      AND ae.user_id IS NOT NULL
      AND ae.created_at >= (now() - interval '30 minutes')
      AND NOT is_internal_traffic(ae.user_agent, ae.properties)
  )
  SELECT
    a.user_id,
    COALESCE(u.email, 'Anonym') AS email,
    a.page_path AS current_page,
    a.created_at AS page_since,
    a.total_pages AS pages_viewed
  FROM active_events a
  LEFT JOIN auth.users u ON u.id = a.user_id
  WHERE a.rn = 1
  ORDER BY a.created_at DESC;
$$;
