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
    <section id="network" className="bg-[#07080A] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Pan-Regional Network & Strategic Corridors</div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Regional coverage that connects markets and borders.</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Our operations in Kenya, Uganda, and Zambia provide critical local expertise backed by a robust regional framework. We offer a seamless connection between major East African cities, unified into a single high-efficiency network that ensures timely cargo haulage for our elite client base.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {corridors.map((corridor, index) => (
            <article key={corridor.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">0{index + 1}</div>
              <h3 className="text-2xl font-bold text-white">{corridor.name}</h3>
              <div className="mt-2 text-lg text-white/80">{corridor.cities}</div>
              <p className="mt-4 text-sm leading-7 text-white/60">{corridor.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
