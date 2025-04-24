import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home: React.FC = () => {
  const videoScenes = [
    {
      id: 1,
      title: "星空漫游",
      src: "/lovable-uploads/photo-1470813740244-df37b8c1edcb",
      description: "探索浩瀚星空"
    },
    {
      id: 2,
      title: "森林奇遇",
      src: "/lovable-uploads/photo-1500673922987-e212871fec22",
      description: "奇幻森林冒险"
    },
    {
      id: 3,
      title: "湖畔幻境",
      src: "/lovable-uploads/photo-1506744038136-46273834b3fb",
      description: "宁静湖畔时光"
    },
    {
      id: 4,
      title: "温馨时刻",
      src: "/lovable-uploads/photo-1721322800607-8c38375eef04",
      description: "温暖生活瞬间"
    },
    {
      id: 5,
      title: "萌宠乐园",
      src: "/lovable-uploads/photo-1582562124811-c09040d0a901",
      description: "可爱萌宠陪伴"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section 
        className="relative min-h-[600px] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/4d01be85-8cd2-487a-913f-8620523f36e7.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            萌尾时空｜以AI之名，让爱永生
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
            探索无边界的宇宙创意，用AI创造属于你的星际奇观
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-cosmic-highlight hover:bg-cosmic-highlight/80 text-white">
              开始探索
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              了解更多
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-cosmic-deep/30 rounded-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-star">AI创作展示</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {videoScenes.map((scene) => (
              <CarouselItem key={scene.id}>
                <div className="p-4">
                  <Card className="cosmic-card overflow-hidden">
                    <div className="relative h-[400px]">
                      <img
                        src={scene.src}
                        alt={scene.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-xl font-bold text-white">{scene.title}</h3>
                        <p className="text-white/80">{scene.description}</p>
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
