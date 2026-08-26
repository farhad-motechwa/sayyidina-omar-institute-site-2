import React from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import Button from '../ui/Button';
import { ShieldCheck, Layers, Users, Mail, ArrowRight } from 'lucide-react';

interface ParentsSafeguardingPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const ParentsSafeguardingPage: React.FC<ParentsSafeguardingPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" /> Institutional Commitment
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Parents & Safeguarding
        </h1>

        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Safeguarding is part of amanah. We are dedicated to creating a safe, transparent, and accountable environment for all young people.
        </p>
      </div>

      {/* Primary Posture */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Our Safeguarding Principles
        </h2>
        <p className="text-slate-300 leading-relaxed font-light text-base">
          In Islam, the protection and nurture of young people is a sacred trust (amanah) owed to Allah, to parents, and to the community. Sayyidina Omar Institute maintains strict operational guidelines to protect children, youth, and vulnerable community members across all programmes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">Working With Children Checks (WWCC)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All staff, facilitators, and Murabbis in Western Australia must hold a current, verified Working With Children Check prior to engaging with youth.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">Observable & Interruptible Rule</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No adult is ever alone with a youth behind closed doors. All discussions, one-on-one check-ins, and small circles take place in observable, interruptible spaces.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">No Secrecy in Safety</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              While we respect personal privacy during reflections, there is never a promise of secrecy when a participant's safety or well-being is at risk. Escalation procedures are triggered immediately.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-2">
            <h3 className="text-base font-serif font-bold text-amber-300">Gender-Appropriate Supervision</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Young men and young women participate in separate, appropriately supported learning circles led by verified male and female Murabbis.
            </p>
          </div>
        </div>
      </div>

      {/* Age-Staged Pedagogy & Tazkiyyah Framework Link */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
            <Layers className="w-4 h-4" /> Age-Staged Circles
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Why Our Circles Are Age-Staged
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
            Formation is not the same task at seven as it is at seventeen. Read about how our developmental model adapts spiritual, moral, and intellectual nurture to each life stage.
          </p>
        </div>

        <Button
          onClick={() => setCurrentPage?.(Page.TAZKIYYAH, '/tazkiyyah')}
          variant="outline"
          className="text-xs px-5 py-2.5 flex-shrink-0"
        >
          <span>Explore Tazkiyyah Framework</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>

      {/* Parental Consent & Permissions */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Parental Consent & Operational Transparency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block text-sm">Attendance & Contact Info</span>
            <p className="text-slate-400">
              Parents provide emergency contact numbers, medical and allergy details, and transportation preferences prior to session 1.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block text-sm">Photography & Media Privacy</span>
            <p className="text-slate-400">
              We respect family preferences. Explicit media consent is required before any photography is used, and no minor's full name is published.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block text-sm">Overnight & Retreat Approvals</span>
            <p className="text-slate-400">
              Any overnight rehlah or retreat requires separate written parent consent forms, detailing supervision ratios and venue safety.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Notice Placeholder */}
      <div className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-xl text-xs text-slate-400 space-y-2">
        <span className="font-semibold text-amber-300 block">Formal Policy Status</span>
        <p>
          * Final policy wording to be approved by SOI and the host venue before publication.
        </p>
      </div>

      {/* Designated Safeguarding Contact Placeholder */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-4">
        <h3 className="text-xl font-serif font-bold text-white">Designated Safeguarding Lead</h3>
        <p className="text-sm text-slate-300 font-light">
          If you have any questions, concerns, or need to report a safeguarding matter, please contact our designated administration lead:
        </p>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300 max-w-md">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">{siteConfig.safeguardingContactName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" />
            <a href={`mailto:${siteConfig.safeguardingContactEmail}`} className="hover:text-amber-300">
              {siteConfig.safeguardingContactEmail}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ParentsSafeguardingPage;
