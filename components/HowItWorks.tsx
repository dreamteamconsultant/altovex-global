export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: "We understand your farm's unique challenges and goals through detailed discovery sessions.",
    },
    {
      number: '02',
      title: 'Solution Design',
      description: "We understand your farm's unique challenges and goals through detailed discovery sessions.",
    },
    {
      number: '03',
      title: 'Deployment',
      description: 'We handle full implementation, training, and system integration with your existing workflows.',
    },
    {
      number: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring and optimization to maximize ROI and operational efficiency.',
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">How We Work</h2>
          <p className="mt-4 text-lg text-[#07080A]/60">Our proven four-step process for agritech transformation</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="rounded-xl border border-[#07080A]/10 bg-[#07080A]/5 p-8 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C]/5">
                <div className="mb-4 text-4xl font-bold text-[#C9A84C]">{step.number}</div>
                <h3 className="mb-3 text-xl font-bold text-[#07080A]">{step.title}</h3>
                <p className="text-[#07080A]/60">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="text-3xl text-[#C9A84C]">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
