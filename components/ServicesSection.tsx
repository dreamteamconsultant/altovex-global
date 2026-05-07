export default function ServicesSection() {
  const services = [
    {
      title: 'Agriculture Enterprise Development',
      description: 'Complete farm management solutions, value chain optimization, cooperative formation, and market access strategies for sustainable agricultural businesses.',
      icon: '🌾',
      metrics: ['Farm Management', 'Value Chain', 'Market Access'],
      delay: '0s',
    },
    {
      title: 'Agritech & Fintech Solutions',
      description: 'Custom ERP systems, mobile applications, payment gateways, and financial technology integration tailored for the agricultural sector.',
      icon: '💳',
      metrics: ['ERP', 'Mobile Apps', 'Payments'],
      delay: '0.2s',
    },
    {
      title: 'IoT & AI Integration',
      description: 'Smart farming technologies, predictive analytics, automation solutions, and data-driven decision making for optimized agricultural operations.',
      icon: '🤖',
      metrics: ['Predictive AI', 'IoT', 'Automation'],
      delay: '0.4s',
    },
    {
      title: 'Urban Smart Solutions',
      description: 'EV adoption strategies, smart parking systems, circular economy solutions, and sustainable urban development consulting services.',
      icon: '🏙️',
      metrics: ['EV Strategy', 'Smart Cities', 'Circular Economy'],
      delay: '0.6s',
    },
    {
      title: 'Financial Consulting',
      description: 'Funding strategy development, investor pitch preparation, financial modeling, and business plan creation for agricultural enterprises.',
      icon: '📈',
      metrics: ['Funding', 'Modeling', 'Pitch Decks'],
      delay: '0.8s',
    },
    {
      title: 'Social Enterprise Development',
      description: 'Community empowerment programs, cooperative development, gender inclusion strategies, and sustainable development consulting.',
      icon: '🤝',
      metrics: ['Community', 'Inclusion', 'Sustainability'],
      delay: '1s',
    },
  ];

  return (
    <section id="services" className="relative bg-[#07080A] py-24">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_50%,rgba(201,168,76,0.15),transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg text-white/60">Comprehensive agritech solutions for every farming challenge</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:border-[#C9A84C]/50 hover:bg-white/[0.08] animate-float-card"
              style={{ animationDelay: service.delay }}
            >
              {/* Hover glow effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C9A84C] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

              <div className="relative z-10">
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 text-white/60">{service.description}</p>

                {/* Metrics */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.metrics.map((metric) => (
                    <span key={metric} className="rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C]">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="#contact" className="group/btn relative inline-flex w-full items-center justify-between overflow-hidden rounded-lg border border-[#C9A84C]/50 bg-transparent px-4 py-3 font-semibold uppercase text-[#C9A84C] transition-colors duration-300">
                  <span className="absolute inset-0 -translate-x-full bg-[#C9A84C] transition-transform duration-500 group-hover/btn:translate-x-0" />
                  <span className="relative group-hover/btn:text-[#07080A]">Learn More</span>
                  <span className="relative group-hover/btn:text-[#07080A]">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
