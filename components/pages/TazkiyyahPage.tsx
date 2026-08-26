import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';
import { Compass, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface TazkiyyahPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const TazkiyyahPage: React.FC<TazkiyyahPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5 text-amber-400" /> DEVELOPMENTAL FRAMEWORK
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          The Tazkiyyah Framework
        </h1>

        <p className="text-xl sm:text-2xl font-serif text-amber-200/90 font-medium">
          What is this stage of life for?
        </p>

        <div className="text-base sm:text-lg text-slate-300 font-light leading-relaxed space-y-4 pt-2 text-left sm:text-center max-w-2xl mx-auto">
          <p>
            The same four structures, seen across a life rather than across a day.
          </p>
          <p>
            Formation is not the same task at seven as it is at seventeen. Choose a stage, adjust the balance, and see what that combination tends to produce. Anchoring the heart from birth to seven. Foundations in the Sunnah from eight to fourteen. Structured study from fifteen to twenty-one. Scholarly maturity from twenty-two.
          </p>
          <p className="text-amber-300/90 font-normal italic">
            It is why our circles are age-staged rather than one programme run for everyone.
          </p>
        </div>
      </div>

      {/* Embed Container */}
      <div className="w-full space-y-4">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2 sm:p-4 shadow-2xl overflow-hidden">
          <iframe
            src="https://tazkiyyah.sayyidinaomarinstitute.au"
            title="The Tazkiyyah Framework"
            loading="lazy"
            style={{ width: '100%', border: 0, borderRadius: '12px' }}
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full min-h-[100svh] md:min-h-[1400px]"
          />
        </div>

        {/* Directly beneath link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Interactive Tazkiyyah Developmental Matrix</span>
          </div>

          <a
            href="https://tazkiyyah.sayyidinaomarinstitute.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>Prefer full screen? Open it directly</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Cross-link to The Sovereign Compass */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
              <Compass className="w-4 h-4" /> DAILY REFLECTION TOOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Sovereign Compass
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              The framework shows what a stage is for. The Sovereign Compass shows where you actually are today.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Button
              onClick={() => setCurrentPage?.(Page.COMPASS, '/compass')}
              variant="primary"
              className="px-6 py-3 text-sm shadow-lg shadow-amber-500/20"
            >
              <span>Take the diagnostic</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TazkiyyahPage;
