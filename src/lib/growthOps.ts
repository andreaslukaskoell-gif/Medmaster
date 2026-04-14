/**
 * Growth Operations — lightweight experiment and campaign tracking.
 * Used by the marketing team to log experiments, track winners, and plan campaigns.
 * Data persists in localStorage for simplicity.
 */

// ── Types ──

export type ExperimentStatus = "planned" | "running" | "paused" | "completed";
export type ExperimentResult = "winner" | "loser" | "inconclusive" | "pending";

export type FunnelStage =
  | "awareness" // top of funnel — social, SEO, ads
  | "interest" // landing page visit, demo interaction
  | "signup_click" // clicked signup CTA
  | "registration" // completed signup
  | "activation" // first meaningful learning action
  | "retention" // returned for 2nd+ session
  | "referral" // shared or referred someone
  | "revenue"; // paid conversion

export type GrowthExperiment = {
  id: string;
  name: string;
  hypothesis: string;
  funnelStage: FunnelStage;
  status: ExperimentStatus;
  result: ExperimentResult;
  startDate: string; // ISO date
  endDate?: string;
  metric: string; // what we measure (e.g., "signup_rate", "activation_rate")
  baselineValue?: number; // metric value before experiment
  resultValue?: number; // metric value after experiment
  notes: string;
  channel?: string; // e.g., "landing_page", "instagram", "email", "seo"
};

export type ContentCampaign = {
  id: string;
  title: string;
  type: "social_post" | "blog" | "email" | "seo_page" | "ad";
  funnelStage: FunnelStage;
  status: "draft" | "scheduled" | "published" | "archived";
  publishDate?: string;
  channel: string;
  topic: string; // MedAT topic (e.g., "BMS Biologie", "KFF Zahlenfolgen")
  hook?: string; // content hook / headline
  cta?: string; // call-to-action text
  ctaLink?: string; // where CTA points
  utmCampaign?: string; // UTM campaign tag for tracking
  performanceNotes?: string;
};

// ── Storage ──

const EXPERIMENTS_KEY = "mm_growth_experiments";
const CAMPAIGNS_KEY = "mm_growth_campaigns";

export function getExperiments(): GrowthExperiment[] {
  try {
    const raw = localStorage.getItem(EXPERIMENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExperiments(experiments: GrowthExperiment[]): void {
  localStorage.setItem(EXPERIMENTS_KEY, JSON.stringify(experiments));
}

export function addExperiment(experiment: Omit<GrowthExperiment, "id">): GrowthExperiment {
  const experiments = getExperiments();
  const newExp: GrowthExperiment = {
    ...experiment,
    id: `exp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
  };
  experiments.push(newExp);
  saveExperiments(experiments);
  return newExp;
}

export function updateExperiment(id: string, updates: Partial<GrowthExperiment>): void {
  const experiments = getExperiments();
  const idx = experiments.findIndex((e) => e.id === id);
  if (idx !== -1) {
    experiments[idx] = { ...experiments[idx], ...updates };
    saveExperiments(experiments);
  }
}

export function getCampaigns(): ContentCampaign[] {
  try {
    const raw = localStorage.getItem(CAMPAIGNS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCampaigns(campaigns: ContentCampaign[]): void {
  localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(campaigns));
}

export function addCampaign(campaign: Omit<ContentCampaign, "id">): ContentCampaign {
  const campaigns = getCampaigns();
  const newCamp: ContentCampaign = {
    ...campaign,
    id: `camp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
  };
  campaigns.push(newCamp);
  saveCampaigns(campaigns);
  return newCamp;
}

// ── Funnel Definitions ──

/** The registration funnel steps with expected events. */
export const REGISTRATION_FUNNEL = [
  { stage: "awareness" as const, event: "page_view", description: "Visitor lands on site" },
  { stage: "interest" as const, event: "cta_click", description: "Interacts with content or CTA" },
  { stage: "signup_click" as const, event: "signup_click", description: "Clicks signup button" },
  { stage: "registration" as const, event: "signup", description: "Completes registration" },
  {
    stage: "activation" as const,
    event: "first_question_answered",
    description: "Answers first question",
  },
  { stage: "retention" as const, event: "return_visit", description: "Returns for 2nd+ session" },
  { stage: "referral" as const, event: "referral_share", description: "Shares referral link" },
  { stage: "revenue" as const, event: "checkout_start", description: "Starts payment" },
] as const;

/** Seed data for initial experiments to track. */
export const SEED_EXPERIMENTS: Omit<GrowthExperiment, "id">[] = [
  {
    name: "Outcome-first hero headline",
    hypothesis:
      "Changing hero from feature-focused to outcome-focused ('Bestehe den MedAT 2026') increases signup clicks by 20%",
    funnelStage: "interest",
    status: "running",
    result: "pending",
    startDate: "2026-03-15",
    metric: "signup_click_rate",
    notes: "Baseline: measure current signup_click / page_view ratio for 7 days",
    channel: "landing_page",
  },
  {
    name: "Urgency banner above fold",
    hypothesis:
      "Showing countdown days prominently above hero increases urgency and signup rate by 15%",
    funnelStage: "signup_click",
    status: "running",
    result: "pending",
    startDate: "2026-03-15",
    metric: "signup_click_rate",
    notes: "Countdown shows 'Noch X Tage gratis' before hero section",
    channel: "landing_page",
  },
  {
    name: "Social proof testimonials",
    hypothesis:
      "Adding 3 testimonials before FAQ reduces bounce and increases scroll-to-pricing by 10%",
    funnelStage: "interest",
    status: "running",
    result: "pending",
    startDate: "2026-03-15",
    metric: "pricing_view_rate",
    notes: "3 testimonials from MedAT candidates (Anna K., Maximilian R., Sophie L.)",
    channel: "landing_page",
  },
];
