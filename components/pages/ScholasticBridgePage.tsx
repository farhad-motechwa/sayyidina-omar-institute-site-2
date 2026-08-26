
import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, GraduationCap } from 'lucide-react';

const ScholasticBridgePage: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <header className="relative py-20 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 text-amber-400 mb-4"
          >
            <GraduationCap className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Program</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Scholastic Bridge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Connecting educational excellence with spiritual grounding.
          </motion.p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 relative h-[80vh] group"
        >
          <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <iframe
            src="https://scholastic-bridge-741424004706.us-west1.run.app/"
            title="Scholastic Bridge"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </motion.div>
        <div className="text-center mt-8">
          <p className="text-slate-500 mb-4 font-light">Having trouble viewing the portal?</p>
          <a
            href="https://scholastic-bridge-741424004706.us-west1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-all"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default ScholasticBridgePage;
