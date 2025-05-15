
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpaceTime: React.FC = () => {
  const universeAreas = [
    {
      id: 1,
      title: "星河幻境",
      description: "在这里，你可以探索无尽的星际幻想，发现各种宇宙奇观。",
      image: "/lovable-uploads/0e4ae471-092f-4727-a4ac-ed29b5276dd6.png",
      link: "/universe/stellar-fantasy"
    },
    {
      id: 2,
      title: "萌宠星域",
      description: "这是所有数字宠物的家园，它们在这里生活、成长和创造故事。",
      image: "/lovable-uploads/77e20f33-02ed-47ca-aa72-16fe689dd6ad.png",
      link: "/universe/pet-realm"
    },
    {
      id: 3,
      title: "科技迷城",
      description: "高科技与未来感的完美结合，展示了AI与宠物共存的科技奇迹。",
      image: "/lovable-uploads/2c481a9d-04c5-44e6-90b6-59a4383d6dde.png",
      link: "/universe/tech-wonder"
    },
    {
      id: 4,
      title: "自然秘境",
      description: "充满神秘色彩的自然世界，宠物们在这里与自然和谐共处。",
      image: "/lovable-uploads/16bf60b0-d62c-4637-9969-78f5e5d380c4.png",
      link: "/universe/natural-realm"
    }
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
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-silver-600">萌尾时空 - 宇宙观</h1>
          <p className="text-xl max-w-3xl mx-auto text-silver-500">
            探索一个由AI创造的无限宇宙，在这里每个宠物都有自己独特的故事和命运
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {universeAreas.map((area) => (
            <Link to={area.link} key={area.id} className="group">
              <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-silver-50 border-silver-200">
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-silver-100">{area.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

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

      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-silver-600">加入萌尾宇宙探索</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-silver-500">
          创造属于你和你爱宠的独特故事，成为这个无限宇宙的一部分
        </p>
        <Button asChild className="text-lg px-10 py-5 h-auto rounded-xl bg-silver-500 hover:bg-silver-600">
          <Link to="/ai-generate">开始创作我的故事</Link>
        </Button>
      </section>
    </div>
  );
};

export default SpaceTime;
