import React, { useEffect } from 'react';
import { Page } from '../../types';
import SalahCards from '../SalahCards';

interface SalahGuidePageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const SalahGuidePage: React.FC<SalahGuidePageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    document.title = 'Ṣalāh, Step by Step | Sayyidina Omar Institute';

    let metaDesc = document.querySelector("meta[name='description']") as HTMLMetaElement;
    const prevDesc = metaDesc ? metaDesc.content : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'An interactive, step-by-step guide to the movements of ṣalāh in the Shāfiʿī madhhab: postures, recitations, and what is obligatory or recommended.';

    return () => {
      if (metaDesc && prevDesc) {
        metaDesc.content = prevDesc;
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8">
      {/* Back to Resources link */}
      <div>
        <button
          type="button"
          onClick={() => setCurrentPage?.(Page.RESOURCES, '/resources')}
          className="text-sm text-slate-400 hover:text-amber-300 transition-colors cursor-pointer inline-flex items-center gap-1.5"
        >
          ← Back to Resources
        </button>
      </div>

      {/* Main SalahCards Guide */}
      <SalahCards />
    </div>
  );
};

export default SalahGuidePage;
