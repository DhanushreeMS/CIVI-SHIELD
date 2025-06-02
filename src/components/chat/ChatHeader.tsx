
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { X, MapPin } from 'lucide-react';

interface ChatHeaderProps {
  language: string;
  userLocation: string;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ language, userLocation, onClose }) => {
  return (
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-lg">
            🤖 CIVI-SHIELD AI Assistant
            <Badge variant="secondary" className="bg-white/20 text-white">
              {language.toUpperCase()}
            </Badge>
          </CardTitle>
          {userLocation && (
            <div className="flex items-center gap-1 text-sm opacity-90 mt-1">
              <MapPin className="w-3 h-3" />
              Location: {userLocation}
            </div>
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 shrink-0">
          <X className="w-4 h-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;
