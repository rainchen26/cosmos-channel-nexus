
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import PetIP from './PetIP';

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
          : "hover:bg-cosmic-highlight/10 text-cosmic-star/80 hover:text-cosmic-star"
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
    { path: '/', label: '首页' },
    { path: '/ai-generate', label: 'AI创作' },
    { path: '/shop', label: '星际商城' },
    { path: '/community', label: '社区' },
    { path: '/member', label: '会员中心' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-cosmic-deep/40 cosmic-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-nebula-gradient flex items-center justify-center animate-glow-pulse">
                <span className="text-cosmic-star font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-cosmic-star text-glow">梦微时空</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
          
          <div className="flex items-center space-x-4">
            <PetIP className="hidden sm:block" />
            
            {/* Mobile menu button */}
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
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-3 border-t border-cosmic-accent/20 md:hidden">
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
                      : "text-cosmic-star/80 hover:bg-cosmic-highlight/10 hover:text-cosmic-star"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex justify-center mt-2">
                <PetIP />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GalaxyNav;
