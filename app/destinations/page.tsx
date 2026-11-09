import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { DESTINATIONS, PROPERTIES } from '@/lib/data';
export const metadata: Metadata = { title: 'Destinations — RICHKRIS LTD', description: 'Six international markets represented by RICHKRIS LTD.' };
export default function Page() {
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2400&auto=format&fit=crop" alt="International destinations" fill className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/50" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-14 pt-40">
          <Reveal><p className="text-[11px] uppercase tracking-[0.42em] text-champagne flex items-center gap-4"><span className="h-px w-12 bg-champagne"/>Destinations</p>
          <h1 className="mt-5 font-serif font-light text-5xl md:text-7xl text-ivory leading-[1.0]">Six markets.<br/><span className="italic text-champagnelight">One standard.</span></h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24 space-y-6">
        {DESTINATIONS.map((d, i) => {
          const count = PROPERTIES.filter((p) => p.countrySlug === d.slug).length;
          return (
            <Reveal key={d.slug}>
              <Link href={`/destinations/${d.slug}`} className="group grid lg:grid-cols-2 border border-white/10 bg-ink overflow-hidden hover:border-champagne/40 transition">
                <div className={`relative overflow-hidden min-h-[320px] lg:min-h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={d.image} alt={d.country} fill sizes="50vw" className="img-duotone object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">0{i + 1} — {d.region}</p>
                  <h2 className="mt-4 font-serif font-light text-4xl md:text-6xl text-ivory">{d.country}</h2>
                  <p className="mt-2 font-serif italic text-xl text-champagnelight font-light">{d.tagline}</p>
                  <p className="mt-5 font-light leading-relaxed text-ivory/60">{d.description}</p>
                  <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-7 text-sm">
                    <div><p className="text-[10px] uppercase tracking-[0.28em] text-ivory/45">Avg. Yield</p><p className="mt-1 font-serif text-2xl text-ivory">{d.market.avgYield}</p></div>
                    <div><p className="text-[10px] uppercase tracking-[0.28em] text-ivory/45">Growth</p><p className="mt-1 font-serif text-2xl text-ivory">{d.market.growth}</p></div>
                    <div><p className="text-[10px] uppercase tracking-[0.28em] text-ivory/45">Entry</p><p className="mt-1 font-serif text-2xl text-ivory">{d.market.entry}</p></div>
                  </div>
                  <span className="mt-9 inline-flex w-fit items-center gap-3 border border-champagne/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.26em] text-ivory group-hover:bg-champagne group-hover:text-charcoal transition">{count} Residence{count !== 1 ? 's' : ''} <ArrowUpRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}