import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Upload, X } from 'lucide-react';
import { MOTORCYCLE_BRANDS, SITE_CONFIG } from '../data/siteConfig';
import {
  buildWhatsAppEnquiryUrl,
  ProjectEnquiryInput,
  validateProjectStep,
  ValidationErrors,
} from '../utils/enquiry';
import { Link } from '../components/RouterContext';

const CONDITIONS = [
  'Running — Daily / Regular Rider',
  'Running — Needs Mechanical Attention',
  'Parked / Non-Running Classic',
  'Incomplete / Barn-Find Project',
] as const;

const BUILD_SCOPES = [
  'Restoration',
  'Customization',
  'Performance',
  'Fabrication',
  'Complete Rebuild',
  'Servicing & Detailing',
] as const;

interface UploadedPhoto {
  name: string;
  previewUrl: string;
}

export function EnquirePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<ProjectEnquiryInput>({
    brand: '',
    model: '',
    year: '',
    condition: '',
    scopes: [],
    description: '',
    name: '',
    phone: '',
    email: '',
  });
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [errors, setErrors] = useState<ValidationErrors<ProjectEnquiryInput>>({});
  const [submitted, setSubmitted] = useState<{
    referenceId: string;
    whatsappUrl: string;
  } | null>(null);

  useEffect(() => {
    return () => {
      photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    };
  }, [photos]);

  const updateField = <K extends keyof ProjectEnquiryInput>(
    field: K,
    value: ProjectEnquiryInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleScope = (scope: string) => {
    setForm((prev) => {
      const exists = prev.scopes.includes(scope);
      const nextScopes = exists
        ? prev.scopes.filter((s) => s !== scope)
        : [...prev.scopes, scope];
      return { ...prev, scopes: nextScopes };
    });
    if (errors.scopes) {
      setErrors((prev) => ({ ...prev, scopes: undefined }));
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

  const goNext = () => {
    const stepErrors = validateProjectStep(step, form);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (step < 4) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const stepErrors = validateProjectStep(4, form);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    const referenceId = `HOB-${String(Date.now()).slice(-5)}`;
    const whatsappUrl = buildWhatsAppEnquiryUrl([
      `Hariom Moto Works Project Brief (${referenceId})`,
      `Owner: ${form.name} (${form.phone})`,
      `Email: ${form.email}`,
      `Motorcycle: ${form.year} ${form.brand} ${form.model}`,
      `Current Condition: ${form.condition}`,
      `Direction: ${form.scopes.join(', ')}`,
      `Vision: ${form.description}`,
      photos.length > 0 ? `Photos prepared: ${photos.length}` : '',
    ]);
    setSubmitted({ referenceId, whatsappUrl });
  };

  return (
    <div className="bg-[#0A0A09] text-[#F2EFE8] pt-24 lg:pt-32 pb-24">
      <section className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="space-y-4 pb-12 border-b border-[#2A2926]">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D94E2A]">
            Start Your Build · {SITE_CONFIG.location.full}
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-[88px] font-bold leading-[0.9] text-[#F3F1EC]">
            Tell us about your machine.
          </h1>
          <p className="text-base text-[#9B978E] max-w-2xl leading-relaxed">
            Whether it has been standing under a cover for years or you are planning a ground-up
            custom build, share the essentials below so our builders can review your motorcycle.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-12 bg-[#141412] border border-[#2A2926] p-8 sm:p-12 space-y-8"
          >
            <div className="flex items-center gap-3 text-[#D94E2A]">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                Build Brief Logged · {submitted.referenceId}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F2EFE8]">
                READY FOR WORKSHOP REVIEW.
              </h2>
              <p className="text-base text-[#9B978E] max-w-2xl leading-relaxed">
                Thank you, {form.name}. Your brief for the{' '}
                <strong className="text-[#F2EFE8]">
                  {form.year} {form.brand} {form.model}
                </strong>{' '}
                is complete. Send it directly to our WhatsApp workshop desk to share your photos and
                book an inspection slot in Ankleshwar.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2A2926] text-sm">
              <div>
                <dt className="font-mono text-xs text-[#9B978E]">Motorcycle</dt>
                <dd className="text-[#F2EFE8] mt-1">
                  {form.year} {form.brand} {form.model}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-[#9B978E]">Condition</dt>
                <dd className="text-[#F2EFE8] mt-1">{form.condition}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-[#9B978E]">Requested Scope</dt>
                <dd className="text-[#D94E2A] mt-1">{form.scopes.join(' · ')}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={submitted.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#F2EFE8] text-[#0A0A09] hover:bg-[#D94E2A] hover:text-[#F3F1EC] transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Send Brief via WhatsApp</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
                  `Project Brief (${submitted.referenceId}) — ${form.year} ${form.brand} ${form.model}`
                )}&body=${encodeURIComponent(
                  `Owner: ${form.name} (${form.phone})\nEmail: ${form.email}\nMotorcycle: ${form.year} ${form.brand} ${form.model}\nCondition: ${form.condition}\nDirection: ${form.scopes.join(', ')}\n\nVision:\n${form.description}`
                )}`}
                className="px-7 py-4 border border-[#2A2926] text-xs font-semibold uppercase tracking-[0.14em] text-[#F2EFE8] hover:border-[#D94E2A] transition-colors"
              >
                Send via Email
              </a>
              <Link
                to="/builds"
                className="px-7 py-4 border border-[#2A2926] text-xs font-semibold uppercase tracking-[0.14em] text-[#F2EFE8] hover:border-[#D94E2A] transition-colors"
              >
                Explore Selected Builds
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-12 space-y-10">
            {/* Step Progress Bar */}
            <ol
              aria-label="Project enquiry steps"
              className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#2A2926]"
            >
              {[
                { num: 1, label: 'The Machine' },
                { num: 2, label: 'Direction' },
                { num: 3, label: 'Vision & Photos' },
                { num: 4, label: 'Your Details' },
              ].map((item) => {
                const isCurrent = step === item.num;
                const isDone = step > item.num;
                return (
                  <li
                    key={item.num}
                    className={`pb-4 border-b-2 ${
                      isCurrent
                        ? 'border-[#D94E2A] text-[#F2EFE8]'
                        : isDone
                          ? 'border-[#F2EFE8]/40 text-[#F2EFE8]/80'
                          : 'border-transparent text-[#9B978E]'
                    }`}
                  >
                    <span className="font-mono text-xs tabular-nums text-[#D94E2A] block">
                      0{item.num}
                    </span>
                    <span className="font-display text-2xl uppercase">{item.label}</span>
                  </li>
                );
              })}
            </ol>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#141412] border border-[#2A2926] p-6 sm:p-10 space-y-8"
            >
              {/* STEP 1: MACHINE DETAILS */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#F2EFE8]">
                    01. What motorcycle do you own?
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="enq-brand" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Manufacturer *
                      </label>
                      <select
                        id="enq-brand"
                        value={form.brand}
                        onChange={(e) => updateField('brand', e.target.value)}
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                      >
                        <option value="">Select brand</option>
                        {MOTORCYCLE_BRANDS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                      {errors.brand && <p className="text-xs text-[#E58D7A]">{errors.brand}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enq-model" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Model *
                      </label>
                      <input
                        id="enq-model"
                        type="text"
                        value={form.model}
                        onChange={(e) => updateField('model', e.target.value)}
                        placeholder="e.g. Classic 350, RX100, Bonneville"
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                      />
                      {errors.model && <p className="text-xs text-[#E58D7A]">{errors.model}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enq-year" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Year *
                      </label>
                      <input
                        id="enq-year"
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={form.year}
                        onChange={(e) => updateField('year', e.target.value)}
                        placeholder="e.g. 2008"
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm font-mono text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                      />
                      {errors.year && <p className="text-xs text-[#E58D7A]">{errors.year}</p>}
                    </div>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                      What condition is it currently in? *
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CONDITIONS.map((cond) => {
                        const selected = form.condition === cond;
                        return (
                          <button
                            key={cond}
                            type="button"
                            onClick={() => updateField('condition', cond)}
                            aria-pressed={selected}
                            className={`text-left px-5 py-4 border text-sm transition-colors cursor-pointer ${
                              selected
                                ? 'border-[#D94E2A] bg-[#0A0A09] text-[#F2EFE8]'
                                : 'border-[#2A2926] bg-[#0A0A09]/50 text-[#9B978E] hover:border-[#F2EFE8]/40 hover:text-[#F2EFE8]'
                            }`}
                          >
                            {cond}
                          </button>
                        );
                      })}
                    </div>
                    {errors.condition && (
                      <p className="text-xs text-[#E58D7A]">{errors.condition}</p>
                    )}
                  </fieldset>
                </div>
              )}

              {/* STEP 2: TRANSFORMATION SCOPE */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#F2EFE8]">
                      02. What would you like to change?
                    </h2>
                    <p className="text-sm text-[#9B978E]">
                      Select one or more build directions for your {form.year} {form.brand}{' '}
                      {form.model}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {BUILD_SCOPES.map((scope) => {
                      const active = form.scopes.includes(scope);
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => toggleScope(scope)}
                          aria-pressed={active}
                          className={`text-left px-5 py-5 border transition-colors cursor-pointer ${
                            active
                              ? 'border-[#D94E2A] bg-[#0A0A09] text-[#F2EFE8]'
                              : 'border-[#2A2926] bg-[#0A0A09]/50 text-[#9B978E] hover:border-[#F2EFE8]/40 hover:text-[#F2EFE8]'
                          }`}
                        >
                          <span className="font-display text-2xl uppercase block">{scope}</span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D94E2A] mt-1 block">
                            {active ? 'Selected' : 'Select'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.scopes && <p className="text-xs text-[#E58D7A]">{errors.scopes}</p>}
                </div>
              )}

              {/* STEP 3: VISION & PHOTOS */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#F2EFE8]">
                      03. Share your vision &amp; photos
                    </h2>
                    <p className="text-sm text-[#9B978E]">
                      Describe the look, feel, mechanical priorities, or inspirations you have in
                      mind.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enq-description"
                      className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]"
                    >
                      Project Notes *
                    </label>
                    <textarea
                      id="enq-description"
                      rows={5}
                      value={form.description}
                      onChange={(e) => updateField('description', e.target.value)}
                      placeholder="e.g. Keep original classic silhouette, full engine overhaul, matte obsidian paint, upgraded front braking..."
                      className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] placeholder:text-[#9B978E]/50 focus:outline-none focus:border-[#D94E2A]"
                    />
                    {errors.description && (
                      <p className="text-xs text-[#E58D7A]">{errors.description}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="enq-photos"
                      className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]"
                    >
                      Upload Current Motorcycle Photos (Optional)
                    </label>
                    <label
                      htmlFor="enq-photos"
                      className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-dashed border-[#2A2926] hover:border-[#D94E2A] bg-[#0A0A09] px-5 py-4 cursor-pointer transition-colors"
                    >
                      <span className="inline-flex items-center gap-3 text-sm text-[#9B978E]">
                        <Upload className="w-4 h-4 text-[#D94E2A]" aria-hidden="true" />
                        <span>Attach up to 6 photos of your bike</span>
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#F2EFE8]">
                        Choose Photos
                      </span>
                      <input
                        id="enq-photos"
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
                </div>
              )}

              {/* STEP 4: OWNER CONTACT DETAILS */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3F1EC]">
                      04. How can Hariom Moto Works reach you?
                    </h2>
                    <p className="text-sm text-[#9B978E]">
                      We review every build enquiry personally from our Ankleshwar workshop.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="enq-name" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Full Name *
                      </label>
                      <input
                        id="enq-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                      />
                      {errors.name && <p className="text-xs text-[#E58D7A]">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enq-phone" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="enq-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="10-digit number"
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm font-mono text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                      />
                      {errors.phone && <p className="text-xs text-[#E58D7A]">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enq-email" className="block font-mono text-xs uppercase tracking-[0.14em] text-[#9B978E]">
                        Email *
                      </label>
                      <input
                        id="enq-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-[#0A0A09] border border-[#2A2926] px-4 py-3 text-sm text-[#F2EFE8] focus:outline-none focus:border-[#D94E2A]"
                      />
                      {errors.email && <p className="text-xs text-[#E58D7A]">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="border-t border-[#2A2926] pt-5 text-xs font-mono text-[#9B978E] space-y-1">
                    <p>
                      Summary: {form.year} {form.brand} {form.model} · {form.condition}
                    </p>
                    <p className="text-[#D94E2A]">Scope: {form.scopes.join(', ')}</p>
                  </div>
                </div>
              )}

              {/* Step Controls */}
              <div className="pt-6 border-t border-[#2A2926] flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setErrors({});
                      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#2A2926] text-xs font-semibold uppercase tracking-[0.14em] text-[#F2EFE8] hover:border-[#D94E2A] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Back</span>
                  </button>
                ) : (
                  <Link
                    to="/contact"
                    className="text-xs font-mono uppercase tracking-[0.14em] text-[#9B978E] hover:text-[#F2EFE8]"
                  >
                    Standard Contact Form
                  </Link>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center gap-3 h-12 px-7 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em] cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 h-12 px-8 bg-[#D94E2A] text-[#F3F1EC] hover:bg-[#EA5E38] transition-colors text-xs font-semibold uppercase tracking-[0.14em] cursor-pointer"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
