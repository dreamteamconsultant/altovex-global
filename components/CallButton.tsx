import { PhoneCall } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+254708157713"
      className="fixed right-6 bottom-32 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14 md:right-12 md:bottom-36 lg:right-20 lg:bottom-44"
      aria-label="Call Altovex"
      title="Call Altovex"
    >
      <PhoneCall size={20} />
    </a>
  );
}
