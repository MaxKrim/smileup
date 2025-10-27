import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Intro = () => {
  return (
    <section id="intro-home" className="bg-background text-foreground py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 gap-y-12 lg:gap-y-0">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[40px] leading-[1.1] font-medium -tracking-[0.06em] text-foreground whitespace-pre-line">
              Une expertise technique pointue.
            </h2>
          </div>

          <div className="lg:col-start-9 lg:col-span-3 lg:row-start-1">
            <div className="relative aspect-[400/486] w-full max-w-[400px] mx-auto lg:mx-0 rounded-[24px] overflow-hidden bg-[#0EA5E9]">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🦷</div>
                  <div className="font-display text-xl font-medium">Laboratoire d'Orthodontie</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:row-start-2">
            <p className="text-secondary-foreground text-[20px] leading-[1.5] -tracking-[0.01em]">
              Je travaille exclusivement pour les orthodontistes, dentistes et chirurgiens-dentistes qui pratiquent l'orthodontie. Chaque appareil est réalisé avec précision selon vos prescriptions, pour des résultats optimaux chez vos patients, enfants comme adultes.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center py-[14px] px-[30px] border-2 border-black rounded-full overflow-hidden font-medium text-base leading-snug">
                <span className="absolute inset-0 w-full h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out origin-bottom z-0"></span>
                <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300 ease-in-out">
                  <span>En savoir plus sur mon parcours</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex lg:col-start-12 lg:row-start-2 justify-self-end self-end mt-8 lg:mt-0">
            <Link
              href="#expertises"
              className="group relative w-14 h-14 bg-black rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Scroll to expertises">
              <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-14">
                <div className="w-14 h-14 flex items-center justify-center">
                  <ArrowDown className="text-white" size={24} />
                </div>
                <div className="w-14 h-14 flex items-center justify-center">
                  <ArrowDown className="text-white" size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;