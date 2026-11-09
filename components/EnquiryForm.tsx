"use client";
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
export default function EnquiryForm({ property, tone = 'dark' }: { property?: string; tone?: 'dark' | 'light' }) {
  const [sent, setSent] = useState(false);
  const dark = tone === 'dark';
  if (sent) return (
    <div className={`border p-10 text-center ${dark ? 'border-champagne/40 bg-ink' : 'border-champagne/50 bg-cream'}`}>
      <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${dark ? 'bg-champagne text-charcoal' : 'bg-charcoal text-ivory'}`}><Check size={22}/></span>
      <h3 className={`mt-6 font-serif text-3xl font-light ${dark ? 'text-ivory' : 'text-charcoal'}`}>Enquiry received.</h3>
      <p className={`mt-3 font-light ${dark ? 'text-ivory/60' : 'text-charcoal/60'}`}>A member of our London office will respond within one business day. All enquiries are treated in strict confidence.</p>
    </div>
  );
  return (
    <form onSubmit={(e)=>{e.preventDefault();setSent(true);}} className={`border p-8 md:p-10 ${dark ? 'border-white/10 bg-ink' : 'border-charcoal/15 bg-white'}`}>
      <p className="text-[11px] uppercase tracking-[0.32em] text-champagne">Private Enquiry</p>
      <h3 className={`mt-3 font-serif text-3xl font-light ${dark ? 'text-ivory' : 'text-charcoal'}`}>{property ? 'Enquire about this residence' : 'Request a consultation'}</h3>
      {property && <p className={`mt-2 text-sm font-light ${dark ? 'text-ivory/55' : 'text-charcoal/55'}`}>{property}</p>}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <input id="enquiry-name" name="name" required autoComplete="name" aria-label="Full name" placeholder="Full name" className={`border bg-transparent px-5 py-4 text-[15px] font-light placeholder:text-current/40 ${dark ? 'border-white/15 text-ivory placeholder:text-ivory/35' : 'border-charcoal/20 text-charcoal placeholder:text-charcoal/35'}`} />
        <input id="enquiry-email" name="email" required type="email" autoComplete="email" aria-label="Email address" placeholder="Email address" className={`border bg-transparent px-5 py-4 text-[15px] font-light ${dark ? 'border-white/15 text-ivory placeholder:text-ivory/35' : 'border-charcoal/20 text-charcoal placeholder:text-charcoal/35'}`} />
        <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" aria-label="Phone (optional)" placeholder="Phone (optional)" className={`border bg-transparent px-5 py-4 text-[15px] font-light ${dark ? 'border-white/15 text-ivory placeholder:text-ivory/35' : 'border-charcoal/20 text-charcoal placeholder:text-charcoal/35'}`} />
        <select id="enquiry-topic" name="topic" aria-label="Enquiry topic" className={`border bg-transparent px-5 py-4 text-[15px] font-light ${dark ? 'border-white/15 text-ivory/80' : 'border-charcoal/20 text-charcoal/80'}`} defaultValue="Private purchase">
          <option className="text-charcoal">Private purchase</option><option className="text-charcoal">Investment acquisition</option><option className="text-charcoal">Selling / representation</option><option className="text-charcoal">General consultation</option>
        </select>
      </div>
      <textarea id="enquiry-message" name="message" required rows={4} aria-label="Your message" placeholder="How may we assist? Share timelines, preferred markets or residences of interest." className={`mt-5 w-full border bg-transparent px-5 py-4 text-[15px] font-light ${dark ? 'border-white/15 text-ivory placeholder:text-ivory/35' : 'border-charcoal/20 text-charcoal placeholder:text-charcoal/35'}`} />
      <button type="submit" className="group mt-7 flex w-full items-center justify-center gap-3 bg-champagne px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal hover:bg-ivory transition">Submit Enquiry <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></button>
      <p className={`mt-5 text-center text-xs font-light ${dark ? 'text-ivory/40' : 'text-charcoal/45'}`}>Strictly confidential. No obligation. Response within one business day.</p>
    </form>
  );
}