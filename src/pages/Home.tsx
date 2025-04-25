import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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
      title: "未来城市",
      src: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png"
    },
    {
      id: 10,
      title: "星际港口",
      src: "/lovable-uploads/590c094c-2856-4801-b8e9-3dd5b451f36b.png"
    }
  ];

  const petStories = [
    {
      id: 1,
      title: "星际港口巡逻队",
      description: "在这座繁忙的星际港口，我和小白已经执勤五年了。每天清晨，我都会在这片霓虹闪烁的街道上巡逻，确保来自各个星系的旅客都能安全抵达。小白那敏锐的嗅觉总能察觉到可疑的气息，它不仅是我的搭档，更是这座港口的守护者。",
      author: "港口安全官 阿辰",
      pet: "白色柯基 小白",
      image: "/lovable-uploads/590c094c-2856-4801-b8e9-3dd5b451f36b.png"
    },
    {
      id: 2,
      title: "废土探险家",
      description: "在这片荒芜的废土上，我和黑豹是最好的搭档。穿越废弃的城市，寻找文明的遗迹，感受这片土地曾经的辉煌。黑豹的夜视能力帮我们躲过了无数危险，它机敏的步伐在月光下格外优雅。每一次探险，都让我们离真相更近一步。",
      author: "遗迹考古员 夜影",
      pet: "黑猫 黑豹",
      image: "/lovable-uploads/4b0893f4-589c-4865-bad0-598de203396d.png"
    },
    {
      id: 3,
      title: "机械之心",
      description: "在这个高度机械化的世界里，萌萌是我最特别的伙伴。它的机械心脏里跳动着最真实的情感，那双闪烁着微光的眼睛总能让我感受到温暖。虽然外表看起来冰冷，但它对我的爱护比任何高科技都要真实动人。",
      author: "机械工程师 星野",
      pet: "机械猫 萌萌",
      image: "/lovable-uploads/2c481a9d-04c5-44e6-90b6-59a4383d6dde.png"
    },
    {
      id: 4,
      title: "太空守望者",
      description: "作为空间站的驻守员，我和小橘负责监测这片星域的异常。每当我工作到深夜，它总会轻轻跳上控制台，用温暖的身体提醒我该休息了。在这浩瀚的宇宙中，有它陪伴的时光是最珍贵的。",
      author: "空间站技师 云枫",
      pet: "橘猫 小橘",
      image: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png"
    },
    {
      id: 5,
      title: "新纪元探索者",
      description: "在��个充满未知的新纪元，我和灰灰踏上了寻找人类新家园的旅程。它总是第一个冲向陌生的土地，那勇敢的样子给了我无限的力量。在每一颗陌生的星球上，我们都在书写着属于自己的传奇。",
      author: "探索队长 星辰",
      pet: "哈士奇 灰灰",
      image: "/lovable-uploads/0e4ae471-092f-4727-a4ac-ed29b5276dd6.png"
    },
    {
      id: 6,
      title: "星际科研员",
      description: "在这座漂浮的科研站里，暖暖是我最忠实的研究助手。每当我在进行星际能源研究时，它总会安静地趴在实验台旁，用那双充满智慧的眼睛注视着我的工作。它不仅是我的伙伴，更是这个孤独太空站里最温暖的存在。",
      author: "首席研究员 月华",
      pet: "布偶猫 暖暖",
      image: "/lovable-uploads/d4acc7fe-1790-4729-9061-d3d8fd36ddf4.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <section className="relative">
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <img 
            src="/lovable-uploads/fb34e14e-ae7c-46e1-99c6-547bdf29c88d.png" 
            alt="柴犬与女孩在富士山下的枫叶树下" 
            className="w-full h-auto object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white text-center px-4 tracking-tight drop-shadow-lg">
              萌尾时空｜以AI之名，让爱永存
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 text-center px-4 font-light drop-shadow-md">
              让每一个AI创作都成为永恒的情感记忆
            </p>
            <Button 
              className="bg-cosmic-highlight hover:bg-cosmic-highlight/90 text-white text-lg px-12 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg shadow-cosmic-highlight/20"
              size="lg"
            >
              开启旅程
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight" style={{ color: '#7E69AB' }}>每一帧画面，都是AI留存的时光记忆</h2>
        </div>
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-4">
            {aiScenes.map((scene) => (
              <CarouselItem key={scene.id} className="pl-4 basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="relative h-[300px] group">
                  <img
                    src={scene.src}
                    alt={scene.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                    <h3 className="text-xl font-bold text-white/90">{scene.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>
      
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>
          你分享的每段故事，都在扩建萌尾宇宙
        </h2>
        
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-4">
            {petStories.map((story) => (
              <CarouselItem key={story.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="cosmic-card overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10">
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: '#7E69AB' }}>{story.title}</CardTitle>
                    <CardDescription className="text-cosmic-star/70 text-base">
                      {story.author} 与 {story.pet} 的故事
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cosmic-star/80">{story.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="hover:text-[#7E69AB]/90 hover:bg-[#7E69AB]/10"
                    >
                      阅读更多
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>
      
      <section className="mb-8">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>探索萌尾星际</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7E69AB' }}>创意工坊</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">发挥想象力，让AI帮你实现创意梦想。</p>
            <Button variant="link" className="hover:text-[#7E69AB]/90 p-0 text-lg" style={{ color: '#7E69AB' }}>开始创作 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7E69AB' }}>艺术画廊</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">探索独特的AI艺术作品，寻找灵感源泉。</p>
            <Button variant="link" className="hover:text-[#7E69AB]/90 p-0 text-lg" style={{ color: '#7E69AB' }}>去探索 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7E69AB' }}>创作者社区</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">与其他创作者分享灵感，激发创意火花。</p>
            <Button variant="link" className="hover:text-[#7E69AB]/90 p-0 text-lg" style={{ color: '#7E69AB' }}>加入我们 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7E69AB' }}>星际会员</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">解锁更多创作功能，享受专属创作体验。</p>
            <Button variant="link" className="hover:text-[#7E69AB]/90 p-0 text-lg" style={{ color: '#7E69AB' }}>了解更多 →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
