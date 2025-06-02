
export interface EmergencyResponses {
  snakeBite: string;
  burn: string;
  heartAttack: string;
  seizure: string;
  unconscious: string;
  bleeding: string;
  accident: string;
  fire: string;
  default: string;
}

export const getEmergencyResponses = (language: string): EmergencyResponses => {
  const responses = {
    en: {
      snakeBite: "🐍 **SNAKE BITE EMERGENCY:**\n\n**IMMEDIATE STEPS:**\n1. **Keep calm** and move away from the snake\n2. **Remove jewelry** near the bite before swelling\n3. **Keep the bitten limb still** and below heart level\n4. **DO NOT** cut the wound or suck the venom\n5. **Call 108** immediately for ambulance\n6. **Note the snake's appearance** if safe to do so\n\n⚠️ **DO NOT:**\n• Apply ice or tourniquet\n• Give alcohol or painkillers\n• Try to catch the snake\n\n📞 **Call 108** - Ambulance\n📍 Your location: ",
      
      burn: "🔥 **BURN INJURY TREATMENT:**\n\n**IMMEDIATE STEPS:**\n1. **Cool the burn** with clean water for 10-20 minutes\n2. **Remove** jewelry/clothing from burned area (if not stuck)\n3. **Cover** with clean, damp cloth\n4. **DO NOT** use ice, butter, or ointments\n5. **Call 108** for severe burns\n\n⚠️ **Severe burns need immediate medical attention:**\n• Burns larger than palm size\n• Burns on face, hands, feet, genitals\n• Chemical or electrical burns\n\n📞 **Call 108** - Medical Emergency\n📍 Your location: ",
      
      heartAttack: "❤️ **HEART ATTACK EMERGENCY:**\n\n**IMMEDIATE STEPS:**\n1. **Call 108** immediately\n2. **Help person sit** and rest\n3. **Loosen tight clothing**\n4. **Give aspirin** (if not allergic and conscious)\n5. **Be ready for CPR** if person becomes unconscious\n\n⚠️ **Heart Attack Signs:**\n• Chest pain/pressure\n• Pain in arm, neck, jaw\n• Shortness of breath\n• Sweating, nausea\n\n📞 **Call 108** - Emergency\n📍 Your location: ",
      
      seizure: "🧠 **SEIZURE EMERGENCY:**\n\n**IMMEDIATE STEPS:**\n1. **Keep calm** and time the seizure\n2. **Clear the area** of sharp objects\n3. **Turn person on side** (recovery position)\n4. **DO NOT** put anything in their mouth\n5. **Call 108** if seizure lasts over 5 minutes\n\n⚠️ **When to call 108:**\n• First-time seizure\n• Seizure over 5 minutes\n• Person injured during seizure\n• Difficulty breathing after\n\n📞 **Call 108** if emergency\n📍 Your location: ",
      
      unconscious: "😵 **UNCONSCIOUS PERSON:**\n\n**IMMEDIATE STEPS:**\n1. **Check responsiveness** - tap shoulders, shout\n2. **Check breathing** - look for chest movement\n3. **Call 108** immediately\n4. **Recovery position** if breathing\n5. **Start CPR** if not breathing\n\n⚠️ **CPR Steps:**\n• 30 chest compressions\n• 2 rescue breaths\n• Repeat until help arrives\n\n📞 **Call 108** - Emergency\n📍 Your location: ",
      
      bleeding: "🩸 **SEVERE BLEEDING:**\n\n**IMMEDIATE STEPS:**\n1. **Apply direct pressure** with clean cloth\n2. **Elevate** the injured area above heart\n3. **Maintain pressure** - don't remove blood-soaked cloth\n4. **Call 108** for severe bleeding\n5. **Treat for shock** - keep warm\n\n⚠️ **Signs of severe bleeding:**\n• Blood soaking through bandages\n• Bleeding won't stop\n• Person feels weak/dizzy\n\n📞 **Call 108** - Emergency\n📍 Your location: ",
      
      accident: "🚗 **ROAD ACCIDENT:**\n\n**IMMEDIATE STEPS:**\n1. **Ensure scene safety** - check for fire/traffic\n2. **Call 108** and 100 (police)\n3. **DO NOT move** seriously injured people\n4. **Control bleeding** if trained\n5. **Keep injured conscious** and talking\n\n⚠️ **Important:**\n• Turn off vehicle engines\n• Set up warning signals\n• Document the scene\n\n📞 **Call 108** - Ambulance\n📞 **Call 100** - Police\n📍 Your location: ",
      
      fire: "🔥 **FIRE EMERGENCY:**\n\n**IMMEDIATE STEPS:**\n1. **GET OUT IMMEDIATELY**\n2. **Stay low** - crawl under smoke\n3. **Feel doors** before opening\n4. **Call 101** once safe\n5. **Meet at safe spot**\n6. **Never go back inside**\n\n📞 **Call 101** - Fire Department\n📍 Your location: ",
      
      default: "🤖 **CIVI-SHIELD AI ASSISTANT**\n\nI didn't understand your specific emergency, but here's what you can do:\n\n**IMMEDIATE HELP:**\n📞 **Call 108** - All Emergencies\n📞 **Call 112** - Universal Emergency\n📞 **Call 100** - Police\n📞 **Call 101** - Fire\n📞 **Call 102** - Medical\n\nPlease describe your emergency more specifically, or use the quick reply buttons below.\n\n📍 Your location: "
    },
    hi: {
      snakeBite: "🐍 **सांप के काटने का आपातकाल:**\n\n**तत्काल कदम:**\n1. **शांत रहें** और सांप से दूर हट जाएं\n2. **गहने हटाएं** सूजन से पहले\n3. **काटे गए अंग को स्थिर** रखें और दिल के नीचे\n4. **घाव न काटें** या जहर न चूसें\n5. **108 पर कॉल करें** तुरंत\n\n📞 **108 पर कॉल करें** - एम्बुलेंस\n📍 आपका स्थान: ",
      
      burn: "🔥 **जलने की चोट का इलाज:**\n\n**तत्काल कदम:**\n1. **जले हुए हिस्से को ठंडा करें** 10-20 मिनट साफ पानी से\n2. **कपड़े/गहने हटाएं** अगर चिपके नहीं हैं\n3. **साफ, गीले कपड़े से ढकें**\n4. **बर्फ, मक्खन न लगाएं**\n5. **गंभीर जलन के लिए 108 पर कॉल करें**\n\n📞 **108 पर कॉल करें** - मेडिकल इमरजेंसी\n📍 आपका स्थान: ",
      
      heartAttack: "❤️ **दिल का दौरा आपातकाल:**\n\n**तत्काल कदम:**\n1. **108 पर तुरंत कॉल करें**\n2. **व्यक्ति को बैठाएं** और आराम दें\n3. **तंग कपड़े ढीले करें**\n4. **एस्पिरिन दें** (यदि एलर्जी नहीं है)\n5. **CPR के लिए तैयार रहें**\n\n📞 **108 पर कॉल करें** - आपातकाल\n📍 आपका स्थान: ",
      
      seizure: "🧠 **दौरे का आपातकाल:**\n\n**तत्काल कदम:**\n1. **शांत रहें** और समय नोट करें\n2. **तेज वस्तुएं हटाएं**\n3. **व्यक्ति को करवट दिलाएं**\n4. **मुंह में कुछ न डालें**\n5. **5 मिनट से ज्यादा दौरा हो तो 108 पर कॉल करें**\n\n📞 **108 पर कॉल करें**\n📍 आपका स्थान: ",
      
      unconscious: "😵 **बेहोश व्यक्ति:**\n\n**तत्काल कदम:**\n1. **होश की जांच करें**\n2. **सांस की जांच करें**\n3. **108 पर तुरंत कॉल करें**\n4. **करवट दिलाएं** अगर सांस आ रही है\n5. **CPR शुरू करें** अगर सांस नहीं\n\n📞 **108 पर कॉल करें**\n📍 आपका स्थान: ",
      
      bleeding: "🩸 **गंभीर खून बहना:**\n\n**तत्काल कदम:**\n1. **सीधा दबाव डालें** साफ कपड़े से\n2. **घायल हिस्से को ऊपर उठाएं**\n3. **दबाव बनाए रखें**\n4. **108 पर कॉल करें**\n\n📞 **108 पर कॉल करें**\n📍 आपका स्थान: ",
      
      accident: "🚗 **सड़क दुर्घटना:**\n\n**तत्काल कदम:**\n1. **सुरक्षा सुनिश्चित करें**\n2. **108 और 100 पर कॉल करें**\n3. **घायल को न हिलाएं**\n4. **खून रोकें** यदि जानते हैं\n\n📞 **108** - एम्बुलेंस\n📞 **100** - पुलिस\n📍 आपका स्थान: ",
      
      fire: "🔥 **आग का आपातकाल:**\n\n**तत्काल कदम:**\n1. **तुरंत बाहर निकलें**\n2. **नीचे रहकर रेंगें**\n3. **101 पर कॉल करें**\n4. **वापस अंदर न जाएं**\n\n📞 **101** - फायर ब्रिगेड\n📍 आपका स्थान: ",
      
      default: "🤖 **सिवि-शील्ड AI सहायक**\n\nमैं आपकी विशिष्ट आपातकाल को नहीं समझ पाया, लेकिन आप यह कर सकते हैं:\n\n**तत्काल सहायता:**\n📞 **108 पर कॉल करें** - सभी आपातकाल\n📞 **112 पर कॉल करें** - सार्वभौमिक आपातकाल\n\nकृपया अपनी आपातकाल को और विस्तार से बताएं।\n\n📍 आपका स्थान: "
    }
  };
  return responses[language as keyof typeof responses] || responses.en;
};

