"use client";
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/Reveal';
import type { Property } from '@/lib/data';

const COUNTRIES = ['All', 'United Kingdom', 'United Arab Emirates', 'Spain', 'France', 'Italy', 'Portugal'];
const CATEGORIES = ['All', 'Villa', 'Apartment', 'Penthouse', 'Townhouse', 'Estate'];
const PRICES = [
  { label: 'All prices', test: (_p: Property) => true },
  { label: 'Under €2M', test: (p: Property) => eur(p) < 2000000 },
  { label: '€2M – €5M', test: (p: Property) => eur(p) >= 2000000 && eur(p) <= 5000000 },
  { label: 'Above €5M', test: (p: Property) => eur(p) > 5000000 },
];
function eur(p: Property) {
  if (p.currency === 'EUR') return p.price;
  if (p.currency === 'GBP') return p.price * 1.17;
  return p.price * 0.25; // AED approx
}

export default function CollectionClient({ properties }: { properties: Property[] }) {
  const [country, setCountry] = useState('All');
  const [cat, setCat] = useState('All');
  const [price, setPrice] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const filtered = useMemo(() => properties.filter((p) => (country === 'All' || p.country === country) && (cat === 'All' || p.category === cat) && PRICES[price].test(p)), [country, cat, price, properties]);
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop" alt="The RICHKRIS property collection" fill className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/50" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-14 pt-40">
          <Reveal><p className="text-[11px] uppercase tracking-[0.42em] text-champagne flex items-center gap-4"><span className="h-px w-12 bg-champagne"/>The Collection</p>
          <h1 className="mt-5 font-serif font-light text-5xl md:text-7xl leading-[1.0] text-ivory">Every residence,<br/><span className="italic text-champagnelight">deliberately</span> chosen.</h1>
          <p className="mt-6 max-w-xl font-light text-ivory/70">Filter by market, residence type and guide price. Each listing is privately represented by our London office.</p></Reveal>
        </div>
      </section>
      <div className="sticky top-[68px] z-30 bg-charcoal/95 backdrop-blur border-y border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button type="button" aria-expanded={showFilters} onClick={()=>setShowFilters(!showFilters)} className="flex shrink-0 items-center gap-2 border border-champagne/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-ivory">{showFilters ? <X size={14}/> : <SlidersHorizontal size={14}/>} Filters</button>
          {COUNTRIES.map((c)=>(
            <button type="button" key={c} aria-pressed={country===c} onClick={()=>setCountry(c)} className={`shrink-0 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition ${country===c ? 'bg-ivory text-charcoal border-ivory' : 'border-white/15 text-ivory/70 hover:border-champagne hover:text-ivory'}`}>{c}</button>
          ))}
          <span className="ml-auto shrink-0 text-[11px] uppercase tracking-[0.24em] text-ivory/50">{filtered.length} Result{filtered.length!==1?'s':''}</span>
        </div>
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10">
              <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 grid md:grid-cols-2 gap-6">
                <div><p className="text-[10px] uppercase tracking-[0.3em] text-champagne mb-3">Residence Type</p><div className="flex flex-wrap gap-2">{CATEGORIES.map((c)=>(<button type="button" key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition ${cat===c?'bg-champagne text-charcoal border-champagne':'border-white/15 text-ivory/70 hover:border-champagne'}`}>{c}</button>))}</div></div>
                <div><p className="text-[10px] uppercase tracking-[0.3em] text-champagne mb-3">Guide Price (EUR equivalent)</p><div className="flex flex-wrap gap-2">{PRICES.map((p,i)=>(<button type="button" key={p.label} aria-pressed={price===i} onClick={()=>setPrice(i)} className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition ${price===i?'bg-champagne text-charcoal border-champagne':'border-white/15 text-ivory/70 hover:border-champagne'}`}>{p.label}</button>))}</div></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24">
        {filtered.length === 0 ? (
          <div className="border border-white/10 p-16 text-center"><p className="font-serif text-3xl text-ivory font-light">No residences match your criteria.</p><button type="button" onClick={()=>{setCountry('All');setCat('All');setPrice(0);}} className="mt-6 border border-champagne px-8 py-3 text-[11px] uppercase tracking-[0.28em] text-champagne">Reset Filters</button></div>
        ) : (
          <motion.div layout className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p,i)=>(
                <motion.div key={p.slug} layout initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:0.5,delay:Math.min(i*0.05,0.3)}}>
                  <PropertyCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}