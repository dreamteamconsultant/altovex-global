'use client';

import { useEffect, useState } from 'react';

export default function DashboardMetrics() {
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

    const dashElement = document.querySelector('[data-dashboard-metrics]');
    if (dashElement) observer.observe(dashElement);

    return () => observer.disconnect();
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

  const metricsData = [
    { label: 'Active Corridors', value: metrics.corridors.toString(), icon: '🛣️', color: 'from-blue-500/20 to-blue-600/20' },
    { label: 'Shipments Tracked', value: metrics.shipments.toString(), icon: '📦', color: 'from-purple-500/20 to-purple-600/20' },
    { label: 'Compliance Rate', value: `${metrics.compliance}%`, icon: '🛡️', color: 'from-green-500/20 to-green-600/20' },
    { label: 'Active Alerts', value: metrics.alerts.toString(), icon: '🔔', color: 'from-red-500/20 to-red-600/20', highlight: true },
    { label: 'Countries Served', value: metrics.countries.toString(), icon: '🌍', color: 'from-yellow-500/20 to-yellow-600/20', live: true },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#07080A] via-[#0a0b10] to-[#07080A] py-16 md:py-24" data-dashboard-metrics>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(201,168,76,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.05)_1px,transparent_1px)] [background-size:64px_64px] animate-grid-drift" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#C9A84C] opacity-5 blur-3xl animate-float" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#1A3A6B] opacity-5 blur-3xl animate-float animation-delay-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Global Logistics Operations
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 md:text-base">
            Real-time visibility across Africa's leading supply chain network
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {metricsData.map((metric) => (
            <div
              key={metric.label}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${metric.color} p-6 backdrop-blur-sm transition-all hover:border-[#C9A84C]/50 hover:shadow-lg hover:shadow-[#C9A84C]/10`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl md:text-4xl">{metric.icon}</span>
                  {metric.live && (
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />
                      <span className="text-xs font-semibold text-[#C9A84C]">LIVE</span>
                    </div>
                  )}
                </div>

                <div className={`text-2xl font-bold md:text-3xl ${metric.highlight ? 'text-red-400' : metric.live ? 'text-[#C9A84C]' : 'text-white'}`}>
                  {metric.value}
                </div>

                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/60 md:text-sm">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 md:mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold uppercase tracking-[0.22em] text-[#07080A] transition-all hover:shadow-lg hover:shadow-white/20 hover:scale-105 md:px-8 md:py-4"
          >
            Book Service
            <span>→</span>
          </a>
          <a
            href="/architecture"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#07080A] md:px-8 md:py-4"
          >
            Learn More
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
