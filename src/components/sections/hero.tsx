import React from 'react';

const StatCard = ({
  bgColor,
  stat,
  title,
  description,
  className
}: {bgColor: string;stat: string;title: string;description: string;className?: string;}) =>
<div
  className={`flex flex-col justify-between p-5 md:p-6 text-black rounded-2xl md:rounded-[32px] min-h-[280px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden ${bgColor} ${className}`}>
    <div className="font-display font-medium tracking-tighter leading-none text-3xl md:text-4xl lg:text-5xl break-words">
      {stat}
    </div>
    <div className="mt-4 md:mt-6">
      <h2 className="font-display font-medium text-lg md:text-xl tracking-tight leading-tight">
        {title}
      </h2>
      <div className="h-px w-full bg-black my-2"></div>
      <p className="text-sm font-body line-clamp-3">{description}</p>
    </div>
  </div>;


const ImageCard = ({
  imageSrc,
  alt,
  className
}: {imageSrc: string;alt: string;className?: string;}) =>
<div
  className={`relative w-full rounded-2xl md:rounded-[32px] overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer ${className}`}>
    <img
    src={imageSrc}
    alt={alt}
    className="absolute top-0 left-0 w-full h-full object-cover" />
  </div>;


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
              Votre Laboratoire d'Orthodontie Exclusive.
            </h1>
            <div className="mt-6 max-w-full lg:max-w-[60ch]">
              <p className="text-base md:text-lg lg:text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em]">
                Orthésiste dentaire diplômée, spécialisée en orthopédie dento-faciale. Je réalise tous vos appareils avec précision et passion depuis plus de 13 ans.
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            <StatCard
              bgColor="bg-[#0EA5E9]"
              stat="+13 ans"
              title="D'expérience"
              description="Un savoir-faire construit avec rigueur et passion" />

            <ImageCard
              imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570318948-74luo92m0o5.png"
              alt="Appareil orthodontique de précision"
              className="hidden lg:block" />

            <StatCard
              bgColor="bg-[#10B981]"
              stat="Sans sous-traitance"
              title="Fabrication française"
              description="Chaque appareil est réalisé avec soin dans le Loiret" />

            <ImageCard
              imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761569985153-11q58kayx5t.png"
              alt="Laboratoire orthodontique moderne"
              className="hidden lg:block" />

          </div>
        </div>
      </div>
    </header>);

};

export default Hero;
