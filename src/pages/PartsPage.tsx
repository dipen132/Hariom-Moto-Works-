import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PARTS_CATEGORIES } from '../data/parts';
import { MOTORCYCLE_BRANDS, SITE_CONFIG } from '../data/siteConfig';
import { buildWhatsAppEnquiryUrl } from '../utils/enquiry';
import { Link } from '../components/RouterContext';
import { SafeImage } from '../components/SafeImage';
import { CustomerCTA } from '../components/CustomerCTA';

export function PartsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Engine Parts']);
  const [bikeBrand, setBikeBrand] = useState<string>('');
  const [bikeModel, setBikeModel] = useState<string>('');

  const toggleCategory = (name: string) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const partsWhatsAppHref = buildWhatsAppEnquiryUrl([
    `Hello ${SITE_CONFIG.shortBrand},`,
    'I would like to check spare parts availability:',
    selectedCategories.length > 0
      ? `Categories: ${selectedCategories.join(', ')}`
      : 'Category: General Motorcycle Spare Parts',
    bikeBrand || bikeModel ? `Motorcycle: ${[bikeBrand, bikeModel].filter(Boolean).join(' ')}` : '',
  ]);

  return (
    <div className="bg-[#0B0B0A] text-[#F3F1EC] pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 border-b border-[#2B2B27]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Parts Stockist &amp; Counter Supply
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
              Motorcycle Parts
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#A19E97] leading-relaxed">
              Quality motorcycle spare parts for everyday maintenance, mechanical repairs, classic
              restorations, and custom builds — supplied with direct workshop fitment knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 10-Category Stockist Directory */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Categories List */}
          <div className="lg:col-span-8 divide-y divide-[#2B2B27] border-y border-[#2B2B27]">
            {PARTS_CATEGORIES.map((part) => {
              const selected = selectedCategories.includes(part.name);
              return (
                <article
                  key={part.id}
                  className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                >
                  <div className="sm:col-span-4 overflow-hidden bg-[#131311] border border-[#2B2B27]">
                    <SafeImage
                      src={part.image}
                      alt={part.imageAlt}
                      className="w-full aspect-[4/3] object-cover object-center"
                    />
                  </div>
                  <div className="sm:col-span-8 space-y-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#D94E2A] tabular-nums">
                          {part.number}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3F1EC]">
                          {part.name}
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleCategory(part.name)}
                        aria-pressed={selected}
                        className={`px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.14em] border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          selected
                            ? 'bg-[#D94E2A] border-[#D94E2A] text-[#F3F1EC]'
                            : 'border-[#2B2B27] text-[#A19E97] hover:border-[#D94E2A] hover:text-[#F3F1EC]'
                        }`}
                      >
                        {selected ? 'In Enquiry List' : 'Add To List'}
                      </button>
                    </div>
                    <p className="text-sm text-[#A19E97] leading-relaxed">{part.summary}</p>
                    <p className="font-mono text-xs text-[#F3F1EC]/75">
                      {part.examples.join(' · ')}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Sticky Parts Availability Helper */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-[#131311] border border-[#2B2B27] p-6 sm:p-8 space-y-6">
            <div className="space-y-2 pb-4 border-b border-[#2B2B27]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                Parts Counter Desk
              </p>
              <h2 className="font-display text-3xl font-bold text-[#F3F1EC]">
                Check Part Availability
              </h2>
              <p className="text-sm text-[#A19E97] leading-relaxed">
                Select categories from the list, add your bike details, and send your parts enquiry
                directly to our Ankleshwar counter.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#A19E97]">
                  Selected Categories ({selectedCategories.length})
                </p>
                <p className="mt-1.5 text-sm text-[#F3F1EC] leading-relaxed" data-testid="selected-parts-summary">
                  {selectedCategories.length > 0
                    ? selectedCategories.join(' · ')
                    : 'No category selected yet'}
                </p>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="parts-brand"
                  className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#A19E97]"
                >
                  Motorcycle Brand
                </label>
                <select
                  id="parts-brand"
                  value={bikeBrand}
                  onChange={(e) => setBikeBrand(e.target.value)}
                  className="w-full bg-[#0B0B0A] border border-[#2B2B27] px-4 py-3 text-sm text-[#F3F1EC] focus:outline-none focus:border-[#D94E2A]"
                >
                  <option value="">Any / Select Brand</option>
                  {MOTORCYCLE_BRANDS.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="parts-model"
                  className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#A19E97]"
                >
                  Model &amp; Year (Optional)
                </label>
                <input
                  id="parts-model"
                  type="text"
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                  placeholder="e.g. Classic 350 2016, Apache, RX100"
                  className="w-full bg-[#0B0B0A] border border-[#2B2B27] px-4 py-3 text-sm text-[#F3F1EC] placeholder:text-[#A19E97]/50 focus:outline-none focus:border-[#D94E2A]"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={partsWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-3 h-12 px-5 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
              >
                <span>WhatsApp Parts Desk</span>
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <Link
                to="/contact?service=Parts"
                className="group w-full inline-flex items-center justify-between gap-3 h-12 px-5 border border-[#2B2B27] text-[#F3F1EC] hover:border-[#D94E2A] transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
              >
                <span>Enquire About Parts</span>
                <ArrowRight
                  className="w-4 h-4 shrink-0 text-[#A19E97] group-hover:text-[#D94E2A] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CustomerCTA
        headline="Need parts fitted"
        headlineSecondLine="by mechanics who know them?"
        subheadline="Order genuine parts and book workshop installation together at Hariom Moto Works."
      />
    </div>
  );
}
