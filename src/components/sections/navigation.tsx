"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = () =>
  <svg
    width="180"
    height="50"
    viewBox="0 0 982.52 270.95"
    className="text-black w-auto h-9 md:h-11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Smile UP Logo">
    <defs>
      <style>{`.cls-1{fill:#2b2b2b;}.cls-2{fill:#46aac9;}`}</style>
    </defs>
    <g>
      <path className="cls-2" d="M976.08,91.13c-8.5-21.45-30.1-35.86-53.75-35.86-16.03,0-30.44,6.7-40.25,18.54v-14.19l-2.39-.1c-2.22-.09-4.37-.14-6.75-.14s-4.51.04-6.92.08l-5.45.09v184.47c0,1.46,2.17,3.62,3.62,3.62h14.26c1.46,0,3.62-2.17,3.62-3.62v-60.45c9.89,11.47,23.17,17.07,40.37,17.07h0c2.31,0,4.75-.1,7.23-.3,17.16-1.37,31.19-10.07,40.58-25.15,15.7-25.22,14.82-61.38,5.83-84.06ZM883.53,147.96c-6.27-24.12-.47-52.94,12.94-64.24,6.15-5.18,14.63-8.04,23.87-8.04,12.76,0,24.48,5.56,30.58,14.52,12.51,18.36,13.86,49.99,3.01,70.5-4.93,9.33-14.56,20.45-32.42,20.45-2.98,0-6.14-.32-9.37-.94-18.53-3.59-25.88-21.74-28.61-32.24Z" />
      <path className="cls-2" d="M839.82,3.22h-20.59l.03,130.44c-.35,15.29-5.48,41.59-35.88,45.87-3.85.54-7.6.82-11.15.82-13.65,0-24.92-4.09-32.6-11.84-8.17-8.25-12.41-20.79-12.27-36.29l.03-128.99h-19.61l-1.18,135.05c.72,38.45,25.76,62.33,65.34,62.33h0c5.1,0,10.41-.41,15.79-1.23,32.98-5.02,51.54-28.59,52.27-66.35.78-40.29.04-124.05-.1-127.39l-.09-2.4Z" />
      <path className="cls-1" d="M397.68,180.95c-1.9-.51-6.73-.81-8.1.58-2.69,2.7.38,7.31.43,9.35.04,1.73-10.93,9.77-13.13,11.35-59.23,42.51-146.34,42.64-202.89-4.73-2.4-2.01-13.42-11.77-13.96-13.86-.28-1.09,9.19-7.02,10.98-8.66,13.45-12.28,19.22-31.23,12.57-48.62-16.55-43.3-101.54-34.42-137.2-52.68-23.7-12.13-20.99-36.51,1.03-48.57,26.77-14.67,72.3-10.39,98.84,3.49,2.71,1.42,12.91,8.85,14.6,8.7,1.08-.1,8.67-10.94,8.68-11.69,0-.71-.35-1.04-.73-1.55-1.34-1.77-14.91-9.32-17.8-10.73C114.98-4.3,49.5-8.34,21.61,25.59c-10.31,12.55-11.3,33.26-2.54,46.86,22.33,34.7,101.99,23.91,136.39,46.74,20.98,13.93,17.04,36.12-2.55,48.95-20.79,13.62-51.19,15.8-75.26,12.34-25.08-3.61-48.95-14.23-67.55-31.36-.74.13-9.38,10.12-9.87,11.23-1.02,2.29,1.58,3.88,3.04,5.2,30.4,27.6,84.16,37.06,123.61,29.84,7.43-1.36,14.5-4.59,21.8-5.68,24.54,30.25,57.89,51.11,96.48,58.18,51.65,9.47,100.1-1.25,141.93-32.48,2.05-1.53,11.82-10.46,12.61-10.69,3.75-1.1,9.22,5.63,14.43,1.71,7.31-5.51-10.3-23.86-16.45-25.5Z" />
      <path className="cls-1" d="M224.28,111.17c0-16.38,11.6-34.68,28.9-36.39,27.4-2.71,36.99,13.74,38.64,38.65v82.18h16.52c.15-3.36-.2-6.8-.03-10.16.5-9.78.71-19.48.81-29.21.32-31.97-9.4-85.94,39.36-81.45,19.96,1.84,26.7,21.17,27.44,38.61l-.02,79.21c5.75-4.9,9.02-13.11,16.93-14.96-.26-21.59,1.47-44.27.36-65.76-1.76-34.33-21.29-58.69-58.12-52.8-13.65,2.18-27.44,11.91-32.74,24.69-2.76-2.86-3.78-6.55-6.36-9.76-18.05-22.48-53.79-19.69-71.69,1.51v-14.26h-16.14c-.08,0-1.13,1.05-1.13,1.13v133.22h17.26v-84.44Z" />
      <path className="cls-1" d="M581.22,180.54c-19.59-5.03-33.59-23.36-34.21-43.48,24.04,2.26,49.73,4.32,72.57-5.12,42.32-17.48,31.59-65.69-11.58-72.75-64.23-10.5-99.96,61.46-66.55,112.33,20.67,31.47,68.26,33.75,97.79,13.97l-7.78-13.88c-15.01,10.14-32.6,13.46-50.24,8.93ZM606.48,74.98c27.71,5.26,32.12,31.86,5.07,42.94-7.38,3.02-18.68,5.13-26.64,5.63-13.12.83-25.6-2.02-38.65-1.49.86-30.88,30.21-52.77,60.22-47.08Z" />
      <path className="cls-1" d="M507.67,180.53c-3.46-.47-7.15-2.35-8.63-5.64-.33-.74-1.57-4.73-1.57-5.18V.47h-16.51v174.5c0,9.22,12.31,20.64,21.39,20.64h14.26c.08,0,1.13-1.05,1.13-1.13v-12.01c0-3.14-7.43-1.59-10.07-1.94Z" />
      <path className="cls-1" d="M449.07,61.26h-15.01c-.08,0-1.13,1.05-1.13,1.13v133.22h17.26V62.39c0-.08-1.05-1.13-1.13-1.13Z" />
      <path className="cls-1" d="M322.26,257.12c-21.95-1.4-50.67.32-72.84,1.52-3.21.17-19.83.17-21.32,2.32-2.59,3.74,7.53,5.88,9.67,6.34,22.04,4.8,54.42,4.23,76.95,1.85,3.83-.41,23.65-2.52,24.36-6.46.67-3.75-14.1-5.41-16.82-5.58Z" />
      <path className="cls-1" d="M437.98,26.91c-12.66,2.63-9.81,25.39,6.25,22,13.52-2.85,10.55-25.49-6.25-22Z" />
    </g>
  </svg>;

