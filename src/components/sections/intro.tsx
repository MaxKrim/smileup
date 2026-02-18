"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Clock, Truck, MapPin, Mail, Package, FileSearch, Wrench, CheckCircle } from 'lucide-react';

const Intro = () => {
  return (
    <section id="intro-home" className="bg-background text-foreground py-20 md:py-32 overflow-hidden w-full">
      <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
        
        {/* Bloc 3 - Texte principal */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20 w-full">
          <div className="flex-1 max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[#C5A572] mb-6 block">
              Un laboratoire tourn&eacute; vers l&apos;humain et l&apos;innovation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] leading-[1.1] font-light tracking-[-0.03em] text-[#1B2A4A] mb-8">
              La technologie au service du sourire.
            </h2>
            <p className="text-[#3D4F6F] text-base md:text-lg leading-relaxed mb-5">
              Smile Up est un laboratoire pens&eacute; comme un partenaire de travail au quotidien, au service de chaque praticien avec s&eacute;rieux, pr&eacute;cision et une vraie passion pour le travail bien fait.
            </p>
            <p className="text-[#3D4F6F] text-base md:text-[17px] leading-relaxed">
              Derri&egrave;re chaque dispositif, il y a un regard, une exigence et une exp&eacute;rience construite au fil des ann&eacute;es. Les appareils con&ccedil;us sont pens&eacute;s pour &ecirc;tre <strong className="font-medium text-[#1B2A4A]">fiables</strong>, <strong className="font-medium text-[#1B2A4A]">confortables</strong> et <strong className="font-medium text-[#1B2A4A]">adapt&eacute;s aux traitements</strong>, avec une exigence constante.
            </p>
            <p className="text-[#C5A572] font-light text-lg mt-6 italic border-l-2 border-[#C5A572] pl-5">
              La pr&eacute;cision n&apos;est pas un concept : c&apos;est une habitude quotidienne.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center py-3 px-7 border border-[#1B2A4A] rounded-md overflow-hidden font-medium text-sm tracking-wide transition-all duration-300 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
                <span className="flex items-center gap-2">
                  <span>En savoir plus sur mon parcours</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href="#expertises"
                className="group w-12 h-12 bg-[#1B2A4A] rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="Scroll to expertises">
                <ArrowDown className="text-white" size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc 5 - Cha&icirc;ne de fonctionnement */}
        <div className="mt-24 md:mt-32">
          <span className="text-xs font-medium tracking-widest uppercase text-[#C5A572] mb-4 block">
            Un laboratoire moderne, connect&eacute; et r&eacute;actif
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-light mb-3 text-[#1B2A4A]">
            De la commande &agrave; la livraison
          </h3>
          <p className="text-[#3D4F6F] mb-10 max-w-2xl text-base">
            Smile Up s&apos;appuie sur les derni&egrave;res technologies pour offrir un service fluide et efficace. L&apos;objectif : vous simplifier la vie et vous permettre d&apos;avancer sereinement dans vos plans de traitement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { step: "01", icon: Package, title: "Commande", desc: "R&eacute;ception de votre prescription" },
              { step: "02", icon: Mail, title: "R&eacute;ception", desc: "Empreintes num&eacute;riques (STL) ou physiques" },
              { step: "03", icon: FileSearch, title: "V&eacute;rification", desc: "Contr&ocirc;le du dossier complet" },
              { step: "04", icon: Wrench, title: "Conception & Fabrication", desc: "CFAO, impression 3D, travail manuel" },
              { step: "05", icon: CheckCircle, title: "Contr&ocirc;le & Envoi", desc: "V&eacute;rification finale et exp&eacute;dition" }
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-white border border-[#1B2A4A]/8 rounded-lg p-5 h-full min-h-[160px] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#C5A572]/30">
                  <div>
                    <span className="text-[#C5A572]/30 font-display text-3xl font-light absolute top-4 right-4">{item.step}</span>
                    <item.icon className="w-6 h-6 mb-4 text-[#1B2A4A]" strokeWidth={1.5} />
                    <h4 className="font-display text-sm font-medium leading-tight text-[#1B2A4A]">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#5A6A84] mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 6 - Compatibilit&eacute; scanners */}
        <div className="mt-16 bg-white border border-[#1B2A4A]/8 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <span className="text-xs font-medium tracking-widest uppercase text-[#C5A572] mb-3 block">
                Int&eacute;gration certifi&eacute;e
              </span>
              <h4 className="font-display text-xl md:text-2xl font-light text-[#1B2A4A] mb-2">
                Compatible avec les leaders du march&eacute;
              </h4>
              <p className="text-[#5A6A84] text-sm md:text-base">
                R&eacute;ception directe de vos empreintes num&eacute;riques depuis les syst&egrave;mes les plus utilis&eacute;s au monde.
              </p>
            </div>
            
            <div className="flex items-center gap-4 flex-wrap">
              {[
                { src: "/logos/3shape.svg", alt: "3Shape" },
                { src: "/logos/itero.svg", alt: "iTero" },
                { src: "/logos/medit.svg", alt: "Medit" },
                { src: "/logos/carestream.svg", alt: "Carestream Dental" }
              ].map((logo) => (
                <div key={logo.alt} className="bg-[#F8F9FA] rounded-md h-12 px-5 border border-[#1B2A4A]/5 flex items-center justify-center transition-all duration-300 hover:border-[#C5A572]/30 hover:shadow-sm">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-[#1B2A4A]/8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#3D4F6F]">
              <CheckCircle className="w-4 h-4 text-[#1B2A4A] flex-shrink-0" strokeWidth={1.5} />
              <span>Envoyez vos fichiers STL directement depuis votre scanner &mdash; r&eacute;ception en temps r&eacute;el.</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#3D4F6F]">
              <Mail className="w-4 h-4 text-[#1B2A4A] flex-shrink-0" strokeWidth={1.5} />
              <span>P&ocirc;le num&eacute;rique : <a href="mailto:smile.up045@gmail.com" className="font-medium text-[#1B2A4A] hover:text-[#C5A572] transition-colors">smile.up045@gmail.com</a></span>
            </div>
          </div>
        </div>

        {/* Bloc 7 - Made in France + Bloc 8 - D&eacute;lais */}
        <div className="mt-16 bg-white border border-[#1B2A4A]/8 rounded-lg overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-5 bg-[#002395] rounded-sm"></div>
                    <div className="w-1.5 h-5 bg-white border border-[#1B2A4A]/10 rounded-sm"></div>
                    <div className="w-1.5 h-5 bg-[#ED2939] rounded-sm"></div>
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#1B2A4A]">
                    Origine France Garantie
                  </span>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl font-light text-[#1B2A4A] mb-5 leading-tight">
                  100% Fabriqu&eacute;<br />en France
                </h3>
                
                <p className="text-[#3D4F6F] text-base md:text-lg mb-10 max-w-xl leading-relaxed">
                  Chaque appareil est enti&egrave;rement con&ccedil;u et fabriqu&eacute; dans notre laboratoire &agrave; <strong className="font-medium text-[#1B2A4A]">Ingr&eacute; (45)</strong>, sans aucune sous-traitance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-[#1B2A4A]/8 rounded-lg p-5">
                    <MapPin className="w-5 h-5 text-[#1B2A4A] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1B2A4A] font-medium text-lg block">Ingr&eacute; (45)</span>
                    <p className="text-[#5A6A84] text-xs mt-1">Fabrication locale</p>
                  </div>
                  
                  <div className="border border-[#1B2A4A]/8 rounded-lg p-5">
                    <CheckCircle className="w-5 h-5 text-[#1B2A4A] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1B2A4A] font-medium text-lg block">0%</span>
                    <p className="text-[#5A6A84] text-xs mt-1">Sous-traitance</p>
                  </div>
                  
                  <div className="border border-[#1B2A4A]/8 rounded-lg p-5">
                    <Truck className="w-5 h-5 text-[#1B2A4A] mb-3" strokeWidth={1.5} />
                    <span className="text-[#1B2A4A] font-medium text-lg block">J+1</span>
                    <p className="text-[#5A6A84] text-xs mt-1">Livraison France m&eacute;tropolitaine</p>
                  </div>
                </div>
              </div>

              {/* Bloc 8 - D&eacute;lais */}
              <div className="lg:w-[340px] flex-shrink-0">
                <div className="bg-[#F8F9FA] rounded-lg p-6 border border-[#1B2A4A]/5">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[#1B2A4A]" strokeWidth={1.5} />
                    <h4 className="font-display text-base font-medium text-[#1B2A4A]">D&eacute;lais de fabrication</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { label: "Appareils fixes", delay: "7 &agrave; 10 jours", sub: "CFAO et traditionnel" },
                      { label: "Appareils amovibles", delay: "7 &agrave; 10 jours", sub: "" },
                      { label: "Appareils fonctionnels", delay: "~ 15 jours", sub: "" },
                      { label: "Thermoform&eacute;s", delay: "10 jours", sub: "" },
                      { label: "Contentions", delay: "3 &agrave; 5 jours", sub: "" },
                      { label: "PUL", delay: "15 &agrave; 20 jours", sub: "" },
                      { label: "R&eacute;parations", delay: "3 &agrave; 5 jours", sub: "" },
                      { label: "Urgences", delay: "Prioritaire", sub: "Nous consulter", accent: true }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white rounded-md border border-[#1B2A4A]/5">
                        <div>
                          <span className="text-xs font-medium text-[#1B2A4A]">{item.label}</span>
                          {item.sub && <span className="text-[10px] text-[#5A6A84] block mt-0.5">{item.sub}</span>}
                        </div>
                        <span className={`text-xs font-medium ${item.accent ? 'text-[#C5A572]' : 'text-[#1B2A4A]'}`}>{item.delay}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[10px] text-[#5A6A84] mt-4 text-center">Livraison France m&eacute;tropolitaine</p>
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