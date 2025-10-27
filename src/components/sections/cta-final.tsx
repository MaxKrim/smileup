import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CtaFinal = () => {
  return (
    <section id="contact" className="relative bg-background py-32 overflow-hidden">
      <div className="container relative mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.06em] text-foreground md:text-[56px]">
            Travaillons ensemble pour vos patients.
          </h2>
          
          <p className="text-xl text-secondary-foreground max-w-[60ch]">
            Besoin d'appareils orthodontiques de qualité ? Discutons de vos besoins et de comment je peux vous accompagner dans vos traitements.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="mailto:jessica.lerandyestevez@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-transparent px-[30px] py-[14px] text-base font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              <span>M'envoyer un email</span>
            </a>

            <a
              href="tel:+33777995315"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0EA5E9] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#0085FF] sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              <span>Appelez-moi</span>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-base text-secondary-foreground">
              Je me déplace également dans votre cabinet pour faire un point sur vos besoins spécifiques.
            </p>
          </div>
        </div>

        <div className="absolute -right-8 top-8 hidden md:right-16 md:block lg:right-24 xl:right-32">
          <div className="relative h-40 w-40">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0EA5E9]">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🦷</div>
                <div className="font-display text-xl font-bold tracking-tighter">Smile UP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;