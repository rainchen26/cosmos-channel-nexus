
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Navigation, 
  Search, 
  Settings, 
  User, 
  ChevronDown 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const GalaxyNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHomeActive = pathname.startsWith('/home');

  const navItems = [
    { 
      path: '/home', 
      label: '萌尾时空',
      hasDropdown: true,
      dropdownItems: [
        { path: '/home/timeline', label: '时空纪行' },
        { path: '/home/biographies', label: '星萌列传' },
      ]
    },
    { path: '/ai-generate', label: '萌爱镜像' },
    { path: '/shop', label: '萌趣定制' },
    { path: '/community', label: '萌迹共享' },
    { path: '/member', label: '萌星契约' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-silver-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Logo Section - Centered at the top */}
        <div className="flex justify-center mb-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d6f604d8-ffb7-4527-871f-09ca83f596c9.png" 
              alt="Taily Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation Section - Below the logo */}
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button (Left) */}
          <div className="block md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Navigation className="h-6 w-6 text-silver-600" />
            </Button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 mx-auto">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <div 
                      className={cn(
                        "px-4 py-2 rounded-full transition-all duration-300 flex items-center cursor-pointer",
                        isHomeActive 
                          ? "bg-silver-200/70 text-silver-700 font-medium" 
                          : "hover:bg-silver-100 text-silver-600 hover:text-silver-700"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.path} asChild>
                        <Link 
                          to={dropdownItem.path}
                          className={cn(
                            "w-full px-2 py-1",
                            pathname === dropdownItem.path && "font-medium bg-silver-100"
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    pathname === item.path 
                      ? "bg-silver-200/70 text-silver-700 font-medium" 
                      : "hover:bg-silver-100 text-silver-600 hover:text-silver-700"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5 text-silver-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-5 w-5 text-silver-600" />
            </Button>
            <Link to="/member">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5 text-silver-600" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-3 border-t border-silver-200 md:hidden">
            <div className="flex flex-col space-y-3 pt-3">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path} className="space-y-2">
                    <Link 
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-2 rounded-md block font-medium",
                        isHomeActive
                          ? "bg-silver-200/70 text-silver-700"
                          : "text-silver-600 hover:bg-silver-100 hover:text-silver-700"
                      )}
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "px-4 py-1 rounded-md block",
                            pathname === dropdownItem.path
                              ? "bg-silver-100/80 text-silver-700 font-medium"
                              : "text-silver-600 hover:bg-silver-50 hover:text-silver-700"
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2 rounded-md block",
                      pathname === item.path
                        ? "bg-silver-200/70 text-silver-700 font-medium"
                        : "text-silver-600 hover:bg-silver-100 hover:text-silver-700"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GalaxyNav;
