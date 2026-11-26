import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../data/siteConfig';
import { Link } from './RouterContext';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0A] border-t border-[#2B2B27] text-[#F3F1EC]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2B2B27]">
          {/* Brand Signature */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              aria-label={`${SITE_CONFIG.brandName} Home`}
              className="inline-block border border-[#2B2B27] hover:border-[#D94E2A] transition-colors bg-[#0B0B0A] overflow-hidden"
            >
              <img
                src="/logos/hariom-moto-works-emblem.jpg"
                alt={`${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}`}
                className="w-60 sm:w-64 h-auto object-contain block"
              />
            </Link>
            <p className="text-sm text-[#A19E97] max-w-sm leading-relaxed">
              Motorcycle spare parts stockist, mechanical repair center, restoration workshop, and
              custom-build garage in {SITE_CONFIG.location.full}.
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-mono text-xs tracking-[0.18em] uppercase text-[#A19E97]">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#F3F1EC]/85 hover:text-[#D94E2A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/enquire"
                  className="text-[#D94E2A] hover:text-[#F3F1EC] transition-colors"
                >
                  Start A Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-xs tracking-[0.18em] uppercase text-[#A19E97]">
              Workshop Hours
            </h2>
            <dl className="space-y-3 text-sm">
              {SITE_CONFIG.hours.map((entry) => (
                <div key={entry.days}>
                  <dt className="text-xs text-[#A19E97]">{entry.days}</dt>
                  <dd className="text-[#F3F1EC] font-mono text-xs mt-1 tabular-nums">
                    {entry.time}
                  </dd>
                </div>
              ))}
              <div className="pt-2">
                <dt className="text-xs text-[#A19E97]">Location</dt>
                <dd className="text-[#F3F1EC] mt-0.5">{SITE_CONFIG.location.full}</dd>
              </div>
            </dl>
          </div>

          {/* Direct Workshop Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-xs tracking-[0.18em] uppercase text-[#A19E97]">
              Contact
            </h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs text-[#A19E97]">Phone / WhatsApp</dt>
                <dd className="mt-0.5 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:+${SITE_CONFIG.contact.phoneE164}`}
                    className="font-mono text-[#F3F1EC] hover:text-[#D94E2A] transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  <span aria-hidden="true" className="text-[#2B2B27]">·</span>
                  <a
                    href={SITE_CONFIG.contact.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D94E2A] hover:text-[#F3F1EC] transition-colors"
                  >
                    WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#A19E97]">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-[#F3F1EC] hover:text-[#D94E2A] transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#A19E97]">Instagram</dt>
                <dd className="mt-0.5">
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F3F1EC] hover:text-[#D94E2A] transition-colors"
                  >
                    {SITE_CONFIG.contact.instagramHandle}
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A19E97]">
          <p>© {year} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="font-mono tracking-[0.14em] uppercase">
            Real Machines · Real Work · Built To Ride
          </p>
        </div>
      </div>
    </footer>
  );
}
