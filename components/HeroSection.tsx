'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [stats, setStats] = useState({ farmers: 0, countries: 0, yield: 0, experience: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) animateStats();
    }, { threshold: 0.3 });

    const hero = document.querySelector('[data-hero-stats]');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = { farmers: 500, countries: 15, yield: 40, experience: 10 };
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        farmers: Math.floor(targets.farmers * progress),
        countries: Math.floor(targets.countries * progress),
        yield: Math.floor(targets.yield * progress),
        experience: Math.floor(targets.experience * progress),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <section className="relative overflow-hidden bg-[#07080A] py-28">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(201,168,76,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.1)_1px,transparent_1px)] [background-size:64px_64px] animate-grid-drift" />

      {/* Floating orbs */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C9A84C] opacity-10 blur-3xl animate-float" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#1A3A6B] opacity-15 blur-3xl animate-float animation-delay-2" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* LEFT — Headline + CTAs */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-sm font-semibold text-[#C9A84C]">Africa's Leading AgriTech Partner</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Powering{' '}
              <span className="inline-flex min-h-[1.2em] flex-col overflow-hidden text-[#C9A84C]">
                <span className="animate-word-cycle flex flex-col leading-tight">
                  <span>Water Solutions</span>
                  <span>Crop Analytics</span>
                  <span>Supply Chains</span>
                  <span>Smart Farming</span>
                  <span>Food Security</span>
                </span>
              </span>
              {' '}Across Africa
            </h1>

            <p className="mb-8 max-w-xl text-lg text-white/70">
              Partner with Africa's most trusted agritech platform. We help farming enterprises gain real-time visibility, reduce waste, and unlock sustainable growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group relative inline-flex items-center overflow-hidden bg-[#C9A84C] px-8 py-4 font-bold uppercase text-[#07080A] transition-transform hover:scale-105">
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Start Free Consultation</span>
              </a>
              <a href="#projects" className="inline-flex items-center border-2 border-[#C9A84C] px-8 py-4 font-bold uppercase text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#07080A]">
                View Our Work →
              </a>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4" data-hero-stats>
              {[
                { label: '500+', desc: 'Farmers', icon: '👨‍🌾' },
                { label: '15', desc: 'Countries', icon: '🌍' },
                { label: '40%', desc: 'Avg Yield', icon: '📈' },
                { label: '10yr', desc: 'Experience', icon: '⏰' },
              ].map((stat) => (
                <div key={stat.desc} className="border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-2xl">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#C9A84C]">{stat.label}</div>
                  <div className="text-xs uppercase text-white/50">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dashboard Preview */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A0B0E] to-[#07080A] p-8 shadow-2xl">
              {/* macOS style header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-semibold text-white/50">AgriOS — Live Dashboard</div>
              </div>

              {/* Metric chips */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {[
                  { label: 'Water', value: '14.2k', color: 'blue' },
                  { label: 'Farms', value: '512', color: 'green' },
                  { label: 'Revenue', value: '$2.8M', color: 'gold' },
                  { label: 'AI Accuracy', value: '96.4%', color: 'purple' },
                ].map((chip) => (
                  <div key={chip.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="text-xs text-white/50">{chip.label}</div>
                    <div className="text-xl font-bold text-white">{chip.value}</div>
                  </div>
                ))}
              </div>

              {/* Animated Chart */}
              <div className="h-40 rounded-lg border border-white/10 bg-[#0A0B0E] p-4">
                <svg viewBox="0 0 300 120" className="w-full" aria-hidden="true">
                  {/* Grid lines */}
                  <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                  {/* Bar chart with animation */}
                  {[
                    { x: 40, height: 60 },
                    { x: 90, height: 50 },
                    { x: 140, height: 80 },
                    { x: 190, height: 70 },
                    { x: 240, height: 85 },
                  ].map((bar, i) => (
                    <rect key={i} x={bar.x} y={100 - bar.height} width="30" height={bar.height} fill="rgba(201,168,76,0.6)" className="animate-chart-bar" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}

                  {/* Line overlay */}
                  <polyline points="55,45 105,55 155,25 210,40 255,20" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-sparkline" />

                  {/* Pulsing dot at end */}
                  <circle cx="255" cy="20" r="4" fill="#C9A84C" className="animate-pulse-dot" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
