# Roadmap: MedMaster v2.0 Launch-Ready

## Overview

Bring MedMaster from content-complete to production-ready: audit and polish BMS chapters, expand KFF to 1.000+ tasks per subtest, implement Figuren zusammensetzen, add Stripe payments, improve legal pages, polish UI/UX, and launch on a real domain. Each phase delivers independently verifiable value.

## Phases

- [ ] **Phase 1: BMS Content Quality** — Kapitel auditieren, SVG-Bilder erstellen
- [ ] **Phase 2: KFF Expansion** — Figuren zusammensetzen, alle Teile auf 1.000+, Gedaechtnis mit Gesichtern
- [ ] **Phase 3: UI/UX Polish** — Sidebar bereinigen, App komplett durchpruefen
- [ ] **Phase 4: Landing & Legal** — Landing Page, Post-Registration, Impressum/AGB
- [ ] **Phase 5: Monetarisierung** — Stripe Payment implementieren
- [ ] **Phase 6: Go-Live** — Echte Domain, Deployment, Launch

## Phase Details

### Phase 1: BMS Content Quality
**Goal:** Alle BMS-Kapitel auf konsistente Qualitaet — Struktur, Lesbarkeit, Verstaendlichkeit, Tiefe. Plus hochqualitative SVG-Bilder pro Kapitel.
**Depends on:** Nothing (first phase)
**Requirements:** BMS-01, BMS-02
**Success Criteria:**
1. Jedes BMS-Kapitel hat konsistente Struktur (Einleitung, Lernziele, Merksaetze, Zusammenfassung)
2. Lesbarkeit und Verstaendlichkeit auf einheitlichem Premium-Niveau
3. Mindestens 2 SVG-Bilder pro Unterkapitel (audit-images passt)
4. npm run build fehlerfrei

### Phase 2: KFF Expansion
**Goal:** Alle KFF-Untertests haben 1.000+ Uebungsaufgaben. Figuren zusammensetzen als echtes MedAT-Format neu implementiert. Gedaechtnis mit copyright-freien Gesichtern.
**Depends on:** Phase 1 (BMS fertig, voller Fokus auf KFF)
**Requirements:** KFF-01, KFF-02, KFF-03
**Success Criteria:**
1. Figuren zusammensetzen: Generator + Validator + 1.000 Aufgaben im echten MedAT-Format
2. Implikationen, Wortfluessigkeit, Zahlenfolgen: jeweils 1.000+ Aufgaben
3. Gedaechtnis: copyright-freie Gesichter, MedAT-authentisches Format
4. Alle KFF-Generatoren produzieren nur eindeutig loesbare Aufgaben

### Phase 3: UI/UX Polish
**Goal:** App bugfrei und konsistent. Sidebar bereinigt, alle Flows geprueft.
**Depends on:** Phase 2 (Content komplett, jetzt UI pruefen)
**Requirements:** UI-01, UI-02
**Success Criteria:**
1. Erfolge-Label aus Sidebar entfernt
2. Alle Seiten/Flows manuell durchgetestet (BMS, TV, KFF, SEK, Dashboard, Simulation)
3. Keine Console Errors, keine broken Links, keine Layout-Glitches
4. Mobile-responsive Verhalten verifiziert

### Phase 4: Landing & Legal
**Goal:** Landing Page ueberzeugend, Onboarding-Flow smooth, rechtliche Seiten vollstaendig.
**Depends on:** Phase 3 (UI sauber, jetzt oeffentlichkeitstauglich machen)
**Requirements:** UI-03, UI-04, LEGAL-01
**Success Criteria:**
1. Landing Page mit klarer Value Proposition, Features, Pricing, CTA
2. Post-Registration Flow fuehrt User nahtlos in die App
3. Impressum, Datenschutzerklaerung und AGB rechtskonform und vollstaendig
4. Alle Links funktionieren, kein Placeholder-Text

### Phase 5: Monetarisierung
**Goal:** Stripe-basierte Bezahlung funktioniert end-to-end.
**Depends on:** Phase 4 (Landing + Legal muessen vor Paywall stehen)
**Requirements:** PAY-01
**Success Criteria:**
1. Stripe Checkout Integration (Abo-Modell)
2. Paywall schuetzt Premium-Content
3. Abo-Status in Supabase gespeichert und UI-seitig reflektiert
4. Test-Zahlung erfolgreich durchfuehrbar

### Phase 6: Go-Live
**Goal:** App auf eigener Domain live und oeffentlich zugaenglich.
**Depends on:** Phase 5 (Payment muss funktionieren vor Launch)
**Requirements:** LAUNCH-01
**Success Criteria:**
1. Eigene Domain konfiguriert (DNS, SSL)
2. Vercel Custom Domain oder alternative Hosting-Loesung
3. Smoke-Test auf Produktion (alle Flows, Payment, Auth)
4. App oeffentlich erreichbar

---
*Roadmap created: 2026-02-26*
*Last updated: 2026-02-26 after milestone v2.0 initialization*
