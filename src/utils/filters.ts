import { BuildProject } from '../data/projects';
import { GalleryCategory, GalleryItem } from '../data/gallery';

export function filterProjects(
  projects: readonly BuildProject[],
  selectedType: string,
  selectedBrand: string
): BuildProject[] {
  return projects.filter((project) => {
    const matchesType = selectedType === 'ALL' || project.type === selectedType;
    const matchesBrand = selectedBrand === 'ALL' || project.brand === selectedBrand;
    return matchesType && matchesBrand;
  });
}

export function getAdjacentProjects(
  projects: readonly BuildProject[],
  currentSlug: string
): { previous: BuildProject | null; next: BuildProject | null } {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1 || projects.length <= 1) {
    return { previous: null, next: null };
  }
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  return {
    previous: projects[prevIndex],
    next: projects[nextIndex],
  };
}

export function filterGalleryItems(
  items: readonly GalleryItem[],
  category: GalleryCategory
): GalleryItem[] {
  if (category === 'ALL') {
    return [...items];
  }
  return items.filter((item) => item.category === category);
}

export function stepCircularIndex(
  currentIndex: number,
  delta: number,
  totalLength: number
): number {
  if (totalLength <= 0) return 0;
  return ((currentIndex + delta) % totalLength + totalLength) % totalLength;
}
