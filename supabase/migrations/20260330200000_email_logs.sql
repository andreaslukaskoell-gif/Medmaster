-- Email sending log to prevent duplicate sends
CREATE TABLE IF NOT EXISTS email_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  template_id TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_logs_user_template ON email_logs(user_id, template_id);
CREATE INDEX idx_email_logs_sent_at ON email_logs(sent_at);

-- RLS: only service role can access (Edge Functions use service role key)
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

-- No user-facing policy needed — only service role writes/reads
