type ServiceCard = {
  title: string;
  eyebrow: string;
  description: string;
  metric: string;
  metricLabel: string;
  cta: string;
  visual: 'water' | 'analytics' | 'supply' | 'climate' | 'automation' | 'market';
};

type ProjectRow = {
  country: string;
  name: string;
  impact: string;
  status: string;
};

const tickerItems = [
  'Agritech strategy for Africa',
  'Water intelligence systems',
  'Crop analytics and yield clarity',
  'Supply chain modernization',
  'Farmer-first digital operations',
];

const serviceCards: ServiceCard[] = [
  {
    title: 'Water Systems',
    eyebrow: 'Irrigation intelligence',
    description: 'Sensor-led water allocation, leak detection, and field-level usage planning for dryland operations.',
    metric: '38%',
    metricLabel: 'lower water loss',
    cta: 'See water models',
    visual: 'water',
  },
  {
    title: 'Crop Analytics',
    eyebrow: 'Yield foresight',
    description: 'Predictive dashboards that turn satellite, soil, and labor data into sharper harvest decisions.',
    metric: '4.8x',
    metricLabel: 'faster planning',
    cta: 'View analytics',
    visual: 'analytics',
  },
  {
    title: 'Supply Chains',
    eyebrow: 'Market flow control',
    description: 'Chain-of-custody visibility that shortens handoffs and improves trust from farm gate to buyer.',
    metric: '21%',
    metricLabel: 'less spoilage',
    cta: 'Map the chain',
    visual: 'supply',
  },
  {
    title: 'Climate Risk',
    eyebrow: 'Forecast resilience',
    description: 'Regional climate intelligence that helps teams act before rainfall shifts, heat spikes, or pest pressure.',
    metric: '92%',
    metricLabel: 'scenario accuracy',
    cta: 'Review forecasts',
    visual: 'climate',
  },
  {
    title: 'Field Automation',
    eyebrow: 'Operational precision',
    description: 'Workflow systems that keep agronomists, operators, and partners aligned on every rural deployment.',
    metric: '16 hrs',
    metricLabel: 'saved weekly',
    cta: 'Automate field ops',
    visual: 'automation',
  },
  {
    title: 'Market Access',
    eyebrow: 'Revenue expansion',
    description: 'Commercial enablement for buyer networks, pricing intelligence, and direct farmer-to-market routes.',
    metric: '3.1x',
    metricLabel: 'sales uplift',
    cta: 'Unlock market access',
    visual: 'market',
  },
];

const projectRows: ProjectRow[] = [
  {
    country: 'Kenya',
    name: 'Turkana Water Grid',
    impact: '82% fewer pump failures',
    status: 'Live',
  },
  {
    country: 'Ghana',
    name: 'Ashanti Crop Intelligence',
    impact: '31% yield lift',
    status: 'Scaling',
  },
  {
    country: 'Nigeria',
    name: 'Kano Supply Ledger',
    impact: '14-day faster settlement',
    status: 'Live',
  },
  {
    country: 'Tanzania',
    name: 'Kilimanjaro Climate Command',
    impact: '22% better forecast accuracy',
    status: 'Piloted',
  },
  {
    country: 'Zambia',
    name: 'Copperbelt Market Network',
    impact: '18% reduced spoilage',
    status: 'Live',
  },
];

