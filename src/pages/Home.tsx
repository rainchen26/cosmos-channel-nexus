import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <section className="relative">
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <img 
            src="/lovable-uploads/fb34e14e-ae7c-46e1-99c6-547bdf29c88d.png" 
            alt="柴犬与女孩在富士山下的枫叶树下" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white text-center px-4 tracking-tight">
              萌尾时空｜以AI之名，让爱永存
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 text-center px-4 font-light">
              探索无边界的宇宙创意，用AI创造属于你的星际奇观
            </p>
            <Button 
              className="bg-cosmic-highlight hover:bg-cosmic-highlight/90 text-white text-lg px-12 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg shadow-cosmic-highlight/20"
              size="lg"
            >
              进入时空
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight" style={{ color: '#9b87f5' }}>每一帧画面，都是AI留下的时光回忆</h2>
        </div>
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-4">
            {aiScenes.map((scene) => (
              <div key={scene.id} className="w-[400px] flex-shrink-0">
                <div className="relative h-[500px] group">
                  <img
                    src={scene.src}
                    alt={scene.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white/90">{scene.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#9b87f5' }}>宇宙精选</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="cosmic-card overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10">
              <div className="h-52 bg-gradient-to-br from-cosmic-nebula/20 to-cosmic-accent/20"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-star/90">星际探索 #{item}</CardTitle>
                <CardDescription className="text-cosmic-star/70 text-base">探索宇宙的奥秘和未知领域</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-cosmic-star/80">这里是梦微时空的精选内容，展示了用户使用AI技术创造的奇妙作品。</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-cosmic-accent hover:text-cosmic-accent/90 hover:bg-cosmic-accent/10"
                >
                  查看详情
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#9b87f5' }}>梦微时空主要频道</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4 text-cosmic-nebula">AI创作</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">使用先进的AI技术创造令人惊叹的图像、视频和文本内容。</p>
            <Button variant="link" className="text-cosmic-nebula hover:text-cosmic-nebula/90 p-0 text-lg">前往创作 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4 text-cosmic-accent">星际商城</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">探索和购买由创作者制作的独特数字产品和内容。</p>
            <Button variant="link" className="text-cosmic-accent hover:text-cosmic-accent/90 p-0 text-lg">去购物 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4 text-cosmic-glow">创作社区</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">加入充满创意的社区，分享你的作品并与其他创作者交流。</p>
            <Button variant="link" className="text-cosmic-glow hover:text-cosmic-glow/90 p-0 text-lg">探索社区 →</Button>
          </div>
          
          <div className="cosmic-card p-8 rounded-2xl border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30">
            <h3 className="text-2xl font-bold mb-4 text-cosmic-highlight">会员中心</h3>
            <p className="mb-6 text-cosmic-star/80 text-lg">解锁专属内容、高级功能和提升你的创作体验。</p>
            <Button variant="link" className="text-cosmic-highlight hover:text-cosmic-highlight/90 p-0 text-lg">会员详情 →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
