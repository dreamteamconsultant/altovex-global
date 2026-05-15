import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  scrolled?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ scrolled = false, compact = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#07080A]/10 bg-white md:h-16 md:w-16">
        <Image
          src="/altovex-logo.jpg"
          alt="Altovex Global Logistics"
          width={64}
          height={64}
          className="h-14 w-14 object-cover md:h-16 md:w-16"
          priority
        />
      </span>

      {!compact && (
        <span className="min-w-0 leading-none">
          <span className={`block whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 md:text-[0.75rem] ${scrolled ? 'text-white/60' : 'text-[#1A3A6B]/70'}`}>
            Altovex Global Logistics
          </span>
          <span className={`mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.26em] transition-colors duration-300 md:text-[0.68rem] ${scrolled ? 'text-white' : 'text-[#1A3A6B]'}`}>
            Company Limited
          </span>
        </span>
      )}
    </Link>
  );
}