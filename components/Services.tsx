export default function Services() {
  const services = [
    {
      icon: 'fa-leaf',
      title: 'Crop Management',
      description: 'Advanced analytics and monitoring systems for optimal crop health and yield prediction.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crop%20Management%20Software%20%281%29-LTjP30HnAfhrQQry93JWdOo43rNtCv.jpg'
    },
    {
      icon: 'fa-water',
      title: 'Water Solutions',
      description: 'Smart irrigation systems that reduce water waste and improve resource efficiency.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%C3%B3mo%20se%20limpia%20el%20agua%20residual%20de%20una%20ciudad-djtIH9MEJVrp2FtFYgipQ8aJ6IbfWx.jpg'
    },
    {
      icon: 'fa-chart-line',
      title: 'Data Analytics',
      description: 'Real-time insights and actionable intelligence for better decision making.'
    },
    {
      icon: 'fa-tractor',
      title: 'Equipment Optimization',
      description: 'Fleet management and maintenance scheduling for agricultural machinery.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smart%20Farming%20Revolution_%20How%20AI%20and%20Drones%20Are%20Transforming%20Modern%20Agriculture-bFT9WRlhZKAH8tbqG5k5FI3eLdJ6nn.jpg'
    },
    {
      icon: 'fa-handshake',
      title: 'Supply Chain',
      description: 'End-to-end supply chain solutions connecting farmers to markets efficiently.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Supply%20Chain%20Jobs_%20Procurement%2C%20Logistics%2C%20and%20Management%20%281%29-MK4ifKBlrUW9DG87KY96dveRK8dZs5.jpg'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Training & Support',
      description: 'Comprehensive training programs and 24/7 customer support for all solutions.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-tD89FpMJ1qbaNVVF70so2RyOfLrAyw.jpg'
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A84C] rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A8FF] rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans font-bold mb-4 text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            Comprehensive agricultural technology solutions tailored to transform your farming operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#333333] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col hover-gold-border"
            >
              {service.image && (
                <div className="relative h-48 w-full overflow-hidden bg-[#333333]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-lg flex items-center justify-center group-hover:bg-[#C9A84C] transition-colors duration-300">
                    <i className={`fas ${service.icon} text-2xl text-[#C9A84C] group-hover:text-[#0A0A0A] transition-colors duration-300`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-[#888888] leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
