export default function ColdChainSection() {
  return (
    <section id="cold-chain" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">The Cold Chain &amp; Specialized Cargo</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07080A]">Pharmaceutical &amp; Fresh Produce Excellence</h2>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-[#07080A]/72">
            <p>
              Our dedicated Cold Chain Transport Medium is specifically engineered for the pharmaceutical and fresh produce industries. This system utilizes the latest technology in tracking and temperature logging to ensure compliance and quality throughout the entire transit duration.
            </p>
            <p>
              Our refrigerated fleet maintains precise temperature controls ranging from deep freeze to ambient conditions, accommodating diverse product requirements. Continuous monitoring systems record temperature data at regular intervals, generating compliance reports for regulatory authorities and quality assurance teams.
            </p>
            <p>
              Specialized handling protocols ensure that sensitive pharmaceuticals, vaccines, biological samples, and premium fresh produce maintain their integrity from origin to destination &mdash; addressing the growing demand for temperature-sensitive logistics in East Africa&apos;s expanding healthcare and agricultural sectors.
            </p>
          </div>

          <div className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Cold Chain Capabilities</div>
            <div className="space-y-3">
              {[
                'Deep freeze to ambient temperature ranges',
                'Continuous temperature data logging',
                'Compliance reporting for regulators',
                'Pharmaceutical and vaccine handling',
                'Biological sample transport',
                'Premium fresh produce protection',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs md:text-sm text-[#07080A]/75">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
