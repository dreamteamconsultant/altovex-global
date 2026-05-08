'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

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

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Network', href: '/network' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Ticker Strip */}
      <div className={`overflow-hidden border-b transition-colors duration-300 ${isScrolled ? 'border-white/10 bg-[#07080A]' : 'border-[#07080A]/10 bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className={`animate-ticker flex items-center gap-6 whitespace-nowrap text-xs font-bold uppercase tracking-widest md:gap-8 md:text-sm ${isScrolled ? 'text-white/70' : 'text-[#07080A]/70'}`}>
            {['Executive Architecture', 'Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Tracking', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-8">
                {item}
                <span className={isScrolled ? 'text-[#C9A84C]' : 'text-[#1A3A6B]'}>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'border-white/10 bg-[#07080A]/95 text-white backdrop-blur-lg' : 'border-[#07080A]/10 bg-white/90 text-[#07080A] backdrop-blur-md'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* LEFT — Logo */}
            <div className="flex items-center gap-3">
              <BrandLogo scrolled={isScrolled} />
            </div>

            {/* CENTER — Desktop Nav Links */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#C9A84C] ${isScrolled ? 'text-white/70' : 'text-[#07080A]/70'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT — Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] transition-all hover:scale-105 lg:inline-flex ${isScrolled ? 'bg-white text-[#07080A] shadow-[0_12px_30px_rgba(255,255,255,0.08)]' : 'bg-[#07080A] text-white shadow-[0_12px_30px_rgba(7,8,10,0.08)]'}`}
              >
                Book Service
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center rounded-full border p-2 transition-colors hover:border-[#C9A84C] lg:hidden ${isScrolled ? 'border-white/15 text-white' : 'border-[#07080A]/15 text-[#07080A]'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`border-t py-4 lg:hidden ${isScrolled ? 'border-white/10' : 'border-[#07080A]/10'}`}>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition-colors ${isScrolled ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-[#07080A]/70 hover:bg-[#07080A]/5 hover:text-[#07080A]'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 block w-full rounded-full bg-[#07080A] px-4 py-3 text-center font-bold uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.01]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Service
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
