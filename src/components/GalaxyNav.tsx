
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-4 py-2 rounded-full transition-all duration-300",
        isActive 
          ? "bg-cosmic-highlight/20 text-cosmic-highlight text-glow" 
          : "hover:bg-cosmic-highlight/10 text-gray-600 hover:text-cosmic-highlight"
      )}
    >
      {label}
    </Link>
  );
};

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
            <Link to="/" className="flex items-center space-x-2 relative group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/0382aeb1-1d69-4cad-8ef5-39b172da3e8c.png" 
                  alt="萌尾时空 Logo" 
                  className="w-16 h-16 object-cover mix-blend-multiply animate-float"
                />
                {/* Blue light animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
                {/* Ear animation */}
                <div className="absolute top-1 left-2 w-3 h-3 origin-bottom animate-wiggle" />
                <div className="absolute top-1 right-2 w-3 h-3 origin-bottom animate-wiggle [animation-delay:0.1s]" />
                {/* Tail animation */}
                <div className="absolute bottom-2 right-0 w-4 h-4 origin-top animate-wag" />
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <NavItem 
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  isActive={pathname === item.path}
                />
              ))}
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Navigation className="h-6 w-6" />
          </Button>
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
