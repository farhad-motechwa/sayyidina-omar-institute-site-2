import React, { useState, useEffect } from 'react';
import { Page, getPageFromPath } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AuthorPage from './components/pages/AuthorPage';
import BookSeriesLandingPage from './components/pages/BookSeriesLandingPage';
import BookDetailPage from './components/pages/BookDetailPage';
import ProgrammesOverviewPage from './components/pages/ProgrammesOverviewPage';
import HYSY30Page from './components/pages/HYSY30Page';
import LunarCurriculumPage from './components/pages/LunarCurriculumPage';
import MurabbiFormationPage from './components/pages/MurabbiFormationPage';
import ProjectAmanahPage from './components/pages/ProjectAmanahPage';
import SovereignCompassPage from './components/pages/SovereignCompassPage';
import TazkiyyahPage from './components/pages/TazkiyyahPage';
import AttributeCompassPage from './components/pages/AttributeCompassPage';
import ScholasticBridgePage from './components/pages/ScholasticBridgePage';
import ParentsSafeguardingPage from './components/pages/ParentsSafeguardingPage';
import FoundingEssayPage from './components/pages/FoundingEssayPage';
import FoundationAndStewardshipPage from './components/pages/FoundationAndStewardshipPage';
import ResourcesPage from './components/pages/ResourcesPage';
import EventsPage from './components/pages/EventsPage';
import RadioPage from './components/pages/RadioPage';
import ContactPage from './components/pages/ContactPage';
import ExpressInterestPage from './components/pages/ExpressInterestPage';
import PrivacyPage from './components/pages/PrivacyPage';
import SupportPage from './components/pages/SupportPage';
import GalleryPage from './components/pages/GalleryPage';
import NotFoundPage from './components/pages/NotFoundPage';
import { RadioPlayer } from './components/RadioPlayer';

import { motion, AnimatePresence } from 'motion/react';

const CANONICAL_DOMAIN = 'https://sayyidinaomarinstitute.au';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname));

  // Sync route with browser history (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const matchedPage = getPageFromPath(window.location.pathname);
      setCurrentPage(matchedPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update canonical link in DOM <head> dynamically
  useEffect(() => {
    const canonicalRoute = (currentPage === Page.HOME || currentPage === Page.NOT_FOUND) ? '' : currentPage;
    const canonicalUrl = `${CANONICAL_DOMAIN}/${canonicalRoute}`;

    let linkTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.rel = 'canonical';
      document.head.appendChild(linkTag);
    }
    linkTag.href = canonicalUrl;
  }, [currentPage]);

  const handlePageChange = (newPage: Page, targetUrl?: string) => {
    setCurrentPage(newPage);
    const defaultPath = newPage === Page.HOME ? '/' : `/${newPage}`;
    const finalPath = targetUrl || defaultPath;
    if (window.location.pathname + window.location.search !== finalPath) {
      window.history.pushState(null, '', finalPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const pageContent = (() => {
      switch (currentPage) {
        case Page.HOME:
          return <HomePage setCurrentPage={handlePageChange} />;
        case Page.ABOUT:
          return <AboutPage setCurrentPage={handlePageChange} />;
        case Page.AUTHOR_FARHAD_OMAR:
          return <AuthorPage setCurrentPage={handlePageChange} />;
        case Page.BOOKS_SERIES:
          return <BookSeriesLandingPage setCurrentPage={handlePageChange} />;
        case Page.BOOK_ONE:
          return <BookDetailPage bookSlug="who-are-you-becoming" setCurrentPage={handlePageChange} />;
        case Page.BOOK_TWO:
          return <BookDetailPage bookSlug="tazkiyyah" setCurrentPage={handlePageChange} />;
        case Page.BOOK_THREE:
          return <BookDetailPage bookSlug="niyyah" setCurrentPage={handlePageChange} />;
        case Page.BOOK_FOUR:
          return <BookDetailPage bookSlug="khidmah" setCurrentPage={handlePageChange} />;
        case Page.PROGRAMMES:
          return <ProgrammesOverviewPage setCurrentPage={handlePageChange} />;
        case Page.HYSY30:
          return <HYSY30Page setCurrentPage={handlePageChange} />;
        case Page.LUNAR_CURRICULUM:
          return <LunarCurriculumPage />;
        case Page.MURABBI_FORMATION:
          return <MurabbiFormationPage setCurrentPage={handlePageChange} />;
        case Page.PROJECT_AMANAH:
          return <ProjectAmanahPage setCurrentPage={handlePageChange} />;
        case Page.COMPASS:
        case Page.SOVEREIGN_COMPASS:
          return <SovereignCompassPage setCurrentPage={handlePageChange} />;
        case Page.TAZKIYYAH:
          return <TazkiyyahPage setCurrentPage={handlePageChange} />;
        case Page.ATTRIBUTE_COMPASS:
          return <AttributeCompassPage />;
        case Page.SCHOLASTIC_BRIDGE:
          return <ScholasticBridgePage />;
        case Page.PARENTS_SAFEGUARDING:
          return <ParentsSafeguardingPage setCurrentPage={handlePageChange} />;
        case Page.FOUNDING_ESSAY:
          return <FoundingEssayPage setCurrentPage={handlePageChange} />;
        case Page.FOUNDATION_STEWARDSHIP:
          return <FoundationAndStewardshipPage setCurrentPage={handlePageChange} />;
        case Page.RESOURCES:
          return <ResourcesPage setCurrentPage={handlePageChange} />;
        case Page.EVENTS:
          return <EventsPage setCurrentPage={handlePageChange} />;
        case Page.RADIO:
          return <RadioPage />;
        case Page.CONTACT:
          return <ContactPage setCurrentPage={handlePageChange} />;
        case Page.EXPRESS_INTEREST:
          return <ExpressInterestPage setCurrentPage={handlePageChange} />;
        case Page.PRIVACY:
          return <PrivacyPage />;
        case Page.SUPPORT:
          return <SupportPage setCurrentPage={handlePageChange} />;
        case Page.GALLERY:
          return <GalleryPage />;
        case Page.NOT_FOUND:
          return <NotFoundPage setCurrentPage={handlePageChange} />;
        default:
          return <NotFoundPage setCurrentPage={handlePageChange} />;
      }
    })();

    return (
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {pageContent}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-amber-500/20 selection:text-amber-300">
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={handlePageChange} />
      <RadioPlayer />
    </div>
  );
};

export default App;
