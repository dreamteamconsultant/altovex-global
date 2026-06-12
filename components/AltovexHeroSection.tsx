"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function AltovexHeroSection() {
  const [country, setCountry] = useState('');
  const [service, setService] = useState('');
  const [cargo, setCargo] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Altovex consultation request');
    const body = encodeURIComponent(`Hello Altovex team,

Country / corridor: ${country}
Service needed: ${service}
Cargo or documents: ${cargo}
Contact: ${contact}
Notes: ${notes}

I would like to book a consultation.`);
    window.location.href = `mailto:info@altovexlogistics.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="architecture" className="relative overflow-hidden bg-gradient-to-br from-[#0B1929] via-[#0F2A47] to-[#0D1E35] pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(201,168,76,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#C9A84C] opacity-10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1A3A6B] opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="flex flex-col justify-start relative z-60">
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-7xl">
              Altovex Global Logistics
            </h1>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C] sm:text-sm">
              Premier Architect of Integrated Transport &amp; Logistics Solutions
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              Altovex coordinates transport, cold chain, customs compliance, warehousing, and agri commodity trading across Kenya, Uganda, Zambia, East Africa, and beyond &mdash; with precision, speed, and unwavering reliability.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-bold uppercase tracking-[0.22em] text-[#07080A] transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20 md:px-8 md:py-4">
                Book Service
              </Link>
              <Link href="/network" className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-6 py-3 font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#07080A] md:px-8 md:py-4">
                See Coverage
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {[
                ['Kenya', 'Nairobi & Mombasa'],
                ['Uganda', 'Kampala Corridor'],
                ['Zambia', 'Lusaka & Ndola'],
                ['Reach', 'East Africa + SADC'],
              ].map(([title, value]) => (
                <div key={title} className="rounded-lg md:rounded-xl border border-white/10 bg-white/5 p-3 md:p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/50">{title}</div>
                  <div className="mt-2 text-xs md:text-sm font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

            <div className="rounded-3xl border border-[#C9A84C]/30 bg-[#0F1B2E]/50 p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Quick Book</div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              {[
                { label: 'Trade Flow', value: 'Active' },
                { label: 'Route Visibility', value: 'Live' },
                { label: 'Cold Chain', value: 'Monitored' },
                { label: 'Compliance', value: 'Managed' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg md:rounded-xl border border-white/10 bg-[#0A0B0E] p-3 md:p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</div>
                  <div className="mt-2 text-lg md:text-xl font-bold text-[#C9A84C]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-[#C9A84C]/30 bg-[#0B1929]/60 p-4 text-xs leading-6 text-white/70 md:mt-6 md:rounded-xl md:p-5 md:text-sm md:leading-7">
              Tell us the country, what needs to move, and what documents or handling the shipment needs.
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[#071428] p-4 md:p-5">
              <h4 className="text-xl font-bold text-white md:text-2xl">Book service fast</h4>
              <p className="mt-2 text-sm text-white/70">Share the corridor, cargo, and delivery needs and we will reply with the next step.</p>

              <form onSubmit={sendMail} className="mt-4 space-y-3">
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country or corridor"
                  className="h-14 w-full rounded-md border border-white/10 bg-[#071428] px-4 text-white outline-none placeholder:text-white/45"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="Service needed"
                    className="h-14 w-full rounded-md border border-white/10 bg-[#071428] px-4 text-white outline-none placeholder:text-white/45"
                  />
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone or email"
                    className="h-14 w-full rounded-md border border-white/10 bg-[#071428] px-4 text-white outline-none placeholder:text-white/45"
                  />
                </div>

                <input
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  placeholder="Cargo / documents needed"
                  className="h-14 w-full rounded-md border border-white/10 bg-[#071428] px-4 text-white outline-none placeholder:text-white/45"
                />

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What should we deliver and where?"
                  rows={3}
                  className="w-full rounded-md border border-white/10 bg-[#071428] px-4 py-3 text-white outline-none placeholder:text-white/45"
                />

                <button
                  type="submit"
                  className="mt-1 flex h-14 w-full items-center justify-center rounded-md bg-[#C9A84C] text-lg font-bold text-[#071428] transition-transform hover:scale-[1.01]"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
