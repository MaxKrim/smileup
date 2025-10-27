import React from 'react';

const StatCard = ({
  bgColor,
  stat,
  title,
  description,
  className,
}: {
  bgColor: string;
  stat: string;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`flex flex-col justify-between p-8 text-black rounded-[32px] min-h-[450px] ${bgColor} ${className}`}
  >
    <div className="font-display font-medium text-8xl tracking-tighter leading-none">
      {stat}
    </div>
    <div className="mt-8">
      <h2 className="font-display font-medium text-2xl tracking-tight leading-tight">
        {title}
      </h2>
      <div className="h-px w-full bg-black my-3"></div>
      <p className="text-base font-body">{description}</p>
    </div>
  </div>
);

const VideoCard = ({
  videoSrc,
  className,
}: {
  videoSrc: string;
  className?: string;
}) => (
  <div
    className={`relative w-full rounded-[32px] overflow-hidden min-h-[450px] ${className}`}
  >
    <video
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
);

const Hero = () => {
  return (
    <header id="section_hero" className="bg-background">
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1440px] pt-32 pb-16 md:pb-24">
          <div className="w-full">
            <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] font-black leading-[1.0] tracking-[-0.06em]">
              Get Hyped. Get Noticed. Get Results.
            </h1>
            <div className="mt-6 max-w-[60ch]">
              <p className="text-xl text-secondary-foreground leading-relaxed tracking-[-0.01em]">
                Klaar met gokken op content die niets oplevert?
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              bgColor="bg-[#0EA5E9]"
              stat="10M+"
              title="Organische views"
              description="Groei door slimme content"
            />
            <VideoCard
              videoSrc="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
              className="hidden lg:block"
            />
            <StatCard
              bgColor="bg-[#10B981]"
              stat="30+"
              title="Merken geholpen"
              description="Van start-up tot multinational"
            />
            <VideoCard
              videoSrc="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;