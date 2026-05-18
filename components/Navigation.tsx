'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import BrandLogo from '@/components/BrandLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', next);
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('altovex-theme', next);
      }
    } catch (e) {
      // noop - fallback only
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
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
      <div className="overflow-hidden border-b border-border bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="animate-ticker flex items-center gap-6 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground md:gap-8 md:text-sm">
            {['Executive Architecture', 'Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Tracking', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-[#b8960c]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 text-foreground transition-colors duration-300 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4">
            {/* LEFT — Logo */}
            <div className="min-w-0">
              <BrandLogo scrolled={isScrolled} />
            </div>

            {/* CENTER — Desktop Nav Links */}
            <div className="hidden min-w-0 items-center justify-center gap-6 lg:flex xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#b8960c]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT — Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3 justify-self-end">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-[#b8960c] hover:text-[#b8960c] active:scale-95"
                aria-label="Toggle light and dark mode"
              >
                {mounted ? (isDark ? <SunMedium size={16} /> : <MoonStar size={16} />) : <MoonStar size={16} />}
              </button>

              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-[#b8960c] px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-white transition-all hover:scale-105 sm:inline-flex"
              >
                Book Service
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors hover:border-[#b8960c] lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-border py-4 lg:hidden">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span>{mounted ? (isDark ? 'Light mode' : 'Dark mode') : 'Theme'}</span>
                  {mounted ? (isDark ? <SunMedium size={18} /> : <MoonStar size={18} />) : <MoonStar size={18} />}
                </button>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 block w-full rounded-full bg-[#b8960c] px-4 py-3 text-center font-bold uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.01]"
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
