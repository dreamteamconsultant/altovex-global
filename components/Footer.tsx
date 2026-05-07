export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B0E] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/altovex-logo.jpg" alt="Altovex Global Logistics logo" className="w-10 h-10 rounded-lg object-cover border border-[#C9A84C] bg-[#07080A]" />
              <span className="font-sans font-bold text-xl">
                Altovex <span className="text-[#C9A84C]">Global Logistics</span>
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Just in time, every time. Executing agri commodity trading, transport, logistics, warehousing, and cross-border coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C9A84C]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Architecture', href: '#architecture' },
                { label: 'Network', href: '#network' },
                { label: 'Fleet', href: '#fleet' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C9A84C]">Services</h4>
            <ul className="space-y-2">
              {[
                'Agri Commodity Trading',
                'Transport',
                'Logistics',
                'Warehousing',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-[#888888] hover:text-[#C9A84C] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C9A84C]">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Security', href: '#' },
                { label: 'Compliance', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] pt-8">
          <div className="text-center text-[#888888] text-sm">
            <p>
              &copy; {currentYear} Altovex Global Logistics Co. Ltd. All rights reserved. |{' '}
              <a href="#" className="hover:text-[#C9A84C] transition-colors">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="hover:text-[#C9A84C] transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
