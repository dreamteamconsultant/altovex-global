import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  scrolled?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ scrolled = false, compact = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${scrolled ? 'border-white/15 bg-white/5 shadow-lg shadow-black/20' : 'border-[#07080A]/10 bg-white shadow-[0_10px_30px_rgba(7,8,10,0.08)]'}`}
      >
        <Image
          src="/altovex-mark.svg"
          alt="Altovex Global Logistics"
          width={34}
          height={34}
          className="h-8 w-8"
          priority
        />
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.32em] transition-colors duration-300 ${scrolled ? 'text-white/60' : 'text-[#07080A]/55'}`}>
            Altovex Global
          </span>
          <span className={`text-sm font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#07080A]'}`}>
            Logistics
          </span>
        </span>
      )}
    </Link>
  );
}