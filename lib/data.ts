export type Property = {
  slug: string;
  title: string;
  location: string;
  country: string;
  countrySlug: string;
  price: number;
  currency: string;
  displayPrice: string;
  category: string;
  beds: number;
  baths: number;
  area: string;
  tag?: string;
  description: string;
  features: string[];
  images: string[];
  coords: string;
};

export const DESTINATIONS = [
  {
    slug: 'united-kingdom',
    country: 'United Kingdom',
    region: 'London & Home Counties',
    tagline: 'Heritage addresses, contemporary living.',
    description:
      'From Hackney mansion apartments to Surrey architectural villas — our home market, represented with discretion and depth.',
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '3.8%', growth: '+4.2% YoY', entry: 'From £1.2M' },
  },
  {
    slug: 'united-arab-emirates',
    country: 'United Arab Emirates',
    region: 'Dubai & Abu Dhabi',
    tagline: 'Skyline icons on the Gulf.',
    description:
      'Palm Jumeirah villas, Business Bay penthouses and marina residences selected for architecture, amenity and investment liquidity.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '6.1%', growth: '+9.4% YoY', entry: 'From AED 3.5M' },
  },
  {
    slug: 'spain',
    country: 'Spain',
    region: 'Marbella & Mallorca',
    tagline: 'Mediterranean light, modern villas.',
    description:
      'Golden Mile estates, old-town fincas and cliff-edge contemporary villas across the Costa del Sol and the Balearics.',
    image:
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '4.6%', growth: '+6.8% YoY', entry: 'From €1.4M' },
  },
  {
    slug: 'france',
    country: 'France',
    region: 'Paris & Côte d’Azur',
    tagline: 'Haussmann elegance, Riviera calm.',
    description:
      'Saint-Germain apartments, Cap Ferrat waterfront villas and Provençal bastides — timeless French residential icons.',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '3.2%', growth: '+2.9% YoY', entry: 'From €1.8M' },
  },
  {
    slug: 'italy',
    country: 'Italy',
    region: 'Lake Como & Rome',
    tagline: 'La dolce vita, architecturally told.',
    description:
      'Lakeside palazzos, Tuscan estates and refined Roman apartments defined by craft, proportion and landscape.',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '4.1%', growth: '+3.7% YoY', entry: 'From €1.6M' },
  },
  {
    slug: 'portugal',
    country: 'Portugal',
    region: 'Lisbon & Algarve',
    tagline: 'Atlantic light, quiet luxury.',
    description:
      'Chiado heritage apartments, Quinta do Lago golf villas and Douro Valley quintas with enduring lifestyle appeal.',
    image:
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1800&auto=format&fit=crop',
    market: { avgYield: '5.0%', growth: '+7.3% YoY', entry: 'From €950K' },
  },
];

