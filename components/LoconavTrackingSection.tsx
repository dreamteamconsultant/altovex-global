export default function LoconavTrackingSection() {
  return (
    <section id="tracking" className="bg-[#07080A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Intelligent Supply Chain & Real-Time Data</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Technology &amp; Tracking Excellence &mdash; End-to-end visibility, transparency, and control.</h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
              We invest in advanced systems for real-time tracking and transparency. Our precision trackers and online data portals provide actionable data, ensuring the safety of perishables and high-value shipments with 24/7 visibility &mdash; enabling critical business decisions based on real-time logistics intelligence.
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
              Our technology infrastructure integrates IoT sensors, GPS tracking, and cloud-based analytics to deliver comprehensive shipment visibility. Clients access dedicated dashboards displaying live location tracking, temperature monitoring, humidity levels, estimated arrival times, automated deviation alerts, and route progress visibility.
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
              Our 4K ultra HD video telematic monitoring adds an additional layer of cargo security and chain-of-custody verification.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
