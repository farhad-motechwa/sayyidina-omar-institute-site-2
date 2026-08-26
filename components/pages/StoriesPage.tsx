import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';

const images = [
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/formation-circle-discussion-wide.webp', alt: 'Mentees and mentors in a group discussion.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/formation-circle-full-group.webp', alt: 'A mentor sharing insights with a group of young men.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/murabbi-seated-within-circle.webp', alt: 'Participants engaged in an interactive session.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251115_213055.png', alt: 'An evening session during a spiritual retreat.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_052447.png', alt: 'Early morning reflection and prayer.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_052448.png', alt: 'A participant listening intently during a pre-dawn talk.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_083605.png', alt: 'A group enjoying breakfast together after the morning session.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_090424.png', alt: 'Mentees and mentors outdoors in a circle.' },
  { src: 'https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_102353.png', alt: 'Concluding session with a group photo.' },
];

const Lightbox: React.FC<{ imageUrl: string; alt: string; onClose: () => void; }> = ({ imageUrl, alt, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex justify-center items-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
        >
            <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-white p-3 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close image viewer"
            >
                <X className="w-8 h-8" />
            </button>
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[85vh]" 
                onClick={(e) => e.stopPropagation()}
            >
                <OptimizedImage 
                  src={imageUrl} 
                  alt={alt} 
                  isThumb={false}
                  className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 object-contain" 
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                    <p className="text-white text-lg font-light">{alt}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};


const StoriesPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedAlt, setSelectedAlt] = useState<string>('');

    const openLightbox = (img: {src: string, alt: string}) => {
        setSelectedImage(img.src);
        setSelectedAlt(img.alt);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setSelectedAlt('');
    };

    return (
        <div className="bg-slate-950 min-h-screen">
            <header className="relative py-32 bg-slate-900 overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center space-x-3 text-amber-400 mb-6"
                    >
                        <ImageIcon className="w-8 h-8" />
                        <span className="text-sm font-bold tracking-widest uppercase">Gallery</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-white"
                    >
                        Our Journey in Pictures
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto font-light"
                    >
                        Moments of learning, service, and companionship from our recent activities.
                    </motion.p>
                </div>
            </header>
            
            <div className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl cursor-pointer border border-slate-800"
                                onClick={() => openLightbox(img)}
                            >
                                <OptimizedImage 
                                    src={img.src} 
                                    alt={img.alt} 
                                    isThumb={true}
                                    aspectRatio="1/1"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300 flex items-center justify-center">
                                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && <Lightbox imageUrl={selectedImage} alt={selectedAlt} onClose={closeLightbox} />}
            </AnimatePresence>
        </div>
    );
};

export default StoriesPage;
