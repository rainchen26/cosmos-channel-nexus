
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface PetIPProps {
  className?: string;
}

const PetIP: React.FC<PetIPProps> = ({ className }) => {
  const [isTalking, setIsTalking] = useState(false);
  const [message, setMessage] = useState('');

  const showMessage = (text: string) => {
    setMessage(text);
    setIsTalking(true);
    
    setTimeout(() => {
      setIsTalking(false);
    }, 5000);
  };

  return (
    <div className={cn("relative", className)}>
      {isTalking && (
        <div className="absolute -top-16 right-0 cosmic-card p-3 rounded-lg w-48 text-sm animate-float">
          <p>{message}</p>
          <div className="absolute bottom-[-8px] right-4 h-4 w-4 rotate-45 bg-cosmic-deep/40"></div>
        </div>
      )}
      
      <div 
        onClick={() => showMessage("欢迎来到梦微时空！我是你的宇宙向导。")}
        className="cursor-pointer w-16 h-16 rounded-full overflow-hidden cosmic-border animate-float"
      >
        <div className="w-full h-full bg-gradient-to-r from-cosmic-accent to-cosmic-nebula flex items-center justify-center">
          <span className="text-2xl font-bold text-cosmic-star">萌微</span>
        </div>
      </div>
    </div>
  );
};

export default PetIP;
