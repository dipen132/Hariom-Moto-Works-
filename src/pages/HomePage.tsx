import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  MEDIA,
  MOTORCYCLE_BRANDS,
  SITE_CONFIG,
  TRUST_PILLARS,
} from '../data/siteConfig';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { PARTS_CATEGORIES } from '../data/parts';
import { PROCESS_STEPS } from '../data/process';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SectionReveal } from '../components/SectionReveal';
import { CustomerCTA } from '../components/CustomerCTA';

const QUICK_SERVICES = [
  {
    number: '01',
    label: 'PARTS',
    summary: 'Genuine spare parts & components stocked for daily repairs and rebuilds.',
    to: '/parts',
    image: MEDIA.detailExhaust,
  },
  {
    number: '02',
    label: 'REPAIR',
    summary: 'Diagnostics, periodic servicing, engine, brake & electrical repairs.',
    to: '/services',
    image: MEDIA.engineRebuild,
  },
  {
    number: '03',
    label: 'RESTORATION',
    summary: 'Classic and neglected motorcycles rebuilt cleanly from the frame up.',
    to: '/builds',
    image: MEDIA.afterClassic,
  },
  {
    number: '04',
    label: 'BUILDS',
    summary: 'Custom fabrication, modifications, and one-off motorcycles built to ride.',
    to: '/builds',
    image: MEDIA.cafeTracker,
  },
] as const;

