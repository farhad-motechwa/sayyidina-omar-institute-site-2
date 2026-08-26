import React from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import Button from '../ui/Button';
import { ExternalLink, CheckCircle2, ChevronRight, BookOpen, Sparkles, Cpu } from 'lucide-react';

interface ProjectAmanahPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const ProjectAmanahPage: React.FC<ProjectAmanahPageProps> = ({ setCurrentPage }) => {
  // Configurable pilot details (hide unset fields cleanly)
  const pilotDetails = {
    status: "Forthcoming Pilot Phase from 2026 to 2027",
    eligibility: "Open to High School & University Youth in Perth",
    format: "Project-Based Learning Workshop Series",
    venue: "Perth Community Hub / Partner Innovation Lab",
    dates: "To be announced for upcoming cohort",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Practical Innovation Pilot
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Project Amanah
        </h1>

        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Helping young Muslims identify real community problems, understand underlying systems, use AI with discernment, and build responsible responses.
        </p>
      </div>

      {/* Central Sequence Banner */}
      <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
          The Four-Step Methodology
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-left">
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold block text-sm mb-1">Step 1</span>
            <span className="text-sm font-semibold text-white block">Find a real problem</span>
            <span className="text-xs text-slate-400 mt-1 block">Locate genuine challenges facing local families or community.</span>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold block text-sm mb-1">Step 2</span>
            <span className="text-sm font-semibold text-white block">Understand the system</span>
            <span className="text-xs text-slate-400 mt-1 block">Map root causes, incentives, and human dynamics before acting.</span>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold block text-sm mb-1">Step 3</span>
            <span className="text-sm font-semibold text-white block">Use AI with discernment</span>
            <span className="text-xs text-slate-400 mt-1 block">Treat technology as a tool for analysis, never an authority.</span>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold block text-sm mb-1">Step 4</span>
            <span className="text-sm font-semibold text-white block">Build a response</span>
            <span className="text-xs text-slate-400 mt-1 block">Develop practical, ethical, and sustainable solutions with adab.</span>
          </div>
        </div>
      </div>

      {/* Ethical Tech & Discernment */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Ethical Technology Usage without Hype
        </h2>
        <p className="text-slate-300 leading-relaxed font-light text-base">
          Project Amanah does not present AI or technology as a magic wand that solves human problems automatically, nor as an authority in religious or moral judgment. Instead, we teach youth critical thinking, verification (tabayyun), and technical literacy so they can harness digital tools responsibly without becoming dependent or passive consumers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-serif font-bold text-amber-300 mb-1">Systems Thinking</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyzing how economic, social, and technological factors interact rather than offering superficial fixes.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-serif font-bold text-amber-300 mb-1">Ethical Accountability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluating data privacy, truthfulness, and the impact of technological solutions on real human lives.
            </p>
          </div>
        </div>
      </div>

      {/* Configurable Pilot Logistics */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-serif font-bold text-white">Pilot Overview</h2>
          <span className="text-xs font-semibold px-3 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
            {pilotDetails.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {pilotDetails.eligibility && (
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Eligibility</span>
              <p className="text-slate-200 font-medium">{pilotDetails.eligibility}</p>
            </div>
          )}

          {pilotDetails.format && (
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Format</span>
              <p className="text-slate-200 font-medium">{pilotDetails.format}</p>
            </div>
          )}

          {pilotDetails.venue && (
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Venue</span>
              <p className="text-slate-200 font-medium">{pilotDetails.venue}</p>
            </div>
          )}
        </div>

        <div className="pt-4 flex justify-center">
          <Button onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST, '/express-interest?programme=amanah')} variant="primary">
            <span>Register Interest for Pilot</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ProjectAmanahPage;
