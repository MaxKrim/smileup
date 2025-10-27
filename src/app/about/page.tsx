import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ArrowRight, Award, Briefcase, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <Navigation />
        
        <main className="flex-1 pt-32">
          {/* Hero Section */}
          <section className="px-6 md:px-12 pb-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-[#0EA5E9] text-white text-sm font-medium leading-tight rounded-full px-4 py-1.5 mb-6">
                    Orthésiste dentaire diplômée
                  </div>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.0] tracking-[-0.06em] mb-6">
                    Qui suis-je ?
                  </h1>
                  <p className="text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em] mb-8 !whitespace-pre-line !whitespace-pre-line !w-[103%] !h-[52px]">{`Prothésiste dentaire diplômée, spécialisée en orthopédie dento-faciale. `}

                  </p>
                </div>
                
                <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 rounded-[32px] overflow-hidden bg-[#0EA5E9]">
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <div className="text-center text-white">
                      <div className="text-9xl mb-6">🦷</div>
                      <div className="font-display text-3xl font-bold tracking-tighter">Smile UP</div>
                      <div className="mt-4 text-xl opacity-90">Orthodontie Exclusive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mon Expertise Section */}
          <section className="px-6 md:px-12 py-24 bg-[#F4EFE6]">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-12">
                Mon Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-[24px] p-8">
                  <div className="w-12 h-12 bg-[#0EA5E9] rounded-full flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Spécialisation Exclusive</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Je me concentre exclusivement sur l'orthodontie. Pas de prothèses classiques comme les dentiers ou fausses dents, uniquement des appareils orthodontiques de haute précision.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-8">
                  <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Pour Tous les Âges</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    L'orthodontie touche tout le monde. Je travaille aussi bien pour des traitements destinés aux enfants qu'aux adultes, avec des solutions adaptées à chaque patient.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-8">
                  <div className="w-12 h-12 bg-[#FF6644] rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Partenariat Professionnel</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Je travaille uniquement avec des professionnels : orthodontistes, dentistes et chirurgiens-dentistes qui pratiquent l'orthodontie. Chaque appareil est réalisé sur prescription.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] p-8">
                  <div className="w-12 h-12 bg-[#E77EFF] rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">Précision & Qualité</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    Chaque appareil est réalisé avec précision selon vos prescriptions, pour des résultats optimaux. La qualité est au cœur de mon travail, quel que soit le type d'appareil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comment je travaille */}
          <section className="px-6 md:px-12 py-24">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-8">
                Comment je travaille
              </h2>
              
              <div className="max-w-[800px]">
                <p className="text-xl text-secondary-foreground leading-relaxed mb-6">
                  Mon travail consiste à fournir les appareils orthodontiques demandés par les praticiens. Vous me fournissez un bon de travail avec le nom du patient et le type d'appareil souhaité, et je me charge de la réalisation complète.
                </p>
                
                <p className="text-xl text-secondary-foreground leading-relaxed mb-6">
                  Je ne vends pas directement aux patients. Il faut toujours un intermédiaire professionnel : orthodontiste, dentiste, chirurgien-dentiste. Cette approche B2B garantit que chaque appareil est adapté à un diagnostic professionnel précis.
                </p>

                <p className="text-xl text-secondary-foreground leading-relaxed mb-8">
                  Je me déplace également dans votre cabinet pour faire un point sur vos besoins spécifiques, car chaque praticien a ses habitudes de travail et sa façon de faire qui lui est propre.
                </p>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0EA5E9] text-white px-8 py-4 text-base font-medium transition-transform hover:scale-105">

                  <span>Discutons de vos besoins</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* Gammes proposées */}
          <section className="px-6 md:px-12 py-24 bg-[#F4EFE6]">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-8">
                Les gammes que je propose
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#FF6644]">
                  <h3 className="font-display text-xl font-medium mb-2">🔒 Appareils Fixes</h3>
                  <p className="text-secondary-foreground">Scellés en bouche de manière permanente</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#E77EFF]">
                  <h3 className="font-display text-xl font-medium mb-2">🔄 Appareils Mobiles</h3>
                  <p className="text-secondary-foreground">Que le patient peut retirer et remettre</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#10B981]">
                  <h3 className="font-display text-xl font-medium mb-2">✨ Thermoformage</h3>
                  <p className="text-secondary-foreground">Gouttières et appareils spécifiques</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#0EA5E9]">
                  <h3 className="font-display text-xl font-medium mb-2">💻 CFAO</h3>
                  <p className="text-secondary-foreground">Modélisation numérique 3D de précision</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#FF6644]">
                  <h3 className="font-display text-xl font-medium mb-2">⚙️ Appareil PUL</h3>
                  <p className="text-secondary-foreground">Appareils très complexes haute technicité</p>
                </div>

                <div className="bg-white rounded-[24px] p-6 border-l-4 border-[#10B981]">
                  <h3 className="font-display text-xl font-medium mb-2">🎯 Appareils Fonctionnels</h3>
                  <p className="text-secondary-foreground">Mobiles demandant plus de travail</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-[24px] border-2 border-[#0EA5E9]">
                <p className="text-lg text-secondary-foreground">
                  <strong>+ Tout une gamme d'accessoires</strong> combinables avec tous les appareils que je propose. L'orthodontie est complexe et très mécanique, et la combinaison d'appareils est presque infinie.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="px-6 md:px-12 py-32" id="contact">
            <div className="mx-auto max-w-[1440px] text-center">
              <h2 className="font-display text-5xl md:text-7xl font-black tracking-[-0.06em] mb-8">
                Travaillons ensemble pour vos patients
              </h2>
              <p className="text-xl text-secondary-foreground max-w-[700px] mx-auto mb-12">
                Besoin d'appareils orthodontiques de qualité ? Discutons de vos besoins et de comment je peux vous accompagner dans vos traitements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="mailto:contact@smileup-ortho.fr"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-transparent px-8 py-4 text-base font-medium text-black transition-colors hover:bg-black hover:text-white">

                  <span>M'envoyer un email</span>
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
    </>);

}