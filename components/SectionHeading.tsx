import Reveal from './Reveal';
export default function SectionHeading({ eyebrow, title, copy, align = 'left', tone = 'dark' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center'; tone?: 'dark' | 'light' }) {
  const sub = tone === 'dark' ? 'text-ivory/60' : 'text-charcoal/60';
  const head = tone === 'dark' ? 'text-ivory' : 'text-charcoal';
  return (
    <Reveal className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.38em] text-champagne" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span className="inline-block h-px w-10 bg-champagne/70" />{eyebrow}<span className={`inline-block h-px w-10 bg-champagne/70 ${align === 'center' ? '' : 'hidden'}`} />
      </p>
      <h2 className={`mt-5 font-serif text-4xl md:text-6xl leading-[1.02] font-light ${head}`}>{title}</h2>
      {copy && <p className={`mt-6 font-light leading-relaxed text-[17px] ${sub}`}>{copy}</p>}
    </Reveal>
  );
}