export function HomePage() {
  const [hoveredQuickIndex, setHoveredQuickIndex] = useState<number>(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [activePartIndex, setActivePartIndex] = useState<number>(0);

  const featuredServices = SERVICES.filter((s) => s.featuredOnHome);
  const activeService = featuredServices[activeServiceIndex] ?? SERVICES[0];
  const activePart = PARTS_CATEGORIES[activePartIndex] ?? PARTS_CATEGORIES[0];

  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC]">
      {/* 01 — HERO SECTION */}
      <section className="relative min-h-[88vh] lg:min-h-[94vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <SafeImage
            src={MEDIA.heroMain}
            alt="Custom motorcycle inside the Hariom Moto Works workshop with workbench and tools"
            loading="eager"
            className="w-full h-full object-cover object-center animate-hero-zoom"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/45 to-[#0B0B0A]/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A]/85 via-[#0B0B0A]/35 to-transparent"
          />
          <div aria-hidden="true" className="workshop-grain absolute inset-0 opacity-45" />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-12 lg:pb-16">
          <div className="max-w-3xl space-y-5">
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#D94E2A]">
              {SITE_CONFIG.heroKicker}
            </p>

            <h1 className="font-display text-6xl sm:text-8xl lg:text-[112px] font-bold uppercase leading-[0.88] tracking-[0.01em] text-[#F3F1EC]">
              BUILT FOR
              <span className="block text-[#F3F1EC]">THE ROAD.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F3F1EC]/85 max-w-xl leading-relaxed pt-1">
              Motorcycle parts, repairs, restoration and custom builds — all under one roof at{' '}
              <span className="text-[#F3F1EC] font-medium">{SITE_CONFIG.shortBrand}</span>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none">
              <Link
                to="/services"
                className="group inline-flex items-center justify-between sm:justify-center gap-3 h-13 px-7 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between sm:justify-center gap-3 h-13 px-7 border border-[#F3F1EC]/35 bg-[#0B0B0A]/40 text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#F3F1EC] transition-colors text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight
                  className="w-4 h-4 text-[#A19E97] group-hover:text-[#D94E2A] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — QUICK SERVICE NAVIGATION STRIP (01 PARTS · 02 REPAIR · 03 RESTORATION · 04 BUILDS) */}
      <section
        aria-label="Core capabilities overview"
        className="bg-[#131311] border-y border-[#2B2B27]"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#2B2B27]">
            {QUICK_SERVICES.map((item, idx) => {
              const isHighlighted = hoveredQuickIndex === idx;
              return (
                <Link
                  key={item.number}
                  to={item.to}
                  onMouseEnter={() => setHoveredQuickIndex(idx)}
                  onFocus={() => setHoveredQuickIndex(idx)}
                  className="group relative block py-7 sm:px-6 first:sm:pl-0 last:sm:pr-0 transition-colors"
                >
                  {/* Animated mechanical accent bar on top */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 inset-x-0 h-[2px] bg-[#D94E2A] transition-transform duration-200 origin-left ${
                      isHighlighted ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#D94E2A] tabular-nums">
                        {item.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#F3F1EC] group-hover:text-[#D94E2A] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-[#A19E97] group-hover:text-[#D94E2A] transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-sm text-[#A19E97] group-hover:text-[#F3F1EC]/90 transition-colors leading-relaxed">
                    {item.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — EDITORIAL SERVICES SECTION */}
      <section className="bg-[#0B0B0A] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#2B2B27]">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                What We Do
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-[#F3F1EC]">
                Serviced. Repaired. Restored. Built.
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>All Workshop Services</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 divide-y divide-[#2B2B27]">
              {featuredServices.map((service, index) => {
                const isActive = index === activeServiceIndex;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    onFocus={() => setActiveServiceIndex(index)}
                    onClick={() => setActiveServiceIndex(index)}
                    aria-pressed={isActive}
                    className="w-full text-left py-7 sm:py-8 flex items-start justify-between gap-6 group cursor-pointer transition-colors"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-8">
                      <span
                        className={`font-mono text-xs tabular-nums transition-colors ${
                          isActive ? 'text-[#D94E2A]' : 'text-[#A19E97]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div className="space-y-2">
                        <h3
                          className={`font-display text-4xl sm:text-5xl font-bold leading-none transition-colors ${
                            isActive
                              ? 'text-[#F3F1EC]'
                              : 'text-[#F3F1EC]/55 group-hover:text-[#F3F1EC]'
                          }`}
                        >
                          {service.name}
                        </h3>
                        <p className="text-sm sm:text-base text-[#A19E97] max-w-lg leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className={`w-5 h-5 mt-2 shrink-0 transition-transform duration-200 ${
                        isActive
                          ? 'text-[#D94E2A] translate-x-1'
                          : 'text-[#2B2B27] group-hover:text-[#A19E97]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Service Editorial Image & Action */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
                <SafeImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  className="w-full aspect-[4/3] object-cover object-center transition-opacity duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                    {activeService.number} · {activeService.name}
                  </p>
                  <Link
                    to={`/contact?service=${encodeURIComponent(activeService.name)}`}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap"
                  >
                    <span>Book / Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-sm text-[#A19E97] leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — DEDICATED MOTORCYCLE PARTS SECTION */}
      <section className="bg-[#131311] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-[#2B2B27]">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                Spare Parts Stockist &amp; Supply
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#F3F1EC]">
                Motorcycle Parts
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base text-[#A19E97] leading-relaxed">
                Quality motorcycle parts for repairs, servicing, maintenance and builds — backed by
                mechanics who fit these exact components every day.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Macro Mechanical Photography + Active Category Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden bg-[#0B0B0A] border border-[#2B2B27]">
                <SafeImage
                  src={activePart.image}
                  alt={activePart.imageAlt}
                  className="w-full aspect-[4/3] object-cover object-center"
                />
              </div>

              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                  {activePart.number} · {activePart.name}
                </p>
                <p className="text-base text-[#F3F1EC] leading-relaxed">{activePart.summary}</p>
                <p className="text-xs font-mono text-[#A19E97] leading-relaxed">
                  Stocked examples: {activePart.examples.join(' · ')}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/parts"
                  className="group inline-flex items-center gap-3 h-12 px-6 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
                >
                  <span>Enquire About Parts</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Right: 10 Mechanical Stock Categories (Editorial Index — Not Amazon Cards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-[#2B2B27]">
              {PARTS_CATEGORIES.map((part, idx) => {
                const selected = idx === activePartIndex;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onMouseEnter={() => setActivePartIndex(idx)}
                    onFocus={() => setActivePartIndex(idx)}
                    onClick={() => setActivePartIndex(idx)}
                    aria-pressed={selected}
                    className={`text-left py-5 px-4 border-b border-[#2B2B27] transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                      selected
                        ? 'bg-[#1B1B18] text-[#F3F1EC]'
                        : 'hover:bg-[#1B1B18]/60 text-[#A19E97] hover:text-[#F3F1EC]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`font-mono text-xs tabular-nums ${
                            selected ? 'text-[#D94E2A]' : 'text-[#A19E97]'
                          }`}
                        >
                          {part.number}
                        </span>
                        <span className="font-display text-2xl font-semibold text-[#F3F1EC]">
                          {part.name}
                        </span>
                      </div>
                      <p className="text-xs text-[#A19E97] leading-relaxed pl-7">
                        {part.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — INSIDE THE WORKSHOP COLLAGE */}
      <section className="bg-[#0B0B0A] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                Real Tools · Real Machines · Real Work
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#F3F1EC]">
                Inside the Workshop
              </h2>
            </div>
            <Link
              to="/workshop"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Workshop &amp; Gallery</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </SectionReveal>

          {/* Editorial Photo Collage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 overflow-hidden bg-[#131311] border border-[#2B2B27] group">
              <SafeImage
                src={MEDIA.tigFabrication}
                alt="TIG welding a tubular steel motorcycle chassis on a workshop alignment jig"
                className="w-full h-full min-h-[300px] aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="overflow-hidden bg-[#131311] border border-[#2B2B27] group">
                <SafeImage
                  src={MEDIA.engineRebuild}
                  alt="Mechanic assembling motorcycle cylinder head valves on steel workbench"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="overflow-hidden bg-[#131311] border border-[#2B2B27] group">
                <SafeImage
                  src={MEDIA.detailExhaust}
                  alt="Macro detail of stainless TIG exhaust welds, chain, sprocket, and drilled brake rotor"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — 5-STEP PROCESS (HORIZONTAL ON DESKTOP, VERTICAL ON MOBILE) */}
      <section className="bg-[#131311] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                How We Work
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#F3F1EC]">
                From Inspection to Road Test
              </h2>
            </div>
            <Link
              to="/process"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Detailed Process</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </SectionReveal>

          <ol className="grid grid-cols-1 lg:grid-cols-5 border-t border-[#2B2B27]">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.number}
                className="py-8 lg:py-10 lg:pr-6 border-b lg:border-b-0 lg:border-r last:lg:border-r-0 border-[#2B2B27] lg:pl-6 first:lg:pl-0"
              >
                <SectionReveal delay={idx * 0.05} className="space-y-4">
                  <span className="font-mono text-xs tracking-[0.18em] text-[#D94E2A] tabular-nums block">
                    {step.number} — {step.title.toUpperCase()}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-[#F3F1EC]">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-[#F3F1EC]/90">{step.shortLine}</p>
                  <p className="text-xs text-[#A19E97] leading-relaxed">
                    {step.description}
                  </p>
                </SectionReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — INTERACTIVE BEFORE / AFTER RESTORATION */}
      <section className="bg-[#0B0B0A] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                Before &amp; After
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#F3F1EC]">
                Old Machines Brought Back
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-[#A19E97] leading-relaxed">
                Drag across the frame to inspect how a worn, oxidized motorcycle is stripped,
                mechanically restored, and rebuilt to clean showroom standards.
              </p>
            </div>
          </SectionReveal>

          <BeforeAfterSlider
            beforeImage={MEDIA.beforeClassic}
            afterImage={MEDIA.afterClassic}
            beforeAlt="Old neglected vintage motorcycle before restoration at Hariom Moto Works"
            afterAlt="Restored obsidian classic motorcycle with polished aluminum engine after rebuild"
            beforeLabel="BEFORE — OLD MOTORCYCLE"
            afterLabel="AFTER — RESTORED MACHINE"
          />
        </div>
      </section>

      {/* 08 — SELECTED CUSTOM BUILDS / PROJECTS (Editorial Magazine Spread on Warm Paper) */}
      <section className="bg-[#F3F1EC] text-[#111110] border-b border-[#DAD5CA]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#111110]/15">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#B83A1A]">
                Custom Builds &amp; Restorations
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#111110]">
                Selected Projects
              </h2>
            </div>
            <Link
              to="/builds"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111110] hover:text-[#B83A1A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </SectionReveal>

          <div className="divide-y divide-[#111110]/15">
            {PROJECTS.map((project, index) => {
              const reversed = index % 2 === 1;
              const isPortrait = project.aspectPreference === 'portrait';
              return (
                <article
                  key={project.id}
                  className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div
                    className={`${
                      isPortrait ? 'lg:col-span-6' : 'lg:col-span-7'
                    } ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Link
                      to={`/builds/${project.slug}`}
                      className="group block overflow-hidden bg-[#131311]"
                    >
                      <SafeImage
                        src={project.finalImage}
                        alt={`${project.title} — ${project.year} ${project.brand} ${project.model}`}
                        className={`w-full ${
                          isPortrait ? 'aspect-[4/5]' : 'aspect-[4/3]'
                        } object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                      />
                    </Link>
                  </div>

                  <div
                    className={`${
                      isPortrait ? 'lg:col-span-6' : 'lg:col-span-5'
                    } ${reversed ? 'lg:order-1' : 'lg:order-2'} space-y-5`}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em]">
                      <span className="text-[#B83A1A] font-medium">PROJECT {project.number}</span>
                      <span aria-hidden="true" className="text-[#111110]/30">·</span>
                      <span className="text-[#56534C]">
                        {project.brand} {project.model} · {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] text-[#111110]">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#56534C]">
                      {project.type} · {project.duration}
                    </p>

                    <p className="text-base text-[#36342F] leading-relaxed max-w-md">
                      {project.shortDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/builds/${project.slug}`}
                        className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#111110] border-b border-[#111110] pb-1.5 hover:text-[#B83A1A] hover:border-[#B83A1A] transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — TRUST SECTION (WHY HARIOM MOTO WORKS) */}
      <section className="bg-[#0B0B0A] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="max-w-3xl space-y-3 mb-14">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Why Hariom Moto Works
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold leading-[0.95] text-[#F3F1EC]">
              Real Knowledge. Genuine Parts. Hands-On Work.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-[#2B2B27] pt-6 space-y-3">
                <span className="font-mono text-xs text-[#D94E2A] tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="font-display text-3xl font-bold text-[#F3F1EC]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A19E97] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — EDITORIAL ABOUT SECTION (MORE THAN A PARTS SHOP.) */}
      <section className="bg-[#131311]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 overflow-hidden bg-[#0B0B0A] border border-[#2B2B27]">
              <SafeImage
                src={MEDIA.scramblerCustom}
                alt="Custom motorcycle inside the Hariom Moto Works Ankleshwar workshop"
                className="w-full aspect-[4/3] object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                About {SITE_CONFIG.shortBrand}
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.94] text-[#F3F1EC]">
                More than a parts shop.
              </h2>
              <p className="text-lg text-[#F3F1EC]/90 leading-relaxed">
                Hariom Moto Works brings together motorcycle spare parts, mechanical repair, and
                hands-on workshop craftsmanship under one roof in Ankleshwar, Gujarat.
              </p>
              <p className="text-base text-[#A19E97] leading-relaxed">
                From daily riders needing trustworthy servicing and genuine replacement components to
                enthusiasts restoring vintage classics or building custom machines, every motorcycle
                is treated with patience and practical engineering respect.
              </p>

              <div className="pt-4 border-t border-[#2B2B27] space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A19E97]">
                  Classic &amp; Modern Marques
                </p>
                <p className="text-sm text-[#F3F1EC]/80 leading-relaxed">
                  {MOTORCYCLE_BRANDS.join(' · ')}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors"
                >
                  <span>Read Our Story</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — DRAMATIC FINAL CTA */}
      <CustomerCTA />
    </div>
  );
}
