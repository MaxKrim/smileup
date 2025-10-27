import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Music } from 'lucide-react';

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
    className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#F5F1ED] text-[#1A1A1A] overflow-hidden pt-40 lg:pt-48 pb-12">
      <WaveSvg />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 mb-24">
          {/* Column 1: Logo */}
          <div className="lg:justify-self-start">
            <Link href="/">
              <span
                className="text-black text-[52px] font-medium leading-none"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.06em' }}
              >
                GETHYPED
              </span>
            </Link>
          </div>

          {/* Column 2: Nav & Socials */}
          <div className="lg:justify-self-center flex flex-col items-center sm:flex-row sm:items-start gap-10 sm:gap-16">
            <nav className="flex flex-col gap-3 text-center sm:text-left">
              <Link href="/expertises" className="text-lg text-black/80 hover:text-black transition-colors">Expertises</Link>
              <Link href="/work" className="text-lg text-black/80 hover:text-black transition-colors">Work</Link>
              <Link href="/about" className="text-lg text-black/80 hover:text-black transition-colors">About</Link>
              <Link href="/contact" className="text-lg text-black/80 hover:text-black transition-colors">Contact</Link>
            </nav>
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="font-medium text-black text-lg">Follow us</p>
              <div className="flex gap-2.5">
                <SocialLink href="#"><Linkedin size={22} /></SocialLink>
                <SocialLink href="#"><Music size={22} /></SocialLink> {/* TikTok fallback */}
                <SocialLink href="#"><Instagram size={22} /></SocialLink>
                <SocialLink href="#"><Youtube size={22} /></SocialLink>
              </div>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:justify-self-end flex flex-col gap-8 text-base text-center lg:text-right">
            <div>
              <p className="font-bold text-black mb-1">Contact</p>
              <a href="mailto:info@gethyped.nl" className="block text-black/80 hover:text-black transition-colors">info@gethyped.nl</a>
              <a href="tel:+31615337496" className="block text-black/80 hover:text-black transition-colors">+31 6 1533 7496</a>
            </div>
            <div>
              <p className="font-bold text-black mb-1">Adres</p>
              <address className="not-italic text-black/80">
                Beltrumsestraat 6,<br />
                7141 AL Groenlo
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/60 gap-4">
          <p>© 2025 Get Hyped</p>
          <Link href="#" className="hover:text-black transition-colors">Privacyvoorwaarden</Link>
        </div>
      </div>
    </footer>
  );
}