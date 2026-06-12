export default function CustomsComplianceSection() {
  return (
    <section id="customs" className="bg-[#07080A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Customs, Clearing &amp; Global Compliance</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Regulatory Excellence</h2>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-white/70">
            <p>
              As the global marketplace evolves, our dedicated team of customs brokers and clearing agents provides expert guidance on national and regional procedures. We maintain comprehensive knowledge of East African Community (EAC) customs regulations, World Customs Organization standards, and bilateral trade agreements.
            </p>
            <p>
              Our compliance team stays current with evolving regulatory requirements, ensuring all shipments meet documentation standards and procedural mandates &mdash; preventing delays and reducing duty burdens through proper classification.
            </p>
          </div>

          <div className="rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Services Include</div>
            <div className="space-y-3">
              {[
                'HS code classification',
                'Tax assessment and duty optimization',
                'Expert handling of controlled goods',
                'EDI customs procedures and declaration filing',
                'EAC, WCO, and bilateral trade agreement compliance',
                'Proactive documentation management to prevent delays',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs md:text-sm text-white/75">
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
