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
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 gap-y-12 lg:gap-y-8 w-full">
          <div className="lg:col-span-7 w-full">
            <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block mb-4">
              Un laboratoire tourné vers l'humain et l'innovation
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[40px] leading-[1.1] font-medium -tracking-[0.06em] text-foreground">
              La technologie au service du sourire.
            </h2>
          </div>

          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-1">
            <div className="relative aspect-[400/486] w-full max-w-[400px] mx-auto lg:mx-0 rounded-[24px] overflow-hidden bg-[#0EA5E9]">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🦷</div>
                  <div className="font-display text-xl font-medium">Laboratoire d'Orthodontie</div>
                  <div className="mt-2 text-sm opacity-90">Spécialisé en orthopédie dento-faciale</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:row-start-2">
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
            <div className="mt-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center py-[14px] px-[30px] border-2 border-black rounded-full overflow-hidden font-medium text-sm md:text-base leading-snug">
                <span className="absolute inset-0 w-full h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out origin-bottom z-0"></span>
                <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300 ease-in-out">
                  <span className="whitespace-nowrap">En savoir plus sur mon parcours</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex lg:col-start-12 lg:row-start-2 justify-self-end self-end mt-8 lg:mt-0">
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

        <div className="mt-12 bg-[#10B981] rounded-2xl p-6 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-medium mb-2">
                Livraison partout en France
              </h3>
              <p className="text-white/90">
                Vos appareils sont livrés directement dans votre cabinet, partout en France métropolitaine.
              </p>
            </div>
            <div className="bg-white/20 rounded-xl p-5 md:p-6 md:min-w-[280px]">
              <p className="font-medium text-lg mb-2">Délais de livraison</p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Appareils simples : 5-7 jours ouvrés</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Appareils complexes : 7-10 jours ouvrés</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Urgences : nous consulter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
