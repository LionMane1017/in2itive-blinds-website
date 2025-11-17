import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveChatWidgetProps {
  onClose?: () => void;
}

export function LiveChatWidget({ onClose }: LiveChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! Welcome to Wise Media I.T. Consultancy. How can we help you today?", isUser: false }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please email us at contact@mywisemedia.com or call us during business hours.",
          isUser: false
        }
      ]);
    }, 1000);

    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{
            backdropFilter: 'blur(15px) saturate(91%)',
            WebkitBackdropFilter: 'blur(15px) saturate(91%)',
          }}
          className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white/10 border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-xs opacity-90">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onClose?.();
              }}
              className="hover:bg-primary-foreground/20 rounded p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-transparent" style={{ maxHeight: "400px" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20 bg-transparent">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="px-3"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Email: contact@mywisemedia.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}
