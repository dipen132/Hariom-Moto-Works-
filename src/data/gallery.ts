import { MEDIA } from './siteConfig';

export type GalleryCategory =
  | 'ALL'
  | 'RESTORATION'
  | 'BUILDS'
  | 'WORKSHOP'
  | 'DETAILS'
  | 'BEFORE / AFTER';

export const GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  'ALL',
  'RESTORATION',
  'BUILDS',
  'WORKSHOP',
  'DETAILS',
  'BEFORE / AFTER',
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, 'ALL'>;
  motorcycle: string;
  caption: string;
  span: 'wide' | 'tall' | 'standard';
}

/**
 * CURATED GALLERY ARCHIVE
 * Easy to extend or replace with real Hariom Moto Works studio and workshop photography.
 */
export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: 'gal-1',
    src: MEDIA.heroMain,
    alt: 'Midnight Street Special custom motorcycle under tungsten workshop light',
    title: 'Midnight Street Special',
    category: 'BUILDS',
    motorcycle: 'Yamaha Custom Inline',
    caption: 'Finished monochrome custom sitting under overhead studio light at Hariom Moto Works.',
    span: 'wide',
  },
  {
    id: 'gal-2',
    src: MEDIA.detailExhaust,
    alt: 'Close-up of TIG-welded stainless exhaust and machined aluminum footpeg',
    title: 'TIG Collector & Rearsets',
    category: 'DETAILS',
    motorcycle: 'Raw Metal Scrambler',
    caption: 'Pie-cut stainless steel welds left clean alongside custom knurled aluminum controls.',
    span: 'tall',
  },
  {
    id: 'gal-3',
    src: MEDIA.afterClassic,
    alt: 'Restored obsidian black vintage single-cylinder classic motorcycle',
    title: 'The Reborn Classic — Final',
    category: 'RESTORATION',
    motorcycle: 'Royal Enfield Classic 350 (2012)',
    caption: 'Mirror-gloss obsidian paintwork, brass pinstriping, and hand-polished engine cases.',
    span: 'standard',
  },
  {
    id: 'gal-4',
    src: MEDIA.engineRebuild,
    alt: 'Builder hands fitting valves into a freshly bead-blasted cylinder head',
    title: 'Bench Valve Assembly',
    category: 'WORKSHOP',
    motorcycle: 'Single-Cylinder Top End',
    caption: 'Measured clearances, torque wrench discipline, and bead-blasted aluminum cooling fins.',
    span: 'standard',
  },
  {
    id: 'gal-5',
    src: MEDIA.scramblerCustom,
    alt: 'Hand-built scrambler motorcycle in raw gunmetal and stitched leather',
    title: 'All-Road Scrambler Stance',
    category: 'BUILDS',
    motorcycle: 'Honda CB Series Donor',
    caption: 'High-mount stainless exhaust, bash plate protection, and raw brushed steel fuel tank.',
    span: 'tall',
  },
  {
    id: 'gal-6',
    src: MEDIA.beforeClassic,
    alt: 'Neglected vintage motorcycle covered in workshop dust and patina prior to teardown',
    title: 'Arrival Condition — Before',
    category: 'BEFORE / AFTER',
    motorcycle: 'Vintage Classic Donor',
    caption: 'Documenting every layer of rust, oxidation, and wear before the first wrench turns.',
    span: 'standard',
  },
  {
    id: 'gal-7',
    src: MEDIA.tigFabrication,
    alt: 'Craftsman TIG welding a bare tubular steel motorcycle frame on a jig',
    title: 'Chassis Fabrication Bay',
    category: 'WORKSHOP',
    motorcycle: 'Custom Tubular Chassis',
    caption: 'Structural frame fabrication and TIG welding directly on the workshop alignment jig.',
    span: 'wide',
  },
  {
    id: 'gal-8',
    src: MEDIA.cafeTracker,
    alt: 'Matte charcoal and brushed alloy cafe racer motorcycle in industrial studio',
    title: 'Iron Twin Cafe',
    category: 'BUILDS',
    motorcycle: 'Triumph Bonneville T100',
    caption: 'Hand-shaped raw aluminum tail cowl paired with titanium-wrapped twin exhaust headers.',
    span: 'standard',
  },
  {
    id: 'gal-9',
    src: MEDIA.afterClassic,
    alt: 'Completed showroom restoration of a classic black and chrome motorcycle',
    title: 'Showroom Handover — After',
    category: 'BEFORE / AFTER',
    motorcycle: 'Royal Enfield Classic 350',
    caption: 'Fourteen weeks after arrival: stripped, restored, and refined to showroom tolerances.',
    span: 'standard',
  },
];

/**
 * INSTAGRAM VISUAL PLACEHOLDERS (@ho_builds_)
 * Replace with live feed or real Instagram photo exports when available.
 */
export interface InstagramPreview {
  id: string;
  src: string;
  alt: string;
  note: string;
}

export const INSTAGRAM_PREVIEWS: readonly InstagramPreview[] = [
  {
    id: 'ig-1',
    src: MEDIA.engineRebuild,
    alt: 'Cylinder head rebuild on the Hariom Moto Works workbench',
    note: 'Bench discipline. Valves seated and torqued.',
  },
  {
    id: 'ig-2',
    src: MEDIA.tigFabrication,
    alt: 'Frame TIG welding inside the Ankleshwar workshop',
    note: 'Raw steel on the jig. Fabrication day.',
  },
  {
    id: 'ig-3',
    src: MEDIA.detailExhaust,
    alt: 'Stainless steel exhaust welds and machined footpeg',
    note: 'Close enough to inspect every weld bead.',
  },
  {
    id: 'ig-4',
    src: MEDIA.cafeTracker,
    alt: 'Matte charcoal cafe racer build finished in studio',
    note: 'Iron Twin standing ready for final road test.',
  },
];
