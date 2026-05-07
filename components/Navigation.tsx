'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['Architecture', 'Network', 'Fleet', 'Compliance', 'Contact'];

  return (
    <>
      {/* Ticker Strip */}
      <div className="overflow-hidden border-b border-white/10 bg-[#C9A84C]">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="animate-ticker flex items-center gap-6 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#07080A] md:gap-8 md:text-sm">
            {['Executive Architecture', 'Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Tracking', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-[#1A3A6B]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#07080A]/95 backdrop-blur-lg border-b border-white/10' : 'bg-[#07080A] border-b border-white/20'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* LEFT — Logo */}
            <div className="flex items-center gap-3">
              <img src="/altovex-logo.jpg" alt="Altovex Global Logistics logo" className="h-10 w-10 rounded-lg object-cover shadow-md animate-pulse-glow" />
              <div className="hidden sm:block">
                <div className="text-xs font-semibold uppercase tracking-wider text-white">Altovex Global</div>
                <div className="text-[0.65rem] uppercase tracking-wider text-[#C9A84C]">Logistics & Transport</div>
              </div>
            </div>

            {/* CENTER — Desktop Nav Links */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-[#C9A84C]"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* RIGHT — Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-lg bg-[#C9A84C] px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#07080A] transition-all hover:shadow-lg hover:shadow-[#C9A84C]/50 hover:scale-105 lg:inline-flex"
              >
                Book Service
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 p-2 transition-colors hover:border-[#C9A84C] lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-white/10 py-4 lg:hidden">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:bg-white/5 hover:text-[#C9A84C]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-4 block w-full rounded-lg bg-[#C9A84C] px-4 py-3 text-center font-bold uppercase tracking-wider text-[#07080A] transition-all hover:shadow-lg hover:shadow-[#C9A84C]/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Service
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
