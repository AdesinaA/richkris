"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BedDouble, Bath, Ruler, MapPin, Check, X, Expand } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PropertyCard from '@/components/PropertyCard';
import EnquiryForm from '@/components/EnquiryForm';
import type { Property } from '@/lib/data';

export default function PropertyClient({ property: p, similar }: { property: Property; similar: Property[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  return (
    <div className="bg-charcoal">
      {/* Gallery */}
      <section className="pt-[68px]">
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-3 p-3">
          <div className="relative overflow-hidden aspect-[16/11] lg:aspect-auto lg:min-h-[78vh] cursor-zoom-in group" onClick={()=>setLightbox(true)} onKeyDown={(e)=>{if(e.key==='Enter'||e.key===' '){setLightbox(true);}}} role="button" tabIndex={0} aria-label={`Open gallery for ${p.title}`}>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{opacity:0.4, scale:1.02}} animate={{opacity:1, scale:1}} exit={{opacity:0}} transition={{duration:0.6}} className="absolute inset-0">
                <Image src={p.images[active]} alt={p.title} fill priority className="img-duotone object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20 pointer-events-none"/>
            <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/40 backdrop-blur text-ivory opacity-0 group-hover:opacity-100 transition"><Expand size={16}/></span>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">{p.location} — {p.country}</p>
                <h1 className="mt-2 font-serif font-light text-4xl md:text-6xl text-ivory leading-[1.0]">{p.title}</h1>
              </div>
              <p className="hidden md:block text-[11px] tracking-[0.3em] text-ivory/60">{String(active+1).padStart(2,'0')} / {String(p.images.length).padStart(2,'0')}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
            {p.images.map((src,i)=>(
              <button key={src+i} type="button" aria-label={`View image ${i + 1} of ${p.title}`} aria-pressed={i===active} onClick={()=>setActive(i)} className={`relative overflow-hidden aspect-[16/11] lg:aspect-auto lg:flex-1 lg:min-h-0 ${i===active ? 'ring-1 ring-champagne' : 'opacity-70 hover:opacity-100 transition'}`}>
                <Image src={src} alt={`${p.title} — thumbnail ${i + 1}`} fill sizes="30vw" className="img-duotone object-cover"/>
              </button>
            ))}
            <div className="col-span-3 lg:col-span-1 bg-ink border border-white/10 p-6 flex items-center justify-between">
              <div><p className="text-[10px] uppercase tracking-[0.3em] text-champagne">Guide Price</p><p className="mt-1 font-serif text-3xl text-ivory font-light">{p.displayPrice}</p></div>
              <a href="#enquire" className="bg-champagne px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] text-charcoal hover:bg-ivory transition">Enquire</a>
            </div>
          </div>
        </div>
      </section>
      {/* Overview */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1.5fr_1fr] gap-14">
        <div>
          <Reveal>
            <Link href="/collection" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory/50 hover:text-champagne"><ArrowLeft size={14}/> Back to Collection</Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {[p.category, p.country, p.area].map((t)=>(<span key={t} className="border border-white/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-ivory/70">{t}</span>))}
              {p.tag && <span className="bg-champagne px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-charcoal">{p.tag}</span>}
            </div>
            <h2 className="mt-8 font-serif font-light text-4xl md:text-5xl text-ivory leading-[1.05]">Overview</h2>
            <p className="mt-6 font-light text-[17px] leading-[1.85] text-ivory/70">{p.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { icon: BedDouble, v: `${p.beds}`, l: 'Bedrooms' },
                { icon: Bath, v: `${p.baths}`, l: 'Bathrooms' },
                { icon: Ruler, v: p.area, l: 'Interior' },
                { icon: MapPin, v: p.coords.split(',')[0], l: 'Coordinates' },
              ].map((s)=>(
                <div key={s.l} className="bg-charcoal p-6 text-center"><s.icon size={18} strokeWidth={1.2} className="mx-auto text-champagne"/><p className="mt-3 font-serif text-2xl text-ivory font-light">{s.v}</p><p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ivory/45">{s.l}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="mt-12 font-serif font-light text-3xl text-ivory">Features & Amenities</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8">
              {p.features.map((f)=>(
                <li key={f} className="flex items-center gap-3 border-b border-white/10 py-4 font-light text-ivory/75"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-champagne/50 text-champagne shrink-0"><Check size={12}/></span>{f}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="space-y-6">
          <div id="enquire" className="scroll-mt-28"><EnquiryForm property={`${p.title} — ${p.location} (${p.displayPrice})`} /></div>
          <div className="border border-white/10 bg-ink p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Location</p>
            <p className="mt-3 font-serif text-2xl text-ivory font-light">{p.location}</p>
            <p className="mt-1 font-light text-ivory/60">{p.country} · {p.coords}</p>
            <Link href={`/destinations/${p.countrySlug}`} className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-champagne">Explore {p.country} <ArrowRight size={14}/></Link>
          </div>
          <div className="border border-white/10 p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Private Representation</p>
            <p className="mt-3 font-light text-sm leading-relaxed text-ivory/60">Viewings by private appointment. Proof of funds may be requested prior to confirmation. Off-market alternatives available on request.</p>
          </div>
        </div>
      </section>
      {/* Similar */}
      <section className="border-t border-white/10 mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <Reveal><p className="text-[11px] uppercase tracking-[0.38em] text-champagne flex items-center gap-4"><span className="h-px w-10 bg-champagne/70"/>Continue Exploring</p><h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-ivory">You may also consider.</h2></Reveal>
          <Reveal delay={0.1}><Link href="/collection" className="hidden md:inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-[11px] uppercase tracking-[0.26em] text-ivory hover:border-champagne transition">View All</Link></Reveal>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">{similar.map((s)=>(<PropertyCard key={s.slug} p={s}/>))}</div>
      </section>
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] bg-charcoal/95 backdrop-blur flex flex-col" onClick={()=>setLightbox(false)} role="dialog" aria-modal="true" aria-label={`${p.title} gallery`}>
            <div className="flex items-center justify-between px-6 md:px-10 py-5"><p className="text-[11px] uppercase tracking-[0.3em] text-ivory/60">{p.title} — {active+1} / {p.images.length}</p><button type="button" className="text-ivory" aria-label="Close gallery"><X size={26} strokeWidth={1}/></button></div>
            <div className="relative flex-1 mx-4 md:mx-10 mb-4 overflow-hidden" onClick={(e)=>e.stopPropagation()}>
              <Image src={p.images[active]} alt={`${p.title} — view ${active + 1}`} fill className="object-contain"/>
              <button type="button" aria-label="Previous image" onClick={(e)=>{e.stopPropagation();setActive((active-1+p.images.length)%p.images.length);}} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/60 text-ivory"><ArrowLeft size={18}/></button>
              <button type="button" aria-label="Next image" onClick={(e)=>{e.stopPropagation();setActive((active+1)%p.images.length);}} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/60 text-ivory"><ArrowRight size={18}/></button>
            </div>
            <div className="flex justify-center gap-3 pb-8" onClick={(e)=>e.stopPropagation()}>
              {p.images.map((s,i)=>(<button key={s} type="button" aria-label={`View image ${i + 1}`} aria-pressed={i===active} onClick={()=>setActive(i)} className={`relative h-16 w-24 overflow-hidden ${i===active?'ring-1 ring-champagne':'opacity-50'}`}><Image src={s} alt={`${p.title} thumbnail ${i + 1}`} fill className="object-cover"/></button>))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}