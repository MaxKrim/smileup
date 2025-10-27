import React from 'react';
import Image from 'next/image';
import { Mail, Flame } from 'lucide-react';

const CtaFinal = () => {
  return (
    <section id="cta" className="relative bg-background py-32 overflow-hidden">
      <div className="container relative mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.06em] text-foreground md:text-[56px]">
            Let’s Get Hyped!
          </h2>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="mailto:info@gethyped.nl"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-transparent px-[30px] py-[14px] text-base font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              <span>Mail ons direct</span>
            </a>

            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-orange-dark sm:w-auto"
            >
              <span>Get Results</span>
              <Flame className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="absolute -right-8 top-8 hidden md:right-16 md:block lg:right-24 xl:right-32">
          <div className="relative h-40 w-40">
            <div className="animate-[spin_20s_linear_infinite]">
              <Image
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/686baabfd0c79e5623544bcc_badge-text.svg"
                alt="GET RESULTS • GET NOTICED • GET HYPED"
                width={160}
                height={160}
                className="h-full w-full"
                unoptimized
              />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-brand-pink">
                <span className="font-display text-3xl font-bold tracking-tighter text-black">
                  GH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;