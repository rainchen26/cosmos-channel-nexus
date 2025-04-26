
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Image, Upload } from "lucide-react";

interface StyleCategory {
  name: string;
  description: string;
  subStyles: string[];
}

interface StyleSectionProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  selectedSubStyle: string;
  handleSelectSubStyle: (subStyle: string) => void;
  handleUploadImage: (type: string) => void;
  styleCategories: StyleCategory[];
}

const StyleSection: React.FC<StyleSectionProps> = ({
  prompt,
  setPrompt,
  selectedStyle,
  setSelectedStyle,
  selectedSubStyle,
  handleSelectSubStyle,
  handleUploadImage,
  styleCategories
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Wand2 className="mr-2 h-5 w-5 text-primary" />
            A. 记忆提示
          </h3>
          <div className="space-y-4">
            <Textarea
              placeholder={`描述你想要的场景和氛围...

示例：我和我家的柴犬在星空下漫步，四周点缀着点点星光。
我穿着休闲服装，柴犬活泼可爱，正在对我撒娇。
场景氛围温馨浪漫，整体感觉略带梦幻，像是穿越银河的温柔瞬间。
画面中可以有星际穿梭的飞船掠过，给人一种未来感与浪漫的结合。

建议包含：场景描述、人物状态、宠物状态、整体氛围
建议字数50-200字，精简表达更有力！`}
              className="aspect-square bg-secondary resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Image className="mr-2 h-5 w-5 text-primary" />
            B. 上传参考风格
          </h3>
          <div 
            className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => handleUploadImage("风格参考")}
          >
            <Upload className="h-8 w-8 text-primary/70 mb-2" />
            <div className="text-sm text-center px-4">
              <p className="mb-1">上传你喜欢的风格图片</p>
              <p className="text-xs text-muted-foreground">支持jpg、png格式</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">C. 记忆风格</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">选择主题风格</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {styleCategories.map((category) => (
                <div 
                  key={category.name}
                  className={`flex flex-col gap-2 p-2 rounded-md cursor-pointer ${selectedStyle === category.name ? 'bg-secondary/80 ring-1 ring-primary' : 'hover:bg-secondary/50'}`}
                  onClick={() => setSelectedStyle(category.name)}
                >
                  <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                      <Wand2 className="h-8 w-8 text-primary/70" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium">{category.name}</h4>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">选择子风格 ({selectedStyle})</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {styleCategories.find(category => category.name === selectedStyle)?.subStyles.map((subStyle, index) => {
                const [name, description] = subStyle.split(' - ');
                return (
                  <div 
                    key={index}
                    className={`flex flex-col gap-2 p-2 rounded-md cursor-pointer ${selectedSubStyle === name ? 'bg-secondary/80 ring-1 ring-primary' : 'hover:bg-secondary/50'}`}
                    onClick={() => handleSelectSubStyle(subStyle)}
                  >
                    <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                        <Wand2 className="h-6 w-6 text-primary/60" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm">{name}</h5>
                      <p className="text-xs text-muted-foreground">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleSection;
