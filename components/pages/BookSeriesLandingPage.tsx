import React, { useState } from 'react';
import { Page } from '../../types';
import { booksData, reclaimingEducationBook, seriesPurchaseOptions } from '../../data/booksData';
import BookCover from '../BookCover';
import Button from '../ui/Button';
import SampleChapterForm from '../SampleChapterForm';
import InquiryModal from '../InquiryModal';
import { motion } from 'motion/react';
import { 
  ExternalLink, ArrowRight, CheckCircle2, Sparkles, ShoppingBag
} from 'lucide-react';

interface BookSeriesLandingPageProps {
  setCurrentPage: (page: Page) => void;
}

export const BookSeriesLandingPage: React.FC<BookSeriesLandingPageProps> = ({ setCurrentPage }) => {
  const [showFacilitatorModal, setShowFacilitatorModal] = useState(false);
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

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* SECTION A: HERO */}
      <section className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest font-sans">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                A FOUR-BOOK SERIES FROM THE INSTITUTE
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                How You See Yourself <br />
                <span className="italic text-amber-400 font-serif">at 30</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                Nine Saturdays in Perth isn't possible for everyone. These four short books carry the same formation arc — for a young person to read alone, or for a family to read together.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href={seriesPurchaseOptions.completeSetStripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="shadow-lg shadow-amber-500/20">
                    <span>Order the Complete Set — A$59</span>
                    <ShoppingBag className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                <a href="#sample-chapter">
                  <Button variant="outline">
                    <span>Read the First Chapter Free</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Hero Image / 4 Books Cluster Display */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-900/60 rounded-3xl border border-amber-500/20 shadow-2xl backdrop-blur-md">
                {booksData.map((book) => (
                  <div 
                    key={book.id} 
                    onClick={() => navigateToBook(book.slug)}
                    className="cursor-pointer transition-transform hover:scale-105"
                  >
                    <BookCover book={book} size="sm" />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION B: WHY THESE BOOKS EXIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
          PHILOSOPHICAL GROUNDING
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          Why These Books Exist
        </h2>
        <div className="space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed text-left bg-slate-950 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
          <p>
            This is not career advice. Nobody here asks what you want to be, how much you hope to earn, or when you plan to get married. Those questions have their place, but they are not the heart of it.
          </p>
          <p>
            The real question is quieter and harder: <strong className="text-amber-300 font-semibold">who are you becoming</strong>, through the choices you are making right now, today, this week?
          </p>
          <p>
            You do not suddenly become someone at thirty. You are becoming that person already — in how you speak to your parents, what you do when nobody is watching, what you reach for when you are bored, angry, or tired. Thirty is not a deadline. It is simply a point far enough ahead that we can use it to look honestly at the direction we are travelling in.
          </p>
        </div>
      </section>

      {/* SECTION C: THE FOUR BOOKS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            THE FOUR-PART SERIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            The Books in Sequence
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Each volume addresses a specific layer of personal, spiritual, and community formation.
          </p>
        </div>

        {/* 4-up desktop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {booksData.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -6 }}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl transition-all group"
            >
              <div className="space-y-4">
                <div className="flex justify-center pt-2">
                  <BookCover book={book} size="sm" />
                </div>

                <div className="space-y-1 text-center">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 font-sans">
                    {book.badge}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light line-clamp-2">
                    {book.subtitle}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs italic text-amber-200/90 font-serif text-center">
                  "{book.pullQuote}"
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-center">
                <button
                  onClick={() => navigateToBook(book.slug)}
                  className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors gap-1"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION D: FOUR KEYS, ONE LIFE CONNECTIVE TISSUE BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
              CONNECTIVE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Four Keys, One Life
            </h2>
          </div>

          {/* Horizontal Formation Arc Strip */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap justify-around items-center gap-4 text-center">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-amber-400">KEY 1</span>
              <p className="text-sm font-serif font-bold text-white">Purpose</p>
              <span className="text-[10px] text-slate-400 block">Book One</span>
            </div>
            <span className="text-slate-600 font-bold hidden sm:inline">→</span>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-amber-400">KEY 2</span>
              <p className="text-sm font-serif font-bold text-white">Tazkiyyah</p>
              <span className="text-[10px] text-slate-400 block">Book Two</span>
            </div>
            <span className="text-slate-600 font-bold hidden sm:inline">→</span>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-amber-400">KEY 3</span>
              <p className="text-sm font-serif font-bold text-white">Niyyah</p>
              <span className="text-[10px] text-slate-400 block">Book Three</span>
            </div>
            <span className="text-slate-600 font-bold hidden sm:inline">→</span>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-amber-400">KEY 4</span>
              <p className="text-sm font-serif font-bold text-white">Khidmah</p>
              <span className="text-[10px] text-slate-400 block">Book Four</span>
            </div>
          </div>

          <p className="text-center text-sm text-slate-300 font-light max-w-2xl mx-auto">
            These are not four topics. They are the Institute's four keys, and they trace the formation of the man whose name it carries.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs font-semibold text-amber-300">
            <button 
              onClick={() => setCurrentPage(Page.ABOUT)}
              className="inline-flex items-center hover:underline gap-1"
            >
              <span>Read the full arc →</span>
            </button>

            <button 
              onClick={() => setCurrentPage(Page.HOME)}
              className="inline-flex items-center hover:underline gap-1 text-slate-300 hover:text-white"
            >
              <span>See how this maps to the 9-week programme →</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION E: WHERE THIS BEGAN — RECLAIMING EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <BookCover 
                  book={reclaimingEducationBook}
                  size="md"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
                  THE FIRST BOOK
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Where this began
                </h2>
                <h3 className="text-lg font-serif italic text-amber-300">
                  {reclaimingEducationBook.title}
                </h3>
                <p className="text-xs text-amber-400 font-sans font-medium">
                  {reclaimingEducationBook.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-slate-300 font-light leading-relaxed text-sm sm:text-base">
                {reclaimingEducationBook.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Book Details Block */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-sans">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Published</span>
                  <span className="font-medium text-slate-200">{reclaimingEducationBook.publishedDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">ISBN</span>
                  <span className="font-mono text-amber-300">{reclaimingEducationBook.isbn}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Pages</span>
                  <span className="font-medium text-slate-200">{reclaimingEducationBook.pages} pages</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Format</span>
                  <span className="font-medium text-slate-200">{reclaimingEducationBook.format}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Language</span>
                  <span className="font-medium text-slate-200">{reclaimingEducationBook.language}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Category</span>
                  <span className="font-medium text-slate-200">{reclaimingEducationBook.category}</span>
                </div>
              </div>

              {/* Sequence Flow Strip */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between text-xs text-amber-300 font-semibold gap-2">
                <span>Reclaiming Education</span>
                <span>→</span>
                <span>How You See Yourself at 30</span>
                <span>→</span>
                <span>The Institute</span>
                <span>→</span>
                <span>The Four Books</span>
              </div>

              {/* Purchase Links (Lulu leads as A$10 cheaper, Amazon secondary) */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={reclaimingEducationBook.luluUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-md"
                  >
                    <span>Order on Lulu ({reclaimingEducationBook.luluPrice} — Ships in 3–5 days)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a 
                    href={reclaimingEducationBook.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:text-white font-medium text-xs transition-colors"
                  >
                    <span>Amazon ({reclaimingEducationBook.paperbackPrice} Paperback / {reclaimingEducationBook.kindlePrice} Kindle)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  {reclaimingEducationBook.qualifier}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E.5: EXPECTATIONS ABOUT LENGTH */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            DESIGNED FOR ACCESSIBILITY
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">
            Short on Purpose
          </h3>
          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Each book is around 25 pages — one sitting, start to finish. They are built to be re-read and argued with, not worked through. A young person who will never finish a 300-page book will finish this one.
          </p>
        </div>
      </section>

      {/* SECTION F: WHERE TO GET THEM */}
      <section id="purchase-options" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            AVAILABILITY & DISTRIBUTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Where to Get the Books
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Choose the acquisition channel that best fits your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Option 1: Direct from Institute */}
          <div className="bg-slate-950 border-2 border-amber-400 rounded-2xl p-6 flex flex-col justify-between space-y-4 relative shadow-2xl">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] tracking-widest uppercase">
              RECOMMENDED
            </div>
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">
                DIRECT FROM THE INSTITUTE — AUSTRALIA
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Complete 4-Book Set
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                The complete four-book set, posted to you. Ordering direct means the most support reaches the Institute's youth programmes. Australian postage included.
              </p>
              
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-center space-y-1">
                <span className="text-xs text-slate-300 block">Complete Series Set</span>
                <span className="text-xl font-serif font-bold text-amber-300">
                  {seriesPurchaseOptions.bundlePriceAUD}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  A$59 for all four, against A$70.76 buying them separately.
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={seriesPurchaseOptions.completeSetStripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Order the Complete Set — A$59</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] text-slate-400 text-center font-light leading-normal pt-1">
                Outside Australia? Amazon and Lulu print locally in your region — faster delivery and far lower postage than shipping from Perth.
              </p>
            </div>
          </div>

          {/* Option 2: Amazon */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">
                GLOBAL MARKETPLACE
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Amazon Storefront
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Paperback and Kindle. If the books help you, a review here helps others find them.
              </p>
            </div>

            <a
              href={seriesPurchaseOptions.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Option 3: In Person in Perth */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">
                PERTH WESTERN AUSTRALIA
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                In Person Pickup
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {seriesPurchaseOptions.perthLocation}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center text-xs text-slate-400 font-light">
              Available during Friday prayers and weekend circles.
            </div>
          </div>

          {/* Option 4: Lulu */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">
                GLOBAL PRINT-ON-DEMAND
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Lulu Publishing
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Print-on-demand, ships worldwide.
              </p>
            </div>

            <a
              href={seriesPurchaseOptions.luluUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View on Lulu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION G: EMAIL CAPTURE */}
      <section id="sample-chapter" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SampleChapterForm sourcePage="/books" />
      </section>

      {/* SECTION H: FOR PARENTS AND EDUCATORS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-serif font-bold text-white">
            For Parents & Educators
          </h3>
          <p className="text-slate-300 text-sm font-light max-w-2xl mx-auto leading-relaxed">
            Reading these with a young person, or using them with a group? The Institute has discussion prompts and reflection worksheets that accompany each book.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setShowFacilitatorModal(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-amber-300 font-semibold text-xs transition-all cursor-pointer"
            >
              <span>Request the facilitator notes →</span>
            </button>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={showFacilitatorModal}
        onClose={() => setShowFacilitatorModal(false)}
        type="facilitator_notes"
      />

    </div>
  );
};

export default BookSeriesLandingPage;
