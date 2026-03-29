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
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            to="/"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-lg font-bold text-[var(--foreground)]">MedMaster</span>
        </div>
      </header>

      {/* Tab bar */}
      <div className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 flex gap-1 flex-wrap">
          <button
            onClick={() => handleTab("impressum")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "impressum"
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Scale className="w-4 h-4" /> Impressum
          </button>
          <button
            onClick={() => handleTab("datenschutz")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "datenschutz"
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Shield className="w-4 h-4" /> Datenschutz
          </button>
          <button
            onClick={() => handleTab("agb")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "agb"
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
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
      <footer className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} MedMaster &mdash; Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}

/* ───────────────────────── IMPRESSUM ───────────────────────── */

function Impressum() {
  return (
    <article className="prose prose-sm dark:prose-invert max-w-none">
      <h1>Impressum</h1>
      <p className="text-xs text-[var(--muted)] uppercase tracking-wide">
        Angaben gemäß § 25 MedienG und § 5 ECG
      </p>

      <h2>Medieninhaber und Herausgeber</h2>
      <table className="not-prose text-sm w-full">
        <tbody>
          <tr className="border-b border-[var(--border)]">
            <td className="py-2 pr-4 font-medium text-[var(--muted)] w-40">Name</td>
            <td className="py-2 text-[var(--foreground)]">Dr. Andreas Lukas Köll</td>
          </tr>
          <tr className="border-b border-[var(--border)]">
            <td className="py-2 pr-4 font-medium text-[var(--muted)]">Adresse</td>
            <td className="py-2 text-[var(--foreground)]">
              Laudongasse 22/4, 1080 Wien, Österreich
            </td>
          </tr>
          <tr className="border-b border-[var(--border)]">
            <td className="py-2 pr-4 font-medium text-[var(--muted)]">E-Mail</td>
            <td className="py-2 text-[var(--foreground)]">support@medmaster.at</td>
          </tr>
        </tbody>
      </table>

      <h2>Unternehmensgegenstand</h2>
      <p>Online-Lernplattform zur Vorbereitung auf den MedAT (Medizinischer Aufnahmetest).</p>

      <h2>Anwendbare Gesetze</h2>
      <p>
        Gewerbeordnung (GewO), E-Commerce-Gesetz (ECG), Mediengesetz (MedienG),
        Datenschutz-Grundverordnung (DSGVO), Konsumentenschutzgesetz (KSchG), Fern- und
        Auswärtsgeschäfte-Gesetz (FAGG).
      </p>

      <h2>Aufsichtsbehörde</h2>
      <p>
        Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien (
        <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
          www.dsb.gv.at
        </a>
        ).
      </p>

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
        allgemeinen Gesetzen verantwortlich. Es wird kein bestimmter Lern- oder Prüfungserfolg
        garantiert.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
        der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
        des jeweiligen Autors bzw. Erstellers. Jeder festgestellte Urheberrechtsverstoß wird
        zivilrechtlich und gegebenenfalls strafrechtlich verfolgt.
      </p>

      <h2>Online-Streitbeilegung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        . Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </article>
  );
}

/* ─────────────────── DATENSCHUTZERKLÄRUNG ──────────────────── */

function Datenschutz() {
  return (
    <article className="prose prose-sm dark:prose-invert max-w-none">
      <h1>Datenschutzerklärung</h1>
      <p className="text-xs text-[var(--muted)] uppercase tracking-wide">
        Stand: {new Date().toLocaleDateString("de-AT", { month: "long", year: "numeric" })}
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Dr. Andreas Lukas Köll
        <br />
        Laudongasse 22/4, 1080 Wien, Österreich
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
        MedMaster setzt <strong>technisch notwendige lokale Speicherung</strong> (localStorage) ein,
        um den App-Zustand (z.B. Lernfortschritt, Theme-Einstellung, Anmeldestatus) lokal auf Ihrem
        Gerät zwischenzuspeichern. Diese Daten werden nicht an Dritte übermittelt.
      </p>
      <p>
        Darüber hinaus verwenden wir — <strong>nur mit Ihrer ausdrücklichen Einwilligung</strong>{" "}
        (Cookie-Banner) — folgende optionale Dienste:
      </p>
      <ul>
        <li>
          <strong>Analyse-Cookies:</strong> PostHog (EU-Server, posthog.com) und eigene
          Nutzungsstatistiken zur Verbesserung des Lernerlebnisses.
        </li>
        <li>
          <strong>Marketing-Cookies:</strong> Google Ads (google.com) für Conversion-Tracking.
        </li>
      </ul>
      <p>
        Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Cookies löschen
        oder in den Einstellungen die Kategorie deaktivieren. Ohne Einwilligung werden keine
        Analyse- oder Marketing-Cookies gesetzt.
      </p>

      <h2>6. Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur in folgenden Fällen und nur mit Ihrer
        Einwilligung (sofern nicht technisch notwendig):
      </p>
      <ul>
        <li>
          <strong>Stripe, Inc.</strong> — Zahlungsabwicklung. Stripe verarbeitet Zahlungsdaten
          direkt:{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/privacy
          </a>
        </li>
        <li>
          <strong>PostHog (EU)</strong> — Analyse (nur mit Einwilligung):{" "}
          <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">
            posthog.com/privacy
          </a>
        </li>
        <li>
          <strong>Google Ireland Ltd.</strong> — Google Ads Conversion-Tracking (nur mit
          Einwilligung):{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>Sentry (Functional Software Inc.)</strong> — Fehlerverfolgung zur
          Qualitätssicherung (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO):{" "}
          <a href="https://sentry.io/privacy" target="_blank" rel="noopener noreferrer">
            sentry.io/privacy
          </a>
        </li>
        <li>
          <strong>Supabase, Inc.</strong> — Hosting und Datenbank (Auftragsverarbeitung):{" "}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
            supabase.com/privacy
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
    <article className="prose prose-sm dark:prose-invert max-w-none">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="text-xs text-[var(--muted)] uppercase tracking-wide">
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

      <h2>3. Zustandekommen des Vertrags</h2>
      <p>
        Der Vertrag kommt durch Abschluss des Registrierungsprozesses auf medmaster.at zustande. Mit
        Klick auf „Konto erstellen" geben Sie ein verbindliches Angebot ab. Die automatisch
        generierte Bestätigungs-E-Mail stellt die Annahme dar und begründet den Vertrag. Die AGB
        sowie Ihre Bestelldaten werden Ihnen per E-Mail zugesandt.
      </p>

      <h2>4. Registrierung und Konto</h2>
      <p>
        Zur Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Sie verpflichten
        sich, wahrheitsgemäße Angaben zu machen und Ihr Passwort geheim zu halten. Das Konto ist
        persönlich und nicht übertragbar. Eine Weitergabe der Zugangsdaten an Dritte ist untersagt
        und führt zur sofortigen Sperrung des Kontos. Sie dürfen Ihr Konto auf mehreren eigenen
        Geräten (PC, Smartphone, Tablet) nutzen. Der Betreiber ist berechtigt, Konten bei Verstößen
        gegen diese AGB oder bei Missbrauch zu sperren oder zu löschen.
      </p>

      <h2>5. Preise und Zahlung</h2>
      <p>
        Ein Teil des Dienstes kann kostenlos genutzt werden. Für den vollen Funktionsumfang gilt der
        zum Zeitpunkt des Kaufs auf der Website angegebene einmalige Preis inkl. gesetzlicher
        Umsatzsteuer. Die Bezahlung erfolgt über Stripe. Der Zugang wird nach erfolgreicher Zahlung
        sofort freigeschaltet und ist zeitlich unbegrenzt gültig. Pro Buchung kann nur ein Gutschein
        eingelöst werden.
      </p>

      <h2>6. Nutzungsbedingungen und Urheberrecht</h2>
      <p>
        Alle bereitgestellten Inhalte (Fragen, Texte, Grafiken, Übungen, Software) sind
        urheberrechtlich geschützt und ausschließlich über den erworbenen Zugang im Rahmen des
        bestimmungsgemäßen Gebrauchs nutzbar. Dem Nutzer wird ein einfaches, nicht übertragbares,
        nicht unterlizenzierbares Nutzungsrecht für die Dauer des Vertragsverhältnisses eingeräumt.
      </p>
      <p>Insbesondere ist untersagt:</p>
      <ul>
        <li>
          Das Herunterladen, Reproduzieren, Weitergeben oder sonstige Verwertung der Inhalte
          außerhalb der Plattform;
        </li>
        <li>Das automatisierte Auslesen, Crawling oder Scraping der Inhalte;</li>
        <li>Die Verwendung der Inhalte zum Training von KI- oder Machine-Learning-Modellen;</li>
        <li>
          Die gewerbliche Nutzung, der Weiterverkauf oder die öffentliche Zugänglichmachung der
          Inhalte.
        </li>
      </ul>
      <p>
        Verstöße werden zivilrechtlich verfolgt. Schadenersatzansprüche in Höhe von bis zu EUR
        10.000,- pro Verstoß bleiben vorbehalten. Bei Verdacht auf systematische
        Urheberrechtsverletzungen wird Strafanzeige erstattet.
      </p>

      <h2>7. Widerruf und Kündigung</h2>
      <p>
        <strong>Widerrufsrecht (Verbraucher gem. FAGG):</strong> Sie haben das Recht, binnen 14
        Tagen ohne Angabe von Gründen vom Vertrag zurückzutreten. Die Frist beginnt mit dem
        Vertragsschluss. Zur Wahrung der Frist genügt die rechtzeitige Absendung der Mitteilung
        (z.B. per E-Mail an support@medmaster.at).
      </p>
      <p>
        <strong>Verzicht bei Nutzungsbeginn:</strong> Nehmen Sie vor Ablauf der Widerrufsfrist die
        von MedMaster angebotene Leistung (Nutzung der Online-Lernplattform) in Anspruch und stimmen
        ausdrücklich zu, dass die Leistungserbringung vor Ablauf der Rücktrittsfrist beginnt, so
        erlischt Ihr Widerrufsrecht mit Beginn der Vertragserfüllung (§ 18 Abs. 1 Z 11 FAGG). Die
        Nutzung beginnt mit dem ersten Aufruf der Lernplattform nach dem Kauf.
      </p>
      <p>
        <strong>Kündigung:</strong> Da es sich um einen einmaligen Kauf handelt, ist keine Kündigung
        erforderlich. Der Zugang bleibt nach Zahlung zeitlich unbegrenzt bestehen.
      </p>

      <h2>8. Kontolöschung</h2>
      <p>
        Sie können Ihr Konto jederzeit in den Kontoeinstellungen oder per E-Mail an
        support@medmaster.at löschen lassen. Bei Löschung werden alle personenbezogenen Daten
        (Profil, Lernfortschritt, Quiz-Ergebnisse) innerhalb von 30 Tagen unwiderruflich entfernt
        (Art. 17 DSGVO). Ein bereits bezahlter Zugang erlischt mit der Kontolöschung.
      </p>

      <h2>9. Gewährleistung</h2>
      <p>
        Die Leistungen werden gemäß der zum Zeitpunkt des Kaufs gültigen Leistungsbeschreibung
        erbracht. Geringfügige, den Verwendungszweck nicht beeinträchtigende Abweichungen gelten als
        genehmigt. Änderungen und Verbesserungen, die auf neuen Erkenntnissen oder technischen
        Entwicklungen basieren, bleiben vorbehalten. Bei begründeten Mängeln ist der Betreiber
        berechtigt, innerhalb angemessener Frist nach seiner Wahl den Mangel zu verbessern. Darüber
        hinausgehende Ansprüche wie Wandlung oder Preisminderung sind ausgeschlossen. Bei
        Verbrauchergeschäften gelten die vorangenannten Bestimmungen insoweit, als sie den
        zwingenden gesetzlichen Gewährleistungsbestimmungen nicht widersprechen.
      </p>

      <h2>10. Haftung</h2>
      <p>
        Die Lerninhalte werden mit angemessener Fachkenntnis und Sorgfalt erstellt und fortlaufend
        aktualisiert. Der Betreiber übernimmt jedoch keine Gewähr für die Vollständigkeit,
        Richtigkeit und Aktualität der Inhalte. Insbesondere wird{" "}
        <strong>kein bestimmter Lern- oder Prüfungserfolg garantiert</strong>.
      </p>
      <p>
        Der Betreiber sowie seine gesetzlichen Vertreter und Erfüllungsgehilfen haften
        ausschließlich für den Ersatz von vorhersehbaren Schäden, die grob fahrlässig oder
        vorsätzlich verursacht wurden. Bei grober Fahrlässigkeit ist die Haftung der Höhe nach mit
        dem Auftragswert beschränkt.
      </p>
      <p>
        Für{" "}
        <strong>
          mittelbare Schäden, entgangenen Gewinn, Zinsverluste, unterbliebene Einsparungen, Folge-
          und bloße Vermögensschäden
        </strong>{" "}
        sowie Schäden aus Ansprüchen Dritter haftet der Betreiber nicht.
      </p>

      <h3>Verfügbarkeit</h3>
      <p>
        Dem Nutzer ist bewusst, dass es aufgrund der technischen Eigenschaften des Internets
        vorübergehend zu Störungen in der Verfügbarkeit der Plattform kommen kann. Eine Haftung für
        derartige Störungen der Verfügbarkeit wird ausdrücklich ausgeschlossen. Im Fall von
        technischen Störungen wird der Betreiber die Verfügbarkeit nach Maßgabe technischer und
        personeller Möglichkeiten so schnell wie möglich wiederherstellen.
      </p>

      <h3>Höhere Gewalt</h3>
      <p>
        Leistungsverzögerungen aufgrund höherer Gewalt und aufgrund von Ereignissen, die dem
        Betreiber die Leistung wesentlich erschweren oder unmöglich machen (z.B. Pandemie,
        Naturkatastrophen, Cyberangriffe, Ausfall von Drittanbietern), hat der Betreiber nicht zu
        verantworten. Die Haftung für daraus entstehende Schäden wird ausdrücklich ausgeschlossen.
      </p>

      <h2>11. Datenverarbeitung</h2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>. Die mit der Geschäftsbeziehung
        zusammenhängenden Daten werden von MedMaster zur Erfüllung des Vertrages, zur Anfertigung
        von Nutzerstatistiken und zur Bearbeitung von Support-Anfragen verarbeitet. Die
        Rechtmäßigkeit ergibt sich aus Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>12. Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts. Günstigere
        zwingende Verbraucherschutzbestimmungen des Wohnsitzstaates des Nutzers bleiben unberührt
        (Rom-I-VO 593/2008/EG). Gerichtsstand für Streitigkeiten ist, soweit gesetzlich zulässig,
        Wien. Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt; die unwirksame Bestimmung wird durch eine wirtschaftlich gleichwertige ersetzt.
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
