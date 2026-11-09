import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function SiteFooter() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-champagne/70 text-champagne font-serif text-2xl">R</div>
              <div className="leading-none">
                <p className="font-serif text-2xl tracking-[0.18em] text-ivory">RICHKRIS</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.42em] text-champagne">Ltd · London</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-light leading-relaxed text-ivory/60">An international luxury real estate house headquartered in the United Kingdom, representing exceptional residences across the UK, UAE, Spain, France, Italy and Portugal.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border border-champagne/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-ivory hover:bg-champagne hover:text-charcoal transition">Request Consultation <ArrowUpRight size={14}/></Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Explore</p>
            <ul className="mt-6 space-y-3 text-ivory/70 font-light">
              <li><Link className="hover:text-ivory" href="/collection">Property Collection</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations">Destinations</Link></li>
              <li><Link className="hover:text-ivory" href="/about">About Us</Link></li>
              <li><Link className="hover:text-ivory" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Destinations</p>
            <ul className="mt-6 space-y-3 text-ivory/70 font-light">
              <li><Link className="hover:text-ivory" href="/destinations/united-kingdom">United Kingdom</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations/united-arab-emirates">United Arab Emirates</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations/spain">Spain</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations/france">France</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations/italy">Italy</Link></li>
              <li><Link className="hover:text-ivory" href="/destinations/portugal">Portugal</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">London Atelier</p>
            <p className="mt-6 font-light text-ivory/70 leading-relaxed">Hackney, London<br/>United Kingdom<br/><br/>enquiries@richkris.co.uk<br/>+44 (0)79 5789 7657<br/><span className="text-ivory/40 text-sm">By private appointment only</span></p>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.24em] text-ivory/40">
          <p>© {new Date().getFullYear()} Richkris Ltd. All rights reserved.</p>
          <p>International Luxury Real Estate · UK Headquartered</p>
        </div>
      </div>
    </footer>
  );
}