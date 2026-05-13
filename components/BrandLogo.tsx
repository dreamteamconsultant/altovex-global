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
        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-[#07080A]/10 bg-white"
      >
        <Image
          src="/altovex-logo.jpg"
          alt="Altovex Global Logistics"
          width={48}
          height={48}
          className="h-12 w-12 object-cover"
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