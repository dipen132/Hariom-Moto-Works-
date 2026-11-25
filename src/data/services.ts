import { MEDIA } from './siteConfig';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: readonly string[];
  idealFor: string;
  image: string;
  imageAlt: string;
  featuredOnHome?: boolean;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'repair',
    number: '01',
    name: 'Motorcycle Repair',
    tagline: 'Diagnostics, servicing and mechanical repairs performed with workshop-level attention to detail.',
    shortDescription:
      'Thorough diagnostics, periodic servicing, engine repairs, electrical fault finding, and brake or suspension overhauls done properly the first time.',
    fullDescription:
      'Every motorcycle we service receives unhurried mechanical inspection rather than rushed quick-fixes. From everyday commuter maintenance and valve clearances to complex engine or wiring diagnostics, we repair motorcycles to be trustworthy on real roads.',
    deliverables: [
      'Complete mechanical diagnostics and periodic servicing',
      'Engine, clutch, gearbox, and carburetor/EFI repairs',
      'Brake overhauls, fork seal rebuilds, and chain/sprocket fitting',
      'Electrical charging, ignition, and wiring troubleshooting',
    ],
    idealFor: 'Daily riders, touring motorcycles, and classic bikes needing dependable mechanical care.',
    image: MEDIA.engineRebuild,
    imageAlt: 'Mechanic hands assembling an air-cooled motorcycle cylinder head with torque wrench and calipers',
    featuredOnHome: true,
  },
  {
    id: 'restoration',
    number: '02',
    name: 'Restoration',
    tagline: 'Bring older machines back to life while preserving their character.',
    shortDescription:
      'Ground-up mechanical and cosmetic restorations that return neglected and vintage motorcycles to clean, showroom-worthy running condition.',
    fullDescription:
      'Whether a classic motorcycle has stood unused for years or deserves a fresh lease on life, we strip the machine down to its bare frame, rebuild every mechanical assembly to proper tolerance, and refinish metal, chrome, and paint with patience.',
    deliverables: [
      'Complete teardown, rust remediation, and hardware cataloguing',
      'Full engine, transmission, suspension, and brake rebuilds',
      'Chassis blasting, frame alignment, and protective refinishing',
      'Period-correct paint, hand pinstriping, wheel lacing, and upholstery',
    ],
    idealFor: 'Royal Enfield, Yezdi, Yamaha, Suzuki, Honda, and cherished vintage motorcycles.',
    image: MEDIA.afterClassic,
    imageAlt: 'Fully restored obsidian classic motorcycle inside the Hariom Moto Works workshop',
    featuredOnHome: true,
  },
  {
    id: 'custom-builds',
    number: '03',
    name: 'Custom Builds',
    tagline: 'Unique motorcycles built around the rider.',
    shortDescription:
      'Bespoke cafe racers, scramblers, street trackers, and modifications combining proportion, comfort, and honest mechanical engineering.',
    fullDescription:
      'Every custom build starts with how you ride and what you want the machine to feel like. We balance stance, ergonomics, metalwork, and everyday reliability so your motorcycle rides even better than it stands.',
    deliverables: [
      'Concept direction, stance proportioning, and rider ergonomics',
      'Subframe re-profiling, custom saddles, and clean lighting integration',
      'Concealed wiring looms and minimalist cockpit instrumentation',
      'Cohesive surface finishes across paint, raw metal, and leather',
    ],
    idealFor: 'Royal Enfield, Triumph, Honda, Yamaha, KTM, and Harley-Davidson donors.',
    image: MEDIA.cafeTracker,
    imageAlt: 'Custom matte charcoal and raw aluminum cafe racer build inside the workshop',
    featuredOnHome: true,
  },
  {
    id: 'parts',
    number: '04',
    name: 'Parts',
    tagline: 'Motorcycle spare parts and components sourced for practical everyday repairs and builds.',
    shortDescription:
      'Direct workshop access to reliable engine, brake, drivetrain, electrical, suspension, and service spare parts across major motorcycle brands.',
    fullDescription:
      'Because we use the parts we supply inside our own workshop every day, we know which components last. Whether you need routine service filters and brake pads or hard-to-find restoration hardware, we supply genuine parts backed by real fitment knowledge.',
    deliverables: [
      'Engine, clutch, brake, chain/sprocket, and bearing stock',
      'OEM-grade filters, control cables, and electrical components',
      'Classic restoration spares and custom build hardware sourcing',
      'Direct fitment guidance and optional workshop installation',
    ],
    idealFor: 'Motorcycle owners, home mechanics, restorers, and riders seeking reliable spare parts.',
    image: MEDIA.detailExhaust,
    imageAlt: 'Close-up of motorcycle brake rotor, drive chain, sprocket, and stainless metalwork',
    featuredOnHome: true,
  },
  {
    id: 'fabrication',
    number: '05',
    name: 'Fabrication',
    tagline: 'In-house metalwork, brackets, exhausts, and motorcycle-specific fabrication.',
    shortDescription:
      'TIG-welded subframes, hand-shaped alloy panels, custom exhaust headers, and precision brackets fabricated when bolt-on parts fall short.',
    fullDescription:
      'True workshop craftsmanship means building parts properly rather than forcing poor-fitting universal brackets. Our fabrication bay handles structural frame repairs, custom subframes, stainless exhaust routing, skid plates, and hidden battery boxes.',
    deliverables: [
      'TIG-welded steel and stainless frame and subframe work',
      'Hand-formed aluminum tail cowls, fenders, and side covers',
      'Custom exhaust headers, collectors, and mounting stays',
      'Machined spacers, rearset linkages, and headlight brackets',
    ],
    idealFor: 'Custom motorcycles, frame repairs, and older machines with discontinued components.',
    image: MEDIA.tigFabrication,
    imageAlt: 'Craftsman TIG welding a bare tubular steel motorcycle frame on a workshop jig',
  },
  {
    id: 'performance-detailing',
    number: '06',
    name: 'Performance & Detailing',
    tagline: 'Sharper riding dynamics and final-stage surface refinement.',
    shortDescription:
      'Suspension and brake upgrades, carburetor or fuel tuning, deep degreasing, aluminum polishing, and protective paint correction.',
    fullDescription:
      'We pair practical riding upgrades—stronger braking, better damping, crisper throttle response—with meticulous mechanical detailing so engine fins, spoked wheels, and lacquered tanks look clean up close.',
    deliverables: [
      'Front fork internals, shock upgrades, and braided brake conversions',
      'Intake, exhaust breathing, and carburetor/fuel calibration',
      'Hand-polishing of aluminum engine cases and chrome trim',
      'Multi-stage tank paint correction and protective finishing',
    ],
    idealFor: 'Riders upgrading older motorcycles or keeping prized builds in crisp condition.',
    image: MEDIA.scramblerCustom,
    imageAlt: 'Custom scrambler standing in the workshop service bay',
  },
];
