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
                <div className="text-3xl font-bold">500K+</div>
                <div className="text-sm font-semibold">Lives Improved</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">About Us</div>
            <h2 className="mb-6 text-4xl font-bold text-[#07080A] md:text-5xl">
              About DreamTeam Consulting
            </h2>
            <p className="mb-6 text-lg text-[#07080A]/70">
              Founded with a vision to transform agriculture through technology, DreamTeam Consulting brings together expertise in agribusiness, software development, and financial services to create innovative solutions for the agricultural sector. Our team of experienced consultants, developers, and agricultural experts work collaboratively to deliver customized solutions that address the unique challenges faced by farmers, cooperatives, and agribusinesses across Africa.
            </p>

            <p className="mb-6 text-lg text-[#07080A]/70">
              We believe in the power of technology to drive sustainable agricultural development, empower rural communities, and create economic opportunities for millions of smallholder farmers.
            </p>

            <div className="mb-8 space-y-3">
              {[
                "15+ years combined agritech expertise",
                "Serving 512+ active farms across Africa",
                "Open source commitment to rural tech",
                "Partnerships with FAO, World Bank, AGRA",
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
