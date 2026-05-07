import ContactForm from './ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Address',
      details: 'Lagos, Nigeria',
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      details: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+234 (0) 800-000-0000',
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      details: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@dreamteam.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans font-bold mb-4 text-white">
            Get In <span className="text-[#C9A84C]">Touch</span>
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            Ready to transform your farming operations? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#333333] p-8 rounded-xl text-center hover:border-[#C9A84C] transition-all duration-300 hover-gold-border">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${info.icon} text-2xl text-[#C9A84C]`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-[#888888]">{info.details}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-[#1A1A1A] border border-[#333333] p-8 md:p-12 rounded-2xl">
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-[#888888] mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: 'fa-linkedin', href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', label: 'LinkedIn' },
              { icon: 'fa-twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || '#', label: 'Twitter' },
              { icon: 'fa-facebook', href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', label: 'Facebook' },
              { icon: 'fa-instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', label: 'Instagram' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1E3A5F] hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#0A0A0A] rounded-full flex items-center justify-center transition-all duration-300 border border-[#333333] hover:border-[#C9A84C]"
                aria-label={social.label}
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
