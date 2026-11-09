"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const solid = scrolled || open;
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? 'bg-charcoal/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-champagne/70 text-champagne font-serif text-xl">R</div>
            <div className="leading-none">
              <p className="font-serif text-[22px] tracking-[0.18em] text-ivory">RICHKRIS</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.42em] text-champagne">Ltd · London</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="group relative text-[11px] uppercase tracking-[0.3em] text-ivory/80 hover:text-ivory transition">
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/contact" className="flex items-center gap-2 border border-champagne/60 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-ivory transition hover:bg-champagne hover:text-charcoal">
              Private Enquiry <ArrowUpRight size={14} />
            </Link>
          </nav>
          <button type="button" onClick={() => setOpen(!open)} className="text-ivory lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={26} strokeWidth={1} /> : <Menu size={26} strokeWidth={1} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-charcoal/95 pt-28 px-8 lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
            <div className="flex flex-col gap-2">
              {[{label:'Home',href:'/'},...LINKS].map((l,i)=>(
                <motion.div key={l.href} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:i*0.07}}>
                  <Link href={l.href} onClick={()=>setOpen(false)} className="flex items-baseline gap-4 border-b border-white/10 py-5">
                    <span className="text-[11px] text-champagne tracking-widest">0{i+1}</span>
                    <span className="font-serif text-4xl text-ivory">{l.label}</span>
                  </Link>
                </motion.div>
              ))}
              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-stone">London · Dubai · Marbella · Paris</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}