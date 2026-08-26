import React, { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ZoomIn, ZoomOut, Sparkles, Compass, Shield, Heart, BookOpen, 
  Moon, MapPin, X, ArrowRight, CheckCircle2, Quote, Layers
} from 'lucide-react';
import Button from './ui/Button';

export interface InfluenceItem {
  id: string;
  category: 'Moral Legacy' | 'Inner Soul Sciences' | 'Pedagogy & Adab' | 'Living Rhythm' | 'Local Khidmah';
  title: string;
  subtitle: string;
  iconName: string;
  shortDescription: string;
  quote: string;
  quoteAuthor: string;
  zoomDetails: {
    corePrinciples: string[];
    practicalApplication: string;
    impactOnYouth: string;
    keyTakeaway: string;
  };
  accentColor: string;
  badge: string;
}

export const INFLUENCES_DATA: InfluenceItem[] = [
  {
    id: 'umar-legacy',
    category: 'Moral Legacy',
    title: 'The Umaric Standard (Sayyidina Umar RA)',
    subtitle: 'Courage, Taqwa, Justice & Radical Muhasabah',
    iconName: 'Shield',
    shortDescription: 'Unflinching personal accountability paired with deep spiritual humility and public service.',
    quote: "Account yourselves before you are taken to account, and weigh your deeds before they are weighed against you.",
    quoteAuthor: "Sayyidina Umar ibn al-Khattab RA",
    zoomDetails: {
      corePrinciples: [
        'Radical Self-Accountability (Muhasabah)',
        'Unwavering Defense of Truth and Justice',
        'Radical Humility despite Leadership Position',
        'Direct Care for the Poor & Vulnerable in Secret'
      ],
      practicalApplication: 'Youth audit their daily habits, speech, and privacy, holding themselves accountable before others do.',
      impactOnYouth: 'Replaces passive victimhood and social media posture with courageous ownership of one\'s faith and actions.',
      keyTakeaway: 'Leadership begins with mastering one\'s own ego and standing firmly for justice.'
    },
    accentColor: 'from-amber-500/20 via-amber-600/10 to-transparent border-amber-500/40 text-amber-300',
    badge: 'Foundational Inspiration'
  },
  {
    id: 'sovereign-compass',
    category: 'Inner Soul Sciences',
    title: 'The Sovereign Compass (Qalb, ʿAql, Nafs, Ruh)',
    subtitle: 'Classic Islamic Soul Sciences for the Digital Era',
    iconName: 'Compass',
    shortDescription: 'Reflective framework to discern between divine orientation, intellectual clarity, and ego impulses.',
    quote: "Verily in the body there is a morsel of flesh; if it is sound, the whole body is sound — and that is the Heart.",
    quoteAuthor: "Prophet Muhammad ﷺ",
    zoomDetails: {
      corePrinciples: [
        'Qalb (Heart): Sincerity, intention, and divine orientation',
        'ʿAql (Intellect): Discernment, logic, and verification (Tabayyun)',
        'Nafs (Ego/Self): Desires, status anxiety, and vanity',
        'Ruh (Spirit): Transcendence, prayer, and inner peace'
      ],
      practicalApplication: 'Youth use the 4 inner structures to map their emotional triggers, digital consumption, and intentions.',
      impactOnYouth: 'Provides immunity against algorithmic outrage, social comparison, and identity confusion.',
      keyTakeaway: 'Mastery over the self requires understanding which inner voice is driving your decisions.'
    },
    accentColor: 'from-sky-500/20 via-sky-600/10 to-transparent border-sky-500/40 text-sky-300',
    badge: 'Reflective Framework'
  },
  {
    id: 'tarbiyah-adab',
    category: 'Pedagogy & Adab',
    title: 'Tarbiyah & Adab Before Information',
    subtitle: 'Formation Requires More Than Instant Data',
    iconName: 'BookOpen',
    shortDescription: 'In an era of endless online lectures, lived mentorship and refined manners turn knowledge into character.',
    quote: "Knowledge without adab is like fire without fuel; adab without knowledge is like a body without a soul.",
    quoteAuthor: "Classical Islamic Adab Proverb",
    zoomDetails: {
      corePrinciples: [
        'Four-Pillar Model: ʿIlm, ʿIbadah, Adab, Khidmah',
        'Accountable Murabbi Accompaniment',
        'Observable & Interruptible Mentorship Spaces',
        'Small Reflective Circles over Mass Seminars'
      ],
      practicalApplication: 'Weekly circles emphasize listening, speech control, respect for elders, and confidential peer support.',
      impactOnYouth: 'Transforms raw religious information into humble, beautiful behavior in the home and community.',
      keyTakeaway: 'Character is not taught through lectures alone; it is caught through companionship.'
    },
    accentColor: 'from-emerald-500/20 via-emerald-600/10 to-transparent border-emerald-500/40 text-emerald-300',
    badge: 'Educational Methodology'
  },
  {
    id: 'lunar-rhythm',
    category: 'Living Rhythm',
    title: 'Living Hijri Season Pedagogy',
    subtitle: 'Attuning Formation to Sacred Lunar Months',
    iconName: 'Moon',
    shortDescription: 'Moving away from static Gregorian quarters to sync spiritual themes with living Islamic months.',
    quote: "Indeed, the number of months with Allah is twelve months in the register of Allah.",
    quoteAuthor: "Surah At-Tawbah (9:36)",
    zoomDetails: {
      corePrinciples: [
        'Module 1: Muharram & Safar — Intention & Migration',
        'Module 2: Rabiʿ al-Awwal & Thani — Prophetic Love & Character',
        'Module 3: Rajab & Shaʿban — Purification & Preparation',
        'Module 4: Ramadan — Qur’anic Immersion & Retreat',
        'Module 5: Shawwal & Dhul Hijjah — Perseverance & Sacrifice'
      ],
      practicalApplication: 'Youth shift their goals and reflection exercises according to the lunar seasons and sacred nights.',
      impactOnYouth: 'Fosters deep connection to the Islamic calendar and natural temporal rhythms.',
      keyTakeaway: 'Spiritual development follows a living seasonal rhythm, not an arbitrary corporate calendar.'
    },
    accentColor: 'from-purple-500/20 via-purple-600/10 to-transparent border-purple-500/40 text-purple-300',
    badge: 'Seasonal Alignment'
  },
  {
    id: 'perth-khidmah',
    category: 'Local Khidmah',
    title: 'Perth & Australian Muslim Identity',
    subtitle: 'Grounded Local Service in Western Australia',
    iconName: 'Heart',
    shortDescription: 'Empowering youth to actively serve local Perth masajid, families, and wider Australian society.',
    quote: "The best of people are those who are most beneficial to people.",
    quoteAuthor: "Prophet Muhammad ﷺ",
    zoomDetails: {
      corePrinciples: [
        'Active Khidmah (Service) in local Perth communities',
        'Confident, articulate Australian Muslim Identity',
        'Masjid Anchoring & Youth Circle Leadership',
        'Parental Partnership & Family Honor'
      ],
      practicalApplication: 'Youth organize community cleanups, food distribution, masjid volunteer efforts, and environmental care.',
      impactOnYouth: 'Builds self-worth through giving, creating active contributors rather than disengaged critics.',
      keyTakeaway: 'Faith is validated through selflessness and active service to those around us.'
    },
    accentColor: 'from-rose-500/20 via-rose-600/10 to-transparent border-rose-500/40 text-rose-300',
    badge: 'Local Contribution'
  }
];

interface InfluencesZoomInspectorProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const InfluencesZoomInspector: React.FC<InfluencesZoomInspectorProps> = ({ setCurrentPage }) => {
  const [activeInfluence, setActiveInfluence] = useState<InfluenceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Moral Legacy', 'Inner Soul Sciences', 'Pedagogy & Adab', 'Living Rhythm', 'Local Khidmah'];

  const filteredInfluences = filterCategory === 'All' 
    ? INFLUENCES_DATA 
    : INFLUENCES_DATA.filter(item => item.category === filterCategory);

  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Shield': return <Shield className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Moon': return <Moon className={className} />;
      case 'Heart': return <Heart className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <ZoomIn className="w-3.5 h-3.5 text-amber-400" /> Interactive Influences Inspector
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          The Foundations Shaping Our Pedagogy
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Explore the core spiritual, moral, and philosophical influences behind Sayyidina Omar Institute. Click any card to <strong className="text-amber-300 font-medium">Zoom In</strong> for deep principles, scriptural quotes, and youth applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              filterCategory === cat
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold scale-105'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Influences Cards with Zoom Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredInfluences.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              if (item.id === 'sovereign-compass' && setCurrentPage) {
                setCurrentPage(Page.COMPASS, '/compass');
                return;
              }
              setActiveInfluence(item);
              setZoomLevel(1);
            }}
            className={`bg-slate-950 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-500/10 ${item.accentColor}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-amber-300">
                  {item.badge}
                </span>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                  {renderIcon(item.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light">{item.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                {item.shortDescription}
              </p>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs italic text-slate-300 flex items-start gap-2">
                <Quote className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>"{item.quote}"</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span className="inline-flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5" />
                Zoom in to Inspect
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ZOOM MODAL DETAIL INSPECTOR */}
      <AnimatePresence>
        {activeInfluence && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: zoomLevel, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 md:p-10 max-w-3xl w-full shadow-2xl relative space-y-6 my-auto text-slate-100 overflow-hidden ${activeInfluence.accentColor}`}
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

              {/* Top Modal Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {activeInfluence.category}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    Zoom Inspection Mode
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomLevel(prev => prev === 1 ? 1.05 : 1)}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 text-xs flex items-center gap-1 transition-colors"
                    title="Toggle Magnify"
                  >
                    {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
                    <span className="hidden sm:inline">{zoomLevel === 1 ? 'Magnify' : 'Reset'}</span>
                  </button>

                  <button
                    onClick={() => setActiveInfluence(null)}
                    className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Main Title & Quote */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                    {renderIcon(activeInfluence.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                      {activeInfluence.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light">{activeInfluence.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/20 text-slate-200 space-y-2 relative">
                  <Quote className="w-6 h-6 text-amber-400/30 absolute top-4 right-4" />
                  <p className="text-sm sm:text-base font-serif italic leading-relaxed text-amber-200">
                    "{activeInfluence.quote}"
                  </p>
                  <p className="text-xs text-amber-400 font-semibold tracking-wider text-right">
                    — {activeInfluence.quoteAuthor}
                  </p>
                </div>
              </div>

              {/* Deep Zoom Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-2 text-xs">
                {/* Principles */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" /> Core Principles & Pillars
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {activeInfluence.zoomDetails.corePrinciples.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Youth Impact & Application */}
                <div className="space-y-4">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Practical Youth Application
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-light">
                      {activeInfluence.zoomDetails.practicalApplication}
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Transformational Impact
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-light">
                      {activeInfluence.zoomDetails.impactOnYouth}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Takeaway & Close Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="text-xs text-slate-400">
                  <strong className="text-amber-300 font-semibold">Key Takeaway: </strong>
                  <span>{activeInfluence.zoomDetails.keyTakeaway}</span>
                </div>
                <Button onClick={() => setActiveInfluence(null)} variant="primary" className="text-xs px-6 py-2.5">
                  Done Inspecting
                </Button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfluencesZoomInspector;
