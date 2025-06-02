
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { getEmergencyResponses, detectEmergencyIntent } from '@/utils/emergencyResponses';
import ChatHeader from './chat/ChatHeader';
import MessageList from './chat/MessageList';
import ChatInput from './chat/ChatInput';
import QuickReplies from './chat/QuickReplies';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt: string;
  language: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  location?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose, initialPrompt, language }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [userLocation, setUserLocation] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && initialPrompt && messages.length === 0) {
      handleSendMessage(initialPrompt);
    }
  }, [isOpen, initialPrompt]);

  useEffect(() => {
    if (isOpen) {
      getUserLocation();
    }
  }, [isOpen]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        },
        (error) => {
          console.log('Location access denied:', error);
          setUserLocation('Unable to fetch location');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        }
      );
    } else {
      setUserLocation('Geolocation not supported');
    }
  };

  const simulateGPTResponse = async (message: string, language: string, location: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const responses = getEmergencyResponses(language);
    const intent = detectEmergencyIntent(message);
    
    const response = responses[intent] || responses.default;
    return response + location;
  };

  const handleSendMessage = async (messageText: string = inputText) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
      location: userLocation
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await simulateGPTResponse(messageText, language, userLocation);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'hi' 
          ? "मुझे खुशी होगी कि मैं अभी कनेक्ट नहीं हो पा रहा हूं। आपातकाल के लिए 108 पर कॉल करें।"
          : "I'm having trouble connecting. For emergencies, call 108 immediately.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'hi' ? 'hi-IN' : language === 'ta' ? 'ta-IN' : language === 'te' ? 'te-IN' : language === 'kn' ? 'kn-IN' : 'en-IN';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
        alert('Voice recognition failed. Please try again.');
      };

      recognition.start();
    } else {
      alert('Voice recognition not supported in this browser');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[90vh] flex flex-col">
        <ChatHeader 
          language={language}
          userLocation={userLocation}
          onClose={onClose}
        />

        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          <MessageList 
            messages={messages}
            isTyping={isTyping}
            messagesEndRef={messagesEndRef}
          />

          <div className="border-t p-4 shrink-0">
            <ChatInput
              inputText={inputText}
              setInputText={setInputText}
              isListening={isListening}
              isLoading={isLoading}
              language={language}
              onSendMessage={handleSendMessage}
              onStartVoiceRecognition={startVoiceRecognition}
            />
            
            <QuickReplies 
              language={language}
              onQuickReply={handleSendMessage}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Extend Window interface for speech recognition
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default ChatBot;
