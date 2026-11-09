"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BedDouble, Bath, Ruler } from 'lucide-react';
import { useRef } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { PROPERTIES, DESTINATIONS, COLLECTIONS, JOURNAL } from '@/lib/data';

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop" alt="Architectural villa at dusk" fill priority className="img-duotone object-cover" style={{ animation: 'kenburns 8s ease-out forwards' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-16 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.42em] text-champagne"><span className="h-px w-12 bg-champagne" /> London · Dubai · Marbella · Paris · Como · Lisbon</p>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }} className="mt-6 font-serif font-light leading-[0.95] text-ivory text-[13.5vw] md:text-[8.5vw] lg:text-[7.2vw]">
          Residences<br /><span className="italic text-champagnelight">beyond</span> borders.
        </motion.h1>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.7}} className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p className="max-w-xl text-[17px] font-light leading-relaxed text-ivory/75">RICHKRIS LTD is an international luxury real estate house headquartered in the United Kingdom — curating exceptional homes and investment residences across six global markets.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/collection" className="group flex items-center gap-3 bg-ivory px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal hover:bg-champagne transition">View Collection <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link>
            <Link href="/contact" className="flex items-center gap-3 border border-ivory/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory hover:border-champagne hover:text-champagne transition">Private Enquiry</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1,duration:1}} className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-ivory/15 pt-7 gap-6 text-ivory/70">
          {[['06','Global markets'],['09','Curated residences'],['£4.8M','Signature listing'],['Private','Client office']].map(([a,b])=>(
            <div key={b}><p className="font-serif text-3xl md:text-4xl text-ivory font-light">{a}</p><p className="mt-1 text-[10px] uppercase tracking-[0.3em]">{b}</p></div>
          ))}
        </motion.div>
      </motion.div>
      <div className="absolute right-6 top-1/2 hidden xl:block z-10"><p className="vertical-text text-[10px] uppercase tracking-[0.5em] text-ivory/50">Scroll — The Collection Awaits</p></div>
    </section>
  );
}

