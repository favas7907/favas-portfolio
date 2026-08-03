/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Lazy load non-critical routes
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const ConceptsPage = lazy(() => import('./pages/ConceptsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const AchievementDetail = lazy(() => import('./pages/AchievementDetail'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LibraryDetail = lazy(() => import('./pages/LibraryDetail'));

function RouteLoader({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-7 h-7 rounded-full animate-spin" style={{ border: '2.5px solid #e2e8f0', borderTopColor: '#2563EB' }} />
      </div>
    }>
      {children}
    </Suspense>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><RouteLoader><AboutPage /></RouteLoader></PageTransition>} />
        <Route path="/library" element={<PageTransition><RouteLoader><LibraryPage /></RouteLoader></PageTransition>} />
        <Route path="/library/:id" element={<PageTransition><RouteLoader><LibraryDetail /></RouteLoader></PageTransition>} />
        <Route path="/skills" element={<PageTransition><RouteLoader><SkillsPage /></RouteLoader></PageTransition>} />
        <Route path="/skills/:id" element={<PageTransition><RouteLoader><TechnologyPage /></RouteLoader></PageTransition>} />
        <Route path="/concepts" element={<PageTransition><RouteLoader><ConceptsPage /></RouteLoader></PageTransition>} />
        <Route path="/projects" element={<PageTransition><RouteLoader><ProjectsPage /></RouteLoader></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><RouteLoader><ProjectDetail /></RouteLoader></PageTransition>} />
        <Route path="/achievements" element={<PageTransition><RouteLoader><AchievementsPage /></RouteLoader></PageTransition>} />
        <Route path="/achievements/:id" element={<PageTransition><RouteLoader><AchievementDetail /></RouteLoader></PageTransition>} />
        <Route path="/contact" element={<PageTransition><RouteLoader><ContactPage /></RouteLoader></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white selection:bg-primary/20 selection:text-primary">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-24">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