export const PROPERTIES: Property[] = [
  {
    slug: 'hackney-mews-house',
    title: 'Chesterfield Mews House',
    location: 'Hackney, London',
    country: 'United Kingdom',
    countrySlug: 'united-kingdom',
    price: 4850000,
    currency: 'GBP',
    displayPrice: '£4,850,000',
    category: 'Townhouse',
    beds: 4, baths: 4, area: '3,200 sq ft',
    tag: 'Signature',
    description:
      'Behind a discreet mews façade off Berkeley Square, a four-storey residence reimagined in oak, travertine and bronze. Double-height reception, library snug, cinema and a landscaped terrace capture the quiet theatre of Hackney living.',
    features: ['Private mews garage', 'Landscaped terrace', 'Cinema room', 'Boffi kitchen', 'Communal gardens access', '24h porter'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '51.5099° N, 0.1470° W',
  },
  {
    slug: 'palm-jumeirah-villa',
    title: 'Frond G Signature Villa',
    location: 'Palm Jumeirah, Dubai',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    price: 32000000, currency: 'AED', displayPrice: 'AED 32,000,000',
    category: 'Villa', beds: 6, baths: 7, area: '9,800 sq ft', tag: 'Waterfront',
    description:
      'A sculptural beachfront villa with 180° Atlantis views. Cantilevered infinity pool, majlis gallery, sculpted staircase and full smart-home integration across three light-washed levels.',
    features: ['Private beach', 'Infinity pool', 'Show kitchen + wet kitchen', 'Wellness spa & gym', 'Smart KNX system', 'Staff quarters'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '25.1124° N, 55.1390° E',
  },
  {
    slug: 'marbella-casa-luz',
    title: 'Casa Luz del Mar',
    location: 'Golden Mile, Marbella',
    country: 'Spain', countrySlug: 'spain',
    price: 3950000, currency: 'EUR', displayPrice: '€3,950,000',
    category: 'Villa', beds: 5, baths: 6, area: '7,100 sq ft', tag: 'New Collection',
    description:
      'A study in Mediterranean minimalism — board-formed concrete, warm iroko and glass that dissolves into olive and sea. Courtyard pool, outdoor pavilion kitchen and suites that open entirely to the garden.',
    features: ['Courtyard pool', 'Outdoor pavilion', 'Sea-view master suite', 'Underfloor heating', 'Solar + aerothermal', 'Gated community'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '36.5101° N, 4.8825° W',
  },
  {
    slug: 'paris-saint-germain',
    title: 'Appartement Rive Gauche',
    location: 'Saint-Germain, Paris',
    country: 'France', countrySlug: 'france',
    price: 5200000, currency: 'EUR', displayPrice: '€5,200,000',
    category: 'Apartment', beds: 3, baths: 3, area: '2,400 sq ft', tag: 'Heritage',
    description:
      'Second-floor Haussmann apartment with 3.2m ceilings, herringbone oak and marble fireplaces. A salon overlooking the Left Bank, library in ebonised timber and a chef’s kitchen in honed Carrara.',
    features: ['Haussmann façade', '2.9–3.2m ceilings', 'Marble fireplaces', 'Cave & parking', 'Gardienne', 'Double salon'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '48.8534° N, 2.3488° E',
  },
  {
    slug: 'como-lakeside-palazzo',
    title: 'Villa Casta Diva Private Suite Estate',
    location: 'Lake Como, Lombardy',
    country: 'Italy', countrySlug: 'italy',
    price: 8900000, currency: 'EUR', displayPrice: '€8,900,000',
    category: 'Estate', beds: 7, baths: 8, area: '12,500 sq ft', tag: 'Exclusive',
    description:
      'A restored lakeside palazzo with private jetty, terraced lemon gardens and frescoed salons. Six suites, lakeside pool and a boathouse — Como at its most cinematic.',
    features: ['Private jetty & boathouse', 'Lakeside infinity pool', 'Frescoed salons', 'Lemon grove terraces', 'Guest villa', 'Helipad access'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '45.9700° N, 9.2670° E',
  },
  {
    slug: 'lisbon-chiado-loft',
    title: 'Chiado Heritage Loft',
    location: 'Chiado, Lisbon',
    country: 'Portugal', countrySlug: 'portugal',
    price: 1850000, currency: 'EUR', displayPrice: '€1,850,000',
    category: 'Apartment', beds: 3, baths: 2, area: '1,900 sq ft', tag: 'Investment',
    description:
      'Vaulted ceilings, Pombaline structure and Tagus light. A meticulously restored loft moments from the Opera — high occupancy, golden-visa eligible, effortlessly liveable.',
    features: ['Pombaline vaults', 'Tagus views', 'Designer kitchen', 'Air conditioning', 'Storage + parking option', 'High rental yield'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '38.7109° N, 9.1416° W',
  },
  {
    slug: 'surrey-architectural-villa',
    title: 'Hollycombe Glass House',
    location: 'Surrey Hills, England',
    country: 'United Kingdom', countrySlug: 'united-kingdom',
    price: 6750000, currency: 'GBP', displayPrice: '£6,750,000',
    category: 'Villa', beds: 6, baths: 6, area: '9,200 sq ft',
    description:
      'A RIBA-recognised pavilion in glass, flint and cedar set in 4.2 acres. Gallery hall, double-height living wall, indoor-outdoor pool and woodland spa.',
    features: ['4.2 acre grounds', '20m indoor-outdoor pool', 'Gallery hall', 'Woodland spa', 'Ground-source heating', 'Gated drive'],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '51.1480° N, 0.6520° W',
  },
  {
    slug: 'dubai-marina-penthouse',
    title: 'Marina Gate Sky Penthouse',
    location: 'Dubai Marina, Dubai',
    country: 'United Arab Emirates', countrySlug: 'united-arab-emirates',
    price: 12500000, currency: 'AED', displayPrice: 'AED 12,500,000',
    category: 'Penthouse', beds: 4, baths: 5, area: '4,600 sq ft', tag: 'Sky Collection',
    description:
      'Duplex crown penthouse with 360° marina-to-sea panorama, private plunge pool on the sky terrace and interiors by an AD100 studio in travertine and smoked oak.',
    features: ['Sky terrace + plunge pool', '360° views', 'Private lift lobby', 'AD100 interiors', '4 parking bays', 'Concierge + spa'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '25.0805° N, 55.1403° E',
  },
  {
    slug: 'algarve-quinta-villa',
    title: 'Quinta do Lago Palm Villa',
    location: 'Quinta do Lago, Algarve',
    country: 'Portugal', countrySlug: 'portugal',
    price: 3400000, currency: 'EUR', displayPrice: '€3,400,000',
    category: 'Villa', beds: 5, baths: 5, area: '5,800 sq ft',
    description:
      'Among umbrella pines and fairways — vaulted living pavilion, shaded loggias and a 18m pool. Barefoot luxury minutes from the Ria Formosa.',
    features: ['18m pool', 'Golf frontage', 'Shaded loggias', 'Outdoor fireplace', 'Guest pavilion', 'Resort amenities'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop',
    ],
    coords: '37.0179° N, 8.0100° W',
  },
];

export const COLLECTIONS = [
  { name: 'Signature Collection', note: 'One-of-one architectural icons', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Waterfront & Island', note: 'Private frontage, eternal horizon', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Heritage & Old World', note: 'Haussmann, Pombaline, Georgian', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Investment Icons', note: 'Yield, liquidity, legacy', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop' },
];

export const JOURNAL = [
  { title: 'The Quiet Return of Proportion', tag: 'Design', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop', read: '6 min read' },
  { title: 'Dubai vs. Marbella: A Yield Story', tag: 'Investment', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', read: '8 min read' },
  { title: 'Living with Water: Lakeside Lessons from Como', tag: 'Lifestyle', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', read: '5 min read' },
];