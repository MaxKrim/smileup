import React from 'react';

const Hero = () => {
  return (
    <header id="section_hero" className="relative w-full overflow-hidden">
      {/* Fond dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-white to-[#F0F6F8]"></div>
      
      <div className="relative px-6 md:px-12 w-full">
        <div className="mx-auto max-w-7xl pt-28 md:pt-36 pb-12 md:pb-16 w-full">
          <div className="w-full">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-[#1D5F75] text-white text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">
                100% Fabriqué en France
              </span>
              <span className="bg-[#E8734A] text-white text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">
                Loiret (45)
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#1D5F75]">
              Votre Laboratoire<br />d&apos;Orthodontie Exclusive.
            </h1>
            <div className="mt-8 max-w-2xl">
              <p className="text-base md:text-lg text-[#3D5A6A] leading-relaxed">
                Prothésiste dentaire diplômée en 2011, spécialisée en orthopédie dento-faciale. Un parcours dédié à l&apos;orthodontie, porté par l&apos;exigence et l&apos;engagement autour du traitement.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Case 1 - Orthodontie */}
            <div className="flex flex-col justify-between p-6 md:p-7 text-white rounded-lg min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-[#46aac9] via-[#3A95B5] to-[#1D5F75]">
                <div>
                  <div className="font-display font-semibold tracking-tight leading-[1.1] text-2xl md:text-3xl lg:text-[2.2rem]">
                    Orthodontie<br />traditionnelle<br />et numérique
                </div>
              </div>
              <div className="mt-6">
                <div className="h-px w-full bg-white/20 mb-4"></div>
                <p className="text-sm text-white/80 leading-relaxed">Une pratique adaptée aux habitudes de travail et aux choix thérapeutiques de chaque cabinet.</p>
              </div>
            </div>

            {/* Case 2 - Photo labo */}
            <div className="relative w-full rounded-lg overflow-hidden min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570318948-74luo92m0o5.png"
                alt="Appareil orthodontique de précision"
                className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>

            {/* Case 3 - Disponibilité */}
            <div className="flex flex-col justify-between p-6 md:p-7 text-white rounded-lg min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-[#E8734A] via-[#D4633E] to-[#C05535]">
                <div>
                  <div className="font-display font-semibold tracking-tight leading-[1.1] text-2xl md:text-3xl lg:text-[2.2rem]">
                  Disponibilité<br />& échanges
                </div>
              </div>
              <div className="mt-6">
                <div className="h-px w-full bg-white/20 mb-4"></div>
                <p className="text-sm text-white/80 leading-relaxed">Un laboratoire accessible et disponible pour faciliter les échanges avec le cabinet.</p>
                <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-md px-4 py-3">
                  <p className="text-white font-medium text-sm tracking-wide">Lundi – Vendredi</p>
                  <p className="text-white/70 text-xs mt-0.5">8h00 / 18h00</p>
                </div>
              </div>
            </div>

            {/* Case 4 - Vidéo + Sans sous-traitance */}
            <div className="relative w-full rounded-lg overflow-hidden min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <video
                src="/videos/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="bg-white text-[#1D5F75] text-xs font-medium px-4 py-2 rounded-md inline-block tracking-wide uppercase">
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
