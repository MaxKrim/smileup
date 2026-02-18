import React from 'react';

const PRACTITIONER_TYPES = [
  { title: "Orthodontistes", abbr: "ODF" },
  { title: "Dentistes", abbr: "DDS" },
  { title: "Chirurgiens-Dentistes", abbr: "CD" },
  { title: "Orthodontistes", abbr: "ODF" },
  { title: "Dentistes", abbr: "DDS" },
  { title: "Chirurgiens-Dentistes", abbr: "CD" },
  { title: "Orthodontistes", abbr: "ODF" },
  { title: "Dentistes", abbr: "DDS" },
];

const PractitionerTrack = () => (
  <div className="flex flex-none items-center gap-4 pl-4">
    {PRACTITIONER_TYPES.map((practitioner, index) => (
      <div
        key={index}
        className="w-[200px] md:w-[240px] shrink-0 h-[100px] md:h-[110px] bg-white border border-[#1B2A4A]/8 text-[#1B2A4A] rounded-lg flex flex-col items-center justify-center p-5 transition-all duration-300 hover:border-[#C5A572]/30 hover:shadow-sm"
      >
        <div className="text-xs font-medium tracking-widest uppercase text-[#C5A572] mb-2">{practitioner.abbr}</div>
        <div className="text-sm md:text-base font-medium text-center text-[#1B2A4A]">{practitioner.title}</div>
      </div>
    ))}
  </div>
);

const BrandsMarquee = () => {
    return (
          <section className="bg-background py-14 md:py-20 overflow-hidden w-full">
            <style>
                {`
                    @keyframes marquee {
                      0% { transform: translateX(0%); }
                      100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                      animation: marquee 40s linear infinite;
                    }
                `}
            </style>
            <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
                <span className="text-xs font-medium tracking-widest uppercase text-[#C5A572] mb-4 block">Confiance</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-none mb-5 font-display text-[#1B2A4A]">
                    Des praticiens qui me font confiance.
                </h2>
                <p className="text-base md:text-lg text-[#3D4F6F] max-w-2xl mb-10">
                    Je travaille avec des orthodontistes, dentistes et chirurgiens-dentistes exigeants qui recherchent une qualité de travail irréprochable et un partenaire fiable pour leurs patients.
                </p>
            </div>
            
            <div className="flex animate-marquee">
                <PractitionerTrack />
                <PractitionerTrack />
            </div>
        </section>
    );
};

export default BrandsMarquee;