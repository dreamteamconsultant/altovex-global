export default function WarehousingSection() {
  return (
    <section id="warehousing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">Elite Warehousing &amp; Inventory Storage</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07080A]">Secure Storage Solutions</h2>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-[#07080A]/72">
            <p>
              We offer short- and long-term storage solutions for household and commercial goods. Our warehousing systems include cargo labeling, crating, fumigation, and pest control &mdash; ensuring that your assets are maintained in a secure, controlled environment pending distribution.
            </p>
            <p>
              Our facilities are equipped with advanced monitoring, climate control, and inventory management systems that provide real-time visibility, automated reorder alerts, and comprehensive audit trails. Value-added services such as kitting, assembly, quality inspection, and repackaging are available on demand.
            </p>
          </div>

          <div className="rounded-lg md:rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-5 md:p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">Facility Features</div>
            <div className="space-y-3">
              {[
                'Climate-controlled storage zones',
                'Advanced 24/7 security monitoring',
                'Fire suppression technologies',
                'Real-time inventory management and stock visibility',
                'Automated reorder alerts and comprehensive audit trails',
                'Value-added services: kitting, assembly, quality inspection, repackaging',
                'Bonded warehousing for imported goods',
                'Temperature-controlled zones for pharmaceuticals',
                'Secure vaults for high-value items',
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
