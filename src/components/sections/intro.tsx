"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Clock, Truck, MapPin, Mail, Package, FileSearch, Wrench, CheckCircle } from 'lucide-react';

const Intro = () => {
  return (
    <section id="intro-home" className="bg-white text-foreground py-14 md:py-20 overflow-hidden w-full">
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        
        {/* Bloc principal */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20 w-full">
          <div className="flex-1 max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A] mb-6 block">
              Un laboratoire tourné vers l&apos;humain et l&apos;innovation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#1D5F75] mb-8">
              La technologie au service du sourire.
            </h2>
            <p className="text-[#3D5A6A] text-base md:text-lg leading-relaxed mb-5">
              Smile Up est un laboratoire pensé comme un partenaire de travail au quotidien, au service de chaque praticien avec sérieux, précision et une vraie passion pour le travail bien fait.
            </p>
            <p className="text-[#3D5A6A] text-base md:text-[17px] leading-relaxed">
              Derrière chaque dispositif, il y a un regard, une exigence et une expérience construite au fil des années. Les appareils conçus sont pensés pour être <strong className="font-medium text-[#1D5F75]">fiables</strong>, <strong className="font-medium text-[#1D5F75]">confortables</strong> et <strong className="font-medium text-[#1D5F75]">adaptés aux traitements</strong>, avec une exigence constante.
            </p>
            <p className="text-[#46aac9] font-light text-lg mt-6 italic border-l-2 border-[#E8734A] pl-5">
              La précision n&apos;est pas un concept : c&apos;est une habitude quotidienne.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center py-3 px-7 bg-[#1D5F75] rounded-md overflow-hidden font-medium text-sm tracking-wide transition-all duration-300 text-white hover:bg-[#2A7A95] shadow-md hover:shadow-lg">
                <span className="flex items-center gap-2">
                  <span>En savoir plus sur Smile Up</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href="#expertises"
                className="group w-12 h-12 bg-[#E8734A] rounded-md flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#D4633E] transition-all duration-300"
                aria-label="Scroll to expertises">
                <ArrowDown className="text-white" size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Chaîne de fonctionnement */}
        <div className="mt-16 md:mt-20">
          <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A] mb-4 block">
            Un laboratoire moderne, connecté et réactif
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-[#1D5F75]">
            De la commande à la livraison
          </h3>
          <p className="text-[#3D5A6A] mb-8 max-w-2xl text-base">
            Smile Up s&apos;appuie sur les dernières technologies pour offrir un service fluide et efficace. L&apos;objectif : vous simplifier la vie et vous permettre d&apos;avancer sereinement dans vos plans de traitement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { step: "01", icon: Package, title: "Commande", desc: "Réception de votre prescription" },
              { step: "02", icon: Mail, title: "Réception", desc: "Empreintes numériques (STL) ou physiques" },
              { step: "03", icon: FileSearch, title: "Vérification", desc: "Contrôle du dossier complet" },
              { step: "04", icon: Wrench, title: "Conception & Fabrication", desc: "CFAO, impression 3D, travail manuel" },
              { step: "05", icon: CheckCircle, title: "Contrôle & Envoi", desc: "Vérification finale et expédition" }
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-white border border-[#46aac9]/15 rounded-lg p-5 h-full min-h-[150px] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#46aac9]/40 hover:-translate-y-0.5">
                  <div>
                    <span className="text-[#E8734A]/25 font-display text-3xl font-light absolute top-4 right-4">{item.step}</span>
                    <item.icon className="w-6 h-6 mb-4 text-[#46aac9]" strokeWidth={1.5} />
                    <h4 className="font-display text-sm font-medium leading-tight text-[#1D5F75]">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#5A7A8A] mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibilité scanners */}
        <div className="mt-12 bg-gradient-to-r from-[#E8F4F8] to-white border border-[#46aac9]/15 rounded-lg p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A] mb-3 block">
                Intégration certifiée
              </span>
              <h4 className="font-display text-xl md:text-2xl font-semibold text-[#1D5F75] mb-2">
                Compatible avec les leaders du marché
              </h4>
              <p className="text-[#5A7A8A] text-sm md:text-base">
                Réception directe de vos empreintes numériques depuis les principales solutions de scan intraoral.
              </p>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { src: "/logos/itero.webp", alt: "iTero", size: "h-7" },
                { src: "/logos/3shape.png", alt: "3Shape", size: "h-7" },
                { src: "/logos/medit.png", alt: "Medit", size: "h-12" },
                { src: "/logos/carestream.webp", alt: "Carestream Dental", size: "h-12" },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white rounded-md h-14 px-5 border border-[#46aac9]/10 flex items-center justify-center transition-all duration-300 hover:border-[#46aac9]/30 hover:shadow-sm">
                  <img src={logo.src} alt={logo.alt} className={`${logo.size} w-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-5 border-t border-[#46aac9]/15 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#3D5A6A]">
              <CheckCircle className="w-4 h-4 text-[#46aac9] flex-shrink-0" strokeWidth={1.5} />
              <span>Envoyez vos fichiers STL directement depuis votre scanner — réception en temps réel.</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#3D5A6A]">
              <Mail className="w-4 h-4 text-[#46aac9] flex-shrink-0" strokeWidth={1.5} />
              <span>Pôle numérique : <a href="mailto:smile.up045@gmail.com" className="font-medium text-[#1D5F75] hover:text-[#E8734A] transition-colors">smile.up045@gmail.com</a></span>
            </div>
          </div>
        </div>

        {/* Made in France + Délais */}
        <div className="mt-12 relative rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #46aac9 0%, #1D5F75 60%, #E8734A 100%)' }}>
          <div className="absolute inset-0 bg-white/80 backdrop-blur-xl"></div>
          <div className="relative p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-5 bg-[#002395] rounded-sm"></div>
                    <div className="w-1.5 h-5 bg-white border border-gray-200 rounded-sm"></div>
                    <div className="w-1.5 h-5 bg-[#ED2939] rounded-sm"></div>
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#1D5F75]">
                    Origine France Garantie
                  </span>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1D5F75] mb-5 leading-tight">
                  100% Fabriqué<br />en France
                </h3>
                
                <p className="text-[#3D5A6A] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                  Chaque appareil est entièrement conçu et fabriqué dans notre laboratoire à <strong className="font-medium text-[#1D5F75]">Ingré (45)</strong>, sans aucune sous-traitance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm border border-white/70 rounded-lg p-5 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#E8734A] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1D5F75] font-medium text-lg block">Ingré (45)</span>
                    <p className="text-[#5A7A8A] text-xs mt-1">Fabrication locale</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm border border-white/70 rounded-lg p-5 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-[#46aac9] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1D5F75] font-medium text-lg block">0%</span>
                    <p className="text-[#5A7A8A] text-xs mt-1">Sous-traitance</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm border border-white/70 rounded-lg p-5 shadow-sm">
                    <Truck className="w-5 h-5 text-[#46aac9] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1D5F75] font-medium text-lg block">J+1</span>
                    <p className="text-[#5A7A8A] text-xs mt-1">Livraison France métropolitaine</p>
                  </div>
                </div>
              </div>

              {/* Délais */}
              <div className="lg:w-[340px] flex-shrink-0">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/70 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-5 h-5 text-[#E8734A]" strokeWidth={1.5} />
                    <h4 className="font-display text-base font-medium text-[#1D5F75]">Délais de fabrication</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { label: "Appareils fixes", delay: "7 à 10 jours", sub: "CFAO et traditionnel" },
                      { label: "Appareils amovibles", delay: "7 à 10 jours", sub: "" },
                      { label: "Appareils fonctionnels", delay: "~ 15 jours", sub: "" },
                      { label: "Thermoformés", delay: "10 jours", sub: "" },
                      { label: "Contentions", delay: "3 à 5 jours", sub: "" },
                      { label: "PUL", delay: "15 à 20 jours", sub: "" },
                      { label: "Réparations", delay: "3 à 5 jours", sub: "" },
                      { label: "Urgences", delay: "Prioritaire", sub: "Nous consulter", accent: true }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/70 backdrop-blur-sm rounded-md border border-white/80">
                        <div>
                          <span className="text-xs font-medium text-[#1D5F75]">{item.label}</span>
                          {item.sub && <span className="text-[10px] text-[#5A7A8A] block mt-0.5">{item.sub}</span>}
                        </div>
                        <span className={`text-xs font-medium ${item.accent ? 'text-[#E8734A]' : 'text-[#46aac9]'}`}>{item.delay}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[10px] text-[#5A7A8A] mt-4 text-center">Livraison France métropolitaine</p>
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
