import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MEDIA, SITE_CONFIG } from '../data/siteConfig';
import { buildWhatsAppEnquiryUrl } from '../utils/enquiry';
import { Link } from './RouterContext';
import { SafeImage } from './SafeImage';
import { SectionReveal } from './SectionReveal';

interface CustomerCTAProps {
  headline?: string;
  headlineSecondLine?: string;
  subheadline?: string;
  backgroundImage?: string;
}

export function CustomerCTA({
  headline = 'Got a bike to fix,',
  headlineSecondLine = 'build or restore?',
  subheadline = 'Talk to Hariom Moto Works about your motorcycle — genuine parts, mechanical repair, full restoration, or a custom build.',
  backgroundImage = MEDIA.cafeTracker,
}: CustomerCTAProps) {
  const whatsappHref = buildWhatsAppEnquiryUrl([
    `Hello ${SITE_CONFIG.shortBrand},`,
    'I would like to talk about parts, repair, restoration, or a custom build for my motorcycle.',
  ]);

  return (
    <section className="relative overflow-hidden border-t border-[#2B2B27] bg-[#0B0B0A]">
      <div className="absolute inset-0">
        <SafeImage
          src={backgroundImage}
          alt="Custom motorcycle inside the Hariom Moto Works workshop"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A] via-[#0B0B0A]/85 to-[#0B0B0A]/65"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              {SITE_CONFIG.brandName} · {SITE_CONFIG.location.full}
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-[78px] font-bold leading-[0.94] tracking-[0.01em] text-[#F3F1EC]">
              {headline}
              <span className="block text-[#F3F1EC]/85 mt-1">{headlineSecondLine}</span>
            </h2>
            <p className="text-base text-[#A19E97] max-w-xl pt-2 leading-relaxed">
              {subheadline}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/enquire"
              className="group inline-flex items-center justify-between gap-4 h-14 px-7 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
            >
              <span>Start A Project</span>
              <ArrowRight
                className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-4 h-14 px-7 bg-[#0B0B0A]/75 border border-[#F3F1EC]/30 text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#F3F1EC] transition-colors text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight
                  className="w-4 h-4 shrink-0 text-[#A19E97] group-hover:text-[#D94E2A] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-4 h-12 px-7 border border-[#2B2B27] bg-[#131311]/90 text-[#A19E97] hover:border-[#D94E2A] hover:text-[#F3F1EC] transition-colors text-xs font-mono uppercase tracking-[0.14em] whitespace-nowrap"
              >
                <span>WhatsApp · {SITE_CONFIG.contact.phoneDisplay}</span>
                <MessageCircle className="w-4 h-4 shrink-0 text-[#D94E2A]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
