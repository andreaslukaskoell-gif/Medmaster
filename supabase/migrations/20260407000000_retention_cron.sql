-- Retention Cron: daily automated emails for D1 reminders, streak-at-risk, re-engagement
-- Runs daily at 09:00 Vienna time (07:00 UTC) via pg_cron + pg_net + vault

-- ── Step 1: Store service role key in vault (one-time, replace placeholder) ──
-- Run this manually in SQL Editor if not already set:
--   SELECT vault.create_secret('SERVICE_ROLE_KEY_VALUE_HERE', 'service_role_key', 'Service role key for Edge Function calls');

-- ── Step 2: Helper function to call Edge Functions with auth ──
CREATE OR REPLACE FUNCTION public.call_edge_function(function_name text, payload jsonb DEFAULT '{}'::jsonb)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  secret_value text;
  request_id bigint;
BEGIN
  -- Read service role key from vault
  SELECT decrypted_secret INTO secret_value
  FROM vault.decrypted_secrets
  WHERE name = 'service_role_key'
  LIMIT 1;

  IF secret_value IS NULL THEN
    RAISE EXCEPTION 'service_role_key not found in vault. Run: SELECT vault.create_secret(''your-key'', ''service_role_key'');';
  END IF;

  -- Call Edge Function via pg_net
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

-- ── Step 3: Schedule daily retention emails at 07:00 UTC (09:00 CET) ──
SELECT cron.schedule(
  'retention-emails-daily',
  '0 7 * * *',
  $$SELECT public.call_edge_function('retention-cron');$$
);

-- ── Step 4: Index for fast email_logs lookups ──
CREATE INDEX IF NOT EXISTS idx_email_logs_user_template_sent
  ON email_logs (user_id, template_id, sent_at DESC);
