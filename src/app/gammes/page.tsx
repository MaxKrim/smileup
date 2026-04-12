import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nos Gammes — Appareils Orthodontiques sur Mesure | Smile Up Ingré (45)",
  description: "Découvrez toutes les gammes Smile Up : appareils fixes, amovibles, fonctionnels, Propulseur Universel Light (PUL), gouttières thermoformées, CFAO et urgences. Laboratoire d'orthodontie 100% France, livraison J+1.",
  keywords: [
    "appareils orthodontiques fixes laboratoire",
    "appareils amovibles orthodontie sur mesure",
    "appareils fonctionnels orthodontie laboratoire",
    "Propulseur Universel Light PUL laboratoire",
    "gouttières thermoformées laboratoire dentaire",
    "CFAO orthodontie bagues sur mesure",
    "contention orthodontique laboratoire",
    "Quad Helix laboratoire Loiret",
    "Chabre Lautrou Klammt laboratoire ODF",
    "plaque Hawley laboratoire orthodontie",
    "plaque Vaugeois orthodontie",
    "Bionator pistes de Planas laboratoire",
    "thermoformage Biostar laboratoire",
    "mainteneur d'espace laboratoire dentaire",
    "urgences laboratoire orthodontie",
    "laboratoire orthodontie délais fabrication",
    "orthodontie 45 laboratoire gammes",
    "labo orthodontie Loiret tarifs délais",
    "Smile Up gammes appareils",
  ],
  alternates: { canonical: "https://smileup45.fr/gammes" },
  openGraph: {
    title: "Gammes Smile Up — Tous nos appareils orthodontiques sur mesure",
    description: "Appareils fixes, amovibles, fonctionnels, PUL, gouttières thermoformées et CFAO — 100% fabriqués en France à Ingré (45). Délais garantis, sans sous-traitance.",
    url: "https://smileup45.fr/gammes",
    siteName: "Smile Up",
    locale: "fr_FR",
    type: "website",
  },
};

