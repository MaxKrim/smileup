"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Clock, Truck, MapPin, Cpu, Mail, Package, FileSearch, Wrench, CheckCircle } from 'lucide-react';

const Intro = () => {
  return (
    <section id="intro-home" className="bg-background text-foreground py-12 md:py-24 overflow-hidden !w-full !h-[2180px]">
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        
        {/* Bloc 3 - Texte principal */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 w-full">
          <div className="flex-1 max-w-3xl">
            <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block mb-4">
              Un laboratoire tourné vers l&apos;humain et l&apos;innovation
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[40px] leading-[1.1] font-medium -tracking-[0.06em] text-foreground mb-6">
              La technologie au service du sourire.
            </h2>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-[20px] leading-[1.5] -tracking-[0.01em] mb-4">
              Smile Up est un laboratoire pensé comme un partenaire de travail au quotidien, au service de chaque praticien avec sérieux, précision et une vraie passion pour le travail bien fait.
            </p>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-[18px] leading-[1.5] -tracking-[0.01em]">
              Derrière chaque dispositif, il y a un regard, une exigence et une expérience construite au fil des années. Les appareils conçus sont pensés pour être <strong>fiables</strong>, <strong>confortables</strong> et <strong>adaptés aux traitements</strong>, avec une exigence constante.
            </p>
            <p className="text-[#0EA5E9] font-medium text-lg mt-4 italic">
              La précision n&apos;est pas un concept : c&apos;est une habitude quotidienne.
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
        </div>

        {/* Bloc 5 - Laboratoire moderne + Chaîne de fonctionnement */}
        <div className="mt-16">
          <div className="bg-black text-white text-xs md:text-sm font-medium leading-tight rounded-full px-4 py-2 inline-block mb-4">
            Un laboratoire moderne, connecté et réactif
          </div>
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-foreground">
            De la commande à la livraison
          </h3>
          <p className="text-secondary-foreground mb-8 max-w-2xl">
            Smile Up s&apos;appuie sur les dernières technologies pour offrir un service fluide et efficace. L&apos;objectif : vous simplifier la vie et vous permettre d&apos;avancer sereinement dans vos plans de traitement.
          </p>

          {/* Chaîne de fonctionnement - 5 étapes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
            { step: "01", icon: Package, title: "Commande", desc: "Réception de votre prescription", color: "bg-[#0EA5E9]" },
            { step: "02", icon: Mail, title: "Réception", desc: "Empreintes numériques (STL) ou physiques", color: "bg-[#10B981]" },
            { step: "03", icon: FileSearch, title: "Vérification", desc: "Contrôle du dossier complet", color: "bg-[#FF6644]" },
            { step: "04", icon: Wrench, title: "Conception & Fabrication", desc: "CFAO, impression 3D, travail manuel", color: "bg-[#E77EFF]" },
            { step: "05", icon: CheckCircle, title: "Contrôle & Envoi", desc: "Vérification finale et expédition", color: "bg-[#6366F1]" }].
            map((item) =>
            <div key={item.step} className="relative group">
                <div className={`${item.color} rounded-2xl p-5 h-full min-h-[180px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                  <div>
                    <span className="text-black/10 font-display text-4xl font-bold absolute top-3 right-4">{item.step}</span>
                    <item.icon className="w-8 h-8 mb-3 text-white" />
                    <h4 className="font-display text-base font-bold leading-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{item.title}</h4>
                  </div>
                  <p className="text-sm font-semibold text-white/90 mt-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>{item.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bloc 6 - Compatibilité scanners */}
        <div className="mt-12 bg-[#F4EFE6] rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Intégration certifiée</span>
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-black mb-2">
                Compatible avec les leaders du marché
              </h4>
              <p className="text-secondary-foreground text-sm md:text-base">
                Réception directe de vos empreintes numériques depuis les systèmes les plus utilisés au monde.
              </p>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              {[
              { src: "/logos/3shape.svg", alt: "3Shape", hoverColor: "hover:border-[#00A3E0]/40" },
              { src: "/logos/itero.svg", alt: "iTero", hoverColor: "hover:border-[#6B2D5B]/40" },
              { src: "/logos/medit.svg", alt: "Medit", hoverColor: "hover:border-[#00B4D8]/40" },
              { src: "/logos/carestream.svg", alt: "Carestream Dental", hoverColor: "hover:border-[#F7941D]/40" }].
              map((logo) =>
              <div key={logo.alt} className={`group bg-white rounded-lg h-12 px-4 shadow-sm border border-black/5 hover:shadow-md ${logo.hoverColor} transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center`}>
                  <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />

                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-black/70">
              <svg className="w-5 h-5 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Envoyez vos fichiers STL directement depuis votre scanner — réception en temps réel.</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-black/70">
              <svg className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Pôle numérique : <a href="mailto:smile.up045@gmail.com" className="font-medium text-[#0EA5E9] hover:underline">smile.up045@gmail.com</a></span>
            </div>
          </div>
        </div>

        {/* Bloc 7 - Made in France + Bloc 8 - Délais */}
        <div className="mt-12 relative overflow-hidden rounded-3xl border border-black/10">
          <div className="absolute inset-0 bg-[#F4EFE6]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FF6644]/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
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
                  Chaque appareil est entièrement conçu et fabriqué dans notre laboratoire à <strong className="text-black">Ingré (45)</strong>, sans aucune sous-traitance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#0D8EFF] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#0D8EFF]/20">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-black font-bold text-xl block">Ingré (45)</span>
                    <p className="text-black/50 text-sm mt-1">Fabrication locale</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#10B981]/20">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-black font-bold text-xl block">0%</span>
                    <p className="text-black/50 text-sm mt-1">Sous-traitance</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#FF6644] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#FF6644]/20">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-black font-bold text-xl block">J+1</span>
                    <p className="text-black/50 text-sm mt-1">Livraison France métropolitaine</p>
                  </div>
                </div>
              </div>

              {/* Bloc 8 - Délais de fabrication complets */}
              <div className="lg:w-[340px] flex-shrink-0">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-black">Délais de fabrication</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                    { label: "Appareils fixes", delay: "7 à 10 jours", sub: "CFAO et traditionnel", color: "text-[#0EA5E9]" },
                    { label: "Appareils amovibles", delay: "7 à 10 jours", sub: "", color: "text-[#0EA5E9]" },
                    { label: "Appareils fonctionnels", delay: "≈ 15 jours", sub: "", color: "text-[#0EA5E9]" },
                    { label: "Thermoformés", delay: "10 jours", sub: "", color: "text-[#0EA5E9]" },
                    { label: "Contentions", delay: "3 à 5 jours", sub: "", color: "text-[#10B981]" },
                    { label: "PUL", delay: "15 à 20 jours", sub: "", color: "text-[#0EA5E9]" },
                    { label: "Réparations", delay: "3 à 5 jours", sub: "", color: "text-[#10B981]" },
                    { label: "Urgences", delay: "Prioritaire", sub: "Nous consulter", color: "text-[#FF6644]" }].
                    map((item, i) =>
                    <div key={i} className="flex items-center justify-between p-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-black/5">
                        <div>
                          <span className="text-xs font-medium text-black">{item.label}</span>
                          {item.sub && <span className="text-[10px] text-black/40 block">{item.sub}</span>}
                        </div>
                        <span className={`text-xs font-bold ${item.color}`}>{item.delay}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-[10px] text-black/40 mt-3 text-center">Livraison France métropolitaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Intro;