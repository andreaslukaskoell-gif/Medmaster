import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// Setup:
//   Uses IONOS SMTP (welcome@medmaster.at) via denomailer
//   Secrets needed: SMTP_USER, SMTP_PASS (already set from Supabase Auth config)

function requireEnv(name: string): string {
  const v = Deno.env.get(name);
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

const SMTP_USER = Deno.env.get("SMTP_USER") || "";
const SMTP_PASS = Deno.env.get("SMTP_PASS") || "";
const SITE_URL = Deno.env.get("SITE_URL") || "https://medmaster.at";
const FROM_EMAIL = "MedMaster <welcome@medmaster.at>";

// ── Email validation ──
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email: string): boolean {
  return typeof email === "string" && EMAIL_REGEX.test(email) && email.length <= 254;
}

// ── Rate limiting (in-memory, per cold-start instance) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(key: string, maxPerMinute = 10): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= maxPerMinute) return false;
  entry.count++;
  return true;
}

const supabase = createClient(
  requireEnv("SUPABASE_URL"),
  requireEnv("SUPABASE_SERVICE_ROLE_KEY")
);

// ── Email Templates ──

type TemplateId =
  | "launch-announcement"
  | "launch-golive"
  | "trial-ending-7d"
  | "trial-ending-3d"
  | "trial-ending-today"
  | "post-trial-day1"
  | "post-trial-day3"
  | "post-trial-day7"
  | "welcome"
  | "weekly-progress"
  | "re-engagement"
  | "d1-reminder"
  | "streak-risk";

type TemplateData = {
  displayName: string;
  email: string;
  questionsAnswered?: number;
  correctRate?: number;
  daysUntilExam?: number;
};

// ── Brand constants (from LandingPage.tsx) ──
const NAVY = "#1b3ea7";
const NAVY_DARK = "#1e3a8a";
const BLUE = "#2563eb";
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

// ── Premium Email Shell ──

function premiumWrap(body: string, preheader?: string): string {
  const unsubscribeUrl = `${SITE_URL}/app/einstellungen?unsubscribe=email`;

  return `<!DOCTYPE html>
<html lang="de" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <meta name="color-scheme" content="light"/>
  <meta name="supported-color-schemes" content="light"/>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <style>
    body,table,td,p,a{font-family:${FONT};-webkit-font-smoothing:antialiased}
    body{margin:0;padding:0;background:#f1f5f9}
    img{border:0;display:block;outline:none}
    a{color:${BLUE};text-decoration:none}
    @media only screen and (max-width:600px){
      .email-card{border-radius:0!important}
      .email-body{padding:24px 20px 8px!important}
      .email-footer{padding:0 20px 24px!important}
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9">
  ${preheader ? `<div style="display:none;font-size:1px;color:#f1f5f9;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${preheader}${"&nbsp;".repeat(80)}</div>` : ""}

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9">
    <tr><td align="center" style="padding:40px 16px">

      <!-- Card -->
      <table class="email-card" role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(30,58,138,0.08),0 1px 3px rgba(0,0,0,0.04)">

        <!-- ▌ Header with gradient + logo ▌ -->
        <tr>
          <td style="background:linear-gradient(135deg,${NAVY_DARK} 0%,${NAVY} 40%,${BLUE} 100%);padding:0">
            <!-- Top accent line -->
            <div style="height:3px;background:linear-gradient(90deg,#60a5fa,#93c5fd,#60a5fa)"></div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:32px 36px 28px">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <!-- Logo mark -->
                    <td style="vertical-align:middle;padding-right:14px">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="border-radius:12px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.08)">
                        <tr><td style="width:44px;height:44px;text-align:center;vertical-align:middle">
                          <span style="color:#fff;font-size:24px;font-weight:900;font-family:${FONT};line-height:44px">M</span>
                        </td></tr>
                      </table>
                    </td>
                    <!-- Wordmark -->
                    <td style="vertical-align:middle">
                      <span style="color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.03em;font-family:${FONT}">Med</span><span style="color:#93c5fd;font-size:26px;font-weight:800;letter-spacing:-0.03em;font-family:${FONT}">Master</span>
                    </td>
                  </tr>
                </table>
                <p style="color:rgba(255,255,255,0.6);font-size:12px;margin:10px 0 0;font-weight:500;letter-spacing:0.08em;text-transform:uppercase">MedAT 2026 Vorbereitung</p>
              </td></tr>
            </table>
          </td>
        </tr>

        <!-- ▌ Body ▌ -->
        <tr>
          <td class="email-body" style="padding:36px 36px 12px;color:#1e293b;font-size:15px;line-height:1.75">
            ${body}
          </td>
        </tr>

        <!-- ▌ Footer ▌ -->
        <tr>
          <td class="email-footer" style="padding:0 36px 32px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:24px 0 0;border-top:1px solid #e2e8f0">
                <!-- Trust badges row -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 16px">
                  <tr>
                    <td style="padding:0 12px;text-align:center;vertical-align:middle">
                      <span style="font-size:11px;color:#94a3b8;letter-spacing:0.05em">&#10003; Kein Abo</span>
                    </td>
                    <td style="padding:0 12px;text-align:center;vertical-align:middle;border-left:1px solid #e2e8f0">
                      <span style="font-size:11px;color:#94a3b8;letter-spacing:0.05em">&#10003; Einmalig &euro;29,90</span>
                    </td>
                    <td style="padding:0 12px;text-align:center;vertical-align:middle;border-left:1px solid #e2e8f0">
                      <span style="font-size:11px;color:#94a3b8;letter-spacing:0.05em">&#10003; Made in Austria</span>
                    </td>
                  </tr>
                </table>
                <p style="font-size:11px;color:#94a3b8;text-align:center;margin:0 0 6px">
                  <a href="${unsubscribeUrl}" style="color:#94a3b8;text-decoration:underline">Abmelden</a>
                  &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                  <a href="${SITE_URL}/datenschutz" style="color:#94a3b8;text-decoration:underline">Datenschutz</a>
                  &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                  <a href="${SITE_URL}" style="color:#94a3b8;text-decoration:underline">medmaster.at</a>
                </p>
              </td></tr>
            </table>
          </td>
        </tr>

      </table>

    </td></tr>
  </table>
</body>
</html>`;
}

// ── Stat cards helper ──

function statCards(questionsAnswered?: number, correctRate?: number): string {
  if (!questionsAnswered) return "";
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
      <tr>
        <td width="48%" style="padding-right:6px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;border-radius:14px;border:1px solid #dbeafe">
            <tr><td style="padding:20px 16px;text-align:center">
              <div style="font-size:32px;font-weight:900;color:${NAVY_DARK};letter-spacing:-0.02em;line-height:1">${questionsAnswered}</div>
              <div style="font-size:11px;color:#64748b;margin-top:6px;text-transform:uppercase;letter-spacing:0.06em;font-weight:600">Fragen beantwortet</div>
            </td></tr>
          </table>
        </td>
        ${
          correctRate
            ? `
        <td width="48%" style="padding-left:6px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-radius:14px;border:1px solid #bbf7d0">
            <tr><td style="padding:20px 16px;text-align:center">
              <div style="font-size:32px;font-weight:900;color:#16a34a;letter-spacing:-0.02em;line-height:1">${correctRate}%</div>
              <div style="font-size:11px;color:#64748b;margin-top:6px;text-transform:uppercase;letter-spacing:0.06em;font-weight:600">Richtigquote</div>
            </td></tr>
          </table>
        </td>`
            : ""
        }
      </tr>
    </table>
  `;
}

