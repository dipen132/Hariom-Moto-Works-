import { SITE_CONFIG } from '../data/siteConfig';

export interface ContactEnquiryInput {
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  year: string;
  service: string;
  description: string;
}

export interface ProjectEnquiryInput {
  brand: string;
  model: string;
  year: string;
  condition: string;
  scopes: string[];
  description: string;
  name: string;
  phone: string;
  email: string;
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export function isValidMotorcycleYear(yearStr: string): boolean {
  const trimmed = yearStr.trim();
  if (!/^\d{4}$/.test(trimmed)) return false;
  const year = Number(trimmed);
  return year >= 1940 && year <= 2027;
}

export function validateContactEnquiry(
  input: ContactEnquiryInput
): ValidationErrors<ContactEnquiryInput> {
  const errors: ValidationErrors<ContactEnquiryInput> = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!isValidPhone(input.phone)) {
    errors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
  }
  if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!input.brand.trim()) {
    errors.brand = 'Select or enter your motorcycle brand.';
  }
  if (input.model.trim().length < 1) {
    errors.model = 'Enter your motorcycle model.';
  }
  if (!isValidMotorcycleYear(input.year)) {
    errors.year = 'Enter a 4-digit model year (e.g. 2012).';
  }
  if (!input.service.trim()) {
    errors.service = 'Choose the service you need.';
  }
  if (input.description.trim().length < 12) {
    errors.description = 'Tell us briefly about your motorcycle and goals (at least 12 characters).';
  }

  return errors;
}

export function validateProjectStep(
  step: 1 | 2 | 3 | 4,
  input: ProjectEnquiryInput
): ValidationErrors<ProjectEnquiryInput> {
  const errors: ValidationErrors<ProjectEnquiryInput> = {};

  if (step === 1) {
    if (!input.brand.trim()) errors.brand = 'Select or specify your motorcycle brand.';
    if (!input.model.trim()) errors.model = 'Enter the model name.';
    if (!isValidMotorcycleYear(input.year)) errors.year = 'Enter a 4-digit year between 1940 and 2027.';
    if (!input.condition.trim()) errors.condition = 'Select the current condition of the motorcycle.';
  }

  if (step === 2) {
    if (input.scopes.length === 0) {
      errors.scopes = 'Choose at least one direction for your build.';
    }
  }

  if (step === 3) {
    if (input.description.trim().length < 12) {
      errors.description = 'Share a few notes on what you want changed or restored (at least 12 characters).';
    }
  }

  if (step === 4) {
    if (input.name.trim().length < 2) errors.name = 'Please enter your name.';
    if (!isValidPhone(input.phone)) errors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
    if (!EMAIL_PATTERN.test(input.email.trim())) errors.email = 'Enter a valid email address.';
  }

  return errors;
}

export function buildWhatsAppEnquiryUrl(lines: string[]): string {
  const message = lines.filter(Boolean).join('\n');
  return `${SITE_CONFIG.contact.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