export const detectEmergencyIntent = (message: string): keyof EmergencyResponses => {
  const lowerMessage = message.toLowerCase();
  
  // Snake bite detection
  if (lowerMessage.includes('snake') || lowerMessage.includes('bite') || lowerMessage.includes('venom') || 
      lowerMessage.includes('सांप') || lowerMessage.includes('काटा')) {
    return 'snakeBite';
  }
  
  // Burn detection
  if (lowerMessage.includes('burn') || lowerMessage.includes('fire') || lowerMessage.includes('scald') ||
      lowerMessage.includes('जल') || lowerMessage.includes('आग')) {
    return 'burn';
  }
  
  // Heart attack detection
  if (lowerMessage.includes('heart attack') || lowerMessage.includes('chest pain') || lowerMessage.includes('cardiac') ||
      lowerMessage.includes('दिल का दौरा') || lowerMessage.includes('सीने में दर्द')) {
    return 'heartAttack';
  }
  
  // Seizure detection
  if (lowerMessage.includes('seizure') || lowerMessage.includes('convulsion') || lowerMessage.includes('epilepsy') ||
      lowerMessage.includes('दौरा') || lowerMessage.includes('मिर्गी')) {
    return 'seizure';
  }
  
  // Unconscious detection
  if (lowerMessage.includes('unconscious') || lowerMessage.includes('faint') || lowerMessage.includes('passed out') ||
      lowerMessage.includes('बेहोश') || lowerMessage.includes('गिर गया')) {
    return 'unconscious';
  }
  
  // Bleeding detection
  if (lowerMessage.includes('bleeding') || lowerMessage.includes('blood') || lowerMessage.includes('cut') ||
      lowerMessage.includes('खून') || lowerMessage.includes('कट गया')) {
    return 'bleeding';
  }
  
  // Accident detection
  if (lowerMessage.includes('accident') || lowerMessage.includes('crash') || lowerMessage.includes('collision') ||
      lowerMessage.includes('दुर्घटना') || lowerMessage.includes('टक्कर')) {
    return 'accident';
  }
  
  // Fire detection
  if (lowerMessage.includes('fire emergency') || lowerMessage.includes('building fire') ||
      lowerMessage.includes('आग लगी')) {
    return 'fire';
  }
  
  return 'default';
};
