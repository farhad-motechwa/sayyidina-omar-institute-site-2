import React, { useState, useRef } from 'react';
import { Play, Pause, Radio } from 'lucide-react';
import { motion } from 'motion/react';
import { useRadioNowPlaying, STREAM_URL } from '../hooks/useRadioNowPlaying';

export const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { songText } = useRadioNowPlaying();

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const currentTrackDisplay = songText || "Sayyidina Omar Institute Radio";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 max-w-[calc(100vw-3rem)]">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer flex-shrink-0 ${
          isPlaying 
            ? 'bg-amber-400 text-slate-950 font-bold' 
            : 'bg-slate-900 border border-slate-700 text-white'
        }`}
        aria-label={isPlaying ? 'Pause Radio' : 'Listen Live Radio'}
      >
        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap">
          {isPlaying ? 'Live' : 'Listen Live'}
        </span>
        <Radio className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-amber-950' : 'text-amber-400'}`} />
      </motion.button>

      <div className="hidden sm:block text-slate-300 text-xs sm:text-sm font-medium bg-slate-900/90 px-3.5 py-2 rounded-full border border-slate-700/80 shadow-lg truncate max-w-xs md:max-w-md">
        <span className="text-amber-400 font-semibold mr-1.5">Now:</span>
        <span className="truncate">{currentTrackDisplay}</span>
      </div>
    </div>
  );
};

export default RadioPlayer;
