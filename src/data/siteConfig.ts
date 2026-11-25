/**
 * HARIOM MOTO WORKS — CENTRALIZED SITE CONFIGURATION & MEDIA REGISTRY
 *
 * Replace contact details, business hours, placeholder statistics, or image paths
 * below to update the entire website from a single source of truth.
 */

export const SITE_CONFIG = {
  brandName: 'HARIOM MOTO WORKS',
  shortBrand: 'Hariom Moto Works',
  tagline: 'Parts. Repair. Restoration. Builds.',
  personality: 'Raw. Mechanical. Handcrafted. Reliable.',
  heroKicker: 'Motorcycle Parts · Service · Builds',
  location: {
    city: 'Ankleshwar',
    state: 'Gujarat',
    country: 'India',
    full: 'Ankleshwar, Gujarat, India',
  },
  hours: [
    { days: 'Monday – Saturday', time: '09:30 AM – 07:30 PM' },
    { days: 'Sunday', time: 'By Appointment' },
  ],
  contact: {
    phoneDisplay: '8200217135',
    phoneE164: '918200217135',
    email: 'hobuilds@gmail.com',
    instagramHandle: '@ho_builds_',
    instagramUrl: 'https://instagram.com/ho_builds_',
    whatsappBaseUrl: 'https://wa.me/918200217135',
  },
} as const;

/**
 * CENTRALIZED WORKSHOP, PARTS & BUILD PHOTOGRAPHY
 * Replace these paths with new real workshop photography as shoots are added.
 */
export const MEDIA = {
  heroMain: '/src/assets/images/build_cafe_tracker.jpg',
  beforeClassic: '/src/assets/images/before_vintage_rust.jpg',
  afterClassic: '/src/assets/images/after_classic_restored.jpg',
  cafeTracker: '/src/assets/images/hero_workshop_bike.jpg',
  scramblerCustom: '/src/assets/images/build_scrambler_custom.jpg',
  engineRebuild: '/src/assets/images/workshop_engine_rebuild.jpg',
  tigFabrication: '/src/assets/images/workshop_tig_fabrication.jpg',
  detailExhaust: '/src/assets/images/detail_exhaust_metal.jpg',
} as const;

/**
 * SUPPORTED MOTORCYCLE MANUFACTURERS
 * Hariom Moto Works supplies parts, repairs, restores, and builds classic & modern motorcycles.
 */
export const MOTORCYCLE_BRANDS: readonly string[] = [
  'Suzuki',
  'TVS',
  'Royal Enfield',
  'Hero',
  'Yezdi',
  'KTM',
  'Yamaha',
  'Honda',
  'Triumph',
  'Harley-Davidson',
];

/**
 * BRAND STATISTICS — EDITABLE PLACEHOLDERS
 * Update these placeholder values once official workshop counts are confirmed.
 */
export interface BrandStat {
  id: string;
  value: string;
  label: string;
  note: string;
}

export const BRAND_STATS: readonly BrandStat[] = [
  {
    id: 'builds',
    value: 'XX+',
    label: 'Custom Builds',
    note: 'One-off commissions completed',
  },
  {
    id: 'restorations',
    value: 'XX+',
    label: 'Restorations',
    note: 'Classic machines brought back',
  },
  {
    id: 'experience',
    value: 'XX+',
    label: 'Years of Work',
    note: 'Hands-on mechanical experience',
  },
  {
    id: 'motorcycles',
    value: 'XX+',
    label: 'Motorcycles',
    note: 'Serviced, repaired, and tuned',
  },
];

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Parts', path: '/parts' },
  { label: 'Builds', path: '/builds' },
  { label: 'Workshop', path: '/workshop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const;

export interface TrustPillar {
  number: string;
  title: string;
  description: string;
}

export const TRUST_PILLARS: readonly TrustPillar[] = [
  {
    number: '01',
    title: 'Genuine Parts',
    description:
      'Reliable OEM-grade and workshop-tested components stocked for real-world repairs and rebuilds.',
  },
  {
    number: '02',
    title: 'Workshop Experience',
    description:
      'Hands-on mechanical knowledge across daily commuters, classic singles, and modern multi-cylinder motorcycles.',
  },
  {
    number: '03',
    title: 'Complete Service',
    description:
      'Spare parts supply, diagnostics, repair, restoration, fabrication, and custom builds under one roof.',
  },
  {
    number: '04',
    title: 'Built With Care',
    description:
      'Unhurried mechanical attention, proper torque checks, and honest guidance on every machine.',
  },
];
