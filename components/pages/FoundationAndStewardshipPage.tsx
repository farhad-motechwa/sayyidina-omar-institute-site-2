import React, { useEffect } from 'react';
import { Page } from '../../types';
import { foundationRecord, siteConfig } from '../../data/siteData';
import { booksData, reclaimingEducationBook } from '../../data/booksData';
import BookCover from '../BookCover';
import { ArrowRight, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

interface FoundationAndStewardshipPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const FoundationAndStewardshipPage: React.FC<FoundationAndStewardshipPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    document.title = "Foundation and Stewardship | Sayyidina Omar Institute";

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'See how Sayyidina Omar Institute was built through founder-contributed work, published educational resources, youth formation and Murabbi development in Perth.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'The Foundation Has Already Been Laid | Sayyidina Omar Institute');
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', 'A transparent record of the work contributed to establish Sayyidina Omar Institute and the transition towards a sustainable, community-supported institution.');
    }

    // JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'foundation-stewardship-jsonld';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Foundation and Stewardship",
      "description": "A transparent record of the work contributed to establish Sayyidina Omar Institute and the transition towards a sustainable, community-supported institution.",
      "publisher": {
        "@type": "Organization",
        "name": "Sayyidina Omar Institute for Character and Leadership"
      }
    });
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('foundation-stewardship-jsonld');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  const allFoundationalBooks = [
    {
      type: 'reclaiming',
      data: reclaimingEducationBook,
      slug: 'reclaiming-education'
    },
    ...booksData.slice(0, 4).map(b => ({
      type: 'series',
      data: b,
      slug: b.slug
    }))
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* PAGE HEADER */}
      <header className="space-y-4 pb-8 border-b border-slate-800">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          WHAT HAS ALREADY BEEN BUILT
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          Foundation and Stewardship
        </h1>

        <div className="space-y-4 pt-2 text-slate-300 font-serif text-lg sm:text-xl leading-relaxed">
          <p>
            Sayyidina Omar Institute did not begin with a fundraising campaign. It began through writing, teaching, direct work with young people, and a concern about what education was forming within them.
          </p>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            The early foundation was carried personally by Farhad Omar through unpaid professional work and direct expenditure. This record is published in the interest of transparency. It does not represent an amount owed by the Institute.
          </p>
        </div>
      </header>

      {/* SECTION 3: How the Work Developed */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tracking-tight">
          How the Work Developed
        </h2>

        <div className="space-y-5 text-slate-200 font-serif text-base sm:text-lg leading-relaxed">
          <p>
            The intellectual foundation of the Institute began with Reclaiming Education, which questioned an educational order measured mainly through economic outcomes and asked what kind of human being education ought to form.
          </p>
          <p>
            Those ideas were brought into direct engagement with young people through How You See Yourself at 30. The programme was not treated as a finished theory. Its frameworks were tested through conversation, reflection, teaching and service.
          </p>
          <p>
            The work then expanded into a four-book youth formation series. As the programme developed, another need became clear: young people require more than content. They require adults capable of accompanying them with knowledge, adab, attentiveness and accountability. This led to the Murabbi Formation Programme and the broader educational architecture of Sayyidina Omar Institute.
          </p>
        </div>
      </section>

      {/* SECTION 4: Founder Contribution, January 2025 to August 2026 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tracking-tight">
            Founder Contribution, {foundationRecord.reportingPeriod.display}
          </h2>
          <p className="text-xs font-sans text-slate-400 uppercase tracking-widest">
            Institutional Service Record (1 January 2025 to 11 August 2026)
          </p>
        </div>

        {/* Restrained Summary Table / Panel */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="divide-y divide-slate-800/80 font-sans text-sm">
            
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950">
              <span className="text-slate-400 font-medium">Professional work contributed</span>
              <span className="text-white font-semibold">
                approximately {foundationRecord.contributedHours.exactEstimate.toLocaleString()} hours (estimated)
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900/40">
              <span className="text-slate-400 font-medium">Public rounded figure</span>
              <span className="text-amber-300 font-semibold">
                more than {foundationRecord.contributedHours.publicDisplay.replace('+', '')} hours
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950">
              <span className="text-slate-400 font-medium">Programme terms delivered</span>
              <span className="text-white font-semibold">{foundationRecord.programmeTerms}</span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900/40">
              <span className="text-slate-400 font-medium">Weekend sessions delivered</span>
              <span className="text-white font-semibold">{foundationRecord.weekendSessions}</span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950">
              <span className="text-slate-400 font-medium">SOI-related books published</span>
              <span className="text-white font-semibold">{foundationRecord.publishedBooks}</span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900/40">
              <span className="text-slate-400 font-medium">Programme-related travel</span>
              <span className="text-white font-semibold">
                approximately {foundationRecord.programmeTravelKm.toLocaleString()} kilometres
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950">
              <span className="text-slate-400 font-medium">Founder salary or professional fees</span>
              <span className="text-white font-semibold">AUD ${foundationRecord.founderRemunerationAud}</span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900/40">
              <span className="text-slate-400 font-medium">Direct expenditure</span>
              <span className="text-slate-300 italic">{foundationRecord.directExpenditureStatus.toLowerCase()}</span>
            </div>

          </div>
        </div>

        {/* Narrative & Indicative Replacement Value */}
        <div className="space-y-4 pt-2 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            The contributed hours cover research, authorship, publishing, educational framework development, programme design, teaching preparation and delivery, technology, communications, administration and institutional development.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Indicative Replacement Value
            </div>
            <p className="text-slate-200 leading-relaxed">
              At a conservative blended professional rate of AUD ${foundationRecord.professionalRateAud} per hour, this work has an indicative replacement value of approximately <strong className="text-white font-semibold">AUD ${foundationRecord.indicativeReplacementValueAud.toLocaleString()}</strong>. This figure records the scale of the contributed service. It is not an invoice, liability or claim for retrospective reimbursement.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Published Educational Foundation */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tracking-tight">
            Published Educational Foundation
          </h2>
          <p className="text-slate-200 font-serif text-base sm:text-lg leading-relaxed">
            Five SOI-related educational volumes were authored by Farhad Omar and published through Amazon and Lulu during the development of this work. They provide a written foundation for the Institute's educational approach and programme architecture.
          </p>
        </div>

        {/* Grid of Published Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {allFoundationalBooks.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentPage?.(Page.BOOKS_SERIES, '/books')}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-xl p-4 flex flex-col items-center text-center space-y-3 cursor-pointer group transition-all"
            >
              <div className="w-full flex justify-center">
                <BookCover book={item.data} size="sm" showHoverEffect={false} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-serif font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                  {item.data.title}
                </h3>
                <p className="text-[11px] font-sans text-slate-400">
                  {item.type === 'reclaiming' ? 'A4 Monograph' : `Book ${item.data.bookNumber || idx}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800/80">
          <p className="text-xs font-sans text-slate-400 italic max-w-xl">
            These volumes were authored by Farhad Omar and form part of Sayyidina Omar Institute's educational foundation.
          </p>

          <button
            onClick={() => setCurrentPage?.(Page.BOOKS_SERIES, '/books')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-semibold font-sans transition-colors inline-flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Explore the Books</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* SECTION 6: Why This Record Is Being Published */}
      <section className="space-y-5">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tracking-tight">
          Why This Record Is Being Published
        </h2>

        <div className="space-y-5 text-slate-200 font-serif text-base sm:text-lg leading-relaxed">
          <p>
            This record is not published to centre one person or to seek repayment for voluntary work. It is published because those considering whether to support the Institute should be able to see that the work has begun and that a substantial foundation already exists.
          </p>
          <p>
            It also identifies a real institutional risk. Work intended to serve young people, form Murabbis and support communities cannot remain dependent upon one person's unpaid labour and personal expenditure. The next stage requires shared responsibility, proper governance and a sustainable financial foundation.
          </p>
        </div>
      </section>

      {/* SECTION 7: From Founder-Carried Work to Shared Amanah */}
      <section className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          From Founder-Carried Work to Shared Amanah
        </h2>

        <div className="space-y-4 text-slate-300 font-serif text-base sm:text-lg leading-relaxed">
          <p>
            The founder-carried stage allowed the Institute to begin before funding was available. Books were written, frameworks were developed, programmes were delivered, Murabbis were trained and young people entered formation.
          </p>
          <p>
            The next stage is not about recovering the value of the past contribution. It is about ensuring that the work can continue responsibly. Community support will help meet the real costs of Murabbi formation, youth programmes, educational resources, technology, administration, safeguarding and future programme delivery.
          </p>
        </div>

        {/* Two Calls to Action */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a
            href={siteConfig.stripeDonateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm font-sans transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Support the Next Stage</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST, '/express-interest')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-100 font-semibold text-sm font-sans transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Express Your Interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 8: How the Estimate Was Prepared */}
      <section className="pt-4">
        <details className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all">
          <summary className="p-4 sm:p-5 font-sans text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-300 cursor-pointer flex items-center justify-between select-none">
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>How the Estimate Was Prepared</span>
            </span>
            <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>

          <div className="p-5 sm:p-6 pt-0 font-sans text-xs sm:text-sm text-slate-400 space-y-3 leading-relaxed border-t border-slate-800/60 mt-2">
            <p>
              The reporting period covers 1 January 2025 to 11 August 2026. Contributed professional time is estimated at approximately 40 hours per week across the period. The work includes writing, publishing, programme and framework development, teaching, technology, communications and administration.
            </p>
            <p>
              The indicative replacement value uses a conservative blended rate of AUD $75 per hour. Teaching, book production and communications are included within the total hours and have not been counted again as separate professional services.
            </p>
            <p>
              Travel is recorded separately at approximately 2,700 kilometres. Direct expenditure for publishing, technology, programme delivery, administration and travel is being reconstructed from available records and will be reported separately when verified.
            </p>
            <p className="font-semibold text-slate-300">
              The figures are estimates prepared for institutional accountability. They are not audited financial statements.
            </p>
          </div>
        </details>
      </section>

    </div>
  );
};

export default FoundationAndStewardshipPage;
