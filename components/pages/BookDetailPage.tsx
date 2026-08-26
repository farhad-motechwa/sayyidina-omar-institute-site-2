import React from 'react';
import { Page } from '../../types';
import { booksData, seriesPurchaseOptions } from '../../data/booksData';
import { imageManifest } from '../../data/siteData';
import { OptimizedImage } from '../ui/OptimizedImage';
import BookCover from '../BookCover';
import Button from '../ui/Button';
import SampleChapterForm from '../SampleChapterForm';
import { 
  ArrowLeft, ArrowRight, ExternalLink, BookOpen, ShoppingBag, Quote 
} from 'lucide-react';

interface BookDetailPageProps {
  bookSlug: string;
  setCurrentPage: (page: Page) => void;
}

export const BookDetailPage: React.FC<BookDetailPageProps> = ({ bookSlug, setCurrentPage }) => {
  const bookIndex = booksData.findIndex(b => b.slug === bookSlug);
  const book = booksData[bookIndex] || booksData[0];

  const prevBook = bookIndex > 0 ? booksData[bookIndex - 1] : null;
  const nextBook = bookIndex < booksData.length - 1 ? booksData[bookIndex + 1] : null;

  const navigateToSlug = (slug: string) => {
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

  // Structured Data JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": `How You See Yourself at 30, Book ${book.bookNumber}: ${book.title}`,
    "author": { "@type": "Person", "name": "Farhad Omar" },
    "isbn": book.isbn,
    "bookFormat": "https://schema.org/Paperback",
    "numberOfPages": book.pages,
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "Sayyidina Omar Institute for Character and Leadership"
    },
    "datePublished": "2026",
    "isPartOf": {
      "@type": "BookSeries",
      "name": "How You See Yourself at 30"
    }
  };

  return (
    <div className="space-y-16 md:space-y-20 pb-20">
      
      {/* JSON-LD Script tag */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />

      {/* Top Back Nav Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => setCurrentPage(Page.BOOKS_SERIES)}
          className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Books in Series</span>
        </button>
      </div>

      {/* 1. SPLIT HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <BookCover book={book} size="lg" />
            </div>

            {/* Right Meta Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
                  HOW YOU SEE YOURSELF AT 30 — BOOK {book.bookNumber}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                  {book.title}
                </h1>
                <h2 className="text-lg sm:text-xl font-serif italic text-amber-300/90 font-normal">
                  {book.subtitle}
                </h2>
                <div className="pt-1 text-xs text-slate-400 uppercase tracking-widest font-sans font-medium">
                  By <span className="text-amber-400 font-semibold">Farhad Omar</span>
                </div>
              </div>

              {/* Official Back Cover Blurb */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300 font-light leading-relaxed">
                {book.backCoverBlurb}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href={book.stripeDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="shadow-lg shadow-amber-500/20">
                    <span>Buy This Book ({book.directPriceAUD})</span>
                    <ShoppingBag className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                <a href="#sample-opening">
                  <Button variant="outline">
                    <span>Read a Sample</span>
                    <BookOpen className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Upsell Note */}
              <div className="text-xs text-slate-400 font-light flex items-center gap-1.5 pt-1">
                <span>Reading all four?</span>
                <a 
                  href={seriesPurchaseOptions.completeSetStripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>The complete set is A$59 — A$17 less than buying them separately.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THE OPENING (SAMPLE EXCERPT) */}
      <section id="sample-opening" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            BOOK EXCERPT
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Before We Begin
          </h2>
        </div>

        {/* Reading-Optimised Container */}
        <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl max-w-3xl mx-auto space-y-6 text-amber-100/90 font-serif text-base sm:text-lg leading-relaxed text-left">
          {book.sampleExcerpt.split('\n\n').map((p, idx) => (
            <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-1">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 3. CONTENTS & QUOTE BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Chapter Contents */}
          <div className="lg:col-span-7 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-white border-b border-slate-800 pb-4">
              Table of Contents
            </h3>
            <ol className="space-y-3 text-sm text-slate-300 font-sans">
              {book.contents.map((chapter, i) => (
                <li key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-medium text-slate-200">{chapter}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Quote Block & Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Scriptural Quote Block */}
            <div className="bg-slate-950 p-8 rounded-3xl border-2 border-amber-500/40 space-y-4 shadow-xl relative">
              <Quote className="w-8 h-8 text-amber-400 opacity-40 absolute top-6 right-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-sans">
                SCRIPTURAL ANCHOR
              </span>
              <p className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed">
                "{book.quote.text}"
              </p>
              <p className="text-xs text-amber-400 font-semibold text-right font-sans">
                — {book.quote.source}
              </p>
            </div>

            {/* Photo Highlight for Book Four (Khidmah) */}
            {book.slug === 'khidmah' && (
              <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-xl space-y-2">
                <OptimizedImage 
                  src={imageManifest.khidmahFoodService.src} 
                  alt={imageManifest.khidmahFoodService.alt}
                  isThumb={true}
                  className="w-full h-48 object-cover object-center"
                  width={800}
                  height={450}
                  aspectRatio="16/9"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-950 text-xs text-slate-300 space-y-1">
                  <span className="font-serif font-bold text-amber-400 block">Khidmah in Action</span>
                  <p className="font-light text-slate-400">Youth mentees serving food at an outdoor community stall in Perth — embodying service carried toward others.</p>
                </div>
              </div>
            )}

            {/* Book Metadata Card */}
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-3 text-xs text-slate-300 font-sans">
              <h4 className="font-serif font-bold text-white text-sm mb-3">Publication Details</h4>
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-500">ISBN:</span>
                <span className="font-mono text-amber-300">{book.isbn}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-500">Format:</span>
                <span>{book.format}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-500">Pages:</span>
                <span>{book.pages} pages</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-500">Publisher:</span>
                <span className="text-right max-w-[200px]">{book.publisher}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">First Edition:</span>
                <span>{book.publicationYear}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BUY OPTIONS */}
      <section id="buy-options" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            ACQUISITION CHANNELS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Where to Order {book.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Direct from Institute Card */}
          <div className="bg-slate-950 border-2 border-amber-400 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">
                DIRECT FROM THE INSTITUTE — AUSTRALIA
              </span>
              <h3 className="text-lg font-serif font-bold text-white">Paperback Edition</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Order single volume ({book.directPriceAUD}) or complete 4-book set ({seriesPurchaseOptions.bundlePriceAUD}).
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={book.stripeDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Order Single Book ({book.directPriceAUD})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] text-slate-400 font-light leading-snug">
                Reading all four? <a href={seriesPurchaseOptions.completeSetStripeUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold hover:underline">The complete set is A$59 — A$17 less.</a>
              </p>

              <p className="text-[10px] text-slate-500 font-light leading-snug pt-1">
                Outside Australia? Amazon and Lulu print locally in your region — faster delivery and far lower postage than shipping from Perth.
              </p>
            </div>
          </div>

          {/* Amazon Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">AMAZON</span>
              <h3 className="text-lg font-serif font-bold text-white">Paperback & Kindle</h3>
              <p className="text-xs text-slate-300 font-light">
                Paperback {book.paperbackPriceAUD} · Kindle {book.kindlePriceAUD}
              </p>
              {book.kindleUnlimited && (
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider">
                  Free on Kindle Unlimited
                </span>
              )}
            </div>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* In Person Pickup Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">IN PERSON</span>
              <h3 className="text-lg font-serif font-bold text-white">Perth Events</h3>
              <p className="text-xs text-slate-300 font-light">
                {seriesPurchaseOptions.perthLocation}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs text-slate-400 font-light">
              Available during Friday prayers and weekend circles.
            </div>
          </div>

          {/* Lulu Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-sans">LULU</span>
              <h3 className="text-lg font-serif font-bold text-white">Print-on-Demand</h3>
              <p className="text-xs text-slate-300 font-light">
                Worldwide international delivery via local print networks.
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

      {/* SAMPLE CHAPTER FORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SampleChapterForm sourcePage={`/books/${book.slug}`} />
      </section>

      {/* 5. SERIES NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold">
          
          {prevBook ? (
            <button
              onClick={() => navigateToSlug(prevBook.slug)}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Previous: Book {prevBook.bookNumber} ({prevBook.title})</span>
            </button>
          ) : <div />}

          <button
            onClick={() => setCurrentPage(Page.BOOKS_SERIES)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            View all four →
          </button>

          {nextBook ? (
            <button
              onClick={() => navigateToSlug(nextBook.slug)}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Next: Book {nextBook.bookNumber} ({nextBook.title}) →</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : <div />}

        </div>
      </section>

    </div>
  );
};

export default BookDetailPage;
