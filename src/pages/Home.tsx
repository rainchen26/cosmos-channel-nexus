import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home: React.FC = () => {
  const aiScenes = [
    {
      id: 1,
      title: "节日限定主题",
      src: "/lovable-uploads/73bf8d29-3014-4514-a435-68aa36417fff.png"
    },
    {
      id: 2,
      title: "童话奇幻世界",
      src: "/lovable-uploads/5749ff65-040c-4fd8-8a30-463beedb1d12.png"
    },
    {
      id: 3,
      title: "复古时光机",
      src: "/lovable-uploads/88474e3d-f6ec-46a6-bb31-6e1f51ac52e6.png"
    },
    {
      id: 4,
      title: "潮流玩酷风",
      src: "/lovable-uploads/590c094c-2856-4801-b8e9-3dd5b451f36b.png"
    },
    {
      id: 5,
      title: "自然治愈系",
      src: "/lovable-uploads/0e4ae471-092f-4727-a4ac-ed29b5276dd6.png"
    },
    {
      id: 6,
      title: "家庭温馨日常",
      src: "/lovable-uploads/2bd9e07b-35b6-4fc6-a365-a0fec31e770b.png"
    },
    {
      id: 7,
      title: "运动活力派",
      src: "/lovable-uploads/ccd389c1-a51d-4dde-98f7-51d87e5e516e.png"
    },
    {
      id: 8,
      title: "职业扮演剧场",
      src: "/lovable-uploads/9e8a150e-1874-4d7c-8818-efc25da76cf3.png"
    },
    {
      id: 9,
      title: "艺术创意脑洞",
      src: "/lovable-uploads/a9d32d7a-46c7-473b-a8e8-6cc3f1ce7e69.png"
    },
    {
      id: 10,
      title: "异国风情之旅",
      src: "/lovable-uploads/4b0893f4-589c-4865-bad0-598de203396d.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="relative">
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/fb34e14e-ae7c-46e1-99c6-547bdf29c88d.png" 
            alt="柴犬与女孩在富士山下的枫叶树下" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              萌尾时空｜以AI之名，让爱永存
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
              探索无边界的宇宙创意，用AI创造属于你的星际奇观
            </p>
            <Button 
              className="bg-cosmic-highlight hover:bg-cosmic-highlight/80 text-white"
              size="lg"
            >
              进入时空
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cosmic-deep/30 rounded-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-star">AI创意展示</h2>
        <Carousel className="max-w-md mx-auto">
          <CarouselContent>
            {aiScenes.map((scene) => (
              <CarouselItem key={scene.id}>
                <div className="p-1">
                  <Card className="cosmic-card overflow-hidden">
                    <div className="relative aspect-[9/16]">
                      <img
                        src={scene.src}
                        alt={scene.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-xl font-bold text-white">{scene.title}</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-cosmic-star border-cosmic-star hover:bg-cosmic-star/10" />
          <CarouselNext className="text-cosmic-star border-cosmic-star hover:bg-cosmic-star/10" />
        </Carousel>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-star">宇宙精选</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="cosmic-card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cosmic-nebula/30 to-cosmic-accent/30"></div>
              <CardHeader>
                <CardTitle>星际探索 #{item}</CardTitle>
                <CardDescription>探索宇宙的奥秘和未知领域</CardDescription>
              </CardHeader>
              <CardContent>
                <p>这里是梦微时空的精选内容，展示了用户使用AI技术创造的奇妙作品。</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-cosmic-accent">查看详情</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-cosmic-star">梦微时空主要频道</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cosmic-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cosmic-nebula">AI创作</h3>
            <p className="mb-4">使用先进的AI技术创造令人惊叹的图像、视频和文本内容。</p>
            <Button variant="link" className="text-cosmic-nebula p-0">前往创作 →</Button>
          </div>
          
          <div className="cosmic-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cosmic-accent">星际商城</h3>
            <p className="mb-4">探索和购买由创作者制作的独特数字产品和内容。</p>
            <Button variant="link" className="text-cosmic-accent p-0">去购物 →</Button>
          </div>
          
          <div className="cosmic-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cosmic-glow">创作社区</h3>
            <p className="mb-4">加入充满创意的社区，分享你的作品并与其他创作者交流。</p>
            <Button variant="link" className="text-cosmic-glow p-0">探索社区 →</Button>
          </div>
          
          <div className="cosmic-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cosmic-highlight">会员中心</h3>
            <p className="mb-4">解锁专属内容、高级功能和提升你的创作体验。</p>
            <Button variant="link" className="text-cosmic-highlight p-0">会员详情 →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
