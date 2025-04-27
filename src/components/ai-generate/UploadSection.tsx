import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Upload, Dog } from "lucide-react";

interface UploadSectionProps {
  handleUploadImage: (type: string) => void;
  handleStyleTabClick: (tab: string) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ handleUploadImage, handleStyleTabClick }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    handleUploadImage(type);
  };

  const ownerPhotoExamples = [
    { type: '正面照', image: '/lovable-uploads/a5a104ba-c3b5-45b5-988c-f70092379e6a.png', desc: '人物正面清晰、光线充足' },
    { type: '侧面照', image: '/lovable-uploads/34657c1c-7afe-4d18-8d7d-9db0ef60398a.png', desc: '人物侧面45度角度' },
    { type: '半身照', image: '/lovable-uploads/4ef5640c-ea32-4460-9cd2-d681f80ad5dd.png', desc: '上半身自然站立' },
    { type: '全身照', image: '/lovable-uploads/8c4ea112-0480-433c-81c9-5431bb72d4c3.png', desc: '全身自然站立' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <User className="mr-2 text-primary" />
            <h3 className="text-xl font-semibold">主人/仆人照片</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {ownerPhotoExamples.map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-secondary border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                onMouseEnter={() => setHoveredImage(`主人${item.type}`)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => handleUploadImage(`主人${item.type}`)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, `主人${item.type}`)}
              >
                {hoveredImage === `主人${item.type}` ? (
                  <img 
                    src={item.image}
                    alt={`主人${item.type}示例`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-primary/70 mb-2" />
                    <span className="text-sm mb-1">{item.type}</span>
                    <div className="text-xs text-muted-foreground px-3 text-center">
                      <p>拍摄要求：</p>
                      <p>• {item.desc}</p>
                      <p>• 光线充足均匀</p>
                      <p>• 建议尺寸：512×512px</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Dog className="mr-2 text-primary" />
            <h3 className="text-xl font-semibold">宠物照片</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div
              className="aspect-square bg-secondary border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
              onMouseEnter={() => setHoveredImage('宠物正面')}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => handleUploadImage('宠物正面照')}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, '宠物正面照')}
            >
              {hoveredImage === '宠物正面' ? (
                <img 
                  src="/lovable-uploads/f40939d6-8524-4277-b73e-fb4386a3c01b.png"
                  alt="宠物正面照示例"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-primary/70 mb-2" />
                  <span className="text-sm mb-1">正面照</span>
                  <div className="text-xs text-muted-foreground px-3 text-center">
                    <p>拍摄要求：</p>
                    <p>• 宠物清晰、光线充足</p>
                    <p>• 建议尺寸：512×512px</p>
                    <p>• 正面拍摄</p>
                  </div>
                </>
              )}
            </div>
            
            {[
              { type: '左侧面照', desc: '左侧角度拍摄' },
              { type: '右侧面照', desc: '右侧角度拍摄' },
              { type: '互动照', desc: '与主人互动照' }
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-secondary border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                onMouseEnter={() => setHoveredImage(`宠物${item.type}`)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => handleUploadImage(`宠物${item.type}`)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, `宠物${item.type}`)}
              >
                {hoveredImage === `宠物${item.type}` ? (
                  <img 
                    src={`/lovable-uploads/pet-${item.type.replace('照', '')}.png`}
                    alt={`宠物${item.type}示例`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-primary/70 mb-2" />
                    <span className="text-sm">{item.type}</span>
                    <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadSection;
