import { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { encode, decode, decodeAudioData } from '@/utils/audio';
import { ChatIcon, CloseIcon, MicrophoneIcon, StopIcon, UserIcon, AssistantIcon } from './AIAssistantIcons';
import type { TranscriptEntry } from '@/../../shared/types';
import { trpc } from '@/lib/trpc';

interface WiseWareAssistantProps {
  onClose?: () => void;
}

const WiseWareAssistant = ({ onClose }: WiseWareAssistantProps = {}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'listening' | 'processing' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [transcripts, setTranscripts] = useState<TranscriptEntry[]>([]);
  const transcriptContainerRef = useRef<HTMLDivElement>(null);

  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const nextAudioStartTimeRef = useRef<number>(0);
  const audioSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const scrollToBottom = () => {
    if (transcriptContainerRef.current) {
      transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
    }
  };

  useEffect(scrollToBottom, [transcripts]);
  
  const systemInstruction = `You are a professional, helpful, and friendly AI assistant for Wise Media I.T. Consultancy. Your goal is to answer questions about the company and its infrastructure feasibility study.

  Use the following information as your knowledge base:
  - Company Name: Wise Media I.T. Consultancy
  - Mission: To help enterprises achieve substantial cost savings by transitioning from cloud providers to owned infrastructure
  - Core Focus: Infrastructure feasibility analysis demonstrating cost-effective alternatives to cloud services
  - Key Services:
    1. Proxmox Cluster Solutions: Enterprise-grade virtualization with owned infrastructure
    2. Cloud Cost Analysis: Comprehensive ROI calculations showing 6-12 month payback periods
    3. Infrastructure Migration: Helping companies eliminate vendor lock-in
    4. Technical Strategy: CTO-level validation and implementation roadmaps
    5. Financial Analysis: Demonstrating substantial annual savings (tens of thousands to millions)

  When asked a question, be concise and professional. Focus on the cost savings, rapid ROI, and freedom from vendor lock-in that owned infrastructure provides. If you don't know the answer, politely state that you can connect the user with a human representative for more detailed information. Keep your spoken responses relatively short and conversational.`;

  const stopSession = useCallback(async () => {
    if (sessionPromiseRef.current) {
      try {
        const session = await sessionPromiseRef.current;
        session.close();
      } catch (e) {
        console.error("Error closing session:", e);
      }
    }
    
    mediaStreamRef.current?.getTracks().forEach(track => track.stop());
    scriptProcessorRef.current?.disconnect();
    inputAudioContextRef.current?.close().catch(console.error);
    outputAudioContextRef.current?.close().catch(console.error);

    audioSourcesRef.current.forEach(source => source.stop());
    audioSourcesRef.current.clear();

    sessionPromiseRef.current = null;
    mediaStreamRef.current = null;
    scriptProcessorRef.current = null;
    inputAudioContextRef.current = null;
    outputAudioContextRef.current = null;
    nextAudioStartTimeRef.current = 0;

    setIsSessionActive(false);
    setStatus('idle');
  }, []);
  
  useEffect(() => {
    return () => {
      stopSession();
    };
  }, [stopSession]);
  
  const startSession = async () => {
    setStatus('connecting');
    setErrorMessage('');
    setTranscripts([]);
    
    try {
      console.log('[Voice Assistant] Requesting microphone access...');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      console.log('[Voice Assistant] Microphone access granted');

      console.log('[Voice Assistant] Creating AudioContext...');
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      console.log('[Voice Assistant] AudioContext created successfully');
      
      console.log('[Voice Assistant] Fetching API key from server...');
      const response = await fetch('/api/trpc/voiceAssistant.getApiKey');
      if (!response.ok) {
        console.error('[Voice Assistant] Failed to fetch API key from server');
        throw new Error('Failed to fetch API key from server');
      }
      const data = await response.json();
      console.log('[Voice Assistant] Server response:', data);
      // TRPC wraps the response in result.data.json
      const apiKey = data.result?.data?.json?.apiKey;
      if (!apiKey) {
        console.error('[Voice Assistant] API key is missing from server response!');
        console.error('[Voice Assistant] Full response:', JSON.stringify(data));
        throw new Error('Google AI API key not configured');
      }
      console.log('[Voice Assistant] API key retrieved from server');
      
      const ai = new GoogleGenAI({ apiKey });
      sessionPromiseRef.current = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: systemInstruction,
        },
        callbacks: {
          onopen: () => {
            const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
            scriptProcessorRef.current = scriptProcessor;

            scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
              const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
              const pcmBlob = {
                data: encode(new Uint8Array(new Int16Array(inputData.map(f => f * 32768)).buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromiseRef.current?.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContextRef.current!.destination);
            setIsSessionActive(true);
            setStatus('listening');
          },
          onmessage: async (message: LiveServerMessage) => {
             if (message.serverContent?.inputTranscription) {
                const transcription = message.serverContent.inputTranscription;
                const text = transcription.text;
                const isFinal = (transcription as any).isFinal || false;
                if (text) {
                  setTranscripts(prev => {
                      const last = prev[prev.length - 1];
                      if (last && last.speaker === 'user' && !last.isFinal) {
                          return [...prev.slice(0, -1), { speaker: 'user', text: last.text + text, isFinal }];
                      }
                      return [...prev, { speaker: 'user', text, isFinal }];
                  });
                }
            } else if (message.serverContent?.outputTranscription) {
                const transcription = message.serverContent.outputTranscription;
                const text = transcription.text;
                const isFinal = (transcription as any).isFinal || false;
                if (text) {
                  setTranscripts(prev => {
                      const last = prev[prev.length - 1];
                      if (last && last.speaker === 'assistant' && !last.isFinal) {
                          return [...prev.slice(0, -1), { speaker: 'assistant', text: last.text + text, isFinal }];
                      }
                      return [...prev, { speaker: 'assistant', text, isFinal }];
                  });
                }
            } else if (message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data) {
                const base64Audio = message.serverContent.modelTurn.parts[0].inlineData.data;
                const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContextRef.current!, 24000, 1);
                
                nextAudioStartTimeRef.current = Math.max(nextAudioStartTimeRef.current, outputAudioContextRef.current!.currentTime);
                
                const source = outputAudioContextRef.current!.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(outputAudioContextRef.current!.destination);
                source.onended = () => audioSourcesRef.current.delete(source);
                source.start(nextAudioStartTimeRef.current);
                
                nextAudioStartTimeRef.current += audioBuffer.duration;
                audioSourcesRef.current.add(source);
            }
             if (message.serverContent?.turnComplete) {
                setTranscripts(prev => prev.map(t => ({...t, isFinal: true})));
            }
          },
          onerror: (e: ErrorEvent) => {
            console.error('Session error:', e);
            setErrorMessage(`An error occurred. Please try again.`);
            setStatus('error');
            stopSession();
          },
          onclose: () => {
             console.log('Session closed');
          },
        },
      });
    } catch (error: any) {
        console.error('[Voice Assistant] Failed to start session:', error);
        console.error('[Voice Assistant] Error name:', error.name);
        console.error('[Voice Assistant] Error message:', error.message);
        console.error('[Voice Assistant] Full error:', JSON.stringify(error, null, 2));
        
        let userMessage = 'Could not access microphone. Please check permissions and try again.';
        if (error.message && error.message.includes('API key')) {
          userMessage = 'API key configuration error. Please contact support.';
        } else if (error.name === 'NotAllowedError') {
          userMessage = 'Microphone access denied. Please allow microphone access in your browser settings.';
        } else if (error.name === 'NotFoundError') {
          userMessage = 'No microphone found. Please connect a microphone and try again.';
        }
        
        setErrorMessage(userMessage);
        setStatus('error');
    }
  };

  const statusText = {
    idle: "Press the microphone to start",
    connecting: "Connecting...",
    listening: "Listening... feel free to speak.",
    processing: "Processing...",
    error: "Error",
  };

  return (
    <>


      {/* Assistant Panel */}
      <div
        style={{
          backdropFilter: 'blur(15px) saturate(91%)',
          WebkitBackdropFilter: 'blur(15px) saturate(91%)',
        }}
        className={`fixed bottom-24 left-6 z-40 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white/10 border border-white/20 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
          <h2 className="text-xl font-bold">🎙️ Wise AI Voice Assistant</h2>
          <button 
            onClick={() => {
              setIsOpen(false);
              onClose?.();
            }} 
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close assistant"
          >
            <CloseIcon className="w-6 h-6"/>
          </button>
        </header>

        {/* Transcript Area */}
        <div 
          ref={transcriptContainerRef}
          className="flex-1 p-4 overflow-y-auto bg-transparent space-y-3"
        >
          {transcripts.length === 0 && (
            <div className="text-center text-foreground dark:text-white py-8">
              <p className="text-sm">Click the microphone to start a voice conversation</p>
              <p className="text-xs mt-2">Ask about infrastructure costs, ROI, or our services</p>
            </div>
          )}
          {transcripts.map((entry, idx) => (
            <div
              key={idx}
              className={`flex gap-2 ${entry.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {entry.speaker === 'assistant' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <AssistantIcon className="w-5 h-5 text-white" />
                </div>
              )}
                        <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  entry.speaker === 'user'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-white/20 backdrop-blur-md text-foreground dark:text-white'
                } ${!entry.isFinal ? 'opacity-70' : ''}`}
              >
                <p className="text-sm whitespace-pre-wrap">{entry.text}</p>
              </div>
              {entry.speaker === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer with Controls */}
        <footer className="p-4 border-t border-white/20 bg-transparent">
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm text-center">
              <p className={`font-medium ${status === 'error' ? 'text-red-500 dark:text-red-300' : 'text-foreground dark:text-white'}`}>
                {statusText[status]}
              </p>
              {errorMessage && (
                <p className="text-xs text-red-500 dark:text-red-300 mt-1">{errorMessage}</p>
              )}
            </div>
            
            <button
              onClick={isSessionActive ? stopSession : startSession}
              disabled={status === 'connecting'}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSessionActive
                  ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
              } disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-lg`}
              aria-label={isSessionActive ? 'Stop listening' : 'Start listening'}
            >
              {isSessionActive ? (
                <StopIcon className="w-8 h-8" />
              ) : (
                <MicrophoneIcon className="w-8 h-8" />
              )}
            </button>
            
            <p className="text-xs text-muted-foreground dark:text-white/80 text-center">
              {isSessionActive ? 'Click to stop' : 'Click to start voice chat'}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WiseWareAssistant;
