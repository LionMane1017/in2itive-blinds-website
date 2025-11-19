import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Clapperboard, Film } from 'lucide-react';

const FilmProductionTheater = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [theaterMode, setTheaterMode] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const videoRef = useRef(null);

  // 🎭 Auto-open curtains on mount
  useEffect(() => {
    const timer = setTimeout(() => setCurtainsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setTheaterMode(false);
    } else {
      videoRef.current.play();
      setTheaterMode(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      
      {/* 💡 Dynamic Lighting Overlay */}
      <div className={`fixed inset-0 pointer-events-none z-40 transition-colors duration-[2000ms] ease-in-out ${theaterMode ? 'bg-black/90' : 'bg-transparent'}`} />

      {/* 🚪 Curtains: Left */}
      <div className={`fixed inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-950 to-red-900 z-50 transition-transform duration-[3000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${curtainsOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute right-0 h-full w-12 bg-gradient-to-l from-black/50 to-transparent" />
      </div>

      {/* 🚪 Curtains: Right */}
      <div className={`fixed inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-950 to-red-900 z-50 transition-transform duration-[3000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${curtainsOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute left-0 h-full w-12 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* 📄 Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-20">
        
        {/* Title Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${theaterMode ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6">
                <Clapperboard size={18} />
                <span className="text-sm font-bold tracking-widest">INDUSTRY STANDARD</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                Absolute Light Control
            </h1>
        </div>

        {/* 🎥 Video Player Container */}
        <div className={`relative aspect-video w-full bg-black rounded-xl border border-white/10 overflow-hidden transition-all duration-1000 group ${theaterMode ? 'scale-105 shadow-[0_0_100px_rgba(255,255,255,0.1)]' : 'scale-100 shadow-2xl'}`}>
            
            <div className="absolute top-6 right-6 z-20 bg-red-600 text-white text-xs font-black tracking-widest px-3 py-1 rounded animate-pulse">
                COMMERCIAL ONLY
            </div>

            <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/film-poster.jpg"
                playsInline
                loop
                muted={isMuted}
            >
                <source src="/videos/film-demo.mp4" type="video/mp4" />
            </video>

            {/* Custom Controls */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <button 
                    onClick={togglePlay}
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:scale-110 transition-all hover:bg-white/20 group/btn"
                >
                    {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-2" />}
                </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                 <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-yellow-400">
                    {isMuted ? <VolumeX /> : <Volume2 />}
                 </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilmProductionTheater;
