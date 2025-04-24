
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic-star text-glow">
          欢迎来到梦微时空
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cosmic-star/90 max-w-2xl">
          探索无边界的宇宙创意，用AI创造属于你的星际奇观
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-cosmic-highlight hover:bg-cosmic-highlight/80">
            开始探索
          </Button>
          <Button variant="outline" className="border-cosmic-accent text-cosmic-accent hover:text-cosmic-accent/80 hover:bg-cosmic-accent/10">
            了解更多
          </Button>
        </div>
      </section>
      
      {/* Featured Content */}
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
      
      {/* Features */}
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
