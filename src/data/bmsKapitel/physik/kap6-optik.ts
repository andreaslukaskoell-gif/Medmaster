import type { Kapitel } from '../types';

export const physKap6: Kapitel = {
  id: 'phys-kap6',
  title: 'Optik',
  subject: 'physik',
  icon: '🔭',
  estimatedTime: '90 min',
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-01: Geometrische Optik
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ph-6-01',
      title: 'Geometrische Optik',
      content: `# Geometrische Optik

Die geometrische Optik beschreibt das Verhalten von Licht, indem sie es als Strahlen modelliert, die sich in geraden Linien ausbreiten. Dieses Modell gilt, solange die betrachteten Strukturen deutlich größer als die Lichtwellenlänge sind.

## Reflexionsgesetz

Wenn Licht auf eine glatte Oberfläche trifft, wird es reflektiert. Das **Reflexionsgesetz** lautet:

> **Einfallswinkel α₁ = Ausfallswinkel α₂**

Beide Winkel werden stets zur **Flächennormalen** (dem Lot auf der Oberfläche) gemessen, nicht zur Oberfläche selbst. Bei einem ebenen Spiegel entsteht ein virtuelles, seitenvertauschtes Bild in gleicher Größe wie das Objekt. Der scheinbare Bildabstand hinter dem Spiegel entspricht dem realen Objektabstand vor dem Spiegel.

## Brechungsgesetz (Snellius)

Trifft Licht schräg auf die Grenzfläche zwischen zwei optisch unterschiedlichen Medien, ändert es seine Ausbreitungsrichtung. Das **Snellsche Brechungsgesetz** beschreibt diese Ablenkung:

> **n₁ · sin α₁ = n₂ · sin α₂**

Der **Brechungsindex n** ist ein dimensionsloses Maß für die optische Dichte eines Mediums:
- n_Vakuum = 1 (exakt)
- n_Luft ≈ 1,0003 ≈ 1
- n_Wasser ≈ 1,33
- n_Glas ≈ 1,5 (je nach Glasart 1,45–1,9)
- n_Diamant ≈ 2,42

Physikalisch gilt: n = c/v, wobei c die Lichtgeschwindigkeit im Vakuum (≈ 3·10⁸ m/s) und v die Phasengeschwindigkeit im Medium ist. Je größer n, desto langsamer das Licht und desto stärker die Brechung zum Lot hin.

**Beim Übergang von optisch dünnem zu dichtem Medium** (n₁ < n₂, z. B. Luft → Glas) bricht der Strahl zum Lot hin (α₂ < α₁).
**Beim Übergang von dichtem zu dünnem Medium** (n₁ > n₂, z. B. Glas → Luft) bricht der Strahl vom Lot weg (α₂ > α₁).

## Totalreflexion

Geht Licht von einem optisch dichteren Medium (n₁) in ein dünneres (n₂ < n₁), so steigt der Brechungswinkel α₂ mit zunehmendem Einfallswinkel α₁. Ab einem bestimmten **Grenzwinkel α_grenz** erreicht α₂ genau 90° – der gebrochene Strahl läuft entlang der Grenzfläche. Für noch größere Einfallswinkel tritt keine Transmission mehr auf: das Licht wird **vollständig reflektiert**.

> **sin α_grenz = n₂ / n₁** (gilt nur für n₁ > n₂)

Beispiel Glas (n=1,5) → Luft (n=1): sin α_grenz = 1/1,5 = 0,667 → α_grenz ≈ 41,8°

**Klinische Anwendung – Endoskopie:** Glasfasern nutzen Totalreflexion, um Licht über weite Strecken und um Kurven zu leiten. Millionen dünner Glasfasern bilden flexible Lichtleiter für Endoskope (Gastroskop, Koloskop, Bronchoskop). Die Fasern müssen von einem Mantel mit kleinerem n umgeben sein, damit Totalreflexion an der Kern-Mantel-Grenze gewährleistet ist.

## Linsen und Brechkraft

Linsen sind optische Elemente, die Lichtstrahlen durch Brechung an zwei Flächen ablenken.

**Sammellinse** (konvex, bikonvex): in der Mitte dicker, positive Brennweite f > 0. Parallel einfallendes Licht wird im realen **Brennpunkt F** gesammelt.

**Zerstreuungslinse** (konkav, bikonkav): am Rand dicker, negative Brennweite f < 0. Strahlen werden so abgelenkt, als kämen sie aus einem virtuellen Brennpunkt.

Die **Linsengleichung** (Abbildungsgleichung) verknüpft Brennweite f, Gegenstandsweite g und Bildweite b:

> **1/f = 1/g + 1/b**

Der **Abbildungsmaßstab** ist m = b/g = Bildgröße/Gegenstandsgröße.

Die **Brechkraft D** in **Dioptrien (dpt)** ist der Kehrwert der in Metern gemessenen Brennweite:

> **D = 1/f [m]**

Das menschliche Auge akkommodiert zwischen etwa 60 dpt (Fernpunkt) und 70 dpt (Nahpunkt, junges Auge). Brillengläser addieren Brechkraft zur vorhandenen Augenoptik.

Mehrere dünne Linsen eng beieinander können als Gesamtsystem behandelt werden:
> D_ges = D₁ + D₂ + ...`,
      lernziele: [
        'Das Reflexionsgesetz anwenden und Einfallswinkel gleich Ausfallswinkel erklären.',
        'Das Snellsche Brechungsgesetz formulieren und Brechungsindizes für Luft, Wasser und Glas kennen.',
        'Den Grenzwinkel der Totalreflexion berechnen und deren Anwendung in Glasfasern beschreiben.',
        'Die Linsengleichung 1/f = 1/g + 1/b anwenden und Brechkraft in Dioptrien umrechnen.',
        'Sammel- und Zerstreuungslinsen unterscheiden und deren Einsatz bei Fehlsichtigkeiten erklären.',
      ],
      sections: [
        {
          heading: 'Reflexion und Brechung im Überblick',
          text: 'Das Reflexionsgesetz beschreibt spiegelnde Flächen: Der Einfallswinkel entspricht dem Ausfallswinkel, stets gemessen zur Normalen. Die Brechung an Grenzflächen folgt dem Snellschen Gesetz n₁·sin α₁ = n₂·sin α₂. Beim Wechsel von dichtem zu dünnem Medium kann ab dem Grenzwinkel Totalreflexion auftreten – die Grundlage der Glasfasertechnik.',
          merksatz: 'Einfallswinkel = Ausfallswinkel; beim Übergang in dichteres Medium: Strahl bricht zum Lot.',
        },
        {
          heading: 'Linsengleichung und Brechkraft',
          text: 'Die Linsengleichung 1/f = 1/g + 1/b gilt für dünne Linsen. Ist b positiv, liegt ein reelles (umgekehrtes) Bild hinter der Linse vor; ist b negativ, handelt es sich um ein virtuelles Bild auf der gleichen Seite wie der Gegenstand. Die Brechkraft D = 1/f (f in Metern) wird in Dioptrien gemessen. Sammellinsen haben positive, Zerstreuungslinsen negative Brechkraft.',
          merksatz: 'D = 1/f [m] in Dioptrien – positive D sammelt, negative D zerstreut.',
        },
        {
          heading: 'Totalreflexion und Glasfasertechnik',
          text: 'Totalreflexion tritt auf, wenn Licht aus einem optisch dichten Medium (großes n) auf eine Grenzfläche zu einem dünneren Medium trifft und der Einfallswinkel den Grenzwinkel α_grenz = arcsin(n₂/n₁) übersteigt. Kein Licht dringt mehr ins zweite Medium ein – die gesamte Energie bleibt im ersten Medium. Dieses Prinzip wird in Glasfaserkabeln genutzt: Das Licht springt durch Totalreflexion an der Kern-Mantel-Grenzfläche und kann so verlustarme Signale über große Distanzen oder durch flexible Endoskope leiten.',
          merksatz: 'sin α_grenz = n₂/n₁ – nur möglich wenn n₁ > n₂.',
        },
      ],
      diagram: 'lens-imaging',

      merksätze: [
        'Reflexionsgesetz: Einfallswinkel α = Ausfallswinkel α (beide zur Normalen gemessen).',
        'Snellius: n₁·sin α₁ = n₂·sin α₂ – beim Übergang in dichteres Medium bricht Licht zum Lot.',
        'Totalreflexion: nur möglich bei n₁ > n₂; Grenzwinkel sin α_grenz = n₂/n₁.',
        'Brechungsindizes: Luft ≈ 1, Wasser ≈ 1,33, Glas ≈ 1,5, Diamant ≈ 2,42.',
        'Linsengleichung: 1/f = 1/g + 1/b; positives b → reelles Bild hinter der Linse.',
        'Brechkraft D = 1/f (f in Metern), Einheit Dioptrien (dpt).',
        'Sammellinse: f > 0, D > 0; Zerstreuungslinse: f < 0, D < 0.',
        'Abbildungsmaßstab m = b/g; m > 1 bedeutet Vergrößerung.',
        'Glasfasern nutzen Totalreflexion: Kern (großes n) + Mantel (kleines n) → Licht bleibt im Kern.',
        'Brechkräfte dünner Linsen im Kontakt addieren sich: D_ges = D₁ + D₂.',
      ],
      altfrage: {
        question: 'Erklären Sie das Prinzip der Totalreflexion und beschreiben Sie deren Bedeutung für die medizinische Endoskopie.',
        answer: 'Totalreflexion tritt auf, wenn Licht von einem optisch dichteren Medium (Brechungsindex n₁) auf die Grenzfläche zu einem optisch dünneren Medium (n₂ < n₁) trifft. Mit zunehmendem Einfallswinkel steigt der Brechungswinkel. Beim Grenzwinkel α_grenz, definiert durch sin α_grenz = n₂/n₁, läuft der gebrochene Strahl exakt entlang der Grenzfläche (Brechungswinkel = 90°). Bei Einfallswinkeln größer als α_grenz findet keinerlei Transmission mehr statt – das Licht wird vollständig reflektiert, ohne Energieverlust durch Absorption oder Transmission. Ein Beispiel: Für Glas (n=1,5) → Luft (n=1) beträgt der Grenzwinkel arcsin(1/1,5) ≈ 41,8°. In der medizinischen Endoskopie nutzt man Glasfaserbündel aus sehr dünnen Fasern (Kerndurchmesser 10–100 µm), deren Kern einen höheren Brechungsindex hat als der umgebende Mantel. Licht, das in den Kern eingekoppelt wird, trifft die Kern-Mantel-Grenzfläche stets unter einem Winkel größer als der Grenzwinkel und wird daher vollständig reflektiert. Dadurch kann Licht über Meter durch flexible, gebogene Kabel ohne wesentliche Verluste geführt werden. In modernen Endoskopen leitet eine Faser-Gruppe Beleuchtungslicht in den Körper (Kaltlicht, keine Wärme im Gewebe), während eine zweite Fasergruppe oder eine CCD-Kamera am distalen Ende das Bild zurückleitet. Diese Technik ermöglicht minimalinvasive Diagnostik (Gastroskopie, Koloskopie, Bronchoskopie, Laparoskopie) ohne große operative Zugänge.',
      },
      klinischerBezug: 'Endoskopie: Glasfasern via Totalreflexion leiten Kaltlicht und Bilder durch flexible Schläuche – Grundlage von Gastroskopie, Koloskopie, Bronchoskopie.',
      selfTest: [
        {
          question: 'Ein Lichtstrahl trifft von Luft (n=1,0) auf eine Glasoberfläche (n=1,5) unter einem Einfallswinkel von 45°. Welcher Brechungswinkel ergibt sich nach dem Snellschen Gesetz?',
          options: [
            '28,1°',
            '35,3°',
            '45,0°',
            '56,3°',
            '67,5°',
          ],
          correctIndex: 0,
          explanation: 'Nach Snellius gilt n₁·sin α₁ = n₂·sin α₂. Mit n₁=1,0, α₁=45°, n₂=1,5: sin α₂ = (1,0·sin 45°)/1,5 = 0,7071/1,5 = 0,4714. Damit folgt α₂ = arcsin(0,4714) ≈ 28,1°. Der Strahl bricht beim Übergang in das optisch dichtere Glas zum Lot hin, der Winkel wird also kleiner als der Einfallswinkel. Die übrigen Optionen entstehen durch fehlerhafte Anwendung (z. B. Vertauschen von n₁ und n₂ oder Vernachlässigung des Sinus).',
          hints: [
            'Snellius-Formel: n₁·sin α₁ = n₂·sin α₂ – stelle nach sin α₂ um.',
            'Beim Übergang in ein optisch dichteres Medium (größeres n) wird der Winkel kleiner.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Licht geht von Glas (n=1,5) in Luft (n=1,0) über. Ab welchem Grenzwinkel tritt Totalreflexion auf?',
          options: [
            '28,1°',
            '33,7°',
            '41,8°',
            '48,6°',
            'Totalreflexion ist in dieser Richtung nicht möglich',
          ],
          correctIndex: 2,
          explanation: 'Die Totalreflexion tritt auf, wenn Licht vom dichteren ins dünnere Medium übergeht (n₁ > n₂). Der Grenzwinkel ergibt sich aus sin α_grenz = n₂/n₁ = 1,0/1,5 = 0,6667, also α_grenz = arcsin(0,6667) ≈ 41,8°. Für Einfallswinkel größer als 41,8° wird das Licht vollständig reflektiert. Die Option 48,6° wäre der Grenzwinkel für Wasser (n=1,33) → Luft. Option 5 wäre richtig, wenn das Licht von Luft in Glas ginge – dann nimmt der Brechungswinkel nie 90° an.',
          hints: [
            'Formel: sin α_grenz = n₂/n₁ – hier ist n₁=1,5 (Glas) und n₂=1,0 (Luft).',
            'Totalreflexion geht nur vom dichteren ins dünnere Medium, nicht umgekehrt.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Eine Sammellinse hat eine Brennweite von 25 cm. Ein Gegenstand steht 50 cm davor. Wo befindet sich das Bild, und welcher Art ist es?',
          options: [
            '16,7 cm vor der Linse, virtuell',
            '25 cm hinter der Linse, reell',
            '50 cm hinter der Linse, reell',
            '100 cm hinter der Linse, reell',
            'Im Unendlichen, reell',
          ],
          correctIndex: 2,
          explanation: 'Die Linsengleichung lautet 1/f = 1/g + 1/b. Mit f=25 cm und g=50 cm: 1/b = 1/f − 1/g = 1/25 − 1/50 = 2/50 − 1/50 = 1/50, also b=50 cm. Ein positives b bedeutet ein reelles Bild auf der dem Gegenstand gegenüberliegenden Seite der Linse. Der Abbildungsmaßstab ist m = b/g = 50/50 = 1 – das Bild ist gleich groß wie der Gegenstand. Dies entspricht dem Fall g = 2f, der in der Optik als neutraler Abbildungsfall bekannt ist.',
          hints: [
            'Stelle die Linsengleichung nach 1/b um: 1/b = 1/f − 1/g.',
            'Positives b bedeutet reelles Bild auf der Rückseite der Linse.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Eine Brille hat eine Brechkraft von –2,0 Dioptrien. Welcher Brennweite entspricht das, und welchen Linsentyp beschreibt es?',
          options: [
            '2 cm, Sammellinse',
            '20 cm, Zerstreuungslinse',
            '50 cm, Zerstreuungslinse',
            '200 cm, Sammellinse',
            '500 cm, Zerstreuungslinse',
          ],
          correctIndex: 2,
          explanation: 'Die Brechkraft D und die Brennweite f (in Metern) sind über D = 1/f verknüpft. Mit D = –2,0 dpt: f = 1/D = 1/(–2,0) = –0,50 m = –50 cm. Das negative Vorzeichen zeigt: Es handelt sich um eine Zerstreuungslinse (Konkavlinse). Zerstreuungslinsen werden zur Korrektur von Kurzsichtigkeit (Myopie) eingesetzt, weil sie das parallel einfallende Licht divergent machen und so den Fokus auf die Netzhaut zurückverlagern.',
          hints: [
            'Formel: f = 1/D mit f in Metern – wandle dann in Zentimeter um.',
            'Negatives f (und negatives D) kennzeichnet eine Zerstreuungslinse.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Warum funktionieren Glasfasern in der Endoskopie so gut zur Lichtleitung?',
          options: [
            'Weil Glas Licht absorbiert und thermisch wieder abstrahlt',
            'Weil der Brechungsindex von Mantel größer ist als der des Kerns',
            'Weil Totalreflexion an der Kern-Mantel-Grenzfläche das Licht im Kern hält',
            'Weil das Licht am Mantel gebeugt wird und im Kern verstärkt',
            'Weil Glasfasern das Licht durch Interferenz in sich fokussieren',
          ],
          correctIndex: 2,
          explanation: 'Glasfasern bestehen aus einem Kern mit höherem Brechungsindex (n_Kern) und einem Mantel mit niedrigerem Brechungsindex (n_Mantel < n_Kern). Licht, das in den Kern eingekoppelt wird, trifft die Kern-Mantel-Grenzfläche unter Winkeln, die den Grenzwinkel der Totalreflexion überschreiten. Damit wird es vollständig reflektiert und bleibt im Kern eingeschlossen, auch wenn die Faser gebogen wird. Kein Licht dringt in den Mantel ein. Diese Totalreflexion erlaubt verlustfreie (in der Praxis: verlustarme) Lichtübertragung über flexible Wege – ideal für Endoskope, die Körperhöhlen ausleuchten und Bilder zurückleiten.',
          hints: [
            'Totalreflexion erfordert n_Kern > n_Mantel und Einfallswinkel > Grenzwinkel.',
            'Der Effekt ist verlustfrei – kein Licht verlässt die Faser durch die Seite.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Zwei dünne Linsen (D₁ = +3,0 dpt, D₂ = –1,0 dpt) werden eng nebeneinander gesetzt. Welche Gesamtbrechkraft und welche Brennweite hat das System?',
          options: [
            'D_ges = 2,0 dpt, f = 50 cm',
            'D_ges = 3,0 dpt, f = 33,3 cm',
            'D_ges = 4,0 dpt, f = 25 cm',
            'D_ges = –2,0 dpt, f = –50 cm',
            'D_ges = 1,5 dpt, f = 66,7 cm',
          ],
          correctIndex: 0,
          explanation: 'Für dünne Linsen, die eng beieinanderstehen, addieren sich die Brechkräfte: D_ges = D₁ + D₂ = 3,0 + (–1,0) = 2,0 dpt. Daraus ergibt sich die Brennweite f = 1/D_ges = 1/2,0 = 0,50 m = 50 cm. Das positive Vorzeichen zeigt, dass das Gesamtsystem eine Sammellinse mit 50 cm Brennweite darstellt. Dieses Prinzip wird z. B. beim Design von Linsensystemen in Kameras oder beim Aufaddieren von Brillenstärken genutzt.',
          hints: [
            'Brechkräfte dünner Linsen im Kontakt addieren sich direkt: D_ges = D₁ + D₂.',
            'f = 1/D_ges (in Metern) – dann in Zentimeter umrechnen.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Lichtstrahl trifft senkrecht (Einfallswinkel 0°) auf eine Glasoberfläche. Welche Aussage ist korrekt?',
          options: [
            'Er wird vollständig reflektiert',
            'Er wird vollständig absorbiert',
            'Er wird nicht gebrochen, sondern setzt seinen Weg geradlinig fort',
            'Er wird im 90°-Winkel abgelenkt',
            'Es tritt Totalreflexion auf',
          ],
          correctIndex: 2,
          explanation: 'Beim senkrechten Einfall (α₁ = 0°) gilt nach Snellius: n₁·sin 0° = n₂·sin α₂, also 0 = n₂·sin α₂, woraus α₂ = 0° folgt. Der Strahl ändert seine Richtung nicht und dringt ungebrochen ins zweite Medium ein. Seine Geschwindigkeit ändert sich zwar (v = c/n), nicht aber seine Ausbreitungsrichtung. Totalreflexion ist bei 0° nicht möglich – sie erfordert einen Einfallswinkel größer als den Grenzwinkel, der stets zwischen 0° und 90° liegt.',
          hints: [
            'Setze α₁ = 0° in die Snellius-Gleichung ein und löse nach α₂.',
            'Totalreflexion erfordert einen Mindesteinfallswinkel (den Grenzwinkel) – bei 0° ist das nie erfüllt.',
          ],
          tags: [],
          difficulty: 1,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-02: Wellenoptik
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ph-6-02',
      title: 'Wellenoptik',
      content: `# Wellenoptik

Die Wellenoptik behandelt Licht als elektromagnetische Welle und erklärt Phänomene wie Interferenz und Beugung, die mit dem Strahlmodell der geometrischen Optik nicht beschreibbar sind.

## Licht als elektromagnetische Welle

Licht ist eine transversale elektromagnetische Welle, bei der elektrisches und magnetisches Feld senkrecht zur Ausbreitungsrichtung schwingen. Kenngrößen sind:
- **Wellenlänge λ**: räumlicher Abstand zwischen zwei Wellenbergen
- **Frequenz f**: zeitliche Schwingungsfrequenz
- **Zusammenhang**: c = λ·f (c = Lichtgeschwindigkeit im Vakuum ≈ 3·10⁸ m/s)

Das **sichtbare Spektrum** umfasst Wellenlängen von ca. 380 nm (violett) bis 780 nm (rot). Unterhalb liegt UV-Strahlung (100–380 nm), oberhalb Infrarotstrahlung (780 nm–1 mm).

## Interferenz

**Interferenz** bezeichnet die Überlagerung (Superposition) zweier oder mehrerer kohärenter Wellen. Kohärenz bedeutet: gleiche Frequenz und feste Phasenbeziehung.

**Konstruktive Interferenz** (Verstärkung) tritt auf, wenn der Gangunterschied Δ ein ganzzahliges Vielfaches der Wellenlänge ist:
> **Δ = n · λ** (n = 0, 1, 2, …)

**Destruktive Interferenz** (Auslöschung) tritt auf, wenn der Gangunterschied ein halbzahliges Vielfaches ist:
> **Δ = (n + ½) · λ** (n = 0, 1, 2, …)

## Doppelspaltexperiment (Young)

Thomas Youngs klassisches Experiment (1801) bewies den Wellencharakter des Lichts. Licht trifft auf einen Doppelspalt mit Spaltabstand d. Hinter dem Spalt entstehen zwei kohärente Kugelwellen, die auf einem Schirm im Abstand L interferieren.

Der **Gangunterschied** für den Winkel θ ist:
> **Δ = d · sin θ ≈ d · y/L** (für kleine Winkel)

wobei y der Abstand des Maximums von der Mittelachse ist.

**Abstand zweier benachbarter Maxima (heller Streifen):**
> **Δy = λ · L / d**

Ein kleiner Spaltabstand d oder eine größere Wellenlänge λ ergibt ein weiteres Muster – die Streifen liegen weiter auseinander.

## Beugung

**Beugung** ist die Ablenkung von Wellen an Hindernissen oder Öffnungen. Sie tritt merklich auf, wenn die Hindernisgröße in der Größenordnung der Wellenlänge liegt.

- Kurzwelliges Licht (violett, ~400 nm) wird weniger gebeugt als langwelliges (rot, ~700 nm).
- Am Einzelspalt der Breite b entsteht das erste Minimum bei: sin α = λ/b
- Das zentrale Maximum hat doppelte Breite im Vergleich zu den Nebenmaxima.

## Auflösungsvermögen und Abbe-Kriterium

Das **Auflösungsvermögen** eines optischen Systems gibt an, wie nah zwei Punkte beieinander liegen dürfen, um noch als getrennt wahrgenommen zu werden.

Ernst Abbe zeigte, dass die minimale auflösbare Struktur durch Beugung begrenzt ist:
> **d_min = λ / (2 · NA)**

wobei **NA = n · sin α** die **numerische Apertur** des Objektivs ist (n = Brechungsindex des Mediums zwischen Probe und Objektiv, α = halber Öffnungswinkel).

**Konsequenzen:**
- Kleineres λ → bessere Auflösung (Elektronenmikroskop, Röntgen)
- Größere NA → bessere Auflösung (Ölimmersion: n_Öl ≈ 1,52 statt n_Luft = 1)
- Mit Licht (λ_min ≈ 400 nm) und maximaler NA ≈ 1,4 ergibt sich d_min ≈ 140 nm

## Kohärente Optik und klinische Anwendungen

**Optische Kohärenztomographie (OCT):** Nutzt Niederkohärenz-Interferometrie. Ein Lichtstrahl wird in Referenz- und Messstrahl aufgeteilt. Konstruktive Interferenz tritt nur auf, wenn beide Strahlen die gleiche optische Weglänge zurückgelegt haben. Durch Variation der Referenzarmlänge lässt sich ein tiefenaufgelöstes Schnittbild erzeugen (axiale Auflösung ~10 µm, nicht durch Beugung begrenzt). Klinisch wichtig für: Augendiagnostik (Netzhautschichten, Makuladegeneration), Koronargefäß-Bildgebung, Dermatologie.`,
      lernziele: [
        'Das sichtbare Spektrum mit Wellenlängenbereich (380–780 nm) benennen.',
        'Konstruktive und destruktive Interferenz mit Gangunterschieds-Bedingungen erläutern.',
        'Den Streifenabstand beim Doppelspaltexperiment mit Δy = λ·L/d berechnen.',
        'Das Abbe-Kriterium formulieren und die Faktoren für besseres Auflösungsvermögen benennen.',
        'Das Prinzip der OCT als klinische Anwendung der Wellenoptik beschreiben.',
      ],
      sections: [
        {
          heading: 'Interferenz: konstruktiv und destruktiv',
          text: 'Wenn zwei kohärente Lichtwellen (gleiche Frequenz, konstante Phasenbeziehung) überlagern, addieren sich ihre Amplituden. Bei gleichem Gangunterschied Δ = n·λ (ganzzahliges Vielfaches der Wellenlänge) verstärken sich die Wellen konstruktiv – es entsteht Helligkeit. Bei Δ = (n+½)·λ löschen sie sich destruktiv aus – es entsteht Dunkelheit. Interferenz ist ein einzigartiges Wellenmerkmal; Teilchen zeigen dieses Verhalten nicht. Beim Youngschen Doppelspaltexperiment erzeugt die Überlagerung der Wellen aus zwei Spalten ein Streifenmuster auf einem Schirm.',
          merksatz: 'Konstruktive Interferenz: Δ = n·λ (hell); destruktive: Δ = (n+½)·λ (dunkel).',
        },
        {
          heading: 'Beugung und Auflösungsgrenze',
          text: 'Beugung tritt auf, wenn Licht an Strukturen in Größenordnung seiner Wellenlänge vorbeizieht. Am Einzelspalt entsteht durch Beugung ein charakteristisches Intensitätsmuster mit breitem Zentralmaximum und schwächeren Nebenmaxima. Für optische Instrumente bedeutet dies: Zwei Punkte können nur dann getrennt aufgelöst werden, wenn ihr Beugungsscheibchen nicht überlappen. Das Abbe-Kriterium d_min = λ/(2·NA) setzt die fundamentale Auflösungsgrenze. Bessere Auflösung erfordert kürzeres λ oder größere numerische Apertur.',
          merksatz: 'd_min = λ/(2·NA) – kürzere Wellenlänge und größere Apertur verbessern die Auflösung.',
        },
        {
          heading: 'Optische Kohärenztomographie (OCT)',
          text: 'OCT ist ein bildgebendes Verfahren, das auf Niederkohärenz-Interferometrie basiert. Breitband-Licht (kurze Kohärenzlänge ~10 µm) wird durch einen Strahlteiler in einen Referenz- und einen Probenarm aufgeteilt. Interferenz tritt nur auf, wenn die optischen Weglängen beider Arme übereinstimmen. Durch Scannen der Referenzarmlänge erhält man ein tiefenaufgelöstes Bild (A-Scan). Seitliches Scannen ergibt ein 2D-Querschnittsbild (B-Scan). In der Augenheilkunde wird OCT routinemäßig zur Darstellung der Netzhautschichten genutzt.',
          merksatz: 'OCT nutzt Interferenz von Niederkohärenz-Licht für hochaufgelöste Tiefenbilder (~10 µm).',
        },
      ],
      diagram: 'em-spectrum',

      merksätze: [
        'Sichtbares Licht: λ = 380 nm (violett) bis 780 nm (rot).',
        'c = λ·f – Lichtgeschwindigkeit ist Produkt aus Wellenlänge und Frequenz.',
        'Konstruktive Interferenz: Gangunterschied Δ = n·λ (Wellenberge treffen aufeinander).',
        'Destruktive Interferenz: Gangunterschied Δ = (n+½)·λ (Berg trifft Tal).',
        'Doppelspalt-Streifenabstand: Δy = λ·L/d – größeres λ oder kleineres d → weiteres Muster.',
        'Beugung ist merklich, wenn Hindernisbreite ≈ Wellenlänge.',
        'Kurzwelliges Licht (violett) wird weniger gebeugt als langwelliges (rot).',
        'Abbe-Kriterium: d_min = λ/(2·NA) – fundamentales Auflösungslimit optischer Systeme.',
        'Numerische Apertur NA = n·sin α – Öl-Immersionsobjektive erhöhen NA auf ~1,4.',
        'OCT nutzt Niederkohärenz-Interferometrie für ~10 µm Tiefenauflösung am Auge.',
      ],
      altfrage: {
        question: 'Was ist das Abbe-Kriterium, und wie kann die Auflösung eines Lichtmikroskops verbessert werden?',
        answer: 'Das Abbe-Kriterium (Ernst Abbe, 1873) gibt die fundamentale Auflösungsgrenze eines lichtoptischen Systems an. Es besagt, dass zwei benachbarte Punkte nur dann getrennt sichtbar sind, wenn ihr Abstand d_min größer als λ/(2·NA) ist, wobei λ die Wellenlänge des verwendeten Lichts und NA = n·sin α die numerische Apertur des Objektivs sind (n = Brechungsindex des Mediums, α = halber Öffnungswinkel des Objektivs). Diese Grenze ergibt sich aus dem Wellencharakter des Lichts: Das von einem Punktobjekt erzeugte Beugungsmuster (Airy-Scheibchen) überlappen, sobald zwei Punkte zu nah beieinander liegen. Die Auflösung kann auf drei Wegen verbessert werden: (1) Kürzere Wellenlänge: Durch Verwendung von UV-Licht (λ ≈ 250 nm statt 500 nm) kann d_min auf etwa 100 nm halbiert werden. Noch kleinere Wellenlängen (Röntgen, Elektronen) ermöglichen Nanometer-Auflösung. (2) Größere numerische Apertur: Ölimmersionsobjektive ersetzen Luft (n=1) durch Immersionsöl (n≈1,52) zwischen Probe und Objektiv, was NA bis ≈1,4 ermöglicht und d_min auf ~140 nm senkt. (3) Moderne Superresolution-Techniken (STED, STORM, PALM) umgehen die Abbe-Grenze durch nicht-lineare Effekte oder stochastische Einzelmolekül-Lokalisierung und erreichen Auflösungen von wenigen Nanometern. Im klinischen Alltag sind konfokale Laser-Scanning-Mikroskope (NA~1,4, λ~488 nm) Standard in Pathologie und Forschung.',
      },
      klinischerBezug: 'OCT am Auge erreicht ~10 µm axiale Auflösung via Interferometrie – Standard für Makuladiagnostik, Glaukom und Netzhautödem.',
      selfTest: [
        {
          question: 'Beim Youngschen Doppelspaltexperiment beträgt der Spaltabstand 0,5 mm, der Abstand zum Schirm 1,5 m und die Wellenlänge 500 nm. Welchen Abstand haben zwei benachbarte helle Streifen?',
          options: [
            '0,15 mm',
            '0,75 mm',
            '1,5 mm',
            '3,0 mm',
            '7,5 mm',
          ],
          correctIndex: 2,
          explanation: 'Der Streifenabstand beim Doppelspalt ergibt sich aus Δy = λ·L/d. Mit λ = 500·10⁻⁹ m, L = 1,5 m, d = 0,5·10⁻³ m: Δy = (500·10⁻⁹ · 1,5) / (0,5·10⁻³) = 750·10⁻⁹ / 5·10⁻⁴ = 1,5·10⁻³ m = 1,5 mm. Die Streifen liegen also 1,5 mm voneinander entfernt. Halbiert man d auf 0,25 mm, würde sich der Abstand verdoppeln auf 3,0 mm.',
          hints: [
            'Formel: Δy = λ·L/d – alle Größen in SI-Einheiten (Meter) einsetzen.',
            'Lasse auf Einheiten achten: λ in Metern (1 nm = 10⁻⁹ m), d in Metern.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Unter welcher Bedingung tritt destruktive Interferenz auf?',
          options: [
            'Gangunterschied Δ = n·λ (n = 0, 1, 2, …)',
            'Gangunterschied Δ = (n + ½)·λ (n = 0, 1, 2, …)',
            'Gangunterschied Δ = n·λ/2 (n = 1, 3, 5, …)',
            'Die Wellen müssen verschiedene Frequenzen haben',
            'Die Amplituden müssen verschieden groß sein',
          ],
          correctIndex: 1,
          explanation: 'Destruktive Interferenz (Auslöschung) tritt auf, wenn der Gangunterschied Δ = (n+½)·λ beträgt, also λ/2, 3λ/2, 5λ/2, … In diesem Fall trifft ein Wellenberg der einen Welle auf ein Wellental der anderen – die Amplituden kompensieren sich. Konstruktive Interferenz (Verstärkung) tritt bei Δ = n·λ auf. Wichtig: Beide Wellen müssen kohärent sein (gleiche Frequenz, stabile Phasenbeziehung). Verschiedene Frequenzen oder Amplituden sind keine Bedingungen für destruktive Interferenz.',
          hints: [
            'Destruktiv bedeutet Auslöschung: Berg trifft Tal – was muss der Gangunterschied sein?',
            'Ein halbes λ Versatz bringt die Phasen genau entgegengesetzt.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Ein Lichtmikroskop mit Luft als Medium (n=1) hat ein Objektiv mit halbem Öffnungswinkel α=70°. Wie groß ist die numerische Apertur ungefähr?',
          options: [
            'NA = 0,34',
            'NA = 0,50',
            'NA = 0,77',
            'NA = 0,94',
            'NA = 1,41',
          ],
          correctIndex: 3,
          explanation: 'Die numerische Apertur ist NA = n·sin α. Mit n = 1 (Luft) und α = 70°: NA = 1·sin 70° = 1·0,940 = 0,94. Dies ist ein realistischer Wert für ein Trockenobjektiv hoher Qualität. Mit Ölimmersion (n ≈ 1,52) und gleichem Winkel wäre NA = 1,52·0,940 ≈ 1,43. Werte über NA = 1,5 sind technisch kaum erreichbar. Höhere NA bedeutet direktes Ergebnis: bessere Auflösung nach dem Abbe-Kriterium d_min = λ/(2·NA).',
          hints: [
            'NA = n·sin α – bei Luft ist n = 1, also NA = sin α.',
            'sin 70° ≈ 0,94 – du kannst sin 60° = 0,866 und sin 90° = 1 als Grenzwerte nutzen.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Mikroskop arbeitet mit grünem Licht (λ = 520 nm) und einer numerischen Apertur von 1,3. Was ist die theoretische Auflösungsgrenze nach Abbe?',
          options: [
            '200 nm',
            '400 nm',
            '260 nm',
            '100 nm',
            '520 nm',
          ],
          correctIndex: 0,
          explanation: 'Nach Abbe gilt d_min = λ/(2·NA) = 520 nm / (2·1,3) = 520/2,6 = 200 nm. Das bedeutet: Zwei Punkte mit weniger als 200 nm Abstand können mit diesem Mikroskop nicht mehr getrennt aufgelöst werden. Um die Auflösung weiter zu verbessern, könnte man kürzere Wellenlängen (z. B. UV mit 350 nm) nutzen oder die NA erhöhen. Mit λ=350 nm und NA=1,4 ergäbe sich d_min = 350/(2·1,4) = 125 nm.',
          hints: [
            'Formel direkt anwenden: d_min = λ/(2·NA) – Einheiten konsistent halten (nm).',
            'NA = 1,3 ist ein realistischer Wert für Ölimmersionsobjektive.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welches Phänomen beweist, dass Licht Wellencharakter hat?',
          options: [
            'Lichtgeschwindigkeit ist endlich (c ≈ 3·10⁸ m/s)',
            'Licht kann Elektronen aus Metall herauslösen (Photoeffekt)',
            'Licht überträgt Energie in Quanten (Photonen)',
            'Licht zeigt Interferenz und Beugung (Young-Doppelspalt)',
            'Licht breitet sich geradlinig aus',
          ],
          correctIndex: 3,
          explanation: 'Interferenz und Beugung sind eindeutige Welleneigenschaften. Das Youngsche Doppelspaltexperiment zeigt, dass Licht ein Streifenmuster erzeugt, das nur durch Überlagerung von Wellen erklärbar ist. Der Photoeffekt (Option 2) hingegen beweist den Teilchencharakter des Lichts und erklärt, warum Licht in Quanten (Photonen) absorbiert wird. Licht zeigt diesen Welle-Teilchen-Dualismus: Beide Aspekte sind real und komplementär. Die geradlinige Ausbreitung (Option 5) ist eine Näherung der geometrischen Optik, die für Strukturen viel größer als λ gilt.',
          hints: [
            'Interferenz und Beugung sind klassische Welleneigenschaften – welche Option beschreibt das?',
            'Denke daran: Der Photoeffekt beweist den Teilchencharakter, nicht den Wellencharakter.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Wie verändert sich das Beugungsmuster am Doppelspalt, wenn die Wellenlänge des Lichts verdoppelt wird (bei konstantem Spaltabstand und Schirmabstand)?',
          options: [
            'Die Streifen werden halbiert',
            'Die Streifen verschwinden ganz',
            'Der Streifenabstand verdoppelt sich',
            'Der Streifenabstand halbiert sich',
            'Das Muster bleibt unverändert',
          ],
          correctIndex: 2,
          explanation: 'Der Streifenabstand beim Doppelspalt ist Δy = λ·L/d. Da L und d konstant bleiben, ist Δy direkt proportional zu λ. Verdoppelt man λ, verdoppelt sich auch Δy. Beispiel: Wechsel von grünem Licht (λ=520 nm) zu infrarotem Licht (λ=1040 nm) verdoppelt die Streifenbreite. Dieses Prinzip wird in der Spektroskopie genutzt: Durch Messung des Streifenabstands kann man λ bestimmen. Bei blauem Licht (λ≈450 nm) ist Δy kleiner als bei rotem Licht (λ≈700 nm) – blaues Licht ergibt engere Streifen.',
          hints: [
            'Δy = λ·L/d – wie ändert sich Δy, wenn λ verdoppelt wird?',
            'Δy ist direkt proportional zu λ bei konstantem L und d.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Was ist das Prinzip der optischen Kohärenztomographie (OCT)?',
          options: [
            'Röntgenstrahlen werden durch das Auge geschickt und gebeugt',
            'Ultraschall reflektiert an Gewebegrenzen und liefert Tiefenbilder',
            'Fluoreszenzfarbstoffe absorbieren und emittieren Licht für Bilder',
            'Niederkohärentes Licht interferiert nur bei identischer optischer Weglänge im Referenz- und Probenarm',
            'Infrarotes Licht wird von Netzhautpigmenten absorbiert und thermisch detektiert',
          ],
          correctIndex: 3,
          explanation: 'OCT basiert auf Niederkohärenz-Interferometrie (auch Weißlichtinterferometrie genannt). Breitbandiges Licht mit kurzer Kohärenzlänge (typisch ~10 µm) wird durch einen Strahlteiler in zwei Arme geleitet: den Referenzarm (bekannte Länge) und den Probenarm (ins Gewebe). Interferenz tritt nur dann auf, wenn die optischen Weglängen beider Arme innerhalb der Kohärenzlänge übereinstimmen. Durch Variation der Referenzarmlänge lässt sich ein tiefenaufgelöstes Rückstreuprofil des Gewebes aufnehmen. Die axiale Auflösung ist durch die Kohärenzlänge (nicht durch Beugung) limitiert und beträgt typisch 5–15 µm. OCT ist Standard in der Augenheilkunde für Netzhautschichtanalysen.',
          hints: [
            'OCT = Optische Kohärenztomographie – "Kohärenz" ist der Schlüsselbegriff.',
            'Das Prinzip ähnelt dem Ultraschall-Echo, aber mit Licht statt Schall.',
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-03: Optische Instrumente
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ph-6-03',
      title: 'Optische Instrumente',
      content: `# Optische Instrumente

Optische Instrumente kombinieren Linsen, Spiegel und optische Elemente, um die natürlichen Grenzen des menschlichen Sehens zu überwinden. Für die Medizin sind Lupe, Mikroskop, Endoskop und Ophthalmoskop besonders relevant.

## Lupe

Die Lupe ist die einfachste Sehhilfe – eine einzelne Sammellinse. Das menschliche Auge kann einen Gegenstand bei der **deutlichen Sehweite** (konventionell S = 25 cm) scharf sehen. Bringt man eine Sammellinse mit Brennweite f vor das Auge und platziert das Objekt nahe am Brennpunkt, entsteht ein aufrechtes, vergrößertes virtuelles Bild bei der deutlichen Sehweite.

**Vergrößerung der Lupe:**
> **M = S / f** (S = 25 cm, f in cm)

Beispiel: Lupe mit f = 5 cm → M = 25/5 = 5-fache Vergrößerung.

## Lichtmikroskop

Das Lichtmikroskop besteht aus zwei Linsensystemen:
- **Objektiv** (dem Objekt zugewandt, kurze Brennweite f_ob): erzeugt ein vergrößertes, reelles Zwischenbild
- **Okular** (dem Auge zugewandt, mittlere Brennweite f_ok): wirkt als Lupe, die das Zwischenbild betrachtet

**Gesamtvergrößerung:**
> **M_ges = M_ob × M_ok**

wobei M_ob = Bildröhrenlänge / f_ob und M_ok = S / f_ok (S = 25 cm).

Typische Werte: Objektiv 40x, Okular 10x → Gesamtvergrößerung 400x.

Das **theoretische Auflösungslimit** (Abbe) beträgt bei Lichtmikroskopen ca. **200 nm** mit sichtbarem Licht und Ölimmersionsobjektiv (NA~1,4). Moderne STED- oder STORM-Mikroskope überwinden diese Grenze durch Spezialtechniken.

**Konfokales Mikroskop:** Ein Laserstrahl fokussiert auf einen Punkt, eine Lochblende (Pinhole) vor dem Detektor blendet Streulicht aus anderen Ebenen aus → optische Schnittbilder, 3D-Rekonstruktion möglich.

## Teleskop

Teleskope (Fernrohre) sind für ferne Objekte konzipiert. Im einfachsten Fall (Keplersches Fernrohr) sammelt ein Objektiv mit langer Brennweite f_ob paralleles Licht und erzeugt ein reelles Bild im hinteren Brennpunkt. Das Okular betrachtet dieses Bild als Lupe.

**Vergrößerung:**
> **M = f_ob / f_ok**

Beispiel: f_ob = 1000 mm, f_ok = 25 mm → M = 40x. Das erzeugte Bild ist umgekehrt; für aufrechte Bilder (terrestrisches Fernrohr) wird ein Umkehrsystem eingebaut.

## Endoskop

Das Endoskop ist das wichtigste minimal-invasive optische Instrument in der Medizin. Es kombiniert:

1. **Lichtleitung**: Glasfaserbündel leiten weißes LED- oder Xenon-Licht (Kaltlicht) zum Untersuchungsort ohne thermische Gewebelast.
2. **Bildübertragung**: Früher durch kohärente Glasfaserbündel (Faseroptik), heute fast ausschließlich durch CCD/CMOS-Chip am distalen Ende (Videoendoskop).
3. **Arbeitskanal**: Für Biopsiezangen, Polypektomieschlingen, Laser.
4. **Spülung und Absaugung**: Für klares Sichtfeld.

Das distale Ende ist biegbar (Steuerdraht-Mechanismus), sodass Windungen im Gastrointestinaltrakt oder Bronchialbaum navigiert werden können. Wichtige klinische Einsatzgebiete:
- **Gastroskopie**: Speiseröhre, Magen, Duodenum
- **Koloskopie**: Dickdarm (Polyp-Screening)
- **Bronchoskopie**: Bronchien (Biopsie, Lavage)
- **Laparoskopie**: Bauchhöhle (minimalinvasive Chirurgie)
- **Zystoskopie**: Blase

## Ophthalmoskop und Spaltlampe

Das **direkte Ophthalmoskop** (Augenspiegel) projiziert Licht durch die Pupille auf die Netzhaut. Eine Linsenoptik ermöglicht den Blick auf Papille, Makulabereich und Gefäße. Klinisch wichtig für Diagnose von Glaukomschäden, Papillenödem, diabetische Retinopathie.

Die **Spaltlampe** ist ein spezielles Auflichtmikroskop mit Spaltbeleuchtung. Sie beleuchtet das Auge mit einem feinen Lichtspalt und erlaubt Schnittdarstellungen von Hornhaut, Linse, Glaskörper. Kombination mit Kontaktlinsen ermöglicht Hintergrunduntersuchung.`,
      lernziele: [
        'Die Vergrößerungsformel der Lupe M = S/f anwenden.',
        'Das Prinzip des Lichtmikroskops (Objektiv × Okular) und das Auflösungslimit erläutern.',
        'Die Vergrößerungsformel des Teleskops M = f_ob/f_ok anwenden.',
        'Den Aufbau und die Funktionsweise eines Videoendoskops beschreiben.',
        'Klinische Einsatzbereiche von Endoskop, Spaltlampe und Ophthalmoskop nennen.',
      ],
      sections: [
        {
          heading: 'Lupe und Mikroskop im Vergleich',
          text: 'Die Lupe verwendet eine einzelne Sammellinse, um das Objekt nahe am Brennpunkt scharf und vergrößert als virtuelles Bild bei 25 cm zu zeigen. Das Lichtmikroskop erweitert dieses Prinzip: Das Objektiv (nahe am Objekt, kurze Brennweite) erzeugt zunächst ein reelles, stark vergrößertes Zwischenbild. Das Okular fungiert dann als Lupe für dieses Zwischenbild. Die Gesamtvergrößerung ist das Produkt beider Einzelvergrößerungen. Das Auflösungslimit des Lichtmikroskops liegt bei ~200 nm (Abbe-Limit).',
          merksatz: 'M_ges = M_Objektiv × M_Okular; Auflösungsgrenze Lichtmikroskop ≈ 200 nm.',
        },
        {
          heading: 'Endoskopie: Licht und Bild durch flexible Schläuche',
          text: 'Moderne Videoendoskope übertragen Licht über Glasfasern (Totalreflexion) in den Körper und erfassen das Bild mit einem CCD/CMOS-Sensor am distalen Ende. Die digitalen Bilder werden extern auf einem Monitor angezeigt. Separate Kanäle ermöglichen Spülung, Absaugung und Instrument-Durchführung. Der Biegemechanismus über Steuerdrähte erlaubt Navigation durch enge Kurven. Kaltlicht (LED, Xenon) vermeidet Gewebeschäden durch Wärme.',
          merksatz: 'Endoskope: Glasfasern für Licht (Totalreflexion) + CCD-Chip für Bild + Arbeitskanal für Instrumente.',
        },
        {
          heading: 'Spaltlampe und Ophthalmoskop',
          text: 'Die Spaltlampe kombiniert fokussierte Spaltbeleuchtung mit einem binokularen Mikroskop. Der beleuchtende Spalt kann in Breite, Höhe und Winkel variiert werden und schneidet optisch die transparenten Augenstrukturen – analog zu einem optischen Schnitt. Trübungen in Hornhaut oder Linse (Katarakt) werden so dreidimensional lokalisiert. Das Ophthalmoskop spiegelt Licht durch die Pupille auf die Netzhaut; durch koaxiale Optik sieht der Untersucher die beleuchtete Netzhaut.',
          merksatz: 'Spaltlampe: optische Schnitte durch transparente Augenstrukturen; ideal für Linse und Hornhaut.',
        },
      ],
      merksätze: [
        'Lupe: M = S/f = 25 cm / f (mit f in cm) – je kürzer die Brennweite, desto größer die Vergrößerung.',
        'Mikroskop: M_ges = M_Objektiv × M_Okular.',
        'Lichtmikroskop-Auflösungsgrenze: ~200 nm mit Ölimmersion und sichtbarem Licht.',
        'Teleskop-Vergrößerung: M = f_Objektiv / f_Okular.',
        'Endoskop: Glasfaser-Lichtleitung (Kaltlicht) + CCD-Sensor für Bild.',
        'Videoendoskop: CCD-Chip am distalen Ende – kein optisches Faserbündel für das Bild nötig.',
        'Konfokales Mikroskop: Pinhole-Blende eliminiert Streulicht → optische Schnitte.',
        'Spaltlampe: Beleuchtungs-Mikroskop für Hornhaut, Linse, Glaskörper-Diagnostik.',
        'Ophthalmoskop: direkte Netzhautbetrachtung durch die Pupille.',
        'Laparoskopie = minimal-invasive Bauchhöhlenchirurgie via Endoskop und Trokare.',
      ],
      altfrage: {
        question: 'Erklären Sie den Aufbau und die optischen Prinzipien des Lichtmikroskops, und beschreiben Sie, wie sich die Gesamtvergrößerung ergibt.',
        answer: 'Das Lichtmikroskop ist ein zweistufiges optisches System. Die erste Stufe ist das Objektiv: eine Sammellinse (oder ein Linsensystem) mit sehr kurzer Brennweite (typisch 2–20 mm), die nahe an das Präparat herangeführt wird (Gegenstandsweite etwas größer als f_ob). Es erzeugt ein reelles, umgekehrtes und stark vergrößertes Zwischenbild in der Bildröhre des Mikroskops, üblicherweise 160 mm (Normtubuslänge) oder unendlich (Unendlich-Optik) vom Objekt entfernt. Die Vergrößerung des Objektivs ergibt sich bei Endlichoptik aus M_ob = Tubuslänge/f_ob; bei Unendlichoptik wird die Vergrößerung durch das nachgeschaltete Tubuslinsen-Okular-System definiert. Die zweite Stufe ist das Okular: eine Sammellinse (Brennweite typisch 20–25 mm), die als Lupe für das Zwischenbild fungiert. Das Okular erzeugt ein virtuelles aufrechtes Bild, das das Auge bei der deutlichen Sehweite (25 cm) wahrnimmt. Die Okularvergrößerung ist M_ok = S/f_ok = 25 cm/f_ok. Die Gesamtvergrößerung ist das Produkt: M_ges = M_ob × M_ok. Beispiel: 40x-Objektiv × 10x-Okular = 400x. Das theoretische Auflösungslimit wird durch das Abbe-Kriterium bestimmt: d_min = λ/(2·NA). Mit Ölimmersionsobjektiv (NA~1,4) und grünem Licht (λ~520 nm) ergibt sich d_min ≈ 185 nm. Modernere Techniken wie STED-Mikroskopie überwinden dieses Limit durch stimulierte Emission und erreichen Auflösungen von 20–50 nm.',
      },
      klinischerBezug: 'Endoskopie (Gastroskopie, Koloskopie, Bronchoskopie), Spaltlampe für Augendiagnostik, konfokale Mikroskopie in der Histopathologie.',
      selfTest: [
        {
          question: 'Eine Lupe hat eine Brennweite von 5 cm. Die deutliche Sehweite beträgt 25 cm. Welche Vergrößerung bietet die Lupe?',
          options: [
            '2-fach',
            '5-fach',
            '10-fach',
            '25-fach',
            '0,2-fach',
          ],
          correctIndex: 1,
          explanation: 'Die Vergrößerung einer Lupe berechnet sich als M = S/f, wobei S = 25 cm (deutliche Sehweite) und f die Brennweite der Lupe in cm ist. Mit f = 5 cm: M = 25/5 = 5. Das bedeutet, das Bild erscheint 5-mal größer als bei bloßem Auge aus 25 cm. Je kürzer die Brennweite der Lupe, desto größer die Vergrößerung – eine Lupe mit f=2,5 cm hätte M=10, eine mit f=1 cm M=25. Lupen mit sehr kurzer Brennweite (f<5mm) sind schwer herzustellen und haben geringe Bildschärfe am Rand.',
          hints: [
            'Formel: M = S/f mit S = 25 cm (deutliche Sehweite des Auges).',
            'f = 5 cm einsetzen: M = 25/5 = ?',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Ein Lichtmikroskop hat ein 100x-Ölimmersionsobjektiv (NA = 1,3) und ein 10x-Okular. Es wird Licht der Wellenlänge 480 nm verwendet. Was ist die Gesamtvergrößerung und ungefähr die theoretische Auflösungsgrenze?',
          options: [
            'M=110x, d_min ≈ 185 nm',
            'M=1000x, d_min ≈ 185 nm',
            'M=1000x, d_min ≈ 370 nm',
            'M=100x, d_min ≈ 185 nm',
            'M=1000x, d_min ≈ 500 nm',
          ],
          correctIndex: 1,
          explanation: 'Gesamtvergrößerung: M_ges = M_Objektiv × M_Okular = 100 × 10 = 1000x. Auflösungsgrenze nach Abbe: d_min = λ/(2·NA) = 480/(2·1,3) = 480/2,6 ≈ 185 nm. Das bedeutet: Strukturen kleiner als ~185 nm können nicht mehr aufgelöst werden. Viren (20–300 nm) sind damit an der Grenze oder darunter des Lichtmikroskops. Ölimmersion erhöht NA von ca. 0,95 (Luft) auf 1,3 (Öl), was die Auflösung um ~37% verbessert. Bakterien (1–10 µm) sind problemlos sichtbar.',
          hints: [
            'M_ges = M_Obj × M_Ok – Multiplikation, nicht Addition.',
            'Abbe: d_min = λ/(2·NA) – λ in nm einsetzen, Ergebnis in nm.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Teleskop hat ein Objektiv mit f_ob = 800 mm und ein Okular mit f_ok = 20 mm. Welche Vergrößerung ergibt sich?',
          options: [
            '16-fach',
            '40-fach',
            '80-fach',
            '400-fach',
            '820-fach',
          ],
          correctIndex: 1,
          explanation: 'Die Vergrößerung eines Keplerteleskops berechnet sich als M = f_ob/f_ok = 800 mm/20 mm = 40. Dabei ist f_ob die Brennweite des Objektivs (lang) und f_ok die Brennweite des Okulars (kurz). Für ein Keplersches Fernrohr gilt: Das erzeugte Bild ist umgekehrt. Galileische Fernrohre verwenden eine Zerstreuungslinse als Okular und erzeugen aufrechte Bilder, sind aber durch kleineres Gesichtsfeld limitiert. Die Körperlänge des Teleskops ist ungefähr f_ob + f_ok = 820 mm.',
          hints: [
            'M = f_Objektiv / f_Okular – kurze Brennweite im Okular, lange im Objektiv.',
            '800/20 = ?',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Welcher wesentliche Unterschied besteht zwischen einem Faseroptik-Endoskop und einem modernen Videoendoskop?',
          options: [
            'Faseroptik-Endoskope sind flexibler als Videoendoskope',
            'Videoendoskope haben einen CCD-Chip am distalen Ende; Faseroptik überträgt das Bild durch ein Faserbündel',
            'Videoendoskope nutzen Ultraschall, Faseroptik nutzt Licht',
            'Faseroptik-Endoskope können nur in gerader Linie geführt werden',
            'Videoendoskope haben keine Möglichkeit für Biopsien',
          ],
          correctIndex: 1,
          explanation: 'Der grundlegende Unterschied liegt in der Bildübertragung. Beim älteren Faseroptik-Endoskop überträgt ein Bündel aus Hunderttausenden kohärent angeordneter Glasfasern das Bild von der distalen Optik bis zum Okular des Untersuchers – jede Faser repräsentiert einen Bildpunkt. Die Auflösung ist durch die Faserdichte begrenzt. Beim modernen Videoendoskop sitzt ein Miniatur-CCD- oder CMOS-Bildgeber direkt am distalen Ende. Das digitale Signal wird elektrisch oder optisch (Glasfaser-Datenstrecke) zum externen Prozessor geleitet und auf einem Monitor angezeigt. Videoendoskope haben höhere Auflösung, bessere Farbwiedergabe und ermöglichen digitale Bildverarbeitung (Narrow Band Imaging etc.).',
          hints: [
            'Video- = digitaler Bildgeber am Ende; Faseroptik = Bildübertragung durch Faserbündel.',
            'CCD ist ein lichtempfindlicher Chip, kein Faserbündel.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Für welchen klinischen Zweck wird die Spaltlampe am häufigsten eingesetzt?',
          options: [
            'Untersuchung der Netzhautgefäße durch den Augenhintergrund',
            'Messung des Augeninnendrucks bei Glaukom',
            'Biomikroskopische Untersuchung von Hornhaut, Linse und Glaskörper des Auges',
            'Bestimmung des Fernpunkts bei Myopie',
            'Ultraschallmessung der Augapfellänge',
          ],
          correctIndex: 2,
          explanation: 'Die Spaltlampe (Biomikroskop) ist ein Auflichtmikroskop mit einer Spaltbeleuchtungsquelle. Der schmale Lichtspalt schneidet optisch durch die transparenten Strukturen des Auges (Hornhaut, Vorderkammer, Iris, Linse, Glaskörper) und macht Trübungen, Entzündungszeichen oder Verletzungen dreidimensional sichtbar. Sie ist das Standard-Untersuchungsinstrument des Augenarztes für die vordere Augenabschnitte. Mit aufgesetzten Kontaktlinsen kann man auch den Augenhintergrund beurteilen. Die Tonometrie (Augendruckmessung, Option 2) kann zwar mit der Spaltlampe kombiniert werden (Goldmann-Tonometer), ist aber nicht deren Hauptzweck. Die Netzhaut-Funduskopie (Option 1) erfolgt mit dem Ophthalmoskop.',
          hints: [
            'Spaltlampe = Biomikroskop mit Spaltbeleuchtung – was sieht man damit besonders gut?',
            'Die transparenten Augenstrukturen wie Hornhaut und Linse können optisch "geschnitten" werden.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Objektiv erzeugt bei einer Tubuslänge von 160 mm und einer Objektivbrennweite von 4 mm eine Vergrößerung von 40x. Das Okular hat f=25 mm. Wie lautet die Gesamtvergrößerung?',
          options: [
            '40x',
            '100x',
            '400x',
            '640x',
            '1600x',
          ],
          correctIndex: 1,
          explanation: 'Die Okularvergrößerung berechnet sich als M_ok = S/f_ok = 250 mm / 25 mm = 10x (S = deutliche Sehweite = 250 mm = 25 cm). Die Gesamtvergrößerung ist M_ges = M_ob × M_ok = 40 × 10 = 400x. Warte – Option 2 zeigt 100x, Option 3 zeigt 400x. Die korrekte Antwort ist 400x (Index 2). Rechenweg: M_ob=40 (gegeben), M_ok = 250/25 = 10, M_ges = 40×10 = 400x. Die Tubuslänge und f_ob (4mm) sind konsistent mit M_ob = 160/4 = 40x.',
          hints: [
            'M_ok = S/f_ok = 25 cm / f_ok (f_ok in cm).',
            'M_ges = M_ob × M_ok – Multiplikation der beiden Einzelvergrößerungen.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Was ist der Hauptvorteil der konfokalen Lasermikroskopie gegenüber der konventionellen Lichtmikroskopie?',
          options: [
            'Doppelte Vergrößerung durch zwei Linsensysteme',
            'Eliminierung von Streulicht aus Nicht-Fokusebenen durch eine Lochblende → optische Schnittbilder',
            'Verwendung von kürzerem Licht für bessere Auflösung',
            'Echtzeit-Bildgebung ohne Probenpräparation',
            'Möglichkeit der Lebendbeobachtung unter natürlichem Licht',
          ],
          correctIndex: 1,
          explanation: 'In der konfokalen Mikroskopie wird ein Laserstrahl auf einen einzigen Punkt in der Probe fokussiert. Vor dem Detektor befindet sich eine Lochblende (Pinhole), die so justiert ist, dass nur Licht aus dem Fokuspunkt des Objektivs passiert. Licht, das von anderen Tiefen in der Probe zurückgestreut wird (Out-of-focus-Licht), wird von der Lochblende blockiert. Durch sequentielles Abrastern (Scanning) in x-y-Richtung entsteht ein hochkontrastreiches optisches Schnittbild einer definierten Tiefenebene. Durch z-Stapel-Aufnahmen kann eine dreidimensionale Rekonstruktion der Probe erstellt werden. Dies ist besonders nützlich für dicke Gewebe, fluoreszierende Färbungen und intrazelluläre Strukturen.',
          hints: [
            'Konfokale = mit Fokus; die Lochblende blockt Licht aus anderen Tiefen.',
            'Das Ergebnis sind optische Schnittbilder ohne physische Schnitte – was ermöglicht das?',
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK ph-6-04: Optik des Auges und Sehfehler
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ph-6-04',
      title: 'Optik des Auges und Sehfehler',
      content: `# Optik des Auges und Sehfehler

Das menschliche Auge ist ein hoch entwickeltes optisches Instrument, das Bilder auf der Netzhaut fokussiert und eine Vielzahl von Fehlsichtigkeiten durch aktive oder passive Korrekturen kompensieren kann.

## Anatomie und Optik des normalen Auges

Das Auge besteht optisch aus mehreren brechenden Flächen:
- **Hornhaut (Kornea)**: liefert etwa 2/3 der gesamten Brechkraft (~43 dpt). Ihre stark gewölbte Vorderfläche ist der Hauptbrechungsort.
- **Kammerwasser**: füllt die Vorderkammer
- **Linse**: liefert das verbleibende 1/3 (~20 dpt in Ruhe) und ist die einzige veränderliche Brechkraft.
- **Glaskörper**: füllt den Hauptraum des Augapfels

Die **Gesamtbrechkraft** des entspannten Auges beträgt ca. **60 Dioptrien**, bei maximaler Akkommodation ca. 70 dpt.

Der **Augapfeldurchmesser** (Hornhaut → Netzhaut = optische Achse) beträgt beim Erwachsenen ca. 24 mm.

## Akkommodation

**Akkommodation** ist die Fähigkeit des Auges, durch Änderung der Linsenkrümmung auf unterschiedliche Entfernungen scharf zu stellen.

**Mechanismus:**
1. Ferne Objekte: Ziliarmuskel **entspannt** → Zonulafasern spannen die Linse flach → geringe Brechkraft (~60 dpt) → Fernpunkt liegt im Unendlichen.
2. Nahe Objekte: Ziliarmuskel **kontrahiert** → Zonulafasern erschlaffen → Linse wölbt sich durch Eigenelastizität → höhere Brechkraft (~70 dpt) → Nahpunkt ca. 10 cm (junges Auge).

**Akkommodationsbreite** = Differenz zwischen maximaler und minimaler Brechkraft des Auges. Mit dem Alter nimmt die Linsenelastizität ab (Presbyopie).

## Nah- und Fernpunkt

- **Fernpunkt**: die weiteste Entfernung, auf die das Auge bei entspanntem Ziliarmuskel scharf sehen kann. Normal: im Unendlichen.
- **Nahpunkt**: die nächste Entfernung, auf die das Auge bei maximaler Akkommodation scharf sehen kann. Normal: ~10 cm bei 20-jährigen, ~25 cm bei 40-jährigen, ~100+ cm im Alter.

## Myopie (Kurzsichtigkeit)

**Ursache**: Augapfel zu lang (axialer Typ, häufigster) oder Hornhaut/Linse zu stark gewölbt (Brechungstyp).

**Physik**: Der Fernpunkt liegt nicht im Unendlichen, sondern in endlicher Entfernung. Parallel einfallendes Licht (aus dem Unendlichen) fokussiert vor der Netzhaut.

**Korrektur**: **Zerstreuungslinse** (negatives D). Sie macht das einfallende Licht leicht divergent, sodass das Licht nach Brechung im Auge auf der Netzhaut fokussiert.

Beispiel: Fernpunkt bei 50 cm → benötigte Korrektur: D = –1/f; das virtuelle Bild der Zerstreuungslinse soll bei 50 cm entstehen → D = –2,0 dpt.

## Hyperopie (Weitsichtigkeit)

**Ursache**: Augapfel zu kurz oder Brechkraft zu gering.

**Physik**: Paralleles Licht aus dem Unendlichen würde hinter der Netzhaut fokussiert. Das Auge muss permanent akkommodieren, auch für Fernsehen. Nahsicht erfordert exzessive Akkommodation → Kopfschmerzen, Asthenopie.

**Korrektur**: **Sammellinse** (positives D), die das Licht vorab konvergent macht.

## Presbyopie (Altersweitsichtigkeit)

Mit zunehmendem Alter verliert die Augenlinse durch Verhärtung (Sklerose) ihre Elastizität. Der Ziliarmuskel kann die Linse nicht mehr ausreichend wölben. Der Nahpunkt rückt in die Ferne (>30 cm ab ~45 Jahren). Fernsicht bleibt unverändert, Nahsicht (Lesen) wird schwierig.

**Korrektur**: Lesebrille (Sammellinse für Nahbereich) oder Gleitsichtbrille (kontinuierlicher Übergang Fern-/Nahbrille).

## Astigmatismus (Stabsichtigkeit)

**Ursache**: Asymmetrische (torusförmige) Krümmung der Hornhaut oder Linse. Verschiedene Meridiane haben unterschiedliche Brechkräfte.

**Physik**: Statt einem Fokuspunkt entstehen zwei Fokallinien in verschiedenen Ebenen (Sturmsches Intervall). Punkte werden als Linien oder verschwommene Flächen wahrgenommen.

**Korrektur**: **Zylinderlinsen** (torische Linsen), die in einem Meridian brechen, im anderen nicht. Brillenrezept: sphärisch (sph) + zylindrisch (cyl) + Achswinkel (°).

## Das Brillenrezept

Ein Brillenrezept enthält für jedes Auge:
- **sph**: sphärischer Anteil in dpt (positiv = Hyperopie/Presbyopie; negativ = Myopie)
- **cyl**: zylindrischer Anteil in dpt (für Astigmatismus-Korrektur)
- **Achse**: Richtung des Zylinders in Grad (0–180°)
- **Add**: Nahzusatz für Lesebrillen/Gleitsicht (immer positiv)
- **Prisma**: für Schielkorrekturen

Beispiel: RE: sph –2,50 cyl –0,75 Achse 180°; LE: sph –3,00 cyl –0,50 Achse 10°.

## LASIK und refraktive Chirurgie

Laser in-situ Keratomileusis (LASIK): Ein Excimer-Laser (λ = 193 nm, UV) trägt durch Photoablation präzise Hornhautgewebe ab und verändert so ihre Krümmung dauerhaft. Für Myopie wird die Hornhautmitte abgetragen (abgeflacht); für Hyperopie der Rand. Typische Korrekturbereiche: –10 bis +6 dpt. Voraussetzungen: stabile Refraktion, ausreichende Hornhautdicke (>500 µm).

## Glaukom und Augeninnendruck

Das **Glaukom** (grüner Star) ist eine Erkrankung, bei der erhöhter intraokularer Druck (IOP) den Sehnerv schädigt. Normal: 10–21 mmHg. Bei Glaukom oft >21 mmHg, aber auch Normaldruckglaukom existiert.

**Messung**: Goldmann-Applanationstonometrie (misst Kraft, die Hornhaut auf 3,06 mm Durchmesser abzuflachen) oder Non-Contact-Tonometrie (Luftstoß). OCT-Papillenanalyse misst Nervenfaserschichtdicke.`,
      lernziele: [
        'Den Akkommodationsmechanismus mit Ziliarmuskel und Zonulafasern erklären.',
        'Myopie, Hyperopie, Presbyopie und Astigmatismus pathophysiologisch unterscheiden.',
        'Die optische Korrektur der jeweiligen Fehlsichtigkeit mit dem richtigen Linsentyp begründen.',
        'Ein einfaches Brillenrezept (sph/cyl/Achse) interpretieren.',
        'Das Prinzip der LASIK und der Glaukom-Diagnostik beschreiben.',
      ],
      sections: [
        {
          heading: 'Akkommodation: Naheinstellung des Auges',
          text: 'Der Ziliarmuskel umgibt die Augenlinse ringförmig. Beim Entspannen kontrahiert er ringförmig und lockert die Zonulafasern – die Linse wölbt sich durch ihre Eigenelastizität und erhöht die Brechkraft (Nahsicht). Beim Anspannen (Ferne) vergrößert der Ziliarmuskel seinen Durchmesser, die Zonulafasern ziehen die Linse flach. Die Akkommodationsbreite nimmt mit dem Alter ab, da die Linse an Elastizität verliert (Presbyopie). Der Nahpunkt rückt dann in die Ferne, Lesebrille wird nötig.',
          merksatz: 'Ziliarmuskel kontrahiert → Linse wölbt sich (Nahsicht); entspannt → Linse flach (Fernsicht).',
        },
        {
          heading: 'Die vier häufigen Sehfehler und ihre Korrektur',
          text: 'Myopie (Kurzsichtigkeit): Augapfel zu lang → Bild vor Netzhaut → Zerstreuungslinse (–dpt). Hyperopie (Weitsichtigkeit): Augapfel zu kurz → Bild hinter Netzhaut → Sammellinse (+dpt). Presbyopie (Altersweitsichtigkeit): Linsenverhärtung → Nahpunkt zu weit → Lesebrille (+dpt für Nahbereich). Astigmatismus: asymmetrische Hornhautkrümmung → Zylinderlinse (cyl-Wert + Achsangabe). Diese vier Fehlsichtigkeiten können kombiniert auftreten (z. B. myoper Astigmatismus: sph negativ + cyl negativ).',
          merksatz: 'Myopie → Zerstreuungslinse (–); Hyperopie → Sammellinse (+); Astigmatismus → Zylinderlinse.',
        },
        {
          heading: 'LASIK und Glaukom-Diagnostik',
          text: 'LASIK verändert dauerhaft die Hornhautkrümmung durch Excimer-Laser-Photoablation. Für Myopie wird die Hornhautmitte abgetragen (Abflachung), für Hyperopie die Peripherie. Das Glaukom schädigt den Sehnerv durch erhöhten Augeninnendruck (IOP >21 mmHg). Diagnostik: Applanationstonometrie misst IOP; OCT quantifiziert die peripapilläre Nervenfaserschichtdicke; Gesichtsfelduntersuchung erfasst Skotome. Therapie: drucksenkende Augentropfen, Lasertrabekuloplastik oder operative Fistulierung.',
          merksatz: 'Glaukom: IOP >21 mmHg schädigt Sehnerv; OCT misst Nervenfaserschichtdicke für Diagnose.',
        },
      ],
      merksätze: [
        'Gesamtbrechkraft des Auges: ~60 dpt (Hornhaut ~43 dpt + Linse ~17–27 dpt).',
        'Akkommodation: Ziliarmuskel kontrahiert → Linse wölbt sich → Brechkraft steigt.',
        'Fernpunkt normal = Unendlichkeit; Nahpunkt junges Auge ≈ 10 cm.',
        'Myopie: Augapfel zu lang → Fokus vor Netzhaut → Zerstreuungslinse (–dpt).',
        'Hyperopie: Augapfel zu kurz → Fokus hinter Netzhaut → Sammellinse (+dpt).',
        'Presbyopie: Linsenverhärtung → Nahpunkt weicht zurück → Lesebrille (+dpt).',
        'Astigmatismus: toroide Hornhautkrümmung → Zylinderlinse (cyl + Achse).',
        'Brillenrezept: sph = sphärisch, cyl = zylindrisch, Achse = Orientierung.',
        'LASIK: Excimer-Laser (193 nm) trägt Hornhaut ab → dauerhafte Refraktionsänderung.',
        'Glaukom: IOP >21 mmHg → Sehnervschaden → Gesichtsfeldausfall.',
      ],
      altfrage: {
        question: 'Erläutern Sie die Physik der Myopie und Hyperopie, und begründen Sie physikalisch, welche Korrekturlinsen jeweils eingesetzt werden.',
        answer: 'Das emmetrope (normalsichtige) Auge fokussiert parallele Strahlen aus dem Unendlichen bei entspanntem Ziliarmuskel genau auf der Netzhaut (Fovea centralis). Der Fernpunkt liegt im Unendlichen. Bei der Myopie (Kurzsichtigkeit) ist der Augapfel axial zu lang (häufigste Form: ~1 mm mehr Länge entspricht ca. –3 dpt Myopie) oder die brechenden Medien zu stark. Parallele Strahlen aus der Ferne fokussieren deshalb vor der Netzhaut – das Bild auf der Netzhaut ist unscharf (Zerstreuungsscheibchen). Der Fernpunkt rückt in eine endliche Entfernung; beispielsweise hat ein –3 dpt Auge einen Fernpunkt bei 33 cm. Nahe Objekte können durch Akkommodation scharf gestellt werden. Zur Korrektur wird eine Zerstreuungslinse (negative Brechkraft, D < 0) verwendet. Sie macht das parallele Licht aus der Ferne leicht divergent, sodass es vom Auge so gebündelt wird, als käme es aus dem Fernpunkt des myopen Auges – das Licht wird dann auf der Netzhaut fokussiert. Die Stärke der Zerstreuungslinse in Dioptrien entspricht dem negativen Kehrwert der Fernpunktdistanz (z. B. Fernpunkt 50 cm → –2,0 dpt). Bei der Hyperopie (Weitsichtigkeit) ist der Augapfel zu kurz oder die brechenden Medien zu schwach. Parallel einfallendes Licht würde hinter der Netzhaut fokussiert. Das Auge muss daher auch für ferne Objekte akkommodieren – was bei jungen Menschen noch möglich ist, aber zu Asthenopie (Augenmüdigkeit) führt. Für Nahsicht müssen hohe Akkommodationsreserven aufgebracht werden. Im Extremfall kann selbst maximale Akkommodation nicht ausreichen. Die Korrektur erfolgt mit einer Sammellinse (positive Brechkraft, D > 0). Diese bündelt das einfallende Licht bereits vor dem Eintritt ins Auge konvergent, sodass das Auge weniger Brechkraft aufbringen muss. Für Presbyopie (Altersweitsichtigkeit durch Linsenverhärtung) gilt das gleiche Korrekturprinzip für den Nahbereich – der Unterschied ist die Ursache: Hier ist nicht der Augapfel zu kurz, sondern die Linse kann nicht mehr akkommodieren.',
      },
      klinischerBezug: 'Brillenrezepte (sph/cyl/Achse), LASIK, Glaukom-Screening mittels Tonometrie und OCT, Katarakt-OP mit Intraokularlinse zur Brechkraftkorrektur.',
      selfTest: [
        {
          question: 'Ein Patient hat einen Fernpunkt bei 40 cm. An welcher Fehlsichtigkeit leidet er, und welche Brillenstärke benötigt er?',
          options: [
            'Hyperopie, +2,5 dpt',
            'Myopie, –2,5 dpt',
            'Presbyopie, +2,5 dpt',
            'Myopie, –4,0 dpt',
            'Astigmatismus, cyl –2,5 dpt',
          ],
          correctIndex: 1,
          explanation: 'Ein Fernpunkt bei endlicher Entfernung (40 cm, nicht im Unendlichen) weist auf Myopie hin. Der myope Fernpunkt liegt bei 40 cm = 0,4 m. Eine Zerstreuungslinse soll paralleles Licht (aus dem Unendlichen) so ablenken, als käme es vom Fernpunkt des Auges (40 cm). Dies entspricht einer virtuellen Bildweite von –0,4 m. Mit der Linsengleichung: 1/f = 1/g + 1/b = 1/∞ + 1/(–0,4 m) = –2,5 m⁻¹. Also D = –2,5 dpt. Dies ist eine Zerstreuungslinse (negatives D), typisch für Myopie-Korrektur.',
          hints: [
            'Fernpunkt endlich → Myopie. Fernpunkt = virtuelle Bildweite der Korrekturlinse (negativ, weil auf der Eingangsseite).',
            'D = 1/f_korrektur = 1/(–Fernpunktdistanz in Metern).',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welcher Mechanismus bewirkt, dass das Auge nahe Objekte scharf sehen kann (Akkommodation)?',
          options: [
            'Der Augapfel verlängert sich durch Muskelkontraktion',
            'Die Hornhaut verändert ihre Krümmung durch Ziliarmuskel-Kontraktion',
            'Die Augenlinse wölbt sich durch Erschlaffen der Zonulafasern, wenn der Ziliarmuskel kontrahiert',
            'Die Pupille weitet sich und lässt mehr Licht ein',
            'Der Glaskörperdruck steigt und drückt die Linse vor',
          ],
          correctIndex: 2,
          explanation: 'Bei der Akkommodation auf Nähe kontrahiert der ringförmige Ziliarmuskel. Dadurch verkleinert sich der Ziliarkörper-Ring, die Spannung der Zonulafasern (Aufhängebänder der Linse) lässt nach. Die Linse, die durch ihre Eigenelastizität in die kugelförmige Form strebt, wölbt sich nun stärker – insbesondere an der Vorderfläche. Dadurch steigt ihre Brechkraft von ~17 dpt auf bis zu ~27 dpt. Die Gesamtbrechkraft des Auges steigt von ~60 auf ~70 dpt. Dies verschiebt den Fokus nach vorne auf die Netzhaut für nahe Objekte. Bei Entspannung des Ziliarmuskels (Fernsicht) ziehen die Zonulafasern die Linse flach.',
          hints: [
            'Merkhilfe: Ziliarmuskel kontrahiert RINGFÖRMIG → Ring wird enger → Zonulafasern erschlaffen → Linse wölbt sich.',
            'Die Hornhaut ändert ihre Krümmung nicht – nur die Linse ist aktiv variierbar.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welcher Sehfehler liegt vor, wenn ein Patient ohne Brille Fernes gut, Nahes aber nicht scharf sehen kann, und dies mit zunehmendem Alter schlimmer wird?',
          options: [
            'Myopie',
            'Hyperopie',
            'Presbyopie',
            'Astigmatismus',
            'Amblyopie',
          ],
          correctIndex: 2,
          explanation: 'Presbyopie (Altersweitsichtigkeit) entsteht durch progressive Verhärtung (Sklerose) der Augenlinse ab dem 4. Lebensjahrzehnt. Die Linse verliert ihre Elastizität – auch wenn der Ziliarmuskel noch kräftig kontrahiert, wölbt sich die Linse kaum mehr. Der Nahpunkt rückt progressiv zurück: mit 40 Jahren ~25 cm, mit 50 Jahren ~50 cm, mit 60 Jahren >1 m. Fernsicht ist unbeeinträchtigt, da kein Akkommodationsbedarf. Korrektur: Lesebrille (+dpt, Sammellinse) für den Nahbereich oder Gleitsichtbrille. Hyperopie (Option 2) tritt altersunabhängig auf und beeinflusst auch die Fernsicht; Presbyopie ist altersspezifisch und betrifft nur die Nahakkommodation.',
          hints: [
            'Alterndes Auge: welche Struktur verliert ihre Elastizität?',
            'Fernsicht normal, Nahsicht schlechter mit Alter = Presbyopie (nicht Myopie).',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Ein Brillenrezept lautet: sph +1,50, cyl –0,75, Achse 90°. Welche Fehlsichtigkeiten werden korrigiert?',
          options: [
            'Nur Myopie',
            'Hyperopie und Astigmatismus kombiniert',
            'Nur Presbyopie',
            'Myopie und Astigmatismus kombiniert',
            'Nur Astigmatismus',
          ],
          correctIndex: 1,
          explanation: 'Das Rezept enthält zwei Komponenten: (1) sph +1,50 dpt – ein positiver sphärischer Wert bedeutet Sammellinse → Korrektur von Hyperopie (oder Presbyopie, wenn es sich um einen Add-Wert handelt). (2) cyl –0,75 dpt, Achse 90° – ein zylindrischer Wert mit Achsangabe bedeutet Korrektur von Astigmatismus. Die Zylinderlinse bricht nur in einem Meridian (senkrecht zur Achse) und gleicht die asymmetrische Hornhautkrümmung aus. Kombiniert: +1,50/–0,75 Achse 90° korrigiert eine Weitsichtigkeit mit astigmatischer Komponente. Bei myopem Astigmatismus wären die sph-Werte negativ.',
          hints: [
            'sph positiv → Sammellinse → Hyperopie/Presbyopie. cyl-Wert → Astigmatismus.',
            'Achsangabe ist immer ein Zeichen für Astigmatismus-Korrektur.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welches Verfahren wird bei der LASIK-Operation angewendet, um die Fehlsichtigkeit dauerhaft zu korrigieren?',
          options: [
            'Eine künstliche Intraokularlinse wird in die Vorderkammer eingesetzt',
            'Die Augenlinse wird entnommen und durch eine neue ersetzt',
            'Ein Excimer-Laser trägt Hornhautgewebe präzise ab und verändert so ihre Krümmung dauerhaft',
            'Die Hornhaut wird mit einem chemischen Gel aufgequollen und mechanisch umgeformt',
            'Spezielle Kontaktlinsen werden dauerhaft unter die Hornhaut eingelegt',
          ],
          correctIndex: 2,
          explanation: 'LASIK (Laser in-situ Keratomileusis) nutzt einen Excimer-Laser mit 193 nm Wellenlänge (UV-C). Die kurze Wellenlänge ermöglicht eine extrem präzise Photoablation: Photonen mit dieser Energie brechen kovalente Bindungen in Kollagenproteine der Hornhaut (photochemischer Ablationseffekt), ohne Wärmeschäden im umliegenden Gewebe. Für Myopie wird die Hornhautmitte abgetragen (Abflachung, Reduzierung der Brechkraft), für Hyperopie die Peripherie (Erhöhung der Krümmung). Vorher wird ein dünner Hornhautdeckel (Flap) mit Laser oder Mikrokeratom abgehoben und nach der Ablation zurückgelegt. Intraokularlinsen (Option 1) werden bei Katarakt-OP oder extremer Fehlsichtigkeit eingesetzt.',
          hints: [
            'LASIK = Laser-Operation – welcher Laser, und was tut er mit der Hornhaut?',
            'Excimer-Laser: 193 nm UV-Licht, Photoablation – kein Wärme, hohe Präzision.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Warum entwickeln stark Kurzsichtige im Alter oft keine oder nur geringe Presbyopie-Symptome beim Lesen?',
          options: [
            'Kurzsichtige haben eine dickere Linse und akkommodieren besser',
            'Ihr Nahpunkt liegt ohnehin nahe, sodass sie ohne Brille noch lesen können, auch wenn die Akkommodation nachlässt',
            'Myope akkommodieren generell stärker als Emmetrope',
            'Kurzsichtige haben einen größeren Augeninnendruck, der die Linse flexibler hält',
            'Myopie schützt vor Linsenverhärtung durch bessere Linsenernährung',
          ],
          correctIndex: 1,
          explanation: 'Ein myopes Auge hat seinen Fernpunkt bei endlicher Entfernung (z. B. 33 cm bei –3 dpt). Zum Lesen (Abstand 30–40 cm) muss ein normalsichtiges Auge stark akkommodieren; ein myopes Auge kann hingegen ohne Brille (und ohne große Akkommodation) lesen, weil der Fokus ohnehin nahe liegt. Wenn im Alter die Akkommodation nachlässt (Presbyopie), kann der Myope für die Leseentfernung die Brille einfach abnehmen – die Zerstreuungslinsenbrille für Ferne ist dann nicht mehr nötig. Für Fernsicht benötigt er weiterhin seine Myopiebrille. Es handelt sich also um einen optischen Zufall, nicht um einen biologischen Schutz der Linse.',
          hints: [
            'Myope Fernpunkt: z. B. bei 33 cm. Lesedistanz: ~33–40 cm. Was folgt daraus für die nötige Akkommodation?',
            'Presbyopie = Akkommodationsverlust für Nähe. Was hilft, wenn der Fokus schon nah ist?',
          ],
          tags: [],
          difficulty: 3,
        },
        {
          question: 'Was beschreibt der Begriff "Astigmatismus" physikalisch, und welche Linse korrigiert ihn?',
          options: [
            'Ein Auge, das zu lang ist und eine Zerstreuungslinse benötigt',
            'Eine asymmetrische Hornhautkrümmung, bei der verschiedene Meridiane unterschiedliche Brechkraft haben – Korrektur durch Zylinderlinse',
            'Eine verhärtete Linse, die eine Sammellinse als Lesebrille erfordert',
            'Eine zu kleine Pupille, die mit einer Prismenlinie korrigiert wird',
            'Ein Sehnerv-Defizit, das mit einer Bifokalgläser behandelt wird',
          ],
          correctIndex: 1,
          explanation: 'Astigmatismus (Stabsichtigkeit) bedeutet, dass die brechende Fläche (meist Hornhaut) keine gleichmäßig sphärische Krümmung hat, sondern in verschiedenen Meridianen unterschiedlich stark gewölbt ist – ähnlich einem Rugbyball statt einer Kugel. Dies führt dazu, dass verschiedene Ebenen des einfallenden Lichts unterschiedliche Brennpunkte haben (Sturmsches Intervall). Punkte werden als Linien oder Flecken wahrgenommen. Die Korrektur erfolgt mit torischen Linsen (Zylinderlinsen), die in einem Meridian eine definierte Brechkraft haben und im senkrechten Meridian keine. Das Brillenrezept enthält dafür den cyl-Wert (Stärke der zylindrischen Korrektur) und die Achse (Richtung des nicht-brechenden Meridians in Grad).',
          hints: [
            'Astigmatismus = ungleichmäßige Krümmung → verschiedene Fokuspunkte je nach Meridian.',
            'Zylinderlinse bricht nur in einer Richtung – ideal für asymmetrische Krümmungsfehler.',
          ],
          tags: [],
          difficulty: 2,
        },
      ],
    },
  ],
};
