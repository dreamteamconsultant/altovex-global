'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [stats, setStats] = useState([
    { value: 0, label: 'Farmers Transformed', suffix: '+' },
    { value: 0, label: 'Hectares Managed', suffix: '+' },
    { value: 0, label: 'Data Points Daily', suffix: 'M+' },
  ]);

  useEffect(() => {
    const targets = [250, 500, 8];
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setStats((prev) =>
        prev.map((stat, idx) => ({
          ...stat,
          value: Math.floor(targets[idx] * progress),
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B1929] via-[#0F2A47] to-[#0D1E35] text-white pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="animate-grid-drift" />
          </svg>
        </div>

        {/* Floating orbs - centered vertically */}
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#C9A84C] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00A8FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#1E3A5F] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-[#1A2940]/60 border border-[#C9A84C]/40 rounded-full text-[#C9A84C] text-sm font-medium backdrop-blur-sm">
              Transforming Agriculture with AI & IoT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of <span className="gradient-text">Farming</span> is Here
            </h1>
            <p className="text-lg md:text-xl text-[#888888] mb-10 leading-relaxed max-w-2xl mx-auto">
              Enterprise solutions for modern farming communities across Africa. We partner with you to unlock agricultural innovation and drive sustainable, profitable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#C9A84C] hover:bg-[#E0C080] text-[#0B1929] font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/architecture"
                className="px-8 py-4 border-2 border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#1A1A1A] border border-[#333333] rounded-xl text-center hover-gold-border transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-[#888888] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
