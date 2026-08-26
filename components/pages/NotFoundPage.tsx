import React from 'react';
import { Page } from '../../types';
import { Compass, Home } from 'lucide-react';

interface NotFoundPageProps {
  setCurrentPage: (page: Page) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto text-amber-400">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
            ERROR 404
          </span>
          <h1 className="text-3xl font-serif font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setCurrentPage(Page.HOME)}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
