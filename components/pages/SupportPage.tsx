import React, { useEffect } from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import { ExternalLink, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface SupportPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    document.title = "Support the Work | Sayyidina Omar Institute";
  }, []);

  const campaign = siteConfig.launchGoodCampaign;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      
      {/* HEADER */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          SUPPORT THE WORK
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {campaign.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
          Help us train murabbis and keep formation-based programmes free for Muslim youth.
        </p>
      </header>

      {/* SECTION: From Founder-Carried Work to Shared Amanah */}
      <section className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 space-y-5 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          INSTITUTIONAL STEWARDSHIP
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          From Founder-Carried Work to Shared Amanah
        </h2>
        <div className="space-y-4 text-slate-300 font-serif text-base sm:text-lg leading-relaxed">
          <p>
            The foundation of Sayyidina Omar Institute has thus far been carried through founder-funded expenditure, unpaid professional work and the generosity of those who have contributed their time.
          </p>
          <p>
            This allowed the programmes to begin, the educational frameworks to be developed, and the first Murabbis and students to enter formation. But work intended to serve a generation cannot remain dependent upon one person's personal capacity.
          </p>
          <p>
            Support received now will not be used to recover the estimated value of past voluntary work. It will help meet the real costs of training Murabbis, delivering programmes, producing educational resources, maintaining essential infrastructure and developing responsible institutional capacity.
          </p>
        </div>
      </section>

      {/* LAUNCHGOOD CAMPAIGN CARD */}
      <section className="bg-slate-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2 relative min-h-[240px] md:min-h-full">
          <img
            src={campaign.image}
            alt="Train a Murabbi. Form a Generation. Campaign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden" />
        </div>

        <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              LaunchGood Campaign
            </div>
            <h3 className="text-2xl font-serif font-bold text-white leading-snug">
              {campaign.title}
            </h3>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              {campaign.desc}
            </p>
          </div>

          <div>
            <a
              href={campaign.url}
              target="_blank"
              rel="noopener"
              className="w-full px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm font-sans transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Support on LaunchGood</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECONDARY STRIPE DONATION OPTION */}
      <section className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 text-center space-y-4">
        <p className="text-sm font-sans text-slate-300">
          Prefer to give directly?{' '}
          <a
            href={siteConfig.stripeDonateUrl}
            target="_blank"
            rel="noopener"
            className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4 transition-colors inline-flex items-center gap-1"
          >
            Use our Stripe donation link
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </p>

        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>All transactions are processed securely through encrypted channels.</span>
        </div>
      </section>

      {/* LINK TO FOUNDATION AND STEWARDSHIP */}
      <section className="text-center pt-2">
        <button
          onClick={() => setCurrentPage?.(Page.FOUNDATION_STEWARDSHIP, '/foundation-and-stewardship')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span>See what has already been built</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};

export default SupportPage;
