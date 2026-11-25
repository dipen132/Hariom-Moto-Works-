import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { getAdjacentProjects } from '../utils/filters';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CustomerCTA } from '../components/CustomerCTA';

interface BuildDetailPageProps {
  slug: string;
}

const RESTORATION_KEYS: readonly { key: keyof (typeof PROJECTS)[number]['restoration']; label: string }[] = [
  { key: 'engine', label: 'Engine' },
  { key: 'frame', label: 'Frame' },
  { key: 'suspension', label: 'Suspension' },
  { key: 'wheels', label: 'Wheels' },
  { key: 'brakes', label: 'Brakes' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'paint', label: 'Paint' },
  { key: 'bodywork', label: 'Bodywork' },
];

export function BuildDetailPage({ slug }: BuildDetailPageProps) {
  const project = PROJECTS.find((item) => item.slug === slug) ?? PROJECTS[0];
  const { previous, next } = getAdjacentProjects(PROJECTS, project.slug);

  return (
    <div className="bg-[#0A0A09] text-[#F2EFE8]">
      {/* PROJECT HERO */}
      <section className="relative min-h-[82vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src={project.finalImage}
            alt={`${project.title} finished motorcycle`}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/50 to-[#0A0A09]/30"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-12 lg:pb-16 space-y-5">
          <Link
            to="/builds"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#F2EFE8]/80 hover:text-[#D94E2A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>All Builds</span>
          </Link>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
            Build {project.number} · {project.brand} {project.model} · {project.year}
          </p>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[104px] font-bold uppercase leading-[0.9] text-[#F2EFE8]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* PROJECT INTRODUCTION SPEC BAR */}
      <section className="border-y border-[#2A2926] bg-[#141412]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Bike</p>
            <p className="mt-1 text-sm font-medium text-[#F2EFE8]">{project.title}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Brand</p>
            <p className="mt-1 text-sm font-medium text-[#F2EFE8]">{project.brand}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Model</p>
            <p className="mt-1 text-sm font-medium text-[#F2EFE8]">{project.model}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Year</p>
            <p className="mt-1 text-sm font-mono tabular-nums text-[#F2EFE8]">{project.year}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Build Type</p>
            <p className="mt-1 text-sm font-medium text-[#D94E2A]">{project.type}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">Duration</p>
            <p className="mt-1 text-sm font-mono tabular-nums text-[#F2EFE8]">{project.duration}</p>
          </div>
        </div>
      </section>

      {/* THE STORY + BEFORE / AFTER */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">01 · Origin</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
              THE STORY
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-[#F2EFE8]/90 leading-relaxed">{project.story}</p>
          </div>
        </div>

        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.finalImage}
          beforeAlt={`Original condition before restoration of ${project.title}`}
          afterAlt={`Completed final build of ${project.title}`}
          beforeLabel="BEFORE — DONOR ARRIVAL"
          afterLabel={`AFTER — ${project.title.toUpperCase()}`}
        />
      </section>

      {/* THE STRIP-DOWN */}
      <section className="border-t border-[#2A2926] bg-[#141412]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
              02 · Teardown
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
              THE STRIP-DOWN
            </h2>
            <p className="text-base text-[#9B978E] leading-relaxed">{project.stripDown}</p>
          </div>
          <div className="lg:col-span-7 overflow-hidden bg-[#0A0A09] border border-[#2A2926]">
            <SafeImage
              src={project.processImages[0]?.src || project.beforeImage}
              alt={project.processImages[0]?.caption || 'Dismantling and inspection bench'}
              className="w-full aspect-[4/3] object-cover"
            />
            {project.processImages[0]?.caption && (
              <p className="px-5 py-3.5 font-mono text-xs text-[#9B978E] border-t border-[#2A2926]">
                {project.processImages[0].caption}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* THE RESTORATION — 8 MECHANICAL & COSMETIC DISCIPLINES */}
      <section className="bg-[#F2EFE8] text-[#121210] border-t border-[#D8D3C8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl space-y-3 mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B83A1A]">
              03 · Mechanical &amp; Cosmetic Specification
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold uppercase text-[#121210]">
              THE RESTORATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {RESTORATION_KEYS.map((item, idx) => (
              <div key={item.key} className="border-t border-[#121210]/20 pt-5 space-y-2.5">
                <p className="font-mono text-xs text-[#B83A1A] tabular-nums">
                  0{idx + 1} · {item.label.toUpperCase()}
                </p>
                <p className="text-sm text-[#2C2A26] leading-relaxed">
                  {project.restoration[item.key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICATION & FINISHING */}
      <section className="bg-[#0A0A09] border-t border-[#2A2926]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 overflow-hidden bg-[#141412] border border-[#2A2926]">
              <SafeImage
                src={project.processImages[1]?.src || project.finalImage}
                alt={project.processImages[1]?.caption || 'Custom metalwork fabrication'}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
                04 · Metalwork
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
                FABRICATION
              </h2>
              <p className="text-base text-[#9B978E] leading-relaxed">{project.fabrication}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-16 border-t border-[#2A2926]">
            <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
                05 · Surface Craft
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
                FINISHING
              </h2>
              <p className="text-base text-[#9B978E] leading-relaxed">{project.finishing}</p>
            </div>
            <div className="lg:col-span-6 overflow-hidden bg-[#141412] border border-[#2A2926] lg:order-2 order-1">
              <SafeImage
                src={project.processImages[2]?.src || project.finalImage}
                alt={project.processImages[2]?.caption || 'Finished detail and paintwork'}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL REVEAL */}
      <section className="bg-[#141412] border-t border-[#2A2926]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
                06 · Completed Machine
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold uppercase text-[#F2EFE8] mt-1">
                FINAL REVEAL
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9B978E]">
              {project.brand} {project.model} · {project.year}
            </p>
          </div>

          <div className="overflow-hidden border border-[#2A2926] bg-[#0A0A09]">
            <SafeImage
              src={project.finalImage}
              alt={`Final reveal of ${project.title}`}
              className="w-full aspect-[16/10] object-cover object-center"
            />
          </div>

          {/* Adjacent Project Navigation */}
          {(previous || next) && (
            <div className="pt-10 border-t border-[#2A2926] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              {previous ? (
                <Link
                  to={`/builds/${previous.slug}`}
                  className="group inline-flex items-center gap-4 text-left"
                >
                  <ArrowLeft
                    className="w-5 h-5 text-[#9B978E] group-hover:text-[#D94E2A] transition-colors"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">
                      Previous Build
                    </span>
                    <span className="font-display text-2xl uppercase text-[#F2EFE8] group-hover:text-[#D94E2A] transition-colors">
                      {previous.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next && (
                <Link
                  to={`/builds/${next.slug}`}
                  className="group inline-flex items-center gap-4 text-right sm:justify-end"
                >
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B978E]">
                      Next Build
                    </span>
                    <span className="font-display text-2xl uppercase text-[#F2EFE8] group-hover:text-[#D94E2A] transition-colors">
                      {next.title}
                    </span>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 text-[#9B978E] group-hover:text-[#D94E2A] transition-colors"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <CustomerCTA
        headline="Have a bike that needs"
        headlineSecondLine="restoration or a custom build?"
        subheadline="Talk to Hariom Moto Works about bringing your motorcycle back to life."
      />
    </div>
  );
}
