'use client';

import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    service: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', country: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#07080A] via-[#0a0b10] to-[#07080A] py-16 md:py-24">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(201,168,76,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#C9A84C] opacity-5 blur-3xl animate-float" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#1A3A6B] opacity-5 blur-3xl animate-float animation-delay-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Book Your Service Today
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 md:text-base">
            Connect with our logistics experts to discuss your transport, warehousing, or supply chain needs
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* LEFT — Contact Info & Benefits */}
          <div>
            <div className="mb-8 rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-[#C9A84C] md:text-2xl">Why Choose Altovex?</h3>
              <ul className="space-y-4">
                {[
                  'Real-time tracking across 4+ countries',
                  'Cold chain expertise with 99% compliance',
                  'Customs clearance in 24-48 hours',
                  'Dedicated account management',
                  ' 24/7 operational support',
                  'Cost-optimized route planning',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                    <span className="text-sm text-white/80 md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white md:text-xl">Get In Touch</h3>
              {[
                { icon: '📞', label: 'Phone', value: '+254-718-554-383 / +254-708-157-713' },
                { icon: '✉️', label: 'Email', value: 'info@altovexlogistics.com' },
                { icon: '📍', label: 'Address', value: 'Plot 209/9721, Off Mombasa Road, Nairobi, Kenya' },
                { icon: '💬', label: 'WhatsApp', value: '+254-708-157-713' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-white/50">{item.label}</div>
                      <div className="mt-1 font-semibold text-white text-sm md:text-base">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Booking Form */}
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <h3 className="mb-6 text-xl font-bold text-white md:text-2xl">Book Your Service</h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-500/10 border border-green-500/30 p-4">
                <Check className="h-5 w-5 text-green-400" />
                <p className="text-sm text-green-400">Thank you! We'll contact you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/30 p-4">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-sm text-red-400">There was an error. Please try again.</p>
              </div>
            )}

            <div className="mb-4 space-y-4">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 transition-colors"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Business Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="business@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 transition-colors"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 transition-colors"
                >
                  <option value="" className="bg-[#07080A]">Select Country</option>
                  <option value="Kenya" className="bg-[#07080A]">Kenya</option>
                  <option value="Uganda" className="bg-[#07080A]">Uganda</option>
                  <option value="Zambia" className="bg-[#07080A]">Zambia</option>
                  <option value="Tanzania" className="bg-[#07080A]">Tanzania</option>
                  <option value="Ghana" className="bg-[#07080A]">Ghana</option>
                  <option value="Nigeria" className="bg-[#07080A]">Nigeria</option>
                  <option value="Other" className="bg-[#07080A]">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 transition-colors"
                >
                  <option value="" className="bg-[#07080A]">Select Service</option>
                  <option value="Transport" className="bg-[#07080A]">Transport & Logistics</option>
                  <option value="Warehousing" className="bg-[#07080A]">Warehousing & Storage</option>
                  <option value="Cold Chain" className="bg-[#07080A]">Cold Chain Management</option>
                  <option value="Customs" className="bg-[#07080A]">Customs & Clearance</option>
                  <option value="Commodity Trading" className="bg-[#07080A]">Agri Commodity Trading</option>
                  <option value="Consulting" className="bg-[#07080A]">Consulting</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your cargo, route, timeline, or service requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full rounded-lg bg-[#C9A84C] px-6 py-4 font-bold uppercase tracking-wider text-[#07080A] transition-all hover:shadow-lg hover:shadow-[#C9A84C]/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitStatus === 'loading' ? 'Booking Service...' : 'Book Service Now'}
            </button>

            <p className="mt-4 text-center text-xs text-white/50">
              We'll respond within 24 hours. Your information is secure and confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
