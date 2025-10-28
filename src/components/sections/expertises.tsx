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
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761572328771-wurtnxrwds.png",
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
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/88087eef-82ef-482e-809a-8809c1aa760a-1761572386927.png?width=8000&height=8000&resize=contain",
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
  title: "",
  subtitle: "Technologie de pointe pour vos patients.",
  description: "Gouttières thermoformées et appareils spécifiques réalisés avec précision. Solutions modernes et esthétiques pour un traitement orthodontique discret et efficace.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8A1B1AAB-82BF-4721-929A-E6D1ADCCE6A8-1761572496300.jpeg?width=8000&height=8000&resize=contain",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#10B981] text-black",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90",
  icon: "",
  imageClass: "thermoforming-image-container"
},
{
  id: "04",
  title: "",
  subtitle: "Innovation numérique au service de l'orthodontie.",
  description: "Conception et Fabrication Assistées par Ordinateur. Modélisation numérique 3D pour des appareils ultra-précis. La technologie de demain, disponible aujourd'hui pour vos patients.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_7183-1761572553570.jpeg?width=8000&height=8000&resize=contain",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#0EA5E9] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90 text-black",
  icon: "",
  imageClass: "cfao-modeling-image-container"
}];


const ExpertisesSection = () => {
  const componentRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(componentRef);

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".expertise-card");
      
      // Animate cards on scroll into view
      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            y: 100,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="expertises" ref={componentRef} className="bg-background relative w-full overflow-hidden py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block mb-4">
            Gamme professionnelle
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.06em] leading-none">
            Nos expertises
          </h2>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {expertisesData.map((card, index) => (
            <div
              key={card.id}
              className="expertise-card group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:z-10"
            >
              <div className={`${card.cardClass} h-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col relative overflow-hidden`}>
                {/* Card number overlay */}
                <div className="absolute top-6 right-6 text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.06em] leading-none opacity-10 z-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110">
                  {card.id}
                </div>

                {/* Image container with hover effect */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    id={`expertise-image-${card.id}`}
                    data-card-id={card.id}
                    className={`${card.imageClass} w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                    src={card.imageSrc}
                    alt={card.subtitle}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative z-20">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-[-0.04em] leading-[1.2] mb-3 transition-transform duration-500 group-hover:translate-x-2">
                      {card.subtitle}
                    </h3>
                    <p className="text-sm md:text-base opacity-90 mb-6 line-clamp-4 transition-opacity duration-500 group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>

                  <Link 
                    href={card.buttonLink} 
                    className={`inline-flex items-center gap-2 rounded-full text-sm md:text-base px-5 py-2.5 font-medium transition-all duration-300 ${card.buttonClass} group-hover:gap-4 self-start`}
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border-4 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;