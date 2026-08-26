import React from 'react';
import { Page } from '../../types';
import { eventsData } from '../../data/eventsData';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { siteConfig } from '../../data/siteData';

interface EventsPageProps {
  setCurrentPage?: (page: Page) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Public Gatherings & Seminars
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Events & Learning Circles
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Seminars, parent orientation evenings, and public learning gatherings hosted in Perth, Western Australia.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {eventsData.map((evt) => (
          <div 
            key={evt.id}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-amber-500/40 transition-colors"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {evt.category}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {evt.isConfirmed ? 'Confirmed Schedule' : 'Tentative'}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-white">
                {evt.title}
              </h2>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {evt.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{evt.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{evt.venue}</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST)} variant="primary" className="text-xs px-5 py-2.5">
                <span>Register / Express Interest</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventsPage;
