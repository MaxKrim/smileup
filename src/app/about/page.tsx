import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ArrowRight, Award, Briefcase, Users, Sparkles, Heart, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <Navigation />
        
        <main className="flex-1 pt-32">
          <section className="px-6 md:px-12 pb-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-[#0EA5E9] text-white text-sm font-medium leading-tight rounded-full px-4 py-1.5 mb-6">
                    Orthésiste dentaire spécialisée
                  </div>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.0] tracking-[-0.06em] mb-6">
                    Qui suis-je ?
                  </h1>
                  <p className="text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em] mb-6">
                    Je suis <strong>Jessica Lerandy Estevez</strong>, fondatrice du laboratoire Smile Up et orthésiste dentaire spécialisée en orthopédie dento-faciale depuis plus de <strong>13 ans</strong>.
                  </p>
                  <p className="text-lg text-secondary-foreground leading-relaxed mb-6">
                    Mon parcours s'est construit au fil d'exigences élevées, d'un sens aigu du détail et d'une volonté constante d'offrir un niveau de qualité irréprochable.
                  </p>
                  <p className="text-lg text-secondary-foreground leading-relaxed mb-8">
                    Avec Smile Up, j'ai souhaité créer un laboratoire où précision technique et élégance du geste se rencontrent. Chaque appareil est conçu avec une approche artisanale moderne, alliant rigueur, esthétisme et innovation.
                  </p>
                </div>
                
                <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]">
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <div className="text-center text-white">
                      <div className="text-9xl mb-6">👩‍⚕️</div>
                      <div className="font-display text-3xl font-bold tracking-tighter">Jessica Lerandy Estevez</div>
                      <div className="mt-4 text-xl opacity-90">Fondatrice de Smile Up</div>
                      <div className="mt-2 text-sm opacity-75">Orthésiste dentaire diplômée</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-12 py-24 bg-[#F4EFE6]">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-4">
                Mes Valeurs
              </h2>
              <p className="text-secondary-foreground text-lg mb-12 max-w-2xl">
                Au-delà du savoir-faire, j'accorde une importance particulière à la relation de confiance avec chaque praticien.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-[24px] p-8 border-t-4 border-[#0EA5E9]">
                  <div className="w-12 h-12 bg-[#0EA5E9] rounded-full flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Qualité</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Des orthèses de qualité supérieure, conçues avec des matériaux haut de gamme, qui s'adaptent parfaitement en bouche pour un gain de temps au fauteuil.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-8 border-t-4 border-[#10B981]">
                  <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Fiabilité</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Une organisation optimisée qui nous permet de fabriquer et livrer vos orthèses dans les délais demandés, avec une constance irréprochable.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-8 border-t-4 border-[#FF6644]">
                  <div className="w-12 h-12 bg-[#FF6644] rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Réactivité</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Un interlocuteur unique pour des échanges directs et personnalisés, afin de répondre à vos demandes rapidement et efficacement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-12 py-24">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-8">
                Un vrai partenariat au quotidien
              </h2>
              
              <div className="max-w-[800px]">
                <p className="text-xl text-secondary-foreground leading-relaxed mb-6">
                  Ce que les praticiens apprécient chez Smile Up :
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Un contact direct",
                    "Des échanges simples et rapides",
                    "Une écoute attentive",
                    "Un travail sans sous-traitance",
                    "Une adaptation aux besoins de chaque cabinet"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <span className="w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#0EA5E9]/10 rounded-2xl p-6 border-l-4 border-[#0EA5E9] mb-8">
                  <p className="text-lg text-secondary-foreground italic">
                    "Ici, chaque appareil est réalisé avec soin, et chaque demande est considérée comme unique."
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0EA5E9] text-white px-8 py-4 text-base font-medium transition-transform hover:scale-105">
                  <span>Discutons de vos besoins</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-12 py-24 bg-[#F4EFE6]">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-4">
                Notre philosophie
              </h2>
              <p className="text-xl text-secondary-foreground max-w-3xl mb-12">
                Créer un laboratoire où la technique, l'innovation et l'humain avancent ensemble.
                Un lieu où la précision rencontre la créativité, et où chaque collaboration devient un vrai partenariat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#0EA5E9]">
                  <h3 className="font-display text-xl font-medium mb-2">🔒 Appareils Fixes</h3>
                  <p className="text-secondary-foreground">Du Quad Helix aux mainteneurs d'espace, soudure laser de dernière génération</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#FF6644]">
                  <h3 className="font-display text-xl font-medium mb-2">🔄 Appareils Amovibles</h3>
                  <p className="text-secondary-foreground">Plaques Hawley, Vaugeois, systèmes d'expansion - entièrement personnalisables</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#10B981]">
                  <h3 className="font-display text-xl font-medium mb-2">⚙️ Appareils Fonctionnels</h3>
                  <p className="text-secondary-foreground">Chabre, Lautrou, Klammt, PUL, ELN, Bionator, pistes de Planas...</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#E77EFF]">
                  <h3 className="font-display text-xl font-medium mb-2">💫 Gamme P.U.L 2</h3>
                  <p className="text-secondary-foreground">Propulseur Universel Light 2 - notre expertise en conception 3D</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#0EA5E9]">
                  <h3 className="font-display text-xl font-medium mb-2">💻 CFAO</h3>
                  <p className="text-secondary-foreground">Bagues sur mesure entièrement modélisées et fabriquées</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#10B981]">
                  <h3 className="font-display text-xl font-medium mb-2">✨ Thermoformage</h3>
                  <p className="text-secondary-foreground">Gouttières et appareils spécifiques haute précision</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-[24px] border-2 border-[#0EA5E9]">
                <p className="text-lg text-secondary-foreground">
                  <strong>Smile Up reflète ce qui m'anime depuis toujours :</strong> l'excellence, la précision et le désir de contribuer à des sourires qui inspirent confiance.
                </p>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-12 py-32" id="contact">
            <div className="mx-auto max-w-[1440px] text-center">
              <h2 className="font-display text-5xl md:text-7xl font-black tracking-[-0.06em] mb-8">
                Travaillons ensemble
              </h2>
              <p className="text-xl text-secondary-foreground max-w-[700px] mx-auto mb-12">
                Être à l'écoute, anticiper les besoins, offrir une réactivité exemplaire : c'est ma manière de transformer chaque collaboration en une expérience fluide, professionnelle et sereine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="mailto:smile.up045@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-transparent px-8 py-4 text-base font-medium text-black transition-colors hover:bg-black hover:text-white">
                  <span>smile.up045@gmail.com</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0EA5E9] px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105">
                  <span>Retour à l'accueil</span>
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
