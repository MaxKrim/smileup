"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

type WorkCardProps = {
  title: string;
  label: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  href: string;
};

const WorkCard = ({ title, label, icon, borderColor, bgColor, href }: WorkCardProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        style={{ borderWidth: '3px', borderColor }}
      >
        <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-8xl mb-4">{icon}</div>
            <div className="text-2xl font-medium text-gray-800">{label}</div>
          </div>
          <div className="absolute top-5 right-5 z-10 flex size-12 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight strokeWidth={2.5} className="size-6" />
          </div>
        </div>
        <div className="flex-grow p-6 text-white md:p-8" style={{ backgroundColor: bgColor }}>
          <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.05em] lg:text-[32px]">{title}</h3>
          <div className="mt-4 inline-block rounded-full bg-white/95 px-4 py-1.5 text-sm font-medium text-black">
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
    icon: "⚙️",
    borderColor: "var(--color-brand-orange)",
    bgColor: "var(--color-brand-orange)",
    href: "#contact"
  },
  {
    title: "Innovation numérique et expertise artisanale",
    label: "Gamme PUL",
    icon: "🔬",
    borderColor: "var(--color-brand-blue)",
    bgColor: "var(--color-brand-blue)",
    href: "#contact"
  }
];

const PortfolioShowcase = () => {
    return (
      <section id="work" className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-[60ch]">
            <h2 className="font-display text-6xl font-medium leading-none tracking-[-0.06em] md:text-7xl">Des réalisations qui font sourire.</h2>
            <p className="mt-6 text-lg text-text-secondary">
              Chaque appareil est conçu sur mesure selon vos prescriptions. De l'appareil fonctionnel complexe à la gouttière thermoformée, je maîtrise toutes les techniques pour des résultats qui répondent à vos exigences.
            </p>
          </div>
          <div className="mt-8 mb-12">
              <Link href="#contact" legacyBehavior>
                  <a className="group inline-flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-7 py-3 text-base font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
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