import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CtaFinal = () => {
  return (
    <section id="contact" className="relative overflow-hidden w-full">
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D5F75] via-[#2A7A95] to-[#46aac9]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,115,74,0.15),_transparent_60%)]"></div>
      
      <div className="relative py-16 md:py-24 mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A]">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.03em] text-white">
            Travaillons ensemble pour vos patients.
          </h2>
          
          <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Besoin d&apos;appareils orthodontiques de qualité ? Discutons de vos besoins et de comment je peux vous accompagner dans vos traitements.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row mt-4">
            <a
              href="mailto:smile.up045@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2 border border-white/30 px-7 py-3 rounded-md text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#1D5F75] sm:w-auto tracking-wide backdrop-blur-sm"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>M&apos;envoyer un email</span>
            </a>

            <a
              href="tel:+33777995315"
              className="group inline-flex w-full items-center justify-center gap-2 bg-[#E8734A] px-7 py-3 rounded-md text-sm font-medium text-white transition-all duration-300 hover:bg-[#D4633E] sm:w-auto tracking-wide shadow-lg"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span>07.77.99.53.15</span>
            </a>
            <a
              href="tel:+33950298733"
              className="group inline-flex w-full items-center justify-center gap-2 bg-[#E8734A] px-7 py-3 rounded-md text-sm font-medium text-white transition-all duration-300 hover:bg-[#D4633E] sm:w-auto tracking-wide shadow-lg"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span>09.50.29.87.33</span>
            </a>
          </div>

          <div className="mt-6">
            <p className="text-sm text-white/60">
              Je me déplace également dans votre cabinet pour faire un point sur vos besoins spécifiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
