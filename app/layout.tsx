import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.altovexgl.site';

export const metadata: Metadata = {
  title: 'Altovex Global Logistics Co. Ltd',
  description: 'Altovex Global Logistics Company Limited delivers agri commodity trading, transport, logistics, cold chain, customs compliance, and warehousing across East Africa and beyond.',
  generator: 'Next.js',
  keywords: ['logistics', 'transport', 'warehousing', 'cold chain', 'customs clearance', 'agri commodity trading', 'East Africa'],
  authors: [{ name: 'Altovex Global Logistics Co. Ltd' }],
  creator: 'Altovex Global Logistics Co. Ltd',
  publisher: 'Altovex Global Logistics Co. Ltd',
  robots: 'index, follow',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Altovex Global Logistics Co. Ltd',
    title: 'Altovex Global Logistics Co. Ltd',
    description: 'Executive logistics architecture for agri commodity trading, transport, and regional supply chains.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Altovex Global Logistics Co. Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AltovexLogistic',
    creator: '@AltovexLogistic',
    title: 'Altovex Global Logistics Co. Ltd',
    description: 'Executive logistics architecture for trade, transport, and compliance.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#07080A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased dark bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
