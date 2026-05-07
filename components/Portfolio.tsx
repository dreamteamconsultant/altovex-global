export default function Portfolio() {
  const projects = [
    {
      title: 'Smart Irrigation System',
      location: 'Ghana',
      description: 'Implemented IoT-based irrigation system reducing water consumption by 40% for 200 farmers',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&q=80',
    },
    {
      title: 'Crop Disease Detection AI',
      location: 'Nigeria',
      description: 'Mobile app using AI to detect crop diseases early, improving yield by 25%',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&q=80',
    },
    {
      title: 'Supply Chain Platform',
      location: 'Kenya',
      description: 'Digital marketplace connecting farmers directly to buyers, eliminating middlemen',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
    },
    {
      title: 'Weather Analytics Dashboard',
      location: 'Multiple Countries',
      description: 'Real-time weather data and predictive analytics for 15 African countries',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
    },
    {
      title: 'Soil Health Monitoring',
      location: 'Tanzania',
      description: 'Precision soil analysis system helping farmers optimize fertilizer usage',
      image: 'https://images.unsplash.com/photo-1600080972464-8e5f801eceab?w=500&q=80',
    },
    {
      title: 'Financial Inclusion Program',
      location: 'Uganda',
      description: 'Digital payment system enabling credit access for 500+ small-scale farmers',
      image: 'https://images.unsplash.com/photo-1559027612-cd4628902d4a?w=500&q=80',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans font-bold mb-4 text-white">
            Our <span className="text-[#C9A84C]">Portfolio</span>
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            Success stories of agricultural transformation across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-[#333333] hover-gold-border bg-[#1A1A1A]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-[#333333]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="bg-[#1A1A1A] p-6 flex-1 flex flex-col">
                <p className="text-sm text-[#C9A84C] font-semibold mb-2">
                  <i className="fas fa-map-marker-alt mr-1"></i>{project.location}
                </p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#888888] flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#888888] mb-6">
            Ready to transform your agricultural operations like these success stories?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C9A84C] hover:bg-[#E0C080] text-[#0A0A0A] font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
