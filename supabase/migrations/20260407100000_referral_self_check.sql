-- Prevent self-referrals at database level
ALTER TABLE referrals ADD CONSTRAINT no_self_referral CHECK (referrer_id != referee_id);
