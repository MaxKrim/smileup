import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ArrowRight, Award, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const partners = [
    { name: "Leone", logo: "/logos/leone.png", size: "h-10" },
    { name: "Dentaurum", logo: "/logos/dentaurum.png", size: "h-20" },
    { name: "Henry Schein", logo: "/logos/henry-schein.png", size: "h-10" },
    { name: "CAP Dentaire", logo: "/logos/cap-dentaire.svg", size: "h-10" },
    { name: "Pul Concept", logo: "/logos/pul-concept.png", size: "h-10" },
    { name: "Scheu Dental", logo: "/logos/scheu-dental.svg", size: "h-10" },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F8FAFB]">
        <Navigation />

        <main className="flex-1 pt-28">
          {/* Hero */}
          <section className="px-6 md:px-12 pb-16">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-4">
                    Jessica Lerandy-Estevez, Fondatrice
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#1D5F75] mb-6">
                    Le Laboratoire
                  </h1>
                  <p className="text-lg text-[#3D5A6A] leading-relaxed mb-5">
                    Smile Up est un laboratoire dédié exclusivement à l&apos;orthodontie. Né d&apos;une véritable passion pour les appareils sur mesure et la précision du geste technique, le laboratoire s&apos;est construit autour d&apos;une idée simple : chaque dispositif compte dans la réussite d&apos;un traitement. Cette vision est portée par sa fondatrice, <strong className="text-[#1D5F75]">Jessica Lerandy Estevez</strong>, spécialisée en Orthopédie Dento-Faciale.
                  </p>
                  <p className="text-[#3D5A6A] leading-relaxed mb-5">
                    Implanté à Ingré, Smile Up conçoit et fabrique des orthèses personnalisées, en accordant une attention particulière au détail, au confort et à la fiabilité dans le temps. Chaque cas est abordé avec sérieux, comme une pièce unique qui doit s&apos;intégrer naturellement à votre façon de travailler et aux attentes de vos patients.
                  </p>
                  <p className="text-[#3D5A6A] leading-relaxed">
                    Le laboratoire s&apos;appuie sur des techniques éprouvées et des outils numériques modernes pour garantir une grande régularité de résultat, tout en restant à taille humaine. Cette combinaison d&apos;exigence, de proximité et de passion pour le métier permet à Smile Up de se positionner comme un partenaire engagé aux côtés des praticiens, plutôt qu&apos;un simple prestataire.
                  </p>
                </div>

                <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:mx-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#46aac9] to-[#1D5F75]">
                  <div className="w-full h-full flex items-center justify-center p-10">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">JE</span>
                      </div>
                      <div className="text-2xl font-semibold tracking-tight">Jessica Lerandy Estevez</div>
                      <div className="mt-3 text-lg text-white/90">Fondatrice de Smile Up</div>
                      <div className="mt-2 text-sm text-white/70">Orthésiste dentaire diplômée</div>
                      <div className="mt-6 inline-block bg-white/15 backdrop-blur-sm rounded-md px-4 py-2 text-sm text-white/90 border border-white/20">
                        Spécialisée ODF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valeurs */}
          <section className="px-6 md:px-12 py-14 bg-gradient-to-b from-[#46aac9]/5 to-[#F8FAFB]">
            <div className="mx-auto max-w-[1200px]">
              <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-3">
                Ce qui nous anime
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1D5F75] mb-3">
                Nos Valeurs
              </h2>
              <p className="text-[#3D5A6A] text-lg mb-10 max-w-2xl">
                Au-delà du savoir-faire, nous accordons une importance particulière à la relation de confiance avec chaque praticien.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-7 border border-[#46aac9]/15 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#46aac9] to-[#2A7A95] rounded-md flex items-center justify-center mb-4">
                    <Award className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D5F75] mb-2">Qualité</h3>
                  <p className="text-[#3D5A6A] leading-relaxed text-[15px]">
                    Des orthèses de qualité supérieure, conçues avec des matériaux haut de gamme, qui s&apos;adaptent parfaitement en bouche pour un gain de temps au fauteuil.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-7 border border-[#46aac9]/15 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#46aac9] to-[#2A7A95] rounded-md flex items-center justify-center mb-4">
                    <Shield className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D5F75] mb-2">Fiabilité</h3>
                  <p className="text-[#3D5A6A] leading-relaxed text-[15px]">
                    Une organisation optimisée qui nous permet de fabriquer et livrer vos orthèses dans les délais demandés, avec une constance irréprochable.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-7 border border-[#46aac9]/15 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#E8734A] to-[#d4623b] rounded-md flex items-center justify-center mb-4">
                    <Zap className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D5F75] mb-2">Réactivité</h3>
                  <p className="text-[#3D5A6A] leading-relaxed text-[15px]">
                    Un interlocuteur unique pour des échanges directs et personnalisés, afin de répondre à vos demandes rapidement et efficacement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Partenariat */}
          <section className="px-6 md:px-12 py-14">
            <div className="mx-auto max-w-[1200px]">
              <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-3">
                Collaboration
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1D5F75] mb-8">
                Un vrai partenariat au quotidien
              </h2>

              <div className="max-w-[800px]">
                <p className="text-lg text-[#3D5A6A] leading-relaxed mb-6">
                  Ce que les praticiens apprécient chez Smile Up :
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Un contact direct",
                    "Des échanges simples et rapides",
                    "Une écoute attentive",
                    "Un travail sans sous-traitance",
                    "Une adaptation aux besoins de chaque cabinet"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1D5F75]">
                      <span className="w-1.5 h-1.5 bg-[#46aac9] rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#46aac9]/8 rounded-lg p-5 border-l-3 border-[#E8734A] mb-8">
                  <p className="text-[#1D5F75] italic leading-relaxed">
                    &ldquo;Ici, chaque appareil est réalisé avec soin, et chaque demande est considérée comme unique.&rdquo;
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#46aac9] to-[#2A7A95] text-white px-7 py-3.5 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#46aac9]/25">
                  <span>Discutons de vos besoins</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* Nos Partenaires */}
          <section className="px-6 md:px-12 py-14 bg-gradient-to-b from-[#46aac9]/5 to-[#F8FAFB]">
            <div className="mx-auto max-w-[1200px]">
              <span className="inline-block text-[#E8734A] text-sm font-semibold uppercase tracking-widest mb-3">
                Fournisseurs & Partenaires
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1D5F75] mb-3">
                Nos Partenaires
              </h2>
              <p className="text-lg text-[#3D5A6A] max-w-2xl mb-10">
                Smile Up travaille exclusivement avec des fournisseurs reconnus pour la qualité et la fiabilité de leurs matériaux, garantissant des dispositifs à la hauteur des exigences cliniques.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-white rounded-lg border border-[#46aac9]/15 h-24 flex items-center justify-center px-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <img src={partner.logo} alt={partner.name} className={`${partner.size} w-auto object-contain`} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Contact */}
          <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-[#1D5F75] via-[#2A7A95] to-[#46aac9] relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,115,74,0.15),transparent_60%)]"></div>
            <div className="mx-auto max-w-[1200px] text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Travaillons ensemble
              </h2>
              <p className="text-lg text-white/80 max-w-[650px] mx-auto mb-10">
                Être à l&apos;écoute, anticiper les besoins, offrir une réactivité exemplaire : c&apos;est notre manière de transformer chaque collaboration en une expérience fluide, professionnelle et sereine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="mailto:smile.up045@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20">
                  <span>smile.up045@gmail.com</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md bg-[#E8734A] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#d4623b] hover:shadow-lg">
                  <span>Retour à l&apos;accueil</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
