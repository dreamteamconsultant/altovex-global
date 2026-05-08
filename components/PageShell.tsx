import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookConsultationBox from '@/components/BookConsultationBox';

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  dark?: boolean;
};

export default function PageShell({ title, description, children, dark = false }: PageShellProps) {
  return (
    <main className={dark ? 'bg-[#07080A] text-white' : 'bg-[#F5F2EA] text-[#07080A]'}>
      <Navigation />
      <section className={`mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 ${dark ? 'text-white' : 'text-[#07080A]'}`}>
        <div className={`rounded-[2rem] border p-6 md:p-10 ${dark ? 'border-white/10 bg-white/5' : 'border-[#07080A]/10 bg-white shadow-[0_24px_60px_rgba(7,8,10,0.06)]'}`}>
          <div className="max-w-3xl">
            <div className={`text-xs font-semibold uppercase tracking-[0.32em] ${dark ? 'text-[#C9A84C]' : 'text-[#1A3A6B]'}`}>
              Altovex Global Logistics
            </div>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
            <p className={`mt-4 text-sm leading-7 md:text-base ${dark ? 'text-white/70' : 'text-[#07080A]/65'}`}>
              {description}
            </p>
          </div>
        </div>
      </section>

      {children}

      <BookConsultationBox tone={dark ? 'dark' : 'light'} />
      <Footer />
    </main>
  );
}