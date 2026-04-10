import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smile Up — Laboratoire d'Orthodontie | Ingré, Loiret (45)",
  description: "Smile Up, laboratoire d'orthodontie exclusif à Ingré (45). Appareils fixes, amovibles, fonctionnels, gouttières thermoformées, gamme PUL et CFAO — 100% fabriqués en France. Partenaire des orthodontistes et chirurgiens-dentistes du Loiret et de la région Centre-Val de Loire.",
  keywords: [
    "smileup45", "smile up orthodontie", "smile up laboratoire",
    "laboratoire orthodontie Ingré", "laboratoire orthodontie Loiret",
    "laboratoire orthodontie 45", "laboratoire orthodontie Orléans",
    "laboratoire orthodontie Centre-Val de Loire",
    "laboratoire dentaire orthodontie France",
    "prothésiste dentaire ODF", "orthésiste dentaire",
    "orthopédie dento-faciale", "ODF laboratoire",
    "appareils orthodontiques sur mesure",
    "appareils fixes orthodontie", "appareils amovibles orthodontie",
    "appareils fonctionnels orthodontie",
    "gouttières thermoformées laboratoire",
    "contention orthodontique", "gouttière contention",
    "gamme PUL orthodontie", "propulseur universel light",
    "CFAO orthodontie", "bagues sur mesure orthodontie",
    "scan intraoral STL laboratoire", "iTero laboratoire",
    "3shape laboratoire", "Medit laboratoire",
    "Jessica Lerandy Estevez", "smile.up045",
    "laboratoire sans sous-traitance", "made in France orthodontie",
    "labo orthodontie partenaire praticien",
    "livraison rapide appareils orthodontiques",
  ],
  authors: [{ name: "Smile Up", url: "https://smileup45.fr" }],
  creator: "Smile Up",
  metadataBase: new URL("https://smileup45.fr"),
  alternates: { canonical: "https://smileup45.fr" },
  openGraph: {
    title: "Smile Up — Laboratoire d'Orthodontie | Ingré, Loiret (45)",
    description: "Appareils orthodontiques sur mesure, 100% fabriqués en France à Ingré (Loiret). Partenaire de confiance des orthodontistes et chirurgiens-dentistes — livraison J+1.",
    url: "https://smileup45.fr",
    siteName: "Smile Up",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/labo-1.jpg", width: 1200, height: 630, alt: "Smile Up — Laboratoire d'Orthodontie à Ingré" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Up — Laboratoire d'Orthodontie | Ingré (45)",
    description: "Appareils orthodontiques sur mesure, 100% fabriqués en France. Partenaire des orthodontistes du Loiret.",
    images: ["/images/labo-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://smileup45.fr/#organization",
  "name": "Smile Up",
  "alternateName": ["smileup45", "smile up orthodontie", "laboratoire Smile Up"],
  "description": "Laboratoire d'orthodontie exclusif situé à Ingré dans le Loiret. Spécialisé en orthopédie dento-faciale, Smile Up fabrique 100% en France des appareils fixes, amovibles, fonctionnels, gouttières thermoformées et la gamme PUL.",
  "url": "https://smileup45.fr",
  "telephone": "+33660497925",
  "email": "smile.up045@gmail.com",
  "image": "https://smileup45.fr/images/labo-1.jpg",
  "logo": "https://smileup45.fr/icon.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ingré",
    "addressLocality": "Ingré",
    "postalCode": "45140",
    "addressCountry": "FR",
    "addressRegion": "Loiret"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 47.9167, "longitude": 1.8333 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "priceRange": "Sur devis",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Virement bancaire",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loiret" },
    { "@type": "AdministrativeArea", "name": "Centre-Val de Loire" },
    { "@type": "Country", "name": "France" }
  ],
  "founder": {
    "@type": "Person",
    "name": "Jessica Lerandy Estevez",
    "jobTitle": "Orthésiste dentaire spécialisée ODF",
    "worksFor": { "@id": "https://smileup45.fr/#organization" }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gamme Smile Up",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Appareils fixes orthodontiques", "description": "Quad Helix, mainteneurs d'espace, soudure laser — délai 7 à 10 jours" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Appareils amovibles", "description": "Plaques Hawley, Vaugeois, systèmes d'expansion — personnalisables" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Appareils fonctionnels", "description": "Chabre, Lautrou, Klammt, PUL, ELN, Bionator, pistes de Planas — délai ~15 jours" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gamme PUL 2", "description": "Propulseur Universel Light 2 — conception 3D sur mesure — délai 15 à 20 jours" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CFAO orthodontique", "description": "Bagues sur mesure modélisées et fabriquées numériquement" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gouttières thermoformées", "description": "Contentions, éclaircissement, sport — délai 10 jours" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Urgences", "description": "Traitement prioritaire — nous consulter" }}
    ]
  },
  "sameAs": ["https://smileup45.fr", "https://www.smileup45.fr"]
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://smileup45.fr/#website",
  "url": "https://smileup45.fr",
  "name": "Smile Up — Laboratoire d'Orthodontie",
  "description": "Site officiel du laboratoire d'orthodontie Smile Up à Ingré (Loiret)",
  "inLanguage": "fr-FR",
  "publisher": { "@id": "https://smileup45.fr/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://smileup45.fr/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://smileup45.fr" },
    { "@type": "ListItem", "position": 2, "name": "Nos Gammes", "item": "https://smileup45.fr/gammes" },
    { "@type": "ListItem", "position": 3, "name": "Le Laboratoire", "item": "https://smileup45.fr/about" }
  ]
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment passer ma première commande chez Smile Up ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contactez-nous par email à smile.up045@gmail.com ou par téléphone au 06 60 49 79 25. Nous vous guidons pas à pas : prescription, empreintes physiques ou numériques (STL), et suivi jusqu'à la livraison."
      }
    },
    {
      "@type": "Question",
      "name": "Quels formats d'empreintes numériques acceptez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smile Up est compatible avec iTero, 3Shape, Medit, Carestream Dental et Planmeca. Envoyez vos fichiers STL directement par email ou via les plateformes partenaires."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les délais de fabrication ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contentions et réparations : 3 à 5 jours. Appareils fixes et amovibles : 7 à 10 jours. Gouttières thermoformées : 10 jours. Appareils fonctionnels : environ 15 jours. Gamme PUL : 15 à 20 jours. Urgences : traitement prioritaire, contactez-nous directement."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que Smile Up sous-traite la fabrication ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Chaque appareil est intégralement conçu et fabriqué dans notre laboratoire à Ingré (45), sans aucun prestataire extérieur, garantissant un contrôle qualité total."
      }
    },
    {
      "@type": "Question",
      "name": "Livrez-vous partout en France ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Livraison en France métropolitaine en J+1 via nos services de transport partenaires."
      }
    },
    {
      "@type": "Question",
      "name": "Vous travaillez avec quels types de praticiens ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smile Up est exclusivement dédié aux professionnels de l'orthodontie : orthodontistes, chirurgiens-dentistes pratiquant l'ODF et pédiatres dentaires. Nous n'acceptons pas les commandes de particuliers."
      }
    }
  ]
};

