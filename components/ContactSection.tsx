'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    farmType: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your interest! We\'ll be in touch shortly.");
    setFormData({ name: '', email: '', country: '', farmType: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-[#07080A] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT — Contact Info */}
          <div>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Partner With Altovex Global Logistics Co.</h2>
            <p className="mb-12 max-w-2xl text-lg leading-8 text-white/70">
              Altovex Global Logistics Co. Ltd delivers just-in-time, every time. Reach our executive team for logistics, transport, warehousing, cold chain, and customs support.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Address', value: 'Plot 209/9721, Off Mombasa Road, Nairobi, Kenya' },
                { icon: '📞', label: 'Telephone', value: '+254-718-554-383 / +254-708-157-713' },
                { icon: '✉️', label: 'Email', value: 'info@altovexlogistics.com' },
                { icon: '🌐', label: 'Website', value: 'www.altovexgl.site' },
                { icon: '💬', label: 'WhatsApp', value: '+254-708157713' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/50">{item.label}</div>
                      <div className="mt-1 font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white focus:border-[#C9A84C] focus:outline-none focus:ring-0"
                >
                  <option value="" className="bg-[#07080A]">
                    Select Country
                  </option>
                  <option value="Kenya" className="bg-[#07080A]">
                    Kenya
                  </option>
                  <option value="Ghana" className="bg-[#07080A]">
                    Ghana
                  </option>
                  <option value="Nigeria" className="bg-[#07080A]">
                    Nigeria
                  </option>
                  <option value="Tanzania" className="bg-[#07080A]">
                    Tanzania
                  </option>
                  <option value="Other" className="bg-[#07080A]">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white focus:border-[#C9A84C] focus:outline-none focus:ring-0"
                >
                  <option value="" className="bg-[#07080A]">
                    Select Service
                  </option>
                  <option value="Agri Commodity Trading" className="bg-[#07080A]">
                    Agri Commodity Trading
                  </option>
                  <option value="Transport" className="bg-[#07080A]">
                    Transport
                  </option>
                  <option value="Logistics" className="bg-[#07080A]">
                    Logistics
                  </option>
                  <option value="Customs & Clearance" className="bg-[#07080A]">
                    Customs & Clearance
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your cargo, route, or service requirement"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A84C] px-8 py-4 font-bold uppercase text-[#07080A] transition-transform hover:scale-105"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
