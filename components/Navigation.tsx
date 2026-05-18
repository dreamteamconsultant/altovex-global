'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
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
      <div className="fixed right-4 top-20 z-50 md:hidden">
        <ThemeToggle />
      </div>

      {/* Ticker Strip */}
      <div className="overflow-hidden border-b border-border bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="animate-ticker flex items-center gap-6 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground md:gap-8 md:text-sm">
            {['Executive Architecture', 'Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Tracking', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-primary">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/92 text-foreground backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4">
            <div className="min-w-0">
              <BrandLogo scrolled={isScrolled} />
            </div>

            <div className="hidden min-w-0 items-center justify-center gap-6 lg:flex xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 justify-self-end">
              <ThemeToggle compact />
              <a
                href="tel:+254708157713"
                className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary md:inline-flex"
              >
                +254 708 157 713
              </a>
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_12px_30px_var(--glow)] transition-all hover:scale-105 sm:inline-flex"
              >
                Book Service
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-border py-4 lg:hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Theme</span>
                  <ThemeToggle compact />
                </div>

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

                <a
                  href="tel:+254708157713"
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  +254 708 157 713
                </a>

                <Link
                  href="/contact"
                  className="mt-4 block w-full rounded-full bg-primary px-4 py-3 text-center font-bold uppercase tracking-[0.22em] text-primary-foreground transition-all hover:scale-[1.01]"
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