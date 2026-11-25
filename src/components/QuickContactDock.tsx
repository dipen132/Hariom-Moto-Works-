import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { buildWhatsAppEnquiryUrl } from '../utils/enquiry';

export function QuickContactDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const whatsappHref = buildWhatsAppEnquiryUrl([
    `Hello ${SITE_CONFIG.shortBrand},`,
    'I would like to enquire about parts, repair, restoration, or a custom build.',
  ]);

  return (
    <aside
      aria-label="Quick workshop actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 bg-[#131311]/95 backdrop-blur-md border border-[#2B2B27] p-1.5 shadow-2xl"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Hariom Moto Works"
        className="inline-flex items-center gap-2 h-10 px-3.5 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
      >
        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href={`tel:+${SITE_CONFIG.contact.phoneE164}`}
        aria-label={`Call ${SITE_CONFIG.contact.phoneDisplay}`}
        className="inline-flex items-center justify-center w-10 h-10 border border-[#2B2B27] bg-[#0B0B0A] text-[#F3F1EC] hover:border-[#D94E2A] hover:text-[#D94E2A] transition-colors"
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
        className="inline-flex items-center justify-center w-10 h-10 border border-[#2B2B27] bg-[#0B0B0A] text-[#A19E97] hover:border-[#D94E2A] hover:text-[#F3F1EC] transition-colors cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" aria-hidden="true" />
      </button>
    </aside>
  );
}
