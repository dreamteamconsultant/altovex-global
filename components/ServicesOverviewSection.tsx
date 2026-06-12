import Link from 'next/link';

const services = [
  {
    title: 'Fleet & Transport',
    desc: 'Heavy haulage and cross-border mastery with 35-, 10-, and 5-tonne carriers plus refrigerated units.',
    href: '/fleet',
    dark: false,
  },
  {
    title: 'Last-Mile Delivery',
    desc: 'High-mobility motorbikes and vans with route optimization and digital proof-of-delivery.',
    href: '/last-mile',
    dark: false,
  },
  {
    title: 'Technology & Tracking',
    desc: 'IoT sensors, GPS, and cloud dashboards for 24/7 visibility on every shipment.',
    href: '/tracking',
    dark: false,
  },
  {
    title: 'Cold Chain',
    desc: 'Pharmaceutical and fresh produce excellence from deep freeze to ambient ranges.',
    href: '/cold-chain',
    dark: false,
  },
  {
    title: 'Customs & Compliance',
    desc: 'EAC, WCO, and bilateral trade expertise with HS classification and EDI filing.',
    href: '/customs',
    dark: false,
  },
  {
    title: 'Warehousing & Storage',
    desc: 'Climate-controlled, bonded, and high-value secure storage with full inventory visibility.',
    href: '/warehousing',
    dark: false,
  },
  {
    title: 'Pure Grow Initiative',
    desc: 'Agri-FMCG turnkey solutions, mechanization, and global agricultural commodity trading.',
    href: '/pure-grow',
    dark: false,
  },
  {
    title: 'Design, Build & Deploy',
    desc: 'Prefab housing, livestock units, agricultural kits, and furniture using modern prefabrication.',
    href: '/design-build',
    dark: false,
  },
];

type ServicesOverviewSectionProps = {
  variant?: 'light' | 'dark';
  showHeading?: boolean;
};

export default function ServicesOverviewSection({ variant = 'light', showHeading = true }: ServicesOverviewSectionProps) {
  const dark = variant === 'dark';
  return (
    <section id="services" className={`${dark ? 'bg-[#07080A]' : 'bg-white'} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-12 max-w-4xl">
            <div className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[#C9A84C]' : 'text-[#1A3A6B]'}`}>
              Integrated Services
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${dark ? 'text-white' : 'text-[#07080A]'}`}>
              Explore Our Services
            </h2>
            <p className={`mt-4 text-sm md:text-base lg:text-lg leading-7 md:leading-8 ${dark ? 'text-white/70' : 'text-[#07080A]/70'}`}>
              Each Altovex capability has a dedicated page with the full scope, operational detail, and supporting features. Navigate to the service that matches your need.
            </p>
          </div>
        )}

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, index) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group rounded-lg md:rounded-2xl border p-5 md:p-6 transition-colors ${dark ? 'border-white/10 bg-white/5 hover:border-[#C9A84C]/30' : 'border-[#07080A]/10 bg-[#07080A]/5 hover:border-[#07080A]/20'}`}
            >
              <div className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${dark ? 'text-[#C9A84C]' : 'text-[#1A3A6B]'}`}>0{index + 1}</div>
              <h3 className={`text-lg md:text-xl font-bold ${dark ? 'text-white' : 'text-[#07080A]'}`}>{s.title}</h3>
              <p className={`mt-3 text-xs md:text-sm leading-6 md:leading-7 ${dark ? 'text-white/65' : 'text-[#07080A]/65'}`}>{s.desc}</p>
              <span className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${dark ? 'text-[#C9A84C] group-hover:text-white' : 'text-[#1A3A6B] group-hover:text-[#07080A]'}`}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