// ── Free vs. Premium comparison table ──

function freeVsPremium(): string {
  const check = `<span style="color:#16a34a;font-weight:700">&#10003;</span>`;
  const cross = `<span style="color:#dc2626;font-weight:700">&#10005;</span>`;
  const lock = `<span style="color:#94a3b8">&#128274;</span>`;
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0">
      <tr>
        <td style="padding:14px 16px;background:#f8fafc;font-size:13px;font-weight:700;color:#475569;border-bottom:1px solid #e2e8f0" width="52%"></td>
        <td style="padding:14px 8px;background:#f8fafc;font-size:11px;font-weight:700;color:#94a3b8;text-align:center;border-bottom:1px solid #e2e8f0;text-transform:uppercase;letter-spacing:0.06em" width="24%">Gratis<br/><span style="font-size:10px;font-weight:500;color:#cbd5e1">ab 1. April</span></td>
        <td style="padding:14px 8px;background:${NAVY_DARK};font-size:11px;font-weight:700;color:#fff;text-align:center;border-bottom:1px solid ${NAVY};text-transform:uppercase;letter-spacing:0.06em" width="24%">Premium<br/><span style="font-size:10px;font-weight:500;color:#93c5fd">&euro;29,90</span></td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">Lernkapitel</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9;font-size:11px;color:#94a3b8">${lock} 2/Fach</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check} Alle 174</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">5.230+ Wissensfragen</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9;font-size:11px;color:#94a3b8">${lock} 10/Fach</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check} Alle</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">Kognitive Aufgaben</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9;font-size:11px;color:#94a3b8">${lock} 10 Aufgaben</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check} Unbegrenzt</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">Textverst&auml;ndnis</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9;font-size:11px;color:#94a3b8">${lock} 2 Texte</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check} Alle 10</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">Soziales Entscheiden</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9;font-size:11px;color:#94a3b8">${lock} 5 Aufgaben</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check} Alle 100</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">MedAT-Simulation</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${cross}</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check}</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155;border-bottom:1px solid #f1f5f9">Lernplan & Fortschritt</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${cross}</td>
        <td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f1f5f9">${check}</td>
      </tr>
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#334155">Spaced Repetition & Statistiken</td>
        <td style="padding:10px 8px;text-align:center">${cross}</td>
        <td style="padding:10px 8px;text-align:center">${check}</td>
      </tr>
    </table>
  `;
}

// ── CTA button helper (full-width, with shadow) ──

function ctaButton(text: string, url: string, urgent = false): string {
  const bg = urgent
    ? "background:linear-gradient(135deg,#dc2626 0%,#ef4444 100%)"
    : `background:linear-gradient(135deg,${NAVY_DARK} 0%,${BLUE} 100%)`;
  const shadow = urgent ? "rgba(220,38,38,0.3)" : "rgba(30,58,138,0.25)";
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0" width="100%">
      <tr>
        <td style="${bg};border-radius:12px;text-align:center;box-shadow:0 4px 14px ${shadow}">
          <a href="${url}" style="display:block;padding:16px 32px;color:#ffffff;font-weight:700;font-size:16px;text-decoration:none;font-family:${FONT};letter-spacing:0.01em">${text}</a>
        </td>
      </tr>
    </table>
  `;
}

// ── Countdown badge ──

function countdownBadge(daysUntilExam: number): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
      <tr><td>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,${NAVY_DARK},${BLUE});border-radius:14px;overflow:hidden">
          <tr><td style="padding:28px 24px;text-align:center">
            <div style="font-size:44px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1">${daysUntilExam}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:8px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600">Tage bis zum MedAT</div>
          </td></tr>
        </table>
      </td></tr>
    </table>
  `;
}

// ── Info callout ──

function callout(text: string, type: "info" | "warning" | "success" = "info"): string {
  const colors = {
    info: { bg: "#f0f4ff", border: BLUE, text: NAVY_DARK },
    warning: { bg: "#fef3c7", border: "#f59e0b", text: "#92400e" },
    success: { bg: "#f0fdf4", border: "#16a34a", text: "#166534" },
  };
  const c = colors[type];
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0">
      <tr><td style="background:${c.bg};border-radius:12px;border-left:4px solid ${c.border};padding:16px 20px">
        <p style="margin:0;font-size:14px;color:${c.text};line-height:1.6">${text}</p>
      </td></tr>
    </table>
  `;
}

// ── Template definitions ──