function ServiceVisual({ visual }: { visual: ServiceCard['visual'] }) {
  if (visual === 'water') {
    return (
      <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="water-ring" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#1A3A6B" />
          </linearGradient>
        </defs>
        <circle cx="70" cy="70" r="42" fill="none" stroke="url(#water-ring)" strokeWidth="2" className="animate-ring-spin" />
        <circle cx="70" cy="70" r="28" fill="none" stroke="#C9A84C" strokeOpacity="0.45" strokeWidth="1.5" className="animate-ring-spin-reverse" />
        <circle cx="70" cy="70" r="8" fill="#C9A84C" className="animate-pulse-dot" />
        {[0, 1, 2, 3].map((index) => (
          <circle
            key={index}
            cx={44 + index * 18}
            cy={34 + (index % 2) * 8}
            r="2.5"
            fill="#FFFFFF"
            opacity="0.7"
            className="animate-pulse-dot"
            style={{ animationDelay: `${index * 0.25}s` }}
          />
        ))}
      </svg>
    );
  }

  if (visual === 'analytics') {
    return (
      <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
        <polyline
          points="16,98 34,84 52,90 70,56 88,64 106,38 124,48"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="340"
          className="animate-sparkline"
        />
        <circle cx="124" cy="48" r="5" fill="#C9A84C" className="animate-pulse-dot" />
        <circle cx="34" cy="84" r="3" fill="#1A3A6B" className="animate-pulse-dot" style={{ animationDelay: '0.3s' }} />
        <circle cx="88" cy="64" r="3" fill="#FFFFFF" opacity="0.8" className="animate-pulse-dot" style={{ animationDelay: '0.6s' }} />
        <rect x="20" y="106" width="100" height="2" fill="#FFFFFF" opacity="0.18" />
      </svg>
    );
  }

  if (visual === 'supply') {
    return (
      <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
        <path d="M20 70H120" stroke="#C9A84C" strokeDasharray="5 6" strokeWidth="2" opacity="0.5" />
        <path d="M32 44L70 70L108 44" stroke="#1A3A6B" strokeWidth="2.5" fill="none" opacity="0.9" />
        <circle cx="32" cy="44" r="8" fill="#C9A84C" className="animate-pulse-dot" />
        <circle cx="70" cy="70" r="11" fill="none" stroke="#FFFFFF" strokeWidth="2" className="animate-ring-spin" />
        <circle cx="108" cy="44" r="8" fill="#1A3A6B" className="animate-pulse-dot" style={{ animationDelay: '0.35s' }} />
        {[48, 62, 92, 104].map((x, index) => (
          <circle key={x} cx={x} cy={92} r="2.5" fill="#C9A84C" className="animate-pulse-dot" style={{ animationDelay: `${index * 0.2}s` }} />
        ))}
      </svg>
    );
  }

  if (visual === 'climate') {
    return (
      <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
        <circle cx="70" cy="70" r="36" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.5" className="animate-ring-spin" />
        <path d="M70 28V50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 90V112" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 70H50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M90 70H112" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 44L56 56" stroke="#1A3A6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M96 44L84 56" stroke="#1A3A6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 96L56 84" stroke="#1A3A6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M96 96L84 84" stroke="#1A3A6B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="70" r="6" fill="#C9A84C" className="animate-pulse-dot" />
      </svg>
    );
  }

  if (visual === 'automation') {
    return (
      <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
        <g className="animate-ring-spin" style={{ transformOrigin: '70px 70px' }}>
          <circle cx="70" cy="70" r="18" fill="none" stroke="#C9A84C" strokeWidth="3" />
          <circle cx="70" cy="70" r="36" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.5" />
          <path d="M70 40V30M70 100V110M40 70H30M100 70H110M49 49L42 42M98 98L106 106M49 91L42 98M91 49L98 42" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="70" cy="70" r="6" fill="#1A3A6B" className="animate-pulse-dot" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden="true">
      <circle cx="70" cy="70" r="32" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.4" className="animate-ring-spin-reverse" />
      <path d="M36 98H104" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M40 84H100" stroke="#1A3A6B" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 70H92" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="84" r="4" fill="#C9A84C" className="animate-pulse-dot" />
      <circle cx="100" cy="84" r="4" fill="#FFFFFF" opacity="0.7" className="animate-pulse-dot" style={{ animationDelay: '0.4s' }} />
      <circle cx="70" cy="52" r="5" fill="#1A3A6B" className="animate-pulse-dot" style={{ animationDelay: '0.8s' }} />
    </svg>
  );
}

export default function DreamTeamLuxurySection() {
  return (
    <>
      <div className="overflow-hidden border-b border-[#07080A]/20 bg-[#C9A84C] text-[#07080A]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="animate-marquee flex min-w-max items-center gap-8 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.36em]">
            {Array.from({ length: 2 }).map((_, loopIndex) => (
              <div key={loopIndex} className="flex items-center gap-8">
                {tickerItems.map((item) => (
                  <span key={`${loopIndex}-${item}`} className="flex items-center gap-8">
                    <span>{item}</span>
                    <span className="text-[#1A3A6B]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07080A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-8">
          <a href="#hero" className="flex items-center gap-4">
            <img src="/dreamteam-logo.jpg" alt="DreamTeam Consulting" className="h-12 w-auto rounded-lg shadow-md" />
            <div className="hidden sm:block">
              <div className="text-[0.7rem] uppercase tracking-[0.45em] text-white/45">DreamTeam</div>
              <div className="text-lg font-semibold tracking-[0.2em] text-white">Consulting</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ['Services', '#services'],
              ['Projects', '#projects'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-[#C9A84C]">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden border border-[#C9A84C]/70 bg-[#C9A84C] px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#07080A] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Book a call</span>
          </a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden border-b border-white/10 bg-[#07080A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,76,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(26,58,107,0.32),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/75">
              <span className="h-2 w-2 rounded-full bg-[#C9A84C] shadow-[0_0_18px_rgba(201,168,76,0.95)] animate-pulse" />
              Africa-first agritech consulting
            </div>

            <p className="mb-5 max-w-xl text-sm uppercase tracking-[0.42em] text-white/45">DreamTeam Consulting</p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Luxury strategy for{' '}
              <span className="inline-flex min-h-[1.1em] flex-col overflow-hidden align-bottom text-[#C9A84C]">
                <span className="animate-word-cycle flex flex-col leading-[1.1em]">
                  <span>Water Solutions</span>
                  <span>Crop Analytics</span>
                  <span>Supply Chains</span>
                </span>
              </span>
              {' '}across Africa.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We design premium agritech systems for water resilience, crop intelligence, and export-ready supply chains. Built for African operators that need clarity, control, and measurable scale.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group relative inline-flex items-center overflow-hidden border border-[#C9A84C] bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-y-0 left-0 w-full -translate-x-full bg-[#C9A84C] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative group-hover:text-[#07080A]">Explore services</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white/85 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/45 hover:bg-white/8"
              >
                View results
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-36 w-36 rounded-full border border-[#C9A84C]/20" />
            <div className="absolute right-4 top-24 h-24 w-24 rounded-full border border-white/10" />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-white/40">Signal</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Active intelligence</div>
                </div>
                <div className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-[#C9A84C]">
                  Live
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ['Water', '14 networks'],
                  ['Crops', '29 districts'],
                  ['Supply', '91 routes'],
                  ['Risk', '6 regions'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="text-xs uppercase tracking-[0.35em] text-white/40">{label}</div>
                    <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[#C9A84C]/20 bg-[#0C0D10] p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/40">
                  <span>Operational focus</span>
                  <span>Seasonal cycle</span>
                </div>
                <div className="mt-4 h-28 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(201,168,76,0.12),rgba(26,58,107,0.15))] p-3">
                  <svg viewBox="0 0 320 96" className="h-full w-full" aria-hidden="true">
                    <polyline points="0,72 36,64 70,68 96,42 132,50 168,28 208,36 240,22 282,28 320,16" fill="none" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="340" className="animate-sparkline" />
                    <circle cx="240" cy="22" r="6" fill="#C9A84C" className="animate-pulse-dot" />
                    <circle cx="168" cy="28" r="4" fill="#FFFFFF" opacity="0.8" className="animate-pulse-dot" style={{ animationDelay: '0.35s' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden border-b border-white/10 bg-[#07080A] px-4 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_34%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:100%_100%,70px_70px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9A84C]">Services</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Six premium service lines built for agritech operators</h2>
            <p className="mt-5 text-base leading-8 text-white/66">Each card carries its own motion signature, utility metric, and bespoke visual system to give the page a premium, living feel.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card, index) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm animate-luxury-card"
                style={{ animationDelay: `${index * 0.55}s` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.14),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0A0B0E]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,58,107,0.18),transparent_45%,rgba(201,168,76,0.10))]" />
                  <ServiceVisual visual={card.visual} />
                </div>

                <div className="relative mt-6 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/42">
                  <span>{card.eyebrow}</span>
                  <span className="text-[#C9A84C]">0{index + 1}</span>
                </div>

                <h3 className="relative mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-white/65">{card.description}</p>

                <div className="relative mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">Impact</div>
                    <div className="mt-2 text-2xl font-semibold text-[#C9A84C]">{card.metric}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">Focus</div>
                    <div className="mt-2 text-white/80">{card.metricLabel}</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/button relative mt-6 inline-flex w-full items-center justify-between overflow-hidden rounded-full border border-[#C9A84C]/35 bg-[#0D0E11] px-5 py-4 text-xs uppercase tracking-[0.3em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-y-0 left-0 w-full -translate-x-full bg-[#C9A84C] transition-transform duration-500 ease-out group-hover/button:translate-x-0" />
                  <span className="relative group-hover/button:text-[#07080A]">{card.cta}</span>
                  <span className="relative text-[#C9A84C] transition-colors group-hover/button:text-[#07080A]">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden border-b border-white/10 bg-[#07080A] px-4 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(26,58,107,0.24),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(201,168,76,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9A84C]">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected programs with clear impact and motion</h2>
          </div>

          <div className="mt-12 space-y-4">
            {projectRows.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-4 rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-5 py-5 lg:grid-cols-[96px_1.3fr_1fr_auto] lg:items-center"
              >
                <div className="text-4xl font-semibold text-[#C9A84C]/80">0{index + 1}</div>
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-white/40">{project.country}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{project.name}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-white/40">Impact</div>
                  <div className="mt-2 text-lg text-white/80">{project.impact}</div>
                </div>
                <div className="flex items-center gap-4 lg:justify-end">
                  <span className="rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">
                    {project.status}
                  </span>
                  <a
                    href="#contact"
                    className="group/arrow inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[#0D0E11] text-xl text-white transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:[animation-play-state:paused] animate-project-arrow"
                    style={{ animationDelay: `${index * 0.6}s` }}
                    aria-label={`Open ${project.name}`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#1A3A6B] px-4 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.14),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.10),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute left-8 top-8 h-40 w-40 rounded-full border border-white/15" />
        <div className="absolute right-8 top-12 h-56 w-56 rounded-full border border-[#C9A84C]/20" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-white/75">Next move</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build your agritech operating layer with a team that understands Africa.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              DreamTeam Consulting helps agricultural businesses move from fragmented field data to a premium, measurable strategy stack.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="#hero"
              className="inline-flex items-center border border-[#C9A84C] bg-[#C9A84C] px-7 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#07080A] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Back to top
            </a>
            <a
              href="mailto:hello@dreamteam.consulting"
              className="inline-flex items-center border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/45"
            >
              Start the conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}