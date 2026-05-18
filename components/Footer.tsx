export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 text-foreground md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/altovex-logo.jpg" alt="Altovex Global Logistics logo" className="w-10 h-10 rounded-lg object-cover border border-border bg-card" />
              <span className="font-sans font-bold text-base md:text-lg">
                Altovex <span className="text-primary">Global Logistics</span>
              </span>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">
              Just in time, every time. Executing agri commodity trading, transport, logistics, warehousing, and cross-border coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Architecture', href: '/architecture' },
                { label: 'Network', href: '/network' },
                { label: 'Fleet', href: '/fleet' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base">Services</h4>
            <ul className="space-y-2">
              {[
                'Agri Commodity Trading',
                'Transport',
                'Logistics',
                'Warehousing',
              ].map((service) => (
                <li key={service}>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/contact' },
                { label: 'Terms of Service', href: '/contact' },
                { label: 'Security', href: '/compliance' },
                { label: 'Compliance', href: '/compliance' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-muted-foreground text-xs md:text-sm">
            <p>
              &copy; {currentYear} Altovex Global Logistics Co. Ltd. All rights reserved. |{' '}
              <a href="/contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="/contact" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
