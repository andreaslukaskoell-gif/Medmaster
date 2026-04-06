#!/usr/bin/env node
/**
 * Performance-Learning Instagram Reel Poster
 *
 * Posts exactly 1 reel/day. Before each post, fetches real performance data
 * from Instagram Insights API, scores all past reels, identifies winner
 * patterns, and selects the next reel to maximize engagement.
 *
 * No static weights. No blind rotation. Every decision is data-driven.
 *
 * Usage:
 *   node scripts/post-reel-smart.mjs             # Analyze + select + post
 *   node scripts/post-reel-smart.mjs --dry       # Dry run (analyze only)
 *   node scripts/post-reel-smart.mjs --comp X    # Force specific composition
 *   node scripts/post-reel-smart.mjs --report    # Full performance report
 *   node scripts/post-reel-smart.mjs --stats     # Post history
 *   node scripts/post-reel-smart.mjs --digest    # Weekly digest with winner/loser analysis
 *   node scripts/post-reel-smart.mjs --ci        # CI mode (renders on-demand, outputs to GITHUB_OUTPUT)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, copyFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const HISTORY_FILE = resolve(ROOT, ".reel-post-history.json");
const PERF_CACHE_FILE = resolve(ROOT, ".reel-performance-cache.json");

const IG_USER_ID = "17841446757059213";
const FB_PAGE_ID = "990798194122764";
const API = "https://graph.facebook.com/v21.0";
const MAX_RETRIES = 3;

const COMP_TO_FILE = {
  QuizChallenge: "quiz-challenge",
  TippDesTages: "tipp-des-tages",
  ZahlenfolgeChallenge: "zahlenfolge-challenge",
  WortRaetsel: "wort-raetsel",
  StatsUrgency: "stats-urgency",
  RichtigOderFalsch: "richtig-oder-falsch",
  ImplikationenChallenge: "implikationen-challenge",
  FigurenChallenge: "figuren-challenge",
  BMSExplainerVoiceover: "bms-explainer-voiceover",
  CheatSheet: "cheat-sheet",
  MistakeReveal: "mistake-reveal",
  SpeedRound: "speed-round",
};

// Max posts per day
const POSTS_PER_DAY = 2;

// ── Performance Signal Weights ──────────────────────────────
// These define HOW MUCH each metric matters for scoring.
// Saves/shares signal real value (user wants to keep/spread it).
// Comments signal engagement. Likes are passive.
const SIGNAL_WEIGHTS = {
  saves: 5,           // Strongest signal — user bookmarks for later
  shares: 4,          // User actively spreads it
  comments: 3,        // Active engagement
  profile_clicks: 3,  // Intent to learn more about us
  website_clicks: 4,  // Direct conversion signal
  reach: 0.01,        // Volume baseline (low weight per unit)
  likes: 0.5,         // Passive, easy action
  plays: 0.005,       // Raw views (low weight per unit)
};

// ── History & Cache ─────────────────────────────────────────

function loadHistory() {
  if (!existsSync(HISTORY_FILE)) return [];
  try { return JSON.parse(readFileSync(HISTORY_FILE, "utf-8")); }
  catch { return []; }
}

function saveHistory(history) {
  writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

function addToHistory(entry) {
  const history = loadHistory();
  history.push(entry);
  const cutoff = Date.now() - 180 * 24 * 60 * 60 * 1000; // 180 days
  const trimmed = history.filter(h => new Date(h.timestamp).getTime() > cutoff);
  saveHistory(trimmed);
}

function loadPerfCache() {
  if (!existsSync(PERF_CACHE_FILE)) return { posts: {}, lastFetch: null };
  try { return JSON.parse(readFileSync(PERF_CACHE_FILE, "utf-8")); }
  catch { return { posts: {}, lastFetch: null }; }
}

function savePerfCache(cache) {
  writeFileSync(PERF_CACHE_FILE, JSON.stringify(cache, null, 2));
}

// ── API Helpers ─────────────────────────────────────────────

async function getPageToken() {
  const userToken = process.env.IG_PAGE_TOKEN;
  if (!userToken) return null;
  try {
    const res = await fetch(`${API}/${FB_PAGE_ID}?fields=access_token&access_token=${userToken}`);
    const json = await res.json();
    if (json.access_token) return json.access_token;
  } catch {}
  return userToken;
}

async function fetchWithRetry(url, options = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      return res;
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(`  Retry ${attempt}/${retries}: ${err.message}`);
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

// ── Performance Data Fetching ───────────────────────────────

function inferComposition(caption) {
  if (!caption) return "Unknown";
  const c = caption.toLowerCase();
  if (c.includes("50 sekunden") || c.includes("unter einer minute") || c.includes("🎓")) return "BMSExplainerVoiceover";
  if (c.includes("richtig oder falsch")) return "RichtigOderFalsch";
  if (c.includes("zahlenfolge") || c.includes("🔢")) return "ZahlenfolgeChallenge";
  if (c.includes("welches wort") || c.includes("wortflüssigkeit") || c.includes("🔤")) return "WortRaetsel";
  if (c.includes("welche figur") || c.includes("figuren") || c.includes("🧩")) return "FigurenChallenge";
  if (c.includes("schluss") || c.includes("implikation")) return "ImplikationenChallenge";
  if (c.includes("wusstest du") || c.includes("💡")) return "TippDesTages";
  if (c.includes("87%") || c.includes("16.000") || c.includes("📊")) return "StatsUrgency";
  if (c.includes("cheat sheet") || c.includes("spickzettel") || c.includes("5 fakten") || c.includes("📋")) return "CheatSheet";
  if (c.includes("fehler") || c.includes("❌→✅") || c.includes("90% machen")) return "MistakeReveal";
  if (c.includes("speed round") || c.includes("30 sekunden") || c.includes("⚡")) return "SpeedRound";
  if (c.includes("medat-frage") || c.includes("bms-frage") || c.includes("a–e")) return "QuizChallenge";
  return "QuizChallenge";
}

async function fetchAllPosts(token) {
  const posts = [];
  let url = `${API}/${IG_USER_ID}/media?fields=id,timestamp,media_type,like_count,comments_count,caption&limit=50&access_token=${token}`;

  while (url) {
    const res = await fetchWithRetry(url);
    const json = await res.json();
    if (json.data) posts.push(...json.data);
    url = json.paging?.next || null;
  }
  return posts;
}

async function fetchReelInsights(mediaId, token) {
  // IG Reels insights — try two metric sets (API versions differ on naming)
  const metricSets = [
    // v21+ IG Reels metrics
    "plays,reach,saved,shares,total_interactions,ig_reels_avg_watch_time,ig_reels_video_view_total_time",
    // Fallback: older/simpler metric names
    "reach,saved,shares,total_interactions",
  ];

  for (const metrics of metricSets) {
    try {
      const res = await fetchWithRetry(
        `${API}/${mediaId}/insights?metric=${metrics}&access_token=${token}`
      );
      const json = await res.json();
      if (json.error) {
        // Log the actual error for debugging (only in non-CI or first attempt)
        if (metrics === metricSets[0]) {
          console.log(`    Insights API error for ${mediaId}: ${json.error.message} (code ${json.error.code})`);
        }
        continue; // Try next metric set
      }
      const result = {};
      for (const item of json.data || []) {
        result[item.name] = item.values?.[0]?.value ?? 0;
      }
      return result;
    } catch (err) {
      console.log(`    Insights fetch error for ${mediaId}: ${err.message}`);
    }
  }
  return null;
}

async function refreshPerformanceData(token) {
  const cache = loadPerfCache();
  const now = Date.now();

  // Don't fetch more than once per hour
  if (cache.lastFetch && now - new Date(cache.lastFetch).getTime() < 3600000) {
    console.log("  Using cached performance data (< 1h old)");
    return cache;
  }

  console.log("  Fetching Instagram performance data...");
  const posts = await fetchAllPosts(token);
  const reels = posts.filter(p => p.media_type === "VIDEO");

  let fetched = 0;
  let skipped = 0;

  for (const reel of reels) {
    const postAge = now - new Date(reel.timestamp).getTime();
    const existingEntry = cache.posts[reel.id];

    // Skip if: already cached AND post is > 7 days old (metrics stabilized)
    // Always re-fetch posts < 7 days old (still getting views)
    if (existingEntry && postAge > 7 * 24 * 60 * 60 * 1000) {
      skipped++;
      continue;
    }

    const insights = await fetchReelInsights(reel.id, token);

    cache.posts[reel.id] = {
      id: reel.id,
      timestamp: reel.timestamp,
      composition: inferComposition(reel.caption),
      caption: (reel.caption || "").slice(0, 120),
      likes: reel.like_count || 0,
      comments: reel.comments_count || 0,
      saves: insights?.saved ?? 0,
      shares: insights?.shares ?? 0,
      plays: insights?.plays ?? 0,
      reach: insights?.reach ?? 0,
      avg_watch_time: insights?.ig_reels_avg_watch_time ?? 0,
      total_watch_time: insights?.ig_reels_video_view_total_time ?? 0,
      profile_clicks: 0,  // Not available per-post, only account-level
      website_clicks: 0,  // Not available per-post, only account-level
      lastUpdated: new Date().toISOString(),
    };
    fetched++;

    // Rate limit: 200 calls/hour max, be conservative
    if (fetched % 10 === 0) await new Promise(r => setTimeout(r, 1000));
  }

  cache.lastFetch = new Date().toISOString();
  savePerfCache(cache);
  console.log(`  Fetched insights for ${fetched} reels (${skipped} cached)`);
  return cache;
}

// ── Performance Scoring ─────────────────────────────────────

function scorePost(post) {
  // Weighted score from actual performance signals
  return (
    (post.saves || 0) * SIGNAL_WEIGHTS.saves +
    (post.shares || 0) * SIGNAL_WEIGHTS.shares +
    (post.comments || 0) * SIGNAL_WEIGHTS.comments +
    (post.profile_clicks || 0) * SIGNAL_WEIGHTS.profile_clicks +
    (post.website_clicks || 0) * SIGNAL_WEIGHTS.website_clicks +
    (post.reach || 0) * SIGNAL_WEIGHTS.reach +
    (post.likes || 0) * SIGNAL_WEIGHTS.likes +
    (post.plays || 0) * SIGNAL_WEIGHTS.plays
  );
}

function analyzePerformance(cache) {
  const posts = Object.values(cache.posts);
  if (posts.length === 0) return { byComposition: {}, overall: { avg: 0, median: 0 }, rankings: [] };

  // Score each post
  const scored = posts.map(p => ({ ...p, score: scorePost(p) }));

  // Group by composition type
  const byComposition = {};
  for (const p of scored) {
    if (!byComposition[p.composition]) byComposition[p.composition] = [];
    byComposition[p.composition].push(p);
  }

  // Calculate stats per composition
  const rankings = Object.entries(byComposition).map(([comp, items]) => {
    const scores = items.map(i => i.score).sort((a, b) => a - b);
    const avgScore = scores.reduce((s, v) => s + v, 0) / scores.length;
    const medianScore = scores[Math.floor(scores.length / 2)];
    const avgSaves = items.reduce((s, p) => s + (p.saves || 0), 0) / items.length;
    const avgShares = items.reduce((s, p) => s + (p.shares || 0), 0) / items.length;
    const avgComments = items.reduce((s, p) => s + (p.comments || 0), 0) / items.length;
    const avgReach = items.reduce((s, p) => s + (p.reach || 0), 0) / items.length;

    // Recent trend: compare last 3 vs overall (recency bonus)
    const sorted = [...items].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const recent3 = sorted.slice(0, 3);
    const recentAvg = recent3.length > 0 ? recent3.reduce((s, p) => s + p.score, 0) / recent3.length : avgScore;
    const trend = avgScore > 0 ? recentAvg / avgScore : 1;

    return {
      composition: comp,
      count: items.length,
      avgScore,
      medianScore,
      recentAvg,
      trend,  // >1 = improving, <1 = declining
      avgSaves,
      avgShares,
      avgComments,
      avgReach,
      bestPost: sorted[0],
    };
  }).sort((a, b) => b.avgScore - a.avgScore);

  const allScores = scored.map(s => s.score).sort((a, b) => a - b);
  const overall = {
    avg: allScores.reduce((s, v) => s + v, 0) / allScores.length,
    median: allScores[Math.floor(allScores.length / 2)],
  };

  return { byComposition, overall, rankings };
}

// ── Performance-Based Selection ─────────────────────────────

function selectComposition(history, perfAnalysis) {
  const { rankings } = perfAnalysis;

  // HARD RULE: Never repeat the last composition. Ever.
  const sortedSuccessful = history
    .filter(h => h.success)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  const lastComp = sortedSuccessful[0]?.composition;

  // Avoid same comp within last 3 posts for variety
  const recentComps = new Set(
    sortedSuccessful.slice(0, 3).map(h => h.composition)
  );

  // If no performance data yet, use a balanced initial order
  if (rankings.length === 0) {
    const allComps = Object.keys(COMP_TO_FILE);
    const available = allComps.filter(c => !recentComps.has(c));
    const pool = available.length > 0 ? available : allComps;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Build weighted candidates from performance data
  // Score-based weight: top performer gets highest weight
  // Trend bonus: improving formats get extra weight
  // Variety penalty: recently posted gets reduced weight
  // Retirement: 5+ posts and <30% of median → eliminated
  const candidates = rankings
    .filter(r => r.composition !== "Unknown")
    .filter(r => {
      // RETIREMENT: if a format has 5+ posts and scores <30% of median, kill it
      const median = perfAnalysis.overall.median;
      if (r.count >= 5 && median > 0 && r.avgScore < median * 0.3) {
        console.log(`  ⛔ Retired: ${r.composition} (${r.avgScore.toFixed(1)} score, ${r.count} posts, <30% of median ${median.toFixed(1)})`);
        return false;
      }
      return true;
    })
    .map(r => {
      let weight = Math.max(r.avgScore, 0.1); // Floor to avoid zero

      // Trend multiplier: improving formats get up to 1.5x, declining get 0.7x
      const trendMult = Math.min(Math.max(r.trend, 0.7), 1.5);
      weight *= trendMult;

      // HARD BLOCK: Never repeat the LAST composition. Period.
      if (r.composition === lastComp) {
        weight = 0; // Completely eliminate
      } else if (recentComps.has(r.composition)) {
        weight *= 0.2; // Strong penalty for recent 3
      }

      // Bottom performer penalty: if clearly underperforming (< 50% of median), reduce
      const median = perfAnalysis.overall.median;
      if (median > 0 && r.avgScore < median * 0.5) {
        weight *= 0.2; // Severely reduce, but don't eliminate entirely
      }

      return { composition: r.composition, weight, stats: r };
    })
    .filter(c => c.weight > 0);

  // Also add compositions that haven't been posted yet (exploration)
  const rankedComps = new Set(rankings.map(r => r.composition));
  for (const comp of Object.keys(COMP_TO_FILE)) {
    if (!rankedComps.has(comp) && !recentComps.has(comp)) {
      // New format: give it median weight to ensure it gets tried
      const median = perfAnalysis.overall.median || 1;
      candidates.push({ composition: comp, weight: median, stats: null });
    }
  }

  if (candidates.length === 0) {
    return Object.keys(COMP_TO_FILE)[0];
  }

  // Weighted random selection
  const totalWeight = candidates.reduce((sum, c) => sum + c.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const c of candidates) {
    roll -= c.weight;
    if (roll <= 0) return c.composition;
  }
  return candidates[candidates.length - 1].composition;
}

// ── Voiceover Pool (for BMSExplainerVoiceover) ──────────────

function selectVoiceoverReel(history, perfCache) {
  const reelsDir = resolve(ROOT, "marketing", "reels");
  const voiceoverFiles = readdirSync(reelsDir)
    .filter(f => f.startsWith("bms-") && f.endsWith("-voiceover.mp4") && f !== "bms-explainer-voiceover.mp4");

  if (voiceoverFiles.length === 0) return null;

  // Get performance scores for posted voiceover reels
  const postedVoiceovers = history
    .filter(h => h.success && h.voiceoverFile)
    .map(h => ({
      file: h.voiceoverFile,
      postId: h.postId,
      score: perfCache.posts[h.postId] ? scorePost(perfCache.posts[h.postId]) : 0,
    }));

  const postedFiles = new Set(postedVoiceovers.map(p => p.file));
  const unposted = voiceoverFiles.filter(f => !postedFiles.has(f));

  // If there are unposted reels, prioritize those (exploration)
  if (unposted.length > 0) {
    return unposted[Math.floor(Math.random() * unposted.length)];
  }

  // All posted: pick based on past performance (favor winners)
  if (postedVoiceovers.length > 0) {
    // Don't repeat last 2 voiceover files
    const recent2 = history
      .filter(h => h.success && h.voiceoverFile)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 2)
      .map(h => h.voiceoverFile);

    const available = postedVoiceovers.filter(p => !recent2.includes(p.file));
    const pool = available.length > 0 ? available : postedVoiceovers;

    // Weighted selection by score
    const totalScore = pool.reduce((s, p) => s + Math.max(p.score, 0.1), 0);
    let roll = Math.random() * totalScore;
    for (const p of pool) {
      roll -= Math.max(p.score, 0.1);
      if (roll <= 0) return p.file;
    }
    return pool[pool.length - 1].file;
  }

  // Fallback
  return voiceoverFiles[Math.floor(Math.random() * voiceoverFiles.length)];
}

// ── Caption System ──────────────────────────────────────────

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const MEDAT_DATE = new Date("2026-07-03");
const daysUntil = Math.ceil((MEDAT_DATE - new Date()) / (1000 * 60 * 60 * 24));

const CTA_BLOCKS = [
  "📩 Schick das an deinen MedAT-Lernpartner!\n🔖 Speichern & beim Lernen nochmal anschauen!",
  "📩 Markiere jemanden, der das wissen muss!\n🔖 Speichern für die Wiederholung!",
  "📩 Teile das mit deiner Lerngruppe!\n💬 Kommentiere deine Antwort!",
  "💬 Schreib dein Ergebnis in die Kommentare!\n📩 Teilen mit deiner MedAT-Crew!",
  "🔖 Speichern = beim nächsten Lernen wieder parat!\n📩 Schick's an jemanden der MedAT macht!",
];

const FOOTER = daysUntil > 60
  ? "\n\n📱 MedAT-Training mit 5000+ Aufgaben → medmaster.at"
  : daysUntil > 14
  ? `\n\n⏰ Noch ${daysUntil} Tage bis zum MedAT — jetzt starten → medmaster.at`
  : daysUntil > 0
  ? `\n\n🔥 Nur noch ${daysUntil} Tage! Jetzt oder nie → medmaster.at`
  : "\n\n📱 MedAT-Training mit 5000+ Aufgaben → medmaster.at";

function caption(hooks, hashtags) {
  return `${pick(hooks)}\n\n${pick(CTA_BLOCKS)}${FOOTER}\n\n${hashtags}`;
}

const CAPTIONS_FN = {
  QuizChallenge: () => caption([
    "STOPP — beantworte die Frage bevor du weiterschrollst! 🧠\n\nKommentiere A–E, dann schau die Lösung!",
    "Diese Frage trennt Medizinstudenten von Bewerbern. 🧠\n\nDie meisten tippen falsch — und du?",
    "1 Frage. 5 Optionen. Nur 1 ist richtig. 🧠\n\nKommentiere deinen Buchstaben JETZT!",
    "Dein Prof würde diese Frage stellen. 🧠\n\nSchaffst du sie in 30 Sekunden? Kommentiere A–E!",
    "Wer das falsch hat, verliert einen Punkt im MedAT. 🧠\n\nKommentiere bevor du die Auflösung siehst!",
    "Echte MedAT-Frage — traust du dich? 🧠\n\nA, B, C, D oder E? Kommentiere!",
  ], "#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien #Aufnahmeprüfung"),

  TippDesTages: () => caption([
    "Diesen Fakt kennen 90% der MedAT-Bewerber NICHT. 💡\n\nSpeichern, bevor du ihn vergisst!",
    "1 Fakt = 1 Punkt mehr im MedAT. 💡\n\nSo einfach kann Vorbereitung sein.",
    "Die meisten lernen das erst in der Prüfung — zu spät. 💡\n\nJetzt speichern!",
    "Hättest du das gewusst? 💡\n\nGenau DAS kommt im BMS dran. Speichern!",
    "Dein Lernpartner weiß das wahrscheinlich nicht. 💡\n\nSchick's ihm!",
  ], "#MedAT #MedAT2026 #Medizin #Lerntipps #BMS #Prüfungsvorbereitung"),

  ZahlenfolgeChallenge: () => caption([
    "Findest du die Regel in 15 Sekunden? 🔢\n\nKommentiere die nächste Zahl!",
    "Die meisten sehen das Muster NICHT. 🔢\n\nKommentiere die nächste Zahl, bevor du die Lösung siehst!",
    "Zahlenfolgen = geschenkte KFF-Punkte. 🔢\n\nAber nur wenn du schnell genug bist!",
    "Stoppe die Zeit — wie lange brauchst du? 🔢\n\nKommentiere: Zahl + Sekunden!",
    "Im MedAT hast du 25 Sekunden pro Aufgabe. 🔢\n\nSchaffst du es? Los!",
  ], "#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung #Logik"),

  WortRaetsel: () => caption([
    "6 Buchstaben. 1 Wort. Findest du es? 🔤\n\nKommentiere deine Lösung!",
    "Wortflüssigkeit ist der einfachste KFF-Untertest — wenn du übst. 🔤\n\nLos, welches Wort?",
    "Die meisten brauchen zu lange. Und du? 🔤\n\nKommentiere das Wort + deine Zeit!",
    "Buchstaben-Salat oder klares Wort? 🔤\n\nKommentiere, was du siehst!",
    "Wer das in 5 Sekunden hat, ist MedAT-ready. 🔤\n\nSchaffst du es?",
  ], "#MedAT #MedAT2026 #KFF #Wortflüssigkeit #Aufnahmeprüfung"),

  StatsUrgency: () => caption([
    `${daysUntil} Tage. 16.000 Bewerber. 1.850 Plätze.\n\nWas hast du heute schon gelernt? 📊`,
    "Jeder 8. bekommt einen Platz.\n\nDie anderen 7 haben zu spät angefangen. Sei nicht Nr. 7. 📊",
    `Noch ${daysUntil} Tage bis zum MedAT.\n\nWer JETZT nicht übt, hat im Juli ein Problem. 📊`,
    "87% der MedAT-Bewerber werden abgelehnt.\n\nDer Unterschied? Vorbereitung. 📊",
    `${daysUntil} Tage trennen dich von deinem Studienplatz.\n\nJeder Tag zählt. 📊`,
  ], "#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Motivation #Studienplatz"),

  RichtigOderFalsch: () => caption([
    "3 Aussagen. Richtig oder Falsch?\n\nKommentiere: 3/3, 2/3, 1/3 oder 0/3! 🧠",
    "Die meisten schaffen nur 1 von 3. Und du? 🧠\n\nKommentiere ehrlich dein Ergebnis!",
    "Klingt einfach — ist es aber nicht. 🧠\n\nRichtig oder Falsch? Probier's!",
    "Trau dich: Kommentiere dein Ergebnis BEVOR du die Lösung siehst. 🧠\n\n3/3 = MedAT-ready!",
    "Wer 3/3 schafft, darf das Reel teilen. Deal? 🧠",
  ], "#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniWien"),

  ImplikationenChallenge: () => caption([
    "2 Prämissen. 5 Optionen. 1 zwingende Antwort. 🧠\n\nWelche? Kommentiere A–E!",
    "Der schwerste KFF-Untertest — und die meisten üben ihn zu wenig. 🧠\n\nSchaffst du diese?",
    "Logisch denken unter Zeitdruck. 🧠\n\nKommentiere deinen Buchstaben!",
    "Implikationen = da wo die meisten Punkte liegen lassen. 🧠\n\nZeig dass du es kannst!",
    "Welcher Schluss ist ZWINGEND? 🧠\n\nNicht raten — begründen! Kommentiere A–E!",
  ], "#MedAT #MedAT2026 #KFF #Implikationen #Logik #Aufnahmeprüfung"),

  FigurenChallenge: () => caption([
    "2 Teile → 1 Figur. Welche passt? 🧩\n\nKommentiere A–E!",
    "Räumliches Denken in 20 Sekunden. 🧩\n\nSiehst du es auf den ersten Blick?",
    "Die meisten drehen die Teile im Kopf falsch. 🧩\n\nKommentiere A–E!",
    "Im MedAT hast du 25 Sekunden. Hier hast du beliebig viel Zeit. 🧩\n\nNutz sie!",
    "Figuren zusammensetzen = Training für dein räumliches Vorstellungsvermögen. 🧩\n\nWelche Figur?",
  ], "#MedAT #MedAT2026 #KFF #Figuren #Aufnahmeprüfung #Raumvorstellung"),

  BMSExplainerVoiceover: () => caption([
    "50 Sekunden. 1 Thema. Alles was du wissen musst. 🎓\n\nSpeichern & nochmal anschauen!",
    "Besser als 2 Stunden Skript lesen. 🎓\n\nDieses BMS-Thema in unter einer Minute!",
    "Dein Kurzzeit-Gedächtnis liebt kurze Videos. 🎓\n\nSpeichern & vor der Prüfung nochmal schauen!",
    "Endlich verständlich erklärt — ohne Lehrbuch-Deutsch. 🎓\n\nSpeichern!",
    "Das kommt im MedAT. Garantiert. 🎓\n\n50 Sekunden, die sich lohnen!",
    "Wenn du nur 1 Reel heute speicherst — nimm dieses. 🎓",
  ], "#MedAT #MedAT2026 #BMS #Medizinstudium #MedUniWien #Biologie"),

  CheatSheet: () => caption([
    "5 Fakten, die im MedAT drankommen. 📋\n\nSpeichern = beim Lernen parat!",
    "Dein Cheat Sheet für die Prüfung. 📋\n\nSpeichern & nochmal anschauen!",
    "5 Fakten in 15 Sekunden. 📋\n\nWie viele wusstest du?",
    "Wenn du nur 1 Reel heute speicherst — nimm dieses. 📋\n\n5 prüfungsrelevante Fakten!",
    "Dein MedAT-Spickzettel. 📋\n\nSpeichern & vor der Prüfung nochmal schauen!",
  ], "#MedAT #MedAT2026 #BMS #Lerntipps #CheatSheet #Prüfungsvorbereitung"),

  MistakeReveal: () => caption([
    "90% machen diesen Fehler im MedAT. ❌→✅\n\nMachst du ihn auch?",
    "FALSCH! So denken die meisten — und verlieren Punkte. ❌→✅\n\nSchick das an jemanden!",
    "Dieser Fehler kostet dich 1 Punkt. ❌→✅\n\nJetzt weißt du es besser!",
    "Hättest du's richtig gehabt? ❌→✅\n\nKommentiere ehrlich!",
    "Den Fehler machen sogar Tutoren. ❌→✅\n\nSpeichern & nie wieder falsch machen!",
  ], "#MedAT #MedAT2026 #BMS #HäufigerFehler #Prüfungsvorbereitung"),

  SpeedRound: () => caption([
    "3 Fragen. 30 Sekunden. Schaffst du alle? ⚡\n\nKommentiere: 3/3, 2/3, 1/3 oder 0/3!",
    "Speed Round! Wie viele schaffst du? ⚡\n\nKommentiere dein Ergebnis ehrlich!",
    "30 Sekunden MedAT-Training. ⚡\n\nKommentiere & challenge deinen Lernpartner!",
    "Wer 3/3 hat, darf teilen. Deal? ⚡\n\nKommentiere dein Ergebnis!",
    "Schneller als du denkst — 3 Fragen, 30 Sekunden. ⚡\n\nSchaffst du alle 3?",
  ], "#MedAT #MedAT2026 #BMS #SpeedRound #Quiz #Aufnahmeprüfung"),
};

// ── Render & Upload ─────────────────────────────────────────

function ensureReelRendered(comp) {
  const file = COMP_TO_FILE[comp];
  const mp4 = resolve(ROOT, "marketing", "reels", `${file}.mp4`);
  if (!existsSync(mp4)) {
    console.log(`  Rendering ${comp}...`);
    execFileSync("node", [resolve(ROOT, "video/render.mjs"), "--comp", comp], {
      cwd: ROOT, stdio: "inherit",
    });
  }
  return mp4;
}

async function uploadToSupabase(filePath) {
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
  const ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !ANON_KEY) {
    console.log("  No Supabase credentials, using medmaster.at URL");
    return null;
  }

  const fileName = `${Date.now()}-${filePath.split("/").pop()}`;
  const fileData = readFileSync(filePath);

  await fetchWithRetry(`${SUPABASE_URL}/storage/v1/bucket`, {
    method: "POST",
    headers: { Authorization: `Bearer ${ANON_KEY}`, apikey: ANON_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ id: "reels", name: "reels", public: true }),
  }).catch(() => {});

  console.log(`  Uploading to Supabase (${(fileData.length / 1024 / 1024).toFixed(1)}MB)...`);
  const upRes = await fetchWithRetry(`${SUPABASE_URL}/storage/v1/object/reels/${fileName}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${ANON_KEY}`, apikey: ANON_KEY, "Content-Type": "video/mp4" },
    body: fileData,
  });
  if (!upRes.ok) throw new Error(`Supabase upload failed: ${await upRes.text()}`);
  return `${SUPABASE_URL}/storage/v1/object/public/reels/${fileName}`;
}

// ── Post Flow ───────────────────────────────────────────────

async function postReel(comp, token, dry, history, perfCache) {
  const captionText = CAPTIONS_FN[comp]();
  let voiceoverFile = null;

  // For voiceover reels, select from pool based on performance
  if (comp === "BMSExplainerVoiceover") {
    voiceoverFile = selectVoiceoverReel(history, perfCache);
    if (voiceoverFile) {
      const batchPath = resolve(ROOT, "marketing", "reels", voiceoverFile);
      const standardPath = resolve(ROOT, "marketing", "reels", `${COMP_TO_FILE[comp]}.mp4`);
      copyFileSync(batchPath, standardPath);
      console.log(`  Selected voiceover: ${voiceoverFile}`);
    }
  }

  console.log(`\n🎬 Posting ${comp}`);

  if (dry) {
    console.log("  [DRY RUN] Would post with caption:");
    console.log(`  ${captionText.slice(0, 80)}...`);
    return { id: "dry-run", caption: captionText, voiceoverFile };
  }

  const mp4Path = ensureReelRendered(comp);
  const videoUrl = await uploadToSupabase(mp4Path) || `https://www.medmaster.at/marketing/reels/${COMP_TO_FILE[comp]}.mp4`;
  console.log(`  Video URL: ${videoUrl.slice(0, 80)}...`);

  console.log("  Creating reel container...");
  const cRes = await fetchWithRetry(
    `${API}/${IG_USER_ID}/media?` + new URLSearchParams({
      access_token: token, video_url: videoUrl, caption: captionText,
      media_type: "REELS", share_to_feed: "true",
    }),
    { method: "POST" }
  );
  const container = await cRes.json();
  if (container.error) throw new Error(`Container error: ${container.error.message}`);

  console.log(`  Processing (container: ${container.id})...`);
  for (let i = 0; i < 60; i++) {
    const r = await fetchWithRetry(`${API}/${container.id}?fields=status_code&access_token=${token}`);
    const s = await r.json();
    if (s.status_code === "FINISHED") break;
    if (s.status_code === "ERROR") throw new Error(`Media processing failed: ${container.id}`);
    await new Promise(r => setTimeout(r, 3000));
  }

  console.log("  Publishing...");
  const pub = await fetchWithRetry(
    `${API}/${IG_USER_ID}/media_publish?` + new URLSearchParams({
      access_token: token, creation_id: container.id,
    }),
    { method: "POST" }
  );
  const result = await pub.json();
  if (result.error) throw new Error(`Publish error: ${result.error.message}`);

  console.log(`  ✅ Published! Post ID: ${result.id}`);
  return { id: result.id, caption: captionText, voiceoverFile };
}

// ── Report Command ──────────────────────────────────────────

function printReport(perfAnalysis, history) {
  const { rankings, overall } = perfAnalysis;

  console.log("\n" + "═".repeat(70));
  console.log("  PERFORMANCE-LEARNING REPORT");
  console.log("═".repeat(70));

  if (rankings.length === 0) {
    console.log("\n  No performance data yet. Post some reels first.\n");
    return;
  }

  console.log(`\n  Overall: avg score ${overall.avg.toFixed(1)}, median ${overall.median.toFixed(1)}`);

  // Rankings table
  console.log("\n── Composition Rankings (by score) ─────────────────");
  console.log("  Rank | Type                    | Score  | Saves | Shares | Trend  | Posts");
  console.log("  " + "─".repeat(82));

  for (let i = 0; i < rankings.length; i++) {
    const r = rankings[i];
    const trendIcon = r.trend > 1.1 ? "📈" : r.trend < 0.9 ? "📉" : "➡️";
    const status = r.avgScore > overall.median * 1.5 ? "🏆" :
                   r.avgScore < overall.median * 0.5 ? "⚠️" : "  ";
    console.log(
      `  ${status} ${(i + 1).toString().padStart(2)}. ${r.composition.padEnd(23)} | ` +
      `${r.avgScore.toFixed(1).padStart(6)} | ` +
      `${r.avgSaves.toFixed(1).padStart(5)} | ` +
      `${r.avgShares.toFixed(1).padStart(6)} | ` +
      `${trendIcon} ${r.trend.toFixed(2)} | ${r.count}`
    );
  }

  // Winners & losers
  const winners = rankings.filter(r => r.avgScore > overall.median);
  const losers = rankings.filter(r => r.avgScore < overall.median * 0.5);

  if (winners.length > 0) {
    console.log("\n── Winners (above median) ──────────────────────────");
    for (const w of winners) {
      console.log(`  🏆 ${w.composition}: ${w.avgScore.toFixed(1)} score, ${w.avgSaves.toFixed(1)} saves/post`);
    }
  }

  if (losers.length > 0) {
    console.log("\n── Underperformers (< 50% median) ─────────────────");
    for (const l of losers) {
      console.log(`  ⚠️  ${l.composition}: ${l.avgScore.toFixed(1)} score (${((l.avgScore / overall.median) * 100).toFixed(0)}% of median)`);
    }
  }

  // Recent posts
  console.log("\n── Last 7 Posts ────────────────────────────────────");
  const recent = history
    .filter(h => h.success)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 7);

  for (const h of recent) {
    const date = h.timestamp.slice(0, 10);
    const perf = Object.values(perfAnalysis.byComposition[h.composition] || {})
      .flat()
      .find(p => p.id === h.postId);
    const score = perf ? scorePost(perf).toFixed(1) : "?";
    const vf = h.voiceoverFile ? ` (${h.voiceoverFile.replace("bms-", "").replace("-voiceover.mp4", "")})` : "";
    console.log(`  ${date} | ${h.composition}${vf} | score: ${score}`);
  }

  // Next post recommendation
  console.log("\n── Next Post Strategy ──────────────────────────────");
  const nextComp = selectComposition(history, perfAnalysis);
  const nextRanking = rankings.find(r => r.composition === nextComp);
  console.log(`  Recommended: ${nextComp}`);
  if (nextRanking) {
    console.log(`  Reason: score ${nextRanking.avgScore.toFixed(1)}, trend ${nextRanking.trend.toFixed(2)}`);
  } else {
    console.log(`  Reason: untested format (exploration)`);
  }

  console.log("\n" + "═".repeat(70));
}

// ── Stats Command ───────────────────────────────────────────

function showStats() {
  const history = loadHistory();
  if (history.length === 0) {
    console.log("No post history yet.");
    return;
  }

  console.log(`\n📊 Post History (${history.length} posts)\n`);
  console.log("Date       | Type                    | Status | Post ID");
  console.log("-".repeat(75));

  const typeCounts = {};
  for (const h of history) {
    const date = h.timestamp.slice(0, 10);
    const status = h.success ? "✅" : "❌";
    const postId = h.postId || "-";
    const vf = h.voiceoverFile ? ` [${h.voiceoverFile.replace("bms-", "").replace("-voiceover.mp4", "")}]` : "";
    console.log(`${date} | ${h.composition.padEnd(23)} | ${status}     | ${postId}${vf}`);
    typeCounts[h.composition] = (typeCounts[h.composition] || 0) + 1;
  }

  console.log("\nType Distribution:");
  for (const [type, count] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${type}: ${count}`);
  }
}

// ── Weekly Digest ───────────────────────────────────────────

function printWeeklyDigest(perfAnalysis, history) {
  const { rankings, overall } = perfAnalysis;
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;

  console.log("\n" + "═".repeat(60));
  console.log("  WEEKLY DIGEST — " + new Date().toISOString().slice(0, 10));
  console.log("═".repeat(60));

  // This week's posts
  const weekPosts = history
    .filter(h => h.success && new Date(h.timestamp).getTime() > weekAgo)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  console.log(`\n  Posted this week: ${weekPosts.length}`);

  if (rankings.length === 0) {
    console.log("  No performance data yet.\n");
    return;
  }

  // Winners: top 3 by score
  console.log("\n── WINNERS (double down) ────────────────────────");
  const winners = rankings.slice(0, 3);
  for (const w of winners) {
    const trendIcon = w.trend > 1.1 ? "improving" : w.trend < 0.9 ? "declining" : "stable";
    console.log(`  ${w.composition}: score ${w.avgScore.toFixed(1)}, ${w.avgSaves.toFixed(1)} saves, trend ${trendIcon} (${w.count} posts)`);
  }

  // Losers: bottom performers
  const losers = rankings.filter(r => r.count >= 3 && r.avgScore < overall.median * 0.6);
  if (losers.length > 0) {
    console.log("\n── LOSERS (reduce or retire) ────────────────────");
    for (const l of losers) {
      const pctOfMedian = overall.median > 0 ? ((l.avgScore / overall.median) * 100).toFixed(0) : "?";
      const retired = l.count >= 5 && overall.median > 0 && l.avgScore < overall.median * 0.3;
      const status = retired ? "RETIRED" : "reduce";
      console.log(`  ${l.composition}: score ${l.avgScore.toFixed(1)} (${pctOfMedian}% of median), ${l.count} posts → ${status}`);
    }
  }

  // Untested formats
  const testedComps = new Set(rankings.map(r => r.composition));
  const untested = Object.keys(COMP_TO_FILE).filter(c => !testedComps.has(c));
  if (untested.length > 0) {
    console.log("\n── UNTESTED (need data) ─────────────────────────");
    for (const u of untested) {
      console.log(`  ${u}: 0 posts — will be explored`);
    }
  }

  // Engagement health
  console.log("\n── ENGAGEMENT HEALTH ───────────────────────────");
  const posts = Object.values(perfAnalysis.byComposition).flat();
  const totalSaves = posts.reduce((s, p) => s + (p.saves || 0), 0);
  const totalShares = posts.reduce((s, p) => s + (p.shares || 0), 0);
  const totalComments = posts.reduce((s, p) => s + (p.comments || 0), 0);
  const totalReach = posts.reduce((s, p) => s + (p.reach || 0), 0);

  if (totalSaves === 0 && totalShares === 0 && totalReach === 0) {
    console.log("  ⚠️  ALL saves/shares/reach = 0 → Insights API may lack permissions");
    console.log("  Check: instagram_manage_insights scope on your token");
    console.log("  Check: Posts need 48h+ to accumulate Insights data");
  } else {
    console.log(`  Saves: ${totalSaves} total (${(totalSaves / posts.length).toFixed(1)}/post)`);
    console.log(`  Shares: ${totalShares} total (${(totalShares / posts.length).toFixed(1)}/post)`);
    console.log(`  Comments: ${totalComments} total (${(totalComments / posts.length).toFixed(1)}/post)`);
    console.log(`  Reach: ${totalReach} total (${(totalReach / posts.length).toFixed(0)}/post)`);
  }

  // Next recommendation
  console.log("\n── NEXT POST ───────────────────────────────────");
  const nextComp = selectComposition(history, perfAnalysis);
  const nextR = rankings.find(r => r.composition === nextComp);
  if (nextR) {
    console.log(`  → ${nextComp} (score: ${nextR.avgScore.toFixed(1)}, trend: ${nextR.trend.toFixed(2)})`);
  } else {
    console.log(`  → ${nextComp} (untested — exploration)`);
  }

  console.log("\n" + "═".repeat(60) + "\n");
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry") || args.includes("--dry-run");

  if (args.includes("--stats")) {
    showStats();
    return;
  }

  // Get token (needed for both report and posting)
  const token = await getPageToken();

  // Always refresh performance data before any decision
  let perfCache = { posts: {}, lastFetch: null };
  if (token) {
    try {
      perfCache = await refreshPerformanceData(token);
    } catch (err) {
      console.log(`  Warning: could not fetch performance data: ${err.message}`);
      perfCache = loadPerfCache(); // Use stale cache
    }
  }

  const perfAnalysis = analyzePerformance(perfCache);

  if (args.includes("--report")) {
    const history = loadHistory();
    printReport(perfAnalysis, history);
    return;
  }

  if (args.includes("--digest")) {
    const history = loadHistory();
    printWeeklyDigest(perfAnalysis, history);
    return;
  }

  // ── Strict 2/day enforcement ──────────────────────────────
  const history = loadHistory();
  const today = new Date().toISOString().slice(0, 10);
  const todayPosts = history.filter(h => h.timestamp.startsWith(today) && h.success);
  if (todayPosts.length >= POSTS_PER_DAY && !dry && !args.includes("--force")) {
    console.log(`Already posted ${todayPosts.length}x today. Max ${POSTS_PER_DAY}/day.`);
    return;
  }

  // ── Select composition based on performance ───────────────
  let comp;
  const compIdx = args.indexOf("--comp");
  if (compIdx >= 0) {
    comp = args[compIdx + 1];
    if (!COMP_TO_FILE[comp]) {
      console.error(`Unknown: ${comp}. Valid: ${Object.keys(COMP_TO_FILE).join(", ")}`);
      process.exit(1);
    }
    console.log(`📅 Forced: ${comp}`);
  } else {
    comp = selectComposition(history, perfAnalysis);

    // Log the decision reasoning
    const ranking = perfAnalysis.rankings.find(r => r.composition === comp);
    if (ranking) {
      const trendIcon = ranking.trend > 1.1 ? "📈" : ranking.trend < 0.9 ? "📉" : "➡️";
      console.log(`📅 Selected: ${comp} (score: ${ranking.avgScore.toFixed(1)}, trend: ${trendIcon} ${ranking.trend.toFixed(2)})`);
    } else {
      console.log(`📅 Selected: ${comp} (untested — exploration)`);
    }
  }

  if (!token && !dry) {
    console.error("❌ Set IG_PAGE_TOKEN in .env.local");
    process.exit(1);
  }

  // CI mode: write selected composition to GITHUB_OUTPUT for downstream steps
  const isCI = args.includes("--ci");
  if (isCI && process.env.GITHUB_OUTPUT) {
    const { appendFileSync } = await import("node:fs");
    appendFileSync(process.env.GITHUB_OUTPUT, `comp=${comp}\n`);
  }

  try {
    const result = await postReel(comp, token, dry, history, perfCache);
    addToHistory({
      timestamp: new Date().toISOString(),
      composition: comp,
      success: true,
      postId: result.id,
      caption: result.caption?.slice(0, 100),
      ...(result.voiceoverFile && { voiceoverFile: result.voiceoverFile }),
    });

    // Log decision trail for CI debugging
    if (isCI) {
      const ranking = perfAnalysis.rankings.find(r => r.composition === comp);
      console.log(`\n── CI Decision Trail ──`);
      console.log(`  Selected: ${comp}`);
      console.log(`  Reason: ${ranking ? `score ${ranking.avgScore.toFixed(1)}, trend ${ranking.trend.toFixed(2)}` : "exploration (untested)"}`);
      console.log(`  Post ID: ${result.id}`);
    }
  } catch (err) {
    console.error(`❌ ${err.message}`);
    addToHistory({
      timestamp: new Date().toISOString(),
      composition: comp,
      success: false,
      error: err.message,
    });
    process.exit(1);
  }
}

main();
