"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Clock, Truck, MapPin, Cpu } from 'lucide-react';

const badges = [
  {
    icon: Clock,
    stat: "+13 ans",
    label: "d'expérience",
    bgColor: "bg-[#0EA5E9]"
  },
  {
    icon: Truck,
    stat: "Livraison",
    label: "partout en France",
    bgColor: "bg-[#10B981]"
  },
  {
    icon: MapPin,
    stat: "Fabrication",
    label: "française (sans sous-traitance) - Loiret (45)",
    bgColor: "bg-[#FF6644]"
  },
  {
    icon: Cpu,
    stat: "Conception 3D",
    label: "et fusion laser pour bagues anatomiques",
    bgColor: "bg-[#E77EFF]"
  }
];

const Intro = () => {
  return (
    <section id="intro-home" className="bg-background text-foreground py-12 md:py-24 w-full overflow-hidden">
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 w-full">
          <div className="flex-1 max-w-3xl">
            <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block mb-4">
              Un laboratoire tourné vers l'humain et l'innovation
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[40px] leading-[1.1] font-medium -tracking-[0.06em] text-foreground mb-6">
              La technologie au service du sourire.
            </h2>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-[20px] leading-[1.5] -tracking-[0.01em] mb-4">
              Chez Smile Up, nous mettons la technologie au service du sourire—au sens propre.
              Spécialisé en orthodontie et en orthopédie dentofaciale, le laboratoire accompagne chaque praticien avec sérieux, précision et une vraie passion pour le travail bien fait.
            </p>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-[18px] leading-[1.5] -tracking-[0.01em]">
              Avec plus de 13 ans d'expérience, je conçois et fabrique vos appareils avec une attention particulière au détail.
              Chaque dispositif est pensé pour être <strong>fiable</strong>, <strong>confortable</strong>, <strong>adapté au traitement</strong>, et réalisé avec une exigence constante.
            </p>
            <p className="text-[#0EA5E9] font-medium text-lg mt-4 italic">
              La précision n'est pas un concept : c'est une habitude quotidienne.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center py-[14px] px-[30px] border-2 border-black rounded-full overflow-hidden font-medium text-sm md:text-base leading-snug">
                <span className="absolute inset-0 w-full h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out origin-bottom z-0"></span>
                <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300 ease-in-out">
                  <span className="whitespace-nowrap">En savoir plus sur mon parcours</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href="#expertises"
                className="group relative w-14 h-14 bg-black rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Scroll to expertises">
                <div className="absolute inset-0 flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-14">
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <ArrowDown className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <ArrowDown className="text-white" size={24} strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden bg-[#0EA5E9] p-6 text-white">
              <div className="text-5xl mb-3 text-center">🦷</div>
              <div className="font-display text-lg font-medium text-center">Laboratoire d'Orthodontie</div>
              <div className="mt-2 text-sm opacity-90 text-center">Spécialisé en orthopédie dento-faciale</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`${badge.bgColor} rounded-2xl p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <badge.icon className="w-8 h-8 mb-4 opacity-90" />
              <div className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                {badge.stat}
              </div>
              <div className="text-sm md:text-base opacity-90 mt-1">
                {badge.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F4EFE6] rounded-2xl p-6 md:p-10">
          <h3 className="font-display text-xl md:text-2xl font-medium mb-4 text-black">
            Un laboratoire moderne, connecté et réactif
          </h3>
          <p className="text-secondary-foreground mb-6">
            Smile Up s'appuie sur les dernières technologies pour offrir un service fluide et efficace.
            L'objectif : vous simplifier la vie et vous permettre d'avancer sereinement dans vos plans de traitement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              "Réception des empreintes numériques (STL)",
              "Conception 3D",
              "Impression 3D haute précision",
              "Logiciels CFAO dernière génération",
              "Connexions directes avec les principaux systèmes"
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl px-3 py-3 text-xs md:text-sm font-medium text-center shadow-sm">
                {item}
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-black/10">
            <p className="text-sm text-secondary-foreground mb-4">Compatible avec les principaux systèmes :</p>
            <div className="flex flex-wrap gap-3 items-center">
              {["3Shape", "iTero", "Medit", "Carestream"].map((brand, i) => (
                <div key={i} className="bg-white rounded-lg px-4 py-2 text-sm font-semibold text-[#0EA5E9] shadow-sm border border-[#0EA5E9]/20">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 relative overflow-hidden rounded-3xl border border-black/10">
          <div className="absolute inset-0 bg-[#F4EFE6]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FF6644]/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-6 bg-[#002395] rounded-sm"></div>
                    <div className="w-2 h-6 bg-white border-y border-black/10 rounded-sm"></div>
                    <div className="w-2 h-6 bg-[#ED2939] rounded-sm"></div>
                  </div>
                  <span className="bg-white/70 backdrop-blur-sm text-black text-xs md:text-sm font-bold px-4 py-2 rounded-full border border-black/10">
                    Origine France Garantie
                  </span>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                  100% Fabriqué<br />en France
                </h3>
                
                <p className="text-black/70 text-lg md:text-xl mb-8 max-w-xl">
                  Chaque appareil est entièrement conçu et fabriqué dans notre laboratoire du <strong className="text-black">Loiret (45)</strong>, sans aucune sous-traitance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#0D8EFF] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#0D8EFF]/20">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-black font-bold text-xl block">Loiret (45)</span>
                    <p className="text-black/50 text-sm mt-1">Fabrication locale</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#10B981]/20">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12l2 2 4-4"/>
                      </svg>
                    </div>
                    <span className="text-black font-bold text-xl block">0%</span>
                    <p className="text-black/50 text-sm mt-1">Sous-traitance</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#FF6644] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#FF6644]/20">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-black font-bold text-xl block">5-10 jours</span>
                    <p className="text-black/50 text-sm mt-1">Livraison France</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[300px] flex-shrink-0">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-black">Délais de livraison</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/5">
                      <span className="text-sm font-medium text-black">Appareils simples</span>
                      <span className="text-sm font-bold text-[#0D8EFF]">5-7 jours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/5">
                      <span className="text-sm font-medium text-black">Appareils complexes</span>
                      <span className="text-sm font-bold text-[#0D8EFF]">7-10 jours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-black/5">
                      <span className="text-sm font-medium text-black">Urgences</span>
                      <span className="text-sm font-bold text-[#FF6644]">Nous consulter</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-black/50 mt-4 text-center">Livraison France métropolitaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
