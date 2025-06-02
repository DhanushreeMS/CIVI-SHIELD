
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic, MicOff } from 'lucide-react';

interface ChatInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  isListening: boolean;
  isLoading: boolean;
  language: string;
  onSendMessage: () => void;
  onStartVoiceRecognition: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputText,
  setInputText,
  isListening,
  isLoading,
  language,
  onSendMessage,
  onStartVoiceRecognition
}) => {
  return (
    <div className="flex gap-2 mb-3">
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={language === 'hi' ? "अपना आपातकालीन प्रश्न टाइप करें..." : "Type your emergency question..."}
        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && onSendMessage()}
        className="flex-1"
      />
      <Button
        variant="outline"
        size="icon"
        onClick={onStartVoiceRecognition}
        className={`shrink-0 ${isListening ? 'bg-red-100' : ''}`}
      >
        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
      </Button>
      <Button 
        onClick={onSendMessage} 
        disabled={!inputText.trim() || isLoading}
        className="shrink-0"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
