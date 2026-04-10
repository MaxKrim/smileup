"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

type WorkCardProps = {
  title: string;
  label: string;
  image?: string;
  video?: string;
  href: string;
};

const WorkCard = ({ title, label, image, video, href }: WorkCardProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="group flex flex-col overflow-hidden rounded-lg bg-white border border-[#46aac9]/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <img
              src={image}
              alt={label}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D5F75]/40 to-transparent"></div>
          <div className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-md bg-white text-[#1D5F75] transition-all duration-300 group-hover:bg-[#1D5F75] group-hover:text-white">
            <ArrowUpRight strokeWidth={1.5} className="size-5" />
          </div>
        </div>
        <div className="flex-grow p-6 md:p-8 bg-gradient-to-r from-[#46aac9] to-[#2A7A95]">
          <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight tracking-tight text-white">{title}</h3>
          <div className="mt-4 inline-block border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80 rounded-md tracking-wide uppercase">
            {label}
          </div>
        </div>
      </a>
    </Link>
  );
};

const worksData: WorkCardProps[] = [
  {
    title: "Précision technique pour résultats optimaux",
    label: "Appareils Fonctionnels",
    video: "/videos/portfolio-1.mp4",
    href: "#contact"
  },
  {
    title: "Innovation numérique et expertise artisanale",
    label: "Gamme PUL",
    video: "/videos/portfolio-2.mp4",
    href: "#contact"
  }
];

const PortfolioShowcase = () => {
    return (
      <section id="work" className="bg-background py-14 md:py-20 w-full overflow-hidden">
        <div className="mx-auto px-6 md:px-12 max-w-7xl w-full">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A] mb-4 block">Réalisations</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.03em] text-[#1D5F75]">Des réalisations qui font sourire.</h2>
            <p className="mt-5 text-base md:text-lg text-[#3D5A6A] leading-relaxed">
              Chaque dispositif est réalisé sur mesure selon vos prescriptions. Des appareils fonctionnels aux gouttières thermoformées, nous mettons notre expertise technique au service de traitements précis, fiables et durables.
            </p>
          </div>
          <div className="mt-8 mb-10">
            <Link href="#contact" legacyBehavior>
              <a className="group inline-flex items-center gap-3 border border-[#1D5F75] px-7 py-3 rounded-md text-sm font-medium text-[#1D5F75] transition-all duration-300 hover:bg-[#1D5F75] hover:text-white tracking-wide">
                <span>Discutons de vos besoins</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            {worksData.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default PortfolioShowcase;
