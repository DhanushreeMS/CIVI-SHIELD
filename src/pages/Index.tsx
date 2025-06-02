
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import QuickActionCard from "@/components/QuickActionCard";
import FeatureCard from "@/components/FeatureCard";
import EmergencyContacts from "@/components/EmergencyContacts";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEmergencyContactsOpen, setIsEmergencyContactsOpen] = useState(false);
  const [chatPrompt, setChatPrompt] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Refs for smooth scrolling
  const heroRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  // Language translations
  const translations = {
    en: {
      title: "CIVI-SHIELD",
      subtitle: "AI-Powered Multilingual Emergency Response System",
      getStarted: "Get Started",
      reportEmergency: "🚨 Report Emergency",
      keyFeatures: "Key Features",
      quickActions: "Emergency Quick Actions",
      support24: "24/7 Emergency Support",
      supportDesc: "CIVI-SHIELD AI is available round the clock to assist you in any emergency situation",
      startAI: "Start AI Assistant",
      madeFor: "🇮🇳 Made for Indian Citizens"
    },
    hi: {
      title: "सिवि-शील्ड",
      subtitle: "AI-संचालित बहुभाषी आपातकालीन प्रतिक्रिया प्रणाली",
      getStarted: "शुरू करें",
      reportEmergency: "🚨 आपातकाल रिपोर्ट करें",
      keyFeatures: "मुख्य विशेषताएं",
      quickActions: "आपातकालीन त्वरित कार्य",
      support24: "24/7 आपातकालीन सहायता",
      supportDesc: "सिवि-शील्ड AI किसी भी आपातकालीन स्थिति में आपकी सहायता के लिए 24 घंटे उपलब्ध है",
      startAI: "AI सहायक शुरू करें",
      madeFor: "🇮🇳 भारतीय नागरिकों के लिए बनाया गया"
    },
    ta: {
      title: "சிவி-ஷீல்ட்",
      subtitle: "AI-இயங்கும் பன்மொழி அவசரகால மறுமொழி அமைப்பு",
      getStarted: "தொடங்குங்கள்",
      reportEmergency: "🚨 அவசரநிலையை புகாரளியுங்கள்",
      keyFeatures: "முக்கிய அம்சங்கள்",
      quickActions: "அவசரகால விரைவு நடவடிக்கைகள்",
      support24: "24/7 அவசரகால ஆதரவு",
      supportDesc: "சிவி-ஷீல்ட் AI எந்த அவசரகால சூழ்நிலையிலும் உங்களுக்கு உதவ 24 மணி நேரமும் கிடைக்கிறது",
      startAI: "AI உதவியாளரைத் தொடங்குங்கள்",
      madeFor: "🇮🇳 இந்திய குடிமக்களுக்காக உருவாக்கப்பட்டது"
    },
    te: {
      title: "సివి-షీల్డ్",
      subtitle: "AI-శక్తితో కూడిన బహుభాషా అత్యవసర ప్రతిస్పందన వ్యవస్థ",
      getStarted: "ప్రారంభించండి",
      reportEmergency: "🚨 అత్యవసరాన్ని నివేదించండి",
      keyFeatures: "ముఖ్య లక్షణాలు",
      quickActions: "అత్యవసర త్వరిత చర్యలు",
      support24: "24/7 అత్యవసర మద్దతు",
      supportDesc: "సివి-షీల్డ్ AI ఏ అత్యవసర పరిస్థితిలోనైనా మీకు సహాయం చేయడానికి 24 గంటలూ అందుబాటులో ఉంది",
      startAI: "AI సహాయకుడిని ప్రారంభించండి",
      madeFor: "🇮🇳 భారతీయ పౌరుల కోసం తయారు చేయబడింది"
    },
    kn: {
      title: "ಸಿವಿ-ಶೀಲ್ಡ್",
      subtitle: "AI-ಚಾಲಿತ ಬಹುಭಾಷಾ ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ ವ್ಯವಸ್ಥೆ",
      getStarted: "ಪ್ರಾರಂಭಿಸಿ",
      reportEmergency: "🚨 ತುರ್ತುಸ್ಥಿತಿಯನ್ನು ವರದಿ ಮಾಡಿ",
      keyFeatures: "ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳು",
      quickActions: "ತುರ್ತು ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
      support24: "24/7 ತುರ್ತು ಬೆಂಬಲ",
      supportDesc: "ಸಿವಿ-ಶೀಲ್ಡ್ AI ಯಾವುದೇ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು 24 ಗಂಟೆಗಳೂ ಲಭ್ಯವಿದೆ",
      startAI: "AI ಸಹಾಯಕವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      madeFor: "🇮🇳 ಭಾರತೀಯ ನಾಗರಿಕರಿಗಾಗಿ ತಯಾರಿಸಲಾಗಿದೆ"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.en;

  const openChatWithPrompt = (prompt: string) => {
    setChatPrompt(prompt);
    setIsChatOpen(true);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (section: string) => {
    switch (section) {
      case 'home':
        scrollToSection(heroRef);
        break;
      case 'dashboard':
        scrollToSection(dashboardRef);
        break;
      case 'emergency':
        setIsEmergencyContactsOpen(true);
        break;
      case 'ai-assistant':
        openChatWithPrompt("Hi, I need assistance. Can you help me?");
        break;
    }
  };

  const quickActions = [
    {
      icon: "🔥",
      title: currentLanguage === 'hi' ? "आग आपातकाल" : currentLanguage === 'ta' ? "தீ அவசரநிலை" : currentLanguage === 'te' ? "అగ్ని అత్యవసరం" : currentLanguage === 'kn' ? "ಬೆಂಕಿ ತುರ್ತುಸ್ಥಿತಿ" : "Fire Emergency",
      description: currentLanguage === 'hi' ? "अग्नि सुरक्षा और निकासी" : currentLanguage === 'ta' ? "தீ பாதுகாப்பு மற்றும் வெளியேற்றம்" : currentLanguage === 'te' ? "అగ్ని భద్రత మరియు తరలింపు" : currentLanguage === 'kn' ? "ಬೆಂಕಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಸ್ಥಳಾಂತರ" : "Fire safety and evacuation",
      color: "bg-red-500",
      prompt: "There's a fire in my house. What should I do immediately? Please provide step-by-step emergency instructions."
    },
    {
      icon: "🌊", 
      title: currentLanguage === 'hi' ? "बाढ़ आपातकाल" : currentLanguage === 'ta' ? "வெள்ளம் அவசரநிலை" : currentLanguage === 'te' ? "వరద అత్యవసరం" : currentLanguage === 'kn' ? "ಪ್ರವಾಹ ತುರ್ತುಸ್ಥಿತಿ" : "Flood Emergency",
      description: currentLanguage === 'hi' ? "बाढ़ प्रतिक्रिया और सुरक्षा" : currentLanguage === 'ta' ? "வெள்ள பதிலளிப்பு மற்றும் பாதுகாப்பு" : currentLanguage === 'te' ? "వరద ప్రతిస్పందన మరియు భద్రత" : currentLanguage === 'kn' ? "ಪ್ರವಾಹ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಸುರಕ್ಷತೆ" : "Flood response and safety",
      color: "bg-blue-500",
      prompt: "I'm in a flood zone and water is rising. What should I do to stay safe? Give me immediate action steps."
    },
    {
      icon: "🏥",
      title: currentLanguage === 'hi' ? "चिकित्सा आपातकाल" : currentLanguage === 'ta' ? "மருத்துவ அவசரநிலை" : currentLanguage === 'te' ? "వైద్య అత్యవసరం" : currentLanguage === 'kn' ? "ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿ" : "Medical Emergency", 
      description: currentLanguage === 'hi' ? "प्राथमिक चिकित्सा और चिकित्सा सहायता" : currentLanguage === 'ta' ? "முதலுதவி மற்றும் மருத்துவ உதவி" : currentLanguage === 'te' ? "ప్రథమ చికిత్స మరియు వైద్య సహాయం" : currentLanguage === 'kn' ? "ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯ" : "First aid and medical help",
      color: "bg-green-500",
      prompt: "Someone is bleeding heavily and needs immediate help. What first aid steps should I take right now?"
    },
    {
      icon: "👮",
      title: currentLanguage === 'hi' ? "पुलिस/सुरक्षा" : currentLanguage === 'ta' ? "காவல்துறை/பாதுகாப்பு" : currentLanguage === 'te' ? "పోలీసు/భద్రత" : currentLanguage === 'kn' ? "ಪೊಲೀಸ್/ಸುರಕ್ಷತೆ" : "Police/Safety",
      description: currentLanguage === 'hi' ? "कानूनी अधिकार और सुरक्षा" : currentLanguage === 'ta' ? "சட்ட உரிமைகள் மற்றும் பாதுகாப்பு" : currentLanguage === 'te' ? "చట్టపరమైన హక్కులు మరియు భద్రత" : currentLanguage === 'kn' ? "ಕಾನೂನು ಹಕ್ಕುಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ" : "Legal rights and safety",
      color: "bg-purple-500", 
      prompt: "I'm being harassed and need help. What are my legal rights and what should I do immediately?"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: currentLanguage === 'hi' ? "AI सहायक" : currentLanguage === 'ta' ? "AI உதவியாளர்" : currentLanguage === 'te' ? "AI సహాయకుడు" : currentLanguage === 'kn' ? "AI ಸಹಾಯಕ" : "AI Assistant",
      description: currentLanguage === 'hi' ? "हिंदी, तमिल, तेलुगु, कन्नड़, अंग्रेजी में बहुभाषी AI समर्थन" : currentLanguage === 'ta' ? "இந்தி, தமிழ், தெலுங்கு, கன்னடம், ஆங்கிலத்தில் பன்மொழி AI ஆதரவு" : currentLanguage === 'te' ? "హిందీ, తమిళ్, తెలుగు, కన్నడ, ఇంగ్లీష్‌లో బహుభాషా AI మద్దతు" : currentLanguage === 'kn' ? "ಹಿಂದಿ, ತಮಿಳು, ತೆಲುಗು, ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಬಹುಭಾಷಾ AI ಬೆಂಬಲ" : "Multilingual AI support in Hindi, Tamil, Telugu, Kannada, English"
    },
    {
      icon: "📍", 
      title: currentLanguage === 'hi' ? "स्थान-आधारित" : currentLanguage === 'ta' ? "இடம் சார்ந்த" : currentLanguage === 'te' ? "స్థాన-ఆధారిత" : currentLanguage === 'kn' ? "ಸ್ಥಳ-ಆಧಾರಿತ" : "Location-Based",
      description: currentLanguage === 'hi' ? "आपातकालीन सेवाओं के लिए वास्तविक समय स्थान ट्रैकिंग" : currentLanguage === 'ta' ? "அவசரகால சேவைகளுக்கான நிகழ்நேர இட கண்காணிப்பு" : currentLanguage === 'te' ? "అత్యవసర సేవల కోసం నిజ-సమయ స్థాన ట్రాకింగ్" : currentLanguage === 'kn' ? "ತುರ್ತು ಸೇವೆಗಳಿಗಾಗಿ ನೈಜ-ಸಮಯ ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್" : "Real-time location tracking for emergency services"
    },
    {
      icon: "⚡",
      title: currentLanguage === 'hi' ? "ऑफलाइन तैयार" : currentLanguage === 'ta' ? "ஆஃப்லைன் தயார்" : currentLanguage === 'te' ? "ఆఫ్‌లైన్ సిద్ధం" : currentLanguage === 'kn' ? "ಆಫ್‌ಲೈನ್ ಸಿದ್ಧ" : "Offline Ready", 
      description: currentLanguage === 'hi' ? "इंटरनेट कनेक्शन के बिना भी काम करता है" : currentLanguage === 'ta' ? "இணைய இணைப்பு இல்லாமலும் வேலை செய்கிறது" : currentLanguage === 'te' ? "ఇంటర్నెట్ కనెక్షన్ లేకుండా కూడా పని చేస్తుంది" : currentLanguage === 'kn' ? "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವಿಲ್ಲದೆಯೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ" : "Works even without internet connection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Navbar 
        onEmergencyClick={() => setIsEmergencyContactsOpen(true)}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onNavigation={handleNavigation}
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
            {t.madeFor}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => openChatWithPrompt("Hi, I'm new to CIVI-SHIELD. Can you guide me through how this works?")}
            >
              {t.getStarted}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => openChatWithPrompt("I need to report an emergency right now!")}
            >
              {t.reportEmergency}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={dashboardRef} className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t.keyFeatures}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section ref={featuresRef} className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t.quickActions}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <QuickActionCard 
              key={index} 
              {...action} 
              onClick={() => openChatWithPrompt(action.prompt)}
            />
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-orange-800">{t.support24}</CardTitle>
            <CardDescription className="text-orange-600">
              {t.supportDesc}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">हिंदी</Badge>
              <Badge variant="secondary">English</Badge>
              <Badge variant="secondary">தமிழ்</Badge>
              <Badge variant="secondary">తెలుగు</Badge>
              <Badge variant="secondary">ಕನ್ನಡ</Badge>
            </div>
            <Button 
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => openChatWithPrompt("Can you help me understand what to do in different emergency situations?")}
            >
              {t.startAI}
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* ChatBot Component */}
      <ChatBot 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={chatPrompt}
        language={currentLanguage}
      />

      {/* Emergency Contacts Component */}
      <EmergencyContacts 
        isOpen={isEmergencyContactsOpen}
        onClose={() => setIsEmergencyContactsOpen(false)}
      />
    </div>
  );
};

export default Index;
