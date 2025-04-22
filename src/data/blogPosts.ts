export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  intro: string;
  seoTitle: string;
  seoDesc: string;
  image: string;

  body?: string;
  body2?: string;
  quote?: string;
  ctaText?: string;
  ctaLink?: string;
  extraImage?: string;
  extraImageAlt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ki-optimierung-fuer-websites",
    title: "Wie du deine Website für KI-Suchen fit machst",
    category: "Insights, SEO",
    intro: "KI-Suchen wie ChatGPT & Google Gemini verändern gerade alles. Wenn deine Website nicht mitspielt, wirst du unsichtbar.",
    body: "1. Bilder komprimieren\n2. Lazy Load aktivieren\n3. Weniger Skripte nutzen\n\n➡️ Ladezeit ist Rankingfaktor!",
    seoTitle: "KI-Optimierung für Websites – Sichtbar bleiben in ChatGPT & Gemini | maxWapp",
    seoDesc: "Lerne, wie du deine Website für KI-Suchmaschinen wie ChatGPT & Google Gemini optimierst. SEO neu gedacht – verständlich erklärt.",
    image: "/images/badge.webp"
  },
  {
    slug: "webflow-page-speed-optimieren",
    title: "Webflow schneller machen: 5 Profi-Tipps",
    category: "Insights, Performance",
    intro: "Langsame Websites nerven nicht nur deine Besucher – sie ruinieren auch dein Google-Ranking.",
    body: "1. Bilder komprimieren\n2. Lazy Load aktivieren\n3. Weniger Skripte nutzen",
    body2: "Regelmäßig testen mit PageSpeed Insights und unnötige Elemente entfernen. So wirst du messbar schneller.",
    quote: "Eine Sekunde Verzögerung kann 30 % deiner Besucher kosten.",
    ctaText: "Du willst deine Ladezeit halbieren?",
    ctaLink: "/kontakt",
    extraImage: "/images/blog/performance-chart.webp",
    extraImageAlt: "Performance Chart für Webflow",
    seoTitle: "Webflow PageSpeed optimieren – 5 Tipps für blitzschnelle Websites | maxWapp",
    seoDesc: "Mehr Speed für Webflow: Ladezeit verkürzen, Bounce-Rate senken, SEO verbessern. 5 Profi-Tipps für Unternehmer & Agenturen.",
    image: "/images/projects/streetly-ipad.webp"
  },
  {
    slug: "website-relaunch-checkliste",
    title: "Website Relaunch Checkliste für deinen perfekten Neustart",
    category: "Reviews, Insights",
    intro: "Dein neuer Webauftritt soll durchstarten? Dann vergiss diese Punkte nicht. Mit dieser Checkliste wird dein Relaunch ein Erfolg.",
    body: "1. Bilder komprimieren\n2. Lazy Load aktivieren\n3. Weniger Skripte nutzen\n\n➡️ Ladezeit ist Rankingfaktor!",
    seoTitle: "Website Relaunch Checkliste – Erfolgreich neu starten | maxWapp",
    seoDesc: "Starte deinen Relaunch richtig: mit unserer Schritt-für-Schritt Checkliste für Struktur, Technik, SEO & Branding.",
    image: "/images/projects/vadim-aevskiy-ipad.webp"
  }
  // weitere Einträge...
];