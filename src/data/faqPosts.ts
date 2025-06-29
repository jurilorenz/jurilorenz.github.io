export interface FaqPost {
  slug: string;
  question: string;
  answer: string;
  seoTitle: string;
  seoDesc: string;
  ctaText?: string; 
  ctaLink?: string; 
}

export const faqPosts: FaqPost[] = [
  {
    slug: "was-ist-modernes-webdesign",
    question: "Was ist modernes Webdesign?",
    answer: "Modernes Webdesign kombiniert Ästhetik, Ladegeschwindigkeit und Benutzerfreundlichkeit. Mobilfreundlichkeit, klare Strukturen und SEO gehören heute zum Standard.",
    seoTitle: "Was ist modernes Webdesign? | FAQ maxWapp",
    seoDesc: "Lerne, was modernes Webdesign heute ausmacht: Schnelligkeit, Design und SEO.",
    ctaText: "Mehr über Websites entdecken",
    ctaLink: "/services/websites",
  },
  {
    slug: "wie-lang-dauert-webseiten-erstellung",
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Je nach Umfang dauert die Entwicklung einer Website ca. 2–6 Wochen. Faktoren sind Design, Anzahl der Seiten und spezielle Funktionen.",
    seoTitle: "Wie lange dauert eine Website-Erstellung? | maxWapp",
    seoDesc: "Erfahre, wie schnell deine neue Website entstehen kann. Infos & Zeiten bei maxWapp.",
    ctaText: "Ablauf ansehen",
    ctaLink: "/services/websites",
  },
  {
    slug: "was-kostet-eine-website",
    question: "Was kostet eine professionelle Website?",
    answer: "Eine hochwertige Website beginnt bei ca. 900 €. Der Preis variiert je nach Design, Technik und Funktionsumfang.",
    seoTitle: "Was kostet eine Website? | FAQ maxWapp",
    seoDesc: "Preise für professionelle Websites ab 900 €. Transparente Infos bei maxWapp.",
    ctaText: "Zu den Preisen",
    ctaLink: "/preise",
  },
  {
    slug: "was-ist-seo",
    question: "Was bedeutet SEO bei Websites?",
    answer: "SEO steht für Suchmaschinenoptimierung. Es umfasst Technik, Struktur und Inhalte, um bessere Google-Rankings zu erreichen.",
    seoTitle: "Was ist SEO bei Websites? | FAQ maxWapp",
    seoDesc: "Wie SEO deine Website sichtbarer macht – kurz erklärt im maxWapp FAQ.",
    ctaText: "Mehr über Website-Optimierung",
    ctaLink: "/services/website-optimierung",

  },
  {
    slug: "was-kostet-ein-shopify-shop",
    question: "Was kostet ein Shopify-Shop?",
    answer: "Ein optimierter Shopify-Shop startet bei etwa 1200 €. Der Preis hängt von Design, Struktur und gewünschten Features ab.",
    seoTitle: "Was kostet ein Shopify-Shop? | FAQ maxWapp",
    seoDesc: "Preisübersicht für Shopify-Shops. Einstieg und Optimierung bei maxWapp.",
    ctaText: "Mehr über Online-Shops",
    ctaLink: "/services/online-shop",
  },
  {
    slug: "brauche-ich-ein-branding",
    question: "Brauche ich Branding für meine Website?",
    answer: "Ein starkes Branding schafft Vertrauen und Wiedererkennung. Farben, Logo und Design wirken zusammen und beeinflussen Kaufentscheidungen.",
    seoTitle: "Warum ist Branding wichtig? | FAQ maxWapp",
    seoDesc: "Erfahre, wie Branding Vertrauen aufbaut. maxWapp erklärt’s einfach.",
    ctaText: "Mehr über Branding & Printdesign",
    ctaLink: "/services/branding-und-printdesign",
  },
  {
    slug: "kann-man-eine-alte-website-optimieren",
    question: "Kann man eine alte Website optimieren?",
    answer: "Ja! Durch technische Optimierung, SEO und modernes Design kann eine bestehende Website wieder konkurrenzfähig gemacht werden.",
    seoTitle: "Kann man eine alte Website optimieren? | FAQ maxWapp",
    seoDesc: "Wie du aus deiner bestehenden Website mehr herausholen kannst. Tipps im FAQ.",
    ctaText: "Mehr über Optimierung",
    ctaLink: "/services/website-optimierung",
  },
  {
    slug: "was-benoetige-ich-fuer-eine-website",
    question: "Was muss ich für meine Website bereitstellen?",
    answer: "Für die Erstellung deiner Website werden hochwertige Texte, Bilder, Logos und ggf. Designvorgaben benötigt. Je besser die Qualität, desto stärker der Eindruck.",
    seoTitle: "Was brauche ich für eine Website? | FAQ maxWapp",
    seoDesc: "Was du für den Start deiner Website benötigst – kompakt erklärt im maxWapp FAQ.",
  },
  
  {
    slug: "was-passiert-wenn-layout-nicht-gefaellt",
    question: "Was passiert, wenn mir das Design nicht gefällt?",
    answer: "Keine Sorge! Nach dem ersten Entwurf kannst du Änderungswünsche äußern. Falls nötig, wird das Design grundlegend angepasst, bis du zufrieden bist.",
    seoTitle: "Was tun bei Design-Änderungswunsch? | FAQ maxWapp",
    seoDesc: "Erfahre, was passiert, wenn dir der erste Website-Entwurf nicht gefällt.",
  },
  
  {
    slug: "kann-ich-meine-website-selbst-verwalten",
    question: "Kann ich meine Website selbst verwalten?",
    answer: "Ja! Mit einem CMS wie WordPress kannst du Texte und Bilder einfach selbst bearbeiten – ganz ohne Programmierkenntnisse. Ich erkläre dir gerne, wie’s geht.",
    seoTitle: "Website selbst pflegen – geht das? | FAQ maxWapp",
    seoDesc: "Wie du deine Website selbst verwalten kannst – Infos im maxWapp FAQ.",
  },
  
{
  slug: "wo-finde-ich-bilder-fuer-meine-website",
  question: "Woher bekomme ich Bilder für meine Website?",
  answer: "Du kannst professionelle Bilder kaufen oder auf kostenlose Bilddatenbanken zurückgreifen. Wichtig: Achte auf hohe Qualität und Lizenzrechte. Außerdem biete ich selbst professionelle Foto- und Videoaufnahmen an – mit hochwertiger Kamera, Post-Production und individueller Bildsprache, perfekt abgestimmt auf dein Business.",
  seoTitle: "Bilder für die Website finden | FAQ maxWapp",
  seoDesc: "Tipps, wo du passende Bilder für deine Website findest – inklusive Profi-Fotoservice von maxWapp.",
},
  
{
  slug: "was-kostet-eine-website-im-monat",
  question: "Was kostet eine Website monatlich?",
  answer: "Neben der Erstellung entstehen Hosting- und Domainkosten. Übliche Preise: Hosting ab ca. 5 €/Monat, Domain ab ca. 10 €/Jahr. Bei Bedarf biete ich auch Optionen mit kostenlosem Hosting und Domain an, z. B. für kleinere Projekte oder Starter-Websites. Keine versteckten Kosten bei maxWapp.",
  seoTitle: "Monatliche Website-Kosten? | FAQ maxWapp",
  seoDesc: "Erfahre, welche monatlichen Kosten für Website-Betrieb anfallen – inklusive Optionen für kostenloses Hosting.",
},
  
  {
    slug: "brauche-ich-eine-komplett-neue-website",
    question: "Brauche ich immer eine neue Website?",
    answer: "Nicht unbedingt! Oft lohnt sich ein Relaunch deiner bestehenden Seite – mit modernem Design, besserer Technik und optimierter Nutzerführung.",
    seoTitle: "Brauche ich eine neue Website? | FAQ maxWapp",
    seoDesc: "Wann sich ein Website-Relaunch lohnt – Tipps im FAQ von maxWapp.",
  },
  
  {
    slug: "warum-ist-meine-website-nicht-responsive",
    question: "Warum wird meine Website auf Smartphones falsch angezeigt?",
    answer: "Fehlendes Responsive Design kann dazu führen. Ich überprüfe gerne, ob deine Seite mobil optimiert werden kann – und verbessere sie gezielt.",
    seoTitle: "Website nicht mobil? Lösungen | FAQ maxWapp",
    seoDesc: "Was tun, wenn deine Website auf Smartphones schlecht aussieht? maxWapp erklärt's.",
  },
  
  {
    slug: "warum-benoetige-ich-eine-webseite",
    question: "Warum brauche ich eine eigene Website?",
    answer: "Eine Website ist dein offizielles Aushängeschild im Internet – sichtbar, überzeugend und rund um die Uhr erreichbar. Kunden informieren sich heute online über Produkte und Dienstleistungen. Ohne starke Website verlierst du Sichtbarkeit, Vertrauen und Chancen auf neue Kunden.",
    seoTitle: "Warum eine eigene Website? | FAQ maxWapp",
    seoDesc: "Warum eine starke Website heute unverzichtbar für deinen Unternehmenserfolg ist.",
  },
    
    {
      slug: "was-ist-ein-cms",
      question: "Was ist ein CMS und wozu brauche ich es?",
      answer: "CMS steht für Content-Management-System. Damit kannst du deine Website-Inhalte wie Texte und Bilder selbst pflegen – einfach, schnell und ohne Programmierkenntnisse.",
      seoTitle: "Was ist ein CMS? | FAQ maxWapp",
      seoDesc: "CMS erklärt: Wie du deine Website einfach selbst verwalten kannst – maxWapp FAQ.",
    },
    
    {
      slug: "was-ist-eine-domain",
      question: "Was ist eine Domain?",
      answer: "Eine Domain ist die Adresse deiner Website im Internet, z.B. maxwapp.de. Sie besteht aus einem Namen und einer Endung wie .de oder .com – beides kannst du frei wählen, sofern verfügbar.",
      seoTitle: "Was ist eine Domain? | FAQ maxWapp",
      seoDesc: "Was eine Domain ist und wie sie aufgebaut ist – kurz erklärt von maxWapp.",
    },
    
    {
      slug: "was-ist-ein-internet-provider",
      question: "Was ist ein Internet Provider?",
      answer: "Ein Internet- oder Hosting-Provider bietet dir Speicherplatz für deine Website und sorgt dafür, dass sie online erreichbar ist. Bekannte Anbieter sind z.B. ALL-INKL, IONOS oder Strato.",
      seoTitle: "Was ist ein Internet Provider? | FAQ maxWapp",
      seoDesc: "Provider einfach erklärt: Hosting und Domains verständlich im maxWapp FAQ.",
    }
];