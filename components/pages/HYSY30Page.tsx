import React from 'react';
import { Page } from '../../types';
import { siteConfig, imageManifest } from '../../data/siteData';
import { CurrentTermWidget } from '../CurrentTermWidget';
import Button from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';
import { 
  Compass, Heart, Shield, BookOpen, Sparkles, CheckCircle2, 
  ExternalLink, ChevronRight, HelpCircle, ArrowRight 
} from 'lucide-react';

interface HYSY30PageProps {
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

export const HYSY30Page: React.FC<HYSY30PageProps> = ({ setCurrentPage }) => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* 1. HERO HEADER & CENTRAL QUESTION */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" /> Flagship Youth Formation Programme
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Who are you becoming by 30?
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          A person does not suddenly become someone at 30. The daily habits, friendships, choices, worship, and responsibilities formed between 15 and 18 quietly construct that future person.
        </p>

        <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 max-w-2xl mx-auto text-sm text-amber-200/90 italic">
          "How You See Yourself at 30 is not career coaching or resume building. It is the work of character, faith, and accountable adulthood."
        </div>

        <div className="pt-2 flex justify-center gap-4">
          <Button onClick={() => setCurrentPage(Page.EXPRESS_INTEREST, '/express-interest?programme=hysy30')} variant="primary">
            <span>Express Interest for Next Intake</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <button 
            onClick={() => setCurrentPage(Page.LUNAR_CURRICULUM)}
            className="px-6 py-3 rounded-md border border-slate-700 text-slate-200 font-medium text-sm hover:bg-slate-900 transition-colors inline-flex items-center"
          >
            <span>View Lunar Curriculum</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
        <OptimizedImage 
          src={imageManifest.learningCircle.src} 
          alt={imageManifest.learningCircle.alt}
          className="w-full h-80 sm:h-96 md:h-[400px] object-cover"
          width={imageManifest.learningCircle.width}
          height={imageManifest.learningCircle.height}
          aspectRatio="16/9"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute bottom-6 left-6 right-6 text-left text-slate-300 text-xs sm:text-sm font-light">
          <span className="text-amber-400 font-medium">Small Group Tarbiyah Circle:</span> Youth engaged in guided reflection with Murabbis in Perth.
        </div>
      </div>

