import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle, Upload, X } from 'lucide-react';
import { MOTORCYCLE_BRANDS, SITE_CONFIG } from '../data/siteConfig';
import { SERVICES } from '../data/services';
import {
  buildWhatsAppEnquiryUrl,
  ContactEnquiryInput,
  validateContactEnquiry,
  ValidationErrors,
} from '../utils/enquiry';
import { Link } from '../components/RouterContext';

interface ContactPageProps {
  preselectedService?: string;
}

interface UploadedPhoto {
  name: string;
  previewUrl: string;
}

export function ContactPage({ preselectedService }: ContactPageProps) {
  const [form, setForm] = useState<ContactEnquiryInput>({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    year: '',
    service: preselectedService || '',
    description: '',
  });
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [errors, setErrors] = useState<ValidationErrors<ContactEnquiryInput>>({});
  const [submittedRecord, setSubmittedRecord] = useState<{
    summary: ContactEnquiryInput;
    photoCount: number;
    whatsappUrl: string;
    referenceId: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    return () => {
      photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    };
  }, [photos]);

  const updateField = <K extends keyof ContactEnquiryInput>(
    field: K,
    value: ContactEnquiryInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []).slice(0, 6 - photos.length);
    const nextPhotos = files.map((file) => ({
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...nextPhotos]);
    event.target.value = '';
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const target = prev[index];
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validation = validateContactEnquiry(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const whatsappUrl = buildWhatsAppEnquiryUrl([
      'Hello Hariom Moto Works,',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Motorcycle: ${form.year} ${form.brand} ${form.model}`,
      `Service Required: ${form.service}`,
      `Notes: ${form.description}`,
      photos.length > 0 ? `(${photos.length} reference photos ready to share)` : '',
    ]);

    const referenceId = `HO-${String(Date.now()).slice(-5)}`;
    setSubmittedRecord({
      summary: { ...form },
      photoCount: photos.length,
      whatsappUrl,
      referenceId,
    });
  };

  const directWhatsAppHref = buildWhatsAppEnquiryUrl([
    'Hello Hariom Moto Works,',
    'I would like to enquire about motorcycle restoration or servicing in Ankleshwar.',
  ]);

  return (
    <div className="bg-[#0A0A09] text-[#F2EFE8] pt-24 lg:pt-32 pb-24">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 border-b border-[#2A2926]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
              Workshop Contact
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[92px] font-bold leading-[0.9] text-[#F3F1EC]">
              Contact Us
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#9B978E] leading-relaxed">
              Bring us a forgotten classic, book periodic mechanical servicing, or discuss a full
              custom commission in Ankleshwar, Gujarat.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 lg:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Direct Workshop Details */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#D94E2A]">
                Atelier Location
              </p>
              <p className="mt-2 font-display text-3xl uppercase text-[#F2EFE8]">
                {SITE_CONFIG.brandName}
              </p>
              <p className="mt-1 text-base text-[#9B978E]">{SITE_CONFIG.location.full}</p>
            </div>

            <div className="pt-6 border-t border-[#2A2926] space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9B978E]">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:+${SITE_CONFIG.contact.phoneE164}`}
                  className="mt-1 block font-mono text-lg text-[#F2EFE8] hover:text-[#D94E2A] transition-colors"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9B978E]">
                  Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="mt-1 block text-base text-[#F2EFE8] hover:text-[#D94E2A] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9B978E]">
                  Instagram
                </p>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-base text-[#F2EFE8] hover:text-[#D94E2A] transition-colors"
                >
                  <span>{SITE_CONFIG.contact.instagramHandle}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2A2926] space-y-4">
            <p className="text-sm text-[#9B978E] leading-relaxed">
              Prefer sending photos directly from your garage? Message us on WhatsApp and our team
              will respond after workshop hours.
            </p>
            <a
              href={directWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between gap-3 px-6 py-4 bg-[#141412] border border-[#D94E2A] text-xs font-semibold uppercase tracking-[0.14em] text-[#F2EFE8] hover:bg-[#D94E2A] hover:text-[#0A0A09] transition-colors"
            >
              <span>WhatsApp Hariom Moto Works</span>
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              to="/enquire"
              className="block text-xs font-mono uppercase tracking-[0.14em] text-[#9B978E] hover:text-[#F2EFE8] pt-2"
            >
              Planning a custom commission? Use the guided build brief →
            </Link>
          </div>
        </aside>

        {/* Right: Validated Contact / Service Enquiry Form */}
        <div className="lg:col-span-8 bg-[#141412] border border-[#2A2926] p-6 sm:p-10">
          {submittedRecord ? (
            <div className="space-y-6 py-6" role="status" aria-live="polite">
              <div className="flex items-center gap-3 text-[#D94E2A]">
                <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  Enquiry Prepared · Ref {submittedRecord.referenceId}
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
                YOUR WORKSHOP ENQUIRY IS READY.
              </h2>

              <p className="text-base text-[#9B978E] leading-relaxed max-w-2xl">
                Thank you, {submittedRecord.summary.name}. We have logged the brief for your{' '}
                <strong className="text-[#F2EFE8]">
                  {submittedRecord.summary.year} {submittedRecord.summary.brand}{' '}
                  {submittedRecord.summary.model}
                </strong>{' '}
                ({submittedRecord.summary.service}). For the fastest response from our Ankleshwar
                bay, forward this pre-filled summary directly on WhatsApp or email.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2A2926] text-sm">
                <div>
                  <dt className="font-mono text-xs text-[#9B978E]">Machine</dt>
                  <dd className="text-[#F2EFE8] mt-0.5">
                    {submittedRecord.summary.year} {submittedRecord.summary.brand}{' '}
                    {submittedRecord.summary.model}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-[#9B978E]">Service Required</dt>
                  <dd className="text-[#D94E2A] mt-0.5">{submittedRecord.summary.service}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-[#9B978E]">Contact</dt>
                  <dd className="text-[#F2EFE8] mt-0.5 font-mono">
                    {submittedRecord.summary.phone} · {submittedRecord.summary.email}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-[#9B978E]">Attached Photos</dt>
                  <dd className="text-[#F2EFE8] mt-0.5 tabular-nums">
                    {submittedRecord.photoCount} selected
                  </dd>
                </div>
              </dl>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={submittedRecord.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#F2EFE8] text-[#0A0A09] hover:bg-[#D94E2A] hover:text-[#F3F1EC] transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Send Summary via WhatsApp</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
                    `Workshop Enquiry (${submittedRecord.referenceId}) — ${submittedRecord.summary.year} ${submittedRecord.summary.brand} ${submittedRecord.summary.model}`
                  )}&body=${encodeURIComponent(
                    `Name: ${submittedRecord.summary.name}\nPhone: ${submittedRecord.summary.phone}\nEmail: ${submittedRecord.summary.email}\nMotorcycle: ${submittedRecord.summary.year} ${submittedRecord.summary.brand} ${submittedRecord.summary.model}\nService: ${submittedRecord.summary.service}\n\nNotes:\n${submittedRecord.summary.description}`
                  )}`}
                  className="inline-flex items-center gap-2 px-6 py-4 border border-[#2A2926] text-[#F2EFE8] hover:border-[#D94E2A] transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send via Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRecord(null);
                    setForm({
                      name: '',
                      phone: '',
                      email: '',
                      brand: '',
                      model: '',
                      year: '',
                      service: '',
                      description: '',
                    });
                    setPhotos([]);
                  }}
                  className="px-6 py-4 border border-[#2A2926] text-xs font-semibold uppercase tracking-[0.14em] text-[#F2EFE8] hover:border-[#D94E2A] transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-1 pb-4 border-b border-[#2A2926]">
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F2EFE8]">
                  SEND AN ENQUIRY
                </h2>
                <p className="text-sm text-[#9B978E]">
                  Tell us about your motorcycle and what you need done.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                  />
                  {errors.name && <p className="text-xs text-[#E58D7A]">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="e.g. 8200217135"
                    aria-invalid={Boolean(errors.phone)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm font-mono text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                  />
                  {errors.phone && <p className="text-xs text-[#E58D7A]">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                  />
                  {errors.email && <p className="text-xs text-[#E58D7A]">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Service Required *
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => updateField('service', e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                  >
                    <option value="">Select service</option>
                    {SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.name}
                      </option>
                    ))}
                    <option value="Complete Motorcycle Transformation">
                      Complete Motorcycle Transformation
                    </option>
                  </select>
                  {errors.service && <p className="text-xs text-[#E58D7A]">{errors.service}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-brand" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Motorcycle Brand *
                  </label>
                  <select
                    id="contact-brand"
                    value={form.brand}
                    onChange={(e) => updateField('brand', e.target.value)}
                    aria-invalid={Boolean(errors.brand)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                  >
                    <option value="">Select brand</option>
                    {MOTORCYCLE_BRANDS.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errors.brand && <p className="text-xs text-[#E58D7A]">{errors.brand}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-model" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Motorcycle Model *
                  </label>
                  <input
                    id="contact-model"
                    type="text"
                    value={form.model}
                    onChange={(e) => updateField('model', e.target.value)}
                    placeholder="e.g. Classic 350, RX100"
                    aria-invalid={Boolean(errors.model)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                  />
                  {errors.model && <p className="text-xs text-[#E58D7A]">{errors.model}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-year" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                    Motorcycle Year *
                  </label>
                  <input
                    id="contact-year"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={form.year}
                    onChange={(e) => updateField('year', e.target.value)}
                    placeholder="e.g. 2012"
                    aria-invalid={Boolean(errors.year)}
                    className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm font-mono text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                  />
                  {errors.year && <p className="text-xs text-[#E58D7A]">{errors.year}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-description" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                  Project Description *
                </label>
                <textarea
                  id="contact-description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="Describe the motorcycle's current condition, mechanical issues, and what you want to achieve..."
                  aria-invalid={Boolean(errors.description)}
                  className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                />
                {errors.description && (
                  <p className="text-xs text-[#E58D7A]">{errors.description}</p>
                )}
              </div>

              {/* Photo Upload */}
              <div className="space-y-3">
                <label
                  htmlFor="contact-photos"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]"
                >
                  Upload Motorcycle Photos (Optional, up to 6)
                </label>
                <label
                  htmlFor="contact-photos"
                  className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-dashed border-[#2A2926] hover:border-[#D94E2A] bg-[#0A0A09] px-5 py-4 cursor-pointer transition-colors"
                >
                  <span className="inline-flex items-center gap-3 text-sm text-[#9B978E]">
                    <Upload className="w-4 h-4 text-[#D94E2A]" aria-hidden="true" />
                    <span>Select photos of your bike (side profile, engine, rust areas)</span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#F2EFE8]">
                    Browse Files
                  </span>
                  <input
                    id="contact-photos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="sr-only"
                  />
                </label>

                {photos.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {photos.map((photo, idx) => (
                      <div key={photo.previewUrl} className="relative border border-[#2A2926]">
                        <img
                          src={photo.previewUrl}
                          alt={photo.name}
                          className="w-full aspect-square object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          aria-label={`Remove ${photo.name}`}
                          className="absolute top-1 right-1 w-6 h-6 bg-[#0A0A09]/90 text-[#F2EFE8] hover:text-[#D94E2A] flex items-center justify-center cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="h-12 px-8 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.16em] cursor-pointer"
                >
                  Send Enquiry
                </button>
                <p className="font-mono text-[11px] text-[#9B978E]">
                  Or call directly: {SITE_CONFIG.contact.phoneDisplay}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
