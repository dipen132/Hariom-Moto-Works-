import React from 'react';
import {
  BRAND_STATS,
  MEDIA,
  MOTORCYCLE_BRANDS,
  SITE_CONFIG,
  TRUST_PILLARS,
} from '../data/siteConfig';
import { SafeImage } from '../components/SafeImage';
import { SectionReveal } from '../components/SectionReveal';
import { CustomerCTA } from '../components/CustomerCTA';

export function AboutPage() {
  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC] pt-24 lg:pt-32">
      {/* Page Hero */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7 space-y-4">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              About {SITE_CONFIG.shortBrand} · {SITE_CONFIG.location.full}
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[96px] font-bold leading-[0.9] text-[#F3F1EC]">
              More than a parts shop.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-[#A19E97] leading-relaxed">
              Hariom Moto Works brings together genuine motorcycle spare parts, mechanical repair,
              restoration, and custom fabrication under one roof.
            </p>
          </div>
        </div>

        <div className="mt-14 overflow-hidden bg-[#131311] border border-[#2B2B27]">
          <SafeImage
            src={MEDIA.heroMain}
            alt="Inside the Hariom Moto Works motorcycle workshop in Ankleshwar"
            loading="eager"
            className="w-full aspect-[16/9] max-h-[680px] object-cover object-center"
          />
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="bg-[#F3F1EC] text-[#111110] border-t border-[#DAD5CA]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#B83A1A]">
                Parts · Repair · Restoration · Builds
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-[0.94] text-[#111110]">
                Real machines. Real work. Built to ride.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#2C2A26] leading-relaxed">
              <p>
                Finding reliable motorcycle parts is only half the equation—knowing how every
                component fits, wears, and behaves under real riding conditions is what separates a
                spare-parts counter from a serious motorcycle workshop.
              </p>
              <p>
                At Hariom Moto Works in Ankleshwar, Gujarat, we stock dependable components across
                classic and modern motorcycles while running a dedicated repair, restoration, and
                custom-fabrication bay. Whether you need routine servicing, an honest mechanical
                diagnosis, or a complete custom build, your motorcycle receives patient, hands-on
                care.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-20 pt-14 border-t border-[#111110]/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {TRUST_PILLARS.map((item) => (
              <div key={item.number} className="space-y-3">
                <span className="font-mono text-xs text-[#B83A1A] tabular-nums">
                  {item.number}
                </span>
                <h3 className="font-display text-3xl font-bold text-[#111110]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#36342F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Workshop Environment */}
      <section className="bg-[#0B0B0A] border-t border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
          <SectionReveal className="max-w-3xl space-y-4 mb-14">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Inside The Workshop
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold leading-[0.94] text-[#F3F1EC]">
              Real tools. Real machines.
            </h2>
            <p className="text-base text-[#A19E97] leading-relaxed">
              Clean engine benches, a dedicated fabrication jig, organized spare parts, and
              calibrated hand tools—every corner of Hariom Moto Works is arranged for dependable
              mechanical work.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 space-y-3">
              <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
                <SafeImage
                  src={MEDIA.engineRebuild}
                  alt="Close-up of motorcycle engine cylinder head assembly on steel bench"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="font-mono text-xs text-[#A19E97]">
                Engine Bench — Valve seating, measured clearances, and torque discipline.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
                <SafeImage
                  src={MEDIA.tigFabrication}
                  alt="Custom motorcycle tubular frame TIG welding on workshop jig"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="font-mono text-xs text-[#A19E97]">
                Fabrication Bay — Frame repairs, TIG welding, and bespoke metal shaping.
              </p>
            </div>
          </div>

          {/* Supported Marques */}
          <div className="mt-20 pt-14 border-t border-[#2B2B27] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
                Machines We Work On
              </p>
              <h3 className="font-display text-4xl font-bold text-[#F3F1EC]">
                Classic &amp; Modern
              </h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-y-5 gap-x-6">
              {MOTORCYCLE_BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="border-t border-[#2B2B27] pt-3 text-sm font-medium text-[#F3F1EC]/90"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Editable Statistics */}
          <div className="mt-20 pt-14 border-t border-[#2B2B27] grid grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_STATS.map((stat) => (
              <div key={stat.id} className="space-y-1.5">
                <p className="font-display text-5xl sm:text-6xl font-bold text-[#F3F1EC] tabular-nums">
                  {stat.value}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                  {stat.label}
                </p>
                <p className="text-xs text-[#A19E97]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerCTA />
    </div>
  );
}
