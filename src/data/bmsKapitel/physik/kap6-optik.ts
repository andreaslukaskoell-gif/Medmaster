import type { Kapitel } from '../types';

export const physKap6: Kapitel = {
  id: 'phys-kap6',
  title: 'Optik',
  subject: 'physik',
  icon: '🔬',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ph-6-01',
      title: 'Geometrische Optik — Reflexion und Brechung',
      content: `Licht ist eine elektromagnetische Welle, die sich im Vakuum mit c = 3 × 10⁸ m/s ausbreitet. In der geometrischen Optik wird Licht vereinfacht als Strahlen dargestellt, die sich geradlinig ausbreiten und an Grenzflächen nach klar definierten Gesetzen reflektiert oder gebrochen werden. Diese Näherung gilt, solange die Strukturen, mit denen das Licht interagiert, viel größer als die Wellenlänge des Lichts sind.

Das Reflexionsgesetz ist das einfachste Grundgesetz der Optik: Der Einfallswinkel α (gemessen zur Flächennormalen) ist gleich dem Ausfallswinkel α'. Einfallsstrahl, Flächennormale und ausfallender Strahl liegen in einer Ebene. Spiegelreflexion (spekuläre Reflexion) tritt an glatten Flächen auf; diffuse Reflexion an rauen Oberflächen (Körper erscheinen von allen Richtungen sichtbar). Das Fundus des Auges ist diffus reflektierend — daher ist die direkte Ophthalmoskopie möglich.

Das Snelliussche Brechungsgesetz beschreibt, was passiert, wenn Licht von einem Medium ins andere übergeht: n₁·sin(α₁) = n₂·sin(α₂). Der Brechungsindex n = c/v_Medium gibt an, um welchen Faktor die Lichtgeschwindigkeit im Medium verringert ist. Vakuum: n = 1 exakt; Luft: n ≈ 1,0003 (praktisch 1); Wasser: n = 1,33; Augenkammerwasser: n ≈ 1,336; Kristallinse: n ≈ 1,39–1,42 (von außen nach innen zunehmend); Glas: n ≈ 1,5–1,9. Wenn Licht von n₁ zu n₂ > n₁ übergeht, wird es zur Normalen hin gebrochen (Winkel kleiner). Bei n₂ < n₁ wird es von der Normalen weg gebrochen.

Die Totalreflexion tritt auf, wenn Licht von einem dichteren Medium (n₁ > n₂) unter einem Winkel einfällt, der den kritischen Winkel überschreitet: sin(α_krit) = n₂/n₁. Wenn α₁ > α_krit, wird der gesamte Strahl reflektiert — keine Brechung mehr. Für Glas (n=1,5) in Luft (n=1): α_krit = arcsin(1/1,5) = arcsin(0,667) ≈ 41,8°. Glasfasern (Lichtwellenleiter) nutzen Totalreflexion: Licht wird an den Faserwänden totalreflektiert und kann sich auch in gebogenen Fasern ausbreiten. In der Medizin: Endoskope, Laparoskope, Bronchoskope und Angioskope nutzen Glasfaserbündel zur Bildübertragung und Beleuchtung.

Ein besonders wichtiger Effekt der Totalreflexion ist seine Ausnutzung in der Fluoreszenzrastermikroskopie (TIRF — Total Internal Reflection Fluorescence): Durch Totalreflexion entsteht ein evaneszentes Feld, das nur wenige hundert Nanometer in das Präparat eindringt. Damit können Zellmembranprozesse mit minimaler Hintergrundfluoreszenz abgebildet werden — eine exzellente Technik zur Beobachtung von Membranproteinen und Exozytoseereignissen in Echtzeit.`,
      lernziele: [
        'Reflexionsgesetz und Snelliussches Brechungsgesetz anwenden',
        'Brechungsindex und seine physikalische Bedeutung erklären',
        'Totalreflexion und kritischen Winkel berechnen',
        'Anwendungen der Totalreflexion in der Medizin (Endoskopie) kennen',
      ],
      sections: [
        {
          heading: 'Reflexion und Brechung — Grundgesetze',
          text: 'Reflexionsgesetz: Einfallswinkel = Ausfallswinkel (α = α\'). Snellius: n₁·sin(α₁) = n₂·sin(α₂). Brechungsindex n = c₀/v_Medium. Brechungsindizes: Luft ≈ 1; Wasser = 1,33; Kornea = 1,376; Linse = 1,39–1,42; Glas = 1,5–1,9. Licht bricht zur Normalen hin, wenn es in dichteres Medium (höheres n) eintritt; von Normalen weg in weniger dichtes Medium. Anwendung: Prismen, Linsen, Augenbrechung.',
          merksatz: 'Snellius: n₁·sin(α₁) = n₂·sin(α₂); n = c/v_Medium',
        },
        {
          heading: 'Totalreflexion und Lichtleiter',
          text: 'Totalreflexion: bei α > α_krit = arcsin(n₂/n₁), nur wenn n₁ > n₂. Für Glas/Luft: α_krit ≈ 41,8°. Glasfaser: Kern (n_Kern ≈ 1,5) + Mantel (n_Mantel ≈ 1,45) → α_krit ≈ 74°. Licht in der Faser trifft unter kleinem Winkel auf Wand → Totalreflexion → kein Verlust. Endoskopie: flexible Glasfaserbündel leiten Bild und Licht. TIRF-Mikroskopie: evaneszentes Feld < 200 nm Eindringtiefe. Kohärenztomographie: Glasfaser-Interferometer.',
        },
        {
          heading: 'Brechung am menschlichen Auge',
          text: 'Gesamtbrechkraft Auge ≈ 60 Dioptrien. Kornea: ≈ 43 dpt (stärkste Fläche, n_Luft/n_Kornea = 1/1,376). Linse: 15–33 dpt (variabel durch Akkommodation). Glaskörper und Kammerwasser: Lichtleitung. Brennpunkt im Emmetropie auf Fovea centralis. Hornhautbrechung nicht veränderbar → Laserkorrektur (LASIK) ändert Hornhautkrümmung. Linse akkommodierbar → Brillenkorrektur für Nahsicht.',
        },
      ],
      merksätze: [
        'Brechungsgesetz Snellius: n₁·sin(α₁) = n₂·sin(α₂)',
        'Totalreflexion: α > arcsin(n₂/n₁), nur von dichterem zu weniger dichtem Medium',
        'Auge: Kornea 43 dpt (fix) + Linse 15–33 dpt (akkommodierend) = ≈ 60 dpt gesamt',
      ],
      altfrage: {
        question: 'Ein Lichtstrahl trifft unter 45° (zur Normalen) von Luft (n₁=1) auf eine Wasseroberfläche (n₂=1,33). Unter welchem Winkel wird er gebrochen? (sin(45°) = 0,707)',
        answer: 'Snellius: n₁·sin(α₁) = n₂·sin(α₂). 1 × 0,707 = 1,33 × sin(α₂). sin(α₂) = 0,707/1,33 = 0,532. α₂ = arcsin(0,532) ≈ 32,1°. Der Strahl wird von 45° auf 32° zur Normalen hin gebrochen — er nähert sich beim Eintritt ins dichtere Medium der Senkrechten an. Das erklärt, warum Objekte unter Wasser versetzt erscheinen.',
      },
      klinischerBezug: 'In der Endoskopie werden flexible Glasfaserbündel genutzt, um Bilder aus Körperhöhlen zu übertragen. Moderne Videoendoskope haben an der Spitze eine CCD-Kamera statt Glasfasern für die Bildübertragung. Glasfasern werden weiterhin für die Lichtleitung (Beleuchtung) verwendet. Laparoskopie, Gastroskopie, Koloskopie, Bronchoskopie — alle nutzen dieses Prinzip. LASIK (Laser-assisted in situ Keratomileusis) nutzt einen Excimer-Laser (UV, 193 nm), um die Hornhautkrümmung zu verändern und damit Brechungsfehler zu korrigieren. Die Präzision beträgt ± 0,25 Dioptrien bei einem Ablationsvolumen von wenigen Mikrolitern Hornhautgewebe.',
      selfTest: [
        {
          question: 'Ein Lichtstrahl geht von Wasser (n=1,33) in Luft (n=1) über. Unter welchem Einfallswinkel tritt Totalreflexion auf?',
          options: [
            'α > 41,8°',
            'α > 48,8°',
            'α > 30°',
            'Totalreflexion tritt nicht auf, da n_Luft < n_Wasser',
            'α > 90°',
          ],
          correctIndex: 1,
          explanation: 'Totalreflexion: sin(α_krit) = n₂/n₁ = 1/1,33 = 0,752 → α_krit = arcsin(0,752) ≈ 48,8°. Bei α > 48,8° (gemessen zur Normalen) tritt Totalreflexion auf. Totalreflexion ist nur möglich, wenn Licht von dichterem (n_Wasser=1,33) in weniger dichtes (n_Luft=1) Medium übergeht.',
          hints: ['α_krit = arcsin(n₂/n₁) = arcsin(1/1,33).', '1/1,33 ≈ 0,752; arcsin(0,752) ≈ 48,8°.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zum Brechungsindex n ist korrekt?',
          options: [
            'n = 1 im Vakuum und kleiner als 1 in allen anderen Medien',
            'n ist die Wellenlänge des Lichts im Medium',
            'n = c₀/v_Medium; größeres n bedeutet geringere Lichtgeschwindigkeit im Medium',
            'n hat die Einheit m/s',
            'n ist immer kleiner als 1 in transparenten Medien',
          ],
          correctIndex: 2,
          explanation: 'Brechungsindex n = c₀/v_Medium; dimensionslos. Im Vakuum: n = 1 (v = c₀). In Materie: v < c₀ → n > 1. Glas (n = 1,5): Licht bewegt sich mit v = c₀/1,5 ≈ 2 × 10⁸ m/s. Diamant (n = 2,4): v = c₀/2,4 ≈ 1,25 × 10⁸ m/s. Höheres n → langsamere Lichtgeschwindigkeit → stärkere Brechung.',
          hints: ['n = c₀/v; Da v ≤ c₀, muss n ≥ 1 für alle Medien.', 'Höheres n = langsameres Licht = stärkere Brechung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum nutzt die Endoskopie Glasfasern statt Spiegel zur Bildübertragung?',
          options: [
            'Glasfasern sind billiger als Spiegel',
            'Glasfasern können durch Totalreflexion Licht auch in gebogenen Bahnen leiten',
            'Spiegel absorbieren zu viel Licht',
            'Glasfasern verstärken das Bild',
            'Spiegel sind für Infrarotstrahlung geeignet, nicht für sichtbares Licht',
          ],
          correctIndex: 1,
          explanation: 'Glasfasern nutzen Totalreflexion: Licht trifft auf der Faser-Innenfläche immer unter einem Winkel größer als α_krit auf und wird vollständig reflektiert. Dadurch kann Licht auch um Kurven geführt werden — unmöglich mit Spiegeln. Die Verluste pro km Glasfaser sind sehr gering (< 0,2 dB/km). Für die flexible Endoskopie sind biegbare Glasfaserbündel unverzichtbar.',
          hints: ['Totalreflexion: Licht verlässt die Faser nicht, egal wie sie gebogen ist.', 'Spiegel funktionieren nur bei gerader oder einfach umgelenkter Strahlenführung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welcher Brechungsindex hat die menschliche Hornhaut (Kornea)?',
          options: ['n = 1,0 (wie Luft)', 'n = 1,20', 'n = 1,376', 'n = 1,5 (wie Glas)', 'n = 2,0'],
          correctIndex: 2,
          explanation: 'Die Kornea hat n ≈ 1,376. Der Übergang von Luft (n=1) zur Kornea (n=1,376) ist die stärkste Brechungsgrenzfläche im Auge und liefert etwa 43 von 60 Gesamtdioptrien. Wasser im Auge (n ≈ 1,336) hat ähnlichen Brechungsindex wie Kornea → Taucher unter Wasser verlieren die Korneabrechkraft (Wasser/Kornea-Grenzfläche kaum wirksam) → verschwommenes Sehen ohne Taucherbrille.',
          hints: ['Kornea = Hornhaut; n liegt zwischen Wasser (1,33) und Glas (1,5).', 'Standardwert: n_Kornea ≈ 1,376.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Bei einem Übergang von Luft (n=1) nach Glas (n=1,5) wird der Lichtstrahl:',
          options: [
            'Von der Normalen weg gebrochen (Winkel vergrößert sich)',
            'Zur Normalen hin gebrochen (Winkel verkleinert sich)',
            'Nicht gebrochen, sondern nur abgeschwächt',
            'Totalreflektiert',
            'Parallel zur Grenzfläche weitergeleitet',
          ],
          correctIndex: 1,
          explanation: 'Beim Übergang von weniger dichtem (n=1, Luft) zu dichterem Medium (n=1,5, Glas) wird der Strahl zur Normalen hin gebrochen → der Brechungswinkel ist kleiner als der Einfallswinkel. Merkhilfe: "Von Luft in Glas — zur Senkrechten hin; von Glas in Luft — von der Senkrechten weg." Totalreflexion kann hier nicht auftreten (tritt nur bei Übergang zum weniger dichten Medium auf).',
          hints: ['n₁ < n₂ (Luft < Glas) → sin(α₂) < sin(α₁) → α₂ < α₁.', 'Snellius: n₁·sin(α₁) = n₂·sin(α₂) → sin(α₂) = n₁/n₂ × sin(α₁) < sin(α₁).'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-6-02',
      title: 'Linsen, optische Systeme und Aberrationen',
      content: `Linsen sind transparente optische Bauteile, die parallele Lichtstrahlen in einem Punkt (Brennpunkt) sammeln oder scheinbar von einem Punkt auszugehen scheinen. Die Linsenwirkung beruht auf der Brechung an den (meist kugelförmigen) Oberflächen. Die Brechkraft D = 1/f einer Linse wird in Dioptrien [dpt = 1/m] angegeben und hängt von den Krümmungsradien der Flächen und dem Brechungsindex des Linsenglases ab.

Die Linsengleichung (Abbildungsgleichung) verknüpft Brennweite f, Gegenstandsweite g und Bildweite b: 1/f = 1/g + 1/b. Aus dieser Formel lässt sich für jede Gegenstandsweite die Bildweite berechnen. Die Vergrößerung m = b/g = −B/G (B = Bildgröße, G = Gegenstandsgröße). Das Minuszeichen bedeutet: Das Bild ist umgekehrt, wenn b > 0 (reelles Bild). Wenn g > f: Das Bild ist reell, umgekehrt und auf der anderen Seite der Linse. Wenn g < f: Das Bild ist virtuell, aufrecht und auf derselben Seite wie der Gegenstand — die Lupe!

Sammellinsen (Konvexlinsen) haben positive Brennweite f > 0 und positive Brechkraft D > 0. Sie werden genutzt für: Korrektionsgläser bei Weitsichtigkeit (Hyperopie), als Lupe (D = 250mm/f für Vergrößerung bis 10×), als Objektiv und Okular im Mikroskop. Zerstreuungslinsen (Konkavlinsen) haben negative Brennweite f < 0 und D < 0. Sie werden genutzt für: Korrektionsgläser bei Kurzsichtigkeit (Myopie). Das Bild ist immer virtuell, aufrecht und verkleinert.

Bei kombinierten Linsensystemen addieren sich die Brechkräfte: D_ges = D₁ + D₂ + ... (gilt exakt nur bei dünnen Linsen in direktem Kontakt). Das Mikroskop kombiniert zwei Konvexlinsen: Das Objektiv (kurze Brennweite f_obj) erzeugt ein reales, umgekehrtes, stark vergrößertes Zwischenbild. Das Okular wirkt als Lupe und bildet dieses Zwischenbild auf die Netzhaut ab. Gesamtvergrößerung: M = M_Obj × M_Ok = (L/f_obj) × (250mm/f_ok), wobei L der Tubuslänge entspricht.

Aberrationen sind Abbildungsfehler optischer Systeme. Sphärische Aberration: Randstrahlen brechen stärker als paraxiale Strahlen → unscharfes Bild. Korrektion durch asphärische Linsen oder Linsenkombinationen. Chromatische Aberration: Verschiedene Wellenlängen werden unterschiedlich stark gebrochen (Dispersion) → Farbfehler. Korrektion durch Achromaten (Kitt aus zwei verschiedenen Glassorten). Im Auge: Die Kornea hat erhebliche sphärische Aberration, die durch die asphärische Form der Linse teilweise kompensiert wird. Intraokularlinsen (IOL) nach Katarakt-Extraktion: asphärische IOLs für bessere Bildqualität.`,
      lernziele: [
        'Linsengleichung (1/f = 1/g + 1/b) und Vergrößerung anwenden',
        'Sammel- und Zerstreuungslinsen unterscheiden',
        'Optische Instrumente (Lupe, Mikroskop) in ihrer Funktionsweise erklären',
        'Aberrationen (sphärisch, chromatisch) beschreiben',
      ],
      sections: [
        {
          heading: 'Linsengleichung und Abbildung',
          text: '1/f = 1/g + 1/b. Brechkraft D = 1/f [dpt = m⁻¹]. Vergrößerung: m = b/g = −B/G. Sammellinse (f > 0, D > 0): g > 2f → reell, verkleinert; g = 2f → reell, gleich groß; f < g < 2f → reell, vergrößert; g < f → virtuell, vergrößert (Lupe). Zerstreuungslinse (f < 0, D < 0): immer virtuell, aufrecht, verkleinert. Additivität: D_ges = D₁ + D₂ (Linsenkombinationen). Auge: D_Auge ≈ 60 dpt (Kornea + Linse).',
          merksatz: 'Linsengleichung: 1/f = 1/g + 1/b; D = 1/f [dpt]; Lupe: g < f → virtuell, aufrecht',
        },
        {
          heading: 'Optische Instrumente',
          text: 'Lupe: Vergrößerung V_Lupe = 25 cm/f (deutliche Sehweite = 25 cm). f = 5 cm → V = 5×. Mikroskop: M_ges = M_Obj × M_Ok. Tubuslänge L = Abstand Hinterfokus Objektiv − Vorderfokus Okular. Typisch: M_Obj = 40×, M_Ok = 10× → M_ges = 400×. Limit: Beugungsgrenze ≈ λ/2 ≈ 200 nm (Abbe). Fernrohr: Winkelvergrößerung W = f_Obj/f_Ok; astronomisch (umgekehrtes Bild) vs. Galilei-Fernrohr (Zerstreuungslinse als Okular, aufrechtes Bild).',
        },
        {
          heading: 'Aberrationen und Bildqualität',
          text: 'Sphärische Aberration: Randstrahlen fokussieren anders als achsennahe Strahlen → unscharfe Peripherie. Korrektion: asphärische Linsen, Blendenöffnung klein halten. Chromatische Aberration: Dispersion n(λ) → Farbstreuung. Korrektion: Achromat (Kron- + Flintglas). Koma: Astigmatismus bei außeraxialen Strahlen. Im Auge: Aberrometrie (Wellenfrontmessung, Hartmann-Shack-Sensor) misst individuelle Aberrationen → Wellenfront-geführte Laserkorrektur. Kontaktlinsen vs. Brille: Kontaktlinsen eliminieren Brechung durch rotierende Linse, weniger Randaberrationen.',
        },
      ],
      merksätze: [
        'Linsengleichung: 1/f = 1/g + 1/b; positiv f = Sammellinse; negativ f = Zerstreuungslinse',
        'Mikroskopvergrößerung: M = M_Obj × M_Ok; Limit ≈ 200 nm (Abbe-Kriterium)',
        'D [dpt] = 1/f[m]; +3 dpt Brille kompensiert Hyperopie (+3 dpt zu wenig Brechkraft)',
      ],
      altfrage: {
        question: 'Ein Gegenstand befindet sich 30 cm vor einer Sammellinse mit f = 10 cm. Wo entsteht das Bild, und um welchen Faktor ist es vergrößert?',
        answer: '1/b = 1/f − 1/g = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → b = 15 cm. Das Bild entsteht 15 cm hinter der Linse (reelles Bild). Vergrößerung: m = −b/g = −15/30 = −0,5. Das Bild ist halbiert (|m| = 0,5) und umgekehrt (Minuszeichen). Prüfen: g = 30 cm > 2f = 20 cm → reelles, verkleinertes Bild — stimmt!',
      },
      klinischerBezug: 'Intraokularlinsen (IOL) werden nach der Katarakt-Extraktion in den Kapselsack der Linse implantiert. Monofokale IOLs haben feste Brechkraft und sind für Ferne oder Nähe ausgelegt. Multifokale IOLs haben konzentrische Zonen mit unterschiedlicher Brechkraft (wie eine Bifokale) für verschiedene Entfernungen. Torische IOLs korrigieren zusätzlich Astigmatismus. Die Berechnung der IOL-Brechkraft vor der Operation basiert auf der Linsengleichung und Messungen von Achslänge (Biometrie), Hornhautkrümmung (Keratometrie) und angestrebter Refraktion. Formel: SRK-T, Haigis, Barrett Universe II — computerbasierte Varianten der Linsengleichung.',
      selfTest: [
        {
          question: 'Ein Gegenstand steht 20 cm vor einer Sammellinse mit f = 20 cm. Wo entsteht das Bild?',
          options: ['20 cm hinter der Linse', '40 cm hinter der Linse', 'Im Unendlichen', '20 cm vor der Linse', '10 cm hinter der Linse'],
          correctIndex: 2,
          explanation: '1/b = 1/f − 1/g = 1/20 − 1/20 = 0 → b = ∞. Wenn der Gegenstand genau im Brennpunkt steht (g = f), entsteht das Bild im Unendlichen — paralleles Lichtbündel tritt aus. Dies ist das Grundprinzip des Kollimators und des Teleskop-Objektivs (Stern als Quelle im Unendlichen → Bild im Brennpunkt).',
          hints: ['1/b = 1/f − 1/g = 1/20 − 1/20 = 0.', 'Wenn 1/b = 0, dann b = ∞ (Unendlichkeit).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Zerstreuungslinse mit f = −10 cm bildet einen 30 cm entfernten Gegenstand ab. Was gilt für das Bild?',
          options: [
            'Reell, umgekehrt, bei 30 cm',
            'Virtuell, aufrecht, verkleinert',
            'Reell, aufrecht, vergrößert',
            'Virtuell, umgekehrt, vergrößert',
            'Kein Bild entsteht',
          ],
          correctIndex: 1,
          explanation: '1/b = 1/f − 1/g = 1/(−10) − 1/30 = −3/30 − 1/30 = −4/30 → b = −7,5 cm. Negatives b: Bild liegt auf derselben Seite wie der Gegenstand → virtuell. m = −b/g = −(−7,5)/30 = 0,25 → verkleinert und aufrecht. Zerstreuungslinsen erzeugen immer virtuelle, aufrechte, verkleinerte Bilder.',
          hints: ['Zerstreuungslinse: f < 0. Einsetzen: 1/b = 1/f − 1/g = 1/(−10) − 1/30.', 'Negatives b = virtuelles Bild auf der Gegenstandsseite.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Brechkraft hat eine Linse mit f = 50 cm?',
          options: ['50 dpt', '20 dpt', '2 dpt', '0,5 dpt', '5 dpt'],
          correctIndex: 2,
          explanation: 'D = 1/f = 1/0,5 m = 2 dpt. Merke: f in METER einsetzen! 50 cm = 0,5 m. Eine Lesebrille mit +2 dpt hat f = 0,5 m. Eine Hornhaut mit 43 dpt hat f = 1/43 ≈ 2,3 cm.',
          hints: ['D = 1/f [dpt = m⁻¹]. f muss in Metern angegeben sein!', 'f = 50 cm = 0,5 m → D = 1/0,5 = 2 dpt.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist chromatische Aberration?',
          options: [
            'Unschärfe durch zu große Linsenöffnung',
            'Verzerrung des Bilds durch Randstrahlen',
            'Farbfehler durch unterschiedliche Brechung verschiedener Wellenlängen (Dispersion)',
            'Fehler durch Kratzer auf der Linsenoberfläche',
            'Unschärfe durch vibrierende optische Elemente',
          ],
          correctIndex: 2,
          explanation: 'Chromatische Aberration: Verschiedene Wellenlängen des Lichts haben unterschiedliche Brechungsindizes im Glas (Dispersion). Daher werden Blau und Rot in verschiedenen Brennpunkten fokussiert → Farbränder am Bild. Korrektion durch Achromat: Kronglas + Flintglas (unterschiedliche Dispersion, kompensieren sich). Im Auge: Chromatische Aberration vorhanden, aber durch neuronale Verarbeitung teilweise kompensiert.',
          hints: ['Chromat = Farbe. Verschiedene Farben (Wellenlängen) → verschiedene Brechung → verschiedene Brennpunkte.', 'Dispersion: n(Blau) > n(Rot) in Glas → Blau stärker gebrochen.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Vergrößerung erzielt eine Lupe mit f = 5 cm bei deutlicher Sehweite 25 cm?',
          options: ['1×', '2×', '5×', '25×', '50×'],
          correctIndex: 2,
          explanation: 'Lupenvergrößerung: V = D_Sehweite/f = 25 cm/5 cm = 5×. Die deutliche Sehweite (Bezugsgröße für Vergrößerung) beträgt konventionell 25 cm. Eine Lupe mit f = 5 cm erzeugt gegenüber dem Betrachten aus 25 cm eine 5-fache Vergrößerung. Stärkere Lupen haben kürzere Brennweiten.',
          hints: ['V_Lupe = 25 cm/f. f = 5 cm.', '25/5 = 5 → fünffache Vergrößerung.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-6-03',
      title: 'Wellenoptik — Interferenz und Polarisation',
      content: `Die geometrische Optik versagt, wenn Strukturen in der Größenordnung der Lichtwellenlänge vorliegen. Dann muss die Wellennatur des Lichts berücksichtigt werden — Licht kann interferieren, beugen und polarisiert werden. Diese wellenoptischen Phänomene sind die Grundlage einiger der wichtigsten medizinischen Bildgebungsverfahren.

Interferenz von Licht erfordert **Kohärenz**: die Wellen müssen eine feste Phasendifferenz aufrechterhalten. Natürliches Licht (Sonne, Glühlampen) ist inkohärent — die Phasen variieren zufällig. Laser (Light Amplification by Stimulated Emission of Radiation) ist kohärent: alle Photonen haben exakt dieselbe Frequenz, Phase und Polarisation. Dies ermöglicht sehr effiziente Interferenz. Das Youngsche Doppelspaltexperiment demonstriert Lichtinterferenz: Zwei kohärente Quellen erzeugen helle und dunkle Streifen (Maxima und Minima).

Dünnschichtinterferenz erklärt die Farben von Seifenblasen und Ölflecken auf Wasser. Das Licht wird an der Vorderseite und Rückseite der dünnen Schicht reflektiert; die Wegdifferenz beträgt 2d (zweifache Schichtdicke). Für senkrechten Einfall gilt: konstruktiv bei 2d = n·λ (mit einem Phasensprung um π an der Vorderseite bei n_Schicht > n_davor). Auf einem Farbfilm auf Wasser werden verschiedene Wellenlängen an verschiedenen Stellen (unterschiedliche Schichtdicken) konstruktiv reflektiert — bunte Farben entstehen. Anti-Reflexionsschichten auf Brillengläsern nutzen destruktive Interferenz: d = λ/4 → destruktiv → weniger Reflexion → mehr Transmission.

Polarisation: Licht als Transversalwelle kann in einer definierten Ebene schwingen — linear polarisiertes Licht. Natürliches Licht hat keine bevorzugte Schwingungsebene (alle Richtungen gleichmäßig). Polarisationsfilter lassen nur die Komponente parallel zur Filterorien tierung durch. Das Malussche Gesetz beschreibt die Intensität nach Durchgang durch einen Analysator: I = I₀·cos²(θ), wobei θ der Winkel zwischen Polarisationsrichtung und Analysatorachse ist. Bei θ = 90°: I = 0 — vollständige Auslöschung.

Beim Brewster-Winkel θ_B = arctan(n₂/n₁) ist das an einer Grenzfläche reflektierte Licht vollständig senkrecht zur Einfallsebene polarisiert. Dies wird bei Laserfenstern (Brewster-Fenster) genutzt, um polarisationsbedingte Verluste zu eliminieren. In der medizinischen Bildgebung spielt Polarisation eine wichtige Rolle: Polarisationsmikroskopie macht doppelbrechende (birefringente) Strukturen sichtbar. Kollagen ist doppelbrechend — in polarisiertem Licht leuchten Kollagenfasern in charakteristischen Farben (Sirius-Rot-Färbung unter polarisiertem Licht zeigt Kollagenorganisation in Biopsien). Harnsäurekristalle (Gicht) und Calciumoxalatmonohydrat-Kristalle (Nierensteine) sind charakteristisch doppelbrechend — wichtiges diagnostisches Kriterium in der Gelenk-Flüssigkeitsanalyse.`,
      lernziele: [
        'Kohärenz als Voraussetzung für Interferenz erklären',
        'Dünnschichtinterferenz und ihre Anwendungen (Anti-Reflexion) beschreiben',
        'Polarisation, Malussches Gesetz und Brewster-Winkel erklären',
        'Polarisationsmikroskopie als diagnostisches Werkzeug kennen',
      ],
      sections: [
        {
          heading: 'Interferenz und Kohärenz',
          text: 'Kohärenz = feste Phasendifferenz zwischen Wellen. Räumliche Kohärenz: über Querschnitt; zeitliche Kohärenz: Kohärenzlänge L_c = c/Δf. Laser: hohe Kohärenz (L_c = m bis km). Natürliches Licht: L_c ≈ μm. Dünnschichtinterferenz: 2d = m·λ/n (konstruktiv). Anti-Reflexion: d = λ/(4n). OCT: Weißlicht-Interferometrie mit Kohärenzlänge < 10 μm → Tiefenauflösung < 10 μm. Holographie: Interferenz von Objekt- und Referenzstrahl → 3D-Bild gespeichert im Interferenzmuster.',
          merksatz: 'Interferenz braucht Kohärenz; destruktiv bei 2d = (m+½)·λ; Anti-Reflexion: d = λ/4',
        },
        {
          heading: 'Polarisation und Anwendungen',
          text: 'Natürliches Licht: unpolarisiert (alle Schwingungsebenen). Linearpolarisiert: feste Ebene. Kreispolarisiert/Elliptisch. Malussches Gesetz: I = I₀·cos²(θ). Brewster-Winkel: θ_B = arctan(n₂/n₁) — reflektiertes Licht vollständig polarisiert. LCD-Bildschirme: zwischen zwei Polarisationsfiltern (90° zueinander) flüssigkristallkann die Polarisationsebene drehen. Polarisationsmikroskopie: Doppelbrechung (Kollagen, Harnsäurekristalle, Muskelfasern) sichtbar machen.',
        },
        {
          heading: 'OCT — Optische Kohärenztomographie',
          text: 'OCT: Interferometrie mit Weißlicht oder schmalbandigen Lasern. Tiefenauflösung = Kohärenzlänge ≈ 5–15 μm. Laterale Auflösung: 10–15 μm. Netz hautschichten sichtbar: RNFL (retinale Nervenfaserschicht), Ganglienzellschicht, Photorezeptoren. Anwendungen: Glaukom-Monitoring (RNFL-Dicke), Makuladegeneration, diabetische Retinopathie, Papillenödeme. Intravaskulärer OCT (IVOCT): Koronararterienplaque-Charakterisierung. Keine Strahlung, nicht-invasiv, schnell (100.000 A-Linien/s).',
        },
      ],
      merksätze: [
        'Malussches Gesetz: I = I₀·cos²(θ) — bei 90° vollständige Auslöschung',
        'OCT: Weißlicht-Interferometrie → Auflösung 5–15 μm für Netzhautschichten',
        'Polarisationsmikroskopie: Doppelbrechung von Kollagen, Harnsäurekristallen sichtbar',
      ],
      altfrage: {
        question: 'Zwei Polarisationsfilter sind kreuzweise angeordnet (90° zueinander). Ein drittes Filter wird zwischen die beiden gestellt, bei 45° zur ersten Filterachse. Wie ändert sich die Intensität des durchgelassenen Lichts?',
        answer: 'Ohne mittleres Filter: Intensität nach zwei gekreuzten Filtern = I₀·cos²(90°) = 0. Mit mittlerem Filter (45°): Nach erstem Filter I₁ = I₀/2 (linear polarisiert). Nach zweitem Filter (45° gedreht): I₂ = I₁·cos²(45°) = I₀/2 × ½ = I₀/4. Nach drittem Filter (nochmals 45° gedreht): I₃ = I₂·cos²(45°) = I₀/4 × ½ = I₀/8. Durch Einfügen des mittleren Filters erhöht sich die Transmission von 0 auf I₀/8 — paradox anmutend, aber korrekt! Das mittlere Filter "dreht" die Polarisationsebene schrittweise.',
      },
      klinischerBezug: 'Die OCT (Optische Kohärenztomographie) hat die Diagnostik der Augenheilkunde revolutioniert. Mit einer Axialauflösung von 5–10 μm — deutlich besser als MRI oder CT — können einzelne Netzhautschichten dargestellt werden. Das retinale Nervenfaserschicht (RNFL) verliert beim Glaukom Dicke, bevor der Patient Gesichtsfeldausfälle bemerkt. Die OCT-Angiographie (OCTA) visualisiert Blutgefäße ohne Kontrastmittel durch Bewegungsdetektion der Blutfluss-Speckle. In der Kardiologie erlaubt der intravaskuläre OCT (IVOCT) die Charakterisierung von Koronararterienplaques mit histologischer Auflösung — Unterscheidung zwischen stabilem fibrotischen und vulnerablem lipidreichem Plaque in Echtzeit während der Herzkatheteruntersuchung.',
      selfTest: [
        {
          question: 'Was besagt das Malussche Gesetz?',
          options: [
            'Die Intensität des gebeugten Lichts ist proportional zur Wellenlänge',
            'Lineare polarisiertes Licht verringert seine Intensität nach Durchgang durch einen Analysator: I = I₀·cos²(θ)',
            'Reflektiertes Licht ist immer vollständig polarisiert',
            'Die Frequenz von Licht ändert sich bei Polarisation',
            'Polarisiertes Licht ist monochromatisch',
          ],
          correctIndex: 1,
          explanation: 'Malussches Gesetz: I = I₀·cos²(θ), wobei θ der Winkel zwischen der Polarisationsebene des einfallenden Lichts und der Transmissionsachse des Analysators ist. Bei θ = 0°: I = I₀ (maximale Transmission). Bei θ = 90°: I = 0 (vollständige Auslöschung). Bei θ = 45°: I = I₀/2.',
          hints: ['θ = Winkel zwischen Polarisationsebene und Analysatorachse.', 'cos(0°) = 1 → I = I₀; cos(90°) = 0 → I = 0.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Strukturen können mit der Polarisationsmikroskopie besonders gut dargestellt werden?',
          options: [
            'Zellmembranen (da lipophil)',
            'Mitochondrien (da elektronendicht)',
            'Kollagenfasern und Harnsäurekristalle (da doppelbrechend)',
            'Nukleinsäuren (da UV-absorbierend)',
            'Lysosomen (da sauer)',
          ],
          correctIndex: 2,
          explanation: 'Doppelbrechende (birefringente) Strukturen ändern die Polarisationsebene des Lichts — dadurch erscheinen sie hell auf dunklem Hintergrund zwischen gekreuzten Polarisationsfiltern. Kollagen ist stark doppelbrechend → Fibrose, Narben, Arteriosklerose-Plaques leuchten. Harnsäurekristalle (Gicht-Diagnose!) zeigen negative Doppelbrechung; Calciumoxalat-Kristalle positive Doppelbrechung — entscheidend für die Gelenkflüssigkeitsanalyse.',
          hints: ['Doppelbrechung = Birefringenz = polarisationsoptisch aktiv.', 'In der Rheumatologie wird Gelenkflüssigkeit polarisationsmikroskopisch analysiert — wofür?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist Laserlicht für Interferenzexperimente besser geeignet als normales Licht?',
          options: [
            'Weil Laser höhere Intensität hat',
            'Weil Laser monochromatisch und kohärent ist — gleiche Phase und Frequenz aller Photonen',
            'Weil Laser keine Wellennatur hat',
            'Weil Laser im UV-Bereich emittiert',
            'Weil Laser kein Wellenoptikmerkmal zeigt',
          ],
          correctIndex: 1,
          explanation: 'Interferenz setzt Kohärenz voraus — feste Phasendifferenz zwischen zwei Quellen. Laser emittiert stimuliert: alle Photonen haben exakt gleiche Frequenz, Phase und Richtung (sehr hohe zeitliche und räumliche Kohärenz). Natürliches Licht hat kurze Kohärenzlänge (μm), Laser kann Kohärenzlängen von Metern bis Kilometern erreichen — ideal für stabile Interferenzmuster.',
          hints: ['Kohärenz = feste Phasendifferenz. Laser: hohe Kohärenz; Glühlampe: geringe Kohärenz.', 'Ohne Kohärenz mittelt sich das Interferenzmuster weg → kein sichtbares Muster.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Anti-Reflexionsschicht auf Glas (n_Glas = 1,5) soll für grünes Licht (λ = 550 nm) wirken. Welche Schichtdicke d wird benötigt? (Schicht: n_S = 1,22 ≈ √n_Glas)',
          options: ['550 nm', '275 nm', '113 nm', '137,5 nm', '220 nm'],
          correctIndex: 2,
          explanation: 'Für Anti-Reflexion (destruktive Interferenz): d = λ/(4·n_S) = 550 nm/(4 × 1,22) = 550/4,88 ≈ 112,7 nm ≈ 113 nm. Die Wellenlänge im Schichtmedium ist λ_S = λ/n_S; für destruktive Interferenz des reflektierten Lichts wird d = λ_S/4 benötigt (Gangunterschied 2d = λ_S/2). In der Optikherstellung werden solche Schichten (MgF₂: n ≈ 1,38) durch Aufdampfen aufgebracht.',
          hints: ['d = λ/(4·n_S). λ = 550 nm, n_S = 1,22.', '550/(4 × 1,22) = 550/4,88 ≈ 113 nm.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Bei welchem Einfallswinkel ist reflektiertes Licht an einer Glas-Luft-Grenzfläche vollständig polarisiert? (n_Glas = 1,5, n_Luft = 1)',
          options: ['33,7°', '41,8°', '56,3°', '45°', '90°'],
          correctIndex: 2,
          explanation: 'Brewster-Winkel: θ_B = arctan(n₂/n₁) = arctan(1/1,5) = arctan(0,667) ≈ 33,7° (Luft nach Glas). Für Glas nach Luft: θ_B = arctan(n_Luft/n_Glas) = arctan(1/1,5) ≈ 33,7°. Alternativ: das Komplement von 33,7° = 56,3° ist der Winkel vom Lot her gemessen für Luft nach Glas. Bei θ_B = 56,3° (in Luft auf Glas) ist das reflektierte Licht vollständig polarisiert.',
          hints: ['Brewster: θ_B = arctan(n_Transmission/n_Einfall).', 'Luft (1) auf Glas (1,5): θ_B = arctan(1,5/1) = arctan(1,5) ≈ 56,3°.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-6-04',
      title: 'Das Auge — Optik und Fehlsichtigkeiten',
      content: `Das menschliche Auge ist ein hochkomplexes optisches Instrument, das über Jahrhunderttausende der Evolution optimiert wurde. Die optischen Komponenten des Auges arbeiten zusammen, um ein scharfes Bild auf der Retina zu erzeugen — und dies bei enormem Helligkeitsbereich (von Mondlicht bis Sonnenlicht: 11 Größenordnungen!) und über Entfernungen von wenigen Zentimetern bis unendlich.

Das Licht trifft zuerst auf die Kornea (Hornhaut), die mit einem Brechungsindex von n ≈ 1,376 und einer Vorderflächen-Krümmung von R ≈ 7,8 mm die stärkste brechende Fläche des Auges ist — Brechkraft ca. 43 Dioptrien. Dies sind etwa 72% der gesamten Augenbrechkraft von ca. 60 dpt. Die Kornea hat eine feste Brechkraft, die durch Laserchirurgie (LASIK, PRK) verändert werden kann.

Dahinter liegt die Linse, deren Brechkraft durch die Zonulafasern und den Ziliarmuskel verändert werden kann — dies ist die **Akkommodation**. Im entspannten Auge sind die Zonulafasern gespannt (Ziliarmuskel entspannt) und die Linse ist flach: niedrige Brechkraft (ca. 18–20 dpt), Fernpunkt im Unendlichen. Beim Nahsehen kontrahiert der Ziliarmuskel, die Zonulafasern entspannen, die Linse wölbt sich elastisch und erhöht ihre Brechkraft auf ca. 30–33 dpt. Der Nahpunkt eines gesunden 20-Jährigen liegt bei 7–10 cm.

Das emmetrope (normalsichtige) Auge projiziert paralleles Licht (aus dem Unendlichen) auf die Fovea centralis — den Bereich schärfsten Sehens, ca. 1,5 mm im Durchmesser, mit der höchsten Dichte an Zapfen (~120.000/mm²). Das Bild auf der Retina ist umgekehrt und verkleinert — das Gehirn "korrigiert" dies neuronal.

**Myopie** (Kurzsichtigkeit): Der Augapfel ist zu lang, oder die Brechkraft zu hoch. Paralleles Licht fokussiert vor der Retina. Korrektion: Zerstreuungslinse (negative Brechkraft), um das Licht zu divergieren, bevor es ins Auge tritt. **Hyperopie** (Weitsichtigkeit): Der Augapfel ist zu kurz, oder die Brechkraft zu gering. Paralleles Licht würde hinter der Retina fokussieren. Das Auge muss auch im Ruhezustand akkommodieren. Korrektion: Sammellinse (positive Brechkraft). **Astigmatismus**: Die Hornhaut ist nicht kugelförmig, sondern torusförmig (unterschiedliche Krümmungsradien in zwei senkrechten Meridianebenen). Korrektion: Zylinderlinse, die nur in einer Ebene bricht. **Presbyopie** (Alterssichtigkeit): Ab ca. 40 Jahren verliert die Linse ihre Elastizität → Akkommodationsamplitude nimmt ab → Nahpunkt rückt ferner. Korrektion: Lesebrille (positive Dioptrien), die die fehlende Akkommodation ersetzt.

Die Pupille (gesteuert vom M. sphincter iridis über parasympathische Innervation und M. dilatator iridis über sympathische Innervation) reguliert die Lichtmenge: Im Dunkeln max. 8 mm Durchmesser (25-fache Fläche gegenüber hell mit 2 mm). Der Pupillenreflex (Licht in ein Auge → Konstriktion beider Pupillen) ist ein wichtiger neurologischer Befund: Fehlende direkte oder konsensuelle Reaktion weist auf Schäden im N. opticus, N. oculomotorius oder Hirnstamm hin.`,
      lernziele: [
        'Optischen Aufbau des Auges beschreiben (Kornea, Linse, Retina)',
        'Akkommodationsmechanismus und Akkommodationsbreite erklären',
        'Myopie, Hyperopie, Astigmatismus und Presbyopie diagnostizieren und Korrektion angeben',
        'Pupillenreflex und seine klinische Bedeutung kennen',
      ],
      sections: [
        {
          heading: 'Optischer Aufbau des Auges',
          text: 'Kornea: n ≈ 1,376; Krümmung R ≈ 7,8 mm; Brechkraft ≈ 43 dpt (72% der Gesamtbrechkraft). Kammerwasser: n ≈ 1,336. Linse: n = 1,39–1,42 (Gradient); Brechkraft 18–33 dpt (akkommodationsabhängig). Glaskörper: n ≈ 1,336. Axiale Länge emmetrop: 23–24 mm. Gesamtbrechkraft ≈ 60 dpt (Fernpunkt ∞). Fovea centralis: 1,5 mm Durchmesser, 120.000 Zapfen/mm², kein Randbereich von Stäbchen.',
          merksatz: 'Kornea: 43 dpt (fix); Linse: 18–33 dpt (akkommodierend); Gesamt ≈ 60 dpt',
        },
        {
          heading: 'Fehlsichtigkeiten und Korrektionen',
          text: 'Myopie (Kurzsichtigkeit): Achse zu lang oder D zu groß → Bild vor Retina. Korrektion: Zerstreuungslinse (neg. dpt). Hyperopie (Weitsichtigkeit): Achse zu kurz oder D zu klein → Bild hinter Retina. Korrektion: Sammellinse (pos. dpt). Astigmatismus: unterschiedliche Hornhaukrümmung in zwei Achsen → kein Brennpunkt sondern Brennlinien. Korrektion: Zylinderlinse. Presbyopie: Linsenelastizitätsverlust → ↓ Akkommodation. Korrektion: Lesebrille (+1 bis +3 dpt). LASIK: Excimer-Laser (193 nm) formt Hornhaut um → dauerhaft veränderte Brechkraft.',
        },
        {
          heading: 'Pupille und Lichtanpassung',
          text: 'Pupillenweite: 2–8 mm (hell bis dunkel). Pupillenreflex: N. opticus (afferent) → Prätektum → N. oculomotorius (efferent) → M. sphincter iridis → Miosis. Konsensuelle Reaktion: Licht in einem Auge → Miosis beider Augen. Klinisch: fehlende direkte Reaktion + erhaltene konsensuelle = Läsion N. oculomotorius (Efferenz). Fehlende direkte + fehlende konsensuelle = Läsion N. opticus (Afferenz) auf dieser Seite. Marcus-Gunn-Pupille (RAPD): relative afferente Pupillendefekt bei Optikusneuritis.',
        },
      ],
      merksätze: [
        'Myopie → Zerstreuungslinse (neg. dpt); Hyperopie → Sammellinse (pos. dpt)',
        'Akkommodation: Ziliarmuskel kontrahiert → Zonula entspannt → Linse wölbt → D↑',
        'Pupillenreflex: Licht → N. II → Prätektum → N. III → Miosis (direkt und konsensell)',
      ],
      altfrage: {
        question: 'Ein 60-jähriger Patient kann ohne Brille nur bis 1 m scharf sehen (Fernpunkt 1 m). Welche Brillengläser braucht er für die Ferne? Und wenn er zum Lesen eine Akkommodation auf 33 cm benötigt, welche Lesebrillen-Dioptrien addiert man?',
        answer: 'Fernbrille: Fernpunkt bei 1 m → Brille muss paralleles Licht (von ∞) in 1 m Entfernung bündeln. Zerstreuungslinse: f = −1 m → D = −1 dpt. Lesebrille-Zusatz: Nahpunkt soll auf 33 cm gesetzt werden. Ohne Brille sieht er bis 1 m; für 33 cm braucht er +D (Sammellinse bringt 33 cm "näher"). 1/f_lesen = 1/0,33 − 1/1 = 3 − 1 = 2 dpt Zusatz. Also Lesebrille gesamt: −1 + 2 = +1 dpt. Alternativ: Bifokal oder Gleitsichtglas mit −1 dpt oben (Ferne) und +1 dpt unten (Nähe).',
      },
      klinischerBezug: 'Myopie betrifft in Deutschland etwa 35% der Erwachsenen, in Ostasien bis 80% junger Erwachsener — ein globales Gesundheitsproblem. Hochmyopie (> −6 dpt) ist mit erhöhtem Risiko für Netzhautablösung, Makuladegeneration und Glaukom assoziiert. Korrektionsmöglichkeiten: Brille, Kontaktlinsen, LASIK (ab −0,5 bis −12 dpt), phake Intraokularlinsen (sehr hohe Myopie). Grauer Star (Katarakt) ist die häufigste Blindheitsursache weltweit: Trübung der Linse (Proteindenaturierung, Oxidation) → Operation mit Implantation einer Kunstlinse (IOL). Die IOL-Berechnung nutzt die Linsengleichung: gewünschte Nachrefraktion = 0 dpt (emmetrop), Biometrie liefert Achslänge und Korneatopographie, Formel berechnet die optimale IOL-Brechkraft.',
      selfTest: [
        {
          question: 'Welche Linsenart wird zur Korrektur von Kurzsichtigkeit (Myopie) verwendet?',
          options: [
            'Sammellinse (konvex, positive Dioptrien)',
            'Zerstreuungslinse (konkav, negative Dioptrien)',
            'Zylinderlinse',
            'Bifokale Linse',
            'Keine Linse — nur Laserkorrektur möglich',
          ],
          correctIndex: 1,
          explanation: 'Bei Myopie fokussiert das Auge paralleles Licht vor der Retina (zu starke Brechkraft oder zu lange Achse). Eine Zerstreuungslinse (konkav, negative Brechkraft, z.B. −3 dpt) divergiert parallele Strahlen, so dass das Auge sie in einem weiter entfernten Punkt — auf der Retina — sammeln kann. Merke: Myopie → Minus-Glas; Hyperopie → Plus-Glas.',
          hints: ['Myopie = Licht fokussiert VOR der Netzhaut. Was muss die Brille tun?', 'Zerstreuungslinse divergiert Licht → verschiebt Brennpunkt nach hinten.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was passiert bei der Akkommodation für die Nahsicht?',
          options: [
            'Der Ziliarmuskel entspannt, die Zonulafasern werden gespannt, die Linse wird flacher',
            'Der Ziliarmuskel kontrahiert, die Zonulafasern entspannen, die Linse wird dicker/wölbt sich',
            'Die Pupille erweitert sich, um mehr Licht einzulassen',
            'Die Kornea verändert ihre Krümmung',
            'Die Axiale Länge des Auges verkürzt sich',
          ],
          correctIndex: 1,
          explanation: 'Akkommodation für Nahsicht: 1. Ziliarmuskel kontrahiert → ringförmiger Muskel zieht sich zusammen. 2. Dadurch nehmen Zonulafasern Spannung ab (paradox aber richtig: Zug des Ringmuskels nach innen entspannt Fasern). 3. Linse elastisch → wölbt sich nach vorn und hinten → Brechkraft steigt von ca. 19 auf 33 dpt. Presbyopie: Linse verliert Elastizität → kann sich nicht mehr wölben → Akkommodationsverlust.',
          hints: ['Ziliarmuskel kontrahiert → Zonula erschlafft → Linse wölbt sich.', 'Merke: Ziliarmuskel kontrahiert für Nahsicht (kontra-intuitiv für Entspannung).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Astigmatismus wird korrigiert mit:',
          options: [
            'Sammellinse',
            'Zerstreuungslinse',
            'Zylinderlinse',
            'Prisma',
            'Keiner Linse — nur OP möglich',
          ],
          correctIndex: 2,
          explanation: 'Astigmatismus entsteht durch eine torusförmige Kornea: In zwei senkrechten Hauptmeridianen hat die Hornhaut unterschiedliche Krümmungsradien → unterschiedliche Brechkräfte in beiden Achsen → kein Brennpunkt, sondern Brennlinien. Korrektion durch eine Zylinderlinse, die die Brechkraft nur in einer Achse ändert und so die Brechkraftdifferenz ausgleicht. Torische Kontaktlinsen und torische IOLs funktionieren nach demselben Prinzip.',
          hints: ['Astigmatismus = unterschiedliche Brechkraft in verschiedenen Achsen.', 'Zylinderlinse wirkt nur in einer Ebene — ideal zur Achskorrektur.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Brechkraft hat das normale emmetrope Auge insgesamt (ungefähr)?',
          options: ['20 dpt', '43 dpt', '60 dpt', '100 dpt', '13 dpt'],
          correctIndex: 2,
          explanation: 'Emmetropes Auge: Gesamtbrechkraft ≈ 60 dpt (Kornea ≈ 43 dpt + Linse ≈ 17–20 dpt in Ruhe, mit etwas Abzug durch Brechungsindex-Übergänge). Diese Brechkraft projiziert parallele Strahlen (aus ∞) auf die Retina bei einer Achslänge von ca. 23–24 mm. Formel: D_gesamt = n_Retina/f_hinten ≈ 1,336/0,0223 ≈ 60 dpt.',
          hints: ['Kornea ≈ 43 dpt + Linse ≈ 17–20 dpt ≈ 60 dpt gesamt.', 'Achslänge 23 mm; D = n/f = 1,336/0,023 ≈ 58 dpt.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist die Presbyopie und womit wird sie korrigiert?',
          options: [
            'Kurzsichtigkeit im Alter; Zerstreuungslinse',
            'Verlust der Akkommodationsfähigkeit durch Linsenelastizitätsverlust; Lesebrille (positive dpt)',
            'Trübung der Linse; operative Linsenextraktion',
            'Astigmatismus im Alter; Zylinderbrille',
            'Netzhautdegeneration; Injektionstherapie',
          ],
          correctIndex: 1,
          explanation: 'Presbyopie ("Altersweitsichtigkeit"): Ab ca. 40 Jahren verliert die Augenlinse ihre Elastizität. Beim Nahsehen kann die Linse sich nicht mehr ausreichend wölben → Akkommodationsamplitude sinkt. Nahpunkt rückt auf 100 cm und weiter → Lesen wird schwierig. Korrektion: Lesebrille mit positiver Brechkraft (+1 bis +3 dpt), die die fehlende Akkommodation ersetzt. Gleitsichtgläser: kontinuierlicher Übergang von Ferne (oben) zu Nähe (unten).',
          hints: ['Presbyopie = Altersveränderung der Linse, nicht Refraktionsfehler.', 'Linse verliert Elastizität → kann nicht mehr akkommodieren → Lesebrille (plus) nötig.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
