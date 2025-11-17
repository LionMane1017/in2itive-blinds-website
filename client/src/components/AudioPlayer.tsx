import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const audioTracks = [
  {
    title: "Ditching AWS: Eight Month ROI Confirmed",
    file: "/audio/Ditching_AWS_Eight_Month_ROI_Confirmed.m4a",
  },
  {
    title: "ZimaBoard Destroys Cloud Costs: Repatriation Wave",
    file: "/audio/ZimaBoard_Destroys_Cloud_Costs_Repatriation_Wave.m4a",
  },
  {
    title: "ZimaBoard Cloud Repatriation Saves Thousands",
    file: "/audio/ZimaBoard_Cloud_Repatriation_Saves_Thousands.m4a",
  },
  {
    title: "Raspberry Pi 5 vs ZimaBoard: Server Showdown",
    file: "/audio/Raspberry_Pi_5_versus_ZimaBoard_2_Server_Showdown.m4a",
  },
];

interface AudioPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AudioPlayer({ isOpen, onClose }: AudioPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [visualizerData, setVisualizerData] = useState<number[]>(Array(20).fill(0));
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Reset to first track when player opens
  useEffect(() => {
    if (isOpen) {
      setCurrentTrack(0);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (audio.currentTime) {
        setCurrentTime(audio.currentTime);
      }
    };
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => {
      setIsPlaying(false);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setCurrentTrack((prev) => (prev + 1) % audioTracks.length);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", handleEnded);

    // Load the audio when track changes
    audio.load();

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentTrack]);

  const setupAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioRef.current);
    
    analyser.fftSize = 64;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    
    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
  };

  const visualize = () => {
    if (!analyserRef.current) return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    
    const bars = 20;
    const step = Math.floor(dataArray.length / bars);
    const newData = [];
    
    for (let i = 0; i < bars; i++) {
      newData.push(dataArray[i * step] / 255);
    }
    
    setVisualizerData(newData);
    animationRef.current = requestAnimationFrame(visualize);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    } else {
      if (!audioContextRef.current) {
        setupAudioContext();
      }
      audioRef.current.play();
      visualize();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCurrentTrack((prev) => (prev + 1) % audioTracks.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const previousTrack = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCurrentTrack((prev) => (prev - 1 + audioTracks.length) % audioTracks.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl bg-background/80 border-white/20" style={{ backdropFilter: 'blur(14px) saturate(91%)', WebkitBackdropFilter: 'blur(14px) saturate(91%)' }}>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>🎧 Audio Blog</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Track Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{audioTracks[currentTrack].title}</h3>
            <p className="text-sm text-muted-foreground">Track {currentTrack + 1} of {audioTracks.length}</p>
          </div>

          {/* Visualizer */}
          <div className="flex items-end justify-center gap-1 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4">
            {visualizerData.map((value, index) => (
              <div
                key={index}
                className="w-2 bg-primary rounded-t transition-all duration-75"
                style={{
                  height: `${Math.max(isPlaying ? value * 100 : 20, 10)}%`,
                  opacity: isPlaying ? 0.8 : 0.3,
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={seek}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={previousTrack}>
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="icon" className="h-12 w-12" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="outline" size="icon" onClick={nextTrack}>
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
          </div>

          {/* Track List */}
          <div className="space-y-2 max-h-40 overflow-y-auto">
            <h4 className="text-sm font-semibold">Playlist</h4>
            {audioTracks.map((track, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTrack(index);
                  setIsPlaying(false);
                }}
                className={`w-full text-left p-2 rounded text-sm transition-colors ${
                  index === currentTrack
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-muted"
                }`}
              >
                {index + 1}. {track.title}
              </button>
            ))}
          </div>
        </div>

        <audio
          ref={audioRef}
          src={audioTracks[currentTrack].file}
          preload="metadata"
        />
      </DialogContent>
    </Dialog>
  );
}
