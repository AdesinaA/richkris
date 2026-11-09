import type { Metadata } from 'next';
import CollectionClient from './CollectionClient';
import { PROPERTIES } from '@/lib/data';
export const metadata: Metadata = { title: 'Property Collection — RICHKRIS LTD', description: 'Browse exceptional international residences across the UK, UAE, Spain, France, Italy and Portugal.' };
export default function Page() {
  return <CollectionClient properties={PROPERTIES} />;
}