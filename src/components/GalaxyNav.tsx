
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Navigation, Search, Settings, User } from "lucide-react";

const GalaxyNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = window.location.pathname;

  const navItems = [
    { path: '/', label: '萌尾时空' },
    { path: '/ai-generate', label: '萌爱镜像' },
    { path: '/shop', label: '萌趣定制' },
    { path: '/community', label: '萌迹共享' },
    { path: '/member', label: '萌星契约' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/6409303a-5e27-41a9-97ac-156c0742a982.png" 
                alt="Taily Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    pathname === item.path 
                      ? "bg-cosmic-highlight/20 text-cosmic-highlight text-glow" 
                      : "hover:bg-cosmic-highlight/10 text-gray-600 hover:text-cosmic-highlight"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-5 w-5 text-gray-600" />
            </Button>
            <Link to="/member">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Navigation className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mt-4 pb-3 border-t border-gray-100 md:hidden">
            <div className="flex flex-col space-y-3 pt-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-md",
                    pathname === item.path
                      ? "bg-cosmic-highlight/20 text-cosmic-highlight text-glow"
                      : "text-gray-600 hover:bg-cosmic-highlight/10 hover:text-cosmic-highlight"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GalaxyNav;
