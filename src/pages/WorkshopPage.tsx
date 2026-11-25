import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MEDIA } from '../data/siteConfig';
import { PROCESS_STEPS } from '../data/process';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { GalleryPage } from './GalleryPage';

export function WorkshopPage() {
  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC] pt-24 lg:pt-32">
      {/* Workshop Hero Intro */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 border-b border-[#2B2B27]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Real Tools · Real Machines · Real Work
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
              Inside the Workshop
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#A19E97] leading-relaxed">
              Every engine bench, frame jig, and spare-parts bay at Hariom Moto Works is set up for
              methodical motorcycle repairs, restorations, and custom builds.
            </p>
          </div>
        </div>

        {/* Asymmetric Workshop Photo Collage */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 overflow-hidden bg-[#131311] border border-[#2B2B27]">
            <SafeImage
              src={MEDIA.heroMain}
              alt="Main workshop floor and workbench inside Hariom Moto Works"
              loading="eager"
              className="w-full h-full min-h-[300px] aspect-[16/10] object-cover"
            />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
              <SafeImage
                src={MEDIA.engineRebuild}
                alt="Engine valve assembly and calipers on the steel workbench"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
              <SafeImage
                src={MEDIA.tigFabrication}
                alt="TIG welding a steel motorcycle frame on a workshop jig"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage Workshop Process Strip */}
      <section className="bg-[#131311] border-b border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D94E2A]">
                Workshop Method
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F3F1EC]">
                Five Disciplined Stages
              </h2>
            </div>
            <Link
              to="/process"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap"
            >
              <span>Full Process Breakdown</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-5 border-t border-[#2B2B27]">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.number}
                className="py-6 lg:py-8 lg:px-5 first:lg:pl-0 last:lg:pr-0 border-b lg:border-b-0 lg:border-r last:lg:border-r-0 border-[#2B2B27] space-y-2"
              >
                <span className="font-mono text-xs text-[#D94E2A] tabular-nums">
                  {step.number} — {step.title.toUpperCase()}
                </span>
                <p className="text-sm text-[#F3F1EC] font-medium">{step.shortLine}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Full Interactive Gallery & Lightbox embedded seamlessly */}
      <div className="-mt-12">
        <GalleryPage embedded />
      </div>
    </div>
  );
}
