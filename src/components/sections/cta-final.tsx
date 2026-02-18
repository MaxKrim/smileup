import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CtaFinal = () => {
  return (
      <section id="contact" className="relative bg-background py-16 md:py-24 overflow-hidden w-full">
      <div className="relative mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-[#46aac9]">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.03em] text-[#1D5F75]">
            Travaillons ensemble pour vos patients.
          </h2>
          
            <p className="text-base md:text-lg text-[#3D5A6A] max-w-xl leading-relaxed">
              Besoin d&apos;appareils orthodontiques de qualité ? Discutons de vos besoins et de comment je peux vous accompagner dans vos traitements.
            </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row mt-4">
            <a
              href="mailto:smile.up045@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2 border border-[#1D5F75] px-7 py-3 rounded-md text-sm font-medium text-[#1D5F75] transition-all duration-300 hover:bg-[#1D5F75] hover:text-white sm:w-auto tracking-wide"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>M&apos;envoyer un email</span>
            </a>

            <a
              href="tel:+33777995315"
              className="group inline-flex w-full items-center justify-center gap-2 bg-[#1D5F75] px-7 py-3 rounded-md text-sm font-medium text-white transition-all duration-300 hover:bg-[#2A7A95] sm:w-auto tracking-wide"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span>Appelez-moi</span>
            </a>
          </div>
          
          <div className="mt-6">
              <p className="text-sm text-[#5A6A84]">
                Je me déplace également dans votre cabinet pour faire un point sur vos besoins spécifiques.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;