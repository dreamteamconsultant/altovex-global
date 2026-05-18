'use client';

import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export default function ThemeToggle({ className = '', compact = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  const applyTheme = (nextTheme: 'light' | 'dark') => {
    setTheme(nextTheme);

    try {
      document.documentElement.setAttribute('data-theme', nextTheme);
      document.documentElement.style.colorScheme = nextTheme;
      localStorage.setItem('altovex-theme', nextTheme);
    } catch (error) {
      // Ignore storage or DOM access failures and keep the UI functional.
    }
  };

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--primary)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${compact ? 'h-10 w-10' : 'h-11 w-11'} ${className}`}
    >
      <span className="sr-only">Toggle light and dark theme</span>
      <SunMedium
        size={compact ? 16 : 18}
        className={`absolute transition-all duration-300 ease-in-out ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      />
      <MoonStar
        size={compact ? 16 : 18}
        className={`absolute transition-all duration-300 ease-in-out ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
      />
    </button>
  );
}