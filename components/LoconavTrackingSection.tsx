export default function LoconavTrackingSection() {
  return (
    <section id="tracking" className="bg-[#07080A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Our Loconav Fleet Management Technology & Tracking Excellence</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">End-to-end real-time visibility, transparency, and operational control.</h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
              We invested in the Loconav advanced fleet management and tracking systems to deliver end-to-end real-time tracking, transparency, and operational control across our logistics network. Secure online data portals give clients live operational data, route progress, and exception alerts at any time.
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
              Clients benefit from dedicated live dashboards that display real-time location, temperature monitoring, humidity tracking, route progress, and automated deviation alerts in one unified interface.
            </p>
          </div>

          <div className="rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
            <div className="grid gap-3 md:gap-4 grid-cols-2">
              {[
                ['Location', 'Live'],
                ['Temperature', 'Monitored'],
                ['Humidity', 'Tracked'],
                ['Deviation', 'Alerted'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg md:rounded-xl border border-white/10 bg-[#0A0B0E] p-3 md:p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</div>
                  <div className="mt-2 text-lg md:text-xl font-bold text-[#C9A84C]">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-6 rounded-lg md:rounded-xl border border-[#C9A84C]/20 bg-[#07080A] p-4 md:p-5 text-xs md:text-sm leading-6 md:leading-7 text-white/70">
              Our 4K ultra HD video telematic monitoring adds another layer of cargo security and documentation, strengthening compliance and chain-of-custody verification.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
