#!/usr/bin/env node
/**
 * Instagram Performance Tracker
 *
 * Fetches all posts, tracks engagement, identifies top/bottom performers.
 * Outputs a weekly summary for content strategy decisions.
 *
 * Usage:
 *   node scripts/ig-performance.mjs                # Full report
 *   node scripts/ig-performance.mjs --json         # JSON output
 *   node scripts/ig-performance.mjs --csv          # CSV output
 */

const IG_USER_ID = "17841446757059213";
const FB_PAGE_ID = "990798194122764";
const API = "https://graph.facebook.com/v21.0";

async function getPageToken() {
  const userToken = process.env.IG_PAGE_TOKEN;
  const res = await fetch(`${API}/${FB_PAGE_ID}?fields=access_token&access_token=${userToken}`);
  const json = await res.json();
  return json.access_token || userToken;
}

function inferType(caption) {
  if (!caption) return "Unknown";
  const c = caption.toLowerCase();
  if (c.includes("richtig oder falsch")) return "RichtigOderFalsch";
  if (c.includes("zahlenfolge") || c.includes("muster") || c.includes("🔢")) return "ZahlenfolgeChallenge";
  if (c.includes("welches wort") || c.includes("wortflüssigkeit") || c.includes("🔤")) return "WortRaetsel";
  if (c.includes("welche figur") || c.includes("figuren") || c.includes("🧩")) return "FigurenChallenge";
  if (c.includes("schluss") || c.includes("implikation") || c.includes("prämiss")) return "ImplikationenChallenge";
  if (c.includes("wusstest du") || c.includes("fakt") || c.includes("💡")) return "TippDesTages";
  if (c.includes("87%") || c.includes("16.000") || c.includes("📊") || c.includes("bewerber")) return "StatsUrgency";
  if (c.includes("medat-frage") || c.includes("bms-frage") || c.includes("kommentiere") && c.includes("a–e")) return "QuizChallenge";
  return "QuizChallenge"; // default
}

