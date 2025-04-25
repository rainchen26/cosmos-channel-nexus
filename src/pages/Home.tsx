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

  const petStories = [
    {
      id: 1,
      title: "相遇是最美的意外",
      description: "那是个雨天，我在街角遇见了这只浑身湿透的小猫。当时她躲在纸箱里，怯生生地望着我。带她回家后，她很快适应了新环境，现在成了我生活中不可或缺的小天使。每天回家，她都会在门口等我。",
      author: "晓月",
      pet: "橘猫 KiKi"
    },
    {
      id: 2,
      title: "陪伴是最长情的告白",
      description: "已经记不清和毛毛一起度过了多少个日日夜夜。从我高考备考的夜晚，到工作后的欢喜时光，这只忠诚的边牧一直陪在我身边。她现在已经12岁了，步伐虽然慢了，但每次看到我回家时摇尾巴的样子，依然那么温暖。",
      author: "阿杰",
      pet: "边牧 毛毛"
    },
    {
      id: 3,
      title: "生命中的小天使",
      description: "豆豆是我在动物救助站领养的兔子。当时她因为受伤被送去救助，经过精心照料后康复了。第一次见到她时，她怯生生地躲在角落，但渐渐地，她开始信任我，现在每天早上都会蹦蹦跳跳地要求摸头。看着她开心的样子，我感觉生活充满了甜。",
      author: "小林",
      pet: "垂耳兔 豆豆"
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
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>
          你分享的每段故事，都在扩建萌尾宇宙
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petStories.map((story) => (
            <Card key={story.id} className="cosmic-card overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10">
              <div className="h-52 bg-gradient-to-br from-cosmic-nebula/20 to-cosmic-accent/20"></div>
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
          ))}
        </div>
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
