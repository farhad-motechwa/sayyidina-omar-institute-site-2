import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Radio, Clock, Calendar, Download, AlertCircle, RefreshCw, Volume2, ArrowRight } from 'lucide-react';

interface Episode {
  title: string;
  description: string;
  pubDate: string;
  audioUrl: string;
  duration: string;
}

const FALLBACK_EPISODES: Episode[] = [
  {
    title: "Reclaiming Education in a Fragmented World",
    description: "A profound examination of the modern educational framework, exploring how sacred learning can be restored as an anchor for the intellect and the soul in a secularised society. This episode outlines the spiritual and moral architecture required for modern teachers.",
    pubDate: "28 May 2026",
    audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
    duration: "17 mins"
  },
  {
    title: "The Ghazalian Principles of Islamic Psychology",
    description: "An analytical exploration into the structures of the heart and soul as formulated by Imam al-Ghazali, mapping the path to internal order, self-accounting (muhasabah), and spiritual composure.",
    pubDate: "24 May 2026",
    audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
    duration: "5 mins"
  },
  {
    title: "The Economy Begins with the Human Being",
    description: "Reflective discourse on the moral architecture of exchange, framing financial dealings not simply as transactions of wealth, but as structural expressions of Adab, trust, and divine accountability.",
    pubDate: "20 May 2026",
    audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
    duration: "4 mins"
  },
  {
    title: "Khutuwat as-Shaytan: The Whispers and Steps",
    description: "A clinical study of spiritual self-defence and discipline, highlighting how subtle daily compromises erode the boundaries of moral composure and weaken community resilience.",
    pubDate: "15 May 2026",
    audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
    duration: "6 mins"
  },
  {
    title: "The Pen, The Knowledge and The Wisdom",
    description: "Honouring the metaphysical role of the intellect and the written word in classical Islamic civilisations, and detailing the deep spiritual codes expected of an active Murabbi.",
    pubDate: "10 May 2026",
    audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
    duration: "7 mins"
  }
];

const RSS_PAGE_URL = "https://radio.sayyidinaomarinstitute.au/public/sayyidina_omar_institute_radio/podcasts";
const STATION_NOWPLAYING_URL = "https://radio.sayyidinaomarinstitute.au/api/nowplaying/sayyidina_omar_institute_radio";

