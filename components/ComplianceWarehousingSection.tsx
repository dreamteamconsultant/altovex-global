export default function ComplianceWarehousingSection() {
  return (
    <section id="compliance" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">The Cold Chain, Customs &amp; Warehousing</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07080A]">Specialized cargo, regulated movement, and secure warehousing.</h2>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Cold Chain */}
          <article className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6 hover:border-[#07080A]/20 transition-colors">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Cold Chain</div>
            <h3 className="text-lg md:text-2xl font-bold text-[#07080A]">Pharmaceutical &amp; Fresh Produce Excellence</h3>
            <p className="mt-4 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
              Our dedicated Cold Chain Transport Medium is specifically engineered for the pharmaceutical and fresh produce industries. This system utilizes the latest technology in tracking and temperature logging to ensure compliance and quality throughout the entire transit duration.
            </p>
            <p className="mt-3 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
              Our refrigerated fleet maintains precise temperature controls ranging from deep freeze to ambient conditions. Continuous monitoring systems record temperature data at regular intervals, generating compliance reports for regulatory authorities and quality assurance teams.
            </p>
            <p className="mt-3 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
              Specialized handling protocols ensure sensitive pharmaceuticals, vaccines, biological samples, and premium fresh produce maintain their integrity from origin to destination.
            </p>
          </article>

          {/* Customs Compliance */}
          <article className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6 hover:border-[#07080A]/20 transition-colors">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Customs, Clearing &amp; Global Compliance</div>
            <h3 className="text-lg md:text-2xl font-bold text-[#07080A]">Regulatory Excellence</h3>
            <p className="mt-4 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
              As the global marketplace evolves, our dedicated team of customs brokers and clearing agents provides expert guidance on national and regional procedures. We maintain comprehensive knowledge of East African Community (EAC) customs regulations, World Customs Organization standards, and bilateral trade agreements.
            </p>
            <div className="mt-4 space-y-2">
              {[
                'HS code classification',
                'Tax assessment & duty optimization',
                'Expert handling of controlled goods',
                'EDI customs procedures & declaration filing',
                'EAC, WCO & bilateral trade compliance',
                'Proactive documentation management',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs md:text-sm text-[#07080A]/75">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Warehousing */}
          <article className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6 sm:col-span-2 lg:col-span-1 hover:border-[#07080A]/20 transition-colors">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Elite Warehousing &amp; Inventory Storage</div>
            <h3 className="text-lg md:text-2xl font-bold text-[#07080A]">Secure Storage Solutions</h3>
            <p className="mt-4 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
              We offer short- and long-term storage solutions for household and commercial goods. Our warehousing systems include cargo labeling, crating, fumigation, and pest control &mdash; ensuring that your assets are maintained in a secure, controlled environment pending distribution.
            </p>
            <div className="mt-4 space-y-2">
              {[
                'Climate-controlled storage zones',
                'Advanced 24/7 security monitoring',
                'Fire suppression technologies',
                'Real-time inventory & stock visibility',
                'Automated reorder alerts & audit trails',
                'Kitting, assembly, inspection, repackaging',
                'Bonded warehousing for imported goods',
                'Secure vaults for high-value items',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs md:text-sm text-[#07080A]/75">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-lg md:rounded-2xl border border-[#C9A84C]/20 bg-[#1A3A6B]/5 p-4 md:p-6 text-xs md:text-sm leading-6 md:leading-7 text-[#07080A]/70">
          Our compliance team stays current with evolving regulatory requirements, ensuring all shipments meet documentation standards and procedural mandates &mdash; preventing delays and reducing duty burdens through proper classification, while addressing the growing demand for temperature-sensitive logistics in East Africa&apos;s expanding healthcare and agricultural sectors.
        </div>
      </div>
    </section>
  );
}
