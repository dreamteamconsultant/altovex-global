export default function ComplianceWarehousingSection() {
  return (
    <section id="compliance" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A3A6B]">Cold Chain & Customs Compliance</div>
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">Specialized cargo, regulated movement, and secure warehousing.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-6 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#07080A]">Pharmaceutical Excellence</h3>
            <p className="mt-4 text-sm leading-7 text-[#07080A]/70">
              Our dedicated Cold Chain Transport Medium is engineered for the pharmaceutical and fresh produce industries with refrigerated fleet controls ranging from deep freeze to ambient conditions and continuous compliance reporting.
            </p>
          </article>

          <article className="rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-6 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#07080A]">Customs Compliance</h3>
            <p className="mt-4 text-sm leading-7 text-[#07080A]/70">
              Our customs brokers and clearing agents support HS code classification, tax assessment, controlled goods handling, global trade compliance, and EDI customs procedures for efficient declaration filing.
            </p>
          </article>

          <article className="rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-6 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#07080A]">Elite Warehousing</h3>
            <p className="mt-4 text-sm leading-7 text-[#07080A]/70">
              Short- and long-term storage solutions with secure intake, structured placement, climate-controlled zones, fire suppression, stock visibility, kitting, assembly, and bonded warehousing for imports.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-[#C9A84C]/20 bg-[#1A3A6B]/5 p-6 text-sm leading-7 text-[#07080A]/70">
          Clients benefit from dedicated live dashboards that display real-time location, temperature monitoring, humidity tracking, route progress, and automated deviation alerts in one unified interface, enabling faster intervention when conditions change.
        </div>
      </div>
    </section>
  );
}
