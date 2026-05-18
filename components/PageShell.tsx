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
    <main className="bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 text-foreground sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card p-6 transition-colors duration-300 md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C9A84C]">
              Altovex Global Logistics
            </div>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              {description}
            </p>
          </div>
        </div>
      </section>

      <BookConsultationBox
        tone={dark ? 'dark' : 'light'}
        compact
        title="Quick book"
        description="Share the country, route, cargo, and delivery date so we can reply with the next step."
      />

      {children}

      <Footer />
    </main>
  );
}