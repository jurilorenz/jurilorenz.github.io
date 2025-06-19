export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  intro: string;
  seoTitle: string;
  seoDesc: string;
  image: string;

  body?: string;
  body2Title?: string;
  body2Intro?: string;
  image2?: string;
  image2Alt?: string;
  body2?: string;
  quote?: string;
  ctaText?: string;
  ctaLink?: string;
  imageAlt?: string;
}

export const blogPosts = [
  {
    slug: "statische-astro-website",
    title: "Astro ohne CMS: Statische Websites mit maximaler Performance",
    category: "Astro, Webentwicklung",
    intro: "Diese Website wurde in reinem Astro-Code entwickelt – ohne CMS, ohne Datenbank, dafür mit maximaler Kontrolle, Performance und SEO-Fokus.",
    seoTitle: "Astro Website ohne CMS – Vorteile für Performance & SEO | maxWapp",
    seoDesc: "Statische Website mit Astro: Vorteile, Nachteile & SEO-Potenzial. Warum eine Entwicklung ohne CMS sinnvoll sein kann.",
    image: "/images/blog/astro-mobile-navigation.webp",
    imageAlt: "Mobile Navigation einer Astro-Website mit Sprachauswahl und Raketen-Icon",
    image2: "/images/blog/astro-website-maxwapp.webp",
    image2Alt: "Astro Website mit maxWapp Branding auf Bildschirm und Raketen-Symbol",
    body: `Diese Website – maxWapp.de – wurde vollständig in Astro umgesetzt. Ohne WordPress, ohne CMS, komplett im Code. Das Ergebnis: eine extrem schnelle, wartungsarme und suchmaschinenfreundliche Lösung, die speziell auf moderne Webanforderungen zugeschnitten ist.

Astro erzeugt statische HTML-Dateien beim Build. Das bedeutet: keine Datenbank-Abfragen, kein Server-Rendering bei jedem Seitenaufruf. Dadurch profitieren Nutzer und Betreiber von:

- exzellenten Ladezeiten
- perfekten Lighthouse-Werten (Performance, SEO, Accessibility)
- erhöhter Sicherheit (keine dynamischen Angriffsflächen)
- einfacher Hosting-Infrastruktur

Die Seitenstruktur, Inhalte und Komponenten sind direkt im Quellcode gepflegt – übersichtlich, sauber und individuell erweiterbar.`,
    body2Title: "Was spricht für – und gegen – Astro ohne CMS?",
    body2Intro: "Ein kurzer Überblick für alle, die über eine moderne Lösung ohne CMS nachdenken.",
    body2: `Vorteile:
- Vollständige Kontrolle über Code, Design und SEO
- Extrem schnelle Auslieferung durch statisches HTML
- Keine Abhängigkeit von Drittanbieter-Systemen
- Leicht mit Git versionierbar und wartbar

Mögliche Nachteile:
- Inhalte können nicht über ein Admin-Panel gepflegt werden
- Änderungen benötigen Zugriff auf den Code bzw. Entwickler-Know-how

Für viele Projekte ist das jedoch kein Nachteil – im Gegenteil: Wer planbare, skalierbare und performance-orientierte Websites braucht, ist mit einer Lösung in Astro oft besser beraten als mit einem klassischen CMS.`,
    quote: "„Statische Websites mit Astro – ideal für alle, die Wert auf Qualität, SEO und Kontrolle legen.“",
    ctaText: "Website in Astro geplant? Ich unterstütze dich bei Umsetzung & Optimierung.",
    ctaLink: "/kontakt"
  },
  {
    slug: "google-gemini-email-summary",
    title: "Gemini fasst jetzt automatisch deine E-Mails zusammen",
    category: "KI, Gmail",
    intro: "Googles KI Gemini erhält eine größere Rolle in Gmail: Lange E-Mails werden nun automatisch zusammengefasst – ganz ohne Klick.",
    seoTitle: "Google Gemini fasst automatisch lange E-Mails zusammen",
    seoDesc: "Gemini von Google erstellt jetzt automatisch Zusammenfassungen langer E-Mails direkt in deinem Gmail-Posteingang. Was das für deinen Arbeitsalltag bedeutet.",
    image: "/images/blog/gemini-email-summary-1.webp",
    imageAlt: "Smartphone mit Gmail und Gemini-Zusammenfassung",
    body: `Googles KI-Tool Gemini bekommt eine neue Aufgabe in deinem Posteingang: Ab sofort fasst die KI automatisch lange E-Mails zusammen – direkt am Anfang der Nachricht als sogenannte Zusammenfassungskarte. 

Bisher war diese Funktion manuell auswählbar. Nun erkennt Gemini selbstständig, wann eine E-Mail zu lang ist, und zeigt automatisch die wichtigsten Punkte an. Sobald neue Antworten hinzukommen, wird die Zusammenfassung aktualisiert.

Damit gewinnt Gemini deutlich an Präsenz in Gmail – auch wenn das nicht jeder Nutzer sofort begrüßen dürfte.`,
    body2Title: "Wird Gemini zu aufdringlich?",
    body2Intro: "Nicht alle Nutzer sind begeistert, denn die KI-Funktion wird automatisch aktiviert – je nach Region.",
    body2: `Gemini ist ein Beispiel für den zunehmenden Einfluss von KI in alltäglichen Tools. Doch die automatischen Zusammenfassungen sind nicht immer fehlerfrei – wie bereits Apple mit seinen Push-Zusammenfassungen für News erfahren musste.

Google verspricht jedoch, dass die manuelle Zusammenfassung weiterhin verfügbar bleibt. Nutzer außerhalb der EU können die Funktion unter Gmail > Einstellungen > Smarte Funktionen aktivieren oder deaktivieren. 

In der EU, UK, Schweiz und Japan ist die Funktion standardmäßig deaktiviert. Unternehmens-Admins können sie zentral steuern.`,
    quote: "„AI fasst deine E-Mails zusammen – ganz ohne Klick. Praktisch oder zu viel?“",
    ctaText: "Du willst KI clever in dein Business integrieren? Lass uns gemeinsam Lösungen finden.",
    ctaLink: "/kontakt",
    image2: "/images/blog/gemini-email-summary-2.webp",
    image2Alt: "Gemini-Symbol mit Gmail-App und anderen Google-Icons"
   },
{

  slug: "openai-datenzentrum-abu-dhabi",
  title: "OpenAI & G42 bauen Datenzentrum in Abu Dhabi",
  category: "KI, Infrastruktur",
  intro: "Größer als Monaco, stärker als fünf Atomkraftwerke – OpenAI plant mit G42 ein KI-Rechenzentrum der Superlative in den Vereinigten Arabischen Emiraten.",
  seoTitle: "OpenAI Megadatenzentrum in Abu Dhabi – Projekt Stargate | maxWapp",
  seoDesc: "OpenAI plant mit G42 in Abu Dhabi eines der weltweit größten Datenzentren – 5 GW stark, 10 Quadratmeilen groß. Was steckt hinter dem Projekt Stargate?",
  image: "/images/blog/openai-abu-dhabi-ki.webp",
  imageAlt: "Datenzentrum in Abu Dhabi mit futuristischem Neonlicht",
  body: `OpenAI und das Tech-Konglomerat G42 aus Abu Dhabi entwickeln gemeinsam eines der weltweit größten KI-Datenzentren: Das geplante „Stargate“-Projekt soll 5 Gigawatt Leistung bringen – mehr als viermal so viel wie das aktuell entstehende Rechenzentrum in Texas. Die Anlage wird eine Fläche von rund 10 Quadratmeilen einnehmen – größer als das Fürstentum Monaco.

Das Zentrum ist Teil einer globalen Initiative, in der OpenAI, SoftBank und Oracle weltweit Superzentren für Künstliche Intelligenz errichten wollen. Ziel: die wachsende Nachfrage nach Rechenleistung für KI-Modelle zu decken und neue technologische Standards zu setzen.

Hinter dem Projekt steht auch politische Brisanz: G42, geleitet von Scheich Tahnoon bin Zayed Al Nahyan, war in der Vergangenheit wegen Verbindungen zu China in der Kritik. Nach Druck aus den USA kündigte G42 Anfang 2024 an, sämtliche China-Investitionen zu beenden. Kurz darauf stieg Microsoft mit 1,5 Milliarden Dollar ein – und deren Präsident Brad Smith übernahm einen Sitz im G42-Vorstand.`,
  body2Title: "Ein geopolitisches KI-Projekt mit Symbolcharakter",
  body2Intro: "Abu Dhabi wird zum Hotspot der globalen KI-Infrastruktur – mit OpenAI als Schlüsselspieler.",
  body2: `OpenAI-CEO Sam Altman lobte bereits 2023 die KI-Offenheit der Vereinigten Arabischen Emirate: „Sie reden über KI, bevor es cool war.“ Mit dem Stargate-Projekt wird Abu Dhabi nun selbst zur globalen Schaltzentrale für Hochleistungs-KI.

Das Projekt verdeutlicht nicht nur die wachsende strategische Bedeutung der Golfstaaten, sondern auch die Notwendigkeit, neue technologische Infrastrukturen außerhalb westlicher Zentren zu denken. Abu Dhabi wird nicht nur Standort, sondern auch Symbol – für die nächste Phase der KI-Revolution.`,
  quote: "„Ein Rechenzentrum größer als Monaco – gebaut für die Zukunft der KI.“",
  ctaText: "Du willst KI-Power auf deiner Website nutzen? Lass uns gemeinsam Ideen umsetzen.",
  ctaLink: "/kontakt"

      },
  {
  slug: "google-ai-accessibility-android-chrome",
  title: "Barrierefreiheit für Android & Chrome",
  category: "KI, Accessibility, Android",
  intro: "TalkBack, Expressive Captions, PDFs mit OCR und smarte Zoom-Funktionen: Google startet 2025 neue Funktionen für mehr Zugänglichkeit – unterstützt durch Gemini und KI.",
  seoTitle: "Google KI für Accessibility – TalkBack & OCR | maxWapp",
  seoDesc: "Gemini erklärt Bilder, Expressive Captions zeigen Emotion – Google launcht neue KI-Funktionen für Android & Chrome. OCR für PDFs inklusive.",
  image: "/images/blog/google-accessibility-gemini.webp",
  imageAlt: "Google Gemini liest Bilder mit TalkBack",
  body: `Google hat neue KI-gestützte Funktionen vorgestellt, die Menschen mit Seh- oder Hörbeeinträchtigungen den Zugang zu digitalen Inhalten erleichtern sollen. Im Mittelpunkt steht dabei TalkBack, Androids integrierter Screenreader. Dieser kann nun mit Gemini kombiniert werden, sodass Nutzer Fragen zu Bildern und dem Bildschirminhalt stellen können – selbst wenn kein Alt-Text vorhanden ist.

Ein Beispiel: Wenn dir ein Freund ein Bild seiner neuen Gitarre schickt, beschreibt Gemini automatisch das Bild und kann auf Fragen wie Marke oder Farbe antworten. Noch spannender: Man kann auch den gesamten Bildschirminhalt analysieren lassen – etwa um bei einer Shopping-App herauszufinden, aus welchem Material ein Artikel besteht oder ob es Rabattaktionen gibt.

Diese Neuerung bedeutet einen großen Fortschritt für Nutzer mit Sehbehinderungen. Anstatt sich auf die Verfügbarkeit von Alt-Texten zu verlassen, analysiert die KI den Inhalt direkt.`,
  body2Title: "PDFs, Captions & smarter Zoom: Chrome wird zugänglicher",
  body2Intro: "Auch Chrome erhält wichtige Updates: OCR, Zoom-Funktionen und neue Audio-Captions bringen digitale Inhalte für mehr Menschen näher.",
  body2: `Mit Hilfe von Optical Character Recognition (OCR) erkennt Chrome nun automatisch Text in gescannten PDFs. Das bedeutet: Nutzer können Inhalte markieren, kopieren, durchsuchen – und Screenreader können diese Texte endlich vorlesen. Bisher war das mit reinen Bild-PDFs nicht möglich.

Expressive Captions, Androids Echtzeit-Untertitelungsfunktion, wird ebenfalls verbessert. Die KI erkennt nun, wenn Worte gedehnt ausgesprochen werden – etwa bei einem "Nooooo" oder einem emotionalen "Amaaazing Shot". Zusätzlich werden Geräusche wie Pfeifen oder Räuspern mit neuen Labels versehen.

Auch der Zoom-Modus in Chrome auf Android bekommt ein Upgrade: Texte lassen sich nun vergrößern, ohne dass das Layout der Website leidet. Man kann die Zoomstufe global oder seitenbasiert einstellen. Zugang erfolgt über das Drei-Punkte-Menü oben rechts im Browser.

Die Updates werden zunächst für Android 15-Geräte in den USA, UK, Kanada und Australien ausgerollt. Europa dürfte bald folgen.`,
  image2: "/images/blog/google-ocr-zoom.webp",
  image2Alt: "Chrome OCR-Funktion und Zoom-Einstellungen auf Android",
  quote: "Zugänglichkeit bedeutet digitale Freiheit – mit KI wird sie endlich Realität.",
  ctaText: "Du willst dein digitales Produkt barrierefrei gestalten? Ich helfe dir bei Konzept & Umsetzung.",
  ctaLink: "/kontakt"

      },
  {
    slug: "figma-sites-tools-ai",
    title: "Figma goes AI",
    category: "KI, Design, Tools",
    intro: "Figma stellt neue KI-gestützte Funktionen vor: Website-Erstellung, App-Prototyping und Marketing-Assets direkt im Tool – eine Kampfansage an Canva, Wix & Co.",
    seoTitle: "Figma Sites & Make – KI Webdesign & Prototyping | maxWapp",
    seoDesc: "Figma bringt mit Sites, Make & Buzz neue KI-Tools für Webdesign, Prototypen & Marketing. Website-Baukasten, CMS & Bulk-Assets – direkt im Design-Tool.",
    image: "/images/blog/figma-sites-cover.webp",
    imageAlt: "Figma Sites und KI-Webdesign Tools",
    body: `Figma hebt Webdesign und Prototyping auf ein neues Level. Mit der Einführung von Figma Sites können Designer nun direkt im Tool komplette Websites erstellen – inklusive KI-Unterstützung, Editor-Zugriff für Teams und CMS-Funktionalität für Blogs und Inhalte.

Zentrale Features:
- KI-generierte Websites mit animierten Scroll-Effekten und responsivem Design
- CMS zur Verwaltung von Blogartikeln, Slugs und Vorschaubildern direkt im Editor
- Integration interaktiver Elemente per Custom-Code oder KI-Codegenerator

Zusätzlich erlaubt Figma Make die Entwicklung von Web-App-Prototypen durch einfache Prompts. Entwickler können dabei direkt in den Code eingreifen – perfekt für kollaborative Teams.`,
    body2Title: "Marketing, Bilder, Vektoren: Das komplette Kreativpaket",
    body2Intro: "Mit den neuen Tools richtet sich Figma nicht nur an Designer, sondern auch gezielt an Marketer und Entwickler.",
    body2: `Figma Buzz: Erstelle Marketing-Assets auf Basis von Templates – KI-generierte Bilder, Bulk-Erstellung via Spreadsheet und automatisierte Anpassung im Corporate Design.

Figma Draw: Endlich Vektorzeichnungen direkt im Tool bearbeiten. Mit Textpfaden, Musterfüllungen, Pinseln und mehr – kein Export in Illustrator mehr nötig.

Content Seat Plan: Für 8 $/Monat erhalten User Zugang zu Sites CMS, Buzz, Slides und FigJam – perfekt für kleine Teams.

Damit positioniert sich Figma als All-in-One-Plattform für digitale Produktentwicklung, Marketing und Webpräsenz – powered by AI.`,
    image2: "/images/blog/figma-buzz-draw.webp",
    image2Alt: "Figma Buzz und Draw im Einsatz für moderne Marketing-Assets",
    quote: "„Design, Prototyping & Marketing – alles in einem Tool. Und jetzt mit KI.“",
    },
  {
     slug: "google-gemini25pro-io-ai-coding",
    title: "Gemini 2.5 Pro I/O: Googles neuer König der KI-Codegeneratoren",
    category: "KI, Webentwicklung",
    intro: "Google hebt mit Gemini 2.5 Pro I/O die Messlatte im Bereich KI-gestützter Webentwicklung – und überholt erstmals die Konkurrenz in Benchmarks für Codegenerierung.",
    seoTitle: "Gemini 2.5 Pro – Neuer Webentwicklung KI-Leader | maxWapp",
    seoDesc: "Googles Gemini 2.5 Pro I/O übertrifft erstmals alle anderen Modelle im Coding-Benchmark. Was bedeutet das für Entwickler und Webdesign?",
  image: "/images/blog/gemini25pro-io.webp",
  imageAlt: "Google Gemini 2.5 Pro I/O – KI für Webentwicklung",
  image2: "/images/blog/gemini-leaderboard.webp",
  image2Alt: "WebDev Arena Leaderboard mit Gemini 2.5 Pro auf Platz 1",
  body: `Google DeepMind hat mit Gemini 2.5 Pro I/O ein neues KI-Modell veröffentlicht, das laut CEO Demis Hassabis „das beste Coding-Modell ist, das wir je gebaut haben“. Und das bestätigen auch die Benchmarks: Erstmals seit Beginn des KI-Rennens überholt Google damit Modelle wie Claude 3.7 oder GPT-4.

Besonders auffällig: Auf dem WebDev Arena Leaderboard – einem Drittanbieter-Ranking für Web-Apps – erreicht Gemini 2.5 Pro (05-06) mit 1499 Punkten den 1. Platz. Die vorherige Version lag noch auf Rang 3. Damit schlägt Gemini sogar Claude 3.7 Sonnet (1377 Punkte) und GPT-4o.

Die Einsatzmöglichkeiten sind enorm: Von automatisierten UI-Komponenten und Lern-Apps bis hin zu CSS-freien Videoplayern. Auch Plattformen wie Cursor oder Replit integrieren das Modell bereits produktiv. 

Entwickler loben vor allem die Zuverlässigkeit und die Fähigkeit zur komplexen Code-Generierung aus nur einem Prompt. Gemini I/O kann ganze Web-Apps, Simulationen oder Spiele erstellen – blitzschnell und visuell stark.

Besonders spannend: Gemini 2.5 Pro I/O agiert zunehmend wie ein echter Software-Ingenieur. Gibt man ihm komplexe Aufgaben, erstellt das Modell nicht nur einzelne Code-Snippets, sondern komplette Dateistrukturen und Module – ganz ähnlich wie ein menschlicher Entwickler. Wenn es zusätzliche Informationen benötigt, fragt es gezielt nach, bevor es fortfährt. Dieser Workflow erinnert an ein echtes Entwicklerteammitglied – nur rund um die Uhr verfügbar und extrem produktiv.`,
  body2Title: "Ein starkes Signal an die Branche",
  body2Intro: "Was bedeutet dieser technologische Fortschritt konkret für Webentwicklung und Agenturen?",
  body2: `Für Entwickler bedeutet das: schnellere Prototypen, weniger Fehler, bessere UX. Besonders bei responsivem Design, Animationen und KI-gestützten UI-Konzepten zeigt sich Gemini als praktisches Tool, nicht bloß Forschungsprojekt. 
  
  Gemini 2.5 Pro I/O ist nicht nur ein technisches Upgrade – es ist ein deutliches Signal an die Branche: Google will im Bereich Developer-AI führend bleiben. Wer moderne Webentwicklung mit KI kombinieren will, sollte sich dieses Modell näher anschauen.`,
  quote: "„Gemini 2.5 Pro I/O setzt neue Standards in der KI-gestützten Webentwicklung.“"


  
},
{
  slug: "animationen-auf-websites-tipps",
  title: "Webanimationen: Warum weniger oft mehr ist!",
  category: "UX, Performance",
  intro: "Animationen können deine Website aufwerten – oder sie ruinieren. Hier erfährst du, wie du sie smart und gezielt einsetzt.",
  seoTitle: "Web-Animation – Tipps für Performance & Usability | maxWapp",
  seoDesc: "Mehr Wirkung, weniger Ablenkung: Lerne, wie du Animationen sinnvoll in dein Webdesign integrierst. Mit Praxis-Tipps für UX & PageSpeed.",
  image: "/images/blog/animationen-smart.webp",
  imageAlt: "Beispiel für smarte Webanimationen",
  body: `Animationen sind längst kein reines Designelement mehr – sie können Informationen vermitteln, Nutzer leiten und Interaktionen verbessern. Aber sie müssen richtig eingesetzt werden.

Hier sind 5 zentrale Tipps aus der Praxis:

1. Benutzerfreundlichkeit im Fokus  
Animationen sollten immer eine Funktion haben. Sanfte Übergänge oder Hover-Effekte helfen der Orientierung – etwa wenn sich ein Button leicht vergrößert, sobald die Maus darüberfährt.

2. Ladezeit beachten  
Zu viele Animationen, vor allem mit JavaScript oder Libraries wie GSAP, verlangsamen deine Seite. Analysiere mit Google Lighthouse, wie viel Overhead du verursachst.

3. Zielgruppe verstehen  
Ein Portfolio für Kreative darf lebendig und verspielt sein. Im Finanzbereich hingegen erwartet man Seriosität – dort wirken grelle Animationen oft deplatziert.

4. Dezent ist modern  
Mikro-Animationen (z. B. ein leichtes Einblenden von Texten) zeigen Professionalität, ohne zu stören. Moderne Designs verzichten meist auf überladene Effekte.

5. Barrierefreiheit bedenken  
Nicht jeder verträgt viele Bewegungen – Stichwort: vestibuläre Störungen. Achte auf \`prefers-reduced-motion\` und sorge für gute Lesbarkeit auch bei deaktivierter Animation.`,
  body2Title: "Wann Animationen wirklich sinnvoll sind",
  body2Intro: "Nicht jede Website braucht Bewegung. Aber wenn du Animationen nutzt, dann dort, wo sie Mehrwert schaffen – hier einige Best Practices.",
  body2: `- Visuelles Feedback: Ladeindikatoren oder visuelle Reaktionen auf Klicks geben Nutzern Sicherheit.  
- Schritt-für-Schritt-Erklärungen: Bei komplexen Formularen oder Tools helfen animierte Übergänge, die Komplexität zu reduzieren.  
- Storytelling: Animationen können visuell eine Geschichte erzählen – z. B. beim Scrollen durch einen Prozessablauf.  
- Markenidentität stärken: Dezent eingesetzte Animationen können den Charakter einer Marke unterstreichen – z. B. ein subtiler Schwung im Logo beim Laden.

Tipp aus der Praxis: Teste Animationen immer auf verschiedenen Geräten und reduziere sie bei Bedarf für Mobilnutzer. Was auf einem Desktop-Bildschirm elegant wirkt, kann auf dem Smartphone störend sein.`,
  image2: "/images/blog/animationen-beispiel.webp",
  image2Alt: "Animation als dezentes visuelles Feedback auf einer modernen Website",
  quote: "„Weniger ist mehr“ – das gilt besonders bei Webanimationen.",
  ctaText: "Website-Check gefällig? Ich analysiere deine Animationen auf Wirkung & Performance.",
  ctaLink: "/kontakt"
},
{
    slug: "app-bis-web-partner-sachsen",
    title: "App bis Web. Ihr Partner für schnelle, individuelle Websites",
    category: "Partner, Performance",
    intro: "Hochperformante Weblösungen mit Fokus auf Interaktivität, Barrierefreiheit und Geschwindigkeit – direkt aus Sachsen.",
    body: "App bis Web ist der zuverlässige Partner für Unternehmen und Agenturen, die digitale Exzellenz suchen. Die Leistungen umfassen die Entwicklung von WordPress-Themes und Plugins, maßgeschneiderte Webanwendungen sowie performante Online-Shops mit Fokus auf Interaktivität, Barrierefreiheit und Ladezeit.\n\nMit einem klaren Anspruch an Qualität, Performance und Nutzerfreundlichkeit entstehen hier Websites, die nicht nur überzeugen, sondern auch konvertieren.",
  body2: "Besonderer Fokus liegt auf einem schnellen PageSpeed und der Umsetzung nach barrierefreien Standards – für alle Geräte und alle Nutzergruppen.",
  ctaText: "Du brauchst zuverlässige technische Umsetzung auf Top-Niveau? Jetzt mehr über App bis Web erfahren.",
  ctaLink: "https://app-bis-web.de",
  image: "/images/blog/sachsen-app-bis-web.webp",
  seoTitle: "App bis Web – Webdesign & Entwicklung aus Sachsen | maxWapp",
  seoDesc: "App bis Web ist dein Partner aus Sachsen für performante Websites, Online-Shops und WordPress-Entwicklung. Schnell, individuell und barrierefrei – jetzt entdecken."
  },
  {
    slug: "website-performance-bilder-optimieren",
    title: "Website-Speed verbessern mit optimierten Bildern",
    category: "Performance, Tools",
    intro: "Bilder machen Websites langsam – aber du kannst das ändern. Mit WebP, TinyPNG und einem Performance-Test holst du dir die 100 Punkte.",
    seoTitle: "Website Performance steigern – Bilder optimieren | maxWapp",
    seoDesc: "Bessere Ladezeiten dank WebP, Komprimierung und Lighthouse. So machst du deine Website blitzschnell. Tipps für Unternehmer & Webdesigner.",
    image: "/images/blog/performance-lighthouse.webp",
    imageAlt: "Webseiten-Performance mit optimierten Bildern",
      image2: "/images/projects/streetly-ipad.webp",
  image2Alt: "Webseiten-Performance mit optimierten Bildern - Streetly Projekt",
    body: `Viele moderne Websites sind visuell stark – aber technisch träge. Oft liegt das an einem einfachen Faktor: schlecht optimierte Bilder. Dabei ist es mit wenig Aufwand möglich, deine Ladezeiten drastisch zu verbessern – was nicht nur die Nutzer freut, sondern auch dein Google-Ranking.

Hier sind 5 bewährte Maßnahmen, die du sofort umsetzen kannst:

1. Nutze WebP statt JPG oder PNG  
WebP-Dateien sind im Schnitt 30 % kleiner bei vergleichbarer Qualität und werden von allen modernen Browsern unterstützt.

2. Komprimiere vor dem Upload mit tinypng.com  
Nie Bilder direkt aus der Kamera oder vom Stockportal hochladen. Immer vorher komprimieren!

3. Aktiviere Lazy Load  
Stelle sicher, dass Bilder nur geladen werden, wenn sie sichtbar sind – das spart Bandbreite und erhöht die wahrgenommene Geschwindigkeit.

4. Beschränke die Bildgröße  
Keine Bilder über 1920px Breite hochladen – das reicht auch für Retina-Displays.

5. Nutze Lighthouse zur Analyse  
Das Google-Tool zeigt dir, wie du deine Performance sofort verbessern kannst – inklusive konkreter Hinweise für Bilder.`,
    body2Title: "Warum Bilder oft die größten Performance-Killer sind",
    body2Intro: "Viele unterschätzen, wie massiv unoptimierte Bilder die Ladezeit beeinflussen. Hier erfährst du, warum das so ist – und was du langfristig beachten solltest.",
    body2: `Bilder sind in den meisten Fällen der größte Datenblock auf deiner Website – oft über 70 % der gesamten Ladezeit. Besonders problematisch sind dabei:

- Große Originalfotos direkt von der Kamera
- Icons oder Logos ohne SVG-Format
- Keine responsiven Bildformate (z. B. fehlendes srcset)

Ein langsamer Seitenaufbau sorgt für Frust bei Besuchern – und für höhere Absprungraten. Das wirkt sich negativ auf dein Google-Ranking und deine Conversionrate aus.

Wer auf lange Sicht effizient bleiben will, sollte zusätzlich über folgende Tools und Techniken nachdenken:

- Image-CDNs wie Cloudinary oder ImageKit: liefern automatisch optimierte Formate je nach Gerät und Verbindung.
- Bildkompression mit Squoosh oder TinyPNG API: für automatisierte Workflows.
- Responsive Bildkomponenten (srcset & sizes): zeigen je nach Bildschirmgröße die passende Version an.

Tipp aus der Praxis: Viele unserer Kunden erreichen nach einer einfachen Bildoptimierung sofort einen Lighthouse-Wert über 90 – ohne dass sie am restlichen Code etwas ändern müssen.`,
    quote: "Der Unterschied zwischen 5 MB und 500 KB: Sekunden in der Ladezeit – und mehr Umsatz.",
    ctaText: "Kostenlose Analyse gefällig? Ich zeige dir, wie schnell deine Seite wirklich ist – inklusive konkreter Verbesserungstipps.",
    ctaLink: "/kontakt"
  },
  {
    slug: "shopify-store-redesign-checklist",
    title: "Shopify Redesign: Deine ultimative Checkliste",
    category: "E-Commerce, Shopify",
    intro: "Der Onlinehandel boomt – und ein starkes Shopify-Design ist wichtiger denn je. Hier erfährst du, worauf du beim Redesign achten musst, um vorne mitzuspielen.",
    seoTitle: "Shopify Redesign Checkliste für mehr Conversion & UX | maxWapp",
    seoDesc: "Die ultimative Shopify Redesign Checkliste – bessere UX, Conversion-Steigerung, SEO & Ladezeiten. Jetzt durchstarten!",
    image: "/images/blog/shopify-redesign.webp",
    imageAlt: "Shopify Redesign – Checkliste",
    body: `1. Setz dir klare Ziele  
Willst du mehr Verkäufe, bessere Markenpräsenz oder schnellere Ladezeiten? Sei konkret, damit dein Redesign messbare Erfolge bringt.

2. Mach einen Website-Check  
Was läuft gut, wo hakt's? Tools wie Google Analytics, Hotjar oder Shopify-Analytics helfen dir, Schwachstellen zu finden.

3. Denk Mobile-First  
Über 70 % deiner Besucher kommen übers Smartphone. Dein Shop muss mobil einfach funktionieren – schnell, intuitiv und mit smarten Zahlungsoptionen.

4. Mach UX & Design topfit  
Nutze ein responsives Theme, starke Bilder, intuitive Filter und klare CTAs. Dein Shop soll nicht nur gut aussehen, sondern auch verkaufen.

5. Bring den Checkout in Bestform  
Weniger Schritte, weniger Frust. Express-Optionen wie Apple Pay oder Google Pay pushen die Conversion.

6. Optimiere SEO & Speed  
Komprimiere Bilder, optimiere Meta-Tags und nutze strukturierte Daten – Google liebt schnelle Shops. Eine Shopify SEO Agentur hilft dir hier entscheidend weiter.

7. Integriere AI & neue Trends  
Smarte Produktempfehlungen, Chatbots oder AR/VR sind echte Gamechanger im modernen E-Commerce.

8. Shopify Plus oder klassisch?  
Shopify Plus bietet viele Features für wachsende Shops – wir als Shopify Plus Agentur beraten dich gern zu den Vorteilen.

9. Relaunch nicht vergessen  
Ein Website Relaunch braucht eine klare Checkliste und Strategie – dafür sind wir als Shopify Agentur München dein Ansprechpartner.

Ein Praxisbeispiel:  
Beim Redesign von Kleines Stadthaus haben wir UX, Speed und Branding aufs nächste Level gebracht – mit Instagram-Integration, Conversion-optimierten Produktseiten und mobilem Feinschliff.`,
    ctaText: "Mehr über das Projekt Kleines Stadthaus erfahren",
    ctaLink: "/projects/kleines-stadthaus/",
    quote: "„Ein gutes Redesign ist mehr als nur Optik – es ist dein Verkaufsmotor.“",
  },
  {
      slug: "smartiee-partner-muenchen",
      title: "Smartiee München – Legal Marketing & digitale Stärke für Kanzleien",
      category: "Partner, Legal Marketing",
      intro: "Smartiee ist eine führende Agentur aus München, spezialisiert auf Kanzlei-Marketing, Legal Branding und digitale Lösungen für die Rechtsbranche.",
      seoTitle: "Smartiee München – Legal Marketing & Kanzlei-Digitalisierung | maxWapp",
      seoDesc: "Smartiee München: Agentur für Kanzlei-Marketing, Legal Branding & Digitalisierung. Starke Partner für Juristen.",
      image: "/images/blog/smartiee.webp",  // bitte dein Bildpfad ergänzen
      body: "Smartiee begleitet Kanzleien und Rechtsdienstleister seit 2017 bei ihrem digitalen Auftritt. Die Agentur entwickelt maßgeschneiderte Strategien für Kanzlei-Websites, juristische PR, Content-Marketing sowie Rankings in Legal Directories. Ihr Fokus liegt darauf, Kanzleien nicht nur sichtbar, sondern auch als Expertenmarke zu positionieren.\n\nSmartiee bietet alles von der Markenidentität über Website-Design bis zu SEO-Optimierung, spezialisiert auf die besonderen Anforderungen der Rechtsbranche. Sie unterstützen sowohl kleine Kanzleien als auch große Sozietäten bei der Mandantengewinnung und Markenbildung.",
      body2: "Wir freuen uns über die Partnerschaft mit Smartiee – einem innovativen Legal-Marketing-Partner, der Kanzleien hilft, sich klar am Markt zu positionieren, Rankings zu stärken und neue Mandate zu gewinnen.",
      ctaText: "Mehr über Smartiee erfahren",
      ctaLink: "https://smartiee.agency",
      quote: "„Smartiee kennt die Spielregeln der Rechtsbranche – und macht Kanzleien digital stark.“"
  }
    
  // weitere Einträge...
];