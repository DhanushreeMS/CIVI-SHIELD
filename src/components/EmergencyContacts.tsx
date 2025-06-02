import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, X } from 'lucide-react';

interface EmergencyContactsProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const generalContacts = [
    { title: "All Emergencies", number: "112", color: "bg-red-500", textColor: "text-white" },
    { title: "Police", number: "100", color: "bg-blue-500", textColor: "text-white" },
    { title: "Fire Department", number: "101", color: "bg-orange-500", textColor: "text-white" },
    { title: "Medical / Ambulance", number: "102", color: "bg-green-500", textColor: "text-white" },
  ];

  const specialContacts = [
    { title: "Women Helpline", number: "1091", color: "bg-pink-500", textColor: "text-white" },
    { title: "Child Helpline", number: "1098", color: "bg-purple-500", textColor: "text-white" },
    { title: "Senior Citizens Helpline", number: "14567", color: "bg-teal-500", textColor: "text-white" },
  ];

  const otherContacts = [
    { title: "Disaster Management", number: "108", color: "bg-yellow-500", textColor: "text-black" },
    { title: "Cyber Crime Helpline", number: "1930", color: "bg-gray-700", textColor: "text-white" },
    { title: "Railway Emergency", number: "139", color: "bg-red-800", textColor: "text-white" },
    { title: "Traffic Helpline", number: "103", color: "bg-sky-400", textColor: "text-white" },
    { title: "Natural Disaster/NDMA", number: "1078", color: "bg-amber-700", textColor: "text-white" },
  ];

  const ContactCard = ({ title, number, color, textColor }: { title: string; number: string; color: string; textColor: string }) => (
    <Card className={`${color} ${textColor} hover:scale-105 transition-transform duration-200 cursor-pointer`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Phone size={20} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold mb-3">{number}</div>
        <Button 
          className="w-full bg-white/20 hover:bg-white/30 border border-white/40"
          onClick={() => window.open(`tel:${number}`, '_self')}
        >
          <Phone size={16} className="mr-2" />
          Call Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-red-600">🚨 Emergency Contacts</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* General Emergency */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">General Emergency</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {generalContacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </div>

          {/* Women, Children & Senior Citizens */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Women, Children & Senior Citizens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialContacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Other Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherContacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
