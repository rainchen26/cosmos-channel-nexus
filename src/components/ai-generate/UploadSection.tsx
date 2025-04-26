
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Upload, Dog } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface UploadSectionProps {
  handleUploadImage: (type: string) => void;
  handleStyleTabClick: (tab: string) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ handleUploadImage, handleStyleTabClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <User className="mr-2 text-primary" />
            <h3 className="text-xl font-semibold">主人/仆人照片</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
              onClick={() => handleUploadImage('主人正面照')}>
              <Upload className="h-8 w-8 text-primary/70 mb-2" />
              <span className="text-sm mb-1">正面照</span>
              <div className="text-xs text-muted-foreground px-3 text-center">
                <p>拍摄要求：</p>
                <p>• 脸部清晰、光线充足</p>
                <p>• 建议尺寸：512×512px</p>
                <p>• 正面自然表情</p>
              </div>
            </div>
            {['左侧面照', '右侧面照', '背面照'].map((type, index) => (
              <div key={index}
                className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                onClick={() => handleUploadImage(`主人${type}`)}>
                <Upload className="h-8 w-8 text-primary/70 mb-2" />
                <span className="text-sm">{type}</span>
                <span className="text-xs text-muted-foreground mt-1">
                  {type === '左侧面照' ? '左侧90度角拍摄' :
                   type === '右侧面照' ? '右侧90度角拍摄' : '背对拍摄'}
                </span>
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
            <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
              <img 
                src="/lovable-uploads/f40939d6-8524-4277-b73e-fb4386a3c01b.png"
                alt="Sample pet photo 1"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
              <img 
                src="/lovable-uploads/73bf8d29-3014-4514-a435-68aa36417fff.png"
                alt="Sample pet photo 2"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
              <img 
                src="/lovable-uploads/c4aef956-4bb3-411e-9342-ed8bf74afb37.png"
                alt="Sample pet photo 3"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
              <img 
                src="/lovable-uploads/7a074bbd-4858-4f6a-bfb9-b48a0bf1fb18.png"
                alt="Sample pet photo 4"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadSection;
