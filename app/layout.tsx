import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'RICHKRIS LTD — International Luxury Real Estate',
  description: 'Headquartered in the United Kingdom. Exceptional residences across the UK, UAE, Spain, France, Italy and Portugal.',
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