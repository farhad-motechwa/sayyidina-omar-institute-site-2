import React, { useState, useRef } from 'react';
import { siteConfig } from '../../data/siteData';
import { Radio, Play, Pause, ExternalLink, BookOpen, Headphones, Disc3, History, Music } from 'lucide-react';
import Button from '../ui/Button';
import { useRadioNowPlaying, STREAM_URL, PUBLIC_PLAYER_URL } from '../../hooks/useRadioNowPlaying';

export const RadioPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { songText, songHistory } = useRadioNowPlaying();

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const nowPlayingLabel = songText || "Sayyidina Omar Institute Radio";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
          <Radio className="w-3.5 h-3.5 text-amber-400" /> DIGITAL BROADCAST
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          SOI Radio
        </h1>

        <p className="text-lg sm:text-xl font-serif text-amber-200/90 font-medium max-w-2xl mx-auto">
          Recitation, reflection and discourse, streaming continuously from Perth.
        </p>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl mx-auto pt-1">
          24/7 continuous stream featuring sacred Qur'anic recitations, classical audio lectures, youth reflections, and community broadcasts.
        </p>
      </div>

      {/* Embedded Live Player Card */}
      <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
        <audio ref={audioRef} src={STREAM_URL} preload="none" />
        
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
          isPlaying 
            ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30 scale-105' 
            : 'bg-amber-400/10 border border-amber-400/30 text-amber-400'
        }`}>
          {isPlaying ? <Disc3 className="w-10 h-10 animate-spin" /> : <Headphones className="w-10 h-10" />}
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            {isPlaying ? 'Live Stream Playing' : 'Live Stream Ready'}
          </span>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 max-w-md mx-auto space-y-1">
            <span className="text-[11px] uppercase tracking-widest font-bold text-amber-400 block">
              Now Playing
            </span>
            <p className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
              {nowPlayingLabel}
            </p>
          </div>

          <p className="text-xs text-slate-400">
            Broadcasting from Perth, Western Australia to listeners worldwide.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={togglePlay}
            className={`px-8 py-4 rounded-full text-base font-bold shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer ${
              isPlaying 
                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            }`}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
            <span>{isPlaying ? 'Pause Radio Stream' : 'Listen Live Now'}</span>
          </button>

          <a
            href={PUBLIC_PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-slate-300 hover:text-amber-300 font-medium inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <span>Open the full player</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Broadcast Track History */}
      {songHistory && songHistory.length > 0 && (
        <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800/80 pb-3">
            <History className="w-5 h-5" />
            <h3 className="text-base font-serif font-bold text-white">
              Recently Played Tracks
            </h3>
          </div>

          <div className="divide-y divide-slate-800/60">
            {songHistory.slice(0, 5).map((item, idx) => {
              const text = item.song?.text || (item.song?.title ? `${item.song.artist ? `${item.song.artist} - ` : ''}${item.song.title}` : 'Recitation / Reflection');
              const playedTime = item.played_at ? new Date(item.played_at * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

              return (
                <div key={idx} className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <Music className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className="text-slate-200 truncate font-medium">{text}</span>
                  </div>
                  {playedTime && (
                    <span className="text-slate-500 text-xs font-mono flex-shrink-0">{playedTime}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Substack / Farhad Omar Studios Section */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-serif font-bold text-white">Farhad Omar Studios</h3>
          </div>
          <p className="text-xs text-slate-400 max-w-md font-light">
            Subscribe on Substack for monthly reflections, essays, podcast transcripts, and educational insights accompanying our broadcasts.
          </p>
        </div>

        <a href={siteConfig.substackUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-xs px-5 py-2.5">
            <span>Farhad Omar Studios on Substack</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </a>
      </div>

    </div>
  );
};

export default RadioPage;