const gammes = [
  {
    id: "01",
    slug: "appareils-fixes",
    title: "Appareils Fixes",
    subtitle: "Précision scellée",
    badge: "Soudure laser",
    delay: "7 à 10 jours",
    description: "Les appareils fixes sont conçus en associant orthodontie traditionnelle et conception numérique, pour une intégration optimale en bouche et un gain de temps au fauteuil.",
    items: [
      "Quad Helix",
      "Mainteneurs d'espace",
      "Arcs palatins / linguaux",
      "Grilles anti-pouce",
      "Soudure laser",
      "Tubes et crochets sur mesure",
    ],
    detail: "Fabriqués en alliages biocompatibles et adaptés à chaque prescription, les appareils fixes Smile Up bénéficient d'un contrôle qualité rigoureux avant expédition. La soudure laser assure une robustesse optimale et une précision de positionnement irréprochable.",
    color: "from-[#46aac9] to-[#1D5F75]",
  },
  {
    id: "02",
    slug: "appareils-amovibles",
    title: "Appareils Amovibles",
    subtitle: "Flexibilité et confort",
    badge: "Personnalisable",
    delay: "7 à 10 jours",
    description: "Chaque appareil amovible est élaboré à partir de l'indication, avec une attention particulière portée à la conception, aux finitions et à l'adaptation au patient.",
    items: [
      "Plaque Hawley",
      "Plaque de Vaugeois",
      "Systèmes d'expansion (vis, ressorts)",
      "Contentions thermoformées",
      "Plaques palatines de Schwarz",
      "Appareils de rétention sur mesure",
    ],
    detail: "Les plaques amovibles sont réalisées en résine acrylique biocompatible, colorée ou transparente selon la préférence du praticien et du patient. Les crochets Adams, triangulaires et de ballesta sont façonnés manuellement avec soin.",
    color: "from-[#E8734A] to-[#C05535]",
  },
  {
    id: "03",
    slug: "appareils-fonctionnels",
    title: "Appareils Fonctionnels",
    subtitle: "Guidage et rééquilibrage",
    badge: "Sur mesure",
    delay: "~ 15 jours",
    description: "La conception des appareils fonctionnels vise à orienter les fonctions et la croissance, en cohérence avec le diagnostic et le plan de traitement du praticien.",
    items: [
      "Appareil de Chabre",
      "Appareil de Lautrou",
      "Klammt",
      "ELN (Éducateur Labio-Nasal)",
      "Bionator",
      "Pistes de Planas",
      "Propulseur mandibulaire amovible",
    ],
    detail: "Chaque appareil fonctionnel est conçu selon des cires de construction précises fournies par le praticien. Une attention particulière est portée à la liberté de mouvement mandibulaire, au confort d'occlusion et à la durabilité de la résine.",
    color: "from-[#46aac9] to-[#2A7A95]",
  },
  {
    id: "04",
    slug: "pul",
    title: "Gamme PUL",
    subtitle: "Propulseur Universel Light",
    badge: "Conception 3D",
    delay: "15 à 20 jours",
    description: "La gamme P.U.L s'appuie sur une approche thérapeutique multidimensionnelle, permettant d'agir simultanément sur les axes sagittal, transversal, vertical et fonctionnel.",
    items: [
      "PUL 2 — modèle standard",
      "PUL avec expansion transversale",
      "PUL avec ancrage squelettique",
      "Configurations multi-vecteurs",
      "Modélisation 3D sur mesure",
    ],
    detail: "Le Propulseur Universel Light est conçu numériquement et fabriqué en résine haute performance avec des composants métalliques de précision. Chaque PUL est personnalisé selon les paramètres occlusaux et fonctionnels fournis par le praticien.",
    color: "from-[#1D5F75] to-[#46aac9]",
  },
  {
    id: "05",
    slug: "thermoformes",
    title: "Appareils Thermoformés",
    subtitle: "Contention / Éclaircissement / Sport",
    badge: "Thermoformage Biostar",
    delay: "10 jours",
    description: "Le thermoformage permet la réalisation d'appareils aux usages variés, offrant une grande liberté d'association avec d'autres approches orthodontiques.",
    items: [
      "Gouttières de contention (rigide, semi-rigide, souple)",
      "Gouttières d'éclaircissement",
      "Gouttières de sport (protection)",
      "Gouttières de bruxisme",
      "Contentions combinées fil+gouttière",
    ],
    detail: "Réalisées sur machine Biostar avec des matériaux certifiés (Erkodent, Scheu Dental), les gouttières thermoformées Smile Up offrent un rendu lisse, confortable et esthétique. Les épaisseurs disponibles vont de 0,6 à 3 mm selon l'indication.",
    color: "from-[#E8734A] to-[#D4633E]",
  },
  {
    id: "06",
    slug: "cfao",
    title: "CFAO Orthodontique",
    subtitle: "Conception et fabrication assistées par ordinateur",
    badge: "Numérique",
    delay: "Sur devis",
    description: "La CFAO permet de concevoir et fabriquer numériquement des dispositifs orthodontiques d'une précision inégalée, compatibles avec les principaux scanners intraoraux du marché.",
    items: [
      "Bagues sur mesure modélisées",
      "Positionnement numérique précis",
      "Fichiers STL iTero, 3Shape, Medit, Carestream",
      "Impression 3D haute résolution",
      "Contrôle d'occlusion numérique",
    ],
    detail: "Smile Up reçoit vos empreintes numériques directement depuis votre scanner intraoral. La modélisation est réalisée en CAD/CAM, puis imprimée en résine haute résolution ou usinée selon la pièce. La précision micrométrique garantit une adaptation immédiate.",
    color: "from-[#2A7A95] to-[#1D5F75]",
  },
];

