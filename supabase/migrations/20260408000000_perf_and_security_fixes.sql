-- Performance: Add missing indexes for foreign keys (reduces Disk IO)
CREATE INDEX IF NOT EXISTS idx_admin_email_log_sent_by ON admin_email_log (sent_by);
CREATE INDEX IF NOT EXISTS idx_admin_email_log_user_id ON admin_email_log (user_id);
CREATE INDEX IF NOT EXISTS idx_bms_subchapters_chapter_id ON bms_subchapters (chapter_id);
CREATE INDEX IF NOT EXISTS idx_kff_results_user_id ON kff_results (user_id);
CREATE INDEX IF NOT EXISTS idx_leads_user_id ON leads (user_id);
CREATE INDEX IF NOT EXISTS idx_pending_upgrades_resolved_user_id ON pending_upgrades (resolved_user_id);
CREATE INDEX IF NOT EXISTS idx_question_feedback_user_id ON question_feedback (user_id);

-- Security: Fix mutable search_path on call_edge_function
CREATE OR REPLACE FUNCTION public.call_edge_function(function_name text, payload jsonb DEFAULT '{}'::jsonb)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  secret_value text;
  request_id bigint;
BEGIN
  SELECT decrypted_secret INTO secret_value
  FROM vault.decrypted_secrets
  WHERE name = 'service_role_key'
  LIMIT 1;

  IF secret_value IS NULL THEN
    RAISE EXCEPTION 'service_role_key not found in vault';
  END IF;

  SELECT net.http_post(
    url := 'https://nnelpgrzxwsltrttuiuw.supabase.co/functions/v1/' || function_name,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || secret_value
    ),
    body := payload
  ) INTO request_id;

  RETURN request_id;
END;
$$;

-- Security: Fix permissive tasks DELETE policy
DROP POLICY IF EXISTS "tasks_delete" ON tasks;
CREATE POLICY "tasks_delete" ON tasks FOR DELETE USING (auth.uid() IS NOT NULL);
