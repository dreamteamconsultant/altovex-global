export default function ProjectsSection() {
  const projects = [
    {
      number: '01',
      name: 'Turkana Water Grid',
      location: 'Kenya',
      impact: '82% reduction in pump failures',
      status: 'Live',
      delay: '0s',
    },
    {
      number: '02',
      name: 'Ashanti Crop Intelligence',
      location: 'Ghana',
      impact: '31% improvement in yield',
      status: 'Live',
      delay: '0.8s',
    },
    {
      number: '03',
      name: 'Kano Supply Ledger',
      location: 'Nigeria',
      impact: '14-day reduction in settlement time',
      status: 'Scaling',
      delay: '1.6s',
    },
    {
      number: '04',
      name: 'Kilimanjaro Climate Command',
      location: 'Tanzania',
      impact: '96% forecast accuracy',
      status: 'Piloted',
      delay: '2.4s',
    },
    {
      number: '05',
      name: 'Copperbelt Market Network',
      location: 'Zambia',
      impact: '18% reduction in spoilage',
      status: 'Live',
      delay: '3.2s',
    },
  ];

  return (
    <section id="projects" className="relative bg-[#07080A] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-white/60">Transforming agriculture across Africa</p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid items-center gap-6 rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition-all hover:border-[#C9A84C]/50 hover:bg-white/[0.08] lg:grid-cols-[100px_1fr_1fr_120px_80px]"
            >
              <div className="text-3xl font-bold text-[#C9A84C]/60">{project.number}</div>
              <div>
                <div className="font-bold text-white">{project.name}</div>
                <div className="text-sm text-white/50">{project.location}</div>
              </div>
              <div className="hidden lg:block">
                <div className="text-sm text-white/70">{project.impact}</div>
              </div>
              <div className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-center text-xs font-semibold text-[#C9A84C]">
                {project.status}
              </div>
              <a
                href="#contact"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] group-hover:[animation-play-state:paused] animate-project-arrow"
                style={{ animationDelay: project.delay }}
              >
                →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
