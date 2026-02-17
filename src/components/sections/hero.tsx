import React from 'react';

const Hero = () => {
  return (
    <header id="section_hero" className="bg-background w-full overflow-hidden">
      <div className="px-6 md:px-12 w-full">
        <div className="mx-auto max-w-7xl pt-24 md:pt-32 pb-12 md:pb-16 lg:pb-24 w-full">
          <div className="w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#0EA5E9] text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full">
                100% Fabriqué en France
              </span>
              <span className="bg-black text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full">
                Loiret (45)
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-[-0.04em]">
              Votre Laboratoire d&apos;Orthodontie Exclusive.
            </h1>
            <div className="mt-6 max-w-full lg:max-w-[60ch]">
              <p className="text-base md:text-lg lg:text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em]">
                Prothésiste dentaire diplômée en 2011, spécialisée en orthopédie dento-faciale. Un parcours dédié à l&apos;orthodontie, porté par l&apos;exigence et l&apos;engagement autour du traitement.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {/* Case 1 - Texte: Orthodontie traditionnelle et numérique */}
            <div className="flex flex-col justify-between p-5 md:p-6 text-white rounded-2xl md:rounded-[32px] min-h-[180px] md:min-h-[220px] lg:min-h-[250px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden bg-[#0EA5E9]">
              <div className="font-display font-medium tracking-tighter leading-none text-2xl md:text-3xl lg:text-4xl break-words">
                Orthodontie traditionnelle et numérique
              </div>
              <div className="mt-4 md:mt-6">
                <div className="h-px w-full bg-white/30 my-2"></div>
                <p className="text-sm font-body opacity-90">Une pratique adaptée aux habitudes de travail et aux choix thérapeutiques de chaque cabinet.</p>
              </div>
            </div>

            {/* Case 2 - Photo labo */}
            <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570318948-74luo92m0o5.png"
                alt="Appareil orthodontique de précision"
                className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>

            {/* Case 3 - Texte: Disponibilité et échanges + Horaires */}
            <div className="flex flex-col justify-between p-5 md:p-6 text-white rounded-2xl md:rounded-[32px] min-h-[280px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden bg-[#10B981]">
              <div className="font-display font-medium tracking-tighter leading-none text-2xl md:text-3xl lg:text-4xl break-words">
                Disponibilité et échanges
              </div>
              <div className="mt-4 md:mt-6">
                <div className="h-px w-full bg-white/30 my-2"></div>
                <p className="text-sm font-body opacity-90">Un laboratoire accessible et disponible pour faciliter les échanges avec le cabinet et assurer un suivi fluide des dossiers.</p>
                <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
                  <p className="text-white font-bold text-lg tracking-tight">Lundi – Vendredi</p>
                  <p className="text-white/90 text-sm">8h00 / 18h00</p>
                </div>
              </div>
            </div>

            {/* Case 4 - Photo + mention Sans sous-traitance */}
            <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761569985153-11q58kayx5t.png"
                alt="Laboratoire orthodontique moderne"
                className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full inline-block">
                  Sans sous-traitance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
