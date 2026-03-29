const SITE_URL = "https://medmaster.at";

export async function shareText(text: string, title = "MedMaster"): Promise<boolean> {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url: SITE_URL });
      return true;
    }
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // User cancelled or not supported
    return false;
  }
}

/** Open WhatsApp with pre-filled text */
export function shareWhatsApp(text: string): void {
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}

/** Open Telegram with pre-filled text */
export function shareTelegram(text: string): void {
  window.open(
    `https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

/** Open Twitter/X with pre-filled tweet */
export function shareTwitter(text: string): void {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(SITE_URL)}`,
    "_blank"
  );
}

/** Copy text to clipboard, return success */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// ── Share text generators ────────────────────────────────────────

export function getStreakShareText(days: number): string {
  return `🔥 ${days} Tage Streak auf MedMaster!\nIch lerne täglich für den MedAT — schon ${days} Tage in Folge!\n👉 ${SITE_URL}`;
}

export function getBadgeShareText(badgeName: string, badgeTier?: string): string {
  const tierEmoji = badgeTier === "gold" ? "🥇" : badgeTier === "silver" ? "🥈" : "🥉";
  return `${tierEmoji} Ich hab gerade das Badge "${badgeName}" auf MedMaster verdient!\nKostenlose MedAT-Vorbereitung: ${SITE_URL} 🧠`;
}

export function getLevelShareText(level: number, levelName: string): string {
  return `⬆️ Level ${level} erreicht — ${levelName}!\nWeiter zu Level ${level + 1} auf MedMaster!\n${SITE_URL} 🧠`;
}

export function getWrappedShareText(stats: {
  month: string;
  questionsAnswered: number;
  correctRate: number;
  longestStreak: number;
  topPercentile: number;
}): string {
  return `📊 Mein BMS-${stats.month} auf MedMaster:\n✅ ${stats.questionsAnswered} Fragen beantwortet (${stats.correctRate}% richtig)\n🔥 ${stats.longestStreak} Tage Streak\n🏆 Top ${stats.topPercentile}% aller Nutzer\n${SITE_URL} 🧠`;
}

export function getQuizShareText(subject: string, score: number, total: number): string {
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "💪" : pct >= 50 ? "📚" : "🔥";
  return `${emoji} ${score}/${total} (${pct}%) in ${subject} auf MedMaster!\nKostenlose MedAT-Vorbereitung mit 5.000+ Fragen\n👉 ${SITE_URL}`;
}

export function getSimulationShareText(section: string, score: number, total: number): string {
  const pct = Math.round((score / total) * 100);
  return `📊 MedAT ${section}: ${score}/${total} (${pct}%)\nIch übe auf MedMaster — gratis MedAT-Vorbereitung!\n👉 ${SITE_URL}`;
}

export function getReferralShareText(userId?: string): string {
  const link = userId ? `${SITE_URL}?ref=${userId.slice(0, 8)}` : SITE_URL;
  return `Hey! Ich bereite mich mit MedMaster auf den MedAT vor — 5.000+ Übungsfragen, KFF-Training, Prüfungssimulation und KI-Lernplan. Dein Vorteil: €5 Rabatt mit Code FREUND5. Lass uns zusammen lernen!\n👉 ${link}`;
}

export function getPrognoseShareText(scorePct: number, bestUni: string | null): string {
  const rounded = Math.round(scorePct);
  const uni = bestUni ? `\n🎯 ${bestUni}: Gute Chancen!` : "";
  return `📈 Meine MedAT-Prognose: ${rounded}%${uni}\nSchau wo du stehst auf MedMaster!\n👉 ${SITE_URL}`;
}
