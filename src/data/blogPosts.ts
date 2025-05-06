export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  intro: string;
  seoTitle: string;
  seoDesc: string;
  image: string;

  body?: string;
  image2?: string;
  body2?: string;
  quote?: string;
  ctaText?: string;
  ctaLink?: string;
  extraImage?: string;
  extraImageAlt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "animationen-auf-websites-tipps",
    title: "Webanimationen: Warum weniger oft mehr ist!",
    category: "UX, Performance",
    intro: "Animationen können deine Website aufwerten – oder sie ruinieren. Hier erfährst du, wie du sie smart und gezielt einsetzt.",
    seoTitle: "Animationen auf Websites – Tipps für Performance & Usability | maxWapp",
    seoDesc: "Mehr Wirkung, weniger Ablenkung: Lerne, wie du Animationen sinnvoll in dein Webdesign integrierst. Mit Praxis-Tipps für UX & PageSpeed.",
    image: "/images/blog/animationen-smart.webp", 
    body: `🔸 1. Benutzerfreundlichkeit im Fokus:
  Animationen sollten den Nutzer unterstützen, nicht ablenken. Sanfte Übergänge und gezielte Hover-Effekte verbessern die Usability.
  
  🔸 2. Ladezeit beachten:
  Jede Animation bedeutet mehr Code – was die Performance verschlechtert. Nutze Tools wie Lighthouse, um Schwachstellen zu erkennen.
  
  🔸 3. Zielgruppe verstehen:
  Kreative Branchen lieben Animationen. Im Finanz- oder Medizinbereich wirken sie aber oft unpassend.
  
  🔸 4. Dezent ist modern:
  Mikro-Animationen (z.B. Button-Zoom bei Hover) wirken professionell und aufgeräumt.
  
  🔸 5. Barrierefreiheit bedenken:
  Nicht jeder verträgt viele visuelle Reize. Sorge für klare Inhalte, auch wenn Animationen deaktiviert sind.`,
    quote: "„Weniger ist mehr“ – das gilt besonders bei Webanimationen.",
  },
{
    slug: "app-bis-web-partner-sachsen",
    title: "App bis Web. Ihr Partner für schnelle, individuelle Websites",
    category: "Partner, Performance",
    intro: "Hochperformante Weblösungen mit Fokus auf Interaktivität, Barrierefreiheit und Geschwindigkeit – direkt aus Sachsen.",
    body: "App bis Web ist der zuverlässige Partner für Unternehmen und Agenturen, die digitale Exzellenz suchen. Die Leistungen umfassen die Entwicklung von WordPress-Themes und Plugins, maßgeschneiderte Webanwendungen sowie performante Online-Shops mit Fokus auf Interaktivität, Barrierefreiheit und Ladezeit.\n\nMit einem klaren Anspruch an Qualität, Performance und Nutzerfreundlichkeit entstehen hier Websites, die nicht nur überzeugen, sondern auch konvertieren.",
  body2: "Besonderer Fokus liegt auf einem schnellen PageSpeed und der Umsetzung nach barrierefreien Standards – für alle Geräte und alle Nutzergruppen.",
  ctaText: "💡 Du brauchst zuverlässige technische Umsetzung auf Top-Niveau? Jetzt mehr über App bis Web erfahren.",
  ctaLink: "https://app-bis-web.de",
  image: "/images/blog/sachsen-app-bis-web.webp",
  extraImage: "/images/blog/sachsen-app-bis-web.webp",
  extraImageAlt: "App bis Web – Webdesign aus Sachsen",
  seoTitle: "App bis Web – Webdesign & Entwicklung aus Sachsen | maxWapp",
  seoDesc: "App bis Web ist dein Partner aus Sachsen für performante Websites, Online-Shops und WordPress-Entwicklung. Schnell, individuell und barrierefrei – jetzt entdecken."
  },
  {
    slug: "website-performance-bilder-optimieren",
    title: "Website-Speed verbessern mit optimierten Bildern",
    category: "Performance, Tools",
    intro: "Bilder machen Websites langsam – aber du kannst das ändern. Mit WebP, TinyPNG und einem Performance-Test holst du dir die 100 Punkte.",
    body: "5 schnelle Tipps für Top-Performance: \n\n1. Nutze WebP statt JPG oder PNG\n2. Komprimiere vor dem Upload mit tinypng.com\n3. Lazy Load aktivieren\n4. Keine riesigen Bilder hochladen (max. 1920px)\n5. Lighthouse-Analyse nutzen",
    body2: "💡 Die meisten Performance-Probleme liegen bei Bildern. WebP + Komprimierung bringen meist sofort über 90 Punkte.",
    quote: "Der Unterschied zwischen 5 MB und 500 KB: Sekunden in der Ladezeit – und mehr Umsatz.",
    ctaText: "Gratis Performance-Check mit konkreten Tipps für deine Website – jetzt anfragen!",
    ctaLink: "/kontakt",
    image: "/images/blog/performance-lighthouse.webp",
    extraImage: "/images/blog/performance-lighthouse.webp",
    extraImageAlt: "Lighthouse Score 100 für maxWapp",
    seoTitle: "Website Performance steigern – Bilder richtig optimieren | maxWapp",
    seoDesc: "Bessere Ladezeiten dank WebP, Komprimierung und Lighthouse. So machst du deine Website blitzschnell. Tipps für Unternehmer & Webdesigner."
  },
  {
    slug: "unilink-partner-dresden",
    title: "Unilink Dresden – Business-Consulting & IT-Partner",
    category: "Partner, Business-Consulting",
    intro: "Unilink ist unser zuverlässiger Partner aus Dresden für Business-Consulting, Low-Code-Entwicklung und Prozessoptimierung.",
    body: "Unilink begleitet Unternehmen seit über 25 Jahren und bietet maßgeschneiderte Lösungen in den Bereichen Business-Consulting, Low-Code-Entwicklung mit Microsoft Power Platform und agile Anforderungsanalysen. Der Fokus liegt auf Effizienz, Skalierbarkeit und Innovation – ideal für Unternehmen, die ihre Geschäftsprozesse modernisieren möchten.",
    body2: "Wir freuen uns über die Partnerschaft mit Unilink – einem erfahrenen Unternehmen, das für Qualität, Verlässlichkeit und zukunftsorientierte Lösungen steht.",
    ctaText: "Mehr über Unilink erfahren",
    ctaLink: "https://unilink-dd.de",
    image: "/images/blog/unilink.webp",
    extraImage: "/images/blog/unilink.webp",
    extraImageAlt: "Unilink Dresden – Business-Consulting Partner",
    seoTitle: "Unilink Dresden – Business-Consulting & Low-Code Partner | maxWapp",
    seoDesc: "Unilink Dresden: Consulting, Low-Code & Power Platform. Partner für Innovation und Effizienz."
  },
  {
    slug: "shopify-store-redesign-checklist",
    title: "Shopify Redesign 2025: Deine ultimative Checkliste",
    category: "E-Commerce, Shopify",
    intro: "Der Onlinehandel boomt – und ein starkes Shopify-Design ist 2025 wichtiger denn je. Hier erfährst du, worauf du beim Redesign achten musst, um vorne mitzuspielen.",
    seoTitle: "Shopify Redesign Checkliste 2025 | maxWapp",
    seoDesc: "Die ultimative Shopify Redesign Checkliste für 2025. Mehr Conversion, bessere UX, schnellere Ladezeiten – jetzt starten!",
    image: "/images/blog/shopify-redesign.webp",
    body: `🔸 1. Setz dir klare Ziele  
    Willst du mehr Verkäufe, bessere Markenpräsenz oder schnellere Ladezeiten? Sei konkret, damit dein Redesign messbare Erfolge bringt.
    
    🔸 2. Mach einen Website-Check  
    Was läuft gut, wo hakt's? Tools wie Google Analytics, Hotjar oder Shopify-Analytics helfen dir, Schwachstellen zu finden.
    
    🔸 3. Denk Mobile-First  
    Über 70 % deiner Besucher kommen übers Smartphone. Dein Shop muss mobil einfach funktionieren – schnell, intuitiv und mit smarten Zahlungsoptionen.
    
    🔸 4. Mach UX & Design topfit  
    Nutze ein responsives Theme, starke Bilder, intuitive Filter und klare CTAs. Dein Shop soll nicht nur gut aussehen, sondern auch verkaufen.
    
    🔸 5. Bring den Checkout in Bestform  
    Weniger Schritte, weniger Frust. Express-Optionen wie Apple Pay oder Google Pay pushen die Conversion.
    
    🔸 6. Optimiere SEO & Speed  
    Komprimiere Bilder, optimiere Meta-Tags und nutze strukturierte Daten – Google liebt schnelle Shops.
    
    🔸 7. Integriere AI & neue Trends  
    Smarte Produktempfehlungen, Chatbots oder AR/VR sind 2025 echte Gamechanger.
    
    📌 Ein Praxisbeispiel:  
    Beim Redesign von *Kleines Stadthaus* haben wir UX, Speed und Branding aufs nächste Level gebracht – mit Instagram-Integration, Conversion-optimierten Produktseiten und mobilem Feinschliff.`,
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
      extraImage: "/images/blog/smartiee.webp",  // bitte dein Bildpfad ergänzen
      extraImageAlt: "Smartiee München – Kanzlei-Marketing & Legal-Branding",
      quote: "„Smartiee kennt die Spielregeln der Rechtsbranche – und macht Kanzleien digital stark.“"
    }
  // weitere Einträge...
];