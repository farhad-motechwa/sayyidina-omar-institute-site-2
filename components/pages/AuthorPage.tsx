import React from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import { booksData, reclaimingEducationBook, seriesPurchaseOptions, otherWorksByAuthor } from '../../data/booksData';
import BookCover from '../BookCover';
import Button from '../ui/Button';
import { motion } from 'motion/react';
import { 
  BookOpen, ExternalLink, Mail, GraduationCap, Award, Shield, ArrowRight, ArrowLeft 
} from 'lucide-react';

interface AuthorPageProps {
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({ setCurrentPage }) => {

  const navigateToBook = (slug: string) => {
    switch (slug) {
      case 'who-are-you-becoming':
        setCurrentPage(Page.BOOK_ONE);
        break;
      case 'tazkiyyah':
        setCurrentPage(Page.BOOK_TWO);
        break;
      case 'niyyah':
        setCurrentPage(Page.BOOK_THREE);
        break;
      case 'khidmah':
        setCurrentPage(Page.BOOK_FOUR);
        break;
      default:
        setCurrentPage(Page.BOOKS_SERIES);
    }
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Farhad Omar",
    "jobTitle": "Founder & Author",
    "worksFor": {
      "@type": "Organization",
      "name": "Sayyidina Omar Institute for Character and Leadership"
    },
    "almaMater": [
      "International Islamic University Malaysia",
      "University of Stirling",
      "Edith Cowan University"
    ],
    "url": "https://sayyidinaomarinstitute.au/about/farhad-omar",
    "sameAs": [
      "https://farhadomarstudios.substack.com/"
    ]
  };

  return (
    <div className="space-y-16 md:space-y-20 pb-20">
      
      {/* JSON-LD Person Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* Top Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => setCurrentPage(Page.ABOUT)}
          className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About the Institute</span>
        </button>
      </div>

      {/* 1. AUTHOR HERO & BIOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Photo & Badges */}
            <div className="lg:col-span-4 space-y-6 text-center">
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-slate-900 flex items-center justify-center">
                <div className="text-center p-6 space-y-2">
                  <span className="text-4xl font-serif font-bold text-amber-400">MFO</span>
                  <p className="text-xs text-slate-300 font-serif">Mohammad Farhad Omar</p>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-serif font-bold text-white">
                  Mohammad Farhad Omar
                </h1>
                <p className="text-xs text-amber-400 font-sans tracking-widest uppercase font-semibold">
                  Founder & Author
                </p>
                <p className="text-xs text-slate-400 font-light">
                  Sayyidina Omar Institute for Character and Leadership
                </p>
              </div>

              {/* Social / External Quick Links */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <a
                  href={siteConfig.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 transition-colors text-xs flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Farhad Omar Studios on Substack</span>
                </a>
              </div>
            </div>

            {/* Right Detailed Biography */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
                  AUTHOR PROFILE
                </span>
                <h2 className="text-3xl font-serif font-bold text-white">
                  Professional & Community Journey
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 font-light text-base leading-relaxed">
                <p>
                  Farhad Omar has spent more than twenty-five years working across technology, education and community life — first as a systems administrator and IT manager, then as a corporate consultant, and today as a fractional Chief Technology Officer and cybersecurity professional. He holds a Bachelor of Economics from the International Islamic University Malaysia and a Master of Science in Information Systems Management from the University of Stirling, and is currently completing a Master of Cyber Security at Edith Cowan University.
                </p>
                <p>
                  For over four decades he has served the Muslim community as an educator, lecturer and community organiser in Singapore and Perth. He helped establish Alhidayah Centre in Perth, has run Halal Awareness workshops, and continues to teach about faith, character and technology.
                </p>
                <p>
                  Sayyidina Omar Institute is his effort to leave behind a living <em>sadaqah jariyah</em> in the form of young people who carry their deen with dignity, conviction, and moral clarity.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <GraduationCap className="w-4 h-4" /> Academic Formation
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    B.Econ (IIU Malaysia), M.Sc Information Systems (Stirling UK), M.Cyber Security (Edith Cowan Australia).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <Shield className="w-4 h-4" /> 40+ Years Community Service
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    Co-founder of Alhidayah Centre Wangara, lecturer, educator, and youth mentor in Singapore & Perth.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER AND AUTHOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
            FOUNDATIONAL RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Founder and Author
          </h2>
          <div className="space-y-4 text-slate-300 font-serif text-base sm:text-lg leading-relaxed max-w-4xl">
            <p>
              Farhad Omar is the author of Reclaiming Education and the four-volume How You See Yourself at 30 series.
            </p>
            <p>
              The educational architecture of Sayyidina Omar Institute developed through the relationship between this written work, direct engagement with young people, and the formation of Murabbis capable of accompanying them.
            </p>
            <p>
              Between January 2025 and August 2026, he contributed more than 3,000 hours without remuneration towards the Institute's authorship, programme development, teaching, technology, communications and institutional foundation.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage(Page.FOUNDATION_STEWARDSHIP, '/foundation-and-stewardship')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
            >
              <span>Read the Foundation and Stewardship Record</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. ALL PUBLISHED TITLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            PUBLISHED WORKS
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Books & Publications by Farhad Omar
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Published volumes exploring education, character formation, economics, halal guidance, and personal faith memoirs.
          </p>
        </div>

        {/* 1. Primary Highlighted Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Title 1: Reclaiming Education */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <BookCover 
                book={reclaimingEducationBook} 
                size="sm" 
              />
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-bold text-amber-400 uppercase font-sans">CATALYST</span>
                <h3 className="text-sm font-serif font-bold text-white line-clamp-2">
                  Reclaiming Education
                </h3>
              </div>
            </div>
            <a
              href={reclaimingEducationBook.luluUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-slate-900 text-amber-300 text-xs font-semibold text-center flex items-center justify-center gap-1 hover:bg-slate-800 transition-colors"
            >
              <span>Order Book</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Titles 2-5: The 4 HYSY30 Books */}
          {booksData.map((b) => (
            <div key={b.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                <div 
                  onClick={() => navigateToBook(b.slug)}
                  className="cursor-pointer"
                >
                  <BookCover book={b} size="sm" />
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-[10px] font-bold text-amber-400 uppercase font-sans">{b.badge}</span>
                  <h3 className="text-sm font-serif font-bold text-white line-clamp-2">
                    {b.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => navigateToBook(b.slug)}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 text-amber-300 text-xs font-semibold text-center flex items-center justify-center gap-1 hover:bg-slate-800 transition-colors"
              >
                <span>Book Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}

        </div>

        {/* 2. Additional Works & Guides */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-amber-400">
            Other Works by Farhad Omar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {otherWorksByAuthor.map((work, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">{work.category}</span>
                <p className="font-serif font-bold text-slate-200 text-sm">{work.title}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. CONTACT & SUBSTACK BAND */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-xl">
          <h3 className="text-xl font-serif font-bold text-white">
            Connect & Read New Essays
          </h3>
          <p className="text-slate-300 text-sm font-light max-w-xl mx-auto">
            Farhad publishes monthly reflections on faith, character, technology, and youth formation on Substack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={seriesPurchaseOptions.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                <span>Subscribe on Substack</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <button onClick={() => setCurrentPage(Page.CONTACT)}>
              <Button variant="outline">
                <span>Contact the Author</span>
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AuthorPage;
