import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
} from '../data/gallery';
import { filterGalleryItems, stepCircularIndex } from '../utils/filters';
import { SafeImage } from '../components/SafeImage';
import { CustomerCTA } from '../components/CustomerCTA';

interface GalleryPageProps {
  embedded?: boolean;
}

export function GalleryPage({ embedded = false }: GalleryPageProps) {
  const [category, setCategory] = useState<GalleryCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () => filterGalleryItems(GALLERY_ITEMS, category),
    [category]
  );

  useEffect(() => {
    setLightboxIndex(null);
  }, [category]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : stepCircularIndex(prev, 1, visibleItems.length)
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : stepCircularIndex(prev, -1, visibleItems.length)
        );
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, visibleItems.length]);

  const activePhoto =
    lightboxIndex !== null ? visibleItems[lightboxIndex] ?? null : null;

  return (
    <div className={`bg-[#0B0B0A] text-[#F3F1EC] ${embedded ? 'pt-20' : 'pt-24 lg:pt-32'}`}>
      {/* Header & Category Filters */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-12 border-b border-[#2B2B27]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Workshop &amp; Build Archive
            </p>
            {embedded ? (
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-[0.92] text-[#F3F1EC]">
                Gallery
              </h2>
            ) : (
              <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
                Gallery
              </h1>
            )}
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#A19E97] leading-relaxed">
              Finished builds, mechanical teardowns, fabrication details, and parts close-ups from
              Hariom Moto Works. Select any frame to inspect full screen.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="flex flex-wrap items-center gap-2"
          >
            {GALLERY_CATEGORIES.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap shrink-0 border ${
                    active
                      ? 'bg-[#D94E2A] text-[#F3F1EC] border-[#D94E2A]'
                      : 'bg-transparent text-[#A19E97] border-[#2B2B27] hover:border-[#D94E2A] hover:text-[#F3F1EC]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <p className="font-mono text-xs text-[#A19E97] tabular-nums" data-testid="gallery-count">
            {visibleItems.length} {visibleItems.length === 1 ? 'Frame' : 'Frames'}
          </p>
        </div>
      </section>

      {/* Editorial Variable-Scale Masonry Grid */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto"
          data-testid="gallery-grid"
        >
          {visibleItems.map((item, idx) => {
            const spanClass =
              item.span === 'wide'
                ? 'md:col-span-8'
                : item.span === 'tall'
                  ? 'md:col-span-4 md:row-span-2'
                  : 'md:col-span-4';

            const aspectClass =
              item.span === 'wide'
                ? 'aspect-[16/10]'
                : item.span === 'tall'
                  ? 'aspect-[3/4] md:h-full'
                  : 'aspect-[4/3]';

            return (
              <figure key={item.id} className={`${spanClass} flex flex-col`}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Inspect ${item.title} (${item.category}) full screen`}
                  className="group relative w-full flex-1 overflow-hidden bg-[#131311] border border-[#2B2B27] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D94E2A]"
                >
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    className={`w-full ${aspectClass} object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#D94E2A]">
                        {item.category} · {item.motorcycle}
                      </span>
                      <span className="mt-1 block font-display text-2xl font-semibold text-[#F3F1EC] leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </figcaption>
                </button>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Full-Screen Accessible Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full-screen view: ${activePhoto.title}`}
          className="fixed inset-0 z-50 bg-[#0B0B0A]/96 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#A19E97] tabular-nums">
              <span>
                {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                {String(visibleItems.length).padStart(2, '0')}
              </span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span className="text-[#D94E2A]">{activePhoto.category}</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close full-screen viewer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2B2B27] text-xs font-mono uppercase tracking-[0.14em] text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#D94E2A] cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex-1 my-6 flex items-center justify-center min-h-0">
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === null ? null : stepCircularIndex(prev, -1, visibleItems.length)
                )
              }
              aria-label="Previous image"
              className="absolute left-0 sm:left-2 z-10 w-12 h-12 bg-[#0B0B0A]/90 border border-[#2B2B27] text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#D94E2A] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <SafeImage
              src={activePhoto.src}
              alt={activePhoto.alt}
              loading="eager"
              className="max-h-[72vh] max-w-full object-contain border border-[#2B2B27]"
            />

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === null ? null : stepCircularIndex(prev, 1, visibleItems.length)
                )
              }
              aria-label="Next image"
              className="absolute right-0 sm:right-2 z-10 w-12 h-12 bg-[#0B0B0A]/90 border border-[#2B2B27] text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#D94E2A] flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto w-full text-center space-y-1.5">
            <h2 className="font-display text-3xl font-bold text-[#F3F1EC]">
              {activePhoto.title}
            </h2>
            <p className="text-sm text-[#A19E97]">
              {activePhoto.motorcycle} — {activePhoto.caption}
            </p>
          </div>
        </div>
      )}

      <CustomerCTA />
    </div>
  );
}
