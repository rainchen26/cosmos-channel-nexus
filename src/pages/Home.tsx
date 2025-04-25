import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AISceneCarousel from '@/components/home/AISceneCarousel';
import PetStoryCarousel from '@/components/home/PetStoryCarousel';
import FeaturesSection from '@/components/home/FeaturesSection';

const Home: React.FC = () => {
  const aiScenes = [
    {
      id: 1,
      title: "星际奇幻猫",
      src: "/lovable-uploads/8b666a29-bc5f-4646-8542-37b358076f96.png"
    },
    {
      id: 2,
      title: "白狼女王",
      src: "/lovable-uploads/0853efba-10bf-4cd4-b461-30b5ffb28f3e.png"
    },
    {
      id: 3,
      title: "樱花猫语",
      src: "/lovable-uploads/c163dfdc-b455-48c6-8c0d-58a13acf4360.png"
    },
    {
      id: 4,
      title: "废土边境",
      src: "/lovable-uploads/2d08e2ea-29ef-4f7d-8b64-26f79e70e5c5.png"
    },
    {
      id: 5,
      title: "星际守护",
      src: "/lovable-uploads/d4acc7fe-1790-4729-9061-d3d8fd36ddf4.png"
    },
    {
      id: 6,
      title: "机械梦境",
      src: "/lovable-uploads/2c481a9d-04c5-44e6-90b6-59a4383d6dde.png"
    },
    {
      id: 7,
      title: "太空探险",
      src: "/lovable-uploads/0e4ae471-092f-4727-a4ac-ed29b5276dd6.png"
    },
    {
      id: 8,
      title: "赛博朋克",
      src: "/lovable-uploads/4b0893f4-589c-4865-bad0-598de203396d.png"
    },
    {
      id: 9,
      title: "皇家守护",
      src: "/lovable-uploads/b0a80f38-41c9-4d42-8fd4-af9168bd331a.png"
    },
    {
      id: 10,
      title: "魔法森林",
      src: "/lovable-uploads/16bf60b0-d62c-4637-9969-78f5e5d380c4.png"
    }
  ];

  const petStories = [
    {
      id: 1,
      title: "星际港口巡逻队",
      description: "在这座繁忙的星际港口，我和小白已经执勤五年了。每天清晨，确保各个星系的旅客都能安全抵达。",
      image: "/lovable-uploads/590c094c-2856-4801-b8e9-3dd5b451f36b.png",
      link: "/story/1"
    },
    {
      id: 2,
      title: "废土探险家",
      description: "在荒芜的废土上，我和黑豹穿越废弃的城市，寻找文明的遗迹，感受这片土地曾经的辉煌。",
      image: "/lovable-uploads/4b0893f4-589c-4865-bad0-598de203396d.png",
      link: "/story/2"
    },
    {
      id: 3,
      title: "机械之心",
      description: "在高度机械化的世界里，萌萌是我最特别的伙伴。它的机械心脏里跳动着最真实的情感。",
      image: "/lovable-uploads/2c481a9d-04c5-44e6-90b6-59a4383d6dde.png",
      link: "/story/3"
    },
    {
      id: 4,
      title: "太空守望者",
      description: "作为空间站的驻守员，我和小橘负责监测这片星域。在浩瀚的宇宙中，有它陪伴的时光最珍贵。",
      image: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png",
      link: "/story/4"
    },
    {
      id: 5,
      title: "新纪元探索者",
      description: "我和灰灰踏上了寻找人类新家园的旅程。在每一颗陌生的星球上，书写着属于我们的传奇。",
      image: "/lovable-uploads/0e4ae471-092f-4727-a4ac-ed29b5276dd6.png",
      link: "/story/5"
    },
    {
      id: 6,
      title: "星际科研员",
      description: "在漂浮的科研站里，暖暖是我最忠实的助手。它不仅是伙伴，更是这个孤独太空站里最温暖的存在。",
      image: "/lovable-uploads/d4acc7fe-1790-4729-9061-d3d8fd36ddf4.png",
      link: "/story/6"
    }
  ];

  const carouselOptions = {
    align: "start" as const,
    dragFree: true,
    containScroll: "trimSnaps" as const,
    draggable: true,
    dragThreshold: 0.01, // Very low threshold for easy swiping
    inViewThreshold: 0.6,
    skipSnaps: true, // For smooth scrolling like Apple's site
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <HeroSection />
      <AISceneCarousel scenes={aiScenes} carouselOptions={carouselOptions} />
      <PetStoryCarousel stories={petStories} carouselOptions={carouselOptions} />
      <FeaturesSection />
    </div>
  );
};

export default Home;
