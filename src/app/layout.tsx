import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smile Up — Laboratoire d'Orthodontie | Ingré (45)",
  description: "Smile Up, laboratoire dentaire spécialisé en orthodontie. Appareils sur mesure, 100% fabriqués en France à Ingré (Loiret). Précision, fiabilité et réactivité au service des praticiens.",
  openGraph: {
    title: "Smile Up — Laboratoire d'Orthodontie",
    description: "Appareils orthodontiques sur mesure, 100% fabriqués en France. Partenaire de confiance des orthodontistes et chirurgiens-dentistes.",
    url: "https://smileup45.fr",
    siteName: "Smile Up",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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