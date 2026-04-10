import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smile Up — Laboratoire d'Orthodontie | Ingré (45)",
  description: "Smile Up, laboratoire orthodontique situé à Ingré dans le Loiret (45). Appareils fixes, amovibles, fonctionnels, gouttières thermoformées et gamme PUL — 100% fabriqués en France. Partenaire des orthodontistes et chirurgiens-dentistes.",
  keywords: [
    "smileup45",
    "smile up",
    "laboratoire orthodontie",
    "laboratoire dentaire Ingré",
    "laboratoire dentaire Loiret",
    "laboratoire dentaire 45",
    "orthodontie Orléans",
    "appareils orthodontiques sur mesure",
    "gouttières thermoformées",
    "appareil fonctionnel orthodontie",
    "PUL orthodontie",
    "CFAO orthodontie",
    "laboratoire dentaire France",
    "prothésiste dentaire ODF",
    "Jessica Lerandy Estevez",
  ],
  authors: [{ name: "Smile Up", url: "https://smileup45.fr" }],
  creator: "Smile Up",
  metadataBase: new URL("https://smileup45.fr"),
  alternates: {
    canonical: "https://smileup45.fr",
  },
  openGraph: {
    title: "Smile Up — Laboratoire d'Orthodontie | Ingré (45)",
    description: "Appareils orthodontiques sur mesure, 100% fabriqués en France à Ingré (Loiret). Partenaire de confiance des orthodontistes et chirurgiens-dentistes.",
    url: "https://smileup45.fr",
    siteName: "Smile Up",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Up — Laboratoire d'Orthodontie",
    description: "Appareils orthodontiques sur mesure, 100% fabriqués en France à Ingré (Loiret).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Smile Up",
  "alternateName": "smileup45",
  "description": "Laboratoire d'orthodontie spécialisé, 100% fabriqué en France. Appareils fixes, amovibles, fonctionnels et gouttières thermoformées.",
  "url": "https://smileup45.fr",
  "telephone": "+33660497925",
  "email": "smile.up045@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ingré",
    "postalCode": "45140",
    "addressCountry": "FR",
    "addressRegion": "Loiret"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Jessica Lerandy Estevez",
    "jobTitle": "Orthésiste dentaire spécialisée ODF"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "sameAs": [
    "https://smileup45.fr"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
