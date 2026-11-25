import { MEDIA } from './siteConfig';

export type BuildCategory =
  | 'Full Restoration'
  | 'Custom Build'
  | 'Cafe Racer'
  | 'Scrambler';

export interface RestorationBreakdown {
  engine: string;
  frame: string;
  suspension: string;
  wheels: string;
  brakes: string;
  electrical: string;
  paint: string;
  bodywork: string;
}

export interface BuildProject {
  id: number;
  slug: string;
  number: string;
  brand: string;
  model: string;
  year: string;
  type: BuildCategory;
  duration: string;
  title: string;
  shortDescription: string;
  beforeImage: string;
  processImages: {
    src: string;
    caption: string;
  }[];
  finalImage: string;
  aspectPreference: 'wide' | 'portrait' | 'standard';
  story: string;
  stripDown: string;
  restoration: RestorationBreakdown;
  fabrication: string;
  finishing: string;
}

/**
 * INITIAL SHOWCASE PROJECT DATA
 * Replace with completed HO Builds client photography and specifications as needed.
 */
export const PROJECTS: readonly BuildProject[] = [
  {
    id: 1,
    slug: 'the-reborn-classic',
    number: '01',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: '2012',
    type: 'Full Restoration',
    duration: '14 Weeks',
    title: 'The Reborn Classic',
    shortDescription:
      'A weather-worn single-cylinder classic stripped to bare steel, mechanically rebuilt from the crank up, and refinished in hand-lined obsidian lacquer.',
    beforeImage: MEDIA.beforeClassic,
    processImages: [
      {
        src: MEDIA.engineRebuild,
        caption: 'Top-end valve lapping, bead-blasted cooling fins, and measured clearances on the bench.',
      },
      {
        src: MEDIA.tigFabrication,
        caption: 'Frame alignment verification and TIG-welded reinforcement gussets prior to blasting.',
      },
      {
        src: MEDIA.detailExhaust,
        caption: 'Hand-fitted stainless hardware and custom brushed exhaust bends.',
      },
    ],
    finalImage: MEDIA.afterClassic,
    aspectPreference: 'wide',
    story:
      'Arriving at our Ankleshwar workshop after years standing uncovered, this 2012 Classic 350 suffered from seized fork seals, oxidized engine casings, corroded wheel spokes, and deep rust across the fenders. Rather than patching surfaces, the owner asked for a ground-up restoration worthy of keeping for decades.',
    stripDown:
      'Every fastener, wiring strand, bearing race, and engine gasket was catalogued and removed until only the bare chassis remained. Corroded fasteners were logged and replaced with marine-grade stainless equivalents, and the frame was media-blasted to expose every weld joint for inspection.',
    restoration: {
      engine:
        'Full split-case inspection, new main bearings, honed barrel, oversized piston ring set, hand-lapped valves, and vapour-honed aluminum cases.',
      frame:
        'Straightness checked on the jig, stripped to raw metal, epoxy-primed, and finished in satin industrial chassis black.',
      suspension:
        'Front telescopic forks rebuilt with fresh stanchions, progressive springs, and calibrated fork oil; twin rear shocks replaced and matched.',
      wheels:
        'Original hubs vapour-blasted and laced with heavy-gauge stainless spokes onto trued rims wrapped in period-correct rubber.',
      brakes:
        'Front master cylinder and caliper overhauled with braided steel line; rear drum skimmed and fitted with high-friction shoes.',
      electrical:
        'Fresh loomed wiring harness tucked cleanly into the spine, new stator coil, regulated charging unit, and crisp halogen optics.',
      paint:
        'Six-stage deep obsidian gloss tank and mudguards accented with hand-laid brass pinstripes sealed under hand-sanded clear coat.',
      bodywork:
        'Original metal fenders straightened by hammer and dolly, paired with a hand-stitched full-grain black leather saddle.',
    },
    fabrication:
      'Custom battery box hidden cleanly beneath the seat pan, machined aluminum spacer bushings, and hand-formed fender stays fabricated in-house.',
    finishing:
      'Engine covers were hand-sanded through progressive grits to a refined satin polish before final torque-checking, heat-cycling, and multi-stage paint correction.',
  },
  {
    id: 2,
    slug: 'iron-twin-cafe',
    number: '02',
    brand: 'Triumph',
    model: 'Bonneville T100',
    year: '2015',
    type: 'Cafe Racer',
    duration: '16 Weeks',
    title: 'Iron Twin Cafe',
    shortDescription:
      'Hand-beaten raw aluminum tail cowl, clip-on ergonomics, and titanium-wrapped headers transforming a touring twin into a raw mechanical cafe machine.',
    beforeImage: MEDIA.beforeClassic,
    processImages: [
      {
        src: MEDIA.workshopLift,
        caption: 'Up on the lift with cases and rear assembly prepped for custom fitment.',
      },
      {
        src: MEDIA.tigFabrication,
        caption: 'Rear subframe hoop sculpted and welded for clean solo-seat lines.',
      },
      {
        src: MEDIA.mechanicWrench,
        caption: 'Custom rearset linkages and exhaust bracket alignment.',
      },
    ],
    finalImage: MEDIA.cafeWall,
    aspectPreference: 'standard',
    story:
      'Built for an enthusiast who wanted the unmistakable punch of a British parallel twin stripped of every superfluous bracket and plastic cover. The brief called for honest raw metal, dark matte paintwork, and sharp cornering geometry.',
    stripDown:
      'We removed the factory touring fenders, airbox clutter, bulky lighting, and rear frame extensions, exposing the clean double-cradle geometry and parallel-twin silhouette.',
    restoration: {
      engine:
        'Full service, valve clearance calibration, free-flowing intake pods, custom ECU mapping, and high-temp satin black engine covers.',
      frame:
        'Rear subframe shortened and closed with an integrated welded loop; redundant mounting tabs shaved smooth before powder coating.',
      suspension:
        'Upgraded inverted front fork conversion with custom billet triple clamps and piggyback gas-charged rear shocks.',
      wheels:
        'Black anodized aluminum spoke rims balanced with dual-purpose aggressive tread tires for visual stance and road grip.',
      brakes:
        'Floating drilled front rotor paired with radial caliper and adjustable machined brake lever.',
      electrical:
        'Compact lithium battery relocated under the seat hump, minimalist speedometer gauge, and flush LED tail strip integrated into the loop.',
      paint:
        'Satin gunmetal grey fuel tank contrasted against raw hand-brushed aluminum side panels and tail cowl sealed in matte clear.',
      bodywork:
        'Hand-formed alloy rear cowl and diamond-stitched distressed brown leather solo seat tailored to the rider.',
    },
    fabrication:
      'In-house TIG-welded rear subframe loop, hand-rolled aluminum side covers, custom headlight brackets, and machined aluminum rearset foot controls.',
    finishing:
      'Titanium exhaust wrap applied evenly along the headers, brushed metal grain unified by hand, and every exposed bolt indexed and torque-marked.',
  },
  {
    id: 3,
    slug: 'ankleshwar-scrambler-03',
    number: '03',
    brand: 'Honda',
    model: 'CB Series Donor',
    year: '2010',
    type: 'Scrambler',
    duration: '12 Weeks',
    title: 'Raw Metal Scrambler',
    shortDescription:
      'High-mount stainless exhaust, skid plate armor, and raw steel tank finish built to handle broken backroads without sacrificing atelier precision.',
    beforeImage: MEDIA.beforeClassic,
    processImages: [
      {
        src: MEDIA.tankDetail,
        caption: 'Front-end stance, knobby tire clearance, and tank proportion mock-up.',
      },
      {
        src: MEDIA.detailExhaust,
        caption: 'High-clearance exhaust mounting and rear bracket torque check.',
      },
      {
        src: MEDIA.vintageDrive,
        caption: 'Drivetrain, chain tension, and primary cover inspection.',
      },
    ],
    finalImage: MEDIA.scramblerCustom,
    aspectPreference: 'portrait',
    story:
      'Starting from a tired commuter chassis with bent rims and a neglected motor, this commission reimagined the donor as a stripped-back all-road scrambler tailored for Gujarat highways and dusty rural trails alike.',
    stripDown:
      'The motorcycle was completely dismantled, its corroded exhaust discarded, and the bare frame assessed for suspension travel upgrades and ground clearance geometry.',
    restoration: {
      engine:
        'Complete mechanical overhaul with fresh clutch pack, rebuilt carburetors, new timing chain, and bead-blasted cylinder block.',
      frame:
        'Reinforced swingarm pivot, custom seat rails welded level, and satin textured chassis finish resistant to stone chips.',
      suspension:
        'Extended front fork internals with rubber gaiters and heavy-duty progressive rear shocks calibrated for rider weight.',
      wheels:
        'Powder-coated black rims laced with stainless spokes and shod in deep-block scrambler tires.',
      brakes:
        'Overhauled hydraulic front disc with sintered pads and freshly machined rear braking assembly.',
      electrical:
        'Simplified waterproof wiring loom, mesh-guarded round headlight, and compact handlebar switchgear.',
      paint:
        'Raw steel tank hand-brushed and sealed under satin clear coat so the authentic metal texture stays visible.',
      bodywork:
        'Ribbed dark leather bench seat, shortened steel fenders, and a riveted brushed aluminum under-engine skid plate.',
    },
    fabrication:
      'High-mount swept brushed stainless exhaust system with hand-welded heat shield, aluminum sump guard, and custom headlight mesh grille.',
    finishing:
      'Every weld seam was dressed cleanly, mechanical linkages lubricated and tuned, and road-tested across mixed tarmac and gravel before handover.',
  },
  {
    id: 4,
    slug: 'midnight-four-atelier',
    number: '04',
    brand: 'Yamaha',
    model: 'Custom Inline Street',
    year: '2014',
    type: 'Custom Build',
    duration: '18 Weeks',
    title: 'Midnight Street Special',
    shortDescription:
      'Satin black bodywork, brushed stainless four-into-one exhaust, and stripped mechanical poise built under tungsten light in our workshop.',
    beforeImage: MEDIA.beforeClassic,
    processImages: [
      {
        src: MEDIA.harleyTank,
        caption: 'Custom tank finish and high-flow intake assembly.',
      },
      {
        src: MEDIA.mechanicWrench,
        caption: 'Final mechanical torque checks and chassis hardware alignment.',
      },
      {
        src: MEDIA.cafeTracker,
        caption: 'Night lighting inspection of headlamp beam and cockpit wiring.',
      },
    ],
    finalImage: MEDIA.heroMain,
    aspectPreference: 'wide',
    story:
      'Conceived as a timeless monochrome street machine, this build focuses on proportion, stance, and mechanical honesty. Every visual distraction was stripped away so the engine fins, exhaust sweep, and tank line command full attention.',
    stripDown:
      'Taken down to bare frame and crankcases, the build began by correcting frame tolerances, clearing out brittle factory wiring, and mocking up the low-slung riding triangle.',
    restoration: {
      engine:
        'Complete top and bottom end service, synchronized fuel delivery, polished alternator and clutch covers, and high-temp satin barrel finish.',
      frame:
        'De-tabbed main triangle, custom under-seat electronics box welded flush, and satin black structural coating.',
      suspension:
        'Stiffened front damping with fork gaiters and black-spring twin rear dampers for planted road feedback.',
      wheels:
        'Deep black spoked wheelset balanced precisely for smooth highway cruising.',
      brakes:
        'Upgraded drilled front disc assembly, stainless braided lines, and rebuilt calipers.',
      electrical:
        'Hidden micro-harness, compact key relocation, and warm classic round headlamp beam.',
      paint:
        'Deep satin obsidian tank finished to a velvet low-sheen luster without heavy decals.',
      bodywork:
        'Hand-shaped low-profile leather saddle and minimal rear tail tidy.',
    },
    fabrication:
      'Bespoke swept stainless exhaust headers and megaphone silencer, machined aluminum clip-ons, and tucked license bracket.',
    finishing:
      'Multi-day final assembly with calibrated torque specs, fluid bleed, dyno-informed tuning, and hand-waxed metal preservation.',
  },
];