function getEmailTemplate(
  templateId: TemplateId,
  data: TemplateData
): { subject: string; html: string } {
  const name = data.displayName || "MedAT-Bewerber";
  const preiseUrl = `${SITE_URL}/preise`;

  switch (templateId) {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // VERSION 1: VORANKÜNDIGUNG (Sendezeitpunkt: jetzt / 30. März)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    case "launch-announcement":
      return {
        subject: `MedMaster: Wichtige Neuerung am 1. April`,
        html: premiumWrap(
          `
          <!-- Pill badge -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px">
            <tr><td style="background:${NAVY_DARK};border-radius:20px;padding:6px 16px">
              <span style="color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">Wichtige Information</span>
            </td></tr>
          </table>

          <h1 style="font-size:26px;font-weight:800;color:${NAVY_DARK};margin:0 0 8px;letter-spacing:-0.02em;line-height:1.2">MedMaster verl\u00E4sst die Beta-Phase</h1>
          <p style="font-size:15px;color:#64748b;margin:0 0 28px">Was das f\u00FCr deine Vorbereitung bedeutet.</p>

          <p style="margin:0 0 16px">Hallo ${name},</p>

          <p style="margin:0 0 16px">In den letzten Monaten haben wir MedMaster intensiv weiterentwickelt: \u00FCber <strong>5.230 Wissensfragen</strong>, ein vollst\u00E4ndiger Kognitive Aufgaben, Simulationen im Originalformat und ausf\u00FChrliche Lernkapitel f\u00FCr alle vier Fachgebiete.</p>

          <p style="margin:0 0 16px">Ab dem <strong>1. April</strong> starten wir die n\u00E4chste Phase. MedMaster wird zu einem <strong>Freemium-Modell</strong> \u00FCbergehen \u2014 eine Basis-Version bleibt kostenlos, der volle Funktionsumfang wird Premium-Nutzern vorbehalten.</p>

          <!-- What changes section -->
          <h2 style="font-size:16px;font-weight:700;color:${NAVY_DARK};margin:28px 0 16px;text-transform:uppercase;letter-spacing:0.06em">Was sich \u00E4ndert</h2>

          ${freeVsPremium()}

          ${statCards(data.questionsAnswered, data.correctRate)}

          <!-- The offer -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;border-radius:14px;overflow:hidden;border:2px solid #dbeafe">
            <tr><td style="background:linear-gradient(180deg,#f0f4ff 0%,#ffffff 100%);padding:28px 24px;text-align:center">
              <p style="margin:0 0 4px;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;font-weight:600">MedMaster Premium</p>
              <p style="margin:0 0 2px;font-size:40px;font-weight:900;color:${NAVY_DARK};letter-spacing:-0.03em;line-height:1">&euro;29,90</p>
              <p style="margin:0 0 16px;font-size:14px;color:#64748b">Einmalig. Kein Abo. Keine weiteren Kosten.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto">
                <tr>
                  <td style="padding:0 16px;font-size:13px;color:#334155"><span style="color:#16a34a;font-weight:700">&#10003;</span>&nbsp; Alle 5.230+ Fragen</td>
                  <td style="padding:0 16px;font-size:13px;color:#334155"><span style="color:#16a34a;font-weight:700">&#10003;</span>&nbsp; Kognitive Aufgaben</td>
                </tr>
                <tr>
                  <td style="padding:4px 16px 0;font-size:13px;color:#334155"><span style="color:#16a34a;font-weight:700">&#10003;</span>&nbsp; Simulationen</td>
                  <td style="padding:4px 16px 0;font-size:13px;color:#334155"><span style="color:#16a34a;font-weight:700">&#10003;</span>&nbsp; Alle Updates</td>
                </tr>
              </table>
            </td></tr>
          </table>

          ${ctaButton("Jetzt Premium sichern \u2014 \u20AC29,90", preiseUrl)}

          ${callout("<strong>Zum Vergleich:</strong> Andere MedAT-Vorbereitungskurse kosten 200\u2013500\u20AC. MedMaster bietet mehr Fragen, bessere Technologie und kostet einmalig \u20AC29,90.", "info")}

          <p style="margin:24px 0 0;font-size:14px;color:#64748b;line-height:1.6">Der MedAT entscheidet \u00FCber deinen Studienplatz. 16.000 Kandidaten, 1.850 Pl\u00E4tze. Die richtige Vorbereitung macht den Unterschied \u2014 und dieser Unterschied sind oft nur wenige Punkte.</p>

          <p style="margin:16px 0 0;font-size:14px;color:#64748b">Wenn du Fragen hast, antworte einfach auf diese E-Mail. Wir sind f\u00FCr dich da.</p>

          <p style="margin:20px 0 0;font-size:14px;color:#334155"><strong>Dein MedMaster-Team</strong></p>
        `,
          `MedMaster verl\u00E4sst die Beta \u2014 ab 1. April Freemium. Sichere dir jetzt vollen Zugang f\u00FCr \u20AC29,90.`
        ),
      };

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // VERSION 2: GO-LIVE / LETZTE CHANCE (Sendezeitpunkt: 31. März)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    case "launch-golive":
      return {
        subject: `Nur heute: MedMaster Premium 24,90 statt 29,90`,
        html: premiumWrap(
          `
          <!-- Urgency pill -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px">
            <tr><td style="background:#dc2626;border-radius:20px;padding:6px 16px">
              <span style="color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">Letzter Tag</span>
            </td></tr>
          </table>

          <h1 style="font-size:26px;font-weight:800;color:${NAVY_DARK};margin:0 0 8px;letter-spacing:-0.02em;line-height:1.2">Morgen startet die Umstellung</h1>
          <p style="font-size:15px;color:#64748b;margin:0 0 28px">Dein voller Zugang endet heute um Mitternacht.</p>

          <p style="margin:0 0 16px">Hallo ${name},</p>

          <p style="margin:0 0 16px">Wie angek\u00FCndigt geht MedMaster morgen in das neue Freemium-Modell \u00FCber. Ab dem <strong>1. April</strong> stehen dir in der Gratis-Version nur noch <strong>eingeschr\u00E4nkte Inhalte</strong> zur Verf\u00FCgung.</p>

          ${statCards(data.questionsAnswered, data.correctRate)}

          ${
            data.questionsAnswered
              ? `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0">
            <tr><td style="background:linear-gradient(135deg,${NAVY_DARK},${BLUE});border-radius:14px;padding:24px;text-align:center">
              <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:0.08em;font-weight:600">Dein bisheriger Fortschritt</p>
              <p style="margin:0;font-size:16px;color:#ffffff;font-weight:600">${data.questionsAnswered} Fragen beantwortet${data.correctRate ? ` \u2014 ${data.correctRate}% richtig` : ""}</p>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.6)">Bleibt gespeichert. Sofort verf\u00FCgbar nach Premium-Upgrade.</p>
            </td></tr>
          </table>
          `
              : ""
          }

          <!-- Compact comparison -->
          <h2 style="font-size:14px;font-weight:700;color:${NAVY_DARK};margin:28px 0 12px;text-transform:uppercase;letter-spacing:0.06em">Was sich ab morgen \u00E4ndert</h2>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#334155" width="60%">5.230+ Wissensfragen</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#dc2626;text-align:right"><strong>Nur 10/Fach in Gratis</strong></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#334155">Lernkapitel (174 Unterkapitel)</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#dc2626;text-align:right"><strong>Nur 2 Kapitel/Fach</strong></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#334155">Kognitive Aufgaben (unbegrenzt)</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#dc2626;text-align:right"><strong>Nur 10 \u00DCbungen</strong></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#334155">Textverst\u00E4ndnis & Soziales Entscheiden</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#dc2626;text-align:right"><strong>Stark reduziert</strong></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#334155">MedAT-Simulationen</td>
              <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#dc2626;text-align:right"><strong>Gesperrt</strong></td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:14px;color:#334155">Lernplan, Fortschritt & Statistiken</td>
              <td style="padding:10px 0;font-size:13px;color:#dc2626;text-align:right"><strong>Gesperrt</strong></td>
            </tr>
          </table>

          <!-- Early Bird Price CTA -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;border-radius:14px;overflow:hidden">
            <tr><td style="background:linear-gradient(135deg,${NAVY_DARK},${BLUE});padding:28px 24px;text-align:center">
              <p style="margin:0 0 2px;font-size:12px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:0.1em;font-weight:600">Early-Bird-Preis</p>
              <p style="margin:0 0 0;font-size:16px;color:rgba(255,255,255,0.5);text-decoration:line-through">&euro;29,90</p>
              <p style="margin:0 0 4px;font-size:44px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1">&euro;24,90</p>
              <p style="margin:0 0 4px;font-size:14px;color:#93c5fd;font-weight:600">Du sparst &euro;5 als Early Bird</p>
              <p style="margin:0 0 16px;font-size:13px;color:rgba(255,255,255,0.6)">Einmalig \u2014 kein Abo \u2014 voller Zugang bis zum MedAT und dar\u00FCber hinaus</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto">
                <tr><td style="background:#ffffff;border-radius:10px;text-align:center">
                  <a href="${preiseUrl}" style="display:block;padding:14px 40px;color:${NAVY_DARK};font-weight:700;font-size:16px;text-decoration:none;font-family:${FONT}">Jetzt Early Bird sichern</a>
                </td></tr>
              </table>
            </td></tr>
          </table>

          ${callout("<strong>Early-Bird-Vorteil:</strong> Wer sich bis zum 1. April f\u00FCr Premium entscheidet, zahlt nur \u20AC24,90 statt \u20AC29,90. Das Angebot gilt nur f\u00FCr bestehende Nutzer.", "success")}

          <p style="margin:0 0 16px;font-size:14px;color:#64748b;line-height:1.6;text-align:center"><em>16.000 Kandidaten. 1.850 Pl\u00E4tze. Der Unterschied sind oft nur wenige Punkte.</em></p>

          <p style="margin:16px 0 0;font-size:14px;color:#64748b">Fragen? Antworte einfach auf diese E-Mail.</p>
          <p style="margin:12px 0 0;font-size:14px;color:#334155"><strong>Dein MedMaster-Team</strong></p>
        `,
          `Letzter Tag: Early-Bird-Preis \u20AC24,90 statt \u20AC29,90. Spare \u20AC5 als bestehender Nutzer.`
        ),
      };

    case "trial-ending-7d":
      return {
        subject: `${name}, ab 1. April nur noch limitierter Zugang`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Noch 7 Tage voller Zugang</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 16px">Am <strong>1. April</strong> endet der komplette Gratis-Zugang zu MedMaster. Danach stehen dir nur noch <strong>stark reduzierte Inhalte</strong> zur Verf\u00FCgung:</p>
          ${freeVsPremium()}
          ${statCards(data.questionsAnswered, data.correctRate)}
          <p style="margin:0 0 8px">F\u00FCr einmalig <strong>&euro;29,90</strong> beh\u00E4ltst du vollen Zugang zu allem &mdash; kein Abo, keine versteckten Kosten. Eine Zahlung, fertig.</p>
          ${ctaButton("Jetzt Premium sichern", preiseUrl)}
          <p style="color:#64748b;font-size:13px;margin:0">Viel Erfolg beim Lernen!</p>
        `,
          "Ab 1. April nur noch eingeschr\u00E4nkter Zugang \u2014 jetzt Premium sichern"
        ),
      };

    case "trial-ending-3d":
      return {
        subject: `Noch 72h voller Zugang - ab 1. April wird reduziert`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">72 Stunden bis zur Umstellung</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 16px">Am <strong>1. April</strong> wird dein MedMaster-Zugang auf die <strong>Gratis-Version</strong> umgestellt. Das bedeutet: nur noch 2 Unterkapitel pro Fach, 10 Fragen pro Fach und 10 kognitive Aufgaben statt des vollen Umfangs.</p>
          ${statCards(data.questionsAnswered, data.correctRate)}
          ${data.questionsAnswered ? callout(`<strong>Dein Fortschritt bleibt gespeichert</strong> \u2014 ${data.questionsAnswered} Fragen beantwortet${data.correctRate ? `, ${data.correctRate}% richtig` : ""}. Nach dem Upgrade hast du sofort wieder Zugriff.`, "info") : ""}
          <p style="margin:0 0 8px">Einmalig <strong>&euro;29,90</strong> \u2014 kein Abo, keine versteckten Kosten.</p>
          ${ctaButton("Vollen Zugang behalten", preiseUrl)}
        `,
          "Nur noch 72 Stunden voller MedMaster-Zugang"
        ),
      };

    case "trial-ending-today":
      return {
        subject: `Letzter Tag: Ab morgen nur noch limitierter Zugang`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:#dc2626;margin:0 0 24px">Heute ist der letzte Tag</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 16px"><strong>Ab morgen</strong> wird dein Zugang auf die Gratis-Version umgestellt. Hier siehst du, was sich \u00E4ndert:</p>
          ${freeVsPremium()}
          ${statCards(data.questionsAnswered, data.correctRate)}
          <p style="margin:0 0 8px">Der MedAT kommt \u2014 und mit MedMaster hast du die umfassendste Vorbereitung. <strong>Einmalig &euro;29,90</strong>, kein Abo, kein Kleingedrucktes.</p>
          ${ctaButton("Jetzt freischalten", preiseUrl, true)}
          <p style="color:#64748b;font-size:13px;margin:0">Fragen? Antworte einfach auf diese E-Mail \u2014 wir helfen gerne.</p>
        `,
          "Letzter Tag mit vollem Zugang \u2014 ab morgen eingeschr\u00E4nkt"
        ),
      };

    case "post-trial-day1":
      return {
        subject: `Dein MedMaster-Zugang wurde auf Gratis umgestellt`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Dein Zugang wurde umgestellt</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 16px">Seit heute bist du auf der <strong>Gratis-Version</strong> von MedMaster. Du kannst weiterhin 2 Kapitel pro Fach und 10 Fragen pro Fach nutzen \u2014 aber der volle Zugang ist jetzt gesperrt.</p>
          ${freeVsPremium()}
          ${data.questionsAnswered ? callout(`<strong>Dein bisheriger Fortschritt ist gesichert:</strong> ${data.questionsAnswered} Fragen beantwortet${data.correctRate ? `, ${data.correctRate}% richtig` : ""}. Er wartet auf dich, sobald du Premium aktivierst.`, "success") : ""}
          ${ctaButton("F\u00FCr \u20AC29,90 alles freischalten", preiseUrl)}
        `,
          "Dein MedMaster-Zugang wurde auf die Gratis-Version umgestellt"
        ),
      };

    case "post-trial-day3":
      return {
        subject: `MedAT-Tipp: Die 3 typischsten Fehler`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">3 Fehler, die 80% der Bewerber machen</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 20px">Aus tausenden beantworteten Fragen sehen wir drei Muster:</p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-radius:14px;overflow:hidden;border:1px solid #fde68a">
            <tr>
              <td style="padding:16px 20px;background:#fffbeb;border-bottom:1px solid #fde68a">
                <strong style="color:#92400e;font-size:14px">1. Zu wenig Chemie \u00FCben</strong>
                <p style="margin:8px 0 0;font-size:13px;color:#78350f;line-height:1.5">Biologie f\u00FChlt sich vertrauter an, aber Chemie bringt die gleichen Punkte.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 20px;background:#fffbeb;border-bottom:1px solid #fde68a">
                <strong style="color:#92400e;font-size:14px">2. Typ-K-Fragen untersch\u00E4tzen</strong>
                <p style="margin:8px 0 0;font-size:13px;color:#78350f;line-height:1.5">Kombinationsaufgaben erfordern eine andere Strategie als Einzelauswahl.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 20px;background:#fffbeb">
                <strong style="color:#92400e;font-size:14px">3. Kognitive Aufgaben nicht regelm\u00E4\u00DFig trainieren</strong>
                <p style="margin:8px 0 0;font-size:13px;color:#78350f;line-height:1.5">Zahlenfolgen und Figurenzusammensetzen verbessern sich nur durch Wiederholung.</p>
              </td>
            </tr>
          </table>

          <p style="margin:0 0 8px">MedMaster hilft dir bei allen drei Punkten \u2014 mit gezieltem \u00DCben und Schw\u00E4chenanalyse.</p>
          ${ctaButton("MedMaster Premium freischalten", preiseUrl)}
        `,
          "Die 3 h\u00E4ufigsten MedAT-Fehler \u2014 und wie du sie vermeidest"
        ),
      };

    case "post-trial-day7":
      return {
        subject: `Dein MedAT-Fortschritt wartet auf dich`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Eine Woche ohne Lernen?</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          ${
            data.questionsAnswered
              ? `<p style="margin:0 0 16px">Vor einer Woche hast du noch flei\u00DFig gelernt \u2014 <strong>${data.questionsAnswered} Fragen</strong> beantwortet. Dieser Fortschritt ist noch da.</p>`
              : `<p style="margin:0 0 16px">Vor einer Woche hast du noch mit MedMaster gelernt. Der MedAT kommt n\u00E4her.</p>`
          }
          ${data.daysUntilExam ? countdownBadge(data.daysUntilExam) : ""}
          <p style="margin:0 0 8px">Einmalig &euro;29,90 \u2014 kein Abo, keine weiteren Kosten. Dein Fortschritt bleibt erhalten.</p>
          ${ctaButton("Jetzt weitermachen", preiseUrl)}
        `,
          "Dein Fortschritt wartet \u2014 der MedAT kommt n\u00E4her"
        ),
      };

    case "welcome":
      return {
        subject: `Willkommen bei MedMaster, ${name}!`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Deine MedAT-Vorbereitung startet jetzt</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          <p style="margin:0 0 20px">Sch\u00F6n, dass du dabei bist! Hier ist, was dich erwartet:</p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px">
            <tr>
              <td width="48%" style="padding:0 6px 8px 0;vertical-align:top">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;border-radius:14px;border:1px solid #dbeafe">
                  <tr><td style="padding:20px 16px">
                    <div style="font-size:28px;margin-bottom:8px">&#128218;</div>
                    <strong style="color:${NAVY_DARK};font-size:14px">5.230+ Wissensfragen</strong>
                    <p style="margin:6px 0 0;font-size:12px;color:#64748b">Bio, Chemie, Physik, Mathe</p>
                  </td></tr>
                </table>
              </td>
              <td width="48%" style="padding:0 0 8px 6px;vertical-align:top">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-radius:14px;border:1px solid #bbf7d0">
                  <tr><td style="padding:20px 16px">
                    <div style="font-size:28px;margin-bottom:8px">&#129513;</div>
                    <strong style="color:#16a34a;font-size:14px">Kognitive Aufgaben</strong>
                    <p style="margin:6px 0 0;font-size:12px;color:#64748b">Zahlenfolgen, Figuren, Wortfl\u00FCssigkeit</p>
                  </td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td width="48%" style="padding:0 6px 0 0;vertical-align:top">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border-radius:14px;border:1px solid #fde68a">
                  <tr><td style="padding:20px 16px">
                    <div style="font-size:28px;margin-bottom:8px">&#128221;</div>
                    <strong style="color:#92400e;font-size:14px">Textverst\u00E4ndnis & Entscheiden</strong>
                    <p style="margin:6px 0 0;font-size:12px;color:#64748b">Lesetexte & Soziale Situationen</p>
                  </td></tr>
                </table>
              </td>
              <td width="48%" style="padding:0 0 0 6px;vertical-align:top">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fdf2f8;border-radius:14px;border:1px solid #fbcfe8">
                  <tr><td style="padding:20px 16px">
                    <div style="font-size:28px;margin-bottom:8px">&#9201;&#65039;</div>
                    <strong style="color:#9d174d;font-size:14px">Simulationen</strong>
                    <p style="margin:6px 0 0;font-size:12px;color:#64748b">Originalgetreue MedAT-\u00DCbungen</p>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>

          ${callout("<strong>Tipp:</strong> Starte mit den Wissensfragen \u2014 dort lernst du die Grundlagen und kannst sofort Fragen beantworten.", "info")}
          ${ctaButton("Jetzt loslegen", `${SITE_URL}/app/bms`)}
          <p style="color:#64748b;font-size:13px;margin:0">Teste MedMaster kostenlos \u2014 Premium mit allen Features f\u00FCr einmalig &euro;29,90.</p>
        `,
          "Willkommen bei MedMaster \u2014 starte jetzt deine MedAT-Vorbereitung"
        ),
      };

    case "weekly-progress":
      return {
        subject: `Dein MedMaster-Wochenbericht`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Dein Fortschritt diese Woche</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>
          ${statCards(data.questionsAnswered, data.correctRate)}
          ${!data.questionsAnswered ? callout("Diese Woche hast du noch keine Fragen beantwortet. Schon 15 Minuten pro Tag machen einen Unterschied!", "warning") : ""}
          ${data.daysUntilExam ? countdownBadge(data.daysUntilExam) : ""}
          ${ctaButton("Weiterlernen", `${SITE_URL}/app`)}
        `,
          "Dein w\u00F6chentlicher MedMaster-Fortschritt"
        ),
      };

    case "re-engagement":
      return {
        subject: `${name}, der MedAT r\u00FCckt n\u00E4her \u2014 bist du bereit?`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Jeder Tag z\u00E4hlt ab jetzt</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>

          <p style="margin:0 0 16px">Wir haben gemerkt, dass du MedMaster in den letzten Tagen nicht genutzt hast. Kein Vorwurf \u2014 aber eine Erinnerung: <strong>Der MedAT am 4. Juli ist in weniger als 3 Monaten.</strong></p>

          <p style="margin:0 0 16px">Regelm\u00E4\u00DFiges \u00DCben ist der wichtigste Faktor f\u00FCr den Erfolg beim MedAT. Schon <strong>20 Minuten pro Tag</strong> machen einen messbaren Unterschied.</p>

          ${data.questionsAnswered ? `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
            <tr><td style="background:linear-gradient(135deg,${NAVY_DARK},${BLUE});border-radius:14px;padding:24px;text-align:center">
              <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:0.08em;font-weight:600">Dein bisheriger Fortschritt</p>
              <p style="margin:0;font-size:20px;color:#ffffff;font-weight:700">${data.questionsAnswered} Fragen beantwortet${data.correctRate ? ` \u2014 ${data.correctRate}% richtig` : ""}</p>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.6)">Mach weiter, wo du aufgeh\u00F6rt hast.</p>
            </td></tr>
          </table>
          ` : ""}

          <!-- 3 reasons to come back -->
          <h2 style="font-size:14px;font-weight:700;color:${NAVY_DARK};margin:24px 0 12px;text-transform:uppercase;letter-spacing:0.06em">Was dich erwartet</h2>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9">
                <strong style="color:${NAVY_DARK};font-size:14px">5.230+ Wissensfragen</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Bio, Chemie, Physik & Mathe \u2014 im MedAT-Originalformat mit Erkl\u00E4rungen.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9">
                <strong style="color:${NAVY_DARK};font-size:14px">Kognitive Aufgaben trainieren</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Zahlenfolgen, Figuren, Implikationen & Wortfl\u00FCssigkeit \u2014 unbegrenzt \u00FCben.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0">
                <strong style="color:${NAVY_DARK};font-size:14px">MedAT-Simulationen</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Teste dich unter realistischen Bedingungen \u2014 Zeitdruck inklusive.</p>
              </td>
            </tr>
          </table>

          ${ctaButton("Jetzt weiterlernen", `${SITE_URL}/app`)}

          ${callout("<strong>Tipp:</strong> Starte heute mit nur 10 Fragen. Du wirst \u00FCberrascht sein, wie schnell du wieder drin bist.", "info")}

          <p style="margin:16px 0 0;font-size:14px;color:#64748b">Wir dr\u00FCcken dir die Daumen f\u00FCr den MedAT!</p>
          <p style="margin:12px 0 0;font-size:14px;color:#334155"><strong>Dein MedMaster-Team</strong></p>
        `,
          "Der MedAT r\u00FCckt n\u00E4her \u2014 20 Minuten pro Tag reichen, um den Unterschied zu machen."
        ),
      };

    case "d1-reminder":
      return {
        subject: `${name}, dein erster Schritt wartet auf dich`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Bereit f&uuml;r den ersten Schritt?</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>

          <p style="margin:0 0 16px">Du hast dich gestern bei MedMaster angemeldet &ndash; super! Aber du hast noch keine Frage beantwortet. Kein Problem &ndash; <strong>starte jetzt mit nur 10 Fragen</strong> und du wirst sehen, wie schnell du reinkommst.</p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9">
                <strong style="color:${NAVY_DARK};font-size:14px">&#9989; 10 Minuten reichen</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Starte mit einem kurzen BMS-Quiz &ndash; Bio, Chemie, Physik oder Mathe.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9">
                <strong style="color:${NAVY_DARK};font-size:14px">&#128200; Dein Fortschritt wird gespeichert</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Jede Frage z&auml;hlt &ndash; MedMaster merkt sich, wo du stehst.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0">
                <strong style="color:${NAVY_DARK};font-size:14px">&#128170; Jeden Tag ein bisschen besser</strong>
                <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.5">Regelm&auml;&szlig;iges &Uuml;ben ist der Schl&uuml;ssel zum MedAT-Erfolg.</p>
              </td>
            </tr>
          </table>

          ${ctaButton("Jetzt erste Fragen beantworten", `${SITE_URL}/app/bms`)}

          ${callout("<strong>Tipp:</strong> Wer am ersten Tag startet, bleibt 3x h&auml;ufiger dran. Dein zuk&uuml;nftiges Ich wird dir danken!", "info")}

          <p style="margin:16px 0 0;font-size:14px;color:#64748b">Viel Erfolg beim Lernen!</p>
          <p style="margin:12px 0 0;font-size:14px;color:#334155"><strong>Dein MedMaster-Team</strong></p>
        `,
          "Du hast dich angemeldet &ndash; jetzt fehlt nur noch der erste Schritt."
        ),
      };

    case "streak-risk":
      return {
        subject: `${name}, dein Streak ist in Gefahr! &#128293;`,
        html: premiumWrap(
          `
          <h1 style="font-size:24px;font-weight:800;color:${NAVY_DARK};margin:0 0 24px">Dein Streak ist in Gefahr!</h1>
          <p style="margin:0 0 16px">Hallo ${name},</p>

          <p style="margin:0 0 16px">Du hast bereits mehrere Tage in Folge gelernt &ndash; <strong>lass deinen Streak nicht abreißen!</strong> Schon 5 Minuten reichen, um ihn zu retten.</p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
            <tr><td style="background:linear-gradient(135deg,#ea580c,#f97316);border-radius:14px;padding:28px 24px;text-align:center">
              <div style="font-size:44px;line-height:1">&#128293;</div>
              <p style="margin:12px 0 0;font-size:14px;color:rgba(255,255,255,0.85);font-weight:600">Dein Streak l&auml;uft heute Nacht ab</p>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.65)">Beantworte eine Frage, um ihn zu behalten.</p>
            </td></tr>
          </table>

          ${ctaButton("Streak retten &ndash; jetzt lernen", `${SITE_URL}/app/bms`)}

          ${callout("<strong>Wusstest du?</strong> Wer einen 7-Tage-Streak erreicht, beantwortet im Schnitt 3x mehr Fragen als Gelegenheitsnutzer.", "info")}

          <p style="margin:16px 0 0;font-size:14px;color:#64748b">Bleib dran &ndash; du schaffst das!</p>
          <p style="margin:12px 0 0;font-size:14px;color:#334155"><strong>Dein MedMaster-Team</strong></p>
        `,
          "Dein Lernstreak l&auml;uft heute ab &ndash; 5 Minuten reichen, um ihn zu retten."
        ),
      };
  }
}

