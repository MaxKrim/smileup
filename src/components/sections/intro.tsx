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

        <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002395] via-[#002395] to-[#ED2939]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-[#002395]"></div>
            <div className="absolute top-0 left-1/3 w-1/3 h-full bg-white"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ED2939]"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-8 bg-[#002395] rounded-sm"></div>
                    <div className="w-3 h-8 bg-white rounded-sm"></div>
                    <div className="w-3 h-8 bg-[#ED2939] rounded-sm"></div>
                  </div>
                  <span className="bg-white text-[#002395] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Origine France Garantie
                  </span>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  100% Fabriqué<br />en France
                </h3>
                
                <p className="text-white/90 text-lg md:text-xl mb-6 max-w-xl">
                  Chaque appareil est entièrement conçu et fabriqué dans notre laboratoire du <strong className="text-white">Loiret (45)</strong>, sans aucune sous-traitance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#002395]" />
                      </div>
                      <span className="text-white font-bold text-lg">Loiret (45)</span>
                    </div>
                    <p className="text-white/80 text-sm">Fabrication locale</p>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#002395]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          <path d="M9 12l2 2 4-4"/>
                        </svg>
                      </div>
                      <span className="text-white font-bold text-lg">0%</span>
                    </div>
                    <p className="text-white/80 text-sm">Sous-traitance</p>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-[#002395]" />
                      </div>
                      <span className="text-white font-bold text-lg">5-10j</span>
                    </div>
                    <p className="text-white/80 text-sm">Livraison France</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[320px] flex-shrink-0">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#002395] to-[#ED2939] rounded-full mb-3">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h4 className="font-display text-xl font-bold text-gray-900">Délais de livraison</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Appareils simples</span>
                      </div>
                      <span className="text-sm font-bold text-[#002395]">5-7 jours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Appareils complexes</span>
                      </div>
                      <span className="text-sm font-bold text-[#002395]">7-10 jours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FF6644] rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Urgences</span>
                      </div>
                      <span className="text-sm font-bold text-[#002395]">Nous consulter</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500">Livraison partout en France métropolitaine</p>
                  </div>
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
