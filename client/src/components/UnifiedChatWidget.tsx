import { MessageCircle, Mic } from "lucide-react";
import { useState } from "react";

interface UnifiedChatWidgetProps {
  onOpenLiveChat: () => void;
  onOpenVoiceAssistant: () => void;
}

export default function UnifiedChatWidget({ onOpenLiveChat, onOpenVoiceAssistant }: UnifiedChatWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded Options */}
      <div className={`flex flex-col gap-2 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* Voice Assistant Option */}
        <button
          onClick={onOpenVoiceAssistant}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          aria-label="Open AI Voice Assistant"
        >
          <Mic className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">AI Voice Assistant</span>
        </button>

        {/* Live Chat Option */}
        <button
          onClick={onOpenLiveChat}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          aria-label="Open Live Chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">Live Chat</span>
        </button>
      </div>

      {/* Main Button */}
      <button
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-110"
        aria-label="Open chat options"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
