type BookConsultationBoxProps = {
  title?: string;
  description?: string;
  tone?: 'light' | 'dark';
};

const emailAddress = 'info@altovexlogistics.com';
const whatsappNumber = '254708157713';

export default function BookConsultationBox({
  title = 'Book a consultation',
  description = 'Send us your route, cargo, or compliance needs and we will respond with a clear plan.',
  tone = 'light',
}: BookConsultationBoxProps) {
  const mailSubject = encodeURIComponent('Altovex consultation request');
  const mailBody = encodeURIComponent('Hello Altovex team,\n\nI would like to book a consultation. Please reach out with the next steps.');
  const emailHref = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Altovex, I would like to book a consultation.')}`;

  const rootClassName = tone === 'dark'
    ? 'border-white/10 bg-white/5 text-white'
    : 'border-[#07080A]/10 bg-white text-[#07080A] shadow-[0_18px_50px_rgba(7,8,10,0.08)]';

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className={`rounded-3xl border p-6 md:p-8 ${rootClassName}`}>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className={`text-xs font-semibold uppercase tracking-[0.32em] ${tone === 'dark' ? 'text-[#C9A84C]' : 'text-[#1A3A6B]'}`}>
              Consultation
            </div>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h3>
            <p className={`mt-3 max-w-2xl text-sm leading-6 md:text-base ${tone === 'dark' ? 'text-white/70' : 'text-[#07080A]/65'}`}>
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={emailHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#07080A] transition-transform hover:scale-[1.02]"
            >
              Book Service
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] transition-all ${tone === 'dark' ? 'border-white/20 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]' : 'border-[#07080A]/15 text-[#07080A] hover:border-[#07080A]'} `}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}