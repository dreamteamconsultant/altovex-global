export default function FleetExcellenceSection() {
  return (
    <section id="fleet" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">Fleet & Transport Excellence</div>
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">Heavy haulage and cross-border mastery.</h2>
          <p className="mt-4 text-lg leading-8 text-[#07080A]/70">
            Altovex maintains a dedicated transport fleet management division for fresh, dry, perishable, and customized special bulk goods. Using our own multipurpose trucks and trailers, plus partner and cargo lux platform capacity, we provide on-demand bulk cargo road transport.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: '5 to 35-tonne movers', text: 'Prime movers for trans-continental trips and heavy haulage.' },
            { title: '1 to 12-tonne vehicles', text: 'Regional distribution, bulk break, and last-mile delivery.' },
            { title: 'Refrigerated units', text: 'Cold chain cargo with precision temperature windows and safety safeguards.' },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-6">
              <h3 className="text-2xl font-bold text-[#07080A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#07080A]/65">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Tracking systems and video telematics',
            'Fuel monitoring and climate control',
            'Driver training in safety and compliance',
            'Controlled handover and pre-cooling protocols',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-[#07080A]/10 px-4 py-3 text-[#07080A]/75">
              <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
