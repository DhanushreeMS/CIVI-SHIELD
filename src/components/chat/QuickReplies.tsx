
import React from 'react';
import { Button } from "@/components/ui/button";

interface QuickReply {
  text: string;
  prompt: string;
}

interface QuickRepliesProps {
  language: string;
  onQuickReply: (prompt: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ language, onQuickReply }) => {
  const quickReplies: QuickReply[] = [
    { 
      text: language === 'hi' ? "सांप का काटना" : "Snake Bite", 
      prompt: "I've been bitten by a snake. What should I do immediately?" 
    },
    { 
      text: language === 'hi' ? "जलना" : "Burn Injury", 
      prompt: "Someone has a severe burn injury. What first aid should I give?" 
    },
    { 
      text: language === 'hi' ? "दिल का दौरा" : "Heart Attack", 
      prompt: "Someone is having chest pain and trouble breathing. Could this be a heart attack?" 
    },
    { 
      text: language === 'hi' ? "दुर्घटना" : "Accident", 
      prompt: "There's been a road accident with injuries. What should I do?" 
    },
    { 
      text: language === 'hi' ? "बेहोशी" : "Unconscious", 
      prompt: "Someone is unconscious and not responding. What should I do?" 
    },
    { 
      text: language === 'hi' ? "खून बह रहा है" : "Heavy Bleeding", 
      prompt: "Someone is bleeding heavily from a wound. How do I stop the bleeding?" 
    }
  ];

  return (
    <div className="mb-2">
      <p className="text-xs text-gray-600 mb-2">
        {language === 'hi' ? "त्वरित उत्तर:" : "Quick replies:"}
      </p>
      <div className="flex flex-wrap gap-2">
        {quickReplies.map((reply, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onQuickReply(reply.prompt)}
            className="text-xs h-8"
          >
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;
