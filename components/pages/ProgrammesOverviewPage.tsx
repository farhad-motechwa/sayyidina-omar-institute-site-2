import React from 'react';
import { Page } from '../../types';
import { programmesData } from '../../data/programmesData';
import { ChevronRight, ExternalLink, Calendar, MapPin, Video, BookOpen, Users } from 'lucide-react';
import Button from '../ui/Button';

const LEARNING_PORTAL_URL = 'https://learn.sayyidinaomarinstitute.au/login/index.php';

interface ProgrammesOverviewPageProps {
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

export const ProgrammesOverviewPage: React.FC<ProgrammesOverviewPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Integrated Formation Pathway
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Our Programmes
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          The Institute's programmes are delivered through our learning portal. Enrolled participants log in to access readings, session materials, and reflections. Online session invitations are sent directly to participants' calendars.
        </p>
      </div>

      {/* Learning Portal Formation Programmes Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Active Portal Cohorts
            </span>
            <h2 className="text-2xl font-serif font-bold text-white">
              Formation Programmes
            </h2>
          </div>
          <a
            href={LEARNING_PORTAL_URL}
            className="text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors inline-flex items-center gap-1"
          >
            <span>Learning Portal Login</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Grid: Murabbi Formation, How You See Yourself at 30, with room for additional cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Murabbi Formation Programme */}
          <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Adult Mentors & Educators
                </span>
                <Users className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Murabbi Formation Programme
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                A formation programme for those who mentor and nurture others. Starts 14 October 2026. Weekly rhythm: Wednesday evening session online via Google Meet, and Saturday morning session in person at Al-Hidayah Centre, Wangara.
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-900 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Starts 14 October 2026</span>
                </div>
                <div className="flex items-start gap-2">
                  <Video className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Wednesday evening: online via Google Meet</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Saturday morning: in person at Al-Hidayah Centre, Wangara</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <a
                href={LEARNING_PORTAL_URL}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Participant login</span>
              </a>

              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  onClick={() => setCurrentPage(Page.CONTACT, '/contact')}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Interested in joining? <span className="text-amber-300 underline">Contact us</span>
                </button>
                <button
                  onClick={() => setCurrentPage(Page.MURABBI_FORMATION, '/murabbi-formation')}
                  className="text-slate-400 hover:text-slate-200"
                >
                  Overview &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: How You See Yourself at 30 */}
          <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Young Adults & Youth
                </span>
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                How You See Yourself at 30
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                A four-book mentorship series for young adults.
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-900 text-xs text-slate-400">
                <p className="leading-relaxed">
                  Focusing on identity, spiritual discipline, intentional habit formation and adulthood responsibility before 30.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <a
                href={LEARNING_PORTAL_URL}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Participant login</span>
              </a>

              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  onClick={() => setCurrentPage(Page.CONTACT, '/contact')}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Interested in joining? <span className="text-amber-300 underline">Contact us</span>
                </button>
                <button
                  onClick={() => setCurrentPage(Page.HYSY30, '/how-you-see-yourself-at-30')}
                  className="text-slate-400 hover:text-slate-200"
                >
                  Overview &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Extensible Card 3: Room in layout for additional upcoming programme cards */}
          <div className="bg-slate-950/60 border border-dashed border-slate-800 rounded-2xl p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-slate-900 text-slate-400 border border-slate-800">
                In Development
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-300">
                Future Formation Pathways
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Additional modules, circles and curriculum tracks are in active development for delivery through the Institute's learning portal.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-900">
              <button
                onClick={() => setCurrentPage(Page.CONTACT, '/contact')}
                className="text-xs text-slate-400 hover:text-amber-300 transition-colors"
              >
                Interested in joining future cohorts? <span className="text-amber-300 underline">Contact us</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Additional Connected Initiatives & Frameworks */}
      <section className="space-y-6 pt-6 border-t border-slate-900">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Broader Ecosystem
          </span>
          <h2 className="text-2xl font-serif font-bold text-white">
            Connected Initiatives & Frameworks
          </h2>
          <p className="text-sm text-slate-400 font-light">
            Additional community, research and practical initiatives supporting the Institute's mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmesData.map((prog) => (
            <div 
              key={prog.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all space-y-6"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {prog.targetAudience}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {prog.fullDescription}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Key Programme Elements:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {prog.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (prog.slug === 'how-you-see-yourself-at-30') setCurrentPage(Page.HYSY30, '/how-you-see-yourself-at-30');
                    else if (prog.slug === 'murabbi-formation') setCurrentPage(Page.MURABBI_FORMATION, '/murabbi-formation');
                    else if (prog.slug === 'project-amanah') setCurrentPage(Page.PROJECT_AMANAH, '/project-amanah');
                    else if (prog.slug === 'sovereign-compass') setCurrentPage(Page.SOVEREIGN_COMPASS, '/sovereign-compass');
                    else if (prog.slug === 'radio') setCurrentPage(Page.RADIO, '/radio');
                  }}
                  className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  <span>{prog.ctaText}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Express Interest Banner */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-white">
          Not Sure Which Programme is Suitable?
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light">
          Get in touch with our team or fill out a general Expression of Interest form. We will guide you to the right circle or pathway.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => setCurrentPage(Page.EXPRESS_INTEREST, '/express-interest')} variant="primary">
            <span>Express Interest Form</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
          <Button onClick={() => setCurrentPage(Page.CONTACT, '/contact')} variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ProgrammesOverviewPage;
