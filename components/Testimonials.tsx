export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kwame Mensah',
      role: 'Cocoa Farmer, Ghana',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'DreamTeam\'s solutions have transformed my farm. The crop monitoring system has helped me increase yield by 35% while reducing costs significantly.',
      rating: 5
    },
    {
      name: 'Amara Okafor',
      role: 'Maize Producer, Nigeria',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'The irrigation optimization system is a game-changer. I\'m saving water while getting better harvests. Excellent customer support team!',
      rating: 5
    },
    {
      name: 'John Kipchoge',
      role: 'Dairy Farmer, Kenya',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'Working with DreamTeam has been incredible. Their data analytics platform helps me make smarter decisions about my herd and operations.',
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0B1929] via-[#0F2A47] to-[#0D1E35]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans font-bold mb-4 text-white">
            What Our <span className="text-[#C9A84C]">Farmers</span> Say
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            Success stories from farming communities we&apos;ve partnered with across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A2940]/70 p-8 rounded-xl border border-[#C9A84C]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover-gold-border backdrop-blur-sm"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[#C9A84C]"></i>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#888888] mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#333333]"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#888888]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
