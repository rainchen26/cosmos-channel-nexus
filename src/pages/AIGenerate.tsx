
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const AIGenerate: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [creativity, setCreativity] = useState([50]);
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "提示不能为空",
        description: "请输入创作提示才能生成内容",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "生成完成",
        description: "你的AI创作已生成完毕！",
      });
    }, 3000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-cosmic-star text-glow">AI创作中心</h1>
      
      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="image">图像生成</TabsTrigger>
          <TabsTrigger value="video">视频生成</TabsTrigger>
          <TabsTrigger value="text">文本生成</TabsTrigger>
        </TabsList>
        
        <TabsContent value="image" className="space-y-6">
          <Card className="cosmic-card">
            <CardContent className="pt-6">
              <div className="mb-6">
                <Label htmlFor="image-prompt" className="text-lg mb-2 block">创作提示</Label>
                <Textarea
                  id="image-prompt"
                  placeholder="描述你想要生成的图像，例如：'一个科幻风格的宇宙城市，星光闪烁'"
                  className="h-24 bg-cosmic/50"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="creativity" className="text-lg mb-2 block">创意度: {creativity}%</Label>
                <Slider
                  id="creativity"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  value={creativity}
                  onValueChange={setCreativity}
                />
              </div>
              
              <div className="mb-6">
                <Label className="text-lg mb-2 block">风格选择</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['写实', '动漫', '油画', '科幻'].map((style) => (
                    <Button 
                      key={style} 
                      variant="outline" 
                      className="border-cosmic-accent/50 hover:border-cosmic-accent hover:bg-cosmic-accent/10"
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-cosmic-highlight hover:bg-cosmic-highlight/80"
              >
                {isGenerating ? "生成中..." : "开始生成"}
              </Button>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square cosmic-card flex items-center justify-center">
              <p className="text-cosmic-star/70">AI生成的图像将显示在这里</p>
            </div>
            <div className="aspect-square cosmic-card flex items-center justify-center">
              <p className="text-cosmic-star/70">尝试多种风格变化</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="video" className="space-y-6">
          <Card className="cosmic-card p-6">
            <h3 className="text-xl font-bold mb-4">视频生成</h3>
            <p className="mb-4">即将推出！视频生成功能正在开发中，敬请期待。</p>
          </Card>
        </TabsContent>
        
        <TabsContent value="text" className="space-y-6">
          <Card className="cosmic-card p-6">
            <h3 className="text-xl font-bold mb-4">文本生成</h3>
            <p className="mb-4">即将推出！文本生成功能正在开发中，敬请期待。</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIGenerate;
