'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [metrics, setMetrics] = useState({
    corridors: 0,
    shipments: 0,
    compliance: 0,
    alerts: 7,
    countries: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateMetrics();
      }
    }, { threshold: 0.1 });

    const navElement = document.querySelector('[data-metrics]');
    if (navElement) observer.observe(navElement);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const animateMetrics = () => {
    const targets = { corridors: 18, shipments: 1240, compliance: 99, countries: 4 };
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setMetrics((prev) => ({
        ...prev,
        corridors: Math.floor(targets.corridors * progress),
        shipments: Math.floor(targets.shipments * progress),
        compliance: Math.floor(targets.compliance * progress),
        countries: Math.floor(targets.countries * progress),
      }));

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <>
      {/* Ticker Strip */}
      <div className="overflow-hidden border-b border-white/10 bg-[#C9A84C]">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="animate-ticker flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[#07080A]">
            {['Executive Architecture', 'Regional Corridors', 'Fleet Excellence', 'Cold Chain', 'Customs Compliance', 'Warehousing', 'Tracking', 'Trade Visibility'].map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                {item}
                <span className="text-[#1A3A6B]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#07080A]/95 backdrop-blur-lg border-b border-white/10' : 'bg-[#07080A] border-b border-white/20'}`}>
        <div className="mx-auto max-w-7xl px-4 py-0">
          <div className="flex items-stretch divide-x divide-white/10">
            {/* LEFT ZONE — Logo Panel */}
            <div className="flex w-[220px] items-center gap-3 border-r border-white/10 border-b-[3px] border-b-[#C9A84C] px-6 py-4 bg-[#0A0B0E]">
              <img src="/altovex-logo.jpg" alt="Altovex Global Logistics logo" className="h-10 w-10 rounded-lg object-cover shadow-md animate-pulse-glow" />
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-white">Altovex Global Logistics</div>
                <div className="text-[0.65rem] uppercase tracking-wider text-[#C9A84C]">Executive Architecture</div>
              </div>
            </div>

            {/* MIDDLE ZONE — Dashboard Metrics */}
            <div className="flex flex-1 items-stretch divide-x divide-white/10" data-metrics>
              {[
                { label: 'Corridors', value: metrics.corridors.toString(), icon: '🛣️' },
                { label: 'Shipments', value: metrics.shipments.toString(), icon: '📦' },
                { label: 'Compliance', value: `${metrics.compliance}%`, icon: '🛡️' },
                { label: 'Alerts', value: metrics.alerts.toString(), icon: '🔔', color: 'red' },
                { label: 'Countries', value: metrics.countries.toString(), icon: '🌍', live: true },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-1 items-center gap-3 px-6 py-4">
                  <span className="text-xl">{metric.icon}</span>
                  <div className="flex-1">
                    <div className={`text-sm font-bold ${metric.color === 'red' ? 'text-red-400' : metric.live ? 'text-[#C9A84C]' : 'text-white'}`}>
                      {metric.value}
                      {metric.live && <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />}
                    </div>
                    <div className="text-[0.7rem] uppercase tracking-wider text-white/50">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT ZONE — Nav Links + CTA */}
            <div className="hidden items-center gap-6 px-6 lg:flex">
              {['Architecture', 'Network', 'Fleet', 'Compliance', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-[#C9A84C]">
                  {link}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#C9A84C] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#07080A] transition-transform hover:scale-105">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
