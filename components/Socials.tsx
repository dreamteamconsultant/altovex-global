'use client';

const socialLinks = [
  {
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#',
    label: 'YouTube',
    gradient: 'from-red-500 to-red-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: process.env.NEXT_PUBLIC_TIKTOK_URL || '#',
    label: 'TikTok',
    gradient: 'from-slate-700 to-slate-900',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v10.5A4.5 4.5 0 1 1 9 8v6a4.5 4.5 0 1 0 6 4.24V7h3V2h-6z" />
      </svg>
    ),
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    label: 'Instagram',
    gradient: 'from-pink-500 to-purple-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3A4.7 4.7 0 1 0 16.7 13 4.7 4.7 0 0 0 12 8.3zM18.5 6.1a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
      </svg>
    ),
  },
  {
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
    label: 'Facebook',
    gradient: 'from-blue-500 to-blue-800',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-3h2.1V9.2c0-2.1 1.2-3.3 3-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
    label: 'LinkedIn',
    gradient: 'from-blue-600 to-cyan-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <>
      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <div className="rounded-2xl border border-border bg-card/90 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-lg">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${link.gradient} border border-white/10 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_0_8px_var(--glow)]`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 left-4 z-40 md:hidden">
        <div className="rounded-2xl border border-border bg-card/90 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-lg">
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${link.gradient} border border-white/10 transition-all duration-300 ease-in-out hover:scale-105`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}