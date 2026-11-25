import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { filterProjects } from '../utils/filters';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { CustomerCTA } from '../components/CustomerCTA';

export function BuildsPage() {
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');

  const buildTypes = useMemo(
    () => ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.type)))],
    []
  );
  const buildBrands = useMemo(
    () => ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.brand)))],
    []
  );

  const filtered = useMemo(
    () => filterProjects(PROJECTS, selectedType, selectedBrand),
    [selectedType, selectedBrand]
  );

  return (
    <div className="bg-[#0A0A09] text-[#F2EFE8] pt-24 lg:pt-32">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 border-b border-[#2A2926]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Build Archive
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold uppercase leading-[0.9] text-[#F2EFE8]">
              SELECTED BUILDS
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#9B978E] leading-relaxed">
              Every project below documents a complete mechanical and visual rebirth—from initial
              strip-down and fabrication through final reveal.
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div
            role="group"
            aria-label="Filter by build discipline"
            className="flex flex-wrap items-center gap-2"
          >
            {buildTypes.map((type) => {
              const active = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  aria-pressed={active}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap shrink-0 border ${
                    active
                      ? 'bg-[#F2EFE8] text-[#0A0A09] border-[#F2EFE8]'
                      : 'bg-transparent text-[#9B978E] border-[#2A2926] hover:border-[#D94E2A] hover:text-[#F2EFE8]'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="brand-filter"
              className="font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E] whitespace-nowrap"
            >
              Marque
            </label>
            <select
              id="brand-filter"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#141412] border border-[#2A2926] text-[#F2EFE8] text-xs font-mono uppercase tracking-[0.12em] px-4 py-2.5 focus:outline-none focus:border-[#D94E2A]"
            >
              {buildBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand === 'ALL' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Editorial Builds List */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
        {filtered.length === 0 ? (
          <div className="py-24 text-center space-y-5 border border-[#2A2926] bg-[#141412] px-6">
            <p className="font-display text-3xl uppercase text-[#F2EFE8]">
              No matching builds in this filter
            </p>
            <p className="text-sm text-[#9B978E]">
              Try resetting your filters or reach out to commission a build on your donor machine.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedType('ALL');
                setSelectedBrand('ALL');
              }}
              className="inline-flex items-center px-6 py-3 bg-[#F2EFE8] text-[#0A0A09] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#D94E2A] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#2A2926]">
            {filtered.map((project, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <article
                  key={project.id}
                  className="py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div
                    className={`lg:col-span-7 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Link
                      to={`/builds/${project.slug}`}
                      className="group block overflow-hidden bg-[#141412] border border-[#2A2926]"
                    >
                      <SafeImage
                        src={project.finalImage}
                        alt={`${project.title} — ${project.year} ${project.brand} ${project.model}`}
                        className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </Link>
                  </div>

                  <div
                    className={`lg:col-span-5 ${reversed ? 'lg:order-1' : 'lg:order-2'} space-y-5`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl font-bold text-[#D94E2A]/50 tabular-nums">
                        {project.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#9B978E]">
                        {project.brand} · {project.model} · {project.year}
                      </span>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.94] text-[#F2EFE8]">
                      {project.title}
                    </h2>

                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#D94E2A]">
                      {project.type} · {project.duration}
                    </p>

                    <p className="text-base text-[#9B978E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/builds/${project.slug}`}
                        className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#F2EFE8] border-b border-[#F2EFE8] pb-1.5 hover:text-[#D94E2A] hover:border-[#D94E2A] transition-colors"
                      >
                        <span>View Build</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <CustomerCTA />
    </div>
  );
}
