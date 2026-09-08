// Shared marketplace & collection data — ported from the GLACIER Stitch designs

export const MARKET_ITEMS = [
  {
    id: 'jordan-86-away',
    name: "Jordan '86 Away",
    category: 'jerseys',
    tag: 'legendary',
    price: 3500,
    currency: 'usdc',
    seller: '@collector_king',
    featured: true,
    image:
      '/images/market/jordan-jersey.jpg',
  },
  {
    id: 'lebron-crown-jewel',
    name: 'LeBron Crown Jewel #12',
    category: 'cards',
    tag: 'holo',
    price: 450,
    currency: 'usdc',
    seller: 'JD',
    image:
      '/images/market/lebron-card.jpg',
  },
  {
    id: 'kobe-v-protro-glacier',
    name: "Kobe V Protro 'Glacier'",
    category: 'shoes',
    tag: 'footwear',
    price: 1200,
    currency: 'usdc',
    seller: 'MK',
    image:
      '/images/market/kobe-shoes.jpg',
  },
  {
    id: 'pg-13-glacier-peak',
    name: 'PG-13 Glacier Peak',
    category: 'shoes',
    tag: 'footwear',
    price: 240,
    currency: 'usd',
    seller: '@glacier_official',
    badge: 'Glacier Elite',
    collection: 'Frozen Light Collection',
    image:
      '/images/market/pg-13-product.jpg',
    specs: true,
  },
  {
    id: 'next-gen-pioneer-jersey',
    name: 'Next Gen Pioneer Jersey',
    category: 'jerseys',
    tag: 'legendary',
    price: 850,
    currency: 'usdc',
    seller: '@zhou_kh',
    image:
      '/images/market/pioneer-jersey.jpg',
  },
  {
    id: 'glacier-stealth-sleeve',
    name: 'Glacier Stealth Compression Sleeve',
    category: 'accessories',
    tag: 'footwear',
    price: 120,
    currency: 'usdc',
    seller: '@glacier_official',
    image:
      '/images/market/compression-sleeve.jpg',
  },
  {
    id: 'frozen-light-grip-tape',
    name: 'Frozen Light Grip Tape',
    category: 'accessories',
    tag: 'footwear',
    price: 45,
    currency: 'usdc',
    seller: '@glacier_official',
    image:
      '/images/market/grip-tape.jpg',
  },
];

export const VAULT_ITEMS = [
  {
    id: 'vault-pg-13-glacier-peak',
    name: 'PG-13 Glacier Peak',
    category: 'gear',
    rarity: 'elite',
    acquired: 'Oct 12, 2023',
    condition: 100,
    icon: 'sports_basketball',
    image:
      '/images/market/pg-13-vault.jpg',
  },
  {
    id: 'vault-double-screen-high-post',
    name: 'Double Screen High Post',
    category: 'playbooks',
    rarity: 'pro',
    type: 'offensive',
    mastery: 78,
    icon: 'draw',
  },
  {
    id: 'vault-lin-wei',
    name: 'Lin Wei',
    category: 'playerCards',
    rarity: 'rookie',
    ovr: 76,
    pot: 89,
    icon: 'person',
    image:
      '/images/market/lin-wei-card.jpg',
  },
  {
    id: 'vault-nebula-grip',
    name: 'Nebula Grip',
    category: 'gear',
    rarity: 'pro',
    acquired: 'Nov 02, 2023',
    condition: 75,
    icon: 'sports_basketball',
    image:
      '/images/market/nebula-ball.jpg',
  },
];