export default function Home() {
  const featured = PROPERTIES.slice(0, 3);
  return (
    <>
      <Hero />
      {/* Positioning statement */}
      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid lg:grid-cols-[1fr_1.6fr] gap-14">
          <Reveal><p className="text-[11px] uppercase tracking-[0.38em] text-champagne flex items-center gap-4"><span className="h-px w-10 bg-champagne/70"/>The House</p>
          <p className="mt-6 font-serif italic text-2xl text-ivory/80 font-light">Est. London —<br/>operating internationally.</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1.05] text-ivory">A quiet authority in <span className="italic text-champagne">international</span> property.</h2>
            <p className="mt-8 max-w-2xl font-light text-[17px] leading-relaxed text-ivory/65">We represent architecture of consequence — villas, penthouses, heritage apartments and private estates selected for design integrity, location permanence and long-term value. Every introduction is personal. Every portfolio, considered.</p>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 text-[11px] uppercase tracking-[0.28em] text-ivory/60">
              <span>Architecture & Design</span><span className="text-champagne">·</span><span>Investment Advisory</span><span className="text-champagne">·</span><span>Private Representation</span>
            </div>
            <Link href="/about" className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-champagne group">Our Philosophy <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/50 transition group-hover:bg-champagne group-hover:text-charcoal"><ArrowRight size={15}/></span></Link>
          </Reveal>
        </div>
      </section>
      {/* Featured properties — editorial asymmetric */}
      <section className="bg-ivory text-charcoal py-28 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <SectionHeading tone="light" eyebrow="Featured Residences" title="Currently representing." copy="A rotating selection from the live collection — each residence visited, verified and privately represented." />
            <Reveal delay={0.15}><Link href="/collection" className="inline-flex items-center gap-3 border border-charcoal/25 px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-charcoal hover:text-ivory transition">All Properties <ArrowUpRight size={15}/></Link></Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featured.map((p,i)=>(
              <Reveal key={p.slug} delay={i*0.12} className={i===1 ? 'md:mt-14' : ''}>
                <Link href={`/property/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4] bg-cream">
                    <Image src={p.images[0]} alt={p.title} fill sizes="33vw" className="img-duotone object-cover transition-transform duration-[1400ms] group-hover:scale-[1.07]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80"/>
                    {p.tag && <span className="absolute left-5 top-5 bg-ivory/95 px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-charcoal">{p.tag}</span>}
                    <div className="absolute bottom-0 p-7"><p className="text-[10px] uppercase tracking-[0.3em] text-champagne">{p.location}</p><h3 className="mt-2 font-serif text-[32px] leading-tight text-ivory font-light">{p.title}</h3></div>
                  </div>
                  <div className="flex items-center justify-between py-5 border-b border-charcoal/15">
                    <p className="font-medium tracking-wide">{p.displayPrice}</p>
                    <p className="flex items-center gap-4 text-[12px] text-charcoal/60"><span className="flex items-center gap-1.5"><BedDouble size={14}/>{p.beds}</span><span className="flex items-center gap-1.5"><Bath size={14}/>{p.baths}</span><span className="flex items-center gap-1.5"><Ruler size={14}/>{p.area}</span></p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Global portfolio strip */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <SectionHeading eyebrow="Global Portfolio" title="Six markets. One standard." copy="Headquartered in London. At home in the world&apos;s most enduring residential addresses." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d,i)=>(
              <Reveal key={d.slug} delay={(i%3)*0.1}>
                <Link href={`/destinations/${d.slug}`} className="group relative block overflow-hidden aspect-[4/3]">
                  <Image src={d.image} alt={d.country} fill sizes="33vw" className="img-duotone object-cover transition-transform duration-[1400ms] group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"/>
                  <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ivory/70">0{i+1} — {d.region}</div>
                  <div className="absolute bottom-0 p-7 w-full flex items-end justify-between">
                    <div><h3 className="font-serif text-3xl md:text-4xl text-ivory font-light">{d.country}</h3><p className="mt-1 font-light text-ivory/65 italic font-serif text-lg">{d.tagline}</p></div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory transition group-hover:bg-champagne group-hover:border-champagne group-hover:text-charcoal"><ArrowUpRight size={17}/></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Full-bleed cinematic break */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop" alt="Dubai skyline" fill className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-charcoal/55"/>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal><p className="text-[11px] uppercase tracking-[0.42em] text-champagne">Investment Perspective</p>
          <h2 className="mt-6 font-serif font-light text-4xl md:text-6xl leading-[1.05] text-ivory">“Buy the address that <span className="italic">outlives</span> the cycle.”</h2>
          <p className="mt-6 font-light text-ivory/70">Prime waterfront and heritage stock across Dubai, London and Marbella continues to outperform — selected here for scarcity, not spectacle.</p>
          <Link href="/collection" className="mt-10 inline-flex items-center gap-3 bg-ivory px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal hover:bg-champagne transition">Explore Investment Icons <ArrowRight size={15}/></Link></Reveal>
        </div>
      </section>
      {/* Collections */}
      <section className="bg-ivory text-charcoal py-28 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <SectionHeading tone="light" eyebrow="Signature Collections" title="Curated by character, not category." />
          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {COLLECTIONS.map((c,i)=>(
              <Reveal key={c.name} delay={i*0.08}>
                <Link href="/collection" className="group block">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <Image src={c.image} alt={c.name} fill sizes="25vw" className="img-duotone object-cover transition-transform duration-[1400ms] group-hover:scale-[1.08]"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent"/>
                    <div className="absolute bottom-0 p-6"><p className="font-serif italic text-champagnelight text-lg font-light">{c.note}</p><h3 className="mt-1 font-serif text-2xl text-ivory font-light leading-snug">{c.name}</h3></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {/* About split */}
          <div className="mt-28 grid lg:grid-cols-2 gap-12 items-stretch">
            <Reveal className="relative overflow-hidden min-h-[480px]">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" alt="London architecture" fill className="img-duotone object-cover"/>
              <div className="absolute bottom-6 left-6 bg-charcoal/85 backdrop-blur px-6 py-5 text-ivory"><p className="font-serif text-3xl font-light">London</p><p className="text-[10px] uppercase tracking-[0.3em] text-champagne mt-1">Headquarters · UK</p></div>
            </Reveal>
            <div className="flex flex-col justify-center bg-cream p-10 md:p-16">
              <Reveal><p className="text-[11px] uppercase tracking-[0.38em] text-champagne">About the House</p>
              <h3 className="mt-5 font-serif font-light text-4xl md:text-5xl leading-[1.05]">Personal representation for exceptional property.</h3>
              <p className="mt-6 font-light leading-relaxed text-charcoal/65">RICHKRIS LTD operates as a private client practice: one point of contact, off-market access where appropriate, and honest counsel on value, yield and legacy. We do not list widely. We represent deliberately.</p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
                {[['Private','Advisory'],['Global','Reach'],['Design','Literacy']].map(([a,b])=>(<div key={b}><p className="font-serif text-2xl">{a}</p><p className="text-[10px] uppercase tracking-[0.26em] text-charcoal/50 mt-1">{b}</p></div>))}
              </div>
              <Link href="/about" className="mt-10 inline-flex w-fit items-center gap-3 bg-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory hover:bg-champagne hover:text-charcoal transition">Discover Our Story <ArrowRight size={15}/></Link></Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="bg-charcoal py-28 md:py-36 border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <SectionHeading eyebrow="Private Client Services" title="Beyond the transaction." copy="Acquisition, disposal and portfolio counsel — delivered with discretion." />
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { n:'01', t:'Acquisition & Search', d:'Off-market sourcing, due diligence and negotiation across six markets — from Hackney to the Marina.' },
              { n:'02', t:'Sales & Representation', d:'Editorial photography, cinematic film and private placement for residences of distinction.' },
              { n:'03', t:'Investment & Relocation', d:'Yield modelling, structuring introductions and soft-landing support for international clients.' },
            ].map((s,i)=>(
              <Reveal key={s.n} delay={i*0.1} className="bg-charcoal p-10 md:p-12 group hover:bg-ink transition-colors duration-500">
                <p className="font-serif italic text-champagne text-xl">{s.n}</p>
                <h3 className="mt-4 font-serif text-3xl font-light text-ivory">{s.t}</h3>
                <p className="mt-4 font-light leading-relaxed text-ivory/60">{s.d}</p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-champagne">Enquire <ArrowRight size={14}/></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Journal */}
      <section className="bg-charcoal pb-28 md:pb-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-8">
            <SectionHeading eyebrow="Editorial" title="Notes on living well." />
            <Reveal delay={0.1} className="hidden md:block"><p className="text-[11px] uppercase tracking-[0.3em] text-ivory/50">Design · Investment · Lifestyle</p></Reveal>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {JOURNAL.map((j,i)=>(
              <Reveal key={j.title} delay={i*0.1}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[16/11]"><Image src={j.image} alt={j.title} fill sizes="33vw" className="img-duotone object-cover transition-transform duration-[1400ms] group-hover:scale-[1.07]"/></div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-champagne">{j.tag} — {j.read}</p>
                  <h3 className="mt-2 font-serif text-2xl md:text-[28px] font-light leading-snug text-ivory group-hover:text-champagnelight transition">{j.title}</h3>
                  <span className="mt-4 block h-px w-full bg-white/10 relative overflow-hidden"><span className="absolute inset-y-0 left-0 w-0 bg-champagne transition-all duration-700 group-hover:w-full"/></span>
                </div>
              </Reveal>
            ))}
          </div>
          {/* CTA */}
          <Reveal className="mt-24 relative overflow-hidden">
            <div className="relative bg-ink border border-white/10 px-8 py-16 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-25" aria-hidden="true"><Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" alt="Interior detail" fill className="object-cover"/></div>
              <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink"/>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.42em] text-champagne">Private Consultation</p>
                <h2 className="mx-auto mt-6 max-w-3xl font-serif font-light text-4xl md:text-6xl leading-[1.05] text-ivory">Begin with a <span className="italic text-champagne">conversation.</span></h2>
                <p className="mx-auto mt-6 max-w-xl font-light text-ivory/65">Whether buying, selling or simply exploring — speak with our London office. Discreet, unhurried, informed.</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-champagne px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal hover:bg-ivory transition">Request Consultation</Link>
                  <Link href="/collection" className="border border-ivory/30 px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory hover:border-champagne transition">Browse Collection</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}