export default function GammesPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F8FAFB]">
        <Navigation />

        <main className="flex-1 pt-28">
          {/* Hero */}
          <section className="px-6 md:px-12 pb-14">
            <div className="mx-auto max-w-[1200px]">
              <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-4">
                Gamme professionnelle
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#1D5F75] mb-6">
                Nos Gammes
              </h1>
              <p className="text-lg text-[#3D5A6A] leading-relaxed max-w-3xl mb-4">
                Smile Up fabrique l&apos;ensemble des dispositifs orthodontiques dont vous avez besoin — des appareils les plus classiques aux conceptions les plus complexes. Chaque appareil est réalisé dans notre laboratoire à <strong className="text-[#1D5F75]">Ingré (45)</strong>, sans sous-traitance, avec des matériaux certifiés.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-[#1D5F75] text-white text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">100% Fabriqué en France</span>
                <span className="bg-[#E8734A] text-white text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">Sans sous-traitance</span>
                <span className="bg-white border border-[#46aac9]/30 text-[#1D5F75] text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">Livraison J+1</span>
              </div>
            </div>
          </section>

          {/* Gammes */}
          <section className="px-6 md:px-12 pb-16">
            <div className="mx-auto max-w-[1200px] space-y-10">
              {gammes.map((gamme) => (
                <div key={gamme.id} id={gamme.slug} className="bg-white rounded-xl border border-[#46aac9]/15 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Header coloré */}
                    <div className={`bg-gradient-to-br ${gamme.color} p-8 flex flex-col justify-between`}>
                      <div>
                        <div className="text-white/40 text-5xl font-light mb-4">{gamme.id}</div>
                        <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-md tracking-wide uppercase mb-4">
                          {gamme.badge}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-2">
                          {gamme.title}
                        </h2>
                        <p className="text-white/80 text-sm font-light">{gamme.subtitle}</p>
                      </div>
                      <div className="mt-6 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                        <span className="text-white/80 text-sm">Délai : <strong className="text-white">{gamme.delay}</strong></span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="lg:col-span-2 p-8">
                      <p className="text-[#3D5A6A] leading-relaxed mb-6">{gamme.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E8734A] mb-3">Dispositifs inclus</h3>
                          <ul className="space-y-2">
                            {gamme.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[#3D5A6A]">
                                <CheckCircle className="w-4 h-4 text-[#46aac9] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E8734A] mb-3">Détail technique</h3>
                          <p className="text-sm text-[#5A7A8A] leading-relaxed">{gamme.detail}</p>
                        </div>
                      </div>

                      <Link
                        href="/#contact"
                        className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#46aac9] to-[#2A7A95] text-white px-6 py-2.5 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#46aac9]/25">
                        <span>Demander un devis</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Urgences callout */}
          <section className="px-6 md:px-12 py-10 bg-gradient-to-b from-[#46aac9]/5 to-[#F8FAFB]">
            <div className="mx-auto max-w-[1200px]">
              <div className="bg-white rounded-xl border border-[#E8734A]/20 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <span className="inline-block text-[#E8734A] text-xs font-semibold uppercase tracking-widest mb-2">Traitement prioritaire</span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1D5F75] mb-2">Urgences</h2>
                  <p className="text-[#3D5A6A] text-sm max-w-xl">
                    Casse, perte, besoin urgent d&apos;un appareil avant un rendez-vous patient ? Contactez-nous directement pour un traitement prioritaire. Nous faisons tout notre possible pour répondre dans les meilleurs délais.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a
                    href="tel:+33777995315"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E8734A] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#d4623b] hover:shadow-lg whitespace-nowrap">
                    Appeler le labo
                  </a>
                  <a
                    href="mailto:smile.up045@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1D5F75]/30 text-[#1D5F75] px-6 py-3 text-sm font-semibold transition-all hover:bg-[#1D5F75] hover:text-white whitespace-nowrap">
                    Envoyer un email
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tableau délais */}
          <section className="px-6 md:px-12 py-14">
            <div className="mx-auto max-w-[1200px]">
              <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-3">
                Récapitulatif
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1D5F75] mb-8">
                Délais de fabrication
              </h2>
              <div className="bg-white rounded-xl border border-[#46aac9]/15 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#46aac9] to-[#2A7A95] text-white">
                      <th className="text-left p-4 font-semibold tracking-wide">Gamme / Appareil</th>
                      <th className="text-left p-4 font-semibold tracking-wide">Délai estimé</th>
                      <th className="text-left p-4 font-semibold tracking-wide hidden sm:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#46aac9]/10">
                    {[
                      { label: "Appareils fixes", delay: "7 à 10 jours", note: "CFAO et traditionnel" },
                      { label: "Appareils amovibles", delay: "7 à 10 jours", note: "Plaques, crochets, ressorts" },
                      { label: "Appareils fonctionnels", delay: "~ 15 jours", note: "Chabre, Lautrou, Klammt, Bionator…" },
                      { label: "Gamme PUL", delay: "15 à 20 jours", note: "Conception 3D sur mesure" },
                      { label: "Gouttières thermoformées", delay: "10 jours", note: "Contention, sport, éclaircissement" },
                      { label: "Contentions", delay: "3 à 5 jours", note: "" },
                      { label: "Réparations", delay: "3 à 5 jours", note: "" },
                      { label: "Urgences", delay: "Prioritaire", note: "Nous consulter", accent: true },
                    ].map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'} hover:bg-[#E8F4F8]/30 transition-colors`}>
                        <td className={`p-4 font-medium ${row.accent ? 'text-[#E8734A]' : 'text-[#1D5F75]'}`}>{row.label}</td>
                        <td className={`p-4 font-semibold ${row.accent ? 'text-[#E8734A]' : 'text-[#46aac9]'}`}>{row.delay}</td>
                        <td className="p-4 text-[#5A7A8A] hidden sm:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#5A7A8A] mt-3">* Délais indicatifs à partir de la réception complète du dossier. Livraison J+1 en France métropolitaine.</p>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-[#1D5F75] via-[#2A7A95] to-[#46aac9] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,115,74,0.15),transparent_60%)]"></div>
            <div className="mx-auto max-w-[1200px] text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Un projet ? Une question ?
              </h2>
              <p className="text-lg text-white/80 max-w-[650px] mx-auto mb-10">
                Contactez Smile Up pour discuter de vos besoins spécifiques, obtenir un devis ou planifier l&apos;envoi de votre premier dossier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:smile.up045@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20">
                  smile.up045@gmail.com
                </a>
                <a
                  href="tel:+33777995315"
                  className="inline-flex items-center gap-2 rounded-md bg-[#E8734A] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#d4623b] hover:shadow-lg">
                  07 77 99 53 15
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
