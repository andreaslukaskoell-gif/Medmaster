/**
 * Legal pages: Impressum (§ 25 MedienG, § 5 ECG) and Datenschutz (DSGVO).
 * Name, address and UID are set below; update them to your actual data if needed.
 */

import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, Shield, FileText } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

type Tab = "impressum" | "datenschutz" | "agb";

function tabFromPath(path: string): Tab {
  if (path === "/datenschutz") return "datenschutz";
  if (path === "/agb") return "agb";
  return "impressum";
}

export default function Legal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>(() => tabFromPath(location.pathname));

  usePageTitle(tab === "agb" ? "AGB" : tab === "datenschutz" ? "Datenschutz" : "Impressum");

  useEffect(() => {
    const t = setTimeout(() => setTab(tabFromPath(location.pathname)), 0);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const handleTab = (t: Tab) => {
    setTab(t);
    const path = t === "impressum" ? "/impressum" : t === "datenschutz" ? "/datenschutz" : "/agb";
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="max-w-3xl mx-auto px-4 flex gap-1 flex-wrap">
          <button
            onClick={() => handleTab("impressum")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "impressum"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Scale className="w-4 h-4" /> Impressum
          </button>
          <button
            onClick={() => handleTab("datenschutz")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "datenschutz"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield className="w-4 h-4" /> Datenschutz
          </button>
          <button
            onClick={() => handleTab("agb")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "agb"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <FileText className="w-4 h-4" /> AGB
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {tab === "impressum" && <Impressum />}
        {tab === "datenschutz" && <Datenschutz />}
        {tab === "agb" && <AGB />}
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
            <td className="py-2 text-gray-900">MedMaster</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">Adresse</td>
            <td className="py-2 text-gray-900">1010 Wien, Österreich</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">E-Mail</td>
            <td className="py-2 text-gray-900">support@medmaster.at</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 pr-4 font-medium text-gray-600">UID-Nr.</td>
            <td className="py-2 text-gray-900">
              Nicht UID-pflichtig (Kleinunternehmer gem. § 6 Abs. 1 Z 27 UStG 1994)
            </td>
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
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als
        Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
        der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
        des jeweiligen Autors bzw. Erstellers.
      </p>
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
        MedMaster
        <br />
        1010 Wien, Österreich
        <br />
        E-Mail: <a href="mailto:support@medmaster.at">support@medmaster.at</a>
      </p>

      <h2>2. Erhobene Daten</h2>
      <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
      <ul>
        <li>
          <strong>Kontodaten:</strong> E-Mail-Adresse, Name (bei Registrierung)
        </li>
        <li>
          <strong>Lernfortschritt:</strong> Abgeschlossene Kapitel, Spaced-Repetition-Daten
        </li>
        <li>
          <strong>Quiz-Ergebnisse:</strong> Antworten, Scores, Zeitstempel
        </li>
        <li>
          <strong>Nutzungsdaten:</strong> Aktivitätsprotokoll (Lernminuten, Fragen pro Tag)
        </li>
        <li>
          <strong>Zahlungsdaten:</strong> Werden ausschließlich von Stripe verarbeitet (siehe
          Abschnitt 6)
        </li>
      </ul>

      <h2>3. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von{" "}
        <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung). Die Datenverarbeitung ist
        erforderlich, um die Funktionalität der Lernplattform bereitzustellen und den
        Lernfortschritt zu speichern.
      </p>

      <h2>4. Speicherung und Hosting</h2>
      <p>
        Ihre Daten werden auf Servern von <strong>Supabase</strong> gespeichert, die sich in der
        EU-Region <strong>Frankfurt (eu-west)</strong> befinden. Supabase entspricht den
        Anforderungen der DSGVO. Die Daten werden für die Dauer der Nutzung des Dienstes gespeichert
        und nach Löschung des Kontos innerhalb von 30 Tagen endgültig entfernt.
      </p>

      <h2>5. Cookies und lokale Speicherung</h2>
      <p>
        MedMaster verwendet <strong>keine Tracking-Cookies</strong> und keine Analyse-Tools von
        Drittanbietern. Wir setzen ausschließlich{" "}
        <strong>technisch notwendige lokale Speicherung</strong> (localStorage) ein, um den
        App-Zustand (z.B. Lernfortschritt, Theme-Einstellung) lokal auf Ihrem Gerät
        zwischenzuspeichern. Diese Daten werden nicht an Dritte übermittelt.
      </p>

      <h2>6. Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt <strong>nicht</strong>, mit folgender
        Ausnahme:
      </p>
      <ul>
        <li>
          <strong>Stripe, Inc.</strong> — Für die Abwicklung von Zahlungen und Abonnements. Stripe
          verarbeitet Zahlungsdaten (Kreditkartendaten, Rechnungsadresse) direkt und unterliegt
          eigenen Datenschutzrichtlinien:{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/privacy
          </a>
        </li>
      </ul>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben gemäß DSGVO folgende Rechte:</p>
      <ul>
        <li>
          <strong>Auskunft</strong> (Art. 15 DSGVO) — Welche Daten über Sie gespeichert sind
        </li>
        <li>
          <strong>Berichtigung</strong> (Art. 16 DSGVO) — Korrektur unrichtiger Daten
        </li>
        <li>
          <strong>Löschung</strong> (Art. 17 DSGVO) — Entfernung Ihrer Daten
        </li>
        <li>
          <strong>Einschränkung</strong> (Art. 18 DSGVO) — Einschränkung der Verarbeitung
        </li>
        <li>
          <strong>Datenportabilität</strong> (Art. 20 DSGVO) — Export Ihrer Daten in
          maschinenlesbarem Format
        </li>
        <li>
          <strong>Widerspruch</strong> (Art. 21 DSGVO) — Widerspruch gegen die Verarbeitung
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter{" "}
        <a href="mailto:support@medmaster.at">support@medmaster.at</a>.
      </p>

      <h2>8. Beschwerderecht</h2>
      <p>Sie haben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen:</p>
      <p>
        <strong>Österreichische Datenschutzbehörde</strong>
        <br />
        Barichgasse 40–42, 1030 Wien
        <br />
        Telefon: +43 1 52 152-0
        <br />
        E-Mail: dsb@dsb.gv.at
        <br />
        Website:{" "}
        <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
          www.dsb.gv.at
        </a>
      </p>

      <h2>9. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte
        Rechtslagen oder bei Änderungen des Dienstes anzupassen. Die aktuelle Fassung finden Sie
        stets auf dieser Seite.
      </p>
    </article>
  );
}

/* ─────────────────── ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB) ──────────────────── */

function AGB() {
  return (
    <article className="prose prose-gray prose-sm max-w-none">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="text-xs text-gray-400 uppercase tracking-wide">
        Stand: {new Date().toLocaleDateString("de-AT", { month: "long", year: "numeric" })}
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Lernplattform
        MedMaster („Dienst“) unter der Domain medmaster.at sowie verbundener Dienste.
        Vertragspartner ist der Nutzer bzw. die Nutzerin („Nutzer/in“) einerseits und der Betreiber
        MedMaster andererseits. Mit der Registrierung bzw. Nutzung des Dienstes akzeptieren Sie
        diese AGB.
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>
        MedMaster bietet eine webbasierte Lernplattform zur Vorbereitung auf den MedAT
        (Medizinischer Aufnahmetest). Der Umfang der Leistungen (z.B. freie vs. kostenpflichtige
        Funktionen) ergibt sich aus der jeweiligen Tarifbeschreibung auf der Website. Der Betreiber
        behält sich vor, Inhalte und Funktionen im Rahmen der technischen Entwicklung zu erweitern
        oder einzuschränken, soweit die Hauptleistung nicht entfällt.
      </p>

      <h2>3. Registrierung und Konto</h2>
      <p>
        Zur Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Sie verpflichten
        sich, wahrheitsgemäße Angaben zu machen und Ihr Passwort geheim zu halten. Das Konto ist
        persönlich und nicht übertragbar. Der Betreiber ist berechtigt, Konten bei Verstößen gegen
        diese AGB oder bei Missbrauch zu sperren oder zu löschen.
      </p>

      <h2>4. Kostenlose und kostenpflichtige Nutzung</h2>
      <p>
        Ein Teil des Dienstes kann kostenlos genutzt werden. Für erweiterte Funktionen (z.B.
        Standard- oder Pro-Tarif) gelten die zum Zeitpunkt des Abschlusses auf der Website
        angegebenen Preise und Laufzeiten. Die Bezahlung erfolgt über Stripe; es gelten die
        Zahlungsbedingungen des jeweiligen Tarifs (monatlich/jährlich, automatische Verlängerung
        sofern nicht gekündigt).
      </p>

      <h2>5. Widerruf und Kündigung</h2>
      <p>
        <strong>Verbraucher:</strong> Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen
        vom Vertrag zurückzutreten (Widerrufsrecht). Die Frist beginnt mit dem Vertragsschluss. Zur
        Wahrung der Frist genügt die rechtzeitige Absendung der Mitteilung (z.B. per E-Mail an
        support@medmaster.at). Bei vor Vertragsende in Anspruch genommenen Leistungen kann ein
        Wertersatz geschuldet sein.
      </p>
      <p>
        <strong>Kündigung:</strong> Abonnements können jederzeit zum Ende der laufenden
        Abrechnungsperiode gekündigt werden (z.B. in den Kontoeinstellungen oder per E-Mail). Nach
        Ablauf bleibt der Zugang bis zum Ende der bereits bezahlten Zeit bestehen; eine Verlängerung
        erfolgt nicht.
      </p>

      <h2>6. Haftung</h2>
      <p>
        Der Betreiber haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus
        der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit
        haftet er nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur in
        Höhe des vorhersehbaren, typischerweise eintretenden Schadens. Die Haftung für entgangenen
        Gewinn und mittelbare Schäden ist ausgeschlossen, soweit nicht zwingend gehaftet wird. Die
        Lerninhalte dienen der Vorbereitung; der Betreiber übernimmt keine Gewähr für den Erfolg bei
        der Prüfung.
      </p>

      <h2>7. Urheberrecht und Nutzungsrechte</h2>
      <p>
        Alle Inhalte der Plattform (Texte, Grafiken, Aufgaben, Strukturen) sind urheberrechtlich
        geschützt. Sie erhalten ein nicht ausschließliches, nicht übertragbares Recht zur Nutzung im
        Rahmen des bestimmungsgemäßen Gebrauchs des Dienstes. Eine Weitergabe, Vervielfältigung oder
        gewerbliche Nutzung außerhalb der Plattform ist nicht gestattet.
      </p>

      <h2>8. Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts. Gerichtsstand
        für Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz des Betreibers. Sollte eine
        Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        Änderungen dieser AGB werden auf dieser Seite veröffentlicht; bei wesentlichen Änderungen
        werden registrierte Nutzer per E-Mail informiert.
      </p>
      <p>
        Bei Fragen zu diesen AGB wenden Sie sich an{" "}
        <a href="mailto:support@medmaster.at">support@medmaster.at</a>.
      </p>
    </article>
  );
}
