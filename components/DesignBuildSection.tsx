export default function DesignBuildSection() {
  const solutions = [
    {
      title: 'Cottage Prefab Housing',
      text: 'Beautiful yet affordable housing solutions using modern sandwich panels, EPS materials, and innovative construction techniques. Our prefab homes combine aesthetic appeal with rapid deployment and energy efficiency.',
    },
    {
      title: 'Livestock Housing Units',
      text: 'Specialized housing for poultry, dairy, and livestock operations featuring ventilation systems, automated feeding, and waste management solutions that optimize animal welfare and productivity.',
    },
    {
      title: 'Agricultural Kits & Structures',
      text: 'Greenhouses, storage facilities, processing units, and farm structures designed for easy assembly and optimal functionality using the latest prefabrication technologies.',
    },
    {
      title: 'Furniture & Interior Solutions',
      text: 'Modern, durable furniture and interior products manufactured using sustainable materials and innovative designs that balance aesthetics, functionality, and affordability.',
    },
  ];

  return (
    <section id="design-build" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">Design, Build &amp; Deploy Solutions</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07080A]">Modern Prefabrication Technologies</h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-[#07080A]/70">
            Altovex extends beyond logistics to deliver complete infrastructure and built-environment solutions using modern prefabrication technologies.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
          {solutions.map((item, index) => (
            <article key={item.title} className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6 hover:border-[#07080A]/20 transition-colors">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A3A6B]">0{index + 1}</div>
              <h3 className="text-lg md:text-2xl font-bold text-[#07080A]">{item.title}</h3>
              <p className="mt-3 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
