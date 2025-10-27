"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const expertisesData = [
{
  id: "01",
  title: "",
  subtitle: "Précision et fiabilité scellées.",
  description: "Appareils orthodontiques fixés de manière permanente en bouche. Conçus pour des corrections précises et continues, ils offrent un contrôle optimal des mouvements dentaires selon vos prescriptions.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761572157257-djj0abt6q6q.png",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#FF6644] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90 text-black",
  icon: "",
  imageClass: "fixed-device-image-container"
},
{
  id: "02",
  title: "",
  subtitle: "Flexibilité et confort au quotidien.",
  description: "Appareils amovibles que vos patients peuvent retirer et remettre eux-mêmes. Idéaux pour certaines corrections orthodontiques tout en offrant confort et facilité d'hygiène bucco-dentaire.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/expertise-02.png",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#F0ABFC] text-black",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90",
  icon: "",
  imageClass: "removable-device-image-container"
},
{
  id: "03",
  title: "Thermoformage",
  subtitle: "Technologie de pointe pour vos patients.",
  description: "Gouttières thermoformées et appareils spécifiques réalisés avec précision. Solutions modernes et esthétiques pour un traitement orthodontique discret et efficace.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/expertise-03.png",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#10B981] text-black",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90",
  icon: "✨",
  imageClass: "thermoforming-image-container"
},
{
  id: "04",
  title: "CFAO & Modélisation",
  subtitle: "Innovation numérique au service de l'orthodontie.",
  description: "Conception et Fabrication Assistées par Ordinateur. Modélisation numérique 3D pour des appareils ultra-précis. La technologie de demain, disponible aujourd'hui pour vos patients.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/expertise-04.png",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#0EA5E9] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90 text-black",
  icon: "💻",
  imageClass: "cfao-modeling-image-container"
}];


const ExpertisesSection = () => {
  const componentRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(componentRef);

    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".expertise-panel");
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "+=100%"
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="expertises" ref={componentRef} className="bg-background relative">
        {expertisesData.map((card) =>
      <div key={card.id} className="expertise-panel h-auto lg:h-screen w-full lg:p-8 relative">
              <div className={`h-full w-full rounded-none lg:rounded-[32px] p-8 lg:p-0 ${card.cardClass}`}>
                <div className="h-full w-full lg:p-8 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] gap-x-8 gap-y-8 lg:gap-y-0">
                  
                  <div className="lg:col-span-2 lg:row-start-1 flex justify-between items-start">
                    <div>
                      <div className={`${card.labelBgClass} text-sm font-medium leading-tight rounded-full px-4 py-1.5 inline-block mb-4`}>
                        Gamme professionnelle
                      </div>
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.06em] leading-none">
                        {card.title}
                      </h2>
                    </div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.06em] leading-none opacity-20">
                      {card.id}
                    </div>
                  </div>

                  <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                    <div className="w-full h-full aspect-square lg:aspect-auto rounded-3xl overflow-hidden relative">
                      <img
                  id={`expertise-image-${card.id}`}
                  data-card-id={card.id}
                  className={`${card.imageClass} w-full h-full object-cover`}
                  src={card.imageSrc}
                  alt={card.subtitle} />

                      {(card.icon || card.title) &&
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="text-center p-8">
                            {card.icon && <div className="text-9xl mb-4">{card.icon}</div>}
                            {card.title && <div className="text-2xl font-medium opacity-80">{card.title}</div>}
                          </div>
                        </div>
                }
                    </div>
                  </div>

                  <div className="lg:col-start-1 lg:row-start-3 self-auto lg:self-end">
                    <h3 className="text-2xl font-medium tracking-[-0.04em] leading-[1.2] mb-4">
                      {card.subtitle}
                    </h3>
                    <p className="text-lg opacity-90 max-w-md mb-8">
                      {card.description}
                    </p>
                    <Link href={card.buttonLink} className={`inline-flex items-center gap-3 rounded-full text-base px-6 py-3 font-medium transition-colors ${card.buttonClass}`}>
                        <span>{card.buttonText}</span>
                        <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
      )}
      </section>);

};

export default ExpertisesSection;