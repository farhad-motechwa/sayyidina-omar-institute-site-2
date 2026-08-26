import React from 'react';
import { Page } from '../../types';
import { programmesData } from '../../data/programmesData';
import { ChevronRight, ExternalLink, Compass } from 'lucide-react';
import Button from '../ui/Button';
import { siteConfig } from '../../data/siteData';

interface ProgrammesOverviewPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ProgrammesOverviewPage: React.FC<ProgrammesOverviewPageProps> = ({ setCurrentPage }) => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Integrated Formation Pathway
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Our Programmes
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          The Institute does not offer isolated youth activities, but a connected ecosystem designed to accompany participants through key stages of life.
        </p>
      </div>

      {/* Programme Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programmesData.map((prog) => (
          <div 
            key={prog.id}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all space-y-6"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {prog.targetAudience}
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">
                {prog.title}
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {prog.fullDescription}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Key Programme Elements:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {prog.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => {
                  if (prog.slug === 'how-you-see-yourself-at-30') setCurrentPage(Page.HYSY30);
                  else if (prog.slug === 'murabbi-formation') setCurrentPage(Page.MURABBI_FORMATION);
                  else if (prog.slug === 'project-amanah') setCurrentPage(Page.PROJECT_AMANAH);
                  else if (prog.slug === 'sovereign-compass') setCurrentPage(Page.SOVEREIGN_COMPASS);
                  else if (prog.slug === 'radio') setCurrentPage(Page.RADIO);
                }}
                className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
              >
                <span>{prog.ctaText}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Express Interest Banner */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-white">
          Not Sure Which Programme is Suitable?
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light">
          Get in touch with our team or fill out a general Expression of Interest form. We will guide you to the right circle or pathway.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => setCurrentPage(Page.EXPRESS_INTEREST)} variant="primary">
            <span>Express Interest Form</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
          <Button onClick={() => setCurrentPage(Page.CONTACT)} variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ProgrammesOverviewPage;
