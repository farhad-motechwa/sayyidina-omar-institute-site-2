import React, { useState } from 'react';
import { Page } from '../../types';
import { siteConfig, imageManifest, foundationRecord } from '../../data/siteData';
import { booksData } from '../../data/booksData';
import BookCover from '../BookCover';
import { CurrentTermWidget } from '../CurrentTermWidget';
import Button from '../ui/Button';
import { InfluencesZoomInspector } from '../InfluencesZoomInspector';
import { OptimizedImage } from '../ui/OptimizedImage';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Heart, Sparkles, Users, BookOpen, 
  Radio, Compass, ExternalLink, CheckCircle2, ChevronRight, HelpCircle, ZoomIn, Moon
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-amber-300 border border-amber-400/30 rounded-full bg-amber-400/5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Sayyidina Omar Institute for Character & Leadership
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
              Forming young Muslims for lives of <span className="text-amber-400 italic">faith, responsibility</span> and service.
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              Sayyidina Omar Institute nurtures young Muslims through purposeful education, accountable mentorship, reflection and service in Perth, Western Australia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button onClick={() => setCurrentPage(Page.PROGRAMMES)} variant="primary">
                <span>Explore Our Programmes</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button onClick={() => setCurrentPage(Page.EXPRESS_INTEREST)} variant="outline">
                <span>Express Interest</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Hero Banner Image */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative group aspect-[16/9]"
          >
            <OptimizedImage 
              src={imageManifest.heroBanner.src} 
              alt={imageManifest.heroBanner.alt} 
              className="w-full h-72 sm:h-96 md:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              width={imageManifest.heroBanner.width}
              height={imageManifest.heroBanner.height}
              aspectRatio="16/9"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left text-slate-300 text-xs sm:text-sm font-light">
              <span className="text-amber-400 font-medium">Perth Youth Formation Circle:</span> Mentors and participants engaging in reflection and suhbah.
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. WHY SOI EXISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Institutional Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-snug">
              A connected formation ecosystem, not an isolated activity.
            </h2>
            <p className="text-slate-300 leading-relaxed font-light text-base">
              Young Muslims today do not suffer from a lack of digital information; they suffer from a lack of integrated formation. The Institute was established to bridge knowledge with real-world character, accountability, and spiritual grounding.
            </p>
            <p className="text-slate-300 leading-relaxed font-light text-base">
              Inspired by the moral legacy of Sayyidina Umar ibn al-Khattab RA, we emphasize taqwa, courage, justice, and service to others—rooted in local Perth community life.
            </p>

            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <OptimizedImage 
                src={imageManifest.ecosystemDiscussion.src} 
                alt={imageManifest.ecosystemDiscussion.alt}
                isThumb={true}
                className="w-full h-48 object-cover object-center"
                width={800}
                height={450}
                aspectRatio="16/9"
                loading="lazy"
              />
              <div className="p-2.5 bg-slate-950 text-[11px] text-slate-400 italic">
                Active group dialogue during a Perth youth formation circle.
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-4 text-sm font-medium text-amber-300">
              <button onClick={() => setCurrentPage(Page.FOUNDING_ESSAY)} className="inline-flex items-center hover:underline">
                Read More About Our Foundations <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-serif font-bold text-white mb-2">Tawhid & Sincerity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grounding all action in devotion to Allah and purifying inner intentions before external achievement.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-serif font-bold text-white mb-2">Amanah & Justice</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cultivating courage, moral responsibility, and accountability to protect community trust.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div>
                <Users className="w-6 h-6 text-amber-400 mb-3" />
                <h3 className="text-lg font-serif font-bold text-white mb-2">Accountable Suhbah</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safe, observable companionship with mature adult Murabbis who model responsibility.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-800">
                <OptimizedImage 
                  src={imageManifest.accountableSuhbah.src} 
                  alt={imageManifest.accountableSuhbah.alt} 
                  isThumb={true}
                  className="w-full h-24 object-cover" 
                  width={800}
                  height={600}
                  aspectRatio="16/9"
                  loading="lazy" 
                />
                <div className="p-1.5 bg-slate-900 text-[10px] text-amber-300/90 text-center font-serif italic">
                  The mentor is inside the circle, not in front of it.
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div>
                <Heart className="w-6 h-6 text-amber-400 mb-3" />
                <h3 className="text-lg font-serif font-bold text-white mb-2">Khidmah & Service</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Translating learning into practical community contribution and support for the vulnerable.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-800">
                <OptimizedImage 
                  src={imageManifest.khidmahFoodService.src} 
                  alt={imageManifest.khidmahFoodService.alt} 
                  isThumb={true}
                  className="w-full h-24 object-cover" 
                  width={800}
                  height={600}
                  aspectRatio="16/9"
                  loading="lazy" 
                />
                <div className="p-1.5 bg-slate-900 text-[10px] text-amber-300/90 text-center font-serif italic">
                  Youth serving food at an outdoor community stall.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 THE CALENDAR WE TEACH BY (HIJRI SEASON PEDAGOGY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950/90 p-8 md:p-12 rounded-3xl border border-amber-500/30 shadow-2xl space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest font-sans">
            <Moon className="w-3.5 h-3.5 text-amber-400" /> THE CALENDAR WE TEACH BY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Formation that follows the moon, <span className="italic text-amber-400">not the school term</span>
          </h2>
          <div className="space-y-4 text-slate-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Most programmes run on Gregorian quarters, which means Ramadan is taught whenever it happens to land in the timetable, and the sacred months arrive as topics rather than as seasons.
            </p>
            <p>
              The Institute runs on the Hijri calendar. Terms are built around lunar seasons, so Ramadan is taught in Ramadan, the sacred months are taught while they are sacred, and Hajj is taught while the pilgrims are walking. Young people learn to feel the year the way a Muslim year is actually shaped — not as a set of dates to remember, but as a rhythm they are living inside.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 font-serif italic">
            "Indeed, the number of months with Allah is twelve months in the register of Allah." — Qur'an 9:36
          </div>
        </div>

        {/* Static Typographic Band Showing the 12 Lunar Months */}
        <div className="pt-2 border-t border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 font-sans flex flex-wrap items-center justify-between gap-2">
            <span>Lunar Year Rhythm</span>
            <span className="text-amber-400 font-medium">Active Season: Term 3 (11 Safar to 8 Rabi' al-Thani 1448)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs font-sans">
            {[
              { num: '01', name: 'Muharram', note: 'Sacred Month', active: false },
              { num: '02', name: 'Safar', note: 'Active Term 3', active: true },
              { num: '03', name: "Rabi' al-Awwal", note: 'Active Term 3', active: true },
              { num: '04', name: "Rabi' al-Thani", note: 'Active Term 3', active: true },
              { num: '05', name: 'Jumada al-Awwal', note: 'Term 4 Intake', active: false },
              { num: '06', name: 'Jumada al-Thani', note: 'Term 4 Intake', active: false },
              { num: '07', name: 'Rajab', note: 'Sacred Month', active: false },
              { num: '08', name: "Sha'ban", note: 'Pre-Ramadan', active: false },
              { num: '09', name: 'Ramadan', note: 'Month of Fasting', active: false },
              { num: '10', name: 'Shawwal', note: 'Eid & Fasting', active: false },
              { num: '11', name: "Dhu al-Qa'dah", note: 'Sacred Month', active: false },
              { num: '12', name: 'Dhu al-Hijjah', note: 'Sacred Month & Hajj', active: false },
            ].map((m) => (
              <div 
                key={m.num} 
                className={`p-3 rounded-xl border transition-all ${
                  m.active 
                    ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg shadow-amber-500/10' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-amber-400/80 font-mono mb-1">
                  <span>{m.num}</span>
                  {m.active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>}
                </div>
                <div className={`font-semibold text-xs ${m.active ? 'text-amber-300' : 'text-slate-300'}`}>
                  {m.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 font-light">
                  {m.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE INFLUENCES ZOOM INSPECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950/40 p-6 md:p-10 rounded-3xl border border-slate-800/80 shadow-2xl">
        <InfluencesZoomInspector setCurrentPage={setCurrentPage} />
      </section>

      {/* 2.8 THE FOUNDATION HAS ALREADY BEEN LAID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-10 md:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
              INSTITUTIONAL FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              The Foundation Has Already Been Laid
            </h2>
            <div className="space-y-4 text-slate-300 font-serif text-base sm:text-lg leading-relaxed">
              <p>
                Sayyidina Omar Institute began with a concern about what education is forming within our young people. That concern became Reclaiming Education, developed further through the How You See Yourself at 30 programme, and has since grown into an integrated body of books, educational frameworks, youth formation and Murabbi development.
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Since January 2025, this work has been personally funded and developed by the founder without remuneration. The first programmes have been delivered, the educational foundation has been written, and the work is now moving towards a sustainable institutional footing.
              </p>
            </div>
          </div>

          {/* Responsive evidence grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 pt-2">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-2">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                {foundationRecord.publishedBooks}
              </div>
              <div className="text-xs font-sans text-slate-400 leading-snug">
                Published educational books
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-2">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                {foundationRecord.programmeTerms}
              </div>
              <div className="text-xs font-sans text-slate-400 leading-snug">
                Programme terms delivered
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-2">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                {foundationRecord.weekendSessions}
              </div>
              <div className="text-xs font-sans text-slate-400 leading-snug">
                Weekend formation sessions
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-2">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                {foundationRecord.contributedHours.publicDisplay}
              </div>
              <div className="text-xs font-sans text-slate-400 leading-snug">
                Founder hours contributed
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-2">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                {foundationRecord.programmeTravelKm.toLocaleString()} km
              </div>
              <div className="text-xs font-sans text-slate-400 leading-snug">
                Programme-related travel
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => setCurrentPage(Page.FOUNDATION_STEWARDSHIP, '/foundation-and-stewardship')}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm font-sans transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Read Our Foundation and Stewardship Record</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={siteConfig.stripeDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-amber-400/80 text-slate-300 hover:text-white font-medium text-xs font-sans transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Support the Next Stage</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. CURRENT TERM COMPONENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CurrentTermWidget setCurrentPage={setCurrentPage} />
      </section>

      {/* 4. FEATURED PROGRAMMES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Formation Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Connected Initiatives
          </h2>
          <p className="text-slate-400 text-base font-light">
            Each initiative targets a specific dimension of personal, spiritual, and community maturity. Hover or click to zoom in and explore details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: HYSY30 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Ages 15–18 Youth
                </span>
                <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                How You See Yourself at 30
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Our flagship 9-week formation journey helping high school students build habits, relationships, and vision for adulthood.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage(Page.HYSY30)}
              className="inline-flex items-center text-xs font-semibold text-amber-300 group-hover:text-amber-200 mt-2"
            >
              Explore HYSY30 <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Murabbi Formation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Adult Mentors
                </span>
                <Users className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Murabbi Formation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Preparing and holding accountable the adult guides entrusted to accompany young people with active listening and boundaries.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage(Page.MURABBI_FORMATION)}
              className="inline-flex items-center text-xs font-semibold text-amber-300 group-hover:text-amber-200 mt-2"
            >
              Explore Murabbi Pathway <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: Project Amanah */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Pilot Initiative
                </span>
                <BookOpen className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Project Amanah
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Systems thinking, problem-based learning, discernment, and ethical technology usage for real community problems.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage(Page.PROJECT_AMANAH)}
              className="inline-flex items-center text-xs font-semibold text-amber-300 group-hover:text-amber-200 mt-2"
            >
              Learn About Project Amanah <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 4.5 BOOKS TEASER BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border-2 border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
                THE PROGRAMME, IN YOUR HANDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Four short books from the formation arc
              </h2>
              <p className="text-sm text-slate-300 font-light max-w-2xl">
                Nine Saturdays in Perth isn't possible for everyone. These four short books carry the same formation arc — for a young person to read alone, or for a family to read together.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage(Page.BOOKS_SERIES)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Explore the series</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Four Small Book Covers in a Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {booksData.map((b) => (
              <div 
                key={b.id}
                onClick={() => setCurrentPage(Page.BOOKS_SERIES)}
                className="cursor-pointer transition-transform hover:scale-105 flex flex-col items-center space-y-2 group"
              >
                <BookCover book={b} size="sm" />
                <span className="text-[11px] font-serif font-bold text-slate-200 group-hover:text-amber-300 text-center line-clamp-1">
                  {b.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. YOUNG MEN & YOUNG WOMEN IN PARALLEL FORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Inclusive Educational Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Young Men and Young Women in Formation
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                One formation purpose, a shared core curriculum, appropriately supported learning circles, and equal seriousness about the development of young men and young women.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Parallel learning circles facilitated by trained male and female Murabbis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Gender-appropriate experiential arrangements and retreat safeguards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Full transparency and engagement with parents and guardians.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-900/80 p-6 rounded-xl border border-slate-800 text-center space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-800 shadow-md">
                <OptimizedImage 
                  src={imageManifest.suhaidiPresenting.src}
                  alt={imageManifest.suhaidiPresenting.alt}
                  isThumb={true}
                  className="w-full h-44 object-cover object-center"
                  width={800}
                  height={450}
                  aspectRatio="16/9"
                  loading="lazy"
                />
                <div className="p-2 bg-slate-950 text-[10px] text-amber-300/90 italic font-serif">
                  Parallel classroom learning circle featuring Sovereign Compass framework on screen.
                </div>
              </div>

              <div className="pt-1 space-y-2">
                <ShieldCheck className="w-7 h-7 text-amber-400 mx-auto" />
                <h3 className="text-lg font-serif font-bold text-white">Parents & Safeguarding</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safeguarding is an amanah. All conversations remain observable and interruptible, with strict Working With Children Check compliance.
                </p>
                <button
                  onClick={() => setCurrentPage(Page.PARENTS_SAFEGUARDING)}
                  className="text-xs font-semibold text-amber-300 hover:underline pt-1 inline-block"
                >
                  Read Our Safeguarding Posture &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 FOUNDING ESSAY FEATURED BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
              THE FOUNDING ESSAY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Work of Becoming
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Why Sayyidina Omar Institute is looking beyond what young people know to who they are becoming.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage(Page.FOUNDING_ESSAY)}
            className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-semibold text-sm hover:bg-amber-300 transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Read Founding Essay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. SOI RADIO & RESOURCES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Continuous Public Learning
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              SOI Radio & Reflections
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Listen live to 24/7 broadcasts featuring recitations, educational discourse, podcasts, and reflections for the Perth community and beyond.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setCurrentPage(Page.RADIO)}
              className="px-6 py-3 rounded-md bg-amber-400 text-slate-950 font-semibold text-sm hover:bg-amber-300 transition-colors flex items-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>Listen Live Stream</span>
            </button>
            <button
              onClick={() => setCurrentPage(Page.RESOURCES)}
              className="px-6 py-3 rounded-md border border-slate-700 text-slate-200 font-medium text-sm hover:bg-slate-900 transition-colors"
            >
              Browse Articles
            </button>
          </div>
        </div>
      </section>

      {/* 7. EXPRESSION OF INTEREST CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl font-serif font-bold text-white">
              Ready to Register or Connect?
            </h2>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Whether you are a parent exploring options for your high school student, an adult interested in Murabbi formation, or a community partner, we invite you to express interest.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => setCurrentPage(Page.EXPRESS_INTEREST)} variant="primary">
                <span>Register Interest Now</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button onClick={() => setCurrentPage(Page.CONTACT)} variant="secondary">
                Contact the Institute
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
