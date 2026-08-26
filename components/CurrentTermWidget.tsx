import React, { useState } from 'react';
import { currentTermData } from '../data/currentTerm';
import { Page } from '../types';
import { Calendar, Clock, MapPin, Users, Sparkles, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import InquiryModal, { InquiryType } from './InquiryModal';

interface CurrentTermWidgetProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const CurrentTermWidget: React.FC<CurrentTermWidgetProps> = ({ setCurrentPage }) => {
  const [modalType, setModalType] = useState<InquiryType | null>(null);

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      {/* Background subtle accent */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest flex items-center gap-1.5 font-sans">
              <Sparkles className="w-3.5 h-3.5" /> Current Term Registration
            </span>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
              Intake Open
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
            {currentTermData.termName}: <span className="text-amber-400">{currentTermData.moduleTitle}</span>
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Lunar Season: <span className="text-amber-200 font-medium">{currentTermData.lunarSeason}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST, '/express-interest?programme=hysy30')}
            className="text-sm px-5 py-2.5 cursor-pointer"
          >
            <span>Express Interest</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <button
            onClick={() => setModalType('curriculum_outline')}
            className="px-4 py-2.5 rounded-md border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Request Curriculum Outline</span>
          </button>
        </div>
      </div>

      {/* Short Registration & Logistics Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm bg-slate-950/80 p-5 rounded-xl border border-slate-800/80">
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Dates & Term</p>
            <p className="text-slate-200 font-medium text-xs mt-0.5">{currentTermData.dates}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Time & Format</p>
            <p className="text-slate-200 font-medium text-xs mt-0.5">{currentTermData.sessionTime}</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Nine weekly sessions + Masjid retreat</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Venue</p>
            <p className="text-slate-200 font-medium text-xs mt-0.5">{currentTermData.venue}</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Retreat: 12–13 Sept 2026</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Ages & Delivery</p>
            <p className="text-slate-200 font-medium text-xs mt-0.5">15–18 years</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Parallel male & female circles</p>
          </div>
        </div>
      </div>

      {/* Module Summary Statement */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-sm text-slate-300 font-light leading-relaxed">
        The module moves from identity and purpose, through the inner life, to accountability and service — nine sessions built to be walked, not read about.
      </div>

      {/* Formation Arc Strip */}
      <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-amber-300 font-semibold uppercase tracking-widest font-sans flex-shrink-0">
          Formation Arc Sequence:
        </span>
        <div className="flex items-center gap-2 text-slate-200 font-medium flex-wrap justify-center sm:justify-start">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">Purpose</span>
          <span>&rarr;</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">Tazkiyyah</span>
          <span>&rarr;</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">Niyyah</span>
          <span>&rarr;</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">Khidmah</span>
        </div>
      </div>

      {/* Safeguarding & Lesson Plan Footer Note */}
      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        <span>Full lesson plans and Murabbi guides are shared with enrolled families and trained facilitators.</span>
      </div>

      <InquiryModal
        isOpen={Boolean(modalType)}
        onClose={() => setModalType(null)}
        type={modalType || 'express_interest'}
      />
    </div>
  );
};

