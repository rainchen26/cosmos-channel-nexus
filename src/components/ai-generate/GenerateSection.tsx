
import React from 'react';
import { Image, Upload, Smile } from "lucide-react";

const GenerateSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary">已生成的记忆</h3>
      
      <div>
        <div className="flex items-center mb-4">
          <Image className="mr-2 text-primary" />
          <h4 className="text-xl font-semibold">照片记忆</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/lovable-uploads/e1396faf-7584-4809-9509-28c71f909468.png",
            "/lovable-uploads/ef34d07f-9afe-4316-ba6b-67bbbe0a8d9c.png",
            "/lovable-uploads/ae92c6a1-e83e-4b8c-af6e-310edd81bd9c.png",
            "/lovable-uploads/51d5771e-e6ab-4115-a2df-e92c06153433.png",
            "/lovable-uploads/8a951067-2af8-4277-abe7-3bda9e356cc0.png",
            "/lovable-uploads/8942cfe2-f2d4-4139-8889-ae92bc2c5c52.png",
            "/lovable-uploads/30bab329-a530-481d-98c6-1d24d0e16978.png",
            "/lovable-uploads/dece4934-93f3-41c2-a501-04e43248c26a.png"
          ].map((imageSrc, i) => (
            <div 
              key={i} 
              className="aspect-square card flex items-center justify-center overflow-hidden"
            >
              {i < 2 ? (
                <img 
                  src={imageSrc} 
                  alt={`主人/仆人单独照 ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              ) : i < 4 ? (
                <img 
                  src={imageSrc} 
                  alt={`宠物单独照 ${i - 1}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={imageSrc} 
                  alt={`主人与宠物合照 ${i - 3}`} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <Upload className="mr-2 text-primary" />
          <h4 className="text-xl font-semibold">视频记忆</h4>
        </div>
        <div className="aspect-video card flex items-center justify-center">
          <p className="text-muted-foreground">AI生成的视频记忆</p>
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <Smile className="mr-2 text-primary" />
          <h4 className="text-xl font-semibold">表情包记忆</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="aspect-square card flex items-center justify-center">
              <p className="text-muted-foreground">表情包 #{i+1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateSection;
