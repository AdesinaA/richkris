import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
export const metadata: Metadata = { title: 'About — RICHKRIS LTD', description: 'Brand story, philosophy and international presence of RICHKRIS LTD.' };
export default function Page() {
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop" alt="London" fill className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/50" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-14 pt-40">
          <Reveal><p className="text-[11px] uppercase tracking-[0.42em] text-champagne flex items-center gap-4"><span className="h-px w-12 bg-champagne"/>About the House</p>
          <h1 className="mt-5 font-serif font-light text-5xl md:text-7xl text-ivory leading-[1.0]">A private practice<br/>in <span className="italic text-champagnelight">exceptional</span> property.</h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ivory leading-[1.08]">Headquartered in London. Fluent in six markets.</h2>
          <div className="editorial-line my-10" />
          <div className="space-y-6 font-light text-[17px] leading-[1.85] text-ivory/65">
            <p>RICHKRIS LTD was founded on a simple conviction: that exceptional property deserves unhurried, informed and deeply personal representation. From our London base, we advise private clients on acquisition, disposal and long-hold strategy across the United Kingdom, the United Arab Emirates, Spain, France, Italy and Portugal.</p>
            <p>We are deliberately selective. We represent a concise collection of villas, penthouses, heritage apartments and estates — each visited, each understood, each introduced with context on architecture, neighbourhood and value.</p>
            <p>Our clients include international buyers, investors, homeowners and families seeking a foothold in more than one country. What unites them is an appreciation for discretion, design and decisions made with clarity.</p>
          </div>
        </Reveal>
        <div className="space-y-5">
          <Reveal delay={0.05} className="relative overflow-hidden aspect-[4/3]">
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" alt="Interior" fill className="img-duotone object-cover" />
          </Reveal>
          <div className="grid grid-cols-3 gap-5">
            {[['06','Markets'],['09','Residences'],['01','London office']].map(([a,b])=>(
              <Reveal key={b} className="border border-white/10 bg-ink p-6 text-center"><p className="font-serif text-4xl text-ivory font-light">{a}</p><p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ivory/50">{b}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ivory text-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal className="max-w-3xl"><p className="text-[11px] uppercase tracking-[0.38em] text-champagne flex items-center gap-4"><span className="h-px w-10 bg-champagne/70"/>Philosophy</p>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-6xl leading-[1.03]">How we work.</h2></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {[
              { n: '01', t: 'Selectivity over scale', d: 'A concise, curated collection — never an exhaustive portal. If we represent it, we believe in it.' },
              { n: '02', t: 'Counsel over closing', d: 'Honest guidance on value, yield and legacy — including when the right advice is to wait.' },
              { n: '03', t: 'Relationship over transaction', d: 'One point of contact from first conversation to completion — and beyond, across borders.' },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08} className="bg-ivory p-10 md:p-12"><p className="font-serif italic text-xl text-champagne">{v.n}</p><h3 className="mt-3 font-serif text-3xl font-light">{v.t}</h3><p className="mt-4 font-light leading-relaxed text-charcoal/60">{v.d}</p></Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-charcoal/10 pt-10">
            <p className="font-serif italic font-light text-2xl md:text-3xl text-charcoal/80">“Discretion is our first language. Design is our second.”</p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-charcoal px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory hover:bg-champagne hover:text-charcoal transition">Speak With Us <ArrowRight size={15}/></Link>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
        <Reveal><p className="text-[11px] uppercase tracking-[0.38em] text-champagne">International Presence</p>
        <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-ivory">Where we operate.</h2></Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[['United Kingdom','London — Headquarters'],['United Arab Emirates','Dubai — Gulf desk'],['Spain','Marbella — Mediterranean desk'],['France','Paris — European desk'],['Italy','Como — Lakes desk'],['Portugal','Lisbon — Atlantic desk']].map(([c,r],i)=>(
            <Reveal key={c} delay={(i%3)*0.07} className="bg-charcoal p-8"><p className="text-[10px] uppercase tracking-[0.3em] text-champagne">0{i+1}</p><h3 className="mt-2 font-serif text-2xl text-ivory font-light">{c}</h3><p className="mt-1 text-sm font-light text-ivory/50">{r}</p></Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs font-light tracking-wide text-ivory/40">Representation is coordinated centrally from London. Market desks reflect areas of active representation, not necessarily physical offices.</p>
      </section>
    </div>
  );
}