// ── Send via IONOS SMTP (denomailer) ──

let lastSendError = "";

async function sendEmail(
  to: string,
  subject: string,
  rawHtml: string,
  fromOverride?: string
): Promise<boolean> {
  lastSendError = "";

  // Minify HTML: collapse whitespace between tags to prevent QP =20 artifacts
  const html = rawHtml
    .replace(/>\s+</g, "><")
    .replace(/\n\s*/g, "")
    .replace(/\s{2,}/g, " ");

  if (!SMTP_USER || !SMTP_PASS) {
    lastSendError = "SMTP_USER or SMTP_PASS not set";
    return false;
  }

  const client = new SMTPClient({
    connection: {
      hostname: "smtp.ionos.de",
      port: 465,
      tls: true,
      auth: {
        username: SMTP_USER,
        password: SMTP_PASS,
      },
    },
  });

  try {
    await client.send({
      from: fromOverride || FROM_EMAIL,
      to,
      subject,
      html,
    });
    return true;
  } catch (err) {
    lastSendError = err instanceof Error ? err.message : String(err);
    console.error("SMTP send error:", lastSendError);
    return false;
  } finally {
    await client.close();
  }
}

// ── Log email sends ──

async function logEmail(userId: string, templateId: string, email: string) {
  await supabase.from("email_logs").insert({
    user_id: userId,
    template_id: templateId,
    recipient_email: email,
    sent_at: new Date().toISOString(),
  });
}

