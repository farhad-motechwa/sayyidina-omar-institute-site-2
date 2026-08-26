import { useState, useEffect } from 'react';

export const NOW_PLAYING_API_URL = "https://radio.sayyidinaomarinstitute.au/api/nowplaying/sayyidina_omar_institute_radio";
export const PUBLIC_PLAYER_URL = "https://radio.sayyidinaomarinstitute.au/public/sayyidina_omar_institute_radio";
export const STREAM_URL = "https://radio.sayyidinaomarinstitute.au/listen/sayyidina_omar_institute_radio/radio.mp3";

export interface SongInfo {
  title?: string;
  artist?: string;
  album?: string;
  text?: string;
  art?: string;
}

export interface SongHistoryItem {
  sh_id?: number;
  played_at?: number;
  duration?: number;
  playlist?: string;
  song?: SongInfo;
}

export interface NowPlayingResponse {
  now_playing?: {
    song?: SongInfo;
    is_live?: boolean;
    streamer_name?: string;
  };
  song_history?: SongHistoryItem[];
}

export function useRadioNowPlaying() {
  const [data, setData] = useState<NowPlayingResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(NOW_PLAYING_API_URL, {
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: NowPlayingResponse = await res.json();
        if (isMounted) {
          setData(json);
          setError(false);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.warn("Could not fetch SOI Radio now playing info:", err);
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchNowPlaying();

    // Poll every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const songText = data?.now_playing?.song?.text || 
    (data?.now_playing?.song?.title ? `${data.now_playing.song.artist ? `${data.now_playing.song.artist} - ` : ''}${data.now_playing.song.title}` : null);

  const songHistory = data?.song_history || [];

  return {
    data,
    songText,
    songHistory,
    loading,
    error
  };
}
