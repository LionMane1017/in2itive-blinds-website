import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Clapperboard, Film, Blinds, Sun, Moon, ChevronDown, AlertTriangle, Shield, FileText, Check, X } from 'lucide-react';
import { Layout } from '@/components/Layout';
import contentData from '@/data/content.json';

// 📹 Expanded Video Configuration
const VIDEO_DATA = {
  demo: {
    id: 'demo',
    title: 'Demo Reel',
    src: contentData.filmProduction.videos.demo,    poster: '/images/film-poster.jpg',
    badge: 'ENTERTAINMENT',
    icon: <Clapperboard size={16} />
  },
  motorized: {
    id: 'motorized',
    title: 'Smart Motorization',
    src: contentData.filmProduction.videos.motorized,
    poster: '/images/film-poster.jpg',
    badge: 'SMART HOME',
    icon: <Blinds size={16} />
  },
  lifestyle: {
    id: 'lifestyle',
    title: 'Lifestyle',
    src: contentData.filmProduction.videos.lifestyle,
    poster: '/images/film-poster.jpg',
    badge: 'INTERIOR DESIGN',
    icon: <Sun size={16} />
  },
  cinema: {
    id: 'cinema',
    title: 'Cinema Mode',
    src: contentData.filmProduction.videos.cinema,
    poster: '/images/film-poster.jpg',
    badge: 'BLACKOUT',
    icon: <Moon size={16} />
  }
};

