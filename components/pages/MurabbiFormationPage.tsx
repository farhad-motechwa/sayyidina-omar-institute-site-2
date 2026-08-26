import React from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import Button from '../ui/Button';
import { ShieldCheck, Users, ExternalLink, Heart, BookOpen, AlertCircle } from 'lucide-react';

interface MurabbiFormationPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const MurabbiFormationPage: React.FC<MurabbiFormationPageProps> = ({ setCurrentPage }) => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Adult Mentor Pathway
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Murabbi Formation Programme
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Preparing and holding accountable the adult guides entrusted to accompany young people in character, faith, and life.
        </p>
      </div>

      {/* Definition & Distinction */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">
          What is a Murabbi?
        </h2>
        <p className="text-slate-300 leading-relaxed font-light text-base">
          A Murabbi is neither a distant academic lecturer, a corporate life coach, nor a casual motivational speaker. A Murabbi is a trusted adult guide who models character (adab), listens deeply, maintains strict ethical boundaries, and accompanies young people with genuine care and theological restraint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800/80 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">Accompaniment over Instruction</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Young people do not need another person giving lectures. They need adults who walk beside them, help them articulate their struggles, and remind them gently of Allah.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800/80 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">Theological Restraint</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Murabbis do not issue independent religious rulings or claim scholarly authority. They ground conversations in verified principles and consult qualified local scholars when needed.
            </p>
          </div>
        </div>
      </div>

      {/* Core Dimensions of Murabbi Formation */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-serif font-bold text-white">
            Core Formation Dimensions
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Standards required for any adult entrusted with leading a youth circle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
            <ShieldCheck className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-white">Safeguarding & Boundaries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict compliance with Working With Children Checks (WWCC), observable-and-interruptible conversation protocols, and transparent communications with parents.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
            <Users className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-white">Active Listening & Empathy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Training in listening without immediate judgement, holding confidential spaces appropriately, and asking open questions that stimulate self-examination.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-white">Limits of Competence & Referral</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clear boundaries regarding mental health, clinical issues, or severe distress. Murabbis are trained to identify when specialized professional help is required and follow escalation protocols immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Diagnostic Tool Section */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
            Weekly Facilitation Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            The Sovereign Compass Weekly Diagnostic
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
            Our Murabbis utilize The Sovereign Compass as a weekly self-reflection and group diagnostic tool to gauge youth state across Qalb, ʿAql, Nafs, and Ruh.
          </p>
        </div>

        <Button
          onClick={() => setCurrentPage?.(Page.COMPASS, '/compass')}
          variant="outline"
          className="text-xs px-5 py-2.5 flex-shrink-0"
        >
          <span>Open Sovereign Compass</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>

      {/* Community Support Campaign Card */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-serif font-bold text-white">
            Community-Supported Formation
          </h3>
          <p className="text-sm text-slate-300 font-sans">
            The cost of forming a Murabbi is carried by the community.
          </p>
        </div>

        <a
          href={siteConfig.launchGoodCampaign.url}
          target="_blank"
          rel="noopener"
          className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5 flex-shrink-0"
        >
          <span>Support the campaign</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Expression of Interest for Future Cohorts */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-white">
          Apply or Express Interest as a Murabbi
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light">
          We invite mature, responsible adults in Perth who are committed to youth development and character modeling to apply for upcoming Murabbi training cohorts.
        </p>
        <div className="pt-2 flex justify-center">
          <Button onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST, '/express-interest?programme=murabbi')} variant="primary">
            <span>Express Interest for Murabbi Pathway</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>

    </div>
  );
};

export default MurabbiFormationPage;
