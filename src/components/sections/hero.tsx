import React from 'react';

// Image sources - Update these URLs when changing images
const HERO_IMAGES = {
  orthodonticDevice: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570089254-k4zcchufz1l.jpeg",
  modernLab: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761569985153-11q58kayx5t.png"
};

const StatCard = ({
  bgColor,
  stat,
  title,
  description,
  className






}: {bgColor: string;stat: string;title: string;description: string;className?: string;}) =>
<div
  className={`flex flex-col justify-between p-8 text-black rounded-[32px] min-h-[450px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer ${bgColor} ${className}`}>

    <div className="font-display font-medium tracking-tighter leading-none !text-[69px]">
      {stat}
    </div>
    <div className="mt-8">
      <h2 className="font-display font-medium text-2xl tracking-tight leading-tight">
        {title}
      </h2>
      <div className="h-px w-full bg-black my-3"></div>
      <p className="text-base font-body">{description}</p>
    </div>
  </div>;


const ImageCard = ({
  imageSrc,
  alt,
  className
}: {imageSrc: string;alt: string;className?: string;}) =>
<div
  className={`relative w-full rounded-[32px] overflow-hidden min-h-[450px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer ${className}`}>

    <img
    src={imageSrc}
    alt={alt}
    className="absolute top-0 left-0 w-full h-full object-cover" />

  </div>;


const Hero = () => {
  return (
    <header id="section_hero" className="bg-background">
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1440px] pt-32 pb-16 md:pb-24">
          <div className="w-full">
            <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] font-black leading-[1.0] tracking-[-0.06em]">
              Votre Laboratoire d'Orthodontie Exclusive.
            </h1>
            <div className="mt-6 max-w-[60ch]">
              <p className="text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em] !whitespace-pre-line !w-[682px] !h-full">Orthésiste dentaire diplômée, spécialisée en orthopédie 

              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              bgColor="bg-[#0EA5E9]"
              stat="100%"
              title="Orthodontie exclusive"
              description="Spécialisation complète en appareils orthodontiques" />

            <ImageCard
              imageSrc={HERO_IMAGES.orthodonticDevice}
              alt="Appareil orthodontique de précision"
              className="hidden lg:block" />

            <StatCard
              bgColor="bg-[#10B981]"
              stat="Enfants & Adultes"
              title="Pour tous les âges"
              description="Solutions adaptées à chaque patient" />

            <ImageCard
              imageSrc={HERO_IMAGES.modernLab}
              alt="Laboratoire orthodontique moderne"
              className="hidden lg:block" />

          </div>
        </div>
      </div>
    </header>);

};

export default Hero;