import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AISceneCarousel from '@/components/home/AISceneCarousel';
import PetStoryCarousel from '@/components/home/PetStoryCarousel';
import FeaturesSection from '@/components/home/FeaturesSection';

const Landing: React.FC = () => {
  const aiScenes = [
    {
      id: 1,
      title: "星际奇幻猫",
      src: "/lovable-uploads/77e20f33-02ed-47ca-aa72-16fe689dd6ad.png"
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
      title: "云端精灵",
      description: "在这个梦幻般的云端世界，我的波斯猫小白就像一朵飘逸的云，它那双蓝宝石般的眼睛里藏着整个宇宙的神秘。",
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png",
      link: "/story/1"
    },
    {
      id: 2,
      title: "星际探险家",
      description: "作为深空探索队的一员，我和我忠实的伙伴雪花一起穿梭在浩瀚的宇宙中，探索未知的星际奥秘。",
      image: "/lovable-uploads/44b44d6f-c53a-419f-943b-b2e1117b3bf6.png",
      link: "/story/2"
    },
    {
      id: 3,
      title: "机甲战士",
      description: "在这个高科技的世界里，我和我的搭档小黑一起守护着城市的和平，用我们的勇气对抗每一个威胁。",
      image: "/lovable-uploads/b6c3fe70-186c-4130-bbc3-d88f8a176b41.png",
      link: "/story/3"
    },
    {
      id: 4,
      title: "花语物语",
      description: "在这个充满浪漫的花园中，我和我的马尔济斯犬珍珠共同谱写着一个关于爱与美的童话故事。",
      image: "/lovable-uploads/48d2f256-62cb-4196-85c6-3b60fcfd80db.png",
      link: "/story/4"
    },
    {
      id: 5,
      title: "太空守望者",
      description: "作为空间站的驻守员，我和小橘负责监测这片星域。在浩瀚的宇宙中，有它陪伴的时光最珍贵。",
      image: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png",
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
    dragThreshold: 0.01,
    inViewThreshold: 0.6,
    skipSnaps: true,
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

export default Landing;
