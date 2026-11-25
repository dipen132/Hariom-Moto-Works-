import React from 'react';
import { PROCESS_STEPS } from '../data/process';
import { SafeImage } from '../components/SafeImage';
import { SectionReveal } from '../components/SectionReveal';
import { CustomerCTA } from '../components/CustomerCTA';

export function ProcessPage() {
  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC] pt-24 lg:pt-32">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 border-b border-[#2B2B27]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              How Hariom Moto Works Operates
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
              The Workshop Process
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[#A19E97] leading-relaxed">
              Inspect → Diagnose → Plan → Build → Test. Every repair, restoration, and custom build
              follows five disciplined workshop stages.
            </p>
          </div>
        </div>

        {/* Jump Index */}
        <nav
          aria-label="Process stages"
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-[0.14em] text-[#A19E97]"
        >
          {PROCESS_STEPS.map((step) => (
            <a
              key={step.number}
              href={`#stage-${step.number}`}
              className="hover:text-[#D94E2A] transition-colors whitespace-nowrap"
            >
              {step.number} — {step.title}
            </a>
          ))}
        </nav>
      </section>

      {/* Vertical Editorial Timeline */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 divide-y divide-[#2B2B27]">
        {PROCESS_STEPS.map((step) => (
          <SectionReveal key={step.number}>
            <article
              id={`stage-${step.number}`}
              className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-2">
                <span className="font-display text-7xl lg:text-8xl font-bold text-[#D94E2A] tabular-nums leading-none">
                  {step.number}
                </span>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F3F1EC]">
                    {step.title}
                  </h2>
                  <p className="text-lg text-[#F3F1EC] font-medium">{step.shortLine}</p>
                </div>

                <p className="text-base text-[#A19E97] leading-relaxed">
                  {step.description}
                </p>

                <ul className="pt-2 space-y-2.5 text-sm text-[#F3F1EC]/85">
                  {step.checklist.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="font-mono text-[#D94E2A]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 overflow-hidden bg-[#131311] border border-[#2B2B27]">
                <SafeImage
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full aspect-[4/3] object-cover object-center"
                />
              </div>
            </article>
          </SectionReveal>
        ))}
      </section>

      <CustomerCTA />
    </div>
  );
}
