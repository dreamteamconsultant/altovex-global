export default function RegionalNetworkSection() {
  const corridors = [
    {
      name: 'Kenya',
      cities: 'Nairobi + Mombasa',
      note: 'East African gateway and coastal trade anchor',
    },
    {
      name: 'Uganda',
      cities: 'Kampala',
      note: 'Landlocked corridor connection and inland transit control',
    },
    {
      name: 'Zambia',
      cities: 'Lusaka + Ndola',
      note: 'SADC extension with strong southern corridor reach',
    },
  ];

  return (
    <section id="network" className="bg-[#07080A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Pan-Regional Network & Strategic Corridors</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Regional coverage that connects markets and borders.</h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
            Our operations in Kenya, Uganda, and Zambia provide critical local expertise backed by a robust regional framework. We offer a seamless connection between major East African cities, unified into a single high-efficiency network that ensures timely cargo haulage for our elite client base.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {corridors.map((corridor, index) => (
            <article key={corridor.name} className="rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 hover:border-[#C9A84C]/30 transition-colors">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">0{index + 1}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{corridor.name}</h3>
              <div className="mt-2 text-base md:text-lg text-white/80">{corridor.cities}</div>
              <p className="mt-4 text-xs md:text-sm leading-6 md:leading-7 text-white/60">{corridor.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
