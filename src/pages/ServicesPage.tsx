import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { MOTORCYCLE_BRANDS } from '../data/siteConfig';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { CustomerCTA } from '../components/CustomerCTA';

export function ServicesPage() {
  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC] pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 border-b border-[#2B2B27]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Workshop Capabilities
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
              Workshop Services
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#A19E97] leading-relaxed">
              Mechanical repairs, periodic servicing, genuine spare parts, classic restoration,
              metalwork fabrication, and custom builds under one roof at Hariom Moto Works.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Service Spreads */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 divide-y divide-[#2B2B27]">
        {SERVICES.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={service.id}
              id={service.id}
              className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              <div
                className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="overflow-hidden bg-[#131311] border border-[#2B2B27]">
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full aspect-[4/3] object-cover object-center"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-6xl font-bold text-[#D94E2A] tabular-nums leading-none">
                    {service.number}
                  </span>
                  <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#F3F1EC] leading-none">
                    {service.name}
                  </h2>
                </div>

                <p className="text-lg text-[#F3F1EC] font-medium leading-relaxed">
                  {service.tagline}
                </p>

                <p className="text-base text-[#A19E97] leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="pt-2 space-y-2.5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                    Scope of Work
                  </p>
                  <ul className="space-y-2 text-sm text-[#F3F1EC]/85">
                    {service.deliverables.map((line) => (
                      <li key={line} className="flex items-baseline gap-3">
                        <span aria-hidden="true" className="font-mono text-[#D94E2A]">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs font-mono text-[#A19E97] pt-1">
                  Ideal for: {service.idealFor}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={
                      service.id === 'parts'
                        ? '/parts'
                        : `/contact?service=${encodeURIComponent(service.name)}`
                    }
                    className="group inline-flex items-center gap-3 h-12 px-6 border border-[#2B2B27] text-xs font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#D94E2A] transition-colors"
                  >
                    <span>
                      {service.id === 'parts'
                        ? 'Browse Parts Categories'
                        : `Enquire About ${service.name}`}
                    </span>
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
      </section>

      {/* Marques Strip */}
      <section className="bg-[#131311] border-t border-[#2B2B27]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
              All Major Brands Welcome
            </p>
            <p className="text-sm text-[#F3F1EC]/85 flex flex-wrap gap-x-3 gap-y-2">
              {MOTORCYCLE_BRANDS.map((brand, idx) => (
                <React.Fragment key={brand}>
                  <span>{brand}</span>
                  {idx < MOTORCYCLE_BRANDS.length - 1 && (
                    <span aria-hidden="true" className="text-[#2B2B27]">·</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </section>

      <CustomerCTA />
    </div>
  );
}