      {/* 2. PROGRAMME AUDIENCE & PARALLEL CIRCLES */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Programme Audience & Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Equal Seriousness for Young Men and Young Women
          </h2>
          <p className="text-slate-300 leading-relaxed font-light text-base">
            The programme serves high school students aged approximately 15 to 18. We operate with one unified formation purpose, a shared core curriculum, and equal seriousness about the spiritual, intellectual, and moral development of both young men and young women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800/80">
            <Shield className="w-5 h-5 text-amber-400 mb-2" />
            <h3 className="text-base font-serif font-bold text-white mb-1">Parallel Circles</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Separate, appropriately supported learning circles facilitated by trained male and female Murabbis.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800/80">
            <Heart className="w-5 h-5 text-amber-400 mb-2" />
            <h3 className="text-base font-serif font-bold text-white mb-1">Equal Care & Standards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The girls' pathway is built with identical depth, curriculum standards, and leadership opportunities.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800/80">
            <CheckCircle2 className="w-5 h-5 text-amber-400 mb-2" />
            <h3 className="text-base font-serif font-bold text-white mb-1">Parental Involvement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Parents are oriented before session 1 and kept informed of themes, actions, and progress throughout.
            </p>
          </div>
        </div>
      </div>

      {/* 3. FOUR PEDAGOGICAL FOUNDATIONS */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Educational Methodology
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Four Pedagogical Foundations
          </h2>
          <p className="text-slate-400 text-sm font-light">
            How we teach and cultivate character in small, reflective learning circles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
              1
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Tadabbur and Tafakkur</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Guided Qur’anic reflection, intentional noticing, silence, journaling, and self-examination. Teaching youth how to sit quietly with text and examine their own hearts.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
              2
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Tarbiyah Circles</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Small-group conversations formed through deep listening, adab, confidentiality, and mutual reminder. A space where hard questions can be asked honestly.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
              3
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Accountable Suhbah</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Safe and observable companionship with adult Murabbis who model responsibility, restraint, and empathy rather than merely delivering lectures.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
              4
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Basirah (Spiritual Sight)</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Learning to see beyond grades, career prestige, social media popularity, and short-term achievement towards eternal purpose and moral clarity.
            </p>
          </div>
        </div>
      </div>

      {/* 4. THE SOVEREIGN COMPASS INNER STRUCTURES */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Reflective Vocabulary
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            The Sovereign Compass Framework
          </h2>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            To practice muhasabah (self-examination), youth need a shared vocabulary. The Sovereign Compass introduces four inner structures derived from classical Islamic soul sciences:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Qalb (Heart)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The seat of moral orientation, intention, sincerity, and love. What is the heart attached to?
            </p>
          </div>

          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">ʿAql (Intellect)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Disciplined reasoning, verification, discernment, and distinguishing truth from falsehood.
            </p>
          </div>

          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Nafs (Ego/Self)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ego impulses, appetite, status anxiety, social media validation, and personal desires.
            </p>
          </div>

          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Ruh (Spirit)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Remembrance, tawakkul (trust in Allah), orientation to the Akhirah, and divine nearness.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 italic">
          * Note: The Sovereign Compass is an educational vocabulary for self-examination and character formation. It is not a clinical diagnostic, personality test, or independent religious doctrine.
        </p>
      </div>

      {/* 5. FORMATION BEYOND THE CLASSROOM */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white text-center">
          Formation Beyond the Classroom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h3 className="text-base font-serif font-bold text-white mb-2">Private Journaling & Weekly Actions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Small, unannounced acts of worship, habit tracking, and personal reflection exercises completed between weekly sessions.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h3 className="text-base font-serif font-bold text-white mb-2">Khidmah & Rehlah</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Community service projects assisting local masajid and families, alongside outdoor rehlah (recreation) built around fellowship.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h3 className="text-base font-serif font-bold text-white mb-2">Masjid Anchoring & Retreats</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connecting youth directly to congregation prayer and masjid life, with optional approved retreats subject to full parent consent.
            </p>
          </div>
        </div>
      </div>

      {/* 6. THE 30-YEAR VISION SEED */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Personal Formation Output
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            The 30-Year Vision Seed
          </h2>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            The programme does not ask young people to predict their career or fortune. Instead, participants construct an accountable 5-field personal seed following this sequence:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 mb-6">
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">1. WHY</span>
            <span className="text-slate-300">Before whom & for what do I live?</span>
          </div>
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">2. WHO</span>
            <span className="text-slate-300">What kind of person am I becoming?</span>
          </div>
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">3. HOW</span>
            <span className="text-slate-300">What practices & relationships form me?</span>
          </div>
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">4. WHAT</span>
            <span className="text-slate-300">What roles or work express this?</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-amber-400 font-bold block mb-1 text-sm">Field 1</span>
            <span className="text-xs text-slate-200 font-medium">Relationship with Allah</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-amber-400 font-bold block mb-1 text-sm">Field 2</span>
            <span className="text-xs text-slate-200 font-medium">Character & Inner State</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-amber-400 font-bold block mb-1 text-sm">Field 3</span>
            <span className="text-xs text-slate-200 font-medium">Family Responsibility</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-amber-400 font-bold block mb-1 text-sm">Field 4</span>
            <span className="text-xs text-slate-200 font-medium">Knowledge & Livelihood</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
            <span className="text-amber-400 font-bold block mb-1 text-sm">Field 5</span>
            <span className="text-xs text-slate-200 font-medium">Service & Contribution</span>
          </div>
        </div>
      </div>

      {/* 7. CURRENT TERM SCHEDULE */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-white text-center">
          Current Intake & Curriculum Schedule
        </h2>
        <CurrentTermWidget setCurrentPage={setCurrentPage} />
      </div>

    </div>
  );
};

export default HYSY30Page;
