import React, { useState } from 'react';
import { Page } from '../../types';
import { resourcesData } from '../../data/resourcesData';
import { FileText, Download, ExternalLink, Filter, BookOpen, Star, ArrowRight } from 'lucide-react';

interface ResourcesPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Reflection', 'Curriculum Summary', 'Document', 'Podcast'];

  const filteredResources = selectedCategory === 'All' 
    ? resourcesData 
    : resourcesData.filter(r => r.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Knowledge & Reflections
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Educational Resources
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Articles, curriculum summaries, audio podcasts, and public documents from Sayyidina Omar Institute.
        </p>
      </div>

      {/* Pinned Featured Founding Essay */}
      <div 
        onClick={() => setCurrentPage?.(Page.FOUNDING_ESSAY, '/the-work-of-becoming')}
        className="bg-slate-950 border border-amber-500/40 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-amber-400 transition-all duration-300 cursor-pointer group space-y-4 relative overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Pinned Founding Essay
          </span>
          <span className="text-slate-400 font-sans">August 2026 · About 9 min read</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
            The Work of Becoming
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-serif leading-relaxed italic max-w-3xl">
            Why Sayyidina Omar Institute is looking beyond what young people know to who they are becoming
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
          <span>By Farhad Omar</span>
          <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read Essay <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === cat
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div 
            key={res.id}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium">
                  {res.category}
                </span>
                <span>{res.date}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-white">
                {res.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {res.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>{res.author || 'SOI Staff'}</span>
              <span className="text-amber-400 font-medium">{res.readTime}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ResourcesPage;
