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
    subtitle: "Pr\u00e9cision et fiabilit\u00e9 scell\u00e9es",
    description: "Les appareils fixes sont con\u00e7us au laboratoire en associant orthodontie traditionnelle et conception num\u00e9rique.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761572328771-wurtnxrwds.png",
    buttonText: "En savoir plus",
    buttonLink: "#contact",
    badge: "Soudure laser"
  },
  {
    id: "02",
    title: "Appareils amovibles",
    subtitle: "Flexibilit\u00e9 et confort au quotidien",
    description: "Chaque appareil mobile est \u00e9labor\u00e9 \u00e0 partir de l\u2019indication, avec une attention particuli\u00e8re port\u00e9e \u00e0 la conception, aux finitions et \u00e0 l\u2019adaptation au patient.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/88087eef-82ef-482e-809a-8809c1aa760a-1761572386927.png?width=8000&height=8000&resize=contain",
    buttonText: "En savoir plus",
    buttonLink: "#contact",
    badge: "Personnalisable"
  },
  {
    id: "03",
    title: "Appareils fonctionnels",
    subtitle: "Guidage et r\u00e9\u00e9quilibrage",
    description: "La conception des appareils fonctionnels vise \u00e0 orienter les fonctions et la croissance, en coh\u00e9rence avec le diagnostic et le plan de traitement.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8A1B1AAB-82BF-4721-929A-E6D1ADCCE6A8-1761572496300.jpeg?width=8000&height=8000&resize=contain",
    buttonText: "En savoir plus",
    buttonLink: "#contact",
    badge: "Sur mesure"
  },
  {
    id: "04",
    title: "Propulseur Universal Light",
    subtitle: "Harmoniseur 4D",
    description: "La gamme P.U.L s\u2019appuie sur une approche th\u00e9rapeutique multidimensionnelle, permettant d\u2019agir simultan\u00e9ment sur les axes sagittal, transversal, vertical et fonctionnel.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_7183-1761572553570.jpeg?width=8000&height=8000&resize=contain",
    buttonText: "En savoir plus",
    buttonLink: "#contact",
    badge: "Configurations multiples"
  },
  {
    id: "05",
    title: "Appareils thermoform\u00e9s",
    subtitle: "Contention / \u00c9claircissement / Sport",
    description: "La technique du thermoformage permet la r\u00e9alisation d\u2019appareils aux usages vari\u00e9s, offrant une grande libert\u00e9 d\u2019association avec d\u2019autres approches orthodontiques.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e/visual-edit-uploads/1761570318948-74luo92m0o5.png",
    buttonText: "En savoir plus",
    buttonLink: "#contact",
    badge: "Thermoformage Biostar"
  }
];

const ExpertisesSection = () => {
  const componentRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(componentRef);

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".expertise-card");
      
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
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

    return () => { mm.revert(); };
  }, []);

  return (
    <section id="expertises" ref={componentRef} className="bg-background relative w-full overflow-hidden py-14 md:py-20">
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="mb-10 md:mb-14">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-[#46aac9]">
              Gamme professionnelle
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-[#5A7A8A]">
              / 100% Fabriqué en France
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-none text-[#1D5F75]">
            Nos expertises
          </h2>
            <p className="mt-5 text-[#3D5A6A] text-base md:text-lg max-w-2xl">
              Notre savoir-faire couvre toute la diversité des dispositifs orthodontiques, même les plus spécifiques.
            </p>
        </div>

        {/* First row: 3 cards */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertisesData.slice(0, 3).map((card) => (
            <ExpertiseCard key={card.id} card={card} />
          ))}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {expertisesData.slice(3).map((card) => (
            <ExpertiseCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ card }: { card: typeof expertisesData[0] }) => (
  <div className="expertise-card group relative rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
    <div className="bg-white border border-[#1D5F75]/8 h-full min-h-[480px] md:min-h-[500px] flex flex-col relative overflow-hidden rounded-lg">
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-[#1D5F75] text-white text-[11px] font-medium px-3 py-1 rounded-md tracking-wide uppercase">
          {card.badge}
        </span>
      </div>

      <div className="absolute top-4 right-5 text-5xl md:text-6xl font-light tracking-tight text-[#1D5F75]/5 z-10">
        {card.id}
      </div>

      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={card.imageSrc}
          alt={card.subtitle}
        />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-xs font-medium tracking-widest uppercase text-[#46aac9] mb-2">
            {card.title}
          </h3>
          <h4 className="text-lg md:text-xl font-light tracking-tight leading-[1.2] text-[#1D5F75] mb-4">
            {card.subtitle}
          </h4>
          <p className="text-sm text-[#5A7A8A] leading-relaxed line-clamp-4">
            {card.description}
          </p>
        </div>

        <Link 
          href={card.buttonLink} 
          className="inline-flex items-center gap-2 rounded-md text-sm px-5 py-2.5 font-medium transition-all duration-300 bg-[#1D5F75] text-white hover:bg-[#2D4A7A] self-start mt-5"
        >
          <span>En savoir plus</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  </div>
);

export default ExpertisesSection;