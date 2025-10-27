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
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    description: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    videoSrc: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    buttonText: "Meer over social strategie",
    buttonLink: "/expertises/social-strategie",
    cardClass: "bg-[#F4EFE6] text-black",
    buttonClass: "bg-[#FF6644] text-white hover:bg-brand-orange-dark",
    labelBgClass: "bg-white",
  },
  {
    id: "02",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    description: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    buttonText: "Meer over content creatie",
    buttonLink: "/expertises/content-creatie",
    cardClass: "bg-[#F0ABFC] text-black",
    buttonClass: "bg-white text-black hover:bg-gray-200",
    labelBgClass: "bg-white/90",
  },
  {
    id: "03",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    description: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    videoSrc: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    buttonText: "Meer over activatie",
    buttonLink: "/expertises/activatie",
    cardClass: "bg-[#10B981] text-black",
    buttonClass: "bg-white text-black hover:bg-gray-200",
    labelBgClass: "bg-white/90",
  },
  {
    id: "04",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    description: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    buttonText: "Meer over data",
    buttonLink: "/expertises/data",
    cardClass: "bg-[#0EA5E9] text-black",
    buttonClass: "bg-white text-black hover:bg-gray-200",
    labelBgClass: "bg-white/90",
  },
];

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
                    end: "+=100%",
                });
            });
        });
        
        return () => {
            mm.revert();
        };
    }, []);

    return (
      <section id="expertises" ref={componentRef} className="bg-background relative">
        {expertisesData.map((card) => (
            <div key={card.id} className="expertise-panel h-auto lg:h-screen w-full lg:p-8 relative">
              <div className={`h-full w-full rounded-none lg:rounded-[32px] p-8 lg:p-0 ${card.cardClass}`}>
                <div className="h-full w-full lg:p-8 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] gap-x-8 gap-y-8 lg:gap-y-0">
                  
                  <div className="lg:col-span-2 lg:row-start-1 flex justify-between items-start">
                    <div>
                      <div className={`${card.labelBgClass} text-sm font-medium leading-tight rounded-full px-4 py-1.5 inline-block mb-4`}>
                        Expertise
                      </div>
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.06em] leading-none">
                        {card.title}
                      </h2>
                    </div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.06em] leading-none text-black/10">
                      {card.id}
                    </div>
                  </div>

                  <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                    <div className="w-full h-full aspect-square lg:aspect-auto"> 
                      <video
                        className="w-full h-full object-cover rounded-3xl"
                        src={card.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                      ></video>
                    </div>
                  </div>

                  <div className="lg:col-start-1 lg:row-start-3 self-auto lg:self-end">
                    <h3 className="text-2xl font-medium tracking-[-0.04em] leading-[1.2] mb-4">
                      {card.subtitle}
                    </h3>
                    <p className="text-lg text-secondary-foreground/80 max-w-md mb-8">
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
        ))}
      </section>
    );
};

export default ExpertisesSection;