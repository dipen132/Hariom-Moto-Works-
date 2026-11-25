import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS } from '../data/projects';
import { GALLERY_ITEMS } from '../data/gallery';
import { PARTS_CATEGORIES } from '../data/parts';
import { PROCESS_STEPS } from '../data/process';
import { parseRoute, normalizePath, getPageMeta } from './router';
import { filterProjects, getAdjacentProjects, filterGalleryItems, stepCircularIndex } from './filters';
import {
  validateContactEnquiry,
  validateProjectStep,
  buildWhatsAppEnquiryUrl,
  isValidPhone,
  isValidMotorcycleYear,
} from './enquiry';

test('router normalizes and parses all Hariom Moto Works routes accurately', () => {
  assert.equal(normalizePath('/builds/'), '/builds');
  assert.equal(normalizePath(''), '/');
  assert.deepEqual(parseRoute('/'), { name: 'home' });
  assert.deepEqual(parseRoute('/parts'), { name: 'parts' });
  assert.deepEqual(parseRoute('/workshop'), { name: 'workshop' });
  assert.deepEqual(parseRoute('/services'), { name: 'services' });
  assert.deepEqual(parseRoute('/about'), { name: 'about' });
  assert.deepEqual(parseRoute('/builds/the-reborn-classic'), {
    name: 'build-detail',
    slug: 'the-reborn-classic',
  });
  assert.deepEqual(parseRoute('/contact?service=Parts'), {
    name: 'contact',
    preselectedService: 'Parts',
  });
  assert.deepEqual(parseRoute('/unknown-path'), { name: 'home' });

  const homeMeta = getPageMeta({ name: 'home' });
  assert.match(homeMeta.title, /Hariom Moto Works/);
  const partsMeta = getPageMeta({ name: 'parts' });
  assert.match(partsMeta.title, /Motorcycle Parts/);
});

test('parts catalog and 5-step process data meet specification', () => {
  assert.equal(PARTS_CATEGORIES.length, 10);
  assert.ok(PARTS_CATEGORIES.some((c) => c.name === 'Engine Parts'));
  assert.ok(PARTS_CATEGORIES.some((c) => c.name === 'Chain & Sprockets'));
  assert.equal(PROCESS_STEPS.length, 5);
  assert.deepEqual(
    PROCESS_STEPS.map((s) => s.title),
    ['Inspect', 'Diagnose', 'Plan', 'Build', 'Test']
  );
});

test('project and gallery filters return accurate subsets and wrap circularly', () => {
  const royalEnfields = filterProjects(PROJECTS, 'ALL', 'Royal Enfield');
  assert.equal(royalEnfields.length, 1);
  assert.equal(royalEnfields[0].slug, 'the-reborn-classic');

  const cafes = filterProjects(PROJECTS, 'Cafe Racer', 'ALL');
  assert.equal(cafes.length, 1);
  assert.equal(cafes[0].brand, 'Triumph');

  const adj = getAdjacentProjects(PROJECTS, PROJECTS[0].slug);
  assert.equal(adj.previous?.slug, PROJECTS[PROJECTS.length - 1].slug);
  assert.equal(adj.next?.slug, PROJECTS[1].slug);

  const workshopGallery = filterGalleryItems(GALLERY_ITEMS, 'WORKSHOP');
  assert.ok(workshopGallery.length > 0);
  assert.ok(workshopGallery.every((item) => item.category === 'WORKSHOP'));

  assert.equal(stepCircularIndex(0, -1, 5), 4);
  assert.equal(stepCircularIndex(4, 1, 5), 0);
});

test('contact and project enquiry validators reject invalid or empty input strictly', () => {
  assert.equal(isValidPhone('8200217135'), true);
  assert.equal(isValidPhone('+91 82002 17135'), true);
  assert.equal(isValidPhone('12345'), false);

  assert.equal(isValidMotorcycleYear('2012'), true);
  assert.equal(isValidMotorcycleYear('1899'), false);
  assert.equal(isValidMotorcycleYear('abcd'), false);

  const emptyErrors = validateContactEnquiry({
    name: '',
    phone: '',
    email: 'not-an-email',
    brand: '',
    model: '',
    year: '',
    service: '',
    description: 'short',
  });
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.phone);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.brand);
  assert.ok(emptyErrors.model);
  assert.ok(emptyErrors.year);
  assert.ok(emptyErrors.service);
  assert.ok(emptyErrors.description);

  const validErrors = validateContactEnquiry({
    name: 'Rohan Patel',
    phone: '9825012345',
    email: 'rohan@example.com',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: '2012',
    service: 'Parts',
    description: 'Looking for genuine chain sprocket kit and sintered front brake pads.',
  });
  assert.deepEqual(validErrors, {});

  const step2Errors = validateProjectStep(2, {
    brand: 'Yamaha',
    model: 'RX100',
    year: '1994',
    condition: 'Non-running',
    scopes: [],
    description: '',
    name: '',
    phone: '',
    email: '',
  });
  assert.ok(step2Errors.scopes);
});

test('WhatsApp enquiry URL builder encodes clean message to Hariom Moto Works number', () => {
  const url = buildWhatsAppEnquiryUrl([
    'Hello Hariom Moto Works,',
    'Bike: 2012 Royal Enfield Classic 350',
    'Service: Parts Enquiry',
  ]);
  assert.ok(url.startsWith('https://wa.me/918200217135?text='));
  assert.match(decodeURIComponent(url), /Hariom Moto Works/);
});
