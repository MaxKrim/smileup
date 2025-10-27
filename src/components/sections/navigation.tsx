"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = () => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    className="text-black"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Smile UP Logo"
  >
    {/* Smile curve */}
    <path
      d="M8 20C8 20 12 28 20 28C28 28 32 20 32 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Teeth details on smile */}
    <line x1="14" y1="22" x2="14" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="17" y1="23.5" x2="17" y2="26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="24" x2="20" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="23" y1="23.5" x2="23" y2="26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="22" x2="26" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Arrow UP */}
    <path
      d="M20 16L20 8M20 8L16 12M20 8L24 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Text "Smile UP" */}
    <text
      x="42"
      y="26"
      fontFamily="Space Grotesk, sans-serif"
      fontSize="20"
      fontWeight="500"
      fill="currentColor"
      letterSpacing="-0.02em"
    >
      Smile <tspan fontWeight="700" fill="#0D8EFF">UP</tspan>
    </text>
  </svg>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative inline-block overflow-hidden px-2 py-1 text-black text-base font-medium group">
    <span className="absolute top-0 left-0 w-1/2 h-full bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
    <span className="absolute top-0 right-0 w-1/2 h-full bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
    <span className="relative z-10">{children}</span>
  </Link>
);


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Nos Gammes", href: "#expertises" },
    { name: "Réalisations", href: "#work" },
    { name: "Qui suis-je", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body",
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-black/10" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" aria-label="Page d'accueil">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink key={item.name} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <Link
                href="#contact"
                className="group flex items-center gap-2 text-base font-medium text-black bg-gradient-to-r from-[#F87DFF] to-accent py-3 px-6 rounded-full transition-transform hover:scale-105"
              >
                <span>Travailler Ensemble</span>
                <span className="text-xl">🦷</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 h-8 w-8 text-black flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <span className={cn("block absolute h-[2px] w-6 bg-current transform transition duration-300 ease-in-out", isMenuOpen ? "rotate-45" : "-translate-y-1.5")}></span>
                <span className={cn("block absolute h-[2px] w-6 bg-current transition duration-300 ease-in-out", isMenuOpen ? "opacity-0" : "")}></span>
                <span className={cn("block absolute h-[2px] w-6 bg-current transform transition duration-300 ease-in-out", isMenuOpen ? "-rotate-45" : "translate-y-1.5")}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-500 ease-in-out font-body",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-medium text-black"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-8">
             <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-lg font-medium text-black bg-gradient-to-r from-[#F87DFF] to-accent py-4 px-8 rounded-full"
              >
                <span>Travailler Ensemble</span>
                <span className="text-2xl">🦷</span>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}