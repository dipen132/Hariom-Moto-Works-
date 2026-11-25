/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './components/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BuildsPage } from './pages/BuildsPage';
import { BuildDetailPage } from './pages/BuildDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { PartsPage } from './pages/PartsPage';
import { WorkshopPage } from './pages/WorkshopPage';
import { ProcessPage } from './pages/ProcessPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { EnquirePage } from './pages/EnquirePage';

function PageView() {
  const { route } = useRouter();

  switch (route.name) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'builds':
      return <BuildsPage />;
    case 'build-detail':
      return <BuildDetailPage slug={route.slug} />;
    case 'services':
      return <ServicesPage />;
    case 'parts':
      return <PartsPage />;
    case 'workshop':
      return <WorkshopPage />;
    case 'process':
      return <ProcessPage />;
    case 'gallery':
      return <GalleryPage />;
    case 'contact':
      return <ContactPage preselectedService={route.preselectedService} />;
    case 'enquire':
      return <EnquirePage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#0B0B0A] text-[#F3F1EC]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#D94E2A] focus:text-[#F3F1EC] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          <PageView />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
