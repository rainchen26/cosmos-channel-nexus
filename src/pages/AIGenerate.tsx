import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import UploadSection from '@/components/ai-generate/UploadSection';
import StyleSection from '@/components/ai-generate/StyleSection';
import GenerateSection from '@/components/ai-generate/GenerateSection';
import PaymentDialog from '@/components/ai-generate/PaymentDialog';
import { styleCategories } from '@/components/ai-generate/styleCategories';

const AIGenerate: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('星际穿梭');
  const [selectedSubStyle, setSelectedSubStyle] = useState('星尘牧歌');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [currentTab, setCurrentTab] = useState('upload');

  const getProgressValue = (currentTab: string) => {
    switch (currentTab) {
      case 'upload':
        return 33;
      case 'style':
        return 66;
      case 'generate':
        return 100;
      default:
        return 0;
    }
  };

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const handleUploadImage = (type: string) => {
    toast({
      title: "上传功能",
      description: `${type}图片上传功能即将推出！`,
    });
  };

  const handleStyleTabClick = (tab: string) => {
    const element = document.querySelector(`[data-value="${tab}"]`);
    if (element instanceof HTMLElement) {
      element.click();
    }
  };

  const handleSelectSubStyle = (subStyle: string) => {
    const mainSubStyle = subStyle.split(' - ')[0];
    setSelectedSubStyle(mainSubStyle);
  };

  const handleGenerateClick = () => {
    setShowPaymentDialog(true);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentDialog(false);
    const element = document.querySelector(`[data-value="generate"]`);
    if (element instanceof HTMLElement) {
      element.click();
    }
    toast({
      title: "购买成功",
      description: "您已成功购买萌爱尾波币，开始生成您的专属记忆吧！",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3 text-primary">
          在数据星河里，为你和你的宠伴留一盏不灭的灯
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          在这里，每一个数据都是温暖的记忆，每一帧画面都是永恒的陪伴
        </p>
      </div>
      
      <Tabs defaultValue="upload" className="w-full" onValueChange={handleTabChange}>
        <div className="mb-6 space-y-2">
          <Progress value={getProgressValue(currentTab)} className="w-full h-2" />
          <div className="text-sm text-right text-muted-foreground">
            {currentTab === 'upload' && '正在上传记忆主角...'}
            {currentTab === 'style' && '正在选择记忆风格...'}
            {currentTab === 'generate' && '准备生成专属记忆...'}
          </div>
        </div>
        
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="upload">记忆主角</TabsTrigger>
          <TabsTrigger value="style">选择风格</TabsTrigger>
          <TabsTrigger value="generate">生成记忆</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <UploadSection 
            handleUploadImage={handleUploadImage}
            handleStyleTabClick={handleStyleTabClick}
          />
          
          <div className="mt-4 text-center">
            <Button 
              onClick={() => handleStyleTabClick("style")}
              className="bg-primary hover:bg-primary/90"
            >
              点击选择风格
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="style">
          <StyleSection 
            prompt={prompt}
            setPrompt={setPrompt}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            selectedSubStyle={selectedSubStyle}
            handleSelectSubStyle={handleSelectSubStyle}
            handleUploadImage={handleUploadImage}
            styleCategories={styleCategories}
          />
          
          <div className="mt-4 text-center">
            <Button 
              onClick={handleGenerateClick}
              className="bg-primary hover:bg-primary/90"
            >
              点击生成记忆
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="generate">
          <GenerateSection />
        </TabsContent>
      </Tabs>

      <PaymentDialog 
        open={showPaymentDialog}
        onOpenChange={setShowPaymentDialog}
        onConfirm={handlePaymentConfirm}
      />
    </div>
  );
};

export default AIGenerate;
