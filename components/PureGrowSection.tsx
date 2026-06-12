export default function PureGrowSection() {
  const solutions = [
    {
      title: 'Affordable Farm Tools & Equipment',
      text: 'We source and supply high-quality, cost-effective farming tools and implements from global manufacturers, enabling small-scale farmers to enhance productivity while minimizing investment costs. Portfolio includes hand tools, irrigation systems, and basic farm machinery.',
    },
    {
      title: 'Farm Mechanization Solutions',
      text: 'From tractors and harvesters to specialized processing equipment, we provide comprehensive mechanization packages that transform agricultural operations from labor-intensive to efficiency-driven enterprises.',
    },
    {
      title: 'FMCG Hygiene Product Manufacturing',
      text: 'Complete turnkey projects for sanitary pads, diapers, incontinence products, soaps, lotions, and cosmetics production — covering equipment sourcing, installation, commissioning, operator training, and maintenance support.',
    },
    {
      title: 'Scalable Production Plants',
      text: 'We design and implement scalable production facilities, from cottage-level proof-of-concept units to full-scale manufacturing plants, ensuring seamless growth from initial concept to commercial production.',
    },
  ];

  return (
    <section id="pure-grow" className="bg-[#07080A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Global Sourcing &amp; Agricultural Trading</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Pure Grow Initiative</h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
            Our &ldquo;Pure Grow&rdquo; initiative facilitates access to international suppliers for agricultural equipment and machinery. We manage the complete procurement process, focusing on FMCG cottage industry equipment and cross-border agricultural produce commodities trading.
          </p>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
            Our trading division specializes in coffee, tea, spices, grains, and horticultural products &mdash; ensuring quality standards and fair trade practices. We handle all aspects of international trade documentation, quality certification, and logistics coordination. By bridging global supply chains with local agricultural enterprises, we contribute to regional economic development while creating value for producers and consumers across international markets.
          </p>
        </div>

        <div className="mb-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
          Agri-FMCG Turnkey Solutions &mdash; Complete Production Plant Implementation
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
          {solutions.map((item, index) => (
            <article key={item.title} className="rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 hover:border-[#C9A84C]/30 transition-colors">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">0{index + 1}</div>
              <h3 className="text-lg md:text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-xs md:text-sm leading-6 md:leading-7 text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
