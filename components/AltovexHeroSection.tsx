export default function AltovexHeroSection() {
  return (
    <section id="architecture" className="relative overflow-hidden bg-[#07080A] py-28">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(201,168,76,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#C9A84C] opacity-10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1A3A6B] opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-sm font-semibold text-[#C9A84C]">
              Altovex Global Logistics Company Limited
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Precision-led logistics for{' '}
              <span className="text-[#C9A84C]">agri commodity trading</span>, transport, and regional supply chains.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Built on disciplined executive architecture, Altovex coordinates import and export movement across Kenya, Uganda, Zambia, East Africa, SADC, and beyond with clarity, control, and trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center bg-[#C9A84C] px-8 py-4 font-bold uppercase tracking-wider text-[#07080A] transition-transform hover:scale-105">
                Request Consultation
              </a>
              <a href="#fleet" className="inline-flex items-center border-2 border-[#C9A84C] px-8 py-4 font-bold uppercase tracking-wider text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#07080A]">
                Explore Fleet
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ['Kenya', 'Nairobi + Mombasa'],
                ['Uganda', 'Kampala corridor'],
                ['Zambia', 'Lusaka + Ndola'],
                ['Reach', 'East Africa + SADC'],
              ].map(([title, value]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/50">{title}</div>
                  <div className="mt-2 text-sm font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Regional Control Desk</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Trade Flow', value: 'Active' },
                { label: 'Route Visibility', value: 'Live' },
                { label: 'Cold Chain', value: 'Monitored' },
                { label: 'Compliance', value: 'Managed' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-[#0A0B0E] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</div>
                  <div className="mt-2 text-lg font-bold text-[#C9A84C]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-[#C9A84C]/20 bg-[#07080A] p-5 text-sm leading-7 text-white/70">
              Every function within Altovex is aligned to support performance, responsiveness, and the standards expected of a world-class logistics enterprise.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
