import { PROJECTS } from '../data/projects';

export type PageRoute =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'builds' }
  | { name: 'build-detail'; slug: string }
  | { name: 'services' }
  | { name: 'parts' }
  | { name: 'workshop' }
  | { name: 'process' }
  | { name: 'gallery' }
  | { name: 'contact'; preselectedService?: string }
  | { name: 'enquire'; preselectedService?: string };

export interface PageMeta {
  title: string;
  description: string;
}

export function normalizePath(rawPath: string): string {
  const [pathname] = rawPath.split('?');
  if (!pathname || pathname === '/') {
    return '/';
  }
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

export function parseRoute(rawPath: string, search = ''): PageRoute {
  const path = normalizePath(rawPath);
  const queryPart = rawPath.includes('?') ? rawPath.slice(rawPath.indexOf('?')) : search;
  const params = new URLSearchParams(queryPart);
  const preselectedService = params.get('service') || undefined;

  if (path === '/') return { name: 'home' };
  if (path === '/about') return { name: 'about' };
  if (path === '/builds') return { name: 'builds' };
  if (path.startsWith('/builds/')) {
    const slug = decodeURIComponent(path.slice('/builds/'.length));
    if (slug) {
      return { name: 'build-detail', slug };
    }
    return { name: 'builds' };
  }
  if (path === '/services') return { name: 'services' };
  if (path === '/parts') return { name: 'parts' };
  if (path === '/workshop') return { name: 'workshop' };
  if (path === '/process') return { name: 'process' };
  if (path === '/gallery') return { name: 'gallery' };
  if (path === '/contact') return { name: 'contact', preselectedService };
  if (path === '/enquire') return { name: 'enquire', preselectedService };

  return { name: 'home' };
}

export function getPageMeta(route: PageRoute): PageMeta {
  switch (route.name) {
    case 'home':
      return {
        title: 'Hariom Moto Works — Parts. Repair. Restoration. Builds.',
        description:
          'Motorcycle spare parts, mechanical repair, servicing, restoration, and custom builds in Ankleshwar, Gujarat, India.',
      };
    case 'about':
      return {
        title: 'About — More Than a Parts Shop | Hariom Moto Works',
        description:
          'How Hariom Moto Works brings together genuine motorcycle spare parts, mechanical repair, and hands-on workshop craftsmanship in Ankleshwar.',
      };
    case 'builds':
      return {
        title: 'Custom Builds & Restorations | Hariom Moto Works',
        description:
          'Explore motorcycle restorations, cafe racers, scramblers, and custom projects crafted by Hariom Moto Works.',
      };
    case 'build-detail': {
      const project = PROJECTS.find((item) => item.slug === route.slug);
      if (project) {
        return {
          title: `${project.title} (${project.brand} ${project.model}) | Hariom Moto Works`,
          description: project.shortDescription,
        };
      }
      return {
        title: 'Project Archive | Hariom Moto Works',
        description: 'Custom motorcycle restoration and fabrication showcase by Hariom Moto Works.',
      };
    }
    case 'services':
      return {
        title: 'Services — Repair, Restoration, Builds & Parts | Hariom Moto Works',
        description:
          'Motorcycle repair, servicing, restoration, custom builds, spare parts, fabrication, and detailing in Ankleshwar, Gujarat.',
      };
    case 'parts':
      return {
        title: 'Motorcycle Parts Stockist — Genuine Components | Hariom Moto Works',
        description:
          'Quality motorcycle spare parts for repairs, servicing, maintenance, and builds: engine, brakes, chains, sprockets, clutch, electrical, and suspension.',
      };
    case 'workshop':
      return {
        title: 'Inside The Workshop — Tools, Process & Gallery | Hariom Moto Works',
        description:
          'Step inside Hariom Moto Works in Ankleshwar: real tools, 5-stage workshop process, fabrication bay, and build photography.',
      };
    case 'process':
      return {
        title: 'Workshop Process — Inspect, Diagnose, Plan, Build, Test | Hariom Moto Works',
        description:
          'Five disciplined stages for motorcycle repair, restoration, and custom building at Hariom Moto Works.',
      };
    case 'gallery':
      return {
        title: 'Workshop & Builds Gallery | Hariom Moto Works',
        description:
          'Photography of completed custom motorcycles, restorations, parts details, and workshop moments.',
      };
    case 'contact':
      return {
        title: 'Contact — Ankleshwar, Gujarat | Hariom Moto Works',
        description:
          'Contact Hariom Moto Works in Ankleshwar, Gujarat for motorcycle parts, servicing, repairs, restoration, or custom builds.',
      };
    case 'enquire':
      return {
        title: 'Start a Project — Tell Us About Your Machine | Hariom Moto Works',
        description:
          'Submit your motorcycle repair, restoration, parts, or custom build brief to Hariom Moto Works.',
      };
  }
}
