'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string | null>(null);

  const faqs = [
    {
      id: 'pricing',
      question: 'How is DreamTeam priced?',
      answer: 'Our pricing is flexible and based on farm size, number of sensors, and services selected. We offer monthly, annual, and custom enterprise plans. Contact us for a personalized quote.',
    },
    {
      id: 'integration',
      question: 'How does DreamTeam integrate with existing systems?',
      answer: 'We provide APIs, webhooks, and direct integrations with popular farm management platforms. Our team handles the technical setup to ensure seamless data flow.',
    },
    {
      id: 'support',
      question: 'What kind of support do you provide?',
      answer: '24/7 email and phone support, dedicated account managers, weekly training sessions, and an active community forum. Enterprise customers get priority support.',
    },
    {
      id: 'data',
      question: 'How is my farm data protected?',
      answer: 'We use bank-level encryption, comply with GDPR/CCPA, perform regular security audits, and never share data with third parties without explicit consent.',
    },
    {
      id: 'training',
      question: 'Do you provide training?',
      answer: 'Yes! We offer free onboarding, video tutorials, live training sessions, and certification programs. All training is available in English and local languages.',
    },
    {
      id: 'deployment',
      question: 'How long does deployment take?',
      answer: 'Typical deployment is 2-4 weeks including hardware installation, software configuration, staff training, and system validation.',
    },
  ];

  return (
    <section id="faq" className="relative bg-white py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#07080A] md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[#07080A]/60">Find answers to common questions about DreamTeam services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="overflow-hidden rounded-lg border border-[#07080A]/10 transition-all">
              <button
                onClick={() => setOpenItems(openItems === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between bg-[#07080A]/5 px-6 py-4 text-left font-semibold text-[#07080A] transition-all hover:bg-[#C9A84C]/10"
              >
                <span>{faq.question}</span>
                <span
                  className="text-2xl text-[#C9A84C] transition-transform duration-300"
                  style={{ transform: openItems === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ↓
                </span>
              </button>

              {openItems === faq.id && (
                <div className="border-t border-[#07080A]/10 bg-white px-6 py-4 text-[#07080A]/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
