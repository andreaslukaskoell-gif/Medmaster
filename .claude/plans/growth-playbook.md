# MedMaster Growth Playbook

## Registration Funnel

```
Visitor → Interest → Signup Click → Registration → Activation → Retention → Referral → Revenue
```

### Tracked Events (Supabase analytics_events)

| Funnel Stage | Event Name | Trigger |
|---|---|---|
| Awareness | `page_view` | Auto on route change |
| Interest | `cta_click` | Any CTA interaction |
| Signup Click | `signup_click` | Signup button clicked |
| Registration | `signup` / `login` | Auth completed |
| Onboarding | `onboarding_complete` | Onboarding finished |
| Activation | `first_question_answered` | First quiz question |
| Learning | `quiz_complete` | Quiz/trainer finished |
| Content | `chapter_open` | BMS chapter opened |
| Pricing | `pricing_view` | Pricing page viewed |
| Revenue | `checkout_start` | Stripe checkout initiated |
| Referral | `referral_visit` | ?ref= param captured |
| UTM | `utm_visit` | UTM params captured |

### Querying the Funnel (Supabase SQL Editor)

```sql
SELECT * FROM analytics_funnel(30);  -- Last 30 days
SELECT * FROM analytics_daily_stats(7);  -- Daily stats
SELECT * FROM analytics_top_pages(30);  -- Top pages
SELECT * FROM analytics_top_events(30);  -- Top events
```

## Content Engine

### Repeatable Content Types

| Type | Frequency | Channel | Funnel Stage |
|---|---|---|---|
| Quiz Reel | Daily 14:00 | Instagram | Awareness |
| BMS Tip | 2x/week | Instagram Story | Interest |
| Discord Q&A | Daily | Discord | Retention |
| Sample Question | Weekly | Landing page | Interest |
| Explainer Reel | Weekly | Instagram | Awareness |

### Content Calendar Structure

Content is planned in `marketing/weekly/` with date-based folders.
Reels are automated via `.github/workflows/post-reels.yml`.

### UTM Convention

Format: `?utm_source={source}&utm_medium={medium}&utm_campaign={campaign}`

| Source | Medium | Example Campaign |
|---|---|---|
| instagram | social | `ig_quiz_daily` |
| discord | community | `discord_weekly_tip` |
| google | organic | (auto-captured) |
| email | newsletter | `welcome_sequence` |
| referral | word_of_mouth | `ref_{userId}` |

## Experiment Framework

Experiments are tracked in `src/lib/growthOps.ts` using localStorage.

### Running an Experiment

1. Define hypothesis (what you expect to change)
2. Set baseline metric value
3. Implement the change
4. Run for 7-14 days minimum
5. Compare result vs baseline
6. Mark as winner/loser/inconclusive

### Current Experiments (March 2026)

1. **Outcome-first hero** — "Bestehe den MedAT 2026" vs old feature-focused headline
2. **Urgency banner** — Countdown above fold vs countdown only in pricing
3. **Social proof** — Testimonials section added before FAQ

## Lifecycle Automation (Prepared, Not Yet Active)

### Email Sequences (Requires SendGrid/Brevo setup)

| Trigger | Delay | Email | Goal |
|---|---|---|---|
| Signup | Immediate | Welcome + first steps | Activation |
| Signup | +2 days | BMS study tips | Engagement |
| Signup | +7 days | Progress check-in | Retention |
| Inactive 7d | Immediate | "Dein Lernplan wartet" | Reactivation |
| Inactive 30d | Immediate | "Noch X Tage bis zum MedAT" | Win-back |
| Pre-paywall | -7 days | "Gratis-Zugang endet bald" | Conversion |
| Post-paywall | Immediate | "Sichere dir lebenslangen Zugang" | Revenue |

### Setup Steps (Manual)

1. Create SendGrid or Brevo account
2. Verify `support@medmaster.at` as sender
3. Set `VITE_EMAIL_API_KEY` in `.env.local`
4. Create email templates (welcome, tips, reactivation)
5. Wire Supabase Edge Functions for lifecycle triggers

## Referral System

### Current State
- Referral links: `medmaster.at?ref={userId.slice(0,8)}`
- Share buttons: WhatsApp, Telegram, Twitter, Copy
- Tracking: `referral_visit` event in Supabase analytics
- Attribution: `mm_ref` stored in sessionStorage

### Missing (TODO)
- [ ] Referrals table in Supabase (referrer_id, referee_id, created_at)
- [ ] Attribution on signup (link ?ref= to new user)
- [ ] Referral rewards (credit or feature unlock)
- [ ] Referral dashboard in user profile

## Key Metrics Dashboard

Query these in Supabase SQL Editor:

```sql
-- Signup conversion rate (last 30 days)
WITH funnel AS (SELECT * FROM analytics_funnel(30))
SELECT
  (SELECT visitors FROM funnel WHERE step = 'signup')::float /
  NULLIF((SELECT visitors FROM funnel WHERE step = 'page_view'), 0) * 100
  AS signup_rate_pct;

-- Daily signups
SELECT DATE(created_at) as day, COUNT(*)
FROM auth.users
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY 1 ORDER BY 1;

-- Top referral sources
SELECT properties->>'ref' as referrer, COUNT(*)
FROM analytics_events
WHERE event_name = 'referral_visit'
GROUP BY 1 ORDER BY 2 DESC LIMIT 20;

-- Activation rate (signup → first question)
SELECT
  COUNT(DISTINCT CASE WHEN event_name = 'signup' THEN user_id END) as signups,
  COUNT(DISTINCT CASE WHEN event_name = 'quiz_complete' THEN user_id END) as activated
FROM analytics_events
WHERE created_at > NOW() - INTERVAL '30 days';
```

## Growth Bottleneck Priority

1. Landing page conversion (hero, urgency, social proof) — IN PROGRESS
2. Signup friction (Google OAuth primary, magic link secondary) — DONE
3. Registration funnel tracking — DONE
4. Activation (first learning action) — TRACKED, needs onboarding improvement
5. Lifecycle re-engagement — PREPARED, needs email provider
6. Content engine — AUTOMATED (daily reels + discord)
7. Experiment tracking — BUILT (growthOps.ts)
8. Referral tracking — BASIC (needs rewards + attribution table)
