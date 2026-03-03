#!/usr/bin/env node
/**
 * Instagram Token Manager
 *
 * Long-lived tokens expire after 60 days. This script:
 *   - Exchanges a short-lived token for a long-lived one
 *   - Refreshes an existing long-lived token (extends 60 days)
 *   - Checks token expiry
 *
 * Usage:
 *   # Exchange short-lived → long-lived (einmalig):
 *   node scripts/refresh-ig-token.mjs --exchange SHORT_LIVED_TOKEN
 *
 *   # Refresh existing long-lived token:
 *   IG_ACCESS_TOKEN=xxx node scripts/refresh-ig-token.mjs --refresh
 *
 *   # Check when token expires:
 *   IG_ACCESS_TOKEN=xxx node scripts/refresh-ig-token.mjs --check
 *
 * Env vars:
 *   META_APP_ID       - Your Meta App ID
 *   META_APP_SECRET   - Your Meta App Secret
 *   IG_ACCESS_TOKEN   - Current long-lived token (for --refresh and --check)
 */

const GRAPH_API_BASE = "https://graph.facebook.com/v21.0";

const args = process.argv.slice(2);
const isExchange = args.includes("--exchange");
const isRefresh = args.includes("--refresh");
const isCheck = args.includes("--check");

const META_APP_ID = process.env.META_APP_ID;
const META_APP_SECRET = process.env.META_APP_SECRET;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

async function exchangeToken(shortToken) {
  if (!META_APP_ID || !META_APP_SECRET) {
    console.error("❌ META_APP_ID and META_APP_SECRET required for exchange");
    console.error("   Find them at: https://developers.facebook.com/apps/ → Settings → Basic");
    process.exit(1);
  }

  const url = new URL(`${GRAPH_API_BASE}/oauth/access_token`);
  url.searchParams.set("grant_type", "fb_exchange_token");
  url.searchParams.set("client_id", META_APP_ID);
  url.searchParams.set("client_secret", META_APP_SECRET);
  url.searchParams.set("fb_exchange_token", shortToken);

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Exchange failed (${res.status}): ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log("✅ Long-lived token generated!");
  console.log(`   Token: ${data.access_token}`);
  console.log(`   Type: ${data.token_type}`);
  console.log(`   Expires in: ${Math.round(data.expires_in / 86400)} days`);
  console.log("\n   Set this as your IG_ACCESS_TOKEN env var / GitHub Secret.");
  return data.access_token;
}

async function refreshToken() {
  if (!IG_ACCESS_TOKEN) {
    console.error("❌ IG_ACCESS_TOKEN required for refresh");
    process.exit(1);
  }

  const url = new URL(`${GRAPH_API_BASE}/oauth/access_token`);
  url.searchParams.set("grant_type", "fb_exchange_token");
  url.searchParams.set("client_id", META_APP_ID);
  url.searchParams.set("client_secret", META_APP_SECRET);
  url.searchParams.set("fb_exchange_token", IG_ACCESS_TOKEN);

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Refresh failed (${res.status}): ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log("✅ Token refreshed!");
  console.log(`   New token: ${data.access_token}`);
  console.log(`   Expires in: ${Math.round(data.expires_in / 86400)} days`);
  console.log("\n   Update your IG_ACCESS_TOKEN env var / GitHub Secret.");
  return data.access_token;
}

async function checkToken() {
  if (!IG_ACCESS_TOKEN) {
    console.error("❌ IG_ACCESS_TOKEN required for check");
    process.exit(1);
  }

  const url = new URL(`${GRAPH_API_BASE}/debug_token`);
  url.searchParams.set("input_token", IG_ACCESS_TOKEN);
  url.searchParams.set("access_token", IG_ACCESS_TOKEN);

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Check failed (${res.status}): ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  const info = data.data;
  const expiresAt = info.expires_at ? new Date(info.expires_at * 1000) : null;
  const daysLeft = expiresAt
    ? Math.round((expiresAt.getTime() - Date.now()) / 86400000)
    : "never";

  console.log("🔑 Token Info:");
  console.log(`   App ID: ${info.app_id}`);
  console.log(`   Type: ${info.type}`);
  console.log(`   Valid: ${info.is_valid ? "✅" : "❌"}`);
  console.log(`   Scopes: ${info.scopes?.join(", ") || "unknown"}`);
  console.log(`   Expires: ${expiresAt ? expiresAt.toLocaleDateString("de-AT") : "never"} (${daysLeft} days)`);

  if (typeof daysLeft === "number" && daysLeft < 14) {
    console.log("\n   ⚠️  Token läuft bald ab! Refresh mit:");
    console.log("   IG_ACCESS_TOKEN=xxx META_APP_ID=yyy META_APP_SECRET=zzz node scripts/refresh-ig-token.mjs --refresh");
  }

  return info;
}

// ── Main ──────────────────────────────────────────────────────
if (isExchange) {
  const shortToken = args[args.indexOf("--exchange") + 1];
  if (!shortToken) {
    console.error("Usage: node scripts/refresh-ig-token.mjs --exchange YOUR_SHORT_TOKEN");
    process.exit(1);
  }
  await exchangeToken(shortToken);
} else if (isRefresh) {
  await refreshToken();
} else if (isCheck) {
  await checkToken();
} else {
  console.log(`
Instagram Token Manager

Usage:
  # 1. Get short-lived token from Graph API Explorer:
  #    https://developers.facebook.com/tools/explorer/
  #    Permissions: instagram_basic, instagram_content_publish, pages_show_list

  # 2. Exchange for long-lived token (60 Tage):
  META_APP_ID=xxx META_APP_SECRET=yyy \\
    node scripts/refresh-ig-token.mjs --exchange YOUR_SHORT_TOKEN

  # 3. Check expiry:
  IG_ACCESS_TOKEN=xxx node scripts/refresh-ig-token.mjs --check

  # 4. Refresh before expiry (alle ~50 Tage):
  IG_ACCESS_TOKEN=xxx META_APP_ID=yyy META_APP_SECRET=zzz \\
    node scripts/refresh-ig-token.mjs --refresh
  `);
}
