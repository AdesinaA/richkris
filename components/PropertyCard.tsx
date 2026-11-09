"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Property } from '@/lib/data';
export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href={`/property/${p.slug}`} className="group block">
      <div className="relative overflow-hidden bg-ink aspect-[4/5]">
        <Image src={p.images[0]} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="img-duotone object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
        {p.tag && <span className="absolute left-5 top-5 border border-ivory/30 bg-charcoal/40 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-ivory">{p.tag}</span>}
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory opacity-0 transition duration-500 group-hover:opacity-100 bg-charcoal/40 backdrop-blur"><ArrowUpRight size={16}/></span>
        <div className="absolute bottom-0 inset-x-0 p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">{p.location} — {p.country}</p>
          <h3 className="mt-2 font-serif text-3xl text-ivory font-light leading-tight">{p.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-white/10 py-4">
        <p className="text-[15px] tracking-wide text-ivory/90">{p.displayPrice}</p>
        <p className="text-[11px] uppercase tracking-[0.24em] text-ivory/50">{p.beds} Beds · {p.baths} Baths · {p.category}</p>
      </div>
    </Link>
  );
}