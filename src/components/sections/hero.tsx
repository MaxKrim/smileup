import React from 'react';

const Hero = () => {
  return (
    <header id="section_hero" className="bg-background w-full overflow-hidden">
      <div className="px-6 md:px-12 w-full">
        <div className="mx-auto max-w-7xl pt-28 md:pt-36 pb-16 md:pb-20 lg:pb-28 w-full">
          <div className="w-full">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-[#1B2A4A] text-white text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">
                100% Fabriqu&eacute; en France
              </span>
              <span className="border border-[#1B2A4A]/20 text-[#1B2A4A] text-xs font-medium px-4 py-1.5 rounded-md tracking-wide uppercase">
                Loiret (45)
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.03em] text-[#1B2A4A]">
              Votre Laboratoire<br />d&apos;Orthodontie Exclusive.
            </h1>
            <div className="mt-8 max-w-2xl">
              <p className="text-base md:text-lg text-[#3D4F6F] leading-relaxed">
                Proth&eacute;siste dentaire dipl&ocirc;m&eacute;e en 2011, sp&eacute;cialis&eacute;e en orthop&eacute;die dento-faciale. Un parcours d&eacute;di&eacute; &agrave; l&apos;orthodontie, port&eacute; par l&apos;exigence et l&apos;engagement autour du traitement.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Case 1 - Orthodontie */}
            <div className="flex flex-col justify-between p-6 md:p-7 text-white rounded-lg min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-lg bg-[#1B2A4A]">
              <div>
                <div className="font-display font-light tracking-tight leading-[1.1] text-2xl md:text-3xl lg:text-[2.2rem]">
                  Orthodontie<br />traditionnelle<br />et num&eacute;rique
                </div>
              </div>
              <div className="mt-6">
                <div className="h-px w-full bg-white/15 mb-4"></div>
                <p className="text-sm text-white/70 leading-relaxed">Une pratique adapt&eacute;e aux habitudes de travail et aux choix th&eacute;rapeutiques de chaque cabinet.</p>
              </div>
            </div>

            {/* Case 2 - Photo labo */}
            <div className="relative w-full rounded-lg overflow-hidden min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-lg">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570318948-74luo92m0o5.png"
                alt="Appareil orthodontique de pr&eacute;cision"
                className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>

            {/* Case 3 - Disponibilit&eacute; */}
            <div className="flex flex-col justify-between p-6 md:p-7 text-white rounded-lg min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-lg bg-[#2D4A7A]">
              <div>
                <div className="font-display font-light tracking-tight leading-[1.1] text-2xl md:text-3xl lg:text-[2.2rem]">
                  Disponibilit&eacute;<br />&amp; &eacute;changes
                </div>
              </div>
              <div className="mt-6">
                <div className="h-px w-full bg-white/15 mb-4"></div>
                <p className="text-sm text-white/70 leading-relaxed">Un laboratoire accessible et disponible pour faciliter les &eacute;changes avec le cabinet.</p>
                <div className="mt-4 bg-white/10 rounded-md px-4 py-3">
                  <p className="text-white font-medium text-sm tracking-wide">Lundi &ndash; Vendredi</p>
                  <p className="text-white/60 text-xs mt-0.5">8h00 / 18h00</p>
                </div>
              </div>
            </div>

            {/* Case 4 - Photo + Sans sous-traitance */}
            <div className="relative w-full rounded-lg overflow-hidden min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-300 hover:shadow-lg">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761569985153-11q58kayx5t.png"
                alt="Laboratoire orthodontique moderne"
                className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="bg-white text-[#1B2A4A] text-xs font-medium px-4 py-2 rounded-md inline-block tracking-wide uppercase">
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