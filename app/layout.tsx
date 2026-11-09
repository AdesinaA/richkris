import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://richkris.co.uk'),
  title: 'RICHKRIS LTD — International Luxury Real Estate',
  description: 'Headquartered in the United Kingdom. Exceptional residences across the UK, UAE, Spain, France, Italy and Portugal.',
  icons: {
    // Note: app/favicon.ico is auto-linked by the App Router convention.
    // icon.svg, icon.png and apple-icon.png live as convention ROUTES in app/
    // (also generated from the master SVG) and are linked explicitly here so
    // each URL appears exactly once — no duplicate declarations.
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'RICHKRIS LTD — International Luxury Real Estate',
    description: 'A global portfolio of exceptional residences. London · Dubai · Marbella · Paris · Como · Lisbon.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-ivory">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}