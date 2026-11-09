import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import EnquiryForm from '@/components/EnquiryForm';
export const metadata: Metadata = { title: 'Contact — RICHKRIS LTD', description: 'Request a private consultation with RICHKRIS LTD, London.' };
export default function Page() {
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop" alt="Private consultation interior" fill className="img-duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/50" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 pb-14 pt-40">
          <Reveal><p className="text-[11px] uppercase tracking-[0.42em] text-champagne flex items-center gap-4"><span className="h-px w-12 bg-champagne"/>Contact</p>
          <h1 className="mt-5 font-serif font-light text-5xl md:text-7xl text-ivory leading-[1.0]">Begin with a<br/><span className="italic text-champagnelight">conversation.</span></h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <Reveal>
            <h2 className="font-serif font-light text-3xl md:text-4xl text-ivory">London atelier — by appointment.</h2>
            <p className="mt-5 font-light leading-relaxed text-ivory/60">For acquisitions, disposals, portfolio counsel or press — write to us. Every message is read personally and answered within one business day.</p>
          </Reveal>
          <div className="mt-10 space-y-px border border-white/10 bg-white/5">
            {[
              { icon: MapPin, k: 'Address', v: 'Hackney, London — United Kingdom' },
              { icon: Mail, k: 'Email', v: 'enquiries@richkris.co.uk' },
              { icon: Phone, k: 'Telephone', v: '+44 (0)79 5789 7657' },
              { icon: Clock, k: 'Hours', v: 'Mon – Fri, 9:00 – 18:00 GMT · Viewings by appointment' },
            ].map((r, i) => (
              <Reveal key={r.k} delay={i * 0.06} className="flex gap-5 bg-charcoal p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne"><r.icon size={17} strokeWidth={1.4}/></span>
                <span><span className="block text-[10px] uppercase tracking-[0.3em] text-ivory/45">{r.k}</span><span className="mt-1 block font-light text-ivory/85">{r.v}</span></span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-8 border border-champagne/30 bg-champagne/10 p-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne">A note on confidentiality</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-ivory/65">Off-market mandates and discreet disposals are discussed under NDA where appropriate. Your details are never shared.</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}><EnquiryForm /></Reveal>
      </section>
    </div>
  );
}