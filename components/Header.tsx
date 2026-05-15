'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Network', href: '/network' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-[#0B1929] to-[#0F2A47]/95 backdrop-blur-sm z-50 border-b border-[#C9A84C]/20">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#C9A84C] to-[#00A8FF] rounded-lg flex items-center justify-center text-[#0A0A0A] font-bold text-lg">
              D
            </div>
            <span className="font-sans font-bold text-2xl text-white">
              Dream<span className="text-[#C9A84C]">Team</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white/80 font-medium hover:text-[#C9A84C] transition-colors relative group text-sm"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A84C] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
          </button>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#0B1929]/95 border-b border-[#C9A84C]/20 md:hidden">
              <ul className="flex flex-col list-none p-4 gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/80 font-medium hover:text-[#C9A84C] transition-colors block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
