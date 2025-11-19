import React, { useState, useEffect } from 'react';
import { Save, Github, Lock, CheckCircle, AlertCircle, Loader2, Shield } from 'lucide-react';
import { getFileContent, updateFile, GitConfig } from '../services/github';

const DEFAULT_CONFIG = {
  owner: "LionMane1017",
  repo: "in2itive-blinds-website",
  branch: "main",
  token: ""
};

export default function Admin() {
  const [config, setConfig] = useState<GitConfig>(DEFAULT_CONFIG);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState<any>({});
  const [sha, setSha] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{type: string, msg: string} | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('cms_token');
    if (storedToken) {
      setConfig(prev => ({ ...prev, token: storedToken }));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && config.token) loadContent();
  }, [isAuthenticated]);

  const loadContent = async () => {
    setLoading(true);
    try {
      const data = await getFileContent(config, "client/public/content.json");
      setContent(JSON.parse(data.content));
      setSha(data.sha);
      setStatus(null);
    } catch (error) {
      setStatus({ type: 'error', msg: "Connection failed. Check Repository settings." });
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('cms_token', config.token);
    setIsAuthenticated(true);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const jsonString = JSON.stringify(content, null, 2);
      const res = await updateFile(config, "client/public/content.json", jsonString, sha, "chore(cms): update content via admin");
      setSha(res.content.sha);
      setStatus({ type: 'success', msg: "Success! Changes pushed to GitHub." });
    } catch (error) {
      setStatus({ type: 'error', msg: "Save failed." });
    }
    setLoading(false);
  };

  // Login Screen with intense animations
  if (!isAuthenticated) {
    return (
      <>
        <style>{`
          @keyframes radarSweep {
            0% { transform: rotate(0deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: rotate(360deg); opacity: 0; }
          }
          
          @keyframes pulseRing {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          
          @keyframes scanLine {
            0% { top: 0%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          .radar-sweep {
            animation: radarSweep 3s linear infinite;
          }
          
          .pulse-ring {
            animation: pulseRing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .scan-line {
            animation: scanLine 2s ease-in-out infinite;
          }
        `}</style>
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 relative overflow-hidden">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Login box container with animations */}
          <div className="relative z-10">
            
            {/* Pulsing rings - intense and sharp */}
            <div className="absolute inset-0 -m-2">
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-500/30 pulse-ring" style={{ animationDelay: '0s' }} />
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/20 pulse-ring" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-0 rounded-xl border-2 border-blue-500/20 pulse-ring" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Radar sweep effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="radar-sweep absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left" style={{ transformOrigin: '0% 50%' }} />
            </div>
            
            {/* Scanning line */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </div>
            
            {/* Main login card */}
            <div className="relative backdrop-blur-xl bg-gray-900/80 border-2 border-gray-700/50 rounded-xl p-8 max-w-md w-full shadow-2xl">
              
              {/* Sharp corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
              
              {/* Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Shield className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
                  <div className="absolute inset-0 animate-ping">
                    <Shield className="w-16 h-16 text-cyan-400/30" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">RESTRICTED ACCESS</h1>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Admin Authentication Required</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
                </div>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">GitHub Token (PAT)</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:outline-none transition-all"
                    value={config.token}
                    onChange={(e) => setConfig({...config, token: e.target.value})}
                    placeholder="ghp_..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Repository Owner</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:outline-none transition-all"
                    value={config.owner}
                    onChange={(e) => setConfig({...config, owner: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                >
                  <Github className="w-5 h-5" />
                  Authenticate
                </button>
              </form>
              
              {/* Warning footer */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 text-center">
                  ⚠️ Authorized personnel only. All actions are logged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Dashboard Screen - also updated to neutral theme
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gray-900/80 border-2 border-gray-700/50 rounded-xl p-8 mb-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8 text-cyan-400" />
                <h1 className="text-3xl font-bold text-white">CMS Dashboard</h1>
              </div>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg"
              >
                {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Syncing...</> : <><Save className="w-5 h-5" /> Save & Push</>}
              </button>
            </div>

            {status && (
              <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 border-2 ${status.type === 'success' ? 'bg-green-950/50 border-green-500/30 text-green-300' : 'bg-red-950/50 border-red-500/30 text-red-300'}`}>
                {status.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                {status.msg}
              </div>
            )}

            {/* Edit Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-cyan-400">🎬 Film Production Page</h2>
              {content.filmProduction ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Hero Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:outline-none transition-all"
                        value={content.filmProduction.heroTitle}
                        onChange={(e) => setContent({...content, filmProduction: {...content.filmProduction, heroTitle: e.target.value}})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Hero Subtitle</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:outline-none transition-all"
                        value={content.filmProduction.heroSubtitle}
                        onChange={(e) => setContent({...content, filmProduction: {...content.filmProduction, heroSubtitle: e.target.value}})}
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Video Sources (URLs)</h3>
                    <div className="space-y-3">
                      {Object.entries(content.filmProduction.videos || {}).map(([key, val]: any) => (
                        <div key={key}>
                          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">{key} Video</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:outline-none transition-all"
                            value={val}
                            onChange={(e) => {
                              const newVideos = {...content.filmProduction.videos, [key]: e.target.value};
                              setContent({...content, filmProduction: {...content.filmProduction, videos: newVideos}});
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-cyan-400" /> <span className="ml-3 text-gray-400">Loading content from GitHub...</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
