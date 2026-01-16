import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CtaFinal = () => {
  return (
    <section id="contact" className="relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden w-full">
      <div className="relative mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-none tracking-[-0.06em] text-foreground">
            Travaillons ensemble pour vos patients.
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-secondary-foreground max-w-[60ch]">
            Besoin d'appareils orthodontiques de qualité ? Discutons de vos besoins et de comment je peux vous accompagner dans vos traitements.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="mailto:smile.up045@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-transparent px-6 py-3 text-sm md:text-base font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              <span>M'envoyer un email</span>
            </a>

            <a
              href="tel:+33777995315"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0EA5E9] px-6 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-[#0085FF] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              <span>Appelez-moi</span>
            </a>
          </div>
          
          <div className="mt-4 md:mt-8 text-center">
            <p className="text-sm md:text-base text-secondary-foreground">
              Je me déplace également dans votre cabinet pour faire un point sur vos besoins spécifiques.
            </p>
          </div>
        </div>

        <div className="absolute -right-4 md:right-8 lg:right-16 xl:right-24 top-8 hidden md:block">
          <div className="relative h-32 w-32 lg:h-40 lg:w-40">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0EA5E9]">
              <div className="text-center text-white">
                <div className="text-4xl lg:text-6xl mb-2">🦷</div>
                <div className="font-display text-base lg:text-xl font-bold tracking-tighter">Smile UP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
