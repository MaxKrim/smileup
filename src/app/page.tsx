"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import ExpertisesSection from '@/components/sections/expertises';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import BrandsMarquee from '@/components/sections/brands-marquee';
import CtaFinal from '@/components/sections/cta-final';
import Footer from '@/components/sections/footer';
import ContactModal from '@/components/modals/contact-modal';
import Preloader from '@/components/ui/preloader';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Preloader />
      <div className="flex flex-col min-h-screen bg-background">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <Intro />
          <ExpertisesSection />
          <PortfolioShowcase />
          <BrandsMarquee />
          <CtaFinal />
        </main>
        <Footer />
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </>
  );
}