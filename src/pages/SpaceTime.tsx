
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const SpaceTime: React.FC = () => {
  const { pathname } = useLocation();

  const subNavItems = [
    { path: '/home/timeline', label: '时空纪行' },
    { path: '/home/biographies', label: '星萌列传' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-silver-600 text-center">萌尾时空</h1>
        
        {/* Sub-navigation */}
        <div className="flex justify-center mt-6">
          <div className="bg-silver-50 rounded-full p-1 shadow-sm">
            {subNavItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300 inline-block",
                  pathname === item.path 
                    ? "bg-silver-200 text-silver-700 font-medium" 
                    : "hover:bg-silver-100 text-silver-600 hover:text-silver-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTime;
