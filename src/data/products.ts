import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  // ==========================================
  // HERO CAROUSEL HIGHLIGHTS (1 to 5)
  // ==========================================
  {
    id: 'sv-001',
    slug: 'onitsuka-tiger-serrano-black-white',
    brand: 'Onitsuka Tiger',
    model: 'Serrano',
    name: 'Onitsuka Tiger Serrano, Black & White Edition',
    category: 'lifestyle',
    description: 'Inspired by the classic track spikes of the 1970s, the Serrano model carries the tradition of Onitsuka Tiger racing heritage. Features a lightweight nylon and suede upper in a timeless black and white monochrome palette, low-profile spiked rubber outsole, and the iconic contrasting Onitsuka Tiger cross stripes.',
    images: [
      'https://images.asics.com/is/image/asics/1183B400_001_SR_RT_GLB-3?qlt=100&wid=1024&hei=768&resMode=bisharp',
      'https://images.asics.com/is/image/asics/1183B400_001_SR_LT_GLB-3?qlt=100&wid=1024&hei=768&resMode=bisharp',
      'https://images.asics.com/is/image/asics/1183B400_001_SR_TP_GLB-3?qlt=100&wid=1024&hei=768&resMode=bisharp',
      'https://images.asics.com/is/image/asics/1183B400_001_SR_BK_GLB-3?qlt=100&wid=1024&hei=768&resMode=bisharp'
    ],
    price: 8999,
    originalPrice: 10999,
    colorways: [
      { name: 'Black / White', hex: '#111111', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 8 },
      { size: 'UK 8', available: true, stock: 12 },
      { size: 'UK 9', available: true, stock: 7 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '1183B400-001',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Lightweight nylon with premium suede overlays' },
      { label: 'Outsole', value: 'Low-profile spiked rubber tread' },
      { label: 'Cushioning', value: 'EVA cushioned heel wedge' },
      { label: 'Origin', value: '1970s Japanese Track Archive' }
    ],
    audience: 'unisex',
    tags: ['onitsuka-tiger', 'serrano', 'retro', 'lifestyle', 'japanese', 'monochrome', 'black-white', 'heritage'],
    featured: true,
    newArrival: true,
    trending: true,
    heroSlide: true,
    heroHeadline: '1970S JAPANESE RACING HERITAGE REBORN',
    relatedProductIds: ['sv-002', 'sv-003', 'sv-005', 'sv-010']
  },
  {
    id: 'sv-002',
    slug: 'adidas-samba-og-cloud-white',
    brand: 'Adidas Originals',
    model: 'Samba OG',
    name: "Adidas Samba OG 'Cloud White / Core Black'",
    category: 'lifestyle',
    description: 'Born on frozen European football pitches and crowned by global runway stylists. Supple leather upper, iconic suede T-toe overlay, textured gum rubber cupsole, and metallic foil branding.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 10999,
    originalPrice: 12999,
    colorways: [
      { name: 'Cloud White / Core Black', hex: '#F0EFEA', imageIndex: 0 },
      { name: 'Core Black / Cloud White', hex: '#181818', imageIndex: 1 },
      { name: 'Night Navy / Wonder White', hex: '#1C2942', imageIndex: 2 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 15 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'B75806',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Full grain leather with suede T-toe' },
      { label: 'Lining', value: 'Synthetic leather soft touch' },
      { label: 'Outsole', value: 'Low profile dark gum rubber' },
      { label: 'Heritage', value: 'Football 1950 heritage' }
    ],
    audience: 'unisex',
    tags: ['terrace', 'minimalist', 'clean', 'streetwear', 'classic'],
    featured: true,
    newArrival: false,
    trending: true,
    heroSlide: true,
    heroHeadline: 'LOW-PROFILE PERFECTION FOR THE RUNWAY & THE STREET',
    relatedProductIds: ['sv-001', 'sv-005', 'sv-008', 'sv-012']
  },
  {
    id: 'sv-003',
    slug: 'new-balance-990v6-made-in-usa-grey',
    brand: 'New Balance',
    model: '990v6 Made in USA',
    name: "New Balance 990v6 'Core Grey'",
    category: 'running',
    description: 'Worn by supermodels in London and suburban tech titans in Silicon Valley. Engineered with FuelCell foam acceleration, ENCAP midsole support, and premium pigskin suede overlays.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 23999,
    originalPrice: 26999,
    colorways: [
      { name: 'Heritage Castlerock Grey', hex: '#7E8082', imageIndex: 0 },
      { name: 'Triple Blackout', hex: '#111111', imageIndex: 1 },
      { name: 'Navy Sea Salt', hex: '#1A293E', imageIndex: 2 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 7 },
      { size: 'UK 8', available: true, stock: 14 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 3 },
      { size: 'UK 12', available: false, stock: 0 }
    ],
    sku: 'M990GL6',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Midsole', value: 'FuelCell foam with ENCAP rim' },
      { label: 'Upper', value: 'Premium pigskin suede & breathable mesh' },
      { label: 'Manufacture', value: 'Made in USA Craftsmanship' },
      { label: 'Weight', value: '374g (UK 9)' }
    ],
    audience: 'unisex',
    tags: ['made-in-usa', 'premium-dad-shoe', 'comfort', 'fuelcell', 'luxury-running'],
    featured: true,
    newArrival: true,
    trending: true,
    heroSlide: true,
    heroHeadline: 'UNCOMPROMISING AMERICAN CRAFTSMANSHIP',
    relatedProductIds: ['sv-004', 'sv-006', 'sv-015', 'sv-024']
  },
  {
    id: 'sv-004',
    slug: 'asics-gel-kayano-14-cream-pure-silver',
    brand: 'ASICS',
    model: 'GEL-KAYANO 14',
    name: "ASICS GEL-KAYANO 14 'Cream / Pure Silver'",
    category: 'running',
    description: 'The golden era of late-2000s technical running aesthetics revived. Featuring metallic silver cage overlays, exposed GEL technology cushioning, and lightweight structural trussic support.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 15999,
    originalPrice: 17999,
    colorways: [
      { name: 'Cream / Pure Silver', hex: '#EAE6DF', imageIndex: 0 },
      { name: 'Midnight / Glacier Grey', hex: '#192841', imageIndex: 1 },
      { name: 'Obsidian / Plum Dark', hex: '#2C1D27', imageIndex: 2 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 3 },
      { size: 'UK 7', available: true, stock: 6 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '1201A019-105',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Technology', value: 'Rearfoot & Forefoot GEL pods' },
      { label: 'Support', value: 'TRUSSTIC support system' },
      { label: 'Upper', value: 'Layered synthetic leather & airy mesh' },
      { label: 'Design Era', value: '2008 Kiko Kostadinov curatorial staple' }
    ],
    audience: 'unisex',
    tags: ['y2k', 'silver', 'metallic', 'gel-cushioning', 'tech-runner'],
    featured: true,
    newArrival: true,
    trending: true,
    heroSlide: true,
    heroHeadline: 'FUTURISTIC NOSTALGIA ENGINEERED FOR VELOCITY',
    relatedProductIds: ['sv-003', 'sv-006', 'sv-013', 'sv-020']
  },
  {
    id: 'sv-005',
    slug: 'nike-air-max-90-og-infrared',
    brand: 'Nike',
    model: 'Air Max 90 OG',
    name: "Nike Air Max 90 'Radiant Infrared'",
    category: 'sneakers',
    description: 'Tinker Hatfield architectural masterpiece that brought the visible Air unit to bolder proportions. Ribbed TPU accents, plush padded collar, and waffle traction outsole.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 13995,
    originalPrice: 15995,
    colorways: [
      { name: 'Radiant Infrared / Wolf Grey', hex: '#FF2A4D', imageIndex: 0 },
      { name: 'Triple White Luxe', hex: '#FDFDFD', imageIndex: 1 },
      { name: 'Triple Anthracite Black', hex: '#1E1E1E', imageIndex: 2 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 6 },
      { size: 'UK 7', available: true, stock: 11 },
      { size: 'UK 8', available: true, stock: 18 },
      { size: 'UK 9', available: true, stock: 14 },
      { size: 'UK 10', available: true, stock: 9 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: 'CT1685-100',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Cushioning', value: 'Max Air chamber in heel' },
      { label: 'Outsole', value: 'Heritage rubber Waffle pattern' },
      { label: 'Accents', value: 'Stitched leather overlays & TPU badges' },
      { label: 'Legacy', value: 'Air Max 1990 original specifications' }
    ],
    audience: 'unisex',
    tags: ['air-max', 'visible-air', 'tinker-hatfield', '90s-icon', 'street-staple'],
    featured: true,
    newArrival: false,
    trending: true,
    heroSlide: true,
    heroHeadline: 'VISCERAL 90S ARCHITECTURE ON REPEAT',
    relatedProductIds: ['sv-001', 'sv-007', 'sv-011', 'sv-018']
  },

  // ==========================================
  // SNEAKERS & BASKETBALL (6 to 15)
  // ==========================================
  {
    id: 'sv-006',
    slug: 'salomon-xt-6-advanced-black-phantom',
    brand: 'Salomon',
    model: 'XT-6 Advanced',
    name: "Salomon XT-6 Advanced 'Black / Phantom'",
    category: 'hiking',
    description: 'Originally built for ultra-marathoners traversing the Alps, adopted by Paris Fashion Week avant-garde. Quicklace system, Sensifit cradling, and Agile Chassis System stability.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 18999,
    originalPrice: 21999,
    colorways: [
      { name: 'Black Phantom', hex: '#161616', imageIndex: 0 },
      { name: 'Vanilla Ice / Rainy Day', hex: '#EDE8DB', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 10 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: 'L41086600',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Chassis', value: 'Agile Chassis System (ACS)' },
      { label: 'Lacing', value: 'Quicklace one-pull minimalistic toggle' },
      { label: 'Outsole', value: 'Mud Contagrip with chevron lugs' }
    ],
    audience: 'unisex',
    tags: ['gorpcore', 'technical', 'trail', 'ultra-distance'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-004', 'sv-023', 'sv-031']
  },
  {
    id: 'sv-007',
    slug: 'nike-dunk-low-retro-panda',
    brand: 'Nike',
    model: 'Dunk Low Retro',
    name: "Nike Dunk Low 'Black / White Panda'",
    category: 'sneakers',
    description: 'Crisp monochrome two-tone aesthetic that dominates modern streetwear rotations. Smooth leather panels, lightweight foam midsole, and padded low-cut collar.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 10495,
    colorways: [
      { name: 'Black / White Panda', hex: '#000000', imageIndex: 0 },
      { name: 'Grey Fog / Summit White', hex: '#C2C4C6', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 8 },
      { size: 'UK 7', available: true, stock: 14 },
      { size: 'UK 8', available: true, stock: 20 },
      { size: 'UK 9', available: true, stock: 18 },
      { size: 'UK 10', available: true, stock: 9 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'DD1391-100',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Smooth leather with perforations on toe' },
      { label: 'Midsole', value: 'Lightweight foam core' },
      { label: 'Outsole', value: 'Pivot point rubber traction' }
    ],
    audience: 'unisex',
    tags: ['panda', 'dunk', 'monochrome', 'viral', 'streetwear'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-001', 'sv-005', 'sv-012']
  },
  {
    id: 'sv-008',
    slug: 'converse-chuck-70-vintage-canvas-black',
    brand: 'Converse',
    model: 'Chuck 70 High Top',
    name: "Converse Chuck 70 'Black Vintage Canvas'",
    category: 'lifestyle',
    description: 'The heavyweight 12oz canvas revival with varnished egret foxing, winged tongue stitching, and OrthoLite insole for all-day comfort.',
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 6999,
    originalPrice: 7999,
    colorways: [
      { name: 'Black Egret', hex: '#1C1C1C', imageIndex: 0 },
      { name: 'Parchment Off-White', hex: '#EDE8D5', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 10 },
      { size: 'UK 7', available: true, stock: 15 },
      { size: 'UK 8', available: true, stock: 22 },
      { size: 'UK 9', available: true, stock: 19 },
      { size: 'UK 10', available: true, stock: 11 },
      { size: 'UK 11', available: true, stock: 6 }
    ],
    sku: '162050C',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Canvas', value: '12oz heavy organic cotton' },
      { label: 'Foxing', value: 'Glossy vintage egret sidewall' },
      { label: 'Footbed', value: 'OrthoLite memory foam' }
    ],
    audience: 'unisex',
    tags: ['chuck-70', 'vintage', 'high-top', 'canvas', 'timeless'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-002', 'sv-014', 'sv-033']
  },
  {
    id: 'sv-009',
    slug: 'nike-kobe-8-protro-halo-triple-white',
    brand: 'Nike / Kobe',
    model: 'Kobe 8 Protro',
    name: "Nike Kobe 8 Protro 'Halo'",
    category: 'basketball',
    description: 'Honoring the Black Mamba legacy in pristine Triple White. Upgraded with modern Nike React foam drop-in midsole and an engineered mesh upper for lightning first-step response.',
    images: [
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 21995,
    originalPrice: 24995,
    colorways: [
      { name: 'Triple White Halo', hex: '#FAFAFA', imageIndex: 0 },
      { name: 'Venice Beach Multicolor', hex: '#44A0D9', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 8', available: true, stock: 3 },
      { size: 'UK 9', available: true, stock: 5 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: 'FJ3442-100',
    stockStatus: 'low_stock',
    specifications: [
      { label: 'Drop-in Midsole', value: 'Full-length Nike React foam' },
      { label: 'Shank Plate', value: 'Carbon fiber midfoot arch plate' },
      { label: 'Weight', value: 'Ultra-light 330g low profile' }
    ],
    audience: 'men',
    tags: ['kobe', 'mamba', 'protro', 'basketball', 'performance'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-001', 'sv-010', 'sv-017']
  },
  {
    id: 'sv-010',
    slug: 'air-jordan-4-retro-military-black',
    brand: 'Nike / Jordan',
    model: 'Air Jordan 4 Retro',
    name: "Air Jordan 4 Retro 'Military Black'",
    category: 'basketball',
    description: 'Neutral grey suede forefoot mudguard, crisp white leather base, and jet black TPU wings and heel tab. One of the most coveted modern Jordan 4 iterations.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 27995,
    colorways: [
      { name: 'Military Black / Neutral Grey', hex: '#222222', imageIndex: 0 },
      { name: 'Bred Reimagined', hex: '#9E1B1E', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 7 },
      { size: 'UK 9', available: true, stock: 9 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'DH6927-111',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Smooth leather with suede toe cap' },
      { label: 'Eyelets', value: 'Molded TPU support wings' },
      { label: 'Cushioning', value: 'Visible Air in heel, encapsulated Air in forefoot' }
    ],
    audience: 'unisex',
    tags: ['jordan-4', 'grail', 'retro', 'military', 'streetwear'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-001', 'sv-009', 'sv-019']
  },

  // ==========================================
  // RUNNING & PERFORMANCE (11 to 20)
  // ==========================================
  {
    id: 'sv-011',
    slug: 'nike-alphafly-3-volt-concord',
    brand: 'Nike',
    model: 'Alphafly 3',
    name: "Nike Alphafly 3 'Volt / Dusty Cactus'",
    category: 'running',
    description: 'The world-record-breaking marathon super shoe. Dual Air Zoom pods in forefoot, continuous Flyplate carbon-fiber propulsion, and ultra-responsive ZoomX foam cushion.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 29995,
    originalPrice: 32995,
    colorways: [
      { name: 'Volt / Dusty Cactus', hex: '#D7FF3F', imageIndex: 0 },
      { name: 'Proto White Black', hex: '#FFFFFF', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 6 },
      { size: 'UK 9', available: true, stock: 8 },
      { size: 'UK 10', available: true, stock: 4 }
    ],
    sku: 'FD8311-700',
    stockStatus: 'low_stock',
    specifications: [
      { label: 'Plate', value: 'Full-length carbon fiber Flyplate' },
      { label: 'Midsole', value: 'ZoomX foam with dual Air Zoom pods' },
      { label: 'Weight', value: '218g featherweight record racer' }
    ],
    audience: 'unisex',
    tags: ['marathon', 'super-shoe', 'carbon-plate', 'world-record'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-013', 'sv-015', 'sv-022']
  },
  {
    id: 'sv-012',
    slug: 'adidas-ultraboost-light-core-black',
    brand: 'Adidas',
    model: 'Ultraboost Light',
    name: "Adidas Ultraboost Light 'Core Black / Solar Red'",
    category: 'running',
    description: 'Featuring 30% lighter Light BOOST material engineered with tiny air capsules delivering unmatched energy return with every step.',
    images: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 18999,
    originalPrice: 20999,
    colorways: [
      { name: 'Core Black / Solar Red', hex: '#1C1C1C', imageIndex: 0 },
      { name: 'Cloud White Metallic', hex: '#EBEBEB', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 7 },
      { size: 'UK 7', available: true, stock: 12 },
      { size: 'UK 8', available: true, stock: 19 },
      { size: 'UK 9', available: true, stock: 16 },
      { size: 'UK 10', available: true, stock: 10 },
      { size: 'UK 11', available: true, stock: 5 }
    ],
    sku: 'HQ6351',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Midsole', value: 'Light BOOST next-gen compound' },
      { label: 'Upper', value: 'PRIMEKNIT+ sock-like adaptation' },
      { label: 'Outsole', value: 'Continental Natural Rubber' }
    ],
    audience: 'unisex',
    tags: ['boost', 'energy-return', 'daily-trainer', 'comfort'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-002', 'sv-015', 'sv-024']
  },
  {
    id: 'sv-013',
    slug: 'on-cloudmonster-2-all-black',
    brand: 'On Running',
    model: 'Cloudmonster 2',
    name: "On Cloudmonster 2 'All Black / Magnet'",
    category: 'running',
    description: 'Swiss-engineered maximalist running shoe. Massive CloudTec pods combined with dual-density Helion superfoam and a nylon blend Speedboard for explosive forward propulsion.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 19990,
    colorways: [
      { name: 'All Black / Magnet', hex: '#151515', imageIndex: 0 },
      { name: 'Undyed White / Frost', hex: '#F5F5F0', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 6 },
      { size: 'UK 8', available: true, stock: 11 },
      { size: 'UK 9', available: true, stock: 14 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: '3ME10120106',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Cushioning', value: 'Maximal CloudTec with Helion superfoam' },
      { label: 'Board', value: 'Speedboard nylon blend rocker' },
      { label: 'Drop', value: '6mm smooth cadence offset' }
    ],
    audience: 'unisex',
    tags: ['swiss', 'cloudtec', 'maximalist', 'road-running'],
    featured: true,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-011', 'sv-015', 'sv-022']
  },
  {
    id: 'sv-014',
    slug: 'vans-old-skool-core-black-white',
    brand: 'Vans',
    model: 'Old Skool',
    name: "Vans Old Skool 'Core Black / White Side Stripe'",
    category: 'skate',
    description: 'The first skate shoe to showcase the iconic leather jazz stripe. Sturdy canvas and suede uppers, re-enforced toecaps, and signature rubber waffle outsoles.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 5499,
    originalPrice: 5999,
    colorways: [
      { name: 'Black / White', hex: '#111111', imageIndex: 0 },
      { name: 'Navy / White', hex: '#1D2A44', imageIndex: 1 },
      { name: 'Checkerboard Off-White', hex: '#C7C5BE', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 12 },
      { size: 'UK 7', available: true, stock: 18 },
      { size: 'UK 8', available: true, stock: 25 },
      { size: 'UK 9', available: true, stock: 20 },
      { size: 'UK 10', available: true, stock: 14 },
      { size: 'UK 11', available: true, stock: 7 }
    ],
    sku: 'VN000D3HY28',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Heavyweight canvas & suede panels' },
      { label: 'Sidewall', value: 'Vulcanized rubber foxing' },
      { label: 'Outsole', value: 'Original Vans waffle grip' }
    ],
    audience: 'unisex',
    tags: ['skate', 'classic', 'waffle-sole', 'sidestripe', 'california'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-008', 'sv-027', 'sv-035']
  },
  {
    id: 'sv-015',
    slug: 'hoka-clifton-9-triple-black',
    brand: 'Hoka',
    model: 'Clifton 9',
    name: "Hoka Clifton 9 'Triple Blackout'",
    category: 'running',
    description: 'Eliminates 4 grams while adding 3mm in stack height. Revitalized underfoot experience with responsive new compression-molded EVA foam and refined engineered mesh.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 14999,
    originalPrice: 16999,
    colorways: [
      { name: 'Triple Black', hex: '#121212', imageIndex: 0 },
      { name: 'Nimbus Cloud', hex: '#E7E9EB', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 7 },
      { size: 'UK 8', available: true, stock: 15 },
      { size: 'UK 9', available: true, stock: 17 },
      { size: 'UK 10', available: true, stock: 11 },
      { size: 'UK 11', available: true, stock: 5 }
    ],
    sku: '1127895-BBLC',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Geometry', value: 'Early stage Meta-Rocker' },
      { label: 'Midsole', value: 'Compression-molded EVA foam' },
      { label: 'Weight', value: '248g light cushion champion' }
    ],
    audience: 'unisex',
    tags: ['hoka', 'plush-cushion', 'recovery', 'marathon-training'],
    featured: true,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-003', 'sv-012', 'sv-013']
  },

  // ==========================================
  // TRAINING, SKATE & HIKING (16 to 25)
  // ==========================================
  {
    id: 'sv-016',
    slug: 'nike-metcon-9-amp-black-gold',
    brand: 'Nike',
    model: 'Metcon 9 AMP',
    name: "Nike Metcon 9 AMP 'Black & Metallic Gold'",
    category: 'training',
    description: 'Larger Hyperlift plate in heel for stability during tough workouts like split squats and deadlifts. Extended rubber rope wrap up the medial side for supreme grip.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 13995,
    colorways: [
      { name: 'Black / Metallic Gold', hex: '#C29B38', imageIndex: 0 },
      { name: 'Smoke Grey / Electric Volt', hex: '#68727B', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 9 },
      { size: 'UK 9', available: true, stock: 13 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'DZ2537-001',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Heel Plate', value: 'Hyperlift structural plate' },
      { label: 'Rope Guard', value: 'Extended dual-density rubber wrap' },
      { label: 'Upper', value: 'Breathable textile with haptic print' }
    ],
    audience: 'men',
    tags: ['crossfit', 'lifting', 'training', 'gym', 'durability'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-020', 'sv-026']
  },
  {
    id: 'sv-017',
    slug: 'puma-mb03-la-france-electric-green',
    brand: 'Puma',
    model: 'MB.03 LaFrance',
    name: "Puma MB.03 'Toxic Alien Green'",
    category: 'basketball',
    description: 'LaMelo Ball signature masterpiece. Features disruptive claw slash cutouts, NITRO foam infused cushioning, and an out-of-this-world slime green space aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 12999,
    originalPrice: 14999,
    colorways: [
      { name: 'Toxic Slime Green', hex: '#D7FF3F', imageIndex: 0 },
      { name: 'Sparks Pink / Blue', hex: '#E44E89', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: '378916-01',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Cushioning', value: 'NITRO foam injected midsole' },
      { label: 'Upper', value: 'Engineered double-layer jacquard mesh' },
      { label: 'Outsole', value: 'High-abrasion non-slip rubber coverage' }
    ],
    audience: 'men',
    tags: ['lamelo', 'basketball', 'nitro', 'statement', 'electric'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-009', 'sv-010', 'sv-019']
  },
  {
    id: 'sv-018',
    slug: 'reebok-club-c-85-vintage-chalk-green',
    brand: 'Reebok',
    model: 'Club C 85 Vintage',
    name: "Reebok Club C 85 'Chalk / Glen Green'",
    category: 'lifestyle',
    description: 'Straight from the 1985 tennis courts. Buttery soft garment leather, Terry cloth lining on the collar, and vintage off-white EVA midsole for old-money tennis aesthetics.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 7999,
    originalPrice: 8999,
    colorways: [
      { name: 'Chalk / Glen Green', hex: '#2A5D34', imageIndex: 0 },
      { name: 'Chalk / Royal Navy', hex: '#1C294D', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 8 },
      { size: 'UK 7', available: true, stock: 14 },
      { size: 'UK 8', available: true, stock: 19 },
      { size: 'UK 9', available: true, stock: 15 },
      { size: 'UK 10', available: true, stock: 9 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: 'V67899',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Supple full garment leather' },
      { label: 'Lining', value: 'Vintage terry toweling collar' },
      { label: 'Branding', value: 'Union Jack archive window logo' }
    ],
    audience: 'unisex',
    tags: ['vintage-tennis', 'club-c', 'minimal', 'chalk', 'old-money'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-002', 'sv-008', 'sv-033']
  },
  {
    id: 'sv-019',
    slug: 'nike-ja-1-scratch-smoke-grey',
    brand: 'Nike / Ja Morant',
    model: 'Ja 1',
    name: "Nike Ja 1 'Scratch / Smoke Grey'",
    category: 'basketball',
    description: 'Designed for high-flying dynamism. Forefoot Air Zoom unit delivers snappy takeoff and plush landings, with customized graphic homage to Memphis grit.',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 10495,
    colorways: [
      { name: 'Smoke Grey Claw', hex: '#626466', imageIndex: 0 },
      { name: 'Day One Cobalt', hex: '#1F3C88', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 6 },
      { size: 'UK 8', available: true, stock: 10 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'FD8775-001',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Cushion', value: 'Forefoot Air Zoom chamber' },
      { label: 'Lockdown', value: 'Raised foam collar support system' },
      { label: 'Traction', value: 'Multi-directional herringbone channels' }
    ],
    audience: 'men',
    tags: ['ja-morant', 'basketball', 'bounce', 'explosive'],
    featured: false,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-009', 'sv-010', 'sv-017']
  },
  {
    id: 'sv-020',
    slug: 'under-armour-project-rock-6-iron',
    brand: 'Under Armour',
    model: 'Project Rock 6',
    name: "Under Armour Project Rock 6 'Iron Grit'",
    category: 'training',
    description: 'Approved by Dwayne The Rock Johnson. Clone upper stretches and adapts to your foot shape, while UA HOVR cushioning returns energy with zero impact fatigue.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 15999,
    colorways: [
      { name: 'Iron Black / Castlerock', hex: '#212121', imageIndex: 0 },
      { name: 'Blood Orange Bold', hex: '#E34226', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 7 },
      { size: 'UK 9', available: true, stock: 9 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '3026534-001',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'UA Clone anatomical expansion technology' },
      { label: 'Cushion', value: 'UA HOVR energy web foam' },
      { label: 'Base', value: 'UA TriBase ground contact plate' }
    ],
    audience: 'men',
    tags: ['project-rock', 'training', 'powerlifting', 'hovr'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-016', 'sv-026']
  },

  // ==========================================
  // BOOTS, FORMAL & LUXURY (21 to 30)
  // ==========================================
  {
    id: 'sv-021',
    slug: 'dr-martens-1460-smooth-leather-boot',
    brand: 'Dr. Martens',
    model: '1460 8-Eye Boot',
    name: "Dr. Martens 1460 'Smooth Cherry Red / Black'",
    category: 'boots',
    description: 'Subculture royalty since April 1, 1960. Recognizable instantly with yellow welt stitching, grooved air-cushioned sole edges, and branded scripted heel loop.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 17999,
    originalPrice: 19999,
    colorways: [
      { name: 'Cherry Red Smooth', hex: '#4B1720', imageIndex: 0 },
      { name: 'Classic Black Smooth', hex: '#0F0F0F', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 10 },
      { size: 'UK 8', available: true, stock: 16 },
      { size: 'UK 9', available: true, stock: 14 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: '11822006',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Construction', value: 'Goodyear heat-sealed welt at 700°C' },
      { label: 'Leather', value: 'Durable Dr. Martens Smooth leather' },
      { label: 'Sole', value: 'AirWair oil and fat-resistant bounce sole' }
    ],
    audience: 'unisex',
    tags: ['boots', 'punk', 'goodyear-welt', 'leather', 'heritage'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-022', 'sv-025', 'sv-030']
  },
  {
    id: 'sv-022',
    slug: 'timberland-premium-6-inch-waterproof-wheat',
    brand: 'Timberland',
    model: '6-Inch Premium Boot',
    name: "Timberland 6-Inch Premium 'Heritage Wheat Nubuck'",
    category: 'boots',
    description: 'The golden icon of New York hip-hop culture. Waterproof seam-sealed nubuck leather, rustproof hex eyelets, 400g PrimaLoft insulation, and rugged lug outsole.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 18999,
    colorways: [
      { name: 'Wheat Nubuck', hex: '#D2A15C', imageIndex: 0 },
      { name: 'Triple Blackout Waterproof', hex: '#161616', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 6 },
      { size: 'UK 8', available: true, stock: 12 },
      { size: 'UK 9', available: true, stock: 15 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: 'TB010061713',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Leather', value: 'Better Leather waterproof nubuck' },
      { label: 'Insulation', value: '400g PrimaLoft thermal fill' },
      { label: 'Insole', value: 'Anti-fatigue geometric cone footbed' }
    ],
    audience: 'unisex',
    tags: ['timberland', 'wheat', 'nyc', 'waterproof', 'workwear'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-021', 'sv-025', 'sv-031']
  },
  {
    id: 'sv-023',
    slug: 'clarks-originals-wallabee-boot-maple-suede',
    brand: 'Clarks Originals',
    model: 'Wallabee Boot',
    name: "Clarks Originals Wallabee 'Maple Suede'",
    category: 'formal',
    description: 'An architectural moccasin silhouette revered from Wu-Tang Clan to Tokyo sartorialists. Premium English Steads suede with authentic FSC-certified natural crepe pebble sole.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 16999,
    originalPrice: 18999,
    colorways: [
      { name: 'Maple Suede', hex: '#CCA677', imageIndex: 0 },
      { name: 'Cola Dark Brown Suede', hex: '#4B3525', imageIndex: 1 },
      { name: 'Black Suede', hex: '#1C1C1C', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 11 },
      { size: 'UK 9', available: true, stock: 13 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: '26155515',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Charles F. Stead Scotchguard suede' },
      { label: 'Sole', value: 'FSC Certified all-natural plantation crepe' },
      { label: 'Construction', value: 'Tubular moccasin hand-stitched apron' }
    ],
    audience: 'unisex',
    tags: ['wallabee', 'crepe-sole', 'wu-tang', 'suede', 'sartorial'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-025', 'sv-029', 'sv-030']
  },
  {
    id: 'sv-024',
    slug: 'birkenstock-boston-soft-footbed-taupe',
    brand: 'Birkenstock',
    model: 'Boston Clog',
    name: "Birkenstock Boston 'Taupe Suede Clog'",
    category: 'slides',
    description: 'The slip-on that redefined effortless luxury. Featuring genuine velvety suede, contoured cork-latex footbed with an integrated foam cushion layer, and an adjustable antique buckle.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 13990,
    colorways: [
      { name: 'Taupe Suede', hex: '#A89F91', imageIndex: 0 },
      { name: 'Oiled Habana Brown', hex: '#4A3B32', imageIndex: 1 },
      { name: 'Black Velvet Suede', hex: '#222222', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 6 },
      { size: 'UK 7', available: true, stock: 12 },
      { size: 'UK 8', available: true, stock: 18 },
      { size: 'UK 9', available: true, stock: 14 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: '0660461',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Footbed', value: 'Original Birkenstock cork-latex soft footbed' },
      { label: 'Upper', value: 'Hydrophobic natural velvety suede' },
      { label: 'Sole', value: 'Lightweight shock-absorbing EVA' }
    ],
    audience: 'unisex',
    tags: ['boston-clog', 'suede', 'cozy', 'minimal-luxury', 'cork-sole'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-002', 'sv-023', 'sv-028']
  },
  {
    id: 'sv-025',
    slug: 'churchs-shanghai-monk-strap-ebony',
    brand: "Church's",
    model: 'Shanghai Monk Strap',
    name: "Church's Shanghai 'Vintage Glaze Ebony Monkstrap'",
    category: 'formal',
    description: 'Heritage English shoemaking re-engineered with artisanal distressed patinas. Fine calfskin, brogue medallion detailing, and a brass buckle for evening galas.',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 68995,
    originalPrice: 75000,
    colorways: [
      { name: 'Ebony Antiqued Brown', hex: '#3B2F2F', imageIndex: 0 },
      { name: 'Black Onyx Glaze', hex: '#141414', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 2 },
      { size: 'UK 8', available: true, stock: 4 },
      { size: 'UK 9', available: true, stock: 5 },
      { size: 'UK 10', available: true, stock: 3 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: 'EDB004-9AF',
    stockStatus: 'low_stock',
    specifications: [
      { label: 'Origin', value: 'Northamptonshire, England bespoke standard' },
      { label: 'Upper', value: 'Hand-burnished vintage glazed calf leather' },
      { label: 'Sole', value: 'Oak-bark tanned leather sole with rubber studs' }
    ],
    audience: 'men',
    tags: ['formal', 'luxury', 'bespoke', 'monkstrap', 'northampton'],
    featured: true,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-023', 'sv-029', 'sv-030']
  },

  // ==========================================
  // SLIDES, SANDALS & CASUAL (26 to 35)
  // ==========================================
  {
    id: 'sv-026',
    slug: 'yeezy-slide-onyx-charcoal',
    brand: 'Adidas / YEEZY',
    model: 'YEEZY Slide',
    name: "YEEZY Slide 'Onyx Black'",
    category: 'slides',
    description: 'Sculptural brutalist minimalism. Injected EVA foam compound engineered for lightweight resilience with strategic groove placement for optimal traction.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 9999,
    originalPrice: 11999,
    colorways: [
      { name: 'Onyx Charcoal', hex: '#202020', imageIndex: 0 },
      { name: 'Bone Ivory', hex: '#EBE6DE', imageIndex: 1 },
      { name: 'Resin Pale Green', hex: '#CCD3A8', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 16 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'HQ6448',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Material', value: 'One-piece injected molded EVA foam' },
      { label: 'Tread', value: 'Serrated deep tooth traction outsole' },
      { label: 'Feel', value: 'Plush cloud compression feel' }
    ],
    audience: 'unisex',
    tags: ['slide', 'yeezy', 'brutalist', 'minimalist', 'summer'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-024', 'sv-028', 'sv-036']
  },
  {
    id: 'sv-027',
    slug: 'nike-sb-dunk-low-pro-orange-label',
    brand: 'Nike SB',
    model: 'SB Dunk Low Pro',
    name: "Nike SB Dunk Low Pro 'White Navy Gum'",
    category: 'skate',
    description: 'Orange Label skate boutique exclusive. Padded fat mesh tongue, Zoom Air unit in sockliner for impact landings, and grippy gum outsole.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 11495,
    colorways: [
      { name: 'White / Midnight Navy / Gum', hex: '#1B2C4E', imageIndex: 0 },
      { name: 'Black / White / Gum', hex: '#111111', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 7 },
      { size: 'UK 9', available: true, stock: 9 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: 'CD2563-100',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Sockliner', value: 'Zoom Air unit embedded in heel' },
      { label: 'Tongue', value: 'Padded puffy mesh tongue with safety elastic' },
      { label: 'Outsole', value: 'Gum rubber with circular skate pivot tread' }
    ],
    audience: 'unisex',
    tags: ['nike-sb', 'skate', 'zoom-air', 'orange-label', 'gum-sole'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-007', 'sv-014', 'sv-035']
  },
  {
    id: 'sv-028',
    slug: 'suicoke-moto-cab-touch-strap-sandals',
    brand: 'Suicoke',
    model: 'MOTO-Cab Sandal',
    name: "Suicoke MOTO-Cab 'Black Neoprene Sandals'",
    category: 'slides',
    description: 'Japanese cult sandal label. Double nylon velcro straps over padded neoprene upper, contoured antibacterial EVA footbed, and Vibram Morflex ripple sole.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 16999,
    originalPrice: 19999,
    colorways: [
      { name: 'Black Neoprene', hex: '#181818', imageIndex: 0 },
      { name: 'Olive Green Webbing', hex: '#4B5320', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 4 },
      { size: 'UK 7', available: true, stock: 8 },
      { size: 'UK 8', available: true, stock: 12 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 6 }
    ],
    sku: 'OG-056Cab-BLK',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Sole', value: 'Vibram Morflex lightweight cushion compound' },
      { label: 'Upper', value: 'Heavy nylon tape & padded neoprene cushion' },
      { label: 'Design', value: 'Tokyo streetwear heritage' }
    ],
    audience: 'unisex',
    tags: ['japanese', 'suicoke', 'sandals', 'vibram', 'streetwear'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-024', 'sv-026', 'sv-036']
  },
  {
    id: 'sv-029',
    slug: 'gh-bass-larson-penny-loafer-wine',
    brand: 'G.H. Bass',
    model: 'Weejuns Larson Penny Loafer',
    name: "G.H. Bass Weejuns 'Larson Wine Polished Leather'",
    category: 'formal',
    description: 'The world original penny loafer, created in 1936. Hand-stitched beefroll moccasin styling with polished dark wine hi-shine leather and genuine leather sole.',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 19999,
    originalPrice: 22999,
    colorways: [
      { name: 'Wine Pull-up Leather', hex: '#4C1F24', imageIndex: 0 },
      { name: 'Black Polished Hi-Shine', hex: '#111111', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'BA11010-0NN',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Style', value: 'Traditional Beefroll hand-stitched apron' },
      { label: 'Leather', value: 'Hi-Shine polished box calf' },
      { label: 'Sole', value: 'Natural polished leather with rubber top piece' }
    ],
    audience: 'unisex',
    tags: ['penny-loafer', 'ivy-league', 'preppy', 'leather', 'sartorial'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-023', 'sv-025', 'sv-030']
  },
  {
    id: 'sv-030',
    slug: 'solovair-4-eye-gibson-shoe-black-hi-shine',
    brand: 'Solovair',
    model: '4-Eyelet Gibson Shoe',
    name: "Solovair 4-Eyelet Gibson 'Black Hi-Shine'",
    category: 'formal',
    description: 'Handcrafted in Wollaston, England under the historic NPS Shoes label. Goodyear welted with the patented Soft Suspension air sole and contrast grey stitching.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 21999,
    colorways: [
      { name: 'Black Hi-Shine', hex: '#151515', imageIndex: 0 },
      { name: 'Burgundy Rub-Off', hex: '#3E1A22', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 6 },
      { size: 'UK 9', available: true, stock: 8 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '000-001-BLK',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Made in', value: 'Northamptonshire, England' },
      { label: 'Sole', value: 'Solovair signature Soft Sole Air Suspension' },
      { label: 'Construction', value: '100% Goodyear welted durability' }
    ],
    audience: 'unisex',
    tags: ['derby', 'goodyear-welt', 'english-made', 'subculture', 'formal'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-021', 'sv-025', 'sv-029']
  },

  // ==========================================
  // WOMEN'S FOOTWEAR (31 to 42)
  // ==========================================
  {
    id: 'sv-031',
    slug: 'adidas-gazelle-bold-women-pink-glow',
    brand: 'Adidas Originals',
    model: 'Gazelle Bold Platform',
    name: "Adidas Gazelle Bold Women 'Pink Glow / Victory Blue'",
    category: 'women',
    description: 'Elevated triple-stacked gum platform sole redesigning the 1960s indoor training icon. Luxurious pink suede, contrast serrated three stripes, and metallic gold foil script.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 11999,
    originalPrice: 13999,
    colorways: [
      { name: 'Pink Glow / Blue', hex: '#F0809C', imageIndex: 0 },
      { name: 'Core Black / Cloud White', hex: '#1F1F1F', imageIndex: 1 },
      { name: 'Collegiate Green / Gum', hex: '#1E4733', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 4 },
      { size: 'UK 5', available: true, stock: 8 },
      { size: 'UK 6', available: true, stock: 12 },
      { size: 'UK 7', available: true, stock: 10 },
      { size: 'UK 8', available: true, stock: 5 }
    ],
    sku: 'H06122',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Platform Height', value: '3-tier stacked gum rubber outsole' },
      { label: 'Upper', value: 'Premium soft pigskin suede' },
      { label: 'Lining', value: 'Synthetic collar with textile sockliner' }
    ],
    audience: 'women',
    tags: ['platform', 'pink', 'gazelle', 'women', 'trendy'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-002', 'sv-032', 'sv-034']
  },
  {
    id: 'sv-032',
    slug: 'nike-air-force-1-shadow-women-pastel',
    brand: 'Nike',
    model: 'Air Force 1 Shadow',
    name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
    category: 'women',
    description: 'Double the brand marks, double the height. Playful layered aesthetic featuring 2 eyestays, 2 mudguards, 2 back tabs, and 2 Swooshes on a slightly exaggerated midsole.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 11995,
    colorways: [
      { name: 'Pale Ivory / Celestial Gold', hex: '#EBE5D8', imageIndex: 0 },
      { name: 'Triple White Luxe', hex: '#FFFFFF', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 5 },
      { size: 'UK 5', available: true, stock: 9 },
      { size: 'UK 6', available: true, stock: 15 },
      { size: 'UK 7', available: true, stock: 11 },
      { size: 'UK 8', available: true, stock: 4 }
    ],
    sku: 'CI0919-101',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Design', value: 'Doubled layered elements and branding' },
      { label: 'Midsole', value: 'Foam core with deep flex grooves' },
      { label: 'Outsole', value: 'Air Force 1 rubber cupsole' }
    ],
    audience: 'women',
    tags: ['af1', 'shadow', 'pastel', 'layered', 'women-sneaker'],
    featured: false,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-007', 'sv-031', 'sv-034']
  },
  {
    id: 'sv-033',
    slug: 'new-balance-550-women-sea-salt-macadamia',
    brand: 'New Balance',
    model: '550 Women',
    name: "New Balance 550 'Sea Salt / Macadamia'",
    category: 'women',
    description: 'The 1989 basketball legend rediscovered. Clean white leather base with creamy neutral macadamia overlays and micro-perforated side panels.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 12999,
    originalPrice: 14999,
    colorways: [
      { name: 'Sea Salt / Macadamia', hex: '#E5DFD3', imageIndex: 0 },
      { name: 'White / Burgundy Rose', hex: '#7D2E3C', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 6 },
      { size: 'UK 5', available: true, stock: 10 },
      { size: 'UK 6', available: true, stock: 14 },
      { size: 'UK 7', available: true, stock: 8 },
      { size: 'UK 8', available: true, stock: 3 }
    ],
    sku: 'BBW550WA',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Premium leather with perforated midfoot panels' },
      { label: 'Outsole', value: 'Non-marking bicolour rubber cupsole' },
      { label: 'Cushion', value: 'EVA wedge midsole insert' }
    ],
    audience: 'women',
    tags: ['nb550', 'vintage-bball', 'cream', 'minimal', 'women'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-002', 'sv-003', 'sv-031']
  },
  {
    id: 'sv-034',
    slug: 'asics-gel-1130-women-white-rose-gold',
    brand: 'ASICS',
    model: 'GEL-1130 Women',
    name: "ASICS GEL-1130 'White / Rose Gold'",
    category: 'women',
    description: 'Ninth generation GEL-1000 series runner adapted for everyday fashion. Breathable open-weave mesh with sculpted metallic rose-gold and champagne leather overlays.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 10999,
    colorways: [
      { name: 'White / Rose Gold', hex: '#D4A396', imageIndex: 0 },
      { name: 'Pure Silver / Mint', hex: '#B8C5BD', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 5 },
      { size: 'UK 5', available: true, stock: 8 },
      { size: 'UK 6', available: true, stock: 12 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: false, stock: 0 }
    ],
    sku: '1202A164-108',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Cushioning', value: 'GEL technology shock absorption in heel' },
      { label: 'Trussic', value: 'Late 2000s runner stability system' },
      { label: 'Mesh', value: 'Breathable wide-hole engineered textile' }
    ],
    audience: 'women',
    tags: ['tech-runner', 'asics', 'rose-gold', 'y2k', 'women'],
    featured: false,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-004', 'sv-031', 'sv-033']
  },
  {
    id: 'sv-035',
    slug: 'salomon-acs-pro-women-metal-ghost-gray',
    brand: 'Salomon',
    model: 'ACS Pro Women',
    name: "Salomon ACS Pro 'Ghost Gray / Vanilla'",
    category: 'women',
    description: 'Technical archetypal footwear engineered with Kurim envelope cage structure, dual-density medial post, and ventilation ports throughout the upper.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 19999,
    originalPrice: 22999,
    colorways: [
      { name: 'Ghost Gray / Vanilla', hex: '#D6D3CC', imageIndex: 0 },
      { name: 'Safari / Bleached Sand', hex: '#C4B99F', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 3 },
      { size: 'UK 5', available: true, stock: 6 },
      { size: 'UK 6', available: true, stock: 8 },
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 2 }
    ],
    sku: 'L47179800',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Chassis', value: 'Agile Chassis System (ACS) platform' },
      { label: 'Cage', value: 'Kurim structure on upper for durable protection' },
      { label: 'Lacing', value: 'Quicklace system with lace garage pocket' }
    ],
    audience: 'women',
    tags: ['salomon', 'acs-pro', 'gorpcore', 'technical', 'women'],
    featured: true,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-006', 'sv-031', 'sv-034']
  },
  {
    id: 'sv-036',
    slug: 'birkenstock-arizona-big-buckle-shearling',
    brand: 'Birkenstock',
    model: 'Arizona Big Buckle',
    name: "Birkenstock Arizona 'Teddy Shearling Bone'",
    category: 'slides',
    description: 'Cozy luxury edition of the legendary two-strap sandal. Lined with genuine soft lambskin teddy shearling and accented with oversized elegant gold pin buckles.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 15990,
    colorways: [
      { name: 'Teddy Bone / Gold Buckle', hex: '#EBE2D3', imageIndex: 0 },
      { name: 'Teddy Black / Silver Buckle', hex: '#1C1C1C', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 4 },
      { size: 'UK 5', available: true, stock: 8 },
      { size: 'UK 6', available: true, stock: 11 },
      { size: 'UK 7', available: true, stock: 7 },
      { size: 'UK 8', available: true, stock: 3 }
    ],
    sku: '1020584',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Lining', value: '100% Genuine lambskin shearling' },
      { label: 'Buckles', value: 'Oversized metallic pin buckles' },
      { label: 'Footbed', value: 'Anatomically shaped cork-latex core' }
    ],
    audience: 'women',
    tags: ['shearling', 'cozy', 'arizona', 'gold-buckle', 'luxury-sandal'],
    featured: false,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-024', 'sv-026', 'sv-028']
  },

  // ==========================================
  // KIDS' FOOTWEAR (37 to 46)
  // ==========================================
  {
    id: 'sv-037',
    slug: 'air-jordan-1-retro-high-og-kids-chicago',
    brand: 'Nike / Jordan',
    model: 'Air Jordan 1 High OG Kids',
    name: "Kids Air Jordan 1 High OG 'Chicago Lost & Found'",
    category: 'kids',
    description: 'Scales down the iconic 1985 championship silhouette for young sneakerheads. Padded collar, durable leather panels, and rubber cupsole for schoolyard wear.',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 8995,
    originalPrice: 9995,
    colorways: [
      { name: 'Chicago Varsity Red', hex: '#BA1B1D', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 10 (Kids)', available: true, stock: 4 },
      { size: 'UK 11 (Kids)', available: true, stock: 6 },
      { size: 'UK 12 (Kids)', available: true, stock: 8 },
      { size: 'UK 13 (Kids)', available: true, stock: 7 },
      { size: 'UK 1 (Youth)', available: true, stock: 5 },
      { size: 'UK 2 (Youth)', available: true, stock: 4 },
      { size: 'UK 3 (Youth)', available: false, stock: 0 }
    ],
    sku: 'FD1437-612',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Construction', value: 'Durable genuine leather upper' },
      { label: 'Sole', value: 'Solid non-marking rubber cupsole' },
      { label: 'Laces', value: 'Includes standard & elastic stay-tied laces' }
    ],
    audience: 'kids',
    tags: ['kids', 'jordan-1', 'mini-me', 'chicago', 'basketball'],
    featured: true,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-001', 'sv-038', 'sv-039']
  },
  {
    id: 'sv-038',
    slug: 'adidas-samba-kids-cloud-white',
    brand: 'Adidas Originals',
    model: 'Samba Kids',
    name: "Kids Adidas Samba OG 'White / Black Gum'",
    category: 'kids',
    description: 'The street classic scaled perfectly for juniors. Genuine leather construction with suede toe cap and flexible gum rubber sole for natural movement.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 5999,
    colorways: [
      { name: 'White / Black Gum', hex: '#F0EFEA', imageIndex: 0 },
      { name: 'Core Black / White', hex: '#161616', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 11 (Kids)', available: true, stock: 5 },
      { size: 'UK 12 (Kids)', available: true, stock: 8 },
      { size: 'UK 13 (Kids)', available: true, stock: 10 },
      { size: 'UK 1 (Youth)', available: true, stock: 7 },
      { size: 'UK 2 (Youth)', available: true, stock: 5 }
    ],
    sku: 'IE3675',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Full-grain leather with suede reinforcement' },
      { label: 'Sockliner', value: 'OrthoLite eco-comfort footbed' },
      { label: 'Sole', value: 'Flexible low-profile gum outsole' }
    ],
    audience: 'kids',
    tags: ['kids', 'samba', 'terrace', 'classic', 'junior'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-002', 'sv-037', 'sv-040']
  },
  {
    id: 'sv-039',
    slug: 'nike-dunk-low-kids-triple-white',
    brand: 'Nike',
    model: 'Dunk Low Kids',
    name: "Kids Nike Dunk Low 'Triple White'",
    category: 'kids',
    description: 'Crisp all-white court icon built with durable real and synthetic leather that is easy to wipe clean after playground sessions.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 6495,
    colorways: [
      { name: 'Triple White', hex: '#FFFFFF', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 11 (Kids)', available: true, stock: 6 },
      { size: 'UK 12 (Kids)', available: true, stock: 9 },
      { size: 'UK 13 (Kids)', available: true, stock: 12 },
      { size: 'UK 1 (Youth)', available: true, stock: 8 },
      { size: 'UK 2 (Youth)', available: true, stock: 4 }
    ],
    sku: 'CW1588-100',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Easy-clean full grain leather' },
      { label: 'Midsole', value: 'Soft lightweight foam cushioning' },
      { label: 'Tread', value: 'Dunk heritage circular pivot ring' }
    ],
    audience: 'kids',
    tags: ['kids', 'dunk', 'white-sneaker', 'school', 'clean'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-007', 'sv-037', 'sv-038']
  },
  {
    id: 'sv-040',
    slug: 'vans-kids-checkerboard-slip-on',
    brand: 'Vans',
    model: 'Classic Slip-On Kids',
    name: "Kids Vans Classic Slip-On 'Black White Checkerboard'",
    category: 'kids',
    description: 'No laces required. Side elastic accents allow easy on-and-off, while durable canvas and padded collars keep little feet secure and comfortable all day.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 3999,
    colorways: [
      { name: 'Black / White Checkerboard', hex: '#1C1C1C', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 10 (Kids)', available: true, stock: 6 },
      { size: 'UK 11 (Kids)', available: true, stock: 10 },
      { size: 'UK 12 (Kids)', available: true, stock: 12 },
      { size: 'UK 13 (Kids)', available: true, stock: 9 },
      { size: 'UK 1 (Youth)', available: true, stock: 5 }
    ],
    sku: 'VN000EX8B8C',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Closure', value: 'Laceless slip-on with dual stretch elastic' },
      { label: 'Canvas', value: 'Sturdy 8oz cotton canvas' },
      { label: 'Sole', value: 'Signature waffle rubber compound' }
    ],
    audience: 'kids',
    tags: ['kids', 'slip-on', 'checkerboard', 'vans', 'easy-on'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-014', 'sv-038', 'sv-039']
  },

  // ==========================================
  // EXTENSIVE CATALOGUE CONTINUATION (41 to 65)
  // ==========================================
  {
    id: 'sv-041',
    slug: 'new-balance-2002r-protection-pack-phantom',
    brand: 'New Balance',
    model: '2002R Protection Pack',
    name: "New Balance 2002R 'Protection Pack Phantom'",
    category: 'lifestyle',
    description: 'Designed by Yue Wu with raw jagged deconstructed suede edges revealing underlying mesh panels. Equipped with N-ergy shock absorption and ABZORB heel cushioning.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 17999,
    originalPrice: 19999,
    colorways: [
      { name: 'Phantom Washed Black', hex: '#2B2B2B', imageIndex: 0 },
      { name: 'Rain Cloud Distressed Grey', hex: '#878787', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 9 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'M2002RDB',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Design', value: 'Refined Future / Protection Pack rough-cut suede' },
      { label: 'Midsole', value: 'ABZORB cushioning with Stability Web' },
      { label: 'Heel Pod', value: 'N-ergy responsive impact dissipation' }
    ],
    audience: 'unisex',
    tags: ['2002r', 'protection-pack', 'deconstructed', 'phantom', 'grail'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-003', 'sv-004', 'sv-042']
  },
  {
    id: 'sv-042',
    slug: 'asics-gt-2160-white-shamrock-green',
    brand: 'ASICS',
    model: 'GT-2160',
    name: "ASICS GT-2160 'White / Shamrock Green'",
    category: 'running',
    description: 'Pays homage to the technical design language from the GT-2000 series in the early 2010s. Sleek wavy forefoot sculpting and segmented midsole structure.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 11999,
    colorways: [
      { name: 'White / Shamrock Green', hex: '#2E7D32', imageIndex: 0 },
      { name: 'Pure Silver / Blue Illusion', hex: '#21759B', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 6 },
      { size: 'UK 8', available: true, stock: 11 },
      { size: 'UK 9', available: true, stock: 14 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: '1203A275-103',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Midsole', value: 'Segmented GEL pod structure' },
      { label: 'Upper', value: 'Double-layer sandwich mesh with synthetic cages' },
      { label: 'Arch', value: 'Molded resin TRUSSTIC unit' }
    ],
    audience: 'unisex',
    tags: ['gt-2160', 'asics', 'retro-runner', 'metallic', 'silver'],
    featured: false,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-004', 'sv-041', 'sv-043']
  },
  {
    id: 'sv-043',
    slug: 'nike-vomero-5-triple-black',
    brand: 'Nike',
    model: 'Air Zoom Vomero 5',
    name: "Nike Air Zoom Vomero 5 'Triple Blackout'",
    category: 'running',
    description: 'Richly layered runner featuring synthetic leather, plastic ribcage cage accents, and reflective ventilation ports on the heel. Cushlon foam and dual Zoom Air units deliver smooth strides.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 14995,
    originalPrice: 16995,
    colorways: [
      { name: 'Triple Black', hex: '#111111', imageIndex: 0 },
      { name: 'Oatmeal / Pale Ivory', hex: '#DDD2BF', imageIndex: 1 },
      { name: 'Cobblestone / Flat Pewter', hex: '#8C8C85', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 4 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 15 },
      { size: 'UK 9', available: true, stock: 16 },
      { size: 'UK 10', available: true, stock: 10 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: 'BV1358-003',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Midsole', value: 'Cushlon foam with forefoot & heel Zoom Air' },
      { label: 'Ventilation', value: 'Plastic heel ventilation grid' },
      { label: 'Details', value: '3M reflective accents for low-light visibility' }
    ],
    audience: 'unisex',
    tags: ['vomero', 'zoom-air', 'all-black', 'cushlon', 'chunky-runner'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-004', 'sv-005', 'sv-042']
  },
  {
    id: 'sv-044',
    slug: 'hoka-tor-ultra-low-goretex-black',
    brand: 'Hoka',
    model: 'Tor Ultra Low GTX',
    name: "Hoka Tor Ultra Low 'GORE-TEX Black'",
    category: 'hiking',
    description: 'Trail-tested ruggedness meets high-fashion dark luxury. GORE-TEX waterproof bootie, non-wicking mesh, Vibram Megagrip lugged outsole, and Meta-Rocker geometry.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 24999,
    colorways: [
      { name: 'Triple Blackout GTX', hex: '#141414', imageIndex: 0 },
      { name: 'Burnt Ochre Dune', hex: '#9E5B32', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 7 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '1130310-BBLC',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Membrane', value: 'GORE-TEX waterproof breathable bootie' },
      { label: 'Outsole', value: 'Vibram Megagrip with 5mm directional lugs' },
      { label: 'Upper', value: 'Sierra leather with durable rubber toecap' }
    ],
    audience: 'unisex',
    tags: ['hoka', 'gore-tex', 'vibram', 'trail-hiking', 'gorpcore'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-006', 'sv-015', 'sv-022']
  },
  {
    id: 'sv-045',
    slug: 'adidas-handball-spezial-collegiate-navy',
    brand: 'Adidas Originals',
    model: 'Handball Spezial',
    name: "Adidas Handball Spezial 'Collegiate Navy / Clear Sky'",
    category: 'lifestyle',
    description: 'First introduced in 1979 for elite indoor handball players. Suede upper with treated finish, soft leather details, and a dark gum rubber outsole.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 10999,
    originalPrice: 11999,
    colorways: [
      { name: 'Collegiate Navy / Sky', hex: '#1C2E52', imageIndex: 0 },
      { name: 'Aluminum / Core Black', hex: '#C7C6BF', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 14 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'BD7633',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Super-soft pigskin suede' },
      { label: 'Sole', value: 'Vintage four-zone suction cup gum sole' },
      { label: 'Heritage', value: '1979 Munich Indoor Handball series' }
    ],
    audience: 'unisex',
    tags: ['spezial', 'terrace', 'gum-sole', 'navy', 'minimalist'],
    featured: false,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-002', 'sv-018', 'sv-046']
  },
  {
    id: 'sv-046',
    slug: 'puma-suede-classic-xxi-black-white',
    brand: 'Puma',
    model: 'Suede Classic XXI',
    name: "Puma Suede Classic XXI 'Black / White Formstrip'",
    category: 'skate',
    description: 'From 1968 Olympic podiums to 1980s New York b-boy ciphers. Rich full suede upper, modern comfort sockliner, and durable traction rubber.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 6999,
    originalPrice: 7999,
    colorways: [
      { name: 'Puma Black / White', hex: '#111111', imageIndex: 0 },
      { name: 'High Risk Red / White', hex: '#B81923', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 7 },
      { size: 'UK 7', available: true, stock: 12 },
      { size: 'UK 8', available: true, stock: 18 },
      { size: 'UK 9', available: true, stock: 15 },
      { size: 'UK 10', available: true, stock: 8 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: '374915-01',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Classic heavy suede leather' },
      { label: 'Insole', value: 'Comfort foam cushioning' },
      { label: 'Outsole', value: 'Non-marking textured rubber' }
    ],
    audience: 'unisex',
    tags: ['puma-suede', 'hip-hop', 'bboy', 'classic', 'skate'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-008', 'sv-014', 'sv-045']
  },
  {
    id: 'sv-047',
    slug: 'nike-air-max-plus-tn-og-voltage-purple',
    brand: 'Nike',
    model: 'Air Max Plus TN',
    name: "Nike Air Max Plus TN 'Voltage Purple OG'",
    category: 'sneakers',
    description: 'Sean McDowell sunset-inspired masterpiece. Tuned Air chambers calibrate air pressure to specific zones of the foot, encased inside gradient TPU rib veins.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 16995,
    originalPrice: 18995,
    colorways: [
      { name: 'Voltage Purple / Total Orange', hex: '#4B227B', imageIndex: 0 },
      { name: 'Hyper Blue Sunset', hex: '#123D88', imageIndex: 1 },
      { name: 'Triple Black Shark', hex: '#121212', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'DX0755-500',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Air System', value: 'Tuned Air (TN) multi-hemisphere pods' },
      { label: 'Midfoot Shank', value: 'Whale tail gradient TPU arch support' },
      { label: 'Cage', value: 'Exoskeleton palm-tree inspired TPU fingers' }
    ],
    audience: 'unisex',
    tags: ['tuned-air', 'tn', 'voltage-purple', 'rave', 'uk-drill'],
    featured: true,
    newArrival: false,
    trending: true,
    relatedProductIds: ['sv-005', 'sv-010', 'sv-043']
  },
  {
    id: 'sv-048',
    slug: 'crocs-pollex-clog-salehe-bembury-urchin',
    brand: 'Crocs / Salehe Bembury',
    model: 'Pollex Clog',
    name: "Crocs Pollex Clog 'Urchin Mauve'",
    category: 'slides',
    description: 'Renowned footwear innovator Salehe Bembury re-envisions the foam clog with his signature biometric three-fingerprint traction ridges across the full body.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 8995,
    originalPrice: 10995,
    colorways: [
      { name: 'Urchin Mauve', hex: '#8C7D8B', imageIndex: 0 },
      { name: 'Sasquatch Blackout', hex: '#1C1C1C', imageIndex: 1 },
      { name: 'Crocodile Lime Green', hex: '#779933', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 4 },
      { size: 'UK 7', available: true, stock: 7 },
      { size: 'UK 8', available: true, stock: 12 },
      { size: 'UK 9', available: true, stock: 9 },
      { size: 'UK 10', available: true, stock: 5 }
    ],
    sku: '207393-559',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Design', value: 'Biometric multi-directional fingerprint grooves' },
      { label: 'Strap', value: 'Removable and adjustable woven nylon heel strap' },
      { label: 'Compound', value: 'Exclusive Croslite dual-mold foam' }
    ],
    audience: 'unisex',
    tags: ['salehe-bembury', 'pollex', 'fingerprint', 'slide', 'designer'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-024', 'sv-026', 'sv-028']
  },
  {
    id: 'sv-049',
    slug: 'converse-weapon-ox-vintage-white-purple',
    brand: 'Converse',
    model: 'Weapon OX',
    name: "Converse Weapon OX 'Vintage White / Lakers Purple'",
    category: 'basketball',
    description: 'The 1986 court titan that united Magic Johnson and Larry Bird. Premium leather upper, Y-bar ankle support lock, and vintage ivory midsole.',
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 9999,
    colorways: [
      { name: 'White / Lakers Purple', hex: '#552583', imageIndex: 0 },
      { name: 'White / Boston Green', hex: '#007A33', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 10 },
      { size: 'UK 9', available: true, stock: 12 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'A05537C',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Upper', value: 'Heavyweight full-grain basketball leather' },
      { label: 'Support', value: 'Signature Weapon Y-Bar midfoot wrap' },
      { label: 'Outsole', value: 'Classic cupsole with traction pivot' }
    ],
    audience: 'unisex',
    tags: ['weapon', 'magic-johnson', '80s-bball', 'converse', 'retro'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-001', 'sv-008', 'sv-010']
  },
  {
    id: 'sv-050',
    slug: 'salomon-speedcross-6-gtx-all-black',
    brand: 'Salomon',
    model: 'Speedcross 6 GORE-TEX',
    name: "Salomon Speedcross 6 GTX 'Blackout Trail'",
    category: 'hiking',
    description: 'Legendary grip for mud and rough terrain. Updated with faster mud evacuation and an even tighter SensiFit wrap for supreme trail precision.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 17999,
    originalPrice: 19999,
    colorways: [
      { name: 'Black / Phantom', hex: '#131313', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 11 },
      { size: 'UK 9', available: true, stock: 13 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'L41738800',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Membrane', value: 'GORE-TEX weather protection' },
      { label: 'Outsole', value: 'Deep chevron Mud Contagrip lugs' },
      { label: 'Fit', value: 'SensiFit cradle with Quicklace cable' }
    ],
    audience: 'unisex',
    tags: ['speedcross', 'mud-grip', 'trail-running', 'gore-tex'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-006', 'sv-044', 'sv-051']
  },
  {
    id: 'sv-051',
    slug: 'on-cloudtilt-loewe-all-white',
    brand: 'On Running / LOEWE',
    model: 'Cloudtilt LOEWE Edition',
    name: "On x LOEWE Cloudtilt 'All White Minimalist'",
    category: 'lifestyle',
    description: 'Luxury Spanish fashion house LOEWE collaborates with Swiss performance engineers. CloudTec Phase computer-generated sequential compression pods.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 38999,
    originalPrice: 42000,
    colorways: [
      { name: 'Monochrome White', hex: '#FAFAFA', imageIndex: 0 },
      { name: 'Khaki Olive Green', hex: '#5A6351', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 5 },
      { size: 'UK 9', available: true, stock: 6 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: false, stock: 0 }
    ],
    sku: '3MD11050109',
    stockStatus: 'low_stock',
    specifications: [
      { label: 'Collaboration', value: 'LOEWE Anagram laser engraving on tongue' },
      { label: 'Midsole', value: 'CloudTec Phase computational sequential collapse' },
      { label: 'Upper', value: '100% Recycled polyester breathable knit' }
    ],
    audience: 'unisex',
    tags: ['loewe', 'luxury-collab', 'cloudtilt', 'swiss', 'grail'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-003', 'sv-013', 'sv-025']
  },
  {
    id: 'sv-052',
    slug: 'nike-air-humara-qs-faded-spruce',
    brand: 'Nike',
    model: 'Air Humara QS',
    name: "Nike Air Humara 'Faded Spruce / Night Maroon'",
    category: 'hiking',
    description: 'Vintage 1997 trail runner designed by Peter Fogg. Fabric-wrapped midsole, tough webbing lace loops, and outdoor zoom air cushioning.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 13995,
    colorways: [
      { name: 'Faded Spruce / Maroon', hex: '#264D43', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: 'FJ7098-300',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Midsole Wrap', value: 'Checkered textile wrapped midsole' },
      { label: 'Air Pod', value: 'Forefoot Zoom Air with heel Air capsule' },
      { label: 'Outsole', value: 'Aggressive trail lugs' }
    ],
    audience: 'unisex',
    tags: ['humara', 'peter-fogg', 'trail-heritage', '90s-nike'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-006', 'sv-044', 'sv-050']
  },
  {
    id: 'sv-053',
    slug: 'clarks-desert-boot-sand-suede',
    brand: 'Clarks Originals',
    model: 'Desert Boot',
    name: "Clarks Desert Boot 'Sand Suede Classic'",
    category: 'formal',
    description: 'Nathan Clark 1950 British officer design that conquered 60s Mod culture and Ivy league wardrobes alike. Distinctive two-eyelet lacing on clean crepe rubber.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 15999,
    colorways: [
      { name: 'Sand Suede', hex: '#D5C4A1', imageIndex: 0 },
      { name: 'Beeswax Leather', hex: '#5C4033', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 5 },
      { size: 'UK 8', available: true, stock: 9 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: '26155480',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Suede', value: 'Charles F. Stead premium calf suede' },
      { label: 'Sole', value: 'All natural amber crepe rubber' },
      { label: 'Design', value: 'Iconic 1950 two-eyelet desert chukka' }
    ],
    audience: 'men',
    tags: ['desert-boot', 'chukka', 'clarks', 'crepe-sole', 'heritage'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-023', 'sv-029', 'sv-030']
  },
  {
    id: 'sv-054',
    slug: 'red-wing-iron-ranger-8085-copper-rough-tough',
    brand: 'Red Wing Heritage',
    model: 'Iron Ranger 8085',
    name: "Red Wing Iron Ranger 'Copper Rough & Tough Leather'",
    category: 'boots',
    description: 'Originally forged for iron miners of northern Minnesota. Signature double-layer leather toe cap, nickel eyelets with speed hooks, and Vibram 430 mini-lug sole.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 34999,
    originalPrice: 38000,
    colorways: [
      { name: 'Copper Rough & Tough', hex: '#874B2A', imageIndex: 0 },
      { name: 'Black Harness Leather', hex: '#1C1C1C', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 2 },
      { size: 'UK 8', available: true, stock: 5 },
      { size: 'UK 9', available: true, stock: 7 },
      { size: 'UK 10', available: true, stock: 4 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '08085',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Leather', value: 'Full grain oil-tanned S.B. Foot Tanning Co.' },
      { label: 'Welt', value: 'Goodyear welt resoleable construction' },
      { label: 'Outsole', value: 'Vibram 430 Mini-lug' }
    ],
    audience: 'men',
    tags: ['workboot', 'iron-ranger', 'red-wing', 'goodyear-welt', 'copper'],
    featured: true,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-021', 'sv-022', 'sv-025']
  },
  {
    id: 'sv-055',
    slug: 'converse-chuck-taylor-all-star-lift-platform-women',
    brand: 'Converse',
    model: 'Chuck Taylor All Star Lift Platform',
    name: "Converse Lift Platform 'Triple Egret White Canvas'",
    category: 'women',
    description: 'A double-stacked platform sole takes this high-top classic higher. Lightweight EVA cushioning inside keeps you light on your feet without adding bulk.',
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 6499,
    colorways: [
      { name: 'Egret White', hex: '#FAF7EE', imageIndex: 0 },
      { name: 'Black Canvas Platform', hex: '#1C1C1C', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 6 },
      { size: 'UK 5', available: true, stock: 11 },
      { size: 'UK 6', available: true, stock: 15 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 4 }
    ],
    sku: '560846C',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Platform Height', value: 'Double stacked 38mm platform lift' },
      { label: 'Upper', value: 'Durable cotton canvas' },
      { label: 'Ankle Patch', value: 'Iconic Chuck Taylor ankle badge' }
    ],
    audience: 'women',
    tags: ['platform', 'lift', 'converse', 'high-top', 'women'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-008', 'sv-031', 'sv-032']
  },
  {
    id: 'sv-056',
    slug: 'adidas-superstar-core-black-white',
    brand: 'Adidas Originals',
    model: 'Superstar Foundation',
    name: "Adidas Superstar 'Core Black / Cloud White'",
    category: 'lifestyle',
    description: 'The world-famous shell-toe sneaker. Originally ruled the hardwood in the 1970s before being immortalized by hip-hop pioneers Run-D.M.C.',
    images: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 8999,
    colorways: [
      { name: 'Core Black / Cloud White', hex: '#1C1C1C', imageIndex: 0 },
      { name: 'Cloud White / Core Black', hex: '#F5F5F5', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 7 },
      { size: 'UK 7', available: true, stock: 13 },
      { size: 'UK 8', available: true, stock: 20 },
      { size: 'UK 9', available: true, stock: 16 },
      { size: 'UK 10', available: true, stock: 9 },
      { size: 'UK 11', available: true, stock: 4 }
    ],
    sku: 'EG4959',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Toecap', value: 'Signature ribbed rubber shell toe' },
      { label: 'Upper', value: 'Smooth leather with serrated three stripes' },
      { label: 'Lining', value: 'Breathable mesh collar lining' }
    ],
    audience: 'unisex',
    tags: ['shell-toe', 'superstar', 'run-dmc', 'hip-hop', 'classic'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-002', 'sv-007', 'sv-046']
  },
  {
    id: 'sv-057',
    slug: 'nike-pegasus-41-blueprint',
    brand: 'Nike',
    model: 'Air Zoom Pegasus 41',
    name: "Nike Pegasus 41 'Blueprint White / Racer Blue'",
    category: 'running',
    description: 'The workhorse with wings returns. Upgraded with all-new full-length ReactX foam offering 13% more energy return compared to previous React iterations.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 11995,
    originalPrice: 13995,
    colorways: [
      { name: 'Blueprint White / Racer Blue', hex: '#1E5BB6', imageIndex: 0 },
      { name: 'Black / Anthracite', hex: '#181818', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 8 },
      { size: 'UK 8', available: true, stock: 16 },
      { size: 'UK 9', available: true, stock: 19 },
      { size: 'UK 10', available: true, stock: 12 },
      { size: 'UK 11', available: true, stock: 5 }
    ],
    sku: 'FD2722-100',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Foam', value: 'Nike ReactX foam compound' },
      { label: 'Air Pods', value: 'Dual Zoom Air units (forefoot and heel)' },
      { label: 'Weight', value: '297g balanced daily road trainer' }
    ],
    audience: 'unisex',
    tags: ['pegasus', 'daily-trainer', 'reactx', 'zoom-air', 'marathon'],
    featured: false,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-011', 'sv-012', 'sv-015']
  },
  {
    id: 'sv-058',
    slug: 'vans-sk8-hi-reissue-checkerboard',
    brand: 'Vans',
    model: 'Sk8-Hi Reissue',
    name: "Vans Sk8-Hi 'Black & White Checkerboard'",
    category: 'skate',
    description: 'High-top skate pioneer built to protect ankles on halfpipes. Heavyweight canvas and suede construction with reinforced toecaps and signature waffle soles.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 6499,
    colorways: [
      { name: 'Black / White Checkerboard', hex: '#1A1A1A', imageIndex: 0 }
    ],
    sizes: [
      { size: 'UK 6', available: true, stock: 5 },
      { size: 'UK 7', available: true, stock: 9 },
      { size: 'UK 8', available: true, stock: 14 },
      { size: 'UK 9', available: true, stock: 11 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'VN0A3MV119E',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Collar', value: 'Supportive padded ankle collar' },
      { label: 'Upper', value: 'Durable suede and 10oz canvas' },
      { label: 'Sole', value: 'Vans vulcanized waffle rubber' }
    ],
    audience: 'unisex',
    tags: ['sk8-hi', 'vans', 'high-top', 'skate', 'checkerboard'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-014', 'sv-046', 'sv-008']
  },
  {
    id: 'sv-059',
    slug: 'new-balance-1906r-cordura-black',
    brand: 'New Balance',
    model: '1906R Cordura',
    name: "New Balance 1906R 'Cordura Pack All Black'",
    category: 'sneakers',
    description: 'Named for the year New Balance was founded. Fortified with ballistic water-resistant Cordura mesh, N-lock lace integration, and ACTEVA LITE cushioning.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 16999,
    originalPrice: 18999,
    colorways: [
      { name: 'Cordura Blackout', hex: '#151515', imageIndex: 0 },
      { name: 'Titanium Castlerock', hex: '#777A7D', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 10 },
      { size: 'UK 9', available: true, stock: 13 },
      { size: 'UK 10', available: true, stock: 7 },
      { size: 'UK 11', available: true, stock: 3 }
    ],
    sku: 'M1906ROB',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Fabric', value: 'Ballistic water-repellent Cordura mesh' },
      { label: 'Lockdown', value: 'N-lock midfoot lace saddle loop' },
      { label: 'Midsole', value: 'ACTEVA LITE with N-ergy impact heel' }
    ],
    audience: 'unisex',
    tags: ['1906r', 'cordura', 'stealth', 'technical', 'new-balance'],
    featured: true,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-003', 'sv-004', 'sv-041']
  },
  {
    id: 'sv-060',
    slug: 'asics-gel-quantum-360-viii-pure-gold',
    brand: 'ASICS',
    model: 'GEL-QUANTUM 360 VIII',
    name: "ASICS GEL-QUANTUM 360 VIII 'Pure Gold / Black'",
    category: 'sneakers',
    description: 'Full 360-degree perimeter GEL technology cushioning with biometric division lines. Natural ergonomics meets high-performance street presence.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 18999,
    colorways: [
      { name: 'Pure Gold / Black', hex: '#CFB53B', imageIndex: 0 },
      { name: 'Black / Hazard Green', hex: '#1E1E1E', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 3 },
      { size: 'UK 8', available: true, stock: 7 },
      { size: 'UK 9', available: true, stock: 9 },
      { size: 'UK 10', available: true, stock: 5 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '1203A435-001',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Technology', value: 'DIVISION SPACE 360-degree GEL geometry' },
      { label: 'Upper', value: '5D printed mesh with ergonomic contouring' },
      { label: 'Stability', value: 'TRUSSTIC midfoot torsional bracket' }
    ],
    audience: 'unisex',
    tags: ['quantum-360', 'full-gel', 'gold', 'future', 'statement'],
    featured: false,
    newArrival: true,
    trending: false,
    relatedProductIds: ['sv-004', 'sv-042', 'sv-047']
  },
  {
    id: 'sv-061',
    slug: 'clarks-torhill-hi-dark-sand-suede',
    brand: 'Clarks Originals',
    model: 'Torhill Hi',
    name: "Clarks Torhill Hi 'Dark Sand Suede Chunky'",
    category: 'boots',
    description: 'Chunky archival statement inspired by the 90s Big Gripper silhouette. Merges the Wallabee upper profile with a ribbed, ultra-thick lugged TPR outsole.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 13999,
    originalPrice: 15999,
    colorways: [
      { name: 'Dark Sand Suede', hex: '#C2AA83', imageIndex: 0 },
      { name: 'Black Suede Ribbed', hex: '#1B1B1B', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 7', available: true, stock: 4 },
      { size: 'UK 8', available: true, stock: 8 },
      { size: 'UK 9', available: true, stock: 10 },
      { size: 'UK 10', available: true, stock: 6 },
      { size: 'UK 11', available: true, stock: 2 }
    ],
    sku: '26173740',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Sole', value: 'Chunky 90s Big Gripper ribbed TPR outsole' },
      { label: 'Upper', value: 'Sustainably sourced dark sand suede' },
      { label: 'Footbed', value: 'Molded Contour Cushion footbed' }
    ],
    audience: 'unisex',
    tags: ['torhill', 'clunky', '90s-archive', 'wallabee-dna', 'suede'],
    featured: false,
    newArrival: false,
    trending: false,
    relatedProductIds: ['sv-021', 'sv-023', 'sv-053']
  },
  {
    id: 'sv-062',
    slug: 'nike-calm-slide-women-sesame',
    brand: 'Nike',
    model: 'Calm Slide Women',
    name: "Nike Calm Slide 'Sesame Pale Sand'",
    category: 'slides',
    description: 'Contoured seamless water-friendly foam slide designed for recovery and poolside relaxation. Textured footbed pattern grips feet while wet.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85'
    ],
    price: 4495,
    colorways: [
      { name: 'Sesame Sand', hex: '#DFD4BE', imageIndex: 0 },
      { name: 'Blackout Calm', hex: '#171717', imageIndex: 1 }
    ],
    sizes: [
      { size: 'UK 4', available: true, stock: 7 },
      { size: 'UK 5', available: true, stock: 12 },
      { size: 'UK 6', available: true, stock: 16 },
      { size: 'UK 7', available: true, stock: 10 },
      { size: 'UK 8', available: true, stock: 5 }
    ],
    sku: 'FD4116-200',
    stockStatus: 'in_stock',
    specifications: [
      { label: 'Construction', value: 'Single piece water-resistant molded foam' },
      { label: 'Outsole', value: 'Full-length rubber coverage for wet traction' },
      { label: 'Footbed', value: 'Subtle micro-texture anti-slip pattern' }
    ],
    audience: 'women',
    tags: ['calm-slide', 'poolside', 'waterproof', 'minimal', 'women'],
    featured: false,
    newArrival: true,
    trending: true,
    relatedProductIds: ['sv-024', 'sv-026', 'sv-036']
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products', count: PRODUCTS.length },
  { id: 'sneakers', name: 'Sneakers', count: PRODUCTS.filter(p => p.category === 'sneakers').length, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80' },
  { id: 'running', name: 'Running', count: PRODUCTS.filter(p => p.category === 'running').length, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  { id: 'basketball', name: 'Basketball', count: PRODUCTS.filter(p => p.category === 'basketball').length, image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80' },
  { id: 'lifestyle', name: 'Lifestyle', count: PRODUCTS.filter(p => p.category === 'lifestyle').length, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80' },
  { id: 'skate', name: 'Skate', count: PRODUCTS.filter(p => p.category === 'skate').length, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80' },
  { id: 'hiking', name: 'Hiking & Trail', count: PRODUCTS.filter(p => p.category === 'hiking').length, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  { id: 'formal', name: 'Formal & Sartorial', count: PRODUCTS.filter(p => p.category === 'formal').length, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80' },
  { id: 'boots', name: 'Boots', count: PRODUCTS.filter(p => p.category === 'boots').length, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80' },
  { id: 'slides', name: 'Slides & Clogs', count: PRODUCTS.filter(p => p.category === 'slides').length, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' },
  { id: 'women', name: "Women's Footwear", count: PRODUCTS.filter(p => p.category === 'women').length, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' },
  { id: 'kids', name: "Kids' Footwear", count: PRODUCTS.filter(p => p.category === 'kids').length, image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80' },
];

export const BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand.split('/')[0].trim()))).sort();
