import React, { useState } from 'react';
import { Download, CheckCircle2, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { seriesPurchaseOptions } from '../data/booksData';

interface SampleChapterFormProps {
  sourcePage?: string;
}

const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOa5mzIjUGKnEQzDYhMwKNANbbHSjzKB6TMWkgaNIHIMplubUjAjFY2k1mU4QFyFYO_A/exec';
const CHAPTER_PDF_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1DrggRFtKmjcUOG1B05LE3o10OgK-aUIB';

export const SampleChapterForm: React.FC<SampleChapterFormProps> = ({ sourcePage = '/books' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [honey, setHoney] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    setSubmitError(null);

    // Client-side email validation
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      setEmailError('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // If honeypot is filled, skip network request (bot detected)
    if (honey && honey.trim().length > 0) {
      setIsSubmitted(true);
      return;
    }

    const currentPath = (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname : sourcePage;

    const payload = JSON.stringify({
      type: 'sample_chapter',
      name: name.trim(),
      email: trimmedEmail,
      newsletter: Boolean(newsletterOptIn),
      source_page: currentPath
    });

    // Fire sendBeacon BEFORE state updates or re-renders
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'text/plain' });
      navigator.sendBeacon(APPS_SCRIPT_ENDPOINT, blob);
    } else {
      fetch(APPS_SCRIPT_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: payload
      }).catch((err) => {
        console.warn('Background sample chapter notification notice:', err);
      });
    }

    // Show download state immediately without waiting
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-950 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
      <div className="space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
          FREE SAMPLE CHAPTER
        </span>
        <h2 className="text-3xl font-serif font-bold text-white">
          {isSubmitted ? 'Here it is.' : 'Read the first chapter before you buy'}
        </h2>
        <p className="text-slate-300 text-sm font-light leading-relaxed">
          {isSubmitted 
            ? 'The opening chapter of Book One — yours to read now.' 
            : 'Send me the opening chapter of Book One — free, no strings.'}
        </p>
      </div>

      {isSubmitted ? (
        <div className="space-y-6 max-w-md mx-auto animate-fadeIn">
          <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 space-y-4">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-serif font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span>Chapter One Ready for Download</span>
            </div>

            <a
              href={CHAPTER_PDF_DOWNLOAD_URL}
              target="_blank"
              rel="noopener"
              className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Chapter One (PDF)</span>
            </a>

            <p className="text-xs text-slate-400 font-mono">
              5 pages · PDF · 225KB
            </p>
          </div>

          <div className="pt-2 text-xs text-slate-300">
            <span>If it's useful, the full four-book set is </span>
            <a 
              href={seriesPurchaseOptions.completeSetStripeUrl}
              target="_blank"
              rel="noopener"
              className="text-amber-300 font-semibold underline hover:text-amber-200 inline-flex items-center gap-1"
            >
              <span>A$59 direct ↗</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto space-y-5 text-left">
          {submitError && (
            <div className="bg-red-950/80 border border-red-800 text-red-300 p-4 rounded-xl flex items-start gap-3 text-xs">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-red-200">Submission Error</p>
                <p className="text-red-300 mt-0.5 leading-relaxed">{submitError}</p>
              </div>
            </div>
          )}

          {/* Off-screen Honeypot Field for Spam Bots */}
          <input
            type="text"
            name="_honey"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] top-0 w-1 h-1 opacity-0 pointer-events-none"
          />

          <div className="space-y-3">
            <div>
              <label htmlFor="sample-email" className="block text-xs font-medium text-slate-300 mb-1">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <input
                id="sample-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(null);
                }}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-sm focus:outline-none transition-colors ${
                  emailError 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-slate-800 focus:border-amber-400'
                }`}
              />
              {emailError && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="sample-name" className="block text-xs font-medium text-slate-400 mb-1">
                Your Name <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <input
                id="sample-name"
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Visually separate choice section for newsletter opt-in */}
          <div className="pt-2 border-t border-slate-800/80">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <input
                id="newsletter-optin"
                type="checkbox"
                checked={newsletterOptIn}
                onChange={(e) => setNewsletterOptIn(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-400 focus:ring-amber-400 focus:ring-offset-slate-950 cursor-pointer"
              />
              <label htmlFor="newsletter-optin" className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
                Also email me when new writing goes out — about once a month.
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send it to me'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
};

export default SampleChapterForm;
