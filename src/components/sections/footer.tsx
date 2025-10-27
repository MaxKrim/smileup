import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

const WaveSvg = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-px">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className="relative block w-full h-[160px]"
      fill="#F4EFE6"
    >
      <path d="M0,80 C400,160 800,0 1440,50 V0 H0 Z" />
    </svg>
  </div>
);

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#0EA5E9] hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#F5F1ED] text-[#1A1A1A] overflow-hidden pt-40 lg:pt-48 pb-12">
      <WaveSvg />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:justify-self-start">
            <Link href="/">
              <div className="flex flex-col gap-2">
                <span className="text-6xl">🦷</span>
                <span
                  className="text-black text-[32px] font-medium leading-none"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.06em' }}
                >
                  Smile UP
                </span>
                <span className="text-sm text-black/60">Laboratoire d'Orthodontie</span>
              </div>
            </Link>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:justify-self-center">
            <nav className="flex flex-col gap-3 text-center lg:text-left">
              <Link href="/#intro-home" className="text-lg text-black/80 hover:text-black transition-colors">À propos</Link>
              <Link href="/#expertises" className="text-lg text-black/80 hover:text-black transition-colors">Expertises</Link>
              <Link href="/#work" className="text-lg text-black/80 hover:text-black transition-colors">Réalisations</Link>
              <Link href="/#contact" className="text-lg text-black/80 hover:text-black transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:justify-self-end flex flex-col gap-6 text-base text-center lg:text-right">
            <div>
              <p className="font-bold text-black mb-3 text-lg">Jessica Lerandy-Estevez</p>
              <a 
                href="mailto:jessica.lerandyestevez@gmail.com" 
                className="flex items-center justify-center lg:justify-end gap-2 text-black/80 hover:text-[#0EA5E9] transition-colors mb-2"
              >
                <Mail size={18} />
                <span>jessica.lerandyestevez@gmail.com</span>
              </a>
              <a 
                href="tel:+33777995315" 
                className="flex items-center justify-center lg:justify-end gap-2 text-black/80 hover:text-[#0EA5E9] transition-colors"
              >
                <Phone size={18} />
                <span>+33 7 77 99 53 15</span>
              </a>
            </div>
            
            <div>
              <p className="font-medium text-black mb-3">Suivez-moi</p>
              <div className="flex gap-2.5 justify-center lg:justify-end">
                <SocialLink href="https://www.instagram.com/jessica_lrdy/"><Instagram size={20} /></SocialLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/60 gap-4">
          <p>© {new Date().getFullYear()} Smile UP Orthodontie - Jessica Lerandy-Estevez</p>
          <Link href="#" className="hover:text-black transition-colors">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}