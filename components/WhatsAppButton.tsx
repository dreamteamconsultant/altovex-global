import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppButton() {
  const href = 'https://wa.me/254708157713?text=' + encodeURIComponent('Hello Altovex, I would like to book a consultation.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={26} />
    </a>
  );
}