import React from 'react';
import { lunarGoverningStatement, lunarModules } from '../../data/lunarCurriculum';
import { Calendar, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const LunarCurriculumPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Moon className="w-3.5 h-3.5" /> Living Hijri Season Pedagogy
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          The Lunar Season Curriculum
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Aligning youth formation with the sacred rhythm of the Islamic lunar calendar rather than fixing spiritual themes permanently to Gregorian school terms.
        </p>
      </div>

      {/* Governing Statement Banner */}
      <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-2 h-full bg-amber-400"></div>
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
          Governing Pedagogical Principle
        </span>
        <blockquote className="text-xl sm:text-2xl font-serif font-semibold text-white leading-relaxed italic">
          "{lunarGoverningStatement}"
        </blockquote>
      </div>

      {/* Five Modules Overview */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">
            The Five Lunar Modules
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Each module responds directly to the spiritual state, demands, and opportunities of the living Hijri month.
          </p>
        </div>

        <div className="space-y-6">
          {lunarModules.map((mod) => (
            <div 
              key={mod.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-amber-500/40 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {mod.code}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full">
                      Lunar Season: {mod.lunarSeason}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {mod.title}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full inline-block">
                    Spiritual Movement: {mod.spiritualMovement}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                <div className="lg:col-span-7 space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Purpose</h4>
                    <p className="text-sm text-slate-200 font-medium">{mod.purpose}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {mod.description}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-900/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Key Spiritual Practices & Actions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {mod.keyPractices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Operational Note on Lunar Calendar Variability */}
      <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl text-xs text-slate-400 space-y-2 max-w-4xl mx-auto">
        <span className="font-semibold text-amber-300 block">Locality and Hijri Dates</span>
        <p>
          Lunar dates vary according to locality, moon sighting, and the calendar adopted by local Perth scholarly authorities. Sayyidina Omar Institute adjusts module scheduling dynamically based on the local Hijri moon sighting rather than rigid pre-calculated dates.
        </p>
      </div>

    </div>
  );
};

export default LunarCurriculumPage;