const NavLink = ({ href, children }: {href: string; children: React.ReactNode;}) =>
  <Link href={href} className="text-[#3D5A6A] text-sm font-medium tracking-wide hover:text-[#1D5F75] transition-colors duration-200">
    {children}
  </Link>;

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
    { name: "Nos Gammes", href: "/#expertises" },
    { name: "Réalisations", href: "/#work" },
    { name: "Qui suis-je", href: "/about" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body w-full",
          isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#1D5F75]/8" : "bg-transparent"
        )}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" aria-label="Page d'accueil" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-10">
                {navItems.map((item) =>
                  <NavLink key={item.name} href={item.href}>
                    {item.name}
                  </NavLink>
                )}
              </div>
            </div>
            
            <div className="hidden lg:block flex-shrink-0">
                <Link
                  href="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#E8734A] py-2.5 px-6 rounded-md transition-all duration-300 hover:bg-[#D4633E] tracking-wide shadow-md">
                  <span>Travailler Ensemble</span>
                </Link>
            </div>

            <div className="lg:hidden flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 h-8 w-8 text-[#1D5F75] flex items-center justify-center"
                aria-label="Toggle menu">
                <span className={cn("block absolute h-[1.5px] w-6 bg-current transform transition duration-300 ease-in-out", isMenuOpen ? "rotate-45" : "-translate-y-1.5")}></span>
                <span className={cn("block absolute h-[1.5px] w-6 bg-current transition duration-300 ease-in-out", isMenuOpen ? "opacity-0" : "")}></span>
                <span className={cn("block absolute h-[1.5px] w-6 bg-current transform transition duration-300 ease-in-out", isMenuOpen ? "-rotate-45" : "translate-y-1.5")}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out font-body overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="flex flex-col items-center justify-center min-h-full space-y-8 pt-20 pb-12 px-6">
          {navItems.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-light text-[#1D5F75] tracking-tight">
              {item.name}
            </Link>
          )}
          <div className="pt-8">
              <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#E8734A] py-3 px-8 rounded-md tracking-wide shadow-md">
                <span>Travailler Ensemble</span>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}