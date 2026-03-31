import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const SMTP_USER = Deno.env.get("SMTP_USER") || "";
const SMTP_PASS = Deno.env.get("SMTP_PASS") || "";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function sendDeletionConfirmation(email: string, displayName: string): Promise<boolean> {
  if (!SMTP_USER || !SMTP_PASS) return false;

  const client = new SMTPClient({
    connection: {
      hostname: "smtp.ionos.de",
      port: 465,
      tls: true,
      auth: { username: SMTP_USER, password: SMTP_PASS },
    },
  });

  const html = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"/></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#334155;line-height:1.7">
  <div style="text-align:center;margin-bottom:32px">
    <div style="display:inline-block;background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:12px;padding:12px 20px">
      <span style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.02em">MedMaster</span>
    </div>
  </div>
  <h1 style="font-size:22px;font-weight:700;color:#1e3a8a;margin:0 0 20px">Ihr Konto wurde gel&ouml;scht</h1>
  <p>Hallo ${displayName},</p>
  <p>wie gew&uuml;nscht haben wir Ihr Benutzerkonto bei MedMaster (<strong>${email}</strong>) sowie alle damit verbundenen personenbezogenen Daten <strong>dauerhaft gel&ouml;scht</strong>.</p>
  <p>Folgende Daten wurden entfernt:</p>
  <ul style="color:#475569">
    <li>Profil und Einstellungen</li>
    <li>Lernfortschritt und Statistiken</li>
    <li>Antworten und Lesezeichen</li>
    <li>Alle weiteren personenbezogenen Daten</li>
  </ul>
  <p>Die L&ouml;schung ist ab sofort wirksam. Sollten Sie in Zukunft MedMaster erneut nutzen wollen, k&ouml;nnen Sie sich jederzeit mit einem neuen Konto registrieren.</p>
  <p>Falls Sie noch Fragen haben, antworten Sie einfach auf diese E-Mail.</p>
  <p style="margin-top:24px">Mit freundlichen Gr&uuml;&szlig;en,<br/><strong>Das MedMaster-Team</strong></p>
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px"/>
  <p style="font-size:12px;color:#94a3b8;text-align:center">MedMaster &mdash; MedAT-Vorbereitung &mdash; medmaster.at</p>
</body>
</html>`;

  try {
    await client.send({
      from: "MedMaster <welcome@medmaster.at>",
      to: email,
      subject: "Ihr MedMaster-Konto wurde gelöscht",
      html,
    });
    return true;
  } catch (err) {
    console.error("SMTP error:", err);
    return false;
  } finally {
    await client.close();
  }
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Verify the user is authenticated via their JWT
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  // Verify JWT signature via Supabase Auth (cryptographically validated)
  const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const {
    data: { user },
    error: authError,
  } = await userClient.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const userId = user.id;

  const email = user.email || "";

  try {
    // Get display name before deletion
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("display_name")
      .eq("id", userId)
      .single();

    const displayName = profile?.display_name || "MedMaster-Nutzer";

    // Block future signups with this email
    await supabaseAdmin
      .from("deleted_emails")
      .upsert({ email, deleted_at: new Date().toISOString(), reason: "user_requested" });

    // Delete the auth user (cascades to all related tables via ON DELETE CASCADE)
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (deleteError) {
      console.error("Failed to delete user:", deleteError);
      return new Response(JSON.stringify({ error: "Fehler beim Löschen des Kontos" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send confirmation email (best-effort, don't fail if SMTP is down)
    const emailSent = await sendDeletionConfirmation(email, displayName);

    return new Response(JSON.stringify({ deleted: true, emailSent }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("delete-account error:", err);
    return new Response("Internal error", { status: 500 });
  }
});
