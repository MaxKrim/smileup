import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: "Mentions Légales | Smile Up — Laboratoire d'Orthodontie Ingré (45)",
  description: "Mentions légales du site smileup45.fr — Smile Up, laboratoire d'orthodontie de Jessica Lerandy Estevez, Ingré (Loiret).",
  alternates: { canonical: "https://smileup45.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F8FAFB]">
        <Navigation />
        <main className="flex-1 pt-28 pb-20">
          <div className="mx-auto max-w-[800px] px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D5F75] mb-10 tracking-tight">
              Mentions Légales
            </h1>

            <div className="prose prose-sm max-w-none space-y-10 text-[#3D5A6A]">

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">1. Éditeur du site</h2>
                <p className="leading-relaxed">
                  Le site <strong>smileup45.fr</strong> est édité par :<br /><br />
                  <strong>Smile Up</strong><br />
                  Laboratoire d&apos;orthodontie<br />
                  Fondatrice : Jessica Lerandy Estevez<br />
                  Adresse : Ingré, 45140 Loiret, France<br />
                  Email : <a href="mailto:smile.up045@gmail.com" className="text-[#46aac9] hover:underline">smile.up045@gmail.com</a><br />
                  Téléphone : 06 60 49 79 25
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">2. Hébergement</h2>
                <p className="leading-relaxed">
                  Le site est hébergé par :<br /><br />
                  <strong>Vercel Inc.</strong><br />
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723, États-Unis<br />
                  Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#46aac9] hover:underline">vercel.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">3. Propriété intellectuelle</h2>
                <p className="leading-relaxed">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Smile Up ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="mt-3 leading-relaxed">
                  Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation préalable écrite de Smile Up.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">4. Données personnelles</h2>
                <p className="leading-relaxed">
                  Ce site ne collecte aucune donnée personnelle via des formulaires. Les seules communications possibles sont par email ou téléphone, à l&apos;initiative de l&apos;utilisateur.
                </p>
                <p className="mt-3 leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez : <a href="mailto:smile.up045@gmail.com" className="text-[#46aac9] hover:underline">smile.up045@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">5. Cookies</h2>
                <p className="leading-relaxed">
                  Ce site n&apos;utilise pas de cookies de traçage ou publicitaires. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">6. Responsabilité</h2>
                <p className="leading-relaxed">
                  Smile Up s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Smile Up ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. En conséquence, Smile Up décline toute responsabilité pour toute imprécision ou omission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#1D5F75] mb-3">7. Loi applicable</h2>
                <p className="leading-relaxed">
                  Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l&apos;utilisation du site smileup45.fr sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </section>

              <p className="text-xs text-[#5A7A8A] pt-6 border-t border-[#46aac9]/15">
                Dernière mise à jour : avril 2026
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
