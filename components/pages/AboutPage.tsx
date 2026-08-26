import React from 'react';
import { Page } from '../../types';
import { siteConfig, imageManifest } from '../../data/siteData';
import Button from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';
import { 
  ShieldCheck, Heart, Sparkles, Compass, Users, CheckCircle2, ArrowRight, ExternalLink, BookOpen 
} from 'lucide-react';

interface AboutPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
          INSTITUTIONAL FOUNDATIONS
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          About the Sayyidina Omar Institute
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Inspired by the moral, administrative, and spiritual legacy of Sayyidina Umar ibn al-Khattab (RA).
        </p>
      </div>

      {/* 2. OUR STORY (Task 5a) */}
      <section id="our-story" className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-6 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          OUR STORY
        </span>
        <h2 className="text-3xl font-serif font-bold text-white">
          Why the Institute Was Formed
        </h2>
        <div className="space-y-4 text-slate-300 font-light text-base leading-relaxed max-w-4xl">
          <p>
            Sayyidina Omar Institute grew out of years of teaching, community work and heartbreak. We saw capable young Muslims who excelled in school but felt hollow inside. We saw families struggling to keep faith at the centre while living in a fast, secular society.
          </p>
          <p>
            Out of these concerns, the Institute was formed as a quiet, intentional space where youth could rediscover their fitrah, ask honest questions, and learn from mentors who walk beside them, not above them.
          </p>
        </div>
      </section>

      {/* 3. THE FOUNDING STORY (Task 5b - bolded terms in gold accent color) */}
      <section id="founding-story" className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl relative">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          ORIGINS & VISION
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          The Founding Story
        </h2>
        <div className="space-y-4 text-slate-300 font-light text-base leading-relaxed max-w-4xl">
          <p>
            The inception of the Sayyidina Omar Institute was not merely a reaction to social symptoms, but an intentional return to the <strong className="text-amber-300 font-semibold">Architecture of Justice</strong>. Our name is a tribute to the second Caliph, Sayyidina Omar ibn al-Khattab (RA), whose character serves as the primary narrative model for our work. He was the protector of the Deen, a leader whose transition from a seeker to a transformative statesman mirrors the arduous journey of a <strong className="text-amber-300 font-semibold">Murabbi</strong>.
          </p>
          <p>
            In our early observations, we identified a quiet erosion of certainty among the next generation. We realised that the transmission of information was insufficient if the soul was not internally ordered. We looked to the legacy of Sayyidina Omar (RA), who understood that true governance begins within the heart. He was a man who feared the weight of his <strong className="text-amber-300 font-semibold">Amanah</strong> more than any worldly consequence, walking the streets of Medina in the deep of night to ensure that the vulnerable were seen and protected.
          </p>
          <p>
            This historical legacy forms our modern foundation. We seek to cultivate <strong className="text-amber-300 font-semibold">Sovereign Leadership</strong>: a state where the mentor is not merely a role model, but an individual whose external accountability is driven by a profound internal submission to the Divine. The <strong className="text-amber-300 font-semibold">Adab</strong> required for such a task is significant, as it honours the trust placed in us by our elders and the sacred potential of the children in our care.
          </p>
          <p>
            We do not merely provide a programme: we are building a structure to protect the <strong className="text-amber-300 font-semibold">Fitrah</strong>. Like the administrative and moral systems established by Sayyidina Omar (RA), our work is designed to ensure community resilience through the formation of mentors who are spiritually anchored and morally uncompromising.
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <button
              onClick={() => setCurrentPage?.(Page.FOUNDING_ESSAY)}
              className="text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors inline-flex items-center gap-1.5"
            >
              <span>The fuller argument behind this is set out in The Work of Becoming →</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOUNDATION & STEWARDSHIP CARD */}
      <section id="foundation-stewardship" className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 space-y-4 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          INSTITUTIONAL ACCOUNTABILITY
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Foundation and Stewardship
        </h2>
        <p className="text-slate-300 font-light text-base leading-relaxed max-w-3xl">
          See what has already been built, how the early work was carried, and why SOI is moving towards a sustainable institutional foundation.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setCurrentPage?.(Page.FOUNDATION_STEWARDSHIP, '/foundation-and-stewardship')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
          >
            <span>Read the Foundation and Stewardship Record</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. FOUR KEYS, ONE LIFE (Task 5H) */}
      <section id="four-keys" className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
            THE ARC OF FORMATION
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Four keys, one life
          </h2>
          <p className="text-slate-300 font-light text-base max-w-3xl leading-relaxed">
            The Institute's four keys are not an abstract framework. They trace the life of the man whose name it carries. Sayyidina Omar ibn al-Khattab (RA) did not arrive complete. He was formed — and the shape of that formation is the shape of our programme, and of these four books.
          </p>
        </div>

        {/* 4 Rows with Gold Left Borders */}
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-amber-400 border-y border-r border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs font-bold text-amber-400 gap-2">
              <span>KEY 1: PURPOSE</span>
              <span className="px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-slate-300 font-normal">Book One: Who Are You Becoming?</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Who are you becoming?</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              <strong className="text-amber-300 font-medium">In the life of Sayyidina Omar (RA):</strong> A man of enormous capability before Islam, pointed in a direction he had not examined. Force without orientation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-rose-400 border-y border-r border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs font-bold text-rose-400 gap-2">
              <span>KEY 2: TAZKIYYAH</span>
              <span className="px-2 py-0.5 rounded bg-rose-400/10 border border-rose-400/20 text-slate-300 font-normal">Book Two: Tazkiyyah</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white">The heart returns</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              <strong className="text-amber-300 font-medium">In the life of Sayyidina Omar (RA):</strong> The turning at his sister's house, hearing the Qur'an recited. Not the manufacture of belief but the uncovering of something the heart already held.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-sky-400 border-y border-r border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs font-bold text-sky-400 gap-2">
              <span>KEY 3: NIYYAH</span>
              <span className="px-2 py-0.5 rounded bg-sky-400/10 border border-sky-400/20 text-slate-300 font-normal">Book Three: Niyyah</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white">What you carry into the work</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              <strong className="text-amber-300 font-medium">In the life of Sayyidina Omar (RA):</strong> The hadith that governs all intention — <em>actions are but by intentions</em> — is narrated by Umar himself, and Imam al-Bukhari chose it to open his entire collection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-emerald-400 border-y border-r border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs font-bold text-emerald-400 gap-2">
              <span>KEY 4: KHIDMAH</span>
              <span className="px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20 text-slate-300 font-normal">Book Four: Khidmah</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white">What you carry toward others</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              <strong className="text-amber-300 font-medium">In the life of Sayyidina Omar (RA):</strong> Caliph of an expanding state, walking Medina at night, carrying the sack of flour on his own back rather than delegating it.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-amber-200/90 italic font-serif text-sm leading-relaxed text-center">
          "Purpose without a purified heart is ambition. A purified heart without sincere intention is sentiment. Sincere intention that never becomes service was never finished. Umar's life holds all four together. That is the standard the Institute works toward."
        </div>
      </section>

      {/* 5. OUR VISION & OUR MISSION (Tasks 5c, 5d) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            OUR VISION
          </span>
          <h2 className="text-2xl font-serif font-bold text-white">
            Future Horizon
          </h2>
          <p className="text-slate-300 font-light text-base leading-relaxed">
            A generation of Muslims who live as people of taqwa, justice and mercy, grounded in the Qur'an and Sunnah, able to navigate modern life without losing their soul.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            OUR MISSION
          </span>
          <h2 className="text-2xl font-serif font-bold text-white">
            Core Commitments
          </h2>
          <ul className="space-y-2 text-sm text-slate-300 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>To connect youth with mentors who embody prophetic character</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>To anchor education, leadership and ambition in Tawheed and ihsan</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>To design programs that integrate knowledge, reflection and action</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>To build a network of Muslims committed to serving their communities</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. OUR TEAM (Task 5e) */}
      <section id="our-team" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            INSTITUTIONAL LEADERSHIP
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Our Team & Guidance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Advisor Sheikh Yusuf Parker */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-amber-400/40 flex items-center justify-center font-serif font-bold text-amber-400 text-lg">
                  SYP
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 font-sans">ADVISOR</span>
                  <h3 className="text-xl font-serif font-bold text-white">Sheikh Yusuf Parker</h3>
                  <p className="text-xs text-slate-400">Madrasah Mudir & Imam, Masjid Alhidayah Centre Wangara</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Sheikh Yusuf Parker is the Advisor for the Institute. He is the Madrasah Mudir and Imam of Masjid Alhidayah Centre in Wangara. Together with the Founder and other community leaders, he was a core founder of Alhidayah Centre.
                </p>
                <p>
                  He currently serves as an Educator at the Australian Islamic College. His guidance ensures that the Institute's direction remains true to its values of knowledge, character, and service.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Founder Mohammad Farhad Omar */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-amber-400/40 flex items-center justify-center font-serif font-bold text-amber-400 text-lg">
                  MFO
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 font-sans">FOUNDER</span>
                  <h3 className="text-xl font-serif font-bold text-white">Mohammad Farhad Omar</h3>
                  <p className="text-xs text-slate-400">Author & Educator</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Farhad studied at the International Islamic University in Malaysia, where he combined economics, technology and Islamic thought. He later completed postgraduate studies in the United Kingdom and is currently pursuing a Master's in Cyber Security.
                </p>
                <p>
                  For over four decades he has served the Muslim community as an educator, lecturer and community organiser in Singapore and Perth. He helped establish Alhidayah Centre in Perth, has run Halal Awareness workshops, and continues to teach about faith, character and technology. Sayyidina Omar Institute is his effort to leave behind a living sadaqah jariyah in the form of young people who carry their deen with dignity.
                </p>
              </div>
            </div>

            {/* Link to Books and Author page */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <button
                onClick={() => setCurrentPage && setCurrentPage(Page.BOOKS_SERIES)}
                className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors gap-1"
              >
                <BookOpen className="w-4 h-4" />
                <span>Books by Farhad Omar →</span>
              </button>

              <button
                onClick={() => setCurrentPage && setCurrentPage(Page.AUTHOR_FARHAD_OMAR)}
                className="inline-flex items-center text-xs text-slate-400 hover:text-white transition-colors gap-1"
              >
                <span>Read Full Author Profile →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Community Mentors Photo Band */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <OptimizedImage 
              src={imageManifest.teamMurabbis.src} 
              alt={imageManifest.teamMurabbis.alt}
              isThumb={true}
              className="w-full h-56 object-cover object-top"
              width={800}
              height={450}
              aspectRatio="16/9"
              loading="lazy"
            />
            <div className="p-4 bg-slate-950 text-xs text-slate-300">
              <span className="font-serif font-bold text-amber-400 block mb-1">Community Murabbis & Mentors</span>
              <p className="font-light text-slate-400">Adult mentors committed to guiding youth with adab, fitrah protection, and spiritual grounding.</p>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <OptimizedImage 
              src={imageManifest.outdoorGroupPortrait.src} 
              alt={imageManifest.outdoorGroupPortrait.alt}
              isThumb={true}
              className="w-full h-56 object-cover object-center"
              width={800}
              height={450}
              aspectRatio="16/9"
              loading="lazy"
            />
            <div className="p-4 bg-slate-950 text-xs text-slate-300">
              <span className="font-serif font-bold text-amber-400 block mb-1">Youth Fellowship & Outdoor Suhbah</span>
              <p className="font-light text-slate-400">Building lifelong bonds of brotherhood and sisterhood rooted in shared purpose.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
