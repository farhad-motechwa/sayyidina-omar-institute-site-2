import React from 'react';
import { siteConfig } from '../../data/siteData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8">
      
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Data Protection Policy
        </span>
        <h1 className="text-4xl font-serif font-bold text-white">
          Privacy Policy & Data Handling
        </h1>
        <p className="text-sm text-slate-400 font-light">
          Last updated: July 2026 | Sayyidina Omar Institute, Perth, Western Australia
        </p>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 text-sm text-slate-300 font-light leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-white">1. Information Collection</h2>
          <p>
            Sayyidina Omar Institute collects personal information solely for the purpose of administering youth formation programmes, managing parent permissions, verifying emergency contacts, and responding to direct inquiries. We collect information provided directly by participants or parents during registration (such as names, contact emails, emergency phone numbers, and relevant health or allergy notes).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-white">2. Use of Information</h2>
          <p>
            Personal information is strictly used for programme administration, emergency safety, safeguarding compliance, and official communications. We do not sell, rent, or trade participant data to commercial third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-white">3. Photography & Media Consent</h2>
          <p>
            Explicit parental or guardian written consent is required before any photograph or video recording featuring a minor is published on our website, social channels, or educational resources. Full names of minors are never published alongside media assets.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-white">4. Cookies & Analytics</h2>
          <p>
            This website operates as a lightweight client application. We do not employ non-essential tracking cookies or invasive behavioral surveillance scripts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-white">5. Contact Regarding Privacy</h2>
          <p>
            If you have questions regarding our privacy practices or wish to update or remove your registration details, please email us at: <a href={`mailto:${siteConfig.contactEmail}`} className="text-amber-300 hover:underline">{siteConfig.contactEmail}</a>.
          </p>
        </section>
      </div>

    </div>
  );
};

export default PrivacyPage;
