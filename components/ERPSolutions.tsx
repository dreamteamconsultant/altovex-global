export default function ERPSolutions() {
  return (
    <section id="erp" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">Our ERP Solutions</h2>
          <p className="mt-4 text-lg text-[#07080A]/60">Comprehensive enterprise resource planning systems designed for agricultural value chains</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#07080A]">DreamTec 360 Farmer ERP</h3>
            <p className="text-[#07080A]/70">A complete end-to-end agricultural management platform that connects farmers, cooperatives, suppliers, and markets in one seamless ecosystem.</p>

            <ul className="mt-4 space-y-3 text-[#07080A]/80">
              <li className="flex items-start gap-3">• <strong>Farmer 360 Management:</strong> Complete farmer profiles, digital IDs, land management, crop planning, and performance tracking.</li>
              <li className="flex items-start gap-3">• <strong>Cooperative Management:</strong> Democratic governance tools, member management, and financial tracking for organisations.</li>
              <li className="flex items-start gap-3">• <strong>E-Commerce & Marketplace:</strong> Digital storefronts, input ordering, produce sales, and direct market connectivity.</li>
              <li className="flex items-start gap-3">• <strong>Integration:</strong> ERP connectors for payments, logistics, IoT feeds, and analytics pipelines.</li>
              <li className="flex items-start gap-3">• <strong>Security & Compliance:</strong> Role-based access, encrypted data storage, and audit trails.</li>
            </ul>

            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-lg bg-[#C9A84C] px-6 py-3 font-semibold text-[#07080A]">Request Demo</a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#07080A]/10 bg-[#07080A]/5 p-8">
            <h4 className="mb-4 font-semibold text-[#07080A]">Features</h4>
            <div className="grid gap-3">
              {[
                'Digital IDs and farmer profiles',
                'Land & crop planning',
                'Inventory and input tracking',
                'Payment & disbursement workflows',
                'Reporting, dashboards & exports',
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded bg-[#C9A84C]/20 text-center text-sm font-bold text-[#C9A84C]">✓</div>
                  <div className="text-sm text-[#07080A]/80">{f}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