async function wasAlreadySent(userId: string, templateId: string): Promise<boolean> {
  const { data } = await supabase
    .from("email_logs")
    .select("id")
    .eq("user_id", userId)
    .eq("template_id", templateId)
    .limit(1);
  return (data?.length ?? 0) > 0;
}

// ── Main handler ──

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const body = await req.json();
    const { action } = body;

    // Auth: require service role header OR body secret for broadcast
    const authHeader = req.headers.get("Authorization");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const emailSecret = Deno.env.get("EMAIL_FUNCTION_SECRET") || "";
    const headerOk = authHeader === `Bearer ${emailSecret || serviceRoleKey}`;
    const broadcastSecret = Deno.env.get("BROADCAST_SECRET") || "";
    const bodySecretOk = broadcastSecret !== "" && body.secret === broadcastSecret;
    if (!headerOk && !bodySecretOk) {
      return new Response("Unauthorized", { status: 401 });
    }

    switch (action) {
      // ── Send single email ──
      case "send": {
        const { userId, templateId, templateData } = body;
        if (!userId || !templateId || !templateData?.email) {
          return new Response(JSON.stringify({ error: "Missing userId, templateId, or email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (!isValidEmail(templateData.email)) {
          return new Response(JSON.stringify({ error: "Invalid email format" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (await wasAlreadySent(userId, templateId)) {
          return new Response(JSON.stringify({ skipped: true, reason: "already_sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }

        const template = getEmailTemplate(templateId, templateData);
        const ok = await sendEmail(templateData.email, template.subject, template.html);

        if (ok) await logEmail(userId, templateId, templateData.email);

        return new Response(JSON.stringify({ sent: ok, ...(ok ? {} : { error: lastSendError }) }), {
          status: ok ? 200 : 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      // ── Broadcast to all free-tier users ──
      case "broadcast": {
        const { templateId } = body;
        if (!templateId) {
          return new Response(JSON.stringify({ error: "Missing templateId" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Fetch ALL users (listUsers has a default limit of 50, paginate to get all)
        let allUsers: { id: string; email?: string }[] = [];
        let page = 1;
        while (true) {
          const { data: batch, error: batchErr } = await supabase.auth.admin.listUsers({
            page,
            perPage: 100,
          });
          if (batchErr) {
            console.error("Failed to list users:", batchErr);
            return new Response(JSON.stringify({ error: "Failed to list users" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }
          allUsers = allUsers.concat(batch.users);
          if (batch.users.length < 100) break;
          page++;
        }
        const users = { users: allUsers };

        // Get ALL profiles — send to everyone except confirmed premium users
        const { data: allProfiles } = await supabase
          .from("profiles")
          .select("id, display_name, subscription_tier");

        const premiumIds = new Set(
          (allProfiles || [])
            .filter(
              (p: { subscription_tier: string }) =>
                p.subscription_tier === "premium" || p.subscription_tier === "pro"
            )
            .map((p: { id: string }) => p.id)
        );
        const profileMap = new Map(
          (allProfiles || []).map((p: { id: string; display_name: string }) => [p.id, p])
        );

        let sent = 0;
        let skipped = 0;

        for (const user of users.users) {
          if (premiumIds.has(user.id) || !user.email) {
            skipped++;
            continue;
          }

          if (await wasAlreadySent(user.id, templateId)) {
            skipped++;
            continue;
          }

          const profile = profileMap.get(user.id);
          const { data: stats } = await supabase
            .from("answers")
            .select("is_correct")
            .eq("user_id", user.id);

          const questionsAnswered = stats?.length || 0;
          const correctRate =
            questionsAnswered > 0
              ? Math.round(
                  (stats!.filter((a: { is_correct: boolean }) => a.is_correct).length /
                    questionsAnswered) *
                    100
                )
              : 0;

          const templateData: TemplateData = {
            displayName: (profile as { display_name?: string })?.display_name || "MedAT-Bewerber",
            email: user.email,
            questionsAnswered,
            correctRate,
          };

          const template = getEmailTemplate(templateId as TemplateId, templateData);
          const ok = await sendEmail(user.email, template.subject, template.html);

          if (ok) {
            await logEmail(user.id, templateId, user.email);
            sent++;
          } else {
            skipped++;
          }

          // Throttle: IONOS allows ~50/hour, so 1 email per 1.5s is safe
          await new Promise((r) => setTimeout(r, 1500));
        }

        // Debug: list users that were skipped and why
        const skippedNoEmail = users.users
          .filter((u: { email?: string }) => !u.email)
          .map((u: { id: string }) => u.id);
        const skippedPremium = users.users
          .filter((u: { id: string; email?: string }) => u.email && premiumIds.has(u.id))
          .map((u: { id: string; email?: string }) => u.email);
        return new Response(
          JSON.stringify({
            sent,
            skipped,
            totalUsers: users.users.length,
            skippedNoEmail: skippedNoEmail.length,
            skippedPremium,
            allEmails: users.users
              .filter((u: { email?: string }) => u.email)
              .map((u: { email?: string }) => u.email)
              .sort(),
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // ── Send raw HTML email (for support replies) ──
      case "send-raw": {
        const { to, subject, html: rawHtml, from } = body;
        if (!to || !subject || !rawHtml) {
          return new Response(JSON.stringify({ error: "Missing to, subject, or html" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (!isValidEmail(to)) {
          return new Response(JSON.stringify({ error: "Invalid recipient email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (!checkRateLimit(`send-raw:${to}`, 10)) {
          return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
            status: 429,
            headers: { "Content-Type": "application/json" },
          });
        }
        const rawOk = await sendEmail(to, subject, rawHtml, from);
        return new Response(JSON.stringify({ sent: rawOk, ...(rawOk ? {} : { error: lastSendError }) }), {
          status: rawOk ? 200 : 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      // ── Delete user account by email ──
      case "delete-user": {
        const { email: delEmail } = body;
        if (!delEmail) {
          return new Response(JSON.stringify({ error: "Missing email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        // Find user by email
        let allU2: { id: string; email?: string }[] = [];
        let pg2 = 1;
        while (true) {
          const { data: b } = await supabase.auth.admin.listUsers({ page: pg2, perPage: 100 });
          if (!b) break;
          allU2 = allU2.concat(b.users);
          if (b.users.length < 100) break;
          pg2++;
        }
        const target = allU2.find((u) => u.email === delEmail);
        if (!target) {
          return new Response(JSON.stringify({ error: "User not found", email: delEmail }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }
        // Delete profile first (cascade), then auth user
        await supabase.from("profiles").delete().eq("id", target.id);
        await supabase.from("answers").delete().eq("user_id", target.id);
        await supabase.from("email_logs").delete().eq("user_id", target.id);
        const { error: delErr } = await supabase.auth.admin.deleteUser(target.id);
        if (delErr) {
          return new Response(JSON.stringify({ error: delErr.message, email: delEmail }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
        return new Response(JSON.stringify({ deleted: true, email: delEmail, userId: target.id }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // ── Debug user counts ──
      case "debug-users": {
        let allU: { id: string; email?: string }[] = [];
        let pg = 1;
        while (true) {
          const { data: b } = await supabase.auth.admin.listUsers({ page: pg, perPage: 100 });
          if (!b) break;
          allU = allU.concat(b.users);
          if (b.users.length < 100) break;
          pg++;
        }
        const { data: profs } = await supabase.from("profiles").select("id, subscription_tier");
        const premC = (profs || []).filter(
          (x: { subscription_tier: string }) =>
            x.subscription_tier === "premium" || x.subscription_tier === "pro"
        ).length;
        const withEm = allU.filter((u) => u.email).length;
        return new Response(
          JSON.stringify({
            totalAuthUsers: allU.length,
            withEmail: withEm,
            totalProfiles: (profs || []).length,
            premiumProfiles: premC,
            eligibleForBroadcast: withEm - premC,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }

      // ── List sent emails ──
      case "logs": {
        const { templateId: tid } = body;
        let query = supabase
          .from("email_logs")
          .select("recipient_email, template_id, sent_at")
          .order("sent_at", { ascending: false })
          .limit(200);
        if (tid) query = query.eq("template_id", tid);
        const { data: logs, error: logErr } = await query;
        if (logErr) {
          return new Response(JSON.stringify({ error: logErr.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
        return new Response(JSON.stringify(logs), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      default:
        return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
    }
  } catch (err) {
    console.error("send-email error:", err);
    return new Response("Internal error", { status: 500 });
  }
});
