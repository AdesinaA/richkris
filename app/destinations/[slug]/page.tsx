import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PropertyCard from '@/components/PropertyCard';
import { DESTINATIONS, PROPERTIES } from '@/lib/data';
export function generateStaticParams() { return DESTINATIONS.map((d) => ({ slug: d.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const d = DESTINATIONS.find((x) => x.slug === params.slug);
  return { title: d ? `${d.country} — RICHKRIS LTD` : 'Destination — RICHKRIS LTD' };
}
export default function Page({ params }: { params: { slug: string } }) {
  const d = DESTINATIONS.find((x) => x.slug === params.slug);
  if (!d) notFound();
  const dest = d as (typeof DESTINATIONS)[number];
  const listings = PROPERTIES.filter((p) => p.countrySlug === dest.slug);
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <Image src={dest.image} alt={dest.country} fill priority className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-14 pt-40">
          <Reveal>
            <Link href="/destinations" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory/60 hover:text-champagne"><ArrowLeft size={14}/> All Destinations</Link>
            <p className="mt-6 text-[11px] uppercase tracking-[0.42em] text-champagne">{dest.region}</p>
            <h1 className="mt-4 font-serif font-light text-6xl md:text-8xl text-ivory">{dest.country}</h1>
            <p className="mt-3 font-serif italic text-2xl text-champagnelight font-light">{dest.tagline}</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <Reveal>
          <h2 className="font-serif font-light text-3xl md:text-4xl text-ivory leading-snug">Introduction</h2>
          <p className="mt-5 font-light text-[17px] leading-[1.85] text-ivory/65">{dest.description} Our counsel covers prime neighbourhoods, lifestyle infrastructure, tax and structuring introductions, and long-hold investment logic — never pressure, always perspective.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-white/10 bg-ink p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Regional Market Snapshot</p>
            <div className="mt-6 space-y-5">
              {[['Indicative rental yield', dest.market.avgYield], ['Annual price movement', dest.market.growth], ['Collection entry', dest.market.entry], ['Live residences', `${listings.length}`]].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-sm font-light text-ivory/55">{k}</span><span className="font-serif text-2xl text-ivory font-light">{v}</span></div>
              ))}
            </div>
            <p className="mt-6 text-xs font-light leading-relaxed text-ivory/40">Illustrative figures for orientation only. Formal investment counsel is provided on a client-by-client basis.</p>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24">
        <Reveal><p className="text-[11px] uppercase tracking-[0.38em] text-champagne flex items-center gap-4"><span className="h-px w-10 bg-champagne/70"/>Local Collection</p>
        <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-ivory">Residences in {dest.country}.</h2></Reveal>
        {listings.length === 0 ? (
          <p className="mt-8 font-light text-ivory/60">New mandates in this market are being finalised. <Link href="/contact" className="text-champagne underline">Enquire for off-market access.</Link></p>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{listings.map((p) => (<PropertyCard key={p.slug} p={p} />))}</div>
        )}
      </section>
    </div>
  );
}