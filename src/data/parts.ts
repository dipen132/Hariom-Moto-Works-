import { MEDIA } from './siteConfig';

export interface PartsCategory {
  id: string;
  number: string;
  name: string;
  summary: string;
  examples: readonly string[];
  image: string;
  imageAlt: string;
}

/**
 * MOTORCYCLE SPARE PARTS STOCKIST CATEGORIES
 * Hariom Moto Works supplies workshop-grade components for everyday maintenance,
 * mechanical overhauls, classic restorations, and custom builds.
 */
export const PARTS_CATEGORIES: readonly PartsCategory[] = [
  {
    id: 'engine-parts',
    number: '01',
    name: 'Engine Parts',
    summary: 'Pistons, rings, valves, timing chains, gaskets, and top-end rebuild kits.',
    examples: ['Piston & ring sets', 'Intake & exhaust valves', 'Full gasket kits', 'Timing chains & guides'],
    image: MEDIA.engineRebuild,
    imageAlt: 'Air-cooled motorcycle cylinder head, valves, and precision workshop tools',
  },
  {
    id: 'brake-parts',
    number: '02',
    name: 'Brake Parts',
    summary: 'Disc rotors, sintered pads, drum shoes, master cylinders, and braided lines.',
    examples: ['Brake pads & shoes', 'Disc rotors', 'Caliper rebuild seals', 'Master cylinders & lines'],
    image: MEDIA.detailExhaust,
    imageAlt: 'Drilled motorcycle brake rotor, rear sprocket, and stainless hardware close-up',
  },
  {
    id: 'chain-sprockets',
    number: '03',
    name: 'Chain & Sprockets',
    summary: 'Heavy-duty O-ring drive chains, hardened steel sprockets, and tensioners.',
    examples: ['O-ring & X-ring chains', 'Front & rear sprockets', 'Chain sliders', 'Master links & adjusters'],
    image: MEDIA.detailExhaust,
    imageAlt: 'Motorcycle drive chain and steel rear sprocket assembly',
  },
  {
    id: 'clutch-components',
    number: '04',
    name: 'Clutch Components',
    summary: 'Friction plates, steel plates, heavy-duty springs, hubs, and release assemblies.',
    examples: ['Clutch plate sets', 'Pressure plates', 'Clutch springs', 'Hubs & bearings'],
    image: MEDIA.engineRebuild,
    imageAlt: 'Internal motorcycle mechanical assembly on steel workbench',
  },
  {
    id: 'electrical',
    number: '05',
    name: 'Electrical',
    summary: 'Stator coils, rectifier-regulators, CDI/ignition coils, relays, and wiring looms.',
    examples: ['Stators & RR units', 'Ignition coils & plugs', 'Switchgear & relays', 'Headlamp & tail assemblies'],
    image: MEDIA.cafeTracker,
    imageAlt: 'Custom motorcycle electrical lighting, headlamp, and cockpit instrumentation',
  },
  {
    id: 'filters',
    number: '06',
    name: 'Filters',
    summary: 'High-efficiency oil filters, air filter elements, and inline fuel filtration.',
    examples: ['Engine oil filters', 'OEM & performance air filters', 'Fuel strainers', 'Breather elements'],
    image: MEDIA.engineRebuild,
    imageAlt: 'Clean motorcycle engine service components on the workshop bench',
  },
  {
    id: 'suspension',
    number: '07',
    name: 'Suspension',
    summary: 'Fork seals, stanchions, progressive springs, fork oil, and twin/mono rear shocks.',
    examples: ['Fork oil & dust seals', 'Front fork pipes', 'Rear shock absorbers', 'Swingarm bushes'],
    image: MEDIA.scramblerCustom,
    imageAlt: 'Motorcycle front fork gaiters, suspension geometry, and wheel hub',
  },
  {
    id: 'cables',
    number: '08',
    name: 'Cables',
    summary: 'Smooth low-friction throttle, clutch, choke, and speedometer control cables.',
    examples: ['Throttle cables', 'Clutch cables', 'Front brake cables', 'Speedometer drive cables'],
    image: MEDIA.afterClassic,
    imageAlt: 'Restored classic motorcycle handlebar controls and routed cables',
  },
  {
    id: 'bearings',
    number: '09',
    name: 'Bearings',
    summary: 'Precision wheel bearings, steering cone sets, crank mains, and swingarm bearings.',
    examples: ['Front & rear wheel bearings', 'Steering stem cone sets', 'Crankshaft bearings', 'Oil seals & spacers'],
    image: MEDIA.engineRebuild,
    imageAlt: 'Precision mechanical inspection tools and engine components',
  },
  {
    id: 'body-accessories',
    number: '10',
    name: 'Body & Accessories',
    summary: 'Fenders, mirrors, grips, seats, crash guards, fasteners, and custom hardware.',
    examples: ['Steel mudguards & brackets', 'Mirrors & handlebar grips', 'Saddles & seat pans', 'Stainless fasteners'],
    image: MEDIA.tigFabrication,
    imageAlt: 'Bare steel motorcycle chassis and custom metalwork inside the fabrication bay',
  },
];
