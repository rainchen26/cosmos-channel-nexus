
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
            "/lovable-uploads/b8a60727-980e-4ddd-a5bd-37e238fc0f9d.png",
            "/lovable-uploads/b2920a1c-845f-4c97-ba7a-bdf75675e56c.png",
            "/lovable-uploads/0d56e295-4a6c-4c22-976f-e7ae357f9166.png",
            "/lovable-uploads/0853efba-10bf-4cd4-b461-30b5ffb28f3e.png",
            "/lovable-uploads/edc9b090-f86c-48b7-af30-a5d1c5dc63ae.png",
            "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png",
            "/lovable-uploads/2eef6958-1c27-4ab2-92ab-651343bb2954.png",
            "/lovable-uploads/68d102c3-94bc-4d40-9eee-3fdf65f884fc.png"
          ].map((imageSrc, i) => (
            <div 
              key={i} 
              className="aspect-square card flex items-center justify-center overflow-hidden"
            >
              {i < 2 ? (
                <img 
                  src={imageSrc} 
                  alt={`宠物单独照 ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              ) : i < 4 ? (
                <img 
                  src={imageSrc} 
                  alt={`宠物互动照 ${i - 1}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={imageSrc} 
                  alt={`宠物互动照 ${i - 3}`} 
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
