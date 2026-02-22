/**
 * TODO: BEFORE LAUNCH
 * =====================
 * This Legal page contains placeholders that MUST be filled in before going live:
 *
 * 1. [DEIN NAME] → Replace with business owner name
 * 2. [ADRESSE] → Replace with business address
 * 3. [UID-NUMMER falls vorhanden] → Replace with UID number if applicable
 *
 * Missing these fields violates Austrian legal requirements (MedienG § 25, ECG § 5).
 * The legal pages will display a red warning in PRODUCTION if these are not updated.
 *
 * Check the Legal.tsx component for the warning banner implementation.
 */

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Scale, Shield, AlertTriangle } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

type Tab = "impressum" | "datenschutz";

const REQUIRED_PLACEHOLDERS = ["[DEIN NAME]", "[ADRESSE]", "[UID-NUMMER"];

export default function Legal() {
  usePageTitle("Impressum & Datenschutz");
  const location = useLocation();
  const [tab, setTab] = useState<Tab>(
    location.pathname === "/datenschutz" ? "datenschutz" : "impressum"
  );
  const [hasMissingPlaceholders, setHasMissingPlaceholders] = useState(false);

  useEffect(() => {
    setTab(location.pathname === "/datenschutz" ? "datenschutz" : "impressum");
  }, [location.pathname]);

  useEffect(() => {
    // Check for missing placeholders in the document
    const pageContent = document.body.innerText;
    const hasMissing = REQUIRED_PLACEHOLDERS.some(placeholder => pageContent.includes(placeholder));
    setHasMissingPlaceholders(hasMissing);
  }, [tab]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dev/Production Warning */}
      {import.meta.env.DEV ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-0">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-yellow-800">DEV MODE: Gesetzliche Angaben unvollständig</p>
              <p className="text-xs text-yellow-700 mt-1">
                Bitte alle [PLATZHALTER] mit echten Daten ausfüllen, bevor die Seite live geht:
                Name, Adresse, UID-Nummer
              </p>
            </div>
          </div>
        </div>
      ) : hasMissingPlaceholders ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-0">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-800">FEHLER: Gesetzliche Angaben unvollständig</p>
              <p className="text-xs text-red-700 mt-1">
                Diese Seite enthält noch Platzhalter. Bitte kontaktieren Sie den Administrator.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-lg font-bold text-gray-900">MedMaster</span>
        </div>
      </header>

      {/* Tab bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 flex gap-1">
          <button
            onClick={() => setTab("impressum")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "impressum"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Scale className="w-4 h-4" /> Impressum
          </button>
          <button
            onClick={() => setTab("datenschutz")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "datenschutz"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield className="w-4 h-4" /> Datenschutz
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {tab === "impressum" ? <Impressum /> : <Datenschutz />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MedMaster &mdash; Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}

/* ───────────────────────── IMPRESSUM ───────────────────────── */

function Impressum() {
  return (
    <article className="prose prose-gray prose-sm max-w-none">
      <h1>Impressum</h1>
      <p className="text-xs text-gray-400 uppercase tracking-wide">
        Angaben gemäß § 25 MedienG und § 5 ECG
      </p>

      <h2>Medieninhaber und Herausgeber</h2>
      <table className="not-prose text-sm w-full">
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600 w-40">Name</td>
            <td className="py-2 text-gray-900">[DEIN NAME]</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">Adresse</td>
            <td className="py-2 text-gray-900">[ADRESSE]</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">E-Mail</td>
            <td className="py-2 text-gray-900">support@medmaster.at</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">UID-Nr.</td>
            <td className="py-2 text-gray-900">[UID-NUMMER falls vorhanden]</td>
          </tr>
        </tbody>
      </table>

      <h2>Unternehmensgegenstand</h2>
      <p>Online-Lernplattform zur Vorbereitung auf den MedAT (Medizinischer Aufnahmetest).</p>

      <h2>Kontakt</h2>
      <p>
        Bei Fragen, Anregungen oder Beschwerden erreichen Sie uns unter{" "}
        <a href="mailto:support@medmaster.at">support@medmaster.at</a>.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
        wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG
        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        <strong>Hinweis:</strong> Bitte ersetze die Platzhalter [DEIN NAME], [ADRESSE] und
        [UID-NUMMER] mit deinen echten Daten bevor die Seite live geht.
      </div>
    </article>
  );
}

/* ─────────────────── DATENSCHUTZERKLÄRUNG ──────────────────── */

function Datenschutz() {
  return (
    <article className="prose prose-gray prose-sm max-w-none">
      <h1>Datenschutzerklärung</h1>
      <p className="text-xs text-gray-400 uppercase tracking-wide">
        Stand: {new Date().toLocaleDateString("de-AT", { month: "long", year: "numeric" })}
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        [DEIN NAME]<br />
        [ADRESSE]<br />
        E-Mail: <a href="mailto:support@medmaster.at">support@medmaster.at</a>
      </p>

      <h2>2. Erhobene Daten</h2>
      <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
      <ul>
        <li><strong>Kontodaten:</strong> E-Mail-Adresse, Name (bei Registrierung)</li>
        <li><strong>Lernfortschritt:</strong> Abgeschlossene Kapitel, Spaced-Repetition-Daten</li>
        <li><strong>Quiz-Ergebnisse:</strong> Antworten, Scores, Zeitstempel</li>
        <li><strong>Nutzungsdaten:</strong> Aktivitätsprotokoll (Lernminuten, Fragen pro Tag)</li>
        <li><strong>Zahlungsdaten:</strong> Werden ausschließlich von Stripe verarbeitet (siehe Abschnitt 6)</li>
      </ul>

      <h2>3. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von{" "}
        <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung). Die Datenverarbeitung
        ist erforderlich, um die Funktionalität der Lernplattform bereitzustellen und den
        Lernfortschritt zu speichern.
      </p>

      <h2>4. Speicherung und Hosting</h2>
      <p>
        Ihre Daten werden auf Servern von <strong>Supabase</strong> gespeichert, die sich in der
        EU-Region <strong>Frankfurt (eu-west)</strong> befinden. Supabase entspricht den
        Anforderungen der DSGVO. Die Daten werden für die Dauer der Nutzung des Dienstes
        gespeichert und nach Löschung des Kontos innerhalb von 30 Tagen endgültig entfernt.
      </p>

      <h2>5. Cookies und lokale Speicherung</h2>
      <p>
        MedMaster verwendet <strong>keine Tracking-Cookies</strong> und keine
        Analyse-Tools von Drittanbietern. Wir setzen ausschließlich{" "}
        <strong>technisch notwendige lokale Speicherung</strong> (localStorage) ein, um den
        App-Zustand (z.B. Lernfortschritt, Theme-Einstellung) lokal auf Ihrem Gerät
        zwischenzuspeichern. Diese Daten werden nicht an Dritte übermittelt.
      </p>

      <h2>6. Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt <strong>nicht</strong>, mit folgender Ausnahme:
      </p>
      <ul>
        <li>
          <strong>Stripe, Inc.</strong> — Für die Abwicklung von Zahlungen und Abonnements.
          Stripe verarbeitet Zahlungsdaten (Kreditkartendaten, Rechnungsadresse) direkt
          und unterliegt eigenen Datenschutzrichtlinien:{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/privacy
          </a>
        </li>
      </ul>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben gemäß DSGVO folgende Rechte:</p>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15 DSGVO) — Welche Daten über Sie gespeichert sind</li>
        <li><strong>Berichtigung</strong> (Art. 16 DSGVO) — Korrektur unrichtiger Daten</li>
        <li><strong>Löschung</strong> (Art. 17 DSGVO) — Entfernung Ihrer Daten</li>
        <li><strong>Einschränkung</strong> (Art. 18 DSGVO) — Einschränkung der Verarbeitung</li>
        <li><strong>Datenportabilität</strong> (Art. 20 DSGVO) — Export Ihrer Daten in maschinenlesbarem Format</li>
        <li><strong>Widerspruch</strong> (Art. 21 DSGVO) — Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter{" "}
        <a href="mailto:support@medmaster.at">support@medmaster.at</a>.
      </p>

      <h2>8. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen:
      </p>
      <p>
        <strong>Österreichische Datenschutzbehörde</strong><br />
        Barichgasse 40–42, 1030 Wien<br />
        Telefon: +43 1 52 152-0<br />
        E-Mail: dsb@dsb.gv.at<br />
        Website:{" "}
        <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
          www.dsb.gv.at
        </a>
      </p>

      <h2>9. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie
        an geänderte Rechtslagen oder bei Änderungen des Dienstes anzupassen. Die aktuelle
        Fassung finden Sie stets auf dieser Seite.
      </p>

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        <strong>Hinweis:</strong> Bitte ersetze die Platzhalter [DEIN NAME] und [ADRESSE]
        mit deinen echten Daten bevor die Seite live geht.
      </div>
    </article>
  );
}
