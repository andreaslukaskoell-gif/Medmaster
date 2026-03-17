-- Referral tracking table
CREATE TABLE IF NOT EXISTS referrals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_id uuid NOT NULL REFERENCES auth.users(id),
  referee_id uuid NOT NULL REFERENCES auth.users(id),
  ref_code text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(referee_id)  -- each user can only be referred once
);

-- Index for fast referrer lookups
CREATE INDEX idx_referrals_referrer ON referrals(referrer_id);
CREATE INDEX idx_referrals_ref_code ON referrals(ref_code);

-- RLS
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Users can see their own referrals (as referrer)
CREATE POLICY "Users can view own referrals" ON referrals
  FOR SELECT USING (auth.uid() = referrer_id);

-- Service role inserts (via edge function or server)
-- For now, allow authenticated users to insert (self-attribution on signup)
CREATE POLICY "Authenticated users can insert referrals" ON referrals
  FOR INSERT WITH CHECK (auth.uid() = referee_id);

-- Function to get referral count for a user
CREATE OR REPLACE FUNCTION get_referral_count(user_uuid uuid)
RETURNS integer
LANGUAGE sql
STABLE
AS $$
  SELECT COUNT(*)::integer FROM referrals WHERE referrer_id = user_uuid;
$$;

-- Function to get referral leaderboard
CREATE OR REPLACE FUNCTION referral_leaderboard(lim integer DEFAULT 10)
RETURNS TABLE(referrer_id uuid, display_name text, referral_count bigint)
LANGUAGE sql
STABLE
AS $$
  SELECT r.referrer_id, r.referrer_id::text as display_name, COUNT(*) as referral_count
  FROM referrals r
  GROUP BY r.referrer_id
  ORDER BY referral_count DESC
  LIMIT lim;
$$;
