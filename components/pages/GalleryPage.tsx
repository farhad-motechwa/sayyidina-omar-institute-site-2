import React from 'react';
import { fullPhotoGallery } from '../../data/siteData';
import { Camera, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const GalleryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest font-sans">
          <Camera className="w-3.5 h-3.5 text-amber-400" />
          GLIMPSES OF OUR JOURNEY
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Photo Gallery & Reflections
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Moments of learning, mentorship circles, morning reflections, khidmah service, and outdoor suhbah across Perth, Western Australia.
        </p>

        {/* Safeguarding Consent Notice */}
        <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-light max-w-2xl">
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>All photographs of youth programs adhere to the Institute's strict Working With Children Check compliance and safeguarding posture.</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fullPhotoGallery.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30 text-xs font-semibold font-sans">
                  {img.category}
                </span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs text-slate-300">
              <span className="font-serif font-medium text-sm text-white line-clamp-1">{img.caption}</span>
              <span className="inline-flex items-center gap-1 text-slate-500 flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> {img.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default GalleryPage;
