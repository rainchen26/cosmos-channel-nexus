
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Card } from '@/components/ui/card';

const StarBiographies: React.FC = () => {
  const { pathname } = useLocation();
  
  const subNavItems = [
    { path: '/home/timeline', label: '时空纪行' },
    { path: '/home/biographies', label: '星萌列传' },
  ];

  const petStories = [
    {
      id: 1,
      title: "云端精灵",
      description: "在这个梦幻般的云端世界，我的波斯猫小白就像一朵飘逸的云，它那双蓝宝石般的眼睛里藏着整个宇宙的神秘。",
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png",
    },
    {
      id: 2,
      title: "星际探险家",
      description: "作为深空探索队的一员，我和我忠实的伙伴雪花一起穿梭在浩瀚的宇宙中，探索未知的星际奥秘。",
      image: "/lovable-uploads/44b44d6f-c53a-419f-943b-b2e1117b3bf6.png",
    },
    {
      id: 3,
      title: "机甲战士",
      description: "在这个高科技的世界里，我和我的搭档小黑一起守护着城市的和平，用我们的勇气对抗每一个威胁。",
      image: "/lovable-uploads/b6c3fe70-186c-4130-bbc3-d88f8a176b41.png",
    },
    {
      id: 4,
      title: "花语物语",
      description: "在这个充满浪漫的花园中，我和我的马尔济斯犬珍珠共同谱写着一个关于爱与美的童话故事。",
      image: "/lovable-uploads/48d2f256-62cb-4196-85c6-3b60fcfd80db.png",
    },
    {
      id: 5,
      title: "太空守望者",
      description: "作为空间站的驻守员，我和小橘负责监测这片星域。在浩瀚的宇宙中，有它陪伴的时光最珍贵。",
      image: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png",
    },
    {
      id: 6,
      title: "星际科研员",
      description: "在漂浮的科研站里，暖暖是我最忠实的助手。它不仅是伙伴，更是这个孤独太空站里最温暖的存在。",
      image: "/lovable-uploads/d4acc7fe-1790-4729-9061-d3d8fd36ddf4.png",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
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
      
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-silver-600">星萌列传</h2>
          <p className="text-lg text-silver-500 mt-3">每个宠物都有属于自己的传奇故事</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {petStories.map((story) => (
            <Card key={story.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-silver-50 border-silver-200">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-silver-700 mb-3">{story.title}</h3>
                <p className="text-silver-600">{story.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StarBiographies;
