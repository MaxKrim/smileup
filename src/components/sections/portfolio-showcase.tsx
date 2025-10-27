"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

type WorkCardProps = {
  title: string;
  label: string;
  videoSrc: string;
  imageSrc: string;
  borderColor: string;
  bgColor: string;
  href: string;
};

const WorkCard = ({ title, label, videoSrc, imageSrc, borderColor, bgColor, href }: WorkCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(error => console.error("Video play failed:", error));
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        style={{ borderWidth: '3px', borderColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            preload="auto"
          />
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
    title: "Zacht in smaak, sterk in beeld",
    label: "Roasta",
    videoSrc: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/images/68716a54a3bf63bf25c2ae92_roasta-placeholder-3.avif",
    borderColor: "var(--color-brand-orange)",
    bgColor: "var(--color-brand-orange)",
    href: "/work/roasta-koffie"
  },
  {
    title: "Content die écht smaakt (en raakt)",
    label: "Loco",
    videoSrc: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/images/68716b4e8982337b1d3d1bd7_loco-loco-placeholder-4.avif",
    borderColor: "var(--color-brand-blue)",
    bgColor: "var(--color-brand-blue)",
    href: "/work/loco"
  }
];

const PortfolioShowcase = () => {
    return (
      <section className="bg-background py-16 md:py-24 relative z-0">
        <div className="container">
          <div className="max-w-[60ch]">
            <h2 className="font-display text-6xl font-medium leading-none tracking-[-0.06em] md:text-7xl">Content dat scoort.</h2>
            <p className="mt-6 text-lg text-text-secondary">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
          </div>
          <div className="mt-8 mb-12">
              <Link href="/work" legacyBehavior>
                  <a className="group inline-flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-7 py-3 text-base font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                      <span>Bekijk al ons werk</span>
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