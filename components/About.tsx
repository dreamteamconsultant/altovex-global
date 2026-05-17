export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#0B1929] to-[#0F2A47]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-lg border border-[#333333]">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=800&q=80"
              alt="Altovex team working on agricultural technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/50 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div>
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold font-sans mb-6 leading-tight text-white">
                  About
                  <br />
                  <span className="text-[#C9A84C]">Altovex</span>
                </h2>
            
            <p className="text-lg text-[#888888] mb-6 leading-relaxed max-w-3xl">
              Altovex is dedicated to revolutionizing agriculture across Africa through cutting-edge technology solutions. We believe that empowering farmers with data-driven insights and innovative tools is the key to sustainable growth and food security.
            </p>

            <p className="text-lg text-[#888888] mb-8 leading-relaxed">
              With over a decade of experience in agricultural technology, our team brings together expertise in software development, agricultural science, and business strategy. We partner with farming communities to understand their unique challenges and deliver tailored solutions that drive real impact.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-[#C9A84C] mb-2">500+</div>
                <p className="text-[#888888]">Farmers Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C9A84C] mb-2">15</div>
                <p className="text-[#888888]">Countries Active</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C9A84C] mb-2">40%</div>
                <p className="text-[#888888]">Avg. Yield Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C9A84C] mb-2">24/7</div>
                <p className="text-[#888888]">Support Available</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#C9A84C] hover:bg-[#E0C080] text-[#0B1929] font-bold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