async function main() {
  const token = await getPageToken();
  const args = process.argv.slice(2);
  const jsonOut = args.includes("--json");
  const csvOut = args.includes("--csv");

  // Fetch all posts
  let allPosts = [];
  let url = `${API}/${IG_USER_ID}/media?fields=id,timestamp,media_type,like_count,comments_count,caption&limit=50&access_token=${token}`;

  while (url) {
    const res = await fetch(url);
    const json = await res.json();
    if (json.data) allPosts.push(...json.data);
    url = json.paging?.next || null;
  }

  // Enrich posts
  const posts = allPosts.map(p => ({
    id: p.id,
    date: p.timestamp.slice(0, 10),
    time: p.timestamp.slice(11, 16),
    type: p.media_type === "IMAGE" ? "IMAGE" : "REEL",
    composition: inferType(p.caption),
    likes: p.like_count || 0,
    comments: p.comments_count || 0,
    engagement: (p.like_count || 0) + (p.comments_count || 0) * 3, // Comments weighted 3x
    caption: (p.caption || "").slice(0, 60),
  }));

  if (jsonOut) {
    console.log(JSON.stringify(posts, null, 2));
    return;
  }

  if (csvOut) {
    console.log("date,time,type,composition,likes,comments,engagement,caption");
    for (const p of posts) {
      console.log(`${p.date},${p.time},${p.type},${p.composition},${p.likes},${p.comments},${p.engagement},"${p.caption}"`);
    }
    return;
  }

  // Account stats
  const acctRes = await fetch(`${API}/${IG_USER_ID}?fields=followers_count,media_count&access_token=${token}`);
  const acct = await acctRes.json();

  console.log("═".repeat(70));
  console.log("  MedMaster Instagram Performance Report");
  console.log("═".repeat(70));
  console.log(`\n  Account: @medmaster_medat`);
  console.log(`  Followers: ${acct.followers_count}`);
  console.log(`  Total Posts: ${acct.media_count}`);
  console.log(`  Report Date: ${new Date().toISOString().slice(0, 10)}\n`);

  // Overall metrics
  const totalLikes = posts.reduce((s, p) => s + p.likes, 0);
  const totalComments = posts.reduce((s, p) => s + p.comments, 0);
  console.log("── Overall ─────────────────────────────────────────");
  console.log(`  Total Likes: ${totalLikes} (avg ${(totalLikes / posts.length).toFixed(1)}/post)`);
  console.log(`  Total Comments: ${totalComments} (avg ${(totalComments / posts.length).toFixed(1)}/post)`);

  // By type (IMAGE vs REEL)
  console.log("\n── By Format ───────────────────────────────────────");
  for (const type of ["IMAGE", "REEL"]) {
    const typed = posts.filter(p => p.type === type);
    if (typed.length === 0) continue;
    const avgLikes = (typed.reduce((s, p) => s + p.likes, 0) / typed.length).toFixed(1);
    const avgComments = (typed.reduce((s, p) => s + p.comments, 0) / typed.length).toFixed(1);
    console.log(`  ${type}: ${typed.length} posts, avg ${avgLikes}L ${avgComments}C`);
  }

  // By composition type
  console.log("\n── By Composition ──────────────────────────────────");
  const byComp = {};
  for (const p of posts) {
    if (!byComp[p.composition]) byComp[p.composition] = [];
    byComp[p.composition].push(p);
  }

  const compStats = Object.entries(byComp).map(([comp, items]) => ({
    comp,
    count: items.length,
    avgLikes: items.reduce((s, p) => s + p.likes, 0) / items.length,
    avgComments: items.reduce((s, p) => s + p.comments, 0) / items.length,
    avgEngagement: items.reduce((s, p) => s + p.engagement, 0) / items.length,
  })).sort((a, b) => b.avgEngagement - a.avgEngagement);

  for (const s of compStats) {
    const bar = "█".repeat(Math.round(s.avgEngagement));
    console.log(`  ${s.comp.padEnd(24)} ${s.count}x | ${s.avgLikes.toFixed(1)}L ${s.avgComments.toFixed(1)}C | ${bar}`);
  }

  // Top 5 posts
  console.log("\n── Top 5 Posts ─────────────────────────────────────");
  const sorted = [...posts].sort((a, b) => b.engagement - a.engagement);
  for (const p of sorted.slice(0, 5)) {
    console.log(`  ${p.date} ${p.likes}L ${p.comments}C | ${p.composition} | ${p.caption}`);
  }

  // Bottom 5
  console.log("\n── Bottom 5 Posts ──────────────────────────────────");
  for (const p of sorted.slice(-5).reverse()) {
    console.log(`  ${p.date} ${p.likes}L ${p.comments}C | ${p.composition} | ${p.caption}`);
  }

  // Weekly trend
  console.log("\n── Weekly Trend ────────────────────────────────────");
  const byWeek = {};
  for (const p of posts) {
    const d = new Date(p.date);
    const weekStart = new Date(d);
    weekStart.setDate(d.getDate() - d.getDay());
    const key = weekStart.toISOString().slice(0, 10);
    if (!byWeek[key]) byWeek[key] = [];
    byWeek[key].push(p);
  }
  for (const [week, items] of Object.entries(byWeek).sort()) {
    const avgE = (items.reduce((s, p) => s + p.engagement, 0) / items.length).toFixed(1);
    console.log(`  Week of ${week}: ${items.length} posts, avg engagement ${avgE}`);
  }

  // Recommendations
  console.log("\n── Recommendations ─────────────────────────────────");
  const bestComp = compStats[0];
  const worstComp = compStats[compStats.length - 1];
  console.log(`  📈 Best performer: ${bestComp.comp} (${bestComp.avgEngagement.toFixed(1)} avg engagement)`);
  console.log(`  📉 Worst performer: ${worstComp.comp} (${worstComp.avgEngagement.toFixed(1)} avg engagement)`);

  if (totalComments === 0 || totalComments / posts.length < 0.5) {
    console.log("  ⚠️  Very low comment rate — captions need stronger engagement hooks");
  }

  const reels = posts.filter(p => p.type === "REEL");
  const images = posts.filter(p => p.type === "IMAGE");
  if (images.length > 0 && reels.length > 0) {
    const reelAvg = reels.reduce((s, p) => s + p.engagement, 0) / reels.length;
    const imgAvg = images.reduce((s, p) => s + p.engagement, 0) / images.length;
    if (imgAvg > reelAvg * 1.2) {
      console.log("  ⚠️  Images outperforming Reels — consider mixed format strategy");
    }
  }

  console.log("\n" + "═".repeat(70));
}

main().catch(e => { console.error("❌", e.message); process.exit(1); });