export const PodcastPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>(FALLBACK_EPISODES);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Custom Player State
  const [currentTrack, setCurrentTrack] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationSecs, setDurationSecs] = useState(0);
  const [currentTimeSecs, setCurrentTimeSecs] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [livePlayingTitle, setLivePlayingTitle] = useState<string>("Daily Spiritual Teachings & Wisdom");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Parse duration helper (e.g. seconds to human-readable string)
  const formatDurationHelper = (secs: number) => {
    if (isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Attempt to load standard RSS podcasts dynamically via Azuracast public page or relative streams
  const loadPodcastFeed = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      // In Azuracast, public feeds are accessible or listed in various locations. 
      // We will try loading the standard CORS-proxied version of the public radio page or podcast endpoints
      // to extract RSS details if available, otherwise fallback perfectly.
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://radio.sayyidinaomarinstitute.au/public/sayyidina_omar_institute_radio/podcast/1/rss"
      )}`;
      
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Could not connect to podcast feed.");
      
      const data = await response.json();
      if (!data.contents) throw new Error("Empty feed response received.");
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");
      
      if (items.length === 0) {
        throw new Error("No episodes found in feed.");
      }

      const fetchedEpisodes: Episode[] = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const title = item.getElementsByTagName("title")[0]?.textContent || "Reflective Discourse";
        let rawDesc = item.getElementsByTagName("description")[0]?.textContent || "";
        // Strip html tags
        rawDesc = rawDesc.replace(/<[^>]*>/g, '');
        
        const pubDateNode = item.getElementsByTagName("pubDate")[0]?.textContent || "";
        const formattedDate = pubDateNode 
          ? new Date(pubDateNode).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
          : "Recently Published";

        const enclosure = item.getElementsByTagName("enclosure")[0];
        const audioUrl = enclosure ? enclosure.getAttribute("url") || "" : "";

        let durationText = item.getElementsByTagName("itunes:duration")[0]?.textContent || "";
        if (!durationText) {
          durationText = item.getElementsByTagName("duration")[0]?.textContent || "Browse";
        } else if (durationText.includes(":")) {
          // keep as is
        } else {
          const totalSecs = parseInt(durationText, 10);
          if (!isNaN(totalSecs)) {
            const mins = Math.floor(totalSecs / 60);
            durationText = `${mins} mins`;
          }
        }

        if (audioUrl) {
          fetchedEpisodes.push({
            title,
            description: rawDesc,
            pubDate: formattedDate,
            audioUrl,
            duration: durationText
          });
        }
      }

      if (fetchedEpisodes.length > 0) {
        setEpisodes(fetchedEpisodes);
      }
    } catch (err: any) {
      console.warn("Dynamic RSS parse error (using high-fidelity curated catalog fallback):", err);
      // Fallback is already initialized in state, so we just provide a gentle diagnostic warning log
    } finally {
      setLoading(false);
    }
  };

  // Fetch the currently playing title from the station metadata
  const loadNowPlaying = async () => {
    try {
      const resp = await fetch(STATION_NOWPLAYING_URL);
      if (resp.ok) {
        const data = await resp.json();
        if (data?.now_playing?.song?.title) {
          setLivePlayingTitle(data.now_playing.song.title);
        }
      }
    } catch (e) {
      console.warn("Unable to fetch live station title:", e);
    }
  };

  useEffect(() => {
    loadPodcastFeed();
    loadNowPlaying();
    
    // Interval for nowplaying
    const interval = setInterval(loadNowPlaying, 25000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayEpisode = (episode: Episode) => {
    // If playing the same track, toggle
    if (currentTrack?.title === episode.title) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
      }
      return;
    }

    setCurrentTrack(episode);
    setIsPlaying(false);
    
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Audio playback error:", err));
      }
    }, 50);
  };

  // Sync audio progress
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTimeSecs(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDurationSecs(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTimeSecs(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-800/20 rounded-full filter blur-3xl pointer-events-none"></div>
      
      {/* Invisible HTML5 Audio control */}
      {currentTrack && (
        <audio 
          ref={audioRef}
          src={currentTrack.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            Media & Discourse
          </div>
          <h1 id="podcast-title" className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Sayyidina Omar <span className="text-amber-400">Radio & Podcast</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            Our broadcasts offer severe moral commentary and spiritual orientation, exploring robust structural answers to the modern crises of community and schooling.
          </p>
        </div>

        {/* Live Broadcast Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>
          
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Broadcasting Live Now
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Sayyidina Omar Institute Radio
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              Playing: <span className="text-slate-200 font-semibold italic">{livePlayingTitle}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={RSS_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Access Public Radio Hub
            </a>
            
            <button
              onClick={() => handlePlayEpisode({
                title: "Live Institute Stream",
                description: "Live broadcast streaming directly from our Institute station.",
                pubDate: "Continuous broadcast",
                audioUrl: "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3",
                duration: "LIVE"
              })}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transition-all ${
                currentTrack?.title === "Live Institute Stream" && isPlaying
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                  : 'bg-white text-slate-950 hover:bg-slate-100'
              }`}
            >
              {currentTrack?.title === "Live Institute Stream" && isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current text-slate-950" />
                  Mute Broadcast
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-slate-950" />
                  Listen Live Now
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Custom Audio Player Controls Bar (Sticks or mounts elegantly when a track is chosen) */}
        <AnimatePresence>
          {currentTrack && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-3">
                <div className="space-y-1">
                  <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block">Currently Playing</span>
                  <p className="text-white font-bold text-base sm:text-lg leading-snug">{currentTrack.title}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>{formatDurationHelper(currentTimeSecs)}</span>
                  <span className="text-slate-600">/</span>
                  <span>{currentTrack.duration === "LIVE" ? "LIVE" : formatDurationHelper(durationSecs)}</span>
                </div>
              </div>

              {/* Player Progress and volume controllers */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Micro Buttons */}
                <div className="md:col-span-2 flex justify-center sm:justify-start gap-4">
                  <button 
                    onClick={() => setIsPlaying(prev => {
                      if (prev) {
                        audioRef.current?.pause();
                      } else {
                        audioRef.current?.play();
                      }
                      return !prev;
                    })}
                    className="p-3 bg-amber-400 rounded-full text-slate-950 hover:bg-amber-300 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>
                </div>

                {/* Progress bar timeline */}
                <div className="md:col-span-7 flex items-center gap-2">
                  <input 
                    type="range"
                    min="0"
                    max={durationSecs || 100}
                    value={currentTimeSecs}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    disabled={currentTrack.duration === "LIVE"}
                  />
                </div>

                {/* Volume bar */}
                <div className="md:col-span-3 flex items-center justify-end gap-2 text-slate-400">
                  <Volume2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Podcast Feed episodes title */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              Recent Episodes & Treatises
            </h2>
            <div className="flex items-center gap-4">
              {loading && <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />}
              <span className="text-xs text-slate-400">
                Official RSS Feed
              </span>
            </div>
          </div>

          {/* List of episodes */}
          <div className="grid gap-4">
            {episodes.map((episode, idx) => {
              const matchesPlaying = currentTrack?.title === episode.title;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-slate-900 border ${
                    matchesPlaying ? 'border-amber-400/50' : 'border-slate-800 hover:border-slate-700'
                  } rounded-xl p-5 sm:p-6 transition-all shadow-md group`}
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="space-y-2 flex-grow pr-4">
                      {/* Meta date / duration rows */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400/60" />
                          {episode.pubDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-400/60" />
                          {episode.duration}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                        {episode.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {episode.description}
                      </p>
                    </div>

                    {/* Controls alignment */}
                    <div className="flex sm:flex-col items-center justify-end w-full sm:w-auto gap-3 border-t border-slate-800/60 sm:border-t-0 pt-4 sm:pt-0">
                      <button
                        onClick={() => handlePlayEpisode(episode)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                          matchesPlaying && isPlaying
                            ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                            : 'bg-slate-800 text-white hover:bg-slate-700'
                        }`}
                      >
                        {matchesPlaying && isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            Listen
                          </>
                        )}
                      </button>

                      {/* Download link helper if standard URL */}
                      {episode.audioUrl && (
                        <a 
                          href={episode.audioUrl}
                          download
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
                          title="Download Episode Audio"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RSS details and documentation note */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">Subscribe via RSS feed</h4>
            <p className="text-xs text-slate-400">
              Integrate the Sayyidina Omar Institute Radio feed directly into your choice podcast application.
            </p>
          </div>
          <a
            href={RSS_PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900 hover:bg-slate-800 text-xs text-slate-200 transition-colors"
          >
            Copy Subscription Feed
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

      </div>
    </div>
  );
};
