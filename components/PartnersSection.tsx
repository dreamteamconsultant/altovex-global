export default function PartnersSection() {
  const partners = ['AGRA', 'FAO', 'World Bank', 'USAID', 'AfDB', 'Safaricom', 'MTN', 'Google'];

  return (
    <section className="border-t border-white/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-[#07080A]/50">
          Trusted by leading organizations
        </h3>
        <div className="overflow-hidden">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            {partners.concat(partners).map((partner, i) => (
              <div key={i} className="flex min-w-fit items-center gap-2 rounded border border-[#07080A]/20 bg-[#07080A]/5 px-6 py-3 font-mono text-sm font-semibold text-[#07080A]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
