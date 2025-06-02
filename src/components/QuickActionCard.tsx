
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ icon, title, description, color, onClick }) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      onClick={onClick}
    >
      <CardHeader className="text-center pb-2">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center pt-0">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-blue-500 transition-colors"></div>
        <p className="text-xs text-gray-500 mt-2 group-hover:text-blue-600 transition-colors">
          Click for instant help
        </p>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;
