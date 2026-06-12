'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import Socials from '@/components/Socials';

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

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Mission & Vision', href: '/mission-vision' },
    { label: 'Network', href: '/network' },
    { label: 'Services', href: '/services' },
    { label: 'Pure Grow', href: '/pure-grow' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      

      {/* Ticker Strip */}
      <div className="overflow-hidden border-b border-[#07080A]/10 bg-white dark:border-white/10 dark:bg-[#0B1929] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="animate-ticker flex items-center gap-6 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#07080A]/80 dark:text-white/85 md:gap-8 md:text-sm">
            {['Executive Architecture', 'Pan-Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Pure Grow Initiative', 'Prefab Solutions', 'Last-Mile Precision', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-[#C9A84C]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-[#07080A]/10 bg-white dark:border-white/10 dark:bg-[#0B1929]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <span className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#07080A]/55 dark:text-white/55 sm:block">
            Follow Altovex
          </span>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:inline-flex">
              <ThemeToggle />
            </div>
            <div className="hidden md:flex">
              <Socials compact />
            </div>
            <div className="md:hidden">
              {/* on mobile the theme toggle & socials live in the menu to avoid crowding */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-[#07080A]/10 bg-white text-[#07080A] shadow-[0_2px_18px_rgba(7,8,10,0.06)] dark:border-white/10 dark:bg-[#07080A] dark:text-white dark:shadow-[0_2px_18px_rgba(0,0,0,0.5)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4">
            <div className="min-w-0 relative z-20">
              <BrandLogo scrolled={isScrolled} />
            </div>

            <div className="hidden min-w-0 items-center justify-center gap-6 lg:flex xl:gap-8 relative z-0 lg:pl-20 xl:pl-28">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-[#07080A]/80 transition-colors hover:text-[#1A3A6B] dark:text-white/85 dark:hover:text-[#C9A84C]"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto block h-0.5 w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 justify-self-end">
              <a
                href="tel:+254718554383"
                className="hidden rounded-full border border-[#07080A]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#07080A]/80 transition-colors hover:border-[#C9A84C] hover:text-[#1A3A6B] dark:border-white/15 dark:text-white/85 dark:hover:text-[#C9A84C] md:inline-flex"
              >
                +254 718 554 383
              </a>
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#07080A] shadow-[0_12px_30px_rgba(201,168,76,0.35)] transition-all hover:scale-105 hover:shadow-[0_14px_36px_rgba(201,168,76,0.5)] sm:inline-flex"
              >
                Book Service
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-full border border-[#07080A]/15 p-2 text-[#07080A] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C] dark:border-white/15 dark:text-white lg:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <aside className="fixed right-0 top-0 h-full w-10/12 max-w-xs bg-card p-6 shadow-2xl transform transition-transform duration-300 z-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold">Menu</div>
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="rounded-full p-2 hover:bg-muted">
                    <X size={18} />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-border bg-background/50 px-4 py-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Theme</span>
                    <ThemeToggle compact />
                  </div>

                  <nav className="space-y-2">
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
                  </nav>

                  <a href="tel:+254708157713" className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    +254 708 157 713
                  </a>

                  <Link href="/contact" className="mt-2 block w-full rounded-full bg-primary px-4 py-3 text-center font-bold uppercase tracking-[0.22em] text-primary-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Service
                  </Link>

                  <div className="pt-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">Follow Altovex</div>
                    <Socials compact />
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}