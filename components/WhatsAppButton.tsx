import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppButton() {
  const href = 'https://wa.me/254708157713?text=' + encodeURIComponent('Hello Altovex, I would like to book a consultation.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-20 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14 md:right-12 md:bottom-24 lg:right-20 lg:bottom-28"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={22} />
    </a>
  );
}