import React, { useState } from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';
import { Compass, ExternalLink, Sparkles, Heart, Shield, Layers, ZoomIn, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuadrantDetail {
  name: string;
  arabic: string;
  translation: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  icon: string;
  summary: string;
  diagnosticQuestion: string;
  digitalEraChallenge: string;
  spiritualRemedy: string;
  scripturalAnchor: string;
}

const QUADRANTS: QuadrantDetail[] = [
  {
    name: 'Qalb',
    arabic: 'الْقَلْب',
    translation: 'The Heart',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/40',
    bgGlow: 'from-rose-500/10 via-rose-600/5 to-transparent',
    icon: 'Heart',
    summary: 'The central moral and spiritual organ. Holds sincerity (Ikhlas), intentions (Niyyah), and divine orientation.',
    diagnosticQuestion: 'Am I doing this for Allah\'s pleasure, or for immediate social validation and praise?',
    digitalEraChallenge: 'Constant exposure to performative piety, algorithmic outrage, and comparison that darkens inner clarity.',
    spiritualRemedy: 'Daily silent Dhikr, private secret deeds (Sadaqah in secret), and audit of intentions before posting.',
    scripturalAnchor: '“Verily, in the remembrance of Allah do hearts find rest.” — Surah Ar-Ra’d (13:28)'
  },
  {
    name: 'ʿAql',
    arabic: 'الْعَقْل',
    translation: 'The Intellect & Discernment',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgGlow: 'from-amber-500/10 via-amber-600/5 to-transparent',
    icon: 'Compass',
    summary: 'The rational filter and faculty of discernment (Furqan). Verifies truth and restrains irrational desires.',
    diagnosticQuestion: 'Have I verified this claim (Tabayyun) before believing or sharing it?',
    digitalEraChallenge: 'Information overload, rage-bait headlines, short-attention dopamine loops, and echo-chamber bias.',
    spiritualRemedy: 'Deep slow reading of sacred texts, studying formal logic and adab, and pausing before reacting to news.',
    scripturalAnchor: '“O you who believe! If a troublemaker brings you news, verify it carefully.” — Surah Al-Hujurat (49:6)'
  },
  {
    name: 'Nafs',
    arabic: 'النَّفْس',
    translation: 'The Lower Self / Ego',
    color: 'text-sky-400',
    borderColor: 'border-sky-500/40',
    bgGlow: 'from-sky-500/10 via-sky-600/5 to-transparent',
    icon: 'Shield',
    summary: 'The seat of raw desire, pride, vanity, and instinct. Requires continuous discipline (Riyadah) and restraint.',
    diagnosticQuestion: 'Is my anger coming from defended pride, or genuine concern for justice and truth?',
    digitalEraChallenge: 'Endless vanity metrics (likes, views), instant gratification apps, and normalized self-absorption.',
    spiritualRemedy: 'Fasting, physical discipline, taking public responsibility for mistakes, and serving others humbly.',
    scripturalAnchor: '“And as for he who feared the standing before his Lord and restrained the soul from desire...” — Surah An-Nazi’at (79:40)'
  },
  {
    name: 'Ruh',
    arabic: 'الرُّوح',
    translation: 'The Spirit / Divine Breath',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgGlow: 'from-emerald-500/10 via-emerald-600/5 to-transparent',
    icon: 'Sparkles',
    summary: 'The noble transcendent spirit breathed into humanity by Allah. Seeks prayer, stillness, and eternity.',
    diagnosticQuestion: 'Does my current environment nourish my soul, or leave me spiritually drained?',
    digitalEraChallenge: 'Spiritual numbness caused by constant noise, late-night screen scrolling, and missed Tahajjud or Fajr.',
    spiritualRemedy: 'Late night quiet prayer (Tahajjud), solitary nature contemplation (Tafakkur), and Qur’anic recitations.',
    scripturalAnchor: '“And I breathed into him of My [created] spirit...” — Surah Al-Hijr (15:29)'
  }
];

interface SovereignCompassPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const SovereignCompassPage: React.FC<SovereignCompassPageProps> = ({ setCurrentPage }) => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantDetail | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 text-amber-400" /> REFLECTIVE TOOL
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          The Sovereign Compass
        </h1>

        <p className="text-xl sm:text-2xl font-serif text-amber-200/90 font-medium">
          Where are you today?
        </p>

        <div className="text-base sm:text-lg text-slate-300 font-light leading-relaxed space-y-4 pt-2 text-left sm:text-center max-w-2xl mx-auto">
          <p>
            Four structures. Aql, the reasoning mind. Qalb, the seat of intention. Nafs, the ego and its appetites. Ruh, the spirit that reaches toward Allah.
          </p>
          <p>
            Scan your state over the last twenty-four hours, calibrate each one honestly, and read the balance rather than the numbers.
          </p>
          <p className="text-amber-300/90 font-normal italic">
            This is not a personality test. Its value is exactly proportional to how honest you are with it.
          </p>
        </div>
      </div>

      {/* Embed Container */}
      <div className="w-full space-y-4">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2 sm:p-4 shadow-2xl overflow-hidden">
          <iframe
            src="https://the-sovereign-compass.ai.studio/"
            title="The Sovereign Compass"
            style={{ width: '100%', border: 0, borderRadius: '12px' }}
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full min-h-[100svh] md:min-h-[1400px]"
          />
        </div>

        <div className="w-full flex justify-end">
          <a
            href="https://the-sovereign-compass.ai.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-amber-400 underline underline-offset-4 transition-colors"
          >
            Trouble exporting your PDF? Open the Compass in a new tab →
          </a>
        </div>

        {/* Directly beneath links & notices */}
        <div className="space-y-2 px-2 text-xs sm:text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-slate-300 font-light italic">
              Your results are saved in your own browser. Use the same browser and device each week so your history stays together.
            </p>

            <a
              href="https://the-sovereign-compass.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors flex-shrink-0"
            >
              <span>Prefer full screen? Open it directly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Cross-link Card to Tazkiyyah Framework */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
              <Layers className="w-4 h-4" /> DEVELOPMENTAL FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Tazkiyyah Framework
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              The Compass shows you where you are. The Tazkiyyah Framework shows what the stage you are in is for.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Button
              onClick={() => setCurrentPage?.(Page.TAZKIYYAH, '/tazkiyyah')}
              variant="primary"
              className="px-6 py-3 text-sm shadow-lg shadow-amber-500/20"
            >
              <span>Explore the framework</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Interactive Quadrant Inspection Reference */}
      <div className="space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold text-amber-400 tracking-widest flex items-center justify-center gap-1.5">
            <ZoomIn className="w-4 h-4" /> Inner Faculty Reference
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            The Four Inner Faculties
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Understand the spiritual anatomy behind the diagnostic calibration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUADRANTS.map((quad) => (
            <motion.div
              key={quad.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedQuadrant(quad)}
              className={`bg-slate-950 p-6 sm:p-8 rounded-2xl border ${quad.borderColor} transition-all duration-300 cursor-pointer group shadow-xl relative overflow-hidden flex flex-col justify-between`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${quad.bgGlow} opacity-50 pointer-events-none`}></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-serif font-bold ${quad.color}`}>
                    {quad.arabic}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" /> Inspect
                  </span>
                </div>

                <div>
                  <h3 className={`text-2xl font-serif font-bold text-white group-hover:${quad.color} transition-colors`}>
                    {quad.name} <span className="text-xs font-normal text-slate-400">({quad.translation})</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-2">
                    {quad.summary}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong className="text-amber-400 font-semibold block text-[11px] uppercase tracking-wider">
                    Diagnostic Prompt:
                  </strong>
                  <p className="italic font-serif">"{quad.diagnosticQuestion}"</p>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>Inspect Spiritual Remedies</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QUADRANT ZOOM DETAIL MODAL */}
      <AnimatePresence>
        {selectedQuadrant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`bg-slate-950 border ${selectedQuadrant.borderColor} rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl w-full shadow-2xl relative space-y-6 my-auto text-slate-100`}
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className={`text-3xl font-serif font-bold ${selectedQuadrant.color}`}>
                    {selectedQuadrant.arabic}
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {selectedQuadrant.name}
                    </h3>
                    <p className="text-xs text-slate-400">{selectedQuadrant.translation}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedQuadrant(null)}
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scriptural Anchor */}
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs sm:text-sm italic font-serif leading-relaxed">
                {selectedQuadrant.scripturalAnchor}
              </div>

              {/* Diagnostic Breakdown */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h4 className="font-bold text-amber-400 uppercase tracking-wider text-xs">
                    Diagnostic Self-Reflection Question
                  </h4>
                  <p className="text-slate-200 font-light italic text-sm">
                    "{selectedQuadrant.diagnosticQuestion}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <h4 className="font-bold text-rose-400 uppercase tracking-wider text-xs">
                      Digital Era Vulnerability
                    </h4>
                    <p className="text-slate-300 font-light leading-relaxed text-xs">
                      {selectedQuadrant.digitalEraChallenge}
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-xs">
                      Prescribed Spiritual Remedy
                    </h4>
                    <p className="text-slate-300 font-light leading-relaxed text-xs">
                      {selectedQuadrant.spiritualRemedy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400">Sovereign Compass Formation Protocol</span>
                <Button onClick={() => setSelectedQuadrant(null)} variant="primary" className="text-xs px-5 py-2">
                  Close Inspection
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SovereignCompassPage;