// Accordion Component
const AccordionItem = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-yellow-500" />}
          <h3 className="text-lg font-bold text-white text-left">{title}</h3>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="px-6 py-4 text-gray-300 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const FilmProduction = () => {
  const [activeVideo, setActiveVideo] = useState('demo');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [theaterMode, setTheaterMode] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [currentMarketingText, setCurrentMarketingText] = useState(0);
  
  const videoRef = useRef(null);

  // Marketing messages that rotate during video playback
  const marketingMessages = [
    { text: "Factory Direct Pricing", subtext: "No middleman markup" },
    { text: "Free In-Home Consultation", subtext: "Expert design advice" },
    { text: "Professional Installation", subtext: "Perfect fit guaranteed" },
    { text: "Smart Home Integration", subtext: "Works with Alexa & Google" },
    { text: "Lifetime Warranty", subtext: "Quality you can trust" },
    { text: "Serving Ontario", subtext: "Local expertise since 2010" }
  ];

  // 🎭 Auto-open curtains on mount
  useEffect(() => {
    const timer = setTimeout(() => setCurtainsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // 🌓 Toggle Dark Mode for whole page
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);

  // Rotate marketing messages every 4 seconds during playback
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentMarketingText((prev) => (prev + 1) % marketingMessages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

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

  const handleVideoSwitch = (videoId) => {
    if (activeVideo === videoId) return;
    
    // Reset state before switching
    setIsPlaying(false);
    setTheaterMode(false);
    setActiveVideo(videoId);
  };

  const currentVideo = VIDEO_DATA[activeVideo];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative font-sans">
      
      {/* 💡 Dynamic Lighting Overlay (Behind video, z-index 10) */}
      <div className={`fixed inset-0 pointer-events-none z-10 transition-opacity duration-[2000ms] ease-in-out bg-black ${theaterMode ? 'opacity-30' : 'opacity-0'}`} />

      {/* 🚪 Curtains */}
      <div className={`fixed inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-950 to-red-900 z-50 transition-transform duration-[3000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${curtainsOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute right-0 h-full w-12 bg-gradient-to-l from-black/50 to-transparent" />
      </div>
      <div className={`fixed inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-950 to-red-900 z-50 transition-transform duration-[3000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${curtainsOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute left-0 h-full w-12 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* 📄 Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-20">
        
        {/* Title Section */}
        <div className={`text-center mb-8 transition-all duration-1000 ${theaterMode ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6">
                <Clapperboard size={18} />
                <span className="text-sm font-bold tracking-widest">INDUSTRY STANDARD</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                Absolute Light Control
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized window covering solutions for film, television, and commercial productions
            </p>
        </div>

        {/* 🎬 Video Switcher UI - 4 Buttons */}
        <div className={`flex justify-center mb-8 transition-opacity duration-500 ${theaterMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex flex-wrap justify-center relative backdrop-blur-md shadow-2xl gap-1">
                {Object.values(VIDEO_DATA).map((video) => (
                    <button
                        key={video.id}
                        onClick={() => handleVideoSwitch(video.id)}
                        className={`
                            relative z-10 px-4 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold transition-all duration-300
                            ${activeVideo === video.id ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}
                        `}
                    >
                        {video.icon}
                        {video.title}
                    </button>
                ))}
            </div>
        </div>

        {/* 🎥 Video Player Container */}
        <div className={`relative aspect-video w-full bg-black rounded-xl border border-white/10 overflow-hidden transition-all duration-1000 group ${theaterMode ? 'scale-105 shadow-[0_0_100px_rgba(255,255,255,0.1)] z-50' : 'scale-100 shadow-2xl'}`}>
            
            {/* Badge */}
            <div className="absolute top-6 right-6 z-20 bg-red-600 text-white text-xs font-black tracking-widest px-3 py-1 rounded animate-pulse shadow-lg">
                {currentVideo.badge}
            </div>

            <video 
                key={activeVideo} // Forces re-render on switch
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={currentVideo.poster}
                playsInline
                loop
                muted={isMuted}
                onEnded={() => setTheaterMode(false)}
            >
                <source src={currentVideo.src} type="video/mp4" />
            </video>

            {/* Marketing Text Overlay - Only shows when playing */}
            {isPlaying && (
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center z-30 pointer-events-none">
                <div className="animate-fade-in-out">
                  <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-2">
                    {marketingMessages[currentMarketingText].text}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {marketingMessages[currentMarketingText].subtext}
                  </p>
                </div>
              </div>
            )}

            {/* Custom Controls Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <button 
                    onClick={togglePlay}
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:scale-110 transition-all hover:bg-white/20 group/btn"
                >
                    {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-2" />}
                </button>
            </div>
            
            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-center">
                 <div className="text-sm font-mono text-gray-400 flex items-center gap-2">
                    <Film size={16} />
                    {activeVideo.toUpperCase()} // SEQUENCE_001
                 </div>
                 <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-yellow-400 transition-colors">
                    {isMuted ? <VolumeX /> : <Volume2 />}
                 </button>
            </div>
        </div>

        {/* Legal & Compliance Content in Accordions */}
        <div className={`mt-16 space-y-4 transition-opacity duration-1000 ${theaterMode ? 'opacity-10 pointer-events-none blur-sm' : 'opacity-100'}`}>
          
          {/* Critical Safety Information - Always Visible */}
          <div className="bg-red-950/30 border-2 border-red-900/50 p-8 rounded-xl mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-3">⚠️ Critical Safety Information</h2>
                <p className="text-gray-300 mb-4">
                  Corded window coverings pose serious strangulation hazards to children. These products are <strong>ONLY available for verified commercial use</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg border border-red-900/30">
                    <div className="text-4xl font-bold text-red-500 mb-1">39</div>
                    <div className="text-sm font-semibold text-white">Deaths in Canada</div>
                    <div className="text-xs text-gray-400">1989-2018 from cord strangulation</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-red-900/30">
                    <div className="text-4xl font-bold text-red-500 mb-1">22cm</div>
                    <div className="text-sm font-semibold text-white">Danger Threshold</div>
                    <div className="text-xs text-gray-400">Min cord length that can strangle</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-red-900/30">
                    <div className="text-4xl font-bold text-red-500 mb-1">6min</div>
                    <div className="text-sm font-semibold text-white">Time to Death</div>
                    <div className="text-xs text-gray-400">How quickly it can occur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion: Legal Framework */}
          <AccordionItem title="Legal Framework & Compliance" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">The Regulations</h4>
                <p>
                  Canada's <strong>Corded Window Coverings Regulations (SOR/2019-97)</strong>, effective May 1, 2021, prohibit the sale of corded blinds for residential/consumer use due to child strangulation hazards.
                </p>
                <a 
                  href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2019-97/FullText.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 underline inline-flex items-center gap-2 mt-2"
                >
                  View Full Regulations →
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Commercial Exemption</h4>
                <p>
                  The regulations include a <strong>commercial use exemption</strong> for businesses where children under 6 do not have unrestricted access. This includes film/TV studios, corporate offices, and production facilities.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Accordion: Why Film Needs Corded Blinds */}
          <AccordionItem title="Why Film & TV Production Needs Corded Blinds" icon={Film}>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Aesthetic Authenticity
                </h4>
                <p>Period pieces and realistic settings require traditional corded blinds for historical accuracy and visual authenticity.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Precise Control
                </h4>
                <p>Directors need exact, repeatable positioning for lighting consistency across multiple takes and scenes.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  No Battery/Power Issues
                </h4>
                <p>Corded systems eliminate the risk of motorized failures during critical filming moments.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Silent Operation
                </h4>
                <p>Manual cords operate silently, avoiding motor noise that could ruin audio takes.</p>
              </div>
            </div>
          </AccordionItem>

          {/* Accordion: Commercial Verification Process */}
          <AccordionItem title="Commercial Verification Process" icon={FileText}>
            <div className="space-y-4">
              <p className="font-semibold text-white">To purchase corded blinds for film/TV production, you must provide:</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <strong className="text-white">Business Registration</strong>
                    <p className="text-sm">Valid business license or incorporation documents</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <strong className="text-white">Facility Documentation</strong>
                    <p className="text-sm">Proof of commercial studio/production facility address</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <strong className="text-white">Access Control Statement</strong>
                    <p className="text-sm">Written confirmation that children under 6 do not have unrestricted access</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                  <div>
                    <strong className="text-white">Production Evidence</strong>
                    <p className="text-sm">Recent production credits, portfolio, or industry membership (IATSE, DGC, etc.)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                  <div>
                    <strong className="text-white">Signed Declaration</strong>
                    <p className="text-sm">Legal attestation of commercial use only</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Accordion: Available Products */}
          <AccordionItem title="Available Products for Commercial Use" icon={Blinds}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Venetian Blinds (Corded)</h4>
                <p className="text-sm">Traditional horizontal slats with precise tilt and lift control</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Vertical Blinds (Corded)</h4>
                <p className="text-sm">Large windows and sliding doors with smooth operation</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Roman Shades (Corded)</h4>
                <p className="text-sm">Elegant fabric folds for sophisticated set design</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Roller Shades (Corded)</h4>
                <p className="text-sm">Clean lines with blackout options for light control</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Cellular Shades (Corded)</h4>
                <p className="text-sm">Energy-efficient honeycomb design with cord operation</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-white mb-2">Pleated Shades (Corded)</h4>
                <p className="text-sm">Lightweight and versatile for various window sizes</p>
              </div>
            </div>
          </AccordionItem>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 p-8 rounded-xl text-center mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Equip Your Production?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our commercial division to discuss your project requirements and begin the verification process.
            </p>
            <a 
              href="/contact-sales"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Commercial Division →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmProduction;
