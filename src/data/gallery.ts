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
    src: MEDIA.cafeWall,
    alt: 'Custom cafe racer motorcycle parked in front of brick industrial backdrop',
    title: 'Iron Twin Cafe',
    category: 'BUILDS',
    motorcycle: 'Triumph / Boxer Cafe',
    caption: 'Clean solo saddle, spoke wheels, and minimalist stance built for real road poise.',
    span: 'standard',
  },
  {
    id: 'gal-9',
    src: MEDIA.workshopLift,
    alt: 'Custom motorcycle on hydraulic workshop lift with disassembled engine cases',
    title: 'Hydraulic Lift Bay',
    category: 'WORKSHOP',
    motorcycle: 'Custom Shop Project',
    caption: 'On the lift for drivetrain inspection, case assembly, and rear wheel alignment.',
    span: 'tall',
  },
  {
    id: 'gal-10',
    src: MEDIA.harleyTank,
    alt: 'Custom painted dark fuel tank and exposed intake filter close-up',
    title: 'Custom Tank & Intake',
    category: 'DETAILS',
    motorcycle: 'Harley-Davidson Custom',
    caption: 'Hand-finished custom tank graphics paired with high-flow exposed intake hardware.',
    span: 'standard',
  },
  {
    id: 'gal-11',
    src: MEDIA.mechanicWrench,
    alt: 'Mechanic adjusting frame and exhaust hardware with hand tools in garage',
    title: 'Torque & Fitment Check',
    category: 'WORKSHOP',
    motorcycle: 'Adventure / Street',
    caption: 'Final fastener checks and exhaust bracket alignment before road testing.',
    span: 'standard',
  },
  {
    id: 'gal-12',
    src: MEDIA.vintageDrive,
    alt: 'Monochrome close-up of vintage motorcycle primary drive, chain, and spoked wheel',
    title: 'Vintage Primary & Chain',
    category: 'RESTORATION',
    motorcycle: 'Classic Heritage Donor',
    caption: 'Preserving mechanical patina while restoring smooth primary drive and chain tension.',
    span: 'wide',
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
    src: MEDIA.workshopLift,
    alt: 'Custom motorcycle on the hydraulic lift in the Hariom Moto Works bay',
    note: 'On the lift. Drivetrain and case assembly day.',
  },
  {
    id: 'ig-2',
    src: MEDIA.mechanicWrench,
    alt: 'Mechanic tightening rearset and exhaust hardware in the workshop',
    note: 'Every bracket checked and torqued by hand.',
  },
  {
    id: 'ig-3',
    src: MEDIA.harleyTank,
    alt: 'Custom painted motorcycle tank and intake detail',
    note: 'Custom tank paint and intake fitment.',
  },
  {
    id: 'ig-4',
    src: MEDIA.tankDetail,
    alt: 'Vintage motorcycle tank, knobby front tire, and engine case',
    note: 'Classic iron in the workshop for full mechanical care.',
  },
];
