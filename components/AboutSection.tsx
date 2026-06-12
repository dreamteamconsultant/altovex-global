export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative">
            <div className="relative rounded-2xl border border-[#07080A]/10 bg-gradient-to-br from-[#07080A]/5 to-[#07080A]/10 p-12">
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(7,8,10,0.3)_1px,transparent_1px)] [background-size:20px_20px] rounded-2xl" />

              {/* Floating stat card */}
              <div className="relative z-10 absolute -bottom-8 -right-8 rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C] p-6 text-[#07080A] shadow-xl">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm font-semibold">Countries Served</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">The Executive Architecture</div>
            <h2 className="mb-6 text-4xl font-bold text-[#07080A] md:text-5xl">
              About Altovex
            </h2>
            <p className="mb-6 text-lg text-[#07080A]/70">
              Altovex Global Logistics Company Limited stands as a premier architect of integrated transport and logistics solutions. Our influence spans Africa and beyond, specializing in complex import and export operations.
            </p>

            <p className="mb-6 text-lg text-[#07080A]/70">
              We are defined by our pan-regional footprint across Kenya, Uganda, and Zambia &mdash; offering a sophisticated logistics network designed to eliminate supply chain friction and maximize operational velocity. Our strategic positioning combines deep local expertise with comprehensive regional capabilities to deliver unparalleled service excellence.
            </p>

            <p className="mb-6 text-lg text-[#07080A]/70">
              Through relentless innovation and an unwavering commitment to quality, Altovex has established itself as the definitive choice for enterprises seeking world-class logistics partnerships in the East African corridor and beyond.
            </p>

            <div className="mb-8 space-y-3">
              {[
                "Pan-regional presence across 3+ countries",
                "Serving clients across East Africa & SADC",
                "24/7 operational visibility and support",
                "Dedicated cold chain and compliance teams",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#07080A]/70">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-[#C9A84C] px-8 py-4 font-bold uppercase text-[#07080A] transition-transform hover:scale-105">
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
