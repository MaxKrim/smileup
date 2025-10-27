"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = () => (
  <svg
    width="160"
    height="32"
    viewBox="0 0 160 32"
    className="text-black"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Get Hyped Logo"
  >
    <path d="M11.68 18.2C11.68 15.68 12.64 13.6267 14.56 12.04C16.48 10.4533 19.0133 9.66 22.16 9.66C24.16 9.66 25.96 10.0267 27.56 10.76L26.44 14.6C25.24 14.12 24.0667 13.88 22.92 13.88C21.4933 13.88 20.32 14.28 19.4 15.08C18.48 15.8667 18.02 16.8933 18.02 18.16V25.2H11.68V18.2ZM24.48 29.56C21.44 29.56 18.9467 28.7067 16.9999 26.99C15.0667 25.2733 14.0999 23 14.0999 20.17C14.0999 17.34 15.0667 15.07 16.9999 13.36C18.9467 11.6367 21.44 10.775 24.48 10.775C27.52 10.775 30.0133 11.6367 31.9602 13.36C33.9202 15.07 34.8999 17.34 34.8999 20.17C34.8999 23 33.9202 25.2733 31.9602 26.99C30.0133 28.7067 27.52 29.56 24.48 29.56ZM24.48 24.7C25.9333 24.7 27.12 24.1933 28.04 23.18C28.9733 22.1533 29.44 20.88 29.44 19.36C29.44 17.84 28.9733 16.5733 28.04 15.56C27.12 14.5333 25.9333 14.02 24.48 14.02C23.0267 14.02 21.84 14.5333 20.92 15.56C20.0133 16.5733 19.56 17.84 19.56 19.36C19.56 20.88 20.0133 22.1533 20.92 23.18C21.84 24.1933 23.0267 24.7 24.48 24.7Z"></path>
    <path d="M38.56 25.2H43.92L45.4 19.4H39.8L38.56 25.2ZM46.12 11.24L40.48 30H34.42L40.06 11.24H46.12ZM50.08 17.92L48.84 23.68H54.4L53.16 17.92H50.08Z"></path>
    <path d="M57.4 25.2H62.76L64.24 19.4H58.64L57.4 25.2ZM64.96 11.24L59.32 30H53.26L58.9 11.24H64.96ZM68.92 17.92L67.68 23.68H73.24L72 17.92H68.92Z"></path>
    <path d="M76.96 11.24V25.2H71.2V11.24H76.96Z"></path>
    <path d="M90.8 25.2H85.04V15.08L81.2 25.2H78.2L74.36 15.08V25.2H68.6V7H73.24L77.72 19.48L82.28 7H86.84L90.8 17.24V25.2Z"></path>
    <path d="M96.46 20.1C96.46 17.48 97.4067 15.4267 99.3 13.94C101.206 12.44 103.719 11.69 106.84 11.69C109.96 11.69 112.466 12.44 114.36 13.94C116.266 15.4267 117.22 17.48 117.22 20.1C117.22 22.6933 116.266 24.7333 114.36 26.22C112.466 27.6933 109.96 28.43 106.84 28.43C103.719 28.43 101.206 27.6933 99.3 26.22C97.4067 24.7333 96.46 22.6933 96.46 20.1ZM111.42 20.1C111.42 18.6667 111.026 17.5133 110.24 16.64C109.453 15.7533 108.333 15.31 106.88 15.31C105.426 15.31 104.299 15.7533 103.5 16.64C102.713 17.5133 102.32 18.6667 102.32 20.1C102.32 21.5333 102.713 22.7 103.5 23.6C104.299 24.4867 105.426 24.93 106.88 24.93C108.333 24.93 109.453 24.4867 110.24 23.6C111.026 22.7 111.42 21.5333 111.42 20.1Z"></path>
    <path d="M129.5 25.2H123.8V17.96C123.8 16.7 123.446 15.7867 122.74 15.22C122.046 14.64 121.133 14.35 120 14.35C118.6 14.35 117.613 14.99 117.04 16.27V25.2H111.28V7H117.04V12.7C118.053 11.2333 119.46 10.5 121.26 10.5C123.233 10.5 124.8 11.14 125.96 12.42C127.133 13.6867 127.72 15.4267 127.72 17.64V25.2H129.5Z"></path>
    <path d="M141.026 13.94L137.952 25.2H132.332L130.231 18.02L129.5 16.34L133.565 7H139.185L141.026 13.94Z"></path>
    <path d="M152.094 18.2C152.094 15.68 153.054 13.6267 154.974 12.04C156.894 10.4533 159.427 9.66 162.574 9.66C164.574 9.66 166.374 10.0267 167.974 10.76L166.854 14.6C165.654 14.12 164.48 13.88 163.334 13.88C161.907 13.88 160.734 14.28 159.814 15.08C158.894 15.8667 158.434 16.8933 158.434 18.16V25.2H152.094V18.2Z"></path>
    <path d="M150.187 29.56C147.147 29.56 144.654 28.7067 142.707 26.99C140.774 25.2733 139.807 23 139.807 20.17C139.807 17.34 140.774 15.07 142.707 13.36C144.654 11.6367 147.147 10.775 150.187 10.775C153.227 10.775 155.72 11.6367 157.667 13.36C159.627 15.07 160.607 17.34 160.607 20.17C160.607 23 159.627 25.2733 157.667 26.99C155.72 28.7067 153.227 29.56 150.187 29.56ZM150.187 24.7C151.64 24.7 152.827 24.1933 153.747 23.18C154.68 22.1533 155.147 20.88 155.147 19.36C155.147 17.84 154.68 16.5733 153.747 15.56C152.827 14.5333 151.64 14.02 150.187 14.02C148.734 14.02 147.547 14.5333 146.627 15.56C145.72 16.5733 145.267 17.84 145.267 19.36C145.267 20.88 145.72 22.1533 146.627 23.18C147.547 24.1933 148.734 24.7 150.187 24.7Z"></path>
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
    { name: "Expertises", href: "#expertises" },
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" },
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
            <Link href="/" aria-label="Home page">
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
                <span>Get Results</span>
                <span className="text-xl">🔥</span>
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
                <span>Get Results</span>
                <span className="text-2xl">🔥</span>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}