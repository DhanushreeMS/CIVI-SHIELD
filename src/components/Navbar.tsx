
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onEmergencyClick: () => void;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  onNavigation: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEmergencyClick, currentLanguage, onLanguageChange, onNavigation }) => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // Navigation labels based on current language
  const navLabels = {
    en: { home: "Home", dashboard: "Dashboard", emergency: "Emergency", aiAssistant: "AI Assistant" },
    hi: { home: "होम", dashboard: "डैशबोर्ड", emergency: "आपातकाल", aiAssistant: "AI सहायक" },
    ta: { home: "முகப்பு", dashboard: "டாஷ்போர்டு", emergency: "அவசரநிலை", aiAssistant: "AI உதவியாளர்" },
    te: { home: "హోమ్", dashboard: "డాష్‌బోర్డ్", emergency: "అత్యవసరం", aiAssistant: "AI సహాయకుడు" },
    kn: { home: "ಮುಖ್ಯಪುಟ", dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", emergency: "ತುರ್ತುಸ್ಥಿತಿ", aiAssistant: "AI ಸಹಾಯಕ" }
  };

  const labels = navLabels[currentLanguage as keyof typeof navLabels] || navLabels.en;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CIVI-SHIELD</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => onNavigation('home')}
            >
              {labels.home}
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => onNavigation('dashboard')}
            >
              {labels.dashboard}
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => onNavigation('emergency')}
            >
              {labels.emergency}
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => onNavigation('ai-assistant')}
            >
              {labels.aiAssistant}
            </Button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  {currentLang.flag} {currentLang.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white z-50">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => onLanguageChange(language.code)}
                    className={`cursor-pointer ${currentLanguage === language.code ? 'bg-blue-50' : ''}`}
                  >
                    {language.flag} {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Emergency Button */}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white animate-pulse"
              onClick={onEmergencyClick}
            >
              🚨 {currentLanguage === 'hi' ? 'आपातकाल' : currentLanguage === 'ta' ? 'அவசரநிலை' : currentLanguage === 'te' ? 'అత్యవసరం' : currentLanguage === 'kn' ? 'ತುರ್ತುಸ್ಥಿತಿ' : 'Emergency'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
