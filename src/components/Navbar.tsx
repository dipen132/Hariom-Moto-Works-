import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../data/siteConfig';
import { Link, useRouter } from './RouterContext';

export function Navbar() {
  const { currentPath } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const isHeroOverlayPage =
    currentPath === '/' || currentPath.startsWith('/builds/');

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled || !isHeroOverlayPage
            ? 'bg-[#0B0B0A]/95 backdrop-blur-md border-b border-[#2B2B27]'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-[74px] flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <Link
            to="/"
            className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold tracking-[0.12em] uppercase text-[#F3F1EC] hover:text-[#D94E2A] transition-colors whitespace-nowrap shrink-0"
          >
            {SITE_CONFIG.brandName}
          </Link>

          {/* Zone 2: Minimal Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.12em]"
          >
            {NAV_ITEMS.map((item) => {
              const active =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath === item.path ||
                    currentPath.startsWith(`${item.path}/`) ||
                    (item.path === '/workshop' &&
                      (currentPath === '/gallery' || currentPath === '/process'));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-[#F3F1EC]'
                      : scrolled || !isHeroOverlayPage
                        ? 'text-[#A19E97] hover:text-[#F3F1EC]'
                        : 'text-[#F3F1EC]/85 hover:text-[#F3F1EC]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#D94E2A] transition-transform duration-200 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 h-10 text-xs font-semibold tracking-[0.14em] uppercase bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors whitespace-nowrap shrink-0"
            >
              Get In Touch
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-drawer"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F3F1EC] hover:text-[#D94E2A] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-[#0B0B0A] text-[#F3F1EC] flex flex-col justify-between px-6 py-5 overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-[#2B2B27] pb-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-xl font-bold tracking-[0.12em] uppercase text-[#F3F1EC]"
            >
              {SITE_CONFIG.brandName}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 text-[#F3F1EC] hover:text-[#D94E2A] cursor-pointer"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="my-6 flex flex-col divide-y divide-[#2B2B27]">
            {NAV_ITEMS.map((item, idx) => {
              const active =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath === item.path ||
                    currentPath.startsWith(`${item.path}/`) ||
                    (item.path === '/workshop' &&
                      (currentPath === '/gallery' || currentPath === '/process'));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 flex items-baseline justify-between group"
                >
                  <span
                    className={`font-display text-4xl font-semibold tracking-[0.02em] transition-colors ${
                      active ? 'text-[#D94E2A]' : 'text-[#F3F1EC] group-hover:text-[#D94E2A]'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#A19E97] tabular-nums">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-4 border-t border-[#2B2B27]">
            <div className="grid grid-cols-1 gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#D94E2A] text-[#F3F1EC] font-semibold text-xs uppercase tracking-[0.14em] hover:bg-[#EA5E38] transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/enquire"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#2B2B27] text-[#F3F1EC] font-semibold text-xs uppercase tracking-[0.14em] hover:border-[#D94E2A] transition-colors"
              >
                <span>Start A Project</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#A19E97] pt-1">
              <span>{SITE_CONFIG.location.full}</span>
              <a
                href={`tel:+${SITE_CONFIG.contact.phoneE164}`}
                className="font-mono text-[#F3F1EC] hover:text-[#D94E2A]"
              >
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