const jsonLdServiceCatalog = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://smileup45.fr/gammes#services",
  "name": "Gammes Smile Up — Appareils orthodontiques sur mesure",
  "description": "Catalogue complet des appareils orthodontiques fabriqués par le laboratoire Smile Up à Ingré (Loiret)",
  "url": "https://smileup45.fr/gammes",
  "numberOfItems": 7,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalDevice", "name": "Appareils fixes orthodontiques", "description": "Quad Helix, mainteneurs d'espace, soudure laser — délai 7 à 10 jours", "url": "https://smileup45.fr/gammes#appareils-fixes" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "MedicalDevice", "name": "Appareils amovibles orthodontiques", "description": "Plaques Hawley, Vaugeois, systèmes d'expansion — délai 7 à 10 jours", "url": "https://smileup45.fr/gammes#appareils-amovibles" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "MedicalDevice", "name": "Appareils fonctionnels orthodontiques", "description": "Chabre, Lautrou, Klammt, ELN, Bionator, pistes de Planas — délai ~15 jours", "url": "https://smileup45.fr/gammes#appareils-fonctionnels" } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "MedicalDevice", "name": "Propulseur Universel Light (PUL)", "description": "Gamme PUL — conception 3D sur mesure — délai 15 à 20 jours", "url": "https://smileup45.fr/gammes#pul" } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "MedicalDevice", "name": "Appareils thermoformés", "description": "Contentions, éclaircissement, sport — thermoformage Biostar — délai 10 jours", "url": "https://smileup45.fr/gammes#thermoformes" } },
    { "@type": "ListItem", "position": 6, "item": { "@type": "MedicalDevice", "name": "CFAO orthodontique", "description": "Bagues sur mesure modélisées et fabriquées numériquement", "url": "https://smileup45.fr/gammes#cfao" } },
    { "@type": "ListItem", "position": 7, "item": { "@type": "MedicalDevice", "name": "Urgences orthodontiques", "description": "Traitement prioritaire — délai à convenir — contactez le laboratoire", "url": "https://smileup45.fr/#contact" } }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServiceCatalog) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="FR-45" />
        <meta name="geo.placename" content="Ingré, Loiret" />
        <meta name="geo.position" content="47.9167;1.8333" />
        <meta name="ICBM" content="47.9167, 1.8333" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="1b2e0205-1fa2-45bd-8c45-4d4c1200c30e"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
