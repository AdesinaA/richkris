import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PropertyClient from './PropertyClient';
import { PROPERTIES } from '@/lib/data';
export function generateStaticParams() { return PROPERTIES.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = PROPERTIES.find((x) => x.slug === params.slug);
  if (!p) return { title: 'Residence — RICHKRIS LTD' };
  return { title: `${p.title} · ${p.location} — RICHKRIS LTD`, description: p.description.slice(0, 155) };
}
export default function Page({ params }: { params: { slug: string } }) {
  const p = PROPERTIES.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const property = p as (typeof PROPERTIES)[number];
  const similar = PROPERTIES.filter((x) => x.slug !== property.slug && (x.countrySlug === property.countrySlug || x.category === property.category)).slice(0, 3);
  const fallback = PROPERTIES.filter((x) => x.slug !== property.slug).slice(0, 3);
  return <PropertyClient property={property} similar={similar.length ? similar : fallback} />;
}