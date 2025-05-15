
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const SpaceTimeline: React.FC = () => {
  const { pathname } = useLocation();
  
  const subNavItems = [
    { path: '/home/timeline', label: '时空纪行' },
    { path: '/home/biographies', label: '星萌列传' },
  ];

  const timelineEvents = [
    {
      year: "2023",
      title: "萌尾宇宙诞生",
      description: "我们的AI创意平台正式启动，开始探索宠物数字化的无限可能。"
    },
    {
      year: "2024",
      title: "星际探索时代",
      description: "拓展多元宇宙中的不同场景，让宠物们在更广阔的时空中冒险。"
    },
    {
      year: "2025",
      title: "互联共生纪元",
      description: "建立了跨越虚拟与现实的桥梁，实现智能宠物与真实世界的互动。"
    },
    {
      year: "2026",
      title: "宠物星系扩张",
      description: "每个宠物都拥有了自己独特的数字星系，创造无限的故事和体验。"
    }
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
      
      <section className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-silver-600">萌尾时间线</h2>
          <p className="text-lg text-silver-500 mt-3">见证萌尾宇宙的演变与发展</p>
        </div>

        <div className="relative">
          {/* Timeline stem */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-silver-200"></div>
          
          <div className="space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 !== 0 ? 'order-2' : ''}`}>
                  <div className="bg-silver-50 p-6 rounded-xl shadow-md border border-silver-200">
                    <h3 className="font-bold text-xl mb-2 text-silver-700">{event.title}</h3>
                    <p className="text-silver-600">{event.description}</p>
                  </div>
                </div>
                
                <div className="mx-auto flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-silver-300 flex items-center justify-center text-silver-800 font-bold">
                    {event.year}
                  </div>
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTimeline;
