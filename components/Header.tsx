import React, { useState, useRef, useEffect } from 'react';
import { Page } from '../types';
import { siteConfig } from '../data/siteData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, ShieldCheck, 
  BookOpen, Compass, Layers, Radio, Calendar, FileText, Mail, Info, Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'programmes' | 'resources' | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ programmes: boolean; resources: boolean }>({
    programmes: false,
    resources: false
  });

  const programmesTimeoutRef = useRef<number | null>(null);
  const resourcesTimeoutRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Hover handlers with debounce for smooth UX
  const handleMouseEnter = (type: 'programmes' | 'resources') => {
    if (type === 'programmes') {
      if (programmesTimeoutRef.current) window.clearTimeout(programmesTimeoutRef.current);
      setOpenDropdown('programmes');
    } else {
      if (resourcesTimeoutRef.current) window.clearTimeout(resourcesTimeoutRef.current);
      setOpenDropdown('resources');
    }
  };

  const handleMouseLeave = (type: 'programmes' | 'resources') => {
    if (type === 'programmes') {
      programmesTimeoutRef.current = window.setTimeout(() => {
        setOpenDropdown((prev) => (prev === 'programmes' ? null : prev));
      }, 180);
    } else {
      resourcesTimeoutRef.current = window.setTimeout(() => {
        setOpenDropdown((prev) => (prev === 'resources' ? null : prev));
      }, 180);
    }
  };

  const programmeItems = [
    { name: 'How You See Yourself at 30', page: Page.HYSY30, route: '/how-you-see-yourself-at-30', desc: 'Ages 15–18 youth formation' },
    { name: 'Murabbi Formation', page: Page.MURABBI_FORMATION, route: '/murabbi-formation', desc: 'Adult mentor preparation' },
    { name: 'Project Amanah', page: Page.PROJECT_AMANAH, route: '/project-amanah', desc: 'Systems thinking & ethical AI' },
    { name: 'Lunar Season Curriculum', page: Page.LUNAR_CURRICULUM, route: '/lunar-curriculum', desc: 'Living Hijri season modules' },
  ];

  const frameworkItems = [
    { name: 'The Sovereign Compass', page: Page.APPS, route: '/apps', desc: 'Now in the Gravity app' },
    { name: 'The Tazkiyyah Framework', page: Page.TAZKIYYAH, route: '/tazkiyyah', desc: 'What is this stage of life for?' },
  ];

  const resourceItems = [
    { name: 'Articles & Reflections', page: Page.RESOURCES, route: '/resources', desc: 'Curated essays and guides' },
    { name: 'SOI Radio', page: Page.RADIO, route: '/radio', desc: 'Continuous 24/7 broadcast' },
    { name: 'Events & Seminars', page: Page.EVENTS, route: '/events', desc: 'Upcoming circles & talks' },
    { name: 'Apps', page: Page.APPS, route: '/apps', desc: 'Gravity & Daily Sunnah — install free' },
  ];

  const isProgrammesActive = [
    Page.PROGRAMMES, Page.HYSY30, Page.MURABBI_FORMATION, Page.PROJECT_AMANAH, 
    Page.LUNAR_CURRICULUM, Page.COMPASS, Page.SOVEREIGN_COMPASS, Page.TAZKIYYAH
  ].includes(currentPage);

  const isResourcesActive = [
    Page.RESOURCES, Page.RADIO, Page.EVENTS, Page.APPS
  ].includes(currentPage);

  const isBooksActive = [
    Page.BOOKS_SERIES, Page.BOOK_ONE, Page.BOOK_TWO, Page.BOOK_THREE, Page.BOOK_FOUR
  ].includes(currentPage);

  const handleNavClick = (page: Page, url?: string) => {
    setCurrentPage(page, url);
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-slate-950/95 backdrop-blur-md sticky top-0 z-50 border-b border-amber-500/20 shadow-md">
      {/* Skip to Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-950 focus:font-semibold focus:rounded-md"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding (Home action) */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick(Page.HOME, '/')} 
              className="flex items-center space-x-3 transition-transform hover:opacity-95 text-left cursor-pointer"
              aria-label="Sayyidina Omar Institute - Home"
            >
              <img 
                className="h-10 sm:h-12 md:h-13 w-auto object-contain" 
                src={siteConfig.logoUrl} 
                alt="Sayyidina Omar Institute Logo" 
              />
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-white tracking-wide leading-tight">
                  Sayyidina Omar Institute
                </span>
                <span className="block text-[10px] sm:text-xs text-amber-400/90 font-sans font-medium tracking-widest uppercase">
                  Character & Leadership
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links (Fits 1 line at 1280px) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium" aria-label="Main Navigation">
            
            {/* 1. About */}
            <button
              onClick={() => handleNavClick(Page.ABOUT, '/about')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === Page.ABOUT
                  ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
              }`}
            >
              About
            </button>

            {/* 2. Programmes Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programmes')}
              onMouseLeave={() => handleMouseLeave('programmes')}
            >
              <button
                onClick={() => {
                  setOpenDropdown(openDropdown === 'programmes' ? null : 'programmes');
                }}
                className={`px-3 py-2 rounded-md transition-colors inline-flex items-center space-x-1 cursor-pointer ${
                  isProgrammesActive
                    ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                    : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
                }`}
                aria-expanded={openDropdown === 'programmes'}
                aria-haspopup="true"
              >
                <span>Programmes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'programmes' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'programmes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-80 rounded-xl shadow-2xl bg-slate-950 border border-slate-800 py-2 z-50"
                  >
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400/80 border-b border-slate-800/60 mb-1">
                      Core Programmes
                    </div>
                    {programmeItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-4 py-2 transition-colors cursor-pointer block ${
                          currentPage === item.page
                            ? 'bg-amber-400/10 text-amber-300 font-semibold border-l-2 border-amber-400'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-medium">{item.name}</span>
                        <span className="block text-[11px] text-slate-500 font-normal">{item.desc}</span>
                      </button>
                    ))}

                    {/* Frameworks Divider */}
                    <div className="my-2 border-t border-slate-800/80 pt-2 px-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-amber-400" /> Frameworks
                      </span>
                    </div>

                    {frameworkItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-4 py-2 transition-colors cursor-pointer block ${
                          currentPage === item.page
                            ? 'bg-amber-400/10 text-amber-300 font-semibold border-l-2 border-amber-400'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-medium text-amber-200">{item.name}</span>
                        <span className="block text-[11px] text-slate-500 font-normal">{item.desc}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Books */}
            <button
              onClick={() => handleNavClick(Page.BOOKS_SERIES, '/books')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                isBooksActive
                  ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
              }`}
            >
              Books
            </button>

            {/* 4. Parents & Safeguarding */}
            <button
              onClick={() => handleNavClick(Page.PARENTS_SAFEGUARDING, '/parents-safeguarding')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === Page.PARENTS_SAFEGUARDING
                  ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
              }`}
            >
              Parents & Safeguarding
            </button>

            {/* 5. Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={() => handleMouseLeave('resources')}
            >
              <button
                onClick={() => {
                  setOpenDropdown(openDropdown === 'resources' ? null : 'resources');
                }}
                className={`px-3 py-2 rounded-md transition-colors inline-flex items-center space-x-1 cursor-pointer ${
                  isResourcesActive
                    ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                    : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
                }`}
                aria-expanded={openDropdown === 'resources'}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-72 rounded-xl shadow-2xl bg-slate-950 border border-slate-800 py-2 z-50"
                  >
                    {resourceItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-4 py-2.5 transition-colors cursor-pointer block ${
                          currentPage === item.page
                            ? 'bg-amber-400/10 text-amber-300 font-semibold border-l-2 border-amber-400'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-medium">{item.name}</span>
                        <span className="block text-[11px] text-slate-500 font-normal">{item.desc}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 6. Support */}
            <button
              onClick={() => handleNavClick(Page.SUPPORT, '/support')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === Page.SUPPORT
                  ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
              }`}
            >
              Support
            </button>

            {/* 7. Contact */}
            <button
              onClick={() => handleNavClick(Page.CONTACT, '/contact')}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === Page.CONTACT
                  ? 'text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-slate-900'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Express Interest CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick(Page.EXPRESS_INTEREST, '/express-interest')}
              className="px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Express Interest</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => handleNavClick(Page.EXPRESS_INTEREST, '/express-interest')}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all cursor-pointer"
            >
              Express Interest
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Accordion Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 text-sm font-medium">
              
              {/* About */}
              <button
                onClick={() => handleNavClick(Page.ABOUT, '/about')}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  currentPage === Page.ABOUT ? 'text-amber-400 bg-amber-400/10 font-semibold' : 'text-slate-300'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick(Page.FOUNDATION_STEWARDSHIP, '/foundation-and-stewardship')}
                className={`w-full text-left pl-6 py-1 text-xs rounded-md ${
                  currentPage === Page.FOUNDATION_STEWARDSHIP ? 'text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Foundation & Stewardship
              </button>

              {/* Programmes Expandable Accordion */}
              <div className="border-y border-slate-800/80 my-1 py-1">
                <button
                  onClick={() => setMobileExpanded(prev => ({ ...prev, programmes: !prev.programmes }))}
                  className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between ${
                    isProgrammesActive ? 'text-amber-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  <span>Programmes</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.programmes ? 'rotate-180' : ''}`} />
                </button>

                {mobileExpanded.programmes && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-900/50 rounded-lg my-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 px-3 pt-1 block">
                      Core Programmes
                    </span>
                    {programmeItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-md block ${
                          currentPage === item.page ? 'text-amber-300 font-semibold bg-amber-400/10' : 'text-slate-300'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}

                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 px-3 pt-2 block">
                      Frameworks
                    </span>
                    {frameworkItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-md block ${
                          currentPage === item.page ? 'text-amber-300 font-semibold bg-amber-400/10' : 'text-amber-200'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Books */}
              <button
                onClick={() => handleNavClick(Page.BOOKS_SERIES, '/books')}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  isBooksActive ? 'text-amber-400 bg-amber-400/10 font-semibold' : 'text-slate-300'
                }`}
              >
                Books
              </button>

              {/* Parents & Safeguarding */}
              <button
                onClick={() => handleNavClick(Page.PARENTS_SAFEGUARDING, '/parents-safeguarding')}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  currentPage === Page.PARENTS_SAFEGUARDING ? 'text-amber-400 bg-amber-400/10 font-semibold' : 'text-slate-300'
                }`}
              >
                Parents & Safeguarding
              </button>

              {/* Resources Expandable Accordion */}
              <div className="border-y border-slate-800/80 my-1 py-1">
                <button
                  onClick={() => setMobileExpanded(prev => ({ ...prev, resources: !prev.resources }))}
                  className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between ${
                    isResourcesActive ? 'text-amber-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.resources ? 'rotate-180' : ''}`} />
                </button>

                {mobileExpanded.resources && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-900/50 rounded-lg my-1">
                    {resourceItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handleNavClick(item.page, item.route)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-md block ${
                          currentPage === item.page ? 'text-amber-300 font-semibold bg-amber-400/10' : 'text-slate-300'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Support */}
              <button
                onClick={() => handleNavClick(Page.SUPPORT, '/support')}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  currentPage === Page.SUPPORT ? 'text-amber-400 bg-amber-400/10 font-semibold' : 'text-slate-300'
                }`}
              >
                Support
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick(Page.CONTACT, '/contact')}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  currentPage === Page.CONTACT ? 'text-amber-400 bg-amber-400/10 font-semibold' : 'text-slate-300'
                }`}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
