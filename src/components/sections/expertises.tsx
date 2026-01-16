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
  title: "Appareils fixes",
  subtitle: "Précision et fiabilité scellées.",
  description: "Au laboratoire Smile Up, nous maîtrisons l'ensemble des appareillages fixes utilisés en orthodontie : du Quad Helix aux arcs de Nance, en passant par les disjoncteurs, Goshgarian, grilles anti-langue, Pendulum de Hilgers, Bi-Helix ou mainteneurs d'espace. Nous réalisons chaque appareil sur bagues en utilisant une soudure laser de dernière génération, permettant une jonction nette, fiable et parfaitement contrôlée.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761572328771-wurtnxrwds.png",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#0EA5E9] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90 text-black",
  icon: "",
  imageClass: "fixed-device-image-container",
  badge: "Soudure laser"
},
{
  id: "02",
  title: "Appareils mobiles",
  subtitle: "Flexibilité et confort au quotidien.",
  description: "Smile Up réalise une palette complète de dispositifs amovibles : plaques de contention (Hawley, Vaugeois), systèmes d'expansion, appareils de désocclusion… Nos orthèses en résine sont entièrement personnalisables : couleurs vibrantes, effets pailletés, motifs et figurines intégrées. Chaque appareil peut être unique, pensé pour allier esthétique, confort et motivation du patient.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/88087eef-82ef-482e-809a-8809c1aa760a-1761572386927.png?width=8000&height=8000&resize=contain",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#FF6644] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90",
  icon: "",
  imageClass: "removable-device-image-container",
  badge: "Personnalisable"
},
{
  id: "03",
  title: "Appareils fonctionnels",
  subtitle: "Accompagner la croissance.",
  description: "Au sein de Smile Up, nous concevons une grande diversité d'appareils fonctionnels : activateur de Chabre, Lautrou, Klammt, PUL (Propulseur Universel Light), ELN, Bionator, pistes de Planas… Ces dispositifs sont réalisés sur mesure pour accompagner la croissance, guider les fonctions oro-faciales et soutenir les corrections orthodontiques fonctionnelles.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8A1B1AAB-82BF-4721-929A-E6D1ADCCE6A8-1761572496300.jpeg?width=8000&height=8000&resize=contain",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#10B981] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90",
  icon: "",
  imageClass: "thermoforming-image-container",
  badge: "Sur mesure"
},
{
  id: "04",
  title: "Gamme P.U.L 2",
  subtitle: "Innovation numérique au service de l'orthodontie.",
  description: "Le Propulseur Universel Light 2 représente l'aboutissement de notre expertise en conception 3D et fabrication de précision. Appareils ultra-précis réalisés avec les dernières technologies CFAO. Modélisation numérique 3D pour des résultats optimaux. La technologie de demain, disponible aujourd'hui pour vos patients.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_7183-1761572553570.jpeg?width=8000&height=8000&resize=contain",
  videoSrc: "",
  buttonText: "En savoir plus",
  buttonLink: "#contact",
  cardClass: "bg-[#E77EFF] text-white",
  buttonClass: "bg-white text-black hover:bg-gray-100",
  labelBgClass: "bg-white/90 text-black",
  icon: "",
  imageClass: "cfao-modeling-image-container",
  badge: "CFAO"
}];


const ExpertisesSection = () => {
  const componentRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(componentRef);

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".expertise-card");
      
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
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block">
              Gamme professionnelle
            </div>
            <div className="bg-[#0EA5E9] text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block">
              100% Fabriqué en France
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.06em] leading-none">
            Nos expertises
          </h2>
          <p className="mt-4 text-secondary-foreground text-base md:text-lg max-w-2xl">
            Notre savoir-faire couvre toute la diversité des dispositifs orthodontiques, même les plus spécifiques.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertisesData.map((card, index) => (
            <div
              key={card.id}
              className="expertise-card group relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:z-10"
            >
              <div className={`${card.cardClass} h-full min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex flex-col relative overflow-hidden`}>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.06em] leading-none opacity-10 z-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110">
                  {card.id}
                </div>

                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    id={`expertise-image-${card.id}`}
                    data-card-id={card.id}
                    className={`${card.imageClass} w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                    src={card.imageSrc}
                    alt={card.subtitle}
                  />
                </div>

                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between relative z-20">
                  <div>
                    <h3 className="text-base md:text-lg font-bold tracking-tight mb-1 opacity-80">
                      {card.title}
                    </h3>
                    <h4 className="text-lg md:text-xl font-medium tracking-[-0.04em] leading-[1.2] mb-3 transition-transform duration-500 group-hover:translate-x-2">
                      {card.subtitle}
                    </h4>
                    <p className="text-sm opacity-90 mb-4 line-clamp-4 transition-opacity duration-500 group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>

                  <Link 
                    href={card.buttonLink} 
                    className={`inline-flex items-center gap-2 rounded-full text-sm px-4 py-2 font-medium transition-all duration-300 ${card.buttonClass} group-hover:gap-3 self-start`}
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-4 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
