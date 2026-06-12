type HighlightBandProps = {
  variant?: 'light' | 'dark';
};

const items = [
  { value: '3+', label: 'Countries' },
  { value: '24/7', label: 'Visibility' },
  { value: '100%', label: 'Compliance' },
  { value: 'EAC + SADC', label: 'Coverage' },
];

export default function HighlightBand({ variant = 'light' }: HighlightBandProps) {
  const dark = variant === 'dark';
  return (
    <section className={`${dark ? 'bg-[#07080A]' : 'bg-white'} border-y ${dark ? 'border-white/10' : 'border-[#07080A]/10'}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 md:gap-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-start gap-2 rounded-2xl border ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-[#07080A]/10 bg-white'} p-5 md:p-6 transition-colors hover:border-[#C9A84C]/40`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">0{i + 1}</span>
              <span className={`text-2xl font-extrabold md:text-3xl lg:text-4xl ${dark ? 'text-white' : 'text-[#07080A]'}`}>
                {item.value}
              </span>
              <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/60' : 'text-[#07080A]/60'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
