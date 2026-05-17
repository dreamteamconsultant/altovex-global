export default function Socials() {
  const links = [
    { href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#', label: 'YouTube', colorFrom: 'from-red-600', colorTo: 'to-red-800', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ) },
    { href: process.env.NEXT_PUBLIC_TIKTOK_URL || '#', label: 'TikTok', colorFrom: 'from-black', colorTo: 'to-gray-800', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v10.5A4.5 4.5 0 1 1 9 8v6a4.5 4.5 0 1 0 6 4.24V7h3V2h-6z" />
      </svg>
    ) },
    { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', label: 'Instagram', colorFrom: 'from-indigo-600', colorTo: 'to-indigo-800', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3A4.7 4.7 0 1 0 16.7 13 4.7 4.7 0 0 0 12 8.3zM18.5 6.1a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
      </svg>
    ) },
    { href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', label: 'Facebook', colorFrom: 'from-blue-600', colorTo: 'to-blue-800', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-3h2.1V9.2c0-2.1 1.2-3.3 3-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
      </svg>
    ) },
    { href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', label: 'LinkedIn', colorFrom: 'from-blue-600', colorTo: 'to-blue-800', svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ) },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

        <div className="relative flex items-center gap-x-2 p-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className={`relative"`}
            >
              <div
                style={{ clipPath: 'url(#squircleClip)' }}
                className={`w-14 h-14 ${l.colorFrom} ${l.colorTo} rounded-xl flex items-center justify-center shadow-lg border border-white/10 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {l.svg}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
