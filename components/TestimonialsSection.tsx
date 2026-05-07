export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Kwame Asante',
      role: 'Farm Owner, Ghana',
      text: "DreamTeam's water system helped us reduce irrigation costs by 40%. The ROI was achieved in just 8 months.",
      rating: 5,
    },
    {
      name: 'Fatima Hassan',
      role: 'Agricultural Cooperative, Kenya',
      text: "The supply chain visibility platform transformed our ability to reach premium markets. Revenue increased by 3x in a year.",
      rating: 5,
    },
    {
      name: 'Dr. Emmanuel Okafor',
      role: 'Ministry of Agriculture, Nigeria',
      text: "DreamTeam is scaling agritech at the national level. Their platform is reliable, intuitive, and truly farmer-first.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="border-t border-white/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">What Our Partners Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-xl border border-[#07080A]/10 bg-[#07080A]/5 p-8 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 animate-float-card"
            >
              {/* Oversized quote mark */}
              <div className="absolute -right-4 -top-4 text-6xl text-[#C9A84C] opacity-10">"</div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C]">★</span>
                ))}
              </div>

              <p className="mb-6 text-[#07080A]/70 italic">"{testimonial.text}"</p>

              <div className="border-t border-[#07080A]/10 pt-4">
                <div className="font-bold text-[#07080A]">{testimonial.name}</div>
                <div className="text-sm text-[#C9A84C]">{testimonial.role}</div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C]/50 via-[#C9A84C] to-[#C9A84C]/50" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
