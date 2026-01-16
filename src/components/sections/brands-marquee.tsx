import React from 'react';

const PRACTITIONER_TYPES = [
  { icon: "👨‍⚕️", title: "Orthodontistes", color: "bg-[#0EA5E9]" },
  { icon: "🦷", title: "Dentistes", color: "bg-[#10B981]" },
  { icon: "⚕️", title: "Chirurgiens-Dentistes", color: "bg-[#F0ABFC]" },
  { icon: "👨‍⚕️", title: "Orthodontistes", color: "bg-[#FF6644]" },
  { icon: "🦷", title: "Dentistes", color: "bg-[#0EA5E9]" },
  { icon: "⚕️", title: "Chirurgiens-Dentistes", color: "bg-[#10B981]" },
  { icon: "👨‍⚕️", title: "Orthodontistes", color: "bg-[#F0ABFC]" },
  { icon: "🦷", title: "Dentistes", color: "bg-[#FF6644]" },
];

const PractitionerTrack = () => (
  <div className="flex flex-none items-center gap-6 pl-6">
    {PRACTITIONER_TYPES.map((practitioner, index) => (
      <div
        key={index}
        className={`w-[220px] md:w-[264px] shrink-0 h-[140px] md:h-[160px] ${practitioner.color} text-white border border-white/20 rounded-2xl flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
      >
        <div className="text-5xl md:text-6xl mb-3">{practitioner.icon}</div>
        <div className="text-base md:text-lg font-medium text-center">{practitioner.title}</div>
      </div>
    ))}
  </div>
);

const BrandsMarquee = () => {
    return (
        <section className="bg-background py-16 md:py-24 overflow-hidden w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-[56px] font-medium tracking-[-0.06em] leading-none mb-6 md:mb-8 font-display">
                    Des praticiens qui me font confiance.
                </h2>
                <p className="text-base md:text-lg text-secondary-foreground max-w-[60ch] mb-12 md:mb-16">
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
