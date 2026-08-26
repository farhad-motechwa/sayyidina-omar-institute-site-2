import React from 'react';
import { Page } from '../types';
import { siteConfig } from '../data/siteData';
import { BookOpen, Mail, MapPin, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={siteConfig.logoUrl} alt="Sayyidina Omar Institute Logo" className="h-10 w-auto" />
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                Sayyidina Omar Institute
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Nurturing young Muslims through purposeful education, accountable mentorship, reflection and service in Western Australia.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Inspired by the moral legacy of Sayyidina Umar ibn al-Khattab RA.
            </div>
          </div>

          {/* Column 2: Programmes & Path */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-sans">
              Programmes
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage(Page.HYSY30)} className="hover:text-amber-300 transition-colors">
                  How You See Yourself at 30
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.LUNAR_CURRICULUM)} className="hover:text-amber-300 transition-colors">
                  Lunar Season Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.MURABBI_FORMATION)} className="hover:text-amber-300 transition-colors">
                  Murabbi Formation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.PROJECT_AMANAH)} className="hover:text-amber-300 transition-colors">
                  Project Amanah
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.COMPASS)} className="hover:text-amber-300 transition-colors">
                  The Sovereign Compass
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.TAZKIYYAH)} className="hover:text-amber-300 transition-colors">
                  The Tazkiyyah Framework
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-sans">
              Navigation & Policy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage(Page.BOOKS_SERIES)} className="hover:text-amber-300 transition-colors font-semibold text-amber-400/90">
                  Books & Publications
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-amber-300 transition-colors">
                  About the Institute
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.FOUNDATION_STEWARDSHIP)} className="hover:text-amber-300 transition-colors text-amber-400/90 font-medium">
                  Foundation & Stewardship
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.PARENTS_SAFEGUARDING)} className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Parents & Safeguarding
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.RESOURCES)} className="hover:text-amber-300 transition-colors">
                  Articles & Resources
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.EVENTS)} className="hover:text-amber-300 transition-colors">
                  Seminars & Events
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.RADIO)} className="hover:text-amber-300 transition-colors">
                  SOI Radio
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.PRIVACY)} className="hover:text-amber-300 transition-colors text-slate-400">
                  Privacy & Data Handling
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Perth Context */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-sans">
              Contact & Location
            </h4>
            <div className="space-y-2 text-sm text-slate-400 font-light">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Perth, Western Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contactEmail}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>{siteConfig.contactEmail}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-300 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Farhad Omar Studios on Substack</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Support & Donation Banner */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-amber-500/20 text-center my-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400">
              <Heart className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-2">Support Our Educational Mission</h3>
          <p className="max-w-2xl mx-auto text-sm text-slate-400 mb-4 font-light">
            Your contributions directly support mentorship programmes, learning resources, and community formation for young Muslims.
          </p>
          <div className="mb-6">
            <a
              href={siteConfig.launchGoodCampaign.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>Train a Murabbi. Form a Generation. Support the campaign</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={siteConfig.stripeDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="bg-white rounded-lg p-2.5 flex justify-center items-center shadow-md">
                <img src={siteConfig.stripeButtonImg} alt="Donate securely via Stripe" className="h-7 w-auto" />
              </div>
            </a>
            <button
              onClick={() => setCurrentPage(Page.SUPPORT)}
              className="transition-transform hover:scale-105"
            >
              <div className="bg-[#0070ba] rounded-lg p-2.5 flex justify-center items-center shadow-md">
                <img src={siteConfig.paypalButtonImg} alt="Donate via PayPal" className="h-7 w-auto" />
              </div>
            </button>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-amber-400 transition-colors">
              About
            </button>
            <button onClick={() => setCurrentPage(Page.FOUNDATION_STEWARDSHIP)} className="hover:text-amber-400 transition-colors">
              Foundation & Stewardship
            </button>
            <button onClick={() => setCurrentPage(Page.PARENTS_SAFEGUARDING)} className="hover:text-amber-400 transition-colors">
              Safeguarding
            </button>
            <button onClick={() => setCurrentPage(Page.CONTACT)} className="hover:text-amber-400 transition-colors">
              Contact
            </button>
            <button onClick={() => setCurrentPage(Page.PRIVACY)} className="hover:text-amber-400 transition-colors">
              Privacy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
